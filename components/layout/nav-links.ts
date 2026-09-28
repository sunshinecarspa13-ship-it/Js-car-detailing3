import { services } from "@/lib/data/services";
import { subservices } from "@/lib/data/subservices";
import { areas } from "@/lib/data/areas";
import { sublocations } from "@/lib/data/sublocations";

// Site-wide link tree for the header menu and footer, derived from the data
// files so every service, sub-service, town and neighbourhood page is linked
// from every page the moment it's added. Only hrefs and labels live here, so
// it stays small enough to pass to the client-side mobile menu.

export type NavLink = { href: string; label: string; children?: NavLink[] };

export type NavGroup = { heading: string; href?: string; links: NavLink[] };

export type NavItem = { href: string; label: string; groups?: NavGroup[] };

export const serviceLinks: NavLink[] = services.map((service) => ({
  href: `/services/${service.slug}`,
  label: service.name,
  children: subservices
    .filter((sub) => sub.parent === service.slug)
    .map((sub) => ({ href: `/services/${service.slug}/${sub.slug}`, label: sub.name })),
}));

export const areaLinks: NavLink[] = areas.map((area) => ({
  href: `/areas/${area.slug}`,
  label: area.name,
}));

export const neighbourhoodLinks: NavLink[] = sublocations.map((place) => ({
  href: `/areas/${place.parent}/${place.slug}`,
  label: place.name,
}));

export const navItems: NavItem[] = [
  {
    href: "/services",
    label: "Services",
    groups: [
      { heading: "Detailing services", href: "/services", links: serviceLinks },
      {
        heading: "Help choosing",
        links: [{ href: "/guides", label: "Car care guides & comparisons" }],
      },
    ],
  },
  {
    href: "/areas",
    label: "Areas We Cover",
    groups: [
      { heading: "Towns & cities", href: "/areas", links: areaLinks },
      { heading: "Colchester neighbourhoods", href: "/areas/colchester", links: neighbourhoodLinks },
    ],
  },
  { href: "/reviews", label: "Reviews" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];
