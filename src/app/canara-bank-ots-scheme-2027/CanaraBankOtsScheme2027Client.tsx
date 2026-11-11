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

export default function CanaraBankOtsScheme2027Client() {
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
    { id: 'canara-permanent-vs-special', label: '1. Year-Round OTS vs Drives' },
    { id: 'canara-eots-arm-branches', label: '2. Canara e-OTS & ARM Hubs' },
    { id: 'canara-syndicate-eligibility', label: '3. Who Qualifies & Syndicate' },
    { id: 'canara-upfront-waiver-math', label: '4. Token Rules & Waiver Cuts' },
    { id: 'canara-ots-steps', label: '5. How to Apply Step by Step' },
    { id: 'canara-sanction-check', label: '6. Sanction Letter Checks' },
    { id: 'canara-rbi-2027-rules', label: '7. RBI 1 Jan 2027 Agent Rules' },
    { id: 'canara-multi-debt-3lakh', label: '8. Canara + Card & App Debt' },
    { id: 'canara-noc-cibil-steps', label: '9. NOC & CIBIL Next Steps' },
    { id: 'faqs', label: 'FAQs' }
  ];

  const faqs = [
    {
      q: 'Has Canara Bank published a special OTS Scheme for 2027 yet?',
      a: 'No. As checked in November 2026, Canara Bank has not put out a new public notice for a 2027 OTS drive. Still, branches and ARM offices settle NPA loans all year under RBI Circular RBI/2023-24/40.'
    },
    {
      q: 'What is the Canara Bank e-OTS portal?',
      a: 'Canara Bank runs an online e-OTS tool on canarabank.bank.in during active drives. It gives fast slab quotes for small Doubtful, Loss, and written-off retail, MSME, and farm loans.'
    },
    {
      q: 'Can old Syndicate Bank NPA loans use Canara Bank OTS?',
      a: 'Yes. Syndicate Bank merged into Canara Bank in April 2020. Old unpaid Syndicate Bank retail, study, and small shop loans sit on Canara Bank books and can settle now.'
    },
    {
      q: 'How much token money does Canara Bank ask for up front?',
      a: 'Special Canara Bank OTS drives often ask for 10% to 25% of the agreed sum up front. You then pay the rest in 30 to 90 days after you get the written sanction letter.'
    },
    {
      q: 'What is an ARM branch in Canara Bank?',
      a: 'ARM means Asset Recovery Management branch. Canara Bank shifts older or larger unpaid NPA files from local branches to city ARM hubs for fast recovery and OTS checks.'
    },
    {
      q: 'What waiver range is real in a Canara Bank OTS deal?',
      a: 'No cut is fixed in advance. On unsecured Doubtful or Loss loans with real hardship proof, dropping late fees and added interest often cuts 30% to 60% off the total demand sum.'
    },
    {
      q: 'Which loans are left out of Canara Bank OTS schemes?',
      a: 'Gold loans, jewel loans, FD loans, staff loans, fraud files, and willful default accounts without board nod are barred from standard Canara Bank OTS drives.'
    },
    {
      q: 'How do I check if my Canara Bank OTS sanction letter is real?',
      a: 'Check that the letter is on Canara Bank branch, RO, or ARM paper. It must list your exact loan number, full closure terms, last pay date, and bank stamp.'
    },
    {
      q: 'What RBI rules protect Canara Bank borrowers from 1 January 2027?',
      a: 'Under RBI rules and the new agent norms effective 1 January 2027, calls and home visits are legal only from 8:00 AM to 7:00 PM. Agents must show bank ID cards and cannot shame you.'
    },
    {
      q: 'When does Canara Bank give a No Dues Certificate?',
      a: 'Once you pay 100% of the OTS sum by the due date, Canara Bank gives a signed No Dues Certificate within 30 days and marks CIBIL as Settled.'
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
            <span>PSU Bank OTS Tracker: Canara Bank.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            Canara Bank OTS Scheme 2027 &amp; e-OTS Tracker
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Check Canara Bank One-Time Settlement status, see how e-OTS and ARM branches work, review old Syndicate Bank loan rules, and close unpaid debt safely.
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
              2027 Special Drive: Not Out Yet | Board &amp; ARM OTS: Open Now
            </span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Status Check (11 November 2026):</strong> Canara Bank has <strong>not yet put out</strong> a new public notice for a 2027 special OTS drive. Canara Bank usually sends slab rules to branches and Regional Offices ahead of March closing.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Open Right Now:</strong> You do not have to wait for a drive. NPA borrowers can settle any month under the Canara Bank board policy backed by <strong>RBI Circular RBI/2023-24/40 dated 8 June 2023</strong>.
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
            CredSettle helps borrowers whose <strong>total unpaid debt is ₹3,00,000 or more</strong> across Canara Bank loans, credit cards, personal loans, and loan apps. Count all your unpaid bills together below.
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
              <li className="text-slate-800 font-semibold">Canara Bank OTS Scheme 2027</li>
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
            <section id="canara-permanent-vs-special" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                1. Year-Round Canara Bank OTS vs Annual Drives
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers looking up the Canara Bank OTS Scheme 2027 think they must wait for a bank camp or adalat date to settle. In fact, Canara Bank runs two clear paths to close unpaid loans.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Path one is the permanent <strong>Board Compromise Policy</strong> under <strong>RBI Circular RBI/2023-24/40 (8 June 2023)</strong>. This path stays open all 12 months. Any NPA borrower facing job loss, pay cuts, illness, or shop closure can give a written OTS offer at their branch, Regional Office, or ARM branch.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Path two is a short special OTS drive or digital <strong>e-OTS</strong> camp. Special drives use fixed slab formulas for small retail, MSME, and farm loans, mostly ahead of March closing.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="canara-eots-arm-branches" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                2. Canara Bank e-OTS Portal &amp; ARM Branches
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing which Canara Bank desk holds your file saves weeks of back and forth:
              </p>
              <ul className="list-disc pl-6 space-y-2.5 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Online e-OTS (`canarabank.bank.in`):</strong> Used during active slab drives for small Doubtful, Loss, and written-off accounts. It gives quick standard quotes with no custom bargaining.
                </li>
                <li>
                  <strong>Home Branch &amp; Regional Office (RO):</strong> Most personal loans, pension loans, and small Mudra NPAs start at your home branch. The branch manager sends your file to the RO team for approval.
                </li>
                <li>
                  <strong>ARM (Asset Recovery Management) Hubs:</strong> Older unpaid files, court matters, and larger business loans move to city ARM branches. Senior recovery teams at ARM have higher power to clear waivers.
                </li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section id="canara-syndicate-eligibility" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                3. Who Qualifies &amp; Old Syndicate Bank Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In April 2020, <strong>Syndicate Bank</strong> merged into Canara Bank. If you took a personal loan, study loan, or small business loan from Syndicate Bank before 2020 and could not pay, your file now sits on Canara Bank books.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                All valid old Syndicate Bank NPA loans qualify for Canara Bank OTS. Since these defaults are over five years old, most sit in Doubtful-3 or Loss ledgers where waiving added penal interest is much easier.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Loans left out:</strong> Gold loans, jewel loans, FD-backed loans, staff loans, fraud files, and willful default cases without board nod do not qualify for standard OTS drives.
              </p>
            </section>

            {/* SECTION 4 */}
            <section id="canara-upfront-waiver-math" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                4. Upfront Token Rules &amp; Realistic Waiver Cuts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Keep one key Canara Bank rule in mind: special Canara Bank OTS drives often ask for <strong>10% to 25%</strong> of your offer sum as upfront token money. You then pay the rest in 30 to 90 days with zero extra interest if paid fast.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-bold uppercase text-slate-500">Sub-Standard NPA.</p>
                  <p className="text-lg font-extrabold text-slate-900 mt-1">25% to 40% Cut.</p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Past cut on total demand by dropping bounce fees and penal charges.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                  <p className="text-xs font-bold uppercase text-blue-700">Doubtful Retail / MSME.</p>
                  <p className="text-lg font-extrabold text-blue-900 mt-1">40% to 55% Cut.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Past savings on total claim when backed by clear hardship papers.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <p className="text-xs font-bold uppercase text-emerald-700">Loss / Old Syndicate.</p>
                  <p className="text-lg font-extrabold text-emerald-900 mt-1">50% to 65% Cut.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Past range on old unsecured write-offs closed in one quick payment.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic">
                Note: These numbers show past unsecured outcomes on total bank claims, never fixed bank promises.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="canara-ots-steps" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                5. How to File a Canara Bank OTS Step by Step
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Find Your File Desk:</strong> Ask where your Canara Bank or old Syndicate Bank NPA file sits right now (home branch, RO, or ARM hub).
                </li>
                <li>
                  <strong>Collect Hardship Proof:</strong> Gather job loss letters, pay-cut slips, hospital bills, closed shop GST papers, and 6 months of bank statements.
                </li>
                <li>
                  <strong>Give a Written Offer:</strong> Hand in a signed OTS letter citing RBI Circular RBI/2023-24/40, or check `canarabank.bank.in` if an e-OTS drive is live.
                </li>
                <li>
                  <strong>Pay Token Money Only to the Bank:</strong> Put the 10% to 25% token sum straight into a Canara Bank loan or no-lien account and keep your stamped slip.
                </li>
                <li>
                  <strong>Pay Balance Before Cutoff:</strong> Clear the rest of the OTS sum within the 30 to 90 day window printed on your written sanction letter.
                </li>
              </ol>
            </section>

            {/* SECTION 6 */}
            <section id="canara-sanction-check" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                6. How to Check Your Canara Bank Sanction Letter
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Never pay a lump sum on a phone call or chat message. Check five facts on your written letter first:
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-2.5">
                <p className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>Canara Bank Sanction Check List:</span>
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-amber-950">
                  <li>Printed on Canara Bank branch, RO, or ARM letterhead with branch code and ref number.</li>
                  <li>Lists your exact Canara Bank loan number and full borrower name.</li>
                  <li>States <strong>Full and Final OTS Settlement</strong>, exact waiver sum, and final pay date.</li>
                  <li>Tells you to pay straight into your Canara Bank loan account, never a personal UPI ID.</li>
                  <li>Carries an officer sign and bank seal. See our <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-blue-700 underline font-semibold">OTS letter check guide</Link>.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="canara-rbi-2027-rules" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                7. Your Rights &amp; RBI 1 January 2027 Agent Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Canara Bank agents must obey the RBI Fair Practices Code and the updated RBI agent rules taking effect on <strong>1 January 2027</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>Agents may call or visit only between <strong>8:00 AM and 7:00 PM</strong>.</li>
                <li>Agents cannot tell neighbours, family, or coworkers about your unpaid loan.</li>
                <li>Any agent visiting home must show a valid ID card and Canara Bank letter.</li>
                <li>If a complaint stays open past 30 days, you can file on `cms.rbi.org.in`.</li>
              </ul>
            </section>

            {/* SECTION 8 */}
            <section id="canara-multi-debt-3lakh" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                8. Settling Canara Bank Debt With Cards &amp; Apps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many people holding an unpaid Canara Bank loan also carry three or four credit cards and instant app loans. Soon, total unpaid debt crosses <strong>₹3,00,000</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Paying random small amounts to loud callers drains your savings fast. CredSettle lines up your Canara Bank OTS, card bills, and app loans in one structured plan so each loan closes with clean papers. Read how we <Link href="/negotiate-multiple-loans-together" className="text-blue-600 hover:underline font-semibold">settle multiple loans together</Link>.
              </p>
            </section>

            {/* SECTION 9 */}
            <section id="canara-noc-cibil-steps" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                9. Canara Bank No Dues Certificate &amp; CIBIL Score
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Collect your signed <strong>No Dues Certificate (NDC)</strong> within 30 days of your final OTS payment. Check your CIBIL report after 45 to 60 days to make sure the balance reads ₹0 with a <strong>Settled</strong> tag. Read our <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-blue-600 hover:underline font-semibold">CIBIL score rebuild guide</Link> to grow your score over the next 12 to 24 months.
              </p>
            </section>

            <CompanySection />

            {/* FAQS */}
            <section id="faqs" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                Canara Bank OTS Scheme 2027: Common Questions
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
                  href="/pnb-ots-scheme-2027"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  PNB OTS Scheme 2027.
                </Link>
                <Link
                  href="/indian-bank-ots-scheme-2027"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Indian Bank OTS 2027.
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
                Tracks Canara Bank ARM rules, old Syndicate NPAs, and RBI borrower rights in India.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Checked: 11 Nov 2026.</span>
                <a
                  href="https://www.canarabank.bank.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Official Canara Site.</span>
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
                Need Help With Canara Bank ARM or Multi-Debt OTS?
              </p>
              <p className="text-xs text-blue-100 leading-relaxed">
                We build your Canara Bank hardship file, check sanction letters, and line up all your card and loan deals.
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
                <span>Canara OTS Safety.</span>
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Pay straight into your Canara Bank loan account.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Check ARM or branch seal on sanction letters.</span>
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
