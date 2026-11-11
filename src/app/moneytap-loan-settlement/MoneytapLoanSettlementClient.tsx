'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';
import CompanySection from '@/components/CompanySection';
import {
  BookOpen,
  ShieldCheck,
  AlertCircle,
  CreditCard,
  Phone,
  Lock,
  ArrowRight,
  ExternalLink,
  Check,
  ChevronDown,
  ChevronUp,
  Clock
} from 'lucide-react';

export default function MoneytapLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('moneytap-3lakh-filter');
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
    { id: 'moneytap-3lakh-filter', label: '₹3L+ Combined Debt Check' },
    { id: 'moneytap-freo-nbfc-map', label: '1. MoneyTap / Freo & NBFC Map' },
    { id: 'credit-line-emi-trap', label: '2. Why Credit Lines Snowball' },
    { id: 'npa-ots-eligibility', label: '3. 90-Day NPA & OTS Rules' },
    { id: 'indicative-waiver-bands', label: '4. Realistic Waiver Cuts' },
    { id: 'step-by-step-settlement', label: '5. How to Settle Step by Step' },
    { id: 'sanction-letter-safety', label: '6. Sanction Letter Checks' },
    { id: 'rbi-2027-harassment-shield', label: '7. RBI 1 Jan 2027 Agent Rules' },
    { id: 'multi-loan-3lakh-plan', label: '8. Combining MoneyTap + Cards' },
    { id: 'noc-cibil-steps-moneytap', label: '9. NOC & CIBIL Next Steps' },
    { id: 'faqs', label: 'FAQs' }
  ];

  const faqs = [
    {
      q: 'Who actually approves a MoneyTap loan settlement?',
      a: 'MoneyTap (now part of the Freo platform) acts as a Lending Service Provider. Your loan sits on the books of an RBI-registered NBFC or bank named on your Key Fact Statement and CIBIL report, such as TapStart Capital Pvt Ltd, Kisetsu Saison Finance (Credit Saison), InCred, or Cholamandalam. Only that regulated lender can issue a valid OTS sanction letter.'
    },
    {
      q: 'When does a MoneyTap credit line become eligible for OTS?',
      a: 'Once missed EMIs push your MoneyTap drawdowns past 90 days overdue into Non-Performing Asset (NPA) status and you have documented hardship like job loss or medical bills, the partner NBFC evaluates One-Time Settlement offers under RBI Circular RBI/2023-24/40.'
    },
    {
      q: 'Why did my MoneyTap balance double after a few missed months?',
      a: 'Each drawdown on a MoneyTap credit line converts into an EMI loan with high unsecured interest, bounce charges on every failed e-NACH presentation, and late payment penalties. Stopping multiple e-NACH hits and settling in one lump sum removes much of that fee bloat.'
    },
    {
      q: 'What waiver range is realistic in a MoneyTap partner NBFC settlement?',
      a: 'No percentage is fixed in advance. In genuine hardship cases past 90 to 180 days overdue, partner NBFCs frequently waive penal charges and unapplied interest, often bringing indicative savings of 35% to 60% off total claimed dues.'
    },
    {
      q: 'Should I hire a firm for a single Rs 40,000 MoneyTap loan?',
      a: 'No. If your total debt is under Rs 3,00,000 and you only owe one small app balance, email the NBFC Grievance Officer directly to close it without paying legal fees. CredSettle represents borrowers carrying Rs 3,00,000 or more in combined unsecured debt across MoneyTap, other apps, credit cards, and personal loans.'
    },
    {
      q: 'What RBI recovery rules protect MoneyTap borrowers from 1 January 2027?',
      a: 'Under RBI Digital Lending Guidelines and updated RBI recovery conduct rules effective 1 January 2027, calls and field visits are allowed strictly between 8:00 AM and 7:00 PM, agents must show NBFC authorization IDs, and contacting relatives or workplaces is barred.'
    },
    {
      q: 'How do I verify a MoneyTap OTS sanction letter before paying?',
      a: 'Confirm that the letter comes from the official domain of TapStart Capital or the exact NBFC listed on your CIBIL report, states your exact loan ID, confirms Full and Final Settlement, and routes money directly to the NBFC account rather than an agent UPI ID.'
    },
    {
      q: 'What happens to my MoneyTap credit limit after settlement?',
      a: 'Your MoneyTap revolving line is permanently closed, the NBFC issues a No Dues Certificate within 30 days, and CIBIL reflects a zero balance with a Settled tag.'
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
            <CreditCard className="w-4 h-4 text-blue-200" />
            <span>App Credit-Line &amp; Multi-Debt Settlement Guide.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            MoneyTap Credit Line &amp; Personal Loan Settlement Guide
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Find your exact regulated NBFC behind MoneyTap / Freo, stop repeated e-NACH bounce charges, know your RBI 1 January 2027 rights, and settle ₹3,00,000+ combined app and card debt safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#lead-funnel"
              className="bg-white text-blue-950 px-7 py-3.5 rounded-full font-bold text-base hover:bg-blue-50 transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              <span>Check ₹3L+ Multi-Loan Settlement</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/negotiate-multiple-loans-together"
              className="bg-blue-900/60 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-blue-900 transition-all inline-flex items-center justify-center"
            >
              See Multi-Lender Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* ₹3L+ COMBINED DEBT FILTER BOX */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div
          id="moneytap-3lakh-filter"
          className="scroll-target bg-white rounded-2xl border-2 border-blue-600 p-5 sm:p-6 shadow-md space-y-3"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-blue-900">
              <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>Important Case Filter: Single App Balance vs ₹3,00,000+ Stack</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold">
              Minimum Representation Floor: ₹3,00,000 Combined Debt
            </span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Under ₹3,00,000 Total Debt?</strong> If MoneyTap is your only unpaid account (for instance ₹35,000 or ₹75,000), use the NBFC lookup steps below to email TapStart Capital or your KFS lender directly and save service fees.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>₹3,00,000+ Combined Debt?</strong> If your MoneyTap credit line sits alongside credit cards, bank personal loans, and other fintech apps totaling <strong>₹3,00,000 or more</strong>, enter your combined total below to plan one unified settlement.
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
              <li className="text-slate-800 font-semibold">MoneyTap Loan Settlement</li>
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
            <section id="moneytap-freo-nbfc-map" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                1. MoneyTap, Freo &amp; Your Actual Regulated NBFC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before you negotiate a single rupee on an unpaid MoneyTap bill, check who legally owns your loan. MoneyTap (operated under the <strong>Freo</strong> consumer finance brand) is a Lending Service Provider (LSP) app, not a bank.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Open your CIBIL report or loan sanction email to see the RBI-regulated Regulated Entity (RE) funding your line. Common lenders behind MoneyTap accounts include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>
                  <strong>TapStart Capital Private Limited:</strong> The group&apos;s own RBI-registered NBFC.
                </li>
                <li>
                  <strong>Partner Co-Lending NBFCs:</strong> Entities such as Kisetsu Saison Finance (Credit Saison India), InCred Financial Services, Cholamandalam Investment and Finance, or SMFG India Credit.
                </li>
                <li>
                  <strong>Legacy Co-Branded Lines:</strong> Older RBL Bank co-branded credit lines issued in earlier years.
                </li>
              </ul>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Why does this matter? Because a valid One-Time Settlement (OTS) letter and No Dues Certificate <strong>must</strong> carry the name and approval of that exact NBFC or bank.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="credit-line-emi-trap" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                2. Why MoneyTap Revolving Credit Lines Snowball Fast
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Unlike a single bank loan with one monthly EMI, a MoneyTap credit line lets salaried users pull ₹10,000 one week, ₹25,000 the next week, and ₹50,000 for rent at month-end. Each withdrawal turns into a separate sub-loan with its own EMI schedule!
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When your salary gets delayed or cut, three separate e-NACH mandates hit your bank account in the same month. You get hit by bank NACH return charges <strong>plus</strong> NBFC bounce penalties on each sub-loan, pushing a ₹1.2 Lakh principal draw past ₹2 Lakhs in claimed dues within months.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="npa-ots-eligibility" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                3. 90-Day NPA Rule &amp; RBI Compromise Eligibility
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Partner NBFCs rarely approve deep settlement cuts when an EMI is only 15 days late. Under RBI asset norms, an unsecured personal line turns into a <strong>Non-Performing Asset (NPA)</strong> once repayments stay unpaid past <strong>90 days</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once classified as an NPA and backed by clear hardship proof (job loss, medical crisis, pay cut, or business loss), every RBI-registered NBFC follows a board-approved compromise settlement policy under <strong>RBI Circular RBI/2023-24/40 dated 8 June 2023</strong>.
              </p>
            </section>

            {/* SECTION 4 */}
            <section id="indicative-waiver-bands" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                4. Realistic Waiver Cuts on MoneyTap NBFC Claims
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Settlement numbers depend on which partner NBFC holds your loan, how many sub-loans bounced, and whether you can pay in one clean lump sum:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-bold uppercase text-slate-500">90 to 120 Days Past Due.</p>
                  <p className="text-lg font-extrabold text-slate-900 mt-1">25% to 40% Cut.</p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Past savings mainly by dropping stacked bounce charges and penal interest.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                  <p className="text-xs font-bold uppercase text-blue-700">120 to 180+ Days NPA.</p>
                  <p className="text-lg font-extrabold text-blue-900 mt-1">40% to 55% Cut.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Past cuts on total claim when hardship papers are verified and paid fast.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <p className="text-xs font-bold uppercase text-emerald-700">Aged Write-Off Pool.</p>
                  <p className="text-lg font-extrabold text-emerald-900 mt-1">50% to 60% Cut.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Past range on older unsecured credit-line defaults closed in one shot.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic">
                Note: Ranges above reflect past unsecured NBFC outcomes on total claimed bills, never fixed lender promises.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="step-by-step-settlement" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                5. Five Steps to Settle a MoneyTap Credit Line Safely
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm md:text-base text-slate-700">
                <li>
                  <strong>List Every Sub-Loan &amp; KFS Lender:</strong> Check CIBIL to see whether all your MoneyTap drawdowns sit under TapStart Capital or split across two partner NBFCs.
                </li>
                <li>
                  <strong>Protect Your Salary Account:</strong> Keep survival rent and grocery money in a clean bank account where repeated e-NACH hits do not drain ₹590 per bounce every week.
                </li>
                <li>
                  <strong>Build Your Hardship File:</strong> Collect relieving letters, salary-cut slips, hospital bills, and a 6-month bank statement.
                </li>
                <li>
                  <strong>Negotiate One Consolidated NBFC Figure:</strong> Ask the NBFC settlement desk to merge all active sub-loans under that NBFC into one written Full and Final OTS offer.
                </li>
                <li>
                  <strong>Pay Strictly After Checking the Letter:</strong> Pay only via official app closure link or direct NEFT/IMPS to the NBFC loan account, and collect your 30-day NOC.
                </li>
              </ol>
            </section>

            {/* SECTION 6 */}
            <section id="sanction-letter-safety" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                6. Sanction Letter Checks to Avoid Fake OTS Scams
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-2.5">
                <p className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>Check Five Details Before Paying ₹1:</span>
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-amber-950">
                  <li>Sent from the verified corporate email domain of TapStart Capital, Freo, or your exact KFS NBFC (never a Gmail address).</li>
                  <li>Lists all covered sub-loan account numbers and your PAN-matched name.</li>
                  <li>Clearly writes <strong>Full and Final Settlement</strong> with zero balance remaining upon payment.</li>
                  <li>Prints the exact payment cutoff date and official NBFC beneficiary bank account.</li>
                  <li>Read our full <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-blue-700 underline font-semibold">OTS sanction verification guide</Link>.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="rbi-2027-harassment-shield" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                7. RBI Digital Lending &amp; 1 January 2027 Agent Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                MoneyTap and every partner NBFC must follow RBI Digital Lending Directions and the updated RBI recovery conduct norms effective <strong>1 January 2027</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>Recovery calls and visits are legal only from <strong>8:00 AM to 7:00 PM</strong>.</li>
                <li>Agents cannot call your phone contacts, parents, neighbours, or office HR.</li>
                <li>Visiting field agents must show a valid ID card and NBFC authorization letter.</li>
                <li>Unresolved harassment complaints past 30 days can be filed free on `cms.rbi.org.in`.</li>
              </ul>
            </section>

            {/* SECTION 8 */}
            <section id="multi-loan-3lakh-plan" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                8. Settling MoneyTap Alongside Cards &amp; Personal Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In almost every ₹3,00,000+ file we review, MoneyTap is just one piece of a wider debt spiral alongside HDFC/SBI/ICICI credit cards, KreditBee, CASHe, and bank personal loans.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CredSettle brings all your unsecured loans into one plan. You save in one monthly fund, stop loud phone threats legally, and close one lender at a time with real OTS letters. See how we <Link href="/settle-multiple-credit-cards" className="text-blue-600 hover:underline font-semibold">settle multiple credit cards</Link> and <Link href="/get-noc-after-loan-settlement" className="text-blue-600 hover:underline font-semibold">get every NOC after settlement</Link>.
              </p>
            </section>

            {/* SECTION 9 */}
            <section id="noc-cibil-steps-moneytap" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                9. Closing Cleanly: NOC &amp; CIBIL Score Steps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A MoneyTap settlement is complete only when your paper trail is locked down. Follow four clear steps right after you pay your agreed lump sum:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>Save your bank UTR slip, app receipt, and signed NBFC sanction letter in one safe folder.</li>
                <li>Collect your signed No Dues Certificate within 30 days of final payment.</li>
                <li>Pull your CIBIL report after 45 to 60 days and check that every MoneyTap sub-loan shows ₹0 due.</li>
                <li>Use a small FD card paid on time after 6 to 12 months to lift your score again. Read our <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-blue-600 hover:underline font-semibold">CIBIL rebuild guide</Link>.</li>
              </ul>
            </section>

            <CompanySection />

            {/* FAQS */}
            <section id="faqs" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                MoneyTap Loan Settlement: Common Questions
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
                Related App &amp; Multi-Loan Settlement Guides.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/kreditbee-recovery-agent-home-visit"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  KreditBee Home Visit Rules.
                </Link>
                <Link
                  href="/mpokket-30-90-days-meaning"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  mPokket 30 to 90 Days Meaning.
                </Link>
                <Link
                  href="/negotiate-multiple-loans-together"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Settle Multiple Loans Together.
                </Link>
                <Link
                  href="/rbi-circular-on-loan-settlement-ots"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  RBI Compromise OTS Circular.
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
                Reviews LSP credit-line contracts, co-lending NBFC settlements, and RBI borrower rules.
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
                <span>₹3,00,000+ Combined Debt Plan.</span>
              </div>
              <p className="text-lg font-bold leading-snug">
                Drowning in MoneyTap, Credit Cards &amp; Personal Loans?
              </p>
              <p className="text-xs text-blue-100 leading-relaxed">
                Stop multiple NACH bounce charges and settle all your unsecured accounts in one clear plan.
              </p>
              <a
                href="#lead-funnel"
                className="block w-full text-center bg-white text-blue-950 font-bold py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Check ₹3L+ Eligibility
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
                <span>MoneyTap OTS Checklist.</span>
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Check exact NBFC name on CIBIL / KFS first.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Merge all sub-loans into one written OTS letter.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Collect signed NBFC No Dues Certificate in 30 days.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
