export type Area = {
  slug: string;
  name: string;
  county: string;
  isBase: boolean;
  /** Approximate one-way drive time from the Colchester base, traffic dependent. */
  driveTimeFromBase: string;
  directAnswer: string;
  localContext: string;
  servicesNote: string;
};

export const areas: Area[] = [
  {
    slug: "colchester",
    name: "Colchester",
    county: "Essex",
    isBase: true,
    driveTimeFromBase: "Based here",
    directAnswer:
      "JS Car Detailing Colchester is based in Colchester, operating from King Edward Quay, and covers the whole town as its home service area. As a fully mobile detailer, appointments are carried out at your home or workplace anywhere in Colchester, seven days a week from 8am.",
    localContext:
      "Colchester is Britain's oldest recorded town and Essex's largest, spanning everything from the historic town centre around Colchester Castle to the surrounding residential areas and the University of Essex campus. As the home base, Colchester sees the shortest response times and the most flexible availability of any area covered.",
    servicesNote:
      "All five services — exterior wash, deep clean, interior clean, paint protection, and headlight restoration — are available throughout Colchester with no call-out distance to travel.",
  },
  {
    slug: "ipswich",
    name: "Ipswich",
    county: "Suffolk",
    isBase: false,
    driveTimeFromBase: "Approximately 30–40 minutes by road, traffic dependent",
    directAnswer:
      "Yes — JS Car Detailing Colchester covers Ipswich as part of its regular mobile service area. The team travels from its Colchester base, roughly 30–40 minutes by road, to carry out exterior washes, deep cleans, interior cleans, paint protection, and headlight restoration at your home or workplace in Ipswich.",
    localContext:
      "Ipswich, Suffolk's county town, sits just over the county border from Essex and is one of the four towns JS Car Detailing Colchester regularly serves outside its home base. From the waterfront and marina to the surrounding residential estates, mobile detailing means no drive down to Colchester is needed — the service comes to you.",
    servicesNote:
      "Paint protection and deep cleans are popular in Ipswich alongside standard exterior washes — get a quote for your vehicle and postcode.",
  },
  {
    slug: "clacton-on-sea",
    name: "Clacton-on-Sea",
    county: "Essex",
    isBase: false,
    driveTimeFromBase: "Approximately 25–30 minutes by road, traffic dependent",
    directAnswer:
      "Yes — JS Car Detailing Colchester covers Clacton-on-Sea as part of its mobile service area, around 25–30 minutes from its Colchester base. Exterior washes, deep cleans, interior cleans, paint protection, and headlight restoration are all carried out at your home or workplace in Clacton-on-Sea.",
    localContext:
      "Clacton-on-Sea is a coastal town on Essex's Sunshine Coast, known for its seafront, pier, and a steady flow of salt air and coastal grime that bodywork and paintwork feel more than inland towns. That makes regular exterior washing and paint protection particularly relevant for vehicles kept near the coast.",
    servicesNote:
      "Exterior wash and paint protection are worth considering more regularly for vehicles parked near the seafront, where salt air speeds up grime buildup.",
  },
  {
    slug: "chelmsford",
    name: "Chelmsford",
    county: "Essex",
    isBase: false,
    driveTimeFromBase: "Approximately 30–40 minutes by road, traffic dependent",
    directAnswer:
      "Yes — JS Car Detailing Colchester covers Chelmsford as part of its mobile service area, roughly 30–40 minutes from its Colchester base via the A12. Exterior washes, deep cleans, interior cleans, paint protection, and headlight restoration are all available at your home or workplace in Chelmsford.",
    localContext:
      "Chelmsford is Essex's county town and only city, with a mix of dense city-centre living and surrounding suburbs and villages. As the furthest of the four regular service towns from the Colchester base, Chelmsford bookings are typically arranged a little further ahead to fit the route.",
    servicesNote:
      "All five services are available in Chelmsford — get in touch to check availability for your part of the city or surrounding area.",
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((area) => area.slug === slug);
}
