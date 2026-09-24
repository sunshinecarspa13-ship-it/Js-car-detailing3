import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { areas } from "@/lib/data/areas";
import { business } from "@/lib/data/business";

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Areas We Cover", path: "/areas" },
];

export const metadata: Metadata = pageMetadata({
  title: "Areas We Cover",
  description:
    "Mobile car detailing across Colchester, Ipswich, Clacton-on-Sea, Chelmsford and the surrounding Essex and Suffolk areas — we come to your home or workplace.",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        eyebrow="Areas we cover"
        title="Fully mobile across Essex & Suffolk"
        subtitle={business.serviceArea.description}
      />

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-border bg-bg-elevated p-6 transition-colors hover:border-accent/60"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <MapPin className="h-5 w-5 text-accent" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-base font-semibold text-fg">
                      {area.name}, {area.county}
                    </span>
                    <span className="block text-sm text-fg-subtle">
                      {area.isBase ? "Home base" : area.driveTimeFromBase}
                    </span>
                  </span>
                </span>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-fg-subtle transition-transform group-hover:translate-x-1 group-hover:text-accent"
                  aria-hidden
                />
              </Link>
            ))}
          </div>

          <MapEmbed
            query={business.googlePlusCode}
            title={`${business.name} service area map`}
            className="min-h-[320px] w-full"
          />
        </Container>
      </section>
    </>
  );
}
