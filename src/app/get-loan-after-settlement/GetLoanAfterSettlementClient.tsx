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
  Wallet,
  Percent,
  Sparkles,
  UserCheck
} from 'lucide-react';

export default function GetLoanAfterSettlementClient() {
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
    { id: 'core-eligibility', label: '1. Can You Get a Loan or Card?' },
    { id: 'underwriting-architecture', label: '2. Why Algorithms Auto-Reject' },
    { id: 'scoring-breakdown', label: '3. Bureau Math & Risk Ratios' },
    { id: 'lender-categories', label: '4. 4 Categories of Lenders' },
    { id: 'infographic-overview', label: 'Visual Recovery Blueprint' },
    { id: 'step-by-step-roadmap', label: '5. 6-Stage Qualification SOP' },
    { id: 'legal-template', label: '6. Formal Representation Draft' },
    { id: 'escalation-matrix', label: '7. 3-Tier Escalation Matrix' },
    { id: 'recovery-timeline', label: '8. 24-Month Milestone Roadmap' },
    { id: 'complex-scenarios', label: '9. Cards, ARCs & Fintech Apps' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'official-sources', label: 'Regulatory Sources & Citations' }
  ];

  const faqs = [
    {
      q: 'Can I get a loan after settling a previous loan in India?',
      a: 'Yes, you can get a loan after settlement. While unsecured personal loans from top-tier scheduled commercial banks may be rejected during the initial 12 to 24 months due to automated underwriting filters, borrowers can readily qualify for secured facilities such as gold loans, fixed deposit-backed loans, property loans with low LTV, or co-applicant loans. Once you rebuild your credit score above 720+ through disciplined repayment, standard unsecured loans become accessible.'
    },
    {
      q: 'Can I get a credit card after loan or credit card settlement?',
      a: 'Yes. The most effective route to get a credit card after settlement is applying for a Secured Fixed Deposit (FD) credit card (such as IDFC FIRST WOW, Kotak 811 DreamDifferent, or Axis Insta Easy). These cards require no credit check, offer a credit limit equal to 80%–100% of your deposit, and report regular on-time monthly payments to CIBIL, Experian, Equifax, and CRIF High Mark to systematically rebuild your credit score.'
    },
    {
      q: 'Does loan settlement permanently affect my credit score?',
      a: 'No, loan settlement does not permanently ruin your credit. While the "Settled" status flag remains visible on your credit report for up to 7 years (84 months) under credit bureau reporting standards, its mathematical impact on your credit score diminishes significantly over time as new, positive trade-lines are established. Furthermore, you can permanently convert the "Settled" status to "Closed" by paying the historical waived differential amount to the original lender.'
    },
    {
      q: 'How long should I wait before applying for a new loan after settlement?',
      a: 'Borrowers should observe a mandatory 90-to-180-day cooling-off period after receiving their No Dues Certificate (NDC) before applying for any new credit. Immediate applications trigger hard inquiries that further depress your score. Use the first 6 months to service a secured credit product before approaching tier-2 NBFCs or private banks for new retail loans.'
    },
    {
      q: 'Which banks offer loans to individuals with a past settlement?',
      a: 'Gold loan NBFCs and banks (Muthoot Finance, Manappuram, SBI Gold Loans) offer instant collateral-based loans regardless of CIBIL score. Second-tier NBFCs and fintech lenders (such as MoneyView, KreditBee, InCred, and Tata Capital) offer risk-based pricing loans to post-settlement borrowers who demonstrate strong current banking cash flow and stable monthly income.'
    },
    {
      q: 'Can I get a home loan after a personal loan settlement?',
      a: 'Yes, obtaining a home loan after settlement is achievable through three strategies: (1) Applying with a creditworthy co-applicant (such as an earning spouse or parent), (2) Providing a higher down payment (30%–40% equity margin to reduce lender risk), and (3) Approaching Housing Finance Companies (HFCs) like LIC HFL, PNB Housing, or Tata Capital that conduct manual credit underwriting rather than strict automated algorithmic filtering.'
    },
    {
      q: 'Will the bank where I settled a loan ever give me a loan again?',
      a: 'Usually, the specific bank or NBFC where you settled a loan maintains an internal "Negative / Loss Ledger" that permanently restricts future unsecured lending from that specific institution. However, other scheduled commercial banks and NBFCs evaluate your broader credit bureau score and current financial stability, meaning you can easily secure credit from other lenders.'
    },
    {
      q: 'What is the fastest way to increase CIBIL score to 750+ after settlement?',
      a: 'The fastest path involves: (1) Verifying your No Dues Certificate (NDC) is updated to ₹0 balance across all four bureaus, (2) Opening an FD-backed secured credit card and maintaining a Credit Utilization Ratio (CUR) below 20%–30%, (3) Ensuring 100% on-time autopay for all utility bills and EMIs, and (4) Avoiding multiple hard credit inquiries.'
    },
    {
      q: 'How does converting "Settled" to "Closed" help in getting fresh loans?',
      a: 'Converting a loan status from "Settled" to "Closed" by paying the historical waived principal differential eliminates the derogatory default flag from your credit profile. Automated Loan Origination Systems (LOS) at prime banks (HDFC, ICICI, SBI) immediately stop auto-rejecting your loan applications, restoring prime interest rate eligibility.'
    },
    {
      q: 'What documents are required to prove creditworthiness after settlement?',
      a: 'When applying for credit after settlement, prepare: (1) Official No Dues Certificates (NDC) for all settled accounts, (2) Latest 6 months of salary slips or audited P&L/ITR statements, (3) 12 months of clean bank account statements showing zero cheque bounces, and (4) Proof of continuous employment or steady business income to satisfy Debt-to-Income (DTI) and FOIR thresholds.'
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
            Can You Get a Loan or Credit Card <br />
            <span className="text-blue-100">After Settlement?</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-2xl mb-8 max-w-3xl mx-auto font-normal md:font-medium text-white/95 leading-relaxed">
            Worried you will never get a loan again? Learn which banks offer loans to individuals with a past settlement and how to qualify for them.
          </p>

          {/* Single Pill-Shaped White CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:text-[#1886ff] px-8 py-4 rounded-full font-extrabold text-base md:text-lg hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Download Our Post-Settlement Credit Guide</span>
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
                  <span>Verified Banking Blueprint</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Updated per RBI Fair Lending Practice Directions &amp; CICRA Credit Architecture 2026.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE BRIEF CALLOUT (#F4F8FE bg + #1886ff Left Border + Bookmark Icon) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: POST-SETTLEMENT CREDIT ELIGIBILITY &amp; APPROVAL REALITY</span>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  Settling a loan or credit card via a One-Time Settlement (OTS) is an irrefutable legal relief mechanism that shields borrowers from ongoing recovery litigation, Section 138 cheque bounce proceedings, and aggressive collection harassment. However, the subsequent &quot;Settled&quot; status tag reported across TransUnion CIBIL, Experian, Equifax, and CRIF High Mark triggers automated rejections across prime commercial bank algorithms.
                </p>
                <p>
                  Contrary to persistent myths propagated by recovery agencies, a past settlement does not result in a permanent financial blacklist. Borrowers can systematically rebuild prime creditworthiness within 6 to 24 months by following a structured 4-phase trajectory: establishing secured trade-lines, optimizing debt-to-income ratios, utilizing credit-worthy co-borrowers, or executing a differential payoff to permanently convert &quot;Settled&quot; status into &quot;Closed&quot;.
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-blue-100">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Secured Credit Rebuilding is 100% Guaranteed:</strong> Fixed Deposit-backed credit cards and gold loans require zero credit history checks, bypass automated bureau filters, and report positive monthly repayment data to all four credit bureaus.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Mandatory 90-Day Cooling-Off Rule:</strong> Applying for retail unsecured loans immediately after settlement guarantees hard rejection inquiries that severely depress credit scores.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">The Differential Payoff Advantage:</strong> Paying the historical waived principal balance converts your CIBIL record to &quot;Closed&quot;, completely restoring eligibility for tier-1 home loans and prime personal loans.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: CAN YOU GET A LOAN OR CREDIT CARD AFTER SETTLEMENT? */}
            <section id="core-eligibility" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4" />
                <span>Credit Underwriting Reality</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                1. Can You Get a Loan or Credit Card After Settlement?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The short answer is an unequivocal <strong>yes</strong>, but approval depends entirely on the type of credit facility you seek, the lending institution you approach, and the time elapsed since your settlement was executed. When a borrower completes a One-Time Settlement (OTS), the lending bank agrees to accept a discounted lump sum and write off the remaining balance as an operational loss.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                While this legal compromise fully extinguishes your civil debt liability, the bank reports a &quot;Settled&quot; status flag to India&apos;s four credit information companies (CIBIL, Experian, Equifax, and CRIF High Mark). Automated Loan Origination Systems (LOS) employed by top scheduled commercial banks treat this flag as an indicator of past default risk, rejecting automated unsecured applications during the initial 12 to 24 months.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, Indian retail credit architecture is divided into distinct lending tiers. Collateralized credit, risk-priced non-banking financial company (NBFC) loans, and co-applicant mortgage facilities operate under entirely different underwriting criteria that remain accessible to post-settlement individuals immediately.
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-xs my-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Credit Product Category</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Approval Probability</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Minimum CIBIL Needed</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Max LTV / Credit Limit</th>
                        <th className="p-3.5 md:p-4 font-bold">Ideal Timeframe to Apply</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-emerald-800 bg-emerald-50/30">
                          Secured Gold Loans (NBFC / Banks)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-emerald-600">
                          99% (Guaranteed)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-mono">
                          No Minimum (300+)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Up to 75% of Gold Appraised Value
                        </td>
                        <td className="p-3.5 md:p-4 text-emerald-700 font-medium">
                          Immediate (Day 1 post-NDC)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-blue-800 bg-blue-50/30">
                          FD-Backed Credit Cards (Secured)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-blue-600">
                          99% (Guaranteed)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-mono">
                          No CIBIL Check
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          80% – 100% of Fixed Deposit
                        </td>
                        <td className="p-3.5 md:p-4 text-blue-700 font-medium">
                          Month 1 – 3 (Rebuilding Phase)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-slate-900">
                          Co-Borrower Home / Auto Loans
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-indigo-600">
                          75% – 85% (High)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-mono">
                          650+ (Co-applicant 750+)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          60% – 75% Property / Vehicle LTV
                        </td>
                        <td className="p-3.5 md:p-4 text-slate-700 font-medium">
                          Month 6 – 12 post-settlement
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-amber-900 bg-amber-50/30">
                          Fintech NBFC Unsecured Loans
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-amber-600">
                          50% – 65% (Moderate)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-mono">
                          650 – 700+
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          ₹25,000 – ₹3,00,000 (Risk-Priced)
                        </td>
                        <td className="p-3.5 md:p-4 text-amber-800 font-medium">
                          Month 9 – 15 post-settlement
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-rose-900 bg-rose-50/30">
                          Tier-1 Bank Prime Loans &amp; Cards
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-rose-600">
                          Low initially; 80%+ later
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-mono">
                          750+ (Clean Bureau)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Full Prime Limit (Standard ROI)
                        </td>
                        <td className="p-3.5 md:p-4 text-rose-800 font-medium">
                          Month 18 – 24 (or upon Differential Payoff)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs md:text-sm text-slate-600 italic">
                <strong>Strategic Rule:</strong> Do not submit random applications to scheduled commercial banks immediately after settlement. Every rejected application triggers a hard inquiry, causing compounding damage to your rebuilding credit profile.
              </p>
            </section>

            {/* SECTION 2: WHY BANKS AUTO-REJECT SETTLED BORROWERS */}
            <section id="underwriting-architecture" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4" />
                <span>Underwriting Architecture</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                2. Why Loan Algorithms Auto-Reject &amp; How Bank Decisioning Works
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To overcome loan rejections, one must understand how Indian banking systems process loan applications. Modern retail credit underwriting is no longer decided by branch managers over personal discussions; it is governed by algorithmic Loan Origination Systems (LOS) connected via real-time APIs to credit bureaus.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you apply online for a personal loan or credit card at HDFC Bank, ICICI Bank, Axis Bank, or SBI, the LOS executes a two-stage filter:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Stage 1: Negative Trade-Line Rule Filtering</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The algorithm scans the CIR (Credit Information Report) for derogatory tags within the last 36 months, including &quot;Settled&quot;, &quot;Post-Write-off Settled&quot;, &quot;Written Off&quot;, or &quot;Suit Filed&quot;. If detected on unsecured facilities, the application is rejected automatically without human review.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>Stage 2: Internal Loss Ledger Blacklisting</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The specific lending bank where you settled preserves your PAN card in an internal &quot;Sacrifice / Loss Ledger&quot;. Even if your CIBIL score recovers to 800+ years later, that specific bank will never sanction fresh unsecured credit unless the past waived loss is reimbursed in full.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs md:text-sm text-blue-950 leading-relaxed">
                <strong>The Crucial Distinction:</strong> While your previous lending bank will maintain an internal negative ledger, other scheduled banks and NBFCs only look at your external credit bureau score and current repayment discipline. By establishing fresh, positive trade-lines with alternative lenders, you effectively bypass past default stigmas.
              </div>
            </section>

            {/* SECTION 3: BUREAU MATH & RISK RATIOS */}
            <section id="scoring-breakdown" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Percent className="w-4 h-4" />
                <span>Credit Bureau Mathematics</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                3. Credit Scoring Breakdown &amp; Financial Math Calculations
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit scores in India range from 300 to 900 and are calculated using sophisticated proprietary statistical algorithms. Understanding the mathematical weighting of each credit pillar allows you to engineer rapid score recovery post-settlement:
              </p>

              {/* Technical Scoring / Math Card */}
              <div className="rounded-3xl border-2 border-blue-200 bg-white p-6 md:p-7 shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#1886ff] flex items-center justify-center font-black text-sm">
                      %
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-bold text-slate-900">
                        CIBIL Score Weight Distribution &amp; Post-Settlement Recovery Levers
                      </h3>
                      <p className="text-xs text-slate-500">
                        TransUnion CIBIL Scoring Engine V3.0 Weight Architecture
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                    Mathematical Blueprint
                  </span>
                </div>

                {/* Weights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-900">Payment History</span>
                      <span className="font-mono font-black text-blue-600 text-sm">35% Weight</span>
                    </div>
                    <p className="text-slate-600 leading-snug">
                      Most critical component. Every on-time payment on a new secured card rebuilds this foundation month-by-month.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-900">Credit Utilization (CUR)</span>
                      <span className="font-mono font-black text-blue-600 text-sm">30% Weight</span>
                    </div>
                    <p className="text-slate-600 leading-snug">
                      Total balance divided by total limit. Keeping CUR below 20%–30% delivers immediate algorithmic score boosts.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-900">Credit Age &amp; History</span>
                      <span className="font-mono font-black text-blue-600 text-sm">15% Weight</span>
                    </div>
                    <p className="text-slate-600 leading-snug">
                      Average age of active accounts. Older active accounts provide structural stability to your overall rating.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-900">Credit Mix (Secured/Unsecured)</span>
                      <span className="font-mono font-black text-blue-600 text-sm">10% Weight</span>
                    </div>
                    <p className="text-slate-600 leading-snug">
                      Healthy balance between collateralized loans and revolving credit demonstrates versatile financial management.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-900">New Credit Inquiries</span>
                      <span className="font-mono font-black text-blue-600 text-sm">10% Weight</span>
                    </div>
                    <p className="text-slate-600 leading-snug">
                      Hard pulls within 12 months. Each hard loan rejection shaves 5–15 points off your composite score.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-emerald-950">Fixed Obligation (FOIR)</span>
                      <span className="font-mono font-black text-emerald-700 text-sm">Underwriting Cap</span>
                    </div>
                    <p className="text-emerald-900 leading-snug">
                      Total Monthly EMIs / Net Monthly Income &le; 40%–50%. A zero-debt post-settlement status optimizes your FOIR.
                    </p>
                  </div>
                </div>

                {/* Mathematical Equation Card */}
                <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs space-y-2">
                  <div className="text-blue-400 font-bold uppercase tracking-wider text-[11px]">
                    Fixed Obligation to Income Ratio (FOIR) Mathematical Formula
                  </div>
                  <div className="bg-slate-800 p-3 rounded-xl text-center text-emerald-300 font-bold text-sm">
                    FOIR (%) = [ (Proposed EMI + Existing Active EMIs) / Net Monthly Salary ] &times; 100
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed pt-1">
                    <strong>Underwriting Takeaway:</strong> Because loan settlement completely extinguishes your past monthly EMI obligations (bringing existing active EMIs to ₹0), your FOIR becomes 0%. This massive disposable income margin makes you highly attractive for manual credit appraisal.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: 4 CATEGORIES OF LENDERS IN INDIA */}
            <section id="lender-categories" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4" />
                <span>Lending Landscape</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                4. The 4 Categories of Lenders in India: Who Lends After Settlement?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Not all financial institutions treat past settlements the same way. In India&apos;s regulated banking ecosystem, lenders fall into four distinct operational tiers based on their credit risk appetite:
              </p>

              <div className="space-y-4">
                {/* Category 1 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col md:flex-row gap-4 items-start">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-extrabold text-base flex-shrink-0">
                    A
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm md:text-base font-bold text-slate-900">
                        Category A: Gold Loan Companies &amp; Secured NBFCs
                      </h3>
                      <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        Instant Approval (99%)
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Lenders such as <strong>Muthoot Finance, Manappuram Finance, and SBI Gold Loans</strong> extend capital strictly against physical gold jewelry collateral. Because the loan is secured by liquid precious metals (up to 75% LTV under RBI directives), these lenders do not disqualify applicants based on past CIBIL settlements. Furthermore, servicing a 6-month gold loan on time establishes an active positive repayment track record on your credit report.
                    </p>
                  </div>
                </div>

                {/* Category 2 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col md:flex-row gap-4 items-start">
                  <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-extrabold text-base flex-shrink-0">
                    B
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm md:text-base font-bold text-slate-900">
                        Category B: FD-Backed Credit Card Issuers (The Ultimate Rebuilder)
                      </h3>
                      <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                        Guaranteed Approval
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Banks offering secured credit cards—including <strong>IDFC FIRST WOW, Kotak Mahindra 811 DreamDifferent, SBM Gild, and Axis Bank Insta Easy</strong>—issue credit cards against a fixed deposit (minimum ₹5,000 to ₹25,000). There is zero CIBIL score requirement. These cards function identically to standard credit cards, reporting monthly on-time payments to all 4 credit bureaus, serving as the single fastest vehicle to jump from 580 to 730+ CIBIL.
                    </p>
                  </div>
                </div>

                {/* Category 3 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col md:flex-row gap-4 items-start">
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-extrabold text-base flex-shrink-0">
                    C
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm md:text-base font-bold text-slate-900">
                        Category C: Second-Tier NBFCs &amp; Fintech Digital Lenders
                      </h3>
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                        Risk-Based Pricing
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Fintech NBFCs like <strong>MoneyView, InCred, KreditBee, CASHe, and Tata Capital</strong> utilize alternative data underwriting models. Instead of relying solely on bureau flags, their proprietary algorithms evaluate monthly bank cash flows, salary credits, utility payment history, and current employment stability. Once you show 6 months of steady income and a zero-bounce bank statement post-settlement, they offer personal loans with risk-adjusted interest rates (18%–26% APR).
                    </p>
                  </div>
                </div>

                {/* Category 4 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col md:flex-row gap-4 items-start">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-extrabold text-base flex-shrink-0">
                    D
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm md:text-base font-bold text-slate-900">
                        Category D: Tier-1 Scheduled Commercial Banks &amp; HFCs
                      </h3>
                      <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                        Prime Rates (750+ CIBIL)
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Institutions like <strong>HDFC Bank, ICICI Bank, SBI, LIC Housing Finance, and PNB Housing</strong> provide India&apos;s lowest interest rates on home loans and unsecured personal credit. To qualify post-settlement, you require either 18–24 months of pristine repayment history on new trade-lines with a 750+ score, a strong co-applicant, or converting your past &quot;Settled&quot; status to &quot;Closed&quot; by extinguishing the historical waiver differential.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* HIGH-IMPACT INFOGRAPHIC BANNER (Between Sections 4 & 5) */}
            <div id="infographic-overview" className="scroll-target bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-10 text-slate-800">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-blue-500">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-white text-xs shadow-sm">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-200 block">
                      Post-Settlement Action Blueprint
                    </span>
                    <h3 className="text-sm md:text-base font-black text-white leading-tight">
                      How to Get Fresh Loans &amp; Credit Cards After Settlement
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/get-loan-after-settlement.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-200 hover:text-white font-bold flex items-center gap-1 transition-colors"
                >
                  <span className="hidden sm:inline">Open Full Size</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* 16:9 Landscape Infographic Image Container */}
              <div className="p-3 md:p-4 bg-slate-50">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                  <img
                    src="/images/infographics/get-loan-after-settlement.jpg"
                    alt="Can You Get a Loan After Settlement - Step-by-Step Credit Recovery Infographic"
                    className="w-full h-auto object-contain max-h-[460px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Summary Footer */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Core Takeaway:</strong> Follow the 4-stage roadmap (NDC Audit &rarr; Secured Card &rarr; 720+ Score &rarr; Prime Loan Approvals).</span>
                </div>
                <Link href="/contact" className="text-[#1886ff] font-bold hover:underline">
                  Download Detailed Recovery Plan &rarr;
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
                5. Step-by-Step Roadmap: 6 Stages to Qualify for New Credit Post-Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Qualifying for loans after settlement requires strategic precision. Do not rely on luck or automated applications. Follow this battle-tested 6-stage operational protocol:
              </p>

              <div className="space-y-4">
                {/* Stage 1 */}
                <div className="flex items-start gap-3.5 p-4 md:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 1: Post-Settlement Bureau Audit &amp; NDC Verification
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Within 30–45 days of completing your One-Time Settlement, obtain official No Dues Certificates (NDC) from all lenders. Download fresh credit reports from all four bureaus (CIBIL, Experian, Equifax, CRIF). Verify that the outstanding balance reflects exactly <strong>₹0</strong> and amount overdue is <strong>₹0</strong>. If any bank left an active overdue balance, file an immediate online bureau dispute with your NDC attached.
                    </p>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="flex items-start gap-3.5 p-4 md:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 2: Observe a Strict 90-Day Credit Cooling-Off Period
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Cease all new loan and credit card inquiries for at least 90 to 180 days. Submitting multiple loan applications right after a settlement signals desperate credit hunger to risk scoring models, creating hard inquiry records that depress your CIBIL score by an additional 20 to 50 points.
                    </p>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="flex items-start gap-3.5 p-4 md:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 3: Establish a Secured Credit Rebuilding Trade-Line
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Open a fixed deposit of ₹20,000 to ₹50,000 with IDFC FIRST Bank, Kotak Mahindra Bank, or Axis Bank and obtain a secured credit card. Use this card for routine monthly utility expenses (groceries, fuel, electricity bills) to generate fresh, positive monthly trade-line data feeds across all credit bureaus.
                    </p>
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="flex items-start gap-3.5 p-4 md:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 4: Maintain Sub-30% Utilization with Automated Autopay
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Never utilize more than 20% to 30% of your credit limit (e.g., spend no more than ₹6,000 on a ₹20,000 limit card). Set up an automated ECS/NACH mandate to debit the total amount due 5 days before the payment due date. This builds a 100% on-time repayment track record, driving your score towards 720+ within 6 to 9 months.
                    </p>
                  </div>
                </div>

                {/* Stage 5 */}
                <div className="flex items-start gap-3.5 p-4 md:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    5
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 5: Leverage Co-Applicants &amp; Higher Down Payments for Big Loans
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      If you require a home loan, car loan, or business loan within 12 months of settlement, apply jointly with a co-borrower who possesses a 750+ CIBIL score and stable salary. Additionally, offering a 30%–40% equity down payment substantially lowers the lender&apos;s Loan-to-Value (LTV) risk, securing manual credit committee approval.
                    </p>
                  </div>
                </div>

                {/* Stage 6 */}
                <div className="flex items-start gap-3.5 p-4 md:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    6
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 6: Upgrade &quot;Settled&quot; to &quot;Closed&quot; via Differential Payoff
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      For unconstrained access to tier-1 unsecured credit cards and prime bank personal loans, contact your historical lending bank and request a payoff calculation for the waived principal balance. Upon clearing the difference, obtain a clean closure NDC. The bank is legally mandated under RBI rules to update your status to &quot;Closed&quot; with zero loss reported.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6: FORMAL LEGAL REPRESENTATION LETTER TEMPLATE */}
            <section id="legal-template" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4" />
                <span>Ready-to-Use Legal Template</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                6. Formal Representation Template: Applying for Manual Credit Appraisal Post-Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When applying for a high-value loan (home loan, auto loan, or commercial line) where automated algorithms flag a past settlement, submit this formal written representation directly to the Bank Credit Sanctioning Committee:
              </p>

              {/* Dark Monospace Terminal Container */}
              <div className="rounded-2xl border border-slate-700 bg-slate-900 text-slate-100 p-5 md:p-6 shadow-sm overflow-x-auto text-xs font-mono leading-relaxed">
                <div className="text-blue-400 font-bold mb-3 pb-2 border-b border-slate-800 flex items-center justify-between">
                  <span>FORMAL REPRESENTATION TO CREDIT COMMITTEE FOR MANUAL UNDERWRITING</span>
                  <span className="text-[10px] text-slate-400 uppercase">Under RBI Fair Lending Directives</span>
                </div>
                <pre className="whitespace-pre-wrap text-slate-200">
{`To,
The Credit Sanctioning Committee / Head of Retail Credit Underwriting,
[Target Bank / NBFC Name],
[Branch / Central Processing Centre Address],
Email: [retailcredit@bankname.com]

Subject: Application for Manual Credit Appraisal & Underwriting Review for Loan Application No: [Insert Application Ref No.] in light of Past Lawful One-Time Settlement (OTS)

Respected Members of the Credit Committee,

I, [Borrower Full Name], residing at [Borrower Address], holding PAN: [Insert PAN] and Aadhaar: [Insert Aadhaar], have submitted an application for [Specify: Home Loan / Car Loan / Business Loan / Credit Facility] amounting to ₹[Requested Amount].

1. Past Context & Lawful Debt Extinguishment:
   That in [Year of Settlement], owing to bona fide unforeseen financial distress [mention cause: e.g. severe medical emergency / corporate layoff / market downturn], I entered into a mutual One-Time Settlement (OTS) for my past facility [Previous Bank Name, A/C No. XXXXXXXX]. Said settlement was fully satisfied on [Date of NDC], and an unconditional No Dues Certificate was issued (enclosed as Annexure-A).

2. Current Financial Rehabilitation & Enhanced Repayment Capacity:
   a) Current Employment & Income: I am currently employed as [Designation] at [Company Name] with a stable net monthly remuneration of ₹[Monthly Net Salary] (latest 6 months salary slips enclosed as Annexure-B).
   b) Bank Statements: My primary banking account demonstrates zero cheque/NACH returns and a robust average monthly balance exceeding ₹[Average Balance] over the past 12 months (Annexure-C).
   c) Debt-to-Income / FOIR: My current total fixed monthly EMI obligations stand at exactly ₹0, resulting in a healthy Fixed Obligation to Income Ratio (FOIR) well below the regulatory threshold of 40%.

3. Rebuilt Credit Discipline:
   Subsequent to the settlement, I have maintained a 100% on-time repayment track record on my secured facility [Specify: FD Credit Card / Gold Loan] with a Credit Utilization Ratio maintained strictly below 20%.

4. Request for Manual Underwriting Discretion under RBI Fair Lending Framework:
   Pursuant to the RBI Master Direction on Fair Practices Code for Lenders, I respectfully submit that my profile presents a low credit risk profile. I request the Credit Committee to exercise manual underwriting discretion to approve the subject facility based on my current debt-free cash flows, collateral security, and verified financial stability.

Thanking you,

Yours sincerely,

___________________________
[Signature]
[Borrower Name]
[Mobile Number]
[Email Address]
Date: [DD/MM/YYYY]
Place: [City, State]`}
                </pre>
              </div>
            </section>

            {/* SECTION 7: 3-TIER ESCALATION MATRIX */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4" />
                <span>Grievance Redressal</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                7. 3-Tier Escalation Matrix for Unjustified Bureau Data Errors &amp; Delays
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your previous bank fails to update your credit report to ₹0 balance after receiving settlement funds, or if an erroneous &quot;Written-Off&quot; status is reported instead of &quot;Settled&quot;, use this 3-tier statutory escalation matrix:
              </p>

              {/* 3-Tier Escalation Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="text-xs font-black text-[#1886ff] uppercase tracking-wider">
                    Level 1 (Days 1–10)
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Branch Credit Manager &amp; CRM Desk
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit written representation enclosing your NDC and settlement receipt. Demand immediate correction in the monthly credit bureau tape.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="text-xs font-black text-blue-600 uppercase tracking-wider">
                    Level 2 (Days 11–30)
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Principal Nodal Officer (PNO)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalate to the bank&apos;s apex grievance desk. The PNO has administrative authority to issue manual bureau rectification files directly to CIBIL and Experian.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border-2 border-emerald-300 bg-emerald-50/20 shadow-2xs space-y-2">
                  <div className="text-xs font-black text-emerald-700 uppercase tracking-wider">
                    Level 3 (Day 31+)
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    RBI Integrated Ombudsman
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a statutory complaint at <strong>cms.rbi.org.in</strong>. Under RBI Circular RBI/2023-24/72, banks must pay <strong>₹100/day compensation</strong> for every day of delay beyond 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 24-MONTH RECOVERY TIMELINE */}
            <section id="recovery-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4" />
                <span>Credit Rebuilding Roadmap</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                8. Chronological 24-Month Credit Recovery &amp; Loan Eligibility Timeline
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit restoration is a predictable, mathematical process. Here is the realistic chronological roadmap of loan and card eligibility post-settlement:
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Phase &amp; Timeline</th>
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Bureau Status Event</th>
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Score Trajectory</th>
                        <th className="p-3.5 font-bold">Credit Facilities Unlocked</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Months 1 – 3 (Cooling Off)
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Settlement logged; Balance updated to ₹0; DPD historical counter freezes.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">
                          580 – 640
                        </td>
                        <td className="p-3.5">
                          Secured Gold Loans (Muthoot/SBI), FD-Backed Credit Cards (IDFC/Kotak). Zero hard loan inquiries.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Months 4 – 6 (Foundation)
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Fresh positive trade-lines reported; Credit Utilization Ratio maintained below 20%.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-blue-700">
                          650 – 690
                        </td>
                        <td className="p-3.5">
                          Micro NBFC Consumer Durable Loans (Bajaj Finserv/Home Credit), Two-Wheeler Secured Loans.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Months 7 – 12 (Acceleration)
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Continuous 6+ months of clean on-time repayments; past default impact dilutes.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-indigo-700">
                          700 – 740
                        </td>
                        <td className="p-3.5">
                          Fintech Personal Loans (MoneyView/InCred), Used Car Loans, Co-Borrower Home Loans (HFCs).
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Months 13 – 24 (Prime Restoration)
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Established mature credit history; optional conversion to &quot;Closed&quot; status completed.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-emerald-700">
                          750 – 800+ (Prime)
                        </td>
                        <td className="p-3.5">
                          Prime Bank Home Loans (SBI/HDFC), Premium Unsecured Credit Cards, Low-ROI Personal Loans.
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
                <Briefcase className="w-4 h-4" />
                <span>Complex Scenarios</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                9. Complex Scenarios: Credit Cards, ARCs, and Digital Fintech Loan Apps
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Credit Card Settlements
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Credit cards carry compounding 42%+ APR interest. When paying the balance to convert to &quot;Closed&quot;, insist on calculating the waiver based on the principal at default, stripping out all accumulated finance charges.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Debt Assigned to ARCs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your loan was assigned to an Asset Reconstruction Company (ARCIL, Phoenix, CFM, Edelweiss ARC) under SARFAESI Section 5, you must settle the differential with the ARC directly, as the ARC now owns the legal right to issue the NDC.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#1886ff]" />
                    Digital Fintech NBFC Apps
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For app-based digital loans (KreditBee, MoneyView, CASHe, PaySense), obtain the NDC from the underlying RBI-registered NBFC lender, not the digital lending front-end app.
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
                <span>Expert Clarifications</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                Frequently Asked Questions on Getting a Loan or Credit Card After Settlement
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to explore technical answers verified by banking compliance and debt resolution experts:
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
                <span>Statutory Authority &amp; Official Citations</span>
              </div>
              <p className="text-xs text-slate-600">
                All legal procedures, timelines, and rights described on this page are grounded in official Indian statutory frameworks:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">1. RBI Master Directions (CICRA)</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">2. CICRA Act 2005 (India Code)</span>
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
                  href="https://financialservices.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">5. Ministry of Finance (DFS)</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 RELATED INTERNAL TOPIC BADGES */}
            <div className="pt-6 border-t border-slate-200 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                Explore Related Credit &amp; Settlement Resources:
              </h3>
              <div className="flex flex-wrap gap-2">
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
                  Improve CIBIL After Settlement
                </Link>
                <Link
                  href="/remove-settled-status-from-cibil"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Remove Settled Tag from CIBIL
                </Link>
                <Link
                  href="/does-loan-settlement-affect-cibil"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Does Loan Settlement Affect CIBIL?
                </Link>
                <Link
                  href="/credit-card-settlement"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Credit Card Settlement Guide
                </Link>
                <Link
                  href="/personal-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Personal Loan Settlement Process
                </Link>
                <Link
                  href="/home-loan-eligibility-after-settlement"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Home Loan After Settlement
                </Link>
                <Link
                  href="/is-loan-settlement-illegal-in-india-truth"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Is Loan Settlement Illegal in India?
                </Link>
                <Link
                  href="/rbi-rules-for-recovery-agents"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  RBI Recovery Agent Directives 2026
                </Link>
                <Link
                  href="/legal-help-for-non-closure-of-settled-loan"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Non-Closure of Settled Loan Help
                </Link>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: STICKY AUTHOR & CTA CARDS ================= */}
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
                  Need a Loan After Settlement?
                </h3>
                <p className="text-blue-100 text-sm mt-2 leading-relaxed font-normal">
                  Our credit advisory team helps you structure your loan application, choose the right non-algorithmic lenders, and rebuild your score to 750+.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full text-center bg-white text-blue-900 font-bold py-3.5 px-4 rounded-xl hover:bg-slate-100 transition-all shadow-md text-sm transform hover:-translate-y-0.5"
              >
                Download Our Post-Settlement Credit Guide
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

            {/* Card 3: Trust Signals Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-5 space-y-3 text-xs shadow-xs">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                CredSettle Trust Commitments
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked settlement advisory.</span>
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
