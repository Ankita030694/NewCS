'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import {
  ChevronDown,
  Scale,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  HelpCircle,
  TrendingUp,
  BookOpen,
  Building2,
  DollarSign,
  Check,
  Lock,
  Phone,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  Calendar
} from 'lucide-react';

export default function InterestSuspenseUriClient() {
  const [activeId, setActiveId] = useState<string>('quick-crux');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

    const headings = document.querySelectorAll('section[id], div[id].scroll-target');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const navLinks = [
    { id: 'quick-crux', label: 'Executive Brief & Legal Crux' },
    { id: 'what-is-uri', label: '1. What Is an NPA Suspense Account?' },
    { id: 'rbi-irac-norms', label: '2. RBI IRAC Norms & Memo Dues' },
    { id: 'waiver-math', label: '3. Why URI Waivers Cost Banks Zero' },
    { id: 'rbi-ots-penal-rules', label: '4. RBI OTS, Penal & Tax Rules' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. SOP: Negotiating 100% URI Waiver' },
    { id: 'legal-precedents', label: '7. Supreme Court Rulings on URI' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. NPA Date to Clean NDC Timeline' },
    { id: 'specialized-scenarios', label: '10. NBFCs, ARCs & Write-Offs' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is an NPA Interest Suspense Account or URI in Indian banks?',
      a: 'URI stands for Unapplied or Unrealized Interest. After 90 days of missed EMIs, your loan turns into an NPA. Under RBI rules, the bank stops adding new interest to profit. It parks that post-NPA interest in a side tally called an Interest Suspense Account.'
    },
    {
      q: 'Why do banks agree to waive 100% of post-NPA URI during an OTS?',
      a: 'Banks never count post-NPA URI as profit in their annual books. Waiving 100% of URI causes zero profit loss. Cash paid on your book balance also frees up old loss buffers as fresh bank profit.'
    },
    {
      q: 'Does moving interest to a suspense account mean my debt is waived automatically?',
      a: 'No. In August 2026, the Supreme Court ruled in PNB v. Shree Jyoti Education Trust that suspense interest remains legal debt. You must get a signed OTS letter that waives both book balance and memo interest in full.'
    },
    {
      q: 'What is the difference between Book Balance and Memorandum Dues?',
      a: 'Book Balance is your unpaid loan principal plus valid dues up to the NPA date. Memorandum Dues track off-book URI, legal costs, and late fees after NPA. Anchor your OTS offer to the Book Balance, not the total notice.'
    },
    {
      q: 'Can a bank charge compound interest on late fees inside my NPA suspense account?',
      a: 'No. Both Central Bank of India v. Ravindra and RBI Circular DoR.MCS.REC.28 ban interest on penal fees. Lenders cannot add late fees to your principal or charge extra interest on them.'
    },
    {
      q: 'How does Section 43D of the Income Tax Act help in OTS negotiations?',
      a: 'Section 43D taxes banks on NPA interest only when they collect cash. Banks pay zero tax on uncollected URI in suspense accounts. Waiving that URI creates zero tax loss for the bank.'
    },
    {
      q: 'Do I have to pay income tax if a bank waives my personal loan URI in OTS?',
      a: 'For a personal loan used for family needs, courts treat a waiver as capital relief, not taxable income. If you claimed business interest tax breaks on that loan, Section 41(1) tax rules may apply.'
    },
    {
      q: 'How do NBFCs treat post-NPA interest on unsecured personal loans?',
      a: 'Under RBI IRACP norms and Ind AS 109, NBFCs tag 90-day defaults as Stage 3 NPA loans. They reverse unpaid interest and build high loss buffers. Since personal loans have no asset backing, NBFCs often waive 100% of post-NPA interest in OTS.'
    },
    {
      q: 'What must my OTS sanction letter say about URI and Memorandum Dues?',
      a: 'Your OTS letter must state that the payment clears all dues in full. It must list principal, book balance, URI, memo dues, and late fees as waived. Never pay based on a phone call alone.'
    },
    {
      q: 'How does CredSettle help audit NPA suspense accounts and secure OTS waivers?',
      a: 'CredSettle gets your split NPA ledger and strips out illegal late fee compounding. We separate core principal from URI and negotiate directly with bank teams. We also verify your OTS letter, NDC, and CIBIL update.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold mb-3">
            <Landmark className="w-3.5 h-3.5" />
            <span>RBI IRAC Norms &amp; Personal Loan OTS Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Why Banks Waive 100% Post-NPA Suspense Interest in OTS
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Once a personal loan crosses 90 days overdue, RBI rules stop banks from booking new interest as profit. Learn how Unapplied Interest (URI) works and use it to win deep One-Time Settlement waivers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Audit Your NPA Dues &amp; OTS Offer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP COMPONENT */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT */}
      <div className="w-full max-w-[1720px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">

          {/* ================= LEFT COLUMN: STICKY TOC ================= */}
          <aside className="sticky top-6 hidden lg:block">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 overflow-hidden">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Table of Contents
                </span>
              </div>
              <nav className="space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto pr-1 text-xs">
                {navLinks.map((link) => {
                  const isActive = activeId === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${
                        isActive
                          ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Statutory Borrower Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Guided by RBI IRAC Master Directions 2025, RBI OTS Circular DOR.STR.REC.20, and RBI Penal Charges Rules.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">

            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: NPA INTEREST SUSPENSE (URI) &amp; OTS WAIVERS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Interest Stops in Main Books at Day 90:</strong> Once a personal loan hits NPA status, RBI rules stop banks from booking new interest as profit. Banks move it to a side Interest Suspense Account called URI.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Profit Loss on 100% URI Waiver:</strong> URI never enters the bank profit sheet. Waiving 100% of post-NPA suspense interest causes zero accounting loss during an OTS.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Book Balance Drives Real OTS Pricing:</strong> Recovery calls quote huge total claims that mix principal with URI and fees. Anchor your OTS talks to the Book Balance on the NPA date.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Compounding of Penal Charges:</strong> RBI Circular DoR.MCS.REC.28 bans penal interest. Banks cannot add late fees into principal or charge fresh interest on them.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Get URI Waiver in Writing:</strong> In August 2026, the Supreme Court held that suspense interest remains legal debt until waived. Make sure your OTS letter clears both Book Balance and Memo Dues.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: What Is an NPA Interest Suspense Account (URI)? */}
            <section id="what-is-uri" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Core Banking Mechanics &amp; NPA Ledgers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. What Is an NPA Interest Suspense Account (URI)?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you fall behind on a personal loan for more than 90 days, the bank tags your loan as a Non-Performing Asset (NPA). At that exact point, the way the bank tracks interest changes completely.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For healthy loans, banks add interest to your loan balance every month and count it as earned profit. For an NPA loan, the Reserve Bank of India (RBI) bans this practice. Banks cannot report fake profits from unpaid loans.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Instead, the bank freezes regular interest entries in your main loan ledger. It opens a hidden side register called an Interest Suspense Account or Memorandum Account. The interest tracked there is called Unapplied Interest or Unrealized Interest (URI).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This split explains why borrowers get confused during debt talks. Your basic account statement may show one balance, while recovery agents demand almost double. The gap is almost always post-NPA URI and late fees stacked outside the main book.
              </p>
            </section>

            {/* SECTION 2: RBI IRAC Norms: Book Balance vs Memorandum Dues */}
            <section id="rbi-irac-norms" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Income Recognition &amp; Asset Classification Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI IRAC Norms: Book Balance vs Memorandum Dues
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian banks follow strict RBI rules known as IRAC norms (Income Recognition, Asset Classification, and Provisioning). In November 2025, the RBI bundled these rules into unified Commercial Bank IRAC Master Directions (DOR.STR.REC.83).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under these rules, banks must follow four strict steps the day your personal loan hits NPA status. First, income shifts to a cash basis. Second, any unpaid interest booked in earlier months must be reversed out of profit.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, the bank stops debiting fresh monthly interest to your main book ledger. Fourth, all post-NPA interest moves into the off-book Memorandum Account and stays excluded from the bank&apos;s Gross Advances report.
              </p>

              {/* Ledger Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[560px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">NPA Ledger Head</th>
                      <th className="p-3">Where Bank Records It</th>
                      <th className="p-3">Bank Profit Hit on Waiver</th>
                      <th className="p-3">Your OTS Leverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Book Balance (Principal)</td>
                      <td className="p-3">Main Balance Sheet Asset</td>
                      <td className="p-3 text-amber-700 font-semibold">Offset by Loss Provisions</td>
                      <td className="p-3">Core anchor for final settlement math.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Unapplied Interest (URI)</td>
                      <td className="p-3">Off-Book Suspense / Memo Ledger</td>
                      <td className="p-3 text-emerald-700 font-bold">Zero P&amp;L Loss (Never Booked)</td>
                      <td className="p-3 font-semibold text-slate-900">High leverage for 100% waiver.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Penal &amp; Bounce Fees</td>
                      <td className="p-3">Separate Fee Ledger (No Compounding)</td>
                      <td className="p-3 text-emerald-700 font-bold">Zero P&amp;L Loss if Unpaid</td>
                      <td className="p-3">Challenge any interest charged on fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Pre-NPA Reversed Interest</td>
                      <td className="p-3">Reversed at Day 90 under IRAC</td>
                      <td className="p-3 text-emerald-700 font-semibold">Already Reversed from Profit</td>
                      <td className="p-3">Strong ground for full waiver in OTS.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: Financial Math: Why URI Waivers Cost Banks Zero */}
            <section id="waiver-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Bank OTS Sacrifice Formula &amp; Provision Write-Backs</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Financial Math: Why URI Waivers Cost Banks Zero
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a bank reviews your One-Time Settlement (OTS) offer, its committee looks at two numbers. The first is total paper dues, which adds Book Balance plus URI plus late fees. The second is real accounting cost.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For an unsecured personal loan with no collateral, banks must set aside heavy cash buffers called provisions. Within 12 to 24 months of default, the bank often keeps 50% to 100% provision against your unpaid principal.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Here is the hidden math banks rarely share. Waiving 100% of URI causes zero hit to bank profit because URI was never booked as income. Even better, any lump-sum cash you pay releases old provisions straight back into quarterly profit.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample Personal Loan NPA Breakdown (18 Months Overdue)</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Original Loan: ₹5,00,000 @ 18%</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Loan Dues Component</th>
                        <th className="p-3">Ledger Status</th>
                        <th className="p-3">Typical OTS Waiver Scope</th>
                        <th className="p-3 text-right">Amount (INR)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Unpaid Principal on NPA Date</td>
                        <td className="p-3 font-mono text-slate-800">Book Balance</td>
                        <td className="p-3 text-amber-700 font-semibold">25% to 50% Haircut Possible</td>
                        <td className="p-3 text-right font-bold text-slate-900 font-mono">₹4,20,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Pre-NPA Unpaid Interest (90 Days)</td>
                        <td className="p-3 font-mono text-emerald-700">Reversed at NPA</td>
                        <td className="p-3 text-emerald-600 font-semibold">Up to 100% Waiver</td>
                        <td className="p-3 text-right font-bold text-slate-700 font-mono">₹18,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Post-NPA Suspense Interest (URI)</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">Off-Book Memo</td>
                        <td className="p-3 text-emerald-600 font-bold">100% Waiver (Zero P&amp;L Hit)</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">₹1,15,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Bounce &amp; Penal Charges</td>
                        <td className="p-3 font-mono text-rose-600">No Compounding</td>
                        <td className="p-3 text-emerald-600 font-bold">100% Waiver Standard</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">₹47,000</td>
                      </tr>
                      <tr className="bg-slate-50 font-bold text-slate-900">
                        <td className="p-3">Inflated Recovery Notice Total</td>
                        <td className="p-3 font-mono">Book + Memo</td>
                        <td className="p-3 text-rose-700">Starting Demand Quote</td>
                        <td className="p-3 text-right font-mono">₹6,00,000</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Realistic Written OTS Range</td>
                        <td className="p-3 font-mono text-[#1886ff]">Full Closure</td>
                        <td className="p-3 text-[#1886ff]">100% URI &amp; Fees Wiped</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹2,10,000 - ₹2,95,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Note: Figures above are for illustration only. Actual OTS approval depends on verified financial hardship, lender board policy, and account age.
              </p>
            </section>

            {/* SECTION 4: RBI 2023 OTS Rules, Penal Charges & Tax Law */}
            <section id="rbi-ots-penal-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Guardrails &amp; Tax Accounting</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. RBI 2023 OTS Rules, Penal Charges &amp; Tax Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Three clear Indian laws back your demand for a fair settlement figure on an NPA personal loan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, the RBI Compromise Settlement Framework (Circular DOR.STR.REC.20, June 8, 2023) mandates a clear Board policy for OTS deals. Original loan sanction officers cannot approve or block your OTS. After a settled loan, lenders apply a 12-month cooling-off gap before issuing fresh credit.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, RBI Circular DoR.MCS.REC.28 on Penal Charges (from April 1, 2024) bans penal interest completely. Banks can charge only flat late fees. They cannot add those fees to principal or charge interest on them.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, Section 43D of the Income Tax Act, 1961 taxes NPA interest only on actual cash receipt. Banks pay zero tax on uncollected URI in suspense accounts. Waiving URI creates zero tax loss for the bank. For family personal loans, courts also view OTS waivers as capital relief rather than taxable income.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: NPA Suspense &amp; OTS Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This chart shows how RBI IRAC norms split your NPA book balance from unapplied suspense interest. Use this split to seek a 100% URI waiver in personal loan OTS talks.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/interest-suspense-account-uri-npa-personal-loan-ots.jpg"
                    alt="NPA Interest Suspense Account URI and Personal Loan OTS Waivers Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle NPA Ledger &amp; OTS Waiver Framework • RBI IRAC Compliant</span>
                  <a
                    href="/images/infographics/interest-suspense-account-uri-npa-personal-loan-ots.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View High-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP: Negotiating 100% URI Waiver */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Negotiating 100% URI Waiver
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six steps to break down an inflated NPA recovery claim and lock in a clean, written OTS waiver.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Demand a Split Statement and NPA Date
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email your bank or NBFC asking for the exact NPA date and a complete ledger split. Ask them to list Principal, Pre-NPA Interest, Post-NPA URI, and Penal Charges on separate lines.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Audit Illegal Penal Interest Compounding
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check if the lender added late fees or bounce charges into principal and billed interest on them. Cite RBI Circular DoR.MCS.REC.28 in writing and demand immediate reversal of unlawful charges.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Build Verified Hardship Proof
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Banks approve OTS waivers only when they see real repayment distress. Gather job-loss letters, medical bills, lower bank inflows, or business closure records to back your written settlement offer.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Anchor Your Offer to the Book Balance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ignore inflated agent calls based on memorandum dues. Submit a written OTS proposal seeking 100% waiver of URI and penal charges, plus a fair haircut on the NPA Book Balance.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Check URI Extinguishment in the OTS Letter
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Verify the official OTS sanction letter on bank letterhead before paying. Confirm it waives 100% of principal balance, unapplied interest (URI), memorandum dues, legal costs, and penal fees with zero residual claim.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Collect NDC and Track Credit Bureau Updates
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pay strictly into your loan account before the expiry date and save UTR receipts. Collect your No Dues Certificate (NDC) and check CIBIL, Experian, CRIF, and Equifax under the RBI 15-day update cycle.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Supreme Court Rulings on Suspense Interest & OTS */}
            <section id="legal-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Binding Supreme Court Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Supreme Court Rulings on Suspense Interest &amp; OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers often hear myths that suspense interest vanishes on its own. Four binding Supreme Court verdicts clarify your real rights and legal boundaries.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>PNB v. Shree Jyoti Education Trust (2026)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    On August 12, 2026 (2026 INSC 836), the Supreme Court ruled on suspense ledgers. Post-NPA URI stays legal debt under Section 2(g) of the RDB Act. You must get a written OTS waiver to wipe it out.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Central Bank of India v. Ravindra (2001)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A five-judge Supreme Court bench banned adding penal interest to principal. Banks cannot charge compound interest on default fees. They cannot pad NPA dues with interest on penalties.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Bijnor Urban Co-op Bank v. Meenal Agarwal (2021)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Court held that OTS is a business choice, not a writ right. High Courts will not force a bank into a settlement. Borrowers win OTS deals using hardship proof and cash recovery math.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>SBI v. Arvindra Electronics (2022)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Court held that judges cannot extend signed OTS payment dates. If you miss your due date, the URI waiver ends. Always pay on time as stated in your OTS letter.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A bank may hide your split ledger or charge illegal penal fees. Some lenders also demand extra URI after a paid OTS. Use this three-step RBI ladder to stop such breaches.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank or NBFC Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Issues bifurcated NPA ledger and reverses unlawful compounded penal fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Audits URI posting errors, enforces signed OTS waivers, and issues pending NDC.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Orders ledger correction, credit bureau update, and damages via cms.rbi.org.in.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Milestones: NPA Date to Clean NDC */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Milestones: NPA Date to Clean NDC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Timing shapes your waiver percentage. Understanding each accounting stage helps you approach the lender when provision pressure peaks.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Window</th>
                      <th className="p-3">RBI Asset Stage</th>
                      <th className="p-3">Bank Accounting Action</th>
                      <th className="p-3">Borrower Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0, SMA-1, SMA-2</td>
                      <td className="p-3">Normal accrual continues; late charges begin accruing separately.</td>
                      <td className="p-3">Communicate hardship in writing; avoid fresh high-cost rollovers.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 91 (NPA Date)</td>
                      <td className="p-3 font-mono text-[11px]">Sub-Standard NPA</td>
                      <td className="p-3">Reverses past unpaid interest; stops main ledger interest; opens URI memo.</td>
                      <td className="p-3">Record exact NPA date and save your last active loan statement.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 92 to 180</td>
                      <td className="p-3 font-mono text-[11px]">Early NPA / Write-Off Watch</td>
                      <td className="p-3">Unsecured provisions climb sharply; URI builds off-book each month.</td>
                      <td className="p-3">Request split ledger; prepare medical or income-loss documents.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Month 6 to 15</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Peak OTS Window</td>
                      <td className="p-3">Heavy provisions booked; lender prefers fast cash recovery over litigation.</td>
                      <td className="p-3 font-bold text-amber-800">Submit formal OTS offer targeting 100% URI waiver plus principal cut.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">OTS Sanction Day</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Compromise Closure</td>
                      <td className="p-3">Issues board-policy OTS letter wiping URI and releasing excess provision.</td>
                      <td className="p-3 font-bold text-slate-900">Verify full URI waiver wording before paying lump-sum settlement.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Post-Pay +15 to 30 Days</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">NDC &amp; Bureau Sync</td>
                      <td className="p-3">Issues No Dues Certificate and reports zero balance on 15-day cycle.</td>
                      <td className="p-3">Download all 4 bureau reports to confirm zero residual URI balance.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Real-World Cases: NBFCs, ARCs & Write-Offs */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Real-World Cases: NBFCs, ARCs &amp; Write-Offs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Unsecured personal loans move through NBFCs, bad-loan buyers, and write-off ledgers differently. Here is how URI rules apply in four common scenarios.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    NBFC Stage 3 Loans Under Ind AS 109
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Large NBFCs tag 90-day defaults as Stage 3 loans. Under Ind AS 109 and RBI IRACP floors, they book heavy loss buffers on unsecured debt. As a result, NBFCs often grant 100% post-NPA interest waivers in OTS.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Asset Reconstruction Company (ARC) Sales
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks often sell bad personal loan pools to an ARC at a deep discount. Even when an ARC quotes old URI figures, its real purchase cost is low. That gives you strong room to win a 100% URI waiver.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Technical Write-Offs &amp; PWOS Settlements
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A technical write-off cleans the bank balance sheet, but keeps memo dues alive for recovery. Any OTS cash you pay counts as fresh recovery income. That makes deep OTS waivers much easier to approve.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Beware Random Small NPA Token Payments
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Small token payments without a signed OTS letter rarely cut loan principal. Banks credit unmarked cash to old interest and URI first. Worse, each small payment resets the 3-year lawsuit clock.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: NPA URI &amp; OTS Waivers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers to common questions on NPA interest suspense accounts, memorandum dues, penal charges, and personal loan OTS waivers in India.
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden shadow-2xs transition-all duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          <p className="pt-3">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Statutory References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI IRAC Master Directions (2025):</strong> RBI/DOR/2025-26/164, DOR.STR.REC.83/21.04.048/2025-26 (Commercial Banks - Income Recognition, Asset Classification and Provisioning Directions), governing income reversal and Memorandum Account tracking of Unapplied Interest (URI).
                </li>
                <li>
                  <strong>RBI Compromise Settlement Framework (2023):</strong> RBI/2023-24/40, DOR.STR.REC.20/21.04.048/2023-24 dated June 8, 2023 (Framework for Compromise Settlements and Technical Write-offs), mandating Board-approved OTS policies and 12-month cooling-off norms.
                </li>
                <li>
                  <strong>RBI Fair Lending Practice - Penal Charges Circular:</strong> RBI/2023-24/53, DoR.MCS.REC.28/01.01.001/2023-24 (effective April 1, 2024), strictly prohibiting capitalization or compounding of penal charges on personal loans and NPAs.
                </li>
                <li>
                  <strong>Income Tax Act, 1961 &amp; RDB Act, 1993:</strong> Section 43D (Cash-basis tax recognition of NPA interest for banks and specified NBFCs) and Section 2(g) of the Recovery of Debts and Bankruptcy Act, 1993 (Statutory definition of Debt).
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> Punjab National Bank v. M/s. Shree Jyoti Education and Management Trust World (2026 INSC 836), Central Bank of India v. Ravindra (2002) 1 SCC 367, Bijnor Urban Cooperative Bank v. Meenal Agarwal (2021), and SBI v. Arvindra Electronics (2022).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.incometaxindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Income Tax Department India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/what-is-npa" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    What Is NPA? Complete Guide
                  </Link>
                  <Link href="/section-59-contract-act-loan-payment-to-principal-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 59 Payment to Principal
                  </Link>
                  <Link href="/post-write-off-settled-pwos-meaning-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Post Write-Off Settled (PWOS)
                  </Link>
                  <Link href="/rule-of-78-front-loaded-interest-personal-loan-dispute" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rule of 78 Interest Dispute
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Sanction Letter
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After Settlement
                  </Link>
                  <Link href="/rbi-15-day-fortnightly-credit-bureau-update-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI 15-Day CIBIL Update Rule
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Agent Rules
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply Guide
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-5 sticky top-6">

            {/* Card 1: Author Bio Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-sm hover:bg-blue-200 transition-colors flex-shrink-0"
                  title="View Ashish Jhangra Profile"
                >
                  AJ
                </Link>
                <div>
                  <Link
                    href="/author/ashish-jhangra"
                    className="text-sm font-bold text-slate-900 hover:text-[#1886ff] transition-colors block"
                  >
                    Ashish Jhangra
                  </Link>
                  <p className="text-[11px] font-semibold text-[#1886ff]">
                    Legal &amp; Debt Resolution Professional
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Expert in NPA ledger audits, RBI IRAC rules, and personal loan OTS deals. Helps Indian borrowers fight inflated claims and close bad loans cleanly.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <Link
                  href="/author/ashish-jhangra"
                  className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>View Author Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> CredSettle Panel
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card (#2452ae background) */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  NPA LEDGER &amp; OTS SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Inflated NPA Demand Blocking Your OTS?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt team audits your NPA ledger and splits true principal from off-book URI. We cut illegal late fees and win a clean OTS letter and NDC.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Request Free NPA Ledger Audit
              </Link>
              <div className="pt-2 flex flex-col items-center justify-center gap-1 text-[11px] text-blue-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-blue-200" />
                  <a href="tel:+918800226635" className="hover:underline font-bold text-white">
                    Call: +91-8800226635
                  </a>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-blue-300">
                  <Lock className="w-3 h-3" />
                  <span>RBI Compliant • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Forensic NPA Ledger Audit:</strong> Separate true principal from off-book URI.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>100% URI Waiver Focus:</strong> Negotiate full relief on post-NPA suspense dues.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified OTS Letters:</strong> Full extinguishment of Book &amp; Memo balances.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Post-OTS Bureau Tracking:</strong> Timely NDC and 15-day CIBIL status sync.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/what-is-npa"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    What Is NPA? Rules &amp; Resolution
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">90-day classification guide &rarr;</span>
                </Link>

                <Link
                  href="/section-59-contract-act-loan-payment-to-principal-rule"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 59: Credit Payment to Principal
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Payment allocation rights &rarr;</span>
                </Link>

                <Link
                  href="/post-write-off-settled-pwos-meaning-personal-loan"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Post Write-Off Settled (PWOS) Guide
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Write-off OTS &amp; CIBIL rules &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
