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
  Percent,
  ReceiptText,
  ShieldAlert
} from 'lucide-react';

export default function CreditCardSettlementDiscountClient() {
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
    { id: 'quick-crux', label: 'Executive Summary & Crux' },
    { id: 'debt-economics-npa-dynamics', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'financial-breakdown-settlement-math', label: '2. Financial Breakdown & Math' },
    { id: 'resolution-options-comparison-matrix', label: '3. Strategic Options Comparison' },
    { id: 'technical-cibil-algorithm-math', label: '4. CIBIL Algorithm & Score Recovery' },
    { id: 'infographic-overview', label: 'Visual Settlement Blueprint' },
    { id: 'step-by-step-settlement-sop', label: '5. 6-Stage Settlement SOP' },
    { id: 'statutory-notice-defense-rights', label: '6. Statutory Notice Defense' },
    { id: 'three-tier-grievance-escalation-matrix', label: '7. 3-Tier Grievance Redressal' },
    { id: 'chronological-resolution-milestones', label: '8. Chronological Timelines' },
    { id: 'specialized-card-scenarios', label: '9. Real-World Debt Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'How much discount can I get on a credit card settlement in India?',
      a: 'Cardholders typically negotiate 50% to 75% gross balance waivers, depending on account delinquency age, documented hardship, and the ratio of core principal to accumulated 42% APR finance charges.'
    },
    {
      q: 'Why do banks offer high discounts on credit card settlements?',
      a: 'Credit cards are unsecured loans lacking physical collateral. After 90 days of default, RBI rules mandate 100% bank provisioning, making immediate compromised cash recovery through an OTS commercially advantageous.'
    },
    {
      q: 'Can I get a discount on the core principal credit card balance?',
      a: 'Yes. While banks readily waive 100% of late fees and 70% of finance interest, seasoned NPAs past 180 days with severe documented insolvency can also secure 25% to 40% principal haircuts.'
    },
    {
      q: 'What documents are required to negotiate a credit card settlement discount?',
      a: 'Borrowers must submit a hardship dossier containing job termination letters, salary reduction certificates, medical hospitalization records, audited business financial losses, and bank statements demonstrating depleted liquidity.'
    },
    {
      q: 'Will settling a credit card debt at a discount affect my CIBIL score?',
      a: 'Yes. The bank reports the status as Settled, reducing credit scores by 75 to 150 points. However, disciplined credit habits and secured cards can restore scores above 750 within 24 months.'
    },
    {
      q: 'Can a bank recovery agent reject my settlement discount proposal?',
      a: 'Third-party recovery agents lack sanction authority. Authentic settlement discounts must be formally approved by the bank Stressed Asset Committee or Nodal Officers, who issue an official Settlement Sanction Letter.'
    },
    {
      q: 'How do I reply to a Section 25 PSSA notice for a bounced card auto-debit?',
      a: 'Serve a formal legal reply within 15 days contesting penalty compounding, establishing bona fide financial hardship without fraudulent intent, and proposing a structured One-Time Settlement based on core principal dues.'
    },
    {
      q: 'Can I convert a Settled credit card status to Closed in CIBIL?',
      a: 'Yes. Under Section 21 of CICRA 2005, you can repay the previously waived balance at a later date, obtain a final No Dues Certificate, and update your bureau status to Closed.'
    },
    {
      q: 'How can I verify that my credit card settlement letter is authentic?',
      a: 'Ensure the letter originates from the bank official corporate email domain or branch letterhead, specifies exact card numbers, lists negotiated settlement amounts, and explicitly covenants complete liability discharge.'
    },
    {
      q: 'What should I do if a bank violates RBI fair recovery guidelines?',
      a: 'Document all abusive calls or unauthorized visits and file a formal grievance with the Bank Nodal Officer. If unresolved within 30 days, lodge a complaint on cms.rbi.org.in.'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-100 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>Statutory &amp; Commercial Debt Resolution Framework</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How Much Discount Can You Get on Credit Card Settlement in India?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            A comprehensive legal and financial guide explaining how delinquent cardholders leverage 90 to 180-day delinquency milestones, unbundle compounding 42% APR finance charges, and establish genuine hardship to negotiate 50% to 75% total debt waivers with scheduled commercial banks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Calculate Your Settlement Discount</span>
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
                  <span>RBI Compliant Resolution</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by Master Directions on Credit Card Operations &amp; Fair Practices Code.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Summary Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: CREDIT CARD SETTLEMENT DISCOUNT &amp; WAIVER MATRIX</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Pure Civil Debt:</strong> Unsecured credit card default is strictly a civil breach under the Indian Contract Act, 1872, with zero arrest exposure.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">50% to 75% Average Waiver:</strong> Borrowers routinely secure 50% to 75% balance reductions on cards delinquent past 90 to 180 days.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">100% Penalty Elimination:</strong> Banks universally waive 100% of accumulated late payment fees, overlimit penalties, and 18% GST charges.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Steep APR Cuts:</strong> Structured negotiations eliminate 60% to 80% of compounding finance charges accrued at 42% APR.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">90-Day Provisioning Pressure:</strong> Accounts past 90 days trigger mandatory 100% Tier-1 bank capital provisioning under RBI rules.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Principal Haircuts:</strong> Severe insolvency seasoned past 180 days frequently secures 25% to 40% haircuts on core principal spends.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Statutory Notice Defense:</strong> Formal legal replies to Section 25 PSSA notices protect borrowers and redirect disputes into compromise talks.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Mandatory Sanction Letter:</strong> Payments must be made solely against official sanction letters on bank corporate letterhead.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">CIBIL Status Remedy:</strong> Settled bureau marks can be upgraded to Closed under Section 21 of CICRA, 2005 upon future repayment.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="debt-economics-npa-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Macro Banking Dynamics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics &amp; NPA Dynamics: The Structural Driver of Credit Card Waivers
              </h2>
              
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit cards represent the most expensive unsecured revolving credit in the Indian banking system. Commercial card issuers levy monthly finance charges of 3.5% to 4.2%, creating an effective Annual Percentage Rate (APR) exceeding 42% to 52%. When cardholders face unexpected financial distress, paying only the mandatory 5% Minimum Amount Due triggers a severe compounding cycle. Minimum payments merely service accumulated interest and 18% GST, leaving underlying principal balances completely unamortized while statement totals escalate.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Reserve Bank of India prudential guidelines, delinquent accounts transition across Special Mention Account stages: SMA-0 (1-30 days overdue), SMA-1 (31-60 days), and SMA-2 (61-90 days). Beyond 90 days, the account is classified as a Non-Performing Asset (NPA), mandating 100% Tier-1 capital provisioning by the lending institution.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Because credit cards lack mortgage or hypothecated security, banks cannot enforce summary collateral recovery under the SARFAESI Act, 2002. Furthermore, instituting civil summary suits under Order 37 CPC entails lengthy litigation and high legal costs. Consequently, commercial banks maintain distressed debt committees empowered to sanction substantial One-Time Settlements (OTS) to recover compromised capital.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Percent className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown &amp; Settlement Math: Unbundling Core Principal vs. Inflated Dues
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A delinquent credit card statement rarely reflects true economic liabilities. Over 6 to 9 months of default, issuers continuously stack 42% APR finance interest, late fees, overlimit charges, and 18% GST. A forensic statement audit unbundles these stacked charges to isolate the net core principal from penalty inflation.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During One-Time Settlement discussions, card issuers adhere to an established institutional waiver hierarchy. Banks readily grant 100% waivers on late payment fees, overlimit penalties, and GST. Furthermore, negotiations eliminate 50% to 80% of cumulative finance interest. For seasoned non-performing assets aged beyond 180 days with documented hardship, banks frequently grant direct 20% to 40% principal haircuts.
              </p>

              {/* Settlement Math Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
                <div className="bg-slate-900 text-white p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">Representative 180-Day Credit Card Settlement Breakdown</h3>
                    <p className="text-xs text-slate-400">Actual financial forensic model for unbundling delinquent revolving card balances</p>
                  </div>
                  <span className="text-xs font-extrabold bg-blue-600 text-white px-3 py-1 rounded-full uppercase tracking-wider">
                    54.2% Gross Savings
                  </span>
                </div>

                <div className="p-4 sm:p-6 divide-y divide-slate-100 text-xs sm:text-sm">
                  <div className="py-2.5 flex justify-between items-center text-slate-600">
                    <span>Original Principal Spend:</span>
                    <span className="font-semibold text-slate-900">₹5,00,000</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center text-slate-600">
                    <span>Accumulated 42% APR Finance Interest:</span>
                    <span className="font-semibold text-red-600">+ ₹2,10,000</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center text-slate-600">
                    <span>Late Payment Penalties &amp; Overlimit Fees:</span>
                    <span className="font-semibold text-red-600">+ ₹85,000</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center text-slate-600">
                    <span>Cumulative 18% GST:</span>
                    <span className="font-semibold text-red-600">+ ₹53,100</span>
                  </div>
                  <div className="py-3 flex justify-between items-center bg-slate-50 px-3 rounded-lg font-bold text-slate-900">
                    <span>Gross Claimed Bank Statement Balance:</span>
                    <span className="text-slate-900 text-sm sm:text-base">₹8,48,100</span>
                  </div>

                  <div className="py-2.5 flex justify-between items-center text-emerald-700">
                    <span>Negotiated 100% Waiver on Penal Fees &amp; GST:</span>
                    <span className="font-semibold">- ₹1,38,100</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center text-emerald-700">
                    <span>Negotiated 70% Waiver on Finance Charges:</span>
                    <span className="font-semibold">- ₹1,47,000</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center text-emerald-700">
                    <span>Core Principal Haircut (35% Discount):</span>
                    <span className="font-semibold">- ₹1,75,000</span>
                  </div>

                  <div className="pt-4 pb-1 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-emerald-50/80 -mx-4 -mb-4 sm:-mx-6 sm:-mb-6 p-4 sm:p-6 rounded-b-2xl border-t border-emerald-100">
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-800 block">Final Approved OTS Settlement Amount</span>
                      <span className="text-xs text-emerald-600">Payable directly into bank card account in structured tranches</span>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <span className="text-xl sm:text-2xl font-black text-emerald-700 block">₹3,88,000</span>
                      <span className="text-[11px] text-emerald-800 font-semibold">Net Direct Savings: ₹4,60,100 (54.2% Total Balance Waiver)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="resolution-options-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Strategic Options Comparison: Evaluating Debt Relief Pathways
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers facing severe credit card delinquency must evaluate available debt resolution pathways based on financial burden, legal finality, and bureau implications:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Resolution Route</th>
                      <th className="p-3.5 font-bold">Governing Framework</th>
                      <th className="p-3.5 font-bold">Financial Burden &amp; Waiver</th>
                      <th className="p-3.5 font-bold">Timeline to Closure</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Legal Risk &amp; Finality</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="p-3.5">RBI Stressed Asset Guidelines</td>
                      <td className="p-3.5 text-emerald-600 font-semibold">50% to 75% gross waiver</td>
                      <td className="p-3.5">30 to 60 Days</td>
                      <td className="p-3.5 text-emerald-700 font-medium">Complete legal discharge and clean NDC</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Term Loan Restructuring</td>
                      <td className="p-3.5">Internal Bank Retail Policy</td>
                      <td className="p-3.5 text-amber-700">Zero debt waiver, converted at 14% to 18%</td>
                      <td className="p-3.5">24 to 48 Months</td>
                      <td className="p-3.5 text-slate-600">High ongoing re-default risks</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Civil Summary Suit</td>
                      <td className="p-3.5">Order 37 CPC</td>
                      <td className="p-3.5 text-red-600">Full ledger claim plus 18% litigation interest</td>
                      <td className="p-3.5">3 to 7 Years</td>
                      <td className="p-3.5 text-red-700">Decree execution &amp; asset attachment</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">National Lok Adalat</td>
                      <td className="p-3.5">Legal Services Authorities Act, 1987</td>
                      <td className="p-3.5 text-blue-600">30% to 50% interest waiver</td>
                      <td className="p-3.5">Single-Day Award</td>
                      <td className="p-3.5 text-slate-700">Binding non-appealable award</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Inaction / Defaulting</td>
                      <td className="p-3.5">Unregulated Recovery Dynamics</td>
                      <td className="p-3.5 text-red-700 font-bold">Unchecked 42% compounding</td>
                      <td className="p-3.5">Indefinite</td>
                      <td className="p-3.5 text-red-700">Collection harassment &amp; ARC debt sale</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="technical-cibil-algorithm-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Technical CIBIL Algorithm &amp; Scoring Math: Navigating Post-Settlement Credit Recovery
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The TransUnion CIBIL scoring model evaluates consumer credit across five weighted parameters: Payment History (35%), Credit Utilization (30%), Credit History Length (15%), Credit Mix (10%), and Recent Inquiries (10%). Defaulting past 90 DPD triggers a sharp score drop of 120 to 180 points.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Executing an official One-Time Settlement updates the bureau status to Settled. While this notation confirms that the account closed with a negotiated compromise, it permanently halts active monthly delinquent DPD reporting. Cardholders can systematically rebuild their score above 750 within 18 to 24 months by utilizing a Fixed Deposit secured credit card and keeping utilization strictly below 20%.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Furthermore, under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), borrowers retain the statutory right to pay the residual waived balance in the future, obtaining a No Dues Certificate and converting their CIBIL status from Settled to Closed.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Process Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Blueprint: The Credit Card Settlement Discount &amp; Waiver Framework
              </h2>
              
              <div className="bg-white rounded-2xl border border-slate-200/80 p-3 sm:p-4 shadow-xs">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <Image
                    src="/images/infographics/credit-card-settlement-discount.jpg"
                    alt="Credit Card Settlement Discount & Waiver Framework Infographic"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="mt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-slate-500 gap-2 px-1">
                  <span>Figure 1.1: Official CredSettle Credit Card Settlement Discount &amp; Waiver Tier Architecture.</span>
                  <a
                    href="/images/infographics/credit-card-settlement-discount.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>View High-Res Infographic</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-settlement-sop" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step Settlement SOP: 6 Stages to Securing Maximum Debt Waivers
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Securing a 50% to 75% credit card settlement discount requires a disciplined standard operating procedure to maximize waivers and secure legal closure:
              </p>

              <div className="space-y-4">
                {/* Stage 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#1886ff] font-extrabold text-sm flex items-center justify-center flex-shrink-0 border border-blue-100">
                      01
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Stage 1: Forensic Statement Audit
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    Line-by-line statement audit separating core principal from compounding 42% APR interest, late fees, and GST to establish baseline liability.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#1886ff] font-extrabold text-sm flex items-center justify-center flex-shrink-0 border border-blue-100">
                      02
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Stage 2: Hardship Dossier Compilation
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    Assembling documentary proof of distress including termination notices, salary reduction slips, audited business losses, and medical records.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#1886ff] font-extrabold text-sm flex items-center justify-center flex-shrink-0 border border-blue-100">
                      03
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Stage 3: Institutional Escalation
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    Serving formal legal representations to bank Nodal Officers, citing the RBI Fair Practices Code to halt recovery agent harassment.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#1886ff] font-extrabold text-sm flex items-center justify-center flex-shrink-0 border border-blue-100">
                      04
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Stage 4: Stressed Asset Negotiation
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    Presenting structured hardship proposals before credit committees, leveraging 90-day NPA provisioning pressures for 50% to 75% waivers.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#1886ff] font-extrabold text-sm flex items-center justify-center flex-shrink-0 border border-blue-100">
                      05
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Stage 5: Settlement Sanction Vetting
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    Forensic legal vetting of the bank Settlement Letter, verifying corporate domain authenticity, payment schedules, and liability discharge.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#1886ff] font-extrabold text-sm flex items-center justify-center flex-shrink-0 border border-blue-100">
                      06
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Stage 6: Direct Card Remittance
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    Depositing compromise sums directly into the credit card account, securing a stamped No Dues Certificate, and updating bureau records.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense: Legal Protections &amp; Strategic Responses
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When card default extends past 90 days, bank legal departments issue statutory demand notices to enforce collections. Serving structured formal legal replies protects cardholders:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card 1: Section 25 PSSA */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <span>Section 25 PSSA Notice Defense</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Issued for dishonored electronic NACH mandates. Serving a formal reply within 15 days establishes bona fide hardship without fraudulent intent, directing proceedings toward structured OTS discussions.
                  </p>
                </div>

                {/* Card 2: Section 138 NI Act */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                    <Gavel className="w-4 h-4 text-indigo-600" />
                    <span>Section 138 NI Act Cheque Defense</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Issued when security cheques bounce. Legal defense contests arbitrary penal interest stacking and unauthorized presentation of undated instruments, shielding cardholders from criminal liability.
                  </p>
                </div>

                {/* Card 3: Section 21 Arbitration Act */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                    <Landmark className="w-4 h-4 text-emerald-600" />
                    <span>Section 21 Arbitration Act Invocation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Banks frequently invoke private arbitration. Under Supreme Court rulings in TRF Ltd. and Perkins Eastman, unilateral sole arbitrator appointments are de jure invalid under Section 12(5).
                  </p>
                </div>

                {/* Card 4: DRT Limits & RBI Fair Practices */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <span>DRT Limits &amp; RBI Fair Practices</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    DRT jurisdiction is strictly restricted to claims exceeding ₹20 Lakhs. The RBI Fair Practices Code strictly prohibits calling before 8 AM or after 7 PM, workplace visits, and third-party disclosure.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Grievance Escalation Matrix */}
            <section id="three-tier-grievance-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Grievance Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. The 3-Tier Grievance Escalation Matrix: Institutional Redressal Hierarchy
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If card issuers ignore hardship representations or violate fair recovery norms, cardholders can escalate through the structured three-tier grievance hierarchy:
              </p>

              <div className="space-y-3">
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md">
                      Level 1 Escalation
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mt-1">Bank Grievance Redressal Officer (GRO)</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Submitting initial formal complaints regarding unlawful penal interest or aggressive collection tactics; resolution timeline of 7 to 10 working days.</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 flex-shrink-0">7 - 10 Days</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md">
                      Level 2 Escalation
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mt-1">Principal Nodal Officer (PNO)</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Escalating to senior bank management for stressed asset re-evaluation and special OTS approvals; turnaround timeline of 14 to 21 working days.</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 flex-shrink-0">14 - 21 Days</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                      Level 3 Statutory Escalation
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mt-1">RBI Integrated Ombudsman (CMS Portal)</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Filing statutory complaints via cms.rbi.org.in if grievances remain unresolved past 30 days, providing binding dispute resolution at zero cost.</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 flex-shrink-0">30 - 45 Days</span>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-resolution-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Chronological Resolution Milestones: Default Cycle to Debt Freedom
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding how bank recovery strategies evolve across the 180-day delinquency cycle enables borrowers to initiate negotiations during the peak waiver window:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Timeline Milestone</th>
                      <th className="p-3.5 font-bold">Bank Classification</th>
                      <th className="p-3.5 font-bold">Lender Recovery Actions</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Strategic Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 1 - 30</td>
                      <td className="p-3.5">SMA-0</td>
                      <td className="p-3.5">SMS alerts and late fee application</td>
                      <td className="p-3.5">Audit statement; stop minimum dues payments</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 31 - 60</td>
                      <td className="p-3.5">SMA-1</td>
                      <td className="p-3.5">Telecalling and 42% APR interest compounding</td>
                      <td className="p-3.5">Compile documented financial hardship dossier</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 61 - 90</td>
                      <td className="p-3.5">SMA-2</td>
                      <td className="p-3.5">Agency allocation and demand notices</td>
                      <td className="p-3.5">Engage debt resolution team to halt harassment</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 91 - 120</td>
                      <td className="p-3.5">NPA Classification</td>
                      <td className="p-3.5">Card blocked; 100% bank provisioning enforced</td>
                      <td className="p-3.5">Serve formal legal response contesting dues</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 121 - 150</td>
                      <td className="p-3.5">Peak OTS Window</td>
                      <td className="p-3.5">Bank reviews write-off vs recovery</td>
                      <td className="p-3.5 text-emerald-700 font-bold">Negotiate 50% to 75% gross balance waiver</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 151 - 180+</td>
                      <td className="p-3.5">Settlement &amp; Closure</td>
                      <td className="p-3.5">Sanction letter issued on bank letterhead</td>
                      <td className="p-3.5 text-emerald-700 font-bold">Remit funds directly to bank and obtain stamped No Dues Certificate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-card-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Situations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Real-World Scenarios in Credit Card Settlement Negotiations
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Professional debt resolution strategies must account for specialized borrower circumstances to optimize settlement discounts and protect client rights:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Scenario 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Multi-Card Portfolio Consolidation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Negotiating simultaneously across multiple credit cards from different issuers to synchronize settlement schedules, eliminate cross-exposure risks, and secure combined waivers exceeding 60%.
                  </p>
                </div>

                {/* Scenario 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    Corporate Layoffs &amp; Income Shocks
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Demonstrating involuntary job termination, severe salary reductions, or prolonged medical emergencies to justify substantial principal haircuts on high-limit premium cards.
                  </p>
                </div>

                {/* Scenario 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    MSME Proprietorship Capital Distress
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Segregating personal credit cards used for enterprise working capital from operational liabilities, utilizing audited GST returns to negotiate standalone retail debt relief.
                  </p>
                </div>

                {/* Scenario 4 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-amber-600" />
                    Asset Reconstruction Company (ARC) Portfolios
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Negotiating with ARCs like Phoenix or Encore that acquired written-off debt portfolios at deep discounts, unlocking potential settlement waivers of 70% to 80%.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Credit Card Settlement Discounts &amp; Waivers
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Authoritative legal and financial answers regarding credit card settlements, waivers, CIBIL score implications, and statutory protections:
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 flex justify-between items-center gap-4 text-xs sm:text-sm md:text-base hover:text-[#1886ff] transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
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
                Official Regulatory Citations &amp; Outbound Reference Portals
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Reserve Bank of India Master Directions (2022):</strong> Master Direction - Credit Card Issuance and Conduct Directions, 2022 (RBI/2022-23/92), governing billing transparency and recovery codes.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Statutory dispute resolution mechanism providing cost-free adjudication for unfair banking and credit card recovery practices.
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Section 21 and Section 22 governing credit reporting accuracy and conversion of Settled records.
                </li>
                <li>
                  <strong>Supreme Court of India Jurisprudence:</strong> <em>Perkins Eastman Architects DPC (2020)</em> and <em>TRF Ltd. (2017)</em> regarding the invalidity of unilateral arbitrator appointments.
                </li>
                <li>
                  <strong>Payments and Settlement Systems Act, 2007 (PSSA):</strong> Section 25 framework and judicial defenses concerning electronic auto-debit bounce notices.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1.5"
                  >
                    <span>Reserve Bank of India (rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1.5"
                  >
                    <span>RBI CMS Ombudsman (cms.rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1.5"
                  >
                    <span>TransUnion CIBIL (cibil.com)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1.5"
                  >
                    <span>India Code Legislative Repository (indiacode.nic.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1.5"
                  >
                    <span>NALSA Lok Adalat Portal (nalsa.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1.5"
                  >
                    <span>National Cyber Crime Reporting (cybercrime.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/credit-card-minimum-due-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Minimum Due Trap
                  </Link>
                  <Link href="/can-i-go-to-jail-for-credit-card-debt" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can I Go to Jail for Card Debt?
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/bank-recovery-agent-harassment-rules-in-hindi" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Recovery Agent Rules
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Protection
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/cibil-score-kaise-badhaye-after-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Improve CIBIL Score
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get No Dues Certificate
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
                Specialized in banking regulations, credit card dispute negotiations, anti-harassment defense, and stressed retail debt restructuring across major Indian scheduled commercial banks and NBFCs.
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
                  100% CONFIDENTIAL RESOLUTION
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Maxed-Out Credit Cards?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Stop recovery harassment, halt compounding interest, and settle credit card debt at a 50% to 75% waiver with direct bank legal protection.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Settle Your Credit Card Debt
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
                  <span><strong>Zero Upfront Risk:</strong> Performance-based debt resolution fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> Payments made exclusively to card accounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> 100% lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated negotiators and legal panel.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Credit Card Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/credit-card-minimum-due-trap"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Minimum Due Trap Explained
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">How 42% APR compounds your balance &rarr;</span>
                </Link>

                <Link
                  href="/can-i-go-to-jail-for-credit-card-debt"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can You Go to Jail for Credit Card Debt?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Debunking arrest threats &amp; police calls &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Card Status to Closed
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Step-by-step Section 21 CICRA roadmap &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
