import { JsonLd } from "./JsonLd";
import { business } from "@/lib/data/business";
import { services } from "@/lib/data/services";
import { reviewsWithText } from "@/lib/data/reviews";
import { SITE_URL, siteConfig } from "@/lib/data/site";
import { galleryPhotos } from "@/lib/data/gallery";

// NOTE: openingHoursSpecification is deliberately omitted. Closing time is
// not confirmed by the client (business.hours.closesPlaceholder) — publishing
// a guessed closing time in schema would mislead search engines. Add it back
// once the real value is confirmed.
export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    "@id": `${SITE_URL}/#business`,
    name: business.name,
    // Brand as it appears on the logo and domain (jsdetailingcolchester.co.uk).
    alternateName: "JS Detailing Colchester",
    description: siteConfig.description,
    url: SITE_URL,
    logo: `${SITE_URL}/android-chrome-512x512.png`,
    image: galleryPhotos.map((photo) => `${SITE_URL}${photo.src}`),
    telephone: business.phone.href,
    hasMap: business.googleProfileUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${business.address.line1}, ${business.address.line2}`,
      addressLocality: business.address.city,
      postalCode: business.address.postalCode,
      addressCountry: business.address.countryCode,
    },
    areaServed: business.serviceArea.towns.map((town) => ({
      "@type": "City",
      name: town,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating.value,
      reviewCount: business.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviewsWithText.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.reviewer,
      },
      reviewBody: review.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
      },
    })),
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        url: `${SITE_URL}/services/${service.slug}`,
      },
    })),
    sameAs: [business.googleProfileUrl],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: business.name,
    alternateName: "JS Detailing Colchester",
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE_URL}/#business` },
  };

  return (
    <>
      <JsonLd data={data} />
      <JsonLd data={website} />
    </>
  );
}
