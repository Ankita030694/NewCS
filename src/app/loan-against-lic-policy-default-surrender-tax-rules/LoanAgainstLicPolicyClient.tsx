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

export default function LoanAgainstLicPolicyClient() {
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
    { id: 'direct-vs-bank', label: '1. Direct LIC Loan vs Bank Loan' },
    { id: 'foreclosure-rules', label: '2. How LIC Policy Foreclosure Works' },
    { id: 'compounding-ledger', label: '3. Foreclosure Trigger & Debt Math' },
    { id: 'surrender-tax-rules', label: '4. Surrender Tax: 10(10D), 80C & TDS' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Policy Defense SOP' },
    { id: 'borrower-rights', label: '7. Section 38, CPC 60 & IRDAI Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Default to Foreclosure Milestones' },
    { id: 'specialized-scenarios', label: '10. Paid-Up, MWP Act & Death Claim' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What happens if I miss interest on a direct LIC policy loan?',
      a: 'LIC adds your unpaid six-month interest to your loan balance. Your debt then grows faster every six months. If total debt beats your surrender value, LIC sends a 30-day notice and closes the policy.'
    },
    {
      q: 'Does an LIC policy loan default hurt my CIBIL score?',
      a: 'A direct loan from LIC is normally not sent to CIBIL. Yet a bank or NBFC loan against a pledged LIC policy goes to all four bureaus. Missing bank EMIs will drop your CIBIL score fast.'
    },
    {
      q: 'Can a bank surrender my assigned LIC policy without fresh consent?',
      a: 'Yes, if you signed an assignment deed under Section 38 of the Insurance Act, 1938. Once you miss loan dues, the bank can ask LIC to cash out the plan. Still, the bank must pay back any extra money left after closing the debt.'
    },
    {
      q: 'Do I owe tax if my LIC policy is closed for loan default?',
      a: 'Tax hits if your plan fails Section 10(10D) rules or ends before the two-year Section 80C lock-in. Even if the whole payout clears your loan and you get zero cash, tax rules still apply to the full gross payout.'
    },
    {
      q: 'What is the current TDS rate under Section 194DA on LIC payouts?',
      a: 'From October 1, 2024, Finance Act 2024 cut Section 194DA TDS from 5% to 2%. LIC cuts 2% TDS only on your net gain when gross taxable payout is ₹1,00,000 or more. With no PAN, TDS jumps to 20% under Section 206AA.'
    },
    {
      q: 'When does the Section 80C(5) tax clawback hit an LIC policy?',
      a: 'If a standard LIC plan ends before you pay two full years of premiums, Section 80C(5) applies. For ULIPs, this lock-in is five years. All past Section 80C tax breaks get added back to your taxable income that year.'
    },
    {
      q: 'How does the ₹5 lakh annual premium tax rule affect surrender?',
      a: 'For non-ULIP plans bought on or after April 1, 2023, yearly premiums above ₹5,00,000 lose Section 10(10D) tax-free status. Under Section 56(2)(xiii) and Rule 11UACA, your net gain is taxed at your slab rate.'
    },
    {
      q: 'Can a bank seize my unpledged LIC policy for a personal loan?',
      a: 'No. Section 60(1)(kb) of the Code of Civil Procedure, 1908 shields money due under a life policy from court seizure. A bank can touch a policy only if you signed it over under Section 38.'
    },
    {
      q: 'What changed under the IRDAI June 2024 Surrender Value rules?',
      a: 'Under the IRDAI circular of June 12, 2024, life savings plans earn a Special Surrender Value after just one full year. Also, all such plans must offer a policy loan so you need not cash out early.'
    },
    {
      q: 'How does CredSettle help with an LIC policy loan default?',
      a: 'CredSettle checks your bank assignment deed and spots unfair late fees under RBI rules. We work out a legal deal to save your plan before surrender. We also help claim extra cash, return your bond, and fix CIBIL.'
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
            <span>Insurance Act Section 38, IRDAI 2024 &amp; Income Tax Rules</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Prevent Policy Foreclosure on LIC Personal Loan Default
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Learn what happens when you miss payments on a loan against your LIC policy. Protect your family life cover from forced bank surrender, stop CIBIL damage, and avoid surprise Section 80C and 194DA tax bills.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your LIC Policy Now</span>
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
                  <span>Policyholder Legal Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Guided by Section 38 Insurance Act, Section 60(1)(kb) CPC, RBI rules, and Income Tax Act norms.
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
                <span>EXECUTIVE BRIEF: LIC POLICY LOAN DEFAULT &amp; TAX RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Direct LIC Loan vs Bank Loan:</strong> Direct LIC loans rarely hit CIBIL, but bank loans against assigned LIC policies report every default to CIBIL.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Foreclosure Trigger Point:</strong> On a direct LIC loan, unpaid interest compounds half-yearly. LIC sends a 30-day foreclosure notice once total debt passes your surrender value.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Section 38 Bank Surrender Power:</strong> When you assign an LIC policy to a bank, the bank can surrender it on default. Still, the bank must refund any extra money above your valid loan dues.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">2% TDS &amp; 80C Clawback Trap:</strong> Early surrender before 2 years reverses past Section 80C tax breaks. Non-exempt payouts of ₹1 lakh or more face 2% TDS under Section 194DA.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Unassigned Policy Shield:</strong> Under Section 60(1)(kb) of the CPC, banks cannot attach your unassigned LIC policy to recover a normal personal loan.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Direct LIC Loan vs Bank Loan Against Assigned Policy */}
            <section id="direct-vs-bank" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Loan Structure &amp; Credit Bureau Impact</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Direct LIC Loan vs Bank Loan Against Assigned Policy
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many Indian families borrow against their LIC plans during a cash crunch. It feels safer than a high-cost personal loan. Yet the rules change a lot based on who gave you the loan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You can take a loan straight from LIC of India. Or you can borrow from a bank or NBFC using your plan as collateral. In both cases, you assign the plan under Section 38 of the Insurance Act, 1938. This step gives rights in the plan to the lender until you pay off the debt.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A direct LIC loan has no monthly EMI. You only pay interest every six months, often near 9.5% a year. LIC treats this as a cash advance from your own plan value. So LIC does not report missed interest to CIBIL.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A bank or NBFC loan against your LIC plan works very differently. Banks ask for monthly EMIs or overdraft interest. They send your account data every 15 days to all credit bureaus. If you miss dues for 90 days, the bank tags your loan as NPA and hits your CIBIL score.
              </p>

              {/* Comparison Table: Direct LIC Loan vs Bank/NBFC Loan */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Key Feature</th>
                      <th className="p-3">Direct Loan from LIC</th>
                      <th className="p-3">Bank or NBFC Loan Against LIC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Loan Limit</td>
                      <td className="p-3">Up to 80% to 90% of Surrender Value (85% for paid-up plans).</td>
                      <td className="p-3">Usually 75% to 90% of Surrender Value as term loan or OD.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Repayment Mode</td>
                      <td className="p-3">No EMI. Pay half-yearly interest; principal paid anytime.</td>
                      <td className="p-3">Strict monthly EMI or monthly overdraft interest billing.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">CIBIL Score Impact</td>
                      <td className="p-3 text-emerald-700 font-semibold">Not reported to CIBIL or other credit bureaus.</td>
                      <td className="p-3 text-rose-700 font-semibold">Reported to CIBIL, CRIF, Equifax, and Experian.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Default Trigger</td>
                      <td className="p-3">Foreclosure only when debt crosses policy Surrender Value.</td>
                      <td className="p-3">NPA at 90 days overdue; bank can surrender policy right away.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Shortfall Liability</td>
                      <td className="p-3">Debt ends once policy is foreclosed against surrender value.</td>
                      <td className="p-3">Bank can still sue or recover unpaid shortfall from you.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 2: How LIC Policy Foreclosure Works After Loan Default */}
            <section id="foreclosure-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Foreclosure Mechanics &amp; Surrender Triggers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. How LIC Policy Foreclosure Works After Loan Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many people think an LIC loan never brings trouble until the plan matures. That is true only while your total debt stays below your surrender value. Each time you skip a six-month interest date, LIC adds that unpaid interest to your loan balance.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In the next six months, LIC charges interest on both the loan and the past unpaid interest. Over time, this debt grows faster than your plan bonuses. The risk gets much worse if you stop paying yearly LIC premiums and the plan turns paid-up.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once your loan plus unpaid interest meets or beats your surrender value, LIC starts foreclosure. LIC mails a written notice to your address. You get at least 30 days to pay the interest dues. If you fail to pay in time, LIC closes your plan for good.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For a bank loan against an assigned LIC plan, closure happens much faster. Under Section 38(8) of the Insurance Act, LIC must obey valid surrender orders from the bank. Once your bank loan crosses 90 days past due, the bank sends a recall notice. It can then file a surrender form straight with LIC to get its cash back.
              </p>
            </section>

            {/* SECTION 3: Foreclosure Trigger & Interest Compounding Ledger */}
            <section id="compounding-ledger" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Half-Yearly Compounding Math &amp; Equity Erosion</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Foreclosure Trigger &amp; Interest Compounding Ledger
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To see how quickly unpaid interest eats up a paid-up LIC policy, look at this simple example. Suppose your paid-up policy has a fixed Surrender Value of ₹5,00,000. You take an 85% policy loan of ₹4,25,000 at 9.5% annual interest, compounded half-yearly (4.75% every 6 months).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Also note LIC&apos;s minimum 6-month interest rule. Even if you close a direct LIC loan within one month, you must pay a full 6 months of interest. If you skip every interest due date instead, your loan breaches the ₹5,00,000 surrender cap in just 24 months.
              </p>

              {/* Representative Compounding Ledger Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample LIC Loan Compounding &amp; Foreclosure Ledger</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹5,00,000 Paid-Up SV | 9.5% p.a.</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Time Elapsed</th>
                        <th className="p-3">Unpaid Interest Added</th>
                        <th className="p-3">Total Loan Debt</th>
                        <th className="p-3 text-right">Policy Equity Left &amp; Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Month 0 (Disbursal)</td>
                        <td className="p-3 font-mono">₹0</td>
                        <td className="p-3 font-mono font-bold text-slate-900">₹4,25,000</td>
                        <td className="p-3 text-right text-emerald-700 font-semibold">₹75,000 Safe Cushion</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Month 6 (Cycle 1)</td>
                        <td className="p-3 font-mono">₹20,188</td>
                        <td className="p-3 font-mono font-bold text-slate-900">₹4,45,188</td>
                        <td className="p-3 text-right text-slate-700 font-semibold">₹54,812 Cushion Left</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Month 12 (Cycle 2)</td>
                        <td className="p-3 font-mono text-amber-700">₹41,334 (Cumulative)</td>
                        <td className="p-3 font-mono font-bold text-amber-700">₹4,66,334</td>
                        <td className="p-3 text-right text-amber-700 font-semibold">₹33,666 Warning Zone</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Month 18 (Cycle 3)</td>
                        <td className="p-3 font-mono text-rose-600">₹63,485 (Cumulative)</td>
                        <td className="p-3 font-mono font-bold text-rose-600">₹4,88,485</td>
                        <td className="p-3 text-right text-rose-600 font-semibold">₹11,515 High Risk</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Month 24 (Cycle 4)</td>
                        <td className="p-3 font-mono text-[#1886ff]">₹86,688 (Cumulative)</td>
                        <td className="p-3 font-mono text-rose-700">₹5,11,688</td>
                        <td className="p-3 text-right text-rose-700 text-xs sm:text-sm">Breaches SV: 30-Day Foreclosure</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Income Tax on Surrender: 10(10D), 80C & 194DA TDS */}
            <section id="surrender-tax-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Income Tax Act, 1961 &amp; Finance Act 2024</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Income Tax on Surrender: 10(10D), 80C &amp; 194DA TDS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Taking a loan from your LIC plan is not taxable income. A loan is debt you must pay back. Still, if default causes a forced surrender, four tax rules can hit you with a big tax bill.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>First, the Section 80C(5) Clawback Rule:</strong> If a standard LIC plan ends before you pay two full years of premiums, past Section 80C tax breaks are taken back. For ULIPs, this lock-in is five years. The tax office adds those old tax breaks back to your income in the year the plan ends.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Second, Section 10(10D) and Section 56(2)(xiii):</strong> Payouts stay tax-free only if your plan meets Section 10(10D) rules. For plans issued on or after April 1, 2012, yearly premiums must not cross 10% of the sum assured. Also, for non-ULIP plans bought on or after April 1, 2023, total yearly premiums must stay within ₹5,00,000. If your plan breaks either limit, the net gain is taxed at your slab rate under Section 56(2)(xiii) and Rule 11UACA.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Third, the 2% TDS Rule under Section 194DA:</strong> From October 1, 2024, Finance Act 2024 cut Section 194DA TDS from 5% to 2%. When a taxable payout is ₹1,00,000 or more in a year, LIC cuts 2% TDS on the net gain. That gain is your Gross Surrender Value minus Total Premiums Paid. With no valid PAN, TDS jumps to 20% under Section 206AA.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Fourth, the Zero-Cash Tax Trap:</strong> Your bank or LIC may use the whole surrender sum to clear your debt. You might get ₹0 in hand. Even then, LIC reports the full Gross Surrender Value and TDS in your Form 26AS and AIS. You must match those gross numbers in your ITR. If your plan met Section 10(10D), you can claim the cut TDS back as a refund.
              </p>

              {/* Surrender Tax Matrix Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Income Tax Rule</th>
                      <th className="p-3">When It Triggers</th>
                      <th className="p-3">Tax Rate &amp; Impact on Borrower</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Section 80C(5) Clawback</td>
                      <td className="p-3">Surrender before 2 full policy years (5 years for ULIPs).</td>
                      <td className="p-3">All old Section 80C deductions added back to taxable income.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Section 10(10D) Breach</td>
                      <td className="p-3">Annual premium &gt; 10% of Sum Assured (or &gt; ₹5 lakh post-April 2023).</td>
                      <td className="p-3">Surrender payout loses tax-free status completely.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Section 56(2)(xiii) &amp; Rule 11UACA</td>
                      <td className="p-3">Any non-exempt surrender payout with positive gain.</td>
                      <td className="p-3">Gross payout minus unclaimed premiums taxed at slab rate.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Section 194DA TDS</td>
                      <td className="p-3">Non-exempt gross payout of ₹1,00,000 or more in a year.</td>
                      <td className="p-3 font-semibold text-amber-800">2% TDS on income portion (20% under Section 206AA if no PAN).</td>
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
                5. Visual Blueprint: Foreclosure &amp; Surrender Tax Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart shows the main laws that govern LIC policy loans. It links Section 38 rights with Section 10(10D) tax rules, 80C clawback rules, and the 2% TDS rule under Section 194DA.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/loan-against-lic-policy-default-surrender-tax-rules.jpg"
                    alt="Loan Against LIC Policy Default, Foreclosure & Surrender Tax Rules"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle LIC Loan &amp; Surrender Tax Legal Framework • Indian Law Compliant</span>
                  <a
                    href="/images/infographics/loan-against-lic-policy-default-surrender-tax-rules.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Save Your Assigned LIC Policy */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Save Your Assigned LIC Policy
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you received a default warning or foreclosure notice on a loan against your LIC policy, act fast. Follow these six steps to save your life cover and prevent unfair tax losses.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Get Your Surrender Value and Loan Statement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ask your LIC home branch for a fresh surrender quote. Also get a full loan ledger from your bank. Match your surrender value against the true loan dues.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Check Your Assignment Deed and Bank Fees
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check if your Section 38 deed is a loan pledge or a full transfer. Look for unfair late fees that break the RBI 2023 Penal Charges Circular.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Pay Past Interest First to Halt Foreclosure
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    On a direct LIC loan, you need not pay the full loan back at once. Just pay the missed six-month interest online or at your branch before the 30-day window ends.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Ask for a Payment Plan or OTS Before Surrender
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If a bank plans to cash out your LIC bond, write to the branch right away. Ask for a fresh payment plan or a One-Time Settlement. Remind them they must refund every rupee of surplus cash.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Claim Your Policy Bond Back Within 30 Days
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once you clear or settle your bank loan, ask for your No Dues letter right away. Demand the original LIC bond and signed Section 38 release form within 30 days under RBI rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Match Form 26AS, AIS and Section 194DA TDS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If your plan was already cashed out, get Form 16A from LIC. Check your Form 26AS and AIS online. File your ITR with the gross payout value so you can claim any tax refund due.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Borrower Rights: Section 38, CPC 60 & IRDAI Rules */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections &amp; Regulatory Precedents</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Borrower Rights: Section 38, CPC 60 &amp; IRDAI Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even when you face debt trouble, banks and insurers must follow strict Indian laws. Knowing these four statutory shields helps you stop illegal deductions and protect your family savings.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>IRDAI June 2024 Special Surrender Value</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the IRDAI rule of June 12, 2024, life savings plans earn a Special Surrender Value after 1 full year. Insurers must pay the higher of GSV or SSV and must offer a loan option.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 60(1)(kb) CPC Court Shield</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Courts cannot seize money due under an unpledged life policy for a normal personal loan default. Banks can touch a plan only if you signed it over under Section 38.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Duty to Refund Extra Surrender Cash</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Consumer courts allow banks to cash out assigned plans on default. Still, the bank holds extra cash in trust. It must pay back every rupee left after closing your valid debt.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>30-Day Bond Return &amp; CIBIL Penalty</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    After you clear the loan, the bank must return your LIC bond and fix your credit report fast. Under RBI rules, a CIBIL fix delay past 30 days pays you ₹100 each day.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation: Bank PNO, RBI & Bima Bharosa */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Dual Regulatory Redressal Channels</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation: Bank PNO, RBI &amp; Bima Bharosa
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Pick the right forum based on who broke the rule. Take bank disputes like held-back cash, late bond returns, or CIBIL errors to the RBI Ombudsman. File LIC payout or service complaints on the IRDAI Bima Bharosa portal.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Bank / NBFC Dispute Channel</th>
                      <th className="p-3">LIC / Insurer Dispute Channel</th>
                      <th className="p-3">Target Timeline &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3">LIC Branch Manager / Divisional GRO</td>
                      <td className="p-3">7 to 15 days for statement audit and surplus refund check.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: Nodal / Portal</td>
                      <td className="p-3">Bank Principal Nodal Officer (PNO)</td>
                      <td className="p-3">IRDAI Bima Bharosa Portal (IGMS)</td>
                      <td className="p-3">15 to 30 days for formal written resolution and reassignment.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: Ombudsman</td>
                      <td className="p-3">RBI Integrated Ombudsman (cms.rbi.org.in)</td>
                      <td className="p-3">Insurance Ombudsman (cioins.co.in)</td>
                      <td className="p-3">Binding award for refunds, CIBIL fixes, and compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Default to Policy Foreclosure: Key Legal Milestones */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Default to Policy Foreclosure: Key Legal Milestones
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking each stage from loan approval to foreclosure helps you step in early. Acting before the final surrender form reaches LIC gives you the highest chance of keeping your policy alive.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Stage</th>
                      <th className="p-3">Account Status</th>
                      <th className="p-3">Lender or LIC Action</th>
                      <th className="p-3">Smart Borrower Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0 (Loan Grant)</td>
                      <td className="p-3 font-mono text-[11px]">Section 38 Assigned</td>
                      <td className="p-3">Records policy assignment and holds original LIC policy bond.</td>
                      <td className="p-3">Keep a certified copy of your bond and assignment deed.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Months 1 to 6</td>
                      <td className="p-3 font-mono text-[11px]">Minimum Interest Lock</td>
                      <td className="p-3">LIC charges at least 6 months of interest even on early closure.</td>
                      <td className="p-3">Set reminders for half-yearly LIC interest or bank EMI dates.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">90 Days Overdue (Bank)</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Classification</td>
                      <td className="p-3">Bank reports NPA to CIBIL and issues a formal loan recall notice.</td>
                      <td className="p-3">Offer part-payment or request restructuring before surrender.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Debt &ge; Surrender Value</td>
                      <td className="p-3 font-mono text-[11px] text-rose-700 font-bold">30-Day Foreclosure Notice</td>
                      <td className="p-3">LIC sends a 30-day warning before canceling the life policy.</td>
                      <td className="p-3 font-bold text-amber-800">Pay interest arrears right away to stop policy termination.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Surrender Execution</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Policy Terminated</td>
                      <td className="p-3">LIC pays surrender value to adjust debt and deducts 2% TDS if taxable.</td>
                      <td className="p-3 font-bold text-slate-900">Audit final ledger, claim surplus money, and get Form 16A.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Next ITR Filing</td>
                      <td className="p-3 font-mono text-[11px]">Tax &amp; CIBIL Audit</td>
                      <td className="p-3">Gross surrender payout appears in Form 26AS and AIS records.</td>
                      <td className="p-3">Check 80C clawback, reconcile AIS, and verify CIBIL closure.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Special Cases: Paid-Up Plans, MWP Act & Death Claim */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: Paid-Up Plans, MWP Act &amp; Death Claim
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Real cases often involve paid-up plans, family trusts, or a sudden loss in the family. Here is how Indian law treats these four special cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1886ff]" />
                    Paid-Up Plans Face Faster Foreclosure
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Once you stop yearly premiums, a paid-up LIC plan earns no new bonuses. Your plan value stays flat while loan interest keeps growing. So debt hits the cutoff limit much sooner.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    MWP Act, 1874 Family Shield
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A plan bought under Section 6 of the Married Women&apos;s Property Act belongs solely to your wife and kids. Lenders cannot touch it, and you cannot pledge it for a loan.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    Death Claim With an Active Policy Loan
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the insured dies before foreclosure, LIC cuts the loan and interest from the claim. Your nominee gets the balance sum assured plus bonuses tax-free under Section 10(10D).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-amber-600" />
                    Surrender Shortfall &amp; Bank OTS Exit
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    What if the LIC surrender cash is less than your bank loan? The leftover gap turns into an unsecured debt. You can close that balance cleanly through a One-Time Settlement (OTS).
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
                Frequently Asked Questions: LIC Policy Loan &amp; Tax Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Get straight answers on LIC loan defaults, bank surrenders, CIBIL score impact, and Income Tax rules.
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
                  <strong>Insurance Act, 1938:</strong> Section 38 (Assignment and Transfer of Insurance Policies, Conditional vs Absolute Assignment Rights).
                </li>
                <li>
                  <strong>IRDAI Master Circular on Life Insurance Products:</strong> Circular IRDAI/ACTL/MSTCIR/MISC/89/6/2024 dated June 12, 2024 (Special Surrender Value after Year 1 and Mandatory Policy Loan Facility).
                </li>
                <li>
                  <strong>Income Tax Act, 1961 &amp; Finance (No. 2) Act, 2024:</strong> Section 10(10D), Section 80C(5) Clawback, Section 56(2)(xiii), Rule 11UACA, Section 194DA (2% TDS effective October 1, 2024), and Section 206AA.
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 &amp; MWP Act, 1874:</strong> Section 60(1)(kb) CPC (Exemption of Life Insurance Policy Monies from Attachment) and Section 6 of the Married Women&apos;s Property Act.
                </li>
                <li>
                  <strong>Reserve Bank of India Directives:</strong> Fair Lending Practice - Penal Charges in Loan Accounts (2023), Release of Movable/Immovable Property Documents (2023), and RBI Integrated Ombudsman Scheme, 2021.
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
                  <a href="https://bimabharosa.irdai.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>IRDAI Bima Bharosa Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cioins.co.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Council for Insurance Ombudsmen</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Income Tax e-Filing Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://licindia.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>LIC of India Official Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/section-60-cpc-assets-property-exempt-from-bank-attachment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 60 CPC Exempt Assets
                  </Link>
                  <Link href="/rbi-5000-per-day-delay-compensation-property-documents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Collateral Return Penalty
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/fd-backed-secured-credit-card-default-liquidation-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    FD Secured Card Liquidation
                  </Link>
                  <Link href="/can-bank-withhold-pledged-gold-after-loan-repayment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pledged Gold Return Rules
                  </Link>
                  <Link href="/section-59-contract-act-loan-payment-to-principal-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 59 Principal Payment Rule
                  </Link>
                  <Link href="/rbi-15-day-fortnightly-credit-bureau-update-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI 15-Day CIBIL Update Rule
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF &amp; Gratuity Protection
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
                Expert in Indian banking law, RBI rules, collateral defense, and debt relief. Helps families protect life cover and settle bank disputes the right way.
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
                  POLICY FORECLOSURE DEFENSE
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Threatening to Surrender Your LIC Policy?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team checks your Section 38 deed and cuts unfair bank fees. We help save your LIC plan and get back any extra surrender cash fast.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Legal Help for LIC Loan
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
                  <span>RBI &amp; IRDAI Compliant • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 38 Deed Audit:</strong> Check lender surrender powers and surplus rights.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Penal Interest Removal:</strong> Dispute illegal charges under RBI 2023 rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Policy Bond Reassignment:</strong> Enforce timely return of original LIC bonds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombudsman Support:</strong> Escalate to RBI CMS and IRDAI Bima Bharosa.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/section-60-cpc-assets-property-exempt-from-bank-attachment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 60 CPC Exempt Assets
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Protect life policies from seizure &rarr;</span>
                </Link>

                <Link
                  href="/rbi-5000-per-day-delay-compensation-property-documents"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Collateral Return Penalty
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">30-day document release rules &rarr;</span>
                </Link>

                <Link
                  href="/fd-backed-secured-credit-card-default-liquidation-rules"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    FD Secured Card Liquidation Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Collateral offset &amp; surplus law &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
