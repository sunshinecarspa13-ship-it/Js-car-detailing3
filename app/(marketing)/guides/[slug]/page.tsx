import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { JsonLd } from "@/components/schema/JsonLd";
import { ContentSections } from "@/components/content/ContentSections";
import { ComparisonTable } from "@/components/content/ComparisonTable";
import { FaqSection } from "@/components/content/FaqSection";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { guides, getGuide } from "@/lib/data/guides";
import { business } from "@/lib/data/business";
import { SITE_URL } from "@/lib/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata(props: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const guide = getGuide(slug);
  if (!guide) return {};

  return pageMetadata({
    title: guide.title,
    description: guide.metaDescription,
    path: `/guides/${guide.slug}`,
  });
}

export default async function GuidePage(props: PageProps<"/guides/[slug]">) {
  const { slug } = await props.params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const path = `/guides/${guide.slug}`;
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: guide.shortTitle, path },
  ];
  const otherGuides = guides.filter((g) => g.slug !== guide.slug).slice(0, 4);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}${path}#article`,
    headline: guide.title,
    description: guide.metaDescription,
    url: `${SITE_URL}${path}`,
    mainEntityOfPage: `${SITE_URL}${path}`,
    datePublished: guide.published,
    dateModified: guide.published,
    inLanguage: "en-GB",
    author: { "@id": `${SITE_URL}/#business` },
    publisher: { "@id": `${SITE_URL}/#business` },
    image: `${SITE_URL}/opengraph-image`,
    ...(guide.sources && { citation: guide.sources.map((source) => source.href) }),
  };

  const published = new Date(guide.published).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <JsonLd data={articleSchema} />
      <Breadcrumbs items={breadcrumbItems} />

      <article>
        <header className="border-b border-border py-14 sm:py-20">
          <Container className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              {guide.kind === "comparison" ? "Comparison" : "Guide"} ·{" "}
              <time dateTime={guide.published}>{published}</time>
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
              {guide.title}
            </h1>
            {/* Direct answer first — the quotable summary for snippets and AI answers. */}
            <div className="mt-6 rounded-2xl border border-border-strong bg-bg-elevated p-5">
              <p className="mb-1 text-xs font-semibold tracking-[0.2em] text-accent uppercase">Short answer</p>
              <p className="text-lg leading-relaxed text-fg">{guide.directAnswer}</p>
            </div>
          </Container>
        </header>

        <Container className="max-w-3xl space-y-14 py-16 sm:py-20">
          {guide.table && <ComparisonTable {...guide.table} />}

          <ContentSections sections={guide.sections} />

          {guide.sources && (
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-fg">Sources</h2>
              <ul className="mt-4 space-y-2">
                {guide.sources.map((source) => (
                  <li key={source.href}>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                    >
                      {source.label}
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <FaqSection title="Common questions" faqs={guide.faqs} />

          <RelatedLinks title="Related services & areas" links={guide.related} />

          <div className="rounded-3xl border border-border-strong bg-bg-elevated p-8 text-center">
            <p className="text-xl font-semibold text-fg">Rather have it done for you?</p>
            <p className="mx-auto mt-2 max-w-md text-sm text-fg-muted">
              {business.name} comes to your home or workplace — {business.hours.display.toLowerCase()}.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/book">Book your detail</Button>
              <Button href={`tel:${business.phone.href}`} variant="secondary">
                Call {business.phone.display}
              </Button>
            </div>
          </div>

          <RelatedLinks
            title="More guides"
            links={otherGuides.map((g) => ({ href: `/guides/${g.slug}`, label: g.shortTitle }))}
          />
          <p className="text-sm">
            <Link href="/guides" className="text-accent hover:underline">
              All guides →
            </Link>
          </p>
        </Container>
      </article>
    </>
  );
}
