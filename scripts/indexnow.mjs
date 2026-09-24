#!/usr/bin/env node
// Submits every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam,
// Naver, Yep). Google does not use IndexNow — for Google, submit the sitemap
// in Search Console instead.
//
// Usage: npm run indexnow            (all sitemap URLs)
//        npm run indexnow -- /faq /book   (specific paths only)

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://jsdetailingcolchester.co.uk").replace(/\/+$/, "");
const KEY = "f35ab2a852e4359d9f0be682bd73d9b7";
const host = new URL(SITE_URL).host;

const keyRes = await fetch(`${SITE_URL}/${KEY}.txt`);
const keyBody = keyRes.ok ? (await keyRes.text()).trim() : "";
if (keyBody !== KEY) {
  console.error(`Key file not live at ${SITE_URL}/${KEY}.txt (status ${keyRes.status}) — deploy first.`);
  process.exit(1);
}

let urlList;
const paths = process.argv.slice(2);
if (paths.length) {
  urlList = paths.map((p) => `${SITE_URL}${p.startsWith("/") ? p : `/${p}`}`);
} else {
  const sitemap = await (await fetch(`${SITE_URL}/sitemap.xml`)).text();
  urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key: KEY, keyLocation: `${SITE_URL}/${KEY}.txt`, urlList }),
});

console.log(`IndexNow: HTTP ${res.status} for ${urlList.length} URLs`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
