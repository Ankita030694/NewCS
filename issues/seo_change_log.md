# CredSettle SEO Change Log

Rules (`AGENTS.md` + `issues/LEAD_DIFFERENTIATION_PLAN_2026-11.md`):
- **Existing pages are frozen:** no content rewrites, redirects, noindex, or pruning on live URLs.
- **Allowed changes:** brand-new pages inside CredSettle's differentiation lane (Credit Card Issuer x Problem, PSU-Bank OTS/Samadhan Scheme Trackers, Small App Lenders with >= ₹3L combined debt framing), contextual inbound `<Link>` additions from existing hub pages to verified new pages, and sitemap / tools directory registrations.
- **Baseline snapshot:** `issues/baseline_2026-11-11_credsettle.json` (`sc-domain:credsettle.com`, 90d `2026-08-11` to `2026-11-08`: 6,908 clicks, 419,167 impressions, 1.65% CTR, avg pos 12.2; 28d `2026-10-12` to `2026-11-08`: 2,070 clicks, 131,480 impressions, 1.57% CTR, avg pos 10.5).
- **One page per micro-commit**, logged below with a 14-day review date.

| Date | URL / file | Change | Reason | Baseline | Review date | Result |
|---|---|---|---|---|---|---|
| 2026-11-11 | `AGENTS.md`, `issues/LEAD_DIFFERENTIATION_PLAN_2026-11.md` | Added Lead Differentiation Plan (Nov 2026 - Mar 2027) and lane freeze/compliance rules | Separate CredSettle's search entry points from AMA Legal Solutions & SettleLoans while enforcing ₹3L+ total-debt floor | Site 90d: 6,908c / 419,167i (1.65% CTR, pos 12.2) | 2026-11-25 | Deployed 2026-11-11 (commit `9a76b8d`) |
| 2026-11-11 | `issues/baseline_2026-11-11_credsettle.json`, `issues/seo_change_log.md` | Captured read-only 90d & 28d GSC baseline (`sc-domain:credsettle.com`) and initialized SEO change log | Establish pre-rollout organic baseline for hub pages and new differentiation spokes | 28d: 2,070c / 131,480i (1.57% CTR, pos 10.5) | 2026-11-25 | Deployed 2026-11-11 |
