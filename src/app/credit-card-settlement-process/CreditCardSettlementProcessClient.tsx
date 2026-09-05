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

export default function CreditCardSettlementProcessClient() {
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
    { id: 'infographic-overview', label: 'Visual 6-Stage Process Blueprint' },
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
      q: 'What is the credit card settlement process in India?',
      a: 'Credit card settlement is a formal compromise where the issuing bank agrees to waive penal interest and fees, accepting a negotiated lump sum to close the delinquent account.'
    },
    {
      q: 'How much waiver can I get on credit card settlement?',
      a: 'Cardholders typically secure 100% waivers on late fees and GST, alongside 50% to 75% reductions on finance charges, depending on default age and documented hardship.'
    },
    {
      q: 'Can a bank send me to jail for credit card default?',
      a: 'No. Credit card default is strictly a civil breach of contract under the Indian Contract Act, 1872. Card issuers cannot arrest or criminally detain defaulting cardholders.'
    },
    {
      q: 'How does credit card settlement affect my CIBIL score?',
      a: 'The bank reports the status as Settled, reducing your score by 75 to 150 points. However, disciplined credit habits can rebuild your score above 750 within 24 months.'
    },
    {
      q: 'Can I convert a Settled credit card status to Closed in CIBIL?',
      a: 'Yes. Under Section 21 of CICRA 2005, you can pay the remaining waived balance later, obtain a final NOC, and update your status from Settled to Closed.'
    },
    {
      q: 'What documents are required to prove financial hardship?',
      a: 'Issuers require proofs including job termination letters, salary reduction slips, audited business balance sheets, medical hospital records, and bank statements showing liquidity depletion.'
    },
    {
      q: 'How do I reply to a Section 25 PSSA notice for auto-debit bounce?',
      a: 'Serve a formal legal reply within 15 days contesting excessive penal compounding, establishing lack of fraudulent intent, presenting hardship proof, and proposing an OTS.'
    },
    {
      q: 'Why do banks prefer One-Time Settlement for delinquent cards?',
      a: 'Unsecured card NPAs mandate 100% bank capital provisioning under RBI rules. Lacking physical mortgage collateral, banks prefer recovering immediate compromised cash over costly civil litigation.'
    },
    {
      q: 'How do I verify that a credit card settlement letter is authentic?',
      a: 'Ensure the letter originates from the bank official corporate domain or branch letterhead, specifies card numbers and payment deadlines, and covenants zero residual liability.'
    },
    {
      q: 'What is the role of the RBI Integrated Ombudsman?',
      a: 'If an issuer ignores formal hardship complaints for 30 days or violates fair recovery practices, you can file a complaint at cms.rbi.org.in for free statutory adjudication.'
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
            Credit Card Settlement Process in India
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            A comprehensive legal and financial blueprint for negotiating 50% to 75% waivers on maxed-out credit card balances, halting aggressive recovery harassment, contesting statutory notices, and securing an authentic No Dues Certificate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Settle Your Credit Card Debt</span>
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
                <span>EXECUTIVE SUMMARY: CREDIT CARD DEBT SETTLEMENT IN INDIA</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Pure Civil Dispute:</strong> Credit card default is strictly a civil dispute with zero criminal arrest powers under Indian law.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Compounding 42% APR Trap:</strong> Paying minimum dues triggers relentless compounding interest and 18% GST, rapidly inflating card debt.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">50% to 75% Realistic Waivers:</strong> Documented hardship representation routinely secures 100% waivers on late fees and substantial interest cuts.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">90-Day NPA Provisioning Pressure:</strong> Accounts exceeding 90 days mandate 100% bank provisioning, incentivizing lenders to settle.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Statutory Notice Defense:</strong> Formal responses to Section 25 PSSA notices within 15 days contest inflated dues and prevent ex-parte decrees.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Settlement Letter Verification:</strong> Compromises require official sanction letters issued on bank letterhead before funds are remitted.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Direct Bank Account Remittance:</strong> Settlement funds must be deposited directly into your card account, eliminating recovery fraud risks.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">CIBIL Score Rehabilitation:</strong> Initial Settled status can be converted to Closed under Section 21 CICRA upon paying residual balances.
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
                1. Debt Economics: Anatomy of the Credit Card Trap
              </h2>
              
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit card debt represents the most expensive category of unsecured revolving consumer credit in the Indian banking system. Commercial card issuers levy monthly finance charges ranging between 3.5% and 4.2%, translating to an annual percentage rate (APR) of 42% to 52%. When cardholders face unexpected financial distress, paying only the 5% Minimum Amount Due (MAD) fails to amortize the principal. Instead, minimum payments merely cover accumulated finance charges and 18% GST, leaving the underlying debt compounding every billing cycle.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Reserve Bank of India (RBI) prudential guidelines, delinquent cards advance through Special Mention Account stages: SMA-0 (1-30 days overdue), SMA-1 (31-60 days), and SMA-2 (61-90 days). Beyond 90 days, the account is classified as a Non-Performing Asset (NPA), mandating 100% Tier-1 capital provisioning by the issuing bank.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Because credit cards are entirely unsecured, issuers cannot enforce summary collateral seizure under the SARFAESI Act, 2002. Civil litigation under Order 37 CPC is cost-prohibitive. Consequently, card issuers maintain distressed debt retention desks empowered to offer substantial One-Time Settlements (OTS) to recover immediate capital.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Percent className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: True Principal vs Inflated Dues
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Delinquent credit card statement balances rarely reflect true legal liabilities. During delinquency, issuers continuously stack finance charges, late payment fees, overlimit surcharges, and 18% GST. Over 6 to 9 months, these ancillary charges frequently equal or exceed the underlying principal purchase value.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During bilateral One-Time Settlement negotiations, debt professionals unbundle the statement to isolate core principal spend. Card issuer settlement policies permit 100% waivers on late payment penalties and GST charges, alongside 50% to 75% cuts on accumulated finance charges and core principal discounts in seasoned NPAs.
              </p>

              {/* Settlement Math Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
                <div className="bg-slate-900 text-white p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">Representative 180-Day Credit Card Settlement Breakdown</h3>
                    <p className="text-xs text-slate-400">Actual financial forensic model for unbundling delinquent revolving card balances</p>
                  </div>
                  <span className="text-xs font-extrabold bg-blue-600 text-white px-3 py-1 rounded-full uppercase tracking-wider">
                    50.2% Total Savings
                  </span>
                </div>

                <div className="p-4 sm:p-6 divide-y divide-slate-100 text-xs sm:text-sm">
                  <div className="py-2.5 flex justify-between items-center text-slate-600">
                    <span>Original Principal Spend:</span>
                    <span className="font-semibold text-slate-900">₹4,50,000</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center text-slate-600">
                    <span>Accumulated 42% APR Finance Charges:</span>
                    <span className="font-semibold text-red-600">+ ₹1,89,000</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center text-slate-600">
                    <span>Late Payment Penalties &amp; Overlimit Charges:</span>
                    <span className="font-semibold text-red-600">+ ₹78,000</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center text-slate-600">
                    <span>Cumulative 18% GST Levied on Fees:</span>
                    <span className="font-semibold text-red-600">+ ₹48,060</span>
                  </div>
                  <div className="py-3 flex justify-between items-center bg-slate-50 px-3 rounded-lg font-bold text-slate-900">
                    <span>Gross Claimed Bank Balance:</span>
                    <span className="text-slate-900 text-sm sm:text-base">₹7,65,060</span>
                  </div>

                  <div className="py-2.5 flex justify-between items-center text-emerald-700">
                    <span>Negotiated 100% Waiver on Penal Fees &amp; GST:</span>
                    <span className="font-semibold">- ₹1,26,060</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center text-emerald-700">
                    <span>Negotiated 65% Waiver on Finance Charges:</span>
                    <span className="font-semibold">- ₹1,22,850</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center text-emerald-700">
                    <span>Core Principal Haircut (30% Discount):</span>
                    <span className="font-semibold">- ₹1,35,000</span>
                  </div>

                  <div className="pt-4 pb-1 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-emerald-50/80 -mx-4 -mb-4 sm:-mx-6 sm:-mb-6 p-4 sm:p-6 rounded-b-2xl border-t border-emerald-100">
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-800 block">Final Approved OTS Settlement Amount</span>
                      <span className="text-xs text-emerald-600">Payable directly to bank card account in 2 monthly tranches</span>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <span className="text-xl sm:text-2xl font-black text-emerald-700 block">₹3,81,150</span>
                      <span className="text-[11px] text-emerald-800 font-semibold">Net Direct Savings: ₹3,83,910 (50.2% Total Waiver)</span>
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
                3. Resolution Comparison: Debt Relief Pathways
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers facing severe card default must evaluate multiple debt resolution paths based on cash flow realities and legal finality:
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
                      <td className="p-3.5 font-bold text-slate-900">Inaction / Ignoring Default</td>
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
                4. CIBIL Algorithm: Post-Settlement Credit Rebuilding
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The TransUnion CIBIL scoring engine calculates creditworthiness across 5 weighted mathematical parameters: Payment History (35% weight), Credit Utilization Ratio (30% weight), Credit Age and History Depth (15% weight), Credit Mix (10% weight), and Recent Inquiries (10% weight).
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Default triggers progressive Days Past Due (DPD) flags, dropping credit scores by 120 to 180 points. Executing an OTS updates the account status to Settled. While this tag remains on bureau files for 7 years, it permanently stops active monthly negative DPD reporting.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Cardholders can systematically rehabilitate their credit score above 750 within 18 to 24 months by utilizing a Fixed Deposit secured credit card and maintaining utilization under 20%. Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), borrowers retain the right to pay the residual waived balance at a future date to convert their CIBIL status from Settled to Closed.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Process Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Blueprint: The 6-Stage Credit Card Settlement Framework
              </h2>
              
              <div className="bg-white rounded-2xl border border-slate-200/80 p-3 sm:p-4 shadow-xs">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <Image
                    src="/images/infographics/credit-card-settlement-process.jpg"
                    alt="Credit Card Settlement Process in India: 6-Stage Strategic Framework Infographic"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="mt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-slate-500 gap-2 px-1">
                  <span>Figure 1.1: Official CredSettle 6-Stage Credit Card Settlement and Dispute Resolution Framework.</span>
                  <a
                    href="/images/infographics/credit-card-settlement-process.jpg"
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
                5. Step-by-Step Settlement SOP: 6 Stages from Default to No Dues
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Executing a legally secure credit card settlement requires strict procedural discipline to prevent recovery fraud and secure an authentic No Dues Certificate:
              </p>

              <div className="space-y-4">
                {/* Stage 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#1886ff] font-extrabold text-sm flex items-center justify-center flex-shrink-0 border border-blue-100">
                      01
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Stage 1: Forensic Statement Audit &amp; Balance Unbundling
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    Meticulous review of 12 to 24 months of card statements to unbundle compounding 42% APR interest, late payment penalties, and GST, establishing true net principal liability.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#1886ff] font-extrabold text-sm flex items-center justify-center flex-shrink-0 border border-blue-100">
                      02
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Stage 2: Hardship Dossier Compilation &amp; Insolvency Proof
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    Gathering documentary proof of financial distress, including job termination letters, salary reduction slips, audited business balance sheets, hospital medical records, and bank statements.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#1886ff] font-extrabold text-sm flex items-center justify-center flex-shrink-0 border border-blue-100">
                      03
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Stage 3: Direct Card Retention &amp; Nodal Escalation
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    Filing formal representations with the card issuer Head of Collections and Principal Nodal Officer, invoking RBI Fair Practices to halt third-party agent harassment.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#1886ff] font-extrabold text-sm flex items-center justify-center flex-shrink-0 border border-blue-100">
                      04
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Stage 4: Bilateral Stressed Asset &amp; OTS Negotiations
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    Leveraging bank regulatory provisioning deadlines and hardship evidence to negotiate 100% penal waivers and secure an approved settlement between 25% and 50% of gross dues.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#1886ff] font-extrabold text-sm flex items-center justify-center flex-shrink-0 border border-blue-100">
                      05
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Stage 5: Official Settlement Letter Legal Vetting
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    Forensic examination of the bank formal Settlement Sanction Letter, verifying issuer domain authenticity, payment schedule, and full liability discharge covenants.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#1886ff] font-extrabold text-sm flex items-center justify-center flex-shrink-0 border border-blue-100">
                      06
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Stage 6: Direct Remittance &amp; No Dues Certificate
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    Remitting compromised funds directly into the credit card account and securing a stamped No Dues Certificate within 30 days while updating credit bureau records.
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
                6. Statutory Notice Defense: Legal Rights &amp; Notice Responses
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When credit card accounts default past 90 days, lenders often issue statutory notices through retained law firms. Timely formal responses prevent ex-parte decrees:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card 1: Section 25 PSSA */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <span>Section 25 PSSA Notice</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Issued for bounced NACH auto-debit mandates. Serving a formal reply within 15 days establishes bona fide hardship and absence of fraudulent intent, redirecting proceedings to civil settlement.
                  </p>
                </div>

                {/* Card 2: Section 138 NI Act */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                    <Gavel className="w-4 h-4 text-indigo-600" />
                    <span>Section 138 NI Act Notice</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Issued when security cheques bounce. Legal defense challenges arbitrary penal inflation and deposits made without crystallized debt, prompting lenders toward negotiated settlements.
                  </p>
                </div>

                {/* Card 3: Section 21 Arbitration Act */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                    <Landmark className="w-4 h-4 text-emerald-600" />
                    <span>Section 21 Arbitration Notice</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Banks frequently invoke private arbitration. Under Supreme Court rulings in TRF Ltd. and Perkins Eastman, unilateral arbitrator appointments are de jure invalid under Section 12(5).
                  </p>
                </div>

                {/* Card 4: RBI Fair Practices Code */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <span>RBI Fair Practices Code</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Prohibits recovery agents from calling before 8:00 AM or after 7:00 PM, contacting third parties, using intimidation, or making unauthorized home visits.
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
                7. 3-Tier Escalation Matrix: Institutional Redressal
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a card issuer ignores hardship petitions or engages in unlawful recovery practices, borrowers can escalate through the Reserve Bank of India statutory grievance framework:
              </p>

              <div className="space-y-3">
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md">
                      Level 1 Escalation
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mt-1">Bank Grievance Redressal Officer (GRO)</h3>
                    <p className="text-xs text-slate-600 mt-0.5">First-tier written filing for unfair penal charges or collection harassment; turnaround time of 7 to 10 working days.</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 flex-shrink-0">7 - 10 Days</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md">
                      Level 2 Escalation
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mt-1">Principal Nodal Officer (PNO)</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Direct escalation to senior bank management for stressed asset review and structured OTS approvals; turnaround time of 14 to 21 working days.</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 flex-shrink-0">14 - 21 Days</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                      Level 3 Statutory Escalation
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mt-1">RBI Integrated Ombudsman (CMS Portal)</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Formal complaint filed via cms.rbi.org.in if grievances remain unresolved past 30 days, providing cost-free statutory dispute adjudication.</p>
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
                8. Chronological Resolution Milestones: Default to Debt Freedom
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the 6-month default cycle helps borrowers negotiate during the peak settlement window:
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
                      <td className="p-3.5">SMS alerts and late fees</td>
                      <td className="p-3.5">Audit statement; cease minimum dues payments</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 31 - 60</td>
                      <td className="p-3.5">SMA-1</td>
                      <td className="p-3.5">Telecalling and 42% APR compounding</td>
                      <td className="p-3.5">Compile financial hardship documentation</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 61 - 90</td>
                      <td className="p-3.5">SMA-2</td>
                      <td className="p-3.5">Agency assignment and demand notices</td>
                      <td className="p-3.5">Engage legal representation to halt collection harassment</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 91 - 120</td>
                      <td className="p-3.5">NPA Classification</td>
                      <td className="p-3.5">Card blocked; 100% provisioning triggered</td>
                      <td className="p-3.5">Serve formal legal response contesting charges</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 121 - 150</td>
                      <td className="p-3.5">Peak OTS Window</td>
                      <td className="p-3.5">Bank evaluates write-off versus recovery</td>
                      <td className="p-3.5 text-emerald-700 font-bold">Negotiate 50% to 75% gross balance waiver</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 151 - 180+</td>
                      <td className="p-3.5">Settlement &amp; Closure</td>
                      <td className="p-3.5">Settlement letter issued</td>
                      <td className="p-3.5 text-emerald-700 font-bold">Remit compromised payment directly to bank and obtain stamped No Dues Certificate</td>
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
                9. Specialized Real-World Scenarios in Credit Card Settlements
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit card defaults often intersect with broader financial and corporate complexities:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Scenario 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Multi-Card Portfolio Consolidation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Managing 3 to 5 delinquent cards simultaneously across multiple issuers to synchronize negotiations and avoid isolated legal actions.
                  </p>
                </div>

                {/* Scenario 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    Corporate Layoffs &amp; Salary Cuts
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Demonstrating involuntary income loss for salaried professionals to justify significant principal haircuts on high-limit cards.
                  </p>
                </div>

                {/* Scenario 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    Business Proprietorship Capital Strain
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Bifurcating individual credit card liabilities from MSME operational losses using audited GST records to secure standalone retail settlements.
                  </p>
                </div>

                {/* Scenario 4 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-amber-600" />
                    ARC Debt Assignment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Negotiating with Asset Reconstruction Companies like Phoenix or Encore that purchased written-off debt at steep discounts, securing up to 80% waivers.
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
                Frequently Asked Questions: Credit Card Settlement in India
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
                  Stop recovery agent harassment, halt compounding finance charges, and settle your credit card debt at a 50% to 75% waiver with direct bank legal protection.
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
                  <span><strong>Zero Upfront Settlement Risk:</strong> Performance-based debt resolution fees.</span>
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
                  <span><strong>Pan-India Representation:</strong> Dedicated debt negotiators and legal panel.</span>
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
