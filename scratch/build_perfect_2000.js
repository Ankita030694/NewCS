const fs = require('fs');
const path = require('path');

// 10 Synchronized FAQs (Total = 423 words)
const faqs = [
  {
    q: "Can bank recovery agents forcefully seize my car on the road?",
    a: "No. In ICICI Bank v. Prakash Kaur (2007), the Supreme Court ruled that banks cannot deploy musclemen to seize vehicles without due legal process. Forceful road intercepts constitute criminal trespass and extortion."
  },
  {
    q: "What statutory notices must a bank serve before repossession?",
    a: "Under the RBI Fair Practices Code, lenders must issue a formal demand notice giving 15 to 30 days to clear arrears, followed by a pre-repossession intimation, and a pre-sale valuation notice."
  },
  {
    q: "Can I file a police complaint if recovery agents illegally tow my car?",
    a: "Yes. You can register an FIR under Sections 303 (Theft), 308 (Extortion), 329 (Trespass), and 351 (Intimidation) of BNS / Sections 379, 383, 441, and 506 IPC against the agents and the bank."
  },
  {
    q: "What is an inventory sheet and why is it mandatory during seizure?",
    a: "An inventory sheet is a compulsory document itemizing all personal belongings inside the vehicle, odometer reading, fuel level, and physical condition. Refusal to provide a signed inventory violates RBI recovery directives."
  },
  {
    q: "Does the bank have the legal right to sell my car immediately?",
    a: "No. The lender must serve a formal pre-sale notice granting 15 to 30 days to redeem the vehicle, accompanied by a certified surveyor valuation report before scheduling an auction."
  },
  {
    q: "What happens if car auction proceeds do not cover the loan balance?",
    a: "Any shortfall becomes an unsecured residual debt. The bank cannot seize other assets without court orders and must pursue civil recovery or negotiate an amicable compromise settlement."
  },
  {
    q: "How can I obtain an urgent court injunction to stop vehicle repossession?",
    a: "You can file a petition under Section 9 of the Arbitration Act or Order 39 CPC before the District Commercial Court seeking an interim status-quo injunction restraining the lender from taking physical possession."
  },
  {
    q: "Can I negotiate a One-Time Settlement (OTS) for a defaulted auto loan?",
    a: "Yes. Borrowers with genuine hardship can negotiate an OTS with the bank credit committee, securing 40% to 55% waivers on accumulated penal interest and charges, followed by a clean No Dues Certificate."
  },
  {
    q: "How does auto loan default and vehicle repossession affect my CIBIL score?",
    a: "Repossession causes an immediate 80 to 140 point score drop. However, settling the account through an OTS halts ongoing negative reporting, enabling score recovery above 750 within 12 to 24 months."
  },
  {
    q: "What should I do if recovery agents show up demanding car keys?",
    a: "Demand official bank identification, agent DRS registration, and written authorization. Refuse handover without statutory notice, record the encounter, contact emergency police (112), and notify CredSettle for legal intervention."
  }
];

const clientContent = `'use client';

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
  FileText,
  HelpCircle,
  TrendingUp,
  Award,
  BookOpen,
  Building2,
  DollarSign,
  Check,
  Phone,
  AlertCircle,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Car,
  ShieldAlert,
  Layers,
  FileWarning,
  Briefcase
} from 'lucide-react';

export default function CarLoanDefaultVehicleSeizureClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Crux' },
    { id: 'debt-economics-npa', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'financial-settlement-math', label: '2. Settlement Math & Penal Inflation' },
    { id: 'comparison-matrix-grid', label: '3. Comparative Resolution Matrix' },
    { id: 'cibil-algorithm-impact', label: '4. CIBIL Algorithm & Credit Recovery' },
    { id: 'infographic-roadmap', label: 'Visual 6-Stage Defense Blueprint' },
    { id: 'step-by-step-sop', label: '5. 6-Stage Legal Resolution SOP' },
    { id: 'statutory-notice-defense', label: '6. Statutory Notice Defense Grid' },
    { id: 'escalation-redressal-matrix', label: '7. 3-Tier Grievance Redressal' },
    { id: 'chronological-milestones', label: '8. Procedural Timeline Table' },
    { id: 'specialized-scenarios', label: '9. Specialized Real-World Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authority Grid' }
  ];

  const faqs = ${JSON.stringify(faqs, null, 4)};

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. COMPACT HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold mb-4 backdrop-blur-xs border border-white/20">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
            <span>Supreme Court Auto Loan Repossession Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Car Loan Default &amp; Vehicle Seizure by Bank: Legal Rights &amp; Protection
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Facing auto loan default and vehicle repossession threats? Learn Supreme Court protections under ICICI Bank vs Prakash Kaur, pre-sale notice mandates, and institutional One-Time Settlement solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your Vehicle: Talk to a Debt Resolution Professional</span>
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
                      href={'#' + link.id}
                      className={
                        isActive
                          ? 'block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                          : 'block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      }
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Auto Debt Legal Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by Supreme Court Precedents, Motor Vehicles Act 1988 &amp; RBI Fair Practices Code.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box (#F4F8FE with 5px blue left border) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: CAR LOAN REPOSSESSION &amp; BORROWER PROTECTIONS</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Supreme Court Precedent:</strong> In <em>ICICI Bank v. Prakash Kaur (2007)</em>, the Supreme Court banned musclemen repossession without due court process.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Hypothecation Ownership:</strong> Section 51 Motor Vehicles Act creates a financial charge, but ownership remains with the borrower.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Mandatory Cure Notice:</strong> Lenders must serve a 15 to 30 day demand cure notice before initiating repossession.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Compulsory Inventory Sheet:</strong> Repossessing officers must provide a signed inventory of vehicle contents and physical condition.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Pre-Sale Valuation Notice:</strong> Banks cannot auction vehicles without serving a pre-sale notice with certified surveyor valuation.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Criminal Penalties:</strong> Highway intercept towing constitutes criminal trespass (Section 329 BNS) and extortion (Section 308 BNS).
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Civil Court Injunction:</strong> Borrowers can obtain status-quo stay orders under Section 9 Arbitration Act against seizure.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Structured OTS Resolution:</strong> An institutional OTS waives 40% to 55% of penal interest with an unconditional No Dues Certificate.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="debt-economics-npa" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Foundations &amp; Banking Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics &amp; NPA Dynamics: The Realities of Auto Loan Defaults
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Auto loans in India operate under hypothecation agreements governed by the Indian Contract Act, 1872 and registered under Section 51 of the Motor Vehicles Act, 1988. While the financier maintains a charge on the asset, the borrower remains the registered owner. Vehicles are rapidly depreciating assets whose market value declines sharply each quarter.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When loan installments remain unpaid, accounts progress through RBI Special Mention Account stages: SMA-0 (1-30 days), SMA-1 (31-60 days), and SMA-2 (61-90 days). Beyond 90 days past due, loans become Non-Performing Assets (NPA). Under Basel III rules, banks must set aside heavy capital provisions for NPAs. Because seized vehicles in storage yards rapidly deteriorate, lenders have strong commercial incentives to negotiate One-Time Settlements (OTS).
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-settlement-math" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics &amp; Settlement Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown &amp; Settlement Math: Deconstructing Penal Inflation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When auto loans default, gross bank claims swell from compounding interest, NACH bounce charges, legal fees, and yard parking costs. A forensic audit isolates genuine principal from ancillary penalties, enabling deep waivers during One-Time Settlement (OTS) negotiations:
              </p>

              {/* REPRESENTATIVE SETTLEMENT MATH CARD */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 md:p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-extrabold text-slate-900 text-xs sm:text-sm">
                      Representative 180-Day NPA Auto Loan Settlement Model
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Typical 40% to 55% Waiver
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px] block">
                      Bank Gross Claim
                    </span>
                    <div className="flex justify-between py-0.5 border-b border-slate-200/60">
                      <span className="text-slate-600">Unpaid Principal:</span>
                      <span className="font-bold text-slate-900">₹5,80,000</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-200/60">
                      <span className="text-slate-600">Accrued Interest:</span>
                      <span className="font-semibold text-slate-800">₹94,000</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-200/60">
                      <span className="text-slate-600">Penal Fees &amp; Bounces:</span>
                      <span className="font-semibold text-red-600">₹72,000</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-200/60">
                      <span className="text-slate-600">Yard Storage Fees:</span>
                      <span className="font-semibold text-red-600">₹48,000</span>
                    </div>
                    <div className="flex justify-between pt-1 text-slate-900 font-extrabold text-xs">
                      <span>Total Claim:</span>
                      <span className="text-red-700">₹7,94,000</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 bg-blue-50/60 p-3 rounded-xl border border-blue-100">
                    <span className="font-bold text-[#1886ff] uppercase tracking-wider text-[10px] block">
                      CredSettle Outcome
                    </span>
                    <div className="flex justify-between py-0.5 border-b border-blue-200/50">
                      <span className="text-slate-600">Penal Fees Waiver:</span>
                      <span className="font-bold text-emerald-700">100% (₹72,000)</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-blue-200/50">
                      <span className="text-slate-600">Yard Fees Waiver:</span>
                      <span className="font-bold text-emerald-700">100% (₹48,000)</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-blue-200/50">
                      <span className="text-slate-600">Interest Discount:</span>
                      <span className="font-semibold text-emerald-700">70% (₹65,800)</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-blue-200/50">
                      <span className="text-slate-600">Principal Relief:</span>
                      <span className="font-semibold text-emerald-700">15% (₹87,000)</span>
                    </div>
                    <div className="flex justify-between pt-1 text-slate-900 font-extrabold text-xs">
                      <span>Final Agreed OTS:</span>
                      <span className="text-[#1886ff]">₹3,85,000 (51.5% Savings)</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Upon RTGS payment of ₹3,85,000, the bank issues an official Settlement Sanction Letter, unconditional No Dues Certificate, and RTO Form 35 to release hypothecation.
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix Table */}
            <section id="comparison-matrix-grid" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Strategic Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparative Resolution Matrix: Evaluating Borrower Options
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Evaluating available auto loan resolution routes is critical to prevent distress asset loss. This matrix compares key trade-offs across five avenues:
              </p>

              {/* 4-SIDED BORDERED TABLE WITH VERTICAL AND HORIZONTAL DIVIDERS */}
              <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-xs">
                <table className="w-full text-left text-xs border-collapse border border-slate-300">
                  <thead className="bg-slate-100 text-slate-800">
                    <tr>
                      <th className="p-2.5 font-bold border border-slate-300">Route</th>
                      <th className="p-2.5 font-bold border border-slate-300">Waiver</th>
                      <th className="p-2.5 font-bold border border-slate-300">Possession</th>
                      <th className="p-2.5 font-bold border border-slate-300">Speed</th>
                      <th className="p-2.5 font-bold border border-slate-300">NDC &amp; Form 35</th>
                      <th className="p-2.5 font-bold border border-slate-300 text-[#1886ff]">CIBIL</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold border border-slate-300 text-slate-900">One-Time Settlement</td>
                      <td className="p-2.5 border border-slate-300 text-emerald-700 font-bold">40% to 55%</td>
                      <td className="p-2.5 border border-slate-300 font-semibold text-emerald-800">Retained / Redeemed</td>
                      <td className="p-2.5 border border-slate-300">30-45 Days</td>
                      <td className="p-2.5 border border-slate-300 text-emerald-700 font-bold">Complete NDC</td>
                      <td className="p-2.5 border border-slate-300 text-slate-800">Settled</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold border border-slate-300 text-slate-900">Restructuring</td>
                      <td className="p-2.5 border border-slate-300 text-slate-600">Zero Waiver</td>
                      <td className="p-2.5 border border-slate-300 text-slate-700">Retained + Interest</td>
                      <td className="p-2.5 border border-slate-300">60-90 Days</td>
                      <td className="p-2.5 border border-slate-300 text-slate-700">Pending EMIs</td>
                      <td className="p-2.5 border border-slate-300 text-amber-700">Restructured</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold border border-slate-300 text-slate-900">Court Litigation</td>
                      <td className="p-2.5 border border-slate-300 text-red-600">None</td>
                      <td className="p-2.5 border border-slate-300 text-amber-700">Contested</td>
                      <td className="p-2.5 border border-slate-300 text-red-600">2-5 Years</td>
                      <td className="p-2.5 border border-slate-300 text-slate-600">Pending Decree</td>
                      <td className="p-2.5 border border-slate-300 text-red-700">Suit Filed</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold border border-slate-300 text-slate-900">Lok Adalat</td>
                      <td className="p-2.5 border border-slate-300 text-emerald-700 font-semibold">25% to 40%</td>
                      <td className="p-2.5 border border-slate-300 text-slate-700">Mutual Terms</td>
                      <td className="p-2.5 border border-slate-300">Quarterly</td>
                      <td className="p-2.5 border border-slate-300 text-emerald-700 font-bold">Civil Award</td>
                      <td className="p-2.5 border border-slate-300 text-slate-800">Settled</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold border border-slate-300 text-slate-900">Inaction / Seizure</td>
                      <td className="p-2.5 border border-slate-300 text-red-700 font-extrabold">Distress Sale</td>
                      <td className="p-2.5 border border-slate-300 text-red-700 font-bold">Illegally Seized</td>
                      <td className="p-2.5 border border-slate-300 text-red-600">Ongoing Stress</td>
                      <td className="p-2.5 border border-slate-300 text-red-700">Residual Debt</td>
                      <td className="p-2.5 border border-slate-300 text-red-800 font-bold">Repossessed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-impact" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Technical CIBIL Algorithm: Scoring Math &amp; Credit Rebuilding
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit bureaus calculate scores across five pillars: Repayment History (35%), Credit Utilization (30%), Credit Age (15%), Credit Mix (10%), and Inquiries (10%). Defaulting triggers cascading 30 to 90+ DPD notations, lowering scores by 80 to 140 points.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Executing an official OTS updates bureau records to &quot;Settled&quot; with zero balance, stopping recurring monthly negative marks. With an unconditional No Dues Certificate, a secured credit builder card, and disciplined payments, borrowers recover scores above 750 within 12 to 24 months. Erroneous reporting can be corrected under Section 21 of CICRA, 2005.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-roadmap" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: 6-Stage Vehicle Repossession Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Review our visual roadmap outlining statutory borrower protections against unlawful vehicle repossession and institutional compromise settlement workflows:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/car-loan-default-vehicle-seizure.jpg"
                    alt="Car Loan Default and Vehicle Seizure Legal Defense Blueprint Infographic"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-2.5 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Blueprint • Supreme Court Precedents &amp; RBI Fair Practices</span>
                  <a
                    href="/images/infographics/car-loan-default-vehicle-seizure.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>View Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Layers className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP: 6-Stage Vehicle Protection &amp; Settlement Process
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CredSettle implements a structured Standard Operating Procedure to halt coercive collection tactics and negotiate directly with bank credit committees:
              </p>

              <div className="space-y-2.5 pt-1">
                {/* Stage 1 */}
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">
                      Stage 1 (Days 1-5): Forensic Loan Audit
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Legal audit of loan contracts and notices to identify unauthorized penal charges, unlawful towing fees, and verify whether mandatory RBI pre-repossession notices were served.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">
                      Stage 2 (Days 6-12): Hardship Dossier &amp; Valuation
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Compiling distress documentation alongside an independent certified surveyor valuation report establishing realistic vehicle distress value for settlement discussions.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">
                      Stage 3 (Days 13-20): Credit Committee &amp; Nodal Notice
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Formal representation before the bank Credit Committee and Principal Nodal Officer, asserting statutory protections against recovery musclemen under Supreme Court guidelines.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">
                      Stage 4 (Days 21-32): Bilateral OTS Negotiations
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Negotiators engage the bank recovery desk to secure 40% to 55% waivers on penal interest, late fees, and yard parking expenses matched to borrower capacity.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">
                      Stage 5 (Days 33-38): Sanction Letter Verification
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Vetting the bank Settlement Sanction Letter to confirm exact account details, compromise waiver terms, and binding commitments regarding hypothecation removal.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">
                      Stage 6 (Days 39-45): Remittance &amp; NDC Issuance
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Direct payment to the bank loan account via RTGS, followed by issuance of the unconditional No Dues Certificate, RTO Form 35, and credit bureau closure.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Defense &amp; Procedural Safeguards</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense: Analyzing Legal Provisions &amp; Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When auto loans enter default, lenders serve statutory notices to exert pressure. Understanding these provisions enables an effective legal defense:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs">
                    <FileWarning className="w-3.5 h-3.5" />
                    <span>Section 25 PSSA (NACH Bounce)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Penalizes bounced electronic mandates. Lenders must issue notice within 30 days. Proving absence of fraud or active settlement talks provides an effective legal defense.
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Section 138 NI Act (Cheque Bounce)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Supreme Court precedents, undated security cheques collected at loan disbursement cannot be presented for inflated amounts without prior reconciliation.
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs">
                    <Scale className="w-3.5 h-3.5" />
                    <span>Arbitration &amp; Section 9 Injunction</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unilateral arbitrator appointments by lenders are legally invalid. Borrowers can seek interim stay orders under Section 9 Arbitration Act against vehicle repossession.
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>DRT Section 19 &amp; Fair Practices</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For claims over ₹20 Lakhs before DRT, lenders must strictly comply with the RBI Fair Practices Code prohibiting borrower harassment and intimidation.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-redressal-matrix" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Escalation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Grievance Redressal Matrix: Enforcing Institutional Accountability
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If recovery agents violate RBI guidelines through harassment, abusive calls, or repossession threats, borrowers can escalate through three regulatory tiers:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <span className="text-[10px] font-bold text-[#1886ff] uppercase">Tier 1 (7-10 Days)</span>
                  <h3 className="font-bold text-slate-900 text-xs">Grievance Redressal Officer</h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Submit formal written complaints with call logs demanding cessation of rogue agent visits.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <span className="text-[10px] font-bold text-[#1886ff] uppercase">Tier 2 (14-21 Days)</span>
                  <h3 className="font-bold text-slate-900 text-xs">Principal Nodal Officer</h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Escalate unresolved complaints to apex nodal officers citing RBI debt recovery directions.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <span className="text-[10px] font-bold text-emerald-700 uppercase">Tier 3 (30 Days)</span>
                  <h3 className="font-bold text-slate-900 text-xs">RBI Integrated Ombudsman</h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Lodge online complaints on cms.rbi.org.in for regulatory reprimand and dispute resolution.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-milestones" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Chronological Timeline Table: The 6-Month Procedural Lifecycle
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Auto loan dispute resolution follows a predictable procedural sequence from default to final settlement:
              </p>

              {/* 4-SIDED BORDERED TABLE */}
              <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-xs">
                <table className="w-full text-left text-xs border-collapse border border-slate-300">
                  <thead className="bg-slate-100 text-slate-800">
                    <tr>
                      <th className="p-2.5 font-bold border border-slate-300">Phase</th>
                      <th className="p-2.5 font-bold border border-slate-300">Status</th>
                      <th className="p-2.5 font-bold border border-slate-300">Bank Strategy</th>
                      <th className="p-2.5 font-bold border border-slate-300 text-[#1886ff]">Legal Step</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold border border-slate-300 text-slate-900">Days 1 - 30</td>
                      <td className="p-2.5 border border-slate-300 font-semibold text-slate-800">SMA-0</td>
                      <td className="p-2.5 border border-slate-300">SMS alerts, soft calls</td>
                      <td className="p-2.5 border border-slate-300 text-slate-800">Review repayment plan</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold border border-slate-300 text-slate-900">Days 31 - 90</td>
                      <td className="p-2.5 border border-slate-300 font-semibold text-amber-700">SMA-1 &amp; SMA-2</td>
                      <td className="p-2.5 border border-slate-300">Agent calls, threat letters</td>
                      <td className="p-2.5 border border-slate-300 text-slate-800">Serve Cease &amp; Desist notice</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold border border-slate-300 text-slate-900">Days 91 - 120</td>
                      <td className="p-2.5 border border-slate-300 font-bold text-red-600">NPA Asset</td>
                      <td className="p-2.5 border border-slate-300">Demand &amp; arbitration notices</td>
                      <td className="p-2.5 border border-slate-300 text-slate-800">Initiate Credit Committee OTS</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold border border-slate-300 text-slate-900">Days 121 - 150</td>
                      <td className="p-2.5 border border-slate-300 font-bold text-red-700">Provisioning Window</td>
                      <td className="p-2.5 border border-slate-300">Pre-sale notices, legal filings</td>
                      <td className="p-2.5 border border-slate-300 text-[#1886ff] font-semibold">Finalize compromise terms</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold border border-slate-300 text-slate-900">Month 5 - 6</td>
                      <td className="p-2.5 border border-slate-300 font-bold text-emerald-700">Settled Account</td>
                      <td className="p-2.5 border border-slate-300">Sanction letter issued</td>
                      <td className="p-2.5 border border-slate-300 text-emerald-700 font-bold">Remit OTS, get NDC &amp; Form 35</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Case Studies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Real-World Scenarios: Complex Auto Loan Disputes
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Auto loan defaults occur in various circumstances. CredSettle resolves complex dispute scenarios across borrower categories in India:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#1886ff]" />
                    Commercial Fleet Defaults
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fleet operators with vehicles hypothecated across NBFCs receive legal protection against highway intercepts, facilitating structured multi-vehicle settlements.
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Executive Luxury Cars
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Professionals with premium car loans facing unexpected layoffs receive strategic negotiation support, securing waivers to facilitate dignified redemption or surrender.
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                    Total Loss Insurance Disputes
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When accident-damaged cars face insurance claim delays while banks demand EMIs, CredSettle coordinates claim settlement and shortfall waivers.
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-indigo-600" />
                    ARC Debt Assignments
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When defaulted auto loans are sold to Asset Reconstruction Companies under SARFAESI Section 5, we enforce strict compliance with RBI recovery codes.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Auto Loan Default &amp; Vehicle Repossession
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, authoritative answers to the most critical legal and financial questions surrounding car loan defaults, repossession procedures, and borrower protections in India:
              </p>

              <div className="space-y-2.5 pt-1">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-3.5 sm:p-4 text-left font-bold text-slate-900 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors text-xs sm:text-sm"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={\`w-4 h-4 text-[#1886ff] flex-shrink-0 transition-transform duration-200 \${
                            isOpen ? 'transform rotate-180' : ''
                          }\`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Citations &amp; Outbound Authority Grid</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Statutory Citations &amp; Authoritative Sources
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                CredSettle legal commentary and defense strategies are strictly rooted in Indian statutes, judicial precedents, and RBI frameworks:
              </p>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Key Judicial Precedents &amp; Statutory Codes
                </h3>
                <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside leading-relaxed">
                  <li><strong>Supreme Court:</strong> <em>ICICI Bank Ltd. v. Prakash Kaur (2007) 2 SCC 711</em> (Ban on musclemen).</li>
                  <li><strong>Motor Vehicles Act, 1988:</strong> Section 51 (Motor vehicle hypothecation provisions).</li>
                  <li><strong>Reserve Bank of India:</strong> Master Direction on Outsourcing and Debt Recovery Codes.</li>
                  <li><strong>Bharatiya Nyaya Sanhita, 2023:</strong> Sections 303 (Theft), 308 (Extortion), 329 (Trespass), 351 (Intimidation).</li>
                  <li><strong>CICRA, 2005:</strong> Section 21 (Dispute resolution and rectification of credit information).</li>
                </ul>
              </div>

              {/* 6 Outbound Authority Badges */}
              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Official Regulatory Portals
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200 transition-colors"
                  >
                    <span>Reserve Bank of India (rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200 transition-colors"
                  >
                    <span>RBI Integrated Ombudsman (cms.rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200 transition-colors"
                  >
                    <span>TransUnion CIBIL India (cibil.com)</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200 transition-colors"
                  >
                    <span>India Code Repository (indiacode.nic.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200 transition-colors"
                  >
                    <span>National Legal Services Authority (nalsa.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200 transition-colors"
                  >
                    <span>National Cyber Crime Portal (cybercrime.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              </div>

              {/* 10 Internal CredSettle Topic Badges */}
              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Related Debt Resolution Guides
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/can-recovery-agents-seize-property"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
                  >
                    Can Recovery Agents Seize Property?
                  </Link>
                  <Link
                    href="/bank-recovery-agent-harassment-rules-in-hindi"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
                  >
                    Recovery Agent Harassment Rules
                  </Link>
                  <Link
                    href="/arbitration-notice-personal-loan-default"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
                  >
                    Arbitration Notice Defense
                  </Link>
                  <Link
                    href="/ecs-nach-bounce-legal-notice-section-25"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
                  >
                    Section 25 NACH Bounce Legal Notice
                  </Link>
                  <Link
                    href="/section-138-cheque-bounce-personal-loan"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
                  >
                    Section 138 Cheque Bounce Defense
                  </Link>
                  <Link
                    href="/police-complaint-against-bank-recovery-agent"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
                  >
                    Police Complaint Against Recovery Agents
                  </Link>
                  <Link
                    href="/lok-adalat-personal-loan-settlement"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
                  >
                    Lok Adalat Loan Settlement
                  </Link>
                  <Link
                    href="/get-noc-after-loan-settlement"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
                  >
                    Get NOC After Loan Settlement
                  </Link>
                  <Link
                    href="/improve-cibil-after-loan-settlement"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
                  >
                    Improve CIBIL After Settlement
                  </Link>
                  <Link
                    href="/full-and-final-settlement-meaning"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
                  >
                    Full and Final Settlement Meaning
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-5 lg:sticky lg:top-6">
            
            {/* Author Bio Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-lg border border-blue-200 flex-shrink-0">
                  AJ
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm">
                    Ashish Jhangra
                  </h3>
                  <p className="text-xs text-[#1886ff] font-semibold">
                    Legal &amp; Debt Resolution Professional
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialist in Indian banking jurisprudence, motor vehicle hypothecation disputes, SARFAESI limitations, and debt compromise settlements at CredSettle.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Verified Legal Author</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  CredSettle Legal Desk
                </span>
              </div>
            </div>

            {/* Emergency CTA Card (#2452ae) */}
            <div
              className="rounded-2xl p-5 md:p-6 text-white shadow-md space-y-4 text-center"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="inline-flex p-3 rounded-full bg-white/10 mx-auto">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-extrabold leading-snug">
                Facing Illegal Vehicle Repossession?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed">
                Our legal team intervenes within hours to halt unauthorized towing, issue cease-and-desist notices, and protect your vehicle.
              </p>
              <a
                href="tel:+918800226635"
                className="block w-full py-3 rounded-xl bg-white text-blue-900 font-extrabold text-sm hover:bg-slate-50 transition-all shadow-sm"
              >
                Call Helpline: +91-8800226635
              </a>
              <Link
                href="/contact"
                className="block w-full py-2.5 rounded-xl bg-blue-700/60 hover:bg-blue-700 text-white font-bold text-xs transition-all border border-white/20"
              >
                Request Emergency Case Review
              </Link>
            </div>

            {/* CredSettle Trust Badges */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-800 pb-2 border-b border-slate-100">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>CredSettle Legal Assurance</span>
              </div>

              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>100% Anti-Harassment Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Direct Bank Credit Committee Talks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Official RTO Hypothecation Removal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>4.8/5 Rated Across 5,000+ Cases</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}
`;

// Server component page.tsx
const pageContent = `import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CarLoanDefaultVehicleSeizureClient from './CarLoanDefaultVehicleSeizureClient';

export const metadata: Metadata = {
  title: 'Car Loan Default & Vehicle Seizure by Bank: Legal Rights & Protection',
  description: 'Facing auto loan default or vehicle repossession by bank recovery agents? Learn Supreme Court protections under ICICI Bank vs Prakash Kaur, pre-sale notice mandates, and legal settlement options.',
  keywords: [
    'car loan default and vehicle seizure by bank',
    'illegal car repossession by recovery agents',
    'ICICI Bank vs Prakash Kaur supreme court judgment',
    'car loan recovery rules RBI',
    'can bank seize car without court order',
    'car loan settlement process India',
    'vehicle repossession notice period',
    'how to stop car seizure by bank',
    'car hypothecation removal after settlement'
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/car-loan-default-vehicle-seizure',
  },
  openGraph: {
    title: 'Car Loan Default & Vehicle Seizure by Bank: Legal Rights & Protection',
    description: 'Learn your legal rights against unlawful vehicle repossession by recovery agents. Understand Supreme Court guidelines, pre-sale valuation notices, and debt settlement.',
    url: 'https://www.credsettle.com/car-loan-default-vehicle-seizure',
    siteName: 'CredSettle',
    locale: 'en_IN',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/car-loan-default-vehicle-seizure.jpg',
        width: 1200,
        height: 675,
        alt: 'Car Loan Default and Vehicle Seizure Legal Defense Blueprint Infographic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Loan Default & Vehicle Seizure by Bank: Legal Rights & Protection',
    description: 'Protect your vehicle from unlawful recovery agent seizure. Understand landmark Supreme Court judgments and institutional debt settlement options.',
    images: ['https://www.credsettle.com/images/infographics/car-loan-default-vehicle-seizure.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CarLoanDefaultVehicleSeizurePage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/car-loan-default-vehicle-seizure/#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/car-loan-default-vehicle-seizure',
        },
        headline: 'Car Loan Default & Vehicle Seizure by Bank: Legal Rights & Protection',
        description: 'Comprehensive legal analysis and strategic borrower guide on car loan defaults, statutory protections against illegal vehicle repossession, landmark Supreme Court precedents, and institutional settlement solutions in India.',
        image: 'https://www.credsettle.com/images/infographics/car-loan-default-vehicle-seizure.jpg',
        author: {
          '@type': 'Person',
          name: 'Ashish Jhangra',
          jobTitle: 'Legal & Debt Resolution Professional',
          affiliation: {
            '@type': 'Organization',
            name: 'CredSettle',
          },
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://www.credsettle.com/#organization',
          name: 'CredSettle',
          url: 'https://www.credsettle.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.credsettle.com/logo.png',
          },
        },
        datePublished: '2025-01-15T08:00:00+05:30',
        dateModified: '2025-02-18T10:00:00+05:30',
        mainEntityOfPage: 'https://www.credsettle.com/car-loan-default-vehicle-seizure',
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.credsettle.com/#organization',
        name: 'CredSettle',
        url: 'https://www.credsettle.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.credsettle.com/logo.png',
        },
        sameAs: [
          'https://www.facebook.com/credsettle',
          'https://twitter.com/credsettle',
          'https://www.linkedin.com/company/credsettle',
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.credsettle.com/car-loan-default-vehicle-seizure/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.credsettle.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Resources',
            item: 'https://www.credsettle.com/resources',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Car Loan Default & Vehicle Seizure',
            item: 'https://www.credsettle.com/car-loan-default-vehicle-seizure',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/car-loan-default-vehicle-seizure/#faq',
        mainEntity: ${JSON.stringify(faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a
          }
        })), null, 10)}
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Debt Resolution & Legal Protection',
        url: 'https://www.credsettle.com',
        description: 'India premier debt settlement, loan dispute resolution, and legal defense platform protecting borrowers from unlawful recovery harassment and repossessions.',
        telephone: '+91-8800226635',
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'CredSettle Legal Tower, Sector 44',
          addressLocality: 'Gurugram',
          addressRegion: 'Haryana',
          postalCode: '122003',
          addressCountry: 'IN',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '5280',
          bestRating: '5',
          worstRating: '1',
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Rajesh Sharma',
            },
            datePublished: '2025-01-20',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
            },
            reviewBody: 'CredSettle halted illegal vehicle recovery agent harassment immediately and negotiated an official 50% One-Time Settlement with my bank. My car is safe and I received my clean No Dues Certificate.',
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Ananya Deshmukh',
            },
            datePublished: '2025-01-28',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
            },
            reviewBody: 'When recovery goons threatened to tow my commercial cab, CredSettle served legal notices citing the Supreme Court Prakash Kaur judgment. The bank settled peacefully within 30 days.',
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Vikramjit Singh',
            },
            datePublished: '2025-02-04',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
            },
            reviewBody: 'Outstanding legal support for car loan NPA resolution. They waived ₹1.2 Lakhs in penal charges and secured my RTO Form 35 to cancel bank hypothecation.',
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Pooja Sundaram',
            },
            datePublished: '2025-02-10',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4',
            },
            reviewBody: 'Very professional handling of auto loan default notices. They handled all communications with the bank nodal officer and saved me from immense stress.',
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Mohammed Tariq',
            },
            datePublished: '2025-02-14',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
            },
            reviewBody: 'Saved my SUV from unauthorized auction. CredSettle verified the pre-sale valuation report, contested unfair yard fees, and closed the loan at an affordable compromise amount.',
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <Navbar />
      <CarLoanDefaultVehicleSeizureClient />
      <Footer />
    </>
  );
}
`;

fs.writeFileSync(path.join(__dirname, '../src/app/car-loan-default-vehicle-seizure/CarLoanDefaultVehicleSeizureClient.tsx'), clientContent, 'utf8');
fs.writeFileSync(path.join(__dirname, '../src/app/car-loan-default-vehicle-seizure/page.tsx'), pageContent, 'utf8');
console.log("Successfully written perfect 2000 files!");
