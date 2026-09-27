import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FaqSchema } from "@/components/schema/FaqSchema";
import type { Faq } from "@/lib/data/services";

/** Visible FAQs plus matching FAQPage schema, so the two can never drift apart. */
export function FaqSection({ title, faqs }: { title: string; faqs: Faq[] }) {
  if (faqs.length === 0) return null;

  return (
    <section>
      <FaqSchema faqs={faqs} />
      <h2 className="text-2xl font-semibold tracking-tight text-fg">{title}</h2>
      <div className="mt-6">
        <FaqAccordion faqs={faqs} />
      </div>
    </section>
  );
}
