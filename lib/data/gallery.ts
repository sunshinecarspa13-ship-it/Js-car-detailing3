// Real before/after photography supplied by the client. Shared by the
// gallery page, home page preview, service pages, sitemap image entries and
// LocalBusiness / ImageGallery schema.
import { getServiceBySlug } from "./services";

export type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  /** One-line description shown in the lightbox and ImageObject schema. */
  description: string;
  /** Slug of the service this job shows — drives the "see this service" link. */
  service: string;
  /**
   * How the before/after composite is split, so labels sit on the right
   * halves: "side" = before left / after right, "stacked" = before top /
   * after bottom, null = a single finished shot.
   */
  split: "side" | "stacked" | null;
  /** Labels for either half when they aren't strictly "Before" / "After". */
  beforeLabel?: string;
  afterLabel?: string;
  /** Shown in the home page preview (high enough resolution to feature). */
  featured: boolean;
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/gallery/rear-seat-clean.jpg",
    width: 1080,
    height: 872,
    alt: "Rear seats before and after a deep interior clean",
    caption: "Rear seat deep clean",
    description: "Debris-covered rear bench and carpets vacuumed and cleaned back to a fresh finish.",
    service: "interior-clean",
    split: "side",
    featured: true,
  },
  {
    src: "/gallery/smart-exterior-before-after.jpg",
    width: 1035,
    height: 880,
    alt: "White Smart car before and after an exterior detail",
    caption: "Exterior detail",
    description: "A white Smart ForFour washed and finished on the customer's driveway.",
    service: "exterior-wash",
    split: "side",
    featured: true,
  },
  {
    src: "/gallery/seat-stain-removal.jpg",
    width: 861,
    height: 972,
    alt: "Front seats before and after stain removal",
    caption: "Seat stain removal",
    description: "Marked cloth seat panels treated as part of an interior clean.",
    service: "interior-clean",
    split: "stacked",
    featured: true,
  },
  {
    src: "/gallery/smart-exterior-finish.jpg",
    width: 1080,
    height: 1569,
    alt: "White Smart car during and after a mobile exterior wash, finished on the driveway",
    caption: "Wash to finish",
    description: "Mid-wash, then dried and finished — clean bodywork and glass on the customer's driveway.",
    service: "exterior-wash",
    split: "stacked",
    beforeLabel: "During",
    afterLabel: "Finished",
    featured: true,
  },
  {
    src: "/gallery/snow-foam-wash.jpg",
    width: 995,
    height: 1079,
    alt: "Grey hatchback before and during a snow foam exterior wash",
    caption: "Snow foam exterior wash",
    description: "Pre-wash snow foam loosening road grime before the hand wash, done at the customer's home.",
    service: "exterior-wash",
    split: "stacked",
    afterLabel: "Snow foam",
    featured: true,
  },
  {
    src: "/gallery/red-car-rear-interior.png",
    width: 243,
    height: 304,
    alt: "Red car rear interior before and after cleaning",
    caption: "Interior valet",
    description: "Rear footwells and seats of a red hatchback cleaned during an interior valet.",
    service: "interior-clean",
    split: "side",
    featured: false,
  },
];

export const featuredPhotos = galleryPhotos.filter((photo) => photo.featured);

export function getPhotosForService(slug: string): GalleryPhoto[] {
  return galleryPhotos.filter((photo) => photo.service === slug);
}

/** Resolves each photo's service name server-side, so client galleries don't bundle service data. */
export function withServiceNames(photos: GalleryPhoto[]) {
  return photos.map((photo) => ({
    ...photo,
    serviceName: getServiceBySlug(photo.service)?.name ?? "Mobile detailing",
  }));
}
