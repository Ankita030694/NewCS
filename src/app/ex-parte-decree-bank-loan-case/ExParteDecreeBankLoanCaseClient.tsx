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
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark
} from 'lucide-react';

export default function ExParteDecreeBankLoanCaseClient() {
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
    { id: 'quick-crux', label: 'Executive Summary' },
    { id: 'debt-economics-ex-parte-dynamics', label: '1. Ex-Parte Decree Dynamics' },
    { id: 'financial-breakdown-settlement-math', label: '2. Claim Math & Settlement Relief' },
    { id: 'legal-remedies-comparison-matrix', label: '3. Legal Remedies Matrix' },
    { id: 'cibil-algorithm-credit-restoration', label: '4. CIBIL Impact & Credit Repair' },
    { id: 'infographic-overview', label: 'Visual 6-Step Defense Blueprint' },
    { id: 'step-by-step-defense-sop', label: '5. 6-Stage Set-Aside SOP' },
    { id: 'statutory-notice-defense-rights', label: '6. Order 9 Rule 13 CPC Rights' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance Redressal' },
    { id: 'chronological-milestones-timeline', label: '8. Chronological Case Milestones' },
    { id: 'specialized-real-world-scenarios', label: '9. Specialized Default Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authority' }
  ];

  const faqs = [
    {
      q: 'What is an ex-parte decree in a bank loan recovery case?',
      a: 'An ex-parte decree is a final judgment passed by a civil court or judicial tribunal in favor of a lending bank when the defendant borrower fails to appear or file a defense after the court presumes that summons was formally served.'
    },
    {
      q: 'How can a bank win a court case against me without my knowledge?',
      a: 'Banks often file cases using outdated loan application addresses, or resort to substituted service like local newspaper publications or affixation without personal delivery, leading courts to erroneously declare summons served and proceed ex-parte.'
    },
    {
      q: 'What is the legal procedure to set aside an ex-parte decree under Order 9 Rule 13 CPC?',
      a: 'A borrower must file a formal application under Order IX Rule 13 of the Code of Civil Procedure in the court that passed the decree, supported by an affidavit proving non-service of summons or sufficient cause for absence.'
    },
    {
      q: 'What is the limitation period to file an Order 9 Rule 13 application for a bank loan decree?',
      a: 'Under Article 123 of the Limitation Act, 1963, the limitation period is strictly 30 days from the date of the decree if summons was served, or 30 days from the date of gaining knowledge of the decree if summons was not duly served.'
    },
    {
      q: 'Can I file to set aside an ex-parte decree if 30 days have already passed?',
      a: 'Yes. If more than 30 days have elapsed since the decree, you can file an application under Section 5 of the Limitation Act seeking condonation of delay, explaining day-to-day reasons such as lack of notice, medical emergencies, or address relocation.'
    },
    {
      q: 'Can the bank execute the decree or freeze my bank accounts while my set-aside application is pending?',
      a: 'The bank can initiate execution under Order 21 CPC unless you file an urgent stay application under Order 21 Rule 26 or Section 151 CPC, requesting the court to restrain warrant issuance, property attachment, or account freezing.'
    },
    {
      q: 'What constitutes sufficient cause for non-appearance in a bank loan dispute?',
      a: 'Sufficient cause includes non-service of summons, wrong address dispatch, illness, sudden hospitalisation, advocate negligence, misleading settlement assurances by recovery managers, or natural disasters, as recognized in Supreme Court rulings.'
    },
    {
      q: 'What happens after the court sets aside an ex-parte decree?',
      a: 'When the decree is set aside, the original recovery suit is fully restored to its initial trial stage. The borrower is granted time to file a Written Statement, cross-examine bank witnesses, dispute inflated penal interest, and present merits.'
    },
    {
      q: 'Can I negotiate a One-Time Settlement (OTS) with the bank after setting aside the decree?',
      a: 'Yes. Reopening the litigation eliminates the bank\'s unilateral execution leverage, making senior bank credit committees highly amenable to negotiating a mutually agreed One-Time Settlement with 40% to 60% waivers on penal interest.'
    },
    {
      q: 'How does an ex-parte decree and its subsequent setting aside affect my CIBIL credit score?',
      a: 'An ex-parte decree triggers Suit-Filed or Decreed remarks that severely degrade credit scores. Once set aside and settled, the bank must file satisfaction before the court and update bureau records to Closed or Settled under Section 21 of CICRA.'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-blue-100 mb-4 border border-white/15">
            <Scale className="w-3.5 h-3.5 text-blue-200" />
            <span>Order IX Rule 13 Code of Civil Procedure 1908 &amp; Section 5 Limitation Act</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Ex-Parte Decree in a Bank Loan Case: How to Set It Aside
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Has a bank secured a default decree without serving summons? Learn how to file under Order 9 Rule 13 CPC, stay coercive execution, dispute compound interest, and negotiate an affordable OTS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Set Aside an Ex-Parte Order</span>
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
                  <span>Judicial Defense Safeguards</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed under CPC 1908, Limitation Act 1963, and Supreme Court rulings.
                </p>
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
                <span>EXECUTIVE BRIEF: EX-PARTE BANK DECREE DEFENSE &amp; REOPENING CRUX</span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Unilateral Default Decree:</strong> Passed in the borrower&apos;s absence after defective summons service.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Statutory Right to Set Aside:</strong> Order IX Rule 13 CPC allows courts to vacate default orders and reopen trials.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Article 123 Limitation:</strong> 30 days from the decree date or from first discovering the order.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Section 5 Delay Condonation:</strong> Condoning delays beyond 30 days by proving lack of service or hardship.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Immediate Execution Stay:</strong> Order 21 Rule 26 halts bank account freezes and asset attachment warrants.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Contesting Penal Compounding:</strong> Reopening the suit allows challenging unapproved ledger fees.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Restoring OTS Leverage:</strong> Vacating the decree enables negotiating 40% to 60% compromise settlements.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Mandatory Credit Update:</strong> Lenders must report settled status to credit bureaus under CICRA 2005.
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 1: Debt Economics & Ex-Parte Default Dynamics */}
            <section id="debt-economics-ex-parte-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Civil Jurisprudence &amp; Banking Dynamics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics &amp; Ex-Parte Default Dynamics in Loan Recovery
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  When retail borrowers face severe financial disruptions from job loss, medical emergencies, or business downturns, unsecured loans frequently fall delinquent. Once non-payment crosses 90 days, lenders classify the account as a Non-Performing Asset (NPA) under Reserve Bank of India prudential norms. This mandates substantial Tier-1 capital provisioning, creating pressure on recovery wings to secure fast judicial decrees.
                </p>
                <p>
                  To expedite recovery, banks file summary suits under Order XXXVII CPC, ordinary money suits, or DRT Original Applications. However, summonses are routinely dispatched to outdated tenancy addresses or served via substituted newspaper publication in obscure daily papers. Unaware of the court proceedings, the borrower fails to appear, leading the civil court to proceed ex-parte under Order IX Rule 6(1)(a) CPC and pass a default monetary decree with high post-decree interest.
                </p>
                <p>
                  Borrowers usually discover the decree when executing courts issue attachment warrants or salary garnishee orders. Fortunately, Indian civil jurisprudence provides clear constitutional safeguards under Order IX Rule 13 CPC to set aside default decrees, halt coercive execution, and restore the borrower&apos;s right to defend the case and settle the debt.
                </p>
              </div>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis &amp; Settlement Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Principal vs Inflated Decree Claims
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  In uncontested ex-parte proceedings, banks present computerized statements that add contractual interest, compound penal levies, late charges, and legal fees. Without defense counsel to cross-examine ledger calculations under the Bankers&apos; Books Evidence Act, courts decree the entire claim with future interest at 18% per annum.
                </p>
                <p>
                  The table below illustrates a representative financial audit of a ₹25 Lakhs unsecured loan default that swelled into an ex-parte decree, contrasting the claimed dues against realistic compromise OTS targets:
                </p>

                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    Representative Financial Breakdown &amp; Compromise Target
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Sanctioned Principal Amount:</span>
                        <span className="font-bold text-slate-900">₹25,00,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Principal Outstanding at Default:</span>
                        <span className="font-bold text-slate-900">₹19,80,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Accrued Contractual Interest:</span>
                        <span className="font-bold text-slate-900">₹4,95,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Compounded Penal Surcharges:</span>
                        <span className="font-bold text-red-600">₹5,40,000</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Court Fees &amp; Execution Costs:</span>
                        <span className="font-bold text-slate-900">₹1,65,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Total Bank Ex-Parte Decreed Claim:</span>
                        <span className="font-bold text-red-700">₹31,80,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100 bg-blue-50/60 px-2 rounded-md">
                        <span className="font-semibold text-blue-900">Realistic Compromise OTS Target:</span>
                        <span className="font-extrabold text-[#1886ff]">₹11,00,000 - ₹13,50,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100 bg-emerald-50/60 px-2 rounded-md">
                        <span className="font-semibold text-emerald-900">Expected Borrower Debt Relief:</span>
                        <span className="font-extrabold text-emerald-700">57% to 65% Total Waiver</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 italic">
                    Note: Compromise settlements are negotiated on verified hardship and summons service defects. Payments are remitted directly against an official bank OTS letter.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="legal-remedies-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Judicial Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Legal Remedies Matrix: Setting Aside vs Appeal vs Inaction
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  Borrowers facing an ex-parte decree have distinct procedural remedies under the Code of Civil Procedure, 1908 depending on whether they challenge service defects or legal merits:
                </p>

                <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                  <table className="w-full text-left text-xs md:text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                      <tr>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Judicial Remedy</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Governing Statute</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Limitation Period</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Court Forum</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Pre-Deposit</th>
                        <th className="p-3.5 font-bold text-[#1886ff]">Strategic Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Set Aside Application</td>
                        <td className="p-3.5 border-r border-slate-200/80">Order IX Rule 13 CPC</td>
                        <td className="p-3.5 border-r border-slate-200/80 font-semibold text-slate-800">30 Days from Knowledge</td>
                        <td className="p-3.5 border-r border-slate-200/80">Same Trial Court</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-emerald-700 font-semibold">NO</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Reopens trial on merits and stays coercive execution</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Regular First Appeal (RFA)</td>
                        <td className="p-3.5 border-r border-slate-200/80">Section 96(2) CPC</td>
                        <td className="p-3.5 border-r border-slate-200/80">30 to 90 Days</td>
                        <td className="p-3.5 border-r border-slate-200/80">Appellate Court / HC</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-amber-700 font-semibold">Security discretionary</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Challenges substantive errors and interest computations</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Review Petition</td>
                        <td className="p-3.5 border-r border-slate-200/80">Section 114 / Order 47</td>
                        <td className="p-3.5 border-r border-slate-200/80">30 Days from Decree</td>
                        <td className="p-3.5 border-r border-slate-200/80">Same Trial Court</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-emerald-700 font-semibold">NO</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Rectifies patent errors of law or overlooked payments</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Lok Adalat Settlement</td>
                        <td className="p-3.5 border-r border-slate-200/80">Legal Services Act 1987</td>
                        <td className="p-3.5 border-r border-slate-200/80">Any Stage with Consent</td>
                        <td className="p-3.5 border-r border-slate-200/80">Lok Adalat Bench</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-emerald-700 font-semibold">NO</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Final consent decree with full waiver of compound fees</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Inaction / Ignoring Notice</td>
                        <td className="p-3.5 border-r border-slate-200/80">Default Enforcement</td>
                        <td className="p-3.5 border-r border-slate-200/80">N/A</td>
                        <td className="p-3.5 border-r border-slate-200/80">Executing Court</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-red-700 font-semibold">100% Demand Due</td>
                        <td className="p-3.5 text-red-700 font-semibold">Leads to salary garnishee and bank account freeze</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-credit-restoration" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Architecture &amp; Scoring Trajectory</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Impact &amp; Credit Bureau Restoration Strategy
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  When a court enters an ex-parte decree, lenders report a &quot;Suit Filed&quot; or &quot;Decreed&quot; remark to TransUnion CIBIL, Equifax, Experian, and CRIF High Mark. This triggers an immediate score decline of 120 to 180 points and results in automated rejections across institutional risk engines for any future credit cards, home loans, or business credit.
                </p>
                <p>
                  Setting aside the decree halts ongoing deterioration. Once resolved via compromise OTS, lenders are statutorily required under Section 21 of the Credit Information Companies (Regulation) Act, 2005 to update the account balance to zero with &quot;Settled&quot; or &quot;Closed&quot; status within 30 days. Borrowers can then rebuild their score above 750 over 12 to 18 months through disciplined secured credit.
                </p>
              </div>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Blueprint: 6-Step Defense Roadmap to Set Aside Ex-Parte Decrees
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Review the step-by-step roadmap below for challenging default decrees, obtaining an execution stay, and reaching a final loan settlement:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/ex-parte-decree-bank-loan-case.jpg"
                    alt="6-Stage Legal Roadmap for Setting Aside Ex-Parte Decree in Bank Loan Cases under Order 9 Rule 13 CPC India"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Civil Litigation Defense • Code of Civil Procedure 1908</span>
                  <a
                    href="/images/infographics/ex-parte-decree-bank-loan-case.jpg"
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
            <section id="step-by-step-defense-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. 6-Stage SOP: Protocol to Set Aside Bank Loan Default Decrees
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Vacating a default decree requires methodical execution across judicial timelines. Follow this six-stage standard operating protocol:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 1-7</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Decree Discovery &amp; Judicial File Inspection
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Obtain certified copies of order sheets, plaint, and process server reports to establish whether summons was sent to an outdated address or published improperly.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 8-20</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Drafting Order 9 Rule 13 Application &amp; Delay Condonation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Prepare the set-aside application with a supporting affidavit. If beyond 30 days, attach a Section 5 Limitation Act petition citing genuine reasons for absence.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 21-30</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Filing Interlocutory Stay on Execution Proceedings
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Move an urgent application under Order XXI Rule 26 and Section 151 CPC to restrain bank account freezes and asset attachments during the set-aside plea.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 31-60</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Judicial Arguments &amp; Establishing Sufficient Cause
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Argue before the court citing Supreme Court precedents (G.P. Srivastava, Sushil Kumar Sabharwal) to prove defective service and secure an order setting aside the decree.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 61-90</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Decree Set Aside, Trial Reopened &amp; Written Statement Filed
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    With the suit restored to trial, submit a comprehensive Written Statement challenging unapproved compound penal interest and presenting documented hardship.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 91-150</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Bilateral Compromise OTS, Suit Withdrawal &amp; Closure NDC
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Engage the bank&apos;s Zonal Stressed Assets Desk to finalize a 40% to 60% compromise OTS, remit settlement funds, file joint withdrawal terms, and obtain your No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights under CPC */}
            <section id="statutory-notice-defense-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Jurisprudence &amp; Defense Grid</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense: Order 9 Rule 13 CPC &amp; Summons Rights
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  Defending against default bank recovery decrees is based on four core statutory safeguards under the Code of Civil Procedure and Supreme Court rulings:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                      <Clock className="w-4 h-4" />
                      <span>Order 5 Rules 17 &amp; 19 (Defective Service)</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Affixation without verifying residence or newspaper publication in obscure daily papers violates mandatory service rules and renders ex-parte orders voidable.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                      <Gavel className="w-4 h-4" />
                      <span>Order 9 Rule 13 (Sufficient Cause)</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under G.P. Srivastava v. R.K. Raizada (2000), courts must adopt a liberal approach to ensure disputes are decided on substantive merits rather than procedural default.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                      <Scale className="w-4 h-4" />
                      <span>Sushil Kumar Sabharwal Precedent</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The Supreme Court held in (2002) 5 SCC 377 that general knowledge of litigation does not dispense with the strict legal duty of proper summons service under Order 5 CPC.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Order 21 Rule 26 Execution Stay</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Executing courts hold power under Order 21 Rule 26 and Section 151 CPC to stay recovery proceedings, preventing account attachment while set-aside pleas are heard.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Grievance Redressal Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Redressal Mechanisms</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Escalation Matrix: Judicial &amp; Institutional Redressal
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  When facing execution proceedings or unresponsive bank desks after an ex-parte decree, escalate through this structured 3-tier framework:
                </p>

                <div className="space-y-3 pt-1">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                        Level 1: Executing Court Stay &amp; Bank Principal Nodal Officer (PNO)
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">Turnaround: 7-14 Days</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Immediate Execution Restraint &amp; Grievance Escalation
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      File an urgent stay plea under Order 21 Rule 26 CPC and submit a formal representation to the Bank PNO requesting a hold on coercive recovery pending OTS review.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                        Level 2: District Judge Appeal &amp; High Court Article 227 Revision
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">Turnaround: 30-60 Days</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Appellate &amp; Constitutional Supervisory Remedies
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      If the trial court rejects the set-aside application, file a miscellaneous appeal under Order 43 Rule 1(d) CPC or invoke High Court supervisory jurisdiction under Article 227.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                        Level 3: Reserve Bank of India Integrated Ombudsman
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">Turnaround: 30 Days</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Regulatory Complaint on CMS Portal (cms.rbi.org.in)
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      If the bank deploys abusive recovery agents or violates RBI Fair Practices Code, lodge a formal regulatory complaint on cms.rbi.org.in for rapid ombudsman intervention.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Procedural Milestones Table */}
            <section id="chronological-milestones-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Chronological Milestones: Summons to Set-Aside &amp; Resolution
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  Key procedural milestones in challenging an ex-parte bank recovery decree and concluding an out-of-court settlement:
                </p>

                <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                  <table className="w-full text-left text-xs md:text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                      <tr>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Procedural Phase</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Judicial Milestone</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Statutory Limitation</th>
                        <th className="p-3.5 font-bold text-[#1886ff]">Strategic Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Day 1</td>
                        <td className="p-3.5 border-r border-slate-200/80">Knowledge of Ex-Parte Decree</td>
                        <td className="p-3.5 border-r border-slate-200/80">Article 123 trigger</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Apply for certified copies and inspect service records</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Days 15-30</td>
                        <td className="p-3.5 border-r border-slate-200/80">Order 9 Rule 13 &amp; Stay Filing</td>
                        <td className="p-3.5 border-r border-slate-200/80">30 days under Article 123</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">File set-aside petition, Section 5 condonation &amp; stay application</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Days 45-60</td>
                        <td className="p-3.5 border-r border-slate-200/80">Stay Hearing &amp; Arguments</td>
                        <td className="p-3.5 border-r border-slate-200/80">Court schedule</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Argue summons defect and secure interim execution stay</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Months 3-4</td>
                        <td className="p-3.5 border-r border-slate-200/80">Decree Set Aside &amp; Suit Restored</td>
                        <td className="p-3.5 border-r border-slate-200/80">Trial reopening</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Submit Written Statement and initiate OTS negotiation</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Months 5-6</td>
                        <td className="p-3.5 border-r border-slate-200/80">Compromise OTS &amp; Suit Withdrawal</td>
                        <td className="p-3.5 border-r border-slate-200/80">Final closure</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Remit OTS funds, secure NDC and update CIBIL records</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-real-world-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: Complex Ex-Parte Loan Disputes
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  Ex-parte decrees often arise in specific scenarios requiring tailored legal responses:
                </p>

                <div className="space-y-3 pt-1">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#1886ff]" />
                      Borrower Relocation &amp; Outdated KYC Defaults
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Borrowers who relocated often find summonses were dispatched to old rental addresses. Providing lease agreements and updated Aadhaar records serves as conclusive evidence of non-service under Order 9 Rule 13.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-[#1886ff]" />
                      Personal Guarantors &amp; Co-Borrowers Impleaded Unbeknownst
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Co-borrowers or guarantors decreed without separate summons can assert independent statutory defenses under Sections 133 to 141 of the Indian Contract Act, 1872 regarding creditor laches and contract variations.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <Landmark className="w-4 h-4 text-[#1886ff]" />
                      Ex-Parte Recovery Certificates in DRT
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      For loans above ₹20 Lakhs in DRT, borrowers can apply to recall ex-parte recovery certificates under Section 19(25) of the RDB Act and Rule 12(5) of the DRT Procedure Rules by proving non-receipt of notice.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[#1886ff]" />
                      Debt Assigned to Asset Reconstruction Companies (ARCs)
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      When bad debts are assigned to ARCs at steep discounts, challenging default decrees provides significant leverage to conclude deeply discounted settlements with swift No Dues Certificates.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile */}
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
                Frequently Asked Questions: Setting Aside Ex-Parte Bank Decrees
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to explore authoritative legal answers verified by our banking compliance and debt resolution professionals:
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

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Official Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Statutory References &amp; Official Regulatory Citations
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Code of Civil Procedure, 1908:</strong> Order V Rules 17 to 20 (Summons Service), Order IX Rules 6 and 13 (Ex-Parte Decrees and Setting Aside), Order XXI Rule 26 (Stay of Execution), and Section 151 (Inherent Powers).
                </li>
                <li>
                  <strong>Limitation Act, 1963:</strong> Article 123 (30-day limitation for setting aside ex-parte decrees) and Section 5 (Condonation of delay for sufficient cause).
                </li>
                <li>
                  <strong>Supreme Court Precedents:</strong> <em>G.P. Srivastava v. R.K. Raizada (2000) 3 SCC 54</em> (Liberal sufficient cause doctrine) and <em>Sushil Kumar Sabharwal v. Gurpreet Singh (2002) 5 SCC 377</em> (Strict summons service rules).
                </li>
                <li>
                  <strong>Recovery of Debts and Bankruptcy Act, 1993:</strong> Section 19(22), 19(25), and DRT Procedure Rules, 1993, Rule 12 (Recalling ex-parte recovery certificates).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005:</strong> Section 21 (Mandatory credit bureau updates post-settlement).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Outbound Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>Reserve Bank of India (rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>RBI Complaint Portal (cms.rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>TransUnion CIBIL (cibil.com)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>India Code Statutory Repository (indiacode.nic.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>National Legal Services Authority (nalsa.gov.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>National Cyber Crime Portal (cybercrime.gov.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-recovery-case-in-court" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Court Recovery Cases
                  </Link>
                  <Link href="/drt-notice-for-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    DRT Notice Legal Defense
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/garnishee-order-bank-account-freeze-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Garnishee Order Defense
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Protection
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
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
                Specialized in civil litigation defense, Order 9 Rule 13 applications, Section 5 delay condonation dossiers, and bank loan OTS negotiations across civil courts in India.
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

            {/* Card 2: Emergency CTA Card */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Faced with an Ex-Parte Decree?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal and debt resolution specialists help you file under Order 9 Rule 13 CPC, stay execution, and negotiate a 40% to 60% loan settlement.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Set Aside an Ex-Parte Order
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
                  <span>Direct Bank Settlement • CPC &amp; RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Settlement Risk:</strong> Success-linked settlement fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> No third-party escrow or holding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CPC &amp; RBI Compliance:</strong> 100% lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Civil Defense:</strong> Expert legal professionals &amp; financial negotiators.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/bank-recovery-case-in-court"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Filed Recovery Case in Civil Court
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Civil suit defense &amp; summons guide &rarr;</span>
                </Link>

                <Link
                  href="/drt-notice-for-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    DRT Notice for Personal Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Section 19 RDB Act defense &rarr;</span>
                </Link>

                <Link
                  href="/garnishee-order-bank-account-freeze-loan"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Garnishee Order Bank Account Freeze
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Order 21 Rule 46 defense blueprint &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
