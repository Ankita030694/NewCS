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
  Sparkles,
  Gavel,
  BadgeAlert,
  Landmark
} from 'lucide-react';

export default function CreditCardLegalNoticeFormatClient() {
  const [activeId, setActiveId] = useState<string>('executive-brief');
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
    { id: 'executive-brief', label: 'Executive Brief & Crux' },
    { id: 'debt-economics-npa-dynamics', label: '1. Debt Economics & NPA Cycle' },
    { id: 'financial-breakdown-settlement-math', label: '2. Financial Math & Penal Inflation' },
    { id: 'legal-forum-comparison-matrix', label: '3. Legal Recovery Forum Matrix' },
    { id: 'cibil-scoring-algorithm-math', label: '4. CIBIL Algorithm & Credit Rebuilding' },
    { id: 'infographic-blueprint', label: 'Visual 6-Step Response Blueprint' },
    { id: 'credit-card-notice-sop', label: '5. 6-Stage Defense & Settlement SOP' },
    { id: 'statutory-notice-defense-rights', label: '6. Statutory Protections & Legal Rights' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance & RBI Ombudsman' },
    { id: 'chronological-timeline-milestones', label: '8. Procedural Timeline Milestones' },
    { id: 'specialized-card-scenarios', label: '9. Multi-Card Debt, Layoffs & ARCs' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-authorities-citations', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      "q": "What is a credit card legal notice?",
      "a": "A credit card legal notice is a formal demand letter from a bank advocate under Section 106 Transfer of Property Act, requiring dues payment in 15 to 30 days before initiating litigation."
    },
    {
      "q": "Can I be arrested for an unpaid credit card notice?",
      "a": "No. Credit card default is purely a civil contractual dispute under the Contract Act. It is not a criminal offense, and banks cannot arrest or detain you."
    },
    {
      "q": "What is the time limit to reply to a credit card legal notice?",
      "a": "You should reply within 15 to 30 days via Speed Post with AD. A timely response preserves legal defenses, disputes compounding 42%+ APR, and prevents ex-parte orders."
    },
    {
      "q": "How can I dispute inflated credit card finance charges?",
      "a": "Demand a certified ledger under Bankers Books Evidence Act and cite RBI Master Directions. Dispute compounding 42%+ APR interest and penalty fees, offering legitimate principal settlement."
    },
    {
      "q": "Can banks file Section 138 cheque bounce cases for credit cards?",
      "a": "Section 138 applies only if a physical cheque bounced. Security cheques filled with inflated penalty totals do not constitute legally enforceable debt under Supreme Court rulings."
    },
    {
      "q": "What should I do if the notice threatens arbitration?",
      "a": "Object under Section 12(5) Arbitration Act citing Perkins Eastman and TRF Ltd. Unilateral appointments by banks are void ab initio, forcing the lender into bilateral compromise talks."
    },
    {
      "q": "Can a bank advocate freeze my bank account or salary?",
      "a": "No. Advocates cannot freeze accounts or attach salaries without an explicit Civil Court execution order. Unauthorized freezes violate RBI Fair Practices Code and Article 300A."
    },
    {
      "q": "How does replying to a legal notice help negotiate an OTS?",
      "a": "A formal legal reply exposes calculation errors and establishes financial hardship. This creates litigation risk, motivating the bank Credit Committee to sanction a 40% to 60% compromise waiver."
    },
    {
      "q": "What happens if I ignore a credit card legal notice?",
      "a": "Ignoring a notice allows banks to proceed ex-parte for civil decrees or arbitral awards. It also accelerates recovery harassment and triggers severe credit score downgrades."
    },
    {
      "q": "How does credit card settlement affect my CIBIL score?",
      "a": "Settling a card halts delinquency and updates the status to Settled or Closed with zero balance under Section 21 CICRA, allowing credit rebuilding to 750+ within 12 to 24 months."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>Statutory Banking &amp; Debt Defense Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Credit Card Legal Notice Format and Reply
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Received a demand notice from a bank advocate for unpaid credit card dues? Learn how to reply, challenge compounding 42%+ finance charges, rebut arbitration threats, and settle your debt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Received a Credit Card Legal Notice? Get Legal Defense</span>
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
          
          {/* LEFT COLUMN: STICKY TOC */}
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
                  Governed by the RBI Fair Practices Code, Contract Act 1872 &amp; Supreme Court Precedents.
                </p>
              </div>
            </div>
          </aside>

          {/* MIDDLE COLUMN: MAIN CONTENT */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="executive-brief"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: CREDIT CARD LEGAL NOTICE &amp; DEFENSE</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Civil Dispute:</strong> Credit card default is purely a civil contractual matter. Advocates cannot issue arrest warrants.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Unbundling 40%+ APR:</strong> Claimed balances consist largely of compounding finance charges and late fees, all legally contestable.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">15 to 30 Day Window:</strong> A timely legal reply preserves defenses, disputes penal inflation, and prevents ex-parte orders.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Deconstructing Threats:</strong> Cheque and NACH bounce provisions cannot be misused to enforce penalty claims lacking enforceable debt.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Arbitration Nullification:</strong> Under Perkins Eastman rulings, unilateral sole arbitrator appointments by lenders are void ab initio.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Ledger Audit Rights:</strong> Borrowers possess statutory rights under the Bankers Books Evidence Act to demand audited statements.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Pivot to 40%–60% OTS:</strong> Substantive legal objections create litigation risk, motivating Credit Committees to sanction compromise settlements.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Bureau Upgrades:</strong> Obtaining an unconditional No Dues Certificate enables updating credit records to Closed under CICRA Section 21.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="debt-economics-npa-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Banking Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Credit Card Debt Economics, Unbundling APR, and NPA Classification
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit card debt represents unsecured revolving credit in Indian banking. Cards levy interest between 42% and 48% annually, compounding monthly at 3.5% to 4%. When cardholders face distress like job loss or illness, paying Minimum Amount Due traps them in continuous interest servicing without reducing principal.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Reserve Bank of India prudential norms, unpaid cards progress through SMA stages to NPA status at 90 days. Lacking collateral under SARFAESI, banks face mandatory provisioning, creating strong institutional incentives for Credit Committees to approve compromise One-Time Settlements with 40% to 60% waivers rather than financing protracted litigation.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analytics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Principal vs. Compounding Penal Surcharges
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a bank advocate serves a demand notice, the claimed sum is inflated through compounding finance charges, late fees, over-limit fees, and 18% GST. Within eighteen months, penal additions routinely exceed original spending.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A forensic accounting review deconstructs the claim ledger into real principal disbursements versus unconscionable fees, establishing an equitable baseline for compromise settlement negotiations.
              </p>

              {/* Representative Calculation Card */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm sm:text-base">
                    <CreditCard className="w-5 h-5 text-[#1886ff]" />
                    <span>Representative 180-Day NPA Credit Card Claim Analysis</span>
                  </div>
                  <span className="text-xs bg-blue-50 text-[#1886ff] font-bold px-2.5 py-1 rounded-md">
                    Case Study Model
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600">
                  <div className="space-y-2.5">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Total Credit Card Limit:</span>
                      <span className="font-bold text-slate-900">₹2,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Actual Utilized Principal:</span>
                      <span className="font-bold text-emerald-700">₹1,85,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Compounded Finance Charges (42% APR):</span>
                      <span className="font-bold text-red-600">+₹1,45,000</span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Late Payment &amp; Overlimit Penalties:</span>
                      <span className="font-bold text-red-600">+₹78,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>GST (18%) on Penal Fees:</span>
                      <span className="font-bold text-red-600">+₹42,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Total Gross Demand in Advocate Notice:</span>
                      <span className="font-black text-red-700">₹4,50,000</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 p-4 rounded-xl bg-blue-50/70 border border-blue-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-slate-900 block">CredSettle Compromise OTS Target:</span>
                    <span className="text-slate-600 text-xs">Eliminates 100% penal charges and negotiates 40% to 55% waiver on real principal</span>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-base sm:text-lg font-black text-[#1886ff]">₹95,000 – ₹1,20,000</span>
                    <span className="text-[10px] text-emerald-700 block font-bold">Net Savings: ₹3,30,000+ (73% Total Relief)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="legal-forum-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Strategic Forum Comparison: Credit Card Recovery vs. Resolution Options
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a credit card account defaults, banks weigh several recovery avenues. Compare how negotiated One-Time Settlements contrast with restructuring, civil suits, arbitration, Lok Adalats, and default:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 font-bold">Resolution Route</th>
                      <th className="p-3 font-bold">Framework</th>
                      <th className="p-3 font-bold">Financial Relief</th>
                      <th className="p-3 font-bold">Legal Status</th>
                      <th className="p-3 font-bold">Timeline</th>
                      <th className="p-3 font-bold text-[#1886ff]">Strategic Advantage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">One-Time Settlement</td>
                      <td className="p-3">RBI Compromise</td>
                      <td className="p-3 text-emerald-700 font-semibold">40%–60% Debt Waiver</td>
                      <td className="p-3 text-emerald-700 font-semibold">Zero Risk; NDC Issued</td>
                      <td className="p-3">30–60 Days</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Full debt discharge with binding No Dues Certificate</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">EMI Restructuring</td>
                      <td className="p-3">Bank Policy</td>
                      <td className="p-3">0% Waiver; 18%–24% APR</td>
                      <td className="p-3">New loan terms</td>
                      <td className="p-3">12–36 Mos</td>
                      <td className="p-3">Spreads monthly cash flow without debt reduction</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Summary Civil Suit</td>
                      <td className="p-3">Order 37 CPC</td>
                      <td className="p-3 text-red-600 font-semibold">Full claim plus interest</td>
                      <td className="p-3">Money Decree</td>
                      <td className="p-3">24–48 Mos</td>
                      <td className="p-3">File Leave to Defend citing inflated penalty interest</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Arbitration</td>
                      <td className="p-3">Arbitration Act</td>
                      <td className="p-3 text-red-600 font-semibold">Full claim plus fees</td>
                      <td className="p-3">Civil decree award</td>
                      <td className="p-3">6–12 Mos</td>
                      <td className="p-3">Challenge appointment under Section 12(5) Perkins Eastman</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">National Lok Adalat</td>
                      <td className="p-3">NALSA Act</td>
                      <td className="p-3 text-emerald-700 font-semibold">Consensual waiver</td>
                      <td className="p-3">Final award</td>
                      <td className="p-3">1 Day</td>
                      <td className="p-3">Court fees refunded, formal judicial closure recorded</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Inaction &amp; Default</td>
                      <td className="p-3">Default State</td>
                      <td className="p-3 text-red-700 font-bold">180%+ Inflation</td>
                      <td className="p-3 text-red-700 font-bold">Ex-parte decrees</td>
                      <td className="p-3">Indefinite</td>
                      <td className="p-3 text-red-600">Severe credit score destruction and asset exposure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-scoring-algorithm-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Technical CIBIL Algorithm Breakdown and Bureau Repair Timeline
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit bureaus evaluate creditworthiness using Payment History (35%), Credit Utilization (30%), History Length (15%), Credit Mix (10%), and Inquiries (10%). Defaulting on credit cards breaches utilization limits while inflicting severe penalties across models.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Upon 90+ DPD default and advocate notice issuance, scores drop 80 to 140 points. Under CICRA 2005, negative records persist for seven years unless formally resolved. Executing a One-Time Settlement and securing a No Dues Certificate triggers statutory updates under Section 21 of CICRA. The account status transitions to Closed with zero balance, enabling score rebuilding above 750 within 12 to 24 months.
              </p>
            </section>

            {/* SECTION 5: Embedded 16:9 Infographic Banner */}
            <section id="infographic-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: 6-Step Credit Card Notice Response Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Examine this structured strategic flowchart illustrating the exact 6-stage procedural sequence from forensic ledger audit to legal reply drafting, arbitration rebuttal, and final No Dues Certificate issuance.
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/infographics/credit-card-legal-notice-format.jpg"
                    alt="Credit Card Legal Notice Defense and Settlement Workflow Blueprint India"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Architecture • RBI Fair Practices Code &amp; CICRA 2005</span>
                  <a
                    href="/images/infographics/credit-card-legal-notice-format.jpg"
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
            <section id="credit-card-notice-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Defense SOP</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Standard Operating Procedure: 6 Stages of Legal Notice Defense &amp; Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this sequential procedure to protect your legal rights and negotiate an affordable compromise settlement upon receiving a credit card demand notice:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 1–5</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Forensic Notice &amp; Ledger Audit
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Verify advocate credentials and reconcile claimed dues against statements to isolate real principal from 42%+ APR compounding and penalties.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 6–15</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Drafting Substantive Legal Reply
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Serve an advocate reply via Speed Post AD within 15 days, detailing financial hardship, disputing illegal charges, and proposing principal settlement.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 16–30</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Rebutting Quasi-Criminal Threats
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Establish that card default is strictly civil breach of contract, rebutting misuse of cheque bounce sections for arbitrary penalty totals.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 31–60</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Challenging Unilateral Arbitration
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File objections under Section 12(5) citing Perkins Eastman precedents, halting ex-parte hearings and driving bilateral settlement talks.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 61–90</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Bilateral Credit Committee Talks
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Engage the bank Principal Nodal Officer with hardship dossier to secure 100% penal waiver and a 40% to 55% principal compromise.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 91–120</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Settlement Vetting &amp; NDC Issuance
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Vet the settlement letter for full discharge clauses, remit payment directly to the card account, and obtain a No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Legal Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense: Legal Protections and Borrower Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding statutory boundaries is essential when responding to legal notices. Indian jurisprudence provides solid borrower protections against coercion and unlawful fees:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                    <span>Section 25 PSSA Defense (NACH)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 25 applies to bounced auto-debits. It requires strict statutory compliance within 30 days and cannot enforce arbitrary penal fees lacking contractual validity.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Scale className="w-4 h-4 flex-shrink-0" />
                    <span>Section 138 NI Act Defense (Cheques)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cheque bounce actions require legally enforceable debt. The Supreme Court affirmed that security cheques filled with arbitrary penalty sums do not satisfy statutory debt tests.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Landmark className="w-4 h-4 flex-shrink-0" />
                    <span>Section 12(5) Arbitration Nullification</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In Perkins Eastman and TRF Ltd., the Supreme Court ruled that lenders cannot unilaterally appoint sole arbitrators. Such nominations are void ab initio.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <BadgeAlert className="w-4 h-4 flex-shrink-0" />
                    <span>DRT Limits &amp; Anti-Harassment Rules</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Debt Recovery Tribunals require claims over ₹20 Lakhs. The RBI Fair Practices Code strictly prohibits recovery agent harassment, workplace visits, and contacting family members.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Escalation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. The 3-Tier Grievance Escalation &amp; Regulatory Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the lending bank or its recovery advocate ignores your statutory reply or persists with aggressive extra-judicial harassment, escalate through this 3-tier matrix:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Grievance Officer &amp; Bank PNO
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">7–10 Days</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Formal Notice Response &amp; Internal Audit
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit the formal legal reply directly to the Principal Nodal Officer, detailing notice errors, providing hardship proofs, and requesting compromise review.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: High Court Mandate Petitions
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">14–21 Days</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Challenging Illegal Proceedings
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If an empaneled arbitrator continues hearings despite Section 12(5) objections, petition the High Court under Section 14 to terminate the mandate.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: RBI Integrated Ombudsman
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">30 Days</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Regulatory Complaint for Harassment
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lodge a statutory complaint via cms.rbi.org.in for Fair Practices Code violations, coercive collection calls, and arbitrary interest compounding.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-timeline-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Chronological Resolution Milestones: Day 1 to Month 6
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding delinquency progression enables borrowers to time legal interventions and settlement proposals for maximum financial relief:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 font-bold">Timeline</th>
                      <th className="p-3 font-bold">Account Status</th>
                      <th className="p-3 font-bold">Legal Action</th>
                      <th className="p-3 font-bold text-[#1886ff]">Strategic Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Days 1–30</td>
                      <td className="p-3">SMA-0 Delinquency</td>
                      <td className="p-3">Automated SMS, emails &amp; call reminders</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Audit monthly card statements &amp; curtail non-essential credit usage</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Days 31–90</td>
                      <td className="p-3">SMA-1 / SMA-2 Pre-NPA</td>
                      <td className="p-3">Collection agency calls &amp; field visits</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Enforce RBI Fair Practices Code; document harassment incidents</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Days 91–120</td>
                      <td className="p-3">NPA Classification</td>
                      <td className="p-3">Demand Recall Notice issued by bank</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Engage legal debt resolution counsel to prepare hardship dossier</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Days 121–150</td>
                      <td className="p-3">Pre-Litigation Stage</td>
                      <td className="p-3">Advocate Legal Notice / Arbitration Notice</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Dispatch formal legal reply disputing 42%+ penal APR within 15 days</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Days 151–180</td>
                      <td className="p-3">OTS Negotiation Window</td>
                      <td className="p-3">Litigation risk triggers compromise review</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Secure written OTS letter with 40%–60% waiver &amp; obtain NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-card-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: Multi-Card Debt, Layoffs &amp; ARC Assignments
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Legal notice response strategies must adapt to distinct financial, operational, and institutional circumstances:
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Multi-Card Rollover &amp; Cross-Lender Debt Defense
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Holding balances across multiple card issuers risks conflicting responses. A synchronized defense unifies replies, preventing creditor judgments while structuring phased settlements.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#1886ff]" />
                    Sudden Executive Layoffs &amp; Loss of Livelihood
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submitting documented employment termination notices establishes bona fide hardship, prompting Credit Committees to sanction deep OTS waivers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#1886ff]" />
                    Unresolved Merchant Disputes &amp; Fraudulent Charges
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For notices demanding payment on disputed chargebacks unaddressed under RBI Zero Liability Rules, the reply must formally contest liability and demand reversals.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Credit Card Portfolios Assigned to ARCs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When banks sell distressed card portfolios to ARCs at 15% to 25% of face value under SARFAESI Section 5, ARCs readily accept discounted compromise settlements.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile */}
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
                Frequently Asked Questions on Credit Card Legal Notices &amp; Replies
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to view detailed legal answers verified by our debt resolution professionals:
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
            <section id="regulatory-authorities-citations" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Judicial References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Master Directions:</strong> Credit Card Conduct Directions 2022 (Updated 2026).
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Sections 73 &amp; 74 (Breach &amp; Usurious Penalties).
                </li>
                <li>
                  <strong>Arbitration Act, 1996:</strong> Sections 11, 12(5) &amp; 21 (Unilateral Arbitrator Nullification).
                </li>
                <li>
                  <strong>Supreme Court of India:</strong> <em>Perkins Eastman (2020)</em> &amp; <em>TRF Ltd. (2017)</em>.
                </li>
                <li>
                  <strong>CICRA 2005:</strong> Section 21 (Mandatory Accurate Bureau Updates).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>RBI Ombudsman</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>India Code</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>NALSA Legal Services</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Guide
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Protection
                  </Link>
                  <Link href="/bank-recovery-case-in-court" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Court Cases
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement
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

          {/* RIGHT COLUMN: STICKY SIDEBAR */}
          <aside className="space-y-5 sticky top-6">
            
            {/* Author Bio Card */}
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
                Specialized in banking compliance, credit card dispute defense, unbundling usurious finance charges, and negotiating compromise settlements with Bank Nodal Officers across Indian forums.
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

            {/* Emergency CTA Card */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Received a Credit Card Legal Notice?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution experts draft authoritative legal replies, dispute inflated finance charges, stop recovery calls, and negotiate a 40% to 60% compromise waiver.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Received a Credit Card Legal Notice? Get Legal Defense
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

            {/* CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked fees.</span>
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
                  <span><strong>Pan-India Representation:</strong> Dedicated specialists.</span>
                </li>
              </ul>
            </div>

            {/* Related Guides */}
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
                  <span className="text-[10px] text-slate-400 mt-1 block">Full step-by-step negotiation blueprint &rarr;</span>
                </Link>

                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Arbitration Notice Defense Strategy
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Section 12(5) Perkins Eastman guide &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Card to Closed
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Credit bureau repair blueprint &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
