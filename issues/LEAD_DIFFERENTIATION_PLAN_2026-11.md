# CredSettle: Lead Differentiation Plan (Nov 2026 – Mar 2027)

Owner decisions captured on 2026-11-11 (20-question intake run from the AMA workspace). Read this file fully before creating any page.

## 1. Why this plan exists

The company runs three lead sites with the **same service, same team and same CRM (CRMAMA)**: AMA Legal Solutions (flagship), CredSettle, SettleLoans. They were capturing the same people and ranking for the same keywords.

Measured on GSC, 90 days (2026-08-10 → 2026-11-08):

| Metric | Value |
|---|---|
| CredSettle non-brand queries | 13,202 |
| …also ranking for AMA | 6,270 (**47.5%**) |
| Share of CredSettle clicks coming from those shared queries | **90.7%** |
| CredSettle total | 1,211 clicks / 125k imps (AMA: 7,506 clicks / 699k imps) |

CredSettle is currently a smaller copy of AMA. The fix is **not** to change existing pages; it is to point every *new* page at a lane AMA and SettleLoans do not target.

## 2. Owner rules (non-negotiable)

1. **Everything already live stays intact.** No content rewrites, no redirects, no noindex, no pruning of existing pages (including the 1,548 `/credit-card-settlement/<bank>/<state>` pages and city pages).
2. **Allowed:** brand-new pages + adding links *from* existing pages *to* new pages + adding new URLs to the sitemap/HTML sitemap.
3. **Minimum case size stays ₹3L.** A borrower hands *all* their debts to one firm, so the lane only decides the *search entry point*; the funnel must still capture the full debt picture (cards + PL + app loans).
4. AMA stays the broad flagship. CredSettle goes **deeper** in its lane rather than wider.
5. No language/geo split. Topic + search intent are the only separators.
6. Pace: get ready for the Dec → Mar settlement season as fast as possible.
7. KPIs reported **weekly**: (a) unique ₹3L+ leads not already in the CRM from another brand, (b) organic clicks on new pages from queries where AMA is not in the top 10, (c) converted clients.

## 3. CredSettle's lane: "Card, Scheme & App-Lender specialist"

| Track | Priority | What it owns | Evidence |
|---|---|---|---|
| **A. Credit card issuer × problem** | 1st | Minimum-due trap, revolving interest, card blocked for non-payment, multiple cards from one issuer, EMI-on-card / add-on card default, over-limit & late fees, issuer settlement % (data-led), issuer settlement letters | CS already beats AMA on RBL % (pos 4.5 vs 7.5), ICICI % (7.6 vs 11.2), Axis letter format (11.1 vs 16.8), PNB / BoB / HSBC / Federal / Kotak CC settlement. AMA ranks 45–78 on "minimum due" queries |
| **B. PSU-bank OTS / Samadhan scheme trackers** | 2nd (seasonal, Dec–Mar) | SBI, Union, BoB, PNB, Canara, Indian Bank, Central Bank OTS schemes **by year** + how to apply + eligibility + deadline | "sbi loan settlement scheme 2026" CS 2.2 vs AMA 5.3 (1,849 imps); Union OTS 2026 4.0 vs 9.0; BoB OTS 2026 2.1 vs 5.4; "union npa samadhan" 3.7 vs 9.0. Today these rank from `/loan-settlement/sbi` and `/loan-settlement/union-bank`, not from dedicated scheme pages |
| **C. Small app lenders & fintech NBFCs** | 3rd | mPokket, KreditBee, Branch, Rupee112, Niro, Fibe, Stashfin, MobiKwik, MoneyTap, Ring, CASHe, Home Credit… settlement %, settlement offer, home visit, legal notice fake/real | `/loan-settlement-by-bank/mpokket` = 4,498 imps, 96 clicks. CS leads AMA on mpokket settlement (5.3 vs 7.4), kreditbee legal notice fake or real (4.2 vs 8.8), branch loan settlement (3.2 vs 8.7) |

> [!IMPORTANT]
> App-loan debts are usually small (₹5k–₹50k each). With a ₹3L floor, Track C pages must frame the funnel around **"total of all your app loans + cards + personal loans"** and target "multiple app loans" intent, otherwise they generate sub-₹3L junk leads.

### Do NOT create on CredSettle (owned by AMA or SettleLoans)

- **AMA lane:** Lok Adalat, RBI recovery rules 2027 cluster, "maximum waiver 2027" pages, "best time / March to settle", loan-settlement-percentage hub, Section 25 PSSA / Section 138, harassment & legal-notice-first topics, SARFAESI/DRT/IBC/"best lawyer for…", payday loans, big-4 bank PL hubs.
- **SettleLoans lane:** salaried personal loans: EMI bounce charges, salary-account auto-debit/lien, employer contacted, settling while employed, top-up / multiple PLs from one bank, bonus/appraisal/job-switch timing.
- **Keyword rule:** if a query's head term is "<bank> personal loan …" it is not CredSettle's. If it contains "credit card", "OTS / scheme / samadhan", or an app-lender name, it is.

## 4. New-page standards (on top of AGENTS.md / SEO_COMPLIANCE_GUIDELINES.md / mistakes.md)

- **Before creating a slug:** `ls src/app | grep <keyword>` and grep the sitemap route. If a page already covers the intent, do **not** create a near-duplicate; add a link instead.
- **No `AggregateRating` / review-count schema and no unverifiable stats** ("500Cr+", "guaranteed 70% waiver") on new pages. AMA removed these as spam signals. Use Article + FAQPage + BreadcrumbList only.
- **Facts must be sourced and dated.** OTS scheme details for 2027 may not be announced yet: say so, show the latest notified scheme and its source. (AMA had to correct a wrong RBI date in Nov 2026.) Do not publish bank phone numbers / emails unless they come from the bank's official site; link the source.
- **Settlement % = ranges with caveats**, never promises.
- **Funnel:** embed the existing `InteractiveLeadFunnel` near the hero with copy that asks for *total* debt across cards, PL and app loans (brackets start at ₹3L).
- **Internal links (allowed):** each new page gets ≥3 contextual links *from* relevant existing pages (bank pages, `/settle-multiple-credit-cards`, `/credit-card-minimum-due-trap`, `/loan-settlement-by-bank/<lender>`, `/tools`), plus sitemap route + HTML sitemap entry. Add footer links only at the END of a link array.
- **One page = one commit**, conventional commit messages (`feat(seo): …`, `seo(internal-links): …`). Log every page in `issues/seo_change_log.md` (create it, using the same columns as AMA's: Date | URL | Change | Reason | Baseline | Review date | Result).

## 5. Signature tool (recommended)

**Credit Card Settlement & Minimum-Due Calculator** at `/tools/credit-card-minimum-due-calculator`. It is separate from the existing `credit-card-interest-calculator`, which stays untouched.
- Autocomplete demand: "credit card minimum due calculator", "credit card minimum due meaning / charges / kya hota hai".
- Inputs: issuer, outstanding per card (multi-card), APR, months paying minimum only.
- Output: months to clear on minimum due, total interest, and an indicative settlement range by issuer with a caveat.
- **Lead handoff only when total debt ≥ ₹3L**; below that, show self-help steps. Show the funnel prefilled with the computed total.

Second tool (Wave 2): **Multiple Credit Card Payoff vs Settlement Planner** ("multiple credit card payoff calculator" autocomplete).

## 6. Roadmap & backlog

Pace: **8 new pages per week** (≈2/day Mon–Thu; a tool counts as 2). Each page needs its links + sitemap entry in the same week.

### Phase 0: setup (Nov 11–15)
- [ ] Create `issues/seo_change_log.md` and record a GSC baseline (`scripts/` can reuse the service account in `.env`: `FIREBASE_CLIENT_EMAIL` / `FIREBASE_SERVICE_ACCOUNT`, property `sc-domain:credsettle.com`, scope `webmasters.readonly`).
- [ ] Weekly KPI script (`scripts/weekly_lane_report.js`):
  - (a) Firestore `Form` docs this week with debt ≥ ₹3L whose phone does **not** exist in AMA `form` or SettleLoans `ContactPageForm` before that date. This needs read access to the other two Firebase projects; derive brand from `submissionUrl` domain, **no schema change**.
  - (b) GSC clicks on new-page URLs, split by whether AMA ranks top-10 for the query.
  - (c) converted clients: pull from CRMAMA or the `payment:'paid'` flag.
- [ ] Confirm the next free slugs for the Wave 1 list below.

### Wave 1: Card issuer × problem (Nov 16 – Dec 6)
| # | Proposed slug | Target intent |
|---|---|---|
| 1–2 | `/tools/credit-card-minimum-due-calculator` | signature tool |
| 3 | `/credit-card-blocked-due-to-non-payment` | "credit card blocked due to non payment" |
| 4 | `/hdfc-credit-card-blocked-due-to-non-payment` | autocomplete-validated issuer variant |
| 5 | `/sbi-credit-card-blocked-due-to-non-payment` | issuer variant (SBI Card) |
| 6 | `/credit-card-bill-after-festive-season-cannot-pay` | seasonal Nov–Dec post-Diwali bills |
| 7 | `/credit-card-emi-conversion-default-settlement` | EMI-on-card default |
| 8 | `/add-on-credit-card-default-who-is-liable` | add-on card |
| 9 | `/credit-card-over-limit-and-late-fee-before-settlement` | fees stacking |
| 10 | `/sbi-credit-card-settlement-email-id-and-number` | autocomplete: "sbi credit card settlement email id / number online" (official SBI Card channels only) |
| 11 | `/rbl-credit-card-settlement-letter-format` | extends CS's #1 RBL position |
| 12 | `/icici-credit-card-blocked-due-to-non-payment` | issuer variant |
| 13–16 | issuer % pages where CS leads and no dedicated page exists (check first): Federal, Kotak, HSBC, BoB, PNB, Union credit card settlement % | data-led |

### Wave 2: OTS 2027 + app lenders (Dec 7 – Jan 10)
- OTS scheme trackers: `/sbi-ots-scheme-2027`, `/union-bank-ots-scheme-2027`, `/bank-of-baroda-ots-scheme-2027`, `/pnb-ots-scheme-2027`, `/canara-bank-ots-scheme-2027`, `/indian-bank-ots-scheme-2027`, `/union-npa-samadhan-scheme-2027`.
  - Link each from its existing `/loan-settlement/<bank>` page; that page stays unchanged apart from the added link.
  - Status line at the top: "2027 scheme announced? Yes/No (date checked)".
- App-lender spokes (multiple-app-loan framing): `/kreditbee-recovery-agent-home-visit` (601 imps, both sites ~pos 10), `/will-kreditbee-agents-come-home`, `/moneytap-loan-settlement`, `/mpokket-30-90-days-meaning`, `/rupee112-repayment-and-settlement`, `/ring-loan-settlement`, `/cashe-loan-settlement`, `/home-credit-loan-settlement`, `/multiple-app-loans-settlement-total-above-3-lakh`.
- Tool 2: Multiple Credit Card Payoff vs Settlement Planner.

### Wave 3: March year-end, scheme-led (Jan 11 – Feb 7)
Pages must be live ≥6 weeks before the March peak.
- `/psu-bank-ots-deadline-march-31-2027` (scheme deadlines only; do **not** write a generic "settle in March" page, which is AMA's).
- `/credit-card-settlement-before-financial-year-end-by-issuer` (issuer write-off cycles, framed per issuer).
- Remaining issuer × problem gaps from the weekly GSC report.

### Run phase (Feb 8 – Mar 31)
4 new pages/week from report gaps + add internal links to winners + weekly KPI report.

## 7. Weekly report format
```
Week of <date> | CredSettle
New pages shipped: n (list)      Indexed: n/n
(a) Unique ₹3L+ leads not in CRM from other brands: n (vs last week)
(b) Clicks on new pages from non-AMA-top-10 queries: n
(c) Converted clients: n
Overlap check: % of new-page clicks from queries where AMA is top-10 (target < 20%)
```

## 8. Open decisions for the owner
1. Weekly KPI (a) needs read access to AMA and SettleLoans Firestore. OK to use the existing service accounts?
2. Phone/WhatsApp `+91 8800226635` is shared with SettleLoans and AMA. A dedicated CredSettle number on **new pages only** would make call leads attributable. Approve?
