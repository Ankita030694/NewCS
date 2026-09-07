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

Paste this requirement into your prompt when generating new pages:

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
