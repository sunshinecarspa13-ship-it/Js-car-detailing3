// Real before/after photography supplied by the client. Shared by the
// gallery page, sitemap image entries and LocalBusiness schema.
export type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  { src: "/gallery/snow-foam-wash.jpg", width: 995, height: 1079, alt: "Grey hatchback before and during a snow foam exterior wash", caption: "Snow foam exterior wash" },
  { src: "/gallery/rear-seat-clean.jpg", width: 1080, height: 872, alt: "Rear seats before and after a deep interior clean", caption: "Rear seat deep clean" },
  { src: "/gallery/seat-stain-removal.jpg", width: 861, height: 972, alt: "Front seats before and after stain removal", caption: "Seat stain removal" },
  { src: "/gallery/smart-exterior-before-after.jpg", width: 1035, height: 880, alt: "White Smart car before and after an exterior detail", caption: "Exterior detail" },
  { src: "/gallery/smart-exterior-finish.jpg", width: 1080, height: 1569, alt: "White Smart car with a finished gloss exterior", caption: "Gloss finish" },
  { src: "/gallery/red-car-rear-interior.png", width: 243, height: 304, alt: "Red car rear interior before and after cleaning", caption: "Interior valet" },
];
