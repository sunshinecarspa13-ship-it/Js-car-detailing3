import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { generalFaqs } from "@/lib/data/faq";

// The questions people ask before booking. FAQPage schema lives on /faq
// only, so the same Q&A isn't marked up on two URLs.
const HOME_QUESTIONS = [
  "How much does mobile car detailing cost near Colchester?",
  "Is JS Car Detailing Colchester insured?",
  "Do I need to provide water or electricity for a mobile detail?",
  "Is mobile detailing better than a drive-in car wash?",
];

export function HomeFaq() {
  const faqs = generalFaqs.filter((faq) => HOME_QUESTIONS.includes(faq.question));

  return (
    <section className="py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions before you book"
            subtitle="Quick answers on pricing, insurance and what you need at home. Anything else — just ask."
          />
          <Button href="/faq" variant="secondary" className="mt-8">
            All frequently asked questions
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
        <div className="lg:col-span-3">
          <FaqAccordion faqs={faqs} />
        </div>
      </Container>
    </section>
  );
}
