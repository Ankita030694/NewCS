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

export default function LamfMarginCallClient() {
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
    { id: 'statutory-framework', label: '1. RBI LAMF Rules & LTV Caps' },
    { id: 'margin-call-trigger', label: '2. Margin Calls & 7-Day Cure Rule' },
    { id: 'calculation-matrix', label: '3. NAV Drop & Shortfall Math' },
    { id: 'forced-liquidation-tax', label: '4. Forced Sale, Tax & CIBIL Hit' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Stop Forced NAV Sales SOP' },
    { id: 'borrower-rights', label: '7. Section 176 & Court Rulings' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. NAV Drop to Lien Release Flow' },
    { id: 'specialized-scenarios', label: '10. ELSS, Joint Folios & Deficits' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'RBI, SEBI & Legal Citations' }
  ];

  const faqs = [
    {
      q: 'What is a margin call in a Loan Against Mutual Funds (LAMF)?',
      a: 'A margin call is a formal alert from your bank or NBFC when your mutual fund NAV drops. Because the value of your pledged units falls, your loan rises above the RBI LTV cap. You must pay cash or pledge extra units to fix this gap.'
    },
    {
      q: 'What are the RBI LTV limits for banks and NBFCs on mutual fund loans?',
      a: 'NBFCs must keep a strict 50% LTV cap on equity and non-debt mutual funds under RBI Scale Based Regulation rules. Commercial banks can lend up to 75% on equity funds and up to 85% on debt funds, subject to a ₹1 Crore individual cap.'
    },
    {
      q: 'How many days do I get to pay a LAMF margin shortfall under RBI rules?',
      a: 'RBI rules state that a margin shortfall must be fixed within 7 working days. Some NBFC apps set tighter windows of 3 to 5 days in their contract, so check your Key Facts Statement and act right away.'
    },
    {
      q: 'Can a bank or NBFC sell my mutual fund units without giving notice?',
      a: 'No. Under Section 176 of the Indian Contract Act, a lender must give clear and reasonable notice before selling pledged units. Courts have struck down contract clauses that let lenders dump securities without warning.'
    },
    {
      q: 'Who pays capital gains tax and exit load after a forced NAV sale?',
      a: 'You pay the tax and exit load even if the lender forced the sale. Tax rules treat a forced lien invocation as your own redemption. Equity units held up to 1 year face 20% STCG tax, and older units face 12.5% LTCG tax above the annual limit.'
    },
    {
      q: 'How does a lender sell my pledged units through CAMS or KFintech?',
      a: 'If you miss the cure window, the lender sends a lien invocation order to CAMS or KFintech for SoA folios. For demat units, it uses NSDL or CDSL. The fund house then sells the units at the same-day NAV and pays the lender.'
    },
    {
      q: 'What happens to extra cash left over after a forced mutual fund sale?',
      a: 'The lender can keep only the exact loan principal, interest, and disclosed fees listed in your KFS. Any surplus cash left after clearing the dues belongs to you and must be paid back to your bank account.'
    },
    {
      q: 'Does a LAMF margin call or forced sale hurt my CIBIL score?',
      a: 'A margin call paid on time does not hurt your CIBIL score. Even a forced sale that clears 100% of dues leaves zero unpaid debt. However, if sale cash falls short and you miss paying the gap, the lender reports a default to credit bureaus.'
    },
    {
      q: 'Can I pledge ELSS tax-saver mutual funds for a loan in India?',
      a: 'No, not during the 3-year lock-in period under Section 80C of the Income Tax Act. Banks and NBFCs cannot mark a lien on locked ELSS units. Once the 3 years end, those unlocked units can be pledged like normal equity funds.'
    },
    {
      q: 'How does CredSettle help with illegal LAMF sales or leftover deficit debt?',
      a: 'CredSettle audits your loan ledger, KFS, and margin alerts for Section 176 or RBI rule breaches. We file Nodal Officer and RBI Ombudsman complaints for no-notice sales and negotiate clean One-Time Settlements for any deficit balance.'
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
            <span>RBI LTV Limits &amp; Section 176 Pledge Protections</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Defend Against Forced NAV Sale in Mutual Fund Loans
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Learn the official RBI rules for Loan Against Mutual Funds (LAMF), margin call grace periods, and LTV limits. Protect your pledged units from unfair NAV sales, sudden tax bills, and CIBIL drops.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Forced Mutual Fund Sale</span>
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
                  Protected under RBI Lending Directions, SEBI Pledge Rules, and Sections 176 and 177 of the Indian Contract Act.
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
                <span>EXECUTIVE BRIEF: LAMF MARGIN CALL &amp; LIQUIDATION RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict RBI LTV Caps:</strong> NBFCs cap equity mutual fund loans at 50% LTV. Commercial banks can lend up to 75% on equity funds and 85% on debt funds.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">7-Working-Day Cure Window:</strong> When a market dip creates a margin gap, RBI rules allow up to 7 working days to pay cash or pledge extra units.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Section 176 Notice:</strong> Under the Indian Contract Act, a lender cannot dump your pledged units without clear written notice first.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Right to Redeem Before Sale:</strong> You keep full right to pay dues and save your units until the lender completes an actual sale to a buyer or fund house.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Tax &amp; Exit Load Impact:</strong> A forced NAV sale still counts as your own redemption. You pay STCG or LTCG tax and exit load even if the lender triggered the sale.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: RBI Rules on Loan Against Mutual Funds & LTV Caps */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Rules &amp; LTV Ceilings</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Rules on Loan Against Mutual Funds &amp; LTV Caps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A Loan Against Mutual Funds (LAMF) lets you borrow cash without selling your units. Instead of redeeming your funds, you mark a digital lien in favor of a bank or NBFC. Your units stay in your name and keep earning market returns while the loan runs.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, market dips create risk for both you and the lender. To control this risk, the Reserve Bank of India (RBI) sets clear Loan-to-Value (LTV) caps. LTV is the highest share of your fund value that you are allowed to borrow.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For NBFCs, RBI Master Direction DoR.FIN.REC.No.45 (Scale Based Regulation, 2023) sets a hard 50% LTV cap on equity and hybrid mutual funds. This means you must keep ₹2 of fund value for every ₹1 borrowed at all times. For debt-only funds, NBFCs follow their own board rules, which often sit near 75% to 80%.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For commercial banks, RBI Credit Facilities Amendment Directions allow higher limits. Banks can lend up to 75% LTV against equity mutual funds and ETFs, and up to 85% LTV against debt mutual funds. Banks also cap individual loans against eligible securities at ₹1 Crore. They value your units at the lower of the 6-month average NAV or the prior day&apos;s closing NAV.
              </p>

              {/* Bank vs NBFC Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[560px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Regulatory Rule</th>
                      <th className="p-3">Commercial Banks (RBI Directions)</th>
                      <th className="p-3">NBFCs &amp; Fintech Apps (RBI SBR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Equity Mutual Fund LTV</td>
                      <td className="p-3 text-emerald-700 font-semibold">Up to 75% maximum ceiling</td>
                      <td className="p-3 text-amber-700 font-semibold">Strict 50% hard cap at all times</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Debt Mutual Fund LTV</td>
                      <td className="p-3">Up to 85% maximum ceiling</td>
                      <td className="p-3">Board-approved policy (often 75% to 80%)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Individual Loan Limit</td>
                      <td className="p-3">Up to ₹1 Crore against securities</td>
                      <td className="p-3">Board-approved limit (Group 1 rules above ₹5 Lakh)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">NAV Valuation Rule</td>
                      <td className="p-3">Lower of 6-month avg NAV or prior day NAV</td>
                      <td className="p-3">Daily closing NAV from AMFI / RTA feeds</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Margin Cure Timeline</td>
                      <td className="p-3 font-semibold text-[#1886ff]">Within 7 working days of breach</td>
                      <td className="p-3 font-semibold text-[#1886ff]">Within 7 working days (check KFS terms)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 2: How NAV Drops Trigger a Margin Call & Cure Window */}
            <section id="margin-call-trigger" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Daily NAV Tracking &amp; Shortfall Alerts</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. How NAV Drops Trigger a Margin Call &amp; Cure Window
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Lenders check the Net Asset Value (NAV) of your pledged units on every market day. Your live LTV ratio moves up whenever fund prices drop, even if you did not borrow a single extra rupee.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The lender tracks one core ratio: <strong>Current LTV = Outstanding Loan divided by Current Value of Pledged Units</strong>. If stock markets drop 15%, your collateral shrinks while your loan stays flat. As a result, your LTV crosses the allowed RBI limit.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once that limit breaks, the lender sends a margin call by SMS, email, and app alert. Under RBI rules, you must cure the gap within 7 working days. Many digital NBFC apps print shorter cure windows of 3 to 5 days in their Key Facts Statement (KFS). Always read your margin alert right away.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You have two clean ways to fix a margin call before any forced sale happens. First, you can pay cash to cut your loan balance. Second, you can pledge extra unpledged mutual fund units to lift your total collateral value back to safety.
              </p>
            </section>

            {/* SECTION 3: Margin Call Math: NAV Drop & Shortfall Table */}
            <section id="calculation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Real Portfolio Math &amp; Cash vs Units Cure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Margin Call Math: NAV Drop &amp; Shortfall Table
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Seeing the exact numbers makes margin calls much easier to handle. Suppose you pledge ₹10,00,000 of equity mutual funds with an NBFC at 50% LTV and take a ₹5,00,000 loan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                At 50% LTV, paying cash fixes the gap rupee for rupee. Pledging extra units needs double the cash amount because each ₹100 of new equity units gives only ₹50 of borrowing power. The ledger below shows how each market drop changes your dues.
              </p>

              {/* Representative Margin Shortfall Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">NBFC LAMF Margin Shortfall Ledger (₹5,00,000 Loan)</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Base Pledge: ₹10L @ 50% LTV</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Market NAV Drop</th>
                        <th className="p-3">Current Fund Value</th>
                        <th className="p-3">New Live LTV</th>
                        <th className="p-3">Cash to Cure</th>
                        <th className="p-3 text-right">Or Extra Units to Pledge</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">0% (Normal Day)</td>
                        <td className="p-3 font-mono">₹10,00,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">50.0% (Safe)</td>
                        <td className="p-3 font-mono text-slate-500">₹0</td>
                        <td className="p-3 text-right font-bold text-slate-500 font-mono">₹0</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">10% NAV Drop</td>
                        <td className="p-3 font-mono">₹9,00,000</td>
                        <td className="p-3 text-amber-600 font-semibold">55.6% (Breach)</td>
                        <td className="p-3 font-mono font-bold text-amber-700">₹50,000</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">₹1,00,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">20% NAV Drop</td>
                        <td className="p-3 font-mono">₹8,00,000</td>
                        <td className="p-3 text-rose-600 font-semibold">62.5% (High Alert)</td>
                        <td className="p-3 font-mono font-bold text-rose-700">₹1,00,000</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">₹2,00,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">30% NAV Drop</td>
                        <td className="p-3 font-mono">₹7,00,000</td>
                        <td className="p-3 text-rose-700 font-semibold">71.4% (Sale Risk)</td>
                        <td className="p-3 font-mono font-bold text-rose-800">₹1,50,000</td>
                        <td className="p-3 text-right font-bold text-rose-800 font-mono">₹3,00,000</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">45% Market Crash</td>
                        <td className="p-3 font-mono">₹5,50,000</td>
                        <td className="p-3 text-[#1886ff]">90.9% (Forced Sale)</td>
                        <td className="p-3 font-mono text-[#1886ff]">₹2,25,000</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹4,50,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Forced Sale Rules: CAMS Lien, Tax & CIBIL Impact */}
            <section id="forced-liquidation-tax" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Lien Invocation, Tax Costs &amp; Credit Score Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Forced Sale Rules: CAMS Lien, Tax &amp; CIBIL Impact
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you do not cure the margin gap within the notice period, the lender triggers lien invocation. For Statement of Account (SoA) units, the lender sends an online order to CAMS or KFintech. For demat units, it invokes the pledge via NSDL or CDSL under SEBI rules.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A forced sale creates a triple cost that catches many borrowers off guard. First, your units get sold right at the bottom of a market fall, locking in real wealth loss. Second, if your units are under 1 year old, the fund house deducts a 1% exit load before paying the lender.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, Indian tax law treats a forced sale as a redemption made by you. If your units have gains, you owe capital gains tax in that year. Equity units held up to 12 months face 20% Short-Term Capital Gains (STCG) tax. Older equity units face 12.5% Long-Term Capital Gains (LTCG) tax above the yearly limit. Debt fund gains are taxed at your income slab rate.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                After the sale, the lender must credit the payout to your loan and refund any surplus cash to your bank account. If the payout clears 100% of dues, your CIBIL score stays safe. However, a sharp crash can leave an unpaid deficit even after the sale. If you miss paying that gap, the lender reports a default to CIBIL and other credit bureaus.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: LAMF Margin Call &amp; Sale Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This blueprint sums up the key shields for mutual fund borrowers in India. It highlights the 50% to 75% RBI LTV limits, the 7-working-day cure window, and mandatory Section 176 pre-sale notice.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/loan-against-mutual-funds-lamf-margin-call-liquidation.jpg"
                    alt="Loan Against Mutual Funds (LAMF) Margin Call and Forced Liquidation Rules Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle LAMF Borrower Shield • RBI &amp; Section 176 Compliant</span>
                  <a
                    href="/images/infographics/loan-against-mutual-funds-lamf-margin-call-liquidation.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: How to Stop Forced NAV Sales */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: How to Stop Forced NAV Sales
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do not panic when a market fall triggers a margin alert on your phone. Follow these six simple steps to save your units, cut losses, and hold the lender to RBI rules.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Check Your Exact LTV &amp; Key Facts Statement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your live loan ledger and Key Facts Statement (KFS). Verify your real loan balance against the prior day&apos;s AMFI closing NAV. Spot any wrong penal fees that inflate your LTV artificially.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Save Every Margin Alert &amp; Check Notice Dates
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Take screenshots of all emails, SMS alerts, and app pop-ups with timestamps. Confirm that the lender gave a clear rupee shortfall figure and a fair cure window before any sale threat.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Cure With Cash or Low-Risk Debt Units First
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you have liquid cash, pay down the shortfall to get 1x relief right away. If you prefer pledging extra units, pledge liquid or debt mutual funds first so a second stock dip does not trigger another call.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Demand Partial Sale Only (Stop Full Dumping)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you cannot pay cash, email the lender right away asking to sell only the exact units needed to cure the gap. Ask them to pick zero-exit-load or low-tax units instead of dumping your entire folio.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Audit Sale Proceeds, Surplus &amp; Tax Notes
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    After any lien sale, match the CAMS or KFintech redemption note with your loan ledger. Demand instant credit of any surplus cash and save the capital gains report for your income tax filing.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Dispute No-Notice Sales or Settle Any Deficit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the lender dumped your units without reasonable notice, send a formal Section 176 dispute to the Grievance Officer and RBI Ombudsman. If a deficit remains, negotiate a clean One-Time Settlement.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Borrower Legal Rights: Section 176 & Court Rulings */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Pledge Shield &amp; Court Rulings</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Borrower Legal Rights: Section 176 &amp; Court Rulings
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many fintech loan agreements include fine print letting the lender sell mutual funds "at any time without notice." Indian courts have made it clear that fine print cannot override the Indian Contract Act, 1872.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 176 of the Act, a lender must give reasonable notice before selling pledged goods. Under Section 177, you keep the right to clear your dues and reclaim your units right up to the moment of actual sale.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>SC: PTC India Financial v. Venkateswarlu Kari (2022)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court held that Sections 176 and 177 apply to demat securities too. Moving units to a lender&apos;s own account is not a final sale. Your right to redeem survives until an actual third-party sale occurs.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>HC: Prabhat Bank Ltd. v. Babu Ram (AIR 1966 All 134)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Allahabad High Court ruled that a clause letting a bank sell pledged assets without notice is void. Reasonable prior notice under Section 176 is mandatory and cannot be waived by contract.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>SC: Lallan Prasad v. Rahmat Ali (AIR 1967 SC 1322)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court held that a lender cannot sue for the full loan if it fails to account for your pledged units. Lenders must keep clean records of every unit held.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>RBI Penal Charges &amp; KFS Mandates (2023-2024)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Circular DoR.MCS.REC.28, lenders cannot compound late fees on margin shortfalls. Under Circular DoR.STR.REC.13, any liquidation fee missing from your KFS cannot be deducted.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Did a bank or NBFC dump your units without notice or cut hidden fees? Use the RBI three-tier complaint ladder for forced sales or delayed lien release. For depository or RTA errors, you can also file on SEBI SCORES.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Relief &amp; Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank or NBFC Grievance Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Audits margin alerts, pauses hasty liquidation, and corrects LTV or fee errors.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Reviews Section 176 notice proof, reverses illegal charges, and orders surplus refunds.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI / SEBI</td>
                      <td className="p-3">RBI Ombudsman &amp; SEBI SCORES</td>
                      <td className="p-3 font-mono">30 Days Post-GRO</td>
                      <td className="p-3">Issues binding orders on cms.rbi.org.in for wrong sales, lien delays, and CIBIL fixes.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Margin Call Timeline: NAV Drop to Lien Release */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Margin Call Timeline: NAV Drop to Lien Release
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking each stage of a margin call helps you react before the lender sends a lien invocation order to CAMS, KFintech, or your depository.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Stage Window</th>
                      <th className="p-3">Loan Event</th>
                      <th className="p-3">Lender Action</th>
                      <th className="p-3">Borrower Next Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0 (Market Close)</td>
                      <td className="p-3 font-mono text-[11px]">LTV Breach</td>
                      <td className="p-3">Daily AMFI NAV update shows loan crossed permitted LTV limit.</td>
                      <td className="p-3">Check your live folio value and calculate exact rupee gap.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1</td>
                      <td className="p-3 font-mono text-[11px]">Margin Alert</td>
                      <td className="p-3">Sends written margin call via email, SMS, and app with cure deadline.</td>
                      <td className="p-3">Verify ledger balance and confirm no fake penal charges sit inside LTV.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 2 to 7</td>
                      <td className="p-3 font-mono text-[11px]">RBI Cure Window</td>
                      <td className="p-3">Waits for cash payment or new unit pledge within 7 working days.</td>
                      <td className="p-3">Pay cash top-up, pledge debt units, or request limited partial sale.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 8 Onwards</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Lien Invocation</td>
                      <td className="p-3">Issues Section 176 notice and sends sale order to CAMS, KFintech, or DP.</td>
                      <td className="p-3 font-bold text-amber-800">Use Section 177 right to pay before trade execution or challenge no-notice sale.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">T+2 to T+3 Days</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Cash Settlement</td>
                      <td className="p-3">Credits fund payout to loan account and returns leftover surplus cash.</td>
                      <td className="p-3 font-bold text-slate-900">Match AMC payout note against ledger and save tax report.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Post-Closure</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">Lien Removal</td>
                      <td className="p-3">Lifts CAMS/KFintech or demat pledge and updates credit bureaus in 15 days.</td>
                      <td className="p-3">Download NOC, confirm zero lien on MFCentral, and check CIBIL report.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Special Cases: ELSS, Joint Folios & Deficit Dues */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: ELSS, Joint Folios &amp; Deficit Dues
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Real-life mutual fund loans often involve tax-saver funds, joint holders, delayed lien lifts, or sudden crash deficits. Here is how Indian rules handle these four common cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#1886ff]" />
                    ELSS Mutual Funds &amp; 3-Year Lock-In Ban
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 80C tax rules, ELSS units carry a strict 3-year lock-in. Lenders cannot place a lien or sell locked ELSS units. Only older SIP batches that have crossed 3 full years can be pledged.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Joint Folios &amp; Mode of Holding Rules
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Most lenders only accept single-holder folios for instant digital LAMF. If a joint folio is pledged offline, all joint holders must sign consent. Without valid consent, a forced sale can be legally challenged.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Post-Crash Deficit &amp; One-Time Settlement
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a severe crash leaves an unpaid balance even after selling all units, that deficit turns into an unsecured debt. You can audit hidden fees and negotiate a clean One-Time Settlement (OTS) for a No Dues Certificate.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600" />
                    Delayed Lien Release After Full Payoff
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Once your LAMF ledger hits zero, the lender must lift the CAMS, KFintech, or demat pledge promptly. If a bank traps your units past 30 days, you can escalate to the RBI Ombudsman for service deficiency.
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
                Frequently Asked Questions: LAMF Margin Call Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, plain-English answers on RBI LTV ceilings, 7-day margin call rules, CAMS lien invocation, capital gains tax, and CIBIL protection for mutual fund loans.
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
                Official RBI, SEBI &amp; Legal Citations for LAMF Rules
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Master Direction (NBFC - Scale Based Regulation) Directions, 2023:</strong> DoR.FIN.REC.No.45/03.10.119/2023-24 (50% LTV ceiling on equity shares and non-debt mutual funds; 7-working-day shortfall cure window).
                </li>
                <li>
                  <strong>RBI (Commercial Banks - Credit Facilities) Amendment Directions:</strong> LTV caps of 75% on equity mutual funds/ETFs and 85% on debt mutual funds, ₹1 Crore individual lending limit, and NAV valuation norms.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 176 (Pawnee right to sell only after reasonable notice) and Section 177 (Defaulting pawnor right to redeem before actual sale).
                </li>
                <li>
                  <strong>SEBI (Depositories and Participants) Regulations, 2018:</strong> Regulation 79 (Creation, invocation, and release of electronic pledge over demat securities via NSDL and CDSL).
                </li>
                <li>
                  <strong>RBI Fair Lending Circulars:</strong> DoR.MCS.REC.28/01.01.001/2023-24 (Penal Charges Ban on Compounding) and DoR.STR.REC.13/13.03.00/2024-25 (Mandatory Key Facts Statement Disclosures).
                </li>
                <li>
                  <strong>Supreme Court &amp; High Court Precedents:</strong> PTC India Financial Services Ltd. v. Venkateswarlu Kari (2022) 9 SCC 704; Lallan Prasad v. Rahmat Ali (AIR 1967 SC 1322); and Prabhat Bank Ltd. v. Babu Ram (AIR 1966 All 134).
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
                  <a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>SEBI Official Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>SEBI SCORES Redressal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code (Contract Act, 1872)</span>
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
                  <Link href="/credit-line-against-nsc-kvp-sovereign-gold-bond-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan Against NSC, KVP &amp; SGB Default
                  </Link>
                  <Link href="/fd-backed-secured-credit-card-default-liquidation-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    FD-Backed Card Liquidation Rules
                  </Link>
                  <Link href="/flexi-hybrid-personal-loan-drop-line-overdraft-settle" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Flexi Overdraft Loan Settlement
                  </Link>
                  <Link href="/can-bank-withhold-pledged-gold-after-loan-repayment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pledged Gold Return Rules
                  </Link>
                  <Link href="/rbi-5000-per-day-delay-compensation-property-documents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹5,000/Day Collateral Delay
                  </Link>
                  <Link href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Hidden Fees Missing in KFS
                  </Link>
                  <Link href="/section-59-contract-act-loan-payment-to-principal-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 59 Payment to Principal
                  </Link>
                  <Link href="/rbi-15-day-fortnightly-credit-bureau-update-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI 15-Day CIBIL Update Rule
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After Loan Closure
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
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
                Specialist in RBI lending rules, pledge law under the Indian Contract Act, and loan settlements, helping borrowers challenge unfair forced sales and protect long-term wealth.
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
                  LAMF LEGAL &amp; MARGIN SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Facing a Mutual Fund Margin Call?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team audits your LTV ledger, challenges no-notice NAV sales under Section 176, speeds up stuck CAMS lien release, and settles deficit dues cleanly.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free LAMF Legal Audit
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
                  <span><strong>Section 176 Notice Audit:</strong> Fight illegal no-notice NAV dumping.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>KFS &amp; Fee Review:</strong> Strip unlisted fees and penal bloat.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Fast Lien Removal:</strong> Escalate stuck CAMS &amp; demat pledges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Deficit OTS Support:</strong> Settle crash gaps with full NOC.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/credit-line-against-nsc-kvp-sovereign-gold-bond-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Loan Against NSC, KVP &amp; SGB Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Pledged bond rules in India &rarr;</span>
                </Link>

                <Link
                  href="/fd-backed-secured-credit-card-default-liquidation-rules"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    FD-Backed Card Liquidation Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Deposit lien &amp; surplus law &rarr;</span>
                </Link>

                <Link
                  href="/rbi-5000-per-day-delay-compensation-property-documents"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI ₹5,000/Day Collateral Delay Rule
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">30-day document release law &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
