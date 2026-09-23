import { Star } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export function StarRating({
  rating,
  className,
  starClassName,
}: {
  rating: number;
  className?: string;
  starClassName?: string;
}) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < Math.round(rating) ? "fill-accent text-accent" : "fill-transparent text-border-strong",
            starClassName
          )}
        />
      ))}
    </div>
  );
}
