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
