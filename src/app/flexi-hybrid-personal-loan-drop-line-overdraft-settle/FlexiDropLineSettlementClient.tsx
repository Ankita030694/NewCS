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

export default function FlexiDropLineSettlementClient() {
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
    { id: 'debt-trap-anatomy', label: '1. How Flexi & Drop-Line Loans Trap You' },
    { id: 'rbi-legal-framework', label: '2. RBI Legal Framework & OTS Rules' },
    { id: 'hidden-cost-math', label: '3. EMI Jump & Hidden AMC Cost Math' },
    { id: 'out-of-order-npa', label: '4. Out-of-Order NPA vs Term Loan Rules' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Settlement SOP' },
    { id: 'borrower-protections', label: '7. Supreme Court & Statutory Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Default to NOC Milestones' },
    { id: 'common-mistakes', label: '10. Mistakes & Specialized Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can I settle a Flexi Loan or Drop-Line Overdraft via OTS?',
      a: 'Yes. Banks and NBFCs can settle Flexi Personal Loans and Drop-Line Overdrafts through a One-Time Settlement (OTS). Under RBI Circular RBI/2023-24/40 dated June 8, 2023, each lender must follow a board-approved policy. You need to show real money hardship, such as a job loss or medical crisis.'
    },
    {
      q: 'Why did my Flexi Hybrid Loan EMI jump after two years?',
      a: 'In a Flexi Hybrid Loan, you pay only interest during the first block of months. Your main loan balance does not go down at all in that time. Once that phase ends, the whole balance gets packed into fewer months left, so your monthly EMI jumps sharply.'
    },
    {
      q: 'When does a Drop-Line Overdraft turn into an NPA?',
      a: 'Under RBI Circular RBI/2021-22/125, an overdraft becomes out of order and turns into an NPA after 90 days in three cases. First, your used sum stays above the new lower limit for 90 days. Second, no money comes in for 90 days. Third, your credits do not cover the interest billed over 90 days.'
    },
    {
      q: 'Can an NBFC charge a yearly AMC if I owe zero rupees?',
      a: 'Many NBFCs bill a yearly AMC on the whole active drop-line limit even when you owe zero rupees. Yet they can only charge it if your Key Facts Statement (KFS) listed it up front. Under RBI Circular RBI/2024-25/18, a lender cannot collect any fee left out of your KFS.'
    },
    {
      q: 'Can a lender charge interest on top of late fees?',
      a: 'No. Under RBI Circular RBI/2023-24/53 on Penal Charges, lenders cannot add penal rates onto your base loan rate. They also cannot charge interest on late fees or over-limit fees. The Supreme Court banned this practice in Central Bank of India v. Ravindra (2002).'
    },
    {
      q: 'What happens if I pay my used balance but leave the line open?',
      a: 'Paying off only the money you drew keeps your credit line open. The lender will keep taking yearly AMC fees from your active limit. If you miss that fee, it creates a new default on CIBIL. Always get written proof that the full limit is cut to Rs 0.'
    },
    {
      q: 'Do I have to pay foreclosure fees on a Flexi Loan in 2026?',
      a: 'Under the RBI Pre-payment Charges Directions, 2025 (effective January 1, 2026), floating-rate personal loans for personal use have zero foreclosure fees if issued or renewed on or after January 1, 2026. Fixed-rate flexi loans may still charge a KFS-listed fee to close early.'
    },
    {
      q: 'Will a Flexi Loan settlement lower my CIBIL score?',
      a: 'Yes. A settlement tags the loan as Settled instead of Closed on CIBIL, Experian, Equifax, and CRIF High Mark. Your score drops in the short run. Under RBI Circular RBI/2024-25/60, lenders must send updates every 15 days so your zero balance shows up fast.'
    },
    {
      q: 'Can recovery agents call my office or threaten me?',
      a: 'No. Under RBI Circular RBI/2022-23/108, agents can only call between 8:00 AM and 7:00 PM. They cannot threaten you, shame you, or contact your boss, coworkers, or family. You can report them to the Nodal Officer and the RBI Ombudsman at cms.rbi.org.in.'
    },
    {
      q: 'How does CredSettle help close Flexi and Drop-Line Loans?',
      a: 'CredSettle checks your KFS and loan ledger to spot unfair AMC fees and added penal interest. Our team stops illegal agent calls, negotiates a written OTS offer, ensures full line closure to zero, and helps you get your No Dues Certificate.'
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
            <span>RBI Settlement, Penal Charges &amp; KFS Rules</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Escape the Interest-Only Flexi Personal Loan Debt Trap
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Hit by a sharp EMI jump, a shrinking drop-line limit, or yearly AMC fees? Learn your rights under RBI rules and settle your flexi loan safely with a No Dues Certificate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Free Flexi Loan Review</span>
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
                  <span>RBI Borrower Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Backed by RBI OTS Rules 2023, Penal Fee Rules 2024, and KFS Rules 2024.
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
                <span>EXECUTIVE BRIEF: FLEXI LOAN &amp; DROP-LINE OVERDRAFT SETTLEMENT</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">You Can Settle Legally:</strong> Banks and NBFCs can settle Flexi Personal Loans and Drop-Line Overdrafts via One-Time Settlement (OTS). RBI Circular RBI/2023-24/40 sets the rule book for this.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Why Defaults Happen:</strong> Interest-only EMIs leave your main debt untouched for years. When full EMIs start or the drop-line limit falls, your monthly bill shoots up fast.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Interest on Late Fees:</strong> RBI Circular RBI/2023-24/53 bans penal interest. Lenders cannot add late fees into your loan balance to charge extra interest on them.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Hidden AMC Fees Are Invalid:</strong> Under RBI Circular RBI/2024-25/18, a bank or NBFC cannot bill you any fee that was missing from your Key Facts Statement (KFS).
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Shut the Whole Credit Line:</strong> Do not just pay the sum you drew. Make sure your OTS letter cuts the whole credit limit to Rs 0, or yearly AMC fees will hit you again.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: How Flexi Hybrid Loans & Drop-Line Overdrafts Trap You */}
            <section id="debt-trap-anatomy" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Product Design &amp; Borrower Risk</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. How Flexi Hybrid Loans &amp; Drop-Line Overdrafts Trap You
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks and NBFCs sell Flexi Hybrid Loans and Drop-Line Overdrafts (DLOD) as low-EMI credit lines. Sales staff tell salaried workers to draw cash as needed and pay interest only on the cash they use. At first glance, this looks much lighter than a normal loan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In practice, three built-in rules push many borrowers into default. First, the early Flexi Hybrid phase lasts 12 to 36 months. During those months, you pay interest only, so your main loan balance never drops by a single rupee.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When the next phase starts, you must repay the whole loan in the shorter time left. As a result, your monthly EMI can double overnight. Many families simply cannot absorb that sudden jump in cash outflow.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, a Drop-Line Overdraft lowers your credit ceiling each month or year. If your drawn sum stays higher than the new lower limit, your account goes over limit right away. The lender then demands the excess sum along with bounce charges and late fees.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, many NBFC flexi lines charge an Annual Maintenance Charge (AMC) of up to 0.472 percent (with GST). They apply this fee on the full drop-line limit, not just on what you drew. Even if you owe Rs 0, this yearly fee quietly debits your line and hurts your score if unpaid.
              </p>
            </section>

            {/* SECTION 2: RBI Legal Framework: IRACP, KFS & Compromise OTS Rules */}
            <section id="rbi-legal-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Binding Central Bank Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI Legal Framework: IRACP, KFS &amp; Compromise OTS Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every bank and NBFC in India must obey Reserve Bank of India (RBI) rules. No lender can use small print in a loan app to override these four core protections.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>RBI Compromise Settlement Rules (2023)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Circular RBI/2023-24/40 (DOR.STR.REC.20) dated June 8, 2023 binds all banks and NBFCs. It allows a One-Time Settlement (OTS) under a board policy. An officer higher than the one who gave the loan must sign off on the deal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>RBI Penal Charges Rule (2023 / 2024)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Circular RBI/2023-24/53 (DoR.MCS.REC.28) took effect on April 1, 2024 for new loans and June 30, 2024 for old loans. It bans penal interest. Lenders can charge flat late fees only, with zero extra interest added on top.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <BookOpen className="w-4 h-4" />
                    <span>RBI Key Facts Statement Rule (2024)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Circular RBI/2024-25/18 (DOR.STR.REC.13) dated April 15, 2024 requires a clear KFS before you sign. It must list the true APR, AMC fee, drop-line schedule, and exit fees. Any fee left out of your KFS cannot be charged.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>RBI Pre-Payment Directions (2025)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Starting January 1, 2026, floating-rate personal loans for personal use carry zero closure fees. This applies to loans issued or renewed on or after that date. Fixed-rate flexi loans may still charge KFS-listed exit fees.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: Hidden Cost Math: Interest-Only EMI Jump & AMC Ledger */}
            <section id="hidden-cost-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Real Cost &amp; Fee Breakdown</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Hidden Cost Math: Interest-Only EMI Jump &amp; AMC Ledger
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Simple math shows how fast a Flexi Hybrid Loan can hurt your monthly budget. Take a Rs 10,00,000 loan at 16 percent yearly interest for 60 months, with a 24-month interest-only start.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For two full years, you pay Rs 13,333 each month. After paying nearly Rs 3.20 Lakh, your main debt is still Rs 10,00,000. On Month 25, that whole sum must be paid in 36 months, so your EMI jumps to Rs 35,157.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample Rs 10 Lakh Flexi Hybrid Loan Cost (16% Yearly)</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">60-Month Split Plan</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Loan Phase / Fee Type</th>
                        <th className="p-3">Monthly Bill / Fee Rate</th>
                        <th className="p-3">Principal Paid Down</th>
                        <th className="p-3 text-right">Real Cost Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Months 1 to 24 (Interest-Only)</td>
                        <td className="p-3 font-mono">Rs 13,333 / month</td>
                        <td className="p-3 text-rose-600 font-semibold">Rs 0 (No Drop)</td>
                        <td className="p-3 text-right font-bold text-slate-700 font-mono">Rs 3,19,992 Paid</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Months 25 to 60 (Full EMI Shock)</td>
                        <td className="p-3 font-mono text-rose-700 font-bold">Rs 35,157 / month</td>
                        <td className="p-3 text-emerald-600 font-semibold">Rs 10,00,000 Repaid</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">+163% EMI Jump</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Yearly Maintenance Fee (AMC)</td>
                        <td className="p-3 font-mono text-amber-600 font-bold">Up to 0.472% of Limit</td>
                        <td className="p-3 text-amber-700 font-semibold">Charged Even at Rs 0</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">Up to Rs 4,720 / Year</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Fixed-Rate Early Closure Fee</td>
                        <td className="p-3 font-mono">Up to 4.72% of Limit</td>
                        <td className="p-3 text-slate-600">Often on Full Limit</td>
                        <td className="p-3 text-right font-bold text-slate-800 font-mono">Up to Rs 47,200 Fee</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Paid vs Normal 60-Month Loan</td>
                        <td className="p-3 font-mono text-[#1886ff]">Normal EMI: Rs 24,318</td>
                        <td className="p-3 text-[#1886ff]">Flexi Total: Rs 15.86 Lakh</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">Rs 1.27 Lakh Extra Cost</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Out-of-Order NPA Rule vs Regular Personal Loan Default */}
            <section id="out-of-order-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>IRACP Rules &amp; NPA Triggers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Out-of-Order NPA Rule vs Regular Personal Loan Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A Drop-Line Overdraft follows stricter default checks than a normal EMI loan. Under RBI Circular RBI/2021-22/125 dated November 12, 2021, banks run daily automated checks to tag overdraft accounts as out of order.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Your overdraft turns into a Non-Performing Asset (NPA) after 90 days in three cases. First, your used sum stays above the reduced drop-line limit for 90 days. Second, no money comes in for 90 days. Third, your credits do not cover the interest billed over those 90 days.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Key Point</th>
                      <th className="p-3">Normal Personal Loan</th>
                      <th className="p-3">Flexi / Drop-Line Overdraft</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">NPA Trigger</td>
                      <td className="p-3">EMI unpaid for more than 90 days.</td>
                      <td className="p-3">Out of order for 90 days (over limit, no credits, or short interest).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Limit Drop Risk</td>
                      <td className="p-3">Fixed plan with no revolving limit.</td>
                      <td className="p-3">Limit drops each month or year, causing sudden excess dues.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Yearly Fees (AMC)</td>
                      <td className="p-3">No yearly fee after loan payout.</td>
                      <td className="p-3">Yearly AMC billed on the active limit even at Rs 0 balance.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Back to Normal</td>
                      <td className="p-3">Pay all missed EMIs and fees.</td>
                      <td className="p-3">Must clear full overdue sums on all loans with that lender.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">OTS Closure Trap</td>
                      <td className="p-3">One payout ends the loan fully.</td>
                      <td className="p-3 font-semibold text-slate-900">OTS must shut both the balance and the full credit limit.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Flexi Loan &amp; Drop-Line OD Exit Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart maps how Flexi Loans and Drop-Line Overdrafts work under RBI rules. Use it to check unfair charges and plan a safe One-Time Settlement.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/flexi-hybrid-personal-loan-drop-line-overdraft-settle.jpg"
                    alt="Flexi Hybrid Personal Loan and Drop-Line Overdraft Settlement RBI Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Flexi Loan &amp; Drop-Line Overdraft Resolution Blueprint • RBI Compliant</span>
                  <a
                    href="/images/infographics/flexi-hybrid-personal-loan-drop-line-overdraft-settle.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Settle Your Flexi or Drop-Line Loan */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Action Plan</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Settle Your Flexi or Drop-Line Loan
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a job loss, medical crisis, or EMI jump leaves you unable to pay, stay calm. Follow these six steps to settle cleanly and stop hidden fees later.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Get Your KFS, Loan Copy &amp; Full Statement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ask your lender for your full ledger, drop-line chart, and signed Key Facts Statement (KFS). Separate the cash you actually drew from interest, AMC fees, bounce charges, and late fines.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Challenge Added Penal Interest &amp; Hidden AMC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check if the bank added interest on top of late fees after April 2024. Also check if AMC fees were missing from your KFS. Dispute those wrong sums first so your OTS starts from the true balance.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Send a Written Hardship &amp; OTS Offer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once the loan hits NPA or deep stress (often 90 to 180 days late), email the collections head. Attach clear proof of hardship, such as a layoff letter, medical bills, or bank statements.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Get Written Proof That the Full Limit Drops to Rs 0
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check that the OTS letter comes from an official bank or NBFC email ID. It must state the exact payout sum, due dates, full waiver of AMC and exit fees, and full closure of the drop-line limit to Rs 0.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Pay Only Through Official Loan Channels
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never give cash to a field agent or pay a personal UPI ID. Send the OTS sum straight into your official loan account via NEFT, RTGS, or the lender app. Save every UTR slip safely.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Collect Your NDC &amp; Check All 4 Credit Bureaus
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Collect your No Dues Certificate (NDC) showing zero dues and a closed credit line. After 15 to 30 days, check CIBIL, Experian, Equifax, and CRIF High Mark to confirm your balance is zero.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Borrower Protections: Supreme Court & Statutory Rights */}
            <section id="borrower-protections" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Court Rulings &amp; Legal Shields</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Borrower Protections: Supreme Court &amp; Statutory Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Missing payments on an unsecured Flexi Loan or Drop-Line Overdraft is a civil debt, not a crime. Indian laws and Supreme Court rulings give you strong shields against unfair fees and harsh recovery agents.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Central Bank of India v. Ravindra (2002)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In (2002) 1 SCC 367, a five-judge Supreme Court bench ruled that penal interest can never be compounded. The Court also held that RBI rules bind all banks and override harsh contract terms.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>ICICI Bank v. Prakash Kaur (2007) &amp; Citicorp (2012)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In (2007) 2 SCC 711 and Citicorp Maruti Finance v. S. Vijayalaxmi (2012) 1 SCC 1, the Supreme Court banned muscle power in debt recovery. Lenders must follow the law and cannot scare or shame borrowers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Indian Contract Act, 1872 (Sec. 63 &amp; 74)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 63 backs One-Time Settlements in law. Once a lender takes a lower agreed sum to close a debt, the rest of the debt ends for good. Section 74 stops excessive default fines.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019 (Sec. 2(46) &amp; 2(47))</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hiding the EMI jump or charging unlisted AMC on an unused line counts as an unfair trade practice or unfair contract. You can claim refunds and damages in Consumer Court.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Lender GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Official Complaint Ladder</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Lender GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your lender rejects a valid KFS fee dispute, sends rude agents, or delays your NDC after OTS payout, use this three-step ladder right away.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Complaint Level</th>
                      <th className="p-3">Who Handles It</th>
                      <th className="p-3">Time Limit</th>
                      <th className="p-3">What Relief You Get</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank / NBFC Grievance Officer</td>
                      <td className="p-3 font-mono">7 to 14 Days</td>
                      <td className="p-3">Checks KFS fees, refunds wrong AMC, and stops agent calls.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer</td>
                      <td className="p-3 font-mono">Up to 30 Days</td>
                      <td className="p-3">Removes added penal interest, shuts credit line, and sends NDC.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI Integrated Ombudsman</td>
                      <td className="p-3 font-mono">After 30 Days</td>
                      <td className="p-3">Free filing on cms.rbi.org.in for binding refunds and bureau fixes.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Default to NOC Timeline: Milestones & Credit Reporting */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Key Timelines &amp; Credit Updates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Default to NOC Timeline: Milestones &amp; Credit Reporting
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing each step from the first missed bill to your final bureau update helps you stay calm and pick the right time to offer an OTS.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Stage</th>
                      <th className="p-3">Loan Tag</th>
                      <th className="p-3">What the Lender Does</th>
                      <th className="p-3">What You Should Do</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Sends SMS alerts, bills bounce fees, and makes reminder calls.</td>
                      <td className="p-3">Save your KFS and ledger; ask for a softer plan if stress is brief.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1 &amp; SMA-2</td>
                      <td className="p-3">Freezes cash drawdowns, sends notices, and steps up calls.</td>
                      <td className="p-3">Log any calls outside 8 AM to 7 PM; gather hardship proofs.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91+</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA / Out of Order</td>
                      <td className="p-3">Sends loan recall or notice; moves file to recovery team.</td>
                      <td className="p-3 font-bold text-amber-800">Audit penal fees and send a written OTS offer.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 120 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">OTS Window</td>
                      <td className="p-3">Senior officer reviews waiver under June 2023 RBI rules.</td>
                      <td className="p-3 font-bold text-slate-900">Check that the OTS letter cuts the drop-line limit to Rs 0.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">15 to 30 Days Post-OTS</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">15-Day CIC Update</td>
                      <td className="p-3">Issues NDC and updates bureaus under RBI Circular RBI/2024-25/60.</td>
                      <td className="p-3">Check all 4 bureaus; claim Rs 100/day (RBI/2023-24/72) if fixes pass 30 days.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Common Mistakes & Specialized Flexi Loan Scenarios */}
            <section id="common-mistakes" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Key Warnings &amp; Edge Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Common Mistakes &amp; Specialized Flexi Loan Scenarios
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Small slips during a Flexi Loan or Drop-Line Overdraft default can cost you heavily. Avoid these four costly mistakes before you pay a single rupee.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    Leaving the Credit Line Open at Zero Balance
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Paying back the cash you drew does not shut a Flexi or Drop-Line account. Until you get a written line-closure NDC, yearly AMC fees keep hitting the line and can cause a new CIBIL default.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Bank Set-Off on Your Salary Account
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your Drop-Line Overdraft sits with the same bank that holds your salary account, the bank may auto-cut your pay using its right of set-off. Move your salary bank before you start OTS talks.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Paying Token Sums on Verbal Agent Promises
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Field agents often push you to pay a small token sum today and promise an OTS letter later. Never pay without a signed letter from the lender. Token payouts just feed late fees and reset legal clocks.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Cooling-Off Rules &amp; Write-Off Traps
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Circular RBI/2023-24/40, a technical write-off does not wipe out your debt, so recovery can still go on. After a true OTS, the lender also applies a cooling-off period before giving you any new loan.
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
                Frequently Asked Questions: Flexi &amp; Drop-Line Loan OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers to common questions on Flexi Hybrid EMI jumps, Drop-Line Overdraft NPA rules, hidden AMC disputes, and RBI settlement rights.
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
                  <strong>RBI Compromise Settlement Rules:</strong> Circular RBI/2023-24/40 (DOR.STR.REC.20/21.04.048/2023-24), June 8, 2023.
                </li>
                <li>
                  <strong>RBI Overdraft NPA Rules:</strong> Circular RBI/2021-22/125 (DOR.STR.REC.68/21.04.048/2021-22), November 12, 2021 and February 15, 2022 note.
                </li>
                <li>
                  <strong>RBI Penal Charges Ban:</strong> Circular RBI/2023-24/53 (DoR.MCS.REC.28/01.01.001/2023-24), August 18, 2023.
                </li>
                <li>
                  <strong>RBI KFS &amp; Pre-Payment Rules:</strong> Circular RBI/2024-25/18 (DOR.STR.REC.13), April 15, 2024 and Pre-payment Directions, 2025 (from Jan 1, 2026).
                </li>
                <li>
                  <strong>RBI Recovery &amp; Credit Bureau Rules:</strong> RBI/2022-23/108 (8 AM to 7 PM calls), RBI/2024-25/60 (15-day updates), and RBI/2023-24/72 (Rs 100/day delay payout).
                </li>
                <li>
                  <strong>Courts &amp; Acts:</strong> Central Bank of India v. Ravindra (2002) 1 SCC 367; ICICI Bank v. Prakash Kaur (2007) 2 SCC 711; Citicorp Maruti Finance v. S. Vijayalaxmi (2012) 1 SCC 1; Indian Contract Act, 1872 (Sec. 63, 74); Consumer Protection Act, 2019 (Sec. 2(46), 2(47)).
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
                  <a href="https://sachet.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Sachet Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Dispute Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/overdraft-cash-credit-od-cc-default-settlement-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business OD &amp; CC Settlement
                  </Link>
                  <Link href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Hidden Fees Missing in KFS
                  </Link>
                  <Link href="/flat-interest-rate-vs-reducing-apr-personal-loan-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Flat Rate vs Reducing APR
                  </Link>
                  <Link href="/bajaj-finserv-personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bajaj Finserv Loan Settlement
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Letter
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Agent Rules
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/understanding-90-day-loan-default-india" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    90-Day Loan Default Rules
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
                Helps Indian borrowers settle Flexi Personal Loans and Drop-Line Overdrafts under RBI rules, stop harsh calls, and fix wrong CIBIL tags.
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
                  FLEXI LOAN &amp; OD RELIEF
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Stuck in a Flexi Loan EMI Jump?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our team checks hidden AMC and late fees, stops rude calls, negotiates a written OTS, and closes your drop-line limit to Rs 0.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Book Free Settlement Review
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
                  <span><strong>KFS &amp; AMC Audit:</strong> Challenge unlisted yearly fees and late fines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Full Limit Closure:</strong> Ensure your OTS cuts the credit line to Rs 0.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Call Protection:</strong> Enforce RBI 8 AM to 7 PM agent conduct rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>NDC &amp; Bureau Checks:</strong> Track 15-day updates on all 4 credit bureaus.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Personal Loan Fees Missing in KFS
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Claim RBI hidden fee refund &rarr;</span>
                </Link>

                <Link
                  href="/overdraft-cash-credit-od-cc-default-settlement-rules"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    OD &amp; CC Default Settlement Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Business overdraft relief &rarr;</span>
                </Link>

                <Link
                  href="/get-noc-after-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Get NOC After Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Official bank closure steps &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
