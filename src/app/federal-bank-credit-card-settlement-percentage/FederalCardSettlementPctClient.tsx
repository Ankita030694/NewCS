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
  Percent,
  ExternalLink,
} from 'lucide-react';

export default function FederalCardSettlementPctClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navLinks = [
    { id: 'federal-summary', label: 'Key Settlement Range Summary' },
    { id: 'indicative-bands', label: '1. Indicative Federal Card % Ranges' },
    { id: 'worked-bill-math', label: '2. Sample ₹3.6 Lakh Bill Breakdown' },
    { id: 'scapia-cobrand-rules', label: '3. Celesta, Scapia & OneCard Rules' },
    { id: 'federal-lien-caveat', label: '4. Linked Savings Lien & Caveats' },
    { id: 'federal-pct-faqs', label: '5. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      q: 'What is the typical Federal Bank credit card settlement percentage in India?',
      a: 'On unsecured NPA cards past 90 to 180 days late, past Federal Bank settlements often land between 40% and 65% of the total statement bill. Final numbers depend on core principal vs fees and are never assured.',
    },
    {
      q: 'Who approves settlement on Scapia or OneCard issued with Federal Bank?',
      a: 'Federal Bank Limited is the licensed bank lender on your CIBIL report for co-branded Scapia, OneCard, and Jupiter Edge cards. Your official OTS letter and No Dues Certificate must reflect Federal Bank approval.',
    },
    {
      q: 'Why does Federal Bank waive fees faster than core swipe principal?',
      a: 'Up to 45% APR interest, late fees, and 18% GST inflate an overdue card bill fast. Bank credit teams can waive accrued interest and penal charges far more easily than your original purchase principal.',
    },
    {
      q: 'Can Federal Bank hold funds in my FedMobile or Fi savings account during default?',
      a: 'Yes. Because Federal Bank issues the card directly, Section 171 of the Contract Act lets the bank place a banker lien or set-off hold on linked Federal Bank savings accounts.',
    },
    {
      q: 'Does single lump-sum payment improve Federal Bank OTS terms over 3 instalments?',
      a: 'Yes. One-shot payment inside the same calendar month usually secures a 5% to 12% lower payable sum than a 3-month split plan.',
    },
    {
      q: 'How is CIBIL updated after paying a Federal Bank credit card OTS?',
      a: 'Once you pay all tranches on time, Federal Bank updates your card balance to zero and marks the CIBIL trade line as Settled.',
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
            <Percent className="w-3.5 h-3.5 text-blue-200" />
            <span>Data-Led Card Settlement Guide • Caveats Apply</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Federal Bank Credit Card Settlement % Ranges &amp; OTS Rules
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-white/95 leading-relaxed">
            See realistic One-Time Settlement (OTS) payable ranges for Federal Bank Celesta, Imperio,
            Signet, Scapia, and OneCard credit cards. Understand principal math and RBI caveats.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="#lead-funnel"
              className="px-7 py-3 rounded-full bg-white text-blue-900 hover:bg-slate-100 font-extrabold text-sm shadow-lg inline-flex items-center gap-2"
            >
              <span>Check ₹3L+ Multi-Card Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/tools/credit-card-minimum-due-calculator"
              className="px-6 py-3 rounded-full bg-blue-800/70 border border-white/25 text-white hover:bg-blue-800 font-bold text-sm"
            >
              <span>Run Card Settlement Calculator</span>
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
                <Link href="/loan-settlement/federal-bank" className="hover:text-[#1886ff]">
                  Federal Bank Settlement
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="font-semibold text-slate-900">
                Federal Bank Credit Card Settlement %
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="bg-slate-50 border-b border-slate-200/80 pt-6">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-1.5">
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
            Combined Debt Check Across Cards, PL &amp; Apps (₹3L+ Floor)
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Hold an overdue Federal Bank card plus other cards, personal loans, or app loans
            totaling <strong>₹3,00,000 or more</strong>? Check your single legal relief plan below.
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
              id="federal-summary"
              className="rounded-2xl bg-[#F4F8FE] border border-blue-100 border-l-4 border-l-[#1886ff] p-5 sm:p-6 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4" />
                <span>Federal Bank Card OTS: Realistic Takeaways</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Indicative Payable Band:</strong> Unsecured NPA cards often settle for
                    40% to 65% of total statement dues, subject to bank review and real hardship.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>No Fixed Waiver Exists:</strong> Every OTS offer is discretionary under
                    the RBI June 8, 2023 compromise circular (RBI/2023-24/40).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Co-Brands Count as Federal Bank:</strong> Scapia, OneCard Federal, and
                    Jupiter Edge cards report under Federal Bank Ltd. on CIBIL.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>FD Cards Excluded:</strong> Fixed-deposit backed cards are closed by
                    adjusting the FD lien rather than unsecured OTS discounts.
                  </span>
                </li>
              </ul>
            </div>

            <section id="indicative-bands" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Indicative Federal Bank Credit Card Settlement % by Stage
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Federal Bank does not publish a fixed cut chart. Credit teams check how old your
                default is, how much of the bill is fee bloat, and if you can pay in one shot. See
                typical ranges on unsecured cards below:
              </p>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3.5">Late Stage</th>
                      <th className="p-3.5">Usual Pay % of Bill</th>
                      <th className="p-3.5">Usual Bank Stance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Under 90 DPD (Pre-NPA)</td>
                      <td className="p-3.5">85% to 100% (No deep OTS)</td>
                      <td className="p-3.5">Bank pushes EMI plans or full late pay.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">90 to 180 DPD (Fresh NPA)</td>
                      <td className="p-3.5">50% to 65% of bill</td>
                      <td className="p-3.5">Late fees and part of APR cut with proof.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">180 to 365+ DPD (Aged NPA)</td>
                      <td className="p-3.5">40% to 55% of bill</td>
                      <td className="p-3.5">One-shot deal near your real spend sum.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Note: Ranges above are past guide marks, never a bank promise. Big recent swipes or
                cash in your bank will shrink any fee cut.
              </p>
            </section>

            <section id="worked-bill-math" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Why Statement % Looks Bigger Than Principal % (Sample Math)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Say you spent ₹2,20,000 on an Imperio card before job loss. After 8 months of 45%
                APR, late fees, and 18% GST, your bill grows to ₹3,60,000.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If the bank takes ₹1,80,000 in one shot, that is 50% of the ₹3,60,000 bill. Yet it
                still pays back 82% of your ₹2,20,000 core spend. Read more in our{' '}
                <Link
                  href="/credit-card-over-limit-and-late-fee-before-settlement"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  over-limit and late fee settlement guide
                </Link>
                .
              </p>
            </section>

            <section id="scapia-cobrand-rules" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Direct Cards vs Scapia, OneCard &amp; Jupiter Co-Branded Cards
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Federal Bank issues branch cards like Celesta, Imperio, and Signet, plus popular
                fintech co-branded cards with Scapia, OneCard, and Jupiter. Even if you manage your
                card inside a partner app, Federal Bank Limited owns the loan book and reports the
                account to CIBIL.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before sending any settlement money, confirm that your OTS sanction letter carries a
                valid Federal Bank reference ID and covers all unbilled EMIs. Read our{' '}
                <Link
                  href="/verify-loan-settlement-letter"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  OTS letter verification checklist
                </Link>{' '}
                before paying.
              </p>
            </section>

            <section id="federal-lien-caveat" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Federal Bank Savings Lien Risk &amp; Hardship Proof Needed
              </h2>
              <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>
                  <strong>Linked Account Set-Off:</strong> If you hold a Federal Bank or Fi savings
                  account under the same Customer ID, unpaid card bills can trigger a Section 171
                  lien hold on incoming deposits.
                </li>
                <li>
                  <strong>Hardship Papers Required:</strong> Attach job loss letters, salary slips
                  showing pay cuts, medical bills, or GST closure proof with your request.
                </li>
                <li>
                  <strong>Multi-Card Strategy:</strong> If you owe ₹3,00,000 or more across Federal
                  Bank and other lenders, plan your sequence in our{' '}
                  <Link
                    href="/tools/multiple-credit-card-payoff-vs-settlement-calculator"
                    className="text-[#1886ff] hover:underline font-semibold"
                  >
                    multi-card payoff vs settlement planner
                  </Link>
                  .
                </li>
              </ul>
            </section>

            <CompanySection />

            <section id="federal-pct-faqs" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Frequently Asked Questions on Federal Card Settlement %
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
                  href="https://www.federalbank.co.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-semibold border border-blue-200 inline-flex items-center gap-1"
                >
                  <span>federalbank.co.in (Card MITC)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-semibold border border-blue-200 inline-flex items-center gap-1"
                >
                  <span>rbi.org.in (Compromise Framework)</span>
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
                    Credit Card OTS Analyst
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reviews private bank and fintech co-branded card ledgers under RBI compromise rules.
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
                Federal Card + Multi-Debt?
              </p>
              <p className="text-blue-100 text-xs leading-relaxed">
                Combine Federal Bank cards, other cards, and unsecured loans into one legal relief
                plan.
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
              <p className="font-bold text-slate-900 text-sm">Related Settlement Guides</p>
              <Link
                href="/loan-settlement/federal-bank"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Federal Bank Loan Settlement &rarr;
              </Link>
              <Link
                href="/what-percentage-do-banks-accept-in-loan-settlement"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Bank Settlement Percentage Guide &rarr;
              </Link>
              <Link
                href="/services/credit-card-settlement"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Credit Card Settlement Hub &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
