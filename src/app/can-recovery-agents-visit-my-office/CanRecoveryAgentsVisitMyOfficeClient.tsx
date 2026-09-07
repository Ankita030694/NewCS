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
  Award,
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
  Landmark,
  ShieldAlert,
  FileWarning
} from 'lucide-react';

export default function CanRecoveryAgentsVisitMyOfficeClient() {
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
    { id: 'debt-economics-npa', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'financial-breakdown-math', label: '2. Financial Breakdown & Math' },
    { id: 'resolution-matrix', label: '3. Workplace Defense Matrix' },
    { id: 'cibil-algorithm-math', label: '4. CIBIL Algorithm & Scoring Math' },
    { id: 'visual-infographic-card', label: 'Visual Defense Blueprint' },
    { id: 'six-stage-defense-sop', label: '5. 6-Stage Defense SOP' },
    { id: 'statutory-notice-defense', label: '6. Statutory Notice Defense & Rights' },
    { id: 'three-tier-escalation', label: '7. 3-Tier Grievance & Ombudsman' },
    { id: 'chronological-milestones', label: '8. Chronological Milestones Table' },
    { id: 'specialized-card-scenarios', label: '9. Workplace, HR & ARC Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'statutory-citations', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can bank recovery agents legally visit my workplace or office in India?',
      a: 'Under RBI Master Directions, recovery agents can only visit a workplace if you are genuinely unreachable at your residence. If you have explicitly prohibited workplace visits in writing, agents are legally barred from visiting your office.'
    },
    {
      q: 'What should I do immediately if a recovery agent shows up at my office?',
      a: 'Request the agent\'s official ID card, IIBF DRA certificate, and bank authorization letter. Inform office security, maintain composure, record the interaction, and firmly state that debt matters must be discussed via registered mail.'
    },
    {
      q: 'Are recovery agents permitted to speak with my employer, HR, or colleagues about my debt?',
      a: 'No. Disclosing loan details to employers, HR managers, or coworkers violates RBI Fair Practices Code, privacy rights under Article 21, and constitutes actionable criminal defamation under Section 499 of the Indian Penal Code.'
    },
    {
      q: 'What are the legal calling and visiting hours for recovery agents under RBI guidelines?',
      a: 'RBI regulations strictly limit all recovery activities, including telephone calls and personal visits, to the hours between 8:00 AM and 7:00 PM. Any workplace visit outside this window constitutes an illegal practice.'
    },
    {
      q: 'Can I file a police complaint if a recovery agent creates a scene at my office?',
      a: 'Yes. Creating a public scene, shouting, or intimidating you at your workplace constitutes criminal intimidation under Section 503/506 IPC and public nuisance under Section 268 IPC. You can lodge an immediate police complaint.'
    },
    {
      q: 'What is a Cease and Desist notice against workplace recovery visits?',
      a: 'A Cease and Desist notice is a formal legal communication sent to the bank Principal Nodal Officer revoking consent for office visits and mandating that all debt communication take place exclusively via email or postal address.'
    },
    {
      q: 'How do I escalate recovery agent harassment to the RBI Ombudsman?',
      a: 'If the bank Grievance Redressal Officer fails to stop workplace visits within 30 days of your complaint, submit an escalation online at cms.rbi.org.in under the Reserve Bank - Integrated Ombudsman Scheme, 2021.'
    },
    {
      q: 'Can a bank seize my salary or freeze my account for an unsecured loan default?',
      a: 'Banks cannot arbitrarily seize salary or freeze accounts without a formal garnishee order from a competent civil court or Debt Recovery Tribunal under Section 19 of the Recovery of Debts and Bankruptcy Act.'
    },
    {
      q: 'How does a One-Time Settlement (OTS) permanently stop workplace recovery visits?',
      a: 'An approved OTS legally discharges your defaulted debt upon payment of a negotiated compromise sum (typically 40% to 55% of principal). Once finalized, the bank recalls all collection agencies and issues a No Dues Certificate.'
    },
    {
      q: 'Will settling my loan affect my employment background checks or CIBIL score?',
      a: 'Settling temporarily marks the loan as Settled on your CIBIL report, which affects credit scores but has zero legal bearing on private sector employment background checks, and the status can be upgraded to Closed later.'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs sm:text-sm font-semibold mb-4 text-blue-100 border border-white/15">
            <ShieldCheck className="w-4 h-4 text-sky-300" />
            <span>Statutory Anti-Harassment &amp; Workplace Privacy Framework</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can Bank Recovery Agents Visit Your Office or HR?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Are aggressive recovery agents threatening to show up at your workplace or contact your HR department? Understand your statutory privacy rights under RBI Master Directions, invoke strict legal protections against workplace harassment, and resolve your debt permanently with CredSettle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Workplace Harassment Instantly</span>
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
                  <span>Workplace Privacy Rights</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Master Directions on Recovery Agents, Article 21 Privacy &amp; IPC Sections 503/499.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE CRUX: IMMEDIATE WORKPLACE HARASSMENT &amp; RECOVERY AGENT DEFENSE</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-normal">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Workplace Consent:</strong> Unannounced office visits are barred without prior written consent.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">HR Privacy Shield:</strong> Disclosing debt details to employers or colleagues violates Section 499 IPC.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Mandatory ID:</strong> Agents must present valid bank authorization and IIBF DRA certification.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Strict Timings:</strong> Visits and collection calls are strictly restricted to 8:00 AM to 7:00 PM.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Cease-and-Desist:</strong> Formal statutory notices to bank nodal officers immediately halt workplace visits.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="debt-economics-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Banking Mechanics &amp; NPA Physics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics, NPA Physics &amp; Workplace Recovery Pressure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an unsecured personal loan or credit card defaults past 90 days, the lending institution must classify the asset as a Non-Performing Asset (NPA) under Reserve Bank of India prudential norms. This classification triggers mandatory Tier-1 capital provisioning, which restricts the bank's lending capacity and directly impacts its balance sheet profitability. Because unsecured consumer debts lack physical collateral, mortgages, or hypothecated property, lenders cannot invoke the SARFAESI Act to seize assets or enforce summary recovery.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Faced with mounting regulatory provisioning, banks outsource delinquent portfolios to third-party recovery agencies operating on aggressive commission models ranging from 15% to 30% of collected funds. Agency personnel frequently deploy unauthorized workplace visits and threats of contacting employers as psychological leverage, exploiting the borrower's fear of social embarrassment and job termination. Recognizing that these coercive tactics stem from institutional provisioning pressures allows salaried professionals to assert their statutory rights firmly and steer negotiations toward an equitable One-Time Settlement (OTS).
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Mechanics &amp; Ledger Inflation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Principal vs. Compounding Penal Interest
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Defaulted consumer debt balances escalate rapidly because financial institutions layer exorbitant penal interest rates, late payment fees, and 18% GST surcharges on top of standard loan interest. Over a 180-day default cycle, an initial principal delinquency of ₹5,00,000 often inflates to a demanding ledger balance exceeding ₹7,45,000. Recovery agents frequently exploit these artificially inflated figures during workplace confrontations to pressure borrowers into making distress token payments.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, institutional credit committees operate under distinct financial parameters during formal compromise negotiations. Because the debt has already been provisioned as a bad asset, banks are commercially motivated to recover baseline principal capital rather than uncollected penal fees. CredSettle conducts forensic ledger audits that strip away 100% of accumulated penal charges, unbilled finance fees, and compound penalties. Legitimate distress dossiers typically allow borrowers to settle the underlying principal liability at 40% to 55% of the total ledger demand through a structured One-Time Settlement.
              </p>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-black uppercase tracking-wider text-[#1886ff]">
                    Representative 180-Day Personal Loan NPA Settlement Audit
                  </span>
                  <span className="text-xs font-bold text-slate-500">Benchmark Model</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-slate-500 block">Original Loan Principal</span>
                    <strong className="text-slate-900 text-sm md:text-base font-bold">₹5,00,000</strong>
                  </div>
                  <div className="p-3 bg-red-50 rounded-xl border border-red-100">
                    <span className="text-red-600 block">Penal Fees, Interest &amp; GST</span>
                    <strong className="text-red-700 text-sm md:text-base font-bold">₹2,45,000</strong>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                    <span className="text-blue-700 block">Gross Demand Claim</span>
                    <strong className="text-blue-900 text-sm md:text-base font-bold">₹7,45,000</strong>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                    <span className="text-emerald-700 block">Compromise OTS Target (45%)</span>
                    <strong className="text-emerald-800 text-sm md:text-base font-bold">₹2,25,000 - ₹2,75,000</strong>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix Table */}
            <section id="resolution-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparative Resolution Matrix: Workplace Defense Pathways Analyzed
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Evaluating different dispute resolution pathways clarifies how each mechanism impacts workplace privacy, financial liability, and long-term legal security:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Route</th>
                      <th className="p-3.5 font-bold">Governing Law</th>
                      <th className="p-3.5 font-bold">Workplace Visits</th>
                      <th className="p-3.5 font-bold">Debt Concession</th>
                      <th className="p-3.5 font-bold">Timeline</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Borrower Safeguard</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Compromise OTS</td>
                      <td className="p-3.5">RBI Master Directions</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Permanently Ceased</td>
                      <td className="p-3.5 font-bold text-emerald-700">40%-55% Principal Waiver</td>
                      <td className="p-3.5">30-60 Days</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Cease-and-Desist &amp; NDC</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Loan Restructuring</td>
                      <td className="p-3.5">Bank Internal Policy</td>
                      <td className="p-3.5 text-amber-700 font-semibold">Paused During EMI</td>
                      <td className="p-3.5">Zero Haircut</td>
                      <td className="p-3.5">15-45 Days</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Adjusted monthly installment</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Lok Adalat</td>
                      <td className="p-3.5">NALSA Act 1987</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Halted by Consent</td>
                      <td className="p-3.5 font-bold text-emerald-700">30%-50% Compromise</td>
                      <td className="p-3.5">1 Day Hearing</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Non-appealable decree</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Civil Court Suit</td>
                      <td className="p-3.5">CPC 1908</td>
                      <td className="p-3.5 text-blue-700 font-semibold">Handled by Advocates</td>
                      <td className="p-3.5">Court Discretion</td>
                      <td className="p-3.5">2-5 Years</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Leave to defend rights</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Inaction / Default</td>
                      <td className="p-3.5">Agency Recovery</td>
                      <td className="p-3.5 text-red-700 font-semibold">Severe Harassment</td>
                      <td className="p-3.5 text-red-700">Zero Waiver</td>
                      <td className="p-3.5">Indefinite</td>
                      <td className="p-3.5 text-red-600 font-semibold">High CIBIL &amp; job risk</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Technical CIBIL Algorithm &amp; Bureau Scoring Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                TransUnion CIBIL and peer credit bureaus calculate credit scores ranging from 300 to 900 based on five distinct weighted components: 35% Payment History, 30% Credit Utilization Ratio, 15% Duration of Credit History, 10% Credit Mix, and 10% Recent Inquiries. When an unsecured loan reaches 90 Days Past Due (DPD), the default causes direct mathematical erosion to the 35% payment history component, resulting in an immediate credit score decline of 90 to 150 points.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Upon finalizing a compromise One-Time Settlement, the lending institution updates bureau records with a Settled status code. While a Settled notation concludes active recovery operations and extinguishes legal exposure, it temporarily depresses creditworthiness. Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), borrowers have the legal right to request conversion to Closed by paying agreed differential balances, while rebuilding their credit score back to 750+ within 12 to 24 months through disciplined secured credit facilities.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="visual-infographic-card" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: Anti-Harassment Architecture
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Review this visual blueprint illustrating statutory workplace visiting boundaries, evidence logging protocols, 3-tier grievance escalation pathways, and formal compromise settlement workflows:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/can-recovery-agents-visit-my-office.jpg"
                    alt="Can Recovery Agents Visit Your Office Legal Defense Blueprint"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Architecture • RBI Master Directions &amp; Workplace Privacy</span>
                  <a
                    href="/images/infographics/can-recovery-agents-visit-my-office.jpg"
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

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="six-stage-defense-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP: Workplace Recovery Defense Strategy
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this comprehensive operating procedure to neutralize workplace collection intimidation, enforce your statutory privacy rights, and achieve an unconditional settlement:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 1-3</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    On-Site Identification &amp; Incident Documentation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If an agent approaches your workplace, remain calm and demand their official photo identification, IIBF Debt Recovery Agent (DRA) certificate, and formal bank authorization letter. Record audio or video of the interaction, note down vehicle details, and immediately request office security to escort unauthorized individuals out of the building.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 4-7</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Statutory Cease-and-Desist Notice
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Instruct legal counsel to draft and serve a formal Cease-and-Desist notice upon the bank Grievance Redressal Officer and Principal Nodal Officer. The notice formally revokes consent for workplace visits, documents previous harassment violations under RBI Master Directions, and mandates that all further communication occur exclusively via registered email.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 8-15</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Executive Representation to Special Assets Desk
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Submit a comprehensive representation to the bank credit committee and Principal Nodal Officer. This formal submission details genuine financial distress, includes salary loss or medical proof, and demands the immediate withdrawal of third-party recovery agencies in favor of direct institutional dispute resolution.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 16-30</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Bilateral Compromise Negotiations
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Engage directly with bank recovery managers to negotiate a realistic One-Time Settlement based on audited principal exposure. Counter inflated ledger claims by demonstrating genuine inability to pay full sums, establishing a target settlement figure between 40% and 55% of the outstanding principal balance.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 31-45</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Official Settlement Sanction Vetting
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Thoroughly examine the written One-Time Settlement approval letter issued directly from the bank's official digital domain. Verify that the document specifies the exact compromise amount, structured installment schedule, explicit waiver of balance dues, and an unconditional covenant to issue a No Dues Certificate.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 46-60</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Direct Remittance &amp; NDC Issuance
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Remit the agreed settlement funds directly into your designated loan account using verified banking channels. Within 30 days of final payment, obtain your official No Dues Certificate (NDC), confirm the closure of all recovery agency files, and verify updated bureau reporting.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Defense Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense &amp; Borrower Legal Protections
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When loan accounts default, lending institutions may initiate statutory legal procedures. Developing analytical defenses shields you against coercion and protects your legal standing:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <FileWarning className="w-4 h-4" />
                    <span>Section 25 PSSA (Electronic Mandate Dishonor)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 25 of the Payment and Settlement Systems Act penalizes electronic auto-debit bounces. Defense involves proving that non-payment arose from genuine financial hardship rather than deliberate fraud, establishing prior mandate cancellation requests, and pursuing compromise conciliation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 138 NI Act (Cheque Dishonor Rebuttal)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If security cheques bounce, lenders issue statutory notices under Section 138 of the Negotiable Instruments Act. Legal counsel establishes that the cheque was given purely as security rather than in discharge of an undisputed debt, disputing penal calculations to enable amicable settlement.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>Section 21 Arbitration Act (Unilateral Appointments)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders frequently initiate private arbitration. Landmark Supreme Court rulings in Perkins Eastman Architects and TRF Limited hold that banks cannot unilaterally appoint sole arbitrators, providing absolute statutory grounds under Section 12(5) to invalidate ex-parte proceedings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldAlert className="w-4 h-4" />
                    <span>DRT Section 19 &amp; RBI Fair Practices Code</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Debt Recovery Tribunal jurisdiction applies strictly to claim amounts exceeding ₹20 Lakhs. For consumer debts, RBI Master Directions on Fair Practices Code strictly prohibit intimidation, unannounced workplace visits, and collection calls outside approved business hours.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Escalation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. The 3-Tier Escalation Matrix &amp; Regulatory Grievance Channels
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If collection agents continue to violate workplace boundaries, escalate systematically through this structured 3-tier regulatory grievance hierarchy:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Branch Grievance Redressal Officer (GRO)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 7-10 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Formal Cease-and-Desist Notice &amp; Visitor Log Submission
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Submit a detailed written complaint to the branch GRO documenting workplace visit attempts, visitor log records, and audio evidence, demanding the immediate recall of third-party recovery vendors.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: Bank Principal Nodal Officer (PNO)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 14-21 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Executive Escalation for Fair Practices Violations
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Escalate unresolved workplace grievances to the bank Principal Nodal Officer, citing explicit breaches of RBI Master Directions to trigger internal compliance audits and transfer the file to the Special Assets Desk.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: RBI Integrated Ombudsman (cms.rbi.org.in)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 30 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Statutory Regulatory Adjudication &amp; Sanctions
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Lodge a formal regulatory complaint on cms.rbi.org.in under the Reserve Bank - Integrated Ombudsman Scheme, 2021, seeking regulatory penalties, harassment compensation, and an immediate injunction on unauthorized visits.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Chronological Resolution Milestones (Day 1 to Month 6)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding default milestones enables borrowers to anticipate recovery tactics, enforce workplace boundaries, and negotiate strategically:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Timeline</th>
                      <th className="p-3.5 font-bold">Default Event</th>
                      <th className="p-3.5 font-bold">Asset Status</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Strategic Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Days 1-30</td>
                      <td className="p-3.5">Payment Delay</td>
                      <td className="p-3.5">SMA-0</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Audit statement, verify penal charges, request relief</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Days 31-90</td>
                      <td className="p-3.5">Intense Calling &amp; Threats</td>
                      <td className="p-3.5">SMA-1/2</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Issue Cease-and-Desist notice barring office visits</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Days 91-120</td>
                      <td className="p-3.5">Bad Debt Provisioning</td>
                      <td className="p-3.5 font-bold text-amber-600">NPA</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Escalate to PNO and initiate compromise OTS petition</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Months 4-5</td>
                      <td className="p-3.5">Settlement Window</td>
                      <td className="p-3.5">Special Assets</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Negotiate 40% to 55% settlement with credit committee</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Month 6</td>
                      <td className="p-3.5">Permanent Closure</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">NDC Issued</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Remit funds directly and secure No Dues Certificate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-card-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: Layoffs, Threats &amp; ARC Transfers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Workplace recovery challenges occur in diverse professional settings, each demanding a customized legal defense approach:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Corporate HR Department Intimidation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When rogue recovery agents attempt to meet HR managers or coworkers, corporate security can issue immediate trespass warnings. Salaried borrowers can invoke Section 499 IPC defamation protections, while CredSettle serves formal notices directly to the lender's compliance heads.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Executive Layoffs &amp; Sudden Income Shocks
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Sudden corporate downsizing or salary reductions leave executives unable to service high-value unsecured loans. Presenting formal severance letters and distress financial records compels bank credit committees to grant maximum settlement concessions.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-purple-600" />
                    Proprietorship Commercial Establishments
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When sole proprietors face collection visits at their commercial shops, agents risk disrupting business operations. Legal defense focuses on establishing business insolvency documentation and negotiating OTS terms that preserve enterprise operations.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    ARC Debt Assignments (Phoenix, ARCIL)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When lending banks assign aged unsecured loan portfolios to ARCs at steep commercial haircuts under SARFAESI Section 5, borrowers gain substantial bargaining leverage to negotiate deep-discount compromise settlements.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions on Workplace Recovery Agent Visits
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to review authoritative legal answers verified by our debt resolution professionals:
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
            <section id="statutory-citations" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Judicial References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Master Directions:</strong> Master Direction on Recovery Agents, Fair Practices Code for Lenders, and Grievance Redressal Mechanisms.
                </li>
                <li>
                  <strong>Indian Penal Code (IPC):</strong> Section 503 &amp; Section 506 (Criminal Intimidation), Section 499 &amp; Section 500 (Defamation), and Section 268 (Public Nuisance).
                </li>
                <li>
                  <strong>Constitution of India (Article 21):</strong> Fundamental Right to Privacy and Personal Dignity as affirmed in <em>Justice K.S. Puttaswamy v. Union of India (2017)</em>.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme 2021:</strong> Adjudication of Unfair Recovery Practices and Unauthorized Workplace Harassment.
                </li>
                <li>
                  <strong>CICRA 2005 (Section 21):</strong> Credit Information Dispute Resolution and Bureau Status Updates.
                </li>
                <li>
                  <strong>PSSA 2007 (Section 25) &amp; NI Act 1881 (Section 138):</strong> Statutory Notice Defense Framework for Electronic Mandate and Cheque Dishonor.
                </li>
                <li>
                  <strong>Supreme Court Precedents:</strong> <em>Perkins Eastman (2020)</em> &amp; <em>TRF Ltd (2017)</em> on Unilateral Arbitrator Ineligibility.
                </li>
              </ul>

              {/* 6 Outbound Regulatory Authority Badges */}
              <div className="pt-3">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Outbound Statutory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>rbi.org.in</span>
                    <ExternalLink className="w-3 h-3 text-blue-500" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>cms.rbi.org.in</span>
                    <ExternalLink className="w-3 h-3 text-blue-500" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>cibil.com</span>
                    <ExternalLink className="w-3 h-3 text-blue-500" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>indiacode.nic.in</span>
                    <ExternalLink className="w-3 h-3 text-blue-500" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>nalsa.gov.in</span>
                    <ExternalLink className="w-3 h-3 text-blue-500" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>cybercrime.gov.in</span>
                    <ExternalLink className="w-3 h-3 text-blue-500" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
                  </Link>
                  <Link href="/credit-card-minimum-due-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Minimum Due Trap
                  </Link>
                  <Link href="/credit-card-settlement-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Process
                  </Link>
                  <Link href="/can-i-go-to-jail-for-credit-card-debt" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Jail for Credit Card Debt?
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
                Specialized in banking compliance, debt recovery regulations, and NPA settlements with deep expertise enforcing RBI Fair Practices Code.
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
                  Facing Harassing Recovery Agents?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution experts issue cease-and-desist notices, halt workplace harassment, and negotiate a 40% to 55% settlement.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Stop Workplace Harassment Instantly
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
                  <span><strong>Zero Upfront Risk:</strong> Success-linked settlement fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> Zero middleman fund holding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> 100% lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated debt resolution specialists.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice for Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full step-by-step reply blueprint &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-minimum-due-trap"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Minimum Due Trap
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">48% APR compounding escape plan &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Loan to Closed Status
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
