import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border py-4">
      <Container>
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-fg-subtle">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight className="h-3 w-3" aria-hidden />}
                {isLast ? (
                  <span aria-current="page" className="text-fg-muted">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="transition-colors hover:text-accent">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
