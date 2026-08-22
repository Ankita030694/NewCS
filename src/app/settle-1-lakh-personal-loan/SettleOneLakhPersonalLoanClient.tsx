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
  CreditCard,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  BadgeAlert,
  Landmark,
  Calculator,
  Percent,
  ReceiptText
} from 'lucide-react';

export default function SettleOneLakhPersonalLoanClient() {
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
    { id: 'can-you-settle-1-lakh', label: '1. Can You Settle a ₹1 Lakh Loan?' },
    { id: 'settlement-amount-breakdown', label: '2. Settlement Formula & Numbers' },
    { id: 'status-comparison-table', label: '3. Resolution Option Comparison' },
    { id: 'scoring-math-analytics', label: '4. CIBIL Scoring Math & Penalties' },
    { id: 'infographic-overview', label: 'Visual 6-Step Settlement Blueprint' },
    { id: 'step-by-step-settlement-sop', label: '5. 6-Stage Settlement SOP' },
    { id: 'formal-legal-notice-defense', label: '6. Statutory Notice Defense' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance Matrix' },
    { id: 'chronological-resolution-milestones', label: '8. Timelines & Milestones' },
    { id: 'specialized-loan-scenarios', label: '9. Fintech Apps & Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can I settle a ₹1 lakh personal loan in India?',
      a: 'Yes, you can settle a ₹1 lakh personal loan in India through a formal One-Time Settlement (OTS) with your lending bank or NBFC. Lenders are often willing to settle smaller personal loans when a borrower demonstrates legitimate financial hardship (such as job loss, medical emergency, or severe income drop), typically accepting between ₹30,000 to ₹50,000 (a 50% to 70% waiver) to close the account rather than spending money on protracted litigation.'
    },
    {
      q: 'How much money is required to settle a ₹1 lakh personal loan?',
      a: 'For an unsecured personal loan of ₹1 lakh, banks and NBFCs generally settle between 30% to 50% of the outstanding principal balance, which translates to ₹30,000 to ₹50,000. All accumulated penal interest, overdue charges, and late fees (which may have inflated the total claimed amount to ₹1.3–₹1.5 lakhs) are routinely waived during a negotiated compromise settlement.'
    },
    {
      q: 'Why do banks agree to settle smaller personal loans like ₹1 lakh?',
      a: 'Banks and NBFCs prefer settling ₹1 lakh loans because legal recovery costs—such as advocate fees, court fees, and arbitration administration charges—can quickly exceed ₹25,000 to ₹40,000, making formal litigation economically unviable for smaller ticket sizes. Recovering ₹35,000 to ₹50,000 upfront via OTS allows the lender to write off bad debt, recover liquidity, and avoid provisioning penalties under RBI provisioning norms.'
    },
    {
      q: 'What is the step-by-step process to settle a ₹1 lakh personal loan?',
      a: 'The process involves: (1) Defaulting past 90 days to NPA classification, (2) Submitting a formal Hardship Letter along with financial evidence (salary reduction, medical bills, bank statements), (3) Negotiating with the bank\'s internal recovery or settlement committee for a 50%–70% waiver, (4) Obtaining a formal, written Settlement Sanction Letter with explicit payment terms, (5) Paying the agreed settlement sum directly into your loan account, and (6) Collecting an official No Dues Certificate (NDC).'
    },
    {
      q: 'How does settling a ₹1 lakh loan impact my CIBIL score?',
      a: 'When a ₹1 lakh loan is settled, the credit bureau status changes to "Settled" (or "Post-Write-Off Settled"), which typically reduces your CIBIL score by 75 to 120 points. While this status stays on your credit report for up to 7 years under CICRA 2005 regulations, it is far less damaging than an active, ongoing default or "Suit Filed" status, and you can subsequently rebuild your score to 750+ within 12 to 24 months using secured credit products or by paying the remaining waiver amount later to convert the status to "Closed".'
    },
    {
      q: 'Can a bank file a criminal case or arrest me for defaulting on a ₹1 lakh personal loan?',
      a: 'No. An unsecured personal loan default is strictly a civil dispute arising from breach of contract under the Indian Contract Act, 1872. Lenders cannot file criminal FIRs or have you arrested for non-payment. However, if your automated NACH mandate or EMI cheque bounced, the lender can issue a legal notice under Section 25 of the Payments and Settlement Systems (PSS) Act, 2007 or Section 138 of the Negotiable Instruments Act, which are quasi-criminal proceedings that can be settled by paying the compromise amount.'
    },
    {
      q: 'Can recovery agents harass or visit my home for a ₹1 lakh loan default?',
      a: 'No. Under the RBI Master Direction on Fair Practices Code and Guidelines on Recovery Agents (2022/2026), recovery agents are strictly prohibited from using abusive language, visiting your residence before 8:00 AM or after 7:00 PM, calling friends/family from your contact list, or making public threats. Any such violation can be escalated to the bank\'s Principal Nodal Officer and the RBI Integrated Ombudsman (cms.rbi.org.in).'
    },
    {
      q: 'What is the difference between Loan Settlement and Loan Restructuring for ₹1 lakh?',
      a: 'Loan Restructuring involves modifying the original loan terms—such as extending the repayment tenure from 2 years to 4 years or lowering the EMI—to allow you to repay 100% of the principal and interest without damaging your CIBIL score. Loan Settlement (OTS) involves closing the loan permanently by paying a lump-sum fraction (e.g., ₹35,000–₹50,000) with a CIBIL remark of "Settled".'
    },
    {
      q: 'Can digital lending apps (like KreditBee, Navi, MoneyTap) settle a ₹1 lakh loan?',
      a: 'Yes. Registered fintech NBFC digital lending apps routinely settle defaulted loans. In fact, fintech platforms frequently offer expedited digital settlement schemes during quarterly financial closing cycles to clean their balance sheets, often agreeing to 50%–60% waivers when represented by professional debt resolution negotiators.'
    },
    {
      q: 'How do I get an official No Dues Certificate (NDC) after settling my ₹1 lakh loan?',
      a: 'Once you deposit the agreed settlement amount directly to the bank via RTGS, NEFT, or net banking, the lender is statutorily mandated under RBI guidelines to issue a formal No Dues Certificate (NDC) or No Objection Certificate (NOC) within 21 to 30 days, confirming that all contractual obligations are fully extinguished and no further claims remain.'
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Settle 1 Lakh Personal Loan
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Defaulting on a smaller ₹1 Lakh personal loan? Discover how to negotiate a quick settlement, secure a 50% to 70% waiver, stop recovery harassment, and protect your CIBIL score.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Calculate Your ₹1 Lakh Settlement Waiver</span>
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
                  <span>Small-Ticket Settlement Rights</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by RBI Fair Practices Code &amp; SARFAESI/CICRA Framework.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: SETTLING A ₹1 LAKH PERSONAL LOAN</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">50% to 70% Principal Discount Potential:</strong> For small-ticket unsecured loans of ₹1 Lakh, banks and NBFCs willingly negotiate settlements between ₹30,000 to ₹50,000 because formal litigation costs (legal notices, advocate fees, court expenses) often exceed ₹35,000.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">100% Penal Interest &amp; Late Fee Waiver:</strong> Lenders routinely capitalize overdue penal charges at 24% to 36% p.a., inflating a ₹1 Lakh loan to ₹1.4 Lakhs. A formal compromise settlement automatically strips 100% of these predatory late fees.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Strict Civil Nature with Zero Criminal Arrest Risk:</strong> Defaulting on an unsecured personal loan is strictly a civil breach of contract under the Indian Contract Act, 1872. Banks cannot send police, obtain arrest warrants, or jail borrowers for genuine financial defaults.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Statutory Protection from Recovery Agent Harassment:</strong> Under RBI Master Directions (2022/2026), recovery agents cannot make abusive calls, contact relatives/contacts, or visit outside 8 AM – 7 PM. Violations trigger immediate penalties via the RBI Integrated Ombudsman.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">CIBIL Restoration Pathway within 12–24 Months:</strong> While a settlement tags the loan as &quot;Settled&quot; in CIBIL, this stops continuous monthly negative DPD reporting and allows borrowers to rebuild credit scores back to 750+ within 12 to 24 months through disciplined secured credit tools.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Can You Settle a ₹1 Lakh Personal Loan? */}
            <section id="can-you-settle-1-lakh" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Small-Ticket Debt Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Can You Settle a ₹1 Lakh Personal Loan? The Small-Ticket Debt Reality
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers in India mistakenly assume that debt settlement is a mechanism reserved exclusively for massive corporate insolvencies or multi-crore business defaults. In reality, <strong>small-ticket unsecured personal loans—specifically in the ₹50,000 to ₹1,50,000 range—represent the single largest volume of One-Time Settlements (OTS) processed by commercial banks and Non-Banking Financial Companies (NBFCs) across India</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an individual defaults on a ₹1 Lakh personal loan due to legitimate hardship—such as unexpected job loss, severe medical hospitalization, salary reductions, or small business collapse—the loan follows a strict institutional lifecycle governed by Reserve Bank of India (RBI) prudential norms:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-blue-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Days 1 to 90: SMA Classification</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The loan is tracked under Special Mention Account (SMA-0, SMA-1, SMA-2) stages. Tele-calling recovery desks apply aggressive pressure to extract overdue EMIs and late fees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-amber-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Day 91+: Non-Performing Asset (NPA)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI guidelines, the account is classified as a Sub-Standard Non-Performing Asset (NPA). The lender is legally forced to make mandatory capital provisioning on its balance sheet.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Days 120+: Compromise OTS Window</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank&apos;s internal recovery committee recognizes that pursuing court litigation for ₹1 Lakh costs more than the loan itself, opening the window for massive 50% to 70% settlement waivers.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/70 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>Why Lenders Prefer to Settle Small Loans:</strong> Filing a Summary Suit under Order 37 of the Code of Civil Procedure (CPC) or initiating formal arbitration under Section 21 of the Arbitration Act requires substantial retainers for advocates, arbitral tribunal sitting fees, court stamp duties, and process service costs. For a ₹1 Lakh default, these legal expenses can quickly cross ₹30,000 to ₹50,000. Consequently, recovering ₹35,000 to ₹50,000 immediately through a negotiated compromise is mathematically superior for the bank&apos;s recovery balance sheet.
                </p>
              </div>
            </section>

            {/* SECTION 2: The Financial Breakdown: Settlement Formula & Numbers */}
            <section id="settlement-amount-breakdown" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calculator className="w-4 h-4 text-[#1886ff]" />
                <span>Mathematical Settlement Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. The Financial Breakdown: How Much to Pay for a ₹1 Lakh Settlement?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you default on a ₹1,00,000 personal loan, banks automatically add aggressive compound penal interest, bounce charges, cheque return fees, and collection expenses. By the time 6 to 9 months pass, the lender&apos;s demand notice might claim ₹1,35,000 to ₹1,60,000.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the mathematical dissection between <em>Principal Balance</em>, <em>Contractual Interest</em>, and <em>Artificial Penal Add-ons</em> is the key to negotiating the lowest possible settlement figure:
              </p>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <ReceiptText className="w-4 h-4 text-[#1886ff]" />
                    <span>Anatomy of a ₹1 Lakh Personal Loan Default Claim</span>
                  </h3>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    Typical 180-Day NPA Case
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Original Principal Disbursed:</span>
                    <span className="font-semibold text-slate-900">₹1,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Principal Repaid Prior to Default (e.g. 4 EMIs):</span>
                    <span className="font-semibold text-emerald-600">- ₹18,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600 font-bold">True Outstanding Principal at Default:</span>
                    <span className="font-bold text-slate-900">₹82,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Contractual Interest Due (16% p.a.):</span>
                    <span className="font-semibold text-slate-700">₹9,840</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Compounded Penal Surcharge (24% p.a. monthly):</span>
                    <span className="font-semibold text-red-600">+ ₹14,760</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">NACH Bounce Fees, GST &amp; Collection Overheads:</span>
                    <span className="font-semibold text-red-600">+ ₹8,400</span>
                  </div>
                  <div className="flex justify-between items-center py-2 bg-slate-50 px-3 rounded-lg font-bold">
                    <span className="text-slate-800">Total Demanded by Bank Recovery Desk:</span>
                    <span className="text-red-700 text-sm sm:text-base">₹1,15,000 – ₹1,35,000</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200">
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-800 block">
                        CredSettle Professional Settlement Target
                      </span>
                      <p className="text-xs text-emerald-900 mt-0.5">
                        Targeting 35% to 50% of the true principal balance with 100% penal fee waiver.
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg sm:text-2xl font-black text-emerald-700">
                        ₹30,000 – ₹42,000
                      </span>
                      <span className="block text-[10px] text-emerald-800 font-bold">
                        (60% to 75% Total Claim Discount)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Status Comparison Table */}
            <section id="status-comparison-table" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Resolution Pathways Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparative Resolution Matrix: Settlement vs. Restructuring vs. Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Evaluate the five primary legal and financial routes available when managing a defaulted ₹1 Lakh personal loan in India:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Resolution Option</th>
                      <th className="p-3.5 font-bold">Upfront Cash Needed</th>
                      <th className="p-3.5 font-bold">CIBIL Status Impact</th>
                      <th className="p-3.5 font-bold">Legal Harassment Risk</th>
                      <th className="p-3.5 font-bold">Resolution Timeline</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Strategic Verdict</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">₹30,000 – ₹45,000 (Lump-sum)</td>
                      <td className="p-3.5">&quot;Settled&quot; (-75 to -120 pts)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Eliminated (NDC Issued)</td>
                      <td className="p-3.5">30 to 60 Days</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Best for immediate financial relief and closing bad debt</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Loan Restructuring / Tenure Stretch</td>
                      <td className="p-3.5 text-slate-800 font-medium">₹1,00,000 + Future Interest</td>
                      <td className="p-3.5">&quot;Restructured&quot; (Mild dip)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Eliminated while EMIs paid</td>
                      <td className="p-3.5">24 to 48 Months</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Suitable only if you have stable, predictable monthly income</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">National Lok Adalat Settlement</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">₹35,000 – ₹50,000 (On the spot)</td>
                      <td className="p-3.5">&quot;Settled via Lok Adalat&quot;</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Legally Closed (Sec 21 LSA)</td>
                      <td className="p-3.5">1 Day (Sitting date)</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Highly effective if your bank issues a Lok Adalat notice</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Prolonged Default / Inaction</td>
                      <td className="p-3.5 text-red-700 font-semibold">₹0 upfront, but claims grow</td>
                      <td className="p-3.5 text-red-700 font-bold">&quot;Written Off / Suit Filed&quot; (-200 pts)</td>
                      <td className="p-3.5 text-red-700 font-bold">Severe (Calls, notices, visits)</td>
                      <td className="p-3.5">Indefinite (Years)</td>
                      <td className="p-3.5 text-red-600 font-semibold">Worst approach; destroys creditworthiness across all lenders</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Sale to Asset Reconstruction Co. (ARC)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">₹25,000 – ₹40,000</td>
                      <td className="p-3.5">&quot;Sold to ARC / Settled&quot;</td>
                      <td className="p-3.5 text-amber-700 font-semibold">Moderate (ARC follow-ups)</td>
                      <td className="p-3.5">6 to 12 Months</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">High discount potential as ARCs buy debt at 20-30% face value</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical Scoring Math & CIBIL Analytics Card */}
            <section id="scoring-math-analytics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>CIBIL Algorithm &amp; Scoring Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Technical CIBIL Scoring Math: The Mathematical Impact of ₹1 Lakh Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                How exactly does credit bureau scoring work when a ₹1 Lakh loan is settled versus left in default? Credit bureaus in India (TransUnion CIBIL, Experian, CRIF High Mark, Equifax) compute credit scores using proprietary algorithms weighted across specific parameters:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Percent className="w-4 h-4 text-[#1886ff]" />
                    Credit Bureau Algorithm Factor Weights
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Payment History (DPD Records):</span>
                      <span className="font-bold text-slate-900">35% Weightage</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Credit Utilization Ratio (CUR):</span>
                      <span className="font-bold text-slate-900">30% Weightage</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Credit Age &amp; History Length:</span>
                      <span className="font-bold text-slate-900">15% Weightage</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Credit Mix (Secured vs. Unsecured):</span>
                      <span className="font-bold text-slate-900">10% Weightage</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Hard Loan Inquiries:</span>
                      <span className="font-bold text-slate-900">10% Weightage</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Default Impact on 35% Factor:</span>
                      <span className="text-red-700">Immediate -80 to -150 Points</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-600" />
                    Settlement vs Default Recovery Timeline
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Ongoing Default (Unsettled):</span>
                      <span className="font-bold text-red-600">DPD accumulates indefinitely (900+ DPD)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Settlement Status Applied:</span>
                      <span className="font-bold text-amber-600">DPD stops immediately; account marked &quot;Settled&quot;</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Score Recovery Stage 1 (Months 1–6):</span>
                      <span className="font-bold text-slate-800">+25 to +40 Points with Secured FD Card</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Score Recovery Stage 2 (Months 7–18):</span>
                      <span className="font-bold text-slate-800">+50 to +80 Points with pristine payment cycle</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Target CIBIL at Month 24:</span>
                      <span className="text-emerald-700">750+ (Prime Borrower Territory)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200/70 p-4 rounded-xl text-xs md:text-sm text-emerald-950 leading-relaxed">
                <p>
                  <strong>The CIBIL Conversion Option:</strong> Under Credit Information Companies (Regulation) Act, 2005 (CICRA §21), you also retain the right to approach the bank in future (once your finances recover) to pay the balance waived amount and convert the CIBIL tag from <em>&quot;Settled&quot;</em> to <em>&quot;Closed&quot;</em>, permanently removing any settlement stigma.
                </p>
              </div>
            </section>

            {/* SECTION 5: Embedded 16:9 Infographic Banner */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Resolution Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: ₹1 Lakh Personal Loan Settlement Roadmap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Study this comprehensive 6-stage roadmap detailing the entire trajectory from initial loan default to hardship evaluation, compromise negotiation, formal sanction, direct payment, and credit rehabilitation:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/settle-1-lakh-personal-loan.jpg"
                    alt="1 Lakh Personal Loan Settlement Roadmap and Process Flow Diagram India"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Small-Ticket Loan Settlement Blueprint • RBI Compliant Resolution</span>
                  <a
                    href="/images/infographics/settle-1-lakh-personal-loan.jpg"
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

            {/* SECTION 6: 6-Stage Standard Operating Procedure (SOP) */}
            <section id="step-by-step-settlement-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Resolution SOP</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Standard Operating Procedure (SOP): 6 Stages to Settle a ₹1 Lakh Personal Loan
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this sequential, battle-tested standard operating procedure executed by CredSettle professionals to ensure maximum waiver and complete legal safety:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 1–15</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Loan Audit &amp; Elimination of Bogus Penal Charges
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Request a certified Statement of Account (SOA) from the lender. Reconcile all historical EMIs paid, isolate the true remaining principal balance from compounding penal fees, and calculate your target settlement bracket (30% to 50% of the actual remaining principal).
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 16–30</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Hardship Documentation &amp; Anti-Harassment Notice
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Compile authentic documentation substantiating your financial distress—such as pink slips, medical discharge summaries, GST returns showing business downturn, or bank statements. If third-party recovery agents engage in unauthorized contact or harassment, serve an anti-harassment cease-and-desist notice under RBI Fair Practices Code.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 31–45</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Formal Hardship Letter &amp; OTS Proposal Submission
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Submit a formal One-Time Settlement (OTS) proposal directly to the bank&apos;s Legal Recovery Desk and Credit Committee. Clearly outline that continuing default is due to genuine inability rather than willful default, and offer a specific lump-sum settlement amount (e.g., ₹32,000 for a ₹1 Lakh loan).
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 46–60</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Bilateral Negotiation with Internal Settlement Committee
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Engage in structured counter-negotiations. When the bank counter-offers 70% or 80%, present your documented financial insolvency. Negotiators leverage bank quarter-end pressure (March, June, September, December) to push the final approved settlement figure down to 35%–45% of principal.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 61–75</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Vetting the Written Settlement Letter &amp; Direct Bank Remittance
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 font-bold">NEVER pay without a formal Settlement Sanction Letter.</strong> Verify that the letter is on official bank letterhead, signed by an authorized manager, explicitly specifies your loan account number, states the exact settlement amount, mentions &quot;Full and Final Settlement&quot;, and gives a clear payment deadline. Remit funds strictly into your loan account via RTGS/NEFT.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 76–90</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    No Dues Certificate (NDC) Retrieval &amp; CIBIL Record Update
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Collect the official No Dues Certificate (NDC) or No Objection Certificate (NOC) within 21 to 30 days of payment. Verify after 45 days that CIBIL, Experian, and CRIF High Mark reflect an outstanding balance of ₹0 with the status updated from &quot;Default/Overdue&quot; to &quot;Settled&quot;.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Formal Legal Notice Defense & Statutory Framework */}
            <section id="formal-legal-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Notice Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Formal Legal Notice Defense &amp; Statutory Legal Framework
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a ₹1 Lakh loan enters default, lenders frequently dispatch alarming legal notices to create panic. Understanding the exact statutory frameworks governing these notices ensures you respond with composure and legal precision:
              </p>

              <div className="bg-slate-900 text-slate-100 p-5 md:p-6 rounded-2xl font-mono text-xs space-y-3 overflow-x-auto shadow-md">
                <div className="text-emerald-400 font-bold flex items-center gap-2">
                  <span>[STATUTORY NOTICE CLASSIFICATION &amp; BORROWER LEGAL SAFEGUARDS]</span>
                </div>
                <div className="border-t border-slate-800 pt-2 space-y-2 text-slate-300">
                  <p>
                    <span className="text-yellow-400">1. SECTION 25 PSSA 2007 (NACH / ECS DISHONOUR):</span>
                    <br />
                    Quasi-criminal notice issued when automated EMI auto-debit bounces due to insufficient funds.
                    <br />
                    <span className="text-emerald-300">Defensive Remedy:</span> Reply within 15 days documenting financial distress, lack of mens rea (fraudulent intention), and formal offer of compromise OTS.
                  </p>
                  <p>
                    <span className="text-yellow-400">2. SECTION 138 NEGOTIABLE INSTRUMENTS ACT (CHEQUE BOUNCE):</span>
                    <br />
                    Applicable only if a physical security cheque was presented and returned dishonoured.
                    <br />
                    <span className="text-emerald-300">Defensive Remedy:</span> Compoundable statutory offense. Executing an OTS automatically quashes Section 138 complaints under Section 147 NI Act.
                  </p>
                  <p>
                    <span className="text-yellow-400">3. SECTION 21 ARBITRATION &amp; CONCILIATION ACT 1996:</span>
                    <br />
                    Notice invoking arbitration clause.
                    <br />
                    <span className="text-emerald-300">Defensive Remedy:</span> Supreme Court precedents in <em>Perkins Eastman (2020)</em> and <em>TRF Ltd. (2017)</em> prohibit unilateral arbitrator appointments by banks. Challenge arbitrator under Section 12(5).
                  </p>
                  <p>
                    <span className="text-yellow-400">4. SECTION 73/74 INDIAN CONTRACT ACT 1872:</span>
                    <br />
                    Standard civil notice demanding principal + interest.
                    <br />
                    <span className="text-emerald-300">Defensive Remedy:</span> Pure civil dispute with zero arrest powers; grounds for direct bilateral settlement negotiation.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                  Statutory Rights under RBI Fair Practices Code
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Under the Reserve Bank of India Master Directions, commercial banks and NBFCs are strictly held accountable for the conduct of their recovery agents. Recovery personnel are legally prohibited from:
                </p>
                <ul className="list-disc pl-5 text-xs md:text-sm text-slate-600 space-y-1.5">
                  <li>Calling before 8:00 AM or after 7:00 PM in the evening.</li>
                  <li>Accessing your phone contacts or calling family, employers, or friends.</li>
                  <li>Using intimidating, abusive, or defamatory language over phone or WhatsApp.</li>
                  <li>Visiting your workplace or residence without prior written notice and valid bank ID.</li>
                  <li>Misrepresenting themselves as police officers, court bailiffs, or criminal investigators.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. The 3-Tier Escalation Matrix for Unfair Recovery &amp; Dispute Resolution
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the lending bank or its collection agents ignore your hardship notices or engage in coercive recovery tactics for a ₹1 Lakh loan, escalate through this structured 3-tier hierarchy:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Branch Manager &amp; NBFC Grievance Desk
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Response: 7–10 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Formal Written Grievance &amp; OTS Submission
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Submit a formal email and speed post letter to the Branch Manager and the internal Grievance Redressal Officer (GRO) citing your loan account number, documented hardship, and formal settlement offer.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: Principal Nodal Officer (PNO) of the Bank
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Response: 14–21 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Escalation for Recovery Harassment &amp; Excessive Penalties
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If Level 1 fails to respond within 30 days or rejects reasonable settlement terms while recovery agents continue harassment, file a formal complaint before the bank&apos;s Principal Nodal Officer (PNO).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: RBI Integrated Ombudsman (CMS Portal)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Response: 30 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Statutory Regulatory Complaint on cms.rbi.org.in
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If the bank fails to resolve your grievance within 30 days or violates the RBI Fair Practices Code, lodge a formal regulatory complaint on the <strong>RBI Integrated Ombudsman Portal (cms.rbi.org.in)</strong>. The Ombudsman has statutory authority to award compensation up to ₹20 Lakhs for mental harassment and direct fair settlement terms.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Milestone Resolution Table */}
            <section id="chronological-resolution-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Chronological Timelines &amp; Milestone Resolution Table (Day 0 to Month 6)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the chronological milestones of a ₹1 Lakh loan default allows you to plan your defense, manage cash reserves, and time your settlement negotiations for maximum discount:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Timeline Phase</th>
                      <th className="p-3.5 font-bold">Institutional Status</th>
                      <th className="p-3.5 font-bold">Bank Recovery Action</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Borrower Strategic Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3.5">SMA-0 / Overdue</td>
                      <td className="p-3.5">Automated SMS, emails, tele-calling reminders</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Audit loan SOA and assess true financial liquidity</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Day 31 to 90</td>
                      <td className="p-3.5">SMA-1 &amp; SMA-2</td>
                      <td className="p-3.5">Intensified collection calls, field agent visit notices</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Compile hardship dossier; issue anti-harassment notice if needed</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3.5">NPA (Sub-Standard)</td>
                      <td className="p-3.5">Loan recall notice / Section 25 NACH bounce notice</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Submit formal OTS Hardship Proposal for 30%–45% principal</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Months 4 to 5</td>
                      <td className="p-3.5">Compromise OTS Window</td>
                      <td className="p-3.5">Bank Settlement Committee reviews compromise proposal</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Execute bilateral negotiation; secure written OTS Sanction Letter</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Month 6</td>
                      <td className="p-3.5">Account Closed / Settled</td>
                      <td className="p-3.5">Issuance of official No Dues Certificate (NDC)</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Remit agreed OTS sum directly; obtain NDC; initiate CIBIL rebuild</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-loan-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: Digital Fintech Apps, Credit Cards &amp; ARCs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Small-ticket loan defaults manifest across various financial structures with specific nuances:
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#1886ff]" />
                    Fintech NBFC Digital Instant Loan Apps (KreditBee, Navi, MoneyTap, PaySense)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Digital loan apps disburse smaller loans instantly but often deploy aggressive automated collection bots, WhatsApp reminders, and Online Dispute Resolution (ODR) notices. Because fintech NBFCs maintain high volume and rapid balance-sheet turnover, their algorithms frequently generate automatic 40% to 60% settlement discounts at the end of financial quarters (March, September).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-[#1886ff]" />
                    Multiple Small Micro-Loans Totaling ₹1 Lakh
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Borrowers frequently end up with 3 to 5 smaller loans (e.g. ₹20,000 + ₹30,000 + ₹50,000 across different apps). Attempting to juggle fragmented repayments wastes scarce capital. A coordinated multi-loan debt settlement strategy pools your funds, prioritizes the most aggressive lenders first, and executes structured settlements across all accounts simultaneously.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Credit Card Personal Loans vs. Standalone Personal Loans
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If your ₹1 Lakh debt is a pre-approved &quot;Jumbo Loan&quot; or &quot;Loan on Credit Card&quot;, the bank may block your underlying credit card and demand the full card limit plus the loan balance. During settlement negotiations, the settlement agreement must explicitly cover both the card and the loan to ensure total closure and issuance of an all-encompassing No Dues Certificate.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Loans Sold to Asset Reconstruction Companies (ARCs)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When traditional banks write off small ₹1 Lakh loans, they bundle them into portfolios and sell them to ARCs (such as CFM ARC, Phoenix ARC, or ARCIL) at 20% to 30% of face value under Section 5 of the SARFAESI Act. ARCs possess enormous margin flexibility, making them open to deep 60% to 75% compromise settlements.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: Frequently Asked Questions Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions on Settling a ₹1 Lakh Personal Loan
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to view detailed legal and financial answers verified by our debt resolution professionals:
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#1886ff] transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
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

            {/* SECTION 13: Regulatory Sources & Authorities */}
            <section id="regulatory-sources" className="scroll-target space-y-5 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Official Regulatory Citations &amp; Legal References
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  The statutory frameworks, dispute procedures, and debt relief mechanisms referenced in this guide are directly anchored in official Indian banking enactments and Reserve Bank of India Master Directions:
                </p>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc pl-5">
                <li>
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Reserve Bank of India (RBI):</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>{' '}
                  Master Direction on Fair Practices Code for Lenders (Guidelines on Recovery Agents and Grievance Redressal, Updated 2026).
                </li>
                <li>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Reserve Bank - Integrated Ombudsman Scheme, 2021:</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>{' '}
                  Statutory Grievance Redressal Mechanism for Commercial Banks and NBFCs (
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-mono text-xs"
                  >
                    cms.rbi.org.in
                  </a>
                  ).
                </li>
                <li>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Credit Information Companies (Regulation) Act, 2005 (CICRA):</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>{' '}
                  Section 21 regarding Borrower Rights, Credit Dispute Resolution, and Bureau Reporting.
                </li>
                <li>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Payments and Settlement Systems Act, 2007 (PSSA):</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>{' '}
                  Section 25 regarding Dishonour of Electronic Funds Transfer and NACH Mandates.
                </li>
                <li>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Indian Contract Act, 1872:</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>{' '}
                  Sections 73 and 74 regarding Breach of Contract and Civil Monetary Compensation.
                </li>
              </ul>

              {/* 5 Official Outbound Authority Link Badges */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-800 block mb-3 uppercase tracking-wider">
                  Official Outbound Authority Portals &amp; Statutory Registers:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs hover:shadow-sm transition-all flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#1886ff] group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Landmark className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                      <span className="truncate">RBI Official Portal (rbi.org.in)</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff] flex-shrink-0 ml-1" />
                  </a>

                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs hover:shadow-sm transition-all flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#1886ff] group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="truncate">RBI Integrated Ombudsman (CMS)</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff] flex-shrink-0 ml-1" />
                  </a>

                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs hover:shadow-sm transition-all flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#1886ff] group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <TrendingUp className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                      <span className="truncate">TransUnion CIBIL Official</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff] flex-shrink-0 ml-1" />
                  </a>

                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs hover:shadow-sm transition-all flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#1886ff] group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Scale className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                      <span className="truncate">India Code Statutory Repository</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff] flex-shrink-0 ml-1" />
                  </a>

                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs hover:shadow-sm transition-all flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#1886ff] group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Gavel className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                      <span className="truncate">NALSA National Lok Adalat</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff] flex-shrink-0 ml-1" />
                  </a>

                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs hover:shadow-sm transition-all flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#1886ff] group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span className="truncate">National Cyber Crime Portal</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff] flex-shrink-0 ml-1" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Debt Resolution &amp; Legal Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/settle-2-lakh-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Settle ₹2 Lakh Loan
                  </Link>
                  <Link href="/mental-harassment-by-recovery-agents-legal-action" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    NACH Section 25 Defense
                  </Link>
                  <Link href="/section-138-cheque-bounce-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 138 Cheque Defense
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get No Dues Certificate (NOC)
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
                  </Link>
                  <Link href="/lok-adalat-personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Lok Adalat Settlement
                  </Link>
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Settlement Letter
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
                Specialized in banking compliance, small-ticket loan dispute resolution, and NPA settlement negotiations with deep expertise resolving personal loan and fintech debts across Indian banking forums.
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

            {/* Card 2: Emergency CTA Card */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL DEBT RELIEF
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Defaulting on a ₹1 Lakh Personal Loan?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution experts negotiate directly with banks to stop recovery harassment, secure a 50% to 70% loan waiver, and protect your legal rights.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Calculate Your ₹1 Lakh Settlement Waiver
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
                  <span>Direct Bank Settlement • RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked settlement fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> Zero middleman fund holding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> 100% lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated debt resolution specialists.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Debt Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/services/personal-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Personal Loan Settlement Services
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full compromise settlement blueprint &rarr;</span>
                </Link>

                <Link
                  href="/ecs-nach-bounce-legal-notice-section-25"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    NACH Bounce Section 25 Notice Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal reply and dispute guide &rarr;</span>
                </Link>

                <Link
                  href="/improve-cibil-after-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Rebuild CIBIL Score After Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Step-by-step credit repair strategy &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
