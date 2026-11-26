# Sitemap audit: https://www.credsettle.com (2026-11-26)

Scope: `https://www.credsettle.com/sitemap.xml` (the only sitemap referenced in robots.txt), live status of every listed URL, canonical/noindex sample, coverage against the 729-page crawl and the repo, and quality gates for location pages.
Project constraint: existing pages are frozen (no rewrites, redirects, noindex or pruning). Each fix below is tagged **allowed under the freeze** or **needs owner decision (touches frozen pages)**.

## Sitemap score: 50 / 100

| Area | Weight | Score | Reasoning |
|---|---:|---:|---|
| Format and protocol | 15 | 10 | Well-formed UTF-8 `<urlset>` with the right namespace, 3,614 entries and 749 KB (far below 50,000 URLs / 50 MB), served 200 `application/xml` gzip, declared in robots.txt. Points lost for 28 duplicate `<loc>`s and for 3,403 entries that fail the official XSD because of element order. |
| URL status integrity | 20 | 17 | 3,580 of 3,586 unique URLs (99.83%) return 200. 6 do not (2 × 404, 4 × 308). In the 150-URL live sample: 150/150 have an exact self-canonical and 0 have noindex. 0 URLs are blocked by robots.txt. |
| lastmod accuracy | 15 | 3 | Two hardcoded constants cover 99.8% of entries. 126 pages created between 2026-11-11 and 2026-11-24 are stamped 2026-11-09, a date before they existed. Entries also contradict on-page `dateModified` in both directions. |
| Coverage | 15 | 12 | All 127 pages created since 2026-11-10 are listed. The 55 crawled-but-unlisted URLs are mostly permutations that should *not* be added. Two 404 DNH slugs are listed while their 200 equivalents are not. |
| Quality of listed URLs (location gate) | 25 | 5 | 1,764 location pages (1,548 issuer×state + 216 service×state), plus 824 lender-swap permutations: 67% of the sitemap is templated. None of the sampled pages reach 60% unique content. This is a HARD STOP under the skill's rule. |
| Architecture and maintainability | 10 | 3 | One 5,839-line hand-maintained route handler, no sitemap index, so Search Console cannot report indexing per template. Hand-appended XML literals cause the duplicates. priority/changefreq add noise. |

---

## 1. Validation report (pass/fail per check)

| Check | Result | Severity | Detail |
|---|---|---|---|
| XML well-formed | PASS | - | lxml parses it cleanly. `<?xml version="1.0" encoding="UTF-8"?>`, root `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`. |
| XSD (sitemaps.org 0.9) | **FAIL** | Low | 3,403 of 3,614 `<url>` blocks emit `loc, changefreq, priority, lastmod`. The XSD requires the sequence `loc, lastmod, changefreq, priority`. Google tolerates this. Strict validators and some SEO tools reject it. Cause: the template literal in `src/app/sitemap.xml/route.ts` (array `.map()` near line 4537). 2 entries also lack `<changefreq>`. |
| Size ≤ 50,000 URLs / 50 MB | PASS | - | 3,614 entries, 748,879 bytes uncompressed. |
| Single urlset vs index | Info | Medium (architecture) | It is a single `<urlset>`. No index exists, and `/sitemap_index.xml`, `/sitemap-index.xml` and `/sitemap.xml.gz` all return 404. |
| Duplicate `<loc>` | **FAIL** | Medium | 28 URLs are listed twice (3,614 entries, 3,586 unique). 5 of them carry **conflicting lastmod values** and 3 carry conflicting priority. Full list in section 3. |
| Non-200 URLs | **FAIL** | High | 2 × 404 and 4 × 308. See section 2. |
| Noindexed URLs | PASS | - | 0 of 150 live-sampled and 0 of 674 crawled sitemap URLs have noindex. No `X-Robots-Tag` header on any of the 3,586 HEAD responses. |
| Canonical = self | PASS | - | 150/150 sampled URLs have exactly one canonical, and it matches the sitemap `<loc>` byte for byte. 673/674 crawled sitemap URLs do too. The exception is the homepage `https://www.credsettle.com` vs `/`, which is equivalent. |
| URL hygiene | PASS | - | All 3,586 are https, `www.`, lowercase, no trailing slash, no query strings, no underscores and no odd characters. All are allowed by robots.txt. |
| lastmod present/format | PASS (format) / **FAIL (accuracy)** | Medium | All entries have a W3C date. One uses a different format (`2026-07-08T00:00:00.000Z`). Accuracy is covered in section 4. |
| All-identical lastmod | **FAIL** | Medium (raised from Low, see section 4) | 8 distinct strings (7 distinct dates). 2,401 entries = `2026-10-15`, 1,207 = `2026-11-09`, 6 others. |
| priority / changefreq | Info | Low | Present on almost every entry: priority has 9 values (`0.7`×1,548, `0.75`×853, `0.8`×542, `0.95`×342, `0.85`×230, `0.9`×91, `1`×4, `0.6`×3, `0.80`×1); changefreq is `monthly`×2,605, `weekly`×1,004, `yearly`×2, `daily`×1, missing×2. Google ignores both. Safe to drop. |
| Declared in robots.txt | PASS | - | `Sitemap: https://www.credsettle.com/sitemap.xml` |
| Resilience | PASS | - | When the Firestore blog fetch fails, the route throws, so Vercel keeps serving the last good cached file instead of a sitemap missing all /resources URLs. Good. |

## 2. Status check (all 3,586 unique URLs)

Method: HEAD on every URL, redirects not followed, 5 concurrent requests with 0.2 s between batches. No GET fallback was needed because HEAD was accepted everywhere. Runtime was 339 s. Script: `tools/sm_status.py`. Raw data: `data/sitemap_work/sm_status_head.json`.

| Class | Count |
|---|---:|
| 200 | **3,580** |
| 3xx | **4** (all 308) |
| 4xx | **2** (404) |
| 5xx | **0** |
| Network errors | 0 |

Response time p50 139 ms, p90 320 ms, max 901 ms. Vercel cache: HIT 2,395, PRERENDER 997, STALE 183, MISS 7.

**Non-200 URLs in the sitemap:**

| Status | URL | Target / cause |
|---|---|---|
| 404 | https://www.credsettle.com/services/personal-loan-settlement/dadra-nagar-haveli-daman-diu | The service uses the long slug `dadra-and-nagar-haveli-and-daman-and-diu`, which returns 200 and is not in the sitemap. The sitemap's `STATE_SLUG_FALLBACKS` injects the short slug from `src/data/statesData.ts`. |
| 404 | https://www.credsettle.com/services/credit-card-settlement/dadra-nagar-haveli-daman-diu | Same cause. The long-slug URL returns 200 and is unlisted. |
| 308 | https://www.credsettle.com/services/how-to-check-your-loan-status-without-visiting-the-bank | Redirects to `/how-to-check-your-loan-status-without-visiting-the-bank`, which is already listed. Listed only because of the `simpleServices` array in the route (redirect in `next.config.ts:524`). |
| 308 | https://www.credsettle.com/resources/is-your-bank-account-under-lien-heres-everything-you-need-to-know | Redirects to `/resources` (the listing), so the article is retired. Still listed because the Firestore `blogs` doc exists (redirect in `next.config.ts:364`). |
| 308 | https://www.credsettle.com/resources/loan-settlement-kaise-kare-puri-jankari-step-by-step | Redirects to `/resources`. Same cause (`next.config.ts:369`). |
| 308 | https://www.credsettle.com/resources/how-to-get-loan-or-is-it-time-to-learn-how-to-settle-loan-instead | Redirects to `/resources`. Same cause (`next.config.ts:359`). |

**Canonical / noindex sample** (150 random sitemap URLs, seed 20261126, GET with no redirects; `data/sitemap_work/sm_sample_inspect.json`). The sample covered issuer×state 73, root articles 21, service×lender 20, service×state 13, resources 9, loan-settlement-by-bank 7, issuer 3, loan-settlement 2, service type 2.
- 150/150 returned 200, 150/150 had an exact self-canonical, 0 noindex, 0 X-Robots-Tag, 0 multiple canonicals, 0 hreflang.
- Noted for the on-page specialist, not a sitemap issue: 10/150 root articles have `og:url` pointing to the homepage (e.g. /interest-rate-recalculate-after-prepayment, /bank-recovery-case-in-court, /loan-foreclosure-prepayment-charges-waiver, /personal-loan-time-barred-after-3-years-limitation-act), and 13/150 have no og:url. 143/150 emit two robots meta tags; they agree (both index), so this is harmless.
- Separately, the custom 404 page emits `<meta name="robots" content="noindex">` plus `index, follow` plus a canonical to `/services` (seen on both 404 DNH URLs). Not a sitemap issue, but worth a look by the technical specialist.

## 3. The 28 duplicate `<loc>`s

There are two causes in `src/app/sitemap.xml/route.ts`:
- **(A) 17 duplicates**: a hand-written XML literal appended after the generated array (from route line ~4544, output lines 20,421–20,515) re-lists URLs that the array already pushed.
- **(B) 11 duplicates**: the same URL is `urls.push()`ed twice inside the array.

There is no dedupe across either path.

| # | URL (path) | 1st entry (line: lastmod / priority / changefreq) | 2nd entry | Cause |
|---|---|---|---|---|
| 1 | /bank-employee-threatening-arrest-on-call | 3117: 11-09 / 0.8 / weekly | 20485: **07-15** / 0.8 / weekly | A, conflicting lastmod |
| 2 | /best-lawyer-for-msme-loan-recovery-defence | 1653: 11-09 / 0.95 / weekly | 2325: same | B |
| 3 | /best-lawyer-for-msme-personal-loan | 1659: 11-09 / 0.95 / weekly | 2331: same | B |
| 4 | /can-i-settle-my-credit-card-dues-using-third-party-loan-settlement-companies | 1197: 11-09 / 0.95 | 2505: 11-09 / **0.9** | B, conflicting priority |
| 5 | /cheque-bounce-lawyer-in-delhi | 3045 | 20450 | A |
| 6 | /credit-card-settlement (lane hub) | 2961 | 20426 | A |
| 7 | /credit-card-settlement-hdfc | 3141 | 20432 | A |
| 8 | /customer-testimonials-for-debt-settlement-service-providers | 1389 | 2373 | B |
| 9 | /do-banks-file-fir-for-credit-card-dues | 969 | 2529 | B |
| 10 | /does-settled-loan-npa-affect-government-job-verification | 3153 | 20491 | A |
| 11 | /drt-jurisdiction-minimum-limit-loan-recovery | 627 | 20503 | A |
| 12 | /find-alternatives-solutions-to-debt-settlement-for-small-debts | 2445 | 2451 | B |
| 13 | /how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender | 1497 | 2679 | B |
| 14 | /how-do-loan-settlement-agents-work-through-online-portals | 3159: weekly | 20479: **monthly** | A |
| 15 | /how-to-settle-a-credit-card-debt | 2925: weekly | 20462: **monthly** | A |
| 16 | /loan-default-crypto-stock-market-loss-india | 687 | 723 | B |
| 17 | /loan-settlement-for-senior-citizens-pension-holders-india | 3063: 11-09 / 0.8 / weekly | 20421: **07-02 / 0.80 / (none)** | A, conflicting lastmod |
| 18 | /ots-kya-hota-hai-full-form | 2991 | 20438 | A |
| 19 | /personal-loan-defaulter-for-10-years | 2889: 11-09 | 20468: **07-08** / (no changefreq) | A, conflicting lastmod |
| 20 | /punishment-for-non-payment-of-personal-loan-in-india | 1413: 11-09 / 0.95 / weekly | 20456: **2026-07-08T00:00:00.000Z / 0.8 / monthly** | A, conflicting lastmod and priority |
| 21 | /sarfaesi-act-section-13-2-notice-stop-auction | 3135 | 20497 | A |
| 22 | /settling-debt-in-india-guide | 2937 | 20444 | A |
| 23 | /understanding-the-impact-of-high-credit-card-interest-rates-what-you-need-to-know | 3081 | 20509 | A |
| 24 | /what-alternatives-exist-to-loan-settlement-for-managing-overwhelming-debt | 1203: 0.95 | 2511: **0.9** | B, conflicting priority |
| 25 | /what-is-the-success-rate-of-debt-settlement-programs | 519 | 2427 | B |
| 26 | /what-questions-should-i-ask-a-debt-settlement-consultant | 1383 | 2367 | B |
| 27 | /whats-a-credit-line-and-who-should-consider-one | 3147 | 20515 | A |
| 28 | /which-loan-settlement-companies-offer-the-lowest-fees | 3171: 11-09 / weekly | 20473: **07-10 / monthly** | A, conflicting lastmod |

Unless marked, both copies are identical (lastmod 2026-11-09, priority 0.8 for A or 0.95 for B, weekly). All 28 URLs return 200. Impact is low: Google dedupes them, but the conflicting lastmods make the file look less trustworthy, and the 28 extra entries inflate the "Discovered" count in Search Console.

## 4. lastmod: are the 7 dates honest? No.

**Source of the values:** `src/app/sitemap.xml/route.ts:405-406` hardcodes two constants:
```ts
const today = '2026-11-09'; // Fixed deployment lastmod so Googlebot prioritizes genuinely updated pages
const matrixLastMod = '2026-10-15'; // Programmatic state/bank permutation baseline
```
- `2026-10-15` (2,401 entries) is used for every issuer×state (1,548), service×state (216) and service×lender (637) page.
- `2026-11-09` (1,207 entries) is used for everything else: homepage, hubs, 43 issuer pages, 187 loan-settlement-by-bank pages, 194 resources, root articles and tools.
- The 6 stray values (`2026-07-02`, `2026-07-08`, `2026-07-08T00:00:00.000Z`, `2026-07-10`, `2026-07-15`, `2026-11-23`) come from hand-written literal entries. Four of them are the second copy of a duplicate.

**Evidence that the values are wrong.** I compared them with on-page JSON-LD `dateModified`/`datePublished` across 674 crawled sitemap pages (`tools/sm_lastmod_vs_page.py`), with git history and with Firebase upload timestamps:

| Evidence | Finding |
|---|---|
| New pages vs git creation date | 127 static pages were added between 2026-11-11 and 2026-11-24 (36 on 11-11, 40 on 11-21, 26 on 11-23, 25 on 11-24). **126 of them carry lastmod 2026-11-09, which is before the pages existed.** Only `/personal-loan-settlement-ca-cs-advocate-sebi-license` got a real date (2026-11-23). |
| /resources articles (Firestore) | Of 40 crawled, 12 were *published after* their lastmod. Example: /resources/look-out-circular-loc-and-passport-impounding-myths-loan-default, /resources/cibil-experian-equifax-crif-dispute-after-personal-loan-ots and /resources/icici-and-axis-bank-credit-card-ots-settlement-waiver-comparison were published on 2026-11-21 (also visible in the Firebase cover timestamps `cover-1795242909048.jpg` = 2026-11-21 06:35 UTC), but their lastmod is 2026-11-09. Another 27 have page `dateModified` values *older* than lastmod (e.g. 2025-02-25, 2025-04-03), yet lastmod claims 2026-11-09. |
| Root articles | 24 of 49 crawled pages with dates show `dateModified` after lastmod (16 lane pages published 2026-11-11, e.g. /psu-bank-ots-deadline-march-31-2027 and /hdfc-credit-card-blocked-due-to-non-payment); 25 show it before. |
| CC issuer and issuer×state | Pages say `dateModified 2026-07-07` (43/43 and 60/60 crawled). Git's last template change was 2026-10-13. The sitemap says 2026-11-09 for issuers and 2026-10-15 for issuer×state. Three sources, three dates. |
| Service×lender | Sitemap says 2026-10-15. All 309 crawled pages emit `datePublished = dateModified = 2026-11-24`, which is the last deploy date: the schema date is generated at build time. Git's last change to `banks-content.ts` was 2026-10-14. |

**Impact:** Google uses lastmod only when it is "consistently and verifiably accurate". With values that predate page creation and disagree with on-page dates, Google will most likely ignore lastmod for the whole host. That removes the one cheap recrawl signal the site has while it ships about 8 new pages a week. Severity: **Medium**. It is not ranked higher because it does not block indexing; it slows discovery and recrawl of new and updated pages.

## 5. Coverage

### 5a. Pages in the crawl but not in the sitemap: 55

| Group | Count | Examples | Add to sitemap? |
|---|---:|---|---|
| `/services/app-loan-settlement/banks/{mainstream bank or large NBFC}` | 40 | aditya-birla-fin, amex, axis-bank, hdfc, icici, sbi, kotak-bank, punjab-national-bank, yes-bank, tata-capital, muthoot-finance … | **No.** These are type×lender mismatches: HDFC, SBI and Amex are not app lenders. Each page is 1,150–1,300 words of the same template with the name swapped. The sitemap deliberately limits app-loan to 80 app-lender slugs. Adding them would grow the doorway footprint. They are live, linked, self-canonical and indexable, so whether to de-link or noindex them is an owner decision. |
| `/services/{business,car}-loan-settlement/banks/{6 newer lenders}` and `/services/credit-card-settlement/banks/dmi-finance-pvt-ltd` | 13 | au-small-fin-bank-ltd, csb-bank, dmi-finance-pvt-ltd, north-east-small-finance-bank, northern-arc-bank, smfg | **Not now.** A live probe shows these 6 lenders return 200 under all 6 service types, and 34 of those 36 combinations are unlisted (only nbfc/dmi and nbfc/smfg are listed). Adding sitemap entries is allowed under the freeze, but it would add pages to a template that fails the quality gate (18% median unique content). If the owner keeps the template, add only the combinations that are real products (e.g. AU SFB credit card; AU, CSB and NE SFB personal or business loans; DMI, SMFG and Northern Arc personal or NBFC loans). |
| `/services/app-loan-settlement/dadra-and-nagar-haveli-and-daman-and-diu` | 1 | | **No.** It duplicates the listed `/services/app-loan-settlement/dadra-nagar-haveli-daman-diu`; both return 200 with self-canonicals. The same pair exists for business, car and nbfc (8 URLs, 4 duplicate pairs). For personal-loan and credit-card only the long slug works, so swap the two 404 entries for the long slug (see fixes). |
| `/sitemap` (HTML sitemap) | 1 | | **Optional, harmless.** Linked from every page (499 BFS inlinks), self-canonical, indexable. Adding it is allowed; its value is low. |

### 5b. Sections that look missing, and /blogs/

- **/blogs/ is not a missing section.** The homepage's `/blogs/...` strings are Firebase Storage object paths (`https://storage.googleapis.com/credsettlee.firebasestorage.app/blogs/{slug}/cover-*.jpg`), not site URLs. The articles live at `/resources/{slug}` and **are** in the sitemap: all 3 homepage-featured slugs are listed. Live behaviour: `/blogs` → 308 → `/resources`, `/blogs/{slug}` → 308 → `/resources/{slug}`, `/blog` → 404. Correctly excluded.
- All 6 service types list all 36 states. The sitemap also covers `/tools/*` (9), `/loan-settlement/*` (37), `/author/ashish-jhangra`, `/about`, `/contact`, `/terms-and-conditions` and `/privacy-policy`.
- Every one of the 127 static pages created since 2026-11-10 (git `--diff-filter=A`) is in the live sitemap. The weekly "add the sitemap entry" step works.

### 5c. Discovery depends on the sitemap for large sections (important context for any sitemap change)

Share of sitemap URLs that received at least one followed internal link within the 500-page BFS crawl (a lower bound):

| Section | In sitemap | Linked in BFS | |
|---|---:|---:|---|
| /credit-card-settlement/{issuer}/{state} | 1,548 | 0 (0%) | Orphan cluster |
| /credit-card-settlement/{issuer} | 43 | 0 (0%) | Orphan cluster |
| /resources/{slug} | 194 | 10 (5%) | Listing pagination is `<button>`-driven: pages 2–22 have no `<a href>` |
| /services/{type}/{state} | 216 | 35 (16%) | |
| /loan-settlement/{bank} | 37 | 13 (35%) | |
| /services/{type}/banks/{lender} | 637 | 309 (49%) | |
| Root articles, loan-settlement-by-bank, tools | 898 | ~100% | |

- **The 43 issuer hubs and 1,548 issuer×state pages are reachable only through the XML sitemap.** The repo confirms it: `src/app/credit-card-settlement/CreditCardSettlementClient.tsx` imports `creditCardBanks` but renders no `/credit-card-settlement/{issuer}` links. The only links into the cluster come from inside it (Tier templates' breadcrumbs and `src/components/StateGrid.tsx`). The /sitemap HTML page links none of them either. This is CredSettle's #1 lane ("credit card issuer × problem"), and its issuer hubs are orphans.
- **184 of 194 /resources articles** are exposed only through the JS-paginated listing (the SSR HTML holds 10 links plus buttons "1 2 3 4 5 … 22 Next"). The XML sitemap is effectively their only discovery path.
- Consequence: **do not drop these sections from the sitemap without first giving them crawlable links.** Doing so would orphan them completely.

### 5d. Pages in the sitemap that should not be there

These are the 6 non-200 URLs in section 2 and the 28 duplicate entries in section 3. No noindexed or non-self-canonical URLs were found.

### 5e. Unbounded URL space (soft-404), found while checking coverage

Unknown slugs return **indexable 200 pages with a self-canonical** under two patterns:
- `https://www.credsettle.com/services/{type}/banks/{anything}`. Example: `/services/personal-loan-settlement/banks/zzqx-not-a-lender` gets the title "Settle Your Zzqx Not A Lender Personal Loan | CredSettle", `index, follow` and a self-canonical.
- `https://www.credsettle.com/credit-card-settlement/{anything}`. Example: `/credit-card-settlement/zzqx-not-a-bank` gets "Zzqx Not A Bank Credit Card Settlement Guide | CredSettle".

By contrast, `/services/{type}/{bad-state}`, `/credit-card-settlement/{issuer}/{bad-state}`, `/loan-settlement-by-bank/{bad}`, `/resources/{bad}` and `/loan-settlement/{bad}` all correctly return 404. This is why the 40 "app-loan × HDFC/SBI" pages exist at all: any bank slug linked from anywhere renders. It is a crawl-budget and spam risk, because a third party can link to `/credit-card-settlement/<any brand or phrase>` and get an indexable CredSettle page. The sitemap is currently the only authoritative list of real URLs.

## 6. Quality gates: location pages

**HARD STOP: threshold exceeded about 35 times.**

| Template | Pages in sitemap | Gate |
|---|---:|---|
| /credit-card-settlement/{43 issuers}/{36 states} | **1,548** | HARD STOP (≥50) |
| /services/{6 types}/{36 states} | **216** | HARD STOP (≥50) |
| **Location pages total** | **1,764** | **HARD STOP**: the skill's rule requires explicit owner justification |
| Related entity-swap permutations (not location, same doorway pattern) | 637 service×lender + 187 /loan-settlement-by-bank | Same risk class |

Unique content, measured as 5-gram shingles of main text with header, footer and nav removed. Up to 60 crawled pages per template (`tools/sm_uniqueness.py`, `data/sitemap_work/sm_uniqueness.json`). "Unique vs nearest" is the share of a page's text not found on its most similar sampled sibling. Because the sample is a subset, these numbers are an **upper bound**; in the full population the nearest sibling is closer still.

| Template | Sampled | Pairwise Jaccard median (README) | Median unique vs nearest sibling | Pages ≥ 60% unique | Median words |
|---|---:|---:|---:|---:|---:|
| CC issuer×state | 60 | 0.50 (hdfc/maharashtra vs hdfc/karnataka 0.69) | **17%** | **0%** | 469 |
| Service×state | 36 | 0.28 (p90 0.73; low because pairs cross service types) | **15%** | **0%** | 1,235 |
| Service×lender | 60 | n/a | **18%** | **1.7%** | 1,155 |
| /loan-settlement-by-bank/{lender} | 46 | 0.87 | **6.5%** | **0%** | 3,777 |
| CC issuer hubs (43, not location pages) | 43 | n/a | 13% | 0% | 878 |

Worst examples: `/credit-card-settlement/jana-small-finance-bank/andhra-pradesh` and `/credit-card-settlement/esaf-small-finance-bank/andhra-pradesh` (13% unique vs nearest), `/services/app-loan-settlement/lakshadweep` (12%), `/loan-settlement-by-bank/suryoday-small-finance-bank` and `/loan-settlement-by-bank/esaf-small-finance-bank` (5.5%).

Plain reading: the requirement is 60%+ unique content per page, and no sampled location page comes close. These are the "only the city/bank name swapped" pages that Google's doorway-page policy targets. With 2,588 of 3,586 sitemap URLs (72%) in these templates, they also dominate how Google judges the site's overall quality. That matters for a YMYL finance site.

**Owner decision required.** Removing these from the sitemap, noindexing, consolidating or pruning them all touch frozen pages. This audit recommends none of those unilaterally. It recommends:
1. Make the problem measurable first: split them into their own child sitemaps (section 7), which is allowed. Search Console will then show indexed vs "Crawled/Discovered – currently not indexed" per template within 2–4 weeks.
2. Freeze growth, which is allowed: add **no** new {issuer}/{state}, {type}/{state} or {type}/banks/{lender} entries, including the 34 unlisted lender combinations, until the owner rules.
3. Bring the per-template indexing data to the owner. Options for that decision: keep as-is with a written justification; delist from the sitemap; noindex; or consolidate into the issuer hubs. Note that delisting the issuer×state cluster today would make it undiscoverable (section 5c).

## 7. Recommended structure

### 7a. Sitemap index split by template

Keep `/sitemap.xml` as the entry point so robots.txt and the existing Search Console submission stay valid, but have it return a `<sitemapindex>`. Serve the children from `/sitemaps/*.xml`. Avoid Next's `generateSitemaps()` default `/sitemap/[id].xml` path, because `src/app/sitemap/page.tsx` (the HTML sitemap) already owns `/sitemap`. Child sizes below are today's counts after removing the 4 redirected URLs and deduping. The 2 DNH swaps keep service-states at 216.

| Child sitemap | Contents | URLs |
|---|---|---:|
| `/sitemaps/core.xml` | home, /about, /contact, legal, /services and 10 service-type pages, hubs (/credit-card-settlement, /resources, /loan-settlement, /loan-settlement-by-bank, /tools), 9 tools, author | 28 |
| `/sitemaps/lane-new.xml` (or split by lane: `lane-a-cc-issuer-problem.xml`, `lane-b-psu-ots.xml`, `lane-c-app-lenders.xml`) | Every page created under the Lead Differentiation Plan (since 2026-11-11) | 127 (+~8/week) |
| `/sitemaps/articles.xml` | Other root-level articles | 568 |
| `/sitemaps/resources.xml` | /resources/{slug} from Firestore (exclude docs whose slug has a redirect in next.config.ts) | 191 |
| `/sitemaps/cc-issuers.xml` | /credit-card-settlement/{issuer} | 43 |
| `/sitemaps/cc-issuer-states.xml` | /credit-card-settlement/{issuer}/{state} | 1,548 |
| `/sitemaps/service-states.xml` | /services/{type}/{state} | 216 |
| `/sitemaps/service-lenders.xml` | /services/{type}/banks/{lender} | 637 |
| `/sitemaps/lenders.xml` | /loan-settlement-by-bank/{lender} | 187 |
| `/sitemaps/loan-settlement-banks.xml` | /loan-settlement/{bank} (Lane B entry pages) | 37 |
| **Total** | | **3,582** |

Example index (each child `<lastmod>` = the newest real `lastmod` inside that child, computed at build; no placeholder dates):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>https://www.credsettle.com/sitemaps/core.xml</loc></sitemap>
  <sitemap><loc>https://www.credsettle.com/sitemaps/lane-new.xml</loc></sitemap>
  <sitemap><loc>https://www.credsettle.com/sitemaps/articles.xml</loc></sitemap>
  <sitemap><loc>https://www.credsettle.com/sitemaps/resources.xml</loc></sitemap>
  <sitemap><loc>https://www.credsettle.com/sitemaps/cc-issuers.xml</loc></sitemap>
  <sitemap><loc>https://www.credsettle.com/sitemaps/cc-issuer-states.xml</loc></sitemap>
  <sitemap><loc>https://www.credsettle.com/sitemaps/service-states.xml</loc></sitemap>
  <sitemap><loc>https://www.credsettle.com/sitemaps/service-lenders.xml</loc></sitemap>
  <sitemap><loc>https://www.credsettle.com/sitemaps/lenders.xml</loc></sitemap>
  <sitemap><loc>https://www.credsettle.com/sitemaps/loan-settlement-banks.xml</loc></sitemap>
</sitemapindex>
```
Child entry format: `<url><loc>…</loc><lastmod>YYYY-MM-DD</lastmod></url>`. Drop `<changefreq>` and `<priority>`; if they are kept, emit them in XSD order after `<lastmod>`.

Why this matters: Search Console's Page indexing report can be filtered by submitted sitemap. Per-template children show exactly how many issuer×state or lender pages Google declines to index, which is the evidence the owner needs for the section 6 decision. A `lane-new.xml` child (or one per lane) also gives a direct weekly KPI: how many new lane pages are indexed.

Implementation notes for the route:
- Build one in-memory `Map<loc, entry>` from all sources, the array plus the current hand-written literals moved into data, then emit each child from it. This removes all 28 duplicates by construction.
- Exclude any loc that matches a `source` in `next.config.ts` redirects. That covers the 3 /resources slugs and the /services/how-to-check… entry.
- Stop merging `STATE_SLUG_FALLBACKS` into per-service state lists. Take the slugs from each service's own content module, which is what makes the personal-loan and credit-card DNH entries correct.
- Replace the 4,000+ lines of hand-pushed root-article entries with a generated registry (e.g. a `scripts/` step that lists `src/app/*/page.tsx` static routes and writes `src/data/sitemap-registry.json`). Then new pages no longer need a manual edit to a 5,839-line file.

### 7b. Real lastmod

| Section | Honest source |
|---|---|
| /resources/* | The Firestore doc's update timestamp. Use the same field the article page already uses for `dateModified`, so sitemap and page agree. |
| Root articles, tools, hubs (TSX) | Last git commit date of the page's directory (`git log -1 --format=%cs -- src/app/<slug>/`). Vercel clones are shallow, so generate this into a committed JSON manifest with a prebuild/CI script. Alternatively, export a `LAST_MODIFIED` constant per page that both the JSON-LD and the sitemap read. |
| Programmatic templates (issuer×state, service×state, service×lender, loan-settlement-by-bank) | max(last commit of the template file, last commit of its data file). For example, issuer×state today = 2026-10-13 (`[state-slug]/page.tsx`), not 2026-10-15 or 2026-11-09. Do not bump on deploys that don't change content. |
| New pages | Real publish date at creation, bumped only on substantive edits. |

Note: the on-page `dateModified` values are themselves inaccurate (2026-07-07 on the issuer cluster; the build date 2026-11-24 on every service×lender page). Fixing those touches frozen pages. Until the owner allows it, sitemap lastmod and page dates will keep disagreeing on those templates, so derive lastmod from git, not from the page.

### 7c. Where new pages should go

- In the lane-new child sitemap (or the per-lane children), with lastmod = actual publish date. Do not put them in `articles.xml`, so their indexing rate stays visible apart from the legacy corpus.
- Each new issuer×problem page should link to its issuer hub (e.g. `/hdfc-credit-card-blocked-due-to-non-payment` → `/credit-card-settlement/hdfc`). Links from new pages are allowed, and this is the only way to give the orphaned issuer cluster inbound links without touching frozen pages.
- Do not create new location or lender-swap permutations (section 6).
- Noted in passing for the content specialist, outside the sitemap remit: some of the 2026-11-21/23/24 batches look like near-duplicates of 2026-11-11 pages or sit in SettleLoans' lane. Examples: `/add-on-supplementary-credit-card-default-liability` (11-21) vs `/add-on-credit-card-default-who-is-liable` (11-11); `/credit-card-overlimit-fee-without-consent-rbi-refund` vs `/credit-card-over-limit-and-late-fee-before-settlement`; `/can-hr-refuse-salary-account-switch-personal-loan`, `/employer-withholding-relieving-letter-fnf-staff-loan`, `/change-personal-loan-emi-debit-date-match-salary-date`. Lane-tagged sitemaps would make this kind of drift visible.

---

## 8. Prioritized fixes

### Critical
1. **Location-page quality gate: HARD STOP (1,764 location pages; 0% of sampled pages reach 60% unique content; plus 824 lender-swap permutations).** Get an explicit owner justification, or choose among keep / delist / noindex / consolidate, using per-template indexing data from fix H1. **Needs owner decision (touches frozen pages).** The measurement step and the "no new permutations" rule are **allowed under the freeze**.

### High
2. **(H1) Split /sitemap.xml into a sitemap index by template** (section 7a) and submit the index in Search Console. No URL is removed and no page is touched. **Allowed under the freeze.**
3. **(H2) Remove the 6 non-200 entries and swap in the 2 working URLs.** Drop the 3 `/resources/*` URLs that 308 to `/resources` and `/services/how-to-check-your-loan-status-without-visiting-the-bank` (308 to a URL already listed). Replace `/services/{personal-loan,credit-card}-settlement/dadra-nagar-haveli-daman-diu` (404) with `…/dadra-and-nagar-haveli-and-daman-and-diu` (200). **Allowed under the freeze**: sitemap-only change, every affected URL is already dead or redirected, and no page is edited.
4. **(H3) Close the unbounded URL space.** Return `notFound()` for unknown slugs in `/services/[type]/banks/[bank]` and `/credit-card-settlement/[slug]`. **Needs owner decision (touches frozen template code).** No real page's output would change; only made-up slugs would start returning 404.
5. **(H4) Give the orphaned issuer cluster (43 hubs + 1,548 issuer×state) a crawlable entry point.** Allowed now: link each new issuer×problem page to its issuer hub. **Allowed under the freeze.** Better: add a 43-issuer link grid to `/credit-card-settlement` and/or `/sitemap`. **Needs owner decision**, because it adds links from frozen pages to existing (not new) pages.

### Medium
6. **Real lastmod values** (section 7b). Replace the `today` and `matrixLastMod` constants with per-URL dates from git and Firestore. **Allowed under the freeze** (sitemap metadata only).
7. **Dedupe the 28 duplicate `<loc>`s.** Build a single `Map` keyed by loc and move the hand-written XML literals into data. **Allowed under the freeze.**
8. **Make /resources pagination crawlable** (`<a href="/resources?page=N">` instead of buttons), so 184 articles do not depend only on the sitemap. **Needs owner decision (edits frozen /resources page).**
9. **DNH duplicate pairs.** For business, car, app and nbfc, both `dadra-nagar-haveli-daman-diu` and `dadra-and-nagar-haveli-and-daman-and-diu` return 200 with self-canonicals (8 URLs). Pick one, then canonical or 308 the other. **Needs owner decision (touches frozen pages).** The cc issuer×state template already 308s the long slug to the short one, which is a precedent.
10. **Do not add the 40 app-loan × mainstream-bank pages or the 34 unlisted newer-lender combinations to the sitemap.** **Allowed under the freeze** (no action). Whether to de-link or noindex the 40 live mismatched pages: **needs owner decision**.

### Low
11. **Emit `<url>` children in XSD order** (`loc, lastmod, changefreq, priority`) so 3,403 entries validate. **Allowed under the freeze.**
12. **Drop `<priority>` and `<changefreq>`** (Google ignores both; there are 9 inconsistent priority values, including `0.80` vs `0.8`). **Allowed under the freeze.**
13. **Replace the hand-maintained 5,839-line route with a generated registry** of static routes, so adding a page cannot create duplicates or miss entries. **Allowed under the freeze** (sitemap code only).
14. **Optionally list `/sitemap`** (HTML sitemap) in `core.xml`. **Allowed under the freeze.** Low value.

---

## Appendix: files produced
- Scripts: `/private/tmp/claude-501/-Users-amalegalsolutions--claude-spares-spare-xPJPYw/7f87f4d4-849f-48d6-9464-8873c1f3b3d0/scratchpad/tools/sm_validate.py` (XML/XSD/duplicates/lastmod/hygiene), `…/tools/sm_status.py` (HEAD all + 150-URL canonical/noindex sample), `…/tools/sm_lastmod_vs_page.py`, `…/tools/sm_uniqueness.py`
- Data: `/private/tmp/claude-501/-Users-amalegalsolutions--claude-spares-spare-xPJPYw/7f87f4d4-849f-48d6-9464-8873c1f3b3d0/scratchpad/data/sitemap_work/` (`sm_validate.json`, `sm_entries.json`, `sm_status_head.json`, `sm_sample_inspect.json`, `sm_lastmod_vs_page.json`, `sm_uniqueness.json`, `new_pages_git.txt`). Raw sitemap: `…/data/sitemap_raw/sitemap.xml`; official XSD: `…/data/xsd/sitemap.xsd`.
- Nothing in the project repository was modified. The repo was read only, for root-cause file and line references and git dates.
