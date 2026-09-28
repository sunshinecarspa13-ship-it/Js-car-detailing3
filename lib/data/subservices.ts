import type { Faq } from "./services";

// Sub-service depth pages, each living at /services/[parent]/[slug].
// Snow foam and seat stain removal are evidenced in the client's gallery
// photos; the rest were confirmed as offered by the client on 2026-09-28.
// Copy stays generic where the details depend on the car or product: no
// prices, brands, coating lifespans or guarantees until the client supplies
// them. Don't add a treatment the client hasn't confirmed.
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
  /** Shorter title-tag name when `name` would push the title past ~60 chars. */
  seoTitle?: string;
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
  /**
   * Knowledge-graph entities the page is about, each a Wikipedia article that
   * was checked to exist and match. Rendered as schema `mentions` and a
   * visible further-reading link. Use Auto_detailing when no specific
   * article exists (clay bar, ceramic coating and paint correction have none).
   */
  entities: { name: string; wikipedia: string }[];
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
    entities: [{ name: "Car wash", wikipedia: "https://en.wikipedia.org/wiki/Car_wash" }],
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
    entities: [{ name: "Upholstery", wikipedia: "https://en.wikipedia.org/wiki/Upholstery" }],
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
  {
    slug: "alloy-wheel-detailing",
    parent: "exterior-wash",
    name: "Alloy Wheel Detailing",
    metaDescription:
      "Mobile alloy wheel cleaning in Colchester — baked-on brake dust, iron fallout and tyre grime removed from wheels, barrels and arches at your home.",
    directAnswer:
      "Alloy wheel detailing deep cleans the faces, spokes and inner barrels of your wheels, removing baked-on brake dust and iron fallout a normal wash leaves behind, then finishes the tyres. JS Car Detailing Colchester carries it out at your home, on its own or alongside an exterior wash.",
    sections: [
      {
        heading: "Why wheels get so dirty",
        paragraphs: [
          "Every time you brake, the pads shed fine metallic dust that's hot enough to bake onto the wheel. Mixed with road grime and water, it forms a stubborn brown film — worst on the front wheels, which do most of the braking — that ordinary car shampoo barely touches.",
          "Left long enough, that fallout can pit and stain the wheel's lacquer, which is why regular, proper wheel cleaning keeps alloys looking new for longer.",
        ],
      },
      {
        heading: "What alloy wheel detailing includes",
        paragraphs: [
          "Wheels are cleaned with separate brushes and mitts from the paintwork, so brake dust never ends up on the bodywork.",
        ],
        bullets: [
          "Wheel faces, spokes and wheel nuts cleaned with dedicated brushes",
          "Inner barrels reached behind the spokes",
          "Iron fallout remover to dissolve embedded brake dust",
          "Tyre walls scrubbed and dressed",
          "Wheel arches cleaned so the wheels are framed properly",
        ],
      },
      {
        heading: "Painted, diamond-cut and chrome wheels",
        paragraphs: [
          "Different finishes need different care. Diamond-cut and polished wheels have a thin lacquer that harsh acid cleaners can damage, so we use non-acidic products on all wheel types.",
          "Detailing is cosmetic — kerb damage, corrosion under the lacquer and peeling diamond-cut finishes need a wheel refurbishment specialist.",
        ],
      },
    ],
    comparison: {
      caption: "Alloy wheel detailing compared with the wheels in a standard wash",
      columns: ["", "Alloy wheel detailing", "Standard exterior wash"],
      rows: [
        ["Wheel faces cleaned", "Yes", "Yes"],
        ["Inner barrels cleaned", "Yes", "Accessible areas only"],
        ["Iron fallout decontamination", "Yes", "No"],
        ["Tyres dressed", "Yes", "Not always"],
      ],
    },
    photos: [],
    entities: [{ name: "Alloy wheel", wikipedia: "https://en.wikipedia.org/wiki/Alloy_wheel" }],
    faqs: [
      {
        question: "Can you remove baked-on brake dust from alloy wheels?",
        answer:
          "In most cases, yes. An iron fallout remover dissolves embedded brake dust, then the wheel is agitated with brushes. Very old deposits that have etched the lacquer may leave marks.",
      },
      {
        question: "Is alloy wheel cleaning safe for diamond-cut wheels?",
        answer:
          "Yes. We use non-acidic wheel cleaners that are safe on lacquered, painted, diamond-cut and chrome finishes.",
      },
      {
        question: "Can you repair kerbed alloys?",
        answer:
          "No — that's a job for a wheel refurbishment specialist. We clean and protect wheels; we don't repair them.",
      },
    ],
  },
  {
    slug: "maintenance-valet-plans",
    parent: "exterior-wash",
    name: "Maintenance Valet Plans",
    metaDescription:
      "Regular mobile car valeting in Colchester — weekly, fortnightly or monthly maintenance washes and valets at your home, on a schedule that suits you.",
    directAnswer:
      "A maintenance valet plan is a regular, scheduled clean — weekly, fortnightly or monthly — that keeps a car consistently clean instead of letting dirt build up between one-off valets. JS Car Detailing Colchester visits your home or workplace on a routine agreed with you, across Colchester and the surrounding Essex and Suffolk areas.",
    sections: [
      {
        heading: "Why regular valets beat occasional deep cleans",
        paragraphs: [
          "Dirt left on paint for weeks bonds harder and takes more work — and more rubbing — to remove. Inside, crumbs and grit ground into the carpet wear it faster. A regular maintenance clean catches all of that early, so each visit is quicker and gentler on the car.",
          "It also takes the thinking out of it: the car is simply clean, without you having to remember to book or find a free weekend.",
        ],
      },
      {
        heading: "How a maintenance plan works",
        paragraphs: [
          "Most plans start with a deeper clean to bring the car up to standard, then settle into lighter, regular visits.",
        ],
        bullets: [
          "An initial deep clean or exterior wash to set the baseline",
          "Regular visits on an agreed day — weekly, fortnightly or monthly",
          "Each visit covers an exterior wash and a quick interior tidy, or whatever we agree",
          "Extras such as wheel detailing or paint protection can be added when needed",
          "Visits carried out at home or at work while the car is parked",
        ],
      },
      {
        heading: "Who maintenance plans suit",
        paragraphs: [
          "Busy households, drivers who use their car for work, owners who've invested in a ceramic coating and want it washed correctly, and businesses that need company cars and vans to look presentable every day.",
          "Get in touch with how many vehicles you have, how often you'd like them cleaned and where they're kept, and we'll suggest a routine and quote for it.",
        ],
      },
    ],
    comparison: {
      caption: "Maintenance valet plan compared with booking one-off cleans",
      columns: ["", "Maintenance valet plan", "One-off booking"],
      rows: [
        ["Car kept consistently clean", "Yes", "Between gaps"],
        ["Visit booked for you", "Yes, on a set routine", "Booked each time"],
        ["Suits coated cars", "Yes — correct, regular washing", "Depends how it's washed in between"],
        ["Suits multiple vehicles", "Yes", "Yes"],
      ],
    },
    photos: [],
    entities: [
      { name: "Auto detailing", wikipedia: "https://en.wikipedia.org/wiki/Auto_detailing" },
      { name: "Car wash", wikipedia: "https://en.wikipedia.org/wiki/Car_wash" },
    ],
    faqs: [
      {
        question: "How often should my car be valeted?",
        answer:
          "For most daily drivers, an exterior wash every one to two weeks and an interior clean every month or so keeps the car in good shape. We'll suggest a routine based on how you use it.",
      },
      {
        question: "Can I change or pause my maintenance visits?",
        answer:
          "Yes — the routine is agreed with you, so just let us know if you need to move, skip or change a visit.",
      },
      {
        question: "Do you offer maintenance valeting for business vehicles?",
        answer:
          "Yes. Regular visits work well for company cars and vans; see van and commercial valeting for more.",
      },
    ],
  },
  {
    slug: "clay-bar-decontamination",
    parent: "deep-clean",
    name: "Clay Bar Decontamination",
    metaDescription:
      "Mobile clay bar and paint decontamination in Colchester — iron fallout, tar and bonded grime lifted off your paint so it's smooth again. At your home.",
    directAnswer:
      "Clay bar decontamination removes contamination that bonds to paint and survives a normal wash — iron fallout, tar spots, tree sap and industrial grime. JS Car Detailing Colchester uses chemical decontamination and a clay bar at your home, leaving the paint smooth and ready for polish, wax or a coating.",
    sections: [
      {
        heading: "The contamination a wash leaves behind",
        paragraphs: [
          "Run your fingertips over a freshly washed panel inside a thin sandwich bag. If it feels gritty rather than glassy, the paint is carrying bonded contamination. Brake dust throws hot iron particles onto the bodywork, roads leave tar, and trees drop sap — all of which stick hard to the clear coat.",
          "Left in place, this contamination dulls the finish, gives protection products nothing clean to bond to and, in the case of iron fallout, can leave tiny orange rust spots on lighter paint.",
        ],
      },
      {
        heading: "How the decontamination is done",
        paragraphs: [
          "It's a two-part process. Chemical removers dissolve what they can first, which means less needs to come off by hand. The clay then glides over lubricated paint and picks up whatever is still stuck to it.",
        ],
        bullets: [
          "Iron fallout remover — reacts with and dissolves embedded brake dust",
          "Tar and glue remover for road tar spots, especially on lower panels",
          "Clay bar or clay mitt used on a lubricated surface, panel by panel",
          "Final rinse and dry, then the paint is ready for protection",
        ],
      },
      {
        heading: "When your car needs it",
        paragraphs: [
          "Clay decontamination is part of our deep clean, and it's the essential first step before machine polishing or a ceramic coating. Most cars benefit from it once or twice a year; cars parked under trees, near railway lines or driven on the A12 and A120 every day tend to pick up more.",
          "Claying isn't needed on every wash. Done too often, or without enough lubricant, it can mar soft paint — so we only use it when the paint actually needs it.",
        ],
      },
    ],
    comparison: {
      caption: "Clay bar decontamination compared with a regular wash",
      columns: ["", "Clay bar decontamination", "Regular wash"],
      rows: [
        ["Removes loose dirt and road film", "Yes", "Yes"],
        ["Removes iron fallout and tar", "Yes", "No"],
        ["Leaves paint smooth to the touch", "Yes", "Not if contaminated"],
        ["How often", "Once or twice a year", "Every week or two"],
      ],
    },
    photos: [],
    entities: [{ name: "Auto detailing", wikipedia: "https://en.wikipedia.org/wiki/Auto_detailing" }],
    faqs: [
      {
        question: "How do I know if my car needs a clay bar treatment?",
        answer:
          "Put your hand in a thin plastic bag and run it over clean paint. If it feels rough or gritty, bonded contamination is there and a clay treatment will help.",
      },
      {
        question: "Does clay bar decontamination scratch paint?",
        answer:
          "Not when it's done on well-lubricated, washed paint with light pressure. It can cause light marring on very soft paint, which a finishing polish removes.",
      },
      {
        question: "Is clay bar treatment included in a deep clean?",
        answer:
          "Yes. Decontamination is part of the deep clean, and it's always done before machine polishing or a ceramic coating.",
      },
    ],
  },
  {
    slug: "engine-bay-cleaning",
    parent: "deep-clean",
    name: "Engine Bay Cleaning",
    metaDescription:
      "Mobile engine bay cleaning in Colchester — grease, dust and leaves safely cleaned from under the bonnet with electrics protected. Add it to a deep clean.",
    directAnswer:
      "Engine bay cleaning removes the dust, grease, leaves and road grime that build up under the bonnet, using degreasers, brushes and a gentle low-pressure rinse with sensitive electrics covered. JS Car Detailing Colchester offers it on request, usually alongside a deep clean at your home.",
    sections: [
      {
        heading: "Why clean an engine bay?",
        paragraphs: [
          "A clean engine bay makes a used car far more convincing to buyers and makes it much easier to spot a new oil or coolant leak. Leaves and debris in the scuttle panel and drains below the windscreen can also block water run-off, so clearing them is worth doing on its own.",
          "It's cosmetic, not mechanical — we clean and dress the surfaces you can see and reach, we don't service or repair anything.",
        ],
      },
      {
        heading: "How we clean under the bonnet safely",
        paragraphs: [
          "Modern engine bays are full of connectors, sensors and fuse boxes, so the approach is controlled. We work on a cool engine and never blast the bay with high pressure.",
        ],
        bullets: [
          "Engine allowed to cool; loose leaves and debris removed first",
          "Alternator, air intake, fuse box and exposed connectors covered",
          "Degreaser applied and agitated with detailing brushes",
          "Low-pressure rinse or wipe-down, depending on the bay",
          "Plastics and rubbers dried and dressed with a non-greasy finish",
        ],
      },
      {
        heading: "When an engine bay clean makes sense",
        paragraphs: [
          "It's most popular before selling a car, after buying a used one, or as part of a full deep clean when every other part of the car is being brought back to its best.",
          "If the engine is visibly leaking oil, get the leak repaired first — cleaning will make the source easier to find, but it won't fix it.",
        ],
      },
    ],
    comparison: {
      caption: "Engine bay cleaning compared with the deep clean it's added to",
      columns: ["", "Engine bay cleaning", "Deep clean"],
      rows: [
        ["Area covered", "Under the bonnet only", "Exterior and interior"],
        ["Removes grease and grime from engine plastics", "Yes", "Only if engine bay is added"],
        ["Clears scuttle panel leaves", "Yes", "Yes, with the bay"],
        ["Available on its own", "On request", "Yes"],
      ],
    },
    photos: [],
    entities: [{ name: "Auto detailing", wikipedia: "https://en.wikipedia.org/wiki/Auto_detailing" }],
    faqs: [
      {
        question: "Is it safe to wash an engine bay?",
        answer:
          "Yes, when it's done carefully: engine cool, electrics covered and no high-pressure water. That's how we do it.",
      },
      {
        question: "Can engine bay cleaning be booked on its own?",
        answer:
          "It's usually added to a deep clean, but it's available on request — call or message to check availability.",
      },
      {
        question: "Will an engine bay clean help me sell my car?",
        answer:
          "A clean, dry engine bay makes a strong first impression on buyers and shows there's nothing to hide, so it's a common pre-sale add-on.",
      },
    ],
  },
  {
    slug: "van-commercial-valeting",
    parent: "deep-clean",
    name: "Van & Commercial Vehicle Valeting",
    seoTitle: "Van Valeting",
    metaDescription:
      "Mobile van and commercial vehicle valeting in Colchester and across Essex — cabs, load areas and exteriors cleaned at your yard, site or home.",
    directAnswer:
      "Van and commercial vehicle valeting covers the exterior, cab and, where needed, the load area of vans and business vehicles. JS Car Detailing Colchester carries it out on-site at your yard, depot, workplace or home across Colchester, Ipswich, Clacton-on-Sea and Chelmsford, so vehicles aren't taken off the road for long.",
    sections: [
      {
        heading: "Valeting built around working vehicles",
        paragraphs: [
          "A work van gets dirtier, faster, and in different places to a family car: muddy footwells, dusty dashboards, fingerprints on door handles and a load area that takes whatever the job throws at it. The livery on the side is also your advert, so a clean van says something about the business before you've said a word.",
          "Because we're mobile, the valet happens where the vehicle already is — on the driveway before work, at the yard at the end of the day or at your premises during quiet hours.",
        ],
      },
      {
        heading: "What a van valet can include",
        paragraphs: [
          "We'll agree the scope with you before booking, since vans vary so much in size and use.",
        ],
        bullets: [
          "Exterior hand wash including wheels, arches and signwritten panels",
          "Cab vacuum, dashboard, door cards and interior glass",
          "Seat and floor cleaning in the cab",
          "Load area sweep-out and wipe-down on request",
          "Headlight restoration for faded lenses on older vans",
        ],
      },
      {
        heading: "Sole traders, small fleets and businesses",
        paragraphs: [
          "We work with sole traders who want one van looking right and businesses with several vehicles that need doing together. For more than one vehicle, get in touch with the number, types and location, and we'll come back with a plan and a quote.",
          "Regular visits can be arranged so vans are cleaned on a routine rather than when someone gets round to it — see our maintenance valet plans.",
        ],
      },
    ],
    comparison: {
      caption: "Van valeting compared with a standard car deep clean",
      columns: ["", "Van & commercial valeting", "Car deep clean"],
      rows: [
        ["Vehicle types", "Vans, pickups and business vehicles", "Cars"],
        ["Load area cleaning", "On request", "Boot included"],
        ["Where it's done", "Yard, depot, site or home", "Home or workplace"],
        ["Multiple vehicles in one visit", "Yes, quoted per job", "Usually one car"],
      ],
    },
    photos: [],
    entities: [
      { name: "Van", wikipedia: "https://en.wikipedia.org/wiki/Van" },
      { name: "Fleet vehicle", wikipedia: "https://en.wikipedia.org/wiki/Fleet_vehicle" },
    ],
    faqs: [
      {
        question: "Do you valet vans at business premises?",
        answer:
          "Yes. We're fully mobile and can work at your yard, depot or site across Colchester, Ipswich, Clacton-on-Sea and Chelmsford.",
      },
      {
        question: "Can you valet several vans in one visit?",
        answer:
          "Yes. Tell us how many vehicles, what type and where they're kept, and we'll quote for doing them together.",
      },
      {
        question: "Do you clean the back of the van?",
        answer:
          "Load area cleaning is available on request. Let us know what the van carries so we can plan the right approach.",
      },
    ],
  },
  {
    slug: "pet-hair-removal",
    parent: "interior-clean",
    name: "Pet Hair Removal",
    metaDescription:
      "Mobile pet hair removal in Colchester — dog and cat hair lifted out of car seats, carpets and boot liners at your home, as part of an interior clean.",
    directAnswer:
      "Pet hair removal gets embedded dog and cat hair out of car seats, carpets and boot liners, where a normal vacuum can't reach it. JS Car Detailing Colchester uses rubber pet-hair tools, brushes and a powerful vacuum at your home, as part of a full interior clean.",
    sections: [
      {
        heading: "Why pet hair is so hard to remove",
        paragraphs: [
          "Dog hair in particular is short, stiff and slightly barbed, so it weaves itself into carpet loops and seat fabric. Vacuuming lifts the loose layer on top but leaves the woven-in hair behind, which is why boots and rear seats can still look furry after you've been over them.",
          "Getting it out takes agitation first — rubber blades, stones and stiff brushes that drag the hair up out of the fibres into clumps — and then vacuuming. It's slow, methodical work, and the amount of hair makes a big difference to how long it takes.",
        ],
      },
      {
        heading: "Where we focus",
        paragraphs: [
          "Hair gathers where your pet sits and where air settles, so we work through the whole cabin rather than just the obvious spots.",
        ],
        bullets: [
          "Boot carpet, boot liner and parcel shelf",
          "Rear seat bases, backs and seat belt runs",
          "Footwell carpets and mats",
          "Seat seams, rails and the gaps between seats",
          "Door pockets and air vents",
        ],
      },
      {
        heading: "Keeping on top of it",
        paragraphs: [
          "A fitted boot liner or seat cover and a quick rubber-brush once a week makes the next clean far easier. If your pet travels with you every day, regular interior cleans stop hair from building up into the carpet in the first place.",
          "If there's also a smell from wet dog or accidents, mention it when booking — odour removal can be done in the same visit.",
        ],
      },
    ],
    comparison: {
      caption: "Pet hair removal compared with a standard interior vacuum",
      columns: ["", "Pet hair removal", "Standard vacuum"],
      rows: [
        ["Loose hair on the surface", "Removed", "Removed"],
        ["Hair woven into carpet and fabric", "Agitated out and removed", "Mostly left behind"],
        ["Tools used", "Rubber blades, brushes and vacuum", "Vacuum only"],
        ["Time needed", "Depends on the amount of hair", "Short"],
      ],
    },
    photos: [],
    entities: [{ name: "Upholstery", wikipedia: "https://en.wikipedia.org/wiki/Upholstery" }],
    faqs: [
      {
        question: "Can you get dog hair out of car carpet?",
        answer:
          "Yes. Embedded dog hair is brushed and dragged out of the fibres with rubber tools first, then vacuumed away — much more effective than vacuuming alone.",
      },
      {
        question: "Does heavy pet hair take longer?",
        answer:
          "Yes. The amount of hair is the biggest factor in how long it takes, so let us know how bad it is when you book.",
      },
      {
        question: "Can you remove the dog smell as well?",
        answer:
          "Yes — odour removal can be combined with pet hair removal and an interior clean in the same visit.",
      },
    ],
  },
  {
    slug: "leather-cleaning-and-conditioning",
    parent: "interior-clean",
    name: "Leather Cleaning & Conditioning",
    seoTitle: "Leather Seat Cleaning",
    metaDescription:
      "Mobile leather seat cleaning and conditioning in Colchester — grime and body oils lifted from leather seats, then conditioned to keep them supple.",
    directAnswer:
      "Leather cleaning and conditioning removes the dirt, body oils and dye transfer that build up on leather car seats, then treats the leather to keep it soft and protected. JS Car Detailing Colchester cleans leather seats, steering wheels and trim at your home as part of an interior clean.",
    sections: [
      {
        heading: "Why leather seats need more than a wipe",
        paragraphs: [
          "Car leather looks tough, but it's constantly rubbed by clothing, warmed by the sun and soaked in body oils from skin contact. Over time the grain fills with grime, the surface turns shiny, and pale seats pick up blue dye from jeans.",
          "Wiping with household products can make things worse: some strip the leather's protective top coat, others leave a greasy residue. A dedicated leather cleaner lifts the dirt out of the grain without drying it out.",
        ],
      },
      {
        heading: "Our leather cleaning process",
        paragraphs: [
          "Most car leather is coated, so the focus is on cleaning the surface gently and protecting it, not soaking the hide.",
        ],
        bullets: [
          "Seats vacuumed, including seams and perforations",
          "pH-balanced leather cleaner worked in with a soft brush",
          "Lifted dirt wiped away with microfibre",
          "Leather conditioner or protector applied and buffed off",
          "Steering wheel, gear knob and leather trim included",
        ],
      },
      {
        heading: "What it can and can't restore",
        paragraphs: [
          "Cleaning brings back the natural matte finish and colour that grime was hiding, and regular conditioning helps prevent the dryness that leads to creasing. It won't repair cracks, worn-through colour or tears — those need a leather repair specialist.",
          "Ventilated and perforated seats are cleaned carefully so product doesn't pool in the holes. Let us know if your seats are Nappa, Alcantara or a leather-look material, since each is treated differently.",
        ],
      },
    ],
    comparison: {
      caption: "Leather cleaning compared with a general interior wipe-down",
      columns: ["", "Leather cleaning & conditioning", "General wipe-down"],
      rows: [
        ["Removes grime from the grain", "Yes", "Surface only"],
        ["Removes dye transfer", "Often greatly reduced", "No"],
        ["Leaves leather conditioned", "Yes", "No"],
        ["Repairs cracks or colour loss", "No", "No"],
      ],
    },
    photos: [],
    entities: [
      { name: "Leather conditioner", wikipedia: "https://en.wikipedia.org/wiki/Leather_conditioner" },
    ],
    faqs: [
      {
        question: "How often should leather car seats be cleaned?",
        answer:
          "A proper clean and condition every few months keeps most leather in good shape, with more frequent cleaning for pale seats or daily-driven cars.",
      },
      {
        question: "Can you remove jeans dye from leather seats?",
        answer:
          "Dye transfer can usually be greatly reduced or removed if it hasn't been there too long. Older transfer may lighten rather than disappear.",
      },
      {
        question: "Can you fix cracked leather?",
        answer:
          "No — cleaning and conditioning help prevent cracking, but existing cracks and worn colour need a leather repair specialist.",
      },
    ],
  },
  {
    slug: "odour-removal",
    parent: "interior-clean",
    name: "Car Odour Removal",
    metaDescription:
      "Mobile car odour removal in Colchester — smoke, pet, damp and food smells tackled at the source, not masked. Carried out at your home.",
    directAnswer:
      "Car odour removal gets rid of lingering smells — smoke, pets, damp, spilt milk or food — by finding and cleaning the source, then neutralising what's left in the cabin. JS Car Detailing Colchester carries it out at your home, usually alongside an interior clean, rather than covering the smell with air freshener.",
    sections: [
      {
        heading: "Why smells come back",
        paragraphs: [
          "Odours come from something: bacteria in a spill that soaked into the carpet, smoke residue on the headlining, damp in the footwell, or pet oils in the seats. Air fresheners only sit on top of that, so the smell returns as soon as they fade — often worse on a warm day.",
          "Lasting odour removal means tracking down the source and dealing with it before anything else.",
        ],
      },
      {
        heading: "How we tackle it",
        paragraphs: [
          "The method depends on the cause. We'll ask what you think the smell is and explain the approach before we start.",
        ],
        bullets: [
          "Find the source: under seats, in carpet underlay, boot wells and door pockets",
          "Remove debris and deep clean the affected upholstery and carpet",
          "Clean hard surfaces and the headlining, where smoke residue collects",
          "Treat the cabin to neutralise remaining odour molecules",
          "Advise on the cabin air filter, which can hold smells and is replaced by your garage",
        ],
      },
      {
        heading: "Damp and musty smells",
        paragraphs: [
          "A musty smell often means water is getting in — blocked drains below the windscreen, a perished door seal or a leaking sunroof. We can dry and clean the interior, but if water keeps coming in the smell will return, so we'll point out anything we spot that needs a garage to fix.",
          "Heavy, long-term smoke odour can take more than one treatment to clear completely, particularly from the headlining and seat foam.",
        ],
      },
    ],
    comparison: {
      caption: "Professional odour removal compared with an air freshener",
      columns: ["", "Odour removal", "Air freshener"],
      rows: [
        ["Deals with the source", "Yes", "No"],
        ["Result lasts", "Long term, if the source is removed", "Days to weeks"],
        ["Cleans affected fabrics", "Yes", "No"],
        ["Suits smoke, pet and damp smells", "Yes", "Masks them only"],
      ],
    },
    photos: [],
    entities: [{ name: "Odor", wikipedia: "https://en.wikipedia.org/wiki/Odor" }],
    faqs: [
      {
        question: "Can you get cigarette smoke smell out of a car?",
        answer:
          "Yes, by cleaning the surfaces that hold smoke residue — especially the headlining, seats and carpets — then treating the cabin. Heavy, long-term smoke can take more than one visit.",
      },
      {
        question: "Why does my car smell musty?",
        answer:
          "Usually damp. Water may be getting in through blocked drains or a worn seal. We can clean and dry the interior and point out likely causes for a garage to fix.",
      },
      {
        question: "Is odour removal done at my home?",
        answer:
          "Yes. It's carried out on your driveway or at your workplace, usually alongside an interior clean.",
      },
    ],
  },
  {
    slug: "carpet-and-upholstery-shampoo",
    parent: "interior-clean",
    name: "Carpet & Upholstery Shampoo",
    seoTitle: "Car Upholstery Cleaning",
    metaDescription:
      "Mobile car carpet and seat shampoo in Colchester — fabric seats and carpets deep cleaned and extracted to lift ground-in dirt. At your home.",
    directAnswer:
      "A carpet and upholstery shampoo deep cleans fabric car seats, carpets and mats by working a cleaning solution into the fibres and extracting it — with the dirt — using a wet vacuum. JS Car Detailing Colchester shampoos interiors at your home when a standard vacuum and wipe won't bring them back.",
    sections: [
      {
        heading: "When a vacuum isn't enough",
        paragraphs: [
          "Vacuuming removes loose dirt, but fabric seats and carpets also hold ground-in grime, old spills and the greyness that builds up from years of use. You notice it as dark patches on the driver's footwell, a grubby seat bolster, or mats that never look clean however often they're shaken out.",
          "Shampooing and extraction flush that dirt out of the fibres rather than just the surface, which is why the colour of the fabric often looks noticeably brighter afterwards.",
        ],
      },
      {
        heading: "How the shampoo is carried out",
        paragraphs: [
          "Fabric is treated area by area so nothing is over-wetted.",
        ],
        bullets: [
          "Full vacuum first to remove loose debris",
          "Cleaning solution applied to seats, carpets and mats",
          "Fibres agitated with upholstery brushes",
          "Dirty solution extracted with a wet vacuum",
          "Doors or windows left open where possible to help drying",
        ],
      },
      {
        heading: "Drying time and aftercare",
        paragraphs: [
          "Shampooed fabric is left damp rather than wet, and usually dries within a few hours, faster on a warm or breezy day. It's best to book on a day the car can sit for a while afterwards.",
          "For specific marks on the seats, see seat stain removal. For fur woven into the carpet, pet hair removal comes first so the shampoo can reach the fibres.",
        ],
      },
    ],
    comparison: {
      caption: "Carpet and upholstery shampoo compared with a standard interior clean",
      columns: ["", "Shampoo & extraction", "Standard interior clean"],
      rows: [
        ["Loose dirt vacuumed", "Yes", "Yes"],
        ["Ground-in grime extracted from fabric", "Yes", "No"],
        ["Car usable straight away", "After a few hours' drying", "Yes"],
        ["Best for", "Heavily soiled or neglected fabric", "Regular upkeep"],
      ],
    },
    photos: [],
    entities: [{ name: "Upholstery", wikipedia: "https://en.wikipedia.org/wiki/Upholstery" }],
    faqs: [
      {
        question: "How long do car seats take to dry after shampooing?",
        answer:
          "Usually a few hours, depending on the weather and airflow. Warm, breezy days with the windows open dry fastest.",
      },
      {
        question: "Can you shampoo car carpets at my house?",
        answer:
          "Yes. Shampoo and extraction is done on-site at your home or workplace across Colchester, Ipswich, Clacton-on-Sea and Chelmsford.",
      },
      {
        question: "Is shampooing different from stain removal?",
        answer:
          "Yes. Shampooing deep cleans whole seats and carpets; stain removal targets individual marks. They're often done together.",
      },
    ],
  },
  {
    slug: "ceramic-coating",
    parent: "paint-protection",
    name: "Ceramic Coating",
    metaDescription:
      "Mobile ceramic coating in Colchester — a hard-wearing, glossy protective layer bonded to clean, prepared paintwork at your home or workplace.",
    directAnswer:
      "A ceramic coating is a liquid protective layer that bonds to a car's clear coat and cures into a hard, glossy, water-repelling finish that lasts far longer than wax. JS Car Detailing Colchester applies it at your home after the paint has been washed, decontaminated and prepared.",
    sections: [
      {
        heading: "What a ceramic coating actually does",
        paragraphs: [
          "Ceramic coatings are usually silica-based liquids that are wiped onto the paint panel by panel. Once cured, they form a thin, hard layer on top of the clear coat that sheds water, resists road grime and makes the car noticeably easier to wash.",
          "It isn't armour. A coating won't stop stone chips, deep scratches or car-park dents — that's what paint protection film is for. What it does is slow down how quickly the paint dulls from traffic film, bird droppings, tree sap and UV, and keep the gloss looking fresh between washes.",
        ],
      },
      {
        heading: "Why preparation decides the result",
        paragraphs: [
          "A coating locks in whatever is underneath it, including swirl marks and bonded contamination. That's why every coating starts with a thorough wash and decontamination, and often a machine polish first, so the paint is as clean and clear as possible before it's sealed.",
          "Curing matters too. The coating needs to stay dry for a period after application, so we'll plan the visit around the weather and, where possible, work under cover such as a garage or carport.",
        ],
        bullets: [
          "Full wash and chemical decontamination",
          "Clay bar treatment to remove bonded contamination",
          "Machine polishing where the paint needs correcting",
          "Panel wipe so the coating bonds to bare clear coat",
          "Coating applied, levelled and left to cure",
        ],
      },
      {
        heading: "How long a ceramic coating lasts",
        paragraphs: [
          "Lifespan depends on the product used, how the car is washed and how much time it spends outdoors. Consumer-grade coatings are measured in months, professional coatings in years. We'll confirm which coating we recommend for your car, and what to expect from it, when we quote.",
          "To get the most from it, wash the car by hand with a pH-neutral shampoo and avoid automatic brush washes, which wear coatings down quickly.",
        ],
      },
    ],
    comparison: {
      caption: "Ceramic coating compared with other paint protection options",
      columns: ["", "Ceramic coating", "Paint protection film"],
      rows: [
        ["Main job", "Gloss, water beading and easier washing", "Physical barrier against chips and scuffs"],
        ["Stops stone chips", "No", "Yes, on covered panels"],
        ["Covers", "Whole car, including wheels and glass if chosen", "Usually high-impact areas like the bonnet and bumper"],
        ["Can be combined", "Yes — it can go over film", "Yes — often coated on top"],
      ],
    },
    photos: [],
    entities: [{ name: "Auto detailing", wikipedia: "https://en.wikipedia.org/wiki/Auto_detailing" }],
    faqs: [
      {
        question: "Can a ceramic coating be applied on my driveway?",
        answer:
          "Yes, as long as the car can stay dry while the coating cures. We'll plan around the forecast and use a garage or carport if one is available.",
      },
      {
        question: "Do I need a machine polish before a ceramic coating?",
        answer:
          "Only if the paint has swirls or light scratches you want removed — the coating will seal in whatever is there. We'll look at the paint and advise before quoting.",
      },
      {
        question: "Is a ceramic coating better than wax?",
        answer:
          "It lasts much longer and is harder wearing than wax, which typically needs reapplying every few weeks or months. Wax is cheaper up front; a coating costs more but needs far less upkeep.",
      },
      {
        question: "Will a ceramic coating stop scratches and stone chips?",
        answer:
          "No. It resists very light marring, but for protection against stone chips you need paint protection film on the most exposed panels.",
      },
    ],
  },
  {
    slug: "paint-protection-film",
    parent: "paint-protection",
    name: "Paint Protection Film (PPF)",
    seoTitle: "Paint Protection Film",
    metaDescription:
      "Paint protection film (PPF) in Colchester — clear urethane film that shields bonnets, bumpers and mirrors from stone chips. Mobile, quoted per car.",
    directAnswer:
      "Paint protection film (PPF) is a clear, flexible urethane film applied over painted panels to absorb stone chips, scuffs and light scratches. JS Car Detailing Colchester fits PPF to high-impact areas such as the bonnet, front bumper and mirrors, quoted per car after seeing the vehicle.",
    sections: [
      {
        heading: "What paint protection film is",
        paragraphs: [
          "PPF is a thin, optically clear urethane film that is laid over the paint and trimmed to each panel. Because it's a physical layer, it takes the impact from grit and gravel thrown up on fast roads — the kind of damage that leaves the front of a car peppered with chips after a few years of motorway miles.",
          "Many modern films are self-healing: light swirls in the film's top layer settle out with warmth. The film itself is almost invisible once fitted, so the car keeps its original look.",
        ],
      },
      {
        heading: "Which panels to protect",
        paragraphs: [
          "Most people protect the areas that face the road. Full-car wraps are possible, but a front-end package covers the panels that take the vast majority of chips for a fraction of the material.",
        ],
        bullets: [
          "Front bumper and bonnet (full or partial)",
          "Front wings and door mirror backs",
          "Headlights",
          "Door edges, door cups and rear bumper loading lip",
        ],
      },
      {
        heading: "Fitting PPF as a mobile service",
        paragraphs: [
          "Film has to go onto perfectly clean paint in still, dust-free conditions, so the fitting location matters more than for any other service we offer. A garage or covered space is best. We'll talk through where the car can be worked on and confirm what's achievable when you get in touch.",
          "Existing chips will still be visible under the film, so it's worth fitting PPF when a car is new or freshly repaired. Paint that has swirl marks is usually polished first.",
        ],
      },
    ],
    comparison: {
      caption: "PPF compared with coating and wax",
      columns: ["", "Paint protection film", "Ceramic coating"],
      rows: [
        ["Absorbs stone chips", "Yes", "No"],
        ["Adds gloss and water beading", "Some films do", "Yes"],
        ["Typical coverage", "Front-end or selected panels", "Whole vehicle"],
        ["Best time to apply", "New or freshly repaired paint", "After decontamination and polishing"],
      ],
    },
    photos: [],
    entities: [
      { name: "Paint protection film", wikipedia: "https://en.wikipedia.org/wiki/Paint_protection_film" },
    ],
    faqs: [
      {
        question: "Can PPF be fitted outside at my house?",
        answer:
          "Film needs clean, still, dust-free conditions. A garage or covered space is best, and we'll confirm what's possible at your location before booking.",
      },
      {
        question: "Will PPF hide the chips my car already has?",
        answer:
          "No — existing chips stay visible under the film. It's best fitted to new paint or after chips have been repaired.",
      },
      {
        question: "Can PPF be removed later?",
        answer:
          "Yes. Quality film is designed to be removed without damaging factory paint when it comes to the end of its life.",
      },
      {
        question: "Should I have a ceramic coating as well as PPF?",
        answer:
          "They do different jobs, so many owners do both: film on the front for chip protection, and a coating over the whole car for gloss and easier washing.",
      },
    ],
  },
  {
    slug: "machine-polishing",
    parent: "paint-protection",
    name: "Machine Polishing & Paint Correction",
    seoTitle: "Machine Polishing",
    metaDescription:
      "Mobile machine polishing in Colchester — swirl marks, holograms and light scratches polished out of your paint at home, ready for wax or a ceramic coating.",
    directAnswer:
      "Machine polishing, often called paint correction, uses a machine polisher and abrasive polishes to level the clear coat and remove swirl marks, holograms and light scratches. JS Car Detailing Colchester polishes paint at your home, usually as the step before a sealant or ceramic coating.",
    sections: [
      {
        heading: "What machine polishing fixes",
        paragraphs: [
          "Under bright sunlight or a street lamp, most daily-driven cars show a web of fine circular scratches. These swirl marks come mainly from washing and drying with gritty mitts and towels, brush car washes and wiping the car when it's dirty. They scatter light, which is why the paint looks dull rather than deep and glossy.",
          "Polishing removes a microscopically thin layer of clear coat to level out those marks. It's a correction, not a cover-up — unlike glazes and filler waxes, the result doesn't wash off after a few weeks.",
        ],
        bullets: [
          "Swirl marks and wash marring",
          "Holograms left by previous poor polishing",
          "Light scratches that haven't gone through the clear coat",
          "Dull, oxidised or faded paint",
          "Water spot etching",
        ],
      },
      {
        heading: "One-stage or multi-stage correction",
        paragraphs: [
          "A single-stage polish (sometimes called an enhancement) removes most light swirls and brings the gloss back in one pass. Multi-stage correction uses a cutting compound first and a finishing polish after, for paint that's heavily marked.",
          "Before quoting, we'll look at the paint and agree which level makes sense. Clear coat is finite, so the aim is always the best finish for the least material removed.",
        ],
      },
      {
        heading: "What polishing can't do",
        paragraphs: [
          "If a scratch catches your fingernail, it has probably gone through the clear coat and can only be reduced, not removed, by polishing. Stone chips and deep key scratches need paint repair.",
          "Polished paint also needs protecting afterwards. A sealant or ceramic coating keeps the corrected finish looking its best for longer.",
        ],
      },
    ],
    comparison: {
      caption: "Machine polishing compared with a wash or a glaze",
      columns: ["", "Machine polishing", "Hand wash and wax"],
      rows: [
        ["Removes swirl marks", "Yes — levels them out", "No — may temporarily hide them"],
        ["How long the result lasts", "Permanent until new marks are made", "Weeks"],
        ["Removes clear coat", "A tiny, controlled amount", "No"],
        ["Usually followed by", "Sealant or ceramic coating", "Nothing further"],
      ],
    },
    photos: [],
    entities: [{ name: "Polishing", wikipedia: "https://en.wikipedia.org/wiki/Polishing" }],
    faqs: [
      {
        question: "Can machine polishing remove all scratches?",
        answer:
          "It removes swirls and light scratches in the clear coat. Deeper scratches that catch a fingernail can usually be reduced but not fully removed.",
      },
      {
        question: "Can you machine polish my car at home?",
        answer:
          "Yes. We bring the polishing equipment to you, anywhere in Colchester, Ipswich, Clacton-on-Sea and Chelmsford. Dry weather or a covered space helps.",
      },
      {
        question: "Is paint correction the same as machine polishing?",
        answer:
          "Broadly yes. Paint correction is the term for machine polishing aimed at removing defects, often in more than one stage.",
      },
      {
        question: "What should I do after my car has been polished?",
        answer:
          "Protect it with a sealant or ceramic coating, and wash it gently by hand to avoid putting new swirl marks back in.",
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
