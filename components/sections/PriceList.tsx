import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function PriceList() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Prices"
            title="Prices & offers"
            subtitle="Clear prices for every package — and we bring everything to you."
          />
        </Reveal>

        <Reveal>
          <div className="mt-12 overflow-hidden rounded-3xl border border-border-strong">
            <Image
              src="/price-list.jpg"
              width={1080}
              height={736}
              alt="JS Detailing Colchester price list: Essential Cleaning £59, Deep Cleaning £99.99, Interior Cleaning £55, Interior Deep Cleaning £75, Exterior Cleaning £39.99, Headlight Restoration £49.99"
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <div className="mt-8 flex justify-center">
          <Button href="/book">Book now</Button>
        </div>
      </Container>
    </section>
  );
}
