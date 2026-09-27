import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/data/services";

// Native <details>/<summary>: every answer is in the server-rendered HTML
// (a JS accordion that only mounts the open answer hides the rest from
// crawlers and from the FAQPage schema's visible-content requirement), it
// works without hydration, and keyboard/screen-reader support is built in.
export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-bg-elevated">
      {faqs.map((faq, index) => (
        <details key={faq.question} open={index === 0} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left [&::-webkit-details-marker]:hidden">
            <h3 className="text-sm font-semibold text-fg sm:text-base">{faq.question}</h3>
            <ChevronDown
              className="h-4 w-4 shrink-0 text-accent transition-transform group-open:rotate-180"
              aria-hidden
            />
          </summary>
          <p className="px-6 pb-5 text-sm leading-relaxed text-fg-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
