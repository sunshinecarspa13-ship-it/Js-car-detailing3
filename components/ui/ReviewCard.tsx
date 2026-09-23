import { MessageCircleReply } from "lucide-react";
import { StarRating } from "@/components/ui/StarRating";
import type { Review } from "@/lib/data/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-bg-elevated p-6">
      <StarRating rating={5} />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-fg">
        “{review.text}
        {review.truncated && (
          <>
            {" "}
            <span className="text-fg-subtle">…</span>
          </>
        )}
        ”
      </blockquote>
      <figcaption className="mt-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-fg">{review.reviewer}</p>
          <p className="text-xs text-fg-subtle">
            {review.profileWeight ?? "Google review"} · {review.postedRelative} ago
          </p>
        </div>
        {review.ownerReplyPresent && (
          <span
            className="flex items-center gap-1 text-xs font-medium text-accent"
            title="JS Car Detailing Colchester replied to this review"
          >
            <MessageCircleReply className="h-3.5 w-3.5" aria-hidden />
            Owner replied
          </span>
        )}
      </figcaption>
    </figure>
  );
}
