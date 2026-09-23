// Technical/infra constants — distinct from lib/data/business.ts (verified
// business facts). The production domain has not been supplied by the
// client; swap NEXT_PUBLIC_SITE_URL before launch.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jscardetailingcolchester.co.uk";

export const SITE_URL_IS_PLACEHOLDER = !process.env.NEXT_PUBLIC_SITE_URL;

export const siteConfig = {
  name: "JS Car Detailing Colchester",
  tagline: "Fully mobile car detailing across Colchester, Ipswich, Clacton-on-Sea & Chelmsford",
  description:
    "JS Car Detailing Colchester is a fully insured mobile car detailing service rated 5.0★ from 15 Google reviews. Exterior wash, deep clean, interior clean, paint protection, and headlight restoration — 7 days a week, at your home or workplace across Colchester, Ipswich, Clacton-on-Sea, and Chelmsford.",
} as const;
