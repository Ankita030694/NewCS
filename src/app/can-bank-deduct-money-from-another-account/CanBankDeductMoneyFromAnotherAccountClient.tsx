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
  Landmark,
  FileCheck,
  ShieldAlert,
  Layers,
  Ban
} from 'lucide-react';

export default function CanBankDeductMoneyFromAnotherAccountClient() {
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
    { id: 'bankers-right-of-set-off', label: '1. Banker’s Right of Set-Off (Sec 171)' },
    { id: 'financial-breakdown-settlement-math', label: '2. Penal Inflation & Settlement Math' },
    { id: 'account-deduction-comparison-matrix', label: '3. Legal Deduction Comparison Matrix' },
    { id: 'cibil-algorithm-credit-restoration', label: '4. CIBIL Algorithm & CICRA Remedies' },
    { id: 'infographic-overview', label: 'Visual Blueprint: Set-Off Rules' },
    { id: 'step-by-step-defense-sop', label: '5. 6-Stage Defense & Protection SOP' },
    { id: 'statutory-notice-defense-rights', label: '6. Statutory Notice Defense & Rights' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance Redressal Matrix' },
    { id: 'chronological-timeline-milestones', label: '8. 180-Day Resolution Timeline' },
    { id: 'specialized-banking-scenarios', label: '9. Specialized Account Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank deduct money from another bank account without my permission?',
      a: 'No. A lending bank cannot automatically debit or seize funds from your account held in a completely separate, third-party bank without an explicit civil court attachment decree, a Garnishee Order under Order XXI Rule 46 of the CPC, or a Debt Recovery Tribunal (DRT) recovery certificate. The Banker\'s Right of Set-Off under Section 171 of the Indian Contract Act only applies to accounts held within the same banking institution.'
    },
    {
      q: 'What is the Banker\'s Right of Set-Off under Section 171 of the Indian Contract Act?',
      a: 'Section 171 of the Indian Contract Act, 1872 grants banks a general banker\'s lien and right of set-off. This legal mechanism allows a bank to combine two or more accounts maintained by the same borrower within the same bank, using positive balances from a savings or current account to liquidate defaulted loan dues, provided there is mutuality of debt.'
    },
    {
      q: 'Can a bank debit funds from my savings account in a different branch of the same bank?',
      a: 'Yes. Under Indian banking jurisprudence, all branches of a commercial bank constitute a single corporate entity. If you have an outstanding default in one branch and a credit balance in another branch of the exact same bank, the bank can exercise an inter-branch right of set-off to adjust the overdue liability.'
    },
    {
      q: 'Can a bank deduct money from a joint account for an individual personal loan default?',
      a: 'No, unless both account holders are joint borrowers or co-guarantors for that specific loan. The right of set-off requires strict mutuality of parties and capacity. Funds standing in a joint account owned with a spouse or partner cannot be seized to satisfy the individual, sole debt of only one account holder.'
    },
    {
      q: 'Is it legal for a bank to freeze 100% of my salary account without prior notice?',
      a: 'No. Arbitrary freezing of an entire salary account without reasonable advance notice violates the Reserve Bank of India (RBI) Fair Practices Code and natural justice principles. Furthermore, under Section 60(1)(i) of the Code of Civil Procedure, basic salary allowances necessary for personal subsistence are legally exempt from total attachment.'
    },
    {
      q: 'Can a bank deduct funds from my Public Provident Fund (PPF) or pension account?',
      a: 'No. Statutory retirement funds, including Public Provident Fund (PPF), Employee Provident Fund (EPF), and central or state government pensions, enjoy absolute statutory immunity from bank lien, set-off, or civil court attachment under Section 60 of the CPC and Section 10 of the EPF Act.'
    },
    {
      q: 'How can I stop unauthorized auto-debits or NACH mandates?',
      a: 'You can formally revoke your electronic NACH or e-Mandate consent by submitting a written mandate cancellation request to your home branch and sending a formal revocation notice to the lender under Section 25 of the Payment and Settlement Systems Act, 2007. Banks are mandated by the RBI to honor cancellation requests immediately.'
    },
    {
      q: 'What should I do if a bank illegally transfers money from my account?',
      a: 'If a bank executes an unlawful set-off without mutuality or proper notice, immediately file a written grievance with the branch manager and the bank\'s Principal Nodal Officer (PNO). If the bank fails to reverse the illegal deduction within 30 days, file a statutory complaint with the RBI Integrated Ombudsman via cms.rbi.org.in.'
    },
    {
      q: 'Can a bank attach my third-party bank accounts during loan recovery proceedings?',
      a: 'A bank can only attach funds in third-party banks after obtaining a formal judicial order. In personal loans exceeding ₹20 Lakhs, lenders can seek recovery orders through the Debt Recovery Tribunal (DRT). For smaller loans, lenders must obtain a civil court decree and subsequent Garnishee Order under Order XXI Rule 46 of the CPC.'
    },
    {
      q: 'How does One-Time Settlement (OTS) protect my bank accounts from future set-off?',
      a: 'A formal One-Time Settlement (OTS) sanctioned by the bank\'s Stressed Assets Resolution Branch completely extinguishes all underlying loan liabilities. Once the agreed compromise sum is paid, the bank issues a stamped No Dues Certificate (NDC), removes all internal lien-marks, and cancels the right of set-off permanently.'
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
            <span>Banking Law &amp; Section 171 Set-Off Protections</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can a Bank Deduct Money from Another Account?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Understand the strict statutory boundaries of the Banker’s Right of Set-Off under Section 171 of the Indian Contract Act. Learn why lending banks cannot debit third-party accounts without court decrees, how inter-branch set-offs operate, and how to safeguard essential salary funds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Facing Unauthorized Account Deductions? Get Legal Defense</span>
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
                  <span>Statutory Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by the Indian Contract Act 1872, CPC Section 60, &amp; RBI Fair Practices Code.
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
                <span>EXECUTIVE SUMMARY: BANK SET-OFF &amp; DEDUCTION RULES</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Key statutory rules governing bank account deductions, set-offs, and borrower legal protections in India:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Third-Party Banks Protected:</strong> Lenders cannot debit funds from other banks without a court Garnishee Order.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Same-Bank Set-Off Allowed:</strong> Banks can combine intra-bank balances under Section 171 of the Indian Contract Act.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Debt Mutuality Required:</strong> Joint accounts with non-borrowers cannot be seized for individual loan defaults.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">PF &amp; Pension Immunity:</strong> PPF, EPF, and pensions have absolute statutory protection under Section 60 CPC.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Salary Subsistence Limits:</strong> Freezing 100% of salary accounts violates Section 60 CPC subsistence norms.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">NACH Mandate Revocation:</strong> Borrowers can cancel electronic auto-debits under Section 25 PSSA in writing.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Prior Notice Mandatory:</strong> Banks must issue reasonable advance notice before exercising any account set-off.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">OTS Extinguishes Liens:</strong> A formal One-Time Settlement permanently cancels set-off rights with an NDC.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: DEBT ECONOMICS & BANKER'S RIGHT OF SET-OFF */}
            <section id="bankers-right-of-set-off" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Foundations &amp; NPA Dynamics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics: Banker’s Set-Off Under Section 171
              </h2>
              
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The question of whether a lending institution can arbitrarily deduct money from another bank account touches upon fundamental principles of Indian contract law and commercial banking operations. When an unsecured personal loan, credit card, or business credit line falls into arrears, borrowers frequently discover unexpected debits or frozen balances. The statutory foundation behind this action is the <strong>Banker’s General Lien and Right of Set-Off</strong> codified under <strong>Section 171 of the Indian Contract Act, 1872</strong>.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 171, bankers retain the legal right, in the absence of an express contract to the contrary, to retain as security for a general balance of account any goods, securities, or money bailed to them. The right of set-off is an equitable legal mechanism that enables a bank to combine two or more distinct accounts belonging to the exact same customer maintained within the same banking institution. If you maintain a delinquent personal loan account at Branch A and hold a positive balance in a savings account at Branch B of the same bank, the law treats all branches as constituent units of a single corporate entity. Consequently, the bank can apply your credit balance toward the liquidation of your overdue debt.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Crucially, this legal authority is subject to the strict doctrine of <em>mutuality of debt</em>. For a valid exercise of set-off, the debt owed to the bank and the money held by the bank must exist between the exact same parties in the exact same legal capacity. A bank cannot apply funds belonging to a third party, a trust, or a joint account holder who is not a party to the underlying loan agreement. Furthermore, this right is strictly intra-bank. A lender cannot reach into a separate, third-party bank to debit funds unless it has secured an enforceable decree and a formal Garnishee Order from a competent civil court.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In the context of retail banking distress, debt accounts transition through established regulatory delinquency stages mandated by the Reserve Bank of India. Delinquencies commence as Special Mention Accounts (SMA-0 for 1-30 days overdue, SMA-1 for 31-60 days, and SMA-2 for 61-90 days). Once non-payment surpasses 90 days, the account is classified as a Non-Performing Asset (NPA). At this stage, under RBI Prudential Norms, the lender is compelled to allocate Tier-1 capital provisioning ranging from 15% to over 50%. Because unsecured loans carry no mortgage or hypothecated security under Section 31(g) of the SARFAESI Act, banks actively attempt internal set-offs while simultaneously becoming commercially open to compromise One-Time Settlements (OTS) to recover capital and avoid prolonged litigation.
              </p>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis &amp; Debt Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Settlement Math &amp; Penal Dues
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on monthly loan installments, commercial lending algorithms automatically superimpose a complex pyramid of compounding penal charges, default interest rates, ECS bounce penalties, and overdue administrative fees. Over a period of 6 to 12 months, these accumulated ancillary charges frequently inflate the nominal outstanding balance by 40% to 80% above the genuine principal disbursed.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the mathematical dissection between pure principal exposure and capitalized penal interest is essential for establishing an effective defense. When lenders attempt to freeze accounts or set off balances, they often demand the total inflated figure. However, during formal dispute resolution, our legal team isolates the true contractual baseline and leverages the bank’s capital provisioning requirements to negotiate substantial waivers.
              </p>

              {/* Settlement Math Representative Calculation Card */}
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 sm:p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Case Study Math: 180-Day NPA Unsecured Exposure
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                      Representative Breakdown: ₹8,00,000 Total Demand vs. 55% OTS Compromise
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                    Settlement Haircut: 55% Total Waiver
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <span className="text-slate-500 block mb-1">Sanctioned Principal Balance</span>
                    <span className="text-base font-bold text-slate-900">₹5,00,000</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">True capital baseline</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <span className="text-slate-500 block mb-1">Accrued Penal &amp; Bounce Fees</span>
                    <span className="text-base font-bold text-red-600">₹3,00,000</span>
                    <span className="text-[10px] text-red-500 block mt-0.5">Compound penal interest</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <span className="text-slate-500 block mb-1">Bank Recovery Claim</span>
                    <span className="text-base font-bold text-slate-900">₹8,00,000</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">Total demand on record</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200">
                    <span className="text-[#1886ff] font-bold block mb-1">Final Sanctioned OTS Sum</span>
                    <span className="text-base font-bold text-blue-950">₹3,60,000</span>
                    <span className="text-[10px] text-[#1886ff] block mt-0.5">100% penal + 28% principal cut</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  By presenting documented hardship evidence and challenging improper inter-branch account freezes, the borrower eliminated ₹3,00,000 in unfair penal charges and secured an additional ₹1,40,000 principal discount, achieving complete debt discharge with a formal No Dues Certificate.
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="account-deduction-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Layers className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Legal Comparison: Same Bank vs Third-Party Account
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To navigate aggressive lender demands, borrowers must understand the precise legal boundaries separating lawful intra-bank set-offs from unlawful third-party fund seizures. The comparison matrix below outlines the five primary operational routes:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left border-collapse text-xs divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 min-w-[140px]">Recovery Route</th>
                      <th className="p-3 min-w-[150px]">Governing Statute</th>
                      <th className="p-3 min-w-[140px]">Permissible Without Court Order?</th>
                      <th className="p-3 min-w-[180px]">Impact on Salaried / Deposited Funds</th>
                      <th className="p-3 min-w-[160px]">Long-Term Resolution Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-[#1886ff]">Same-Bank Inter-Branch Set-Off</td>
                      <td className="p-3">Section 171 Indian Contract Act, 1872</td>
                      <td className="p-3 font-semibold text-emerald-700">Yes (Requires mutuality &amp; prior notice)</td>
                      <td className="p-3">Immediate ledger debit from savings or current account</td>
                      <td className="p-3">Challenge arbitrary lien &amp; file for Stressed Asset OTS</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Third-Party Bank Account Debit</td>
                      <td className="p-3">Banking Regulation Act, 1949</td>
                      <td className="p-3 font-bold text-red-600">Strictly Prohibited</td>
                      <td className="p-3">Zero access; third-party banks cannot debit without mandate</td>
                      <td className="p-3">Maintain primary salary in an untied independent bank</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Civil Court Garnishee Order</td>
                      <td className="p-3">Order XXI Rule 46 CPC, 1908</td>
                      <td className="p-3 font-semibold text-slate-700">No (Requires formal court decree)</td>
                      <td className="p-3">Judicially attached after trial; Section 60 subsistence exempt</td>
                      <td className="p-3">File Section 60 subsistence objection or compound debt</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-emerald-700">One-Time Settlement (OTS)</td>
                      <td className="p-3">RBI Stressed Assets Framework &amp; SARB Policy</td>
                      <td className="p-3 font-semibold text-emerald-700">Voluntary Bilateral Agreement</td>
                      <td className="p-3">All liens released; 40% to 55% discount on outstanding sum</td>
                      <td className="p-3 font-bold text-emerald-700">Recommended: Full permanent debt discharge with NDC</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Loan Restructuring / Rescheduling</td>
                      <td className="p-3">RBI Prudential Guidelines</td>
                      <td className="p-3 font-semibold text-slate-700">Voluntary Mutual Agreement</td>
                      <td className="p-3">Tenure extended; interest continues accumulating with zero haircut</td>
                      <td className="p-3">Suitable only if long-term monthly income is fully stable</td>
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
                4. Technical CIBIL Algorithm &amp; Section 21 CICRA Credit Restoration
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding how account liens, auto-debit bounces, and unresolved defaults interact with credit scoring models is critical for long-term financial recovery. Credit Information Companies in India (TransUnion CIBIL, Experian, CRIF High Mark, and Equifax) compute your three-digit credit score using an algorithmic weighting model composed of five distinct pillars:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-xs text-center">
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                  <span className="block text-lg font-black text-[#1886ff]">35%</span>
                  <span className="text-slate-800 font-bold block mt-1">Payment History</span>
                  <span className="text-[10px] text-slate-500">DPD tracking &amp; bounces</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                  <span className="block text-lg font-black text-indigo-600">30%</span>
                  <span className="text-slate-800 font-bold block mt-1">Credit Utilization</span>
                  <span className="text-[10px] text-slate-500">Revolving credit ratio</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                  <span className="block text-lg font-black text-slate-700">15%</span>
                  <span className="text-slate-800 font-bold block mt-1">Credit Mix</span>
                  <span className="text-[10px] text-slate-500">Secured vs. unsecured</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                  <span className="block text-lg font-black text-slate-700">10%</span>
                  <span className="text-slate-800 font-bold block mt-1">New Inquiries</span>
                  <span className="text-[10px] text-slate-500">Hard inquiry frequency</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                  <span className="block text-lg font-black text-slate-700">10%</span>
                  <span className="text-slate-800 font-bold block mt-1">Credit Age &amp; Depth</span>
                  <span className="text-[10px] text-slate-500">Tradeline longevity</span>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower defaults and the lender repeatedly marks Days Past Due (DPD) past 90 or 180 days, the credit score experiences a severe downward trajectory, typically plunging from 780+ down to the 500-580 band. Every consecutive bounce generated by automated NACH mandates further degrades the payment history parameter.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Executing a formal One-Time Settlement immediately stops the ongoing reporting of monthly default cycles. Upon payment of the settlement amount, the lender is statutorily mandated to report the outstanding balance as zero. Under <strong>Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong>, borrowers possess the statutory right to request correction of inaccurate tradelines by presenting their stamped No Dues Certificate. By introducing a low-limit secured credit card against a small fixed deposit and maintaining pristine repayment discipline for 12 to 24 months, borrowers successfully rebuild their CIBIL score back into the prime 750+ category.
              </p>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Visual Blueprint: Banker’s Set-Off Defense Rules
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Review this analytical 16:9 infographic summarizing the legal distinctions between same-bank set-offs under Section 171, third-party bank immunities, protected statutory funds, and the 6-step debt defense roadmap:
              </p>

              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 sm:p-5 overflow-hidden space-y-3">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                  <Image
                    src="/images/infographics/can-bank-deduct-money-from-another-account.jpg"
                    alt="Can Bank Deduct Money from Another Account Legal Infographic and Set-Off Rules"
                    fill
                    sizes="(max-width: 1200px) 100vw, 900px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Authoritative visual guide to Section 171 set-off limits, third-party bank protection, and RBI compliance.</span>
                  <a
                    href="/images/infographics/can-bank-deduct-money-from-another-account.jpg"
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

            {/* SECTION 6: STEP-BY-STEP DEFENSE SOP (6 STAGES) */}
            <section id="step-by-step-defense-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Action Plan</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP: 6-Stage Account Defense Blueprint
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When faced with aggressive recovery threats, unauthorized account liens, or impending NPA classification, executing a disciplined legal strategy ensures the complete protection of essential livelihood assets while positioning your file for an advantageous settlement:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">01</span>
                    <h3 className="font-bold text-slate-900 text-sm">Forensic Account Audit</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Examine your statement of accounts to segregate the disbursed principal from unconstitutional compound penal charges and unnotified administrative levies.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">02</span>
                    <h3 className="font-bold text-slate-900 text-sm">Hardship Dossier Compilation</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Assemble verified documentation of acute income disruption, medical emergencies, or business losses to establish bona fide financial distress under RBI norms.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">03</span>
                    <h3 className="font-bold text-slate-900 text-sm">Salary Account Segregation</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Instruct your employer payroll department to redirect monthly salary disbursements to an untied third-party banking institution to insulate living expenses from intra-bank lien.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">04</span>
                    <h3 className="font-bold text-slate-900 text-sm">Revocation of NACH Mandates</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Formally revoke electronic debit mandates under Section 25 PSSA in writing to halt recurring dishonor charges and eliminate grounds for quasi-criminal harassment.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">05</span>
                    <h3 className="font-bold text-slate-900 text-sm">Credit Committee Representation</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bypass third-party recovery agencies and submit a structured settlement proposal directly to the bank Stressed Assets Resolution Branch (SARB) for a 40% to 55% waiver.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">06</span>
                    <h3 className="font-bold text-slate-900 text-sm">Letter Vetting &amp; NDC Issuance</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rigorously review the Settlement Sanction Letter to ensure zero residual liability clauses, remit settlement funds directly, and secure a stamped No Dues Certificate.
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
                6. Statutory Notice Defense &amp; Essential Borrower Legal Protections
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When asserting legal rights against arbitrary banking actions, borrowers are protected by comprehensive statutory provisions across Indian jurisprudence. Rather than relying on generic informal communications, effective defense requires understanding how these statutory mechanisms operate:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">Section 25 PSSA: Electronic Mandate Revocation</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Payment and Settlement Systems Act, 2007, an electronic mandate is a revocable authorization. Submitting a written revocation eliminates civil bad faith claims and prevents lenders from triggering criminal summons for subsequent clearing failures.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">Section 60 CPC: Subsistence Salary Immunity</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 60(1)(i) of the Code of Civil Procedure explicitly exempts salary allowances necessary for personal and family subsistence from court attachment. Total freezes executed by banks without judicial sanction directly violate this statutory standard.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">Arbitration &amp; Perkins Eastman Rulings</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court of India in <em>Perkins Eastman</em> and <em>TRF Ltd.</em> established that lenders cannot unilaterally appoint sole arbitrators. Unilateral arbitral proceedings initiated to secure monetary recovery orders are legally voidable de jure under Section 12(5).
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">DRT Jurisdiction &amp; RBI Fair Practices</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Debt Recovery Tribunal holds statutory jurisdiction only for claims exceeding ₹20 Lakhs. For all retail loans, the RBI Fair Practices Code strictly prohibits workplace harassment, verbal intimidation, and unnotified operational account freezes.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER ESCALATION MATRIX */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Mechanism</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Grievance &amp; Regulatory Escalation Framework
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a bank executes an unauthorized debit or arbitrarily places a lien on your operational account, follow this structured three-tier regulatory hierarchy to enforce corrective action and unfreeze funds:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Level 1: 7-10 Days</span>
                  <h3 className="font-bold text-slate-900 text-sm">Grievance Redressal Officer (GRO)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a formal written complaint to the branch manager and the bank Internal Grievance Redressal Officer demanding reversal of unauthorized deductions.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Level 2: 14-21 Days</span>
                  <h3 className="font-bold text-slate-900 text-sm">Principal Nodal Officer (PNO)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalate unresolved complaints to the bank Principal Nodal Officer, citing violation of mutuality rules under Section 171 and requesting urgent OTS review.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Level 3: 30 Days</span>
                  <h3 className="font-bold text-slate-900 text-sm">RBI Integrated Ombudsman</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a statutory complaint on the RBI CMS portal (cms.rbi.org.in) under the Integrated Ombudsman Scheme, 2021 for financial restitution and compensation.
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
                8. Chronological Timeline: 180-Day Path From Delinquency to Settlement
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding how bank recovery departments progress from initial missed EMIs to legal action enables borrowers to take timely preventive measures:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left border-collapse text-xs divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 min-w-[120px]">Timeline</th>
                      <th className="p-3 min-w-[140px]">Account Status</th>
                      <th className="p-3 min-w-[180px]">Bank / Agency Action</th>
                      <th className="p-3 min-w-[180px]">Strategic Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-[#1886ff]">Days 1 to 30</td>
                      <td className="p-3">SMA-0 Delinquency</td>
                      <td className="p-3">Automated payment reminders and internal collection calls.</td>
                      <td className="p-3">Audit finances; evaluate restructuring vs settlement roadmap.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 31 to 90</td>
                      <td className="p-3">SMA-1 / SMA-2</td>
                      <td className="p-3">Outsourced agency recovery calls; threats of account lien.</td>
                      <td className="p-3">Redirect salary to untied bank; revoke NACH under Section 25 PSSA.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 91 to 120</td>
                      <td className="p-3">NPA Classification</td>
                      <td className="p-3">Bank allocates capital provision; file moved to SARB.</td>
                      <td className="p-3">Bypass external agents; submit hardship dossier directly to SARB.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 121 to 150</td>
                      <td className="p-3">Committee Review</td>
                      <td className="p-3">Bank assesses hardship evidence and approves haircut margin.</td>
                      <td className="p-3">Negotiate 40% to 55% principal compromise settlement terms.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 151 to 180</td>
                      <td className="p-3">OTS Sanction &amp; Closure</td>
                      <td className="p-3">Issuance of Settlement Sanction Letter; lien revocation.</td>
                      <td className="p-3">Vet sanction letter, deposit settlement funds, obtain stamped NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-banking-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: Joint Accounts &amp; Overdrafts
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The application of Section 171 set-off rules varies substantially depending on the legal ownership structure and character of the bank accounts involved:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Joint Accounts with Non-Borrowers
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under established Supreme Court precedents, funds in a joint account owned with a spouse or parent cannot be set off for an individual personal loan default unless the co-owner is also a contractual borrower or guarantor.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Salary Accounts in the Same Bank
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    While intra-bank set-off applies, total freezing of an employee operational salary account without notice violates natural justice. Transferring primary payroll to an independent institution provides immediate subsistence protection.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#1886ff]" />
                    Business Current vs. Personal Savings
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For private limited companies, corporate debts cannot be set off against personal director accounts due to separate corporate entity status, unless personal guarantees have been formally invoked.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Ban className="w-4 h-4 text-[#1886ff]" />
                    PPF, Gratuity &amp; Pension Balances
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Statutory welfare funds, including Public Provident Fund (PPF) and employee gratuity deposits, enjoy absolute immunity under Section 60 CPC and cannot be attached or set off under any banking agreement.
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
                Frequently Asked Questions: Bank Deductions &amp; Set-Off Protections
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
                Official Regulatory Citations &amp; Judicial References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 171 (General Lien of Bankers, Factors, and Attorneys), Ministry of Law and Justice, Government of India.
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Section 60 (Property Liable to Attachment and Sale) and Order XXI Rule 46 (Garnishee Orders).
                </li>
                <li>
                  <strong>Payment and Settlement Systems Act, 2007 (PSSA):</strong> Section 25 (Dishonour of Electronic Funds Transfer and Mandate Revocation Rules).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Section 21 (Dispute Resolution and Inaccurate Credit Data Rectification).
                </li>
                <li>
                  <strong>Reserve Bank of India Master Directions:</strong> Master Direction on Fair Practices Code for Lenders and Integrated Ombudsman Scheme, 2021.
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
                  <Link href="/application-to-unblock-bank-account-for-loan-emi" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unblock Bank Account
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
                  </Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 25 NACH Bounce
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
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
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
                Specialized in banking compliance, arbitral defense strategies, loan dispute resolution, and Section 171 set-off protections with extensive experience defending borrowers across Indian financial forums.
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
                  Bank Freezing Your Account?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution experts challenge unauthorized liens, protect your salary account, stop recovery harassment, and negotiate a 40% to 55% settlement.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Facing Account Deductions? Get Legal Help
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
                  <span><strong>RBI &amp; CICRA Compliance:</strong> 100% lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated banking resolution team.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/application-to-unblock-bank-account-for-loan-emi"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unblock Bank Account Frozen for Loan EMI
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Step-by-step account unfreeze blueprint &rarr;</span>
                </Link>

                <Link
                  href="/ecs-nach-bounce-legal-notice-section-25"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 25 Notice for NACH Mandate Bounce
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">PSSA legal defense &amp; reply guide &rarr;</span>
                </Link>

                <Link
                  href="/bank-demanding-full-payment-for-loan-closure"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Demanding Full Loan Payment
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Countering full demands &amp; securing OTS &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
