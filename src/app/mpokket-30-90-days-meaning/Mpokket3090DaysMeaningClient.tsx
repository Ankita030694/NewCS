'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';
import CompanySection from '@/components/CompanySection';
import {
  BookOpen,
  ShieldCheck,
  AlertCircle,
  Calendar,
  Phone,
  Lock,
  ArrowRight,
  ExternalLink,
  Check,
  ChevronDown,
  ChevronUp,
  Clock
} from 'lucide-react';

export default function Mpokket3090DaysMeaningClient() {
  const [activeId, setActiveId] = useState<string>('mpokket-self-filter');
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
    { id: 'mpokket-self-filter', label: 'Small Ticket vs ₹3L+ Filter' },
    { id: 'two-meanings-30-90-days', label: '1. Two Meanings of 30-90 Days' },
    { id: 'sma-to-npa-buckets', label: '2. 30, 60 & 90 DPD CIBIL Rules' },
    { id: 'multi-ticket-trap', label: '3. Why 10 Tiny Tickets Hurt More' },
    { id: 'late-fees-vs-principal', label: '4. Late Fee Cap & RBI Rules' },
    { id: 'self-help-under-3lakh', label: '5. Free DIY Steps Under ₹3L' },
    { id: 'rbi-2027-privacy-shield', label: '6. RBI 1 Jan 2027 Privacy Rules' },
    { id: 'multi-app-3lakh-settlement', label: '7. Settling ₹3L+ Multi-App Stacks' },
    { id: 'noc-cibil-cleanup', label: '8. Consolidated NOC & CIBIL' },
    { id: 'sanction-check-mpokket', label: '9. How to Check Your OTS Letter' },
    { id: 'faqs', label: 'FAQs' }
  ];

  const faqs = [
    {
      q: 'What does 30 to 90 days mean in the mPokket app?',
      a: 'In mPokket, "30 to 90 days" shows up in two ways: first, as short single-bullet or EMI repayment tenures (30, 60, or 90 days) when taking a small loan; and second, as Days Past Due (DPD) buckets (1-30 DPD SMA-0, 31-60 DPD SMA-1, 61-90 DPD SMA-2, and 90+ DPD NPA) if you miss your due date.'
    },
    {
      q: 'Is mPokket an RBI-registered NBFC?',
      a: 'Yes. mPokket operates through mPokket Financial Services Private Limited, an RBI-registered NBFC headquartered in Kolkata. Every missed payment is reported directly to CIBIL, Experian, Equifax, and CRIF High Mark.'
    },
    {
      q: 'What happens when an mPokket loan crosses 90 days overdue?',
      a: 'At 90+ Days Past Due (DPD), mPokket Financial Services classifies your loan as a Non-Performing Asset (NPA). Your credit score drops sharply, and the account moves to NPA recovery or One-Time Settlement review.'
    },
    {
      q: 'Why do 10 small mPokket tickets hurt CIBIL worse than 1 loan?',
      a: 'mPokket lets users take many small Rs 1,000 to Rs 5,000 tickets at once. Each ticket can appear as a separate active trade line on CIBIL, so defaulting on 12 small tickets logs 12 simultaneous defaults on your credit report.'
    },
    {
      q: 'Should a student owing Rs 12,000 on mPokket hire a settlement agency?',
      a: 'No! For small balances under Rs 3,00,000, hiring a paid agency costs more than clearing the tickets directly in the app or requesting a late-fee waiver by email from mPokket support. CredSettle strictly assists salaried borrowers holding Rs 3,00,000+ in combined unsecured debt across multiple apps, credit cards, and personal loans.'
    },
    {
      q: 'Can mPokket recovery agents call my college or parents?',
      a: 'No. Under RBI Digital Lending Directions and RBI\'s updated recovery conduct norms effective 1 January 2027, agents can contact only you between 8:00 AM and 7:00 PM and are barred from calling parents, professors, friends, or employers.'
    },
    {
      q: 'Can multiple mPokket tickets be merged into one settlement?',
      a: 'Yes. Once your open mPokket tickets cross 90+ DPD into NPA status, you can request a consolidated account statement and negotiate one single Full and Final Settlement letter covering every active loan ID under your profile.'
    },
    {
      q: 'How long after clearing mPokket dues do I get an NOC?',
      a: 'mPokket Financial Services issues loan closure confirmations inside the app and sends a formal No Dues Certificate within 30 days of full payment or sanctioned OTS payment.'
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
            <Calendar className="w-4 h-4 text-blue-200" />
            <span>mPokket DPD Buckets, CIBIL Rules &amp; Multi-App Debt Guide.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            mPokket 30, 60 &amp; 90 Days Overdue Meaning &amp; CIBIL Impact
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Confused by 30, 60, and 90-day labels on mPokket? See how short-tenure bullet loans turn into SMA-1, SMA-2, and 90-day NPA marks on CIBIL, plus how to escape a ₹3,00,000+ multi-app debt trap.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#lead-funnel"
              className="bg-white text-blue-950 px-7 py-3.5 rounded-full font-bold text-base hover:bg-blue-50 transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              <span>Check ₹3L+ Multi-App Settlement</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#self-help-under-3lakh"
              className="bg-blue-900/60 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-blue-900 transition-all inline-flex items-center justify-center"
            >
              Under ₹3L? Read Free DIY Steps
            </a>
          </div>
        </div>
      </section>

      {/* CLEAR SELF-FILTER CALLOUT */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div
          id="mpokket-self-filter"
          className="scroll-target bg-white rounded-2xl border-2 border-blue-600 p-5 sm:p-6 shadow-md space-y-3"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-blue-900">
              <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>Read This First: Small Student Balance vs ₹3,00,000+ Multi-Debt</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              CredSettle Minimum Case Size: ₹3,00,000+ Combined Debt
            </span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Owe ₹5,000 to ₹50,000 Only on mPokket?</strong> Do <strong>not</strong> pay any settlement company! Jump to Section 5 below for free DIY steps to close small tickets directly with mPokket support and protect your early-career CIBIL score.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Trapped in ₹3,00,000+ Across Multiple Apps, Cards &amp; Loans?</strong> Many salaried earners carry mPokket alongside 5 to 8 other instant apps, maxed credit cards, and personal loans above <strong>₹3,00,000</strong>. Enter your combined debt total below for structured multi-lender settlement.
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
              <li className="text-slate-800 font-semibold">mPokket 30 to 90 Days Meaning</li>
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
            <section id="two-meanings-30-90-days" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                1. The Two Meanings of 30, 60 &amp; 90 Days on mPokket
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers searching for <strong>mPokket 30 to 90 days meaning</strong> are usually looking at one of two screens inside the app or on their CIBIL report:
              </p>
              <ul className="list-disc pl-6 space-y-2.5 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Meaning A (Short Repayment Tenure):</strong> Unlike bank loans that run for 36 months, small mPokket tickets issued by <strong>mPokket Financial Services Private Limited</strong> (an RBI-registered NBFC) often give short 30-day, 60-day, or 90-day repayment schedules. A 30-day bullet loan demands 100% of principal plus interest in one month.
                </li>
                <li>
                  <strong>Meaning B (Overdue DPD Buckets):</strong> Once you miss your due date, RBI credit reporting tracks your delay in 30-day blocks called <strong>Days Past Due (DPD)</strong>: 1 to 30 days, 31 to 60 days, 61 to 90 days, and 90+ days.
                </li>
              </ul>
            </section>

            {/* SECTION 2 */}
            <section id="sma-to-npa-buckets" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                2. What Happens at 30, 60 &amp; 90 Days Overdue (SMA to NPA)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Because mPokket is a licensed NBFC, every overdue bucket follows strict RBI classification rules:
              </p>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 border-r border-slate-700 font-bold">Overdue Stage.</th>
                      <th className="p-3.5 border-r border-slate-700 font-bold">RBI Tag.</th>
                      <th className="p-3.5 font-bold">Real Impact on You.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">1 to 30 Days.</td>
                      <td className="p-3.5 border-r border-slate-200">SMA-0.</td>
                      <td className="p-3.5">Credit limit frozen, overdue fee added, daily app reminders and call-centre calls.</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">31 to 60 Days.</td>
                      <td className="p-3.5 border-r border-slate-200">SMA-1.</td>
                      <td className="p-3.5">30+ DPD mark hits CIBIL, pulling your score down 40 to 70 points.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">61 to 90 Days.</td>
                      <td className="p-3.5 border-r border-slate-200">SMA-2.</td>
                      <td className="p-3.5">Formal legal demand notices by email/SMS and agency escalation before NPA cutoff.</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">90+ Days Overdue.</td>
                      <td className="p-3.5 border-r border-slate-200 font-bold text-red-700">NPA.</td>
                      <td className="p-3.5">Account turns Non-Performing Asset. Eligible for hardship One-Time Settlement review.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="multi-ticket-trap" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                3. Why 10 Tiny mPokket Tickets Hurt CIBIL Worse Than 1 Loan
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Here is a hidden danger most young borrowers discover too late. Instead of giving one ₹25,000 loan, mPokket often lets users draw ten separate ₹2,000 and ₹3,000 pockets on different dates!
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On your CIBIL report, each pocket is logged as an individual short-term personal loan. If you lose your job and miss one month, your CIBIL report suddenly shows <strong>10 separate overdue loans at the same time</strong>, blocking future bank cards or home loans until every single ticket ID is closed.
              </p>
            </section>

            {/* SECTION 4 */}
            <section id="late-fees-vs-principal" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                4. Overdue Charges &amp; RBI Penal Charge Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Short 30-to-90-day app loans carry steep upfront fees and late slabs. Under RBI rules on penal charges, NBFCs cannot charge interest on top of late fees. Every rupee of fee must match your Key Fact Statement (KFS).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Always download your KFS and loan schedule inside the mPokket app. Compare the base cash you got on Day 1 against the late charges added after Day 30 and Day 60. Having those exact numbers in hand helps you spot extra fees fast. It also gives you solid proof when you ask mPokket support or the NBFC Nodal Officer to waive late charges so you can clear the real principal cleanly.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="self-help-under-3lakh" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                5. Free DIY Steps If Your Total Debt Is Under ₹3,00,000
              </h2>
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-2.5">
                <p className="text-sm font-bold text-emerald-950 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>Honest Advice for Students &amp; Small-Balance Borrowers:</span>
                </p>
                <ol className="list-decimal pl-6 space-y-1.5 text-xs sm:text-sm text-slate-800">
                  <li>Never borrow from a 7-day rogue app to pay an mPokket ticket.</li>
                  <li>Pay off your smallest ₹1,000 to ₹2,000 tickets inside the official mPokket app first to shrink the count of open CIBIL trade lines.</li>
                  <li>If tickets have crossed 90 days due to illness or job loss, email mPokket customer care and Grievance Officer directly asking for a penalty waiver to pay principal and close all loan IDs together.</li>
                </ol>
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="rbi-2027-privacy-shield" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                6. RBI 1 January 2027 Recovery &amp; Privacy Protections
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                mPokket Financial Services and its collection tele-callers are strictly bound by RBI Digital Lending Guidelines and the updated RBI recovery agent directions effective <strong>1 January 2027</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>Calls are permitted strictly between <strong>8:00 AM and 7:00 PM</strong>.</li>
                <li>Accessing phone contact lists or calling parents, classmates, or employers is illegal.</li>
                <li>Abusive threats can be escalated to mPokket&apos;s Nodal Officer and after 30 days to `cms.rbi.org.in`. Read how to <Link href="/how-to-stop-recovery-agent-harassment" className="text-blue-600 hover:underline font-semibold">stop recovery agent harassment</Link>.</li>
              </ul>
            </section>

            {/* SECTION 7 */}
            <section id="multi-app-3lakh-settlement" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                7. Settling mPokket Inside a ₹3,00,000+ Multi-Loan Stack
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many salaried professionals who started with mPokket in college now carry ₹30,000 on mPokket alongside KreditBee, MoneyTap, CASHe, three maxed-out credit cards, and a bank personal loan totaling <strong>₹3,00,000 to ₹12,00,000+</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In a ₹3L+ multi-lender file, CredSettle helps bundle all open mPokket ticket IDs into one consolidated NBFC settlement letter while negotiating your bigger credit card and personal loan waivers in parallel. See how we <Link href="/negotiate-multiple-loans-together" className="text-blue-600 hover:underline font-semibold">negotiate multiple loans together</Link>.
              </p>
            </section>

            {/* SECTION 8 */}
            <section id="noc-cibil-cleanup" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                8. Consolidated No Dues Certificate &amp; CIBIL Check
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When closing multiple mPokket tickets under an OTS or fee-cut offer, make sure the written email lists <strong>every single loan ID</strong>. Pay only inside the mPokket app or verified NBFC bank account. Get your No Dues Certificate within 30 days and check CIBIL after 45 to 60 days so not even one ₹500 ticket stays open. Read our <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-blue-600 hover:underline font-semibold">CIBIL score rebuild guide</Link>.
              </p>
            </section>

            {/* SECTION 9 */}
            <section id="sanction-check-mpokket" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                9. How to Check an mPokket Settlement Letter Before Paying
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Phone callers often promise a quick discount if you send money on UPI within one hour. Never pay without checking five simple points on your written letter first:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Official Sender Domain:</strong> The email must come from the official mPokket domain, never a free Gmail or personal chat number.
                </li>
                <li>
                  <strong>Full List of Ticket IDs:</strong> Check that all 5, 10, or 15 open mPokket loan IDs under your account are typed clearly on the page.
                </li>
                <li>
                  <strong>Full and Final Words:</strong> Make sure the letter states that paying the agreed sum closes all listed loans in full with zero balance left.
                </li>
                <li>
                  <strong>Clear Pay Date:</strong> Note the exact cutoff date so your offer does not lapse.
                </li>
                <li>
                  <strong>Safe Payment Mode:</strong> Pay inside the official mPokket app or directly to the mPokket Financial Services bank account. Never send cash or personal UPI to an agent. Also see our <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-blue-600 hover:underline font-semibold">OTS letter check guide</Link>.
                </li>
              </ul>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Keeping every receipt, email, and closure letter safe makes sure no third-party agency can call you months later about a closed ticket. Store PDF copies on both your phone and cloud drive so you can share them with any bank credit officer if an old CIBIL entry ever needs a fast manual update.
              </p>
            </section>

            <CompanySection />

            {/* FAQS */}
            <section id="faqs" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                mPokket 30 to 90 Days Overdue: Common Questions
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
                Related App &amp; Multi-Debt Guides.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/moneytap-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  MoneyTap Loan Settlement.
                </Link>
                <Link
                  href="/rupee112-repayment-and-settlement"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Rupee112 Repayment &amp; Settlement.
                </Link>
                <Link
                  href="/negotiate-multiple-loans-together"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Settle Multiple Loans Together.
                </Link>
                <Link
                  href="/get-noc-after-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Get NOC After Settlement.
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
                Explains RBI SMA/NPA rules, multi-ticket CIBIL reporting, and multi-creditor debt relief.
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
                <span>₹3,00,000+ Combined Debt Only.</span>
              </div>
              <p className="text-lg font-bold leading-snug">
                Carrying mPokket Plus Multiple Apps &amp; Cards Above ₹3L?
              </p>
              <p className="text-xs text-blue-100 leading-relaxed">
                Consolidate all your unsecured settlements into one calm, legal monthly plan.
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
                <span>DPD Quick Guide.</span>
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>1-30 DPD = SMA-0 (early late fee stage).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>31-90 DPD = SMA-1 / SMA-2 CIBIL hit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>90+ DPD = NPA (eligible for OTS review).</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
