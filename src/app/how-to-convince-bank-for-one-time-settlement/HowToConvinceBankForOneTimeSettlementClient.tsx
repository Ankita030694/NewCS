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

export default function HowToConvinceBankForOneTimeSettlementClient() {
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
    { id: 'financial-breakdown-math', label: '2. Principal vs Penal Math Breakdown' },
    { id: 'resolution-comparison-matrix', label: '3. Resolution Mechanisms Matrix' },
    { id: 'cibil-algorithm-restoration', label: '4. CIBIL Algorithm & Scoring Math' },
    { id: 'infographic-overview', label: '5. Visual 6-Stage Resolution Blueprint' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Settlement SOP' },
    { id: 'statutory-notice-defense', label: '7. Statutory Notice Defense & Rights' },
    { id: 'three-tier-escalation', label: '8. 3-Tier Grievance Redressal Matrix' },
    { id: 'chronological-milestones', label: '9. Chronological Milestones Timeline' },
    { id: 'specialized-scenarios', label: '10. Specialized Real-World Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
  {
    "q": "Why do branch managers refuse One Time Settlement requests?",
    "a": "Branch managers lack discretionary authority to waive principal. Internal recovery quotas penalize haircuts at branch level, requiring borrowers to escalate proposals directly to regional credit committees."
  },
  {
    "q": "Which bank authority approves an OTS proposal?",
    "a": "OTS approvals are sanctioned by Zonal Stressed Assets Resolution Branches (SARB), Regional Settlement Advisory Committees, and Central Credit Committees, based on outstanding loan balance and requested haircut."
  },
  {
    "q": "What are the key provisions of the RBI June 2023 compromise circular?",
    "a": "The RBI June 8, 2023 Prudential Framework directs all regulated lenders to implement transparent, board-approved compromise policies, ensuring standardized debt settlement procedures for distressed retail and commercial borrowers."
  },
  {
    "q": "How do I prove financial hardship versus willful default to the bank?",
    "a": "Submit a documented hardship dossier containing medical records, layoff notices, cash-flow deficit statements, and bank statements proving zero intentional diversion of borrowed capital."
  },
  {
    "q": "What average percentage haircut can a borrower negotiate during an OTS?",
    "a": "Borrowers with verified financial insolvency typically secure complete 100% penal fee waivers, alongside 40% to 60% principal waivers depending on NPA aging and collateral absence."
  },
  {
    "q": "How should I handle recovery agent threats after requesting an OTS?",
    "a": "Issue a formal notice citing the RBI Master Direction on Recovery Agents, record unlawful communications, and file complaints with the bank Principal Nodal Officer and RBI Ombudsman."
  },
  {
    "q": "What clauses must be verified in a bank OTS sanction letter?",
    "a": "Verify official bank letterhead, authorized signatory seal, explicit full debt release terms, specified payment schedules, and an unconditional No Dues Certificate commitment."
  },
  {
    "q": "Can a loan be settled after receiving a Section 138 notice?",
    "a": "Yes. Section 138 Negotiable Instruments Act matters are compoundable under Section 147. Banks withdraw criminal complaints upon execution of an OTS and realization of agreed funds."
  },
  {
    "q": "How does an OTS impact credit score and future borrowing?",
    "a": "The credit bureau marks the account as Settled, freezing delinquency escalation. Borrowers can rebuild credit scores past 750 within 12 to 24 months using secured credit cards."
  },
  {
    "q": "Can debt assigned to an Asset Reconstruction Company (ARC) be settled?",
    "a": "Yes. ARCs acquire distressed loans at steep discounts under SARFAESI Section 5, making them highly receptive to compromise settlements offering 50% to 70% debt waivers."
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
            Banking Compromise Framework &amp; Legal Resolution Blueprint
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How to Convince Bank for One Time Settlement (OTS)
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Master the strategic negotiation blueprint to overcome branch manager refusals, navigate internal bank credit committee approval hierarchies, and secure substantial 40% to 60% principal waivers under the landmark RBI June 2023 compromise settlement directives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Facing Loan Default? Convince Your Bank for OTS Settlement</span>
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
                  <span>Statutory OTS Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by RBI Framework June 2023, Banking Regulation Act 1949, and Indian Contract Act 1872.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= CENTER COLUMN: EDITORIAL CONTENT ================= */}
          <div className="space-y-10 min-w-0">

            {/* EXECUTIVE SUMMARY BOX (#F4F8FE with border-l-[5px] border-l-[#1886ff]) */}
            <section
              id="quick-crux"
              className="scroll-target rounded-2xl p-6 md:p-7 border border-blue-100 shadow-xs space-y-4"
              style={{ backgroundColor: '#F4F8FE', borderLeft: '5px solid #1886ff' }}
            >
              <div className="flex items-center gap-2.5 text-[#1886ff]">
                <Briefcase className="w-5 h-5 flex-shrink-0" />
                <h2 className="text-lg md:text-xl font-extrabold text-slate-900">
                  Executive Summary: Strategic Machinery of Bank OTS Approvals
                </h2>
              </div>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Branch Manager Limitations:</strong> Local branch managers lack discretionary write-off powers and branch audit quotas penalize debt haircuts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Credit Committee Escalation:</strong> OTS compromise petitions must be escalated directly to Zonal Stressed Assets Resolution Branches (SARB).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>RBI June 2023 Framework:</strong> Regulated commercial lenders are mandated to provide transparent, board-approved compromise settlement policies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Insolvency vs Willful Default:</strong> Submitting a documented hardship dossier disproves willful default and unlocks substantial debt relief.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Settlement Waiver Economics:</strong> Insolvent borrowers routinely secure 40% to 60% principal haircuts alongside 100% penal fee cancellations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Closure &amp; CIBIL Restoration:</strong> Direct loan account remittance secures an official No Dues Certificate and Section 21 CICRA bureau fix.</span>
                </li>
              </ul>
            </section>

            {/* SECTION 1: DEBT ECONOMICS & NPA DYNAMICS */}
            <section id="debt-economics-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Landmark className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  1. Debt Economics &amp; Internal NPA Classification Dynamics
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Persuading an Indian bank to compromise on an outstanding facility requires understanding the balance sheet dynamics of distressed debt. Unsecured personal loans, credit card balances, and commercial overdrafts carry zero hypothecated physical collateral. When installments lapse, accounts migrate across Special Mention Account buckets: SMA-0 (1-30 days overdue), SMA-1 (31-60 days overdue), and SMA-2 (61-90 days overdue).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On the 91st day of continuous default, banking systems automatically reclassify the credit line as a Non-Performing Asset (NPA). This regulatory trigger forces the lender to freeze uncollected interest income and set aside mandatory capital provisioning ranging from 15% to 100% out of its Tier-1 core reserves. Because unsecured credit lines lack physical security, lenders cannot invoke summary property possession powers under the SARFAESI Act 2002.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Institutional credit committees recognize that pursuing prolonged civil suits yields uncertain recovery after years of expensive litigation. Consequently, a discounted cash compromise offers substantial economic utility. By accepting an immediate lump-sum settlement, the lender releases tied-up provisioning capital and eliminates bad debt far more efficiently than pursuing coercive recovery.
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
                During default, lending institutions compound penal levies, late payment charges, and administrative fees that artificially inflate outstanding balances by 30% to 70% above core principal. Under the Reserve Bank of India Fair Practices Code, banks cannot capitalize penal interest into principal debt. A forensic audit eliminates these unapplied levies, establishing a clean baseline for settlement discussions.
              </p>
              
              {/* Financial Calculation Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <BadgePercent className="w-5 h-5 text-[#1886ff]" />
                  Representative 180-Day NPA Retail Settlement Breakdown (₹25 Lakh Facility)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider text-rose-600">Bank Pre-OTS Claim</span>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Core Principal:</span>
                      <span className="font-semibold text-slate-900">₹25,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Overdue Interest:</span>
                      <span className="font-semibold text-slate-900">₹5,50,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Penal Levies:</span>
                      <span className="font-semibold text-rose-600">₹3,75,000</span>
                    </div>
                    <div className="flex justify-between pt-1 font-bold text-slate-900 text-sm">
                      <span>Total Claim:</span>
                      <span className="text-rose-700">₹34,25,000</span>
                    </div>
                  </div>

                  <div className="bg-blue-50/60 p-4 rounded-xl space-y-2 border border-blue-100">
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider text-[#1886ff]">Approved Settlement</span>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Penal Waived:</span>
                      <span className="font-semibold text-emerald-600">100% (-₹3,75,000)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Interest Waived:</span>
                      <span className="font-semibold text-emerald-600">100% (-₹5,50,000)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Principal Haircut:</span>
                      <span className="font-semibold text-emerald-600">48% (-₹12,00,000)</span>
                    </div>
                    <div className="flex justify-between pt-1 font-bold text-slate-900 text-sm">
                      <span>Agreed Remittance:</span>
                      <span className="text-emerald-700 font-extrabold">₹13,00,000 (62% Savings)</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Demonstrating verified hardship enables credit committees to approve a ₹13 Lakh upfront payout, delivering immediate balance sheet closure rather than sustaining ongoing provisioning drag.
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="resolution-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Scale className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  3. Comparative Matrix of Banking Debt Resolution Pathways
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Evaluating different resolution routes under Indian banking jurisprudence highlights why a negotiated OTS provides the cleanest financial exit for insolvent borrowers.
              </p>

              {/* 4-Sided Bordered Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200/80 divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4">Resolution Pathway</th>
                      <th className="p-3.5 md:p-4">Debt Haircut Scope</th>
                      <th className="p-3.5 md:p-4">Resolution Timeline</th>
                      <th className="p-3.5 md:p-4">Legal Exposure Risk</th>
                      <th className="p-3.5 md:p-4">Credit Score Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">One Time Settlement (OTS)</td>
                      <td className="p-3.5 md:p-4 text-emerald-600 font-semibold">40% to 60% Principal + 100% Fees</td>
                      <td className="p-3.5 md:p-4">30 to 90 Days</td>
                      <td className="p-3.5 md:p-4 text-emerald-700 font-medium">Extinguished via clean NDC</td>
                      <td className="p-3.5 md:p-4">Settled tag, repairable in 12-24m</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Loan Restructuring</td>
                      <td className="p-3.5 md:p-4 text-amber-600 font-medium">0% Principal Haircut</td>
                      <td className="p-3.5 md:p-4">45 to 60 Days</td>
                      <td className="p-3.5 md:p-4 text-amber-700">Reactivates if next EMI fails</td>
                      <td className="p-3.5 md:p-4">Restructured status tag</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Civil Court / DRT Suit</td>
                      <td className="p-3.5 md:p-4 text-slate-600">Uncertain court decree</td>
                      <td className="p-3.5 md:p-4 text-rose-600 font-medium">3 to 7 Years</td>
                      <td className="p-3.5 md:p-4 text-rose-700">Heavy legal defense costs</td>
                      <td className="p-3.5 md:p-4 text-rose-600">Suit Filed / Written Off</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Lok Adalat Mediation</td>
                      <td className="p-3.5 md:p-4 text-emerald-600 font-medium">25% to 40% Interest Waivers</td>
                      <td className="p-3.5 md:p-4">Single Day Hearing</td>
                      <td className="p-3.5 md:p-4">Binding civil decree executed</td>
                      <td className="p-3.5 md:p-4">Settled via Lok Adalat</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Unmanaged Default</td>
                      <td className="p-3.5 md:p-4 text-rose-600 font-semibold">0% (Compounding debt)</td>
                      <td className="p-3.5 md:p-4">Indefinite</td>
                      <td className="p-3.5 md:p-4 text-rose-700 font-bold">Severe recovery harassment</td>
                      <td className="p-3.5 md:p-4 text-rose-700 font-bold">Severe degradation (&lt;550)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: TECHNICAL CIBIL ALGORITHM & SCORING MATH */}
            <section id="cibil-algorithm-restoration" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <TrendingUp className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  4. Technical CIBIL Algorithm &amp; Post-Settlement Credit Scoring Dynamics
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit bureaus calculate scores across five distinct algorithmic parameters: Repayment History (35%), Credit Exposure (30%), Credit History Length (15%), Credit Mix (10%), and Recent Inquiries (10%). Ongoing delinquencies trigger severe score drops, pushing ratings below 580. Executing an OTS updates the account status to Settled, stopping further negative Days Past Due (DPD) accumulation.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 21 of the Credit Information Companies (Regulation) Act (CICRA) 2005, lenders must update bureau records within 30 days of settlement completion. By obtaining a secured credit card backed by a fixed deposit and keeping credit utilization below 25%, borrowers systematically rebuild their credit score past 750 within 12 to 24 months.
              </p>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <FileCheck className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  5. Visual Blueprint: 6-Stage Bank OTS Negotiation Architecture
                </h2>
              </div>
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-4 md:p-6 space-y-3">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                  <Image
                    src="/images/infographics/how-to-convince-bank-for-one-time-settlement.jpg"
                    alt="How to Convince Bank for One Time Settlement 6-Stage Strategic Framework"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 1200px) 100vw, 900px"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-slate-600">
                  <span>Official CredSettle Framework: Bank Compromise Resolution &amp; Debt Discharge</span>
                  <a
                    href="/images/infographics/how-to-convince-bank-for-one-time-settlement.jpg"
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

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-sop" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Layers className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  6. Step-by-Step SOP: 6 Stages to Convince Bank for an OTS
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Following this structured six-stage procedure enables distressed borrowers to navigate bank approval hierarchies and secure binding compromise sanction letters.
              </p>

              <div className="space-y-3.5 text-sm md:text-base text-slate-700 leading-relaxed">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">1</span>
                    Stage 1: Forensic Loan Ledger Audit
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                    Counsel audits the statement of account to isolate core principal from illegal penal levies, verifying that the facility has crossed 90 days into NPA classification where bank provisioning obligations reach 25% to 100%.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">2</span>
                    Stage 2: Hardship Dossier Compilation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                    The borrower compiles documented evidence substantiating bona fide insolvency, including medical diagnosis records, layoff letters, or audited business statements showing operating losses to disprove allegations of willful default.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">3</span>
                    Stage 3: Credit Committee Escalation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                    Because branch managers lack financial delegation for principal haircuts, formal compromise petitions are submitted directly to the Zonal Stressed Assets Resolution Branch invoking the RBI June 8, 2023 compromise directives.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">4</span>
                    Stage 4: Bilateral Haircut Negotiation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                    Legal representatives negotiate with bank credit committees to anchor a realistic 40% to 60% principal haircut, structuring an upfront single payment or manageable two-to-three-installment plan aligned with borrower liquidity.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">5</span>
                    Stage 5: Sanction Letter Vetting
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                    Counsel scrutinizes the official OTS sanction letter to ensure it appears on bank letterhead with an authorized signatory seal, contains unconditional debt discharge clauses, and prohibits residual third-party recovery claims.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-bold text-xs flex items-center justify-center">6</span>
                    Stage 6: Remittance &amp; Clean NDC
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                    The settlement amount is deposited directly into the bank loan account via RTGS, securing an official No Dues Certificate, return of original cheques, and updated credit reporting under Section 21 CICRA.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & LEGAL RIGHTS */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Gavel className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  7. Statutory Notice Defense &amp; Borrower Legal Rights
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During the pre-settlement phase, banks deploy statutory notices to compel payment. Understanding legal defenses protects borrowers from coercive litigation tactics.
              </p>

              <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <ShieldAlert className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Section 25 Payment and Settlement Systems Act Defense</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-normal">
                    When NACH or ECS mandates bounce, lenders issue Section 25 notices. Legal replies establish that dishonour resulted from genuine illiquidity rather than fraud, proving active settlement intent.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <FileText className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Section 138 Negotiable Instruments Act Safeguards</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-normal">
                    Under Supreme Court precedents, security cheques presented without crystallized debt do not automatically attract Section 138 liability. Cheque bounce offenses are compoundable under Section 147 upon executing an OTS.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <Scale className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Section 21 Arbitration Act &amp; Perkins Eastman Rulings</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-normal">
                    Under Supreme Court rulings in Perkins Eastman and TRF Limited, unilateral arbitrator appointments by lenders are void under Section 12(5) of the Arbitration Act, halting ex-parte proceedings instantly.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>DRT Section 19 Thresholds &amp; Fair Practices Code</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-normal">
                    Debt Recovery Tribunals accept recovery applications under Section 19 of the RDBFI Act exclusively for claims exceeding ₹20 Lakhs. The RBI Fair Practices Code strictly prohibits recovery agent harassment.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER ESCALATION MATRIX */}
            <section id="three-tier-escalation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Building2 className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  8. 3-Tier Institutional Grievance &amp; Escalation Matrix
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When branch staff refuse compromise requests, borrowers systematically escalate through the statutory grievance framework.
              </p>

              <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-sm">Tier 1: Bank Grievance Redressal Officer (GRO)</h3>
                    <span className="text-[11px] font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-full">7 to 10 Days</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-normal">
                    Submit a written complaint to the bank internal GRO detailing branch inaction or agent harassment, requiring resolution within 7 to 10 days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-sm">Tier 2: Bank Principal Nodal Officer (PNO)</h3>
                    <span className="text-[11px] font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-full">14 to 21 Days</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-normal">
                    Escalate unresolved disputes to the Principal Nodal Officer at zonal headquarters, holding authority to fast-track credit committee hearings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-sm">Tier 3: RBI Integrated Ombudsman Scheme</h3>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">cms.rbi.org.in</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-normal">
                    Lodge a statutory complaint through the RBI Ombudsman portal (cms.rbi.org.in) for compromise non-compliance or persistent collection misconduct.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  9. Chronological Resolution Timeline: From Delinquency to Clean NDC
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A structured loan compromise progresses through five defined operational milestones from initial default to permanent debt discharge.
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200/80 divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4">Timeframe</th>
                      <th className="p-3.5 md:p-4">Regulatory Status</th>
                      <th className="p-3.5 md:p-4">Bank Action</th>
                      <th className="p-3.5 md:p-4">Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Days 1 to 30</td>
                      <td className="p-3.5 md:p-4 text-blue-700 font-medium">SMA-0 Stage</td>
                      <td className="p-3.5 md:p-4">Automated payment reminders</td>
                      <td className="p-3.5 md:p-4">Cash flow review and ledger audit</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Days 31 to 90</td>
                      <td className="p-3.5 md:p-4 text-amber-700 font-medium">SMA-1 / SMA-2</td>
                      <td className="p-3.5 md:p-4">Recall notices and recovery allocation</td>
                      <td className="p-3.5 md:p-4">Hardship dossier compilation</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Day 91+</td>
                      <td className="p-3.5 md:p-4 text-rose-700 font-semibold">NPA Status</td>
                      <td className="p-3.5 md:p-4">Mandatory capital provisioning</td>
                      <td className="p-3.5 md:p-4">Formal OTS submission to Zonal SARB</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Months 4 to 5</td>
                      <td className="p-3.5 md:p-4 text-purple-700 font-medium">Negotiation</td>
                      <td className="p-3.5 md:p-4">Statutory legal notice issuance</td>
                      <td className="p-3.5 md:p-4">Legal replies and committee hearings</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Month 6</td>
                      <td className="p-3.5 md:p-4 text-emerald-700 font-bold">Discharged</td>
                      <td className="p-3.5 md:p-4">Official OTS sanction letter issued</td>
                      <td className="p-3.5 md:p-4">Direct remittance and clean NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <AlertCircle className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  10. Specialized Real-World Scenarios &amp; Strategic Case Guidance
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Applying customized negotiation strategies ensures optimal principal debt waivers across varied borrower distress situations.
              </p>

              <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">Multi-Lender Fintech &amp; NBFC Stacking</h3>
                  <p className="text-slate-600 leading-relaxed font-normal">
                    Borrowers holding multiple digital loans face synchronized default. Coordinated negotiations prioritize lenders approaching quarterly provisioning deadlines to secure uniform 45% to 60% principal waivers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">Corporate Executive Layoffs &amp; Sudden Loss of Income</h3>
                  <p className="text-slate-600 leading-relaxed font-normal">
                    Salaried professionals facing sudden job termination submit severance letters and bank statements proving zero income credits, convincing credit committees to waive compound fees and approve lump-sum closures.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">Sole Proprietorship Working Capital Distress</h3>
                  <p className="text-slate-600 leading-relaxed font-normal">
                    Sole proprietors carry unlimited liability for business credit lines. Negotiating a timely compromise settlement under MSME guidelines extinguishes commercial debt before lenders obtain civil attachment decrees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">Asset Reconstruction Company (ARC) Debt Assignments</h3>
                  <p className="text-slate-600 leading-relaxed font-normal">
                    When banks sell aged NPAs to ARCs under SARFAESI Section 5 at deep discounts, the reconstruction company operates with high flexibility, regularly accepting 50% to 70% debt waivers.
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
                  Frequently Asked Questions: How to Convince Bank for OTS
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-600">
                Authoritative legal and financial answers regarding bank One Time Settlement approvals, credit committee procedures, and borrower protections in India.
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
                  Statutory Citations &amp; Regulatory Authorities
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                CredSettle debt resolution procedures strictly adhere to statutory frameworks including the Reserve Bank of India Framework on Compromise Settlements (June 8, 2023), Banking Regulation Act (1949), CICRA (2005), Section 138 Negotiable Instruments Act (1881), Section 25 PSSA (2007), Section 21 Arbitration Act (1996), and Section 133 Indian Contract Act (1872).
              </p>

              {/* Outbound Badges */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                  Verified Institutional Regulators:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>RBI (rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>Ombudsman (cms.rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>CIBIL (cibil.com)</span>
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
                    <span>Cyber Crime (cybercrime.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Internal Related Badges */}
              <div className="space-y-2 pt-3 border-t border-slate-200/80">
                <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                  Related Debt Resolution Guides:
                </span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/best-lawyer-for-personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Lawyer
                  </Link>
                  <Link href="/business-loan-settlement-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business Loan Settlement
                  </Link>
                  <Link href="/credit-card-settlement-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
                  </Link>
                  <Link href="/credit-card-settlement-discount" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Settlement Discount
                  </Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 25 NACH Notice
                  </Link>
                  <Link href="/section-138-cheque-bounce-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 138 Defense
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Settlement Meaning
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
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Specialized in banking compromise negotiations and SARB representation across Indian banking forums.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <Link
                  href="/author/ashish-jhangra"
                  className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Author Profile</span>
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
                  CONFIDENTIAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Facing Loan Default?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt specialists represent you before bank credit committees and negotiate 40% to 60% principal waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Facing Loan Default? Convince Your Bank for OTS Settlement
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
                  <span><strong>Direct Remittance:</strong> Zero fund pooling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>SARB Representation:</strong> Direct negotiation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Defense:</strong> Experienced panel.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related OTS Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/best-lawyer-for-personal-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Best Lawyer for Personal Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal representation &rarr;</span>
                </Link>

                <Link
                  href="/business-loan-settlement-process"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Business Loan Settlement Process in India
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">MSME compromise guide &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-settlement-process"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Settlement Process in India
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Card debt relief &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
