import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { LocalBusinessSchema } from "@/components/schema/LocalBusinessSchema";
import { reviews, reviewsWithText } from "@/lib/data/reviews";
import { business } from "@/lib/data/business";

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews" },
];

export const metadata: Metadata = {
  title: "Reviews",
  description: `${business.rating.value.toFixed(1)}★ from ${business.rating.count} Google reviews — read what customers say about JS Car Detailing Colchester.`,
  alternates: { canonical: "/reviews" },
};

const textlessCount = reviews.length - reviewsWithText.length;

export default function ReviewsPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero eyebrow="Reviews" title="Reviews from real customers" />

      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-bg-elevated p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <p className="text-4xl font-semibold text-fg">
                {business.rating.value.toFixed(1)}
              </p>
              <div>
                <StarRating rating={business.rating.value} starClassName="h-5 w-5" />
                <p className="mt-1 text-sm text-fg-muted">
                  Based on {business.rating.count} Google reviews
                </p>
              </div>
            </div>
            <Button href={business.googleProfileUrl} variant="secondary" external>
              View profile &amp; leave a review
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviewsWithText.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {textlessCount > 0 && (
            <p className="mt-10 text-center text-sm text-fg-subtle">
              {business.rating.count} reviews count toward the {business.rating.value.toFixed(1)}★
              rating above; {textlessCount} of them didn&apos;t include written text on Google, so
              they aren&apos;t quoted here. See all of them on{" "}
              <a
                href={business.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                the Google Business Profile
              </a>
              .
            </p>
          )}

          <p className="mt-6 text-center text-xs text-fg-subtle">
            Some reviews above are shown as posted on Google, including any trailing
            &ldquo;…&rdquo; where the original review was truncated.
          </p>
        </Container>
      </section>
    </>
  );
}
