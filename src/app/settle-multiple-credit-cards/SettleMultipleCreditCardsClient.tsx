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
  Layers,
  Percent,
  ShieldAlert
} from 'lucide-react';

export default function SettleMultipleCreditCardsClient() {
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
    { id: 'debt-economics-npa', label: '1. Multi-Card Debt Economics & NPA' },
    { id: 'financial-breakdown-math', label: '2. Financial Breakdown & Settlement Math' },
    { id: 'resolution-comparison-matrix', label: '3. Multi-Card Resolution Comparison' },
    { id: 'cibil-algorithm-restoration', label: '4. CIBIL Algorithm & Credit Rebuilding' },
    { id: 'infographic-overview', label: 'Visual 6-Step Multi-Card Blueprint' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Multi-Card Settlement SOP' },
    { id: 'statutory-notice-defense', label: '7. Statutory Notice Defense & Rights' },
    { id: 'three-tier-escalation', label: '8. 3-Tier Grievance & Ombudsman Matrix' },
    { id: 'chronological-milestones', label: '9. Chronological Resolution Milestones' },
    { id: 'specialized-card-scenarios', label: '10. Specialized Multi-Card Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can you settle multiple credit cards from different banks simultaneously?',
      a: 'Yes. You can settle multiple cards across banks like HDFC, SBI Card, ICICI, and Axis concurrently through structured One-Time Settlement (OTS) negotiations.'
    },
    {
      q: 'What percentage waiver can I expect when settling multiple credit cards?',
      a: 'Settlement waivers typically range between 45% and 65% of claimed balances. Banks waive 100% of accumulated penal fees and unbundled interest.'
    },
    {
      q: 'Which credit cards should be prioritized during multi-lender settlements?',
      a: 'Prioritize cards with highest revolving APRs (42% to 54%), accounts in your salary bank to prevent banker lien debits, and active legal notices.'
    },
    {
      q: 'How do I stop multiple collection agencies from harassing my family and workplace?',
      a: 'Issue a formal Legal Representation Notice under RBI Master Directions. This mandates routing all calls to legal counsel and bars contacting third parties.'
    },
    {
      q: 'What statutory legal notices can credit card issuers issue in India?',
      a: 'Banks issue recall notices, Section 25 PSSA notices for bounced auto-debits, Section 138 NI Act notices, and Section 21 Arbitration notices.'
    },
    {
      q: 'Can I be arrested or face criminal imprisonment for credit card default?',
      a: 'No. Unsecured credit card default is strictly a civil dispute. Lenders cannot arrest borrowers for genuine financial distress or inability to pay.'
    },
    {
      q: 'Can a bank appoint a sole arbitrator without mutual consent for card dues?',
      a: 'No. Under Supreme Court rulings in TRF Ltd. and Perkins Eastman, unilateral appointment of an arbitrator is de jure ineligible under Section 12(5).'
    },
    {
      q: 'How does settling multiple credit cards affect my CIBIL credit score?',
      a: 'Settled accounts reflect as Settled, stopping negative DPD reporting. Borrowers rebuild scores to 750+ within 12 to 18 months via secured credit cards.'
    },
    {
      q: 'Can multi-card settlement amounts be paid in monthly installment tranches?',
      a: 'Yes. Banks routinely sanction compromise settlements payable across two to four monthly tranches under official written sanction terms.'
    },
    {
      q: 'What documentation confirms complete legal discharge after credit card settlement?',
      a: 'After remitting settlement funds directly to the card account, obtain an official signed No Dues Certificate (NDC) confirming zero remaining liability.'
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider mb-4 text-blue-100">
            <Layers className="w-3.5 h-3.5 text-blue-200" />
            <span>Multi-Bank Debt Resolution Framework</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How to Settle Multiple Credit Cards at Once
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A comprehensive multi-bank debt resolution blueprint across HDFC, SBI Card, ICICI, Axis, Amex, and Standard Chartered. Learn how to sequence high-risk cards, stop synchronized recovery harassment, eliminate compounding penal interest, and secure a 45% to 65% aggregate waiver through structured legal representation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Schedule a Multi-Card Legal Assessment</span>
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
                  <span>Statutory Legal Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by RBI Master Directions on Credit Cards &amp; Banking Ombudsman Scheme.
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
                <span>EXECUTIVE BRIEF: MULTI-BANK CREDIT CARD RESOLUTION</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Risk Sequencing:</strong> Prioritizing accounts by revolving APR (42% to 54%), NACH mandates, and aggressive recovery desks before low-exposure cards.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Charge Auditing:</strong> Stripping predatory late fees, finance charges, and GST to establish the core unbundled principal debt.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Minimum Due Trap:</strong> Halting revolving payments that merely service compounding interest without reducing principal balances.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Harassment Shield:</strong> Appointing formal legal counsel to halt third-party agency calls and enforce RBI recovery guidelines.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Notice Defense:</strong> Answering Section 25 PSSA and Section 138 NI Act notices within 30 days to prevent court summons.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Arbitration Defense:</strong> Challenging unilateral arbitrator appointments under Supreme Court Perkins Eastman precedent.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Credit Committee OTS:</strong> Submitting a consolidated hardship dossier to negotiate 45% to 65% aggregate principal waivers.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">NDC &amp; CIBIL Repair:</strong> Securing signed No Dues Certificates and initiating Section 21 CICRA credit score corrections.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: DEBT ECONOMICS & NPA DYNAMICS */}
            <section id="debt-economics-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-[#1886ff] font-bold text-sm">
                  01
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Multi-Card Debt Economics &amp; NPA Dynamics Across Indian Banks
                </h2>
              </div>

              <div className="space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Juggling multiple delinquent credit cards across institutions like HDFC Bank, SBI Card, ICICI Bank, Axis Bank, and American Express creates an aggressive compounding debt cycle. Unsecured revolving credit carries finance charges of 3.5% to 4.5% monthly (42% to 54% APR). When payments lapse across several cards simultaneously, compounded finance levies, late fees, and 18% GST double outstanding balances within fifteen months.
                </p>

                <p>
                  Delinquent accounts transition through statutory RBI classifications from SMA stages to Non-Performing Assets (NPA) at 90 days past due. Commercial banks allocate Tier-1 capital provisioning against unsecured NPAs, setting aside 15% at Sub-Standard, rising to 40% at Doubtful-1 and 100% at Doubtful-2. Since credit cards are unsecured debts governed by the Indian Contract Act 1872 and exempt from SARFAESI attachment, this provisioning drag compels credit committees to approve compromise settlements.
                </p>
              </div>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="financial-breakdown-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-[#1886ff] font-bold text-sm">
                  02
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Financial Breakdown &amp; Multi-Bank Settlement Calculations
                </h2>
              </div>

              <div className="space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  When borrowers negotiate without legal backing, collection agencies demand payment on inflated statement totals. In reality, forensic audits reveal that core principal expenditure accounts for only 45% to 55% of the claimed balance, while the remainder comprises penal fees that banks routinely waive under compromise policies.
                </p>

                <p>
                  A structured resolution strips away 100% of accumulated penal fees and negotiates a realistic principal haircut across all card accounts based on verifiable distress, as shown in the representative four-card portfolio below:
                </p>
              </div>

              {/* 4-Sided Bordered Calculation Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white my-4">
                <table className="w-full text-xs sm:text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/90 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3 sm:p-3.5">Credit Card Account</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200">Claimed Balance</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200">Core Principal</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200">Penal Fees Stripped</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200 text-emerald-700">Final OTS Sanction</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200 text-blue-700">Total Waiver</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">HDFC Bank Regalia</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">₹3,50,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-semibold">₹1,80,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-rose-600">₹1,70,000 (100%)</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-emerald-600">₹95,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-blue-600">72.8%</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">SBI Card SimplyCLICK</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">₹2,20,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-semibold">₹1,20,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-rose-600">₹1,00,000 (100%)</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-emerald-600">₹60,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-blue-600">72.7%</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">ICICI Bank Coral</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">₹2,80,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-semibold">₹1,50,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-rose-600">₹1,30,000 (100%)</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-emerald-600">₹75,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-blue-600">73.2%</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Axis Bank Magnus</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">₹3,00,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-semibold">₹1,50,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-rose-600">₹1,50,000 (100%)</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-emerald-600">₹80,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-blue-600">73.3%</td>
                    </tr>
                    <tr className="bg-blue-50/70 font-bold text-slate-900 border-t-2 border-blue-200">
                      <td className="p-3 sm:p-3.5 text-[#1886ff]">Consolidated Portfolio</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">₹11,50,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-slate-900">₹6,00,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-rose-600">₹5,50,000 Stripped</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-emerald-700">₹3,10,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-blue-700">73.0% Overall</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="resolution-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-[#1886ff] font-bold text-sm">
                  03
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Strategic Multi-Card Resolution Comparison Matrix
                </h2>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Evaluating different debt resolution paths across critical legal and financial parameters illustrates why structured One-Time Settlement provides the fastest permanent liability discharge:
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white my-4">
                <table className="w-full text-xs sm:text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/90 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3 sm:p-3.5">Resolution Strategy</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200">Financial Haircut</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200">Cashflow Impact</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200">Legal Protection</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200">Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-slate-50/60 transition-colors bg-blue-50/30">
                      <td className="p-3 sm:p-3.5 font-bold text-[#1886ff]">Structured One-Time Settlement (OTS)</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-emerald-600">45% to 65% Principal &amp; Fees</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-medium">100% Debt Elimination</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-emerald-600 font-semibold">Immediate Legal Shield</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">45 to 90 Days</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">EMI Restructuring / Balance Transfer</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-rose-600 font-semibold">0% (Full Debt + Interest)</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Long-term EMIs at 16% - 24%</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-amber-600">Temporary Relief Only</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">36 to 60 Months</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">National Lok Adalat Conciliation</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-emerald-600 font-semibold">30% to 50% Waiver</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Lump Sum on Hearing Date</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-emerald-600">Judicial Decree Binding</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Next Scheduled Adalat</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Civil Court Litigation</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-slate-600">Judge Discretion</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">High Legal &amp; Court Costs</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-slate-600">Formal Contested Defense</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">2 to 5 Years</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Inaction / Minimum Due Revolving</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-rose-600 font-bold">Negative (300% Total Cost)</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-rose-600">Endless Compounding Bleed</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-rose-600">Uncontrolled Harassment</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Indefinite Trap</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: TECHNICAL CIBIL ALGORITHM & SCORING MATH */}
            <section id="cibil-algorithm-restoration" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-[#1886ff] font-bold text-sm">
                  04
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Credit Bureau Impact &amp; Technical CIBIL Score Restoration
                </h2>
              </div>

              <div className="space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  TransUnion CIBIL scores are calculated across five distinct weighted pillars: Payment History (35%), Credit Utilization Ratio (30%), Credit History Length (15%), Credit Mix (10%), and Recent Inquiries (10%). Concurrent defaults across multiple card tradelines trigger repeated 90+ Days Past Due (DPD) reporting, causing an immediate score drop from 780 to the 520 - 560 range.
                </p>

                <p>
                  Completing a One-Time Settlement updates credit bureau records to &quot;Settled&quot;, permanently halting active delinquency accumulation. Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), banks must report zero outstanding balance within thirty days. By utilizing a secured credit card backed by a fixed deposit and maintaining disciplined repayments, borrowers routinely rebuild a prime 750+ CIBIL score within twelve to eighteen months.
                </p>
              </div>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-[#1886ff] font-bold text-sm">
                  05
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Visual Multi-Card Settlement Architecture &amp; SOP
                </h2>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-6 shadow-xs space-y-4">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-100 bg-slate-900">
                  <Image
                    src="/images/infographics/settle-multiple-credit-cards.jpg"
                    alt="How to Settle Multiple Credit Cards at Once Strategic Roadmap"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 text-xs text-slate-600">
                  <p className="font-medium text-slate-700">
                    Figure 1: CredSettle 6-Stage Strategic Multi-Card Debt Resolution Blueprint illustrating portfolio audit, legal notice shield, credit committee representation, and NDC issuance.
                  </p>
                  <a
                    href="/images/infographics/settle-multiple-credit-cards.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-bold hover:underline inline-flex items-center gap-1 flex-shrink-0"
                  >
                    <span>View High-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-sop" className="scroll-target space-y-5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-[#1886ff] font-bold text-sm">
                  06
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Step-by-Step SOP: 6-Stage Multi-Card Settlement Protocol
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Stage 1 */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs hover:border-blue-200 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#1886ff] uppercase tracking-wider">STAGE 01</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">Audit</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Multi-Card Forensic Portfolio Audit</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Compile monthly card statements. Segregate pure principal transactions from capitalized finance charges and penal fees. Rank accounts by interest velocity, legal exposure, and auto-debit mandates.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs hover:border-blue-200 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#1886ff] uppercase tracking-wider">STAGE 02</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">Dossier</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Consolidated Hardship Dossier</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Assemble certified documentary proof substantiating bona fide financial distress, such as termination letters or medical records. Calculate an affordable settlement pool and allocate budgets per bank.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs hover:border-blue-200 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#1886ff] uppercase tracking-wider">STAGE 03</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">Legal Shield</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Synchronized Anti-Harassment Defense</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Issue formal Legal Representation Notices under RBI Master Directions to redirect calls exclusively to legal counsel. Draft statutory responses to Section 25 PSSA and Section 138 notices within thirty days.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs hover:border-blue-200 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#1886ff] uppercase tracking-wider">STAGE 04</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">Negotiations</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Bilateral Credit Committee Representation</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Engage directly with bank Nodal Officers and Stressed Asset Desks. Present the hardship dossier to negotiate 100% penal interest write-offs alongside a 45% to 65% core principal haircut.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs hover:border-blue-200 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#1886ff] uppercase tracking-wider">STAGE 05</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">Vetting</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Settlement Sanction Letter Legal Vetting</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Vet all settlement offer letters thoroughly. Ensure generation on official bank letterhead with unique reference numbers, explicit full and final waiver covenants, clear due dates, and zero future claims.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs hover:border-blue-200 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#1886ff] uppercase tracking-wider">STAGE 06</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">Closure</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Direct Remittance, NDC &amp; CIBIL Update</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Remit sanctioned settlement funds directly to the card loan accounts. Secure signed No Dues Certificates (NDC) from each issuer and file Section 21 CICRA requests to update credit records.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & LEGAL RIGHTS */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-[#1886ff] font-bold text-sm">
                  07
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Statutory Legal Notice Defense &amp; Anti-Harassment Rights
                </h2>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                When cardholders default across multiple institutions, banks issue statutory notices to exert legal pressure. Every Indian borrower is protected by clear statutory safeguards against coercive actions:
              </p>

              {/* 4-Card Analytical Defense Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-[#1886ff]">
                    <Scale className="w-5 h-5 flex-shrink-0" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Section 25 PSSA (NACH Bounce Defense)</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Section 25 PSSA governs failed auto-debits. Inability to pay due to distress lacks criminal mens rea. Filing a formal legal reply within 30 days demonstrating hardship prevents court summons.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-[#1886ff]">
                    <Gavel className="w-5 h-5 flex-shrink-0" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Section 138 NI Act (Cheque Bounce Shield)</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    For security cheque deposits, banks issue Section 138 notices. Section 138 offenses are compoundable under Section 147 NI Act, meaning proceedings are dismissed upon settlement execution.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-[#1886ff]">
                    <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Challenging Unilateral Arbitrators</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Supreme Court rulings in TRF Ltd. and Perkins Eastman, banks cannot unilaterally appoint an arbitrator. Such appointments are de jure ineligible under Section 12(5) of the Arbitration Act.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-[#1886ff]">
                    <BadgeAlert className="w-5 h-5 flex-shrink-0" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">RBI Fair Practices Code Enforcement</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The RBI Master Direction on Credit Cards (2022) bars agents from calling outside 08:00 to 19:00 hours, contacting family, or visiting unannounced, under penalty of severe regulatory sanctions.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER GRIEVANCE REDRESSAL MATRIX */}
            <section id="three-tier-escalation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-[#1886ff] font-bold text-sm">
                  08
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  3-Tier Banking Grievance &amp; Regulatory Escalation Framework
                </h2>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                When recovery agents violate fair practice norms or branch officers refuse genuine settlement requests, execute a structured three-tier statutory escalation:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <span className="text-[11px] font-extrabold text-[#1886ff] uppercase tracking-wider block">LEVEL 1: INTERNAL</span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Grievance Officer (GRO)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a written complaint to the bank Grievance Redressal Officer detailing agent harassment and settlement proposals. Response turnaround: 7 to 10 days.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <span className="text-[11px] font-extrabold text-[#1886ff] uppercase tracking-wider block">LEVEL 2: NODAL</span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Principal Nodal Officer (PNO)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalate unresolved multi-card disputes to the Principal Nodal Officer with authority to sanction compromise settlements. Turnaround: 14 to 21 days.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <span className="text-[11px] font-extrabold text-[#1886ff] uppercase tracking-wider block">LEVEL 3: REGULATOR</span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">RBI Banking Ombudsman</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File an apex petition on cms.rbi.org.in under the RBI Integrated Ombudsman Scheme for harassment or denial of fair compromise terms.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-[#1886ff] font-bold text-sm">
                  09
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Multi-Card Delinquency Timeline &amp; Resolution Milestones
                </h2>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Tracking delinquency milestones allows borrowers to negotiate during peak credit committee settlement authority windows:
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white my-4">
                <table className="w-full text-xs sm:text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/90 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3 sm:p-3.5">Phase</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200">Classification</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200">Bank Recovery Action</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200">Resolution Opportunity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Days 1 - 30</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">SMA-0</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Reminders, calls.</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Audit statements, halt revolving minimum dues.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Days 31 - 90</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">SMA-1 / SMA-2</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Agency assignment, demand notices.</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Deploy legal shield, assemble hardship dossier.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Days 91 - 120</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-semibold text-rose-600">NPA Sub-Standard</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Notices (Sec 25 / Sec 138).</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Submit formal reply; initial OTS window opens.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors bg-blue-50/30">
                      <td className="p-3 sm:p-3.5 font-bold text-[#1886ff]">Days 121 - 180</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-blue-700">Doubtful NPA</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Bank capital provisioning mandate.</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-emerald-600">Peak leverage: 45% to 65% aggregate waiver.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Month 6+</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Settlement Closure</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Direct settlement remittance.</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Obtain signed NDC, update CIBIL records.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-card-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-[#1886ff] font-bold text-sm">
                  10
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Specialized Multi-Card Default Scenarios &amp; Complexities
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Multi-Bank Card Stacking (4+ Lenders)</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Juggling four or more cards triggers simultaneous recovery threats. A pooled debt strategy prevents piecemeal settlements that exhaust cash reserves on one lender.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Cross-Account Banker Lien &amp; Salary Offsets</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Section 171 of the Indian Contract Act, banks can exercise a general banker lien to debit card dues from savings accounts. Account restructuring safeguards vital living funds.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Tech Layoffs &amp; Sudden Loss of Income</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Layoffs cause immediate default on high limits. Submitting verified termination records provides conclusive distress evidence for credit committee approval.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">ARC Portfolio Debt Assignments</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When banks assign written-off card debt to Asset Reconstruction Companies (ARCs), deep acquisition discounts create terms for single-payment compromise settlements.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: COMPANY PROFILE COMPONENT */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600">
                Authoritative legal answers regarding multi-bank credit card settlements, legal notice defense, and credit score rehabilitation.
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-slate-900 hover:text-[#1886ff] transition-colors gap-3"
                      >
                        <span className="text-xs sm:text-sm md:text-base leading-snug">{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'transform rotate-180 text-[#1886ff]' : ''
                          }`}
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

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  Statutory Citations &amp; Regulatory References
                </h2>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  Our multi-card debt resolution strategies strictly adhere to governing Indian commercial statutes, judicial precedents, and Reserve Bank of India directives:
                </p>
                <p className="text-xs text-slate-500">
                  RBI Master Direction 2022 • Section 25, PSSA 2007 • Section 138 &amp; 147, NI Act 1881 • Section 12(5), Arbitration Act 1996 • Supreme Court in Perkins Eastman (2019) • RBI Ombudsman Scheme 2021 • Section 21, CICRA 2005.
                </p>
              </div>

              {/* Outbound Authority Badges */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-700 block">Verified Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    rbi.org.in
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    cms.rbi.org.in
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    cibil.com
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    indiacode.nic.in
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    nalsa.gov.in
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    cybercrime.gov.in
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-700 block">Explore Related Resolution Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
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
                Specialist in multi-bank debt restructuring, credit card dispute resolution, and statutory defense against aggressive recovery agencies under RBI regulations.
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
              className="rounded-3xl p-6 text-white text-center space-y-3.5 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-2.5 py-0.5 rounded-full inline-block">
                  100% CONFIDENTIAL DEFENSE
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Juggling Multiple Credit Cards?
                </h3>
                <p className="text-blue-100 text-xs leading-relaxed font-normal">
                  Our legal experts sequence your liabilities, halt harassment, and negotiate a 45% to 65% aggregate waiver across all banks.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-2.5 px-4 rounded-full font-bold text-xs hover:bg-slate-50 transition-all shadow-md"
              >
                Schedule Multi-Card Defense
              </Link>
              <div className="pt-1 flex flex-col items-center justify-center gap-0.5 text-[10px] text-blue-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-2.5 h-2.5 text-blue-200" />
                  <a href="tel:+918800226635" className="hover:underline font-bold text-white">
                    Call: +91-8800226635
                  </a>
                </div>
                <span>Direct Bank Remittance • RBI Compliant</span>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2 text-xs">
              <h4 className="font-bold text-slate-900 text-xs">The CredSettle Advantage</h4>
              <ul className="space-y-1.5 text-slate-600 text-[11px]">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked fees.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                  <span><strong>Direct Bank Remittance:</strong> No escrow holding.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                  <span><strong>RBI Compliance:</strong> Lawful dispute resolution.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                  <span><strong>Pan-India Defense:</strong> Dedicated legal panel.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2 text-xs">
              <h4 className="font-bold text-slate-900 text-xs">Related Legal Guides</h4>
              <div className="space-y-2">
                <Link
                  href="/services/credit-card-settlement"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-tight text-xs">
                    Credit Card Settlement Process
                  </p>
                  <span className="text-[10px] text-slate-400 block">Bank negotiation roadmap &rarr;</span>
                </Link>

                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-tight text-xs">
                    Bank Sent Legal Notice for Default
                  </p>
                  <span className="text-[10px] text-slate-400 block">Step-by-step reply blueprint &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-tight text-xs">
                    Convert Settled Card to Closed Status
                  </p>
                  <span className="text-[10px] text-slate-400 block">Clean credit report guide &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
