# CredSettle SEO & Screaming Frog Compliance Guidelines

> **Purpose:** This document is the strict technical specification for all landing and topic pages created for **CredSettle** (`https://www.credsettle.com`).  
> Any page generated for CredSettle **MUST strictly comply** with the rules defined here to prevent issues in **Screaming Frog SEO Spider audits** and ensure 100% clean passes.

---

## 1. Screaming Frog Thresholds & Rules Matrix

| SEO Element | Strict Screaming Frog Limit | Ideal Target Range | Common Audit Failure to Prevent |
| :--- | :--- | :--- | :--- |
| **Page Title (`<title>`)** | **Max 60 characters** (≤ 580px) | **50 – 60 characters** | `Page Title: Over 60 Characters`, `Below 30 Characters` |
| **Meta Description** | **Max 155 characters** (≤ 960px) | **140 – 155 characters** | `Meta Description: Over 155 Characters`, `Below 100 Characters` |
| **H1 Tag** | **Strictly 1 per page** | **30 – 65 characters** | `H1: Missing`, `H1: Multiple`, `H1: Over 70 Characters` |
| **H2 Tags (`<h2>`)** | **Max 70 characters** (both raw & decoded) | **45 – 65 characters** | `H2: Over 70 Characters`, `H2: Duplicate`, `H2: Missing` |
| **Punctuation in Headings** | **STRICTLY ZERO EM-DASHES (`—`)** | Use colons (`:`), hyphens (`-`), `&` | Broken SERP rendering, parsing quirks, stylistic inconsistency |
| **Title vs H1 Distinction** | **Must NOT be identical** | Distinct SERP Title vs on-page H1 | `Page Titles: Same as H1` |
| **H2 Duplication** | **100% unique per page** | Distinct descriptive headings | `H2: Duplicate` |
| **Canonical URL** | **100% self-referencing absolute URL** | `https://www.credsettle.com/[slug]` | `Canonical: Missing`, `Canonical: Relative URL` |
| **TypeScript / Build** | **0 compilation errors** | `npx tsc --noEmit` must pass | Next.js build failure |

---

## 2. Page Title (`metadata.title`) Rules

1. **Character Length:** Strictly **50 to 60 characters** (inclusive of spaces and branding suffix).
   - **DO NOT exceed 60 characters** under any circumstances (Screaming Frog flags `Over 60 Characters` at 61+).
   - **DO NOT drop below 30 characters** (Screaming Frog flags `Below 30 Characters`).
2. **Brand Suffix:** Append `| CredSettle` or `- CredSettle` if character budget permits, or naturally integrate it.
3. **Keyword Placement:** Place the primary target keyword as close to the beginning as possible.
4. **Uniqueness:** Must be 100% distinct across the entire site. No two pages may share the same title.

### ✅ Compliant Page Title Examples
- `Credit Card Settlement Guide: Settle Debt in India` (51 chars)
- `SARFAESI Act Defense: Protect Your Home from Auction` (53 chars)
- `Settle Bike Loans in India: 50% Relief & No Dues` (48 chars)
- `Bank Recovery Agent Harassment: File Police Complaint` (53 chars)
- `MSME Loan Default Legal Action: Complete Defense Guide` (54 chars)

### ❌ Non-Compliant Page Title Examples
- `How to Convince Your Bank for One Time Settlement of Personal Loans and Credit Cards in India` *(89 chars - FLAG: Over 60 Characters)*
- `Loan Settlement` *(15 chars - FLAG: Below 30 Characters)*

---

## 3. Meta Description (`metadata.description`) Rules

1. **Character Length:** Strictly **140 to 155 characters**.
   - **DO NOT exceed 155 characters** (Screaming Frog flags `Over 155 Characters` at 156+; Google SERPs truncate).
   - **DO NOT drop below 100 characters** (Screaming Frog flags `Below 100 Characters` at <100).
2. **Core Components:**
   - Naturally includes the primary target keyword.
   - Mentions concrete relief or legal framework (e.g. *"50% to 75% waiver"*, *"stop harassment"*, *"RBI guidelines"*).
   - Contains a concise, action-oriented Call-to-Action (CTA).
3. **Punctuation:** Never use em-dashes (`—`). Use commas, periods, or hyphens.

### ✅ Compliant Meta Description Examples
- `Master the credit card settlement process in India. Learn how to negotiate 50% to 75% waivers, stop harassment, and secure an NOC.` *(132 chars - optimal)*
- `Facing bank recovery agent harassment? Learn how to file a police complaint, invoke RBI Fair Practices guidelines, and protect your family with CredSettle.` *(154 chars - optimal)*
- `Defaulted on bike loan EMI? Understand bank hypothecation rights, stop illegal vehicle seizure under RBI rules, and negotiate 50% OTS with CredSettle.` *(150 chars - optimal)*

### ❌ Non-Compliant Meta Description Examples
- `Learn how to settle your loan with bank recovery agents under RBI rules.` *(71 chars - FLAG: Below 100 Characters)*
- `Comprehensive, step-by-step authoritative legal guide detailing how borrowers facing severe delinquency and NPA status can defend against aggressive recovery agents, file police FIRs under BNS, and achieve complete debt freedom with CredSettle.` *(241 chars - FLAG: Over 155 Characters)*

---

## 4. Headings Architecture (`<h1>`, `<h2>`) — CRITICAL

### H1 Tag Rules
- **Quantity:** Strictly **ONE** `<h1>` tag per page (Screaming Frog flags `H1: Missing` or `H1: Multiple`).
- **Length:** 30 to 65 characters (never exceed 70 characters).
- **Placement:** Placed at the top of the main hero section.
- **Differentiation from Page Title:** The `<h1>` MUST NOT be 100% identical to `metadata.title` (Screaming Frog flags `Page Titles: Same as H1`). Tailor `<title>` for SERP CTR (with secondary hooks/brackets) and `<h1>` for on-page conversion and clear user intent.

### H2 Tag Rules (`<h2>`) — High Priority Audit Focus
1. **Length Limit:** Every single `<h2>` MUST BE **≤ 70 characters**.
   - **Target Range:** 45 to 65 characters.
   - **Entity Count Rule:** Both raw code characters (e.g. with `&amp;`) AND decoded characters (with `&`) must be **≤ 70 characters**.
2. **STRICTLY ZERO EM-DASHES (`—`) ALLOWED:**
   - **NEVER** use em-dashes (`—` or `&mdash;`) in any heading.
   - Use colons (`:`), hyphens (`-`), ampersands (`&`), or commas (`,`) instead.
3. **No On-Page Duplicate H2s:**
   - Every `<h2>` on the page must be unique (prevents Screaming Frog `H2: Duplicate` warnings).
4. **Section Numbering & Matching Anchor IDs:**
   - Number major sections sequentially (`1.`, `2.`, `3.` ...).
   - Ensure the containing `<section id="...">` ID matches the Table of Contents anchor link (`href="#..."`).

### ✅ Compliant H2 Heading Examples (≤ 70 chars, No Em-Dashes)
- `1. Debt Economics: Anatomy of the Credit Card Trap` (50 chars)
- `2. Financial Breakdown: True Principal vs Inflated Dues` (55 chars)
- `3. Resolution Comparison: Debt Relief Pathways` (46 chars)
- `4. CIBIL Algorithm: Post-Settlement Credit Rebuilding` (52 chars)
- `5. Step-by-Step SOP: Verified Debt Resolution Protocol` (54 chars)
- `6. Statutory Notice Defense: Legal Protections` (46 chars)
- `7. 3-Tier Escalation Matrix: Institutional Redressal` (51 chars)
- `8. Procedural Timeline: Default to Resolution Milestones` (56 chars)
- `9. Specialized Scenarios: Layoffs & ARC Assignments` (49 chars)
- `Frequently Asked Questions: Credit Card Settlements` (52 chars)

### ❌ Non-Compliant H2 Heading Examples
- `1. Debt Economics & NPA Dynamics: The Anatomy of the Credit Card Trap in India` *(79 chars - FLAG: H2 Over 70 Characters)*
- `Step-by-Step Settlement SOP — How to Settle Your Loans — CredSettle` *(67 chars - FLAG: Contains Forbidden Em-Dashes)*
- `Overview` *(8 chars - generic; causes duplicate H2 flags)*

---

## 5. Pre-Publish Screaming Frog Audit Checklist

Before considering any page ready, verify these 8 core audit checkpoints:

- [ ] **1. Title Length:** `metadata.title` is strictly **50–60 characters** (never > 60).
- [ ] **2. Description Length:** `metadata.description` is strictly **140–155 characters** (never > 155, never < 100).
- [ ] **3. Canonical URL:** `alternates.canonical` points to `https://www.credsettle.com/[slug]`.
- [ ] **4. Single H1:** Exactly ONE `<h1>` on the page, length between 30 and 65 characters.
- [ ] **5. H2 Length Check:** Every single `<h2>` is **≤ 70 characters** (both raw HTML & decoded text).
- [ ] **6. No Em-Dashes:** Strictly ZERO `—` or `&mdash;` characters in titles, descriptions, or headings.
- [ ] **7. No Duplicate H2s:** All `<h2>` tags on the page are unique.
- [ ] **8. TypeScript Compilation:** `npx tsc --noEmit` passes with 0 errors.

---

## 6. Prompt Instruction Snippet for Page Creation



```markdown
CRITICAL SCREAMING FROG SEO COMPLIANCE:
The page MUST STRICTLY COMPLY with `SEO_COMPLIANCE_GUIDELINES.md`:
1. Title: Strictly 50–60 characters (NEVER exceed 60 characters).
2. Meta Description: Strictly 140–155 characters (NEVER exceed 155, NEVER below 100).
3. H1: Exactly ONE H1 tag, length 30–65 characters.
4. H2: EVERY H2 tag MUST BE strictly <= 70 characters (target 45–65 characters). Both raw string and decoded characters must be <= 70 characters.
5. Punctuation: STRICTLY ZERO EM-DASHES (—) in headings, titles, or metadata. Use colons, hyphens, or & instead.
6. H2 Duplication: Ensure all H2s on the page are unique and match their TOC anchor IDs.
7. Canonical: Absolute self-referencing canonical URL (https://www.credsettle.com/[slug]).
8. Code Quality: Clean TypeScript with 0 compilation errors.
```

## 7. Content Readability Rules: Flesch Reading Ease (CRITICAL)

**Objective:** Every new page created for CredSettle MUST meet the content readability requirements measured by Screaming Frog SEO Spider. Content must not be classified as "Difficult" or "Very Difficult" under the Flesch Reading Ease test.

### 7.1. Strict Flesch Reading Ease Score

Follow these readability score classifications:

| Flesch Reading Ease Score | Readability Level | Requirement                    |
| ------------------------- | ----------------- | ------------------------------ |
| 90-100                    | Very Easy         | Acceptable                     |
| 80-89                     | Easy              | Acceptable                     |
| 70-79                     | Fairly Easy       | Ideal                          |
| 60-69                     | Standard          | Minimum preferred target       |
| 50-59                     | Fairly Difficult  | Acceptable only when necessary |
| 30-49                     | Difficult         | NOT ACCEPTABLE                 |
| 0-29                      | Very Difficult    | STRICTLY PROHIBITED            |

**Mandatory requirements:**

1. Target a Flesch Reading Ease score of 60 or higher for all newly created pages.
2. Never publish content with a Flesch Reading Ease score below 50.
3. Avoid complex sentence structures, excessive legal terminology, lengthy paragraphs, and unnecessarily complicated explanations.
4. Write for ordinary Indian borrowers who may have little knowledge of banking laws, financial regulations, or legal procedures.
5. Do not sacrifice legal accuracy to achieve a higher readability score.

### 7.2. Sentence Length Rules

1. Target an average sentence length of 12-18 words.
2. Avoid sentences exceeding 25 words whenever possible.
3. Split sentences containing multiple independent clauses into shorter sentences.
4. Avoid combining several legal conditions, exceptions, and explanations into a single sentence.
5. Use direct sentence structures with a clear subject, verb, and object.
6. Prefer active voice over passive voice whenever appropriate.

**Bad example:**

"In accordance with the applicable regulatory framework governing financial institutions, borrowers may seek appropriate remedies against unlawful recovery practices that contravene established procedural requirements."

**Good example:**

"RBI rules protect borrowers from unlawful recovery practices. You can file a complaint if a lender breaks these rules."

### 7.3. Paragraph Length Rules

1. Keep paragraphs between 2 and 4 sentences.
2. Aim for approximately 40-80 words per paragraph.
3. Avoid paragraphs exceeding 100 words unless absolutely necessary.
4. Break long explanations into smaller paragraphs with clear transitions.
5. Use bullet points and numbered lists for procedures, legal rights, eligibility criteria, and document requirements.
6. Ensure every paragraph explains one main idea.

### 7.4. Simple Language and Legal Terminology

1. Use familiar English words whenever possible.
2. Explain complex legal and financial terms immediately after introducing them.
3. Do not use several unfamiliar legal terms in the same sentence.
4. Retain essential statutory names, section numbers, case names, and regulatory terminology.
5. Explain the practical meaning of every important legal provision in plain English.
6. Avoid unnecessary jargon, redundant expressions, and overly formal language.
7. Use clear transitions such as "For example," "This means," "However," and "As a result."
8. Use contractions only when appropriate for the professional tone of the page.

**Example:**

Instead of writing:

"The creditor may initiate enforcement proceedings pursuant to the applicable statutory provisions."

Write:

"The lender may start legal action under the applicable law."

When a statutory term is essential, retain it and explain it in simple language.

### 7.5. Content Structure and Readability

1. Use descriptive H2 and H3 headings to divide complex topics into manageable sections.
2. Keep each section focused on one question or subject.
3. Explain the main answer before introducing detailed legal analysis.
4. Use numbered steps for legal procedures and settlement processes.
5. Use tables when comparing legal options, timelines, charges, or borrower rights.
6. Include relevant examples to explain difficult financial or legal concepts.
7. Avoid repeating the same information across multiple sections.
8. Avoid excessive introductory text, filler sentences, and unnecessary explanations.
9. Keep FAQs direct and concise while answering the actual question.
10. Maintain all existing SEO heading restrictions, including the 70-character maximum for H2 headings and the prohibition on em-dashes.

### 7.6. Flesch-Kincaid Grade Level

Where available, also evaluate the Flesch-Kincaid Grade Level.

1. Aim for a grade level of approximately 8-10.
2. Prefer sentence structures understandable to readers with a basic secondary-school education.
3. Explain technical concepts without removing legally essential details.
4. Treat the grade-level score as a secondary readability indicator. The primary acceptance metric is Flesch Reading Ease.

### 7.7. Mandatory Pre-Publication Readability Audit

Before publishing any newly created page:

1. Review the complete rendered page content, including headings, paragraphs, lists, and FAQs.
2. Calculate or measure the Flesch Reading Ease score using a reliable readability analyzer.
3. Target a score of at least 60.
4. If the score is below 60, simplify the language, shorten sentences, and restructure lengthy paragraphs.
5. Repeat the analysis until the target score is achieved, where reasonably possible without compromising legal accuracy.
6. Check for both Difficult and Very Difficult classifications.
7. Verify that important legal explanations remain accurate and complete.
8. Run Screaming Frog against the published URL and inspect its readability results.
9. Fix any readability issues identified by the actual Screaming Frog crawl.
10. Never claim that a readability issue is resolved without checking the final rendered content and the relevant Screaming Frog result.

**Important:** A readability score calculated before rendering is only a preliminary check. The final result must be verified against the content Screaming Frog actually crawls.

### 7.8. Mandatory Instruction for AI Page Generation

Every prompt used to create a new CredSettle page MUST include the following instruction:

"CRITICAL CONTENT READABILITY REQUIREMENT:

Write all page content according to the Flesch Reading Ease formula. Target a score of 60 or higher. Never publish content with a score below 50.

Use an average sentence length of 12-18 words, short paragraphs, active voice, simple English, clear transitions, and plain-language explanations of complex legal terms.

Avoid unnecessarily long sentences, excessive legal jargon, dense paragraphs, redundant explanations, and complicated sentence structures.

Preserve the accuracy of Indian banking laws, RBI regulations, statutory provisions, and legal explanations. Do not remove essential legal information merely to improve readability.

Before completing the page, evaluate the full content using a reliable readability analyzer. Rewrite difficult passages and repeat the check until the target score is achieved, where reasonably possible.

After deployment, crawl the final URL using Screaming Frog SEO Spider. Inspect the actual readability results and fix any remaining Difficult or Very Difficult classifications.

Do not introduce new SEO issues while improving readability. Continue to comply with all existing title, meta description, H1, H2, canonical URL, duplicate heading, and TypeScript requirements."
