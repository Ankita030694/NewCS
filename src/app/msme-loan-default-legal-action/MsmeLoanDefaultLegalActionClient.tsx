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
  Sparkles,
  Gavel,
  Landmark,
  Layers,
  BarChart3
} from 'lucide-react';

export default function MsmeLoanDefaultLegalActionClient() {
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
    { id: 'msme-debt-economics', label: '1. MSME Debt Economics & NPA' },
    { id: 'financial-settlement-math', label: '2. Penal Inflation & Settlement Math' },
    { id: 'resolution-comparison-matrix', label: '3. Legal Recovery Comparison Table' },
    { id: 'cibil-commercial-scoring', label: '4. Commercial CIBIL & Credit Math' },
    { id: 'infographic-overview', label: 'Visual 6-Stage Defense Roadmap' },
    { id: 'step-by-step-msme-sop', label: '5. 6-Stage MSME Defense SOP' },
    { id: 'statutory-notice-defense-grid', label: '6. Statutory Notice Defense & Rights' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance & RBI Matrix' },
    { id: 'chronological-resolution-timeline', label: '8. Chronological Timeline & Milestones' },
    { id: 'specialized-msme-scenarios', label: '9. Specialized Business Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What legal action can banks take when an MSME defaults on a business loan in India?',
      a: 'Banks can initiate civil recovery suits under Order 37 CPC, file claims before DRT if exposure exceeds ₹20 Lakhs, issue SARFAESI demand notices for secured loans, or file Section 138/25 complaints for dishonored repayment instruments.'
    },
    {
      q: 'Can a bank attach personal assets or invoke SARFAESI on a CGTMSE-backed MSME loan?',
      a: 'For CGTMSE-covered loans, lenders cannot demand primary property collateral. In pure CGTMSE defaults, banks cannot initiate SARFAESI action against unmortgaged assets and must claim the trust guarantee, though borrowers remain civilly liable for unrecovered balances.'
    },
    {
      q: 'What is the RBI Framework for Revival and Rehabilitation of MSMEs?',
      a: 'The RBI Framework mandates that lenders identify stress at SMA stages and refer eligible enterprises to a Committee for Stressed MSMEs before classifying accounts as NPA, allowing businesses to seek loan restructuring and corrective action plans.'
    },
    {
      q: 'Can an MSME promoter go to jail for defaulting on a collateral-free business loan?',
      a: 'Pure loan default is strictly a civil dispute with zero criminal imprisonment. Criminal liability arises only if quasi-criminal provisions like Section 138 cheque bounces occur, which are bailable compoundable offenses, or where proven fraud exists.'
    },
    {
      q: 'How does Section 138 of the Negotiable Instruments Act apply to MSME loan defaults?',
      a: 'When business repayment cheques bounce, lenders issue a 30-day statutory notice. If unpaid within 15 days, banks file criminal complaints. Promoters can secure bail, contest security cheque misuse, and settle through judicial compounding.'
    },
    {
      q: 'What is the difference between SARFAESI recovery and DRT proceedings for MSME loans?',
      a: 'SARFAESI is an out-of-court enforcement mechanism where banks seize mortgaged collateral after a 60-day Section 13(2) notice. DRT is a specialized judicial tribunal where lenders file original applications under Section 19 RDBFI Act for debts over ₹20 Lakhs.'
    },
    {
      q: 'Can MSEFC arbitration or delayed buyer payments be used to defend bank loan default?',
      a: 'Yes. Under Chapter V MSMED Act, MSMEs facing buyer payment delays can file claims before MSEFC for compounded penal interest. Enterprises can present MSEFC filings to bank credit committees to justify cash-flow stress and secure restructuring.'
    },
    {
      q: 'What happens to personal guarantors of an MSME loan upon default?',
      a: 'Under Section 128 of the Indian Contract Act, personal guarantor liability is co-extensive with the borrower. Banks can proceed against guarantors simultaneously, though defenses can be raised against disproportionate recovery during settlement negotiations.'
    },
    {
      q: 'Can an MSME negotiate a One-Time Settlement (OTS) with public sector and private banks?',
      a: 'Yes. All commercial banks maintain board-approved OTS policies. Once an MSME loan turns NPA and is provisioned, borrowers can submit formal compromise settlement proposals offering upfront lump-sum payments with 40% to 60% waivers on penal interest.'
    },
    {
      q: 'How does an MSME loan default affect CIBIL Commercial and personal credit scores?',
      a: 'An MSME default is reported to commercial credit bureaus under company PAN/Udyam, degrading CMR rank to CMR-9/10. Concurrently, personal CIBIL scores of directors and guarantors drop by 100 to 180 points upon 90+ DPD classification.'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-bold tracking-wider uppercase mb-3 backdrop-blur-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
            <span>Statutory MSME Legal Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            MSME Loan Default Legal Action: Defense Under MSMED Act, CGTMSE &amp; RBI
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Facing Section 138 summons, SARFAESI notices, or recovery litigation on your business credit facility? Learn your statutory protections under the MSMED Act 2006, CGTMSE guarantee guidelines, and RBI revival frameworks to protect your enterprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Facing MSME Legal Action? Get Legal Defense</span>
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
                  <span>Statutory MSME Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  MSMED Act 2006, RBI Master Directions, CGTMSE Rules &amp; NI Act.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Background, border-l-[5px] border-l-[#1886ff]) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: MSME LOAN DEFAULT DEFENSE CRUX</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Civil Dispute Character:</strong> MSME loan default is strictly a civil contractual matter with zero criminal arrest powers.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">CGTMSE Asset Protection:</strong> For credit guarantee loans, lenders cannot attach unmortgaged assets under SARFAESI.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Mandatory RBI Committee:</strong> Lenders must evaluate viable restructuring at SMA stages before initiating adversarial recovery.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Section 138 Defense:</strong> Cheque bounces are bailable, compoundable proceedings that can be resolved through structured settlement.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Guarantor Rights:</strong> Section 128 co-extensive liability can be defended against coercive escalation via credit committees.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">MSEFC Payment Offsets:</strong> Unpaid receivables under Chapter V MSMED Act justify commercial cash-flow restructuring.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">40% to 60% OTS Window:</strong> Fully provisioned NPA debt creates strong institutional room for negotiated penal waivers.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Credit Bureau Resolution:</strong> A verified No Dues Certificate enables commercial and personal CIBIL status conversion to Closed.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="msme-debt-economics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Prudential Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. MSME Debt Economics: Regulatory Stress &amp; NPA Dynamics
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Micro, Small, and Medium Enterprises operate on tight working capital cycles where delayed buyer payments or macroeconomic downturns trigger sudden liquidity distress. When an enterprise defaults on commercial cash credit, overdraft, or term loan facilities, lenders evaluate the debt under strict Reserve Bank of India prudential norms. Accounts transition through Special Mention Account stages: SMA-0 (1 to 30 days overdue), SMA-1 (31 to 60 days), and SMA-2 (61 to 90 days).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Crossing the 90-day threshold triggers Non-Performing Asset (NPA) classification under RBI Master Directions on Income Recognition and Asset Classification. This mandates compulsory Tier-1 capital provisioning, scaling from 15% for sub-standard assets to 40% for doubtful assets and 100% for loss assets. For collateral-free loans backed by CGTMSE, lenders cannot enforce SARFAESI property seizures against non-existent mortgages. Under the RBI Prudential Framework for Resolution of Stressed Assets, institutional lenders are incentivized to resolve stressed exposure through bilateral settlement rather than litigation. This heavy capital provisioning burden provides strong commercial rationale for bank credit committees to accept pragmatic One-Time Settlements (OTS) to purge non-performing assets and release regulatory capital.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: MSME Debt &amp; Settlement Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Following default, bank claims escalate rapidly due to compounding penal interest, monthly commitment surcharges, cheque return fees, and administrative recovery costs. Under RBI Fair Lending Practice circulars, lenders are strictly prohibited from capitalizing penal charges or compounding penalty rates into loan principal. A forensic ledger audit under the Bankers&apos; Books Evidence Act strips away these unapproved additions, establishing the true baseline principal liability for compromise negotiations.
              </p>

              {/* Financial Calculation Card */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Representative MSME Loan Ledger Breakdown (180 Days NPA)
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">Forensic Math</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block">Sanctioned Principal</span>
                    <span className="font-bold text-slate-900 text-sm">₹40,00,000</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block">Accrued Interest</span>
                    <span className="font-bold text-slate-900 text-sm">₹6,50,000</span>
                  </div>
                  <div className="p-3 rounded-xl bg-red-50/60 border border-red-100">
                    <span className="text-red-600 block">Penal Surcharges</span>
                    <span className="font-bold text-red-700 text-sm">+₹5,80,000</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block">Notice &amp; Legal Costs</span>
                    <span className="font-bold text-slate-900 text-sm">₹1,20,000</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-100 border border-slate-200">
                    <span className="text-slate-600 block">Gross Bank Claim</span>
                    <span className="font-bold text-slate-900 text-sm">₹53,50,000</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                    <span className="text-emerald-700 font-bold block">Target OTS Range (40%-55%)</span>
                    <span className="font-bold text-emerald-800 text-sm">₹22L – ₹26L</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  By eliminating capitalized penal fees and establishing bona fide distress through audited financial statements, enterprises routinely settle provisioned unsecured and CGTMSE debts at 40% to 55% of the gross bank demand.
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="resolution-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparison Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Resolution Matrix: Legal Pathways for Stressed MSMEs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Stressed MSMEs must evaluate business continuity, legal timelines, and financial outcomes across available recovery and settlement avenues:
              </p>

              {/* 4-Sided Bordered Table with vertical dividers */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 font-bold">Forum</th>
                      <th className="p-3 font-bold">Governing Law</th>
                      <th className="p-3 font-bold">Business Impact</th>
                      <th className="p-3 font-bold">Timeline</th>
                      <th className="p-3 font-bold text-[#1886ff]">Financial Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Compromise OTS</td>
                      <td className="p-3">RBI Master Directions</td>
                      <td className="p-3 text-emerald-700 font-semibold">High (Immediate full discharge)</td>
                      <td className="p-3">45-90 Days</td>
                      <td className="p-3 text-[#1886ff] font-semibold">40% to 60% waiver; CIBIL Closed</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">RBI MSME Restructuring</td>
                      <td className="p-3">RBI Revival Framework</td>
                      <td className="p-3">Moderate (Realigns cash flows)</td>
                      <td className="p-3">60-120 Days</td>
                      <td className="p-3">Tenure extension; zero principal waiver</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">DRT / Civil Litigation</td>
                      <td className="p-3">RDBFI Act / Order 37 CPC</td>
                      <td className="p-3 text-amber-700 font-semibold">Strained (Attachment risks)</td>
                      <td className="p-3">18-36 Months</td>
                      <td className="p-3">Protracted defense; creates OTS leverage</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">National Lok Adalat</td>
                      <td className="p-3">Legal Services Authorities Act</td>
                      <td className="p-3 text-emerald-700 font-semibold">High (Binding consent award)</td>
                      <td className="p-3">Single Sitting</td>
                      <td className="p-3">Expedited compromise settlement decree</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Inaction / Default</td>
                      <td className="p-3">SARFAESI / NI Act</td>
                      <td className="p-3 text-red-700 font-semibold">Critical (Asset auctions &amp; summons)</td>
                      <td className="p-3">Uncontrolled</td>
                      <td className="p-3 text-red-700 font-semibold">Total CIBIL ruin, personal guarantees enforced</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-commercial-scoring" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Commercial Algorithm: Scoring Math &amp; Rectification
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Commercial credit reporting in India operates under CICRA 2005 across two dimensions: the enterprise Company Credit Report (CCR) ranked from CMR-1 to CMR-10 (high risk) and the personal credit scores of directors and guarantors (300 to 900).
              </p>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#1886ff]" />
                  Credit Bureau Algorithmic Weight Distribution
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-xs text-center">
                  <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100">
                    <span className="font-black text-[#1886ff] text-sm block">35%</span>
                    <span className="font-bold text-slate-900 block">Repayment History</span>
                    <span className="text-slate-500 text-[10px]">DPD on loan facilities</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100">
                    <span className="font-black text-[#1886ff] text-sm block">30%</span>
                    <span className="font-bold text-slate-900 block">Credit Utilization</span>
                    <span className="text-slate-500 text-[10px]">CC &amp; OD drawdown levels</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100">
                    <span className="font-black text-[#1886ff] text-sm block">15%</span>
                    <span className="font-bold text-slate-900 block">Credit Mix</span>
                    <span className="text-slate-500 text-[10px]">Secured vs unsecured ratio</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100">
                    <span className="font-black text-[#1886ff] text-sm block">10%</span>
                    <span className="font-bold text-slate-900 block">Search Inquiries</span>
                    <span className="text-slate-500 text-[10px]">Lender pulls on Udyam/PAN</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100">
                    <span className="font-black text-[#1886ff] text-sm block">10%</span>
                    <span className="font-bold text-slate-900 block">Guarantor Risk</span>
                    <span className="text-slate-500 text-[10px]">Promoter cross-defaults</span>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-slate-700 leading-relaxed pt-1">
                  At 90+ DPD, the company rank drops to CMR-9/10 while director scores fall by 120-180 points. Under Section 21 CICRA, executing an OTS mandates lenders to submit updated data within 30 days, enabling borrowers to convert adverse remarks to Closed status. Borrowers can also file a statutory grievance with credit bureaus if lenders fail to report full settlement data within the prescribed 30-day turnaround.
                </p>
              </div>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Roadmap: 6-Stage MSME Legal Protection Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Review this structured visual flowchart illustrating the 6-stage procedural sequence to audit debt, assert statutory defenses, and execute an OTS:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/msme-loan-default-legal-action.jpg"
                    alt="6-Stage Legal Protection Roadmap for MSME Loan Default Legal Action and Defense in India"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense • MSMED Act &amp; RBI Compliance</span>
                  <a
                    href="/images/infographics/msme-loan-default-legal-action.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>View High-Resolution Roadmap</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-msme-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Defense SOP</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Standard Operating Procedure (SOP): 6 Stages of MSME Legal Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Execute this sequential 6-stage operational protocol to safeguard business assets and negotiate an amicable resolution:
              </p>

              <div className="space-y-3.5 pt-1">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 01: Days 1–10</span>
                    <span className="text-xs font-medium text-slate-500">Forensic Audit</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">Forensic Loan &amp; Security Ledger Audit</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Audit the sanction letter, hypothecation deeds, and CGTMSE guarantee fee deductions. Identify illegal compound penal charges and calculate baseline principal liability under the Bankers&apos; Books Evidence Act.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 02: Days 11–20</span>
                    <span className="text-xs font-medium text-slate-500">Hardship Dossier</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">Hardship Dossier &amp; MSEFC Claims</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Assemble a commercial hardship file documenting canceled contracts and delayed buyer receivables. File claims before the MSEFC under Chapter V MSMED Act to establish external cash-flow distress.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 03: Days 21–35</span>
                    <span className="text-xs font-medium text-slate-500">RBI Committee</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">Invocation of RBI Stressed MSME Committee</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Serve a formal representation to the bank Branch Manager under the RBI MSME Revival Framework, requesting an immediate freeze on coercive legal recovery and referral for restructuring.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 04: Days 36–60</span>
                    <span className="text-xs font-medium text-slate-500">OTS Negotiations</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">Credit Committee Compromise Negotiations</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Engage bank Circle and Head Office credit committees with an actuarially verified OTS proposal, securing a 40% to 60% waiver on accumulated penal interest and administrative charges.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 05: Days 61–75</span>
                    <span className="text-xs font-medium text-slate-500">Letter Vetting</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">Legal Vetting of OTS Sanction Letter</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Vet the bank&apos;s OTS approval letter to verify mandatory withdrawal of all pending Section 138, Section 25 PSSA, DRT, and SARFAESI proceedings without residual financial liability.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 06: Days 76–90</span>
                    <span className="text-xs font-medium text-slate-500">NDC &amp; Closure</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">Remittance, No Dues Certificate &amp; Bureau Update</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Remit settlement funds directly to the loan pool account, obtain the original No Dues Certificate, retrieve unencumbered documents, and submit updates under Section 21 CICRA to mark accounts Closed.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense-grid" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Notice Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense: MSME Legal Protections
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Lenders issue notices across criminal, quasi-criminal, and civil forums. Enterprise leadership must address each action under its governing statute:
              </p>

              {/* 4 Clean Analytical Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs sm:text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>Section 25 PSSA: NACH Dishonor</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Issued for bounced auto-debits under Payment and Settlement Systems Act 2007. It is a bailable proceeding that can be compounded immediately upon executing an OTS or discharging principal dues. Filing a formal reply refuting intentional default establishes a crucial contemporaneous defense record before the magistrate.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs sm:text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 138 NI Act: Cheque Bounce</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Carries a 30-day notice and 15-day cure window. Promoters can contest security cheque misuse, challenge penal interest claims, and seek judicial compounding under Section 147 citing the Supreme Court ruling in <em>Damodar S. Prabhu</em>.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs sm:text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>Section 21 Arbitration: Perkins Eastman</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Supreme Court precedents in TRF Ltd. and Perkins Eastman, banks cannot unilaterally appoint sole arbitrators, giving borrowers Section 12(5) grounds to challenge tainted proceedings.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-xs sm:text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Section 19 DRT &amp; SARFAESI 13(2)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    DRT hears debts above ₹20 Lakhs. For CGTMSE collateral-free loans, SARFAESI property seizure is statutorily barred, and DRT suits can be defended by auditing inflated compound ledgers. Promoters can file interim applications praying for restraint against coercive attachment of essential operating machinery.
                  </p>
                </div>
              </div>

              {/* RBI Fair Practices Code List Card */}
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-xs md:text-sm text-emerald-950 leading-relaxed">
                <strong className="text-emerald-900 font-bold block mb-1">RBI Fair Practices Code Protections:</strong>
                RBI prohibits recovery agents from making calls outside 8:00 AM to 7:00 PM, visiting unannounced, contacting clients or vendors, or harassing promoters.
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Escalation Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. The 3-Tier Grievance Redressal Matrix &amp; Regulatory Escalation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When recovery wings violate guidelines, ignore revival applications, or levy illegal penal charges, escalate through this 3-tier matrix:
              </p>

              <div className="space-y-3 pt-1">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Level 1: Grievance Redressal Officer (GRO)</span>
                    <span className="text-xs text-slate-500">7–10 Days</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a written grievance detailing accounting discrepancies and request referral to the bank&apos;s Stressed MSME Committee.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">Level 2: Principal Nodal Officer (PNO)</span>
                    <span className="text-xs text-slate-500">14–21 Days</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalate unresolved disputes to the Head Office PNO with cash-flow viability reports and formal OTS proposals.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Level 3: RBI Integrated Ombudsman</span>
                    <span className="text-xs text-slate-500">30 Days</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File complaints on cms.rbi.org.in for Fair Practices Code breaches, harassment, or unlawful denial of MSME framework relief.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-resolution-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Resolution Timelines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Procedural Timeline: Default to Resolution Milestones
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understand regulatory milestones from initial delinquency to final debt discharge:
              </p>

              {/* 4-Sided Bordered Table with vertical dividers */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 font-bold">Phase</th>
                      <th className="p-3 font-bold">Regulatory Event</th>
                      <th className="p-3 font-bold">Limitation</th>
                      <th className="p-3 font-bold text-[#1886ff]">Strategic Defense</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Days 1–30</td>
                      <td className="p-3">SMA-0: Incipient Stress</td>
                      <td className="p-3">Cure window</td>
                      <td className="p-3 text-[#1886ff]">Audit cash flows &amp; file MSEFC claims</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Days 31–60</td>
                      <td className="p-3">SMA-1: Stress Recognition</td>
                      <td className="p-3">30-day window</td>
                      <td className="p-3 text-[#1886ff]">Invoke RBI Stressed MSME Framework</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Days 61–90</td>
                      <td className="p-3">SMA-2: Imminent NPA</td>
                      <td className="p-3">Pre-NPA period</td>
                      <td className="p-3 text-[#1886ff]">Present restructuring proposal</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Days 91–180</td>
                      <td className="p-3">NPA &amp; Demand Notices</td>
                      <td className="p-3">Statutory notice</td>
                      <td className="p-3 text-[#1886ff]">Defend Sec 138 &amp; open OTS dialogue</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Months 6+</td>
                      <td className="p-3">Provisioned Bad Debt</td>
                      <td className="p-3">OTS policy window</td>
                      <td className="p-3 text-[#1886ff]">Execute 40%-60% OTS, secure NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-msme-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Business Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Business Scenarios: Shocks &amp; ARCs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Legal strategies must adapt to the corporate structure and facility architecture:
              </p>

              <div className="space-y-3 pt-1">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#1886ff]" />
                    Multi-Lender Consortium &amp; Multiple Banking
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When carrying limits across multiple lenders, defense requires negotiating an Inter-Creditor Agreement (ICA) or harmonizing parallel OTS offers to prevent insolvency filings under IBC.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Enterprise Liquidity Shocks &amp; Supply Chain Disruptions
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Documenting external disruptions in an economic hardship dossier proves to credit committees that non-payment is circumstantial rather than willful default.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Sole Proprietorship vs. Private Limited Liabilities
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In proprietorships, personal assets are exposed to civil execution, whereas in Private Limited companies, liability is restricted unless personal guarantees were executed under Section 128.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    MSME Debt Assignment to Asset Reconstruction Companies (ARCs)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When banks sell MSME debt to ARCs at 20% to 35% discounts under SARFAESI Section 5, borrowers gain substantial leverage for deep compromise OTS settlements.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions on MSME Loan Default Legal Action
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

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Judicial References
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li><strong>MSMED Act 2006:</strong> Chapter V, Sections 15 to 21, Ministry of MSME.</li>
                <li><strong>RBI Master Directions:</strong> Framework for Revival and Rehabilitation of MSMEs.</li>
                <li><strong>CGTMSE Guidelines:</strong> Operational Rules on Default Guarantee Coverage.</li>
                <li><strong>NI Act 1881 &amp; PSSA 2007:</strong> Section 138 (Cheques) &amp; Section 25 (NACH).</li>
                <li><strong>CICRA 2005:</strong> Section 21 Rules for Mandatory Credit Information Closure.</li>
                <li><strong>Supreme Court:</strong> <em>Perkins Eastman (2020)</em> &amp; <em>TRF Ltd. (2017)</em>.</li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-1.5">Official Portals:</span>
                <div className="flex flex-wrap gap-1.5">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2 py-0.5 rounded bg-slate-100 hover:text-[#1886ff] text-slate-700 border border-slate-200 inline-flex items-center gap-1"><span>rbi.org.in</span><ExternalLink className="w-3 h-3 text-slate-400" /></a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2 py-0.5 rounded bg-slate-100 hover:text-[#1886ff] text-slate-700 border border-slate-200 inline-flex items-center gap-1"><span>cms.rbi.org.in</span><ExternalLink className="w-3 h-3 text-slate-400" /></a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2 py-0.5 rounded bg-slate-100 hover:text-[#1886ff] text-slate-700 border border-slate-200 inline-flex items-center gap-1"><span>cibil.com</span><ExternalLink className="w-3 h-3 text-slate-400" /></a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2 py-0.5 rounded bg-slate-100 hover:text-[#1886ff] text-slate-700 border border-slate-200 inline-flex items-center gap-1"><span>indiacode.nic.in</span><ExternalLink className="w-3 h-3 text-slate-400" /></a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2 py-0.5 rounded bg-slate-100 hover:text-[#1886ff] text-slate-700 border border-slate-200 inline-flex items-center gap-1"><span>nalsa.gov.in</span><ExternalLink className="w-3 h-3 text-slate-400" /></a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2 py-0.5 rounded bg-slate-100 hover:text-[#1886ff] text-slate-700 border border-slate-200 inline-flex items-center gap-1"><span>cybercrime.gov.in</span><ExternalLink className="w-3 h-3 text-slate-400" /></a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-1.5">Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-1.5">
                  <Link href="/SME-loan-dispute-resolution" className="text-[11px] px-2 py-0.5 rounded bg-slate-100 hover:text-[#1886ff] text-slate-700 border border-slate-200">SME Loan Dispute</Link>
                  <Link href="/best-lawyer-for-MSME-loan-recovery-defence" className="text-[11px] px-2 py-0.5 rounded bg-slate-100 hover:text-[#1886ff] text-slate-700 border border-slate-200">MSME Recovery Defense</Link>
                  <Link href="/best-lawyer-for-business-loan-settlement" className="text-[11px] px-2 py-0.5 rounded bg-slate-100 hover:text-[#1886ff] text-slate-700 border border-slate-200">Business Loan Settlement</Link>
                  <Link href="/best-lawyer-for-company-loan-matters" className="text-[11px] px-2 py-0.5 rounded bg-slate-100 hover:text-[#1886ff] text-slate-700 border border-slate-200">Company Loan Matters</Link>
                  <Link href="/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" className="text-[11px] px-2 py-0.5 rounded bg-slate-100 hover:text-[#1886ff] text-slate-700 border border-slate-200">DRT Defense</Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2 py-0.5 rounded bg-slate-100 hover:text-[#1886ff] text-slate-700 border border-slate-200">Arbitration Defense</Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2 py-0.5 rounded bg-slate-100 hover:text-[#1886ff] text-slate-700 border border-slate-200">Legal Notice Reply</Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2 py-0.5 rounded bg-slate-100 hover:text-[#1886ff] text-slate-700 border border-slate-200">Full &amp; Final Settlement</Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2 py-0.5 rounded bg-slate-100 hover:text-[#1886ff] text-slate-700 border border-slate-200">Settled to Closed</Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2 py-0.5 rounded bg-slate-100 hover:text-[#1886ff] text-slate-700 border border-slate-200">Get NOC</Link>
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
                Specialized in MSME credit dispute defense, banking compliance, DRT representation, and commercial debt settlement negotiations.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <Link
                  href="/author/ashish-jhangra"
                  className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> CredSettle Panel
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card (#2452ae Background) */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-3 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block">
                100% CONFIDENTIAL DEFENSE
              </span>
              <h3 className="text-lg font-bold text-white leading-snug">
                Facing Legal Action on Your MSME Loan?
              </h3>
              <p className="text-blue-100 text-xs leading-relaxed">
                Our debt resolution experts invoke RBI revival committees, defend Section 138 summons, and negotiate a 40% to 60% compromise loan waiver.
              </p>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Enterprise Legal Defense
              </Link>
              <div className="pt-1 flex flex-col items-center justify-center gap-0.5 text-[11px] text-blue-200">
                <a href="tel:+918800226635" className="hover:underline font-bold text-white flex items-center gap-1">
                  <Phone className="w-3 h-3 text-blue-200" />
                  <span>Call: +91-8800226635</span>
                </a>
                <span className="text-[10px] text-blue-300 flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  <span>Direct Bank Settlement • RBI Compliant</span>
                </span>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2.5 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">CredSettle Advantage</h4>
              <ul className="space-y-1.5 text-slate-600">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked fees.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span><strong>Direct Bank Remittance:</strong> No middleman fund holding.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span><strong>RBI &amp; MSMED Compliance:</strong> 100% lawful defense.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span><strong>Pan-India Representation:</strong> Banking specialists.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Guides</h4>
              <div className="space-y-2">
                <Link
                  href="/SME-loan-dispute-resolution"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors"
                >
                  <p className="font-bold text-slate-800 leading-snug">SME Loan Dispute Resolution</p>
                  <span className="text-[10px] text-slate-400">MSEFC arbitration guide &rarr;</span>
                </Link>
                <Link
                  href="/best-lawyer-for-business-loan-settlement"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors"
                >
                  <p className="font-bold text-slate-800 leading-snug">Business Loan Settlement</p>
                  <span className="text-[10px] text-slate-400">OTS strategy guide &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
