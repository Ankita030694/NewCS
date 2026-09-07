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
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  Sparkles,
  Gavel,
  BadgeAlert,
  Landmark,
  CreditCard,
  ShieldAlert
} from 'lucide-react';

export default function CanBankContactMyEmployerForLoanRecoveryClient() {
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
    { id: 'workplace-recovery-rules', label: '1. Debt Economics & NPA Rules' },
    { id: 'financial-breakdown-penal-charges', label: '2. Penal Charges vs Principal' },
    { id: 'debt-resolution-comparison-matrix', label: '3. Debt Resolution Matrix' },
    { id: 'cibil-scoring-dpd-impact', label: '4. CIBIL Scoring & DPD Tracking' },
    { id: 'visual-defense-blueprint', label: 'Visual Anti-Harassment Blueprint' },
    { id: 'step-by-step-defense-sop', label: '5. 6-Stage Defense SOP' },
    { id: 'statutory-notice-defense', label: '6. Statutory Notice Defense' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline-milestones', label: '8. Procedural Milestones' },
    { id: 'specialized-harassment-scenarios', label: '9. Special Scenarios & HR Calls' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank or recovery agent legally contact my employer or HR about my personal loan default?',
      a: 'No. Under the RBI Fair Practices Code and Master Directions, lenders and recovery agents are strictly prohibited from contacting your employer, HR, or colleagues regarding individual debts.'
    },
    {
      q: 'Can recovery agents physically visit my office or workplace?',
      a: 'No. RBI directives prohibit workplace recovery visits unless explicitly requested by the borrower in writing. Agents cannot create public scenes or disclose debt details to co-workers.'
    },
    {
      q: 'Can my employer terminate my employment if recovery agents call HR?',
      a: 'No. Loan default is a civil dispute, not workplace misconduct. An employer cannot lawfully terminate your contract due to unauthorized calls from third-party recovery agencies.'
    },
    {
      q: 'What legal action can I take if recovery agents harass my company HR?',
      a: 'You can issue a formal cease-and-desist notice to the bank Principal Nodal Officer, file an RBI Ombudsman complaint on cms.rbi.org.in, and lodge a police FIR under BNS Sections 308 and 351.'
    },
    {
      q: 'Can a bank deduct loan EMIs directly from my salary account without my consent?',
      a: 'If your salary account is in a different bank, no auto-deduction is legal without an active NACH mandate. If held in the lending bank, they cannot seize entire livelihood funds without notice.'
    },
    {
      q: 'Why do recovery agents target workplace HR instead of calling the borrower?',
      a: 'Rogue collection agencies weaponize professional embarrassment and fear of job loss to force immediate repayment, despite this practice being illegal under RBI regulations.'
    },
    {
      q: 'Can a bank obtain a court order to attach my salary for loan recovery?',
      a: 'Only through a formal civil court decree. Even then, Section 60 of the Code of Civil Procedure (CPC) strictly exempts basic living wages from attachment.'
    },
    {
      q: 'What should I tell my HR department if recovery agents call them?',
      a: 'Inform HR in writing that third-party callers are violating RBI Master Directions. Request them to block the numbers and record incident details for legal escalation.'
    },
    {
      q: 'How does a One-Time Settlement (OTS) stop workplace harassment?',
      a: 'An OTS formally resolves the debt with a 40% to 70% waiver. The bank recalls all third-party collection agencies and issues an official No Dues Certificate.'
    },
    {
      q: 'How does CredSettle help salaried professionals facing workplace recovery harassment?',
      a: 'CredSettle serves immediate statutory cease-and-desist notices to lenders, escalates privacy violations to the RBI Ombudsman, and negotiates affordable compromise settlements.'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>RBI Fair Practices &amp; Workplace Privacy Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can Recovery Agents Legally Contact Your Employer or HR?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Are recovery agents calling your workplace reception or sending aggressive emails to HR? Learn your statutory privacy rights under RBI guidelines and block office harassment legally with CredSettle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Agents Calling Your Boss</span>
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
                  Governed by the RBI Master Directions &amp; Constitution of India Article 21.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Summary Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 shadow-xs space-y-3.5 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: WORKPLACE RECOVERY &amp; PRIVACY PROTECTIONS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Calling Employers is Strictly Illegal:</strong> RBI Fair Practices Code explicitly prohibits banks and recovery agents from contacting your workplace, HR, or colleagues.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Constitutional Right to Privacy:</strong> Supreme Court precedent under Article 21 guarantees that disclosing your private debt to employers is an unlawful privacy breach.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Zero Employer Liability:</strong> Unsecured loans are individual contracts; your employer has zero legal obligation to deduct salary or repay your debt.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Criminal Penalties for Harassment:</strong> Threatening your job or creating scenes at office premises triggers prosecution under BNS Sections 308, 351, and 352.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Permanent OTS Resolution:</strong> A formal One-Time Settlement delivers a 40% to 70% waiver and permanently cancels collection agency mandates.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Rules */}
            <section id="workplace-recovery-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Debt Economics &amp; Banking Privacy Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics: Workplace Recovery &amp; Bank NPA Rules
              </h2>
              
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When unexpected financial hardships strike, such as sudden layoffs or medical emergencies, salaried professionals often struggle to service unsecured personal loans and credit cards. When defaults cross 90 days, accounts progress from SMA classifications to Non-Performing Asset (NPA) status, requiring banks to provision 15% to 100% against Tier-1 capital.
              </p>
              
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Because unsecured debts lack mortgage collateral, lenders cannot invoke the SARFAESI Act, 2002. Instead, banks outsource delinquent portfolios to third-party collection agencies. Knowing corporate employees fear workplace embarrassment, rogue agents frequently attempt to contact HR departments as psychological leverage.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian law strictly prohibits this conduct. A loan agreement is a private bilateral contract under the Indian Contract Act, 1872. Disclosing debt details to an employer violates banking secrecy under Section 45NB of the RBI Act and breaches the constitutional right to privacy established in <em>Puttaswamy v. Union of India</em> under Article 21.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-penal-charges" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis &amp; Settlement Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Predatory Penalties vs Principal
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a loan defaults, banks add compounding penal interest (24% to 36% p.a.), recurring NACH bounce charges, and collection overheads, inflating the claimed amount far beyond authentic principal dues. Once an account reaches NPA status, banks are commercially motivated to accept an OTS that recovers principal capital while waiving accumulated penal accruals.
              </p>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    Representative 180-Day NPA Salaried Personal Loan Settlement
                  </h3>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                    Target 40% to 55% Principal Settlement
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="font-bold text-slate-800 pb-1 border-b border-slate-200">
                      Bank Claimed Ledger Breakdown
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Disbursed Principal:</span>
                      <span className="font-semibold text-slate-900">₹6,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Contractual Interest (16% p.a.):</span>
                      <span className="font-semibold text-slate-900">₹1,12,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Compounded Penal Interest (24% p.a.):</span>
                      <span className="font-semibold text-red-600">₹1,45,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Late Fees &amp; Bounce Charges:</span>
                      <span className="font-semibold text-red-600">₹42,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Agency &amp; Legal Costs:</span>
                      <span className="font-semibold text-red-600">₹46,000</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900 border-t border-slate-200">
                      <span>Total Demand Notice Claim:</span>
                      <span className="text-red-700">₹9,45,000</span>
                    </div>
                  </div>

                  <div className="space-y-2 bg-blue-50/60 p-4 rounded-xl border border-blue-100">
                    <div className="font-bold text-[#1886ff] pb-1 border-b border-blue-200">
                      CredSettle Forensic Compromise Settlement
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Audited Principal:</span>
                      <span className="font-semibold text-slate-900">₹6,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Penal Surcharges Waived (100%):</span>
                      <span className="font-semibold text-emerald-700">-₹1,45,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Late &amp; Bounce Fees Waived:</span>
                      <span className="font-semibold text-emerald-700">-₹42,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Agency Fees Waived:</span>
                      <span className="font-semibold text-emerald-700">-₹46,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Negotiated Principal Haircut (40%):</span>
                      <span className="font-semibold text-emerald-700">-₹2,40,000</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900 border-t border-blue-200">
                      <span>Agreed OTS Remittance:</span>
                      <span className="text-emerald-700">₹3,60,000 (62% Total Relief)</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  By stripping away non-statutory charges and proving genuine hardship, borrowers can settle delinquent accounts at a fraction of the claimed liability while securing an official No Dues Certificate.
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="debt-resolution-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Resolution Pathways</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Debt Resolution Matrix: Legal Relief Pathways
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Compare available legal and financial remedies when facing debt recovery pressure at your workplace:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Resolution Route</th>
                      <th className="p-3.5 font-bold">Employer Harassment Relief</th>
                      <th className="p-3.5 font-bold">Financial Waiver Range</th>
                      <th className="p-3.5 font-bold">Legal Protection Level</th>
                      <th className="p-3.5 font-bold">Resolution Speed</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Strategic Verdict</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Immediate &amp; Permanent</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">40% to 70% Total Waiver</td>
                      <td className="p-3.5">Complete civil immunity with NDC</td>
                      <td className="p-3.5">30 to 60 Days</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Optimal for severe financial hardship</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Loan Restructuring / Moratorium</td>
                      <td className="p-3.5 text-slate-700">Temporary while active</td>
                      <td className="p-3.5 text-red-600 font-semibold">Zero Waiver (Interest Increases)</td>
                      <td className="p-3.5">Conditional on regular EMI flow</td>
                      <td className="p-3.5">45 to 90 Days</td>
                      <td className="p-3.5 text-slate-700">Viable only if regular income resumes</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Statutory Cease-and-Desist Notice</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Stops office calls immediately</td>
                      <td className="p-3.5 text-slate-500">Non-financial (stops harassment)</td>
                      <td className="p-3.5">High injunctive protection</td>
                      <td className="p-3.5">3 to 7 Days</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Crucial immediate shield for workplace peace</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">National Lok Adalat Conciliation</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Stops all recovery action</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">30% to 50% Compromise</td>
                      <td className="p-3.5">Binding decree under Sec 21 LSA</td>
                      <td className="p-3.5">Single-day hearing</td>
                      <td className="p-3.5 text-slate-700">Effective for institutional bank claims</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Passive Inaction</td>
                      <td className="p-3.5 text-red-600 font-semibold">Harassment Escalates to HR</td>
                      <td className="p-3.5 text-red-600 font-semibold">Zero (Debt Balloons)</td>
                      <td className="p-3.5 text-red-600 font-semibold">High risk of ex-parte decrees</td>
                      <td className="p-3.5 text-red-600">Unresolved</td>
                      <td className="p-3.5 text-red-600 font-semibold">Worst approach causing severe damage</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-scoring-dpd-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Scoring &amp; Technical Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Scoring Impact: DPD Tracking &amp; Credit Repair
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit scoring algorithms calculate your three-digit CIBIL score based on payment history (35%), credit utilization (30%), credit history length (15%), credit mix (10%), and inquiries (10%). Crossing 90 Days Past Due (DPD) drops your score by 90 to 160 points.
              </p>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#1886ff]" />
                  Section 21 CICRA Remedy &amp; Post-Settlement Credit Rebuilding
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), lenders must update bureau records within 30 days of settlement to reflect zero outstanding balance. Borrowers can restore their credit score to 750+ within 12 to 18 months using fixed-deposit-backed secured credit cards with utilization below 25%.
                </p>
              </div>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="visual-defense-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Anti-Harassment Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: 6-Stage Anti-Harassment Plan
              </h2>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/can-bank-contact-my-employer-for-loan-recovery.jpg"
                    alt="Can Bank Contact Your Employer for Loan Recovery Legal Defense Blueprint"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Consumer Protection Framework • RBI Fair Practices Code &amp; IT Act</span>
                  <a
                    href="/images/infographics/can-bank-contact-my-employer-for-loan-recovery.jpg"
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
            <section id="step-by-step-defense-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP: Stopping Employer Recovery Calls
              </h2>

              <div className="space-y-3.5 pt-1">
                {/* Stage 1 */}
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01: Evidence Logging &amp; Ledger Audit
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 1–3</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Document Workplace Calls &amp; Scrutinize Statement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Log all unauthorized calls and emails to HR or office desks. Request an audited statement from the bank to separate genuine principal from excessive penal interest and bounce charges.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02: Hardship Dossier Compilation
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 4–7</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Compile Involuntary Financial Hardship Proof
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Gather verified documents such as layoff letters, salary reduction slips, or medical summaries to substantiate bona fide financial distress for bank settlement approval.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03: Cease-and-Desist Legal Notice
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 8–15</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Serve Formal Notice to Bank Principal Nodal Officer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Issue a statutory cease-and-desist notice to the bank PNO citing RBI Fair Practices guidelines, demanding immediate cessation of workplace calls and redirecting correspondence to legal counsel.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04: Bilateral Settlement Negotiations
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 16–35</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Credit Committee &amp; SAMD OTS Representation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Our debt resolution specialists negotiate directly with the bank Credit Committee to structure an affordable settlement with a 40% to 70% waiver on accrued interest and penalties.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05: Settlement Letter Vetting
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 36–45</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Verify Official Full &amp; Final Settlement Offer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Review the official settlement letter for explicit Full and Final Settlement clauses, verified bank authority signatures, and commitments to issue a No Dues Certificate.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06: Direct Remittance &amp; NDC
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 46–60</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Execute Payment &amp; Update Bureau Records
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pay the agreed settlement amount directly into your loan account, obtain the official No Dues Certificate, and verify that credit bureaus update your balance to zero.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Legal Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense: Workplace Privacy Rights
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>RBI Fair Practices Code</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Lenders are barred from contacting employers or visiting workplaces without written consent. Calling before 8 AM or after 7 PM violates RBI directives.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>Section 25 PSSA &amp; 138 NI Act</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    NACH bounce and cheque bounce notices apply strictly to the individual signatory. These proceedings grant zero authority to involve employers or HR.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Arbitration &amp; Perkins Eastman</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Unilateral arbitrator appointments by lenders are void under Supreme Court rulings. Arbitration is an individual civil dispute with no jurisdiction over employers.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <BadgeAlert className="w-4 h-4" />
                    <span>BNS Criminal Defamation &amp; Extortion</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Threatening job termination, using abusive language, or creating scenes at work are punishable under BNS Sections 308, 351, 352, and 356.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Grievance Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Escalation Matrix: Bank PNO to RBI Ombudsman
              </h2>

              <div className="space-y-3.5 pt-1">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Grievance Redressal Officer &amp; Bank PNO
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 7–10 Days</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Internal Institutional Complaint &amp; Agency Recall
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submit a formal complaint to the bank PNO with call logs and call records, demanding immediate agency file recall and harassment cessation.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: Cyber Crime Portal &amp; Police FIR
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 14–21 Days</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Cybercrime Reporting &amp; Criminal Intimidation FIR
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If agents threaten job loss or send extortion messages, file a complaint on <strong>cybercrime.gov.in</strong> (helpline 1930) and an FIR at your local police station.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: RBI Integrated Ombudsman (CMS Portal)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 30 Days</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Regulatory Complaint on cms.rbi.org.in
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If unresolved after 30 days, escalate to the RBI Integrated Ombudsman on <strong>cms.rbi.org.in</strong> for regulatory penalties and compensation up to ₹20 Lakhs.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="procedural-timeline-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Procedural Timeline: Default to Complete Debt Relief
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Timeline Phase</th>
                      <th className="p-3.5 font-bold">Loan Classification</th>
                      <th className="p-3.5 font-bold">Typical Collection Action</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Strategic Legal Countermeasure</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 1–30</td>
                      <td className="p-3.5">SMA-0 (Special Mention Account)</td>
                      <td className="p-3.5">Automated SMS, emails, tele-calling</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Verify ledger and communicate hardship in writing</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 31–60</td>
                      <td className="p-3.5">SMA-1 Classification</td>
                      <td className="p-3.5">Third-party agency assignment</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Establish call boundaries and record all communications</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 61–90</td>
                      <td className="p-3.5">SMA-2 Classification</td>
                      <td className="p-3.5">Intensified collection and office calls</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Issue formal cease-and-desist to Bank PNO</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 91–120</td>
                      <td className="p-3.5">NPA (Non-Performing Asset)</td>
                      <td className="p-3.5">Legal notice and OTS compromise window</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Initiate bilateral OTS negotiations for 40%–70% waiver</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Months 4–6</td>
                      <td className="p-3.5">Full Closure &amp; Settlement</td>
                      <td className="p-3.5">Account settled and collections cancelled</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Obtain official NDC and update credit bureau status</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-harassment-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Special Scenarios: Layoffs, HR Calls &amp; ARC Portfolios
              </h2>

              <div className="space-y-3 pt-1">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-red-600" />
                    Corporate Layoffs &amp; Loss of Employment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Searching professional directories or contacting former colleagues violates IT Act Section 43A and RBI privacy rules, entitling borrowers to regulatory remedies.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Calls to Office Receptions &amp; Department Managers
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Disclosing debt to office staff violates RBI Fair Practices and creates actionable legal liability for workplace defamation under BNS Section 356.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    Salary Account Freezes &amp; Right of Set-Off
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Indian Contract Act Section 171, banks cannot freeze 100% of salary essential for basic living expenses without prior written notice.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Asset Reconstruction Company (ARC) Debt Assignments
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When debts are assigned to ARCs under SARFAESI Section 5, ARCs remain bound by RBI Fair Practices and can be settled through OTS negotiations.
                  </p>
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
                Frequently Asked Questions: Employer Recovery Calls
              </h2>

              <div className="space-y-3 pt-1">
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
                <span>Statutory Citations &amp; Regulatory Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Statutory References
              </h2>
              
              <ul className="space-y-1.5 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Master Directions:</strong> Fair Practices Code for Lenders &amp; Recovery Agent Guidelines.
                </li>
                <li>
                  <strong>Supreme Court of India:</strong> <em>Justice K.S. Puttaswamy v. Union of India (2017)</em> (Article 21 Privacy).
                </li>
                <li>
                  <strong>Bharatiya Nyaya Sanhita (BNS), 2023:</strong> Sections 308 (Extortion), 351 (Intimidation), and 356 (Defamation).
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908:</strong> Section 60 (Salary Exemptions from Attachment).
                </li>
                <li>
                  <strong>CICRA, 2005:</strong> Section 21 (Mandatory Updating of Settled Credit Bureau Records).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Official Legal &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman (CMS)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>India Code Legislative Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Anti-Harassment Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
                  </Link>
                  <Link href="/can-recovery-agents-visit-my-office" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Agents Visiting Office
                  </Link>
                  <Link href="/can-bank-call-relatives-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Calling Relatives
                  </Link>
                  <Link href="/salary-deduction-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Salary Deduction Rules
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
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
                Specialized in banking compliance, borrower privacy defense, anti-harassment legal remedies, and NPA settlement negotiations under RBI Fair Practices Code.
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
                  100% CONFIDENTIAL ANTI-HARASSMENT
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Are Agents Calling Your Workplace?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our experts issue immediate cease-and-desist notices to stop recovery calls, protect your privacy, and negotiate a 40% to 70% settlement waiver.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Stop Agents Calling Your Boss
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
                  <span><strong>Immediate Harassment Stop:</strong> Formal legal cease-and-desist.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked settlement fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> No third-party fund pooling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; Privacy Compliance:</strong> 100% lawful dispute advocacy.</span>
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
                    Anti-Harassment Legal Defense Guide
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop illegal recovery practices &rarr;</span>
                </Link>

                <Link
                  href="/can-recovery-agents-visit-my-office"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Recovery Agents Visit My Office?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Office visit rules and legal steps &rarr;</span>
                </Link>

                <Link
                  href="/salary-deduction-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Salary Deduction for Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Section 60 CPC salary protections &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
