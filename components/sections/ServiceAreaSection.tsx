import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { Reveal } from "@/components/ui/Reveal";
import { areas } from "@/lib/data/areas";
import { business } from "@/lib/data/business";

export function ServiceAreaSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Where we work"
            title="Based in Colchester, mobile across Essex & Suffolk"
            subtitle="No need to drive anywhere — every service is carried out at your home or workplace."
          />

          <ul className="mt-8 space-y-3">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-border bg-bg-elevated px-5 py-4 transition-colors hover:border-accent/60"
                >
                  <span className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-accent" aria-hidden />
                    <span className="text-sm font-semibold text-fg">{area.name}</span>
                    <span className="text-xs text-fg-subtle">
                      {area.isBase ? "Home base" : area.driveTimeFromBase}
                    </span>
                  </span>
                  <ArrowRight
                    className="h-4 w-4 text-fg-subtle transition-transform group-hover:translate-x-1 group-hover:text-accent"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <MapEmbed
          query={business.googlePlusCode}
          title={`Map showing ${business.name} service area near Colchester`}
          className="aspect-[4/3] w-full"
        />
      </Container>
    </section>
  );
}
