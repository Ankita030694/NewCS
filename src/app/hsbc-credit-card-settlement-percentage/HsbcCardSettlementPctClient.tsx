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

export default function HsbcCardSettlementPctClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navLinks = [
    { id: 'hsbc-summary', label: 'Key HSBC OTS Takeaways' },
    { id: 'hsbc-ots-ranges', label: '1. Indicative HSBC Settlement % Bands' },
    { id: 'foreign-bank-audit', label: '2. Why HSBC Audits Hardship Strictly' },
    { id: 'hsbc-loan-on-phone', label: '3. Loan-on-Phone & Salary Lien Rules' },
    { id: 'hsbc-closure-steps', label: '4. Safe OTS Letter & NDC Checklist' },
    { id: 'hsbc-pct-faqs', label: '5. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      q: 'What is the realistic HSBC credit card settlement percentage in India?',
      a: 'On aged HSBC India NPA cards past 120 to 180 days late, past settlements often land at 45% to 65% of the full bill. HSBC checks proof closely and never promises a fixed cut.',
    },
    {
      q: 'Why are HSBC India credit card OTS audits stricter than app lenders?',
      a: 'HSBC gives cards mostly to metro salaried users with strong profiles. Its global rules need clear proof of job loss, pay cuts, or hospital bills before cutting dues.',
    },
    {
      q: 'What happens to HSBC Loan on Phone or Cash on Card plans in default?',
      a: 'Past 90 days late, HSBC stops open Loan on Phone and store EMI plans. All left-over principal drops straight into your main card bill.',
    },
    {
      q: 'Can HSBC hold money in my HSBC salary or Premier account?',
      a: 'Yes. If your pay or savings sit in HSBC India, your card deal lets HSBC place a direct lien and pull cash from that account.',
    },
    {
      q: 'How should I pay an approved HSBC credit card settlement?',
      a: 'First check your HSBC OTS letter with HSBC phone banking. Then pay straight to your 16-digit HSBC card number via NEFT or BillDesk.',
    },
    {
      q: 'Can NRIs settle an overdue HSBC India credit card from abroad?',
      a: 'Yes. NRIs hit by job loss abroad or visa issues can ask for a written OTS deal and pay their 16-digit HSBC card via NRO or NEFT.',
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
            <span>Foreign Bank Card OTS Guide • Caveats Apply</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            HSBC India Credit Card Settlement % Ranges &amp; OTS Process
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-white/95 leading-relaxed">
            Check realistic One-Time Settlement (OTS) ranges for HSBC Visa Platinum, Live+,
            TravelOne, and Premier cards in India. Learn foreign-bank audit standards and caveats.
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
                <Link href="/services/credit-card-settlement" className="hover:text-[#1886ff]">
                  Credit Card Settlement
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="font-semibold text-slate-900">HSBC Credit Card Settlement %</li>
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
            Carry an overdue HSBC credit card alongside other cards, personal loans, or app loans
            totaling <strong>₹3,00,000 or more</strong>? Check your legal relief plan below.
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
              id="hsbc-summary"
              className="rounded-2xl bg-[#F4F8FE] border border-blue-100 border-l-4 border-l-[#1886ff] p-5 sm:p-6 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4" />
                <span>HSBC India Card Settlement: Key Points</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Indicative Payable Range:</strong> Aged HSBC NPA cards often close
                    around 45% to 65% of total statement dues, subject to credit sign-off.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Paper Trail Matters:</strong> Foreign banks demand clear proof of job
                    loss, pay drop, or medical emergency before approving OTS cuts.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>High Limits Compound Fast:</strong> HSBC metro cards carry large limits
                    where 3.49% to 3.75% monthly interest adds steep finance bloat.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>HSBC Salary Account Lien:</strong> Corporate salary accounts held with
                    HSBC face direct set-off risk during card default.
                  </span>
                </li>
              </ul>
            </div>

            <section id="hsbc-ots-ranges" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Indicative HSBC India Credit Card Settlement % Ranges
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                HSBC India reviews unpaid cards under the RBI OTS rules. Because HSBC issues cards
                mainly to prime metro staff, 60-day holds rarely get big cuts. Once a card enters
                NPA with real proof of loss, past ranges look like this:
              </p>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3.5">Late Window</th>
                      <th className="p-3.5">Usual Pay % of Bill</th>
                      <th className="p-3.5">Usual Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Under 90 DPD</td>
                      <td className="p-3.5">90% to 100% of bill</td>
                      <td className="p-3.5">EMI plan offered; no OTS cut yet.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">90 to 180 DPD (NPA)</td>
                      <td className="p-3.5">55% to 70% of bill</td>
                      <td className="p-3.5">Part of interest and late fees waived.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">180+ DPD (Deep NPA)</td>
                      <td className="p-3.5">45% to 60% of bill</td>
                      <td className="p-3.5">One-shot OTS near your real spend sum.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Note: Figures are past guide marks, not bank promises. HSBC can start legal steps
                if high pay continues without real loss.
              </p>
            </section>

            <section id="foreign-bank-audit" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Why Foreign Banks Audit Hardship Files More Strictly
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                On Visa Platinum, Live+, TravelOne, and Premier cards, HSBC risk staff check two
                main facts. First, did you make big luxury swipes right before stopping pay? Second,
                do your bank statements prove a real drop in cash flow?
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A clear proof file (HR exit letter, 6-month bank sheet, or hospital bill) helps win
                sign-off much faster than long phone talks.
              </p>
            </section>

            <section id="hsbc-loan-on-phone" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. HSBC Loan-on-Phone Foreclosure &amp; Salary Account Lien
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If you took an HSBC Loan on Phone or Cash on Card plan, missing three monthly bills
                cancels the EMI schedule at 90 DPD and drops the remaining principal into your main
                card statement. Always check that your OTS letter covers that full combined total.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Also note: many tech and MNC employees hold an HSBC corporate salary account. Move
                essential family expense funds prudently and review{' '}
                <Link
                  href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  banker&apos;s right of set-off under Section 171
                </Link>
                .
              </p>
            </section>

            <section id="hsbc-closure-steps" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Safe HSBC Settlement Payment &amp; NRI Closure Checklist
              </h2>
              <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>
                  Insist on a written HSBC settlement letter on official bank letterhead before
                  sending funds.
                </li>
                <li>
                  Confirm the reference number directly with HSBC India phone banking.
                </li>
                <li>
                  Pay straight to your 16-digit HSBC credit card number via NEFT or BillDesk, never
                  to private accounts.
                </li>
                <li>
                  NRIs settling from abroad can also read our{' '}
                  <Link
                    href="/nri-credit-card-debt-settlement"
                    className="text-[#1886ff] hover:underline font-semibold"
                  >
                    NRI credit card settlement guide
                  </Link>{' '}
                  and collect the No Dues Certificate within 30 to 45 days.
                </li>
              </ul>
            </section>

            <CompanySection />

            <section id="hsbc-pct-faqs" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Frequently Asked Questions on HSBC Card Settlement %
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
                  href="https://www.hsbc.co.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-semibold border border-blue-200 inline-flex items-center gap-1"
                >
                  <span>hsbc.co.in (Card Terms)</span>
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
                    Foreign &amp; Private Card Analyst
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Guides salaried and NRI cardholders through foreign-bank OTS documentation and
                multi-card closures.
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
                High HSBC Card Dues?
              </p>
              <p className="text-blue-100 text-xs leading-relaxed">
                Resolve your HSBC card alongside all other credit cards and unsecured loans above
                ₹3 Lakh.
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
                href="/settle-multiple-credit-cards"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Settle Multiple Credit Cards &rarr;
              </Link>
              <Link
                href="/verify-loan-settlement-letter"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Verify Settlement Letter &rarr;
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
