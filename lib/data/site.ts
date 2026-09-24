// Technical/infra constants — distinct from lib/data/business.ts (verified
// business facts). NEXT_PUBLIC_SITE_URL can override the production domain
// (e.g. for staging), but canonicals, sitemap and schema default to the live
// domain so a missing env var can never point search engines elsewhere.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jsdetailingcolchester.co.uk"
).replace(/\/+$/, "");

export const SITE_HOST = new URL(SITE_URL).host;

export const siteConfig = {
  name: "JS Car Detailing Colchester",
  tagline: "Fully mobile car detailing across Colchester, Ipswich, Clacton-on-Sea & Chelmsford",
  description:
    "JS Car Detailing Colchester is a fully insured mobile car detailing service rated 5.0★ from 15 Google reviews. Exterior wash, deep clean, interior clean, paint protection, and headlight restoration — 7 days a week, at your home or workplace across Colchester, Ipswich, Clacton-on-Sea, and Chelmsford.",
  // Search-snippet length (≤160 chars) version of `description`.
  metaDescription:
    "Fully insured mobile car detailing in Colchester, Ipswich, Clacton-on-Sea & Chelmsford. 5.0★ from 15 Google reviews. Open 7 days — we come to you.",
} as const;
