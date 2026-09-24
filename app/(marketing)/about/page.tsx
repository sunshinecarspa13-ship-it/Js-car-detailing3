import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ShieldCheck, MapPinned, MessageCircleReply, CalendarClock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { business } from "@/lib/data/business";

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Meet JS Car Detailing Colchester — a fully insured, fully mobile car detailing service rated 5.0★ from 15 Google reviews, working across Colchester and Essex.",
  path: "/about",
});

const pillars = [
  {
    icon: ShieldCheck,
    title: "Fully insured",
    body: "Work is carried out by a fully insured mobile detailer, so you can hand over your vehicle with confidence.",
  },
  {
    icon: MapPinned,
    title: "Genuinely mobile",
    body: `Every appointment happens at your home or workplace across ${business.serviceArea.towns.join(", ")} — there's no premises to drive to.`,
  },
  {
    icon: CalendarClock,
    title: `Open ${business.trust.frequency}`,
    body: `Booking isn't limited to weekdays — ${business.name} operates ${business.trust.frequency}, starting from 8am.`,
  },
  {
    icon: MessageCircleReply,
    title: "Reviews that get a reply",
    body: business.trust.ownerReviewResponse,
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        eyebrow="About"
        title="A mobile detailer built around showing up"
        subtitle="JS Car Detailing Colchester is a fully insured, fully mobile car detailing service based at King Edward Quay in Colchester, covering Colchester, Ipswich, Clacton-on-Sea, Chelmsford, and the surrounding Essex and Suffolk areas."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-bg-elevated p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" aria-hidden />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-fg">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-fg">
              Why the review responses matter
            </h2>
            <p className="mt-4 leading-relaxed text-fg-muted">
              Anyone can collect reviews. What&apos;s harder to fake is replying to
              nearly every single one — and that&apos;s the pattern on{" "}
              <a
                href={business.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                the JS Car Detailing Colchester Google Business Profile
              </a>
              . Most reviews get a response from the owner within about a month
              of being posted — a small thing, but it&apos;s a genuine signal
              of a business that&apos;s actually paying attention, not just
              collecting star ratings.
            </p>
          </div>

          <div className="mt-16 rounded-2xl border border-border-strong bg-bg-elevated p-8 text-center sm:p-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg">
              Book your mobile detail
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-fg-muted">
              Get a quote by phone or through the contact form — appointments
              run 7 days a week from 8am.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact">Get a Quote</Button>
              <Button href={`tel:${business.phone.href}`} variant="secondary">
                Call {business.phone.display}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
