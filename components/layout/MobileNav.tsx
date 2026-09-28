"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { NavItem } from "./nav-links";

type Props = {
  items: NavItem[];
  phone: { href: string; display: string };
};

export function MobileNav({ items, phone }: Props) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass =
    "block rounded-lg px-3 py-2.5 text-base font-medium text-fg-muted transition-colors hover:bg-bg-elevated hover:text-fg";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-fg lg:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-bg lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {items.map((item) =>
              item.groups ? (
                <details key={item.href} className="group rounded-lg">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-fg-muted hover:bg-bg-elevated hover:text-fg [&::-webkit-details-marker]:hidden">
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden />
                  </summary>
                  <div className="space-y-4 px-3 pt-1 pb-3">
                    <Link href={item.href} onClick={close} className="block text-sm font-semibold text-accent">
                      View all {item.label.toLowerCase()}
                    </Link>
                    {item.groups.map((group) => (
                      <div key={group.heading}>
                        <p className="text-xs font-semibold tracking-[0.15em] text-fg-subtle uppercase">
                          {group.heading}
                        </p>
                        <ul className="mt-2 grid grid-cols-2 gap-x-3">
                          {group.links.flatMap((link) => [link, ...(link.children ?? [])]).map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                onClick={close}
                                className="block py-1.5 text-sm text-fg transition-colors hover:text-accent"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </details>
              ) : (
                <Link key={item.href} href={item.href} onClick={close} className={linkClass}>
                  {item.label}
                </Link>
              ),
            )}
            <a
              href={`tel:${phone.href}`}
              className="mt-2 flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium text-accent"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {phone.display}
            </a>
            <Button href="/book" className="mt-2 w-full" onClick={close}>
              Book Now
            </Button>
          </Container>
        </nav>
      )}
    </>
  );
}
