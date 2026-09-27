import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { featuredPhotos, withServiceNames } from "@/lib/data/gallery";

export function GalleryPreview() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="our-work-heading">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              id="our-work-heading"
              eyebrow="Our work"
              title="Real results, on real driveways"
              subtitle="Every photo is a genuine customer job carried out at their home — tap any photo to see it full size."
            />
            <Button href="/gallery" variant="secondary" className="shrink-0 self-start sm:self-auto">
              View full gallery
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 sm:mt-12">
          <GalleryGrid items={withServiceNames(featuredPhotos)} layout="bento" />
        </div>

        <p className="mt-8 text-center text-sm text-fg-muted">
          Want the same finish? See what&apos;s included in an{" "}
          <Link href="/services/exterior-wash" className="font-medium text-accent hover:underline">
            exterior wash
          </Link>
          , an{" "}
          <Link href="/services/interior-clean" className="font-medium text-accent hover:underline">
            interior clean
          </Link>{" "}
          or a full{" "}
          <Link href="/services/deep-clean" className="font-medium text-accent hover:underline">
            deep clean
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
