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

export default function FdBackedCreditCardDefaultClient() {
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
    { id: 'statutory-framework', label: '1. Banker Lien & RBI Secured Card Law' },
    { id: 'deposit-liquidation-mechanics', label: '2. How FD Liquidation Works' },
    { id: 'financial-math-surplus-shortfall', label: '3. Surplus Refund vs Shortfall Math' },
    { id: 'cibil-credit-score-impact', label: '4. CIBIL Score Impact & Rules' },
    { id: 'visual-blueprint', label: '5. Visual Liquidation Blueprint' },
    { id: 'court-precedents', label: '6. Supreme Court FD Lien Rulings' },
    { id: 'proactive-closure-vs-default', label: '7. Voluntary vs Forced Liquidation' },
    { id: 'step-by-step-sop', label: '8. Step-by-Step Debt Exit SOP' },
    { id: 'escalation-matrix', label: '9. 3-Tier RBI Escalation Matrix' },
    { id: 'procedural-timeline', label: '10. Default to FD Adjustment Timeline' },
    { id: 'specialized-scenarios', label: '11. Joint FDs, Tax-Saver & Shortfalls' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Does the bank cut unpaid credit card bills from my FD right after the due date?',
      a: 'No. Banks do not break your Fixed Deposit on the day after a missed due date. For 60 to 90 days, the bank charges 36% to 45% yearly interest, late fees, and 18% GST before breaking the FD.'
    },
    {
      q: 'Does defaulting on an FD-backed credit card lower my CIBIL score?',
      a: 'Yes. Even though your card is backed by a deposit, banks report every missed due date to CIBIL, Experian, Equifax, and CRIF. Waiting 60 to 90 days for forced FD liquidation can cut your score by 80 to 130 points.'
    },
    {
      q: 'Can a bank break my pledged Fixed Deposit without court permission?',
      a: 'Yes. Under Section 171 of the Indian Contract Act and your card terms, the bank holds a specific lien and right of set-off on your FD. On default, the bank can break the deposit directly without a court order.'
    },
    {
      q: 'What happens to the leftover FD money after the bank clears my card bill?',
      a: 'The bank must return every extra rupee to you. After deducting total card dues and any early FD breaking penalty of 0.5% to 1%, the bank transfers the surplus principal and interest to your savings account.'
    },
    {
      q: 'What if my credit card bill grows bigger than my Fixed Deposit value?',
      a: 'Heavy interest, late fees, and 18% GST can push your total bill above your FD amount. After the bank uses the full FD, the unpaid balance becomes an unsecured shortfall that you can pay or settle via OTS.'
    },
    {
      q: 'Can I ask the bank to close my card and adjust dues from my FD early?',
      a: 'Yes. If you lack cash to pay a bill, write to the bank before 30 days past due and request voluntary closure against your FD. This stops 42% card interest early and protects your CIBIL payment record.'
    },
    {
      q: 'Does the RBI ₹500 per day penalty apply to FD-backed credit card closure?',
      a: 'Yes. Under Paragraph 9 of the RBI Credit Card Directions 2022, once card dues are zero, the bank must close the card and lift the FD lien within 7 working days. Delays past 7 days carry a ₹500 daily penalty.'
    },
    {
      q: 'Will my CIBIL report show Settled or Closed after FD liquidation?',
      a: 'If your Fixed Deposit covers 100% of the billed principal, interest, and fees, the bank must mark the card as Closed. A Settled tag appears only if a shortfall remains and the bank waives part of it.'
    },
    {
      q: 'Can a bank seize a joint FD held with my spouse for my card shortfall?',
      a: 'No. In Anumati v. Punjab National Bank (2004), the Supreme Court ruled that a bank cannot set off a joint Either or Survivor deposit for one holder personal debt without the co-holder written consent.'
    },
    {
      q: 'Can a 5-year tax-saving FD be used or broken for a secured credit card?',
      a: 'No. Under the Bank Term Deposit Scheme 2006, 5-year Section 80C tax-saver deposits cannot be pledged as collateral for a credit card or broken before five years.'
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
            <span>RBI Credit Card Directions 2022 &amp; Section 171 Lien Law</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            What Happens When You Default on an FD Credit Card?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Banks do not break your Fixed Deposit on day one after a missed bill. Learn how 42% card interest eats into your deposit, how RBI closure rules protect your surplus funds, and how to save your CIBIL score.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect FD &amp; Resolve Card Debt</span>
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
                  <span>Statutory Cardholder Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Section 171 Contract Act &amp; RBI Credit Card Directions, 2022.
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
                <span>EXECUTIVE BRIEF: FD-BACKED CREDIT CARD LIQUIDATION RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Day-1 Deposit Cut:</strong> Banks wait 60 to 90 days before breaking your FD. During this delay, 36% to 45% yearly interest, late fees, and 18% GST shrink your savings.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Direct Set-Off Power:</strong> Under Section 171 of the Indian Contract Act and card MITC rules, the bank holds a legal lien on your FD and can liquidate it without court orders.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Full Surplus Refund Right:</strong> After deducting your card bill and a 0.5% to 1% early breaking fee, the bank must send every leftover rupee and net FD interest to your bank account.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Heavy CIBIL Score Drop:</strong> Letting the bank force-break your FD adds 30, 60, and 90 Days Past Due (DPD) marks on CIBIL, cutting your score by 80 to 130 points.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">7-Day Closure &amp; ₹500/Day Penalty:</strong> Once card dues reach zero, the bank must close the card and lift the FD lien in 7 working days or pay ₹500 per day under RBI rules.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Legal Framework: Banker Lien & RBI Secured Card Law */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Central Bank Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Legal Framework: Banker Lien &amp; RBI Secured Card Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Millions of Indians use Fixed Deposit (FD) backed credit cards to build or fix their credit scores. Popular options include SBI Unnati, IDFC FIRST WOW, ICICI Instant Platinum, Kotak 811 Dream Different, Axis Insta Easy, and OneCard. Usually, the bank gives you a credit limit equal to 75% to 100% of your deposit.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you open this card, the bank places a legal hold called a <strong>lien</strong> on your Fixed Deposit. While the lien is active, your deposit keeps earning bank FD interest every quarter. However, you cannot withdraw or break the FD until you close the credit card and pay every rupee owed.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Two main Indian laws govern what happens if you stop paying your bill. First, <strong>Section 171 of the Indian Contract Act, 1872</strong> and your card&apos;s Most Important Terms and Conditions (MITC) give the bank a right of lien and set-off. Set-off means the bank can use your deposit money to clear your unpaid card bill.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, the <strong>RBI (Credit Card and Debit Card - Issuance and Conduct) Directions, 2022</strong> protect you from unfair bank conduct. Under these RBI rules, banks must give a 7-day notice before reporting default to credit bureaus, refund surplus FD money promptly, and close zero-due cards within 7 working days.
              </p>
            </section>

            {/* SECTION 2: How Fixed Deposit Liquidation Works After Card Default */}
            <section id="deposit-liquidation-mechanics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Lien Invocation &amp; Premature Encashment</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. How Fixed Deposit Liquidation Works After Card Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many cardholders make a costly mistake when cash gets tight. They assume that since the bank already holds their Fixed Deposit, skipping the monthly bill is harmless. They expect the bank to cut the bill from the FD right away with zero penalty.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In reality, banks never liquidate your FD on day one. Your FD pays you only 6% to 7% yearly interest, while unpaid credit card bills earn the bank 36% to 45% yearly finance charges plus 18% GST. Waiting 60 to 90 days allows the bank to collect peak fees from your locked savings.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI rules, you first get a 3-day grace period past the payment due date. If you still do not pay by day four, the bank adds late payment fees and daily interest from the date of each swipe. Your card is blocked for new spends once dues stay unpaid for 30 to 60 days.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Forced deposit liquidation usually happens at <strong>60 to 90 Days Past Due (DPD)</strong>, or sooner if rising fees push your bill above 95% of the FD value. At that stage, the bank breaks your FD early, forecloses any active card EMIs, deducts the total bill, and closes the card permanently.
              </p>
            </section>

            {/* SECTION 3: Financial Math: Surplus FD Refund vs Debt Shortfall */}
            <section id="financial-math-surplus-shortfall" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Deposit Appropriation &amp; Balance Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Financial Math: Surplus FD Refund vs Debt Shortfall
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a bank breaks your FD early, two deductions happen at the same time. First, the bank lowers your FD interest rate by 0.5% to 1% as a premature withdrawal penalty. Second, it subtracts your card principal, unbilled EMIs, monthly interest, late fees, and 18% GST.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Depending on how much of your credit limit you used, liquidation ends in either a <strong>surplus refund</strong> or an <strong>unsecured debt shortfall</strong>. Look at the comparison below on a ₹1,00,000 Fixed Deposit after 90 days of non-payment.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">FD Liquidation Ledger on a ₹1,00,000 Pledged Deposit</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">90-Day Default Math</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Ledger Component</th>
                        <th className="p-3">Case A: Moderate Card Spend</th>
                        <th className="p-3">Case B: Maxed 90% to 100% Limit</th>
                        <th className="p-3 text-right">Applicable Rule</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">FD Principal + Net Interest</td>
                        <td className="p-3 font-mono text-emerald-700 font-semibold">₹1,04,800</td>
                        <td className="p-3 font-mono text-emerald-700 font-semibold">₹1,03,500</td>
                        <td className="p-3 text-right text-slate-500">After 1% early break cut</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Original Card Swipes</td>
                        <td className="p-3 font-mono">₹58,000</td>
                        <td className="p-3 font-mono">₹92,000</td>
                        <td className="p-3 text-right text-slate-500">Billed + unbilled principal</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">3-Month APR, Late Fees &amp; GST</td>
                        <td className="p-3 font-mono text-amber-700 font-semibold">+ ₹11,500</td>
                        <td className="p-3 font-mono text-rose-600 font-semibold">+ ₹22,200</td>
                        <td className="p-3 text-right text-slate-500">3.5%/mo + late fee + 18% GST</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Total Card Dues at Day 90</td>
                        <td className="p-3 font-mono font-bold text-slate-900">₹69,500</td>
                        <td className="p-3 font-mono font-bold text-slate-900">₹1,14,200</td>
                        <td className="p-3 text-right text-slate-500">Appropriated under Sec 171</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Final Post-FD Outcome</td>
                        <td className="p-3 font-mono text-emerald-700">₹35,300 Refund to You</td>
                        <td className="p-3 font-mono text-rose-700">₹10,700 Shortfall Owed</td>
                        <td className="p-3 text-right text-[#1886ff] font-mono">Surplus Payout / OTS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: CIBIL Score Impact: Why Secured Card Default Hurts */}
            <section id="cibil-credit-score-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Reporting &amp; CICRA Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Score Impact: Why Secured Card Default Hurts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most borrowers take an FD-backed credit card specifically to lift a weak CIBIL score above 750. Letting that very card slip into forced FD liquidation defeats your main goal. Credit bureaus treat missed bills on secured cards just as strictly as unsecured cards.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI rules effective January 2025, banks send repayment updates to CIBIL, Experian, Equifax, and CRIF every 15 days. Before reporting you as a defaulter, the bank must send you a <strong>7-day advance notice</strong> under the RBI Credit Card Master Direction.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once the bank breaks your FD and recovers 100% of total dues, your account status must show as <strong>&quot;Closed&quot;</strong> with zero overdue balance, not &quot;Settled.&quot; However, the 30, 60, and 90 DPD late marks stay visible on your monthly payment grid for 36 months.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A <strong>&quot;Settled&quot;</strong> remark appears only if your debt exceeded the FD value and you paid a reduced One-Time Settlement (OTS) on the leftover shortfall. If a bank wrongly shows an overdue balance more than 30 days after FD adjustment, you can claim <strong>₹100 per day compensation</strong> under RBI Circular RBI/2023-24/72.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: FD Lien &amp; Deposit Liquidation Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual guide illustrates how a bank lien links your Fixed Deposit to your secured credit card, and how RBI rules protect your surplus refund upon closure.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/fd-backed-secured-credit-card-default-liquidation-rules.jpg"
                    alt="FD-Backed Secured Credit Card Default and Fixed Deposit Liquidation Rules Under RBI Law"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Secured Card &amp; Deposit Protection Framework • RBI Compliant</span>
                  <a
                    href="/images/infographics/fd-backed-secured-credit-card-default-liquidation-rules.jpg"
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

            {/* SECTION 6: Supreme Court Judgments on FD Lien & Right of Set-Off */}
            <section id="court-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Statutory Limits</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Supreme Court Judgments on FD Lien &amp; Right of Set-Off
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts have drawn clear boundaries on when a bank can seize a Fixed Deposit and when it must leave family deposits untouched. These landmark rulings define your legal rights.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Syndicate Bank v. Vijay Kumar (1992)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In (1992) 2 SCC 330, the Supreme Court held that a banker&apos;s lien under Section 171 acts as an implied pledge on Fixed Deposit Receipts. Banks can retain and adjust pledged FDs against unpaid balances.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>PNB v. Surendra Prasad Sinha (1992)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In 1993 Supp (1) SCC 499, the Supreme Court ruled that adjusting an overdue debt from a pledged FDR and crediting the leftover balance to the savings account is lawful and not a criminal breach of trust.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Anumati v. Punjab National Bank (2004)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In (2004) 8 SCC 498, the Supreme Court protected joint depositors. A bank cannot pledge or set off a joint &quot;Either or Survivor&quot; FD for one person&apos;s separate card debt without the co-holder&apos;s consent.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>RBI Para 9 Closure Mandate (2022)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Once all card dues stand cleared or adjusted, the issuer must close the card account and release the FD lien within 7 working days. Any bank delay attracts a mandatory ₹500 per day penalty.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Voluntary FD Adjustment vs Forced Bank Liquidation */}
            <section id="proactive-closure-vs-default" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <UserCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Smart Borrower Strategy</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Voluntary FD Adjustment vs Forced Bank Liquidation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you lose your job or face a medical emergency and cannot pay your FD credit card bill, do not stay silent. Waiting 90 days for the bank to break your FD drains thousands of rupees in avoidable interest and wrecks your CIBIL history.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Instead, contact the bank before your bill crosses 30 days past due and submit a written request for <strong>voluntary card closure via FD adjustment</strong>. Major issuers like SBI Card, IDFC FIRST, ICICI, Kotak, and OneCard allow you to settle the current bill straight from the linked FD and get the surplus cash back right away.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Comparison Parameter</th>
                      <th className="p-3">Voluntary FD Closure (Before Due Date)</th>
                      <th className="p-3">Forced Bank Liquidation (At 90 DPD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Card Interest &amp; Late Fees</td>
                      <td className="p-3 text-emerald-700 font-semibold">Zero extra late fees; stops 42% APR at once</td>
                      <td className="p-3 text-rose-700">3 months of 3.5%/mo interest + late fees + 18% GST</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">CIBIL Score Impact</td>
                      <td className="p-3 text-emerald-700 font-semibold">Clean &quot;Closed&quot; status with 000 on-time track</td>
                      <td className="p-3 text-rose-700">Severe 80 to 130 point drop due to 30/60/90 DPD</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Surplus FD Payout Speed</td>
                      <td className="p-3">Credited within 7 working days of closure</td>
                      <td className="p-3">Locked for 60 to 90+ days until bank triggers break</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Shortfall Debt Risk</td>
                      <td className="p-3 font-semibold text-slate-900">Almost zero since limit is within FD value</td>
                      <td className="p-3 font-semibold text-rose-700">High risk of bill exceeding FD on maxed cards</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 8: Step-by-Step SOP: Exit FD Credit Card Debt Cleanly */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Step-by-Step SOP: Exit FD Credit Card Debt Cleanly
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six verified steps to close an unaffordable FD credit card, recover your remaining deposit, or settle any leftover shortfall legally.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Stop Recurring Auto-Debits &amp; Check Unbilled EMIs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Cancel all standing instructions on SI-Hub and merchant apps first. Check your card app for unbilled EMIs so you know the exact foreclosure total before breaking the FD.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Submit Written FD Set-Off &amp; Closure Request
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email the bank&apos;s official card closure desk or use the mobile app option to close the card against the linked FD. Save the ticket number and timestamped email proof.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Audit the FD Liquidation &amp; Interest Statement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ask the bank for a full breakup showing FD principal, interest earned, early withdrawal penalty (0.5% to 1%), TDS deducted, and exact card dues adjusted.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Enforce the 7-Working-Day Lien Release Rule
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Confirm that your surplus FD money reaches your bank account within 7 working days. If you cleared dues in cash and the bank delays lifting the FD lien past 7 working days, demand ₹500 per day.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Settle Any Post-FD Shortfall via Written OTS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If late fees pushed your bill above the FD amount, the leftover balance is unsecured debt. Negotiate a formal One-Time Settlement (OTS) waiving penal charges and collect a No Dues Certificate.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Check All 4 Credit Bureaus After 30 Days
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pull your CIBIL, Experian, Equifax, and CRIF reports after 30 days. Ensure the card shows zero balance and &quot;Closed&quot; (when paid 100% from FD), or raise a CICRA dispute for ₹100/day delay pay.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Sometimes banks stall your voluntary FD adjustment request to keep charging interest, hold back surplus deposit funds, or fail to lift an FD lien after full repayment. Use this official three-tier escalation channel to force compliance.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Relief &amp; Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Card Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 Working Days</td>
                      <td className="p-3">Processes FD lien removal, shares breakup sheet, and reverses post-request charges.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">10 to 15 Working Days</td>
                      <td className="p-3">Releases stuck surplus FD balance and credits ₹500/day card closure delay penalty.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-Filing</td>
                      <td className="p-3">Binding orders via cms.rbi.org.in for surplus refund, CIBIL fix, and statutory penalties.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Default Timeline: Due Date to FD Adjustment Stages */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Default Timeline: Due Date to FD Adjustment Stages
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking the exact timeline after a missed FD credit card bill shows you when to step in before heavy penalties eat up your deposit.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Days Past Due</th>
                      <th className="p-3">Account Stage</th>
                      <th className="p-3">Bank Action on Card &amp; FD</th>
                      <th className="p-3">Best Cardholder Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to Day 3</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">RBI Grace Period</td>
                      <td className="p-3">No late fee or CIBIL default tag allowed under RBI 3-day rule.</td>
                      <td className="p-3">Pay minimum or full bill right away to keep a clean record.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 4 to Day 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0 Delinquency</td>
                      <td className="p-3">Late fee, 3.5% monthly interest, and 18% GST start; FD stays untouched.</td>
                      <td className="p-3 font-semibold text-slate-900">Request voluntary FD adjustment if you cannot arrange cash.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to Day 60</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">SMA-1 &amp; Card Block</td>
                      <td className="p-3">Card swipes blocked; 7-day notice issued before CIC default report.</td>
                      <td className="p-3">Submit urgent written set-off demand to stop Month-2 fees.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 61 to Day 90</td>
                      <td className="p-3 font-mono text-[11px] text-rose-700 font-bold">Lien Liquidation</td>
                      <td className="p-3">Bank breaks FD prematurely, appropriates dues, and closes card.</td>
                      <td className="p-3 font-bold text-amber-800">Audit FD interest sheet and verify surplus credit to bank.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 91 and Beyond</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Post-Closure / OTS</td>
                      <td className="p-3">Surplus refunded, or recovery starts if bill exceeded FD amount.</td>
                      <td className="p-3 font-bold text-slate-900">Settle any shortfall via OTS and verify CIBIL closure tag.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Special Cases: Joint FDs, Tax-Saver FDs & Shortfalls */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Banking Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                11. Special Cases: Joint FDs, Tax-Saver FDs &amp; Shortfalls
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Real disputes often arise when borrowers hold other deposits in the same bank or use fintech app cards. Here is how Indian law treats these four special cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    5-Year Tax-Saver FDs (Section 80C)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Bank Term Deposit Scheme, 2006, 5-year tax-saving FDs carry a strict statutory lock-in. They cannot be pledged for a credit card or broken before five years even if you default on another loan.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Separate Joint FDs With Family Members
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your pledged FD falls short of your card bill, the bank cannot touch a separate joint FD held with your spouse or parent unless that co-holder signed a guarantee, per Anumati v. PNB.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Other Single-Holder FDs in Same Bank
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Watch out for general lien under Section 171. If your card bill exceeds the pledged FD, the bank can place a hold on another single-name FD or savings balance you keep in that same bank.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-indigo-600" />
                    Fintech Co-Branded FD Credit Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    On app-based secured cards, your deposit sits with an RBI-licensed partner bank such as SBM Bank, Federal Bank, or South Indian Bank, insured up to ₹5 Lakh by DICGC. All RBI 7-day closure rules apply.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 12: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 13: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: FD Credit Card Liquidation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers on Fixed Deposit lien liquidation, surplus refunds, CIBIL impact, shortfall settlement, and RBI cardholder rights.
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

            {/* SECTION 14: Citations & Outbound Authority Grid */}
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
                  <strong>RBI Master Direction (Credit Card and Debit Card - Issuance and Conduct) Directions, 2022:</strong> RBI/2022-23/92, DoR.AUT.REC.No.27/24.01.041/2022-23 (updated March 7, 2024) - Paragraph 9 (7-Working-Day Closure &amp; ₹500/Day Penalty) and CIC 7-Day Pre-Reporting Notice.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 171 (General Lien of Bankers) and Contractual Right of Set-Off on Pledged Term Deposits.
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> Syndicate Bank v. Vijay Kumar &amp; Ors., (1992) 2 SCC 330; Punjab National Bank v. Surendra Prasad Sinha, 1993 Supp (1) SCC 499; Anumati v. Punjab National Bank, (2004) 8 SCC 498.
                </li>
                <li>
                  <strong>RBI Credit Bureau Compensation &amp; Reporting Circulars:</strong> RBI/2023-24/72 (₹100/Day Delay Compensation Beyond 30 Days) and RBI/2024-25/60 (15-Day Fortnightly Credit Reporting).
                </li>
                <li>
                  <strong>Bank Term Deposit Scheme, 2006:</strong> Ministry of Finance Notification S.O. 1220(E) Prohibiting Pledge or Encumbrance of 5-Year Section 80C Tax-Saving Fixed Deposits.
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
                  <a href="https://www.dicgc.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>DICGC Deposit Insurance</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
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
                  <Link href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 171 Banker Set-Off Law
                  </Link>
                  <Link href="/can-bank-freeze-joint-savings-account-co-holder-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Joint Account Freeze Rules
                  </Link>
                  <Link href="/rupay-credit-card-upi-debt-default-settlement-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RuPay UPI Credit Card Default
                  </Link>
                  <Link href="/add-on-supplementary-credit-card-default-liability" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Add-On Card Default Liability
                  </Link>
                  <Link href="/credit-card-settlement-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Process
                  </Link>
                  <Link href="/credit-card-npa-timeline" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card NPA Timeline
                  </Link>
                  <Link href="/credit-card-minimum-due-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Escape Minimum Due Trap
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹100/Day CIBIL Update Rule
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After Settlement
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
                Specialist in credit card disputes, Section 171 banker lien defense, RBI statutory guidelines, and debt settlement resolutions across major Indian banks.
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
                  SECURED CARD LEGAL HELP
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  FD Locked or Card Bill Higher Than Deposit?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking advocates enforce fast FD lien release, recover stuck surplus deposit funds with ₹500/day RBI penalties, and settle post-FD shortfalls cleanly.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Legal Assessment
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
                  <span><strong>7-Day Lien Release:</strong> Enforce ₹500/day RBI closure delay rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Surplus FD Recovery:</strong> Full audit of interest and breaking fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Shortfall OTS Relief:</strong> Settle leftover unsecured card balances.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Status Audit:</strong> Ensure accurate Closed status across bureaus.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Banker&apos;s Right of Set-Off (Sec 171)
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Savings &amp; deposit lien defense &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-settlement-process"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Settlement Process
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Step-by-step OTS waiver guide &rarr;</span>
                </Link>

                <Link
                  href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI ₹100/Day CIBIL Update Rule
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Fix wrong overdue marks fast &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
