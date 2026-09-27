import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data/site";
import { services } from "@/lib/data/services";
import { areas } from "@/lib/data/areas";
import { sublocations } from "@/lib/data/sublocations";
import { subservices } from "@/lib/data/subservices";
import { guides } from "@/lib/data/guides";
import { galleryPhotos, featuredPhotos, getPhotosForService } from "@/lib/data/gallery";

// One timestamp per build: every route is regenerated on deploy, so the
// deploy time is an honest lastmod for all of them.
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/areas", priority: 0.8, changeFrequency: "monthly" },
    { path: "/book", priority: 0.9, changeFrequency: "monthly" },
    { path: "/gallery", priority: 0.7, changeFrequency: "weekly" },
    { path: "/reviews", priority: 0.7, changeFrequency: "weekly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
    { path: "/guides", priority: 0.6, changeFrequency: "monthly" },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: changeFrequency as "weekly" | "monthly",
    priority,
    ...(path === "/gallery" && {
      images: galleryPhotos.map((photo) => `${SITE_URL}${photo.src}`),
    }),
    ...(path === "" && { images: featuredPhotos.map((photo) => `${SITE_URL}${photo.src}`) }),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    images: getPhotosForService(service.slug).map((photo) => `${SITE_URL}${photo.src}`),
  }));

  const areaRoutes = areas.map((area) => ({
    url: `${SITE_URL}/areas/${area.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const sublocationRoutes = sublocations.map((place) => ({
    url: `${SITE_URL}/areas/${place.parent}/${place.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const subserviceRoutes = subservices.map((sub) => ({
    url: `${SITE_URL}/services/${sub.parent}/${sub.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: sub.photos.map((src) => `${SITE_URL}${src}`),
  }));

  const guideRoutes = guides.map((guide) => ({
    url: `${SITE_URL}/guides/${guide.slug}`,
    lastModified: new Date(guide.published),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...subserviceRoutes,
    ...areaRoutes,
    ...sublocationRoutes,
    ...guideRoutes,
  ];
}
