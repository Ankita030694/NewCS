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
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  BadgeAlert,
  Landmark,
  ShieldAlert,
  FileCheck,
  Shield
} from 'lucide-react';

export default function PoliceComplaintAgainstBankRecoveryAgentClient() {
  const [activeId, setActiveId] = useState<string>('executive-summary');
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
    { id: 'executive-summary', label: 'Executive Summary & Rights' },
    { id: 'debt-economics-npa', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'financial-math-breakdown', label: '2. Settlement Math & Penalties' },
    { id: 'comparison-matrix-table', label: '3. Debt Resolution Matrix' },
    { id: 'cibil-algorithm-scoring', label: '4. CIBIL Algorithm & CICRA Sec 21' },
    { id: 'visual-infographic-asset', label: '5. Visual Defense Blueprint' },
    { id: 'step-by-step-police-sop', label: '6. 6-Stage Actionable SOP' },
    { id: 'statutory-defense-framework', label: '7. Statutory Notice Defense' },
    { id: 'three-tier-grievance-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'chronological-milestones', label: '9. Chronological Timelines' },
    { id: 'specialized-scenarios', label: '10. Specialized Case Studies' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'citations-authority-grid', label: 'Statutory Citations & Portals' }
  ];

  const faqs = [
    {
        "q": "Can I legally file a police complaint against a bank recovery agent for harassment?",
        "a": "Yes. Recovery agents have zero right to intimidate or threaten borrowers. You can file a police complaint and FIR for criminal intimidation, extortion, and criminal trespass under the Bharatiya Nyaya Sanhita (BNS) and IPC."
    },
    {
        "q": "Which sections of the BNS and IPC apply to recovery agent harassment?",
        "a": "Key sections include Section 351 BNS (506 IPC) for criminal intimidation, Section 308 BNS (383 IPC) for extortion, Section 329 BNS (441 IPC) for criminal trespass, and Section 66D IT Act for digital harassment."
    },
    {
        "q": "What should I do if the local police station refuses to register my FIR?",
        "a": "Submit a written complaint to the Superintendent of Police or Commissioner by registered post under Section 173(3) of BNSS (formerly 154(3) CrPC), or file an application before the Judicial Magistrate under Section 175(3) BNSS."
    },
    {
        "q": "Can recovery agents visit my home or office without prior notice?",
        "a": "Under RBI Fair Practices Code, recovery agents can only visit pre-notified locations between 08:00 AM and 07:00 PM. They must carry bank authorization letters and never disclose debt details to third parties."
    },
    {
        "q": "What evidence is required to file an airtight police complaint against recovery agents?",
        "a": "Maintain timestamped call recordings, WhatsApp messages, SMS threats, CCTV footage of home visits, photographs of visiting agents, and signed witness statements from neighbors, security guards, or office colleagues."
    },
    {
        "q": "Is a bank vicariously liable for illegal acts committed by outsourced recovery agents?",
        "a": "Yes. The Reserve Bank of India mandates that commercial banks and NBFCs are strictly liable for the unlawful conduct, verbal abuse, physical harassment, and intimidation perpetrated by third-party recovery agencies."
    },
    {
        "q": "Can a loan recovery agent get me arrested for loan default?",
        "a": "No. Defaulting on an unsecured personal loan or credit card is purely a civil dispute, not a criminal offense. Recovery agents have no statutory authority to arrest, detain, or send police."
    },
    {
        "q": "How do I file an online complaint against bank recovery agents on the RBI CMS portal?",
        "a": "Visit cms.rbi.org.in, upload your loan details, harassment timeline, copy of complaint sent to the bank Principal Nodal Officer (PNO), and supporting audio/video evidence to initiate formal regulatory investigation."
    },
    {
        "q": "How does a One-Time Settlement (OTS) permanently resolve recovery agent harassment?",
        "a": "A structured OTS legally closes the defaulted loan account with a 40% to 75% waiver on penal charges. The bank issues an unconditional No Dues Certificate (NDC), terminating all recovery operations permanently."
    },
    {
        "q": "What steps should I take against illegal loan apps threatening morphed photos?",
        "a": "Immediately dial 1930 to report cyber extortion, file a complaint at cybercrime.gov.in, lock your social media profiles, alert your contact list regarding the cyber extortion syndicate, and never pay demand money."
    }
];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-blue-100 mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Statutory Legal Protection &amp; FIR Framework</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How to File a Police Complaint Against a Bank Recovery Agent
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Facing unlawful intimidation, abusive phone calls, or physical harassment from debt recovery agents? Learn your constitutional rights, how to file a criminal FIR under Bharatiya Nyaya Sanhita (BNS) and IPC, and how to permanently halt collection harassment through formal regulatory escalation and structured debt resolution with CredSettle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Recovery Harassment: File Legal Complaint Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS STRIP COMPONENT */}
      <StatsStrip />

      {/* WIDESCREEN 3-COLUMN LAYOUT */}
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
                  <span>Borrower Legal Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by BNS 2023, BNSS 2023, IT Act 2000 &amp; RBI Fair Practices Code.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE with 5px blue border) */}
            <div
              id="executive-summary"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: KEY LEGAL SAFEGUARDS &amp; BORROWER RIGHTS</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Zero Criminal Power:</strong> Unsecured loan default is strictly a civil dispute; recovery agents have zero authority to arrest or seize assets without a civil court decree.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Criminal Offenses:</strong> Abusive language, doorstep intimidation, and threats violate Section 351 BNS (506 IPC) and Section 308 BNS (383 IPC), triggering criminal liability.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Direct Police FIR Remedy:</strong> Borrowers can register a cognizable FIR at the local police station or Cyber Crime Cell against rogue collection agents and lenders.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">BNSS 173(3) Escalation:</strong> If the local SHO refuses FIR registration, submit a petition to the Superintendent of Police or Commissioner under Section 173(3) BNSS.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Strict RBI Calling Hours:</strong> Lenders cannot contact borrowers before 8:00 AM or after 7:00 PM, nor contact relatives or workplace colleagues under RBI norms.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Vicarious Bank Liability:</strong> The Supreme Court holds commercial banks directly accountable for civil damages and criminal acts committed by their recovery agencies.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Digital Blackmail Protection:</strong> Threatening WhatsApp messages or contact scraping trigger non-bailable penalties under Section 66D of the Information Technology Act.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Permanent Closure via OTS:</strong> Neutralize litigation threats and eliminate harassment by negotiating a structured compromise One-Time Settlement with a No Dues Certificate.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="debt-economics-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Debt Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics: Recovery Agency Aggression Drivers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When borrowers suffer genuine financial distress due to sudden job loss, business downturns, or medical emergencies and default on unsecured personal loan EMIs, lenders execute a strict classification sequence. Under RBI prudential norms, delinquent accounts advance through Special Mention Account tiers: SMA-0 (1 to 30 days overdue), SMA-1 (31 to 60 days overdue), and SMA-2 (61 to 90 days overdue). Upon crossing 90 days default, the loan becomes a Non-Performing Asset (NPA).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This classification triggers mandatory Tier-1 capital provisioning between 15% and 100% of the loan value. Because unsecured personal loans lack mortgage collateral, lenders cannot invoke summary possession powers under Section 31(i) of the SARFAESI Act, 2002. Pressured by audit disclosures, banks assign collection files to aggressive third-party agencies on commission models. However, recognizing that formal civil recovery suits require 3 to 6 years of expensive litigation, bank credit committees maintain significant commercial flexibility to approve One-Time Settlement (OTS) compromise proposals to recover capital while releasing capital reserves.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-blue-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <UserCheck className="w-4 h-4" />
                    <span>Pure Facilitation Role</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Recovery agents are third-party contractors hired strictly to communicate and facilitate voluntary repayment. They hold no judicial or executive police powers under Indian law.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-red-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Criminal Liabilities</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Any agent attempting forceful doorstep entry, abusive phone calls, or physical asset confiscation commits Criminal Trespass (Sec 329 BNS) and Extortion (Sec 308 BNS).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Court Order Mandatory</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Only a court bailiff executing a valid Civil Court decree under Order 21 CPC can attach assets. Private recovery agents have zero legal authority to seize property.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-math-breakdown" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Principal vs Inflated Penalties
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower defaults, financial institutions inflate the ledger balance by compounding contractual interest with penal interest rates (often 24% to 36% per annum), bounce fees, and recovery charges. This accounting practice often swells the claimed liability by 35% to 65% above the genuine principal balance, creating psychological panic designed to force distressed borrowers into hasty payments.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the real mathematical anatomy of an NPA loan empowers borrowers to negotiate effectively during One-Time Settlement discussions. Consider a representative ₹10,00,000 unsecured personal loan at 180 days default. While the genuine outstanding principal balance is ₹7,80,000, compounded penal interest, late fees, and recovery charges artificially swell the demand to ₹11,80,000. Through structured bilateral negotiations, credit committees approve comprehensive waivers on penal charges and interest, resulting in a realistic final compromise settlement of ₹4,50,000 to ₹5,20,000 (a 45% to 55% settlement target), payable in structured installments with an unconditional No Dues Certificate.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    Inflated Bank Ledger Breakdown (180 DPD NPA)
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Original Disbursed Principal Remaining:</span>
                      <span className="font-bold text-slate-900">₹7,80,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Accrued Contractual Interest (180 Days):</span>
                      <span className="font-bold text-slate-900">₹1,45,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Compounded Penal Interest (24% p.a.):</span>
                      <span className="font-bold text-red-600">₹1,68,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>NACH Bounce &amp; Agency Recovery Charges:</span>
                      <span className="font-bold text-red-600">₹87,000</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Total Bank Claim Demand:</span>
                      <span className="text-red-700">₹11,80,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Structured OTS Compromise Target Math
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Complete Penal &amp; Bounce Fee Waiver:</span>
                      <span className="font-bold text-emerald-600">100% Waived (-₹2,55,000)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Contractual Interest Haircut:</span>
                      <span className="font-bold text-emerald-600">70% Waived (-₹1,01,500)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Net Negotiated Settlement Target:</span>
                      <span className="font-bold text-emerald-700 text-sm">₹4,50,000 – ₹5,20,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Effective Total Haircut on Claim:</span>
                      <span className="font-bold text-emerald-700">55% to 62% Total Savings</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Final Legal Output:</span>
                      <span className="text-[#1886ff]">Unconditional No Dues Certificate</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="comparison-matrix-table" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Strategic Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparative Resolution Matrix: Legal &amp; Financial Paths
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When facing recovery pressure, borrowers must choose the right legal strategy to protect their assets, halt harassment, and minimize total payout. This comparative table outlines the five standard debt dispute pathways available under Indian law:
              </p>

              {/* 4-SIDED BORDERED TABLE WITH CELL DIVIDERS */}
              <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse border border-slate-300">
                  <thead className="bg-slate-100 text-slate-800">
                    <tr>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Resolution Pathway</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Harassment &amp; Legal Risk</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Financial Waiver / Haircut</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Resolution Timeline</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300 text-[#1886ff]">Asset Protection &amp; Closure</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-semibold">Immediate cessation upon filing</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">40% to 75% Principal/Penal Waiver</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">30 to 90 Days</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-semibold">100% Asset Protection; Unconditional NDC</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Loan Restructuring / Moratorium</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-amber-700">Paused temporarily; resumes on lapse</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-slate-600">0% (Tenure extended, interest increases)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">60 to 120 Days</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-slate-700">Tenure extended; EMI re-structured</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Civil Court Litigation (Sec 37/Order 21)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700">High stress; formal court summons</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-slate-600">0% (High advocate fees + court costs)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-600 font-semibold">3 to 6 Years</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-amber-700">Money decree risks; execution petitions</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Lok Adalat Compromise</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700">Non-adversarial, amicable forum</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700">30% to 50% Negotiated Haircut</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Single Sitting Award</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-semibold">Final non-appealable civil decree</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Inaction / Ignoring Notices</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700 font-bold">Severe harassment &amp; doorstep visits</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700">0% (Compounding penal inflation)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-600">Perpetual Hardship</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700 font-bold">Severe CIBIL damage; ex-parte legal risks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-scoring" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Algorithm: Section 21 CICRA Conversion Remedy
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit Information Companies in India (TransUnion CIBIL, Experian, Equifax, CRIF High Mark) evaluate borrower creditworthiness using a strict 5-factor mathematical weighting model:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-1">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-center">
                  <div className="text-base font-black text-[#1886ff]">35%</div>
                  <div className="text-[11px] font-bold text-slate-800 mt-0.5">Payment History</div>
                  <div className="text-[10px] text-slate-500">DPD tracking</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-center">
                  <div className="text-base font-black text-indigo-600">30%</div>
                  <div className="text-[11px] font-bold text-slate-800 mt-0.5">Credit Utilization</div>
                  <div className="text-[10px] text-slate-500">CUR ratios</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-center">
                  <div className="text-base font-black text-purple-600">15%</div>
                  <div className="text-[11px] font-bold text-slate-800 mt-0.5">History Length</div>
                  <div className="text-[10px] text-slate-500">Vintage of credit</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-center">
                  <div className="text-base font-black text-emerald-600">10%</div>
                  <div className="text-[11px] font-bold text-slate-800 mt-0.5">Credit Mix</div>
                  <div className="text-[10px] text-slate-500">Secured vs unsecured</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-center col-span-2 sm:col-span-1">
                  <div className="text-base font-black text-amber-600">10%</div>
                  <div className="text-[11px] font-bold text-slate-800 mt-0.5">New Inquiries</div>
                  <div className="text-[10px] text-slate-500">Hard inquiry frequency</div>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed pt-2">
                When an account defaults past 90 DPD, the payment history component suffers severe impairment, causing a 120 to 180 point drop in credit score. Following a negotiated One-Time Settlement, the account is initially marked as Settled in the credit report.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers can subsequently invoke Section 21 of the Credit Information Companies (Regulation) Act (CICRA), 2005. Under Section 21 CICRA, borrowers have the statutory right to pay off the residual settlement difference at a later date when finances stabilize and demand that the lender update their credit bureau status from Settled to Closed, paving the way for a full credit score recovery above 750 within 12 to 24 months through disciplined secured credit card usage.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="visual-infographic-asset" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Defense Blueprint: 6-Step SOP to Stop Recovery Harassment
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Review this official 6-stage procedural roadmap designed by CredSettle legal experts, illustrating the complete statutory trajectory from evidence collection and police FIR drafting to RBI Ombudsman escalation and compromise settlement. View the high-resolution vector blueprint for full details.
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/police-complaint-against-bank-recovery-agent.jpg"
                    alt="Legal SOP Filing Police Complaint Against Bank Recovery Agents Infographic"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Blueprint • BNS / IPC Provisions &amp; RBI Fair Practices</span>
                  <a
                    href="/images/infographics/police-complaint-against-bank-recovery-agent.jpg"
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
            <section id="step-by-step-police-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Actionable Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Actionable SOP: Filing Police Complaint &amp; FIR
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If third-party collection agents violate legal boundaries or threaten you, follow this step-by-step Standard Operating Procedure to enforce your statutory rights:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      01
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 1: Forensic Evidence Audit &amp; Agent ID Verification
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Record all incoming collection calls with timestamps. Demand the visiting agent official bank ID card and DRA authorization letter. Preserve abusive SMS, WhatsApp messages, and CCTV recordings without signing handwritten slips.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      02
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 2: Compile Formal Hardship Dossier &amp; Cease-Desist Notice
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Assemble documentary proof of hardship (medical summaries, termination letters). Issue a formal Cease and Desist notice to the bank Grievance Redressal Officer detailing unlawful agent intimidation and privacy violations.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      03
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 3: Jurisdictional Police Complaint &amp; FIR Registration
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Submit a written complaint to the local police Station House Officer (SHO) citing Section 351 BNS (506 IPC) for intimidation, Section 308 BNS (383 IPC) for extortion, and Section 329 BNS (441 IPC) for trespass.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      04
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 4: Supervisory Police Escalation under BNSS Section 173(3)
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    If the local police station refuses to register an FIR within 72 hours, send the complaint petition via registered speed post to the Superintendent of Police or Commissioner under Section 173(3) BNSS.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      05
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 5: Escalation to RBI Integrated Ombudsman (cms.rbi.org.in)
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    If the lender fails to resolve the harassment within 30 days, lodge an online complaint on the RBI CMS portal. The Ombudsman can penalize the financial institution and order immediate file recall.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      06
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 6: Bilateral Negotiations, Letter Vetting &amp; NDC Issuance
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    With harassment halted, initiate One-Time Settlement negotiations with the bank credit committee. Verify the settlement letter on official bank letterhead, remit funds directly to the loan account, and collect your NDC.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rebuttal Framework */}
            <section id="statutory-defense-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Legal Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Notice Defense: PSSA, NI Act &amp; Arbitration
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Collection agencies frequently deploy automated legal notices under Section 25 of the Payment and Settlement Systems Act (PSSA), 2007 or Section 138 of the Negotiable Instruments Act, 1881 to intimidate borrowers. Understanding your exact statutory defense rights neutralizes these intimidation tactics:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Section 25 PSSA &amp; Section 138 NI Act</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    NACH or cheque bounce notices require a formal 15-day statutory reply window. Establishing bona fide financial hardship and absence of fraudulent intent prevents summary criminal proceedings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Arbitration Act Section 21 Safeguards</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Supreme Court rulings in <em>Perkins Eastman</em> and <em>TRF Ltd.</em>, unilateral arbitrator appointments by lenders are void ab initio, invalidating unilateral ex-parte awards.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>SARFAESI &amp; DRT Jurisdiction Thresholds</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unsecured loans are exempt from SARFAESI repossession under Section 31(i), and Section 19 of the Recovery of Debts and Bankruptcy Act mandates a ₹20 Lakh threshold for DRT claims.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Shield className="w-4 h-4" />
                    <span>RBI Fair Practices Code Mandate</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders face severe regulatory sanctions for contacting borrowers outside 8 AM to 7 PM, calling third parties, or deploying unverified collection personnel without official ID.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                <p className="text-blue-900 font-semibold mb-1">Summary of Statutory Defense Principles:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>Unilateral arbitrator appointment without mutual consent is legally invalid.</li>
                  <li>Unsecured loans cannot be subject to SARFAESI property attachment.</li>
                  <li>Statutory replies to Section 25 / Section 138 notices preserve civil defense rights.</li>
                  <li>Principal banks are held vicariously liable for all recovery agency actions.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Grievance Redressal Matrix */}
            <section id="three-tier-grievance-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Escalation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Institutional Grievance Redressal Escalation Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When encountering recovery agent misconduct, escalate systematically through the statutory 3-tier grievance mechanism mandated by the Reserve Bank of India:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {/* Level 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        Level 1: Internal
                      </span>
                      <span className="text-xs font-semibold text-slate-500">7 to 10 Days</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Grievance Redressal Officer (GRO)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Submit a formal written complaint with audio/video evidence to the bank designated Grievance Redressal Officer. Obtain a unique Complaint Ticket Number to establish the initial audit trail.
                    </p>
                  </div>
                  <div className="text-[11px] font-bold text-[#1886ff] pt-2 border-t border-slate-100">
                    Action: Create Formal Evidence Trail
                  </div>
                </div>

                {/* Level 2 */}
                <div className="bg-white p-5 rounded-2xl border border-blue-200/80 shadow-xs space-y-2 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">
                        Level 2: Appellate
                      </span>
                      <span className="text-xs font-semibold text-slate-500">14 to 21 Days</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Principal Nodal Officer (PNO)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Escalate unresolved complaints to the bank Principal Nodal Officer. The PNO has executive authority to suspend rogue agencies, freeze collection activity, and initiate settlement discussions.
                    </p>
                  </div>
                  <div className="text-[11px] font-bold text-[#1886ff] pt-2 border-t border-slate-100">
                    Action: Direct Settlement Negotiation
                  </div>
                </div>

                {/* Level 3 */}
                <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-xs space-y-2 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Level 3: Statutory
                      </span>
                      <span className="text-xs font-semibold text-slate-500">30-Day Window</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      RBI Integrated Ombudsman
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      File an online petition on the RBI CMS portal (<code>cms.rbi.org.in</code>). The Ombudsman holds statutory authority to penalize errant banks, award financial compensation, and order immediate file recall.
                    </p>
                  </div>
                  <div className="text-[11px] font-bold text-emerald-700 pt-2 border-t border-slate-100">
                    Action: Regulatory Sanctions &amp; Penalty
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Chronological Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Loan Default to No Dues Certificate
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The progression of a defaulted loan from early delinquency to final debt settlement follows a predictable banking lifecycle. Milestones and defense strategies from Day 1 to Month 6:
              </p>

              {/* 4-SIDED BORDERED TABLE WITH CELL DIVIDERS */}
              <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse border border-slate-300">
                  <thead className="bg-slate-100 text-slate-800">
                    <tr>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Timeline Milestone</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Account Classification</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Bank Recovery Strategy</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Borrower Protection Action</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300 text-[#1886ff]">Credit &amp; Legal Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Days 1 – 30</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">SMA-0 (Standard Account)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Automated SMS, reminder phone calls</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Notify bank in writing of temporary hardship</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Minor late fee; standard credit status</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Days 31 – 60</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">SMA-1 (Early Delinquency)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Tele-calling collections, payment demands</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Request formal EMI restructuring or pause</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">30+ DPD reported to credit bureaus</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Days 61 – 90</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">SMA-2 (Pre-NPA Alert)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Third-party agency assignment, doorstep visits</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Demand agent ID; record visits; issue warning</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">60+ DPD flag; credit freeze across lenders</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Days 91 – 120</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-amber-700 font-bold">NPA (Non-Performing Asset)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700">Legal demand notices, intense harassment</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">File police complaint / Cease &amp; Desist notice</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">NPA status reported; bank creates provisioning</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Days 121 – 180</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Sub-Standard / Loss Asset</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Arbitration summons or Lok Adalat notice</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">Initiate One-Time Settlement (OTS) negotiations</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-semibold">Waiver of 40% to 75% on penal claims offered</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Post-Settlement</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">Debt Extinguished</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700">All collection operations permanently halted</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">Obtain unconditional No Dues Certificate (NDC)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">Marked Closed/Settled; complete asset immunity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Case Studies: Real-World Debt Harassment Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Different loan categories and personal circumstances present unique collection challenges. Here is how specialized defense strategies apply in practice:
              </p>

              <div className="space-y-4 pt-2">
                {/* Card 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                      Scenario 01: Multi-Lender Debt Consolidation
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Multiple Credit Cards &amp; PLs</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Coordinating Simultaneous Multi-Agency Harassment Defense
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Coordinating centralized Cease and Desist notices across multiple credit cards and personal loans shields borrowers from fragmented harassment.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                      Scenario 02: Sudden Executive Layoffs &amp; Income Shocks
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Corporate Downsizing</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Establishing Bona Fide Hardship Defense for Salaried Professionals
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Serving legal notices asserting privacy violations under RBI norms protects corporate reputations and secures deep settlement waivers.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Scenario 03: MSME &amp; Sole Proprietorship Capital Defaults
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Working Capital &amp; Business Loans</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Shielding Commercial Operations and Personal Guarantors
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Filing an immediate FIR for criminal trespass (Section 329 BNS) neutralizes extra-judicial commercial coercion.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                      Scenario 04: Asset Reconstruction Company (ARC) Debt Assignments
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Phoenix, ARCIL, CFM, Edelweiss</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Negotiating Steep Compromise Discounts with Bad Debt Buyers
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    ARCs acquire debts at 15% to 30% of face value under SARFAESI Section 5, making them prime candidates for deep compromise settlements.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: About CredSettle Component */}
            <section id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </section>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Recovery Harassment &amp; FIRs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Review authoritative legal answers to the most common questions regarding loan recovery harassment, police FIR procedures, and borrower protections in India:
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 hover:text-[#1886ff] transition-colors gap-3"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-[#1886ff] font-extrabold text-xs bg-blue-50 px-2 py-0.5 rounded">
                            Q{idx + 1}
                          </span>
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={
                            'w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ' +
                            (isOpen ? 'transform rotate-180 text-[#1886ff]' : '')
                          }
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="citations-authority-grid" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Citations &amp; Authorities</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Official Statutory Authorities &amp; Regulatory Citations
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The legal frameworks, statutory provisions, and judicial precedents in this guide are directly anchored in official Indian statutes, regulatory master directions, and government dispute portals:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    <span>Reserve Bank of India (RBI)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>RBI Integrated Ombudsman (CMS)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#1886ff]" />
                    <span>TransUnion CIBIL Dispute Portal</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <span>India Code Legislative Database</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <Gavel className="w-4 h-4 text-[#1886ff]" />
                    <span>National Legal Services Authority</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>National Cyber Crime Portal</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-200/80 space-y-2">
                <span className="text-xs font-black text-slate-700 uppercase tracking-wider block">
                  Related Debt Defense &amp; Resolution Guides:
                </span>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/arbitration-notice-personal-loan-default"
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                  >
                    Arbitration Notice for Personal Loan
                  </Link>
                  <Link
                    href="/section-138-cheque-bounce-personal-loan"
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                  >
                    Section 138 Cheque Bounce Defense
                  </Link>
                  <Link
                    href="/ecs-nach-bounce-legal-notice-section-25"
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                  >
                    NACH / ECS Bounce Section 25
                  </Link>
                  <Link
                    href="/can-recovery-agents-seize-property"
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                  >
                    Can Recovery Agents Seize Property?
                  </Link>
                  <Link
                    href="/lok-adalat-personal-loan-settlement"
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                  >
                    Lok Adalat Loan Settlement
                  </Link>
                  <Link
                    href="/convert-settled-status-to-closed"
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                  >
                    Convert Settled Status to Closed
                  </Link>
                  <Link
                    href="/dispute-wrong-settled-status-cibil"
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                  >
                    Dispute Wrong Settled Status in CIBIL
                  </Link>
                  <Link
                    href="/fake-loan-app-harassment-cyber-crime"
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                  >
                    Fake Loan App Cyber Complaint
                  </Link>
                  <Link
                    href="/get-noc-after-loan-settlement"
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                  >
                    Get NOC After Loan Settlement
                  </Link>
                  <Link
                    href="/documents-needed-for-loan-settlement"
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                  >
                    Documents Needed for Settlement
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBARS ================= */}
          <aside className="space-y-5 sticky top-6">
            
            {/* 1. Author Bio Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-12 h-12 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-base flex items-center justify-center flex-shrink-0 hover:bg-blue-200 transition-colors shadow-2xs"
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
              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                Specialist in civil debt dispute resolution, borrower harassment defense under BNS/IPC, and RBI regulatory enforcement with extensive experience protecting Indian consumers.
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
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>CredSettle Panel</span>
                </span>
              </div>
            </div>

            {/* 2. Emergency CTA Card (#2452ae) */}
            <div className="rounded-2xl text-white p-5 shadow-md space-y-4" style={{ backgroundColor: '#2452ae' }}>
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white">
                <Lock className="w-3 h-3" />
                <span>100% CONFIDENTIAL</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-extrabold tracking-tight leading-snug">
                  Facing Recovery Agent Intimidation?
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Halt abusive collection visits, file formal police complaints, and negotiate a structured compromise settlement with full legal protection.
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <Link
                  href="/contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-xs sm:text-sm text-center block transition-all shadow-sm hover:bg-slate-50"
                >
                  Stop Recovery Harassment: File Legal Complaint Now
                </Link>
                
                <a
                  href="tel:+918800226635"
                  className="w-full py-2 px-3 rounded-xl bg-blue-700/60 hover:bg-blue-700 text-white font-bold text-xs text-center flex items-center justify-center gap-2 transition-all border border-blue-500/30"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: +91-8800226635</span>
                </a>
              </div>
            </div>

            {/* 3. CredSettle Trust Commitments Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>CredSettle Trust Commitments</span>
              </h4>

              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Performance &amp; success-fee aligned engagement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> 100% of settlement funds paid directly to bank.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> Strict adherence to statutory fair recovery rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Protecting clients across all 28 states &amp; UTs.</span>
                </li>
              </ul>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}
