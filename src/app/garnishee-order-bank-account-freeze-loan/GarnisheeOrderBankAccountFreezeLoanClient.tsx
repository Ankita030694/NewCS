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
  Ban
} from 'lucide-react';

export default function GarnisheeOrderBankAccountFreezeLoanClient() {
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
    { id: 'garnishee-order-cpc-dynamics', label: '1. Order 21 Rule 46 CPC Dynamics' },
    { id: 'financial-breakdown-settlement-math', label: '2. Penal Inflation & Settlement Math' },
    { id: 'garnishee-order-comparison-matrix', label: '3. Legal Debt Remedies Matrix' },
    { id: 'cibil-algorithm-credit-restoration', label: '4. CIBIL Algorithm & CICRA Remedies' },
    { id: 'infographic-overview', label: 'Visual Blueprint: Garnishee Defense' },
    { id: 'step-by-step-defense-sop', label: '5. 6-Stage Garnishee Defense SOP' },
    { id: 'statutory-notice-defense-rights', label: '6. Statutory Notice Defense & Rights' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance Redressal Matrix' },
    { id: 'chronological-timeline-milestones', label: '8. Delinquency to Decree Timeline' },
    { id: 'specialized-garnishee-scenarios', label: '9. Specialized Account Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is a Garnishee Order in loan recovery?',
      a: 'A Garnishee Order is a court order under Order XXI Rule 46 of the Code of Civil Procedure (CPC). It directs a third party (such as an employer or bank) holding funds for a defaulting borrower to pay those funds directly to the creditor bank to satisfy a court decree.'
    },
    {
      q: 'Can a bank attach my salary without a court decree?',
      a: 'No. A bank cannot attach salary or third-party bank accounts without first obtaining a formal money decree and execution order under Order XXI CPC. Banks can only exercise internal set-off on accounts held within their own institution under Section 171 of the Contract Act.'
    },
    {
      q: 'What are the salary attachment limits under Section 60 CPC?',
      a: 'Under Section 60(1)(i) CPC, the first ₹1,000 and two-thirds of the remaining monthly salary are legally exempt from attachment. Only the remaining one-third surplus can be attached by court order.'
    },
    {
      q: 'For how long can salary be attached under CPC?',
      a: 'For non-maintenance decrees, salary attachment cannot exceed 24 cumulative months under Section 60(1)(i) CPC. After 24 months, that portion of salary is permanently exempt from further attachment for that decree.'
    },
    {
      q: 'Can a Garnishee Order attach Provident Fund (EPF) or pension?',
      a: 'No. Balances in Employee Provident Fund (EPF), Public Provident Fund (PPF), and government pensions enjoy absolute statutory immunity under Section 60(1)(g) CPC and Section 10 of the EPF Act.'
    },
    {
      q: 'Can a bank attach a joint account with an innocent co-holder?',
      a: 'No. A Garnishee Order only attaches funds belonging exclusively to the judgment debtor. Joint accounts held with non-borrowing family members cannot be attached without proving the debtor\'s sole ownership.'
    },
    {
      q: 'How do you challenge an ex-parte Garnishee Order?',
      a: 'You can file a show cause application under Order XXI Rule 46B CPC before the executing court, citing lack of service or Section 60 subsistence violations, or file a revision petition under Section 115 CPC in the High Court.'
    },
    {
      q: 'What is the difference between Order Nisi and Order Absolute?',
      a: 'A Garnishee Order Nisi is a temporary freeze directing the third party to show cause. If no valid objections are raised, the court issues a Garnishee Order Absolute, mandating final payment to the creditor bank.'
    },
    {
      q: 'Can an employer terminate you over a court salary attachment?',
      a: 'No. Civil salary attachment is an execution of a private financial decree, not employment misconduct. Employers are legally required to deduct the court-ordered portion without taking disciplinary action.'
    },
    {
      q: 'Can a One-Time Settlement (OTS) cancel a Garnishee Order?',
      a: 'Yes. Completing an agreed One-Time Settlement (OTS) satisfies the debt. The bank files a Satisfaction of Decree memo in court, which immediately lifts and vacates all active Garnishee Orders.'
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
            <span>Order XXI Rule 46 CPC &amp; Salary Attachment Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Garnishee Order in Bank Loan Default: How to Stop Attachment
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Protect your salary and bank accounts from court attachments under Order XXI Rule 46 CPC. Learn Section 60 subsistence exemptions and settle unsecured loan debts legally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Salary Attachment: Consult Us</span>
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
                  Governed by Code of Civil Procedure 1908 (Order XXI &amp; Section 60).
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
                <span>EXECUTIVE SUMMARY: GARNISHEE ORDERS &amp; SALARY ATTACHMENT</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Essential legal boundaries and borrower protections against civil court debt attachments in India:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Court Decree Mandatory:</strong> Banks cannot garnish salary without first obtaining a formal civil court decree.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Section 60 CPC Exemption:</strong> The first ₹1,000 plus two-thirds of remaining monthly salary is fully exempt from attachment.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">24-Month Maximum Limit:</strong> Non-maintenance salary attachments cannot legally exceed 24 cumulative months.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Retirement Fund Immunity:</strong> EPF, PPF, gratuity, and pensions enjoy absolute statutory protection under Section 60(1)(g).
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Rule 46B Show Cause:</strong> Debtors and employers have the legal right to challenge attachment orders before final execution.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Joint Account Protection:</strong> Non-borrower joint account funds cannot be attached for sole personal loan defaults.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">High Court Remedies:</strong> Unlawful ex-parte execution orders can be stayed under Article 227 or Section 115 CPC.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">OTS Discharge:</strong> A negotiated One-Time Settlement vacates court decrees and releases all attachment liens permanently.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: DEBT ECONOMICS & ORDER 21 RULE 46 CPC DYNAMICS */}
            <section id="garnishee-order-cpc-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Foundations &amp; Execution Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Garnishee Orders &amp; Order 21 Rule 46 CPC Debt Dynamics
              </h2>
              
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on unsecured personal loans or credit card obligations, lending institutions frequently threaten severe legal measures. Among post-decree remedies, a <strong>Garnishee Order</strong> is one of the most significant. Governed by <strong>Order XXI Rule 46 of the Code of Civil Procedure, 1908 (CPC)</strong>, it allows an executing civil court to attach monetary debts or property of the judgment debtor held by a third party, termed the garnishee.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In practical banking scenarios, the garnishee is usually the borrower’s corporate employer or an independent third-party bank where savings are held. The court first issues a <em>Garnishee Order Nisi</em>, directing the third party to freeze the funds and show cause why they should not be remitted to the creditor. If no valid legal objection is raised, the court confirms a <em>Garnishee Order Absolute</em>, commanding direct payment to satisfy the debt decree.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Crucially, a bank cannot obtain a Garnishee Order without winning a formal civil suit or summary trial. Once an unsecured loan defaults past 90 days, it is classified as a Non-Performing Asset (NPA), forcing the lender to allocate Tier-1 capital provisioning. Because prolonged civil litigation consumes significant bank resources, lenders often seek early One-Time Settlements (OTS) rather than fighting extended execution battles.
              </p>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis &amp; Debt Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Inflated Dues vs Settlement Math
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Following loan default, creditor ledgers inflate rapidly due to compound penal interest, late payment penalties, and administrative surcharges. Over 12 to 24 months, these non-principal additions routinely inflate the outstanding balance by 40% to 80% beyond the original borrowed capital.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                While banks present gross inflated demands in court, institutional resolution focuses on actual principal recovery. CredSettle isolates the true principal from unnotified penalties, leveraging the bank’s NPA provisioning to negotiate substantial 40% to 55% settlement waivers.
              </p>

              {/* Settlement Math Representative Calculation Card */}
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 sm:p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Case Study Math: High-Exposure NPA Unsecured Default
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                      Representative Breakdown: ₹12,00,000 Bank Claim vs. 52% OTS Discharge
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                    Resolution Haircut: 52% Total Discount
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <span className="text-slate-500 block mb-1">Sanctioned Principal Balance</span>
                    <span className="text-base font-bold text-slate-900">₹7,20,000</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">True capital baseline</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <span className="text-slate-500 block mb-1">Compound Penal &amp; Legal Dues</span>
                    <span className="text-base font-bold text-red-600">₹4,80,000</span>
                    <span className="text-[10px] text-red-500 block mt-0.5">Capitalized penal charges</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <span className="text-slate-500 block mb-1">Total Bank Decree Claim</span>
                    <span className="text-base font-bold text-slate-900">₹12,00,000</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">Gross execution demand</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200">
                    <span className="text-[#1886ff] font-bold block mb-1">Final Sanctioned OTS Sum</span>
                    <span className="text-base font-bold text-blue-950">₹5,76,000</span>
                    <span className="text-[10px] text-[#1886ff] block mt-0.5">100% penal waiver + 20% principal cut</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  By presenting documented financial hardship and invoking Section 60 CPC subsistence exemptions, the borrower eliminated all penal charges and secured an additional principal discount, discharging the debt decree permanently.
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="garnishee-order-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Layers className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Legal Matrix: Garnishee Orders vs Other Debt Remedies
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the legal distinctions between recovery methods enables borrowers to deploy the right defense strategy:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left border-collapse text-xs divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 min-w-[140px]">Recovery Mechanism</th>
                      <th className="p-3 min-w-[150px]">Governing Statute</th>
                      <th className="p-3 min-w-[140px]">Judicial Decree Required?</th>
                      <th className="p-3 min-w-[180px]">Scope of Asset / Salary Impact</th>
                      <th className="p-3 min-w-[160px]">Strategic Relief Pathway</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-[#1886ff]">Garnishee Attachment</td>
                      <td className="p-3">Order XXI Rule 46 &amp; 48 CPC</td>
                      <td className="p-3 font-semibold text-slate-800">Yes (Civil court decree)</td>
                      <td className="p-3">Attaches third-party salary or savings within Section 60 limits</td>
                      <td className="p-3">File Section 60 objections, show cause under 46B, or negotiate OTS</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Banker’s Right of Set-Off</td>
                      <td className="p-3">Section 171 Contract Act</td>
                      <td className="p-3 font-semibold text-emerald-700">No (Intra-bank ledger debit)</td>
                      <td className="p-3">Combines intra-bank positive balances of the exact same borrower</td>
                      <td className="p-3">Challenge lack of mutuality, transfer salary to independent bank</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">DRT Recovery Certificate</td>
                      <td className="p-3">RDB Act (Debts &gt; ₹20L)</td>
                      <td className="p-3 font-semibold text-slate-800">Yes (Recovery Officer Warrant)</td>
                      <td className="p-3">Full attachment of movable/immovable assets and accounts</td>
                      <td className="p-3">File Section 30 Appeal or submit Stressed Asset OTS proposal</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-emerald-700">One-Time Settlement (OTS)</td>
                      <td className="p-3">RBI Stressed Assets Policy</td>
                      <td className="p-3 font-semibold text-emerald-700">Voluntary Agreement</td>
                      <td className="p-3">Complete release of all liens, warrants, and Garnishee Orders</td>
                      <td className="p-3 font-bold text-emerald-700">Recommended: 40% to 55% discount with stamped NDC</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Lok Adalat Compromise</td>
                      <td className="p-3">Legal Services Authorities Act</td>
                      <td className="p-3 font-semibold text-slate-800">Consent Award (Final)</td>
                      <td className="p-3">Court-sanctioned compromise award with zero appeal rights</td>
                      <td className="p-3">Execute agreed settlement terms for immediate final closure</td>
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
                4. CIBIL Algorithm &amp; Section 21 CICRA Credit Restoration
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Garnishee litigation severely harms credit profiles. Credit Information Companies in India calculate your credit score based on five core pillars:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-xs text-center">
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                  <span className="block text-lg font-black text-[#1886ff]">35%</span>
                  <span className="text-slate-800 font-bold block mt-1">Payment History</span>
                  <span className="text-[10px] text-slate-500">DPD &amp; default status</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                  <span className="block text-lg font-black text-indigo-600">30%</span>
                  <span className="text-slate-800 font-bold block mt-1">Credit Utilization</span>
                  <span className="text-[10px] text-slate-500">Revolving debt ratio</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                  <span className="block text-lg font-black text-slate-700">15%</span>
                  <span className="text-slate-800 font-bold block mt-1">Credit Mix</span>
                  <span className="text-[10px] text-slate-500">Secured vs unsecured</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                  <span className="block text-lg font-black text-slate-700">10%</span>
                  <span className="text-slate-800 font-bold block mt-1">Inquiry Velocity</span>
                  <span className="text-[10px] text-slate-500">Hard search frequency</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                  <span className="block text-lg font-black text-slate-700">10%</span>
                  <span className="text-slate-800 font-bold block mt-1">Credit Vintage</span>
                  <span className="text-[10px] text-slate-500">Tradeline longevity</span>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When legal execution is initiated, repeated DPD markers drop scores into the 500-580 range. Executing a formal OTS terminates litigation and marks the balance as zero. Under <strong>Section 21 of CICRA, 2005</strong>, borrowers can rectify credit records with their stamped No Dues Certificate, restoring scores back to 750+ within 12 to 24 months.
              </p>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Visual Blueprint: Garnishee Order Defense &amp; CPC Rules
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Review this infographic illustrating the Garnishee Order process under Order XXI Rule 46 CPC, Section 60 salary limits, and defense roadmap:
              </p>

              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 sm:p-5 overflow-hidden space-y-3">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                  <Image
                    src="/images/infographics/garnishee-order-bank-account-freeze-loan.jpg"
                    alt="Garnishee Order Bank Account Freeze and Salary Attachment Legal Defense Infographic"
                    fill
                    sizes="(max-width: 1200px) 100vw, 900px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Authoritative guide to Order 21 Rule 46 CPC and CredSettle debt resolution.</span>
                  <a
                    href="/images/infographics/garnishee-order-bank-account-freeze-loan.jpg"
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
                5. Step-by-Step SOP: 6-Stage Garnishee Defense Blueprint
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When served with a Garnishee Order, execute this structured legal defense protocol:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">01</span>
                    <h3 className="font-bold text-slate-900 text-sm">Decree &amp; Summons Audit</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Verify whether the underlying decree was passed ex-parte without proper service of summons.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">02</span>
                    <h3 className="font-bold text-slate-900 text-sm">Hardship Dossier Compilation</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Assemble verified medical bills, job loss proofs, and income statements to demonstrate bona fide distress.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">03</span>
                    <h3 className="font-bold text-slate-900 text-sm">Section 60 CPC Objection</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a show cause application under Order XXI Rule 46B to enforce statutory salary subsistence limits.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">04</span>
                    <h3 className="font-bold text-slate-900 text-sm">Direct SARB Negotiations</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Engage directly with the bank Stressed Assets branch to negotiate a 40% to 55% settlement discount.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">05</span>
                    <h3 className="font-bold text-slate-900 text-sm">OTS Letter Vetting</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Audit the settlement sanction letter to confirm full liability discharge and explicit waiver of claims.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">06</span>
                    <h3 className="font-bold text-slate-900 text-sm">Satisfaction Memo &amp; Release</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pay settlement dues, secure a stamped NDC, and file a court Satisfaction Memo to vacate all attachments.
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
                6. Statutory Notice Defense: Section 60 CPC Protections
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian law protects borrowers against total income deprivation through clear statutory limits:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">Section 60(1)(i) CPC: Salary Ceiling</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Exempts the first ₹1,000 and two-thirds of the remaining monthly salary from execution attachment.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">Order XXI Rule 46B: Show Cause Right</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Courts must provide fair opportunity to show cause before confirming an attachment order absolute.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <Ban className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">EPF &amp; Pension Absolute Immunity</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    EPF, PPF, and government pensions are unconditionally immune from attachment under Section 60(1)(g).
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">High Court Supervisory Remedies</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Flawed execution orders can be stayed through Civil Revision or Writ Petitions under Article 227.
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
                7. 3-Tier Grievance &amp; Judicial Escalation Framework
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this structured three-tier framework to challenge improper account attachments:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Tier 1: 7-14 Days</span>
                  <h3 className="font-bold text-slate-900 text-sm">Executing Civil Court</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File an urgent application under Order XXI Rule 46B to enforce Section 60 subsistence limits.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Tier 2: 14-21 Days</span>
                  <h3 className="font-bold text-slate-900 text-sm">Bank SARB Committee</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a formal OTS compromise proposal to settle the debt at a 40% to 55% discount.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Tier 3: Immediate</span>
                  <h3 className="font-bold text-slate-900 text-sm">High Court Revision</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Invoke Article 227 or Section 115 CPC to stay execution orders passed without natural justice.
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
                8. Chronological Timeline: From Default to Court Decree
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Key milestones from initial missed payments to court execution and final resolution:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left border-collapse text-xs divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 min-w-[120px]">Timeline Stage</th>
                      <th className="p-3 min-w-[140px]">Account Classification</th>
                      <th className="p-3 min-w-[180px]">Creditor Judicial Action</th>
                      <th className="p-3 min-w-[180px]">Strategic Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-[#1886ff]">Days 1 to 90</td>
                      <td className="p-3">SMA Delinquency</td>
                      <td className="p-3">Automated reminders and bank demand notices.</td>
                      <td className="p-3">Audit liability; evaluate OTS compromise plan.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 91 to 180</td>
                      <td className="p-3">NPA Classification</td>
                      <td className="p-3">Legal recall notices; filing of Summary Suit.</td>
                      <td className="p-3">Engage debt resolution counsel; submit hardship dossier.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Months 6 to 12</td>
                      <td className="p-3">Civil Suit Adjudication</td>
                      <td className="p-3">Trial proceedings; passing of money decree.</td>
                      <td className="p-3">Defend merits or propose structured settlement.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Months 12 to 18</td>
                      <td className="p-3">Order 21 Execution</td>
                      <td className="p-3">Filing of execution petition; Garnishee Order Nisi.</td>
                      <td className="p-3">File Section 60 objections to protect salary subsistence.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-emerald-700">Resolution Phase</td>
                      <td className="p-3">OTS Sanction &amp; Closure</td>
                      <td className="p-3">Bank issues settlement letter; accepts compromise sum.</td>
                      <td className="p-3 font-bold text-emerald-700">Remit OTS funds, obtain NDC, file Satisfaction Memo.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-garnishee-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: Joint Accounts &amp; Salary Rules
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                How Garnishee Orders apply across different employment and account types:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Joint Accounts with Spouse
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Courts cannot attach joint accounts with non-borrowers without proving the debtor’s sole beneficial ownership.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Government &amp; PSU Employees
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Attachments are executed under Order XXI Rule 48 CPC, strictly adhering to the 24-month statutory ceiling.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#1886ff]" />
                    Contractual &amp; Freelance Income
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Professional fees are evaluated under Order XXI Rule 46 rather than standard payroll salary attachment rules.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Ban className="w-4 h-4 text-[#1886ff]" />
                    Commercial Vendor Receivables
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Third-party debtors can dispute actionable debt existence under Rule 46B if valid contractual counter-claims exist.
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
                Frequently Asked Questions: Garnishee Order Defense
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
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Order XXI Rule 46, Rule 48, and Section 60 (Exemptions from Attachment), Ministry of Law and Justice.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 171 (General Banker’s Lien) and Principles of Contractual Discharge.
                </li>
                <li>
                  <strong>EPF Act, 1952:</strong> Section 10 (Protection against Attachment of Provident Fund Balances).
                </li>
                <li>
                  <strong>CICRA, 2005:</strong> Section 21 (Dispute Resolution and Tradeline Data Rectification).
                </li>
                <li>
                  <strong>RBI Master Directions:</strong> Prudential Norms on Income Recognition, Asset Classification (IRAC) and Advances Provisioning.
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
                  <Link href="/can-bank-deduct-money-from-another-account" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 171 Set-Off Rules
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
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
                Specialized in civil execution defense, Order XXI CPC proceedings, loan dispute resolution, and Section 60 salary attachment protections.
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
                  Salary Attached by Court?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal experts challenge illegal Garnishee Orders, enforce Section 60 salary exemptions, and negotiate a 40% to 55% settlement.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Stop Salary Attachment: Consult Us
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
                  <span><strong>Pan-India Representation:</strong> Dedicated civil execution defense.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
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
                  href="/application-to-unblock-bank-account-for-loan-emi"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unblock Bank Account Frozen for Loan EMI
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Step-by-step account unfreeze blueprint &rarr;</span>
                </Link>

                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Arbitration Notice for Personal Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Perkins Eastman ruling &amp; defense &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
