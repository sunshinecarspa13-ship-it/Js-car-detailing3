import type { Metadata } from "next";
import { Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { ContactForm } from "@/components/forms/ContactForm";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { business } from "@/lib/data/business";

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export const metadata: Metadata = {
  title: "Contact & Get a Quote",
  description:
    "Get a quote from JS Car Detailing Colchester — call +44 7778 902278 or send an enquiry. Fully mobile, 7 days a week, across Colchester, Ipswich, Clacton-on-Sea and Chelmsford.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        eyebrow="Contact"
        title="Get a quote"
        subtitle="Tell us about your vehicle and where you are, and we'll get back to you with a quote — or call directly for a faster answer."
      />

      <section className="pb-16 sm:pb-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-bg-elevated p-6">
              <a
                href={`tel:${business.phone.href}`}
                className="flex items-start gap-3 text-sm font-medium text-fg transition-colors hover:text-accent"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                {business.phone.display}
              </a>
              <p className="mt-4 flex items-start gap-3 text-sm text-fg-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                {business.address.full}
              </p>
              <p className="mt-4 flex items-start gap-3 text-sm text-fg-muted">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                {business.hours.display}
              </p>
              <p className="mt-4 flex items-start gap-3 text-sm text-fg-muted">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                Fully insured mobile service
              </p>
            </div>

            <MapEmbed
              query={business.googlePlusCode}
              title={`${business.name} location`}
              className="aspect-square w-full"
            />
          </aside>
        </Container>
      </section>
    </>
  );
}
