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
  Landmark,
  FileCheck,
  Percent,
  ShieldAlert
} from 'lucide-react';

export default function CanISettleLoanBeforeNpaClient() {
  const [activeId, setActiveId] = useState<string>('executive-summary');
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
    { id: 'executive-summary', label: 'Executive Brief & Crux' },
    { id: 'debt-economics-sma-framework', label: '1. SMA Framework & Bank Economics' },
    { id: 'financial-breakdown-settlement-math', label: '2. Pre-NPA Settlement Math' },
    { id: 'resolution-comparison-matrix', label: '3. Resolution Comparison Matrix' },
    { id: 'technical-cibil-scoring-math', label: '4. CIBIL Trajectory & CICRA 2005' },
    { id: 'infographic-overview', label: 'Visual Pre-NPA Infographic' },
    { id: 'step-by-step-pre-npa-sop', label: '5. 6-Stage Pre-NPA Resolution SOP' },
    { id: 'statutory-notice-defense', label: '6. Pre-NPA Legal Notice Defense' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Regulatory Escalation' },
    { id: 'chronological-timeline-milestones', label: '8. 180-Day Delinquency Trajectory' },
    { id: 'specialized-loan-scenarios', label: '9. Complex Borrower Hardship Cases' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authority' }
  ];

  const faqs = [
    {
      q: 'Can I settle my loan before it officially becomes a Non-Performing Asset (NPA)?',
      a: 'Yes, borrowers can negotiate a pre-NPA compromise settlement during the SMA-1 or SMA-2 stages (30 to 89 days overdue), provided they can substantiate exceptional financial hardship such as job loss, critical illness, or business failure.'
    },
    {
      q: 'Why are banks generally reluctant to offer a One-Time Settlement (OTS) before 90 days?',
      a: 'Prior to 90 days, the loan is classified as a Standard Asset, meaning the bank has not allocated loan loss provisions. Approving an OTS forces an immediate write-off and provisioning hit on their profit and loss statement.'
    },
    {
      q: 'What is the difference between loan restructuring and pre-NPA settlement?',
      a: 'Loan restructuring modifies repayment terms, such as extending the loan tenure or reducing EMIs without debt forgiveness, whereas pre-NPA settlement forgives a portion of the principal and waives penal charges for a lump-sum payoff.'
    },
    {
      q: 'Will a pre-NPA settlement damage my CIBIL score?',
      a: 'Yes. When a loan is settled before or after NPA, credit bureaus report the account status as Settled rather than Closed, which lowers your CIBIL score. However, it halts compounding default penalties and sets the outstanding balance to zero.'
    },
    {
      q: 'What documents are required to prove eligibility for a pre-NPA compromise settlement?',
      a: 'Lenders require formal hardship documentation, including termination letters, medical treatment records, bank statements demonstrating severe liquidity shortfalls, audited profit and loss statements for businesses, and an itemized financial distress affidavit.'
    },
    {
      q: 'Can I negotiate a waiver of penal interest during the SMA-1 and SMA-2 stages?',
      a: 'Yes. Under RBI Fair Lending Practices directives, banks have the discretion to waive accumulated penal charges, bounce fees, and late payment penalties when executing a pre-NPA resolution.'
    },
    {
      q: 'How much haircut or discount can I expect during a pre-NPA loan settlement?',
      a: 'Pre-NPA settlements typically yield a 25% to 45% discount on the principal balance along with a 100% penal interest waiver. Deeper haircuts (50%+) are generally easier to secure once the loan crosses 90 days into NPA.'
    },
    {
      q: 'Can a bank file legal cases under Section 138 or Section 25 PSSA before 90 days?',
      a: 'Yes. If an EMI cheque or NACH auto-debit mandate bounces at any point, the bank can issue statutory legal notices under Section 138 of the NI Act or Section 25 of the PSSA, even while the account is in SMA status.'
    },
    {
      q: 'What should I check in the Pre-NPA Settlement Sanction Letter before paying?',
      a: 'Ensure the letter is on official bank letterhead, explicitly details the exact compromise settlement amount, payment deadlines, a covenant confirming full and final debt discharge, and a commitment to issue a No Dues Certificate.'
    },
    {
      q: 'How can I rebuild my CIBIL score after completing a pre-NPA settlement?',
      a: 'Obtain the stamped No Dues Certificate, verify that the lender updates the bureau balance to zero under Section 21 of CICRA, maintain clean payment records on remaining credit, and use a secured fixed-deposit credit card to restore your score above 750 within 12 to 24 months.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-16 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-blue-100 text-xs font-bold tracking-wide uppercase mb-4 border border-white/15">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
            <span>STATUTORY DEBT RESOLUTION &amp; PRE-NPA COMPROMISE FRAMEWORK</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight leading-tight">
            Can I Settle Loan Before NPA? (SMA Stages &amp; Settlement Rules)
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Borrowers experiencing severe financial disruption often wonder if they can settle their loan during the early 30 to 89 day delinquency window. While retail bank branches routinely push for standard restructuring, board-approved compromise policies empower credit committees to sanction pre-NPA settlements under exceptional hardship.
          </p>

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              <span>Explore Pre-NPA Resolution Options</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP COMPONENT */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT */}
      <div className="w-full max-w-[1720px] mx-auto px-4 md:px-8 py-8 md:py-10">
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
                  <span>Pre-NPA Regulatory Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by RBI Prudential Resolution Directives, SARFAESI Act &amp; CICRA 2005.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-7 md:space-y-8 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="executive-summary"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 shadow-xs space-y-3.5 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: PRE-NPA LOAN SETTLEMENT PROTOCOLS</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-normal">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Standard Asset Classification:</strong> Overdue accounts (1-89 DPD) remain standard SMA assets before 90-day NPA triggers.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Branch Approval Resistance:</strong> Retail branches push restructuring because early OTS discounts hit branch profit margins.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Compassionate Hardship Relief:</strong> Credit Committees have discretionary powers to settle early for illness, disability, or job loss.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Restructuring vs. Compromise:</strong> Restructure for temporary cash crunch; negotiate OTS if income loss is permanent.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Pre-NPA Settlement Targets:</strong> Expect 25% to 45% principal reduction alongside a 100% waiver of accrued penal interest.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">SARFAESI Section 31(g) Immunity:</strong> Unsecured loans and credit cards cannot be subjected to property attachment.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Credit Bureau Score Protection:</strong> Early settlement caps DPD trail and enables credit score rebuilding back to 750+ in 12-24 months.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Direct Committee Escalation:</strong> Bypass tele-callers and present your hardship file directly to the Stressed Assets Branch.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: DEBT ECONOMICS & PRE-NPA DYNAMICS */}
            <section id="debt-economics-sma-framework" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  1. Pre-NPA Economics &amp; The Special Mention Account (SMA) Framework
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Understanding whether a loan can be settled prior to becoming a Non-Performing Asset requires a deep look into Indian banking accounting mechanisms and Reserve Bank of India prudential guidelines. When an equated monthly installment (EMI) or credit card minimum amount due remains unpaid on its due date, the account does not immediately drop into default status. Instead, the Reserve Bank of India mandates a progressive classification framework known as Special Mention Accounts (SMA).
              </p>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Under the RBI Prudential Framework for Resolution of Stressed Assets, delinquencies are categorized into three distinct sub-stages: SMA-0 for balances overdue between 1 and 30 days, SMA-1 for accounts overdue between 31 and 60 days, and SMA-2 for accounts overdue between 61 and 90 days. Throughout these initial 89 days, the credit facility remains classified on the commercial bank balance sheet as a Standard Asset. Because the account is standard, the bank is only required to maintain a nominal standard asset capital provision of 0.40% to 1.00%, meaning the lender has not yet recognized any formal financial loss.
              </p>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                This accounting reality explains why branch managers and recovery call centers vehemently insist that loan settlement is legally impossible before 90 days. If a bank executes a compromise settlement during the SMA stage, banking regulations require the immediate reclassification of the account as a restructured or non-performing credit, compelling the institution to write off the agreed discount directly against its quarterly operating profits. Consequently, frontline bank staff are instructed to reject pre-NPA settlement requests and offer tenor extensions, EMI moratoriums, or loan rescheduling instead.
              </p>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                However, board-approved compromise settlement policies across scheduled commercial banks and leading Non-Banking Financial Companies (NBFCs) contain explicit carve-out clauses. When a borrower faces insurmountable hardship, such as sudden involuntary job loss, terminal medical diagnosis, permanent physical disability, or business liquidation, senior credit committees have the discretionary authority to approve a pre-NPA compromise settlement. This allows the bank to avoid extensive legal expenditures, bypass recovery agency commissions, and recover maximum capital before full default sets in.
              </p>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Percent className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  2. Financial Breakdown: Principal Unbundling &amp; Pre-NPA Settlement Math
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                During the 30 to 89 day delinquency window, automated banking software aggressively compounds the borrower outstanding balance. Lenders levy penal interest rates ranging from 24% to 36% per annum, repeated NACH bounce penalties, late payment fees, and administrative charges. Under the Reserve Bank of India circular on Fair Lending Practice and Penal Charges in Loan Accounts, banks are expressly prohibited from capitalizing penal charges into the principal loan balance or compounding interest on penalties.
              </p>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                A structured forensic audit of the loan ledger unbundles these artificial penalty layers, establishing the exact net principal owed on the date of initial default. In a pre-NPA compromise negotiation, the settlement baseline is calculated strictly against this unbundled principal. Because the lender has not yet absorbed heavy credit provisioning costs, pre-NPA settlements typically target a 25% to 45% discount on the principal balance alongside a mandatory 100% complete waiver of all penal interest, bounce penalties, and overdue fees.
              </p>

              {/* Calculation Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3.5">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Representative ₹10 Lakh Unsecured Loan Pre-NPA Settlement Ledger
                    </h3>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                    SMA-2 Model
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block">Sanctioned Principal</span>
                    <span className="text-sm font-extrabold text-slate-900">₹10,00,000</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block">Base Principal at Default</span>
                    <span className="text-sm font-extrabold text-slate-900">₹7,80,000</span>
                  </div>

                  <div className="p-3 rounded-xl bg-red-50/70 border border-red-100">
                    <span className="text-red-600 block">Demanded Sum (with Penalties)</span>
                    <span className="text-sm font-extrabold text-red-700">₹9,45,000</span>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100">
                    <span className="text-amber-700 block">Penal Interest Waived</span>
                    <span className="text-sm font-extrabold text-amber-800">100% Waiver (₹1.65L)</span>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                    <span className="text-emerald-700 block">Negotiated Pre-NPA OTS</span>
                    <span className="text-sm font-extrabold text-emerald-800">₹4,68,000 (40% Off)</span>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                    <span className="text-[#1886ff] block">Total Borrower Savings</span>
                    <span className="text-sm font-extrabold text-blue-900">₹4,77,000 (50.4%)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="resolution-comparison-matrix" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  3. Resolution Matrix: Evaluating Pre-NPA vs. Post-NPA Pathways
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Navigating an impending default requires a thorough strategic evaluation of financial trade-offs, legal risks, credit bureau implications, and long-term borrowing capacity across all available debt resolution mechanisms:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left border-collapse text-xs divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 min-w-[140px]">Pathway</th>
                      <th className="p-3 min-w-[140px]">Principal Haircut</th>
                      <th className="p-3 min-w-[140px]">Legal Notice Risk</th>
                      <th className="p-3 min-w-[140px]">CIBIL Reporting Status</th>
                      <th className="p-3 min-w-[130px]">Best Suited For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-[#1886ff]">Pre-NPA Hardship OTS (30-89 DPD)</td>
                      <td className="p-3">25% to 45% principal reduction; 100% penal waiver.</td>
                      <td className="p-3">Pre-empts arbitration and court proceedings entirely.</td>
                      <td className="p-3">Marked Settled; prevents 90+ DPD severe delinquency trail.</td>
                      <td className="p-3 font-semibold text-emerald-700">Permanent income loss or major illness.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Pre-NPA Restructuring / Rescheduling</td>
                      <td className="p-3">0% discount; total interest increases due to extended tenure.</td>
                      <td className="p-3">Zero legal risk as long as restructured EMIs are met.</td>
                      <td className="p-3">Marked Restructured; score dips mildly, recovers quickly.</td>
                      <td className="p-3 font-semibold text-blue-700">Temporary cash crunch with stable job.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Post-90-Day NPA Standard OTS</td>
                      <td className="p-3">40% to 55% principal reduction; 100% penal waiver.</td>
                      <td className="p-3">High risk of Section 138 NI Act and Section 25 PSSA summons.</td>
                      <td className="p-3">Marked Settled or Post-Write-off Settled after deep score drop.</td>
                      <td className="p-3 font-semibold text-amber-700">Inability to arrange lump sum before Day 90.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Lok Adalat Pre-Litigation Conciliation</td>
                      <td className="p-3">15% to 30% modest principal discount on small loans.</td>
                      <td className="p-3">Non-adversarial, enforceable consent decree under NALSA.</td>
                      <td className="p-3">Marked Settled via Lok Adalat on bureau files.</td>
                      <td className="p-3 font-semibold text-slate-700">Borrowers seeking court-backed settlement terms.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Continuous Default / Inaction</td>
                      <td className="p-3">No relief; debt spirals with 36% compound penal fees.</td>
                      <td className="p-3">Severe: summary suits, warrant risk, and recovery harassment.</td>
                      <td className="p-3">Reported as Wilful Default or Suit Filed (score under 550).</td>
                      <td className="p-3 font-semibold text-red-600">Strictly avoid at all costs.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: TECHNICAL CIBIL ALGORITHM & SCORING MATH */}
            <section id="technical-cibil-scoring-math" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  4. Technical CIBIL Algorithm &amp; Section 21 CICRA Credit Restoration
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                To understand the bureau consequences of settling a loan before it becomes an NPA, one must examine the proprietary scoring algorithms used by TransUnion CIBIL, Experian, Equifax, and CRIF High Mark. Credit scores are computed across five primary weighted pillars: Payment History (35%), Credit Exposure and Utilization (30%), Credit History Duration (15%), Asset Mix across secured and unsecured facilities (10%), and Recent Credit Inquiry Velocity (10%).
              </p>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                When a borrower defaults into SMA-1 (31 to 60 DPD) and SMA-2 (61 to 89 DPD), the payment history sub-score drops precipitously. However, an account that is settled at the pre-NPA stage avoids the catastrophic 90+ DPD NPA flag, which triggers severe algorithmic penalties and automated credit blacklisting across member banks. While a pre-NPA compromise will still reflect a Settled status on the bureau file, it halts ongoing default reporting, sets the current balance to zero, and terminates the continuous negative accrual cycle.
              </p>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), lending institutions are legally mandated to update the revised zero-balance status with all four credit bureaus within 30 days of receiving the settlement remittance. Once the No Dues Certificate is logged, borrowers can initiate a structured credit rehabilitation strategy by maintaining flawless repayment on active accounts, utilizing a secured fixed-deposit backed credit card with utilization under 30%, and gradually raising their CIBIL score back above 750 within 12 to 24 months.
              </p>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Visual Blueprint: Pre-NPA Resolution &amp; SMA Decision Framework
                </h2>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 sm:p-5 overflow-hidden space-y-3">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                  <Image
                    src="/images/infographics/can-i-settle-loan-before-npa.jpg"
                    alt="Can I Settle Loan Before NPA Decision Blueprint and SMA Framework"
                    fill
                    sizes="(max-width: 1200px) 100vw, 900px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Authoritative visual workflow comparing SMA stages, provisioning triggers, and pre-NPA compromise resolution protocols.</span>
                  <a
                    href="/images/infographics/can-i-settle-loan-before-npa.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-bold hover:underline inline-flex items-center gap-1 flex-shrink-0"
                  >
                    <span>High-Res</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-pre-npa-sop" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  5. Step-by-Step SOP: The 6-Stage Pre-NPA Settlement Protocol
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Executing a successful compromise settlement before an account reaches NPA status requires strict adherence to institutional protocols and documentary rigor:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">01</span>
                    <h3 className="font-bold text-slate-900 text-sm">Forensic Account &amp; Ledger Audit</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Retrieve the complete statement of accounts to isolate authentic principal debt from compounding penal interest, late fees, and bounce charges, establishing an undisputed baseline figure.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">02</span>
                    <h3 className="font-bold text-slate-900 text-sm">Distress Dossier &amp; Evidence Assembly</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Compile irrefutable documentary evidence of financial hardship, including termination letters, income loss declarations, hospital discharge papers, or business loss audits to disprove wilful default.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">03</span>
                    <h3 className="font-bold text-slate-900 text-sm">Senior Credit Committee Representation</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bypass tele-calling collection agents and formally submit the hardship proposal directly to the Bank Circle Head, Zonal Credit Committee, or Stressed Assets Resolution Branch (SARB).
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">04</span>
                    <h3 className="font-bold text-slate-900 text-sm">Bilateral Haircut Structuring</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Negotiate a realistic compromise settlement ranging between 25% and 45% discount on the principal balance alongside a complete 100% waiver of accrued penalties and administrative charges.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">05</span>
                    <h3 className="font-bold text-slate-900 text-sm">Sanction Letter Legal Vetting</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Verify that the formal settlement sanction letter is issued on official bank letterhead, contains the exact agreed figure, specifies clean payment dates, and waives all residual legal claims.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">06</span>
                    <h3 className="font-bold text-slate-900 text-sm">Remittance &amp; NDC Issuance</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Deposit funds strictly into your designated loan account, secure an official receipt, obtain the stamped No Dues Certificate, and verify zero-balance reporting across all credit bureaus.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & LEGAL RIGHTS */}
            <section id="statutory-notice-defense" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Gavel className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  6. Statutory Notice Defense &amp; Borrower Protections During SMA Stages
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Even before an account crosses 90 days into NPA, lenders may initiate legal notices following EMI instrument bounces. Understanding your statutory defenses under Indian jurisprudence ensures you maintain maximum leverage during compromise discussions:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">Section 25 PSSA: Electronic Mandate Recall</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When automated NACH debits bounce, banks frequently issue demand notices under Section 25 of the Payment and Settlement Systems Act, 2007. Borrowers have the statutory right to formally revoke NACH mandate consent in writing, eliminating criminal mens rea and restricting future disputes to civil mediation.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <Gavel className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">Section 138 NI Act: Pre-Trial Settlement Rights</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If security cheques bounce, lenders issue a 15-day statutory notice under Section 138 of the Negotiable Instruments Act, 1881. Because cheque bounce offenses are compoundable under Section 147 of the Act, entering into a formal pre-NPA compromise settlement automatically dissolves the legal cause of action.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">Arbitration: Anti-Unilateral Arbitrator Defense</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders cannot unilaterally appoint a sole arbitrator under Section 21 of the Arbitration and Conciliation Act, 1996. Landmark Supreme Court rulings in TRF Ltd. and Perkins Eastman Architects strictly invalidate unilateral arbitral appointments, rendering unconsented arbitration proceedings void ab initio.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">SARFAESI Immunity &amp; Fair Practices Code</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 31(g) of the SARFAESI Act, unsecured personal loans and credit cards are strictly exempt from summary asset seizure. Furthermore, the RBI Fair Practices Code strictly prohibits recovery agents from contacting relatives, visiting workplaces, or using coercive language during the SMA window.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER ESCALATION MATRIX */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  7. 3-Tier Grievance &amp; Regulatory Escalation Architecture
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                If branch personnel or outsourced collection agencies refuse to accept your hardship documentation or engage in illegal harassment, you can invoke the structured statutory grievance hierarchy:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Level 1: 7-10 Days</span>
                  <h3 className="font-bold text-slate-900 text-sm">Principal Grievance Officer</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Submit a formal written petition to the bank Principal Grievance Redressal Officer (GRO) citing documented financial distress and demanding a pre-NPA compromise review.</p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Level 2: 14-21 Days</span>
                  <h3 className="font-bold text-slate-900 text-sm">Principal Nodal Officer</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Escalate unaddressed complaints to the Principal Nodal Officer (PNO) and Zonal Credit Committee to evaluate board-level compromise settlement parameters.</p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Level 3: 30 Days</span>
                  <h3 className="font-bold text-slate-900 text-sm">RBI Integrated Ombudsman</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">File a statutory complaint on the RBI CMS portal (cms.rbi.org.in) under the Reserve Bank - Integrated Ombudsman Scheme, 2021 for institutional unfair practices.</p>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-timeline-milestones" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  8. Chronological Timeline: The 180-Day Delinquency Trajectory
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Understanding the progressive milestones from the first missed payment to final account discharge clarifies the optimal window for pre-NPA settlement intervention:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left border-collapse text-xs divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 min-w-[120px]">Timeline Window</th>
                      <th className="p-3 min-w-[140px]">Asset Classification</th>
                      <th className="p-3 min-w-[180px]">Institutional Action</th>
                      <th className="p-3 min-w-[180px]">Recommended Borrower Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-[#1886ff]">Days 1 to 30</td>
                      <td className="p-3">SMA-0 Delinquency</td>
                      <td className="p-3">Automated payment reminders and internal relationship manager outreach.</td>
                      <td className="p-3">Conduct liquidity review; assess loan restructuring vs compromise OTS.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 31 to 60</td>
                      <td className="p-3">SMA-1 Classification</td>
                      <td className="p-3">Account transferred to internal collections; demand notices issued.</td>
                      <td className="p-3">Assemble hardship dossier; request formal pre-NPA settlement from credit head.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 61 to 90</td>
                      <td className="p-3">SMA-2 Critical Gate</td>
                      <td className="p-3">Outsourced agency pressure intensifies; legal notice drafting begins.</td>
                      <td className="p-3">Issue anti-harassment notice; negotiate 25% to 45% pre-NPA compromise terms.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 91 to 120</td>
                      <td className="p-3">NPA Status Triggered</td>
                      <td className="p-3">Bank allocates 15%+ capital provisions; file moved to SARB.</td>
                      <td className="p-3">Transition strategy to standard post-NPA OTS (target 40% to 55% haircut).</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 121 to 180</td>
                      <td className="p-3">OTS Sanction &amp; Closure</td>
                      <td className="p-3">Issuance of Settlement Sanction Letter and collection of compromise sum.</td>
                      <td className="p-3">Vet sanction covenants, remit funds directly, obtain stamped NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-loan-scenarios" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  9. Specialized Pre-NPA Hardship Scenarios &amp; Case Studies
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Every debt distress situation presents unique legal and financial constraints. Here is how pre-NPA settlement protocols apply across common real-world circumstances:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm">Sudden Corporate Layoffs &amp; Job Loss</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Salaried executives facing sudden retrenchment can present their severance statements, relieving letters, and depleted bank statements during the SMA-1 stage to negotiate a clean pre-NPA settlement and prevent protracted litigation.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm">Critical Medical Emergencies &amp; Disability</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers struck by catastrophic illness or permanent physical incapacitation can furnish diagnostic reports and treatment expenditures, triggering compassionate relief clauses under bank compromise policies for swift resolution.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm">MSME Working Capital &amp; Business Collapse</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Entrepreneurs dealing with cancelled commercial contracts or severe operating losses can submit audited financials to secure pre-NPA settlements on unsecured business credit lines while shielding personal assets under SARFAESI Section 31(g).
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm">Multi-Lender Portfolio Consolidation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When juggling multiple personal loans and credit cards across different banks in SMA-2 status, a coordinated multi-lender representation ensures available settlement liquidity is deployed efficiently before legal notices multiply.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: COMPANY PROFILE COMPONENT */}
            <div id="company-profile" className="scroll-target pt-1">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  10. Frequently Asked Questions: Pre-NPA Loan Settlements
                </h2>
              </div>

              <div className="space-y-2.5">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#1886ff] transition-colors text-xs sm:text-sm"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'transform rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="scroll-target space-y-3.5 pt-3 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  11. Statutory Citations &amp; Regulatory Authorities
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800"
                >
                  <span>RBI Master Directions</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800"
                >
                  <span>RBI Integrated Ombudsman</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800"
                >
                  <span>TransUnion CIBIL</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800"
                >
                  <span>India Code Legislation</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800"
                >
                  <span>NALSA Lok Adalat</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800"
                >
                  <span>National Cyber Crime Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-1.5">Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-1.5">
                  <Link href="/bank-demanding-full-payment-for-loan-closure" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Demanding Full Payment
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL After Settlement
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-4 sticky top-6">
            
            {/* Card 1: Author Bio Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-sm hover:bg-blue-200 transition-colors flex-shrink-0"
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
                Specialized in banking compliance, loan dispute resolution, and NPA compromise negotiations across Indian banking forums.
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
              className="rounded-3xl p-5 text-white text-center space-y-3.5 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-2.5 py-0.5 rounded-full inline-block">
                  100% CONFIDENTIAL PRE-NPA ADVISORY
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Facing Loan Stress Before 90 Days?
                </h3>
                <p className="text-blue-100 text-xs mt-1 leading-relaxed font-normal">
                  Our debt resolution experts represent your financial hardship directly to bank leadership to negotiate pre-NPA compromise settlements and halt aggressive recovery calls.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-2.5 px-4 rounded-full font-bold text-xs sm:text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Request Pre-NPA Settlement Review
              </Link>
              <div className="pt-1 flex flex-col items-center justify-center gap-1 text-[11px] text-blue-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-blue-200" />
                  <a href="tel:+918800226635" className="hover:underline font-bold text-white">
                    Call: +91-8800226635
                  </a>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-blue-300">
                  <Lock className="w-3 h-3" />
                  <span>Direct Bank Negotiation • RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2.5 text-xs">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-1.5 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Transparent, success-linked fee models.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> Zero third-party escrow or fund holding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> 100% lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Experienced debt resolution panel.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2.5 text-xs">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Related Legal Guides</h4>
              <div className="space-y-2">
                <Link
                  href="/bank-demanding-full-payment-for-loan-closure"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Demanding Full Payment for Loan Closure
                  </p>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">OTS strategy guide &rarr;</span>
                </Link>

                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice for Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">Notice reply blueprint &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Loan to Closed Status
                  </p>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">Credit repair blueprint &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
