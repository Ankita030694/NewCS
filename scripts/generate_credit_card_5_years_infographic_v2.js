const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const width = 1920;
const height = 1080;

const fontSans = "font-family=\"Arial, Helvetica, 'DejaVu Sans', 'Segoe UI', sans-serif\"";

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#040a1c" />
      <stop offset="35%" stop-color="#081630" />
      <stop offset="75%" stop-color="#0b1e42" />
      <stop offset="100%" stop-color="#030814" />
    </linearGradient>

    <radialGradient id="glowTopCenter" cx="50%" cy="12%" r="55%">
      <stop offset="0%" stop-color="#1886ff" stop-opacity="0.3" />
      <stop offset="50%" stop-color="#0d234d" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#040a1c" stop-opacity="0" />
    </radialGradient>

    <linearGradient id="brandPillGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1886ff" />
      <stop offset="100%" stop-color="#0052cc" />
    </linearGradient>

    <!-- Card Gradients -->
    <linearGradient id="trapCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2c0c14" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#150509" stop-opacity="0.95" />
    </linearGradient>

    <linearGradient id="otsCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#062d1f" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#03160f" stop-opacity="0.95" />
    </linearGradient>

    <linearGradient id="timelineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d1f3d" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#081426" stop-opacity="0.95" />
    </linearGradient>

    <linearGradient id="stepCardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#102346" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#081428" stop-opacity="0.95" />
    </linearGradient>

    <linearGradient id="headerLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1886ff" stop-opacity="0" />
      <stop offset="25%" stop-color="#38bdf8" stop-opacity="0.9" />
      <stop offset="75%" stop-color="#1886ff" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#1886ff" stop-opacity="0" />
    </linearGradient>

    <!-- Drop Shadows -->
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="125%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000000" flood-opacity="0.45" />
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
  <rect width="${width}" height="${height}" fill="url(#glowTopCenter)" />

  <!-- Subtle Precision Grid -->
  <g opacity="0.04" stroke="#ffffff" stroke-width="1" stroke-dasharray="6,6">
    <line x1="0" y1="120" x2="${width}" y2="120" />
    <line x1="0" y1="240" x2="${width}" y2="240" />
    <line x1="0" y1="480" x2="${width}" y2="480" />
    <line x1="0" y1="720" x2="${width}" y2="720" />
    <line x1="0" y1="960" x2="${width}" y2="960" />
    <line x1="160" y1="0" x2="160" y2="${height}" />
    <line x1="480" y1="0" x2="480" y2="${height}" />
    <line x1="960" y1="0" x2="960" y2="${height}" />
    <line x1="1440" y1="0" x2="1440" y2="${height}" />
    <line x1="1760" y1="0" x2="1760" y2="${height}" />
  </g>

  <!-- L-Bracket Corner Accents -->
  <g stroke="#1886ff" stroke-width="3.5" fill="none" opacity="0.85">
    <path d="M 40 85 L 40 40 L 85 40" />
    <path d="M 1880 40 L 1880 85 M 1835 40 L 1880 40" />
    <path d="M 40 995 L 40 1040 L 85 1040" />
    <path d="M 1880 995 L 1880 1040 L 1835 1040" />
  </g>

  <!-- ================= 1. HEADER SECTION ================= -->
  <g transform="translate(80, 48)">
    <!-- Top Pill Badges -->
    <rect width="145" height="34" rx="8" fill="url(#brandPillGrad)" />
    <text x="72.5" y="22" text-anchor="middle" fill="#ffffff" font-size="14" ${fontSans} font-weight="900" letter-spacing="1.2">CREDSETTLE</text>

    <rect x="160" y="0" width="510" height="34" rx="8" fill="#0f2347" stroke="#1d4ed8" stroke-width="1.2" />
    <text x="415" y="22" text-anchor="middle" fill="#93c5fd" font-size="12" ${fontSans} font-weight="800" letter-spacing="1">STATUTORY LIMITATION &amp; DEBT DISPUTE FRAMEWORK</text>

    <!-- H1 Title -->
    <text x="0" y="82" fill="#ffffff" font-size="34" ${fontSans} font-weight="900" letter-spacing="-0.5">
      CREDIT CARD DEFAULT AFTER 5 YEARS: LEGAL REALITY &amp; SETTLEMENT
    </text>

    <!-- Subtitle -->
    <text x="0" y="114" fill="#94a3b8" font-size="16" ${fontSans} font-weight="500">
      Limitation Act 1963 (3-Year Civil Bar) • ARC Distressed Portfolio Buyout • Halting Harassment • Deep OTS Resolution
    </text>
  </g>

  <!-- Header Separator Line -->
  <line x1="80" y1="184" x2="1840" y2="184" stroke="url(#headerLineGrad)" stroke-width="2" />

  <!-- ================= 2. CORE COMPARATIVE CARDS (TRAP VS RESOLUTION) ================= -->
  <g transform="translate(80, 204)">
    
    <!-- LEFT CARD: Zombie Debt Threat (Red / Crimson Theme) -->
    <g transform="translate(0, 0)" filter="url(#cardShadow)">
      <rect width="855" height="235" rx="20" fill="url(#trapCardGrad)" stroke="#f87171" stroke-width="1.6" />
      <path d="M 20 0 L 835 0" stroke="#ef4444" stroke-width="4" stroke-linecap="round" />

      <!-- Card Top Badge -->
      <rect x="24" y="20" width="235" height="30" rx="8" fill="#7f1d1d" fill-opacity="0.65" stroke="#ef4444" stroke-width="1.2" />
      <text x="141.5" y="40" text-anchor="middle" fill="#fca5a5" font-size="12" ${fontSans} font-weight="800" letter-spacing="0.8">ZOMBIE DEBT REALITY (YEAR 5+)</text>

      <text x="274" y="41" fill="#ffffff" font-size="16" ${fontSans} font-weight="700">
        Aged Portfolios Assigned to Third-Party ARCs
      </text>

      <!-- 3 Structured Metric Columns -->
      <g transform="translate(24, 75)">
        <!-- Col 1 -->
        <rect width="250" height="135" rx="14" fill="#1f0a0e" stroke="rgba(239, 68, 68, 0.3)" stroke-width="1" />
        <text x="20" y="32" fill="#ef4444" font-size="22" ${fontSans} font-weight="900">3-Year Civil Bar</text>
        <text x="20" y="58" fill="#fca5a5" font-size="12.5" ${fontSans} font-weight="700">Limitation Act 1963</text>
        <text x="20" y="80" fill="#cbd5e1" font-size="12" ${fontSans} font-weight="400">Recovery suits barred in court.</text>
        <text x="20" y="98" fill="#cbd5e1" font-size="12" ${fontSans} font-weight="400">Mandatory dismissal (Sec 3).</text>
      </g>

      <g transform="translate(290, 75)">
        <!-- Col 2 -->
        <rect width="250" height="135" rx="14" fill="#1f0a0e" stroke="rgba(239, 68, 68, 0.3)" stroke-width="1" />
        <text x="20" y="32" fill="#ef4444" font-size="22" ${fontSans} font-weight="900">42% APR Drag</text>
        <text x="20" y="58" fill="#fca5a5" font-size="12.5" ${fontSans} font-weight="700">Inflated Ledger Claim</text>
        <text x="20" y="80" fill="#cbd5e1" font-size="12" ${fontSans} font-weight="400">₹2L principal inflates to ₹7.8L.</text>
        <text x="20" y="98" fill="#cbd5e1" font-size="12" ${fontSans} font-weight="400">70%+ consists of unearned fees.</text>
      </g>

      <g transform="translate(556, 75)">
        <!-- Col 3 -->
        <rect width="275" height="135" rx="14" fill="#1f0a0e" stroke="rgba(239, 68, 68, 0.3)" stroke-width="1" />
        <text x="20" y="32" fill="#ef4444" font-size="22" ${fontSans} font-weight="900">Unlawful Pressure</text>
        <text x="20" y="58" fill="#fca5a5" font-size="12.5" ${fontSans} font-weight="700">Illegal Recovery Calls</text>
        <text x="20" y="80" fill="#cbd5e1" font-size="12" ${fontSans} font-weight="400">Fake police &amp; arrest threats.</text>
        <text x="20" y="98" fill="#cbd5e1" font-size="12" ${fontSans} font-weight="400">Coercing Sec 18 debt revival.</text>
      </g>
    </g>

    <!-- RIGHT CARD: CredSettle Legal Route (Emerald / Green Theme) -->
    <g transform="translate(905, 0)" filter="url(#cardShadow)">
      <rect width="855" height="235" rx="20" fill="url(#otsCardGrad)" stroke="#34d399" stroke-width="1.6" />
      <path d="M 20 0 L 835 0" stroke="#10b981" stroke-width="4" stroke-linecap="round" />

      <!-- Card Top Badge -->
      <rect x="24" y="20" width="245" height="30" rx="8" fill="#064e3b" fill-opacity="0.8" stroke="#10b981" stroke-width="1.2" />
      <text x="146.5" y="40" text-anchor="middle" fill="#6ee7b7" font-size="12" ${fontSans} font-weight="800" letter-spacing="0.8">CREDSETTLE LEGAL RESOLUTION</text>

      <text x="284" y="41" fill="#ffffff" font-size="16" ${fontSans} font-weight="700">
        Statutory Defense &amp; Comprehensive Debt Discharge
      </text>

      <!-- 3 Structured Metric Columns -->
      <g transform="translate(24, 75)">
        <!-- Col 1 -->
        <rect width="250" height="135" rx="14" fill="#021f15" stroke="rgba(16, 185, 129, 0.3)" stroke-width="1" />
        <text x="20" y="32" fill="#10b981" font-size="22" ${fontSans} font-weight="900">75%–90% Relief</text>
        <text x="20" y="58" fill="#6ee7b7" font-size="12.5" ${fontSans} font-weight="700">Deep OTS Haircut</text>
        <text x="20" y="80" fill="#cbd5e1" font-size="12" ${fontSans} font-weight="400">₹7.8L ledger settled for ₹65k–₹90k.</text>
        <text x="20" y="98" fill="#cbd5e1" font-size="12" ${fontSans} font-weight="400">100% penal fee waiver.</text>
      </g>

      <g transform="translate(290, 75)">
        <!-- Col 2 -->
        <rect width="250" height="135" rx="14" fill="#021f15" stroke="rgba(16, 185, 129, 0.3)" stroke-width="1" />
        <text x="20" y="32" fill="#10b981" font-size="22" ${fontSans} font-weight="900">Zero SARFAESI</text>
        <text x="20" y="58" fill="#6ee7b7" font-size="12.5" ${fontSans} font-weight="700">No Asset Attachment</text>
        <text x="20" y="80" fill="#cbd5e1" font-size="12" ${fontSans} font-weight="400">Credit cards are 100% unsecured.</text>
        <text x="20" y="98" fill="#cbd5e1" font-size="12" ${fontSans} font-weight="400">No home or salary seizure.</text>
      </g>

      <g transform="translate(556, 75)">
        <!-- Col 3 -->
        <rect width="275" height="135" rx="14" fill="#021f15" stroke="rgba(16, 185, 129, 0.3)" stroke-width="1" />
        <text x="20" y="32" fill="#10b981" font-size="22" ${fontSans} font-weight="900">Permanent NDC</text>
        <text x="20" y="58" fill="#6ee7b7" font-size="12.5" ${fontSans} font-weight="700">Official No Dues Certificate</text>
        <text x="20" y="80" fill="#cbd5e1" font-size="12" ${fontSans} font-weight="400">Extinguishes zombie liabilities.</text>
        <text x="20" y="98" fill="#cbd5e1" font-size="12" ${fontSans} font-weight="400">CIBIL update under Sec 21 CICRA.</text>
      </g>
    </g>

  </g>

  <!-- ================= 3. CHRONOLOGICAL LIFECYCLE STRIP ================= -->
  <g transform="translate(80, 460)">
    <rect width="1760" height="92" rx="16" fill="url(#timelineGrad)" stroke="#1e3a8a" stroke-width="1.2" />

    <text x="24" y="24" fill="#38bdf8" font-size="11.5" ${fontSans} font-weight="800" letter-spacing="1">
      5-YEAR CHRONOLOGICAL DEBT LIFECYCLE &amp; LEGAL MILESTONES:
    </text>

    <!-- 4 Timeline Nodes -->
    <!-- Node 1 -->
    <g transform="translate(24, 38)">
      <rect width="400" height="42" rx="8" fill="#07152b" stroke="#3b82f6" stroke-width="1" />
      <circle cx="20" cy="21" r="9" fill="#3b82f6" />
      <text x="20" y="25" text-anchor="middle" fill="#ffffff" font-size="11" ${fontSans} font-weight="900">1</text>
      <text x="38" y="19" fill="#ffffff" font-size="12" ${fontSans} font-weight="700">Days 1 – 90: SMA Stages</text>
      <text x="38" y="33" fill="#94a3b8" font-size="10.5" ${fontSans} font-weight="500">Soft collections • Late fees • Card blocked</text>
    </g>

    <!-- Node 2 -->
    <g transform="translate(460, 38)">
      <rect width="400" height="42" rx="8" fill="#07152b" stroke="#f59e0b" stroke-width="1" />
      <circle cx="20" cy="21" r="9" fill="#f59e0b" />
      <text x="20" y="25" text-anchor="middle" fill="#ffffff" font-size="11" ${fontSans} font-weight="900">2</text>
      <text x="38" y="19" fill="#ffffff" font-size="12" ${fontSans} font-weight="700">Days 91 – 180: NPA Classification</text>
      <text x="38" y="33" fill="#94a3b8" font-size="10.5" ${fontSans} font-weight="500">Mandatory provisioning • Agency assignment</text>
    </g>

    <!-- Node 3 -->
    <g transform="translate(896, 38)">
      <rect width="400" height="42" rx="8" fill="#07152b" stroke="#ef4444" stroke-width="1" />
      <circle cx="20" cy="21" r="9" fill="#ef4444" />
      <text x="20" y="25" text-anchor="middle" fill="#ffffff" font-size="11" ${fontSans} font-weight="900">3</text>
      <text x="38" y="19" fill="#ffffff" font-size="12" ${fontSans} font-weight="700">Months 6 – 36: Technical Write-Off</text>
      <text x="38" y="33" fill="#94a3b8" font-size="10.5" ${fontSans} font-weight="500">100% balance sheet provisioning</text>
    </g>

    <!-- Node 4 -->
    <g transform="translate(1332, 38)">
      <rect width="404" height="42" rx="8" fill="#063220" stroke="#10b981" stroke-width="1" />
      <circle cx="20" cy="21" r="9" fill="#10b981" />
      <text x="20" y="25" text-anchor="middle" fill="#ffffff" font-size="11" ${fontSans} font-weight="900">4</text>
      <text x="38" y="19" fill="#34d399" font-size="12" ${fontSans} font-weight="800">Years 3 – 5+: Time-Barred &amp; ARC Sale</text>
      <text x="38" y="33" fill="#cbd5e1" font-size="10.5" ${fontSans} font-weight="500">Civil suits barred • 75%–90% OTS window</text>
    </g>
  </g>

  <!-- ================= 4. 4 ACTION ROADMAP CARDS ================= -->
  <g transform="translate(80, 572)">
    
    <!-- Step 1 -->
    <g transform="translate(0, 0)" filter="url(#cardShadow)">
      <rect width="418" height="345" rx="18" fill="url(#stepCardGrad)" stroke="#0284c7" stroke-width="1.6" />
      <path d="M 18 0 L 400 0" stroke="#06b6d4" stroke-width="4" stroke-linecap="round" />

      <g transform="translate(20, 20)">
        <rect width="36" height="36" rx="10" fill="#06b6d4" fill-opacity="0.2" stroke="#06b6d4" stroke-width="1.2" />
        <text x="18" y="24" text-anchor="middle" fill="#06b6d4" font-size="16" ${fontSans} font-weight="900">01</text>
        <text x="48" y="17" fill="#06b6d4" font-size="10.5" ${fontSans} font-weight="800" letter-spacing="0.8">STAGE 1: AUDIT</text>
        <text x="48" y="35" fill="#ffffff" font-size="17" ${fontSans} font-weight="800">Forensic Limitation Audit</text>
      </g>

      <line x1="20" y1="72" x2="398" y2="72" stroke="rgba(255,255,255,0.08)" stroke-width="1" />

      <g transform="translate(20, 88)">
        <circle cx="10" cy="10" r="4.5" fill="#06b6d4" />
        <text x="24" y="15" fill="#e2e8f0" font-size="13.5" ${fontSans} font-weight="500">Verify original card default date</text>

        <circle cx="10" cy="48" r="4.5" fill="#06b6d4" />
        <text x="24" y="53" fill="#e2e8f0" font-size="13.5" ${fontSans} font-weight="500">Confirm zero Section 18 acknowledgment</text>

        <circle cx="10" cy="86" r="4.5" fill="#06b6d4" />
        <text x="24" y="91" fill="#e2e8f0" font-size="13.5" ${fontSans} font-weight="500">Isolate core principal vs penal interest</text>

        <circle cx="10" cy="124" r="4.5" fill="#06b6d4" />
        <text x="24" y="129" fill="#e2e8f0" font-size="13.5" ${fontSans} font-weight="500">Establish 3-year statutory court bar</text>
      </g>

      <g transform="translate(20, 280)">
        <rect width="378" height="40" rx="10" fill="#06b6d4" fill-opacity="0.15" stroke="#06b6d4" stroke-width="1.2" />
        <text x="189" y="25" text-anchor="middle" fill="#38bdf8" font-size="12.5" ${fontSans} font-weight="800" letter-spacing="0.5">SECTION 3 LIMITATION DEFENSE</text>
      </g>
    </g>

    <!-- Step 2 -->
    <g transform="translate(447, 0)" filter="url(#cardShadow)">
      <rect width="418" height="345" rx="18" fill="url(#stepCardGrad)" stroke="#3b82f6" stroke-width="1.6" />
      <path d="M 18 0 L 400 0" stroke="#3b82f6" stroke-width="4" stroke-linecap="round" />

      <g transform="translate(20, 20)">
        <rect width="36" height="36" rx="10" fill="#3b82f6" fill-opacity="0.2" stroke="#3b82f6" stroke-width="1.2" />
        <text x="18" y="24" text-anchor="middle" fill="#3b82f6" font-size="16" ${fontSans} font-weight="900">02</text>
        <text x="48" y="17" fill="#3b82f6" font-size="10.5" ${fontSans} font-weight="800" letter-spacing="0.8">STAGE 2: SHIELD</text>
        <text x="48" y="35" fill="#ffffff" font-size="17" ${fontSans} font-weight="800">Statutory Harassment Shield</text>
      </g>

      <line x1="20" y1="72" x2="398" y2="72" stroke="rgba(255,255,255,0.08)" stroke-width="1" />

      <g transform="translate(20, 88)">
        <circle cx="10" cy="10" r="4.5" fill="#3b82f6" />
        <text x="24" y="15" fill="#e2e8f0" font-size="13.5" ${fontSans} font-weight="500">Serve formal statutory legal reply</text>

        <circle cx="10" cy="48" r="4.5" fill="#3b82f6" />
        <text x="24" y="53" fill="#e2e8f0" font-size="13.5" ${fontSans} font-weight="500">Invoke RBI Recovery Fair Practices Code</text>

        <circle cx="10" cy="86" r="4.5" fill="#3b82f6" />
        <text x="24" y="91" fill="#e2e8f0" font-size="13.5" ${fontSans} font-weight="500">Halt workplace visits &amp; family harassment</text>

        <circle cx="10" cy="124" r="4.5" fill="#3b82f6" />
        <text x="24" y="129" fill="#e2e8f0" font-size="13.5" ${fontSans} font-weight="500">Block illegal arbitration maneuvers</text>
      </g>

      <g transform="translate(20, 280)">
        <rect width="378" height="40" rx="10" fill="#3b82f6" fill-opacity="0.15" stroke="#3b82f6" stroke-width="1.2" />
        <text x="189" y="25" text-anchor="middle" fill="#93c5fd" font-size="12.5" ${fontSans} font-weight="800" letter-spacing="0.5">RBI COMPLIANCE ENFORCEMENT</text>
      </g>
    </g>

    <!-- Step 3 -->
    <g transform="translate(895, 0)" filter="url(#cardShadow)">
      <rect width="418" height="345" rx="18" fill="url(#stepCardGrad)" stroke="#f59e0b" stroke-width="1.6" />
      <path d="M 18 0 L 400 0" stroke="#f59e0b" stroke-width="4" stroke-linecap="round" />

      <g transform="translate(20, 20)">
        <rect width="36" height="36" rx="10" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b" stroke-width="1.2" />
        <text x="18" y="24" text-anchor="middle" fill="#f59e0b" font-size="16" ${fontSans} font-weight="900">03</text>
        <text x="48" y="17" fill="#f59e0b" font-size="10.5" ${fontSans} font-weight="800" letter-spacing="0.8">STAGE 3: OTS NEGOTIATION</text>
        <text x="48" y="35" fill="#ffffff" font-size="17" ${fontSans} font-weight="800">Bilateral OTS Negotiations</text>
      </g>

      <line x1="20" y1="72" x2="398" y2="72" stroke="rgba(255,255,255,0.08)" stroke-width="1" />

      <g transform="translate(20, 88)">
        <circle cx="10" cy="10" r="4.5" fill="#f59e0b" />
        <text x="24" y="15" fill="#e2e8f0" font-size="13.5" ${fontSans} font-weight="500">Leverage 100% loss provisioning</text>

        <circle cx="10" cy="48" r="4.5" fill="#f59e0b" />
        <text x="24" y="53" fill="#e2e8f0" font-size="13.5" ${fontSans} font-weight="500">Exploit ARC low portfolio purchase base</text>

        <circle cx="10" cy="86" r="4.5" fill="#f59e0b" />
        <text x="24" y="91" fill="#e2e8f0" font-size="13.5" ${fontSans} font-weight="500">Secure 75% to 90% debt haircut</text>

        <circle cx="10" cy="124" r="4.5" fill="#f59e0b" />
        <text x="24" y="129" fill="#e2e8f0" font-size="13.5" ${fontSans} font-weight="500">Obtain verified OTS Sanction Letter</text>
      </g>

      <g transform="translate(20, 280)">
        <rect width="378" height="40" rx="10" fill="#f59e0b" fill-opacity="0.15" stroke="#f59e0b" stroke-width="1.2" />
        <text x="189" y="25" text-anchor="middle" fill="#fbbf24" font-size="12.5" ${fontSans} font-weight="800" letter-spacing="0.5">COMPROMISE DISCHARGE AGREEMENT</text>
      </g>
    </g>

    <!-- Step 4 -->
    <g transform="translate(1342, 0)" filter="url(#cardShadow)">
      <rect width="418" height="345" rx="18" fill="url(#stepCardGrad)" stroke="#10b981" stroke-width="1.6" />
      <path d="M 18 0 L 400 0" stroke="#10b981" stroke-width="4" stroke-linecap="round" />

      <g transform="translate(20, 20)">
        <rect width="36" height="36" rx="10" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.2" />
        <text x="18" y="24" text-anchor="middle" fill="#10b981" font-size="16" ${fontSans} font-weight="900">04</text>
        <text x="48" y="17" fill="#10b981" font-size="10.5" ${fontSans} font-weight="800" letter-spacing="0.8">STAGE 4: CLOSURE &amp; NDC</text>
        <text x="48" y="35" fill="#ffffff" font-size="17" ${fontSans} font-weight="800">Official Discharge &amp; CIBIL</text>
      </g>

      <line x1="20" y1="72" x2="398" y2="72" stroke="rgba(255,255,255,0.08)" stroke-width="1" />

      <g transform="translate(20, 88)">
        <circle cx="10" cy="10" r="4.5" fill="#10b981" />
        <text x="24" y="15" fill="#e2e8f0" font-size="13.5" ${fontSans} font-weight="500">Remit agreed sum directly to bank/ARC</text>

        <circle cx="10" cy="48" r="4.5" fill="#10b981" />
        <text x="24" y="53" fill="#e2e8f0" font-size="13.5" ${fontSans} font-weight="500">Collect formal No Dues Certificate</text>

        <circle cx="10" cy="86" r="4.5" fill="#10b981" />
        <text x="24" y="91" fill="#e2e8f0" font-size="13.5" ${fontSans} font-weight="500">Extinguish zombie claims permanently</text>

        <circle cx="10" cy="124" r="4.5" fill="#10b981" />
        <text x="24" y="129" fill="#e2e8f0" font-size="13.5" ${fontSans} font-weight="500">Trigger CIBIL update under Section 21 CICRA</text>
      </g>

      <g transform="translate(20, 280)">
        <rect width="378" height="40" rx="10" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-width="1.2" />
        <text x="189" y="25" text-anchor="middle" fill="#6ee7b7" font-size="12.5" ${fontSans} font-weight="800" letter-spacing="0.5">PERMANENT LEGAL DISCHARGE</text>
      </g>
    </g>

  </g>

  <!-- ================= 5. BOTTOM REGULATORY FOOTER ================= -->
  <g transform="translate(80, 948)">
    <rect width="1760" height="82" rx="18" fill="#08142a" stroke="#1e3a8a" stroke-width="1.2" />

    <g transform="translate(28, 22)">
      <text x="0" y="18" fill="#38bdf8" font-size="12" ${fontSans} font-weight="800" letter-spacing="1">
        STATUTORY AUTHORITIES &amp; REGULATORY FRAMEWORKS:
      </text>
      <text x="0" y="42" fill="#cbd5e1" font-size="13.5" ${fontSans} font-weight="500">
        Limitation Act 1963 (Articles 19 &amp; 25) • Section 18 &amp; 19 Limitation Act • Section 25(3) Indian Contract Act • RBI Recovery Code 2022 • Section 21 CICRA 2005
      </text>
    </g>

    <g transform="translate(1520, 20)">
      <rect width="210" height="42" rx="12" fill="#1886ff" />
      <text x="105" y="26" text-anchor="middle" fill="#ffffff" font-size="15" ${fontSans} font-weight="900" letter-spacing="0.5">credsettle.com</text>
    </g>
  </g>

</svg>
`;

const outputPath = path.join(__dirname, '../public/images/infographics/credit-card-default-after-5-years.jpg');

sharp(Buffer.from(svg))
  .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
  .toFile(outputPath)
  .then(() => {
    console.log('High-Res 16:9 infographic v2 generated successfully with clean sans-serif typography at:', outputPath);
  })
  .catch(err => {
    console.error('Error generating image:', err);
  });
