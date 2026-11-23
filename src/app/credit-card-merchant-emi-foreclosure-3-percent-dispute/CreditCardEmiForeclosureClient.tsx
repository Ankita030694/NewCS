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
  Gavel,
  Landmark,
  Calendar,
  CreditCard
} from 'lucide-react';

export default function CreditCardEmiForeclosureClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Legal Crux' },
    { id: 'rbi-framework', label: '1. RBI Rules on Card EMI Closure' },
    { id: 'calculation-math', label: '2. 3% Penalty, Pro-Rata & GST Math' },
    { id: 'bank-comparison', label: '3. Top Indian Bank Fee Comparison' },
    { id: 'waiver-grounds', label: '4. Legal Grounds for 100% Waiver' },
    { id: 'dispute-sop', label: '5. Step-by-Step Waiver Dispute SOP' },
    { id: 'court-precedents', label: '6. Consumer Court & NCDRC Rulings' },
    { id: 'escalation-matrix', label: '7. 3-Tier GRO to Ombudsman Matrix' },
    { id: 'procedural-timeline', label: '8. Request to Refund Timeline' },
    { id: 'special-cases', label: '9. No-Cost EMI, Default & Lok Adalat' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Does the RBI ban 3% foreclosure charges on credit card EMIs?',
      a: 'No. The RBI ban on foreclosure penalties applies to floating-rate individual non-business loans and eligible MSE loans under the RBI Pre-payment Charges on Loans Directions, 2025. Credit card EMIs are fixed-rate facilities governed by the RBI Credit Card Master Directions, 2022, so banks can charge a disclosed pre-closure fee.'
    },
    {
      q: 'How much do Indian banks charge to foreclose a credit card EMI?',
      a: 'Most major Indian issuers such as HDFC Bank, SBI Card, ICICI Bank, and Axis Bank charge between 3% and 5% of the remaining principal amount, plus 18% GST on that penalty fee and pro-rata daily interest up to the closure date.'
    },
    {
      q: 'When can I legally demand a full waiver of the 3% EMI foreclosure fee?',
      a: 'You can demand a 100% waiver if the foreclosure fee was missing from your Most Important Terms and Conditions (MITC) or EMI booking summary, if the bank converted your purchase without your consent, or if you cancel within a bank-permitted cooling-off window.'
    },
    {
      q: 'Is 18% GST charged on the remaining principal during EMI foreclosure?',
      a: 'No. The 18% GST applies only to the 3% foreclosure penalty and the pro-rata interest component. The remaining principal balance itself is exempt from GST.'
    },
    {
      q: 'What is pro-rata interest in credit card EMI pre-closure?',
      a: 'Pro-rata interest is the daily interest that accrues on your unpaid EMI principal from your last billing statement date until the exact day the bank processes your foreclosure request.'
    },
    {
      q: 'Can I make a partial prepayment toward my credit card EMI?',
      a: 'In most Indian banks, partial prepayment of a credit card EMI is not allowed. You must pay the entire remaining principal, pro-rata interest, and applicable foreclosure fee together to close the EMI plan.'
    },
    {
      q: 'Are No-Cost EMIs exempt from foreclosure charges?',
      a: 'Usually no. Even on No-Cost or Merchant EMIs, the bank structures the transaction as an interest-bearing loan with an upfront merchant discount. Unless your card terms waive pre-closure fees, the 3% penalty and 18% GST still apply.'
    },
    {
      q: 'Will foreclosing a credit card EMI hurt my CIBIL score?',
      a: 'No. Closing a credit card EMI early by paying the full amount improves your available credit limit and reduces your credit utilization ratio, which can help your CIBIL score.'
    },
    {
      q: 'How do I complain to the RBI Ombudsman if a bank refuses to refund an unfair EMI fee?',
      a: 'First file a written complaint with your bank Grievance Redressal Officer and wait 30 days. If the bank rejects your request or fails to reply, file a free complaint online at cms.rbi.org.in under the RBI Integrated Ombudsman Scheme.'
    },
    {
      q: 'Are foreclosure fees waived during credit card settlement or Lok Adalat?',
      a: 'Yes. When an overdue credit card account enters a One-Time Settlement (OTS) or Lok Adalat mediation, banks routinely waive penal interest, late fees, and EMI foreclosure penalties as part of the final compromise.'
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
            <CreditCard className="w-3.5 h-3.5" />
            <span>RBI Credit Card Master Directions &amp; MITC Fee Rules</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How to Waive 3% Foreclosure Charges on Credit Card EMIs
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Understand when Indian banks can legally charge a 3% credit card EMI foreclosure penalty plus 18% GST, and learn the exact RBI rules to dispute hidden fees or secure a full waiver.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Dispute Unfair Card Charges</span>
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
                  <span>RBI Transparency Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Credit Card Master Directions, 2022 and Consumer Protection Act, 2019.
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
                <span>EXECUTIVE BRIEF: CREDIT CARD EMI FORECLOSURE RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Floating-Rate Ban Does Not Cover Cards:</strong> RBI bans foreclosure fees on floating-rate home and individual non-business loans, not fixed-rate credit card EMIs.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Upfront MITC Disclosure Is Mandatory:</strong> Under RBI Master Directions, a bank can charge a 3% foreclosure fee only if it was clearly stated in your MITC before EMI booking.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">18% GST Applies Only to Fees &amp; Interest:</strong> You pay 18% GST on the 3% penalty and pro-rata daily interest, never on the unpaid principal balance.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Goodwill &amp; Cooling-Off Waivers:</strong> High-value cardholders, retention escalations, and cancellations inside cooling-off windows often secure a 100% penalty waiver.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Free RBI Ombudsman Remedy:</strong> If a bank charges an undisclosed or unapproved foreclosure fee, you can demand a full refund at cms.rbi.org.in after 30 days.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1 */}
            <section id="rbi-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Framework &amp; Central Bank Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Rules on Credit Card EMI Foreclosure Charges
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many Indian cardholders think all early loan closures are free under RBI rules. That is not true. The RBI Pre-payment Charges on Loans Directions, 2025 (effective January 1, 2026) ban foreclosure fees only on floating-rate personal loans and eligible small business loans.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit card EMIs work differently. Whether you book a store EMI, convert a card swipe in your app, or take a balance-on-EMI plan, the loan has a fixed rate. Because it is a fixed-rate card loan, it falls under the RBI Credit Card Master Directions, 2022.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the 2022 Master Directions, banks may charge a fee if you close a card EMI early. However, RBI sets one clear rule. The bank cannot hide this fee. It must state the exact fee rate, setup fee, and interest math in the Most Important Terms and Conditions (MITC) and Key Facts Statement (KFS) before you confirm the EMI.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In short, if you agreed to a 3% fee via OTP or in writing, the fee is valid. If the bank hid the fee, raised it without 30 days notice, or booked an EMI without your consent, the bank must refund it.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="calculation-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Cost Breakdown &amp; GST Formula</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. How Banks Calculate 3% Penalty, Pro-Rata &amp; GST
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you call your bank to close a card EMI early, the final bill is higher than the principal shown in your app. This happens because the bank adds three items to your unpaid balance on the closure date.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First is the 3% fee on the unpaid principal. Second is pro-rata daily interest from your last bill date to the closure date. Third is 18% GST on both the 3% fee and the daily interest. Your unpaid principal has zero GST.
              </p>

              {/* Calculation Example Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample Foreclosure Quote (₹1,00,000 Unpaid Principal)</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">15 Days Post-Statement</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Quote Component</th>
                        <th className="p-3">Calculation Basis</th>
                        <th className="p-3">GST Applicable</th>
                        <th className="p-3 text-right">Amount Payable</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">1. Remaining Principal</td>
                        <td className="p-3">Unbilled principal balance</td>
                        <td className="p-3 text-emerald-600 font-semibold">0% (Exempt)</td>
                        <td className="p-3 text-right font-bold font-mono text-slate-900">₹1,00,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">2. Pro-Rata Interest (16% p.a.)</td>
                        <td className="p-3 font-mono">15 days daily accrual</td>
                        <td className="p-3 text-amber-600 font-semibold">18% GST</td>
                        <td className="p-3 text-right font-bold font-mono text-slate-700">₹658 + ₹118 GST</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">3. Foreclosure Penalty (3%)</td>
                        <td className="p-3 font-mono">3% of ₹1,00,000</td>
                        <td className="p-3 text-amber-600 font-semibold">18% GST</td>
                        <td className="p-3 text-right font-bold font-mono text-rose-700">₹3,000 + ₹540 GST</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">4. Initial Processing Fee</td>
                        <td className="p-3">Already billed in Cycle 1</td>
                        <td className="p-3 text-slate-500">Non-refundable</td>
                        <td className="p-3 text-right font-mono text-slate-500">Not reversed</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Pre-Closure Debit</td>
                        <td className="p-3">Principal + Interest + Fee + GST</td>
                        <td className="p-3 text-[#1886ff]">Total Extra Cost: ₹4,316</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹1,04,316</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before closing an EMI, compare the foreclosure cost (₹4,316 in the example above) with the remaining interest you would pay if you let the EMI run. If only two or three installments remain, closing early often costs more than keeping the EMI active.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="bank-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Issuer Policy Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Foreclosure Fees Across Top Indian Card Issuers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Each Indian bank sets its own EMI foreclosure terms inside its card MITC. Most issuers also ban partial prepayments, meaning you must clear the full remaining principal in one payment. Always request a written pre-closure quote before confirming.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Card Issuer</th>
                      <th className="p-3">Standard Foreclosure Fee</th>
                      <th className="p-3">GST &amp; Pro-Rata Interest</th>
                      <th className="p-3">Partial Prepayment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">HDFC Bank</td>
                      <td className="p-3 font-mono">3% of balance principal</td>
                      <td className="p-3">18% GST + daily pro-rata interest</td>
                      <td className="p-3 text-rose-600 font-semibold">Not Allowed</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">SBI Card</td>
                      <td className="p-3 font-mono">3% of outstanding principal</td>
                      <td className="p-3">18% GST + pro-rata interest</td>
                      <td className="p-3 text-rose-600 font-semibold">Not Allowed</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">ICICI Bank</td>
                      <td className="p-3 font-mono">3% to 5% (card/plan specific)</td>
                      <td className="p-3">18% GST + daily interest accrued</td>
                      <td className="p-3 text-rose-600 font-semibold">Not Allowed</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Axis Bank</td>
                      <td className="p-3 font-mono">3% of principal (product MITC)</td>
                      <td className="p-3">18% GST + pro-rata interest</td>
                      <td className="p-3 text-rose-600 font-semibold">Not Allowed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="waiver-grounds" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Valid Legal &amp; Policy Waiver Grounds</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. When Can You Legally Waive the 3% EMI Penalty?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks rarely waive a properly disclosed 3% penalty on request alone. However, you have strong legal and policy grounds to demand a 100% waiver in four specific situations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    1. Missing MITC or KFS Disclosure
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Master Directions, every EMI fee must be disclosed before booking. If the 3% penalty was omitted from your SMS, email confirmation, or KFS, the bank cannot enforce it.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    2. Unsolicited EMI Conversion
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a sales agent or telecaller converted your retail purchase into an EMI without your explicit OTP or written consent, you can demand immediate reversal with zero foreclosure penalty.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    3. Cooling-Off or Cancellation Window
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Several banks allow free EMI cancellation within a short window (such as 7 to 15 days from booking) or when a merchant cancels and refunds the original order.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    4. Fee Hike Without 30-Day Notice
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI requires banks to give 30 days advance notice before raising credit card charges. If your issuer raised the foreclosure rate from 0% or 2% to 3% without notice, you can claim a refund.
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In addition to these four legal grounds, long-standing cardholders with a clean payment record can request a goodwill waiver from the retention desk. While not a legal right, banks sometimes reverse the 3% fee to retain a high-spend customer.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="dispute-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP to Dispute &amp; Waive EMI Fees
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these five steps to build a strong paper trail and challenge an unfair credit card EMI foreclosure charge.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Collect Your EMI Booking &amp; MITC Proof
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download the original EMI amortization schedule, booking confirmation email, and the card MITC active on the booking date. Check whether the 3% fee was clearly stated.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Request a Written Pre-Closure Quote
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ask customer care or check your netbanking portal for an itemized breakup showing unpaid principal, pro-rata interest days, foreclosure percentage, and 18% GST.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Submit a Written Waiver or Dispute Request
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email the bank Grievance Redressal Officer rather than relying on phone calls. Cite any missing disclosure, merchant refund, or retention request, and keep the ticket number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Escalate to the Principal Nodal Officer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If Level 1 support sends a templated refusal, forward your ticket to the bank Principal Nodal Officer (PNO). Attach screenshots proving lack of consent or missing KFS terms.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: File on the RBI CMS Portal After 30 Days
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank rejects your claim or stays silent for 30 days, file a free complaint at cms.rbi.org.in under the RBI Integrated Ombudsman Scheme.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="court-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Consumer Law &amp; Legal Realities</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Consumer Court &amp; NCDRC Precedents on Card Fees
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before filing a case in a District Consumer Commission, it helps to know how Indian courts view credit card charges under the Consumer Protection Act, 2019. Courts draw a sharp line between agreed contract terms and hidden or unfair practices.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Contractual Consent Is Binding</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Consumer commissions generally uphold a 3% foreclosure fee if it was clearly printed in the MITC or KFS that you accepted via OTP. Courts rarely rewrite standard commercial pricing without proof of deception.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Deficiency in Service for Hidden Fees</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 2(11) and Section 2(47) of the Consumer Protection Act, 2019, charging an undisclosed fee or forcing an unapproved EMI is an unfair trade practice and deficiency in service.
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For small foreclosure disputes (such as ₹1,500 to ₹5,000), the RBI Integrated Ombudsman is usually faster and cheaper than Consumer Court. Use Consumer Commissions when the bank causes CIBIL damage, ignores Ombudsman directions, or refuses to refund large sums.
              </p>
            </section>

            {/* SECTION 7 */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Redressal Channels</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Escalation: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Always follow the three-tier banking escalation ladder in order. Skipping Tier 1 or Tier 2 can cause the RBI Ombudsman to return your complaint as premature.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Authority</th>
                      <th className="p-3">Response Window</th>
                      <th className="p-3">Expected Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 1: Card Support / GRO</td>
                      <td className="p-3">Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 15 Days</td>
                      <td className="p-3">Goodwill waivers, cooling-off reversals, and quote corrections.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 2: Head Office PNO</td>
                      <td className="p-3">Principal Nodal Officer</td>
                      <td className="p-3 font-mono">15 to 30 Days</td>
                      <td className="p-3">Audits MITC consent logs and reverses unapproved EMI fees.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Tier 3: RBI Ombudsman</td>
                      <td className="p-3">cms.rbi.org.in (Free)</td>
                      <td className="p-3 font-mono">Post 30 Days</td>
                      <td className="p-3">Binding refund orders and compensation for unfair billing or CIBIL harm.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 8 */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Timeline: EMI Pre-Closure Request to Fee Refund
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking each stage prevents late payment fees or accidental statement interest while your foreclosure dispute is under review.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Stage Window</th>
                      <th className="p-3">Action Phase</th>
                      <th className="p-3">What Happens</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0</td>
                      <td className="p-3 font-mono text-[11px]">Quote &amp; Request</td>
                      <td className="p-3">Request itemized pre-closure quote and check MITC disclosure.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 7</td>
                      <td className="p-3 font-mono text-[11px]">Closure &amp; Billing</td>
                      <td className="p-3">Remaining principal, pro-rata interest, and penalty post to card statement.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 8 to 21</td>
                      <td className="p-3 font-mono text-[11px]">GRO &amp; PNO Review</td>
                      <td className="p-3">Bank reviews written waiver request or consent audit logs.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 31+</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">RBI CMS Filing</td>
                      <td className="p-3">If unresolved, file complaint on cms.rbi.org.in with all proofs.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9 */}
            <section id="special-cases" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Special Cases: No-Cost EMI, Default &amp; Lok Adalat
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit card EMI foreclosure rules behave differently in No-Cost EMI plans, merchant returns, and overdue settlement cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    No-Cost EMI &amp; Merchant Discount Clawbacks
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    No-Cost EMIs are still structured as interest-bearing loans where the merchant gives an upfront discount. Closing early still triggers the 3% fee plus 18% GST unless your MITC says otherwise.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Auto-Foreclosure on Card Default (NPA)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a card defaults for 90 days and turns NPA, banks often auto-foreclose all active EMIs and add 3% penalties plus revolving interest. You can challenge inflated add-ons during settlement.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    One-Time Settlement (OTS) &amp; Lok Adalat
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In formal OTS negotiations or National Lok Adalats, banks routinely waive 100% of EMI foreclosure charges, late fees, and penal interest to recover the core principal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    Merchant Order Cancellation Refunds
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you return a product bought on EMI and the merchant refunds the amount, ask the bank to cancel the EMI plan and reverse any billed foreclosure fee.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 11: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Credit Card EMI Closure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers to common questions on 3% credit card EMI foreclosure fees, 18% GST rules, pro-rata interest, and RBI Ombudsman complaints.
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

            {/* SECTION 12: Citations & Outbound Authority Grid */}
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
                  <strong>RBI Master Direction (2022):</strong> Master Direction on Credit Card and Debit Card Issuance and Conduct Directions, 2022 (MITC &amp; EMI Pricing Transparency).
                </li>
                <li>
                  <strong>RBI Pre-payment Charges Directions (2025):</strong> Reserve Bank of India (Pre-payment Charges on Loans) Directions, 2025 (effective January 1, 2026, distinguishing floating-rate individual loans from fixed-rate card EMIs).
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Redressal for undisclosed charges, unapproved EMI conversions, and billing deficiencies via cms.rbi.org.in.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) (Deficiency in Service) and Section 2(47) (Unfair Trade Practice for hidden or misleading credit charges).
                </li>
                <li>
                  <strong>Central Goods and Services Tax Act, 2017:</strong> 18% GST applicability on banking service fees, foreclosure penalties, and credit card interest components.
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
                  <a href="http://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Disputes Redressal Commission</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>NALSA National Lok Adalat</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/unbilled-credit-card-merchant-emi-foreclosure-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unbilled EMI Foreclosure on Default
                  </Link>
                  <Link href="/credit-card-mitc-charges-changed-without-30-day-notice" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    MITC Fee Change 30-Day Rule
                  </Link>
                  <Link href="/no-cost-emi-hidden-subvention-interest-gst-credit-card" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No-Cost EMI &amp; GST Rules
                  </Link>
                  <Link href="/credit-card-post-purchase-emi-conversion-rejected-help" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EMI Conversion Rejected Help
                  </Link>
                  <Link href="/is-18-percent-gst-waived-credit-card-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    18% GST in Card Settlement
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Services
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
                Specialist in credit card disputes, RBI Master Directions, MITC fee audits, and negotiated debt settlements helping Indian borrowers challenge unfair bank penalties.
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
                  CREDIT CARD FEE &amp; DEBT RELIEF
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Charged Unfair EMI Foreclosure Penalties?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team audits your MITC disclosures, disputes unauthorized EMI fees before the RBI Ombudsman, and negotiates penalty waivers on overdue cards.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Request Free Case Review
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
                  <span><strong>MITC &amp; KFS Fee Audits:</strong> Spot undisclosed EMI penalties fast.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombudsman Escalations:</strong> Structured RBI CMS dispute filings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Penalty &amp; Interest Waivers:</strong> Clean OTS negotiation on defaults.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL &amp; NOC Protection:</strong> Verified closure reporting.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/unbilled-credit-card-merchant-emi-foreclosure-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unbilled EMI Foreclosure on Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">NPA EMI cancellation rules &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-mitc-charges-changed-without-30-day-notice"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    MITC Fee Change Without 30-Day Notice
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Challenge unilateral fee hikes &rarr;</span>
                </Link>

                <Link
                  href="/services/credit-card-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Settlement Services
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal debt relief &amp; NOC &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
