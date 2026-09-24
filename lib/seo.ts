import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";

// Root app/opengraph-image.tsx. Setting `openGraph` on a page replaces the
// inherited object, so the generated share image must be re-attached here.
const SHARE_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — Mobile Car Detailing`,
};

type PageSeo = {
  /** Page-specific title; the root layout template appends the brand. */
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/services". Used for canonical + og:url. */
  path: string;
  /** Use the title as-is, without the brand template (home page). */
  absoluteTitle?: boolean;
};

/**
 * Builds per-page metadata so every route gets its own canonical, Open Graph
 * and Twitter tags. Without this, child routes inherit the root layout's
 * og:title/og:url and every share looks like the home page.
 */
export function pageMetadata({ title, description, path, absoluteTitle }: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: siteConfig.name,
      url: path,
      title: fullTitle,
      description,
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [SHARE_IMAGE.url],
    },
  };
}
