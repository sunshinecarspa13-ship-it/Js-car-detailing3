import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FaqSchema } from "@/components/schema/FaqSchema";
import { generalFaqs } from "@/lib/data/faq";
import { services } from "@/lib/data/services";

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
];

export const metadata: Metadata = pageMetadata({
  title: "Car Detailing FAQs",
  description:
    "Answers to common questions about mobile car detailing with JS Car Detailing Colchester — pricing, areas covered, insurance and how booking works.",
  path: "/faq",
});

const allFaqs = [...generalFaqs, ...services.flatMap((s) => s.faqs)];

export default function FaqPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FaqSchema faqs={allFaqs} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="General questions about JS Car Detailing Colchester, plus specifics on each service further down."
      />

      <section className="pb-16 sm:pb-24">
        <Container className="max-w-3xl space-y-12">
          <div>
            <h2 className="mb-5 text-xl font-semibold text-fg">General</h2>
            <FaqAccordion faqs={generalFaqs} />
          </div>

          {services.map((service) => (
            <div key={service.slug}>
              <h2 className="mb-5 text-xl font-semibold text-fg">{service.name}</h2>
              <FaqAccordion faqs={service.faqs} />
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
