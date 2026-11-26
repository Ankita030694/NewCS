# CredSettle SEO action plan, 26 Nov 2026

From `FULL-AUDIT-REPORT.md` (score 51/100).

Tags:
- **[Allowed]:** fine under the freeze in AGENTS.md and the lead plan's owner rules.
- **[Owner]:** touches frozen pages or shared templates, so the owner decides.
- **[Exception?]:** security or legal problems where I recommend making an exception to the freeze.

Every new page still follows AGENTS.md: one page per commit, logged in `issues/seo_change_log.md`, title 50–60, meta 140–155, H1 30–65, H2 ≤70 with no em-dash, and `npx tsc --noEmit` clean.

## Critical: fix immediately

| # | Fix | Tag | Where |
|---|---|---|---|
| 1 | Escape `<` in every JSON-LD `dangerouslySetInnerHTML`. The `safeJsonLdReplacer` helper already exists. Stop putting unmoderated visitor reviews into schema. Check the Firestore rules for `blogs/*/reviews`. | Exception? (security; no visible change) | `src/app/resources/[slug]/page.tsx:808-828`, `src/lib/blogs.ts:383` |
| 2 | Give the 1,591 credit-card issuer pages a crawl path. Add `/credit-card-settlement` and the 43 issuer URLs to the HTML `/sitemap` page. | Allowed (owner rule 2) | HTML sitemap page |
| 3 | Build a new lane-#1 page: a credit-card issuer directory linking all 43 issuers. Link it from the footer (end of the array), the homepage and existing credit-card pages. | Allowed | new page |
| 4 | Remove the placeholder `+91-XXXX…` phones (94 files) and the 22 fake "CredSettle {State}" LocalBusiness nodes. | Exception? (legal/trust; schema only, no visible copy) | state page files, root-article components |
| 5 | Reconcile "no upfront fees" (36+ crawled pages) with the T&C ("execution only after … the agreed payment"; "non-refundable once work begins"). Get legal sign-off first. | Owner, urgent (legal) | sitewide copy, `/terms-and-conditions` |
| 6 | Decide what happens to the about 2,600 name-swap pages: issuer × state, service × state, lender name-swaps, and the 1,500 city pages. Options: keep as they are / noindex the weakest / consolidate. Measure first (see High 11). | Owner | `/credit-card-settlement/*/*`, `/services/*/*`, `/loan-settlement-by-city/*` |
| 7 | Stop the synonym-swap and comma-split readability process for all new work (Mistake 54). Repairing the about 80 garbled existing pages is a bug fix to restore the original wording. | Allowed (process) / Owner (repairs) | `mistakes.md` 16/34/51, `improveTextReadability()` |

## High: within 1 week

| # | Fix | Tag | Where |
|---|---|---|---|
| 8 | Return `notFound()` for unknown slugs in the catch-all routes. Keep every slug that is in the sitemap, BanksGrid or the alias maps, so no listed or linked URL changes. | Exception? (blocks junk pages; real pages untouched) | `credit-card-settlement/[slug]/page.tsx:254-256`, `services/*/banks/[bank]`, `services/{app,business,car,nbfc}-loan-settlement/[state]` |
| 9 | Remove AggregateRating, review-count and Product markup that isn't visible on the page. Pick one sourced proof figure (e.g. a link to the live Google Business Profile) and use it everywhere. New pages: no rating schema (already a rule). | Owner | cc hub, resources, root articles |
| 10 | Fix the XML sitemap route:<br>• dedupe 28 entries<br>• drop the 2 URLs returning 404 and the 4 returning 308<br>• add the 13 real lender pages (business/car × au-small-fin-bank-ltd, csb-bank, northern-arc-bank, dmi-finance-pvt-ltd, north-east-small-finance-bank, smfg; cc × dmi-finance-pvt-ltd)<br>• real lastmod instead of `'2026-11-09'` / `'2026-10-15'`<br>Do **not** add the 40 mainstream-bank "app loan" pages. | Allowed | `src/app/sitemap.xml/route.ts` |
| 11 | Split the sitemap into an index by section (cc issuers, cc issuer × state, services, lenders, resources, articles, new lane pages). Search Console then shows per-template indexing, which is the data needed for decision 6. | Allowed | sitemap route |
| 12 | Add the 184 unlinked `/resources/*` and the cc/NBFC services lender and state pages to the HTML `/sitemap`. Leave out personal-loan pages, which are SettleLoans' lane. | Allowed | HTML sitemap page |
| 13 | New "How we charge" page: fee basis, when it's payable, refunds, matching the signed agreement. Link it from footer and CTAs. Only publish figures the owner confirms. | Allowed (new page) | new page |
| 14 | New team / editorial-policy page: named advocates with enrolment numbers, who writes, who reviews, how facts are dated. New pages get a real byline and reviewer. | Allowed (new page) | new pages |
| 15 | Article hero: drop `unoptimized`, serve WebP/AVIF at the real 1024×1024 size, and fix the declared 1200×800. | Owner (template) | `BlogPostPageClient.tsx:1377-1380` |
| 16 | Homepage: add `loading="lazy"` to everything below the hero and keep a single `fetchpriority="high"` LCP image. That removes the 65-image preload storm. | Owner | homepage components (`Settlements`, `BanksGrid`, `Services`) |

## Medium: within 1 month

| # | Fix | Tag |
|---|---|---|
| 17 | Vercel → Domains: `credsettle.com` → www as a **permanent** 308 (now 307). Remove the http-apex double hop. | Allowed (infra) |
| 18 | Load reCAPTCHA only on form focus or submit, not app-wide (353 KB on every page). Lazy-load the Firebase client on article pages, only when the review form opens. | Owner |
| 19 | Replace the render-blocking Font Awesome CDN stylesheet with `lucide-react` (already a dependency) or a self-hosted subset. Trim the 273 KB global CSS. | Owner |
| 20 | Stop prefetching the homepage from the navbar (`prefetch={false}` on the logo link). It pulls about 834 KB of images onto every page. | Owner |
| 21 | Make `/resources` pagination real `<a href>` links. Slim the RSC payloads on `/resources` (367 KB) and `/loan-settlement-by-city` (433 KB). | Owner |
| 22 | Fix false freshness: build-time `datePublished` on about 830 pages, one shared date on about 1,591 cc pages. New pages: fixed publish date, and dateModified only on real edits. | Owner / Allowed (new) |
| 23 | Publish `/llms.txt` listing lane hubs, the fee page, the team page and the best-sourced explainers. | Allowed |
| 24 | New-page format for AI citation:<br>• a 40–60-word direct answer under the H1<br>• question H2s<br>• a dated "status check" line<br>• circular number plus an rbi.org.in link<br>• one comparison table<br>• a CIBIL "Settled" impact box | Allowed |
| 25 | Keep a central facts register (circular numbers, dates, thresholds) for new pages. Three different circulars are cited today for the ₹100/day rule. | Allowed |
| 26 | Add the RUM tool `@vercel/speed-insights` and a CrUX API key so the next audit has field data. | Allowed (infra) |
| 27 | Mobile: first CTA within the first screen on issuer and calculator pages, hamburger tap target ≥44 px, auto-hide the WhatsApp tooltip. | Owner |

## Low: backlog

| # | Fix | Tag |
|---|---|---|
| 28 | Headers: Permissions-Policy, `poweredByHeader: false`, HSTS `includeSubDomains`, `/.well-known/security.txt`. | Allowed |
| 29 | Title, meta and H1 limit breaches on 4 tool pages and 8 H1s (list in report §On-page). | Owner |
| 30 | og:image on 82% of pages; og:url inheriting the homepage on 34 pages. New pages: set both. | Owner / Allowed (new) |
| 31 | Fix the broken link on `/resources/sbi-card-hdfc-icici-axis-credit-card-lok-adalat-settlement-guide`, plus 4 `http://` self-links and the `/services/loan-settlement` → 308 link. | Owner |
| 32 | AI training-bot policy (GPTBot, CCBot, Google-Extended…). Keep search and retrieval bots allowed. | Owner |
| 33 | Masterclass stats band server-renders "0.0/5 · ₹0Cr+ · 0+ · 0%" before the animation runs. | Owner |
| 34 | Single Organization `@id` and consistent name/phone/address on new pages. Footer © 2020 vs founded 2021. | Allowed (new) / Owner |

## Suggested order for this week
1. #1 (XSS escaping) and #8 (catch-all 404s), once you OK the exception. Both are small code changes with no visible page change.
2. #2, #10, #11, #12 (HTML and XML sitemap work). All allowed, and they unlock crawl paths and Search Console data.
3. #3 (issuer directory) as the next lane-#1 page in the Wave 1 roadmap.
4. #5 and #13 (fee wording and fee page) with legal.
5. Decide #6 and #9 once the split sitemap shows per-template indexing for 2–3 weeks.
