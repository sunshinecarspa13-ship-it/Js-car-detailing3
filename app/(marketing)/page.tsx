import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { FeaturedReviews } from "@/components/sections/FeaturedReviews";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { HomeFaq } from "@/components/sections/HomeFaq";
import { LocalBusinessSchema } from "@/components/schema/LocalBusinessSchema";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = pageMetadata({
  title: "Mobile Car Detailing Colchester | JS Car Detailing Colchester",
  description: siteConfig.metaDescription,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <GalleryPreview />
      <FeaturedReviews />
      <ServiceAreaSection />
      <HomeFaq />
      <CtaBanner />
    </>
  );
}
