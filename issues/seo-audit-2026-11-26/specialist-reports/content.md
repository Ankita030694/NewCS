# Content Quality and E-E-A-T Audit: credsettle.com (2026-11-26)

Scope: YMYL finance (debt settlement for Indian borrowers). Evidence comes from the saved crawl (729 pages: 500 BFS plus 229 sitemap-sampled) and the 3,586-URL sitemap. Nothing was re-crawled. Quotes are kept to 15 words or fewer. Scripts are in `scratchpad/tools/content/`.

## Scores

| Score | Value | Basis |
|---|---|---|
| **Content Quality** | **31 / 100** | E-E-A-T 30 (35% weight), originality / scaled-content risk 15 (25%), accuracy and consistency 30 (15%), readability and structure 45 (10%), depth and coverage 60 (10%), freshness signals 45 (5%) |
| **AI Search Readiness** | **33 / 100** | direct-answer openings ~30, question headings 35, quotable dated and sourced facts 45, tables and lists 50, entity clarity (publisher and authors) 20, cross-page fact consistency 20, technical (llms.txt 404, spam-prone rating schema, FAQPage present) 35 |

### E-E-A-T breakdown

| Factor (weight) | Score | Why |
|---|---|---|
| Experience (20%) | 35 | **Plus:** a settlement-letter proof viewer on the homepage, some first-hand detail in resources (e.g. "Nagaraj" OTS walkthrough), and the Nov-2026 lane pages carry issuer-specific detail (HDFC MyCards, set-off clause, Federal co-brands). **Minus:** the state-page "case study" is the same story with the city swapped. Testimonials have no date or link, and review schema is not visible on the page. |
| Expertise (25%) | 30 | **Authors:** only one real author page (Ashish Jhangra). It shows no qualification, enrolment number or years of experience. One persona ("Rahul Verma, Lead Consumer Advocate") sits on every credit-card page and has no profile. A second schema author ("Rajesh Sharma") uses a Wikimedia default avatar and an author URL that is not in the sitemap. Reviewers are anonymous. **Accuracy:** meaning has been corrupted on at least 80 pages by automated word swaps (§3). An unsecured-loan template is applied to secured lenders. |
| Authoritativeness (25%) | 25 | The only external proof is a YourStory company profile plus social links. There are no named advocates, no press citations and no memberships. |
| Trustworthiness (30%) | 30 | **Plus:** a full Gurugram address, phone, email, office hours, privacy and T&C pages, calculators marked "not guaranteed", and CIBIL-impact disclosures on most templates. **Minus:** no legal entity or registration ID is named. Ratings conflict (24 AggregateRating variants). Company stats conflict. "No upfront fees" claims contradict the T&C. Case studies are fabricated-looking. Some headlines are misleading. |
| **Weighted E-E-A-T** | **30** | 0.2·35 + 0.25·30 + 0.25·25 + 0.3·30 ≈ 30 |

---

## 1. E-E-A-T findings

### 1.1 Who is behind the site

**About (/about), 714 words.**
- No named founder, team member or advocate.
- No legal entity name, CIN/LLPIN, GSTIN or Bar Council registration.
- "The CredSettle Story" timeline begins at 2021: "CredSettle was founded to give borrowers a dignified path". The footer on every page says "© 2020 CredSettle".
- Claims "Our experienced advocates negotiate directly with lenders to secure large waivers" but names none of them.
- Shows "4.6/5 Excellent | 2000+ reviews" four times, with no source link.

**Contact (/contact): good.**
- Address: 4th Floor, 2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram.
- +91 8800226635, info@credsettle.com, office hours and WhatsApp.
- The body promises to "reduce your principal outstanding amount by up to 50%".

**Terms (/terms-and-conditions) and Privacy (/privacy-policy).**
- Neither names an operating legal entity, a grievance officer or a data-protection contact. Both just say "CredSettle".
- Per the owner's internal notes, CredSettle is a lead-gen brand of a Gurugram law firm. The site never says this, so users cannot tell who they are contracting with or who the advocates are.
- One page's schema uses `legalName: "CredSettle Legal Services"`, which appears nowhere else.

**Homepage.**
- "India's Most Trusted Loan Settlement Company" (H1). "cut your debt by up to 70%". "Save 50% or More".
- Three testimonials (Ram Badhoriya, Prabhdeep Singh., Venugopal K.) with no date, no lender and no link to verify.
- The only external proof is `yourstory.com/companies/credsettle`, which is a company directory listing, not editorial coverage.

### 1.2 Authors, reviewers and bylines

| Template (crawled) | Visible author | Reviewer | Visible date | Schema author |
|---|---|---|---|---|
| Resources (40) | "Ashish Jhangra" + "Reviewed by CredSettle Team" (40/40) | team only | 40/40 (DD-MM-YYYY, consistent with schema) | Ashish Jhangra |
| Root articles (98) | named on 51 | 5/98 contain "reviewed by" text; all are anonymous ("Reviewed by High Court Banking Litigation Advocates & RBI Compliance Specialists", "CredSettle Panel") | 20/98 | 44 Ashish Jhangra; others none or "CredSettle Legal Team" |
| cc issuer (43) and issuer×state (60 crawled, ~1,591 total) | "Rahul Verma, Lead Consumer Advocate", e.g. "Rahul guides card settlement cases across Maharashtra." (only the state changes) | none | none | Rahul Verma, `default-user.svg` image, no URL; datePublished 2026-07-07 on all |
| Services lender (362) | Ashish on 122; 240 have Organization "CredSettle" as author | none | none | **datePublished = dateModified = build time** (e.g. `2026-11-24T07:03:44.882Z`), different on every page: fake freshness |
| Services state (36) | none | none | none | no schema |
| /cheque-bounce-lawyer-in-delhi | none visible | none | none | "Rajesh Sharma", Wikimedia `Default_pfp.jpg`, `/author/rajeshsharma` (not in sitemap) |

**Author page /author/ashish-jhangra.**
- Bio: "I work as a legal and debt resolution expert".
- No law degree, enrolment number, years in practice or case history. No Person/ProfilePage schema.
- Labelled sitewide (177+ pages) as "Verified Legal & Debt Resolution Expert". This is self-verification.

**Unnamed credentials.**
- "Bar Council Registered Advocates" appears as a tick-mark claim on 46+ pages (all /loan-settlement-by-bank/ pages) with no names.
- Per the Sept 2025 QRG, unsupported claims of expertise on YMYL pages count against Trust.

### 1.3 Sources and dates for legal and regulatory claims

**Strong examples (keep as models).**
- **/rbi-100-per-day-compensation-for-delayed-cibil-report-update:**
  - circular RBI/2023-24/72, issued 26 Oct 2023, effective 26 Apr 2024
  - 21-day lender / 9-day bureau split, in a table
  - links to cms.rbi.org.in
- **/verify-loan-settlement-letter:** links to rbi.org.in, indiacode.nic.in, cibil.com and financialservices.gov.in.
- **Nov-2026 lane pages** (/psu-bank-ots-deadline-march-31-2027, /union-npa-samadhan-scheme-2027, /kreditbee-recovery-agent-home-visit) use dated "Status Check (11 November 2026)" lines and state uncertainty honestly. Example: "Union Bank of India has not yet put out a public memo".

**Weak or inconsistent examples.**
- The same ₹100/day rule is attributed to three different reference numbers:
  - `RBI/2023-24/72` on /rbi-100-per-day-…
  - `DoR.FIN.REC.48/20.16.003/2023-24` on /resources/settled-to-closed-…
  - `CO.CEPD.PRS.No.S673/13-01-018/2023-2024` on /resources/cibil-experian-…

  Reconcile these against rbi.org.in.
- **"RBI July 2026 Fair Practices Code on Recovery Agents"** appears on all 46 crawled /loan-settlement-by-bank/ pages with no circular number. /rbi-july-2026-recovery-guidelines (3,962 words) cites no circular and links only LinkedIn and WhatsApp.
- **/will-banks-blacklist-you-after-loan-settlement** cites "RBI Guidelines 2025" with no reference. It also says "The RBI has mandated that banks MUST issue a 'No Dues Certificate'…". That generalises the 2023 property-document-return circular.
- **/personal-loan-settlement-tax-implications** has the Supreme Court case name missing mid-sentence ("including )").
- **Visible-date coverage** is 20/98 on root articles and 0 on all programmatic templates.

### 1.4 Fee and CIBIL disclosures

**Fees: contradictory and never quantified.**
- "CredSettle charges fees only on successful settlement, not upfront." appears on all 40 resources.
- "no upfront" appears on 91 crawled pages and "No Hidden Fees" on 51.
- The T&C say: "We begin execution only after receiving your explicit consent and the agreed payment." They add: "Fees already paid become non-refundable once work begins."
- No page gives a fee percentage. 121 service-lender pages fold fees into the promise: "settle … for up to 50% … including our legal fees".
- The owner's internal notes describe a retainer plan and a 2% sign-up fee plan. If those are live, "no upfront fees" is misleading. This is a consumer-protection risk (CCPA misleading-ad guidelines), not just SEO. **Verify with the owner.**

**CIBIL harm: mostly disclosed, but missing where it matters most.**
- Mentioned on cc issuer 43/43, by-bank 46/46, services lender 328/362, resources 34/40 and root 61/105.
- **Missing on all 60 issuer×state pages and 35/36 services state pages.** These are the doorway pages most likely to be a user's first contact.
- One headline contradicts its own body: /resources/settle-loan-india-without-hurting-credit-score, H1 "Best Ways to Settle Loans Without Hurting Credit Scores".

---

## 2. Unverifiable or risky claims (examples with URLs)

### 2.1 Conflicting company stats (none sourced)

| Claim | Where |
|---|---|
| "10+ Years LEGAL EXPERIENCE 15,000+ CASES HANDLED ₹500Cr+ DEBT SETTLED" | 28 root articles, e.g. /two-wheeler-bike-loan-settlement, /rbi-100-per-day-… |
| Founded 2021 (About) / © 2020 (footer) | /about, all pages |
| "5,000+ Helped" | all 40 resources |
| "10,000+ Indians to settle bank defaults" | all 46 by-bank pages |
| "5,000+ Successful Debt Settlements", "₹150+ Crores Debt Resolved" | /idfc-first-bank-loan-settlement |
| "Over ₹50 Crore Legal Debt Settled" | /how-to-settle-loan |
| "8,500+ clients and vehicle owners" | /services/car-loan-settlement |
| "5,500+ Successful App Loan Settlements", "4.8/5 Client Satisfaction" | /services/app-loan-settlement |

### 2.2 Ratings and reviews

- **Visible ratings conflict with each other:**
  - "4.6/5 · 2000+ reviews" on home, /about and /services/app-loan-settlement
  - "4.7/5 · 3,000+ Reviews" on 28 root articles
  - "4.9/5 Google Rating" on /how-to-settle-loan
- **24 different AggregateRating values in JSON-LD** across 79 crawled pages. Review counts run from 3 to 12,500. Examples:
  - 4.8/12,500 on /loan-settlement
  - 4.9/6,180 (7 pages)
  - 4.8/5,420 (5)
  - 4.8/1,840 on /credit-card-settlement/hdfc and 4 other issuer pages
  - 5.0/5 (25 resources)
  - 5.0/3 (14 resources)
  - 4.9/210 on /loan-settlement/bank-of-baroda
- **Review schema reused and hidden:** the same three Review objects (Vikram Mehta, Pooja Verma, Anand Kulkarni) sit on 14 resources pages and **are not visible on the page**. This is self-serving, invisible review markup. It is a spammy-structured-data manual-action risk and a QRG "deceptive" signal.
- **Resources stat widget:** the server HTML on all 40 resources renders "0.0 /5 Client Rating ₹ 0 Cr+ Debt Settled 0 + Happy Clients" until JavaScript animates it.

### 2.3 Waiver and outcome promises (inconsistent ranges, presented as typical)

**Ranges.**
- Home: "cut your debt by up to 70%".
- Every by-bank page: "40% to 65% discount on total dues", identical for SBI, mPokket, Muthoot Finance and Snapmint.
- Issuer pages: "waivers of 50% to 75%".
- Services lender: 30–60% / 30–70%.
- /resources/hdfc-bank-credit-card-settlement-nodal-desk-and-waiver-slabs: "58% to 72% OTS waivers".
- /credit-card-settlement-process: "up to 80% waivers".

**Speed and outcome promises.**
- "stop harassment immediately" (/about).
- "We take over all recovery calls so you get instant relief." (issuer×state).
- "includes stopping recovery calls in 93% of cases within 48 hours." (services state pages; 12 crawled pages carry it).
- "If you face real financial hardship, HDFC Bank will agree to a reduced payment." (issuer×state; presented as certain).
- "the case is immediately dismissed" (/loan-written-off-vs-settled-cibil-impact; on suing after settlement).

**Insider-knowledge claims with zero lender detail.**
- "Our banking lawyers know KreditBee's exact settlement rules."
- "If you owe ₹50 lakhs, we aim to settle … for ₹25 lakhs" (/services/business-loan-settlement/banks/kreditbee, for a lender that does not offer business loans of that size).

### 2.4 Fabricated-looking case studies

- **Services state pages:** an identical story with only the city swapped. Assam: Guwahati/Silchar. Bihar: Patna/Gaya.
  - "She had borrowed ₹20,000 for medical expenses."
  - The balance grows to ₹85,000 and is settled for ₹28,000.
  - The cause is a slot-fill: "When predatory lending targeting students reduced her income" (Assam) vs "When extreme recovery harassment reduced her income" (Bihar).
  - Found on 12 crawled pages; the template implies all 216 state pages.
- **Self-ranking listicles:** "best company" pages rank CredSettle, e.g. /top-rated-loan-settlement-agencies-in-india-for-reducing-credit-card-debt: "CredSettle has quickly risen to become one of the most trusted names". This is a self-serving review pattern.

### 2.5 Self-contradictions

**Secured loans.**
- "CredSettle does not handle secured loans (home loans, car loans, gold loans)." appears on 40 resources.
- Yet the site runs /services/car-loan-settlement (116 lender pages plus 36 states), /best-lawyer-for-home-loan-settlement, /home-loan-default-sarfaesi-act and gold-loan pages.

**Unsecured template on secured lenders.**
- The by-bank template applies "If you default, the bank cannot seize your house or your car" to secured lenders:
  - /loan-settlement-by-bank/muthoot-finance (gold loans)
  - /loan-settlement-by-bank/aadhar-housing-finance (home loans)
  - /loan-settlement-by-bank/au-small-fin-bank-ltd
- It appears on all 46 by-bank pages.

**False word count.** "This comprehensive, 5000+ word guide…" appears on 49 pages of about 3,776 words.

**Products that don't exist.**
- KreditBee has /services/car-loan-settlement/banks/kreditbee and /services/business-loan-settlement/banks/kreditbee. Similar combinations exist for CASHe, Home Credit and MoneyTap.
- /credit-card-settlement/finova-capital: Finova Capital is an MSME lender, not a known card issuer. Verify the other small-bank "issuers" too.

---

## 3. Systemic text corruption from the "readability" process (new root cause)

**Root cause.** `mistakes.md` (Mistakes 16, 34 and 51) and `improveTextReadability` require:
- global word swaps ("`settlement` → `closure`, `recovery` → `claims`, `harassment` → `threats`, `financial` → `money`, `borrowers` → `clients`…")
- splitting sentences on commas, to push Flesch ≥ 50 and ASL ≤ 10.

The result is legally wrong and visibly machine-mangled text on high-value pages.

| Artifact | Crawled pages | Example (URL: quote) |
|---|---|---|
| "main sum" (= principal) | 49 | /services/credit-card-settlement: "discount to the core purchase main sum" |
| "One-Time closure (OTS)" | 39 | /services/credit-card-settlement: "One-Time closure (OTS) or one-time closure. is a by law binding" |
| "claims agent(s)" (= recovery agents) | 13 | /can-bank-call-relatives-for-loan-recovery: "Are claims agents harassing your kin. Scraping contacts." |
| Ranges broken into sentences | 16 | /services/credit-card-settlement H1 area: "Escape the 42%. 52% growing finance charge trap." |
| Statute names and dates broken | 45 ("Act. 1961") / 21 ("June 8. 2023") | /services/personal-loan-settlement: "Pursuant to the lawyer Act of 1961" (Advocates Act) |
| Doubled words | 35 | /services/credit-card-settlement: "Defend legal legal notices under Section 25 PSSA." |
| Escaped entities shown as text | 31 | /get-noc-after-loan-settlement: "Your closure isn&apos. t complete until you receive an NOC." |
| Raw markdown `**` | 17 | /will-banks-blacklist-you-after-loan-settlement: "**CIBIL Status.**" |
| Meaning destroyed | n/a | /personal-loan-settlement-tax-implications: "1. own Loans for own Use (Capital Receipt. Non-Taxable)"; /what-happens-after-missing-personal-loan-emi: "Millions of Indian experts rely on own loans" |

**Scale.**
- At least 80 of 729 crawled pages (11%) carry one or more artifacts: 37 root, 34 of 40 resources, the cc hub, and 6 of the 8 main /services/ pages.
- In source, 142 files contain "main sum", 68 "One-Time closure", 57 "by law binding" and 76 "claims agent".

**Why it matters.**
- Google's spam policies list text made with "automated synonymizing, paraphrasing, or obfuscation" under auto-generated / scaled content.
- It makes legal facts wrong on YMYL pages (Expertise and Trust).
- AI systems will not quote garbled passages.
- Flesch is a Screaming Frog warning, not a Google ranking factor.

---

## 4. Thin and scaled content (doorway assessment)

Method: sentence-level diff after normalising issuer, lender and state names (`diffpages.py`).

| Template (sitemap count) | Pages compared | Identical after name swap | What actually changes | Verdict |
|---|---|---|---|---|
| cc issuer×state (1,548) | hdfc/maharashtra vs hdfc/karnataka | **97%** of words (401/415) | cyber cell name, High Court name, DRT city (e.g. "Mumbai, Pune, and Nagpur" vs "Bengaluru") | Doorway |
| | axis/karnataka vs dcb-bank/karnataka | **100%** (414/414) | nothing | Doorway |
| | axis/sikkim vs axis/lakshadweep; sbi/manipur vs pnb/lakshadweep | 97% | same three slots | Doorway |
| cc issuer (43) | hdfc vs icici; bandhan vs dcb; finova-capital vs nainital-bank | **100%** each | issuer name only | Doorway / thin (5 pages under 800 words) |
| loan-settlement-by-bank (187) | sbi vs mpokket; muthoot-finance vs snapmint | **100%** (3,725/3,726) | the grievance email only | Doorway, and factually wrong for secured lenders and BNPL |
| services state (216) | app-loan assam vs bihar | 90% | city names, one "local problem" slot, language name ("threatening messages in Punjabi") | Doorway with fake case study |
| | karnataka vs maharashtra (older variant) | 76% | rewritten intro | Thin |
| services lender (637) | car-loan hdfc vs kreditbee; app-loan hdfc vs kreditbee; business sbi vs moneyview | 63% / 40% / 71% | paraphrased sentences, no lender facts | Scaled, paraphrased; includes impossible lender×product combinations |

**Assessment.**
- 2,631 of 3,586 sitemap URLs (73%) are programmatic templates.
- 1,778 (50% of the sitemap) are near-exact name swaps with no issuer- or state-specific substance.
- The only "local" facts are which High Court and cyber cell exist. These are true of any borrower and do not change the advice.
- This fits Google's doorway-page definition (many similar pages each targeting a region or term and funnelling to one form) and scaled-content abuse (many pages, little value).
- The risk is site-level: the helpful-content signals inside core ranking can drag down the good pages too.

**Counterpoint: newer lane pages are genuinely differentiated.**
- /hdfc- vs /sbi-credit-card-blocked-due-to-non-payment share only 12% of words.
- /cashe- vs /ring-loan-settlement share 17%.
- /federal-bank-…-percentage vs /rbl-…-letter-format share 21%.
- The resources long-reads are 4% similar to each other (5-gram Jaccard), with about 226 words of shared boilerplate.

**Word-count floors (coverage floors, not targets).**
- 56/60 issuer×state pages fall under 500 words.
- 14/137 crawled articles fall under 1,500 words, e.g. /personal-loan-settlement-process (390) and /personal-loan-settlement-tax-implications (590).
- Homepage (1,759) and services pages are well above their floors.

---

## 5. Readability for stressed Indian borrowers

| Template (sample ≤25) | Median words | Avg sentence length (words) | Sentences >25 words | Flesch | Grade | H2s | Question H2s | Tables |
|---|---|---|---|---|---|---|---|---|
| Root articles | 2,804 | 17.4 | 15% | 50 | 10.2 | 12 | 1 | 0 |
| Resources | 3,619 | 10.4 | 2% | 65 | 6.7 | **1** | 0 | 1 |
| Main /services/ pages | 9,116 | 10.4 | 2% | 48 | 9.2 | 34 | 9 | 3 |
| By-bank | 3,824 | 17.9 | 13% | 47 | 11.1 | **1** | 0 | 1 |
| Services lender | 1,191 | 10.5 | 0% | 72 | 5.8 | **1** | 1 | 0 |
| cc issuer×state | 467 | 9.9 | 0% | 74 | 5.4 | **1** | 0 | 0 |

**Sentence length and ease.**
- Template pages read easily, but they are empty.
- The "short" sentences on resources and main services are partly artificial: commas were turned into full stops, which leaves fragments ("Rates. penal charges.").
- Real readability for a stressed reader is worse than Flesch suggests.

**Jargon placed up front.**
- /can-i-pay-settlement-amount-in-emi opens with "Protected under RBI Fair Practices Code. PSSA §25, NI Act §138 & CICRA rules."
- /psu-bank-ots-deadline-march-31-2027 lists "SARB, SASTRA, ROSARB, ARB, ARM, and SAM branches" with no glossary.

**Openings.**
- Many articles start with emotional narrative ("It is a feeling many salaried individuals…", "Imagine applying for your dream home loan…") or generic AI phrasing ("In the modern financial landscape…", "In the realm of", "delve"; 14 pages).
- Empathy is fine, but the answer arrives 150 or more words later.

**Heading structure.**
- 551 template pages have exactly one H2, with sections demoted to H3. This follows the `mistakes.md` "strictly 1 `<h2>`" rule, which chases a low-priority Screaming Frog warning.
- 14 resources share the same single H2, "Core Mechanics & RBI Settlement Framework in 2026".

**Language.**
- All 729 crawled pages are `lang="en"`, with 0 Devanagari characters and no hreflang.
- The sitemap has 9 Hinglish slugs (e.g. /credit-card-settlement-kaise-hota-hai, /ots-kya-hota-hai-full-form, /bank-recovery-agent-harassment-rules-in-hindi). They were not in the crawl sample, so their language is unverified.
- The core audience (Hindi-belt salaried borrowers, app-loan users) would benefit from real Hindi versions of the top lane topics. Proper `lang="hi"` and a plain-language summary box would serve them better than Flesch-gaming.
- Stale years: "2025" in the title or H1 of 6 crawled pages, e.g. /best-lawyer-for-home-loan-settlement, /what-percentage-do-banks-accept-in-loan-settlement, and "In 2025, the reality…" on a 2026 page.

---

## 6. AI citation readiness

**Site-level signals.**
- llms.txt and llms-full.txt return 404.
- FAQPage schema exists on cc, resources and many root pages. That is useful.
- Organization data is inconsistent: three different `sameAs` sets, a Facebook URL that doesn't match the footer, and the one-off legalName.
- The rating schema is spam-prone (§2.2).

**Direct answers.**
- Of 15 sampled article openings, only 3–4 give a 40–60-word direct answer under the H1:
  - /resources/can-recovery-agents-visit-home-on-sunday-or-call-neighbours-rbi
  - /resources/personal-loan-settlement-tax-implications-section-28iv-and-194r
  - /rbi-100-per-day-…
  - /resources/settled-to-closed-…
- Question-style H2s: median 1 of 12 on root articles.

**Passage scores** (0–10; criteria: direct answer, self-contained, specific/dated/sourced, consistent with the rest of the site):

| Passage | Score | Notes |
|---|---|---|
| /rbi-100-per-day-…: "Executive Brief" bullets (₹100/day, 21+9 days, effective April 2024, circular no.) | 8 | Best on site. Loses points only because two other pages cite a different circular. |
| /resources/can-recovery-agents-visit-home-on-sunday-…: first paragraph (8 AM–7 PM incl. Sundays, neighbours disclosure) | 7 | Direct and self-contained. Add the circular number inline. |
| /psu-bank-ots-deadline-march-31-2027: "Status Check (11 November 2026)…" | 7 | Dated and honest about uncertainty. Too jargon-heavy for a quote. |
| /loan-written-off-vs-settled-cibil-impact: comparison table | 4 | Answer is buried after three sections. Table cells are missing. "75 to 100 points" drop is unsourced. |
| /do-banks-file-fir-for-credit-card-dues: opening | 3 | 150+ words of generic preamble before the answer. |
| /credit-card-settlement/hdfc/maharashtra: OTS paragraph | 1 | Generic, unsourced promise ("waive up to 50% or more"). |
| /personal-loan-settlement-tax-implications: "own Loans for own Use…" | 1 | Garbled. Contradicts the "zero income tax liability" stance on /resources/…-section-28iv-and-194r. |

**Facts that conflict across pages lower the chance of being cited.**
- Waiver ranges: 30–80%.
- Circular references for the same rule.
- Tax stance: "consult a CA" vs "zero income tax liability".
- Whether secured loans are handled.

---

## 7. Topical overlap and cannibalisation

Method: topic regexes over all 703 root-level and 194 /resources/ sitemap slugs, plus title/H1 token similarity on the crawled pages. Counts are same-intent URLs.

| # | Query intent | Count | Examples |
|---|---|---|---|
| 1 | **HDFC credit-card settlement** | **41** (5 + 36 state) | /credit-card-settlement/hdfc, /credit-card-settlement-hdfc, /services/credit-card-settlement/banks/hdfc, /resources/hdfc-bank-credit-card-settlement-nodal-desk-and-waiver-slabs, /resources/hdfc-credit-card-settlement-procedure-and-recourse-against-recovery-agents, /credit-card-settlement/hdfc/{36 states}. SBI has the same pattern (sbi-credit-card-settlement-email-id-and-number, resources/sbi-card-…-2026, /credit-card-settlement/sbi …). **This is CredSettle's #1 lane, and it is self-cannibalised.** |
| 2 | Stop recovery-agent harassment / know your rights | ~18 | /how-to-stop-recovery-agent-harassment, /stop-recovery-agent-harassment, /how-to-handle-recovery-agent-harrasment, /what-are-my-rights-when-dealing-with-loan-recovery-agents, /resources/stop-bank-recovery-agents-harassment-legal-rights, /resources/dealing-with-loan-recovery-agents-know-your-rights-and-options, /resources/dealing-with-recovery-agents-know-your-rights-and-how-to-handle-them, /resources/how-to-handle-loan-recovery-agents-in-india-know-your-rights-legal-protection, /resources/understanding-recovery-agents-and-your-rights-as-a-borrower, /services/anti-harassment (wider harassment family: 75 URLs) |
| 3 | "Best / top debt settlement company in India" | ~15 | /best-companies-for-debt-settlement-services-in-india, /best-debt-settlement-companies-in-india-for-loan-and-credit-card-debt-relief, /which-companies-offer-loan-settlement-services-in-india, /1-loan-settlement-services-in-india, /top-rated-loan-settlement-agencies-in-india-for-reducing-credit-card-debt, /what-is-the-best-loan-settlement-company-in-india-for-high-credit-card-balances, /personal-loan-settlement-company, /resources/loan-settlement-company-india |
| 4 | KreditBee (any intent) | 13 | /kreditbee-recovery-agent-harassment, /kreditbee-recovery-agent-home-visit, /will-kreditbee-agents-come-home (the last two are the same query and both are new lane pages), /loan-settlement-by-bank/kreditbee, /loan-settlement-by-bank/krazybee, /loan-settlement/krazybee, 6 × /services/*/banks/kreditbee |
| 5 | Improve CIBIL after settlement | 9 | /how-to-improve-cibil-score-after-loan-settlement, /improve-cibil-after-loan-settlement, /resources/cibil-score-after-loan-settlement-how-to-improve-it, /resources/improve-your-credit-score-after-loan-settlement, /resources/rebuilding-your-credit-score-after-debt-settlement-with-credsettle, /resources/smart-strategies-to-rebuild-your-credit-score-after-loan-settlement, /resources/rbi-cooling-off-period-…-750 |
| 6 | Credit-card settlement process / how-to | ~8 | /credit-card-settlement-process, /how-to-settle-a-credit-card-debt, /resources/how-to-negotiate-a-credit-card-settlement-in-india-a-step-by-step-guide, /resources/the-smart-way-to-settle-your-credit-card-dues-legally, /resources/credit-card-settlement-in-india-everything-you-need-to-know-in-2025, /credit-card-settlement, /services/credit-card-settlement |
| 7 | Does settlement hurt CIBIL? | 7 | /does-loan-settlement-affect-cibil, /impact-of-loan-settlement-on-cibil-score, /personal-loan-settlement-cibil-impact, /how-does-settling-a-loan-impact-my-cibil-credit-score, /resources/what-is-loan-settlement-and-how-does-it-affect-your-credit-score, /is-cibil-ruined-forever-after-settlement, /will-banks-blacklist-you-after-loan-settlement |
| 8 | Jail / FIR for default | 7 | /can-i-go-to-jail-for-credit-card-debt, /can-i-go-to-jail-for-loan-default-in-india, /jail-for-not-paying-personal-loan, /police-case-for-credit-card-debt, /do-banks-file-fir-for-credit-card-dues, /bank-filed-fir-for-loan-default |
| 9 | Settlement letter format / verification | 4 + 3 | /settlement-of-loan-letter, /personal-loan-settlement-letter-format, /loan-settlement-letter-format-noc-format, /resources/loan-settlement-letter; plus /verify-loan-settlement-letter, /how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams, /resources/fake-vs-genuine-credit-card-settlement-letter-verification-guide |
| 10 | Settled → Closed | 4 | /can-i-convert-settled-to-closed-later, /convert-settled-status-to-closed, /remove-settled-status-from-cibil, /resources/settled-to-closed-cibil-status-upgrade-after-personal-loan-ots |
| 11 | "Best lawyer for …" (AMA's lane) | 41 | 5 MSME-loan lawyer pages, 6 loan-agreement lawyer pages, 5 DRT lawyer pages |
| 12 | NRI default | 4 | /nri-loan-default-india-settlement-from-abroad, /nri-personal-loan-settlement-india, /nri-credit-card-debt-settlement, /resources/nri-credit-card-default-in-india-remote-ots-and-nro-protection |
| 13 | Tax on settlement | 2 (contradictory) | /personal-loan-settlement-tax-implications (590 words) vs /resources/personal-loan-settlement-tax-implications-section-28iv-and-194r |
| 14 | New lane page vs existing resource | 2 | /home-credit-loan-settlement (Nov 2026) vs /resources/home-credit-loan-settlement-in-india-a-complete-legal-guide |

---

## 8. Prioritised fixes

Tags:
- **[allowed]**: allowed under the freeze (new pages, links from existing pages to new pages, new sitemap entries, process rules for future pages).
- **[owner]**: needs owner decision, because it touches frozen pages.

### Critical
1. **Stop the synonym-swap / comma-split "readability" process for all future pages.** [allowed]
   - Amend `mistakes.md` Mistakes 16, 34 and 51. Drop the vocabulary map and the ASL ≤ 10 / Flesch ≥ 50 gates for legal and financial copy.
   - Keep plain-English writing done by a human editor.
   - Add a pre-publish grep check for "main sum", "One-Time closure", "claims agent", "by law", `\d+%\. \d+%`, `Act\. \d{4}`, `&amp;\.` and `**`.
2. **Repair the ~80+ corrupted existing pages** (start with /services/credit-card-settlement, /services/personal-loan-settlement, /services/business-loan-settlement, /personal-loan-settlement-tax-implications and the 34 resources). [owner]
   - Recommend treating this as a bug fix (restoring the original wording), not a rewrite.
3. **Remove or replace the conflicting rating and review schema and the unsourced stats.** [owner]
   - Scope: 24 AggregateRating variants, invisible Review objects on 14 resources, "10+ Years / 15,000+ / ₹500Cr+", and "4.7/5 3,000+".
   - Pick one sourced proof figure (e.g. a link to the live Google Business Profile rating) and use it everywhere.
   - New pages: no rating schema (already a rule), and link to the proof source instead. [allowed]
4. **Fee transparency.** [allowed for the new page and links; owner for the conflicting text on existing pages]
   - Publish a new "/how-we-charge" page: fee basis, when it is payable, refund terms, and that it matches the signed agreement.
   - Link it from footer and CTAs.
   - Then reconcile "no upfront fees" (91 pages) with the T&C. Run past counsel for CCPA misleading-ad risk.
5. **Doorway and scaled templates.**
   - Stop generating more name-swap pages. [allowed]
   - Decide on consolidating or noindexing the 1,778 name-swap pages (issuer×state, issuer and by-bank) and the impossible lender×product combinations. [owner]
   - Link each issuer page to the differentiated issuer×problem lane pages. [allowed]

### High
6. **Publish who is behind CredSettle.** [allowed]
   - New pages: /team (named advocates with Bar Council enrolment numbers and photos), /editorial-policy (who writes, who reviews, how facts are checked and dated) and /legal-entity (operating entity, registration IDs, grievance or DPDP contact).
   - Link them from existing pages. [allowed]
   - Updating /about, the T&C and the privacy text needs [owner].
7. **Real authors and reviewers on every new page.** [allowed]
   - Visible byline linked to an author page with credentials, plus a named reviewer and a "Reviewed on" date.
   - Replacing "Rahul Verma", "Rajesh Sharma", "Senior Banking Law Advocates" and "Bar Council Registered Advocates" claims on existing pages needs [owner].
8. **Stop fake freshness.** [owner for the existing template]
   - The 362 services lender pages emit build-time `datePublished/dateModified`.
   - New pages: use a hard-coded publish date and change dateModified only on real edits. [allowed]
9. **Remove the templated "case study" and the "93% within 48 hours" claim** from the services state template, and add a CIBIL-impact line to the issuer×state and state templates. [owner]
10. **Resolve the contradictions.** [owner]
    - "does not handle secured loans" vs the car, home and gold pages.
    - Unsecured-loan text on Muthoot, Aadhar Housing and AU.
    - "5000+ word guide" on 3,776-word pages.
    - "Without Hurting Credit Score" headline.
11. **Intent map before any new page.** [allowed]
    - Check the clusters in §7. Example: don't add a third KreditBee home-visit page; the HDFC card page set already has 41 URLs.
    - Make the new lane page the destination and point existing related pages to it with links. [allowed]
    - Redirects or merges need [owner].

### Medium
12. **AI-citation format for new pages.** [allowed]
    - A 40–60-word direct answer under the H1.
    - Question H2s, one per sub-intent.
    - A "Status check (date)" line.
    - The circular or notification number with an rbi.org.in link inline.
    - One comparison table.
    - Self-contained FAQs.
    - A "What this costs you: CIBIL 'Settled' status" box.
13. **Publish /llms.txt** listing the lane hubs, the fee page, the team page and the best sourced explainers. [allowed (new file)]
14. **Keep a central facts register** (circular numbers, effective dates, thresholds such as the ₹20 L DRT limit and the ₹100/day 21+9 rule), and use it for new pages. [allowed] Fixing the three conflicting ₹100/day citations on existing pages needs [owner].
15. **Hindi versions of the top 5–10 lane topics** (issuer × problem, PSU OTS trackers) with `lang="hi"`, written by a human, plus a glossary of jargon (SMA/NPA/OTS/ARB/SAM branch). [allowed] Audit the 9 existing Hinglish-slug pages. [owner]
16. **Drop the "exactly one H2" rule** for new pages. Use one H2 per main section. [allowed]
17. **Fix the resources stat widget** that SSRs "0.0/5, ₹0 Cr+, 0+ Happy Clients". [owner]

### Low
18. **Stale "2025" tokens** in titles and H1s (6 crawled pages), and the "In 2025" body copy. [owner]
19. **Organization consistency:** footer © 2020 vs founded 2021, three `sameAs` sets, the one-off `legalName`. Use a single Organization `@id` on new pages. [allowed]; existing pages [owner]
20. **Lane hygiene:** the 41 "best lawyer for …" pages and the Lok Adalat / jail / FIR pages fall in AMA's lane. Do not expand them. [allowed]; consolidation [owner]

---

### What's working (keep and copy)

- **Contact:** a complete, consistent address, phone and hours block.
- **Strong pages:** /rbi-100-per-day-compensation-for-delayed-cibil-report-update and /verify-loan-settlement-letter are well-sourced, structured explainers.
- **Nov-2026 lane pages** (issuer blocked-card, issuer %, PSU OTS trackers, app-lender pages):
  - unique text (12–21% overlap)
  - dated status checks
  - honest uncertainty
  - self-help advice for small debts under ₹3 L. This is a strong helpfulness signal.
- **Calculators and planners** label figures as "not guaranteed" and mention the "Settled" CIBIL mark.

### Method and limits

- 729 crawled pages. Root articles are a 105 of ~666 sample, resources 40 of 194, issuer×state 60 of 1,548, services lender 362 of 637, by-bank 46 of 187. Cluster analysis used all sitemap slugs.
- Similarity used a sentence-level diff after normalising entity names, plus 5-gram Jaccard.
- Readability uses Flesch formulas on `<p>` prose only.
- Regulatory facts were checked only for internal consistency and cited references. Circulars dated after mid-2026 (e.g. "RBI 1 January 2027" agent rules) could not be checked independently. Each one should carry its circular number and link.
- Fee details from the owner's internal notes are unconfirmed and must be checked before publishing.
