import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

const photos = [
  { src: "/gallery/snow-foam-wash.jpg", width: 995, height: 1079, alt: "Grey hatchback before and during a snow foam exterior wash", caption: "Snow foam exterior wash" },
  { src: "/gallery/rear-seat-clean.jpg", width: 1080, height: 872, alt: "Rear seats before and after a deep interior clean", caption: "Rear seat deep clean" },
  { src: "/gallery/seat-stain-removal.jpg", width: 861, height: 972, alt: "Front seats before and after stain removal", caption: "Seat stain removal" },
  { src: "/gallery/smart-exterior-before-after.jpg", width: 1035, height: 880, alt: "White Smart car before and after an exterior detail", caption: "Exterior detail" },
  { src: "/gallery/smart-exterior-finish.jpg", width: 1080, height: 1569, alt: "White Smart car with a finished gloss exterior", caption: "Gloss finish" },
  { src: "/gallery/red-car-rear-interior.png", width: 243, height: 304, alt: "Red car rear interior before and after cleaning", caption: "Interior valet" },
];

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
];

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Before-and-after gallery of mobile car detailing work by JS Car Detailing Colchester.",
  alternates: { canonical: "/gallery" },
};

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
            {photos.map((photo) => (
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
