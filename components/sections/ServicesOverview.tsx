import Link from "next/link";
import { Droplets, Sparkles, Armchair, Shield, Lightbulb, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/data/services";
import { subservices, getSubservicesFor } from "@/lib/data/subservices";

const icons = {
  droplets: Droplets,
  sparkles: Sparkles,
  armchair: Armchair,
  shield: Shield,
  lightbulb: Lightbulb,
};

export function ServicesOverview() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Every detail, delivered at your door"
            subtitle={`${services.length} core services and ${subservices.length} specialist treatments, from a quick refresh to ceramic coating and paint protection film — all fully mobile across Colchester, Ipswich, Clacton-on-Sea, and Chelmsford.`}
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.slug} delay={Math.min(index, 3) * 0.06}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-bg-elevated p-6 transition-colors hover:border-accent/60"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-fg">{service.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">
                    {service.bullets[0]}
                  </p>
                  <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-8 rounded-2xl border border-border p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="text-lg font-semibold text-fg">
                Specialist treatments, from ceramic coating to pet hair removal
              </h3>
              <Link
                href="/services"
                className="group flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent"
              >
                All car detailing services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services
                .filter((service) => getSubservicesFor(service.slug).length > 0)
                .map((service) => (
                  <div key={service.slug}>
                    <p className="text-xs font-semibold tracking-[0.15em] text-fg-subtle uppercase">
                      {service.name}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {getSubservicesFor(service.slug).map((sub) => (
                        <li key={sub.slug}>
                          <Link
                            href={`/services/${service.slug}/${sub.slug}`}
                            className="text-sm text-fg-muted transition-colors hover:text-accent"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
