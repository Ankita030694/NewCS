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

export default function CardEmiDefaultClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navLinks = [
    { id: 'emi-default-summary', label: 'Key Rules on Card EMI Default' },
    { id: 'how-card-emi-bills', label: '1. Why Minimum Due Spikes With EMIs' },
    { id: 'unbilled-foreclosure', label: '2. Automatic 90-DPD EMI Foreclosure' },
    { id: 'merchant-vs-jumbo', label: '3. Merchant EMI vs Jumbo Loan Rules' },
    { id: 'ots-letter-check', label: '4. Critical OTS Clause for Unbilled Dues' },
    { id: 'emi-default-faqs', label: '5. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      q: 'Are credit card EMI instalments included inside the 5% Minimum Amount Due?',
      a: 'In most Indian banks, 100% of your monthly card EMI instalment plus GST is added directly into Minimum Amount Due. You cannot pay just 5% of a monthly EMI instalment.',
    },
    {
      q: 'What happens when I miss two or three monthly credit card EMI bills?',
      a: 'Unpaid EMI instalments roll into your revolving card balance and start attracting 42% to 48% card APR instead of the lower 16% to 20% EMI rate, along with late payment fees.',
    },
    {
      q: 'Why did my card balance suddenly jump at 90 days overdue?',
      a: 'At 90 days past due (NPA stage), banks automatically cancel active SmartEMI, Flexipay, or merchant EMI plans and dump all remaining unbilled principal plus foreclosure fees into your statement.',
    },
    {
      q: 'Does a Jumbo Loan or Encash loan on a credit card need a separate settlement?',
      a: 'Check whether the bank issued a separate loan account number on CIBIL. Linked limit loans merge into the card bill, whereas standalone Insta/Jumbo Loan accounts require explicit mention in your OTS letter.',
    },
    {
      q: 'Can foreclosed credit card EMIs be settled under One-Time Settlement?',
      a: 'Yes. Once unbilled EMIs merge into an NPA credit card account, the entire combined card debt is eligible for compromise settlement review under RBI rules, subject to bank approval and real hardship.',
    },
    {
      q: 'Should I verify that unbilled EMIs are zeroed out before paying an OTS offer?',
      a: 'Always. If an OTS letter settles only billed dues while leaving unbilled EMIs active, future EMI instalments will bill next month and ruin your settlement closure.',
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
            <span>SmartEMI, Flexipay &amp; Merchant EMI Default Guide</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Credit Card EMI Conversion Default &amp; Settlement Guide
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-white/95 leading-relaxed">
            Converted card bills into EMIs or took a loan on your credit card and now cannot pay?
            Learn how banks foreclose unbilled EMIs at 90 DPD and how to settle ₹3 Lakh+ debt cleanly.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="#lead-funnel"
              className="px-7 py-3 rounded-full bg-white text-blue-900 hover:bg-slate-100 font-extrabold text-sm shadow-lg inline-flex items-center gap-2"
            >
              <span>Check Combined Debt Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/tools/credit-card-minimum-due-calculator"
              className="px-6 py-3 rounded-full bg-blue-800/70 border border-white/25 text-white hover:bg-blue-800 font-bold text-sm"
            >
              <span>Minimum Due Calculator</span>
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
              <li className="font-semibold text-slate-900">Card EMI Conversion Default</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="bg-slate-50 border-b border-slate-200/80 pt-6">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-1.5">
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
            Total Unsecured Debt Check (₹3,00,000+ Floor)
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Include both billed and unbilled card EMIs along with any other credit cards, personal
            loans, and app loans. If your combined total is <strong>₹3 Lakh or above</strong>, check
            eligibility below.
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
                  On This Page
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
              id="emi-default-summary"
              className="rounded-2xl bg-[#F4F8FE] border border-blue-100 border-l-4 border-l-[#1886ff] p-5 sm:p-6 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4" />
                <span>How Card EMI Default Differs From Normal Revolving Debt</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>100% EMI Hits Minimum Due:</strong> Monthly card EMIs are added in full
                    to Minimum Amount Due, making minimum bills much higher than 5%.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Rate Jump on Missed Bills:</strong> Unpaid EMI instalments revert from
                    16-20% EMI rates to 42-48% revolving card APR plus 18% GST.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>90-DPD Collapse:</strong> At NPA stage, all remaining unbilled EMIs
                    foreclose into one total card balance.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Full-Balance OTS Rule:</strong> Any settlement letter must cover both
                    billed dues and foreclosed unbilled principal.
                  </span>
                </li>
              </ul>
            </div>

            <section id="how-card-emi-bills" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Why Minimum Amount Due Spikes When You Have Card EMIs
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many users turn a ₹2,00,000 card bill into a 24-month SmartEMI or Flexipay plan for
                relief. Yet bank rules add 100% of each monthly EMI plus 18% GST straight into your
                Minimum Amount Due.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If you miss that full minimum bill, the unpaid EMI slice moves into your normal card
                balance. From the next day, it loses its 18% EMI rate. It then draws 42% to 48% APR
                plus late fees.
              </p>
            </section>

            <section id="unbilled-foreclosure" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Automatic Foreclosure of Unbilled EMIs at 90 Days Past Due
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A ₹60,000 late bill can jump to ₹2,40,000 in Month 4 of default. Why does this
                happen? At 90 days past due (NPA stage), the bank cancels all open store EMIs and
                bill-to-EMI plans at once.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                All future principal, plus a 2% to 3% close fee and 18% GST, drops into one card
                bill. This merge actually helps you. Once all dues sit in one ledger, one One-Time
                Settlement can close the whole card.
              </p>
            </section>

            <section id="merchant-vs-jumbo" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Merchant EMIs vs Credit Card Jumbo / Encash Loans
              </h2>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3.5">Product Type</th>
                      <th className="p-3.5">CIBIL Account Structure</th>
                      <th className="p-3.5">Settlement Handling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Merchant / No-Cost EMI</td>
                      <td className="p-3.5">Inside main 16-digit card account.</td>
                      <td className="p-3.5">Merges into card bill. Settled in 1 OTS.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Within-Limit Balance EMI</td>
                      <td className="p-3.5">Inside main 16-digit card account.</td>
                      <td className="p-3.5">Merges at 90 DPD. Settled in 1 card OTS.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Over-Limit Jumbo / Insta Loan</td>
                      <td className="p-3.5">Often shows as a separate loan on CIBIL.</td>
                      <td className="p-3.5">List that loan number on your OTS letter.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="ots-letter-check" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Mandatory Verification Before Paying Any Card EMI Settlement
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Never pay an OTS deal based only on billed dues while unbilled EMIs stay open. Ask
                the bank to close all linked EMI plans first. Your OTS letter must show the full
                merged balance and confirm zero dues left after you pay.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Check key clauses in our{' '}
                <Link
                  href="/verify-loan-settlement-letter"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  settlement letter verification guide
                </Link>{' '}
                and read{' '}
                <Link
                  href="/credit-card-over-limit-and-late-fee-before-settlement"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  over-limit and late fees before settlement
                </Link>
                .
              </p>
            </section>

            <CompanySection />

            <section id="emi-default-faqs" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Frequently Asked Questions on Card EMI Defaults
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
                    Card Audit &amp; OTS Specialist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Audits billed vs unbilled SmartEMI, Flexipay, and Jumbo Loan ledgers before OTS
                closures.
              </p>
            </div>

            <div
              className="rounded-3xl p-6 text-white text-center space-y-3 shadow-md"
              style={{ backgroundColor: '#2452ae' }}
            >
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block">
                ₹3 Lakh+ Debt Floor
              </span>
              <p className="text-lg font-bold text-white leading-snug">
                Stuck With Unbilled Card EMIs?
              </p>
              <p className="text-blue-100 text-xs leading-relaxed">
                Combine foreclosed card EMIs, Jumbo Loans, and other unsecured debts into one plan.
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
                href="/credit-card-blocked-due-to-non-payment"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Credit Card Blocked Guide &rarr;
              </Link>
              <Link
                href="/credit-card-bill-after-festive-season-cannot-pay"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Post-Festive Card Bill Relief &rarr;
              </Link>
              <Link
                href="/settle-multiple-credit-cards"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Settle Multiple Credit Cards &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
