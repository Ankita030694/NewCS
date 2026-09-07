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
  FileText,
  HelpCircle,
  TrendingUp,
  BookOpen,
  Building2,
  DollarSign,
  Check,
  Lock,
  Phone,
  CreditCard,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  FileCheck,
  Layers,
  Ban,
  HeartHandshake,
  AlertTriangle
} from 'lucide-react';

export default function PensionAttachmentForLoanRecoveryClient() {
  const [activeId, setActiveId] = useState<string>('executive-summary');
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
    { id: 'executive-summary', label: 'Executive Summary & Crux' },
    { id: 'pension-protection-cpc-dynamics', label: '1. Pension Protection & CPC Rules' },
    { id: 'financial-breakdown-settlement-math', label: '2. Penal Inflation & Settlement Math' },
    { id: 'pension-remedies-comparison-matrix', label: '3. Pension Remedies Legal Matrix' },
    { id: 'cibil-algorithm-credit-restoration', label: '4. CIBIL Score & CICRA Remedies' },
    { id: 'infographic-overview', label: 'Visual Blueprint: Pension Defense' },
    { id: 'step-by-step-defense-sop', label: '5. 6-Stage Pension Defense SOP' },
    { id: 'statutory-notice-defense-rights', label: '6. Statutory Notice Defense & Rights' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance Redressal Matrix' },
    { id: 'chronological-timeline-milestones', label: '8. Delinquency to Resolution Timeline' },
    { id: 'specialized-pension-scenarios', label: '9. Specialized Pension Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank attach my pension account for unpaid loan dues?',
      a: 'No. Under Section 60(1)(g) of the Code of Civil Procedure (CPC) and Section 11 of the Pensions Act, 1871, pension stipends and government retirement funds are strictly exempt from court attachment or execution warrants.'
    },
    {
      q: 'Can a bank exercise the right of set-off against my pension account?',
      a: 'No. While banks possess a general lien under Section 171 of the Indian Contract Act, judicial precedents confirm that statutory pension protection overrides banker set-off rights. Banks cannot unilaterally siphon pension funds for loan defaults.'
    },
    {
      q: 'Does statutory attachment protection cover commuted pension and gratuity?',
      a: 'Yes. The Supreme Court of India and High Courts have consistently held that gratuity, commuted pension, and Employee Provident Fund (EPF) retain statutory immunity under Section 60 CPC even when credited into the retiree savings account.'
    },
    {
      q: 'What can I do if a bank freezes my pension account?',
      a: 'You can serve an immediate legal notice citing Section 60(1)(g) CPC, submit an unfreeze representation to the Branch Manager, and escalate the violation to the Bank Principal Nodal Officer and RBI Banking Ombudsman.'
    },
    {
      q: 'Can loan recovery agents harass senior citizens at home?',
      a: 'Absolutely not. RBI Fair Practices Code strictly prohibits threatening language, unannounced visits outside 8:00 AM to 7:00 PM, contacting neighbors, or intimidating senior citizens. Violations can be reported directly to police and the RBI.'
    },
    {
      q: 'Can a civil court issue an arrest warrant against a senior citizen for loan default?',
      a: 'No. Defaulting on an unsecured personal loan or credit card is purely a civil dispute. Under Indian civil law, non-repayment due to financial inability is not a criminal offense, and no civil court issues arrest warrants for honest insolvency.'
    },
    {
      q: 'What happens to a senior citizen loan after death?',
      a: 'For unsecured personal loans and credit cards, the legal heirs are not personally liable to repay the outstanding debt. The bank cannot attach family assets or inherited pensions unless the heirs were formal co-borrowers or guarantors.'
    },
    {
      q: 'How does One-Time Settlement (OTS) work for retired borrowers?',
      a: 'Under RBI Stressed Assets guidelines, banks evaluate genuine retirement hardships and medical distress to sanction a compromise One-Time Settlement (OTS), waiving 100% of penal interest and discounting 40% to 55% of the principal balance.'
    },
    {
      q: 'Does settling a loan impact a pensioner\'s joint accounts with family?',
      a: 'No. Completing an OTS discharges the debt liability entirely. Once the bank issues a stamped No Dues Certificate (NDC), all recovery proceedings, internal flags, and threats against associated accounts are permanently revoked.'
    },
    {
      q: 'How can a senior citizen rebuild CIBIL score after loan settlement?',
      a: 'After settlement, ensure the bank updates the tradeline balance to zero. Under Section 21 of CICRA 2005, submit your NDC to credit bureaus. Within 12 to 18 months, maintaining a secured credit card will restore your credit score back to 750+.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white font-sans">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
            <Scale className="w-3.5 h-3.5 text-blue-200" />
            <span>Section 60(1)(g) CPC &amp; Senior Citizen Pension Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can Banks Legally Attach Pension Funds for Loan Recovery?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Understand your absolute statutory immunity under Section 60 CPC and Section 11 of the Pensions Act. Learn how to stop illegal bank liens, halt recovery agent harassment, and negotiate a lawful debt settlement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your Pension: Consult Us</span>
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
                  <span>Statutory Immunity</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Section 60(1)(g) CPC, Pensions Act 1871 &amp; Supreme Court rulings.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box with #1886ff Left Border) */}
            <div
              id="executive-summary"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: SENIOR CITIZEN PENSION ATTACHMENT DEFENSE</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Senior citizens in India enjoy robust, non-negotiable statutory safeguards against bank attachments, court garnishments, and coercive debt recovery:
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Absolute Statutory Immunity:</strong> Under Section 60(1)(g) CPC and Section 11 of the Pensions Act, pension stipends, gratuity, and EPF balances are strictly exempt from court attachment.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Illegal Banker Set-Off:</strong> Banks cannot unilaterally exercise Section 171 banker lien to debit or freeze dedicated retirement pension accounts for unpaid loans.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Zero Arrest or Family Liability:</strong> Loan default is purely a civil dispute; civil courts never issue arrest warrants for insolvency, nor are non-borrowing family heirs liable.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Anti-Harassment Shield:</strong> RBI Fair Practices Code strictly prohibits threatening phone calls, unannounced home visits, and debt harassment against senior citizens.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Compromise OTS Relief:</strong> Retired borrowers can settle unmanageable loan liabilities at a 40% to 55% discount through formal bank One-Time Settlement.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: DEBT ECONOMICS & NPA DYNAMICS */}
            <section id="pension-protection-cpc-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Foundations &amp; Banking Norms</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Pension Protection: Section 60 CPC &amp; Debt Economics
              </h2>
              
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many senior citizens in India find themselves trapped in unmanageable debt due to escalating post-retirement healthcare costs, sudden family emergencies, or co-signing personal loans for relatives. When regular EMI payments become unsustainable on fixed pension incomes, aggressive recovery departments often issue alarming threats, claiming that the bank will seize monthly pension disbursements, freeze savings accounts, or initiate court warrants to confiscate retirement gratuities.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                These recovery threats directly contradict Indian statutory law. Under <strong>Section 60(1)(g) of the Code of Civil Procedure, 1908 (CPC)</strong>, stipends and pensions allowed to pensioners of the government or payable out of any service family pension fund are expressly exempted from civil attachment and court execution. Furthermore, <strong>Section 11 of the Pensions Act, 1871</strong> establishes that no pension granted by the government on account of past services can be seized or attached by any process of law at the instance of a creditor.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                From a banking balance sheet perspective, once an unsecured credit card or personal loan defaults past 90 days, it is classified as a Non-Performing Asset (NPA) under Reserve Bank of India prudential norms. Because unsecured loans carry no underlying physical collateral for SARFAESI actions, and statutory pension immunity renders post-decree salary garnishment legally impossible, lending institutions recognize that protracted litigation offers negligible commercial yield. Consequently, banks actively prefer negotiating a structured One-Time Settlement (OTS) to recover core principal capital.
              </p>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis &amp; Debt Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: True Dues vs Settlement Math
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a senior citizen misses consecutive loan installments, the lender ledger balloons rapidly. Banks automatically apply compound penal interest, late payment surcharges, cheque bounce charges, and administrative recovery costs on top of the original principal. Within 12 to 18 months of delinquency, these unauthorized additions frequently inflate the claimed outstanding balance by 35% to 70% above the genuine borrowed principal.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During legal debt resolution negotiations, CredSettle performs a comprehensive forensic audit of the loan account to strip away all capitalized penal charges and unnotified fees. Because the bank has already made 100% provisioning against the bad asset on its books, our professionals leverage the borrower’s senior citizen status, medical hardship records, and fixed pension constraints to secure a substantial 40% to 55% waiver against the total claimed liability.
              </p>

              {/* Settlement Math Representative Calculation Card */}
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 sm:p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Case Study Math: Retired Pensioner Personal Loan Default
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                      Representative Breakdown: ₹8,50,000 Total Bank Demand vs. 52% OTS Discharge
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                    Settlement Haircut: 52% Total Waiver
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <span className="text-slate-500 block mb-1">Sanctioned Principal Balance</span>
                    <span className="text-base font-bold text-slate-900">₹5,10,000</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">True capital baseline</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <span className="text-slate-500 block mb-1">Compound Penal &amp; Overdue Dues</span>
                    <span className="text-base font-bold text-red-600">₹3,40,000</span>
                    <span className="text-[10px] text-red-500 block mt-0.5">Accumulated non-principal fees</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <span className="text-slate-500 block mb-1">Total Bank Claimed Demand</span>
                    <span className="text-base font-bold text-slate-900">₹8,50,000</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">Inflated recovery figure</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200">
                    <span className="text-[#1886ff] font-bold block mb-1">Final Sanctioned OTS Sum</span>
                    <span className="text-base font-bold text-blue-950">₹4,08,000</span>
                    <span className="text-[10px] text-[#1886ff] block mt-0.5">100% penal waiver + 20% principal discount</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  By presenting documented medical expenses and invoking statutory pension protections under Section 60 CPC, the retired borrower eliminated all penal interest and closed the entire liability in two manageable installments with a stamped No Dues Certificate.
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="pension-remedies-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Layers className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Legal Matrix: Pension Attachment vs Debt Remedies
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the critical legal distinctions between various debt recovery actions and borrower defense mechanisms ensures that senior citizens can protect their hard-earned retirement savings effectively:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left border-collapse text-xs divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 min-w-[140px]">Recovery Mechanism</th>
                      <th className="p-3 min-w-[150px]">Governing Legal Statute</th>
                      <th className="p-3 min-w-[130px]">Pension Impact</th>
                      <th className="p-3 min-w-[180px]">Legal Vulnerability &amp; Limits</th>
                      <th className="p-3 min-w-[170px]">Recommended Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-[#1886ff]">Court Garnishee Order</td>
                      <td className="p-3">Order XXI Rule 46 CPC</td>
                      <td className="p-3 font-semibold text-emerald-700">Zero (Fully Exempt)</td>
                      <td className="p-3">Section 60(1)(g) CPC expressly prohibits execution warrants against pension stipends.</td>
                      <td className="p-3">File an objection memo citing Section 60(1)(g) CPC before the executing civil judge.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Banker&apos;s Right of Set-Off</td>
                      <td className="p-3">Section 171 Contract Act</td>
                      <td className="p-3 font-semibold text-amber-700">High (If in same bank)</td>
                      <td className="p-3">Banks attempt internal debit; overridden by Supreme Court rulings protecting pension character.</td>
                      <td className="p-3">Issue a formal statutory notice to unfreeze funds and shift pension to a separate nationalized bank.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Summary Suit / DRT Claim</td>
                      <td className="p-3">Order XXXVII CPC / RDB Act</td>
                      <td className="p-3 font-semibold text-emerald-700">Zero on Pension</td>
                      <td className="p-3">Judicial decrees cannot attach retirement gratuity, EPF, or family pension funds.</td>
                      <td className="p-3">File a leave to defend demonstrating bona fide financial distress and propose an OTS.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Lok Adalat Settlement</td>
                      <td className="p-3">Legal Services Authorities Act</td>
                      <td className="p-3 font-semibold text-slate-800">Voluntary Mutual Term</td>
                      <td className="p-3">Consent award passed by judicial bench; final and non-appealable in any court.</td>
                      <td className="p-3">Ensure settlement terms are fully vetted and affordable before signing the compromise award.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-emerald-700">One-Time Settlement (OTS)</td>
                      <td className="p-3">RBI Stressed Assets Framework</td>
                      <td className="p-3 font-semibold text-emerald-700">100% Debt Relief</td>
                      <td className="p-3">Bilateral compromise agreement providing 40% to 55% discount and full liability release.</td>
                      <td className="p-3 font-bold text-emerald-700">Recommended: Secure a written bank sanction letter and obtain a stamped NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: TECHNICAL CIBIL ALGORITHM & SCORING MATH */}
            <section id="cibil-algorithm-credit-restoration" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Algorithms</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Impact: Senior Citizen Score Restoration
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a loan or credit card goes into default, credit information bureaus in India compute the credit score degradation across five weighted algorithmic variables. Understanding this distribution helps senior citizens plan effective post-settlement credit rehabilitation:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-xs text-center">
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                  <span className="block text-lg font-black text-[#1886ff]">35%</span>
                  <span className="text-slate-800 font-bold block mt-1">Payment History</span>
                  <span className="text-[10px] text-slate-500">Consecutive DPD &amp; NPA status</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                  <span className="block text-lg font-black text-indigo-600">30%</span>
                  <span className="text-slate-800 font-bold block mt-1">Credit Utilization</span>
                  <span className="text-[10px] text-slate-500">Revolving credit card debt ratio</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                  <span className="block text-lg font-black text-slate-700">15%</span>
                  <span className="text-slate-800 font-bold block mt-1">Credit Mix</span>
                  <span className="text-[10px] text-slate-500">Secured vs unsecured balance</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                  <span className="block text-lg font-black text-slate-700">10%</span>
                  <span className="text-slate-800 font-bold block mt-1">Inquiry Velocity</span>
                  <span className="text-[10px] text-slate-500">Frequency of hard loan inquiries</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                  <span className="block text-lg font-black text-slate-700">10%</span>
                  <span className="text-slate-800 font-bold block mt-1">Credit Vintage</span>
                  <span className="text-[10px] text-slate-500">Average age of loan tradelines</span>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During unresolved default, credit scores typically plunge from prime tiers (750+) down to 500-580. Once a One-Time Settlement is completed and the bank issues a stamped No Dues Certificate, the reported outstanding balance drops to zero. Under <strong>Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong>, borrowers have the statutory right to mandate that bureaus update inaccurate or overdue records. By managing a fixed-deposit-backed credit card with timely payments, senior citizens can successfully rebuild their CIBIL score back to 750+ within 12 to 18 months.
              </p>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Visual Blueprint: Pension Protection &amp; Legal Defense
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Review this visual blueprint detailing the statutory immunity of pension funds under Section 60 CPC, restrictions on banker lien set-offs, and the structured CredSettle debt resolution protocol:
              </p>

              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 sm:p-5 overflow-hidden space-y-3">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                  <Image
                    src="/images/infographics/pension-attachment-for-loan-recovery.jpg"
                    alt="Can Banks Legally Attach Pension Funds for Loan Recovery in India Infographic"
                    fill
                    sizes="(max-width: 1200px) 100vw, 900px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Official CredSettle legal guidance on Section 60(1)(g) CPC and senior citizen debt protection.</span>
                  <a
                    href="/images/infographics/pension-attachment-for-loan-recovery.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-bold hover:underline inline-flex items-center gap-1 flex-shrink-0"
                  >
                    <span>High-Res</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-defense-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Action Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP: 6-Stage Pension Defense Protocol
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you are a retired senior citizen facing loan default or aggressive recovery action, executing this structured legal standard operating procedure ensures complete asset protection and debt closure:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">01</span>
                    <h3 className="font-bold text-slate-900 text-sm">Account Audit &amp; Segregation</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Perform a forensic audit of bank statements to isolate pension disbursements from other funds and ensure the pension account is held in an unlinked nationalized institution.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">02</span>
                    <h3 className="font-bold text-slate-900 text-sm">Hardship Dossier Compilation</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Compile medical bills, age certificates, fixed pension slips, and dependent care costs into an authoritative hardship portfolio demonstrating genuine inability to pay full dues.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">03</span>
                    <h3 className="font-bold text-slate-900 text-sm">Section 60(1)(g) Legal Notice</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Serve a formal legal representation to the lender citing statutory pension exemptions under CPC and RBI Fair Practices Code, barring recovery agents from visiting your residence.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">04</span>
                    <h3 className="font-bold text-slate-900 text-sm">Direct SARB Negotiations</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Initiate bilateral negotiations directly with the bank Stressed Assets Recovery Branch (SARB) to eliminate all penal charges and establish a 40% to 55% settlement baseline.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">05</span>
                    <h3 className="font-bold text-slate-900 text-sm">Sanction Letter Legal Audit</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Verify the official bank OTS sanction letter to confirm exact payment dates, total waiver terms, and explicit clauses promising complete debt discharge and tradeline closure.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">06</span>
                    <h3 className="font-bold text-slate-900 text-sm">Remittance &amp; NDC Issuance</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Remit the agreed settlement amount directly to the bank loan account, collect a stamped No Dues Certificate, and ensure the bank updates all credit bureaus with zero balance.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & LEGAL RIGHTS */}
            <section id="statutory-notice-defense-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense: Senior Citizen Legal Rights
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Senior citizen borrowers are safeguarded by robust constitutional, statutory, and judicial doctrines against coercive bank recovery practices:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">Section 60(1)(g) CPC &amp; Pensions Act</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pensions, gratuities, and family allowances enjoy complete statutory immunity from civil execution decrees, attachment orders, and creditor seizures under Indian civil law.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">Section 25 PSSA &amp; NI Act Defenses</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Senior citizens facing NACH or cheque bounce notices can defend on grounds of bona fide financial incapacity, lack of fraudulent mens rea, and willingness to settle principal dues.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">Supreme Court Judicial Precedents</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Landmark rulings (Radhey Shyam Gupta v. Punjab National Bank) affirm that retirement funds do not lose their exempt character even after being deposited in the pensioner&apos;s bank account.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <HeartHandshake className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">RBI Fair Practices &amp; Senior Dignity</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders must respect the dignity of elderly citizens. Recovery visits outside prescribed hours, intimidation, shouting, or contacting family members violate RBI directives and invite penal action.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER ESCALATION MATRIX */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Escalation Matrix: Institutional Redressal
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a lender unlawfully freezes your pension account, attempts unauthorized debits, or unleashes abusive recovery agents, escalate systematically through this institutional grievance hierarchy:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Tier 1: 7-10 Days</span>
                  <h3 className="font-bold text-slate-900 text-sm">Branch Manager &amp; GRO</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a formal written protest citing Section 60(1)(g) CPC and demand immediate reversal of unauthorized holds or illegal auto-debits on your pension account.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Tier 2: 14-21 Days</span>
                  <h3 className="font-bold text-slate-900 text-sm">Principal Nodal Officer</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalate unresolved grievances to the bank Principal Nodal Officer (PNO) highlighting violations of RBI Fair Practices Code and senior citizen protection guidelines.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Tier 3: 30 Days</span>
                  <h3 className="font-bold text-slate-900 text-sm">RBI Integrated Ombudsman</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File an official digital complaint on cms.rbi.org.in for compensation against unlawful account restrictions, mental distress, and agent harassment.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-timeline-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Procedural Timeline: Default to Lien Revocation
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The chronological progression of senior citizen loan delinquency, institutional recovery stages, and the optimal window for securing a compromise settlement:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left border-collapse text-xs divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 min-w-[120px]">Timeline Stage</th>
                      <th className="p-3 min-w-[140px]">Account Classification</th>
                      <th className="p-3 min-w-[180px]">Creditor Recovery Action</th>
                      <th className="p-3 min-w-[180px]">Senior Citizen Protection Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-[#1886ff]">Days 1 to 90</td>
                      <td className="p-3">SMA-0, 1 &amp; 2 Delinquency</td>
                      <td className="p-3">Automated payment reminders, telephonic notices, and overdue interest levies.</td>
                      <td className="p-3">Audit debts; cancel NACH mandates in same bank; isolate pension account.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 91 to 180</td>
                      <td className="p-3">NPA Classification</td>
                      <td className="p-3">Legal recall notice issued; third-party recovery agency assignment.</td>
                      <td className="p-3">Issue anti-harassment notice; submit medical and senior citizen hardship dossier.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Months 6 to 12</td>
                      <td className="p-3">Legal Notice Stage</td>
                      <td className="p-3">Section 138 NI Act or Section 25 PSSA summons; civil suit notices.</td>
                      <td className="p-3">Respond through legal counsel; assert Section 60 CPC pension immunity.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Months 12 to 18</td>
                      <td className="p-3">Stressed Assets Review</td>
                      <td className="p-3">100% provisioning completed; bank writes off bad debt on internal ledger.</td>
                      <td className="p-3">Engage bank Stressed Assets Committee for an aggressive 40% to 55% OTS.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-emerald-700">Resolution Phase</td>
                      <td className="p-3">OTS Sanction &amp; Closure</td>
                      <td className="p-3">Formal sanction letter issued; complete withdrawal of all legal notices.</td>
                      <td className="p-3 font-bold text-emerald-700">Remit settlement sum, obtain stamped NDC, and verify zero CIBIL balance.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-pension-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: Commuted Pension &amp; EPF Funds
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Different categories of retirement assets and account holding structures require specific legal handling under Indian banking regulations:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Commuted Pension vs Monthly Pension
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Both monthly pension stipends and commuted lump-sum pension payments retain absolute immunity from attachment under Section 60(1)(g) CPC, provided the funds are clearly traceable to retirement benefits.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Joint Pension Accounts with Spouse
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A bank cannot freeze or debit a joint pension savings account held with a non-borrowing spouse or family member. Lack of debt mutuality bars creditors from attaching co-holder funds.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                    Gratuity &amp; EPF Retirement Corpus
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 10 of the EPF Act and the Payment of Gratuity Act, terminal retirement benefits cannot be attached by civil courts or appropriated by banks for unsecured loan defaults.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Ban className="w-4 h-4 text-[#1886ff]" />
                    Unlawful Auto-Debits &amp; NACH Mandates
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a lending bank repeatedly executes automated ECS/NACH debits against your dedicated pension account, you have the legal right to revoke the standing mandate in writing under NPCI guidelines.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: COMPANY PROFILE COMPONENT */}
            <div id="company-profile" className="scroll-target pt-1">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Pension Loan Settlement
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to view detailed legal answers verified by our banking and debt resolution professionals:
              </p>

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

            {/* SECTION 13: REGULATORY SOURCES & AUTHORITIES */}
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
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Section 60(1)(g) (Exemption of Stipends and Pensions from Attachment), Ministry of Law and Justice.
                </li>
                <li>
                  <strong>Pensions Act, 1871:</strong> Section 11 (Exemption of Pension from Attachment by Process of Court).
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 171 (General Lien of Bankers) and Limits of Debt Mutuality.
                </li>
                <li>
                  <strong>Payment of Gratuity Act, 1972:</strong> Section 13 (Protection of Gratuity against Court Attachment).
                </li>
                <li>
                  <strong>Reserve Bank of India Master Directions:</strong> Fair Practices Code for Lenders and Guidelines on Recovery Agent Conduct.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>Reserve Bank of India (rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>RBI CMS Portal (cms.rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>CIBIL India (cibil.com)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>India Code Portal (indiacode.nic.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>NALSA Legal Services (nalsa.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>National Cyber Crime Portal (cybercrime.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/can-bank-freeze-my-savings-account-for-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Freeze Savings Account Rules
                  </Link>
                  <Link href="/can-bank-deduct-money-from-another-account" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 171 Banker Set-Off
                  </Link>
                  <Link href="/garnishee-order-bank-account-freeze-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Garnishee Order Defense
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Protection
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan Arbitration Notice
                  </Link>
                  <Link href="/bank-demanding-full-payment-for-loan-closure" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Demanding Full Payment
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
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
                  <p className="text-[11px] font-semibold text-[#1886ff]">
                    Legal &amp; Debt Resolution Professional
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized in senior citizen debt protection, Section 60 CPC pension exemptions, civil execution defense, and institutional loan settlements.
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

            {/* Card 2: Emergency CTA Card (#2452ae) */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Pension Threatened by Bank?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal experts enforce Section 60 CPC pension protections, stop recovery harassment, and negotiate a 40% to 55% settlement.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Pension: Consult Us
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
                  <span>Direct Bank Settlement • CPC Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked settlement fee structure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> Zero middleman fund holding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CPC &amp; CICRA Compliance:</strong> 100% lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated senior citizen protection.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/can-bank-freeze-my-savings-account-for-loan"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank Freeze My Savings Account for Loan?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Account freeze legal rights &rarr;</span>
                </Link>

                <Link
                  href="/can-bank-deduct-money-from-another-account"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank Deduct Money from Another Account?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Section 171 banker set-off rules &rarr;</span>
                </Link>

                <Link
                  href="/garnishee-order-bank-account-freeze-loan"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Garnishee Order for Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Order XXI Rule 46 CPC defense &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
