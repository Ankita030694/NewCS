'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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

export default function UnusedCardAnnualFeeCibilClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & RBI Crux' },
    { id: 'cibil-damage-anatomy', label: '1. Why Unused Cards Ruin CIBIL' },
    { id: 'rbi-unactivated-dormant', label: '2. Unactivated vs Dormant Rules' },
    { id: 'fee-snowball-math', label: '3. Annual Fee & GST Snowball Math' },
    { id: 'closure-500-penalty', label: '4. Rs 500/Day Closure Penalty Rule' },
    { id: 'visual-blueprint', label: '5. Visual Dispute & Fix Blueprint' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step CIBIL Repair SOP' },
    { id: 'cibil-100-penalty', label: '7. Rs 100/Day CIBIL Rectification' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Dispute to Clean CIBIL Timeline' },
    { id: 'specialized-scenarios', label: '10. LTF Mis-Selling & Auto-Renewal' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank charge an annual fee on an unactivated credit card in India?',
      a: 'No. Under the RBI Master Direction on Credit Cards, if you do not activate a card within 30 days, the bank must seek OTP consent. Without consent, the bank must close the card within 7 working days at zero cost and cannot levy any annual fee or report it to CIBIL.'
    },
    {
      q: 'What is the RBI rule for a credit card unused for more than one year?',
      a: 'If a credit card has not been used for more than one year, the bank must send you a closure notice. If you do not reply within 30 days, the bank must close the card account, subject to payment of pending dues, and update CIBIL within 30 days.'
    },
    {
      q: 'Can an unpaid annual fee on an unused credit card ruin my CIBIL score?',
      a: 'Yes. On an activated card, an unpaid annual fee attracts GST, late payment fees, and 36% to 45% annual interest. Within 90 days, the bank reports Days Past Due (DPD) and NPA status to CIBIL, which can drop your score by 80 to 150 points.'
    },
    {
      q: 'How much penalty must a bank pay if it delays closing my credit card?',
      a: 'Under RBI rules, a bank must close your credit card within 7 working days of your request, provided all dues are cleared. Any delay beyond 7 working days requires the bank to pay you Rs 500 per calendar day.'
    },
    {
      q: 'Do banks have to notify me before reporting an annual fee default to CIBIL?',
      a: 'Yes. RBI Master Directions require card issuers to give prior intimation to the cardholder before reporting a default status to Credit Information Companies like CIBIL, Experian, Equifax, or CRIF High Mark.'
    },
    {
      q: 'What is the RBI Rs 100 per day rule for delayed CIBIL correction?',
      a: 'Under RBI Circular RBI/2023-24/72 dated October 26, 2023, banks and credit bureaus must resolve your CIBIL dispute within 30 calendar days. If they fail, you are entitled to Rs 100 per calendar day of delay.'
    },
    {
      q: 'What if an unsolicited credit card was activated and billed without my consent?',
      a: 'If a bank issues or activates an unsolicited credit card without your explicit consent and bills you, RBI mandates that the bank reverse all charges immediately and pay you a penalty equal to twice the value of the reversed charges.'
    },
    {
      q: 'Should I pay the annual fee first or dispute it before closing the card?',
      a: 'If the card was unactivated or mis-sold as Lifetime Free, file a written dispute immediately without accepting liability. If the card was active and unused for under one year, paying the fee under protest or negotiating a waiver prevents further DPD damage while you escalate.'
    },
    {
      q: 'Can I remove a settled or NPA tag caused by a disputed annual fee?',
      a: 'Yes. If the bank violated RBI closure rules, failed to send prior CIBIL notice, or billed an unactivated card, you can demand complete removal of the DPD and NPA record under Section 21(3) of the CICRA Act, 2005 and through the RBI Ombudsman.'
    },
    {
      q: 'How does CredSettle help fix CIBIL damage from unused credit card fees?',
      a: 'CredSettle audits your card activation and usage logs, drafts statutory notices citing RBI Master Directions, files RBI Integrated Ombudsman complaints, secures fee waivers and Rs 500 or Rs 100 daily penalties, and restores your CIBIL report.'
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
            <span>RBI Credit Card Master Direction &amp; CIBIL Rectification Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Fix CIBIL Default From Unused Credit Card Annual Fees
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did an annual fee on an unused or unactivated credit card trigger late fees and ruin your CIBIL score? Learn the binding RBI closure rules, reverse illegal charges, and claim statutory daily compensation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Fix Your CIBIL &amp; Reverse Fees</span>
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
                  <span>RBI Cardholder Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Master Direction 2022, Circular RBI/2023-24/72, and CICRA Act, 2005.
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
                <span>EXECUTIVE BRIEF: RBI RULES ON UNUSED CREDIT CARD FEES &amp; CIBIL</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">30-Day Unactivated Card Rule:</strong> Banks cannot charge annual fees or report to CIBIL if a card stays unactivated for 30 days. Without OTP consent, they must close it at zero cost within 7 working days.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">1-Year Dormant Closure Mandate:</strong> If an activated card is unused for over one year, the bank must send a closure notice. If you do not reply within 30 days, the bank must close the account.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Rs 500/Day Closure Delay Penalty:</strong> Once you clear dues and request closure, the bank has 7 working days to close the card. Delays trigger a mandatory Rs 500 per day penalty.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Rs 100/Day CIBIL Rectification Rule:</strong> Under RBI Circular RBI/2023-24/72, banks and credit bureaus must fix wrong CIBIL entries within 30 calendar days or pay Rs 100 per day.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">2x Penalty for Unsolicited Billing:</strong> If an unsolicited card is activated and billed without explicit consent, the bank must reverse all fees and pay twice the charged amount.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1 */}
            <section id="cibil-damage-anatomy" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Impact &amp; Silent Defaults</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Why Unused Credit Cards Trigger CIBIL Defaults
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Thousands of Indian borrowers discover a sudden 100-point drop in their CIBIL score when applying for a home or personal loan. The shock is often caused by a forgotten credit card sitting in a drawer for years.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many users believe that never swiping a credit card means zero bills and zero risk. However, if the card was activated at delivery, the bank still bills annual renewal fees plus 18% GST every year.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you ignore statements sent to an old email address, that small Rs 500 or Rs 1,000 fee goes unpaid. The bank marks your account as overdue, adds monthly late fees, and reports Days Past Due (DPD) to CIBIL, Experian, Equifax, and CRIF High Mark.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Within 90 days of non-payment, the bank classifies the small fee balance as a Non-Performing Asset (NPA). Under Reserve Bank of India (RBI) rules, you have strong legal grounds to challenge this unfair reporting and clean your credit history.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="rbi-unactivated-dormant" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>RBI Master Direction (2022 &amp; 2024 Updates)</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI Rules for Unactivated vs Dormant Cards
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI Master Direction on Credit Card and Debit Card Issuance and Conduct (DoR.AUT.REC.No.27/24.01.041/2022-23) draws a sharp line between unactivated cards and dormant cards. Knowing which category your card falls into decides your legal remedy.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>For Unactivated Cards (30-Day Rule):</strong> If you never set a PIN or activated the card within 30 days of issuance, the bank must ask for your OTP-based consent. If you do not give consent, the bank must close the card within 7 working days at zero cost. No annual fee or CIBIL entry is allowed.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>For Dormant Cards (1-Year Rule):</strong> If you activated the card once but did not use it for more than one year, the bank must start the closure process. The issuer must send you a formal notice first.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you do not reply within 30 days of that notice, the bank must permanently close the card account, provided all dues are cleared. The bank must also update the closed status with credit bureaus within 30 days.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="fee-snowball-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Compounding Fee &amp; Interest Ledger</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Annual Fee Traps: Joining, Renewal &amp; GST Snowball
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A small annual fee on an unused card rarely stays small. Banks apply revolving credit interest rates of 36% to 45% per year, plus fixed late payment charges and 18% GST on every fee component.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The table below shows how a single Rs 1,000 annual fee on an ignored card can grow into a severe CIBIL default in just six months.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Illustrative Rs 1,000 Annual Fee Debt Snowball</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">3.5% Monthly Interest + GST</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Billing Cycle</th>
                        <th className="p-3">Fees &amp; Interest Added</th>
                        <th className="p-3">CIBIL Reporting Status</th>
                        <th className="p-3 text-right">Total Balance Due</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Month 1 (Fee Billed)</td>
                        <td className="p-3">Rs 1,000 Fee + Rs 180 GST</td>
                        <td className="p-3 text-emerald-600 font-semibold">000 DPD (Standard)</td>
                        <td className="p-3 text-right font-bold font-mono text-slate-900">Rs 1,180</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Month 2 (30 Days Overdue)</td>
                        <td className="p-3">Rs 500 Late Fee + Interest + GST</td>
                        <td className="p-3 text-amber-600 font-semibold">030 DPD (SMA-1 Alert)</td>
                        <td className="p-3 text-right font-bold font-mono text-amber-700">Rs 1,819</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Month 3 (60 Days Overdue)</td>
                        <td className="p-3">Rs 500 Late Fee + Interest + GST</td>
                        <td className="p-3 text-rose-600 font-semibold">060 DPD (SMA-2 Alert)</td>
                        <td className="p-3 text-right font-bold font-mono text-rose-700">Rs 2,485</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Month 4 (90+ Days)</td>
                        <td className="p-3">Late Fee + Compounding Interest</td>
                        <td className="p-3 text-rose-700 font-semibold">090+ DPD (NPA Marked)</td>
                        <td className="p-3 text-right font-bold font-mono text-rose-800">Rs 3,178</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Month 6 (180 Days)</td>
                        <td className="p-3">Overlimit &amp; Penal Charges</td>
                        <td className="p-3 text-[#1886ff]">Write-Off / Severe Default</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">Rs 4,650+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="closure-500-penalty" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>7-Working-Day Closure Rule</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Bank Closure Penalty: Rs 500 Per Day RBI Rule
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers try to close an unused card, but the bank keeps them stuck in retention calls or ignores emails. Later, the bank bills another annual fee because the card stayed open on paper.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI Master Direction on Credit Cards, any customer request to close a credit card must be completed within <strong>7 working days</strong>, provided all pending dues are paid.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks must offer simple closure channels such as email, net banking, mobile app, or a dedicated helpline. They cannot force you to visit a branch or mail physical letters.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the bank fails to close your card within 7 working days after you clear dues, it must pay you a penalty of <strong>Rs 500 per calendar day</strong> of delay. Any annual fee billed after your valid closure request is illegal and must be reversed.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint (Clean Tailwind Diagram) */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Fee Dispute &amp; CIBIL Fix Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this four-stage legal pathway to determine whether your unused card fee is illegal under RBI rules and how to restore your CIBIL score.
              </p>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#1886ff]">Step 1: Audit</span>
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">Check Activation &amp; Usage</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Verify if the card was never activated (30-day rule) or unused for over 1 year (dormant rule).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-100 space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-700">Step 2: Demand</span>
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">Cite RBI Master Direction</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Email the Bank Nodal Officer demanding fee reversal, card closure, and CIBIL removal.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700">Step 3: Escalate</span>
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">RBI Ombudsman Portal</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If unresolved after 30 days, file a free complaint at cms.rbi.org.in with proof.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700">Step 4: Recover</span>
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">Clean CIBIL + Penalty</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Secure DPD removal, Closure NOC, plus Rs 500/day or Rs 100/day delay compensation.
                    </p>
                  </div>
                </div>
                <div className="text-xs text-slate-500 pt-1 border-t border-slate-100 flex items-center justify-between">
                  <span>Official CredSettle Unused Card &amp; CIBIL Protection Framework</span>
                  <span className="font-semibold text-[#1886ff]">RBI Circular Compliant</span>
                </div>
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Reverse Fees &amp; Fix Your CIBIL
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six clear steps to challenge an annual fee on an unused credit card and remove the negative entry from your CIBIL report.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Download Your Full CIBIL Report &amp; Card Statements
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Get your official CIBIL report and check the exact account opening date, last transaction date, and DPD months. Collect old emails or SMS alerts showing whether you ever activated or used the card.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Check for Prior Notice &amp; 1-Year Inactivity Violations
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Verify if the card was unactivated for over 30 days or unused for over 12 months. Also check if the bank sent any prior warning before reporting the default to CIBIL, as required by RBI rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Send a Written Dispute to the Bank Grievance Officer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email the bank Grievance Redressal Officer (GRO) with your card reference number. Cite the RBI Master Direction on Credit Cards, demand complete reversal of annual fees and interest, and ask for zero-cost closure.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Raise a Parallel Dispute on CIBIL &amp; Other Bureaus
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Log in to the official CIBIL dispute portal and flag the account under Section 21(3) of the CICRA Act, 2005. Include your bank account number or UPI ID so the Rs 100/day delay rule applies.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Escalate to the RBI Integrated Ombudsman After 30 Days
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank rejects your dispute or fails to reply within 30 days, file a complaint at cms.rbi.org.in. Attach your GRO email, CIBIL screenshot, and demand full DPD/NPA deletion plus daily penalties.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Collect Your Closure Letter &amp; Verify CIBIL Update
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once resolved, collect an official No Dues and Card Closure letter. Confirm within 30 days that your CIBIL report shows &quot;Closed&quot; with zero overdue balance and no DPD history for the disputed period.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="cibil-100-penalty" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Circular RBI/2023-24/72 &amp; Statutory Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Rs 100 Per Day CIBIL Rectification Penalty Rule
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks and credit bureaus often take months to correct wrong CIBIL records even after accepting their mistake. To stop this delay, the RBI issued Circular RBI/2023-24/72 on October 26, 2023.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under this rule, your CIBIL dispute must be resolved within <strong>30 calendar days</strong>. The bank gets 21 calendar days to verify and send corrected data, and the credit bureau gets the remaining days to update your report.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <DollarSign className="w-4 h-4" />
                    <span>Rs 100 Daily Compensation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your dispute takes more than 30 calendar days, the responsible bank or bureau must pay you Rs 100 per day of delay within 5 working days of resolution.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>CICRA Act, 2005 Section 21(3)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Gives every Indian borrower the legal right to demand correction of inaccurate credit data directly from the credit bureau or the reporting lender.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>2x Penalty on Unsolicited Cards</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a card was issued or activated without your explicit consent and billed, the bank must reverse the charges and pay twice that amount as penalty.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Wrongful CIBIL reporting and loan rejection due to illegal annual fees count as deficiency in service, allowing extra damages in Consumer Court.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8 */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank GRO to Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do not waste months arguing with customer care executives on phone calls. Use the official three-tier written escalation system to force fee reversal and CIBIL correction.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Audits activation logs, reverses annual fees, and processes card closure.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Calendar Days</td>
                      <td className="p-3">Approves CIBIL DPD/NPA deletion and authorizes Rs 500/day closure compensation.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-Complaint</td>
                      <td className="p-3">Issues binding orders on cms.rbi.org.in to clean CIBIL and award penalties.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9 */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Fee Dispute to Clean CIBIL
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding each statutory window ensures you never miss a deadline when holding your bank or credit bureau accountable.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Regulatory Phase</th>
                      <th className="p-3">Bank / Bureau Duty</th>
                      <th className="p-3">Your Action Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0</td>
                      <td className="p-3 font-mono text-[11px]">Dispute Filing</td>
                      <td className="p-3">Logs complaint and issues a service ticket number.</td>
                      <td className="p-3">Email Bank GRO and submit CIBIL dispute with bank/UPI details.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 7 Working Days</td>
                      <td className="p-3 font-mono text-[11px]">Closure Window</td>
                      <td className="p-3">Must close card within 7 working days if dues are zero.</td>
                      <td className="p-3">Track closure confirmation; note delay for Rs 500/day claim.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 21 Calendar Days</td>
                      <td className="p-3 font-mono text-[11px]">Bank CIBIL Review</td>
                      <td className="p-3">Bank must verify and forward corrected data to CIBIL.</td>
                      <td className="p-3">Escalate to Principal Nodal Officer if no written update arrives.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 22 to 30 Calendar Days</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Bureau Update Window</td>
                      <td className="p-3">Credit bureau must update your report before Day 30 ends.</td>
                      <td className="p-3 font-bold text-amber-800">Download fresh credit report to verify DPD removal.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 31 Onwards</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Penalty &amp; Ombudsman</td>
                      <td className="p-3">Rs 100/day CIBIL delay penalty starts accruing automatically.</td>
                      <td className="p-3 font-bold text-slate-900">File RBI Ombudsman complaint on cms.rbi.org.in.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10 */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: Lifetime Free &amp; Auto-Renewal
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Not every unused credit card dispute looks the same. Here is how RBI protections apply to four common real-world situations in India.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Mis-Sold Lifetime Free (LTF) Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents often promise a Lifetime Free card but issue a paid variant. If you have promotional emails or call recordings, the bank must convert it to LTF, refund fees, and clear your CIBIL.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Card Auto-Renewed After Expiry
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks cannot silently issue and activate a replacement card upon expiry and charge annual fees without your usage or consent. Unactivated renewal cards fall under the 30-day closure rule.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Bundled Salary Account Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When you switch jobs, your salary account converts to a regular savings account and the free bundled card may start billing annual fees. You can demand closure and fee waiver if not notified.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Already Paid or Settled Under Pressure
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Even if you paid the disputed fee or settled the card just to stop recovery calls, you can still file an RBI Ombudsman complaint for illegal fee billing and demand removal of the &quot;Settled&quot; tag.
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
                Frequently Asked Questions: Unused Card CIBIL Fix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers on unused credit card annual fees, RBI dormant closure rules, CIBIL dispute timelines, and statutory compensation.
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
                  <strong>RBI Master Direction on Credit Cards:</strong> RBI/2022-23/92, DoR.AUT.REC.No.27/24.01.041/2022-23 (updated March 7, 2024) governing unactivated card closure, 1-year dormant closure, 7-day closure timeline, and Rs 500/day penalty.
                </li>
                <li>
                  <strong>RBI CIBIL Rectification Circular:</strong> RBI/2023-24/72, DoR.FIN.REC.48/20.16.003/2023-24 dated October 26, 2023, mandating 30-day dispute resolution and Rs 100 per calendar day delay compensation.
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005:</strong> Section 21(3) granting borrowers the statutory right to request correction of inaccurate credit data.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Binding online adjudication for bank fee disputes, delayed closures, and wrongful CIBIL reporting.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) and Section 39 providing compensation for deficiency in banking service and wrongful credit score damage.
                </li>
              </ul>

              {/* Outbound Authority Badges */}
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

              {/* Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
                  </Link>
                  <Link href="/services/credit-score-builder" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Score Builder
                  </Link>
                  <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Overlimit Fee RBI Refund
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Guidelines
                  </Link>
                  <Link href="/rbi-5000-per-day-delay-compensation-property-documents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Rs 5,000/Day Property Rule
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
                Specialist in RBI credit card regulations, CIBIL dispute rectification, and banking ombudsman escalations helping Indian cardholders reverse unfair fees and protect credit scores.
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
                  CIBIL &amp; FEE DISPUTE HELP
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Unused Card Fee Ruined Your CIBIL?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team drafts RBI Master Direction notices, forces banks to reverse annual fees and late charges, removes wrongful DPD/NPA marks, and claims daily compensation.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Dispute Fee &amp; Fix CIBIL Now
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
                  <span><strong>Fee &amp; GST Reversal:</strong> Challenge illegal dormant card billing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL DPD/NPA Removal:</strong> Rectify score under CICRA Section 21.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Daily Penalty Claims:</strong> Enforce Rs 500/day &amp; Rs 100/day rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Filing:</strong> Complete online escalation support.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/services/credit-card-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Settlement Guide
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Resolve overdue card debt &rarr;</span>
                </Link>

                <Link
                  href="/services/credit-score-builder"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Score Builder Program
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Rebuild CIBIL after defaults &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-overlimit-fee-without-consent-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Overlimit Fee RBI Refund Rule
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Reverse unauthorized charges &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
