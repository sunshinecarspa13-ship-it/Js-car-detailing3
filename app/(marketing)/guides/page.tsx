import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { JsonLd } from "@/components/schema/JsonLd";
import { guides } from "@/lib/data/guides";
import { SITE_URL } from "@/lib/data/site";

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Guides", path: "/guides" },
];

export const metadata: Metadata = pageMetadata({
  title: "Car Care Guides & Comparisons",
  description:
    "Car care guides from JS Car Detailing Colchester — which cleaning service you need, mobile valeting vs car washes, cloudy headlights and coastal salt air.",
  path: "/guides",
});

const groups = [
  { kind: "comparison" as const, title: "Comparisons", intro: "Side-by-side tables to help you choose." },
  { kind: "guide" as const, title: "Car care guides", intro: "Practical advice for drivers across Essex and Suffolk." },
];

export default function GuidesPage() {
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Car care guides",
    itemListElement: guides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/guides/${guide.slug}`,
      name: guide.title,
    })),
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <JsonLd data={listSchema} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        eyebrow="Guides"
        title="Car care guides & comparisons"
        subtitle="Straight answers to the questions drivers ask before booking a clean — from the team at JS Car Detailing Colchester."
      />

      <section className="py-16 sm:py-24">
        <Container className="space-y-16">
          {groups.map((group) => (
            <div key={group.kind}>
              <h2 className="text-2xl font-semibold tracking-tight text-fg">{group.title}</h2>
              <p className="mt-2 text-fg-muted">{group.intro}</p>
              <ul className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                {guides
                  .filter((guide) => guide.kind === group.kind)
                  .map((guide) => (
                    <li key={guide.slug}>
                      <Link
                        href={`/guides/${guide.slug}`}
                        className="group flex h-full flex-col rounded-2xl border border-border bg-bg-elevated p-6 transition-colors hover:border-accent/60"
                      >
                        <span className="text-lg font-semibold text-fg">{guide.title}</span>
                        <span className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">
                          {guide.metaDescription}
                        </span>
                        <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-accent">
                          Read the {guide.kind}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
