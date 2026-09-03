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
  Check,
  Phone,
  AlertCircle,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  Sparkles,
  Gavel,
  Landmark,
  Calculator,
  Percent,
  ReceiptText,
  SplitSquareVertical
} from 'lucide-react';

export default function CanIPaySettlementAmountInEmiClient() {
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
    { id: 'quick-crux', label: 'Executive Summary & Crux' },
    { id: 'staged-settlement-economics', label: '1. Staged Debt Economics' },
    { id: 'installment-breakdown-math', label: '2. Multi-Tranche OTS Math' },
    { id: 'settlement-structure-matrix', label: '3. Resolution Options Matrix' },
    { id: 'cibil-algorithm-impact', label: '4. CIBIL Scoring & Tranche Impact' },
    { id: 'infographic-roadmap', label: 'Visual 6-Stage Roadmap' },
    { id: 'staged-settlement-sop', label: '5. 6-Stage SOP for Installment OTS' },
    { id: 'statutory-notice-defense', label: '6. Legal Rights & Notice Defense' },
    { id: 'three-tier-escalation', label: '7. 3-Tier Escalation Matrix' },
    { id: 'procedural-milestones', label: '8. Timelines & Milestone Tracking' },
    { id: 'specialized-tranche-scenarios', label: '9. Real-World Staged Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-citations', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can I pay a loan or credit card settlement amount in monthly EMI installments?',
      a: 'Yes. While banks prefer a lump-sum One-Time Settlement (OTS), credit committees routinely approve staged settlements payable in 2 to 6 monthly installments (tranches) for borrowers demonstrating genuine short-term cash-flow constraints.'
    },
    {
      q: 'How many monthly installments will banks typically allow for an OTS?',
      a: 'Commercial banks and NBFCs generally permit 2 to 4 monthly tranches for retail personal loans and credit cards. In exceptional hardship cases involving large balances, lenders may extend the installment schedule up to 6 months.'
    },
    {
      q: 'Is a down payment required when settling a loan in installments?',
      a: 'Yes. Most financial institutions require an upfront token down payment of 20% to 33% of the total agreed settlement sum to validate the settlement agreement and immediately suspend external recovery agency activity.'
    },
    {
      q: 'What happens if I miss or delay one installment during a staged settlement?',
      a: 'Standard settlement sanction letters contain a strict default revocation clause stating that a missed tranche automatically cancels the waiver discount, reinstates the full original debt, and forfeits prior installments as regular interest recovery.'
    },
    {
      q: 'How can I protect against automatic settlement cancellation if a payment is delayed?',
      a: 'Ensure your legal representative negotiates a written 7 to 15 day grace period clause in the sanction letter and maintains active written communication with the bank Nodal Officer before any scheduled tranche due date.'
    },
    {
      q: 'Can recovery agents call or visit me while I am actively paying my settlement EMIs?',
      a: 'No. Under RBI Fair Practices Code, once a formal settlement sanction letter is executed and the initial tranche is paid, all recovery agent harassment, phone calls, and residential visits must cease immediately.'
    },
    {
      q: 'When does the bank issue the official No Dues Certificate (NDC) for an installment settlement?',
      a: "The bank will issue the official No Dues Certificate (NDC) or No Objection Certificate (NOC) only after the final installment tranche has cleared and reflected in the bank's core banking system, typically within 15 to 30 days."
    },
    {
      q: 'Does paying a settlement in EMIs affect my CIBIL score differently than a lump-sum OTS?',
      a: "No. Both structured tranche settlements and lump-sum settlements reflect the same final status of 'Settled' on your credit report. However, staged settlements keep the account marked in default until the final tranche is cleared."
    },
    {
      q: 'Can I convert my settled account status to \'Closed\' after completing all EMI tranches?',
      a: "Yes. Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), you can subsequently remit the waived balance to obtain a full closure certificate and update your credit bureau remark to 'Closed'."
    },
    {
      q: 'What essential clauses must be verified in a staged settlement sanction letter?',
      a: 'The letter must be on official bank letterhead signed by an authorized manager, specifying exact tranche amounts, due dates, a 100% penal interest waiver, direct bank account remittance details, and an unconditional NDC commitment upon final clearance.'
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider mb-3">
            <SplitSquareVertical className="w-3.5 h-3.5 text-blue-200" />
            <span>Structured Multi-Tranche Debt Resolution</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can I Pay Settlement Amount in EMI? Staged OTS Guide
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Discover how to structure a One-Time Settlement into 2 to 6 monthly installment tranches. Learn how to negotiate staged payout clauses, prevent automatic discount cancellation upon temporary payment delay, manage initial down payments, and secure your authentic No Dues Certificate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Need Installment Settlement? Speak with Senior Advisors</span>
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
                  <span>Borrower Protections</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Fair Practices Code, PSSA §25, NI Act §138 &amp; CICRA Framework.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 shadow-xs space-y-3 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: PAYING SETTLEMENT IN MONTHLY INSTALLMENTS</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-normal">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Staged Settlement Reality:</strong> Lenders routinely approve OTS payouts in 2 to 6 monthly tranches for borrowers demonstrating verified cash-flow hardship.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Token Down Payment:</strong> Credit committees require an upfront commitment payment of 20% to 33% upon sanction letter execution.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Revocation Protection:</strong> Sanction letters must include a written 7 to 15 day grace period to prevent automatic waiver cancellation on delay.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">100% Penal Fee Waiver:</strong> Compounded penal interest and mandate bounce fees are fully eliminated before calculating installment amounts.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Immediate Harassment Halt:</strong> Recovery calls, residential visits, and third-party contacts cease immediately upon initial tranche clearance.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Direct Account Remittance:</strong> Installments must be remitted directly into your loan account via RTGS/NEFT, never through recovery agents.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Authentic NDC Issuance:</strong> The bank issues the official No Dues Certificate within 15 to 30 days after final installment clearance.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">CIBIL Restoration Pathway:</strong> The account reports as &apos;Settled&apos; with zero balance, with legal entitlement under CICRA §21 to upgrade to &apos;Closed&apos;.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Statutory Notice Shield:</strong> Pending Section 25 PSSA and Section 138 NI Act proceedings are held in abeyance and formally quashed upon completion.</span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="staged-settlement-economics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Banking Economics &amp; NPA Provisions</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics &amp; NPA Dynamics: Why Banks Permit Settlement Payouts in Installments
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                When severe financial hardship strikes, such as corporate downsizing, enterprise cash-flow disruption, or critical medical emergencies, continuing full debt servicing on unsecured personal loans and credit cards becomes mathematically unviable. After 90 consecutive days of missed EMIs, the facility transitions from Special Mention Account status (SMA-0, SMA-1, SMA-2) into a formal Non-Performing Asset (NPA) under Reserve Bank of India prudential guidelines. Once classified as an NPA, commercial banks and NBFCs must set aside mandatory Tier-1 capital provisioning, scaling from 15% up to 100% of the exposure, locking institutional liquidity.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Because unsecured loans carry no underlying collateral under the SARFAESI Act, lenders face protracted 3 to 5 year litigations in civil courts or Debt Recovery Tribunals. Consequently, bank credit committees are economically driven to accept a One-Time Settlement (OTS). While collection agencies initially demand an impossible single lump sum, senior credit authorities recognize that distressed borrowers require staggered timelines. To recover capital and release locked provisioning reserves, banks routinely approve structured settlements divided into 2 to 6 monthly installments.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="installment-breakdown-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calculator className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis &amp; Settlement Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Structuring Settlement Math into Structured Monthly Tranches
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Following default, lenders rapidly inflate account balances by levying 24% to 36% compound penal interest and repeated mandate bounce surcharges. Within 12 months, an original principal balance of ₹8 Lakhs can artificially escalate to over ₹12.5 Lakhs. Strategic negotiation strips away these punitive levies, isolates the net principal, and establishes a sustainable 40% to 55% settlement split into manageable monthly tranches.
              </p>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ReceiptText className="w-4 h-4 text-[#1886ff]" />
                    <span>Representative Multi-Tranche Settlement Math (₹10 Lakh Facility)</span>
                  </h3>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    4-Month Staged Plan
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">Disbursed Facility Balance:</span>
                    <span className="font-semibold text-slate-900">₹10,00,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">Principal Repaid Prior to Default:</span>
                    <span className="font-semibold text-emerald-600">- ₹2,00,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 font-bold">
                    <span className="text-slate-700">True Outstanding Net Principal:</span>
                    <span className="text-slate-900">₹8,00,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">Penal &amp; Overdue Surcharges Demanded:</span>
                    <span className="font-semibold text-red-600">+ ₹4,50,000</span>
                  </div>
                  <div className="flex justify-between py-1 bg-slate-50 px-2.5 rounded font-bold">
                    <span className="text-slate-800">Total Demand by Collection Agency:</span>
                    <span className="text-red-700">₹12,50,000</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 space-y-2">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-emerald-800 block">Negotiated Settlement Figure (45% of Principal)</span>
                      <span className="text-[11px] text-emerald-700">100% Waiver of Penal Interest &amp; Bounce Surcharges</span>
                    </div>
                    <span className="text-base sm:text-lg font-black text-emerald-700">₹3,60,000</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                    <div className="p-2.5 rounded-lg bg-blue-50/70 border border-blue-100">
                      <span className="text-[11px] font-bold text-[#1886ff] block">Tranche 1 (30% Down Payment):</span>
                      <span className="text-xs font-black text-slate-800">₹1,08,000 (Paid within 7 Days)</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-blue-50/70 border border-blue-100">
                      <span className="text-[11px] font-bold text-[#1886ff] block">Tranches 2, 3 &amp; 4 (Equal Parts):</span>
                      <span className="text-xs font-black text-slate-800">3 x ₹84,000 (Paid at 30-Day Intervals)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="settlement-structure-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Resolution Pathways Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparative Resolution Matrix: Staged Settlement vs. Lump Sum vs. Restructuring
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Borrowers evaluating debt resolution options can compare five primary avenues across cash flow impact, legal exposure, and credit recovery:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 font-bold">Resolution Option</th>
                      <th className="p-3 font-bold">Financial Outflow</th>
                      <th className="p-3 font-bold">CIBIL Score Status</th>
                      <th className="p-3 font-bold">Litigation Risk</th>
                      <th className="p-3 font-bold">Execution Timeline</th>
                      <th className="p-3 font-bold text-[#1886ff]">Strategic Assessment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Staged OTS (2–6 Tranches)</td>
                      <td className="p-3 text-emerald-700 font-semibold">40%–55% Principal</td>
                      <td className="p-3">&quot;Settled&quot; post-final tranche</td>
                      <td className="p-3 text-emerald-700 font-semibold">Frozen &amp; Withdrawn</td>
                      <td className="p-3">2–6 Months</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Optimal balance of cash flow relief and legal closure</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Lump-Sum OTS</td>
                      <td className="p-3 text-emerald-700 font-semibold">35%–50% Principal</td>
                      <td className="p-3">&quot;Settled&quot; immediately</td>
                      <td className="p-3 text-emerald-700 font-semibold">Instantly Closed</td>
                      <td className="p-3">7–15 Days</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Highest discount rate but demands immediate capital</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Loan Restructuring</td>
                      <td className="p-3">100% Principal + Interest</td>
                      <td className="p-3">&quot;Restructured&quot;</td>
                      <td className="p-3 text-emerald-700 font-semibold">Paused during EMIs</td>
                      <td className="p-3">36–60 Months</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Viable only if substantial ongoing monthly cash flow is assured</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Court Litigation Defense</td>
                      <td className="p-3 text-red-700 font-semibold">High Legal Outlay</td>
                      <td className="p-3 text-red-700 font-bold">&quot;Suit Filed / In Court&quot;</td>
                      <td className="p-3 text-amber-700 font-semibold">Active court contest</td>
                      <td className="p-3">2–5 Years</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Defensive shield to challenge charges and compel an OTS</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Prolonged Inaction / Default</td>
                      <td className="p-3 text-red-700 font-semibold">Compounding Penal Fees</td>
                      <td className="p-3 text-red-700 font-bold">&quot;Written Off / Default&quot;</td>
                      <td className="p-3 text-red-700 font-bold">Severe (Notices, calls)</td>
                      <td className="p-3">Indefinite</td>
                      <td className="p-3 text-red-600 font-semibold">High risk of credit ruin, escalating legal notices, and harassment</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>CIBIL Algorithm &amp; Bureau Analytics</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Technical CIBIL Scoring Math: Credit Impact of Paying a Settlement in Installments
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Credit bureaus calculate CIBIL scores across five parameters: Payment History (35%), Credit Exposure (30%), Credit Longevity (15%), Credit Mix (10%), and Recent Inquiries (10%). During the months you pay staged settlement installments, the account remains marked in default, but DPD accumulation freezes under the approved sanction agreement.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Upon remitting the final tranche, the bank reports the account as &apos;Settled&apos; with zero balance, terminating negative reporting. While settling causes an initial drop of 70 to 120 points, disciplined rebuilding using a secured card backed by a fixed deposit restores scores above 750 within 12 to 18 months. Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), borrowers retain the legal right to remit the waived balance later and convert the remark from &apos;Settled&apos; to &apos;Closed&apos;.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 text-xs">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Percent className="w-4 h-4 text-[#1886ff]" />
                    Credit Weighting &amp; Tranche Mechanics
                  </h3>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Payment History (35%):</span>
                    <span className="font-bold text-slate-900">DPD compounding freezes upon sanction</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Outstanding Exposure (30%):</span>
                    <span className="font-bold text-emerald-600">Reports ₹0 balance post-final tranche</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Bureau Update Frequency:</span>
                    <span className="font-bold text-slate-700">Updated within 30–45 days of NDC</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 text-xs">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-600" />
                    Credit Score Rehabilitation Timeline
                  </h3>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Phase 1 (Months 1–6):</span>
                    <span className="font-bold text-slate-800">+40 to +60 pts via Secured Card</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Phase 2 (Months 7–18):</span>
                    <span className="font-bold text-emerald-700">Score reaches 750+ Prime Tier</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Status Conversion Milestone:</span>
                    <span className="font-bold text-indigo-700">Convert Settled to Closed via CICRA §21</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl text-xs text-emerald-950">
                <strong>Section 21 CICRA Conversion Remedy:</strong> Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), borrowers who complete an installment settlement retain the legal entitlement to pay the remaining waived differential balance at a future date when their financial circumstances improve, converting the bureau remark from &apos;Settled&apos; to &apos;Closed&apos; and permanently eliminating the adverse record.
              </div>
            </section>

            {/* SECTION 5: Embedded 16:9 Infographic Banner */}
            <section id="infographic-roadmap" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Resolution Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: Multi-Tranche Debt Resolution &amp; EMI Settlement Roadmap
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Study this 6-stage infographic detailing the end-to-end journey from initial default analysis and cash flow modeling to credit committee negotiation, tranche remittances, and final No Dues Certificate delivery:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/can-i-pay-settlement-amount-in-emi.jpg"
                    alt="Can I Pay Settlement Amount in EMI Infographic Roadmap: Staged OTS Settlement Process and Legal Rights"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-2 px-1 flex items-center justify-between text-[11px] text-slate-500">
                  <span>CredSettle Multi-Tranche Settlement Framework • RBI &amp; Banking Compliant</span>
                  <a
                    href="/images/infographics/can-i-pay-settlement-amount-in-emi.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>View High-Resolution</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: 6-Stage Standard Operating Procedure (SOP) */}
            <section id="staged-settlement-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Resolution SOP</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Standard Operating Procedure (SOP): 6 Stages to Structure an Installment Settlement
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Executing an installment settlement requires adhering to a rigorous 6-stage standard operating procedure to avoid default clause triggers and ensure binding legal closure:
              </p>

              <div className="space-y-3 text-xs">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 1: Days 1–15</span>
                  <h3 className="font-bold text-slate-900 text-sm">Forensic Statement Audit &amp; Cash Flow Analysis</h3>
                  <p className="text-slate-600">Obtain a certified Statement of Account. Deduct past repayments, eliminate compound penal interest and bounce fees, isolate the true net principal, and map verified disposable monthly income to determine an achievable tranche schedule.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 2: Days 16–30</span>
                  <h3 className="font-bold text-slate-900 text-sm">Hardship Dossier &amp; Tranche Schedule Modeling</h3>
                  <p className="text-slate-600">Compile documentary proof of financial distress, including termination letters, medical summaries, or business revenue drops. Structure a formal settlement petition proposing a 25% to 30% initial down payment and 2 to 4 equal monthly installments.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 3: Days 31–45</span>
                  <h3 className="font-bold text-slate-900 text-sm">Representation to Zonal Credit Committee</h3>
                  <p className="text-slate-600">Submit the staged compromise petition directly to the bank&apos;s Zonal Credit Committee and Head of Retail NPA Settlements. Bypass aggressive recovery agents, establish genuine illiquidity, and cite RBI compromise guidelines to open bilateral negotiations.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 4: Days 46–60</span>
                  <h3 className="font-bold text-slate-900 text-sm">Bilateral Negotiations &amp; Grace Period Insertion</h3>
                  <p className="text-slate-600">Negotiate total settlement figures down to 40%–55% of principal. Crucially, insist on inserting a written 7 to 15 day grace period clause for each installment tranche to prevent automatic revocation in case of minor banking delays.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 5: Days 61–75</span>
                  <h3 className="font-bold text-slate-900 text-sm">Legal Vetting of Settlement Sanction Letter</h3>
                  <p className="text-slate-600">Perform rigorous legal due diligence on the formal Settlement Sanction Letter issued on bank letterhead signed by an authorized manager. Verify exact installment dates, direct loan account remittance details, 100% penal waiver, and NDC commitments.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 6: Days 76–120+</span>
                  <h3 className="font-bold text-slate-900 text-sm">Tranche Remittances, Milestone Tracking &amp; Final NDC</h3>
                  <p className="text-slate-600">Remit each installment directly into your loan account via RTGS/NEFT before each due date, retaining timestamped receipts. Upon final tranche clearance, obtain the official No Dues Certificate within 30 days and confirm credit bureau status update.</p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Notice Defense &amp; Borrower Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense &amp; Legal Rights Under Indian Banking Law
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Unsecured loan default is strictly a civil contractual breach under the Indian Contract Act, 1872, with zero risk of police arrest. However, institutional lenders issue statutory notices to exert recovery pressure. Understanding your legal rights ensures protected negotiations:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold">
                    <AlertCircle className="w-4 h-4" />
                    <span>Section 25 PSSA, 2007 (NACH Dishonour)</span>
                  </div>
                  <p className="text-slate-600">Issued when electronic mandate debits bounce. Serve a formal legal reply within 15 days proving lack of fraudulent intent and submitting an installment OTS compromise. Complaints are quashed upon settlement execution.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold">
                    <Scale className="w-4 h-4" />
                    <span>Section 138 NI Act, 1881 (Cheque Bounce)</span>
                  </div>
                  <p className="text-slate-600">Applies to dishonoured security cheques. Offenses under Section 138 are compoundable under Section 147 of the Act; court complaints are formally withdrawn once the agreed installment schedule is fulfilled.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold">
                    <Gavel className="w-4 h-4" />
                    <span>Arbitration Section 21 &amp; Section 12(5)</span>
                  </div>
                  <p className="text-slate-600">Lenders cannot unilaterally appoint a sole private arbitrator. Under Supreme Court rulings in TRF Ltd. (2017) and Perkins Eastman (2020), unilateral appointments are void ab initio, protecting you from ex-parte awards.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold">
                    <Landmark className="w-4 h-4" />
                    <span>Section 19 RDB Act (DRT Jurisdiction)</span>
                  </div>
                  <p className="text-slate-600">Applicable for institutional debts exceeding ₹20 Lakhs. Borrowers can file a detailed written statement contesting penal charges and petition the DRT to refer the dispute for an out-of-court installment compromise.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 text-xs">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                  Borrower Protections Under the RBI Fair Practices Code
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Under the RBI Master Direction on Fair Practices Code, lenders and recovery agencies are strictly prohibited from calling before 8:00 AM or after 7:00 PM, visiting residences without notice, contacting employers or relatives, or using abusive language. All recovery activities must halt upon sanction letter execution.
                </p>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. The 3-Tier Escalation Matrix for Installment Settlement Grievances
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                If a bank recovery department arbitrarily rejects a reasonable installment plan or violates RBI guidelines, escalate through this formal 3-tier statutory framework:
              </p>

              <div className="space-y-3 text-xs">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <span className="text-[11px] font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Level 1: Branch Manager &amp; Grievance Redressal Officer (GRO)</span>
                  <p className="text-slate-600 mt-1">Submit a formal written petition proposing your structured installment plan directly to the Branch Manager and GRO (7–10 days turnaround).</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">Level 2: Principal Nodal Officer (PNO)</span>
                  <p className="text-slate-600 mt-1">Escalate to the bank&apos;s Principal Nodal Officer if Level 1 fails to resolve within 30 days or if agents continue harassment (14–21 days turnaround).</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-xs space-y-1">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Level 3: RBI Integrated Ombudsman Scheme</span>
                  <p className="text-slate-600 mt-1">Lodge a regulatory complaint on cms.rbi.org.in for unfair recovery tactics, unjustified settlement rejections, or delays in issuing the No Dues Certificate.</p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Milestone Resolution Table */}
            <section id="procedural-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Chronological Timeline &amp; Milestone Resolution Table (Month 1 to Month 6)
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Follow the chronological progression from initial loan default to final installment clearance and official No Dues Certificate delivery:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 font-bold">Timeline Milestone</th>
                      <th className="p-3 font-bold">Account Status</th>
                      <th className="p-3 font-bold">Bank Action</th>
                      <th className="p-3 font-bold text-[#1886ff]">Borrower Strategic Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Days 1–30</td>
                      <td className="p-3">SMA-0</td>
                      <td className="p-3">Automated payment reminders</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Audit statement, isolate net principal, preserve liquid reserves</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Days 31–90</td>
                      <td className="p-3">SMA-1 / SMA-2</td>
                      <td className="p-3">Demand notices &amp; collection calls</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Compile hardship dossier; serve Cease-and-Desist notice</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Days 91–120</td>
                      <td className="p-3">NPA Classification</td>
                      <td className="p-3">Mandatory capital provisioning locked</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Submit structured multi-tranche OTS proposal to Credit Committee</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Month 4</td>
                      <td className="p-3">Sanction &amp; Down Payment</td>
                      <td className="p-3">Sanction letter issued; calls cease</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Vet sanction letter, verify grace period, remit 30% down payment</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Months 5–6</td>
                      <td className="p-3">Tranche Execution &amp; Closure</td>
                      <td className="p-3">Account cleared in core banking</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Remit remaining tranches directly; secure official NDC within 30 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-tranche-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: Multi-Lender Portfolios, Layoffs &amp; ARC Assignments
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Structuring an installment settlement depends on borrower profiles and creditor structures. Consider these four distinct scenarios:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Multi-Lender Portfolio Balancing</h3>
                  <p className="text-slate-600">When managing multiple loan defaults, stagger installment schedules sequentially rather than simultaneously across banks to prevent cash flow exhaustion.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Salaried Professionals Post-Layoff</h3>
                  <p className="text-slate-600">Present authenticated corporate severance records to negotiate a lower down payment (15% to 20%) with tranches aligned to expected re-employment.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Business Owners with Seasonal Cash Flow</h3>
                  <p className="text-slate-600">Structure quarterly or bi-monthly tranches matching audited accounts receivable cycles, ensuring custom payment milestone dates are written into the sanction letter.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Debts Assigned to ARCs (Phoenix, ARCIL)</h3>
                  <p className="text-slate-600">Asset Reconstruction Companies purchase bad loan portfolios at steep discounts (70%–80%) and readily accept 4 to 6 month installment settlements with deep waivers.</p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: Frequently Asked Questions Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions on Paying Loan Settlement in EMIs
              </h2>

              <div className="space-y-2.5 pt-1">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-[#1886ff] transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                          <p className="pt-2">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Regulatory Sources & Authorities */}
            <section id="regulatory-citations" className="scroll-target space-y-4 pt-5 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Legal References
              </h2>

              <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed list-disc pl-5">
                <li><a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-bold">Reserve Bank of India (RBI):</a> Master Direction on Fair Practices Code for Lenders (Recovery Agent Conduct &amp; Grievance Redressal).</li>
                <li><a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-bold">RBI Integrated Ombudsman Scheme, 2021:</a> Statutory dispute mechanism on cms.rbi.org.in.</li>
                <li><a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-bold">CICRA 2005 (Section 21):</a> Credit dispute resolution and bureau remark rectification.</li>
                <li><a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-bold">PSSA 2007 (Section 25):</a> Dishonour of electronic funds transfer / NACH mandates.</li>
                <li><a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-bold">RDB Act 1993 (Section 19):</a> Original Applications before Debt Recovery Tribunals (DRT).</li>
                <li><a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-bold">Indian Contract Act 1872:</a> Sections 73 &amp; 74 regarding civil contractual damages.</li>
                <li><a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-bold">NI Act 1881 (Section 138 &amp; 147):</a> Cheque dishonour defense and compounding of offenses.</li>
              </ul>

              {/* 6 Official Outbound Authority Link Badges */}
              <div className="pt-2">
                <span className="text-[11px] font-bold text-slate-800 block mb-2 uppercase tracking-wider">
                  Official Outbound Authority Portals &amp; Statutory Registers:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs flex items-center justify-between font-semibold text-slate-800 hover:text-[#1886ff]">
                    <div className="flex items-center gap-2"><Landmark className="w-4 h-4 text-[#1886ff]" /><span>RBI Official Portal</span></div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs flex items-center justify-between font-semibold text-slate-800 hover:text-[#1886ff]">
                    <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-600" /><span>RBI Ombudsman (CMS)</span></div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs flex items-center justify-between font-semibold text-slate-800 hover:text-[#1886ff]">
                    <div className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-[#1886ff]" /><span>TransUnion CIBIL</span></div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs flex items-center justify-between font-semibold text-slate-800 hover:text-[#1886ff]">
                    <div className="flex items-center gap-2"><Scale className="w-4 h-4 text-[#1886ff]" /><span>India Code Portal</span></div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs flex items-center justify-between font-semibold text-slate-800 hover:text-[#1886ff]">
                    <div className="flex items-center gap-2"><Gavel className="w-4 h-4 text-[#1886ff]" /><span>NALSA Lok Adalat</span></div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs flex items-center justify-between font-semibold text-slate-800 hover:text-[#1886ff]">
                    <div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-600" /><span>Cyber Crime Portal</span></div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-700 block mb-2">Explore Related CredSettle Debt Resolution Guides:</span>
                <div className="flex flex-wrap gap-1.5">
                  <Link href="/settle-1-lakh-personal-loan" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Settle ₹1L Loan</Link>
                  <Link href="/settle-2-lakh-personal-loan" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Settle ₹2L Loan</Link>
                  <Link href="/settle-25-lakh-personal-loan" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Settle ₹25L Loan</Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Arbitration Defense</Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">NACH Section 25</Link>
                  <Link href="/section-138-cheque-bounce-personal-loan" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Section 138 Defense</Link>
                  <Link href="/mental-harassment-by-recovery-agents-legal-action" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Stop Harassment</Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Get NDC / NOC</Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Convert Settled to Closed</Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Rebuild CIBIL</Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-4 sticky top-6">
            
            {/* Card 1: Author Bio Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2.5 text-xs">
              <div className="flex items-center gap-2.5">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-xs hover:bg-blue-200 transition-colors flex-shrink-0"
                >
                  AJ
                </Link>
                <div>
                  <Link
                    href="/author/ashish-jhangra"
                    className="text-xs font-bold text-slate-900 hover:text-[#1886ff] transition-colors block"
                  >
                    Ashish Jhangra
                  </Link>
                  <p className="text-[10px] font-semibold text-[#1886ff]">
                    Legal &amp; Debt Resolution Professional
                  </p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Specialized in banking regulations, multi-tranche loan restructuring, and retail NPA compromise settlements across Indian banking tribunals.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                <Link href="/author/ashish-jhangra" className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1">
                  <span>Author Profile</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> CredSettle Panel
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card */}
            <div
              className="rounded-3xl p-5 text-white text-center space-y-3 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-[10px] font-black uppercase text-blue-200 bg-white/10 px-2.5 py-0.5 rounded-full inline-block">
                  100% CONFIDENTIAL DEBT RELIEF
                </span>
                <h3 className="text-base font-bold text-white leading-snug">
                  Want to Settle Your Loan in Monthly EMIs?
                </h3>
                <p className="text-blue-100 text-xs leading-relaxed font-normal">
                  Our debt resolution experts negotiate structured 2 to 6 month staged settlement plans directly with bank credit committees to freeze interest, stop recovery harassment, and protect your credit.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-2.5 px-3 rounded-full font-bold text-xs hover:bg-slate-50 transition-all shadow-md"
              >
                Need Installment OTS? Speak to Senior Advisors
              </Link>
              <div className="pt-1 flex flex-col items-center justify-center gap-0.5 text-[10px] text-blue-200">
                <a href="tel:+918800226635" className="hover:underline font-bold text-white flex items-center gap-1">
                  <Phone className="w-3 h-3" /> +91-8800226635
                </a>
                <span className="text-[9px] text-blue-300">Direct Bank Settlement • RBI Compliant</span>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2 text-xs">
              <h4 className="font-bold text-slate-900 text-xs">The CredSettle Advantage</h4>
              <ul className="space-y-1.5 text-slate-600 text-[11px]">
                <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-600 flex-shrink-0" /><span><strong>Zero Upfront Risk:</strong> Success-linked advisory model.</span></li>
                <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-600 flex-shrink-0" /><span><strong>Direct Remittance:</strong> Zero middleman account transfers.</span></li>
                <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-600 flex-shrink-0" /><span><strong>RBI &amp; Banking Norms:</strong> 100% lawful dispute handling.</span></li>
                <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-600 flex-shrink-0" /><span><strong>Pan-India Defense:</strong> Senior banking resolution team.</span></li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2 text-xs">
              <h4 className="font-bold text-slate-900 text-xs">Related Debt Guides</h4>
              <div className="space-y-1.5">
                <Link href="/services/personal-loan-settlement" className="block p-2 rounded-xl border border-slate-100 hover:bg-blue-50/50 text-[11px] font-bold text-slate-800 hover:text-[#1886ff]">
                  Personal Loan Settlement Services &rarr;
                </Link>
                <Link href="/ecs-nach-bounce-legal-notice-section-25" className="block p-2 rounded-xl border border-slate-100 hover:bg-blue-50/50 text-[11px] font-bold text-slate-800 hover:text-[#1886ff]">
                  NACH Bounce Section 25 Defense &rarr;
                </Link>
                <Link href="/get-noc-after-loan-settlement" className="block p-2 rounded-xl border border-slate-100 hover:bg-blue-50/50 text-[11px] font-bold text-slate-800 hover:text-[#1886ff]">
                  Get NOC / No Dues Certificate &rarr;
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
