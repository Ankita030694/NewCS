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
  Percent,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function ImproveCibilAfterLoanSettlementClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Key Takeaways' },
    { id: 'settlement-reality', label: '1. Post-Settlement Credit Realities' },
    { id: 'bureau-impact', label: '2. Scoring Impact & Bank Risk Norms' },
    { id: 'statutory-rights', label: '3. CICRA 2005 & Statutory Consumer Rights' },
    { id: 'financial-strategy', label: '4. Credit Math & Utilization Strategy' },
    { id: 'infographic-overview', label: 'Visual Rebuilding Blueprint' },
    { id: 'seven-stage-sop', label: '5. Comprehensive 7-Stage SOP Roadmap' },
    { id: 'legal-notice-draft', label: '6. Formal Dispute & Rectification Draft' },
    { id: 'escalation-matrix', label: '7. 3-Tier Grievance & Ombudsman Escalation' },
    { id: 'twelve-month-timeline', label: '8. 12-Month Recovery Trajectory' },
    { id: 'complex-scenarios', label: '9. Complex Scenarios: ARCs & Cards' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-citations', label: 'Regulatory Sources & Citations' }
  ];

  const faqs = [
    {
      q: 'Can I improve CIBIL score after a loan settlement?',
      a: 'Yes, absolutely. While a loan settlement immediately drops your CIBIL score by 70 to 120 points and marks the account as "Settled", this damage is not irreversible. By either clearing the waived differential balance to convert the status to "Closed" or actively establishing positive trade-lines using a secured credit card and maintaining credit utilization below 30%, you can rebuild your CIBIL score back to 750+ within 12 to 24 months.'
    },
    {
      q: 'How long does CIBIL take to recover after a loan settlement?',
      a: 'Credit score recovery typically occurs in stages: Initial stabilization begins in Months 1–3 once negative DPD (Days Past Due) reporting stops. With disciplined credit rebuilding via a fixed-deposit backed credit card, the score typically reaches 650–700 within 6 months, and crosses the prime 750+ benchmark within 12 to 18 months. If you convert the settled tag to "Closed", recovery velocity accelerates significantly.'
    },
    {
      q: 'What is the fastest way to increase CIBIL score after settlement?',
      a: 'The fastest, proven method involves three concurrent steps: First, ensure you possess an unconditional No Dues Certificate (NDC) and audit your credit report across all 4 bureaus (CIBIL, Experian, Equifax, CRIF). Second, open a Fixed Deposit-backed secured credit card (e.g., IDFC FIRST WOW or Kotak 811 DreamDifferent) with a limit of ₹25,000–₹50,000. Third, utilize strictly 15% to 25% of the limit monthly and repay 100% of the total amount due before the generation of interest charges.'
    },
    {
      q: 'How long does the "Settled" status stay on CIBIL report?',
      a: 'Under Indian credit reporting conventions and the Credit Information Companies (Regulation) Act (CICRA 2005), a "Settled" remark remains on your credit history for up to 7 years (84 months) from the date of reporting. However, its negative weighting on automated credit algorithms diminishes exponentially after 24 to 36 months of flawless payment history on new credit facilities.'
    },
    {
      q: 'Can I get a fresh loan or credit card after settling a loan?',
      a: 'Unsecured personal loans and premium credit cards from Tier-1 private banks are generally unavailable for the first 12 to 24 months post-settlement due to automated underwriting filters. However, you can immediately obtain secured credit cards backed by a fixed deposit. After 12–18 months of building a positive repayment history and raising your score above 720, NBFCs and fintech lenders will begin approving fresh credit lines.'
    },
    {
      q: 'Should I convert my settled loan to "Closed" status to speed up CIBIL recovery?',
      a: 'If you plan to apply for a major loan (such as a home loan or high-value business loan) within the next 1 to 3 years, converting your status from "Settled" to "Closed" by paying the waived differential principal is highly recommended. It permanently removes the derogatory settlement flag, allowing mortgage underwriting algorithms to approve prime interest rates without risk loading.'
    },
    {
      q: 'What is the ideal Credit Utilization Ratio (CUR) post-settlement?',
      a: 'The optimal Credit Utilization Ratio (CUR) is between 10% and 30% of your total assigned credit limit. Never max out your credit limit, as high utilization signals credit hunger and default risk to the CIBIL scoring algorithm, suppressing score growth by 20–40 points.'
    },
    {
      q: 'Why does my CIBIL score show overdue balance even after settlement?',
      a: 'This is a common banking reporting error where the lender fails to update the Current Balance and Amount Overdue to ₹0 after executing the One-Time Settlement (OTS). Under RBI Master Directions, banks must update bureau records within 30 days. You must file an official CIBIL dispute attaching your settlement sanction letter and payment receipts to force immediate correction.'
    },
    {
      q: 'What is the RBI ₹100/day compensation rule for CIBIL delay?',
      a: 'Under RBI Circular RBI/2023-24/72 (Framework for compensation to customers for delayed updating/rectification of credit information), lending institutions and credit bureaus must resolve credit data discrepancies within 30 calendar days. Failure to update records within this statutory window entitles the complainant to ₹100 per day of delay directly from the defaulting entity.'
    },
    {
      q: 'Can credit repair agencies legally erase settled status without paying the bank?',
      a: 'No. Any credit repair agency or agent claiming they can delete authentic settled records from CIBIL without clearing dues with the lender is running an illegal scam. Under Section 21 of CICRA 2005, bureaus can only alter data upon verification from the lending bank. Lawful credit restoration requires either legitimate differential payoff with an NDC or organic score rebuilding through secured credit instruments.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452AE Swatch Color) */}
      <section
        className="relative text-white pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452AE' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          {/* Title / H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-sm">
            How to Rebuild &amp; Improve CIBIL <br />
            <span className="text-blue-100 font-extrabold">After a Loan Settlement</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-2xl mb-8 max-w-3xl mx-auto font-normal md:font-medium text-white/95 leading-relaxed">
            A loan settlement drops your credit score, but it isn&apos;t permanent. Follow our proven blueprint to rebuild your CIBIL score quickly post-settlement.
          </p>

          {/* Single Pill-Shaped White CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:text-[#1886ff] px-8 py-4 rounded-full font-extrabold text-base md:text-lg hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Start Rebuilding Your Financial Health Today</span>
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
                  <span>Verified Legal Guide</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Updated per RBI Master Directions on CICRA &amp; Ombudsman Guidelines 2026.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN ARTICLE CONTENT ================= */}
          <article className="space-y-10 min-w-0 text-slate-800 leading-relaxed">
            
            {/* Executive Brief / Key Takeaways Box (with #1886ff Theme Color) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-6 sm:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: HOW TO REBUILD CIBIL AFTER SETTLEMENT</span>
              </div>

              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <p>
                  Executing a One-Time Settlement (OTS) is often the most pragmatic legal remedy for borrowers trapped in genuine financial distress. While it immediately shields you from recovery harassment and legal actions under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act, it leaves an indelible footprint on your credit profile. Your CIBIL score experiences an immediate drop of 70 to 120 points, and the loan account is designated with a derogatory &quot;Settled&quot; remark.
                </p>
                <p>
                  However, this score reduction is neither permanent nor unresolvable. Under Indian credit bureau reporting architecture, credit scoring models evaluate risk dynamically—placing far greater statistical emphasis on your recent 12 to 24 months of payment conduct than on historical defaults. By enforcing statutory reporting rights under the Credit Information Companies (Regulation) Act, 2005 (CICRA), deploying secured credit instruments, and maintaining strict credit utilization thresholds below 30%, borrowers routinely restore their CIBIL score to prime 750+ territory within 12 to 18 months.
                </p>
              </div>
            </div>

            {/* SECTION 1: LEGAL & FINANCIAL REALITIES OF SETTLEMENT */}
            <section id="settlement-reality" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4" />
                <span>Section 1</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                1. Legal &amp; Financial Realities of Post-Settlement Credit in India
              </h2>
              
              <p className="text-base text-slate-700 leading-relaxed">
                To formulate an effective credit recovery strategy, you must first understand the fundamental differences between how Indian banking institutions handle loan compromises and how credit bureaus report them. When you execute an OTS with a scheduled commercial bank or Non-Banking Financial Company (NBFC), the transaction represents a contractually binding compromise. The lender agrees to accept a lump-sum amount—frequently 30% to 60% of the total claim—and waives the remaining principal, contractual interest, and penal charges.
              </p>

              <p className="text-base text-slate-700 leading-relaxed">
                From a strictly legal standpoint, once the agreed consideration is credited to the bank and an unconditional No Dues Certificate (NDC) is issued, your debt is completely extinguished. The bank cannot initiate civil recovery suits, drag you before the Debts Recovery Tribunal (DRT), or dispatch third-party recovery agents. However, from a credit reporting perspective, the bank reports the unpaid portion as an operational write-off, prompting TransUnion CIBIL, Experian, Equifax, and CRIF High Mark to stamp the trade-line with the remark &quot;Settled&quot;.
              </p>

              <p className="text-base text-slate-700 leading-relaxed">
                The table below outlines the precise ledger treatment, score implications, and institutional underwriting responses across the four primary loan termination classifications in India:
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-xs my-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Account Status Flag</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Ledger Balance Treatment</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Immediate CIBIL Impact</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Future Loan Underwriting</th>
                        <th className="p-3.5 md:p-4 font-bold">Score Recovery Velocity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-amber-700 bg-amber-50/30">
                          SETTLED (OTS Compromise)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Compromise amount received; waived balance written off as bank loss. Outstanding ledger becomes ₹0.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-amber-600">
                          -70 to -120 Points Drop
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Automated rejection on unsecured loans for 12–24 months; secured loans accessible with risk margin.
                        </td>
                        <td className="p-3.5 md:p-4 font-semibold text-blue-700">
                          Moderate (6–18 Months with Active Rebuilding)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-emerald-700 bg-emerald-50/30">
                          CLOSED (Standard Closure)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          100% of principal, contractual interest, and agreed fees paid. Zero loss to lending institution.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-emerald-600">
                          Neutral to Highly Positive
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Full eligibility for prime home loans, vehicle loans, and premium credit cards at lowest ROI.
                        </td>
                        <td className="p-3.5 md:p-4 font-semibold text-emerald-600">
                          Fastest (Continuous Positive Weighting)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-indigo-700 bg-indigo-50/30">
                          RESTRUCTURED (Rescheduled Tenor)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Tenor extended or EMI reduced under RBI Resolution Framework; principal repaid over lengthened period.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-indigo-600">
                          -40 to -70 Points Drop
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Profile viewed with caution; fresh credit requires 12 months of clean restructured repayment.
                        </td>
                        <td className="p-3.5 md:p-4 font-semibold text-indigo-700">
                          Gradual (12–24 Months of Extended Tenor)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-rose-700 bg-rose-50/30">
                          WRITTEN OFF (Total Default / NPA)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Account classified as Non-Performing Asset (NPA). Bank booked 100% loss. Outstanding remains unpaid.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-rose-600">
                          -150+ Points Drop (Severe Crash)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Complete blacklisting across all financial institutions; high active legal recovery exposure.
                        </td>
                        <td className="p-3.5 md:p-4 font-semibold text-rose-600">
                          Frozen (No recovery until resolved)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-base text-slate-700 leading-relaxed">
                As demonstrated in the matrix above, settling a loan is vastly superior to leaving an account in active default or written-off status. While a written-off account continues to accumulate penal interest and compounds your Days Past Due (DPD) default string month after month, a settlement permanently halts negative aging. It sets your Current Balance to zero, enabling you to begin rebuilding your credit profile from a stable baseline.
              </p>
            </section>

            {/* SECTION 2: CREDIT BUREAU IMPACT & BANK RISK PROVISIONING */}
            <section id="bureau-impact" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4" />
                <span>Section 2</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                2. Credit Bureau Scoring Impact &amp; Bank Risk Provisioning Under RBI Norms
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                When an account is settled, the credit bureau scoring algorithm responds to two distinct data signals: the immediate loss penalty and the historical default narrative. Under the Reserve Bank of India&apos;s Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances (IRACP), banks are required to classify non-performing loans into Sub-standard, Doubtful, or Loss assets, setting aside between 15% and 100% of the loan amount as capital provisioning.
              </p>

              <p className="text-base text-slate-700 leading-relaxed">
                When a compromise settlement is concluded, the bank reports the absorbed haircut as a credit loss. The credit bureau&apos;s mathematical model translates this write-off into a sharp score contraction, deducting between 70 and 120 points. Furthermore, under Indian reporting conventions, this trade-line history remains recorded in your Comprehensive Credit Information Report (CIR) for up to <strong>7 years (84 months)</strong>.
              </p>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#1886ff]" />
                  How Institutional Loan Origination Systems (LOS) Filter Applicants
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Tier-1 commercial banks in India—including HDFC Bank, ICICI Bank, State Bank of India, Axis Bank, and Kotak Mahindra Bank—rely on automated Loan Origination Systems (LOS) for preliminary credit underwriting. These automated rule engines evaluate applicant credit profiles against pre-configured risk parameters. If an LOS engine detects a &quot;Settled&quot; or &quot;Written-Off&quot; status within the preceding 12 to 24 months, it typically generates an automated rejection for unsecured products such as personal loans and premium credit cards.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  However, manual credit underwriting desks and secured lending verticals (such as gold loans, secured home loans, and fixed-deposit backed facilities) operate under distinct risk parameters. When an underwriter sees that the default was legally resolved, the current balance is ₹0, and the borrower has maintained 12+ months of flawless repayment on fresh credit lines, credit approvals are granted with minimal risk premiums.
                </p>
              </div>
            </section>

            {/* SECTION 3: STATUTORY PROTECTIONS & CONSUMER RIGHTS */}
            <section id="statutory-rights" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4" />
                <span>Section 3</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                3. Statutory Protections: CICRA 2005 &amp; Central Banking Directives
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                Many borrowers operate under the false assumption that credit bureaus and banks hold unilateral, unchecked power over their credit histories. In reality, credit reporting in India is strictly regulated by parliamentary statute and binding RBI Master Directions designed to protect consumer rights and guarantee data accuracy.
              </p>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1886ff]"></span>
                    Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA)
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Section 21 of CICRA places an absolute legal obligation on all Credit Institutions (banks, NBFCs, and housing finance companies) and Credit Information Companies to maintain accurate, authenticated, and complete credit records. If a lending institution continues to report an outstanding balance, overdue amount, or active default after receiving the agreed settlement amount, it constitutes an actionable statutory violation under CICRA.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1886ff]"></span>
                    RBI Master Direction on Credit Information Reporting
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    The Reserve Bank of India mandates that all lenders must submit updated monthly data tapes to all four licensed credit bureaus within a strict 30-day reporting window. Following the execution of an OTS and issuance of the NDC, the lender is legally required to update the loan status to &quot;Settled&quot; (or &quot;Closed&quot; if the differential is cleared), setting the <strong>Current Balance</strong> and <strong>Amount Overdue</strong> to exactly <strong>₹0</strong>.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    RBI ₹100/Day Delay Compensation Framework (Circular RBI/2023-24/72)
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Under the landmark RBI consumer protection directive on credit data rectification, if a bank or credit bureau fails to update or correct disputed credit records within <strong>30 calendar days</strong> of receiving a formal grievance with supporting documentation, the defaulting entity must pay mandatory statutory compensation of <strong>₹100 per calendar day</strong> directly into the borrower&apos;s bank account until the record is rectified.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: FINANCIAL STRATEGY & CREDIT UTILIZATION MATH */}
            <section id="financial-strategy" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4" />
                <span>Section 4</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                4. Financial Strategy: Credit Scoring Mathematics &amp; Utilization Architecture
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                Credit score recovery is not a matter of luck or waiting passively for time to pass; it is an exact algorithmic calculation. By understanding the relative mathematical weights assigned to each component of your credit profile, you can deploy your monthly cash flow with surgical precision to maximize score recovery velocity.
              </p>

              <p className="text-base text-slate-700 leading-relaxed">
                In Indian credit bureau scoring models, your 3-digit score (ranging from 300 to 900) is determined by five primary pillars:
              </p>

              {/* Strategy Math Breakdown Card */}
              <div className="rounded-2xl border-2 border-blue-200 bg-white p-6 shadow-xs space-y-4">
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <Percent className="w-4 h-4 text-[#1886ff]" />
                  Mathematical Architecture of the Post-Settlement CIBIL Algorithm
                </h3>
                
                <div className="space-y-3 text-sm text-slate-700">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center justify-between font-semibold text-slate-900">
                      <span>1. Payment History (New Trade-Lines)</span>
                      <span className="font-mono font-bold text-blue-800">35% Weight</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      The single largest driver of your score. Flawless on-time clearing of new monthly statements rapidly outweighs older negative remarks.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center justify-between font-semibold text-slate-900">
                      <span>2. Credit Utilization Ratio (CUR)</span>
                      <span className="font-mono font-bold text-blue-800">30% Weight</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Calculated as total revolving balance divided by total assigned credit limits. Maintaining CUR under 20%–30% delivers immediate algorithmic score boosts.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center justify-between font-semibold text-slate-900">
                      <span>3. Length of Credit History</span>
                      <span className="font-mono font-bold text-slate-700">15% Weight</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      The average age of all open and closed accounts. Retaining older active trade-lines anchors your credit maturity.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center justify-between font-semibold text-slate-900">
                      <span>4. Credit Mix (Secured vs. Unsecured)</span>
                      <span className="font-mono font-bold text-slate-700">10% Weight</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      A healthy balance between revolving credit lines (credit cards) and installment facilities (consumer durable loans or auto loans).
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center justify-between font-semibold text-slate-900">
                      <span>5. Hard Inquiries &amp; New Credit Searches</span>
                      <span className="font-mono font-bold text-slate-700">10% Weight</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Each formal credit application initiates a hard inquiry, deducting 5 to 10 points. Minimizing fresh loan applications protects your score momentum.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-slate-900">
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-[#1886ff]">Target Recovery Velocity</strong>
                    <span className="text-xs text-slate-600">Secured Card + &lt;20% CUR + Zero Inquiries</span>
                  </div>
                  <span className="font-mono text-lg font-black text-[#1886ff]">+15 to +25 Points / Month</span>
                </div>
              </div>

              <p className="text-base text-slate-700 leading-relaxed">
                By understanding that 65% of your total credit score is determined strictly by two variables—<strong>Payment History (35%)</strong> and <strong>Credit Utilization (30%)</strong>—the path forward becomes clear. You do not need dozens of complex financial products; you simply need one or two well-managed secured credit instruments with strict repayment discipline.
              </p>
            </section>

            {/* HIGH-IMPACT INFOGRAPHIC BANNER EMBEDDED */}
            <div id="infographic-overview" className="scroll-target bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-10 text-slate-800">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-blue-500">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-white text-xs shadow-sm">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-200 block">
                      Visual Rebuilding Blueprint
                    </span>
                    <h3 className="text-sm md:text-base font-black text-white leading-tight">
                      How to Rebuild &amp; Improve CIBIL Score After Loan Settlement
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/improve-cibil-after-loan-settlement.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-200 hover:text-white font-bold flex items-center gap-1 transition-colors"
                >
                  <span className="hidden sm:inline">Open Full Size</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-3 md:p-4 bg-slate-50">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                  <img
                    src="/images/infographics/improve-cibil-after-loan-settlement.jpg"
                    alt="How to Rebuild and Improve CIBIL Score After Loan Settlement Infographic"
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Core Takeaway:</strong> Audit bureau feeds, maintain under 30% utilization on secured credit, and achieve 750+ within 12 months.</span>
                </div>
                <Link href="/contact" className="text-[#1886ff] font-bold hover:underline">
                  Get Free Credit Assessment &rarr;
                </Link>
              </div>
            </div>

            {/* SECTION 5: EXHAUSTIVE 7-STAGE SOP ROADMAP */}
            <section id="seven-stage-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4" />
                <span>Section 5</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                5. The 7-Stage Standard Operating Procedure for Credit Restoration
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                Rebuilding a damaged credit profile requires methodical execution. Our debt resolution specialists have distilled the entire recovery process into an actionable, 7-stage Standard Operating Procedure (SOP) engineered for maximum efficiency and full statutory compliance:
              </p>

              {/* Article-style Stage Sub-sections */}
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                      1
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Stage 1: Multi-Bureau Audit Across CIBIL, Experian, Equifax &amp; CRIF
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed pl-10">
                    The journey begins by pulling official CIR reports from all four licensed credit bureaus. It is essential to verify that the settled loan account is correctly labeled as <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong>, and that both the <strong>Current Balance</strong> and <strong>Amount Overdue</strong> are recorded as <strong>₹0</strong>. Ensure that the monthly Days Past Due (DPD) strings have halted and no ongoing late marks are being recorded post-settlement.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                      2
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Stage 2: Secure and Authenticate the Unconditional No Dues Certificate
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed pl-10">
                    Never consider a loan settlement finalized until you hold an original physical or digitally signed No Dues Certificate (NDC / NOC) issued on official bank letterhead. The document must explicitly identify the loan account number, confirm full receipt of the agreed settlement sum, and declare that the bank retains zero further monetary or legal claims against the borrower.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                      3
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Stage 3: Strategic Assessment of Status Upgrade (Settled to Closed)
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed pl-10">
                    Evaluate your financial roadmap for the next 1 to 3 years. If you anticipate applying for a major loan—such as a home mortgage, commercial property loan, or large business expansion facility—it is highly advantageous to negotiate with the lender to clear the historical waived differential and convert your status to &quot;Closed&quot;. This permanently expunges the settlement tag from underwriting algorithms.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                      4
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Stage 4: Activate a Fixed Deposit-Backed Secured Credit Card
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed pl-10">
                    Because automated underwriting systems will reject unsecured credit card applications immediately after a settlement, you must establish new credit lines via a secured credit card backed by a 100% lien Fixed Deposit (e.g., IDFC FIRST WOW, Kotak 811 DreamDifferent, SBI Unnati, or Axis Bank Insta Easy). These cards require no minimum credit score, involve no hard bureau inquiries, and report fresh, positive trade-lines to all four bureaus monthly.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                      5
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Stage 5: Enforce Strict 15%–25% Credit Utilization &amp; Full Auto-Debit
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed pl-10">
                    Use your secured credit card exclusively for regular, budgeted expenses such as utility bills, fuel, and groceries, ensuring your balance never exceeds 20% to 30% of the assigned limit. Crucially, activate an automated bank mandate to settle 100% of the Total Amount Due before the payment due date. Never pay just the Minimum Amount Due, as revolving balances incur steep interest charges and signal ongoing financial strain to the scoring algorithm.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                      6
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Stage 6: Diversify Credit Mix with a Micro Consumer Durable EMI Loan
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed pl-10">
                    After 6 consecutive months of timely secured card payments, purchase a small household appliance or electronic gadget through a 6-to-9 month zero-cost EMI installment plan (via Bajaj Finserv, TVS Credit, or Home Credit). Introducing a small installment loan diversifies your credit mix, demonstrating that you can handle both revolving credit lines and fixed monthly EMI obligations concurrently.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                      7
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Stage 7: Conduct Quarterly Bureau Audits &amp; Exercise Dispute Rights
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed pl-10">
                    Review your credit reports on a quarterly basis. If you identify phantom overdue balances, duplicate trade-lines, or unapproved hard inquiries, lodge immediate formal dispute tickets through the official CIBIL Dispute Portal. Hold institutions strictly to the 30-day resolution deadline, leveraging the RBI ₹100/day delay compensation rule to ensure prompt compliance.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: READY-TO-USE FORMAL LEGAL DRAFT */}
            <section id="legal-notice-draft" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4" />
                <span>Section 6</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                6. Formal Legal Rectification Notice: Application for Bureau Ledger Correction
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                One of the most frequent administrative breakdowns in Indian banking occurs when branch staff fail to transmit settlement updates to their central credit bureau operations team. As a consequence, your CIBIL report continues to display an active overdue balance, severely depressing your score. When informal branch visits yield no results, dispatching a formal legal rectification notice under CICRA 2005 immediately triggers statutory compliance workflows.
              </p>

              <p className="text-base text-slate-700 leading-relaxed">
                Below is a battle-tested template that you can customize and serve to the Principal Nodal Officer of the lending institution via Registered Post and Email:
              </p>

              {/* Code / Letter Draft Container */}
              <div className="rounded-2xl border border-slate-700 bg-slate-900 text-slate-100 p-5 md:p-6 shadow-sm overflow-x-auto text-xs font-mono leading-relaxed my-4">
                <div className="text-blue-400 font-bold mb-3 pb-2 border-b border-slate-800 flex items-center justify-between">
                  <span>FORMAL APPLICATION FOR CIBIL DATA RECTIFICATION POST-SETTLEMENT</span>
                  <span className="text-[10px] text-slate-400 uppercase">Under CICRA 2005 &amp; RBI Circular RBI/2023-24/72</span>
                </div>
                <pre className="whitespace-pre-wrap text-slate-200">
{`To,
The Principal Nodal Officer / Head of Credit Bureau Operations,
[Bank / NBFC Name],
[Zonal Office Address / Registered Corporate Office],
Email: [nodalofficer@bankname.com]

CC: TransUnion CIBIL Limited / Experian Credit Information Co.

Subject: Formal Demand for Immediate Credit Bureau Data Rectification and Elimination of Erroneous Overdue Balances for Settled Loan Account No: [Insert Loan A/C No.]

Respected Sir/Madam,

I, [Borrower Full Name], residing at [Borrower Full Address], holding PAN: [Insert PAN] and Aadhaar: [Insert Aadhaar], was the borrower for the aforementioned Loan Facility [Account Number: XXXXXXXX] sanctioned by your institution.

1. That pursuant to a mutually agreed One-Time Settlement (OTS) sanctioned vide letter reference no. [Insert OTS Sanction Letter Ref No.] dated [Date of Sanction], I have remitted the full and final settlement consideration of ₹[Amount Paid] on [Date of Payment].
2. That your institution acknowledged receipt of the agreed consideration and issued a formal Settlement / No Dues Certificate (NDC) dated [Date of NDC].
3. That upon auditing my recent Comprehensive Credit Information Report (CIR) from TransUnion CIBIL / Experian, it has come to my notice that your institution is erroneously reporting:
   a) An active Current Balance of ₹[Erroneous Amount] instead of ₹0.
   b) An Amount Overdue of ₹[Erroneous Overdue] instead of ₹0.
   c) Ongoing monthly Days Past Due (DPD) aging marks post the settlement execution date.
4. That such erroneous reporting is in direct contravention of Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA) and the Reserve Bank of India Master Directions on Credit Information Reporting.
5. That I hereby call upon your competent authority to submit an updated monthly correction tape to all four Credit Information Companies (TransUnion CIBIL, Experian, Equifax, and CRIF High Mark) reflecting the account status as "SETTLED" with ₹0 Current Balance and ₹0 Amount Overdue within 15 calendar days of receipt of this notice.
6. Please take note that under RBI Circular RBI/2023-24/72, failure to rectify customer credit information within thirty (30) calendar days of receiving this grievance obligates your institution to pay statutory compensation of ₹100 per calendar day of delay directly to the undersigned complainant.

Enclosures:
1. Copy of OTS Sanction Letter
2. Copy of Payment Receipt / Bank Statement Proof
3. Copy of No Dues Certificate (NDC)
4. Copy of Erroneous CIBIL Report Extract

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
            <section id="escalation-matrix" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4" />
                <span>Section 7</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Grievance Redressal &amp; RBI Ombudsman Escalation Mechanism
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                If a lender proves uncooperative or delays updating your bureau records beyond the statutory window, you should never engage in endless verbal back-and-forth with branch representatives. Instead, execute this structured 3-tier escalation framework:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="text-xs font-black text-[#1886ff] uppercase tracking-wider">
                    Level 1: Days 1–10
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Branch CRM Desk
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit your NDC and rectification request to the Branch Manager and log a formal ticket on the bank&apos;s online grievance portal to secure a unique Tracking Token Number.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="text-xs font-black text-blue-600 uppercase tracking-wider">
                    Level 2: Days 11–30
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Principal Nodal Officer
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalate the unresolved ticket to the Bank&apos;s Principal Nodal Officer (PNO). The PNO possesses dedicated operational authority to order off-cycle CIBIL data corrections.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border-2 border-emerald-300 bg-emerald-50/20 shadow-2xs space-y-2">
                  <div className="text-xs font-black text-emerald-700 uppercase tracking-wider">
                    Level 3: Day 31+
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    RBI Integrated Ombudsman
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a statutory complaint at <strong>cms.rbi.org.in</strong>. The Ombudsman mandates instant bureau correction and enforces the <strong>₹100/day compensation award</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 12-MONTH POST-RESOLUTION TIMELINE TABLE */}
            <section id="twelve-month-timeline" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4" />
                <span>Section 8</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                8. The 12-Month Post-Resolution Score Recovery Timeline
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                Restoring a CIBIL score after an OTS follows a predictable three-phase trajectory when paired with disciplined financial practices. Understanding these milestone intervals prevents unnecessary anxiety and helps you pace your credit applications appropriately:
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-xs my-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Phase / Timeline</th>
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Credit Report Milestone</th>
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Expected Score Range</th>
                        <th className="p-3.5 font-bold">Actionable Strategic Steps</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Phase 1: Month 1 (Days 1–45)
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Status updated to &quot;Settled&quot;; Overdue balance corrected to ₹0; DPD default string stops growing.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">
                          580 – 630 (Base Stabilization)
                        </td>
                        <td className="p-3.5">
                          Download CIR across all 4 bureaus; verify ₹0 balance; open a ₹25k–₹50k FD-backed secured credit card.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Phase 2: Months 2 – 6
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Consistent on-time monthly payments reported; positive trade-line weight starts offsetting historical default.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-blue-700">
                          640 – 700 (Momentum Phase)
                        </td>
                        <td className="p-3.5">
                          Maintain strictly &lt;20% CUR; set auto-debit for full bill; add a small 6-month consumer durable EMI loan.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Phase 3: Months 6 – 12
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Aged settlement penalty drops in algorithmic importance; flawless 12-month track record establishes creditworthiness.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-emerald-700">
                          720 – 780+ (Prime Zone)
                        </td>
                        <td className="p-3.5">
                          Eligible for prime vehicle loans, unsecured credit lines, and home loan balance transfers at standard interest rates.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 9: COMPLEX EDGE CASES */}
            <section id="complex-scenarios" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4" />
                <span>Section 9</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                9. Navigating Complex Scenarios: Credit Cards, ARCs, and Digital Instant Loans
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                Different financial products involve distinct legal frameworks and recovery conventions. Here is how to navigate three of the most complex post-settlement credit environments in India:
              </p>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Settled Credit Card Accounts (Revolving Debt)
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Credit cards are unsecured revolving facilities carrying exorbitant annual percentage rates (APR) of 42% to 52%, along with compounding late fees. When negotiating a credit card settlement, ensure that the settlement letter explicitly states that the entire card account is permanently canceled with ₹0 balance. This prevents banks from continuing to assess residual finance charges post-compromise.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Debts Assigned to Asset Reconstruction Companies (ARCs)
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    If your default was sold by the original lender to an Asset Reconstruction Company (e.g., ARCIL, Phoenix, CFM, or Edelweiss ARC) under Section 5 of the SARFAESI Act, the ARC becomes the sole legal owner of the debt. The original bank cannot negotiate settlements or issue NDCs. You must execute the OTS directly with the ARC and ensure the ARC submits the required correction tape to CIBIL.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#1886ff]" />
                    App-Based Instant Digital Fintech Loans
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Borrowers who settle digital loans on mobile apps (e.g., KreditBee, PaySense, MoneyView, or CASHe) often find that their CIBIL score fails to update. This occurs because the app is merely a technology intermediary; the actual loan was originated by an underlying RBI-registered NBFC. Always obtain your formal NDC directly from the registered NBFC entity and verify that they submit the bureau update.
                  </p>
                </div>
              </div>
            </section>

            {/* COMPANY SECTION (Placed inside middle column before FAQ) */}
            <div id="company-profile" className="scroll-target pt-4">
              <CompanySection />
            </div>

            {/* INTERACTIVE COLLAPSIBLE FAQ ACCORDION */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5 pt-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                Expert Answers on Improving CIBIL After Loan Settlement
              </h2>
              <p className="text-sm text-slate-600">
                Explore comprehensive legal and banking clarifications verified by our debt settlement experts:
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
            <section id="regulatory-citations" className="scroll-target space-y-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-600">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Authority &amp; Official Citations</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                All legal procedures, timelines, and consumer rights described in this guide are anchored in official Indian statutory frameworks and central banking directives:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">1. RBI Master Directions (CICRA)</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">2. CICRA Act 2005 (India Code)</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
                <a
                  href="https://www.cibil.com/dispute-resolution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">3. CIBIL Dispute Resolution Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">4. RBI Integrated Ombudsman (CMS)</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
                <a
                  href="https://financialservices.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">5. Ministry of Finance (DFS)</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 RELATED INTERNAL TOPIC BADGES */}
            <div className="pt-6 border-t border-slate-200 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                Explore Related Debt Resolution &amp; Credit Resources:
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/convert-settled-status-to-closed"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Convert Settled Status to Closed
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
                  href="/loan-foreclosure-prepayment-charges-waiver"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Foreclosure Prepayment Charges Waiver
                </Link>
                <Link
                  href="/services/personal-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Personal Loan Settlement Services
                </Link>
                <Link
                  href="/services/credit-card-settlement"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Credit Card Debt Relief
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

          </article>

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

            {/* Card 2: Emergency CTA Card */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 shadow-md text-white space-y-4">
              <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-lg bg-white/15 text-blue-100 text-[11px] font-bold tracking-wide">
                <Lock className="w-3.5 h-3.5" />
                <span>100% CONFIDENTIAL</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">
                  Need to Rebuild Your CIBIL Score?
                </h3>
                <p className="text-blue-100 text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution experts audit your credit reports, eliminate erroneous overdue balances, and guide your step-by-step credit recovery to 750+.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full text-center bg-white text-blue-900 font-bold py-3.5 px-4 rounded-xl hover:bg-slate-100 transition-all shadow-md text-sm transform hover:-translate-y-0.5"
              >
                Start Rebuilding Your Financial Health Today
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
                  <span><strong>Zero Upfront Risk:</strong> Fees linked to successful debt resolution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> No middleman wallets or funds pooling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> 100% lawful dispute resolution.</span>
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
