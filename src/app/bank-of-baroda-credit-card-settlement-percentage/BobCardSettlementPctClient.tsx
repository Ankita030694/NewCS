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

export default function BobCardSettlementPctClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navLinks = [
    { id: 'bobcard-summary', label: 'BOBCARD vs BoB Bank: Key Facts' },
    { id: 'bobcard-ots-bands', label: '1. Indicative BOBCARD % Ranges' },
    { id: 'subsidiary-rule', label: '2. BOBCARD Ltd vs Local BoB Branches' },
    { id: 'eterna-prime-rules', label: '3. Eterna, IRCTC & FD Prime Cards' },
    { id: 'bobcard-safe-closure', label: '4. Verification & Payment Rules' },
    { id: 'bobcard-pct-faqs', label: '5. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      q: 'Who issues Bank of Baroda credit cards and approves settlement offers?',
      a: 'Bank of Baroda cards are issued by BOBCARD Limited (formerly BOB Financial), a separate NBFC unit. Your OTS letter and No Dues Certificate must come from BOBCARD Limited.',
    },
    {
      q: 'What is the typical BOBCARD settlement percentage in India?',
      a: 'On unsecured NPA BOBCARD bills past 90 to 180 days late, past OTS deals often land at 40% to 65% of total dues. Final terms depend on real spends vs fees and are never assured.',
    },
    {
      q: 'Can I settle my BoB credit card at a local Bank of Baroda branch OTS camp?',
      a: 'Most often no. Local Bank of Baroda branch OTS camps cover shop, farm, and home loans. Credit card OTS deals are run centrally by BOBCARD Limited.',
    },
    {
      q: 'Are FD-backed Bank of Baroda Prime cards eligible for OTS waivers?',
      a: 'No. Secured BoB Prime cards backed by a fixed deposit close by breaking that FD rather than giving an unsecured OTS cut.',
    },
    {
      q: 'What happens to Smart EMI plans on Eterna, Premier, or Snapdeal BoB cards?',
      a: 'Once a BOBCARD crosses 90 days late into NPA stage, open store EMIs and Smart EMI plans stop and merge into one card bill.',
    },
    {
      q: 'How do I pay an approved BOBCARD One-Time Settlement safely?',
      a: 'Check your BOBCARD OTS letter first. Then pay straight into your 16-digit BOBCARD number via bobcard.co.in, BillDesk, BBPS, or NEFT.',
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
            <span>BOBCARD Limited (Formerly BOB Financial) Guide</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Bank of Baroda (BOBCARD) Credit Card Settlement % Guide
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-white/95 leading-relaxed">
            Understand realistic One-Time Settlement (OTS) ranges for Bank of Baroda Eterna,
            Premier, Select, IRCTC, and Snapdeal cards issued by BOBCARD Limited.
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
              <span>Calculate Card Interest Trap</span>
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
                <Link href="/loan-settlement/bank-of-baroda" className="hover:text-[#1886ff]">
                  Bank of Baroda Settlement
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="font-semibold text-slate-900">BoB Credit Card Settlement %</li>
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
            Carry an overdue BOBCARD alongside other credit cards, personal loans, or app loans
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
              id="bobcard-summary"
              className="rounded-2xl bg-[#F4F8FE] border border-blue-100 border-l-4 border-l-[#1886ff] p-5 sm:p-6 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4" />
                <span>BOBCARD Settlement: Crucial Entity Facts</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Separate Card Entity:</strong> Bank of Baroda cards are issued by{' '}
                    <strong>BOBCARD Limited</strong> (formerly BOB Financial Solutions Ltd.), a
                    separate RBI-registered NBFC subsidiary.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Indicative Payable Range:</strong> Unsecured NPA BOBCARD accounts often
                    settle between 40% and 65% of total statement dues, subject to NBFC approval.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Up to 43.2% APR Bloat:</strong> BOBCARD charges up to 3.60% monthly
                    finance fees plus 18% GST on unpaid revolving balances.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Prime FD Cards Excluded:</strong> Secured BoB Prime cards settle via FD
                    liquidation, not unsecured compromise discounts.
                  </span>
                </li>
              </ul>
            </div>

            <section id="bobcard-ots-bands" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Indicative BOBCARD Credit Card Settlement % Ranges
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                BOBCARD Limited follows its own NBFC OTS rules under the June 2023 RBI note. Below
                are past settlement ranges seen on unsecured BoB cards across late stages:
              </p>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3.5">Late Stage</th>
                      <th className="p-3.5">Usual Pay % of Bill</th>
                      <th className="p-3.5">Usual BOBCARD Approach</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">1 to 89 DPD (Active / Hold)</td>
                      <td className="p-3.5">85% to 100% of bill</td>
                      <td className="p-3.5">Smart EMI plan offered; no deep principal cut.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">90 to 180 DPD (Fresh NPA)</td>
                      <td className="p-3.5">50% to 65% of bill</td>
                      <td className="p-3.5">Late fees and part of 43.2% APR cut on proof.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">180+ DPD (Aged NPA)</td>
                      <td className="p-3.5">40% to 55% of bill</td>
                      <td className="p-3.5">One-shot deal focused near your real spend sum.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Note: Ranges are past guide marks, never an automatic right. Fresh cash draws or
                first-bill defaults face strict refusal.
              </p>
            </section>

            <section id="subsidiary-rule" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Why Local Bank of Baroda Branches Cannot Settle Your Card
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Just like SBI Card is separate from State Bank of India, <strong>BOBCARD Limited</strong>{' '}
                is a separate firm from local Bank of Baroda branches. Going to a local BoB branch
                during a loan OTS camp will not get you a credit card OTS letter.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Your hardship note, OTS talks, and final No Dues Certificate must all go through
                BOBCARD channels. If you also owe a separate Bank of Baroda loan, see how bank OTS
                works in our{' '}
                <Link
                  href="/loan-settlement/bank-of-baroda"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  Bank of Baroda loan settlement guide
                </Link>
                .
              </p>
            </section>

            <section id="eterna-prime-rules" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Unsecured Eterna / IRCTC Cards vs FD-Backed Prime Cards
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unsecured BOBCARD variants include Eterna, Premier, Select, Easy, Snapdeal, IRCTC,
                HPCL Energia, and defence cards (Vikram, Varun, Rakshamah). Because no FD backs
                these cards, documented income loss allows OTS waivers once the card crosses 90 DPD.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In contrast, the <strong>BOBCARD Prime</strong> card is issued against a ₹15,000+
                Fixed Deposit. If unpaid, the FD pledge clears the card bill directly without an
                unsecured waiver.
              </p>
            </section>

            <section id="bobcard-safe-closure" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Safe BOBCARD OTS Verification &amp; Multi-Card Planning
              </h2>
              <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>
                  Check that your OTS sanction letter comes from an official{' '}
                  <code>@bobcard.co.in</code> or <code>@bobfinancial.com</code> domain and shows a
                  valid system reference ID.
                </li>
                <li>
                  Confirm all unbilled Smart EMI tranches are merged into the total settled balance.
                </li>
                <li>
                  Pay straight to your 16-digit BOBCARD number via official BillDesk, BBPS, or NEFT
                  channels. Read our{' '}
                  <Link
                    href="/verify-loan-settlement-letter"
                    className="text-[#1886ff] hover:underline font-semibold"
                  >
                    settlement letter verification guide
                  </Link>{' '}
                  first.
                </li>
              </ul>
            </section>

            <CompanySection />

            <section id="bobcard-pct-faqs" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Frequently Asked Questions on BOBCARD Settlement %
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
                  href="https://www.bobcard.co.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-semibold border border-blue-200 inline-flex items-center gap-1"
                >
                  <span>bobcard.co.in (Official Portal)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-semibold border border-blue-200 inline-flex items-center gap-1"
                >
                  <span>rbi.org.in (NBFC &amp; Card Rules)</span>
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
                    PSU &amp; NBFC Card Specialist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialises in card-subsidiary OTS rules across BOBCARD Limited and SBICPSL.
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
                BOBCARD + Other Debts?
              </p>
              <p className="text-blue-100 text-xs leading-relaxed">
                Check one structured legal settlement plan across BOBCARD, other cards, and loans
                above ₹3 Lakh.
              </p>
              <a
                href="#lead-funnel"
                className="block w-full bg-white text-blue-900 py-2.5 px-4 rounded-full font-bold text-xs sm:text-sm hover:bg-slate-50"
              >
                Start Assessment
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
                href="/loan-settlement/bank-of-baroda"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Bank of Baroda Loan Settlement &rarr;
              </Link>
              <Link
                href="/tools/multiple-credit-card-payoff-vs-settlement-calculator"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Multi-Card Payoff vs OTS Planner &rarr;
              </Link>
              <Link
                href="/credit-card-blocked-due-to-non-payment"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Blocked Credit Card Guide &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
