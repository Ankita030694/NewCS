# Structured Data (Schema.org) Audit: www.credsettle.com

Date: 2026-11-26. Scope: 729 crawled pages (500 BFS + 229 sitemap-stratified) plus 9 extra saved samples (`data/html/*.html`, `crawl/cmp_*.html`). The project source was read but not modified, to confirm how the JSON-LD is emitted.

## Schema score: 36 / 100

| Dimension | Weight | Score | Reasoning |
|---|---|---|---|
| Syntax and format | 15 | 14 | 0 parse errors in 1,424 blocks. JSON-LD only (0 Microdata/RDFa). Every block uses `https://schema.org`, absolute URLs and ISO 8601 dates with timezones. One block has an invalid MIME type (`app/ld+json` on /privacy-policy). |
| Delivery (in server HTML) | 10 | 5 | 444 of 1,424 blocks (31%) are injected client-side by `next/script` and are missing from server HTML. That covers the homepage, all 187 loan-settlement-by-bank pages, the calculators, the author page, contact and terms. The shared `Breadcrumbs.tsx` and `FAQWithSchema.tsx` components also inject client-side. |
| Coverage of core types | 15 | 7 | The homepage has no server-rendered Organization or WebSite. No page defines the site entity with a stable @id. BreadcrumbList is missing on 637 service-lender pages, about 144 state pages and the homepage/about/contact/index pages. |
| Entity graph and consistency | 15 | 2 | Three phone numbers, three addresses and 8+ organization names. `#organization` is declared with conflicting addresses/phones. `#service` carries 20 different names. Most nodes are unlinked inline copies. |
| Required and recommended properties | 15 | 6 | Build-time dates (`new Date()`) on about 830 pages. A single template-wide date on about 1,591 cc pages. Article image is missing on about 1,100 pages. About 1,592 pages name an author with no URL or profile. The logo is below 112x112. |
| Policy compliance | 20 | 0 | Self-serving review/rating markup that is not visible and is inconsistent across pages. Product used for services and articles. FAQPage that is not on the page (about 1,548 pages). Placeholder phones and fake city "LocalBusiness" locations. |
| Factual accuracy | 10 | 2 | NAP conflicts with the visible site. Unverified priceRange. Twitter sameAs that the site never links to. Review counts such as 18,200 / 12,500 / 10,000 / 6,180 / 1,840 appear nowhere on the pages. |
| **Total** | 100 | **36** | The syntax is good. The content of the markup creates manual-action risk on a YMYL finance site. |

## Method and limitations

- Server HTML: `<script type="application/ld+json">` was parsed on every page (`tools/schema/extract2.py`).
- Client-injected JSON-LD: the Next.js RSC payload (`self.__next_f.push`) was decoded, text-row references (`$1b` etc.) were resolved, and every element with `type: application/ld+json` was extracted. All 444 such blocks come from client module 138663, which is `next/script` (confirmed in source: `src/app/page.tsx` line 12 imports `Script from "next/script"`; `src/components/Breadcrumbs.tsx`; `src/components/FAQWithSchema.tsx`).
- **Not verified in a rendered DOM.** Rendering was not run (this was a no-re-crawl audit). Some JSON-LD is built entirely inside client components (`FAQWithSchema`, `'use client'` pages such as /about, /resources, /bank-filed-fir-for-loan-default). That markup is invisible to both server HTML and the RSC payload, so it was identified from source only. Spot-check with Google's Rich Results Test or URL Inspection.
- Visibility checks compare schema text with the server HTML after removing scripts and tags. Text that only appears after hydration (accordions, carousels) is reported separately as "in client props".

### Corrections to the crawl README's "established facts"

- **The homepage is not schema-less.** It has 4 blocks (Organization, WebSite+SearchAction, FinancialService, FAQPage), but all are injected client-side by `next/script`. Server HTML has none.
- **loan-settlement-by-bank pages are not schema-less.** Article, BreadcrumbList and FAQPage are injected client-side.
- **The services index is not schema-less.** It has client-side FAQPage and ItemList.
- **Services state pages depend on loan type.** The 36 crawled state pages are all `/services/app-loan-settlement/{state}`, and those (plus business, car and nbfc states, 144 pages) have no server JSON-LD. Personal-loan and credit-card state routes do render server JSON-LD; e.g. /services/personal-loan-settlement/karnataka has FinancialService, BreadcrumbList and LocalBusiness. All 216 state pages add a client-built FAQPage via `FAQWithSchema`.
- **Service lender pages do not carry standalone FinancialService/Organization nodes.** They have 1 server block (Article) with `about: FinancialService` and Organization only nested as author/publisher/provider. They also get a client-built FAQPage.
- **Resources pages** carry Article, Organization, FinancialService (with AggregateRating and Review), FAQPage and BreadcrumbList.

## 1. Inventory by template

Counts: "Sitemap" is the number of URLs in the sitemap; "Sampled" is the number crawled. Server = in server HTML; Client = `next/script` (RSC payload); Source-only = built inside a client component.

| Template | Sitemap | Sampled | Server-HTML JSON-LD | Client-injected | Types | Parse errors | Notes |
|---|---|---|---|---|---|---|---|
| Homepage `/` | 1 | 1 | none | 4 blocks | Organization (no @id, `sameAs: []`), WebSite+SearchAction, FinancialService ("Loan Settlement Services", priceRange "INR1500-INR25000"), FAQPage (5) | 0 | Correct Gurugram NAP, but only client-side |
| CC hub `/credit-card-settlement` | 1 | 1 | 5 | 0 | Article (author Rahul Verma), BreadcrumbList, Organization (**`+91-XXXX-XXXXXX`**), FAQPage (7), **Product + AggregateRating 4.8/3 + 3 Reviews** | 0 | Product is named after the article; three 5-star reviews cannot average 4.8 |
| CC issuer `/credit-card-settlement/{issuer}` | 43 | 43 | 3-4 | 1 | Article, BreadcrumbList, FAQPage (3, visible), plus **Product 4.8/1,840** on axis, hdfc, icici, kotak, sbi | 0 | Duplicate BreadcrumbList (server + client) with conflicting names |
| CC issuer x state | 1,548 | 60 (+3) | 3 | 1 | Article (Rahul Verma, 2026-07-07), BreadcrumbList, **FAQPage (3) not on page** | 0 | Duplicate BreadcrumbList |
| Services index `/services` | 1 | 1 | none | 2 | FAQPage, ItemList | 0 | |
| Services hubs `/services/{type}` | 10 | 8 | 4 of 8 | 1 of 8 | @graph(WebPage, LegalService, FAQPage); LegalService phone **+91-8800226444**, no address; nbfc: client FinancialService | 0 | anti-harassment, app-loan, credit-score-builder: nothing server-side; FAQ via client component |
| Services state `/services/{type}/{state}` | 216 | 36 (app-loan only) | none (app/business/car/nbfc, 144 pages); personal-loan and credit-card: yes | source-only FAQPage on all 216 | PL/CC static states: FinancialService + **LocalBusiness "CredSettle {State}" with city address, geo, opening hours, `+91-XXXXXXXXXX`, AggregateRating 4.8/10,000** | 0 | 22 static PL/CC state folders declare GeoCoordinates |
| Services lender `/services/{type}/banks/{lender}` | 637 | 362 | 1 | 0 (+ source-only FAQPage) | Article only (author Org "CredSettle" on 240, Ashish Jhangra on 122); `about: FinancialService` | 0 | **datePublished = dateModified = build time**; no image; no BreadcrumbList |
| Loan-settlement-by-bank index | 1 | 1 | none | 2 | CollectionPage, BreadcrumbList | 0 | |
| Loan-settlement-by-bank lender | 187 | 46 | none | 3 | Article (Ashish Jhangra), BreadcrumbList, FAQPage (6) | 0 | **dateModified = build time**; datePublished 2026-01-01 on all |
| `/loan-settlement/{x}` | 37 | 14 | 2 of 14 | 12 of 14 | Article, BreadcrumbList, FAQPage, Organization, **Product + AggregateRating on 11/14** | 0 | Ratings 4.7-4.9 / 134-1,340 (e.g. /loan-settlement/axis-bank 4.8/920) |
| `/loan-settlement` | 1 | 1 | 4 | 0 | Article (author "CredSettle Legal Advisory Board"), FinancialService **4.8/12,500**, FAQPage (20), BreadcrumbList | 0 | |
| Resources `/resources/{slug}` | 194 | 40 | 5 | 0 | Article (Ashish Jhangra, with URL), Organization `#organization` (**New Delhi, +91-8800226377**), **FinancialService + AggregateRating 5.0 + 3-5 Reviews**, FAQPage, BreadcrumbList | 0 | Reviews are never rendered; 14/40 use hardcoded "default" reviews |
| Resources index | 1 | 1 | none | 0 (source-only) | built in `ResourcesClient.tsx` via next/script | 0 | |
| Root-level articles | 693 | 98 | 65 of 98 | 41 of 98 | 10+ variants: 28 @graph(Article, Organization, Breadcrumb, FAQ, FinancialService with AggregateRating); 16 @graph(Article, Breadcrumb, FAQ); 13 client Article+Breadcrumb; 9 client with Product; etc. | 0 | **51/98 carry AggregateRating**; 2 of 98 build all JSON-LD in client components |
| Tools | 10 | 10 | 1 (/tools) | 9 | /tools: CollectionPage, BreadcrumbList, FAQPage, WebSite. Calculators: @graph(SoftwareApplication, BreadcrumbList, FAQPage) + duplicate BreadcrumbList | 0 | SoftwareApplication has no rating (correct; do not add one) |
| About | 1 | 1 | none | 0 (source-only) | `'use client'` page with next/script | 0 | |
| Contact | 1 | 1 | none | 1 | FAQPage (4) only; no ContactPage/Organization | 0 | Passes JSON as `children` of `<Script>` |
| Author `/author/ashish-jhangra` | 1 | 1 | none | 1 | ProfilePage + Person (jobTitle, image, LinkedIn sameAs, worksFor) | 0 | Good content, client-only, no @id |
| Privacy policy | 1 | 1 | none | none | `<Script type="app/ld+json">` (invalid MIME type) | n/a | Ignored by all parsers |
| Terms | 1 | 1 | none | 1 | WebPage + BreadcrumbList | 0 | |

Sample totals: 980 server blocks and 444 client blocks. 579/729 pages have JSON-LD in server HTML, 105 have only client-injected JSON-LD, and 45 have none detectable statically. Pages carrying each type: FAQPage 292, Article 662, BreadcrumbList 314, AggregateRating 108, Review 102, Product 28, WebSite 2.

### @id usage and linking
- `https://www.credsettle.com/#organization` appears on 71 sampled nodes (resources and root @graph pages) with **two different addresses and phones**. The homepage Organization, the natural home of that entity, has **no @id**.
- `https://www.credsettle.com/#service` appears on 149 nodes with **20 different names** and per-page URLs. One @id is being used for many entities.
- Same @id for different types on one page: /services/personal-loan-settlement/karnataka gives both FinancialService and LocalBusiness `@id` = the page URL.
- About 1,995 organization-like nodes have no @id at all (publisher/author/provider/worksFor copies). A typical service-lender page has 3 unlinked inline copies of "CredSettle".
- Good pattern to build on: root @graph pages use `#article`, `#breadcrumb`, `#faq` and `https://www.credsettle.com/author/ashish-jhangra#author`.

## 2. Validation against Google requirements

| Type | Result | Detail |
|---|---|---|
| Article | Partial pass | `headline` present (one root article is missing it). datePublished missing on 6 and dateModified on 8 root-article Articles. **image missing** on 362/362 service-lender, 46/46 lsbb, 14/14 loan-settlement and 39/93 root Articles. The cc pages use the logo SVG as the article image. author.url is missing on 1,592 cc pages and 39 root articles. Organization is the author on 240 service-lender, 35 root and 10 loan-settlement Articles. |
| BreadcrumbList | Pass (structure) | 0 position errors, all item URLs absolute and resolving to known 200 pages. Problems are duplication (1,591 cc pages and 6 tools pages carry 2 lists with different names; "Home" with and without a trailing slash) and absence on large templates. |
| Organization | Fail (consistency) | name/url present. Logo is 131x40 PNG or 105x32 SVG, both under Google's 112x112 minimum. `/logo.png` (referenced by 11 publisher logos) is not in `public/`, so it is likely a 404. Address and telephone conflict (see H1). `sameAs` is empty on the homepage and elsewhere lists a Twitter account the site never links to. |
| LocalBusiness / FinancialService / LegalService | Fail | Placeholder phones. City addresses where there is no office. FinancialService named after article topics. LegalService on service hubs has phone +91-8800226444 and no address. |
| Person | Partial | Ashish Jhangra is well formed: profile page returns 200, LinkedIn sameAs, image. "Rahul Verma" (about 1,592 pages) has no URL or profile and uses `default-user.svg`. Other names have no profile, or point to /contact, /about or a nonexistent `/author/rajeshsharma`. "CredSettle Legal Team" is typed as Person. |
| FAQPage | Valid syntax; no rich result available | FAQ rich results have been limited to authoritative government/health sites since Aug 2023, so they bring this site no SERP benefit. Questions are visible on cc issuer, homepage, contact and resources. **Not on the page at all** on cc issuer x state (180/180 sampled questions exist only inside the JSON-LD). |
| Product / Review / AggregateRating | Fail (policy) | See C1. |
| SoftwareApplication (calculators) | Valid; not rich-result eligible | Has name, offers (price 0 INR), applicationCategory and operatingSystem but no rating. That is the honest state; do not add ratings. |
| WebSite + SearchAction | Valid; SearchAction has no effect | Google retired the sitelinks search box in Nov 2024. WebSite is still useful for the site name. |

## 3. Findings

### Critical

**C1. Self-serving, non-visible, inconsistent review and rating markup (manual-action risk).**
- 108/729 sampled pages carry AggregateRating and 102 carry Review. `itemReviewed` / the rated entity is CredSettle's own FinancialService/LegalService/Organization, or a "Product" that is really the article or service. Google has not shown review stars for self-serving LocalBusiness/Organization reviews since 2019. Marking up reviews that are not visible, or that look fabricated, is a "spammy structured markup" manual-action trigger.
- The counts contradict each other for the same company, and none of the 3-5 digit counts appear on the page:
  - 4.9 / 18,200 on /how-to-stop-recovery-agent-harassment
  - 4.8 / 12,500 on /loan-settlement
  - 4.8 / 10,000 on /services/personal-loan-settlement/karnataka
  - 4.9 / 6,180 on 7 root articles, e.g. /credit-card-balance-transfer-default-interest-rules
  - 4.8 / 5,420 on /verify-loan-settlement-letter
  - 4.8 / 1,840 on /credit-card-settlement/{axis,hdfc,icici,kotak,sbi}
  - 5.0 / 3-5 on all resources pages
- Reviews are not visible:
  - **Resources: 172/172 never rendered.** `BlogPostPageClient.tsx` keeps `reviews` in state but never maps them to markup.
  - 14/40 sampled resources pages (about 35%, so roughly 68 site-wide) fall back to the same three hardcoded reviews ("Vikram Mehta", "Pooja Verma", "Anand Kulkarni") in `src/app/resources/[slug]/page.tsx` (`defaultBlogReviews`).
  - Root articles: 162/185 review bodies exist only in schema. CC issuer: 5/5 schema-only.
- On /credit-card-settlement, a Product titled "Credit Card Settlement in India: Legal & Secure Guide" is rated 4.8 from three 5-star reviews.
- Product is used for a service or article on 28 sampled pages, e.g. /loan-settlement/axis-bank and /how-to-settle-a-credit-card-debt.
- **Affiliated-brand reviews.** /which-loan-settlement-service-should-i-use-for-settling-multiple-credit-card-debts, /loan-settlement-services-lower-interest-rates-india and /how-to-check-if-a-debt-settlement-company-is-legit-and-trustworthy mark up 5-star reviews of "Ama Legal Solutions" and "SettleLoans" next to CredSettle, presented as alternatives. Internal project notes describe these as affiliated brands of the same firm. Undisclosed affiliation plus review markup adds risk.

**C2. FAQPage for content that is not on the page: about 1,548 cc issuer x state pages.** Every sampled page (60/60, 180 questions) has 3 FAQ questions that appear nowhere in the page content, only in the JSON-LD. Example: /credit-card-settlement/suryoday-small-finance-bank/jammu-and-kashmir includes "Will my case be transferred to the Debt Recovery Tribunal in Chandigarh?". These are legal statements that exist only in markup, and the page has no FAQ section. FAQ rich results are not available to this site anyway, so this markup carries risk and no benefit.

**C3. Placeholder phone numbers and fake local-business locations.**
- `"telephone": "+91-XXXX-XXXXXX"` appears in the Organization contactPoint on /credit-card-settlement and on 3 sampled root articles (e.g. /mudra-loan-settlement-legal-help).
- In source, 68 placeholder `telephone` literals sit in 87 files. That includes 53 `'+91-XXXXXXXXXX'` across 31 static state-page files (11 personal-loan, 11 credit-card, 9 nbfc) in their FinancialService/LocalBusiness nodes, plus about 15 `"+91-XXXX-XXXXXX"` in root-article components. Client-built ones could not be counted on live pages.
- Those 22 state pages declare **LocalBusiness "CredSettle {State}"** with a city address, GeoCoordinates and opening hours. Example: /services/personal-loan-settlement/karnataka declares Bangalore at 12.9716, 77.5946, Mon-Sat 09:00-18:00. The only office shown on the site (728/729 pages, plus /contact) is 4th Floor, 2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram 122001. Declaring business locations that don't exist breaks Google's local business guidelines and hurts YMYL trust.

**C4. Potential stored XSS and schema injection through resources reviews (security; developer must verify).**
- In `src/app/resources/[slug]/page.tsx`, `serviceSchema` embeds visitor-submitted `review.author` and `review.comment` read from Firestore. They are written by `addBlogReview()` in `src/lib/blogs.ts`, which has no moderation flag and does not clamp the rating.
- `serviceSchema` is serialized with plain `JSON.stringify` into `dangerouslySetInnerHTML`. Only the FAQ block uses `safeJsonLdReplacer`, which escapes `<`.
- A comment containing `</script>` would close the script tag on the next ISR revalidation (`revalidate = 300`).
- Firestore security rules are not in the repo, so whether public writes are allowed could not be confirmed. Even without XSS, anyone could inject review text and ratings into the page's structured data.

### High

**H1. Conflicting identity and NAP across the site; no single Organization entity.**
- Visible on the site: phone +91 8800226635. Address: 4th Floor, 2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana 122001. Email info@credsettle.com. Social: facebook.com/people/CredSettle/61572589389799/, instagram.com/credsettle/, linkedin.com/company/credsettle/.
- Telephone in schema:
  - +91-8800226635 (homepage, root @graph)
  - **+91-8800226377** (all resources pages, Organization + ContactPoint + FinancialService)
  - **+91-8800226444** (service-hub LegalService)
  - placeholders
- Address in schema:
  - Gurugram (homepage)
  - **"CredSettle Legal Advisory", New Delhi 110001** (resources)
  - **"Barakhamba Road, Connaught Place", New Delhi 110001** (root @graph pages, e.g. /verify-loan-settlement-letter)
  - "Bangalore" etc. (state pages)
- Organization/author names in use: CredSettle, CredSettle Legal Team, CredSettle Legal Advisory Board, CredSettle Legal Research Desk, CredSettle Consumer Protection Wing, CredSettle Financial Advisory, CredSettle Legal Services (legalName), "CredSettle Debt Settlement & Banking Legal Advisory Services".
- sameAs: `[]` on the homepage. facebook.com/credsettle and twitter.com/credsettle elsewhere, neither of which the site links to.
- priceRange: "INR1500-INR25000" (homepage, not shown anywhere on the page; internal notes indicate fees are a percentage of debt with a ₹3L minimum case, so this range looks unverified), "Consultation Free", "Free Consultation", "₹₹".

**H2. Build-time and template-constant dates.**
- Service-lender pages (637): `datePublished: new Date().toISOString()` and the same for dateModified in all six `src/app/services/{type}/banks/[bank]/page.tsx`. Sampled values are 2026-11-24T07:03:44.882Z, which equals 12:33 IST, matching the "Added Pages" deploy commit at 12:31 IST. Every deploy re-dates about 637 pages as "published today". Seven pages show 2026-11-25.
- Loan-settlement-by-bank (187): `dateModified: new Date()` (`src/app/loan-settlement-by-bank/[slug]/page.tsx` line 405). datePublished is 2026-01-01 on all of them.
- /loan-settlement/{sbi,axis-bank,union-bank,piramal-finance}: dateModified is `new Date()`.
- 10 source files set `datePublished = new Date()`.
- CC issuer and issuer x state (1,591): datePublished = dateModified = 2026-07-07 on every page, while sitemap lastmod says 2026-10-15 or 2026-11-09. Across sampled Articles, dateModified differs from the sitemap lastmod on 599/662.

**H3. JSON-LD delivered only by `next/script` (afterInteractive), so it is missing from server HTML.**
- 31% of sampled blocks.
- Whole templates depend on it: the homepage (every block), 187 lsbb lenders, 9 calculators, the author page, contact, terms, the services and lsbb indexes, 12/14 loan-settlement pages, and 31/98 root articles (41/98 use it for at least one block).
- Two shared components are affected. `Breadcrumbs.tsx` causes the duplicate breadcrumbs on cc pages. `FAQWithSchema.tsx` is a client component used by all 216 state pages and the service-lender pages.
- 670 source files import `next/script` to emit JSON-LD.
- Google can read JS-injected JSON-LD after rendering. Bing is less reliable, AI/LLM crawlers and most raw-HTML validators see nothing, and it adds a dependency on the render queue. Next.js recommends a plain `<script type="application/ld+json">` rendered from a server component.

**H4. Unidentifiable author on about 1,592 cc pages (E-E-A-T, YMYL).**
- "Rahul Verma, Consumer Debt Specialist" is a visible byline and `Article.author` on the cc hub, all 43 issuers and all 1,548 issuer x state pages. He has `default-user.svg` as his image, no URL, no profile page (only `/author/ashish-jhangra` exists), and no credentials or sameAs.
- Other weak authors:
  - Vikram Sharma, Anuj Bhiya: no URL
  - Rohan Kumar: URL is /contact
  - "Adv. Rohan Sharma": URL is /about
  - Rajesh Sharma: URL is `/author/rajeshsharma`, which has no route
  - "CredSettle Legal Team": typed as Person
- Ashish Jhangra is the one verifiable author: ProfilePage, LinkedIn, jobTitle. His jobTitle is inconsistent ("Expert" vs "Professional").

### Medium

**M1. Missing core types on large templates.**
- No server-rendered Organization/WebSite anywhere.
- BreadcrumbList missing on the 637 service-lender pages, 144 app/business/car/nbfc state pages, homepage, about, contact, services index and resources index.
- Service-lender pages use `Article` for what are service landing pages; WebPage + Service is more accurate.
- No AboutPage or ContactPage.

**M2. Duplicate or conflicting BreadcrumbList.**
- 1,591 cc pages emit two lists: a server one, and a client one from `Breadcrumbs.tsx`. Example /credit-card-settlement/suryoday-small-finance-bank/jammu-and-kashmir: "Suryoday Small Finance Bank" vs "Suryoday Small Finance Bank Settlement", "Jammu and Kashmir" vs "Jammu and Kashmir Settlement". On every cc page "Home" is `https://www.credsettle.com/` in one list and `https://www.credsettle.com` in the other.
- 6 calculators also duplicate; /tools/settlement-vs-repayment-calculator names conflict.

**M3. Article image and logo.**
- Image missing as listed above.
- The logo is used as the article image on the cc pages.
- `/logo.png` is referenced as the publisher logo on 11 sampled pages (e.g. /two-wheeler-bike-loan-settlement) but is not in `public/`.
- Both existing logo files are below Google's 112x112 minimum: credsettle-logo-black.png is 131x40 and credsettle-logo.svg is 105x32.

**M4. FAQPage volume.** 292/729 sampled pages carry FAQPage, with no rich-result upside. Visible FAQs are harmless and should stay (frozen). Do not add FAQPage to new pages for SERP features, and never add it where the Q&A isn't visible. Do not use HowTo (rich results removed 2023).

### Low

- **L1.** /privacy-policy uses `type="app/ld+json"` (`src/app/privacy-policy/page.tsx` line 258), so its schema is ignored.
- **L2.** The homepage WebSite has a SearchAction pointing to `/resources?q=`. It is harmless but has no effect since Google retired the sitelinks search box in Nov 2024.
- **L3.** The cc hub and state pages list `sameAs` URLs that differ from the footer profiles: facebook.com/credsettle and twitter.com/credsettle.
- **L4.** Calculators' SoftwareApplication is not rich-result eligible because it has no rating. That is acceptable; do not add ratings to qualify.

## 4. What's working
- 0 parse errors in 1,424 blocks. JSON-LD only; https context; absolute URLs; ISO 8601 with offsets.
- BreadcrumbList structure is correct everywhere it exists.
- The root @graph template already links Article to the author with `@id`, `isPartOf` and `mainEntityOfPage`, so the recommended graph is a small step from it.
- /author/ashish-jhangra is a solid E-E-A-T anchor: real photo, LinkedIn profile linked on 178 pages, ProfilePage markup.

## 5. Recommended graph (minimal and accurate)

Principles:
- One Organization node with stable `@id` `https://www.credsettle.com/#organization` and one WebSite node `#website`, rendered server-side. Every other node references them by `@id`.
- Every page gets WebPage + BreadcrumbList.
- Articles add Article + Person author (with url) and real stored dates.
- No AggregateRating, Review, Product, priceRange, openingHours or LocalBusiness-per-city.
- Use FAQPage only where the Q&A is visible, and never expect a rich result from it.
- Serialize with `<` escaped.

Values below are taken from the live pages and HTML. The only gap is the logo: the example uses the existing 131x40 PNG, which must be replaced by a square asset of at least 112x112 before Google will use it. `availableLanguage` is omitted because Hindi support isn't verified.

**A. Site-wide Organization + WebSite.** Put this in the root layout as a native `<script>`. Until the owner approves a layout change, new pages should embed this exact block from a shared constant.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.credsettle.com/#organization",
      "name": "CredSettle",
      "url": "https://www.credsettle.com/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.credsettle.com/#logo",
        "url": "https://www.credsettle.com/credsettle-logo-black.png",
        "contentUrl": "https://www.credsettle.com/credsettle-logo-black.png",
        "width": 131,
        "height": 40
      },
      "description": "Loan and credit card settlement services in India for credit cards, personal loans and business loans.",
      "email": "info@credsettle.com",
      "telephone": "+91-8800226635",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4th Floor, 2493AP, Block G, Sushant Lok 2, Sector 57",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "postalCode": "122001",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8800226635",
        "email": "info@credsettle.com",
        "contactType": "customer support",
        "areaServed": "IN"
      },
      "areaServed": { "@type": "Country", "name": "India" },
      "sameAs": [
        "https://www.facebook.com/people/CredSettle/61572589389799/",
        "https://www.instagram.com/credsettle/",
        "https://www.linkedin.com/company/credsettle/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.credsettle.com/#website",
      "url": "https://www.credsettle.com/",
      "name": "CredSettle",
      "inLanguage": "en-IN",
      "publisher": { "@id": "https://www.credsettle.com/#organization" }
    }
  ]
}
```

Owner decisions on this node:
- (a) Keep `Organization` rather than `FinancialService`/`LegalService`. Internal notes say CredSettle is a brand and engagements are signed by the affiliated law firm, so claiming a licensed financial or legal provider type is less accurate.
- (b) Whether to disclose the parent firm via `parentOrganization`. That is a transparency vs. lane-strategy call.
- (c) Replace the logo with a square asset of at least 112x112.

**B. Service landing page** (cc issuer x state shown; the same shape fits issuer, lender and state pages): WebPage + BreadcrumbList + Service, with no ratings and no LocalBusiness.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.credsettle.com/credit-card-settlement/hdfc/maharashtra#webpage",
      "url": "https://www.credsettle.com/credit-card-settlement/hdfc/maharashtra",
      "name": "HDFC Credit Card Settlement in Maharashtra | CredSettle",
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "https://www.credsettle.com/#website" },
      "publisher": { "@id": "https://www.credsettle.com/#organization" },
      "breadcrumb": { "@id": "https://www.credsettle.com/credit-card-settlement/hdfc/maharashtra#breadcrumb" },
      "mainEntity": { "@id": "https://www.credsettle.com/credit-card-settlement/hdfc/maharashtra#service" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.credsettle.com/credit-card-settlement/hdfc/maharashtra#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credsettle.com/" },
        { "@type": "ListItem", "position": 2, "name": "Credit Card Settlement", "item": "https://www.credsettle.com/credit-card-settlement" },
        { "@type": "ListItem", "position": 3, "name": "HDFC Bank Settlement", "item": "https://www.credsettle.com/credit-card-settlement/hdfc" },
        { "@type": "ListItem", "position": 4, "name": "Maharashtra", "item": "https://www.credsettle.com/credit-card-settlement/hdfc/maharashtra" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.credsettle.com/credit-card-settlement/hdfc/maharashtra#service",
      "name": "HDFC Credit Card Settlement in Maharashtra",
      "serviceType": "Credit card debt settlement",
      "provider": { "@id": "https://www.credsettle.com/#organization" },
      "areaServed": { "@type": "State", "name": "Maharashtra" }
    }
  ]
}
```

**C. Article page.** Real values from /verify-loan-settlement-letter. Dates are this page's existing hardcoded values; other pages must use dates stored with their content, never `new Date()`. The author `@id` reuses the one the root @graph template already uses.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.credsettle.com/verify-loan-settlement-letter#webpage",
      "url": "https://www.credsettle.com/verify-loan-settlement-letter",
      "name": "How to Verify a Bank's Loan Settlement Letter (Checklist)",
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "https://www.credsettle.com/#website" },
      "breadcrumb": { "@id": "https://www.credsettle.com/verify-loan-settlement-letter#breadcrumb" },
      "primaryImageOfPage": { "@id": "https://www.credsettle.com/verify-loan-settlement-letter#primaryimage" }
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.credsettle.com/verify-loan-settlement-letter#primaryimage",
      "url": "https://www.credsettle.com/images/infographics/verify-loan-settlement-letter.jpg"
    },
    {
      "@type": "Article",
      "@id": "https://www.credsettle.com/verify-loan-settlement-letter#article",
      "headline": "How to Verify a Bank's Loan Settlement Letter (Checklist)",
      "description": "Before you pay a single rupee, ensure your settlement letter is legally binding. Use our checklist to spot fake or conditional settlement letters.",
      "image": { "@id": "https://www.credsettle.com/verify-loan-settlement-letter#primaryimage" },
      "datePublished": "2026-08-21T09:00:00+05:30",
      "dateModified": "2026-08-21T09:00:00+05:30",
      "inLanguage": "en-IN",
      "mainEntityOfPage": { "@id": "https://www.credsettle.com/verify-loan-settlement-letter#webpage" },
      "isPartOf": { "@id": "https://www.credsettle.com/verify-loan-settlement-letter#webpage" },
      "author": { "@id": "https://www.credsettle.com/author/ashish-jhangra#author" },
      "publisher": { "@id": "https://www.credsettle.com/#organization" }
    },
    {
      "@type": "Person",
      "@id": "https://www.credsettle.com/author/ashish-jhangra#author",
      "name": "Ashish Jhangra",
      "url": "https://www.credsettle.com/author/ashish-jhangra",
      "image": "https://www.credsettle.com/ashishjhangra.png",
      "jobTitle": "Legal & Debt Resolution Expert",
      "sameAs": ["https://www.linkedin.com/in/ashish-jhangra-ab1a54127/"],
      "worksFor": { "@id": "https://www.credsettle.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.credsettle.com/verify-loan-settlement-letter#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credsettle.com/" },
        { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://www.credsettle.com/resources" },
        { "@type": "ListItem", "position": 3, "name": "How to Verify a Bank's Loan Settlement Letter", "item": "https://www.credsettle.com/verify-loan-settlement-letter" }
      ]
    }
  ]
}
```

**D. Author profile.** Server-rendered, with the same Person `@id`.

```json
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://www.credsettle.com/author/ashish-jhangra#profilepage",
  "url": "https://www.credsettle.com/author/ashish-jhangra",
  "name": "Ashish Jhangra - Debt Resolution Expert | CredSettle",
  "isPartOf": { "@id": "https://www.credsettle.com/#website" },
  "mainEntity": {
    "@type": "Person",
    "@id": "https://www.credsettle.com/author/ashish-jhangra#author",
    "name": "Ashish Jhangra",
    "url": "https://www.credsettle.com/author/ashish-jhangra",
    "image": "https://www.credsettle.com/ashishjhangra.png",
    "jobTitle": "Legal & Debt Resolution Expert",
    "description": "Legal and debt resolution expert at CredSettle, specializing in RBI loan settlements, borrower rights defense, and credit score rebuilding.",
    "sameAs": ["https://www.linkedin.com/in/ashish-jhangra-ab1a54127/"],
    "worksFor": { "@id": "https://www.credsettle.com/#organization" }
  }
}
```

**E. Safe server-side emitter** (replaces `<Script>` from `next/script` for JSON-LD):

```tsx
// src/lib/jsonld.ts (new file)
export function toJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

// in a server component
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(graph) }} />
```

All examples were checked as valid JSON, and every `@id` reference resolves within the example or to the site-wide nodes (`tools/schema/examples/`).

## 6. Prioritized fixes

Tag key: **Allowed under the freeze** = new pages, new links to new pages, new sitemap entries, or new code that does not change existing page output. **Needs owner decision** = touches frozen pages, including any shared layout or component.

### Critical
1. **Remove AggregateRating, Review and Product markup from all templates.** This covers `serviceSchema` in `src/app/resources/[slug]/page.tsx`, the cc hub, the 5 cc issuers, `/loan-settlement/*`, root-article templates and the static state pages. Also remove the affiliated-brand reviews. This changes markup only, not visible content. **Needs owner decision (touches frozen pages).** Recommended as a priority exception given the YMYL manual-action risk.
2. **Escape `<` in every JSON-LD serialization, and stop feeding unmoderated user reviews into schema** (C4). Also check the Firestore rules for `blogs/*/reviews`. **Needs owner decision (touches frozen pages).** Treat it as a security exception and fix immediately.
3. **Remove placeholder telephones and the per-city LocalBusiness/geo/openingHours nodes** on the 22 static state pages, the cc hub and the root-article client components. Use `areaServed` on a Service that references the single Organization instead. **Needs owner decision (touches frozen pages).**
4. **Remove FAQPage from the cc issuer x state template** (about 1,548 pages), or render those Q&As visibly. **Needs owner decision (touches frozen pages).**

### High
5. **One Organization and one WebSite with stable `@id`, server-rendered in the root layout (example A).** Replace inline copies with `{"@id": ...}` references, align NAP to Gurugram / +91-8800226635, and set sameAs to the three footer profiles. **Needs owner decision (shared layout touches all pages).** For new pages, embedding example A from a shared constant is **allowed under the freeze**.
6. **Replace `new Date()` dates with stored per-page dates.** This covers 6 service-lender routes, the lsbb `[slug]` route, 4 loan-settlement pages and 10 other files, and gives cc pages real per-page dates. **Needs owner decision (touches frozen pages).**
7. **Switch JSON-LD from `next/script` to native `<script>`** in `Breadcrumbs.tsx`, `FAQWithSchema.tsx`, `src/app/page.tsx` and the page templates. This is mechanical and also removes the duplicate breadcrumbs. **Needs owner decision (shared components touch frozen pages).** For new pages, mandating a native `<script>` via `toJsonLd()` is **allowed under the freeze**.
8. **Author identity.**
   - The owner confirms whether "Rahul Verma" is a real, credentialed person.
   - If he is, create `/author/rahul-verma` with credentials and sameAs (new page: **allowed under the freeze**) and link the visible byline to it (a link from existing pages to a new page: **allowed under the freeze**).
   - Adding `url`/`@id` to the existing Article JSON-LD, or re-attributing those pages to a verified author, **needs owner decision**.
   - New pages must use a Person author with a profile URL: **allowed under the freeze**.

### Medium
9. **Add WebPage + BreadcrumbList** to service-lender, state, homepage, about, contact and index pages (example B), and change service-lender `Article` to `WebPage` + `Service`. **Needs owner decision.**
10. **Article images and logo.**
    - Add real images to the service-lender, lsbb and loan-settlement Articles. **Needs owner decision.**
    - Create a square logo asset of at least 112x112 (new file: **allowed under the freeze**) and point publisher/logo references to it. **Needs owner decision.**
    - Fix the `/logo.png` references. **Needs owner decision.**
11. **Drop or verify `priceRange`.** The homepage "INR1500-INR25000" is not shown anywhere and looks inconsistent with the fee model. **Needs owner decision.**
12. **New-page schema rules** (add to `AGENTS.md`/`mistakes.md` or a shared builder): examples A-E; no Review, AggregateRating, Product or city LocalBusiness; FAQPage only when visible; no HowTo; real dates; native script. **Allowed under the freeze.** This is the immediate, zero-risk action. Editing `AGENTS.md` is the owner's call.
13. **Add a CI/lint check** that fails builds on `XXXX` phones, `new Date()` inside date fields, `aggregateRating`, `app/ld+json` and `next/script` used with `application/ld+json`. **Allowed under the freeze** (tooling only), but confirm with the owner.

### Low
14. Fix `type="app/ld+json"` on /privacy-policy. **Needs owner decision (one line).**
15. Remove the twitter.com/credsettle sameAs and make the remaining sameAs lists match the footer profiles. **Needs owner decision.**
16. Optionally drop the SearchAction from WebSite; it does no harm. **Needs owner decision.**
17. Make Ashish Jhangra's jobTitle consistent ("Expert" vs "Professional"). **Needs owner decision.**

## Artifacts
Scripts and data are under `/private/tmp/claude-501/-Users-amalegalsolutions--claude-spares-spare-xPJPYw/7f87f4d4-849f-48d6-9464-8873c1f3b3d0/scratchpad/tools/schema/`:
- `extract2.py`: extracts server-HTML and RSC `next/script` JSON-LD into `blocks2.jsonl`
- `summary.py`, `orgvariants.py`, `articles.py`, `reviews.py`, `breadcrumbs.py`, `extra.py`
- `examples/*.json`: the validated JSON-LD examples above
