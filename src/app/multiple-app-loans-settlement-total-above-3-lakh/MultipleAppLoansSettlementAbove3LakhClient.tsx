'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';
import CompanySection from '@/components/CompanySection';
import {
  BookOpen,
  ShieldCheck,
  AlertCircle,
  Layers,
  Phone,
  Lock,
  ArrowRight,
  ExternalLink,
  Check,
  ChevronDown,
  ChevronUp,
  Clock
} from 'lucide-react';

export default function MultipleAppLoansSettlementAbove3LakhClient() {
  const [activeId, setActiveId] = useState<string>('stack-qualification-box');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -40% 0px',
        threshold: 0.05
      }
    );
    const sections = document.querySelectorAll('section[id], div[id].scroll-target');
    sections.forEach((sec) => observer.observe(sec));
    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  const navLinks = [
    { id: 'stack-qualification-box', label: '₹3L+ Stack Check' },
    { id: 'how-10-app-trap-happens', label: '1. How the 10-App Trap Starts' },
    { id: 'lsp-to-nbfc-mapping', label: '2. Map Apps to CIBIL NBFCs' },
    { id: 'regulated-vs-rogue-apps', label: '3. RBI Apps vs Rogue 7-Day Apps' },
    { id: 'stop-enach-fee-bleed', label: '4. Stop E-NACH Bounce Bleed' },
    { id: 'sequencing-order-plan', label: '5. Smart Settlement Order' },
    { id: 'rbi-2027-shield-stack', label: '6. RBI 1 Jan 2027 Conduct Shield' },
    { id: 'sample-5lakh-case-math', label: '7. Sample ₹5.4L Stack Plan' },
    { id: 'noc-tracker-cibil', label: '8. Tracking 10+ NOCs & CIBIL' },
    { id: 'faqs', label: 'FAQs' }
  ];

  const faqs = [
    {
      q: 'Can I settle 6 to 12 loan apps, credit cards, and personal loans in one plan?',
      a: 'Yes. While each RBI-registered NBFC and bank issues its own separate OTS sanction letter, CredSettle builds one unified monthly savings and negotiation plan when your combined unsecured debt across apps, cards, and personal loans is Rs 3,00,000 or higher.'
    },
    {
      q: 'Why do two different loan apps share the same NBFC on my CIBIL report?',
      a: 'Many consumer loan apps are Lending Service Providers (LSPs) that share backend co-lending NBFCs such as Vivriti Capital, Northern Arc, Poonawalla Fincorp, Kisetsu Saison, or InCred. Mapping your CIBIL report first lets you bundle loans sitting under the same NBFC.'
    },
    {
      q: 'Which loans should I settle first in a Rs 3 Lakh+ multi-app stack?',
      a: 'Most multi-loan borrowers close smaller, high-noise NBFC app balances first as quick wins to cut call volume and CIBIL trade-line count, while building bigger lump sums for major credit cards and bank personal loans.'
    },
    {
      q: 'How do I stop e-NACH bounce charges across 10 apps draining my bank balance?',
      a: 'When 10 apps hit your salary account twice a month, bank return fees alone can burn Rs 6,000 to Rs 12,000 monthly. Keep essential household survival funds in a clean non-mandate bank account while you save systematically toward formal lump-sum settlements.'
    },
    {
      q: 'What if one of my apps is an illegal 7-day Chinese / unlicensed app?',
      a: 'Never settle with or pay extortion money to unlicensed apps that are not backed by an RBI-registered NBFC or bank on CIBIL. Report rogue unlicensed apps on cybercrime.gov.in (1930) and reserve settlement funds strictly for legitimate RBI-regulated lenders.'
    },
    {
      q: 'What RBI rules protect me when 8 agencies call at the same time?',
      a: 'Under RBI Digital Lending Guidelines and updated RBI recovery conduct rules effective 1 January 2027, every regulated lender\'s agent can call or visit strictly from 8:00 AM to 7:00 PM, must show NBFC ID cards, and cannot call relatives, contacts, or employers.'
    },
    {
      q: 'What if my total debt across all apps is only Rs 95,000?',
      a: 'If your combined debt across all apps and cards is below Rs 3,00,000, hiring a paid settlement firm is usually not cost-effective. Use the snowball method to pay smallest principal balances directly in the apps and email NBFC Nodal Officers for late-fee waivers.'
    },
    {
      q: 'How long does it take to settle a Rs 3 Lakh to Rs 12 Lakh multi-loan stack?',
      a: 'Depending on how much you can set aside each month into your dedicated settlement fund, most borrowers close a 6-to-12-lender stack sequentially over 6 to 18 months, collecting a 30-day No Dues Certificate on every closed loan.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section
        className="relative text-white pt-28 pb-16 md:pt-32 md:pb-20 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)'
        }}
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs sm:text-sm font-bold uppercase tracking-wide mb-5">
            <Layers className="w-4 h-4 text-blue-200" />
            <span>Multi-App, Credit Card &amp; Personal Loan Stack Playbook.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            How to Settle Multiple App Loans Totaling Above ₹3 Lakh
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Borrowing from App #8 just to pay EMIs on App #3 and two maxed credit cards? Break the rollover cycle, map every app to its real RBI NBFC, and settle ₹3,00,000+ multi-loan stacks step by step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#lead-funnel"
              className="bg-white text-blue-950 px-7 py-3.5 rounded-full font-bold text-base hover:bg-blue-50 transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              <span>Start Your ₹3L+ Multi-Loan Plan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/tools/multiple-credit-card-payoff-vs-settlement-calculator"
              className="bg-blue-900/60 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-blue-900 transition-all inline-flex items-center justify-center"
            >
              Try Payoff vs Settlement Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* QUALIFICATION & STACK SUMMARY BOX */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div
          id="stack-qualification-box"
          className="scroll-target bg-white rounded-2xl border-2 border-blue-600 p-5 sm:p-6 shadow-md space-y-3"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-blue-900">
              <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>How to Count Your ₹3,00,000+ Combined Unsecured Stack</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
              Apps + Credit Cards + Bank/NBFC Personal Loans Combined
            </span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>You Do Not Need ₹3 Lakh on a Single App:</strong> Even if each app balance is ₹25,000 to ₹90,000, add together <strong>all</strong> your unpaid loan apps (KreditBee, MoneyTap, CASHe, RING, Fibe, Navi, Home Credit, mPokket) <strong>plus</strong> credit cards and personal loans.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>If Your Combined Total Is ₹3,00,000+:</strong> Stop taking fresh high-fee bridge loans today and run your combined figure through the eligibility check below. (If your grand total across all debts is under ₹3,00,000, use our free DIY snowball guide in Section 5 without paying agency fees.)
          </p>
        </div>
      </div>

      <InteractiveLeadFunnel />

      {/* BREADCRUMB */}
      <div className="bg-white border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 py-3">
          <nav className="flex text-xs sm:text-sm text-slate-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li>
                <Link href="/" className="hover:text-blue-600 font-medium">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/loan-settlement" className="hover:text-blue-600 font-medium">
                  Loan Settlement
                </Link>
              </li>
              <li>/</li>
              <li className="text-slate-800 font-semibold">Multiple App Loans Above ₹3 Lakh</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 3-COLUMN WIDESCREEN BODY */}
      <div className="max-w-[1440px] mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)_300px] gap-8 items-start">
          {/* LEFT TOC */}
          <aside className="sticky top-24 hidden lg:block">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                  Page Guide.
                </span>
              </div>
              <nav className="space-y-1.5 text-xs">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`block py-1.5 px-2.5 rounded-lg transition-colors ${
                      activeId === link.id
                        ? 'bg-blue-50 text-blue-700 font-bold border-l-2 border-blue-600'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* CENTER ARTICLE */}
          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 md:p-10 shadow-xs space-y-10 min-w-0">
            {/* SECTION 1 */}
            <section id="how-10-app-trap-happens" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                1. Why Salaried Borrowers Fall Into a 10-App Debt Spiral
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Almost nobody plans to install 10 loan apps. It starts honestly: you hold a ₹2.5 Lakh bank personal loan and two credit cards. One family hospital bill or 2-month job gap maxes out your card limit. To protect your CIBIL score and never miss a single due date, you download one fast app for ₹40,000.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Next month, that short-tenure app demands ₹8,000 on top of your old EMIs. So you install a second app to pay the first, and a third app to pay credit card minimum dues. Within six months, 4% processing fees and 36% APR turn a ₹2.5 Lakh gap into a <strong>₹5,00,000 to ₹12,00,000+</strong> debt wall!
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Rule #1 of Recovery:</strong> The day your total EMIs exceed your monthly take-home pay after rent and food, taking another loan app makes the hole deeper. You must freeze new borrowing immediately.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="lsp-to-nbfc-mapping" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                2. Map Every App Brand to Its Real RBI NBFC on CIBIL
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You do not settle with an app icon; you settle with the <strong>RBI-registered NBFC or bank</strong> holding your loan on CIBIL. Here is how major Indian apps map to backend regulated lenders:
              </p>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 border-r border-slate-700 font-bold">App Brand (LSP).</th>
                      <th className="p-3.5 font-bold">Primary / Common RBI Regulated Lender on CIBIL.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">KreditBee.</td>
                      <td className="p-3.5">Krazybee Services Pvt Ltd + co-lenders (Poonawalla, Vivriti, Piramal, InCred).</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">MoneyTap / Freo.</td>
                      <td className="p-3.5">TapStart Capital Pvt Ltd, Kisetsu Saison (Credit Saison), InCred, Chola.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">CASHe.</td>
                      <td className="p-3.5">Bhanix Finance and Investment Ltd + co-lenders.</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">RING / Kissht.</td>
                      <td className="p-3.5">Si Creva Capital Services Pvt Ltd + Northern Arc / MAS Financial.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">Home Credit / mPokket.</td>
                      <td className="p-3.5">Home Credit India Finance Pvt Ltd / mPokket Financial Services Pvt Ltd.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-600">
                Surprise perk: if two different apps booked your loans under the <strong>same co-lending NBFC</strong> (for example Vivriti or Kisetsu Saison), you can often coordinate both loan IDs with the same NBFC recovery team!
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="regulated-vs-rogue-apps" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                3. Separate RBI-Regulated Apps From Illegal 7-Day Apps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before creating your settlement sheet, split your apps into two buckets:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Bucket 1 (RBI-Regulated Apps on CIBIL):</strong> Show up on CIBIL under a valid NBFC/bank name and issue proper Key Fact Statements. Include 100% of these in your formal OTS plan.
                </li>
                <li>
                  <strong>Bucket 2 (Unlicensed 7-Day / APK Extortion Apps):</strong> Do <strong>not</strong> appear on CIBIL, give no NBFC name, and threaten morphed photos. Never pay settlement money to extortionists; file an immediate report on `cybercrime.gov.in` (helpline 1930) and see our <Link href="/fake-loan-app-harassment-cyber-crime" className="text-blue-600 hover:underline font-semibold">fake loan app cyber-crime guide</Link>.
                </li>
              </ul>
            </section>

            {/* SECTION 4 */}
            <section id="stop-enach-fee-bleed" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                4. Stop 10 Monthly E-NACH Bounces Draining Your Salary
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When 8 loan apps and 3 personal loans all hold e-NACH mandates on the same bank account, each lender may hit your account two or three times on the 5th of the month. At ₹350 to ₹590 per bank NACH return fee, you lose <strong>₹8,000 to ₹15,000 every single month</strong> in dead bank penalties before buying groceries!
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Protect your family&apos;s basic rent, food, and medical budget first, and route your monthly savings into a clean, dedicated settlement pool so every saved rupee goes toward closing principal debts.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="sequencing-order-plan" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                5. Smart Sequencing: Which Loans to Settle First
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Nobody has ₹4,00,000 sitting idle on Day 1 to close 10 lenders at once. A successful multi-loan settlement works like dominoes over 6 to 15 months:
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Wave A (Months 1 to 4: Small Noisy App Balances):</strong> Use your first saved ₹30,000 to ₹60,000 tranches to settle 2 or 3 smaller NBFC app loans (`mPokket`, `RING`, `Rupee112`, `MoneyTap`). Each closed app cuts daily call volume and removes an active default line from CIBIL.
                </li>
                <li>
                  <strong>Wave B (Months 4 to 9: Mid-Sized NBFC Apps &amp; Credit Cards):</strong> Deploy bigger lump sums (especially around Q4 / March write-off windows) to settle high-APR credit cards and mid-ticket `KreditBee`, `CASHe`, or `Home Credit` loans at 40% to 60% indicative waivers off inflated bills.
                </li>
                <li>
                  <strong>Wave C (Months 9 to 15: Larger Bank Personal Loans):</strong> Finish with your largest bank personal loan or PSU bank OTS once all smaller leaks are sealed.
                </li>
              </ol>
            </section>

            {/* SECTION 6 */}
            <section id="rbi-2027-shield-stack" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                6. Surviving Multi-Agency Calls: RBI 1 Jan 2027 Shield
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The hardest part of owing 8 apps at once is phone stress. Remember that every single RBI-regulated NBFC and bank must obey the RBI Fair Practices Code and RBI&apos;s updated recovery conduct rules effective <strong>1 January 2027</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>Calls and visits are strictly limited to <strong>8:00 AM to 7:00 PM</strong>.</li>
                <li>Contacting parents, spouses, phonebook contacts, or workplace HR is illegal.</li>
                <li>Field visitors must show agency photo ID and NBFC authorization letters.</li>
                <li>Keep one clean spreadsheet logging call violations and escalate to the NBFC Nodal Officer and `cms.rbi.org.in` when lines are crossed.</li>
              </ul>
            </section>

            {/* SECTION 7 */}
            <section id="sample-5lakh-case-math" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                7. Illustrative Walkthrough: ₹5.4 Lakh 7-Lender Stack
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Consider an illustrative salaried IT executive earning ₹58,000/month stuck with ₹5,40,000 in claimed unsecured dues across 4 loan apps (₹1,90,000), 2 credit cards (₹1,70,000), and 1 personal loan (₹1,80,000), where minimum dues + EMIs previously demanded ₹54,000/month!
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                By halting fresh app rollovers and setting aside ₹22,000 every month into a structured settlement plan, the borrower closes the 4 smaller apps in Months 2 to 5, settles both credit cards in Months 7 to 10, and closes the personal loan in Month 13, turning impossible monthly chaos into seven signed No Dues Certificates. (Illustrative educational scenario; individual lender waivers vary by case.)
              </p>
            </section>

            {/* SECTION 8 */}
            <section id="noc-tracker-cibil" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                8. Master Folder Rule: Tracking 10+ NOCs &amp; CIBIL Updates
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When closing 6 to 12 lenders sequentially, organisation is everything. Keep one cloud folder containing every lender&apos;s KFS, OTS sanction PDF, UTR payment receipt, and 30-day <strong>No Dues Certificate</strong>. Pull CIBIL 60 days after your final settlement to verify that every single trade line reads ₹0 balance, and then begin our <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-blue-600 hover:underline font-semibold">12-to-24-month CIBIL rebuild plan</Link>.
              </p>
            </section>

            <CompanySection />

            {/* FAQS */}
            <section id="faqs" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                Settling Multiple App Loans Above ₹3L: Common Questions
              </h2>
              <div className="space-y-3 pt-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors text-sm sm:text-base cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/60">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* RELATED LINKS */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                App-Specific &amp; Multi-Card Settlement Spokes.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/kreditbee-recovery-agent-home-visit"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  KreditBee Home Visit Rules.
                </Link>
                <Link
                  href="/moneytap-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  MoneyTap Loan Settlement.
                </Link>
                <Link
                  href="/cashe-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  CASHe Loan Settlement.
                </Link>
                <Link
                  href="/ring-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  RING App Loan Settlement.
                </Link>
                <Link
                  href="/settle-multiple-credit-cards"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Settle Multiple Credit Cards.
                </Link>
              </div>
            </div>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="sticky top-24 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-sm flex-shrink-0"
                >
                  AJ
                </Link>
                <div>
                  <Link
                    href="/author/ashish-jhangra"
                    className="text-sm font-bold text-slate-900 hover:text-blue-600 block"
                  >
                    Ashish Jhangra
                  </Link>
                  <p className="text-[11px] font-semibold text-blue-600">
                    Legal &amp; Debt Relief Expert.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Designs multi-creditor settlement sequences across fintech NBFCs, credit cards, and banks.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Updated: 11 Nov 2026.</span>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>RBI CMS Portal.</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-900 to-slate-900 p-6 text-white space-y-4 shadow-md">
              <div className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-white/15 text-blue-100 text-[11px] font-bold">
                <Lock className="w-3.5 h-3.5" />
                <span>₹3,00,000+ Multi-Loan Program.</span>
              </div>
              <p className="text-lg font-bold leading-snug">
                Turn 10 Unpayable EMIs Into 1 Calm Settlement Plan
              </p>
              <p className="text-xs text-blue-100 leading-relaxed">
                Combine all your RBI-regulated apps, credit cards, and personal loans above ₹3L into one structured roadmap.
              </p>
              <a
                href="#lead-funnel"
                className="block w-full text-center bg-white text-blue-950 font-bold py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Check ₹3L+ Eligibility Now
              </a>
              <a
                href="tel:+918800226635"
                className="text-xs text-blue-100 hover:text-white font-semibold flex items-center justify-center gap-1.5 pt-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call: +91-8800226635.</span>
              </a>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-2.5 text-xs shadow-xs">
              <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Stack Exit Rules.</span>
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Freeze new app rollovers immediately.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Map every app to its real CIBIL NBFC.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Close one lender at a time with signed OTS letters.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
