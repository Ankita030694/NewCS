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

export default function UnionBankOtsScheme2027Client() {
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
    { id: 'board-ots-vs-special-window', label: '1. Year-Round OTS vs Drives' },
    { id: 'online-ots-portal-guide', label: '2. Union Bank Online OTS Portal' },
    { id: 'legacy-banks-eligibility', label: '3. Who Can Apply & Merged Banks' },
    { id: 'approval-tiers-waiver-math', label: '4. Approval Tiers & Waiver Cuts' },
    { id: 'application-steps-union', label: '5. Branch & ARB Filing Steps' },
    { id: 'verify-union-sanction', label: '6. Sanction Letter Checks' },
    { id: 'rbi-jan-2027-conduct-rules', label: '7. RBI 1 Jan 2027 Agent Rules' },
    { id: 'combining-3lakh-debts', label: '8. Union Bank + Card & App Plan' },
    { id: 'noc-cibil-reporting', label: '9. NOC & CIBIL Next Steps' },
    { id: 'faqs', label: 'FAQs' }
  ];

  const faqs = [
    {
      q: 'Has Union Bank of India launched a special OTS Scheme for 2027 yet?',
      a: 'No. As checked in November 2026, Union Bank has not put out a new public memo for a 2027 special OTS drive. Still, you can settle an NPA loan any day of the year under its board policy and RBI Circular RBI/2023-24/40.'
    },
    {
      q: 'How does the Union Bank Online OTS portal work?',
      a: 'Union Bank hosts an Online OTS tool under Recovery Services on unionbankofindia.bank.in. You log in with your bank-linked phone number and an SMS OTP. Your request goes as a non-binding offer for your branch or ARB panel to check.'
    },
    {
      q: 'Can old Andhra Bank and Corporation Bank loans settle under Union Bank OTS?',
      a: 'Yes. Andhra Bank and Corporation Bank merged into Union Bank in 2020. Old unpaid loans from both banks now sit on Union Bank books and can close through Union Bank branches or ARB hubs.'
    },
    {
      q: 'Which Union Bank loans cannot use the Online OTS portal?',
      a: 'Export and import bad loans, fraud files, willful defaults, and gold or FD loans cannot use the self-service portal. Trade files must apply in person at the home branch or ARB.'
    },
    {
      q: 'What waiver range can a borrower get in Union Bank OTS?',
      a: 'Cuts depend on loan age, asset class, and income loss proof. On old unsecured Doubtful or Loss retail loans, dropping late fees and added interest often cuts 30% to 60% off the total claim sum.'
    },
    {
      q: 'What is Union Bank ARB?',
      a: 'ARB stands for Asset Recovery Branch. Union Bank shifts older or larger unpaid loans from local branches to city ARB teams. Senior ARB officers handle court cases and approve OTS offers.'
    },
    {
      q: 'Does filing an online OTS request stop Union Bank legal notices right away?',
      a: 'No. Typing an online offer is only a request. Legal steps pause only when the bank panel signs off on your deal, gives a written OTS sanction letter, and gets your token deposit.'
    },
    {
      q: 'What RBI recovery rules protect Union Bank borrowers in 2027?',
      a: 'Under RBI Fair Practices rules and the new agent rules taking effect on 1 January 2027, callers and agents may reach you only between 8:00 AM and 7:00 PM. They must carry bank ID cards and cannot call your family or boss.'
    },
    {
      q: 'How do I check if a Union Bank OTS sanction letter is genuine?',
      a: 'Make sure it is printed on Union Bank branch or ARB letterhead, shows your 15-digit loan number, lists exact waiver math and pay dates, and tells you to pay straight into your bank loan account.'
    },
    {
      q: 'When does Union Bank give a No Dues Certificate after OTS?',
      a: 'Once you pay the full OTS sum before the last date, Union Bank gives a signed No Dues Certificate within 30 days and marks the loan as Settled in CIBIL.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO SECTION */}
      <section
        className="relative text-white pt-28 pb-16 md:pt-32 md:pb-20 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)'
        }}
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs sm:text-sm font-bold uppercase tracking-wide mb-5">
            <Landmark className="w-4 h-4 text-blue-200" />
            <span>PSU Bank OTS Tracker: Union Bank of India.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            Union Bank of India OTS Scheme 2027 Tracker
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Check the latest Union Bank OTS status. See how the Online OTS OTP portal works, check rules for old Andhra and Corp Bank loans, and close bad debt safely.
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
              href="/loan-settlement/union-bank"
              className="bg-blue-900/60 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-blue-900 transition-all inline-flex items-center justify-center"
            >
              Union Bank Settlement Hub
            </Link>
          </div>
        </div>
      </section>

      {/* TOP STATUS BOX */}
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
              2027 Special Drive: Not Out Yet | Online &amp; Board OTS: Open Now
            </span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Status Check (11 November 2026):</strong> Union Bank of India has <strong>not yet put out</strong> a public memo for a 2027 special OTS drive. Public banks send seasonal drive memos to branches before Q4 closing without early press alerts. We never make up unannounced memo numbers.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Open Right Now:</strong> Eligible NPA borrowers can apply any day of the year under Union Bank&apos;s permanent <strong>Board Compromise Policy</strong> (backed by <strong>RBI Circular RBI/2023-24/40 dated 8 June 2023</strong>) or via the bank&apos;s Online OTS portal.
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
            CredSettle helps borrowers who owe <strong>₹3,00,000 or more in total unsecured debt</strong> across Union Bank loans, credit cards, personal loans, and loan apps. Add all your unpaid bills together in Step 2 below.
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
                <Link href="/loan-settlement/union-bank" className="hover:text-blue-600 font-medium">
                  Union Bank Settlement
                </Link>
              </li>
              <li>/</li>
              <li className="text-slate-800 font-semibold">Union Bank OTS Scheme 2027</li>
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
            <section id="board-ots-vs-special-window" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                1. Year-Round Union Bank OTS vs Annual Drives
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                People with unpaid Union Bank loans often wait months for news on a 2027 OTS drive. While they wait, late fees grow every single month. Knowing how Union Bank runs settlements saves you time and cash.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, Union Bank keeps a year-round <strong>Board Compromise Policy</strong> open under the <strong>RBI June 2023 Rule (RBI/2023-24/40)</strong>. This route never closes. Once your loan turns into a Non-Performing Asset (NPA) due to job loss, illness, or shop trouble, you can hand in a written OTS offer at your branch or Asset Recovery Branch (ARB).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, Union Bank runs short slab drives like Samadhan camps. Those drives fix set prices for small bad loans. To see how the slab campaign works in detail, check our tracker for the <Link href="/union-npa-samadhan-scheme-2027" className="text-blue-600 hover:underline font-semibold">Union NPA Samadhan Scheme 2027</Link>.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 border-r border-slate-700 font-bold">Point.</th>
                      <th className="p-3.5 border-r border-slate-700 font-bold">Year-Round Board OTS.</th>
                      <th className="p-3.5 font-bold">Short Special OTS Drive.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">When Open.</td>
                      <td className="p-3.5 border-r border-slate-200">Open all 365 days at branches, ARB, and web portal.</td>
                      <td className="p-3.5">Open only between fixed circular dates.</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">How Cut Works.</td>
                      <td className="p-3.5 border-r border-slate-200">Panel checks your hardship proof and cash value.</td>
                      <td className="p-3.5">Fixed slab price based on loan age and cap.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">Audit Rules.</td>
                      <td className="p-3.5 border-r border-slate-200">Bank panel logs clear notes under CVC rules.</td>
                      <td className="p-3.5">Pre-set board math speeds up branch sign-off.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 2 */}
            <section id="online-ots-portal-guide" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                2. How Union Bank&apos;s Online OTS Portal Works
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Union Bank offers a self-service <strong>Online OTS</strong> link under Recovery Services on its official site (`unionbankofindia.bank.in`). Before you type an offer there, know these four key facts.
              </p>
              <ul className="list-disc pl-6 space-y-2.5 text-sm md:text-base text-slate-700">
                <li>
                  <strong>SMS OTP Login:</strong> Your mobile number must match your bank record. The site checks your identity with a live SMS OTP.
                </li>
                <li>
                  <strong>Only a Request:</strong> Sending a number online does not bind the bank. It simply logs your offer for the right bank panel to check.
                </li>
                <li>
                  <strong>No Foreign Trade Files:</strong> Export and import bad loans cannot use the web tool. Those borrowers must visit their home branch.
                </li>
                <li>
                  <strong>Why Paper Proof Helps More:</strong> Typing a raw figure online without proof of job loss or illness often gets rejected. Giving a clean paper file at the branch or ARB gets a much fairer deal.
                </li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section id="legacy-banks-eligibility" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                3. Who Can Apply &amp; Old Andhra or Corp Bank Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In April 2020, <strong>Andhra Bank</strong> and <strong>Corporation Bank</strong> merged into Union Bank of India. Thousands of old personal loans, Mudra loans, and retail credit lines from both banks still sit unpaid today.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every valid old Andhra Bank or Corporation Bank bad loan can settle under Union Bank rules. Since most of these loans are four to seven years old, they sit in Doubtful-3 or Loss buckets where Union Bank is ready to drop stacked late fees.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Loans That Qualify:</strong> Personal loans, unsecured MSME or Mudra loans, study loans, and old Andhra or Corp Bank unsecured loans past 90 days due.
                </li>
                <li>
                  <strong>Loans Left Out:</strong> Gold loans, FD loans, staff loans, fraud files, and willful default accounts without board sign-off.
                </li>
              </ul>
            </section>

            {/* SECTION 4 */}
            <section id="approval-tiers-waiver-math" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                4. CVC Approval Tiers &amp; Realistic Waiver Ranges
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Union Bank follows Central Vigilance Commission (CVC) rules so no single officer gives random cuts. Small retail files go to the Branch Head or Regional panel. Larger or older files move to the <strong>Asset Recovery Branch (ARB)</strong> or Zonal panel.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-bold uppercase text-slate-500">Fresh Unsecured NPA.</p>
                  <p className="text-lg font-extrabold text-slate-900 mt-1">25% to 40% Cut.</p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Typical cut off total claim, mainly clearing bounce fees and penal charges.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                  <p className="text-xs font-bold uppercase text-blue-700">Doubtful Retail / MSME.</p>
                  <p className="text-lg font-extrabold text-blue-900 mt-1">40% to 55% Cut.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Typical cut off inflated bill when backed by clear job or shop loss proof.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <p className="text-xs font-bold uppercase text-emerald-700">Old Loss / Merged NPA.</p>
                  <p className="text-lg font-extrabold text-emerald-900 mt-1">50% to 65% Cut.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Typical range on old written-off loans closed in one quick lump sum.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic">
                Note: Figures above show past ranges on unsecured claims, never fixed bank promises. Home or land loans depend on real market sale value.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="application-steps-union" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                5. Step-by-Step Union Bank OTS Filing Process
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Get Your NPA Date Balance:</strong> Ask your branch for the exact base principal unpaid on the date your loan turned NPA.
                </li>
                <li>
                  <strong>Check Branch vs ARB Control:</strong> Confirm if your loan sits at your local branch or moved to a city Union Bank ARB hub.
                </li>
                <li>
                  <strong>Hand In Written Proof + Web Entry:</strong> Give your job loss, health, or tax proof along with a realistic lump-sum offer.
                </li>
                <li>
                  <strong>Pay Token Earnest Money Safely:</strong> Union Bank OTS deals often ask for 5% to 15% up front in a bank no-lien or loan account.
                </li>
                <li>
                  <strong>Pay Sanctioned Balance on Time:</strong> Clear the rest within the 30-to-90-day limit printed on your sanction letter.
                </li>
              </ol>
            </section>

            {/* SECTION 6 */}
            <section id="verify-union-sanction" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                6. How to Check Your Union Bank Sanction Letter
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Never send lump-sum cash based on a phone call or plain text from a recovery caller. Without a real Union Bank sanction letter, the bank books your cash toward old interest and keeps the rest of the loan alive.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-2.5">
                <p className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>5 Checks on Every Union Bank OTS Letter:</span>
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-amber-950">
                  <li>Printed on official Union Bank branch or ARB letterhead with code and address.</li>
                  <li>Shows your exact 15-digit Union Bank loan account number and full name.</li>
                  <li>Lists total dues, OTS pay sum, waived balance, and final pay date.</li>
                  <li>Tells you to pay straight into your Union Bank loan account via NEFT, RTGS, or branch slip.</li>
                  <li>Signed and stamped by a branch head or ARB officer. See our <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-blue-700 underline font-semibold">OTS letter check guide</Link>.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="rbi-jan-2027-conduct-rules" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                7. Your Rights &amp; RBI 1 January 2027 Agent Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Union Bank and its field agents must obey the RBI Fair Practices Code plus the updated RBI agent rules taking effect on <strong>1 January 2027</strong>.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>
                  <strong>8:00 AM to 7:00 PM Window:</strong> Calls and visits outside these hours break RBI rules.
                </li>
                <li>
                  <strong>No Shaming:</strong> Agents cannot call relatives, friends, neighbours, or your boss about your debt.
                </li>
                <li>
                  <strong>ID &amp; Bank Letter:</strong> Field agents must show a valid ID card and Union Bank letter at your door.
                </li>
                <li>
                  <strong>How to Complain:</strong> Report abuse to Union Bank&apos;s Principal Nodal Officer, and go to the RBI Ombudsman (`cms.rbi.org.in`) if unfixed after 30 days.
                </li>
              </ul>
            </section>

            {/* SECTION 8 */}
            <section id="combining-3lakh-debts" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                8. Settling Union Bank Loans With Cards &amp; Apps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most people facing hardship owe more than one bank. Many carry a Union Bank loan plus three credit cards and several loan apps totaling <strong>₹3,00,000 to ₹25,00,000 or more</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CredSettle lines up one clear payoff plan across all your unsecured lenders so fast-growing card bills do not eat up the cash needed for your Union Bank OTS deal. Read our guides on <Link href="/settle-multiple-credit-cards" className="text-blue-600 hover:underline font-semibold">settling multiple credit cards</Link> and <Link href="/rbi-circular-on-loan-settlement-ots" className="text-blue-600 hover:underline font-semibold">RBI OTS rules</Link>.
              </p>
            </section>

            {/* SECTION 9 */}
            <section id="noc-cibil-reporting" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                9. No Dues Certificate &amp; CIBIL Score Recovery
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Within 30 days of paying your final OTS rupee, collect your signed <strong>No Dues Certificate (NDC)</strong> from Union Bank. Keep paper and PDF copies safe for life.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Union Bank updates CIBIL to <strong>Settled</strong> with a zero balance, and a 12-month cooling gap applies for new unsecured bank loans. Stopping monthly late marks lets you rebuild your score over the next 12 to 24 months. Check our <Link href="/get-noc-after-loan-settlement" className="text-blue-600 hover:underline font-semibold">NOC checklist guide</Link>.
              </p>
            </section>

            <CompanySection />

            {/* FAQS */}
            <section id="faqs" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                Frequently Asked Questions: Union Bank OTS 2027
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
                Related Union Bank &amp; PSU OTS Guides.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/loan-settlement/union-bank"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Union Bank Loan Settlement Hub.
                </Link>
                <Link
                  href="/union-npa-samadhan-scheme-2027"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Union NPA Samadhan Scheme 2027.
                </Link>
                <Link
                  href="/sbi-ots-scheme-2027"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  SBI OTS Scheme 2027 Tracker.
                </Link>
                <Link
                  href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Verify OTS Sanction Letter.
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
                Works on PSU bank OTS audits, merged bank NPA files, and RBI borrower rules across India.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Checked: 11 Nov 2026.</span>
                <a
                  href="https://www.unionbankofindia.bank.in"
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
                Need Help With Union Bank ARB or Multi-Debt OTS?
              </p>
              <p className="text-xs text-blue-100 leading-relaxed">
                We build your hardship file, check Union Bank sanction letters, and line up all your unpaid cards and loans together.
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
                <span>Union Bank OTS Safety.</span>
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Use only unionbankofindia.bank.in or your branch.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Get a signed OTS letter before paying lump sums.</span>
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
