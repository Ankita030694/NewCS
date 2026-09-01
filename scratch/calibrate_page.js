const fs = require('fs');
const path = require('path');

// 1. FAQS (10 items, ~34 words each = ~340 words)
const faqs = [
  {
    q: "Can bank recovery agents forcefully seize my car on the road without a court order?",
    a: "No. In ICICI Bank v. Prakash Kaur (2007), the Supreme Court ruled that banks cannot deploy musclemen or recovery contractors to forcefully repossess vehicles. Forceful road intercepts constitute criminal trespass and extortion under Indian law."
  },
  {
    q: "What statutory notices must a bank serve before repossessing a hypothecated vehicle?",
    a: "Under the RBI Fair Practices Code, lenders must issue a formal demand notice giving 15 to 30 days to clear arrears, followed by a pre-repossession intimation, and a pre-sale valuation notice prior to any auction."
  },
  {
    q: "Can I file a police complaint if recovery goons illegally tow away my car?",
    a: "Yes. You can immediately register an FIR under Sections 303 (Theft), 308 (Extortion), 329 (Criminal Trespass), and 351 (Criminal Intimidation) of BNS / Sections 379, 383, 441, and 506 IPC against the agents and the bank."
  },
  {
    q: "What is an inventory sheet and why is it mandatory during vehicle repossession?",
    a: "An inventory sheet is a compulsory document itemizing all personal belongings inside the vehicle, odometer reading, fuel level, and physical body condition. Refusal to provide a signed inventory violates binding RBI loan recovery directives."
  },
  {
    q: "Does the bank have the legal right to sell my car immediately after repossession?",
    a: "No. The lender must serve a formal pre-sale notice granting 15 to 30 days to redeem the vehicle, along with a certified independent surveyor valuation report before scheduling any legitimate public or private auction."
  },
  {
    q: "What happens if car auction proceeds do not cover the outstanding loan balance?",
    a: "Any shortfall becomes an unsecured residual debt. The bank cannot seize other assets without court orders and must pursue civil recovery or negotiate an amicable compromise settlement to close the remaining balance."
  },
  {
    q: "How can I obtain an urgent court injunction to stop illegal vehicle repossession?",
    a: "You can file a petition under Section 9 of the Arbitration and Conciliation Act or Order 39 CPC before the District Court seeking an interim status-quo injunction restraining the lender from taking coercive physical possession."
  },
  {
    q: "Can I negotiate a One-Time Settlement (OTS) for a defaulted auto loan?",
    a: "Yes. Borrowers with genuine hardship can negotiate an OTS with the bank credit committee, securing 40% to 55% waivers on accumulated penal interest and charges, followed by an unconditional No Dues Certificate and RTO clearance."
  },
  {
    q: "How does auto loan default and vehicle repossession affect my CIBIL score?",
    a: "Repossession causes an immediate 80 to 140 point score drop. However, settling the account through an OTS halts ongoing negative DPD reporting, enabling score recovery above 750 within 12 to 24 months through disciplined credit rebuilding."
  },
  {
    q: "What should I do if recovery agents show up at my home demanding car keys?",
    a: "Demand official bank identification, agent DRS registration, and written authorization. Refuse handover without statutory notice, record the encounter, contact emergency police (112), and notify CredSettle for immediate legal intervention and defense."
  }
];

// Let's create the client component content with calibrated sections
const clientComponentCode = `'use client';

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
  FileWarning
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

  const faqs = [
    {
      q: "Can bank recovery agents forcefully seize my car on the road without a court order?",
      a: "No. In ICICI Bank v. Prakash Kaur (2007), the Supreme Court ruled that banks cannot deploy musclemen or recovery contractors to forcefully repossess vehicles. Forceful road intercepts constitute criminal trespass and extortion under Indian law."
    },
    {
      q: "What statutory notices must a bank serve before repossessing a hypothecated vehicle?",
      a: "Under the RBI Fair Practices Code, lenders must issue a formal demand notice giving 15 to 30 days to clear arrears, followed by a pre-repossession intimation, and a pre-sale valuation notice prior to any auction."
    },
    {
      q: "Can I file a police complaint if recovery goons illegally tow away my car?",
      a: "Yes. You can immediately register an FIR under Sections 303 (Theft), 308 (Extortion), 329 (Criminal Trespass), and 351 (Criminal Intimidation) of BNS / Sections 379, 383, 441, and 506 IPC against the agents and the bank."
    },
    {
      q: "What is an inventory sheet and why is it mandatory during vehicle repossession?",
      a: "An inventory sheet is a compulsory document itemizing all personal belongings inside the vehicle, odometer reading, fuel level, and physical body condition. Refusal to provide a signed inventory violates binding RBI loan recovery directives."
    },
    {
      q: "Does the bank have the legal right to sell my car immediately after repossession?",
      a: "No. The lender must serve a formal pre-sale notice granting 15 to 30 days to redeem the vehicle, along with a certified independent surveyor valuation report before scheduling any legitimate public or private auction."
    },
    {
      q: "What happens if car auction proceeds do not cover the outstanding loan balance?",
      a: "Any shortfall becomes an unsecured residual debt. The bank cannot seize other assets without court orders and must pursue civil recovery or negotiate an amicable compromise settlement to close the remaining balance."
    },
    {
      q: "How can I obtain an urgent court injunction to stop illegal vehicle repossession?",
      a: "You can file a petition under Section 9 of the Arbitration and Conciliation Act or Order 39 CPC before the District Court seeking an interim status-quo injunction restraining the lender from taking coercive physical possession."
    },
    {
      q: "Can I negotiate a One-Time Settlement (OTS) for a defaulted auto loan?",
      a: "Yes. Borrowers with genuine hardship can negotiate an OTS with the bank credit committee, securing 40% to 55% waivers on accumulated penal interest and charges, followed by an unconditional No Dues Certificate and RTO clearance."
    },
    {
      q: "How does auto loan default and vehicle repossession affect my CIBIL score?",
      a: "Repossession causes an immediate 80 to 140 point score drop. However, settling the account through an OTS halts ongoing negative DPD reporting, enabling score recovery above 750 within 12 to 24 months through disciplined credit rebuilding."
    },
    {
      q: "What should I do if recovery agents show up at my home demanding car keys?",
      a: "Demand official bank identification, agent DRS registration, and written authorization. Refuse handover without statutory notice, record the encounter, contact emergency police (112), and notify CredSettle for immediate legal intervention and defense."
    }
  ];

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
            <span>Supreme Court Mandated Auto Loan Repossession Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Car Loan Default &amp; Vehicle Seizure by Bank: Legal Rights &amp; Protection
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Facing auto loan default and intimidating repossession threats from recovery musclemen or towing agencies? Learn landmark Supreme Court protections under ICICI Bank vs Prakash Kaur, statutory pre-sale notice mandates, and institutional One-Time Settlement solutions.
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

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Supreme Court Anti-Musclemen Ban:</strong> In <em>ICICI Bank v. Prakash Kaur (2007)</em>, the Supreme Court strictly banned deploying recovery agents or musclemen to forcefully seize vehicles without due legal process.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Hypothecation Is Not Instant Ownership:</strong> Bank hypothecation under Section 51 of the Motor Vehicles Act, 1988 creates a security charge, but borrower registered ownership remains intact until formal legal disposal.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Mandatory Pre-Repossession Notice:</strong> Lenders must serve a formal 15 to 30 day demand cure notice under the RBI Fair Practices Code before initiating physical repossession.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Compulsory Inventory Sheet:</strong> Authorized recovery officers must provide a signed inventory sheet recording all personal belongings, odometer reading, fuel level, and vehicle physical condition.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Statutory Pre-Sale Notice:</strong> Banks cannot conduct private yard auctions without serving a 15 to 30 day pre-sale notice with an independent certified valuation report.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Criminal Penalties for Unlawful Towing:</strong> Snatching car keys or highway intercept towing constitutes criminal trespass (Section 329 BNS / 441 IPC) and extortion (Section 308 BNS / 383 IPC).
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Civil Court Injunction Protection:</strong> Borrowers can obtain an urgent interim status-quo injunction under Section 9 of the Arbitration Act or Order 39 CPC to prevent vehicle seizure.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Institutional OTS Debt Resolution:</strong> A structured One-Time Settlement (OTS) waives 40% to 55% of penal interest and yard costs, yielding an unconditional No Dues Certificate.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="debt-economics-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Foundations &amp; Banking Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics &amp; NPA Dynamics: The Realities of Auto Loan Defaults
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Auto loans in India operate under hypothecation agreements governed by the Indian Contract Act, 1872 and registered under Section 51 of the Motor Vehicles Act, 1988. While the financier maintains a charge on the asset, the borrower remains the registered owner. In commercial reality, vehicles are rapidly depreciating assets whose market value declines sharply each quarter.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When loan installments remain unpaid, the account progresses through RBI Special Mention Account stages: SMA-0 (1 to 30 days overdue), SMA-1 (31 to 60 days), and SMA-2 (61 to 90 days). Once non-payment breaches 90 days past due (DPD), the bank classifies the loan as a Non-Performing Asset (NPA).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Basel III guidelines, NPA classification forces banks to allocate 15% to 100% Tier-1 capital provisioning against the defaulted asset. Concurrently, seized vehicles parked in recovery yards suffer severe mechanical degradation and battery failure. Because physical repossession and yard storage entail heavy administrative expenses, banks have strong commercial incentives to negotiate One-Time Settlements (OTS) to recover core capital swiftly.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics &amp; Settlement Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown &amp; Settlement Math: Deconstructing Penal Inflation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an auto loan enters default, bank claims escalate rapidly due to compounding overdue interest, NACH bounce penalties of ₹500 to ₹750 per instance, legal fees, and repossession yard charges of ₹300 to ₹700 daily. A forensic loan audit separates genuine principal liabilities from ancillary penalties. During One-Time Settlement (OTS) negotiations, unbundled penal charges and inflated towing fees are systematically waived.
              </p>

              {/* REPRESENTATIVE SETTLEMENT MATH CARD */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-[#1886ff]" />
                    <span className="font-extrabold text-slate-900 text-sm md:text-base">
                      Representative 180-Day NPA Auto Loan Settlement Model
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    Typical 40% to 55% Total Waiver
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-slate-500">
                      Bank Gross Claim Breakdown
                    </span>
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-600">Unpaid Principal:</span>
                      <span className="font-bold text-slate-900">₹5,80,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-600">Accrued Interest:</span>
                      <span className="font-semibold text-slate-800">₹94,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-600">Penalties &amp; Bounces:</span>
                      <span className="font-semibold text-red-600">₹72,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-600">Yard Parking Fees:</span>
                      <span className="font-semibold text-red-600">₹48,000</span>
                    </div>
                    <div className="flex justify-between pt-2 text-slate-900 font-extrabold text-sm">
                      <span>Total Claim:</span>
                      <span className="text-red-700">₹7,94,000</span>
                    </div>
                  </div>

                  <div className="space-y-2 bg-blue-50/60 p-4 rounded-xl border border-blue-100">
                    <span className="font-bold text-[#1886ff] block text-xs uppercase tracking-wider">
                      CredSettle Structured Outcome
                    </span>
                    <div className="flex justify-between py-1 border-b border-blue-200/50">
                      <span className="text-slate-600">Penal Fees Waiver:</span>
                      <span className="font-bold text-emerald-700">100% (₹72,000)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-blue-200/50">
                      <span className="text-slate-600">Yard Fees Waiver:</span>
                      <span className="font-bold text-emerald-700">100% (₹48,000)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-blue-200/50">
                      <span className="text-slate-600">Interest Discount:</span>
                      <span className="font-semibold text-emerald-700">70% (₹65,800)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-blue-200/50">
                      <span className="text-slate-600">Principal Relief:</span>
                      <span className="font-semibold text-emerald-700">15% (₹87,000)</span>
                    </div>
                    <div className="flex justify-between pt-2 text-slate-900 font-extrabold text-sm">
                      <span>Final Agreed OTS:</span>
                      <span className="text-[#1886ff]">₹3,85,000 (51.5% Savings)</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  Upon remittance of the agreed ₹3,85,000 settlement amount through official RTGS channels, the lender issues a formal Settlement Sanction Letter, an unconditional No Dues Certificate, and RTO Form 35 to cancel the hypothecation endorsement.
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix Table */}
            <section id="comparison-matrix-grid" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Strategic Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparative Resolution Matrix: Evaluating Borrower Options
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When faced with auto loan delinquency, borrowers must evaluate available resolution routes. While inaction leads to distress yard auctions, structured negotiations protect personal assets. This comparative grid details the core trade-offs across five avenues:
              </p>

              {/* 4-SIDED BORDERED TABLE WITH VERTICAL AND HORIZONTAL DIVIDERS */}
              <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse border border-slate-300">
                  <thead className="bg-slate-100 text-slate-800">
                    <tr>
                      <th className="p-3 font-bold border border-slate-300">Resolution Route</th>
                      <th className="p-3 font-bold border border-slate-300">Waiver Scope</th>
                      <th className="p-3 font-bold border border-slate-300">Vehicle Possession</th>
                      <th className="p-3 font-bold border border-slate-300">Timeline</th>
                      <th className="p-3 font-bold border border-slate-300">NDC &amp; Form 35</th>
                      <th className="p-3 font-bold border border-slate-300 text-[#1886ff]">CIBIL Impact</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold border border-slate-300 text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="p-3 border border-slate-300 text-emerald-700 font-bold">40% to 55% Waiver</td>
                      <td className="p-3 border border-slate-300 font-semibold text-emerald-800">Retained / Redeemed</td>
                      <td className="p-3 border border-slate-300">30 to 45 Days</td>
                      <td className="p-3 border border-slate-300 text-emerald-700 font-bold">Complete NDC</td>
                      <td className="p-3 border border-slate-300 text-slate-800">Settled (Rebuildable)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold border border-slate-300 text-slate-900">Loan Restructuring</td>
                      <td className="p-3 border border-slate-300 text-slate-600">Zero (Tenure Extended)</td>
                      <td className="p-3 border border-slate-300 text-slate-700">Retained with Interest</td>
                      <td className="p-3 border border-slate-300">60 to 90 Days</td>
                      <td className="p-3 border border-slate-300 text-slate-700">Pending Future EMIs</td>
                      <td className="p-3 border border-slate-300 text-amber-700">Restructured Tag</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold border border-slate-300 text-slate-900">Court Litigation</td>
                      <td className="p-3 border border-slate-300 text-red-600">None (High Legal Cost)</td>
                      <td className="p-3 border border-slate-300 text-amber-700">Contested Possession</td>
                      <td className="p-3 border border-slate-300 text-red-600">2 to 5 Years</td>
                      <td className="p-3 border border-slate-300 text-slate-600">Subject to Decree</td>
                      <td className="p-3 border border-slate-300 text-red-700">Active Suit Filed</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold border border-slate-300 text-slate-900">National Lok Adalat</td>
                      <td className="p-3 border border-slate-300 text-emerald-700 font-semibold">25% to 40% Waiver</td>
                      <td className="p-3 border border-slate-300 text-slate-700">Mutual Settlement</td>
                      <td className="p-3 border border-slate-300">Quarterly Session</td>
                      <td className="p-3 border border-slate-300 text-emerald-700 font-bold">Binding Civil Award</td>
                      <td className="p-3 border border-slate-300 text-slate-800">Settled in Lok Adalat</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold border border-slate-300 text-slate-900">Inaction / Musclemen</td>
                      <td className="p-3 border border-slate-300 text-red-700 font-extrabold">Distress Yard Sale</td>
                      <td className="p-3 border border-slate-300 text-red-700 font-bold">Illegally Seized</td>
                      <td className="p-3 border border-slate-300 text-red-600">Continuous Stress</td>
                      <td className="p-3 border border-slate-300 text-red-700">Residual Deficit</td>
                      <td className="p-3 border border-slate-300 text-red-800 font-bold">Repossessed Tag</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Technical CIBIL Algorithm: Scoring Math &amp; Credit Rebuilding
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit Information Bureau India Limited (CIBIL) and partner bureaus calculate credit scores ranging from 300 to 900 across five primary factors: Repayment History (35%), Credit Utilization (30%), Credit Age (15%), Credit Mix (10%), and New Inquiries (10%).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Auto loan defaults trigger cascading 30, 60, and 90+ DPD notations, causing an acute score drop of 80 to 140 points. If the bank records an unauthorized repossession, the severe negative remark restricts access to fresh institutional credit.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Executing an official One-Time Settlement transitions the bureau status to &quot;Settled&quot; with zero outstanding balance, halting ongoing monthly negative reporting. By obtaining an unconditional No Dues Certificate, opening a secured credit builder card backed by a fixed deposit, and maintaining disciplined repayments, borrowers consistently restore their CIBIL score above 750 within 12 to 24 months. Erroneous bureau entries can be rectified under Section 21 of the Credit Information Companies (Regulation) Act (CICRA), 2005.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-roadmap" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: 6-Stage Vehicle Repossession Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Explore our visual roadmap outlining statutory borrower protections against unlawful vehicle repossession, mandatory pre-sale valuation notices, and institutional compromise settlement workflows in India:
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
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Blueprint • Supreme Court Precedents &amp; RBI Fair Practices</span>
                  <a
                    href="/images/infographics/car-loan-default-vehicle-seizure.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>View High-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Layers className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP: 6-Stage Vehicle Protection &amp; Settlement Process
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CredSettle implements a structured, multi-stage Standard Operating Procedure to protect borrowers against coercive repossession tactics while negotiating an authoritative compromise settlement directly with institutional decision-makers:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 1
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 1 - 5</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Forensic Loan Audit &amp; Repossession Legality Review
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Legal audit of loan hypothecation contracts, payment histories, and bank notices to identify unauthorized penal charges, unlawful towing fees, and verify whether mandatory RBI pre-repossession intimations were duly served before initiating coercive collection steps.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 2
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 6 - 12</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Hardship Dossier &amp; Asset Valuation Assessment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Compilation of a verifiable distress dossier documenting medical emergencies, job losses, or revenue drops, accompanied by an independent certified surveyor valuation report establishing realistic distress market value for vehicle settlement discussions.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 3
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 13 - 20</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Credit Committee &amp; Nodal Representation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Formal representation before the bank Senior Credit Committee and Principal Nodal Officer (PNO), demonstrating genuine settlement intent while serving legal notice regarding strict statutory prohibitions against third-party recovery musclemen under Supreme Court guidelines.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 4
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 21 - 32</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Bilateral Negotiations &amp; Waiver Structuring
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Seasoned negotiators engage the bank special recovery desk to secure comprehensive waivers on penal interest, late fees, and yard parking expenses, locking in a customized One-Time Settlement figure matched to borrower affordability.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 5
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 33 - 38</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Settlement Sanction Letter Vetting &amp; Verification
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Comprehensive legal vetting of the official bank Settlement Sanction Letter to confirm exact loan account details, unambiguous compromise settlement terms, explicit waiver calculations, and binding commitments regarding RTO hypothecation removal.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 6
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 39 - 45</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Direct Remittance, Vehicle Release &amp; Clean NDC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Direct settlement payment to the bank dedicated loan account via official RTGS or NEFT, followed by immediate issuance of the unconditional No Dues Certificate, RTO Form 35, and credit bureau status updating.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Defense &amp; Procedural Safeguards</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense: Analyzing Legal Provisions &amp; Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When auto loans enter default, lenders frequently serve various statutory notices to exert commercial pressure. Understanding the legal scope of each statutory provision enables borrowers to mount an effective, legitimate defense without succumbing to panic:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <FileWarning className="w-4 h-4" />
                    <span>Section 25 PSSA (Electronic Mandate Bounce)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Section 25 of the Payment and Settlement Systems Act, 2007 penalizes bounced NACH auto-debits. Lenders must issue a statutory notice within 30 days of the return memo. Establishing absence of fraudulent intent, genuine financial hardship, or active settlement talks serves as an effective defense.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>Section 138 NI Act (Cheque Dishonor Proceedings)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Lenders frequently present undated security cheques upon default. In <em>Dashrath Rupsingh Rathod</em> and <em>Indus Airways</em>, the Supreme Court established that blank security cheques given at loan inception cannot be presented for inflated amounts without clear quantified reconciliation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Arbitration &amp; Section 9 Injunction Rights</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under <em>TRF Ltd.</em> and <em>Perkins Eastman Architects</em>, the Supreme Court declared unilateral arbitrator appointments by lenders legally void. Borrowers can approach District Commercial Courts under Section 9 of the Arbitration Act for interim status-quo injunctions restraining vehicle repossession.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>DRT Section 19 &amp; Fair Practices Code</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    For loan exposures exceeding ₹20 Lakhs, lenders can file Original Applications under Section 19 of the RDB Act, 1993 before the Debt Recovery Tribunal. Concurrently, lenders must comply strictly with the RBI Fair Practices Code prohibiting harassment and intimidation.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-redressal-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Escalation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Grievance Redressal Matrix: Enforcing Institutional Accountability
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If bank recovery contractors violate RBI guidelines through abusive phone calls, unsolicited workplace visits, or unlawful repossession threats, borrowers have access to a structured, 3-tier regulatory escalation mechanism:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] uppercase">Tier 1</span>
                    <span className="text-xs text-slate-500 font-semibold">7 - 10 Days</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Grievance Redressal Officer (GRO)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a formal written complaint with threat logs to the bank grievance cell demanding immediate cessation of rogue agent visits.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] uppercase">Tier 2</span>
                    <span className="text-xs text-slate-500 font-semibold">14 - 21 Days</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Principal Nodal Officer (PNO)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalate unresolved grievances to the apex Principal Nodal Officer, citing statutory non-compliance under RBI recovery directions.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 uppercase">Tier 3</span>
                    <span className="text-xs text-slate-500 font-semibold">30 Days</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">RBI Integrated Ombudsman</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lodge a formal complaint on the RBI portal (cms.rbi.org.in) under the Integrated Ombudsman Scheme, 2021 for dispute resolution and compensation.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Chronological Timeline Table: The 6-Month Procedural Lifecycle
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Auto loan dispute resolution follows a predictable procedural sequence from initial missed payment to final settlement execution. Understanding these critical milestones helps borrowers take proactive legal measures:
              </p>

              {/* 4-SIDED BORDERED TABLE */}
              <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse border border-slate-300">
                  <thead className="bg-slate-100 text-slate-800">
                    <tr>
                      <th className="p-3 font-bold border border-slate-300">Timeline Phase</th>
                      <th className="p-3 font-bold border border-slate-300">Account Classification</th>
                      <th className="p-3 font-bold border border-slate-300">Bank Recovery Strategy</th>
                      <th className="p-3 font-bold border border-slate-300 text-[#1886ff]">Recommended Legal Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold border border-slate-300 text-slate-900">Days 1 - 30</td>
                      <td className="p-3 border border-slate-300 font-semibold text-slate-800">SMA-0 (Initial Default)</td>
                      <td className="p-3 border border-slate-300">Automated SMS alerts, soft calls</td>
                      <td className="p-3 border border-slate-300 text-slate-800">Review finances, evaluate restructuring</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold border border-slate-300 text-slate-900">Days 31 - 90</td>
                      <td className="p-3 border border-slate-300 font-semibold text-amber-700">SMA-1 &amp; SMA-2</td>
                      <td className="p-3 border border-slate-300">Agency allocation, threat calls</td>
                      <td className="p-3 border border-slate-300 text-slate-800">Serve Cease &amp; Desist, assert rights</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold border border-slate-300 text-slate-900">Days 91 - 120</td>
                      <td className="p-3 border border-slate-300 font-bold text-red-600">NPA Classification</td>
                      <td className="p-3 border border-slate-300">Demand &amp; arbitration notices</td>
                      <td className="p-3 border border-slate-300 text-slate-800">Engage CredSettle for Credit Committee OTS</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold border border-slate-300 text-slate-900">Days 121 - 150</td>
                      <td className="p-3 border border-slate-300 font-bold text-red-700">NPA Provisioning Window</td>
                      <td className="p-3 border border-slate-300">Pre-sale notices, legal filings</td>
                      <td className="p-3 border border-slate-300 text-[#1886ff] font-semibold">Obtain court stay or finalize OTS waiver</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold border border-slate-300 text-slate-900">Month 5 - 6</td>
                      <td className="p-3 border border-slate-300 font-bold text-emerald-700">Settled Account Closure</td>
                      <td className="p-3 border border-slate-300">OTS sanction letter issued</td>
                      <td className="p-3 border border-slate-300 text-emerald-700 font-bold">Remit OTS, secure NDC &amp; RTO Form 35</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Case Studies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Real-World Scenarios: Complex Auto Loan Disputes
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Auto loan defaults rarely occur in isolation. CredSettle regularly resolves highly intricate, real-world dispute scenarios across diverse borrower categories in India:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Car className="w-4 h-4 text-[#1886ff]" />
                    Commercial Fleet &amp; Taxi Defaults
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Fleet operators with multiple commercial vehicles hypothecated across various NBFCs receive consolidated legal defense against unlawful highway interceptions, enabling phased multi-vehicle compromise settlements.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Corporate Executive Luxury Car Loans
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Salaried professionals with premium auto loans facing unexpected layoffs receive strategic negotiation support, securing extensive penal waivers to facilitate dignified vehicle redemption or structured voluntary surrender.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    Total Loss Insurance Claim Disputes
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When accident-damaged vehicles face insurance claim delays while banks demand continuing EMIs, CredSettle coordinates between insurers and lenders for direct claim settlement and residual shortfall waiver.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    ARC Portfolio Debt Assignments
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When delinquent auto loan portfolios are sold to Asset Reconstruction Companies under SARFAESI Section 5, we enforce strict compliance with RBI recovery codes and judicial anti-musclemen precedents.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
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

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors text-sm sm:text-base"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={\`w-5 h-5 text-[#1886ff] flex-shrink-0 transition-transform duration-200 \${
                            isOpen ? 'transform rotate-180' : ''
                          }\`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Citations &amp; Outbound Authority Grid</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Statutory Citations &amp; Authoritative Sources
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                CredSettle legal commentary and defense strategies are strictly rooted in Indian statutes, binding judicial precedents, and Reserve Bank of India regulatory frameworks:
              </p>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Key Judicial Precedents &amp; Statutory Codes
                </h3>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside leading-relaxed">
                  <li><strong>Supreme Court:</strong> <em>ICICI Bank Ltd. v. Prakash Kaur (2007) 2 SCC 711</em> (Ban on musclemen).</li>
                  <li><strong>Motor Vehicles Act, 1988:</strong> Section 51 (Special provisions regarding vehicle hypothecation).</li>
                  <li><strong>Reserve Bank of India:</strong> Master Direction on Outsourcing of Financial Services &amp; Recovery.</li>
                  <li><strong>Bharatiya Nyaya Sanhita, 2023:</strong> Sections 303 (Theft), 308 (Extortion), 329 (Trespass), 351 (Intimidation).</li>
                  <li><strong>CICRA, 2005:</strong> Section 21 (Dispute resolution and rectification of credit information).</li>
                </ul>
              </div>

              {/* 6 Outbound Authority Badges */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Official Regulatory Portals
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200 transition-colors"
                  >
                    <span>Reserve Bank of India (rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200 transition-colors"
                  >
                    <span>RBI Integrated Ombudsman (cms.rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200 transition-colors"
                  >
                    <span>TransUnion CIBIL India (cibil.com)</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200 transition-colors"
                  >
                    <span>India Code Legislative Repository (indiacode.nic.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200 transition-colors"
                  >
                    <span>National Legal Services Authority (nalsa.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200 transition-colors"
                  >
                    <span>National Cyber Crime Reporting Portal (cybercrime.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              </div>

              {/* 10 Internal CredSettle Topic Badges */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Related Debt Resolution Guides
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/can-recovery-agents-seize-property"
                    className="px-3 py-1.5 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
                  >
                    Can Recovery Agents Seize Property?
                  </Link>
                  <Link
                    href="/bank-recovery-agent-harassment-rules-in-hindi"
                    className="px-3 py-1.5 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
                  >
                    Recovery Agent Harassment Rules
                  </Link>
                  <Link
                    href="/arbitration-notice-personal-loan-default"
                    className="px-3 py-1.5 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
                  >
                    Arbitration Notice Defense
                  </Link>
                  <Link
                    href="/ecs-nach-bounce-legal-notice-section-25"
                    className="px-3 py-1.5 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
                  >
                    Section 25 NACH Bounce Legal Notice
                  </Link>
                  <Link
                    href="/section-138-cheque-bounce-personal-loan"
                    className="px-3 py-1.5 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
                  >
                    Section 138 Cheque Bounce Defense
                  </Link>
                  <Link
                    href="/police-complaint-against-bank-recovery-agent"
                    className="px-3 py-1.5 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
                  >
                    Police Complaint Against Recovery Agents
                  </Link>
                  <Link
                    href="/lok-adalat-personal-loan-settlement"
                    className="px-3 py-1.5 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
                  >
                    Lok Adalat Loan Settlement
                  </Link>
                  <Link
                    href="/get-noc-after-loan-settlement"
                    className="px-3 py-1.5 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
                  >
                    Get NOC After Loan Settlement
                  </Link>
                  <Link
                    href="/improve-cibil-after-loan-settlement"
                    className="px-3 py-1.5 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
                  >
                    Improve CIBIL After Settlement
                  </Link>
                  <Link
                    href="/full-and-final-settlement-meaning"
                    className="px-3 py-1.5 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
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

fs.writeFileSync(path.join(__dirname, '../src/app/car-loan-default-vehicle-seizure/CarLoanDefaultVehicleSeizureClient.tsx'), clientComponentCode, 'utf8');
console.log("Successfully wrote CarLoanDefaultVehicleSeizureClient.tsx");
