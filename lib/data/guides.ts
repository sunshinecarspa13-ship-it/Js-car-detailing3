import type { Faq } from "./services";
import type { ContentSection } from "./subservices";

// Resource / comparison content for topical depth. General car-care
// guidance only — no prices, product brands, certifications or claims about
// the business that aren't in lib/data/business.ts. Every guide links into
// the service and area pages it supports (see `related`).
export type Guide = {
  slug: string;
  title: string;
  /** Shorter label for cards and link lists. */
  shortTitle: string;
  /** ≤160 characters. */
  metaDescription: string;
  /** Self-contained 2–3 sentence answer, shown first. */
  directAnswer: string;
  kind: "comparison" | "guide";
  published: string;
  sections: ContentSection[];
  table?: {
    caption: string;
    columns: string[];
    rows: string[][];
  };
  /** Internal pages this guide supports, linked in-body and at the end. */
  related: { href: string; label: string }[];
  /** Authoritative external sources, where a claim needs one. */
  sources?: { label: string; href: string }[];
  faqs: Faq[];
};

export const guides: Guide[] = [
  {
    slug: "exterior-wash-vs-interior-clean-vs-deep-clean",
    title: "Exterior wash vs interior clean vs deep clean: which do you need?",
    shortTitle: "Exterior wash vs interior clean vs deep clean",
    metaDescription:
      "Not sure which car cleaning service to book? Compare an exterior wash, interior clean and deep clean — what each covers, and when each makes sense.",
    directAnswer:
      "Book an exterior wash if only the outside needs attention, an interior clean if the cabin is the problem, and a deep clean when both inside and outside need a thorough reset. A deep clean combines exterior and interior work in one longer visit and suits cars that haven't been properly cleaned in a while.",
    kind: "comparison",
    published: "2026-09-27",
    table: {
      caption: "What each service covers",
      columns: ["", "Exterior wash", "Interior clean", "Deep clean"],
      rows: [
        ["Hand wash of bodywork and glass", "Yes", "No", "Yes"],
        ["Wheels and wheel arches", "Yes", "No", "Yes"],
        ["Exterior decontamination", "No", "No", "Yes"],
        ["Vacuum of seats, carpets and boot", "No", "Yes", "Yes"],
        ["Dashboard, door cards and trim", "No", "Yes", "Yes"],
        ["Interior glass", "No", "Yes", "Yes"],
        ["Heavily soiled or neglected areas", "—", "—", "Yes"],
        ["Best for", "Regular upkeep", "Busy cabins", "A full reset"],
      ],
    },
    sections: [
      {
        heading: "Choose an exterior wash when…",
        paragraphs: [
          "The cabin is fine but the paintwork, wheels and glass are dirty. An exterior wash is the service most people keep on a regular routine, because clean paint is easier to maintain and dirt left sitting on it for weeks is harder to shift.",
          "It's also the right choice if you're planning paint protection: the protection has to go onto clean paint, so a wash comes first.",
        ],
      },
      {
        heading: "Choose an interior clean when…",
        paragraphs: [
          "The outside is presentable but the inside isn't: crumbs in the seat seams, muddy footwells, dusty vents, marked seats or smeary glass. Family cars, work vehicles and cars that carry pets usually need interior attention more often than exterior.",
          "An interior clean can be booked on its own, which makes it the easiest service to fit in when the car is parked on a street or at a flat — we only need access to the vehicle.",
        ],
      },
      {
        heading: "Choose a deep clean when…",
        paragraphs: [
          "Both the inside and outside need a proper reset. Typical reasons are a car that hasn't been cleaned in months, a second-hand car you've just bought, getting a car ready to sell, or the end of a long winter.",
          "Because it covers the whole vehicle and goes further on heavily soiled areas, a deep clean is the longest of the three visits.",
        ],
      },
      {
        heading: "Still not sure?",
        paragraphs: [
          "Describe the car's condition when you book — a couple of photos help — and we'll suggest the service that fits. You can also choose \"Not sure yet\" on the booking form.",
        ],
      },
    ],
    related: [
      { href: "/services/exterior-wash", label: "Exterior Wash" },
      { href: "/services/interior-clean", label: "Interior Clean" },
      { href: "/services/deep-clean", label: "Deep Clean" },
      { href: "/services/paint-protection", label: "Paint Protection" },
    ],
    faqs: [
      {
        question: "What's the difference between a valet and a deep clean?",
        answer:
          "\"Valet\" is often used loosely for any car clean. A deep clean is the most thorough of the three services here, combining exterior and interior work and targeting heavily soiled areas.",
      },
      {
        question: "Can I book an interior clean and an exterior wash together?",
        answer:
          "Yes. If both need doing, a deep clean covers the inside and outside in one visit and goes further on heavily soiled areas.",
      },
    ],
  },
  {
    slug: "mobile-car-valeting-vs-drive-through-car-wash",
    title: "Mobile car valeting vs a drive-through car wash",
    shortTitle: "Mobile valeting vs drive-through car wash",
    metaDescription:
      "Mobile car valeting or a drive-through car wash? Compare convenience, what touches your paint, and how thorough each is — to choose the right one.",
    directAnswer:
      "A drive-through car wash is quick and cheap for a surface clean, but you have to drive there and it cleans with brushes or cloth on a fixed cycle. Mobile valeting comes to your home or workplace and is done by hand, so it's more thorough and can cover the interior too — at the cost of a longer, booked appointment.",
    kind: "comparison",
    published: "2026-09-27",
    table: {
      caption: "Mobile valeting and drive-through washes compared",
      columns: ["", "Mobile valeting", "Drive-through car wash"],
      rows: [
        ["Where it happens", "Your home or workplace", "At the wash site"],
        ["Your time", "Hand over the keys, carry on with your day", "Drive there, queue, wait"],
        ["How it's cleaned", "By hand", "Brushes, cloth strips or jets on a fixed cycle"],
        ["Wheels, arches and door shuts", "Cleaned by hand", "Limited"],
        ["Interior cleaning", "Available", "Usually not, or self-service vacuums"],
        ["Adapts to the car's condition", "Yes", "No — same cycle every time"],
        ["Best for", "Thorough cleans and busy schedules", "A quick surface rinse"],
      ],
    },
    sections: [
      {
        heading: "Convenience: who travels?",
        paragraphs: [
          "With a drive-through wash, you do the travelling and the waiting. With mobile valeting, the detailer comes to the car — on your driveway, outside your flat or at work — so you can carry on with your day while it's done.",
          "For people without a driveway or time on weekdays, that's often the deciding factor. JS Car Detailing Colchester works 7 days a week from 8am across Colchester, Ipswich, Clacton-on-Sea and Chelmsford.",
        ],
      },
      {
        heading: "What touches your paint",
        paragraphs: [
          "Automated washes clean with rotating brushes, cloth strips or high-pressure jets on the same cycle for every car. A hand wash lets the person washing adapt to the car: pre-washing heavy dirt first, taking care around trim and badges, and cleaning wheels and arches properly.",
          "If you're protective of your paintwork — a new car, dark paint or a car with paint protection — a careful hand wash is the lower-risk option.",
        ],
      },
      {
        heading: "When a drive-through makes sense",
        paragraphs: [
          "If you just want a quick surface rinse between proper cleans and a car wash is on your route, a drive-through is fast and inexpensive. Many drivers use both: a quick wash when needed, and a mobile valet for a thorough clean inside and out.",
        ],
      },
    ],
    related: [
      { href: "/services/exterior-wash", label: "Mobile Exterior Wash" },
      { href: "/services/exterior-wash/snow-foam-wash", label: "Snow Foam Wash" },
      { href: "/services/interior-clean", label: "Interior Clean" },
      { href: "/areas", label: "Areas we cover" },
    ],
    faqs: [
      {
        question: "Do I need to be home for a mobile car valet?",
        answer:
          "You need to give access to the vehicle at the appointment time, and some services need a nearby water source — confirm what's needed for your address when you book.",
      },
      {
        question: "Is mobile valeting more thorough than a drive-through wash?",
        answer:
          "Generally, yes. It's done by hand, can cover wheels, arches, door shuts and the interior, and adapts to the car's condition rather than running a fixed cycle.",
      },
    ],
  },
  {
    slug: "why-headlights-go-cloudy",
    title: "Why do headlights go cloudy or yellow — and can they be restored?",
    shortTitle: "Why headlights go cloudy or yellow",
    metaDescription:
      "Why headlights turn cloudy or yellow, how it affects light output and your MOT, and when headlight restoration is worth doing instead of replacement.",
    directAnswer:
      "Most modern headlight lenses are made of polycarbonate plastic with a protective coating. Over years of sun exposure and weathering that coating breaks down, and the lens oxidises — turning cloudy or yellow and cutting the light that gets through. In most cases the outer lens can be restored rather than replaced.",
    kind: "guide",
    published: "2026-09-27",
    sections: [
      {
        heading: "What causes cloudy headlights?",
        paragraphs: [
          "Plastic headlight lenses are light and tough, but they're protected by a factory coating that doesn't last forever. UV light from the sun, heat, road grit, harsh cleaning chemicals and years of weather gradually break that coating down.",
          "Once it's gone, the plastic itself starts to oxidise. You see it as a hazy, frosted or yellowed surface — usually worst on the top of the lens, which gets the most sun.",
        ],
      },
      {
        heading: "Why it matters: light output and the MOT",
        paragraphs: [
          "A cloudy lens scatters and blocks light, so the beam is weaker and less well defined at night. It also makes an otherwise tidy car look older.",
          "Headlamp condition and aim are checked at the MOT. The DVSA's inspection manual sets out what testers look for, and you can check whether your car's headlamps have been flagged at a previous test using the GOV.UK MOT history service.",
        ],
      },
      {
        heading: "Restoration vs replacement",
        paragraphs: [
          "Because the damage is on the outer surface of the lens, it can usually be treated rather than replaced. Headlight restoration removes the oxidised layer and brings back clarity, which is far less disruptive than buying new headlamp units.",
          "Replacement is still needed if a lens is cracked, if moisture is getting inside the unit, or if the damage is inside the headlamp rather than on the surface.",
        ],
        bullets: [
          "Hazy, frosted or yellow outer lens — usually restorable",
          "Cracked lens or condensation inside — needs repair or replacement",
          "Dim beam with a clear lens — likely a bulb or aim issue, not the lens",
        ],
      },
      {
        heading: "Keeping headlights clear afterwards",
        paragraphs: [
          "Regular washing with car-safe products, and avoiding harsh chemicals on the lenses, helps restored headlights stay clear for longer. Cars that live outdoors will always be exposed to more sun, so keep an eye on the lenses.",
        ],
      },
    ],
    related: [
      { href: "/services/headlight-restoration", label: "Headlight Restoration" },
      { href: "/services/exterior-wash", label: "Exterior Wash" },
      { href: "/areas/clacton-on-sea", label: "Detailing in Clacton-on-Sea" },
    ],
    sources: [
      {
        label: "DVSA MOT inspection manual — lamps, reflectors and electrical equipment (GOV.UK)",
        href: "https://www.gov.uk/guidance/mot-inspection-manual-for-private-passenger-and-light-commercial-vehicles/4-lamps-reflectors-and-electrical-equipment",
      },
      { label: "Check MOT history of a vehicle (GOV.UK)", href: "https://www.gov.uk/check-mot-history" },
    ],
    faqs: [
      {
        question: "Can cloudy headlights fail an MOT?",
        answer:
          "Headlamp condition and output are part of the MOT inspection. Check the DVSA inspection manual on GOV.UK for the exact standard, and your vehicle's MOT history for any previous advisories.",
      },
      {
        question: "Is headlight restoration cheaper than replacing headlights?",
        answer:
          "Restoration treats the existing lens rather than replacing the whole unit, which is usually far less disruptive. Contact JS Car Detailing Colchester for a quote for your vehicle.",
      },
    ],
  },
  {
    slug: "protecting-your-car-from-coastal-salt-air",
    title: "Protecting your car from salt air on the Essex coast",
    shortTitle: "Protecting your car from coastal salt air",
    metaDescription:
      "Live near the coast in Clacton-on-Sea or Tendring? How salt air affects paint, glass and metal — and a simple washing and protection routine that helps.",
    directAnswer:
      "Salt carried in sea air settles on cars parked near the coast, and salt speeds up corrosion of exposed metal and dulls paint and glass. The best defence is simple: wash more often than you would inland, pay attention to wheels, arches and lower panels, and add paint protection after a wash.",
    kind: "guide",
    published: "2026-09-27",
    sections: [
      {
        heading: "What salt air does to a car",
        paragraphs: [
          "Near the sea, fine salt particles are carried on the wind and settle as a film on everything outdoors — including your car. Mixed with moisture, salt speeds up corrosion on any exposed or chipped metal, and the film dulls paint and leaves glass smeary.",
          "It builds up gradually, so it's easy not to notice until the paint looks flat or a stone chip starts to rust.",
        ],
      },
      {
        heading: "A simple coastal car-care routine",
        paragraphs: [
          "You don't need anything complicated — mostly, you need to wash more often than drivers inland.",
        ],
        bullets: [
          "Wash regularly, so salt doesn't sit on the paint for weeks",
          "Clean wheels, arches and lower panels thoroughly, where salt and grime collect",
          "Keep glass clean for visibility, inside and out",
          "Add paint protection after a wash, so contaminants are easier to remove",
          "Check for stone chips and get them touched up before they corrode",
        ],
      },
      {
        heading: "Winter: road salt as well as sea salt",
        paragraphs: [
          "In winter, gritted roads add road salt on top of salt air. A wash after a spell of gritting — especially the wheels and arches — stops that salt sitting on the car for weeks.",
        ],
      },
      {
        heading: "Mobile detailing on the coast",
        paragraphs: [
          "JS Car Detailing Colchester covers Clacton-on-Sea, about 25–30 minutes from its Colchester base. Washes, deep cleans and paint protection are carried out at your home, so keeping to a regular routine doesn't mean finding a car wash.",
        ],
      },
    ],
    related: [
      { href: "/areas/clacton-on-sea", label: "Car detailing in Clacton-on-Sea" },
      { href: "/services/exterior-wash", label: "Exterior Wash" },
      { href: "/services/paint-protection", label: "Paint Protection" },
      { href: "/services/deep-clean", label: "Deep Clean" },
    ],
    faqs: [
      {
        question: "How often should I wash my car if I live by the sea?",
        answer:
          "More often than you would inland. Salt builds up as a film, so a regular routine — rather than an occasional big clean — keeps it from sitting on the paint.",
      },
      {
        question: "Does paint protection stop salt damage?",
        answer:
          "It helps rather than stops it: paint protection adds a layer that makes contaminants easier to wash off. Regular washing is still the main defence.",
      },
    ],
  },
  {
    slug: "valeting-your-car-before-selling",
    title: "Valeting your car before selling it: a practical checklist",
    shortTitle: "Valeting your car before selling it",
    metaDescription:
      "Selling or part-exchanging your car? A practical valeting checklist for the inside and outside — what buyers notice, and what to deal with before photos.",
    directAnswer:
      "Before selling or part-exchanging a car, give it a full clean inside and out: buyers judge condition in seconds, and a clean car photographs better and looks cared for. Focus on the cabin, wheels, glass and headlights — the things people notice first — and do it before you take the listing photos.",
    kind: "guide",
    published: "2026-09-27",
    sections: [
      {
        heading: "Why a clean car matters when selling",
        paragraphs: [
          "A dirty or cluttered car makes buyers wonder what else has been neglected. A clean one suggests the car has been looked after — and in online listings, photos of a clean car simply stand out.",
          "Do the clean before the photos, not after, so the listing shows the car at its best.",
        ],
      },
      {
        heading: "Inside the car",
        paragraphs: ["The cabin is where buyers spend their viewing, so it deserves the most attention."],
        bullets: [
          "Empty everything: door pockets, glovebox, boot and under the seats",
          "Vacuum seats, carpets, mats and the boot, including seams and footwells",
          "Treat marks and stains on seat fabric",
          "Wipe the dashboard, door cards, trim and steering wheel",
          "Clean the inside of the glass — smears show up badly in photos",
          "Deal with odours at the source rather than masking them",
        ],
      },
      {
        heading: "Outside the car",
        paragraphs: ["First impressions start with the outside."],
        bullets: [
          "A thorough hand wash of bodywork and glass",
          "Clean wheels and arches — dirty wheels make a car look older",
          "Restore cloudy or yellow headlights",
          "Clean door shuts, which buyers see as soon as they open a door",
        ],
      },
      {
        heading: "Doing it yourself vs booking a deep clean",
        paragraphs: [
          "You can work through the list yourself, but it takes time to do properly. A deep clean covers the inside and outside in one visit, carried out at your home — and headlight restoration can be added if the lenses have gone cloudy.",
        ],
      },
    ],
    related: [
      { href: "/services/deep-clean", label: "Deep Clean" },
      { href: "/services/interior-clean/seat-stain-removal", label: "Seat Stain Removal" },
      { href: "/services/headlight-restoration", label: "Headlight Restoration" },
      { href: "/gallery", label: "Before & after gallery" },
    ],
    faqs: [
      {
        question: "Is it worth valeting a car before part-exchange?",
        answer:
          "A clean car makes a better first impression on anyone assessing it. The deep clean is designed for exactly this kind of full reset before selling.",
      },
      {
        question: "Should I valet my car before or after taking sale photos?",
        answer: "Before — so the listing photos show the car at its best.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}
