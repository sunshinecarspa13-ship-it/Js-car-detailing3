import { CalendarDays, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/lib/data/business";

export function CtaBanner() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="grain relative isolate overflow-hidden rounded-3xl border border-border-strong bg-bg-elevated px-6 py-14 text-center sm:px-16 sm:py-20">
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(60% 80% at 50% 0%, rgba(212,162,76,0.14) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                Ready for your vehicle to look its best?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-fg-muted sm:text-lg">
                Get a quote in minutes — fully mobile, fully insured, 7 days a
                week across Colchester, Ipswich, Clacton-on-Sea, and Chelmsford.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/contact" size="lg">
                  <CalendarDays className="h-5 w-5" aria-hidden />
                  Get a Free Quote
                </Button>
                <Button href={`tel:${business.phone.href}`} variant="secondary" size="lg">
                  <Phone className="h-5 w-5" aria-hidden />
                  {business.phone.display}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
