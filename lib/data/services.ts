export type Faq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  /**
   * 40–60 word direct answer to the implicit search query, meant to be
   * lifted whole into a snippet, AI Overview, or voice answer. No marketing
   * adjectives — lead with the fact.
   */
  directAnswer: string;
  /** Search-snippet description, ≤160 characters. */
  metaDescription: string;
  summary: string;
  bullets: string[];
  idealFor: string;
  faqs: Faq[];
  icon: "droplets" | "sparkles" | "armchair" | "shield" | "lightbulb";
};

export const services: Service[] = [
  {
    slug: "exterior-wash",
    name: "Exterior Wash",
    shortName: "Exterior Wash",
    metaDescription:
      "Mobile exterior hand wash in Colchester — bodywork, wheels, arches and glass cleaned safely at your home or workplace. Fully insured, 7 days. Get a quote.",
    directAnswer:
      "JS Car Detailing Colchester's exterior wash is a fully mobile hand wash covering the bodywork, wheels, arches, and glass. It's carried out at your home or workplace across Colchester, Ipswich, Clacton-on-Sea, and Chelmsford, using safe wash methods to avoid marring the paintwork. Get a quote for your vehicle.",
    summary:
      "A thorough, safe hand wash for the outside of your vehicle — bodywork, wheels, wheel arches, and glass — carried out wherever you are. It's the entry point into JS Car Detailing Colchester's mobile detailing service, and a regular exterior wash is one of the simplest ways to protect paintwork between deeper details.",
    bullets: [
      "Safe hand wash of bodywork, panels, and glass",
      "Wheel and wheel arch cleaning",
      "Door shuts and fuel cap area wiped down",
      "Exterior glass cleaned for streak-free visibility",
      "Fully mobile — carried out at your home or workplace",
    ],
    idealFor:
      "Drivers who want their vehicle looking sharp regularly without dropping it off anywhere — commuters, daily drivers, and anyone maintaining paintwork between deeper details.",
    faqs: [
      {
        question: "Does the exterior wash include the wheels?",
        answer:
          "Yes. The exterior wash covers wheels and wheel arches as well as bodywork and glass.",
      },
      {
        question: "Do I need to be home for a mobile exterior wash?",
        answer:
          "You need access to your vehicle and a nearby water source at the time of the appointment. Contact JS Car Detailing Colchester on +44 7778 902278 to confirm what's needed for your location.",
      },
      {
        question: "How much does an exterior wash cost near Colchester?",
        answer:
          "Pricing depends on vehicle size and condition — get a free quote by phone or through the contact form.",
      },
    ],
    icon: "droplets",
  },
  {
    slug: "deep-clean",
    name: "Deep Clean",
    shortName: "Deep Clean",
    metaDescription:
      "Full inside-and-out mobile deep clean in Colchester, Ipswich, Clacton-on-Sea and Chelmsford — built-up grime and neglected interiors sorted at your door.",
    directAnswer:
      "A deep clean from JS Car Detailing Colchester is a full inside-and-out detail that goes beyond a standard wash, targeting built-up grime, engine bay dirt, and neglected interiors. It's delivered as a fully mobile service across Colchester, Ipswich, Clacton-on-Sea, and Chelmsford. Get a quote for your vehicle's condition.",
    summary:
      "The deep clean is for vehicles that need more than a routine wash — heavy grime, months of buildup, or a full reset inside and out. It combines exterior and interior attention into a single, more thorough visit, carried out at your home or workplace by an insured mobile detailer.",
    bullets: [
      "Full exterior wash and decontamination",
      "Interior vacuum and surface clean",
      "Attention to heavily soiled or neglected areas",
      "Engine bay cleaning available on request",
      "Fully mobile — no drop-off required",
    ],
    idealFor:
      "Vehicles that haven't been properly cleaned in a while, recent second-hand purchases, or anyone wanting a full reset before selling or after heavy use.",
    faqs: [
      {
        question: "What's the difference between a deep clean and a standard exterior wash?",
        answer:
          "An exterior wash covers the outside of the vehicle only. A deep clean combines exterior and interior work and is built for heavier grime and longer-neglected vehicles.",
      },
      {
        question: "Can a deep clean handle a car that hasn't been cleaned in months?",
        answer:
          "Yes — this is exactly what the deep clean service is designed for. Describe the vehicle's condition when you contact JS Car Detailing Colchester so the visit can be planned accordingly.",
      },
    ],
    icon: "sparkles",
  },
  {
    slug: "interior-clean",
    name: "Interior Clean",
    shortName: "Interior Clean",
    metaDescription:
      "Mobile car interior cleaning in Colchester — seats, carpets, dashboard and glass cleaned, with stains and odours removed at your home or workplace.",
    directAnswer:
      "JS Car Detailing Colchester's interior clean covers seats, carpets, dashboard, door cards, and glass inside the vehicle, removing dust, stains, and odour sources. The service is fully mobile and carried out across Colchester, Ipswich, Clacton-on-Sea, and Chelmsford at your home or workplace. Get a quote based on your vehicle and interior condition.",
    summary:
      "A focused clean of everything inside the cabin — seats, carpets, mats, dashboard, door cards, and interior glass. Ideal on its own for vehicles with a clean exterior but a cabin that needs attention, or as part of a deep clean.",
    bullets: [
      "Full vacuum of seats, carpets, and boot",
      "Dashboard, door cards, and trim wiped and cleaned",
      "Interior glass cleaned for a clear, streak-free finish",
      "Attention to footwells and seams where dirt collects",
      "Fully mobile — carried out wherever your vehicle is parked",
    ],
    idealFor:
      "Family vehicles, pet owners, and anyone whose cabin sees more wear than the exterior — plus anyone preparing a car for sale or part-exchange.",
    faqs: [
      {
        question: "Can the interior clean remove pet hair and odours?",
        answer:
          "Interior cleaning targets built-up dirt, dust, and stains throughout the cabin. Mention pet hair or specific odour concerns when booking so the visit can be planned around them.",
      },
      {
        question: "Is interior cleaning available without an exterior wash?",
        answer:
          "Yes. Interior clean is offered as a standalone service as well as alongside exterior work.",
      },
    ],
    icon: "armchair",
  },
  {
    slug: "paint-protection",
    name: "Paint Protection",
    shortName: "Paint Protection",
    metaDescription:
      "Mobile paint protection in Colchester and Essex — helps shield clean, prepped bodywork from road contaminants and UV. Fully insured. Request a quote.",
    directAnswer:
      "Paint protection from JS Car Detailing Colchester is applied to clean, prepped bodywork to help shield it from everyday contaminants and UV exposure. It's delivered as a fully mobile service across Colchester, Ipswich, Clacton-on-Sea, and Chelmsford. Contact the business for a quote, as pricing depends on vehicle size and paint condition.",
    summary:
      "Paint protection is applied after a full exterior wash and decontamination, giving bodywork an added layer of defence against everyday road grime, UV exposure, and the elements. It's a service best paired with a fresh exterior wash or deep clean so the protection goes onto properly prepped paint.",
    bullets: [
      "Applied only to clean, decontaminated bodywork",
      "Helps guard against everyday contaminants and UV exposure",
      "Best combined with an exterior wash or deep clean beforehand",
      "Carried out at your home or workplace",
      "Fully insured mobile service",
    ],
    idealFor:
      "Owners who want to slow down how quickly their paintwork picks up grime and dulls between details — particularly newer or recently detailed vehicles.",
    faqs: [
      {
        question: "How much does paint protection cost in Colchester?",
        answer:
          "Cost depends on vehicle size and current paint condition — contact JS Car Detailing Colchester directly for a free quote.",
      },
      {
        question: "Does the car need washing before paint protection is applied?",
        answer:
          "Yes. Paint protection is applied to clean, decontaminated bodywork, so it's typically paired with an exterior wash or deep clean first.",
      },
    ],
    icon: "shield",
  },
  {
    slug: "headlight-restoration",
    name: "Headlight Restoration",
    shortName: "Headlight Restoration",
    metaDescription:
      "Mobile headlight restoration in Colchester — cloudy, yellowed or oxidised headlight lenses restored for better clarity and looks. Get a quote today.",
    directAnswer:
      "Headlight restoration from JS Car Detailing Colchester treats cloudy, yellowed, or oxidised headlight lenses to improve clarity and appearance. It's carried out as a fully mobile service across Colchester, Ipswich, Clacton-on-Sea, and Chelmsford. Get a quote for your vehicle's headlights.",
    summary:
      "Over time, headlight lenses oxidise and turn cloudy or yellow, dulling both the look of the vehicle and how much light gets through at night. Headlight restoration addresses this directly, carried out on-site wherever the vehicle is.",
    bullets: [
      "Treats cloudy, yellowed, or oxidised headlight lenses",
      "Improves both appearance and light output",
      "Carried out on-site — no drop-off required",
      "Available alongside exterior detailing work",
    ],
    idealFor:
      "Any vehicle with hazy, yellowed, or dull headlight lenses — common on cars several years old that have spent a lot of time outdoors.",
    faqs: [
      {
        question: "Who does headlight restoration in Essex?",
        answer:
          "JS Car Detailing Colchester offers mobile headlight restoration across Colchester, Ipswich, Clacton-on-Sea, Chelmsford, and the surrounding Essex and Suffolk areas.",
      },
      {
        question: "Can cloudy headlights be fixed without replacing them?",
        answer:
          "In most cases, yes — headlight restoration treats the oxidised outer lens rather than requiring a full replacement unit.",
      },
    ],
    icon: "lightbulb",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
