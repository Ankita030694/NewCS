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
  Landmark,
  FileCheck,
  ShieldAlert,
  Layers,
  Ban,
  Wallet,
  Users,
  Building,
  RefreshCw,
  Info
} from 'lucide-react';

export default function CanBankFreezeMySavingsAccountForLoanClient() {
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
    { id: 'executive-summary', label: 'Executive Summary & Crux' },
    { id: 'bankers-lien-set-off-section-171', label: '1. Banker’s Lien & Set-Off (Sec 171)' },
    { id: 'financial-breakdown-settlement-math', label: '2. Penal Math & Settlement Economics' },
    { id: 'account-freeze-comparison-matrix', label: '3. Relief Pathways Comparison' },
    { id: 'cibil-algorithm-credit-restoration', label: '4. CIBIL Algorithm & CICRA Remedies' },
    { id: 'infographic-overview', label: '5. Visual Blueprint: Freeze Defense' },
    { id: 'step-by-step-defense-sop', label: '6. 6-Stage Defense & Unfreeze SOP' },
    { id: 'statutory-notice-defense-rights', label: '7. Statutory Notice Defense & Rights' },
    { id: 'three-tier-escalation-matrix', label: '8. 3-Tier Grievance Redressal Matrix' },
    { id: 'chronological-timeline-milestones', label: '9. 180-Day Resolution Timeline' },
    { id: 'specialized-banking-scenarios', label: '10. Specialized Account Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank freeze my savings account if I default on an unsecured personal loan?',
      a: 'Yes, but only if the savings account is maintained within the exact same banking institution where the defaulted loan exists. Under Section 171 of the Indian Contract Act, 1872, banks possess a general lien and right of set-off allowing them to combine accounts. However, a bank cannot freeze your savings account held in an entirely separate third-party bank without a specific judicial decree or court Garnishee Order.'
    },
    {
      q: 'What is the legal difference between a bank lien, a set-off, and an account freeze?',
      a: 'A banker lien is a statutory right to retain borrower deposits until outstanding debts are discharged. Right of set-off is the operational accounting debit of those retained credit balances against overdue loan liabilities. An account freeze is a complete operational suspension of all incoming and outgoing transactions, which typically requires a formal judicial or law enforcement order unless exercised internally as an administrative lien.'
    },
    {
      q: 'Can a bank put a lien on a joint savings account for an individual borrower default?',
      a: 'No. The right of set-off and banker lien strictly require mutuality of debt. This principle dictates that money held jointly belongs equally to both primary and secondary holders. If a personal loan or credit card was sanctioned in your sole name, the lending bank has no legal authority to freeze or debit a joint account maintained with your spouse or parent.'
    },
    {
      q: 'Is it legal for a bank to freeze 100% of my salary or savings without prior notice?',
      a: 'Arbitrary 100% account freezes without advance written notice violate the Reserve Bank of India (RBI) Fair Practices Code and principles of natural justice. Additionally, under Section 60(1)(i) of the Code of Civil Procedure, basic subsistence wages necessary for personal survival and family sustenance are legally protected from complete attachment.'
    },
    {
      q: 'Can a bank freeze my Public Provident Fund (PPF), EPF, or pension account?',
      a: 'No. Statutory retirement funds including Public Provident Fund (PPF), Employee Provident Fund (EPF), and government pensions enjoy absolute statutory immunity from bank lien, set-off, or civil attachment under Section 10 of the EPF Act and Section 60 of the CPC. Banks attempting to attach these funds commit an actionable regulatory violation.'
    },
    {
      q: 'How do I unfreeze a bank account that was blocked for an overdue loan?',
      a: 'To unfreeze your account, immediately submit a formal representation to the Branch Manager and Grievance Redressal Officer citing lack of mutuality, absence of prior notice, or subsistence hardship under Section 60 CPC. Concurrently, initiate a structured One-Time Settlement (OTS) proposal to negotiate a waiver on penal charges and resolve the debt.'
    },
    {
      q: 'Can a third-party bank freeze my account because another lender reported a default?',
      a: 'No. Third-party banks have no legal standing to freeze your savings or current accounts simply because an external lender has reported an overdue balance to CIBIL. Third-party funds can only be attached if the creditor obtains a court decree and a formal Garnishee Order under Order XXI Rule 46 of the CPC or a DRT recovery certificate.'
    },
    {
      q: 'What should I do if the bank ignores my request to lift an unlawful lien?',
      a: 'If the branch manager and Principal Nodal Officer (PNO) fail to resolve your grievance or provide partial subsistence access within 30 days, immediately file a formal statutory complaint with the RBI Integrated Ombudsman via cms.rbi.org.in citing violation of customer rights and arbitrary recovery tactics.'
    },
    {
      q: 'Can recovery agents order my bank to freeze my savings account?',
      a: 'No. Third-party recovery agents have zero statutory or administrative power to freeze, block, or attach bank accounts. Account operations can only be modified through the bank internal credit operations committee or through formal judicial orders issued by competent civil courts, DRT, or law enforcement agencies.'
    },
    {
      q: 'How does a One-Time Settlement (OTS) permanently resolve account liens?',
      a: 'A formal One-Time Settlement (OTS) legally compromises the outstanding debt for an agreed lump-sum or structured payment. Once the settlement amount is remitted, the bank issues an official No Dues Certificate (NDC), permanently releases all account liens, cancels auto-debit mandates, and updates credit bureaus.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white font-sans">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
            <Scale className="w-3.5 h-3.5 text-blue-200" />
            <span>Banking Law &amp; Section 171 Account Freeze Protections</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can a Bank Legally Freeze Your Savings Account for Loan Default?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Discover your statutory protections against arbitrary bank liens, inter-branch set-offs, and unlawful account freezes. Learn how Section 171 of the Indian Contract Act and Section 60 CPC safeguard your essential livelihood funds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Account Frozen? Let Us Unblock It</span>
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
                  <span>Statutory Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by the Indian Contract Act 1872, CPC Section 60, &amp; RBI Fair Practices Code.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box with #1886ff Left Border) */}
            <div
              id="executive-summary"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: SAVINGS ACCOUNT FREEZE &amp; LIEN RULES</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Key statutory boundaries governing bank account liens, right of set-off, and borrower legal protections under Indian banking jurisprudence:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Same-Bank Right of Set-Off:</strong> Under Section 171 of the Indian Contract Act 1872, a bank can combine intra-bank balances to adjust loan dues.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Third-Party Banks Protected:</strong> Lenders cannot debit funds from other banking institutions without a formal court Garnishee Order.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Mutuality of Debt Required:</strong> Joint accounts with non-borrowers or spouses cannot be attached for an individual personal debt.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Subsistence Protections:</strong> Under Section 60(1) CPC, essential wages, pension income, and PF balances enjoy statutory attachment immunity.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Prior Notice Mandate:</strong> Under the RBI Fair Practices Code, banks must give reasonable notice before immobilizing customer liquidity.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">No Agent Freeze Powers:</strong> Collection agents have zero legal standing to issue account freezes or block customer deposits.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">3-Tier Grievance Route:</strong> Unlawful liens can be challenged before the Branch GRO, Bank PNO, and the RBI Integrated Ombudsman.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Permanent Closure via OTS:</strong> A One-Time Settlement legally extinguishes obligations, removes liens, and yields a clean NDC.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: DEBT ECONOMICS & NPA DYNAMICS */}
            <section id="bankers-lien-set-off-section-171" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                1. Banker’s Lien &amp; Right of Set-Off: Section 171 Explained
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                Discovering that your savings account has been frozen or marked with an administrative lien is a distressing experience for any borrower. When retail personal loans or credit card accounts fall into default, banks frequently attempt recovery by attaching credit balances in customer deposit accounts. Under Section 171 of the Indian Contract Act, 1872, commercial banks possess a general banker’s lien over securities and credit balances, enabling an inter-branch right of set-off to combine accounts within the same banking entity.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                However, this power is strictly governed by the doctrine of debt mutuality. A bank can only exercise set-off when the deposit and the debt exist between the exact same parties in the same legal capacity. If an account is held jointly with a non-borrower spouse, or designated for statutory retirement funds, the bank cannot lawfully freeze those deposits. Furthermore, the RBI Fair Practices Code requires lenders to issue advance written notice prior to executing set-offs, preventing arbitrary deprivation of essential livelihood funds.
              </p>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                2. Account Freeze Math: Principal vs Inflated Penal Charges
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                When an account crosses 90 days of non-payment and turns into a Non-Performing Asset (NPA), banks stop regular income recognition and compound aggressive penal interest, late fees, and administrative charges. While this inflates the ledger balance by 50% to 100%, mandatory Basel III capital provisioning of 15% to 100% incentivizes bank credit committees to accept a structured One-Time Settlement (OTS) at a 40% to 55% discount on real dues.
              </p>

              {/* REPRESENTATIVE SETTLEMENT MATH CARD */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 md:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="text-xs md:text-sm font-bold text-slate-900 uppercase tracking-wider">
                      Representative 180-Day NPA Account Freeze &amp; Settlement Math
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-[#1886ff]">
                    OTS Compromise Model
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="space-y-2 p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                    <div className="text-xs font-black uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Bank Claim &amp; Frozen Lien Amount</span>
                    </div>
                    <div className="space-y-1 text-slate-700">
                      <div className="flex justify-between">
                        <span>Original Sanctioned Principal:</span>
                        <span className="font-semibold text-slate-900">₹8,00,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Remaining Real Principal Balance:</span>
                        <span className="font-semibold text-slate-900">₹5,40,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Contractual Accrued Interest:</span>
                        <span className="font-semibold text-slate-900">₹1,15,000</span>
                      </div>
                      <div className="flex justify-between text-rose-600">
                        <span>Compound Penal Interest &amp; Levies:</span>
                        <span className="font-semibold">₹1,95,000</span>
                      </div>
                      <div className="flex justify-between border-t border-slate-200 pt-1.5 font-bold text-slate-900">
                        <span>Total Frozen Lien Claim:</span>
                        <span className="text-rose-700">₹8,50,000</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/70">
                    <div className="text-xs font-black uppercase tracking-wider text-[#1886ff] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>CredSettle Structured OTS Resolution</span>
                    </div>
                    <div className="space-y-1 text-slate-700">
                      <div className="flex justify-between">
                        <span>Penal Charges &amp; Overdue Fees:</span>
                        <span className="font-semibold text-emerald-700">100% Waived (₹1,95,000)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Unpaid Interest Concession:</span>
                        <span className="font-semibold text-emerald-700">85% Waived (₹97,750)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Principal Compromise Relief:</span>
                        <span className="font-semibold text-emerald-700">35% Waived (₹1,89,000)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Final Agreed Settlement Sum:</span>
                        <span className="font-bold text-[#1886ff]">₹3,68,250</span>
                      </div>
                      <div className="flex justify-between border-t border-blue-200 pt-1.5 font-bold text-emerald-800">
                        <span>Net Borrower Relief:</span>
                        <span>₹4,81,750 (56.7% Total Discount)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 leading-tight">
                  Note: Upon payment of the negotiated OTS compromise sum, the bank is legally required to lift all account freezes, cancel internal lien marks, revoke Section 25 PSSA / 138 NI notices, and issue an irrevocable No Dues Certificate (NDC).
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="account-freeze-comparison-matrix" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                3. Resolution Comparison: Bank Freeze Relief Pathways
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                Borrowers dealing with frozen accounts have multiple legal and procedural avenues available to them, each carrying distinct financial consequences, time horizons, and legal implications. The comparison table below evaluates the primary resolution strategies available under Indian commercial banking law:
              </p>

              {/* 4-SIDED BORDERED TABLE */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-left text-xs border-collapse divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-800 uppercase tracking-wider text-[11px] font-black">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5">Resolution Pathway</th>
                      <th className="p-3.5">Account Lien Status</th>
                      <th className="p-3.5">Financial Waiver Potential</th>
                      <th className="p-3.5">Turnaround Horizon</th>
                      <th className="p-3.5">Legal &amp; Credit Closure</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">
                        One-Time Settlement (OTS)
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Lien 100% revoked upon compromise payment
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        40% to 65% total reduction on claim
                      </td>
                      <td className="p-3.5">
                        15 to 45 business days
                      </td>
                      <td className="p-3.5">
                        Complete legal discharge with stamped NDC; credit bureau updated as Settled
                      </td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">
                        Loan Restructuring (Tenure Extension)
                      </td>
                      <td className="p-3.5 text-blue-700">
                        Lien lifted after signing revised terms &amp; initial EMI
                      </td>
                      <td className="p-3.5 text-rose-700">
                        0% waiver; interest continues to compound over longer tenure
                      </td>
                      <td className="p-3.5">
                        30 to 60 business days
                      </td>
                      <td className="p-3.5">
                        Ongoing contractual liability; reported as Restructured on CIBIL report
                      </td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">
                        Lok Adalat Conciliation
                      </td>
                      <td className="p-3.5 text-emerald-700">
                        Lien lifted pursuant to formal judicial consent award
                      </td>
                      <td className="p-3.5 text-emerald-700">
                        30% to 50% waiver on accrued interest and fees
                      </td>
                      <td className="p-3.5">
                        Held quarterly (1 to 4 months)
                      </td>
                      <td className="p-3.5">
                        Judicial award carries status of a civil court decree with zero appeal rights
                      </td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">
                        Civil Court / DRT Litigation
                      </td>
                      <td className="p-3.5 text-amber-700">
                        Lien conditional on interim stay order or court security deposit
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Subject to final judicial decree; heavy legal fees
                      </td>
                      <td className="p-3.5">
                        2 to 5+ years
                      </td>
                      <td className="p-3.5">
                        Prolonged adversarial litigation with continuous recovery actions
                      </td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors bg-rose-50/30">
                      <td className="p-3.5 font-bold text-rose-900">
                        Inaction &amp; Ignoring Lien
                      </td>
                      <td className="p-3.5 text-rose-700 font-semibold">
                        Lien remains permanent; subsequent incoming funds debited
                      </td>
                      <td className="p-3.5 text-rose-700 font-semibold">
                        0% waiver; debt compounds with continuous penal levies
                      </td>
                      <td className="p-3.5 text-rose-700">
                        Indefinite exposure
                      </td>
                      <td className="p-3.5 text-rose-800">
                        Section 138/25 prosecution, arbitration awards, and permanent credit damage
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: TECHNICAL CIBIL ALGORITHM & SCORING MATH */}
            <section id="cibil-algorithm-credit-restoration" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                4. CIBIL Algorithm: Credit Score Impact of Frozen Accounts
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                Indian credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) allocate 35% of their scoring weight to repayment history and 30% to credit utilization. Unresolved loan delinquencies leading to account liens depress credit scores by 120 to 200 points. Executing an OTS updates the account status to Settled under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), stopping ongoing DPD deterioration and freezing penal accruals.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                Following settlement, borrowers can rebuild their credit rating back to 750+ within 12 to 24 months by utilizing a secured credit card backed by a fixed deposit, keeping credit utilization below 30%, and maintaining timely repayments on all subsequent obligations.
              </p>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                5. Visual Blueprint: Savings Account Freeze Defense Rules
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                The following structural infographic diagrams the statutory mechanisms governing banker liens under Section 171 of the Indian Contract Act, the distinct legal boundaries separating same-bank versus third-party bank accounts, subsistence exemptions under Section 60 CPC, and the structured 3-tier grievance escalation protocol:
              </p>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 md:p-4 shadow-xs overflow-hidden">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/can-bank-freeze-my-savings-account-for-loan.jpg"
                    alt="Can Bank Freeze Savings Account for Loan Default Legal Rules and Protection Infographic"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-1">
                  <span>Figure 1: Statutory Framework for Bank Account Liens &amp; Borrower Protection in India</span>
                  <a
                    href="/images/infographics/can-bank-freeze-my-savings-account-for-loan.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View High-Res</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-defense-sop" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                6. Step-by-Step SOP: 6 Stages to Unblock Funds &amp; Settle
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                CredSettle follows a structured six-stage Standard Operating Procedure (SOP) to defend borrowers against arbitrary account freezes, restore subsistence liquidity, and negotiate comprehensive debt settlements:
              </p>

              <div className="space-y-4">
                {/* Stage 1 */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1886ff] font-extrabold text-sm flex items-center justify-center flex-shrink-0 border border-blue-100 mt-0.5">
                    1
                  </div>
                  <div className="space-y-1.5 min-w-0">
                    <h3 className="text-sm font-bold text-slate-900">
                      Stage 1: Forensic Account Audit &amp; Lien Classification
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                      Our legal specialists examine the account hold, verifying whether it is an internal Section 171 banker’s lien, a cyber cell hold under Section 102 CrPC, or a judicial Garnishee Order, while verifying debt mutuality.
                    </p>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1886ff] font-extrabold text-sm flex items-center justify-center flex-shrink-0 border border-blue-100 mt-0.5">
                    2
                  </div>
                  <div className="space-y-1.5 min-w-0">
                    <h3 className="text-sm font-bold text-slate-900">
                      Stage 2: Comprehensive Hardship Dossier Compilation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                      We compile medical records, layoff notices, or business financials into an airtight dossier demonstrating genuine financial distress and quantifying protected subsistence wages under Section 60 CPC.
                    </p>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1886ff] font-extrabold text-sm flex items-center justify-center flex-shrink-0 border border-blue-100 mt-0.5">
                    3
                  </div>
                  <div className="space-y-1.5 min-w-0">
                    <h3 className="text-sm font-bold text-slate-900">
                      Stage 3: Formal Representation to Branch Manager &amp; Nodal Desk
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                      CredSettle submits a legal representation to the branch manager and Grievance Redressal Officer, challenging arbitrary freezes lacking advance notice and seeking immediate release of subsistence funds.
                    </p>
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1886ff] font-extrabold text-sm flex items-center justify-center flex-shrink-0 border border-blue-100 mt-0.5">
                    4
                  </div>
                  <div className="space-y-1.5 min-w-0">
                    <h3 className="text-sm font-bold text-slate-900">
                      Stage 4: Bilateral Negotiations with Stressed Assets Desk
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                      We negotiate directly with the Stressed Assets Resolution Branch, leveraging provisioning mandates to secure 100% penal fee waivers and 40% to 55% principal compromise terms.
                    </p>
                  </div>
                </div>

                {/* Stage 5 */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1886ff] font-extrabold text-sm flex items-center justify-center flex-shrink-0 border border-blue-100 mt-0.5">
                    5
                  </div>
                  <div className="space-y-1.5 min-w-0">
                    <h3 className="text-sm font-bold text-slate-900">
                      Stage 5: Sanction Letter Forensic Vetting &amp; Verification
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                      Our legal panel vets the settlement sanction letter on official bank letterhead to confirm explicit debt discharge terms, payment milestones, and mandatory lien removal clauses.
                    </p>
                  </div>
                </div>

                {/* Stage 6 */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1886ff] font-extrabold text-sm flex items-center justify-center flex-shrink-0 border border-blue-100 mt-0.5">
                    6
                  </div>
                  <div className="space-y-1.5 min-w-0">
                    <h3 className="text-sm font-bold text-slate-900">
                      Stage 6: Settlement Remittance, Lien Release &amp; NDC Issuance
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                      Funds are remitted directly into the bank’s settlement pool. We ensure the immediate release of all account holds, cancellation of auto-debits, and issuance of the stamped No Dues Certificate.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & LEGAL RIGHTS */}
            <section id="statutory-notice-defense-rights" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                7. Statutory Notice Defense: Legal Protections &amp; Rights
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                When lending institutions fail to recover debts through account liens, they frequently issue statutory legal notices under various Indian financial and commercial statutes. Borrowers must understand their substantive defense rights under each framework:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Notice 1 */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-xs sm:text-sm">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Section 25 PSSA (e-NACH Mandate Bounce)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                    A notice under Section 25 of the Payment and Settlement Systems Act requires a reply within 15 days. We establish absence of criminal intent, document hardship, and transition the dispute into an OTS.
                  </p>
                </div>

                {/* Notice 2 */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-xs sm:text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 138 NI Act (Cheque Dishonour)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                    Under Section 138 of the Negotiable Instruments Act, demand notices must be answered promptly. We challenge inflated claims, demonstrate security cheque misuse, and compound the matter under Section 147.
                  </p>
                </div>

                {/* Notice 3 */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs sm:text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>Arbitration Section 21 &amp; Supreme Court Precedents</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                    Pursuant to Supreme Court rulings in TRF Ltd. and Perkins Eastman, unilateral sole arbitrator appointments by lenders are void ab initio. We challenge biased proceedings under Section 14 of the Arbitration Act.
                  </p>
                </div>

                {/* Notice 4 */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs sm:text-sm">
                    <Scale className="w-4 h-4" />
                    <span>DRT Section 19 &amp; Section 60 CPC Protections</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                    For claims above ₹20 Lakhs before the Debt Recovery Tribunal, we file written statements invoking Section 60(1) CPC subsistence salary protections and negotiate compromise consent terms.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER ESCALATION MATRIX */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                8. 3-Tier Escalation Matrix: Institutional Redressal
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                If a commercial bank or NBFC executes an unlawful account freeze, refuses to release subsistence funds, or violates RBI fair collection directives, borrowers have access to a structured three-tier statutory grievance mechanism:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-[#1886ff] font-bold text-xs flex-shrink-0">
                    Tier 1
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 space-y-1">
                    <div className="font-bold text-slate-900">
                      Branch Grievance Redressal Officer (GRO) &bull; 7–10 Business Days
                    </div>
                    <p className="leading-relaxed text-justify">
                      Submit a formal written complaint with acknowledgment to the branch manager and the designated Zonal Grievance Redressal Officer, specifying the unlawful nature of the freeze, lack of debt mutuality, and breach of RBI circulars.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700 font-bold text-xs flex-shrink-0">
                    Tier 2
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 space-y-1">
                    <div className="font-bold text-slate-900">
                      Principal Nodal Officer (PNO) &bull; 14–21 Business Days
                    </div>
                    <p className="leading-relaxed text-justify">
                      If the branch fails to resolve the issue or release necessary funds within 7 days, escalate the matter to the bank’s Principal Nodal Officer at corporate headquarters, invoking the Charter of Customer Rights and requesting Stressed Assets Committee review.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs flex-shrink-0">
                    Tier 3
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 space-y-1">
                    <div className="font-bold text-slate-900">
                      RBI Integrated Ombudsman (cms.rbi.org.in) &bull; 30 Business Days
                    </div>
                    <p className="leading-relaxed text-justify">
                      If 30 days elapse without adequate redressal, lodge an official regulatory complaint on the RBI Complaint Management System (CMS). The Ombudsman possesses statutory authority under the RBI Ombudsman Scheme 2021 to award compensation for deficiency of banking service.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-timeline-milestones" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                9. Procedural Timeline: Default to Account Unfreezing
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                The lifecycle of loan default, account lien marking, and subsequent settlement follows standard procedural milestones under Indian banking regulations:
              </p>

              {/* 4-SIDED BORDERED TABLE */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-left text-xs border-collapse divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-800 uppercase tracking-wider text-[11px] font-black">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5">Time Period</th>
                      <th className="p-3.5">Asset Classification</th>
                      <th className="p-3.5">Bank Actions &amp; Account Status</th>
                      <th className="p-3.5">Optimal Borrower Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">Days 1 to 30</td>
                      <td className="p-3.5">SMA-0 (Standard Account)</td>
                      <td className="p-3.5">Automated SMS reminders and telephonic follow-ups; accounts fully operational</td>
                      <td className="p-3.5">Review budget and request temporary EMI moratorium or restructuring</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">Days 31 to 60</td>
                      <td className="p-3.5">SMA-1 (Sub-Standard Stress)</td>
                      <td className="p-3.5">Collection calls intensify; NACH re-presentation charges applied to balance</td>
                      <td className="p-3.5">Submit formal hardship disclosure and revoke unviable auto-debit mandates</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">Days 61 to 90</td>
                      <td className="p-3.5">SMA-2 (Critical Delinquency)</td>
                      <td className="p-3.5">Pre-NPA warnings issued; bank prepares internal set-off lien-marking</td>
                      <td className="p-3.5">Separate subsistence income into independent third-party bank accounts</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">Days 91 to 150</td>
                      <td className="p-3.5 text-rose-700 font-semibold">NPA (15% Provisioning)</td>
                      <td className="p-3.5 text-rose-700">Section 171 banker lien marked on same-bank accounts; legal notices dispatched</td>
                      <td className="p-3.5 font-semibold text-blue-700">File formal representation against 100% lien; initiate OTS dialogue</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors bg-blue-50/30">
                      <td className="p-3.5 font-bold text-blue-900">Days 151 to 180</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">OTS Compromise Window</td>
                      <td className="p-3.5">Bank Credit Committee reviews OTS proposal to avoid heavy year-end provisioning</td>
                      <td className="p-3.5 font-bold text-emerald-700">Remit settlement sum, lift all liens, and obtain stamped NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-banking-scenarios" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                10. Specialized Scenarios: Joint Accounts &amp; Third Parties
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                Real-world account freeze disputes frequently involve nuanced legal relationships. Here is how statutory rules apply across four specialized operational scenarios:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Scenario 1 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                    <Users className="w-4 h-4 text-[#1886ff]" />
                    <span>Joint Savings Accounts with Spouses</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                    A joint savings account cannot be attached for the individual debt of one holder. Seizing joint balances destroys mutuality of debt, enabling borrowers to compel immediate lien removal through Ombudsman escalation.
                  </p>
                </div>

                {/* Scenario 2 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                    <Building className="w-4 h-4 text-[#1886ff]" />
                    <span>Third-Party Bank Accounts</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                    Lenders have zero legal standing to attach deposits in separate third-party banks without obtaining a formal Garnishee Order under Order XXI Rule 46 CPC or a DRT recovery certificate.
                  </p>
                </div>

                {/* Scenario 3 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                    <Wallet className="w-4 h-4 text-[#1886ff]" />
                    <span>Salary Accounts &amp; Subsistence Wages</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                    Under Section 60(1)(i) CPC, basic salary necessary for livelihood is exempt from complete attachment, entitling borrowers to demand partial fund release for food, shelter, and medical needs.
                  </p>
                </div>

                {/* Scenario 4 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                    <RefreshCw className="w-4 h-4 text-[#1886ff]" />
                    <span>Asset Reconstruction Companies (ARCs)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                    When a debt is assigned to an ARC under Section 5 of the SARFAESI Act, the original bank’s right of set-off ceases because debt ownership transfers, preventing retrospective account holds.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: COMPANY SECTION */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions: Bank Account Freeze &amp; Liens
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                Clear, authoritative legal answers to the most common questions regarding savings account holds, banker rights of set-off, and debt settlement procedures in India:
              </p>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-xs transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 hover:bg-slate-50/80 transition-colors"
                      >
                        <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? 'transform rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50/40 text-justify">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Statutory Citations &amp; Regulatory References
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                CredSettle’s debt resolution and legal defense advisory is grounded in established Indian statutes, Reserve Bank of India prudential master directions, and binding judicial precedents:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-[#1886ff] transition-all flex items-center justify-between group shadow-xs"
                >
                  <span className="font-semibold text-slate-800 group-hover:text-[#1886ff]">RBI Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff]" />
                </a>

                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-[#1886ff] transition-all flex items-center justify-between group shadow-xs"
                >
                  <span className="font-semibold text-slate-800 group-hover:text-[#1886ff]">RBI Integrated Ombudsman</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff]" />
                </a>

                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-[#1886ff] transition-all flex items-center justify-between group shadow-xs"
                >
                  <span className="font-semibold text-slate-800 group-hover:text-[#1886ff]">TransUnion CIBIL India</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff]" />
                </a>

                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-[#1886ff] transition-all flex items-center justify-between group shadow-xs"
                >
                  <span className="font-semibold text-slate-800 group-hover:text-[#1886ff]">India Code (Central Acts)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff]" />
                </a>

                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-[#1886ff] transition-all flex items-center justify-between group shadow-xs"
                >
                  <span className="font-semibold text-slate-800 group-hover:text-[#1886ff]">NALSA (Lok Adalat)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff]" />
                </a>

                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-[#1886ff] transition-all flex items-center justify-between group shadow-xs"
                >
                  <span className="font-semibold text-slate-800 group-hover:text-[#1886ff]">National Cyber Crime Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff]" />
                </a>
              </div>

              {/* INTERNAL RELATED TOPICS BADGES */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Related Debt Defense Resources:
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/can-bank-deduct-money-from-another-account"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200/60 font-medium"
                  >
                    Can Bank Deduct Money from Another Account
                  </Link>
                  <Link
                    href="/bank-froze-salary-account-for-loan-default-how-to-get-salary"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200/60 font-medium"
                  >
                    Bank Froze Salary Account Guide
                  </Link>
                  <Link
                    href="/application-to-unblock-bank-account-for-loan-emi"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200/60 font-medium"
                  >
                    Application to Unblock Account
                  </Link>
                  <Link
                    href="/ecs-nach-bounce-legal-notice-section-25"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200/60 font-medium"
                  >
                    Section 25 PSSA Defense
                  </Link>
                  <Link
                    href="/arbitration-notice-personal-loan-default"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200/60 font-medium"
                  >
                    Arbitration Notice Defense
                  </Link>
                  <Link
                    href="/credit-card-settlement-process"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200/60 font-medium"
                  >
                    Credit Card Settlement Process
                  </Link>
                  <Link
                    href="/how-to-convince-bank-for-one-time-settlement"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200/60 font-medium"
                  >
                    How to Convince Bank for OTS
                  </Link>
                  <Link
                    href="/cibil-score-kaise-badhaye-after-settlement"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200/60 font-medium"
                  >
                    Improve CIBIL After Settlement
                  </Link>
                  <Link
                    href="/get-noc-after-loan-settlement"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200/60 font-medium"
                  >
                    Get NOC After Loan Settlement
                  </Link>
                  <Link
                    href="/can-recovery-agents-seize-property"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200/60 font-medium"
                  >
                    Can Recovery Agents Seize Property
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="sticky top-6 space-y-5 hidden lg:block">
            
            {/* EMERGENCY CTA CARD (#2452ae Background) */}
            <div
              className="rounded-2xl p-5 text-white shadow-lg space-y-4"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-amber-300 flex-shrink-0" />
                <span className="text-xs font-black uppercase tracking-wider text-blue-100">
                  Emergency Defense Desk
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base font-extrabold leading-snug">
                  Account Frozen? Let Us Unblock It
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Has your lending bank blocked your savings balance or deducted living funds? Speak with CredSettle’s debt dispute specialists today.
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <a
                  href="tel:+918800226635"
                  className="w-full py-2.5 px-3 rounded-xl bg-white text-blue-900 hover:text-[#1886ff] font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-50 transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call +91-8800226635</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#1886ff] text-white hover:bg-blue-600 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span>Request Emergency Case Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* AUTHOR BIO CARD */}
            <div className="rounded-2xl bg-white border border-slate-200/80 p-4 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-sm flex items-center justify-center flex-shrink-0 border border-blue-200">
                  AJ
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Ashish Jhangra
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Legal &amp; Debt Resolution Professional
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialist in Indian retail banking disputes, Section 171 banker set-off litigation, RBI Ombudsman escalations, and commercial debt compromise settlements.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">CredSettle Panel</span>
                <Link
                  href="/author/ashish-jhangra"
                  className="text-[#1886ff] font-bold hover:underline"
                >
                  View Profile &rarr;
                </Link>
              </div>
            </div>

            {/* TRUST BADGES CARD */}
            <div className="rounded-2xl bg-white border border-slate-200/80 p-4 shadow-xs space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>CredSettle Defense Guarantee</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>100% Legal &amp; RBI Compliant Representation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>5,000+ Verified Debt Settlements</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Section 60 CPC Subsistence Protection</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Direct Credit Committee Negotiation</span>
                </li>
              </ul>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
