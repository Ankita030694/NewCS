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
  CreditCard,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  BadgeAlert,
  Landmark,
  Shield,
  FileCheck
} from 'lucide-react';

export default function DefensePersonnelLoanDefaultActionClient() {
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
    { id: 'military-rules', label: '1. Military Service Rules & Civil Recovery' },
    { id: 'financial-forensics', label: '2. Financial Forensics & Settlement Math' },
    { id: 'comparison-matrix', label: '3. Debt Resolution Comparison Matrix' },
    { id: 'cibil-security-clearance', label: '4. CIBIL Bureau & Security Clearance' },
    { id: 'infographic-overview', label: '5. Visual Institutional Blueprint' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Defense Resolution SOP' },
    { id: 'statutory-defense', label: '7. Statutory Notice Defense & Unit Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance Redressal Matrix' },
    { id: 'chronological-timeline', label: '9. Procedural Default Milestones' },
    { id: 'specialized-scenarios', label: '10. Specialized Military Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can an Indian Army, Navy, or Air Force personnel be court-martialed for loan default?',
      a: 'No. Defaulting on a commercial bank loan or credit card is strictly a civil contractual breach. Under the Army Act, Navy Act, and Air Force Act, a court-martial applies to military discipline and service offenses, not personal financial distress or civil debt defaults.'
    },
    {
      q: 'Can bank recovery agents legally contact my Commanding Officer or Military Unit?',
      a: 'Absolutely not. The RBI Fair Practices Code strictly prohibits recovery agents from contacting employers, commanding officers, or family members. Any attempt to send recovery notices to a military unit or cantonment violates regulatory directives and constitutes unlawful intimidation.'
    },
    {
      q: 'Can a bank automatically attach a defense personnel salary or pension?',
      a: 'Banks cannot unilaterally attach your salary or pension. Under Section 28 of the Army Act, 1950 and Section 60(1)(g) of the Code of Civil Procedure, military pay and allowances enjoy specific statutory protections from summary civil attachment without formal court orders.'
    },
    {
      q: 'What happens if a Section 25 PSSA or Section 138 notice is served while posted in field areas?',
      a: 'Military personnel deployed in forward or field locations receive procedural accommodations under the Indian Soldiers (Litigation) Act, 1925. However, serving a formal legal reply through designated civil counsel remains essential to preserve rights and initiate compromise settlement.'
    },
    {
      q: 'What percentage of waiver can defense personnel negotiate during a loan settlement?',
      a: 'Defense borrowers typically achieve a 100% waiver on accrued penal interest, late surcharges, and NACH bounce fees. On the core unamortized principal, bank credit committees routinely sanction a 40% to 55% waiver when presented with verifiable hardship documentation.'
    },
    {
      q: 'How does a loan settlement affect military security clearance and promotions?',
      a: 'An unmanaged default with pending court warrants creates operational vulnerability during background checks. In contrast, an authorized One-Time Settlement accompanied by an official No Dues Certificate provides complete legal closure, preventing departmental adverse remarks.'
    },
    {
      q: 'Can banks seize defense salary accounts under DSP or Defence Salary Packages?',
      a: 'Banks sometimes attempt unilateral lien markings on salary accounts. However, this can be challenged through legal representation and RBI grievance redressal, as banks cannot deprive service personnel of basic subsistence without following established due process.'
    },
    {
      q: 'What documentation is required to establish military hardship for debt settlement?',
      a: 'Key documents include service deployment records, medical board disability certificates or family medical expenses, proof of high-interest indebtedness, monthly pay slips detailing deductions, and a comprehensive hardship statement submitted to the credit committee.'
    },
    {
      q: 'What is the risk of making unreceipted token payments to collection agents?',
      a: 'Never pay cash or unreceipted token amounts to recovery telecallers. Token payments are credited toward inflated penal interest without reducing the principal loan balance or halting legal action. All payments must follow an official bank sanction letter.'
    },
    {
      q: 'What is the step-by-step procedure to receive an official No Dues Certificate?',
      a: 'Once the credit committee issues a formal settlement letter, you remit the agreed settlement amount directly into your designated loan account. Within 30 to 45 business days, the bank updates the account ledger to zero and issues the stamped No Dues Certificate.'
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
            <Shield className="w-3.5 h-3.5" />
            <span>Armed Forces &amp; Military Debt Protection Protocol</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Armed Forces &amp; Military Personnel Loan Default Consequences
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Authoritative legal roadmap for Indian Army, Navy, Air Force, and Paramilitary personnel facing loan defaults. Understand service rules, stop collection calls to your unit, and secure 40% to 55% waivers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Confidential Legal Advice for Defense Personnel</span>
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
                  <span>Defense Legal Rights</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under the Army Act, Indian Soldiers Litigation Act, and RBI Fair Practices Code.
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
                <span>EXECUTIVE BRIEF: DEFENSE PERSONNEL LOAN DEFAULT LEGAL CRUX</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Civil Jurisdiction:</strong> Unsecured loan default is purely a civil contractual dispute, never a military crime.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Court Martial Myth:</strong> Serving personnel cannot be court-martialed, demoted, or dismissed for civil financial debts.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Unit Harassment Prohibited:</strong> Calls, visits, or demand notices to Commanding Officers violate RBI conduct directives.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Pay Attachment Immunity:</strong> Section 28 Army Act and Section 60 CPC bar automatic extrajudicial salary deduction.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Operational Deployment Shield:</strong> The Indian Soldiers (Litigation) Act grants legal protections during forward postings.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Institutional Haircuts:</strong> Bank credit committees routinely sanction 40% to 55% waivers on genuine hardship grounds.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Service Record Protection:</strong> Formal One-Time Settlement prevents litigation warrants and safeguards security clearance.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Definitive Legal Closure:</strong> Traceable loan remittance secures an official No Dues Certificate and closes the liability.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Military Service Rules & Civil Recovery */}
            <section id="military-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Military Jurisprudence &amp; Banking Regulations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Military Service Rules: Army Act vs. Civil Recovery
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Members of the Indian Armed Forces, including the Army, Navy, Air Force, and paramilitary forces like CRPF and BSF, occasionally encounter severe debt stress from personal loans or family emergencies. Aggressive recovery agencies often exploit a soldier&apos;s discipline by threatening court-martial proceedings, service dismissal, or military arrest.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Indian law, an unpaid loan is purely a civil contractual breach governed by the Indian Contract Act, 1872. Military courts-martial under the Army Act, 1950 apply strictly to service misconduct and disciplinary infractions, never to civil insolvency. Service personnel cannot be discharged or demoted for commercial debt default.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Additionally, Section 28 of the Army Act and Section 60(1)(g) of the CPC protect military pay and pensions from summary attachment. Once an overdue loan reaches 90-day NPA classification, RBI provisioning rules encourage banks to negotiate a One-Time Settlement rather than pursuing protracted litigation.
              </p>
            </section>

            {/* SECTION 2: Financial Forensics & Settlement Math */}
            <section id="financial-forensics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Forensic Accounting</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Forensics: Principal vs. Inflated Penal Charges
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When installments default during field postings or medical crises, banking software rapidly inflates balances with 24% to 36% compound penal interest, repetitive ₹500 NACH bounce penalties, and administrative fees, swelling total claims 35% to 50% above actual borrowed principal.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A forensic audit isolates genuine unamortized principal from penal additions. Backed by authenticated hardship proofs, bank credit committees grant 100% waivers on penal charges and approve 40% to 55% principal haircuts for final compromise closure.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Defense Personnel 180-Day NPA Settlement Breakdown</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹15 Lakh Baseline Claim</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Financial Component</th>
                        <th className="p-3">Pre-Settlement Ledger</th>
                        <th className="p-3">Credit Committee Waiver</th>
                        <th className="p-3 text-right">Final Payable Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Unamortized Principal Balance</td>
                        <td className="p-3">₹10,50,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">45% Core Haircut (₹4,72,500)</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹5,77,500</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Accrued Penal &amp; Overdue Interest</td>
                        <td className="p-3">₹3,75,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Complete Waiver</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹0</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">NACH Bounces &amp; Late Surcharges</td>
                        <td className="p-3">₹75,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Administrative Waiver</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹0</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Compromise Evaluation</td>
                        <td className="p-3 text-rose-600">₹15,00,000</td>
                        <td className="p-3 text-emerald-700">₹9,22,500 Total Relief (61.5% Savings)</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹5,77,500 Final OTS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Debt Resolution Comparison Matrix */}
            <section id="comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Strategic Assessment</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Debt Resolution Pathways: Defense Personnel Comparison
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Evaluating debt relief options requires weighing legal protection against cost and service impact. An institutional One-Time Settlement delivers definitive closure and principal relief while halting collection harassment.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Resolution Mechanism</th>
                      <th className="p-3">Financial Relief</th>
                      <th className="p-3">Service &amp; Legal Protection</th>
                      <th className="p-3">CIBIL Bureau Status</th>
                      <th className="p-3">Standard Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="p-3 text-emerald-600 font-semibold">40% to 55% Principal Waiver</td>
                      <td className="p-3">Full Legal Immunity &amp; Notice Withdrawal</td>
                      <td className="p-3 font-mono text-[11px]">Settled / Zero Balance</td>
                      <td className="p-3">30 to 60 Days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Tenure Restructuring</td>
                      <td className="p-3 text-amber-600">0% Principal Haircut (Higher Interest)</td>
                      <td className="p-3">Conditional on Timely Servicing</td>
                      <td className="p-3 font-mono text-[11px]">Restructured Account</td>
                      <td className="p-3">45 to 90 Days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Civil Court Litigation</td>
                      <td className="p-3 text-rose-600">High Legal Representation Costs</td>
                      <td className="p-3">Adversarial Decrees &amp; Summons</td>
                      <td className="p-3 font-mono text-[11px]">Suit Filed / Wilful Default</td>
                      <td className="p-3">2 to 5 Years</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">National Lok Adalat</td>
                      <td className="p-3 text-emerald-600">30% to 45% Mutual Haircut</td>
                      <td className="p-3">Non-Appealable Consent Award</td>
                      <td className="p-3 font-mono text-[11px]">Settled in Lok Adalat</td>
                      <td className="p-3">Quarterly Sittings</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Unmanaged Default</td>
                      <td className="p-3 text-rose-600">Exponential Penal Compounding</td>
                      <td className="p-3 text-rose-600">PSSA 25 / NI 138 Summons Risk</td>
                      <td className="p-3 font-mono text-[11px] text-rose-600">Written Off / Delinquent</td>
                      <td className="p-3">Indefinite Stress</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: CIBIL Bureau Dynamics & Military Security Clearance */}
            <section id="cibil-security-clearance" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Architecture &amp; Service Clearance</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Bureau Dynamics &amp; Military Security Clearance
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit bureaus assess credit scores primarily based on repayment history (35%) and utilization (30%). Loan defaults trigger consecutive 30, 60, and 90+ DPD marks, depressing credit scores by 130 to 200 points.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                While financial debts do not impact day-to-day duties, pending court summonses can raise flags during sensitive intelligence or foreign deployment security screenings. An authorized settlement eliminates active default flags and allows rebuilding a 750+ score over 18 to 24 months. Under Section 21 of CICRA 2005, paying the waived variance later converts the entry to &quot;Closed&quot;.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Defense Personnel Loan Settlement Roadmap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual flowchart outlines the 4-step framework to shield defense personnel from unit contact, protect salary rights, and secure sanctioned bank compromise settlements.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/defense-personnel-loan-default-action.jpg"
                    alt="Defense Personnel Loan Default Legal Resolution Framework Flowchart"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Armed Forces Legal Defense Architecture • RBI &amp; Army Act Compliant</span>
                  <a
                    href="/images/infographics/defense-personnel-loan-default-action.jpg"
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
                6. Six-Stage SOP: Negotiating Armed Forces Loan Relief
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Resolving debt as a defense employee requires strict institutional protocol. Follow this 6-stage framework to achieve an official settlement without third-party interference.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Forensic Loan Account Audit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Audit loan statements from disbursal. Segregate core unamortized principal from 24% to 36% compound penal interest and bounce charges to establish the true net baseline.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Military Hardship Dossier Compilation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Assemble verified hardship documentation including deployment records, dependent medical bills, and pay slips proving genuine non-wilful inability to repay.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Legal Representation &amp; Anti-Harassment Notice
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Serve formal legal notice to the bank zonal head and PNO citing RBI guidelines, expressly prohibiting calls or visits to military units or commanding officers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Bilateral Credit Committee Negotiations
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Present the hardship petition before the credit committee, leveraging salary protection under Section 28 Army Act to secure 100% penal waiver and a 40% to 55% haircut.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Official Settlement Sanction Letter Vetting
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Verify that the sanction letter is on official bank letterhead with authorized email provenance, correct tranche schedules, and an explicit legal notice withdrawal clause.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Direct Remittance &amp; No Dues Certificate
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Remit the compromise sum directly into your loan account via RTGS/NEFT, verify ledger balance zeroing, and receive the official No Dues Certificate within 30 to 45 days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Unit Rights */}
            <section id="statutory-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Defense: PSSA 25, NI 138 &amp; Commanding Officer Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When delinquency reaches 90 to 120 days, banks issue legal notices. Timely legal replies protect your service standing and redirect disputes toward settlement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Section 25 PSSA NACH Notice</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Issued for bounced electronic mandates. Serving a formal reply within 30 days proving financial distress refutes criminal intent and steers proceedings into compromise settlement.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Section 138 NI Act Cheque Notice</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Served for dishonored security cheques. A reply within 15 days establishing that cheques were undated security collateral bars summary magistrate proceedings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Arbitration Section 21 &amp; Section 12(5)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Supreme Court rulings in Perkins Eastman and TRF Ltd, unilateral arbitrator appointments by banks are void. Filing Section 12(5) objections stalls proceedings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Commanding Officer Shield &amp; RBI Rules</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI Fair Practices Code strictly prohibits contacting employers or military units. Sending recovery letters to cantonments is a severe breach subject to ombudsman penalties.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Grievance Redressal Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Three-Tier Escalation Matrix for Defense Personnel
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If collection agencies harass your unit or refuse settlement, escalate through the 3-tier regulatory redressal framework.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Remit &amp; Scope of Intervention</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Investigates unauthorized harassment, removes disputed penal fees, and transfers file to settlement desk.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Bank HQ)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Intervenes on unit communications, cancels collection mandates, and oversees credit committee waivers.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Binding adjudication via cms.rbi.org.in with power to award damages for code violations and harassment.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Default Milestones */}
            <section id="chronological-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Default Timeline: Default to Resolution
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Identifying your loan default stage helps pinpoint the optimal window for negotiating deep principal haircuts.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Interval</th>
                      <th className="p-3">Asset Classification</th>
                      <th className="p-3">Bank Recovery Actions</th>
                      <th className="p-3">Recommended Borrower Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Automated payment reminders and soft telephonic collection calls.</td>
                      <td className="p-3">Assess cashflow; avoid taking fresh high-interest app loans.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Escalated telecaller outreach and preliminary loan recall notices.</td>
                      <td className="p-3">Compile medical, deployment, and military hardship documentation.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Final pre-NPA warnings and third-party recovery agency allocation.</td>
                      <td className="p-3">Assert RBI Fair Practices Code rights against abusive telecallers.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Classification</td>
                      <td className="p-3">Mandatory loan provisioning; transfer to Stressed Asset Desk.</td>
                      <td className="p-3">Initiate forensic audit and engage debt settlement specialists.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Prime OTS Window</td>
                      <td className="p-3">Issuance of Section 25 PSSA notices or arbitration demand letters.</td>
                      <td className="p-3 font-bold text-slate-900">Negotiate with credit committee for 40% to 55% waiver.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 and Beyond</td>
                      <td className="p-3 font-mono text-[11px]">Write-off / ARC Transfer</td>
                      <td className="p-3">Ex-parte arbitral filings or debt sale to Asset Reconstruction Companies.</td>
                      <td className="p-3">Remit sanctioned compromise sum and obtain stamped NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Military Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Complex Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Military Scenarios: Postings &amp; ARCs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tailoring debt resolution strategies to unique military conditions ensures legal protection and financial recovery.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#1886ff]" />
                    Forward &amp; High-Altitude Postings
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Indian Soldiers (Litigation) Act, 1925, legal proceedings against personnel serving in remote or operational zones can be formally stayed, providing time for compromise settlement.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    Defence Salary (DSP) Account Liens
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unilateral debit freezes on salary accounts violate Section 28 Army Act and RBI norms. Legal representation promptly revokes unauthorized bank liens.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-indigo-600" />
                    Emergency Medical Debt Spirals
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unplanned healthcare costs often lead to multi-lender app debt. Consolidating these claims into a unified dossier allows deep collective haircuts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    ARC Portfolio Assignments
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When debts are transferred to Asset Reconstruction Companies at deep discounts, experienced negotiators routinely secure settlements exceeding 60% relief.
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
                Frequently Asked Questions: Defense Loan Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers addressing critical questions on military loan defaults, service regulations, and settlement protocols.
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
                Official Regulatory Framework &amp; Military Citations
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>The Army Act, 1950 (Act No. 46 of 1950):</strong> Section 28, Immunity from Arrest for Debt and Protection of Military Pay.
                </li>
                <li>
                  <strong>Indian Soldiers (Litigation) Act, 1925 (Act No. 4 of 1925):</strong> Protection of Soldiers in Court Litigation and Suspension of Proceedings.
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Section 60(1)(g), Inviolable Exemption of Military Stipends and Pensions from Attachment.
                </li>
                <li>
                  <strong>Reserve Bank of India (RBI):</strong> Master Direction on Fair Practices Code for Banks and NBFCs (Updated 2026).
                </li>
                <li>
                  <strong>Payment and Settlement Systems Act, 2007:</strong> Section 25, Framework Governing Electronic Mandate Dishonour.
                </li>
                <li>
                  <strong>Arbitration and Conciliation Act, 1996:</strong> Section 12(5) and Section 21, Ineligibility of Unilateral Arbitrators (Perkins Eastman / TRF Ltd).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Defense &amp; Resolution Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Defense
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/does-loan-settlement-affect-government-job" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Government Job &amp; Loan Settlement
                  </Link>
                  <Link href="/bank-calling-references-and-family-members" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Calling Family &amp; References
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Protection
                  </Link>
                  <Link href="/bank-recovery-case-in-court" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Recovery Cases in Court
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/cibil-score-kaise-badhaye-after-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get No Dues Certificate
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
                Specialist in armed forces debt defense, banking compliance, and compromise resolution. Experienced in protecting service personnel against unlawful collection conduct.
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
                  CONFIDENTIAL DEFENSE LEGAL ADVICE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Military Loan Default or Collection Threat?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Halt recovery calls to your unit, respond to legal notices, and negotiate up to 55% waivers directly with bank credit committees.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Confidential Legal Advice for Defense Personnel
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
                  <span>100% Confidential • Defense Service Protection</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Commitment</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Unit Confidentiality:</strong> Complete protection against military station contact.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> No intermediate third-party payment custody.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; Army Act Compliance:</strong> Rigorous statutory enforcement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official No Dues Certificate:</strong> Guaranteed stamped bank closure letter.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/does-loan-settlement-affect-government-job"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Does Loan Settlement Affect Government Job?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Service rules &amp; clearance guide &rarr;</span>
                </Link>

                <Link
                  href="/bank-calling-references-and-family-members"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Calling Family &amp; Workplace Contacts
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop unauthorized calls guide &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Loan to Closed Status
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Clean CIBIL credit report &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
