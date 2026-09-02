const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../src/app/settle-multiple-credit-cards');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Ensure zero em-dashes
function cleanEmDashes(text) {
  return text.replace(/—/g, ', ').replace(/–/g, '-');
}

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
      q: 'Can you settle multiple credit cards from different banks at the same time?',
      a: 'Yes, you can settle multiple credit cards simultaneously across different lenders such as HDFC, SBI Card, ICICI, and Axis Bank. A synchronized settlement approach involves pooling your available resolution funds, evaluating each lender\\'s litigation risk, and submitting structured One-Time Settlement (OTS) proposals through formal legal representation.'
    },
    {
      q: 'How much discount or waiver can I get when settling multiple credit cards?',
      a: 'Settlement waivers on unsecured credit cards typically range between 45% and 65% of the total outstanding balance. In multi-card negotiations, banks generally waive 100% of accumulated penal interest, finance charges, and late payment fees, allowing you to settle for an agreed percentage of the core principal amount.'
    },
    {
      q: 'Which credit cards should I prioritize when settling multiple accounts?',
      a: 'Priority should be given to cards with the highest revolving interest rates, accounts linked to your primary salary bank to prevent banker\\'s lien deductions under Section 171 of the Indian Contract Act, and lenders that have issued statutory notices under Section 25 of the PSSA or Section 138 of the NI Act.'
    },
    {
      q: 'How do I stop multiple collection agencies from calling my family and employer?',
      a: 'You can stop abusive recovery tactics by issuing a formal Anti-Harassment Legal Notice under the RBI Master Direction on Credit Card Operations (2022). This notice demands that all communication be routed exclusively to your appointed legal representative and prohibits recovery agents from calling outside 08:00 to 19:00 hours or contacting third-party references.'
    },
    {
      q: 'What legal notices can banks send for credit card default?',
      a: 'Banks can issue legal demand notices, notices under Section 25 of the Payment and Settlement Systems Act (PSSA) for bounced NACH mandates, Section 138 of the Negotiable Instruments Act for dishonored cheques, and Section 21 Arbitration notices. Credit cards are unsecured debts, meaning SARFAESI asset attachment does not apply.'
    },
    {
      q: 'Can I be arrested or sent to jail for credit card defaults in India?',
      a: 'No, defaulting on credit card debt is strictly a civil dispute. Credit card issuers cannot initiate criminal arrest proceedings against you for genuine inability to pay. While dishonored cheques or NACH auto-debits involve statutory court appearances, these are compoundable matters that get dismissed once a settlement is finalized.'
    },
    {
      q: 'What happens if a bank appoints a sole arbitrator unilaterally for credit card debt?',
      a: 'Under landmark Supreme Court judgments in TRF Ltd. (2017) and Perkins Eastman (2019), a lending bank cannot unilaterally appoint a sole arbitrator without mutual consent. Such appointments are de jure ineligible under Section 12(5) of the Arbitration and Conciliation Act, and can be challenged immediately in legal replies.'
    },
    {
      q: 'How does settling multiple credit cards affect my CIBIL score?',
      a: 'When you settle credit cards, credit bureaus record the status as \\'Settled\\' or \\'Post-Write-off Settled\\', causing an initial drop in your score. However, once settled, all active delinquencies and 90+ DPD marks stop accumulating. You can rebuild your CIBIL score to 750+ within 12 to 24 months using secured credit builder cards and disciplined repayments.'
    },
    {
      q: 'Can I pay the settlement amount in monthly installments across different cards?',
      a: 'Yes, banks frequently offer multi-tranche settlement plans (typically spanning 2 to 4 monthly installments) for multi-card portfolios. However, you must ensure that each bank provides a written settlement sanction letter on official letterhead detailing the exact installment dates and waiver terms before remitting any payment.'
    },
    {
      q: 'What documents do I need from each bank after completing the settlement?',
      a: 'After remitting the agreed settlement amount directly to the bank\\'s loan account, you must obtain an official No Dues Certificate (NDC) or No Objection Certificate (NOC) on bank letterhead confirming zero remaining liability, closure of the card account, and instruction to update credit bureau records accordingly.'
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
                      href={\`#\${link.id}\`}
                      className={\`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug \${
                        isActive
                          ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      }\`}
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
                <span>EXECUTIVE BRIEF: MULTI-BANK CREDIT CARD RESOLUTION BLUEPRINT</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Multi-Lender Risk Sequencing:</strong> Prioritizing cards with active NACH mandates, high revolving APRs (42% to 54%), and aggressive recovery desks like SBI Card or HDFC before low-exposure accounts.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Forensic Audit of Inflated Charges:</strong> Segregating pure principal debt from predatory finance charges, late payment fees, GST, and over-limit penalties that artificially double outstanding balances.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Elimination of Minimum Due Trap:</strong> Breaking the endless revolving credit cycle where 5% monthly minimum payments merely service compounding interest without reducing the principal loan balance.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Synchronized Multi-Agency Shielding:</strong> Establishing formal legal representation to halt simultaneous harassment from multiple outsourced collection agencies across your entire credit portfolio.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Statutory Notice Defense:</strong> Responding authoritatively to Section 25 PSSA (NACH bounce) and Section 138 NI Act notices within the statutory 30-day window to prevent criminal summons.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Supreme Court Arbitration Protection:</strong> Challenging unilateral arbitrator appointments under Perkins Eastman and TRF Ltd. precedents to invalidate biased online arbitral proceedings.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Consolidated Credit Committee Representation:</strong> Presenting a unified hardship dossier across all lending banks to secure compromise settlements ranging between 35% and 55% of the principal debt.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Clean NDC and CIBIL Rectification:</strong> Securing signed No Dues Certificates on official bank letterheads and initiating Section 21 CICRA disputes to update credit statuses from defaulted to settled or closed.
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
                  Managing multiple delinquent credit cards across major Indian commercial issuers, such as HDFC Bank, SBI Card, ICICI Bank, Axis Bank, American Express, and Standard Chartered, exposes borrowers to an exponential debt spiral. Unlike conventional term loans that amortize steadily over time, credit cards operate on revolving credit mechanics with exorbitant finance charges ranging from 3.5% to 4.5% per month, translating to an annualized percentage rate (APR) of 42% to 54%. When multiple cards default at once, monthly finance charges, late fees, over-limit penalties, and 18% GST capitalize onto the core balance every thirty days, causing an aggregate credit exposure to double in less than eighteen months.
                </p>

                <p>
                  From an institutional banking perspective, delinquent credit cards progress through statutory Reserve Bank of India (RBI) delinquency classifications. Accounts enter Special Mention Account status (SMA-0 for 1 to 30 days past due, SMA-1 for 31 to 60 days, and SMA-2 for 61 to 90 days) before being formally classified as Non-Performing Assets (NPA) upon crossing 90 days of continuous non-payment. Under RBI prudential provisioning norms, banks are mandated to allocate substantial Tier-1 capital reserves against unsecured NPAs, setting aside 15% provisioning at the Sub-Standard stage, which escalates rapidly to 40% at Doubtful-1 and 100% at Doubtful-2.
                </p>

                <p>
                  Because credit cards are entirely unsecured transactions governed by the Indian Contract Act, 1872, banks possess zero tangible collateral to attach and cannot invoke the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002. This severe provisioning drag on the bank balance sheet, combined with the legal cost and multi-year delays of civil recovery litigation, establishes the primary commercial rationale for credit committees to sanction One-Time Settlements (OTS) with deep principal haircuts.
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
                  When borrowers attempt to negotiate settlements individually without structured legal representation, collection agencies invariably demand payment on the fully inflated statement balance. In reality, an audit of any delinquent multi-card portfolio reveals that unbundled pure principal debt represents only 45% to 55% of the total amount claimed by banks. The remainder consists of predatory finance charges, compounded late fees, and statutory taxes that banks are fully authorized to write off under their internal compromise settlement policies.
                </p>

                <p>
                  A professional multi-card debt resolution strategy audits each statement forensically, strips away all post-delinquency penalties, and calculates realistic settlement benchmarks based on the core principal spend and the borrower demonstrated liquidity pool. The table below illustrates a representative ₹11.5 Lakh four-card portfolio resolved across prominent private and public sector lenders:
                </p>
              </div>

              {/* 4-Sided Bordered Calculation Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white my-4">
                <table className="w-full text-xs sm:text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/90 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3 sm:p-3.5">Credit Card Account</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200">Claimed Balance</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200">Actual Core Principal</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200">Penal Fees Stripped</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200 text-emerald-700">Final OTS Sanction</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200 text-blue-700">Total Waiver %</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">HDFC Bank Regalia</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">₹3,50,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-semibold">₹1,80,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-rose-600">₹1,70,000 (100%)</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-emerald-600">₹95,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-blue-600">72.8% Waiver</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">SBI Card SimplyCLICK</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">₹2,20,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-semibold">₹1,20,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-rose-600">₹1,00,000 (100%)</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-emerald-600">₹60,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-blue-600">72.7% Waiver</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">ICICI Bank Coral</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">₹2,80,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-semibold">₹1,50,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-rose-600">₹1,30,000 (100%)</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-emerald-600">₹75,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-blue-600">73.2% Waiver</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Axis Bank Magnus</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">₹3,00,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-semibold">₹1,50,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-rose-600">₹1,50,000 (100%)</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-emerald-600">₹80,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-blue-600">73.3% Waiver</td>
                    </tr>
                    <tr className="bg-blue-50/70 font-bold text-slate-900 border-t-2 border-blue-200">
                      <td className="p-3 sm:p-3.5 text-[#1886ff]">Consolidated Portfolio</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">₹11,50,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-slate-900">₹6,00,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-rose-600">₹5,50,000 Stripped</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-emerald-700">₹3,10,000</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-blue-700">73.0% Overall Waiver</td>
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
                Borrowers struggling with simultaneous credit card liabilities often evaluate alternative avenues including debt restructuring, balance transfers, civil court proceedings, and Lok Adalat conciliation. Evaluating each option against critical financial and legal criteria highlights why structured One-Time Settlement provides the highest cashflow relief and permanent closure.
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white my-4">
                <table className="w-full text-xs sm:text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/90 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3 sm:p-3.5">Resolution Strategy</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200">Financial Haircut</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200">Monthly Cashflow Impact</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200">Legal Harassment Shield</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200">Resolution Speed</th>
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
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-rose-600 font-semibold">0% (Full Repayment + Interest)</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Extended EMIs at 16% - 24%</td>
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
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Civil Court Litigation (Summary Suit)</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-slate-600">Discretionary by Judge</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">High Legal &amp; Advocate Fees</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-slate-600">Formal Court Appearance</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">2 to 5 Years</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Inaction / Minimum Due Revolving</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-rose-600 font-bold">Negative (300% Total Cost)</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-rose-600">Endless Monthly Bleed</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 text-rose-600">Severe Multi-Agency Harassment</td>
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
                  Understanding the credit score implications of multi-card default requires analyzing the proprietary scoring algorithms of TransUnion CIBIL, Experian, CRIF High Mark, and Equifax. The CIBIL score is determined across five weighted mathematical pillars: Payment History (35%), Credit Utilization Ratio (30%), Credit History Length (15%), Credit Mix (10%), and Recent Inquiries (10%). When multiple cards default concurrently, repeated 90+ Days Past Due (DPD) reporting across multiple tradelines causes a severe score contraction, typically dropping a healthy 780 score down to the 520 to 560 range.
                </p>

                <p>
                  Upon completing a compromise One-Time Settlement, the lending bank reports the account status to credit bureaus as &quot;Settled&quot; or &quot;Post-Write-off Settled&quot;. While this status reflects a historical concession, it permanently freezes the accumulation of negative DPD marks and halts active delinquency reporting. Borrowers retain the statutory right under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA) to ensure that settled accounts are updated within thirty days with zero outstanding balance.
                </p>

                <p>
                  Restoring a credit score to 750+ post-settlement follows a systematic rehabilitation trajectory. By acquiring a secured credit card backed by a modest fixed deposit (FD), maintaining credit utilization strictly below 25%, and establishing twelve to eighteen months of immaculate repayment history, borrowers consistently rebuild prime creditworthiness and regain eligibility for standard retail credit products.
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
                    Figure 1: CredSettle 6-Stage Strategic Multi-Card Debt Resolution Blueprint.
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
                    Compile all monthly card statements across issuers. Segregate pure principal transactions from capitalized finance charges, GST, and penal fees. Rank each card by interest compounding velocity, legal vulnerability, and active NACH auto-debit mandates to structure a prioritized resolution order.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs hover:border-blue-200 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#1886ff] uppercase tracking-wider">STAGE 02</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">Dossier</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Consolidated Hardship &amp; Liquidity Dossier</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Assemble comprehensive documentary proof substantiating bona fide financial distress, including employment termination letters, medical records, or business financial statements. Calculate a realistic total settlement pool and establish proportional settlement budgets for each lending institution.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs hover:border-blue-200 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#1886ff] uppercase tracking-wider">STAGE 03</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">Legal Shield</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Synchronized Anti-Harassment &amp; Notice Defense</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Issue formal Legal Representation Notices under the RBI Master Direction to redirect all third-party collection agency calls exclusively to legal counsel. Draft robust statutory responses to Section 25 PSSA and Section 138 NI Act notices within the mandatory 30-day window.
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
                    Engage directly with bank Nodal Officers, Stressed Asset Resolution Desks, and Credit Committees. Present the hardship dossier to negotiate 100% penal interest write-offs alongside a 45% to 65% core principal haircut aligned with available cash tranches.
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
                    Subject each settlement offer to rigorous legal vetting. Verify that letters are generated on official bank letterheads with unique settlement reference numbers, explicit full and final waiver covenants, accurate tranche payment dates, and zero ambiguous future liability clauses.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs hover:border-blue-200 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#1886ff] uppercase tracking-wider">STAGE 06</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">Closure</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Direct Remittance, No Dues Certificate &amp; CIBIL Update</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Remit the sanctioned settlement tranches directly to the designated bank card loan accounts. Secure official signed No Dues Certificates (NDC) from each issuer and initiate Section 21 CICRA requests to ensure credit bureau tradelines reflect settled status with zero outstanding balance.
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
                When cardholders default across multiple institutions, banks deploy aggressive statutory notices to exert psychological pressure. Every borrower in India is shielded by explicit constitutional and statutory rights that prevent arbitrary legal overreach and illegal recovery tactics.
              </p>

              {/* 4-Card Analytical Defense Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-[#1886ff]">
                    <Scale className="w-5 h-5 flex-shrink-0" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Section 25 PSSA (NACH Bounce Defense)</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Section 25 of the Payment and Settlement Systems Act, 2007 governs dishonored electronic NACH auto-debits. Defaulting due to bona fide financial incapacity does not constitute criminal intent. Filing a formal legal reply within 30 days demonstrating hardship and an active settlement offer prevents magistrate court summons.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-[#1886ff]">
                    <Gavel className="w-5 h-5 flex-shrink-0" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Section 138 NI Act (Cheque Bounce Shield)</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If security cheques are deposited without authorization, banks issue notices under Section 138 of the Negotiable Instruments Act, 1881. Section 138 offenses are strictly compoundable under Section 147, meaning magistrate court proceedings are fully dismissed once the bank executes an official settlement agreement.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-[#1886ff]">
                    <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Challenging Unilateral Arbitrators</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under landmark Supreme Court rulings in TRF Ltd. (2017) and Perkins Eastman (2019), banks cannot unilaterally appoint a sole arbitrator for credit card recovery. Any arbitrator appointed without mutual consent is de jure ineligible under Section 12(5) of the Arbitration Act, rendering their proceedings legally voidable.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-[#1886ff]">
                    <BadgeAlert className="w-5 h-5 flex-shrink-0" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">RBI Fair Practices Code Enforcement</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The RBI Master Direction on Credit Card Operations (2022) strictly prohibits recovery agents from calling outside 08:00 to 19:00 hours, contacting family members or employers, using abusive language, or conducting unannounced home visits without prior notice. Violations trigger severe regulatory penalties against the bank.
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
                When recovery agents violate fair practice norms or branch managers refuse genuine hardship settlement proposals, borrowers can execute a structured three-tier statutory escalation to enforce compliance and compel credit committee engagement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <span className="text-[11px] font-extrabold text-[#1886ff] uppercase tracking-wider block">LEVEL 1: INTERNAL</span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Grievance Redressal Officer (GRO)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a formal written complaint to the bank appointed Internal Grievance Redressal Officer detailing agent harassment, disputed fee inflation, and genuine settlement proposals. Statutory response turnaround: 7 to 10 working days.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <span className="text-[11px] font-extrabold text-[#1886ff] uppercase tracking-wider block">LEVEL 2: NODAL</span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Principal Nodal Officer (PNO)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the GRO response is unsatisfactory or delayed, escalate the multi-card portfolio dispute to the bank Principal Nodal Officer. The PNO possesses executive authority to sanction compromise settlements. Turnaround: 14 to 21 working days.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <span className="text-[11px] font-extrabold text-[#1886ff] uppercase tracking-wider block">LEVEL 3: APEX REGULATOR</span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">RBI Integrated Ombudsman</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File an apex regulatory petition on cms.rbi.org.in under the Reserve Bank of India Integrated Ombudsman Scheme, 2021 for persistent harassment, wrongful credit bureau reporting, or arbitrary denial of fair settlement terms.
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
                Tracking the chronological lifecycle of delinquent credit cards enables borrowers to negotiate at the precise operational window when bank credit committees possess maximum authority to grant deep principal haircuts.
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white my-4">
                <table className="w-full text-xs sm:text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/90 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3 sm:p-3.5">Delinquency Phase</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200">Institutional Classification</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200">Bank Recovery Action</th>
                      <th className="p-3 sm:p-3.5 border-l border-slate-200">Strategic Resolution Opportunity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Days 1 - 30</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">SMA-0 (Standard Account)</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Automated SMS, email payment reminders, call center follow-ups.</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Compile multi-card statements, stop revolving payments.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Days 31 - 90</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">SMA-1 &amp; SMA-2</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Assignment to third-party collection agencies, demand letters.</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Establish legal representation shield, build hardship dossier.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Days 91 - 120</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-semibold text-rose-600">NPA (Sub-Standard Asset)</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Statutory legal demand notices (Sec 25 PSSA / Sec 138 NI Act).</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Formal legal reply submitted; initial OTS window opens.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors bg-blue-50/30">
                      <td className="p-3 sm:p-3.5 font-bold text-[#1886ff]">Days 121 - 180</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-blue-700">Doubtful NPA &amp; Write-Off</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Credit committee provisioning drag forces settlement mandate.</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200 font-bold text-emerald-600">Peak negotiation leverage: 45% to 65% aggregate waiver.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Month 6+</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Settlement Closure &amp; NOC</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Direct settlement remittance, closure of recovery files.</td>
                      <td className="p-3 sm:p-3.5 border-l border-slate-200">Obtain signed No Dues Certificate, update CIBIL records.</td>
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
                    Cardholders juggling four or more cards across HDFC, SBI, and ICICI often experience simultaneous legal threats. A unified debt pool strategy prevents piecemeal settlements that deplete cash reserves on one lender while leaving others unaddressed.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Cross-Account Banker Lien &amp; Salary Offsets</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Section 171 of the Indian Contract Act, banks can exercise a general banker lien to debit delinquent credit card dues from savings or salary accounts held in the same bank. Protecting primary living liquidity requires strategic account restructuring.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Tech Layoffs &amp; Sudden Loss of Income</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Corporate layoffs and severance exhaustion trigger immediate default on high credit card limits. Presenting certified termination records and bank deficit statements provides irrefutable distress evidence required for credit committee approval.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">ARC Portfolio Debt Assignments</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When banks assign written-off credit card portfolios to Asset Reconstruction Companies (ARCs) like Phoenix ARC, ARC acquisition discounts (often 85% to 90%) create exceptional opportunities for deep single-payment compromise settlements.
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
                          className={\`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 \${
                            isOpen ? 'transform rotate-180 text-[#1886ff]' : ''
                          }\`}
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
                  Our multi-card debt resolution and statutory defense strategies strictly adhere to governing Indian commercial statutes, judicial precedents, and Reserve Bank of India regulatory directives:
                </p>
                <p className="text-xs text-slate-500">
                  RBI Master Direction – Credit Card and Debit Card Issuance and Conduct Directions, 2022 • Section 25, Payment and Settlement Systems Act, 2007 • Section 138 &amp; Section 147, Negotiable Instruments Act, 1881 • Section 12(5) &amp; Section 21, Arbitration and Conciliation Act, 1996 • Supreme Court of India in Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2019) • Reserve Bank of India (Integrated Ombudsman) Scheme, 2021 • Section 21, Credit Information Companies (Regulation) Act, 2005 (CICRA).
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
                Specialist in multi-bank debt restructuring, credit card dispute resolution, and statutory defense against aggressive recovery agencies under RBI and banking regulations.
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
                  100% CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Juggling Multiple Credit Cards?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal experts sequence your card liabilities, halt recovery agent harassment, and negotiate a 45% to 65% aggregate waiver across all banks.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Schedule Multi-Card Defense
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
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/services/credit-card-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Settlement Process
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Complete bank negotiation roadmap &rarr;</span>
                </Link>

                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice for Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full step-by-step reply blueprint &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Card to Closed Status
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Clean credit report blueprint &rarr;</span>
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

fs.writeFileSync(path.join(targetDir, 'SettleMultipleCreditCardsClient.tsx'), clientCode, 'utf8');
console.log('SettleMultipleCreditCardsClient.tsx written successfully');
