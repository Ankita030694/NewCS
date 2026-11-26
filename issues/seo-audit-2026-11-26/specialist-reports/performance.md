# CredSettle: Core Web Vitals and Page-Load Performance Audit

- **Site:** https://www.credsettle.com (Next.js 16.0.8, React 19.2.1, Vercel; HTML served from the `bom1` Mumbai edge, `x-vercel-cache: HIT` on all 8 URLs)
- **Date of measurement:** 2026-11-26, 13:15 to 13:40 local time
- **Metrics:** LCP, INP, CLS. Lab tests can't measure INP, so it is approximated with TBT and Event Timing durations of real taps.
- **Overall Performance score: 64 / 100.** See section 5 for the reasoning. This is not a Lighthouse score.

---

## 0. Data provenance: what is field, what is lab, and what could not be measured

| Source | Status | Notes |
|---|---|---|
| **Field: CrUX via PageSpeed Insights API (keyless)** | **NOT AVAILABLE** | 4 attempts between 13:15 and 13:38, spaced about 10 min apart (mobile and desktop), all returned `HTTP 429 RESOURCE_EXHAUSTED: Quota exceeded for quota metric 'Queries' and limit 'Queries per day'`. This is the shared quota for keyless requests, so it won't reset until the daily quota window rolls over. |
| **Field: CrUX API** | **NOT AVAILABLE** | Needs an API key (`403` without one). No key was found in the environment, and I did not look through the project's secrets for one. |
| **Field: first-party RUM** | **Does not exist** | `@vercel/analytics` (page views) is installed. `@vercel/speed-insights` and any `web-vitals` reporting are **not**, so the site doesn't collect its own LCP/INP/CLS. |
| **Lab A: Lighthouse 13.6.0 CLI** (same engine family as PSI) | Done | Run locally in headless Chrome with **simulated** (Lantern) throttling: mobile = Moto G Power profile, 4x CPU, 150 ms RTT, 1.6 Mbps. Desktop preset for desktop. **3 runs per URL per form factor; medians reported.** Performance category only. |
| **Lab B: Playwright + Chromium, applied throttling** | Done | 412x915 viewport, DPR 2.625, touch, Android UA. CDP `Emulation.setCPUThrottlingRate=4` and `Network.emulateNetworkConditions` (150 ms latency, 1.6 Mbps down, 750 kbps up). Cache disabled. 2 runs per URL. Measured with PerformanceObserver (LCP, layout-shift, longtask, event timing). After load the script waits 8 s, scrolls the full page, taps the menu toggle and a CTA, and on the tool page types into the input. |
| **Lab C: A/B contention test** | Done | Homepage and issuer page under the Lab B throttling, run three ways: unmodified, non-logo images blocked, and cdnjs (Font Awesome) blocked. |

**Every CWV number in this report is lab data. No CrUX p75 values exist here, so I can't say whether the origin passes CWV.** Lab results are a diagnostic, not a pass/fail verdict.

Why Lab A and Lab B disagree: Lighthouse's simulated throttling builds the LCP estimate from the critical dependency graph only. It does **not** model bandwidth taken by low-priority requests such as dozens of preloaded images or route prefetches. Lab B applies real throttling, so that contention shows up. Contention is the main problem on the homepage and the article template, which is why both lab views are reported.

---

## 1. Per-URL results

### 1a. Lighthouse 13.6.0 (Lab A, simulated throttling): median of 3 runs [individual run scores]

| # | Template | URL | LH mobile score | LH mob LCP | LH mob TBT | LH mob CLS | LH desktop score | LH desk LCP | LH desk TBT | LH desk CLS |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | home | / | 98 [93, 98, 99] | 1.13 s | 116 ms | 0.000 | 100 [100, 100, 100] | 0.35 s | 0 ms | 0.001 |
| 2 | hub | /credit-card-settlement | 98 [75, 98, 99] | 1.10 s | 134 ms | 0.000 | 100 [100, 100, 100] | 0.33 s | 0 ms | 0.000 |
| 3 | issuer | /credit-card-settlement/hdfc | 99 [98, 99, 99] | 1.10 s | 121 ms | 0.000 | 100 [100, 100, 100] | 0.32 s | 0 ms | 0.004 |
| 4 | issuer_state | /credit-card-settlement/hdfc/maharashtra | 99 [99, 96, 99] | 1.10 s | 124 ms | 0.000 | 100 [100, 100, 100] | 0.33 s | 0 ms | 0.004 |
| 5 | service_state | /services/personal-loan-settlement/karnataka | 93 [92, 93, 93] | 3.14 s | 102 ms | 0.000 | 100 [100, 100, 100] | 0.70 s | 0 ms | 0.006 |
| 6 | lender | /loan-settlement-by-bank/aditya-birla-fin | 98 [66, 98, 98] | 1.56 s | 113 ms | 0.009 | 100 [100, 100, 100] | 0.32 s | 0 ms | 0.000 |
| 7 | article | /resources/2026-debt-settlement-masterclass | 73 [57, 73, 74] | 5.03 s | 191 ms | 0.000 | 72 [71, 72, 72] | 4.63 s | 0 ms | 0.102 |
| 8 | tool | /tools/credit-card-interest-calculator | 99 [99, 99, 99] | 1.10 s | 120 ms | 0.000 | 100 [100, 100, 100] | 0.32 s | 0 ms | 0.000 |

Outlier runs (hub 75, lender 66, article 57) came from a network hiccup or a contended run. Hub run 1, for example, had several first-party requests taking 2 to 6 s. They are kept in the brackets but excluded by using the median.

### 1b. Playwright (Lab B, applied throttling, mobile): median of 2 runs

| Template | PW LCP (median) | LCP runs | LCP element | FCP | TTFB | CLS load | CLS after scroll | Long tasks (n / total ms) | TBT-like | Max interaction (menu / CTA / typing) | Requests | Transfer KB | JS KB (transfer/decoded) | DOM |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| home | 8112 ms | [8104, 8120] | P.text-white.font-medium.text-center.tex "Loan Recovery calls?Get peace of mind wi" | 8112 | 113 | 0.000 | 0.000 | 9 / 848 | 382 | 72 / 72 / - | 158 | 4340.7 | 1614.4 / 4887.0 | 1237 |
| hub | 1840 ms | [1824, 1856] | H1.text-4xl.md:text-6xl.font-extrabold.m "Credit Card Settlement in India Legal & " | 1840 | 126 | 0.000 | 0.000 | 4 / 354 | 130 | 24 / 32 / - | 100 | 2572.6 | 1277.3 / 3656.1 | 484 |
| issuer | 1756 ms | [1756, 1756] | P.text-xl.text-gray-600.mb-8.leading-rel "Stop recovery calls and clear your credi" | 1756 | 117 | 0.000 | 0.000 | 5 / 505 | 242 | 32 / 32 / - | 113 | 2484.8 | 1181.6 / 3310.2 | 488 |
| issuer_state | 1738 ms | [1732, 1744] | P.text-xl.text-gray-600.mb-8 "Know your legal rights in Maharashtra. C" | 1738 | 108 | 0.000 | 0.000 | 5 / 484 | 226 | 32 / 32 / - | 79 | 2441.8 | 1181.6 / 3310.2 | 304 |
| service_state | 2500 ms | [2496, 2504] | IMG.w-full.max-w-[280px].md:max-w-[400px personalhero.png | 2060 | 114 | 0.000 | 0.000 | 8 / 787 | 368 | 72 / 16 / - | 47 | 1617.3 | 1124.2 / 3156.6 | 467 |
| lender | 1882 ms | [1884, 1880] | P.text-lg.md:text-xl.text-gray-300.mb-8 "Facing severe financial hardship? Stop t" | 1882 | 114 | 0.000 | 0.000 | 8 / 866 | 353 | 32 / 24 / - | 74 | 1613.2 | 1165.0 / 3275.7 | 727 |
| article | 22492 ms | [22480, 22504] | IMG.w-full.h-auto.object-contain.rounded blog-images%2F22a792cf-d424-4d1f-9064-c205c6a3e132 | 2450 | 115 | 0.005 | 0.005 | 10 / 947 | 436 | 48 / 48 / - | 118 | 4860.9 | 1649.1 / 4862.8 | 733 |
| tool | 1804 ms | [1804, 1804] | P.text-sm.sm:text-base.text-slate-600.ma "Estimate how compounding APR interest, r" | 1804 | 114 | 0.000 | 0.000 | 5 / 478 | 217 | 24 / 32 / 32 | 78 | 2440.0 | 1171.6 / 3297.8 | 634 |

Notes on Lab B:
- Transfer and JS KB are measured with cache disabled, after a full scroll and the interactions, so they are higher than the Lighthouse load-only totals. `recaptcha__en.js` (353 KB) shows up twice: once from the page and once from the reCAPTCHA iframe. Lighthouse counted it once. Treat the Lighthouse byte figures in section 2 as the reference.
- The interaction column is the largest Event Timing `duration` per tap (menu toggle, lead-form CTA, calculator typing), measured after load plus 8 s. These are single-interaction INP proxies, not p75 field INP.

### 1c. A/B contention test (Lab B throttling, FCP = LCP on both pages)

| Page | Unmodified | Non-logo images blocked | cdnjs Font Awesome blocked |
|---|---|---|---|
| Homepage | **8,152 ms** | **1,996 ms** | 7,908 ms |
| Issuer (`/credit-card-settlement/hdfc`) | 1,756 ms | 1,760 ms | 1,672 ms |

**On a slow mobile connection the homepage LCP is driven almost entirely by image bandwidth contention** (see H1). Removing the third-party Font Awesome stylesheet saves about 85 ms under these conditions. Lighthouse's ceiling estimate for it is 0.8 to 0.9 s (see R1).

---

## 2. Core Web Vitals status per template (lab-based)

Thresholds are LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1. The verdicts below are lab-based; field data would be needed to confirm them.

| Template | LCP mobile | LCP desktop | INP proxy (TBT and tap latency) | CLS | Lab verdict |
|---|---|---|---|---|---|
| Homepage | LH 1.13 s pass. **Applied throttling 8.1 s FAIL** | 0.35 s pass | TBT 116 ms, taps 56 to 72 ms: pass | 0.000 pass | **At risk (LCP on slow mobile)** |
| Hub | 1.10 s / 1.8 s pass | 0.33 s pass | TBT 134 ms, taps ≤32 ms: pass | 0.000 pass | Pass |
| Issuer | 1.10 s / 1.8 s pass | 0.32 s pass | TBT 121 ms: pass | 0.000 pass | Pass |
| Issuer x state | 1.10 s / 1.7 s pass | 0.33 s pass | TBT 124 ms: pass | 0.000 pass | Pass |
| Service x state | **LH 3.14 s: needs improvement** (all 3 runs 3.13 to 3.14 s). Applied 2.5 s (borderline) | 0.70 s pass | TBT 102 ms: pass | 0.000 pass | **Needs improvement (LCP)** |
| Lender | 1.56 s / 1.9 s pass | 0.32 s pass | TBT 113 ms: pass | 0.009 pass | Pass |
| Article | **LH 5.03 s FAIL** (4.9 to 12.0 s). **Applied 22.5 s FAIL** | **4.63 s FAIL** | TBT **191 ms** (near the limit), taps ≤48 ms | Mobile 0.000 (LH) / 0.005 (applied). **Desktop 0.102: needs improvement** | **Fail (LCP), borderline CLS** |
| Tool | 1.10 s / 1.8 s pass | 0.32 s pass | TBT 120 ms, typing ≤32 ms: pass | 0.000 pass | Pass |

Server response is excellent on every template: TTFB is 100 to 150 ms from `bom1` with edge cache HITs, and Lighthouse reports root document latency of about 30 ms. **No template has a back-end/TTFB problem.** Every problem is front-end payload.

---

## 3. Root causes with evidence

### Site-wide (all 8 templates)

**R1. Third-party render-blocking Font Awesome stylesheet that almost nothing uses.**
- `src/app/layout.tsx:93-99` loads `cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css` (102 KB raw, 19 KB br) as a blocking `<link rel=stylesheet>` in `<head>`.
- Lighthouse `render-blocking-insight` on mobile estimates 810 to 920 ms of FCP/LCP savings on every template, with this file the largest item (991 ms wasted). The A/B test measured about 85 ms on the issuer page, so the real gain is between those two figures. Either way it puts a third-party origin (DNS, TLS, availability) in the critical path of every page.
- On 7 of 8 templates the only FA icons in the HTML are `svg-inline--fa` SVGs from `@fortawesome/react-fontawesome`, which ship their own CSS. **No icon on those pages uses the CDN stylesheet.**
- The article template is the only one using CSS-font icons: 26 `fas` instances of 13 distinct icons (`fa-check`, `fa-chevron-down`, `fa-gavel`, …). Those icons pull **`fa-solid-900.woff2` (153 KB) and `fa-brands-400.woff2` (115 KB)** at VeryHigh priority.
- The codebase uses three icon systems: the FA CDN, FA React (26 files) and lucide-react (291 files).

**R2. reCAPTCHA v3 loads on every page view.**
- `src/app/layout.tsx:134` wraps the whole app in `ReCaptchaProvider` (`src/components/ReCaptchaProvider.tsx`, `GoogleReCaptchaProvider`). The script is injected at hydration on every page.
- Cost per page: `recaptcha__en.js` 353 KB transfer plus `api.js`, the anchor iframe (29 KB) and a Roboto web font from fonts.gstatic.com (34 KB). Lighthouse puts it at **366 to 524 ms of main-thread bootup per page** on mobile, with **189 KB unused**, and it caused long tasks of 65 to 70 ms in the trace.
- The token is only needed when a lead form is submitted (`InteractiveLeadFunnel.tsx:507` `executeRecaptcha('interactive_funnel_submit')`, `GlobalPopupForm`).

**R3. Meta Pixel.**
- `layout.tsx:104` uses `strategy="afterInteractive"`. `fbevents.js` (99 KB) plus `signals/config` (111 KB) adds 205 KB per page.
- Main-thread cost is about 50 ms, plus a long task of 81 to 114 ms. Both files have a 20-minute cache lifetime, which accounts for most of the Lighthouse `cache-insight` savings of 181 KB.
- Together with R2, **third-party transfer is about 677 KB on every template**: Lighthouse measured 677 KB on 7 templates and 2.6 MB on the article because of the Firebase-hosted hero.

**R4. Homepage images download on other pages through route prefetch: about 834 KB per page.**
- The shared navbar has a `<Link href="/">`. Next.js prefetches `/?_rsc=…` as soon as that link is visible.
- The homepage RSC payload contains **16 `:HL[…,"image"]` preload hints**. React's Flight server emits one for every `<img>` in a Server Component that lacks `loading="lazy"` (see `getChildFormatContext` → `case "img"` in `next/dist/compiled/react-server-dom-turbopack/…server.node.production.js:421`).
- The client then fetches all of them right away. A CDP initiator trace on the tool page shows the request for `why5.png` and `man2.jpg` coming from React DOM's preload dispatcher in chunk `cff1f7e258bb5da6.js`, called from the router chunk `a8f3edc83384fc3e.js`.
- Measured image weight from homepage assets on other templates (Lighthouse network records): hub 904 KB, issuer 834 KB, issuer x state 834 KB, article 834 KB, tool 834 KB, lender 70 KB, service x state 0 (no prefetch there). These images are **about 43% of the issuer page's 1.9 MB**.
- On text-LCP pages they arrive after FCP, so LCP is unchanged (the issuer A/B shows no difference). But they cost mobile data and compete with image LCPs and with hydration on the article.

**R5. Uncacheable `/public` assets and unoptimized raster images.**
- Every file under `/public` (`/why1.png`, `/banks/43.svg`, `/personalhero.png`, `/hero-bg.png`, …) is served with `cache-control: public, max-age=0, must-revalidate`, so repeat views have to revalidate every image.
- Almost all images are plain `<img>` pointing at PNG/JPG, so there's no WebP/AVIF, no `srcset`, and no lazy loading. `next.config.ts` already allows `formats: ["image/webp"]`, but those images never go through `/_next/image`.
- Several "SVGs" are just base64 PNGs wrapped in an SVG file: `guideline4.svg` 259 KB, `guideline3.svg` 124 KB, `media1-4.svg` up to 63 KB. Some bank logos are huge for 100x28 px: `banks/43.svg` 114 KB, `16.svg` 113 KB, `61.svg` 111 KB.

**R6. Smaller site-wide items.**
- One global Tailwind CSS file (`3f5fe52d9fc642c7.css`) is 273 KB raw / 34 KB br, render-blocking, with 18 KiB unused.
- Five Poppins weights (300 to 700) are preloaded on every page (about 40 KB).
- About 24 KB of legacy polyfills sit in the React DOM chunk.

### Homepage (`/`)

**H1. 65 `<link rel="preload" as="image">` tags in `<head>` (1.71 MB).**
- 128 of the 131 `<img>` tags in the SSR HTML have no `loading="lazy"`. React 19's SSR (`react-dom-server` `pushImg`) automatically emits a preload for every non-lazy `<img>`.
- The result: bank-logo SVGs (up to 114 KB each), `why1-5.png`, `service1-6.png`, `about1-3.png`, `man1-3`, `media1-4.svg` and `guideline1-6.svg` are all preloaded before first paint. Lighthouse recorded **92 requests / 2.59 MB requested in the first 400 ms**.
- **The A/B test shows this is the homepage LCP problem: 8.15 s → 2.0 s when those images are blocked.** Total page weight is 3.26 MB in Lighthouse and 4.3 MB in Playwright after scrolling. Lighthouse `image-delivery-insight` estimates 749 KiB of savings.

**H2. Hero background.** `HeroSection.tsx:96` uses `backgroundImage: url(/hero-bg.png)`: a 340 KB PNG at 1728x1117, unoptimized, served to mobile as well. It is the largest first-party asset on the page.

**H3. Two Splide AutoScroll marquees plus a client-side reshuffle.**
- `HeroSection.tsx:317` (mobile, `block md:hidden`) and `:411` (desktop, `hidden md:block`) both mount at every viewport width. Each is a `type:'loop'` marquee of 29 logos with clones.
- After hydration, a `useEffect` reshuffles the logos (`HeroSection.tsx:83-85`), which forces both carousels to re-render.
- The Splide chunk `5b16026f6388ddd4.js` accounts for **1.48 s of CPU** in the Lighthouse mobile trace, and main-thread work totals 3.5 s, the highest of any template. Continuous rAF animation leaves less headroom for INP on low-end phones. Measured taps were still fast (56 to 72 ms) once loading had finished.

### Article (`/resources/[slug]`)

**A1. The LCP image is a raw 1.56 MB PNG served from Firebase Storage.**
- `BlogPostPageClient.tsx:1377-1380` renders `<Image priority unoptimized={true}>`, which bypasses Next's image optimizer. The browser gets `firebasestorage.googleapis.com/…/22a792cf….png?alt=media`: 1,560,162 bytes, 1024x1024, `cache-control: max-age=3600`. TTFB from this location was 1.1 to 2.2 s.
- Because `priority` adds a high-priority preload for it, it also competes with CSS and JS.
- Results: Lighthouse mobile LCP 5.0 s (median; 4.9 to 12.0 s across runs), desktop 4.6 s, Playwright applied throttling 22.5 s. Lighthouse `image-delivery-insight` estimates 1,452 to 1,473 KiB of savings.

**A2. CLS 0.10 on desktop.**
- The same `<img>` declares `width=1200 height=800` (3:2), but the file is 1024x1024 (1:1) and styled `w-full h-auto`. The browser reserves a 3:2 box, the square image loads, and the article body moves down.
- Lighthouse `layout-shifts` attributes 0.091 of the 0.102 to this element, with cause "Media element lacking an explicit size". The other 15 small shifts come from `AnimatedCounter` stats and a late web font (`0da9c7f357bd9d4d-s.b2288445.woff2`).

**A3. The Firebase client SDK ships to public readers.**
- `BlogPostPageClient.tsx` (`'use client'`) imports `addBlogReview` from `@/lib/blogs`. That module imports `@/lib/firebase.js`, which initializes `firebase/app`, `auth`, `firestore`, `database` and `storage`.
- That chain adds these chunks to the article page:
  - `e90c8ec399591ea7.js` (Firestore, 123 KB br / 403 KB raw)
  - `e900c1e739128c12.js` (Firebase app and auth, 64 KB br)
- `getAuth()` also boots the **Firebase Auth iframe** (`credsettlee.firebaseapp.com/__/auth/iframe.js` 93 KB) and `apis.google.com` (41 KB).
- First-party JS on the article is 506 KB, against roughly 200 to 260 KB on other templates. Lighthouse `unused-javascript` reports 467 KiB, with an estimated **1.1 s of LCP savings**, and the page has the highest TBT of the 8 templates (191 ms).
- These chunks are also fetched on other pages whenever an article link is prefetched. The homepage Playwright run downloaded `e90c8ec…js`.

**A4.** Font Awesome icon fonts add 268 KB (see R1). Total article weight is 4.18 MB in Lighthouse.

### Service x state (`/services/personal-loan-settlement/karnataka`)

**S1.** The LCP element is `/personalhero.png`: a 98 KB PNG at 661x377, rendered with a plain `<img>` (`src/app/services/personal-loan-settlement/karnataka/KarnatakaPageClient.tsx:117-126`) and displayed no wider than 280 px on mobile.
- React's automatic preload helps it get discovered early, but at 1.6 Mbps the transfer alone sets LCP. Lighthouse mobile LCP was 3.13 to 3.14 s in all 3 runs, which is "needs improvement". Lighthouse estimates 74 KiB of image savings.
- The same pattern is copied into many hand-built state client components (for example the `tamil-nadu`, `haryana`, `delhi`, `uttar-pradesh` and `karnataka` folders under `src/app/services/credit-card-settlement/`).

### Hub, issuer, issuer x state, lender, tool

- The LCP element on all five is text (H1 or intro `<p>`): about 1.1 s in Lighthouse and 1.7 to 1.9 s with applied throttling. Good.
- Their payload problems are only the site-wide ones (R1 to R4): 1.2 to 2.1 MB per page, of which about 677 KB is third-party and about 834 KB is leaked homepage images on 4 of the 5.
- The lender page has the largest HTML apart from the homepage: 198 KB decompressed, of which 112 KB is the RSC flight payload. That suggests large props passed to client components. It does not hurt LCP today.
- On the tool page, keystroke latency is ≤32 ms. However, `CreditCardInterestCalculatorClient.tsx` sends a telemetry POST to `/api/tools/credit-card-interest-calculator` on mount, so every page view triggers one serverless call. That costs money but doesn't affect CWV.

### INP proxy summary

- Lighthouse TBT on mobile ranged from 102 to 191 ms (median per template); all are under 200 ms, but the article is close to the limit.
- In Playwright, each page had 4 to 10 long tasks during load, the longest 106 to 190 ms. They came from reCAPTCHA, Meta signals, the Next router/hydration chunk `a8f3edc83384fc3e.js`, and Splide on the homepage.
- Real taps measured after the page settled took 16 to 72 ms (Event Timing duration), including the lead-modal CTA and calculator typing.
- **Main INP risk:** users who tap a CTA in the first few seconds can hit those third-party long tasks. Removing R2 and R3 from page load is the biggest INP lever.

---

## 4. Prioritized fixes

**Note on AGENTS.md:** the project rules freeze existing pages (no rewrites, redirects, noindex or pruning). Every fix below changes assets, components or loading strategy only. None changes URLs, content, titles or indexing. They do touch shared templates used by frozen pages, so **get the owner's sign-off before shipping**.

### Critical

1. **Article hero image (A1, A2).**
   - Remove `unoptimized={true}` at `BlogPostPageClient.tsx:1380` so the image goes through `/_next/image` (Firebase hosts are already in `remotePatterns`). Add `sizes` (for example `(max-width: 1024px) 100vw, 560px`), or pre-convert to WebP/AVIF at 1024 px or smaller.
   - Set `width`/`height` to the real intrinsic size (1024x1024), or put the image in a fixed `aspect-square` container.
   - **Expected:** about 1.5 MB → about 60 to 120 KB. Article mobile LCP about 5 s → about 1.5 to 2.0 s (Lighthouse), desktop 4.6 s → under 1 s, desktop CLS 0.10 → about 0.01. Applies to every article.
2. **Stop homepage image preloads (H1) and the leak to other pages (R4).**
   - Add `loading="lazy"` to every below-the-fold `<img>` in homepage components (`WhyCredSettle`, `Services`, `AboutUs`, `Testimonials`, `Settlements`, `Blogs`, media and guideline strips), or switch them to `next/image`, which lazy-loads by default.
   - Keep eager loading only for the logo and the first visible bank logos.
   - **Expected:** removes about 63 of the 65 head preloads (1.7 MB) and all 16 RSC `:HL` image hints. Homepage slow-4G LCP about 8 s → about 2 s (A/B measured). Saves about 834 KB on hub, issuer, issuer x state, article and tool.
3. **Remove the Firebase client SDK from the article bundle (A3).**
   - Move `addBlogReview` into a Server Action or API route so the client component doesn't import `@/lib/blogs` / `@/lib/firebase.js`.
   - Split `lib/firebase.js` so public bundles never call `getAuth()`.
   - **Expected:** about −190 KB br of JS, no Firebase Auth iframe (about 135 KB), about −100 ms TBT, and Lighthouse's estimated 1.1 s of LCP savings.

### High

4. **Load reCAPTCHA only on demand (R2).**
   - Remove the app-wide `GoogleReCaptchaProvider`. Load `api.js` when a funnel or popup form is first focused or interacted with, or right before `executeRecaptcha`.
   - **Expected:** −390 KB and −370 to 520 ms of main-thread time on every page view, no Roboto font request, fewer load-time long tasks (INP).
5. **Service x state hero (S1).** Use `next/image` with `priority` and `sizes="(max-width:768px) 280px, 520px"` (WebP about 15 to 25 KB) in the per-state client components. **Expected:** Lighthouse mobile LCP 3.1 s → under 2.0 s.
6. **Remove the cdnjs Font Awesome stylesheet from `layout.tsx` (R1).** Replace the article template's `fas fa-*` icons (13 distinct icons) with the already-installed `@fortawesome/react-fontawesome` or lucide icons. **Expected:** one fewer third-party origin in every page's critical path, 85 to 900 ms less FCP/LCP depending on network, −268 KB of fonts on articles.
7. **Homepage hero background (H2).** Convert `hero-bg.png` to responsive AVIF/WebP (`image-set()` or `next/image fill priority`) with a smaller mobile variant. **Expected:** 340 KB → about 40 to 80 KB.

### Medium

8. **Meta Pixel (R3):** switch to `strategy="lazyOnload"` or start it on the first user interaction. Consider moving PageView/Lead to the Conversions API on the server. **Expected:** −205 KB during load and one fewer 80 to 115 ms long task.
9. **Homepage marquees (H3):**
   - Render only one Splide instance per breakpoint (via a `matchMedia` gate or a CSS-only marquee).
   - Drop the post-hydration shuffle, or do it on the server.
   - Or replace both with a CSS `transform` keyframe marquee, which runs on the compositor with no JS.
   - **Expected:** about 1 s+ less main-thread work on the homepage, plus INP headroom.
10. **Fix image assets (R5):** re-export the PNG-in-SVG files (`guideline*.svg`, `media*.svg`) as WebP, run `svgo` on the bank logos (`43.svg` 114 KB should be under 5 KB), and convert `why*/service*/about*` PNGs to WebP.
11. **Caching (R5):** add a `Cache-Control: public, max-age=2592000` (or `immutable` with versioned names) header for `/banks/*`, `/media/*` and the `*.png|jpg|svg` files in `public/` via `vercel.json` `headers`.
12. **Set up field measurement:** add `@vercel/speed-insights` or `web-vitals` reporting, and get a PSI/CrUX API key. Without these, nobody can confirm whether CredSettle passes CWV at p75. Then use CrUX Vis or the CrUX API to track the origin.

### Low

13. Cut Poppins down to 3 weights (400/600/700) and preload only the weights used above the fold.
14. Audit the Tailwind source globs and safelist to shrink the 273 KB global CSS. Consider per-route CSS.
15. Update `browserslist` to drop about 24 KB of legacy polyfills.
16. Tool page: send calculator telemetry only on a user-initiated calculation, not on mount.
17. Lender template: shrink the props passed to client components to cut the 112 KB RSC payload inside the 198 KB HTML.

---

## 5. Performance score: 64 / 100

| Component | Weight | Awarded | Reasoning |
|---|---|---|---|
| LCP | 35 | 19 | 6 of 8 templates are good in Lighthouse (about 1.1 s, text LCP). Article is poor (5.0 s mobile, 4.6 s desktop, 22 s with applied throttling). Service x state is needs-improvement (3.1 s). Homepage is 8.1 s on slow 4G with applied throttling, due to 65 image preloads. |
| CLS | 20 | 17 | Near zero on 7 templates. Article desktop is 0.10 because the declared image dimensions are wrong. |
| INP proxies | 20 | 15 | TBT is 102 to 191 ms and every measured tap is ≤72 ms. But each page has 4 to 10 long tasks (up to 190 ms) during load from reCAPTCHA, Meta and Splide, and there's no field INP. |
| Weight and third-party hygiene | 15 | 4 | 1.1 to 4.2 MB per page. About 677 KB of third-party on every page. 834 KB of homepage images leak to other templates. Firebase SDK and Auth iframe on articles. Images mostly unoptimized. |
| Server, edge and caching | 10 | 9 | Prerendered HTML with Mumbai edge cache HITs and 100 to 150 ms TTFB. Hashed `_next/static` assets are immutable. −1 for `max-age=0` on `/public` assets. |
| **Total** | **100** | **64** | Lighthouse category scores alone look better: mobile median 93 to 99 on 7 templates and 73 on the article; desktop 100 on 7 and 72 on the article. Those scores miss bandwidth contention and the missing field data, so I don't use them as the headline. |

If Critical fixes 1 to 3 and High fixes 4 to 6 ship, I expect every template to reach LH mobile ≥95 and applied-throttle LCP ≤2.5 s, and the score to rise to the mid-80s. Field data would be needed to confirm that.

---

## 6. Artifacts (scratchpad)

- Lighthouse JSON (48 runs): `/private/tmp/claude-501/-Users-amalegalsolutions--claude-spares-spare-xPJPYw/7f87f4d4-849f-48d6-9464-8873c1f3b3d0/scratchpad/data/lh/`
- Lighthouse summary: `/private/tmp/claude-501/-Users-amalegalsolutions--claude-spares-spare-xPJPYw/7f87f4d4-849f-48d6-9464-8873c1f3b3d0/scratchpad/data/lh_summary.json`
- Playwright results: `/private/tmp/claude-501/-Users-amalegalsolutions--claude-spares-spare-xPJPYw/7f87f4d4-849f-48d6-9464-8873c1f3b3d0/scratchpad/data/pw/`
- Fetched HTML and headers: `/private/tmp/claude-501/-Users-amalegalsolutions--claude-spares-spare-xPJPYw/7f87f4d4-849f-48d6-9464-8873c1f3b3d0/scratchpad/data/html/`
- Scripts: `/private/tmp/claude-501/-Users-amalegalsolutions--claude-spares-spare-xPJPYw/7f87f4d4-849f-48d6-9464-8873c1f3b3d0/scratchpad/tools/` (`run_lh.sh`, `lh_summary.py`, `pw_cwv.py`, `contention_test.py`, `initiator.py`, `html_scan.py`, `tables.py`)
