import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { business } from "@/lib/data/business";
import { cn } from "@/lib/utils/cn";
import { navItems, type NavGroup } from "./nav-links";
import { MobileNav } from "./MobileNav";

// Server-rendered so every menu link is in the initial HTML for crawlers.
// Dropdowns open on hover and keyboard focus with CSS only; the panels stay
// in the DOM (visibility-hidden) rather than being mounted on demand.
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="flex items-center gap-3 text-base font-semibold tracking-tight text-fg sm:text-lg"
        >
          <Image
            src="/logo-round.png"
            alt=""
            width={48}
            height={48}
            loading="eager"
            className="h-10 w-10 rounded-full sm:h-12 sm:w-12"
          />
          <span>
            JS Car Detailing
            <span className="text-accent"> Colchester</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden self-stretch lg:flex">
          <ul className="flex items-center gap-6 xl:gap-7">
            {navItems.map((item) => (
              <li key={item.href} className="group relative flex h-full items-center">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-fg-muted transition-colors hover:text-fg group-focus-within:text-fg"
                >
                  {item.label}
                  {item.groups && (
                    <ChevronDown
                      className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                      aria-hidden
                    />
                  )}
                </Link>
                {item.groups && <DropdownPanel groups={item.groups} />}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${business.phone.href}`}
            className="flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
          >
            <Phone className="h-4 w-4 text-accent" aria-hidden />
            <span className="hidden xl:inline">{business.phone.display}</span>
            <span className="sr-only xl:hidden">Call {business.phone.display}</span>
          </a>
          <Button href="/book" size="md">
            Book Now
          </Button>
        </div>

        <MobileNav items={navItems} phone={business.phone} />
      </Container>
    </header>
  );
}

const groupSize = (group: NavGroup) =>
  group.links.reduce((total, link) => total + 1 + (link.children?.length ?? 0), 0);

function DropdownPanel({ groups }: { groups: NavGroup[] }) {
  // Long groups get twice the width and flow into two columns.
  const columns = groups.map((group) => (groupSize(group) > 6 ? "2fr" : "1fr")).join(" ");
  const wide = groups.some((group) => groupSize(group) > 12);
  return (
    <div
      className={cn(
        "invisible absolute top-full left-1/2 -translate-x-1/2 opacity-0 transition-[opacity,visibility] duration-150",
        "group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
      )}
    >
      <div
        className={cn(
          "grid gap-8 rounded-2xl border border-border-strong bg-bg-elevated p-6 shadow-2xl shadow-black/50",
          wide ? "w-[44rem]" : "w-[38rem]",
        )}
        style={{ gridTemplateColumns: columns }}
      >
        {groups.map((group) => (
          <div key={group.heading}>
            <p className="text-xs font-semibold tracking-[0.15em] text-fg-subtle uppercase">
              {group.href ? (
                <Link href={group.href} className="transition-colors hover:text-accent">
                  {group.heading}
                </Link>
              ) : (
                group.heading
              )}
            </p>
            <ul className={cn("mt-3 gap-x-6", groupSize(group) > 6 ? "columns-2" : "flex flex-col")}>
              {group.links.map((link) => (
                <li key={link.href} className="break-inside-avoid">
                  <Link
                    href={link.href}
                    className="block rounded-md py-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                  {link.children && link.children.length > 0 && (
                    <ul className="mb-1 ml-3 border-l border-border pl-3">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-1 text-sm text-fg-muted transition-colors hover:text-accent"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
