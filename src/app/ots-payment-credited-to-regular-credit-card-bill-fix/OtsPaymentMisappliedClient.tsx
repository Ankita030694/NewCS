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
  Gavel,
  Landmark,
  Calendar
} from 'lucide-react';

export default function OtsPaymentMisappliedClient() {
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
    { id: 'why-misapplied', label: '1. Why OTS Goes to Regular Bill' },
    { id: 'contract-act', label: '2. Contract Act Section 59 & 63' },
    { id: 'rbi-directions', label: '3. RBI Rules on Billing Disputes' },
    { id: 'ledger-comparison', label: '4. Regular Bill vs OTS Ledger' },
    { id: 'step-by-step-sop', label: '5. Step-by-Step Fix Protocol' },
    { id: 'interest-cibil-fix', label: '6. Stop Interest & CIBIL Errors' },
    { id: 'legal-remedies', label: '7. RBI Ombudsman & Consumer Law' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Timeline to Final NOC' },
    { id: 'common-mistakes', label: '10. Common Mistakes & Precautions' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Why did my bank credit my OTS payment to my regular credit card bill?',
      a: 'Automated card billing systems treat money sent to your 16-digit card number as a regular bill payment unless the bank tags your account in the One-Time Settlement ledger first. If the collection team fails to link your OTS reference number, the system absorbs the money against interest, late fees, and principal.'
    },
    {
      q: 'Does the bank still have to honor my OTS letter if the payment went to the regular bill?',
      a: 'Yes. Under Section 59 of the Indian Contract Act, 1872, when you pay the exact sum mentioned in your OTS sanction letter within the due date, the bank must apply that payment to discharge the settlement agreement. Under Section 63, a valid compromise settlement binds the bank once accepted.'
    },
    {
      q: 'Should I pay the remaining balance shown on my new credit card statement?',
      a: 'No. Do not pay extra charges or interest generated after your OTS payment. Paying extra money without written protest can weaken your claim. Instead, send a formal dispute email with your OTS letter and UTR receipt demanding immediate ledger reconciliation.'
    },
    {
      q: 'How many days does the bank have to resolve a credit card billing dispute under RBI rules?',
      a: 'Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct Directions, 2022, the card issuer must investigate your billing dispute and provide a clear resolution with documentary proof within 30 days from the date of your complaint.'
    },
    {
      q: 'Can the bank report my settled card as overdue to CIBIL during this dispute?',
      a: 'Under RBI credit card directions, card issuers must exercise caution with disputed accounts and should not report disputed amounts as defaults until the dispute is resolved. Once rectified, the bank must update your credit report under RBI periodic reporting timelines.'
    },
    {
      q: 'What proof do I need to force the bank to adjust my OTS payment correctly?',
      a: 'You need three core documents: the official OTS sanction letter on bank letterhead or official bank email, your payment receipt showing the exact UTR or NEFT reference number and date, and the subsequent card statement showing the amount credited as a regular payment.'
    },
    {
      q: 'What if the bank claims my OTS letter expired because the payment was not tagged in time?',
      a: 'If your bank statement confirms the money left your account and reached the bank on or before the OTS due date, the delay in internal tagging is the bank fault. You are not liable for the bank internal software delay, and the RBI Ombudsman routinely rules in favor of borrowers in such cases.'
    },
    {
      q: 'How do I escalate if the bank branch or customer care refuses to fix the OTS ledger?',
      a: 'Escalate in writing to the bank Grievance Redressal Officer (GRO) and Principal Nodal Officer (PNO). If the bank fails to resolve the issue or issue your No Objection Certificate (NOC) within 30 days, file a free online complaint on the RBI Integrated Ombudsman portal at cms.rbi.org.in.'
    },
    {
      q: 'Can I claim compensation in Consumer Court for OTS payment misapplication?',
      a: 'Yes. Failing to close a card after receiving the agreed OTS sum, charging fresh interest, and damaging your CIBIL score amounts to deficiency in service under Section 2(11) of the Consumer Protection Act, 2019. Consumer commissions can order account closure, NOC issuance, and compensation for harassment.'
    },
    {
      q: 'How does CredSettle help fix a misapplied credit card OTS payment?',
      a: 'CredSettle audits your OTS sanction letter and payment trail, drafts a formal legal notice citing Sections 59 and 63 of the Indian Contract Act and RBI directions, escalates to the Principal Nodal Officer and RBI Ombudsman, and secures your account closure and NOC.'
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
            <span>Indian Contract Act Section 59 &amp; RBI Settlement Compliance</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Fix Settlement Payment Misapplied as Regular Card Bill
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Paid your credit card One-Time Settlement amount, but the bank credited it as a regular bill payment and kept charging interest? Learn how to invoke Section 59 of the Contract Act and RBI rules to force OTS closure and get your NOC.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Fix Your OTS Ledger Now</span>
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
                  Protected under Section 59 &amp; 63 of the Indian Contract Act and RBI Card Directions 2022.
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
                <span>EXECUTIVE BRIEF: OTS PAYMENT MISAPPLIED TO REGULAR BILL</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Section 59 Appropriation Right:</strong> Under Section 59 of the Indian Contract Act, 1872, if you pay an amount earmarked for an OTS agreement, the bank must apply it to that settlement and cannot divert it to a regular revolving bill.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Binding Accord Under Section 63:</strong> Once you pay the agreed sum on or before the due date in a valid OTS letter, the original card debt stands discharged. Internal bank software delays cannot cancel your settlement.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">30-Day RBI Dispute Mandate:</strong> Under RBI Credit Card Directions 2022, card issuers must investigate billing and ledger disputes and give documentary resolution within 30 calendar days.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Stop Extra Payments Immediately:</strong> Never pay fresh interest, GST, or late fees generated after your OTS payment. Dispute the statement in writing with your UTR receipt and OTS sanction letter.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Ombudsman &amp; CIBIL Fix:</strong> If the bank ignores your dispute for 30 days, file a free complaint on cms.rbi.org.in to compel NOC issuance, interest reversal, and CIBIL rectification.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1 */}
            <section id="why-misapplied" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Root Cause of the Billing Error</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Why Banks Credit OTS Payments to Regular Card Bills
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many credit card borrowers negotiate a One-Time Settlement (OTS) to close an overdue card. They receive an official settlement letter and transfer the agreed sum via NEFT, RTGS, or UPI. However, the next monthly statement shocks them.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Instead of closing the card, the bank treats the settlement payment as a regular partial payment. The remaining waived balance stays active on the statement. Even worse, the system keeps adding 36% to 42% annual interest, late fees, and 18% GST.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This problem happens because of an internal disconnect inside the bank. Collection agencies or recovery officers issue OTS letters, but they fail to tag your 16-digit card number in the central settlement system before you pay.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When money arrives in a standard card account without a settlement tag, the automated billing software follows default rules. It adjusts the money against billed interest, taxes, and minimum dues first. As a result, your settlement looks unpaid in the automated system.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="contract-act" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protection Under Indian Contract Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Indian Contract Act: Section 59 &amp; Section 63 Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks cannot use their own software errors to cancel a valid settlement. Two clear provisions of the Indian Contract Act, 1872 protect you when a settlement payment is misapplied.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, <strong>Section 59</strong> governs the appropriation of payments. It states that when a debtor owes debts and makes a payment indicating which specific debt is to be discharged, the creditor must apply the money only to that debt if accepted.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In plain English, you paid the exact figure written in the OTS letter by the due date. Those circumstances clearly show the payment was meant to discharge the OTS agreement, not a regular revolving bill. Once the bank accepts the transfer, it is legally bound to credit it toward the OTS.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, <strong>Section 63</strong> codifies the rule of accord and satisfaction. Under Section 63, a creditor can agree to accept a smaller sum as full satisfaction of a larger debt. Once you pay that agreed sum, the old card debt is legally extinguished, and the bank cannot revive the waived amount.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="rbi-directions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Circulars &amp; Billing Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. RBI Master Directions on Billing &amp; OTS Disputes
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Apart from contract law, Reserve Bank of India (RBI) rules strictly regulate how banks handle credit card bills and compromise settlements.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the <strong>RBI (Credit Card and Debit Card - Issuance and Conduct) Directions, 2022</strong>, card issuers must ensure that wrong bills are not raised. If you challenge a bill or ledger entry, the bank must investigate and give documentary proof within <strong>30 days</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Furthermore, RBI circular <strong>RBI/2023-24/40</strong> (Framework for Compromise Settlements and Technical Write-offs, dated June 8, 2023) requires all banks and NBFCs to follow transparent, Board-approved policies for compromise settlements.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under these rules, a bank cannot take your settlement money, keep the account open, and demand extra interest. If the bank fails to resolve your billing dispute within 30 days, you can escalate to the RBI Ombudsman for binding relief.
              </p>
            </section>

            {/* SECTION 4 */}
            <section id="ledger-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Accounting &amp; Ledger Reconciliation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Regular Bill Credit vs OTS Ledger Adjustment
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding how the bank treats your payment in both scenarios helps you spot the error immediately on your statement. The table below compares a misapplied regular credit against a proper OTS ledger adjustment.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Credit Card Ledger Impact Comparison</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">OTS vs Regular Adjustment</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Account Parameter</th>
                        <th className="p-3">Misapplied as Regular Bill</th>
                        <th className="p-3">Proper OTS Ledger Adjustment</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Waived Principal &amp; Fees</td>
                        <td className="p-3 text-rose-600 font-medium">Remains active as unpaid balance</td>
                        <td className="p-3 text-emerald-700 font-semibold">100% waived upon OTS payment</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Monthly Interest (36%-42%)</td>
                        <td className="p-3 text-rose-600 font-medium">Keeps accruing on balance</td>
                        <td className="p-3 text-emerald-700 font-semibold">Frozen from OTS sanction date</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Card Account Status</td>
                        <td className="p-3">Shows Active / Overdue</td>
                        <td className="p-3 text-emerald-700 font-semibold">Marked Closed / Settled</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">CIBIL / CIC Reporting</td>
                        <td className="p-3 text-rose-600 font-medium">Fresh DPD (Days Past Due) added</td>
                        <td className="p-3 text-emerald-700 font-semibold">Zero balance, Settled status</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">No Objection Certificate</td>
                        <td className="p-3 text-rose-700">Withheld by bank system</td>
                        <td className="p-3 text-[#1886ff]">Issued within 15 to 30 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 5 */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP: Fix Misapplied OTS Payments
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your latest credit card bill shows your OTS money as a normal payment, act fast. Follow these six steps to build a strong paper trail and force the bank to correct its ledger.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Gather Your OTS Letter and UTR Payment Proof
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your official OTS sanction letter, the bank statement showing the debit, and the UTR or NEFT reference number. Make sure the dates match the deadline in your settlement letter.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Freeze All Further Payments on the Card
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Do not pay the new minimum due or fresh interest shown on the statement. Also check if auto-debit is active on your savings account and pause it so the bank cannot pull extra money.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Email Official Card Dispute Desk Under Section 59
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Send a formal email to the bank credit card grievance desk attaching your OTS letter and UTR receipt. Cite Section 59 of the Indian Contract Act and demand immediate transfer of funds to the OTS settlement account.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Demand Reversal of Post-OTS Interest &amp; GST
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Instruct the bank in writing to reverse all finance charges, late payment fees, overlimit penalties, and 18% GST billed after your OTS payment date. Ask for a written ticket or complaint reference number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Escalate to Principal Nodal Officer (PNO)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If customer care sends automated replies or refuses to honor the expired OTS window, escalate to the bank Principal Nodal Officer. Mention that the internal tagging delay was the bank fault, not yours.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: File Complaint on RBI CMS Portal After 30 Days
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank fails to issue your NOC within 30 days of your first written complaint, file a complaint on cms.rbi.org.in. Upload your OTS letter, UTR proof, and bank replies for a binding Ombudsman order.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="interest-cibil-fix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Protecting Your Credit Report &amp; Stopping Charges</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Stop Interest, Late Fees &amp; CIBIL Overdue Errors
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an OTS payment is misapplied, the biggest risk is silent damage to your credit report. The bank system marks the waived balance as unpaid and reports fresh Days Past Due (DPD) to CIBIL, Experian, Equifax, and CRIF High Mark.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI Credit Card Directions 2022, card issuers must be careful with disputed accounts. They should not report disputed amounts as defaults to credit bureaus while a formal billing dispute is pending resolution.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Additionally, under the <strong>RBI Master Direction on Credit Information Reporting, 2025</strong> (and its December 2025 amendment), lenders must submit updated credit data to bureaus multiple times a month. Once the bank reconciles your OTS ledger, it must push a correction so your CIBIL report shows zero balance and Settled status.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You should also raise a parallel dispute on the official CIBIL portal if the overdue tag remains after 30 days. Attach your OTS sanction letter and payment receipt so the bureau asks the bank to verify and correct the record.
              </p>
            </section>

            {/* SECTION 7 */}
            <section id="legal-remedies" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory &amp; Judicial Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Legal Remedies: RBI Ombudsman &amp; Consumer Court
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a bank refuses to correct its mistake despite clear UTR proof, you have strong legal remedies in India without needing expensive litigation at the start.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>RBI Integrated Ombudsman Scheme, 2021</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Ombudsman handles non-adherence to settlement terms and wrong credit card billing free of cost. It can order the bank to honor the OTS, issue an NOC, fix CIBIL, and pay compensation for harassment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Diverting an OTS payment to a regular bill and demanding waived dues is a deficiency in service under Section 2(11). District Consumer Commissions can award damages for mental agony and legal costs under Section 39.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Specific Performance &amp; Injunction</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A valid OTS letter followed by payment creates a binding contract under Section 63 of the Contract Act. If the bank files a recovery suit for the waived sum, your OTS letter and UTR receipt serve as a complete legal defense.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Stop Illegal Recovery Calls</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Recovery agents cannot harass you for a settled card while a formal OTS reconciliation dispute is pending. Report any abusive calls to the bank PNO and cite RBI Fair Practices Code violations.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8 */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Redressal Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank GRO to Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Always follow the official escalation ladder in writing. Skipping levels can delay your RBI Ombudsman complaint, because the Ombudsman requires proof that you gave the bank 30 days to fix the error first.
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
                      <td className="p-3">Credit Card Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 15 Days</td>
                      <td className="p-3">Logs billing dispute, verifies UTR payment, and requests internal OTS tagging.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">Up to Day 30</td>
                      <td className="p-3">Overrides automated card billing, reverses post-OTS interest, and approves NOC.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI Integrated Ombudsman (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">After 30 Days</td>
                      <td className="p-3">Issues binding order for OTS closure, NOC delivery, CIBIL fix, and compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9 */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Actionable Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Payment to Final NOC Letter
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking each stage from the day you spot the billing error ensures the bank cannot drag out your settlement closure.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Window</th>
                      <th className="p-3">Dispute Phase</th>
                      <th className="p-3">Bank Duty</th>
                      <th className="p-3">Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 3</td>
                      <td className="p-3 font-mono text-[11px]">Error Detected</td>
                      <td className="p-3">Statement shows OTS payment as regular credit.</td>
                      <td className="p-3">Email GRO with OTS letter and UTR receipt under Section 59.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 4 to 15</td>
                      <td className="p-3 font-mono text-[11px]">Internal Audit</td>
                      <td className="p-3">Reconciles collection agency OTS log with card ledger.</td>
                      <td className="p-3">Follow up on ticket ID; pause any active auto-debit mandates.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 16 to 30</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">PNO Escalation</td>
                      <td className="p-3">Must resolve billing dispute within 30 days under RBI rules.</td>
                      <td className="p-3 font-bold text-amber-800">Escalate to Principal Nodal Officer if NOC is not issued.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 31 Onwards</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">RBI CMS Filing</td>
                      <td className="p-3">Faces regulatory scrutiny from RBI Ombudsman.</td>
                      <td className="p-3 font-bold text-slate-900">File complaint at cms.rbi.org.in and demand CIBIL update.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10 */}
            <section id="common-mistakes" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Avoid Costly Pitfalls</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Common Mistakes &amp; Precautions During OTS Payment
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers accidentally weaken their legal position after an OTS payment error. Avoid these four common mistakes when dealing with your bank.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    Paying the Minimum Due &ldquo;Just to Be Safe&rdquo;
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Paying even a small amount toward the regular bill after your OTS payment can be treated as accepting the regular statement. Keep your payment trail strictly limited to the OTS sum.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600" />
                    Relying Only on Phone Calls or WhatsApp
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Verbal assurances from recovery agents that &ldquo;the system will update next month&rdquo; carry zero weight before the RBI Ombudsman. Always put your dispute on official bank email.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    Not Checking the OTS Letter Authenticity First
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Always verify that your OTS sanction letter comes from an official bank domain before transferring money. Never pay into a personal UPI ID or unverified third-party wallet.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Ignoring Auto-Debit Mandates
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your card was linked to auto-debit, the bank may pull extra funds on the due date even after you paid the OTS. Cancel or pause e-NACH and standing instructions right after paying.
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
                Frequently Asked Questions: OTS Payment Misapplication
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal answers to common questions when a bank credits your credit card settlement payment toward a regular bill instead of closing your account.
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
                  <strong>Indian Contract Act, 1872:</strong> Section 59 (Application of payment where debt to be discharged is indicated) and Section 63 (Promisee may dispense with or remit performance - Accord and Satisfaction).
                </li>
                <li>
                  <strong>Reserve Bank of India Master Direction:</strong> RBI (Credit Card and Debit Card - Issuance and Conduct) Directions, 2022, Billing Dispute Resolution within 30 Days and CIC Reporting Safeguards.
                </li>
                <li>
                  <strong>Reserve Bank of India Circular:</strong> RBI/2023-24/40, DOR.STR.REC.20/21.04.048/2023-24, Framework for Compromise Settlements and Technical Write-offs (June 8, 2023).
                </li>
                <li>
                  <strong>RBI Master Direction on Credit Information Reporting, 2025:</strong> RBI/DoR/2024-25/125 &amp; Amendment Directions, 2025 (RBI/DOR/2025-26/119) on timely CIC data updates.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019 &amp; RBI Ombudsman Scheme, 2021:</strong> Section 2(11) Deficiency in Service and Section 39 Compensation Orders.
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

              {/* Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Letter
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After Settlement
                  </Link>
                  <Link href="/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Guide
                  </Link>
                  <Link href="/credit-card-partial-payment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Partial Payment Rules
                  </Link>
                  <Link href="/rbi-circular-on-loan-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Circular on OTS Settlement
                  </Link>
                  <Link href="/credit-card-minimum-due-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Minimum Amount Due Trap
                  </Link>
                  <Link href="/credit-card-over-limit-and-late-fee-before-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Overlimit &amp; Late Fee Rules
                  </Link>
                  <Link href="/stop-credit-card-recovery-calls" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Credit Card Recovery Calls
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
                Specialist in banking compliance, credit card OTS disputes, RBI statutory guidelines, and loan settlement resolutions with extensive experience holding lenders accountable under central bank mandates.
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
                  OTS LEDGER DISPUTE SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Ignored Your OTS Payment?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team drafts formal Section 59 notices, stops fresh card interest, escalates to the RBI Ombudsman, and secures your official NOC.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Legal OTS Fix Now
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
                  <span><strong>Section 59 Legal Notice:</strong> Forces proper OTS ledger adjustment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Interest &amp; Fee Reversal:</strong> Stops post-settlement card charges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Dispute Removal:</strong> Rectifies false overdue tags.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombudsman Escalation:</strong> Complete cms.rbi.org.in filing.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Verify Bank OTS Sanction Letter
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Avoid fake settlement letters &rarr;</span>
                </Link>

                <Link
                  href="/get-noc-after-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Get NOC After Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Official bank closure steps &rarr;</span>
                </Link>

                <Link
                  href="/rbi-circular-on-loan-settlement-ots"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Circular on OTS Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Compromise settlement rules &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
