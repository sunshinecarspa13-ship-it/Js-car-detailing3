import { cn } from "@/lib/utils/cn";

export function MapEmbed({
  query,
  title,
  className,
}: {
  query: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-border", className)}>
      <iframe
        title={title}
        src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
        className="h-full w-full"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
