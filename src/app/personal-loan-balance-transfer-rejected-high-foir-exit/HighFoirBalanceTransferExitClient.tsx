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

export default function HighFoirBalanceTransferExitClient() {
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
    { id: 'foir-rejection-rules', label: '1. Why High FOIR Blocks Refinance' },
    { id: 'rbi-risk-weights', label: '2. RBI 125% Risk Weight & Caps' },
    { id: 'foir-calculation-matrix', label: '3. FOIR Calculation & Debt Load' },
    { id: 'cibil-foir-audit', label: '4. Audit Fake FOIR & CIBIL Errors' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Safe Exit SOP' },
    { id: 'restructure-vs-ots', label: '7. Restructuring vs OTS Under RBI' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Rejection to Debt Closure Path' },
    { id: 'specialized-scenarios', label: '10. Top-Ups, Cards & Co-Applicants' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is FOIR and why did my personal loan balance transfer get rejected?',
      a: 'FOIR stands for Fixed Obligation to Income Ratio. It shows what share of your monthly salary pays loan EMIs and card bills. Most Indian banks cap FOIR at 45% to 55% and reject balance transfers when total debt exceeds this mark.'
    },
    {
      q: 'Why does a bank check FOIR if the new loan replaces my old personal loan?',
      a: 'Banks treat every balance transfer like a fresh loan risk check. Even if the new EMI is lower, your other EMIs, credit card dues, or a cash top-up can keep your projected FOIR above the lender cutoff.'
    },
    {
      q: 'Can I demand the exact reason for my personal loan rejection in writing?',
      a: 'Yes. Under the RBI Fair Practices Code, banks and NBFCs must share the main reasons for loan rejection in writing for all loan sizes. If a lender refuses, you can escalate to the Nodal Officer or RBI Ombudsman.'
    },
    {
      q: 'How did the RBI 125% risk weight rule make balance transfers harder?',
      a: 'Under RBI Circular RBI/2023-24/85, banks and NBFCs must hold higher capital at 125% risk weight on unsecured personal loans and up to 150% on bank credit cards. As a result, lenders enforce strict 50% FOIR caps with very few exceptions.'
    },
    {
      q: 'Can closed loans still showing active on CIBIL cause high FOIR rejection?',
      a: 'Yes. Stale active loans, BNPL lines, or duplicate entries inflate your calculated FOIR. Under RBI Circular RBI/2024-25/60, banks must update bureaus every 15 days. If a dispute crosses 30 days, you can claim ₹100 per day under RBI/2023-24/72.'
    },
    {
      q: 'Does the RBI zero prepayment penalty rule apply to my personal loan switch?',
      a: 'Under the RBI Pre-payment Charges Directions, 2025 (effective January 1, 2026), lenders cannot charge foreclosure fees on floating-rate personal loans taken by individuals. Fixed-rate personal loans can still carry fees if clearly stated in your KFS.'
    },
    {
      q: 'How can I lower my FOIR fast without taking another risky loan?',
      a: 'First, stop submitting new loan forms and clear ghost active loans on CIBIL. You can also pay off small EMIs, drop top-up requests, show extra rental income, or add an earning spouse as co-applicant.'
    },
    {
      q: 'Should I choose loan restructuring or One-Time Settlement when FOIR exceeds 70%?',
      a: 'If a longer tenure makes your monthly EMI safe within 45% of income, ask your current bank for restructuring first. If EMIs still swallow your salary and default is unavoidable, a formal One-Time Settlement (OTS) gives a cleaner legal debt exit.'
    },
    {
      q: 'What is the 12-month cooling period under the RBI Compromise Settlement circular?',
      a: 'Under RBI Circular RBI/2023-24/40 (dated June 8, 2023), banks and NBFCs cannot grant fresh credit for at least 12 months after a compromise settlement. During this period, you can stabilize cash flow and start rebuilding your credit profile.'
    },
    {
      q: 'How does CredSettle help when high FOIR traps me in multiple personal loans?',
      a: 'CredSettle audits your FOIR and all four credit reports while stopping unlawful recovery agent harassment. Our team also drafts hardship letters, negotiates 40% to 60% OTS waivers, and verifies your NDC and bureau update.'
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
            <span>RBI Lending Rules, High FOIR &amp; Safe Debt Exit</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Debt Settlement Strategy When High FOIR Blocks Refinance
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Got your personal loan balance transfer rejected for high FOIR? Learn why banks block loan switches, how to fix CIBIL errors, and how to exit heavy EMIs legally under RBI rules.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Free High-FOIR Debt Review</span>
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
                  <span>Statutory Borrower Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Fair Practices Code, RBI Circular RBI/2023-24/40, and RB-IOS 2026.
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
                <span>EXECUTIVE BRIEF: HIGH FOIR REFINANCE DENIAL &amp; DEBT EXIT RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict 45% to 55% Bank Cap:</strong> Most Indian banks reject personal loan balance transfers if total monthly EMIs cross 50% of your net salary.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Written Rejection Reason Right:</strong> Under the RBI Fair Practices Code, lenders must give the main reason for loan rejection in writing for any loan size.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Fix Ghost EMIs First:</strong> Old paid loans left open on CIBIL bloat your FOIR. Banks must update bureaus every 15 days or pay ₹100 per day after a 30-day delay.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Fee on Floating Switch:</strong> Under RBI Pre-payment Directions, 2025 (live from January 1, 2026), banks cannot charge foreclosure fees on individual floating-rate personal loans.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Safe Exit Past 65% FOIR:</strong> When refinance fails and EMIs drain your pay, you can ask for internal restructuring or a legal One-Time Settlement (OTS) under RBI Circular RBI/2023-24/40.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Why High FOIR Blocks Personal Loan Balance Transfers */}
            <section id="foir-rejection-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Refinance Rules &amp; Bank Underwriting Caps</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Why High FOIR Blocks Personal Loan Balance Transfers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                FOIR stands for Fixed Obligation to Income Ratio. It shows what part of your monthly net salary goes to loan EMIs and card bills. Banks use this number to check if you have enough cash left for rent, food, and daily life.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers feel shocked when a new bank declines a balance transfer. After all, the new loan is meant to replace an old loan at a lower rate. Yet Indian banks still judge every balance transfer just like a brand-new loan file.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most banks cap FOIR at 45% to 55% of net take-home pay. If you also hold car EMIs, credit card dues, or a small app loan, your total ratio climbs fast. Asking for a cash top-up pushes your projected EMI even higher and triggers an instant decline.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI Fair Practices Code, banks and NBFCs must share the main reason for loan rejection in writing. This rule covers personal loans of all sizes. Always ask for that written reason before you apply anywhere else.
              </p>
            </section>

            {/* SECTION 2: RBI 125% Risk Weight & Tight Unsecured Loan Caps */}
            <section id="rbi-risk-weights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Capital Rules &amp; Prepayment Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI 125% Risk Weight &amp; Tight Unsecured Loan Caps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Loan switches became much harder after RBI Circular RBI/2023-24/85 on November 16, 2023. The RBI raised the risk weight on unsecured personal loans from 100% to 125%. It also raised bank credit card risk weight to 150%.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In plain words, banks must now lock up more reserve funds for every unsecured loan they approve. Because of this cost, credit teams treat the 50% FOIR limit as a hard wall. Borderline files that passed years ago now get auto-rejected.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                At the same time, RBI Pre-payment Charges Directions, 2025 took effect on January 1, 2026. Banks can no longer charge foreclosure fees on floating-rate personal loans taken by individuals. That helps if your rate is floating and your FOIR fits the cap.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, most personal loans in India carry a fixed interest rate. On fixed-rate loans, banks can still charge 2% to 5% exit fees if listed in your Key Facts Statement (KFS). When your FOIR is already too high, switch fees and GST only deepen your debt trap.
              </p>
            </section>

            {/* SECTION 3: FOIR Calculation Matrix: How Banks Measure Debt Load */}
            <section id="foir-calculation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Debt-to-Income Math &amp; Action Zones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. FOIR Calculation Matrix: How Banks Measure Debt Load
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks compute FOIR with a simple rule: divide your total monthly EMIs plus 5% of credit card dues by your net monthly pay, then multiply by 100. Banks often skip variable bonuses, cash perks, or one-time incentives in this math.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For example, suppose your net salary is ₹80,000 per month. If your EMIs and card dues add up to ₹52,000, your FOIR sits at 65%. The table below shows what banks do at each FOIR band and your best legal move.
              </p>

              {/* Representative FOIR Matrix Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative FOIR Thresholds &amp; Debt Exit Zones</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Sample Salary: ₹80,000 / Month</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">FOIR Band</th>
                        <th className="p-3">Monthly Debt on ₹80,000 Pay</th>
                        <th className="p-3">Bank Refinance Outcome</th>
                        <th className="p-3 text-right">Recommended Legal Path</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Up to 45%</td>
                        <td className="p-3 font-mono">Up to ₹36,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">High Approval Odds</td>
                        <td className="p-3 text-right font-bold text-slate-700">Normal Balance Transfer</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">46% to 55%</td>
                        <td className="p-3 font-mono text-amber-600 font-bold">₹36,800 to ₹44,000</td>
                        <td className="p-3 text-amber-600 font-semibold">Borderline: Top-Up Declined</td>
                        <td className="p-3 text-right font-bold text-amber-700">Drop Top-Up / Audit CIBIL</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">56% to 65%</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">₹44,800 to ₹52,000</td>
                        <td className="p-3 text-rose-600 font-semibold">Rejected by Most Banks</td>
                        <td className="p-3 text-right font-bold text-rose-700">Tenure Extension / Secured Swap</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">66% to 80%</td>
                        <td className="p-3 font-mono text-rose-700 font-bold">₹52,800 to ₹64,000</td>
                        <td className="p-3 text-rose-700 font-semibold">Auto-Rejected Everywhere</td>
                        <td className="p-3 text-right font-bold text-rose-800">Hardship Relief or OTS Plan</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Above 80%</td>
                        <td className="p-3 font-mono text-[#1886ff]">₹64,000+ (Debt Trap)</td>
                        <td className="p-3 text-[#1886ff]">Zero Refinance Viability</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">Structured OTS Debt Exit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Audit Fake FOIR Bloat: RBI 15-Day Bureau Update Rule */}
            <section id="cibil-foir-audit" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Report Cleanup &amp; Statutory Penalties</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Audit Fake FOIR Bloat: RBI 15-Day Bureau Update Rule
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many rejections happen because your credit report is wrong, not because your true salary is too low. Old paid loans, Buy Now Pay Later (BNPL) lines, or duplicate NBFC accounts often stay marked as active on CIBIL.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a bank pulls your report, its software adds every active line into your FOIR. Even a closed ₹2 lakh loan can make your monthly burden look ₹8,000 higher than reality. Fixing these ghost records can save your loan switch.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI Circular RBI/2024-25/60 (dated August 8, 2024), all lenders must send credit updates every 15 days. Banks must report data as of the 15th and the last day of each month within 7 calendar days. You do not need to wait months anymore.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a lender still fails to close a paid account, RBI Circular RBI/2023-24/72 gives you a direct penalty right. The bank and credit bureau get 30 calendar days total to fix your dispute. Past day 30, they must pay you ₹100 per day of delay.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: High FOIR Rejection to Safe Exit
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual sums up your legal options when high FOIR blocks a personal loan balance transfer. Follow a clean path from CIBIL audit to RBI-backed restructuring or formal One-Time Settlement.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/personal-loan-balance-transfer-rejected-high-foir-exit.jpg"
                    alt="Personal Loan Balance Transfer Rejected Due to High FOIR Legal Debt Exit Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle High FOIR Debt Exit Framework • RBI Rules Compliant</span>
                  <a
                    href="/images/infographics/personal-loan-balance-transfer-rejected-high-foir-exit.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Legal Exit After Refinance Denial */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Legal Exit After Refinance Denial
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do not panic and apply to five more lenders on the same day. Follow these six simple steps to stop score damage, check your true numbers, and exit debt safely.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Freeze All Fresh Loan &amp; Card Applications
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Every rejected form leaves a hard inquiry on your credit file. Five inquiries in one month signal cash panic and pull your score down fast. Stop applying right away.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Demand Written Rejection Grounds &amp; Audit Bureaus
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ask the bank to email the exact rejection reason under the RBI Fair Practices Code. Pull CIBIL, Experian, Equifax, and CRIF reports to catch any paid loans still shown as active.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Map Your True Monthly Cash Flow
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Subtract house rent, food, school fees, and medical bills from your net salary. If your real EMIs exceed 60% of net pay, borrowing more unsecured money will only delay a collapse.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Ask Your Current Lender for Internal Restructuring
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Write to your existing bank before you miss EMIs. Request a longer loan term or lower monthly EMI. Your current bank already holds your risk and is often more open than a new lender.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Compare Secured Loan Swap vs Hardship OTS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you hold gold, fixed deposits, or equity, a low-rate secured loan can retire 18% to 36% debt cleanly. If you lack assets and face real hardship, build a legal file for One-Time Settlement.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Secure Written OTS Letter &amp; No Dues Certificate
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never pay recovery agents based on verbal deals. Insist on a formal bank letterhead OTS Sanction Letter, pay inside the stated dates, collect your NDC, and check the 15-day bureau update.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Restructuring vs One-Time Settlement Under RBI Rules */}
            <section id="restructure-vs-ots" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>RBI Legal Debt Relief Options</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Restructuring vs One-Time Settlement Under RBI Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When your FOIR climbs past 65%, refinancing is no longer a realistic cure. Your two legal RBI-backed exits are internal loan restructuring and formal One-Time Settlement (OTS).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Choose restructuring if a longer repayment term makes your monthly EMI safe again. Choose OTS under RBI Circular RBI/2023-24/40 if job loss, pay cuts, or medical crisis make full repayment impossible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Internal Tenure Extension &amp; Restructuring</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your current lender stretches your remaining loan tenure by 12 to 24 months to lower monthly EMIs. You repay full principal over time, so total interest rises, yet you avoid legal default.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>RBI Compromise Settlement (OTS) Rules</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Circular RBI/2023-24/40 (June 8, 2023), banks can settle stressed NPA loans for a lower lump sum. Unsecured personal loans often settle at 40% to 60% savings with a 12-month cooling period.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Ban on Compounding Penal Interest</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Circular RBI/2023-24/53 (effective April 1, 2024), banks can only levy flat penal charges on missed EMIs. They cannot add penal interest back onto your principal loan balance.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Protection Against Recovery Harassment</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Missing EMIs is a civil debt matter, not a crime. RBI recovery rules strictly ban calls outside 8 AM to 7 PM, threats, abusive words, or calling your office HR and relatives.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Does your lender hide rejection reasons or leave paid loans open on CIBIL? If they also add illegal fees or harass you, use the official RBI three-tier complaint path.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 14 Working Days</td>
                      <td className="p-3">Issues written rejection reasons, updates closed loan status, and logs hardship letters.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">15 to 21 Working Days</td>
                      <td className="p-3">Waives unlawful compounding penalties, stops abusive agents, and routes formal OTS review.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-Bank Filing</td>
                      <td className="p-3">Orders CIBIL fixes, ₹100/day delay pay, and up to ₹30 lakh loss plus ₹3 lakh stress relief under RB-IOS 2026.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Debt Exit Milestones: Refinance Rejection to Closure */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Debt Exit Milestones: Refinance Rejection to Closure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing each step from balance transfer denial to final loan closure helps you stay calm, protect your legal rights, and avoid costly debt traps.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Stage</th>
                      <th className="p-3">What Banks &amp; Bureaus Do</th>
                      <th className="p-3">Your Action Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Week 1</td>
                      <td className="p-3 font-mono text-[11px]">Refinance Denied</td>
                      <td className="p-3">New bank rejects transfer for high FOIR and logs a hard inquiry.</td>
                      <td className="p-3">Freeze new loan forms; ask for written rejection grounds.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Weeks 2 to 4</td>
                      <td className="p-3 font-mono text-[11px]">CIBIL Cleanup</td>
                      <td className="p-3">Banks send fortnightly credit updates on the 15th and month-end.</td>
                      <td className="p-3">Dispute ghost active loans; track the 30-day ₹100/day clock.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 2</td>
                      <td className="p-3 font-mono text-[11px]">Restructure Pitch</td>
                      <td className="p-3">Current lender checks salary slips and hardship proof.</td>
                      <td className="p-3">Submit formal hardship letter seeking lower EMI or longer term.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Days 60 to 90</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">SMA-2 / NPA Shift</td>
                      <td className="p-3">Unpaid account moves toward 90-day NPA status; recovery calls rise.</td>
                      <td className="p-3 font-bold text-amber-800">Build a dedicated OTS fund; log any illegal recovery calls.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Months 4 to 6</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">OTS Approval</td>
                      <td className="p-3">Senior bank panel reviews compromise offer under RBI 2023 rules.</td>
                      <td className="p-3 font-bold text-slate-900">Negotiate 40% to 60% waiver and verify official OTS letter.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Post-Closure</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">NDC &amp; Rebuild</td>
                      <td className="p-3">Lender issues No Dues Certificate and updates bureaus in 15 days.</td>
                      <td className="p-3">Verify zero balance on reports; rebuild score with FD card.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Cases: Top-Ups, Cards & Co-Applicants */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Cases: Top-Ups, Cards &amp; Co-Applicants
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                High FOIR rejections often hide specific side traps like top-up loans, revolving credit cards, joint loans, or rogue loan brokers. Here is how to handle each case.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Balance Transfer Plus Top-Up Trap
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Asking for extra cash alongside a balance transfer is the top reason banks say no. If your FOIR is near 50%, drop the top-up and ask only for a plain transfer.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Credit Card 5% Minimum Due Bloat
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks count 5% of your total credit card balance as a monthly EMI in FOIR checks. Paying only minimum due keeps your 36% to 42% APR and FOIR stuck high.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Joint Loans &amp; Guarantor Liability
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Even if a parent or partner pays a joint home or car EMI, banks count 100% of it in your FOIR. Share 12 months of bank statements proving they pay it to seek relief.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    DSA Spam &amp; Predatory Loan Apps
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    After a bank refusal, agents often send your PAN to ten NBFCs or instant apps. Those extra hard inquiries hurt your score and push you into high-fee short-term traps.
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
                Frequently Asked Questions: High FOIR &amp; Debt Exit
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, plain-English answers on high FOIR personal loan balance transfer denials, RBI capital rules, CIBIL cleanup, restructuring, and One-Time Settlement.
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
                Official Regulatory Citations &amp; Statutory References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Reserve Bank of India Circular RBI/2023-24/85 (DOR.STR.REC.57/21.06.001/2023-24):</strong> Regulatory measures towards consumer credit and bank credit to NBFCs (125% risk weight on unsecured personal loans and 150% on bank credit cards).
                </li>
                <li>
                  <strong>Reserve Bank of India Circular RBI/2023-24/40 (DOR.STR.REC.20/21.04.048/2023-24):</strong> Framework for Compromise Settlements and Technical Write-offs (June 8, 2023), covering board-approved OTS deals and the 12-month cooling period.
                </li>
                <li>
                  <strong>Reserve Bank of India Circulars RBI/2024-25/60 &amp; RBI/2023-24/72:</strong> Fortnightly 15-day credit information reporting and ₹100 per day compensation for credit report dispute delays past 30 calendar days.
                </li>
                <li>
                  <strong>RBI Circular RBI/2023-24/53 &amp; Pre-payment Charges Directions, 2025:</strong> Fair Lending Practice on Penal Charges (banning compounding penal interest) and zero foreclosure charges on individual floating-rate personal loans.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2026 &amp; Fair Practices Code:</strong> Mandatory written loan rejection reasons for all loan sizes and compensation up to ₹30 lakh for direct loss plus ₹3 lakh for mental anguish and harassment.
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
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Dispute Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.crifhighmark.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>CRIF High Mark India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
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
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/should-i-settle-or-restructure-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Settle vs Restructure Loan
                  </Link>
                  <Link href="/settle-multiple-personal-loans" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Settle Multiple Personal Loans
                  </Link>
                  <Link href="/how-to-convince-bank-for-one-time-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convince Bank for OTS
                  </Link>
                  <Link href="/how-to-write-a-hardship-letter-for-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Hardship Letter Format
                  </Link>
                  <Link href="/remove-unauthorized-multiple-cibil-hard-inquiries-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove CIBIL Hard Inquiries
                  </Link>
                  <Link href="/rbi-15-day-fortnightly-credit-bureau-update-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI 15-Day CIBIL Update Rule
                  </Link>
                  <Link href="/rbi-circular-on-loan-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI OTS Settlement Circular
                  </Link>
                  <Link href="/cannot-pay-personal-loan-emi" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Cannot Pay Personal Loan EMI
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
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
                Specialist in personal loan restructuring, FOIR debt audits, RBI statutory guidelines, and One-Time Settlement deals helping Indian borrowers exit heavy EMIs safely.
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
                  HIGH FOIR DEBT RELIEF
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Refinance Rejected &amp; EMIs Out of Control?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Stop applying to more banks and hurting your score. Our legal debt team audits your loans, stops harassment, and negotiates RBI-compliant restructuring or 40% to 60% OTS waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Debt Exit Plan
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
                  <span>RBI Compliant • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>FOIR &amp; 4-Bureau Audit:</strong> Spot ghost active loans and wrong EMIs fast.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-Harassment Shield:</strong> Legal notice support against abusive recovery agents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Board-Approved OTS:</strong> Verified sanction letters with 40% to 60% savings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>15-Day Bureau Tracking:</strong> Confirm NDC and zero balance across bureaus.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/should-i-settle-or-restructure-personal-loan"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Settle vs Restructure Personal Loan
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Compare both RBI relief paths &rarr;</span>
                </Link>

                <Link
                  href="/settle-multiple-personal-loans"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Settle Multiple Personal Loans
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Exit stacked EMIs safely &rarr;</span>
                </Link>

                <Link
                  href="/remove-unauthorized-multiple-cibil-hard-inquiries-loan"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Remove Multiple CIBIL Inquiries
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Fix score drops from denials &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
