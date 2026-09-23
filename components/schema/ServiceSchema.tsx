import { JsonLd } from "./JsonLd";
import { business } from "@/lib/data/business";
import type { Service } from "@/lib/data/services";
import { SITE_URL } from "@/lib/data/site";

export function ServiceSchema({ service }: { service: Service }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: `${service.name} | ${business.name}`,
    description: service.directAnswer,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@type": "AutoDetailing",
      "@id": `${SITE_URL}/#business`,
      name: business.name,
      telephone: business.phone.display,
    },
    areaServed: business.serviceArea.towns.map((town) => ({
      "@type": "City",
      name: town,
    })),
  };

  return <JsonLd data={data} />;
}
