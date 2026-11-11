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

export default function AddOnCardLiabilityClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navLinks = [
    { id: 'addon-summary', label: 'Quick Liability Summary' },
    { id: 'primary-vs-addon', label: '1. Primary vs Add-On Legal Liability' },
    { id: 'cibil-reporting-addon', label: '2. Whose CIBIL Score Gets Hit?' },
    { id: 'family-harassment-rules', label: '3. RBI Rules on Family Calls' },
    { id: 'special-cases-addon', label: '4. Divorce, Disputes & Death Rules' },
    { id: 'settling-addon-dues', label: '5. Settling Combined Card Debt' },
    { id: 'addon-faqs', label: '6. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      q: 'Who is legally liable to pay if an add-on credit card holder defaults in India?',
      a: 'The main card owner owes 100% of all spends, fees, and interest on add-on cards. Banks grant the limit based only on the main owner income and KYC.',
    },
    {
      q: 'Does an add-on credit card default hurt the supplementary holder CIBIL score?',
      a: 'On most personal cards, bills and CIBIL trades link only to the main owner PAN. Late bills or settlement drop the main owner CIBIL score.',
    },
    {
      q: 'Can recovery agents harass my spouse or parents who hold an add-on card?',
      a: 'No. Under the RBI Fair Practices Code and new RBI rules from 1 January 2027, agents cannot harass family or share debt facts to shame you.',
    },
    {
      q: 'What happens to add-on card dues if the primary cardholder passes away?',
      a: 'An add-on user does not pay from their own pay unless they signed as co-borrower. Under Indian law, bank claims apply only to assets left by the late main owner.',
    },
    {
      q: 'Can I block an add-on card immediately if a family member overspent on it?',
      a: 'Yes. The main card owner can set the add-on spend cap to zero or block that card in the bank app right away. That stops new charges at once.',
    },
    {
      q: 'Does One-Time Settlement on the primary card cover add-on card spends too?',
      a: 'Yes. Add-on swipes bill into the main card account. One valid OTS letter on the main card closes both main and add-on dues at the same time.',
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
            <span>Supplementary &amp; Add-On Card Law in India</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Add-On Credit Card Default in India: Who Is Liable?
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-white/95 leading-relaxed">
            Understand who must legally pay when a spouse, parent, or child defaults on an add-on
            credit card. Check CIBIL impact, family privacy rights, and ₹3 Lakh+ settlement rules.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="#lead-funnel"
              className="px-7 py-3 rounded-full bg-white text-blue-900 hover:bg-slate-100 font-extrabold text-sm shadow-lg inline-flex items-center gap-2"
            >
              <span>Check Primary Cardholder Relief</span>
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
                <Link href="/services/credit-card-settlement" className="hover:text-[#1886ff]">
                  Credit Card Settlement
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="font-semibold text-slate-900">Add-On Credit Card Default Liability</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="bg-slate-50 border-b border-slate-200/80 pt-6">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-1.5">
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
            Combined Debt Check (₹3,00,000+ Minimum Floor)
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Facing ₹3,00,000 or more in total unpaid dues across primary/add-on credit cards,
            personal loans, and app loans? Check your legal settlement options below.
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
              id="addon-summary"
              className="rounded-2xl bg-[#F4F8FE] border border-blue-100 border-l-4 border-l-[#1886ff] p-5 sm:p-6 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4" />
                <span>Add-On Card Liability: Plain-English Rules</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Primary Holder Pays:</strong> Even if 100% of swipes were made on the
                    add-on card, the primary cardholder owes the bank legally.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Primary PAN Gets Reported:</strong> Late DPD marks and Settled status
                    hit the primary cardholder&apos;s CIBIL report.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>Block Add-On Instantly:</strong> Primary holders can disable or cancel
                    any add-on card in seconds via mobile banking to stop further bills.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] shrink-0 mt-0.5" />
                  <span>
                    <strong>One OTS Closes Both:</strong> Settling the primary card account clears
                    both primary and supplementary card balances together.
                  </span>
                </li>
              </ul>
            </div>

            <section id="primary-vs-addon" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Primary vs Supplementary Cardholder Legal Responsibility
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks in India issue add-on cards to spouses, parents, siblings, or adult kids over
                18 under RBI rules. The bank checks KYC papers for the add-on user. Yet no new
                credit limit or separate loan deal is signed in their name.
              </p>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3.5">Factor</th>
                      <th className="p-3.5">Main Card Owner</th>
                      <th className="p-3.5">Add-On User</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Legal Debt Duty</td>
                      <td className="p-3.5">Owes 100% of main and add-on spends.</td>
                      <td className="p-3.5">Allowed user. Not main debtor to bank.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Monthly Bill</td>
                      <td className="p-3.5">Gets 1 joint bill each month.</td>
                      <td className="p-3.5">Swipes show as lines on main bill.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Bank Lien Risk</td>
                      <td className="p-3.5">Applies to main owner bank accounts.</td>
                      <td className="p-3.5">Bank cannot pull add-on user cash.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="cibil-reporting-addon" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Whose CIBIL Score Suffers When an Add-On Card Defaults?
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Credit bureaus in India link personal card accounts to the main owner PAN. If bills
                stay unpaid past the three-day grace window, late DPD marks hit the main owner
                CIBIL file.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Keep one rare case in mind. Some old joint work cards or co-signed cards list both
                names. Pull your free CIBIL report once a year to check if the card shows on the
                add-on user report.
              </p>
            </section>

            <section id="family-harassment-rules" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Can Recovery Agents Call or Pressure Add-On Family Members?
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Agents often dial the phone number saved on an add-on card for OTPs. They may press
                your spouse or parent to clear the bill. Under the RBI Fair Practices Code and new
                RBI rules from 1 January 2027, agents cannot scare family, use rude words, or call
                at odd hours.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Read our full guide on{' '}
                <Link
                  href="/can-bank-call-relatives-for-loan-recovery"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  whether banks can call relatives for recovery
                </Link>{' '}
                to see how to report abuse to the Nodal Officer and RBI Ombudsman.
              </p>
            </section>

            <section id="special-cases-addon" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Separation, Family Disputes &amp; Death of Primary Holder
              </h2>
              <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>
                  <strong>Split or Family Fight:</strong> Even in a divorce, the bank holds the
                  main card owner liable for past add-on swipes. Block the add-on card in your bank
                  app right away so no new debt builds up.
                </li>
                <li>
                  <strong>Death of Main Owner:</strong> Add-on cards stop working when the main
                  owner dies. Living family members do not owe money from their own pay. Claims
                  apply only to assets left behind. Read our{' '}
                  <Link
                    href="/loan-recovery-after-death-of-borrower-legal-heir-rights-india"
                    className="text-[#1886ff] hover:underline font-semibold"
                  >
                    legal heir loan recovery rights guide
                  </Link>
                  .
                </li>
              </ul>
            </section>

            <section id="settling-addon-dues" className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Settling Unmanageable Primary + Add-On Debt Above ₹3 Lakh
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Did add-on card swipes push your total card and loan debt to ₹3,00,000 or more?
                Block the add-on card first. Once the main card hits NPA stage past 90 days late,
                the main owner can seek one One-Time Settlement to close the whole bill.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                See how multi-card closures work in our{' '}
                <Link
                  href="/services/credit-card-settlement"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  credit card settlement guide
                </Link>
                .
              </p>
            </section>

            <CompanySection />

            <section id="addon-faqs" className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                6. Frequently Asked Questions on Add-On Card Defaults
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
                  <span>rbi.org.in (Card Master Direction)</span>
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
                    Banking Law &amp; Debt Specialist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Advises primary cardholders on supplementary card disputes, RBI privacy rules, and
                OTS closures.
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
                Stuck Paying Add-On Dues?
              </p>
              <p className="text-blue-100 text-xs leading-relaxed">
                Protect your family from recovery calls and check your combined ₹3L+ settlement
                options.
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
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <Link
                href="/does-settlement-impact-a-co-borrower"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Does Settlement Impact Co-Borrower? &rarr;
              </Link>
              <Link
                href="/credit-card-blocked-due-to-non-payment"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Credit Card Blocked Guide &rarr;
              </Link>
              <Link
                href="/tools/credit-card-minimum-due-calculator"
                className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 font-semibold text-slate-800"
              >
                Minimum Due Calculator &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
