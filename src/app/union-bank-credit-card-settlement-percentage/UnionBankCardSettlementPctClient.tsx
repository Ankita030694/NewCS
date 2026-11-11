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

export default function UnionBankCardSettlementPctClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navLinks = [
    { id: 'union-summary', label: 'Union Bank Card OTS Takeaways' },
    { id: 'union-ots-bands', label: '1. Indicative Union Card % Ranges' },
    { id: 'card-vs-loan-ots', label: '2. Card Compromise vs Retail Loan OTS' },
    { id: 'vyom-lien-risk', label: '3. Vyom App, Savings Lien & FD Cards' },
    { id: 'union-closure-steps', label: '4. Safe Payment & NDC Steps' },
    { id: 'union-pct-faqs', label: '5. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      q: 'What is the indicative Union Bank of India credit card settlement percentage?',
      a: 'On unsecured NPA Union Bank cards past 90 to 180+ days late, past OTS deals often land at 45% to 70% of the full bill. PSU sign-off depends on NPA age and core spend ratio, and is never assured.',
    },
    {
      q: 'Are Union Bank credit cards issued by a separate subsidiary or the bank itself?',
      a: 'Union Bank of India issues its RuPay, Visa, and JCB cards straight from its own Card & Digital Wing (seen inside the Vyom app).',
    },
    {
      q: 'Can Union Bank recover overdue card bills from my Union Bank savings account?',
      a: 'Yes. Because Union Bank issues the card itself, Section 171 of the Contract Act lets the bank place a lien or pull cash from linked Union Bank accounts.',
    },
    {
      q: 'How does Union Bank card settlement differ from agricultural or MSME OTS schemes?',
      a: 'Fixed PSU OTS schemes cover set shop or farm loans. Unsecured credit cards go through case-by-case review aimed at getting back core spend while cutting fee bloat.',
    },
    {
      q: 'Are FD-backed Union Bank credit cards eligible for OTS haircuts?',
      a: 'No. When a Union Bank card sits against a fixed deposit lien, late dues clear straight from that pledged FD.',
    },
    {
      q: 'How do I close a Union Bank credit card cleanly after OTS approval?',
      a: 'Get a signed OTS letter with a bank code, pay straight into your 16-digit Union Bank card before the due date, and collect your No Dues Certificate in 30 to 45 days.',
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
            <span>Union Bank of India PSU Card OTS Guide</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Union Bank of India Credit Card Settlement % &amp; OTS Guide
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-white/95 leading-relaxed">
            Review realistic One-Time Settlement (OTS) ranges for Union Bank RuPay Select, Platinum,
            Divaa, Wellness, and Visa cards. Learn PSU committee norms, Vyom lien risks, and caveats.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="#lead-funnel"
              className="px-7 py-3 rounded-full bg-white text-blue-900 hover:bg-slate-100 font-extrabold text-sm shadow-lg inline-flex items-center gap-2"
            >
              <span>Check ₹3L+ Multi-Debt Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/tools/credit-card-minimum-due-calculator"
              className="px-6 py-3 rounded-full bg-blue-800/70 border border-white/25 text-white hover:bg-blue-800 font-bold text-sm"
            >
              <span>Test Card Interest Trap</span>
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
                <Link href="/loan-settlement/union-bank" className="hover:text-[#1886ff]">
                  Union Bank Settlement
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="font-semibold text-slate-900">Union Bank Credit Card Settlement %</li>
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
            Carry an overdue Union Bank card alongside other credit cards, personal loans, or app
            loans totaling <strong>₹3,00,000 or more</strong>? Check your legal relief plan below.
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
              id="union-summary"
              className="rounded-2xl bg-[#F4F8FE] border border-blue-100 border-l-4 border-l-[#1886ff] p-5 sm:p-6 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4" />
                <span>Union Bank Card Settlement: Core Facts</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Indicative Payable Range:</strong> Unsecured Union Bank NPA cards often
                    settle around 45% to 70% of total statement dues, subject to committee sign-off.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Moderate PSU Card APR:</strong> Union Bank charges ~2.95% to 3.00%
                    monthly interest (35.4% to 36% APR), so principal forms a larger slice of your
                    bill than on 48% APR private cards.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>In-House Issuance:</strong> Cards sit on Union Bank&apos;s own balance
                    sheet, creating direct set-off risk on linked Union Bank savings accounts.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Lok Adalat &amp; Recovery Camps:</strong> Aged Union Bank card NPAs are
                    frequently settled cleanly during quarterly Lok Adalat benches.
                  </span>
                </li>
              </ul>
            </div>

            <section id="union-ots-bands" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Indicative Union Bank Credit Card Settlement % by Stage
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Union Bank checks unpaid card files under the June 8, 2023 RBI circular. Below are
                past settlement ranges seen on unsecured Union RuPay and Visa cards:
              </p>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3.5">Late Stage</th>
                      <th className="p-3.5">Usual Pay % of Bill</th>
                      <th className="p-3.5">Usual PSU Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">1 to 89 DPD (SMA Stage)</td>
                      <td className="p-3.5">90% to 100% of bill</td>
                      <td className="p-3.5">Vyom EMI plan or late bill pay expected.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">90 to 365 DPD (NPA)</td>
                      <td className="p-3.5">55% to 70% of bill</td>
                      <td className="p-3.5">Late fees and part of interest cut.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">365+ DPD (Aged NPA)</td>
                      <td className="p-3.5">45% to 60% of bill</td>
                      <td className="p-3.5">Full interest cut or Lok Adalat one-shot deal.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Note: Figures above are past guide ranges, never fixed rights. Active pay credits
                in Union Bank or an FD pledge remove any fee cut.
              </p>
            </section>

            <section id="card-vs-loan-ots" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Credit Card Compromise vs Union Bank Retail Loan OTS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many users mix up yearly PSU loan OTS drives (for small shop, farm, or term loans)
                with credit card settlements. Cards carry 36% APR billing and store EMIs, so panels
                weigh your real card spends against added interest and GST.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Do you also hold a Union Bank personal or shop loan? Check how bank loan OTS works
                in our{' '}
                <Link
                  href="/loan-settlement/union-bank"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  Union Bank loan settlement hub
                </Link>
                .
              </p>
            </section>

            <section id="vyom-lien-risk" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Vyom App Linked Accounts, Lien Risk &amp; FD Cards
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Most Union Bank cardholders received their RuPay or Visa card against an existing
                Union Bank savings, salary, or former Andhra/Corporation Bank account visible in the
                Vyom app. Under Section 171 of the Contract Act, overdue card bills can trigger an
                automatic hold on linked Union Bank deposits.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Check your card onboarding form as well. If your card was issued against a 100%
                Fixed Deposit lien, the bank clears overdue bills straight from that FD.
              </p>
            </section>

            <section id="union-closure-steps" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Safe Union Bank Card OTS Payment &amp; NDC Checklist
              </h2>
              <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>
                  Submit a written hardship request attaching income-loss or medical documents once
                  the card enters NPA stage.
                </li>
                <li>
                  Insist on a signed Union Bank OTS sanction letter stating the exact settlement
                  amount, due date, and full waiver of remaining charges.
                </li>
                <li>
                  Pay directly into your 16-digit Union Bank card account via Vyom, BillDesk, BBPS,
                  or NEFT, and obtain your No Dues Certificate within 30 to 45 days. Read{' '}
                  <Link
                    href="/verify-loan-settlement-letter"
                    className="text-[#1886ff] hover:underline font-semibold"
                  >
                    how to verify any settlement letter
                  </Link>
                  .
                </li>
              </ul>
            </section>

            <CompanySection />

            <section id="union-pct-faqs" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Frequently Asked Questions on Union Bank Card Settlement %
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
                  href="https://www.unionbankofindia.co.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-semibold border border-blue-200 inline-flex items-center gap-1"
                >
                  <span>unionbankofindia.co.in (Official Site)</span>
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
                    PSU Bank &amp; Card OTS Specialist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Assists borrowers with PSU credit card settlements, Lok Adalat closures, and multi-card
                relief above ₹3 Lakh.
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
                Union Card + Other Debts?
              </p>
              <p className="text-blue-100 text-xs leading-relaxed">
                Combine Union Bank cards, private cards, and personal loans into one legal relief
                plan.
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
              <p className="font-bold text-slate-900 text-sm">Related Union &amp; Card Guides</p>
              <Link
                href="/loan-settlement/union-bank"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Union Bank Loan Settlement &rarr;
              </Link>
              <Link
                href="/pnb-credit-card-settlement-percentage"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                PNB Credit Card Settlement % &rarr;
              </Link>
              <Link
                href="/bank-of-baroda-credit-card-settlement-percentage"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                BoB (BOBCARD) Settlement % &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
