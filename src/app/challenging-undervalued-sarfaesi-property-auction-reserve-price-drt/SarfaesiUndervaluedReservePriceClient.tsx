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
  Award,
  BookOpen,
  Building2,
  DollarSign,
  Check,
  Lock,
  Phone,
  AlertCircle,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  Home,
  Calculator,
  Percent
} from 'lucide-react';

export default function SarfaesiUndervaluedReservePriceClient() {
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
    { id: 'statutory-valuation-rules', label: '1. Statutory Valuation Rules: SARFAESI Rule 8(5) & 8(6)' },
    { id: 'valuation-forensics', label: '2. Valuation Forensics: Market Value vs Distress Price' },
    { id: 'reserve-price-matrix', label: '3. Legal Comparison: Reserve Price vs Property Metrics' },
    { id: 'supreme-court-precedents', label: '4. Supreme Court Precedents: Judicial Rulings on Valuation' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint: DRT Reserve Price Challenge Workflow' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step SOP: 6-Stage DRT Action Protocol' },
    { id: 'statutory-defense', label: '7. Statutory Defense: Grounds to Quash Bank Reserve Price' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix: Institutional Redressal Steps' },
    { id: 'procedural-timeline', label: '9. Legal Timeline: SARFAESI Default to Auction Stay' },
    { id: 'specialized-scenarios', label: '10. Specialized Scenarios: Joint Property & Multiple Bids' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can I challenge the reserve price fixed by the bank for a SARFAESI auction?',
      a: 'Yes. You can challenge an undervalued reserve price before the Debt Recovery Tribunal (DRT) by filing a DRT application (SA) under Section 17 of the SARFAESI Act. Banks must strictly follow Rule 8(5) by obtaining a valuation from an approved valuer and consulting the secured creditor.'
    },
    {
      q: 'What is Rule 8(5) of the Security Interest Enforcement Rules 2002?',
      a: 'Rule 8(5) requires the Authorised Officer to obtain a valuation report from an approved valuer before selling immovable property. The officer must consult the secured creditor to fix the reserve price. A failure to obtain a valid report makes the auction illegal.'
    },
    {
      q: 'Can a bank fix the auction reserve price below the government circle rate?',
      a: 'No. Fixing a reserve price below the ready reckoner or circle rate fixed by state revenue authorities is a major procedural irregularity. DRTs routinely stay auctions when reserve prices fall below circle rates without compelling reasons.'
    },
    {
      q: 'What did the Supreme Court rule in J. Rajiv Subramaniyan v. Pandiyas?',
      a: 'The Supreme Court ruled that the Authorised Officer acts as a trustee for both borrower and creditor. The officer must ensure the property fetches the best possible price. Selling secured assets at throwaway prices violates this fiduciary duty.'
    },
    {
      q: 'Do I need to deposit 50% debt to file a Section 17 application in DRT?',
      a: 'No. Unlike Section 18 appeals before the DRAT which require a 25% to 50% pre-deposit, a Section 17 DRT application before the DRT requires no mandatory pre-deposit to challenge auction measures or reserve price undervaluation.'
    },
    {
      q: 'How does an independent valuation help in DRT proceedings?',
      a: 'An independent valuation from an IBBI-registered valuer provides clear comparative evidence. It proves that the bank Authorised Officer suppressed the property value, creating strong grounds for DRT to grant an interim stay.'
    },
    {
      q: 'What is the time limit to challenge a SARFAESI auction notice in DRT?',
      a: 'Under Section 17(1) of the SARFAESI Act, you must file your DRT application within 45 days from the date the bank takes the measure, such as the date of receiving the Rule 8(6) sale notice or publication under Rule 9(1).'
    },
    {
      q: 'Can the DRT set aside an auction sale if the property is already sold?',
      a: 'Yes. Under Section 17(3), if the DRT finds that the bank breached Rule 8 or Rule 9 by selling at a grossly depressed price, it has statutory power to declare the sale invalid, cancel the sale certificate, and restore possession to the borrower.'
    },
    {
      q: 'What is the difference between Fair Market Value and Distress Value?',
      a: 'Fair Market Value is the estimated price a willing buyer pays a willing seller in an open market. Distress Value is a discounted liquidation price under forced timelines, usually 20% to 30% lower. Banks cannot fix reserve prices at severe distress values without testing open market demand.'
    },
    {
      q: 'How does CredSettle help borrowers facing undervalued SARFAESI auctions?',
      a: 'CredSettle engages senior DRT counsel, commissions registered valuation audits, files urgent Section 17 applications with stay petitions, halts distress sales, and helps negotiate structured One-Time Settlements (OTS) with significant debt waivers.'
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
            <Scale className="w-3.5 h-3.5" />
            <span>SARFAESI Property Defense &amp; DRT Section 17 Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Challenging Undervalued SARFAESI Auction Reserve Price
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A complete legal guide to stop bank auctions at cheap prices. Learn Rule 8(5) valuation rules. Get an independent valuation. Win an urgent stay order from the Debt Recovery Tribunal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Undervalued Bank Auction</span>
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
                  <span>Statutory DRT Protection Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Section 17 SARFAESI Act 2002 and Rule 8(5) Security Interest Rules.
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
                <span>EXECUTIVE BRIEF: SARFAESI AUCTION RESERVE PRICE DEFENSE</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Valuation Duty:</strong> Under Rule 8(5), the Authorised Officer must obtain a fresh valuation from an approved valuer before fixing the reserve price.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Circle Rate Violation:</strong> A reserve price set below state circle rates or ready reckoner rates is legally invalid and liable to be quashed.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Fiduciary Trust Doctrine:</strong> In J. Rajiv Subramaniyan, the Supreme Court ruled that banks hold mortgaged property as a trustee to secure the maximum commercial value.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Pre-Deposit in DRT:</strong> Filing a DRT application under Section 17 before the DRT requires no mandatory pre-deposit to contest an unfair auction.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Independent Valuation Power:</strong> Submitting a certified IBBI valuation report provides solid documentary evidence to secure an immediate interim stay from the DRT.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Valuation Rules: SARFAESI Rule 8(5) & 8(6) */}
            <section id="statutory-valuation-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Valuation Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Valuation Rules: SARFAESI Rule 8(5) &amp; 8(6)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers who fall behind on loan EMIs often face bank recovery action. Banks use the SARFAESI Act, 2002 to take over mortgaged homes and plots. However, lenders cannot sell your property at throwaway prices. The law provides strict safeguards to protect your real estate asset.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Rule 8(5) of the Security Interest Rules is the most important legal protection. Under this rule, the bank Authorised Officer must get a fresh valuation report from an approved valuer. The officer must also consult the secured creditor before fixing the auction reserve price.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Rule 8(6), the bank must serve a 30-day sale notice directly to the borrower. This notice gives you the exact reserve price, auction date, and terms of sale. You have 30 days to pay the debt or challenge the unfair price before the DRT.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many banks cut corners during this process. Some officers use stale valuation reports that are one or two years old. Others set the reserve price so low that it only covers the loan balance. This practice is illegal. You can challenge it directly in the Debt Recovery Tribunal.
              </p>
            </section>

            {/* SECTION 2: Valuation Forensics: Market Value vs Distress Price */}
            <section id="valuation-forensics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics &amp; Valuation Audit</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Valuation Forensics: Market Value vs Distress Price
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To challenge a bank auction, you must understand how property values work. Every formal bank valuation report contains three main numbers. These are the Fair Market Value, the Realizable Value, and the Distress Sale Value.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Fair Market Value is the full price a buyer pays in an open and fair market. Realizable Value is the price expected during a regular sale process. Distress Sale Value is a forced sale price. It carries a steep discount of 20% to 35% due to urgent timelines.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks often commit a serious error here. They fix the reserve price at the distress value for the very first auction. This scares away genuine buyers. It also destroys the borrower equity in the home. The DRT has the legal power to stop such unfair sales.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Property Audit: Bank Valuation vs Independent Audit</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹2.8 Crore Commercial Property</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Valuation Parameter</th>
                        <th className="p-3">Bank Panel Valuation</th>
                        <th className="p-3">Certified IBBI Valuation</th>
                        <th className="p-3 text-right">Valuation Disparity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Fair Market Value (FMV)</td>
                        <td className="p-3">₹1,60,00,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">₹2,80,00,000</td>
                        <td className="p-3 text-right font-bold text-rose-600">₹1,20,00,000 Suppressed</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Government Circle Rate (Ready Reckoner)</td>
                        <td className="p-3">₹1,45,00,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">₹1,95,00,000</td>
                        <td className="p-3 text-right font-bold text-rose-600">₹50,00,000 Deficit</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Auction Reserve Price Fixed by Bank</td>
                        <td className="p-3 text-rose-600 font-bold">₹1,25,00,000</td>
                        <td className="p-3 text-blue-600 font-semibold">₹2,35,00,000 Recommended</td>
                        <td className="p-3 text-right font-bold text-rose-600">Below Circle Rate (Illegal)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Borrower Asset Equity Protection</td>
                        <td className="p-3 text-rose-700">₹1.55 Crore Loss to Borrower</td>
                        <td className="p-3 text-emerald-700">100% Equity Shielded in DRT</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">Auction Stay Granted</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Legal Comparison: Reserve Price vs Property Metrics */}
            <section id="reserve-price-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Valuation Metrics &amp; Legal Validity</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Legal Comparison: Reserve Price vs Property Metrics
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You must give the DRT clear proof that the bank valuation is flawed. Judges compare the bank reserve price against official benchmarks. This comparison shows whether the bank acted in good faith or suppressed the asset value.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The table below compares the key property benchmarks. It shows how tribunals evaluate each price under the SARFAESI Act.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Valuation Benchmark</th>
                      <th className="p-3">Statutory Basis</th>
                      <th className="p-3">DRT Scrutiny Standard</th>
                      <th className="p-3">Bank Compliance Risk</th>
                      <th className="p-3">Defense Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Government Circle Rate</td>
                      <td className="p-3">State Stamp Act</td>
                      <td className="p-3 text-emerald-600 font-semibold">Mandatory Floor Baseline</td>
                      <td className="p-3 text-rose-600 font-semibold">High: Fatal if below rate</td>
                      <td className="p-3">Produce official revenue circle rate certificate.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Fair Market Value (FMV)</td>
                      <td className="p-3">Rule 8(5) Security Rules</td>
                      <td className="p-3 text-emerald-600 font-semibold">Open Market Evidence</td>
                      <td className="p-3 text-amber-600 font-semibold">Medium: Comparison with local sales</td>
                      <td className="p-3">File certified IBBI registered valuation report.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Realizable Value (RV)</td>
                      <td className="p-3">Banking Practice Guidelines</td>
                      <td className="p-3 text-blue-600 font-semibold">Standard Reserve Baseline</td>
                      <td className="p-3 text-emerald-600 font-semibold">Low if transparently computed</td>
                      <td className="p-3">Audit valuation deductions for infrastructure.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Distress Sale Value (FSV)</td>
                      <td className="p-3">IBC &amp; Liquidation Rules</td>
                      <td className="p-3 text-rose-600 font-semibold">Barred for First Auction</td>
                      <td className="p-3 text-rose-600 font-semibold">Severe: Supreme Court breach</td>
                      <td className="p-3">Prove bank fixed reserve price at distress value.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Outstanding Loan Balance</td>
                      <td className="p-3">Section 13(2) SARFAESI</td>
                      <td className="p-3 text-rose-600 font-semibold">Irrelevant to Asset Worth</td>
                      <td className="p-3 text-rose-600 font-semibold">Severe: Quashed by DRT</td>
                      <td className="p-3">Establish that bank tailored price to match debt.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Private Buyer Offer</td>
                      <td className="p-3">Section 13(8) SARFAESI</td>
                      <td className="p-3 text-emerald-600 font-semibold">High Evidentiary Weight</td>
                      <td className="p-3 text-rose-600 font-semibold">Bank must accept higher bid</td>
                      <td className="p-3">Submit earnest money deposit from buyer in DRT.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Supreme Court Precedents: Judicial Rulings on Valuation */}
            <section id="supreme-court-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Supreme Court Precedents: Judicial Rulings on Valuation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court of India protects borrowers from unfair bank auctions. Apex court rulings form the legal basis of your DRT application before the DRT.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In J. Rajiv Subramaniyan v. Pandiyas (2014), the Supreme Court laid down a key rule. The court ruled that the bank Authorised Officer acts as a trustee for the borrower. The officer must make sincere efforts to get the best market price. Selling property at a throwaway price breaches this trust.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In Mathew Varghese v. M. Amritha Kumar (2014), the Supreme Court gave another vital ruling. The court held that Rule 8 and Rule 9 are mandatory. Lenders cannot sell property in an arbitrary manner. If a bank violates the valuation rules, the entire auction is void.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In Ram Kishun v. State of UP (2012), the court affirmed that the right to property is a constitutional right under Article 300A. A bank cannot take public dues by selling a citizen home for cheap without wide public notice.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: DRT Reserve Price Challenge Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart explains the legal steps to stop an undervalued bank auction. It shows the path from finding valuation errors to securing a stay order from the DRT.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/challenging-undervalued-sarfaesi-property-auction-reserve-price-drt.jpg"
                    alt="Challenging Undervalued SARFAESI Property Auction Reserve Price in DRT"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle SARFAESI Defense Framework • Rule 8(5) Security Rules Compliant</span>
                  <a
                    href="/images/infographics/challenging-undervalued-sarfaesi-property-auction-reserve-price-drt.jpg"
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

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: 6-Stage DRT Action Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank sets an unfair reserve price, follow this step-by-step action plan. These six steps help you secure legal relief and protect your property value.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Demand Copy of Bank Valuation Report
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Send a written letter to the Authorised Officer right away. Ask for a certified copy of the bank valuation report under Rule 8(5). Also ask for proof of creditor consultation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Commission an Independent IBBI Valuation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Hire an independent IBBI-registered valuer. Get a detailed report showing current market rates, government circle rates, and structural quality.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Issue Formal Statutory Objection Notice
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Have your advocate issue a formal legal notice to the bank under Section 13(3A). Point out the wide valuation gap. Demand that the bank cancel the defective auction.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: File DRT application in DRT
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    File an application under Section 17(1) of SARFAESI in the DRT within 45 days. Attach your independent valuation as primary evidence.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Move Urgent Interim Stay Application
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ask the DRT for an urgent hearing. Request an interim stay on the e-auction under Rule 9(1) to stop third-party bids.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Settlement Talks or Private Treaty Sale
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once the auction is stayed, negotiate a One-Time Settlement (OTS) with the bank. You can also bring a private buyer to purchase the property at full market value.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Defense: Grounds to Quash Bank Reserve Price */}
            <section id="statutory-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Grounds &amp; Legal Defenses</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Defense: Grounds to Quash Bank Reserve Price
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To win a stay in the DRT, your lawyer must present strong statutory grounds. These legal points prove that the bank violated mandatory SARFAESI rules.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Breach of Rule 8(5) Consultation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Authorised Officer must document clear consultation with the lender before setting the reserve price. Fixing prices without written consultation is illegal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Reserve Price Below State Circle Rate</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    State revenue circle rates set the minimum legal floor for real estate. If the bank fixes a reserve price below the circle rate, the DRT will stay the sale.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Reliance on Stale Valuation Reports</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Valuation reports older than six months do not reflect current market values. Tribunals routinely quash auction notices that rely on stale reports.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Defective Description in Sale Notice</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Leaving out key property details, room counts, or road access in auction notices hurts buyer turnout. This defect gives you strong grounds to cancel the auction.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Institutional Redressal Steps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Challenging an auction requires moving through structured legal forums. Use this legal escalation matrix to choose the right legal step at each stage.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Competent Forum</th>
                      <th className="p-3">Limitation Period</th>
                      <th className="p-3">Scope of Judicial Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 1: Authorised Officer</td>
                      <td className="p-3">Secured Creditor Bank</td>
                      <td className="p-3 font-mono">15 Days from Notice</td>
                      <td className="p-3">Considers written objections under Section 13(3A) and re-evaluates reserve price.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 2: DRT Application</td>
                      <td className="p-3">Debt Recovery Tribunal</td>
                      <td className="p-3 font-mono">45 Days under Sec 17(1)</td>
                      <td className="p-3">Grants interim stay on auction, appoints court commissioner, and orders fresh joint valuation.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Tier 3: DRAT / High Court</td>
                      <td className="p-3">Appellate Tribunal or High Court</td>
                      <td className="p-3 font-mono">30 Days under Sec 18</td>
                      <td className="p-3">Appellate review against DRT orders, or constitutional writ under Article 226 for grave jurisdictional errors.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline Table */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Legal Timeline: SARFAESI Default to Auction Stay
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing the legal timeline helps you act before the auction takes place. Here are the key legal milestones from loan default to securing a DRT stay order.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Statutory Stage</th>
                      <th className="p-3">Legal Provision</th>
                      <th className="p-3">Bank Action</th>
                      <th className="p-3">Borrower Legal Countermeasure</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Stage 1: Demand Notice</td>
                      <td className="p-3 font-mono text-[11px]">Section 13(2)</td>
                      <td className="p-3">Issues 60-day demand notice for outstanding dues.</td>
                      <td className="p-3">File representation and objection under Section 13(3A).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Stage 2: Symbolic Possession</td>
                      <td className="p-3 font-mono text-[11px]">Section 13(4)</td>
                      <td className="p-3">Takes possession and publishes notice in newspapers.</td>
                      <td className="p-3">Limitation period of 45 days begins for filing Section 17 SA.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Stage 3: Property Valuation</td>
                      <td className="p-3 font-mono text-[11px]">Rule 8(5)</td>
                      <td className="p-3">Appoints valuer and fixes auction reserve price.</td>
                      <td className="p-3">Commission independent IBBI valuation audit immediately.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Stage 4: 30-Day Sale Notice</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Rule 8(6)</td>
                      <td className="p-3">Serves 30-day individual sale notice on borrower.</td>
                      <td className="p-3">Audit reserve price against circle rates and draft DRT stay petition.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Stage 5: Public E-Auction</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Rule 9(1)</td>
                      <td className="p-3">Publishes auction advertisement in two leading newspapers.</td>
                      <td className="p-3 font-bold text-slate-900">Secure urgent interim stay from DRT Presiding Officer.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Stage 6: Post-Stay Resolution</td>
                      <td className="p-3 font-mono text-[11px]">Section 13(8) / OTS</td>
                      <td className="p-3">Bank restrained from conducting auction or executing sale.</td>
                      <td className="p-3">Negotiate a structured OTS or complete sale via private treaty.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Joint Property &amp; Multiple Bids
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Real estate auctions often involve complex ownership disputes. Here is how statutory rules apply across specialized property situations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Joint Owners &amp; Non-Borrowing Mortgagors
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every co-owner and mortgagor must receive a separate 30-day sale notice under Rule 8(6). Missing even one co-owner makes the auction invalid.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Consecutive Failed Auctions &amp; Price Cuts
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks cannot slash reserve prices by 10% to 20% on a whim after a failed auction. Any price reduction requires fresh valuation and valid reasons.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Single Bidder Auctions &amp; Cartel Risks
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Selling property to a single bidder at the baseline reserve price suggests bid rigging. The DRT can inspect auction logs and cancel suspicious sales.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Home className="w-4 h-4 text-amber-600" />
                    Commercial Assets vs Residential Units
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Commercial properties carry high business value, rental income, and footfall. Bank valuers often ignore this value. You can prove commercial value in the DRT.
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
                Frequently Asked Questions: SARFAESI Reserve Price in DRT
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Here are clear answers to common questions about SARFAESI reserve prices, independent valuations, and DRT stay petitions.
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
                Official Regulatory Citations &amp; Statutory Legal Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>SARFAESI Act, 2002:</strong> Section 13(2), Section 13(4), Section 13(8), and Section 17, DRT application before the Debt Recovery Tribunal.
                </li>
                <li>
                  <strong>Security Interest (Enforcement) Rules, 2002:</strong> Rule 8(5) Mandatory Valuation, Rule 8(6) 30-Day Sale Notice, and Rule 9 Time of Sale.
                </li>
                <li>
                  <strong>Insolvency and Bankruptcy Board of India (IBBI):</strong> Registered Valuers and Valuation Regulations, 2017 for Immovable Asset Assessment.
                </li>
                <li>
                  <strong>Constitution of India:</strong> Article 300A, Right to Property Against Arbitrary Deprivation without Due Process of Law.
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> J. Rajiv Subramaniyan v. Pandiyas (2014) and Mathew Varghese v. M. Amritha Kumar (2014).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Judicial Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://drt.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>e-DRT Judicial Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://ibbi.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>IBBI Registered Valuers</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://main.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code SARFAESI Act</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/sarfaesi-act-section-13-2-notice-stop-auction" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 13(2) Notice Reply
                  </Link>
                  <Link href="/sarfaesi-section-13-4-notice-30-day-auction-sale-challenge" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 13(4) Notice Defense
                  </Link>
                  <Link href="/sarfaesi-section-14-physical-possession-order-dm-cmm" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 14 DM Order Challenge
                  </Link>
                  <Link href="/section-13-8-sarfaesi-act-right-of-mortgage-redemption-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 13(8) Redemption Rules
                  </Link>
                  <Link href="/drat-appeal-pre-deposit-waiver-under-section-18-sarfaesi-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    DRAT Section 18 Pre-Deposit
                  </Link>
                  <Link href="/home-loan-default-sarfaesi-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Home Loan SARFAESI Rights
                  </Link>
                  <Link href="/agricultural-loan-default-sarfaesi-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 31(i) Agricultural Exemption
                  </Link>
                  <Link href="/file-caveat-petition-against-bank" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Caveat Petition in DRT
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/services/business-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business Loan Settlement
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify OTS Sanction Letter
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate
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
                Specialist in SARFAESI property defense, DRT securitisation proceedings, real estate valuation scrutiny, and mortgage dispute resolution with extensive experience stopping distressed auctions across India.
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
                  URGENT DRT LEGAL INTERVENTION
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Property Listed for Undervalued Auction?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior DRT counsel challenge illegal reserve prices under Rule 8(5), file urgent stay applications under Section 17, and protect your commercial and residential equity.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Property Now
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
                  <span>Confidential Advisory • Zero DRT Pre-Deposit</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Mandatory Pre-Deposit:</strong> Section 17 SA filed directly in DRT.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Certified Valuation Audit:</strong> IBBI valuer reports prepared in 48 hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Urgent E-Auction Stay:</strong> Ex-parte interim injunction petitions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Structured Debt Settlement:</strong> Direct talks with bank stressed asset desk.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/sarfaesi-section-13-4-notice-30-day-auction-sale-challenge"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    SARFAESI Section 13(4) Notice Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Challenge 30-day sale notices &rarr;</span>
                </Link>

                <Link
                  href="/sarfaesi-section-14-physical-possession-order-dm-cmm"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    SARFAESI Section 14 DM Order
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Defend physical possession notices &rarr;</span>
                </Link>

                <Link
                  href="/section-13-8-sarfaesi-act-right-of-mortgage-redemption-rules"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 13(8) Mortgage Redemption
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Clear debt before auction day &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
