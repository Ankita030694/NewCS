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
  Calculator,
  RefreshCcw,
  ShieldAlert
} from 'lucide-react';

export default function CreditCardMinimumDueTrapClient() {
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
    { id: 'quick-crux', label: 'Executive Summary & Key Takeaways' },
    { id: 'debt-economics-minimum-due', label: '1. The 5% Minimum Due Trap & APR Dynamics' },
    { id: 'settlement-math-breakdown', label: '2. Compounding Math vs Settlement Economics' },
    { id: 'resolution-comparison-matrix', label: '3. Debt Relief Options Comparison' },
    { id: 'cibil-algorithm-impact', label: '4. CIBIL Scoring & CICRA Rectification' },
    { id: 'infographic-overview', label: 'Visual 6-Stage Escape Framework' },
    { id: 'step-by-step-ots-sop', label: '5. Step-by-Step 6-Stage Settlement SOP' },
    { id: 'statutory-legal-defense', label: '6. Statutory Notice Defense & Cardholder Rights' },
    { id: 'three-tier-grievance-matrix', label: '7. 3-Tier Grievance & Ombudsman Matrix' },
    { id: 'chronological-procedural-timeline', label: '8. Chronological Timeline to Resolution' },
    { id: 'real-world-debt-scenarios', label: '9. Specialized Real-World Case Studies' },
    { id: 'company-profile', label: 'About CredSettle Legal Defense' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Legal Authorities' }
  ];

  const faqs = [
    {
      q: 'What is the credit card Minimum Amount Due (MAD) trap?',
      a: 'The minimum due trap occurs when paying only 5% of your balance. Because banks levy 42%–48% APR plus 18% GST, almost your entire payment covers interest, leaving the principal balance virtually unchanged for decades.'
    },
    {
      q: 'How much interest do Indian banks charge on revolving credit card balances?',
      a: 'Banks charge 3.5% to 3.99% monthly finance fees, equating to 42% to 48% annualized percentage rate (APR). An additional 18% GST applies to all charges, raising the effective annual borrowing cost beyond 50%.'
    },
    {
      q: 'Does paying minimum dues protect my CIBIL score?',
      a: 'Paying minimum dues avoids immediate default marks but keeps your Credit Utilization Ratio near 100%. This high utilization suppresses your CIBIL score and revokes the 45-day interest-free grace period on fresh card transactions.'
    },
    {
      q: 'How long does it take to clear credit card debt via minimum payments?',
      a: 'Paying only 5% minimum monthly dues on a ₹3 Lakh balance at 42% APR takes approximately 18 to 22 years to clear, forcing the cardholder to pay over ₹7.2 Lakhs in total interest.'
    },
    {
      q: 'Can banks take legal action for credit card default in India?',
      a: 'Credit card debt is unsecured without asset collateral. Lenders cannot seize homes under SARFAESI, but may issue Section 25 PSSA notices for bounced auto-debits, Section 138 NI Act notices, or initiate private arbitration.'
    },
    {
      q: 'Can credit card debt be settled through One-Time Settlement (OTS)?',
      a: 'Yes. When an account defaults past 90 to 180 days into NPA classification, banks write off penal interest and accept a compromise OTS, settling the outstanding balance at a 45% to 65% discount.'
    },
    {
      q: 'How can I stop auto-debits from deducting my salary for credit card dues?',
      a: 'Cardholders can submit a formal NACH mandate cancellation notice to their bank under RBI guidelines. Switching your primary salary account to another institution also protects essential cash flows from automatic bank sweeps.'
    },
    {
      q: 'What is the impact of debt settlement on my CIBIL score?',
      a: 'The account is marked "Settled" in credit bureau records, causing an initial 75–120 point drop. However, cardholders can rebuild their credit back to 750+ within 18–24 months using secured credit cards.'
    },
    {
      q: 'Are recovery agents allowed to call relatives or visit my workplace?',
      a: 'No. The RBI Fair Practices Code strictly prohibits recovery agents from calling family members, visiting employers, or harassing borrowers outside 8:00 AM to 7:00 PM. Violations should be escalated to the RBI Ombudsman.'
    },
    {
      q: 'How does CredSettle assist cardholders trapped in credit card debt?',
      a: 'CredSettle performs forensic statement audits, stops recovery harassment, challenges invalid legal notices, and negotiates direct compromise One-Time Settlements with lending banks, securing official No Dues Certificates with complete principal discharge.'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
            <span>Credit Card Debt Defense &amp; Settlement Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How to Escape the Credit Card Minimum Due Trap
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Unraveling how the 5% minimum payment structure compounds at 42% to 48% APR, drains your monthly income for decades, and how structured debt settlement enables complete principal-only resolution under RBI guidelines.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Break the Minimum Due Cycle - Settle Credit Card Debt</span>
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
                  <span>Statutory Debt Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by RBI Master Directions on Credit Card Operations and Section 25 PSSA protections.
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
                <span>EXECUTIVE SUMMARY: HOW TO BREAK THE MINIMUM DUE DEBT SPIRAL</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">The 5% Illusion:</strong> Minimum dues cover only interest and GST, leaving principal untouched for 15+ years.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Compounding 42%–48% APR:</strong> Revolving card debt accrues daily finance fees, cancelling the 45-day interest-free grace window.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Credit Score Suppression:</strong> Near 100% credit utilization depresses CIBIL scores despite regular minimum payments.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Zero Collateral Exposure:</strong> Credit card debt is unsecured; lenders cannot seize residential property under SARFAESI.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Mandate Cancellation Rights:</strong> Cardholders have the statutory right under RBI rules to revoke auto-debit NACH mandates.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">45%–65% Settlement Window:</strong> 90-day NPA accounts qualify for compromise One-Time Settlements with complete penal waivers.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Anti-Harassment Shield:</strong> RBI Fair Practices Code strictly prohibits recovery calls to family members or workplace visits.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Credit Rebuilding Roadmap:</strong> Settling card debt enables full CIBIL restoration back to 750+ within 18–24 months.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & Revolving Credit / NPA Dynamics */}
            <section id="debt-economics-minimum-due" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Percent className="w-4 h-4 text-[#1886ff]" />
                <span>1. Debt Economics &amp; NPA Dynamics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                The Anatomy of the 5% Minimum Due Compounding Trap
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Monthly credit card statements highlight the Minimum Amount Due (MAD) as an affordable option, typically set at 5% of your total balance. In reality, this mechanism maximizes bank profitability. In India, revolving credit card debt incurs 3.5% to 3.99% monthly finance charges (42% to 48% APR). The government also levies 18% GST on all finance fees, pushing total annual borrowing costs above 50%.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Paying only the minimum due allocates funds toward GST, penal fees, and interest, leaving less than 1% to reduce principal spend. Revolving balances also cancel the 45-day interest-free grace period on fresh transactions. Because credit cards are unsecured, lenders face strict Tier-1 provisioning under RBI norms once accounts default past 90 days into Non-Performing Asset (NPA) status, motivating credit committees to approve compromise One-Time Settlements.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Compounding Settlement Math */}
            <section id="settlement-math-breakdown" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Calculator className="w-4 h-4 text-[#1886ff]" />
                <span>2. Compounding Math vs Settlement Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                The Financial Reality: Minimum Dues vs One-Time Settlement
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Comparing minimum payments against a structured One-Time Settlement (OTS) highlights why distressed cardholders choose debt resolution. On a ₹3,00,000 balance at 42% APR, paying the 5% minimum due (₹15,000) in month one directs ₹12,390 toward interest and GST, reducing principal by only ₹2,610. This cycle takes over 19 years and ₹7,20,000 in total payments to clear.
              </p>

              {/* Representative Calculation Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Representative Settlement Math (₹3,00,000 Card Default)
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    53% Overall Debt Haircut
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-500 font-semibold mb-1">Total Bank Dues</p>
                    <p className="text-lg sm:text-xl font-bold text-red-600">₹3,85,000</p>
                    <p className="text-[11px] text-slate-400 mt-1">Includes ₹85k penal charges</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-500 font-semibold mb-1">Minimum Due Horizon (19 Yrs)</p>
                    <p className="text-lg sm:text-xl font-bold text-amber-600">₹7,20,000+</p>
                    <p className="text-[11px] text-slate-400 mt-1">Continuous 42% APR drag</p>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                    <p className="text-xs text-[#1886ff] font-semibold mb-1">Negotiated OTS Resolution</p>
                    <p className="text-lg sm:text-xl font-bold text-[#1886ff]">₹1,40,000</p>
                    <p className="text-[11px] text-blue-600 font-medium mt-1">Full principal closure &amp; NDC</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-2">
                  CredSettle structured negotiation eliminates 100% of accumulated penal interest and late fees, anchoring settlement on verified principal spend to achieve closure at a 45% to 65% discount.
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="resolution-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>3. Debt Relief Options Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Strategic Evaluation of Credit Card Debt Resolution Mechanisms
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Cardholders facing severe debt must evaluate resolution pathways based on total financial cost, repayment timeline, legal exposure, and credit score impact.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200/80">
                      <th className="p-3.5 sm:p-4 border-r border-slate-200/80">Resolution Route</th>
                      <th className="p-3.5 sm:p-4 border-r border-slate-200/80">Financial Impact</th>
                      <th className="p-3.5 sm:p-4 border-r border-slate-200/80">Repayment Horizon</th>
                      <th className="p-3.5 sm:p-4 border-r border-slate-200/80">Legal Risk Exposure</th>
                      <th className="p-3.5 sm:p-4">CIBIL Score Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200/80">
                        Minimum Amount Due (MAD)
                      </td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80 text-red-600 font-semibold">
                        42%–48% APR + 18% GST compounding
                      </td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80">15 to 22 Years</td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80">Zero immediate legal action</td>
                      <td className="p-3.5 sm:p-4 text-amber-600 font-semibold">Suppressed via 90%+ CUR</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200/80">
                        Balance Conversion to EMI
                      </td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80">
                        18%–24% interest + fees
                      </td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80">12 to 48 Months</td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80">Default triggers legal notice</td>
                      <td className="p-3.5 sm:p-4">Standard reporting if paid</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200/80">
                        One-Time Settlement (OTS)
                      </td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80 text-emerald-600 font-bold">
                        45% to 65% Principal Compromise
                      </td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80 text-[#1886ff] font-bold">
                        30 to 90 Days
                      </td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80 text-emerald-600 font-semibold">
                        Complete immunity via NDC
                      </td>
                      <td className="p-3.5 sm:p-4">Marked Settled; rebuildable</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200/80">
                        Lok Adalat Conciliation
                      </td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80">
                        30% to 50% interest waiver
                      </td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80">Single Hearing Award</td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80">Decree non-appealable</td>
                      <td className="p-3.5 sm:p-4">Marked Settled in Lok Adalat</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200/80">
                        Inaction &amp; Ignoring Dues
                      </td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80 text-red-600">
                        Uncapped penalties &amp; fees
                      </td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80">Indefinite harassment</td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80 text-red-600 font-bold">
                        Sec 25 PSSA &amp; civil execution
                      </td>
                      <td className="p-3.5 sm:p-4 text-red-600 font-bold">Severe drop (under 550)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Credit Scoring Trajectory */}
            <section id="cibil-algorithm-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>4. CIBIL Scoring &amp; CICRA Rectification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                CIBIL Scoring Algorithms and Credit Rehabilitation
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Indian credit bureaus (CIBIL, Experian, CRIF High Mark, Equifax) compute scores using five factors: Payment History (35%), Credit Utilization Ratio (30%), Credit History Length (15%), Credit Mix (10%), and Inquiries (10%). Maintaining maxed-out limits keeps utilization near 100%, depressing credit scores even when minimum dues are paid on time.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Executing an OTS changes account status to Settled, causing an initial 75 to 120 point drop. However, unresolved debt causes greater damage. Post-settlement, cardholders can invoke Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA) to record zero balance, rebuilding scores back to 750+ within 18 to 24 months using secured credit cards.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Visual 6-Stage Escape Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                The CredSettle Strategic Credit Card Resolution Blueprint
              </h2>

              <div className="rounded-2xl border border-slate-200/80 overflow-hidden bg-white shadow-xs">
                <div className="relative aspect-video w-full bg-slate-900">
                  <Image
                    src="/images/infographics/credit-card-minimum-due-trap.jpg"
                    alt="How to Escape the Credit Card Minimum Due Trap Infographic Blueprint"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                </div>
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
                  <span>
                    <strong>Figure 1.1:</strong> Comprehensive 6-Stage SOP for Credit Card Forensic Audit, Hardship Filing &amp; Principal-Only Closure.
                  </span>
                  <a
                    href="/images/infographics/credit-card-minimum-due-trap.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-bold hover:underline inline-flex items-center gap-1 flex-shrink-0"
                  >
                    <span>View High-Res Infographic</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-ots-sop" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>5. Step-by-Step 6-Stage Settlement SOP</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Procedural Roadmap to Legal &amp; Financial Debt Freedom
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Escaping revolving credit card debt requires a structured, legally supported process to isolate transacted principal from compounding finance charges.
              </p>

              <div className="space-y-4">
                {/* Stage 1 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      01
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Stage 1: Forensic Statement Audit
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
                    Financial analysts review past statements to isolate core principal from compounding 42% APR charges, late fees, and 18% GST.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      02
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Stage 2: Hardship Dossier Compilation
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
                    We compile verified evidence of insolvency, including medical records, job termination notices, or business revenue losses.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      03
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Stage 3: Auto-Debit Revocation &amp; Mandate Shield
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
                    We issue statutory cancellation notices for NACH mandates under RBI guidelines and request administrative card freeze.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      04
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Stage 4: Credit Committee Bilateral Negotiation
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
                    CredSettle advocates negotiate directly with bank credit committees, seeking 100% penal interest waivers and 45%–65% debt haircuts.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      05
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Stage 5: Settlement Sanction Letter Vetting
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
                    Legal counsel scrutinizes the bank settlement letter to verify official letterhead, payment schedules, and complete waiver clauses.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      06
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Stage 6: Direct Remittance &amp; NDC Release
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
                    You pay the settlement sum directly to your bank account, securing an official No Dues Certificate and closure update.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Cardholder Legal Rights */}
            <section id="statutory-legal-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>6. Statutory Notice Defense &amp; Cardholder Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Statutory Notice Defense &amp; Borrower Protections
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When minimum payments stop, banks issue statutory legal communications. Understanding your rights ensures effective defense without panic.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Notice 1 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                    <BadgeAlert className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <h4>Section 25 PSSA (Electronic Mandate Bounce)</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 25 of the Payment and Settlement Systems Act, 2007, auto-debit bounces carry quasi-criminal liability. Serving a formal reply citing financial hardship and prior mandate revocation refutes fraudulent intent.
                  </p>
                </div>

                {/* Notice 2 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                    <FileText className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <h4>Section 138 NI Act (Cheque Dishonor Notice)</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If security cheques are presented and bounced, lenders issue Section 138 notices. Our defense establishes that undated security cheques cannot enforce arbitrary, compounding interest without audited reconciliation.
                  </p>
                </div>

                {/* Notice 3 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                    <Scale className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <h4>Unilateral Arbitration &amp; Perkins Eastman Defense</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Supreme Court rulings in <em>TRF Ltd.</em> and <em>Perkins Eastman</em>, banks cannot unilaterally appoint sole arbitrators without mutual consent, rendering unilateral arbitral proceedings voidable under Section 12(5).
                  </p>
                </div>

                {/* Notice 4 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                    <ShieldAlert className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <h4>RBI Fair Practices Code &amp; Anti-Harassment Rights</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI Master Directions prohibit recovery calls outside 8:00 AM to 7:00 PM, contacting employers, or abusive conduct, with violations punishable via the RBI Ombudsman.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-grievance-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>7. 3-Tier Grievance &amp; Ombudsman Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                3-Tier Grievance Escalation &amp; Ombudsman Redressal
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When lenders engage in predatory billing or recovery harassment, cardholders can systematically escalate complaints through three regulatory tiers.
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
                  <div>
                    <strong className="text-slate-900 font-bold block text-sm">Level 1: Grievance Redressal Officer (GRO)</strong>
                    <span className="text-slate-600">Submit a formal written dispute contesting inflated finance charges or agent misconduct.</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1886ff] font-bold text-xs flex-shrink-0">
                    Turnaround: 7–10 Days
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
                  <div>
                    <strong className="text-slate-900 font-bold block text-sm">Level 2: Principal Nodal Officer (PNO)</strong>
                    <span className="text-slate-600">Escalate unresolved grievances and billing discrepancies directly to senior bank management.</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1886ff] font-bold text-xs flex-shrink-0">
                    Turnaround: 14–21 Days
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
                  <div>
                    <strong className="text-slate-900 font-bold block text-sm">Level 3: Reserve Bank of India Integrated Ombudsman</strong>
                    <span className="text-slate-600">File an online complaint on cms.rbi.org.in under the Integrated Ombudsman Scheme 2021 for binding statutory resolution.</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs flex-shrink-0">
                    Turnaround: 30 Days
                  </span>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>8. Chronological Timeline to Resolution</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Chronological Milestones: From Default to Debt Discharge
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The lifecycle of delinquent credit card debt follows defined regulatory milestones from first missed payment to complete debt discharge.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200/80">
                      <th className="p-3.5 sm:p-4 border-r border-slate-200/80">Timeline</th>
                      <th className="p-3.5 sm:p-4 border-r border-slate-200/80">Regulatory Classification</th>
                      <th className="p-3.5 sm:p-4 border-r border-slate-200/80">Bank Action &amp; Exposure</th>
                      <th className="p-3.5 sm:p-4">Borrower Defense Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200/80">Day 1 to 30</td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80">SMA-0 (Overdue)</td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80">Late fees applied; automated reminders</td>
                      <td className="p-3.5 sm:p-4">Cancel auto-debits; audit billing statements</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200/80">Day 31 to 60</td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80">SMA-1 (Sub-Standard)</td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80">Card suspended; internal recovery calls</td>
                      <td className="p-3.5 sm:p-4">Issue hardship notice to Grievance Redressal</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200/80">Day 61 to 90</td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80">SMA-2 (Pre-NPA)</td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80">Assigned to collection agencies</td>
                      <td className="p-3.5 sm:p-4">Invoke RBI Fair Practices Code anti-harassment</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200/80 text-red-600 font-bold">NPA Classification</td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80">100% bank provisioning; legal notices</td>
                      <td className="p-3.5 sm:p-4 text-emerald-600 font-bold">Prime OTS negotiation window (45%–65% off)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200/80">Month 6+</td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80">Post-NPA / Written-Off</td>
                      <td className="p-3.5 sm:p-4 border-r border-slate-200/80">Potential ARC assignment or Lok Adalat</td>
                      <td className="p-3.5 sm:p-4 text-[#1886ff] font-bold">Execute OTS sanction letter &amp; secure NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="real-world-debt-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>9. Specialized Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Case Analysis Across Specialized Card Default Scenarios
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Different financial crises require tailored resolution strategies to maximize principal waivers while preventing aggressive recovery actions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Multiple Maxed-Out Credit Cards</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers rotating minimum payments across 3 to 6 cards face severe compounding. CredSettle halts interest across all issuers and coordinates strategic settlements based on NPA provisioning.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Tech &amp; Corporate Layoffs</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Salaried professionals facing sudden job loss cannot sustain 42% APR dues. We submit severance documentation to substantiate hardship, securing fast-track 50%+ principal waivers.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Proprietorship Business Swipes</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Business owners using personal cards for operational cash flow face personal liability. We decouple business revenues from personal debt, negotiating terms aligned with net cash flow.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">ARC Portfolio Debt Assignments</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When banks assign written-off card portfolios to ARCs, collection pressure spikes. We verify assignment legality under SARFAESI Section 5, capping settlements at acquisition value.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5 pt-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Frequently Asked Questions on Credit Card Debt &amp; Minimum Dues
              </h2>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-xs transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-bold text-slate-900 hover:text-[#1886ff] transition-colors gap-3"
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
                Official Regulatory Citations &amp; Statutory Frameworks
              </h2>

              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Reserve Bank of India:</strong> Master Direction - Credit Card and Debit Card Issuance Directions, 2022.
                </li>
                <li>
                  <strong>Payment and Settlement Systems Act, 2007:</strong> Section 25 (Electronic Mandate Defenses).
                </li>
                <li>
                  <strong>Negotiable Instruments Act, 1881:</strong> Section 138 (Cheque Dishonour for Enforceable Debt).
                </li>
                <li>
                  <strong>Arbitration Act, 1996:</strong> Sections 12(5) &amp; 21, read with Perkins Eastman precedent.
                </li>
                <li>
                  <strong>Credit Information Companies Act, 2005 (CICRA):</strong> Section 21 Dispute Rectification.
                </li>
                <li>
                  <strong>RBI Integrated Ombudsman Scheme, 2021:</strong> Statutory Grievance Redressal for Unfair Lending Practices.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3">
                <span className="text-xs font-bold text-slate-700 block mb-2">Official Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1">
                    <span>rbi.org.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1">
                    <span>cms.rbi.org.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1">
                    <span>cibil.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1">
                    <span>indiacode.nic.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1">
                    <span>nalsa.gov.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1">
                    <span>cybercrime.gov.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/credit-card-settlement-kaise-hota-hai" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Process
                  </Link>
                  <Link href="/can-i-go-to-jail-for-credit-card-debt" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can You Go to Jail for Credit Card Debt
                  </Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 25 NACH Bounce Defense
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice Guide
                  </Link>
                  <Link href="/mental-harassment-by-recovery-agents-legal-action" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Agent Harassment
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL After Settlement
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed Status
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get No Dues Certificate
                  </Link>
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Settlement Sanction Letter
                  </Link>
                  <Link href="/nri-credit-card-debt-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    NRI Credit Card Settlement
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
                Specialized in banking compliance, credit card dispute defense, Section 25 PSSA, and OTS negotiations across major Indian banks.
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

            {/* Card 2: Emergency CTA Card (#2452ae) */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL DEBT RELIEF
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Trapped in Credit Card Dues?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Settle your credit card debt at a 45% to 65% principal discount with zero harassment.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Break the Minimum Due Trap - Settle Debt
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
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Assurance</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Advance Fee Risk:</strong> Success-linked terms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Payment:</strong> Funds paid directly to bank.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Compliance:</strong> Fair Practices Code.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official NDC:</strong> Complete discharge.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/credit-card-settlement-kaise-hota-hai"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Settlement Kaise Hota Hai
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Step-by-step Hindi guide &rarr;</span>
                </Link>

                <Link
                  href="/can-i-go-to-jail-for-credit-card-debt"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can You Go to Jail for Credit Card Debt?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Civil vs criminal law analysis &rarr;</span>
                </Link>

                <Link
                  href="/ecs-nach-bounce-legal-notice-section-25"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 25 PSSA NACH Bounce Notice
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal defense &amp; reply strategy &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
