import { cn } from "@/lib/utils/cn";

/**
 * Stand-in for real before/after photography. Evokes wet paint / clear-coat
 * via gradient + grain rather than passing off stock photos as the
 * business's own work. Swap for real imagery once the client supplies it.
 */
export function SheenPanel({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grain relative isolate flex items-center justify-center overflow-hidden rounded-3xl border border-border-strong",
        className
      )}
      style={{
        background:
          "radial-gradient(120% 140% at 20% 0%, #2a2620 0%, #16130f 32%, #0a0a0a 68%), linear-gradient(135deg, #1c1c20 0%, #0a0a0a 60%)",
      }}
    >
      <div
        className="pointer-events-none absolute -inset-1/3 opacity-40"
        style={{
          background:
            "conic-gradient(from 210deg at 50% 50%, transparent 0deg, rgba(212,162,76,0.25) 60deg, transparent 140deg)",
        }}
      />
      {children}
    </div>
  );
}
