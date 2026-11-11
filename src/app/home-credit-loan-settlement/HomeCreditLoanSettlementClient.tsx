'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';
import CompanySection from '@/components/CompanySection';
import {
  BookOpen,
  ShieldCheck,
  AlertCircle,
  Home,
  Phone,
  Lock,
  ArrowRight,
  ExternalLink,
  Check,
  ChevronDown,
  ChevronUp,
  Clock
} from 'lucide-react';

export default function HomeCreditLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('home-credit-3lakh-filter');
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
    { id: 'home-credit-3lakh-filter', label: 'Phone EMI vs ₹3L+ Debt Filter' },
    { id: 'phone-loan-vs-cash-pl', label: '1. Phone EMI vs Cash Personal Loan' },
    { id: 'high-apr-addon-math', label: '2. Why Home Credit Balances Stay High' },
    { id: 'home-credit-npa-ots', label: '3. 90-Day NPA & OTS Eligibility' },
    { id: 'home-credit-waiver-cuts', label: '4. Realistic OTS Waiver Cuts' },
    { id: 'home-credit-5-steps', label: '5. How to Settle Step by Step' },
    { id: 'home-credit-sanction-check', label: '6. Sanction Letter Checks' },
    { id: 'home-credit-rbi-2027', label: '7. RBI 1 Jan 2027 Field Visit Rules' },
    { id: 'home-credit-3lakh-stack', label: '8. Combining ₹3L+ Multi-Loans' },
    { id: 'home-credit-noc-cibil', label: '9. NOC & CIBIL Next Steps' },
    { id: 'faqs', label: 'FAQs' }
  ];

  const faqs = [
    {
      q: 'Is Home Credit India an RBI-registered NBFC?',
      a: 'Yes. Home Credit India Finance Private Limited is an RBI-registered Non-Banking Financial Company. Its personal loans, Ujjwal EMI card dues, and consumer durable loans are regulated under RBI Fair Practices and compromise settlement rules.'
    },
    {
      q: 'Can a Home Credit personal loan be settled via One-Time Settlement?',
      a: 'Yes. Once an unsecured Home Credit personal loan crosses 90 days past due into NPA status and you show documented hardship like job loss or medical bills, Home Credit India reviews lump-sum OTS offers under RBI Circular RBI/2023-24/40.'
    },
    {
      q: 'Why is my Home Credit loan balance still high after paying many EMIs?',
      a: 'Home Credit cash personal loans carry high unsecured APR (often 24% to 42%+) plus optional bundled Safe Pay or insurance add-ons, so early EMIs go heavily toward interest rather than principal.'
    },
    {
      q: 'Should I hire a firm for a Rs 18,000 Home Credit mobile phone loan?',
      a: 'No! Small store-financed mobile phone or appliance loans should be closed directly via the Home Credit app or customer care without paying settlement fees. CredSettle strictly assists borrowers holding Rs 3,00,000 or more in combined unsecured debt across Home Credit personal loans, credit cards, bank PLs, and loan apps.'
    },
    {
      q: 'Can Home Credit recovery agents lock my phone or take household items?',
      a: 'Agents have zero right to enter your house by force or seize household goods. Note that some store-financed smartphone EMI contracts come with pre-disclosed device-lock software until device dues are cleared, whereas cash personal loans have no asset tie.'
    },
    {
      q: 'What RBI rules govern Home Credit field visits from 1 January 2027?',
      a: 'Under the RBI Fair Practices Code and updated RBI recovery conduct rules effective 1 January 2027, calls and field visits are allowed strictly from 8:00 AM to 7:00 PM, agents must show Home Credit authorization IDs, and shaming before neighbours or coworkers is prohibited.'
    },
    {
      q: 'What waiver range is realistic in a Home Credit personal loan OTS?',
      a: 'No waiver is fixed in advance. On unsecured cash personal loans aged past 90 to 180+ days in NPA status with hardship proof, dropping late fees and unapplied interest often yields indicative savings of 35% to 60% off total claimed balances.'
    },
    {
      q: 'How fast does Home Credit issue a No Dues Certificate?',
      a: 'After you pay 100% of the sanctioned OTS sum before the deadline, Home Credit India issues a No Dues Certificate within 30 days and updates CIBIL to Settled with zero balance.'
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
            <Home className="w-4 h-4 text-blue-200" />
            <span>Home Credit India NBFC &amp; Multi-Debt Settlement Guide.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            Home Credit India Personal Loan &amp; OTS Settlement Guide
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Struggling with high-interest Home Credit cash personal loans alongside credit cards and apps above ₹3,00,000? Know Home Credit India OTS rules, RBI 1 January 2027 visit laws, and clean NOC steps.
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
              href="/settle-multiple-personal-loans"
              className="bg-blue-900/60 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-blue-900 transition-all inline-flex items-center justify-center"
            >
              Read Multi-Loan Settlement Guide
            </Link>
          </div>
        </div>
      </section>

      {/* ₹3L+ SELF-FILTER */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div
          id="home-credit-3lakh-filter"
          className="scroll-target bg-white rounded-2xl border-2 border-blue-600 p-5 sm:p-6 shadow-md space-y-3"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-blue-900">
              <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>Honest Case Check: Small Phone EMI vs ₹3,00,000+ Debt Stack</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              CredSettle Minimum Case Floor: ₹3,00,000+ Combined Debt
            </span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Small Store Phone Loan (Total Debt Under ₹3,00,000):</strong> Owning just a ₹15,000 smartphone EMI or one small ₹40,000 loan? Pay it inside the Home Credit app or email Home Credit care directly so you do not spend money on legal fees.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>₹3,00,000+ Combined Debt Stack:</strong> Many Home Credit customers get upgraded into ₹1.5L to ₹4L cash personal loans on top of credit cards, Bajaj/bank PLs, and loan apps totaling <strong>₹3,00,000 or more</strong>. Enter your combined debt below.
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
              <li className="text-slate-800 font-semibold">Home Credit Loan Settlement</li>
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
            <section id="phone-loan-vs-cash-pl" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                1. Phone Shop EMI vs Home Credit Cash Personal Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Home Credit India Finance Private Limited</strong> is a direct RBI-registered NBFC. Most borrowers first meet Home Credit at a neighbourhood mobile shop for a ₹15,000 smartphone EMI or an Ujjwal EMI card.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once you pay 6 phone EMIs on time, Home Credit tele-sales teams pitch larger unsecured <strong>Flexible Cash Personal Loans</strong> from ₹50,000 up to ₹5,00,000. Note the key legal split: store smartphone EMIs sometimes carry pre-agreed device-lock software on that handset, whereas unsecured cash personal loans have <strong>zero collateral</strong> and follow standard RBI unsecured compromise rules.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="high-apr-addon-math" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                2. Why Home Credit Cash Loan Balances Drop So Slowly
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers are often shocked to pay 14 months of EMIs on a ₹2,00,000 Home Credit cash loan and see ₹1,65,000 still pending! Two contract features drive that math:
              </p>
              <ul className="list-disc pl-6 space-y-2.5 text-sm md:text-base text-slate-700">
                <li>
                  <strong>High Unsecured APR:</strong> Because Home Credit lends to new-to-credit and mid-income borrowers without collateral, annual interest rates often sit between 24% and 42%+.
                </li>
                <li>
                  <strong>Value-Added Service Bundles:</strong> Processing fees, Safe Pay repayment-holiday add-ons, or insurance packs financed into the loan raise the starting ledger balance.
                </li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section id="home-credit-npa-ots" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                3. 90-Day NPA Rule &amp; One-Time Settlement Eligibility
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you used your Safe Pay EMI holiday (where opted) and still cannot resume high monthly EMIs due to job loss, pay cuts, or medical crisis, your loan enters <strong>Non-Performing Asset (NPA)</strong> status past <strong>90 days overdue</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under <strong>RBI Circular RBI/2023-24/40 dated 8 June 2023</strong>, Home Credit India maintains a board-approved compromise policy allowing distressed NPA borrowers to close unsecured loans via a lump-sum One-Time Settlement (OTS).
              </p>
            </section>

            {/* SECTION 4 */}
            <section id="home-credit-waiver-cuts" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                4. Realistic Waiver Cuts on Home Credit Cash Loans
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-bold uppercase text-slate-500">90 to 120 Days NPA.</p>
                  <p className="text-lg font-extrabold text-slate-900 mt-1">25% to 40% Cut.</p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Past cut on total claim by waiving bounce fees and late charges.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                  <p className="text-xs font-bold uppercase text-blue-700">120 to 180+ Days NPA.</p>
                  <p className="text-lg font-extrabold text-blue-900 mt-1">40% to 55% Cut.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Past savings on inflated high-APR dues when hardship is documented.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <p className="text-xs font-bold uppercase text-emerald-700">Aged Write-Off Pool.</p>
                  <p className="text-lg font-extrabold text-emerald-900 mt-1">50% to 60% Cut.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Past range on older unsecured cash loans closed in one quick sum.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic">
                Note: Figures above reflect past unsecured NBFC outcomes on total claimed dues, never fixed promises.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="home-credit-5-steps" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                5. Five Steps to Settle a Home Credit Loan Safely
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Pull Your Loan Contract &amp; Statement:</strong> Check your 10-digit Home Credit contract number, original principal, and total EMIs already paid.
                </li>
                <li>
                  <strong>Document Your Income Shock:</strong> Gather relieving letters, salary-cut slips, medical bills, or shop closure proof.
                </li>
                <li>
                  <strong>Negotiate in Writing Only:</strong> Email Home Credit customer care / settlement desk rather than relying on verbal promises from field collectors.
                </li>
                <li>
                  <strong>Verify the Official Sanction Letter:</strong> Check every clause on your Home Credit OTS letter before paying a rupee.
                </li>
                <li>
                  <strong>Pay Strictly via Official Home Credit Channels:</strong> Pay inside the verified Home Credit India app or official bank account and save your receipt.
                </li>
              </ol>
            </section>

            {/* SECTION 6 */}
            <section id="home-credit-sanction-check" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                6. How to Check Your Home Credit Sanction Letter
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-2.5">
                <p className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>Home Credit India Sanction Check List:</span>
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-amber-950">
                  <li>Issued from the official `@homecredit.co.in` domain or printed on Home Credit India Finance Pvt Ltd letterhead.</li>
                  <li>Matches your exact Home Credit loan contract number and full name.</li>
                  <li>States <strong>Full and Final Settlement</strong>, exact waiver sum, and final pay date.</li>
                  <li>Never pay cash at your doorstep without a verified NBFC sanction letter! Read our <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-blue-700 underline font-semibold">OTS letter check guide</Link>.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="home-credit-rbi-2027" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                7. Doorstep Visits &amp; RBI 1 January 2027 Conduct Laws
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Home Credit has strong field collection coverage in Tier-1 and Tier-2 cities. Every field executive must obey the RBI Fair Practices Code and RBI&apos;s updated recovery conduct rules effective <strong>1 January 2027</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>Field visits and phone calls are legal strictly from <strong>8:00 AM to 7:00 PM</strong>.</li>
                <li>Agents must carry a photo ID card and Home Credit authorization letter.</li>
                <li>Agents cannot shout in your lane, talk to neighbours, or visit your office desk to shame you.</li>
                <li>Unresolved complaints past 30 days can be escalated free on `cms.rbi.org.in`. See how to <Link href="/how-to-stop-recovery-agent-harassment" className="text-blue-600 hover:underline font-semibold">stop recovery agent harassment</Link>.</li>
              </ul>
            </section>

            {/* SECTION 8 */}
            <section id="home-credit-3lakh-stack" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                8. Settling Home Credit Inside a ₹3,00,000+ Debt Stack
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most families holding a ₹1.5L to ₹3L Home Credit cash loan also carry SBI/HDFC/ICICI credit cards, Bajaj or bank personal loans, and fintech apps pushing combined unsecured debt above <strong>₹3,00,000 to ₹12,00,000+</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Stop handing small cash amounts of ₹3,000 or ₹5,000 to visiting collectors just to buy a week of quiet. On a high-rate cash loan, small unscheduled payments disappear straight into late fees without cutting your real loan balance. Keep your monthly food, rent, and school budget safe first.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CredSettle lines up all your unsecured lenders in one coordinated roadmap so you protect household cashflow, handle field visits legally, and close each contract with clean OTS letters. Explore how we <Link href="/negotiate-multiple-loans-together" className="text-blue-600 hover:underline font-semibold">negotiate multiple loans together</Link>.
              </p>
            </section>

            {/* SECTION 9 */}
            <section id="home-credit-noc-cibil" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                9. Home Credit No Dues Certificate &amp; CIBIL Score
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Download and save your signed Home Credit <strong>No Dues Certificate</strong> within 30 days of final OTS payment. Keep your written sanction PDF, NEFT or app receipt, and NOC together in a safe folder so no third-party agency can ever raise an old claim later.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Check CIBIL after 45 to 60 days to confirm a ₹0 balance and <strong>Settled</strong> tag on your Home Credit trade line. If CIBIL still shows an active overdue figure, submit an online CIBIL dispute with your signed NOC attached. Read our <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-blue-600 hover:underline font-semibold">CIBIL rebuild guide</Link> to restore your credit score steadily over the next 12 to 24 months.
              </p>
            </section>

            <CompanySection />

            {/* FAQS */}
            <section id="faqs" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                Home Credit Loan Settlement: Common Questions
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
                Related NBFC &amp; Multi-Debt Settlement Guides.
              </p>
              <div className="flex flex-wrap gap-2">
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
                  href="/multiple-app-loans-settlement-total-above-3-lakh"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Multiple App Loans Above ₹3L.
                </Link>
                <Link
                  href="/settle-multiple-personal-loans"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Settle Multiple Personal Loans.
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
                Advises families on high-APR NBFC cash loans, RBI field visit laws, and ₹3L+ OTS plans.
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
                Carrying Home Credit Plus Cards &amp; Personal Loans Above ₹3L?
              </p>
              <p className="text-xs text-blue-100 leading-relaxed">
                Stop paying endless high-APR interest and settle your entire unsecured stack safely.
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
                <span>Home Credit OTS Safety.</span>
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Field visits legal strictly 8:00 AM to 7:00 PM.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Verify `@homecredit.co.in` sanction email first.</span>
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
