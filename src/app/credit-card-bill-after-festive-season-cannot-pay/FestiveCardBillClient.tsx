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

export default function FestiveCardBillClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navLinks = [
    { id: 'festive-summary', label: 'Post-Festive Bill Action Summary' },
    { id: 'why-nov-bills-spike', label: '1. Why Nov & Dec Card Bills Spike' },
    { id: 'avoid-5pct-trap', label: '2. Danger of Paying Only 5% Minimum' },
    { id: 'under-3l-triage', label: '3. Self-Help Triage Below ₹3 Lakh' },
    { id: 'recent-swipe-caveat', label: '4. Important Rule on Fresh Swipes' },
    { id: 'over-3l-hardship', label: '5. Hardship Relief Above ₹3 Lakh' },
    { id: 'festive-faqs', label: '6. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      q: 'Why is my November or December credit card bill higher than expected after Diwali sales?',
      a: 'Festive bills stack instant-discount swipes, No-Cost EMI processing fees, 18% GST on EMI interest components, and existing monthly spends across multiple cards at once.',
    },
    {
      q: 'Should I pay just the 5% minimum due on my post-Diwali credit card bill?',
      a: 'Avoid paying only 5% minimum due for more than one emergency month. Rolling over 95% of a festive bill cancels your 45-day grace window and adds 42% to 48% APR plus 18% GST.',
    },
    {
      q: 'Is converting a festive credit card bill into EMI cheaper than revolving it?',
      a: 'Yes, if your total debt is manageable. Bank post-purchase EMI plans charge 16% to 22% yearly interest, which is less than half of the 42% to 48% revolving card APR.',
    },
    {
      q: 'What happens if I miss bills on stacked No-Cost EMIs across three cards?',
      a: 'Missing payments adds late fees and over-limit fees on each card. If non-payment crosses 90 days into NPA stage, banks cancel ongoing EMIs and add remaining principal to your main overdue bill.',
    },
    {
      q: 'Can I settle a brand-new festive swipe immediately next month?',
      a: 'No. Banks treat immediate default right after big luxury swipes very strictly and only review One-Time Settlements on distressed NPA accounts past 90 to 180 days with real hardship proof.',
    },
    {
      q: 'When should I explore multi-card settlement after festive overspending?',
      a: 'Explore legal settlement only if job loss, business drop, or medical emergency leaves you unable to pay ₹3,00,000 or more in combined debt across all credit cards, personal loans, and app loans.',
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
            <span>Post-Diwali &amp; Festive Card Bill Triage</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Credit Card Bill Too High After Festive Sales: Action Plan
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-white/95 leading-relaxed">
            Staring at November or December credit card statements you cannot clear in full? See how
            to stop 45% APR compounding, rank multi-card bills, and handle ₹3 Lakh+ combined debt.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/tools/multiple-credit-card-payoff-vs-settlement-calculator"
              className="px-7 py-3 rounded-full bg-white text-blue-900 hover:bg-slate-100 font-extrabold text-sm shadow-lg inline-flex items-center gap-2"
            >
              <span>Plan Multi-Card Payoff</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#lead-funnel"
              className="px-6 py-3 rounded-full bg-blue-800/70 border border-white/25 text-white hover:bg-blue-800 font-bold text-sm"
            >
              <span>Check ₹3L+ Hardship Relief</span>
            </a>
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
              <li className="font-semibold text-slate-900">Festive Credit Card Bill Relief</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="bg-slate-50 border-b border-slate-200/80 pt-6">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-1.5">
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
            Combined Debt Assessment (₹3,00,000 Minimum Floor)
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            If festive bills stacked on top of existing credit cards, personal loans, and app loans
            push your total unsecured debt to <strong>₹3 Lakh or above</strong>, check your relief
            options below.
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
              id="festive-summary"
              className="rounded-2xl bg-[#F4F8FE] border border-blue-100 border-l-4 border-l-[#1886ff] p-5 sm:p-6 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4" />
                <span>48-Hour Checklist Before Your Due Date</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Never Rotate Card Cash:</strong> Do not swipe or wallet-load one card
                    to pay another card&apos;s festive bill.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Convert Big Purchases to EMI Early:</strong> If total debt is under ₹3
                    Lakh, convert single large bills to 18% EMI before the due date instead of
                    paying 45% revolving APR.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Watch Hidden No-Cost EMI Charges:</strong> Processing fees (₹199 to
                    ₹299) plus 18% GST on monthly interest still add to your statement due.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Fresh Swipes Need Caution:</strong> Banks scrutinize first-bill defaults
                    heavily; settlement is meant for genuine ongoing debt distress past 90+ DPD.
                  </span>
                </li>
              </ul>
            </div>

            <section id="why-nov-bills-spike" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Why November and December Credit Card Bills Spike
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                During Diwali and year-end online sales, shoppers often swipe three or four cards.
                Each card unlocks a 10% bank discount on phones, gold, flights, or home gear.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Thirty days later, all those bills arrive in the same week. No-Cost EMIs eat up
                your card limit. Processing fees and 18% GST push usage past 90%, leaving too little
                cash to pay the full bill.
              </p>
            </section>

            <section id="avoid-5pct-trap" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Why Paying Only 5% Minimum Due Turns One Sale Into Years of Debt
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Say your post-Diwali bills reach ₹2,50,000 across two cards at 45% APR. Paying the
                ₹12,500 minimum due avoids one late fee. Yet ₹11,062 goes straight to next month&apos;s
                interest and 18% GST.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                You also lose your 45-day grace period on food, fuel, and power bills. Test your
                exact bill in our{' '}
                <Link
                  href="/tools/credit-card-minimum-due-calculator"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  credit card minimum due calculator
                </Link>{' '}
                before you pay just 5%.
              </p>
            </section>

            <section id="under-3l-triage" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Self-Help Triage When Total Debt Is Below ₹3 Lakh
              </h2>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3.5">Option</th>
                      <th className="p-3.5">Typical Cost</th>
                      <th className="p-3.5">When to Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Debt Avalanche Payoff</td>
                      <td className="p-3.5">Normal APR, paid fast.</td>
                      <td className="p-3.5">When you can clear all bills in 3 to 9 months.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Issuer Bill-to-EMI Plan</td>
                      <td className="p-3.5">16% to 22% p.a. + 1-2% fee.</td>
                      <td className="p-3.5">Before due date if pay is steady for 12 months.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Return Unused Sale Items</td>
                      <td className="p-3.5">₹0 refund back to card.</td>
                      <td className="p-3.5">Inside return days to cut balance right away.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="recent-swipe-caveat" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Why You Cannot Immediately Settle Brand-New Festive Swipes
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Keep this rule in mind. Never max out a card on gold or phones hoping for a quick
                cut next month. Bank risk teams flag first-bill defaults strictly and reject early
                waivers.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Try to pay at least 2 to 3 cycles while cutting costs. Banks approve RBI OTS deals
                only when real shocks like job loss, pay cuts, shop closure, or hospital bills push
                accounts past 90 days late.
              </p>
            </section>

            <section id="over-3l-hardship" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Hardship Resolution When Combined Debt Crosses ₹3 Lakh
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Often, festive bills are just the last straw on top of old cards, personal loans,
                and app loans. If your total debt is ₹3,00,000 or more and EMIs beat your pay,
                legal settlement can stop a deeper debt trap.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Compare Snowball payoff and OTS in our{' '}
                <Link
                  href="/tools/multiple-credit-card-payoff-vs-settlement-calculator"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  multiple credit card payoff vs settlement planner
                </Link>
                . You can also read{' '}
                <Link
                  href="/settle-multiple-credit-cards"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  settling multiple credit cards in India
                </Link>
                .
              </p>
            </section>

            <CompanySection />

            <section id="festive-faqs" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                6. Frequently Asked Questions on Post-Festive Card Bills
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
                  <span>rbi.org.in (Credit Card Master Direction)</span>
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
                    Consumer Debt &amp; Card Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Helps Indian families separate manageable EMI plans from ₹3 Lakh+ multi-card debt
                traps.
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
                Overwhelmed by Multiple Bills?
              </p>
              <p className="text-blue-100 text-xs leading-relaxed">
                Check your consolidated settlement roadmap across all cards, personal loans, and app
                loans.
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
              <p className="font-bold text-slate-900 text-sm">Helpful Tools &amp; Guides</p>
              <Link
                href="/tools/credit-card-minimum-due-calculator"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Minimum Due Trap Calculator &rarr;
              </Link>
              <Link
                href="/credit-card-emi-conversion-default-settlement"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Card EMI Default &amp; Settlement &rarr;
              </Link>
              <Link
                href="/credit-card-over-limit-and-late-fee-before-settlement"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Over-Limit &amp; Late Fee Guide &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
