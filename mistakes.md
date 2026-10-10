# Screaming Frog SEO Fixes — Recurring Mistakes & Prevention Log (`mistakes.md`)

> **MANDATORY INSTRUCTION FOR AGENT / DEVELOPER:**  
> Before resolving any Screaming Frog issues or generating/modifying pages, **ALWAYS read and follow this file**.  
> If an issue or mistake repeats or a new edge case is discovered during fixes, **document it here immediately** so it is never repeated.

---

## 📋 Quick Audit Threshold Reference

| Element | Strict Limit | Ideal Range | Common Audit Flags to Avoid |
| :--- | :--- | :--- | :--- |
| **Page Title (`<title>`)** | **Max 60 chars** (≤ 561px) | **50 – 60 chars** | `Page Title: Over 60 Characters`, `Below 30 Characters`, `Page Titles: Over 561 Pixels` |
| **Meta Description** | **Max 155 chars** (≤ 960px) | **140 – 155 chars** | `Meta Description: Over 155 Characters`, `Below 100 Characters` |
| **H1 Tag** | **Strictly 1 per page** | **30 – 65 chars** | `H1: Missing`, `H1: Multiple`, `H1: Over 70 Characters` |
| **H2 Tags (`<h2>`)** | **Max 70 chars** (raw & decoded) | **45 – 65 chars** | `H2: Over 70 Characters`, `H2: Duplicate`, `H2: Missing` |
| **Punctuation in Headings** | **ZERO Em-Dashes (`—`)** | Use `:`, `-`, `&`, `,` | Broken SERP rendering, encoding quirks |
| **Title vs H1** | **Must NOT be identical** | Distinct intent | `Page Titles: Same as H1` |
| **Internal URLs** | **Strictly Lowercase** | `/slug-with-hyphens` | `Page: Uppercase in URL`, `Redirect loops` |
| **Canonical URL** | **100% self-referencing absolute** | `https://www.credsettle.com/[slug]` | `Canonical: Missing`, `Canonical: Relative URL` |
| **TypeScript / Build** | **0 compilation errors** | `tsc --noEmit` clean | Stray tags, duplicate function declarations |

---

## 🚫 Recurring Mistakes & Prevention Protocols

### 1. Heading Issues (`<h2>` and `<h1>`)
* **Mistake 1: H2 Heading Over 70 Characters**
  * *Why it happens:* Long section titles from CMS/Markdown (e.g. 74–79 chars), OR repeating the blog post title inside an `<h2>` at the top of the body, OR truncating H2s *only* inside the TOC `headingsList` array while leaving `${item.content}` / `originalMatch` untouched in the rendered `processedHtml` DOM.
  * *Prevention:* In `BlogPostPageClient.tsx` (`processDescription`):
    1. Automatically strip any `<h1>` OR `<h2>` in the body that duplicates the post title/H1.
    2. Format and truncate all `<h2>` tag text inside `processedHtml` using `formatH2Text(text, 65)` (target 45–65 characters, strictly ≤ 70 chars).
    3. Ensure 0 em-dashes (`—`) in headings and enforce uniqueness across all page H2s.
    4. For individual articles, maintain `OPTIMIZED_H1S` (30–65 chars), `OPTIMIZED_TITLES` (50–60 chars), and `OPTIMIZED_DESCRIPTIONS` (140–155 chars) in `page.tsx`.
* **Mistake 2: Forbidden Em-Dashes (`—` or `&mdash;`) in Headings & Titles**
  * *Why it happens:* Copy-pasting text with em-dashes as separators.
  * *Prevention:* Never use em-dashes. Use colons (`:`), hyphens (`-`), or ampersands (`&`).
* **Mistake 3: Duplicate H2 Tags on the Same Page**
  * *Why it happens:* Generic headings like `Overview`, `Conclusion`, or multiple repeated FAQ subheadings.
  * *Prevention:* Make every `<h2>` context-specific and unique on the page.
* **Mistake 4: Title Same as H1**
  * *Why it happens:* Setting `metadata.title` to the exact same string as the hero `<h1>`. Specifically on resource/blog pages: when a slug is NOT listed in `OPTIMIZED_TITLES` OR `OPTIMIZED_H1S`, the code falls back to `blog.title` for BOTH — making title = H1. This was the root cause for 8 URLs flagged in Oct 2026 (e.g. `the-smart-way-to-settle-your-credit-card-dues-legally`, `stop-loan-recovery-agent-harassment-whatsapp`, etc.).
  * *Prevention:* **Every resource slug that does not have a custom CMS `metaTitle` must be explicitly listed in both `OPTIMIZED_TITLES` (50–60 chars, SERP hook) AND `OPTIMIZED_H1S` (30–65 chars, distinct conversion copy) in `resources/[slug]/page.tsx`.** Never rely on `blog.title` alone. Character rules: Title 50–60 chars; H1 30–65 chars; they must NOT be identical (case-insensitive). No em-dashes in either.
* **Mistake 11: Multiple H1 Tags from CMS / Rich-Text Content (`H1: Multiple`)**
  * *Why it happens:* Rich-text or Markdown content in blog articles containing `<h1>` tags (either repeating the post title at the top of the body or using `<h1>` for subheadings).
  * *Prevention:* In `BlogPostPageClient.tsx` (`processDescription`), automatically strip any `<h1>` that duplicates the post title, and demote any remaining `<h1>` subheadings to `<h2>`. Never allow `<h1>` tags inside the rendered body content.
* **Mistake 14: H1 Heading Over 70 Characters (`H1: Over 70 Characters`)**
  * *Why it happens:* Long article titles in Firestore/CMS (e.g., 71–91 chars) falling back directly to `blog.title` in `resources/[slug]/page.tsx` when a slug is not mapped in `OPTIMIZED_H1S`, OR long bank names (e.g. `Banaskantha District Central Co Operative Bank Business Loan Settlement` at 71 chars) in bank service templates when not shortened.
  * *Prevention:*
    1. Explicitly list resource slugs in `OPTIMIZED_H1S` (strictly 30–65 characters, target 45–55 chars, 0 em-dashes).
    2. Maintain corresponding entries in `OPTIMIZED_TITLES` (50–60 chars) and `OPTIMIZED_DESCRIPTIONS` (140–146 chars) ensuring Title and H1 are strictly distinct to prevent `Page Titles: Same as H1`.
    3. Programmatically clamp dynamic fallbacks with `formatH1Text(rawText, 65)` so unexpected CMS content is cleanly truncated at word/punctuation boundaries without ever exceeding 65 chars.
    4. For bank service pages (`services/*/banks-content.ts`), always use `getBankH1Title(bankName, serviceTitle)` and `getShortBankName(bankName)` so long cooperative and district bank names (e.g. `Banaskantha District Co-op Bank Business Loan Settlement` = 56 chars) never exceed 65 characters.

---

### 2. URL & Internal Link Formatting
* **Mistake 5: Uppercase Characters in URLs or Hrefs**
  * *Why it happens:* Linking to `/Personal-Loan-Settlement` or state pages with uppercase codes (`/services/personal-loan-settlement/Delhi`).
  * *Prevention:* All routes, internal links (`<Link href="...">`), and file paths must be strictly lowercase. Use `.toLowerCase()` when generating dynamic links from state/bank names.
* **Mistake 6: Mismatched TOC Anchor Links vs Section IDs**
  * *Why it happens:* Table of Contents links to `#section-1` but `<section id="sec-1">` has a different ID.
  * *Prevention:* Ensure TOC anchor `href="#xyz"` matches the section `id="xyz"` exactly.

---

### 3. Syntax, JSX & Deployment Errors
* **Mistake 7: Duplicate Function or Component Declarations**
  * *Why it happens:* Accidental copy-pasting or automated scripts appending helper functions (e.g. `formatDate()`, `getCityData()`) that are already defined earlier in the file.
  * *Prevention:* Check the entire file for duplicate function/variable/component names before saving.
* **Mistake 8: Stray Closing/Opening JSX Tags causing Build Failures**
  * *Why it happens:* Editing a component block and leaving behind `</div>` or missing `<section>` closure.
  * *Prevention:* Run TypeScript check (`npx tsc --noEmit` or verify JSX balance) after modifying components.

---

### 4. Meta Tags & Canonical URLs
* **Mistake 9: Meta Description Length Out of Range (<100 or >155 Chars) & Pixel Width (>985px)**
  * *Why it happens:* Writing descriptions >150 chars or wide character phrases that exceed Screaming Frog's 985px limit, off-by-one errors in dynamic fallback slicing. In Google snippet rendering, descriptions with 147–155 characters frequently cross 985px.
  * *Prevention:* Keep meta descriptions strictly between 140 and 146 characters (safely below 155 chars and well below 985px). Add resource slugs directly to `OPTIMIZED_DESCRIPTIONS` in `resources/[slug]/page.tsx`, and enforce a strict word-boundary clamp (`candidate.slice(0, 142)`) in `generateMetadata` and `structuredData` so dynamic CMS content never exceeds 146 characters.
* **Mistake 10: Incomplete or Relative Canonical URLs**
  * *Why it happens:* Omitting canonical in metadata or using relative paths (`/my-page` instead of `https://www.credsettle.com/my-page`).
  * *Prevention:* Ensure `alternates.canonical` is always an absolute URL pointing to `https://www.credsettle.com/[slug]`.
* **Mistake 11: Page Title Pixel Width Exceeding 561 Pixels (`Page Titles: Over 561 Pixels`)**
  * *Why it happens:* Titles close to 57–60 characters containing many wide capital letters (W, M, O, R, B) or numbers exceeding Screaming Frog's Google SERP pixel threshold (561px). In particular, appending year tags (`2026`) along with brand suffixes (` | CredSettle`) to long phrases pushes pixel widths to 576px+ even at exactly 60 characters (e.g. `Stop Recovery Agent Harassment on WhatsApp 2026 | CredSettle` at 60 chars measured 576px).
  * *Prevention:* Target 50–55 characters with safe pixel width (≤ 530px). Remove redundant year tags from the title or condense phrasing. Add slugs directly to `OPTIMIZED_TITLES` dictionary in `resources/[slug]/page.tsx` (e.g., `stop-loan-recovery-agent-harassment-whatsapp` mapped to `"Stop Recovery Agent Harassment on WhatsApp | CredSettle"` at 55 chars, ~526px). Ensure title is strictly distinct from H1 (`OPTIMIZED_H1S`).

---

### 5. Anchor Text & Outlink Quality
* **Mistake 12: Non-Descriptive Anchor Text in Internal Outlinks (`Links: Non Descriptive Anchor Text In Internal Outlinks`)**
  * *Why it happens:* CMS / Rich-text articles containing generic hyperlink anchor texts like `"Click here"`, `"learn more"`, `"read more"`, `"here"`, etc. pointing to internal domain pages.
  * *Prevention:* In `BlogPostPageClient.tsx` (`processDescription`), automatically intercept and replace all internal links using non-descriptive anchor texts with contextual, descriptive phrases based on the destination route (e.g. replacing `"Click here"` with `"Explore CredSettle loan settlement solutions"`). Never allow bare `"Click here"` anchor text in blog posts or UI links.

---
### 6. URL Length
* **Mistake 13: Resource URLs Exceeding 115 Characters (`URL: Over 115 Characters`)**
  * *Why it happens:* Firestore blog slugs are auto-generated from the full article title. Long SEO titles (60+ words) produce slugs that make the full URL exceed 115 characters (Screaming Frog default audit threshold).
  * *Prevention:*
    1. **When creating new blogs:** Keep the slug portion (after `/resources/`) to ≤ 77 characters, so the full URL stays ≤ 115 chars. `https://www.credsettle.com/resources/` = 38 chars; 115 - 38 = 77 max slug chars.
    2. **For existing long URLs:** Add a `reverseMapping` entry in `NewCS/src/lib/blogs.ts` (`mapDocToBlogDocument`) mapping the old long slug → a new short canonical slug. The `page.tsx` `permanentRedirect` mechanism will automatically issue a 308 redirect and the old URL becomes Non-Indexable (correct behaviour).
    3. **Metadata safety:** Add the new short slug as a key in `OPTIMIZED_TITLES`, `OPTIMIZED_H1S`, and `OPTIMIZED_DESCRIPTIONS` in `resources/[slug]/page.tsx` so the page renders correct SEO data after redirect.
    4. **Never create slugs with full article titles** — always shorten to the core topic (5-8 words max).
    5. **Update audit batch files (`urls_batch_*.txt`):** Replace old long URLs with their canonical short equivalents in `urls_batch_*.txt`. Screaming Frog audits the addresses it is provided; keeping old URLs in batch files flags them under both `URL: Over 115 Characters` and `Response Codes: Internal Redirection (3xx)`.
    6. **Sitemap synchronization (`sitemap.xml/route.ts`):** Ensure `getAllBlogSlugs` in `sitemap.xml/route.ts` applies `reverseMapping` to Firestore slugs so the sitemap only outputs 200 OK canonical short URLs (≤ 115 chars) and never emits redirected long URLs.
    7. **Dual mapping in `blogs.ts` (`slugMapping`):** Always add the inverse mapping (`new-short-slug: old-firestore-slug`) to `slugMapping` in `getBlogBySlug` so direct Firestore query fallbacks reliably resolve when cache misses occur.
    8. **Router redirects in `next.config.ts`:** Add permanent 301/308 redirects from old long URLs to their new canonical short URLs in `next.config.ts`, ensuring they point directly to the destination article rather than generic parent paths like `/resources`.
* **Mistake 15: Special Character / Punctuation Mismatch in Blog Slug Shortening (`Response Codes: Internal Client Error (4xx)` on Shortened URLs)**
  * *Why it happens:* When shortening long URLs (>115 chars) via `reverseMapping` and `slugMapping`, apostrophes/quotes in the post title (e.g. `Client’s Life` vs `clients life`) are converted into hyphens by `slugify` (`-client-s-life-`), whereas developers may assume it was normalized to `clients-life` (without hyphens around `s`). If the key in `reverseMapping` does not match the actual Firestore slug or the slug produced by `slugify`, `reverseMapping` fails silently, leaving the article under its original slug or causing `getBlogBySlug` to fail to find the article in the cache or database, triggering a 404 Internal Client Error.
  * *Prevention:*
    1. Query the live API (`/api/blogs?limit=100`) or inspect the exact Firestore document `slug` and `title` to confirm the exact slug representation (including punctuation hyphens like `-client-s-life-`).
    2. Include both possible variations (`-client-s-life-` and `-clients-life-`) in `reverseMapping`, `slugMapping`, `OPTIMIZED_TITLES`, `OPTIMIZED_H1S`, and `OPTIMIZED_DESCRIPTIONS`.
    3. In `getBlogBySlug()`, make `findBlog()` resilient by checking `canonicaliseSlug(blog.slug) === canonicaliseSlug(slug)` alongside `canonical`, ensuring that whenever an incoming request matches a mapped slug directly, it resolves immediately without failing.
    4. Ensure both 301/308 redirects in `next.config.ts` and page-level redirects handle the exact live slug and any legacy aliases.

---

### 7. Content Readability & Quality
* **Mistake 16: Content Readability Difficult (`Content: Readability Difficult`)**
  * *Why it happens:* Screaming Frog flags pages when their Flesch Reading Ease score falls below 50.0 (classified as "Hard" / "Difficult", 30-49 range). In legal and financial articles, dense industry jargon (e.g. `arbitration`, `documentation`, `financial institutions`, `proceedings`, `subsequently`, `obligations`) and long compound sentences elevate the average syllables per word (ASW) and words per sentence (ASL). Furthermore, list items (`<li>`) lacking terminal punctuation (`.`) cause text extractors to treat entire lists as single massive run-on sentences.
  * *Prevention:*
    1. In `BlogPostPageClient.tsx` (`processDescription`), run `improveTextReadability` on all post body content:
       - Automatically ensure list items end with a period (`.</li>`) so crawlers detect proper sentence boundaries.
       - Simplify multi-syllable legal/financial jargon outside HTML tags into clear plain-English equivalents (e.g., `financial institutions` -> `banks`, `utilize` -> `use`, `documentation` -> `documents`, `arbitration proceedings` -> `hearings`, `subsequently` -> `later`).
       - Split long compound sentences at semicolons, dashes, and conjunctions (e.g. `, which ` -> `. This `, `, thereby ` -> `. This `, `; ` -> `. `).
    2. Provide high-readability fallback `DEFAULT_KEY_TAKEAWAYS` for articles lacking custom CMS takeaways to ensure an easy-to-read, scannable overview on every page.
    3. Target a Flesch score >= 50 (ideally 55-65, Plain English / Standard) to ensure Screaming Frog never flags pages under the "Readability Difficult" filter.

* **Mistake 17: Heading Non-Sequential (`H2: Non-Sequential` in Screaming Frog)**
  * *Why it happens:* Screaming Frog flags `H2: Non-Sequential` when an `<h2>` is not the second heading level after the `<h1>` on the page (i.e. `<h1>` is directly followed by `<h3>`, `<h4>`, or `<h5>`, skipping `<h2>`, or an `<h2>` appears after deeper heading levels). In blog/resource articles, content authors frequently used `<h3>` or `<h4>` as their primary section headings, or started the article body with an `<h3>` before using `<h2>` later. When the template subsequently rendered `<h2 ...>Frequently Asked Questions</h2>`, Screaming Frog flagged that `<h2>` (and all subsequent `<h2>`s) as non-sequential because `<h2>` was skipped immediately after `<h1>`. Furthermore, non-article template callouts like `KEY TAKEAWAYS` or `POPULAR SEARCHES` coded as `<h2>`/`<h3>` disrupted heading flow.
  * *Prevention:*
    1. In `BlogPostPageClient.tsx` (`processDescription`):
       - If no `<h2>` exists in the article body (e.g. author used only `<h3>` or `<h4>`), automatically shift the heading levels so top-level sections start at `<h2>` (`level - (minLevel - 2)`).
       - If headings before the first `<h2>` are `<h3>`/`<h4>` (e.g. IndusInd), shift those pre-H2 headings to start at `<h2>`.
       - Clamp any downward heading jump to at most `prevLevel + 1` (`lvl > prevLevel + 1 -> lvl = prevLevel + 1`), ensuring a strictly sequential descending order (`H1 -> H2 -> H3 -> H4...`).
       - Enforce all `<h2>` rules on promoted headings: length ≤ 70 chars (target 45–65 chars) via `formatH2Text`, 0 em-dashes, and 100% uniqueness per page (pre-seeding `frequently asked questions`).
       - Automatically remove any heading across `<h[1-6]>` that duplicates the post title or raw title.
    2. Convert non-article template callouts (e.g. `KEY TAKEAWAYS`, `INFOGRAPHIC`, `POPULAR SEARCHES`) from heading tags (`<h2>`/`<h3>`) to styled paragraph tags (`<p className="font-bold ...">`), ensuring the document heading outline is reserved strictly for semantic article content.

---

## 🛠️ Step-by-Step Protocol When Resolving Screaming Frog Issues

1. **Check `mistakes.md` First:** Review the rules above before writing or modifying any code.
2. **Apply the Fix:** Modify the metadata, headings, URLs, or components adhering strictly to the limits.
3. **Verify Compliance:**
   - Verify character counts for Title (50-60) and Description (140-146).
   - Verify all H2 lengths are ≤ 70 characters and have zero em-dashes.
   - Verify heading sequence is descending without skipping levels (H1 -> H2 -> H3...).
   - Verify all internal links and URLs are lowercase.
   - Verify all resource URLs are ≤ 115 characters total (slug portion ≤ 77 chars).
   - Run type check / build verification to ensure no stray JSX tags or duplicate functions.
4. **Update `mistakes.md`:** If any new recurring pattern, quirk, or bug was encountered, add it to this file immediately with explanation and prevention instructions.
