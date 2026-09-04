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
  Landmark
} from 'lucide-react';

export default function AxisBankPersonalLoanSettlementClient() {
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
    { id: 'npa-dynamics', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'settlement-math', label: '2. Financial Breakdown & Settlement Math' },
    { id: 'comparison-matrix', label: '3. Resolution Pathways Comparison Matrix' },
    { id: 'cibil-impact', label: '4. CIBIL Algorithm & Credit Rebuilding' },
    { id: 'infographic-overview', label: '5. Visual Institutional Blueprint' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Institutional Settlement SOP' },
    { id: 'statutory-defense', label: '7. Statutory Notice Defense & Legal Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance & Escalation Matrix' },
    { id: 'chronological-timeline', label: '9. Procedural Milestones & Timelines' },
    { id: 'specialized-scenarios', label: '10. Specialized Real-World Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is the official Axis Bank personal loan settlement policy?',
      a: "Axis Bank's personal loan settlement policy is a structured compromise framework administered by its Circle Stressed Asset Desks. It enables borrowers experiencing genuine financial distress, severe medical crises, or job loss to settle their unsecured personal loan obligations through a one-time payment or short-term tranches, waiving accumulated penal levies and a portion of the principal."
    },
    {
      q: 'When does Axis Bank consider an unsecured personal loan eligible for a settlement?',
      a: "Axis Bank generally considers an unsecured personal loan eligible for a compromise settlement after the account breaches 90 days of continuous non-payment and is formally classified as a Non-Performing Asset (NPA). At this stage, mandatory Tier-1 provisioning incentivizes the bank's credit committees to approve compromise recoveries."
    },
    {
      q: 'What percentage of waiver or discount can I negotiate on an Axis Bank personal loan?',
      a: 'Borrowers typically secure a 100% waiver on accrued penal interest, late payment surcharges, and NACH bounce fees. On the core unamortized principal balance, Axis Bank generally sanctions a 40% to 55% waiver depending on the age of delinquency, financial hardship documentation, and litigation status.'
    },
    {
      q: 'How can I bypass aggressive Axis Bank recovery agents and collection agencies?',
      a: 'You can bypass aggressive recovery vendors by serving a formal legal representation through legal counsel directly to the Axis Bank Circle Debt Resolution Head and Principal Nodal Officer. This notice cites genuine financial hardship, invokes RBI Fair Practices Code protections against harassment, and formally demands internal dispute resolution.'
    },
    {
      q: "How do I approach Axis Bank's Regional or Circle Debt Resolution Desk directly?",
      a: "To engage directly with the Circle Stressed Asset Desk, bypass branch telecallers and submit a comprehensive hardship petition accompanied by bank statements, income loss proofs, and medical records to the regional office. CredSettle facilitates direct institutional representation before Axis Bank's zonal credit committees."
    },
    {
      q: 'What should I do if I receive a Section 25 NACH or Section 138 legal notice from Axis Bank?',
      a: 'You must never ignore statutory legal notices. Serve a formal legal reply through an experienced advocate within the statutory 15 to 30-day window, rebutting criminal intent, establishing bona fide financial distress, and proposing an amicable One-Time Settlement compromise before magistrate court filings occur.'
    },
    {
      q: 'Can Axis Bank initiate criminal proceedings or file an FIR for loan default?',
      a: 'Defaulting on an unsecured personal loan is strictly a civil contractual dispute, not a criminal offense. Police authorities cannot register an FIR or make arrests for failure to service loan EMIs. While dishonored NACH mandates involve quasi-criminal provisions under Section 25, they are compoundable matters routinely resolved through settlement.'
    },
    {
      q: 'What key terms must be verified in an official Axis Bank settlement sanction letter?',
      a: 'An authentic Axis Bank settlement letter must be issued on official bank letterhead, originate from a verified @axisbank.com email address, state your exact loan account number, specify the agreed settlement figure and tranche due dates, and include an explicit undertaking to withdraw legal notices and issue a No Dues Certificate.'
    },
    {
      q: 'How will settling an Axis Bank personal loan affect my CIBIL score?',
      a: 'Following settlement, Axis Bank reports the loan to credit bureaus as "Settled" with outstanding balances cleared to zero. While this initial remark prevents further delinquency marks, you can rebuild a 750+ score within 18 to 24 months using secured credit cards, or later convert the status to "Closed" under Section 21 of CICRA.'
    },
    {
      q: 'What is the procedure and timeline to obtain the No Dues Certificate (NDC) from Axis Bank?',
      a: "After you remit the agreed settlement amount directly into your Axis loan account within the prescribed schedule, the bank's operations team completes internal write-offs. Axis Bank is required under regulatory guidelines to issue the official No Dues Certificate (NDC) within 30 to 45 business days."
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
            <span>Institutional Stressed Asset Resolution Protocol</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Axis Bank Personal Loan Settlement
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Institutional framework for resolving delinquent Axis Bank personal and express loans. Learn how to bypass aggressive third-party collection agencies, navigate Circle Debt Resolution Desks, and secure 40% to 55% OTS waivers with an official No Dues Certificate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Facing Axis Bank Loan Default? Request Settlement Evaluation</span>
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
                  <span>Institutional Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by Reserve Bank of India Prudential Norms and Fair Practices Code.
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
                <span>EXECUTIVE BRIEF: AXIS BANK PERSONAL LOAN SETTLEMENT CRUX</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Institutional Mandate:</strong> Adjudicated directly by Axis Circle Stressed Asset Desks after 90 days of default (NPA).
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Zero SARFAESI Risk:</strong> Unsecured loans carry zero collateral mortgage or property attachment powers.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">100% Penal Waiver:</strong> Complete waiver across compounding penal interest, overdue charges, and bounce fees.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">40% to 55% Haircut:</strong> Realistic compromise target negotiated directly on core unamortized principal.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Agency Harassment Shield:</strong> Formal legal representation halts recovery agent calls and unauthorized visits.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Guaranteed Closure:</strong> Official Axis Bank sanction letter and No Dues Certificate within 30 to 45 days.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="npa-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Banking Regulations &amp; Prudential Guidelines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics &amp; NPA Classification in Axis Bank Personal Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Axis Bank actively deploys unsecured personal loans, pre-approved digital credit lines, and express facilities to salaried and self-employed borrowers. When unforeseen economic disruptions occur, such as corporate layoffs, severe medical emergencies, or enterprise downturns, servicing equated monthly installments becomes unsustainable, prompting Axis Bank to initiate recovery protocols under RBI prudential guidelines.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During the initial ninety days of delinquency, overdue accounts progress through Special Mention Account brackets: SMA-0 (1-30 days), SMA-1 (31-60 days), and SMA-2 (61-90 days). Breaching the 90-day mark triggers mandatory Non-Performing Asset (NPA) classification. This obligates Axis Bank to stop ledger interest accruals and set aside 15% to 25% loan-loss provisions from its Tier-1 core capital reserves.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Because unsecured personal loans carry no underlying mortgage or pledged collateral, Axis Bank cannot invoke summary asset seizure under the SARFAESI Act of 2002. Protracted civil litigation or arbitration is expensive and commercially uncertain. Consequently, Axis Bank&apos;s Circle Stressed Asset Desks are strongly incentivized to approve One-Time Settlements (OTS) to release locked capital reserves and clean toxic non-performing assets off quarterly balance sheets.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Principal vs. Inflated Penal Charges
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an Axis personal loan defaults, automated banking software inflates the ledger balance by compounding penal interest at 24% to 36% per annum, imposing NACH bounce charges of ₹500 plus GST per presentation, and adding late payment surcharges. Over several months, these artificial non-statutory additions inflate the gross claim by 30% to 45% above the genuine unamortized principal.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A skilled debt resolution strategy begins with a forensic ledger audit to strip away these inflated charges. Axis Bank credit committees are empowered to grant a 100% waiver on accrued penal interest, bounce charges, and administrative fees. When backed by verified financial hardship records, the bank routinely sanctions a 40% to 55% principal haircut, establishing a realistic compromise settlement.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Axis Bank 180-Day NPA Settlement Breakdown</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹12 Lakh Baseline Claim</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Financial Component</th>
                        <th className="p-3">Pre-Settlement Ledger</th>
                        <th className="p-3">Axis Credit Committee Waiver</th>
                        <th className="p-3 text-right">Final Payable Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Unamortized Principal Balance</td>
                        <td className="p-3">₹8,50,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">40% Core Haircut (₹3,40,000)</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹5,10,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Accrued Regular &amp; Penal Interest</td>
                        <td className="p-3">₹2,90,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Complete Waiver</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹0</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Late Surcharges &amp; NACH Bounces</td>
                        <td className="p-3">₹60,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Administrative Waiver</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹0</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Compromise Evaluation</td>
                        <td className="p-3 text-rose-600">₹12,00,000</td>
                        <td className="p-3 text-emerald-700">₹6,90,000 Total Relief (57.5% Savings)</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹5,10,000 Final OTS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Strategic Assessment</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparative Analysis: Axis Bank Debt Resolution Pathways
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers facing acute debt distress with Axis Bank must evaluate their options objectively. While loan restructuring or tenure extensions merely postpone insolvency by compounding total interest burdens without principal relief, unmanaged default invites aggressive agency harassment and legal exposure. The matrix below demonstrates how an institutional One-Time Settlement provides superior financial relief and complete legal finality.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Resolution Mechanism</th>
                      <th className="p-3">Financial Relief</th>
                      <th className="p-3">Legal Protection</th>
                      <th className="p-3">CIBIL Bureau Remark</th>
                      <th className="p-3">Standard Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="p-3 text-emerald-600 font-semibold">40% to 55% Total Reduction</td>
                      <td className="p-3">Complete Discharge &amp; Notice Withdrawal</td>
                      <td className="p-3 font-mono text-[11px]">Settled / Zero Balance</td>
                      <td className="p-3">30 to 60 Days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Tenor Restructuring</td>
                      <td className="p-3 text-amber-600">0% Haircut (Higher Cumulative Interest)</td>
                      <td className="p-3">Conditional upon Strict Servicing</td>
                      <td className="p-3 font-mono text-[11px]">Restructured Account</td>
                      <td className="p-3">45 to 90 Days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Civil Court Litigation</td>
                      <td className="p-3 text-rose-600">Heavy Legal &amp; Defense Costs</td>
                      <td className="p-3">Adversarial Judicial Decrees</td>
                      <td className="p-3 font-mono text-[11px]">Suit Filed / Wilful Default</td>
                      <td className="p-3">2 to 5 Years</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">National Lok Adalat</td>
                      <td className="p-3 text-emerald-600">35% to 50% Mutual Compromise</td>
                      <td className="p-3">Section 21 Non-Appealable Decree</td>
                      <td className="p-3 font-mono text-[11px]">Settled in Lok Adalat</td>
                      <td className="p-3">Sitting Date Basis</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Unmanaged Default</td>
                      <td className="p-3 text-rose-600">Accelerated Penal Compounding</td>
                      <td className="p-3 text-rose-600">Section 25 / Section 138 Warrants</td>
                      <td className="p-3 font-mono text-[11px] text-rose-600">Written Off / Default</td>
                      <td className="p-3">Indefinite Distress</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Scoring Mechanics, Algorithms &amp; Score Rehabilitation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                TransUnion CIBIL and peer credit bureaus evaluate creditworthiness using five mathematical pillars: 35% Payment History, 30% Credit Utilization, 15% Credit Age, 10% Credit Mix, and 10% Inquiries. Delinquency on an Axis personal loan triggers progressive 30, 60, and 90+ Days Past Due reporting, eroding the payment history pillar and reducing scores by 120 to 180 points.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Executing an authorized settlement prompts Axis Bank to update the bureau status to &quot;Settled&quot; with zero outstanding balance. While this remark reflects past compromise, it halts the recurring accumulation of monthly DPD marks and terminates active debt recovery flags.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Rebuilding a 750+ credit score is achievable over 18 to 24 months through disciplined usage of a secured credit card against a fixed deposit, keeping credit utilization below 30%. Furthermore, under Section 21 of CICRA 2005, borrowers can later pay the waived variance to convert &quot;Settled&quot; into &quot;Closed&quot;, restoring full institutional credit eligibility.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Axis Bank Personal Loan Settlement Roadmap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This dedicated visual flowchart details the six institutional phases necessary to transition an overdue Axis Bank personal loan from aggressive recovery agency harassment into an officially sanctioned, legally binding compromise settlement.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/axis-bank-personal-loan-settlement.jpg"
                    alt="Axis Bank Personal Loan Settlement Roadmap and 6-Stage Process Flowchart"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Institutional Resolution Architecture • RBI Compliant</span>
                  <a
                    href="/images/infographics/axis-bank-personal-loan-settlement.jpg"
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
                6. Six-Stage SOP: Negotiating Axis Bank Personal Loan Settlements
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Navigating Axis Bank&apos;s corporate settlement hierarchy requires institutional protocol. Informal discussions with outsourced telecallers lead to wasted token payments without legal closure. Follow this six-stage framework to secure an authorized settlement directly from the bank.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Forensic Loan Account Audit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Analyze the complete loan statement from inception. Isolate initial principal disbursed, calculate actual repayments cleared, unbundle 24% to 36% penal interest, and strip away invalid bounce levies to establish the genuine net principal baseline.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Comprehensive Hardship Dossier Compilation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Assemble verifiable documentation proving bona fide economic distress. Compile corporate layoff letters, medical discharge summaries, reduced cashflow records, or audited business loss accounts to establish non-wilful inability to repay.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Direct Representation to Axis Circle Debt Resolution Desk
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Bypass outsourced recovery vendors by serving a formal legal representation to the Axis Regional Stressed Asset Desk and Principal Nodal Officer, asserting statutory consumer protections under RBI guidelines.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Bilateral Credit Committee Negotiations
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Engage in structured compromise dialogue with Axis zonal credit managers. Leverage the absence of mortgaged collateral and NPA provisioning pressures to negotiate 100% penal waiver and a 40% to 55% principal haircut.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Settlement Sanction Letter Legal Vetting
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Examine the sanction letter thoroughly. Verify that it is printed on official Axis Bank letterhead, originates from an authorized @axisbank.com email, specifies payment tranches, and covenants notice withdrawal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Direct Loan Remittance &amp; No Dues Certificate Procurement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Deposit the sanctioned settlement amount directly into your Axis loan account via traceable RTGS or NEFT. Retain stamped bank challans, verify ledger zeroing, and obtain the formal No Dues Certificate within 30 to 45 business days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Notice Defense &amp; Borrower Legal Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                As delinquency approaches 90 to 120 days, Axis Bank legal retainers issue statutory demand notices. Understanding your legal rights under these notices prevents panic, halts intimidation, and establishes ground for an amicable compromise.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Section 25 PSSA NACH Mandate Notice</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Issued under the Payment and Settlement Systems Act of 2007 when electronic auto-debits bounce due to insufficient funds. While carrying quasi-criminal provisions similar to cheque bounce laws, serving a formal legal reply within 30 days establishing genuine financial hardship successfully refutes fraudulent intent and redirects the dispute toward an amicable OTS settlement.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Section 138 Negotiable Instruments Act</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dispatched if physical security cheques collected during loan disbursal are presented and dishonored. A legal reply must be served through counsel within 15 days of notice receipt, establishing that cheques were deposited as conditional collateral rather than in discharge of a determined debt liability, barring summary magistrate proceedings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Arbitration Section 21 Jurisdictional Challenge</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Axis Bank frequently invokes arbitration under Section 21 of the 1996 Act. Under Supreme Court landmark rulings in Perkins Eastman and TRF Ltd, a lender cannot unilaterally appoint a sole arbitrator. Borrowers can file formal jurisdictional objections under Section 12(5) and Section 16, halting ex-parte proceedings and driving the bank to compromise.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>DRT Section 19 &amp; RBI Fair Practices Code</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Debts Recovery Tribunals possess jurisdiction exclusively over debt claims exceeding ₹20 Lakhs under the Recovery of Debts and Bankruptcy Act. For all loan amounts, the RBI Fair Practices Code strictly prohibits recovery agents from calling before 8:00 AM or after 7:00 PM, contacting family or employers, or making unannounced visits.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Three-Tier Escalation Matrix for Axis Bank Grievances
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When third-party recovery agencies violate regulatory conduct guidelines, or local branch officials refuse to entertain legitimate financial hardship representations, borrowers must initiate formal escalations through Axis Bank&apos;s internal grievance redressal mechanism and regulatory oversight channels.
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
                      <td className="p-3">Axis Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Investigation into improper recovery agency conduct, disputed penal interest charges, and initial settlement review.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Mumbai HQ)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Direct intervention on persistent recovery agent harassment, review of disputed ledger accounting, and zonal OTS escalations.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Legally binding regulatory adjudication through cms.rbi.org.in for severe fair practices code infractions and predatory debt recovery practices.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Resolution Timeline: From Default to NDC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The lifecycle of an Axis Bank personal loan default progresses through specific regulatory phases. Identifying where your delinquent loan sits along this timeline enables you to pinpoint the optimal strategic window for initiating settlement negotiations and securing maximum principal waivers.
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
                      <td className="p-3">Automated SMS alerts, email reminders, and soft telephonic collection calls.</td>
                      <td className="p-3">Assess cashflow viability; avoid taking fresh high-interest short-term debt.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Escalated telecaller outreach and preliminary loan demand notices.</td>
                      <td className="p-3">Compile authenticated medical, employment, and income hardship records.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Final pre-NPA warnings and initial recovery agency allocation.</td>
                      <td className="p-3">Assert RBI Fair Practices Code rights against abusive third-party telecallers.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Classification</td>
                      <td className="p-3">Tier-1 capital provisioning triggered; file transferred to Stressed Asset Desk.</td>
                      <td className="p-3">Conduct forensic account audit and engage seasoned debt resolution specialists.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Prime OTS Window</td>
                      <td className="p-3">Issuance of Section 25 PSSA NACH bounce notices or arbitration demand letters.</td>
                      <td className="p-3 font-bold text-slate-900">Execute bilateral compromise negotiations for a 40% to 55% waiver.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 and Beyond</td>
                      <td className="p-3 font-mono text-[11px]">Write-off / ARC Sale</td>
                      <td className="p-3">Ex-parte arbitral hearings or portfolio assignment to Asset Reconstruction Companies.</td>
                      <td className="p-3">Remit sanctioned settlement tranches directly and secure official NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Complex Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Handling Complex Scenarios: Express Loans, Layoffs &amp; ARCs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Debt distress rarely follows a uniform pattern. Standard collection approaches fail to address complex multi-product liabilities and sudden economic shocks. Below are strategic resolution tactics for specialized loan scenarios.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Multi-Product Exposure &amp; Cross-Default
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers holding an Axis personal loan alongside express loans and credit cards face cross-default acceleration. Strategic resolution consolidates all unsecured facilities into a unified dossier, negotiating a collective compromise to avoid piecemeal litigation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Corporate Layoffs &amp; Income Loss
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Salaried corporate employees often face immediate default after sudden tech restructuring or layoffs. Submitting separation letters and bank statements proving depleted inflows provides objective proof that accelerates credit committee approval for deep haircuts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Business Proprietorship Cashflow Deficits
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Entrepreneurs who used personal loans to fund operations during cashflow crunches can demonstrate commercial insolvency through audited accounts and GST returns, proving that default stems from legitimate commercial distress rather than diversion.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Asset Reconstruction Company (ARC) Assignments
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When Axis Bank assigns delinquent portfolios to ARCs like Phoenix or Prudent under SARFAESI Section 5, recovery rights transfer. Because ARCs acquire bad debt at steep discounts, seasoned negotiators can secure settlements with waivers exceeding 60% to 70%.
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
                Frequently Asked Questions About Axis Bank Personal Loan Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, legally verified answers addressing the most common borrower inquiries on Axis Bank&apos;s personal loan settlement process, waiver expectations, collection agent guidelines, and credit score rehabilitation.
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
                Official Regulatory References &amp; Legal Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Reserve Bank of India:</strong> Master Direction on Fair Practices Code for Non-Banking Financial Companies and Commercial Banks (Updated 2026).
                </li>
                <li>
                  <strong>Payment and Settlement Systems Act, 2007:</strong> Section 25, Statutory Framework Governing Dishonour of Electronic Funds Transfer Mandates.
                </li>
                <li>
                  <strong>Negotiable Instruments Act, 1881:</strong> Section 138, Legal Provisions Regarding Dishonour of Cheques for Legally Enforceable Debt Discharge.
                </li>
                <li>
                  <strong>Arbitration and Conciliation Act, 1996:</strong> Sections 12(5), 16, and 21, Jurisdictional Ineligibility of Unilateral Arbitrators and Supreme Court Rulings (Perkins Eastman / TRF Ltd).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Section 21, Standards for Accuracy of Credit Information and Bureau Dispute Rectification Protocols.
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
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Defense
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice for Loan
                  </Link>
                  <Link href="/lok-adalat-personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Lok Adalat Loan Settlement
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Protection
                  </Link>
                  <Link href="/bank-recovery-case-in-court" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Court Recovery Cases
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
                Expert in banking compliance, Axis Bank NPA resolution, recovery defense, and compromise negotiations with extensive experience representing stressed retail borrowers before banking ombudsmen and credit committees.
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
                  CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Axis Bank Loan Notice or Recovery Threats?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior debt resolution specialists halt recovery agent harassment, respond to legal notices, and negotiate up to 55% waivers directly with Axis Bank&apos;s Circle Debt Resolution Desk.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Request Free Settlement Evaluation
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
                  <span>Direct Bank Settlement • 100% RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked resolution fee structure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Account Remittance:</strong> No middleman fund handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Complete RBI Compliance:</strong> Strict Fair Practices enforcement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified No Dues Certificate:</strong> Official bank closure guarantee.</span>
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
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Arbitration Notice for Personal Loan
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Challenge unilateral arbitrator guide &rarr;</span>
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
