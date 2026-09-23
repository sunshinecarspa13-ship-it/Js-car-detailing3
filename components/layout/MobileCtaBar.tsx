import { Phone, Calendar } from "lucide-react";
import { business } from "@/lib/data/business";

export function MobileCtaBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-bg/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={`tel:${business.phone.href}`}
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-fg active:bg-bg-elevated"
      >
        <Phone className="h-4 w-4 text-accent" aria-hidden />
        Call Now
      </a>
      <div className="w-px bg-border" />
      <a
        href="/book"
        className="flex flex-1 items-center justify-center gap-2 bg-accent py-3.5 text-sm font-semibold text-accent-foreground active:bg-accent-hover"
      >
        <Calendar className="h-4 w-4" aria-hidden />
        Book Now
      </a>
    </div>
  );
}
