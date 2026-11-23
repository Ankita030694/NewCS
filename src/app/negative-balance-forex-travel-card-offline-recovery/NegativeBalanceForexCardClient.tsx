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
  Calendar,
  Plane
} from 'lucide-react';

export default function NegativeBalanceForexCardClient() {
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
    { id: 'why-negative-balance', label: '1. Why Cards Go Negative' },
    { id: 'rbi-fema-framework', label: '2. RBI PPI & FEMA Rules' },
    { id: 'liability-breakdown', label: '3. Offline Charges vs Bank Fees' },
    { id: 'banker-lien-setoff', label: '4. Banker Lien & Set-Off Rules' },
    { id: 'step-by-step-dispute', label: '5. Disputing Negative Balances' },
    { id: 'cibil-impact-rules', label: '6. CIBIL Impact & ₹100/Day Rule' },
    { id: 'zero-liability-rules', label: '7. Zero Liability on Fraud Swipes' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'recovery-timelines', label: '9. Recovery Notice Timelines' },
    { id: 'specialized-scenarios', label: '10. Multi-Currency & Expired Cards' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'How can a prepaid forex or travel card go into a negative balance?',
      a: 'A prepaid forex card goes negative when an offline seller bills you after your funds run out. Common cases are flight Wi-Fi, cruise bills, road tolls, hotel holds, and late FX markups.'
    },
    {
      q: 'Are banks allowed to give credit on a prepaid forex travel card under RBI rules?',
      a: 'No. Under RBI rules for Prepaid Payment Instruments (PPIs), travel cards are pre-funded. Banks cannot give a credit line on them. A negative balance is just a late-settled shortfall.'
    },
    {
      q: 'Does a negative balance on a forex card hurt my CIBIL score?',
      a: 'Prepaid forex cards do not send monthly reports to CIBIL like credit cards do. Yet if you leave a real deficit unpaid for months, the bank may mark it as bad debt. Wrong CIBIL entries can be fixed under CICRA, 2005.'
    },
    {
      q: 'Can a bank freeze or debit my savings account to recover a negative forex card balance?',
      a: 'Under Section 171 of the Indian Contract Act, 1872, banks have a general lien on accounts in the same name. However, they cannot touch a joint account for a sole card debt, nor take disputed sums without checking.'
    },
    {
      q: 'In what currency must I settle a genuine negative balance on a forex card in India?',
      a: 'Under FEMA rules, any fee or debt paid in India on a travel card must be paid in Indian Rupees (INR). Your bank will convert the foreign shortfall into INR at its card rate.'
    },
    {
      q: 'What if the negative balance was caused by an unauthorized or duplicate transaction?',
      a: 'Under RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18, you have zero loss for fraud swipes if you report them within 3 working days of the alert, as long as you did not share your PIN or OTP.'
    },
    {
      q: 'Can I be charged compound interest or heavy late fees on a forex card deficit?',
      a: 'Prepaid forex cards do not carry credit card interest rates. Banks can only ask for the real spend shortfall and clear fees listed in your card terms. Hidden penal fees break RBI fair rules.'
    },
    {
      q: 'Can recovery agents harass me over an unpaid travel card negative balance?',
      a: 'No. Under RBI Fair Practices rules, agents cannot call at odd hours, threat you, or call your family and boss. You can report bad conduct to the bank GRO and the RBI Ombudsman.'
    },
    {
      q: 'How do I escalate an unresolved forex card negative balance dispute?',
      a: 'First write to the bank helpdesk and Grievance Redressal Officer (GRO). If they do not fix it in 30 days, write to the Principal Nodal Officer (PNO) and file a free claim at cms.rbi.org.in.'
    },
    {
      q: 'How can CredSettle help with forex or travel credit card negative balance notices?',
      a: 'CredSettle checks your card statement, splits real spend from unfair fees or fraud swipes, fights wrongful bank account holds, stops agent calls, and represents you before the RBI Ombudsman.'
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
            <Plane className="w-3.5 h-3.5" />
            <span>RBI PPI Directions, FEMA Rules &amp; Offline Charge Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Dispute Offline Negative Balance Notices on Travel Cards
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Received a recovery notice for a negative balance on your prepaid forex or travel card? Understand RBI PPI rules, FEMA settlement laws, savings account lien limits, and how to challenge unfair offline charges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Resolve Forex Card Dispute</span>
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
                  <span>RBI &amp; FEMA Cardholder Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI PPI Master Directions, FEMA rules, and the RBI Integrated Ombudsman Scheme.
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
                <span>EXECUTIVE BRIEF: FOREX &amp; TRAVEL CARD NEGATIVE BALANCE RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Prepaid Cards Cannot Lend Money:</strong> Under RBI PPI rules, standard forex cards cannot offer credit lines. Negative balances happen only when offline or delayed charges settle after your funds run out.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Settlement Must Be in INR:</strong> Under FEMA guidelines, any genuine negative balance or fee recovered in India must be billed and settled in Indian Rupees (INR).
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Liability on Unauthorized Swipes:</strong> If fraud or a duplicate swipe caused the deficit, reporting it within 3 working days gives you zero liability under RBI Circular DBR.No.Leg.BC.78.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Limits on Savings Account Lien:</strong> Banks can exercise a general lien under Section 171 of the Contract Act only on accounts held in the exact same name and capacity. Joint accounts are protected.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">CIBIL Error Compensation:</strong> If a bank wrongly reports a disputed forex deficit to CIBIL and delays fixing it past 30 days, you can claim ₹100 per day under RBI rules.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1 */}
            <section id="why-negative-balance" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Plane className="w-4 h-4 text-[#1886ff]" />
                <span>Offline Settlements &amp; Currency Buffers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Why Forex &amp; Travel Cards Go Into Negative Balance
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A prepaid forex card lets you spend only the funds you load upfront. Most users think the card will decline once the balance hits zero.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Yet some foreign sellers process payments offline without checking your live balance. Flight Wi-Fi, cruise ships, road tolls, and train gates often approve a swipe first and bill it days later.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                By the time that late bill reaches your bank, you may have spent or cashed out your funds. As a result, your card drops below zero and shows a negative balance.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Negative balances also happen due to hotel holds, car rental deposits, currency conversion markups, or card fees billed after your trip ends.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="rbi-fema-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Central Bank Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI PPI Rules &amp; FEMA Guidelines on Travel Cards
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Two main laws govern forex travel cards in India. First, the Reserve Bank of India (RBI) sets rules under its Master Directions on Prepaid Payment Instruments (PPIs).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under PPI rules, standard travel cards cannot offer a credit line or loan. So a negative balance is not an approved loan. It is just a shortfall from a late-cleared bill.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, foreign spend falls under the Foreign Exchange Management Act, 1999 (FEMA) and the Liberalised Remittance Scheme (LRS). Under RBI rules, banks may hold a small buffer, often up to USD 100, when you close a card to cover pending offline bills.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Also, FEMA rules state that any debt or fee paid in India on a travel card must be paid in Indian Rupees (INR). A bank cannot make you buy fresh foreign cash to clear an old card deficit.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="liability-breakdown" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Charge Classification &amp; Legal Liability</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Offline Charges vs Bank Fees: Liability Breakdown
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before you pay a single rupee toward a negative balance notice, you must check what caused the deficit. Not every negative balance is your legal responsibility.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The table below separates genuine offline spending from bank errors, hidden fees, and unauthorized debits under RBI rules.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Forex Card Negative Balance Liability Matrix</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">RBI &amp; Contract Law Audit</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Cause of Negative Balance</th>
                        <th className="p-3">Typical Example</th>
                        <th className="p-3">Customer Liability</th>
                        <th className="p-3 text-right">Recommended Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Genuine Offline Merchant</td>
                        <td className="p-3">Inflight Wi-Fi, toll, cruise bill</td>
                        <td className="p-3 text-amber-700 font-semibold">Liable for Principal in INR</td>
                        <td className="p-3 text-right font-bold text-slate-700">Verify receipt &amp; pay principal</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Duplicate POS Swipe</td>
                        <td className="p-3">Merchant billed twice for one stay</td>
                        <td className="p-3 text-emerald-600 font-semibold">Zero Liability (Chargeback)</td>
                        <td className="p-3 text-right font-bold text-[#1886ff]">File chargeback dispute</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Unauthorized Fraud Swipe</td>
                        <td className="p-3">Card skimmed abroad, no OTP</td>
                        <td className="p-3 text-emerald-600 font-semibold">Zero Liability (If reported fast)</td>
                        <td className="p-3 text-right font-bold text-[#1886ff]">Report within 3 working days</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Undisclosed Bank Fees</td>
                        <td className="p-3">Surprise inactivity or closure fee</td>
                        <td className="p-3 text-emerald-600 font-semibold">Disputable Under MITC Rules</td>
                        <td className="p-3 text-right font-bold text-rose-700">Demand fee waiver in writing</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Bank Forex Rate Error</td>
                        <td className="p-3">Wrong cross-currency markup applied</td>
                        <td className="p-3 text-[#1886ff]">Bank Must Rectify</td>
                        <td className="p-3 text-right text-[#1886ff]">Escalate to Bank GRO / PNO</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="banker-lien-setoff" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Section 171 Contract Act &amp; Account Holds</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Banker&apos;s Lien &amp; Savings Account Set-Off Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many cardholders discover a negative forex balance only when the bank freezes funds in their savings account. Banks often claim they have this power under Section 171 of the Indian Contract Act, 1872.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 171 gives bankers a general lien, which works alongside the common-law right of set-off. This lets a bank combine two accounts held by the same customer and use a positive balance to clear an undisputed debt.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, a bank&apos;s right of set-off is not unlimited. Two strict legal rules protect your savings:
              </p>
              <ul className="space-y-2 text-sm md:text-base text-slate-700 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Same Capacity Rule:</strong> The bank can only set off accounts held in the exact same name and legal capacity. If the forex card is in your sole name, the bank cannot freeze or debit a joint savings account you share with your spouse or parent.
                </li>
                <li>
                  <strong>Undisputed &amp; Definite Debt:</strong> A bank should not freeze your entire salary or savings account over a disputed or unauthorized offline charge. If you have filed a formal dispute, the bank must investigate before exercising any recovery hold.
                </li>
              </ul>
            </section>

            {/* SECTION 5 */}
            <section id="step-by-step-dispute" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step Guide: Disputing Negative Balances
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you receive an SMS, email, or recovery notice about a negative balance on your forex or travel card, follow these five steps to protect yourself.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Request the Itemized Multi-Currency Statement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Write to the bank asking for the exact transaction date, merchant name, settlement currency, and exchange rate used. Never pay a lump-sum demand without seeing the itemized ledger.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Match Charges Against Travel Receipts
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Compare the statement with your boarding passes, hotel folios, and car rental invoices. Look for duplicate authorizations, unreturned security deposits, or charges posted after you left the country.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Lodge a Formal Chargeback or Fraud Dispute
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If a charge is duplicate or unauthorized, submit a written dispute form immediately. Ask the bank to raise a Visa or Mastercard chargeback and place all collection calls on hold.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Demand Waiver of Unfair Penal Fees
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the offline spend is genuine, offer to pay the principal INR equivalent. However, demand a full waiver of late fees or compound interest that were never disclosed in your card terms.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Secure a Zero-Balance Closure Confirmation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once the dispute is resolved or the INR shortfall is paid, obtain an official email or No Dues Certificate confirming the forex card is closed with zero balance.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="cibil-impact-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Reporting &amp; Statutory Compensation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. CIBIL Score Impact &amp; 100/Day Error Compensation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Prepaid forex cards are not credit cards, so normal spend does not show on your CIBIL report. Yet if a negative balance stays unpaid for months, a bank may mark it as bad debt.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your credit report shows a wrong overdue mark for a disputed or paid forex card, the law protects you. Section 21(3) of the Credit Information Companies (Regulation) Act, 2005 (CICRA) gives you the right to dispute errors.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI Circular RBI/2023-24/72, banks and bureaus must fix credit report errors within 30 days. The bank gets 21 days to check, and the bureau gets 9 days to update your file.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If they miss the 30-day deadline, you can claim ₹100 per day until they send the fixed report. Read more in our{' '}
                <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[#1886ff] font-semibold hover:underline">
                  RBI ₹100/day CIBIL compensation guide
                </Link>.
              </p>
            </section>

            {/* SECTION 7 */}
            <section id="zero-liability-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>RBI Customer Protection &amp; Consumer Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Zero Liability Rules for Unauthorized Forex Swipes
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your travel card went negative because of card skimming, cloning, or an unauthorized online charge, RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18 protects you. This rule explicitly covers Prepaid Payment Instruments (PPIs), including forex travel cards.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Reported Within 3 Working Days</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You have zero liability for unauthorized third-party breaches if you notify the bank within 3 working days of receiving the transaction alert.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Clock className="w-4 h-4" />
                    <span>10-Day Shadow Credit Rule</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Once you report an unauthorized transaction, the bank must provide provisional credit within 10 working days and finish its investigation within 90 days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a bank ignores your dispute or freezes your savings account without valid proof, you can claim damages for deficiency in service before a Consumer Commission.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Lock className="w-4 h-4" />
                    <span>Anti-Harassment Safeguards</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Fair Practices guidelines, recovery agents cannot call before 8:00 AM or after 7:00 PM, use abusive language, or contact your employer.
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
                If your bank refuses to reverse an unfair offline charge or keeps a hold on your savings account, use the official three-tier RBI escalation system.
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
                      <td className="p-3">Audits forex card settlement logs and logs formal merchant chargebacks.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">Up to 30 Calendar Days</td>
                      <td className="p-3">Reviews wrongful savings account liens, waives unfair fees, and stops agent calls.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">After 30 Days Post-GRO</td>
                      <td className="p-3">Issues binding orders on cms.rbi.org.in to refund wrongful debits and fix CIBIL errors.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9 */}
            <section id="recovery-timelines" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Notice Lifecycle &amp; Action Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Recovery Notice Timelines &amp; Legal Safeguards
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing how banks escalate an unpaid forex card shortfall helps you respond before they freeze linked accounts or send collection agents.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Window</th>
                      <th className="p-3">Bank Stage</th>
                      <th className="p-3">What Usually Happens</th>
                      <th className="p-3">Your Legal Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 15</td>
                      <td className="p-3 font-mono text-[11px]">Settlement Lag</td>
                      <td className="p-3">Offline merchant batch clears; card balance turns negative in statement.</td>
                      <td className="p-3">Download statement and verify merchant receipt immediately.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 16 to 30</td>
                      <td className="p-3 font-mono text-[11px]">INR Demand Notice</td>
                      <td className="p-3">Bank sends SMS or email asking you to clear deficit in INR within 30 days.</td>
                      <td className="p-3">Pay genuine principal or file written dispute with supporting proof.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Lien &amp; Recovery Calls</td>
                      <td className="p-3">Bank may mark a hold on linked sole savings accounts or assign recovery callers.</td>
                      <td className="p-3 font-bold text-amber-800">Challenge joint account liens and escalate to Bank PNO.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 61 and Beyond</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Ombudsman / Bureau Stage</td>
                      <td className="p-3">Unresolved deficits may trigger legal notices or wrongful CIBIL entries.</td>
                      <td className="p-3 font-bold text-slate-900">File complaint on cms.rbi.org.in and demand CIBIL rectification.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10 */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Travel Card Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: Multi-Currency &amp; Expired Cards
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Travellers often run into technical traps involving multi-currency wallets, expired cards, or corporate travel cards. Here is how banking rules handle these cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    Multi-Currency Wallet Cross-Markup
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you spend in Euros while holding only USD on a multi-currency card, the bank applies a cross-currency markup of 2% to 3.5%. Always verify whether this markup was disclosed in your MITC.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    Charges on Expired or Hotlisted Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hotlisting a card blocks new swipes, but pre-authorized hotel or rental holds can still settle later. However, recurring subscription charges after formal card closure can be disputed.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Corporate Travel Card Shortfalls
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your employer funded a corporate travel card, check whether liability sits with the company or the employee under your card agreement before paying out of pocket.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Forex Credit Cards vs Prepaid Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unlike prepaid travel cards, international credit cards carry revolving interest and GST. If you face default on a credit card, check our{' '}
                    <Link href="/international-forex-credit-card-default-fema-tcs-rules" className="text-[#1886ff] font-semibold hover:underline">
                      international forex credit card default guide
                    </Link>.
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
                Frequently Asked Questions: Forex Card Negative Balance
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers on offline travel card charges, RBI PPI guidelines, FEMA settlement rules, CIBIL impact, and how to challenge wrongful bank liens.
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
                  <strong>RBI Master Directions on Prepaid Payment Instruments (PPIs):</strong> Governs pre-funded travel cards, prohibition on revolving credit lines, and pipeline transaction buffers.
                </li>
                <li>
                  <strong>Foreign Exchange Management Act, 1999 (FEMA):</strong> Requires domestic settlement of travel card shortfalls and fees in Indian Rupees (INR).
                </li>
                <li>
                  <strong>RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18:</strong> Customer Protection - Limiting Liability of Customers in Unauthorised Electronic Banking Transactions (applicable to PPIs).
                </li>
                <li>
                  <strong>Indian Contract Act, 1872 (Section 171):</strong> Governs banker&apos;s general lien and right of set-off between accounts held in the same name and capacity.
                </li>
                <li>
                  <strong>RBI Circular RBI/2023-24/72 (CICRA, 2005):</strong> Mandates 30-day credit bureau dispute resolution and ₹100 per day compensation for delayed error rectification.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Provides free binding adjudication on cms.rbi.org.in for unresolved bank and PPI complaints.
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
                  <Link href="/international-forex-credit-card-default-fema-tcs-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    International Forex Card Default &amp; FEMA
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹100/Day CIBIL Delay Compensation
                  </Link>
                  <Link href="/sim-swap-phishing-credit-card-debt-rbi-zero-liability" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Zero Liability Fraud Rules
                  </Link>
                  <Link href="/double-swipe-failed-pos-credit-card-rbi-100-day-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Double Swipe Failed POS Refund
                  </Link>
                  <Link href="/credit-card-pending-chargeback-rbi-shadow-credit-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pending Chargeback Shadow Credit
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Guidelines
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
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
                Specialist in banking compliance, credit card and forex disputes, RBI statutory guidelines, and debt resolution with extensive experience protecting cardholders under central bank mandates.
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
                  FOREX CARD DISPUTE SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Negative Balance on Your Travel Card?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking experts audit offline forex charges, challenge wrongful savings account liens, stop recovery calls, and represent you before the RBI Ombudsman.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Legal Help Now
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
                  <span><strong>Statement Audit:</strong> Separate genuine offline bills from unfair bank fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Lien Defense:</strong> Challenge illegal holds on joint savings accounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Protection:</strong> Fix wrong bureau entries and claim ₹100/day delay pay.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombudsman Filing:</strong> End-to-end representation on cms.rbi.org.in.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/international-forex-credit-card-default-fema-tcs-rules"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Forex Credit Card Default &amp; FEMA
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">LRS &amp; TCS settlement rules &rarr;</span>
                </Link>

                <Link
                  href="/double-swipe-failed-pos-credit-card-rbi-100-day-rule"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Double Swipe &amp; Failed POS Refund
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI TAT ₹100/day penalty &rarr;</span>
                </Link>

                <Link
                  href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    ₹100/Day CIBIL Delay Compensation
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Fix wrongful credit entries &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
