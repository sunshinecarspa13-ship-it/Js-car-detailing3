// Anti-thin-content check (run after `npm run build`): compares the <main>
// body text of prerendered pages within each page type and reports how much
// of each page's text also appears on its most similar sibling.
//
// Metric: share of a page's 5-word shingles found in the sibling page
// (containment). Target: ≤ 40% for every page, per the SEO brief. Exits 1 if
// any page exceeds it, so it can gate a deploy.
//
//   node scripts/uniqueness.mjs
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const APP = join(process.cwd(), ".next/server/app");
const LIMIT = 0.4;

// The data files are TypeScript and the build has already validated them,
// so read slugs/parents with a regex instead of executing TS here.
function readEntries(name) {
  const source = readFileSync(join(process.cwd(), `lib/data/${name}.ts`), "utf8");
  const slugs = [...source.matchAll(/^\s{4}slug: "([^"]+)",/gm)].map((m) => m[1]);
  const parents = [...source.matchAll(/^\s{4}parent: "([^"]+)",/gm)].map((m) => m[1]);
  return slugs.map((slug, i) => ({ slug, parent: parents[i] }));
}

const groups = {
  "Area pillars": readEntries("areas").map((a) => `areas/${a.slug}`),
  "Colchester neighbourhoods": readEntries("sublocations").map((s) => `areas/${s.parent}/${s.slug}`),
  "Service pillars": readEntries("services").map((s) => `services/${s.slug}`),
  "Sub-services": readEntries("subservices").map((s) => `services/${s.parent}/${s.slug}`),
  Guides: readEntries("guides").map((g) => `guides/${g.slug}`),
};

function mainText(route) {
  const file = join(APP, `${route}.html`);
  if (!existsSync(file)) throw new Error(`Not prerendered: ${route} — run npm run build first`);
  const html = readFileSync(file, "utf8");
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? html;
  return main
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<nav[\s\S]*?<\/nav>/g, " ") // breadcrumbs
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .toLowerCase()
    .replace(/[^a-z0-9£' ]+/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function shingles(words, n = 5) {
  const set = new Set();
  for (let i = 0; i + n <= words.length; i++) set.add(words.slice(i, i + n).join(" "));
  return set;
}

let failed = false;
for (const [group, routes] of Object.entries(groups)) {
  const pages = routes.map((route) => {
    const words = mainText(route);
    return { route, words: words.length, set: shingles(words) };
  });
  console.log(`\n${group}`);
  for (const page of pages) {
    let worst = { overlap: 0, route: "—" };
    for (const other of pages) {
      if (other === page) continue;
      let shared = 0;
      for (const s of page.set) if (other.set.has(s)) shared++;
      const overlap = shared / page.set.size;
      if (overlap > worst.overlap) worst = { overlap, route: other.route };
    }
    const flag = worst.overlap > LIMIT ? "  ✗ OVER LIMIT" : "";
    if (flag) failed = true;
    console.log(
      `  ${page.route.padEnd(52)} ${String(page.words).padStart(5)} words  ` +
        `${(worst.overlap * 100).toFixed(0).padStart(3)}% shared with ${worst.route}${flag}`
    );
  }
}

console.log(failed ? `\nSome pages share more than ${LIMIT * 100}% of their text.` : `\nAll pages ≤ ${LIMIT * 100}% shared.`);
process.exit(failed ? 1 : 0);
