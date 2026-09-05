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
  Check,
  Phone,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  Sparkles,
  Gavel,
  Landmark,
  Calculator,
  Percent,
  ReceiptText,
  ShieldAlert,
  GraduationCap
} from 'lucide-react';

export default function DoesLoanSettlementAffectGovernmentJobClient() {
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
    { id: 'debt-economics-npa-dynamics', label: '1. Civil Debt vs Govt Job Rules' },
    { id: 'financial-settlement-formula', label: '2. Financial Math & OTS Formula' },
    { id: 'status-comparison-matrix', label: '3. Resolution Option Matrix' },
    { id: 'technical-cibil-scoring-math', label: '4. CIBIL & Employment Checks' },
    { id: 'visual-infographic-blueprint', label: 'Visual 6-Stage Blueprint' },
    { id: 'step-by-step-settlement-sop', label: '5. 6-Stage Settlement SOP' },
    { id: 'statutory-notice-defense-grid', label: '6. Notice Defense & Legal Rights' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance Matrix' },
    { id: 'chronological-resolution-milestones', label: '8. Timelines & Milestones' },
    { id: 'specialized-loan-scenarios', label: '9. Real-World Exam Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-citations-grid', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Does a loan settlement disqualify me from central government jobs?',
      a: 'No. Loan default and settlement are civil contractual matters under Indian Contract Act. Antecedent checks verify criminal trials, FIRs, and insolvency decrees.'
    },
    {
      q: 'Does a low CIBIL score fail police antecedent verification?',
      a: 'No. Police verifications inspect local criminal records and warrants. Police authorities never inspect CIBIL reports, and settlements carry zero negative weight.'
    },
    {
      q: 'What do Central Civil Services Conduct Rules state about debt?',
      a: 'Rule 16 directs employees to avoid habitual indebtedness. Past loan settlements do not violate Rule 16 unless formally adjudged an undischarged insolvent.'
    },
    {
      q: 'Can public sector bank jobs be cancelled due to a loan settlement?',
      a: 'Public banks require resolving active defaults. Submitting the bank Settlement Sanction Letter and No Dues Certificate satisfies onboarding criteria.'
    },
    {
      q: 'Should I disclose a settled loan in government Attestation Forms?',
      a: 'Standard forms query arrests, prosecutions, and convictions. You only disclose debt if specifically asked about civil court decrees or insolvency.'
    },
    {
      q: 'What happens if a lender filed Section 138 or Section 25 notices?',
      a: 'These are compoundable proceedings. Upon paying the agreed settlement, the bank withdraws court complaints, completely restoring your unblemished record.'
    },
    {
      q: 'Can a recovery agent contact my government department or office?',
      a: 'No. RBI Fair Practices Code prohibits agents from contacting employers or visiting government offices. Violations are stopped via legal notices.'
    },
    {
      q: 'How does settling an education loan impact PSU or PSC appointments?',
      a: 'Education loan settlements have zero adverse impact. Public employers verify educational credentials. Holding an official No Dues Certificate ensures full clearance.'
    },
    {
      q: 'Can I convert a Settled CIBIL remark to Closed after joining?',
      a: 'Yes. Under Section 21 of CICRA 2005, you can remit remaining balances later, prompting credit bureaus to update remarks to Closed.'
    },
    {
      q: 'Can a bank freeze my government salary account for an old loan?',
      a: 'Banks can only exercise set-off if your salary account is with the same bank. Opening accounts at unrelated public banks prevents set-off.'
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
            <GraduationCap className="w-3.5 h-3.5 text-blue-200" />
            <span>Government Employment &amp; Credit Law Directive</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Does Loan Settlement Affect Government Job? UPSC, SSC &amp; Bank Rules
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Clarify legal boundaries between civil debt settlement and government job checks. Learn how Central Civil Services Conduct Rules, police verifications, and public sector bank policies evaluate settled loans, CIBIL scores, and No Dues Certificates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Government Aspirant? Consult Our Senior Lawyers</span>
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
                  <span>Statutory Employment Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under CCS Conduct Rules 1964, Indian Contract Act §73, and RBI Fair Practices Code.
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
                <span>EXECUTIVE SUMMARY: LOAN SETTLEMENT &amp; GOVERNMENT EMPLOYMENT RULES</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-normal">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Civil Dispute Status:</strong> Loan default is a civil contractual dispute under Indian Contract Act, carrying zero criminal liability.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Police Verification Immunity:</strong> Police verification checks criminal FIRs and court warrants; authorities never inspect CIBIL records.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">UPSC &amp; SSC Eligibility:</strong> UPSC, SSC, and State PSC appointments are never disqualified by civil debt defaults or settled loans.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">CCS Conduct Rule 16:</strong> Rule 16 addresses habitual insolvency; pre-joining settlements do not violate service conduct rules.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Banking Sector Clearance:</strong> IBPS and SBI onboarding requires clearing defaults; presenting an official No Dues Certificate satisfies joining criteria.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Statutory Notice Resolution:</strong> Section 25 PSSA and Section 138 NI Act notices are compoundable and dismissed upon OTS completion.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Workplace Harassment Shield:</strong> RBI Fair Practices Code prohibits recovery agents from contacting recruitment boards or employers.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Attestation Form Accuracy:</strong> Attestation forms query criminal convictions rather than settled retail bank debts.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Section 21 CICRA Upgrades:</strong> Civil servants can convert remarks from Settled to Closed by paying waived differentials.</span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="debt-economics-npa-dynamics" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Civil Debt Economics vs. Government Service</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics &amp; NPA Dynamics: Civil Debt vs. Government Employment
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Thousands of competitive exam candidates across India accumulate retail financial obligations, including personal loans, education facilities, coaching EMIs, or credit card dues during intensive preparation cycles. When extended exam attempts or parental income disruptions deplete liquid cash reserves, continuing debt service becomes unviable.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Under Reserve Bank of India regulations, missed installments transition sequentially through SMA-0, SMA-1, and SMA-2, before formal Non-Performing Asset (NPA) classification at 90 days. This triggers mandatory Tier-1 capital provisioning requirements on lending institutions. Because unsecured personal and education loans carry zero attachable real estate collateral under the SARFAESI Act, banks face protracted recovery timelines. Crucially, Indian jurisprudence strictly categorizes loan default as a civil breach of contract under the Indian Contract Act, 1872. It carries zero criminal culpability, no police arrest power, and zero impact on character verification unless fraudulent intent is involved. Consequently, credit committees routinely approve commercial One-Time Settlements (OTS) at 40% to 55% of principal to extinguish bad debt and release locked capital reserves.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-settlement-formula" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calculator className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis &amp; Settlement Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: The OTS Formula for Government Aspirants
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Following default, collection departments artificially inflate claimed balances by compounding annual penal interest rates (24% to 36%), late payment surcharges, and mandate bounce fees. Over 12 to 18 months, an original principal balance of ₹6.8 Lakhs escalates into an inflated recovery demand of ₹11.8 Lakhs to ₹13.5 Lakhs. Strategic debt settlement isolates the net principal, establishes authentic borrower illiquidity, and secures a 100% waiver on all artificial penal levies:
              </p>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ReceiptText className="w-4 h-4 text-[#1886ff]" />
                    <span>Anatomy of a Defaulted Aspirant Loan Claim</span>
                  </h3>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    180-Day NPA Case
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">Disbursed Facility Amount:</span>
                    <span className="font-semibold text-slate-900">₹10,00,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">Principal Repaid Prior to Default:</span>
                    <span className="font-semibold text-emerald-600">- ₹3,20,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 font-bold">
                    <span className="text-slate-700">True Outstanding Net Principal Balance:</span>
                    <span className="text-slate-900">₹6,80,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">Contractual Interest Accrued:</span>
                    <span className="font-semibold text-slate-700">₹1,45,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">Compounded Penal &amp; Overdue Charges:</span>
                    <span className="font-semibold text-red-600">+ ₹3,60,000</span>
                  </div>
                  <div className="flex justify-between py-1 bg-slate-50 px-2.5 rounded font-bold">
                    <span className="text-slate-800">Total Claim Demanded by Recovery Desk:</span>
                    <span className="text-red-700">₹11,85,000 – ₹13,50,000</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-emerald-800 block">CredSettle Settlement Target</span>
                      <span className="text-[11px] text-emerald-700">40% - 55% of Principal (100% Penal Waiver)</span>
                    </div>
                    <span className="text-base sm:text-lg font-black text-emerald-700">₹2,72,000 – ₹3,74,000</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="status-comparison-matrix" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Resolution Pathways Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparative Resolution Matrix: Settlement vs. Restructuring vs. Default
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Candidates facing loan stress have five primary resolution pathways under Indian banking law:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 font-bold">Option</th>
                      <th className="p-3 font-bold">Outflow</th>
                      <th className="p-3 font-bold">CIBIL Status</th>
                      <th className="p-3 font-bold">Job &amp; Verification Impact</th>
                      <th className="p-3 font-bold">Timeline</th>
                      <th className="p-3 font-bold text-[#1886ff]">Strategic Assessment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">One-Time Settlement</td>
                      <td className="p-3 text-emerald-700 font-semibold">40%–55% Principal</td>
                      <td className="p-3">Settled</td>
                      <td className="p-3 text-emerald-700 font-semibold">100% Safe (NDC clears all checks)</td>
                      <td className="p-3">45–90 Days</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Optimal path for debt freedom</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Restructuring</td>
                      <td className="p-3">100% Principal + Interest</td>
                      <td className="p-3">Restructured</td>
                      <td className="p-3 text-emerald-700 font-semibold">100% Safe (Regular EMIs)</td>
                      <td className="p-3">48–72 Months</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Viable only if regular salary is assured</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Court Litigation</td>
                      <td className="p-3 text-red-700 font-semibold">Legal Fees</td>
                      <td className="p-3 text-red-700 font-bold">Suit Filed</td>
                      <td className="p-3 text-amber-700 font-semibold">Disclose in select forms</td>
                      <td className="p-3">2–4 Years</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Defensive posture to force OTS</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Lok Adalat Settlement</td>
                      <td className="p-3 text-emerald-700 font-semibold">45%–60% Principal</td>
                      <td className="p-3">Settled via Adalat</td>
                      <td className="p-3 text-emerald-700 font-semibold">100% Safe (Final civil decree)</td>
                      <td className="p-3">1 Day</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Binding judicial closure</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Inaction / Default</td>
                      <td className="p-3 text-red-700 font-semibold">Claims Balloon</td>
                      <td className="p-3 text-red-700 font-bold">Written Off</td>
                      <td className="p-3 text-red-700 font-bold">Harassment risk; Section 25</td>
                      <td className="p-3">Indefinite</td>
                      <td className="p-3 text-red-600 font-semibold">Dangerous credit damage</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="technical-cibil-scoring-math" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>CIBIL Algorithm &amp; Employment Checks</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Technical CIBIL Scoring Math: Impact on Government Job Verifications
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Credit rating bureaus compute individual scores based on five weighted parameters: Payment History (35%), Credit Exposure (30%), Credit Longevity (15%), Credit Mix (10%), and Recent Inquiries (10%).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 text-xs">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Percent className="w-4 h-4 text-[#1886ff]" />
                    Weight Distribution &amp; Settlement Mechanics
                  </h3>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Payment History (35%):</span>
                    <span className="font-bold text-slate-900">Drops -90 to -140 pts during default</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Credit Exposure (30%):</span>
                    <span className="font-bold text-emerald-600">Resets to ₹0 balance post-settlement</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Credit Longevity &amp; Mix (25%):</span>
                    <span className="font-bold text-slate-700">Preserved on older active facilities</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 text-xs">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-600" />
                    Credit Score Rehabilitation Trajectory
                  </h3>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Phase 1 (Months 1–6):</span>
                    <span className="font-bold text-slate-800">+35 to +50 pts via Secured Card</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Phase 2 (Months 7–18):</span>
                    <span className="font-bold text-emerald-700">Rebuild to 750+ Prime CIBIL rating</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Conversion Milestone:</span>
                    <span className="font-bold text-indigo-700">Convert Settled to Closed under CICRA</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl text-xs text-emerald-950">
                <strong>Section 21 CICRA Remedy:</strong> Under Section 21 of CICRA 2005, appointed civil servants who settled a loan can pay the waived differential later to convert status from Settled to Closed across all credit bureaus.
              </div>
            </section>

            {/* SECTION 5: Embedded 16:9 Infographic Banner */}
            <section id="visual-infographic-blueprint" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Resolution Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: Government Jobs &amp; Loan Settlement Rules
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Review this comprehensive 6-stage roadmap detailing the legal intersection between civil debt settlement, police verification, CCS Conduct Rules, and bank recruitment clearance:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/does-loan-settlement-affect-government-job.jpg"
                    alt="Government Jobs and Loan Settlement: Legal and CIBIL Rules Blueprint"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-2 px-1 flex items-center justify-between text-[11px] text-slate-500">
                  <span>CredSettle Government Job &amp; Credit Protection Blueprint • RBI &amp; DoPT Compliant</span>
                  <a
                    href="/images/infographics/does-loan-settlement-affect-government-job.jpg"
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
                5. Standard Operating Procedure (SOP): 6 Stages to Settle Debt Before Joining
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Resolving outstanding debt as a government job candidate requires adhering to a structured 6-stage protocol to eliminate legal liabilities, prevent workplace harassment, and secure full employment clearance:
              </p>

              <div className="space-y-3 text-xs">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 1: Days 1–15</span>
                  <h3 className="font-bold text-slate-900 text-sm">Statement Audit &amp; Principal Isolation</h3>
                  <p className="text-slate-600">Demand certified Statement of Account. Audit historical payments, eliminate 36% compound penal fees, and isolate true net principal as the settlement baseline.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 2: Days 16–30</span>
                  <h3 className="font-bold text-slate-900 text-sm">Hardship Dossier &amp; Legal Shielding</h3>
                  <p className="text-slate-600">Assemble hardship documentation, including exam gap affidavits and medical bills. Serve formal Cease-and-Desist notice under RBI Fair Practices Code to stop agent harassment.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 3: Days 31–45</span>
                  <h3 className="font-bold text-slate-900 text-sm">Credit Committee Representation</h3>
                  <p className="text-slate-600">Submit formal compromise petition to bank Zonal NPA Committee. Cite RBI directives, establish bona fide illiquidity, and propose initial 30% to 35% principal offer.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 4: Days 46–60</span>
                  <h3 className="font-bold text-slate-900 text-sm">Bilateral Compromise Negotiations</h3>
                  <p className="text-slate-600">Leverage mandatory quarterly provisioning pressures and lack of attachable assets. Negotiate with senior recovery managers to secure committee approval for 40% to 55% settlement.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 5: Days 61–75</span>
                  <h3 className="font-bold text-slate-900 text-sm">Sanction Letter Legal Vetting</h3>
                  <p className="text-slate-600">Audit formal Settlement Sanction Letter on bank letterhead. Verify exact settlement figures, total waiver clauses, payment terms, and binding No Dues Certificate commitments.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 6: Days 76–90</span>
                  <h3 className="font-bold text-slate-900 text-sm">Remittance, Withdrawal &amp; NDC</h3>
                  <p className="text-slate-600">Remit funds directly into loan account via RTGS. Collect official No Dues Certificate within 30 days, ensure formal withdrawal of statutory notices, and verify zero balance.</p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense-grid" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Notice Defense Grid</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense &amp; Legal Protections for Government Aspirants
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                When navigating loan default, understanding statutory legal frameworks ensures your civil dispute never escalates during government character and antecedent checks:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Section 25 PSSA 2007 (NACH Bounce)</span>
                  </div>
                  <p className="text-slate-600">Issued when electronic ECS/NACH mandates fail. A 15-day legal reply establishes lack of mens rea and initiates OTS negotiations. Proceedings are quashed upon settlement.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold">
                    <Scale className="w-4 h-4" />
                    <span>Section 138 NI Act 1881 (Cheque Bounce)</span>
                  </div>
                  <p className="text-slate-600">Arises from dishonoured security cheques. Cheque bounce is compoundable under Section 147, resulting in immediate case withdrawal upon OTS payment.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold">
                    <Gavel className="w-4 h-4" />
                    <span>Arbitration Section 21 (Perkins Ruling)</span>
                  </div>
                  <p className="text-slate-600">Supreme Court rulings in TRF Ltd. and Perkins Eastman establish that unilateral arbitrator appointments are void ab initio under Section 12(5).</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold">
                    <Building2 className="w-4 h-4" />
                    <span>DRT Section 19 &amp; Civil Suits</span>
                  </div>
                  <p className="text-slate-600">Debt Recovery Tribunals only have jurisdiction over claims exceeding ₹20 Lakhs. Lower claims are resolved through ordinary civil courts or Lok Adalat settlements.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 text-xs">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                  Borrower Rights Under RBI Fair Practices Code
                </h3>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>Collection calls and visits are strictly restricted between 8:00 AM and 7:00 PM.</li>
                  <li>Strict prohibition against contacting government offices, recruitment boards, colleagues, or relatives.</li>
                  <li>Zero tolerance for intimidating, abusive, or defamatory language by recovery personnel.</li>
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
                7. The 3-Tier Escalation Matrix for Aspirants &amp; Government Employees
              </h2>

              <div className="space-y-3 text-xs">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <span className="text-[11px] font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Level 1: Grievance Redressal Officer (GRO)</span>
                  <p className="text-slate-600 mt-1">Submit a formal written OTS compromise petition and harassment complaint to the Branch Manager and Bank GRO (7 to 10 working days).</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">Level 2: Principal Nodal Officer (PNO)</span>
                  <p className="text-slate-600 mt-1">Escalate to Bank Principal Nodal Officer if unresolved within 30 days or for unauthorized workplace contact (14 to 21 working days).</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-xs space-y-1">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Level 3: RBI Integrated Ombudsman</span>
                  <p className="text-slate-600 mt-1">Lodge regulatory complaint on <strong>cms.rbi.org.in</strong> under RBI Integrated Ombudsman Scheme 2021 for binding directions and penalties.</p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
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
                      <th className="p-3 font-bold">Classification</th>
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
                      <td className="p-3">Demand notices issued</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Compile hardship dossier; serve Cease-and-Desist notice</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Days 91–120</td>
                      <td className="p-3">NPA</td>
                      <td className="p-3">Section 25 / 138 notices</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Submit formal OTS petition to Zonal NPA Committee</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Months 4–5</td>
                      <td className="p-3">Compromise</td>
                      <td className="p-3">Committee review</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Negotiate 40%–55% waiver; secure Sanction Letter</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Month 6</td>
                      <td className="p-3">Settled</td>
                      <td className="p-3">Issue official NDC</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Remit funds directly; collect NDC; clear onboarding</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-loan-scenarios" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Exam Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: Multi-Lender Portfolios, Layoffs &amp; Education Loans
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Multi-Lender Consolidation</h3>
                  <p className="text-slate-600">Aspirants managing multiple debts (e.g. ₹3L + ₹2.5L + ₹2L) should prioritize aggressive lenders first, resolving each loan through sequential OTS to achieve debt freedom before joining.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Corporate Layoffs to Civil Services</h3>
                  <p className="text-slate-600">Working professionals facing retrenchment before clearing UPSC/State PSC can present termination letters to secure deep principal discounts from bank credit committees.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Education Loans with Co-Obligation</h3>
                  <p className="text-slate-600">Defaulted student loans with parent co-borrowers can be settled via OTS. The bank issues a joint No Dues Certificate, freeing both candidate and parent from liability.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Debts Assigned to ARCs</h3>
                  <p className="text-slate-600">When loans are sold to ARCs (e.g., CFM, Phoenix, ARCIL), ARCs purchase debt at steep discounts, allowing candidates to negotiate 60%–75% total waivers.</p>
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
                Frequently Asked Questions on Loan Settlement &amp; Government Jobs
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
            <section id="regulatory-citations-grid" className="scroll-target space-y-4 pt-5 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Legal References
              </h2>

              <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed list-disc pl-5">
                <li><strong className="text-slate-900 font-bold">CCS (Conduct) Rules 1964 (Rule 16):</strong> Insolvency and indebtedness provisions for civil servants.</li>
                <li><strong className="text-slate-900 font-bold">Reserve Bank of India (RBI):</strong> Master Direction on Fair Practices Code for Lenders.</li>
                <li><strong className="text-slate-900 font-bold">RBI Integrated Ombudsman 2021:</strong> Dispute mechanism on cms.rbi.org.in.</li>
                <li><strong className="text-slate-900 font-bold">CICRA 2005 (Section 21):</strong> Bureau dispute resolution and status conversion.</li>
                <li><strong className="text-slate-900 font-bold">PSSA 2007 (Section 25) &amp; NI Act 1881 (Section 138):</strong> Mandate and cheque dishonour defenses.</li>
                <li><strong className="text-slate-900 font-bold">Indian Contract Act 1872 (Section 73):</strong> Civil contractual breach framework.</li>
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
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Get NDC / NOC</Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Convert Settled to Closed</Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Rebuild CIBIL</Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">NACH Section 25</Link>
                  <Link href="/section-138-cheque-bounce-personal-loan" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Section 138 Defense</Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Arbitration Defense</Link>
                  <Link href="/mental-harassment-by-recovery-agents-legal-action" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Stop Harassment</Link>
                  <Link href="/settle-1-lakh-personal-loan" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Settle ₹1L Loan</Link>
                  <Link href="/settle-2-lakh-personal-loan" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Settle ₹2L Loan</Link>
                  <Link href="/settle-3-lakh-personal-loan" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Settle ₹3L Loan</Link>
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
                Specialized in banking compliance, government employment background checks, and NPA compromise negotiations across Indian civil forums.
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
                  Government Aspirant Facing Loan Default?
                </h3>
                <p className="text-blue-100 text-xs leading-relaxed font-normal">
                  Our debt experts negotiate with bank credit committees to stop harassment, secure a 40% to 55% waiver, and obtain an official NDC.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-2.5 px-3 rounded-full font-bold text-xs hover:bg-slate-50 transition-all shadow-md"
              >
                Speak to Lawyers
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
                <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-600 flex-shrink-0" /><span><strong>RBI &amp; DoPT Compliance:</strong> Lawful dispute handling.</span></li>
                <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-600 flex-shrink-0" /><span><strong>Pan-India Defense:</strong> Senior banking advocates.</span></li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2 text-xs">
              <h4 className="font-bold text-slate-900 text-xs">Related Debt Guides</h4>
              <div className="space-y-1.5">
                <Link href="/get-noc-after-loan-settlement" className="block p-2 rounded-xl border border-slate-100 hover:bg-blue-50/50 text-[11px] font-bold text-slate-800 hover:text-[#1886ff]">
                  Get No Objection Certificate (NOC) &rarr;
                </Link>
                <Link href="/convert-settled-status-to-closed" className="block p-2 rounded-xl border border-slate-100 hover:bg-blue-50/50 text-[11px] font-bold text-slate-800 hover:text-[#1886ff]">
                  Convert Settled Status to Closed &rarr;
                </Link>
                <Link href="/ecs-nach-bounce-legal-notice-section-25" className="block p-2 rounded-xl border border-slate-100 hover:bg-blue-50/50 text-[11px] font-bold text-slate-800 hover:text-[#1886ff]">
                  NACH Bounce Section 25 Defense &rarr;
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
