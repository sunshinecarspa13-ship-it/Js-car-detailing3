# SEO page inventory — jsdetailingcolchester.co.uk

Built against the programmatic local SEO brief (topical map, anti-thin-content
rules, AEO/GEO layer). All pages are statically generated from `lib/data/*`.
Run `npm run build && npm run seo:uniqueness` to re-check text overlap. The
target is ≤ 40% shared with the closest sibling, and the current worst case is
35%.

## Published (47 URLs)

| URL | Type | Primary entity | Secondary entity | Intent | Priority | Schema |
|---|---|---|---|---|---|---|
| `/` | Core pillar | JS Car Detailing Colchester | Mobile car detailing | Navigational / commercial | 1.0 | AutoDetailing, WebSite |
| `/services` | Core hub | Car detailing services | Colchester | Commercial | 0.9 | Breadcrumb |
| `/areas` | Core hub | Service area | Essex & Suffolk | Commercial | 0.8 | Breadcrumb |
| `/book` | Core | Booking | — | Transactional | 0.9 | Breadcrumb |
| `/gallery` | Core | Before & after photos | Services | Commercial investigation | 0.7 | ImageGallery, ImageObject, Breadcrumb |
| `/reviews` | Core | Google reviews | 5.0★ / 15 | Commercial investigation | 0.7 | AutoDetailing, Breadcrumb |
| `/about` | Core | Business | Insured, mobile | Informational | 0.6 | Breadcrumb |
| `/contact` | Core | Quote request | — | Transactional | 0.7 | Breadcrumb |
| `/faq` | FAQ hub | General + per-service FAQs | — | Informational | 0.6 | FAQPage, Breadcrumb |
| `/guides` | Resource hub | Car care guides | — | Informational | 0.6 | ItemList, Breadcrumb |
| `/services/exterior-wash` | Service pillar | Exterior wash | Colchester | Commercial | 0.8 | Service, FAQPage, Breadcrumb |
| `/services/deep-clean` | Service pillar | Deep clean / full valet | Colchester | Commercial | 0.8 | Service, FAQPage, Breadcrumb |
| `/services/interior-clean` | Service pillar | Interior clean | Colchester | Commercial | 0.8 | Service, FAQPage, Breadcrumb |
| `/services/paint-protection` | Service pillar | Paint protection | Colchester | Commercial | 0.8 | Service, FAQPage, Breadcrumb |
| `/services/headlight-restoration` | Service pillar | Headlight restoration | Colchester, MOT | Commercial | 0.8 | Service, FAQPage, Breadcrumb |
| `/services/exterior-wash/snow-foam-wash` | Sub-service | Snow foam wash | Swirl marks | Informational → commercial | 0.7 | Service, FAQPage, Breadcrumb |
| `/services/interior-clean/seat-stain-removal` | Sub-service | Seat stain removal | Interior clean | Commercial | 0.7 | Service, FAQPage, Breadcrumb |
| `/services/exterior-wash/alloy-wheel-detailing` | Sub-service | Alloy wheel detailing | Exterior wash | Commercial | 0.7 | Service, WebPage (mentions), FAQPage, Breadcrumb |
| `/services/exterior-wash/maintenance-valet-plans` | Sub-service | Maintenance valet plans | Exterior wash | Commercial | 0.7 | Service, WebPage (mentions), FAQPage, Breadcrumb |
| `/services/deep-clean/clay-bar-decontamination` | Sub-service | Clay bar decontamination | Deep clean | Commercial | 0.7 | Service, WebPage (mentions), FAQPage, Breadcrumb |
| `/services/deep-clean/engine-bay-cleaning` | Sub-service | Engine bay cleaning | Deep clean | Commercial | 0.7 | Service, WebPage (mentions), FAQPage, Breadcrumb |
| `/services/deep-clean/van-commercial-valeting` | Sub-service | Van & commercial valeting | Deep clean | Commercial | 0.7 | Service, WebPage (mentions), FAQPage, Breadcrumb |
| `/services/interior-clean/pet-hair-removal` | Sub-service | Pet hair removal | Interior clean | Commercial | 0.7 | Service, WebPage (mentions), FAQPage, Breadcrumb |
| `/services/interior-clean/leather-cleaning-and-conditioning` | Sub-service | Leather cleaning & conditioning | Interior clean | Commercial | 0.7 | Service, WebPage (mentions), FAQPage, Breadcrumb |
| `/services/interior-clean/odour-removal` | Sub-service | Car odour removal | Interior clean | Commercial | 0.7 | Service, WebPage (mentions), FAQPage, Breadcrumb |
| `/services/interior-clean/carpet-and-upholstery-shampoo` | Sub-service | Carpet & upholstery shampoo | Interior clean | Commercial | 0.7 | Service, WebPage (mentions), FAQPage, Breadcrumb |
| `/services/paint-protection/ceramic-coating` | Sub-service | Ceramic coating | Paint protection | Commercial | 0.7 | Service, WebPage (mentions), FAQPage, Breadcrumb |
| `/services/paint-protection/paint-protection-film` | Sub-service | Paint protection film | Paint protection | Commercial | 0.7 | Service, WebPage (mentions), FAQPage, Breadcrumb |
| `/services/paint-protection/machine-polishing` | Sub-service | Machine polishing / paint correction | Paint protection | Commercial | 0.7 | Service, WebPage (mentions), FAQPage, Breadcrumb |
| `/areas/colchester` | Location pillar | Colchester | 5 services | Commercial (local) | 0.8 | Service (area), FAQPage, Breadcrumb |
| `/areas/ipswich` | Location pillar | Ipswich | 5 services | Commercial (local) | 0.8 | Service (area), FAQPage, Breadcrumb |
| `/areas/clacton-on-sea` | Location pillar | Clacton-on-Sea | Salt air | Commercial (local) | 0.8 | Service (area), FAQPage, Breadcrumb |
| `/areas/chelmsford` | Location pillar | Chelmsford | 5 services | Commercial (local) | 0.8 | Service (area), FAQPage, Breadcrumb |
| `/areas/colchester/the-hythe` | Sub-location | The Hythe (CO2) | Home base | Commercial (hyperlocal) | 0.7 | Service, Place, FAQPage, Breadcrumb |
| `/areas/colchester/old-heath` | Sub-location | Old Heath (CO2) | — | Commercial (hyperlocal) | 0.7 | same |
| `/areas/colchester/greenstead` | Sub-location | Greenstead (CO4) | Family cars | Commercial (hyperlocal) | 0.7 | same |
| `/areas/colchester/wivenhoe` | Sub-location | Wivenhoe (CO7) | Conservation area | Commercial (hyperlocal) | 0.7 | same |
| `/areas/colchester/berechurch` | Sub-location | Berechurch & Shrub End (CO2) | Weekend slots | Commercial (hyperlocal) | 0.7 | same |
| `/areas/colchester/myland` | Sub-location | Myland / Mile End (CO4) | Workplace detailing | Commercial (hyperlocal) | 0.7 | same |
| `/areas/colchester/highwoods` | Sub-location | Highwoods (CO4) | Driveway detailing | Commercial (hyperlocal) | 0.7 | same |
| `/areas/colchester/lexden` | Sub-location | Lexden & Prettygate (CO3) | Tree sap / paint | Commercial (hyperlocal) | 0.7 | same |
| `/areas/colchester/stanway` | Sub-location | Stanway (CO3) | A12 commuting | Commercial (hyperlocal) | 0.7 | same |
| `/guides/exterior-wash-vs-interior-clean-vs-deep-clean` | Comparison | Which service to book | Comparison table | Informational | 0.5 | Article, FAQPage, Breadcrumb |
| `/guides/mobile-car-valeting-vs-drive-through-car-wash` | Comparison | Mobile vs drive-through | Comparison table | Informational | 0.5 | Article, FAQPage, Breadcrumb |
| `/guides/why-headlights-go-cloudy` | Guide | Headlight oxidation | MOT (GOV.UK) | Informational | 0.5 | Article, FAQPage, Breadcrumb |
| `/guides/protecting-your-car-from-coastal-salt-air` | Guide | Salt air & paint | Clacton / Tendring | Informational | 0.5 | Article, FAQPage, Breadcrumb |
| `/guides/valeting-your-car-before-selling` | Guide | Pre-sale valet | Deep clean | Informational | 0.5 | Article, FAQPage, Breadcrumb |

All 35 URLs are reachable within **2 clicks** of the home page, with no orphans.

## Deliberately not published, and what would unlock each

| Planned in brief | Decision | Unlock condition |
|---|---|---|
| Service × City pages (`/services/[service]/[city]`, 15–20 URLs) | **Folded into the city pillars.** Each city page has a unique note per service. Standalone pages would fail rule 6: there are no location-tagged reviews or photos. Colchester × service would also cannibalise the service pillars, which already target "{service} Colchester". | Real reviews or job photos tagged to each town. Then publish only those combinations. |
| Extra towns (Witham, Braintree, Maldon, Harwich, Sudbury, Halstead, Tiptree, West Mersea, Frinton, Walton) | Not published. Coverage is only confirmed for the 4 towns plus "surrounding areas". A page per town would claim coverage the client hasn't confirmed. | The client confirms which towns they regularly serve. |
| Sub-locations for Ipswich, Clacton, Chelmsford | Not published, per the brief (Colchester only at full depth). | Business volume in those towns. |
| Prices, product brands, coating lifespans, guarantees on the 12 treatment pages added 2026-09-28 | Copy stays generic. The client confirmed the services but not these details. | The client supplies them. Then add them to the matching entry in `lib/data/subservices.ts`. |
| Pricing page | Not published. No prices are confirmed (see README placeholders). | The client's price list. |
| Owner bio, certifications (E-E-A-T) | Not published. None supplied. | Name, experience and any certifications from the client. |
| "Ceramic coating vs wax" comparison | Not yet written. Ceramic coating is now confirmed, so this is unblocked. | Write it as a guide in `lib/data/guides.ts`, linking to the ceramic coating page. |
| Before/after slider | Not built. The photos are single joined before/after images, not separate before and after shots. Labelled halves plus a lightbox are used instead. | Separate before and after photos of the same job. |

## Data sources for local facts

The neighbourhood facts come from each place's Wikipedia article, or OpenStreetMap
where no article exists (Highwoods). Postcode districts come from postcodes.io,
and distances are straight-line miles from the business's Plus Code. See the
header comment in `lib/data/sublocations.ts`.
