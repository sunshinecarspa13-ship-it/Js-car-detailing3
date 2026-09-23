import { ShieldCheck, CalendarDays } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { SheenPanel } from "@/components/ui/SheenPanel";
import { business } from "@/lib/data/business";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-fg-muted">
            <StarRating rating={business.rating.value} />
            <span>
              {business.rating.value.toFixed(1)}★ · {business.rating.count} Google reviews
            </span>
          </div>

          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            Mobile car detailing that comes to{" "}
            <span className="text-accent">you</span> in Colchester
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            {business.serviceArea.description} Fully insured, 5.0★ rated, and
            open {business.trust.frequency} — book a wash, deep clean, or
            paint protection at your home or workplace.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              <CalendarDays className="h-5 w-5" aria-hidden />
              Book Your Detail
            </Button>
            <Button href={`tel:${business.phone.href}`} variant="secondary" size="lg">
              Call {business.phone.display}
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-fg-muted">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" aria-hidden />
              Fully insured
            </span>
            <span>{business.trust.frequency}</span>
            <span>Colchester · Ipswich · Clacton-on-Sea · Chelmsford</span>
          </div>
        </div>

        <SheenPanel className="aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[4/5]">
          <div className="relative z-10 flex flex-col items-center gap-3 px-8 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-fg-subtle uppercase">
              Before &amp; after gallery
            </p>
            <p className="max-w-xs text-sm text-fg-muted">
              {"{{PLACEHOLDER: real before/after photography from the client's own work}}"}
            </p>
          </div>
        </SheenPanel>
      </Container>
    </section>
  );
}
