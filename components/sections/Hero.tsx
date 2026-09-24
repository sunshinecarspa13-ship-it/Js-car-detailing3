import { ShieldCheck, CalendarDays } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import Image from "next/image";
import Link from "next/link";
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
            <Button href="/book" size="lg">
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

        <Link
          href="/gallery"
          className="group relative block aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border-strong sm:aspect-[16/10] lg:aspect-[4/5]"
        >
          <Image
            src="/gallery/snow-foam-wash.jpg"
            alt="Hatchback before and during a snow foam wash by JS Car Detailing Colchester"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-bg/80 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-fg uppercase backdrop-blur">
            Before &amp; after gallery
          </span>
        </Link>
      </Container>
    </section>
  );
}
