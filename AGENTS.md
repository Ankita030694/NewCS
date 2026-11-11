# Project Instructions & Screaming Frog Protocols

## Mandatory Screaming Frog & SEO Fix Protocol
- **Refer to `mistakes.md`**: Whenever fixing Screaming Frog issues or generating/modifying pages, always refer to [mistakes.md](file:///d:/Samagra%20Jaiswal/credsettle/NewCS/mistakes.md) first.
- **Strict Verification**:
  - `Title`: 50–60 characters (never > 60, never < 30).
  - `Meta Description`: 140–155 characters (never > 155, never < 100).
  - `H1`: Exactly 1 per page, 30–65 characters, not identical to `<title>`.
  - `H2`: ≤ 70 characters (target 45–65), 0 em-dashes (`—`), 100% unique per page.
  - `URLs & Links`: Strictly lowercase with hyphens.
  - `Code Quality`: 0 TypeScript errors (`npx tsc --noEmit`), no duplicate function declarations, no stray JSX tags.
- **Log Recurring Issues**: If any issue repeats or a new edge case is found, document it in `mistakes.md` immediately with cause and prevention rules.

## Lead Differentiation Lane (owner decision, 2026-11-11)
- **Read `issues/LEAD_DIFFERENTIATION_PLAN_2026-11.md` before creating any page.** It holds the lane, backlog, roadmap and weekly KPI definitions.
- CredSettle's lane: **credit card issuer × problem** (1st), **PSU-bank OTS/Samadhan scheme trackers** (2nd), **small app lenders** (3rd). Do not create pages in AMA's lane (Lok Adalat, RBI 2027 rules, Section 25/138, legal/harassment-first, "maximum waiver 2027", "best time/March", big-4 bank PL hubs) or SettleLoans' lane (salaried personal-loan sub-intents: EMI bounce charges, salary-account auto-debit, employer/job).
- **Existing pages are frozen**: no rewrites, redirects, noindex or pruning. Allowed: new pages, links from existing pages to new pages, new sitemap entries.
- Minimum case size ₹3L; funnels on new pages ask for total debt across cards, PL and app loans.
- New pages: no AggregateRating/review-count schema, no unverifiable stats, sourced & dated facts. One page per commit, logged in `issues/seo_change_log.md`.
