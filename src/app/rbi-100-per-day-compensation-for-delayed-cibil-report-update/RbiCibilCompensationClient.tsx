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
  Landmark
} from 'lucide-react';

export default function RbiCibilCompensationClient() {
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

    const headings = document.querySelectorAll(
      'section[id], div[id].scroll-target'
    );
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const navLinks = [
    { id: 'quick-crux', label: 'Executive Brief & Regulatory Crux' },
    { id: 'regulatory-framework', label: '1. RBI ₹100 Per Day Rule: Framework' },
    { id: 'resolution-timeline', label: '2. 30-Day Timeline: Bank & CIC Duties' },
    { id: 'qualifying-errors', label: '3. Qualifying Errors & Grievances' },
    { id: 'compensation-math', label: '4. Daily Liability Math & Calculation' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint: 30-Day Flow' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step SOP: Claim ₹100 Daily' },
    { id: 'escalation-matrix', label: '7. 3-Tier Escalation Matrix' },
    { id: 'case-studies', label: '8. Real-World Case Studies & Precedents' },
    { id: 'statutory-rights', label: '9. Rights Under CICRA 2005 & Rules' },
    { id: 'rejection-defenses', label: '10. Rejection Grounds & Counter-Defenses' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Regulatory Sources & Citations' }
  ];

  const faqs = [
    {
      q: 'What is the RBI ₹100 per day compensation rule for CIBIL delay?',
      a: 'Under RBI circular RBI/2023-24/72, if a bank or credit bureau fails to resolve and update an inaccurate credit report entry within 30 calendar days of a grievance, they must pay the borrower ₹100 for each calendar day of delay beyond the 30-day limit.'
    },
    {
      q: 'When did the RBI ₹100 per day compensation rule come into effect?',
      a: 'The Reserve Bank of India issued the circular on October 26, 2023, and provided a six-month transition period. The compensation framework officially came into force on April 26, 2024 across all Credit Institutions and Credit Information Companies.'
    },
    {
      q: 'How is the 30-day dispute resolution timeline divided between bank and CIBIL?',
      a: 'The total 30-day window is divided into 21 calendar days for the Credit Institution (bank or NBFC) to verify records and send updated data, and 9 calendar days for the Credit Information Company (CIBIL, Experian, Equifax, or CRIF High Mark) to update the credit report.'
    },
    {
      q: 'Within how many days must the bank or bureau credit the compensation amount?',
      a: 'Under RBI directions, the responsible institution must credit the accumulated compensation directly into the complainant bank account within 5 working days of the date of resolution or rectification of the credit record.'
    },
    {
      q: 'Who pays the ₹100 per day penalty if both the bank and CIBIL delay the update?',
      a: 'The liability is apportioned based on where the delay occurred. If the bank exceeded its 21-day limit, the bank pays ₹100 per day for its delay. If CIBIL exceeded its 9-day limit, CIBIL pays ₹100 per day for its delay. If both delayed, each pays for their respective extra days.'
    },
    {
      q: 'Does the compensation rule apply to delayed loan closure and settlement NOC updates?',
      a: 'Yes. Delay in updating a repaid loan as closed, or failure to update a One-Time Settlement (OTS) compromise agreement within 30 days after issuing a No Dues Certificate, fully qualifies for the ₹100 per day compensation.'
    },
    {
      q: 'What should I do if the bank or CIBIL refuses to pay the ₹100 per day compensation?',
      a: 'If the bank or credit bureau resolves the issue late but refuses to credit the penalty within 5 working days, you can lodge an escalation with the RBI Integrated Ombudsman via the Complaint Management System portal at cms.rbi.org.in.'
    },
    {
      q: 'What documents are required to file a compensation claim for CIBIL delay?',
      a: 'You need the initial dispute registration number or email acknowledgment with timestamp, your PAN card, the erroneous Credit Information Report, proof of payment or loan closure NOC, and your bank account details for direct credit.'
    },
    {
      q: 'Can a bank reject a CIBIL correction dispute to avoid paying compensation?',
      a: 'No. RBI rules mandate that if a grievance is rejected, the Credit Institution or bureau must provide a detailed written explanation with supporting documentary proof. Arbitrary rejections can be challenged before the RBI Ombudsman.'
    },
    {
      q: 'How does CredSettle help borrowers recover compensation and fix CIBIL records?',
      a: 'CredSettle audits credit bureau files, drafts formal dispute notices under CICRA Section 21(3), coordinates directly with bank nodal officers and credit bureaus, ensures complete removal of incorrect default tags, and enforces statutory compensation recovery.'
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
            <span>RBI Circular RBI/2023-24/72 • Consumer Credit Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            RBI ₹100 Per Day Compensation for Delayed CIBIL Reports
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A comprehensive legal guide on the Reserve Bank of India compensation framework. Learn how to recover ₹100 per day from banks and credit bureaus for delayed credit report updates beyond thirty days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Claim Your CIBIL Compensation</span>
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
                  <span>Statutory Redressal Guarantee</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Enforced under RBI Circular RBI/2023-24/72 and Section 21(3) of CICRA 2005.
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
                <span>EXECUTIVE BRIEF: RBI CIBIL DELAY COMPENSATION RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory ₹100 Daily Penalty:</strong> Banks and credit bureaus must pay ₹100 per calendar day if a credit report dispute exceeds thirty days.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict 30-Day Turnaround:</strong> The law allocates 21 calendar days to the lender and 9 calendar days to the credit bureau.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Direct Account Credit:</strong> Compensation must be deposited into your bank account within five working days of resolution.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Effective Since April 2024:</strong> This framework applies to all scheduled banks, NBFCs, housing finance companies, and all four CICs.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Ombudsman Escalation:</strong> If a lender fails to pay the compensation, file a complaint on cms.rbi.org.in for immediate recovery.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Regulatory Framework */}
            <section id="regulatory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Mandate &amp; RBI Directives</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI ₹100 Per Day Rule: Regulatory Framework
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Incorrect credit reporting can devastate a borrower financial life. An erroneous default tag or a delayed loan closure update can slash your credit score by over one hundred points. As a result, lenders may reject your home loan, car loan, or business credit applications without fair evaluation.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To curb systemic apathy among financial institutions, the Reserve Bank of India issued a directive on October 26, 2023. Under circular number RBI/2023-24/72, the central bank enacted the Framework for Compensation to Customers for Delayed Updation or Rectification of Credit Information.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The regulation was framed under Section 21(3) of the Credit Information Companies (Regulation) Act, 2005 (CICRA). The rule became fully enforceable on April 26, 2024. It creates a direct financial penalty of ₹100 per day against regulated entities that fail to resolve consumer credit disputes within thirty calendar days.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This rule binds both Credit Institutions (CIs) and Credit Information Companies (CICs). Regulated entities include all commercial banks, small finance banks, regional rural banks, non-banking financial companies (NBFCs), and housing finance firms. It also covers all four operational credit bureaus in India: TransUnion CIBIL, Equifax, Experian, and CRIF High Mark.
              </p>
            </section>

            {/* SECTION 2: 30-Day Resolution Timeline */}
            <section id="resolution-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Operational Turnaround Standards</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. 30-Day Resolution Timeline: Bank &amp; CIC Duties
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI compensation framework defines an absolute thirty calendar day turnaround window for credit dispute resolution. When a customer identifies a factual error in their credit report, the clock starts ticking on the day the grievance is lodged.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The framework divides operational accountability between the lender that provided the loan data and the credit bureau that publishes the report. Neither institution can deflect blame onto the other.
              </p>

              {/* 30-Day Split Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Operating Entity</th>
                      <th className="p-3">Permitted Resolution Window</th>
                      <th className="p-3">Core Statutory Duty</th>
                      <th className="p-3">Delay Penalty Trigger</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Credit Institution (CI)</td>
                      <td className="p-3 font-mono font-semibold text-blue-700">21 Calendar Days</td>
                      <td className="p-3">Verify borrower records, correct internal ledger, and transmit fresh data to CIC.</td>
                      <td className="p-3 text-rose-600 font-semibold">Exceeding 21 days from dispute date.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Credit Information Company (CIC)</td>
                      <td className="p-3 font-mono font-semibold text-indigo-700">9 Calendar Days</td>
                      <td className="p-3">Ingest verified lender correction, rebuild credit score, and notify customer.</td>
                      <td className="p-3 text-rose-600 font-semibold">Exceeding 9 days post-lender feed.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Total Dispute Ceiling</td>
                      <td className="p-3 font-mono font-bold text-[#1886ff]">30 Calendar Days</td>
                      <td className="p-3 font-medium text-slate-900">Complete end-to-end rectification and generation of updated credit report.</td>
                      <td className="p-3 text-rose-700 font-bold">Day 31 onwards: ₹100 per day fine.</td>
                    </tr>
                    <tr className="bg-emerald-50/50">
                      <td className="p-3 font-bold text-slate-900">Compensation Payout</td>
                      <td className="p-3 font-mono font-semibold text-emerald-700">5 Working Days</td>
                      <td className="p-3">Mandatory direct electronic credit to complainant bank account or UPI handle.</td>
                      <td className="p-3 text-emerald-800 font-semibold">Automatic grounds for Ombudsman action.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                Note: If a customer lodges the complaint directly with CIBIL, the bureau must forward it to the bank within two days. The bank then has fifteen days to respond, and the bureau has eight days to finalize the report, maintaining the thirty-day total cap.
              </p>
            </section>

            {/* SECTION 3: Qualifying Errors */}
            <section id="qualifying-errors" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Dispute Classifications &amp; Scope</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Qualifying Credit Report Errors &amp; Grievances
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Not all credit score drops trigger automatic compensation. The RBI framework applies specifically to factual errors, unauthorized entries, and operational delays caused by lender or bureau negligence.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Delayed Loan Closure Updates</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You paid off your personal loan or credit card in full and received a formal No Dues Certificate. However, the bank continues reporting an open loan or outstanding balance to CIBIL months later.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>Un-Updated Loan Settlement Status</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You completed a formal One-Time Settlement (OTS). While the account should reflect a Settled status with zero dues, the bureau still lists active overdue amounts or ongoing delinquency.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Cloned or Misattributed Loan Accounts</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Due to data mismatch or identity fraud, someone else defaulted loan or credit card appears on your PAN card. The bureau fails to purge the ghost account within thirty days of your dispute.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <DollarSign className="w-4 h-4" />
                    <span>Ghost Overdue Entries Despite Timely EMIs</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You paid every monthly EMI on or before the due date. The bank system experienced a technical glitch and reported delayed payments (DPD) to bureaus, damaging your credit profile.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: Compensation Calculation */}
            <section id="compensation-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics &amp; Daily Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Compensation Calculation: Daily Liability Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The compensation formula is straightforward and automatic. Once a dispute passes the thirty calendar day mark without full resolution and notification, a statutory penalty of ₹100 accrues for every additional calendar day.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Here is a representative breakdown demonstrating how daily compensation accumulates across realistic dispute resolution periods.
              </p>

              {/* Math Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Dispute Delay &amp; Penalty Accrual Ledger</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹100 / Calendar Day Statutory Rate</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Total Days Elapsed</th>
                        <th className="p-3">Statutory Permitted Days</th>
                        <th className="p-3">Default Delay Days</th>
                        <th className="p-3">Liable Responsible Entity</th>
                        <th className="p-3 text-right">Compensation Owed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">28 Days</td>
                        <td className="p-3">30 Days</td>
                        <td className="p-3 text-slate-500 font-mono">0 Days</td>
                        <td className="p-3 text-emerald-600 font-semibold">Resolved Within Regulatory TAT</td>
                        <td className="p-3 text-right font-bold text-slate-500">₹0</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">45 Days</td>
                        <td className="p-3">30 Days</td>
                        <td className="p-3 text-rose-600 font-mono font-bold">15 Days</td>
                        <td className="p-3 text-blue-700 font-medium">Bank delayed data upload by 15 days</td>
                        <td className="p-3 text-right font-bold text-blue-700">₹1,500</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">60 Days</td>
                        <td className="p-3">30 Days</td>
                        <td className="p-3 text-rose-600 font-mono font-bold">30 Days</td>
                        <td className="p-3 text-indigo-700 font-medium">Bank delayed 20 days; CIBIL delayed 10 days</td>
                        <td className="p-3 text-right font-bold text-indigo-700">₹3,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">90 Days</td>
                        <td className="p-3">30 Days</td>
                        <td className="p-3 text-rose-600 font-mono font-bold">60 Days</td>
                        <td className="p-3 text-purple-700 font-medium">Lender ignored repeated grievance reminders</td>
                        <td className="p-3 text-right font-bold text-purple-700">₹6,000</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">120 Days</td>
                        <td className="p-3">30 Days</td>
                        <td className="p-3 text-rose-700 font-mono font-bold">90 Days</td>
                        <td className="p-3 text-slate-900">Chronic negligence; escalated to Ombudsman</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹9,000 + Costs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: 30-Day Dispute &amp; Payout Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive visual roadmap illustrates the step-by-step dispute resolution lifecycle under RBI circular RBI/2023-24/72, highlighting key milestones, institutional deadlines, and direct compensation triggers.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/rbi-100-per-day-compensation-cibil-delay.jpg"
                    alt="RBI ₹100 Per Day Compensation for Delayed CIBIL Report Updates"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Credit Protection Framework • RBI Circular RBI/2023-24/72 Compliant</span>
                  <a
                    href="/images/infographics/rbi-100-per-day-compensation-cibil-delay.jpg"
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
                6. Step-by-Step SOP: How to Claim Your ₹100 Daily
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To successfully enforce the RBI ₹100 per day compensation rule, follow this structured six-stage operating procedure. Maintaining an airtight paper trail is essential for securing compensation from recalcitrant lenders.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Pull Free Credit Reports &amp; Isolate the Defect
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under RBI regulations, every citizen is entitled to one free annual credit report from each of the four bureaus. Download your reports from CIBIL, Equifax, Experian, and CRIF. Pinpoint the specific loan account number, erroneous DPD entry, or un-updated settlement tag.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Lodge Formal Disputes with Both Bank &amp; CIC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submit a formal online dispute through the CIBIL dispute resolution portal and simultaneously send an email to the lender grievance cell. Include your PAN, loan account number, payment proof, and No Dues Certificate. Secure a formal Dispute Service Request number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Timestamp the 21-Day and 30-Day Deadlines
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Record the exact filing date on your calendar. Day 21 marks the statutory deadline for the bank to finish its internal verification. Day 30 marks the statutory cut-off for the bureau to update the report and notify you. If unresolved on Day 31, compensation begins accruing.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Issue Formal Statutory Demand for Compensation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once the credit report is finally corrected after Day 30, count the total delayed days. Send a formal claim letter citing RBI Circular RBI/2023-24/72 to the bank and bureau. Provide your bank account IFSC and account number, demanding electronic credit within five working days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Escalate to the Principal Nodal Officer (PNO)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank branch or customer service desk ignores your compensation demand, escalate the matter to the bank Principal Nodal Officer at their head office. The PNO has a statutory obligation under RBI rules to enforce compliance and sanction valid compensation claims.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: File RBI Integrated Ombudsman Complaint (CMS)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank or credit bureau fails to pay within thirty days of your demand, lodge a complaint with the RBI Integrated Ombudsman via cms.rbi.org.in. Attach all dispute receipts, delay records, and bank communications. The Ombudsman can award compensation plus damages.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Escalation Matrix: Bank, CIC &amp; Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If branch managers or call center agents refuse to acknowledge your compensation rights, utilize the Reserve Bank of India institutional escalation ladder.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer / CIBIL Helpdesk</td>
                      <td className="p-3 font-mono">1 to 21 Calendar Days</td>
                      <td className="p-3">Investigates initial dispute, initiates internal ledger reconciliation, and transmits corrected data feed.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Bank Head Office)</td>
                      <td className="p-3 font-mono">22 to 30 Calendar Days</td>
                      <td className="p-3">Investigates systemic reporting delays, approves compensation vouchers, and directs bureau liaison cells.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman (CMS Portal)</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Issues binding awards against lenders, orders direct compensation credit, and penalizes non-compliant bureaus.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 8: Real-World Case Studies */}
            <section id="case-studies" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Precedent Awards &amp; Case Studies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Real-World Case Studies &amp; Precedent Awards
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Real-world enforcement demonstrates how Indian borrowers successfully recover thousands of rupees in statutory compensation while compelling banks to cleanse damaged credit records.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Case 1: Un-Updated Settlement NOC (₹4,400 Award)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A borrower completed a credit card settlement with a private bank in Pune. The bank issued an NOC but failed to update CIBIL for 74 days, blocking the borrower car loan. CredSettle cited the RBI framework, forced CIBIL to mark the card settled, and recovered ₹4,400 in direct bank compensation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Case 2: Misattributed PAN Account (₹5,100 Award)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    An IT professional in Bengaluru found a defaulted two-wheeler loan belonging to a stranger on his credit report. The bureau delayed rectifying the PAN linkage for 81 days. An escalation to the RBI Ombudsman resulted in complete removal of the default and a ₹5,100 statutory payout.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Case 3: Ghost Overdue on Closed Loan (₹3,200 Award)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A public sector bank reported ₹240 as overdue on a personal loan that had been fully closed two years prior. The borrower home loan interest rate was bumped due to the lower score. CredSettle forced a ledger audit, corrected the score to 785, and recovered ₹3,200 in compensation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    Case 4: Delay in Commercial OTS Reporting (₹6,500 Award)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    An MSME entrepreneur resolved business credit line dues through a structured compromise settlement. The NBFC failed to transmit the closure feed for 95 days. Following a legal notice citing CICRA 2005, the lender credited ₹6,500 compensation directly to the entrepreneur account.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Statutory Rights Under CICRA 2005 */}
            <section id="statutory-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Consumer Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Statutory Rights Under CICRA 2005 &amp; Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The ₹100 per day compensation rule is backed by strong parliamentary legislation. Under the Credit Information Companies (Regulation) Act, 2005 and associated Reserve Bank of India Master Directions, borrowers enjoy robust statutory rights.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <BookOpen className="w-4 h-4" />
                    <span>Right to Free Annual Credit Report</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Master Directions, every individual is legally entitled to obtain one full credit report, including their credit score, completely free of charge once every calendar year from each licensed credit bureau.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Phone className="w-4 h-4" />
                    <span>Mandatory SMS &amp; Email Alerts</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    CICs must send an automated SMS and email alert to the customer whenever a credit institution accesses their credit report or submits a default or overdue status. This ensures immediate awareness of reporting errors.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Mandatory Reason for Dispute Rejection</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A lender or credit bureau cannot arbitrarily dismiss your dispute. If they reject your correction request, they must provide a detailed written explanation accompanied by supporting documents under Section 21 of CICRA.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Right to Compensation for Credit Damage</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Beyond the automated ₹100 per day statutory fine, borrowers who suffer quantifiable financial loss, such as loan rejections or higher interest rates due to erroneous reporting, can sue for civil damages in consumer court.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10: Common Rejection Grounds & Counter-Defenses */}
            <section id="rejection-defenses" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Legal Counter-Defenses</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Common Rejection Grounds &amp; Counter-Defenses
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When borrowers demand compensation, banks and credit bureaus frequently deploy standard administrative excuses to evade payout. Here is how RBI regulations dismantle each common defense.
              </p>

              <div className="space-y-3">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <p className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    Excuse 1: &quot;Data is updated only during monthly batch cycles.&quot;
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Legal Counter:</strong> The RBI circular explicitly overrides routine monthly batch reporting. Section 21 mandates that dispute corrections must be updated within the thirty-day window regardless of the bank regular cycle.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <p className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    Excuse 2: &quot;Delay was caused by internal server migration.&quot;
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Legal Counter:</strong> Internal technical difficulties or core banking upgrades do not exempt regulated entities from statutory turnaround times. The RBI Ombudsman routinely rejects technical failure arguments.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <p className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    Excuse 3: &quot;Customer did not provide bank account details for compensation.&quot;
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Legal Counter:</strong> The RBI directive places the burden on lenders and bureaus to collect customer payout details during dispute intake. Failure to collect details cannot be used to deny the penalty.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <p className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    Excuse 4: &quot;Settled accounts take three months to reflect as closed.&quot;
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Legal Counter:</strong> Compromise settlements must be reported to bureaus within the same thirty-day timeframe following issuance of the settlement sanction and No Dues Certificate. Any delay beyond thirty days triggers compensation.
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
                Frequently Asked Questions: RBI ₹100 CIBIL Delay
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding the RBI ₹100 per day compensation rule, 30-day dispute timelines, and consumer remedies under Indian banking law.
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
                Official Regulatory Framework &amp; Circular Citations
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Reserve Bank of India Circular RBI/2023-24/72:</strong> Framework for compensation to customers for delayed updation or rectification of credit information.
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Section 21(3), Alteration of credit information and mandatory accuracy standards.
                </li>
                <li>
                  <strong>Credit Information Companies Rules, 2006:</strong> Rule 20, Dispute resolution mechanisms and turnaround standards for Credit Institutions and CICs.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Statutory escalation framework for non-compliance with credit bureau guidelines.
                </li>
                <li>
                  <strong>Master Direction on Credit Information Reporting, 2016:</strong> Mandatory submission of fortnightly and monthly credit feeds to all registered bureaus.
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
                  <a href="https://www.experian.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Experian Credit Bureau</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/cibil-dispute-wrong-overdue-entry-filing-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    CIBIL Dispute Process
                  </Link>
                  <Link href="/dispute-wrong-settled-status-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Dispute Settled Status
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate
                  </Link>
                  <Link href="/cibil-score-kaise-badhaye-after-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
                  </Link>
                  <Link href="/rbi-guidelines-on-penal-charges-in-loan-accounts" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Penal Charges Rules
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF Seizure Immunity
                  </Link>
                  <Link href="/loan-written-off-vs-settled-cibil-impact" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Written Off vs Settled
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/credit-score-builder" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Score Builder
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Rules
                  </Link>
                  <Link href="/check-free-cibil-score" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Check Free CIBIL Score
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
                Specialist in Indian credit bureau regulations, CICRA compliance, banking ombudsman escalations, and debt settlement legalities with deep expertise in credit score rehabilitation.
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
                  STATUTORY DISPUTE SHIELD
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Delayed CIBIL Report Update?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our credit resolution lawyers invoke RBI circular RBI/2023-24/72, force banks to rectify faulty bureau records within 30 days, and recover your ₹100 daily delay compensation.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Claim Your Compensation
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
                  <span>Statutory Compliance • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Advantage</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Compensation:</strong> Enforce ₹100 daily delay penalty.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Fast-Track Rectification:</strong> 21-day bank &amp; 9-day bureau tracking.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombudsman Escalation:</strong> Direct CMS filing for rogue lenders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Credit Score Restoration:</strong> Erase erroneous defaults and DPD tags.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Bureau Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/cibil-dispute-wrong-overdue-entry-filing-process"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    CIBIL Dispute Filing Guide
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Fix wrong overdue entries &rarr;</span>
                </Link>

                <Link
                  href="/dispute-wrong-settled-status-cibil"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Dispute Wrong Settled Status
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Correct bureau status &rarr;</span>
                </Link>

                <Link
                  href="/get-noc-after-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Get NOC After Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Secure formal bank closure &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
