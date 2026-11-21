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

export default function ExcessPaymentBlockedCardClient() {
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
    { id: 'rbi-refund-framework', label: '1. RBI Legal Framework for Excess Balance' },
    { id: 'three-day-rule', label: '2. The 3-Working-Day Refund Mandate' },
    { id: 'refund-comparison-matrix', label: '3. Blocked Card Scenarios Matrix' },
    { id: 'why-banks-hold-funds', label: '4. Why Banks Hold Funds & Set-Offs' },
    { id: 'step-by-step-refund', label: '5. Step-by-Step Refund Guide' },
    { id: 'consumer-rights', label: '6. Borrower Rights & Legal Remedies' },
    { id: 'escalation-matrix', label: '7. 3-Tier Escalation Matrix' },
    { id: 'refund-timeline', label: '8. Procedural Timeline to Bank Credit' },
    { id: 'common-mistakes', label: '9. Common Mistakes & Special Cases' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can I get a refund for an excess payment on a blocked credit card?',
      a: 'Yes. Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct, 2022, any credit balance on your card belongs to you. You can request a direct transfer to your bank account even if the card is blocked.'
    },
    {
      q: 'How many days does a bank have to refund excess credit card balance?',
      a: 'Once you submit a formal request to reverse a credit balance into your bank account, the card issuer must complete the transfer within three working days under RBI rules.'
    },
    {
      q: 'What happens to my excess balance if my credit card is permanently closed?',
      a: 'RBI guidelines mandate that after closing a credit card account, the bank must transfer any remaining credit balance to your bank account. If the bank does not have your account details, it must contact you to collect them.'
    },
    {
      q: 'Do banks pay interest on excess money lying in a blocked credit card?',
      a: 'No. Credit card accounts are not savings accounts. Banks do not pay any interest on positive or excess credit balances sitting on a credit card.'
    },
    {
      q: 'What documents are needed to transfer excess balance to another bank account?',
      a: 'If you want the refund in a different bank account, the card issuer may ask for your account number, IFSC code, and a cancelled cheque or bank statement copy to verify ownership under KYC rules.'
    },
    {
      q: 'Can a bank keep my excess payment if I have another overdue loan with them?',
      a: 'Under Section 171 of the Indian Contract Act, 1872, a bank may exercise a right of set-off against undisputed overdue debts in your name with the same bank. However, any surplus left after clearing valid dues must be refunded to you.'
    },
    {
      q: 'What if an auto-debit paid my bill twice on a blocked credit card?',
      a: 'A double payment creates a credit balance on your card statement. You should raise a Credit Balance Refund request with customer care and cite the RBI 3-working-day transfer rule.'
    },
    {
      q: 'Does the ₹500 per day RBI penalty apply to credit balance refund delays?',
      a: 'The ₹500 per day penalty specifically applies when a bank delays closing a credit card beyond seven working days with zero dues. For delayed credit balance refunds beyond three working days, you can claim compensation through the RBI Ombudsman or Consumer Court.'
    },
    {
      q: 'How do I complain if the bank refuses to refund my blocked card balance?',
      a: 'First email the bank Grievance Redressal Officer and Principal Nodal Officer with your request number. If unresolved after 30 days, file a free complaint on the RBI CMS portal at cms.rbi.org.in.'
    },
    {
      q: 'How can CredSettle help recover funds stuck on a blocked credit card?',
      a: 'CredSettle reviews your card statement, audits any illegal deductions or set-offs, drafts formal notices citing RBI Master Directions, and escalates stuck refund claims to the Nodal Officer and RBI Ombudsman.'
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
            <span>RBI Master Direction 2022 &amp; Cardholder Refund Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Recover Excess Balance Locked in a Blocked Credit Card
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Paid extra on a blocked or closed credit card? Under Reserve Bank of India rules, banks cannot keep your excess money. Learn how to claim a direct bank refund within 3 working days and escalate delays legally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Recover Stuck Card Funds</span>
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
                  <span>RBI Cardholder Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Credit Card Master Directions, 2022 and Consumer Protection Act, 2019.
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
                <span>EXECUTIVE BRIEF: RBI CREDIT BALANCE REFUND RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">3-Working-Day Refund Rule:</strong> When you ask a bank to transfer an excess credit balance to your bank account, it must complete the transfer within three working days.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Closed Card Balance Transfer:</strong> After closing a credit card account, the issuer must transfer any remaining credit balance directly to your bank account.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Bank Must Collect Account Details:</strong> If the issuer does not have your savings account details, it must proactively contact you to collect them for the refund.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Interest on Excess Money:</strong> Banks do not pay any savings interest on excess funds sitting on a credit card. Claim your refund immediately.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Ombudsman &amp; Consumer Relief:</strong> If a bank delays or refuses a valid refund, you can escalate to the RBI Integrated Ombudsman at cms.rbi.org.in for free redressal.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: RBI Legal Framework for Excess Credit Card Balance */}
            <section id="rbi-refund-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Central Bank Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Legal Framework for Excess Credit Card Balance
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many cardholders accidentally pay more than their billed amount. Sometimes an auto-debit runs twice, or a merchant refund arrives after you already paid your bill. When this happens on a blocked or closed credit card, your money can seem trapped.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Your statement shows this surplus as a credit balance, often marked with a minus sign or &ldquo;Cr&rdquo; next to the figure. This simply means the bank owes you that money.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India governs this issue through its Master Direction on Credit Card and Debit Card Issuance and Conduct Directions, 2022. This rule binds all commercial banks, small finance banks, and NBFC card issuers in India.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under these rules, a bank cannot keep your surplus funds indefinitely. Whether your card is temporarily blocked, hotlisted, or permanently closed, the excess balance remains your legal property.
              </p>
            </section>

            {/* SECTION 2: The 3-Working-Day Refund & Card Closure Mandate */}
            <section id="three-day-rule" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Deadlines &amp; Mandatory Transfers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. The 3-Working-Day Refund &amp; Card Closure Mandate
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI Master Direction sets two clear duties for card issuers. First, under the credit balance reversal rule, you do not have to spend your excess balance on future purchases.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you make a request to transfer the credit balance to your bank account, the card issuer must complete that transfer within three working days from receiving your request.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, the card closure rule adds even stronger protection. Once a credit card account is closed, any remaining credit balance must be transferred to the cardholder&apos;s bank account automatically.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the card issuer does not have your savings or current account details on file, the bank must reach out and collect those details. It cannot use missing account information as an excuse to hold your money.
              </p>
            </section>

            {/* SECTION 3: Blocked Card Scenarios & RBI Refund Rules Matrix */}
            <section id="refund-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Scenario Breakdown &amp; Refund Timelines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Blocked Card Scenarios &amp; RBI Refund Rules Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks treat blocked cards differently depending on why the card was blocked. Understanding your exact card status helps you choose the fastest way to recover your funds.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Blocked Credit Card Refund Matrix</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">RBI Master Direction Compliant</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[560px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Card Block Type</th>
                        <th className="p-3">What Happens to Excess Balance</th>
                        <th className="p-3">RBI Timeline</th>
                        <th className="p-3">Recommended Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Hotlisted / Lost Card</td>
                        <td className="p-3">Moves to replacement card or stays refundable on request.</td>
                        <td className="p-3 font-mono text-emerald-700 font-semibold">3 Working Days</td>
                        <td className="p-3">Request bank transfer before card replacement if not needed.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Permanently Closed Card</td>
                        <td className="p-3">Bank must transfer balance to your savings account.</td>
                        <td className="p-3 font-mono text-emerald-700 font-semibold">3 Working Days</td>
                        <td className="p-3">Share cancelled cheque or IFSC if external bank account.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Auto-Debit / Double Payment</td>
                        <td className="p-3">Creates negative balance on card ledger.</td>
                        <td className="p-3 font-mono text-amber-700 font-semibold">3 Working Days</td>
                        <td className="p-3">Log Credit Balance Refund ticket and cancel old mandate.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Blocked Due to Overdue / NPA</td>
                        <td className="p-3">Bank adjusts valid unpaid dues first; surplus is yours.</td>
                        <td className="p-3 font-mono text-rose-700 font-semibold">Post Reconciliation</td>
                        <td className="p-3">Demand itemized ledger and refund of net surplus.</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Merchant Refund on Closed Card</td>
                        <td className="p-3">Credits to card shadow ledger, then becomes refundable.</td>
                        <td className="p-3 font-mono text-[#1886ff]">3 Working Days</td>
                        <td className="p-3 text-[#1886ff]">Provide ARN number and demand NEFT transfer.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Why Banks Hold Excess Balance & Set-Off Limits */}
            <section id="why-banks-hold-funds" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Bank Excuses &amp; Legal Limits on Deductions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Why Banks Hold Excess Balance &amp; Set-Off Limits
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even with clear RBI rules, customers often face delays when asking for a refund from a blocked card. Most banks give three common reasons for holding the money.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, banks often wait for unbilled transactions or active EMIs to settle before releasing funds. If a merchant pre-authorization is still pending, the bank may freeze the refund until the final bill posts.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, if your card was blocked due to missed payments, the bank may invoke its right of set-off under Section 171 of the Indian Contract Act, 1872. This allows a bank to adjust your credit balance against other undisputed overdue loans in your name with the same bank.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, a bank cannot invent fake fees or hold funds after a One-Time Settlement (OTS) is fully paid. Once all valid dues are cleared, any remaining surplus belongs strictly to you and must be refunded.
              </p>
            </section>

            {/* SECTION 5: Step-by-Step Guide to Claim Your Excess Refund */}
            <section id="step-by-step-refund" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step Guide to Claim Your Excess Refund
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six steps to get your excess payment transferred from a blocked credit card back into your bank account quickly.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Download Statement and Payment Proof
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Save your latest credit card statement showing the credit balance. Also keep the UTR number, UPI reference, or bank debit screenshot for the excess payment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Submit a Written Credit Balance Refund Request
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email customer support or use net banking to raise a formal &ldquo;Credit Balance Refund&rdquo; request. Always get a written ticket or service request number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Provide Savings Account &amp; KYC Details
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you do not hold a savings account with the same card issuer, attach a cancelled cheque or bank statement header. The account must be in your own name.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Track the 3-Working-Day RBI Deadline
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Count three working days from the date the bank received your complete request and bank details. Banks usually send the refund via NEFT or internal transfer.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Escalate to Nodal Officer on Day 4
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the money is not credited after three working days, email the bank&apos;s Principal Nodal Officer. Cite the RBI Master Direction on Credit Card Issuance and Conduct.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: File an RBI Ombudsman Complaint
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank fails to resolve your grievance within 30 days, file a complaint on cms.rbi.org.in. Attach your card statement, request ticket, and bank emails.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Borrower Legal Rights & Consumer Court Remedies */}
            <section id="consumer-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections &amp; Legal Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Borrower Legal Rights &amp; Consumer Court Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian banking and consumer laws give cardholders strong tools when a lender withholds excess funds without a valid legal reason.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>RBI Master Direction, 2022</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Mandates credit balance reversal within three working days on request and compulsory bank transfer of any credit balance after card closure.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>RBI Integrated Ombudsman Scheme</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Provides a free, online forum at cms.rbi.org.in to compel banks to refund stuck credit balances and pay compensation for service delays.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Withholding customer funds beyond RBI limits is a deficiency in service under Section 2(11). Consumer commissions can award refunds with interest and costs.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Card Closure Penalty Rule</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a bank delays closing a zero-dues card beyond seven working days, RBI mandates a ₹500 per day penalty payable to the customer until closure.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: 3-Tier Escalation Matrix: Bank GRO to Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Escalation Matrix: Bank GRO to Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If regular customer care refuses to process your refund or claims a blocked card cannot issue payouts, use this three-tier escalation ladder.
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
                      <td className="p-3 font-mono">3 to 7 Working Days</td>
                      <td className="p-3">Verifies card ledger, collects bank IFSC details, and initiates NEFT refund.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">7 to 14 Working Days</td>
                      <td className="p-3">Overrides branch blocks, audits any set-off claims, and approves manual payout.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-Complaint</td>
                      <td className="p-3">Issues binding orders on cms.rbi.org.in to refund excess balance and pay compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 8: Procedural Timeline: Request to Bank Credit */}
            <section id="refund-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Procedural Timeline: Request to Bank Credit
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking each milestone ensures you act immediately if a bank misses its statutory turnaround window.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Regulatory Phase</th>
                      <th className="p-3">Lender Action Required</th>
                      <th className="p-3">Cardholder Action Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0</td>
                      <td className="p-3 font-mono text-[11px]">Refund Request</td>
                      <td className="p-3">Logs Credit Balance Refund ticket and verifies KYC bank details.</td>
                      <td className="p-3">Submit account number, IFSC, and cancelled cheque; save ticket ID.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 3</td>
                      <td className="p-3 font-mono text-[11px]">RBI 3-Day Window</td>
                      <td className="p-3">Processes NEFT or internal account credit for full excess balance.</td>
                      <td className="p-3">Monitor bank account statement for incoming credit.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 4 to 10</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Delay Breach</td>
                      <td className="p-3">Issuer is in breach of RBI 3-working-day reversal mandate.</td>
                      <td className="p-3 font-bold text-amber-800">Escalate in writing to GRO and Principal Nodal Officer.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 31 Onwards</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Ombudsman Filing</td>
                      <td className="p-3">Faces formal RBI Ombudsman inquiry and deficiency findings.</td>
                      <td className="p-3 font-bold text-slate-900">Lodge complaint on cms.rbi.org.in with all written proofs.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Common Mistakes & Special Refund Scenarios */}
            <section id="common-mistakes" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Avoidable Delays &amp; Special Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Common Mistakes &amp; Special Refund Scenarios
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Simple errors during the refund request often cause avoidable rejections. Watch out for these four common situations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Third-Party Account Mismatch
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks cannot transfer credit card refunds to a spouse&apos;s or friend&apos;s bank account under anti-money laundering rules. Always provide a bank account in your own name.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1886ff]" />
                    Active Auto-Debit Mandates
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Blocking a credit card does not automatically cancel NACH or standing instructions on third-party apps. Cancel bill auto-pay immediately to prevent repeated overpayments.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    Small Residual Balances
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Even small excess balances of ₹100 or ₹500 on a closed card must be refunded. Banks cannot write off or absorb customer credit balances as miscellaneous income.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-indigo-600" />
                    Excess Paid During Settlement
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you paid more than the agreed One-Time Settlement amount, keep the signed OTS letter ready. Demand an immediate refund of any amount paid above the settlement figure.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 11: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Excess Card Balance Refund
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers to common questions about recovering excess payments from blocked or closed credit cards under RBI rules.
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

            {/* SECTION 12: Citations & Outbound Authority Grid */}
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
                  <strong>Reserve Bank of India Master Direction:</strong> Master Direction on Credit Card and Debit Card Issuance and Conduct Directions, 2022 (updated March 7, 2024) - Credit Balance Reversal within 3 Working Days and Mandatory Balance Transfer on Card Closure.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Grievance Redressal and Compensation for Deficiency in Banking Service.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) (Deficiency of Service) and Section 39 (Orders for Refund and Compensation).
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 171 (Banker&apos;s General Lien and Limits on Right of Set-Off).
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
                  <a href="http://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Disputes Redressal Commission</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.npci.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>NPCI Payment Guidelines</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/merchant-refund-on-blocked-settled-credit-card-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Merchant Refund on Blocked Card
                  </Link>
                  <Link href="/unactivated-credit-card-charges-rbi-500-day-penalty" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unactivated Card 500/Day Penalty
                  </Link>
                  <Link href="/unused-credit-card-annual-fee-cibil-npa-rbi-closure" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unused Card Annual Fee Fix
                  </Link>
                  <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Overlimit Fee RBI Refund
                  </Link>
                  <Link href="/credit-card-pending-chargeback-rbi-shadow-credit-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pending Chargeback Shadow Credit
                  </Link>
                  <Link href="/one-credit-card-default-blocks-second-card-same-bank" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    UCIC Multi-Card Block Rules
                  </Link>
                  <Link href="/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Guide
                  </Link>
                  <Link href="/stop-credit-card-recovery-calls" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Card Recovery Calls
                  </Link>
                  <Link href="/credit-card-npa-timeline" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card NPA Timeline
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    CIBIL Delay 100/Day Penalty
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
                Specialist in banking compliance, credit card dispute resolution, RBI statutory guidelines, and consumer protection with extensive experience recovering stuck customer funds.
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
                  STUCK REFUND SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Holding Your Blocked Card Balance?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking experts draft formal notices under the RBI Credit Card Master Direction, challenge unlawful set-offs, and escalate stuck refunds to the RBI Ombudsman.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Claim Your Refund Now
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
                  <span><strong>3-Working-Day Enforcement:</strong> Direct citation of RBI refund rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ledger Audit:</strong> Identify illegal charges or wrongful set-offs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Nodal Officer Escalation:</strong> Structured written representations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Support:</strong> Complete CMS portal filing help.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/merchant-refund-on-blocked-settled-credit-card-recovery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Merchant Refund on Blocked Card
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Recover merchant credits &rarr;</span>
                </Link>

                <Link
                  href="/unactivated-credit-card-charges-rbi-500-day-penalty"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unactivated Card 500/Day Penalty
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI closure &amp; billing rules &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-overlimit-fee-without-consent-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Overlimit Fee RBI Refund
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Reverse unauthorized fees &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
