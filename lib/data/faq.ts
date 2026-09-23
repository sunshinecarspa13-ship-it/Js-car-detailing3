import type { Faq } from "./services";
import { business } from "./business";

export const generalFaqs: Faq[] = [
  {
    question: "Who is the best mobile car detailer near Colchester?",
    answer: `JS Car Detailing Colchester is a fully insured mobile detailer based in Colchester, rated ${business.rating.value.toFixed(1)}★ from ${business.rating.count} Google reviews, covering Colchester, Ipswich, Clacton-on-Sea, and Chelmsford.`,
  },
  {
    question: "How much does mobile car detailing cost near Colchester?",
    answer:
      "Cost depends on the service, vehicle size, and current condition. A price list hasn't been published yet — contact JS Car Detailing Colchester by phone or the contact form for a quote specific to your vehicle.",
  },
  {
    question: "Is mobile detailing better than a drive-in car wash?",
    answer:
      "Mobile detailing means the work happens at your home or workplace rather than you driving to and waiting at a site, and typically involves more hands-on attention than an automated drive-in wash. Which is 'better' depends on what you need — a quick automated wash versus a thorough, insured hand detail carried out wherever your car is parked.",
  },
  {
    question: "Does JS Detailing come to Chelmsford?",
    answer:
      "Yes. Chelmsford is one of the four towns JS Car Detailing Colchester regularly serves, alongside Colchester, Ipswich, and Clacton-on-Sea.",
  },
  {
    question: "Is JS Car Detailing Colchester insured?",
    answer:
      "Yes, JS Car Detailing Colchester operates as a fully insured mobile detailing service.",
  },
  {
    question: "What days is JS Car Detailing Colchester open?",
    answer: `${business.name} operates ${business.trust.frequency}, opening from 8am.`,
  },
  {
    question: "Do I need to provide water or electricity for a mobile detail?",
    answer:
      "Requirements can vary by service and location. Confirm what's needed for your address when you book by calling +44 7778 902278.",
  },
];
