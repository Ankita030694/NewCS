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
  ShieldAlert,
  Laptop
} from 'lucide-react';

export default function BackgroundVerificationForItJobLoanDefaultClient() {
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
    { id: 'bgv-architecture', label: '1. Corporate BGV Architecture & Screening' },
    { id: 'debt-forensics', label: '2. Financial Forensics & Settlement Scope' },
    { id: 'industry-comparison', label: '3. BGV Screening by Corporate Sector' },
    { id: 'cibil-impact', label: '4. CIBIL Algorithm & BGV Thresholds' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint & Resolution Roadmap' },
    { id: 'resolution-sop', label: '6. Six-Stage Career & Debt SOP' },
    { id: 'statutory-defense', label: '7. Legal Rights & Workplace Protections' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance & Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Procedural Timeline & Milestones' },
    { id: 'specialized-scenarios', label: '10. Specialized Scenarios & Layoffs' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-authorities', label: 'Regulatory Framework & Citations' }
  ];

  const faqs = [
    {
      q: 'Does an unpaid personal loan or credit card default fail an IT MNC background verification?',
      a: 'In general IT and software service firms, a standard civil loan default or low CIBIL score will not automatically fail your background verification. Most tech employers focus primarily on education, past employment authenticity, and criminal records rather than personal financial credit histories.'
    },
    {
      q: 'Which specific IT roles or projects require mandatory CIBIL credit score checks?',
      a: 'Mandatory credit checks primarily apply when you are assigned to BFSI sector clients, fintech applications, core banking software integrations, or corporate finance and accounting roles where employees manage financial data, transactional credentials, or sensitive fiduciary infrastructure.'
    },
    {
      q: 'Can a bank or recovery agency contact my HR or visit my IT company office?',
      a: 'Under Reserve Bank of India Fair Practices Code guidelines, recovery agents are strictly prohibited from harassing employees at work, calling corporate switchboards, or disclosing debt details to HR managers. CredSettle issues immediate cease-and-desist legal representations to halt workplace intimidation.'
    },
    {
      q: 'Does an ongoing Section 138 or Section 25 NACH court notice show up on police verification?',
      a: 'Section 138 Negotiable Instruments Act and Section 25 PSSA summons are quasi-criminal civil disputes handled in magistrate courts. They do not generate criminal FIRs or police history records unless an individual repeatedly evades court summons and a non-bailable warrant is issued.'
    },
    {
      q: 'Can an IT MNC revoke an existing job offer because of a loan default?',
      a: 'Non-BFSI IT enterprises rarely revoke offers for unsecured debt defaults. However, offer revocation risks arise if recovery agents cause public workplace disruption, or if a candidate fails specific client security clearance requirements mandated by overseas banking clients.'
    },
    {
      q: 'How does settling a defaulted loan help protect my current and future tech career?',
      a: 'Settle your outstanding debts through an authorized One-Time Settlement (OTS) to stop legal notices, eliminate recovery harassment, and secure an official No Dues Certificate (NDC). This allows you to report zero outstanding liability and pass high-security client background checks.'
    },
    {
      q: 'What is the difference between a criminal police record and a civil loan dispute during BGV?',
      a: 'Criminal checks identify offenses registered in police databases (such as fraud, theft, or physical assault). Civil loan defaults, arbitrations, and debt recovery tribunal matters are commercial contract disputes and do not appear on standard Indian police clearance certificates.'
    },
    {
      q: 'What should I do if a recovery agent threatens to contact my IT company management?',
      a: 'Document all call recordings, text messages, and agent details immediately. Serve a formal legal notice to the lending institution citing RBI Master Circulars on recovery conduct, and lodge a grievance on the RBI CMS portal to enforce workplace privacy protections.'
    },
    {
      q: 'Will settling a loan reflect negatively on overseas IT client background screenings?',
      a: 'International clients and visa processing agencies verify criminal records and professional integrity. A "Settled" status on CIBIL with an authentic No Dues Certificate demonstrates resolved financial commitments and clears international vendor background vetting.'
    },
    {
      q: 'How quickly can CredSettle resolve delinquent loans to clear employment background risks?',
      a: 'CredSettle initiates legal representation within 24 to 48 hours to stop recovery harassment. Complete One-Time Settlement negotiations, bank credit committee approvals, and No Dues Certificate disbursements are typically concluded within 30 to 60 days.'
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Corporate BGV Compliance &amp; Career Legal Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            IT MNC Job Background Verification &amp; Loan Default Impact
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Understand how corporate background verification agencies evaluate credit scores, civil loan defaults, and police records. Learn how to protect your job offer, halt workplace recovery harassment, and resolve delinquent debts with an authentic No Dues Certificate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your Career: Settle Your Debt</span>
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
                  <span>Employment Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Aligned with Indian Labor Laws, RBI Fair Practices Code, and Global BGV Standards.
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
                <span>EXECUTIVE BRIEF: IT MNC BACKGROUND VERIFICATION &amp; LOAN DEFAULTS</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Standard BGV Scope:</strong> General software firms focus on identity, educational credentials, employment tenure, and criminal records rather than credit scores.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">BFSI &amp; Fintech Exception:</strong> Projects handling banking applications, payment gateways, or financial data often mandate a formal CIBIL credit check.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Civil vs Criminal Distinction:</strong> Unpaid personal loans and credit cards are civil contract breaches and do not trigger police FIRs or criminal BGV records.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Workplace Privacy Protections:</strong> RBI regulations strictly prohibit bank recovery agents from visiting IT offices, calling reception desks, or intimidating HR teams.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Section 138 &amp; 25 Realities:</strong> Cheque bounce and NACH dishonor notices are compoundable magistrate matters that settle smoothly without criminal blacklisting.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Permanent Resolution:</strong> A structured One-Time Settlement (OTS) clears outstanding liabilities and secures an authentic No Dues Certificate for career safety.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Corporate BGV Architecture & Screening */}
            <section id="bgv-architecture" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Corporate Human Resources &amp; Screening Protocols</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Corporate BGV Architecture: How MNCs Screen IT Recruits
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian IT enterprises and MNCs partner with background screening agencies like AuthBridge, First Advantage, and HireRight to vet recruits. For most engineering, QA, and cloud roles, screening evaluates identity, degrees, employment history, and criminal convictions. Standard IT background verification does not pull your personal CIBIL report.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Unless your position involves fiduciary control over corporate treasury, banking software integration, or payment gateways, civil personal loan and credit card defaults remain outside regular screening scope. However, for specialized BFSI or fintech client deployments, international compliance rules enforce stricter financial checks, making proactive debt resolution essential.
              </p>
            </section>

            {/* SECTION 2: Financial Forensics & Settlement Scope */}
            <section id="debt-forensics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics &amp; Liability Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Forensics: Debt Inflation &amp; Settlement Scope
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Defaulting on unsecured loans triggers automated banking charges: 24% to 36% penal interest, NACH bounce penalties, and overdue fees, inflating ledger balances by up to 50% above principal. A forensic audit removes these unjustified levies to establish true liability.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                After 90 days of default, loans enter Non-Performing Asset (NPA) classification, requiring banks to set aside capital provisions. To recover funds, bank credit committees routinely sanction One-Time Settlements (OTS), offering a 100% penal interest waiver and a 40% to 55% principal haircut.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Stressed IT Professional Loan Settlement Breakdown</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹10 Lakh Baseline Claim</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Financial Component</th>
                        <th className="p-3">Pre-Settlement Ledger</th>
                        <th className="p-3">Bank Credit Committee Waiver</th>
                        <th className="p-3 text-right">Final Payable Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Unamortized Principal Balance</td>
                        <td className="p-3">₹7,00,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">45% Principal Haircut (₹3,15,000)</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹3,85,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Accrued Compound &amp; Penal Interest</td>
                        <td className="p-3">₹2,45,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Complete Waiver</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹0</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">NACH Bounce &amp; Late Surcharges</td>
                        <td className="p-3">₹55,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Administrative Waiver</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹0</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Resolution Assessment</td>
                        <td className="p-3 text-rose-600">₹10,00,000</td>
                        <td className="p-3 text-emerald-700">₹6,15,000 Total Relief (61.5% Savings)</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹3,85,000 Final OTS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: BGV Screening by Corporate Sector */}
            <section id="industry-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Industry Sector Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Industry Comparison: BGV Screening by Corporate Sector
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Background verification rigor depends on industry and data sensitivity. While tech consulting prioritizes employment tenure and technical capability, financial entities demand rigorous credit and integrity checks.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Corporate Industry Sector</th>
                      <th className="p-3">Credit Score (CIBIL) Check</th>
                      <th className="p-3">Civil Default Impact</th>
                      <th className="p-3">Police Verification Scope</th>
                      <th className="p-3">Offer Revocation Risk</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">IT Services &amp; SaaS Products</td>
                      <td className="p-3 text-slate-600">Not Conducted in 95% of Roles</td>
                      <td className="p-3 text-emerald-600 font-semibold">Negligible Impact</td>
                      <td className="p-3">Criminal FIR &amp; Conviction Check</td>
                      <td className="p-3 text-emerald-600 font-semibold">Extremely Low</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">BFSI Tech &amp; Fintech Platforms</td>
                      <td className="p-3 text-amber-600 font-semibold">Mandatory (Credit Bureau Pull)</td>
                      <td className="p-3 text-amber-600 font-semibold">Explanation Required</td>
                      <td className="p-3">Criminal &amp; Court Record Search</td>
                      <td className="p-3 text-amber-600 font-semibold">Moderate (Unless Resolved)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Global Investment Banking Units</td>
                      <td className="p-3 text-rose-600 font-semibold">Strict Regulatory Audit</td>
                      <td className="p-3 text-rose-600 font-semibold">Requires Zero Outstanding NDC</td>
                      <td className="p-3">Comprehensive Inter-State Database</td>
                      <td className="p-3 text-rose-600 font-semibold">High if Left Unresolved</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Corporate Finance &amp; Accounting</td>
                      <td className="p-3 text-amber-600 font-semibold">Frequently Audited</td>
                      <td className="p-3 text-amber-600 font-semibold">Requires Clearance Proof</td>
                      <td className="p-3">Jurisdictional Police Verification</td>
                      <td className="p-3 text-amber-600 font-semibold">Moderate</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Government &amp; Defense IT Vendors</td>
                      <td className="p-3 text-slate-600">Discretionary Security Clearance</td>
                      <td className="p-3 text-slate-600">Assessed on National Security Risk</td>
                      <td className="p-3">Special Branch Police Scrutiny</td>
                      <td className="p-3 text-amber-600 font-semibold">Low to Moderate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: CIBIL Algorithm & BGV Metrics */}
            <section id="cibil-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CreditCard className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Information Bureau Algorithms</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Algorithm: Credit Score Trajectory &amp; BGV Metrics
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit bureaus calculate scores based on repayment history (35%), credit utilization (30%), history length (15%), credit mix (10%), and inquiries (10%). Reaching 90 DPD triggers an immediate 80 to 140 point drop, falling below typical 650 thresholds required in sensitive financial developer roles.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Executing a One-Time Settlement updates credit reports to &quot;Settled&quot; with zero outstanding balance, stopping negative reporting. Borrowers can rebuild a 750+ score over 18 to 24 months, or later convert status to &quot;Closed&quot; under Section 21 of CICRA 2005.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Asset Card */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Resolution Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: IT Career &amp; Debt Resolution Roadmap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive infographic illustrates the complete institutional pathway for protecting your IT career from background verification hurdles, distinguishing civil loan defaults from criminal records, stopping workplace harassment, and securing a binding No Dues Certificate.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/background-verification-for-it-job-loan-default.jpg"
                    alt="IT MNC Job Background Verification & Loan Default Resolution Flowchart"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Career &amp; Debt Resolution Blueprint • Aligned with RBI &amp; Corporate BGV Standards</span>
                  <a
                    href="/images/infographics/background-verification-for-it-job-loan-default.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View High-Resolution Graphic</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="resolution-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Six-Stage SOP: Career Protection &amp; Debt Resolution
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CredSettle executes a disciplined six-stage methodology engineered specifically for salaried tech professionals to resolve debt while safeguarding employment credentials:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Stage 1 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-full">
                      Stage 01
                    </span>
                    <FileText className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Forensic Portfolio &amp; BGV Risk Audit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We audit loan statements, isolate unfair penal interest, evaluate employer BGV requirements, and separate civil defaults from statutory notice risks.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-full">
                      Stage 02
                    </span>
                    <ShieldAlert className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Legal Representation &amp; Workplace Shield
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We issue formal legal notices to bank Nodal Officers, enforcing RBI Fair Practices to halt recovery agent calls and unauthorized office visits.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-full">
                      Stage 03
                    </span>
                    <BookOpen className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Comprehensive Hardship Dossier Preparation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We compile documented proof of layoffs, medical emergencies, or salary revisions to establish genuine hardship before bank credit committees.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-full">
                      Stage 04
                    </span>
                    <Scale className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Bilateral Negotiations with Stressed Asset Desks
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Our senior advocates negotiate directly with bank zonal desks to secure 100% penal fee waivers and a 40% to 55% principal settlement discount.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-full">
                      Stage 05
                    </span>
                    <Award className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Official Settlement Sanction Letter Vetting
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We verify sanction letters on official bank letterhead, ensuring clear settlement amounts, tranche dates, and court notice withdrawal terms.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-full">
                      Stage 06
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Direct Account Remittance &amp; NDC Issuance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    You pay directly into your loan account. We follow up with bank operations to secure your official No Dues Certificate for clean BGV audits.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections &amp; Legal Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Defense: Legal Rights &amp; Workplace Immunity
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Loan default is a civil contractual dispute, not criminal misconduct. Lenders possess zero legal authority to breach employee privacy or contact corporate HR:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <BadgeAlert className="w-4 h-4 text-amber-600" />
                    <span>Section 25 PSSA &amp; NACH Dishonor</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Magistrate summons for electronic mandate bounces are compoundable quasi-criminal proceedings that resolve fully through settlement with zero police record impact.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Scale className="w-4 h-4 text-blue-600" />
                    <span>Section 138 NI Act Cheque Bounce</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Requires a formal legal reply within 15 days. Prompt settlement ensures immediate court case withdrawal without criminal conviction records.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Gavel className="w-4 h-4 text-purple-600" />
                    <span>Arbitration Section 21 Challenges</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Unilateral arbitrator appointments violate Supreme Court rulings (TRF / Perkins). Challenging jurisdiction under Section 12(5) prompts bilateral compromise talks.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>RBI Fair Practices Code Enforcement</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    RBI rules strictly forbid agents from visiting workplaces, calling colleagues, or contacting borrowers outside 8:00 AM to 7:00 PM.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Grievance & Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Dispute Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Institutional Debt Grievance
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If collection agencies threaten your employment standing, invoke the RBI-mandated 3-tier grievance mechanism:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">
                    Tier 1: Grievance Officer
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Branch &amp; Regional GRO</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit written complaints regarding agent harassment demanding immediate workplace cessation. Resolution turnaround: 7 to 10 working days.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">
                    Tier 2: Principal Nodal Officer
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Apex Bank PNO Desk</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalate to the corporate PNO to halt third-party agency calling rosters and initiate formal compromise reviews within 14 to 21 days.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">
                    Tier 3: RBI Ombudsman
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Regulatory CMS Portal</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a petition on cms.rbi.org.in for recovery violations. The Ombudsman has statutory authority to penalize errant lenders.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline & Milestones */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Default to Background Clearance
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Chronological milestones from initial default to complete background clearance:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[580px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Milestone</th>
                      <th className="p-3">Account Classification</th>
                      <th className="p-3">Operational Recovery Status</th>
                      <th className="p-3">BGV Risk Mitigation Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Days 1 – 30</td>
                      <td className="p-3">SMA-0 Stage</td>
                      <td className="p-3">Automated SMS &amp; Email Reminders</td>
                      <td className="p-3">Maintain active communication; assess liquidity options.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Days 31 – 90</td>
                      <td className="p-3">SMA-1 / SMA-2 Brackets</td>
                      <td className="p-3">Branch Collection Agency Calls</td>
                      <td className="p-3">Issue cease-and-desist against workplace outreach.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Days 91 – 180</td>
                      <td className="p-3 text-rose-600 font-semibold">NPA Classification</td>
                      <td className="p-3">Stressed Asset Desk Portfolio</td>
                      <td className="p-3 font-medium text-[#1886ff]">Prime One-Time Settlement (OTS) negotiation window.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 – 8</td>
                      <td className="p-3 text-emerald-600 font-semibold">Sanctioned OTS</td>
                      <td className="p-3">Payment Tranches Remitted</td>
                      <td className="p-3">Execute direct loan payment; secure receipt confirmations.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 8+</td>
                      <td className="p-3 text-emerald-700 font-bold">Closed / Settled</td>
                      <td className="p-3">No Dues Certificate Issued</td>
                      <td className="p-3 font-bold text-emerald-600">100% BGV Clearance ready for any corporate audit.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Scenarios & Layoffs */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Laptop className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Case Studies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Layoffs &amp; BFSI Project Checks
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tailored resolution strategies for distinct IT career scenarios:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    <span>Tech Layoffs &amp; Career Gaps</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submitting official severance and termination letters to credit committees validates genuine financial hardship, unlocking maximum settlement discounts.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-500" />
                    <span>Overseas Onsite Client Deployments</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    For H-1B, L-1, or European onsite client travel, securing an official No Dues Certificate ensures zero impediment during international background audits.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-500" />
                    <span>Switching to BFSI or Fintech Employers</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Joining fintech hubs with mandatory credit checks requires a formal bank settlement sanction letter to satisfy HR onboarding compliance.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-purple-500" />
                    <span>Debt Sold to ARCs (Asset Reconstruction)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When loans are assigned to ARCs (like ARCIL or Phoenix), specialized compromise pricing allows deeper principal waivers and fast NDC closure.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: Frequently Asked Questions (10 items matching schema) */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Knowledge Base &amp; FAQ Accordion</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: IT Job BGV &amp; Loan Defaults
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Find clear, authoritative answers to the most common questions asked by Indian IT and MNC professionals regarding employment background verification, credit score checks, and loan default legalities.
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden shadow-xs transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="font-bold text-sm sm:text-base text-slate-900">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#1886ff] flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Regulatory Citations & Authorities */}
            <section id="regulatory-authorities" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Authority &amp; Reference Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Regulatory Framework &amp; Official Verification Authorities
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CredSettle operates in strict compliance with the legal frameworks established by the Reserve Bank of India, Indian judicial authorities, and national regulatory bodies:
              </p>

              {/* 6 Outbound Authority Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-center justify-between text-xs font-bold text-slate-800 group"
                >
                  <span>RBI Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff]" />
                </a>

                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-center justify-between text-xs font-bold text-slate-800 group"
                >
                  <span>RBI Ombudsman CMS</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff]" />
                </a>

                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-center justify-between text-xs font-bold text-slate-800 group"
                >
                  <span>TransUnion CIBIL</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff]" />
                </a>

                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-center justify-between text-xs font-bold text-slate-800 group"
                >
                  <span>India Code Legislative</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff]" />
                </a>

                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-center justify-between text-xs font-bold text-slate-800 group"
                >
                  <span>NALSA Legal Services</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff]" />
                </a>

                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-center justify-between text-xs font-bold text-slate-800 group"
                >
                  <span>National Cyber Crime</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff]" />
                </a>
              </div>

              {/* 10 Internal CredSettle Topic Badges */}
              <div className="pt-3 border-t border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Related Debt Resolution Topics:
                </span>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/bank-sent-legal-notice-for-loan-what-to-do"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 text-xs font-medium transition-colors"
                  >
                    Bank Sent Legal Notice
                  </Link>
                  <Link
                    href="/arbitration-notice-personal-loan-default"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 text-xs font-medium transition-colors"
                  >
                    Arbitration Notice Defense
                  </Link>
                  <Link
                    href="/convert-settled-status-to-closed"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 text-xs font-medium transition-colors"
                  >
                    Convert Settled to Closed
                  </Link>
                  <Link
                    href="/can-recovery-agents-visit-my-office"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 text-xs font-medium transition-colors"
                  >
                    Can Recovery Agents Visit Office
                  </Link>
                  <Link
                    href="/get-noc-after-loan-settlement"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 text-xs font-medium transition-colors"
                  >
                    Get No Dues Certificate
                  </Link>
                  <Link
                    href="/ecs-nach-bounce-legal-notice-section-25"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 text-xs font-medium transition-colors"
                  >
                    Section 25 NACH Bounce
                  </Link>
                  <Link
                    href="/axis-bank-personal-loan-settlement"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 text-xs font-medium transition-colors"
                  >
                    Axis Bank Loan Settlement
                  </Link>
                  <Link
                    href="/bajaj-finserv-personal-loan-settlement"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 text-xs font-medium transition-colors"
                  >
                    Bajaj Finserv Settlement
                  </Link>
                  <Link
                    href="/credit-card-debt-consolidation"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 text-xs font-medium transition-colors"
                  >
                    Credit Card Consolidation
                  </Link>
                  <Link
                    href="/cibil-score-kaise-badhaye-after-settlement"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 text-xs font-medium transition-colors"
                  >
                    Rebuilding CIBIL Score
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
                <div className="w-12 h-12 rounded-full border-2 border-[#1886ff] flex-shrink-0 bg-blue-50 flex items-center justify-center text-[#1886ff] font-extrabold text-base shadow-xs">
                  AJ
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Ashish Jhangra</h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Legal &amp; Debt Resolution Professional
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialist in banking compliance, corporate employee debt resolution, BGV risk mitigation, and compromise settlements with extensive experience defending salaried tech professionals before bank credit committees.
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
                  CAREER &amp; DEBT PROTECTION
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Loan Default Worrying Your IT Career?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Halt recovery agent harassment at your workplace, safeguard your background verification status, and settle debts with up to 55% waivers and official No Dues Certificates.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Career: Settle Your Debt
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
                  <span>Confidential Advice • 100% RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Workplace Privacy:</strong> Cease-and-desist protects corporate standing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Remittance:</strong> Payments made strictly to your loan account.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Compliance:</strong> Full enforcement of Fair Practices Code.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified NDC:</strong> Guaranteed official bank closure certificate.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related IT &amp; Debt Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/can-recovery-agents-visit-my-office"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Recovery Agents Visit My Office?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Workplace harassment defense &rarr;</span>
                </Link>

                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice for Loan
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal notice response blueprint &rarr;</span>
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
