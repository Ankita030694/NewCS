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

export default function PnbCardSettlementPctClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navLinks = [
    { id: 'pnb-summary', label: 'PNB PSU Card OTS Takeaways' },
    { id: 'pnb-ots-bands', label: '1. Indicative PNB Settlement % Bands' },
    { id: 'psu-apr-math', label: '2. Why 35.4% PSU APR Changes OTS Math' },
    { id: 'pnb-account-lien', label: '3. PNB Savings Lien & FD Card Rules' },
    { id: 'lok-adalat-pnb', label: '4. Lok Adalat & Safe Closure Steps' },
    { id: 'pnb-pct-faqs', label: '5. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      q: 'What settlement percentage does PNB accept on overdue credit cards?',
      a: 'On unsecured NPA PNB cards past 90 to 180+ days late, past OTS deals often land at 45% to 70% of the full bill. PSU panels guard core spend closely while cutting late interest.',
    },
    {
      q: 'Why can PNB card settlement percentages look higher than 48% APR private cards?',
      a: 'Many PNB cards charge lower monthly rates (about 2.95% per month or 35.4% p.a.) than private cards. Because less fee bloat piles up, real spends form a bigger slice of your bill.',
    },
    {
      q: 'Can PNB recover unpaid credit card bills from my PNB savings or pension account?',
      a: 'Yes. PNB issues cards straight from its own Credit Card Wing. That gives PNB a direct lien and set-off right on linked PNB bank accounts under Section 171.',
    },
    {
      q: 'Can FD-backed PNB Global credit cards be settled with a principal haircut?',
      a: 'No. When a PNB card sits against a fixed deposit, PNB breaks that FD to clear unpaid card dues rather than giving an unsecured OTS cut.',
    },
    {
      q: 'Do Lok Adalat or PSU Rin Samadhan drives cover PNB credit card NPAs?',
      a: 'Yes. Aged unsecured PNB card NPAs often go to Lok Adalats or special PSU OTS drives where fees and interest can be waived in writing.',
    },
    {
      q: 'How do I verify an official PNB credit card OTS letter?',
      a: 'Check that the letter comes from PNB Credit Card Wing or a real @pnb.co.in mail or branch seal. Confirm the code on PNB Genie or care, then pay your 16-digit PNB card.',
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
            <span>Punjab National Bank PSU Card OTS Guide</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            PNB Credit Card Settlement % Ranges &amp; PSU OTS Rules
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-white/95 leading-relaxed">
            See realistic One-Time Settlement (OTS) ranges for Punjab National Bank RuPay, Visa,
            Rakshak, and Patanjali credit cards. Understand PSU principal rules and caveats.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="#lead-funnel"
              className="px-7 py-3 rounded-full bg-white text-blue-900 hover:bg-slate-100 font-extrabold text-sm shadow-lg inline-flex items-center gap-2"
            >
              <span>Check ₹3L+ Combined Debt Relief</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/tools/credit-card-minimum-due-calculator"
              className="px-6 py-3 rounded-full bg-blue-800/70 border border-white/25 text-white hover:bg-blue-800 font-bold text-sm"
            >
              <span>Run Minimum Due Calculator</span>
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
              <li className="font-semibold text-slate-900">PNB Credit Card Settlement %</li>
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
            Hold an overdue PNB credit card plus other cards, personal loans, or app loans totaling{' '}
            <strong>₹3 Lakh or above</strong>? Check your single legal relief plan below.
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
              id="pnb-summary"
              className="rounded-2xl bg-[#F4F8FE] border border-blue-100 border-l-4 border-l-[#1886ff] p-5 sm:p-6 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4" />
                <span>PNB Credit Card OTS: Key PSU Benchmarks</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Indicative Payable Band:</strong> Unsecured PNB NPA cards often settle
                    around 45% to 70% of total statement dues, subject to PSU committee sign-off.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Principal-First PSU Norm:</strong> Public sector committees waive unapplied
                    interest and penal charges readily, while guarding core ledger principal closely.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct PNB Bank Issuance:</strong> PNB cards sit inside PNB&apos;s own
                    books, so linked PNB savings accounts carry direct set-off risk.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Lok Adalat Window:</strong> Aged PNB card NPAs often qualify for clean
                    written closure in National Lok Adalat sittings.
                  </span>
                </li>
              </ul>
            </div>

            <section id="pnb-ots-bands" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Indicative PNB Credit Card Settlement % by NPA Category
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Public sector banks classify overdue accounts into Sub-Standard and Doubtful NPA
                buckets. Below are realistic educational benchmarks seen on unsecured PNB RuPay and
                Visa cards:
              </p>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3.5">PSU Asset Stage</th>
                      <th className="p-3.5">Indicative Payable % of Bill</th>
                      <th className="p-3.5">Committee Focus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">SMA-1 / SMA-2 (Under 90 DPD)</td>
                      <td className="p-3.5">90% to 100% of bill</td>
                      <td className="p-3.5">Regularisation pushed; OTS not open yet.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Sub-Standard NPA (90-365 DPD)</td>
                      <td className="p-3.5">55% to 70% of bill</td>
                      <td className="p-3.5">Core principal + modest simple interest; penal cut.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Doubtful NPA (12+ Months)</td>
                      <td className="p-3.5">45% to 60% of bill</td>
                      <td className="p-3.5">Full interest waiver or special OTS / Lok Adalat cut.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Caveat: Figures are indicative ranges, never assured entitlements. Approval follows
                PNB board-approved compromise policy under RBI guidelines.
              </p>
            </section>

            <section id="psu-apr-math" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Why PNB&apos;s Lower 35.4% APR Makes Principal Share Higher
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many PNB RuPay Select, Platinum, Rakshak, and Patanjali cards charge 2.95% monthly
                interest (35.4% p.a.), compared to 45% to 48% APR on private cards. Because fewer
                junk fees pile up over 8 months, your statement has a higher ratio of real principal.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                That is why paying 55% of a PNB statement often clears almost your entire original
                spend while wiping out 100% of late fees, GST on interest, and compounding charges.
              </p>
            </section>

            <section id="pnb-account-lien" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Linked PNB Savings Set-Off Risk &amp; FD Card Exclusion
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unlike SBI Card or BOBCARD, Punjab National Bank issues cards through its in-house
                Credit Card Division. If your salary, business, or pension sits in a PNB savings
                account, unpaid card dues can trigger an automatic hold or auto-recovery under
                Section 171 of the Indian Contract Act.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Also check if your card was issued against a PNB Fixed Deposit. Secured FD cards are
                adjusted directly from your deposit and do not qualify for unsecured OTS haircuts.
              </p>
            </section>

            <section id="lok-adalat-pnb" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Using Lok Adalat &amp; Verified OTS Letters for Clean Closure
              </h2>
              <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>
                  If you receive a Lok Adalat pre-litigation notice on an unsecured PNB card, treat
                  it as a constructive chance to negotiate a recorded OTS award. Read our{' '}
                  <Link
                    href="/lok-adalat-personal-loan-settlement"
                    className="text-[#1886ff] hover:underline font-semibold"
                  >
                    Lok Adalat settlement guide
                  </Link>
                  .
                </li>
                <li>
                  Ensure your written PNB OTS sanction bears an official branch or Credit Card
                  Division reference number before paying.
                </li>
                <li>
                  Pay straight to your 16-digit PNB card via PNB One, PNB Genie, BBPS, or NEFT, and
                  collect your No Dues Certificate within 30 to 45 days.
                </li>
              </ul>
            </section>

            <CompanySection />

            <section id="pnb-pct-faqs" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Frequently Asked Questions on PNB Card Settlement %
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
                  href="https://www.pnbcard.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-semibold border border-blue-200 inline-flex items-center gap-1"
                >
                  <span>pnbcard.in (Official PNB Card Portal)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-semibold border border-blue-200 inline-flex items-center gap-1"
                >
                  <span>rbi.org.in (Compromise Circular)</span>
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
                    PSU Bank &amp; Card OTS Analyst
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Advises borrowers on PSU bank committee settlements, Lok Adalat awards, and card
                lien protection.
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
                PNB Card + Multi-Bank Debt?
              </p>
              <p className="text-blue-100 text-xs leading-relaxed">
                Check your structured settlement plan across PNB cards, private cards, and personal
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
              <p className="font-bold text-slate-900 text-sm">Related Card &amp; OTS Guides</p>
              <Link
                href="/what-percentage-do-banks-accept-in-loan-settlement"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Bank Settlement Percentage Guide &rarr;
              </Link>
              <Link
                href="/tools/multiple-credit-card-payoff-vs-settlement-calculator"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Multi-Card Payoff vs OTS Planner &rarr;
              </Link>
              <Link
                href="/get-noc-after-loan-settlement"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Get NOC After Settlement &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
