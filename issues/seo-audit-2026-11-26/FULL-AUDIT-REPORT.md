# CredSettle full SEO audit, 26 Nov 2026

Site: https://www.credsettle.com
Tool: claude-seo (`/seo-audit`). Six specialist agents: technical, content, schema, sitemap, performance, visual.
Scope:
- 729 pages crawled: 500 by following links from the homepage, plus a 229-page random sample from the sitemap. The homepage crawl never reached the credit-card issuer pages.
- All 3,586 sitemap URLs status-checked.
- Source code read (not changed) to find root causes.

Detail for each area is in `specialist-reports/`. Screenshots are in `screenshots/`. The prioritised fix list is in `ACTION-PLAN.md`.

## Executive summary

### SEO Health Score: 51 / 100

| Category | Weight | Score | One-line verdict |
|---|---|---|---|
| Technical SEO | 25% | 63 | Clean page by page. But 64% of sitemap URLs can't be reached by clicking from the homepage, and 3 routes serve a page for any made-up URL. |
| Content quality | 25% | 31 | Name-swap templates, text garbled by the readability rules, conflicting trust claims, no named experts. |
| On-page SEO | 20% | 62 | Titles, metas and H1s are within limits on 94–99% of pages, with 0 duplicates. Internal linking and cannibalisation are poor. 82% of pages have no og:image. |
| Schema | 10% | 36 | Valid syntax, but the markup claims things the page doesn't show: review stars, placeholder phones, made-up state offices. |
| Performance (lab only) | 10% | 64 | Edge-cached and fast server (100–150 ms). Heavy images, preload storm, about 677 KB of third-party code on every page. |
| Images | 5% | 60 | Alt text is 100% present. Article heroes are raw 1–2.6 MB PNGs, and the homepage preloads 65 images. |
| AI search readiness | 5% | 33 | AI bots are allowed. No llms.txt, few direct-answer openings, contradicting facts. |

Weighted: 15.8 + 7.8 + 12.4 + 3.6 + 6.4 + 3.0 + 1.7 = **51**.

**Business type:** YMYL financial-services lead generation (unsecured debt settlement in India) with a publisher-scale content hub. It has one physical office (Gurugram, per /contact) and about 3,600 sitemap URLs, roughly 2,600 of them programmatic.

**The short version:** the team's Screaming Frog work has made individual pages technically tidy. The real risks sit one level up:
- what the pages claim (ratings, offices, fees)
- how many near-identical pages exist
- whether the lane-#1 pages can be found at all

### Top 5 critical issues
1. **Security: visitor reviews go into JSON-LD unescaped.**
   - The visitor writes the review to Firestore from the browser via `addBlogReview` ([blogs.ts:383](../../src/lib/blogs.ts)). There is no moderation and the rating isn't clamped.
   - [resources/[slug]/page.tsx:699-816](../../src/app/resources/[slug]/page.tsx) then serialises it with plain `JSON.stringify` inside `dangerouslySetInnerHTML`. A comment containing `</script>` would break out on the next ISR rebuild.
   - Firestore rules aren't in the repo, so I couldn't confirm who can write. I didn't test it on the live site.
2. **Your lane-#1 pages are orphaned.**
   - The 43 credit-card issuer pages and 1,548 issuer × state pages (1,591 URLs, 44% of the sitemap) get **zero** internal links from outside their own cluster. I confirmed this across all 625 crawled pages outside that cluster.
   - The nav, footer and homepage link `/services/credit-card-settlement` instead, and the `/credit-card-settlement` hub links to none of the issuers. The XML sitemap is their only discovery path.
3. **Scaled / doorway content risk.**
   - 1,548 issuer × state, 216 service × state and about 824 lender pages are 97–100% identical once bank and state names are masked.
   - 1,500 city pages are live and indexable (not in the sitemap) at about 80% similarity.
   - Some are for products that don't exist (e.g. KreditBee car or business loans) or carry the wrong product text (unsecured-loan copy on Muthoot and Aadhar Housing).
   - The skill's quality gate is a hard stop at 50+ location pages. Owner rule 1 freezes all of these, so this is your decision. It is the biggest algorithmic (Helpful Content / scaled content abuse) exposure on the site.
4. **Readability rules are corrupting copy.**
   - `mistakes.md` Mistakes 16, 34 and 51, and `improveTextReadability()` in `BlogPostPageClient.tsx`, swap words and split sentences at commas. Examples: "settlement" → "closure", "financial" → "money", "principal" → "main sum", "personal" → "own".
   - About 80 of 729 crawled pages (11%) read as garbled, including 6 of the 8 main `/services/` pages. "main sum" appears in 142 source files.
   - For a YMYL site this hurts trust and conversion more than a Flesch warning ever would.
5. **Trust claims that contradict each other or the page.**
   - AggregateRating on 108 of 729 sampled pages, with 24 different values (e.g. 4.9/18,200, 4.8/12,500, 4.9/6,180). None are visible on the page.
   - Placeholder `+91-XXXX…` phones in 94 source files.
   - 22 "CredSettle {State}" LocalBusiness nodes with geo-coordinates for offices that don't exist.
   - "No upfront fees" appears on 36 crawled pages. The live T&C say "We begin execution only after receiving your explicit consent and the agreed payment" and "Fees already paid become non-refundable once work begins."
   - The fee claim needs a legal check (consumer-protection risk), not only an SEO fix.

Also High: **any made-up URL becomes an indexable page.** For example, `/credit-card-settlement/zzfakebank` returns 200 with `index, follow`, a self-canonical and the title "Zzfakebank Bank Credit Card Settlement Guide". The same happens under `/services/*/banks/*` and 4 of 6 `/services/*/<state>` routes. Anyone can mint CredSettle-branded YMYL pages by linking to them.

### Top 5 quick wins (allowed under the freeze)
1. **Put the 43 issuer pages and the `/credit-card-settlement` hub into the HTML `/sitemap` page,** which is linked from the footer. Add the 184 unlinked `/resources/*` articles too. Owner rule 2 explicitly allows HTML-sitemap entries. This gives lane #1 a crawl path the same day.
2. **Build one new issuer-directory page** (lane #1) linking all 43 issuers. Link it from the footer (end of the array), the homepage and the existing credit-card pages.
3. **Fix the XML sitemap route** (`src/app/sitemap.xml/route.ts`):
   - remove the 28 duplicates
   - drop the 2 URLs that return 404 and the 4 that return 308
   - add the 13 real lender pages that are missing
   - replace the two hard-coded lastmod constants (lines 405–406) with real dates
   - split into a sitemap index by section, so Search Console reports indexing per template
4. **Infrastructure and headers:**
   - Vercel apex → www as a permanent 308 (it's 307 today)
   - add Permissions-Policy
   - `poweredByHeader: false`
   - HSTS `includeSubDomains`
5. **Publish `/llms.txt`** listing the lane hubs and the best-sourced explainers. Stop the synonym-swap readability process for new pages (logged as Mistake 54 in `mistakes.md`).

---

## Technical SEO: 63

What's good:
- 3,580 of 3,586 sitemap URLs return 200.
- 729 of 729 crawled pages have exactly one absolute self-canonical, `index, follow`, a viewport tag and `lang="en"`.
- Full SSR: 100% of rendered text and links are in the server HTML.
- Prerendered and edge-cached (`x-vercel-cache: HIT`), with server p50 154 ms.
- Uppercase paths 301 and trailing slashes 308. A custom 404 returns 404.
- No mixed content. Robots.txt blocks nothing in the sitemap.

Problems:
- **Crawlability:**
  - 2,287 of 3,586 sitemap URLs (64%) have no click path from the homepage. This includes the credit-card issuer cluster above.
  - 184 of 194 `/resources/*` articles are unlinked, because the hub's pagination is `<button>` with no `href`.
  - The `/services/{cc,pl,nbfc}/banks/*` grids are missing, and 5 of 6 service types link none of their state pages.
- **Soft-404 catch-alls:**
  - `src/app/credit-card-settlement/[slug]/page.tsx:254-256` falls back to rendering any slug.
  - `services/*/banks/[bank]` uses `dynamicParams = true` plus `getBankContentWithFallback`.
- **Linked but not in the sitemap:** 55 URLs.
  - 13 are real lender pages and should be added.
  - 40 are "App Loan" pages for mainstream banks (HDFC, SBI…). A slug mismatch in `BanksGrid.tsx` generates them. Don't add these.
  - 1 is a duplicate DNH state slug. 1 is `/sitemap`.
- **City pages:** 1,500 live. Only 60 are linked, and all 1,500 records ship in a 433 KB RSC payload on `/loan-settlement-by-city`.
- **Redirects:**
  - `https://credsettle.com` → **307** (temporary) → www. `http://credsettle.com` takes 2 hops.
  - 1 broken internal link: `/resources/sbi-card-hdfc-icici-axis-credit-card-lok-adalat-settlement-guide` → a 404. Don't create the target, because Lok Adalat is AMA's lane.
- **Security headers:**
  - No Permissions-Policy.
  - `X-Powered-By: Next.js` is exposed.
  - HSTS has no includeSubDomains.
  - The CSP allows `'unsafe-inline' 'unsafe-eval'` and any https script.
- **AI crawlers:** all allowed through `*`. There is no explicit policy, and llms.txt returns 404.

## Content quality: 31 (E-E-A-T 30)

- **Who's behind it:**
  - No legal entity or registration ID is published.
  - The "Rahul Verma" byline appears on about 1,592 pages with no profile page. Reviewers are anonymous, and author boxes use placeholder avatars.
  - Stats conflict: "10+ years" vs founded 2021 on /about vs © 2020 in the footer; 5,000+ / 10,000+ / 15,000+ clients.
- **Scaled templates:** see critical issue 3. The same templated "case study" repeats across state pages with only the city changed.
- **Text corruption:** see critical issue 4. Examples: "own Loans for own Use" on /personal-loan-settlement-tax-implications, and "Escape the 42%. 52% growing finance charge trap."
- **Cannibalisation:**
  - HDFC credit-card settlement is spread over 41 URLs.
  - Harassment rights over about 18. "Best settlement company" over about 15. KreditBee over 13.
  - For HDFC, `/credit-card-settlement-hdfc` (10k words), `/credit-card-settlement/hdfc` (orphan) and `/services/credit-card-settlement/banks/hdfc` (orphan) all compete for one head term.
- **Facts:** three different circular numbers are cited for the RBI ₹100/day rule.
- **What's working:**
  - /rbi-100-per-day-compensation-for-delayed-cibil-report-update and /verify-loan-settlement-letter are well-sourced.
  - The Nov-2026 lane pages (issuer × problem, PSU OTS trackers, app lenders) have unique text (12–21% overlap), dated status checks and honest caveats.
  - The calculators label outputs as "not guaranteed" and mention the CIBIL "Settled" mark.
  - **The new-page standards in the lead plan are working. Keep building that way.**

## On-page SEO: 62

- **Element hygiene is strong:** titles, metas and H1s are within limits on 94–99% of pages, with 0 duplicate titles, metas, H1s or bodies.
- **Pages over the AGENTS.md hard limits** (all existing, so frozen):

| URL | Problem |
|---|---|
| `/tools/multiple-loan-calculator` | title 70, meta 161 |
| `/tools/debt-to-income-calculator` | title 68, meta 162 |
| `/tools/settlement-vs-repayment-calculator` | meta 164 |
| `/tools/loan-settlement-calculator` | meta 156 |
| 8 pages | H1 66–70: `/services/app-loan-settlement/{karnataka,maharashtra}`, `/cibil-dispute-wrong-overdue-entry-filing-process`, `/best-lawyer-for-{bank-harassment-for-loan,home-loan-settlement,business-loan-settlement}`, `/how-do-peer-to-peer-lending-platforms-handle-loan-settlements`, `/documents-needed-for-loan-settlement` |

- **Social metadata:** og:image is missing on 599 of 729 pages (82%). og:url inherits the homepage on 34 pages.
- **Internal linking:** orphans and cannibalisation (above) are the main on-page weakness.

## Schema: 36

- 1,424 JSON-LD blocks with 0 parse errors. The problems are what the markup says:
  - Self-serving AggregateRating and Review that isn't visible on the page. Product is used for a service. Three pages mark up 5-star reviews of the affiliated brands AMA Legal Solutions and SettleLoans.
  - On issuer × state pages, the FAQPage questions exist only in JSON-LD (180 of 180 sampled).
  - Placeholder phones and fake state LocalBusiness nodes.
  - 8+ organization names, three phones and three addresses, so there is no single `#organization` entity.
- `datePublished = new Date()` (build time) on about 830 pages. All about 1,591 credit-card pages share 2026-07-07.
- About 31% of blocks are injected client-side through `next/script`, including everything on the homepage.
- Note: the skill's guidance is "FAQPage only for government/health sites". The owner's new-page standard says Article + FAQPage + BreadcrumbList. FAQPage does no harm, but expect no FAQ rich results.

## Performance: 64 (lab only)

No field data. The keyless PageSpeed API returned 429 all day, CrUX needs a key, and the site has no RUM (`@vercel/speed-insights` isn't installed). Numbers come from local Lighthouse 13.6 (3 runs) and Playwright on throttled slow 4G with 4× CPU slowdown.

- **Article template fails LCP.**
  - The hero is a raw 1.56 MB PNG, because of `<Image priority unoptimized>` at `BlogPostPageClient.tsx:1377-1380`.
  - Mobile LCP is 5.0 s in Lighthouse and 22.5 s on the throttled run. Desktop CLS is 0.10, because the image is declared 1200×800 but the file is 1024×1024.
- **Homepage preloads 65 images (1.7 MB).** Only 3 of 131 images are lazy. On the throttled run LCP is 8.1 s; blocking those preloads brought it to 2.0 s.
- **Homepage images load on other pages.** The navbar's prefetch of `/` pulls about 834 KB of homepage images onto other pages.
- **Third-party code on every page:**
  - reCAPTCHA (353 KB) wraps the whole app but is only needed when a form is submitted.
  - Meta Pixel (205 KB).
  - The render-blocking Font Awesome stylesheet from cdnjs.
  - Article pages also ship the Firebase Auth and Firestore client (about 190 KB) just for the review form.
- **Bloated page data:** the `/resources` hub carries 367 KB of embedded page data (RSC payload) and the city hub 433 KB.

## Images: 60
- **Alt text:** none missing. The 729 empty alts are all the Facebook-pixel `<noscript>` image, which is correct.
- **Oversized files:** 17 `/resources/*` pages load raw Firebase Storage PNGs of 1.1–2.6 MB without Next.js optimisation. Blog covers are 0.5–0.8 MB JPGs.
- **Dimensions:** 22 images have no width/height.

## AI search readiness: 33
- **Good:** AI search bots (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot) get identical 200 responses, and all content is server-rendered.
- **Weak:**
  - no llms.txt
  - only 3–4 of 15 sampled articles open with a direct 40–60-word answer
  - contradicting regulatory citations
  - unverifiable stats undercut citability

---

## How the project rules shape the fixes

Every fix in `ACTION-PLAN.md` carries one of three tags:
- **[Allowed]:** new pages, links from existing pages to new pages, new XML/HTML sitemap entries, infrastructure/header settings, process docs. You can do these now.
- **[Owner]:** touches frozen pages or shared templates (owner rule 1). Listed so you can decide, not done.
- **[Exception?]:** security or legal problems where I'd recommend you make an exception to the freeze, because no visible page content needs to change (XSS escaping, soft-404 catch-alls) or the risk is legal (fee claims, fake offices, placeholder phones).

Agent suggestions I dropped because they conflict with the lead plan:
- Hindi versions of lane topics. Plan rule 5 says no language/geo split.
- Promoting personal-loan lender/state pages. That is SettleLoans' lane.
- Creating a page at the broken Lok Adalat URL. That is AMA's lane.

## Method and limits
- **Crawl:** homepage BFS (500 pages) was dominated by `/services/` (407 pages) and never reached `/credit-card-settlement/*`. That finding is itself evidence of the orphaning. A stratified sitemap sample of 229 URLs filled the gaps.
- **Similarity:** 5-gram Jaccard and sentence diff after masking bank and state names, on 25–60-page samples per template.
- **Performance:** lab only (see above). The INP proxy is TBT plus post-load tap timing.
- **Not verified:**
  - Firestore write rules (XSS exploitability).
  - Regulatory circulars dated after mid-2026.
  - Which fee plan is the real one. The fee contradiction is between the site's own pages and its own T&C.
