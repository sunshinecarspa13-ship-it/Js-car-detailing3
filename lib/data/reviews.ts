export type Review = {
  id: string;
  reviewer: string;
  profileWeight: string | null;
  /** Verbatim quoted text from Google. Never paraphrase or invent. */
  text: string | null;
  /** True if the source text was cut off with "…More" on Google and not captured in full. */
  truncated: boolean;
  postedRelative: string;
  ownerReplyPresent: boolean;
};

// All 15 reviews, verbatim where text was captured. This is the full,
// unedited source set behind business.rating (5.0 / 15) — never add,
// remove, or reword an entry to make the page look fuller.
export const reviews: Review[] = [
  {
    id: "remerson",
    reviewer: "Remerson",
    profileWeight: null,
    text: "Absolutely outstanding service! My car looks amazing and the attention to detail was second to none. Professional, friendly, and clearly passionate about…",
    truncated: true,
    postedRelative: "3 mo",
    ownerReplyPresent: true,
  },
  {
    id: "falcon",
    reviewer: "Falcon",
    profileWeight: "1 review · 3 photos",
    text: "Fantastic mobile service team at JS Car Detailing Colchester! Excellent work from…",
    truncated: true,
    postedRelative: "3 mo",
    ownerReplyPresent: true,
  },
  {
    id: "yzabela-castro",
    reviewer: "Yzabela Castro",
    profileWeight: "4 reviews",
    text: "Excellent service. The car was impeccable, with attention to detail and high quality finish. I recommend it.",
    truncated: false,
    postedRelative: "3 mo",
    ownerReplyPresent: true,
  },
  {
    id: "bruno-rafael",
    reviewer: "Bruno Rafael",
    profileWeight: "Local Guide · 8 reviews · 7 photos",
    text: "Best service from Colchester! Impeccable work with your vehicle is worth checking out!",
    truncated: false,
    postedRelative: "3 mo",
    ownerReplyPresent: true,
  },
  {
    id: "mayane-machado",
    reviewer: "Mayane Machado",
    profileWeight: "1 review",
    text: "Excellent service, friendly staff, and a great experience. I will definitely come back",
    truncated: false,
    postedRelative: "3 mo",
    ownerReplyPresent: true,
  },
  {
    id: "karine-lopes",
    reviewer: "Karine Lopes",
    profileWeight: "2 reviews",
    text: "Best cleaning my car could have, congratulations!",
    truncated: false,
    postedRelative: "3 mo",
    ownerReplyPresent: true,
  },
  {
    id: "k-b",
    reviewer: "K B",
    profileWeight: "1 review",
    text: "Great service delivery! Will definitely recommend!",
    truncated: false,
    postedRelative: "1 mo",
    ownerReplyPresent: true,
  },
  {
    id: "dulce-lora",
    reviewer: "Dulce Lora",
    profileWeight: "2 reviews",
    // Reproduced exactly as posted — likely a typo for "good," left uncorrected.
    text: "Very god",
    truncated: false,
    postedRelative: "3 mo",
    ownerReplyPresent: true,
  },
  {
    id: "marilia-souza",
    reviewer: "Marilia Souza",
    profileWeight: null,
    text: "Honestly, they're the best in Colchester! ⭐⭐⭐⭐⭐",
    truncated: false,
    postedRelative: "3 wk",
    ownerReplyPresent: true,
  },
  {
    id: "robert-m",
    reviewer: "Robert M",
    profileWeight: "8 reviews",
    text: "I needed my vehicle thoroughly cleaned inside and out and the engine too after years of grime and dirt buildup. Having attempted myself and given up within a couple of hours I contacted JS Detailing. Got an appointment for very next morning…",
    truncated: true,
    postedRelative: "1 mo",
    ownerReplyPresent: true,
  },
  {
    id: "diego-rodrigues",
    reviewer: "Diego Rodrigues",
    profileWeight: "7 reviews · 4 photos",
    text: null,
    truncated: false,
    postedRelative: "2 mo",
    ownerReplyPresent: false,
  },
  {
    id: "farliane-vieira",
    reviewer: "Farliane Vieira",
    profileWeight: null,
    text: null,
    truncated: false,
    postedRelative: "2 mo",
    ownerReplyPresent: false,
  },
  {
    id: "leidiane-bento",
    reviewer: "Leidiane Bento",
    profileWeight: "1 review",
    text: null,
    truncated: false,
    postedRelative: "2 mo",
    ownerReplyPresent: false,
  },
  {
    id: "josiane-promotora",
    reviewer: "Josiane Promotora",
    profileWeight: null,
    text: null,
    truncated: false,
    postedRelative: "3 mo",
    ownerReplyPresent: true,
  },
  {
    id: "rhaonny-paiva",
    reviewer: "Rhaonny Paiva",
    profileWeight: "1 review",
    text: null,
    truncated: false,
    postedRelative: "3 mo",
    ownerReplyPresent: true,
  },
];

export const reviewsWithText = reviews.filter((r) => r.text !== null);
