import type { Metadata } from "next";
import { Phone, ShieldCheck, CalendarClock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BookingForm } from "@/components/forms/BookingForm";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { business } from "@/lib/data/business";

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Book Now", path: "/book" },
];

export const metadata: Metadata = {
  title: "Book Now",
  description:
    "Book a mobile car detailing appointment with JS Car Detailing Colchester — pick a service, date, and time, and we'll confirm your booking.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        eyebrow="Book now"
        title="Book your mobile detail"
        subtitle="Pick a service, date, and time — we'll confirm your appointment by phone or email. For anything urgent, just call."
      />

      <section className="pb-16 sm:pb-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <BookingForm />
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
                <CalendarClock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                {business.hours.display}
              </p>
              <p className="mt-4 flex items-start gap-3 text-sm text-fg-muted">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                Fully insured mobile service
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
