// Single source of truth for all business facts.
// Every number, address fragment, and claim shown on the site must be read
// from here — never re-typed inline. If a fact isn't listed here, it isn't
// verified, and must not be invented elsewhere in the codebase.

export const business = {
  name: "JS Car Detailing Colchester",
  legalCategory: "Mobile Car Detailing Service",

  rating: {
    value: 5.0,
    count: 15,
  },

  googlePlusCode: "VWHJ+C6 Colchester, United Kingdom",
  googleProfileUrl: "https://share.google/UGx470jGqVjONJ3x3",

  address: {
    line1: "Unit 3, Former Regent's Warehouse Site",
    line2: "King Edward Quay, Hythe Quay",
    city: "Colchester",
    postalCode: "CO2 8JB",
    country: "United Kingdom",
    countryCode: "GB",
    // Full single-line form for display / schema "streetAddress"
    full: "Unit 3, Former Regent's Warehouse Site, King Edward Quay, Hythe Quay, Colchester CO2 8JB, United Kingdom",
  },

  phone: {
    display: "+44 7778 902278",
    href: "+447778902278",
  },

  // Closing time not confirmed in source data — placeholder, do not fabricate.
  hours: {
    opens: "08:00",
    closes: null as string | null,
    closesPlaceholder: "{{PLACEHOLDER: confirm closing time with client}}",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    display: "Open 7 days a week from 8am",
  },

  serviceArea: {
    base: "Colchester",
    towns: ["Colchester", "Ipswich", "Clacton-on-Sea", "Chelmsford"],
    description:
      "Fully mobile — we come to you across Colchester, Ipswich, Clacton-on-Sea, Chelmsford and the surrounding Essex and Suffolk areas.",
  },

  trust: {
    insured: true,
    ratingHeadline: "5.0★ rated, 15 Google reviews",
    frequency: "7 days a week",
    ownerReviewResponse:
      "The owner personally replies to nearly every Google review, usually within about a month of it being posted.",
  },

  social: {
    instagram: null as string | null,
    instagramPlaceholder: "{{PLACEHOLDER: get live Instagram handle from client}}",
  },

  email: null as string | null,
  emailPlaceholder: "{{PLACEHOLDER: business email not supplied}}",

  insuranceNumber: null as string | null,
  insuranceNumberPlaceholder:
    "{{PLACEHOLDER: business registration / insurance number not supplied}}",
} as const;

export type Business = typeof business;
