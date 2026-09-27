import { guides } from "./guides";
import type { RelatedLink } from "@/components/content/RelatedLinks";

/** Guides that link to `href` — used to link back from service/area pages. */
export function guidesLinkingTo(href: string): RelatedLink[] {
  return guides
    .filter((guide) => guide.related.some((link) => link.href === href))
    .map((guide) => ({
      href: `/guides/${guide.slug}`,
      label: guide.shortTitle,
      description: guide.metaDescription,
    }));
}
