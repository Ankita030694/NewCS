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

export default function IciciCardBlockedClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navLinks = [
    { id: 'icici-summary', label: 'Key Takeaways for ICICI Cards' },
    { id: 'imobile-block-stages', label: '1. iMobile Pay Block Stages' },
    { id: 'amazon-coral-shared', label: '2. Amazon Pay & Coral Shared Limit' },
    { id: 'icici-account-hold', label: '3. ICICI Savings Account Lien Risk' },
    { id: 'reactivate-icici-card', label: '4. How to Reopen Early Holds' },
    { id: 'icici-ots-settlement', label: '5. Settling Permanently Closed Cards' },
    { id: 'icici-blocked-faqs', label: '6. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      q: 'When does ICICI Bank block a credit card for non-payment?',
      a: 'After the mandatory RBI three-day grace window past your payment due date, ICICI Bank can place a temporary spend hold within 7 to 30 days of missing Minimum Amount Due. Past 90 days overdue, ICICI closes the card permanently as NPA.',
    },
    {
      q: 'Does an overdue block on Amazon Pay ICICI Card also block Coral or Rubyx cards?',
      a: 'Yes. ICICI Bank links multiple cards held by one customer under a shared customer ID and credit limit. Missing bills on one ICICI card usually freezes spending across all linked ICICI cards.',
    },
    {
      q: 'Can I unblock my ICICI credit card on iMobile Pay after paying overdue dues?',
      a: 'If your card is under 60 days past due in a temporary hold, paying the full overdue minimum via iMobile Pay, UPI, or BBPS usually restores card access within 24 to 48 hours. Permanently closed NPA cards cannot reopen.',
    },
    {
      q: 'Can ICICI Bank hold money in my ICICI savings account for unpaid card bills?',
      a: 'Yes. Because ICICI Bank issues credit cards directly, its card agreement includes a banker lien and set-off right under Section 171 of the Indian Contract Act over linked ICICI deposit accounts.',
    },
    {
      q: 'Can I settle a permanently blocked ICICI credit card during financial hardship?',
      a: 'Yes. Once an ICICI card crosses 90+ days overdue into NPA status and you face real hardship, ICICI reviews One-Time Settlement offers. Past settlements often range between 40% and 60% of total dues, subject to bank approval.',
    },
    {
      q: 'How should I pay an approved ICICI credit card settlement safely?',
      a: 'Verify your official ICICI OTS sanction letter first, then pay directly to your 16-digit ICICI card number via NEFT, ICICI NetBanking, or official BillDesk channels. Never send cash to private UPI IDs.',
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
            <span>ICICI Bank Cardholder Guide</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            ICICI Credit Card Blocked for Non-Payment: Solutions
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-white/95 leading-relaxed">
            Check why iMobile Pay shows your ICICI card as blocked. Learn how shared limits affect
            Amazon Pay and Coral cards, when reactivation works, and how to settle ₹3 Lakh+ debt.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="#lead-funnel"
              className="px-7 py-3 rounded-full bg-white text-blue-900 hover:bg-slate-100 font-extrabold text-sm shadow-lg inline-flex items-center gap-2"
            >
              <span>Check ICICI &amp; Multi-Debt Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/icici-credit-card-settlement"
              className="px-6 py-3 rounded-full bg-blue-800/70 border border-white/25 text-white hover:bg-blue-800 font-bold text-sm"
            >
              <span>ICICI Card Settlement Guide</span>
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
                <Link
                  href="/credit-card-blocked-due-to-non-payment"
                  className="hover:text-[#1886ff]"
                >
                  Credit Card Blocked Guide
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="font-semibold text-slate-900">ICICI Credit Card Blocked</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="bg-slate-50 border-b border-slate-200/80 pt-6">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-1.5">
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
            Total Debt Check Across Cards, PL &amp; App Loans (₹3L+ Floor)
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Carry an overdue ICICI credit card plus other cards, personal loans, or app loans
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
              id="icici-summary"
              className="rounded-2xl bg-[#F4F8FE] border border-blue-100 border-l-4 border-l-[#1886ff] p-5 sm:p-6 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4" />
                <span>ICICI Card Block: Key Facts</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Linked Card Freeze:</strong> Missing bills on an Amazon Pay ICICI Card
                    also freezes Coral, Rubyx, Sapphiro, or RuPay cards under your customer ID.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Interest Keeps Adding:</strong> ICICI charges up to 3.75% monthly
                    interest (45% APR) plus 18% GST even while swipes are disabled.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Same-Bank Lien Clause:</strong> Unpaid ICICI card dues can trigger lien
                    holds on money kept in a linked ICICI savings account.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Permanent Close at 90+ DPD:</strong> Cards past 90 days overdue close
                    for good and must be paid in full or settled via written OTS.
                  </span>
                </li>
              </ul>
            </div>

            <section id="imobile-block-stages" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. ICICI iMobile Pay Non-Payment Block Stages
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Open iMobile Pay or ICICI NetBanking to check your exact overdue days before making
                any payment. ICICI treats early payment holds very differently from 90-day NPA blocks.
              </p>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3.5">Overdue Window</th>
                      <th className="p-3.5">ICICI Card Status</th>
                      <th className="p-3.5">Reactivation Scope</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">1 to 3 Days Past Due</td>
                      <td className="p-3.5">Active under RBI 3-day grace rule.</td>
                      <td className="p-3.5">Stays active if Minimum Due is paid.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">4 to 60 Days Past Due</td>
                      <td className="p-3.5">Temporary overdue block; late fees apply.</td>
                      <td className="p-3.5">Reopens 24 to 48 hours after overdue bill clears.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">61 to 90 Days Past Due</td>
                      <td className="p-3.5">Hard collection freeze; Insta EMI warnings.</td>
                      <td className="p-3.5">Rare; subject to internal credit review.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">91+ Days Past Due (NPA)</td>
                      <td className="p-3.5">Card permanently closed; EMIs foreclosed.</td>
                      <td className="p-3.5">Cannot reopen; clear full bill or settle via OTS.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="amazon-coral-shared" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Shared Limits Across Amazon Pay, Coral &amp; RuPay Cards
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                ICICI often pairs a Coral RuPay card with an Amazon Pay Visa card on one shared
                limit. If you miss bills on one card, ICICI freezes all cards linked to your ID.
                Even a card with zero dues stops working right away.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                At 90 days past due, active store EMIs and Insta Loans also merge into one bill.
                Read our guide on{' '}
                <Link
                  href="/credit-card-emi-conversion-default-settlement"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  credit card EMI conversion default and settlement
                </Link>{' '}
                to see how unbilled EMIs work.
              </p>
            </section>

            <section id="icici-account-hold" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. ICICI Savings Account Lien &amp; Auto-Debit Risks
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                ICICI Bank issues its cards directly from the main bank. Its card terms allow a
                banker&apos;s lien under Section 171 of the Contract Act. If your card is 60 to 90
                days late, ICICI can hold or pull cash from a linked ICICI savings account.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Check your rights in our guide on{' '}
                <Link
                  href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  banker&apos;s right of set-off on savings accounts
                </Link>
                .
              </p>
            </section>

            <section id="reactivate-icici-card" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. How to Reopen an Early Overdue ICICI Credit Card
              </h2>
              <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>
                  Open iMobile Pay and check Cards &amp; Forex. Confirm your card is under 60 days
                  past due and not closed for good.
                </li>
                <li>
                  Pay the full overdue bill via iMobile Pay, BillDesk, or BBPS for fast credit.
                </li>
                <li>
                  Wait 24 to 48 hours. Then check your Manage Card switches for online and shop use.
                </li>
                <li>
                  Use our{' '}
                  <Link
                    href="/tools/credit-card-minimum-due-calculator"
                    className="text-[#1886ff] hover:underline font-semibold"
                  >
                    minimum due calculator
                  </Link>{' '}
                  to stop paying just 5% and clear your balance fast.
                </li>
              </ul>
            </section>

            <section id="icici-ots-settlement" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Settling a Permanently Blocked ICICI Card Above ₹3 Lakh
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once an ICICI card hits NPA stage, small token payments will not reopen it. If your
                total debt across cards and loans is ₹3,00,000 or more, stop guessing. Under the
                June 8, 2023 RBI circular, you can seek a formal One-Time Settlement with proof of
                hardship.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Past ICICI settlements often land at 40% to 60% of total dues. Results depend on
                NPA age and fee build-up, and bank sign-off is never assured. Read our{' '}
                <Link
                  href="/icici-credit-card-settlement"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  ICICI credit card settlement guide
                </Link>{' '}
                for full steps.
              </p>
            </section>

            <CompanySection />

            <section id="icici-blocked-faqs" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                6. Frequently Asked Questions on Blocked ICICI Cards
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
                  href="https://www.icicibank.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-semibold border border-blue-200 inline-flex items-center gap-1"
                >
                  <span>icicibank.com (Card MITC)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-semibold border border-blue-200 inline-flex items-center gap-1"
                >
                  <span>rbi.org.in (Card Rules)</span>
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
                    Credit Card Dispute Analyst
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Focuses on private bank credit card MITC rules, shared-limit blocks, and RBI OTS
                closures.
              </p>
            </div>

            <div
              className="rounded-3xl p-6 text-white text-center space-y-3 shadow-md"
              style={{ backgroundColor: '#2452ae' }}
            >
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block">
                ₹3 Lakh+ Combined Debt Floor
              </span>
              <p className="text-lg font-bold text-white leading-snug">
                ICICI Cards Frozen?
              </p>
              <p className="text-blue-100 text-xs leading-relaxed">
                Check your single legal settlement plan across all ICICI cards, other cards, and
                unsecured loans.
              </p>
              <a
                href="#lead-funnel"
                className="block w-full bg-white text-blue-900 py-2.5 px-4 rounded-full font-bold text-xs sm:text-sm hover:bg-slate-50"
              >
                Start Debt Check
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
                href="/icici-credit-card-settlement"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                ICICI Credit Card Settlement &rarr;
              </Link>
              <Link
                href="/hdfc-credit-card-blocked-due-to-non-payment"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                HDFC Card Blocked Guide &rarr;
              </Link>
              <Link
                href="/sbi-credit-card-blocked-due-to-non-payment"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                SBI Card Blocked Guide &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
