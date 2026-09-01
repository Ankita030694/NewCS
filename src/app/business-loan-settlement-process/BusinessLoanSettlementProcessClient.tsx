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
  FileText,
  HelpCircle,
  TrendingUp,
  Award,
  BookOpen,
  Building2,
  Check,
  Lock,
  Phone,
  AlertCircle,
  Briefcase,
  ArrowRight,
  Clock,
  Gavel,
  Landmark,
  Layers,
  Percent,
  FileCheck,
  ShieldAlert,
  BadgePercent
} from 'lucide-react';

export default function BusinessLoanSettlementProcessClient() {
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
    { id: 'debt-economics-npa', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'financial-breakdown-math', label: '2. Principal vs Penal Interest Breakdown' },
    { id: 'resolution-comparison-matrix', label: '3. Resolution Mechanisms Matrix' },
    { id: 'cibil-commercial-scoring', label: '4. Commercial CIBIL & Director Math' },
    { id: 'infographic-overview', label: '5. Visual 6-Stage Resolution Blueprint' },
    { id: 'step-by-step-settlement-sop', label: '6. 6-Stage Settlement SOP' },
    { id: 'statutory-notice-defense', label: '7. Statutory Notice Defense & Rights' },
    { id: 'three-tier-escalation', label: '8. 3-Tier Grievance Redressal Matrix' },
    { id: 'chronological-timeline', label: '9. Chronological Timelines & Milestones' },
    { id: 'real-world-scenarios', label: '10. Specialized Commercial Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is the business loan settlement process in India?',
      a: 'It is a formal compromise where a distressed enterprise negotiates with lenders to pay a reduced lump sum, typically 40% to 60% of principal, extinguishing commercial liabilities with an unconditional No Dues Certificate.'
    },
    {
      q: 'How does an MSME loan restructuring differ from an OTS?',
      a: 'MSME loan restructuring modifies repayment terms by extending tenures while retaining 100% of the principal debt. In contrast, an OTS permanently waives accumulated interest, penal charges, and part of the principal for immediate debt closure.'
    },
    {
      q: 'Are directors personally liable for unsecured business loan defaults?',
      a: 'Directors are liable only if they executed personal guarantees. In private limited entities without personal guarantees, director liability remains legally separated from corporate debt under the Companies Act corporate veil doctrine.'
    },
    {
      q: 'Can a sole proprietor settle business debt without losing personal assets?',
      a: 'Yes. Negotiating a structured OTS resolves unsecured commercial liabilities cleanly, preventing lenders from initiating civil execution proceedings against personal residential properties.'
    },
    {
      q: 'What percentage waiver can an enterprise negotiate during an OTS?',
      a: 'Enterprises facing verifiable commercial insolvency typically secure 100% waivers on penal interest and compound levies, plus 35% to 60% waivers on core principal balances depending on credit committee approval.'
    },
    {
      q: 'Can banks initiate insolvency or NCLT proceedings for unsecured business loans?',
      a: 'Under Section 4 of the Insolvency and Bankruptcy Code (IBC), financial creditors can approach the NCLT only if the corporate default exceeds ₹1 Crore. Smaller MSME debts are handled via civil recovery or DRT.'
    },
    {
      q: 'How does a business loan settlement impact commercial CIBIL rank and director score?',
      a: 'The commercial credit report reflects the loan as Settled, temporarily lowering CMR and CIR scores. However, it halts negative DPD escalation, enabling systematic credit repair within 12 to 24 months.'
    },
    {
      q: 'What legal notices do banks issue during business loan defaults?',
      a: 'Lenders commonly issue loan recall notices, Section 138 NI Act notices for security cheques, Section 25 PSSA notices for NACH mandate dishonour, and Section 21 Arbitration invocation notices.'
    },
    {
      q: 'How are personal guarantees discharged after settlement?',
      a: 'The settlement sanction letter must include explicit covenants releasing all personal guarantors under Section 133 of the Indian Contract Act 1872, accompanied by the return of original security cheques.'
    },
    {
      q: 'Can debt sold to an Asset Reconstruction Company (ARC) be settled?',
      a: 'Yes. ARCs acquire stressed business loans at deep discounts under SARFAESI Section 5, making them highly flexible to accept compromise settlements offering 50% to 70% debt waivers.'
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
          <span className="text-[11px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3.5 py-1 rounded-full inline-block mb-3 border border-white/15">
            Commercial Debt Resolution &amp; MSME Legal Framework
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Business Loan Settlement Process in India
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Navigate unsecured business loan resolution, MSME compromise policies, and personal guarantee protections. Learn how distressed commercial enterprises negotiate substantial principal waivers with institutional lenders without facing corporate liquidation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Facing Business Loan Default? Get Legal Defense</span>
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
                      href={'#' + link.id}
                      className={'block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ' + (
                        isActive
                          ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      )}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Commercial Debt Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by RBI Prudential Framework 2019, MSMED Act 2006, and Indian Contract Act 1872.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= CENTER COLUMN: EDITORIAL CONTENT ================= */}
          <div className="space-y-10 min-w-0">

            {/* EXECUTIVE SUMMARY BOX (#F4F8FE with border-l-[5px] border-l-[#1886ff] converted to continuous human paragraphs) */}
            <section
              id="quick-crux"
              className="scroll-target rounded-2xl p-6 md:p-7 border border-blue-100 shadow-xs space-y-3.5"
              style={{ backgroundColor: '#F4F8FE', borderLeft: '5px solid #1886ff' }}
            >
              <div className="flex items-center gap-2.5 text-[#1886ff]">
                <Briefcase className="w-5 h-5 flex-shrink-0" />
                <h2 className="text-lg md:text-xl font-extrabold text-slate-900">
                  Executive Summary: Commercial Debt Resolution Crux
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                When enterprise revenue evaporates due to macroeconomic volatility, supply chain disruptions, or severe customer default, servicing unsecured commercial credit lines becomes mathematically unviable. Indian statutory frameworks offer structured compromise mechanisms to resolve commercial debt lawfully without forcing corporate insolvency. Because unsecured business loans carry zero physical mortgage or hypothecated collateral, institutional lenders cannot invoke summary property attachment under the SARFAESI Act 2002.
              </p>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                Once continuous delinquency crosses the 90-day threshold, Reserve Bank of India regulations mandate steep Tier-1 capital provisioning against the bank balance sheet, creating strong economic motivation for credit committees to sanction One Time Settlements (OTS). In bona fide commercial distress cases, enterprises routinely negotiate substantial waivers of 40% to 60% on core principal balances alongside complete 100% waivers of accumulated overdue interest, penal levies, and processing charges.
              </p>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                A critical pillar of commercial compromise is ensuring director personal guarantees are explicitly discharged under Section 133 of the Indian Contract Act 1872. When lenders issue statutory notices under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act, timely formal legal replies establish legitimate commercial dispute rather than criminal fraud. All settlement remittances must be routed directly into bank-controlled loan accounts to secure an unconditional No Dues Certificate.
              </p>
            </section>

            {/* SECTION 1: DEBT ECONOMICS & NPA DYNAMICS (Paragraph Style) */}
            <section id="debt-economics-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Landmark className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  1. Debt Economics &amp; Commercial NPA Classification Dynamics
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Unsecured business loans, working capital overdrafts, and commercial credit lines represent high-risk exposures for Indian commercial banks and NBFCs. When an enterprise encounters acute liquidity stress, raw material inflation, or debtor default, operating cash flows turn negative and repayment pipelines collapse. Under the Reserve Bank of India Prudential Framework for Resolution of Stressed Assets, commercial credit accounts are monitored across Special Mention Account buckets: SMA-0 (1-30 days overdue), SMA-1 (31-60 days overdue), and SMA-2 (61-90 days overdue).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On the 91st day of continuous delinquency, banking systems automatically reclassify the credit facility as a Non-Performing Asset (NPA). This regulatory trigger imposes mandatory capital provisioning of 15% to 100% against the bank Tier-1 capital. Because unsecured business facilities lack underlying tangible mortgages, lenders are legally barred from initiating summary property seizures under the SARFAESI Act 2002.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Recognizing that prolonged civil litigation or Debt Recovery Tribunal proceedings take years to yield partial recovery, institutional credit committees prioritize commercial One Time Settlements. By accepting a discounted cash payout, the lender writes off stressed exposure, frees allocated regulatory capital, and restores balance sheet health more effectively than pursuing indefinite legal execution.
              </p>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="financial-breakdown-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Percent className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  2. Principal vs Penal Interest Breakdown &amp; OTS Financial Math
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Commercial loan defaults trigger rapid debt accumulation through compound interest, late fees, and penal interest rates reaching 24% to 36% annually. Within 18 months, bank demands often double the original principal sum. However, under the RBI Fair Practices Code, lenders cannot capitalize penal interest into core principal. A forensic audit removes unapplied levies to establish the true settlement baseline.
              </p>
              
              {/* Financial Calculation Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <BadgePercent className="w-5 h-5 text-[#1886ff]" />
                  Representative 180-Day NPA Commercial Settlement (₹50 Lakh Facility)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider text-rose-600">Bank Demand (Pre-OTS)</span>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Core Principal:</span>
                      <span className="font-semibold text-slate-900">₹50,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Overdue Interest:</span>
                      <span className="font-semibold text-slate-900">₹12,50,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Penal Charges:</span>
                      <span className="font-semibold text-rose-600">₹6,00,000</span>
                    </div>
                    <div className="flex justify-between pt-1 font-bold text-slate-900 text-sm">
                      <span>Total Claim:</span>
                      <span className="text-rose-700">₹68,50,000</span>
                    </div>
                  </div>

                  <div className="bg-blue-50/60 p-4 rounded-xl space-y-2 border border-blue-100">
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider text-[#1886ff]">Negotiated Compromise Settlement</span>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Penal Charges Waived:</span>
                      <span className="font-semibold text-emerald-600">100% (-₹6,00,000)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Overdue Interest Waived:</span>
                      <span className="font-semibold text-emerald-600">100% (-₹12,50,000)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Principal Haircut (50%):</span>
                      <span className="font-semibold text-emerald-600">-₹25,00,000</span>
                    </div>
                    <div className="flex justify-between pt-1 font-bold text-slate-900 text-sm">
                      <span>Final Agreed Payout:</span>
                      <span className="text-emerald-700 font-extrabold">₹25,00,000 (63.5% Savings)</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Presenting documented enterprise insolvency proves to bank credit committees that a prompt ₹25 Lakh lump sum yields higher recovery value than holding bad debt.
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="resolution-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Scale className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  3. Commercial Resolution Mechanisms: Comparative Strategic Matrix
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian commercial enterprises have multiple avenues to address loan distress. Selecting between compromise settlements, restructuring, court litigation, and mediation determines corporate survival.
              </p>

              {/* 4-Sided Bordered Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200/80 divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4">Resolution Pathway</th>
                      <th className="p-3.5 md:p-4">Debt Haircut Scope</th>
                      <th className="p-3.5 md:p-4">Closure Timeline</th>
                      <th className="p-3.5 md:p-4">Guarantor Liability</th>
                      <th className="p-3.5 md:p-4">Credit Score Trajectory</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">One Time Settlement (OTS)</td>
                      <td className="p-3.5 md:p-4 text-emerald-600 font-semibold">40% to 60% Principal + 100% Fees</td>
                      <td className="p-3.5 md:p-4">30 to 90 Days</td>
                      <td className="p-3.5 md:p-4 text-emerald-700 font-medium">Full Discharge via NDC</td>
                      <td className="p-3.5 md:p-4">Settled tag, repairable in 12-24m</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">MSME Debt Restructuring</td>
                      <td className="p-3.5 md:p-4 text-amber-600 font-medium">0% Haircut (Tenure extension)</td>
                      <td className="p-3.5 md:p-4">60 to 120 Days</td>
                      <td className="p-3.5 md:p-4 text-amber-700">Guarantees remain active</td>
                      <td className="p-3.5 md:p-4">Restructured status</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Court / DRT Litigation</td>
                      <td className="p-3.5 md:p-4 text-slate-600">Unpredictable decree</td>
                      <td className="p-3.5 md:p-4 text-rose-600 font-medium">3 to 7 Years</td>
                      <td className="p-3.5 md:p-4 text-rose-700">Persistent asset exposure</td>
                      <td className="p-3.5 md:p-4 text-rose-600">Written Off / Suit Filed tag</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Lok Adalat Mediation</td>
                      <td className="p-3.5 md:p-4 text-emerald-600 font-medium">20% to 40% Interest Waivers</td>
                      <td className="p-3.5 md:p-4">Single Session</td>
                      <td className="p-3.5 md:p-4">Binding decree on pay</td>
                      <td className="p-3.5 md:p-4">Settled through Lok Adalat</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Unmanaged Inaction</td>
                      <td className="p-3.5 md:p-4 text-rose-600 font-semibold">0% (Debt compounds)</td>
                      <td className="p-3.5 md:p-4">Indefinite</td>
                      <td className="p-3.5 md:p-4 text-rose-700">Severe civil execution risk</td>
                      <td className="p-3.5 md:p-4 text-rose-700 font-bold">Severe degradation (&lt;550)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: TECHNICAL CIBIL ALGORITHM & SCORING MATH */}
            <section id="cibil-commercial-scoring" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <TrendingUp className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  4. Technical CIBIL Algorithm &amp; Commercial Scoring Dynamics
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Commercial credit underwriting evaluates both the enterprise and individual promoters. The business entity is assessed via the Company Credit Report (CCR) and assigned a CIBIL Commercial Rank (CMR) from CMR-1 to CMR-10. Simultaneously, directors with personal guarantees are evaluated on their individual Credit Information Report (CIR) scored from 300 to 900. Scoring weights comprise Payment History (35%), Credit Exposure (30%), History Length (15%), Credit Diversity (10%), and Recent Inquiries (10%).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Delinquency escalates Days Past Due (DPD), driving personal scores below 600 and commercial ranks to CMR-9. Executing an OTS updates the account to Settled, stopping negative DPD escalation. Under Section 21 of the Credit Information Companies (Regulation) Act (CICRA) 2005, borrowers can dispute legacy records upon fulfilling settlement terms, enabling systematic credit score repair within 12 to 24 months.
              </p>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <FileCheck className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  5. Visual Blueprint: 6-Stage Commercial Settlement Architecture
                </h2>
              </div>
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-4 md:p-6 space-y-3">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                  <Image
                    src="/images/infographics/business-loan-settlement-process.jpg"
                    alt="Business Loan Settlement Process in India 6-Stage Strategic Framework"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 1200px) 100vw, 900px"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-slate-600">
                  <span>Official CredSettle Framework: Commercial Debt Compromise &amp; Guarantee Discharge</span>
                  <a
                    href="/images/infographics/business-loan-settlement-process.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>View High-Resolution Visual</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES - Human Flowing Paragraphs) */}
            <section id="step-by-step-settlement-sop" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Layers className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  6. Step-by-Step SOP: 6 Stages of Business Loan Compromise
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Following this structured 6-stage Standard Operating Procedure ensures commercial liabilities are resolved lawfully while shielding company leadership from personal exposure.
              </p>

              <div className="space-y-3.5 text-sm md:text-base text-slate-700 leading-relaxed">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">1</span>
                    Stage 1: Forensic Loan &amp; Personal Guarantee Audit
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The resolution process begins with a legal review of sanction letters and loan ledgers. Counsel identifies unauthorized penal fees and improper interest compounding that violate RBI rules, while auditing personal guarantee covenants to verify promoter liability limits.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">2</span>
                    Stage 2: Financial Hardship Dossier Compilation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The enterprise compiles financial evidence demonstrating genuine commercial insolvency, including audited balance sheets, declining GST returns, bank statements reflecting cash deficits, and records of unrecoverable receivables.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">3</span>
                    Stage 3: Statutory Legal Notice Defense
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When lenders issue notices under Section 138 NI Act or Section 25 PSSA for bounced cheques or mandates, counsel files structured legal replies within 15-30 days to establish commercial dispute and prevent criminal prosecution.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">4</span>
                    Stage 4: Credit Committee Bilateral Representation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Formal OTS proposals are submitted to the Stressed Assets Desk, proving that a 40% to 60% cash recovery yields higher net present value than pursuing multi-year civil litigation through DRT forums.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">5</span>
                    Stage 5: Settlement Sanction Letter Vetting
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Attorneys review the bank formal OTS sanction letter to ensure unconditional waiver terms and explicit covenants discharging all personal guarantors under Section 133 of the Indian Contract Act.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-bold text-xs flex items-center justify-center">6</span>
                    Stage 6: Direct Remittance &amp; No Dues Certificate
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The compromise amount is remitted directly into the bank loan account via RTGS, followed by obtaining an unconditional No Dues Certificate and updated credit bureau records.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & LEGAL RIGHTS (Paragraph Style) */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Gavel className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  7. Statutory Notice Defense &amp; Legal Rights of Borrowers
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During loan default, lenders utilize various legal instruments. Understanding statutory defenses empowers business owners to protect their commercial rights.
              </p>

              <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <ShieldAlert className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Section 25 Payment &amp; Settlement Systems Act</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    When electronic NACH mandates bounce, lenders issue Section 25 notices. The legal defense establishes that dishonour arose from temporary commercial illiquidity without fraudulent intent, demonstrating active intent to resolve debt through compromise.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <FileText className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Section 138 Negotiable Instruments Act</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Banks often deposit undated security cheques and file Section 138 complaints upon dishonour. The statutory defense establishes that security cheques held as collateral do not represent an existing legally enforceable liquidated debt under Supreme Court precedents.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <Scale className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Section 21 Arbitration Act &amp; Perkins Ruling</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Under Supreme Court rulings in Perkins Eastman and TRF Limited, unilateral arbitrator appointments by lenders are legally invalid under Section 12(5) of the Arbitration Act, halting biased ex-parte proceedings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>DRT Jurisdiction &amp; Fair Practices Code</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Debt Recovery Tribunal claims under Section 19 RDBFI Act apply exclusively to debts exceeding ₹20 Lakhs. The RBI Fair Practices Code protects borrowers from third-party recovery harassment and coercive tactics.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER ESCALATION MATRIX (Narrative Style) */}
            <section id="three-tier-escalation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Building2 className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  8. 3-Tier Institutional Grievance &amp; Escalation Matrix
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When recovery branches stall compromise negotiations or engage in harassment, borrowers can utilize the Reserve Bank of India statutory grievance framework.
              </p>

              <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-sm">Tier 1: Bank Internal Grievance Redressal Officer (GRO)</h3>
                    <span className="text-[11px] font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-full">7-10 Days</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Submit a formal written complaint to the bank Grievance Redressal Officer regarding unfair fee capitalization, harassment, or unresponsive branch management, mandated for resolution within 7 to 10 days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-sm">Tier 2: Bank Principal Nodal Officer (PNO)</h3>
                    <span className="text-[11px] font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-full">14-21 Days</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Escalate deadlocked discussions to the Principal Nodal Officer at zonal headquarters, who holds executive authority to bridge communication with the central credit committee within 14 to 21 days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-sm">Tier 3: RBI Integrated Ombudsman Scheme</h3>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">cms.rbi.org.in</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    File a statutory complaint through the RBI Integrated Ombudsman portal (cms.rbi.org.in) for Fair Practices Code violations or unjustified delays in issuing settlement documentation.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  9. Chronological Resolution Timeline: From Delinquency to Clean NDC
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A structured business loan settlement progresses across six distinct operational milestones.
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200/80 divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4">Timeframe</th>
                      <th className="p-3.5 md:p-4">Account Status</th>
                      <th className="p-3.5 md:p-4">Banking &amp; Legal Action</th>
                      <th className="p-3.5 md:p-4">Strategic Counter-Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Days 1 to 30</td>
                      <td className="p-3.5 md:p-4 text-blue-700 font-medium">SMA-0 Category</td>
                      <td className="p-3.5 md:p-4">Automated reminders and tele-calling</td>
                      <td className="p-3.5 md:p-4">Cash flow evaluation and budget isolation</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Days 31 to 90</td>
                      <td className="p-3.5 md:p-4 text-amber-700 font-medium">SMA-1 / SMA-2</td>
                      <td className="p-3.5 md:p-4">Loan recall notices and branch visits</td>
                      <td className="p-3.5 md:p-4">Hardship dossier compilation and forensic audit</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Day 91+</td>
                      <td className="p-3.5 md:p-4 text-rose-700 font-semibold">NPA Classification</td>
                      <td className="p-3.5 md:p-4">Mandatory bank capital provisioning</td>
                      <td className="p-3.5 md:p-4">Formal OTS proposal submission to Stressed Assets Desk</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Month 4 to 5</td>
                      <td className="p-3.5 md:p-4 text-purple-700 font-medium">Active Negotiation</td>
                      <td className="p-3.5 md:p-4">Section 138 / Section 25 legal notices</td>
                      <td className="p-3.5 md:p-4">Formal legal notice responses and committee hearings</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Month 6</td>
                      <td className="p-3.5 md:p-4 text-emerald-700 font-bold">Debt Discharged</td>
                      <td className="p-3.5 md:p-4">Settlement sanction letter issued</td>
                      <td className="p-3.5 md:p-4">Direct remittance, No Dues Certificate &amp; CIBIL update</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS (Paragraph Commentary) */}
            <section id="real-world-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <AlertCircle className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  10. Specialized Real-World Commercial Scenarios &amp; Case Commentary
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding how specific business scenarios interact with banking law enables tailored resolution strategies across diverse commercial entity structures.
              </p>

              <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">Multi-Lender Fintech &amp; NBFC Stacking</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Enterprises holding multiple unsecured digital loans face simultaneous cross-defaults. Resolving multiple stacked loans requires synchronized bilateral negotiations, prioritizing lenders with imminent 90-day provisioning deadlines to secure optimal principal haircuts across all accounts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">Corporate Layoffs &amp; Revenue Contraction</h3>
                  <p className="text-slate-600 leading-relaxed">
                    In Private Limited entities facing major client loss, corporate limited liability shields directors. Where personal guarantees were executed, compromise agreements must include complete indemnity covenants to extinguish individual promoter liabilities completely.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">Sole Proprietorship Unlimited Liability</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Because sole proprietorships lack independent corporate personality, proprietor personal assets remain vulnerable to civil attachment. Securing a timely OTS eliminates debt before lenders obtain money decrees against personal residential properties.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">ARC Debt Assignments</h3>
                  <p className="text-slate-600 leading-relaxed">
                    When banks transfer stressed loans to Asset Reconstruction Companies under SARFAESI Section 5 at deep discounts, ARCs operate with significant flexibility. Stressed enterprises can negotiate aggressive settlements yielding 50% to 70% debt waivers for lump-sum closure.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: COMPANY PROFILE COMPONENT */}
            <section id="company-profile" className="scroll-target">
              <CompanySection />
            </section>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <HelpCircle className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  Frequently Asked Questions: Business Loan Settlement
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-600">
                Key legal and financial inquiries regarding commercial loan settlements, MSME rights, and debt compromise procedures in India.
              </p>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-xs md:text-sm hover:text-[#1886ff] transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={'w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ' + (
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          )}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 md:px-5 md:pb-5 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Award className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg md:text-xl font-bold text-slate-900">
                  Statutory Citations &amp; Institutional Authorities
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                CredSettle resolution procedures strictly adhere to statutory frameworks including the Reserve Bank of India Prudential Framework for Resolution of Stressed Assets (2019), MSMED Act (2006), CICRA (2005), Section 138 NI Act (1881), Section 25 PSSA (2007), Section 21 Arbitration Act (1996), and Section 133 Indian Contract Act (1872).
              </p>

              {/* Outbound Badges */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                  Verified Regulators:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>Reserve Bank of India (rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>RBI Integrated Ombudsman (cms.rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>TransUnion CIBIL (cibil.com)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>India Code (indiacode.nic.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>NALSA (nalsa.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>Cyber Crime Portal (cybercrime.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Internal Related Badges */}
              <div className="space-y-2 pt-3 border-t border-slate-200/80">
                <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                  Related Guides:
                </span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/best-lawyer-for-business-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business Loan Lawyer
                  </Link>
                  <Link href="/best-lawyer-for-MSME-loan-recovery-defence" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    MSME Loan Defense
                  </Link>
                  <Link href="/best-lawyer-for-company-loan-matters" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Company Loan Expert
                  </Link>
                  <Link href="/best-lawyer-for-arc-loan-assignment-dispute" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    ARC Loan Dispute
                  </Link>
                  <Link href="/best-lawyer-for-consortium-loan-recovery-defence" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Consortium Loan Defense
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Settlement Meaning
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
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
                Specialized in commercial debt resolution, MSME banking compliance, and NPA compromise negotiations across Indian banking forums.
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
                  <ShieldCheck className="w-3.5 h-3.5" /> CredSettle Panel
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card (#2452ae Background) */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL COMMERCIAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Facing Business Loan Default?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt specialists represent your enterprise before bank credit committees, stop harassment, and negotiate 40% to 60% principal waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Facing Business Loan Default? Get Legal Defense
              </Link>
              <div className="pt-2 flex flex-col items-center justify-center gap-1 text-[11px] text-blue-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-blue-200" />
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
                  <span><strong>Zero Upfront Risk:</strong> Success-linked fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> Zero fund pooling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Guarantor Protection:</strong> Full legal discharge.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Experienced counsel.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Commercial Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/best-lawyer-for-business-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Best Lawyer for Business Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">MSME debt guide &rarr;</span>
                </Link>

                <Link
                  href="/best-lawyer-for-MSME-loan-recovery-defence"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    MSME Loan Recovery Defense in India
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Statutory rights &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Loan to Closed Status
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Credit blueprint &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
