import { cn } from "@/lib/utils/cn";
import type { GalleryPhoto } from "@/lib/data/gallery";

const chip =
  "pointer-events-none absolute rounded-full bg-bg/80 font-semibold tracking-[0.14em] text-fg uppercase backdrop-blur";

// Labels the two halves of a before/after composite. Object-cover crops are
// centred, so the split line stays at 50% even when the tile crops the photo.
// `compact` collapses to one corner chip for small tiles, where a label on
// the lower half of a stacked photo would collide with the caption.
export function BeforeAfterLabels({
  photo,
  size = "sm",
  compact = false,
}: {
  photo: Pick<GalleryPhoto, "split" | "beforeLabel" | "afterLabel">;
  size?: "sm" | "md";
  compact?: boolean;
}) {
  if (!photo.split) return null;

  const before = photo.beforeLabel ?? "Before";
  const after = photo.afterLabel ?? "After";

  const sizing = size === "md" ? "px-3 py-1.5 text-xs" : "px-2.5 py-1 text-[10px]";
  const second = photo.split === "side" ? "top-3 left-[calc(50%+0.75rem)]" : "top-[calc(50%+0.75rem)] left-3";

  if (compact) {
    return (
      <span className={cn(chip, sizing, "top-3 left-3")}>
        {before} <span className="text-fg-subtle">/</span> <span className="text-accent">{after}</span>
      </span>
    );
  }

  return (
    <>
      <span className={cn(chip, sizing, "top-3 left-3")}>{before}</span>
      <span className={cn(chip, sizing, second, "text-accent")}>{after}</span>
    </>
  );
}
