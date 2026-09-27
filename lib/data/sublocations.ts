import type { Faq } from "./services";

// Colchester neighbourhoods served from the King Edward Quay base. Only the
// home city gets sub-location pages: it's where the business is based and
// where local facts could be verified. Every local claim below is sourced:
//   - place facts: the linked Wikipedia article, or OpenStreetMap where no
//     article exists (Highwoods)
//   - postcode districts: postcodes.io lookups on each place's coordinates
//   - distances: straight-line miles from business.geo, rounded
// Do not add a neighbourhood without doing the same checks.
export type Sublocation = {
  slug: string;
  name: string;
  /** Parent area slug in lib/data/areas.ts. */
  parent: "colchester";
  postcodeDistricts: string[];
  /** Straight-line miles from the King Edward Quay base. */
  milesFromBase: number;
  geo: { latitude: number; longitude: number };
  wikipedia: string | null;
  /** Nearby neighbourhoods also covered, mentioned in copy (verified). */
  alsoCovers?: string[];
  /** Search-snippet description, ≤160 characters. */
  metaDescription: string;
  /** 40–60 word self-contained answer — first thing on the page. */
  directAnswer: string;
  /** Verified facts about the place. */
  localContext: string;
  /** How detailing here works in practice — the page's own angle. */
  detailingNote: string;
  /** Service slugs most relevant here, in order, with the reason. */
  suggested: { service: string; reason: string }[];
  faqs: Faq[];
};

export const sublocations: Sublocation[] = [
  {
    slug: "the-hythe",
    name: "The Hythe",
    parent: "colchester",
    postcodeDistricts: ["CO2"],
    milesFromBase: 0.3,
    geo: { latitude: 51.8827, longitude: 0.9262 },
    wikipedia: "https://en.wikipedia.org/wiki/The_Hythe,_Essex",
    metaDescription:
      "Mobile car detailing in The Hythe, Colchester (CO2) — our base is on King Edward Quay, so washes and valets here are right on our doorstep.",
    directAnswer:
      "JS Car Detailing Colchester is based at King Edward Quay in The Hythe, so this is the closest area we cover — around a third of a mile from base. Exterior washes, interior cleans, deep cleans, paint protection and headlight restoration are all carried out at your home or workplace in The Hythe, 7 days a week from 8am.",
    localContext:
      "The Hythe sits in south-east Colchester on the River Colne and was historically a hamlet and the city's port. It was home to the Paxman factory, and Hythe railway station on the Sunshine Coast Line links it to Colchester, Clacton-on-Sea and Walton-on-the-Naze.",
    detailingNote:
      "Because the van starts its day a few minutes away, The Hythe is the easiest place for us to fit in a same-week slot or an early 8am start before work. Riverside flats and newer quayside developments often have allocated or shared parking — tell us where the car will be and whether there's an outside tap, and we'll plan around it.",
    suggested: [
      { service: "exterior-wash", reason: "Quick to schedule this close to base, so easy to keep on a regular routine." },
      { service: "interior-clean", reason: "Ideal for flats where the car is the only thing we need access to." },
      { service: "headlight-restoration", reason: "A short on-site job that fits easily around a working day." },
    ],
    faqs: [
      {
        question: "Is The Hythe the closest area JS Car Detailing covers?",
        answer:
          "Yes. The business is based at King Edward Quay in The Hythe, about 0.3 miles from most addresses in the area, so it's the shortest trip of anywhere we cover.",
      },
      {
        question: "Can you detail a car parked at a quayside flat in The Hythe?",
        answer:
          "Usually, yes — as long as we can safely reach the vehicle where it's parked. Let us know the parking arrangement and whether water is available when you book, and we'll confirm what's needed.",
      },
    ],
  },
  {
    slug: "old-heath",
    name: "Old Heath",
    parent: "colchester",
    postcodeDistricts: ["CO2"],
    milesFromBase: 0.6,
    geo: { latitude: 51.871, longitude: 0.926 },
    wikipedia: "https://en.wikipedia.org/wiki/Old_Heath",
    metaDescription:
      "Mobile car valeting in Old Heath, Colchester (CO2) — exterior washes, interior cleans and deep cleans at your door, about half a mile from our base.",
    directAnswer:
      "Yes — JS Car Detailing Colchester covers Old Heath, around half a mile south of its King Edward Quay base. Every service, from an exterior hand wash to a full deep clean, is carried out on your driveway or street in Old Heath, so there's no need to take the car anywhere.",
    localContext:
      "Old Heath is a south-east Colchester parish that dates back to Saxon times. It was originally called 'Old Hythe' because it was Colchester's first port, before the Hythe took over — 'hythe' comes from the Old English for 'landing place'.",
    detailingNote:
      "Old Heath is mostly residential streets with a mix of driveways and on-street parking. On-street is fine for most jobs; for a deep clean, which takes longer, a driveway or a quieter spot makes the visit smoother for you and your neighbours.",
    suggested: [
      { service: "deep-clean", reason: "Our longest service — handy to have done this close to base." },
      { service: "exterior-wash", reason: "A regular wash keeps paintwork easier to maintain between deeper details." },
      { service: "paint-protection", reason: "Best applied straight after a wash, while the paint is clean." },
    ],
    faqs: [
      {
        question: "Do you cover all of Old Heath, including on-street parking?",
        answer:
          "Yes, Old Heath is covered in full. Most services work fine with on-street parking; for a deep clean a driveway or quieter spot helps, as the visit takes longer.",
      },
      {
        question: "How far is Old Heath from JS Car Detailing's base?",
        answer:
          "About 0.6 miles in a straight line from the King Edward Quay base in The Hythe.",
      },
    ],
  },
  {
    slug: "greenstead",
    name: "Greenstead",
    parent: "colchester",
    postcodeDistricts: ["CO4"],
    milesFromBase: 0.9,
    geo: { latitude: 51.8906, longitude: 0.9373 },
    wikipedia: "https://en.wikipedia.org/wiki/Greenstead",
    metaDescription:
      "Mobile car detailing in Greenstead, Colchester (CO4) — interior cleans, washes and deep cleans for family cars, done outside your home.",
    directAnswer:
      "JS Car Detailing Colchester covers Greenstead, less than a mile from its base at King Edward Quay. Interior cleans, exterior washes, deep cleans, paint protection and headlight restoration are carried out outside your home in Greenstead, 7 days a week from 8am — you don't need to drive anywhere.",
    localContext:
      "Greenstead is a large residential suburb and electoral ward on the eastern side of Colchester's built-up area. At the 2021 census it had a population of 14,377.",
    detailingNote:
      "For everyday family cars, the cabin is usually where the work is: crumbs in the seat seams, muddy footwells and marked seat fabric. In a big residential area like Greenstead, an interior clean done outside the house is often all a family car needs — no taking it anywhere.",
    suggested: [
      { service: "interior-clean", reason: "The best match for family cars with busy cabins." },
      { service: "deep-clean", reason: "For a full reset inside and out when it's been a while." },
      { service: "exterior-wash", reason: "Pairs well with an interior clean on the same visit." },
    ],
    faqs: [
      {
        question: "Can you clean a family car's interior in Greenstead without an exterior wash?",
        answer:
          "Yes. The interior clean is offered as a standalone service, so you can book just the cabin — seats, carpets, dashboard, door cards and glass.",
      },
      {
        question: "Do you cover all of Greenstead?",
        answer:
          "Yes. Greenstead is under a mile from the King Edward Quay base and is covered as part of Colchester, 7 days a week from 8am.",
      },
    ],
  },
  {
    slug: "wivenhoe",
    name: "Wivenhoe",
    parent: "colchester",
    postcodeDistricts: ["CO7"],
    milesFromBase: 1.6,
    geo: { latitude: 51.86667, longitude: 0.9625 },
    wikipedia: "https://en.wikipedia.org/wiki/Wivenhoe",
    metaDescription:
      "Mobile car detailing in Wivenhoe (CO7) — hand washes, interior cleans and paint protection at your home, just down the Colne from our Hythe base.",
    directAnswer:
      "Yes — JS Car Detailing Colchester covers Wivenhoe, about 1.6 miles from its base at King Edward Quay along the River Colne. Exterior washes, interior cleans, deep cleans, paint protection and headlight restoration are all carried out at your home in Wivenhoe, so there's no need to drive into Colchester.",
    localContext:
      "Wivenhoe is a town and civil parish in the City of Colchester district, about 3 miles south-east of the city centre, with a historic core on the tidal River Colne. Its history centres on fishing, shipbuilding and smuggling, and much of lower Wivenhoe is a designated conservation area. The main campus of the University of Essex lies between Colchester and Wivenhoe.",
    detailingNote:
      "Parking in the older conservation-area streets near the quay can be limited, while the town has grown up the hill towards the former hamlet of Wivenhoe Cross. Wherever you are in Wivenhoe, let us know where the car will be so we can plan access — we can often work wherever it's legally parked.",
    suggested: [
      { service: "exterior-wash", reason: "Keeps paintwork clean between deeper details, without a trip into Colchester." },
      { service: "paint-protection", reason: "Adds a layer of defence after a wash for cars kept outdoors." },
      { service: "interior-clean", reason: "Ideal where parking is tight — we only need access to the car." },
    ],
    faqs: [
      {
        question: "Can you detail cars in Wivenhoe's conservation-area streets?",
        answer:
          "Often, yes — as long as the car is legally parked and we can work safely around it. Tell us the street and parking situation when you book, and we'll confirm the best approach.",
      },
      {
        question: "Is Wivenhoe covered as part of Colchester?",
        answer:
          "Yes. Wivenhoe is in the City of Colchester district and about 1.6 miles from our King Edward Quay base, so it's covered on the same basis as the rest of Colchester.",
      },
    ],
  },
  {
    slug: "berechurch",
    name: "Berechurch",
    parent: "colchester",
    postcodeDistricts: ["CO2"],
    milesFromBase: 1.8,
    geo: { latitude: 51.86, longitude: 0.9 },
    wikipedia: "https://en.wikipedia.org/wiki/Berechurch",
    alsoCovers: ["Shrub End"],
    metaDescription:
      "Mobile car valeting in Berechurch and Shrub End, Colchester (CO2) — exterior washes, interior cleans and deep cleans carried out at your door.",
    directAnswer:
      "JS Car Detailing Colchester covers Berechurch and neighbouring Shrub End in south Colchester, about 1.8 miles from its King Edward Quay base. All five services — exterior wash, interior clean, deep clean, paint protection and headlight restoration — are carried out at your home, 7 days a week from 8am.",
    localContext:
      "Berechurch is a suburb lying to the south of Colchester city centre, in the CO2 postcode district. Shrub End sits alongside it to the west and is covered on the same visits.",
    detailingNote:
      "South Colchester is a short run from our base, which makes Berechurch and Shrub End straightforward to fit in — including weekend slots, since we work 7 days a week. If you work weekdays, a Saturday or Sunday morning at home is often the easiest time to have the car done.",
    suggested: [
      { service: "exterior-wash", reason: "A regular weekend wash at home, with no queue at a car wash." },
      { service: "deep-clean", reason: "A full inside-and-out reset for cars that haven't been cleaned in a while." },
      { service: "headlight-restoration", reason: "Worth adding if lenses have gone cloudy before an MOT." },
    ],
    faqs: [
      {
        question: "Do you cover Shrub End as well as Berechurch?",
        answer:
          "Yes. Shrub End is next to Berechurch in south Colchester, and both are covered as part of Colchester.",
      },
      {
        question: "Can I book a weekend car valet in Berechurch?",
        answer:
          "Yes. JS Car Detailing Colchester works 7 days a week from 8am, so Saturday and Sunday appointments are available, subject to availability.",
      },
    ],
  },
  {
    slug: "myland",
    name: "Myland",
    parent: "colchester",
    postcodeDistricts: ["CO4"],
    milesFromBase: 2.4,
    geo: { latitude: 51.90628, longitude: 0.8969 },
    wikipedia: "https://en.wikipedia.org/wiki/Myland",
    alsoCovers: ["Mile End"],
    metaDescription:
      "Mobile car detailing in Myland and Mile End, Colchester (CO4) — hand washes, interior cleans and deep cleans at home or while you're at work.",
    directAnswer:
      "Yes — JS Car Detailing Colchester covers Myland (also called Mile End) in north Colchester, about 2.4 miles from its King Edward Quay base. Exterior washes, interior cleans, deep cleans, paint protection and headlight restoration can be carried out at your home, or at your workplace if the car is parked there during the day.",
    localContext:
      "Myland, also known as Mile End, is a civil parish in the City of Colchester district and forms a northern suburb of the city. The original village began about a mile north of Colchester's centre, which probably accounts for its name. At the 2021 census the parish had a population of 18,094. Colchester Hospital is nearby, on the northern side of the city.",
    detailingNote:
      "If you commute or work shifts, a mobile detail can happen while the car sits at home on a day off — or at work, where the site allows it. Give us the address the car will actually be at on the day and any access or permit rules for the car park.",
    suggested: [
      { service: "interior-clean", reason: "Can be done while the car is parked, with no drop-off needed." },
      { service: "exterior-wash", reason: "Keeps a daily commuter car presentable week to week." },
      { service: "paint-protection", reason: "Helps a car that sits outside all day shrug off grime." },
    ],
    faqs: [
      {
        question: "Can you detail my car at work instead of at home in Myland?",
        answer:
          "Often, yes — the service is fully mobile, so we can come to your workplace if the car park allows it. Check any site rules or permits first and give us the exact location when you book.",
      },
      {
        question: "Is Mile End the same area as Myland?",
        answer:
          "Yes. Myland is also known as Mile End, and it's covered in full as part of Colchester.",
      },
    ],
  },
  {
    slug: "highwoods",
    name: "Highwoods",
    parent: "colchester",
    postcodeDistricts: ["CO4"],
    milesFromBase: 2.3,
    geo: { latitude: 51.911, longitude: 0.91996 },
    wikipedia: null,
    metaDescription:
      "Mobile car detailing in Highwoods, Colchester (CO4) — washes, interior cleans and deep cleans on your driveway, 7 days a week from 8am.",
    directAnswer:
      "JS Car Detailing Colchester covers Highwoods in north-east Colchester, around 2.3 miles from its King Edward Quay base. Every service — exterior wash, interior clean, deep clean, paint protection and headlight restoration — is carried out on your driveway or street in Highwoods, 7 days a week from 8am.",
    localContext:
      "Highwoods is a residential suburb in north-east Colchester, in the CO4 postcode district, with its own local centre at Highwoods Square.",
    detailingNote:
      "If your Highwoods home has a driveway, that's the ideal setup for a mobile detail — we can work right beside the car with room to open every door. On-street parking works for most services too; if there's an outside tap, mention it when you book.",
    suggested: [
      { service: "deep-clean", reason: "Driveway space makes a full inside-and-out detail easy to do at home." },
      { service: "paint-protection", reason: "Best done on a driveway straight after a thorough wash." },
      { service: "interior-clean", reason: "Doors fully open on a driveway means every seam and footwell gets done." },
    ],
    faqs: [
      {
        question: "Do you need a driveway to detail a car in Highwoods?",
        answer:
          "No, but it helps. A driveway gives room to open every door and work around the car; on-street parking works for most services too.",
      },
      {
        question: "How far is Highwoods from JS Car Detailing's base?",
        answer:
          "About 2.3 miles in a straight line from the King Edward Quay base, and it's covered as part of Colchester.",
      },
    ],
  },
  {
    slug: "lexden",
    name: "Lexden",
    parent: "colchester",
    postcodeDistricts: ["CO3"],
    milesFromBase: 2.7,
    geo: { latitude: 51.8833, longitude: 0.8667 },
    wikipedia: "https://en.wikipedia.org/wiki/Lexden",
    alsoCovers: ["Prettygate"],
    metaDescription:
      "Mobile car detailing in Lexden and Prettygate, Colchester (CO3) — paint protection, washes and interior cleans carried out at your home.",
    directAnswer:
      "Yes — JS Car Detailing Colchester covers Lexden and neighbouring Prettygate in west Colchester, around 2.7 miles from its King Edward Quay base. Exterior washes, interior cleans, deep cleans, paint protection and headlight restoration are all carried out at your home, so the car never has to leave the drive.",
    localContext:
      "Lexden is a suburb about a mile west of Colchester city centre. It was historically a separate village and parish, and its name comes from the Old English for 'Leaxa's valley'. It has two local nature reserves, two 400-year-old watermills and an iron bridge over the River Colne. Prettygate lies alongside it and is covered on the same visits.",
    detailingNote:
      "With nature reserves and the Colne valley on the doorstep, plenty of Lexden cars end up parked near trees — and sap, leaf litter and bird droppings are hard on paintwork. Regular washing, followed by paint protection, makes that fallout much easier to remove before it marks the finish.",
    suggested: [
      { service: "paint-protection", reason: "Helps sap and droppings come off before they etch the paint." },
      { service: "exterior-wash", reason: "Regular washing clears tree fallout before it builds up." },
      { service: "headlight-restoration", reason: "Brings back clarity on older, well-kept cars." },
    ],
    faqs: [
      {
        question: "Does paint protection help with tree sap and bird droppings in Lexden?",
        answer:
          "It helps. Paint protection is applied to clean, prepared paint and adds a layer that makes everyday contaminants easier to remove. Droppings and sap should still be washed off promptly.",
      },
      {
        question: "Do you cover Prettygate as well as Lexden?",
        answer:
          "Yes. Prettygate is next to Lexden in west Colchester, and both are covered as part of Colchester.",
      },
    ],
  },
  {
    slug: "stanway",
    name: "Stanway",
    parent: "colchester",
    postcodeDistricts: ["CO3"],
    milesFromBase: 4.8,
    geo: { latitude: 51.8817, longitude: 0.8173 },
    wikipedia: "https://en.wikipedia.org/wiki/Stanway,_Essex",
    metaDescription:
      "Mobile car detailing in Stanway, Colchester (CO3) — exterior washes, deep cleans and headlight restoration for A12 commuter cars, at your home.",
    directAnswer:
      "JS Car Detailing Colchester covers Stanway on Colchester's western edge, around 4.8 miles from its King Edward Quay base. Exterior washes, interior cleans, deep cleans, paint protection and headlight restoration are carried out at your home in Stanway, 7 days a week from 8am.",
    localContext:
      "Stanway is a civil parish that was historically a village and is now effectively a western suburb of Colchester, about 3 miles west of the city centre near the A12. Its name is Anglo-Saxon for the 'stone way' of the Roman road that is now the A12. It includes the Tollgate shopping area, and Colchester Zoo is on Maldon Road in Stanway. At the 2021 census the parish had a population of 12,298.",
    detailingNote:
      "Stanway sits right by the A12, and if your car does regular fast-road miles it will collect bug splatter on the front end, road film on the lower panels and brake dust on the wheels. A proper hand wash that deals with the wheels and arches, plus clear headlights, makes a noticeable difference on a commuter car.",
    suggested: [
      { service: "exterior-wash", reason: "Deals with A12 road film, bugs and wheel brake dust." },
      { service: "headlight-restoration", reason: "Cloudy lenses matter most on cars doing lots of night miles." },
      { service: "deep-clean", reason: "A full reset for high-mileage cars inside and out." },
    ],
    faqs: [
      {
        question: "Can a mobile wash remove bug splatter from A12 driving?",
        answer:
          "The exterior wash covers the bodywork, glass, wheels and arches, including the front end where bug residue collects. Heavily baked-on residue is best dealt with regularly, before it has time to harden.",
      },
      {
        question: "Is Stanway covered as part of Colchester?",
        answer:
          "Yes. Stanway is part of Colchester's built-up area and is covered on the same basis, around 4.8 miles from the King Edward Quay base.",
      },
    ],
  },
];

export function getSublocation(parent: string, slug: string): Sublocation | undefined {
  return sublocations.find((s) => s.parent === parent && s.slug === slug);
}

export function getSublocationsFor(parent: string): Sublocation[] {
  return sublocations.filter((s) => s.parent === parent);
}

/** Closest other neighbourhoods by straight-line distance — for sibling links. */
export function nearestSublocations(current: Sublocation, count = 3): Sublocation[] {
  const rad = (x: number) => (x * Math.PI) / 180;
  const dist = (a: Sublocation) => {
    const dLat = rad(a.geo.latitude - current.geo.latitude);
    const dLon = rad(a.geo.longitude - current.geo.longitude) * Math.cos(rad(current.geo.latitude));
    return Math.hypot(dLat, dLon);
  };
  return sublocations
    .filter((s) => s.parent === current.parent && s.slug !== current.slug)
    .sort((a, b) => dist(a) - dist(b))
    .slice(0, count);
}
