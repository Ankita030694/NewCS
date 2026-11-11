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

export default function KotakCardSettlementPctClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navLinks = [
    { id: 'kotak-summary', label: 'Key Kotak OTS Takeaways' },
    { id: 'kotak-ots-table', label: '1. Indicative Kotak Settlement Bands' },
    { id: 'unsecured-vs-811', label: '2. Unsecured Cards vs 811 FD Cards' },
    { id: 'kotak-fee-stack', label: '3. How APR & Fees Shape Your Waiver' },
    { id: 'kotak-lien-safety', label: '4. Kotak 811 Savings Lien & Verification' },
    { id: 'kotak-pct-faqs', label: '5. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      q: 'What settlement percentage does Kotak Mahindra Bank accept on credit cards?',
      a: 'On unsecured NPA Kotak cards past 90 to 180 days overdue, historical One-Time Settlements often fall between 40% and 60% of the total statement balance. Approval depends on hardship proof and fee share, and is never guaranteed.',
    },
    {
      q: 'Can an FD-backed Kotak 811 Dream Different card be settled for 50%?',
      a: 'No. On FD-backed secured cards like Kotak 811 Dream Different, the bank holds a fixed deposit pledge and recovers unpaid dues directly by liquidating your FD.',
    },
    {
      q: 'How do Kotak SmartEMI or Loan on Credit Card plans affect settlement math?',
      a: 'At 90 days past due, Kotak cancels open merchant EMIs and SmartEMI plans and adds all unbilled principal into one card bill. Your OTS offer is then calculated on that full merged balance.',
    },
    {
      q: 'Can Kotak Mahindra Bank hold money in my Kotak 811 savings account?',
      a: 'Yes. Kotak card terms allow a banker lien and set-off right over linked Kotak savings or salary accounts under Section 171 of the Contract Act.',
    },
    {
      q: 'How do I verify a genuine Kotak credit card OTS letter before paying?',
      a: 'Ensure the sanction letter arrives from an official @kotak.com domain, check the reference ID with Kotak customer care, and pay straight to your 16-digit Kotak card number.',
    },
    {
      q: 'When does Kotak issue the No Dues Certificate after settlement?',
      a: 'After all agreed OTS instalments clear on time, Kotak closes the card account and typically issues a No Dues Certificate within 30 to 45 working days.',
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
            <span>Kotak Mahindra Bank Card OTS Benchmarks</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Kotak Mahindra Credit Card Settlement % Ranges &amp; Rules
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-white/95 leading-relaxed">
            Review realistic One-Time Settlement (OTS) ranges on unsecured Kotak League, Mojo, Zen,
            White, and Myntra cards. Check FD-card exclusions, 811 lien risks, and RBI caveats.
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
              href="/tools/multiple-credit-card-payoff-vs-settlement-calculator"
              className="px-6 py-3 rounded-full bg-blue-800/70 border border-white/25 text-white hover:bg-blue-800 font-bold text-sm"
            >
              <span>Compare Payoff vs OTS</span>
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
                <Link href="/loan-settlement/kotak" className="hover:text-[#1886ff]">
                  Kotak Bank Settlement
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="font-semibold text-slate-900">Kotak Credit Card Settlement %</li>
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
            Carry an overdue unsecured Kotak card plus other cards, personal loans, or app loans
            totaling <strong>₹3 Lakh or above</strong>? Check your single legal relief plan below.
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
              id="kotak-summary"
              className="rounded-2xl bg-[#F4F8FE] border border-blue-100 border-l-4 border-l-[#1886ff] p-5 sm:p-6 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4" />
                <span>Kotak Credit Card Settlement: Fast Facts</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Observed OTS Band:</strong> Aged unsecured Kotak card NPAs often settle
                    between 40% and 60% of total statement dues, subject to bank approval.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>811 FD Cards Cannot Settle:</strong> Secured Dream Different cards are
                    cleared straight from your pledged fixed deposit.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Quarter-End Windows:</strong> Quarter-end months (March, June,
                    September, December) often bring faster one-shot OTS decisions.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>811 Savings Set-Off Risk:</strong> Cash sitting in a Kotak 811 account
                    can face banker&apos;s lien holds during card default.
                  </span>
                </li>
              </ul>
            </div>

            <section id="kotak-ots-table" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Indicative Kotak Credit Card Settlement % by Default Age
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Kotak checks each OTS request one by one under the June 2023 RBI rules. Below are
                past settlement ranges seen on unsecured Kotak cards when backed by real pay loss:
              </p>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3.5">Account Stage</th>
                      <th className="p-3.5">Usual Pay %</th>
                      <th className="p-3.5">Key Drivers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">30 to 89 DPD (Pre-NPA)</td>
                      <td className="p-3.5">85% to 100% of bill</td>
                      <td className="p-3.5">Small late-fee cuts or EMI plans only.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">90 to 180 DPD (NPA)</td>
                      <td className="p-3.5">50% to 65% of bill</td>
                      <td className="p-3.5">APR and late fees cut on proof of loss.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">180+ DPD (Aged NPA)</td>
                      <td className="p-3.5">40% to 55% of bill</td>
                      <td className="p-3.5">Best terms go to 1-shot pay near spend sum.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Note: Figures above are broad guide ranges, never fixed rights. Kotak rejects cuts
                if big fresh swipes or extra bank cash show up.
              </p>
            </section>

            <section id="unsecured-vs-811" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Unsecured League / Zen Cards vs Secured 811 FD Cards
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before calculating an OTS target, check whether your Kotak card is unsecured or
                FD-backed. Unsecured variants like Kotak League, Mojo, Zen, White, Myntra, and
                IndiGo Ka-ching have no collateral attached, so NPA compromise waivers apply.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By contrast, the <strong>Kotak 811 #DreamDifferent</strong> card is issued against a
                100%+ Fixed Deposit lien. If you stop paying for 60 to 90 days, Kotak simply breaks
                your FD, deducts the card bill, and returns any leftover balance.
              </p>
            </section>

            <section id="kotak-fee-stack" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. How 44.4% APR and Unbilled EMIs Shape Your Kotak Waiver
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Kotak unsecured cards charge up to 3.70% per month (44.4% APR) plus late fees up to
                ₹1,200 per cycle and 18% GST. Over 9 months of default, ₹2,00,000 of real card
                spends can swell past ₹3,30,000.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When negotiating, separate your core swipe principal from interest bloat. Also make
                sure all unbilled SmartEMI plans have merged into the ledger first. Read our{' '}
                <Link
                  href="/credit-card-emi-conversion-default-settlement"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  card EMI foreclosure and settlement guide
                </Link>{' '}
                for details.
              </p>
            </section>

            <section id="kotak-lien-safety" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Kotak 811 Savings Lien Warning &amp; Safe Payment Rules
              </h2>
              <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>
                  <strong>Protect Daily Household Cash:</strong> Keeping salary inflows in a linked
                  Kotak 811 or Kotak savings account during card default invites automatic banker
                  set-off holds.
                </li>
                <li>
                  <strong>Verify @kotak.com Sanction Mail:</strong> Demand a formal OTS PDF from an
                  official <code>@kotak.com</code> email before paying a rupee.
                </li>
                <li>
                  <strong>Pay Your 16-Digit Card Only:</strong> Use NEFT, BillDesk, or BBPS straight
                  to your Kotak card number. Read{' '}
                  <Link
                    href="/kotak-mahindra-bank-loan-settlement"
                    className="text-[#1886ff] hover:underline font-semibold"
                  >
                    Kotak Mahindra Bank settlement process
                  </Link>{' '}
                  for full steps.
                </li>
              </ul>
            </section>

            <CompanySection />

            <section id="kotak-pct-faqs" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Frequently Asked Questions on Kotak Card Settlement %
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
                  href="https://www.kotak.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-semibold border border-blue-200 inline-flex items-center gap-1"
                >
                  <span>kotak.com (Card MITC)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-semibold border border-blue-200 inline-flex items-center gap-1"
                >
                  <span>rbi.org.in (Compromise Rules)</span>
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
                    Private Bank OTS Specialist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Helps cardholders audit principal vs fee bloat across Kotak and multi-bank card
                portfolios.
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
                Kotak Card + Loan Dues?
              </p>
              <p className="text-blue-100 text-xs leading-relaxed">
                Check your structured settlement plan across Kotak cards, other cards, and personal
                loans.
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
              <p className="font-bold text-slate-900 text-sm">Related Kotak &amp; Card Guides</p>
              <Link
                href="/loan-settlement/kotak"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Kotak Bank Settlement Hub &rarr;
              </Link>
              <Link
                href="/tools/credit-card-minimum-due-calculator"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Minimum Due Trap Calculator &rarr;
              </Link>
              <Link
                href="/verify-loan-settlement-letter"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Verify OTS Sanction Letter &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
