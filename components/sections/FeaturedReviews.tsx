import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { StarRating } from "@/components/ui/StarRating";
import { Reveal } from "@/components/ui/Reveal";
import { reviewsWithText } from "@/lib/data/reviews";
import { business } from "@/lib/data/business";

export function FeaturedReviews() {
  const featured = reviewsWithText.slice(0, 6);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Reviews"
              title="What Colchester and Essex drivers are saying"
              subtitle={`${business.rating.value.toFixed(1)}★ average across ${business.rating.count} Google reviews — read straight from the source.`}
            />
            <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end">
              <StarRating rating={business.rating.value} starClassName="h-5 w-5" />
              <span className="text-sm font-medium text-fg-muted">
                {business.rating.value.toFixed(1)} out of 5
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((review, index) => (
            <Reveal key={review.id} delay={Math.min(index, 3) * 0.06}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/reviews" variant="secondary">
            Read all reviews
          </Button>
          <Button href={business.googleProfileUrl} variant="ghost" external>
            Leave a review on Google
          </Button>
        </div>
      </Container>
    </section>
  );
}
