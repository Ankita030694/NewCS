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
  Gavel,
  Landmark,
  Calendar
} from 'lucide-react';

export default function CreditCardAutoDebitFailedClient() {
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
    { id: 'why-autopay-fails', label: '1. Why Auto-Debit Fails With Balance' },
    { id: 'rbi-grace-period', label: '2. RBI 3-Day Grace Period & Late Fees' },
    { id: 'liability-rules', label: '3. Bank Glitch vs Customer Fault' },
    { id: 'cibil-compensation', label: '4. Fixing CIBIL & Rs 100/Day Penalty' },
    { id: 'failure-reasons-table', label: '5. Failure Reasons & Remedies Table' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Fee & CIBIL Fix SOP' },
    { id: 'consumer-court-rights', label: '7. Consumer Court & NCDRC Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Timeline: Failure to Full Refund' },
    { id: 'special-scenarios', label: '10. Common Mistakes & Special Cases' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Why did my credit card auto-debit fail even with sufficient bank balance?',
      a: 'Auto-debit can fail due to bank server downtime, NACH batch cutoffs, a mandate upper limit lower than your bill, or an active lien on part of your balance. Adding funds on the due date itself after the morning batch run can also trigger a failure.'
    },
    {
      q: 'Do I have to pay late fees if the auto-debit failed due to a bank error?',
      a: 'No. If your bank account had enough clear balance before the due date and the failure happened due to a bank or NACH system glitch, you are not at fault. You can demand a full reversal of late fees, GST, and interest charges.'
    },
    {
      q: 'What is the RBI 3-day grace period rule for credit card payments?',
      a: 'Under the RBI Master Direction on Credit Cards, issuers cannot levy late payment charges or report an account as past due to credit bureaus unless it remains unpaid for more than three days past the payment due date.'
    },
    {
      q: 'Can a failed auto-debit lower my CIBIL score?',
      a: 'Yes, if the bill remains unpaid past the 3-day grace period, the bank may report Days Past Due (DPD) to CIBIL, Experian, or Equifax. However, if the failure was a bank glitch, the bank must remove the negative remark upon dispute.'
    },
    {
      q: 'How much compensation can I claim for delayed CIBIL correction?',
      a: 'Under RBI Circular RBI/2023-24/72, if a bank or credit bureau fails to resolve a valid CIBIL dispute within 30 calendar days, they must pay you Rs 100 per day of delay directly into your bank account.'
    },
    {
      q: 'What if money was debited from my savings account but not credited to my card?',
      a: 'If your bank account was debited but the credit card was not credited, RBI TAT rules apply. Depending on the payment rail, the bank must auto-reverse or credit the amount within the prescribed turnaround time or pay Rs 100 per day delay compensation.'
    },
    {
      q: 'Should I pay manually right away if my auto-debit fails?',
      a: 'Yes. Never wait for a second auto-debit retry. Pay at least the Minimum Amount Due or Total Amount Due immediately via UPI or NEFT to stop daily interest and prevent CIBIL reporting, then file a fee reversal request.'
    },
    {
      q: 'Can the bank charge an ECS or NACH bounce fee when I had sufficient balance?',
      a: 'No. ECS or NACH return charges apply only when a mandate bounces due to insufficient funds or a customer-side stop order. Charging a bounce fee despite sufficient clear balance is a deficiency in service.'
    },
    {
      q: 'How do I escalate if the bank refuses to reverse late fees and fix CIBIL?',
      a: 'First write to the bank Grievance Redressal Officer (GRO) and Principal Nodal Officer (PNO) with your bank statement proof. If unresolved after 30 days, file a free complaint on the RBI Integrated Ombudsman portal at cms.rbi.org.in.'
    },
    {
      q: 'Can I approach Consumer Court for a wrong CIBIL drop caused by auto-debit failure?',
      a: 'Yes. Under the Consumer Protection Act, 2019, wrongful late fees and false credit bureau reporting due to bank negligence qualify as deficiency in service. Consumer Commissions can order fee refunds, CIBIL correction, and damages for mental agony.'
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
            <span>RBI Credit Card Master Directions &amp; CIBIL Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Fix Unfair Late Fees After Credit Card Auto-Pay Glitch
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did your credit card auto-debit fail even though you had enough balance in your bank account? Learn your RBI rights to reverse late fees, remove NACH bounce charges, and restore your CIBIL score.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Dispute Wrong Charges Now</span>
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
                  Backed by RBI Credit Card Master Directions, 2022 and Circular RBI/2023-24/72.
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
                <span>EXECUTIVE BRIEF: AUTO-DEBIT FAILURE &amp; CIBIL PROTECTION</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Fault Means Full Reversal:</strong> If your bank account had enough clear funds before the due date, the bank must reverse all late fees, GST, and interest caused by its system glitch.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">RBI 3-Day Grace Period:</strong> Card issuers cannot charge late fees or report an account as past due to CIBIL unless it stays unpaid for more than 3 days after the due date.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Rs 100/Day CIBIL Delay Penalty:</strong> Under RBI Circular RBI/2023-24/72, if a bank or bureau delays fixing a valid CIBIL dispute beyond 30 days, you earn Rs 100 per day.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Pay Manually Right Away:</strong> Clear your bill manually via UPI or NEFT as soon as you see an auto-debit failure. Never wait for a bank retry to protect your credit score.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Ombudsman &amp; Consumer Court Relief:</strong> If the bank refuses to refund charges or fix your credit report, escalate to the RBI Ombudsman or file a deficiency in service claim.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Why Credit Card Auto-Debit Fails With Balance */}
            <section id="why-autopay-fails" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Technical &amp; Banking Causes</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Why Credit Card Auto-Debit Fails With Balance
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many cardholders set up an auto-debit mandate so they never miss a credit card due date. Yet, payments still fail even when the savings account shows a healthy balance.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This usually happens because of internal banking rules or technical errors. Sometimes, the bank server faces downtime during the scheduled NACH or Standing Instruction batch run.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In other cases, you may have added money on the due date itself. Most banks run auto-debit batches early in the morning or the night before the due date. If funds arrive later that afternoon, the batch marks the mandate as failed.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Other common triggers include a low NACH mandate cap, a card upgrade that broke the old mandate link, or a temporary hold on part of your bank balance.
              </p>
            </section>

            {/* SECTION 2: RBI 3-Day Grace Period & Late Fee Rules */}
            <section id="rbi-grace-period" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Billing Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI 3-Day Grace Period &amp; Late Fee Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India protects cardholders under the Master Direction on Credit Card and Debit Card Issuance and Conduct Directions, 2022. These rules bind all banks and card issuers in India.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, RBI mandates a strict 3-day grace window after your payment due date. A bank cannot charge a late payment fee or report your card as past due to CIBIL unless it remains unpaid for more than 3 days.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your auto-debit fails on the due date and you pay manually within 3 days, no late fee or CIBIL damage should occur. However, if you cross the 3-day window, the bank counts Days Past Due from the original due date.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, banks can only levy late payment fees on the unpaid balance left after the due date. They cannot charge a penalty on the entire statement bill if a partial payment already went through. Also, banks cannot compound unpaid taxes or charges onto the principal to charge extra interest.
              </p>
            </section>

            {/* SECTION 3: Bank Glitch vs Customer Fault: Liability Rules */}
            <section id="liability-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Legal Liability &amp; Fee Reversal</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Bank Glitch vs Customer Fault: Liability Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Who pays the penalty depends on why the auto-debit failed. Banking law draws a clear line between a bank system error and a customer-side shortfall.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your account held enough clear withdrawable funds at least one day before the due date, the fault lies with the bank or clearing network. You are not liable for any late fees, interest, or NACH bounce charges.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The bank must also refund the 18% GST charged on those wrongful late fees and interest. If the failure happened because the bank upgraded your card without moving your auto-pay mandate, the bank still bears full responsibility.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Sometimes money leaves your savings account via NACH or UPI but does not reach your credit card. Under RBI Turnaround Time (TAT) Circular RBI/2019-20/67, the bank must auto-reverse or credit the failed transaction within the set window or pay Rs 100 per day in compensation.
              </p>
            </section>

            {/* SECTION 4: Fixing CIBIL Score Drops & Rs 100/Day Penalty */}
            <section id="cibil-compensation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Rectification Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Fixing CIBIL Score Drops &amp; Rs 100/Day Penalty
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A missed auto-debit can drop your CIBIL score by 40 to 80 points if the bank marks a 30 Days Past Due (DPD) flag. This happens even if the mistake was on the bank server.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the Credit Information Companies (Regulation) Act, 2005 and RBI Circular RBI/2023-24/72, you have a legal right to dispute false reporting. Once you file a dispute, the bank and credit bureau have 30 calendar days to fix it.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Internally, the bank gets 21 days to verify your bank statement and send corrected data. The credit bureau, such as CIBIL, Experian, or Equifax, gets 9 days to update your report.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If they fail to resolve your valid dispute within 30 days, you earn Rs 100 per calendar day for the delay. The bank or bureau must credit this payout to your bank account within 5 working days of closing the dispute. Learn more in our{' '}
                <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[#1886ff] font-semibold hover:underline">
                  RBI Rs 100 per day CIBIL delay compensation guide
                </Link>.
              </p>
            </section>

            {/* SECTION 5: Auto-Debit Failure Reasons & Remedies Table */}
            <section id="failure-reasons-table" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Root Cause &amp; Liability Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Auto-Debit Failure Reasons &amp; Remedies Table
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Use this table to identify why your credit card auto-pay failed and check whether the bank must waive your fees and fix your CIBIL record.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Auto-Debit Failure Scenarios &amp; Legal Remedies</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">RBI Compliant Matrix</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[580px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Failure Scenario</th>
                        <th className="p-3">Who Is at Fault?</th>
                        <th className="p-3">Fee &amp; Interest Waiver</th>
                        <th className="p-3">CIBIL &amp; Compensation Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Bank Server / NACH Glitch</td>
                        <td className="p-3 text-emerald-700 font-semibold">Bank / NPCI</td>
                        <td className="p-3">100% reversal of late fee, GST, and interest</td>
                        <td className="p-3">Full DPD removal + Rs 100/day if delayed over 30 days</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Card Upgraded or Reissued</td>
                        <td className="p-3 text-emerald-700 font-semibold">Bank (If Unnotified)</td>
                        <td className="p-3">Full waiver if bank failed to migrate or alert</td>
                        <td className="p-3">CIBIL rectification via PNO or Ombudsman</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Money Debited, Not Credited</td>
                        <td className="p-3 text-emerald-700 font-semibold">Bank / Payment Rail</td>
                        <td className="p-3">No late fee; back-dated value credit required</td>
                        <td className="p-3">Rs 100/day TAT compensation under RBI 2019 circular</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Bill Exceeded NACH Mandate Cap</td>
                        <td className="p-3 text-amber-700 font-semibold">Shared / Technical</td>
                        <td className="p-3">One-time goodwill waiver on first request</td>
                        <td className="p-3">Increase mandate limit; request DPD removal</td>
                      </tr>
                      <tr className="bg-blue-50/40">
                        <td className="p-3 font-medium text-slate-900">Funds Added After Cutoff on Due Date</td>
                        <td className="p-3 text-rose-700 font-semibold">Customer Timing</td>
                        <td className="p-3">Protected if paid manually within 3-day grace</td>
                        <td className="p-3">Pay manually within 3 days to prevent DPD mark</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP to Reverse Fees & CIBIL */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP to Reverse Fees &amp; CIBIL
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six steps right away if your credit card auto-debit fails despite having sufficient funds in your bank account.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Step 1: Pay the Card Bill Manually Within 3 Days
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Do not wait for the bank to retry the auto-debit. Pay the Total Amount Due via UPI, IMPS, or NEFT immediately to stay inside the RBI 3-day grace period.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Step 2: Download Bank Statement &amp; Mandate Proof
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Save a PDF of your bank statement showing clear available balance one day before and on the due date. Take screenshots of your active auto-pay mandate and any failure SMS.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Step 3: Email Customer Care for Fee &amp; GST Waiver
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Send an official email to the credit card issuer attaching your balance proof. Demand reversal of late fees, finance charges, NACH bounce fees, and 18% GST.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Step 4: File a CIBIL &amp; Bureau Dispute
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check your credit report after 15 to 30 days. If a late payment or DPD mark appears, raise a dispute on CIBIL and with your bank citing RBI Circular RBI/2023-24/72.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Step 5: Escalate to GRO &amp; Principal Nodal Officer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If support rejects your request, escalate to the bank Grievance Redressal Officer (GRO) and Principal Nodal Officer (PNO). Always keep the complaint reference number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Step 6: File an RBI Integrated Ombudsman Complaint
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank does not resolve the issue within 30 days, file a complaint on cms.rbi.org.in. Claim your fee refund, CIBIL correction, and Rs 100/day delay compensation.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Consumer Court Rights & NCDRC Precedents */}
            <section id="consumer-court-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Principles &amp; Tort Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Consumer Court Rights &amp; NCDRC Precedents
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 2(11) of the Consumer Protection Act, 2019, failing to execute a valid auto-debit mandate despite sufficient funds is a clear deficiency in service.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Consumer Commissions across India, including State Commissions and the NCDRC, consistently hold banks liable for systemic NACH and ECS failures. Here are the key legal protections you hold.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Systemic Error as Deficiency in Service</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Consumer courts rule that when a customer maintains enough balance, a failed ECS or NACH debit proves bank negligence. Courts order full reversal of bounce and late fees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Burden of Proof Rests on the Bank</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Once you show your bank statement proving sufficient balance, the bank must prove it had no technical glitch. Banks cannot shift blame onto third-party clearing partners.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Damages for Wrongful CIBIL Reporting</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a false default lowers your CIBIL score and causes a home or business loan rejection, Consumer Commissions can award compensation for financial loss and mental agony.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Duty to Notify on Mandate Failure</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks must send timely SMS and email alerts when an auto-debit fails. Failing to alert the customer while piling up daily interest violates fair banking norms.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Bank to Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank to Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If regular customer support refuses to waive the late fee or fix your CIBIL score, use the official RBI three-tier redressal system.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Audits auto-debit logs and approves reversal of late fees, GST, and interest.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Calendar Days</td>
                      <td className="p-3">Directs credit bureau team to suppress DPD flags and restore CIBIL score.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-Complaint</td>
                      <td className="p-3">Passes binding orders on cms.rbi.org.in for refunds, CIBIL fix, and Rs 100/day penalty.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Timeline: Auto-Debit Failure to Full Refund */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Action &amp; Regulatory Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Timeline: Auto-Debit Failure to Full Refund
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Acting quickly within each milestone window protects your credit history and strengthens your compensation claim.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Regulatory Phase</th>
                      <th className="p-3">Bank Obligation</th>
                      <th className="p-3">Cardholder Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Due Date (Day 0)</td>
                      <td className="p-3 font-mono text-[11px]">Mandate Execution</td>
                      <td className="p-3">Processes NACH/SI debit and notifies customer if it fails.</td>
                      <td className="p-3">Check SMS/email and verify savings balance immediately.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to Day 3</td>
                      <td className="p-3 font-mono text-[11px]">RBI Grace Period</td>
                      <td className="p-3">Cannot levy late fees or mark DPD on CIBIL during these 3 days.</td>
                      <td className="p-3">Pay bill manually via UPI/NEFT and save the transaction receipt.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 4 to Day 15</td>
                      <td className="p-3 font-mono text-[11px]">Fee Dispute Stage</td>
                      <td className="p-3">Reviews bank statement proof and reverses wrongful fees/GST.</td>
                      <td className="p-3">Email bank support with PDF statement and mandate screenshot.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 16 to Day 30</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">CIBIL Audit &amp; PNO</td>
                      <td className="p-3">Must resolve CIBIL dispute within 30 days (21 days bank + 9 days CIC).</td>
                      <td className="p-3 font-bold text-amber-800">Escalate to Bank PNO and log formal CIBIL dispute online.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 31 and Beyond</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Penalty &amp; Ombudsman</td>
                      <td className="p-3">Rs 100/day penalty starts for unresolved CIBIL errors.</td>
                      <td className="p-3 font-bold text-slate-900">File RBI Ombudsman complaint at cms.rbi.org.in for full relief.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Common Mistakes & Special Mandate Scenarios */}
            <section id="special-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Precautions &amp; Edge Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Common Mistakes &amp; Special Mandate Scenarios
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Avoid these common traps when managing credit card auto-debit mandates across Indian banks.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1886ff]" />
                    Waiting for an Auto-Debit Retry
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Many cardholders wait 4 or 5 days expecting the bank to re-run the mandate. This crosses the RBI 3-day grace window and triggers CIBIL damage. Always pay manually first.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    Lien or Uncleared Cheque Balance
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Total account balance is not the same as clear balance. If a cheque is still clearing or a tax lien is active, the auto-debit will fail for insufficient clear funds.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-indigo-600" />
                    Minimum Due vs Total Due Mismatch
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Verify whether your Standing Instruction covers the Total Amount Due or only the Minimum Amount Due. If it pays only the minimum due, revolving interest of 36% to 45% APR applies.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Cross-Bank NACH vs Same-Bank SI
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Auto-debit from a different bank uses NACH, which takes 1 to 2 working days to settle. Keep funds ready at least 48 hours before the due date to avoid cutoff rejections.
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
                Frequently Asked Questions: Auto-Debit Failures
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers on credit card auto-debit failures, RBI grace periods, late fee waivers, and CIBIL score protection.
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
                Official Regulatory Citations &amp; Legal References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Master Direction (Credit Card &amp; Debit Card - Issuance and Conduct Directions, 2022):</strong> 3-Day Grace Period for Past Due Reporting, Late Fee on Unpaid Balance Only, and Wrongful Billing Redressal.
                </li>
                <li>
                  <strong>RBI Circular RBI/2023-24/72 (DoR.FIN.REC.48/20.16.003/2023-24):</strong> Framework for Compensation to Customers for Delayed Updation or Rectification of Credit Information (Rs 100 per day beyond 30 days).
                </li>
                <li>
                  <strong>RBI Circular RBI/2019-20/67 (DPSS.CO.PD No.629/02.01.014/2019-20):</strong> Harmonisation of Turn Around Time (TAT) and Customer Compensation for Failed Transactions.
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Section 21(3) Right to Accurate Credit Information and Dispute Resolution.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) Deficiency in Service and Section 39 Remedies for Wrongful Bank Charges.
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
                  <a href="https://www.npci.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>NPCI NACH &amp; E-Mandate Portal</span>
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
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Rs 100/Day CIBIL Penalty
                  </Link>
                  <Link href="/stop-auto-debit-ecs-bounce-charges" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Auto-Debit &amp; ECS Bounce Fees
                  </Link>
                  <Link href="/credit-card-bill-paid-wrong-card-number-neft-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Wrong Card Number Payment Recovery
                  </Link>
                  <Link href="/credit-card-pending-chargeback-rbi-shadow-credit-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pending Chargeback &amp; Shadow Credit
                  </Link>
                  <Link href="/change-credit-card-billing-cycle-date-rbi-salary-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Change Billing Date to Match Salary
                  </Link>
                  <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Overlimit Fee Without Consent Refund
                  </Link>
                  <Link href="/rbi-guidelines-on-penal-charges-in-loan-accounts" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Penal Charges Guidelines
                  </Link>
                  <Link href="/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Guide
                  </Link>
                  <Link href="/credit-card-npa-timeline" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card NPA Timeline
                  </Link>
                  <Link href="/services/credit-score-builder" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Score Builder Service
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
                Specialist in banking compliance, credit card billing disputes, RBI statutory guidelines, and CIBIL rectification with extensive experience holding lenders accountable under central bank mandates.
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
                  BILLING &amp; CIBIL PROTECTION
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Unfair Late Fees After Auto-Pay Glitch?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking experts draft formal RBI disputes, force full reversal of late fees and GST, remove wrongful CIBIL DPD marks, and claim delay compensation.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Legal Dispute Help
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
                  <span><strong>100% Fee &amp; GST Reversal:</strong> Full refund of wrongful auto-debit penalties.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL DPD Removal:</strong> Clean credit history restoration under CICRA.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Rs 100/Day Claim Filing:</strong> Compensation for delayed CIBIL updates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Support:</strong> End-to-end CMS portal representation.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Rs 100/Day CIBIL Delay Penalty
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Credit bureau compensation guide &rarr;</span>
                </Link>

                <Link
                  href="/stop-auto-debit-ecs-bounce-charges"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Stop Auto-Debit &amp; ECS Bounce Fees
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Mandate cancellation &amp; fee rules &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-bill-paid-wrong-card-number-neft-recovery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bill Paid to Wrong Card Number
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">NEFT &amp; UPI recovery steps &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
