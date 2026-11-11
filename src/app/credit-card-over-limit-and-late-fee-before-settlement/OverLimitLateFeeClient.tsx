'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';
import CompanySection from '@/components/CompanySection';
import {
  CheckCircle2,
  BookOpen,
  Bookmark,
  ArrowRight,
  ChevronDown,
  Phone,
  CreditCard,
  ExternalLink,
} from 'lucide-react';

export default function OverLimitLateFeeClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navLinks = [
    { id: 'fee-stack-summary', label: 'Fee Stacking Key Takeaways' },
    { id: 'five-fees-stack', label: '1. Five Charges That Inflate Card Bills' },
    { id: 'rbi-overlimit-rule', label: '2. RBI Rule Against Forced Over-Limit Fees' },
    { id: 'no-penal-compounding', label: '3. Ban on Compounding Penal Charges' },
    { id: 'principal-vs-inflated', label: '4. True Principal vs Inflated OTS Math' },
    { id: 'fee-stack-faqs', label: '5. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      q: 'Can an Indian bank charge a credit card over-limit fee without my consent?',
      a: 'No. Under the RBI Credit Card Master Direction (updated March 7, 2024), banks cannot enable over-limit facility or charge over-limit fees unless the cardholder gave explicit opt-in consent, and never merely because bank interest or fees pushed the balance past the limit.',
    },
    {
      q: 'Can banks charge compounding interest on unpaid late payment fees?',
      a: 'No. Under RBI rules on penal charges and the Credit Card Master Direction, late payment fees and penal charges cannot be capitalized to charge further compounding interest.',
    },
    {
      q: 'Why did my ₹1.5 Lakh credit card balance become ₹2.4 Lakh in six months?',
      a: 'Six months of non-payment stacks 3.5% to 3.99% monthly finance fees on principal, ₹1,000 to ₹1,300 monthly late fees, NACH bounce fees, EMI foreclosure fees, and 18% GST on every fee line.',
    },
    {
      q: 'Do banks waive late fees and over-limit charges during One-Time Settlement?',
      a: 'In most NPA credit card settlements past 90 to 180 days overdue, banks waive accrued penal fees and uncollected finance charges first, negotiating around your verified principal spend, subject to bank policy.',
    },
    {
      q: 'Should I download my past statements before my card app gets locked?',
      a: 'Yes. Saving your last active statement before default proves your true principal spend versus six months of added fees, which strengthens settlement talks.',
    },
    {
      q: 'Where do I complain if a bank charged illegal over-limit fees without opt-in?',
      a: 'Write to the bank Grievance Officer and Principal Nodal Officer citing the RBI Credit Card Master Direction. If unresolved in 30 days, file a free complaint on cms.rbi.org.in.',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section
        className="relative text-white pt-28 pb-12 md:pt-32 md:pb-14 px-4 md:px-8 text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider">
            <CreditCard className="w-3.5 h-3.5 text-blue-200" />
            <span>RBI Credit Card Fee Audit &amp; OTS Guide</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Credit Card Over-Limit &amp; Late Fees Before Settlement
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-white/95 leading-relaxed">
            See why unpaid credit card bills swell by 40% to 60% within months. Know which
            over-limit and penal charges RBI bans, and how statement audits help in ₹3 Lakh+ OTS
            talks.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="#lead-funnel"
              className="px-7 py-3 rounded-full bg-white text-blue-900 hover:bg-slate-100 font-extrabold text-sm shadow-lg inline-flex items-center gap-2"
            >
              <span>Audit &amp; Settle ₹3L+ Debt</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/tools/credit-card-minimum-due-calculator"
              className="px-6 py-3 rounded-full bg-blue-800/70 border border-white/25 text-white hover:bg-blue-800 font-bold text-sm"
            >
              <span>Run Interest Trap Calculator</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-3">
          <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-slate-600">
            <ol className="flex flex-wrap items-center gap-1.5 md:gap-2">
              <li>
                <Link href="/" className="hover:text-[#1886ff]">
                  Home
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li>
                <Link href="/services/credit-card-settlement" className="hover:text-[#1886ff]">
                  Credit Card Settlement
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="font-semibold text-slate-900">
                Over-Limit &amp; Late Fees Before Settlement
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="bg-slate-50 border-b border-slate-200/80 pt-6">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-1.5">
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
            Combined Debt Check (₹3,00,000+ Floor)
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Have stacked late fees and interest pushed your combined credit cards, personal loans,
            and app loans to <strong>₹3 Lakh or above</strong>? Check your legal settlement plan
            below.
          </p>
        </div>
        <InteractiveLeadFunnel className="!pt-4 !pb-8" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)_290px] gap-6 items-start">
          <aside className="sticky top-6 hidden lg:block">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Table of Contents
                </span>
              </div>
              <nav className="space-y-1 text-xs">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="block py-1.5 px-2.5 rounded-lg text-slate-600 hover:text-[#1886ff] hover:bg-blue-50/60 font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-8 min-w-0">
            <div
              id="fee-stack-summary"
              className="rounded-2xl bg-[#F4F8FE] border border-blue-100 border-l-4 border-l-[#1886ff] p-5 sm:p-6 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4" />
                <span>Key RBI Protections on Card Fee Stacking</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Opt-In Required for Over-Limit:</strong> Banks cannot charge over-limit
                    fees without your explicit opt-in consent.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Interest Cannot Trigger Over-Limit Fee:</strong> If bank interest or
                    late fees push your card past its limit, charging an over-limit fee violates RBI
                    norms.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Interest on Penal Fees:</strong> Late fees cannot be capitalized
                    into principal to charge extra 45% APR.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Save Day-1 Statements:</strong> Knowing your true principal spend helps
                    strip away inflated charges during OTS talks.
                  </span>
                </li>
              </ul>
            </div>

            <section id="five-fees-stack" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Five Charges That Inflate Unpaid Credit Card Bills
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                During the 90 to 180 days between your first missed due date and NPA stage, five
                distinct charges stack on your monthly bill:
              </p>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3.5">Charge Type</th>
                      <th className="p-3.5">Typical Indian Bank Rate</th>
                      <th className="p-3.5">GST Added</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Finance Charges (APR)</td>
                      <td className="p-3.5">3.25% to 3.99% per month (39% to 48% p.a.).</td>
                      <td className="p-3.5">+ 18% GST monthly.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Late Payment Fee</td>
                      <td className="p-3.5">₹500 to ₹1,300 per missed billing cycle.</td>
                      <td className="p-3.5">+ 18% GST per cycle.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Over-Limit Penalty</td>
                      <td className="p-3.5">2.5% of over-limit sum (min ₹500 to ₹600).</td>
                      <td className="p-3.5">+ 18% GST (only if opted in).</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Auto-Debit / NACH Bounce</td>
                      <td className="p-3.5">₹450 to ₹550 per failed presentation.</td>
                      <td className="p-3.5">+ 18% GST per bounce.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">EMI Foreclosure Fee</td>
                      <td className="p-3.5">2% to 3% when card EMIs cancel at 90 DPD.</td>
                      <td className="p-3.5">+ 18% GST once.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="rbi-overlimit-rule" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. RBI Ban on Unsolicited Over-Limit Charges
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Suppose your card limit is ₹1,00,000 and your spent balance was ₹97,000. When you
                miss one bill, ₹3,600 in monthly interest plus ₹1,100 in late fees pushes your
                closing bill to ₹1,02,546. Previously, banks slapped a ₹600 over-limit fee every
                single month on top of that!
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the <strong>RBI Credit Card Master Direction (updated March 7, 2024)</strong>,
                card issuers cannot enable over-limit transactions or levy over-limit fees without
                explicit cardholder consent. Crucially, if a card crosses its credit limit solely
                because of interest, taxes, or bank fees, no over-limit penalty can be charged.
              </p>
            </section>

            <section id="no-penal-compounding" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. RBI Rule Against Compounding Interest on Late Fees
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                RBI also mandates that penal charges (such as late payment fees and return fees)
                must be tracked separately and cannot be capitalized into unpaid principal. Banks can
                charge your regular card APR only on actual unpaid spends, never interest-on-late-fee.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Always download your PDF statements before your mobile app blocks statement history.
                Read our guide on{' '}
                <Link
                  href="/credit-card-blocked-due-to-non-payment"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  what happens when a credit card is blocked due to non-payment
                </Link>{' '}
                so you save every billing record early.
              </p>
            </section>

            <section id="principal-vs-inflated" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. How Fee Audits Help During One-Time Settlement Talks
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Collection callers always quote your inflated final demand figure (for example,
                ₹3,90,000) and claim a &quot;30% discount&quot; at ₹2,73,000, even when your actual
                principal spend before default was only ₹2,30,000!
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Separating true principal spend from 6 months of finance fees, late fees, and
                improper over-limit charges anchors OTS talks around real principal. Under RBI&apos;s
                June 8, 2023 compromise settlement rules, banks routinely waive penal charges and
                uncollected interest in genuine hardship cases, though final settlement numbers
                always rest with the bank. Check issuer ranges in our{' '}
                <Link
                  href="/tools/credit-card-minimum-due-calculator"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  credit card minimum due and settlement calculator
                </Link>
                .
              </p>
            </section>

            <CompanySection />

            <section id="fee-stack-faqs" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Frequently Asked Questions on Card Late &amp; Over-Limit Fees
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const open = openFaq === idx;
                  return (
                    <div key={idx} className="rounded-xl border border-slate-200 bg-slate-50/60">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(open ? null : idx)}
                        className="w-full flex items-center justify-between gap-4 p-4 text-left font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                            open ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {open && (
                        <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-semibold border border-blue-200 inline-flex items-center gap-1"
                >
                  <span>rbi.org.in (Card Master Direction)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-semibold border border-blue-200 inline-flex items-center gap-1"
                >
                  <span>cms.rbi.org.in (RBI Ombudsman)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </section>
          </div>

          <aside className="space-y-5 sticky top-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-sm shrink-0"
                >
                  AJ
                </Link>
                <div>
                  <Link
                    href="/author/ashish-jhangra"
                    className="text-sm font-bold text-slate-900 hover:text-[#1886ff] block"
                  >
                    Ashish Jhangra
                  </Link>
                  <p className="text-[11px] font-semibold text-[#1886ff]">
                    Forensic Card Billing Specialist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Audits credit card statements for unauthorized over-limit fees, GST stacking, and
                principal reconciliation.
              </p>
            </div>

            <div
              className="rounded-3xl p-6 text-white text-center space-y-3 shadow-md"
              style={{ backgroundColor: '#2452ae' }}
            >
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block">
                ₹3 Lakh+ Combined Debt
              </span>
              <p className="text-lg font-bold text-white leading-snug">
                Card Bill Doubled by Fees?
              </p>
              <p className="text-blue-100 text-xs leading-relaxed">
                Stop paying blind penal fees. Check your legal OTS plan across all cards and loans.
              </p>
              <a
                href="#lead-funnel"
                className="block w-full bg-white text-blue-900 py-2.5 px-4 rounded-full font-bold text-xs sm:text-sm hover:bg-slate-50"
              >
                Check Eligibility
              </a>
              <div className="pt-1 text-[11px] text-blue-200 flex items-center justify-center gap-1">
                <Phone className="w-3 h-3" />
                <a href="tel:+918800226635" className="font-bold text-white hover:underline">
                  +91-8800226635
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-2.5 text-xs shadow-xs">
              <p className="font-bold text-slate-900 text-sm">Related Card Guides</p>
              <Link
                href="/credit-card-minimum-due-trap"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Escape Minimum Due Trap &rarr;
              </Link>
              <Link
                href="/credit-card-emi-conversion-default-settlement"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Card EMI Default &amp; Foreclosure &rarr;
              </Link>
              <Link
                href="/rbl-credit-card-settlement-letter-format"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                RBL Settlement Letter Format &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
