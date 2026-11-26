# Score roadmap: what moves each audit score (26 Nov 2026)

Companion to `ACTION-PLAN.md`. The plan is ordered by urgency; this file is ordered by category, so you can see what lifts each score.

**Tags:**
- **[Allowed]:** fine under the freeze.
- **[Owner]:** touches existing (frozen) pages or shared templates, so it needs the owner's OK.

**About the point gains:** they are estimates against the audit rubric, not ranking promises. In real search terms, the biggest levers are content trust, the scaled name-swap pages, and giving the credit-card issuer pages a crawl path.

## Status after the 26 Nov batches (verified locally; committed on branch `seo/audit-fixes-2026-11-26`; not deployed)

The owner approved four batches: freeze-safe, schema clean-up, speed and images, and restoring garbled text. All four are done. Every item is logged in `issues/seo_change_log.md`.

| Category | Weight | Audit | Estimated now | What moved it | Still open |
|---|---|---|---|---|---|
| Technical | 25% | 63 | **~81** | soft-404 fix, HTML sitemap paths to issuer pages and articles, issuer directory page, sitemap index with real dates, headers | Vercel 308, `/resources` pagination links, hub grids, RSC payloads |
| Content | 25% | 31 | **~42** | garbled wording restored on 339 files + all articles | team/editorial page, fee page, "no upfront fees" wording, name-swap pages, cannibalisation, persona authors |
| On-page | 20% | 62 | **~69** | ~520 new internal links (HTML sitemap) + issuer directory | default og:image, 4 tool titles/metas, 8 long H1s |
| Schema | 10% | 36 | **~65** | no rating/review/Product markup, honest state nodes, real phone, privacy schema fixed, safe serialiser | one Organization/NAP (314 files still say New Delhi, 19 use other phones), build-time dates, client-injected schema |
| Performance | 10% | 64 | **~85** (lab estimate) | article hero optimised, 65 homepage images lazy, reCAPTCHA on demand, Font Awesome on 6 templates only, Firebase on demand | blog list cache over 2 MB never stores; field data still unmeasured |
| Images | 5% | 60 | **~85** | hero + CMS-embedded Firebase PNGs via next/image | default og:image |
| AI search readiness | 5% | 33 | **~47** | /llms.txt, readable restored text, honest schema | direct-answer intros, facts register, team page |
| **Overall** | | **51** | **~66** | | |

Re-measure after deploy: re-run `/seo-audit`, check PageSpeed field data after 28 days, and watch per-section indexing in Search Console now that the sitemap is split.

## Where the scores land (original roadmap)

| Category | Weight | Audit | After today's fixes | + all [Allowed] | + [Owner] items |
|---|---|---|---|---|---|
| Technical | 25% | 63 | 67 | 80 | 90 |
| Content | 25% | 31 | 31 | 45 | 78 |
| On-page | 20% | 62 | 62 | 71 | 85 |
| Schema | 10% | 36 | 39 | 41 | 85 |
| Performance | 10% | 64 | 64 | 64 | 90 |
| Images | 5% | 60 | 60 | 62 | 90 |
| AI search readiness | 5% | 33 | 33 | 58 | 80 |
| **Overall** | | **51** | **52** | **62** | **85** |

The [Allowed] column tops out around 62: most of what holds the score down lives on the frozen pages. Reaching 80+ needs owner decisions on existing pages, especially content and schema.

## Done today (26 Nov, uncommitted; see `issues/seo_change_log.md`)

1. **XSS / schema injection on `/resources/*`.**
   - All 5 JSON-LD blocks now go through `serializeJsonLd()` (`src/lib/json-ld.ts`).
   - Visitor review fields are type-checked and the rating is clamped to 1–5.
   - This also fixes the old FAQ escaper, which made Google read the literal text `&` instead of `&`.
2. **Made-up URLs now return 404.**
   - Covers `/credit-card-settlement/<x>`, the six `/services/*/banks/<x>` routes, and the `/services/{app,business,car,nbfc}-loan-settlement/<x>` routes.
   - Verified locally: 950 real sitemap and linked URLs answer exactly as they do live; 14 made-up slugs return 404.

---

## Technical: 63 → 90

| Change | Tag | Est. gain |
|---|---|---|
| ✅ Made-up slugs return 404 (done) | Exception approved | +4 |
| Add `/credit-card-settlement` and the 43 issuer pages to the HTML `/sitemap` page | Allowed | +4 |
| Add the 184 unlinked `/resources/*` and the cc/NBFC lender and state pages to the HTML `/sitemap` (skip personal-loan pages, which are SettleLoans' lane) | Allowed | +3 |
| New issuer-directory page linking all 43 issuers, linked from footer (end of array), homepage and cc pages | Allowed | +2 |
| XML sitemap route:<br>• dedupe 28<br>• drop 2×404 + 4×308<br>• add the 13 real lender pages<br>• real lastmod (replace `route.ts:405-406` constants)<br>• split into a sitemap index by section | Allowed | +3 |
| Vercel: apex → www permanent 308 (now 307) | Allowed | +1 |
| Headers: Permissions-Policy, `poweredByHeader: false`, HSTS includeSubDomains, `security.txt` | Allowed | +2 |
| `/resources` pagination as real `<a href>` links | Owner | +3 |
| Issuer grid on `/credit-card-settlement`; BanksGrid/StateGrid on the cc and NBFC service hubs | Owner | +4 |
| Fix the broken Lok Adalat link, 4 `http://` self-links, and the `/services/loan-settlement` 308 link | Owner | +1 |
| Slim RSC payloads (`/resources` 367 KB, `/loan-settlement-by-city` 433 KB, `/sitemap` 302 KB) | Owner | +2 |

## Content: 31 → 78

| Change | Tag | Est. gain |
|---|---|---|
| Stop the synonym-swap / comma-split readability process for new work (Mistake 54, logged) | Allowed | protects new pages |
| New **team / editorial-policy** page: named advocates, enrolment numbers, who reviews, how facts are dated | Allowed | +5 |
| New **"How we charge"** page matching the signed agreement (owner-confirmed figures only); link from footer and CTAs | Allowed | +4 |
| Every new lane page: named author and reviewer, "reviewed on" date, sourced circulars, no unverifiable stats | Allowed | +3 |
| Central facts register (circular numbers, dates, thresholds) used by new pages | Allowed | +2 |
| Repair the ~80 garbled pages (restore original wording; start with the 8 `/services/` hubs) | Owner | +8 |
| Reconcile "no upfront fees" (36+ pages) with the T&C; one sourced set of company stats everywhere | Owner (legal) | +6 |
| Decide the ~2,600 name-swap pages (issuer×state, service×state, lender swaps) and 1,500 city pages: keep, noindex the weakest, or consolidate | Owner | +10 |
| Consolidate cannibalising clusters (HDFC card: 41 URLs; harassment ~18; "best company" ~15) by choosing a primary per intent | Owner | +4 |
| Replace persona bylines ("Rahul Verma", ~1,592 pages) with real authors; remove the templated case study | Owner | +4 |

## On-page: 62 → 85

| Change | Tag | Est. gain |
|---|---|---|
| Internal links from existing pages to new lane pages (≥3 each, per plan §4) | Allowed | +4 |
| HTML-sitemap entries (above) also count toward the internal-link gaps here | Allowed | +4 |
| New pages: set og:image and og:url = canonical | Allowed | +1 |
| Site-wide default og:image in the root layout (82% of pages have none) | Owner | +6 |
| Fix the 4 tool pages over the title/meta limits and the 8 H1s over 65 chars | Owner | +3 |
| og:url inheriting the homepage on 34 pages | Owner | +2 |
| One primary URL per issuer intent; point internal links at it | Owner | +5 |

## Schema: 36 → 85

| Change | Tag | Est. gain |
|---|---|---|
| ✅ JSON-LD escaping and review sanitising (done) | Exception approved | +3 |
| New pages: Article + BreadcrumbList (+ FAQPage per plan), real author URL, fixed publish date | Allowed | +2 |
| Remove AggregateRating / Review / Product markup that isn't visible on the page (24 conflicting values) | Owner | +15 |
| Remove placeholder `+91-XXXX…` phones (94 files) and the 22 fake "CredSettle {State}" LocalBusiness nodes | Owner (recommend exception) | +10 |
| One Organization node with a stable `@id`, consistent name/phone/address, referenced site-wide | Owner | +8 |
| Real `datePublished` / `dateModified` (no build-time `new Date()`; not one shared date on 1,591 pages) | Owner | +6 |
| Server-render the homepage schema (now injected client-side); make issuer×state FAQs visible or drop them | Owner | +5 |

## Performance: 64 → 90

| Change | Tag | Est. gain |
|---|---|---|
| Install `@vercel/speed-insights` and get a CrUX API key so the next audit has field data | Allowed | measurement |
| Article hero: drop `unoptimized`, serve WebP/AVIF at the real size (`BlogPostPageClient.tsx:1377-1380`) | Owner | +8 |
| Homepage: lazy-load everything below the hero; one `fetchpriority="high"` image (removes the 65 preloads) | Owner | +6 |
| Load reCAPTCHA only on form focus or submit (353 KB on every page today) | Owner | +5 |
| Replace the render-blocking Font Awesome CDN with `lucide-react` or a self-hosted subset; trim the 273 KB CSS | Owner | +3 |
| `prefetch={false}` on the navbar logo link (pulls ~834 KB of homepage images onto every page) | Owner | +3 |
| Lazy-load the Firebase client on articles, only when the review form opens | Owner | +3 |

## Images: 60 → 90

| Change | Tag | Est. gain |
|---|---|---|
| New pages: WebP/AVIF, explicit width/height, lazy below the fold | Allowed | +2 |
| Route the 17 raw Firebase PNGs (1.1–2.6 MB) on `/resources/*` through `next/image` | Owner | +15 |
| Article hero fix and homepage lazy-loading (same as Performance) | Owner | +10 |
| Default og:image (same as On-page) | Owner | +3 |

## AI search readiness: 33 → 80

| Change | Tag | Est. gain |
|---|---|---|
| Publish `/llms.txt`: lane hubs, fee page, team page, best-sourced explainers | Allowed | +8 |
| New-page format:<br>• a 40–60-word direct answer under the H1<br>• question H2s<br>• a dated status line<br>• circular number + rbi.org.in link<br>• one table<br>• a CIBIL "Settled" box | Allowed | +8 |
| Team / editorial page and facts register (same as Content) | Allowed | +9 |
| Fix the three conflicting circulars for the ₹100/day rule and other contradictions | Owner | +6 |
| Add direct-answer intros to the top 50 traffic pages | Owner | +10 |
| Remove unverifiable stats (same as Content and Schema) | Owner | +6 |

---

## Suggested sequence

1. **This week ([Allowed] only, about +10 overall):**
   - HTML sitemap additions
   - XML sitemap fixes and split
   - Vercel 308 and headers
   - `/llms.txt`
   - Issuer-directory page
2. **Owner decision meeting.** Bring three questions:
   - Can schema clean-up (rating stars, placeholder phones, fake offices) be treated like today's exception? It changes no visible copy and removes the main manual-action risk.
   - Can the ~80 garbled pages be restored to their original wording as a bug fix?
   - What happens to the name-swap and city pages once the split sitemap shows 2–3 weeks of per-template indexing?
3. **Performance batch (Owner):** about 6 small template changes. No copy changes, so it's a natural next exception.
4. **Legal:** fee wording ("no upfront fees" vs the T&C) before any more pages repeat it.
