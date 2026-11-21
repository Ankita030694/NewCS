'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  Gavel,
  Landmark,
  Calendar
} from 'lucide-react';

export default function SuddenCreditLimitReductionClient() {
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
    { id: 'quick-answer', label: '1. Quick Answer: Limit Slash Rules' },
    { id: 'rbi-framework', label: '2. RBI Master Direction Rules' },
    { id: 'utilization-spike', label: '3. 90% Limit Cut & CIBIL Math' },
    { id: 'overlimit-trap', label: '4. Overlimit Fee & Consent Rules' },
    { id: 'step-by-step-fix', label: '5. Step-by-Step Utilization Fix' },
    { id: 'reporting-timeline', label: '6. 15-Day CIBIL Recovery Timeline' },
    { id: 'borrower-rights', label: '7. Borrower Rights & Redressal' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'common-mistakes', label: '9. Common Mistakes to Avoid' },
    { id: 'specialized-scenarios', label: '10. Active EMIs & Add-On Cards' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank reduce my credit card limit without my consent in India?',
      a: 'Yes. Under the RBI Master Direction on Credit Cards (2022, updated 2024), banks can reduce a credit limit as part of internal risk reviews without prior consent. However, paragraph 6(b) requires the card issuer to intimate the cardholder about the reduction.'
    },
    {
      q: 'Can a bank charge an overlimit fee if a limit cut pushes my balance over the new limit?',
      a: 'No. Under RBI Master Directions, card issuers cannot levy overlimit charges without prior explicit consent from the cardholder. Also, banks cannot count interest, late fees, or bank charges when calculating overlimit usage.'
    },
    {
      q: 'Why does a sudden 90 percent credit limit slash hurt my CIBIL score?',
      a: 'A sharp limit cut instantly raises your credit utilization ratio (CUR). For example, a Rs 45,000 balance on a Rs 5,00,000 limit is 9 percent usage. If the limit drops to Rs 50,000, usage jumps to 90 percent, which signals high credit stress to CIBIL.'
    },
    {
      q: 'How fast will my CIBIL score update after I pay down the high utilization?',
      a: 'Under the RBI 15-day fortnightly reporting rule (effective January 1, 2025), lenders report data as of the 15th and last day of every month within 7 calendar days. Paying down your balance before these dates helps your CIBIL report update faster.'
    },
    {
      q: 'What happens to my active credit card EMIs if the bank slashes my limit?',
      a: 'Existing merchant or converted EMIs continue on their original schedule, and your blocked principal still counts toward your total utilized limit. If the new limit is lower than your pending EMI principal, your reported utilization can exceed 100 percent until you prepay or clear EMIs.'
    },
    {
      q: 'Can I request the bank to restore my previous credit card limit?',
      a: 'Yes. You can write to customer care and the Grievance Redressal Officer with recent salary slips, Form 16, or ITRs showing stable income and a clean repayment record. Banks often review and restore limits after fresh income verification.'
    },
    {
      q: 'Should I close my credit card right after a sudden limit reduction?',
      a: 'Closing the card immediately can hurt your credit score further because it removes that credit line from your total available limit and shortens your credit age. Clear the balance first, lower your utilization below 30 percent, and decide calmly.'
    },
    {
      q: 'When can I complain to the RBI Integrated Ombudsman about a limit slash?',
      a: 'You can file a complaint on cms.rbi.org.in if the bank failed to intimate you about the limit reduction, charged unauthorized overlimit fees, or did not resolve your grievance within 30 days of your written complaint.'
    },
    {
      q: 'Does a limit cut on one card affect my other credit cards?',
      a: 'It affects your overall credit utilization ratio across all cards, which CIBIL tracks. Also, if you hold multiple cards from the same bank under one Customer ID (UCIC), the bank may review your combined exposure.'
    },
    {
      q: 'How can CredSettle help if a limit cut pushed me into a debt trap?',
      a: 'CredSettle audits unauthorized overlimit and interest charges, drafts formal RBI Ombudsman complaints, and negotiates structured repayment or One-Time Settlement (OTS) plans when high-interest card balances become unmanageable.'
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
            <span>RBI Credit Card Master Directions &amp; CIBIL Utilization Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Bank Slashed Your Credit Card Limit? RBI Notice Rules
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A sudden 80% to 90% credit limit cut can spike your utilization ratio and drop your CIBIL score overnight. Learn the exact RBI intimation rules, block illegal overlimit fees, and restore your credit health.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Fix Utilization &amp; Card Debt Now</span>
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
                  <span>RBI Cardholder Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Master Direction DoR.AUT.REC.No.27 and CICRA, 2005.
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
                <span>EXECUTIVE BRIEF: CREDIT CARD LIMIT SLASH &amp; UTILIZATION FIX</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Intimation Rule:</strong> Under Paragraph 6(b) of the RBI Credit Card Master Direction, banks must intimate you when they reduce your credit limit.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Consent, No Overlimit Fee:</strong> Banks cannot charge overlimit fees unless you gave explicit opt-in consent. Interest and late fees cannot be counted to trigger overlimit charges.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Why CIBIL Drops Instantly:</strong> A 90% limit cut turns a healthy 9% utilization into 90%+ utilization overnight, even if you never missed a single payment.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">15-Day CIBIL Recovery Window:</strong> Since January 1, 2025, banks report balances to CIBIL every 15 days. Paying down balances before the 15th or month-end speeds up score recovery.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Ombudsman Escalation Right:</strong> If a bank slashed your limit without notice or levied unfair overlimit charges, you can escalate to the RBI Integrated Ombudsman after 30 days.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Quick Answer: Can Banks Slash Your Credit Limit? */}
            <section id="quick-answer" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Immediate Legal Position</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Quick Answer: Can Banks Slash Your Credit Limit?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Yes, Indian banks and NBFCs can reduce your credit card limit without your prior consent. Lenders treat credit limits as revocable risk exposure based on your spending, bureau score, and internal policies.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, banks cannot do this silently. Under Reserve Bank of India (RBI) rules, the card issuer must formally intimate you about any reduction in your credit limit.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Also, a sudden limit cut does not give the bank a free pass to charge overlimit penalties. If your existing balance exceeds the newly reduced limit, you have clear regulatory protection against unfair fees.
              </p>
            </section>

            {/* SECTION 2: RBI Master Direction Rules on Limit Reductions */}
            <section id="rbi-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Directives &amp; Consent Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI Master Direction Rules on Limit Reductions
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit cards in India are governed by the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct Directions, 2022 (Circular RBI/2022-23/92, DoR.AUT.REC.No.27/24.01.041/2022-23), updated in March 2024.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI draws a sharp line between increasing a credit limit and reducing a credit limit. Knowing this distinction helps you spot when a bank breaks the rules.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Limit Enhancement (Increase)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Card issuers cannot unilaterally upgrade a card or increase your credit limit. Prior explicit consent from the cardholder is strictly mandatory.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Limit Reduction (Paragraph 6(b))</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks may lower your limit for risk control without prior approval. However, Paragraph 6(b) states that the card issuer shall intimate the cardholder about the reduction.
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks usually send this intimation via SMS, registered email, or your mobile app. If a bank cuts your limit without sending any notice, you can challenge it as a breach of RBI transparency norms and the Fair Practices Code.
              </p>
            </section>

            {/* SECTION 3: How a 90% Limit Cut Spikes Your CIBIL Utilization */}
            <section id="utilization-spike" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Math &amp; Score Impact</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. How a 90% Limit Cut Spikes Your CIBIL Utilization
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Your Credit Utilization Ratio (CUR) is the percentage of your total credit limit that you are currently using. Credit bureaus like CIBIL, Experian, Equifax, and CRIF High Mark give heavy weight to this ratio.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most lenders treat a utilization ratio below 30% as healthy. When a bank slashes your credit limit by 80% or 90%, your ratio jumps overnight even if you did not spend a single extra rupee.
              </p>

              {/* Representative Utilization Impact Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sudden Limit Slash: CIBIL Utilization Impact</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Same Rs 45,000 Balance</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Account Scenario</th>
                        <th className="p-3">Sanctioned Limit</th>
                        <th className="p-3">Card Balance</th>
                        <th className="p-3">Utilization Ratio</th>
                        <th className="p-3 text-right">CIBIL Risk Signal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Before Limit Cut</td>
                        <td className="p-3 font-mono">Rs 5,00,000</td>
                        <td className="p-3 font-mono">Rs 45,000</td>
                        <td className="p-3 font-mono text-emerald-600 font-bold">9.0%</td>
                        <td className="p-3 text-right font-semibold text-emerald-600">Low Risk (Healthy)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">50% Limit Cut</td>
                        <td className="p-3 font-mono">Rs 2,50,000</td>
                        <td className="p-3 font-mono">Rs 45,000</td>
                        <td className="p-3 font-mono text-emerald-600 font-bold">18.0%</td>
                        <td className="p-3 text-right font-semibold text-emerald-600">Manageable (Under 30%)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">80% Limit Cut</td>
                        <td className="p-3 font-mono">Rs 1,00,000</td>
                        <td className="p-3 font-mono">Rs 45,000</td>
                        <td className="p-3 font-mono text-amber-600 font-bold">45.0%</td>
                        <td className="p-3 text-right font-semibold text-amber-600">Moderate Score Drop</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">90% Limit Cut</td>
                        <td className="p-3 font-mono">Rs 50,000</td>
                        <td className="p-3 font-mono">Rs 45,000</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">90.0%</td>
                        <td className="p-3 text-right font-semibold text-rose-600">Severe Credit Stress</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">95% Limit Cut</td>
                        <td className="p-3 font-mono">Rs 25,000</td>
                        <td className="p-3 font-mono">Rs 45,000</td>
                        <td className="p-3 font-mono text-[#1886ff]">180.0%</td>
                        <td className="p-3 text-right text-[#1886ff]">Overlimit Exposure Alert</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This sudden jump often causes a 40 to 80 point drop in your CIBIL score. Other lenders also see high utilization on your credit report, which can trigger limit cuts on your other cards too.
              </p>
            </section>

            {/* SECTION 4: Overlimit Fee Trap: RBI Consent & Interest Rules */}
            <section id="overlimit-trap" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Illegal Overlimit Charges &amp; Fee Reversal</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Overlimit Fee Trap: RBI Consent &amp; Interest Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The biggest financial danger after a 90% limit slash is the overlimit fee trap. Suppose your limit is cut to Rs 40,000 while your balance is Rs 45,000. Many banks automatically bill a monthly overlimit fee of Rs 500 to Rs 600 plus 18% GST.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI Credit Card Master Directions, this practice violates two strict rules:
              </p>
              <ul className="space-y-2.5 text-sm md:text-base text-slate-700 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Prior Explicit Consent Rule:</strong> Card issuers cannot allow transactions beyond the sanctioned limit or charge an overlimit fee unless you gave explicit opt-in consent. Banks must provide a digital toggle in their app or net banking to turn this facility on or off.
                </li>
                <li>
                  <strong>Exclusion of Interest and Fees:</strong> The RBI bars banks from counting unpaid interest, late fees, or other bank charges when checking whether you crossed your credit limit for levying overlimit charges.
                </li>
              </ul>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank charged overlimit fees because of a limit reduction without your active opt-in, demand an immediate fee reversal and GST refund in writing. You can also read our detailed guide on{' '}
                <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[#1886ff] font-semibold hover:underline">
                  claiming an RBI overlimit fee refund
                </Link>.
              </p>
            </section>

            {/* SECTION 5: Step-by-Step Plan to Fix High Credit Utilization */}
            <section id="step-by-step-fix" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Actionable Recovery Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step Plan to Fix High Credit Utilization
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six practical steps immediately after a bank slashes your credit card limit to protect your CIBIL score and stop extra charges.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Step 1: Disable Overlimit Facility in Your Banking App
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Open your bank mobile app or net banking under Card Controls. Confirm that the overlimit toggle is switched OFF and take a screenshot with the date visible as proof.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Step 2: Demand the Reason &amp; Intimation Proof
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email customer care asking why the limit was reduced and when prior intimation was sent under Paragraph 6(b) of the RBI Master Directions. Keep all replies in writing.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Step 3: Pay Down Balance Below 30% of the New Limit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Calculate 30% of your newly reduced limit and pay down the excess balance as fast as possible. Do this before your statement date and before the 15th or month-end bureau reporting cutoff.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Step 4: Shift Spends Across Other Active Cards
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pause new transactions on the slashed card. Spread essential monthly expenses across other active cards so that neither any single card nor your overall utilization exceeds 30%.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Step 5: Submit Fresh Income Proof for Limit Restoration
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If your income is stable and you have no recent defaults, send your latest 3 months salary slips, bank statements, or ITR to the bank grievance desk requesting a limit review.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Step 6: Dispute Unfair Overlimit Fees or Settle Heavy Debt
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If overlimit fees or 42% APR interest have snowballed beyond your repayment capacity, seek legal debt restructuring or{' '}
                    <Link href="/services/credit-card-settlement" className="text-[#1886ff] font-semibold hover:underline">
                      credit card settlement support
                    </Link>{' '}
                    before the account turns into an NPA.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: RBI 15-Day Reporting & CIBIL Recovery Timeline */}
            <section id="reporting-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Fortnightly &amp; Weekly Bureau Reporting</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. RBI 15-Day Reporting &amp; CIBIL Recovery Timeline
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Earlier, borrowers had to wait 30 to 45 days for a credit card payment to reflect on their CIBIL report. That delay kept utilization artificially high for weeks.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI fortnightly credit reporting mandate effective January 1, 2025, banks and NBFCs must submit updated borrower data twice a month. They report balances as of the 15th and the last day of every month within 7 calendar days.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Furthermore, RBI amendment directions have moved the system toward weekly reporting (9th, 16th, 23rd, and month-end) from July 1, 2026. This means paying down your balance right before these cutoff dates repairs your utilization ratio much faster.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Recovery Window</th>
                      <th className="p-3">Bureau &amp; Bank Action</th>
                      <th className="p-3">What You Should Do</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to Day 3</td>
                      <td className="p-3">Limit cut reflects in card app; utilization spikes.</td>
                      <td className="p-3">Turn off overlimit toggle, stop card spend, and seek written reason.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Before 15th / Month-End</td>
                      <td className="p-3">Bank captures balance snapshot for CIBIL reporting.</td>
                      <td className="p-3">Pay down balance below 30% of new limit before snapshot date.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Within 7 Days Post-Cutoff</td>
                      <td className="p-3">Bank uploads updated lower balance to CIBIL and bureaus.</td>
                      <td className="p-3">Download your CIBIL report to verify updated limit and balance.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 30 Onward</td>
                      <td className="p-3">Statutory deadline expires for bank GRO complaint reply.</td>
                      <td className="p-3">Escalate unresolved fee or notice violations to RBI Ombudsman.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 7: Borrower Rights & Consumer Redressal Precedents */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections &amp; Legal Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Borrower Rights &amp; Consumer Redressal Precedents
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                While banks have risk-management discretion, Indian banking laws protect cardholders from arbitrary penalties and inaccurate credit reporting. Four key legal frameworks protect you:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>RBI Charter of Customer Rights</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Guarantees the Right to Fair Treatment and Right to Transparency. Surprise fees triggered by unannounced limit cuts violate fair banking standards.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>CICRA Act, 2005 (Section 21)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Gives every borrower the right to dispute inaccurate credit data. If the bank reports false overlimit status or wrong balances, bureaus must verify and correct it within 30 days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Levying unauthorized overlimit charges or refusing to reverse illegal penalties constitutes deficiency in service under Section 2(11), allowing compensation claims in Consumer Commissions.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>RBI Integrated Ombudsman Scheme, 2021</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Provides a free, online dispute forum where the Ombudsman can order banks to refund unauthorized charges, fix credit reports, and pay compensation for harassment or service deficiency.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Bank GRO to Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Formal Grievance Escalation Path</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank GRO to Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If customer support refuses to reverse overlimit fees or restore your limit despite clean income proof, follow this official three-tier escalation matrix.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Window</th>
                      <th className="p-3">Relief &amp; Action Scope</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Reviews intimation logs, reverses unauthorized overlimit fees, and logs limit review request.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Audits RBI Master Direction compliance, corrects CIBIL reporting, and approves fee waivers.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-Complaint</td>
                      <td className="p-3">Issues binding orders on cms.rbi.org.in for fee refunds, bureau correction, and damages.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Common Mistakes After a Sudden Limit Reduction */}
            <section id="common-mistakes" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Precautions to Protect Your Credit</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Common Mistakes After a Sudden Limit Reduction
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Panicking after a credit limit slash often makes the CIBIL damage worse. Avoid these four common mistakes:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">1. Closing the Card Immediately</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Canceling the card wipes out that credit line from your total available limit and lowers your average credit age. Pay down the balance first before deciding to close.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">2. Applying for Multiple New Cards</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submitting 4 or 5 fresh credit card applications right after a limit cut creates multiple hard inquiries on CIBIL. Lenders see this as credit hunger and reject applications.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">3. Paying Only the Minimum Amount Due</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Paying only the 5% minimum due keeps your utilization above 80% for months and triggers 36% to 45% annual revolving interest plus 18% GST.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">4. Leaving Auto-Debits Active</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Utility bills, OTT subscriptions, or insurance auto-debits on a slashed card can decline or push the balance over the new limit. Move recurring mandates immediately.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10: Special Cases: Active EMIs, Co-Branded & Add-On */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Credit Card Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: Active EMIs, Co-Branded &amp; Add-On
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A limit slash affects different card setups in specific ways. Review how banks handle active EMIs, add-on cards, and debt settlement cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1886ff]" />
                    Active Merchant &amp; Insta EMIs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your blocked EMI principal counts toward utilized credit. If your new limit is lower than your pending EMI principal, your available credit becomes zero until you pay down EMIs. See our{' '}
                    <Link href="/unbilled-credit-card-merchant-emi-foreclosure-default" className="text-[#1886ff] font-semibold hover:underline">
                      unbilled EMI foreclosure guide
                    </Link>.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Add-On Supplementary Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Add-on cards share the primary cardholder limit. A sudden slash immediately restricts spending on all family add-on cards, and primary holders remain liable for total dues.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Multiple Cards Under Same Bank (UCIC)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you hold two cards with the same bank under one Customer ID, late payments or high debt on one card often trigger an immediate limit cut on the second card.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-amber-600" />
                    When Debt Becomes Unpayable
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a limit slash cut off your liquidity and left you unable to pay high-interest dues, explore our{' '}
                    <Link href="/services/credit-score-builder" className="text-[#1886ff] font-semibold hover:underline">
                      credit score builder
                    </Link>{' '}
                    or legal OTS settlement options.
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
                Frequently Asked Questions: Credit Limit Reduction
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers to common questions on sudden credit card limit cuts, RBI intimation rules, overlimit fee refunds, and CIBIL utilization recovery.
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
                  <strong>RBI Master Direction (Credit Cards):</strong> RBI/2022-23/92, DoR.AUT.REC.No.27/24.01.041/2022-23 (updated March 7, 2024), Paragraph 6(b) on limit reduction intimation and overlimit consent rules.
                </li>
                <li>
                  <strong>RBI Credit Information Reporting Directions:</strong> Fortnightly 15-day reporting mandate (effective January 1, 2025) and subsequent weekly reporting amendments.
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005:</strong> Section 21, Right of Borrowers to Seek Alteration or Updating of Credit Information.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Grievance escalation for non-intimation, deficiency in service, and unauthorized fee recovery.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) governing deficiency in banking service and unfair trade practices.
                </li>
              </ul>

              {/* Outbound Authority Badges */}
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
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Dispute Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Overlimit Fee RBI Refund
                  </Link>
                  <Link href="/unsolicited-credit-card-upgrade-limit-increase-rbi-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unsolicited Card Upgrade Rule
                  </Link>
                  <Link href="/unused-credit-card-annual-fee-cibil-npa-rbi-closure" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unused Card Annual Fee Fix
                  </Link>
                  <Link href="/unbilled-credit-card-merchant-emi-foreclosure-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unbilled Card EMI Foreclosure
                  </Link>
                  <Link href="/credit-card-balance-transfer-default-interest-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Balance Transfer Default Rules
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
                  </Link>
                  <Link href="/services/credit-score-builder" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Score Builder
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
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
                Specialist in credit card compliance, CIBIL dispute resolution, RBI Master Directions, and structured debt settlements helping Indian borrowers stop unfair bank penalties.
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
                  CREDIT CARD &amp; CIBIL DEFENSE
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Limit Cut Spiked Your Utilization &amp; Fees?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team challenges unauthorized overlimit penalties under RBI rules, disputes inaccurate CIBIL reporting, and negotiates affordable card debt settlements.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Legal Consultation
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
                  <span><strong>Overlimit Fee Reversal:</strong> Challenge charges billed without explicit consent.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Dispute Support:</strong> Enforce accurate 15-day bureau reporting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Harassment Protection:</strong> Stop illegal recovery calls under RBI norms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Filings:</strong> Structured escalation for unresolved grievances.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/credit-card-overlimit-fee-without-consent-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Overlimit Fee Without Consent Refund
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI opt-in protection rules &rarr;</span>
                </Link>

                <Link
                  href="/services/credit-score-builder"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    CIBIL Score Recovery Program
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Rebuild utilization &amp; score &rarr;</span>
                </Link>

                <Link
                  href="/services/credit-card-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Debt Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal OTS &amp; interest waiver &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
