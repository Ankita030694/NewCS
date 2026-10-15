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
  Landmark
} from 'lucide-react';

export default function OdCcDefaultSettlementClient() {
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
    { id: 'understanding-od-cc', label: '1. OD & CC Facility Defaults' },
    { id: 'rbi-npa-norms', label: '2. RBI 90-Day NPA Classification Norms' },
    { id: 'security-collateral-matrix', label: '3. Primary vs Collateral Security Matrix' },
    { id: 'stock-audit-drawing-power', label: '4. Drawing Power Deficit & Stock Audits' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'sarfaesi-drt-recovery', label: '6. SARFAESI, DRT & Section 138 Actions' },
    { id: 'step-by-step-sop', label: '7. 6-Stage OD/CC Resolution Protocol' },
    { id: 'ots-negotiation-mechanics', label: '8. OTS Haircuts & Settlement Waivers' },
    { id: 'escalation-matrix', label: '9. 3-Tier Grievance Redressal Matrix' },
    { id: 'procedural-timeline', label: '10. Delinquency Timeline: SMA to OTS' },
    { id: 'specialized-business-scenarios', label: '11. CGTMSE, Partners & Directors' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'When is an Overdraft or Cash Credit (OD/CC) account officially declared an NPA?',
      a: 'Under RBI Prudential Norms on Income Recognition and Asset Classification (IRACP), an OD/CC account is classified as an NPA if it remains out of order for 90 days. An account is out of order when the balance continuously exceeds the sanctioned limit or drawing power, or when credits are insufficient to service interest debited during the previous 90-day window.'
    },
    {
      q: 'Can a bank file criminal charges if there is a shortfall in hypothecated stock during audit?',
      a: 'A stock discrepancy caused by price fluctuations, business losses, or expired inventory is a civil commercial matter, not a criminal offence. The Supreme Court in multiple rulings has held that criminal breach of trust under BNS Section 316 or cheating under Section 318 requires fraudulent intention at the inception of the loan. Absent deliberate asset siphoning, banks cannot convert civil debt into criminal prosecution.'
    },
    {
      q: 'How does Drawing Power (DP) affect default status in Cash Credit facilities?',
      a: 'Drawing Power is calculated monthly from eligible paid inventory and valid debtors less unpaid sundry creditors, factoring in agreed bank margins. If the outstanding CC balance exceeds the calculated DP for 90 consecutive days, the account is tagged out of order and classified as an NPA, even if the balance remains within the overall sanctioned limit.'
    },
    {
      q: 'Can a bank issue a SARFAESI notice against primary stock or mortgaged collateral?',
      a: 'Yes. Once an OD/CC account is classified as an NPA, the lender can issue a statutory 60-day demand notice under Section 13(2) of the SARFAESI Act, 2002. If unresolved, the bank may issue a possession notice under Section 13(4) against mortgaged collateral properties or hypothecated business equipment.'
    },
    {
      q: 'Can borrowers legally challenge a SARFAESI Section 13(2) demand notice?',
      a: 'Yes. Borrowers have the statutory right under Section 13(3A) of the SARFAESI Act to submit a detailed representation or objection within 60 days. The bank is legally mandated to examine the objections and communicate its decision within 15 days. A failure to provide reasoned disposal renders subsequent SARFAESI measures void.'
    },
    {
      q: 'What settlement discount or haircut can be expected in an OD/CC One-Time Settlement (OTS)?',
      a: 'Settlement haircuts depend heavily on collateral coverage and liquidity. Where primary stock has eroded and collateral is unmarketable, disputed, or absent, banks regularly accept settlements with 40% to 75% waivers on penal interest, unapplied interest, and principal. For secured facilities with liquid properties, banks typically waive 100% of penal charges and negotiate nominal principal reductions.'
    },
    {
      q: 'Are personal guarantors and directors personally liable for company OD/CC defaults?',
      a: 'Under Section 128 of the Indian Contract Act, 1872, the liability of a personal guarantor is co-extensive with that of the principal debtor. Banks can proceed against guarantors in the Debt Recovery Tribunal (DRT) or initiate personal insolvency under Section 95 of the Insolvency and Bankruptcy Code (IBC). A comprehensive OTS agreement must include explicit release of all personal guarantees.'
    },
    {
      q: 'How does CGTMSE coverage impact default settlement in MSME working capital loans?',
      a: 'For collateral-free MSME OD/CC facilities covered by the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE), the trust covers 75% to 85% of the default. However, banks must still follow standard recovery procedures and can enter compromise settlements. Once settled under an approved OTS, the bank files a final claim with CGTMSE, releasing the borrower from further recovery.'
    },
    {
      q: 'Can a bank exercise a right of set-off by debiting funds from our separate current accounts?',
      a: 'Yes, if the separate current account is held with the same banking institution under the exact same entity name and capacity. To prevent unauthorized set-off debits or liquidity freezes, businesses facing distress must immediately move daily vendor receipts and operating capital to a neutral bank with zero debt exposure.'
    },
    {
      q: 'What documents are essential to obtain after paying an agreed OD/CC settlement amount?',
      a: 'Upon completing settlement payments, borrowers must demand an official No Dues Certificate (NDC), return of original title deeds with canceled equitable mortgage receipts, Satisfaction of Charge filing on MCA (Form CHG-4) for corporate entities, charge removal on CERSAI, and an update of the CIBIL commercial records.'
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
            <span>Commercial Banking Law &amp; Working Capital Debt Relief</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Overdraft and Cash Credit Default Settlement: Rules and Relief
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A definitive legal guide for MSMEs, proprietorships, and corporate borrowers facing OD/CC delinquency. Understand RBI 90-day NPA rules, stop SARFAESI auctions, resolve stock audit discrepancies, and negotiate up to 75% compromise settlements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Negotiate OD/CC Settlement</span>
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
                  <span>RBI Compromise Framework</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed under RBI Master Directions on Stressed Assets and Board-Approved Bank OTS Policies.
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
                <span>EXECUTIVE BRIEF: OD &amp; CC DEFAULT SETTLEMENT RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">The 90-Day Out of Order Trigger:</strong> An OD/CC facility defaults into NPA status when it remains continuously in excess of the limit or drawing power for 90 days, or credits fail to service debited interest.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Stock Deficit is Not Fraud:</strong> Stock discrepancies arising from business slowdowns or bad debtors are civil issues. The Supreme Court shields honest entrepreneurs from bogus criminal breach of trust allegations.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">SARFAESI Defense Window:</strong> Borrowers have a 60-day statutory window under Section 13(3A) to challenge bank demand notices, halt auctions, and mandate formal reconsideration.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Unsecured Shortfall Haircuts:</strong> Unsecured working capital gaps resulting from drawing power erosion regularly settle at 40% to 75% discounts on ledger balances under RBI OTS norms.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Complete Security Release:</strong> A formal compromise settlement legally binds the bank to release original property deeds, cancel personal guarantees, and file Form CHG-4 on MCA.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Understanding OD & CC Facility Defaults */}
            <section id="understanding-od-cc" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Facility Architecture &amp; Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Understanding OD and CC Facilities: Structure and Defaults
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Overdraft (OD) and Cash Credit (CC) facilities are the financial lifeblood of Indian commerce. Unlike regular term loans where fixed monthly installments amortize principal over time, OD and CC are revolving credit arrangements designed to fund day-to-day operating cycles, raw material procurement, and debtor payment gaps.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A Cash Credit facility is sanctioned primarily against the hypothecation of current assets, such as inventory, semi-finished goods, and receivables. An Overdraft facility allows current account holders to draw funds beyond their credit balance up to an agreed sanction limit, secured against book debts, fixed deposits, or commercial and residential real estate.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Default in an OD/CC facility does not happen through a single missed EMI. Instead, delinquency develops through operational failure: inability to service monthly interest debits, failure to achieve adequate account turnover, or a gradual deterioration of eligible inventory and book debts that shrinks the permissible Drawing Power (DP).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When cash flow contracts, borrowers frequently find themselves trapped in compounding interest debits. Banks levy penal interest, inspection charges, and stock audit fees directly onto the principal balance, accelerating the depletion of available credit limits and precipitating sudden NPA classification.
              </p>
            </section>

            {/* SECTION 2: RBI 90-Day NPA Classification Norms */}
            <section id="rbi-npa-norms" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Prudential Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI NPA Classification Norms: 90-Day Overdue Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India (RBI) regulates working capital loan delinquency through its Master Circular on Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances (IRACP). Unlike term loans that focus purely on overdue dates, working capital accounts are governed by the strict regulatory concept of Out of Order status.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under paragraph 2.2 of the RBI Master Circular, an Overdraft or Cash Credit facility is categorized as Out of Order if any of the following statutory conditions occur:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>Continuous Excess Over Limit / DP</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The outstanding balance remains continuously in excess of the sanctioned limit or calculated Drawing Power for a period of 90 consecutive days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Inadequate Operational Credits</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Although the balance is below the limit, there are no credits continuously for 90 days, or credits are insufficient to cover interest debited during the same 90-day cycle.
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed pt-2">
                In addition, non-renewal or non-review of the OD/CC facility within 180 days from the due date, or non-submission of stock statements for more than three months (90 days), automatically disqualifies the Drawing Power, requiring the lending bank to tag the entire credit line as a Non-Performing Asset (NPA).
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Forensic Ledger Audit &amp; Settlement Math</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹45 Lakh Gross Bank Claim</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Claim Breakdown Component</th>
                        <th className="p-3">Bank Ledger Entry</th>
                        <th className="p-3">Audit Finding &amp; RBI Rule</th>
                        <th className="p-3 text-right">Settlement Figure</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Original Sanctioned Principal Limit</td>
                        <td className="p-3">₹30,00,000</td>
                        <td className="p-3 text-slate-800">Actual capital disbursed and drawn for operations.</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹18,00,000 (Base Target)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Accumulated Normal &amp; Unapplied Interest</td>
                        <td className="p-3">₹8,40,000</td>
                        <td className="p-3 text-blue-600">Eligible for 50% to 100% waiver under bank OTS rules.</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹2,00,000 (Reduced)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Compound Penal Charges &amp; Audit Fees</td>
                        <td className="p-3 text-rose-600 font-semibold">₹6,60,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Unlawful under RBI Jan 2024 Fair Lending Rules.</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹0 (100% Waived)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Payable Settlement Amount</td>
                        <td className="p-3 text-rose-700">₹45,00,000 Claimed</td>
                        <td className="p-3 text-emerald-700">55.5% Total Haircut Secured through OTS</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹20,00,000 (Full &amp; Final)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Primary vs Collateral Security Matrix */}
            <section id="security-collateral-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Security Structures &amp; Exposure Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Collateral &amp; Security Matrix: Primary vs Collateral Assets
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Negotiating an Overdraft or Cash Credit default requires distinguishing between primary security and collateral security. The nature, liquidity, and physical existence of these assets dictate the bank bargaining position during settlement talks.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Security Category</th>
                      <th className="p-3">Asset Description</th>
                      <th className="p-3">Bank Enforcement Power</th>
                      <th className="p-3">Vulnerability Level</th>
                      <th className="p-3">OTS Haircut Potential</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Primary Current Assets</td>
                      <td className="p-3">Raw materials, finished goods, and work-in-progress stock.</td>
                      <td className="p-3">Hypothecation charge; physical seizure via court commissioner.</td>
                      <td className="p-3 text-amber-600 font-semibold">Moderate to High</td>
                      <td className="p-3 text-emerald-700 font-bold">50% to 75% Waiver</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Book Debts &amp; Receivables</td>
                      <td className="p-3">Uncollected customer invoices and trade receivables.</td>
                      <td className="p-3">Garnishee notices under Section 60 CPC to debtor firms.</td>
                      <td className="p-3 text-amber-600">Moderate</td>
                      <td className="p-3 text-emerald-700 font-bold">50% to 70% Waiver</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Collateral Real Estate</td>
                      <td className="p-3">Commercial factories, industrial sheds, and residential flats.</td>
                      <td className="p-3">Direct auction under Section 13(4) of SARFAESI Act.</td>
                      <td className="p-3 text-rose-600 font-bold">Severe Risk</td>
                      <td className="p-3 text-blue-700 font-bold">25% to 40% Waiver</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Plant &amp; Fixed Machinery</td>
                      <td className="p-3">Industrial machinery, generators, and specialized equipment.</td>
                      <td className="p-3">Hypothecation attachment and commercial salvage auction.</td>
                      <td className="p-3 text-slate-700">Moderate (Low Resale Value)</td>
                      <td className="p-3 text-emerald-700 font-bold">45% to 60% Waiver</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Personal Promoter Guarantees</td>
                      <td className="p-3">Personal net worth of directors, partners, or guarantors.</td>
                      <td className="p-3">IBC Section 95 insolvency or DRT recovery applications.</td>
                      <td className="p-3 text-rose-600 font-bold">High Personal Risk</td>
                      <td className="p-3 text-slate-800 font-bold">Total Release via OTS</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Drawing Power Deficit & Stock Audits */}
            <section id="stock-audit-drawing-power" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Forensic Defense &amp; Criminal Immunity</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Drawing Power and Stock Audit: Preventing Criminal Action
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a Cash Credit account turns delinquent, lending banks routinely appoint empanelled chartered accountants to conduct forensic stock audits. If the physical audit reveals that the value of existing warehouse inventory is lower than the figures submitted in earlier monthly stock statements, lenders often threaten police complaints under Bharatiya Nyaya Sanhita (BNS) Section 316 (Criminal Breach of Trust) and Section 318 (Cheating).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers must understand the legal boundary between commercial business failure and criminal fraud. In manufacturing and wholesale trade, inventory levels fluctuate constantly due to market price corrections, perishable obsolescence, cancelled buyer contracts, or uncollectible trade receivables.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court of India has held in multiple landmark judgments, including <em>Dalip Kaur v. Jagnar Singh</em> and <em>Vesa Holdings v. State of Kerala</em>, that an honest failure to repay a commercial loan or a shortfall in hypothecated stock does not constitute a criminal offence. For an act to be categorized as cheating or criminal breach of trust, fraudulent intention must be proven to have existed at the inception of the loan contract.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Unless a bank can document deliberate siphoning of capital into unrelated third-party entities, stock discrepancies represent civil recovery disputes. CredSettle legal specialists issue robust legal rejoinders against threatening bank letters, demonstrating genuine market hardship and halting unlawful police intimidation.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: OD/CC Settlement Workflow Architecture
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive visual roadmap details the entire lifecycle of an Overdraft and Cash Credit default resolution, from 90-day NPA tagging to forensic audit, SARFAESI defense, and final debt compromise.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/overdraft-cash-credit-od-cc-default-settlement-rules.jpg"
                    alt="OD CC Default Settlement Rules and RBI NPA Resolution Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Commercial Working Capital Resolution Framework • RBI IRACP Compliant</span>
                  <a
                    href="/images/infographics/overdraft-cash-credit-od-cc-default-settlement-rules.jpg"
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

            {/* SECTION 6: SARFAESI, DRT & Section 138 Recovery Actions */}
            <section id="sarfaesi-drt-recovery" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Recovery Powers &amp; Injunctions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Bank Legal Actions: SARFAESI, DRT and Section 138 Notices
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Following 90-day NPA classification, lending institutions deploy a multi-pronged recovery strategy designed to apply acute legal and operational pressure on business promoters:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>SARFAESI Act Demand Notice (Section 13(2))</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank gives a 60-day demand notice requiring full discharge of liabilities. If unpaid, the bank initiates symbolic or physical possession under Section 13(4) of mortgaged collateral properties.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Debt Recovery Tribunal (DRT Section 19)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For aggregate debts exceeding ₹20 Lakhs, lenders file an Original Application (OA) in the DRT seeking attachment of promoter personal assets, freezing bank accounts, and appointment of receivers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Section 138 NI Act &amp; Section 25 PSSA</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bounced interest servicing cheques or failed NACH auto-debits trigger criminal complaints against directors and partners under the Negotiable Instruments Act, carrying potential imprisonment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Statutory Defense under Section 13(3A)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers possess the statutory right to challenge the Section 13(2) notice within 60 days. The bank is legally compelled to evaluate the objections and communicate a reasoned response within 15 days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Step-by-Step SOP: 6-Stage OD/CC Default Resolution Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Resolving an Overdraft or Cash Credit default requires executing a systematic, legally sound strategy. This battle-tested six-stage protocol protects business assets while securing deep settlement concessions from bank credit committees.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Forensic Loan Ledger Audit &amp; Penal Strike-Off
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Obtain the complete unedited loan account statement from inception. Identify and quantify all compounded penal interest, unnotified renewal charges, inspection fees, and legal debit entries to calculate the true legitimate baseline debt.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Operational Ring-Fencing &amp; Neutral Current Account
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Immediately route all fresh customer remittances, vendor payments, and operational cash flows through a verified current account in a completely different bank where you have zero credit exposure, preventing unilateral bank set-off freezes.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Legal Response to Section 13(2) &amp; Section 138 Notices
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submit formal representations under Section 13(3A) of the SARFAESI Act challenging flawed Drawing Power assessments and inflated claims. File immediate legal appearances in Section 138 cheque bounce proceedings to secure bail and compound offences.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Drafting Formal Board-Compliant OTS Proposal
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Structure a comprehensive One-Time Settlement dossier citing genuine commercial hardship: client insolvencies, supply disruptions, GST complications, and health crises, backed by audited financials and realistic settlement payment terms.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Zonal Credit Committee Negotiations
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Engage directly with the Stressed Assets Management Branch (SAMB) and Zonal Settlement Committee. Leverage the forced distress sale value of collateral versus the high legal costs and multi-year delays of DRT litigation to secure deep haircuts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Settlement Sanction, Payment &amp; Security Release
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Verify the official bank sanction letter, remit the agreed compromise sum in structured tranches, retrieve original property title deeds, and obtain your formal No Dues Certificate along with MCA Form CHG-4 charge satisfaction.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: OTS Negotiation Strategy & Haircuts */}
            <section id="ots-negotiation-mechanics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Commercial Valuation &amp; Concessions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. OTS Negotiation Strategy: Haircuts and Settlement Waivers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Lending banks evaluate One-Time Settlement proposals based on Net Present Value (NPV) mathematics. Bank credit committees weigh an upfront lump-sum recovery against the uncertainty, professional legal fees, and prolonged duration of DRT and SARFAESI enforcement.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI Compromise Settlements Framework, banks have delegated discretionary powers to their internal Settlement Committees to approve substantial debt reductions. The key factor is the Realizable Distress Value of the underlying security rather than the nominal ledger claim.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When hypothecated inventory has depreciated and mortgaged properties carry title defects, lack direct road access, or are occupied by protected tenants, bank recovery prospects plummet. In these situations, CredSettle regularly negotiates 40% to 75% waivers across total ledger balances.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers must also ensure that the settlement sanction letter contains explicit covenants requiring the bank to withdraw all pending DRT Original Applications, quash Section 138 cheque bounce proceedings before judicial magistrates, and remove all personal guarantor liabilities.
              </p>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. 3-Tier Escalation Matrix: Institutional Grievance Redressal
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If branch managers act arbitrarily, refuse to furnish loan statements, levy unlawful penal interest, or threaten unlawful criminal complaints, utilize the Reserve Bank of India statutory grievance escalation framework.
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
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Halts unauthorized recovery calls, provides unedited loan statements, and reviews disputed charges.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Investigates wrongful penal compounding, reviews MSME restructuring requests, and facilitates OTS.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Issues binding directions via cms.rbi.org.in to reverse illegal charges, penalize non-compliance, and order fair settlement.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Procedural Delinquency Timeline Table */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Procedural Delinquency Timeline: SMA to Debt Resolution
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Anticipating the precise stages of working capital loan delinquency allows business owners to protect operational assets, avoid legal traps, and initiate settlement discussions from a position of strength.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Delinquency Window</th>
                      <th className="p-3">Regulatory Asset Status</th>
                      <th className="p-3">Lender Action &amp; Exposure</th>
                      <th className="p-3">Strategic Borrower Response</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Automated payment reminders and formal branch notices for interest servicing.</td>
                      <td className="p-3">Submit updated stock statements and open a neutral operational current account.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Persistent relationship manager calls and demands for stock audit verification.</td>
                      <td className="p-3">Reconcile eligible inventory and book debts; audit for improper penal fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Pre-NPA recall warnings and appointment of empanelled stock auditor.</td>
                      <td className="p-3">Ensure complete documentation of legitimate business losses and market downturns.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Tagging</td>
                      <td className="p-3">Account tagged Out of Order and classified as Sub-standard NPA advance.</td>
                      <td className="p-3">Conduct a forensic audit of the loan ledger and challenge unlawful penal debits.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Prime OTS Window</td>
                      <td className="p-3">Section 13(2) SARFAESI demand notice issued; legal recovery initiated.</td>
                      <td className="p-3 font-bold text-slate-900">Submit Section 13(3A) objections and propose structured OTS with CredSettle.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 and Beyond</td>
                      <td className="p-3 font-mono text-[11px]">Doubtful / Loss Asset</td>
                      <td className="p-3">DRT OA filed, Section 13(4) possession initiated, or portfolio sale to ARC.</td>
                      <td className="p-3">Finalize high-waiver OTS agreement and secure comprehensive No Dues Certificate.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Specialized Real-World Scenarios */}
            <section id="specialized-business-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                11. Specialized Scenarios: CGTMSE, Partnership and Director Roles
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Commercial debt distress often intersects with complex organizational structures, government guarantee schemes, and corporate governance laws.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    CGTMSE Collateral-Free MSME Facilities
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Credit Guarantee Scheme, the trust covers 75% to 85% of defaulted principal. Borrowers can settle the remaining portion through a compromise agreement, enabling the lender to claim the balance from CGTMSE and release the promoter.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Partnership Firm Disputes &amp; Dissolution
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Partners are jointly and severally liable for partnership debt. If an active partner withdraws or mismanages capital, CredSettle helps innocent partners negotiate structured individual settlements to insulate their personal properties.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Director Personal Guarantees &amp; IBC Section 95
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders frequently invoke personal guarantees of company directors under IBC Section 95. A settlement negotiated by CredSettle ensures explicit discharge of all promoter guarantees, preventing personal insolvency proceedings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    Catastrophic Stock Loss &amp; Insurance Disputes
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When hypothecated warehouse inventory is damaged by fire, flood, or theft and insurance claims are delayed, banks cannot treat the event as willful default. We assist businesses in bridging the gap through insurance-backed compromise plans.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 12: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 13: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: OD &amp; CC Default Settlements
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Verified legal answers addressing crucial questions on Overdraft and Cash Credit default rules, stock audit shortfalls, SARFAESI defense, and debt compromise under Indian banking law.
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

            {/* SECTION 14: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Framework &amp; Banking Citations
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Reserve Bank of India Master Circular on IRACP:</strong> Prudential Norms on Income Recognition, Asset Classification and Provisioning for Advances.
                </li>
                <li>
                  <strong>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI):</strong> Sections 13(2), 13(3A), and 13(4).
                </li>
                <li>
                  <strong>Recovery of Debts and Bankruptcy Act, 1993:</strong> Section 19 Original Application procedures before Debt Recovery Tribunals.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 128 (Guarantor Liability) and Section 171 (Banker General Lien Limitations).
                </li>
                <li>
                  <strong>Reserve Bank of India Compromise Settlements Circular:</strong> Framework for Compromise Settlements and Technical Write-offs dated June 8, 2023.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Regulatory &amp; Government Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cgtmse.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>CGTMSE Official Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://drt.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Debt Recovery Appellate Tribunal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.mca.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Ministry of Corporate Affairs</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/msme-loan-default-legal-action" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    MSME Loan Default Legal Action
                  </Link>
                  <Link href="/willful-defaulter-notice-rbi-rules-legal-defense-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Willful Defaulter Notice Defense
                  </Link>
                  <Link href="/drt-notice-for-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    DRT Notice Legal Defense
                  </Link>
                  <Link href="/rbi-circular-on-loan-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Circular on Loan Settlement
                  </Link>
                  <Link href="/rbi-guidelines-on-penal-charges-in-loan-accounts" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Penal Charges Guidelines
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/section-138-cheque-bounce-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 138 Cheque Bounce Defense
                  </Link>
                  <Link href="/can-bank-deduct-money-from-another-account" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Set-Off Rules
                  </Link>
                  <Link href="/garnishee-order-bank-account-freeze-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Garnishee Order Defense
                  </Link>
                  <Link href="/services/business-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business Loan Settlement
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF &amp; Gratuity Protection
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
                Specialist in commercial banking regulations, SARFAESI defense, working capital dispute resolution, and NPA compromise settlements with over a decade of experience resolving stressed business facilities.
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
                  CONFIDENTIAL LEGAL SHIELD
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Overdraft or Cash Credit in Default?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior commercial resolution advocates defend against SARFAESI auctions, challenge invalid drawing power audits, and negotiate up to 75% compromise settlements.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Resolve Your OD/CC Facility
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
              <p className="font-bold text-slate-900 text-sm">The CredSettle Advantage</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Asset Seizure:</strong> Strategic SARFAESI stay guidance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Stock Audit Shield:</strong> Rebuttal of false criminal claims.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>100% Penal Fee Waiver:</strong> Forensic audit of bank debits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Guarantor Release:</strong> Full discharge of promoter liabilities.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Commercial Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/msme-loan-default-legal-action"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    MSME Loan Default Legal Action
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Defense against bank recovery &rarr;</span>
                </Link>

                <Link
                  href="/willful-defaulter-notice-rbi-rules-legal-defense-guide"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Willful Defaulter Notice Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Identification committee defense &rarr;</span>
                </Link>

                <Link
                  href="/drt-notice-for-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    DRT Notice Legal Defense Guide
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Original application reply &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
