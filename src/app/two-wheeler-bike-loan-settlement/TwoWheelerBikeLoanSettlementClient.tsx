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
  FileText,
  HelpCircle,
  TrendingUp,
  Award,
  BookOpen,
  DollarSign,
  Check,
  Phone,
  AlertCircle,
  Bookmark,
  ArrowRight,
  Clock,
  Sparkles,
  Gavel,
  ShieldAlert,
  Layers,
  FileWarning,
  Briefcase,
  Bike,
  Building2,
  UserCheck
} from 'lucide-react';

export default function TwoWheelerBikeLoanSettlementClient() {
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
    { id: 'financial-settlement-math', label: '2. Bike Settlement Math & Penal Inflation' },
    { id: 'comparison-matrix-grid', label: '3. Two-Wheeler Resolution Matrix' },
    { id: 'cibil-algorithm-impact', label: '4. Two-Wheeler CIBIL Scoring Math' },
    { id: 'infographic-roadmap', label: 'Visual 6-Stage Defense Blueprint' },
    { id: 'step-by-step-sop', label: '5. 6-Stage Legal Resolution SOP' },
    { id: 'statutory-notice-defense', label: '6. Statutory Notice Defense Grid' },
    { id: 'escalation-redressal-matrix', label: '7. Two-Wheeler Grievance Redressal' },
    { id: 'chronological-milestones', label: '8. Procedural Timeline Table' },
    { id: 'specialized-scenarios', label: '9. Specialized Real-World Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authority Grid' }
  ];

  const faqs = [
    {
      q: "Can recovery agents forcefully snatch my motorcycle on the street?",
      a: "No. In ICICI Bank v. Prakash Kaur, the Supreme Court held lenders cannot deploy musclemen to seize vehicles on roads. Forceful street seizures constitute criminal trespass and extortion."
    },
    {
      q: "What mandatory notices must a lender serve before bike repossession?",
      a: "Financiers must serve a formal 15 to 30 day cure notice detailing defaults, followed by pre-repossession intimation and a pre-sale notice with certified surveyor valuation."
    },
    {
      q: "Can I settle a defaulted bike loan through a One-Time Settlement?",
      a: "Yes. Borrowers with genuine hardship can negotiate an institutional OTS, securing 40% to 55% waivers on accumulated penal interest and charges against a compromise payment."
    },
    {
      q: "What happens to the bank hypothecation on my bike RC after settlement?",
      a: "Upon settlement remittance, the lender issues an unconditional No Dues Certificate and signed RTO Form 35 to remove the hypothecation lien on your Registration Certificate."
    },
    {
      q: "How does a two-wheeler loan settlement impact my CIBIL credit score?",
      a: "The account updates to 'Settled' with zero balance. While an initial dip occurs, stopping monthly overdue reporting enables credit score recovery above 750 within 12 to 18 months."
    },
    {
      q: "Can a bank file an FIR or arrest me for missing bike EMIs?",
      a: "No. Defaulting on a two-wheeler loan is strictly a civil breach of contract. Lenders cannot file criminal FIRs or threaten arrest for non-fraudulent hardship defaults."
    },
    {
      q: "What should delivery riders do if recovery agents threaten their bike?",
      a: "Demand agent ID, bank authorization, and DRA card. Refuse street handover, record video, dial police helpline 112, and issue a formal cease-and-desist notice via CredSettle."
    },
    {
      q: "What is the difference between settling a bike loan and surrendering the vehicle?",
      a: "Surrendering results in a distress auction with lingering shortfall debt. An OTS extinguishes the entire liability unconditionally, preventing future recovery litigation."
    },
    {
      q: "Can I resolve my two-wheeler loan default through Lok Adalat?",
      a: "Yes. Lok Adalats offer statutory conciliation platforms where lenders frequently accept 30% to 50% waivers. The resulting decree is legally binding with zero court fees."
    },
    {
      q: "How do I stop recovery agents from visiting my home at odd hours?",
      a: "The RBI Fair Practices Code strictly bans visits before 8:00 AM or after 7:00 PM and prohibits harassment. Borrowers can escalate to the Nodal Officer and RBI Ombudsman."
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
            <span>Supreme Court Two-Wheeler Repossession Defense &amp; Debt Settlement</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Two Wheeler &amp; Bike Loan Settlement: Stop Harassment &amp; Seizure
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Facing motorcycle loan default, aggressive field agent visits, or illegal street repossession? Learn your statutory rights under Supreme Court rulings, RBI recovery guidelines, and how to negotiate a 40% to 55% One-Time Settlement with an authentic No Dues Certificate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your Bike: Speak to a Debt Resolution Professional</span>
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
                  <span>Two-Wheeler Debt Protection</span>
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
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 shadow-xs space-y-3 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: TWO-WHEELER LOAN DEFAULT &amp; BORROWER PROTECTIONS</span>
              </div>

              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Supreme Court Precedent:</strong> Supreme Court strictly banned musclemen repossession on public roads in <em>ICICI Bank v. Prakash Kaur</em>.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Ownership Rights:</strong> Section 51 Motor Vehicles Act creates a financial charge, but legal ownership stays with the borrower.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Mandatory Cure Notice:</strong> Lenders must serve a 15 to 30 day demand cure notice before initiating recovery action.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Anti-Harassment Shield:</strong> RBI rules prohibit calls before 8:00 AM or after 7:00 PM and ban workplace visits.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Penal Fee Waivers:</strong> Compounding late fees and bounce penalties are completely eliminated during compromise negotiations.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Valuation Safeguards:</strong> Financiers cannot auction vehicles without serving a pre-sale notice and certified valuation.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Livelihood Protection:</strong> Delivery riders and salaried workers can seek urgent legal protection to prevent bike seizure.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Structured OTS Resolution:</strong> An institutional OTS secures 40% to 55% waivers alongside a No Dues Certificate and RTO Form 35.
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
                1. Debt Economics &amp; NPA Dynamics: The Anatomy of Two-Wheeler Loan Default
              </h2>
              
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Two-wheeler loans constitute one of India&apos;s largest retail credit segments, financed by non-banking financial companies (NBFCs) and private banks for salaried commuters and gig delivery riders. These loans operate under hypothecation agreements executed under the Indian Contract Act, 1872 and registered on Registration Certificates under Section 51 of the Motor Vehicles Act, 1988. While the financier maintains a hypothecation charge, legal ownership resides entirely with the borrower. Motorcycles and scooters are rapidly depreciating assets whose real-world resale value deteriorates swiftly every quarter.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When installments default due to genuine hardship, accounts transition through Special Mention Account stages: SMA-0 (1 to 30 days), SMA-1 (31 to 60 days), and SMA-2 (61 to 90 days). Beyond 90 days, the loan becomes a Non-Performing Asset (NPA). Under RBI prudential norms, lenders must set aside heavy capital provisioning against NPAs. Because physical repossession involves steep towing fees, yard storage costs, and distress auction haircuts yielding barely thirty percent of loan value, lenders have powerful commercial incentives to execute One-Time Settlements (OTS) to recover core principal funds.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-settlement-math" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics &amp; Settlement Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Two-Wheeler Settlement Math: Deconstructing Bike Loan Penal Inflation
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a two-wheeler loan enters default, gross claims swell from compounding interest, NACH bounce penalties of ₹450 to ₹900, penal charges, and collection agency fees. A ₹45,000 principal default frequently inflates to ₹85,000 within six months. Forensic auditing isolates legitimate principal from artificial markups, enabling deep waivers during institutional negotiations:
              </p>

              {/* REPRESENTATIVE SETTLEMENT MATH CARD */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 md:p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-2">
                    <Bike className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-extrabold text-slate-900 text-xs sm:text-sm">
                      Representative 180-Day NPA Two-Wheeler Loan Settlement Model
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Typical 40% to 55% Net Savings
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px] block">
                      Lender Gross Claim
                    </span>
                    <div className="flex justify-between py-0.5 border-b border-slate-200/60">
                      <span className="text-slate-600">Unpaid Principal:</span>
                      <span className="font-bold text-slate-900">₹52,000</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-200/60">
                      <span className="text-slate-600">Accrued Interest:</span>
                      <span className="font-semibold text-slate-800">₹11,500</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-200/60">
                      <span className="text-slate-600">Penal Fees:</span>
                      <span className="font-semibold text-red-600">₹12,800</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-200/60">
                      <span className="text-slate-600">Bounce Charges:</span>
                      <span className="font-semibold text-red-600">₹8,700</span>
                    </div>
                    <div className="flex justify-between pt-1 text-slate-900 font-extrabold text-xs">
                      <span>Total Demand:</span>
                      <span className="text-red-700">₹85,000</span>
                    </div>
                  </div>

                  <div className="space-y-1 bg-blue-50/60 p-3 rounded-xl border border-blue-100">
                    <span className="font-bold text-[#1886ff] uppercase tracking-wider text-[10px] block">
                      CredSettle Outcome
                    </span>
                    <div className="flex justify-between py-0.5 border-b border-blue-200/50">
                      <span className="text-slate-600">Penal Fee Waiver:</span>
                      <span className="font-bold text-emerald-700">100% (₹12,800)</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-blue-200/50">
                      <span className="text-slate-600">Bounce Fee Waiver:</span>
                      <span className="font-bold text-emerald-700">100% (₹8,700)</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-blue-200/50">
                      <span className="text-slate-600">Interest Discount:</span>
                      <span className="font-semibold text-emerald-700">70% (₹8,050)</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-blue-200/50">
                      <span className="text-slate-600">Principal Relief:</span>
                      <span className="font-semibold text-emerald-700">25% (₹13,000)</span>
                    </div>
                    <div className="flex justify-between pt-1 text-slate-900 font-extrabold text-xs">
                      <span>Agreed Settlement:</span>
                      <span className="text-[#1886ff]">₹42,450 (50.1% Savings)</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Upon electronic remittance of the agreed ₹42,450 directly to the loan account, the lender issues a Settlement Sanction Letter, No Dues Certificate, and RTO Form 35 to release hypothecation.
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
                3. Two-Wheeler Resolution Matrix: Comparing Bike Settlement vs Surrender
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Evaluating available two-wheeler debt resolution options is vital to avoid distress vehicle loss. This comparative matrix contrasts five primary avenues under Indian banking law:
              </p>

              {/* 4-SIDED BORDERED TABLE WITH VERTICAL AND HORIZONTAL DIVIDERS */}
              <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-xs">
                <table className="w-full text-left text-xs border-collapse border border-slate-300">
                  <thead className="bg-slate-100 text-slate-800">
                    <tr>
                      <th className="p-2.5 font-bold border border-slate-300">Resolution Route</th>
                      <th className="p-2.5 font-bold border border-slate-300">Financial Waiver</th>
                      <th className="p-2.5 font-bold border border-slate-300">Vehicle Possession</th>
                      <th className="p-2.5 font-bold border border-slate-300">Timeline</th>
                      <th className="p-2.5 font-bold border border-slate-300">NDC &amp; Form 35</th>
                      <th className="p-2.5 font-bold border border-slate-300 text-[#1886ff]">CIBIL Impact</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold border border-slate-300 text-slate-900">One-Time Settlement</td>
                      <td className="p-2.5 border border-slate-300 text-emerald-700 font-bold">40% to 55%</td>
                      <td className="p-2.5 border border-slate-300 font-semibold text-emerald-800">Retained Completely</td>
                      <td className="p-2.5 border border-slate-300">25 to 45 Days</td>
                      <td className="p-2.5 border border-slate-300 text-emerald-700 font-bold">Full NDC &amp; Form 35</td>
                      <td className="p-2.5 border border-slate-300 text-slate-800">Settled</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold border border-slate-300 text-slate-900">Restructuring</td>
                      <td className="p-2.5 border border-slate-300 text-slate-600">Zero Waiver</td>
                      <td className="p-2.5 border border-slate-300 text-slate-700">Retained + EMIs</td>
                      <td className="p-2.5 border border-slate-300">45 to 60 Days</td>
                      <td className="p-2.5 border border-slate-300 text-slate-700">Pending Full Term</td>
                      <td className="p-2.5 border border-slate-300 text-amber-700">Restructured</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold border border-slate-300 text-slate-900">Court Litigation</td>
                      <td className="p-2.5 border border-slate-300 text-red-600">None</td>
                      <td className="p-2.5 border border-slate-300 text-amber-700">Contested</td>
                      <td className="p-2.5 border border-slate-300 text-red-600">2 to 4 Years</td>
                      <td className="p-2.5 border border-slate-300 text-slate-600">Pending Decree</td>
                      <td className="p-2.5 border border-slate-300 text-red-700">Suit Filed</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold border border-slate-300 text-slate-900">Lok Adalat</td>
                      <td className="p-2.5 border border-slate-300 text-emerald-700 font-semibold">30% to 50%</td>
                      <td className="p-2.5 border border-slate-300 text-slate-700">Mutual Terms</td>
                      <td className="p-2.5 border border-slate-300">Quarterly</td>
                      <td className="p-2.5 border border-slate-300 text-emerald-700 font-bold">Judicial Award</td>
                      <td className="p-2.5 border border-slate-300 text-slate-800">Settled</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold border border-slate-300 text-slate-900">Inaction / Seizure</td>
                      <td className="p-2.5 border border-slate-300 text-red-700 font-extrabold">Distress Loss</td>
                      <td className="p-2.5 border border-slate-300 text-red-700 font-bold">Vehicle Forfeited</td>
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
                4. Technical CIBIL Algorithm: Two-Wheeler Scoring Math &amp; Credit Restoration
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit bureaus such as TransUnion CIBIL, Experian, Equifax, and CRIF High Mark evaluate scores across five core parameters: Repayment History (35%), Credit Utilization (30%), Credit History Length (15%), Credit Mix (10%), and Recent Credit Inquiries (10%). Because two-wheeler loans represent monthly installment obligations, defaults severely damage the thirty-five percent repayment history weight, causing consecutive 30 to 120+ DPD notations and depressing scores by 70 to 130 points.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Executing an official One-Time Settlement halts ongoing monthly delinquency reporting. Upon receiving settlement remittance, the lender updates bureau records to &quot;Settled&quot; with zero balance. While reflecting a compromise, it terminates negative reporting cycles. Borrowers can then rebuild their score above 750 within twelve to eighteen months using secured credit cards, disciplined low utilization, and timely payments under Section 21 CICRA 2005 rights.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-roadmap" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: 6-Stage Two-Wheeler Protection &amp; Settlement Roadmap
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Review our visual roadmap outlining statutory borrower protections against unlawful vehicle repossession and institutional compromise settlement workflows:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/two-wheeler-bike-loan-settlement.jpg"
                    alt="Two Wheeler and Bike Loan Settlement Legal Defense Blueprint Infographic"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-2.5 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Blueprint • Supreme Court Precedents &amp; RBI Fair Practices</span>
                  <a
                    href="/images/infographics/two-wheeler-bike-loan-settlement.jpg"
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
                5. Step-by-Step SOP: 6-Stage Two-Wheeler Protection &amp; Settlement Workflow
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CredSettle executes a structured Standard Operating Procedure to halt coercive collection tactics and negotiate directly with bank credit committees:
              </p>

              <div className="space-y-2 pt-1">
                {/* Stage 1 */}
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs space-y-1">
                  <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">
                    Stage 1 (Days 1-5): Forensic Loan Audit
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Auditing loan statements to isolate illegal penal fees and verify if mandatory statutory notices were served.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs space-y-1">
                  <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">
                    Stage 2 (Days 6-12): Hardship Dossier
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Compiling verified documentary hardship proof alongside an independent vehicle distress valuation report.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs space-y-1">
                  <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">
                    Stage 3 (Days 13-20): Legal Nodal Notice
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Serving formal legal representations to the bank Nodal Officer and Credit Committee to halt agent visits.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs space-y-1">
                  <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">
                    Stage 4 (Days 21-32): OTS Negotiations
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Negotiating directly with recovery authorities to waive penal charges and secure a 40% to 55% settlement.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs space-y-1">
                  <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">
                    Stage 5 (Days 33-38): Sanction Verification
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Vetting the official Settlement Sanction Letter to ensure binding clauses for hypothecation release.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs space-y-1">
                  <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">
                    Stage 6 (Days 39-45): Remittance &amp; NDC
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Direct payment via RTGS, followed by delivery of the No Dues Certificate, RTO Form 35, and bureau update.
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
                6. Statutory Notice Defense: Analyzing Legal Provisions &amp; Borrower Remedies
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When two-wheeler loan accounts fall into default, lenders and NBFCs issue statutory notices to exert pressure. Understanding these legal provisions enables an effective defense:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs">
                    <FileWarning className="w-3.5 h-3.5" />
                    <span>Section 25 PSSA (NACH Bounce)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Penalizes electronic mandate dishonor. Lenders must issue notice within thirty days. Establishing genuine hardship and settlement intent provides a strong legal defense.
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Section 138 NI Act (Cheque Bounce)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Supreme Court rulings, blank security cheques collected at loan inception cannot be presented for inflated penalty sums without prior statement reconciliation.
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs">
                    <Scale className="w-3.5 h-3.5" />
                    <span>Arbitration &amp; Section 9 Injunction</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Following Supreme Court rulings in TRF Ltd. and Perkins Eastman, unilateral arbitrator appointments without borrower consent are legally void.
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>DRT &amp; RBI Fair Practices Code</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Loan default is strictly a civil breach. Recovery agents using abusive calls or street intimidation face criminal liability under BNS Sections 308, 329, and 351.
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
                7. 3-Tier Grievance Redressal Matrix: Two-Wheeler Lender Accountability
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If lenders or collection agencies violate RBI recovery directives through harassment or repossession threats, borrowers can escalate through three regulatory tiers:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <span className="text-[10px] font-bold text-[#1886ff] uppercase">Tier 1 (7-10 Days)</span>
                  <h3 className="font-bold text-slate-900 text-xs">Grievance Redressal Officer</h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Submit formal written complaints with call recordings demanding immediate cessation of agent visits.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <span className="text-[10px] font-bold text-[#1886ff] uppercase">Tier 2 (14-21 Days)</span>
                  <h3 className="font-bold text-slate-900 text-xs">Principal Nodal Officer</h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Escalate unresolved grievances directly to the lender apex Principal Nodal Officer under RBI directives.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <span className="text-[10px] font-bold text-emerald-700 uppercase">Tier 3 (30 Days)</span>
                  <h3 className="font-bold text-slate-900 text-xs">RBI Integrated Ombudsman</h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Lodge an online complaint on cms.rbi.org.in for binding statutory dispute resolution and reprimand.
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
                8. Chronological Timeline Table: The 6-Month Two-Wheeler Resolution Lifecycle
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Two-wheeler debt resolution follows a predictable procedural sequence from initial default to final settlement execution and hypothecation release:
              </p>

              {/* 4-SIDED BORDERED TABLE */}
              <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-xs">
                <table className="w-full text-left text-xs border-collapse border border-slate-300">
                  <thead className="bg-slate-100 text-slate-800">
                    <tr>
                      <th className="p-2.5 font-bold border border-slate-300">Phase</th>
                      <th className="p-2.5 font-bold border border-slate-300">Status</th>
                      <th className="p-2.5 font-bold border border-slate-300">Lender Strategy</th>
                      <th className="p-2.5 font-bold border border-slate-300 text-[#1886ff]">Legal Step</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold border border-slate-300 text-slate-900">Days 1 - 30</td>
                      <td className="p-2.5 border border-slate-300 font-semibold text-slate-800">SMA-0</td>
                      <td className="p-2.5 border border-slate-300">Automated SMS alerts, soft telecalling</td>
                      <td className="p-2.5 border border-slate-300 text-slate-800">Audit financials, request restructuring</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold border border-slate-300 text-slate-900">Days 31 - 90</td>
                      <td className="p-2.5 border border-slate-300 font-semibold text-amber-700">SMA-1 / SMA-2</td>
                      <td className="p-2.5 border border-slate-300">Agency telecalling, field agent visits</td>
                      <td className="p-2.5 border border-slate-300 text-slate-800">Serve Cease-and-Desist, cite RBI rules</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold border border-slate-300 text-slate-900">Days 91 - 120</td>
                      <td className="p-2.5 border border-slate-300 font-bold text-red-600">NPA Asset</td>
                      <td className="p-2.5 border border-slate-300">Demand cure notices, Section 25 threats</td>
                      <td className="p-2.5 border border-slate-300 text-slate-800">Submit Hardship Dossier to Committee</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold border border-slate-300 text-slate-900">Days 121 - 150</td>
                      <td className="p-2.5 border border-slate-300 font-bold text-red-700">Provisioning</td>
                      <td className="p-2.5 border border-slate-300">Legal summons, Lok Adalat notices</td>
                      <td className="p-2.5 border border-slate-300 text-[#1886ff] font-semibold">Negotiate 40% to 55% OTS compromise</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold border border-slate-300 text-slate-900">Month 5 - 6</td>
                      <td className="p-2.5 border border-slate-300 font-bold text-emerald-700">Settled</td>
                      <td className="p-2.5 border border-slate-300">Settlement Sanction Letter issued</td>
                      <td className="p-2.5 border border-slate-300 text-emerald-700 font-bold">Remit OTS sum, obtain NDC &amp; Form 35</td>
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
                9. Specialized Real-World Scenarios: Navigating Complex Two-Wheeler Defaults
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Two-wheeler loan defaults occur under varied socio-economic conditions across India. CredSettle designs tailored resolution strategies for specific borrower situations:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Bike className="w-3.5 h-3.5 text-[#1886ff]" />
                    Gig Workers &amp; Delivery Partners
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Delivery riders face severe livelihood disruption when agents threaten bike repossession. CredSettle intervenes with instant cease-and-desist notices while negotiating micro-settlements.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Salaried Employee Redundancies
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Professionals experiencing layoffs default on commuter bike loans. We submit verified separation letters to secure moratoriums followed by structured OTS waivers.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                    EV Scooter Warranty Disputes
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers facing EV battery failures while financiers demand EMIs receive legal advocacy to coordinate tripartite dispute settlement and stop billing.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-indigo-600" />
                    ARC Portfolio Debt Assignments
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When delinquent loans are assigned to Asset Reconstruction Companies under SARFAESI Section 5, we verify assignment legality and negotiate deep principal haircuts.
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
                Frequently Asked Questions: Two-Wheeler Loan Default &amp; Settlement
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, authoritative answers to the most crucial legal, procedural, and financial questions regarding two-wheeler loan default, recovery agent regulations, repossession safeguards, and debt settlement in India:
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
                          className={`w-4 h-4 text-[#1886ff] flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
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
                Statutory Citations &amp; Authoritative Legal Authorities
              </h2>

              <p className="text-sm text-slate-700 leading-relaxed">
                CredSettle legal strategies and dispute resolution methodologies are grounded in Indian statutory frameworks, judicial precedents, and regulatory codes:
              </p>

              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs space-y-1">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Governing Acts &amp; Landmark Judgments
                </h3>
                <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside leading-relaxed">
                  <li><strong>Supreme Court:</strong> <em>ICICI Bank Ltd. v. Prakash Kaur (2007) 2 SCC 711</em> (Ban on musclemen).</li>
                  <li><strong>Motor Vehicles Act, 1988:</strong> Section 51 (Vehicle hypothecation provisions).</li>
                  <li><strong>Reserve Bank of India:</strong> Master Direction on Fair Practices and Debt Recovery.</li>
                  <li><strong>Bharatiya Nyaya Sanhita, 2023:</strong> Sections 308 (Extortion), 329 (Trespass), 351 (Intimidation).</li>
                  <li><strong>CICRA, 2005:</strong> Section 21 (Dispute resolution and credit report rectification).</li>
                </ul>
              </div>

              {/* 6 Outbound Authority Badges */}
              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Official Statutory &amp; Regulatory Portals
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200 transition-colors"
                  >
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200 transition-colors"
                  >
                    <span>RBI Ombudsman</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200 transition-colors"
                  >
                    <span>TransUnion CIBIL</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200 transition-colors"
                  >
                    <span>India Code Repository</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200 transition-colors"
                  >
                    <span>NALSA Legal Services</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200 transition-colors"
                  >
                    <span>Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              </div>

              {/* 10 Internal CredSettle Topic Badges */}
              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Related Debt Resolution &amp; Borrower Protection Guides
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/car-loan-default-vehicle-seizure"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold border border-blue-100 transition-colors"
                  >
                    Car Loan Default &amp; Vehicle Seizure
                  </Link>
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
                Specialist in Indian banking jurisprudence, retail auto hypothecation disputes, and compromise settlements at CredSettle.
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
                Facing Illegal Bike Repossession?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed">
                Our legal team intervenes swiftly to halt unauthorized recovery visits, issue cease-and-desist notices, and protect your vehicle.
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
                  <span>Official RTO Form 35 Lien Removal</span>
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
