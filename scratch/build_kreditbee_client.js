const fs = require('fs');
const path = require('path');

const clientCode = `'use client';

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
  Smartphone,
  ShieldAlert,
  Users,
  Shield,
  FileCheck,
  XCircle,
  MessageSquare
} from 'lucide-react';

export default function KreditbeeRecoveryAgentHarassmentClient() {
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
    { id: 'npa-dynamics', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'financial-math', label: '2. Financial Math & Settlement Target' },
    { id: 'comparison-matrix', label: '3. Relief Options Comparison' },
    { id: 'cibil-impact', label: '4. CIBIL Algorithm & Credit Impact' },
    { id: 'infographic-guide', label: '5. Visual Legal Defense Blueprint' },
    { id: 'defense-sop', label: '6. 6-Stage Defense SOP' },
    { id: 'statutory-defense', label: '7. Statutory Notice Defense & Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance Escalation' },
    { id: 'chronological-timeline', label: '9. Chronological Resolution Milestones' },
    { id: 'real-world-scenarios', label: '10. Specialized Dispute Scenarios' },
    { id: 'company-profile', label: '11. About CredSettle' },
    { id: 'frequently-asked-questions', label: '12. Frequently Asked Questions' },
    { id: 'regulatory-sources', label: '13. Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: "Can KreditBee recovery agents legally call my family members, friends, or reference contacts?",
      a: "No. Under the RBI Digital Lending Guidelines and Fair Practices Code, recovery agents are strictly prohibited from contacting third parties, scraping phone directories, or calling references to demand loan repayments or disclose your financial distress."
    },
    {
      q: "Is KreditBee an RBI-registered NBFC, and which entity manages their loan portfolio?",
      a: "KreditBee operates primarily through its parent Systemically Important Non-Deposit taking NBFC, Krazybee Services Private Limited, alongside co-lending banking partners. Both Krazybee and its recovery agencies are legally bound by RBI regulations."
    },
    {
      q: "What legal action can I take if KreditBee agents threaten me or create abusive WhatsApp groups?",
      a: "You can lodge an immediate criminal complaint on the National Cyber Crime Reporting Portal (cybercrime.gov.in) under the IT Act and Bharatiya Nyaya Sanhita, followed by a formal complaint to Krazybee's Principal Nodal Officer and the RBI Integrated Ombudsman."
    },
    {
      q: "Can KreditBee recovery agents visit my home or office without prior notice?",
      a: "Doorstep visits without advance written notice or outside the permissible hours of 8:00 AM to 7:00 PM are strictly unlawful. Agents must carry valid company identification, an authorization letter, and adhere strictly to polite professional conduct."
    },
    {
      q: "What happens if an ECS or NACH mandate bounces on my KreditBee digital loan?",
      a: "A bounced auto-debit may prompt the lender to issue a demand notice under Section 25 of the Payment and Settlement Systems Act, 2007. Responding within 30 days demonstrating genuine financial hardship prevents unilateral prosecution."
    },
    {
      q: "Can I negotiate a One-Time Settlement (OTS) directly with Krazybee Services Private Limited?",
      a: "Yes. Once an unsecured personal loan turns into a Non-Playing Asset after 90 days of default, Krazybee can approve a formal One-Time Settlement, waiving accumulated penal interest and unbilled processing charges."
    },
    {
      q: "How does settling a defaulted KreditBee loan affect my CIBIL credit score?",
      a: "The bureau record will temporarily reflect a Settled status, which reduces your score. However, this stops escalating late fees and legal risk. You can subsequently upgrade the status to Closed through a structured balance clearance or score rebuilding roadmap."
    },
    {
      q: "Can KreditBee file a police FIR or arrest me for failing to pay my loan EMI?",
      a: "No. Defaulting on an unsecured digital personal loan is purely a civil contractual dispute. The Supreme Court of India has established that failure to repay due to genuine financial distress does not constitute criminal breach of trust or fraud."
    },
    {
      q: "How do I file an official grievance against KreditBee recovery harassment with the RBI Ombudsman?",
      a: "If Krazybee's Grievance Redressal Officer or Principal Nodal Officer fails to resolve your harassment complaint within 30 days, file an online appeal on the RBI Integrated Ombudsman portal (cms.rbi.org.in) attaching all call recordings and screenshots."
    },
    {
      q: "How does CredSettle protect borrowers from aggressive KreditBee recovery agents?",
      a: "CredSettle provides institutional legal representation, issues formal cease-and-desist notices to halt unlawful agent outreach, defends against statutory notices, and negotiates authorized compromise settlements directly with NBFC credit committees."
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-blue-100 mb-4 border border-white/15">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
            <span>Statutory Borrower Protection &amp; Digital Lending Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            KreditBee Recovery Agent Harassment: Legal Complaint &amp; Settlement Guide
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Are collection agents calling your relatives, scraping your contact list, or issuing unlawful threats for a defaulted KreditBee personal loan? Understand your statutory protections under Reserve Bank of India directions, lodge formal regulatory complaints, and secure an authorized compromise settlement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Recovery Harassment: File a Legal Complaint</span>
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
                  <span>RBI Compliance Verified</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Digital Lending Directions, IT Act 2000 &amp; BNS 2023.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Summary Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: RECOVERY COMPLAINTS &amp; LEGAL PROTECTIONS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Regulated Corporate Structure:</strong> KreditBee operates primarily through Krazybee Services Private Limited, a Systemically Important NBFC governed strictly by Reserve Bank of India lending directions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Total Prohibition on Contact Scraping:</strong> Accessing address books, calling references without consent, or shaming borrowers before third parties violates RBI Digital Lending Guidelines and the Information Technology Act.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Strict Operational Timing Bounds:</strong> Telephonic recovery outreach and physical home visits are permitted strictly between 8:00 AM and 7:00 PM on business days.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Criminal Exposure for Genuine Default:</strong> Personal loan delinquency is a civil breach of contract; lenders cannot initiate criminal arrests or fabricate police summons for financial distress.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Section 25 NACH Statutory Defense:</strong> Auto-debit bounces require formal legal representation within 30 days to establish bona fide financial hardship and avert unilateral litigation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Exemption from SARFAESI Seizure:</strong> Unsecured digital credit facilities carry no asset charge, rendering arbitrary property attachment or vehicle confiscation legally impossible.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Direct OTS Compromise Window:</strong> Accounts reaching Non-Performing Asset status after 90 days qualify for commercial settlements at 40% to 55% of the gross ledger claim.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Structured 3-Tier Escalation:</strong> Harassment is reported progressively to Krazybee GRO, the Principal Nodal Officer, and the RBI Integrated Ombudsman portal.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Debt Economics & NPA Dynamics */}
            <section id="npa-dynamics" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 1: REGULATORY CONTEXT &amp; ASSET CLASSIFICATION</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Digital Micro-Lending Economics &amp; Krazybee NPA Dynamics
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The rapid growth of instant digital credit in India has transformed retail lending, but it has also introduced aggressive debt collection practices when salaried borrowers experience unexpected financial shocks. KreditBee operates primarily as a digital lending application backed by its parent entity, Krazybee Services Private Limited, a registered Systemically Important Non-Deposit taking Non-Banking Financial Company (NBFC-ND-SI), alongside several institutional co-lending banking partners. Because Krazybee is a regulated entity, all collection operations conducted under its banner must comply strictly with the Reserve Bank of India (RBI) Master Directions on the Fair Practices Code and the comprehensive Digital Lending Guidelines issued in September 2022.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower misses a scheduled monthly installment, the account is categorized systematically under Special Mention Account (SMA) buckets: SMA-0 for delinquencies between 1 and 30 days, SMA-1 for 31 to 60 days, and SMA-2 for 61 to 90 days. Once the default exceeds 90 continuous days, the loan is formally classified as a Non-Performing Asset (NPA). Under prudential provisioning norms mandated by the central bank, NBFCs are obligated to allocate Tier-1 capital reserves against unsecured non-performing balances, which creates strong commercial incentives for the lender to liquidate aged delinquent portfolios through structured One-Time Settlements (OTS) rather than maintaining unproductive provisions on their corporate balance sheet.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Crucially, digital personal loans disbursed through KreditBee are entirely unsecured credit lines. Unlike housing or auto loans, they do not create any hypothecation, mortgage, or registered charge over your physical property. Consequently, the provisions of the SARFAESI Act of 2002 do not apply, and recovery agencies possess zero statutory authority to threaten property attachment, asset seizure, or vehicle confiscation without an enforceable civil court decree.
              </p>
            </section>

            {/* Section 2: Financial Breakdown & Settlement Math */}
            <section id="financial-math" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 2: FINANCIAL BREAKDOWN &amp; SETTLEMENT MATH</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Principal Isolation &amp; 180-Day NPA Settlement Mechanics
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a digital micro-loan enters prolonged default, the outstanding balance shown on the application often inflates rapidly due to compounding penal interest rates, daily bounce penalty charges, administrative processing surcharges, and late payment penalties. In many instances, an initial principal exposure of ₹1,00,000 can balloon to over ₹1,65,000 within six months of non-payment. During institutional settlement negotiations, the primary objective is to forensically isolate the true core principal disbursed from these artificial penalty layers, establishing a realistic and mutually sustainable repayment figure.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lenders understand that continuing aggressive recovery on an unsecured NPA yields diminishing returns while escalating their regulatory liability if agents violate RBI conduct norms. Therefore, when an account reaches 180 days past due and is fully provisioned, the NBFC credit committee routinely accepts compromise settlement proposals ranging between 40% and 55% of the total ledger claim, waiving 100% of the accumulated penal interest and non-statutory fees upon single or split tranche remittance.
              </p>

              {/* Financial Math Card */}
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white p-5 sm:p-6 md:p-7 shadow-md space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-300">Representative 180-Day NPA Settlement Breakdown</span>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full font-bold">52% Net Waiver</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <p className="text-[11px] text-slate-400 font-medium">Original Principal</p>
                    <p className="text-base sm:text-lg font-black text-white mt-1">₹1,00,000</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <p className="text-[11px] text-slate-400 font-medium">Penal Interest &amp; Fees</p>
                    <p className="text-base sm:text-lg font-black text-rose-300 mt-1">₹65,000</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <p className="text-[11px] text-slate-400 font-medium">Gross Ledger Claim</p>
                    <p className="text-base sm:text-lg font-black text-amber-300 mt-1">₹1,65,000</p>
                  </div>
                  <div className="bg-blue-600/30 rounded-xl p-3 border border-blue-400/30">
                    <p className="text-[11px] text-blue-200 font-medium">Final OTS Target</p>
                    <p className="text-base sm:text-lg font-black text-emerald-300 mt-1">₹50,000 - ₹55,000</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-white/10">
                  Executing an authorized compromise settlement eliminates all residual debt liabilities, halts telephonic harassment permanently, and secures an official No Dues Certificate directly from Krazybee Services Private Limited.
                </p>
              </div>
            </section>

            {/* Section 3: 4-Sided Bordered Comparison Matrix */}
            <section id="comparison-matrix" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileSpreadsheet className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 3: COMPARATIVE LEGAL &amp; FINANCIAL ANALYSIS</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Resolution Pathways Comparison Matrix
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers facing digital loan delinquency have multiple strategic avenues to consider, each with distinct legal obligations, credit bureau consequences, and financial impacts. Evaluating these options objectively allows you to choose the most protective course of action based on your income stability and liquidity.
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-900 font-bold border-b border-slate-200/80">
                      <th className="p-3.5 sm:p-4">Resolution Pathway</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200/80">Financial Outflow</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200/80">Harassment Halting</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200/80">CIBIL Bureau Impact</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200/80">Legal Finality</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80 text-emerald-700 font-semibold">40% to 55% of ledger claim</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Immediate upon sanction</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Marked as Settled</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Complete with official NDC</td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Loan Restructuring / Moratorium</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">100% principal + regular interest</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Temporary reprieve</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Marked as Restructured</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Ongoing monthly obligation</td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">National Lok Adalat Settlement</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">45% to 60% compromise</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Permanent post-award</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Reported as Settled</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Non-appealable decree</td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Contested Court Litigation</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">High advocate fees + court costs</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Subject to stay orders</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Marked as Suit Filed</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Prolonged multi-year battle</td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Inaction &amp; Ignoring Calls</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Escalating penalties &amp; interest</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Severe third-party harassment</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Written-Off / Default status</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Perpetual legal exposure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-impact" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 4: CIBIL ALGORITHMS &amp; REBUILDING TRAJECTORY</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Credit Scoring Mechanics &amp; Post-Settlement Rectification
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding the mathematical architecture of the TransUnion CIBIL scoring model helps contextualize why defaults cause rapid score deterioration and how formal settlement creates a baseline for financial recovery. The standard credit scoring algorithm distributes 900 points across five core functional weights: 35% repayment history, 30% credit utilization ratio, 15% credit vintage and age, 10% credit mix between secured and unsecured facilities, and 10% recent hard credit inquiries. When a digital personal loan defaults beyond 90 days, the 35% repayment component takes an immediate hit, often dropping a 760 score down to the 560 to 600 range.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Executing a compromise settlement reports the trade line status as Settled rather than Closed, which temporarily depresses the score by a modest 30 to 50 points. However, settling immediately terminates compounding interest, stops monthly DPD (Days Past Due) reporting increments, and permanently prevents the account from being classified as Written-Off. Once the No Dues Certificate is secured, borrowers can utilize Section 21 of the Credit Information Companies (Regulation) Act (CICRA 2005) to file formal bureau data disputes or later convert the status from Settled to Closed by clearing the waived differential, thereby restoring a 750+ credit score within 12 to 18 months through disciplined credit card usage.
              </p>
            </section>

            {/* Section 5: Visual Infographic Asset Card */}
            <section id="infographic-guide" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Smartphone className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 5: VISUAL LEGAL DEFENSE BLUEPRINT</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Step-by-Step KreditBee Harassment Defense Workflow
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our specialized visual roadmap synthesizes the core procedural stages required to halt unlawful collection harassment, enforce RBI Digital Lending Directions against Krazybee Services, and achieve an authorized compromise settlement.
              </p>

              {/* Infographic Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/kreditbee-recovery-agent-harassment.jpg"
                  alt="KreditBee Recovery Agent Harassment Legal Defense & Settlement Roadmap"
                  width={1376}
                  height={768}
                  priority
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 bg-slate-900/90 text-center border-t border-slate-800">
                  <a
                    href="/images/infographics/kreditbee-recovery-agent-harassment.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-blue-300 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Full-Resolution Legal Architecture Diagram</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* Section 6: Step-by-Step SOP (6 Stages) */}
            <section id="defense-sop" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 6: 6-STAGE DEFENSE &amp; SETTLEMENT SOP</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Institutional Standard Operating Procedure for Loan Resolution
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Resolving digital debt disputes with institutional lenders requires a methodical, evidence-based approach that combines forensic documentation with statutory legal representation. Following this tested 6-stage protocol safeguards your fundamental rights while securing optimal financial relief.
              </p>

              <div className="space-y-4">
                {/* Stage 1 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff]">
                    <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center font-black">1</span>
                    <span>Stage 1: Forensic Digital Evidence Audit</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Preserve all incoming communications, WhatsApp threat messages, call recordings, and caller phone numbers. Request full identity cards and agency authorization letters from any visiting agents, creating a timestamped evidentiary audit trail for regulatory submission.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff]">
                    <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center font-black">2</span>
                    <span>Stage 2: Statutory Hardship Dossier Compilation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Compile verifiable documentation demonstrating genuine financial hardship, including termination letters, medical hospitalization discharge summaries, bank statements demonstrating cash flow impairment, or business closure notices to establish bona fide inability to maintain regular EMIs.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff]">
                    <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center font-black">3</span>
                    <span>Stage 3: NBFC Credit Committee Formal Representation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Serve a formal legal notice to Krazybee Services Private Limited asserting protections under RBI Digital Lending Directions, detailing collection violations, and formally placing the hardship dossier before the authorized competent credit committee for OTS evaluation.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff]">
                    <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center font-black">4</span>
                    <span>Stage 4: Bilateral Financial Negotiations</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Engage in structured bilateral dialogue with the NBFC nodal settlement desk, stripping away accumulated penal interest, processing surcharges, and daily bounce penalties to arrive at a 40% to 55% compromise figure aligned with verified disposable capacity.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff]">
                    <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center font-black">5</span>
                    <span>Stage 5: Settlement Sanction Letter Vetting</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Examine the formal settlement letter issued on official Krazybee letterhead to verify explicit mention of the agreed waiver, exact payment tranches, explicit commitment to close legal claims, and timeline for CIBIL bureau status update.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff]">
                    <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center font-black">6</span>
                    <span>Stage 6: Direct Remittance &amp; No Dues Certificate</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Execute settlement payment strictly through Krazybee official banking channels or verified virtual account handles, strictly avoiding private intermediary accounts, and obtain an unconditional No Dues Certificate (NDC) confirming full legal discharge.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-defense" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 7: STATUTORY NOTICE DEFENSE &amp; LEGAL RIGHTS</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Analytical Framework for Defending Statutory Notices
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When digital loans default, lenders frequently issue statutory notices to induce panic. Knowing the exact legal boundaries of each statutory enactment prevents ungrounded anxiety and enables an authoritative, evidence-backed legal response.
              </p>

              {/* 4-Card Analytical Defense Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card 1: Section 25 PSSA 2007 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <span>Section 25 PSSA 2007 (NACH Bounce)</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Auto-debit dishonour carries quasi-criminal liability analogous to cheque bounce. However, establishing genuine civil inability to pay within the 30-day statutory notice window effectively refutes criminal intention, enabling compromise settlement before trial court escalation.
                  </p>
                </div>

                {/* Card 2: Section 138 NI Act 1881 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <Gavel className="w-4 h-4 text-[#1886ff]" />
                    <span>Section 138 NI Act 1881 (Cheque Dishonour)</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Applies strictly when physical signed cheques are dishonoured for insufficient funds. Lenders cannot initiate Section 138 proceedings for purely electronic NACH failures without presenting a physical instrument, narrowing prosecutorial scope in digital lending.
                  </p>
                </div>

                {/* Card 3: Unilateral Arbitration Defense */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <span>Arbitration Act Section 21 &amp; Supreme Court Rulings</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Unilateral appointment of sole arbitrators by digital NBFCs is legally void ab initio under Supreme Court precedents in <em>Perkins Eastman</em> and <em>TRF Limited</em>. Formal legal objections nullify ex parte arbitral awards issued without mutual consent.
                  </p>
                </div>

                {/* Card 4: DRT Jurisdictional Exemption */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    <span>DRT Section 19 &amp; Small Claims Limitations</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Debt Recovery Tribunals (DRT) exercise pecuniary jurisdiction exclusively on claims exceeding ₹20 Lakhs under the RDBFI Act 1993. Micro-personal loans below this threshold are entirely exempt from DRT attachment or recovery certificates.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Users className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 8: 3-TIER GRIEVANCE ESCALATION MATRIX</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Hierarchical Redressal for Recovery Harassment
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If collection agents engage in abusive outreach or violate third-party privacy, execute a structured multi-tier regulatory escalation to hold the regulated lending entity accountable.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="text-xs font-extrabold text-[#1886ff] uppercase">Level 1: Krazybee GRO</div>
                  <h3 className="font-bold text-slate-900 text-sm">Grievance Redressal Officer</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a written complaint via email with timestamped evidence. Under RBI rules, the GRO must acknowledge receipt within 48 hours and resolve the issue within 7 to 10 working days.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="text-xs font-extrabold text-[#1886ff] uppercase">Level 2: Principal Nodal Officer</div>
                  <h3 className="font-bold text-slate-900 text-sm">Executive Escalation Desk</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If Level 1 is unresolved or harassment persists, escalate to the Principal Nodal Officer (PNO) of Krazybee Services. The PNO has executive authority to freeze outsourced agency activity within 14 to 21 days.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="text-xs font-extrabold text-[#1886ff] uppercase">Level 3: RBI Ombudsman</div>
                  <h3 className="font-bold text-slate-900 text-sm">Central Banking Redressal</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If 30 days elapse without resolution, lodge a formal appeal on the RBI Integrated Ombudsman portal (cms.rbi.org.in). The Ombudsman can penalize the NBFC and award compensation for mental agony.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Chronological Timeline Table */}
            <section id="chronological-timeline" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 9: PROCEDURAL MILESTONES &amp; TIMELINES</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Delinquency to Settlement Timeline
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Tracking procedural progression across the delinquency life cycle allows borrowers to anticipate lender actions and initiate settlement negotiations during optimal regulatory windows.
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-900 font-bold border-b border-slate-200/80">
                      <th className="p-3.5 sm:p-4">Timeframe</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200/80">Asset Category</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200/80">Lender Collection Activity</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200/80">Borrower Action Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">SMA-0 Stage</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Automated SMS, in-app alerts, soft IVR calls</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Record communications, assess liquidity</td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">SMA-1 Stage</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Tele-calling escalation, Section 25 reminder notices</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Issue written hardship notification to lender</td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">SMA-2 Stage</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Third-party agency allocation, intensified calling</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Log agent details, warn against third-party outreach</td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Day 91 to 180</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">NPA Classification</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Mandatory 100% provisioning, formal legal notices</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Open formal OTS negotiations at 40%-55%</td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Month 6 Onwards</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Loss / Recovery Pool</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">ARC assignment consideration or deep compromise</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Finalize settlement sanction &amp; secure NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: Specialized Real-World Scenarios */}
            <section id="real-world-scenarios" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Practical Resolution for Complex Dispute Cases
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Different default scenarios require tailored legal interventions to insulate personal privacy while negotiating debt compromise with institutional creditors.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Scenario 1 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Unauthorized Contact Scraping &amp; Relative Calling</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    When recovery agents call non-guarantor family members or workplace contacts, immediately issue a cease-and-desist letter citing RBI Digital Lending Circular Section 4. Lodge an instant Cyber Crime grievance under Section 66E of the IT Act to hold Krazybee vicariously liable for agency violations.
                  </p>
                </div>

                {/* Scenario 2 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Third-Party WhatsApp Group Defamation</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    If an agent creates WhatsApp groups adding relatives or colleagues to publicly shame you, take full unedited screenshots showing group participants and the agent number. This constitutes criminal intimidation and public defamation under Section 356(2) of the Bharatiya Nyaya Sanhita 2023.
                  </p>
                </div>

                {/* Scenario 3 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Salaried Executive Layoffs &amp; Sudden Loss of Income</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    When corporate layoffs eliminate monthly salary inflows, submit employment separation letters to Krazybee before the 90-day mark. This preemptively proves good faith, refutes fraudulent intent, and establishes an evidentiary basis for a low-percentage OTS settlement.
                  </p>
                </div>

                {/* Scenario 4 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Multi-App Delinquency &amp; Consolidation Defense</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Borrowers trapped across multiple digital lending applications should not pay piecemeal extortions. Consolidate your disputes through institutional legal counsel, enforce uniform RBI conduct guidelines across all lenders, and negotiate sequential compromise settlements.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* Section 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 12: FREQUENTLY ASKED QUESTIONS</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Authoritative Legal Answers on KreditBee Recovery &amp; Settlement
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Review verified answers to the most critical legal and regulatory questions regarding digital loan recovery, RBI guidelines, and debt settlement.
              </p>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 bg-slate-50 hover:bg-slate-100/80 transition-colors font-bold text-slate-900 text-xs sm:text-sm md:text-base"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={'w-4 h-4 text-[#1886ff] flex-shrink-0 transition-transform duration-200 ' + (isOpen ? 'transform rotate-180' : '')}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-4 sm:p-5 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/80">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 13: STATUTORY CITATIONS &amp; REGULATORY AUTHORITIES</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Regulatory Frameworks &amp; Outbound Verification Links
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                All legal protections, complaint procedures, and settlement standards detailed in this guide are grounded in central banking directions and statutory Indian enactments.
              </p>

              {/* 6 Outbound Authority Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex items-start gap-2.5 group"
                >
                  <ExternalLink className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 group-hover:text-[#1886ff] font-bold">Reserve Bank of India</strong>
                    <span className="text-slate-500 text-[11px]">rbi.org.in (Digital Lending Guidelines 2022)</span>
                  </div>
                </a>

                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex items-start gap-2.5 group"
                >
                  <ExternalLink className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 group-hover:text-[#1886ff] font-bold">RBI Integrated Ombudsman</strong>
                    <span className="text-slate-500 text-[11px]">cms.rbi.org.in (Online Grievance Redressal)</span>
                  </div>
                </a>

                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex items-start gap-2.5 group"
                >
                  <ExternalLink className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 group-hover:text-[#1886ff] font-bold">TransUnion CIBIL India</strong>
                    <span className="text-slate-500 text-[11px]">cibil.com (CICRA 2005 Compliance)</span>
                  </div>
                </a>

                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex items-start gap-2.5 group"
                >
                  <ExternalLink className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 group-hover:text-[#1886ff] font-bold">India Code Legislative Portal</strong>
                    <span className="text-slate-500 text-[11px]">indiacode.nic.in (PSSA 2007 &amp; BNS 2023)</span>
                  </div>
                </a>

                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex items-start gap-2.5 group"
                >
                  <ExternalLink className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 group-hover:text-[#1886ff] font-bold">National Legal Services Authority</strong>
                    <span className="text-slate-500 text-[11px]">nalsa.gov.in (Lok Adalat Settlement Framework)</span>
                  </div>
                </a>

                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex items-start gap-2.5 group"
                >
                  <ExternalLink className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 group-hover:text-[#1886ff] font-bold">National Cyber Crime Reporting</strong>
                    <span className="text-slate-500 text-[11px]">cybercrime.gov.in (Data Privacy &amp; Extortion)</span>
                  </div>
                </a>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100 space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Related Debt Resolution &amp; Legal Protection Resources
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/stop-recovery-agent-harassment"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                  >
                    Stop Recovery Harassment
                  </Link>
                  <Link
                    href="/rbi-rules-for-recovery-agents"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                  >
                    RBI Recovery Agent Rules
                  </Link>
                  <Link
                    href="/fake-loan-app-harassment-cyber-crime"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                  >
                    Fake Loan App Cyber Crime
                  </Link>
                  <Link
                    href="/ecs-nach-bounce-legal-notice-section-25"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                  >
                    Section 25 NACH Notice Defense
                  </Link>
                  <Link
                    href="/can-recovery-agents-seize-property"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                  >
                    Can Agents Seize Property?
                  </Link>
                  <Link
                    href="/personal-loan-settlement"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                  >
                    Personal Loan Settlement
                  </Link>
                  <Link
                    href="/lok-adalat-personal-loan-settlement"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                  >
                    Lok Adalat Debt Settlement
                  </Link>
                  <Link
                    href="/convert-settled-status-to-closed"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                  >
                    Convert Settled to Closed CIBIL
                  </Link>
                  <Link
                    href="/cibil-score-kaise-badhaye-after-settlement"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                  >
                    Improve CIBIL After Settlement
                  </Link>
                  <Link
                    href="/mental-harassment-by-recovery-agents-legal-action"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                  >
                    Legal Action for Mental Harassment
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
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#1886ff] font-extrabold text-lg flex-shrink-0">
                  AJ
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Ashish Jhangra</h3>
                  <p className="text-xs text-slate-500 font-medium">Legal &amp; Debt Resolution Professional</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                Specialist in digital lending dispute defense, RBI Fair Practices Code enforcement, and institutional NPA compromise settlements across India.
              </p>
            </div>

            {/* Card 2: Emergency CTA Card (#2452ae Background) */}
            <div
              className="rounded-3xl text-white p-5 sm:p-6 shadow-md space-y-4"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-extrabold tracking-wide uppercase">
                <Lock className="w-3 h-3 text-white" />
                <span>100% Confidential Support</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black leading-tight">
                Facing Harassment From KreditBee Agents?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed">
                Halt relative calling, cyber threats, and illegal collection visits today with institutional legal representation and RBI grievance filing.
              </p>
              <Link
                href="/contact"
                className="w-full py-3 bg-white text-blue-900 hover:text-[#1886ff] hover:bg-slate-50 rounded-xl font-extrabold text-xs sm:text-sm text-center block transition-all shadow-sm"
              >
                Stop Recovery Harassment Now
              </Link>
              <div className="pt-2 border-t border-white/15 text-center">
                <a
                  href="tel:+918800226635"
                  className="text-xs font-bold text-white/90 hover:text-white inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: +91-8800226635</span>
                </a>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs text-slate-600">
              <h4 className="font-bold text-slate-900 text-sm">CredSettle Trust Commitments</h4>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> 100% transparent legal consultation and dispute evaluation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct NBFC Remittance:</strong> No middleman accounts; direct settlement with Krazybee.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Compliance Verification:</strong> Direct enforcement of central banking directions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated digital loan settlement advocates.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/stop-recovery-agent-harassment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Stop Recovery Agent Harassment
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal rights &amp; protection roadmap &rarr;</span>
                </Link>

                <Link
                  href="/rbi-rules-for-recovery-agents"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Recovery Agent Guidelines
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Timings, conduct &amp; restrictions &rarr;</span>
                </Link>

                <Link
                  href="/ecs-nach-bounce-legal-notice-section-25"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 25 NACH Notice Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Auto-debit failure legal remedies &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
`;

fs.writeFileSync(
  path.join(__dirname, '../src/app/kreditbee-recovery-agent-harassment/KreditbeeRecoveryAgentHarassmentClient.tsx'),
  clientCode,
  'utf8'
);
console.log("KreditbeeRecoveryAgentHarassmentClient.tsx written successfully.");
