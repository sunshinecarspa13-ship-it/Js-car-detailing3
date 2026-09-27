import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FaqSchema } from "@/components/schema/FaqSchema";
import { services, getServiceBySlug } from "@/lib/data/services";
import { areas } from "@/lib/data/areas";
import { business } from "@/lib/data/business";
import { getPhotosForService, withServiceNames } from "@/lib/data/gallery";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return pageMetadata({
    title: `${service.name} Colchester`,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];

  const otherServices = services.filter((s) => s.slug !== service.slug);
  const photos = withServiceNames(getPhotosForService(service.slug));

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema service={service} />
      <FaqSchema faqs={service.faqs} />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="border-b border-border py-14 sm:py-20">
        <Container>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            {service.name}
          </h1>
          {/* Direct, self-contained answer for snippets / AI Overviews — first thing on the page. */}
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted">
            {service.directAnswer}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`/book?service=${service.slug}`} size="lg">
              Book {service.name}
            </Button>
            <Button href={`tel:${business.phone.href}`} variant="secondary" size="lg">
              Call {business.phone.display}
            </Button>
          </div>
          <p className="mt-5 text-sm text-fg-muted">
            Rated {business.rating.value.toFixed(1)}★ from {business.rating.count} Google
            reviews —{" "}
            <Link href="/reviews" className="text-accent hover:underline">
              read what customers say
            </Link>
            {" "}or{" "}
            <Link href="/contact" className="text-accent hover:underline">
              ask for a free quote
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight text-fg">
              About this service
            </h2>
            <p className="mt-4 leading-relaxed text-fg-muted">{service.summary}</p>

            <h3 className="mt-10 text-lg font-semibold text-fg">What&apos;s included</h3>
            <ul className="mt-4 space-y-3">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-fg-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  {bullet}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-lg font-semibold text-fg">Ideal for</h3>
            <p className="mt-3 leading-relaxed text-fg-muted">{service.idealFor}</p>

            {photos.length > 0 && (
              <>
                <div className="mt-14 flex items-baseline justify-between gap-4">
                  <h2 className="text-2xl font-semibold tracking-tight text-fg">
                    {service.name} results
                  </h2>
                  <Link href="/gallery" className="shrink-0 text-sm font-medium text-accent hover:underline">
                    Full gallery →
                  </Link>
                </div>
                <p className="mt-2 text-sm text-fg-muted">
                  Real customer jobs — tap a photo to view it full size.
                </p>
                <div className="mt-6">
                  <GalleryGrid items={photos} layout="strip" />
                </div>
              </>
            )}

            <h2 className="mt-14 text-2xl font-semibold tracking-tight text-fg">
              Frequently asked questions
            </h2>
            <div className="mt-6 space-y-6">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="border-b border-border pb-6">
                  <h3 className="text-base font-semibold text-fg">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-fg-muted">
              More answers on pricing, insurance and coverage in the{" "}
              <Link href="/faq" className="text-accent hover:underline">
                full FAQ
              </Link>
              .
            </p>

            {service.references && (
              <>
                <h2 className="mt-14 text-2xl font-semibold tracking-tight text-fg">
                  Sources &amp; further reading
                </h2>
                <ul className="mt-6 space-y-4">
                  {service.references.map((ref) => (
                    <li key={ref.href} className="rounded-xl border border-border bg-bg-elevated p-5">
                      <a
                        href={ref.href}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-fg transition-colors hover:text-accent"
                      >
                        {ref.label}
                        <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                      <p className="mt-1.5 text-sm text-fg-muted">{ref.context}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-border bg-bg-elevated p-6">
              <p className="text-sm font-semibold text-fg">
                {service.name} available in:
              </p>
              <ul className="mt-4 space-y-2.5">
                {areas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/areas/${area.slug}`}
                      className="group flex items-center justify-between text-sm text-fg-muted transition-colors hover:text-accent"
                    >
                      {service.name} in {area.name}
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-bg-elevated p-6">
              <p className="text-sm font-semibold text-fg">Other services</p>
              <ul className="mt-4 space-y-2.5">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-sm text-fg-muted transition-colors hover:text-accent"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-bg-elevated p-6">
              <p className="text-sm font-semibold text-fg">Before you book</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="/gallery" className="text-fg-muted transition-colors hover:text-accent">
                    Before &amp; after gallery
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="text-fg-muted transition-colors hover:text-accent">
                    Customer reviews
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-fg-muted transition-colors hover:text-accent">
                    Frequently asked questions
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-fg-muted transition-colors hover:text-accent">
                    About JS Car Detailing
                  </Link>
                </li>
              </ul>
              <Button href={`/book?service=${service.slug}`} className="mt-6 w-full">
                Book {service.shortName}
              </Button>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
