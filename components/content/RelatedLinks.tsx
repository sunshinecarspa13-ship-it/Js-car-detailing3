import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type RelatedLink = { href: string; label: string; description?: string };

// Data-driven internal links: callers pass links computed from lib/data, so
// new pages join the link graph without anyone editing templates.
export function RelatedLinks({ title, links }: { title: string; links: RelatedLink[] }) {
  if (links.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight text-fg">{title}</h2>
      <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group flex h-full items-start justify-between gap-4 rounded-xl border border-border bg-bg-elevated px-5 py-4 transition-colors hover:border-accent/60"
            >
              <span>
                <span className="block text-sm font-semibold text-fg">{link.label}</span>
                {link.description && (
                  <span className="mt-1 block text-sm leading-relaxed text-fg-muted">
                    {link.description}
                  </span>
                )}
              </span>
              <ArrowRight
                className="mt-0.5 h-4 w-4 shrink-0 text-fg-subtle transition-transform group-hover:translate-x-1 group-hover:text-accent"
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
