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

export default function InternationalForexCardDefaultClient() {
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
    { id: 'quick-crux', label: 'Quick Guide & FEMA Summary' },
    { id: 'inr-billing-fema', label: '1. INR Settlement Mechanics' },
    { id: 'fema-lrs-tcs-rules', label: '2. FEMA, LRS & 20% TCS Rules' },
    { id: 'civil-debt-vs-fema', label: '3. Civil Debt vs FEMA Bans' },
    { id: 'forex-markup-dcc-math', label: '4. Forex Fee, DCC & APR Math' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Chart' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step OTS Protocol' },
    { id: 'judicial-precedents', label: '7. LOC, Passport & Court Law' },
    { id: 'escalation-matrix', label: '8. 3-Tier Complaint Matrix' },
    { id: 'procedural-timeline', label: '9. Swipe to OTS Milestones' },
    { id: 'specialized-scenarios', label: '10. Forex Cards & NRI Cases' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'RBI, FEMA & Tax Citations' }
  ];

  const faqs = [
    {
      q: 'Is defaulting on an international credit card bill a crime under FEMA in India?',
      a: 'No. If you used your Indian credit card for lawful travel, hotel stays, study, or online shopping and later missed payments, it is a pure civil rupee debt. FEMA penalties apply only if you swiped your card for banned uses like offshore gambling, casinos, or illegal forex trading.'
    },
    {
      q: 'Do overseas credit card spends attract 20% TCS under Section 206C(1G)?',
      a: 'No. Following the June 28, 2023 Ministry of Finance and CBDT update, overseas spends on International Credit Cards remain outside LRS tracking until further orders and carry 0% TCS. By contrast, loading a prepaid forex card or sending wire funds attracts 20% TCS above Rs 10 Lakh per year.'
    },
    {
      q: 'Does an unpaid foreign swipe bill keep rising if the US Dollar goes up later?',
      a: 'No. Your Indian bank pays the foreign store through Visa or Mastercard and converts the spend into Indian Rupees (INR) on the posting date. Once billed in INR on your statement, future dollar or euro rate jumps do not change your base debt.'
    },
    {
      q: 'Can a bank stop me at the airport or cancel my passport for foreign card dues?',
      a: 'No. Airport officers do not check CIBIL scores or unpaid card bills. Banks have no power to cancel a passport under the Passports Act, 1967, and High Courts bar Look Out Circulars (LOCs) for routine unsecured credit card defaults.'
    },
    {
      q: 'Which international credit card transactions actually violate FEMA rules?',
      a: 'Schedule I of the FEMA Current Account Rules bans swiping Indian cards for foreign lotteries, online casinos, sports betting, and unauthorized overseas forex margin apps. Under Section 13 of FEMA, breaking these rules can bring a civil fine of up to three times the sum spent.'
    },
    {
      q: 'Why did my foreign credit card bill jump higher than the market exchange rate?',
      a: 'Banks add a 2% to 3.5% forex markup fee plus 18% GST on the fee, adding up to 4.13% extra. Also, if you picked INR at a foreign card machine, Dynamic Currency Conversion (DCC) adds a bad 4% to 7% store rate spread plus a 1% bank DCC fee.'
    },
    {
      q: 'Can banks charge over-limit fees if currency markup pushes my bill past my limit?',
      a: 'No. Under the RBI Credit Card Master Direction 2022 (updated March 2024), card issuers cannot charge over-limit fees unless you gave clear prior consent. Interest, markup fees, or GST pushing a bill past your limit cannot trigger over-limit penalties.'
    },
    {
      q: 'What happens if a prepaid travel forex card goes into a negative balance?',
      a: 'Offline road tolls, flight buys, or hotel holds can push a prepaid travel forex card below zero. The bank converts this shortfall into INR, sends recovery notices, and may adjust linked bank funds if left unpaid.'
    },
    {
      q: 'Can I settle an international credit card bill through One-Time Settlement (OTS)?',
      a: 'Yes. Because your Indian bank already billed the foreign spend in INR, the overdue balance becomes standard unsecured domestic card debt. After 90 days past due (NPA), you can close the entire bill in INR under the RBI June 2023 OTS circular.'
    },
    {
      q: 'How does CredSettle help card users with heavy forex and international card bills?',
      a: 'CredSettle checks your card statement for unlawful over-limit or DCC charges, stops false FEMA or arrest threats from recovery agents, and negotiates directly with bank Nodal Officers for a clean INR One-Time Settlement and NOC.'
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
            <span>RBI Credit Card Master Direction &amp; FEMA Compliance Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Settling International &amp; Forex Credit Card Bills in India
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Understand how FEMA, LRS limits, and 20% TCS rules apply to foreign credit card swipes. Stop false airport arrest threats, check 3.5% forex fees, and settle INR card dues legally under RBI rules.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Settle Forex Card Dues</span>
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
                  <span>Borrower Legal Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Backed by FEMA 1999, RBI Card Rules 2022, and the June 2023 RBI OTS Circular.
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
                <span>QUICK SUMMARY: INTERNATIONAL CREDIT CARD DEFAULT &amp; FEMA LAW</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Civil INR Debt, Not a FEMA Crime:</strong> Missing an Indian credit card bill for lawful travel, study, or online buys is a civil rupee default. It does not bring ED raids or criminal FEMA arrest.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">0% TCS on Credit Cards vs 20% on Forex Cards:</strong> Under the June 2023 Ministry of Finance update, overseas credit card spends stay outside LRS and carry 0% TCS. Prepaid forex cards face 20% TCS above ₹10 Lakh per year.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Frozen in Indian Rupees:</strong> Your bank pays the foreign store right away and bills you in INR. Later jumps in the US Dollar or Euro do not raise your billed principal.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Passport or Airport Block:</strong> Card banks cannot cancel your passport or stop you at airport checks for routine unsecured credit card dues.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Eligible for RBI One-Time Settlement:</strong> Once your INR card bill hits 90 days past due (NPA), you can settle the full debt with deep waivers on 3.5% markup fees and 42% card interest.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: How International Credit Card Bills Settle in INR */}
            <section id="inr-billing-fema" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Cross-Border Billing &amp; Rupee Conversion</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. How International Credit Card Bills Settle in INR
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many card users panic when they miss a credit card bill with USD, EUR, AED, or GBP charges. Recovery agents often scare borrowers by claiming a foreign government or bank will sue them. That claim is completely false.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you swipe an Indian credit card abroad or on a foreign site, the overseas shop gets paid within days. Visa, Mastercard, or Amex clears the payment using your Indian bank&apos;s Authorised Dealer (AD) desk.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Your Indian bank then converts that foreign sum into Indian Rupees (INR) on the posting date. It adds its forex markup fee plus 18% GST and puts the final rupee figure on your monthly statement.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                From that day forward, no foreign store is waiting for your money. Your unpaid bill is a regular, unsecured rupee debt owed only to your Indian bank. Even better, later dollar rate hikes do not change your billed rupee amount. You can read more in our{' '}
                <Link href="/credit-card-settlement-process" className="text-[#1886ff] hover:underline font-semibold">
                  credit card settlement process guide
                </Link>.
              </p>
            </section>

            {/* SECTION 2: FEMA Rules, LRS Limits & 20% TCS on Overseas Spends */}
            <section id="fema-lrs-tcs-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>FEMA Current Account Rules &amp; Income Tax Act</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. FEMA Rules, LRS Limits &amp; 20% TCS on Overseas Spends
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Foreign spending by Indian residents falls under the Foreign Exchange Management Act, 1999 (FEMA). Under the RBI Liberalised Remittance Scheme (LRS), you can spend up to USD 2,50,000 per year abroad for allowed uses.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For years, Rule 7 of the FEMA Current Account Rules kept foreign credit card swipes outside LRS limits. On May 16, 2023, the government removed Rule 7. That move aimed to bring credit cards under LRS and charge 20% Tax Collected at Source (TCS).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Soon after, on June 28, 2023, the Ministry of Finance and CBDT paused this change until further orders. Thanks to this pause, overseas credit card spends still carry 0% TCS under Section 206C(1G) of the Income Tax Act.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Prepaid forex cards, debit cards, and wire transfers follow stricter rules. They count toward your annual LRS cap. They also face 20% TCS once total LRS spends cross ₹10 Lakh in a year. Even if TCS is deducted, you can claim 100% of it back via Form 26AS in your tax return.
              </p>

              {/* Comparison Table: Credit Cards vs Prepaid Forex Cards vs LRS Wire */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[560px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Rule Feature</th>
                      <th className="p-3">International Credit Card</th>
                      <th className="p-3">Prepaid Travel Forex Card</th>
                      <th className="p-3">International Debit Card</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">LRS $250,000 Tracking</td>
                      <td className="p-3 text-emerald-700 font-semibold">Paused until further orders</td>
                      <td className="p-3">Counted under annual LRS cap</td>
                      <td className="p-3">Counted under annual LRS cap</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Section 206C(1G) TCS</td>
                      <td className="p-3 text-emerald-700 font-bold">0% TCS on foreign swipes</td>
                      <td className="p-3">20% TCS above ₹10 Lakh/year</td>
                      <td className="p-3">20% TCS above ₹10 Lakh/year</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Default Risk Type</td>
                      <td className="p-3">Unsecured INR revolving bill</td>
                      <td className="p-3">Offline negative balance only</td>
                      <td className="p-3">Direct savings account debit</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">RBI OTS Eligibility</td>
                      <td className="p-3 font-bold text-[#1886ff]">Full INR OTS after 90 DPD</td>
                      <td className="p-3">Shortfall settlement if negative</td>
                      <td className="p-3">Not a credit product</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: Civil Card Default vs Prohibited FEMA Violations */}
            <section id="civil-debt-vs-fema" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Lawful Spends vs Schedule I Contraventions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Civil Card Default vs Prohibited FEMA Violations
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every borrower must separate two very different issues: what you bought with the card, and whether you could pay the bill on time. Indian law treats these two matters in totally separate ways.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Suppose you used your card for flights, hotels, hospital bills, college fees, cloud tools, or legal shopping. If job loss or illness later stops you from paying the INR bill, there is zero FEMA breach. Under Indian law, non-payment of a lawful card bill is a pure civil breach of contract. Learn why{' '}
                <Link href="/can-i-go-to-jail-for-credit-card-debt" className="text-[#1886ff] hover:underline font-semibold">
                  you cannot go to jail for credit card debt
                </Link>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                FEMA trouble starts only when a resident swipes an Indian card for banned uses listed in Schedule I of the Current Account Rules or RBI alerts. Even if you pay your credit card bill on time, these banned foreign spends still break FEMA:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc pl-5 leading-relaxed">
                <li>
                  <strong className="text-slate-900">Unapproved Forex Margin Apps:</strong> Funding foreign CFD or forex trading apps not listed on Indian stock exchanges (NSE, BSE, MSEI).
                </li>
                <li>
                  <strong className="text-slate-900">Online Casinos &amp; Betting:</strong> Using Indian cards on offshore gambling sites, sportsbooks, poker rooms, or sweepstakes.
                </li>
                <li>
                  <strong className="text-slate-900">Foreign Lottery Tickets:</strong> Buying overseas lottery tickets or banned publications in foreign currency.
                </li>
                <li>
                  <strong className="text-slate-900">Offshore Margin Crypto Trades:</strong> Sending leveraged margin funds to unapproved foreign portals outside LRS rules.
                </li>
              </ul>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 13(1) of FEMA, 1999, banned foreign spends can bring a civil fine of up to three times (3x) the sum spent. Banks also watch Merchant Category Codes (MCCs) and block cards used on betting or forex sites right away.
              </p>
            </section>

            {/* SECTION 4: Forex Markup, DCC Trap & 42% APR Inflation Math */}
            <section id="forex-markup-dcc-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Fee Layers &amp; Debt Spiral Breakdown</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Forex Markup, DCC Trap &amp; 42% APR Inflation Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Foreign credit card bills grow much faster than local rupee spends. Three stacked cost layers push borrowers into a deep debt trap within months.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, most Indian cards add a 3.5% forex markup fee on every foreign charge, plus 18% GST on that fee. That adds 4.13% upfront to your bill.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, watch out if a foreign card machine asks to bill you in INR instead of USD or EUR. Picking INR starts Dynamic Currency Conversion (DCC). Foreign stores bake in a bad 4% to 7% rate spread. Indian banks then add an extra 1% DCC fee plus GST.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, missing full payment ends your interest-free grace window. Banks charge 36% to 45% annual interest (3% to 3.75% per month) plus 18% GST. Still, under the RBI Credit Card Master Direction 2022 (updated March 2024), banks cannot add{' '}
                <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[#1886ff] hover:underline font-semibold">
                  over-limit fees without prior consent
                </Link>. They also cannot charge interest on unpaid late fees and taxes.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample USD 3,000 Overseas Swipe to 6-Month NPA Ledger</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">1 USD = ₹85 Base Rate</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Billing Component</th>
                        <th className="p-3">Rate / Rule Applied</th>
                        <th className="p-3">Dispute or OTS Status</th>
                        <th className="p-3 text-right">Amount in INR</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Base Overseas Spend ($3,000)</td>
                        <td className="p-3 font-mono">Network Rate @ ₹85</td>
                        <td className="p-3 text-slate-700 font-semibold">Core Principal Spend</td>
                        <td className="p-3 text-right font-bold text-slate-900 font-mono">₹2,55,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">3.5% Forex Markup + 18% GST</td>
                        <td className="p-3 font-mono text-amber-600 font-bold">4.13% Effective Fee</td>
                        <td className="p-3 text-amber-600 font-semibold">Negotiable in OTS</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">+ ₹10,532</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">6 Months Revolving APR (42%)</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">3.5% Monthly Rate</td>
                        <td className="p-3 text-rose-600 font-semibold">Targeted for 100% Waiver</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">+ ₹60,650</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Late Fees &amp; 18% GST on Interest</td>
                        <td className="p-3 font-mono text-rose-700 font-bold">6 Billing Cycles</td>
                        <td className="p-3 text-rose-700 font-semibold">Targeted for 100% Waiver</td>
                        <td className="p-3 text-right font-bold text-rose-800 font-mono">+ ₹18,120</td>
                      </tr>
                      <tr className="bg-slate-50 font-bold text-slate-900">
                        <td className="p-3">Total Inflated Bank Demand</td>
                        <td className="p-3 font-mono text-rose-700">Post-NPA Bill</td>
                        <td className="p-3 text-rose-700">35% Above Base Swipe</td>
                        <td className="p-3 text-right text-rose-700 font-mono">₹3,44,302</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Typical RBI OTS Resolution</td>
                        <td className="p-3 font-mono text-[#1886ff]">Hardship Compromise</td>
                        <td className="p-3 text-[#1886ff]">Full Closure + Written NOC</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹1,35,000 to ₹1,70,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Forex Card Debt &amp; FEMA Shield
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart shows how foreign card swipes turn into domestic INR bills, how FEMA and LRS rules work, and how RBI One-Time Settlement clears overdue debt.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/international-forex-credit-card-default-fema-tcs-rules.jpg"
                    alt="International and Forex Credit Card Bill Default, FEMA LRS Rules, and RBI OTS Debt Relief"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Cross-Border Card Debt &amp; FEMA Compliance Guide</span>
                  <a
                    href="/images/infographics/international-forex-credit-card-default-fema-tcs-rules.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Settling Foreign Swipe Card Debt */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Settling Foreign Swipe Card Debt
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If foreign travel, overseas medical care, or business ad spends left you with an unpaid credit card bill, follow these six steps to resolve the debt safely.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Turn Off International &amp; Recurring Card Controls
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Open your bank app and switch off international online and POS controls under RBI card rules. Cancel foreign auto-debits and SaaS trials so new dollar charges stop hitting your bill.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Audit Foreign Charges, DCC &amp; Unlawful Fees
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check every foreign line item on your INR statement. Flag unknown swipes for chargeback right away, and challenge any unconsented over-limit fees or interest charged on late fees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Confirm Lawful Purpose &amp; Stop Minimum Due Traps
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Keep travel tickets, medical bills, or software invoices as proof of lawful FEMA current account use. Stop paying the 5% Minimum Amount Due, which only feeds 42% interest without cutting principal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Shut Down False FEMA &amp; Airport Threats
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If recovery callers threaten ED raids, Interpol notices, or passport blocks, save the call recordings or texts. Report these illegal threats to the bank Grievance Officer under RBI Fair Practices rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Negotiate INR One-Time Settlement Post-NPA
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once the card crosses 90 days past due, submit a formal hardship file under{' '}
                    <Link href="/rbi-circular-on-loan-settlement-ots" className="text-[#1886ff] hover:underline font-semibold">
                      RBI Circular RBI/2023-24/40
                    </Link>. Push for a 100% waiver of 42% APR, late fees, and markup charges.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Verify Written OTS Letter &amp; Collect Final NOC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pay only after verifying an official bank OTS sanction letter from a real bank email domain. After paying, collect your{' '}
                    <Link href="/get-noc-after-loan-settlement" className="text-[#1886ff] hover:underline font-semibold">
                      No Dues Certificate (NOC)
                    </Link>{' '}
                    and verify CIBIL updates within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Court Rulings: Airport LOC, Passport & Card APR Law */}
            <section id="judicial-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Supreme Court &amp; High Court Precedents</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Court Rulings: Airport LOC, Passport &amp; Card APR Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Frequent flyers and NRI workers often fear that an unpaid credit card bill will get them stopped at airport immigration. Indian courts have drawn firm legal shields protecting borrowers&apos; right to travel. See our full guide on{' '}
                <Link href="/can-bank-stop-passport-renewal-or-issue-loc-for-loan-default" className="text-[#1886ff] hover:underline font-semibold">
                  passport renewal and LOC rules for loan default
                </Link>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Bombay HC: Viraj Chetan Shah v. UOI (2024)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Bombay High Court held that letting bank heads issue Look Out Circulars (LOCs) for civil defaults violates Article 21 liberty. Even during Supreme Court review, routine credit card dues never qualify for airport LOCs.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Delhi HC: Sumer Singh Salkan Rule</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Delhi High Court benches have repeatedly held that LOCs exist only for serious cognizable crimes where an accused flees arrest. An LOC cannot be used as a debt recovery tool for unpaid bank bills.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Supreme Court: HSBC v. Awaz (Dec 2024)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court ruled that consumer courts cannot cap 36% to 49% credit card APR disclosed in card terms. Thus, negotiating a bank OTS is far more effective than fighting card APR in consumer court.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Passports Act, 1967: Section 10(3)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Only a Passport Authority acting on a criminal court warrant or security order can impound a passport. Private and public banks have zero power to block passport renewal or visa stamping.
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
                If your bank adds unconsented over-limit fees, ignores a valid foreign chargeback, or lets agents make fake FEMA threats, escalate through this three-tier RBI channel.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Relief &amp; Action Scope</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Card Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Logs foreign chargeback, reverses unconsented over-limit fees, and halts agent threats.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Reviews RBI Master Direction breaches and approves hardship INR OTS waivers.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI Integrated Ombudsman (CMS)</td>
                      <td className="p-3 font-mono">30 Days Post-GRO</td>
                      <td className="p-3">Orders fee refunds and compensation via cms.rbi.org.in for unfair recovery or billing defects.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Default Timeline: Foreign Swipe to OTS Closure */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Delinquency &amp; Settlement Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Default Timeline: Foreign Swipe to OTS Closure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking each stage from your foreign card swipe to final settlement helps you protect your rights and avoid panic payments.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Stage</th>
                      <th className="p-3">Account Status</th>
                      <th className="p-3">Bank System Action</th>
                      <th className="p-3">Smart Borrower Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Swipe + 2 Days</td>
                      <td className="p-3 font-mono text-[11px]">INR Settlement</td>
                      <td className="p-3">Converts foreign spend to INR and adds 3.5% markup + 18% GST.</td>
                      <td className="p-3">Check exchange rate and raise chargeback fast if unauthorized.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">1 to 30 DPD</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0 Stage</td>
                      <td className="p-3">Ends interest-free period; adds late fee and 42% annual APR.</td>
                      <td className="p-3">Disable international card toggle and stop recurring USD subscriptions.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">31 to 89 DPD</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1 / SMA-2</td>
                      <td className="p-3">Blocks card; sends 7-day prior notice before bureau default report.</td>
                      <td className="p-3">Keep salary in a separate non-lender bank to avoid auto set-off.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 90+ DPD</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Classification</td>
                      <td className="p-3">Marks card as Non-Performing Asset and moves file to recovery desk.</td>
                      <td className="p-3 font-bold text-amber-800">Submit formal hardship OTS offer in INR under RBI rules.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">120 to 180+ DPD</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">OTS Closure Window</td>
                      <td className="p-3">Issues written OTS sanction waiving penal APR and fee layers.</td>
                      <td className="p-3 font-bold text-slate-900">Pay settled INR sum, collect NOC, and track CIBIL update.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Prepaid Forex Cards, NRI Dues & Chargeback Rules */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Cross-Border Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Prepaid Forex Cards, NRI Dues &amp; Chargeback Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Cross-border card troubles often involve prepaid travel cards, returning NRIs, or overseas fraud. Here is how Indian banking law handles each case.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1886ff]" />
                    Prepaid Travel Card Negative Balance
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In-flight POS terminals, highway tolls, or delayed hotel bills can push a prepaid forex card below zero. Banks convert this negative balance to INR and can exercise lien rights on linked savings accounts if ignored.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Returning NRIs With Foreign Bank Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cards issued by US, UK, or UAE banks do not report directly to Indian CIBIL files. Foreign lenders must follow strict Section 13 and Section 44A CPC court steps in India to enforce any foreign decree. Read our{' '}
                    <Link href="/nri-returning-to-india-with-unpaid-debt" className="text-[#1886ff] hover:underline font-semibold">
                      NRI unpaid debt guide
                    </Link>.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-indigo-600" />
                    Overseas Skimming &amp; Zero Liability Rule
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Foreign magnetic-stripe or card-not-present swipes often skip OTP checks. Under the July 2017 RBI Zero Liability circular, reporting unauthorized foreign fraud within 3 working days protects you from loss.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-amber-600" />
                    Foreign Ad Spends on Personal Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Freelancers and founders often run Meta, Google, or AWS dollar ads on personal cards. Banks may block the card for commercial use and recall the full INR balance, which can then be settled via OTS.
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
                Frequently Asked Questions: Forex Card Debt &amp; FEMA
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers on international credit card defaults, FEMA rules, 20% TCS exemptions, airport travel rights, and INR debt settlement in India.
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
                Official RBI, FEMA &amp; Income Tax Statutory Citations
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Foreign Exchange Management Act, 1999 (FEMA):</strong> Section 5 (Current Account Transactions), Section 13 (Penalties for Contravention), and Foreign Exchange Management (Current Account Transactions) Rules, 2000 (Schedule I &amp; Rule 7 Omission Notification G.S.R. 369(E), May 16, 2023).
                </li>
                <li>
                  <strong>Ministry of Finance &amp; CBDT Clarification (June 28, 2023) &amp; Section 206C(1G), Income Tax Act, 1961:</strong> Postponement of LRS classification and TCS on overseas International Credit Card spends; ₹10 Lakh annual TCS exemption threshold on LRS remittances.
                </li>
                <li>
                  <strong>RBI Master Direction - Credit Card and Debit Card - Issuance and Conduct Directions, 2022 (Updated March 7, 2024):</strong> Default opt-out for international usage, explicit consent for over-limit fees, ban on capitalizing penal charges, and 7-day default reporting notice.
                </li>
                <li>
                  <strong>RBI Circular on Compromise Settlements and Technical Write-offs:</strong> RBI/2023-24/40, DoR.STR.REC.20/21.04.048/2023-24 (dated June 8, 2023).
                </li>
                <li>
                  <strong>Supreme Court &amp; High Court Precedents:</strong> Hongkong and Shanghai Banking Corp. Ltd. v. Awaz &amp; Ors. (Supreme Court, Dec 20, 2024); Viraj Chetan Shah v. Union of India (Bombay High Court, April 23, 2024); Sumer Singh Salkan v. Asstt. Director (Delhi High Court, 2010).
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
                  <a href="https://incometaxindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Income Tax Department (CBDT)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code FEMA Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.passportindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Passport Seva Portal (MEA)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/credit-card-settlement-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Process
                  </Link>
                  <Link href="/can-loan-defaulter-go-abroad" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can Loan Defaulter Go Abroad?
                  </Link>
                  <Link href="/can-bank-stop-passport-renewal-or-issue-loc-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Passport Renewal &amp; LOC Rules
                  </Link>
                  <Link href="/nri-credit-card-debt-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    NRI Credit Card Settlement
                  </Link>
                  <Link href="/nri-returning-to-india-with-unpaid-debt" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    NRI Returning With Unpaid Debt
                  </Link>
                  <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Overlimit Fee Refund
                  </Link>
                  <Link href="/unbilled-credit-card-merchant-emi-foreclosure-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unbilled Card EMI Foreclosure
                  </Link>
                  <Link href="/merchant-refund-on-blocked-settled-credit-card-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Refund on Blocked Credit Card
                  </Link>
                  <Link href="/stop-credit-card-recovery-calls" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Card Recovery Calls
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Relief Program
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
                Specialist in RBI credit card conduct mandates, FEMA current account rules, cross-border billing disputes, and structured One-Time Settlement negotiations across major Indian banks.
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
                  FOREX CARD DEBT DEFENSE
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Stuck With High Foreign Credit Card Bills?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking lawyers stop fake FEMA and airport threats, audit 3.5% markup and over-limit fees, and settle your full INR card balance with deep waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Legal Debt Review
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
                  <span><strong>Stop False FEMA Threats:</strong> Immediate legal shield against rogue agents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Markup &amp; APR Waivers:</strong> Negotiate 45% to 65% relief on inflated INR bills.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Billing Audit:</strong> Reverse unlawful over-limit and DCC penalties.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified Bank NOC:</strong> Official closure letter and 30-day CIBIL check.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/can-bank-stop-passport-renewal-or-issue-loc-for-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank Issue LOC or Block Passport?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Airport &amp; High Court rules &rarr;</span>
                </Link>

                <Link
                  href="/nri-credit-card-debt-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    NRI Credit Card Debt Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Remote PoA closure guide &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-overlimit-fee-without-consent-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Overlimit Fee Without Consent Refund
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI 2022 opt-in rule &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
