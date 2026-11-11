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

export default function SbiCardBlockedClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navLinks = [
    { id: 'sbicpsl-crux', label: 'Key Takeaways for SBI Card' },
    { id: 'sbicpsl-vs-sbi-bank', label: '1. SBICPSL vs SBI Bank Difference' },
    { id: 'sbi-card-block-types', label: '2. Temporary Hold vs Permanent Block' },
    { id: 'flexipay-nach-impact', label: '3. Flexipay, Encash & NACH Rules' },
    { id: 'reactivate-sbi-card', label: '4. Steps to Reactivate SBI Card' },
    { id: 'sbi-card-ots-guide', label: '5. Settling Permanently Blocked Cards' },
    { id: 'sbi-card-faqs', label: '6. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      q: 'Can my local State Bank of India branch unblock or settle my SBI credit card?',
      a: 'No. SBI credit cards are issued by SBI Cards and Payment Services Limited (SBICPSL), a separate RBI-registered NBFC subsidiary. Retail SBI bank branches cannot unblock cards or approve credit card settlements.',
    },
    {
      q: 'When does SBI Card block a credit card for non-payment?',
      a: 'After the three-day RBI grace period past your payment due date, SBI Card can place a temporary spend hold within 7 to 30 days of missing Minimum Amount Due. Past 90 days overdue, SBICPSL permanently closes the card as NPA.',
    },
    {
      q: 'How long does SBI Card take to unblock a temporarily suspended card?',
      a: 'If your SBI Card is under 60 days overdue and only temporarily blocked, paying the full overdue balance via the SBI Card mobile app, PayNet, or BBPS normally lifts the hold in 24 to 48 hours.',
    },
    {
      q: 'What happens to Flexipay EMIs when an SBI credit card is permanently blocked?',
      a: 'When an SBI Card enters permanent NPA block after 90 days of non-payment, SBICPSL forecloses active Flexipay and Encash plans, adding remaining principal and foreclosure fees into the total card balance.',
    },
    {
      q: 'Does SBI Rinn Samadhan PSU bank OTS apply to SBI credit cards?',
      a: 'No. SBI Rinn Samadhan schemes cover State Bank of India retail and MSME bank loans. SBI Card (SBICPSL) runs its own separate board-approved compromise settlement process for overdue credit cards.',
    },
    {
      q: 'What is a realistic settlement range on a permanently blocked SBI credit card?',
      a: 'On NPA accounts past 90 to 180 days overdue with documented hardship, indicative SBICPSL settlements often fall between 40% and 60% of the total billed balance, though waivers are discretionary and never guaranteed.',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section
        className="relative text-white pt-28 pb-12 md:pt-32 md:pb-14 px-4 md:px-8 text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider">
            <CreditCard className="w-3.5 h-3.5 text-blue-200" />
            <span>SBI Card (SBICPSL) Resolution Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            SBI Credit Card Blocked for Non-Payment: Full Guide
          </h1>

          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-white/95 leading-relaxed">
            Learn how SBI Cards and Payment Services Limited (SBICPSL) handles overdue blocks,
            when you can reactivate on the SBI Card app, and how to settle ₹3 Lakh+ combined debt
            legally.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="#lead-funnel"
              className="px-7 py-3 rounded-full bg-white text-blue-900 hover:bg-slate-100 font-extrabold text-sm shadow-lg inline-flex items-center gap-2"
            >
              <span>Check Total Debt Settlement Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/sbi-credit-card-settlement-email-id-and-number"
              className="px-6 py-3 rounded-full bg-blue-800/70 border border-white/25 text-white hover:bg-blue-800 font-bold text-sm"
            >
              <span>Official SBI Card Channels</span>
            </Link>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
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
              <li className="font-semibold text-slate-900">
                SBI Credit Card Blocked
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* NEAR-HERO FUNNEL */}
      <div className="bg-slate-50 border-b border-slate-200/80 pt-6">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-1.5">
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
            Combined Debt Assessment (₹3,00,000 Minimum Floor)
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Carry an overdue SBI Card alongside other credit cards, personal loans, or app loans
            totaling <strong>₹3 Lakh or more</strong>? Check your legal settlement plan below.
          </p>
        </div>
        <InteractiveLeadFunnel className="!pt-4 !pb-8" />
      </div>

      {/* 3-COLUMN LAYOUT */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)_290px] gap-6 items-start">
          {/* LEFT TOC */}
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

          {/* MAIN ARTICLE */}
          <div className="space-y-8 min-w-0">
            <div
              id="sbicpsl-crux"
              className="rounded-2xl bg-[#F4F8FE] border border-blue-100 border-l-4 border-l-[#1886ff] p-5 sm:p-6 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4" />
                <span>SBI Card Block: Essential Facts</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Separate Issuer (SBICPSL):</strong> SBI credit cards are issued by SBI
                    Cards and Payment Services Limited, not by local State Bank of India branches.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>App Block vs Permanent Close:</strong> Early overdue blocks lift after
                    bill payment, whereas 90+ DPD NPA blocks close the SBI Card permanently.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>45% APR + 18% GST Continues:</strong> SBICPSL charges up to 3.75% per
                    month plus 18% GST on revolving unpaid balances until settlement or full payoff.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Official Channels Only:</strong> Always verify OTS letters through
                    official sbicard.com customer service channels before making any payment.
                  </span>
                </li>
              </ul>
            </div>

            <section id="sbicpsl-vs-sbi-bank" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Why SBI Bank Branches Cannot Unblock Your SBI Credit Card
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many cardholders visit their home State Bank of India branch when a SimplyCLICK,
                SimplySAVE, or Cashback SBI Card gets blocked. Yet SBI credit cards are issued by{' '}
                <strong>SBI Cards and Payment Services Limited (SBICPSL)</strong>. SBICPSL is a
                separate NBFC based in Gurugram.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because SBICPSL is a separate company from State Bank of India:
              </p>
              <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>
                  Local SBI branch staff cannot unblock SBICPSL cards or waive card late fees.
                </li>
                <li>
                  SBI Rinn Samadhan bank OTS plans cover SBI bank loans only. SBICPSL runs its own
                  card OTS policy under the June 8, 2023 RBI circular.
                </li>
                <li>
                  NACH auto-debit mandates linked to an SBI savings account still bounce and add
                  bounce fees if your bank balance is low.
                </li>
              </ul>
            </section>

            <section id="sbi-card-block-types" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Temporary Overdue Block vs Permanent NPA Closure in SBI Card
              </h2>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3.5">Overdue Window</th>
                      <th className="p-3.5">SBI Card App Status</th>
                      <th className="p-3.5">Next Step for Cardholder</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Days 1 to 3 Past Due</td>
                      <td className="p-3.5">Active under RBI 3-day grace window.</td>
                      <td className="p-3.5">Pay Minimum Due immediately to avoid late fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Days 4 to 60 Past Due</td>
                      <td className="p-3.5">Temporarily blocked for overdue non-payment.</td>
                      <td className="p-3.5">Pay full overdue bill via PayNet/BBPS to reopen.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Days 61 to 90 Past Due</td>
                      <td className="p-3.5">Hard collection hold; over-limit &amp; late fees stack.</td>
                      <td className="p-3.5">Check if full clearance is realistic vs hardship OTS.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">91+ Days Past Due (NPA)</td>
                      <td className="p-3.5">Account permanently closed / written off.</td>
                      <td className="p-3.5">Card cannot reopen; clear in full or negotiate OTS.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="flexipay-nach-impact" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. What Happens to Flexipay, Encash &amp; NACH Auto-Debit
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many SBI Card users carry active <strong>Flexipay</strong> merchant EMIs or{' '}
                <strong>Encash</strong> loans on their card limit. Once your card crosses 90 days of
                non-payment and enters permanent block, SBICPSL cancels ongoing EMI schedules and
                adds the unbilled principal into one combined overdue balance.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Also check if you enabled e-NACH auto-debit for Total Amount Due or Minimum Amount
                Due. Repeated NACH bounces add ₹500+ dishonour charges on both SBICPSL and your
                savings bank, and can trigger Section 25 Payment and Settlement Systems Act
                notices. Read our guide on{' '}
                <Link
                  href="/credit-card-over-limit-and-late-fee-before-settlement"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  credit card over-limit and late fees before settlement
                </Link>{' '}
                to see how these charges stack up.
              </p>
            </section>

            <section id="reactivate-sbi-card" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. How to Unblock an Early Overdue SBI Credit Card
              </h2>
              <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>
                  Open the official <strong>SBI Card mobile app</strong> or log in at sbicard.com to
                  check whether your card is only temporarily blocked (under 60 DPD).
                </li>
                <li>
                  Pay at least the entire overdue amount via SBI Card PayNet, UPI, or BBPS so the
                  credit posts immediately.
                </li>
                <li>
                  Allow 24 to 48 hours for system reactivation, then verify card usage toggles
                  inside Manage Card Usage.
                </li>
                <li>
                  Avoid falling back into 5% minimum payments. Run your numbers in our{' '}
                  <Link
                    href="/tools/credit-card-minimum-due-calculator"
                    className="text-[#1886ff] hover:underline font-semibold"
                  >
                    credit card minimum due calculator
                  </Link>{' '}
                  to plan a clean 12 to 18 month payoff.
                </li>
              </ul>
            </section>

            <section id="sbi-card-ots-guide" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Settling a Permanently Blocked SBI Card Above ₹3 Lakh Debt
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once an SBI Card is closed in NPA stage, paying ₹3,000 or ₹5,000 token sums to
                callers will never reopen the card. If you face real hardship with ₹3,00,000 or
                more in total card and loan dues, a formal One-Time Settlement stops rising fees.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                SBICPSL sends formal settlement letters stating the exact lump-sum or short payment
                plan, due dates, and closure terms. Past SBI Card settlements often land between 40%
                and 60% of the total bill based on NPA age and fee share. Approval is always at
                SBICPSL choice. Check verified contacts in our{' '}
                <Link
                  href="/sbi-credit-card-settlement-email-id-and-number"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  official SBI Card settlement email ID and number guide
                </Link>
                .
              </p>
            </section>

            <CompanySection />

            <section id="sbi-card-faqs" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                6. Frequently Asked Questions on Blocked SBI Credit Cards
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
                  href="https://www.sbicard.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-semibold border border-blue-200 inline-flex items-center gap-1"
                >
                  <span>sbicard.com (Official SBICPSL Portal)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
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

          {/* RIGHT SIDEBAR */}
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
                    SBICPSL &amp; Card Dispute Specialist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Guides Indian cardholders on SBICPSL overdue procedures, Flexipay pre-closures, and
                verified OTS documentation.
              </p>
            </div>

            <div
              className="rounded-3xl p-6 text-white text-center space-y-3 shadow-md"
              style={{ backgroundColor: '#2452ae' }}
            >
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block">
                ₹3 Lakh+ Debt Relief
              </span>
              <p className="text-lg font-bold text-white leading-snug">
                SBI Card Permanently Blocked?
              </p>
              <p className="text-blue-100 text-xs leading-relaxed">
                Combine your overdue SBI Card with other cards and unsecured loans into one legal
                settlement plan.
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
              <p className="font-bold text-slate-900 text-sm">Related SBI Card Guides</p>
              <Link
                href="/sbi-credit-card-settlement-email-id-and-number"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                SBI Card Settlement Email &amp; Helpline &rarr;
              </Link>
              <Link
                href="/credit-card-blocked-due-to-non-payment"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                General Blocked Card Rules &rarr;
              </Link>
              <Link
                href="/hdfc-credit-card-blocked-due-to-non-payment"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                HDFC Card Blocked Guide &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
