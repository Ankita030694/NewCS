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
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark
} from 'lucide-react';

export default function WillfulDefaulterDefenseClient() {
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
    { id: 'quick-crux', label: 'Executive Brief: SCN Defense' },
    { id: 'rbi-regulatory-framework', label: '1. RBI Wilful Defaulter Norms' },
    { id: 'financial-forensics', label: '2. Financial Forensics: Hardship vs Diversion' },
    { id: 'comparative-matrix', label: '3. Comparative Matrix: Default Types' },
    { id: 'jah-developers-defense', label: '4. Legal Defense & Supreme Court Rulings' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Show Cause Notice Defense' },
    { id: 'constitutional-defense', label: '7. Constitutional & High Court Remedies' },
    { id: 'grievance-escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Procedural Milestones & Timeline' },
    { id: 'specialized-scenarios', label: '10. Directors, Guarantors & OTS Deals' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is a Wilful Defaulter Show Cause Notice from a bank?',
      a: 'A Wilful Defaulter Show Cause Notice (SCN) is a formal statutory communication issued under RBI Master Directions. It informs the borrower, promoters, or guarantors that the bank Identification Committee has provisionally concluded they committed intentional default, diverted funds, or siphoned credit. It grants a mandatory 21-day window to show cause why they should not be declared wilful defaulters.'
    },
    {
      q: 'Can a bank declare someone a wilful defaulter without a hearing?',
      a: 'No. The Supreme Court in SBI v. Jah Developers (2019) ruled that declaring someone a wilful defaulter results in commercial death. Therefore, natural justice is mandatory. The borrower has a statutory right to receive the Identification Committee reasoned order, inspect all underlying documents, and submit a detailed written representation before the Review Committee.'
    },
    {
      q: 'What is the monetary threshold for wilful defaulter classification under RBI rules?',
      a: 'Under the RBI Master Directions, wilful default proceedings apply to borrowers with an aggregate outstanding balance of ₹25 Lakh and above. Defaults below ₹25 Lakh cannot be classified under the Wilful Defaulter circular, although standard recovery procedures still apply.'
    },
    {
      q: 'What are the penal consequences of being classified as a wilful defaulter?',
      a: 'Penalties are severe and immediate. No bank or NBFC can grant any new loan, credit facility, or guarantee for five years after removal. Promoters are debarred from capital markets under SEBI regulations. Directors face disqualification under Section 164 of the Companies Act, and borrowers are barred under Section 29A of the IBC from bidding for stressed assets.'
    },
    {
      q: 'How does a borrower prove genuine business hardship versus wilful default?',
      a: 'Borrowers must establish that payment failure arose from external market shocks, unpaid government or client receivables, policy changes, or genuine commercial losses. This is proven through audited financial statements, cash flow statements, CA certificates of end-use, bank reconciliation statements, and forensic accounting audits.'
    },
    {
      q: 'Can non-executive or independent directors be tagged as wilful defaulters?',
      a: 'No, unless specific complicity is established. Under Section 149(12) of the Companies Act, 2013 and RBI guidelines, non-executive and independent directors are shielded from liability unless the default occurred with their explicit knowledge, consent, or lack of due diligence.'
    },
    {
      q: 'Can personal guarantors be declared wilful defaulters?',
      a: 'Yes, but only after formal invocation of the guarantee. The bank must first demand payment from the guarantor through a legal notice. If the guarantor fails to pay despite having the financial capacity, the bank can initiate wilful defaulter proceedings following the identical two-tier committee process.'
    },
    {
      q: 'Can banks publish borrower photos in newspapers under wilful defaulter norms?',
      a: 'Banks face strict legal limits. Various High Courts have held that unilateral publication of borrower photographs violates the fundamental right to privacy under Article 21. Banks cannot publish photos routinely or maliciously as a recovery intimidation tactic without explicit statutory sanction.'
    },
    {
      q: 'Can a wilful defaulter enter into a One-Time Settlement (OTS) with the bank?',
      a: 'Yes. The RBI circular on Compromise Settlements and Concession Framework allows banks to enter into compromise settlements with wilful defaulters. The settlement requires approval from the bank Board of Directors and does not waive criminal liability if cheating or fraud complaints were lodged.'
    },
    {
      q: 'How does CredSettle assist borrowers facing a Wilful Defaulter Notice?',
      a: 'CredSettle conducts a forensic review of the bank allegations, demands primary inspection documents, drafts robust legal responses under the Jah Developers precedent, represents clients before Review Committees, files High Court writ petitions when natural justice is denied, and negotiates clean OTS debt closures.'
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
            <span>RBI Master Directions 2024 &amp; Banking Legal Defense Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            RBI Willful Defaulter Notice: Legal Defense &amp; Rules
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A comprehensive legal defense guide for business owners, corporate promoters, and loan guarantors. Understand RBI Master Directions, contest Show Cause Notices under Jah Developers, and prevent blacklisting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your Business Rights</span>
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
                  <span>Statutory Corporate Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Master Directions, Jah Developers precedent, and Article 226 Constitutional writ remedies.
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
                <span>EXECUTIVE BRIEF: WILFUL DEFAULTER SCN DEFENSE PROTOCOL</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Two-Tier Process:</strong> A bank cannot tag any borrower without independent orders from an Identification Committee and a Review Committee.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Supreme Court Jah Developers Protection:</strong> Borrowers must receive all underlying reports and have a right of personal hearing before the Review Committee.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Commercial Death Sentence Bar:</strong> Wilful defaulter status imposes a 5-year total lending ban, SEBI debarment, and Section 29A IBC asset bidding disqualification.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Forensic Rebuttal Defense:</strong> Proving genuine business failure, delay in government receivables, or supply disruption refutes capacity-to-pay allegations.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Article 226 High Court Writ:</strong> If a bank refuses to share forensic audit findings or denies an oral hearing, High Courts grant immediate ex-parte stays.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: RBI Regulatory Framework */}
            <section id="rbi-regulatory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Regulatory Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Regulatory Framework: Wilful Defaulter Norms
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Receiving a Wilful Defaulter Show Cause Notice is one of the most critical legal emergencies an Indian business owner, corporate promoter, or personal guarantor can encounter. Governed by the Reserve Bank of India Master Directions on Treatment of Wilful Defaulters and Large Defaulters, this statutory classification carries consequences so drastic that the Supreme Court termed it commercial death.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI framework, a default is not treated as wilful merely because a borrower failed to service interest or principal repayments. Genuine business failure due to economic downturns, operational challenges, or market disruptions does not constitute wilful default. Under Section 21 and Section 35A of the Banking Regulation Act, 1949, a borrower is classified as a wilful defaulter only if the outstanding balance is ₹25 Lakh or more and one of four specific conditions is established.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, the borrower has defaulted in meeting payment obligations despite having the capacity to honor them. Second, the borrower has diverted loan funds for purposes other than those specified in the sanction letter. Third, the borrower has siphoned off funds so that money is not available with the business in the form of other assets. Fourth, the borrower has disposed of, hypothecated, or removed movable or immovable mortgaged property without the lender prior written consent.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Because these four grounds involve an element of intentional culpability, banks cannot make subjective or reckless accusations. The lender bears the strict burden of proof to demonstrate conscious wrongdoing through verifiable forensic evidence.
              </p>
            </section>

            {/* SECTION 2: Financial Forensics */}
            <section id="financial-forensics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics &amp; Forensic Auditing</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Forensics: Genuine Hardship vs Diversion
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks routinely initiate forensic audits through external accounting firms (such as EY, KPMG, BDO, or Grant Thornton) before issuing a Show Cause Notice. The primary objective is to build a narrative of diversion or siphoning of credit facilities. Lenders examine intra-group transactions, high-value supplier payments, and inter-corporate deposits.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, bank forensic reports often contain methodological errors, misinterpreting routine operational expenses as illegal diversion. A legitimate corporate debtor must present a rigorous counter-forensic audit prepared by an independent Chartered Accountant. This rebuttal demonstrates that all capital transfers were executed strictly in the ordinary course of business.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Establishing the absence of capacity to pay is equally vital. By demonstrating that receivables were locked in government contracts, customer insolvencies occurred, or raw material price shocks eroded margins, the borrower disproves the core element of intentional default.
              </p>

              {/* Representative Forensic Audit Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Ledger Audit &amp; Forensic Rebuttal Math</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹14.8 Crore Credit Exposure</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Loan Facility / Transaction Ref</th>
                        <th className="p-3">Sanctioned Purpose</th>
                        <th className="p-3">Bank Forensic Allegation</th>
                        <th className="p-3">Legal Defense &amp; Counter-Proof</th>
                        <th className="p-3 text-right">Audit Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Working Capital Cash Credit (₹6.5 Cr)</td>
                        <td className="p-3">Inventory &amp; Operational Costs</td>
                        <td className="p-3 text-rose-600 font-medium">Diversion to Related Supplier Entity</td>
                        <td className="p-3">GST E-way bills, raw material delivery gate passes, and CA audit certificate proving market-rate input supply.</td>
                        <td className="p-3 text-right font-bold text-emerald-700">100% Exonerated</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Machinery Term Loan (₹4.2 Cr)</td>
                        <td className="p-3">Plant Equipment Import</td>
                        <td className="p-3 text-rose-600 font-medium">Non-Creation of Tangible Assets</td>
                        <td className="p-3">Customs clearance receipts, port landing documents, and factory inspection records proving machine installation.</td>
                        <td className="p-3 text-right font-bold text-emerald-700">Fully Validated</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Letter of Credit Facility (₹4.1 Cr)</td>
                        <td className="p-3">Domestic Vendor Procurement</td>
                        <td className="p-3 text-rose-600 font-medium">Siphoning via Accommodation Bills</td>
                        <td className="p-3">End-to-end ledger reconciliation confirming actual manufacturing consumption and finished good export orders.</td>
                        <td className="p-3 text-right font-bold text-emerald-700">Disproved</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Net Regulatory Finding</td>
                        <td className="p-3 text-slate-900">Genuine Hardship Established</td>
                        <td className="p-3 text-slate-900">Zero Intentional Diversion Found</td>
                        <td className="p-3 text-emerald-700">SCN Dropped by Identification Committee</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">Clean Record</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Comparative Matrix */}
            <section id="comparative-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Classification &amp; Impact Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparative Matrix: Default Types &amp; Penalties
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian banking regulations classify delinquent accounts into distinct tiers. Knowing the exact legal boundary between normal NPA status, wilful default, fraud tagging, and non-cooperative classification is vital for mounting an effective defense.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                While a conventional NPA entails ordinary civil debt recovery (such as SARFAESI notices or DRT proceedings), wilful default triggers penal sanctions that impair the civil liberties and business standing of promoters and directors.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Delinquency Category</th>
                      <th className="p-3">Statutory Guideline</th>
                      <th className="p-3">Capacity to Pay Requirement</th>
                      <th className="p-3">Penal Disqualifications</th>
                      <th className="p-3">Legal Defense &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Standard Delinquent NPA</td>
                      <td className="p-3">RBI Prudential Norms (IRAC)</td>
                      <td className="p-3 text-slate-600">Irrelevant; based purely on 90-day EMI default.</td>
                      <td className="p-3 text-amber-600 font-medium">Standard CIBIL drop; civil asset recovery.</td>
                      <td className="p-3">Restructuring, moratorium, or consensual OTS settlement.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-rose-700">Wilful Defaulter</td>
                      <td className="p-3">RBI Master Direction 2024</td>
                      <td className="p-3 text-rose-600 font-semibold">Strict proof of capacity or intentional diversion.</td>
                      <td className="p-3 text-rose-600 font-semibold">5-year credit debarment, SEBI ban, IBC 29A bar.</td>
                      <td className="p-3">Contest SCN under Jah Developers; Article 226 High Court writ.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-purple-700">Fraud Account Tagging</td>
                      <td className="p-3">RBI Master Directions on Frauds</td>
                      <td className="p-3 text-purple-600 font-semibold">Criminal intent, forgery, or fictitious invoices.</td>
                      <td className="p-3 text-rose-700 font-bold">Mandatory CBI/Police FIR; complete financial ban.</td>
                      <td className="p-3">Rajesh Agarwal precedent defense; quash ex-parte fraud tag.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Non-Cooperative Borrower</td>
                      <td className="p-3">RBI Circular Dec 2014</td>
                      <td className="p-3">Deliberate refusal to share financials or valuation access.</td>
                      <td className="p-3 text-amber-700">Accelerated provisioning; higher interest margins.</td>
                      <td className="p-3">Submit full audited statements and allow physical inspection.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Personal Guarantor</td>
                      <td className="p-3">Indian Contract Act (Sec 128)</td>
                      <td className="p-3">Failure to honor invoked guarantee despite net worth.</td>
                      <td className="p-3 text-rose-600">Personal assets liable; tagged alongside principal debtor.</td>
                      <td className="p-3">Challenge defective guarantee invocation; separate personal assets.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Jah Developers Precedent */}
            <section id="jah-developers-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Natural Justice</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Legal Defense: Supreme Court Precedents &amp; Rulings
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The jurisprudence surrounding wilful default in India was permanently reshaped by the Supreme Court of India in the landmark judgment of State Bank of India v. Jah Developers Pvt. Ltd. (2019) 6 SCC 787. Prior to this ruling, banks operated identification committees in secrecy, declaring borrowers wilful defaulters without providing internal findings or hearing objections.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court struck down this arbitrary approach. The Court held that declaring someone a wilful defaulter fundamentally impairs their constitutional rights under Article 19(1)(g) (the right to practice any profession or carry on any trade or business). Because the civil consequences are so severe, the Court ruled that the principles of Natural Justice (Audi Alteram Partem) are implicitly part of the RBI circular.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the Jah Developers doctrine, the Identification Committee order is purely a proposal. The bank must serve a complete copy of the Identification Committee reasoned order, along with all supporting documents and forensic audit reports, to the borrower. The borrower then has the fundamental right to make a written representation to the Review Committee before any final declaration can be made.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This principle was further expanded in State Bank of India v. Rajesh Agarwal (2023), where the Supreme Court ruled that unilateral classification without hearing is unconstitutional. In Milind Patel v. Union of India, the Bombay High Court quashed wilful defaulter proceedings where the bank failed to provide the underlying forensic audit report. Similarly, in Atlantic Projects v. Allahabad Bank, the Calcutta High Court held that failure to pass a reasoned speaking order invalidates the entire proceeding.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Wilful Defaulter Defense Steps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive visual roadmap illustrates the legal workflow to defend against a bank Wilful Defaulter Show Cause Notice, highlighting statutory timelines, forensic audits, and constitutional writ remedies.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/willful-defaulter-notice-rbi-rules-legal-defense-guide.jpg"
                    alt="RBI Wilful Defaulter Notice Rules and Legal Defense Infographic"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Wilful Defaulter Defense Framework • RBI Master Directions Compliant</span>
                  <a
                    href="/images/infographics/willful-defaulter-notice-rbi-rules-legal-defense-guide.jpg"
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

            {/* SECTION 6: Step-by-Step SOP */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: 6-Stage Show Cause Notice Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your company, board of directors, or personal guarantors receive a Wilful Defaulter Show Cause Notice, executing this structured six-stage protocol guarantees legal compliance and prevents unlawful blacklisting.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Forensic Scrutiny of the Show Cause Notice
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Examine the SCN to identify the specific grounds invoked by the bank. Verify whether the notice was authorized by a validly constituted Identification Committee comprising an Executive Director and two General Managers as mandated by the RBI.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Demand Primary Records &amp; Forensic Reports
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under the Jah Developers precedent, immediately dispatch a formal demand to the bank requesting copies of the complete forensic audit report, transaction logs, committee minutes, and internal calculation sheets forming the basis of the SCN.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Prepare Detailed Factual Rebuttal with CA Proof
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Work with forensic accountants and legal counsel to prepare a point-by-point rebuttal. Attach audited balance sheets, GST returns, supplier vouchers, and end-use certificates proving that all funds remained within genuine commercial operations.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Exercise Right of Oral Hearing Before Committee
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Formally request a personal hearing before the Review Committee. Present evidence demonstrating market hardship, lack of intentional default, and willingness to work toward a realistic restructuring or settlement.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Invoke Article 226 High Court Writ Jurisdiction
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the lender refuses to supply core documents, violates the 21-day timeline, or ignores your representation, file a writ petition under Article 226 of the Constitution before the jurisdictional High Court to obtain an immediate stay order.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Negotiate Board-Approved One-Time Settlement (OTS)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    With legal leverage established, submit a formal compromise settlement proposal to the bank credit committee. Secure waiver of penal interest, obtain a formal No Dues Certificate, and ensure deletion of all wilful defaulter records.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Constitutional Defenses */}
            <section id="constitutional-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Constitutional Defenses &amp; Legal Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Constitutional Defenses: High Court Writ Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a state-owned or private commercial bank acts arbitrarily in declaring a borrower a wilful defaulter, borrowers can invoke powerful constitutional and statutory protections in Indian courts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Article 14 &amp; 19(1)(g) Constitutional Shield</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Arbitrary classification without evidence violates the fundamental right against state arbitrariness and the freedom to practice trade and commerce, justifying immediate High Court intervention.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Audi Alteram Partem (Natural Justice)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    No individual or corporate entity can be condemned unheard. Denying primary documents or passing unreasoned orders renders the entire wilful default proceeding void ab initio.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Independent Director Immunity (Sec 149)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 149(12) of the Companies Act, 2013, non-executive and independent directors are shielded from default liabilities unless direct personal wrongdoing is proven.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Privacy Shield Against Photo Publication</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High Courts have established that publishing borrower photographs in newspapers without clear statutory authority violates personal dignity and privacy under Article 21.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="grievance-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Institutional Redressal
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers facing wilful default proceedings must utilize the multi-tier statutory redressal framework established by the RBI and the Indian judicial system.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: Identification Committee</td>
                      <td className="p-3">Executive Director &amp; 2 Senior GMs</td>
                      <td className="p-3 font-mono">21 Days for SCN Reply</td>
                      <td className="p-3">Considers written response, verifies forensic accounting proof, and drops unjustified proposals.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: Review Committee</td>
                      <td className="p-3">MD/CEO &amp; 2 Independent Directors</td>
                      <td className="p-3 font-mono">30 Days Post-Representation</td>
                      <td className="p-3">Evaluates borrower representation, conducts personal hearing, and decides on confirmation.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: High Court Writ Bench</td>
                      <td className="p-3">Constitutional Division Bench (Art 226)</td>
                      <td className="p-3 font-mono">Immediate / Urgent Listing</td>
                      <td className="p-3">Issues binding stay orders, quashes illegal proceedings, and enforces complete natural justice.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline Table */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: SCN to Review Committee Order
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the chronological milestones of wilful default proceedings allows corporate debtors and guarantors to respond strategically before rights are compromised.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Stage</th>
                      <th className="p-3">Regulatory Milestone</th>
                      <th className="p-3">Lender Action</th>
                      <th className="p-3">Strategic Borrower Defense</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 90</td>
                      <td className="p-3 font-mono text-[11px]">NPA Classification</td>
                      <td className="p-3">Account marked NPA; internal credit monitoring and forensic audit ordered.</td>
                      <td className="p-3">Audit internal books, reconcile vendor accounts, and gather proof of business losses.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px]">Identification Review</td>
                      <td className="p-3">Identification Committee examines forensic audit and drafts preliminary findings.</td>
                      <td className="p-3">Engage legal counsel to prepare for incoming Show Cause Notice.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 121 to 150</td>
                      <td className="p-3 font-mono text-[11px]">Show Cause Notice</td>
                      <td className="p-3">SCN issued granting 21 days for formal explanation.</td>
                      <td className="p-3">Demand forensic audit reports and submit comprehensive point-by-point rebuttal.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 151 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Review Committee</td>
                      <td className="p-3">Review Committee reviews proposal and schedules hearing.</td>
                      <td className="p-3">Appear for hearing; file Article 226 writ petition if documents were withheld.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 181 to 210</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Final Order / Reporting</td>
                      <td className="p-3">Confirming order issued and name forwarded to CICs (CIBIL, Experian).</td>
                      <td className="p-3 font-bold text-slate-900">Execute High Court stay order or finalize negotiated One-Time Settlement.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Post-Settlement</td>
                      <td className="p-3 font-mono text-[11px]">De-listing &amp; Closure</td>
                      <td className="p-3">Issuance of No Dues Certificate and de-listing from RBI database.</td>
                      <td className="p-3">Verify removal of wilful defaulter tag across all Credit Information Companies.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Directors, Guarantors &amp; OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Wilful default proceedings frequently intersect with corporate governance disputes, personal asset liabilities, and compromise settlements. Here is how key legal protections apply in specialized circumstances.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Independent &amp; Non-Executive Directors
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Professional and independent directors cannot be tagged for actions taken without their knowledge. CredSettle helps independent board members establish lack of day-to-day managerial control to secure immediate exoneration.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Personal Guarantors to Corporate Debts
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Guarantors enjoy independent due process rights. The bank cannot tag a guarantor without first demonstrating formal demand notice issuance and conducting a separate two-tier committee evaluation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    One-Time Settlement (OTS) Negotiations
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI compromise settlement frameworks, lenders have the legal discretion to approve OTS agreements for stressed accounts. CredSettle negotiates substantial principal haircuts while ensuring wilful defaulter proceedings are formally withdrawn.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    De-listing &amp; CIBIL Record Clean-up
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Once a settlement is completed, banks are legally mandated to notify RBI and credit bureaus (CIBIL, Experian, CRIF) to remove the wilful defaulter flag, restoring institutional credit eligibility.
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
                Frequently Asked Questions: Wilful Defaulter Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal answers addressing critical concerns regarding RBI wilful defaulter notices, Show Cause Notice deadlines, Supreme Court rights, and debt settlement options.
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
                Official Regulatory Citations &amp; Statutory References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Reserve Bank of India Master Directions:</strong> Treatment of Wilful Defaulters and Large Defaulters Directions, 2024 and Master Circular on Wilful Defaulters, July 2015.
                </li>
                <li>
                  <strong>Banking Regulation Act, 1949:</strong> Section 21 and Section 35A, Powers of the Reserve Bank to Issue Directions to Banking Companies.
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> State Bank of India v. Jah Developers Pvt. Ltd. (2019) 6 SCC 787 and State Bank of India v. Rajesh Agarwal (2023).
                </li>
                <li>
                  <strong>Companies Act, 2013:</strong> Section 149(12) (Director Liability Protection) and Section 164(2) (Disqualifications for Appointment of Director).
                </li>
                <li>
                  <strong>Insolvency and Bankruptcy Code, 2016 (IBC):</strong> Section 29A, Persons Not Eligible to Be Resolution Applicants.
                </li>
                <li>
                  <strong>Constitution of India:</strong> Article 14 (Equality Before Law), Article 19(1)(g) (Right to Practice Profession/Trade), and Article 226 (High Court Writ Jurisdiction).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://main.sci.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.sebi.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Securities and Exchange Board of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.mca.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Ministry of Corporate Affairs</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/msme-loan-default-legal-action" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    MSME Loan Default Legal Action
                  </Link>
                  <Link href="/company-director-liability-for-business-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Company Director Liability
                  </Link>
                  <Link href="/business-loan-settlement-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business Loan Settlement
                  </Link>
                  <Link href="/drt-notice-for-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    DRT Notice Defense
                  </Link>
                  <Link href="/guarantor-liability-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Guarantor Legal Liability
                  </Link>
                  <Link href="/can-bank-file-section-420-cheating-case-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 420 Loan Default Rules
                  </Link>
                  <Link href="/home-loan-default-sarfaesi-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    SARFAESI Act Defense
                  </Link>
                  <Link href="/rbi-circular-on-loan-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Circular on Loan Settlement
                  </Link>
                  <Link href="/file-caveat-petition-against-bank" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    File Caveat Petition Against Bank
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate
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
                Expert in banking compliance, corporate restructuring, RBI Master Directions, DRT litigation, and wilful defaulter show cause notice defenses with extensive experience defending promoters and guarantors.
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
                  CONFIDENTIAL LEGAL SHIELD
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Received a Wilful Defaulter Notice?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior legal resolution specialists inspect forensic findings, draft strong SCN replies under the Jah Developers precedent, and negotiate structured debt settlements.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Business Now
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
              <div className="font-bold text-slate-900 text-sm">The CredSettle Shield</div>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>SCN Defense Expertise:</strong> 100% Jah Developers compliance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Director &amp; Promoter Shield:</strong> Protection against 29A IBC bars.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>High Court Writ Strategy:</strong> Rapid ex-parte stay petitions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Board-Approved OTS:</strong> Complete debt closure &amp; de-listing.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <div className="font-bold text-slate-900 text-sm">Related Legal Guides</div>
              <div className="space-y-2.5">
                <Link
                  href="/msme-loan-default-legal-action"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    MSME Loan Default Legal Action
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">CGTMSE &amp; MSMED Act defense &rarr;</span>
                </Link>

                <Link
                  href="/company-director-liability-for-business-loan"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Company Director Liability
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Personal guarantee defense &rarr;</span>
                </Link>

                <Link
                  href="/drt-notice-for-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    DRT Notice for Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Tribunal reply &amp; stay &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
