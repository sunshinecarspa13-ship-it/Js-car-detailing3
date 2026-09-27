import type { Faq } from "./services";

export type Area = {
  slug: string;
  name: string;
  county: string;
  isBase: boolean;
  /** Approximate one-way drive time from the Colchester base, traffic dependent. */
  driveTimeFromBase: string;
  directAnswer: string;
  /** Search-snippet description, ≤160 characters. */
  metaDescription: string;
  localContext: string;
  servicesNote: string;
  /** Authoritative external references for the place (visible link + schema sameAs). */
  wikipedia: string;
  wikidata: string;
  /**
   * Service × location content, folded into the area pillar rather than
   * published as separate thin pages: one town-specific note per service
   * slug. Standalone /services/[service]/[area] pages would need a unique
   * local testimonial or photo to clear the uniqueness bar — none exist yet.
   */
  serviceNotes: Record<string, string>;
  faqs: Faq[];
};

export const areas: Area[] = [
  {
    slug: "colchester",
    serviceNotes: {
      "exterior-wash": "Colchester is home turf, so a regular exterior wash is simple to keep on a routine — the van is rarely more than a few miles away, whether you're in the city centre, a suburb like Stanway or out at Wivenhoe.",
      "deep-clean": "A deep clean is our longest visit, and being based in the city means we can usually offer the widest choice of days for one here — useful when you're getting a car ready to sell or resetting it after a long winter.",
      "interior-clean": "For Colchester flats and terraces where the car is parked on the street, an interior clean is often the easiest service to book: we only need access to the car itself.",
      "paint-protection": "Paint protection goes on straight after a wash, so in Colchester it's usually booked as part of the same visit as an exterior wash or deep clean.",
      "headlight-restoration": "Headlight restoration is a short, on-site job — easy to add to any Colchester visit, or book on its own before an MOT."
    },
    faqs: [
      {
        "question": "Which parts of Colchester does JS Car Detailing cover?",
        "answer": "All of Colchester, including The Hythe, Old Heath, Greenstead, Wivenhoe, Berechurch, Myland, Highwoods, Lexden and Stanway. The business is based at King Edward Quay in The Hythe."
      },
      {
        "question": "Is JS Car Detailing a mobile service or a unit I drive to in Colchester?",
        "answer": "It's fully mobile. The King Edward Quay address is the business base — every appointment is carried out at your home or workplace."
      },
      {
        "question": "How soon can I get a car valet in Colchester?",
        "answer": "It depends on the day and the service. Colchester is the home base, so it has the most flexible availability of any area covered — call +44 7778 902278 or book online to check."
      }
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Colchester",
    wikidata: "https://www.wikidata.org/wiki/Q184163",
    name: "Colchester",
    county: "Essex",
    isBase: true,
    driveTimeFromBase: "Based here",
    metaDescription:
      "Mobile car detailing in Colchester — washes, deep cleans, interior cleans and paint protection at your home or workplace. Open 7 days a week from 8am.",
    directAnswer:
      "JS Car Detailing Colchester is based in Colchester, operating from King Edward Quay, and covers the whole city as its home service area. As a fully mobile detailer, appointments are carried out at your home or workplace anywhere in Colchester, seven days a week from 8am.",
    localContext:
      "Colchester — granted city status in 2022 and built on the site of Roman Camulodunum, Britain's first capital — spans everything from the historic centre around Colchester Castle to the surrounding residential areas and the University of Essex campus. As the home base, Colchester sees the shortest response times and the most flexible availability of any area covered.",
    servicesNote:
      "All five services — exterior wash, deep clean, interior clean, paint protection, and headlight restoration — are available throughout Colchester with no call-out distance to travel.",
  },
  {
    slug: "ipswich",
    serviceNotes: {
      "exterior-wash": "We come up the A12 from Colchester to Ipswich, so you get the same safe hand wash — bodywork, wheels, arches and glass — on your own driveway, without having to look for a car wash across town.",
      "deep-clean": "Because the trip to Ipswich takes 30–40 minutes, a deep clean is a good use of the visit: the whole car done inside and out in one appointment.",
      "interior-clean": "An interior clean in Ipswich covers the full cabin — seats, carpets, mats, dashboard, door cards and interior glass — carried out at your home or workplace.",
      "paint-protection": "In Ipswich, paint protection is usually combined with a wash or deep clean on the same visit, so the protection goes onto freshly prepared paint.",
      "headlight-restoration": "Headlight restoration can be added to any Ipswich visit — or booked on its own if cloudy lenses have come up as an MOT advisory."
    },
    faqs: [
      {
        "question": "Does JS Car Detailing travel from Colchester to Ipswich?",
        "answer": "Yes. Ipswich is part of the regular service area, roughly 30–40 minutes from the Colchester base by road, depending on traffic."
      },
      {
        "question": "Which Ipswich services are most worth booking given the travel time?",
        "answer": "Any service is available, but longer visits like a deep clean, or a wash combined with paint protection, make the most of the trip."
      },
      {
        "question": "Is Ipswich in Suffolk covered, not just Essex?",
        "answer": "Yes. Ipswich is just over the county border in Suffolk and is one of the four towns covered regularly, alongside Colchester, Clacton-on-Sea and Chelmsford."
      }
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Ipswich",
    wikidata: "https://www.wikidata.org/wiki/Q184775",
    name: "Ipswich",
    county: "Suffolk",
    isBase: false,
    driveTimeFromBase: "Approximately 30–40 minutes by road, traffic dependent",
    metaDescription:
      "Mobile car detailing in Ipswich — exterior washes, deep cleans, interior cleans and paint protection at your home or workplace. Fully insured, 7 days.",
    directAnswer:
      "Yes — JS Car Detailing Colchester covers Ipswich as part of its regular mobile service area. The team travels from its Colchester base, roughly 30–40 minutes by road, to carry out exterior washes, deep cleans, interior cleans, paint protection, and headlight restoration at your home or workplace in Ipswich.",
    localContext:
      "Ipswich, Suffolk's county town, sits just over the county border from Essex and is one of the four towns JS Car Detailing Colchester regularly serves outside its home base. From the waterfront and marina to the surrounding residential estates, mobile detailing means no drive down to Colchester is needed — the service comes to you.",
    servicesNote:
      "Paint protection and deep cleans are popular in Ipswich alongside standard exterior washes — get a quote for your vehicle and postcode.",
  },
  {
    slug: "clacton-on-sea",
    serviceNotes: {
      "exterior-wash": "Salt-laden sea air settles on bodywork, glass and wheels, so cars kept near the Clacton seafront benefit from being washed more often than inland cars — a regular mobile wash keeps on top of it.",
      "deep-clean": "A deep clean suits coastal cars that have gone a while without attention: the exterior gets a full wash and decontamination, and sand and grit tracked into the cabin get cleared out.",
      "interior-clean": "Beach trips bring sand into footwells, seat seams and boots. An interior clean vacuums it out properly, along with the dashboard, door cards and glass.",
      "paint-protection": "On the coast, paint protection is worth considering more seriously: applied after a wash, it adds a layer that helps paintwork cope with salt air and everyday grime.",
      "headlight-restoration": "Sun exposure is one of the main causes of cloudy headlights, and on the coast cars often sit out in the open — restoration brings back clarity and light output."
    },
    faqs: [
      {
        "question": "How often should I wash my car if I live near the seafront in Clacton-on-Sea?",
        "answer": "More often than inland, because salt air speeds up grime buildup. Many coastal drivers keep to a regular wash routine; get in touch to arrange one."
      },
      {
        "question": "Do you cover Jaywick, Holland-on-Sea and St Osyth?",
        "answer": "Clacton-on-Sea is covered regularly, along with the surrounding area. Give us your postcode when you book and we'll confirm availability."
      },
      {
        "question": "How long does it take to get to Clacton-on-Sea from your base?",
        "answer": "About 25–30 minutes by road from the Colchester base, depending on traffic."
      }
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Clacton-on-Sea",
    wikidata: "https://www.wikidata.org/wiki/Q985833",
    name: "Clacton-on-Sea",
    county: "Essex",
    isBase: false,
    driveTimeFromBase: "Approximately 25–30 minutes by road, traffic dependent",
    metaDescription:
      "Mobile car detailing in Clacton-on-Sea — exterior washes, deep cleans, interior cleans and headlight restoration at your door. Fully insured, 7 days.",
    directAnswer:
      "Yes — JS Car Detailing Colchester covers Clacton-on-Sea as part of its mobile service area, around 25–30 minutes from its Colchester base. Exterior washes, deep cleans, interior cleans, paint protection, and headlight restoration are all carried out at your home or workplace in Clacton-on-Sea.",
    localContext:
      "Clacton-on-Sea is a coastal town on Essex's Sunshine Coast, known for its seafront, pier, and a steady flow of salt air and coastal grime that bodywork and paintwork feel more than inland towns. That makes regular exterior washing and paint protection particularly relevant for vehicles kept near the coast.",
    servicesNote:
      "Exterior wash and paint protection are worth considering more regularly for vehicles parked near the seafront, where salt air speeds up grime buildup.",
  },
  {
    slug: "chelmsford",
    serviceNotes: {
      "exterior-wash": "We travel down the A12 to Chelmsford, so it's best to book an exterior wash a little ahead — especially if you want it on a regular schedule.",
      "deep-clean": "Chelmsford is the furthest of the four regular towns, which makes it a natural fit for a deep clean: one visit covers the whole car inside and out.",
      "interior-clean": "Whether you're in the city centre or a nearby village, an interior clean in Chelmsford is done wherever the car is parked — no need to bring it anywhere.",
      "paint-protection": "Paint protection in Chelmsford is applied after a wash on the same visit, so it can be booked together as one appointment.",
      "headlight-restoration": "Headlight restoration can be added to any Chelmsford visit to make the most of the journey, or booked on its own."
    },
    faqs: [
      {
        "question": "How far ahead should I book a car valet in Chelmsford?",
        "answer": "A little further ahead than in Colchester. Chelmsford is the furthest of the four regular towns, so bookings are arranged to fit the route."
      },
      {
        "question": "Does JS Car Detailing cover villages around Chelmsford?",
        "answer": "Chelmsford and the surrounding area are covered. Give us your postcode when you book and we'll confirm availability for your address."
      },
      {
        "question": "How long does it take to reach Chelmsford from Colchester?",
        "answer": "Approximately 30–40 minutes by road via the A12, depending on traffic."
      }
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Chelmsford",
    wikidata: "https://www.wikidata.org/wiki/Q210985",
    name: "Chelmsford",
    county: "Essex",
    isBase: false,
    driveTimeFromBase: "Approximately 30–40 minutes by road, traffic dependent",
    metaDescription:
      "Mobile car detailing in Chelmsford — exterior washes, deep cleans, interior cleans and paint protection at your home or workplace. Fully insured, 7 days.",
    directAnswer:
      "Yes — JS Car Detailing Colchester covers Chelmsford as part of its mobile service area, roughly 30–40 minutes from its Colchester base via the A12. Exterior washes, deep cleans, interior cleans, paint protection, and headlight restoration are all available at your home or workplace in Chelmsford.",
    localContext:
      "Chelmsford is Essex's county town and has been a city since 2012, with a mix of dense city-centre living and surrounding suburbs and villages. As the furthest of the four regular service towns from the Colchester base, Chelmsford bookings are typically arranged a little further ahead to fit the route.",
    servicesNote:
      "All five services are available in Chelmsford — get in touch to check availability for your part of the city or surrounding area.",
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((area) => area.slug === slug);
}
