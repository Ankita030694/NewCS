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
  TrendingUp,
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
  Sparkles,
  Gavel,
  BadgeAlert,
  Landmark,
  ShieldAlert,
  Users,
  Layers,
  HelpCircle
} from 'lucide-react';

export default function NaviLoanDefaultHarassmentClient() {
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
    { id: 'financial-breakdown-math', label: '2. Settlement Target Math' },
    { id: 'comparison-matrix', label: '3. Resolution Matrix' },
    { id: 'cibil-scoring-algorithm', label: '4. CIBIL Score Recovery' },
    { id: 'infographic-overview', label: '5. Visual Blueprint' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Defense SOP' },
    { id: 'statutory-notice-defense', label: '7. Statutory Notice Defense' },
    { id: 'three-tier-escalation', label: '8. 3-Tier Escalation Matrix' },
    { id: 'chronological-timeline', label: '9. Timeline & Milestones' },
    { id: 'specialized-scenarios', label: '10. Specialized Scenarios' },
    { id: 'company-profile', label: '11. About CredSettle' },
    { id: 'frequently-asked-questions', label: '12. Frequently Asked Questions' },
    { id: 'regulatory-citations', label: '13. Regulatory Citations' }
  ];

  const faqs = [
    {
      q: 'Can Navi recovery agents call my contacts or family members?',
      a: 'No. Under RBI Digital Lending Guidelines, lenders like Navi Finserv cannot access phone contacts or call family, friends, and employers for debt collection.'
    },
    {
      q: 'What are the permissible calling hours for Navi recovery agents?',
      a: 'Under the RBI Fair Practices Code, agents can only call or visit between 8:00 AM and 7:00 PM. Calls outside these hours violate RBI regulations.'
    },
    {
      q: 'Can Navi recovery agents visit my home or office without notice?',
      a: 'Agents must give prior written notice before visiting. They must carry official ID and authorization letters, maintaining decorum without uninvited entry.'
    },
    {
      q: 'Is defaulting on a Navi personal loan a criminal offense in India?',
      a: 'No. Unsecured personal loan default is purely a civil contractual dispute. Lenders cannot initiate criminal arrest, file police FIRs, or threaten imprisonment.'
    },
    {
      q: 'What legal action can Navi take for loan default?',
      a: 'Navi can file civil recovery suits, initiate arbitration under Section 21, issue Section 25 PSSA notices for NACH bounce, and report delinquencies to credit bureaus.'
    },
    {
      q: 'How can I file a formal harassment complaint against Navi recovery agents?',
      a: 'Document call logs and submit a complaint to Navi Grievance Redressal Officer. If unresolved within 30 days, escalate to the RBI Integrated Ombudsman at cms.rbi.org.in.'
    },
    {
      q: 'Can I negotiate a One-Time Settlement (OTS) with Navi Finserv?',
      a: 'Yes. Delinquent loans past 90 to 180 days in NPA status can be settled with 40% to 55% waivers on accumulated interest and penalties.'
    },
    {
      q: 'What is the impact of a Navi loan settlement on my CIBIL score?',
      a: 'A settlement reduces your score by 60 to 110 points with a Settled status, stopping active delinquency compounding and allowing structured score rehabilitation.'
    },
    {
      q: 'Can Navi recovery agents seize my personal household assets?',
      a: 'No. Unsecured loans have no asset collateral. Agents cannot seize household items, vehicles, or bank balances without a formal civil court decree.'
    },
    {
      q: 'How does CredSettle protect borrowers from Navi recovery harassment?',
      a: 'CredSettle issues legal cease-and-desist notices, handles creditor communications, enforces RBI Digital Lending Guidelines, and negotiates binding OTS compromise settlements with official No Dues Certificates.'
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
        <div className="max-w-4xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-xs font-bold text-blue-100 mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-blue-200" />
            <span>RBI Digital Lending Guidelines Compliance</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Navi Loan Default Harassment: Stop Recovery Threats &amp; Settle Legally
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Facing aggressive recovery calls, contact scraping, or doorstep visits from Navi Finserv agents? Learn your legal rights under RBI regulations, stop collection abuses, and negotiate an affordable One-Time Settlement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Navi Harassment &amp; Settle Loan Now</span>
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
                  <span>Statutory Legal Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by RBI Digital Lending Guidelines &amp; Fair Practices Code.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-3.5 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: NAVI LOAN DEFAULT DEFENSE &amp; SETTLEMENT</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Civil Protection:</strong> Defaulting on an unsecured Navi loan is purely civil with zero police arrest authority.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Privacy Shield:</strong> RBI rules strictly prohibit accessing contact lists, photos, or messaging relatives and employers.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Visit Regulations:</strong> Field agents must give prior written notice and visit exclusively between 8:00 AM and 7:00 PM.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Anti-Harassment Shield:</strong> Relentless robocalls and workplace humiliation violate the RBI Fair Practices Code.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Statutory Escalation:</strong> Unresolved collection abuses can be escalated to Navi Principal Nodal Officer and RBI Ombudsman.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">40% to 55% OTS Waiver:</strong> Delinquent digital loans in NPA status can be settled with substantial interest reductions.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Notice Defense:</strong> Formal replies to Section 25 PSSA NACH bounce notices prevent ex-parte legal actions.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">CIBIL Rehabilitation:</strong> Securing a No Dues Certificate enables structured credit score recovery under CICRA.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="debt-economics-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Banking Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics &amp; NPA Dynamics of Digital Lending Apps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Navi Finserv operates as a systemically important NBFC utilizing automated algorithmic underwriting to disburse unsecured personal loans across India. Unlike traditional banks evaluating physical collateral, digital fintech lenders rely on algorithmic risk scoring and bank statement analysis. When macroeconomic stress, unexpected job loss, medical emergencies, or business downturns cause missed installments, the loan undergoes statutory asset classification under Reserve Bank of India prudential norms.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During the initial 1 to 30 days of default, the account enters SMA-0 status, advancing through SMA-1 (31 to 60 days) and SMA-2 (61 to 90 days). Upon crossing 90 days of continuous non-payment, the loan is formally classified as a Non-Performing Asset (NPA). Under RBI capital adequacy rules, NBFCs must allocate mandatory Tier-1 capital provisioning against unsecured NPAs, locking balance sheet liquidity. Because unsecured loans have no collateral governed by the SARFAESI Act, lenders cannot seize property. Consequently, institutional credit committees prioritize commercial One-Time Settlements (OTS) to recover principal capital and release provisioning reserves.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Mechanics &amp; Calculations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown &amp; Settlement Target Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an unsecured digital loan defaults, automated billing engines add penal interest rates, late fees, and repeated NACH mandate bounce charges (often ₹500 to ₹1,000 per bounce). Over a 180-day delinquency period, these compounding non-principal charges artificially inflate the ledger balance by 25% to 40% above the genuine principal disbursed.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During commercial OTS negotiations, the primary objective is separating the legally binding principal exposure from arbitrary penal fees. Credit committees hold discretionary authority to waive 100% of penal interest, late payment charges, and administrative fees, while accepting a structured principal haircut based on demonstrated financial hardship. For a representative ₹5,00,000 delinquent Navi loan escalated to ₹6,80,000 with penal interest, an institutional OTS typically closes at ₹2,50,000 to ₹3,20,000 (a 40% to 55% total waiver), payable in a single lump sum or structured two-tranche disbursements.
              </p>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Strategic Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Legal &amp; Financial Resolution Options Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Resolving a delinquent digital personal loan requires evaluating available dispute resolution mechanisms under Indian financial regulations:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3">Resolution Route</th>
                      <th className="p-3">Waiver Scope</th>
                      <th className="p-3">Harassment Status</th>
                      <th className="p-3">Turnaround</th>
                      <th className="p-3">Bureau Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 font-bold text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="p-3 font-bold text-emerald-700">40% to 55% Total Waiver</td>
                      <td className="p-3 text-emerald-700 font-semibold">Immediate Cessation</td>
                      <td className="p-3">30-60 Days</td>
                      <td className="p-3">Settled (Upgradable)</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 font-bold text-slate-900">Loan Restructuring</td>
                      <td className="p-3">Zero Principal Waiver</td>
                      <td className="p-3">Conditional on EMI</td>
                      <td className="p-3">15-30 Days</td>
                      <td className="p-3">Restructured</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 font-bold text-slate-900">Civil Court Litigation</td>
                      <td className="p-3 text-rose-600">Court Discretion</td>
                      <td className="p-3">Protracted Dispute</td>
                      <td className="p-3">2-5 Years</td>
                      <td className="p-3 text-rose-600">Severe DPD Loss</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 font-bold text-slate-900">National Lok Adalat</td>
                      <td className="p-3 text-emerald-700 font-semibold">30% to 50% Compromise</td>
                      <td className="p-3 text-emerald-700 font-semibold">Immediate on Award</td>
                      <td className="p-3">Single Day</td>
                      <td className="p-3">Lok Adalat Settled</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50 bg-rose-50/30">
                      <td className="p-3 font-bold text-rose-900">Default Inaction</td>
                      <td className="p-3 text-rose-700">Zero (Penalties Rise)</td>
                      <td className="p-3 text-rose-700 font-bold">Severe Escalation</td>
                      <td className="p-3">Indefinite</td>
                      <td className="p-3 text-rose-700 font-bold">Sub-550 Score</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-scoring-algorithm" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Technical CIBIL Algorithm &amp; Score Rehabilitation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit Information Bureau (India) Limited (CIBIL) and peer bureaus calculate creditworthiness using a 300 to 900 score model. Five key weighted factors determine score calculation: Payment History (35%), Credit Exposure and Utilization (30%), Credit History Length (15%), Credit Mix (10%), and Recent Credit Inquiries (10%).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Defaulting on a digital loan damages the 35% payment history component, resulting in an 80 to 140 point drop within 90 days. While an OTS brings a temporary 40 to 60 point drop due to Settled reporting, it permanently halts active compounding delinquency marks. Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), borrowers can systematically rebuild their score to 750+ within 18 to 24 months by utilizing secured credit builder cards, maintaining credit utilization below 30%, and eventually converting Settled to Closed status through residual differential clearance.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Resolution Guide</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual 6-Step Defense &amp; Settlement Blueprint
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The visual blueprint below outlines the 6 stages of stopping recovery harassment and executing an authorized settlement with Navi Finserv under Reserve Bank of India regulatory directives:
              </p>
              <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100">
                  <Image
                    src="/images/infographics/navi-loan-default-harassment.jpg"
                    alt="Navi Loan Default Harassment Legal Defense & Settlement Guide"
                    fill
                    priority
                    sizes="(max-width: 1200px) 100vw, 900px"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between px-2 pt-1 text-xs text-slate-500">
                  <span>CredSettle Anti-Harassment &amp; Debt Settlement Framework</span>
                  <a
                    href="/images/infographics/navi-loan-default-harassment.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Full Resolution</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Layers className="w-4 h-4 text-[#1886ff]" />
                <span>Operational Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: 6 Stages from Default to Final Settlement
              </h2>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] text-xs flex items-center justify-center font-black">1</span>
                    <span>Stage 1: Forensic Loan Account Audit</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Conduct an exhaustive analysis of the digital loan sanction letter, repayment schedules, bank debits, and interest computations. Identify discrepancies including interest rates exceeding approved APR caps, unauthorized mandate bounce fees, and uncredited payments.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 text-xs flex items-center justify-center font-black">2</span>
                    <span>Stage 2: Hardship Dossier Compilation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Assemble irrefutable documentary proof establishing genuine financial distress. Key evidence includes termination letters, medical certificates, salary deduction records, business income tax return depreciation, and bank statements demonstrating cash flow insolvency.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-black">3</span>
                    <span>Stage 3: Cease-and-Desist Representation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Issue a formal statutory notice to Navi Finserv and its recovery agencies demanding immediate cessation of unauthorized calls, workplace visits, and contact list harassment pursuant to the RBI Digital Lending Guidelines and Fair Practices Code.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center font-black">4</span>
                    <span>Stage 4: Bilateral Settlement Negotiations</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Engage directly with Navi institutional credit committee and nodal recovery managers. Present the structured hardship dossier to negotiate maximum waivers on penal interest, late payment penalties, and principal balances for an affordable OTS amount.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 text-xs flex items-center justify-center font-black">5</span>
                    <span>Stage 5: Settlement Letter Authentication</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Subject the formal OTS approval letter to rigorous legal scrutiny. Ensure the document explicitly specifies the agreed compromise amount, payment deadlines, waiver terms, and a binding commitment to issue an unconditional No Dues Certificate.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-teal-700 font-bold text-sm">
                    <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 text-xs flex items-center justify-center font-black">6</span>
                    <span>Stage 6: Direct Remittance and Bureau Closure</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Execute the settlement payment directly into the designated Navi Finserv institutional loan account via traceable banking channels. Secure the original No Dues Certificate (NDC) and initiate formal credit bureau updates under CICRA 2005.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Notice Defense &amp; Borrower Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Navi Finserv and digital lending entities utilize specific statutory provisions to recover defaulted unsecured debts. Understanding your substantive legal rights safeguards you against coercive tactics:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Section 25 PSSA (NACH Bounce)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When auto-debit mandates bounce, lenders may issue a 30-day notice alleging quasi-criminal liability. Establishing bona fide financial distress and absence of fraudulent intent provides a solid defense while initiating OTS talks.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Section 138 NI Act (Cheque Bounce)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Applicable when repayment cheques dishonor. A valid statutory defense requires demonstrating that the instrument was issued merely as security rather than towards a crystallized debt, or proving lack of timely statutory notice.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>Section 21 Arbitration Notice</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders frequently invoke arbitration for rapid awards. Under Supreme Court rulings in Perkins Eastman and TRF Ltd., unilateral arbitrator appointments by lenders are legally invalid, granting grounds to challenge jurisdiction under Section 12(5).
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>DRT &amp; Fair Practices Code</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unsecured personal loans below ₹20 Lakhs cannot be brought before the Debt Recovery Tribunal. Furthermore, the RBI Fair Practices Code strictly prohibits physical force, verbal abuse, public humiliation, or doorstep visits outside 8:00 AM to 7:00 PM.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Grievance Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix Against Recovery Abuses
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When facing non-compliant collection tactics or unauthorized contact scraping, borrowers must follow a structured escalation framework:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Level 1</span>
                    <span className="text-xs text-slate-500 font-semibold">7-10 Days</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Grievance Redressal Officer</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lodge a written complaint with Navi designated GRO citing specific call dates and violations. Response turnaround is 7 to 10 working days.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">Level 2</span>
                    <span className="text-xs text-slate-500 font-semibold">14-21 Days</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Principal Nodal Officer</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalate to the Principal Nodal Officer of Navi Finserv with call recordings and evidence. Response turnaround is 14 to 21 days.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Level 3</span>
                    <span className="text-xs text-slate-500 font-semibold">30 Days</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">RBI Integrated Ombudsman</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If unresolved after 30 days, file a statutory complaint on the RBI CMS portal (cms.rbi.org.in) under the Integrated Ombudsman Scheme.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Timeline: From Default to Resolution
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Navi personal loan default follows defined statutory and commercial milestones:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3">Timeline</th>
                      <th className="p-3">Asset Classification</th>
                      <th className="p-3">Lender Action</th>
                      <th className="p-3 text-[#1886ff]">Defense Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 1-30</td>
                      <td className="p-3 font-semibold text-amber-700">SMA-0</td>
                      <td className="p-3">Automated SMS and app alerts.</td>
                      <td className="p-3">Audit statements and track records.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 31-60</td>
                      <td className="p-3 font-semibold text-amber-800">SMA-1</td>
                      <td className="p-3">Tele-calling recovery outreach.</td>
                      <td className="p-3">Enforce RBI calling hour limits.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 61-90</td>
                      <td className="p-3 font-semibold text-orange-700">SMA-2</td>
                      <td className="p-3">Pre-litigation warning notices.</td>
                      <td className="p-3">Compile financial hardship dossier.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91-120</td>
                      <td className="p-3 font-bold text-rose-700">NPA</td>
                      <td className="p-3">Mandatory capital provisioning.</td>
                      <td className="p-3 font-semibold text-[#1886ff]">Initiate formal OTS settlement.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 121-180</td>
                      <td className="p-3">Deep Default</td>
                      <td className="p-3">Section 25 PSSA / Sec 21 notices.</td>
                      <td className="p-3">Finalize 40% to 55% compromise OTS.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50 bg-emerald-50/30">
                      <td className="p-3 font-bold text-emerald-900">Month 6+</td>
                      <td className="p-3 font-bold text-emerald-700">Settled</td>
                      <td className="p-3 text-emerald-800">Account closure and NDC issued.</td>
                      <td className="p-3 font-bold text-emerald-700">Rehabilitate CIBIL score under CICRA.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Case Studies &amp; Problem Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Real-World Default Scenarios
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Default situations differ depending on borrower financial circumstances. Our legal panel resolves complex digital lending challenges across four common scenarios:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <Users className="w-4 h-4" />
                    <span>Multi-App Fintech Debt Stacking</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers with active loans across multiple apps face severe repayment stress. CredSettle implements a consolidated defense strategy, negotiating coordinated OTS waivers across all lenders simultaneously.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Briefcase className="w-4 h-4" />
                    <span>Tech Sector Layoffs &amp; Salary Cuts</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Professionals impacted by corporate layoffs or prolonged unemployment can present formal termination letters and severance proofs to secure deep principal settlement discounts.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>MSME Working Capital Stress</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Business owners utilizing digital personal loans for operational cash flow can leverage audited statements and GST decline filings to substantiate commercial hardship before credit committees.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Layers className="w-4 h-4" />
                    <span>ARC Debt Assignment &amp; Portfolio Sales</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When Navi Finserv transfers delinquent loan portfolios to Asset Reconstruction Companies, our legal team conducts forensic assignment verification under SARFAESI Section 5, negotiating steep portfolio discounts.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <section id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </section>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                12. Frequently Asked Questions: Navi Loan Default &amp; Harassment
              </h2>
              <p className="text-sm text-slate-600">
                Authoritative legal answers regarding Navi loan defaults, recovery rules, and debt settlement in India.
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-slate-200/80 rounded-2xl bg-white shadow-xs overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-slate-900 text-sm sm:text-base hover:text-[#1886ff] transition-colors gap-3"
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
            <section id="regulatory-citations" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Statutory Authorities
              </h2>
              <ul className="space-y-1 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Reserve Bank of India:</strong> Guidelines on Digital Lending (2026) and Master Direction on Fair Practices Code.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Redressal of Unfair Recovery Practices and Charges.
                </li>
                <li>
                  <strong>Ministry of Law and Justice:</strong> Payment and Settlement Systems Act 2007 (Section 25), Negotiable Instruments Act 1881 (Section 138), Arbitration Act 1996 (Section 21).
                </li>
                <li>
                  <strong>Credit Information Companies Act, 2005:</strong> Rights of borrowers regarding credit score dispute redressal under Section 21.
                </li>
                <li>
                  <strong>Supreme Court of India:</strong> <em>Perkins Eastman (2020)</em> and <em>TRF Ltd. (2017)</em> on unilateral arbitrator disqualification.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>rbi.org.in</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>cms.rbi.org.in</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>cibil.com</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>indiacode.nic.in</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>nalsa.gov.in</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>cybercrime.gov.in</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Related Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan Settlement
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Defense
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Legal Notice Reply
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Letter
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Meaning
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
                Specialized in digital lending regulations, RBI compliance enforcement, and NPA settlement negotiations.
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
                  CONFIDENTIAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Facing Navi Recovery Harassment?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal panel halts recovery calls, enforces RBI rules, and negotiates a 40% to 55% settlement.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Stop Harassment &amp; Settle Loan Now
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
                  <span>Direct NBFC Settlement • RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked settlement fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct NBFC Remittance:</strong> Zero middleman fund holding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> Lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Defense:</strong> Dedicated loan specialists.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/services/anti-harassment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Anti-Harassment Legal Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop illegal recovery agents &rarr;</span>
                </Link>

                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Arbitration Notice Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Challenge unilateral arbitrator &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Loan to Closed
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Clean credit report blueprint &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
