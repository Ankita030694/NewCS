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

export default function PersonalOverdraftAgainstFdClient() {
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
    { id: 'statutory-framework', label: '1. Statutory Framework: RBI Rules' },
    { id: 'margin-sweep-rules', label: '2. RBI 100% Margin Shield & NPA' },
    { id: 'sweep-calculation-matrix', label: '3. Liquidation Math, TDS & Surplus' },
    { id: 'banker-lien-setoff', label: '4. Banker Lien & Section 171 Law' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Audit FD Sweep & Reclaim Surplus' },
    { id: 'borrower-rights', label: '7. Joint FD, CIBIL & Lien Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Margin Breach to Clean Closure' },
    { id: 'specialized-scenarios', label: '10. Tax-Saver, 3rd-Party & Heir FDs' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank break my FD if I default on an overdraft against FD?',
      a: 'Yes. When you take an overdraft against an FD, you sign a pledge and lien letter. If unpaid interest breaches the safety margin or you default, the bank can break your FD early to clear the dues. However, the bank must follow RBI fair notice rules and refund any leftover surplus cash to you.'
    },
    {
      q: 'Does an overdraft against FD turn NPA after 90 days of unpaid interest?',
      a: 'No, not while your FD covers the debt. Under RBI IRACP norms, loans backed by your own bank FD are exempt from the 90-day NPA rule. This shield applies while the FD value stays at or above 100% of total dues. Once unpaid interest crosses the FD value, the margin breaks and sweep rules apply.'
    },
    {
      q: 'How much interest penalty applies if the bank liquidates my FD early?',
      a: 'Under RBI deposit rules, banks recalculate your FD interest at the card rate for the actual time the money stayed in the bank. They then cut a premature closure fee, usually 0.5% to 1%, only if that fee was shared with you when you opened the FD.'
    },
    {
      q: 'What happens to the extra money left after the bank closes my OD from my FD?',
      a: 'Any cash left after paying the OD principal and valid interest belongs solely to you. The bank holds this surplus in trust and must credit it straight to your linked savings account. A bank cannot keep your surplus without a valid written legal ground.'
    },
    {
      q: 'Can a bank report my FD-closed overdraft as Settled or Written Off on CIBIL?',
      a: 'No. If the bank breaks your FD and recovers 100% of the OD balance, the loan is fully paid. The bank must report the account as Closed with zero balance to CIBIL, Experian, CRIF, and Equifax. If it marks Settled or Overdue, raise a dispute and claim ₹100 per day for delays past 30 days.'
    },
    {
      q: 'Can a bank break a joint FD for a single holder overdraft default?',
      a: 'No, not without written consent from every joint holder. In Anumati v. Punjab National Bank (2004), the Supreme Court held that an Either or Survivor clause does not let one spouse or co-holder pledge a joint FD alone. Breaking it without all signatures is a deficiency in service.'
    },
    {
      q: 'Can a bank charge compounding penal interest on an overdue FD overdraft?',
      a: 'No. Under RBI Circular DoR.MCS.REC.28 on Penal Charges (effective April 1, 2024), banks cannot add extra penal interest to your OD rate or charge interest on late fees. They may only levy a flat, fair penal charge clearly printed in your Key Facts Statement.'
    },
    {
      q: 'How does TDS on FD interest affect my overdraft margin and sweep refund?',
      a: 'Under Section 194A (as revised by Finance Act 2025), banks cut 10% TDS when yearly FD interest crosses ₹50,000 for regular citizens or ₹1,00,000 for senior citizens. Even if you take an OD, TDS cuts your net FD growth, causing faster margin breaches. If early closure lowers your actual FD interest, claim the extra TDS back in your ITR.'
    },
    {
      q: 'How soon must the bank lift the FD lien if I repay my overdraft in cash?',
      a: 'Under RBI Circular DoR.MCS.REC.38, lenders must lift the lien and return any original physical FD receipt within 30 calendar days of full OD closure. If the bank causes a delay past 30 days, it must pay you ₹5,000 per day in statutory delay compensation.'
    },
    {
      q: 'How does CredSettle help if my bank made an unfair FD sweep or wrong CIBIL mark?',
      a: 'CredSettle checks your OD and FD sweep math, spots illegal penal charges, and drafts legal notices to Bank Nodal Officers. We help you recover withheld surplus funds, challenge unauthorized joint FD sweeps, and update wrong CIBIL tags to Closed.'
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
            <span>RBI IRACP Norms &amp; Section 171 Contract Act Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Bank Liquidation &amp; Interest Rules on Overdraft Against FD
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Learn the exact Indian banking laws on personal overdraft against fixed deposit default. Audit bank FD sweep math, claim your leftover surplus cash, stop illegal joint FD seizure, and protect your CIBIL score under RBI rules.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Audit My FD Sweep &amp; CIBIL</span>
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
                  <span>Statutory Depositor Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI IRACP Norms, Deposit Directions, and Section 171 of the Contract Act.
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
                <span>EXECUTIVE BRIEF: OVERDRAFT AGAINST FD DEFAULT LAW</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">100% Margin NPA Shield:</strong> Under RBI IRACP norms, an overdraft against your own bank FD stays out of NPA past 90 days. This shield holds while your FD covers 100% of total dues.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Margin Breach Sweep:</strong> Unpaid OD interest grows 1% to 2% faster than your FD rate. Once dues cross the FD value, the bank can break the FD early to close the overdraft.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict Surplus Refund Right:</strong> After clearing valid OD dues, the bank must credit all leftover FD cash directly to your linked savings account.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Joint FD Consent Rule:</strong> Under Supreme Court law in Anumati v. PNB, a bank cannot break a joint FD for one holder&apos;s personal OD without every holder&apos;s written consent.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Clean CIBIL &amp; ₹5,000/Day Lien Rule:</strong> A full FD sweep must show as Closed on CIBIL, not Settled. If you pay cash instead, lien removal past 30 days pays ₹5,000 per day.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Framework: RBI Rules on Overdraft Against FD */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Central Bank Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Framework: RBI Rules on Overdraft Against FD
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many people in India open a personal overdraft (OD) against their Fixed Deposit (FD) to meet sudden cash needs. Instead of breaking the FD early, you draw up to 75% to 95% of the deposit value as a credit line. You pay interest only on the cash you use, usually at 1% to 2% above your FD rate.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Problems start when you stop paying monthly OD interest or ignore bank alerts. Because the bank holds a lien on your deposit, people often worry the bank will take their whole FD or ruin their CIBIL score overnight. In reality, strict laws guard every step of an FD overdraft default.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Five main rules govern personal overdraft against fixed deposit default in India. These are the RBI Master Circular on IRACP norms, the RBI Master Direction on Interest Rate on Deposits, the RBI Penal Charges Circular (DoR.MCS.REC.28), the RBI Lien Release Circular (DoR.MCS.REC.38), and Section 171 of the Indian Contract Act, 1872.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Note one firm RBI rule upfront. Banks can only grant an overdraft against a term deposit kept with the same bank. Under RBI Loans and Advances norms, banks are strictly barred from giving personal loans or overdrafts against FD receipts issued by other banks.
              </p>
            </section>

            {/* SECTION 2: RBI 100% Margin Shield: NPA Exemption & Sweep Triggers */}
            <section id="margin-sweep-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>IRACP Out-of-Order Rules &amp; Margin Erosion</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI 100% Margin Shield: NPA Exemption &amp; Sweep Triggers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Normally, an overdraft account becomes &quot;out of order&quot; and turns into a Non-Performing Asset (NPA) after 90 days. This happens if the balance stays above the limit, if no credits arrive for 90 days, or if credits do not cover the debited interest.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, RBI IRACP norms create a major shield for FD-backed overdrafts. Advances backed by term deposits with the same bank need not be marked as NPAs, even if interest stays unpaid past 90 days. This shield holds true as long as adequate margin stays in the account.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Adequate margin means the net value of your FD stays at or above 100% of your total OD balance plus unpaid interest. Why does this margin still break over time? Because your OD charges a 1% to 2% higher rate than your FD earns, and TDS cuts your net FD interest each year.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once unpaid OD interest eats up your 5% to 20% safety buffer, your dues cross the FD&apos;s break value. This event is called a margin breach. At that point, the NPA shield ends, and the bank&apos;s system triggers a margin sweep to break the FD and close the overdraft.
              </p>
            </section>

            {/* SECTION 3: Liquidation Math: Premature FD Penalty, TDS & Surplus */}
            <section id="sweep-calculation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Premature Liquidation Math &amp; Tax Deductions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Liquidation Math: Premature FD Penalty, TDS &amp; Surplus
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a bank sweeps and breaks your FD before maturity, it must follow the RBI Master Direction on Interest Rate on Deposits. The bank recalculates your FD interest at the card rate for the exact tenure the deposit stayed active. It then deducts its stated premature exit fee, usually 0.5% to 1%.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tax Deducted at Source (TDS) also shapes your payout. Under Section 194A (updated by Finance Act 2025), banks cut 10% TDS once yearly FD interest crosses ₹50,000 for regular citizens. For senior citizens, the limit is ₹1,00,000 per bank, or 20% without PAN. If early closure lowers your actual FD interest below what was taxed earlier, claim that excess TDS back in your Income Tax Return.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Look at the sample audit ledger below for a ₹5,00,000 FD earning 7.0% p.a. with a ₹4,25,000 OD limit (85% LTV) at 8.5% p.a., broken after 18 months of unpaid interest.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample FD Margin Sweep &amp; Surplus Audit Ledger</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹5,00,000 FD vs ₹4,25,000 OD</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Ledger Component</th>
                        <th className="p-3">Applicable Banking Rule</th>
                        <th className="p-3">Legal Audit Check</th>
                        <th className="p-3 text-right">Illustrative Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">1. Original FD Principal</td>
                        <td className="p-3">Base Pledged Term Deposit</td>
                        <td className="p-3 text-emerald-700 font-semibold">100% Protected Deposit</td>
                        <td className="p-3 text-right font-bold text-slate-900 font-mono">₹5,00,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">2. Recalculated FD Interest</td>
                        <td className="p-3">18-Month Card Rate Less 1% Exit Fee</td>
                        <td className="p-3 text-amber-700 font-semibold">Verify Disclosed Penalty Rate</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">+ ₹43,100</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">3. TDS Already Deducted</td>
                        <td className="p-3">Section 194A (10% Above ₹50k/₹1L)</td>
                        <td className="p-3 text-blue-700 font-semibold">Match With Form 16A &amp; AIS</td>
                        <td className="p-3 text-right font-bold text-slate-600 font-mono">- ₹0 to ₹4,310</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">4. Total OD Principal + Interest</td>
                        <td className="p-3">₹4,25,000 Utilized at 8.5% p.a.</td>
                        <td className="p-3 text-rose-600 font-semibold">Strip Any Illegal Penal Interest</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">- ₹4,81,900</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">5. Mandatory Surplus Refund</td>
                        <td className="p-3 text-[#1886ff]">Net FD Proceeds Minus OD Dues</td>
                        <td className="p-3 text-[#1886ff]">Must Credit Savings Account</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹56,890 to ₹61,200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Banker's Lien & Set-Off: Section 171 Contract Act Law */}
            <section id="banker-lien-setoff" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Contractual Set-Off vs Statutory General Lien</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Banker&apos;s Lien &amp; Set-Off: Section 171 Contract Act Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks often cite Section 171 of the Indian Contract Act, 1872 when they freeze or sweep your fixed deposits. Section 171 grants a banker&apos;s general lien over goods left with the bank for a general balance of account.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Courts draw a clear line between a general lien and a right of set-off. Strictly speaking, cash in an FD is a debt the bank owes you, not physical goods. In Syndicate Bank v. Vijay Kumar (1992), the Supreme Court held that a bank still holds a strong right of set-off over pledged FD receipts to adjust a defaulted loan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even with this power, a bank cannot act in secret or break fair notice norms. First, the bank can sweep the specific FD you pledged only when your OD breaches its margin or matures unpaid. Second, the bank must send you a clear recall alert and an itemized closing sheet showing exact interest and penalty math.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, banks cannot break an unrelated unpledged FD without fair prior notice. They also cannot hold your surplus cash for a time-barred or disputed bill. Under RBI Penal Charges Circular DoR.MCS.REC.28 (effective April 1, 2024), banks cannot pile compounding penal interest on top of your OD rate before sweeping the deposit.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: OD Against FD Default &amp; Closure Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual blueprint shows how RBI IRACP margin rules and banker&apos;s lien limits work together. It also maps your surplus refund rights after an FD overdraft default.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/personal-overdraft-against-fixed-deposit-default-rules.jpg"
                    alt="Personal Overdraft Against Fixed Deposit Default Law and RBI Margin Sweep Rules"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle FD Overdraft Protection Framework • RBI IRACP &amp; Contract Act Compliant</span>
                  <a
                    href="/images/infographics/personal-overdraft-against-fixed-deposit-default-rules.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Audit FD Sweep & Reclaim Your Surplus */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Audit FD Sweep &amp; Reclaim Your Surplus
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Has your bank warned of a margin sweep or already broken your FD? Follow these six clear steps to audit the math and protect your credit report.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Demand the Full OD Ledger &amp; FD Liquidation Sheet
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email your branch for the complete OD interest ledger, original FD receipt terms, and premature closure worksheet. Check the exact date the bank swept the deposit.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Check for Illegal Compounding Penal Interest
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Compare the OD rate charged against your Key Facts Statement (KFS). Flag any added penal interest or hidden fee not printed in the KFS under RBI Circular DoR.MCS.REC.28.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Verify Premature FD Penalty &amp; Surplus Credit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Confirm the bank used the true card rate for your FD holding period and did not overcharge the exit fee. Check that every rupee of leftover surplus hit your savings account.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Collect Your Closure Letter &amp; Form 16A
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Get an official No Dues Certificate (NOC) showing zero OD balance. Also download your updated TDS certificate (Form 16A) so you can reclaim any excess tax in your ITR.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Audit All 4 Credit Bureaus After 15 Days
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under RBI&apos;s fortnightly reporting rule, pull your CIBIL, Experian, CRIF, and Equifax reports after 15 days. Ensure the OD reads &quot;Closed&quot; with ₹0 overdue, never &quot;Settled.&quot;
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: File Nodal &amp; RBI Ombudsman Claims for Breaches
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Did the bank hold surplus cash, sweep a joint FD unlawfully, or report wrong CIBIL data? Send a written notice to the Nodal Officer and escalate on cms.rbi.org.in.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Legal Rights: Joint FD Consent, CIBIL & Lien Penalties */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Supreme Court Precedents &amp; RBI Compensation Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Legal Rights: Joint FD Consent, CIBIL &amp; Lien Penalties
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts and the RBI enforce strong shields when banks cross the line on FD-backed overdrafts. You can invoke four clear legal rights to reverse unlawful sweeps and claim daily cash penalties.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Supreme Court: Anumati v. PNB (2004)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    An &quot;Either or Survivor&quot; joint FD cannot be pledged or swept for one holder&apos;s personal OD without the other holder&apos;s consent. Breaking it is a clear deficiency in service.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>₹5,000/Day Delay on FD Lien Removal</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you clear your OD with cash instead of breaking the FD, RBI Circular DoR.MCS.REC.38 gives the bank 30 days to lift the lien and return your FDR, or pay ₹5,000 per day.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>₹100/Day Penalty for Wrong CIBIL Tag</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A full FD sweep pays 100% of your debt and must show as &quot;Closed&quot; on CIBIL. If a wrong &quot;Settled&quot; or overdue tag is not fixed in 30 days, claim ₹100 per day under RBI rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Defense Against Negligent Shortfalls</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Did the bank delay sweeping your FD past 100% LTV and now demand a shortfall? Cite Section 73 Contract Act (duty to cut loss) and RBI Penal Charges rules.
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
                Did your branch hold FD surplus cash, delay lifting an FD lien, or leave CIBIL wrong? Use the official RBI three-tier complaint ladder below.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Relief &amp; Order</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Provides itemized FD sweep math, releases surplus cash, and lifts active FD liens.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Reverses illegal penal interest, fixes CIBIL tags to Closed, and reviews joint FD claims.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Orders binding refunds, ₹5,000/day lien penalties, and ₹100/day CIBIL awards via cms.rbi.org.in.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Milestones: Margin Breach to Clean Closure */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Milestones: Margin Breach to Clean Closure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking each stage from unpaid OD interest to final bureau cleanup helps you act before a silent margin breach costs you premature FD penalties.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Stage</th>
                      <th className="p-3">Account Status</th>
                      <th className="p-3">Bank Action Triggered</th>
                      <th className="p-3">Smart Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">LTV Below 90%</td>
                      <td className="p-3 font-mono text-[11px]">Standard (Safe Margin)</td>
                      <td className="p-3">Monthly OD interest debits continue; FD keeps earning interest.</td>
                      <td className="p-3">Pay monthly OD interest to keep your FD compounding intact.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">LTV 90% to 95%</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Margin Watch Zone</td>
                      <td className="p-3">Bank sends SMS and email alerts warning of low collateral cover.</td>
                      <td className="p-3">Top up interest or ask for partial closure to avoid full FD breakage.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">LTV Crosses 98%-100%</td>
                      <td className="p-3 font-mono text-[11px] text-rose-700 font-bold">Margin Breach &amp; Sweep</td>
                      <td className="p-3">NPA shield ends; bank breaks FD early to wipe out the OD balance.</td>
                      <td className="p-3 font-bold text-amber-800">Demand full sweep math and immediate savings credit of surplus cash.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 1 to 15 Post-Sweep</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Bureau Reporting</td>
                      <td className="p-3">Bank reports zero-balance &quot;Closed&quot; status in fortnightly CIC batch.</td>
                      <td className="p-3 font-bold text-slate-900">Collect NOC, Form 16A, and check all 4 credit bureau reports.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31+ (Cash Closure)</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">Lien Penalty Active</td>
                      <td className="p-3">Unlifted FD lien or wrong CIBIL tag enters statutory RBI breach.</td>
                      <td className="p-3">Claim ₹5,000/day for lien delay or ₹100/day for CIBIL dispute delay.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Special Cases: Tax-Saver, Third-Party & Deceased FDs */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: Tax-Saver, Third-Party &amp; Deceased FDs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Not every fixed deposit follows standard sweep rules. Special RBI and tax laws apply when your deposit is a tax-saver FD, belongs to a relative, or involves a deceased holder.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#1886ff]" />
                    5-Year Tax-Saver FDs (Section 80C)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Income Tax and RBI rules, 5-year tax-saver FDs have a strict lock-in. They cannot be pledged for an overdraft or broken early for loan recovery, except upon the holder&apos;s death.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Third-Party FDs (Parent or Spouse)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A bank can sweep a parent&apos;s or spouse&apos;s FD only if they signed a valid third-party pledge and completed KYC. Any leftover surplus after OD closure must be refunded to the FD owner, not the borrower.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-600" />
                    Matured FD Without Auto-Renewal
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your pledged FD matures without renewal instructions, RBI rules pay only the lower of the savings rate or FD rate on overdue funds. Renew or adjust the FD promptly to stop interest loss.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Deceased Depositor &amp; Legal Heir Claims
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a depositor passes away, banks normally waive premature FD closure penalties. Legal heirs or nominees can ask the bank to adjust the OD cleanly and release the full surplus without exit fees.
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
                Frequently Asked Questions: Overdraft Against FD Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers to the most common questions on personal overdraft against fixed deposit defaults, RBI margin shields, premature penalties, TDS, and CIBIL rights.
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
                  <strong>RBI Master Circular on IRACP Norms:</strong> Prudential Norms on Income Recognition, Asset Classification and Provisioning (100% Margin Exemption for Advances Against Term Deposits &amp; Out-of-Order Overdraft Criteria).
                </li>
                <li>
                  <strong>RBI Master Direction on Interest Rate on Deposits:</strong> Premature Withdrawal Penalty Disclosure, Auto-Renewal Instructions, and Overdue Term Deposit Interest Rules.
                </li>
                <li>
                  <strong>RBI Circulars DoR.MCS.REC.28 &amp; DoR.MCS.REC.38:</strong> Fair Lending Ban on Compounding Penal Interest (effective April 1, 2024) and Mandatory 30-Day Lien Removal / ₹5,000 Per Day Compensation Rule.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872 &amp; Supreme Court Precedents:</strong> Section 171 (Banker&apos;s General Lien), Syndicate Bank v. Vijay Kumar (1992 SC), and Anumati v. Punjab National Bank (2004 SC on Joint FD Consent).
                </li>
                <li>
                  <strong>Income Tax Act, 1961 (Section 194A) &amp; RBI Credit Reporting Directives:</strong> Finance Act 2025 FD TDS Thresholds (₹50,000 General / ₹1,00,000 Senior Citizens), Fortnightly CIC Reporting, and ₹100/Day Dispute Compensation.
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
                  <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Income Tax e-Filing Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Dispute Portal</span>
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
                  <Link href="/fd-backed-secured-credit-card-default-liquidation-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    FD Credit Card Liquidation Law
                  </Link>
                  <Link href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Banker&apos;s Right of Set-Off Rules
                  </Link>
                  <Link href="/flexi-hybrid-personal-loan-drop-line-overdraft-settle" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Flexi &amp; Drop-Line OD Settlement
                  </Link>
                  <Link href="/overdraft-cash-credit-od-cc-default-settlement-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    OD &amp; Cash Credit Default Rules
                  </Link>
                  <Link href="/rbi-5000-per-day-delay-compensation-property-documents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹5,000/Day Collateral Rule
                  </Link>
                  <Link href="/rbi-guidelines-on-penal-charges-in-loan-accounts" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Penal Charges Guidelines
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹100/Day CIBIL Penalty
                  </Link>
                  <Link href="/section-59-contract-act-loan-payment-to-principal-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 59 Principal Credit Rule
                  </Link>
                  <Link href="/credit-line-against-nsc-kvp-sovereign-gold-bond-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    NSC, KVP &amp; SGB Credit Line Law
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
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
                Specialist in Indian banking compliance, RBI deposit rules, FD lien defense, and credit bureau dispute repair with deep expertise protecting borrowers from unfair bank recoveries.
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
                  FD SWEEP LEGAL SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Broke Your FD or Hurt Your CIBIL?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking lawyers audit OD sweep math, recover withheld surplus funds, challenge illegal joint FD seizures, and fix wrong CIBIL tags to Closed.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free FD Sweep Audit
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
                  <span><strong>Full Sweep Audit:</strong> Catch excess exit fees and illegal penal rates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Surplus Cash Recovery:</strong> Force instant refund of leftover FD balance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Status Upgrade:</strong> Fix wrong Settled tags to clean Closed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Filing:</strong> Claim ₹5,000/day lien and ₹100/day CIBIL dues.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/fd-backed-secured-credit-card-default-liquidation-rules"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    FD-Backed Credit Card Liquidation Law
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Deposit sweep &amp; CIBIL rules &rarr;</span>
                </Link>

                <Link
                  href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Banker&apos;s Right of Set-Off (Sec 171)
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Limits on bank lien &amp; freezes &rarr;</span>
                </Link>

                <Link
                  href="/rbi-5000-per-day-delay-compensation-property-documents"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI ₹5,000/Day Lien Delay Penalty
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">30-day collateral release law &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
