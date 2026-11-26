# CredSettle visual and mobile audit (2026-11-26)

**Scope:** 6 URLs × 2 devices. Live site, captured 2026-11-26 (IST).
**Tooling:** Python Playwright with Chromium.
- **Desktop:** 1366×768, DPR 1.
- **Mobile:** 390×844, `isMobile`, `hasTouch`, DPR 2, iOS UA.

**Capture method:**
- Each page loaded to `networkidle`, then a 2 s wait.
- The fold shot was taken with no scrolling.
- The page was then scrolled to the bottom (to trigger lazy content) and returned to the top before the full-page shot, capped at 8000 CSS px.
- An extra "midscroll" viewport shot was taken at one-third of the page height to catch scroll-triggered overlays.

No consent or popup clicks were made because nothing appeared.

**Screenshots** (`/Users/amalegalsolutions/Desktop/AMAWORK/credsettlefigma/credsettle/issues/seo-audit-2026-11-26/screenshots/`):
- `{home|hdfc|hdfc-maharashtra|pl-karnataka|masterclass|cc-interest-calc}-{desktop|mobile}-{fold|full|midscroll}.png`
- `{home|hdfc|hdfc-maharashtra|pl-karnataka|masterclass|cc-interest-calc}-mobile-menu-open.png`
- `programmatic-template-comparison-desktop-fold.png` (HDFC×Maharashtra, HDFC×Karnataka, ICICI×Maharashtra side by side)

Raw metrics: `.../scratchpad/reports/metrics.json`, `deep.json`, `similarity.json`. Scripts: `.../scratchpad/tools/` (`capture.py`, `deep.py`, `similarity.py`, `slice.py`).

> **Constraint reminder:** AGENTS.md (owner decision 2026-11-11) freezes existing pages: no rewrites, redirects, noindex or pruning. Most fixes below touch existing pages or shared components, so they need explicit owner sign-off before anyone implements them.

---

## 1. Measured summary

| Page | Device | Page height (px) | H1 visible on load? (y top–bottom, size) | Primary CTA above fold? (first CTA y) | Horizontal overflow (scrollWidth / innerWidth) | Tap targets <48px (of which <24px) | Text <12px | Overlay coverage of viewport |
|---|---|---|---|---|---|---|---|---|
| Home | Desktop | 8,390 | Yes (248–363, 48px) | **Yes**: "Register Now" (y 464) | None (1366/1366) | 48 (24) | 8 | WhatsApp 1.9% + reCAPTCHA 0.4% |
| Home | Mobile | 11,845 | Yes (290–338, **20px**) | **Yes**: "Register Now" (y 493) | None (390/390) | 41 (33) | 5 | WhatsApp 6.2% + reCAPTCHA 1.3% |
| HDFC | Desktop | 5,612 | Yes (181–277, 48px) | **No** (892) | None | 51 (26) | 0 | 2.3% (+ sticky sidebar in its own column) |
| HDFC | Mobile | 10,270 | Yes (197–317, 36px) | **No**: first CTA at **8,132 (79% down the page)** | None | 46 (34) | 0 | 6.2% + 1.3% |
| HDFC × Maharashtra | Desktop | 3,271 | Yes (181–277, 48px) | **No** (878) | None | 50 (27) | 0 | 2.3% |
| HDFC × Maharashtra | Mobile | 5,436 | Yes (197–317, 36px) | **No** (3,298, 61% down) | None | 45 (35) | 0 | 6.2% + 1.3% |
| PL Karnataka | Desktop | 9,266 | Yes (173–368, 40px, weight **400**) | **Yes** (540) | None | 52 (19) | 0 | 2.3% |
| PL Karnataka | Mobile | 17,354 | Yes (348–438, 24px) | **Yes** (666; button is 233×36) | None | 48 (27) | 5 (+ 12px hero paragraph) | 6.2% + 1.3% |
| Masterclass | Desktop | 9,473 | Yes (249–419, 48px) | **No** (1,033) | None | 51 (27) | 1 | 2.3% (+ sticky side rails in own columns) |
| Masterclass | Mobile | 13,321 | Yes (225–385, 34px) | **None anywhere** (sidebar CTA is `hidden lg:block`; only the form, at 5,593) | None | 60 (35) | 0 | 6.2% + 1.3% |
| CC interest calculator | Desktop | 4,954 | Yes (243–283, 36px) | Tool inputs: yes. Consult CTA: no (2,976) | None | 76 (30) | **37** | 2.3% |
| CC interest calculator | Mobile | 7,770 | Yes (234–298, 24px) | Tool inputs: yes. Consult CTA: no (5,298) | None | 66 (37) | **37** | 6.2% + 1.3% |

**Notes on the numbers:**
- **Tap targets:** counts exclude inline text links inside paragraphs. Across all mobile pages, 27 per page are footer links/icons. Header and table-of-contents pills (36–39px tall) make up most of the rest.
- **Overlay coverage:** the WhatsApp and reCAPTCHA overlays overlap each other, so the combined maximum is about 7.5% of the mobile viewport.
- **Popups:** no modal, interstitial, cookie wall, `role=dialog` or chat iframe appeared on any page, at load or after scrolling. None of the 12 captures has an overlay above 30% of the viewport.

**What is fine everywhere:**
- No horizontal overflow on any capture.
- `meta viewport` is `width=device-width, initial-scale=1`.
- Exactly one H1 per page, always visible above the fold.
- Body text is 16px or larger on most content.
- The mobile hamburger menu opens and works on every page (menu rows are 342×40).

---

## 2. Per-page notes

### 2.1 Home `/`
Files: `home-desktop-fold.png`, `home-mobile-fold.png`, `home-*-full.png`, `home-mobile-menu-open.png`

**Desktop above the fold:**
- The H1 "India's Most Trusted Loan Settlement Company", the "Loan Recovery calls?" tagline and the "Register Now" CTA are all visible. The header also has a "Register now" button.
- Trust strip visible: Google 4.6/5 and Trustpilot 4.6/5 ("2000+ reviews"), bank logos, and media logos (mint, Medium, mid-day, YourStory).
- The rating badge text is **9.7–10px** ("4.6/5", "2000+ reviews", "Excellent").

**Mobile above the fold:**
- H1 and "Register Now" (240×70) are visible.
- **Visual hierarchy is inverted:**
  - The H1 is 20px.
  - The tagline below it renders at about 24px and dominates.
  - The next section's H2 ("Why CredSettle is India's Most Trusted…") is 30px. It looks like the real headline and repeats the H1 text.
- **On mobile, the Google/Trustpilot rating cards and the media-coverage card are `display:none`.** The only trust element in the fold is a scrolling bank-logo strip.
- The top of the hero has about 120 CSS px of empty space before the "Expert Loan Settlement Company in India" pill.
- The pill wraps its 🇮🇳 flag onto a second line.

**Mobile layout bug in the "Settled & Debt-Free: Client Proof" widget** (about y 4,900–5,450):
- The "Successful Settlement" card overlaps the "View Settlement / Tap any bank logo" panel and cuts off its text.
- The CredSettle logo node is clipped at the right edge ("CredSett…").
- Evidence: `home-mobile-full.png`, around 49–55% of its height.

**Trust signals and content:**
- **The page has no phone number or email**, and neither does the footer. The footer shows only a Gurugram address, Terms and Privacy.
- No legal entity name or CIN appears.
- The footer says "© 2020 CredSettle".
- "We work with the guidelines of" shows government emblems (Ministry of Law & Justice, MSME, NHRC, TRAI, BCSBI, national emblem). For a YMYL debt service, this can read as implied government affiliation.
- The three testimonial portraits look like studio or stock imagery, with no verification cues such as a date, city, settlement letter or link.

**Other:**
- The lead form ("Loan Settlement Assessment") is at y 2,431 on desktop and y 3,813 on mobile.
- After the hero, the only other CTA is the final "Get Your Free Consultation" band (y 7,313 desktop / 10,543 mobile).

### 2.2 HDFC issuer hub `/credit-card-settlement/hdfc`
Files: `hdfc-desktop-fold.png`, `hdfc-mobile-fold.png`, `hdfc-*-full.png`, `hdfc-mobile-menu-open.png`

**Above the fold:**
- The H1 "Resolve Your HDFC Bank Credit Card Debt Securely" and a 20px sub-paragraph are clear on both devices.
- **There is no CTA in the fold on either device**, and the inner-page header has no CTA button (unlike the homepage).

**Sidebar CTA ("Get Free Consultation"):**
- On desktop it sits at y 892, just below the 768px fold, then stays sticky.
- **On mobile the sidebar stacks below the whole article plus 36 state links**, so the first CTA is at y 8,132 of 10,270.
- The table of contents also drops to the bottom on mobile, where it is useless.

**Author box ("Rahul Verma, Consumer Debt Specialist"):**
- It uses a grey placeholder silhouette and shows no credentials, enrolment number, LinkedIn or date.
- On the Maharashtra child page the same person is titled "Lead Consumer Advocate".

**Other:**
- The table-of-contents pill row is a horizontal scroller with clipped labels ("How CredSettle…").
- The state grid has 36 cards (about 56px tall), so tap size is fine. It is a long, link-heavy block.
- The assessment form at the bottom offers "Payday loans or instant app loan default" on an HDFC credit-card page, which is an off-topic option.

**Mobile overlay:** the WhatsApp tooltip pill covers the right half of the first H2 ("…HDFC Bank Card") in the mobile fold.

### 2.3 HDFC × Maharashtra `/credit-card-settlement/hdfc/maharashtra`
Files: `hdfc-maharashtra-*`, `programmatic-template-comparison-desktop-fold.png`

- It uses the same template as the HDFC hub: centred 48px/800 H1, 20px sub, left content card, right sticky TOC plus author card plus CTA, "Did You Know?" callout, the same assessment form and the same footer.
- The page is thin: 405 words in 5 short sections, with no FAQ and no links to sibling states or issuers.
- No CTA is above the fold on desktop (878) or mobile (3,298).
- The single TOC pill is clipped at the right edge ("…in Maharashtr").
- It cites the "Bombay High Court" and "₹20 Lakhs DRT" limit with no source or date shown on the page. AGENTS.md requires sourced, dated facts on new pages.

### 2.4 Personal loan × Karnataka `/services/personal-loan-settlement/karnataka`
Files: `pl-karnataka-*`

**Above the fold:**
- The H1 "Personal Loan Settlement Bangalore Karnataka - Tech Sector Specialists" and the CTA "Get Free Consultation Now" are visible on both devices.
- On mobile, a decorative chain image comes before the H1 and pushes it to y 348.
- The H1 is weight 400, lighter than every H2 on the page, so the hierarchy is weak.
- The hero paragraph is **12px on mobile** (14px on desktop) at 70% navy opacity.

**Reading experience:**
- On desktop, body paragraphs run the full 1,240px container: **about 155 characters per line** (comfortable is 60–80).
- The page is 9,266px tall on desktop and **17,354px on mobile**, a near-unbroken wall of text. Between the hero CTA and the final band (y 15,928 on mobile) there is **no CTA** and no form; the assessment form is absent from this template.

**Copy:** visibly machine-paraphrased.
- Commas have been replaced by full stops, producing fragments such as "Stuck with loan debt in Bangalore. Mysore or anywhere in Karnataka?" and "…through legal. RBI-compliant closure."
- Synonym swaps appear throughout: "own loans" for personal loans, "claims threats" for recovery threats, "firm" for business, "talks" for negotiation.

**Unverifiable stats visible on the page:**
- "10,000+ Karnataka families"
- "average 62%, highest in South India"
- "4,000+ loans from East Bangalore"
- "90%+ success rate"
- A named case study ("Priya S.")

**Other:**
- It contains a "Karnataka Lok Adalat" section, which is in AMA's lane per AGENTS.md. This is an existing page, so it is noted only.
- "Call CredSettle for free consultation" appears, but no phone number exists on the page.
- FAQ answer text is 11px.

### 2.5 Masterclass `/resources/2026-debt-settlement-masterclass`
Files: `masterclass-*`

**Above the fold:**
- The H1 is visible on both devices.
- Byline: "Ashish Jhangra · Reviewed by CredSettle Team", which names no reviewer.
- The date reads "06-03-2026", which is ambiguous (DD-MM or MM-DD) and stale relative to "2026".
- No CTA is in the fold on desktop. **On mobile there is no CTA button at all**: the "Talk to a CredSettle Expert / Book My Free Call" card is `hidden lg:block`. Mobile users get only the WhatsApp button and the assessment form at y 5,593.

**Hero image:** clearly AI-generated, with garbled whiteboard text ("SETT IN P2286…") and a non-Indian setting. This undermines credibility on a YMYL guide.

**Stats band ("4.8/5 Client Rating · ₹200Cr+ Debt Settled · 5,000+ Happy Clients · 100% Legal Protection"):**
- **It is a count-up animation, and the server HTML ships "0.0/5 · ₹0Cr+ · 0+ · 0%"** (confirmed in the raw HTML fetched with a Googlebot UA and in the mobile DOM before scroll). Any non-JS render, or a render before the band is scrolled into view, shows zeros.
- The stats are also unverifiable, and the 4.8/5 rating conflicts with the homepage's 4.6/5.

**Copy:** machine-paraphrased ("an key dance", "rates rates", "Strong talks and talks skills", "Moreso.", lowercase sentence starts).

**Contradiction:** the brand box says "CredSettle does not handle secured loans (home loans, car loans, gold loans)", while the homepage sells "Car Loan Settlement".

**Desktop layout:** the three-column layout with sticky TOC and CTA rails works well (see `masterclass-desktop-midscroll.png`).

**Mobile overlay:** the WhatsApp tooltip floats over body text and an inline link mid-scroll (see `masterclass-mobile-midscroll.png`).

**Other:** networkidle took 5.0s, against 1.5–2.1s on the other pages. Worth a look by the performance agent.

### 2.6 Credit card interest calculator `/tools/credit-card-interest-calculator`
Files: `cc-interest-calc-*`

- The H1 and the calculator inputs are above the fold on desktop, with results cards visible at the right.
- On mobile, the H1 plus intro and the first input (balance) fit in the fold. There is an empty gap of about 100px between the header and the breadcrumb.

**Small text and tap targets:**
- **37 text elements are below 12px (10–11px):** preset chips, helper text, result captions, the "Clears in…" line and the disclaimer.
- Preset chips are **25px tall** with 11px text (16 chips) and sit close together. "Reset" is 54×16. The 12/24/All toggles are 24px tall.

**Mobile overlay:** the WhatsApp tooltip and the 62px button **sit on top of the APR field label, its "42% p.a." badge and the input's "%" suffix** in the mobile fold.

**Other:**
- The month table scrolls horizontally inside its card with no scroll cue (Payment, Principal and Closing columns are hidden at 390px).
- The consultation CTA is only at y 2,976 on desktop and 5,298 on mobile, after the FAQ. A results-adjacent CTA ("Settle this balance") would convert better.
- A disclaimer is present, which is good.

---

## 3. Programmatic template similarity (pages 2–4 plus siblings)

Method: text 5-gram Jaccard similarity on main-content text, before and after masking issuer and state names; DOM tag-sequence similarity; and the share of fold pixels that differ at 1366×768.

| Pair | Text overlap | Text overlap with names masked | DOM structure similarity | Fold pixels different |
|---|---|---|---|---|
| hdfc/maharashtra vs **icici/maharashtra** | 0.74 | **1.00** | **1.00** | 10.6% |
| hdfc vs **sbi** (issuer hubs) | 0.68 | **1.00** | **1.00** | 4.8% |
| hdfc/maharashtra vs **hdfc/karnataka** | 0.69 | **0.89** | **1.00** | 2.0% |
| pl/karnataka vs pl/maharashtra | 0.04 | 0.04 | 0.96 | 3.4% |
| hdfc vs hdfc/maharashtra (parent vs child) | 0.00 | 0.00 | 0.42 | 11.6% |
| hdfc/maharashtra vs pl/karnataka | 0.00 | 0.00 | 0.04 | 24.9% |

**Conclusions:**
- **Issuer × state pages (page 3 type) are pure find-and-replace clones.** Swapping the bank name makes HDFC×MH and ICICI×MH 100% identical, and swapping the state makes HDFC×MH and HDFC×KA 89% identical. All are about 405 words with the same author card, callout, form and fold.
- Visually they are indistinguishable (see `programmatic-template-comparison-desktop-fold.png`). The issuer hubs (page 2 type) follow the same pattern: HDFC and SBI are 100% identical after masking, at 622 words each.
- This is a strong scaled-content / doorway-page signal.
- The PL × state pages (page 4 type) share a template (DOM 0.96) but carry unique long-form text. Their risk is quality (spun copy, unverifiable stats), not duplication.
- Pages 2/3 and page 4 use entirely different visual templates. The header (no CTA versus the homepage's "Register now") and the hero style are also inconsistent across the site.

---

## 4. Site-wide component findings

**1. WhatsApp widget** (`#whatsapp-widget-container`):
- It combines a 62×62 floating button with a 193×32 "Chat with us on WhatsApp" tooltip that **never hides** (still visible after 10 s and while scrolling).
- Footprint: 193×106px, which is 6.2% of the mobile viewport.
- It overlaps H2 text (HDFC, HDFC×MH), body links (masterclass) and form fields (calculator).
- It also covers about 64% of the visible reCAPTCHA badge (2,700 of 4,200 px²).

**2. Hamburger button:** **32×20px** on every inner page; the drawer's close button is 24×24.

**3. Footer:**
- 27 small targets per page: links are 15px tall in rows about 25px apart, and social icons are 20×24.
- No phone or email; "© 2020".

**4. Contact info:** the phone (+91 8800226635) and email (info@credsettle.com) exist only on `/contact`. The WhatsApp button uses a different number (wa.me/919289622596).

**5. Mobile nav drawer:** it has no CTA, phone or WhatsApp entry. It is just 5–6 text links.

**6. Heading markup:** visually large section headings are often H3s.
- HDFC: h2:1, h3:10.
- Masterclass: h2:1, h3:17.
- Home: h2:2, h3:35.

This is for the on-page/SEO agent.

**7. Console:** only a benign reCAPTCHA `pat` 401 and `requestStorageAccess` denial. No broken images.

---

## 5. Prioritized fixes

### Critical
1. **De-template the issuer × state and issuer-hub programmatic pages** (100% identical text after name masking; identical DOM and fold). Each page needs genuinely distinct, sourced and dated issuer/state data. Examples: the issuer's actual OTS/escalation path and grievance officer, state DRT bench and High Court references with citations, and the issuer's card-specific fees. The alternative is to stop generating new combinations. *AGENTS.md forbids noindex or pruning of existing pages, so this needs an owner decision.*
2. **Fix the stats band that server-renders "0.0/5 · ₹0Cr+ · 0+ · 0%"** on `/resources/*`: render the final values in HTML and animate only cosmetically, or remove the band. Also remove or source the unverifiable numbers (4.8/5 vs 4.6/5, ₹200Cr+, 5,000+, 100%), in line with the "no unverifiable stats" rule.
3. **Spun, broken copy on YMYL pages** (PL Karnataka, masterclass): sentence fragments, synonym swaps ("own loans", "claims threats", "talks skills", "rates rates"). This is the most visible quality problem on scroll and needs a human edit. *Existing pages are frozen, so this needs owner sign-off.*

### High
4. **Get a primary CTA into the first viewport on inner pages:**
   - Add a "Free consultation" button to the shared inner-page header. The homepage header already has "Register now".
   - Add a slim sticky bottom CTA bar on mobile, 56px or less (under 7% of the viewport), and fold the WhatsApp entry into it.
   - On mobile, move the sidebar author/CTA card above the article, or repeat a CTA after the first section.

   Targets: HDFC mobile first CTA at 8,132 → under 844; HDFC×MH 3,298 → under 844; masterclass mobile currently has none.
5. **Trust signals above the fold and in the footer:**
   - Show the phone and email in the header or footer on every page.
   - Show the legal entity name, CIN and registered address.
   - Update the "© 2020" year.
   - Restore the Google/Trustpilot and media badges on mobile; they are hidden below `md`.
   - Give author boxes real photos, a consistent title, credentials (e.g. Bar Council enrolment for advocates), a profile link and a last-reviewed date.
   - Replace "Reviewed by CredSettle Team" with a named reviewer.
6. **Replace the AI-generated masterclass hero** (garbled text, non-Indian setting) with a real or clean illustrative image. Review the government-emblem "guidelines" strip on the homepage for implied-affiliation risk.
7. **Homepage mobile hierarchy and layout bug:**
   - Raise the H1 to at least 28–32px on mobile and the tagline to 18–20px.
   - Stop the H2 "Why CredSettle is India's Most Trusted…" from out-sizing the H1, and stop it duplicating the H1 text.
   - Fix the overlapping and clipped "Client Proof" widget on mobile.

### Medium
8. **WhatsApp tooltip:** auto-dismiss it after about 4 s or on first scroll, keep only the 56px button, and add page bottom padding so it never sits on form fields or text. Move the reCAPTCHA badge or hide it with the required inline disclosure.
9. **Tap targets on mobile:**
   - Hamburger: 32×20 → 48×48.
   - Close button: 24×24 → 48×48.
   - Footer links: min-height 44–48px or 8px+ vertical padding.
   - Social icons → 44px.
   - Calculator chips: 25px → 40–44px tall with 13–14px text.
   - "Reset" and the 12/24/All toggles → 44px.
10. **Text below 12px:**
    - Calculator: 37 elements at 10–11px → at least 12–13px.
    - Homepage rating badges at 9.7–10px.
    - FAQ answers at 11px (home, Karnataka).
    - Karnataka hero paragraph at 12px mobile → 16px.
11. **PL Karnataka readability:**
    - Cap the body measure at about 720px (65–80 characters per line).
    - Bold the H1.
    - Move the hero image below the H1 on mobile.
    - Add mid-page CTAs or the assessment form; the template currently has none between y 666 and 15,928 on mobile.
12. **Table-of-contents widgets on HDFC-type pages:** they clip labels in a horizontal scroller and drop to the page bottom on mobile. Show a collapsible TOC at the top on mobile, or remove it there.

### Low
13. **Masterclass date:** use an unambiguous format (e.g. "6 Mar 2026") and add a "Last updated" date.
14. **Consistency:** the "does not handle secured/car loans" statement conflicts with the "Car Loan Settlement" service. The homepage nav (no "Calculators") differs from the inner-page nav (has "Calculators").
15. **Calculator:**
    - Add a horizontal-scroll cue or stacked rows for the month table on mobile.
    - Remove the empty gap of about 100px above the breadcrumb.
    - Add a CTA next to the results.
16. **Assessment form:** the HDFC credit-card page offers a "Payday/app loan" option; tailor the options per template. Per AGENTS.md, new pages should ask for total debt across cards, PL and app loans.
