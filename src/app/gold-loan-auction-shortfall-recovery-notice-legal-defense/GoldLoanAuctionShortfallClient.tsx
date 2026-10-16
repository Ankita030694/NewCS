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
  CreditCard,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Coins
} from 'lucide-react';

export default function GoldLoanAuctionShortfallClient() {
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
    { id: 'statutory-framework', label: '1. Section 176 Contract Act Rules' },
    { id: 'financial-forensics', label: '2. Forensic Valuation vs Claims' },
    { id: 'shortfall-matrix', label: '3. Shortfall Legality Matrix' },
    { id: 'judicial-precedents', label: '4. High Court & Apex Precedents' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Defense Protocol' },
    { id: 'statutory-defense', label: '7. Criminal Intimidation Protections' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance Matrix' },
    { id: 'procedural-timeline', label: '9. Procedural Milestones & Timeline' },
    { id: 'specialized-scenarios', label: '10. Stridhan & Heirloom Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is a gold loan auction shortfall recovery notice?',
      a: 'A gold loan shortfall notice is a letter from a bank or NBFC. It claims that selling your pledged gold did not clear your debt. The lender demands that you pay the remaining balance.'
    },
    {
      q: 'Can a bank or NBFC legally file a criminal case for a gold loan shortfall?',
      a: 'No. Default on a gold loan is purely a civil debt matter. The Supreme Court has held that failing to repay a loan is not a crime. Threats of police arrest or criminal FIRs are illegal.'
    },
    {
      q: 'What are my statutory rights under Section 176 of the Indian Contract Act?',
      a: 'Section 176 gives you the right to receive reasonable notice before any sale. The notice must specify the auction date, time, and venue. An auction held without proper notice is wrongful under the law.'
    },
    {
      q: 'What are the RBI mandatory rules for conducting gold loan auctions?',
      a: 'RBI rules require a 30-day prior registered notice. The lender must advertise the sale in two newspapers, including a local vernacular daily. The auction must occur in the local town at a fair reserve price.'
    },
    {
      q: 'What is the limitation period for recovering a gold loan auction shortfall?',
      a: 'Under the Limitation Act 1963, a lender has three years from the auction date to file a recovery lawsuit. Any claim or notice sent after three years is time-barred and cannot be enforced in court.'
    },
    {
      q: 'Can the lender sell my gold below market bullion price?',
      a: 'No. The lender acts as a trustee for your pledged gold. The bank must aim to realize the fair market price. If the bank sold your gold at distress prices, you can claim damages against the shortfall.'
    },
    {
      q: 'Can the bank confiscate the auction surplus if the gold fetched more than the loan dues?',
      a: 'No. Under RBI rules and Section 176, any surplus money from the auction belongs to you. The lender must return the surplus to your bank account within 30 days of the sale.'
    },
    {
      q: 'How should I reply to a gold loan auction shortfall legal notice?',
      a: 'Send a formal legal reply through an advocate. Demand full auction records, postal proof of the 30-day notice, newspaper clips, and an audit of all penal charges.'
    },
    {
      q: 'Can I settle a gold loan shortfall notice through a One-Time Settlement (OTS)?',
      a: 'Yes. Once the gold is sold, the remaining claim is an unsecured debt. Lenders often agree to compromise settlements with 50% to 80% waivers to close the file quickly.'
    },
    {
      q: 'How does CredSettle assist borrowers facing gold loan shortfall notices?',
      a: 'CredSettle reviews your loan ledger and verifies auction rules. Our legal experts stop recovery agent calls, issue formal replies, and negotiate deep settlement waivers with clean No Dues Certificates.'
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
            <Coins className="w-3.5 h-3.5" />
            <span>Borrower Rights &amp; Gold Loan Legal Defense Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Defend Gold Loan Auction Shortfall Notice: Legal Rights
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A clear legal guide for borrowers facing debt demand notices after gold auctions. Learn Section 176 Contract Act rules, RBI auction standards, and how to stop unlawful recovery threats.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Defend Your Gold Loan Notice</span>
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
                  Protected under Section 176 Contract Act 1872 and RBI Master Directions on Gold Loans.
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
                <span>EXECUTIVE BRIEF: DEFENDING GOLD LOAN AUCTION SHORTFALL NOTICES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Legal Notice:</strong> Under Section 176 of the Indian Contract Act, the lender must give you clear notice of sale. An auction held without proper notice makes the lender liable for damages.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">RBI 30-Day Auction Rules:</strong> The Reserve Bank requires a 30-day registered notice. Lenders must publish public notices in two local newspapers before any sale.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Unsecured Claim Status:</strong> Once gold is sold, the collateral is gone. The remaining deficit is only an unsecured debt. This gives you strong leverage for a 50% to 80% settlement discount.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">3-Year Limitation Deadline:</strong> Lenders must file any court case within three years of the auction date. Stale claims are time-barred by law.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Criminal Liability:</strong> Loan default is not a crime. Threats of arrest or police complaints are illegal under Section 351 of Bharatiya Nyaya Sanhita.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Framework: Section 176 Contract Act Rules */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Borrower Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Framework: Section 176 Contract Act Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A gold loan shortfall happens when a bank sells pledged gold for less than the debt. Borrowers often receive recovery demand notices after such sales. Under Indian law, you have clear legal rights to defend yourself against unfair claims.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you pledge gold for a loan, the Indian Contract Act protects you. Section 176 states that the lender must give you reasonable notice before any sale. This notice is mandatory by law. Lenders cannot remove this requirement through fine print in loan agreements.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The notice must state the exact date, time, and venue of the auction. This allows you to repay the loan and redeem your gold before the hammer falls. A vague notice with no date or place is invalid.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the lender sells your gold without valid notice, the sale is wrongful. The bank is then guilty of wrongful conversion. You can hold the bank liable for the full market value of your ornaments.
              </p>
            </section>

            {/* SECTION 2: Financial Forensics: Real Valuation vs Deficit Claims */}
            <section id="financial-forensics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics &amp; Ledger Auditing</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Forensics: Real Valuation vs Deficit Claims
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                RBI rules cap gold loans at 75 percent of the total gold value. This leaves a 25 percent safety cushion. Why then does a shortfall occur? In most cases, lenders add unfair penal interest and heavy extra fees.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Lenders often add monthly compounding penal interest at high rates. They also charge large fees for notices and auction costs. In some cases, lenders sell the gold below true market rates in rushed auctions.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A careful check of your loan account often shows that you owe far less. When you remove illegal penal interest under RBI rules, the shortfall often disappears. In some cases, the bank even owes you surplus money from the sale.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Gold Loan Ledger Audit &amp; Shortfall Forensic Math</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">100g 22K Gold Pledge</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Financial Parameter / Claim Component</th>
                        <th className="p-3">Lender Claimed Ledger</th>
                        <th className="p-3">Forensic Legal Reality</th>
                        <th className="p-3 text-right">Adjusted Position</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Original Principal Disbursed</td>
                        <td className="p-3">₹4,50,000</td>
                        <td className="p-3 text-slate-700">Legitimate Principal Balance</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹4,50,000 (Base)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Compounded Penal &amp; Overdue Charges</td>
                        <td className="p-3 text-rose-600 font-bold">₹1,85,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Illegal under RBI Penal Circular 2023</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹0 (Disallowed)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Auction Costs &amp; Processing Fees</td>
                        <td className="p-3 text-rose-600">₹45,000</td>
                        <td className="p-3 text-amber-600 font-semibold">Capped at Actual Out-of-Pocket Expense</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹8,000 (Audited)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Auction Realization Proceeds</td>
                        <td className="p-3 text-slate-700">₹5,10,000 (Distress Sale)</td>
                        <td className="p-3 text-blue-600">Fair Market Bullion Value (₹5,90,000)</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹5,10,000 (Credited)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Net Shortfall / Resolution Outcome</td>
                        <td className="p-3 text-rose-600">₹1,70,000 Claimed Deficit</td>
                        <td className="p-3 text-emerald-700">Deficit Eliminated via Regulatory Audit</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">Full Debt Clearance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Shortfall Legality Matrix: Valid vs Defective Actions */}
            <section id="shortfall-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Compliance Benchmark</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Shortfall Legality Matrix: Valid vs Defective Actions
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before you pay any shortfall notice, check if the lender followed the law. The lender must give a 30-day notice by registered post. The bank must also advertise the sale in two local newspapers.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Lenders cannot set arbitrary low prices. The reserve price must match average gold rates from the past 30 days. If the bank broke these rules, the auction notice is legally flawed. You can challenge the demand in writing.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Auction Step / Requirement</th>
                      <th className="p-3">Statutory Legal Standard</th>
                      <th className="p-3">Common Defective Practice</th>
                      <th className="p-3">Borrower Legal Defense</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Pre-Auction Notice Period</td>
                      <td className="p-3">Minimum 30 days registered notice (RBI norms)</td>
                      <td className="p-3 text-rose-600">Short 7-day SMS or informal phone calls</td>
                      <td className="p-3 text-emerald-700 font-semibold">Challenge sale as void ab initio.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Public Advertisement</td>
                      <td className="p-3">Published in 1 national and 1 local vernacular daily</td>
                      <td className="p-3 text-rose-600">No public ad or obscure internal board notice</td>
                      <td className="p-3 text-emerald-700 font-semibold">Demand copies of both newspaper clips.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Auction Location</td>
                      <td className="p-3">Same town or taluka where loan branch is situated</td>
                      <td className="p-3 text-rose-600">Bulk auction conducted at distant head office</td>
                      <td className="p-3 text-emerald-700 font-semibold">Cite RBI jurisdictional auction breach.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Reserve Price Fixing</td>
                      <td className="p-3">Tied to 30-day average closing price of gold</td>
                      <td className="p-3 text-rose-600">Arbitrary low valuations by friendly buyers</td>
                      <td className="p-3 text-emerald-700 font-semibold">Seek offset for undervaluation loss.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Auction Accounting Sheet</td>
                      <td className="p-3">Certified item-wise breakdown provided in 30 days</td>
                      <td className="p-3 text-rose-600">Lump-sum shortfall notice with zero records</td>
                      <td className="p-3 text-emerald-700 font-semibold">Withhold payment pending full audit.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Auction Surplus Refund</td>
                      <td className="p-3">Surplus must be refunded within 30 days</td>
                      <td className="p-3 text-rose-600">Surplus withheld or absorbed in hidden fees</td>
                      <td className="p-3 text-emerald-700 font-semibold">File complaint with Banking Ombudsman.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Judicial Precedents: Landmark High Court & Apex Rulings */}
            <section id="judicial-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Judicial Precedents: Landmark High Court &amp; Apex Rulings
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts protect borrowers from unfair gold auctions. In Prabhat Bank, the Allahabad High Court ruled that notice before sale is compulsory. The bank cannot skip this step using standard clauses in the loan agreement.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Bombay High Court held in Neela Ashok Rao that selling gold without notice is illegal conversion. In that case, the court ordered the bank to pay the borrower the full market value of the gold.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court ruled in the Satishchandra case that loan default is purely a civil matter. It is not cheating or a criminal breach of trust. Recovery agents cannot threaten you with police action or arrest.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Gold Loan Shortfall Defense Map
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual guide outlines your legal defenses. It details the step-by-step path to audit auction records, challenge notice defects, and settle debts under RBI rules.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/gold-loan-auction-shortfall-recovery-notice-legal-defense.jpg"
                    alt="Gold Loan Auction Shortfall Notice Legal Defense and RBI Guidelines"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Gold Loan Defense Blueprint • Section 176 Contract Act Compliant</span>
                  <a
                    href="/images/infographics/gold-loan-auction-shortfall-recovery-notice-legal-defense.jpg"
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
                6. Step-by-Step SOP: 6-Stage Shortfall Defense Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you receive an auction shortfall notice, follow these six clear steps. This protocol helps you protect your rights and reach an affordable settlement.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Demand Complete Auction Records in Writing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never accept verbal demands from recovery agents. Send a formal letter asking for certified copies of the auction notice, registered post receipts, and bid sheets.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Check the 30-Day Notice &amp; Newspaper Ads
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Verify that the lender sent a 30-day registered notice before the auction. Confirm that public notices were published in two local newspapers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Inspect Reserve Price &amp; Gold Weight Cuts
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Compare the reserve price with 30-day average gold rates. Check if the lender made unfair deductions for stone weight or purity without proof.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Send a Formal Advocate Legal Reply
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Have an experienced advocate send a legal reply citing Section 176 of the Contract Act. Assert your counter-claim for damages due to undervaluation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Eliminate Stacked Penal Charges
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under RBI fair lending rules, banks cannot compound penal interest. Demand the removal of all extra interest charges from the claimed amount.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Negotiate a Full One-Time Settlement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Because the security is gone, the claim is an unsecured debt. Work with CredSettle to negotiate a 50% to 80% waiver and secure an official No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Defense: Criminal Intimidation Protections */}
            <section id="statutory-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Defenses &amp; Borrower Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Defense: Criminal Intimidation Protections
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Collection agents often use threats to frighten borrowers. You have strong protections under Indian law. Section 351 of BNS makes criminal intimidation a punishable offense.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                RBI rules strictly ban recovery agents from calling at odd hours or visiting your workplace. If an agent harasses your family, you can file a police complaint immediately.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 351 &amp; 352 BNS (Criminal Threats)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Threatening a borrower with arrest or police lockup over an auction deficit is a crime. It is punishable with jail and fines.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>RBI Fair Practices Code Standards</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI rules ban agents from calling before 8 AM or after 7 PM. Agents cannot use rude words or contact your relatives.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Consumer Protection Act 2019 Remedies</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Selling gold below market rates or holding private sales is an unfair trade practice. You can file a case in consumer court.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Civil Damages for Unlawful Conversion</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the auction broke Section 176 notice rules, you can file a civil claim. You can demand full market value for your gold.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Institutional Grievance SOP */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Institutional Grievance SOP
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the lender ignores your letters, take your case higher. Start with the bank Grievance Redressal Officer. If needed, escalate to the Principal Nodal Officer and the RBI Ombudsman.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank or NBFC Grievance Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Halts collection agent visits, orders auction dossier disclosure, and reviews penal charges.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Audits Section 176 notice compliance, inspects reserve pricing, and initiates OTS negotiations.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Issues binding directions via cms.rbi.org.in, penalizes non-compliant lenders, and sets aside unlawful shortfalls.</td>
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
                9. Procedural Timeline: Pledge Default to OTS Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most gold loans follow a set timeline before auction. An account becomes overdue after 30 days. It turns into an NPA after 90 days. The lender must then give a 30-day registered auction notice.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                After the auction, the lender loses its security. The remaining debt is just an unsecured claim. Lenders know that civil cases take years. This gives you strong leverage to settle the debt for 50 to 80 percent less.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Delinquency Window</th>
                      <th className="p-3">Regulatory Asset Status</th>
                      <th className="p-3">Lender Procedural Actions</th>
                      <th className="p-3">Borrower Defensive Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Automated payment reminders and soft telephone calls.</td>
                      <td className="p-3">Review pawn ticket details and verify contracted interest terms.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Formal demand letters warning of potential auction action.</td>
                      <td className="p-3">Check gold market price movements and track equity cushion.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Pre-NPA default warnings and collection calls.</td>
                      <td className="p-3">Instruct lender in writing to serve all notices by registered post.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA &amp; Notice</td>
                      <td className="p-3">Loan classified NPA; mandatory 30-day registered auction notice.</td>
                      <td className="p-3">Scrutinize auction notice date, venue, and reserve price formula.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 150</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Public Auction</td>
                      <td className="p-3">Public auction conducted; sale proceeds credited to loan ledger.</td>
                      <td className="p-3">Obtain copies of newspaper advertisements and bid registers.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 5 and Beyond</td>
                      <td className="p-3 font-mono text-[11px]">Deficiency Claim</td>
                      <td className="p-3">Shortfall recovery notice or legal demand dispatched.</td>
                      <td className="p-3 font-bold text-slate-900">Negotiate a 50% to 80% OTS waiver with CredSettle.</td>
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
                10. Specialized Scenarios: Heirloom Gold &amp; Spousal Debts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Special rules apply to family gold and inherited jewelry. Stridhan belongs only to the woman who owns it. A husband cannot pledge his wife gold without her clear written consent.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Legal heirs are not personally liable for a deceased relative debt. They only pay up to the value of what they inherit. Also, civil claims expire after three years under the Limitation Act.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Pledged Ancestral &amp; Stridhan Ornaments
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Stridhan belongs to the wife. If pledged without her consent, she can challenge the auction in court and demand return of the gold.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Deceased Borrower &amp; Legal Heir Liability
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Legal heirs do not pay loan debts from their personal money. Liability is strictly limited to the value of inherited assets.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Claims Barred Beyond 3-Year Limitation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders cannot sue after three years from the auction date. Under the Limitation Act, time-barred shortfall notices cannot be enforced.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <CreditCard className="w-4 h-4 text-amber-600" />
                  <h3 className="text-sm font-bold text-slate-900">
                    Disputed Carat Purity &amp; Melt Deductions
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If an NBFC downgrades gold purity at auction without an assay test, the sale can be challenged for unfair business practices.
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
                Frequently Asked Questions: Gold Loan Auction Shortfall
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers addressing key questions about gold loan shortfall notices, Section 176 rights, RBI auction directives, and debt settlement.
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
                  <strong>Indian Contract Act, 1872:</strong> Section 176 (Pawnee rights upon default and mandatory requirement of reasonable notice before sale).
                </li>
                <li>
                  <strong>Reserve Bank of India Master Directions on Gold Loans:</strong> Guidelines on mandatory 30-day notice, public newspaper ads, local auction venue, and reserve price formula.
                </li>
                <li>
                  <strong>Limitation Act, 1963:</strong> Article 113 &amp; Article 55 (Three-year limitation period for recovering deficiency from pledged asset sale).
                </li>
                <li>
                  <strong>Reserve Bank of India Fair Lending Practice Circular (2023):</strong> Prohibition on capitalization and compounding of penal charges in loan accounts.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(47) (Unfair trade practices in asset auctions and deficiency of banking services).
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> Prabhat Bank Ltd. v. Babu Ram (AIR 1966 All 134) and Satishchandra Ratanlal Shah v. State of Gujarat (2019).
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
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.ibbi.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Insolvency and Bankruptcy Board</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Agent Guidelines
                  </Link>
                  <Link href="/can-bank-file-section-420-cheating-case-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 420 Loan Default Rules
                  </Link>
                  <Link href="/section-60-cpc-assets-property-exempt-from-bank-attachment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 60 CPC Exemptions
                  </Link>
                  <Link href="/rbi-guidelines-on-penal-charges-in-loan-accounts" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Penal Charges Guidelines
                  </Link>
                  <Link href="/willful-defaulter-notice-rbi-rules-legal-defense-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Willful Defaulter Defense
                  </Link>
                  <Link href="/garnishee-order-bank-account-freeze-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Garnishee Order Defense
                  </Link>
                  <Link href="/can-bank-deduct-money-from-another-account" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Right of Set-Off
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF &amp; Gratuity Seizure Rules
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
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
                Expert in banking compliance, pawnor rights under the Contract Act, RBI gold auction guidelines, and NPA compromise settlements with extensive experience defending borrowers against unlawful recovery notices.
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
                  CONFIDENTIAL LEGAL DEFENSE
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Received Gold Loan Shortfall Notice?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior legal resolution team audits auction procedural compliance, issues formal legal replies under Section 176, and negotiates up to 80% shortfall waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Defend Shortfall Notice Now
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
                  <span>Section 176 Protection • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 176 Audit:</strong> Verification of mandatory 30-day notice.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Reserve Price Scrutiny:</strong> Identification of gold undervaluation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Penal Interest Removal:</strong> Strip stacked compounding fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Formal Settlement Closure:</strong> Official bank No Dues Certificate.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice for Loan
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Advocate notice reply steps &rarr;</span>
                </Link>

                <Link
                  href="/can-bank-file-section-420-cheating-case-for-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank File Section 420 Cheating Case?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Civil vs criminal loan default &rarr;</span>
                </Link>

                <Link
                  href="/rbi-guidelines-on-penal-charges-in-loan-accounts"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Penal Charges Guidelines
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Penal interest compounding ban &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
