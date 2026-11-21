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
  Calendar,
  CreditCard,
  RefreshCw,
  ShieldAlert
} from 'lucide-react';

export default function FailedPosDoubleChargeClient() {
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
    { id: 'quick-crux', label: 'Executive Brief: RBI POS TAT Rules' },
    { id: 'statutory-framework', label: '1. Statutory Framework: RBI TAT Auto-Reversal Rules' },
    { id: 'pos-error-anatomy', label: '2. POS Double Swipe Dynamics: Terminal Error Anatomy' },
    { id: 'compensation-rule', label: '3. The RBI 100 Per Day Compensation Rule Explained' },
    { id: 'calculation-matrix', label: '4. Compensation Calculation Matrix: Daily Delay Math' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint: POS Dispute and Redressal Flow' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step SOP: Reversing Erroneous POS Debits' },
    { id: 'cibil-defense', label: '7. CIBIL Score Defense: Shielding Against Default Marks' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman' },
    { id: 'procedural-timeline', label: '9. Procedural Timeline: Swiping Error to Refund Payout' },
    { id: 'merchant-excuses', label: '10. Common Merchant Excuses and Banking Countermeasures' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions: POS Double Swipe Refunds' },
    { id: 'regulatory-sources', label: 'Official Regulatory Citations & Statutory References' }
  ];

  const faqs = [
    {
      q: 'What is the RBI rule for a failed POS swipe or double debit?',
      a: 'Under RBI circular DPSS.CO.PD No.629/02.01.014/2019-20, when a card is debited at a Point of Sale (POS) terminal but no confirmation or charge-slip is generated, the bank must auto-reverse the funds within T + 5 calendar days (where T is transaction date). If delayed beyond T + 5 days, the bank must pay compensation of Rs 100 per day.'
    },
    {
      q: 'Do I need to file an application to receive the Rs 100 per day compensation?',
      a: 'No. The RBI directive explicitly states that compensation of Rs 100 per calendar day of delay beyond T + 5 days must be credited to the cardholder account suo motu (automatically), without requiring the customer to lodge a formal claim.'
    },
    {
      q: 'What should I do if a merchant claims the swipe failed and asks me to swipe again?',
      a: 'Ask the merchant for the printed charge slip showing "Transaction Failed", "Declined", or "Network Error". Keep that error slip carefully. If you swipe a second time and both amounts are deducted, that error slip serves as primary evidence for your bank chargeback dispute.'
    },
    {
      q: 'Can a bank charge interest or late fees on a duplicate POS charge under dispute?',
      a: 'No. Under Clause 10 of the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct, 2022, card issuers are strictly prohibited from levying interest, finance charges, or late payment fees on disputed transactions until the grievance is resolved.'
    },
    {
      q: 'What is shadow reversal or temporary credit during a POS chargeback?',
      a: 'When you dispute a duplicate POS debit, card networks (Visa, Mastercard, RuPay) and banks typically provide a temporary shadow credit to your card balance while they investigate the merchant acquiring bank. This prevents your available limit from being blocked.'
    },
    {
      q: 'Can a failed POS double charge hurt my CIBIL credit score?',
      a: 'If you refuse to pay the duplicate fraudulent charge and the bank incorrectly marks your account as overdue or in default, it damages your CIBIL score. This violates RBI rules. You can demand immediate credit bureau rectification plus Rs 100 per day compensation under RBI circular RBI/2023-24/72 if delayed beyond 30 days.'
    },
    {
      q: 'What is the time limit for raising a chargeback for a duplicate POS charge?',
      a: 'Card issuers generally allow 30 to 60 days from the statement date to lodge a formal billing dispute. However, under card network operating rules (Visa, Mastercard, RuPay), technical chargebacks for duplicate processing can be initiated within up to 120 days from transaction date.'
    },
    {
      q: 'What if the bank fails to reverse the duplicate swipe after 30 days?',
      a: 'If the bank fails to reverse the duplicate debit and pay your statutory delay compensation within 30 days of your complaint, you can file a complaint with the Reserve Bank - Integrated Ombudsman at cms.rbi.org.in or approach the District Consumer Commission for deficiency in service.'
    },
    {
      q: 'Does the T + 5 days rule apply to online e-commerce transactions as well?',
      a: 'Yes. Under the same RBI Harmonisation of TAT circular, Card Not Present (CNP) e-commerce transactions debited without merchant order confirmation also carry strict auto-reversal timelines with the same Rs 100 per day penalty for delayed refunds.'
    },
    {
      q: 'How does CredSettle help cardholders facing unresolved POS double charge debts?',
      a: 'CredSettle issues formal legal notices under RBI guidelines, halts predatory recovery calls, demands full reversal of duplicate debits and finance charges, recovers statutory delay penalties, and secures complete CIBIL score rectification.'
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
            <span>RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20 Compliance</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Claim RBI TAT Compensation for Failed Card Transactions
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Understand your binding statutory rights when a card terminal debits your account twice or fails to print a slip. Learn how to force auto-reversals within T + 5 days, claim Rs 100 per day delay compensation, and shield your CIBIL score.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Dispute Double Charge Now</span>
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
                  Protected under RBI Circular RBI/2019-20/67 and Master Direction 2022.
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
                <span>EXECUTIVE BRIEF: FAILED POS DOUBLE CHARGE AND RBI COMPENSATION</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory T + 5 Auto-Reversal:</strong> Under RBI rules, if your card is debited at a Point of Sale (POS) machine without a successful slip, the bank must auto-reverse the money within T + 5 calendar days.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Statutory Rs 100/Day Delay Penalty:</strong> If the bank delays refunding the duplicate or failed charge beyond T + 5 days, it must pay Rs 100 per day directly to your card account.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Automatic (Suo Motu) Credit:</strong> You do not need to beg for compensation. The RBI circular mandates that lenders credit the daily delay penalty automatically without waiting for a claim.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Ban on Interest and Penal Fees:</strong> Under RBI Master Direction 2022, banks cannot levy finance charges, 42% APR interest, or late fees on disputed double swipes while investigation is pending.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">CIBIL Protection &amp; Rectification:</strong> Banks cannot report disputed duplicate transactions as overdue to CIBIL. If reported, the bank faces an additional Rs 100 per day penalty under CICRA rules.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Framework: RBI TAT Auto-Reversal Rules */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Central Bank Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Framework: RBI TAT Auto-Reversal Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Cardholders across India frequently experience payment glitches at checkout counters. You swipe or tap your card at a merchant terminal, but the machine shows a timeout error. The merchant claims the payment failed and insists on a second swipe. Within minutes, you receive two debit alerts for the same purchase.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To eliminate consumer distress caused by technical failures, the Reserve Bank of India enacted circular DPSS.CO.PD No.629/02.01.014/2019-20 on September 20, 2019. This framework harmonized turnaround times (TAT) and customer compensation across all authorized digital payment systems in India.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under this framework, Point of Sale (POS) Card Present transactions have a strict resolution window. If an account is debited but confirmation is not received at the merchant terminal, the issuer and acquirer must auto-reverse the funds within T + 5 calendar days. The letter T represents the transaction date.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This rule applies equally to credit cards, debit cards, prepaid cards, and cash-at-POS withdrawals. The central bank made this timeline mandatory to stop banks from blaming merchants or network switches for delayed customer refunds.
              </p>
            </section>

            {/* SECTION 2: POS Double Swipe Dynamics: Terminal Error Anatomy */}
            <section id="pos-error-anatomy" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CreditCard className="w-4 h-4 text-[#1886ff]" />
                <span>Technical Anatomy &amp; Transaction Failure Breakdown</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. POS Double Swipe Dynamics: Terminal Error Anatomy
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding how a duplicate POS debit occurs helps you protect your financial rights immediately. When you dip or tap your card on an electronic data capture (EDC) terminal, a complex communication loop takes place between four key parties.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The terminal connects to the merchant acquiring bank. The acquiring bank sends an authorization request through card networks like Visa, Mastercard, or RuPay. The network routes the signal to your card-issuing bank. Your bank checks your credit limit, approves the charge, debits your balance, and sends back an authorization code.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A double charge happens when this loop breaks at the final step. Your bank authorizes the payment, but the terminal loses network connectivity before printing the charge slip. The merchant terminal logs a failure. Believing no payment occurred, the merchant executes a second swipe. This second swipe creates a duplicate authorized charge.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under banking rules, an unconfirmed transaction should automatically drop during daily batch settlement. However, when acquiring systems fail to reconcile properly, both debits reflect on your billing statement. This turns an operational glitch into an unfair consumer liability.
              </p>
            </section>

            {/* SECTION 3: The RBI 100 Per Day Compensation Rule Explained */}
            <section id="compensation-rule" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Penalties &amp; Suo Motu Restitution</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. The RBI 100 Per Day Compensation Rule Explained
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The core protective mechanism of the RBI Harmonisation circular is the mandatory delay penalty. The central bank recognized that without financial consequences, commercial lenders take weeks or months to process failed transaction chargebacks.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The rule states that if the bank fails to reverse the unconfirmed debit within T + 5 calendar days, it must pay compensation of Rs 100 for every single day of delay. This penalty starts accruing on calendar day T + 6 and continues until the money is credited back to your account.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Crucially, paragraph 4 of the RBI circular mandates that this compensation must be credited to the cardholder account automatically (suo motu). The customer does not have to file a separate compensation claim or submit proof of actual financial damages.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Furthermore, under Clause 10 of the RBI Master Direction on Credit Card Issuance and Conduct (2022), the issuing bank cannot bill you for the disputed amount. The bank must place the disputed duplicate charge under shadow credit or suspend billing until resolution.
              </p>
            </section>

            {/* SECTION 4: Compensation Calculation Matrix: Daily Delay Math */}
            <section id="calculation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Penalty Formulas &amp; Accrual Ledger</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Compensation Calculation Matrix: Daily Delay Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Calculating your statutory compensation is straightforward. The penalty is a fixed statutory rate of Rs 100 per day for each calendar day beyond the T + 5 turnaround window.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For example, if you faced a double swipe on October 1 and the bank reversed the duplicate Rs 10,000 debit only on October 26, the permissible turnaround ended on October 6. The bank caused a 20-day delay, entitling you to Rs 2,000 in mandatory compensation.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Failed POS Transaction Delay Accrual Ledger</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Rs 100 Flat Daily Accrual Rate</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Timeline Post-Swipe</th>
                        <th className="p-3">Delay Days Beyond T + 5</th>
                        <th className="p-3">Statutory Regulatory Status</th>
                        <th className="p-3 text-right">Compensation Owed to Cardholder</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day T to Day T + 5</td>
                        <td className="p-3 font-mono">0 Days</td>
                        <td className="p-3 text-emerald-600 font-semibold">Permissible Auto-Reversal Window</td>
                        <td className="p-3 text-right font-bold text-slate-500">Rs 0 (Statutory Resolution TAT)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day T + 10 (5 Days Delay)</td>
                        <td className="p-3 font-mono text-amber-600 font-bold">5 Days Delay</td>
                        <td className="p-3 text-amber-600 font-semibold">Statutory Breach: Suo Motu Penalty</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">Rs 500</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day T + 20 (15 Days Delay)</td>
                        <td className="p-3 font-mono text-amber-600 font-bold">15 Days Delay</td>
                        <td className="p-3 text-amber-600 font-semibold">Continued Non-Compliance</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">Rs 1,500</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day T + 35 (30 Days Delay)</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">30 Days Delay</td>
                        <td className="p-3 text-rose-600 font-semibold">Escalation Threshold: RBI Ombudsman</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">Rs 3,000 + Interest Reversal</td>
                      </tr>
                      <tr className="bg-blue-50/40">
                        <td className="p-3 font-medium text-slate-900">Day T + 65 (60 Days Delay)</td>
                        <td className="p-3 font-mono text-[#1886ff] font-bold">60 Days Delay</td>
                        <td className="p-3 text-[#1886ff] font-semibold">Severe Deficiency in Service</td>
                        <td className="p-3 text-right font-bold text-[#1886ff] font-mono">Rs 6,000 + Punitive Damages</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 5: Visual Blueprint: POS Dispute and Redressal Flow */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: POS Dispute and Redressal Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual guide maps out the exact steps from the moment a POS terminal errors out to securing your full refund and statutory Rs 100 per day compensation.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/double-swipe-failed-pos-credit-card-rbi-100-day-rule.jpg"
                    alt="Failed POS Double Charge on Card and RBI 100 Per Day Refund Rule"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Cardholder Protection Framework • RBI TAT Guidelines Compliant</span>
                  <a
                    href="/images/infographics/double-swipe-failed-pos-credit-card-rbi-100-day-rule.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Reversing Erroneous POS Debits */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Reversing Erroneous POS Debits
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you notice an unauthorized double charge on your credit card statement, immediate action is critical. Follow this six-stage standard operating procedure to reverse the duplicate debit and claim your compensation.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Secure Charge Slips &amp; Transaction Evidence
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Always retain the physical paper slip printed by the POS terminal. If the terminal displayed an error, take a photograph of the screen showing "Declined", "Error", or "Batch Failure". Keep the merchant invoice showing single purchase delivery.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Monitor for Automatic T + 5 Reversal
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check your mobile banking app or card statement for 5 calendar days following the transaction date. Most failed technical authorizations drop off automatically during the merchant daily batch settlement.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: File Formal Written Dispute with Card Issuer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the second charge settles into your unbilled or billed transactions on Day T + 6, lodge a formal dispute immediately. Submit the dispute via your bank net-banking portal or email the dispute desk. Request an official Dispute Reference Number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Demand Shadow Credit and Interest Freeze
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Cite Clause 10 of RBI Master Direction 2022. Explicitly demand that the issuer freeze all interest, finance charges, and late payment fees on the disputed amount. Ensure your available credit limit is restored via temporary shadow reversal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Demand Suo Motu Daily Delay Compensation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Reference RBI circular DPSS.CO.PD No.629/02.01.014/2019-20. State the exact number of calendar days elapsed since Day T + 5 and claim Rs 100 per day of delay. Lenders cannot dismiss this claim as discretionary.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Escalate Unresolved Cases to RBI Ombudsman
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank fails to reverse the duplicate charge and credit statutory compensation within 30 days, escalate to the Principal Nodal Officer and file a complaint on the RBI CMS portal at cms.rbi.org.in.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: CIBIL Score Defense: Shielding Against Default Marks */}
            <section id="cibil-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Integrity &amp; Damage Prevention</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. CIBIL Score Defense: Shielding Against Default Marks
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The most dangerous consequence of a failed POS double charge is credit bureau damage. When a cardholder refuses to pay an illegitimate duplicate charge of Rs 10,000 or Rs 50,000, automated bank systems generate overdue notices.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If unpaid for over 30 days, the bank algorithm flags your account as 30+ DPD (Days Past Due) and reports you as delinquent to CIBIL, Experian, CRIF High Mark, and Equifax. This drops your credit score by 60 to 120 points, crippling your loan eligibility.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Statutory Immunity During Dispute</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the RBI Master Direction on Credit Cards, banks cannot report an account as delinquent to credit bureaus while a formal transaction dispute is pending investigation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>CICRA Rs 100/Day Bureau Delay Fine</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI circular RBI/2023-24/72, if a bank fails to rectify an erroneous default entry with credit bureaus within 30 days of receiving your complaint, it must pay Rs 100 per day in additional compensation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <RefreshCw className="w-4 h-4" />
                    <span>Chargeback Shadow Reversals</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Demanding temporary shadow credit isolates the disputed amount from your monthly minimum amount due (MAD). This prevents late fees and protects your clean repayment history.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Consumer Forum Defamation Claims</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Consumer courts have held that ruining a borrower credit score due to bank billing negligence constitutes severe deficiency in service, awarding punitive damages of up to Rs 1,00,000.
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
                If regular bank call centers refuse to reverse the double swipe or pay your statutory delay compensation, use the official RBI 3-tier grievance mechanism.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Statutory Powers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Retrieves terminal acquirer logs, verifies duplicate authorization codes, and reverses erroneous interest.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Audits card switch settlement logs, initiates card network chargebacks, and authorizes Rs 100/day payouts.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Issues binding awards on cms.rbi.org.in ordering refund, Rs 100/day compensation, and up to Rs 1,00,000 for mental agony.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline: Swiping Error to Refund Payout */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Swiping Error to Refund Payout
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing key regulatory milestones ensures you never let bank delays slip past the statutory deadline without legal consequences.
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
                      <td className="p-3 font-bold text-slate-900">Day 0 (Day T)</td>
                      <td className="p-3 font-mono text-[11px]">Transaction Date</td>
                      <td className="p-3">Terminal logs error; authorization holds funds in customer account.</td>
                      <td className="p-3">Collect failed slip from merchant and note terminal merchant ID.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day T + 1 to T + 5</td>
                      <td className="p-3 font-mono text-[11px]">Mandatory Auto-Reversal Window</td>
                      <td className="p-3">Reconcile unconfirmed debits and drop pending hold automatically.</td>
                      <td className="p-3">Monitor account ledger; do not pay disputed charges on statement.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day T + 6</td>
                      <td className="p-3 font-mono text-[11px] text-amber-600 font-bold">Penalty Clock Starts</td>
                      <td className="p-3">Accrue Rs 100 per day statutory delay penalty in cardholder ledger.</td>
                      <td className="p-3">Submit formal billing dispute via email to bank card services.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day T + 30</td>
                      <td className="p-3 font-mono text-[11px] text-rose-600 font-bold">Bank Resolution Outer Limit</td>
                      <td className="p-3">Must conclude dispute under Master Direction Clause 10 or reverse charge.</td>
                      <td className="p-3">If unresolved, file case with RBI Integrated Ombudsman at cms.rbi.org.in.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day T + 45 to T + 60</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Ombudsman Award &amp; Payout</td>
                      <td className="p-3">Execute binding ombudsman order, credit refund, and pay penalty.</td>
                      <td className="p-3">Verify full reversal of finance charges and inspect CIBIL report.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Common Merchant Excuses and Banking Countermeasures */}
            <section id="merchant-excuses" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Commercial Realities &amp; Legal Defenses</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Common Merchant Excuses and Banking Countermeasures
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When dealing with duplicate POS debits, cardholders face a barrage of standard excuses from retail store owners and bank customer care representatives. Here is how statutory regulations dismantle each excuse.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Merchant Excuse: "Talk to Your Bank, We Did Not Get Money"
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Legal Countermeasure: You do not need the merchant permission to raise a chargeback. Your contract is with your card issuer. Under RBI rules, the issuer must investigate the acquiring bank directly and reverse unconfirmed amounts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Bank Excuse: "It Was an Authorized PIN/OTP Swipe"
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Legal Countermeasure: An authorization without a valid charge slip or with duplicate authorization codes within minutes is classified as technical failure. The burden of proof rests on the bank to show dual merchandise delivery.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Bank Excuse: "You Must Pay Bill First, Then We Refund"
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Legal Countermeasure: False. Under Clause 10 of RBI Master Direction 2022, cardholders cannot be forced to pay disputed charges. The issuer must place disputed amounts in shadow credit until the grievance is resolved.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Bank Excuse: "Delay Compensation Does Not Apply to Credit Cards"
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Legal Countermeasure: Circular RBI/2019-20/67 covers all authorized payment systems and card-present POS terminals. It applies equally to credit card transactions, making the Rs 100 per day penalty legally enforceable.
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
                Frequently Asked Questions: POS Double Swipe Refunds
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding failed POS transactions, double swipe charges, daily delay compensation, and borrower protection under RBI rules.
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
                  <strong>Reserve Bank of India Circular:</strong> RBI/2019-20/67 DPSS.CO.PD No.629/02.01.014/2019-20, Harmonisation of Turn Around Time (TAT) and customer compensation for failed transactions using authorised Payment Systems.
                </li>
                <li>
                  <strong>RBI Master Direction:</strong> DOR.AUT.REC.No.27/24.01.041/2022-23 (Master Direction – Credit Card and Debit Card – Issuance and Conduct Directions, 2022), Clause 10 (Billing and Dispute Resolution).
                </li>
                <li>
                  <strong>Payment and Settlement Systems Act, 2007 (PSS Act):</strong> Section 18, Regulatory directions to payment system providers and authorized bank networks.
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Rules regarding 30-day dispute rectification and RBI/2023-24/72 Rs 100/day compensation mandate.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Clause 10, Deficiency in digital transaction settlement and statutory compensation orders.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) (Deficiency in Service) and Section 39 (Orders for Punitive Damages and Harassment Compensation).
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
                    <span>NPCI Dispute Resolution</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/unactivated-credit-card-charges-rbi-500-day-penalty" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unactivated Card Rs 500/Day Penalty
                  </Link>
                  <Link href="/credit-card-pending-chargeback-rbi-shadow-credit-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Shadow Credit Rules
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Rs 100/Day CIBIL Update Compensation
                  </Link>
                  <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Overlimit Fee Refund
                  </Link>
                  <Link href="/bank-increased-credit-card-apr-interest-rbi-opt-out" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Interest Hike Opt-Out
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Debt Settlement
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Agent Harassment
                  </Link>
                  <Link href="/credit-card-bill-paid-wrong-card-number-neft-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Card Bill Paid to Wrong Number
                  </Link>
                  <Link href="/excess-overpayment-blocked-credit-card-refund-rbi-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Excess Payment on Blocked Card Refund
                  </Link>
                  <Link href="/sim-swap-phishing-credit-card-debt-rbi-zero-liability" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    SIM Swap Fraud Zero Liability
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
                Specialist in digital payments law, banking compliance, credit card chargebacks, RBI statutory compensation directives, and consumer debt defense under central bank mandates.
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
                  FAILED POS DISPUTE SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Refusing Double Charge Refund?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking advocates issue formal statutory notices under RBI circular DPSS.CO.PD No.629/02.01.014/2019-20, compel immediate charge reversals, freeze interest, and recover your Rs 100/day compensation.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Claim Rs 100/Day Compensation
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
                  <span><strong>100% RBI TAT Enforcement:</strong> Direct invocation of circular RBI/2019-20/67.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Daily Penalty Recovery:</strong> Rs 100 per day automatic compensation demand.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Interest &amp; Late Fee Freeze:</strong> Protection against APR finance charges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Bureau Shield:</strong> Elimination of wrongful default or DPD marks.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Card Dispute Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/credit-card-pending-chargeback-rbi-shadow-credit-rules"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Shadow Credit Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Temporary credit during dispute &rarr;</span>
                </Link>

                <Link
                  href="/unactivated-credit-card-charges-rbi-500-day-penalty"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unactivated Card Rs 500/Day Penalty
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI 30-day closure rules &rarr;</span>
                </Link>

                <Link
                  href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Rs 100/Day CIBIL Update Compensation
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">CICRA 30-day bureau correction &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
