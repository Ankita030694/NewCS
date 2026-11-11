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

export default function BankOfBarodaOtsScheme2027Client() {
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
    { id: 'bob-compromise-vs-special-ots', label: '1. Year-Round OTS vs Drives' },
    { id: 'bob-npa-eligibility-vijaya-dena', label: '2. Who Qualifies & Merged Banks' },
    { id: 'branch-ro-zo-rosarb-matrix', label: '3. Branch, RO, ZO & ROSARB' },
    { id: 'bob-waiver-ranges-math', label: '4. Realistic BoB Waiver Cuts' },
    { id: 'bob-ots-filing-steps', label: '5. Step-by-Step BoB Filing' },
    { id: 'bob-sanction-verification', label: '6. Sanction Letter Checks' },
    { id: 'bob-rbi-2027-agent-rules', label: '7. RBI 1 Jan 2027 Agent Rules' },
    { id: 'bob-multi-loan-3lakh-plan', label: '8. BoB + BoBCard & App Debt' },
    { id: 'bob-noc-cibil-closure', label: '9. NOC & CIBIL Score Steps' },
    { id: 'faqs', label: 'FAQs' }
  ];

  const faqs = [
    {
      q: 'Has Bank of Baroda notified a special OTS Scheme for 2027 yet?',
      a: 'No. As checked in November 2026, Bank of Baroda has not put out a separate public memo for a 2027 special OTS drive. Still, you can settle an NPA loan all year under BoB board rules backed by RBI Circular RBI/2023-24/40.'
    },
    {
      q: 'How are Bank of Baroda OTS offers signed off across branches and zones?',
      a: 'BoB uses clear power tiers. Small retail bad loans (often up to Rs 10 Lakhs) go to the Branch Head or Regional Office. Larger files move to Zonal panels or ROSARB recovery hubs.'
    },
    {
      q: 'Can old Dena Bank and Vijaya Bank loans settle under BoB OTS?',
      a: 'Yes. Dena Bank and Vijaya Bank merged into Bank of Baroda in 2019. Old unpaid loans from both banks sit on BoB books and can close through BoB OTS.'
    },
    {
      q: 'Does Bank of Baroda OTS cover BoBCard credit card bills?',
      a: 'No. BoB credit cards belong to BOBCARD Limited, a separate firm. You settle card bills with BOBCARD, though you can group BoB loans and card bills in one plan if your total debt is Rs 3,00,000 or more.'
    },
    {
      q: 'What is ROSARB in Bank of Baroda?',
      a: 'ROSARB means Regional Stressed Asset Recovery Branch. BoB moves older bad loans from busy retail branches to ROSARB or ZOSARB hubs where special teams handle legal steps and OTS deals.'
    },
    {
      q: 'How much cut can I get in a Bank of Baroda OTS?',
      a: 'Cuts are never fixed in advance. On unsecured Doubtful or Loss retail loans with real income loss, dropping late fees and added interest often cuts 30% to 60% off total claim sums.'
    },
    {
      q: 'What token money does Bank of Baroda ask for in OTS?',
      a: 'Special BoB OTS drives often ask for 5% to 15% of the offer sum up front in a bank account. You pay the rest within 30 to 90 days after written sanction.'
    },
    {
      q: 'How do I check if a Bank of Baroda OTS sanction letter is real?',
      a: 'Check that it is on BoB branch or ROSARB letterhead, shows your 14-digit loan number, lists full and final terms with pay dates, and has the officer seal and sign.'
    },
    {
      q: 'What RBI rules cover Bank of Baroda agents in 2027?',
      a: 'Under the RBI Fair Practices Code and new agent rules effective 1 January 2027, calls and visits may happen only from 8:00 AM to 7:00 PM. Agents must show BoB ID cards and cannot shame you before family or coworkers.'
    },
    {
      q: 'How soon does Bank of Baroda give a No Dues Certificate?',
      a: 'Once you pay the full OTS sum before the deadline, BoB gives a signed No Dues Certificate within 30 days and marks CIBIL as Settled with zero balance.'
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
            <span>PSU Bank OTS Tracker: Bank of Baroda (BoB).</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            Bank of Baroda OTS Scheme 2027 &amp; e-OTS Guide
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Check the latest Bank of Baroda One-Time Settlement status. See branch vs ROSARB sign-off powers, old Vijaya and Dena Bank rules, and safe closure steps.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#lead-funnel"
              className="bg-white text-blue-950 px-7 py-3.5 rounded-full font-bold text-base hover:bg-blue-50 transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              <span>Check ₹3L+ Settlement Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/loan-settlement/bank-of-baroda"
              className="bg-blue-900/60 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-blue-900 transition-all inline-flex items-center justify-center"
            >
              Bank of Baroda Hub
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
              2027 Special Drive: Not Out Yet | Board OTS: Open Now
            </span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Status Check (11 November 2026):</strong> Bank of Baroda has <strong>not yet put out</strong> a public circular for a 2027 special OTS drive. BoB usually sends seasonal drive rules and e-OTS slab links to branches and ROSARB hubs before Q4 closing.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Open All Year:</strong> Eligible NPA borrowers can hand in a settlement offer right now under Bank of Baroda&apos;s permanent <strong>Board Compromise Policy</strong> (backed by <strong>RBI Circular RBI/2023-24/40 dated 8 June 2023</strong>).
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
            CredSettle helps borrowers who owe <strong>₹3,00,000 or more in combined unsecured debt</strong> across Bank of Baroda loans, BoBCard or other cards, personal loans, and loan apps. Add all your unpaid bills together below.
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
                <Link href="/loan-settlement/bank-of-baroda" className="hover:text-blue-600 font-medium">
                  Bank of Baroda Settlement
                </Link>
              </li>
              <li>/</li>
              <li className="text-slate-800 font-semibold">Bank of Baroda OTS Scheme 2027</li>
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
            <section id="bob-compromise-vs-special-ots" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                1. Year-Round BoB OTS vs Seasonal Drives
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many people looking for the Bank of Baroda OTS Scheme 2027 think BoB settles unpaid loans only during March camps. In truth, Bank of Baroda runs two clear paths to settle bad loans.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The first path is BoB&apos;s permanent <strong>Board Compromise Policy</strong> under <strong>RBI Circular RBI/2023-24/40 (8 June 2023)</strong>. It stays open all 12 months. Once your loan turns into a Non-Performing Asset (NPA) and you face real income loss, you can apply at your branch or ROSARB hub.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The second path covers short <strong>BoB Special OTS &amp; e-OTS Drives</strong>. During those weeks, BoB sends pre-set slab quotes to small farm, MSME, and retail borrowers via SMS, links on `bankofbaroda.bank.in`, or camp notices.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="bob-npa-eligibility-vijaya-dena" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                2. Who Qualifies &amp; Old Dena or Vijaya Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To apply for any Bank of Baroda OTS deal, your loan must be more than 90 days past due and marked as an NPA. Older Doubtful and Loss files get much wider fee cuts than fresh defaults.
              </p>
              <ul className="list-disc pl-6 space-y-2.5 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Merged Dena Bank &amp; Vijaya Bank Loans:</strong> Both banks merged into Bank of Baroda in April 2019. Unpaid personal, Mudra, or shop loans from Dena or Vijaya Bank now sit in BoB&apos;s old NPA buckets and qualify for OTS.
                </li>
                <li>
                  <strong>BoB Loans That Can Apply:</strong> Baroda Personal Loans, digital micro-loans, unsecured Mudra or MSME loans, and stressed study loans.
                </li>
                <li>
                  <strong>BoBCard Rule:</strong> Credit cards with the BoB name belong to <strong>BOBCARD Limited</strong>, a separate company. Branch heads do not close card bills, so BoBCard dues must be settled with BOBCARD&apos;s desk.
                </li>
                <li>
                  <strong>Loans Left Out:</strong> Gold loans, FD loans, staff loans, NCLT corporate cases, and fraud files cannot use standard OTS drives.
                </li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section id="branch-ro-zo-rosarb-matrix" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                3. Branch, RO, ZO &amp; ROSARB Sign-Off Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing which office holds power over your BoB file stops wasted trips. Bank of Baroda splits sign-off limits by loan size and cut depth.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 border-r border-slate-700 font-bold">BoB Office Tier.</th>
                      <th className="p-3.5 border-r border-slate-700 font-bold">Typical File Size.</th>
                      <th className="p-3.5 font-bold">Role in Your Deal.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">Home Branch Head.</td>
                      <td className="p-3.5 border-r border-slate-200">Small retail NPAs (often up to ₹10 Lakhs).</td>
                      <td className="p-3.5">Takes your hardship file and clears slab deals.</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">Regional Office / ROSARB.</td>
                      <td className="p-3.5 border-r border-slate-200">Mid-size retail &amp; MSME files or deeper cuts.</td>
                      <td className="p-3.5">Panel checks income loss proof and bank audit math.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">Zonal Office / ZOSARB.</td>
                      <td className="p-3.5 border-r border-slate-200">Larger MSME, arbitration, or DRT court files.</td>
                      <td className="p-3.5">Senior panel signs off final terms and case drop.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="bob-waiver-ranges-math" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                4. Realistic Bank of Baroda Waiver Ranges
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Bank of Baroda checks every offer by weighing fast cash today against slow court costs over five years. No cut is ever fixed up front, yet unsecured files with clear hardship follow steady bands.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-bold uppercase text-slate-500">Fresh Unsecured NPA.</p>
                  <p className="text-lg font-extrabold text-slate-900 mt-1">25% to 40% Cut.</p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Typical cut off total claim by dropping bounce fees and penal charges.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                  <p className="text-xs font-bold uppercase text-blue-700">Doubtful Retail / MSME.</p>
                  <p className="text-lg font-extrabold text-blue-900 mt-1">40% to 55% Cut.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Typical cut off total demand when backed by strong job or shop loss proof.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <p className="text-xs font-bold uppercase text-emerald-700">Old Loss / Written-Off.</p>
                  <p className="text-lg font-extrabold text-emerald-900 mt-1">50% to 65% Cut.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Typical range on old unsecured bad loans paid in one fast lump sum.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic">
                Note: Figures above show past ranges on unsecured claims, never fixed bank promises.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="bob-ots-filing-steps" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                5. Step-by-Step BoB OTS Application Process
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Find Your File Hub:</strong> Check if your 14-digit BoB loan sits at your local branch or moved to ROSARB.
                </li>
                <li>
                  <strong>Gather Hardship Proof:</strong> Collect job loss slips, medical bills, closed shop GST papers, and 6-month bank statements.
                </li>
                <li>
                  <strong>Hand In Written Offer:</strong> Submit a signed OTS letter under RBI Circular RBI/2023-24/40 (or check e-OTS if live).
                </li>
                <li>
                  <strong>Pay Token Sum Only to Bank:</strong> Put the 5% to 15% token sum straight into a BoB no-lien or loan account and keep your stamped slip.
                </li>
                <li>
                  <strong>Pay Balance Before Cutoff:</strong> Clear the rest within the 30-to-90-day limit printed in your sanction letter.
                </li>
              </ol>
            </section>

            {/* SECTION 6 */}
            <section id="bob-sanction-verification" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                6. How to Check Your Bank of Baroda Sanction Letter
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-2.5">
                <p className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>5 Must-Check Points on a BoB OTS Letter:</span>
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-amber-950">
                  <li>Official Bank of Baroda branch, RO, or ROSARB letterhead with SOL ID.</li>
                  <li>Your exact 14-digit BoB loan account number and full name.</li>
                  <li>Clear words stating <strong>Full and Final OTS Settlement</strong> and exact pay date.</li>
                  <li>Cash payable straight into your BoB loan account, never an outside link or UPI ID.</li>
                  <li>Signed and stamped by a BoB officer. See our <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-blue-700 underline font-semibold">OTS letter check guide</Link>.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="bob-rbi-2027-agent-rules" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                7. Your Rights &amp; RBI 1 January 2027 Agent Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI Fair Practices Code and new RBI agent rules taking effect on <strong>1 January 2027</strong>, BoB recovery agents must keep clear limits:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>Calls and visits may happen only from <strong>8:00 AM to 7:00 PM</strong>.</li>
                <li>Agents cannot call or shame you before family, coworkers, or neighbours.</li>
                <li>Visiting agents must show a valid ID card and BoB letter.</li>
                <li>Unfixed complaints after 30 days can go free to `cms.rbi.org.in`.</li>
              </ul>
            </section>

            {/* SECTION 8 */}
            <section id="bob-multi-loan-3lakh-plan" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                8. Settling BoB Loans With Cards &amp; App Debt
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers with an unpaid Bank of Baroda loan also owe BoBCard, HDFC, or SBI cards plus instant loan apps where total debt tops <strong>₹3,00,000</strong>. CredSettle lines up all your lenders under one plan so you close each loan cleanly without running out of cash mid-way. See how we <Link href="/negotiate-multiple-loans-together" className="text-blue-600 hover:underline font-semibold">negotiate multiple loans together</Link>.
              </p>
            </section>

            {/* SECTION 9 */}
            <section id="bob-noc-cibil-closure" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                9. BoB No Dues Certificate &amp; CIBIL Score Steps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Collect your signed <strong>No Dues Certificate (NDC)</strong> from your BoB branch or ROSARB within 30 days of final payment. Check CIBIL after 45 to 60 days to make sure the balance reads ₹0 with a <strong>Settled</strong> tag. Read our <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-blue-600 hover:underline font-semibold">CIBIL rebuild steps</Link> after your 12-month cooling gap.
              </p>
            </section>

            <CompanySection />

            {/* FAQS */}
            <section id="faqs" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                Frequently Asked Questions: Bank of Baroda OTS 2027
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
                Related Bank of Baroda &amp; OTS Guides.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/loan-settlement/bank-of-baroda"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Bank of Baroda Settlement Hub.
                </Link>
                <Link
                  href="/sbi-ots-scheme-2027"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  SBI OTS Scheme 2027.
                </Link>
                <Link
                  href="/union-bank-ots-scheme-2027"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Union Bank OTS Scheme 2027.
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
                Tracks Bank of Baroda ROSARB rules, RBI OTS circulars, and multi-debt plans across India.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Checked: 11 Nov 2026.</span>
                <a
                  href="https://www.bankofbaroda.bank.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Official BoB Site.</span>
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
                Facing BoB ROSARB Notices or Multi-Lender Debt?
              </p>
              <p className="text-xs text-blue-100 leading-relaxed">
                Our team builds your BoB hardship file, checks sanction letters, and settles your cards and loans together.
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
                <span>Safe BoB Closure Rules.</span>
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Pay straight into your 14-digit BoB loan account.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Check SOL ID and officer seal on sanction letters.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Collect signed BoB No Dues Certificate in 30 days.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
