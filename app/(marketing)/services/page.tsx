import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, Sparkles, Armchair, Shield, Lightbulb, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { services } from "@/lib/data/services";
import { siteConfig } from "@/lib/data/site";

const icons = {
  droplets: Droplets,
  sparkles: Sparkles,
  armchair: Armchair,
  shield: Shield,
  lightbulb: Lightbulb,
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export const metadata: Metadata = {
  title: "Mobile Car Detailing Services",
  description:
    "Exterior wash, deep clean, interior clean, paint protection, and headlight restoration — fully mobile detailing services from JS Car Detailing Colchester.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        eyebrow="Services"
        title="Mobile detailing services, at your door"
        subtitle={`Every service is carried out by ${siteConfig.name}, fully mobile, 7 days a week — no drop-off, no waiting room.`}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = icons[service.icon];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col rounded-2xl border border-border bg-bg-elevated p-7 transition-colors hover:border-accent/60"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" aria-hidden />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-fg">{service.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {service.directAnswer}
                  </p>
                  <span className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-accent">
                    View details &amp; get a quote
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
