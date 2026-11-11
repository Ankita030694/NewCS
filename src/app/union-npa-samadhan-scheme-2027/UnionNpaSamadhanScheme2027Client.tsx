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

export default function UnionNpaSamadhanScheme2027Client() {
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
    { id: 'notification-status', label: '2027 Samadhan Status' },
    { id: 'what-is-union-npa-samadhan', label: '1. How Samadhan Slabs Work' },
    { id: 'samadhan-vs-bilateral-ots', label: '2. Samadhan vs Board OTS' },
    { id: 'doubtful-loss-auca-tiers', label: '3. D1, D2, D3 & Loss Slabs' },
    { id: 'earnest-money-early-bird', label: '4. Token & Early-Pay Perks' },
    { id: 'why-waiting-is-risky', label: '5. Risks of Waiting Idle' },
    { id: 'samadhan-filing-checklist', label: '6. Step-by-Step Filing Plan' },
    { id: 'samadhan-sanction-verify', label: '7. Sanction Letter Checks' },
    { id: 'rbi-2027-conduct-multi-debt', label: '8. RBI 2027 Rules & ₹3L+ Plan' },
    { id: 'samadhan-noc-cibil-closure', label: '9. NOC & CIBIL Next Steps' },
    { id: 'faqs', label: 'FAQs' }
  ];

  const faqs = [
    {
      q: 'What is the Union NPA Samadhan Scheme (UNSS)?',
      a: 'Union NPA Samadhan Scheme (UNSS) is Union Bank of India\'s special slab-based One-Time Settlement drive. When active, it uses fixed math slabs for Doubtful, Loss, and written-off NPA loans.'
    },
    {
      q: 'Is the 2027 Union NPA Samadhan circular out as of November 2026?',
      a: 'No. As checked on 11 November 2026, Union Bank has not put out a public 2027 Union NPA Samadhan notice. Still, you can settle right now under the year-round RBI board policy (RBI/2023-24/40).'
    },
    {
      q: 'How is NPA Samadhan different from normal Union Bank OTS?',
      a: 'NPA Samadhan uses fixed computer slabs with zero branch bargaining during a short drive. Normal OTS stays open all 12 months and lets your branch or ARB check your real hardship proof case by case.'
    },
    {
      q: 'What are early-bird perks in Samadhan drives?',
      a: 'Samadhan drives often reward borrowers who pay 100% of the OTS sum within 30 days with zero extra interest or a small early-pay cut defined in the active bank memo.'
    },
    {
      q: 'How much token money is needed in Union NPA Samadhan?',
      a: 'Samadhan drives usually ask for 5% to 15% of the slab OTS sum up front in a Union Bank no-lien account before giving formal sanction.'
    },
    {
      q: 'What if my loan limit is outside a Samadhan slab cap?',
      a: 'Each Samadhan memo sets loan size caps. If your loan sits outside that cap, you can still file a regular OTS offer under Union Bank\'s year-round board rules.'
    },
    {
      q: 'Is it risky to wait idle for a Samadhan notice?',
      a: 'Yes. Sitting idle lets arbitration cases, cheque bounce notices, or property recovery steps move ahead. Filing a regular board OTS early puts your hardship on record right away.'
    },
    {
      q: 'What waiver range is real in Union Bank NPA settlements?',
      a: 'No cut is fixed in advance. On unsecured Doubtful-2, Doubtful-3, or Loss loans, dropping penal charges and added interest often cuts 35% to 65% off total bank claims.'
    },
    {
      q: 'What RBI agent rules apply from 1 January 2027?',
      a: 'Under RBI rules and the new agent norms effective 1 January 2027, agents can call or visit only between 8:00 AM and 7:00 PM. They must show Union Bank ID cards and cannot call family or bosses.'
    },
    {
      q: 'How do I confirm closure after paying a Samadhan OTS?',
      a: 'Pay only against a stamped Union Bank sanction letter into your loan account. Collect your signed No Dues Certificate within 30 days and check CIBIL after 45 to 60 days.'
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
            <span>Special Slab Drive Tracker: Union NPA Samadhan.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            Union NPA Samadhan Scheme 2027 Status &amp; Rules
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            See how the Union NPA Samadhan Scheme (UNSS) slab math works, check the 2027 notice status, and learn when regular RBI board OTS beats waiting.
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
              href="/union-bank-ots-scheme-2027"
              className="bg-blue-900/60 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-blue-900 transition-all inline-flex items-center justify-center"
            >
              View Main Union Bank OTS Guide
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
              2027 UNSS Notice: Not Out Yet | RBI Board OTS: Open Now
            </span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Status Check (11 November 2026):</strong> Union Bank of India has <strong>not yet put out</strong> a public memo for a 2027 edition of the <strong>Union NPA Samadhan Scheme (UNSS)</strong>. Union Bank sends Samadhan memos to branches for short recovery drives without advance notice.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Open Right Now:</strong> Even outside a Samadhan camp, Union Bank branches and ARB hubs settle NPA loans every month under <strong>RBI Circular RBI/2023-24/40 dated 8 June 2023</strong>.
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
            CredSettle helps borrowers whose <strong>total unpaid debt is ₹3,00,000 or more</strong> across Union Bank loans, credit cards, personal loans, and loan apps. Count all your unpaid bills together below.
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
              <li className="text-slate-800 font-semibold">Union NPA Samadhan Scheme 2027</li>
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
            <section id="what-is-union-npa-samadhan" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                1. What Is the Union NPA Samadhan Scheme (UNSS)?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Union NPA Samadhan Scheme (UNSS)</strong> is the name Union Bank of India uses for short slab-based One-Time Settlement drives. Unlike normal branch talks, a Samadhan camp follows two strict rules: fixed slab pricing and equal access for all borrowers in that tier.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Fixed slab pricing means your branch officer does not haggle over rates. Union Bank head office sets a clear math table based on your NPA age, ledger balance on the cutoff date, and any collateral value. Every borrower in that bucket gets the same slab quote.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="samadhan-vs-bilateral-ots" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                2. Samadhan Slab Math vs Year-Round Board OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many people think a Samadhan slab quote is always cheaper than a regular OTS deal under the RBI June 2023 rule. That is not always true! Look at how both routes compare:
              </p>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 border-r border-slate-700 font-bold">Point.</th>
                      <th className="p-3.5 border-r border-slate-700 font-bold">Union NPA Samadhan (Slab Drive).</th>
                      <th className="p-3.5 font-bold">Year-Round Board OTS (RBI Rule).</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">Approval Speed.</td>
                      <td className="p-3.5 border-r border-slate-200">Fast, since fixed slabs need zero custom talks.</td>
                      <td className="p-3.5">Takes 30 to 60 days via branch or ARB review.</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">Hardship Room.</td>
                      <td className="p-3.5 border-r border-slate-200">Strict: branch cannot drop ₹1 below slab math.</td>
                      <td className="p-3.5">Flexible: job loss or illness proof can win deeper cuts.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">Loan Size Caps.</td>
                      <td className="p-3.5 border-r border-slate-200">Covers only loan tiers named in that drive memo.</td>
                      <td className="p-3.5">Open to retail, shop, and old loans all 12 months.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="doubtful-loss-auca-tiers" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                3. How D1, D2, D3 &amp; Loss Slabs Shape Waivers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In past Union NPA Samadhan drives, the fee cut grows with how long your loan has stayed unpaid and whether any asset backs it:
              </p>
              <ul className="list-disc pl-6 space-y-2.5 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Sub-Standard NPAs:</strong> Often left out of deep principal cuts, or asked to pay near 100% of principal with small fee relief.
                </li>
                <li>
                  <strong>Doubtful-1 &amp; Doubtful-2 (1 to 3 Years in Doubtful):</strong> Unsecured loans often get full cuts on added interest plus fair principal relief, saving <strong>35% to 50%</strong> off total claims.
                </li>
                <li>
                  <strong>Doubtful-3, Loss &amp; Written-Off Files:</strong> Old unsecured loans (including old Andhra Bank and Corporation Bank accounts) get the biggest slab cuts, often saving <strong>50% to 65%</strong> off total demand sums.
                </li>
              </ul>
              <p className="text-xs text-slate-500 italic">
                Note: Ranges above show past unsecured NPA outcomes, never fixed 2027 circular rates.
              </p>
            </section>

            {/* SECTION 4 */}
            <section id="earnest-money-early-bird" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                4. Upfront Token Deposit &amp; Early-Pay Perks
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Samadhan drives stick to firm pay dates. To lock in an offer, borrowers usually put <strong>5% to 15% of the OTS sum</strong> up front into a Union Bank no-lien account.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once sanctioned, paying the full balance within <strong>30 days</strong> usually skips extra interest and can earn a small early-pay bonus when stated in the drive memo. Taking past 90 days can add bank interest or cancel the deal.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="why-waiting-is-risky" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                5. Why Waiting Idle for a Samadhan Memo Is Risky
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Sitting back while waiting for a 2027 Union NPA Samadhan notice brings real legal risk. While you wait, Union Bank can start arbitration, send Section 138 or Section 25 bounce notices, or push SARFAESI steps on secured loans.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Starting a written OTS talk under the year-round RBI June 2023 rule puts your hardship on bank record right now. Better yet, if Union Bank launches a better Samadhan slab before your deal closes, eligible borrowers can ask to shift into that drive!
              </p>
            </section>

            {/* SECTION 6 */}
            <section id="samadhan-filing-checklist" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                6. Step-by-Step Samadhan &amp; Board OTS Filing Plan
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Check Your NPA Date &amp; Tier:</strong> Get your loan statement showing the exact NPA date and principal sum.
                </li>
                <li>
                  <strong>Ask Your Branch or ARB:</strong> Check if an active Samadhan memo covers your loan size today.
                </li>
                <li>
                  <strong>File a Board OTS Offer if No Drive Is Live:</strong> Give a signed hardship request under RBI Circular RBI/2023-24/40 with income-loss or medical bills.
                </li>
                <li>
                  <strong>Pay Token Sum Only Into Bank Account:</strong> Deposit token money straight into your Union Bank loan or OTS parking account.
                </li>
                <li>
                  <strong>Clear Full Sum Before Cutoff:</strong> Pay 100% of sanctioned dues before the printed last date. Also read our <Link href="/rbi-circular-on-loan-settlement-ots" className="text-blue-600 hover:underline font-semibold">RBI compromise settlement guide</Link> and our <Link href="/union-bank-ots-scheme-2027" className="text-blue-600 hover:underline font-semibold">Union Bank OTS 2027 tracker</Link>.
                </li>
              </ol>
            </section>

            {/* SECTION 7 */}
            <section id="samadhan-sanction-verify" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                7. Sanction Letter Checks &amp; Scam Safety
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-2.5">
                <p className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>Check Every Samadhan Sanction Letter First:</span>
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-amber-950">
                  <li>Printed on Union Bank branch or ARB letterhead with a valid ref number.</li>
                  <li>Matches your exact 15-digit Union Bank loan account number.</li>
                  <li>Lists Samadhan or Board OTS approval, exact waiver math, and last pay date.</li>
                  <li>Directs money straight into your Union Bank account, never a personal UPI ID.</li>
                  <li>See our full <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-blue-700 underline font-semibold">bank OTS letter check list</Link>.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 8 */}
            <section id="rbi-2027-conduct-multi-debt" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                8. RBI 1 Jan 2027 Agent Rules &amp; ₹3L+ Debt Plan
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI rules and the new agent norms taking effect on <strong>1 January 2027</strong>, recovery agents cannot call or visit outside <strong>8:00 AM to 7:00 PM</strong>. They must carry bank ID cards and cannot harass family or bosses.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you hold a Union Bank NPA along with credit cards, personal loans, and loan apps totaling <strong>₹3,00,000 or more</strong>, CredSettle lines up all your deals so you close each loan cleanly and get 30-day No Dues Certificates. Read how to <Link href="/negotiate-multiple-loans-together" className="text-blue-600 hover:underline font-semibold">settle multiple loans together</Link>.
              </p>
            </section>

            {/* SECTION 9 */}
            <section id="samadhan-noc-cibil-closure" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                9. Union Bank No Dues Certificate &amp; CIBIL Score Steps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Your Samadhan or board OTS is not done on the day you send the last bank transfer. You must lock in clean closure papers so old claims never come back years later.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Get Your Signed NDC:</strong> Collect your signed Union Bank No Dues Certificate within 30 days of paying your final OTS rupee.
                </li>
                <li>
                  <strong>Save Every Bank Slip:</strong> Keep your sanction letter, UTR numbers, deposit slips, and NDC together in a safe folder.
                </li>
                <li>
                  <strong>Check CIBIL After 45 Days:</strong> Pull your CIBIL report after 45 to 60 days. Make sure the current balance reads ₹0 with a <strong>Settled</strong> tag and zero overdue dues.
                </li>
                <li>
                  <strong>Rebuild Credit Slowly:</strong> Once monthly late marks stop, wait 6 to 12 months and use a small FD card paid on time to lift your score. Read our <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-blue-600 hover:underline font-semibold">CIBIL score rebuild guide</Link>.
                </li>
              </ul>
            </section>

            <CompanySection />

            {/* FAQS */}
            <section id="faqs" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                Union NPA Samadhan 2027: Common Questions
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
                  href="/union-bank-ots-scheme-2027"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Union Bank OTS Scheme 2027.
                </Link>
                <Link
                  href="/sbi-ots-scheme-2027"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  SBI OTS Scheme 2027.
                </Link>
                <Link
                  href="/get-noc-after-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Get Bank NOC After Settlement.
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
                Tracks PSU Samadhan slab rules, RBI board settlements, and borrower legal rights.
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
                Do Not Sit Idle While Legal Notices Pile Up
              </p>
              <p className="text-xs text-blue-100 leading-relaxed">
                Start your RBI board OTS check today and line up all your unpaid cards and loans safely.
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
                <span>Samadhan Safety Rules.</span>
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Pay token money straight into bank OTS accounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Never miss the 30 to 90 day sanction cutoff date.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Collect signed Union Bank NDC within 30 days.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
