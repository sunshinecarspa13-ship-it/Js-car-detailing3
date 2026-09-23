import { ShieldCheck, Star, CalendarClock, MapPinned } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { business } from "@/lib/data/business";

const items = [
  { icon: ShieldCheck, label: "Fully insured" },
  {
    icon: Star,
    label: `${business.rating.value.toFixed(1)}★ from ${business.rating.count} reviews`,
  },
  { icon: CalendarClock, label: `Open ${business.trust.frequency}` },
  { icon: MapPinned, label: "Fully mobile — we come to you" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-bg-elevated/50">
      <Container className="grid grid-cols-2 gap-y-5 py-6 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:py-7">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5 text-sm font-medium text-fg-muted">
            <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden />
            {label}
          </div>
        ))}
      </Container>
    </section>
  );
}
