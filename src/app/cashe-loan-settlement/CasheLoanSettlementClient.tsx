'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';
import CompanySection from '@/components/CompanySection';
import {
  BookOpen,
  ShieldCheck,
  AlertCircle,
  Briefcase,
  Phone,
  Lock,
  ArrowRight,
  ExternalLink,
  Check,
  ChevronDown,
  ChevronUp,
  Clock
} from 'lucide-react';

export default function CasheLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('cashe-3lakh-filter');
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
    { id: 'cashe-3lakh-filter', label: '₹3L+ Combined Debt Filter' },
    { id: 'cashe-bhanix-structure', label: '1. CASHe & Bhanix Finance NBFC' },
    { id: 'salaried-tenure-bounce-trap', label: '2. 90 to 540 Day Tenure Traps' },
    { id: 'arbitration-section25-notices', label: '3. Arbitration & E-NACH Notices' },
    { id: 'cashe-waiver-bands', label: '4. Realistic OTS Waiver Cuts' },
    { id: 'cashe-5-step-settlement', label: '5. How to Settle Step by Step' },
    { id: 'cashe-sanction-checks', label: '6. Sanction Letter Checks' },
    { id: 'cashe-rbi-2027-rules', label: '7. RBI 1 Jan 2027 Privacy Laws' },
    { id: 'cashe-multi-loan-plan', label: '8. CASHe + Cards & PLs (₹3L+)' },
    { id: 'cashe-noc-cibil', label: '9. NOC & CIBIL Next Steps' },
    { id: 'faqs', label: 'FAQs' }
  ];

  const faqs = [
    {
      q: 'Which NBFC owns my CASHe personal loan?',
      a: 'CASHe is a digital Lending Service Provider backed primarily by its group RBI-registered NBFC, Bhanix Finance and Investment Limited, alongside co-lending NBFC partners such as Vivriti Capital or PayU Finance shown on your Key Fact Statement.'
    },
    {
      q: 'When can I apply for a CASHe One-Time Settlement?',
      a: 'Once missed EMIs push your CASHe loan past 90 days overdue into NPA status and you show documented hardship like job loss, pay cuts, or medical emergencies, Bhanix Finance or your KFS lender evaluates OTS offers under RBI Circular RBI/2023-24/40.'
    },
    {
      q: 'What should I do if I get an online arbitration email for a CASHe loan?',
      a: 'Do not ignore an arbitration email. File a short written reply putting your financial hardship and settlement readiness on record, while negotiating a bilateral Full and Final OTS directly with Bhanix Finance.'
    },
    {
      q: 'What waiver range is real in a CASHe / Bhanix Finance settlement?',
      a: 'No cut is fixed in advance. On unsecured NPAs aged past 90 to 180 days with verified hardship, dropping bounce charges and penal interest often saves 30% to 55% off total claimed dues.'
    },
    {
      q: 'Should I hire a firm for a single Rs 45,000 CASHe loan?',
      a: 'No. If your total unsecured debt is under Rs 3,00,000, email Bhanix Finance\'s Grievance Officer directly to negotiate a penalty cut yourself. CredSettle strictly serves salaried borrowers carrying Rs 3,00,000 or more in combined unsecured debt across CASHe, other apps, credit cards, and personal loans.'
    },
    {
      q: 'Can CASHe agents email my company HR or call colleagues?',
      a: 'No. Under RBI Digital Lending Directions and RBI\'s updated recovery conduct norms effective 1 January 2027, recovery calls and visits are allowed strictly from 8:00 AM to 7:00 PM, and contacting HR, bosses, or family members is barred.'
    },
    {
      q: 'How do I verify a CASHe / Bhanix Finance OTS letter?',
      a: 'Confirm that the letter comes from the official domain of CASHe or Bhanix Finance and Investment Ltd, shows your exact loan ID, states Full and Final Settlement, and directs payment into the official app or NBFC account.'
    },
    {
      q: 'How fast do I get a No Dues Certificate after CASHe settlement?',
      a: 'Once you pay 100% of the sanctioned OTS sum by the cutoff date, Bhanix Finance issues a signed No Dues Certificate within 30 days and marks CIBIL as Settled.'
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
            <Briefcase className="w-4 h-4 text-blue-200" />
            <span>Salaried App-Loan &amp; Multi-Creditor Settlement Guide.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            CASHe Personal Loan &amp; Bhanix Finance Settlement Guide
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Understand how Bhanix Finance and Investment Ltd handles defaulted CASHe loans, handle online arbitration notices calmly, know your RBI 1 January 2027 rights, and close ₹3L+ multi-loan debt safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#lead-funnel"
              className="bg-white text-blue-950 px-7 py-3.5 rounded-full font-bold text-base hover:bg-blue-50 transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              <span>Check ₹3L+ Multi-Loan Plan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/multiple-app-loans-settlement-total-above-3-lakh"
              className="bg-blue-900/60 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-blue-900 transition-all inline-flex items-center justify-center"
            >
              Read ₹3L+ Multi-App Guide
            </Link>
          </div>
        </div>
      </section>

      {/* ₹3L+ SELF-FILTER */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div
          id="cashe-3lakh-filter"
          className="scroll-target bg-white rounded-2xl border-2 border-blue-600 p-5 sm:p-6 shadow-md space-y-3"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-blue-900">
              <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>Case Fit Check: Single CASHe Loan vs ₹3,00,000+ Debt Stack</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold">
              CredSettle Minimum Case Floor: ₹3,00,000+ Combined Debt
            </span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Under ₹3,00,000 Total Debt?</strong> If you owe ₹30,000 or ₹80,000 only on CASHe with no other unpaid accounts, use Section 5 below to contact Bhanix Finance&apos;s Grievance Officer directly and save service fees.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>₹3,00,000+ Combined Salaried Debt?</strong> Most CASHe borrowers we assist also hold maxed-out credit cards, bank personal loans, and 3 to 6 other loan apps totaling <strong>₹3,00,000 or higher</strong>. Enter your combined total below.
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
              <li className="text-slate-800 font-semibold">CASHe Loan Settlement</li>
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
            <section id="cashe-bhanix-structure" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                1. CASHe App vs Bhanix Finance &amp; Co-Lending NBFCs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CASHe is a salaried digital lending app operated by Aeries Financial Technologies. When you pull your CIBIL report, your CASHe loan shows up under the name of its group RBI-registered NBFC, <strong>Bhanix Finance and Investment Limited</strong>, or a co-lending NBFC such as Vivriti Capital or PayU Finance printed on your Key Fact Statement (KFS).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Because Bhanix Finance is directly licensed by the Reserve Bank of India, it must follow RBI rules on penal charges, privacy, recovery hours, and board-approved compromise settlements.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="salaried-tenure-bounce-trap" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                2. Why 90, 180 &amp; 360-Day CASHe Plans Squeeze Cashflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CASHe targets salaried staff earning ₹25,000 to ₹1,50,000+ a month with compressed 90-day, 180-day, 360-day, and 540-day plans up to ₹3,00,000 or ₹4,00,000. Because the loan term is short, monthly EMIs are huge!
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A ₹1,50,000 loan over 6 months demands nearly ₹28,000+ every single month. One layoff, delayed bonus, or hospital emergency triggers repeated e-NACH bounces and steep overdue fees.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="arbitration-section25-notices" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                3. Handling CASHe Online Arbitration &amp; E-NACH Notices
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Between 60 and 120 days overdue, Bhanix Finance frequently sends two types of formal legal emails:
              </p>
              <ul className="list-disc pl-6 space-y-2.5 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Section 25 (PSS Act) E-NACH Bounce Notice:</strong> Sent when an electronic auto-debit fails for low balance. Do not panic, and keep documented proof of your hardship and settlement talks.
                </li>
                <li>
                  <strong>Online Dispute Resolution (ODR) / Arbitration Notice:</strong> Many fintech NBFCs use online arbitration portals. Never ignore an arbitration email! Submitting a timely written objection and hardship reply prevents a one-sided award while you finalize a bilateral One-Time Settlement.
                </li>
              </ul>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Keep a calm folder with every notice PDF, date, and sender email. When you reply politely on record, you show good faith. You also stop rogue call agents from scaring you with fake court threats on WhatsApp.
              </p>
            </section>

            {/* SECTION 4 */}
            <section id="cashe-waiver-bands" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                4. Realistic Waiver Cuts in Bhanix Finance OTS Deals
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-bold uppercase text-slate-500">90 to 120 Days NPA.</p>
                  <p className="text-lg font-extrabold text-slate-900 mt-1">25% to 40% Cut.</p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Past cut on total claim by waiving stacked bounce and late charges.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                  <p className="text-xs font-bold uppercase text-blue-700">120 to 180+ Days NPA.</p>
                  <p className="text-lg font-extrabold text-blue-900 mt-1">40% to 55% Cut.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Past savings on total demand when backed by verified hardship records.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <p className="text-xs font-bold uppercase text-emerald-700">Aged Write-Off Pool.</p>
                  <p className="text-lg font-extrabold text-emerald-900 mt-1">50% to 60% Cut.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Past range on older unsecured defaults closed in one lump sum.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic">
                Note: Ranges above reflect past unsecured NBFC outcomes on total claimed bills, never fixed lender promises.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="cashe-5-step-settlement" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                5. Five Steps to Settle a CASHe Loan Safely
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Confirm Your Exact KFS Lender:</strong> Verify on CIBIL whether Bhanix Finance and Investment Ltd or a co-lender holds your loan ID.
                </li>
                <li>
                  <strong>Gather Clear Hardship Papers:</strong> Collect termination letters, pay-cut slips, hospital bills, and 6 months of bank statements.
                </li>
                <li>
                  <strong>Reply in Writing to Legal Emails:</strong> Keep all settlement and legal communication on email so every offer is recorded.
                </li>
                <li>
                  <strong>Check the Written Sanction Letter:</strong> Demand an official PDF sanction letter stating Full and Final closure before paying.
                </li>
                <li>
                  <strong>Pay Strictly via Official Channels:</strong> Pay inside the CASHe app or direct NEFT/IMPS to Bhanix Finance&apos;s bank account.
                </li>
              </ol>
            </section>

            {/* SECTION 6 */}
            <section id="cashe-sanction-checks" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                6. How to Check Your Bhanix Finance Sanction Letter
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-2.5">
                <p className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>CASHe / Bhanix OTS Safety List:</span>
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-amber-950">
                  <li>Sent from the verified corporate domain of CASHe or Bhanix Finance and Investment Ltd.</li>
                  <li>Lists your exact CASHe loan ID, borrower name, and agreed settlement figure.</li>
                  <li>States that any pending arbitration or legal notice stands withdrawn upon full payment.</li>
                  <li>Routes money strictly to the official app or NBFC account, never a personal UPI ID.</li>
                  <li>Read our complete <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-blue-700 underline font-semibold">OTS letter check guide</Link>.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="cashe-rbi-2027-rules" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                7. Workplace Privacy &amp; RBI 1 January 2027 Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Because CASHe collects official corporate email IDs during salaried KYC, many borrowers worry about HR emails. Under RBI Digital Lending Directions and the updated RBI recovery conduct rules effective <strong>1 January 2027</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>Agents may call or visit strictly between <strong>8:00 AM and 7:00 PM</strong>.</li>
                <li>Messaging your HR team, manager, coworkers, or family members is illegal.</li>
                <li>Visiting agents must display a valid ID card and Bhanix Finance authorization letter.</li>
                <li>Unresolved harassment complaints past 30 days can be escalated on `cms.rbi.org.in`.</li>
              </ul>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                What should you do if an agent calls at night or sends rude texts? Save screenshots of the caller number, message time, and chat lines right away. Email those screenshots to Bhanix Finance&apos;s Grievance Redressal Officer and ask for all future talks to stay in writing. Clear email proof stops bad behaviour fast and protects your workplace peace while you arrange your settlement sum. See our full guide on how to <Link href="/how-to-stop-recovery-agent-harassment" className="text-blue-600 hover:underline font-semibold">stop recovery agent harassment</Link>.
              </p>
            </section>

            {/* SECTION 8 */}
            <section id="cashe-multi-loan-plan" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                8. Settling CASHe With Credit Cards &amp; Personal Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Salaried borrowers defaulting on a ₹1.5 Lakh CASHe loan almost always hold two or three credit cards, a bank personal loan, and apps like KreditBee or MoneyTap pushing total unsecured debt past <strong>₹3,00,000 to ₹15,00,000+</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do not take a fresh payday loan to pay a single CASHe EMI. New short loans charge steep upfront fees and collapse your home budget next month. Protect your rent, food, medical care, and family needs first. Set aside a steady sum in a separate bank account each month so you build real lump-sum cash for clean closures.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CredSettle coordinates your entire ₹3L+ multi-lender stack: replying to ODR notices, stopping unlawful harassment, and sequencing lump-sum settlements across every app, card, and bank loan. Read our <Link href="/multiple-app-loans-settlement-total-above-3-lakh" className="text-blue-600 hover:underline font-semibold">multiple app loans above ₹3 Lakh guide</Link> and see how we <Link href="/settle-multiple-personal-loans" className="text-blue-600 hover:underline font-semibold">settle multiple personal loans</Link>.
              </p>
            </section>

            {/* SECTION 9 */}
            <section id="cashe-noc-cibil" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                9. Bhanix Finance NOC &amp; CIBIL Score Cleanup
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Collect your signed <strong>No Dues Certificate</strong> within 30 days of paying your agreed OTS sum. Store your sanction letter, payment receipt, and NOC PDF safely in cloud storage and print a paper copy for your home records.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Check CIBIL after 45 to 60 days to verify that Bhanix Finance reports ₹0 due with a <strong>Settled</strong> tag. If an old overdue number still sits on your bureau line, file an online CIBIL dispute right away and upload your signed NOC. Once all your unsecured debts are closed, small on-time bills and a FD-backed card help your score climb back steadily. Read our <Link href="/get-noc-after-loan-settlement" className="text-blue-600 hover:underline font-semibold">NOC after settlement guide</Link> and <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-blue-600 hover:underline font-semibold">CIBIL rebuild roadmap</Link>.
              </p>
            </section>

            <CompanySection />

            {/* FAQS */}
            <section id="faqs" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                CASHe Loan Settlement: Common Questions
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
                Related App &amp; Multi-Debt Settlement Guides.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/ring-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  RING App Loan Settlement.
                </Link>
                <Link
                  href="/moneytap-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  MoneyTap Loan Settlement.
                </Link>
                <Link
                  href="/home-credit-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Home Credit Loan Settlement.
                </Link>
                <Link
                  href="/multiple-app-loans-settlement-total-above-3-lakh"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Multiple App Loans Above ₹3L.
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
                Handles fintech ODR arbitration replies, Bhanix NBFC settlements, and ₹3L+ multi-loan plans.
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
                Facing CASHe Notices Plus Credit Cards &amp; Personal Loans?
              </p>
              <p className="text-xs text-blue-100 leading-relaxed">
                Handle arbitration emails properly and settle all your ₹3L+ unsecured debts under one roof.
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
                <span>CASHe OTS Rules.</span>
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Never ignore online arbitration emails.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Check Bhanix Finance letterhead before paying.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Collect signed No Dues Certificate within 30 days.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
