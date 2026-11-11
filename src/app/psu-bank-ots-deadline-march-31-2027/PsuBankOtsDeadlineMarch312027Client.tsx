'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';
import CompanySection from '@/components/CompanySection';
import {
  BookOpen,
  ShieldCheck,
  AlertCircle,
  Landmark,
  Phone,
  Lock,
  ArrowRight,
  ExternalLink,
  Check,
  ChevronDown,
  ChevronUp,
  Clock
} from 'lucide-react';

export default function PsuBankOtsDeadlineMarch312027Client() {
  const [activeId, setActiveId] = useState<string>('notification-status');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -40% 0px',
        threshold: 0.05
      }
    );
    const sections = document.querySelectorAll('section[id], div[id].scroll-target');
    sections.forEach((sec) => observer.observe(sec));
    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  const navLinks = [
    { id: 'notification-status', label: 'FY 2026-27 Cutoff Status' },
    { id: 'statutory-audit-cutoff', label: '1. Why March 31 Is a Hard Audit Wall' },
    { id: 'application-vs-payment-date', label: '2. Filing Date vs Final Pay Date' },
    { id: 'bank-by-bank-ots-matrix', label: '3. SBI, PNB, BoB & PSU Rules' },
    { id: 'token-forfeiture-danger', label: '4. Token Forfeiture & Waiver Loss' },
    { id: 'cbs-rtgs-march-week', label: '5. Last-Week CBS & RTGS Cutoffs' },
    { id: 'april-1-board-ots-continuity', label: '6. What Happens After April 1?' },
    { id: 'q4-sanction-safety-checks', label: '7. Q4 Sanction Letter Checks' },
    { id: 'rbi-2027-conduct-3lakh', label: '8. RBI 1 Jan 2027 Rules & ₹3L+ Plan' },
    { id: 'faqs', label: 'FAQs' }
  ];

  const faqs = [
    {
      q: 'Have PSU banks announced special March 31, 2027 OTS circular cutoffs yet?',
      a: 'As checked in November 2026, individual FY 2026-27 Q4 special OTS circulars are notified separately by each PSU bank (SBI, PNB, Bank of Baroda, Union Bank, Canara Bank, Indian Bank) ahead of Q4 closing, while year-round RBI Board Compromise OTS (RBI/2023-24/40) remains open every month.'
    },
    {
      q: 'How is an OTS Application Cutoff different from a Payment Cutoff?',
      a: 'Special PSU OTS schemes set two separate dates: an Application Cutoff Date (often late January or February) by which your proposal and upfront token money must be logged, and a Final Payment Cutoff Date (commonly on or before March 25 to March 31) by which 100% of sanctioned funds must clear in CBS.'
    },
    {
      q: 'What happens if I miss the March 31 OTS sanction payment deadline?',
      a: 'Missing the final sanction payment cutoff without a formal written bank extension revokes the OTS waiver automatically. Your upfront token deposit and part-payments are adjusted against overdue interest, and the full pre-OTS claim revives.'
    },
    {
      q: 'Why is waiting until March 30 or March 31 to transfer OTS funds risky?',
      a: 'Public sector banks run year-end Core Banking System (CBS) closing routines, branch audit locks, and special RTGS/NEFT cutoffs on March 31. Sending funds at least 5 to 7 working days early prevents failed accounting credits.'
    },
    {
      q: 'Can a PSU bank OTS sanction cross past March 31 into April 2027?',
      a: 'Special Q4 scheme circulars strictly cap cash recovery on or before March 31 so the NPA reduction reflects in that fiscal year\'s audited balance sheet. Regular bilateral RBI board-policy compromises sanctioned late in Q4 can carry a 30-to-90-day window if explicitly printed on the sanction letter.'
    },
    {
      q: 'Does loan settlement close completely after March 31, 2027?',
      a: 'No! Only the temporary fiscal-year special slab scheme expires on March 31. Starting April 1, 2027, every PSU bank continues approving bilateral compromise settlements under RBI Circular RBI/2023-24/40.'
    },
    {
      q: 'How much upfront earnest deposit is locked before the March deadline?',
      a: 'Most PSU special OTS schemes require 5% to 25% of the proposed OTS sum (depending on the bank circular, such as SBI, PNB, or Canara Bank) to be parked in a no-lien account at application.'
    },
    {
      q: 'What RBI recovery conduct rules apply during Q4 recovery drives in 2027?',
      a: 'Even during peak March fiscal recovery drives, RBI\'s updated recovery conduct directions effective 1 January 2027 strictly limit calls and visits to 8:00 AM to 7:00 PM, mandate bank ID cards, and forbid harassment of family or workplaces.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section
        className="relative text-white pt-28 pb-16 md:pt-32 md:pb-20 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)'
        }}
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs sm:text-sm font-bold uppercase tracking-wide mb-5">
            <Landmark className="w-4 h-4 text-blue-200" />
            <span>PSU Bank Fiscal-Year-End OTS &amp; Sanction Cutoff Rules.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            PSU Bank OTS Fiscal Cutoff &amp; March 31, 2027 Deadlines
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Understand how Public Sector Bank FY 2026-27 Q4 OTS windows work, avoid losing your upfront token deposit to a missed March 31 CBS cutoff, and plan ₹3L+ settlements safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#lead-funnel"
              className="bg-white text-blue-950 px-7 py-3.5 rounded-full font-bold text-base hover:bg-blue-50 transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              <span>Check ₹3L+ PSU &amp; Multi-Debt Plan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/rbi-circular-on-loan-settlement-ots"
              className="bg-blue-900/60 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-blue-900 transition-all inline-flex items-center justify-center"
            >
              Read Year-Round RBI OTS Circular
            </Link>
          </div>
        </div>
      </section>

      {/* NOTIFICATION STATUS BOX */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div
          id="notification-status"
          className="scroll-target bg-white rounded-2xl border-2 border-blue-600 p-5 sm:p-6 shadow-md space-y-3"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-blue-900">
              <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>2027 Special OTS Notification Status: Checked Nov 2026</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              Q4 FY27 Circulars: Bank-Specific | Board OTS: Open Year-Round
            </span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Status Check (11 November 2026):</strong> Public sector banks do <strong>not</strong> share one single nationwide March circular number. Each PSU bank (SBI, PNB, Bank of Baroda, Union Bank, Canara Bank, Indian Bank) issues internal Q4 slab circulars to SARB, SASTRA, ROSARB, ARB, ARM, and SAM branches ahead of <strong>31 March 2027</strong> balance-sheet closing.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Year-Round Rule:</strong> Even before a special Q4 slab memo arrives (or after 31 March passes), every PSU bank processes bilateral compromise settlements under <strong>RBI Circular RBI/2023-24/40 dated 8 June 2023</strong>.
          </p>
        </div>
      </div>

      {/* COMBINED DEBT FRAMING + FUNNEL */}
      <div className="max-w-3xl mx-auto px-4 pt-8">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-5 text-center">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-800 mb-1">
            Combined Debt Check (₹3,00,000 Minimum Case Floor)
          </p>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            CredSettle represents borrowers whose <strong>combined unpaid debt is ₹3,00,000 or higher</strong> across PSU bank loans, credit cards, private personal loans, and loan apps. Count all your unpaid accounts below.
          </p>
        </div>
      </div>
      <InteractiveLeadFunnel />

      {/* BREADCRUMB */}
      <div className="bg-white border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 py-3">
          <nav className="flex text-xs sm:text-sm text-slate-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li>
                <Link href="/" className="hover:text-blue-600 font-medium">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/loan-settlement" className="hover:text-blue-600 font-medium">
                  Loan Settlement
                </Link>
              </li>
              <li>/</li>
              <li className="text-slate-800 font-semibold">PSU Bank OTS Deadline March 31, 2027</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 3-COLUMN WIDESCREEN BODY */}
      <div className="max-w-[1440px] mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)_300px] gap-8 items-start">
          {/* LEFT TOC */}
          <aside className="sticky top-24 hidden lg:block">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                  Page Guide.
                </span>
              </div>
              <nav className="space-y-1.5 text-xs">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`block py-1.5 px-2.5 rounded-lg transition-colors ${
                      activeId === link.id
                        ? 'bg-blue-50 text-blue-700 font-bold border-l-2 border-blue-600'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* CENTER ARTICLE */}
          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 md:p-10 shadow-xs space-y-10 min-w-0">
            {/* SECTION 1 */}
            <section id="statutory-audit-cutoff" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                1. Why March 31, 2027 Is a Hard Statutory Audit Wall
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In Indian public sector banking, <strong>31 March 2027</strong> closes Financial Year 2026-27. On that exact midnight mark, statutory central auditors freeze Gross NPA, Net NPA, Provision Coverage Ratio (PCR), and cash recovery numbers across every PSU bank branch in India.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If an OTS sanction sits unpaid on 31 March, the bank receives <strong>zero balance-sheet credit</strong> for FY 2026-27 and must book higher NPA capital provisions instead. That statutory accounting rule explains why special PSU OTS circulars attach hard, non-extendable March payment cutoffs.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="application-vs-payment-date" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                2. Application Cutoff Date vs Final Payment Cutoff Date
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The biggest mistake PSU borrowers make is thinking they can walk into a branch on 28 March 2027 to start an OTS form! Every special PSU OTS window splits into two strict calendar gates:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-1.5">
                  <p className="text-xs font-bold uppercase text-blue-800">Gate 1: Proposal &amp; Token Cutoff.</p>
                  <p className="text-base font-extrabold text-slate-900">Usually Late Jan to Feb 2027.</p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Last date to file your signed OTS form (or e-OTS OTP request) and park your 5% to 25% upfront earnest deposit so the committee has time to issue written sanction.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1.5">
                  <p className="text-xs font-bold uppercase text-amber-800">Gate 2: Final CBS Credit Cutoff.</p>
                  <p className="text-base font-extrabold text-slate-900">Usually March 25 to March 31, 2027.</p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Hard final date by which 100% of the sanctioned settlement balance must clear inside the loan ledger before year-end CBS freeze.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="bank-by-bank-ots-matrix" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                3. PSU Bank OTS Recovery Hubs &amp; Tracker Directory
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Check your specific PSU bank&apos;s recovery division and live 2027 scheme tracker before filing:
              </p>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 border-r border-slate-700 font-bold">PSU Bank.</th>
                      <th className="p-3.5 border-r border-slate-700 font-bold">NPA Sanction Wing.</th>
                      <th className="p-3.5 font-bold">2027 Tracker Guide.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">State Bank of India.</td>
                      <td className="p-3.5 border-r border-slate-200">SARB / Rinn Samadhan.</td>
                      <td className="p-3.5"><Link href="/sbi-ots-scheme-2027" className="text-blue-600 hover:underline font-semibold">SBI OTS 2027 Tracker</Link>.</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">Punjab National Bank.</td>
                      <td className="p-3.5 border-r border-slate-200">SASTRA / PNB e-OTS.</td>
                      <td className="p-3.5"><Link href="/pnb-ots-scheme-2027" className="text-blue-600 hover:underline font-semibold">PNB OTS 2027 Tracker</Link>.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">Bank of Baroda.</td>
                      <td className="p-3.5 border-r border-slate-200">ROSARB / Lakshya OTS.</td>
                      <td className="p-3.5"><Link href="/bank-of-baroda-ots-scheme-2027" className="text-blue-600 hover:underline font-semibold">BoB OTS 2027 Tracker</Link>.</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">Union Bank of India.</td>
                      <td className="p-3.5 border-r border-slate-200">ARB / NPA Samadhan.</td>
                      <td className="p-3.5"><Link href="/union-bank-ots-scheme-2027" className="text-blue-600 hover:underline font-semibold">Union Bank OTS 2027</Link> &amp; <Link href="/union-npa-samadhan-scheme-2027" className="text-blue-600 hover:underline font-semibold">Samadhan</Link>.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">Canara Bank.</td>
                      <td className="p-3.5 border-r border-slate-200">ARM Hub / Canara e-OTS.</td>
                      <td className="p-3.5"><Link href="/canara-bank-ots-scheme-2027" className="text-blue-600 hover:underline font-semibold">Canara OTS 2027 Tracker</Link>.</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">Indian Bank.</td>
                      <td className="p-3.5 border-r border-slate-200">SAM Hub / Digital e-OTS.</td>
                      <td className="p-3.5"><Link href="/indian-bank-ots-scheme-2027" className="text-blue-600 hover:underline font-semibold">Indian Bank OTS 2027</Link>.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="token-forfeiture-danger" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                4. Token Deposit Forfeiture Risk When Deadlines Slip
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-5 space-y-2.5">
                <p className="text-sm font-bold text-red-950 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-700 flex-shrink-0" />
                  <span>Read This Before Paying an Upfront Earnest Deposit:</span>
                </p>
                <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
                  Suppose you get an OTS sanction for ₹2,40,000 against a ₹5,20,000 PSU claim, pay ₹40,000 token money in February, and must clear the remaining ₹2,00,000 by <strong>29 March 2027</strong>. If your family misses that cutoff by even three days without a written bank extension:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-red-950">
                  <li>The entire ₹2,80,000 waiver stands cancelled automatically.</li>
                  <li>Your ₹40,000 token payment is <strong>not refunded</strong>; it is swallowed toward old interest!</li>
                  <li>Never sign an OTS deadline unless your full lump-sum funding is 100% ready before the cutoff.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 5 */}
            <section id="cbs-rtgs-march-week" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                5. Final-Week March 2027 RTGS, NEFT &amp; CBS Cutoffs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Between <strong>25 March and 31 March 2027</strong>, bank branches face heavy annual closing loads, public holidays, cheque clearing delays, and Core Banking System (CBS) appropriation runs:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Never Use Outstation Cheques in Late March:</strong> A cheque deposited on 29 March that clears on 2 April misses the FY 2026-27 cutoff!
                </li>
                <li>
                  <strong>Use RTGS / NEFT 5 Working Days Early:</strong> Aim to complete 100% of your OTS transfer on or before <strong>24 March 2027</strong>.
                </li>
                <li>
                  <strong>Confirm Manual OTS Closure Appropriation:</strong> Simply transferring cash into a frozen NPA account is not enough; ask the SARB/SASTRA/branch officer to pass the CBS compromise closure entry before 31 March!
                </li>
              </ul>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Keep your RTGS UTR number, stamped bank pay-in slip, and branch officer email confirmation in one folder. Checking ledger closure before 31 March prevents accidental carry-forward into April.
              </p>
            </section>

            {/* SECTION 6 */}
            <section id="april-1-board-ots-continuity" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                6. What Happens on April 1, 2027 If You Miss Q4?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Recovery agents love to shout that &ldquo;31 March is your last chance on earth to ever settle your bank loan.&rdquo; That is false!
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Only the temporary Q4 special slab campaign ends on 31 March. On <strong>1 April 2027</strong>, every PSU bank&apos;s permanent <strong>Board-Approved Compromise Settlement Policy</strong> under <strong>RBI Circular RBI/2023-24/40</strong> stays wide open. It is always safer to file a solid bilateral OTS in April or May when your lump sum is truly ready than to rush into a March deadline and forfeit your token deposit.
              </p>
            </section>

            {/* SECTION 7 */}
            <section id="q4-sanction-safety-checks" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                7. Q4 Sanction Letter Verification Checklist
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                March recovery rush brings fake WhatsApp OTS letters from rogue middlemen. Before paying any Q4 lump sum, verify official bank letterhead, dispatch number, your exact loan account number, explicit <strong>Full and Final OTS</strong> wording, printed cutoff date, and direct loan-account payment details.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Walk into your home branch or SARB / SASTRA recovery desk if anything looks unclear on paper. Ask the bank officer to confirm that your sanction number is live inside the Core Banking System before you wire a single rupee. Once your final March payment clears, collect a stamped counter receipt right away and ask for your signed <strong>No Dues Certificate</strong> within 15 to 30 working days. Check CIBIL in May 2027 to ensure the PSU bank reports ₹0 due. See our full <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-blue-600 hover:underline font-semibold">OTS sanction letter verification guide</Link>.
              </p>
            </section>

            {/* SECTION 8 */}
            <section id="rbi-2027-conduct-3lakh" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                8. RBI 1 Jan 2027 Agent Rules &amp; ₹3L+ Multi-Debt Timing
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                March 2027 is the first fiscal year-end governed by RBI&apos;s strengthened recovery conduct rules effective <strong>1 January 2027</strong>. Even in late March, agents cannot call or visit outside <strong>8:00 AM to 7:00 PM</strong>, must display bank authorization IDs, and cannot harass family or workplaces.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do not let year-end pressure push you into selling essential family tools or taking high-rate private loans just to beat a 31 March date. Only sign a March OTS when your full settlement sum is calmly ready in hand.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you hold a PSU bank NPA alongside credit cards and personal loans totaling <strong>₹3,00,000 or more</strong>, CredSettle helps sequence which accounts should capture Q4 March cutoffs and which can close in Q1/Q2 so your cash closes maximum debt safely. Also see our <Link href="/credit-card-settlement-before-financial-year-end-by-issuer" className="text-blue-600 hover:underline font-semibold">credit card FY-end issuer guide</Link>.
              </p>
            </section>

            <CompanySection />

            {/* FAQS */}
            <section id="faqs" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                PSU Bank OTS March 31, 2027 Deadlines: Common Questions
              </h2>
              <div className="space-y-3 pt-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors text-sm sm:text-base cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/60">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* RELATED LINKS */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                Related PSU Bank 2027 OTS Trackers.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/sbi-ots-scheme-2027"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  SBI OTS Scheme 2027.
                </Link>
                <Link
                  href="/pnb-ots-scheme-2027"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  PNB OTS Scheme 2027.
                </Link>
                <Link
                  href="/bank-of-baroda-ots-scheme-2027"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Bank of Baroda OTS 2027.
                </Link>
                <Link
                  href="/union-bank-ots-scheme-2027"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Union Bank OTS 2027.
                </Link>
                <Link
                  href="/canara-bank-ots-scheme-2027"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Canara Bank OTS 2027.
                </Link>
              </div>
            </div>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="sticky top-24 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-sm flex-shrink-0"
                >
                  AJ
                </Link>
                <div>
                  <Link
                    href="/author/ashish-jhangra"
                    className="text-sm font-bold text-slate-900 hover:text-blue-600 block"
                  >
                    Ashish Jhangra
                  </Link>
                  <p className="text-[11px] font-semibold text-blue-600">
                    Legal &amp; Debt Relief Expert.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tracks PSU fiscal OTS deadlines, CBS appropriation rules, and RBI borrower rights.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Checked: 11 Nov 2026.</span>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>RBI Portal.</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-900 to-slate-900 p-6 text-white space-y-4 shadow-md">
              <div className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-white/15 text-blue-100 text-[11px] font-bold">
                <Lock className="w-3.5 h-3.5" />
                <span>₹3,00,000+ Combined Debt Help.</span>
              </div>
              <p className="text-lg font-bold leading-snug">
                Planning a PSU Bank OTS Before the March 31 Cutoff?
              </p>
              <p className="text-xs text-blue-100 leading-relaxed">
                Avoid token forfeiture traps and verify every sanction clause before sending lump-sum funds.
              </p>
              <a
                href="#lead-funnel"
                className="block w-full text-center bg-white text-blue-950 font-bold py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Check ₹3L+ Eligibility
              </a>
              <a
                href="tel:+918800226635"
                className="text-xs text-blue-100 hover:text-white font-semibold flex items-center justify-center gap-1.5 pt-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call: +91-8800226635.</span>
              </a>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-2.5 text-xs shadow-xs">
              <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>March Cutoff Rules.</span>
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>File OTS well before February proposal cutoff.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Send RTGS/NEFT at least 5 working days before Mar 31.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Never pay token cash unless balance funds are ready.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
