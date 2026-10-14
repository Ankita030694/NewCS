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
  Award,
  BookOpen,
  Building2,
  DollarSign,
  Check,
  Lock,
  Phone,
  AlertCircle,
  CreditCard,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  BadgeAlert,
  Landmark
} from 'lucide-react';

export default function BusinessLossPersonalLoanDefaultClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Crux' },
    { id: 'npa-dynamics', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'settlement-math', label: '2. Financial Breakdown & Settlement Math' },
    { id: 'comparison-matrix', label: '3. Resolution Pathways Comparison Matrix' },
    { id: 'cibil-impact', label: '4. CIBIL Algorithm & Credit Rebuilding' },
    { id: 'infographic-overview', label: '5. Visual Institutional Blueprint' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Institutional Settlement SOP' },
    { id: 'statutory-defense', label: '7. Statutory Notice Defense & Legal Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance & Escalation Matrix' },
    { id: 'chronological-timeline', label: '9. Procedural Milestones & Timelines' },
    { id: 'specialized-scenarios', label: '10. Specialized Real-World Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What happens if I default on an unsecured personal loan after my business fails?',
      a: 'Defaulting on a personal loan after a business loss is a civil matter. It is not a crime. Banks cannot seize your personal property under the SARFAESI Act. After ninety days without payment, the bank marks the loan as an NPA. At this stage, you can ask for a One-Time Settlement.'
    },
    {
      q: 'Can a bank seize my residential property or personal assets for personal loan default?',
      a: 'No. Unsecured personal loans have no pledged collateral or home mortgage. The bank cannot take your house or car under the SARFAESI Act. Lenders can only file civil suits, which take years and cost banks heavy legal fees.'
    },
    {
      q: 'How do I legally prove bona fide business loss and financial hardship to the bank?',
      a: 'You can prove your hardship with verified records. Useful papers include tax returns with nil income, GST cancellation forms, bank statements showing low cash, and vendor default letters. These files show that you cannot pay due to real losses.'
    },
    {
      q: 'What percentage of waiver can an entrepreneur negotiate on a defaulted personal loan?',
      a: 'Borrowers often get a 100% waiver on penal interest, late fees, and bounce charges. On the core loan balance, banks often grant 50% to 80% waivers. The final waiver depends on how long the debt is overdue and your verified losses.'
    },
    {
      q: 'How does personal loan settlement differ from corporate insolvency under IBC?',
      a: 'Corporate insolvency under the IBC applies to companies in the NCLT court. In contrast, personal loans taken by founders are settled out of court. These settlements follow RBI rules and resolve the debt much faster.'
    },
    {
      q: 'What legal defense is available if the bank issues Section 25 PSSA or Section 138 notices?',
      a: 'If a bank sends a notice for a bounced cheque or failed NACH debit, reply through a lawyer within fifteen to thirty days. The reply explains your business losses and shows there was no intent to cheat. This brings the bank to the settlement table.'
    },
    {
      q: 'Can bank recovery agents visit my residence or harass family members for business debts?',
      a: 'No. RBI rules strictly ban agent abuse. Recovery agents cannot call family, use bad words, visit homes unannounced, or call before 8 AM or after 7 PM. You can report violations to the RBI Ombudsman or the local police.'
    },
    {
      q: 'What essential terms must be verified in an official bank settlement sanction letter?',
      a: 'The letter must be on official bank letterhead with an authorized stamp. It must show your exact loan account number, payment due dates, and total waiver. It must also promise to close the file and stop all legal actions.'
    },
    {
      q: 'How does settling a business-related personal loan impact my CIBIL credit score?',
      a: 'The bank reports the loan as Settled to CIBIL and marks the balance as zero. This stops ongoing negative marks. You can rebuild your credit score back above 750 over two years by using a secured credit card and paying on time.'
    },
    {
      q: 'What is the step-by-step timeline to obtain the official No Dues Certificate (NDC)?',
      a: 'Pay the agreed settlement sum directly to your loan account within the due dates. The bank will close the account and issue the official No Dues Certificate within thirty to forty-five business days.'
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
            <span>Entrepreneurial Debt Resolution &amp; Legal Protection Framework</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How to Settle Personal Loans After Business Failure
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A clear guide for business founders and owners facing loan default after commercial loss. Learn how to stop agent threats, prove business losses, and secure up to 80% One-Time Settlement waivers under RBI rules.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Settle Debt from Business Loss</span>
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
                  <span>Institutional Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by Reserve Bank of India Prudential Norms and Fair Practices Code.
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
                <span>EXECUTIVE BRIEF: RESOLVING PERSONAL LOAN DEFAULT FROM BUSINESS LOSS</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Property Seizure:</strong> Unsecured personal loans have no pledged collateral or property attachment rights.
                  </span>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>
                    <strong className="text-slate-900 font-bold">Civil Protection:</strong> Loan default is a civil dispute. There is no risk of police arrest for genuine defaults.
                  </span>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>
                    <strong className="text-slate-900 font-bold">100% Fee Waiver:</strong> Full waiver of all compound penal interest, bounce fees, and late charges.
                  </span>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>
                    <strong className="text-slate-900 font-bold">50% to 80% Discount:</strong> Substantial principal loan waiver negotiated directly with bank managers.
                  </span>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>
                    <strong className="text-slate-900 font-bold">Clean Closure:</strong> Bank settlement approval letter and an official No Dues Certificate.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="npa-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Banking Regulations &amp; Commercial Realities</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics: Business Failure &amp; Personal Loan NPA Dynamics
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many Indian business owners take personal loans to run their companies. They use this money to pay staff, buy goods, or manage daily costs. Most small firms lack land or property to give as security. Because of this, founders borrow money in their own name. When market slowdowns, client defaults, or heavy losses hit, income dries up fast. The business owner then finds it impossible to pay monthly EMIs.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When loan EMIs stop, the bank begins recovery steps. The Reserve Bank of India places overdue accounts into three stages. SMA-0 covers defaults up to thirty days. SMA-1 covers thirty-one to sixty days. SMA-2 covers sixty-one to ninety days. Once ninety days pass without payment, the bank tags the loan as a Non-Performing Asset (NPA).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                An NPA tag forces the lender to set aside cash reserves to cover the bad debt. This rule ties up bank funds. Since personal loans have no pledged land or home, lenders cannot use the SARFAESI Act to seize property.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Taking a broken firm to court costs lenders large sums in legal fees. It also takes years with very little chance of full recovery. For this reason, bank committees prefer a One-Time Settlement (OTS). A settlement lets the bank recover part of the loan today and write off the rest.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics &amp; Ledger Audit</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Principal Debt vs Compound Penal Charges
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                After a loan default, bank software adds extra fees to the account. Lenders apply penal interest rates of 24% to 36% each year. Each failed NACH or cheque adds bounce fees of ₹500 plus GST. Late payment charges also pile up each month.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Within six to nine months, these fees inflate the total bank demand by 30% to 50%. Borrowers often feel overwhelmed by these large numbers. However, a debt review easily separates the original loan amount from these extra bank penalties.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In settlement talks, bank credit committees have the power to waive 100% of penal interest and bounce charges. When you show clear proof of business loss, banks also agree to waive 40% to 70% of the core loan amount. This reduces your total debt burden by 60% to 80%.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Business Failure Personal Loan Settlement Math</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹15 Lakh Gross Ledger Claim</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Financial Component</th>
                        <th className="p-3">Bank Ledger Demand</th>
                        <th className="p-3">Credit Committee Approved Waiver</th>
                        <th className="p-3 text-right">Final Payable Sum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Unamortized Principal Balance</td>
                        <td className="p-3">₹10,50,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">55% Core Principal Haircut (₹5,77,500)</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹4,72,500</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Accrued Contractual &amp; Penal Interest</td>
                        <td className="p-3">₹3,75,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Complete Interest Waiver (₹3,75,000)</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹0</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">NACH Bounce Fees &amp; Late Surcharges</td>
                        <td className="p-3">₹75,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Administrative Charge Waiver (₹75,000)</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹0</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Compromise Evaluation</td>
                        <td className="p-3 text-rose-600">₹15,00,000</td>
                        <td className="p-3 text-emerald-700">₹10,27,500 Total Waiver (68.5% Total Relief)</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹4,72,500 Final OTS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Strategic Assessment</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparative Matrix: Business Loss Debt Resolution Options
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a business closes down, owners must choose the right way to handle unpaid personal loans. Some borrowers try loan restructuring. But extending loan tenure does not cut the principal debt, and it increases total interest costs over time. Staying silent is even worse, as it leads to agent calls and legal notices.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A One-Time Settlement offers real debt relief and full legal protection. By securing deep discounts backed by a bank sanction letter, borrowers clear their dues and receive an official No Dues Certificate.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Resolution Mechanism</th>
                      <th className="p-3">Financial Relief</th>
                      <th className="p-3">Legal Protection</th>
                      <th className="p-3">CIBIL Bureau Status</th>
                      <th className="p-3">Average Resolution Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="p-3 text-emerald-600 font-semibold">50% to 80% Total Reduction</td>
                      <td className="p-3">Full debt closure and notice withdrawal.</td>
                      <td className="p-3 font-mono text-[11px]">Settled / Zero Balance</td>
                      <td className="p-3">30 to 60 Days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Tenure Restructuring</td>
                      <td className="p-3 text-amber-600">0% Principal Haircut (Higher Total Interest)</td>
                      <td className="p-3">Depends on strict future payments.</td>
                      <td className="p-3 font-mono text-[11px]">Restructured Facility</td>
                      <td className="p-3">45 to 90 Days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">DRT / Civil Court Litigation</td>
                      <td className="p-3 text-rose-600">Heavy Legal Defense Costs</td>
                      <td className="p-3">Lengthy court cases.</td>
                      <td className="p-3 font-mono text-[11px]">Suit Filed / Wilful Default</td>
                      <td className="p-3">2 to 5 Years</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">National Lok Adalat</td>
                      <td className="p-3 text-emerald-600">40% to 60% Mutual Compromise</td>
                      <td className="p-3">Final decree in Lok Adalat.</td>
                      <td className="p-3 font-mono text-[11px]">Settled in Lok Adalat</td>
                      <td className="p-3">Sitting Date Basis</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Unmanaged Default</td>
                      <td className="p-3 text-rose-600">Continuous Compounding Penalties</td>
                      <td className="p-3 text-rose-600">Legal notices and court calls.</td>
                      <td className="p-3 font-mono text-[11px] text-rose-600">Written Off / Delinquent</td>
                      <td className="p-3">Ongoing money stress.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Architecture &amp; Analytics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Score Impact: Bureau Algorithms &amp; Credit Rehabilitation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit bureaus like CIBIL, Experian, and Equifax calculate credit scores using key factors. Your payment record makes up 35% of the score. Credit card usage makes up 30%. The age of your credit history counts for 15%. Credit mix and new loan inquiries make up 10% each.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When business losses cause missed loan EMIs, credit bureaus record overdue days. This drops your credit score by 130 to 200 points. Leaving the default open causes ongoing negative marks each month.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A formal loan settlement stops this decline. Once the bank receives the settlement payment, it marks the account as Settled and zeroes out the dues. This halts monthly overdue reports and stops recovery calls.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You can rebuild your CIBIL score back to 750+ in eighteen to twenty-four months. The best way is to take a secured credit card against a fixed deposit, keep credit card spends below 30%, and pay bills on time. If your business recovers later, you can pay the waived balance to turn the Settled tag into Closed.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Business Loss Loan Resolution Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive visual roadmap outlines the five essential operational phases required to transition a distressed personal loan from default status into an officially sanctioned, legally binding compromise settlement backed by an authentic No Dues Certificate.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/business-loss-personal-loan-default.jpg"
                    alt="Personal Loan Default Due to Business Failure Settlement Blueprint and Resolution Workflow"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Entrepreneur Debt Resolution Framework • RBI Master Direction Compliant</span>
                  <a
                    href="/images/infographics/business-loss-personal-loan-default.jpg"
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

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: 6-Stage Business Debt Settlement Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Talking to recovery agents or branch staff often leads to wasted token payments and false promises. Getting an approved settlement with deep waivers requires a clear six-step process.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Loan Statement Audit &amp; Ledger Check
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Get your full loan statement from day one. Add up all past EMI payments, take out extra penal interest, and remove bounce fees. This shows your true net loan balance.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Hardship File &amp; Business Loss Proof
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Collect proof of your business losses. Gather tax returns with nil income, GST surrender forms, and bank records showing zero income. These papers prove you cannot pay due to real losses.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Formal Representation to Zonal Bank Heads
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Do not talk to recovery agents. Send a formal legal letter directly to the bank zonal head and nodal officer. The letter explains your business loss and asks for a structured settlement.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Direct Credit Committee Talks &amp; Waivers
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Negotiate with the bank credit team. Show that the loan has no pledged assets and present your loss proof. Ask for a 100% waiver on extra fees and a 50% to 80% cut on the principal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Sanction Letter Review &amp; Verification
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check the settlement letter with care. It must be on bank letterhead with an official stamp. It must list your exact loan number, payment dates, and promise to close the loan.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Settlement Payment &amp; No Dues Certificate
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pay the settlement amount directly into your loan account using NEFT or RTGS. Keep the bank receipt. The bank will issue the No Dues Certificate within thirty to forty-five business days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections &amp; Legal Defenses</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Notice Defense: Legal Protections for Entrepreneurs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a loan is ninety to one hundred and twenty days overdue, banks send legal notices demanding payment. Knowing your rights and sending prompt legal replies stops agent threats and steers the bank toward an OTS deal.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Section 25 PSSA NACH Mandate Notice</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sent when an electronic EMI debit fails for low funds. Sending a lawyer reply within thirty days proves business loss and moves the dispute into settlement talks.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Section 138 Negotiable Instruments Act</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sent if a security cheque bounces. Reply through a lawyer within fifteen days. The reply shows the cheque was security and not for fraud, stopping court trials.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Arbitration Section 21 Jurisdictional Challenge</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks often start arbitration with their own chosen arbitrator. The Supreme Court forbids banks from naming sole arbitrators alone. A lawyer can challenge the hearing and push the bank to settle.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>DRT Section 19 &amp; RBI Fair Practices Code</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Debt Recovery Tribunals only handle claims over ₹20 Lakhs. For all loans, RBI rules strictly ban recovery calls before 8 AM or after 7 PM. Agents cannot contact family or visit homes unannounced.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Banking Redressal for Distressed Debt
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If recovery agents break rules or branch staff ignore your business loss, you can use the three-tier grievance process set up by the Reserve Bank of India.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Powers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Checks agent abuse, wrong penal interest charges, and initial settlement requests.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Steps in for agent harassment, reviews account statements, and escalates OTS requests.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Handles formal complaints at cms.rbi.org.in for agent harassment and unfair banking practices.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Default Milestones to No Dues Certificate
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A defaulted loan moves through set stages under RBI rules. Knowing this timeline helps borrowers identify when banks face pressure to clear bad debts, creating the best chance for deep waivers.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Interval</th>
                      <th className="p-3">Regulatory Asset Status</th>
                      <th className="p-3">Lender Recovery Actions</th>
                      <th className="p-3">Recommended Strategic Response</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">SMS alerts, email notices, and reminder calls.</td>
                      <td className="p-3">Review your cash. Do not take fresh loans to pay old debt.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">More reminder calls and formal bank letters.</td>
                      <td className="p-3">Gather tax returns, business loss records, and closure papers.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Pre-NPA warnings and case sent to recovery agents.</td>
                      <td className="p-3">Use RBI rules to stop recovery agent harassment.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Classification</td>
                      <td className="p-3">Account marked NPA and sent to the bad debt desk.</td>
                      <td className="p-3">Review the loan ledger and consult a debt settlement expert.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Prime OTS Window</td>
                      <td className="p-3">Bank sends Section 25 notices or arbitration letters.</td>
                      <td className="p-3 font-bold text-slate-900">Negotiate with the bank to get 50% to 80% loan waivers.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 and Beyond</td>
                      <td className="p-3 font-mono text-[11px]">Write-off / ARC Transfer</td>
                      <td className="p-3">Arbitration hearings or loan sold to an ARC.</td>
                      <td className="p-3">Pay the settlement amount and get your No Dues Certificate.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Complex Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Startups, GST Closure &amp; ARC Transfers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Business failures involve different setups, multiple bank loans, and debt sales. Solving these cases needs clear legal and financial strategies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Multi-Lender Exposure &amp; Cross-Default
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers with loans across multiple banks face calls from several teams. A combined hardship file lets you settle all bank accounts in an organized way.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Venture Capital Collapse &amp; Startup Liquidation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When startup funding stops, founders often hold personal debt used for company costs. Submitting investor exit letters and tax returns proves business failure and secures deep waivers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Sole Proprietorship vs Personal Asset Segregation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sole proprietors share identity with their firms. Showing GST surrender papers and closed trade licenses proves the firm shut down and protects personal assets.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Asset Reconstruction Company (ARC) Portfolio Assignments
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks often sell bad loans to ARCs at 70% to 80% discounts. Because ARCs buy debts cheap, expert negotiators can secure deep settlement waivers of 70% to 80%.
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
                Frequently Asked Questions: Business Loss Loan Default Relief
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, legally verified answers addressing the most critical borrower questions regarding personal loan defaults following business closure, proving financial hardship, halting recovery harassment, and securing official No Dues Certificates.
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
                Official Regulatory References &amp; Statutory Legal Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Reserve Bank of India:</strong> Master Direction on Fair Practices Code for Non-Banking Financial Companies and Scheduled Commercial Banks (Updated 2026).
                </li>
                <li>
                  <strong>Payment and Settlement Systems Act, 2007:</strong> Section 25, Statutory Framework Governing Dishonour of Electronic Funds Transfer Mandates.
                </li>
                <li>
                  <strong>Negotiable Instruments Act, 1881:</strong> Section 138, Legal Provisions Regarding Dishonour of Cheques for Legally Enforceable Debt Discharge.
                </li>
                <li>
                  <strong>Arbitration and Conciliation Act, 1996:</strong> Sections 12(5), 16, and 21, Jurisdictional Ineligibility of Unilateral Arbitrators and Supreme Court Rulings (Perkins Eastman / TRF Limited).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Section 21, Standards for Accuracy of Credit Information and Bureau Dispute Rectification Protocols.
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
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Defense
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice for Loan
                  </Link>
                  <Link href="/lok-adalat-personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Lok Adalat Loan Settlement
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Protection
                  </Link>
                  <Link href="/bank-recovery-case-in-court" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Court Recovery Cases
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/cibil-score-kaise-badhaye-after-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get No Dues Certificate
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
                Expert in banking compliance, distressed MSME resolution, NPA negotiations, and commercial debt restructuring with extensive experience representing stressed founders before banking ombudsmen and credit committees.
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
                  CONFIDENTIAL LEGAL DEFENSE
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Personal Loan Default After Business Loss?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior debt resolution specialists halt recovery agent harassment, respond to legal notices, and negotiate up to 80% waivers directly with bank credit committees.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Settle Debt from Business Loss
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
                  <span>Direct Bank Settlement • 100% RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Advantage</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked resolution fee structure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Account Remittance:</strong> No middleman fund handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Complete RBI Compliance:</strong> Strict Fair Practices enforcement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified No Dues Certificate:</strong> Official bank closure guarantee.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice for Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full step-by-step reply blueprint &rarr;</span>
                </Link>

                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Arbitration Notice for Personal Loan
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Challenge unilateral arbitrator guide &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Loan to Closed Status
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Clean credit report blueprint &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
