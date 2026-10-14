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
  ReceiptText
} from 'lucide-react';

export default function SettleTwoLakhPersonalLoanClient() {
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
    { id: 'can-you-settle-2-lakh', label: '1. Can You Settle a ₹2 Lakh Loan?' },
    { id: 'settlement-amount-breakdown', label: '2. Settlement Formula & Numbers' },
    { id: 'status-comparison-table', label: '3. Resolution Option Comparison' },
    { id: 'scoring-math-analytics', label: '4. CIBIL Scoring Math & Penalties' },
    { id: 'infographic-overview', label: 'Visual 6-Step Settlement Blueprint' },
    { id: 'step-by-step-settlement-sop', label: '5. 6-Stage Settlement SOP' },
    { id: 'formal-legal-notice-defense', label: '6. Statutory Notice Defense' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance Matrix' },
    { id: 'chronological-resolution-milestones', label: '8. Timelines & Milestones' },
    { id: 'specialized-loan-scenarios', label: '9. Fintech Apps & Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can I settle a ₹2 lakh personal loan in India?',
      a: 'Yes. You can settle a ₹2 lakh own loan in India through a formal One-Time closure (OTS) with your lending bank or NBFC. When a clients faces legitimate money hardship (such as job loss. Key medical emergency. Firm setback. Sharp income drop). Lenders recognize that pursuing prolonged legal claims for ₹2 lakhs is economically inefficient. Banks routinely settle deal closures. Accepting between ₹60,000 to ₹90,000 (a 55% to 70% overall waiver) to permanently close the account and recover liquidity without court litigation.'
    },
    {
      q: 'What are the legal consequences of defaulting on a ₹2 lakh personal loan?',
      a: 'Defaulting on an clean own loan of ₹2 lakhs is strictly a civil dispute arising from breach of contract under the Indian Contract Act. 1872. Lenders cannot file penal charges. Dispatch police. obtain arrest warrants for genuine default. yet. If your automated NACH mandate or EMI cheque bounced. The lender can issue legal notices under Section 25 of the Payments and closure Systems Act (PSSA). 2007 or Section 138 of the Negotiable Instruments Act. These quasi-penal steps are routinely closed or quashed upon reaching a settle One-Time closure.'
    },
    {
      q: 'What settlement percentage can I expect for a ₹2 lakh personal loan?',
      a: 'For an clean own loan of ₹2 lakhs. Banks and NBFCs typically settle at 30% to 45% of the true unpaid main sum balance. Which translates to a final payable amount between ₹60,000 to ₹85,000. Additionally. 100% of accrued penal rates. Compounded late payment surcharges. NACH bounce fines (which often inflate the total claimed demand to ₹2.6. ₹2.9 lakhs) are fully waived during a professionally settle deal.'
    },
    {
      q: 'Why do banks agree to settle a ₹2 lakh personal loan instead of suing?',
      a: 'Filing a formal claims suit or initiating arbitration under the Arbitration & Conciliation Act. 1996 for a ₹2 lakh loan default costs the lender substantial upfront legal capital - including counsel fees. Court fees. Arbitral court charges. Notice execution costs that easily exceed ₹40,000 to ₹60,000. Furthermore. Under RBI prudential provisioning norms. Holding an clean Non-Performing Asset (NPA) forces banks to set aside 100% risk capital. Accepting ₹65,000 to ₹85,000 upfront through an OTS frees up balance sheet capital and eliminates litigation risk.'
    },
    {
      q: 'What is the step-by-step process to settle a ₹2 lakh personal loan?',
      a: 'The process involves 6 structured stages: (1) Reconciling your loan Statement of Account (SOA) to isolate true main sum from bogus penal fees. (2) Compiling verifiable money hardship proof (pink slip. Medical records. Bank statements) : (3) Submitting a formal Hardship Letter and OTS proposal straight to the bank\'s settlement committee, (4) Negotiating the settlement bracket down from initial bank demands to 35%–45% of principal, (5) Securing and legally vetting a written Settlement Sanction Letter on official bank letterhead, and (6) Remitting funds directly into your loan account and obtaining an official No Dues Certificate (NDC).'
    },
    {
      q: 'How does settling a ₹2 lakh personal loan impact my CIBIL score?',
      a: 'Settling a ₹2 lakh own loan results in the credit desk reporting the account status as "Settled" (or "Post-Write-Off Settled"). which typically lowers your CIBIL score by 75 to 120 points. While this status remains on your credit history for up to 7 years under CICRA 2005 rules. It stops monthly recurring "Days Past Due" (DPD) fines and prevents "Suit Filed" marks. clients can systematically rebuild their CIBIL score back to 750+ within 12 to 24 months through secured credit products or by later paying the balance waiver to convert the status to "Closed".'
    },
    {
      q: 'Can recovery agents visit my home or workplace for a ₹2 lakh loan default?',
      a: 'Under the Reserve Bank of India (RBI) Master Directions on Fair Practices Code and Guidelines on agents. Calls agents are strictly prohibited from visiting your residence or workplace without prior written notice. Calling before 8:00 AM or after 7:00 PM. Using abusive or threatening language. contacting friends, family. employers. Any violation can be fast escalated to the bank\'s Principal Nodal Officer and the RBI Integrated Ombudsman (cms.rbi.org.in) for disciplinary penalties and compensation.'
    },
    {
      q: 'What should I do if I receive a Section 25 NACH bounce notice for my ₹2 lakh loan?',
      a: 'Do not panic. A Section 25 notice under the Payments and closure Systems Act. 2007 requires a formal written reply within the legal 15-day window. The reply must articulate genuine money hardship. Clarify the complete absence of fraudulent intention (mens rea). formally propose a One-Time closure. Once the OTS terms are executed and the payout sum is paid. The bank is by law obligated to withdraw or dismiss all Section 25 steps.'
    },
    {
      q: 'Can digital lending apps (like KreditBee, Navi, MoneyTap) settle a ₹2 lakh personal loan?',
      a: 'Yes. Registered fintech NBFC lending apps routinely enter into One-Time closures for defaulted loans up to ₹2 lakhs. Because digital lenders rely on fast capital churn and automated balance-sheet write-offs. Their credit risk boards often offer significant closure discounts (50% to 65% waivers). Particularly towards the end of money quarters (March and September) when represented by experts debt relief negotiators.'
    },
    {
      q: 'How do I obtain a genuine No Dues Certificate (NDC) after settling my ₹2 lakh loan?',
      a: 'After remitting the agreed payout sum straight to your loan account via RTGS. NEFT. Net banking as specified in your written OTS Sanction Letter. The lending institution is mandated under RBI guidelines to issue an valid No Dues letter (NDC) or No Objection letter (NOC) within 21 to 30 days. This papers serves as permanent legal proof that all monetary claims have been fully discharged.'
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Settle 2 Lakh Personal Loan
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed"> Have an unpaid own loan of ₹2 Lakhs? Discover how to settle a legal One-Time closure. Secure a 55% to 70% waiver. Eliminate claims threats. rebuild your CIBIL score. </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Evaluate Your ₹2 Lakh Settlement Options</span>
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
                  <span>Small-Ticket Settlement Rights</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight"> Governed by RBI Fair Practices Code &amp. SARFAESI/CICRA Framework. </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: SETTLING A ₹2 LAKH PERSONAL LOAN</span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p> Defaulting on an clean own loan of ₹2 Lakhs places clients in an anxious position. From an bank perspective. This balance represents one of the most viable loan sizes for securing a deep deal closure in India. Trade banks and Non-Banking money Companies (NBFCs) recognize that pursuing full-scale legal claims through civil summary suits or arbitration tribunals routinely costs upwards of ₹40,000 to ₹60,000 in counsel fees and procedural expenses. When a clients establishes genuine. Documented insolvency caused by unexpected life events. Lenders routinely approve One-Time closures (OTS) between ₹60,000 and ₹85,000. Fully waiving growing penal rates and overdue surcharges. </p>
                <p> clients must recognize that an clean own loan default is purely a civil dispute governed by the Indian Contract Act. 1872. With zero risk of penal arrest or police action. Although automated NACH mandate returns may trigger formal demand notices under Section 25 of the Payments and closure Systems Act. 2007. These matters are systematically extinguished upon executing a formal OTS. Furthermore. The Reserve Bank of India Master Directions provide robust anti-threats safety against third-party agents. Making sure that clients can settle with dignity while establishing a structured pathway to rehabilitate their CIBIL score back above 750 within 12 to 24 months. </p>
              </div>
            </div>

            {/* SECTION 1: Can You Settle a ₹1 Lakh Personal Loan? */}
            <section id="can-you-settle-2-lakh" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Small-Ticket Debt Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Can You Settle a ₹2 Lakh Personal Loan? The Mid-Ticket Debt Reality
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Many clients in India mistakenly assume that debt closure is a mechanism reserved exclusively for massive firm insolvencies or multi-crore firm defaults. In reality, <strong>a ₹2 Lakh clean own loan falls into the prime mid-ticket retail bracket where trade banks and Non-Banking money Companies (NBFCs) actively settle One-Time closures (OTS) to avoid protracted legal expenses</strong>. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When an individual defaults on a ₹2 Lakh own loan due to legitimate hardship - such as unexpected job loss. Severe medical hospitalization. Salary reductions. small firm collapse - the loan follows a strict bank lifecycle governed by Reserve Bank of India (RBI) prudential norms: </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When monthly EMI payments stop. The loan moves through a strictly regulated bank classification cycle established by the Reserve Bank of India. During the first 90 days of overdue status. The account is categorized as a Special Mention Account across SMA-0 (1 to 30 days). SMA-1 (31 to 60 days). SMA-2 (61 to 90 days) buckets. Throughout this preliminary phase. Automated dialers and branch claims desks apply heavy follow-up pressure in an effort to extract overdue EMIs alongside harsh late payment surcharges. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> The bank dynamic changes fundamentally on Day 91. Once an account crosses 90 running days past due. RBI prudential norms mandate that the lender classify the loan as a Sub-Standard Non-Performing Asset (NPA). Under banking capital adequacy requirements. The institution must fast lock up between 15% to 100% of the loan value in mandatory balance-sheet provisioning. This provisioning requirement straight impairs the bank&apos. s quarterly liquidity and profitability metrics. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> To initiate a formal claims suit under Order 37 of the Code of Civil Procedure or pursue arbitration under the Arbitration and Conciliation Act. 1996. The bank must engage external counsel. Deposit court stamp fees. Fund arbitral court sittings. handle process service expenses. These procedural costs quickly exceed ₹40,000 to ₹60,000 and tie up claims resources for two to four years without guaranteeing full asset realization. Consequently. When a clients presents authentic proof of hardship and offers an upfront cash deal of ₹60,000 to ₹85,000. The bank&apos. s closure desk recognizes that accepting an fast OTS is far more advantageous than spending fresh capital on uncertain litigation. </p>
            </section>

            {/* SECTION 2: The Financial Breakdown: Settlement Formula & Numbers */}
            <section id="settlement-amount-breakdown" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calculator className="w-4 h-4 text-[#1886ff]" />
                <span>Mathematical Settlement Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. The Financial Breakdown: How Much to Pay for a ₹2 Lakh Settlement?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When you default on a ₹2,00,000 own loan. Banks automatically add harsh compound penal rates. Bounce charges. Cheque return fees. calls expenses. By the time 6 to 12 months pass. The lender&apos. S demand notice might claim ₹2,60,000 to ₹2,95,000. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> grasp the mathematical dissection between <em>main sum Balance</em>, <em>Contractual rates</em>. <em>Artificial Penal Add-ons</em> is the key to settle the lowest possible closure figure: </p>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2"> <ReceiptText className="w-4 h-4 text-[#1886ff]" /> <span>Anatomy of a ₹2 Lakh own Loan Default Claim</span> </h3>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    Typical 180-Day NPA Case
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Original Principal Disbursed:</span>
                    <span className="font-semibold text-slate-900">₹2,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Principal Repaid Prior to Default (e.g. 4 EMIs):</span>
                    <span className="font-semibold text-emerald-600">- ₹36,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600 font-bold">True Outstanding Principal at Default:</span>
                    <span className="font-bold text-slate-900">₹1,64,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Contractual Interest Due (16% p.a.):</span>
                    <span className="font-semibold text-slate-700">₹24,600</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Compounded Penal Surcharge (24% p.a. monthly):</span>
                    <span className="font-semibold text-red-600">+ ₹39,360</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">NACH Bounce Fees, GST &amp; Collection Overheads:</span>
                    <span className="font-semibold text-red-600">+ ₹18,200</span>
                  </div>
                  <div className="flex justify-between items-center py-2 bg-slate-50 px-3 rounded-lg font-bold">
                    <span className="text-slate-800">Total Demanded by Bank Recovery Desk:</span>
                    <span className="text-red-700 text-sm sm:text-base">₹2,46,160 – ₹2,85,000</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200">
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-800 block">
                        CredSettle Professional Settlement Target
                      </span>
                      <p className="text-xs text-emerald-900 mt-0.5"> Targeting 35% to 50% of the true main sum balance with 100% penal fee waiver. </p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg sm:text-2xl font-black text-emerald-700">
                        ₹60,000 – ₹82,000
                      </span>
                      <span className="block text-[10px] text-emerald-800 font-bold">
                        (65% to 75% Total Claim Discount)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Status Comparison Table */}
            <section id="status-comparison-table" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Resolution Pathways Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Resolution Matrix: Settlement vs Restructuring vs Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Evaluate the five primary legal and money routes available when managing a defaulted ₹1 Lakh own loan in India: </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Resolution Option</th>
                      <th className="p-3.5 font-bold">Upfront Cash Needed</th>
                      <th className="p-3.5 font-bold">CIBIL Status Impact</th>
                      <th className="p-3.5 font-bold">Legal Harassment Risk</th>
                      <th className="p-3.5 font-bold">Resolution Timeline</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Strategic Verdict</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">One-Time closure (OTS)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">₹60,000. ₹85,000 (Lump-sum)</td>
                      <td className="p-3.5">&quot. Settled&quot. (-75 to -120 pts)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Eliminated (NDC Issued)</td>
                      <td className="p-3.5">30 to 60 Days</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Best for fast money relief and closing bad debt</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Loan Restructuring / Tenure Stretch</td>
                      <td className="p-3.5 text-slate-800 font-medium">₹2,00,000 + Extended rates</td>
                      <td className="p-3.5">&quot. Restructured&quot. (Mild dip)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Eliminated while EMIs paid</td>
                      <td className="p-3.5">24 to 48 Months</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Suitable only if you have stable. Predictable monthly income</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">National Lok Adalat closure</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">₹70,000. ₹95,000 (On the spot)</td>
                      <td className="p-3.5">&quot. Settled via Lok Adalat&quot. </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">by law Closed (Sec 21 LSA)</td>
                      <td className="p-3.5">1 Day (Sitting date)</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Highly effective if your bank issues a Lok Adalat notice</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Prolonged Default / Inaction</td>
                      <td className="p-3.5 text-red-700 font-semibold">₹0 upfront. claims grow</td>
                      <td className="p-3.5 text-red-700 font-bold">&quot. Written Off / Suit Filed&quot. (-200 pts)</td>
                      <td className="p-3.5 text-red-700 font-bold">Severe (Calls. Notices. Visits)</td>
                      <td className="p-3.5">Indefinite (Years)</td>
                      <td className="p-3.5 text-red-600 font-semibold">Worst approach. destroys creditworthiness across all lenders</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Sale to Asset Reconstruction Co. (ARC)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">₹50,000. ₹75,000</td>
                      <td className="p-3.5">&quot. Sold to ARC / Settled&quot. </td>
                      <td className="p-3.5 text-amber-700 font-semibold">Moderate (ARC follow-ups)</td>
                      <td className="p-3.5">6 to 12 Months</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">High discount potential as ARCs buy debt at 20-30% face value</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical Scoring Math & CIBIL Analytics Card */}
            <section id="scoring-math-analytics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>CIBIL Algorithm &amp; Scoring Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Scoring Math: Impact of ₹2 Lakh Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> How exactly does credit desk scoring work when a ₹2 Lakh loan is settled versus left in default? Credit bureaus in India (TransUnion CIBIL. Experian. CRIF High Mark. Equifax) compute credit scores using proprietary algorithms weighted across exact parameters: </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <Percent className="w-4 h-4 text-[#1886ff]" /> Credit desk Algorithm Factor Weights </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Payment History (DPD Records):</span>
                      <span className="font-bold text-slate-900">35% Weightage</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Credit Utilization Ratio (CUR):</span>
                      <span className="font-bold text-slate-900">30% Weightage</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Credit Age &amp; History Length:</span>
                      <span className="font-bold text-slate-900">15% Weightage</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Credit Mix (Secured vs. Unsecured):</span>
                      <span className="font-bold text-slate-900">10% Weightage</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Hard Loan Inquiries:</span>
                      <span className="font-bold text-slate-900">10% Weightage</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Default Impact on 35% Factor:</span>
                      <span className="text-red-700">Immediate -80 to -150 Points</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <Award className="w-4 h-4 text-emerald-600" /> closure vs Default claims Timeline </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Ongoing Default (Unsettled):</span>
                      <span className="font-bold text-red-600">DPD accumulates indefinitely (900+ DPD)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Settlement Status Applied:</span>
                      <span className="font-bold text-amber-600">DPD stops immediately; account marked &quot;Settled&quot;</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Score Recovery Stage 1 (Months 1–6):</span>
                      <span className="font-bold text-slate-800">+25 to +40 Points with Secured FD Card</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Score Recovery Stage 2 (Months 7–18):</span>
                      <span className="font-bold text-slate-800">+50 to +80 Points with pristine payment cycle</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Target CIBIL at Month 24:</span>
                      <span className="text-emerald-700">750+ (Prime Borrower Territory)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200/70 p-4 rounded-xl text-xs md:text-sm text-emerald-950 leading-relaxed">
                <p> <strong>The CIBIL Conversion Option:</strong> Under Credit Information Companies (rule) Act. 2005 (CICRA §21). You also retain the right to approach the bank in future (once your finances recover) to pay the balance waived amount and convert the CIBIL tag from <em>&quot. Settled&quot. </em> to <em>&quot. Closed&quot. </em>Permanently removing any closure stigma. </p>
              </div>
            </section>

            {/* SECTION 5: Embedded 16:9 Infographic Banner */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Resolution Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: ₹2 Lakh Personal Loan Settlement Roadmap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Study this thorough 6-stage roadmap detailing the entire trajectory from first loan default to hardship evaluation. Deal talks. Formal sanction. Direct payment. credit rehabilitation: </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/settle-2-lakh-personal-loan.jpg"
                    alt="2 Lakh Personal Loan Settlement Roadmap and Process Flow Diagram India"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Small-Ticket Loan Settlement Blueprint • RBI Compliant Resolution</span>
                  <a
                    href="/images/infographics/settle-2-lakh-personal-loan.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>View High-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: 6-Stage Standard Operating Procedure (SOP) */}
            <section id="step-by-step-settlement-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Resolution SOP</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. 6-Stage SOP: Settle a ₹2 Lakh Personal Loan Legally
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Follow this sequential. Battle-tested standard operating procedure executed by CredSettle experts to ensure maximum waiver and complete legal safety: </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 1–15</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900"> Loan Audit &amp. Elimination of Bogus Penal Charges </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Request a signed Statement of Account (SOA) from the lender. Reconcile all historical EMIs paid. Isolate the true remaining main sum balance from growing penal fees. calculate your target closure bracket (30% to 50% of the actual remaining main sum). </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 16–30</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900"> Hardship proof &amp. Anti-threats Notice </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Compile authentic proof prove your money distress - such as pink slips. Medical discharge summaries. GST returns showing firm downturn. bank statements. If third-party agents engage in illegal contact or threats. Serve an anti-threats cease-and-desist notice under RBI Fair Practices Code. </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 31–45</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900"> Formal Hardship Letter &amp. OTS Proposal Submission </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Submit a formal One-Time closure (OTS) proposal straight to the bank&apos. s Legal claims Desk and Credit board. Clearly outline that continuing default is due to genuine inability rather than willful default. Offer a exact lump-sum payout sum (e.g. ₹65,000 for a ₹2 Lakh loan). </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 46–60</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900"> Bilateral talks with Internal closure board </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Engage in structured counter-talks. When the bank counter-offers 70% or 80%. Present your documented money insolvency. Negotiators leverage bank quarter-end pressure (March. June. September. December) to push the final approved closure figure down to 35%. 45% of main sum. </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 61–75</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900"> Vetting the Written closure note &amp. Direct Bank wire transfer </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> <strong className="text-slate-900 font-bold">NEVER pay without a formal closure Sanction Letter.</strong> check that the letter is on valid bank letterhead. Signed by an authorized manager. Explicitly specifies your loan account number. States the exact payout sum. Mentions &quot. Full and Final closure&quot. gives a clear payment deadline. Remit funds strictly into your loan account via RTGS/NEFT. </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 76–90</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900"> No Dues letter (NDC) Retrieval &amp. CIBIL Record Update </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Collect the valid No Dues letter (NDC) or No Objection letter (NOC) within 21 to 30 days of payment. Check after 45 days that CIBIL. Experian. CRIF High Mark reflect an unpaid balance of ₹0 with the status updated from &quot. Default/Overdue&quot. to &quot. Settled&quot. </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Formal Legal Notice Defense & Statutory Framework */}
            <section id="formal-legal-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Notice Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Formal Legal Notice Defense &amp; Statutory Legal Framework
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When a ₹2 Lakh own loan enters default. Lenders often dispatch alarming legal notices to create panic. grasp the exact legal frameworks governing these notices ensures you respond with composure and legal precision: </p>

              <div className="bg-slate-900 text-slate-100 p-5 md:p-6 rounded-2xl font-mono text-xs space-y-3 overflow-x-auto shadow-md">
                <div className="text-emerald-400 font-bold flex items-center gap-2">
                  <span>[STATUTORY NOTICE CLASSIFICATION &amp; BORROWER LEGAL SAFEGUARDS]</span>
                </div>
                <div className="border-t border-slate-800 pt-2 space-y-2 text-slate-300">
                  <p> <span className="text-yellow-400">1. SECTION 25 PSSA 2007 (NACH / ECS DISHONOUR):</span> <br /> Quasi-penal notice issued when automated EMI auto-debit bounces due to insufficient funds. <br /> <span className="text-emerald-300">Defensive Remedy:</span> Reply within 15 days documenting money distress. Lack of mens rea (fraudulent intention). formal offer of deal OTS. </p>
                  <p> <span className="text-yellow-400">2. SECTION 138 NEGOTIABLE INSTRUMENTS ACT (CHEQUE BOUNCE):</span> <br /> Applicable only if a real security cheque was presented and returned dishonoured. <br /> <span className="text-emerald-300">Defensive Remedy:</span> Compoundable legal offense. Executing an OTS automatically quashes Section 138 complaints under Section 147 NI Act. </p>
                  <p> <span className="text-yellow-400">3. SECTION 21 ARBITRATION &amp. CONCILIATION ACT 1996:</span> <br /> Notice invoking arbitration clause. <br /> <span className="text-emerald-300">Defensive Remedy:</span> Supreme Court precedents in <em>Perkins Eastman (2020)</em> and <em>TRF Ltd. (2017)</em> prohibit unilateral arbitrator appointments by banks. Challenge arbitrator under Section 12(5). </p>
                  <p> <span className="text-yellow-400">4. SECTION 73/74 INDIAN CONTRACT ACT 1872:</span> <br /> Standard civil notice demanding main sum + rates. <br /> <span className="text-emerald-300">Defensive Remedy:</span> Pure civil dispute with zero arrest powers. grounds for direct bilateral closure talks. </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <ShieldCheck className="w-4 h-4 text-[#1886ff]" /> legal Rights under RBI Fair Practices Code </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Under the Reserve Bank of India Master Directions. Trade banks and NBFCs are strictly held accountable for the conduct of their agents. claims staff are by law prohibited from: </p>
                <ul className="list-disc pl-5 text-xs md:text-sm text-slate-600 space-y-1.5">
                  <li>Calling before 8:00 AM or after 7:00 PM in the evening.</li>
                  <li>Accessing your phone contacts or calling family. Employers. friends.</li>
                  <li>Using threaten, abusive. false language over phone or WhatsApp.</li>
                  <li>Visiting your workplace or residence without prior written notice and valid bank ID.</li>
                  <li>Misrepresenting themselves as police heads. Court bailiffs. penal investigators.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Escalation Matrix for Unfair Recovery Tactics
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> If the lending bank or its calls agents ignore your hardship notices or engage in coercive claims tactics for a ₹2 Lakh loan. Escalate through this structured 3-tier hierarchy: </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Branch Manager &amp; NBFC Grievance Desk
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Response: 7–10 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900"> Formal Written Grievance &amp. OTS Submission </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Submit a formal email and speed post letter to the Branch Manager and the internal Grievance Redressal head (GRO) citing your loan account number. Documented hardship. formal deals. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: Principal Nodal Officer (PNO) of the Bank
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Response: 14–21 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900"> Escalation for claims threats &amp. Excessive fines </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> If Level 1 fails to respond within 30 days or rejects reasonable closure terms while agents continue threats. File a formal complaint before the bank&apos. s main sum Nodal head (PNO). </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: RBI Integrated Ombudsman (CMS Portal)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Response: 30 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900"> legal RBI Complaint on cms.rbi.org.in </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> If the bank fails to resolve your grievance within 30 days or violates the RBI Fair Practices Code. Lodge a formal RBI complaint on the <strong>RBI Integrated RBI officer Portal (cms.rbi.org.in)</strong>. The RBI officer has legal authority to award compensation up to ₹20 Lakhs for mental threats and direct fair closure terms. </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Milestone Resolution Table */}
            <section id="chronological-resolution-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Resolution Timelines &amp; Milestone Table (Day 0 to Month 6)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> grasp the chronological phases of a ₹2 Lakh loan default allows you to plan your defense. Manage cash reserves. time your closure talks for maximum discount: </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Timeline Phase</th>
                      <th className="p-3.5 font-bold">Institutional Status</th>
                      <th className="p-3.5 font-bold">Bank Recovery Action</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Borrower Strategic Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3.5">SMA-0 / Overdue</td>
                      <td className="p-3.5">Automated SMS. Emails. Tele-calling reminders</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Audit loan SOA and assess true money liquidity</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Day 31 to 90</td>
                      <td className="p-3.5">SMA-1 &amp. SMA-2</td>
                      <td className="p-3.5">Intensified calls calls. Field agent visit notices</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Compile hardship dossier. issue anti-threats notice if needed</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3.5">NPA (Sub-Standard)</td>
                      <td className="p-3.5">Loan recall notice / Section 25 NACH bounce notice</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Submit formal OTS Hardship Proposal for 30%. 45% main sum</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Months 4 to 5</td>
                      <td className="p-3.5">deal OTS Window</td>
                      <td className="p-3.5">Bank closure board reviews deal proposal</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Execute bilateral talks. secure written OTS Sanction Letter</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Month 6</td>
                      <td className="p-3.5">Account Closed / Settled</td>
                      <td className="p-3.5">Issuance of valid No Dues letter (NDC)</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Remit agreed OTS sum straight. obtain NDC. initiate CIBIL rebuild</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-loan-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: Digital Fintech Apps, Credit Cards &amp; ARCs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Small-ticket loan defaults manifest across various money structures with exact nuances: </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <Sparkles className="w-4 h-4 text-[#1886ff]" /> Fintech NBFC Digital Instant Loan Apps (KreditBee. Navi. MoneyTap. PaySense) </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Digital loan apps disburse smaller loans instantly but often deploy harsh automated calls bots. WhatsApp reminders. Online Dispute relief (ODR) notices. Because fintech NBFCs maintain high volume and rapid balance-sheet turnover. Their algorithms often generate automatic 40% to 60% closure discounts at the end of money quarters (March. September). </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <Calculator className="w-4 h-4 text-[#1886ff]" /> Multiple Small Micro-Loans Totaling ₹2 Lakh </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> clients often end up with 3 to 5 smaller loans (e.g. ₹30,000 + ₹50,000 + ₹60,000 + ₹60,000 across different apps). Attempting to juggle fragmented payments wastes scarce capital. A coordinated multi-loan debt closure strategy pools your funds. Prioritizes the most harsh lenders first. executes structured closures across all accounts simultaneously. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <CreditCard className="w-4 h-4 text-[#1886ff]" /> Credit Card own Loans vs. Standalone own Loans </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> If your ₹2 Lakh debt is a pre-approved &quot. Jumbo Loan&quot. or &quot. Loan on Credit Card&quot. The bank may block your underlying credit card and demand the full card limit plus the loan balance. During closure talks. The closure pacts must explicitly cover both the card and the loan to ensure total closure and issuance of an all-encompassing No Dues letter. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2"> <Building2 className="w-4 h-4 text-[#1886ff]" /> Loans Sold to Asset Reconstruction Companies (ARCs) </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> When traditional banks write off ₹2 Lakh own loans. They bundle them into portfolios and sell them to ARCs (such as CFM ARC. Phoenix ARC. ARCIL) at 20% to 30% of face value under Section 5 of the SARFAESI Act. ARCs possess enormous margin flexibility. Making them open to deep 60% to 75% deal closures. </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: Frequently Asked Questions Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions on Settling a ₹2 Lakh Personal Loan
              </h2>
              <p className="text-xs md:text-sm text-slate-600"> Click on any question below to view detailed legal and money answers checked by our debt relief experts: </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#1886ff] transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
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

            {/* SECTION 13: Regulatory Sources & Authorities */}
            <section id="regulatory-sources" className="scroll-target space-y-5 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Official Regulatory Citations &amp; Legal References
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed"> The legal frameworks. Dispute procedures. debt relief mechanisms referenced in this guide are straight anchored in valid Indian banking enactments and Reserve Bank of India Master Directions: </p>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc pl-5">
                <li> <strong className="text-slate-900 font-bold">Reserve Bank of India (RBI):</strong>{' '} Master Direction on Fair Practices Code for Lenders (Guidelines on agents and Grievance Redressal. Updated 2026). </li>
                <li> <strong className="text-slate-900 font-bold">Reserve Bank - Integrated RBI officer Scheme. 2021:</strong>{' '} legal Grievance Redressal Mechanism for trade Banks and NBFCs (<span className="font-mono text-xs">cms.rbi.org.in</span>). </li>
                <li> <strong className="text-slate-900 font-bold">Credit Information Companies (rule) Act. 2005 (CICRA):</strong>{' '} Section 21 regarding clients Rights. Credit Dispute relief. desk Reporting. </li>
                <li> <strong className="text-slate-900 font-bold">Payments and closure Systems Act. 2007 (PSSA):</strong>{' '} Section 25 regarding Dishonour of online Funds Transfer and NACH Mandates. </li>
                <li> <strong className="text-slate-900 font-bold">Indian Contract Act. 1872:</strong>{' '} Sections 73 and 74 regarding Breach of Contract and Civil Monetary Compensation. </li>
              </ul>

              {/* 5 Official Outbound Authority Link Badges */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-800 block mb-3 uppercase tracking-wider">
                  Official Outbound Authority Portals &amp; Statutory Registers:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs hover:shadow-sm transition-all flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#1886ff] group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Landmark className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                      <span className="truncate">RBI Official Portal (rbi.org.in)</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff] flex-shrink-0 ml-1" />
                  </a>

                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs hover:shadow-sm transition-all flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#1886ff] group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="truncate">RBI Integrated Ombudsman (CMS)</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff] flex-shrink-0 ml-1" />
                  </a>

                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs hover:shadow-sm transition-all flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#1886ff] group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <TrendingUp className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                      <span className="truncate">TransUnion CIBIL Official</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff] flex-shrink-0 ml-1" />
                  </a>

                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs hover:shadow-sm transition-all flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#1886ff] group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Scale className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                      <span className="truncate">India Code Statutory Repository</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff] flex-shrink-0 ml-1" />
                  </a>

                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs hover:shadow-sm transition-all flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#1886ff] group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Gavel className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                      <span className="truncate">NALSA National Lok Adalat</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff] flex-shrink-0 ml-1" />
                  </a>

                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs hover:shadow-sm transition-all flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#1886ff] group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span className="truncate">National Cyber Crime Portal</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff] flex-shrink-0 ml-1" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Debt Resolution &amp; Legal Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/settle-1-lakh-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Settle ₹1 Lakh Loan
                  </Link>
                  <Link href="/mental-harassment-by-recovery-agents-legal-action" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    NACH Section 25 Defense
                  </Link>
                  <Link href="/section-138-cheque-bounce-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 138 Cheque Defense
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get No Dues Certificate (NOC)
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
                  </Link>
                  <Link href="/lok-adalat-personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Lok Adalat Settlement
                  </Link>
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Settlement Letter
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
                  <p className="text-[11px] font-semibold text-[#1886ff]"> Legal &amp. Debt relief experts </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed"> Specialized in banking compliance. Small-ticket loan dispute relief. NPA closure talks with deep expertise resolving own loan and fintech debts across Indian banking forums. </p>
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

            {/* Card 2: Emergency CTA Card */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL DEBT RELIEF
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug"> Defaulting on a ₹2 Lakh own Loan? </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal"> Our debt relief experts settle straight with banks to stop claims threats. Secure a 55% to 70% loan waiver. protect your legal rights. </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Evaluate Your ₹2 Lakh Settlement Options
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
                  <span>Direct Bank Settlement • RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Advantage</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>Zero Upfront Risk:</strong> Success-linked closure fees.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>Direct Bank wire transfer:</strong> Zero middleman fund holding.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>RBI &amp. CICRA Compliance:</strong> 100% lawful dispute handling.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>Pan-India Representation:</strong> Dedicated debt relief specialists.</span> </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Debt Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/services/personal-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug"> own Loan closure Services </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full compromise settlement blueprint &rarr;</span>
                </Link>

                <Link
                  href="/ecs-nach-bounce-legal-notice-section-25"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug"> NACH Bounce Section 25 Notice Defense </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal reply and dispute guide &rarr;</span>
                </Link>

                <Link
                  href="/improve-cibil-after-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug"> Rebuild CIBIL Score After closure </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Step-by-step credit repair strategy &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
