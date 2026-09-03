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
  BookOpen,
  Building2,
  DollarSign,
  Check,
  Lock,
  Phone,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  Sparkles,
  Gavel,
  Landmark,
  FileCheck,
  Percent,
  ShieldAlert
} from 'lucide-react';

export default function WillBankWaiveOffInterestOnPersonalLoanClient() {
  const [activeId, setActiveId] = useState<string>('executive-summary');
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
    { id: 'executive-summary', label: 'Executive Brief & Crux' },
    { id: 'debt-economics-npa-dynamics', label: '1. Debt Economics & Waiver Norms' },
    { id: 'financial-breakdown-settlement-math', label: '2. Penal Inflation & Settlement Math' },
    { id: 'resolution-comparison-matrix', label: '3. Relief Options Comparison Matrix' },
    { id: 'technical-cibil-scoring-math', label: '4. CIBIL Impact & CICRA Remedy' },
    { id: 'infographic-overview', label: 'Visual Waiver Blueprint' },
    { id: 'step-by-step-ots-sop', label: '5. 6-Stage Interest Waiver SOP' },
    { id: 'statutory-notice-defense', label: '6. Notice Defense & Legal Protections' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance Redressal' },
    { id: 'chronological-timeline-milestones', label: '8. 180-Day NPA Resolution Path' },
    { id: 'specialized-loan-scenarios', label: '9. Complex Financial Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authority' }
  ];

  const faqs = [
    {
      q: 'Will a bank waive off interest and penal charges on a personal loan?',
      a: 'Yes. Under the RBI Fair Lending Practice directives and Compromise Settlement guidelines, banks can waive 100% of accumulated penal interest, bounce charges, and unbundled late fees during a negotiated One-Time Settlement (OTS).'
    },
    {
      q: 'What is the RBI rule on penal interest capitalization?',
      a: 'The RBI Master Direction on Fair Lending Practices mandates that lenders cannot capitalize penal charges into principal loan balances or charge compounding interest on overdue amounts, limiting penalties strictly to non-capitalized operational charges.'
    },
    {
      q: 'Can I get a 100% waiver on normal contractual interest as well?',
      a: 'In standard distress settlements, banks waive all accrued penal charges and a substantial portion of unbilled future and past contractual interest, anchoring the settlement figure strictly around 40% to 55% of the outstanding principal.'
    },
    {
      q: 'How do I request an interest waiver from my bank?',
      a: 'Submit a formal Hardship Petition directly to the bank\'s Stressed Assets Resolution Branch (SARB) or Circle Credit Committee, accompanied by documentary proof of financial distress such as job termination, business loss, or medical records.'
    },
    {
      q: 'Why do recovery agents refuse to discuss interest waivers?',
      a: 'Third-party collection agents operate on commissions tied to total cash recovered and possess zero credit authority to approve waivers. Demanding 100% full payment is their standard script, requiring borrowers to escalate directly to bank officials.'
    },
    {
      q: 'Can the bank seize my home or assets if I default on a personal loan?',
      a: 'No. Personal loans are unsecured credit facilities exempt from summary asset attachment or auction under Section 31(g) of the SARFAESI Act, leaving lenders with civil negotiation or standard court remedies rather than immediate seizure.'
    },
    {
      q: 'How does a loan interest waiver settlement affect my CIBIL score?',
      a: 'The loan is reported to credit bureaus as Settled, which temporarily lowers your credit score. However, it liquidates the default balance to zero, halting compounding negative marks and allowing credit rebuilding to 750+ within 12 to 24 months.'
    },
    {
      q: 'What should I check in the settlement letter before paying the bank?',
      a: 'Ensure the Settlement Sanction Letter is issued on official bank letterhead, clearly states the exact compromised amount, confirms 100% waiver of remaining balance and penal fees, and explicitly promises a No Dues Certificate upon payment.'
    },
    {
      q: 'What legal defense protects borrowers from NACH bounce notices?',
      a: 'Under Section 25 of the Payment and Settlement Systems Act (PSSA), borrowers facing financial distress can issue a written revocation of NACH auto-debit mandates, preventing allegations of willful evasion and restricting proceedings to civil settlement.'
    },
    {
      q: 'What is the difference between a Settlement Sanction Letter and a No Dues Certificate?',
      a: 'A Settlement Sanction Letter is the bank\'s formal agreement outlining the discounted payoff terms and payment deadline. A No Dues Certificate (NDC) is the statutory final discharge issued after payment, confirming zero pending liability.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-16 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-blue-100 text-xs font-bold tracking-wide uppercase mb-4 border border-white/15">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
            <span>RBI FAIR LENDING DIRECTIVES &amp; COMPROMISE SETTLEMENT FRAMEWORK</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight leading-tight">
            Will Bank Waive Off Interest on Personal Loan?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Borrowers battling financial distress can legally eliminate compounding penal interest, bounce charges, and unbundled late fees. Understand the regulatory mechanics under RBI Master Directions and discover how to secure up to 100% interest write-offs through structured compromise settlements.
          </p>

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              <span>Request Personal Loan Interest Waiver</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP COMPONENT */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT */}
      <div className="w-full max-w-[1720px] mx-auto px-4 md:px-8 py-8 md:py-10">
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
                  <span>Statutory Interest Waiver</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected by RBI Fair Lending Code, SARFAESI Act &amp; CICRA 2005.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-7 md:space-y-8 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="executive-summary"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 shadow-xs space-y-3.5 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: STATUTORY INTEREST &amp; PENALTY WAIVERS</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-normal">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">RBI Non-Capitalization Rule:</strong> Lenders cannot capitalize penal interest into principal or compound penalties.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">100% Penal Fee Waivers:</strong> Banks routinely write off 100% of accumulated late fees, penal interest, and bounce charges.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Contractual Interest Haircuts:</strong> Credit committees grant substantial interest concessions during compromise settlements.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">SARFAESI Immunity:</strong> Unsecured personal loans are legally exempt from property attachment under Section 31(g).
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">NPA Provisioning Leverage:</strong> 90+ DPD defaults trigger 100% bank provisioning, incentivizing one-time cash recovery.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Direct Bank Escalation:</strong> Bypass commission-driven collection agents to negotiate with the Stressed Assets Branch.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Documented Hardship Proof:</strong> Financial distress records eliminate willful default assumptions and unlock OTS terms.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">40% to 55% Settlement Target:</strong> Genuine hardship cases consistently resolve at 40% to 55% of the authentic principal.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Mandatory No Dues Certificate:</strong> Closure requires a verified bank sanction letter and stamped NDC for credit restoration.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: DEBT ECONOMICS & NPA DYNAMICS */}
            <section id="debt-economics-npa-dynamics" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  1. Debt Economics &amp; NPA Dynamics: Why Banks Agree to Waive Interest
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                When unexpected financial crises strike, borrowers frequently ask whether commercial banks and non-banking financial companies (NBFCs) possess the legal flexibility to waive interest on personal loans. The answer is an emphatic yes. Indian banking jurisprudence and the Reserve Bank of India regulatory framework explicitly empower lending institutions to grant comprehensive interest waivers, eliminate penal charges, and negotiate deep compromise settlements for distressed borrowers.
              </p>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Understanding why a commercial bank agrees to waive interest requires analyzing the institutional economics of Non-Performing Assets (NPAs). When a borrower defaults on monthly installments, the account transitions through Special Mention Account stages: SMA-0 (1 to 30 days overdue), SMA-1 (31 to 60 days overdue), and SMA-2 (61 to 90 days overdue). Once delinquency crosses the critical 90-day threshold, the RBI Prudential Framework on Resolution of Stressed Assets mandates that the lender classify the account as a Non-Performing Asset.
              </p>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Under stringent RBI provisioning norms, banks are required to set aside capital reserves ranging from 15% to 100% of the loan value out of their Tier-1 capital. Furthermore, because personal loans are unsecured facilities lacking tangible collateral, banks are stripped of summary enforcement mechanisms. Under Section 31(g) of the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002, unsecured credit accounts are entirely exempt from property seizure or residential auction. Confronted with mounting legal expenditures, lengthy civil litigation, and trapped provisioning capital, the bank credit committee faces a compelling commercial incentive to waive accrued interest and accept a swift cash compromise settlement.
              </p>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Percent className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  2. Financial Breakdown: Unbundling Penal Inflation &amp; Settlement Math
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                When a loan enters default, bank recovery statements rapidly inflate due to aggressive automated billing algorithms. Lenders attach compounding penal interest rates ranging between 24% and 36% per annum, repetitive monthly NACH bounce charges, late payment administrative penalties, and applicable Goods and Services Tax (GST). Within six to twelve months of non-payment, the nominal ledger balance frequently balloons to 150% or 180% of the original principal borrowed.
              </p>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                However, this inflated ledger amount is largely artificial. The Reserve Bank of India Master Direction on Fair Lending Practice - Penal Charges in Loan Accounts clearly establishes that penal charges must be levied strictly as non-capitalized operational penalties rather than compounded interest. In any formal compromise negotiation, an expert forensic ledger audit unbundles the raw principal from compounding penalties. Once these extraneous charges are stripped away, the authentic baseline is established, allowing the borrower to negotiate an aggressive One-Time Settlement (OTS) targeting 40% to 55% of the true principal balance.
              </p>

              {/* Calculation Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3.5">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Representative 180-Day Personal Loan Interest Waiver &amp; OTS Breakdown
                    </h3>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                    Waiver Model
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block">Original Loan Disbursed</span>
                    <span className="text-sm font-extrabold text-slate-900">₹12,00,000</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block">Principal at Default</span>
                    <span className="text-sm font-extrabold text-slate-900">₹9,40,000</span>
                  </div>

                  <div className="p-3 rounded-xl bg-red-50/70 border border-red-100">
                    <span className="text-red-600 block">Bank Inflated Demand</span>
                    <span className="text-sm font-extrabold text-red-700">₹15,80,000</span>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100">
                    <span className="text-amber-700 block">Penal Charges &amp; Overdue Interest</span>
                    <span className="text-sm font-extrabold text-amber-800">₹6,40,000 (100% Waived)</span>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                    <span className="text-emerald-700 block">Sanctioned OTS Payoff</span>
                    <span className="text-sm font-extrabold text-emerald-800">₹4,70,000 (50% Principal)</span>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                    <span className="text-[#1886ff] block">Total Financial Relief</span>
                    <span className="text-sm font-extrabold text-blue-900">₹11,10,000 (70.2%)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="resolution-comparison-matrix" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  3. Resolution Matrix: Comparing Interest Waiver &amp; Settlement Pathways
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                When seeking relief from mounting loan dues, borrowers have several procedural avenues available under Indian banking and legal frameworks. Evaluating each option against financial savings, legal finality, and credit score implications is critical before executing a resolution strategy.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left border-collapse text-xs divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 min-w-[140px]">Resolution Option</th>
                      <th className="p-3 min-w-[150px]">Interest &amp; Penalty Waiver</th>
                      <th className="p-3 min-w-[140px]">Payoff Requirement</th>
                      <th className="p-3 min-w-[150px]">Legal Discharge Status</th>
                      <th className="p-3 min-w-[130px]">Strategic Verdict</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-[#1886ff]">Direct OTS via SARB</td>
                      <td className="p-3">100% waiver on penal fees + 45%-60% principal haircut.</td>
                      <td className="p-3 font-semibold text-slate-900">40% to 55% lump sum.</td>
                      <td className="p-3 text-emerald-700 font-semibold">Complete release with stamped NDC.</td>
                      <td className="p-3 font-bold text-emerald-700">Optimal for severe distress.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Loan Restructuring / Moratorium</td>
                      <td className="p-3">Zero principal waiver; interest capitalized over longer tenor.</td>
                      <td className="p-3">100% principal + higher total interest.</td>
                      <td className="p-3">Modified repayment schedule; debt remains live.</td>
                      <td className="p-3 font-semibold text-amber-700">Viable only if income is intact.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Paying Collection Agency Demand</td>
                      <td className="p-3">Zero waiver; full compounding penalties enforced.</td>
                      <td className="p-3 text-red-600 font-semibold">100% inflated ledger sum.</td>
                      <td className="p-3 text-red-600">High risk of incomplete ledger closure.</td>
                      <td className="p-3 font-semibold text-red-600">Severe financial drain.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Lok Adalat Compromise</td>
                      <td className="p-3">Partial interest waiver (15% to 30% reduction).</td>
                      <td className="p-3">70% to 85% of outstanding balance.</td>
                      <td className="p-3">Non-appealable consent decree passed.</td>
                      <td className="p-3 font-semibold text-blue-700">Effective for small loan balances.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Adversarial Civil / DRT Defense</td>
                      <td className="p-3">Subject to multi-year judicial litigation.</td>
                      <td className="p-3">Full claim contested in tribunal.</td>
                      <td className="p-3">Final decree after protracted court trial.</td>
                      <td className="p-3 font-semibold text-slate-600">High legal overhead costs.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: TECHNICAL CIBIL ALGORITHM & SCORING MATH */}
            <section id="technical-cibil-scoring-math" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  4. Technical CIBIL Algorithm &amp; Section 21 CICRA Credit Restoration
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Borrowers exploring an interest waiver must understand how credit bureaus evaluate settled debt obligations. The TransUnion CIBIL scoring engine weighs credit profiles across five distinct mathematical parameters: Payment History (35%), Credit Exposure and Utilization (30%), Credit Mix and Diversity (15%), Recent Credit Inquiries (10%), and Leverage Duration (10%).
              </p>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                When a borrower defaults past 90 DPD, the bureau reflects compounding overdue milestones, plunging credit scores into the distressed 520 to 600 band. Executing a compromise settlement with a complete interest waiver updates the account status from Delinquent to Settled and reduces the outstanding balance to zero. While a Settled remark causes a transient initial score depression, it arrests continuous 30-day degradation cycles and eliminates active legal liability.
              </p>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), credit institutions must update loan records within 30 days of closure. Once the official No Dues Certificate is logged across CIBIL, Experian, CRIF High Mark, and Equifax, borrowers can utilize secured credit lines (such as fixed-deposit-backed credit cards) to systematically rebuild an unblemished payment trajectory, regaining a prime 750+ CIBIL score within 12 to 24 months.
              </p>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Visual Blueprint: The Statutory Interest Waiver &amp; Settlement Architecture
                </h2>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 sm:p-5 overflow-hidden space-y-3">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                  <Image
                    src="/images/infographics/will-bank-waive-off-interest-on-personal-loan.jpg"
                    alt="Will Bank Waive Off Interest on Personal Loan Legal Architecture Blueprint"
                    fill
                    sizes="(max-width: 1200px) 100vw, 900px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Authoritative visual workflow: Forensic audit, RBI penalty removal, SARB hardship submission, and stamped NDC closure.</span>
                  <a
                    href="/images/infographics/will-bank-waive-off-interest-on-personal-loan.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-bold hover:underline inline-flex items-center gap-1 flex-shrink-0"
                  >
                    <span>High-Res</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-ots-sop" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  5. Step-by-Step SOP: The 6-Stage Statutory Interest Waiver Protocol
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Securing a 100% waiver on accrued penal charges and significant haircuts on contractual interest requires a disciplined, evidence-based operational approach. CredSettle implements a structured six-stage standard operating procedure designed to navigate institutional banking hierarchies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">01</span>
                    <h3 className="font-bold text-slate-900 text-sm">Forensic Ledger Audit &amp; Penalty Unbundling</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our legal team extracts comprehensive loan account statements, separating authentic disbursed principal from illegal capitalized penal interest, late fees, and bounce charges under the RBI Fair Lending Directives.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">02</span>
                    <h3 className="font-bold text-slate-900 text-sm">Distress Dossier &amp; Hardship Petition</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We compile verified documentary evidence, including salary reduction slips, corporate layoff notices, medical discharge summaries, and audited loss statements, proving total financial distress and eliminating willful default presumptions.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">03</span>
                    <h3 className="font-bold text-slate-900 text-sm">Bypassing Frontline Collection Agents</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We serve formal anti-harassment cease-and-desist notices under the RBI Fair Practices Code, immediately rerouting case discussions directly to the bank Stressed Assets Resolution Branch (SARB) or Circle Credit Head.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">04</span>
                    <h3 className="font-bold text-slate-900 text-sm">Circle Credit Committee Representation</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We present the hardship proposal directly to executive credit committees, leveraging mandatory Tier-1 provisioning burdens to negotiate a 100% penal waiver alongside a 40% to 55% principal settlement sanction.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">05</span>
                    <h3 className="font-bold text-slate-900 text-sm">Settlement Sanction Letter Legal Vetting</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We scrutinize the formal sanction letter on official bank letterhead, verifying that all interest waivers are permanent, repayment schedules are locked, and residual debt liabilities are irrevocably extinguished.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">06</span>
                    <h3 className="font-bold text-slate-900 text-sm">Direct Bank Remittance &amp; Stamped NDC Issuance</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Funds are deposited directly into the borrower loan account without intermediary escrow risks, followed by the immediate acquisition of the official No Dues Certificate and CIBIL status zero-balance updating.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & LEGAL RIGHTS */}
            <section id="statutory-notice-defense" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Gavel className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  6. Statutory Notice Defense &amp; Legal Rights of Defaulting Borrowers
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                During default periods, lenders frequently dispatch legal notices to exert psychological pressure on borrowers. Understanding your exact statutory rights under Indian banking legislation transforms an adversarial dispute into a structured compromise settlement negotiation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">Section 25 PSSA: NACH Mandate Revocation</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If automated electronic clearing mandates bounce due to insufficient balances, borrowers can formally revoke NACH mandate consent in writing under the Payment and Settlement Systems Act, 2007. A timely revocation removes criminal dishonest intention presumptions, restricting subsequent lender actions strictly to civil resolution forums.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <Gavel className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">Section 138 NI Act: Cheque Bounce Defense</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Where security cheques deposited at loan inception are presented for inflated default sums, borrowers can mount a robust defense proving that cheques were undated security instruments rather than crystallised legally enforceable liabilities. Section 138 proceedings are statutory compoundable offenses, providing fertile ground for pre-trial compromise settlements.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">Arbitration Defense: Perkins Eastman Precedent</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under landmark Supreme Court rulings in TRF Ltd. v. Energo Engineering Projects and Perkins Eastman Architects DPC v. HSCC (India) Ltd., a lending institution is legally prohibited from unilaterally appointing a sole arbitrator. Unilateral arbitration notices are voidable ab initio, compelling lenders to seek mutual compromise negotiations.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">DRT Thresholds &amp; RBI Fair Practices Protection</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Recovery of Debts Due to Banks and Financial Institutions (RDBFI) Act, Debt Recovery Tribunals (DRTs) maintain a strict monetary threshold of ₹20 Lakhs. Crucially, the RBI Fair Practices Code strictly prohibits recovery agent harassment, unannounced workplace visits, persistent calls outside 8 AM to 7 PM, or disclosing debt details to family members.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER ESCALATION MATRIX */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  7. 3-Tier Grievance Redressal &amp; Regulatory Escalation Matrix
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                If branch managers or recovery units refuse to entertain genuine hardship representations or persist with illegal penalty billing, borrowers can activate the statutory three-tier grievance redressal hierarchy established under RBI directives.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Level 1: 7-10 Days</span>
                  <h3 className="font-bold text-slate-900 text-sm">Bank Grievance Redressal Officer (GRO)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a formal written complaint detailing agent harassment, improper penal compounding, and your hardship waiver request to the bank designated internal GRO.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Level 2: 14-21 Days</span>
                  <h3 className="font-bold text-slate-900 text-sm">Principal Nodal Officer (PNO)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalate unresolved complaints to the bank Principal Nodal Officer and Zonal Credit Committee, seeking executive compromise approval under institutional OTS policies.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Level 3: 30 Days</span>
                  <h3 className="font-bold text-slate-900 text-sm">RBI Integrated Ombudsman</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a statutory regulatory complaint on the RBI CMS portal (cms.rbi.org.in) under the Reserve Bank - Integrated Ombudsman Scheme, 2021 for binding institutional mediation.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-timeline-milestones" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  8. Chronological Timeline: 180-Day NPA Resolution &amp; Interest Waiver Path
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Navigating loan resolution requires timing negotiations with institutional delinquency milestones. The timeline below illustrates the strategic progression from initial delinquency to final No Dues Certificate issuance.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left border-collapse text-xs divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 min-w-[110px]">Timeframe</th>
                      <th className="p-3 min-w-[130px]">Classification</th>
                      <th className="p-3 min-w-[200px]">Bank &amp; Collection Posture</th>
                      <th className="p-3 min-w-[200px]">Borrower Strategic Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-[#1886ff]">Days 1 to 30</td>
                      <td className="p-3 font-semibold">SMA-0 Delinquency</td>
                      <td className="p-3">Automated payment SMS reminders, IVR calls, and internal soft calling.</td>
                      <td className="p-3">Assess income prospects; determine restructuring vs. settlement strategy.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 31 to 90</td>
                      <td className="p-3 font-semibold">SMA-1 / SMA-2</td>
                      <td className="p-3">Third-party agency assignment; demanding 100% dues plus penal fees.</td>
                      <td className="p-3">Revoke NACH mandates; issue cease-and-desist; compile hardship proofs.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 91 to 120</td>
                      <td className="p-3 font-semibold text-amber-700">NPA Classification</td>
                      <td className="p-3">Tier-1 capital provisioning allocated; account transferred to SARB.</td>
                      <td className="p-3">Bypass agency entirely; submit forensic hardship petition to SARB.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 121 to 150</td>
                      <td className="p-3 font-semibold text-indigo-700">Credit Committee Review</td>
                      <td className="p-3">Evaluation of haircut threshold, recovery probability, and provisioning.</td>
                      <td className="p-3">Negotiate 100% penal interest waiver and 40% to 55% principal OTS terms.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 151 to 180</td>
                      <td className="p-3 font-semibold text-emerald-700">OTS Sanction &amp; Closure</td>
                      <td className="p-3">Issuance of official Settlement Sanction Letter on bank letterhead.</td>
                      <td className="p-3">Vet sanction letter, deposit settlement funds, obtain stamped NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-loan-scenarios" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  9. Specialized Real-World Scenarios: Complex Debt Resolution
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Financial distress rarely occurs in isolation. CredSettle designs tailored legal strategies to handle complex, multi-layered financial distress scenarios across diverse borrower backgrounds.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm">Multi-Lender Portfolio Consolidation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers juggling multiple unsecured personal loans and credit cards across various banks benefit from synchronized cross-lender settlement structuring. By sequencing negotiations based on statutory notice risk and provisioning timelines, total debt liabilities are reduced simultaneously without overlapping litigation.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm">Corporate Downsizing &amp; Medical Crises</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When income ceases abruptly due to corporate layoffs, business insolvency, or chronic medical emergencies, detailed documentary proofs eliminate all assumptions of willful default, compelling credit committees to grant maximum statutory interest waivers and extended compromise payoff windows.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm">Sole Proprietorship &amp; MSME Overdrafts</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Small business owners carrying personal collateral-free overdrafts and business installment loans can insulate their personal assets under Section 31(g) of the SARFAESI Act while negotiating commercial one-time settlements that reflect genuine commercial cash flow contraction.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm">Asset Reconstruction Company (ARC) Assignments</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When banks assign delinquent personal loan portfolios to ARCs under Section 5 of the SARFAESI Act, ARCs acquire the debt at steep discounts (often 20% to 30% of face value). This creates significant leverage to negotiate deep, permanent settlements well below original principal thresholds.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: COMPANY PROFILE COMPONENT */}
            <div id="company-profile" className="scroll-target pt-1">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  10. Frequently Asked Questions: Personal Loan Interest Waivers
                </h2>
              </div>

              <div className="space-y-2.5">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#1886ff] transition-colors text-xs sm:text-sm"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'transform rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="scroll-target space-y-3.5 pt-3 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  11. Statutory Citations &amp; Regulatory Authorities
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800"
                >
                  <span>RBI Master Directions</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800"
                >
                  <span>RBI Ombudsman</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800"
                >
                  <span>TransUnion CIBIL</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800"
                >
                  <span>India Code Legislation</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800"
                >
                  <span>NALSA Lok Adalat</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800"
                >
                  <span>Cyber Crime Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-1.5">Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-1.5">
                  <Link href="/bank-demanding-full-payment-for-loan-closure" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Demanding Full Payment
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
                  </Link>
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Settlement Letter
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-4 sticky top-6">
            
            {/* Card 1: Author Bio Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-sm hover:bg-blue-200 transition-colors flex-shrink-0"
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
                Specialized in banking compliance, loan dispute resolution, and NPA compromise negotiations across Indian banking forums.
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
              className="rounded-3xl p-5 text-white text-center space-y-3.5 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-2.5 py-0.5 rounded-full inline-block">
                  100% CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Seeking Loan Interest Waiver?
                </h3>
                <p className="text-blue-100 text-xs mt-1 leading-relaxed font-normal">
                  Our legal experts challenge illegal penal interest, present your distress dossier to bank credit committees, and secure up to 100% interest write-offs.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-2.5 px-4 rounded-full font-bold text-xs sm:text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Request Interest Waiver Defense
              </Link>
              <div className="pt-1 flex flex-col items-center justify-center gap-1 text-[11px] text-blue-200">
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
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2.5 text-xs">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-1.5 text-slate-600">
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
                  <span><strong>Pan-India Representation:</strong> Dedicated dispute specialists.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2.5 text-xs">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Related Legal Guides</h4>
              <div className="space-y-2">
                <Link
                  href="/bank-demanding-full-payment-for-loan-closure"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Demanding Full Payment
                  </p>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">Full demand defense guide &rarr;</span>
                </Link>

                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice for Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">Reply blueprint &rarr;</span>
                </Link>

                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Arbitration Notice for Personal Loan
                  </p>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">Perkins Eastman defense &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
