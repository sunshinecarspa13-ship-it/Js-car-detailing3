import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { JsonLd } from "@/components/schema/JsonLd";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { FaqSection } from "@/components/content/FaqSection";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { getAreaBySlug } from "@/lib/data/areas";
import { getServiceBySlug, services } from "@/lib/data/services";
import { sublocations, getSublocation, nearestSublocations } from "@/lib/data/sublocations";
import { featuredPhotos, withServiceNames } from "@/lib/data/gallery";
import { business } from "@/lib/data/business";
import { SITE_URL } from "@/lib/data/site";

// Only verified neighbourhoods exist; anything else is a 404, never a
// generated-on-demand thin page.
export const dynamicParams = false;

export function generateStaticParams() {
  return sublocations.map((s) => ({ location: s.parent, sublocation: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/areas/[location]/[sublocation]">
): Promise<Metadata> {
  const { location, sublocation } = await props.params;
  const place = getSublocation(location, sublocation);
  if (!place) return {};

  return pageMetadata({
    title: `Mobile Car Detailing in ${place.name}, Colchester`,
    description: place.metaDescription,
    path: `/areas/${place.parent}/${place.slug}`,
  });
}

export default async function SublocationPage(props: PageProps<"/areas/[location]/[sublocation]">) {
  const { location, sublocation } = await props.params;
  const place = getSublocation(location, sublocation);
  const area = getAreaBySlug(location);
  if (!place || !area) notFound();

  const path = `/areas/${place.parent}/${place.slug}`;
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Areas We Cover", path: "/areas" },
    { name: area.name, path: `/areas/${area.slug}` },
    { name: place.name, path },
  ];
  const nearby = nearestSublocations(place);
  // Suggested services first, then the rest — so the page leads with its own angle.
  const suggestedSlugs = place.suggested.map((s) => s.service);
  const otherServices = services.filter((s) => !suggestedSlugs.includes(s.slug));
  const placeName = place.alsoCovers ? `${place.name} & ${place.alsoCovers.join(", ")}` : place.name;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    name: `Mobile car detailing in ${place.name}, Colchester`,
    serviceType: "Mobile car detailing",
    description: place.directAnswer,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: {
      "@type": "Place",
      name: `${place.name}, Colchester`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Colchester",
        postalCode: place.postcodeDistricts.join(", "),
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: place.geo.latitude,
        longitude: place.geo.longitude,
      },
      containedInPlace: { "@type": "City", name: area.name, sameAs: [area.wikipedia, area.wikidata] },
      ...(place.wikipedia && { sameAs: place.wikipedia }),
    },
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <JsonLd data={schema} />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="border-b border-border py-14 sm:py-20">
        <Container>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Colchester · {place.postcodeDistricts.join(", ")}
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            Mobile Car Detailing in {placeName}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted">{place.directAnswer}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-fg-muted">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" aria-hidden />
              {place.postcodeDistricts.join(", ")} postcode area
            </span>
            <span className="flex items-center gap-2">
              <Navigation className="h-4 w-4 text-accent" aria-hidden />
              About {place.milesFromBase} miles from our King Edward Quay base
            </span>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`/book?area=${area.slug}`} size="lg">
              Book in {place.name}
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
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-fg">About {placeName}</h2>
              <p className="mt-4 leading-relaxed text-fg-muted">{place.localContext}</p>
              {place.wikipedia && (
                <p className="mt-3 text-sm text-fg-muted">
                  Source:{" "}
                  <a
                    href={place.wikipedia}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1 text-accent hover:underline"
                  >
                    {place.name} on Wikipedia
                    <ExternalLink className="h-3 w-3" aria-hidden />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </p>
              )}
              <h3 className="mt-8 text-lg font-semibold text-fg">Detailing in {place.name}: what to know</h3>
              <p className="mt-3 leading-relaxed text-fg-muted">{place.detailingNote}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-fg">
                Popular services in {place.name}
              </h2>
              <ul className="mt-6 space-y-3">
                {place.suggested.map(({ service: slug, reason }) => {
                  const service = getServiceBySlug(slug);
                  if (!service) return null;
                  return (
                    <li key={slug}>
                      <Link
                        href={`/services/${slug}`}
                        className="group block rounded-xl border border-border bg-bg-elevated px-5 py-4 transition-colors hover:border-accent/60"
                      >
                        <span className="block text-sm font-semibold text-fg group-hover:text-accent">
                          {service.name} in {place.name}
                        </span>
                        <span className="mt-1 block text-sm text-fg-muted">{reason}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-4 text-sm text-fg-muted">
                Also available:{" "}
                {otherServices.map((service, index) => (
                  <span key={service.slug}>
                    {index > 0 && ", "}
                    <Link href={`/services/${service.slug}`} className="text-accent hover:underline">
                      {service.name.toLowerCase()}
                    </Link>
                  </span>
                ))}
                .
              </p>
            </section>

            <section>
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-2xl font-semibold tracking-tight text-fg">Recent work</h2>
                <Link href="/gallery" className="shrink-0 text-sm font-medium text-accent hover:underline">
                  Full gallery →
                </Link>
              </div>
              <div className="mt-6">
                <GalleryGrid items={withServiceNames(featuredPhotos.slice(0, 3))} layout="strip" />
              </div>
            </section>

            <FaqSection title={`${place.name} car detailing FAQs`} faqs={place.faqs} />

            <MapEmbed
              query={`${place.name}, Colchester ${place.postcodeDistricts[0]}`}
              title={`Map of ${place.name}, Colchester`}
              className="aspect-[16/9] w-full"
            />

            <RelatedLinks
              title="Nearby areas we cover"
              links={nearby.map((s) => ({
                href: `/areas/${s.parent}/${s.slug}`,
                label: `Car detailing in ${s.name}`,
                description: `${s.postcodeDistricts.join(", ")} · about ${s.milesFromBase} miles from base`,
              }))}
            />
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-border bg-bg-elevated p-6 lg:sticky lg:top-28">
              <p className="text-sm font-semibold text-fg">Book in {place.name}</p>
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
              <ul className="mt-6 space-y-2.5 border-t border-border pt-5 text-sm">
                <li>
                  <Link href={`/areas/${area.slug}`} className="text-fg-muted transition-colors hover:text-accent">
                    All of {area.name}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-fg-muted transition-colors hover:text-accent">
                    All services
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-fg-muted transition-colors hover:text-accent">
                    Frequently asked questions
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
