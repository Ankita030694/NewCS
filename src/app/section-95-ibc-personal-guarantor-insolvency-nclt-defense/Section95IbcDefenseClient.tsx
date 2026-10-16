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
  CreditCard,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark
} from 'lucide-react';

export default function Section95IbcDefenseClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Defense Crux' },
    { id: 'statutory-framework', label: '1. Statutory Personal Guaranty Rules' },
    { id: 'financial-forensics', label: '2. Corporate Debt vs Personal Exposure' },
    { id: 'defense-matrix', label: '3. NCLT Grounds for Dismissal' },
    { id: 'supreme-court-precedents', label: '4. Dilip Jiwrajka & Lalit Jain Rulings' },
    { id: 'visual-blueprint', label: '5. Personal Guarantor Defense Workflow' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Defense Protocol at NCLT' },
    { id: 'statutory-defenses', label: '7. Contract Act & Limitation Bars' },
    { id: 'interim-moratorium', label: '8. Section 96 Interim Moratorium Shield' },
    { id: 'procedural-timeline', label: '9. Section 95 Petition Milestones' },
    { id: 'specialized-scenarios', label: '10. Co-Guarantors & OTS Relief' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a creditor file Section 95 IBC against a personal guarantor if corporate CIRP is pending?',
      a: 'Yes. Under Section 60(2) of the IBC, lenders can file Section 95 against a personal guarantor before the same NCLT bench where corporate CIRP is pending. Both cases run side by side before the tribunal.'
    },
    {
      q: 'Does Section 96 interim moratorium stop DRT, SARFAESI, and civil court proceedings?',
      a: 'Yes. The moment a lender files Section 95, Section 96 interim moratorium starts right away. It stays all pending debt recovery actions, DRT cases, and SARFAESI possession notices against the guarantor.'
    },
    {
      q: 'Did the Supreme Court uphold Section 95 IBC in Dilip B. Jiwrajka v. Union of India?',
      a: 'Yes. In November 2023, the Supreme Court upheld Section 95 of the IBC. But the court held that the Resolution Professional report is only a recommendation. The NCLT must give the guarantor a fair hearing before admitting the case.'
    },
    {
      q: 'Can I challenge a Section 95 application if the guarantee deed invocation was defective?',
      a: 'Yes. Lenders must follow the exact notice terms in your guarantee deed. They must also send a mandatory 14-day Form B demand notice under Rule 7(1). If they fail to do so, the NCLT can dismiss the petition as premature.'
    },
    {
      q: 'What is the limitation period for filing Section 95 against a personal guarantor?',
      a: 'The limitation period is 3 years under Article 137 of the Limitation Act. Time starts from the date the bank invokes the guarantee. If 3 years pass without written debt acknowledgment, the claim is time-barred.'
    },
    {
      q: 'Does approval of a resolution plan for the corporate debtor release the personal guarantor?',
      a: 'Not automatically. The Supreme Court ruled in Lalit Kumar Jain that a corporate resolution plan does not discharge the guarantor. However, the bank must give full credit for all money recovered through CIRP. Double recovery is illegal.'
    },
    {
      q: 'How does Section 133 of the Indian Contract Act protect personal guarantors?',
      a: 'Section 133 protects you if the bank changes loan terms without your consent. Any unapproved change to interest rates, credit limits, or repayment tenure discharges you from future liability.'
    },
    {
      q: 'What role does the Resolution Professional (RP) play under Section 99 IBC?',
      a: 'The RP examines the bank petition and checks loan papers. Under Section 99(2), the RP must give you a chance to prove your defense. The RP then submits a report to the NCLT within 10 days.'
    },
    {
      q: 'Can personal guarantors negotiate a One-Time Settlement (OTS) while Section 95 is pending?',
      a: 'Yes. Many promoters use the Section 96 moratorium window to negotiate a One-Time Settlement (OTS). Once the bank agrees, both parties file a joint withdrawal plea under Rule 11 of NCLT Rules.'
    },
    {
      q: 'How does CredSettle assist personal guarantors facing Section 95 IBC proceedings?',
      a: 'CredSettle audits guarantee papers for legal defects. Our team drafts strong replies to the RP, raises Contract Act defenses before NCLT, and negotiates deep debt waivers directly with bank decision-makers.'
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
            <span>Insolvency &amp; Bankruptcy Code • NCLT Personal Guarantor Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Section 95 IBC Personal Guarantor Defense Before NCLT
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A complete legal guide for company promoters and loan guarantors facing NCLT cases. Learn your rights under the Section 96 stay, key court rulings, and smart debt relief plans.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Consult NCLT Defense Specialists</span>
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
                  <span>NCLT &amp; IBC Statutory Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected by the Section 96 stay and Indian Contract Act rules.
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
                <span>EXECUTIVE BRIEF: SECTION 95 IBC DEFENSE BEFORE NCLT</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Automatic Section 96 Moratorium:</strong> Filing Section 95 halts all ongoing court cases, DRT actions, and SARFAESI notices against you.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Supreme Court Safeguards:</strong> In Dilip Jiwrajka, the Supreme Court ruled that the RP report is only a recommendation. You get a full hearing before NCLT.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Form B Demand Notice:</strong> Lenders must serve a clear 14-day demand notice. Failure to do so makes the petition invalid.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Contract Act Protections:</strong> Loan changes made without your consent under Section 133 release you from liability. Claims past 3 years are also barred.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Consortium Settlement Window:</strong> Use the moratorium period to negotiate an affordable One-Time Settlement (OTS) with lenders.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Personal Guaranty Rules */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Insolvency Code</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Section 95 IBC Framework: Statutory Personal Guaranty Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many business loans require a personal guarantee from company promoters. If the company fails to pay, banks can take legal action against the guarantor. Under Section 95 of the Insolvency and Bankruptcy Code (IBC), lenders can file a case in the National Company Law Tribunal (NCLT). This starts personal insolvency against the guarantor.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 60(2) of the Code controls where lenders must file. If the company is already under insolvency, the lender must file against the guarantor before the same NCLT bench. This rule keeps both cases in one court.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before filing, lenders must follow strict legal rules. Under Rule 7(1), the lender must serve a formal demand notice in Form B. The lender must give you at least fourteen days to pay or reply.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the lender skips these rules, you can challenge the case. The tribunal can reject premature or flawed petitions. CredSettle helps personal guarantors spot these mistakes and defend their rights.
              </p>
            </section>

            {/* SECTION 2: Corporate Debt vs Personal Exposure */}
            <section id="financial-forensics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics &amp; Liability Audit</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Forensics: Corporate Debt vs Personal Exposure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks often claim inflated dues from personal guarantors. They add heavy penal charges, unapproved fees, and compound interest to the original loan balance. Many lenders also fail to deduct money recovered through company asset sales.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A guarantee contract creates serious financial duties. But your liability cannot exceed the exact terms of your agreement. If the bank increased the loan limit without your consent, you are not liable for that extra debt.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A detailed audit of your loan statements can expose bank errors. You can challenge illegal charges and dispute unverified sums. This defense helps you cut total claims and reach a fair settlement.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Ledger Audit &amp; Guarantor Exposure Reduction</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹45 Crore Corporate Claim</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Claim Component / Asset Forensic</th>
                        <th className="p-3">Creditor Demand Amount</th>
                        <th className="p-3">Legal &amp; Accounting Objection</th>
                        <th className="p-3 text-right">Admissible Liability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Original Sanctioned Guarantee Exposure</td>
                        <td className="p-3">₹20,00,00,000</td>
                        <td className="p-3 text-slate-700 font-medium">Valid executed guarantee deed baseline</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹20,00,00,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Unapproved Loan Enhancement (Post-Execution)</td>
                        <td className="p-3 text-rose-600 font-bold">₹15,00,00,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Discharged under Section 133 Contract Act</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹0 (Discharged)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Compounded Penal Charges &amp; Legal Fees</td>
                        <td className="p-3 text-rose-600 font-bold">₹4,50,00,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Disallowed under RBI Fair Lending Guidelines</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹0 (Struck Down)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Credit for CIRP Resolution Plan Payout</td>
                        <td className="p-3 text-blue-600 font-bold">- ₹8,00,00,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Mandatory credit to prevent double recovery</td>
                        <td className="p-3 text-right font-bold text-emerald-700">- ₹8,00,00,000 (Adjusted)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Net Resolved Guarantor Exposure</td>
                        <td className="p-3 text-slate-900">₹31,50,00,000 Waived</td>
                        <td className="p-3 text-emerald-700">70% Aggregate Reduction Achieved via Defense</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹12,00,00,000 (OTS Value)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Strategic Defense Matrix */}
            <section id="defense-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Tribunal Grounds &amp; Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Strategic Defense Matrix: NCLT Grounds for Dismissal
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Personal guarantors can raise strong legal objections before the NCLT. Knowing your rights helps you stop bank pressure and protect personal property.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The NCLT handles insolvency cases under summary rules. If a bank petition has major legal flaws, the bench can dismiss it before admission under Section 100.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Defense Classification</th>
                      <th className="p-3">Statutory Basis</th>
                      <th className="p-3">Threshold Requirements</th>
                      <th className="p-3">Impact on Section 95 Petition</th>
                      <th className="p-3">Strategic Action Required</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Defective Demand Notice</td>
                      <td className="p-3">Rule 7(1) IBBI Rules, 2019</td>
                      <td className="p-3 text-slate-700">Mandatory 14-day Form B notice unserved or flawed.</td>
                      <td className="p-3 text-rose-600 font-semibold">Petition premature and dismissed.</td>
                      <td className="p-3">File preliminary maintainability objection.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Bar of Limitation</td>
                      <td className="p-3">Article 137 Limitation Act, 1963</td>
                      <td className="p-3 text-slate-700">More than 3 years elapsed from invocation date.</td>
                      <td className="p-3 text-rose-600 font-semibold">Complete dismissal with prejudice.</td>
                      <td className="p-3">Prove lack of signed Section 18 acknowledgments.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Contractual Variance</td>
                      <td className="p-3">Section 133 Contract Act, 1872</td>
                      <td className="p-3 text-slate-700">Lender altered credit terms without guarantor assent.</td>
                      <td className="p-3 text-emerald-600 font-semibold">Full discharge of guarantor liability.</td>
                      <td className="p-3">Produce sanction letters showing unauthorized restructuring.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Loss of Primary Securities</td>
                      <td className="p-3">Section 141 Contract Act, 1872</td>
                      <td className="p-3 text-slate-700">Creditor dissipated pledged or hypothecated stock.</td>
                      <td className="p-3 text-emerald-600 font-semibold">Discharge pro-tanto to security value.</td>
                      <td className="p-3">Demonstrate bank negligence in asset preservation.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Double Recovery Bar</td>
                      <td className="p-3">Section 31 IBC, 2016</td>
                      <td className="p-3 text-slate-700">Creditor failed to deduct CIRP or SARFAESI receipts.</td>
                      <td className="p-3 text-amber-600 font-semibold">Claim recomputed and pruned.</td>
                      <td className="p-3">Submit approved resolution plan financial statements.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Lack of Territorial Jurisdiction</td>
                      <td className="p-3">Section 60(1) vs 60(2) IBC</td>
                      <td className="p-3 text-slate-700">No CIRP pending against corporate debtor.</td>
                      <td className="p-3 text-rose-600 font-semibold">Petition returned for presentation at DRT.</td>
                      <td className="p-3">Challenge forum maintainability under Section 60.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Dilip Jiwrajka & Lalit Jain Rulings */}
            <section id="supreme-court-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Constitutional Bench Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Supreme Court Precedents: Dilip Jiwrajka &amp; Lalit Jain
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Two major Supreme Court rulings shape personal guarantor rights under the IBC. These decisions protect borrowers from unfair procedures.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In Dilip B. Jiwrajka v. Union of India (2023), the Supreme Court upheld Section 95. But the court placed clear limits on the Resolution Professional (RP). The RP does not act as a judge. The RP only examines papers and files a report.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The court held that every guarantor has a right to be heard. You can submit your defense to the RP under Section 99(2). Then, the NCLT must hear you before deciding to admit or reject the case.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In Lalit Kumar Jain v. Union of India (2021), the court held that settling company debt does not automatically free the guarantor. However, banks must credit all money recovered from the company. Banks cannot collect the same debt twice.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Personal Guarantor Defense Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart outlines the Section 95 legal defense workflow. It shows how the Section 96 interim moratorium shields you while your defense is prepared.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/section-95-ibc-personal-guarantor-insolvency-nclt-defense.jpg"
                    alt="Section 95 IBC Personal Guarantor Defense Legal Workflow"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Insolvency Defense Framework • NCLT &amp; IBC Compliant</span>
                  <a
                    href="/images/infographics/section-95-ibc-personal-guarantor-insolvency-nclt-defense.jpg"
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
                6. Step-by-Step SOP: 6-Stage Defense Protocol at NCLT
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a creditor files Section 95, follow this six-stage defense protocol. It protects your personal assets and builds strong bargaining power for a fair settlement.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Audit Form B Demand Notice
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check if the bank served a valid 14-day demand notice under Rule 7(1). Verify service dates and check if the guarantee was properly invoked.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Assert Section 96 Interim Moratorium
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Notify the DRT, civil courts, and bank officers that Section 95 is filed. By law, all other recovery actions for this debt stop immediately.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Submit Defense Evidence to RP
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Section 99(2), send your written objections to the Resolution Professional. Point out time limits, unauthorized loan changes, and ledger errors.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: File NCLT Dismissal Plea
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Present formal objections before the NCLT bench. Ask the tribunal to dismiss the case if it is time-barred or lacks proper stamp duty.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Negotiate Out-of-Court Settlement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Use the stay period to talk directly with the bank credit team. Offer a realistic one-time settlement based on real asset values.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Withdraw Petition &amp; Release Guarantee
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    After you pay the agreed settlement sum, file a joint withdrawal plea under Rule 11. Secure an official release of your personal guarantee.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Contract Act & Limitation Bars */}
            <section id="statutory-defenses" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Defenses &amp; Contract Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Defenses: Contract Act &amp; Limitation Bars
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Indian Contract Act of 1872 gives strong defenses to guarantors. These protections apply even during IBC cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 133 Contract Act (Loan Changes)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank changes loan terms without your written consent, the law frees you from liability for future debt.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Article 137 Limitation Act (3-Year Limit)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks must file Section 95 within three years of invoking your guarantee. If three years pass without a signed acknowledgment, the claim expires.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Section 135 Contract Act (Time Extensions)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank gives extra time to the company without your consent, you may be released from your guarantee.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Section 141 Contract Act (Lost Securities)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank loses pledged goods, your debt drops by that value. You do not pay for bank mistakes.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Scope & Legal Shield */}
            <section id="interim-moratorium" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Interim Moratorium Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Section 96 Interim Moratorium: Scope &amp; Legal Shield
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 96 creates an automatic interim moratorium. It starts the very day the lender files Section 95 in the NCLT. You do not need to wait for a judge order.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 96(1)(b), all pending court actions for that debt are stayed. Creditors cannot start new recovery suits or seize your home.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Legal Action / Proceeding</th>
                      <th className="p-3">Forum / Enactment</th>
                      <th className="p-3">Section 96 Moratorium Status</th>
                      <th className="p-3">Practical Legal Effect for Guarantor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">DRT Original Application (OA)</td>
                      <td className="p-3">RDDBFI Act, 1993</td>
                      <td className="p-3 text-emerald-600 font-semibold">Completely Stayed</td>
                      <td className="p-3">Recovery officer cannot issue warrants or attach individual bank accounts.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">SARFAESI Physical Possession</td>
                      <td className="p-3">SARFAESI Act, 2002 (Sec 13/14)</td>
                      <td className="p-3 text-emerald-600 font-semibold">Stayed for Subject Debt</td>
                      <td className="p-3">Lender cannot take physical possession of personal residential properties.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Civil Recovery Suits &amp; Execution</td>
                      <td className="p-3">Code of Civil Procedure, 1908</td>
                      <td className="p-3 text-emerald-600 font-semibold">Deemed Stayed</td>
                      <td className="p-3">Money decrees cannot be executed against guarantor personal assets.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Cheque Bounce Proceedings</td>
                      <td className="p-3">Negotiable Instruments Act (Sec 138)</td>
                      <td className="p-3 text-amber-600 font-semibold">Quasi-Criminal Exception</td>
                      <td className="p-3">Criminal trials may continue unless specifically stayed by High Court under Section 482.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Section 95 Petition Milestones */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Section 95 Petition Milestones
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing the Section 95 timeline helps you plan your legal steps. You can gather documents and build your defense before key hearings.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Procedural Stage</th>
                      <th className="p-3">Statutory Provision</th>
                      <th className="p-3">Prescribed Timeline</th>
                      <th className="p-3">Key Defense Milestone</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Demand Notice Service</td>
                      <td className="p-3 font-mono text-[11px]">Rule 7(1) Form B</td>
                      <td className="p-3 font-medium">14 Days Prior to Filing</td>
                      <td className="p-3">Audit guarantee deed terms and inspect notice service records.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Petition Filing in Form C</td>
                      <td className="p-3 font-mono text-[11px]">Section 95(1) IBC</td>
                      <td className="p-3 font-medium">Day 0 (Filing Date)</td>
                      <td className="p-3 text-emerald-700 font-bold">Section 96 interim moratorium commences automatically.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">RP Appointment Order</td>
                      <td className="p-3 font-mono text-[11px]">Section 97 IBC</td>
                      <td className="p-3 font-medium">7 to 14 Days</td>
                      <td className="p-3">Verify RP credentials and ensure zero conflict of interest.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">RP Scrutiny &amp; Report</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Section 99 IBC</td>
                      <td className="p-3 font-medium">10 Days from Appointment</td>
                      <td className="p-3">Submit detailed written representation and objection documents under Section 99(2).</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Tribunal Adjudication</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Section 100 IBC</td>
                      <td className="p-3 font-medium">14 Days Post-Report</td>
                      <td className="p-3 font-bold text-slate-900">Judicial hearing before NCLT bench to admit or reject petition.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Repayment Plan &amp; Discharge</td>
                      <td className="p-3 font-mono text-[11px]">Sections 105 to 119</td>
                      <td className="p-3 font-medium">180 Days from Admission</td>
                      <td className="p-3">Present consensus repayment plan or execute formal OTS withdrawal.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Co-Guarantors & OTS Relief */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Co-Guarantors &amp; OTS Relief
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Company loans often involve family members or retired directors. Here is how the law protects you in special cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Multiple Co-Guarantors &amp; Contribution Rights
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 146 of the Contract Act, co-guarantors share debt equally. Banks cannot target one guarantor while ignoring the others.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Resigned Company Directors &amp; Fresh Debt
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Directors who resigned before new loans were given can invoke Section 130. Official MCA filings prove you are not liable for fresh debt.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Corporate Insolvency Plan Adjustments
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the company went through CIRP, banks must deduct all funds received. Lenders cannot claim double payment from guarantors.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    One-Time Settlement &amp; Rule 11 Withdrawal
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Promoters can settle bank debts through compromise deals. Once settled, the case is withdrawn under Rule 11 of NCLT Rules.
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
                Frequently Asked Questions: Section 95 IBC Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Find clear answers to top questions on Section 95 cases, the Section 96 stay, and your legal rights.
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
                Official Statutory Citations &amp; Legal Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Insolvency and Bankruptcy Code, 2016:</strong> Sections 60(2), 95, 96, 97, 99, 100, 105, and 119 governing Personal Guarantor Insolvency Resolution.
                </li>
                <li>
                  <strong>IBBI Personal Guarantors Insolvency Rules, 2019:</strong> Rule 7(1), Mandatory Form B Statutory Demand Notice and Form C Application.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Sections 126, 128, 133, 134, 135, 141, and 146 governing Surety Rights and Discharges.
                </li>
                <li>
                  <strong>Limitation Act, 1963:</strong> Article 137, Three-Year Limitation Period for Initiating Section 95 Applications from Default or Invocation.
                </li>
                <li>
                  <strong>Supreme Court Constitutional Precedents:</strong> Dilip B. Jiwrajka v. Union of India (2023) and Lalit Kumar Jain v. Union of India (2021).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Tribunal Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://ibbi.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Insolvency and Bankruptcy Board of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nclt.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Company Law Tribunal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nclat.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>NCLAT Appellate Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://main.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India Judgments</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10+ Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/does-loan-settlement-discharge-guarantor-section-135-contract-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Guarantor Discharge Section 135
                  </Link>
                  <Link href="/personal-insolvency-section-94-ibc-interim-moratorium" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 94 Personal Insolvency
                  </Link>
                  <Link href="/msme-loan-default-legal-action" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    MSME Loan Default Legal Action
                  </Link>
                  <Link href="/order-37-cpc-summary-suit-loan-recovery-leave-to-defend" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Order 37 CPC Leave to Defend
                  </Link>
                  <Link href="/garnishee-order-bank-account-freeze-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Garnishee Order Defense
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/willful-defaulter-notice-rbi-rules-legal-defense-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Willful Defaulter Notice Defense
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Debt Settlement Services
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Guidelines
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Letter
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
                Expert in banking laws, debt defense before NCLT, and loan compromise deals under the Insolvency and Bankruptcy Code.
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
                  CONFIDENTIAL NCLT SHIELD
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Creditor Filed Section 95 IBC Against You?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team helps you use the Section 96 stay. We dispute faulty notices and settle debts with big waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Assets Today
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
                  <span>Statutory Protection • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 96 Moratorium Protection:</strong> Immediate stay on parallel recovery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Guarantee Audit Defense:</strong> Strike down unapproved loan variances.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 99 Rebuttal Briefs:</strong> Represent your case before the RP.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Consortium OTS Resolution:</strong> Formal release of personal guarantees.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/does-loan-settlement-discharge-guarantor-section-135-contract-act"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Guarantor Discharge Under Section 135
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Contract Act discharge rules &rarr;</span>
                </Link>

                <Link
                  href="/personal-insolvency-section-94-ibc-interim-moratorium"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 94 Personal Insolvency Filing
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Debtor-led moratorium guide &rarr;</span>
                </Link>

                <Link
                  href="/order-37-cpc-summary-suit-loan-recovery-leave-to-defend"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Order 37 CPC Summary Suit Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Defend summary money claims &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
