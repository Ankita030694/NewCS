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

export default function UnbilledCreditCardEmiForeclosureClient() {
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
    { id: 'quick-crux', label: 'Quick Guide & Legal Rules' },
    { id: 'emi-acceleration-mechanics', label: '1. Unbilled EMI Auto-Closure' },
    { id: 'rbi-regulatory-framework', label: '2. RBI 2022 Rules & MITC Terms' },
    { id: 'revolving-interest-math', label: '3. 14% EMI vs 42% APR Math' },
    { id: 'hidden-fee-disputes', label: '4. Disputing 3% & Over-Limit Fees' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Chart' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Relief Steps' },
    { id: 'judicial-precedents', label: '7. Supreme Court & Consumer Law' },
    { id: 'escalation-matrix', label: '8. 3-Tier Complaint Matrix' },
    { id: 'procedural-timeline', label: '9. Default to NPA & OTS Timeline' },
    { id: 'common-mistakes-scenarios', label: '10. Common Mistakes & Card Cases' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'RBI & Legal Citations' }
  ];

  const faqs = [
    {
      q: 'What happens to unbilled credit card EMIs when I miss my bill payments?',
      a: 'If you skip your Minimum Amount Due for two or three cycles or cross 90 days past due (NPA), the bank ends your active EMI plans. All future unbilled loan parts move into your main card bill as one lump sum.'
    },
    {
      q: 'What interest rate applies after an unbilled credit card EMI is foreclosed?',
      a: 'Once the bank ends your EMI plan on default, you lose your low 13% to 16% EMI rate or No-Cost EMI deal. The merged balance attracts high card interest of 36% to 45% per year plus 18% GST.'
    },
    {
      q: 'Can a bank charge over-limit fees when merged EMIs push my bill past my card limit?',
      a: 'No. Under the RBI Credit Card Master Direction 2022 (updated March 2024), banks cannot charge over-limit fees without your clear prior opt-in. Added interest, late fees, or taxes can never trigger over-limit fees.'
    },
    {
      q: 'Can the seller or bank take back the phone or laptop I bought on credit card EMI?',
      a: 'No. Credit card shop EMIs are 100% unsecured buys. The store got paid in full on the day you swiped your card. Neither the seller nor bank agents have any legal right to take your home goods or gadgets.'
    },
    {
      q: 'Does the bank charge a 3% foreclosure fee when ending an EMI due to default?',
      a: 'Many banks add a 2% to 3% early closure fee plus 18% GST on the left-over principal under their MITC rules. Still, you can challenge hidden fees or get all extra fees waived in a One-Time Settlement (OTS).'
    },
    {
      q: 'Can banks charge extra interest on unpaid late fees and GST after EMI closure?',
      a: 'No. Paragraph 9(b) of the RBI Credit Card Master Direction 2022 bars card issuers from adding unpaid fees, charges, or taxes to your base debt to charge interest on interest.'
    },
    {
      q: 'How is an unbilled shop EMI different from a Jumbo Loan on a credit card?',
      a: 'A shop EMI blocks your own card limit and bills inside your monthly card statement. A Jumbo Loan often runs on a second loan number with its own bank auto-debit and needs joint closure during OTS.'
    },
    {
      q: 'Can consumer courts cap the 42% credit card interest rate after EMI closure?',
      a: 'No. In HSBC v. Awaz (December 2024), the Supreme Court ruled that courts cannot cap credit card interest rates if the bank shared the APR upfront under RBI rules. Use a payment plan or bank OTS instead.'
    },
    {
      q: 'Can I settle the full merged EMI balance through a One-Time Settlement (OTS)?',
      a: 'Yes. Once unbilled EMIs merge into your main card bill and hit NPA status, the whole sum becomes one unsecured card debt. Under the RBI June 2023 circular, you can close the full bill in one OTS deal.'
    },
    {
      q: 'How does CredSettle help card users facing a huge foreclosed EMI bill?',
      a: 'CredSettle checks your card bill for unlawful over-limit or compounded fees, stops agent calls under RBI rules, and deals with bank Nodal Officers to settle merged dues with deep interest waivers.'
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
            <span>RBI Credit Card Master Direction 2022 &amp; Debt Relief Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Auto-Cancellation of Unbilled Credit Card EMIs on NPA
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Find out what happens when banks cancel active shop EMIs after missed credit card bills. Learn how to check 3% closure fees, stop 42% card interest traps, and settle lump-sum dues under RBI rules.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Settle Foreclosed Card EMI</span>
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
                  <span>Card User Legal Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Backed by RBI Card Rules 2022 and the June 2023 RBI OTS Circular.
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
                <span>QUICK SUMMARY: UNBILLED CREDIT CARD EMI DEFAULT RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Lump-Sum Bill Shock:</strong> When you miss your Minimum Amount Due for two or three cycles or hit 90 days past due (NPA), banks end active shop EMIs and add all future principal to one bill.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">42% Card Rate Jump:</strong> Once an EMI plan breaks on default, your balance loses its low 13% to 16% rate and shifts to high card interest of 36% to 45% per year plus 18% GST.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Forced Over-Limit Fees:</strong> Under RBI rules, banks cannot charge over-limit fees without your prior consent, even if merged EMIs and interest push your bill past your card limit.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Goods Stay Safe:</strong> Phones, laptops, or TVs bought on credit card EMI are unsecured buys. Bank agents have zero legal right to take away your items.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Single OTS Closure:</strong> After unbilled EMIs merge into your main card account at NPA stage, you can close the whole sum through one One-Time Settlement (OTS).
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Unbilled Credit Card EMI & Auto-Foreclosure Mechanics */}
            <section id="emi-acceleration-mechanics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>How Card EMI Billing &amp; Default Work</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Unbilled Credit Card EMI &amp; Auto-Foreclosure Mechanics
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Millions of Indian buyers use credit card EMIs to buy phones, laptops, home goods, or hospital care. When you pick a merchant EMI at checkout or convert a big swipe in your app, the bank blocks the full item price from your card limit.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Still, the bank does not ask for the full price in month one. It breaks the spend into monthly parts. Each month, one EMI plus 18% GST on interest enters your card bill and joins your <Link href="/credit-card-minimum-due-trap" className="text-[#1886ff] hover:underline font-semibold">Minimum Amount Due (MAD)</Link>. The rest of your base loan waits in line as unbilled principal.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Problems start if a job loss or cash crunch makes you skip your card bills. Major banks like HDFC Bank, SBI Card, ICICI Bank, and Axis Bank put a strict default clause in their Most Important Terms and Conditions (MITC).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you miss your Minimum Amount Due for two or three cycles, or hit 90 days past due (NPA), the bank cancels all active EMI plans. All future unbilled principal drops into your main card bill at once. Note that this rule covers limit-blocked shop EMIs, while a <Link href="/jumbo-insta-loan-on-credit-card-default-settlement" className="text-[#1886ff] hover:underline font-semibold">Jumbo or Insta Loan on a credit card</Link> often sits in a second loan account.
              </p>
            </section>

            {/* SECTION 2: RBI Master Direction 2022 & MITC Disclosure Rules */}
            <section id="rbi-regulatory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>RBI Card Rules &amp; Billing Shields</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI Master Direction 2022 &amp; MITC Disclosure Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit card EMIs follow the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct, 2022 (Circular DoR.AUT.REC.No.27/24.01.041/2022-23, updated March 7, 2024). Every bank and card issuer in India must obey these clear billing rules.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, before turning any swipe into an EMI, the bank must clearly show the base loan sum, the yearly interest rate, any upfront store discount, and early closure fees. Banks cannot hide interest charges behind fake zero-cost tags.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, Paragraph 9(b) of the RBI Master Direction shields users from unfair compounding after default. Banks cannot add unpaid late fees, closure fees, or GST to your base debt to charge extra interest on top of fees.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You should also know one key legal point. RBI Circular RBI/2023-24/53 on Penal Charges in Loan Accounts leaves out credit cards under Paragraph 5. Because of this carve-out, your main legal shield comes straight from the 2022 RBI Card Direction and your MITC sheet.
              </p>
            </section>

            {/* SECTION 3: Financial Impact: 14% EMI Rate vs 42% Revolving APR */}
            <section id="revolving-interest-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Lump-Sum Bill Shock &amp; Card Rate Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Financial Impact: 14% EMI Rate vs 42% Revolving APR
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Forced EMI closure creates a huge bill shock. Say you bought home items worth ₹1,20,000 on a 12-month card EMI at 14% yearly interest. After you pay three EMIs on time, about ₹92,000 of unbilled principal is left.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a pay cut makes you miss three monthly bills, the bank ends the EMI plan on Day 91. That ₹92,000 sum drops into your main card bill and jumps from 14% EMI rate to 42% yearly card APR (3.5% per month) plus 18% GST. See how fast the bill grows below.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample ₹92,000 Unbilled EMI Collapse Math</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">14% EMI vs 42% Card APR</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Account Stage</th>
                        <th className="p-3">Unbilled Loan Left</th>
                        <th className="p-3">Active Rate &amp; Fee Rule</th>
                        <th className="p-3 text-right">Total Billed Card Demand</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Month 3 (Paid on Time)</td>
                        <td className="p-3 font-mono">₹92,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">14% Yearly Fixed Shop EMI</td>
                        <td className="p-3 text-right font-bold text-slate-500">₹10,800 (One EMI Only)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 60 Past Due (2 Missed Bills)</td>
                        <td className="p-3 font-mono text-amber-600 font-bold">₹72,500</td>
                        <td className="p-3 text-amber-600 font-semibold">Card Blocked + Late Fees</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">₹24,900 (2 EMIs + Fees)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 91 NPA (Forced Closure)</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">₹0 (Merged)</td>
                        <td className="p-3 text-rose-600 font-semibold">3% Fee + Shift to 42% APR</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">₹1,04,650 (Full Lump Sum)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 180 Past Due (6 Months)</td>
                        <td className="p-3 font-mono text-rose-700 font-bold">₹0 (In Main Bill)</td>
                        <td className="p-3 text-rose-700 font-semibold">3.5%/Month APR + 18% GST</td>
                        <td className="p-3 text-right font-bold text-rose-800 font-mono">₹1,22,400</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Bank OTS Settlement</td>
                        <td className="p-3 font-mono text-[#1886ff]">Settled &amp; Closed</td>
                        <td className="p-3 text-[#1886ff]">Added Interest &amp; Fee Waiver</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹42,000 to ₹55,000 (OTS Range)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Disputing 3% Foreclosure, Overlimit & No-Cost EMI Fees */}
            <section id="hidden-fee-disputes" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Fee Checks &amp; Dispute Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Disputing 3% Foreclosure, Overlimit &amp; No-Cost EMI Fees
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a bank ends unbilled EMIs on default, its billing system often adds extra fees onto one bill. Spotting charges that break RBI rules gives you strong power during settlement talks.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, check your bill for Over-Limit Fees. When ₹90,000 of unbilled loan merges with unpaid interest and late fees, your total bill often crosses your card limit. Under the March 2024 RBI update, banks cannot charge over-limit fees without your clear opt-in. Also, added interest or fees can never trigger over-limit charges.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, check the 3% foreclosure fee plus 18% GST. A 3% early closure fee is meant for users who pay off an EMI early to save interest. When the bank itself cancels your plan and charges 42% APR right away, you can dispute the extra 3% fee if your MITC only covers user-led closure.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, check No-Cost EMI deals. In a store No-Cost EMI, the seller gives an upfront price cut equal to total bank interest on Day 1. Since the store gave that price cut at checkout, banks do not claw back the discount, though left-over debt moves to card APR.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Unbilled EMI Default &amp; OTS Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This clear chart shows how active shop EMIs merge into one lump-sum card bill on NPA and how card users can exit 42% interest through an RBI-backed settlement.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/unbilled-credit-card-merchant-emi-foreclosure-default.jpg"
                    alt="Unbilled Credit Card Merchant EMI Auto-Foreclosure on Default and RBI OTS Rules"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>CredSettle Credit Card EMI Relief Guide • RBI 2022 Card Rules Compliant</span>
                  <a
                    href="/images/infographics/unbilled-credit-card-merchant-emi-foreclosure-default.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View Full-Size Chart</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP: Resolving Foreclosed Card EMI Debt */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Action Plan</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Resolving Foreclosed Card EMI Debt
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If missed bills led your bank to cancel unbilled EMIs and demand one big sum, follow these six simple steps to guard your rights and close the debt cleanly.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Step 1: Save Your First EMI Plan &amp; MITC Sheet
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your EMI booking mail and past card bills. Note down your true unpaid base loan apart from added interest, late fees, and GST.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Step 2: Check for Unlawful Over-Limit or Compounded Fees
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Look for over-limit fees added without consent or interest charged on unpaid late fees. Email the bank support desk to flag these RBI breaches.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Step 3: Ask for a New EMI Plan Before Day 90
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If your income is back and your card is still under 90 DPD, ask the bank to convert your full card bill into a longer fixed plan. Read our guide on <Link href="/debt-settlement-vs-loan-restructuring-credit-card" className="text-[#1886ff] hover:underline font-semibold">card settlement vs restructuring</Link>.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Step 4: Avoid Tiny Token Payments Into a 42% Bill
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once unbilled EMIs merge into a 42% card bill, small token sums paid to calm agents get wiped out by monthly interest and never cut your debt.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Step 5: Seek One Lump-Sum OTS on True Base Debt
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    After Day 90 NPA, share job loss or medical proof with the bank settlement team. Ask for a full waiver of post-default 42% interest and late fees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Step 6: Check the OTS Letter &amp; Collect Your NOC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Always <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[#1886ff] hover:underline font-semibold">verify your bank OTS letter</Link> before you pay. Make sure it covers the full merged balance and get your <Link href="/get-noc-after-loan-settlement" className="text-[#1886ff] hover:underline font-semibold">No Dues Certificate</Link> at closure.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Supreme Court & Consumer Rulings on Card Billing */}
            <section id="judicial-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Court Rulings &amp; Legal Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Supreme Court &amp; Consumer Rulings on Card Billing
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts and RBI rules draw a sharp line between clear contract rates and hidden bank charges. Knowing real case law helps you pick the right exit plan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many card users still think consumer courts cap credit card interest at 30%. Yet the Supreme Court settled this exact question in December 2024. Here are the four key legal rules for foreclosed card EMIs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>SC: HSBC v. Awaz &amp; Ors. (Dec 2024)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In Civil Appeal No. 5273 of 2008, the Supreme Court set aside the old 30% rate cap. Under Section 21A of the Banking Regulation Act, banks may charge 36% to 45% APR if shared upfront under RBI rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Sections 2(11) and 2(47), adding hidden 3% closure fees, fake zero-cost EMI charges, or unapproved over-limit fees is an unfair trade practice.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Section 74, Indian Contract Act, 1872</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Breach charges must stick to fair, pre-agreed terms. A bank cannot invent new default fees that were never listed in your MITC chart.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>RBI Compromise OTS Circular (2023)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Circular DOR.STR.REC.20/21.04.048/2023-24, all banks hold board-approved OTS rules to settle unsecured card NPAs and waive added interest.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Official Complaint Steps</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank added forced over-limit charges, charged interest on late fees, or sent rude agents after ending your EMIs, file a complaint through these three official steps.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Complaint Level</th>
                      <th className="p-3">Bank or RBI Office</th>
                      <th className="p-3">Reply Window</th>
                      <th className="p-3">How They Help You</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Card Grievance Officer</td>
                      <td className="p-3 font-mono">7 to 10 Work Days</td>
                      <td className="p-3">Shares full EMI closure math sheet and drops forced over-limit fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Work Days</td>
                      <td className="p-3">Fixes Paragraph 9(b) fee errors and clears hardship OTS waivers.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days After GRO</td>
                      <td className="p-3">Orders refund of unlawful card fees via cms.rbi.org.in.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Default Timeline: First Missed Bill to NPA & OTS */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Day-by-Day Stages</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Default Timeline: First Missed Bill to NPA &amp; OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking the <Link href="/credit-card-npa-timeline" className="text-[#1886ff] hover:underline font-semibold">credit card NPA timeline</Link> from your bill due date tells you when your unbilled EMIs will merge and when bank OTS deals open.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Days Past Due (DPD)</th>
                      <th className="p-3">Account Stage</th>
                      <th className="p-3">Effect on Unbilled Card EMIs</th>
                      <th className="p-3">Best Step for Card User</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to Day 3</td>
                      <td className="p-3 font-mono text-[11px]">RBI 3-Day Grace</td>
                      <td className="p-3">EMIs stay safe; no late fee or CIBIL mark if paid in 3 days.</td>
                      <td className="p-3">Pay at least MAD right away to keep your EMI plan alive.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 4 to Day 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0 Past Due</td>
                      <td className="p-3">Billed EMI stays unpaid; late fee and card interest begin.</td>
                      <td className="p-3">Save your card bill and turn off extra auto-pay mandates.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to Day 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1 Stage</td>
                      <td className="p-3">Card swipes blocked; bank warns that EMI plans may close soon.</td>
                      <td className="p-3">Ask for a fixed payment plan if your pay has resumed.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 61 to Day 90</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">SMA-2 Alert</td>
                      <td className="p-3">Some banks close EMIs early; most wait for Day 90 NPA mark.</td>
                      <td className="p-3 font-bold text-amber-800">Gather job loss or health proofs and check MITC rules.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 91 Past Due</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">NPA Stage</td>
                      <td className="p-3">All unbilled EMIs end and merge into one main bill at 42% APR.</td>
                      <td className="p-3 font-bold text-slate-900">Check merged bill for forced over-limit or compounded fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 120 to 180+</td>
                      <td className="p-3 font-mono text-[11px] text-rose-700 font-bold">OTS Window</td>
                      <td className="p-3">Bank OTS desk treats the full card bill as one unsecured NPA pool.</td>
                      <td className="p-3">Close full debt via written One-Time Settlement and get NOC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Common Borrower Mistakes & Specialized Card Cases */}
            <section id="common-mistakes-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Mistakes to Avoid &amp; Special Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Common Borrower Mistakes &amp; Specialized Card Cases
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Fear after seeing a sudden ₹1 Lakh or ₹3 Lakh merged card bill pushes many users into bad choices. Avoid these four traps and know how special cards work.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                    Paying Only 5% MAD After Collapse
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Once ₹1 Lakh of unbilled EMI hits your main bill at 3.5% monthly rate plus GST, paying 5% Minimum Due barely pays monthly interest. Your base debt stays stuck for years.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Fearing Seizure of EMI Gadgets
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Field agents sometimes claim they will take back phones, TVs, or laptops bought on card EMI. Unlike car loans, card EMIs hold zero lien on goods. No item can be taken.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Amazon &amp; Flipkart Co-Branded EMIs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Defaulting on an ICICI Amazon Pay or Axis Flipkart card EMI blocks the card, not your shopping app login or item warranty. Your debt stays strictly with the bank.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Salary Account Lien in Same Bank
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your salary account sits in the same bank as your unpaid credit card, the bank can use <Link href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act" className="text-[#1886ff] hover:underline font-semibold">Section 171 set-off rights</Link> once the merged EMI bill turns overdue.
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
                Frequently Asked Questions: Unbilled Credit Card EMIs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Simple, verified legal answers on unbilled shop EMI closure, 42% card interest rates, 3% closure fees, over-limit rules, and RBI settlement plans.
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
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BookOpen className="w-4 h-4" />
                <span>Official Laws &amp; RBI Sources</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Statutory References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Credit Card Master Direction:</strong> RBI/2022-23/92, DoR.AUT.REC.No.27/24.01.041/2022-23 (Credit Card and Debit Card – Issuance and Conduct Directions, 2022, updated March 7, 2024) – Clear EMI Terms, Over-Limit Consent &amp; Paragraph 9(b) Fee Rule.
                </li>
                <li>
                  <strong>RBI IRAC Prudential Norms:</strong> Credit Card Non-Performing Asset (NPA) 90-Day Rule on Unpaid Minimum Amount Due (MAD) &amp; 3-Day Past Due Grace Rule.
                </li>
                <li>
                  <strong>RBI Compromise OTS Circular:</strong> RBI/2023-24/40, DOR.STR.REC.20/21.04.048/2023-24 (dated June 8, 2023) – Board-Approved One-Time Settlement Rules for Banks and NBFCs.
                </li>
                <li>
                  <strong>Supreme Court of India Ruling:</strong> The Hongkong and Shanghai Banking Corporation Ltd. v. Awaz &amp; Ors., Civil Appeal No. 5273 of 2008 (decided December 20, 2024) – Section 21A Banking Regulation Act &amp; Upfront APR Rule.
                </li>
                <li>
                  <strong>Contract &amp; Consumer Law:</strong> Indian Contract Act, 1872 (Section 74) and Consumer Protection Act, 2019 (Sections 2(11) &amp; 2(47)) on Hidden Bank Fees.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Legal Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="http://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>NCDRC Consumer Forum</span>
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
                  <Link href="/jumbo-insta-loan-on-credit-card-default-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Jumbo &amp; Insta Card Loan Rules
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Debt Settlement
                  </Link>
                  <Link href="/credit-card-minimum-due-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Minimum Due Trap
                  </Link>
                  <Link href="/credit-card-npa-timeline" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card NPA Timeline
                  </Link>
                  <Link href="/debt-settlement-vs-loan-restructuring-credit-card" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Settlement vs Restructuring
                  </Link>
                  <Link href="/rupay-credit-card-upi-debt-default-settlement-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RuPay UPI Credit Card Default
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Letter
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/stop-credit-card-recovery-calls" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Card Recovery Calls
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹100/Day CIBIL Update Rule
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
                Expert in RBI credit card rules, bank billing disputes, and OTS negotiations helping Indian card users exit high-rate debt traps cleanly and legally.
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
                  CARD EMI RELIEF DESK
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Unbilled EMIs Merged Into One Huge Bill?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team checks forced over-limit and closure fees, stops rude agent calls, and settles your merged card bill through a verified bank OTS.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Card OTS Check
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
                  <span>RBI Compliant • 100% Private</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Promise</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Bill Audit:</strong> Dispute forced over-limit &amp; compounded fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>42% Rate Relief:</strong> Lump-sum OTS talks on true base debt.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Call Shield:</strong> Legal help against unfair agent calls.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Clean NOC Check:</strong> Full OTS letter check &amp; CIBIL follow-up.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/jumbo-insta-loan-on-credit-card-default-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Jumbo Loan on Credit Card Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Dual account OTS rules &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-minimum-due-trap"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Minimum Due Trap
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Exit 42% card interest &rarr;</span>
                </Link>

                <Link
                  href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Verify Bank OTS Sanction Letter
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Spot fake OTS letters &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
