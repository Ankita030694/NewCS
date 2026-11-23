'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  Calculator,
  AlertCircle
} from 'lucide-react';

export default function PersonalLoanInterestRefundClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & RBI Directive' },
    { id: 'rbi-interest-circular', label: '1. RBI Circular: Sanction vs Disbursal' },
    { id: 'broken-period-interest', label: '2. Broken Period Interest Mechanics' },
    { id: 'unfair-lending-practices', label: '3. Four Banned Unfair Practices' },
    { id: 'refund-calculation', label: '4. Interest Refund Calculation Matrix' },
    { id: 'statutory-framework', label: '5. Statutory & Regulatory Framework' },
    { id: 'court-precedents', label: '6. Supreme Court & Consumer Precedents' },
    { id: 'refund-claim-sop', label: '7. Step-by-Step SOP to Claim Refund' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Architecture' },
    { id: 'special-scenarios', label: '9. Balance Transfers & Foreclosures' },
    { id: 'borrower-precautions', label: '10. Common Mistakes & Precautions' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank charge interest on a personal loan from the sanction date?',
      a: 'No. Under RBI Circular RBI/2024-25/30 on Fair Practices Code for Lenders, charging interest from the sanction date or loan agreement execution date rather than the actual fund disbursal date is strictly prohibited. Lenders must charge interest only from the day funds are disbursed.'
    },
    {
      q: 'What did the RBI mandate in circular RBI/2024-25/30 regarding unfair interest?',
      a: 'The RBI directed all commercial banks, co-operative banks, and NBFCs to review their interest application systems, discontinue charging interest prior to actual fund delivery, and refund excess interest and related charges collected from borrowers.'
    },
    {
      q: 'What is Broken Period Interest and when is it legally valid?',
      a: 'Broken Period Interest (BPI) is the interest for the gap days between actual fund disbursal and the start of the first regular monthly EMI cycle. It is valid only when calculated from the exact day funds reach the borrower, not from the sanction or approval date.'
    },
    {
      q: 'What happens if a loan is disbursed by cheque rather than online transfer?',
      a: 'The RBI circular explicitly bars lenders from charging interest from the date written on a physical cheque if the cheque was handed over days later. Interest can only be charged from the date the cheque is actually handed over or cleared.'
    },
    {
      q: 'Is charging a full month interest for a mid-month loan disbursal permitted?',
      a: 'No. The RBI circular expressly flagged charging full-month interest for mid-month disbursals or repayments as an unfair lending practice. Lenders may charge interest only for the exact number of days the funds were actually outstanding.'
    },
    {
      q: 'Can lenders collect advance EMIs while calculating interest on the full loan amount?',
      a: 'No. The RBI ruled that deducting advance instalments upfront while calculating interest on the entire unreduced sanctioned amount violates fair lending standards. The principal base must be reduced immediately by any advance installment collected.'
    },
    {
      q: 'How do I claim a refund for pre-disbursal interest from my bank or NBFC?',
      a: 'Obtain your loan sanction letter, bank account statement showing the actual credit date, and loan amortization schedule. Submit a written dispute to your lender citing RBI circular RBI/2024-25/30 and demanding recalculation and direct account refund.'
    },
    {
      q: 'Where can I file a complaint if the lender refuses to refund excess interest?',
      a: 'If the lender rejects your grievance or fails to reply within 30 days, you can lodge a complaint with the RBI Integrated Ombudsman via cms.rbi.org.in or file a deficiency of service petition before the District Consumer Disputes Redressal Commission.'
    },
    {
      q: 'Does disputing unfair pre-disbursal interest hurt my CIBIL credit score?',
      a: 'No. Requesting a lawful refund or rectification under central bank mandates does not damage your credit score. If a lender wrongfully reports disputed interest as overdue, you can file a data rectification complaint under CICRA regulations.'
    },
    {
      q: 'How does CredSettle assist borrowers in securing refunds for unfair interest charges?',
      a: 'CredSettle audits your loan agreement, sanction letters, and disbursal ledgers to uncover hidden pre-disbursal interest, broken period overcharges, and advance installment deductions. We draft formal legal notices and represent you before the RBI Ombudsman.'
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
            <span>RBI Circular RBI/2024-25/30 Fair Lending Mandate</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Claim Refund for Pre-Disbursal &amp; Broken Period Interest
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Banks and NBFCs cannot charge interest before loan money reaches your account. Learn how RBI circular directives force lenders to refund pre-disbursal interest and unfair charges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Audit Your Loan Interest Now</span>
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
                  <span>Statutory Borrower Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Enforceable under RBI Circular RBI/2024-25/30 and Section 2(47) Consumer Protection Act.
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
                <span>EXECUTIVE BRIEF: RBI RULES ON PRE-DISBURSAL INTEREST REFUND</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Binding Central Bank Ban:</strong> The RBI banned lenders from charging loan interest from sanction or agreement dates. Interest can accrue only from the actual fund disbursal date.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Systemic Refund:</strong> Regulated lenders must audit their past loan accounts and refund excess interest charged to borrowers accounts automatically.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Cheque Transit Protection:</strong> If a loan is paid by physical cheque, interest cannot start on the cheque date. It starts only when the cheque is delivered or cleared.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Advance Installment Shield:</strong> Lenders cannot collect advance EMIs while computing interest on the entire original loan balance. Principal must reduce on day one.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Statutory Dispute Rights:</strong> Borrowers can claim retroactive interest refunds with compensatory interest through the RBI Ombudsman and Consumer Commissions.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: RBI Circular on Interest: Sanction vs Disbursal Rule */}
            <section id="rbi-interest-circular" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Central Bank Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Circular on Interest: Sanction vs Disbursal Rule
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many personal loan borrowers in India face an unfair surprise on their first loan statement. Lenders often charge interest weeks before the money actually enters the borrower bank account. Banks routinely defend this practice by pointing to loan approval dates or agreement dates.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During on-site supervisory inspections, the Reserve Bank of India found widespread abuse. Regulated institutions were charging interest for days or weeks when borrowers had zero access to the loan funds. The central bank recognized this practice as an unfair and unjust enrichment tactic.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To put an immediate stop to this practice, the RBI issued circular RBI/2024-25/30 on April 29, 2024. The directive is titled Fair Practices Code for Lenders – Charging of Interest. It applies to all commercial banks, small finance banks, regional rural banks, co-operative banks, and NBFCs across India.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The circular establishes a firm legal principle. Lenders can charge interest only from the date funds are actually disbursed to the customer. Any interest charged from the sanction date or agreement date is illegal. Lenders must recalculate those charges and refund the difference.
              </p>
            </section>

            {/* SECTION 2: Anatomy of Broken Period Interest & Pre-EMI Billing */}
            <section id="broken-period-interest" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Interim Loan Accounting &amp; Broken Cycles</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Anatomy of Broken Period Interest &amp; Pre-EMI Billing
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To understand why lenders overcharge, borrowers must grasp the concept of Broken Period Interest (BPI). In banking terminology, BPI represents interest charged for odd days. These are the days between loan release and the formal monthly EMI billing cycle.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For instance, suppose your monthly EMI is set for the 5th of every month. If your personal loan money reaches your savings account on the 20th of March, the period from March 20 to April 4 is the broken period. Charging interest for those 15 days is lawful because you held the money.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, lenders frequently distort this calculation. Suppose the bank sanctioned your loan on March 1, printed a cheque on March 5, but transferred funds online on March 20. Opaque banking software often charges interest starting March 1.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In this example, the lender illegally extracts 19 extra days of interest from you. You did not have custody of the money. Under RBI rules, those 19 days of interest represent an unauthorized deduction. You have the statutory right to demand a complete refund.
              </p>
            </section>

            {/* SECTION 3: Four Unfair Lending Practices Banned by the RBI */}
            <section id="unfair-lending-practices" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Prohibited Banking Conduct &amp; Violations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Four Unfair Lending Practices Banned by the RBI
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The April 2024 RBI circular highlighted four distinct methods lenders used to inflate interest revenues unfairly. The central bank ordered all institutions to stop these practices immediately.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Practice 1: Interest from Sanction Date</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders calculated interest starting from loan sanction or agreement execution dates. Lenders delayed actual fund transfer by days or weeks. RBI confirmed interest can only accrue once funds are delivered.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Practice 2: Delayed Physical Cheques</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks printed physical disbursement cheques and started charging interest from the cheque date. Meanwhile, courier or branch handover took 7 to 15 days. Interest before delivery is prohibited.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Practice 3: Full-Month Billing for Tranches</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When funds were disbursed mid-month or repaid mid-month, lenders billed interest for the entire 30-day month. RBI rules require interest strictly for actual days outstanding.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Practice 4: Advance EMI Capital Distortion</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders collected one or two installments upfront as advance EMIs. Yet, they calculated interest on the full sanctioned principal without subtracting advance funds paid on day one.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: Pre-Disbursal Interest Refund Calculation Matrix */}
            <section id="refund-calculation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Impact &amp; Overcharge Quantification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Pre-Disbursal Interest Refund Calculation Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Pre-disbursal interest adds up quickly on high-interest unsecured personal loans. When an NBFC charges 16% to 24% annual interest, even a two-week disbursal delay costs thousands of rupees.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The formula to calculate your unlawful interest overcharge is direct: Multiply the sanctioned loan amount by your annual interest rate. Divide by 365 days, and multiply by the number of delay days between sanction and actual bank credit.
              </p>

              {/* Representative Calculation Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Pre-Disbursal Interest Refund Matrix</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Unlawful Gap Accrual Audit</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Sanctioned Loan</th>
                        <th className="p-3">Annual Interest Rate</th>
                        <th className="p-3">Pre-Disbursal Gap</th>
                        <th className="p-3">Unlawful Interest Billed</th>
                        <th className="p-3 text-right">Mandatory Refund Owed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">₹3,00,000</td>
                        <td className="p-3 font-mono">14.0% p.a.</td>
                        <td className="p-3 text-amber-600 font-semibold">12 Calendar Days</td>
                        <td className="p-3 font-mono text-red-600">₹1,380</td>
                        <td className="p-3 text-right font-bold text-emerald-600 font-mono">₹1,380 + Interest</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">₹5,00,000</td>
                        <td className="p-3 font-mono">16.5% p.a.</td>
                        <td className="p-3 text-amber-600 font-semibold">18 Calendar Days</td>
                        <td className="p-3 font-mono text-red-600">₹4,068</td>
                        <td className="p-3 text-right font-bold text-emerald-600 font-mono">₹4,068 + Interest</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">₹10,00,000</td>
                        <td className="p-3 font-mono">18.0% p.a.</td>
                        <td className="p-3 text-amber-600 font-semibold">21 Calendar Days</td>
                        <td className="p-3 font-mono text-red-600">₹10,356</td>
                        <td className="p-3 text-right font-bold text-emerald-600 font-mono">₹10,356 + Interest</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">₹15,00,000</td>
                        <td className="p-3 font-mono">20.0% p.a.</td>
                        <td className="p-3 text-amber-600 font-semibold">25 Calendar Days</td>
                        <td className="p-3 font-mono text-red-600">₹20,547</td>
                        <td className="p-3 text-right font-bold text-emerald-600 font-mono">₹20,547 + Interest</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">₹25,00,000</td>
                        <td className="p-3 font-mono">15.0% p.a.</td>
                        <td className="p-3 text-amber-600 font-semibold">30 Calendar Days</td>
                        <td className="p-3 font-mono text-red-600">₹30,821</td>
                        <td className="p-3 text-right font-bold text-emerald-600 font-mono">₹30,821 + Interest</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Note: Overcharged amounts must be credited back to your bank account or adjusted against outstanding principal.</span>
                  <span className="font-semibold text-slate-700">Daily Formula: (Principal × Rate) ÷ 365</span>
                </div>
              </div>
            </section>

            {/* SECTION 5: Statutory Framework: Central Bank Mandates & Law */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Legal Enactments &amp; Central Bank Powers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Statutory Framework: Central Bank Mandates &amp; Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The requirement to refund pre-disbursal interest is anchored in strong statutory provisions. The Reserve Bank of India operates under Section 21 and Section 35A of the Banking Regulation Act, 1949. These sections empower the central bank to control interest rates and regulate banking practices in the public interest.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Similar regulatory powers exist under Section 45JA and Section 45L of the Reserve Bank of India Act, 1934. These rules bind Non-Banking Financial Companies. Any loan agreement clause that contradicts these RBI circulars is legally void and unenforceable.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the Consumer Protection Act, 2019, charging interest for money that was not yet disbursed is an Unfair Trade Practice under Section 2(47). It also represents a Deficiency in Service under Section 2(11). Borrowers are entitled to seek restitution, interest, and damages for financial harassment.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Furthermore, the RBI Master Direction on Digital Lending reinforces this rule. Regulated entities must issue a Key Fact Statement (KFS). The KFS must clearly explain the Annual Percentage Rate (APR) and the exact disbursement date. Lenders cannot alter dates after signing.
              </p>
            </section>

            {/* SECTION 6: Court Precedents & Consumer Commission Decisions */}
            <section id="court-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Decisions &amp; Binding Precedents</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Court Precedents &amp; Consumer Commission Decisions
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts have repeatedly ruled against unfair interest practices by financial institutions. The landmark Constitution Bench judgment of the Supreme Court of India in Central Bank of India v. Ravindra (2002) 1 SCC 367 settled key questions on banking interest.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court established that RBI circulars and directives have statutory force. Commercial banks cannot levy interest or compound charges contrary to central bank guidelines. The Court held that any interest levied outside RBI guidelines cannot form part of lawful principal dues.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In consumer forums across India, District and State Consumer Disputes Redressal Commissions regularly penalize lenders for premature interest deductions. When banks debit Pre-EMIs before transferring loan proceeds, commissions treat the deduction as unauthorized billing.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In multiple consumer rulings, commissions have ordered lenders to refund all pre-disbursal collections. In addition, courts routinely award compensation of ₹10,000 to ₹50,000 for mental agony, along with litigation costs, confirming that interest cannot be charged on unreleased funds.
              </p>
            </section>

            {/* SECTION 7: Step-by-Step SOP: Claiming Your Interest Refund */}
            <section id="refund-claim-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Actionable Recovery Protocol &amp; Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Step-by-Step SOP: Claiming Your Interest Refund
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank or NBFC charged you interest before your loan was disbursed, follow this step-by-step Standard Operating Procedure to secure your refund.
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center flex-shrink-0 text-sm">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Gather Documentary Evidence</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Download your official loan sanction letter, loan agreement, and bank account statement. Note the exact sanction date and compare it with the exact date funds hit your account.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center flex-shrink-0 text-sm">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Inspect the Loan Amortization Schedule</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Check your first repayment schedule. Check whether the lender billed you for Broken Period Interest (BPI) or a full month of interest starting from the sanction date.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center flex-shrink-0 text-sm">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Calculate the Unlawful Overcharge</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Count the number of calendar days between sanction and actual bank credit. Calculate the exact daily interest overcharged and prepare a clean calculation sheet.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center flex-shrink-0 text-sm">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Submit a Formal Written Dispute</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Write to your Branch Manager and Customer Service. Cite RBI Circular RBI/2024-25/30. Demand an immediate reversal and credit of the excess interest into your bank account.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center flex-shrink-0 text-sm">
                    5
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Escalate to the Grievance Redressal Officer</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If the branch ignores your dispute or provides a canned refusal, escalate to the Principal Nodal Officer (PNO) of the bank or NBFC within 7 working days.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 8: Three-Tier Escalation: Internal to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Redressal &amp; Dispute Levels</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Three-Tier Escalation: Internal to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When lenders refuse to refund unfair interest, Indian banking regulations provide an established, structured escalation path. You do not have to accept unlawful bank deductions.
              </p>

              {/* Escalation Matrix Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Institutional Dispute Escalation Pathway</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">3-Tier Redressal Architecture</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Dispute Tier</th>
                        <th className="p-3">Target Authority</th>
                        <th className="p-3">Statutory Turnaround</th>
                        <th className="p-3">Core Action &amp; Enforceability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Tier 1: Internal</td>
                        <td className="p-3">Branch Manager &amp; GRO</td>
                        <td className="p-3 font-mono">15 to 30 Days</td>
                        <td className="p-3">Formal demand citing RBI circular RBI/2024-25/30 with bank statement evidence.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Tier 2: Statutory</td>
                        <td className="p-3">RBI Integrated Ombudsman</td>
                        <td className="p-3 font-mono">30 Days Post-Lender Delay</td>
                        <td className="p-3">Online complaint via cms.rbi.org.in. Ombudsman can order refund and up to ₹20 lakh award.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Tier 3: Judicial</td>
                        <td className="p-3">Consumer Forum (DCDRC)</td>
                        <td className="p-3 font-mono">Summary Proceedings</td>
                        <td className="p-3">File complaint for Unfair Trade Practice under CPA 2019 for refund, interest, and damages.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 9: Special Scenarios: Balance Transfers & Foreclosure */}
            <section id="special-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Situations &amp; Technical Complexities</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Special Scenarios: Balance Transfers &amp; Foreclosure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Pre-disbursal interest discrepancies often happen in special financing scenarios. Below are common situations where borrowers must stay vigilant.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Personal Loan Balance Transfers
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When you transfer a loan to a new bank, the new lender issues a pay order to the old bank. If the old bank takes 10 days to credit the cheque, the new lender cannot bill you interest during the transit period.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    Loan Prepayment &amp; Mid-Month Foreclosure
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When you foreclose a personal loan mid-month, the lender cannot charge interest for the entire month. Interest stops on the exact day your payoff funds clear in the loan account.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-indigo-600" />
                    Instant Digital Loans &amp; Fintech Apps
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fintech apps often sanction loans instantly but transfer money via third-party payment gateways hours or days later. Interest must be calculated from the exact second funds enter your bank account.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Advance EMI Deductions from Sanctioned Amount
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If an NBFC sanctions ₹5,00,000 but deducts an advance EMI of ₹15,000 upfront, interest can only be charged on ₹4,85,000. Charging interest on ₹5,00,000 is an explicit RBI violation.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10: Common Borrower Mistakes & Important Precautions */}
            <section id="borrower-precautions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Prudent Measures &amp; Credit Score Protection</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Common Borrower Mistakes &amp; Important Precautions
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When disputing unfair pre-disbursal interest with your lender, avoid these critical mistakes to protect your credit health and legal rights.
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-800">Do Not Abruptly Stop NACH or ECS Mandates:</strong> Cancelling auto-debit mandates while an interest dispute is pending triggers cheque bounce charges and damages your CIBIL score. Continue paying standard EMIs while claiming your refund formally.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-800">Always Communicate in Writing:</strong> Oral discussions with customer service agents leave zero legal proof. Always send emails or registered letters so you have verifiable records for the Banking Ombudsman.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-800">Request Written Recalculation Sheets:</strong> Do not accept verbal assurances that adjustments will happen in future EMIs. Demand an amended amortization schedule showing revised principal and interest balances.
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
                Frequently Asked Questions: Pre-Disbursal Interest
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified guidance regarding pre-disbursal interest calculations, broken period interest rules, RBI circular mandates, and refund procedures.
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
                Official Regulatory Citations &amp; Statutory References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Reserve Bank of India Circular:</strong> RBI/2024-25/30, DoS.CO.PPG.SEC.1/11.01.005/2024-25, Fair Practices Code for Lenders – Charging of Interest (April 29, 2024).
                </li>
                <li>
                  <strong>Reserve Bank of India Act, 1934:</strong> Section 45JA and Section 45L (Powers to issue regulatory directions to NBFCs).
                </li>
                <li>
                  <strong>Banking Regulation Act, 1949:</strong> Section 21 (Power of Reserve Bank to control advances by banking companies) and Section 35A (Power to give directions).
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(47) (Unfair Trade Practice) and Section 2(11) (Deficiency of Service).
                </li>
                <li>
                  <strong>Supreme Court of India Constitution Bench Precedent:</strong> Central Bank of India v. Ravindra and Ors. ((2002) 1 SCC 367) on the statutory binding nature of RBI interest directives.
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
                    <span>RBI Integrated Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Disputes Redressal Commission</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://confonet.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>CONFONET Consumer Court Network</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan Fees Missing in KFS Refund
                  </Link>
                  <Link href="/flat-interest-rate-vs-reducing-apr-personal-loan-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Flat vs Reducing Rate Loan Trap
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Guidelines
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Letter
                  </Link>
                  <Link href="/can-bank-freeze-my-savings-account-for-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Savings Account Freeze Rules
                  </Link>
                  <Link href="/can-bank-attach-ancestral-property-for-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Ancestral Property Attachment Defense
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
                Specialist in banking compliance, RBI Fair Practices Code enforcement, loan interest audits, and debt settlement disputes with deep expertise protecting borrower rights.
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
                  LOAN INTEREST AUDIT SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Charged Interest Before Loan Disbursal?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking advocates audit your loan ledger, cite RBI circular RBI/2024-25/30, issue statutory notices, and compel full refund of illegal interest charges.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Claim Your Interest Refund Now
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
                  <span>RBI Compliant • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>100% RBI Circular Enforcement:</strong> Grounded in Circular RBI/2024-25/30.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Ledger Audit:</strong> Forensic calculation of pre-disbursal interest.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Account Refund:</strong> Reversal or adjustment against outstanding loan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Banking Ombudsman Representation:</strong> Seamless filing on RBI CMS portal.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Loan Fees Missing in KFS Refund
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Mandatory KFS disclosure rules &rarr;</span>
                </Link>

                <Link
                  href="/flat-interest-rate-vs-reducing-apr-personal-loan-trap"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Flat vs Reducing Rate Loan Trap
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Deceptive loan rate analysis &rarr;</span>
                </Link>

                <Link
                  href="/services/personal-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Personal Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Negotiate 50% to 75% loan waiver &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
