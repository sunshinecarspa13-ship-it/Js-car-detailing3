import type { Faq } from "./services";

// Sub-service depth pages. Only techniques the business is evidenced doing
// get a page — both below appear in the client's own gallery photos. Other
// sub-services (ceramic/graphene coatings, PPF, machine polishing, ozone
// treatment…) must not be added until the client confirms they're offered.
export type ContentSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Subservice = {
  slug: string;
  /** Parent service slug — the page lives at /services/[parent]/[slug]. */
  parent: string;
  name: string;
  /** ≤160 characters. */
  metaDescription: string;
  directAnswer: string;
  sections: ContentSection[];
  /** How it compares with neighbouring options — rendered as a table. */
  comparison: {
    caption: string;
    columns: [string, string, string];
    rows: [string, string, string][];
  };
  /** Gallery photo srcs that show this technique. */
  photos: string[];
  faqs: Faq[];
};

export const subservices: Subservice[] = [
  {
    slug: "snow-foam-wash",
    parent: "exterior-wash",
    name: "Snow Foam Wash",
    metaDescription:
      "Mobile snow foam car wash in Colchester — a thick pre-wash foam loosens grit before the hand wash, lowering the risk of swirl marks. At your home, 7 days.",
    directAnswer:
      "A snow foam wash is a pre-wash stage where a thick foam is applied to the whole car and left to dwell, loosening dirt and grit so it can be rinsed away before anything touches the paint. JS Car Detailing Colchester uses it as part of the mobile exterior wash, carried out at your home.",
    sections: [
      {
        heading: "What is a snow foam wash?",
        paragraphs: [
          "Snow foam is a thick, clinging foam that's sprayed over the whole vehicle before the hand wash starts. Its job is to soften and lift the loose dirt, road film and grit sitting on the surface, so as much of it as possible is rinsed off before a wash mitt ever touches the paint.",
          "It isn't a replacement for a hand wash — it's the stage that makes the hand wash safer. Most swirl marks and light scratches come from grit being dragged across the paint during washing, and removing that grit first is one of the simplest ways to reduce the risk.",
        ],
      },
      {
        heading: "How the snow foam stage works",
        paragraphs: [
          "A snow foam stage typically fits into an exterior wash like this:",
        ],
        bullets: [
          "The foam is applied from the roof down, covering bodywork, glass, wheels and arches",
          "It's left to dwell for a few minutes, so it can soften dirt while it slowly runs down the panels",
          "The car is rinsed, taking the loosened grime and grit with the foam",
          "The contact hand wash follows, on paintwork that's already had most of the abrasive dirt removed",
          "Wheels, arches, glass and door shuts are finished as part of the full exterior wash",
        ],
      },
      {
        heading: "Who a snow foam wash suits",
        paragraphs: [
          "Every car benefits from dirt being lifted before contact, but it matters most on dark paint, where fine swirls show up clearly in sunlight; on newer cars whose owners want to keep the paint as close to showroom condition as possible; and on cars that are very dirty, where there's more grit to deal with.",
          "It's also useful before paint protection: getting the surface properly clean without inflicting new marks is the first step in preparing paint for a protective layer.",
        ],
      },
    ],
    comparison: {
      caption: "Snow foam wash compared with other ways to wash a car",
      columns: ["", "Snow foam + hand wash", "Automated drive-through"],
      rows: [
        ["Grit removed before contact", "Yes — foam and rinse first", "Depends on the machine"],
        ["What touches the paint", "A wash mitt, after pre-wash", "Brushes or cloth strips"],
        ["Wheels and arches", "Cleaned by hand", "Varies"],
        ["Where it happens", "At your home or workplace", "At the wash site"],
      ],
    },
    photos: ["/gallery/snow-foam-wash.jpg"],
    faqs: [
      {
        question: "Is snow foam safe for a new car?",
        answer:
          "Yes. Snow foam is a pre-wash designed to reduce contact with grit, which makes it well suited to new paintwork you want to keep swirl-free.",
      },
      {
        question: "Is a snow foam wash included in the exterior wash?",
        answer:
          "Snow foam is used as part of JS Car Detailing Colchester's mobile exterior wash — ask when booking if you'd like to confirm it for your vehicle.",
      },
      {
        question: "Does snow foam remove all the dirt on its own?",
        answer:
          "No. It loosens and lifts loose dirt and grit so it can be rinsed off, but a contact hand wash is still needed to remove bonded road film.",
      },
    ],
  },
  {
    slug: "seat-stain-removal",
    parent: "interior-clean",
    name: "Seat Stain Removal",
    metaDescription:
      "Mobile car seat stain removal in Colchester — marked cloth seats cleaned as part of an interior clean at your home. Spills, grime and everyday marks.",
    directAnswer:
      "Seat stain removal is the part of an interior clean that targets marks on seat fabric — spills, grime and everyday staining. JS Car Detailing Colchester carries it out at your home or workplace across Colchester and Essex, as part of a full interior clean covering seats, carpets, dashboard and glass.",
    sections: [
      {
        heading: "What seat stain removal involves",
        paragraphs: [
          "Cloth car seats soak up whatever lands on them: drinks, food, muddy clothes and the general grime of daily use. Over time that shows up as blotchy marks and dull, dark patches — especially on light-coloured seat panels.",
          "Stain removal treats the marked areas of fabric so the seats look even again. It's done as part of an interior clean, alongside a full vacuum and a clean of the rest of the cabin, so the seats aren't the only thing left looking fresh.",
        ],
      },
      {
        heading: "What can and can't be removed",
        paragraphs: [
          "Most everyday marks on cloth seats — spills, food, grime and general dirt — can be greatly improved or removed. Results depend on what caused the stain, how long it's been there and the type of fabric.",
          "Some stains, such as dyes, inks or marks that have been set by heat, may lighten rather than disappear completely. If you know what caused a particular stain, mention it when booking.",
        ],
        bullets: [
          "Drinks and food spills",
          "Muddy and dirty marks from everyday use",
          "Grime build-up on seat bases and bolsters",
          "General discolouration on light fabric panels",
        ],
      },
      {
        heading: "Who seat stain removal suits",
        paragraphs: [
          "It suits family cars, cars used for work, and anyone getting a vehicle ready to sell or return at the end of a lease, where marked seats make a car look older and more worn than it is.",
          "If the whole cabin needs attention, a deep clean combines interior work with a full exterior wash in one visit.",
        ],
      },
    ],
    comparison: {
      caption: "Seat stain removal compared with the wider interior options",
      columns: ["", "Interior clean with stain removal", "Deep clean"],
      rows: [
        ["Seat fabric marks treated", "Yes", "Yes"],
        ["Vacuum of seats, carpets and boot", "Yes", "Yes"],
        ["Dashboard, door cards and interior glass", "Yes", "Yes"],
        ["Exterior wash included", "No", "Yes"],
      ],
    },
    photos: ["/gallery/seat-stain-removal.jpg", "/gallery/rear-seat-clean.jpg"],
    faqs: [
      {
        question: "Can you remove stains from cloth car seats at my home?",
        answer:
          "Yes. Seat stain removal is part of the mobile interior clean, carried out wherever your car is parked across Colchester, Ipswich, Clacton-on-Sea and Chelmsford.",
      },
      {
        question: "Will every stain come out of my car seats?",
        answer:
          "Most everyday marks can be greatly improved or removed, but results depend on the cause and age of the stain. Dyes, inks and heat-set marks may lighten rather than disappear.",
      },
      {
        question: "Is seat stain removal a separate service?",
        answer:
          "It's carried out as part of the interior clean, so the rest of the cabin is cleaned at the same time.",
      },
    ],
  },
];

export function getSubservice(parent: string, slug: string): Subservice | undefined {
  return subservices.find((s) => s.parent === parent && s.slug === slug);
}

export function getSubservicesFor(parent: string): Subservice[] {
  return subservices.filter((s) => s.parent === parent);
}
