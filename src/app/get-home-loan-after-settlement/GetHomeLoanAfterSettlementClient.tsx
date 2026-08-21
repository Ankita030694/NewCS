'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  Calendar,
  AlertCircle,
  CreditCard,
  Briefcase,
  Bookmark,
  ArrowRight,
  Percent,
  Home,
  Users,
  Landmark,
  Calculator,
  BadgeCheck
} from 'lucide-react';

export default function GetHomeLoanAfterSettlementClient() {
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
    { id: 'quick-crux', label: 'Executive Brief: Key Takeaways' },
    { id: 'core-mortgage-reality', label: '1. Can You Get a Home Loan?' },
    { id: 'underwriting-matrix', label: '2. Bank vs. HFC Underwriting' },
    { id: 'scoring-breakdown', label: '3. Mortgage Math: FOIR & LTV' },
    { id: 'lender-landscape', label: '4. 4 Mortgage Lender Categories' },
    { id: 'infographic-overview', label: 'Visual Mortgage Blueprint' },
    { id: 'step-by-step-roadmap', label: '5. 7-Stage Qualification SOP' },
    { id: 'legal-template', label: '6. Mitigating Representation Draft' },
    { id: 'escalation-matrix', label: '7. 3-Tier Escalation Matrix' },
    { id: 'recovery-timeline', label: '8. 18-Month Chronological Roadmap' },
    { id: 'complex-scenarios', label: '9. Cards, ARCs & Joint Mortgages' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'official-sources', label: 'Statutory Citations & Authority' }
  ];

  const faqs = [
    {
      q: 'Can I get a home loan after settling a personal loan or credit card in India?',
      a: 'Yes, you can secure a home loan after debt settlement. Because home loans are fully secured against immovable property collateral (under SARFAESI Act 2002 mortgage architecture), lending risk is fundamentally lower than unsecured loans. While automated underwriting at prime commercial banks may initially reject automated applications, Housing Finance Companies (HFCs) and specialized NBFCs conduct manual credit underwriting, evaluating current debt-servicing capability, property valuation, equity down payment, and co-applicant financials.'
    },
    {
      q: 'Does a "Settled" status on CIBIL permanently block SBI or public sector home loans?',
      a: 'A "Settled" tag does not permanently blacklist you from State Bank of India (SBI) or public sector banks, provided the settlement was not with SBI itself. SBI requires a minimum CIBIL score of 700 to 750 for automated retail home loan approval. If 24 months have elapsed since your settlement, your score is rebuilt via secured trade-lines, and you maintain a clean banking track record with FOIR under 40%, public sector banks can sanction your mortgage through manual deviation approvals.'
    },
    {
      q: 'How do Housing Finance Companies (HFCs) evaluate post-settlement mortgage applications?',
      a: 'HFCs (such as LIC Housing Finance, PNB Housing, Tata Capital, Can Fin Homes, and Piramal) utilize manual credit appraisal rather than rigid binary algorithmic filters. HFC underwriters inspect the root cause of historical default (e.g., job loss, medical emergency), verify that the No Dues Certificate (NDC) is genuine, analyze 12 months of clean bank statements, and evaluate the marketability and legal title of the collateral property.'
    },
    {
      q: 'What is the impact of adding a creditworthy co-applicant on home loan approval?',
      a: 'Adding a creditworthy co-applicant (such as an earning spouse, parent, or sibling with a CIBIL score of 750+ and stable income) dramatically increases home loan approval odds. Under RBI and NHB guidelines, lenders pool joint household incomes, reducing the overall portfolio risk and allowing the primary borrower to bypass individual algorithmic credit scoring hurdles.'
    },
    {
      q: 'How does Loan-to-Value (LTV) and higher down payment influence post-settlement mortgage sanctions?',
      a: 'Offering a higher down payment (30% to 40% equity contribution) lowers the lender\'s Loan-to-Value (LTV) ratio to 60%–70%, well below the regulatory ceiling of 75%–80%. A lower LTV provides the mortgage lender with substantial safety margin and foreclosure cushion, motivating risk committees to approve home loans even with historical settlement flags.'
    },
    {
      q: 'How does Fixed Obligation to Income Ratio (FOIR) affect home loan eligibility after debt settlement?',
      a: 'FOIR measures the proportion of your net monthly income committed to servicing existing debt obligations. Post-settlement mortgage underwriters mandate a conservative FOIR between 35% and 45% (including the prospective home loan EMI). Borrowers must eliminate all active short-term micro-loans and credit card balances before applying to present maximum unencumbered cash flow.'
    },
    {
      q: 'Should I convert my "Settled" status to "Closed" before applying for a housing loan?',
      a: 'Converting a "Settled" tag to "Closed" by paying the historical waived principal differential to the original lender is the most decisive strategy for prime home loan eligibility. Once the lender issues an unconditional NDC and updates CIBIL to "Closed", automated loan origination systems (LOS) treat the account as fully satisfied, unlocking lower interest rates (saving lakhs over a 20-year loan tenure).'
    },
    {
      q: 'What is the mandatory cooling-off period required after settlement before seeking a mortgage?',
      a: 'A minimum cooling-off period of 6 to 12 months post-NDC is recommended before applying for a home loan. This timeframe allows the ₹0 balance to stabilize across all four credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) and provides sufficient runway to establish 6–12 months of spotless repayment on new secured credit products.'
    },
    {
      q: 'Which specific documents must be submitted to prove post-settlement creditworthiness to mortgage underwriters?',
      a: 'Borrowers must compile a comprehensive credit file containing: (1) Original No Dues Certificate (NDC) and OTS sanction letter, (2) 12 to 24 months of continuous bank statements showing zero EMI bounces or inward cheque returns, (3) 3 years of audited ITRs/Form 16 with computation of income, (4) Title deeds and approved municipal sanctions of the collateral property, and (5) A formal mitigating representation letter explaining the circumstances of the past settlement.'
    },
    {
      q: 'What legal recourse exists if an HFC or bank rejects an application without examining current financial viability?',
      a: 'Under the RBI Fair Practices Code and National Housing Bank (NHB) Directions, lenders must provide written, cogent reasons for mortgage rejection upon request. If a lender improperly rejects an application based on inaccurate or outdated bureau records despite valid NDC submission, borrowers can lodge a formal grievance with the Bank Principal Nodal Officer (PNO) and escalate to the RBI Integrated Ombudsman portal (cms.rbi.org.in) or NHB GRIDS.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452AE Swatch Color) */}
      <section
        className="relative text-white pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          {/* Title / H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-sm">
            Can You Get a Home Loan <br />
            <span className="text-blue-100">with a &quot;Settled&quot; Status?</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-2xl mb-8 max-w-3xl mx-auto font-normal md:font-medium text-white/95 leading-relaxed">
            A settled personal loan can make getting a mortgage difficult, but not impossible. Discover how to secure a home loan despite a past debt settlement.
          </p>

          {/* Single Pill-Shaped White CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:text-[#1886ff] px-8 py-4 rounded-full font-extrabold text-base md:text-lg hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Evaluate Your Home Loan Eligibility</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. COUNTER STRIP COMPONENT */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-6 xl:gap-8 items-start">
          
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
                  <span>Mortgage Underwriting Blueprint</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Compliant with RBI Master Directions on Housing Finance &amp; National Housing Bank (NHB) Guidelines 2026.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE BRIEF CALLOUT (#F4F8FE bg + #1886ff Left Border + Bookmark Icon) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: SECURING A MORTGAGE WITH A PAST SETTLEMENT FLAG</span>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  Executing a One-Time Settlement (OTS) on an unsecured personal loan or credit card provides essential debt relief, halting collection litigation and freezing compounding penal interest. However, when the lending institution reports the compromise as &quot;Settled&quot; or &quot;Post-Write-off Settled&quot; across TransUnion CIBIL, Equifax, Experian, and CRIF High Mark, automated Loan Origination Systems (LOS) at prime commercial banks automatically red-flag the borrower.
                </p>
                <p>
                  Securing a home loan post-settlement is entirely achievable because housing finance is fundamentally governed by <strong>secured collateral underwriting</strong> under the SARFAESI Act, 2002. By transitioning away from rigid algorithmic bank filters toward manual appraisal Housing Finance Companies (HFCs), compressing your Fixed Obligation to Income Ratio (FOIR), providing a 30%–40% equity down payment, or executing a differential payoff to upgrade your credit tag to &quot;Closed&quot;, you can successfully secure long-term mortgage sanctions at competitive interest rates.
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-blue-100">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Secured Collateral vs. Unsecured Risk:</strong> Unlike unsecured personal loans, home loans are backed by registered mortgage on prime real estate, allowing risk committees to approve files through manual deviation mandates.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">HFC Manual Credit Appraisal:</strong> Specialized Housing Finance Companies (LIC HFL, PNB Housing, Tata Capital) evaluate debt-servicing capacity and cash flows rather than rejecting applicants solely based on legacy bureau tags.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">The Differential Payoff Multiplier:</strong> Settling the historical waived principal balance converts your CIBIL record to &quot;Closed&quot;, immediately unlocking tier-1 public sector bank home loans (such as SBI, Bank of Baroda, and PNB).
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: CAN YOU GET A HOME LOAN AFTER SETTLEMENT? */}
            <section id="core-mortgage-reality" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Home className="w-4 h-4" />
                <span>Mortgage Underwriting Principles</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                1. Can You Get a Home Loan After Settlement? The Legal &amp; Banking Reality
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The unequivocal answer is <strong>yes</strong>. While a historical debt settlement complicates retail mortgage applications, it does not permanently extinguish your legal right or financial ability to buy a home. In Indian banking jurisprudence, a One-Time Settlement (OTS) executed with a bank or NBFC is a legally binding compromise agreement that fully discharges your civil debt obligation upon payment of the agreed settlement consideration.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The primary obstacle arises from credit bureau mechanics. Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), the original lender is required to report the loan account status as <em>&quot;Settled&quot;</em> because a portion of the contractual principal and interest was waived as an operational write-off. When prospective borrowers apply for home loans online, prime commercial banks utilize algorithmic Loan Origination Systems (LOS) that automatically filter out any credit profile exhibiting derogatory remarks within the trailing 24 to 36 months.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, mortgage financing is fundamentally distinct from unsecured credit cards or personal loans. A home loan is a collateralized facility governed by the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002. Because the lending institution obtains an equitable mortgage over prime immovable property, the lender&apos;s recovery risk is protected by tangible real estate. Consequently, Housing Finance Companies (HFCs) and manual credit appraisal desks at commercial banks regularly sanction home loans to post-settlement borrowers who satisfy specific risk-mitigating benchmarks.
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-xs my-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Lender Category</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Approval Probability</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Minimum CIBIL Needed</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Max LTV Ratio</th>
                        <th className="p-3.5 md:p-4 font-bold">Post-Settlement Seasoning</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-slate-900 bg-slate-50/50">
                          Public Sector Banks (SBI, PNB, BoB)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-amber-600">
                          Moderate (45% – 60%)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-mono">
                          725+ (Manual Deviation)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          70% – 75% of Property Value
                        </td>
                        <td className="p-3.5 md:p-4 text-slate-700 font-medium">
                          18 – 24 Months post-NDC
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-slate-900 bg-slate-50/50">
                          Top Private Banks (HDFC, ICICI, Axis)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-rose-600">
                          Low (30% – 45% Algorithmic)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-mono">
                          750+ (Clean Bureau)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          75% – 80% of Property Value
                        </td>
                        <td className="p-3.5 md:p-4 text-rose-700 font-medium">
                          24+ Months (or Differential Payoff)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-emerald-900 bg-emerald-50/30">
                          Housing Finance Companies (HFCs)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-emerald-600">
                          High (80% – 90%)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-mono">
                          650 – 700+
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          65% – 75% of Property Value
                        </td>
                        <td className="p-3.5 md:p-4 text-emerald-700 font-medium">
                          6 – 12 Months post-NDC
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-blue-900 bg-blue-50/30">
                          Non-Banking Financial Companies (NBFCs)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-blue-600">
                          Very High (85% – 95%)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-mono">
                          620 – 680+
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          60% – 70% of Property Value
                        </td>
                        <td className="p-3.5 md:p-4 text-blue-700 font-medium">
                          3 – 6 Months post-NDC
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-indigo-900 bg-indigo-50/30">
                          Co-Applicant Joint Mortgage Structure
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-indigo-600">
                          Exceptional (90%+)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-mono">
                          Co-Applicant 750+
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          75% – 80% (Pooled Income)
                        </td>
                        <td className="p-3.5 md:p-4 text-indigo-700 font-medium">
                          Immediate (Post-NDC Validation)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs md:text-sm text-slate-600 italic">
                <strong>Strategic Takeaway:</strong> Do not blind-apply for mortgages on bank aggregators or web portals. Every algorithmic hard rejection gets permanently recorded in your credit enquiry history, damaging your score. Instead, target specialized HFCs through manual credit appraisal channels.
              </p>
            </section>

            {/* SECTION 2: BANK VS. HFC UNDERWRITING ARCHITECTURE */}
            <section id="underwriting-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4" />
                <span>Underwriting System Architecture</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                2. Bank vs. HFC Underwriting: Why Algorithms Auto-Reject &amp; How Manual Underwriters Decide
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To successfully navigate a mortgage application following a debt settlement, borrowers must understand the technical divide between algorithmic retail bank screening and manual housing finance underwriting. When an individual submits a digital loan application to a scheduled commercial bank (such as SBI, HDFC, or ICICI), the application is processed by an automated Loan Origination System (LOS).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The automated LOS executes pre-programmed binary business rules: if the credit information report (CIR) contains a Days Past Due (DPD) count greater than 90, or contains status tags such as <em>&quot;Settled&quot;</em>, <em>&quot;Written-Off&quot;</em>, or <em>&quot;Post-Write-off Settled&quot;</em> within the past 36 months, the software instantly terminates the application without forwarding the file to a human credit manager. Furthermore, if the settlement occurred with that specific bank, the applicant&apos;s Permanent Account Number (PAN) is permanently lodged in an internal &quot;Loss / Sacrifice Ledger&quot;, preventing future unsecured lending from that institution.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Tier-1 Bank Binary Algorithmic Underwriting</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Operates on strict score cut-offs (typically 750+). Derogatory settlement flags trigger instant algorithmic auto-rejection. Underwriters possess limited deviation powers and cannot override policy rules for standalone retail borrowers.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Housing Finance Company (HFC) Manual Appraisal</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Underwriters evaluate the total financial dossier: current banking cash flows, debt-servicing ratios (FOIR), collateral liquidity, employment stability, and the genuine narrative behind the historical default.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs md:text-sm text-blue-950 leading-relaxed">
                <strong>Regulatory Grounding:</strong> Under the RBI Master Directions on Housing Finance and National Housing Bank (NHB) guidelines, housing finance institutions are permitted to establish internal credit risk appraisal frameworks that assess borrower creditworthiness using holistic cash-flow proxies, collateral valuation cushions, and co-borrower guarantees.
              </div>
            </section>

            {/* SECTION 3: MORTGAGE MATH: FOIR, LTV & RISK RATIOS */}
            <section id="scoring-breakdown" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calculator className="w-4 h-4" />
                <span>Mortgage Mathematics &amp; Risk Metrics</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                3. Mortgage Scoring Breakdown &amp; Financial Math Calculations (FOIR &amp; LTV)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower with a past settlement applies for a mortgage, underwriters rely on mathematical risk formulas to determine whether the credit risk is acceptable. Mastering two fundamental formulas—<strong>FOIR (Fixed Obligation to Income Ratio)</strong> and <strong>LTV (Loan to Value Ratio)</strong>—enables you to structure an unassailable loan proposal:
              </p>

              {/* Technical Scoring / Math Card */}
              <div className="rounded-3xl border-2 border-blue-200 bg-white p-6 md:p-7 shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#1886ff] flex items-center justify-center font-black text-sm">
                      <Percent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-bold text-slate-900">
                        Mortgage Underwriting Formulas &amp; Credit Weight Distribution
                      </h3>
                      <p className="text-xs text-slate-500">
                        NHB Housing Risk Appraisal &amp; TransUnion Scoring Weight Architecture
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                    Mathematical Blueprint
                  </span>
                </div>

                {/* Math Formulas Breakdown Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900 text-sm">1. FOIR (Debt-to-Income)</span>
                      <span className="font-mono font-black text-blue-600 text-xs">Threshold: 35% – 45%</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 font-mono text-[11px] text-blue-900">
                      FOIR = (Total Existing Monthly EMIs + Proposed Home Loan EMI) / Net Monthly Take-Home Income × 100
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[11px]">
                      For post-settlement profiles, keeping FOIR under 40% proves that existing debt service will not compromise mortgage repayment even during income fluctuations.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900 text-sm">2. LTV (Loan to Value Ratio)</span>
                      <span className="font-mono font-black text-blue-600 text-xs">Target: 60% – 70%</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 font-mono text-[11px] text-blue-900">
                      LTV = (Sanctioned Home Loan Amount / Appraised Market Value of Property) × 100
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[11px]">
                      While RBI permits up to 75%–80% LTV for retail buyers, post-settlement applicants who provide 30%–40% down payment (lowering LTV to 60%–70%) drastically reduce lender foreclosure exposure.
                    </p>
                  </div>
                </div>

                {/* Weights Grid */}
                <div className="border-t border-slate-100 pt-4">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                    TransUnion CIBIL Scoring Engine V3.0 Weight Architecture:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-slate-900">Payment History</span>
                        <span className="font-mono font-black text-blue-600">35% Weight</span>
                      </div>
                      <p className="text-slate-600 text-[11px] leading-snug">
                        Most vital metric. 12+ months of on-time payments on fresh secured lines systematically dilute past default impact.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-slate-900">Credit Utilization (CUR)</span>
                        <span className="font-mono font-black text-blue-600">30% Weight</span>
                      </div>
                      <p className="text-slate-600 text-[11px] leading-snug">
                        Total balance divided by limit. Maintaining CUR strictly below 20%–30% delivers rapid credit score elevation.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-slate-900">Credit Vintage &amp; Age</span>
                        <span className="font-mono font-black text-blue-600">15% Weight</span>
                      </div>
                      <p className="text-slate-600 text-[11px] leading-snug">
                        Average duration of active trade-lines. Preserving aged accounts establishes historical financial stability.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-slate-900">Credit Mix</span>
                        <span className="font-mono font-black text-blue-600">10% Weight</span>
                      </div>
                      <p className="text-slate-600 text-[11px] leading-snug">
                        Balance between secured assets (FD card, gold loan) and unsecured lines proves disciplined multi-facility management.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-slate-900">Hard Inquiries</span>
                        <span className="font-mono font-black text-blue-600">10% Weight</span>
                      </div>
                      <p className="text-slate-600 text-[11px] leading-snug">
                        Zero hard loan applications in the trailing 6 months prevents the borrower from appearing credit-hungry.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-blue-950">Differential Payoff</span>
                        <span className="font-mono font-black text-blue-700">100% Reset</span>
                      </div>
                      <p className="text-blue-900 text-[11px] leading-snug">
                        Paying the historical waived differential balance permanently converts &quot;Settled&quot; to &quot;Closed&quot; status.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 4: 4 CATEGORIES OF MORTGAGE LENDERS */}
            <section id="lender-landscape" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4" />
                <span>Institutional Landscape</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                4. The 4 Categories of Mortgage Lenders in India &amp; Their Post-Settlement Policies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian housing finance is segmented into four distinct institutional categories, each operating under specific regulatory frameworks and risk tolerances:
              </p>

              <div className="space-y-4">
                {/* Category 1: Public Sector Banks (SBI Home Loans) */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <Landmark className="w-4 h-4 text-[#1886ff]" />
                      Category 1: Public Sector Banks (State Bank of India, Bank of Baroda, PNB)
                    </h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      Prime Lowest Rates
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    State Bank of India (SBI) is India&apos;s largest mortgage lender. While SBI home loan automated systems mandate a CIBIL score of 700 to 750, SBI policy circulars allow <strong>Deviation Sanctions</strong> approved by the Assistant General Manager (AGM) or Deputy General Manager (DGM) of the Real Estate &amp; Housing Business Unit (REHBU). If the settlement occurred with a third-party bank 24+ months ago, the applicant has a spotless 24-month banking record, and the loan is co-signed by an earning co-borrower, SBI can sanction the loan under standard prime interest brackets.
                  </p>
                </div>

                {/* Category 2: Large Private Sector Banks */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#1886ff]" />
                      Category 2: Scheduled Private Banks (HDFC Bank, ICICI Bank, Axis Bank, Kotak)
                    </h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      Algorithmic Strictness
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Private banks utilize aggressive automated risk models that reject files with historical settlement tags within 36 months. However, if the borrower executes a <strong>Differential Payoff</strong> to convert the old account to &quot;Closed&quot;, private banks will readily approve the mortgage within 30 days of credit bureau tape updates.
                  </p>
                </div>

                {/* Category 3: Housing Finance Companies (HFCs) */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <Home className="w-4 h-4 text-emerald-600" />
                      Category 3: Specialized Housing Finance Companies (LIC HFL, PNB Housing, Tata Capital, Can Fin)
                    </h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Best Post-Settlement Pathway
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    HFCs are the prime avenue for borrowers with past settlements. Operating under specialized housing appraisal mandates, HFC credit officers meet applicants in person, evaluate business books or salary accounts, inspect the physical collateral, and sanction loans with competitive margins (typically charging 0.5% to 1.25% premium above bank benchmark rates).
                  </p>
                </div>

                {/* Category 4: Specialized Retail NBFCs */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-indigo-600" />
                      Category 4: Retail Asset NBFCs (Shriram Housing, Piramal Capital, Aditya Birla Capital)
                    </h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                      Flexible Risk-Pricing
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Asset-backed NBFCs cater specifically to borrowers with unconventional credit records, self-employed individuals with informal cash receipts, or applicants with recent settlements. They accept lower CIBIL scores (620–680) in exchange for a slightly higher interest rate and a conservative LTV of 60%–65%.
                  </p>
                </div>
              </div>
            </section>

            {/* HIGH-IMPACT INFOGRAPHIC BANNER EMBEDDED (Between Sections 4 and 5) */}
            <div id="infographic-overview" className="scroll-target bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-10 text-slate-800">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-blue-500">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-white text-xs shadow-sm">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-200 block">
                      Mortgage Strategy &amp; Underwriting Blueprint
                    </span>
                    <h3 className="text-sm md:text-base font-black text-white leading-tight">
                      Get a Home Loan After Settlement: Complete Banking Roadmap
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/get-home-loan-after-settlement.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-200 hover:text-white font-bold flex items-center gap-1 transition-colors"
                >
                  <span className="hidden sm:inline">Open Full Size</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Compact Landscape Infographic Image */}
              <div className="p-3 md:p-4 bg-slate-50">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/infographics/get-home-loan-after-settlement.jpg"
                    alt="Get a Home Loan After Loan Settlement Banking Blueprint and Eligibility Roadmap"
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Core Rule:</strong> Combine 6–12 months of secured credit seasoning, 35% FOIR, and HFC manual underwriting to secure prime home loan approvals.</span>
                </div>
                <Link href="/contact" className="text-[#1886ff] font-bold hover:underline">
                  Evaluate Your Home Loan Eligibility &rarr;
                </Link>
              </div>
            </div>

            {/* SECTION 5: STEP-BY-STEP QUALIFICATION SOP */}
            <section id="step-by-step-roadmap" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                5. The 7-Stage Qualification SOP for Home Loan Approval After Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Securing a mortgage sanction after a settlement requires methodical execution of this 7-stage standard operating procedure recognized by banking risk committees and housing finance underwriters:
              </p>

              <div className="space-y-4">
                {/* Stage 1 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 1: Verify No Dues Certificate (NDC) &amp; Rectify Credit Bureau Tape
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Ensure your original lending institution has issued an unconditional physical/digital No Dues Certificate (NDC / NOC). Verify across TransUnion CIBIL, Experian, Equifax, and CRIF High Mark that the outstanding balance and amount overdue are strictly reported as ₹0. If errors exist, raise a dispute under Section 21 of CICRA 2005.
                    </p>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 2: Establish 6 to 12 Months of Secured Credit Seasoning
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Immediately open a Fixed Deposit-backed secured credit card (such as IDFC FIRST WOW or Kotak 811 DreamDifferent). Use 15% to 20% of the limit monthly and repay in full 3 days before the due date. This builds a pristine 100% on-time payment track record across 35% of your CIBIL weight.
                    </p>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 3: Compress FOIR by Prepaying Active Small Loans &amp; Consumer EMIs
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Foreclose all active Buy-Now-Pay-Later (BNPL) accounts, consumer durable EMIs, and micro-loans. Underwriters require your total monthly fixed debt obligations (including the new home loan EMI) to remain below 35%–40% of net disposable salary.
                    </p>
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 4: Ingest a Creditworthy Co-Borrower with 750+ CIBIL Score
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Add an earning spouse, parent, or working child as a joint co-applicant. Joint borrower structuring allows lenders to pool household incomes, dramatically reducing the lender&apos;s perceived default probability.
                    </p>
                  </div>
                </div>

                {/* Stage 5 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 5: Structure a 30% to 40% Equity Down Payment (Lowering LTV to 60%–70%)
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Rather than seeking the regulatory maximum of 80% LTV, offer a 30%–40% down payment from legitimate savings. A 60%–70% LTV provides the mortgage lender with a large equity safety buffer, making deviation approval straightforward for credit managers.
                    </p>
                  </div>
                </div>

                {/* Stage 6 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 6: Submit a Formal Mitigating Representation to HFC Credit Underwriters
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Attach a formal written representation drafted by a debt resolution specialist explaining the bona fide circumstances behind the past settlement (medical event, business setback, COVID disruption), supported by 12 months of flawless bank statements with zero cheque bounces.
                    </p>
                  </div>
                </div>

                {/* Stage 7 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    7
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 7: Execute Differential Payoff to Convert Status to &quot;Closed&quot; (Optional Power Move)
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      If you require a massive mortgage from a prime public sector bank (SBI / BoB) at the absolute lowest repo-linked lending rate (RLLR), negotiate with the original lender to pay the historical waived principal differential and upgrade your CIBIL record from &quot;Settled&quot; to &quot;Closed&quot;.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6: FORMAL MITIGATING REPRESENTATION NOTICE DRAFT */}
            <section id="legal-template" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4" />
                <span>Ready-to-Use Underwriting Template</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                6. Formal Legal Representation Draft: Mitigating Circumstances &amp; Mortgage Appraisal Letter
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Submit this formal legal representation letter to the Credit Appraisal Committee, Head of Retail Mortgages, and Branch Credit Manager when submitting your housing loan file:
              </p>

              {/* Code / Letter Draft Container with Modern Slate Styling */}
              <div className="rounded-2xl border border-slate-700 bg-slate-900 text-slate-100 p-5 md:p-6 shadow-sm overflow-x-auto text-xs font-mono leading-relaxed">
                <div className="text-blue-400 font-bold mb-3 pb-2 border-b border-slate-800 flex items-center justify-between">
                  <span>FORMAL REPRESENTATION: MORTGAGE APPRAISAL &amp; SETTLEMENT EXPLANATION</span>
                  <span className="text-[10px] text-slate-400 uppercase">HFC / Credit Risk Committee Format</span>
                </div>
                <pre className="whitespace-pre-wrap text-slate-200">
{`To,
The Credit Appraisal Committee / Chief Risk Officer,
Retail Mortgage & Housing Finance Division,
[Name of Bank / Housing Finance Company],
[Branch / Regional Zonal Office Address],
Email: [credit.approval@bankhfc.com]

Subject: Comprehensive Representation & Mitigating Submission for Sanction of Housing Loan Facility [Application Reference No: XXXXXXXX] for Immovable Property at [Property Address]

Respected Members of the Credit Committee,

I/We, [Primary Applicant Name], residing at [Address], PAN: [Insert PAN], along with Co-Applicant [Co-Applicant Full Name], PAN: [Co-Applicant PAN], have submitted our formal application for a Home Loan facility of ₹[Requested Loan Amount] against the purchase of immovable residential property valued at ₹[Total Property Cost].

In support of our credit appraisal and in compliance with the RBI Master Directions on Housing Finance and NHB Credit Underwriting Framework, we submit the following facts for your consideration:

1. HISTORICAL CONTEXT OF PAST SETTLEMENT:
   That during the financial year [Year], the Primary Applicant encountered severe, unforeseen bona fide financial hardship [Specify: e.g., documented medical emergency / COVID-19 business disruption / involuntary job dislocation], leading to a One-Time Settlement (OTS) with [Name of Settled Bank] for Loan Account No: [Insert Account No.]. The agreed settlement sum was remitted in full on [Date], and an unconditional No Dues Certificate (NDC Ref: [Insert NDC No.]) was duly issued with ₹0 remaining balance.

2. SUBSEQUENT FINANCIAL RECOVERY & PRISTINE BANKING CONDUCT:
   a) That for the past [12 / 24] months, the Applicants have maintained an unblemished banking record with ZERO inward cheque returns, ZERO ECS/NACH bounces, and continuous healthy average quarterly balances.
   b) That all subsequent credit facilities, including secured credit lines, have been serviced with 100% on-time repayment history (0 DPD).

3. ROBUST DEBT-SERVICING RATIOS (FOIR & LTV COMPLIANCE):
   a) Net Combined Monthly Household In-Hand Income: ₹[Net Monthly In-Hand Amount].
   b) Total Proposed Monthly Home Loan EMI: ₹[Estimated Monthly EMI].
   c) Calculated Fixed Obligation to Income Ratio (FOIR): [Insert % - e.g., 34.5%], well within the conservative 40% benchmark.
   d) Loan-to-Value (LTV) Ratio: [Insert % - e.g., 65%], with Applicants providing an upfront equity down payment of ₹[Down Payment Amount] (representing [35%] of property value).

4. COLLATERAL SECURITY UNDER SARFAESI ACT, 2002:
   That the subject residential property offers marketable, unencumbered, and legally verified title, providing your esteemed institution with complete security cover and substantial foreclosure margin.

In light of our verified debt-servicing capability, healthy FOIR, low LTV, clean banking history, and strong co-applicant profile, we respectfully request the Credit Committee to exercise its manual deviation authority to sanction our housing loan application.

Enclosures:
1. Copy of Unconditional No Dues Certificate (NDC) & OTS Closure Letter.
2. 12 Months Audited / Verified Bank Account Statements.
3. Last 3 Years ITRs, Form 16, and Salary Slips.
4. Property Legal Search Report & Approved Sanction Plan.

Yours sincerely,

___________________________          ___________________________
[Primary Applicant Signature]        [Co-Applicant Signature]
Name: [Primary Applicant Name]       Name: [Co-Applicant Name]
Mobile: [Mobile Number]              Mobile: [Mobile Number]
Email: [Email Address]               Email: [Email Address]
Date: [DD/MM/YYYY]                   Place: [City, State]`}
                </pre>
              </div>
            </section>

            {/* SECTION 7: 3-TIER ESCALATION MATRIX */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4" />
                <span>Grievance Redressal Architecture</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                7. 3-Tier Escalation Matrix When Lenders Improperly Reject Applications
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI Charter of Customer Rights and National Housing Bank (NHB) Fair Lending Guidelines, every mortgage applicant has the statutory right to fair appraisal and transparent communication. If your home loan is improperly rejected due to outdated bureau data despite valid NDC submission, follow this 3-tier escalation framework:
              </p>

              {/* Escalation Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs font-black text-[#1886ff] uppercase tracking-wider mb-1">
                    Level 1 (Days 1–10)
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    Branch Credit Desk &amp; CRM Ticket
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit written representation to the Branch Credit Manager along with your NDC and 12-month bank statements. Log a formal tracking ticket on the bank or HFC&apos;s customer service CRM.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs font-black text-blue-600 uppercase tracking-wider mb-1">
                    Level 2 (Days 11–30)
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    Principal Nodal Officer (PNO)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalate to the apex grievance authority (PNO / Head of Customer Care). Under RBI rules, the PNO must review credit deviation appeals and issue a written reasoned resolution within 30 days.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border-2 border-emerald-300 bg-emerald-50/20 shadow-2xs">
                  <div className="text-xs font-black text-emerald-700 uppercase tracking-wider mb-1">
                    Level 3 (Day 31+)
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    RBI Integrated Ombudsman / NHB GRIDS
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lodge a statutory complaint on <strong>cms.rbi.org.in</strong> (for banks/NBFCs) or <strong>grids.nhbonline.org.in</strong> (for HFCs). Regulators order immediate file re-evaluation for arbitrary rejections.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 18-MONTH CHRONOLOGICAL ROADMAP */}
            <section id="recovery-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4" />
                <span>Credit Rebuilding &amp; Mortgage Roadmap</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                8. 18-Month Chronological Milestone Roadmap to Prime Mortgage Sanctions
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Securing a home loan at prime interest rates following a debt settlement is a structured chronological progression across three distinct financial milestones:
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Phase / Timeline</th>
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Credit Report Event</th>
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Expected Score Range</th>
                        <th className="p-3.5 font-bold">Actionable Rebuilding Steps</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Phase 1: Months 1 – 3 (Post-NDC Audit)
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Settlement reported across 4 bureaus; Balance updated to ₹0; DPD historical delinquency freezes.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">
                          600 – 650
                        </td>
                        <td className="p-3.5">
                          Download official CIR reports from CIBIL, Experian, Equifax, CRIF. Audit ₹0 balance updates; dispute any residual erroneous dues.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Phase 2: Months 3 – 9 (Trade-Line Seasoning)
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          New positive trade-line reporting begins; credit utilization stabilized below 20%.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-blue-700">
                          680 – 730
                        </td>
                        <td className="p-3.5">
                          Service an FD-backed secured credit card with 100% on-time autopay. Foreclose all active micro-loans; compress FOIR to under 38%.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Phase 3: Months 9 – 18 (Mortgage Sanction)
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Consistent repayment history established; legacy settlement impact diluted; high score stability.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-emerald-700">
                          740 – 780+ (Prime)
                        </td>
                        <td className="p-3.5">
                          Apply for home loan with specialized HFCs or public sector banks (SBI/BoB) with co-applicant and 30%+ down payment equity.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 9: COMPLEX SCENARIOS */}
            <section id="complex-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4" />
                <span>Complex Scenarios &amp; Case Studies</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                9. Complex Scenarios: Credit Cards, ARCs under SARFAESI §5, &amp; Joint Mortgages
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Credit Card Settlements
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Credit cards carry compounding 42%+ APR. When mortgage underwriters see a credit card settlement, explain that high finance charges inflated the balance during hardship. Submitting proof of the principal paid during settlement clears underwriter doubts.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Debt Sold to ARCs (SARFAESI §5)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your past loan was assigned to an Asset Reconstruction Company (e.g. ARCIL, Phoenix, Edelweiss ARC), obtain the NDC directly from the ARC. Ensure the ARC updates the bureau ledger to reflect zero remaining liability before applying for housing finance.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#1886ff]" />
                    Joint Co-Applicant Mortgages
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your spouse or parent has a clean 750+ CIBIL score and stable salary, structure the application with them as the <strong>Primary Applicant</strong> and yourself as the Co-Applicant. Banks sanction the mortgage based on the primary borrower&apos;s clean bureau rating.
                  </p>
                </div>
              </div>
            </section>

            {/* COMPANY SECTION (Placed directly above FAQs) */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* INTERACTIVE COLLAPSIBLE FAQ ACCORDION */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4 pt-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4" />
                <span>Clarifications &amp; Expert Answers</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                Frequently Asked Questions: Getting a Home Loan After Settlement
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to view detailed legal and banking answers verified by our debt resolution and mortgage experts:
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:bg-slate-50 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-blue-50 text-[#1886ff] flex items-center justify-center text-xs font-extrabold flex-shrink-0">
                            Q
                          </span>
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* REGULATORY SOURCES & OFFICIAL LINKS STRIP */}
            <section id="official-sources" className="scroll-target space-y-3 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-600">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Authority &amp; Regulatory Citations</span>
              </div>
              <p className="text-xs text-slate-600">
                All mortgage underwriting procedures, FOIR rules, and legal consumer rights described on this page are grounded in official Indian statutory frameworks:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">1. RBI Housing Finance Master Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">2. SARFAESI Act 2002 (India Code)</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
                <a
                  href="https://www.cibil.com/dispute-resolution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">3. CIBIL Dispute Resolution Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">4. RBI Integrated Ombudsman (CMS)</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
                <a
                  href="https://nhb.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">5. National Housing Bank (NHB GRIDS)</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 RELATED INTERNAL TOPIC BADGES */}
            <div className="pt-6 border-t border-slate-200 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                Explore Related Credit &amp; Mortgage Settlement Resources:
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/get-loan-after-settlement"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Get a Loan After Settlement
                </Link>
                <Link
                  href="/convert-settled-status-to-closed"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Convert Settled Status to Closed
                </Link>
                <Link
                  href="/improve-cibil-after-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Improve CIBIL Score After Settlement
                </Link>
                <Link
                  href="/remove-settled-status-from-cibil"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Remove Settled Status from CIBIL
                </Link>
                <Link
                  href="/credit-card-settlement-hdfc"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  HDFC Credit Card Settlement
                </Link>
                <Link
                  href="/is-loan-settlement-illegal-in-india-truth"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Is Loan Settlement Illegal in India?
                </Link>
                <Link
                  href="/settlement-of-loan-letter"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Settlement of Loan Letter Format
                </Link>
                <Link
                  href="/services/personal-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Personal Loan Settlement Services
                </Link>
                <Link
                  href="/services/anti-harassment"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Anti-Harassment Legal Support
                </Link>
                <Link
                  href="/rbi-rules-for-recovery-agents"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  RBI Recovery Agent Rules 2026
                </Link>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="sticky top-6 space-y-6">
            
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
                Specialized in banking compliance, debt resolution strategies, loan dispute negotiations, and CIBIL rectification with extensive experience resolving complex NPA defaults across Indian banks.
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

            {/* Card 2: Emergency CTA Card (Vibrant Blue Gradient + White CTA Button) */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 shadow-md text-white space-y-4">
              <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-lg bg-white/15 text-blue-100 text-[11px] font-bold tracking-wide">
                <Lock className="w-3.5 h-3.5" />
                <span>100% CONFIDENTIAL</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">
                  Worried a Past Settlement Blocks Your Home Loan?
                </h3>
                <p className="text-blue-100 text-sm mt-2 leading-relaxed font-normal">
                  Our mortgage and credit resolution experts structure your home loan application, optimize your FOIR, and negotiate differential upgrades to secure approvals from leading HFCs and banks.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full text-center bg-white text-blue-900 font-bold py-3.5 px-4 rounded-xl hover:bg-slate-100 transition-all shadow-md text-sm transform hover:-translate-y-0.5"
              >
                Evaluate Your Home Loan Eligibility
              </Link>
              <div className="text-center pt-1">
                <a
                  href="tel:+918800226635"
                  className="text-xs sm:text-sm text-blue-100 hover:text-white font-semibold flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-white" />
                  <span>Call: +91-8800226635</span>
                </a>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Commitments Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-5 space-y-3 text-xs shadow-xs">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                CredSettle Trust Commitments
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked advisory &amp; resolution fees.</span>
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

          </aside>

        </div>
      </div>
    </main>
  );
}
