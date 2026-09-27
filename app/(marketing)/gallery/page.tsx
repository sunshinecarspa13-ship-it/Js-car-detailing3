import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { JsonLd } from "@/components/schema/JsonLd";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryPhotos, withServiceNames } from "@/lib/data/gallery";
import { services } from "@/lib/data/services";
import { areas } from "@/lib/data/areas";
import { business } from "@/lib/data/business";
import { SITE_URL } from "@/lib/data/site";

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
];

const description =
  "Real before-and-after photos of mobile car detailing by JS Car Detailing Colchester — snow foam washes, interior deep cleans and seat stain removal.";

export const metadata: Metadata = pageMetadata({
  title: "Before & After Gallery",
  description,
  path: "/gallery",
});

// ImageObject fields Google reads for image search credit (creator,
// creditText, copyrightNotice) plus captions for AI/visual search.
const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": `${SITE_URL}/gallery#gallery`,
  url: `${SITE_URL}/gallery`,
  name: `Before & after gallery — ${business.name}`,
  description,
  about: { "@id": `${SITE_URL}/#business` },
  image: galleryPhotos.map((photo) => ({
    "@type": "ImageObject",
    contentUrl: `${SITE_URL}${photo.src}`,
    width: photo.width,
    height: photo.height,
    name: photo.caption,
    caption: photo.alt,
    description: photo.description,
    creator: { "@id": `${SITE_URL}/#business` },
    creditText: business.name,
    copyrightNotice: `© ${business.name}`,
  })),
};

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <JsonLd data={gallerySchema} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        eyebrow="Gallery"
        title="Before & after"
        subtitle="Real results from our mobile valeting and detailing work across Colchester and Essex. Tap any photo to view it full size."
      />

      <section className="pb-16 sm:pb-24">
        <Container>
          <GalleryGrid items={withServiceNames(galleryPhotos)} layout="masonry" />

          <div className="mt-16 grid grid-cols-1 gap-8 rounded-3xl border border-border-strong bg-bg-elevated p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                Want results like these on your driveway?
              </h2>
              <p className="mt-3 text-fg-muted">
                Every job above was done at the customer&apos;s home. Book online or call{" "}
                <a href={`tel:${business.phone.href}`} className="text-accent hover:underline">
                  {business.phone.display}
                </a>{" "}
                — {business.hours.display.toLowerCase()}.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/book">Book your detail</Button>
                <Button href="/reviews" variant="secondary">
                  Read customer reviews
                </Button>
              </div>
            </div>
            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold text-fg">Explore our services</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex rounded-full border border-border-strong px-4 py-2 text-sm text-fg-muted transition-colors hover:border-accent hover:text-accent"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-fg">Areas we cover</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {areas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/areas/${area.slug}`}
                        className="inline-flex rounded-full border border-border-strong px-4 py-2 text-sm text-fg-muted transition-colors hover:border-accent hover:text-accent"
                      >
                        Detailing in {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
