import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { galleryPhotos } from "@/lib/data/gallery";


const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
];

export const metadata: Metadata = pageMetadata({
  title: "Before & After Gallery",
  description:
    "Real before-and-after photos of mobile car detailing by JS Car Detailing Colchester — snow foam washes, interior deep cleans and seat stain removal.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        eyebrow="Gallery"
        title="Before & after"
        subtitle="Real results from our mobile valeting and detailing work across Colchester and Essex."
      />

      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {galleryPhotos.map((photo) => (
              <figure
                key={photo.src}
                className="mb-5 break-inside-avoid overflow-hidden rounded-3xl border border-border-strong bg-bg-elevated"
              >
                <Image
                  src={photo.src}
                  width={photo.width}
                  height={photo.height}
                  alt={photo.alt}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full"
                />
                <figcaption className="px-5 py-3 text-sm font-semibold text-fg">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
