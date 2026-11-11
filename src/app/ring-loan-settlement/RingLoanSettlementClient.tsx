'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';
import CompanySection from '@/components/CompanySection';
import {
  BookOpen,
  ShieldCheck,
  AlertCircle,
  Smartphone,
  Phone,
  Lock,
  ArrowRight,
  ExternalLink,
  Check,
  ChevronDown,
  ChevronUp,
  Clock
} from 'lucide-react';

export default function RingLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('ring-3lakh-filter');
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
    { id: 'ring-3lakh-filter', label: '₹3L+ Combined Debt Filter' },
    { id: 'ring-sicreva-nbfc-structure', label: '1. RING & Si Creva NBFC Rules' },
    { id: 'qr-to-power-loan-trap', label: '2. QR Limit to Power Loan Trap' },
    { id: 'ring-npa-ots-eligibility', label: '3. 90-Day NPA & OTS Rules' },
    { id: 'ring-waiver-ranges', label: '4. Realistic Waiver Cuts' },
    { id: 'ring-5-step-closure', label: '5. How to Settle Step by Step' },
    { id: 'ring-sanction-verify', label: '6. Sanction Letter Checks' },
    { id: 'ring-rbi-2027-rights', label: '7. RBI 1 Jan 2027 Agent Rules' },
    { id: 'ring-multi-loan-plan', label: '8. RING + Cards & Apps (₹3L+)' },
    { id: 'ring-noc-cibil-steps', label: '9. NOC & CIBIL Next Steps' },
    { id: 'faqs', label: 'FAQs' }
  ];

  const faqs = [
    {
      q: 'Which NBFC owns my RING (PayWithRing) loan on CIBIL?',
      a: 'RING is operated by OnEMI Technology Solutions (the Kissht group). Most RING QR lines and RING Power Loans sit on the books of its group RBI-registered NBFC, Si Creva Capital Services Private Limited, or a co-lending NBFC named on your Key Fact Statement.'
    },
    {
      q: 'Can a RING Power Loan or QR bill be settled via One-Time Settlement?',
      a: 'Yes. Once an unpaid RING Power Loan crosses 90 days past due into NPA status and you show real hardship proof like job loss or medical bills, Si Creva Capital or your KFS lender can approve a written Full and Final OTS under RBI Circular RBI/2023-24/40.'
    },
    {
      q: 'Why did my small RING QR limit turn into a big overdue loan?',
      a: 'Users often scan RING QR codes for daily bills and then convert unpaid cycle dues into higher-fee EMI or Power Loans. Missing those EMIs adds bounce charges and late fees fast.'
    },
    {
      q: 'Should I hire a firm if I owe only Rs 18,000 on RING?',
      a: 'No. If your total debt is under Rs 3,00,000, clear the small RING bill directly in the app or email Si Creva Capital\'s Grievance Officer for a fee cut. CredSettle only takes cases where combined unsecured debt across RING, other apps, cards, and personal loans is Rs 3,00,000 or more.'
    },
    {
      q: 'What waiver range is real in a Si Creva / RING loan settlement?',
      a: 'No cut is fixed in advance. On aged unsecured NPAs past 90 to 180 days with hardship proof, dropping added late fees and penal charges often saves 30% to 55% off total claimed dues.'
    },
    {
      q: 'What RBI rules stop RING agent harassment from 1 January 2027?',
      a: 'Under RBI Digital Lending rules and the new RBI agent conduct norms taking effect on 1 January 2027, calls and visits are legal only from 8:00 AM to 7:00 PM. Agents must carry NBFC ID cards and cannot call family or bosses.'
    },
    {
      q: 'How do I check if a RING OTS letter is real?',
      a: 'Make sure the letter comes from the official domain of PayWithRing or Si Creva Capital Services Pvt Ltd, lists your exact loan ID, states Full and Final Settlement, and routes money to the official app or NBFC bank account.'
    },
    {
      q: 'When will Si Creva Capital update CIBIL after RING settlement?',
      a: 'After you pay 100% of the sanctioned OTS sum on time, Si Creva Capital issues a No Dues Certificate within 30 days and marks CIBIL as Settled with zero balance.'
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
            <Smartphone className="w-4 h-4 text-blue-200" />
            <span>RING App, Si Creva NBFC &amp; Multi-Debt Settlement Guide.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            RING (PayWithRing) App Loan &amp; Si Creva Settlement Guide
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Find out how Si Creva Capital Services handles unpaid RING QR and Power Loans, know your RBI 1 January 2027 rights, and close ₹3,00,000+ combined app and card debt safely.
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
          id="ring-3lakh-filter"
          className="scroll-target bg-white rounded-2xl border-2 border-blue-600 p-5 sm:p-6 shadow-md space-y-3"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-blue-900">
              <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>Who Needs Paid Settlement vs Free DIY Closure?</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold">
              CredSettle Minimum Case Floor: ₹3,00,000+ Combined Debt
            </span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Small Standalone RING Bill (Under ₹3,00,000 Total Debt):</strong> If you owe ₹8,000 to ₹60,000 only on RING with no other big loans, follow Section 5 below to email Si Creva Capital directly and save legal fees.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>₹3,00,000+ Multi-Loan Stack:</strong> If RING is one of several loan apps, credit cards, and personal loans pushing your total unpaid debt to <strong>₹3,00,000 or more</strong>, enter your combined total below.
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
              <li className="text-slate-800 font-semibold">RING App Loan Settlement</li>
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
            <section id="ring-sicreva-nbfc-structure" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                1. Who Owns Your RING Loan? Si Creva &amp; Co-Lenders
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers check their CIBIL report in shock when they see an unfamiliar loan from <strong>Si Creva Capital Services Private Limited</strong>. That entry is your RING (PayWithRing) or Kissht loan!
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                RING is a digital Lending Service Provider (LSP) run by OnEMI Technology Solutions. Your actual credit line or personal loan sits on the books of <strong>Si Creva Capital Services Pvt Ltd</strong> (an RBI-registered NBFC) or a co-lending NBFC such as Northern Arc, MAS Financial, or Poonawalla Fincorp listed on your Key Fact Statement (KFS).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To close your loan cleanly, your settlement letter and No Dues Certificate must carry the approval of Si Creva Capital or that exact KFS co-lender.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="qr-to-power-loan-trap" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                2. How Small RING QR Scans Snowball Into Power Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                RING starts out feeling harmless. You scan QR codes for groceries, fuel, or utility bills using a ₹10,000 to ₹30,000 short billing cycle. When month-end cash runs tight, the app prompts you to convert your bill or upgrade into a larger <strong>RING Power Loan</strong> up to ₹2,00,000+!
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once converted, upfront processing fees, high unsecured APR, e-NACH bounce charges, and late slabs turn a short cash gap into a stubborn multi-month debt burden.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="ring-npa-ots-eligibility" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                3. 90-Day NPA Rule &amp; When RING Approves OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In the first 30 to 60 days past due, RING call centres push for full overdue EMIs plus late fees. Once your loan stays unpaid past <strong>90 days</strong>, Si Creva Capital classifies the account as a <strong>Non-Performing Asset (NPA)</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                At the NPA stage, if you show clear proof of job loss, pay cuts, hospital bills, or shop closure, the NBFC reviews lump-sum One-Time Settlement (OTS) offers under <strong>RBI Circular RBI/2023-24/40 dated 8 June 2023</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Why does Si Creva accept a single lump sum after 90 days? Unsecured app bills carry no house or gold pledge. Once an account turns into an NPA, chasing small broken parts through call centres costs the lender time and money. A clean one-shot payout closes the file right away.
              </p>
            </section>

            {/* SECTION 4 */}
            <section id="ring-waiver-ranges" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                4. Realistic Waiver Cuts on RING &amp; Si Creva Claims
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-bold uppercase text-slate-500">90 to 120 Days NPA.</p>
                  <p className="text-lg font-extrabold text-slate-900 mt-1">25% to 40% Cut.</p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Past cut on total demand by dropping bounce fees and late slabs.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                  <p className="text-xs font-bold uppercase text-blue-700">120 to 180+ Days NPA.</p>
                  <p className="text-lg font-extrabold text-blue-900 mt-1">40% to 55% Cut.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Past savings on total claim when backed by verified hardship records.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <p className="text-xs font-bold uppercase text-emerald-700">Older Write-Off Pool.</p>
                  <p className="text-lg font-extrabold text-emerald-900 mt-1">50% to 60% Cut.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Past range on aged unsecured Power Loans settled in one quick sum.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic">
                Note: Figures above show past unsecured NBFC outcomes on total claimed bills, never fixed lender promises.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="ring-5-step-closure" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                5. Five Steps to Settle a RING Loan Safely
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Check Your CIBIL Trade Line:</strong> Confirm whether Si Creva Capital Services Pvt Ltd or another co-lending NBFC holds your RING loan ID.
                </li>
                <li>
                  <strong>Stop Partial Penalty Payments:</strong> Do not send ₹2,000 or ₹3,000 without a written OTS letter, or it will vanish into late charges.
                </li>
                <li>
                  <strong>Send Hardship Proof by Email:</strong> Share job-loss slips, bank statements, or medical bills with official RING care and Si Creva&apos;s Grievance Officer.
                </li>
                <li>
                  <strong>Get a Written OTS PDF First:</strong> Wait for a formal sanction email stating your exact settlement sum and due date.
                </li>
                <li>
                  <strong>Pay Inside the App or Official Bank Account:</strong> Save your payment UTR screenshot right away.
                </li>
              </ol>
            </section>

            {/* SECTION 6 */}
            <section id="ring-sanction-verify" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                6. How to Check Your RING Sanction Letter Before Paying
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-2.5">
                <p className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>RING / Si Creva Sanction Check List:</span>
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-amber-950">
                  <li>Sent from the official corporate email domain of PayWithRing or Si Creva Capital Services Pvt Ltd.</li>
                  <li>Lists your exact RING loan account number and full PAN name.</li>
                  <li>States <strong>Full and Final Settlement</strong> with zero remaining dues after payment.</li>
                  <li>Directs payment strictly through the verified RING app closure button or official NBFC bank account.</li>
                  <li>Read our full <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-blue-700 underline font-semibold">OTS letter check guide</Link>.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="ring-rbi-2027-rights" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                7. Your Rights &amp; RBI 1 January 2027 Agent Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                RING and Si Creva Capital recovery agents must obey RBI Digital Lending Directions and the updated RBI agent conduct rules taking effect on <strong>1 January 2027</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>Calls and field visits are legal strictly from <strong>8:00 AM to 7:00 PM</strong>.</li>
                <li>Agents cannot call your phonebook contacts, relatives, neighbours, or office HR.</li>
                <li>Any visiting agent must show an agency photo ID and Si Creva authorization letter.</li>
                <li>Unresolved harassment complaints past 30 days can be filed on `cms.rbi.org.in`. See how to <Link href="/how-to-stop-recovery-agent-harassment" className="text-blue-600 hover:underline font-semibold">stop recovery agent harassment</Link>.</li>
              </ul>
            </section>

            {/* SECTION 8 */}
            <section id="ring-multi-loan-plan" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                8. Settling RING Alongside Cards &amp; Other Apps (₹3L+)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers using RING Power Loans often also owe KreditBee, MoneyTap, CASHe, three credit cards, and a bank personal loan totaling <strong>₹3,00,000 to ₹12,00,000+</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Never borrow from a new instant app just to clear an old RING bill. That habit doubles your processing fees and traps your monthly salary within weeks. Put food, rent, school fees, and basic family needs first.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CredSettle brings all your unsecured accounts into one calm plan so you save monthly at your own pace, close noisy NBFC app tickets first, and settle your bigger cards and bank loans step by step. Read our <Link href="/multiple-app-loans-settlement-total-above-3-lakh" className="text-blue-600 hover:underline font-semibold">multiple app loans above ₹3 Lakh guide</Link>.
              </p>
            </section>

            {/* SECTION 9 */}
            <section id="ring-noc-cibil-steps" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                9. Si Creva No Dues Certificate &amp; CIBIL Score Steps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Collect your signed <strong>No Dues Certificate</strong> within 30 days of paying your agreed OTS sum. Save both the sanction PDF and your bank UTR receipt in two safe folders.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Check CIBIL after 45 to 60 days to confirm that the Si Creva Capital entry shows ₹0 due with a <strong>Settled</strong> tag. If an old overdue figure still shows up, raise an online CIBIL dispute with your NOC PDF attached. Read our <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-blue-600 hover:underline font-semibold">CIBIL rebuild guide</Link> to grow your score over the next 12 to 24 months.
              </p>
            </section>

            <CompanySection />

            {/* FAQS */}
            <section id="faqs" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                RING App Loan Settlement: Common Questions
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
                  href="/cashe-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  CASHe Loan Settlement.
                </Link>
                <Link
                  href="/moneytap-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  MoneyTap Loan Settlement.
                </Link>
                <Link
                  href="/multiple-app-loans-settlement-total-above-3-lakh"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Multiple App Loans Above ₹3L.
                </Link>
                <Link
                  href="/negotiate-multiple-loans-together"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Negotiate Multiple Loans Together.
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
                Reviews Si Creva NBFC rules, RBI Digital Lending laws, and multi-creditor OTS plans.
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
                Juggling RING, Other Loan Apps &amp; Credit Cards Above ₹3L?
              </p>
              <p className="text-xs text-blue-100 leading-relaxed">
                Stop rolling QR bills into fresh loans. Settle all your unsecured debts in one clear plan.
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
                <span>RING Closure Safety.</span>
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Verify Si Creva Capital or KFS lender name.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Pay only via RING app or NBFC bank account.</span>
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
