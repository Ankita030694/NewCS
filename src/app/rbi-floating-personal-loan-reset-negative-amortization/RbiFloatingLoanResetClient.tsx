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

export default function RbiFloatingLoanResetClient() {
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
    { id: 'statutory-framework', label: '1. RBI Floating Loan Reset Circular' },
    { id: 'negative-amortization-ban', label: '2. Tenure Trap & Negative Amortization' },
    { id: 'amortization-math', label: '3. Loan Math: Rate Hike Cost Table' },
    { id: 'mandatory-borrower-options', label: '4. Mandatory Choices & Fixed Switch' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. SOP: Break the Loan Tenure Trap' },
    { id: 'eblr-kfs-prepayment-rules', label: '7. EBLR, KFS & Zero Foreclosure Fee' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Rate Reset to Relief Milestones' },
    { id: 'specialized-scenarios', label: '10. NBFCs, MCLR & Retirement Cases' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is the RBI rule on resetting floating rates on personal loans?',
      a: 'Under RBI Circular RBI/2023-24/55 dated August 18, 2023, banks and NBFCs must inform you clearly before changing your EMI or loan tenure. At every rate reset, they must let you pick higher EMIs, longer tenure, or a mix of both. You can also prepay or switch to a fixed rate.'
    },
    {
      q: 'What is negative amortization in a floating rate loan?',
      a: 'Negative amortization happens when your monthly EMI is smaller than the interest charged for that month. The unpaid interest gets added back to your loan balance. As a result, your debt grows larger each month even though you pay every EMI on time.'
    },
    {
      q: 'Does the RBI ban negative amortization on floating personal loans?',
      a: 'Yes. RBI Circular DOR.MCS.REC.32 strictly bars lenders from extending loan tenures in a way that causes negative amortization. If a rate hike pushes monthly interest above your EMI, the lender must alert you to raise your EMI or make a part-payment instead.'
    },
    {
      q: 'Can a bank extend my loan tenure without telling me first?',
      a: 'No. Since December 31, 2023, banks and NBFCs cannot silently add months or years to your loan. They must inform you right away via SMS, email, or letter about any change in your EMI or tenure and record your choice.'
    },
    {
      q: 'Can I switch my floating personal loan to a fixed interest rate?',
      a: 'Yes. Every bank and NBFC must have a board-approved policy letting you switch from a floating rate to a fixed rate at the time of reset. The lender must also state how many switches you get and all switch fees upfront in your Key Facts Statement.'
    },
    {
      q: 'Do I have to pay a fee to prepay or close a floating personal loan?',
      a: 'No. The RBI Pre-payment Charges on Loans Directions, 2025 took effect on January 1, 2026. Banks and NBFCs cannot charge foreclosure or part-payment fees on individual floating non-business loans. There is no lock-in period.'
    },
    {
      q: 'What must a bank show in my quarterly loan statement under RBI rules?',
      a: 'At the end of every quarter, your lender must send a simple loan statement. It must list total principal and interest paid so far and your current EMI. It must also show the EMIs left and your yearly APR.'
    },
    {
      q: 'Can a bank hike my floating loan spread whenever it wants?',
      a: 'No. Under RBI EBLR rules, a bank cannot change non-credit-risk spread parts more than once in three years. It can raise your credit risk spread only if your credit profile worsens clearly under written loan contract terms.'
    },
    {
      q: 'How do I complain if my bank traps me in endless tenure extensions?',
      a: 'First write to your lender Grievance Redressal Officer and Principal Nodal Officer citing RBI Circular RBI/2023-24/55. If they do not fix the schedule or refund excess interest within 30 days, file a free complaint at cms.rbi.org.in.'
    },
    {
      q: 'How does CredSettle help borrowers caught in floating loan tenure traps?',
      a: 'CredSettle audits your loan ledger for illegal negative amortization and spread hikes. Our team sends formal RBI notices to the Principal Nodal Officer and Ombudsman. We also negotiate restructuring or an OTS waiver when EMIs become unaffordable.'
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
            <span>RBI Circular DOR.MCS.REC.32 Compliance &amp; Borrower Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Stop Endless Tenure Extension on Floating Personal Loans
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Know your legal rights under RBI floating rate reset rules. Stop silent loan extensions, ban negative amortization, switch to a fixed rate, or close your loan with zero foreclosure fee.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Audit My Floating Loan Now</span>
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
                  Protected under RBI Circular RBI/2023-24/55, KFS Rules 2024, and RBI 2025 Pre-payment Directions.
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
                <span>EXECUTIVE BRIEF: RBI FLOATING RATE RESET &amp; TENURE TRAP RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict Ban on Negative Amortization:</strong> Lenders cannot stretch your tenure so far that your monthly interest exceeds your EMI and swells your loan balance.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Notice on Every Reset:</strong> Banks and NBFCs must alert you right away via SMS, email, or letter before raising your EMI or adding months.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Right to Pick Your Reset Option:</strong> At every rate reset, you can choose higher EMIs, longer tenure, both, part-payment, or a fixed-rate switch.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Free Quarterly Loan Statements:</strong> Lenders must send clear quarterly updates showing principal paid, interest paid, EMIs left, and your true APR.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Foreclosure Fee Since Jan 2026:</strong> Under RBI 2025 Pre-payment Directions, individual floating-rate non-business loans carry zero foreclosure or part-payment fees.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: 1. RBI Circular on Floating Personal Loan Resets */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Rules &amp; Legal Scope</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Circular on Floating Personal Loan Resets
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many Indian borrowers take a floating-rate personal loan expecting a fixed payoff date. When interest rates climb, banks often keep the EMI the same and quietly add years to the loan. Borrowers only learn the truth years later when they ask for a closure letter.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To end this unfair trap, the Reserve Bank of India issued Circular RBI/2023-24/55 (DOR.MCS.REC.32) on August 18, 2023. The rule applies to all banks, NBFCs, housing finance firms, and co-operative banks across India. Every lender had to put these safeguards in place by December 31, 2023 for both old and new loans.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI rules, the term &quot;Personal Loans&quot; covers more than cash loans. It includes all EMI-based floating loans given to individuals, such as unsecured personal loans, education loans, auto loans, home loans, and loans against property.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before August 2023, courts often sided with banks using fine-print clauses. For example, in <em>ICICI Bank Ltd. v. Vishnu Bansal</em> (2022), the NCDRC allowed rate hikes using website notices alone. The 2023 RBI circular changed the law and forced direct borrower notice, clear choices, and a strict ban on negative amortization.
              </p>
            </section>

            {/* SECTION 2: 2. How the Tenure Trap & Negative Amortization Work */}
            <section id="negative-amortization-ban" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Anatomy of the Debt Trap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. How the Tenure Trap &amp; Negative Amortization Work
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every monthly EMI splits into two parts. The first part pays that month&apos;s interest. The second part cuts down your main loan balance, called the principal.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When your floating interest rate jumps, the monthly interest bill rises right away. If your lender keeps your EMI fixed, less money is left to pay off your principal. To cover the gap, the bank pushes your payoff date further into the future. This is the tenure trap.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Now suppose rates keep rising until one month&apos;s interest is larger than your entire EMI. Even though you pay every EMI on time, your payment cannot even cover the interest. The unpaid interest gets added back to your principal balance.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This reverse spiral is called <strong className="text-slate-900">negative amortization</strong>. Your total debt grows bigger every month, and the loan can never finish. Clause (v) of RBI Circular DOR.MCS.REC.32 strictly bans lenders from extending any floating loan tenure into negative amortization.
              </p>
            </section>

            {/* SECTION 3: 3. Loan Math: Rate Hike Impact on Tenure & Cost */}
            <section id="amortization-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Verified Amortization Proof</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Loan Math: Rate Hike Impact on Tenure &amp; Cost
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Numbers show how fast a floating rate hike creates a debt trap. Take a floating personal loan of <strong className="text-slate-900">₹10,00,000</strong> started at <strong className="text-slate-900">10.5% per year</strong> for <strong className="text-slate-900">10 years (120 months)</strong>. Your fixed EMI is <strong className="text-slate-900">₹13,493</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Look at what happens if the bank keeps your EMI stuck at ₹13,493 as rates climb. Notice how the extra interest explodes, and how the loan breaks into illegal negative amortization at 16.5%.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">₹10 Lakh Loan Tenure Trap Ledger (Fixed EMI: ₹13,493)</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">120-Month Base Plan</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[580px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Reset Interest Rate</th>
                        <th className="p-3">Monthly Interest</th>
                        <th className="p-3">Principal Cut / Mo</th>
                        <th className="p-3">New Loan Tenure</th>
                        <th className="p-3 text-right">Extra Interest Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">10.5% (Start Rate)</td>
                        <td className="p-3 font-mono">₹8,750</td>
                        <td className="p-3 font-mono text-emerald-700 font-semibold">₹4,743</td>
                        <td className="p-3 font-semibold text-emerald-700">120 Months (10 Yrs)</td>
                        <td className="p-3 text-right font-bold text-slate-500 font-mono">₹0 (Base)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">12.0% (+1.5% Hike)</td>
                        <td className="p-3 font-mono">₹10,000</td>
                        <td className="p-3 font-mono text-amber-700 font-semibold">₹3,493</td>
                        <td className="p-3 text-amber-700 font-semibold">136 Months (+16 EMIs)</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">+₹2,13,400</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">13.5% (+3.0% Hike)</td>
                        <td className="p-3 font-mono">₹11,250</td>
                        <td className="p-3 font-mono text-rose-600 font-semibold">₹2,243</td>
                        <td className="p-3 text-rose-600 font-semibold">160 Months (+40 EMIs)</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">+₹5,45,035</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">15.0% (+4.5% Hike)</td>
                        <td className="p-3 font-mono">₹12,500</td>
                        <td className="p-3 font-mono text-rose-700 font-semibold">₹993</td>
                        <td className="p-3 text-rose-700 font-semibold">210 Months (+90 EMIs)</td>
                        <td className="p-3 text-right font-bold text-rose-800 font-mono">+₹12,14,877</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">16.5% (+6.0% Hike)</td>
                        <td className="p-3 font-mono text-rose-700">₹13,750 (&gt; EMI)</td>
                        <td className="p-3 font-mono text-rose-700">-₹257 (Grows!)</td>
                        <td className="p-3 text-[#1886ff]">Infinite (Banned by RBI)</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm font-mono">Negative Amortization</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Notice the huge jump at 15.0%. Keeping your EMI flat adds <strong className="text-slate-900">7.5 extra years</strong> even before negative amortization starts. That single choice costs <strong className="text-slate-900">₹12.14 Lakh</strong> in extra interest on a ₹10 Lakh loan. Raising your EMI early or making a small part-payment avoids this entire trap.
              </p>
            </section>

            {/* SECTION 4: 4. Mandatory Borrower Choices & Fixed Rate Switch */}
            <section id="mandatory-borrower-options" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CheckCircle2 className="w-4 h-4 text-[#1886ff]" />
                <span>Five Binding Reset Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Mandatory Borrower Choices &amp; Fixed Rate Switch
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                RBI Circular RBI/2023-24/55 takes unilateral control away from banks. Every lender must give you clear written choices before applying a reset change.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1886ff]" />
                    Choice of Higher EMI or Longer Tenure
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You decide how to handle a rate hike. You can raise your EMI, extend your tenure, or choose a mix of both. The bank cannot force silent tenure extension.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-600" />
                    Option to Switch to a Fixed Rate
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    At every reset, the lender must let you switch from a floating rate to a fixed rate under its board policy. The bank must state upfront how many switches you can use.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-indigo-600" />
                    Upfront Switch Fee Disclosure
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders can charge a fair switch fee only if it was clearly listed in your Sanction Letter and Key Facts Statement. Hidden conversion fees are illegal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-amber-600" />
                    Mandatory Quarterly Loan Statements
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every quarter, the lender must send a simple statement showing principal paid, interest paid, current EMI, EMIs left, and your annualized APR.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 5: 5. Visual Blueprint: Floating Reset & Exit Flow */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Floating Reset &amp; Exit Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This blueprint compares illegal tenure-trap practices against your legal rights under RBI Circular DOR.MCS.REC.32. Use the four steps at the bottom to audit and fix your loan fast.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/rbi-floating-personal-loan-reset-negative-amortization.jpg"
                    alt="RBI Floating Personal Loan Reset and Negative Amortization Protection Blueprint"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Floating Loan Protection Blueprint • RBI Circular Compliant</span>
                  <a
                    href="/images/infographics/rbi-floating-personal-loan-reset-negative-amortization.jpg"
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

            {/* SECTION 6: 6. Step-by-Step SOP: Break the Loan Tenure Trap */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Break the Loan Tenure Trap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your floating personal loan tenure jumped without warning or your principal is not dropping, follow these six steps to take back control.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Download Your Full Repayment Schedule and KFS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Get your latest loan statement, repayment schedule, and Key Facts Statement. Check the interest rate, spread, remaining EMIs, and whether your monthly principal is shrinking.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Check for Negative Amortization and Rate Lag
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Compare your current monthly interest against your fixed EMI. If monthly interest is higher than your EMI, or if repo rate cuts were never passed on, note the exact dates.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Email Your Written Reset Choice to the Lender
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Write to your bank citing RBI Circular RBI/2023-24/55. Ask to raise your EMI, cap your tenure, or see the written quote to switch to a fixed rate.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Make a Zero-Fee Part-Payment or Balance Transfer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Use the RBI 2025 Pre-payment Directions to pay down principal or shift to a cheaper bank at zero penalty. Direct every part-payment toward principal to cut years off your loan.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Escalate Silent Extensions to PNO and RBI Ombudsman
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the lender broke RBI rules and added unpaid interest to principal, send a formal dispute to the Principal Nodal Officer. If unsolved in 30 days, file at cms.rbi.org.in.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Seek Restructuring or OTS If Revised EMIs Are Unaffordable
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When rate hikes and job loss leave you unable to afford higher EMIs, do not stay trapped. Negotiate formal restructuring or a One-Time Settlement (OTS) to waive inflated interest.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: 7. EBLR Spreads, KFS Rules & Zero Foreclosure Fee */}
            <section id="eblr-kfs-prepayment-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Connected RBI Safeguards (2019 to 2026)</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. EBLR Spreads, KFS Rules &amp; Zero Foreclosure Fee
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Your floating reset rights work alongside four other RBI rules. Using these rules together gives you strong leverage against unfair bank charges.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>EBLR 3-Month Reset &amp; 3-Year Spread Lock</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Circular RBI/2019-20/53, banks must reset EBLR loans at least once every three months. Non-credit-risk spread parts stay locked for three years.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Key Facts Statement (KFS) April 2024 Mandate</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI/2024-25/18, lenders must show your benchmark, spread, reset cycle, and the effect of a 0.25% rate move upfront. Unlisted switch fees cannot be charged.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Zero Prepayment Fee Directions (Jan 2026)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI Circular RBI/2025-26/64 bans all foreclosure and part-payment fees on floating non-business personal loans for individuals, with zero lock-in period.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Ban on Compounding Penal Interest (2024)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI/2023-24/53, lenders can levy only flat penal charges on missed EMIs. They can never add penal charges to your principal to charge extra interest.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 8. 3-Tier Escalation Matrix: Bank GRO to Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank GRO to Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank refuses to reverse illegal negative amortization, blocks your fixed-rate switch, or demands a foreclosure fee, escalate through these three official levels.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Action &amp; Borrower Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank or NBFC Grievance Officer</td>
                      <td className="p-3 font-mono">7 to 14 Working Days</td>
                      <td className="p-3">Audits reset notices, sends missing quarterly statements, and quotes fixed-switch terms.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">15 to 21 Working Days</td>
                      <td className="p-3">Reverses negative amortization interest, removes illegal foreclosure fees, and resets spread.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI Integrated Ombudsman (CMS)</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Passes binding orders via cms.rbi.org.in to recast schedules, refund excess interest, and award relief.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: 9. Procedural Milestones: Rate Reset to Debt Relief */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Milestones: Rate Reset to Debt Relief
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Track these exact milestones from the day a benchmark rate moves until your loan schedule is fixed or legally settled.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Stage</th>
                      <th className="p-3">Regulatory Phase</th>
                      <th className="p-3">Lender Legal Duty</th>
                      <th className="p-3">Borrower Action Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0 (Sanction)</td>
                      <td className="p-3 font-mono text-[11px]">KFS Disclosure</td>
                      <td className="p-3">Must hand over KFS showing benchmark, spread, and 0.25% rate impact.</td>
                      <td className="p-3">Save signed KFS and verify switch policy before clicking accept.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Every 3 Months</td>
                      <td className="p-3 font-mono text-[11px]">Quarterly Audit</td>
                      <td className="p-3">Must reset EBLR rate and send a simple quarterly loan statement.</td>
                      <td className="p-3">Verify principal balance drops every quarter and EMIs left stay stable.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Benchmark Hike</td>
                      <td className="p-3 font-mono text-[11px]">Reset Notice</td>
                      <td className="p-3">Must notify borrower via SMS/email and offer EMI, tenure, or switch choices.</td>
                      <td className="p-3">Reply in writing choosing higher EMI, part-payment, or fixed switch.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Breach Detected</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Dispute Notice</td>
                      <td className="p-3">Must stop negative amortization and respond to written complaint in 30 days.</td>
                      <td className="p-3 font-bold text-amber-800">Send formal dispute citing RBI Circular DOR.MCS.REC.32 to PNO.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 31+ Unresolved</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">RBI CMS / Exit</td>
                      <td className="p-3">Faces Ombudsman order, interest refund, or zero-fee loan closure.</td>
                      <td className="p-3 font-bold text-slate-900">File at cms.rbi.org.in, transfer loan at ₹0 fee, or seek OTS relief.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: 10. Special Cases: NBFCs, MCLR Loans & Retirement */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: NBFCs, MCLR Loans &amp; Retirement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Not every floating personal loan works the same way. Here is how RBI reset and tenure rules protect you in four common real-life cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    NBFC &amp; Fintech Floating Personal Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    NBFCs often link floating loans to an internal PLR rather than the RBI Repo Rate. Even so, RBI Circular DOR.MCS.REC.32 binds all NBFCs to send quarterly statements, offer switches, and ban negative amortization.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Legacy MCLR, Base Rate &amp; BPLR Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Older loans linked to MCLR or Base Rate drop very slowly when the RBI cuts rates. You have the right to request a switch to the transparent EBLR regime at a nominal shift fee or refinance out at ₹0 foreclosure fee.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    Tenure Stretched Past Retirement Age
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks must factor in your retirement age and repayment headroom at sanction. Stretching a salaried borrower&apos;s loan to age 70 or 75 without notice breaches RBI responsible lending norms.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-amber-600" />
                    When Rate Hikes Trigger EMI Default &amp; OTS
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If back-to-back rate hikes and income loss push your loan toward default, document every RBI reset breach. Proving unlawful tenure growth or missing notices gives you strong leverage in an OTS waiver negotiation.
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
                Frequently Asked Questions: Floating Loan Resets
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, plain-English answers on RBI floating rate reset rules, negative amortization bans, fixed-rate switches, and zero-fee loan exits.
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
                Official Regulatory Citations &amp; Legal References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Floating Rate Reset Circular (Aug 18, 2023):</strong> RBI/2023-24/55, DOR.MCS.REC.32/01.01.003/2023-24, Reset of Floating Interest Rate on Equated Monthly Instalments (EMI) based Personal Loans.
                </li>
                <li>
                  <strong>RBI Pre-payment Charges on Loans Directions, 2025 (July 2, 2025):</strong> RBI/2025-26/64, DoR.MCS.REC.38/01.01.001/2025-26 (Effective January 1, 2026), Zero Pre-payment Charges on Individual Floating Non-Business Loans.
                </li>
                <li>
                  <strong>RBI Key Facts Statement (KFS) Circular (April 15, 2024):</strong> RBI/2024-25/18, DOR.STR.REC.13/13.03.00/2024-25, Standardized KFS &amp; APR Disclosure for Retail and MSME Term Loans.
                </li>
                <li>
                  <strong>RBI External Benchmark Based Lending Circular (Sept 4, 2019):</strong> RBI/2019-20/53, DBR.DIR.BC.No.14/13.03.00/2019-20, Quarterly Rate Resets and 3-Year Credit Spread Lock.
                </li>
                <li>
                  <strong>RBI Fair Lending Practice on Penal Charges (Aug 18, 2023):</strong> RBI/2023-24/53, DoR.MCS.REC.28/01.01.001/2023-24, Prohibition on Capitalisation of Penal Charges.
                </li>
                <li>
                  <strong>Reserve Bank Integrated Ombudsman Scheme, 2021 &amp; Consumer Protection Act, 2019:</strong> Deficiency in Service Remedies for Unlawful Interest Reset and Schedule Manipulation.
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
                  <a href="https://www.rbi.org.in/Scripts/NotificationUser.aspx" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Master Circulars &amp; Notifications</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="http://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Disputes Redressal Commission</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/flat-interest-rate-vs-reducing-apr-personal-loan-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Flat Rate vs Reducing APR Trap
                  </Link>
                  <Link href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Hidden Charges Missing in KFS
                  </Link>
                  <Link href="/foreclosure-and-part-prepayment-charges-on-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Foreclosure Rules
                  </Link>
                  <Link href="/rbi-guidelines-on-penal-charges-in-loan-accounts" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Penal Charges Ban
                  </Link>
                  <Link href="/flexi-hybrid-personal-loan-drop-line-overdraft-settle" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Flexi Hybrid Personal Loan Rules
                  </Link>
                  <Link href="/should-i-settle-or-restructure-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Settle vs Restructure Loan
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/tools/emi-calculator" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan EMI &amp; Amortization Tool
                  </Link>
                  <Link href="/rbi-15-day-fortnightly-credit-bureau-update-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI 15-Day CIBIL Update Rule
                  </Link>
                  <Link href="/rbi-5000-per-day-delay-compensation-property-documents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹5,000/Day Property Deed Rule
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
                Specialist in RBI banking rules, personal loan interest audits, Ombudsman filings, and debt settlement helping Indian borrowers challenge unfair resets and recover excess charges.
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
                  FLOATING LOAN AUDIT DESK
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Stuck in an Endless Loan Tenure Trap?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team audits your loan ledger under RBI Circular DOR.MCS.REC.32, stops negative amortization, waives illegal fees, and negotiates affordable OTS exits.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Loan Reset Audit
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
                  <span><strong>Ledger &amp; Reset Audit:</strong> Spot silent tenure hikes and spread breaches fast.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero-Fee Exit Enforcement:</strong> Stop illegal foreclosure fees under RBI 2025 rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Filings:</strong> End-to-end escalation for excess interest refunds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Hardship OTS Negotiation:</strong> Cut unaffordable debt with verified NDC closure.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/flat-interest-rate-vs-reducing-apr-personal-loan-trap"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Flat Rate vs Reducing APR Trap
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Spot hidden interest mis-selling &rarr;</span>
                </Link>

                <Link
                  href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Personal Loan Fees Missing in KFS
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Claim refund under RBI KFS rules &rarr;</span>
                </Link>

                <Link
                  href="/foreclosure-and-part-prepayment-charges-on-personal-loan"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Personal Loan Foreclosure Charges
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Zero-fee exit &amp; waiver rules &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
