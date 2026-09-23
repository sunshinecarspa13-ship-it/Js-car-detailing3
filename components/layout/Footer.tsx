import Link from "next/link";
import { MapPin, Phone, Clock, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { business } from "@/lib/data/business";
import { services } from "@/lib/data/services";
import { areas } from "@/lib/data/areas";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg pb-24 pt-16 lg:pb-16">
      <Container className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-base font-semibold text-fg">
            JS Car Detailing <span className="text-accent">Colchester</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted">
            {business.serviceArea.description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-fg-muted">
            <ShieldCheck className="h-4 w-4 shrink-0 text-accent" aria-hidden />
            Fully insured · {business.trust.ratingHeadline}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-fg">Services</p>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-fg-muted transition-colors hover:text-accent"
                >
                  {service.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-fg">Areas Covered</p>
          <ul className="mt-4 space-y-2.5">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="text-sm text-fg-muted transition-colors hover:text-accent"
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-fg">Contact</p>
          <address className="mt-4 space-y-3 text-sm not-italic text-fg-muted">
            <a
              href={`tel:${business.phone.href}`}
              className="flex items-start gap-2.5 transition-colors hover:text-accent"
            >
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              {business.phone.display}
            </a>
            <p className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              {business.address.full}
            </p>
            <p className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              {business.hours.display}
            </p>
          </address>
        </div>
      </Container>

      <Container className="mt-12 flex flex-col gap-4 border-t border-border pt-8 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {business.name}. All rights reserved.
        </p>
        <a href={business.googleProfileUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
          View on Google
        </a>
      </Container>
    </footer>
  );
}
