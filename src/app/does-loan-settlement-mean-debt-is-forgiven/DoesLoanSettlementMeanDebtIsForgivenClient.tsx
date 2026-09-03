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
  ShieldAlert,
  FileCheck2,
  BadgePercent
} from 'lucide-react';

export default function DoesLoanSettlementMeanDebtIsForgivenClient() {
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
    { id: 'debt-forgiveness-vs-settlement', label: '1. Forgiveness vs Settlement vs Write-Off' },
    { id: 'financial-breakdown-settlement-math', label: '2. Financial Breakdown & Settlement Math' },
    { id: 'resolution-options-comparison-table', label: '3. Resolution Matrix: OTS vs Court' },
    { id: 'cibil-algorithm-scoring-impact', label: '4. Technical CIBIL Algorithm & Scoring' },
    { id: 'infographic-overview', label: 'Visual Legal Finality Blueprint' },
    { id: 'step-by-step-settlement-sop', label: '5. 6-Stage SOP for Legal Finality & NDC' },
    { id: 'statutory-notice-defense-rights', label: '6. Statutory Defenses & Banking Rights' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance & Ombudsman Matrix' },
    { id: 'chronological-resolution-milestones', label: '8. Chronological Resolution Milestones' },
    { id: 'specialized-loan-scenarios', label: '9. Multi-Lender, Layoffs & ARCs' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authority' }
  ];

  const faqs = [
    {
      q: 'Does a loan settlement mean my debt is forgiven?',
      a: 'No, a loan settlement does not mean your debt is forgiven. In banking jurisprudence, forgiveness implies a complete unconditional discharge without negative credit reporting, whereas a settlement is a bilateral compromise where the lender waives a portion of accumulated interest and principal, reporting the loan as "Settled" to credit bureaus.'
    },
    {
      q: 'What is the Right of Recompense in loan settlement?',
      a: 'The Right of Recompense is a contractual provision commonly invoked in corporate debt restructuring allowing lenders to recover previously waived amounts if the borrower\'s financial position improves later. For retail personal loans, banks cannot enforce recompense unless it is explicitly specified in the written settlement agreement.'
    },
    {
      q: 'Can a bank or recovery agency demand money after a loan settlement?',
      a: 'No, once you fulfill the terms of a valid written settlement letter issued by an authorized bank official and receive a formal No Dues Certificate, the bank and its agents have no legal authority to demand further payment. Any subsequent collection attempt constitutes unfair trade practice and harassment under RBI guidelines.'
    },
    {
      q: 'What happens if the bank sells my settled loan to an Asset Reconstruction Company (ARC)?',
      a: 'If a bank transfers or assigns a debt to an ARC under Section 5 of SARFAESI Act after issuing a settlement letter and No Dues Certificate, the assignment is legally void. You can present your settlement agreement, payment receipts, and NDC to nullify the ARC claim and file an RBI Ombudsman complaint.'
    },
    {
      q: 'What is the legal importance of a No Dues Certificate (NDC) or Deed of Release?',
      a: 'An NDC or Deed of Release serves as conclusive legal evidence under the Indian Evidence Act that your contractual obligations towards the lender are completely extinguished. It shields you from future civil recovery suits, third-party collection attempts, and legal notices under Section 138 or Section 25.'
    },
    {
      q: 'How does a loan settlement affect my CIBIL score?',
      a: 'A loan settlement leads to the credit account being flagged with a "Settled" status on CIBIL, Experian, CRIF High Mark, and Equifax reports. This status can reduce your credit score by 75 to 120 points and remains visible for up to seven years unless actively upgraded to "Closed".'
    },
    {
      q: 'Can a settled loan status in CIBIL be converted to "Closed"?',
      a: 'Yes, under Section 21 of the Credit Information Companies (Regulation) Act, 2005, a borrower can later pay the waived differential amount to the lender and obtain a revised No Dues Certificate, prompting the bank to update credit bureaus to reflect a fully "Closed" status.'
    },
    {
      q: 'Does loan settlement protect me from cheque bounce or NACH bounce legal notices?',
      a: 'Yes, executing a formal settlement and fulfilling agreed payment milestones requires the bank to withdraw all pending legal notices and criminal complaints under Section 138 of the Negotiable Instruments Act and Section 25 of the Payments and Settlement Systems Act.'
    },
    {
      q: 'Can an employer or government agency disqualify me for having a settled loan?',
      a: 'Having a settled loan does not disqualify you from private employment or government recruitment, as it is a civil financial matter. However, certain specialized roles in public sector banking, defense, and intelligence may conduct stringent credit background checks.'
    },
    {
      q: 'What essential clauses must be verified in a bank loan settlement letter?',
      a: 'A valid settlement letter must state the exact compromise amount, payment due dates, explicit waiver of balance principal and penal interest, commitment to withdraw legal proceedings, cancellation of post-dated cheques or NACH mandates, and a timeline for issuing the final No Dues Certificate.'
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5 text-blue-200" />
            <span>Banking Jurisprudence &amp; Debt Resolution Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Does Loan Settlement Mean Debt is Forgiven?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Understand the critical legal distinction between debt waiver and forgiveness in India. Learn how the Right of Recompense operates, how to prevent post-settlement ARC recovery claims, and how to secure an unconditional No Dues Certificate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Verify Settlement Terms &amp; Get Legal Protection</span>
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
                  Governed by the Indian Contract Act 1872, RBI Fair Practices Code, and CICRA 2005.
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
                <span>EXECUTIVE BRIEF: LOAN SETTLEMENT &amp; LEGAL FINALITY</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-bold">Compromise vs. Forgiveness:</strong> Settlement legally waives unpaid dues under Section 63 of the Indian Contract Act rather than erasing debt without record.</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-bold">Right of Recompense:</strong> Recompense clauses apply strictly to corporate debt restructuring and cannot be enforced on retail personal loans unless explicitly signed.</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-bold">No Dues Certificate (NDC):</strong> An authentic, seal-stamped NDC permanently extinguishes the bank&apos;s contractual claim and bars all future collection.</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-bold">ARC Portfolio Protection:</strong> Any debt transfer or assignment to Asset Reconstruction Companies post-settlement is legally void under Section 5 SARFAESI.</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-bold">CIBIL Status Upgrade:</strong> An account marked as &quot;Settled&quot; can later be converted to &quot;Closed&quot; under Section 21 of CICRA 2005.</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-bold">Legal Notice Compounding:</strong> Lenders are legally obligated to withdraw all Section 138 NI Act and Section 25 PSSA proceedings upon settlement.</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-bold">Direct Account Remittance:</strong> Settlement funds must always be paid directly into the official bank loan account, never to third-party agency accounts.</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-bold">RBI Fair Practices Code:</strong> Regulated lenders must issue sanction letters on official letterheads and release all loan documents within 30 days.</span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics, Forgiveness vs Settlement vs Write-Off */}
            <section id="debt-forgiveness-vs-settlement" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Debt Economics &amp; NPA Dynamics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Forgiveness vs. Loan Settlement vs. Accounting Write-Off
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When borrowers in India face severe financial hardship due to job loss, business insolvency, or unexpected medical crises, they often wonder whether reaching an agreement with their bank means their remaining unpaid debt is entirely forgiven. In legal jurisprudence and commercial banking practice, debt forgiveness, loan settlement, and accounting write-offs are distinct concepts governed by different statutory rules and operational frameworks.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                True debt forgiveness is a unilateral, voluntary act where a creditor erases an outstanding liability without requiring any financial compromise from the debtor, typically observed in government-sponsored agricultural relief schemes. In sharp contrast, a retail loan settlement is a bilateral contract executed under Section 63 of the Indian Contract Act, 1872, where the lender accepts a mutually agreed lump sum in full satisfaction of a larger debt. The bank agrees to waive a substantial portion of accumulated penal interest and a fraction of the principal, but the transaction is recorded as a negotiated loss rather than an absolute erasure of liability.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                From a banking balance sheet perspective, when an unsecured personal loan or credit card debt crosses the 90-day overdue threshold, it transitions through Special Mention Account stages into a Non-Performing Asset (NPA). Under Reserve Bank of India prudential provisioning norms, banks must set aside 15% to 100% of their Tier-1 capital against non-performing assets. Because retail personal loans lack underlying physical collateral under the SARFAESI Act, banks face mounting provisioning burdens and prohibitive legal expenses if they pursue civil recovery suits. To optimize capital adequacy ratios and recover immediate cash liquidity, financial institutions actively enter into One-Time Settlements (OTS). While the unpaid differential is written off internally on the bank ledger, the settlement legally discharges the borrower from any further debt collection once an authentic No Dues Certificate is issued.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analytics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown &amp; Settlement Math: Principal vs. Penal Inflation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on an unsecured personal loan or revolving credit card, the total claimed balance escalates exponentially due to compounding penal charges, overdue interest, and administrative processing fees. Understanding how this balance is constructed is essential to evaluating a genuine compromise settlement.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Standard retail loan contracts authorize lenders to levy compounding penal interest ranging from 24% to 36% per annum over and above baseline interest rates of 12% to 18%. Over a typical 180-day default cycle, these ancillary charges can inflate the bank&apos;s demanded payoff to 140% to 170% of the actual disbursed principal. During structured One-Time Settlement negotiations, debt resolution specialists conduct a forensic audit of the loan ledger to separate the core principal from artificial interest inflation, allowing borrowers to negotiate a realistic settlement figure between 40% and 55% of the overall exposure.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    Representative 180-Day NPA Debt Inflation Breakdown
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Original Disbursed Principal Balance:</span>
                      <span className="font-bold text-slate-900">₹6,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Accrued Contractual Interest (180 Days):</span>
                      <span className="font-bold text-slate-900">₹54,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Compounded Penal Charges (2% monthly):</span>
                      <span className="font-bold text-red-600">₹72,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Late Payment, Cheque Bounce &amp; Legal Fees:</span>
                      <span className="font-bold text-slate-900">₹38,000</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Total Inflated Bank Demand:</span>
                      <span className="text-red-700">₹7,64,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    Target Compromise Settlement Outcome
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Target Compromise Settlement Sum (45%):</span>
                      <span className="font-bold text-emerald-700">₹2,70,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Total Waived Differential Amount:</span>
                      <span className="font-bold text-slate-900">₹4,94,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Penal Interest &amp; Charges Waiver:</span>
                      <span className="font-bold text-emerald-700">100% Waived</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Principal Debt Relief Percentage:</span>
                      <span className="font-bold text-slate-900">55.00%</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Final Legal Discharge Status:</span>
                      <span className="text-emerald-700">Full &amp; Final (NDC Issued)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="resolution-options-comparison-table" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Legal Resolution Matrix: OTS vs. Restructuring vs. Court Litigation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When evaluating how to handle unpaid retail personal loans or credit card accounts, borrowers must compare the financial and legal ramifications of each available resolution pathway:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5">Resolution Route</th>
                      <th className="p-3.5">Governing Framework</th>
                      <th className="p-3.5">Financial Obligation</th>
                      <th className="p-3.5">Credit Bureau Impact</th>
                      <th className="p-3.5">Legal Finality &amp; NDC</th>
                      <th className="p-3.5 text-[#1886ff]">Strategic Verdict</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="p-3.5">Indian Contract Act, Sec 63 &amp; RBI Board Policy</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">40% to 55% of Principal (Waives Penal Interest)</td>
                      <td className="p-3.5">Marked as &quot;Settled&quot; (Can be upgraded to Closed)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Immediate absolute discharge with formal NDC</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Optimal for severe, permanent financial hardship</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Loan Restructuring</td>
                      <td className="p-3.5">RBI Prudential Resolution Framework 2019</td>
                      <td className="p-3.5">100% Principal + Extended Tenor Interest</td>
                      <td className="p-3.5">Marked as &quot;Restructured&quot; (Mild negative flag)</td>
                      <td className="p-3.5">Conditional upon completing extended multi-year EMIs</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Best if financial disruption is strictly temporary</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Civil Court Litigation (Order 37 CPC)</td>
                      <td className="p-3.5">Code of Civil Procedure, 1908</td>
                      <td className="p-3.5 text-red-700 font-semibold">100% Principal + Court Interest + Legal Fees</td>
                      <td className="p-3.5">Marked as &quot;Suit Filed / Decreed&quot; (Severe flag)</td>
                      <td className="p-3.5">Concluded only upon final judgment and decree execution</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Costly and drawn-out for both bank and borrower</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">National Lok Adalat</td>
                      <td className="p-3.5">Legal Services Authorities Act, 1987</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Negotiated compromise sum approved by bench</td>
                      <td className="p-3.5">Marked as &quot;Settled via Lok Adalat&quot;</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Final non-appealable award with full court sanctity</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Excellent institutional route during quarterly sittings</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Inaction / Continued Default</td>
                      <td className="p-3.5">Statutory Default &amp; Limitation Act, 1963</td>
                      <td className="p-3.5 text-red-700 font-semibold">Compounding liability at 24% to 36% p.a.</td>
                      <td className="p-3.5 text-red-700 font-semibold">Marked as &quot;Written Off / Wilful Default&quot;</td>
                      <td className="p-3.5 text-red-700 font-semibold">Zero finality; persistent recovery agency harassment</td>
                      <td className="p-3.5 text-red-700 font-semibold">High risk: triggers statutory notices and asset attachment</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-scoring-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Technical CIBIL Algorithm, Scoring Weights &amp; Bureau Status Upgrade
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), all commercial banks and non-banking financial companies operating in India are statutorily required to submit monthly account updates to the four authorized credit information companies: TransUnion CIBIL, Experian India, CRIF High Mark, and Equifax. Understanding how credit scoring algorithms treat a settled loan clarifies why settlement is not recorded as clean debt forgiveness.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The standard CIBIL scoring model evaluates five mathematical components: Payment History carries the largest weighting at 35%, followed by Credit Exposure and Utilization at 30%, Credit History Length at 15%, Credit Mix at 10%, and Recent Credit Inquiries at 10%. When an account default reaches 90+ Days Past Due (DPD) and is finalized via a compromise settlement, the lender reports the account status as &quot;Settled&quot; (or &quot;Post-Write-off Settled&quot;). This reporting causes an immediate score drop of 75 to 120 points and remains visible on credit bureau records for up to seven years.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, a crucial statutory remedy exists under Section 21 of CICRA 2005. A &quot;Settled&quot; status confirms that the borrower no longer owes any outstanding monetary balance to the bank. If the borrower&apos;s financial position recovers in subsequent years, they can approach the original lending institution to pay the previously waived differential amount. Upon receipt of this balance, the bank issues a revised No Dues Certificate and updates the credit bureaus to change the account status from &quot;Settled&quot; to &quot;Closed&quot;, completely restoring long-term borrowing eligibility.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Legal Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Legal Blueprint: Loan Settlement Finality &amp; NDC Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Examine this visual blueprint illustrating the legal progression from loan default and NPA provisioning to structured settlement, demystifying the Right of Recompense, securing the No Dues Certificate, and blocking third-party ARC claims:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/does-loan-settlement-mean-debt-is-forgiven.jpg"
                    alt="Does Loan Settlement Mean Debt Is Forgiven Legal Finality Workflow Diagram"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Architecture • Indian Contract Act 1872 &amp; RBI Directives</span>
                  <a
                    href="/images/infographics/does-loan-settlement-mean-debt-is-forgiven.jpg"
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

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-settlement-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Defense SOP</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Standard Operating Procedure: 6 Stages to Secure Unchallengeable Legal Finality
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To guarantee that your loan settlement achieves permanent legal closure and cannot be reopened by future collection agencies or asset reconstruction companies, follow this sequential 6-stage protocol:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 1–7</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Forensic Debt Ledger &amp; Contractual Audit
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Obtain a certified loan account ledger under the Bankers&apos; Books Evidence Act, 1891. Segregate core principal from compounding penal interest, bounce charges, and unapproved administrative fees to establish your baseline liability.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 8–15</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Hardship Dossier Compilation &amp; Financial Evidence
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Assemble medical summaries, layoff letters, bank statements, or income tax records. Documenting genuine financial hardship substantiates bona fide insolvency, enabling maximum compromise concessions from the bank credit committee.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 16–30</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Credit Committee Representation &amp; Right of Recompense Waiver
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Submit a formal compromise proposal to the bank Competent Authority. Explicitly demand total waiver of penal charges and stipulate that the settlement represents final satisfaction with zero future Right of Recompense.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 31–45</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Bilateral Negotiations &amp; Principal Compromise Structuring
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Negotiate directly with the bank recovery management committee. Counter aggressive demands by citing RBI provisioning write-off mandates, structuring an agreed settlement sum between 40% and 55% of the principal.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 46–55</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Formal Settlement Letter Vetting &amp; Legal Authentication
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Obtain an official settlement sanction letter on authentic bank letterhead. Verify the compromise amount, payment due dates, complete balance waiver, Section 138/25 withdrawal terms, and 30-day NDC delivery timeline.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 56–75</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Direct Account Remittance, NDC Issuance &amp; Bureau Archival
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Deposit funds directly into your loan account via RTGS/NEFT. Collect the seal-stamped No Dues Certificate and Deed of Release to permanently eliminate future claims and update credit bureau records.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections &amp; Legal Defenses</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Defenses, Borrower Rights &amp; Regulatory Protections
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A common fear among borrowers is whether creditors can initiate criminal action or coercive recovery during or after a settlement. Indian statutory law provides explicit legal safeguards that protect borrowers who enter into legitimate compromise agreements:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <FileCheck2 className="w-4 h-4" />
                    <span>Section 25 PSSA Electronic Mandate Defense</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Failed NACH or auto-debit mandates trigger Section 25 notices. Executing a formal compromise settlement requires the lender to cancel active mandates and formally withdraw all pending complaints upon payment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Section 138 NI Act Cheque Bounce Protections</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cheque dishonour complaints under Section 138 are compoundable under Section 147. A valid settlement letter must include covenants requiring the bank to file compounding memos and return all security cheques.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 21 &amp; 12(5) Arbitration Ineligibility</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unilateral arbitrator appointments by lenders are void under Supreme Court <em>Perkins Eastman</em> and <em>TRF Ltd.</em> rulings. Citing Section 12(5) blocks ex-parte awards during active settlement discussions.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <ShieldAlert className="w-4 h-4" />
                    <span>RBI Fair Practices Code Anti-Harassment Mandate</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI prohibits abusive collection conduct, workplace visits, and calls outside 8:00 AM to 7:00 PM. Continued recovery harassment post-settlement is punishable under the RBI Integrated Ombudsman Scheme.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Redressal Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. The 3-Tier Grievance Redressal &amp; Ombudsman Escalation Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a bank delays issuing your No Dues Certificate, fails to update credit bureau records, or permits recovery agents to harass you post-settlement, escalate through this structured 3-tier regulatory hierarchy:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Grievance Redressal Officer (GRO)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 7–10 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Internal Bank Branch &amp; Grievance Desk Notification
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Submit a written complaint to the bank Grievance Redressal Officer attaching the signed settlement letter and payment receipts to demand immediate NDC delivery and cessation of recovery contact.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: Bank Principal Nodal Officer (PNO)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 14–21 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Apex Institutional Nodal Officer Escalation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If unresolved after 10 days, escalate to the Principal Nodal Officer. Demand core banking account closure and place the institution on notice for regulatory non-compliance.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: Reserve Bank of India Integrated Ombudsman
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 30 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Statutory Complaint via RBI CMS Portal (cms.rbi.org.in)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    File a statutory complaint on cms.rbi.org.in under the RBI Integrated Ombudsman Scheme 2021 for binding directions and compensation for delayed documents or harassment.
                  </p>
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
                8. Chronological Resolution Timeline: From Initial Default to Legal Closure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the chronological milestones of debt resolution allows borrowers to execute defenses and negotiate compromise settlements at optimal intervention points:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5">Milestone Timeline</th>
                      <th className="p-3.5">Institutional Status</th>
                      <th className="p-3.5">Legal Event &amp; Risk</th>
                      <th className="p-3.5 text-[#1886ff]">Strategic Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Days 1–30</td>
                      <td className="p-3.5">SMA-0 Classification</td>
                      <td className="p-3.5">First missed EMI, soft reminder SMS &amp; automated calls</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Assess cash flow; determine if hardship is temporary or structural</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Days 31–90</td>
                      <td className="p-3.5">SMA-1 / SMA-2 Alert</td>
                      <td className="p-3.5">Compounding penal interest levies, collection agency assignment</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Request debt restructuring or compile comprehensive hardship dossier</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Day 90+</td>
                      <td className="p-3.5">NPA Classification</td>
                      <td className="p-3.5">Bank sets aside 15%+ capital provisioning; legal notices issued</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Engage legal debt resolution specialists to open OTS dialogue</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Months 4–5</td>
                      <td className="p-3.5">OTS Negotiation Window</td>
                      <td className="p-3.5">High bank incentive to settle prior to quarter-end balance audit</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Secure written compromise letter with 40%–55% settlement target</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Month 6</td>
                      <td className="p-3.5">Account Extinguishment</td>
                      <td className="p-3.5">Remittance processed; legal proceedings formally withdrawn</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Collect authentic No Dues Certificate &amp; verify CIBIL update</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-loan-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Case Studies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: Multi-Lender Portfolios, Layoffs &amp; ARC Assignments
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Settlement mechanics and legal protections adapt to specific debt structures and distress scenarios:
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#1886ff]" />
                    Multi-Lender Portfolio Consolidation &amp; Cross-Default Risks
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Settling one account can trigger credit limit reductions across active cards. Executing a synchronized settlement strategy across all lenders prevents aggressive recovery actions by secondary creditors.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Corporate Layoffs &amp; Sudden Loss of Primary Household Income
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Furnishing severance notices and provident fund statements documents sudden loss of income, allowing debt resolution specialists to secure maximum compromise waivers from credit committees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Sole Proprietorship Personal Guarantees &amp; Business Overdrafts
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Personal guarantees for business loans must be explicitly discharged in the settlement agreement, confirming zero residual liability enforceable against personal assets.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Unauthorized Debt Assignment to Asset Reconstruction Companies (ARCs)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If a bank assigns a settled loan to an ARC under Section 5 SARFAESI, presenting your settlement letter and No Dues Certificate legally invalidates the assignment immediately.
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
                Frequently Asked Questions on Loan Settlement &amp; Debt Finality
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
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Judicial References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 63 (Remission of performance and satisfaction of contract by agreement), Ministry of Law and Justice.
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Sections 19, 20, and 21 (Dispute resolution and credit report accuracy).
                </li>
                <li>
                  <strong>Reserve Bank of India Master Directions:</strong> Master Direction on Fair Practices Code for Lenders and Grievance Redressal Mechanism (Updated 2026).
                </li>
                <li>
                  <strong>Payments and Settlement Systems Act, 2007:</strong> Section 25 (Dishonour of electronic funds transfer and compoundable defenses).
                </li>
                <li>
                  <strong>Negotiable Instruments Act, 1881:</strong> Sections 138 and 147 (Cheque dishonour and compounding of offenses).
                </li>
                <li>
                  <strong>SARFAESI Act, 2002:</strong> Section 5 (Acquisition of rights or interest in financial assets by Asset Reconstruction Companies).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1">
                    <span>Reserve Bank of India (rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1">
                    <span>RBI Ombudsman (cms.rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1">
                    <span>TransUnion CIBIL (cibil.com)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1">
                    <span>India Code Legislative Portal (indiacode.nic.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1">
                    <span>National Legal Services Authority (nalsa.gov.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1">
                    <span>National Cyber Crime Portal (cybercrime.gov.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After Settlement
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Protection
                  </Link>
                  <Link href="/bank-demanding-full-payment-for-loan-closure" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Demanding Full Payment
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Improve CIBIL After Settlement
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
                Specialized in retail banking dispute resolution, One-Time Settlement (OTS) structuring, ARC defense rebuttals, and CIBIL status remediation under RBI and CICRA guidelines.
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
                  Need Loan Settlement Verification?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution experts negotiate authentic bank settlement letters, eliminate hidden recompense clauses, stop recovery harassment, and secure your No Dues Certificate.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Verify Settlement Terms &amp; Get Legal Protection
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
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Loan to Closed Status
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full step-by-step CIBIL repair blueprint &rarr;</span>
                </Link>

                <Link
                  href="/get-noc-after-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    How to Get NOC / NDC After Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Mandatory document checklist &rarr;</span>
                </Link>

                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice for Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Sec 138 &amp; 25 defense strategy &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
