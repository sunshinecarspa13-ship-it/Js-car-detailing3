import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { areas, getAreaBySlug } from "@/lib/data/areas";
import { services } from "@/lib/data/services";
import { business } from "@/lib/data/business";
import { featuredPhotos, withServiceNames } from "@/lib/data/gallery";
import { SITE_URL } from "@/lib/data/site";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { JsonLd } from "@/components/schema/JsonLd";

export function generateStaticParams() {
  return areas.map((area) => ({ location: area.slug }));
}

export async function generateMetadata(
  props: PageProps<"/areas/[location]">
): Promise<Metadata> {
  const { location } = await props.params;
  const area = getAreaBySlug(location);
  if (!area) return {};

  return pageMetadata({
    title: `Mobile Car Detailing in ${area.name}`,
    description: area.metaDescription,
    path: `/areas/${area.slug}`,
  });
}

export default async function AreaPage(props: PageProps<"/areas/[location]">) {
  const { location } = await props.params;
  const area = getAreaBySlug(location);
  if (!area) notFound();

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Areas We Cover", path: "/areas" },
    { name: area.name, path: `/areas/${area.slug}` },
  ];

  const otherAreas = areas.filter((a) => a.slug !== area.slug);

  // Area-specific service entity tied to the main business node; the City's
  // sameAs pins the place to an unambiguous Wikipedia/Wikidata entity.
  const areaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/areas/${area.slug}#service`,
    name: `Mobile car detailing in ${area.name}`,
    serviceType: "Mobile car detailing",
    description: area.directAnswer,
    url: `${SITE_URL}/areas/${area.slug}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: { "@type": "AdministrativeArea", name: area.county },
      sameAs: [area.wikipedia, area.wikidata],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Detailing services in ${area.name}`,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: `${SITE_URL}/services/${service.slug}`,
        },
      })),
    },
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <JsonLd data={areaSchema} />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="border-b border-border py-14 sm:py-20">
        <Container>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            Mobile Car Detailing in {area.name}
          </h1>
          {/* Direct answer first — self-contained for snippets / AI Overviews. */}
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted">
            {area.directAnswer}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-fg-muted">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" aria-hidden />
              {area.county}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" aria-hidden />
              {area.isBase ? "Home base — no travel time" : area.driveTimeFromBase}
            </span>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`/book?area=${area.slug}`} size="lg">
              Book in {area.name}
            </Button>
            <Button href={`tel:${business.phone.href}`} variant="secondary" size="lg">
              Call {business.phone.display}
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight text-fg">
              Detailing in {area.name}
            </h2>
            <p className="mt-4 leading-relaxed text-fg-muted">{area.localContext}</p>
            <p className="mt-4 leading-relaxed text-fg-muted">{area.servicesNote}</p>
            <p className="mt-4 text-sm text-fg-muted">
              More about {area.name}:{" "}
              <a
                href={area.wikipedia}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1 text-accent hover:underline"
              >
                {area.name} on Wikipedia
                <ExternalLink className="h-3 w-3" aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </p>

            <h3 className="mt-10 text-lg font-semibold text-fg">
              Services available in {area.name}
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center justify-between rounded-xl border border-border bg-bg-elevated px-4 py-3.5 text-sm text-fg-muted transition-colors hover:border-accent/60 hover:text-fg"
                  >
                    {service.name} in {area.name}
                    <ArrowRight
                      className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-accent"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <MapEmbed
                query={area.isBase ? business.googlePlusCode : `${area.name}, ${area.county}, UK`}
                title={`Map of ${area.name}`}
                className="aspect-[16/9] w-full"
              />
            </div>

            <div className="mt-14 flex items-baseline justify-between gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-fg">Recent work</h2>
              <Link href="/gallery" className="shrink-0 text-sm font-medium text-accent hover:underline">
                Full gallery →
              </Link>
            </div>
            <p className="mt-2 text-sm text-fg-muted">
              The same mobile service we bring to {area.name} — real customer jobs, done on
              the driveway.
            </p>
            <div className="mt-6">
              <GalleryGrid items={withServiceNames(featuredPhotos.slice(0, 3))} layout="strip" />
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-border bg-bg-elevated p-6">
              <p className="text-sm font-semibold text-fg">Other areas we cover</p>
              <ul className="mt-4 space-y-2.5">
                {otherAreas.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/areas/${a.slug}`}
                      className="text-sm text-fg-muted transition-colors hover:text-accent"
                    >
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-bg-elevated p-6">
              <p className="text-sm font-semibold text-fg">Book in {area.name}</p>
              <p className="mt-2 text-sm text-fg-muted">
                {business.hours.display}. Rated {business.rating.value.toFixed(1)}★ from{" "}
                <Link href="/reviews" className="text-accent hover:underline">
                  {business.rating.count} Google reviews
                </Link>
                .
              </p>
              <Button href={`/book?area=${area.slug}`} className="mt-5 w-full">
                Book your detail
              </Button>
              <ul className="mt-5 space-y-2.5 text-sm">
                <li>
                  <Link href="/faq" className="text-fg-muted transition-colors hover:text-accent">
                    Frequently asked questions
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-fg-muted transition-colors hover:text-accent">
                    Ask for a free quote
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
