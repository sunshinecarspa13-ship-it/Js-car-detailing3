"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { business } from "@/lib/data/business";
import { navLinks } from "./nav-links";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="flex items-center gap-3 text-base font-semibold tracking-tight text-fg sm:text-lg"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-round.png"
            alt=""
            width={48}
            height={48}
            priority
            className="h-10 w-10 rounded-full sm:h-12 sm:w-12"
          />
          <span>
            JS Car Detailing
            <span className="text-accent"> Colchester</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-fg-muted transition-colors hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${business.phone.href}`}
            className="flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
          >
            <Phone className="h-4 w-4 text-accent" aria-hidden />
            {business.phone.display}
          </a>
          <Button href="/book" size="md">
            Book Now
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-fg lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-border bg-bg lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-fg-muted transition-colors hover:bg-bg-elevated hover:text-fg"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${business.phone.href}`}
              className="mt-2 flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium text-accent"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {business.phone.display}
            </a>
            <Button href="/book" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Book Now
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
