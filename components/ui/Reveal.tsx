import { cn } from "@/lib/utils/cn";

// Pure CSS entrance animation (see --animate-fade-up in globals.css) — no
// JS runtime needed. An earlier version used framer-motion's whileInView,
// which (a) leaves content at opacity:0 for any renderer that doesn't fire
// a real scroll/IntersectionObserver event — a real risk for an SEO-led
// site — and (b) pulled in ~100KB of mostly-unused JS for what is a purely
// decorative flourish. This version can't have either problem: the
// animation is declared in server-rendered HTML and runs on paint,
// independent of hydration.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("animate-fade-up motion-reduce:animate-none", className)}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
