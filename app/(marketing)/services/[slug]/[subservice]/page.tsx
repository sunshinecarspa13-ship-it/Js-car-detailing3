import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { JsonLd } from "@/components/schema/JsonLd";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { ContentSections } from "@/components/content/ContentSections";
import { ComparisonTable } from "@/components/content/ComparisonTable";
import { FaqSection } from "@/components/content/FaqSection";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { getServiceBySlug, services } from "@/lib/data/services";
import { subservices, getSubservice, getSubservicesFor } from "@/lib/data/subservices";
import { galleryPhotos, withServiceNames } from "@/lib/data/gallery";
import { guidesLinkingTo } from "@/lib/data/links";
import { areas } from "@/lib/data/areas";
import { business } from "@/lib/data/business";
import { SITE_URL } from "@/lib/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return subservices.map((s) => ({ slug: s.parent, subservice: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]/[subservice]">
): Promise<Metadata> {
  const { slug, subservice } = await props.params;
  const sub = getSubservice(slug, subservice);
  if (!sub) return {};

  return pageMetadata({
    title: `${sub.seoTitle ?? sub.name} Colchester`,
    description: sub.metaDescription,
    path: `/services/${sub.parent}/${sub.slug}`,
  });
}

export default async function SubservicePage(props: PageProps<"/services/[slug]/[subservice]">) {
  const { slug, subservice } = await props.params;
  const sub = getSubservice(slug, subservice);
  const parent = getServiceBySlug(slug);
  if (!sub || !parent) notFound();

  const path = `/services/${sub.parent}/${sub.slug}`;
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: parent.name, path: `/services/${parent.slug}` },
    { name: sub.name, path },
  ];
  const photos = withServiceNames(galleryPhotos.filter((p) => sub.photos.includes(p.src)));
  // Sibling treatments under the same parent keep the cluster tight; every
  // other sub-service is already one click away via the header and footer.
  const related = [
    ...getSubservicesFor(parent.slug)
      .filter((s) => s.slug !== sub.slug)
      .map((s) => ({ href: `/services/${s.parent}/${s.slug}`, label: s.name, description: s.metaDescription })),
    ...guidesLinkingTo(path),
    ...guidesLinkingTo(`/services/${parent.slug}`),
  ].filter((link, index, all) => all.findIndex((l) => l.href === link.href) === index);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    name: `${sub.name} | ${business.name}`,
    serviceType: sub.name,
    description: sub.directAnswer,
    url: `${SITE_URL}${path}`,
    isRelatedTo: { "@type": "Service", name: parent.name, url: `${SITE_URL}/services/${parent.slug}` },
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: areas.map((area) => ({ "@type": "City", name: area.name, sameAs: area.wikipedia })),
    image: photos.map((photo) => `${SITE_URL}${photo.src}`),
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name: `${sub.name} in Colchester`,
    description: sub.metaDescription,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}${path}#service` },
    mentions: sub.entities.map((entity) => ({
      "@type": "Thing",
      name: entity.name,
      sameAs: entity.wikipedia,
    })),
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "[data-direct-answer]"] },
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <JsonLd data={schema} />
      <JsonLd data={webPage} />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="border-b border-border py-14 sm:py-20">
        <Container>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Mobile {parent.name.toLowerCase()} · Colchester &amp; Essex
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            {sub.name} in Colchester
          </h1>
          <p data-direct-answer className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted">
            {sub.directAnswer}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`/book?service=${parent.slug}`} size="lg">
              Book {parent.name}
            </Button>
            <Button href={`tel:${business.phone.href}`} variant="secondary" size="lg">
              Call {business.phone.display}
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-14 lg:col-span-2">
            <ContentSections sections={sub.sections} />

            {photos.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold tracking-tight text-fg">{sub.name}: real results</h2>
                <p className="mt-2 text-sm text-fg-muted">Customer jobs — tap a photo to view it full size.</p>
                <div className="mt-6">
                  <GalleryGrid items={photos} layout="strip" />
                </div>
              </section>
            )}

            <section>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-fg">How it compares</h2>
              <ComparisonTable {...sub.comparison} />
            </section>

            <FaqSection title={`${sub.name} FAQs`} faqs={sub.faqs} />

            <p className="text-sm text-fg-muted">
              Further reading:{" "}
              {sub.entities.map((entity, index) => (
                <span key={entity.wikipedia}>
                  {index > 0 && " · "}
                  <a
                    href={entity.wikipedia}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1 text-accent hover:underline"
                  >
                    {entity.name} on Wikipedia
                    <ExternalLink className="h-3 w-3" aria-hidden />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </span>
              ))}
            </p>

            <RelatedLinks title="Related reading" links={related} />
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-border bg-bg-elevated p-6 lg:sticky lg:top-28">
              <p className="text-sm font-semibold text-fg">Related service: {parent.name}</p>
              <p className="mt-2 text-sm text-fg-muted">{parent.summary}</p>
              <Link
                href={`/services/${parent.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
              >
                Everything in the {parent.name.toLowerCase()} →
              </Link>
              <Button href={`/book?service=${parent.slug}`} className="mt-6 w-full">
                Book {parent.shortName}
              </Button>
              <p className="mt-6 border-t border-border pt-5 text-sm font-semibold text-fg">
                {sub.name} available in
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {areas.map((area) => (
                  <li key={area.slug}>
                    <Link href={`/areas/${area.slug}`} className="text-fg-muted transition-colors hover:text-accent">
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-border pt-5 text-sm font-semibold text-fg">Other services</p>
              <ul className="mt-3 space-y-2 text-sm">
                {services
                  .filter((s) => s.slug !== parent.slug)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="text-fg-muted transition-colors hover:text-accent">
                        {s.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
