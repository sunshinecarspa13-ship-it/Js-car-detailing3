import type { Metadata } from "next";
import { ImageOff } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SheenPanel } from "@/components/ui/SheenPanel";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { services } from "@/lib/data/services";

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
        subtitle="Real photography from completed details is being added here — in the meantime, each slot below is clearly marked rather than filled with stock photos."
      />

      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <SheenPanel key={service.slug} className="aspect-[4/3] w-full">
                <div className="relative z-10 flex flex-col items-center gap-2 px-6 text-center">
                  <ImageOff className="h-6 w-6 text-fg-subtle" aria-hidden />
                  <p className="text-sm font-semibold text-fg">{service.name}</p>
                  <p className="text-xs text-fg-subtle">
                    {"{{PLACEHOLDER: before/after photo}}"}
                  </p>
                </div>
              </SheenPanel>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
