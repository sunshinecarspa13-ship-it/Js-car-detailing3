import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { business } from "@/lib/data/business";
import { serviceLinks, areaLinks, neighbourhoodLinks } from "./nav-links";

const companyLinks = [
  { href: "/book", label: "Book Online" },
  { href: "/gallery", label: "Before & After Gallery" },
  { href: "/reviews", label: "Customer Reviews" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/guides", label: "Car Care Guides" },
  { href: "/contact", label: "Contact & Quotes" },
];

const footerLink = "text-sm text-fg-muted transition-colors hover:text-accent";
const hubLink = "text-sm font-semibold text-accent transition-colors hover:text-accent-hover";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg pb-24 pt-16 lg:pb-16">
      <Container className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="flex items-center gap-3 text-base font-semibold text-fg">
            <Image
              src="/logo-round.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-full"
            />
            <span>
              JS Car Detailing <span className="text-accent">Colchester</span>
            </span>
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
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={footerLink}>
                  {link.label}
                </Link>
                {link.children && link.children.length > 0 && (
                  <ul className="mt-2 ml-1 space-y-2 border-l border-border pl-3">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className={footerLink}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Link href="/services" className={hubLink}>
                All detailing services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-fg">Areas Covered</p>
          <ul className="mt-4 space-y-2.5">
            {areaLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={footerLink}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/areas" className={hubLink}>
                All areas we cover
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-fg">Company</p>
          <ul className="mt-4 space-y-2.5">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={footerLink}>
                  {link.label}
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
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 transition-colors hover:text-accent"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              {business.address.full}
            </a>
            <p className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              {business.hours.display}
            </p>
          </address>
        </div>
      </Container>

      <Container className="mt-12 border-t border-border pt-8">
        <nav aria-labelledby="footer-neighbourhoods">
          <p id="footer-neighbourhoods" className="text-sm font-semibold text-fg">
            Mobile car detailing across{" "}
            <Link href="/areas/colchester" className="text-accent hover:text-accent-hover">
              Colchester
            </Link>
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {neighbourhoodLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={footerLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <Container className="mt-8 flex flex-col gap-4 border-t border-border pt-8 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {business.name}. All rights reserved.
        </p>
        <div className="flex gap-5">
          <a href={business.googleProfileUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            Google reviews
          </a>
          <a href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            Find us on Google Maps
          </a>
        </div>
      </Container>
    </footer>
  );
}
