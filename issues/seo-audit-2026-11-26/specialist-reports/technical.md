# Technical SEO audit: https://www.credsettle.com (2026-11-26)

Scope: crawl data in `scratchpad/crawl/` (729 pages: 500 BFS + 229 sitemap sample; 3,586 unique sitemap URLs), plus targeted live requests, a Playwright rendered-vs-server comparison on 7 templates, and a read-only look at the repo source to find root causes. CWV measurement and schema validation are covered by other agents, so this report only notes source-level CWV causes and whether schema is present.

## Technical score: 63 / 100

| Category | Weight | Score | Status | One-line reason |
|---|---|---|---|---|
| 1. Crawlability | 20 | 40 | FAIL | 2,287 of 3,586 sitemap URLs (64%) have no internal link path from the homepage. The whole credit-card issuer cluster (1,591 URLs) is reachable only through the XML sitemap. |
| 2. Indexability | 20 | 55 | FAIL | Canonicals and robots are clean, but three route families return 200 + `index, follow` + self-canonical for any slug (soft-404, unbounded URL space). There are also 53 linked pages missing from the sitemap and near-duplicate templates. |
| 3. Security | 10 | 78 | PASS (with gaps) | HTTPS, HSTS (2y), nosniff, XFO, Referrer-Policy and a CSP are set, with no mixed content. Gaps: no Permissions-Policy, a weak CSP, X-Powered-By exposed, HSTS without includeSubDomains. |
| 4. URL structure | 10 | 80 | PASS (with gaps) | URLs are clean, lowercase and hyphenated, with uppercase → 301 and trailing slash → 308. Gaps: non-www is a 307, there is 1 broken internal link, and 4–5 parallel URL patterns exist per issuer intent. |
| 5. Mobile | 10 | 80 | PASS | Viewport is correct on 729/729 pages and there is no horizontal overflow. Gaps: many tap targets under 24 px, and small text on the calculator. |
| 6. Core Web Vitals (source causes) | 15 | 60 | NEEDS WORK | Font Awesome CSS from cdnjs is render-blocking on every page. The homepage has 65 image preloads. The main CSS is 273 KB raw. RSC payloads are heavy (up to 433 KB). |
| 7. Structured data (presence only) | 5 | 65 | PARTIAL | Most templates have JSON-LD. The homepage, services state pages and loan-settlement-by-bank pages have none (the schema agent covers detail). |
| 8. JavaScript rendering | 10 | 85 | PASS | Full SSR/ISR: 100% of visible text and links are in the server HTML. Two gaps: some navigation only works through JS buttons, and RSC payloads are bloated. |
| **Weighted total** | 100 | **63** | | |

Why 63: page-level hygiene is very good. That covers status codes, canonicals, robots meta, SSR, CDN caching, TTFB, link casing and mixed content. The site architecture is the weak point. Most programmatic sections exist only in the XML sitemap, and three dynamic routes will mint an indexable branded page for any string. Both problems hit lane #1 (credit card issuer × problem) hardest.

---

## 1. Crawlability: FAIL

### 1a. Credit-card issuer and issuer×state pages are an orphaned island (Critical)
- **Count:** 43 issuer pages plus 1,548 issuer×state pages, so 1,591 URLs (44% of the sitemap).
- **Inlinks from the BFS crawl:** 0 for every one of them. None of the 729 crawled pages outside the cc tree links into it. That includes the homepage, nav, footer, `/credit-card-settlement`, `/services/credit-card-settlement`, the HTML `/sitemap`, 104 root articles, 40 resources and 46 loan-settlement-by-bank pages.
- **How the island links internally:**
  - Each issuer page links to its 36 state pages (e.g. `/credit-card-settlement/hdfc` → `/credit-card-settlement/hdfc/maharashtra`).
  - Each issuer×state page links back only to its issuer and the hub. It has no sibling-state or sibling-issuer links (median 2 contextual outlinks).
  - The hub `/credit-card-settlement` links to **zero** issuer pages. Its server HTML and RSC payload contain no `/credit-card-settlement/<issuer>` string at all (34 internal links, all nav/footer plus 10 articles).
- **How the hub is reached:** only through the HTML `/sitemap` page, which gives it 1 BFS inlink at depth 2. The global nav, footer, homepage and `Services.tsx` / `CompanySection.tsx` / `CompanyProfile.tsx` all link `/services/credit-card-settlement` instead.
- **Source confirmation (read-only):** outside `src/app/credit-card-settlement/`, nothing builds `/credit-card-settlement/${slug}`. `components/StateGrid.tsx` (issuer → state) is the only grid, and it is used inside the issuer templates.
- **Why BFS never reached them:** there is no link path. Google can only discover these pages through `sitemap.xml`. With zero internal PageRank and a 0.50 median (0.69 same-issuer) near-duplicate ratio, they are prime "Discovered/Crawled – currently not indexed" candidates.

### 1b. Other sections with no crawlable path (High)
Sitemap URLs never linked from any of the 729 crawled pages, which include every hub:

| Section | In sitemap | Unlinked | Cause |
|---|---|---|---|
| `/resources/*` | 194 | 184 | The `/resources` hub shows 9 cards. Pagination "1 2 3 4 5 … 22" is `<button type="button">` with no `href`, so pages 2–22 are JS-only. Resource articles link to other resources at 0.1 per page. |
| `/services/{cc,pl,nbfc}/banks/*` | 325 | 325 | `/services/credit-card-settlement`, `/services/personal-loan-settlement` and `/services/nbfc-loan-settlement` render no BanksGrid links. Business, car and app hubs each link 120. |
| `/services/{type}/{state}` | 216 | 181 | Only `/services/app-loan-settlement` links its 36 states. The other 5 service types link none. |
| Root articles | 698 | 2 with zero links; **586 whose only BFS inlink is the HTML `/sitemap`** | Contextual cross-linking is thin: root articles have a median of 6.5 contextual links. |

- Zero-inlink root articles: `/personal-loan-balance-transfer-rejected-high-foir-exit`, `/delete-your-app-account`.
- **Total with no path from the homepage:** 2,287 / 3,586 (63.8%). Caveat: 896 discovered root/loan-settlement-by-bank pages were not crawled. The sampled 104 root and 46 loan-settlement-by-bank pages link none of these sections, so the estimate should hold.

### 1c. City pages: 1,500 live pages, 60 linked, 0 in sitemap (Medium, owner decision)
- `/loan-settlement-by-city` (global nav) server-renders 60 city links. The other 1,440 are behind a "Load more cities (1440 remaining)" button.
- All 1,500 city records (slug, name, title, description) ship in a **433 KB RSC payload** on the hub.
- Sampled city pages are all 200, self-canonical, `index, follow`, 3,300–3,465 words and ~165 KB HTML: `/loan-settlement-by-city/chandigarh`, `/tirap`, `/gurugram-sector-4`, `/noida-sector-18`.
- They are **~80% identical** (5-gram Jaccard 0.79–0.81).
- Only the hub is in `sitemap.xml`. Unknown city slugs correctly return 404.

### 1d. robots.txt: PASS
```
User-agent: *  Allow: /  Disallow: /social/ /whatsapp /authority/ /authority /api/
Sitemap: https://www.credsettle.com/sitemap.xml
```
- 0 sitemap URLs are blocked by robots.txt.
- `/social-media-…` articles are not caught by `Disallow: /social/`.
- No internal links point to disallowed paths.

### 1e. XML sitemap
- Single urlset, 3,614 `<loc>`s with 28 duplicates (27 root, 1 cc hub). 749 KB; cached with `s-maxage=3600, stale-while-revalidate=86400`.
- **lastmod is hard-coded** in `src/app/sitemap.xml/route.ts:405-406`: `const today = '2026-11-09'` and `const matrixLastMod = '2026-10-15'`.
  - 3,608 / 3,614 entries carry one of these two dates.
  - Articles published 2026-11-19 to 21 (e.g. `/resources/look-out-circular-loc-and-passport-impounding-myths-loan-default`) carry lastmod **2026-11-09**, which is earlier than their publish date.
  - Google stops trusting lastmod that isn't consistently accurate.
- 55 crawled, linked, indexable URLs are missing from it (see 2c). The 1,500 city pages are missing too (1c).
- Recent pages (all 9 on the resources hub page 1) are present, so the sitemap is not stale in coverage, only in lastmod.

### 1f. AI crawler access: PASS (no explicit policy)
- robots.txt has **no groups** for GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, OAI-SearchBot, Applebot-Extended, Bytespider or meta-externalagent. All are allowed by the `*` group, so this applies to both training and retrieval bots.
- Live test: GPTBot, ClaudeBot, PerplexityBot, CCBot, OAI-SearchBot, Googlebot and bingbot user agents each received an identical `200` / 144,120 B on `/credit-card-settlement/hdfc`. There is no edge/WAF bot blocking.
- `llms.txt` and `llms-full.txt` return 404. `.well-known/security.txt` and `ads.txt` return 404. `manifest.webmanifest` returns 200.

---

## 2. Indexability: FAIL

### 2a. Canonicals: PASS
- 729/729 pages have exactly one `<link rel=canonical>`. All are absolute `https://www.` URLs and all are self-referencing.
- The only variance is the homepage canonical `https://www.credsettle.com` (no trailing slash) for URL `/`, which is equivalent and fine.
- Pages with no canonical: 0. Relative: 0. `http`: 0. Cross-domain: 0. Pointing to another page: 0.
- Parameter URLs canonicalise correctly. 64 pages link `/tools/loan-settlement-calculator?balance=500000&percentage=45`, whose canonical is `/tools/loan-settlement-calculator`. `/?utm_source=test` has canonical `https://www.credsettle.com`.
- Robots: `index, follow` on all 729 pages (6 also carry max-snippet/max-image-preview). No X-Robots-Tag. One `<title>` and one meta description on every page.

### 2b. Soft-404 catch-all routes: unbounded indexable URL space (High)
Live tests with made-up slugs:

| URL | Status | Robots | Canonical | Title |
|---|---|---|---|---|
| `/credit-card-settlement/zz-not-a-real-issuer` | **200** | index, follow | self | "Settle Zz Not A Real Issuer Credit Card Dues \| CredSettle" |
| `/services/{app,personal,credit-card,nbfc,business,car}-loan-settlement/banks/zz-not-a-real-lender` | **200** (all 6) | index, follow | self | "Zz Not A Real Lender … Settlement \| CredSettle" |
| `/services/{app,business,car,nbfc}-loan-settlement/zz-not-a-state` | **200** (4 of 6) | index, follow | self | "… Loan Settlement in Zz Not A State \| CredSettle" |
| `/services/{personal,credit-card}-loan-settlement/zz-not-a-state` | 404 | noindex | | correct |
| `/credit-card-settlement/hdfc/zz`, `/credit-card-settlement/zz/maharashtra`, `/loan-settlement-by-bank/zz`, `/loan-settlement-by-city/zz`, `/loan-settlement/zz`, `/resources/zz`, `/zz` | 404 | noindex | | correct |

- **Root cause:**
  - `src/app/credit-card-settlement/[slug]/page.tsx:254-256`, step 4 "Fallback…: serve Tier3Template directly (HTTP 200 OK)", renders `formatSlugToBankName(slug)` for any slug.
  - `services/*/banks/[bank]/page.tsx` combines `dynamicParams = true` with `getBankContentWithFallback(bank)`.
- These garbage pages are ISR-prerendered and cached at the edge (`x-nextjs-prerender: 1`, `x-vercel-cache: HIT`).
- **Risks:**
  - Anyone can mint indexable, CredSettle-branded YMYL pages by linking to `/credit-card-settlement/<any text>`, including competitor names and abusive strings.
  - Crawl waste and ISR cache/write cost.
  - Soft-404 classification can spill over to the real Tier-3 template.

### 2c. The 55 crawled URLs missing from the sitemap
All 55 are 200, self-canonical and `index, follow`, with 1,041–1,393 words and 1 inlink each.

| Group | Count | What they are | Should they be in the sitemap? |
|---|---|---|---|
| `/services/app-loan-settlement/banks/{hdfc,icici,sbi,axis-bank,kotak-bank,yes-bank,rbl-bank,hsbc,citibank,…}` | 40 | Mainstream banks rendered through the generic fallback as "HDFC App Loan Debt Settlement Services" | **No.** They are off-intent (these banks are not app lenders) and ~66% similar to each other (hdfc vs icici 0.66; vs real app lender kreditbee 0.21). The sitemap's curated 80-slug app-lender list excludes them on purpose. They exist because `BanksGrid.tsx` builds slugs from a 120-bank name list via `generateBankSlug()`, while the sitemap uses `getBankSlugsForService()`. |
| `/services/{business,car}-loan-settlement/banks/{au-small-fin-bank-ltd,csb-bank,northern-arc-bank,dmi-finance-pvt-ltd,north-east-small-finance-bank,smfg}` plus `/services/credit-card-settlement/banks/dmi-finance-pvt-ltd` | 13 | Real lender pages whose slugs are missing from the sitemap list. No alias of them exists in the sitemap. | **Yes**, they can be added. Within-template similarity is 0.68 (csb vs smfg), in line with the rest of the matrix. The cc one is linked only from `/services`. |
| `/services/app-loan-settlement/dadra-and-nagar-haveli-and-daman-and-diu` | 1 | Duplicate of sitemap URL `/services/app-loan-settlement/dadra-nagar-haveli-daman-diu`. Both are 200 and self-canonical. The hub links the long slug and the sitemap lists the short one. | **No.** Consolidating this pair is an owner decision. |
| `/sitemap` (HTML sitemap) | 1 | Utility page | Optional |

Linked but not crawled and not in the sitemap: 60 city pages (1c), 4 infographic JPGs linked as `<a>` (fine), `/services/loan-settlement` (308 to `/loan-settlement`), and the broken link in 4c.

### 2d. Near-duplicate and cannibalising templates (for context; content agent owns detail)
- loan-settlement-by-bank median 0.87; city pages ~0.80; cc issuer×state median 0.50.
- One issuer intent is spread across 4–5 self-canonical URLs. For "HDFC credit card settlement":
  - `/credit-card-settlement-hdfc` (10,006 words, root)
  - `/credit-card-settlement/hdfc` (667 words, orphan)
  - `/services/credit-card-settlement/banks/hdfc` (936 words, orphan)
  - two `/resources/hdfc-…` articles
- Their text overlap is about 0, but they compete for one head term. Internal links don't signal a primary.

---

## 3. Security: PASS with gaps
- HTTPS everywhere. `http://www` → 308 to https.
- HSTS `max-age=63072000`, but **no `includeSubDomains` and no `preload`**.
- CSP is present (`vercel.json`) but allows `'unsafe-inline' 'unsafe-eval'` and any `https:` script source, so it adds little XSS protection.
- `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff` and `Referrer-Policy: strict-origin-when-cross-origin` are all set.
- **No `Permissions-Policy`.**
- **`X-Powered-By: Next.js` is exposed.** Set `poweredByHeader: false` in `next.config.ts`.
- Mixed content: **0** `http://` sub-resources (img, script, stylesheet, iframe, source) across 729 pages.
- Of 3,415 external `target=_blank` links, 0 lack `rel=noopener/noreferrer`.
- `access-control-allow-origin: *` appears only on static robots.txt, which is harmless.
- No `security.txt`.

## 4. URL structure and redirects: PASS with gaps
- 3,586 sitemap URLs are all lowercase, hyphenated and `https://www.`. None have a query string or underscore. Maximum length is 115 characters.
- 0 uppercase internal links and 0 trailing-slash internal links. `/About` → **301** `/about`; `/about/` → **308** `/about`.
- **Non-www is a 307 (temporary):**
  - `https://credsettle.com/*` → 307 → `https://www.credsettle.com/*`. This is path-preserving, e.g. `/credit-card-settlement/hdfc`.
  - `http://credsettle.com/` → 308 → `https://credsettle.com/` → 307 → www, a 2-hop chain.
  - This is a Vercel domain setting, not `next.config` or middleware. Set apex → www as a permanent (308) redirect in Vercel → Domains.
- Internal links to redirects or errors (4c):
  - `/tools/debt-repayment-planner` links `/services/loan-settlement` (308 → `/loan-settlement`).
  - 4 resources link `http://www.credsettle.com/` (308): `/resources/loan-settlement-company-india`, `/resources/aggressive-debt-collectors-know-your-rights`, `/resources/home-credit-loan-settlement-in-india-a-complete-legal-guide`, `/resources/debt-settlement-made-easy-a-step-by-step-guide-to-financial-freedom`.
- **1 broken internal link:** `/resources/sbi-card-hdfc-icici-axis-credit-card-lok-adalat-settlement-guide` → `/understand-dashboard-for-managing-lok-adalat-notices-for-loan-settlement`, which returns **404**.
- The alias handling works: e.g. `/credit-card-settlement/hdfc-bank-credit-card` → 308 `/credit-card-settlement/hdfc`.

## 5. Mobile: PASS
- `<meta name="viewport" content="width=device-width, initial-scale=1">` on 729/729 pages. `lang="en"` on 729/729.
- No hreflang. That is correct for a single-language site, and owner rule 5 says "no language/geo split". Defer hreflang to `seo-hreflang` only if that changes.
- From the visual agent's Playwright metrics (`reports/metrics.json`, 6 templates at 390 px):
  - No horizontal overflow. Body text is 16 px.
  - 27–37 interactive targets per page are under 24 px, mostly 24 px-tall nav and footer links.
  - The calculator (`/tools/credit-card-interest-calculator`) has 37 text elements under 12 px.
  - The fixed WhatsApp widget covers 6.2% of the mobile viewport.
  - Every mobile run logs a 401 resource error.
- `/bank-recovery-agent-harassment-rules-in-hindi` is titled "(Hindi)" but contains 0 Devanagari characters, so its `lang="en"` is accurate. The page's intent is mismatched (passed to the content agent).

## 6. Core Web Vitals: source-level causes only
- **Render-blocking third-party CSS on 729/729 pages:** `cdnjs.cloudflare.com/…/font-awesome/6.5.1/css/all.min.css`, 102 KB plus webfont fetches, on a separate origin with no preconnect. It serves about 70 distinct icons, the top ones being `fa-linkedin`, `fa-facebook`, `fa-instagram`, `fa-whatsapp` (footer), `fa-chevron-down` and `fa-check`. It hurts LCP/FCP on every template.
- **Main stylesheet** `3f5fe52d9fc642c7.css` is 273 KB raw / 34 KB brotli and render-blocking on all pages. That points to untrimmed global CSS: Tailwind content config, `@splidejs/react-splide/css` and similar imports.
- **Homepage preload storm:**
  - 65 `<link rel=preload as=image>` in `<head>` cover bank logos, why/service/about/guideline images and media logos. They compete with the LCP resource.
  - 131 `<img>`, only 3 with `loading=lazy`, and none with `fetchpriority=high`.
  - The cause is `priority` (or `preload`) on carousel and grid `next/image` instances (`Settlements`/`BanksGrid`/`Services`).
  - `/services` has 9 preloads and 66 images, all eager.
- **RSC (`self.__next_f`) payload, median per page** (inline bytes; ratio is RSC bytes to visible text bytes):

| Template | HTML | RSC | RSC as % of HTML | RSC ÷ visible text |
|---|---|---|---|---|
| services lender (362) | 89 KB | 38 KB | 43% | 5.5× |
| root article (104) | 119 KB | 46 KB | 39% | 2.6× |
| cc issuer×state (60) | 90 KB | 53 KB | 59% | 12.9× |
| cc issuer (43) | 142 KB | 83 KB | 58% | 12.6× |
| loan-settlement-by-bank (46) | 191 KB | 108 KB | 56% | 4.1× |
| resources (40) | 188 KB | 76 KB | 40% | 3.4× |
| homepage | 278 KB | 117 KB | 42% | 10.9× |
| **`/resources` hub** | 423 KB | **367 KB** | 87% | **126×** (ships the full article bodies of the 9 listed cards) |
| **`/loan-settlement-by-city`** | n/a | **433 KB** | n/a | all 1,500 city records to render 60 |
| `/sitemap` (HTML) | **541 KB** | 302 KB | n/a | n/a |
| `/loan-settlement-by-bank` hub | 308 KB | 183 KB | 59% | 31.6× |

  Overall median is 90 KB HTML and 39 KB RSC; 5 pages exceed 300 KB. This adds parse and hydration cost, which hurts INP on low-end Android, and wastes crawl bytes.
- Third-party: the Facebook Pixel is inline on all pages (`connect.facebook.net`). There are 13–18 async Next.js chunks per page. No synchronous head scripts: the one `nomodule` polyfill is ignored by modern browsers.
- Positive: every sampled template is prerendered (`x-nextjs-prerender: 1`) and served from the Vercel edge (`HIT`). Server p50 is 154 ms.

## 7. Structured data: presence only
- JSON-LD is present on cc issuer and issuer×state pages, the cc hub, resources and service lender pages.
- **None** on the homepage (no Organization/WebSite), services state pages, loan-settlement-by-bank pages or the services index.
- 0 JSON-LD parse errors. The cc hub uses Product + Review + Rating, which the schema agent should review against the no-review-schema guidance.

## 8. JavaScript rendering: PASS
- Playwright (desktop Chrome UA) compared rendered `document.body.innerText` with the server HTML on 7 templates: home, cc issuer, cc issuer×state, services lender, root article, `/resources` and `/loan-settlement-by-city`.
- **100% of rendered text lines (≥5 words) are present in the raw server HTML**, using punctuation-insensitive matching. The internal `<a href>` sets are **identical** between server and rendered DOM on all 7 (0 client-only links).
- The homepage server HTML has more words than the rendered page (1,759 vs 1,207) because of hidden variants and accordions. That is fine.
- The only JS dependency is interaction-gated navigation, which Googlebot never clicks:
  - resources pagination (`<button>`, 22 pages)
  - city "Load more" (1,440 cities)
  - possibly BanksGrid "show more"
- The content exists, but the links to it don't exist as `<a href>` until a user clicks.

---

## Prioritised fixes

Tag key (from AGENTS.md and LEAD_DIFFERENTIATION_PLAN §2):
- **[ALLOWED]**: allowed under the freeze. This covers new pages, links from existing pages to new pages, new XML/HTML sitemap entries, and infrastructure or header settings that change no page.
- **[OWNER]**: needs owner decision because it touches frozen pages or route code.

### Critical
1. **Give the 1,591 credit-card issuer and issuer×state pages a crawl path.**
   - [ALLOWED] Add `/credit-card-settlement` plus the 43 issuer URLs to the HTML `/sitemap`. That page is in the global footer at depth 1, and the plan explicitly allows "adding new URLs to the … HTML sitemap". This alone puts the issuers at depth 3 and the states at depth 4.
   - [ALLOWED] Build one **new** lane-A page: a credit-card-by-issuer directory (e.g. issuer × problem index), linking all 43 issuer pages. Then link to it from existing pages: footer link array (at the END), homepage, `/services/credit-card-settlement`, and the root `/credit-card-settlement-<bank>` articles. Follow the plan's new-page standards (no AggregateRating, sourced facts, ₹3L funnel).
   - [OWNER] Add an issuer grid to `/credit-card-settlement` and `/services/credit-card-settlement`. Add sibling-state links on issuer×state pages, or keep them de-emphasised given 0.50–0.69 similarity. Decide which URL is the primary for each issuer (`/credit-card-settlement/<bank>` vs `/credit-card-settlement-<bank>` vs `/services/credit-card-settlement/banks/<bank>`) and point new-page links at that one.

### High
2. **Close the soft-404 catch-alls (2b).** [OWNER] This edits frozen route code, but scoped correctly it changes no listed or linked URL.
   - In `credit-card-settlement/[slug]/page.tsx`, replace step 4 with `notFound()` unless the slug is in `creditCardBanks`.
   - In `services/*/banks/[bank]` and `services/{app,business,car,nbfc}-loan-settlement/[state]`, call `notFound()` when the slug is in none of: the sitemap list, the BanksGrid-generated list (keeps the 53 currently linked URLs live), the alias maps, or the state list.
   - Verify afterwards: `/…/zz-not-a-real-lender` returns 404.
3. **Make resources crawlable (1b).**
   - [ALLOWED] Add all 194 `/resources/*` URLs to the HTML `/sitemap`. Have every new page link 2–3 related resources.
   - [OWNER] Turn the `/resources` pagination buttons into `<a href="/resources?page=N">` (or `/resources/page/N`) with self-canonicals.
   - [OWNER] Slim the hub's RSC props to card fields only.
4. **Link the services matrix (1b).**
   - [ALLOWED] HTML-sitemap entries for the 114 cc lender, 36 cc state and NBFC/app-lender pages. These fit lanes A and C.
   - [ALLOWED] New lane pages can link the relevant lender pages.
   - [OWNER] Add BanksGrid/StateGrid to the cc and NBFC service landing pages.
   - Do **not** promote the 116 PL lender and 36 PL state pages. "<bank> personal loan" is SettleLoans' lane per plan §3.

### Medium
5. **Non-www 307 → 308.** [ALLOWED] Infrastructure setting. In Vercel → Domains, set `credsettle.com` to redirect permanently to `www.credsettle.com`. It changes no page URL, content or indexability. It corrects the type of an existing host redirect rather than adding one, but tell the owner because rule 1 mentions redirects. If possible also remove the http-apex double hop.
6. **Accurate sitemap lastmod.** [ALLOWED] Sitemap metadata only. Replace the hard-coded `today = '2026-11-09'` / `matrixLastMod = '2026-10-15'` in `src/app/sitemap.xml/route.ts` with per-URL dates (content `publishedAt`/`updatedAt` or the file's git commit date), or omit lastmod where unknown. Also dedupe the 28 duplicate `<loc>`s.
7. **Add the 13 real lender pages to the XML sitemap (2c).** [ALLOWED]
   - Add: business/car × {au-small-fin-bank-ltd, csb-bank, northern-arc-bank, dmi-finance-pvt-ltd, north-east-small-finance-bank, smfg} and `/services/credit-card-settlement/banks/dmi-finance-pvt-ltd`.
   - Do **not** add the 40 `/services/app-loan-settlement/banks/<mainstream bank>` pages or the DNH long-slug duplicate.
   - [OWNER] Decide whether BanksGrid on the app-loan hub should stop linking mainstream banks, and how to consolidate the DNH pair.
8. **City pages (1c).** [OWNER] Do not blanket-add 1,500 pages at ~80% similarity to the sitemap. That is a doorway/scaled-content risk in YMYL. Options:
   - (a) status quo
   - (b) add a curated subset that has genuinely local content
   - Either way, stop shipping all 1,500 records in the hub's 433 KB RSC payload.
9. **Render-blocking Font Awesome on every page.** [OWNER] Site-wide layout change with no content change. Replace it with inline SVGs or `lucide-react` (already a dependency) for the ~70 icons, or self-host a subset with `font-display: swap`. If kept short-term, add `preconnect` to cdnjs.
10. **Homepage image preloads.** [OWNER] Perf-only change on an existing page. Remove `priority` from all but the hero/LCP image. Let logo marquees and lower sections lazy-load. Add `fetchpriority="high"` to the LCP image.
11. **CSS weight.** [OWNER] Audit the 273 KB global stylesheet: Tailwind `content` globs, carousel CSS imported globally, unused utilities.
12. **RSC payload bloat.** [OWNER] Keep static article/template content in Server Components, and pass only the props that client components need. Targets: cc issuer pages (83 KB RSC for 6.5 KB text), `/resources`, `/loan-settlement-by-city`, `/loan-settlement-by-bank`, `/sitemap`, homepage.
13. **Internal link fixes (4).** [OWNER] Edits to existing pages.
    - Remove or replace the 404 link on `/resources/sbi-card-hdfc-icici-axis-credit-card-lok-adalat-settlement-guide`. Do **not** create a page at the 404 URL: Lok Adalat is AMA's lane.
    - Point `/tools/debt-repayment-planner` at `/loan-settlement`.
    - Change `http://www.credsettle.com/` to `https://www.` on the 4 resources.

### Low
14. **Security headers.** [ALLOWED] Header config only.
    - Add `Permissions-Policy` (e.g. `camera=(), microphone=(), geolocation=(), interest-cohort=()`).
    - Set `poweredByHeader: false`.
    - Add `includeSubDomains` to HSTS (then `preload`, after confirming every subdomain is HTTPS).
    - Plan a nonce-based CSP that drops `'unsafe-eval'` in production.
    - Add `/.well-known/security.txt`.
15. **AI crawler policy.**
    - [ALLOWED] Publish `/llms.txt`, a new file listing lane hubs and key issuer and OTS pages.
    - [OWNER] Decide whether to keep allowing training crawlers (GPTBot, ClaudeBot, CCBot, Google-Extended, Applebot-Extended, Bytespider, meta-externalagent). Keep retrieval/search agents allowed (OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, Claude-SearchBot, Claude-User), since they drive citations and leads.
16. **og:url inherits the homepage on 34 pages** (32 root articles, `/credit-card-settlement`, `/loan-settlement-by-city`, `/sitemap`, author). 38 pages have no og:url. [OWNER] Metadata on existing pages. New pages should set og:url = canonical [ALLOWED].
17. **Mobile polish.** [OWNER] Raise nav/footer tap targets to ≥24 px (ideally 44–48 px). Fix the sub-12 px calculator labels. Consider collapsing the WhatsApp widget on scroll.
18. **Homepage has no Organization/WebSite JSON-LD.** [OWNER] Schema agent owns this.

### Out-of-scope observation (for the content agent)
The `/credit-card-settlement` hub body reads as synonym-spun text, live in the server HTML. Examples: "In 2026. Indian banks reported…", "Yet. Navigating a credit card closure is a by law binding process", with "closure" standing in for "settlement" and "money" for "financial". For a YMYL hub that sits at the top of the lane-#1 cluster, this is a quality risk. Fixing it would be a rewrite, so it is [OWNER].

---

## Method and evidence files
- Scripts (all under `scratchpad/tools/tech/`):
  - `load.py`: loaders and template classifier
  - `canon.py`: canonicals
  - `graph.py`, `depth.py`: link graph, BFS depth, unlinked sitemap URLs
  - `payload.py`: RSC, visible text, JS/CSS per page
  - `headscan.py`: preloads, Font Awesome, mixed content, noopener, third-party
  - `render_cmp.py`: Playwright server vs rendered comparison
  - `live.py`: targeted live status/canonical/robots checks
  - `neardup2.py`: 5-gram Jaccard
- Intermediate outputs: `scratchpad/tools/tech/depth_out.json`, `scratchpad/tools/tech/payload_rows.json`.
- Live requests used a generic UA. Roughly 45 targeted URLs were checked; no re-crawl was done.
- The repo was read only, never modified.
