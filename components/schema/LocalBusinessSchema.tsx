import { JsonLd } from "./JsonLd";
import { business } from "@/lib/data/business";
import { services } from "@/lib/data/services";
import { reviewsWithText } from "@/lib/data/reviews";
import { SITE_URL } from "@/lib/data/site";

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
    // "image" intentionally omitted — no real business photography supplied
    // yet. Add it once the client provides on-site photos.
    url: SITE_URL,
    telephone: business.phone.display,
    priceRange: undefined,
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

  return <JsonLd data={data} />;
}
