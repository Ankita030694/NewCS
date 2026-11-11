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

export default function IndianBankOtsScheme2027Client() {
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
    { id: 'notification-status', label: '2027 Status Check' },
    { id: 'indian-bank-ots-overview', label: '1. Year-Round OTS vs Drives' },
    { id: 'digital-eots-sam-branches', label: '2. e-OTS Cap vs SAM Hubs' },
    { id: 'allahabad-bank-eligibility', label: '3. Who Qualifies & Allahabad' },
    { id: 'indian-bank-waiver-math', label: '4. Realistic Waiver Cuts' },
    { id: 'indian-bank-filing-steps', label: '5. How to Apply Step by Step' },
    { id: 'indian-bank-sanction-check', label: '6. Sanction Letter Checks' },
    { id: 'indian-bank-rbi-2027', label: '7. RBI 1 Jan 2027 Agent Rules' },
    { id: 'indian-bank-3lakh-plan', label: '8. Indian Bank + Card & Apps' },
    { id: 'indian-bank-noc-cibil', label: '9. NOC & CIBIL Next Steps' },
    { id: 'faqs', label: 'FAQs' }
  ];

  const faqs = [
    {
      q: 'Has Indian Bank announced a special OTS Scheme for 2027 yet?',
      a: 'No. As checked in November 2026, Indian Bank has not put out a new public notice for a 2027 OTS drive. Still, you can settle NPA loans right now under RBI Circular RBI/2023-24/40 or via Indian Bank e-OTS.'
    },
    {
      q: 'How does the Indian Bank e-OTS portal work?',
      a: 'Indian Bank runs an online e-OTS tool on indianbank.bank.in for small NPA borrowers (often CIF limits up to Rs 10 Lakhs in Doubtful or Loss tiers). You log in via mobile OTP to see standard slab quotes.'
    },
    {
      q: 'Can old Allahabad Bank NPA loans use Indian Bank OTS?',
      a: 'Yes. Allahabad Bank merged into Indian Bank in April 2020. Old unpaid personal, study, and small shop loans from Allahabad Bank sit on Indian Bank books and can settle now.'
    },
    {
      q: 'What if my Indian Bank loan is above the Rs 10 Lakh e-OTS cap?',
      a: 'Loans above the online e-OTS cap or files with deep hardship proof are handled at your Indian Bank home branch, Zonal Office, or SAM branch.'
    },
    {
      q: 'Which loans are barred from Indian Bank OTS schemes?',
      a: 'Gold and jewel loans, FD loans, staff loans, fraud files, and willful default accounts without board nod are barred from standard Indian Bank OTS drives.'
    },
    {
      q: 'What waiver range is real in an Indian Bank OTS deal?',
      a: 'No waiver is fixed in advance. On unsecured Doubtful or Loss loans with hardship proof, dropping penal fees and added interest often cuts 30% to 60% off total demand sums.'
    },
    {
      q: 'How much token deposit does Indian Bank ask for?',
      a: 'Special Indian Bank OTS drives often ask for 5% to 15% of the offer sum up front. You then pay the rest in 30 to 90 days after written sanction.'
    },
    {
      q: 'How do I check an Indian Bank OTS sanction letter?',
      a: 'Make sure the letter is on Indian Bank branch, Zonal Office, or SAM paper (or from the verified e-OTS portal). Check your exact loan number, full closure terms, due date, and bank stamp.'
    },
    {
      q: 'What RBI rules protect Indian Bank borrowers from 1 January 2027?',
      a: 'Under RBI rules and the new agent norms effective 1 January 2027, calls and home visits are legal only from 8:00 AM to 7:00 PM. Agents must carry bank ID cards and cannot call family or bosses.'
    },
    {
      q: 'When will Indian Bank give a No Dues Certificate?',
      a: 'Once you pay 100% of the OTS sum on time, Indian Bank gives a signed No Dues Certificate within 30 days and marks CIBIL as Settled with zero balance.'
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
            <span>PSU Bank OTS Tracker: Indian Bank.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            Indian Bank OTS Scheme 2027 &amp; Digital e-OTS Guide
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Check Indian Bank One-Time Settlement status, compare e-OTS caps with SAM branch deals, review old Allahabad Bank loan rules, and close unpaid debt safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#lead-funnel"
              className="bg-white text-blue-950 px-7 py-3.5 rounded-full font-bold text-base hover:bg-blue-50 transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              <span>Check ₹3L+ Settlement Plan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/rbi-circular-on-loan-settlement-ots"
              className="bg-blue-900/60 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-blue-900 transition-all inline-flex items-center justify-center"
            >
              Read RBI OTS Circular Guide
            </Link>
          </div>
        </div>
      </section>

      {/* STATUS BOX */}
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
              2027 Special Drive: Not Out Yet | e-OTS &amp; Board OTS: Open Now
            </span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Status Check (11 November 2026):</strong> Indian Bank has <strong>not yet put out</strong> a new public notice for a 2027 special OTS drive. Special slab drives are sent to Zonal Offices and SAM branches ahead of March closing.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Open Right Now:</strong> Eligible NPA borrowers can settle any month under the Indian Bank board policy backed by <strong>RBI Circular RBI/2023-24/40 dated 8 June 2023</strong>, or via `indianbank.bank.in` e-OTS for small Doubtful and Loss files.
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
            CredSettle helps borrowers whose <strong>total unpaid debt is ₹3,00,000 or more</strong> across Indian Bank loans, credit cards, personal loans, and loan apps. Count all your unpaid bills together below.
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
              <li className="text-slate-800 font-semibold">Indian Bank OTS Scheme 2027</li>
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
            <section id="indian-bank-ots-overview" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                1. Year-Round Indian Bank OTS vs Annual Drives
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many people looking up the Indian Bank OTS Scheme 2027 think loan settlements open only during Lok Adalat camps or March drives. In truth, Indian Bank gives you two clear ways to close unpaid loans.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Way one is the permanent <strong>Board Compromise Policy</strong> under <strong>RBI Circular RBI/2023-24/40 (8 June 2023)</strong>. Once your loan crosses 90 days past due and turns NPA, you can file a written OTS offer at your branch or SAM office on any working day.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Way two is the online <strong>e-OTS Portal</strong> (`indianbank.bank.in`) and short annual OTS drives. These give fixed slab quotes for small Doubtful and Loss accounts.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="digital-eots-sam-branches" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                2. Online e-OTS Cap vs SAM Branch Settlements
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian Bank has a fast online OTS portal, yet it fits only one group of loans:
              </p>
              <ul className="list-disc pl-6 space-y-2.5 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Small-Loan e-OTS Tool:</strong> Built for small NPA files (often CIF limits up to ₹10 Lakhs in Doubtful or Loss tiers). You log in with your mobile OTP and see a standard slab quote.
                </li>
                <li>
                  <strong>Home Branch &amp; Zonal Office:</strong> Newer Sub-Standard NPAs, loans needing deeper hardship cuts than portal math allows, or loans above ₹10 Lakhs go through your branch and Zonal Office team.
                </li>
                <li>
                  <strong>SAM (Stressed Asset Management) Hubs:</strong> Larger shop loans, legal cases, and old unpaid files move to city SAM branches for senior officer review.
                </li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section id="allahabad-bank-eligibility" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                3. Who Qualifies &amp; Old Allahabad Bank Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In April 2020, <strong>Allahabad Bank</strong> merged into Indian Bank. Borrowers across North, East, and Central India who took personal loans, Mudra loans, or study loans from Allahabad Bank before 2020 now sit on Indian Bank systems.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every valid old Allahabad Bank NPA loan qualifies under Indian Bank OTS rules. Because those loans defaulted years ago, most sit in Doubtful or Loss tiers where Indian Bank officers welcome lump-sum closure.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Loans left out:</strong> Gold and jewel loans, FD loans, staff loans, fraud files, and willful default accounts without board nod cannot use standard OTS drives.
              </p>
            </section>

            {/* SECTION 4 */}
            <section id="indian-bank-waiver-math" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                4. Realistic Indian Bank OTS Waiver Cuts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian Bank checks your loan age, collateral, and income proof before clearing a cut. On unsecured loans, past outcomes fall in three broad bands:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-bold uppercase text-slate-500">Sub-Standard NPA.</p>
                  <p className="text-lg font-extrabold text-slate-900 mt-1">25% to 40% Cut.</p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Past cut on total claim by waiving late fees and added interest.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                  <p className="text-xs font-bold uppercase text-blue-700">Doubtful Retail / MSME.</p>
                  <p className="text-lg font-extrabold text-blue-900 mt-1">40% to 55% Cut.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Past savings on total demand when backed by clear hardship papers.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <p className="text-xs font-bold uppercase text-emerald-700">Loss / Old Allahabad.</p>
                  <p className="text-lg font-extrabold text-emerald-900 mt-1">50% to 65% Cut.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Past range on old unsecured write-offs settled in one quick sum.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic">
                Note: Figures above show past unsecured outcomes on total bank claims, never fixed bank promises.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="indian-bank-filing-steps" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                5. How to File an Indian Bank OTS Step by Step
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Check Portal vs Branch:</strong> See if your Doubtful or Loss loan shows up on `indianbank.bank.in` e-OTS, or find your home branch or SAM hub.
                </li>
                <li>
                  <strong>Gather Hardship Proof:</strong> Collect job loss letters, medical bills, closed shop GST papers, and 6 months of bank statements.
                </li>
                <li>
                  <strong>Give a Written Offer:</strong> Hand in a signed OTS letter citing RBI Circular RBI/2023-24/40 if portal slab quotes are higher than your family can raise.
                </li>
                <li>
                  <strong>Pay Token Sum Safely:</strong> Put the 5% to 15% token deposit straight into an Indian Bank loan or no-lien account.
                </li>
                <li>
                  <strong>Pay Balance on Time:</strong> Clear the rest of the OTS sum within 30 to 90 days as printed on your official sanction letter.
                </li>
              </ol>
            </section>

            {/* SECTION 6 */}
            <section id="indian-bank-sanction-check" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                6. How to Check Your Indian Bank Sanction Letter
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-2.5">
                <p className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>Indian Bank Sanction Safety List:</span>
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-amber-950">
                  <li>Printed on Indian Bank branch, Zonal Office, or SAM paper (or downloaded from official e-OTS).</li>
                  <li>Lists your exact Indian Bank loan number and full borrower name.</li>
                  <li>States <strong>Full and Final OTS Settlement</strong>, waiver math, and exact last pay date.</li>
                  <li>Routes money straight into your Indian Bank loan account, never a personal UPI ID.</li>
                  <li>Carries an officer sign and bank stamp. Read our <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-blue-700 underline font-semibold">OTS letter check guide</Link>.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="indian-bank-rbi-2027" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                7. Your Rights &amp; RBI 1 January 2027 Agent Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian Bank and its agents must follow the RBI Fair Practices Code and the updated RBI agent rules taking effect on <strong>1 January 2027</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>Calls and home visits are legal only between <strong>8:00 AM and 7:00 PM</strong>.</li>
                <li>Agents cannot call parents, friends, neighbours, or bosses about your loan.</li>
                <li>Visiting agents must show a valid ID card and Indian Bank letter.</li>
                <li>If a complaint stays open past 30 days, file on `cms.rbi.org.in`.</li>
              </ul>
            </section>

            {/* SECTION 8 */}
            <section id="indian-bank-3lakh-plan" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                8. Settling Indian Bank Debt With Cards &amp; Apps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many people holding an unpaid Indian Bank or old Allahabad Bank loan also owe credit cards and instant loan apps. Soon, total unpaid debt crosses <strong>₹3,00,000</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CredSettle lines up all your unsecured loans in one clear plan so your lump sum closes every bill safely. See how we <Link href="/settle-multiple-credit-cards" className="text-blue-600 hover:underline font-semibold">settle multiple credit cards</Link>.
              </p>
            </section>

            {/* SECTION 9 */}
            <section id="indian-bank-noc-cibil" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                9. Indian Bank No Dues Certificate &amp; CIBIL Score
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Collect your signed <strong>No Dues Certificate (NDC)</strong> within 30 days of final OTS payment. Check CIBIL after 45 to 60 days to make sure the balance shows ₹0 with a <strong>Settled</strong> tag. Read our <Link href="/get-noc-after-loan-settlement" className="text-blue-600 hover:underline font-semibold">NOC after loan settlement guide</Link> to guard your credit file.
              </p>
            </section>

            <CompanySection />

            {/* FAQS */}
            <section id="faqs" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                Indian Bank OTS Scheme 2027: Common Questions
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
                Related PSU Bank OTS Trackers.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/sbi-ots-scheme-2027"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  SBI OTS Scheme 2027.
                </Link>
                <Link
                  href="/canara-bank-ots-scheme-2027"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Canara Bank OTS 2027.
                </Link>
                <Link
                  href="/pnb-ots-scheme-2027"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  PNB OTS Scheme 2027.
                </Link>
                <Link
                  href="/rbi-circular-on-loan-settlement-ots"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  RBI Compromise OTS Circular.
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
                Tracks Indian Bank e-OTS rules, old Allahabad Bank NPAs, and RBI borrower rights.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Checked: 11 Nov 2026.</span>
                <a
                  href="https://www.indianbank.bank.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Official Bank Site.</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-900 to-slate-900 p-6 text-white space-y-4 shadow-md">
              <div className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-white/15 text-blue-100 text-[11px] font-bold">
                <Lock className="w-3.5 h-3.5" />
                <span>₹3,00,000+ Total Debt Help.</span>
              </div>
              <p className="text-lg font-bold leading-snug">
                Above the e-OTS Cap or Juggling Multiple Loans?
              </p>
              <p className="text-xs text-blue-100 leading-relaxed">
                We build your Indian Bank hardship file, check sanction letters, and settle your cards and loans together.
              </p>
              <a
                href="#lead-funnel"
                className="block w-full text-center bg-white text-blue-950 font-bold py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Check Eligibility Now
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
                <span>Indian Bank OTS Safety.</span>
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Use only indianbank.bank.in or your home/SAM branch.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Never pay lump sums without written OTS sanction.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Collect signed No Dues Certificate within 30 days.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
