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

export default function PnbOtsScheme2027Client() {
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
    { id: 'pnb-board-ots-vs-special', label: '1. Year-Round OTS vs Drives' },
    { id: 'pnb-sastra-eots-workflow', label: '2. PNB SASTRA Hubs & e-OTS' },
    { id: 'pnb-obc-united-eligibility', label: '3. Who Qualifies & Merged Banks' },
    { id: 'pnb-waiver-ranges-math', label: '4. Realistic PNB Waiver Cuts' },
    { id: 'pnb-application-steps', label: '5. Step-by-Step PNB OTS Filing' },
    { id: 'pnb-sanction-letter-check', label: '6. Sanction Letter Checks' },
    { id: 'pnb-rbi-2027-rules', label: '7. RBI 1 Jan 2027 Agent Rules' },
    { id: 'pnb-multi-loan-3lakh', label: '8. PNB + Card & App Debt Plan' },
    { id: 'pnb-noc-cibil-steps', label: '9. NOC & CIBIL Score Steps' },
    { id: 'faqs', label: 'FAQs' }
  ];

  const faqs = [
    {
      q: 'Has Punjab National Bank announced a special PNB OTS Scheme 2027 yet?',
      a: 'No. As checked in November 2026, PNB has not put out a separate public circular for a 2027 special OTS drive. Still, PNB branches and Circle SASTRA hubs take settlement offers all year under RBI Circular RBI/2023-24/40.'
    },
    {
      q: 'What is the SASTRA wing in Punjab National Bank?',
      a: 'SASTRA means Stressed Assets Targeted Resolution Action. PNB runs Circle SASTRA and Zonal SASTRA hubs across India to handle bad loan recovery, Lok Adalat camps, and OTS sign-offs.'
    },
    {
      q: 'How does PNB e-OTS work for small NPA borrowers?',
      a: 'PNB turns on e-OTS links via pnb.bank.in and the PNB ONE app during special drives for small retail, MSME, and farm bad loans. It shows fixed slab offers without long branch visits.'
    },
    {
      q: 'Can Oriental Bank of Commerce and United Bank of India loans settle in PNB OTS?',
      a: 'Yes. Both OBC and United Bank merged into PNB in April 2020. Unpaid old loans from both banks sit with PNB SASTRA hubs and qualify for OTS.'
    },
    {
      q: 'Which loans are left out of standard PNB OTS drives?',
      a: 'Loans marked as RBI fraud, willful defaults without board sign-off, NCLT corporate cases, gold loans, and FD loans cannot use standard PNB OTS slab drives.'
    },
    {
      q: 'How much cut does PNB give in a loan settlement?',
      a: 'Cuts depend on loan age, asset class, and hardship proof. On unsecured Doubtful or Loss retail files, dropping penal charges and added interest often cuts 30% to 60% off total claim sums.'
    },
    {
      q: 'How much token money is needed for a PNB OTS offer?',
      a: 'Special PNB OTS drives often ask for 10% to 15% of the offer sum up front. You then pay the rest within 30 to 90 days after written sanction.'
    },
    {
      q: 'How do I check if a PNB OTS sanction letter is genuine?',
      a: 'Make sure it is printed on PNB branch or Circle SASTRA letterhead, shows your 16-digit PNB loan number, lists exact waiver math and pay dates, and tells you to pay straight into your PNB account.'
    },
    {
      q: 'What RBI recovery rules protect PNB borrowers from 1 January 2027?',
      a: 'Under RBI Fair Practices rules and new agent rules effective 1 January 2027, calls and visits may happen only from 8:00 AM to 7:00 PM. Agents must carry bank ID cards and cannot call your family or boss.'
    },
    {
      q: 'What happens after I pay my full PNB OTS sanction sum?',
      a: 'PNB gives a signed No Dues Certificate within 30 days of final payment and marks the loan in CIBIL as Settled with zero balance.'
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
            <span>PSU Bank OTS Tracker: Punjab National Bank (PNB).</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            Punjab National Bank (PNB) OTS Scheme 2027 Guide
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Check the latest PNB One-Time Settlement status. See how Circle SASTRA hubs and PNB e-OTS work, check rules for old OBC and United Bank loans, and close debt safely.
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
              href="/rbi-circular-on-loan-settlement-ots"
              className="bg-blue-900/60 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-blue-900 transition-all inline-flex items-center justify-center"
            >
              Read RBI Compromise Rules
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
              2027 Special Window: Not Out Yet | SASTRA Board OTS: Open Now
            </span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Status Check (11 November 2026):</strong> Punjab National Bank has <strong>not yet released</strong> a public memo for a 2027 Special OTS drive. PNB sends slab OTS rules to Circle SASTRA hubs ahead of Q3 and Q4 closing without early press dates.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Open Today:</strong> You can file a settlement offer any month through PNB&apos;s permanent <strong>Board Compromise Policy</strong> under <strong>RBI Circular RBI/2023-24/40 (8 June 2023)</strong>.
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
            CredSettle helps borrowers who owe <strong>₹3,00,000 or more in total unpaid debt</strong> across PNB loans, credit cards, personal loans, and loan apps. Add all your unsecured balances together below.
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
              <li className="text-slate-800 font-semibold">PNB OTS Scheme 2027</li>
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
            <section id="pnb-board-ots-vs-special" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                1. Year-Round PNB OTS vs Special Annual Drives
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many people searching for the PNB OTS Scheme 2027 delay action because they think PNB opens settlement windows only for a few weeks before March. In truth, PNB runs two clear settlement paths.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The first path is PNB&apos;s year-round <strong>Board Compromise Policy</strong> backed by <strong>RBI Circular RBI/2023-24/40 (8 June 2023)</strong>. Under this permanent rule, any borrower with a Non-Performing Asset (NPA) and real hardship proof can hand in an offer on any working day.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The second path covers periodic <strong>PNB Special OTS Drives</strong> (fixed slab rules for loans up to set caps like ₹5 Crores). When live, those drives compute set waiver cuts based on loan age and security cover.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="pnb-sastra-eots-workflow" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                2. PNB SASTRA Hubs &amp; e-OTS Digital Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                PNB handles bad loans through a special wing called <strong>SASTRA (Stressed Assets Targeted Resolution Action)</strong> rather than leaving old files with busy cash branches.
              </p>
              <ul className="list-disc pl-6 space-y-2.5 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Branch vs Circle SASTRA:</strong> Small retail NPAs may start at your local branch, but older retail and MSME files move to your district&apos;s <strong>Circle SASTRA</strong> or <strong>Zonal SASTRA</strong> hub.
                </li>
                <li>
                  <strong>PNB e-OTS Portal:</strong> For small Doubtful and Loss files during active drives, PNB turns on e-OTS checks via `pnb.bank.in` and the PNB ONE app.
                </li>
                <li>
                  <strong>Rin Mukti &amp; Adalat Camps:</strong> Circle SASTRA teams hold special camp days and join Lok Adalat sittings for fast sign-offs.
                </li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section id="pnb-obc-united-eligibility" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                3. Who Qualifies &amp; Old OBC or United Bank Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In April 2020, <strong>Oriental Bank of Commerce (OBC)</strong> and <strong>United Bank of India</strong> merged into PNB. Many borrowers still hold unpaid personal, Mudra, or retail loans taken before 2020 from OBC or United Bank.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                All old OBC and United Bank bad loans now sit in PNB&apos;s ledger with 16-digit PNB loan numbers and qualify for PNB OTS closure. Since those defaults are four to seven years old, most sit in Doubtful-3 or write-off buckets that get wide penal fee cuts.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 border-r border-slate-700 font-bold">Loans That Can Apply.</th>
                      <th className="p-3.5 font-bold">Loans Left Out.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 border-r border-slate-200">Unsecured PNB personal &amp; retail loans past 90 days due.</td>
                      <td className="p-3.5">Gold loans, NSC/KVP loans, and FD advances.</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 border-r border-slate-200">Mudra &amp; small MSME loans without high-value land security.</td>
                      <td className="p-3.5">Loans marked as RBI fraud or criminal probes.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 border-r border-slate-200">Old OBC &amp; United Bank Doubtful or Loss retail files.</td>
                      <td className="p-3.5">Willful defaults &amp; NCLT corporate cases.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="pnb-waiver-ranges-math" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                4. Realistic PNB OTS Waiver Ranges &amp; Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                PNB never hands out random cuts. Every Circle SASTRA panel checks the base balance on your NPA date, looks at added interest, and weighs your cash offer against slow court costs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-bold uppercase text-slate-500">Fresh Unsecured NPA.</p>
                  <p className="text-lg font-extrabold text-slate-900 mt-1">25% to 40% Cut.</p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Typical cut off total claim, clearing penal fees and post-NPA interest.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                  <p className="text-xs font-bold uppercase text-blue-700">Doubtful Unsecured.</p>
                  <p className="text-lg font-extrabold text-blue-900 mt-1">40% to 55% Cut.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Typical range off stacked dues when backed by job loss or medical proof.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <p className="text-xs font-bold uppercase text-emerald-700">Loss / Old OBC File.</p>
                  <p className="text-lg font-extrabold text-emerald-900 mt-1">50% to 65% Cut.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Typical range on old write-offs paid in one single lump sum.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic">
                Note: Ranges above show past results on unsecured claims, never fixed bank promises.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="pnb-application-steps" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                5. Step-by-Step PNB OTS Application Process
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Find Your Circle SASTRA Hub:</strong> Check your 16-digit PNB loan number and ask which branch or SASTRA hub holds your file.
                </li>
                <li>
                  <strong>Build Your Hardship File:</strong> Collect layoff letters, medical bills, closed shop papers, and 6-month bank statements.
                </li>
                <li>
                  <strong>Hand In Written OTS Offer:</strong> File a signed offer under RBI Circular RBI/2023-24/40 (or check e-OTS if live).
                </li>
                <li>
                  <strong>Pay Token Earnest Cash Safely:</strong> Deposit the 10% to 15% token sum straight into a PNB no-lien or loan account and keep the stamped slip.
                </li>
                <li>
                  <strong>Pay Balance Before Cutoff:</strong> Clear the rest within 30 to 90 days as printed on your PNB sanction letter.
                </li>
              </ol>
            </section>

            {/* SECTION 6 */}
            <section id="pnb-sanction-letter-check" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                6. How to Check Your PNB OTS Sanction Letter
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-2.5">
                <p className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>PNB Sanction Letter Safety Checks:</span>
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-amber-950">
                  <li>Official PNB branch or Circle SASTRA letterhead with ref number.</li>
                  <li>Your exact 16-digit PNB loan account number and full name.</li>
                  <li>Clear words stating <strong>Full and Final OTS Settlement</strong>, total cut, and pay dates.</li>
                  <li>Cash routed straight to your PNB loan account, never a private UPI ID.</li>
                  <li>Signed and stamped by a PNB SASTRA or branch officer. Read our <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-blue-700 underline font-semibold">OTS letter check guide</Link>.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="pnb-rbi-2027-rules" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                7. Your Rights &amp; RBI 1 January 2027 Agent Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                PNB recovery callers and field agents must obey the RBI Fair Practices Code plus new RBI agent rules effective <strong>1 January 2027</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>Calls and home visits are legal only from <strong>8:00 AM to 7:00 PM</strong>.</li>
                <li>Agents cannot call relatives, neighbours, or workplace staff.</li>
                <li>Every visiting agent must show a valid ID card and PNB letter.</li>
                <li>Report threats to PNB&apos;s Principal Nodal Officer and go to `cms.rbi.org.in` after 30 days if unfixed.</li>
              </ul>
            </section>

            {/* SECTION 8 */}
            <section id="pnb-multi-loan-3lakh" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                8. Settling PNB Loans With Credit Cards &amp; Loan Apps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most people looking for PNB OTS help also owe credit cards, private personal loans, or instant loan apps where total debt crosses <strong>₹3,00,000</strong>. CredSettle lines up your PNB SASTRA offer alongside card and app deals so your cash closes every account cleanly. See how we <Link href="/settle-multiple-credit-cards" className="text-blue-600 hover:underline font-semibold">settle multiple credit cards</Link>.
              </p>
            </section>

            {/* SECTION 9 */}
            <section id="pnb-noc-cibil-steps" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                9. PNB No Dues Certificate &amp; CIBIL Score Impact
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Get your signed <strong>No Dues Certificate (NDC)</strong> from PNB within 30 days of paying the final OTS sum. Check CIBIL after 45 to 60 days to confirm a ₹0 balance and <strong>Settled</strong> tag. Read our <Link href="/get-noc-after-loan-settlement" className="text-blue-600 hover:underline font-semibold">bank NOC guide</Link> for safe closure.
              </p>
            </section>

            <CompanySection />

            {/* FAQS */}
            <section id="faqs" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                Frequently Asked Questions: PNB OTS Scheme 2027
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
                  href="/bank-of-baroda-ots-scheme-2027"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Bank of Baroda OTS 2027.
                </Link>
                <Link
                  href="/canara-bank-ots-scheme-2027"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Canara Bank OTS 2027.
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
                Tracks PNB SASTRA settlement rules, merged bank NPAs, and RBI recovery limits across India.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Checked: 11 Nov 2026.</span>
                <a
                  href="https://www.pnb.bank.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Official PNB Site.</span>
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
                Need Help With PNB SASTRA or Multi-Loan OTS?
              </p>
              <p className="text-xs text-blue-100 leading-relaxed">
                We build your PNB hardship file, check sanction letters, and line up all your unpaid cards and loans together.
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
                <span>PNB OTS Safety Rules.</span>
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Pay only into your 16-digit PNB loan account.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Check SASTRA seal before paying lump sums.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Collect signed PNB No Dues Certificate in 30 days.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
