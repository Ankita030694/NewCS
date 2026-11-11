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

export default function HdfcCardBlockedClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navLinks = [
    { id: 'hdfc-summary', label: 'Key Takeaways for HDFC Cards' },
    { id: 'hdfc-block-stages', label: '1. HDFC MyCards Block Stages' },
    { id: 'shared-limit-impact', label: '2. Floater & RuPay Card Impact' },
    { id: 'hdfc-lien-risk', label: '3. HDFC Savings Account Hold Risk' },
    { id: 'how-to-unblock-hdfc', label: '4. How to Unblock Early Holds' },
    { id: 'hdfc-ots-closure', label: '5. Settling Permanently Blocked Cards' },
    { id: 'hdfc-blocked-faqs', label: '6. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      q: 'How long after missing an HDFC credit card bill does the card get blocked?',
      a: 'HDFC Bank allows the mandatory RBI three-day grace window past your payment due date. If Minimum Amount Due stays unpaid past those three days, a temporary spend block can start within 7 to 30 days, while 90+ days overdue leads to permanent NPA block.',
    },
    {
      q: 'Can I reactivate my HDFC credit card on MyCards after paying overdue dues?',
      a: 'If your HDFC card is in a temporary overdue hold under 60 days past due, clearing the full overdue minimum via BillDesk, UPI, or HDFC NetBanking usually restores active status within 24 to 48 hours. Permanently closed NPA cards cannot be reopened on MyCards.',
    },
    {
      q: 'Can HDFC Bank place a hold on my HDFC savings account for unpaid card bills?',
      a: 'Yes. Because HDFC Bank issues its credit cards directly on its own bank balance sheet, card agreements include a banker lien and set-off clause under Section 171 of the Indian Contract Act. Unpaid card dues can trigger holds on linked HDFC bank accounts.',
    },
    {
      q: 'What happens to shared limits if I hold two HDFC credit cards and miss one bill?',
      a: 'Many HDFC Bank secondary cards, such as Tata Neu or Rupay UPI cards, share a combined credit limit with your primary HDFC card. When one card is blocked for overdue dues, HDFC usually freezes swipes across all linked cards.',
    },
    {
      q: 'Can a permanently blocked HDFC credit card be settled via One-Time Settlement?',
      a: 'Yes. Once an HDFC card crosses 90+ days past due into NPA stage and you have verifiable financial hardship, HDFC reviews compromise OTS proposals. Indicative settlements often fall between 40% and 60% of the total bill, subject to bank approval.',
    },
    {
      q: 'How do I pay a blocked HDFC credit card safely during settlement?',
      a: 'Always pay directly into your 16-digit HDFC credit card account via NEFT, HDFC NetBanking, or official BillDesk channels only after verifying your written HDFC OTS sanction letter. Never transfer funds to personal UPI IDs.',
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
            <span>HDFC Bank Cardholder Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            HDFC Credit Card Blocked for Non-Payment: Solutions
          </h1>

          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-white/95 leading-relaxed">
            Understand why HDFC MyCards or NetBanking shows your card as blocked. Check whether
            you can reopen the card, protect linked HDFC bank balances, or settle ₹3 Lakh+
            unsecured debt legally.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="#lead-funnel"
              className="px-7 py-3 rounded-full bg-white text-blue-900 hover:bg-slate-100 font-extrabold text-sm shadow-lg inline-flex items-center gap-2"
            >
              <span>Check HDFC &amp; Multi-Debt Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/tools/credit-card-minimum-due-calculator"
              className="px-6 py-3 rounded-full bg-blue-800/70 border border-white/25 text-white hover:bg-blue-800 font-bold text-sm"
            >
              <span>HDFC Minimum Due Calculator</span>
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
                HDFC Credit Card Blocked
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* NEAR-HERO FUNNEL */}
      <div className="bg-slate-50 border-b border-slate-200/80 pt-6">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-1.5">
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
            Total Debt Check Across Cards, PL &amp; App Loans (₹3L+ Floor)
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Owe ₹3,00,000 or more across your HDFC credit card and any other cards, personal
            loans, or app loans? Check your legal settlement options below.
          </p>
        </div>
        <InteractiveLeadFunnel className="!pt-4 !pb-8" />
      </div>

      {/* 3-COLUMN CONTENT */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)_290px] gap-6 items-start">
          {/* LEFT TOC */}
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

          {/* MAIN ARTICLE */}
          <div className="space-y-8 min-w-0">
            <div
              id="hdfc-summary"
              className="rounded-2xl bg-[#F4F8FE] border border-blue-100 border-l-4 border-l-[#1886ff] p-5 sm:p-6 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4" />
                <span>HDFC Card Block: Fast Facts</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Same-Bank Issuance:</strong> HDFC Bank issues cards directly, so
                    unpaid card bills can trigger holds on linked HDFC savings accounts.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Shared Limit Freeze:</strong> An overdue block on a primary Regalia or
                    Millennia card also freezes shared-limit Tata Neu or RuPay UPI floater cards.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>45% APR + 18% GST Continues:</strong> HDFC charges up to 3.75% monthly
                    finance fees plus 18% GST on unpaid balances even while swipes are disabled.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Permanent Close at 90+ DPD:</strong> Once classified as NPA past 90
                    days overdue, HDFC closes the card permanently and opens OTS review channels.
                  </span>
                </li>
              </ul>
            </div>

            <section id="hdfc-block-stages" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. HDFC MyCards &amp; NetBanking Non-Payment Block Stages
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When your HDFC credit card declines online or at a store, check HDFC NetBanking or
                the HDFC MyCards portal first. HDFC places overdue accounts into two main buckets:
              </p>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3.5">Overdue Stage</th>
                      <th className="p-3.5">What Happens on HDFC Card</th>
                      <th className="p-3.5">Can Card Be Reopened?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">1 to 3 Days Past Due</td>
                      <td className="p-3.5">RBI three-day grace window; card remains active.</td>
                      <td className="p-3.5">Already active if paid within 3 days.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">4 to 60 Days Past Due</td>
                      <td className="p-3.5">Late fee up to ₹1,300 + GST; temporary spend hold.</td>
                      <td className="p-3.5">Yes, 24 to 48 hours after overdue minimum clears.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">61 to 90 Days Past Due</td>
                      <td className="p-3.5">Hard block; SmartEMI or InstaLoan pre-closure warning.</td>
                      <td className="p-3.5">Rare; requires full overdue clearance and risk check.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">91+ Days Past Due (NPA)</td>
                      <td className="p-3.5">Card permanently hotlisted; SmartEMI balances merge.</td>
                      <td className="p-3.5">No; must be paid in full or settled via formal OTS.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="shared-limit-impact" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Impact on Shared-Limit Floater and RuPay UPI Cards
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Millions of HDFC customers hold a primary card alongside a virtual RuPay UPI card
                or co-branded Tata Neu / Swiggy card under a single merged credit limit. Each card
                generates its own statement and due date.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If one card enters non-payment block, HDFC freezes available limit across every
                linked floater card as well. Active SmartEMI, Dial-an-EMI, or Jumbo Loan accounts
                tied to the card also face foreclosure penalties once the account crosses 90 days
                overdue. You can read how card EMIs behave during default in our{' '}
                <Link
                  href="/credit-card-emi-conversion-default-settlement"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  credit card EMI conversion default guide
                </Link>
                .
              </p>
            </section>

            <section id="hdfc-lien-risk" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. HDFC Savings Account Hold and Set-Off Clause Explained
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unlike SBI Card (which is a separate NBFC), HDFC Bank issues credit cards directly.
                Under the HDFC Most Important Terms and Conditions (MITC) and Section 171 of the
                Indian Contract Act, the bank retains a banker&apos;s right of general lien and
                set-off over funds lying in your HDFC savings account.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an HDFC card remains unpaid for 60 to 90+ days, you may notice a negative hold
                amount or auto-sweep on your HDFC savings balance. Read our legal explainer on{' '}
                <Link
                  href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  banker&apos;s right of set-off under Section 171
                </Link>{' '}
                to understand how holds work and how formal settlement removes account liens.
              </p>
            </section>

            <section id="how-to-unblock-hdfc" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Steps to Reactivate a Temporarily Blocked HDFC Card
              </h2>
              <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>
                  <strong>Step 1:</strong> Log in to HDFC NetBanking &rarr; Cards &rarr; Enquire
                  to confirm your exact Total Amount Due and Overdue Minimum Due.
                </li>
                <li>
                  <strong>Step 2:</strong> If overdue under 60 days, pay at least the full overdue
                  amount via HDFC NetBanking, Cred/BBPS, or BillDesk so posting is instant.
                </li>
                <li>
                  <strong>Step 3:</strong> Wait 24 to 48 hours for system batch refresh, then check
                  card controls on HDFC MyCards to ensure domestic online/POS switches are enabled.
                </li>
                <li>
                  <strong>Step 4:</strong> Stop paying bare 5% minimums going forward. Check our{' '}
                  <Link
                    href="/tools/credit-card-minimum-due-calculator"
                    className="text-[#1886ff] hover:underline font-semibold"
                  >
                    minimum due calculator
                  </Link>{' '}
                  to see why 45% APR + 18% GST traps revolving HDFC balances for over 18 years.
                </li>
              </ul>
            </section>

            <section id="hdfc-ots-closure" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Settling a Permanently Blocked HDFC Credit Card
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If your HDFC card is permanently blocked after 90+ days and your combined debt
                across cards and unsecured loans is ₹3,00,000 or higher, partial token payments will
                only get eaten by late fees and 45% APR.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under RBI&apos;s June 8, 2023 compromise settlement guidelines, distressed
                cardholders with documented job loss, medical costs, or income loss can request a
                written One-Time Settlement. Indicative HDFC card settlements typically range from
                40% to 60% of the total statement balance depending on fee inflation and NPA age,
                though exact waivers are never guaranteed. Explore our{' '}
                <Link
                  href="/credit-card-settlement-hdfc"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  HDFC credit card settlement guide
                </Link>{' '}
                for documentation checklists and No Dues Certificate steps.
              </p>
            </section>

            <CompanySection />

            <section id="hdfc-blocked-faqs" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                6. Frequently Asked Questions on Blocked HDFC Cards
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
                  href="https://www.hdfcbank.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-semibold border border-blue-200 inline-flex items-center gap-1"
                >
                  <span>hdfcbank.com (Official MITC)</span>
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
                    Banking &amp; Card Dispute Analyst
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Covers HDFC Bank credit card MITC rules, SmartEMI foreclosure math, and RBI
                compromise settlements.
              </p>
            </div>

            <div
              className="rounded-3xl p-6 text-white text-center space-y-3 shadow-md"
              style={{ backgroundColor: '#2452ae' }}
            >
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block">
                ₹3 Lakh+ Total Debt Floor
              </span>
              <p className="text-lg font-bold text-white leading-snug">
                HDFC Card &amp; Account Hold?
              </p>
              <p className="text-blue-100 text-xs leading-relaxed">
                Resolve blocked HDFC cards alongside your other unsecured debts under one legal
                settlement roadmap.
              </p>
              <a
                href="#lead-funnel"
                className="block w-full bg-white text-blue-900 py-2.5 px-4 rounded-full font-bold text-xs sm:text-sm hover:bg-slate-50"
              >
                Check Eligibility Now
              </a>
              <div className="pt-1 text-[11px] text-blue-200 flex items-center justify-center gap-1">
                <Phone className="w-3 h-3" />
                <a href="tel:+918800226635" className="font-bold text-white hover:underline">
                  +91-8800226635
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-2.5 text-xs shadow-xs">
              <p className="font-bold text-slate-900 text-sm">Related HDFC &amp; Card Guides</p>
              <Link
                href="/credit-card-settlement-hdfc"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                HDFC Credit Card Settlement Process &rarr;
              </Link>
              <Link
                href="/credit-card-blocked-due-to-non-payment"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                General Credit Card Blocked Guide &rarr;
              </Link>
              <Link
                href="/sbi-credit-card-blocked-due-to-non-payment"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                SBI Card Blocked for Non-Payment &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
