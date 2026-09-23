import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-border py-14 sm:py-20">
      <Container>
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
