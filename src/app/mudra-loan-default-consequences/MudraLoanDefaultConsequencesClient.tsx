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

export default function MudraLoanDefaultConsequencesClient() {
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
    { id: 'debt-economics-npa', label: '1. Debt Economics & Mudra NPA Dynamics' },
    { id: 'financial-breakdown-math', label: '2. Principal vs Penal Interest Breakdown' },
    { id: 'resolution-comparison-matrix', label: '3. Resolution Mechanisms Matrix' },
    { id: 'cibil-commercial-scoring', label: '4. Credit Bureau & Scoring Dynamics' },
    { id: 'infographic-overview', label: '5. Visual 6-Stage Resolution Blueprint' },
    { id: 'step-by-step-settlement-sop', label: '6. 6-Stage Settlement SOP' },
    { id: 'statutory-notice-defense', label: '7. Statutory Notice Defense & Rights' },
    { id: 'three-tier-escalation', label: '8. 3-Tier Grievance Redressal Matrix' },
    { id: 'chronological-timeline', label: '9. Chronological Timelines & Milestones' },
    { id: 'real-world-scenarios', label: '10. Specialized Real-World Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a borrower be arrested for defaulting on a Mudra loan in India?',
      a: 'No. Inability to repay due to genuine business losses is strictly a civil dispute. Police arrest occurs only if deliberate fraud, document forgery, or fraudulent fund siphoning is proven in court.'
    },
    {
      q: 'What is the role of CGFMU credit guarantee in Mudra loan defaults?',
      a: 'The CGFMU scheme reimburses institutional lenders up to 75% of default losses. While covering bank balance sheets, it is not a borrower waiver, meaning banks retain legal rights to recover dues.'
    },
    {
      q: 'Can banks seize residential property for an unsecured Mudra loan default?',
      a: 'Under PMMY rules, all Mudra loans up to ₹10 Lakhs are strictly collateral-free. Lenders cannot initiate property attachment under SARFAESI because no immovable asset was mortgaged at sanction.'
    },
    {
      q: 'How does a Mudra loan default impact credit bureau scores?',
      a: 'Defaults are reported monthly to all four RBI-licensed bureaus. Escalating Days Past Due (DPD) drops scores by 150 to 250 points, restricting borrowing until the debt is officially settled.'
    },
    {
      q: 'Can a defaulted Mudra loan be settled through an official One-Time Settlement?',
      a: 'Yes. Once an account turns NPA, banks can sanction a compromise settlement under board-approved OTS policies, waiving penal charges and significant principal based on documented hardship.'
    },
    {
      q: 'What percentage waiver can a borrower negotiate during a Mudra OTS?',
      a: 'Borrowers presenting documented insolvency typically secure 100% waivers on penal interest and compounding fees, alongside a 35% to 55% principal haircut based on credit committee approvals.'
    },
    {
      q: 'What legal notices do banks issue during Mudra loan defaults?',
      a: 'Lenders issue 60-day loan recall notices, Section 138 NI Act notices for bounced security cheques, Section 25 PSSA notices for failed NACH mandates, and Lok Adalat conciliation notices.'
    },
    {
      q: 'How should a borrower reply to a bank demand notice for a Mudra loan?',
      a: 'A borrower should reply through legal counsel within 15 to 30 days, explaining genuine business distress, contesting penal fee compounding, asserting Fair Practices, and requesting OTS terms.'
    },
    {
      q: 'How long does it take to obtain a No Dues Certificate after Mudra settlement?',
      a: 'Following direct remittance of the compromise amount into the bank loan account, the lender is mandated by RBI directives to issue an unconditional No Dues Certificate within 30 days.'
    },
    {
      q: 'Can a settled Mudra loan record in CIBIL be upgraded to closed status later?',
      a: 'Yes. After completing settlement, borrowers can rebuild their credit profile. If future finances permit, repaying the waived haircut amount allows the bank to update bureau status from Settled to Closed.'
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
            Pradhan Mantri Mudra Yojana (PMMY) Legal &amp; Resolution Guide
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Mudra Loan Default Consequences in India
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Understand the legal realities of defaulting on Pradhan Mantri Mudra Yojana facilities across Shishu, Kishore, and Tarun categories. Discover why genuine business losses are civil disputes, how CGFMU credit guarantee protection operates, and how micro-borrowers negotiate structured One-Time Settlements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Facing Mudra Loan Default? Get Legal Defense</span>
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
                  <span>Micro-Enterprise Rights</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by PMMY Directives, RBI Fair Practices Code, and Indian Contract Act 1872.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= CENTER COLUMN: EDITORIAL CONTENT ================= */}
          <div className="space-y-10 min-w-0">

            {/* EXECUTIVE SUMMARY BOX (#F4F8FE with border-l-[5px] border-l-[#1886ff]) */}
            <section
              id="quick-crux"
              className="scroll-target rounded-2xl p-6 md:p-7 border border-blue-100 shadow-xs space-y-3.5"
              style={{ backgroundColor: '#F4F8FE', borderLeft: '5px solid #1886ff' }}
            >
              <div className="flex items-center gap-2.5 text-[#1886ff]">
                <Briefcase className="w-5 h-5 flex-shrink-0" />
                <h2 className="text-lg md:text-xl font-extrabold text-slate-900">
                  Executive Summary: The Reality of Mudra Loan Default
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                When micro-enterprises encounter acute revenue losses or economic disruptions, servicing Pradhan Mantri Mudra Yojana facilities becomes impossible. Defaulting on a Mudra loan due to genuine business insolvency is strictly a civil matter under Indian jurisprudence, entirely dispelling coercive rumors of police arrest or jail.
              </p>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                Under PMMY guidelines, all Mudra facilities across Shishu, Kishore, and Tarun brackets are collateral-free. Lenders cannot seize residential properties under the SARFAESI Act, while the Credit Guarantee Fund for Micro Units (CGFMU) covers up to 75% of default risk for eligible institutional lenders.
              </p>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                Once continuous non-repayment crosses 90 days, mandatory RBI capital provisioning incentivizes banks to sanction One-Time Settlements (OTS). Documenting commercial hardship enables borrowers to negotiate 100% waivers on penal fees and 35% to 55% principal haircuts, culminating in an unconditional No Dues Certificate.
              </p>
            </section>

            {/* SECTION 1: DEBT ECONOMICS & NPA DYNAMICS */}
            <section id="debt-economics-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Landmark className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  1. Debt Economics &amp; Mudra Loan NPA Classification Dynamics
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Pradhan Mantri Mudra Yojana was created to supply formal institutional credit to micro-enterprises without demanding physical collateral. However, small businesses operate with thin operating margins. When market volatility, rising raw material expenses, or client defaults hit cash flows, regular repayment schedules rapidly break down.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Reserve Bank of India prudential frameworks, delinquent accounts transition across Special Mention Account stages: SMA-0 (1-30 days overdue), SMA-1 (31-60 days overdue), and SMA-2 (61-90 days overdue). On Day 91, the account is automatically classified as a Non-Performing Asset (NPA), obligating the lender to lock Tier-1 capital reserves under statutory provisioning mandates.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                While the Credit Guarantee Fund for Micro Units (CGFMU) cushions institutional lenders against severe losses, banks face significant legal expenses and multi-year delays if pursuing civil court suits. Consequently, bank credit committees are economically motivated to approve commercial One-Time Settlements that recover funds quickly and eliminate non-performing assets from their balance sheets.
              </p>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="financial-breakdown-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Percent className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  2. Principal vs Penal Interest Inflation &amp; OTS Compromise Math
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Upon default, automated core banking platforms rapidly inflate outstanding balances by compounding penal interest rates reaching 24% to 36% annually, mandate bounce fees, and recovery charges. Over 180 days, these levies inflate gross demands by 35% to 60% above the initial loan disbursement.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI Fair Practices Code, lenders are barred from capitalizing penal interest into principal balances. Conducting a forensic audit of the loan ledger isolates these unapplied levies, establishing a transparent baseline for aggressive OTS negotiations.
              </p>
              
              {/* Financial Calculation Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <BadgePercent className="w-5 h-5 text-[#1886ff]" />
                  Representative 180-Day NPA Mudra Tarun Settlement (₹8,00,000 Facility)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider text-rose-600">Bank Claim (Pre-OTS Demand)</span>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Core Principal:</span>
                      <span className="font-semibold text-slate-900">₹8,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Overdue Interest:</span>
                      <span className="font-semibold text-slate-900">₹1,80,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Penal Levies &amp; Charges:</span>
                      <span className="font-semibold text-rose-600">₹95,000</span>
                    </div>
                    <div className="flex justify-between pt-1 font-bold text-slate-900 text-sm">
                      <span>Total Demand:</span>
                      <span className="text-rose-700">₹10,75,000</span>
                    </div>
                  </div>

                  <div className="bg-blue-50/60 p-4 rounded-xl space-y-2 border border-blue-100">
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider text-[#1886ff]">Negotiated Compromise Settlement</span>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Penal Fees Waived:</span>
                      <span className="font-semibold text-emerald-600">100% (-₹95,000)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Overdue Interest Waived:</span>
                      <span className="font-semibold text-emerald-600">100% (-₹1,80,000)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Principal Haircut (45%):</span>
                      <span className="font-semibold text-emerald-600">-₹3,60,000</span>
                    </div>
                    <div className="flex justify-between pt-1 font-bold text-slate-900 text-sm">
                      <span>Final Agreed Payout:</span>
                      <span className="text-emerald-700 font-extrabold">₹4,40,000 (59% Savings)</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Demonstrating genuine commercial distress proves to credit committees that a ₹4.40 Lakh upfront recovery yields far superior value than holding uncollectible bad debt.
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="resolution-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Scale className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  3. Mudra Loan Resolution Mechanisms: Comparative Strategic Matrix
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Distressed micro-borrowers must evaluate all available resolution pathways to select the strategy that ensures permanent liability discharge without jeopardizing business survival.
              </p>

              {/* 4-Sided Bordered Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200/80 divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4">Resolution Pathway</th>
                      <th className="p-3.5 md:p-4">Debt Haircut Scope</th>
                      <th className="p-3.5 md:p-4">Closure Timeline</th>
                      <th className="p-3.5 md:p-4">Collateral &amp; Legal Risk</th>
                      <th className="p-3.5 md:p-4">Credit Score Trajectory</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="p-3.5 md:p-4 text-emerald-600 font-semibold">35% to 55% Principal + 100% Fees</td>
                      <td className="p-3.5 md:p-4">30 to 90 Days</td>
                      <td className="p-3.5 md:p-4 text-emerald-700 font-medium">Zero asset risk; full closure via NDC</td>
                      <td className="p-3.5 md:p-4">Settled tag, repairable in 12-24m</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Loan Restructuring</td>
                      <td className="p-3.5 md:p-4 text-amber-600 font-medium">0% Haircut (Tenure extension)</td>
                      <td className="p-3.5 md:p-4">45 to 90 Days</td>
                      <td className="p-3.5 md:p-4 text-amber-700">Debt active; interest burden grows</td>
                      <td className="p-3.5 md:p-4">Restructured status in bureau</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Civil Court Litigation</td>
                      <td className="p-3.5 md:p-4 text-slate-600">Unpredictable decree</td>
                      <td className="p-3.5 md:p-4 text-rose-600 font-medium">3 to 6 Years</td>
                      <td className="p-3.5 md:p-4 text-rose-700">High legal fees &amp; court summons</td>
                      <td className="p-3.5 md:p-4">Written Off / Suit Filed tag</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Lok Adalat Settlement</td>
                      <td className="p-3.5 md:p-4 text-emerald-600 font-medium">15% to 35% Interest Waivers</td>
                      <td className="p-3.5 md:p-4">Single Session</td>
                      <td className="p-3.5 md:p-4">Binding consent award under NALSA</td>
                      <td className="p-3.5 md:p-4">Settled through Lok Adalat</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Inaction &amp; Avoidance</td>
                      <td className="p-3.5 md:p-4 text-rose-600 font-semibold">0% (Debt compounds)</td>
                      <td className="p-3.5 md:p-4">Indefinite</td>
                      <td className="p-3.5 md:p-4 text-rose-700 font-medium">Coercive calls &amp; notice escalation</td>
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
                  4. Technical Credit Bureau Dynamics &amp; CIBIL Score Recovery
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Delinquencies across Mudra facilities are reported monthly to TransUnion CIBIL, Equifax, Experian, and CRIF High Mark. Credit bureau algorithms calculate scores on a 300-900 range based on five factors: Payment History (35%), Credit Exposure (30%), Credit History Length (15%), Credit Mix (10%), and Inquiries (10%).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Escalating Days Past Due (DPD) pushes individual scores down by 150 to 250 points, flagging the record as Default or Written-Off. Negotiating an OTS updates the status to Settled, which terminates negative DPD escalation and halts progressive credit degradation.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 21 of the Credit Information Companies (Regulation) Act (CICRA) 2005, borrowers have the statutory right to verify accurate reporting and zero balance updates. By managing secured credit cards and avoiding fresh unhedged liabilities, credit scores can be rebuilt past 750 within 12 to 24 months.
              </p>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <FileCheck className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  5. Visual Blueprint: 6-Stage Mudra Loan Resolution Architecture
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive visual roadmap illustrates the entire Pradhan Mantri Mudra Yojana resolution lifecycle, mapping the progression from initial loan default to final compromise closure.
              </p>
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-4 md:p-6 space-y-3">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                  <Image
                    src="/images/infographics/mudra-loan-default-consequences.jpg"
                    alt="Mudra Loan Default Consequences and 6-Stage Resolution Architecture"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 1200px) 100vw, 900px"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-slate-600">
                  <span>Official CredSettle Framework: PMMY Debt Compromise &amp; Borrower Protection Architecture</span>
                  <a
                    href="/images/infographics/mudra-loan-default-consequences.jpg"
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
            <section id="step-by-step-settlement-sop" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Layers className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  6. Step-by-Step SOP: 6 Stages of Mudra Loan Settlement
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Resolving a defaulted Mudra loan requires a disciplined, evidence-based Standard Operating Procedure to prevent harassment and achieve a lawful debt compromise.
              </p>

              <div className="space-y-3.5 text-sm md:text-base text-slate-700 leading-relaxed">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">1</span>
                    Stage 1: Forensic Ledger Audit &amp; Sanction Terms Review
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Legal counsel reviews sanction terms and audits the loan ledger to isolate unapplied penal fees, compounding levies, and processing charges that breach Reserve Bank of India lending circulars.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">2</span>
                    Stage 2: Financial Hardship Dossier Compilation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The borrower compiles verifiable financial records showing legitimate commercial insolvency, including deficit bank statements, declining GST filings, client default records, and operational expense logs.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">3</span>
                    Stage 3: Statutory Legal Notice Defense
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Upon receiving bank recall notices, Section 138 NI Act notices, or Section 25 PSSA summons, counsel issues structured replies within 15 to 30 days to establish commercial dispute and prevent criminal proceedings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">4</span>
                    Stage 4: Credit Committee Bilateral Representation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    A formal OTS proposal is presented directly to the bank Stressed Assets Committee, demonstrating that accepting an upfront 40% to 55% settlement delivers higher net recovery than protracted civil litigation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">5</span>
                    Stage 5: Settlement Sanction Letter Legal Vetting
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Attorneys scrutinize the bank formal OTS sanction letter to verify that the compromise figure is final, payment timelines are viable, penal levies are extinguished, and security documents are returned.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-bold text-xs flex items-center justify-center">6</span>
                    Stage 6: Direct Bank Remittance &amp; No Dues Certificate
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The agreed compromise sum is remitted directly into the bank loan account via RTGS. The borrower collects an unconditional No Dues Certificate and tracks credit bureau updates to ensure trade line closure.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & LEGAL RIGHTS */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Gavel className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  7. Statutory Notice Defense &amp; Borrower Protections Under Indian Law
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During Mudra defaults, banks utilize specific statutory instruments. Understanding procedural defenses protects micro-borrowers from unlawful harassment and coercive recovery tactics.
              </p>

              <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <ShieldAlert className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Section 25 Payment &amp; Settlement Systems Act (PSSA) Defense</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    When NACH mandates bounce, legal replies prove dishonour stemmed from business insolvency rather than fraud, demonstrating readiness to settle under fair terms.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <FileText className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Section 138 Negotiable Instruments Act Cheque Defense</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Under Supreme Court rulings, undated security cheques cannot be treated as cheques for crystallized liquidated debts when loan balances are disputed.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <Scale className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Section 21 Arbitration Act &amp; Unilateral Appointment Bans</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Under the Perkins Eastman ruling, unilateral arbitrator appointments by lenders violate Section 12(5), preventing lenders from securing biased awards.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>DRT Jurisdiction Thresholds &amp; RBI Fair Practices Code</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    DRT jurisdiction begins strictly above ₹20 Lakhs, placing all Mudra loans outside its purview, while the RBI Fair Practices Code prohibits harassment.
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
                When recovery branches engage in harassment or stall compromise talks, borrowers can escalate through the Reserve Bank of India statutory hierarchy.
              </p>

              <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-sm">Tier 1: Bank Grievance Redressal Officer (GRO)</h3>
                    <span className="text-[11px] font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-full">7-10 Days</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Submit a formal complaint regarding abusive agent tactics or unfair fee compounding to the bank GRO, mandated for review within 7 to 10 days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-sm">Tier 2: Bank Principal Nodal Officer (PNO)</h3>
                    <span className="text-[11px] font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-full">14-21 Days</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Escalate unresolved grievances to the Principal Nodal Officer at zonal headquarters, who holds executive authority over regional credit committees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-sm">Tier 3: RBI Integrated Ombudsman Scheme</h3>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">cms.rbi.org.in</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    File a statutory complaint on cms.rbi.org.in for Fair Practices Code violations or unjustified denial of OTS compromise under board guidelines.
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
                A structured Mudra loan settlement progresses through distinct operational milestones from initial default to complete debt discharge.
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200/80 divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4">Timeframe</th>
                      <th className="p-3.5 md:p-4">Account Status</th>
                      <th className="p-3.5 md:p-4">Banking &amp; Recovery Action</th>
                      <th className="p-3.5 md:p-4">Strategic Counter-Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Days 1-30</td>
                      <td className="p-3.5 md:p-4 text-blue-700 font-medium">SMA-0</td>
                      <td className="p-3.5 md:p-4">Automated SMS, emails, and calls</td>
                      <td className="p-3.5 md:p-4">Cash flow assessment &amp; ledger audit</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Days 31-90</td>
                      <td className="p-3.5 md:p-4 text-amber-700 font-medium">SMA-1/2</td>
                      <td className="p-3.5 md:p-4">Recall notices and field visits</td>
                      <td className="p-3.5 md:p-4">Compile dossier &amp; assert Fair Practices</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Day 91+</td>
                      <td className="p-3.5 md:p-4 text-rose-700 font-semibold">NPA</td>
                      <td className="p-3.5 md:p-4">Mandatory 15%-100% provisioning</td>
                      <td className="p-3.5 md:p-4">Submit formal OTS to Stressed Desk</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Month 4-5</td>
                      <td className="p-3.5 md:p-4 text-purple-700 font-medium">Negotiation</td>
                      <td className="p-3.5 md:p-4">Section 138 / 25 legal notices</td>
                      <td className="p-3.5 md:p-4">File legal replies &amp; negotiate terms</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Month 6</td>
                      <td className="p-3.5 md:p-4 text-emerald-700 font-bold">Settled</td>
                      <td className="p-3.5 md:p-4">Issue official OTS sanction letter</td>
                      <td className="p-3.5 md:p-4">Direct bank remittance &amp; NDC collection</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="real-world-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <AlertCircle className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  10. Specialized Real-World Scenarios in Mudra Loan Defaults
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Micro-enterprise debt resolution varies across commercial operations. Understanding these real-world scenarios enables tailored settlement strategies.
              </p>

              <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">Multi-Lender Mudra &amp; Fintech Stacking</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Resolving stacked credit lines requires synchronized negotiations, prioritizing public banks with strict quarter-end provisioning targets for maximum waivers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">Enterprise Closure &amp; Revenue Collapse</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Submitting GST surrender filings and commercial lease termination proofs establishes total insolvency, persuading committees to approve minimum OTS baselines.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">Sole Proprietorship Asset Protection</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Securing an expedited OTS eliminates commercial debt cleanly, preventing lenders from filing civil recovery suits against personal household assets.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">CGFMU Claims &amp; ARC Loan Transfers</h3>
                  <p className="text-slate-600 leading-relaxed">
                    When debts transfer to Asset Reconstruction Companies at deep discounts, ARCs operate with flexibility, accepting 50% to 70% waivers for lump-sum closure.
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
                  Frequently Asked Questions: Mudra Loan Default
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-600">
                Authoritative answers to critical legal and financial questions regarding Pradhan Mantri Mudra Yojana defaults, CGFMU guarantees, and compromise settlements.
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
                CredSettle resolution procedures strictly adhere to statutory frameworks including the Pradhan Mantri Mudra Yojana (PMMY) Operational Guidelines, CGFMU Guarantee Scheme Rules, RBI Prudential Framework for Resolution of Stressed Assets (2019), Section 138 Negotiable Instruments Act (1881), Section 25 Payment and Settlement Systems Act (2007), Section 21 Arbitration and Conciliation Act (1996), and Section 21 Credit Information Companies (Regulation) Act (2005).
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
                  <Link href="/business-loan-settlement-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business Loan Settlement
                  </Link>
                  <Link href="/msme-loan-default-legal-action" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    MSME Loan Legal Action
                  </Link>
                  <Link href="/bank-recovery-agent-harassment-rules-in-hindi" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Harassment Rules
                  </Link>
                  <Link href="/can-recovery-agents-seize-property" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can Agents Seize Property
                  </Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    NACH Bounce Section 25
                  </Link>
                  <Link href="/section-138-cheque-bounce-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 138 Cheque Bounce
                  </Link>
                  <Link href="/lok-adalat-personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Lok Adalat Settlement
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
                Specialized in micro-enterprise debt resolution and PMMY compliance across Indian banking forums.
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
                  100% CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Facing Mudra Loan Default?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our specialists represent you before bank credit committees, stop harassment, and negotiate 35% to 55% haircuts.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Facing Mudra Loan Default? Get Legal Defense
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
                  <span>Direct Bank Remittance • RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked advisory fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> Zero third-party fund pooling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-Harassment Defense:</strong> Strict RBI Fair Practices Code.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Experienced legal professionals.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Resolution Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/business-loan-settlement-process"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Business Loan Settlement Process in India
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">MSME debt guide &rarr;</span>
                </Link>

                <Link
                  href="/msme-loan-default-legal-action"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    MSME Loan Default Legal Action in India
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
                  <span className="text-[10px] text-slate-400 mt-1 block">Credit repair &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
