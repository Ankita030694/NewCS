'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';
import CompanySection from '@/components/CompanySection';
import {
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  Bookmark,
  ArrowRight,
  ChevronDown,
  Phone,
  Lock,
  Check,
  CreditCard,
  Clock,
  Scale,
  AlertTriangle,
  ExternalLink,
} from 'lucide-react';

export default function CreditCardBlockedClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navLinks = [
    { id: 'quick-summary', label: 'Key Takeaways for Cardholders' },
    { id: 'why-banks-block', label: '1. Why Banks Block Unpaid Cards' },
    { id: 'temp-vs-perm-block', label: '2. Temporary vs Permanent Block' },
    { id: 'timeline-dpd', label: '3. Day 1 to Day 180 Block Timeline' },
    { id: 'rbi-card-rules', label: '4. RBI Rules on Blocked Card Bills' },
    { id: 'unblock-vs-settle', label: '5. Unblock Card vs OTS Closure' },
    { id: 'token-payment-warning', label: '6. Avoid Token Payment Mistakes' },
    { id: 'faqs-blocked-card', label: '7. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      q: 'After how many missed bills does a bank block a credit card in India?',
      a: 'Most Indian banks place a temporary swipe block within 7 to 30 days after you miss the Minimum Amount Due. If the card stays unpaid past 90 days into NPA stage, the bank usually blocks and cancels the card permanently.',
    },
    {
      q: 'Does interest keep growing even after my credit card is blocked?',
      a: 'Yes. Blocking your card only stops fresh swipes and cash withdrawals. Monthly finance charges of 3.5% to 3.99% plus 18% GST keep adding to your unpaid balance until you clear or settle the account.',
    },
    {
      q: 'Can I unblock my credit card by paying only the overdue minimum due?',
      a: 'If your card has a temporary block under 60 days past due, paying all overdue minimums usually lifts the hold in 24 to 48 hours. Once a card is permanently cancelled after 90+ days, banks rarely reopen the credit line.',
    },
    {
      q: 'Should I pay a small token amount to recovery callers to unblock my card?',
      a: 'No. Never pay random token sums without checking your statement status in the official bank app. Small token payments on a permanently cancelled NPA card only go toward late fees and do not reactivate your card.',
    },
    {
      q: 'Can I settle a permanently blocked credit card for a reduced lump sum?',
      a: 'Yes. Under the June 8, 2023 RBI settlement framework, banks review One-Time Settlement requests on NPA cards when you face real hardship. Indicative payouts often range from 35% to 60% of the total bill, subject to bank approval.',
    },
    {
      q: 'What happens to reward points when my credit card is blocked for non-payment?',
      a: 'During a temporary block, banks freeze reward redemption until overdue minimums are paid. If your card enters permanent block or settlement, most card agreements forfeit unredeemed reward points.',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO SECTION */}
      <section
        className="relative text-white pt-28 pb-12 md:pt-32 md:pb-14 px-4 md:px-8 overflow-hidden text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="max-w-4xl mx-auto z-10 relative space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider">
            <CreditCard className="w-3.5 h-3.5 text-blue-200" />
            <span>Credit Card Default &amp; Resolution Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Credit Card Blocked Due to Non-Payment: Next Steps
          </h1>

          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-white/95 leading-relaxed">
            Find out whether your card has a temporary payment hold or a permanent NPA block. Learn
            your RBI cardholder rights, how to reactivate early blocks, and how to settle ₹3 Lakh+
            unsecured debt safely.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="#lead-funnel"
              className="px-7 py-3 rounded-full bg-white text-blue-900 hover:bg-slate-100 font-extrabold text-sm shadow-lg inline-flex items-center gap-2 transition-all"
            >
              <span>Check Total Debt Settlement Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/tools/credit-card-minimum-due-calculator"
              className="px-6 py-3 rounded-full bg-blue-800/70 border border-white/25 text-white hover:bg-blue-800 font-bold text-sm inline-flex items-center gap-2 transition-all"
            >
              <span>Calculate Minimum Due Trap</span>
            </Link>
          </div>
        </div>
      </section>

      {/* BREADCRUMB BAR */}
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
                Credit Card Blocked Due to Non-Payment
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* NEAR-HERO FUNNEL WITH ₹3L TOTAL-DEBT FRAMING */}
      <div className="bg-slate-50 border-b border-slate-200/80 pt-6">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-1.5">
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
            Combined Debt Assessment (₹3,00,000 Minimum Floor)
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Have a blocked card alongside other credit cards, personal loans, or app loans totaling{' '}
            <strong>₹3 Lakh or more</strong>? Share your combined debt below for a single
            resolution plan.
          </p>
        </div>
        <InteractiveLeadFunnel className="!pt-4 !pb-8" />
      </div>

      {/* WIDESCREEN 3-COLUMN LAYOUT */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)_290px] gap-6 items-start">
          {/* LEFT SIDEBAR: TOC (NO H3/H4 TAGS) */}
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
                    className="block py-1.5 px-2.5 rounded-lg text-slate-600 hover:text-[#1886ff] hover:bg-blue-50/60 font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* CENTER ARTICLE */}
          <div className="space-y-8 min-w-0">
            {/* SUMMARY BOX */}
            <div
              id="quick-summary"
              className="rounded-2xl bg-[#F4F8FE] border border-blue-100 border-l-4 border-l-[#1886ff] p-5 sm:p-6 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4" />
                <span>Quick Summary: What a Blocked Card Really Means</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Two Very Different Blocks:</strong> Under 60 days overdue is usually a
                    temporary hold. Past 90 days overdue is normally a permanent NPA cancellation.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Interest Does Not Pause:</strong> Even when swipes stop, banks keep
                    billing 42% to 48% APR plus 18% GST on unpaid balances.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Skip Blind Token Payments:</strong> Paying ₹2,000 or ₹5,000 on a
                    permanently blocked card will not reopen the card or stop calls for long.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>RBI Conduct Protection:</strong> Card issuers must follow RBI recovery
                    hours and updated conduct rules taking effect from 1 January 2027.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1 */}
            <section id="why-banks-block" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Why Indian Banks Block Credit Cards for Non-Payment
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Every credit card gives you an open spending limit with no asset collateral. If you
                miss the 5% Minimum Amount Due past three clear days, the bank system flags your
                card to stop fresh spending.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                During a block, store swipes, online OTP payments, and ATM cash withdrawals fail
                right away. Auto-pay bills on the card also bounce. Still, incoming bill payments
                via NEFT, BBPS, or UPI stay open so you can clear or settle your dues.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Bank rules differ slightly by card issuer. Read our step-by-step guides for an{' '}
                <Link
                  href="/hdfc-credit-card-blocked-due-to-non-payment"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  HDFC credit card blocked due to non-payment
                </Link>
                , an{' '}
                <Link
                  href="/sbi-credit-card-blocked-due-to-non-payment"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  SBI credit card blocked due to non-payment
                </Link>
                , or an{' '}
                <Link
                  href="/icici-credit-card-blocked-due-to-non-payment"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  ICICI credit card blocked due to non-payment
                </Link>
                .
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="temp-vs-perm-block" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Temporary Payment Hold vs Permanent NPA Card Block
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before sending any money, check your mobile banking app to confirm which type of
                block applies to your account.
              </p>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3.5">Feature</th>
                      <th className="p-3.5">Temporary Overdue Hold</th>
                      <th className="p-3.5">Permanent NPA Block</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Typical Overdue Age</td>
                      <td className="p-3.5">4 to 60 Days Past Due (SMA-0 / SMA-1).</td>
                      <td className="p-3.5">90+ Days Past Due (NPA or Written-Off).</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Can Card Reopen?</td>
                      <td className="p-3.5">Yes, usually 24 to 48 hours after paying overdue dues.</td>
                      <td className="p-3.5">No, the card line is permanently closed by the bank.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Unbilled Card EMIs</td>
                      <td className="p-3.5">Monthly EMI instalments continue normally.</td>
                      <td className="p-3.5">Bank forecloses remaining EMIs into one lump balance.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Best Resolution Path</td>
                      <td className="p-3.5">Pay full overdue bill or convert balance to EMI.</td>
                      <td className="p-3.5">Pay full closed bill or request formal OTS waiver.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="timeline-dpd" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Day 1 to Day 180 Credit Card Block Timeline
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under RBI asset classification norms, every unpaid credit card moves through four
                predictable stages:
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 list-disc pl-5">
                <li>
                  <strong>Days 1 to 3 Past Due Date:</strong> Mandatory RBI three-day grace window.
                  If you clear Minimum Amount Due in these three days, no late fee or negative
                  CIBIL DPD mark applies.
                </li>
                <li>
                  <strong>Days 4 to 30 (SMA-0):</strong> Late payment fee (₹500 to ₹1,300 plus GST)
                  hits your bill. Automated reminder calls begin and a temporary spend block starts.
                </li>
                <li>
                  <strong>Days 31 to 90 (SMA-1 &amp; SMA-2):</strong> Card limit freezes completely.
                  Over-limit fees may trigger if unpaid interest pushes your balance past your
                  credit limit.
                </li>
                <li>
                  <strong>Day 91 Onwards (NPA &amp; Write-Off Stage):</strong> The card is marked
                  Non-Performing Asset and permanently deactivated. Unbilled EMIs collapse into the
                  main bill, and the bank opens internal compromise settlement review channels.
                </li>
              </ul>
            </section>

            {/* SECTION 4 */}
            <section id="rbi-card-rules" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. RBI Rules Protecting Holders of Blocked Credit Cards
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Even when your credit card is blocked for non-payment, banks and collection agencies
                must follow strict RBI rules:
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 list-disc pl-5">
                <li>
                  <strong>Three-Day Grace Rule:</strong> Under the RBI Credit Card Master Direction
                  (updated March 7, 2024), banks can report defaults or charge late fees only if a
                  bill remains unpaid for more than three days after the due date.
                </li>
                <li>
                  <strong>No Compounding on Penal Fees:</strong> Banks cannot add penal charges into
                  principal to charge further compounding interest.
                </li>
                <li>
                  <strong>Strict Recovery Conduct:</strong> Agents cannot threaten arrest, call
                  relatives, or contact you outside permitted hours. Stricter RBI conduct norms
                  also take effect from 1 January 2027 across regulated lenders.
                </li>
                <li>
                  <strong>Board-Approved OTS Framework:</strong> Under the June 8, 2023 RBI
                  compromise settlement circular, every card issuer maintains a board-approved
                  policy to settle distressed unsecured accounts.
                </li>
              </ul>
            </section>

            {/* SECTION 5 */}
            <section id="unblock-vs-settle" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Should You Unblock the Card or Negotiate Settlement?
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Pick card unblock if your miss was a short cash gap and your total debt is under
                ₹3,00,000. Pay the overdue bill via BBPS or netbanking. Wait 48 hours for the hold
                to lift, then use our{' '}
                <Link
                  href="/tools/multiple-credit-card-payoff-vs-settlement-calculator"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  multiple credit card payoff planner
                </Link>{' '}
                to clear the rest cleanly.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Pick One-Time Settlement only when your card is closed for good or your total card
                and loan debt is ₹3,00,000 or more during real hardship. In NPA stage, past card
                settlements often land between 35% and 60% of the total bill. Exact terms depend on
                the bank and are never promised. Read more in our{' '}
                <Link
                  href="/settle-multiple-credit-cards"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  guide to settling multiple credit cards
                </Link>
                .
              </p>
            </section>

            {/* SECTION 6 */}
            <section id="token-payment-warning" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                6. Why Partial Token Payments Fail on Cancelled Cards
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Field or tele-calling agents often ask you to pay ₹3,000 or ₹10,000 today to
                &quot;stop your file from moving forward&quot; or &quot;unblock your card.&quot; If
                your card is already past 90 days overdue, a partial payment will not unblock the
                card. Instead, the bank adjusts that money against GST and late fees while your
                principal stays unpaid.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Pay toward a permanently blocked NPA card only when you can clear 100% for a Closed
                status OR after you receive a verifiable written OTS sanction letter on official
                bank letterhead. You can check key clauses in our{' '}
                <Link
                  href="/verify-loan-settlement-letter"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  settlement letter verification guide
                </Link>
                .
              </p>
            </section>

            <CompanySection />

            {/* SECTION 7: FAQS */}
            <section id="faqs-blocked-card" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                7. Frequently Asked Questions on Blocked Credit Cards
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

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <span className="text-xs font-bold text-slate-700 block">
                  Official Regulatory References:
                </span>
                <div className="flex flex-wrap gap-2">
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
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR (NO H3/H4 TAGS) */}
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
                    Credit Card Dispute &amp; Debt Specialist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reviews Indian credit card billing disputes, RBI Master Direction norms, and
                multi-issuer OTS closures.
              </p>
            </div>

            <div
              className="rounded-3xl p-6 text-white text-center space-y-3 shadow-md"
              style={{ backgroundColor: '#2452ae' }}
            >
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block">
                ₹3 Lakh+ Combined Debt Relief
              </span>
              <p className="text-lg font-bold text-white leading-snug">
                Multiple Cards Blocked?
              </p>
              <p className="text-blue-100 text-xs leading-relaxed">
                Stop paying blind token fees. Check if your combined card and loan dues qualify for
                a structured OTS plan.
              </p>
              <a
                href="#lead-funnel"
                className="block w-full bg-white text-blue-900 py-2.5 px-4 rounded-full font-bold text-xs sm:text-sm hover:bg-slate-50 transition-all"
              >
                Start Debt Assessment
              </a>
              <div className="pt-1 text-[11px] text-blue-200 flex items-center justify-center gap-1">
                <Phone className="w-3 h-3" />
                <a href="tel:+918800226635" className="font-bold text-white hover:underline">
                  +91-8800226635
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-2.5 text-xs shadow-xs">
              <p className="font-bold text-slate-900 text-sm">Issuer Block Guides</p>
              <Link
                href="/hdfc-credit-card-blocked-due-to-non-payment"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                HDFC Card Blocked for Non-Payment &rarr;
              </Link>
              <Link
                href="/sbi-credit-card-blocked-due-to-non-payment"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                SBI Card Blocked for Non-Payment &rarr;
              </Link>
              <Link
                href="/tools/credit-card-minimum-due-calculator"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Minimum Due Trap Calculator &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
