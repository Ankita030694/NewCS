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
  Landmark,
  Calculator,
  Percent,
  ReceiptText,
  ShieldAlert
} from 'lucide-react';

export default function SettleTwentyFiveLakhPersonalLoanClient() {
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
    { id: 'quick-crux', label: 'Executive Summary & Crux' },
    { id: 'high-value-debt-economics', label: '1. High-Value Debt Economics' },
    { id: 'settlement-amount-breakdown', label: '2. ₹25L Settlement Formula' },
    { id: 'status-comparison-table', label: '3. Resolution Option Matrix' },
    { id: 'scoring-math-analytics', label: '4. CIBIL Scoring Analytics' },
    { id: 'infographic-overview', label: 'Visual 6-Stage Blueprint' },
    { id: 'step-by-step-settlement-sop', label: '5. 6-Stage Settlement SOP' },
    { id: 'formal-legal-notice-defense', label: '6. Litigation & Notice Defense' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance Matrix' },
    { id: 'chronological-resolution-milestones', label: '8. Timelines & Milestones' },
    { id: 'specialized-loan-scenarios', label: '9. High-Value Loan Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
        "q": "Can I settle a \u20b925 lakh personal loan in India?",
        "a": "Yes. Borrowers facing authentic hardship can negotiate a One-Time Settlement (OTS) for 40% to 55% of the principal (\u20b910 to \u20b913.75 lakhs). Lenders settle to release locked RBI capital provisions, avoid 3 to 5 years in DRT litigation, and recover liquidity from unsecured NPAs."
    },
    {
        "q": "What legal actions can a bank take for a \u20b925 lakh default?",
        "a": "Default on an unsecured personal loan is strictly a civil breach under the Indian Contract Act with zero risk of police arrest. Banks may issue statutory notices under Section 25 PSSA for NACH bounce, Section 138 NI Act for cheque bounce, or approach the DRT. All proceedings are withdrawn once an OTS is executed."
    },
    {
        "q": "Can a bank approach the Debt Recovery Tribunal (DRT) for \u20b925 lakhs?",
        "a": "Yes, as the DRT threshold under Section 19 of the RDB Act is \u20b920 lakhs. However, DRT benches face massive multi-year backlogs, and unsecured loans lack mortgaged real estate to liquidate. Bank credit desks routinely prefer fast out-of-court OTS settlements over lengthy tribunal trials."
    },
    {
        "q": "How much will a bank accept to settle a \u20b925 lakh personal loan?",
        "a": "Commercial banks typically accept 40% to 55% of the true principal balance with a 100% waiver on accrued penal interest and late charges. On an outstanding balance of \u20b920.5 lakhs, settlement typically closes between \u20b98.2 lakhs and \u20b911.25 lakhs."
    },
    {
        "q": "Can the bank unilaterally appoint a sole arbitrator for my default?",
        "a": "No. Supreme Court rulings in TRF Ltd. (2017) and Perkins Eastman (2020) establish that an interested party cannot unilaterally appoint a sole arbitrator. Such arbitral appointments are void ab initio under Section 12(5) of the Arbitration and Conciliation Act."
    },
    {
        "q": "How does settling a \u20b925 lakh loan impact my CIBIL score?",
        "a": "The status is reported as 'Settled', causing an initial drop of 75 to 130 points. However, it permanently freezes monthly DPD accumulation. You can rebuild your score above 750 within 18 to 24 months via secured credit cards or convert it to 'Closed' under CICRA Section 21."
    },
    {
        "q": "Can recovery agents visit my residence or workplace for \u20b925 lakhs?",
        "a": "Under the RBI Master Direction on Fair Practices Code, recovery agents cannot visit without prior written notice, call before 8 AM or after 7 PM, use abusive language, or contact colleagues and family. Violations can be halted immediately via legal notices and complaints to the RBI Ombudsman."
    },
    {
        "q": "How should I respond to a Section 25 PSSA or Section 138 notice?",
        "a": "Serve a formal legal reply within 15 days demonstrating genuine financial distress, absence of fraudulent intention (mens rea), and a structured OTS compromise offer. Upon payment of the agreed settlement, all statutory complaints are quashed and closed."
    },
    {
        "q": "Can multiple personal loans totaling \u20b925 lakhs be settled together?",
        "a": "Yes. A consolidated debt settlement strategy pools available liquidity, prioritizes aggressive lenders, and negotiates simultaneous or sequential settlements across each bank to permanently extinguish all liabilities."
    },
    {
        "q": "What documents are required to make a \u20b925 lakh settlement binding?",
        "a": "You must obtain: (1) An official Settlement Sanction Letter on bank letterhead signed by an authorized manager, (2) Direct bank payment receipts (RTGS/NEFT) into your loan account, and (3) An official No Dues Certificate (NDC) issued within 30 days."
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-blue-200" />
            <span>High-Value Unsecured Retail Debt Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            High-Value Default: Settle a ₹25 Lakh Personal Loan
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Defaulting on a ₹25 Lakh personal loan requires strategic legal defense. Discover how to neutralize bank litigation, handle DRT and Section 25 notices, shield personal assets, and negotiate a formal One-Time Settlement (OTS) with substantial principal waiver.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>High-Value Debt? Speak to Our Senior Lawyers</span>
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
                  <span>Borrower Protections</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Fair Practices Code, RDB Act §19, PSSA §25 &amp; CICRA Framework.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 shadow-xs space-y-3 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: ₹25 LAKH LOAN SETTLEMENT</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-normal">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Settlement Target:</strong> Settle ₹25 Lakh unsecured debt for 40% to 55% of true principal balance (₹10,00,000 - ₹13,75,000 in full discharge).</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">100% Penal Waiver:</strong> Completely eradicate ₹8 Lakh to ₹12 Lakh in compounding penal interest and bounce charges.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Strictly Civil Dispute:</strong> Loan default is a contractual dispute under Indian Contract Act with zero risk of police arrest.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Notice Defense:</strong> Formally reply to and quash Section 25 PSSA and Section 138 NI Act notices within the 15-day statutory window.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">DRT Strategy:</strong> Avoid 3 to 5 years of costly tribunal litigation via fast out-of-court bilateral compromise.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Arbitration Shield:</strong> Quash unilateral sole arbitrator appointments under Supreme Court Perkins Eastman precedent.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Asset Protection:</strong> Lenders cannot attach residential homes or freeze salaries without a conclusive judicial decree.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Anti-Harassment:</strong> Enforce RBI Fair Practices Code to stop calls after 7 PM, unannounced visits, or workplace contacts.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Direct Account Remittance:</strong> Disburse funds directly into your loan account under bank sanction letter to secure an authentic NDC.</span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: High-Value Retail Debt Economics */}
            <section id="high-value-debt-economics" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>High-Value Retail Banking Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. High-Value Debt Economics: Can You Settle a ₹25 Lakh Personal Loan?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Defaulting on an unsecured ₹25 Lakh personal loan represents a major inflection point in retail banking. Unlike smaller micro-loans, high-value debt exposures of ₹25 Lakhs carry heavy monthly EMIs of ₹60,000 to ₹80,000. When severe life shocks occur, such as corporate layoffs, enterprise cash-flow disruption, or medical emergencies, continuing full debt servicing becomes mathematically impossible.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                After 90 consecutive days of missed installments, the loan transitions into a Non-Performing Asset (NPA). Under Reserve Bank of India prudential guidelines, lenders must set aside mandatory Tier-1 capital provisioning, scaling from 15% up to 100% of the loan value. Because unsecured personal loans carry no attached mortgage collateral under the SARFAESI Act, banks face prolonged recovery timelines. While claims exceeding ₹20 Lakhs can be filed before the Debt Recovery Tribunal (DRT) under Section 19 of the RDB Act, tribunal trials frequently take 3 to 5 years. Consequently, bank credit committees routinely prioritize an out-of-court One-Time Settlement (OTS) accepting 40% to 55% of principal to immediately release provisioning reserves and clear bad debt.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Formula */}
            <section id="settlement-amount-breakdown" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calculator className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis &amp; Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: How Much to Pay to Settle a ₹25 Lakh Personal Loan?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Following default, lenders rapidly inflate the claimed balance with compounded penal interest rates (24% to 36% per annum), overdue late charges, and mandate bounce fees. Within 12 months, an original principal balance of ₹20.5 Lakhs escalates into an inflated recovery demand claiming ₹33 Lakhs to ₹38 Lakhs. Strategic debt settlement isolates the true net principal and eliminates all non-contractual penal levies:
              </p>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ReceiptText className="w-4 h-4 text-[#1886ff]" />
                    <span>Anatomy of a Defaulted ₹25 Lakh Personal Loan Claim</span>
                  </h3>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    180-Day NPA Case
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">Disbursed Facility Amount:</span>
                    <span className="font-semibold text-slate-900">₹25,00,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">Principal Repaid Prior to Default:</span>
                    <span className="font-semibold text-emerald-600">- ₹4,50,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 font-bold">
                    <span className="text-slate-700">True Outstanding Net Principal Balance:</span>
                    <span className="text-slate-900">₹20,50,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">Contractual Interest Accrued:</span>
                    <span className="font-semibold text-slate-700">₹4,10,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">Compounded Penal &amp; Overdue Charges:</span>
                    <span className="font-semibold text-red-600">+ ₹8,63,000</span>
                  </div>
                  <div className="flex justify-between py-1 bg-slate-50 px-2.5 rounded font-bold">
                    <span className="text-slate-800">Total Claim Demanded by Recovery Desk:</span>
                    <span className="text-red-700">₹33,23,000 – ₹38,00,000</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-emerald-800 block">CredSettle Settlement Target</span>
                      <span className="text-[11px] text-emerald-700">40% - 55% of Principal (100% Penal Waiver)</span>
                    </div>
                    <span className="text-base sm:text-lg font-black text-emerald-700">₹8,20,000 – ₹11,25,000</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Status Comparison Table */}
            <section id="status-comparison-table" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Resolution Pathways Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparative Resolution Matrix: Settlement vs. DRT Litigation vs. Default
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Borrowers confronting a defaulted ₹25 Lakh personal loan have five primary resolution pathways available under Indian law:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 font-bold">Option</th>
                      <th className="p-3 font-bold">Outflow</th>
                      <th className="p-3 font-bold">CIBIL Impact</th>
                      <th className="p-3 font-bold">Litigation Risk</th>
                      <th className="p-3 font-bold">Timeline</th>
                      <th className="p-3 font-bold text-[#1886ff]">Strategic Assessment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="p-3 text-emerald-700 font-semibold">₹10.0L – ₹13.75L</td>
                      <td className="p-3">&quot;Settled&quot; (-75 to -130 pts)</td>
                      <td className="p-3 text-emerald-700 font-semibold">Eliminated (Withdrawn)</td>
                      <td className="p-3">45–90 Days</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Optimal path for debt relief and permanent legal release</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Restructuring</td>
                      <td className="p-3">₹25L + Full Interest</td>
                      <td className="p-3">&quot;Restructured&quot;</td>
                      <td className="p-3 text-emerald-700 font-semibold">Paused during EMIs</td>
                      <td className="p-3">48–84 Months</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Viable only if substantial ongoing cash flow is certain</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">DRT Contest</td>
                      <td className="p-3 text-red-700 font-semibold">₹1.5L+ Legal Fees</td>
                      <td className="p-3 text-red-700 font-bold">&quot;Suit Filed / DRT&quot;</td>
                      <td className="p-3 text-amber-700 font-semibold">High (Tribunal trials)</td>
                      <td className="p-3">3–5 Years</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Effective defensive defense to compel an out-of-court OTS</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Lok Adalat OTS</td>
                      <td className="p-3 text-emerald-700 font-semibold">₹11.0L – ₹14.5L</td>
                      <td className="p-3">&quot;Settled via Adalat&quot;</td>
                      <td className="p-3 text-emerald-700 font-semibold">Decree passed (Final)</td>
                      <td className="p-3">1 Day sitting</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Binding judicial closure if pre-negotiated by counsel</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Inaction / Default</td>
                      <td className="p-3 text-red-700 font-semibold">Claims balloon</td>
                      <td className="p-3 text-red-700 font-bold">&quot;Written Off&quot;</td>
                      <td className="p-3 text-red-700 font-bold">Severe (Notices, visits)</td>
                      <td className="p-3">Indefinite</td>
                      <td className="p-3 text-red-600 font-semibold">Severe risk of credit paralysis and persistent disputes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Scoring Math */}
            <section id="scoring-math-analytics" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>CIBIL Algorithm &amp; Scoring Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Technical CIBIL Scoring Math: Impact of a ₹25 Lakh Personal Loan Settlement
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Credit bureaus calculate CIBIL scores across five weighted parameters: Payment History (35%), Credit Exposure (30%), Credit Longevity (15%), Credit Mix (10%), and Recent Inquiries (10%).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 text-xs">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Percent className="w-4 h-4 text-[#1886ff]" />
                    Weight Distribution &amp; Default Impact
                  </h3>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Payment History (35%):</span>
                    <span className="font-bold text-slate-900">Immediate -100 to -160 pts on default</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Credit Exposure (30%):</span>
                    <span className="font-bold text-emerald-600">Drops to ₹0 balance post-settlement</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Credit Longevity &amp; Mix (25%):</span>
                    <span className="font-bold text-slate-700">Preserved on older healthy accounts</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 text-xs">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-600" />
                    Credit Score Rehabilitation Path
                  </h3>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Phase 1 (Months 1–6):</span>
                    <span className="font-bold text-slate-800">+35 to +50 pts via Secured Card</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Phase 2 (Months 7–18):</span>
                    <span className="font-bold text-emerald-700">Reach 750+ Prime CIBIL Tier</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Conversion Milestone:</span>
                    <span className="font-bold text-indigo-700">Convert remark from Settled to Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl text-xs text-emerald-950">
                <strong>Section 21 CICRA Remedy:</strong> Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), borrowers completing an OTS retain the legal right to remit the waived differential later and convert the credit bureau remark from &quot;Settled&quot; to &quot;Closed&quot;, permanently expunging the adverse remark from credit records.
              </div>
            </section>

            {/* SECTION 5: Embedded 16:9 Infographic Banner */}
            <section id="infographic-overview" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Resolution Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: ₹25 Lakh Personal Loan Settlement Roadmap
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Study this 6-stage roadmap detailing the entire trajectory from initial loan default to forensic audit, legal notice defense, credit committee negotiation, direct remittance, and credit rehabilitation:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/settle-25-lakh-personal-loan.jpg"
                    alt="High-Value Loan Settlement Roadmap: 25 Lakh Personal Loan Default Resolution and Legal Defense"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-2 px-1 flex items-center justify-between text-[11px] text-slate-500">
                  <span>CredSettle High-Value Debt Resolution Blueprint • RBI Compliant</span>
                  <a
                    href="/images/infographics/settle-25-lakh-personal-loan.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>View High-Resolution</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: 6-Stage Standard Operating Procedure (SOP) */}
            <section id="step-by-step-settlement-sop" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Resolution SOP</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Standard Operating Procedure (SOP): 6 Stages to Settle a ₹25 Lakh Personal Loan
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Settling a high-stakes ₹25 Lakh loan requires adhering to a structured 6-stage standard operating procedure to counter litigation, eliminate harassment, and maximize principal waiver:
              </p>

              <div className="space-y-3 text-xs">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 1: Days 1–15</span>
                  <h3 className="font-bold text-slate-900 text-sm">Forensic Statement Audit &amp; Net Principal Isolation</h3>
                  <p className="text-slate-600">Obtain a certified Statement of Account (SOA) from the lender. Audit all historical EMI payments, deduct regular interest, excise non-contractual 36% compound penal fees and mandate return charges, and establish the true net principal balance as the baseline for a 40% to 55% settlement offer.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 2: Days 16–30</span>
                  <h3 className="font-bold text-slate-900 text-sm">Hardship Dossier Compilation &amp; Legal Shielding</h3>
                  <p className="text-slate-600">Assemble verifiable hardship records, including corporate layoff letters, audited business revenue declines, or medical summaries. Concurrently, serve a formal Cease-and-Desist notice under the RBI Fair Practices Code to halt unauthorized recovery agent visits.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 3: Days 31–45</span>
                  <h3 className="font-bold text-slate-900 text-sm">Formal Representation to Credit Risk Committee</h3>
                  <p className="text-slate-600">Submit a comprehensive legal compromise representation directly to the bank&apos;s Zonal Head of NPA Recovery and Credit Committee. Cite RBI compromise settlement directives, demonstrate bona fide illiquidity, and open negotiations with a structured 30% to 35% offer.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 4: Days 46–60</span>
                  <h3 className="font-bold text-slate-900 text-sm">Bilateral Negotiations &amp; Provisioning Leverage</h3>
                  <p className="text-slate-600">Counter the bank&apos;s initial demands by demonstrating the high cost of DRT tribunal litigation, highlighting the borrower&apos;s lack of attachable assets, and utilizing quarter-end provisioning write-down pressures to finalize the compromise at 40%–55% of principal.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 5: Days 61–75</span>
                  <h3 className="font-bold text-slate-900 text-sm">Legal Vetting of Settlement Sanction Letter</h3>
                  <p className="text-slate-600">Conduct thorough legal due diligence on the formal Settlement Sanction Letter issued on official bank letterhead signed by an authorized manager. Confirm exact settlement figures, complete waiver clauses, payment installments, and binding NDC commitments.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 6: Days 76–90</span>
                  <h3 className="font-bold text-slate-900 text-sm">Direct Remittance, Case Withdrawal &amp; NDC Issuance</h3>
                  <p className="text-slate-600">Remit the agreed settlement funds directly into your loan account via RTGS or NEFT. Secure the official No Dues Certificate within 30 days, ensure the bank withdraws all statutory notices, and verify that credit bureaus report the account balance as zero.</p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Formal Legal Notice Defense & Statutory Framework */}
            <section id="formal-legal-notice-defense" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Notice Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Formal Legal Notice Defense &amp; Statutory Legal Framework
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                When managing a ₹25 Lakh personal loan default, understanding statutory defense frameworks is crucial to protecting your rights against institutional bank notices:
              </p>

              <div className="bg-slate-900 text-slate-100 p-4 sm:p-5 rounded-2xl font-mono text-xs space-y-2.5 shadow-md">
                <div className="text-emerald-400 font-bold">[STATUTORY NOTICE DEFENSE FRAMEWORKS]</div>
                <div className="border-t border-slate-800 pt-2 space-y-2 text-slate-300">
                  <p><span className="text-yellow-400">1. SECTION 25 PSSA 2007 (NACH BOUNCE):</span> Issued for electronic clearing bounce. Serve a formal 15-day legal reply proving lack of mens rea and submitting an OTS compromise. Proceedings are quashed upon settlement.</p>
                  <p><span className="text-yellow-400">2. SECTION 138 NI ACT 1881 (CHEQUE BOUNCE):</span> Issued for dishonoured security cheques. Compoundable under Section 147; dismissed immediately upon settlement payment.</p>
                  <p><span className="text-yellow-400">3. ARBITRATION &amp; CONCILIATION ACT (SECTION 21):</span> Supreme Court rulings in TRF Ltd. and Perkins Eastman prohibit unilateral arbitrator appointments. Ineligibility is absolute under Section 12(5).</p>
                  <p><span className="text-yellow-400">4. SECTION 19 RDB ACT (DRT RECOVERY):</span> Applies to claims over ₹20L. File written statement contesting penal interest and petition for Lok Adalat referral to execute an out-of-court OTS.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 text-xs">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                  Borrower Rights Under RBI Fair Practices Code
                </h3>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>No collection calls or home visits before 8:00 AM or after 7:00 PM.</li>
                  <li>Strict prohibition against contacting employers, workplace colleagues, or relatives.</li>
                  <li>Zero tolerance for intimidating, abusive, or defamatory language.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. The 3-Tier Escalation Matrix for High-Value Loan Disputes
              </h2>

              <div className="space-y-3 text-xs">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <span className="text-[11px] font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Level 1: Grievance Redressal Officer (GRO)</span>
                  <p className="text-slate-600 mt-1">Submit a formal written OTS compromise representation to the Branch Manager and GRO (7–10 days turnaround).</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">Level 2: Principal Nodal Officer (PNO)</span>
                  <p className="text-slate-600 mt-1">Escalate to Bank PNO if unresolved within 30 days or for harassment violations (14–21 days turnaround).</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-xs space-y-1">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Level 3: RBI Integrated Ombudsman</span>
                  <p className="text-slate-600 mt-1">Lodge regulatory complaint at <strong>cms.rbi.org.in</strong> for statutory intervention and binding settlement direction.</p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Milestone Resolution Table */}
            <section id="chronological-resolution-milestones" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Chronological Timelines &amp; Milestone Resolution Table (Day 0 to Month 6)
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 font-bold">Phase</th>
                      <th className="p-3 font-bold">Status</th>
                      <th className="p-3 font-bold">Bank Action</th>
                      <th className="p-3 font-bold text-[#1886ff]">Borrower Defense Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Days 1–30</td>
                      <td className="p-3">SMA-0</td>
                      <td className="p-3">SMS &amp; call reminders</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Audit statement, calculate net principal, preserve liquidity</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Days 31–90</td>
                      <td className="p-3">SMA-1 / SMA-2</td>
                      <td className="p-3">Demand notices</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Compile hardship dossier; issue Cease-and-Desist notice</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Days 91–120</td>
                      <td className="p-3">NPA</td>
                      <td className="p-3">Section 25 / DRT notice</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Submit formal OTS proposal to Zonal Credit Committee</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Months 4–5</td>
                      <td className="p-3">Compromise Window</td>
                      <td className="p-3">Credit Committee review</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Negotiate 40%–55% waiver; secure written Sanction Letter</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Month 6</td>
                      <td className="p-3">Settled &amp; Closed</td>
                      <td className="p-3">Issue official NDC</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Remit funds directly; secure NDC; begin CIBIL rebuilding</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-loan-scenarios" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>High-Value Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: Multi-Lender Portfolios, Business Debt &amp; ARCs
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Multi-Lender Portfolios (₹10L + ₹8L + ₹7L)</h3>
                  <p className="text-slate-600">Prioritize aggressive lenders first and execute structured, phased settlements across each bank without depleting reserves on partial EMIs.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Corporate Executives Facing Layoffs</h3>
                  <p className="text-slate-600">Present authenticated termination letters and liquid asset exhaustion to secure maximum principal haircuts from credit committees.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Proprietorship Business Working Capital</h3>
                  <p className="text-slate-600">Submit audited balance sheets, GST revenue drops, and creditor lists to verify business insolvency and obtain deep settlement discounts.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Debts Sold to ARCs (CFM, Phoenix, ARCIL)</h3>
                  <p className="text-slate-600">ARCs purchase bad loan portfolios at 70%–80% discounts, allowing substantial settlement headroom of 60% to 75% total waivers.</p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: Frequently Asked Questions Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions on Settling a ₹25 Lakh Personal Loan
              </h2>

              <div className="space-y-2.5 pt-1">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-[#1886ff] transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                          <p className="pt-2">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Regulatory Sources & Authorities */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-5 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Legal References
              </h2>

              <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed list-disc pl-5">
                <li><a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-bold">Reserve Bank of India (RBI):</a> Master Direction on Fair Practices Code for Lenders (Recovery Agent Conduct &amp; Grievance Redressal).</li>
                <li><a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-bold">RBI Integrated Ombudsman Scheme, 2021:</a> Statutory dispute mechanism on cms.rbi.org.in.</li>
                <li><a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-bold">CICRA 2005 (Section 21):</a> Credit dispute resolution and bureau remark rectification.</li>
                <li><a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-bold">PSSA 2007 (Section 25):</a> Dishonour of electronic funds transfer / NACH mandates.</li>
                <li><a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-bold">RDB Act 1993 (Section 19):</a> Original Applications before Debt Recovery Tribunals (DRT).</li>
                <li><a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-bold">Indian Contract Act 1872:</a> Sections 73 &amp; 74 regarding civil contractual damages.</li>
                <li><a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-bold">NI Act 1881 (Section 138 &amp; 147):</a> Cheque dishonour defense and compounding of offenses.</li>
              </ul>

              {/* 6 Official Outbound Authority Link Badges */}
              <div className="pt-2">
                <span className="text-[11px] font-bold text-slate-800 block mb-2 uppercase tracking-wider">
                  Official Outbound Authority Portals &amp; Statutory Registers:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs flex items-center justify-between font-semibold text-slate-800 hover:text-[#1886ff]">
                    <div className="flex items-center gap-2"><Landmark className="w-4 h-4 text-[#1886ff]" /><span>RBI Official Portal</span></div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs flex items-center justify-between font-semibold text-slate-800 hover:text-[#1886ff]">
                    <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-600" /><span>RBI Ombudsman (CMS)</span></div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs flex items-center justify-between font-semibold text-slate-800 hover:text-[#1886ff]">
                    <div className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-[#1886ff]" /><span>TransUnion CIBIL</span></div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs flex items-center justify-between font-semibold text-slate-800 hover:text-[#1886ff]">
                    <div className="flex items-center gap-2"><Scale className="w-4 h-4 text-[#1886ff]" /><span>India Code Portal</span></div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs flex items-center justify-between font-semibold text-slate-800 hover:text-[#1886ff]">
                    <div className="flex items-center gap-2"><Gavel className="w-4 h-4 text-[#1886ff]" /><span>NALSA Lok Adalat</span></div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs flex items-center justify-between font-semibold text-slate-800 hover:text-[#1886ff]">
                    <div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-600" /><span>Cyber Crime Portal</span></div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-700 block mb-2">Explore Related CredSettle Debt Resolution Guides:</span>
                <div className="flex flex-wrap gap-1.5">
                  <Link href="/settle-1-lakh-personal-loan" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Settle ₹1L Loan</Link>
                  <Link href="/settle-2-lakh-personal-loan" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Settle ₹2L Loan</Link>
                  <Link href="/settle-3-lakh-personal-loan" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Settle ₹3L Loan</Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Arbitration Defense</Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">NACH Section 25</Link>
                  <Link href="/section-138-cheque-bounce-personal-loan" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Section 138 Defense</Link>
                  <Link href="/mental-harassment-by-recovery-agents-legal-action" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Stop Harassment</Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Get NDC / NOC</Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Convert Settled to Closed</Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Rebuild CIBIL</Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-4 sticky top-6">
            
            {/* Card 1: Author Bio Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2.5 text-xs">
              <div className="flex items-center gap-2.5">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-xs hover:bg-blue-200 transition-colors flex-shrink-0"
                >
                  AJ
                </Link>
                <div>
                  <Link
                    href="/author/ashish-jhangra"
                    className="text-xs font-bold text-slate-900 hover:text-[#1886ff] transition-colors block"
                  >
                    Ashish Jhangra
                  </Link>
                  <p className="text-[10px] font-semibold text-[#1886ff]">
                    Legal &amp; Debt Resolution Professional
                  </p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Specialized in banking compliance, high-value debt dispute resolution, and NPA compromise negotiations across DRT and civil banking forums.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                <Link href="/author/ashish-jhangra" className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1">
                  <span>Author Profile</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> CredSettle Panel
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card */}
            <div
              className="rounded-3xl p-5 text-white text-center space-y-3 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-[10px] font-black uppercase text-blue-200 bg-white/10 px-2.5 py-0.5 rounded-full inline-block">
                  100% CONFIDENTIAL DEBT RELIEF
                </span>
                <h3 className="text-base font-bold text-white leading-snug">
                  Defaulting on a ₹25 Lakh Personal Loan?
                </h3>
                <p className="text-blue-100 text-xs leading-relaxed font-normal">
                  Our debt resolution experts negotiate directly with bank credit committees to stop litigation, secure a 45% to 60% loan waiver, and protect your assets.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-2.5 px-3 rounded-full font-bold text-xs hover:bg-slate-50 transition-all shadow-md"
              >
                High-Value Debt? Speak to Senior Lawyers
              </Link>
              <div className="pt-1 flex flex-col items-center justify-center gap-0.5 text-[10px] text-blue-200">
                <a href="tel:+918800226635" className="hover:underline font-bold text-white flex items-center gap-1">
                  <Phone className="w-3 h-3" /> +91-8800226635
                </a>
                <span className="text-[9px] text-blue-300">Direct Bank Settlement • RBI Compliant</span>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2 text-xs">
              <h4 className="font-bold text-slate-900 text-xs">The CredSettle Advantage</h4>
              <ul className="space-y-1.5 text-slate-600 text-[11px]">
                <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-600 flex-shrink-0" /><span><strong>Zero Upfront Risk:</strong> Success-linked fee model.</span></li>
                <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-600 flex-shrink-0" /><span><strong>Direct Remittance:</strong> Zero middleman fund holding.</span></li>
                <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-600 flex-shrink-0" /><span><strong>RBI &amp; DRT Compliance:</strong> 100% lawful dispute handling.</span></li>
                <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-600 flex-shrink-0" /><span><strong>Pan-India Defense:</strong> Senior banking advocates.</span></li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2 text-xs">
              <h4 className="font-bold text-slate-900 text-xs">Related Debt Guides</h4>
              <div className="space-y-1.5">
                <Link href="/services/personal-loan-settlement" className="block p-2 rounded-xl border border-slate-100 hover:bg-blue-50/50 text-[11px] font-bold text-slate-800 hover:text-[#1886ff]">
                  Personal Loan Settlement Services &rarr;
                </Link>
                <Link href="/ecs-nach-bounce-legal-notice-section-25" className="block p-2 rounded-xl border border-slate-100 hover:bg-blue-50/50 text-[11px] font-bold text-slate-800 hover:text-[#1886ff]">
                  NACH Bounce Section 25 Defense &rarr;
                </Link>
                <Link href="/arbitration-notice-personal-loan-default" className="block p-2 rounded-xl border border-slate-100 hover:bg-blue-50/50 text-[11px] font-bold text-slate-800 hover:text-[#1886ff]">
                  Arbitration Notice Defense Strategy &rarr;
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
