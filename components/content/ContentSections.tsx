import { Check } from "lucide-react";
import type { ContentSection } from "@/lib/data/subservices";

export function ContentSections({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2 className="text-2xl font-semibold tracking-tight text-fg">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-relaxed text-fg-muted">
              {paragraph}
            </p>
          ))}
          {section.bullets && (
            <ul className="mt-5 space-y-3">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-fg-muted">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
