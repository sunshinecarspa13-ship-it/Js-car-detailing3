import { business } from "@/lib/data/business";
import { services } from "@/lib/data/services";
import { areas } from "@/lib/data/areas";
import { SITE_URL } from "@/lib/data/site";

// Follows the llms.txt spec (llmstxt.org): an H1, a short blockquote
// summary, then H2 sections of markdown links with one-line descriptions.
// Generated from the same typed data as the rest of the site, so it can
// never drift out of sync with what's shown to humans.
export const dynamic = "force-static";

export async function GET() {
  const otherTowns = business.serviceArea.towns.filter(
    (t) => t !== business.serviceArea.base
  );

  const lines = [
    `# ${business.name}`,
    "",
    `> ${business.legalCategory}, fully mobile — the team travels to the customer's home or workplace across ${business.serviceArea.base}, ${otherTowns.join(", ")}, and the surrounding Essex and Suffolk areas. Rated ${business.rating.value.toFixed(1)}/5 from ${business.rating.count} Google reviews.`,
    "",
    "## Contact",
    "",
    `- Phone: ${business.phone.display}`,
    `- Address: ${business.address.full}`,
    `- Hours: ${business.hours.display}`,
    `- [Google Business Profile](${business.googleProfileUrl}): reviews and directions`,
    "",
    "## Services",
    "",
    ...services.map(
      (s) => `- [${s.name}](${SITE_URL}/services/${s.slug}): ${s.directAnswer}`
    ),
    "",
    "## Areas covered",
    "",
    ...areas.map(
      (a) => `- [${a.name}, ${a.county}](${SITE_URL}/areas/${a.slug}): ${a.directAnswer}`
    ),
    "",
    "## More",
    "",
    `- [Reviews](${SITE_URL}/reviews): all Google reviews, quoted verbatim`,
    `- [FAQ](${SITE_URL}/faq): common questions about pricing, coverage, and booking`,
    `- [About](${SITE_URL}/about): insurance, trust signals, and how the business operates`,
    `- [Contact](${SITE_URL}/contact): request a quote`,
  ];

  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
