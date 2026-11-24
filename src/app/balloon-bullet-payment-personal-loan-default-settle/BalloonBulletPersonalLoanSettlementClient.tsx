'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import {
  ChevronDown,
  Scale,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  HelpCircle,
  TrendingUp,
  BookOpen,
  Building2,
  DollarSign,
  Check,
  Lock,
  Phone,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  Calendar
} from 'lucide-react';

export default function BalloonBulletPersonalLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('quick-crux');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

    const headings = document.querySelectorAll('section[id], div[id].scroll-target');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const navLinks = [
    { id: 'quick-crux', label: 'Executive Brief & Legal Crux' },
    { id: 'how-balloon-bullet-work', label: '1. Balloon & Bullet Loan Basics' },
    { id: 'rbi-regulatory-rules', label: '2. RBI KFS, Penalty & OTS Rules' },
    { id: 'financial-breakdown', label: '3. EMI vs Balloon Cost Math' },
    { id: 'default-legal-risks', label: '4. NACH Bounce & Rollover Risks' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Settlement SOP' },
    { id: 'borrower-rights', label: '7. KFS & Section 138 Defenses' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Maturity to Final NOC Timeline' },
    { id: 'specialized-scenarios', label: '10. Flexi, App & ARC Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'RBI Citations & Legal Authorities' }
  ];

  const faqs = [
    {
      q: 'What is the difference between a balloon and a bullet personal loan?',
      a: 'In a bullet loan, you pay only interest or zero EMIs each month. You then repay the full loan sum at the end. In a balloon loan, you pay small EMIs each month and a big lump sum at the end.'
    },
    {
      q: 'Can I settle a balloon or bullet personal loan under RBI rules?',
      a: 'Yes. RBI Circular RBI/2023-24/40 dated June 8, 2023 lets banks and NBFCs settle bad personal loans. If you face real hardship after default, you can ask for a One-Time Settlement (OTS) at a lower sum.'
    },
    {
      q: 'When does a missed bullet personal loan turn into an NPA?',
      a: 'Under RBI IRAC rules, the overdue clock starts on the final due date. Your loan enters SMA-0 on day 1, SMA-1 on day 31, and SMA-2 on day 61. After 90 days unpaid, it turns into an NPA.'
    },
    {
      q: 'Can a bank add compound penal interest on an unpaid bullet loan?',
      a: 'No. RBI Circular RBI/2023-24/53 dated August 18, 2023 bans penal interest. Lenders cannot add late fees onto your loan principal or compound them. They can only charge fair flat late fees.'
    },
    {
      q: 'What if the NBFC or sales agent hid the final balloon sum from me?',
      a: 'Under RBI Circular RBI/2024-25/18, lenders must give you a Key Facts Statement (KFS) before you sign. This sheet must show your full payment plan and final lump sum. If it was missing, complain to the RBI Ombudsman.'
    },
    {
      q: 'Should I take a rollover loan to pay my final bullet amount?',
      a: 'No. A rollover loan hides your debt stress and adds fresh fees and high rates. RBI rules also stop banks from rolling over bad loans to hide default. Ask for monthly EMIs or a fair OTS instead.'
    },
    {
      q: 'What happens if my NACH debit bounces for the full balloon sum?',
      a: 'A bounced auto-debit can bring a notice under Section 25 of the PSSA Act and Section 138 of the NI Act. These cases can be settled by law. Send a legal reply and close the case once you settle.'
    },
    {
      q: 'Can I ask the bank to split my final bullet sum into monthly EMIs?',
      a: 'Yes. Write to your bank 30 days before your final due date. Ask them to split the lump sum into 12 to 48 standard EMIs. Many NBFCs approve this if you show steady monthly income.'
    },
    {
      q: 'How much waiver can I get in a bullet personal loan settlement?',
      a: 'Personal loans have no collateral. After 90 to 180 days of default, lenders often waive late fees and much of the unpaid interest. With real hardship proof, OTS deals often close at 35% to 55% of total dues.'
    },
    {
      q: 'How does CredSettle help settle heavy balloon and bullet personal loans?',
      a: 'CredSettle checks your KFS and ledger for wrong penal charges. Our team stops rude agent calls and replies to Section 138 notices. We also secure a written OTS letter, your No Dues letter, and CIBIL update.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold mb-3">
            <Landmark className="w-3.5 h-3.5" />
            <span>RBI OTS Framework, KFS Rules &amp; Personal Loan Relief</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How to Settle Unaffordable Final Bullet Personal Loans
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Cannot pay a big final balloon or bullet personal loan? Learn your RBI rights against hidden KFS terms. Stop wrong late penalties, handle NACH notices, and close your debt safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Free Bullet Loan Settlement Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP COMPONENT */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT */}
      <div className="w-full max-w-[1720px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">

          {/* ================= LEFT COLUMN: STICKY TOC ================= */}
          <aside className="sticky top-6 hidden lg:block">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 overflow-hidden">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Table of Contents
                </span>
              </div>
              <nav className="space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto pr-1 text-xs">
                {navLinks.map((link) => {
                  const isActive = activeId === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${
                        isActive
                          ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>RBI Borrower Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Backed by RBI Circulars RBI/2023-24/40, RBI/2023-24/53, and the 2024 KFS Mandate.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">

            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: BALLOON &amp; BULLET LOAN SETTLEMENT RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Legal OTS Exit Works:</strong> Under RBI Circular RBI/2023-24/40, banks and NBFCs can settle bad bullet personal loans for a lower lump sum.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Compound Late Fees:</strong> RBI Circular RBI/2023-24/53 bans penal interest on missed bullet dues. Lenders can only charge flat late fees.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">KFS Must Show Final Sum:</strong> Under the 2024 RBI KFS rule, lenders must list the final lump sum and APR upfront. You can dispute hidden clauses.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Skip Risky Rollovers:</strong> Taking a new loan to clear an old bullet balance traps you deeper in debt. RBI rules also curb fake rollovers.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Handle NACH Bounce Right:</strong> A bounced debit can bring a Section 25 PSSA or Section 138 notice. Both cases close once you settle.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: How Balloon & Bullet Personal Loans Work in India */}
            <section id="how-balloon-bullet-work" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Loan Structure &amp; Payment Shock</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. How Balloon &amp; Bullet Personal Loans Work in India
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most personal loans in India use normal monthly EMIs. Each EMI cuts both your interest and your loan balance. By the last month, you owe zero.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Balloon and bullet loans work very differently. Lenders sell them with very low monthly bills at first. However, they push a huge lump-sum payment to the end of the term.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In a <strong>bullet loan</strong>, you pay only monthly interest, or nothing at all, for months. On the last day, you must pay 100% of the loan principal at once.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In a <strong>balloon loan</strong>, your EMIs stay small because they only clear part of the debt. At the end, 30% to 70% of the principal falls due in one single bill.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers pick flexi NBFC loans or short app loans expecting a future bonus or pay hike. When a job loss, medical bill, or sales dip hits, paying ₹3 Lakh to ₹15 Lakh in one day becomes impossible.
              </p>
            </section>

            {/* SECTION 2: RBI Rules: KFS, Penal Charges & NPA Guidelines */}
            <section id="rbi-regulatory-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Protections for Borrowers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI Rules: KFS, Penal Charges &amp; NPA Guidelines
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India (RBI) sets clear rules for banks and NBFCs. Even if you miss a final bullet due date, four key RBI circulars protect you from unfair debt jumps.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, the <strong>RBI Key Facts Statement (KFS) Circular</strong> (RBI/2024-25/18, dated April 15, 2024) covers all retail loans. Lenders must give you a plain summary sheet before you sign. It must show your true Annual Percentage Rate (APR), full payment plan, and exact final lump sum.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, the <strong>RBI Penal Charges Circular</strong> (RBI/2023-24/53, effective April 1, 2024) bans penal interest. If you miss a balloon bill, the bank cannot hike your loan rate. They cannot add late fees onto your principal either. Only fair, flat penal charges are allowed.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, under <strong>RBI IRAC Norms</strong>, your loan turns overdue the day after you miss the final payout. It moves through SMA-0 (days 1 to 30), SMA-1 (days 31 to 60), and SMA-2 (days 61 to 90). On day 91, the account turns into a Non-Performing Asset (NPA).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Fourth, the <strong>RBI Framework for Compromise Settlements</strong> (RBI/2023-24/40, dated June 8, 2023) allows legal settlements. Once your bad loan hits NPA status, the lender can offer a One-Time Settlement (OTS). This lets you close the debt for less if you show real hardship.
              </p>
            </section>

            {/* SECTION 3: Financial Math: Regular EMI vs Balloon Loan Cost */}
            <section id="financial-breakdown" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Interest Burden &amp; Final Payment Shock</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Financial Math: Regular EMI vs Balloon Loan Cost
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many people choose a balloon or bullet loan because the monthly bill looks cheap. Yet your loan balance barely falls each month. As a result, you pay interest on the full sum for years.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Look at a <strong>₹5,00,000 personal loan</strong> at <strong>16% yearly interest</strong>. The table below shows how much extra interest and final shock each plan creates.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">₹5,00,000 Personal Loan Comparison @ 16% p.a.</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">36-Month vs 12-Month Maturity</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Repayment Plan</th>
                        <th className="p-3">Monthly Outflow</th>
                        <th className="p-3">Final Lump Sum</th>
                        <th className="p-3">Total Interest</th>
                        <th className="p-3 text-right">Total Paid</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Standard Monthly EMI (36m)</td>
                        <td className="p-3 font-mono">₹17,579 / mo</td>
                        <td className="p-3 font-mono text-emerald-700 font-bold">₹17,579</td>
                        <td className="p-3 font-mono">₹1,32,827</td>
                        <td className="p-3 text-right font-bold font-mono text-emerald-700">₹6,32,827</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">40% Balloon Hybrid Loan (36m)</td>
                        <td className="p-3 font-mono">₹13,214 / mo</td>
                        <td className="p-3 font-mono text-amber-700 font-bold">₹2,13,214</td>
                        <td className="p-3 font-mono">₹1,75,696</td>
                        <td className="p-3 text-right font-bold font-mono text-amber-700">₹6,75,696</td>
                      </tr>
                      <tr className="bg-amber-50/50">
                        <td className="p-3 font-bold text-slate-900">Interest-Only Bullet Loan (36m)</td>
                        <td className="p-3 font-mono">₹6,667 / mo</td>
                        <td className="p-3 font-mono text-rose-700 font-bold">₹5,06,667</td>
                        <td className="p-3 font-mono font-bold text-rose-700">₹2,40,000</td>
                        <td className="p-3 text-right font-bold font-mono text-rose-700">₹7,40,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Zero-EMI Pure Bullet (12m @ 18%)</td>
                        <td className="p-3 font-mono">₹0 / mo</td>
                        <td className="p-3 font-mono text-rose-700 font-bold">₹5,90,000</td>
                        <td className="p-3 font-mono">₹90,000</td>
                        <td className="p-3 text-right font-bold font-mono text-rose-800">₹5,90,000</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">NPA One-Time Settlement (Sample)</td>
                        <td className="p-3 font-mono text-[#1886ff]">Hardship Pause</td>
                        <td className="p-3 font-mono text-[#1886ff]">₹2.0L to ₹2.75L OTS</td>
                        <td className="p-3 text-[#1886ff]">Fees &amp; Interest Cut</td>
                        <td className="p-3 text-right text-[#1886ff] font-mono">45% to 60% Relief</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Look at the third row above. An interest-only bullet loan costs <strong>₹1,07,173 more in interest</strong> than a normal EMI loan. Worse, after paying ₹2.40 Lakh over three years, you still owe the full <strong>₹5,00,000 principal</strong> on the last day.
              </p>
            </section>

            {/* SECTION 4: Default Risks: NACH Bounce, Rollovers & NPA Shock */}
            <section id="default-legal-risks" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>High-Risk Traps Upon Maturity Default</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Default Risks: NACH Bounce, Rollovers &amp; NPA Shock
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Missing a bullet loan brings faster pressure than missing one regular EMI. Because the full loan falls due on one day, three big traps hit borrowers right away.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>First, high-value NACH or cheque bounces:</strong> Lenders often run one auto-debit or cheque for the full balloon sum. When a ₹5 Lakh debit fails, they send a legal notice. This falls under <strong>Section 25 of the PSSA Act, 2007</strong> or <strong>Section 138 of the NI Act, 1881</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Second, the rollover debt trap:</strong> Some NBFC staff push you to take a new top-up loan to pay off the old bullet sum. Do not fall for this trap. RBI rules ban lenders from rolling over bad loans just to hide defaults (called evergreening). A rollover adds new fees, GST, and steep rates.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Third, cross-default at the same bank:</strong> Under RBI IRAC rules, NPA status applies to the borrower across all accounts in one bank. Missing one large bullet loan for 90 days can block your credit cards or credit lines at that same bank.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Bullet Loan Settlement Framework
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart sums up your core RBI rights when facing a heavy balloon or bullet loan bill. Use it to remember KFS checks, flat late fee rules, and legal OTS relief.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/balloon-bullet-payment-personal-loan-default-settle.jpg"
                    alt="Balloon and Bullet Repayment Personal Loan Settlement Visual Blueprint"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Bullet Personal Loan Resolution Guide &bull; RBI Circular Compliant</span>
                  <a
                    href="/images/infographics/balloon-bullet-payment-personal-loan-default-settle.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View High-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP: Settling a Bullet Personal Loan */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Settling a Bullet Personal Loan
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Cannot arrange your final balloon or bullet lump sum? Act early and follow these six clear steps to protect your rights and close the loan safely.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Check Your Key Facts Statement and Ledger
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your loan contract, KFS, and full Statement of Account (SOA). Separate the true loan principal from past interest, bounce fees, and wrong compound penalties.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Ask for EMI Conversion Before Due Date
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Do you have steady pay and want to protect your CIBIL score? Write to your bank 30 days before maturity. Ask to split the lump sum into 24 to 48 normal EMIs.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Collect Real Financial Hardship Proof
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you cannot pay even normal EMIs, gather clear hardship proof. Keep your job loss letter, pay cut email, medical bills, or tax papers showing lower income.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Start Written OTS Talks After NPA Stage
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Banks rarely give big waivers before 90 days of default. Once your account hits NPA status, email a formal OTS offer. Base your offer on what you can truly pay.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Verify the Official OTS Sanction Letter
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never pay cash to an agent or trust phone promises. Check that the OTS letter comes from an official bank email. It must show your loan number and confirm withdrawal of all cases.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Get Your NDC and Track CIBIL Update
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pay the agreed sum straight into your loan account via NEFT, RTGS, or the bank app. Collect your signed No Dues Certificate (NDC). Check your CIBIL update within 15 days under RBI rules.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Legal Defenses: KFS Breaches & Section 138 Relief */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Shields &amp; Legal Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Legal Defenses: KFS Breaches &amp; Section 138 Relief
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Missing a personal loan payment is a civil dispute, not a police crime. Indian law gives you four strong shields against hidden clauses, wrong penalties, and rude agents.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Mis-Selling &amp; KFS Omission Defense</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI KFS rules and Sections 17 and 18 of the Indian Contract Act, hiding a balloon term is illegal. You can demand fair EMI terms or waiver of surprise fees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 138 / PSSA Section 25 Relief</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a bullet NACH debit fails, you get 15 days to reply to the notice. Under Section 147 of the NI Act, these cases can be closed once you settle or resolve in Lok Adalat.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Penal Interest Reversal Claim</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI Circular RBI/2023-24/53 stops lenders from compounding late fees. Calling out wrong penal charges often cuts 20% to 35% off an inflated bill before OTS talks start.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Anti-Harassment &amp; Privacy Shield</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI rules ban agent calls before 8 AM or after 7 PM. Agents cannot shame you or call your family. Threats or abuse are crimes under Sections 351 and 356 of BNS 2023.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Dispute Resolution Ladder</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Did your bank refuse to cut wrong penalties or hide your KFS? If agents harass you, file a complaint using this three-tier RBI ladder.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Response Window</th>
                      <th className="p-3">Action &amp; Borrower Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank or NBFC Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 14 Days</td>
                      <td className="p-3">Logs your hardship note, checks KFS terms, and reviews wrong bounce fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">15 to 30 Days</td>
                      <td className="p-3">Approves EMI split or OTS deals, stops rude agents, and fixes ledger errors.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI Integrated Ombudsman (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">After 30 Days</td>
                      <td className="p-3">Passes binding orders for KFS gaps, wrong compounding, abuse, or CIBIL delays.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Default Timeline: Maturity Date to Final NOC */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Chronological Resolution Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Default Timeline: Maturity Date to Final NOC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing each step after a missed bullet due date helps you stay calm. You can avoid panic loans and send your OTS offer at the best time.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Time Window</th>
                      <th className="p-3">RBI Loan Status</th>
                      <th className="p-3">Typical Lender Step</th>
                      <th className="p-3">Smart Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">30 Days Pre-Due</td>
                      <td className="p-3 font-mono text-[11px]">Standard Account</td>
                      <td className="p-3">Sends due date alerts and pitches new rollover loans.</td>
                      <td className="p-3">Ask for EMI split in writing and say no to rollovers.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0 Overdue</td>
                      <td className="p-3">Runs NACH auto-debit, adds bounce fee, and starts calls.</td>
                      <td className="p-3">Email hardship note and ask for KFS plus full SOA.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1 &amp; SMA-2</td>
                      <td className="p-3">Sends field agents, recall notice, or Section 25 notice.</td>
                      <td className="p-3">Reply to all legal notices and log any agent abuse.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Status</td>
                      <td className="p-3">Marks loss on books; settlement desk opens OTS talks.</td>
                      <td className="p-3 font-bold text-amber-800">Audit late fees and send written OTS offer with proof.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Post-OTS Approval</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Settlement Payout</td>
                      <td className="p-3">Sends official OTS letter or refers case to Lok Adalat.</td>
                      <td className="p-3 font-bold text-slate-900">Verify real bank sender and pay via official bank link.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Within 15 to 30 Days</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">Settled &amp; NDC</td>
                      <td className="p-3">Issues No Dues letter and reports zero balance to bureaus.</td>
                      <td className="p-3">Save NDC and check CIBIL, CRIF, Experian, and Equifax.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Special Cases: Flexi Hybrid, Apps & ARC Sales */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Product-Specific Settlement Realities</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: Flexi Hybrid, Apps &amp; ARC Sales
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Balloon and bullet personal loans come under many brand names in India. Here is how settlement rules work in four common real-life cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    NBFC Flexi Hybrid &amp; Interest-Only Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Flexi Hybrid loans charge interest-only EMIs for 12 to 24 months. After that, monthly dues jump sharply. If you cannot pay the jump or final balance, you can negotiate an OTS on the net principal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Short-Term Digital App Bullet Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Many loan apps offer 30 to 90 day bullet loans through NBFCs. Under RBI Digital Lending Directions, 2025, every app must name its NBFC lender, give a KFS, and guard your phone data.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Loans Sold to Asset Reconstruction Companies
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    After 180 days of NPA, NBFCs often sell bad bullet loans to an ARC. ARCs buy these loans at steep discounts. They often accept fast OTS deals if you offer a clean lump sum.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Lok Adalat &amp; CIBIL Recovery Path
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Settling at a National Lok Adalat gives you a final court order under Section 21 of the Legal Services Authorities Act. Later, you can rebuild CIBIL in 12 to 24 months using a small FD credit card.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Bullet Loan Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers to common questions on balloon loan default, RBI OTS rules, late fee bans, KFS gaps, and NACH bounce notices in India.
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden shadow-2xs transition-all duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          <p className="pt-3">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official RBI Citations &amp; Legal References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Circular RBI/2023-24/40 (DOR.STR.REC.20/21.04.048/2023-24):</strong> Framework for Compromise Settlements and Technical Write-offs (dated June 8, 2023).
                </li>
                <li>
                  <strong>RBI Circular RBI/2023-24/53 (DoR.MCS.REC.28/01.01.001/2023-24):</strong> Fair Lending Practice - Penal Charges in Loan Accounts (dated August 18, 2023; effective April 1, 2024).
                </li>
                <li>
                  <strong>RBI Circular RBI/2024-25/18 (DOR.STR.REC.13/13.03.00/2024-25):</strong> Key Facts Statement (KFS) for Loans and Advances (dated April 15, 2024).
                </li>
                <li>
                  <strong>RBI Master Circular on IRAC Norms:</strong> Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances (SMA-0/1/2 and 90-day NPA rules).
                </li>
                <li>
                  <strong>RBI (Digital Lending) Directions, 2025 (RBI/2025-26/36):</strong> Mandatory KFS, cooling-off exit window, and direct borrower fund flow rules for app-based loans.
                </li>
                <li>
                  <strong>Statutory Enactments:</strong> Section 25 of the Payment and Settlement Systems Act, 2007; Sections 138 and 147 of the Negotiable Instruments Act, 1881; Section 21 of the Legal Services Authorities Act, 1987; Reserve Bank - Integrated Ombudsman Scheme, 2021.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>NALSA Lok Adalat Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/flexi-hybrid-personal-loan-drop-line-overdraft-settle" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Flexi Hybrid Loan Settlement
                  </Link>
                  <Link href="/rbi-circular-on-loan-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI OTS Settlement Circular
                  </Link>
                  <Link href="/rbi-guidelines-on-penal-charges-in-loan-accounts" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Penal Charges Ban
                  </Link>
                  <Link href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Hidden KFS Charges Refund
                  </Link>
                  <Link href="/compounding-section-138-cheque-bounce-case-after-settlement-section-147" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 138 Compounding Guide
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Letter
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/rbi-15-day-fortnightly-credit-bureau-update-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI 15-Day CIBIL Update Rule
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-5 sticky top-6">

            {/* Card 1: Author Bio Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-sm hover:bg-blue-200 transition-colors flex-shrink-0"
                  title="View Ashish Jhangra Profile"
                >
                  AJ
                </Link>
                <div>
                  <Link
                    href="/author/ashish-jhangra"
                    className="text-sm font-bold text-slate-900 hover:text-[#1886ff] transition-colors block"
                  >
                    Ashish Jhangra
                  </Link>
                  <p className="text-[11px] font-semibold text-[#1886ff]">
                    Legal &amp; Debt Resolution Professional
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialist in RBI lending compliance, NBFC personal loan OTS deals, KFS mis-selling audits, and Section 138 defense for distressed Indian borrowers.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <Link
                  href="/author/ashish-jhangra"
                  className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>View Author Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> CredSettle Panel
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card (#2452ae background) */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  BULLET LOAN RELIEF DESK
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Cannot Pay Your Final Balloon Lump Sum?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt team checks your KFS and late fees, replies to Section 25 or 138 notices, and secures a written RBI-compliant OTS with No Dues closure.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Request Free OTS Assessment
              </Link>
              <div className="pt-2 flex flex-col items-center justify-center gap-1 text-[11px] text-blue-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-blue-200" />
                  <a href="tel:+918800226635" className="hover:underline font-bold text-white">
                    Call: +91-8800226635
                  </a>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-blue-300">
                  <Lock className="w-3 h-3" />
                  <span>RBI Compliant &bull; 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>KFS &amp; Penalty Audit:</strong> Dispute illegal compound penal interest first.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified OTS Letters:</strong> Written settlement sanction before you pay.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>NACH &amp; Legal Defense:</strong> Fast replies to Section 138 and 25 notices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Clean Bureau Tracking:</strong> NDC collection and 15-day CIBIL update check.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/flexi-hybrid-personal-loan-drop-line-overdraft-settle"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Flexi Hybrid Personal Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Interest-only &amp; drop-line exit &rarr;</span>
                </Link>

                <Link
                  href="/how-to-write-a-hardship-letter-for-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Write a Hardship Letter for OTS
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Formats &amp; proof checklist &rarr;</span>
                </Link>

                <Link
                  href="/can-i-pay-settlement-amount-in-emi"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can I Pay OTS Settlement in EMIs?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Installment settlement rules &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
