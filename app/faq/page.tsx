import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about JS Car Detailing Colchester's mobile car detailing service — pricing, coverage area, insurance, and booking.",
  alternates: { canonical: "/faq" },
};

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
