"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import type { GalleryPhoto } from "@/lib/data/gallery";
import { BeforeAfterLabels } from "./BeforeAfterLabels";

export type GalleryItem = GalleryPhoto & { serviceName: string };

type Layout = "bento" | "strip" | "masonry";

// Tiles are plain server-rendered <img>s inside buttons, so every photo and
// its alt text is in the initial HTML for crawlers; the lightbox is a
// progressive enhancement on top.
export function GalleryGrid({ items, layout }: { items: GalleryItem[]; layout: Layout }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      {layout === "masonry" ? (
        <MasonryGrid items={items} onOpen={setActive} />
      ) : (
        <TileGrid items={items} onOpen={setActive} strip={layout === "strip"} />
      )}
      <Lightbox items={items} index={active} onChange={setActive} />
    </>
  );
}

function TileButton({
  item,
  onOpen,
  className,
  sizes,
  compactLabels = false,
  children,
}: {
  item: GalleryItem;
  onOpen: () => void;
  className?: string;
  /** Only used when no custom image is passed as children. */
  sizes?: string;
  compactLabels?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View larger photo: ${item.caption}`}
      className={cn(
        "group relative block w-full cursor-zoom-in overflow-hidden bg-bg-elevated text-left",
        className
      )}
    >
      {children ?? (
        <Image
          src={item.src}
          width={item.width}
          height={item.height}
          alt={item.alt}
          sizes={sizes}
          className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
        />
      )}
      <BeforeAfterLabels photo={item} compact={compactLabels} />
      <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-bg/80 text-fg opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        <Expand className="h-4 w-4" aria-hidden />
      </span>
    </button>
  );
}

// Bento: first photo leads at 2x2 on desktop / full width on mobile.
// Strip: equal square tiles for a handful of related photos.
function TileGrid({
  items,
  onOpen,
  strip,
}: {
  items: GalleryItem[];
  onOpen: (i: number) => void;
  strip: boolean;
}) {
  return (
    <ul
      className={cn(
        "grid gap-3 sm:gap-4",
        strip ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2 lg:h-[560px] lg:grid-cols-4 lg:grid-rows-2"
      )}
    >
      {items.map((item, index) => {
        const lead = !strip && index === 0;
        return (
          <li
            key={item.src}
            className={cn(
              "overflow-hidden rounded-2xl border border-border-strong",
              lead && "col-span-2 aspect-[4/3] lg:row-span-2 lg:aspect-auto",
              !lead && (strip ? "aspect-square" : "aspect-square lg:aspect-auto")
            )}
          >
            <TileButton
              item={item}
              onOpen={() => onOpen(index)}
              className="h-full"
              compactLabels={!lead && item.split === "stacked"}
            >
              <Image
                src={item.src}
                fill
                alt={item.alt}
                sizes={
                  lead
                    ? "(min-width: 1024px) 50vw, 100vw"
                    : strip
                      ? "(min-width: 640px) 33vw, 50vw"
                      : "(min-width: 1024px) 25vw, 50vw"
                }
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-4 pt-10 pb-3.5">
                <span className={cn("block font-semibold text-white", lead ? "text-base sm:text-lg" : "text-sm")}>
                  {item.caption}
                </span>
                <span className="mt-0.5 block text-xs text-white/70">{item.serviceName}</span>
              </span>
            </TileButton>
          </li>
        );
      })}
    </ul>
  );
}

function MasonryGrid({ items, onOpen }: { items: GalleryItem[]; onOpen: (i: number) => void }) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {items.map((item, index) => (
        <figure
          key={item.src}
          className="mb-5 break-inside-avoid overflow-hidden rounded-3xl border border-border-strong bg-bg-elevated"
        >
          <TileButton
            item={item}
            onOpen={() => onOpen(index)}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <figcaption className="px-5 py-4">
            <h2 className="text-base font-semibold text-fg">{item.caption}</h2>
            <p className="mt-1 text-sm leading-relaxed text-fg-muted">{item.description}</p>
            <Link
              href={`/services/${item.service}`}
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
            >
              {item.serviceName} service
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function Lightbox({
  items,
  index,
  onChange,
}: {
  items: GalleryItem[];
  index: number | null;
  onChange: (index: number | null) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const open = index !== null;
  const item = open ? items[index] : null;

  const step = useCallback(
    (delta: number) => {
      if (index === null) return;
      onChange((index + delta + items.length) % items.length);
    },
    [index, items.length, onChange]
  );

  // Native modal dialog: focus trap, Esc-to-close, inert background and
  // focus restoration on close all come from the browser.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  return (
    <dialog
      ref={dialogRef}
      aria-label={item ? `${item.caption} — photo ${index! + 1} of ${items.length}` : "Photo viewer"}
      onClose={() => onChange(null)}
      onClick={(event) => {
        // Clicks on the backdrop land on the dialog element itself.
        if (event.target === event.currentTarget) onChange(null);
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const dx = event.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
      }}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 text-fg backdrop:bg-black/90 backdrop:backdrop-blur-sm"
    >
      {item && (
        <div
          className="flex h-full flex-col items-center justify-center gap-4 px-4 py-16 sm:px-20"
          onClick={(event) => {
            if (event.target === event.currentTarget) onChange(null);
          }}
        >
          <div className="relative inline-block overflow-hidden rounded-2xl">
            <Image
              key={item.src}
              src={item.src}
              width={item.width}
              height={item.height}
              alt={item.alt}
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="h-auto max-h-[68dvh] w-auto max-w-full animate-fade-up motion-reduce:animate-none"
            />
            <BeforeAfterLabels photo={item} size="md" />
          </div>

          <div className="w-full max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-fg-subtle uppercase">
              {index! + 1} / {items.length}
            </p>
            <p className="mt-2 text-lg font-semibold text-fg">{item.caption}</p>
            <p className="mt-1 text-sm text-fg-muted">{item.description}</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={`/services/${item.service}`}
                className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border-strong px-4 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
              >
                About {item.serviceName}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
              <Link
                href={`/book?service=${item.service}`}
                className="inline-flex h-10 items-center rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
              >
                Book this service
              </Link>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onChange(null)}
            aria-label="Close photo viewer"
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-bg-elevated-2 text-fg transition-colors hover:text-accent"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="absolute top-1/2 left-2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-bg-elevated-2/90 text-fg transition-colors hover:text-accent sm:left-5"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="absolute top-1/2 right-2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-bg-elevated-2/90 text-fg transition-colors hover:text-accent sm:right-5"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </>
          )}
        </div>
      )}
    </dialog>
  );
}
