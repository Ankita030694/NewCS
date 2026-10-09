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
  * *Why it happens:* Long section titles like `"1. Debt Economics & NPA Dynamics: The Anatomy of the Credit Card Trap in India"` (79 chars).
  * *Prevention:* Shorten H2s to ≤ 70 characters (target 45–65 chars). Check both raw string length and HTML decoded length.
* **Mistake 2: Forbidden Em-Dashes (`—` or `&mdash;`) in Headings & Titles**
  * *Why it happens:* Copy-pasting text with em-dashes as separators.
  * *Prevention:* Never use em-dashes. Use colons (`:`), hyphens (`-`), or ampersands (`&`).
* **Mistake 3: Duplicate H2 Tags on the Same Page**
  * *Why it happens:* Generic headings like `Overview`, `Conclusion`, or multiple repeated FAQ subheadings.
  * *Prevention:* Make every `<h2>` context-specific and unique on the page.
* **Mistake 4: Title Same as H1**
  * *Why it happens:* Setting `metadata.title` to the exact same string as the hero `<h1>`.
  * *Prevention:* Differentiate them (SERP hook in `<title>`, clear conversion-focused copy in `<h1>`).
* **Mistake 11: Multiple H1 Tags from CMS / Rich-Text Content (`H1: Multiple`)**
  * *Why it happens:* Rich-text or Markdown content in blog articles containing `<h1>` tags (either repeating the post title at the top of the body or using `<h1>` for subheadings).
  * *Prevention:* In `BlogPostPageClient.tsx` (`processDescription`), automatically strip any `<h1>` that duplicates the post title, and demote any remaining `<h1>` subheadings to `<h2>`. Never allow `<h1>` tags inside the rendered body content.

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
* **Mistake 9: Meta Description Length Out of Range (<100 or >155 Chars)**
  * *Why it happens:* Writing short placeholders (<100 chars) or overly wordy descriptions (>155 chars).
  * *Prevention:* Keep meta descriptions strictly between 140 and 155 characters. Include keyword + legal/relief framework + CTA.
* **Mistake 10: Incomplete or Relative Canonical URLs**
  * *Why it happens:* Omitting canonical in metadata or using relative paths (`/my-page` instead of `https://www.credsettle.com/my-page`).
  * *Prevention:* Ensure `alternates.canonical` is always an absolute URL pointing to `https://www.credsettle.com/[slug]`.
* **Mistake 11: Page Title Pixel Width Exceeding 561 Pixels (`Page Titles: Over 561 Pixels`)**
  * *Why it happens:* Titles close to 57–60 characters containing many wide capital letters (W, M, O, R, B) or numbers exceeding Screaming Frog's Google SERP pixel threshold (561px).
  * *Prevention:* Target 50–55 characters with safe pixel width (≤ 530px). Add slugs to `OPTIMIZED_TITLES` dictionary in `resources/[slug]/page.tsx` when dynamic resource titles exceed 561px.

---

### 5. Anchor Text & Outlink Quality
* **Mistake 12: Non-Descriptive Anchor Text in Internal Outlinks (`Links: Non Descriptive Anchor Text In Internal Outlinks`)**
  * *Why it happens:* CMS / Rich-text articles containing generic hyperlink anchor texts like `"Click here"`, `"learn more"`, `"read more"`, `"here"`, etc. pointing to internal domain pages.
  * *Prevention:* In `BlogPostPageClient.tsx` (`processDescription`), automatically intercept and replace all internal links using non-descriptive anchor texts with contextual, descriptive phrases based on the destination route (e.g. replacing `"Click here"` with `"Explore CredSettle loan settlement solutions"`). Never allow bare `"Click here"` anchor text in blog posts or UI links.

---

## 🛠️ Step-by-Step Protocol When Resolving Screaming Frog Issues

1. **Check `mistakes.md` First:** Review the rules above before writing or modifying any code.
2. **Apply the Fix:** Modify the metadata, headings, URLs, or components adhering strictly to the limits.
3. **Verify Compliance:**
   - Verify character counts for Title (50-60) and Description (140-155).
   - Verify all H2 lengths are ≤ 70 characters and have zero em-dashes.
   - Verify all internal links and URLs are lowercase.
   - Run type check / build verification to ensure no stray JSX tags or duplicate functions.
4. **Update `mistakes.md`:** If any new recurring pattern, quirk, or bug was encountered, add it to this file immediately with explanation and prevention instructions.
