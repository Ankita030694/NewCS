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

export default function HowToWriteAHardshipLetterForLoanSettlementClient() {
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
    { id: 'debt-economics-npa-dynamics', label: '1. Debt Economics & Hardship Rationale' },
    { id: 'financial-breakdown-settlement-math', label: '2. Ledger Audit & Settlement Math' },
    { id: 'resolution-comparison-matrix', label: '3. Debt Resolution Comparison' },
    { id: 'technical-cibil-scoring-math', label: '4. CIBIL Algorithm & CICRA Restoration' },
    { id: 'infographic-overview', label: 'Hardship Submission Blueprint' },
    { id: 'step-by-step-ots-sop', label: '5. 6-Stage Hardship Dossier SOP' },
    { id: 'statutory-notice-defense', label: '6. Statutory Defense & Borrower Rights' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance Matrix' },
    { id: 'chronological-timeline-milestones', label: '8. 180-Day Procedural Milestones' },
    { id: 'specialized-loan-scenarios', label: '9. Real-World Hardship Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authority' }
  ];

  const faqs = [
    {
      q: 'What is a hardship letter in the context of Indian bank loan settlement?',
      a: 'A hardship letter is a formal legal and financial memorandum submitted to a bank\'s Stressed Assets Resolution Branch or Competent Authority explaining the borrower\'s bona fide inability to maintain regular EMIs due to verifiable involuntary circumstances and proposing a discounted One-Time Settlement (OTS).'
    },
    {
      q: 'Who has the legal authority to approve a loan settlement proposal?',
      a: 'External recovery agencies have zero settlement authority. Settlement proposals are evaluated and sanctioned solely by the bank\'s internal Stressed Assets Resolution Committee, Circle Credit Committee, or Zonal Head under board-approved RBI compromise policies.'
    },
    {
      q: 'What mandatory documentary proofs must accompany a loan hardship letter?',
      a: 'Key evidence includes corporate layoff letters or pink slips, salary reduction certificates, audited profit and loss accounts showing business insolvency, medical discharge summaries with hospitalization bills, and recent bank statements showing depleted liquidity.'
    },
    {
      q: 'How does a hardship letter differentiate a genuine defaulter from a wilful defaulter?',
      a: 'Under RBI Master Directions, a wilful default involves deliberate diversion of funds or non-payment despite repayment capacity. A well-documented hardship letter with forensic tax and cash flow records legally establishes non-wilful distress, mandating humane compromise review.'
    },
    {
      q: 'Can a bank reject a hardship letter and demand 100% repayment?',
      a: 'Banks may initially reject informal requests or counter with higher demands. However, once an unsecured loan is provisioned as an NPA, submitting a structured hardship dossier with statutory backing compels the credit committee to reconsider commercial recovery viability over costly civil litigation.'
    },
    {
      q: 'What percentage of principal discount should be proposed in the hardship letter?',
      a: 'Hardship proposals typically request a 100% waiver of accumulated penal interest and late fees, alongside a 40% to 55% waiver of the base principal balance, depending on the severity of documented financial distress and NPA aging.'
    },
    {
      q: 'Does submitting a hardship letter pause legal notices under Section 138 or Section 25?',
      a: 'While submitting a hardship letter does not automatically stay judicial proceedings, it serves as crucial contemporaneous evidence in court or Lok Adalat showing bona fide settlement intent, preventing punitive criminal inferences and facilitating compounded resolution.'
    },
    {
      q: 'How long does a bank credit committee take to evaluate a hardship letter?',
      a: 'Institutional review typically takes between 14 and 30 business days across internal audit, branch scrutiny, and Zonal Credit Committee approval before an official compromise sanction letter is generated.'
    },
    {
      q: 'What clauses must be verified in the bank\'s settlement sanction letter before payment?',
      a: 'Ensure the sanction letter is printed on official bank letterhead with an authorized signature, specifies the exact negotiated settlement figure, outlines payment tranches, explicitly confirms waiver of remaining dues, and commits to issuing a No Dues Certificate.'
    },
    {
      q: 'How does loan settlement initiated via a hardship letter reflect on CIBIL?',
      a: 'The account will be reported to credit bureaus with a \'Settled\' status and zero outstanding balance. Borrowers can restore their credit score back to 750+ over 12 to 24 months through timely servicing of secured credit lines under Section 21 CICRA.'
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
            <span>STATUTORY DEBT RESOLUTION &amp; RBI COMPROMISE FRAMEWORK</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight leading-tight">
            How to Write a Hardship Letter for Loan Settlement
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A hardship letter is not a casual appeal, but a structured financial dossier submitted to bank credit committees. Learn how to substantiate involuntary insolvency, unbundle inflated penal interest, and secure a legally binding 40% to 55% One-Time Settlement.
          </p>

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              <span>Need Help Drafting Your Hardship Dossier? Get Legal Help</span>
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
                  <span>Statutory OTS Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by RBI Prudential Norms, SARFAESI Act &amp; CICRA 2005.
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
                <span>EXECUTIVE BRIEF: HARDSHIP SUBMISSIONS &amp; BANK SETTLEMENT CRUX</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Evidentiary Legal Threshold:</strong> A hardship submission is a formal evidentiary memorandum that shifts the borrower profile from a willful defaulter to a bona fide distressed consumer under RBI Master Directions.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Competent Authority Routing:</strong> Bypasses third-party collection agencies with zero waiver authority, presenting your case directly to the bank Stressed Assets Resolution Branch (SARB) or Circle Credit Committee.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Unbundling Penal Inflation:</strong> Strips compounded overdue charges, late payment penalties, and collection fees, anchoring discussions strictly around the core principal ledger balance.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Leveraging Bank NPA Provisioning:</strong> Uses the bank mandatory 15% to 100% Tier-1 capital provisioning on 90-day delinquent loans to demonstrate the commercial logic of an immediate cash recovery.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Mandatory Documentary Enclosures:</strong> Corroborates financial distress with termination letters, salary reduction slips, audited profit and loss statements, and clinical discharge summaries.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Realistic 40% to 55% Settlement Haircut:</strong> Formulates an achievable settlement proposal requesting a complete penal interest waiver and a structured principal compromise.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Protection Under Section 31(g) SARFAESI:</strong> Reaffirms statutory protections preventing summary attachment of residential property for unsecured personal loans and credit cards.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Statutory Finality &amp; NDC:</strong> Secures a formal Settlement Sanction Letter followed by an official No Dues Certificate, enabling credit record restoration under Section 21 CICRA.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: DEBT ECONOMICS & NPA DYNAMICS */}
            <section id="debt-economics-npa-dynamics" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  1. Debt Economics: Rationale Behind Bank Settlements
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                When a borrower experiences sudden income cessation, medical emergencies, or commercial insolvency, continuing monthly loan repayments becomes mathematically impossible. In the Indian retail banking landscape, overdue accounts progress through Special Mention Account stages (SMA-0 for 1-30 days, SMA-1 for 31-60 days, and SMA-2 for 61-90 days) before being formally classified as Non-Performing Assets (NPAs). Once an account crosses the 90-day threshold, Reserve Bank of India prudential regulations mandate that lenders allocate between 15% and 100% of the loan value as capital provisioning directly from their Tier-1 reserves.
              </p>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Because unsecured debts such as personal loans, credit card balances, and consumer loans lack hypothecated collateral, lenders cannot invoke summary auction mechanisms under the SARFAESI Act, as Section 31(g) explicitly excludes unsecured obligations. Pursuing extended civil litigation in commercial courts or Debts Recovery Tribunals (DRT) requires multi-year timelines and heavy legal expenditure. Consequently, when a borrower submits a cogent financial hardship letter backed by forensic evidence, the bank Stressed Assets Resolution Committee recognizes that executing an immediate One-Time Settlement (OTS) yields superior net recovery while releasing locked balance sheet reserves.
              </p>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Percent className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  2. Financial Breakdown: Separating Principal from Inflated Penalties
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                A common stumbling block for distressed borrowers is the substantial divergence between the actual principal borrowed and the inflated gross demand presented on monthly recovery statements. When loan installments default, banking collection software automatically imposes compounding penal charges (often 24% to 36% per annum), bounce fees, late filing levies, and legal processing charges. Under RBI Fair Lending Practice circulars, financial institutions are strictly prohibited from capitalizing penal charges into the principal loan balance.
              </p>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                A professional hardship letter begins with a rigorous forensic audit of the loan ledger. By unbundling arbitrary penal surcharges and identifying the exact remaining principal debt, the borrower establishes an indisputable baseline for negotiation. This allows the borrower to propose a realistic OTS figure, typically between 40% and 55% of the principal sum, with an explicit 100% waiver of accumulated penalties and overdue interest.
              </p>

              {/* Calculation Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3.5">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Representative 180-Day NPA Hardship Settlement Breakdown
                    </h3>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                    Audit Model
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block">Sanctioned Principal</span>
                    <span className="text-sm font-extrabold text-slate-900">₹12,00,000</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block">Base Principal at Default</span>
                    <span className="text-sm font-extrabold text-slate-900">₹9,40,000</span>
                  </div>

                  <div className="p-3 rounded-xl bg-red-50/70 border border-red-100">
                    <span className="text-red-600 block">Inflated Bank Demand</span>
                    <span className="text-sm font-extrabold text-red-700">₹15,60,000</span>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100">
                    <span className="text-amber-700 block">Bank Provisioning</span>
                    <span className="text-sm font-extrabold text-amber-800">100% Capital Locked</span>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                    <span className="text-emerald-700 block">Hardship OTS Proposal</span>
                    <span className="text-sm font-extrabold text-emerald-800">₹4,70,000</span>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                    <span className="text-[#1886ff] block">Total Financial Relief</span>
                    <span className="text-sm font-extrabold text-blue-900">₹10,90,000 (70%)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="resolution-comparison-matrix" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  3. Resolution Matrix: Evaluating Your Strategic Pathways
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Navigating loan default requires understanding how a formal hardship letter submission compares with alternative mechanisms such as loan restructuring, Lok Adalat proceedings, civil litigation, or informal collection interactions. The following matrix contrasts financial impact, legal finality, and credit score implications.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left border-collapse text-xs divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 min-w-[140px]">Resolution Method</th>
                      <th className="p-3 min-w-[140px]">Financial Impact</th>
                      <th className="p-3 min-w-[140px]">Legal Finality</th>
                      <th className="p-3 min-w-[140px]">CIBIL Bureau Trajectory</th>
                      <th className="p-3 min-w-[130px]">Strategic Suitability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-[#1886ff]">Hardship OTS Dossier</td>
                      <td className="p-3">40% to 55% principal payout; 100% penal waiver.</td>
                      <td className="p-3">Complete legal discharge with stamped NDC.</td>
                      <td className="p-3">Marked Settled; zero balance; rebuildable to 750+.</td>
                      <td className="p-3 font-semibold text-emerald-700">Optimal for severe distress.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Informal Agency Payment</td>
                      <td className="p-3">Full principal plus compounded penal interest.</td>
                      <td className="p-3">High risk of untracked funds and ongoing disputes.</td>
                      <td className="p-3">Default marks persist during staggered payments.</td>
                      <td className="p-3 font-semibold text-red-600">Avoid unrecorded deals.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Loan Restructuring</td>
                      <td className="p-3">Zero principal waiver; increases total interest.</td>
                      <td className="p-3">Contract renewed; default risks recur if income drops.</td>
                      <td className="p-3">Reported as Restructured on bureau accounts.</td>
                      <td className="p-3 font-semibold text-amber-700">Only if income is stable.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Court Litigation (DRT)</td>
                      <td className="p-3">Heavy legal fees, advocate retainers, court costs.</td>
                      <td className="p-3">Adversarial multi-year contested litigation.</td>
                      <td className="p-3">Marked Suit Filed or Wilful Default.</td>
                      <td className="p-3 font-semibold text-slate-600">High stress, high cost.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Lok Adalat Settlement</td>
                      <td className="p-3">Modest 15% to 30% discount on total claim.</td>
                      <td className="p-3">Non-appealable binding consent decree.</td>
                      <td className="p-3">Marked Settled through Lok Adalat.</td>
                      <td className="p-3 font-semibold text-blue-700">Useful for small claims.</td>
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
                Credit Information Companies like TransUnion CIBIL, Experian, CRIF High Mark, and Equifax compute credit scores using proprietary mathematical models weighted across five core parameters: Payment History (35%), Credit Utilization Ratio (30%), Credit History Length and Mix (15%), Recent Inquiries (10%), and Credit Exposure Leverage (10%). During active default, consecutive 30-90-180 Days Past Due (DPD) entries cause a severe score contraction, frequently dropping ratings from 780+ down into the 500-580 band.
              </p>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Executing a formal settlement through a hardship submission arrests this downward spiral. When the bank issues a settlement sanction and updates the bureau record to 'Settled', the outstanding balance is adjusted to zero, permanently terminating monthly overdue notations. Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), borrowers possess the statutory right to ensure accurate reporting of debt discharge. By adopting a disciplined credit rebuilding strategy, including secured credit cards backed by fixed deposits and flawless repayment cycles, consumers regularly rebuild their CIBIL score back above 750 within 12 to 24 months.
              </p>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Visual Blueprint: Hardship Letter Submission Framework
                </h2>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 sm:p-5 overflow-hidden space-y-3">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                  <Image
                    src="/images/infographics/how-to-write-a-hardship-letter-for-loan-settlement.jpg"
                    alt="How to Write a Hardship Letter for Loan Settlement Framework Blueprint"
                    fill
                    sizes="(max-width: 1200px) 100vw, 900px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Authoritative framework for drafting, documentary assembly, and banking committee submission.</span>
                  <a
                    href="/images/infographics/how-to-write-a-hardship-letter-for-loan-settlement.jpg"
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
                  5. Step-by-Step SOP: 6 Stages of Submitting a Stressed Assets Dossier
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                A successful compromise resolution follows a disciplined administrative procedure. Rather than sending informal emails or submitting casual letters to branch tellers, borrowers must follow a standardized 6-stage protocol designed to satisfy institutional banking audit standards.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">01</span>
                    <h3 className="font-bold text-slate-900 text-sm">Forensic Account Ledger Audit</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Obtain certified loan statements and unbundle excessive penal interest, late fees, and insurance markups to determine the exact net principal owed before initiating discussions.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">02</span>
                    <h3 className="font-bold text-slate-900 text-sm">Hardship Evidence Compilation</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Assemble certified documentary evidence including corporate layoff letters, revised employment terms, audited P&amp;L accounts, hospital discharge papers, and bank statements showing cash depletion.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">03</span>
                    <h3 className="font-bold text-slate-900 text-sm">Competent Authority Representation</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bypass commission-driven collection agents by submitting the formal hardship dossier directly to the bank Stressed Assets Resolution Branch (SARB) or Circle Credit Committee via registered post and official email.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">04</span>
                    <h3 className="font-bold text-slate-900 text-sm">Credit Committee Bilateral Talks</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Engage with credit committee officers, demonstrating that an immediate 40% to 55% OTS cash recovery delivers higher net present value than protracted litigation on unsecured exposures.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">05</span>
                    <h3 className="font-bold text-slate-900 text-sm">Sanction Letter Forensic Vetting</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Thoroughly inspect the written settlement approval for official bank letterhead, precise compromise figures, payment deadlines, complete waiver clauses, and commitments for No Dues Certificate issuance.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">06</span>
                    <h3 className="font-bold text-slate-900 text-sm">Direct Remittance &amp; NDC Issuance</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Deposit the agreed settlement funds directly into your loan account via RTGS or NEFT, collect the stamped No Dues Certificate, and verify updated credit bureau records under Section 21 CICRA.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & LEGAL RIGHTS */}
            <section id="statutory-notice-defense" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Gavel className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  6. Statutory Notice Defense &amp; Borrower Legal Safeguards
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                When borrowers miss debt installments, financial institutions often issue formal statutory notices. Understanding the legal anatomy of these notices ensures borrowers respond effectively without falling victim to unlawful intimidation or panic.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">Section 25 PSSA: NACH Mandate Recall</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers can formally cancel automated NACH e-mandate deductions by serving written notice to their bank under Payment and Settlement Systems Act regulations, preventing repetitive bounce charges and reframing the matter as a civil debt dispute.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <Gavel className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">Section 138 NI Act: Cheque Bounce Defense</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders cannot present undated security cheques for exaggerated claim amounts without providing verified account statements. Documenting genuine hardship establishes lack of fraudulent intent, facilitating pre-trial compoundable resolution.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">Arbitration: Perkins Eastman Precedent</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Supreme Court precedents in TRF Limited and Perkins Eastman, banks cannot unilaterally appoint sole arbitrators. Any unilateral arbitration invocation can be formally challenged under Section 12(5) of the Arbitration and Conciliation Act.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">DRT Thresholds &amp; Fair Practices Code</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Debts Recovery Tribunals have statutory jurisdiction only for claims exceeding ₹20 Lakhs. Furthermore, the RBI Fair Practices Code strictly bans abusive recovery tactics, unannounced workplace intrusions, and contacting third-party references.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER ESCALATION MATRIX */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  7. 3-Tier Grievance &amp; Regulatory Escalation
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                If branch personnel or recovery agencies ignore your hardship submission or violate fair debt collection guidelines, borrowers can invoke the formal multi-tiered grievance redressal mechanism established by the Reserve Bank of India.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Level 1: 7-10 Days</span>
                  <h3 className="font-bold text-slate-900 text-sm">Grievance Redressal Officer</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Submit a formal written complaint regarding agent misconduct and request administrative review of your financial hardship dossier.</p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Level 2: 14-21 Days</span>
                  <h3 className="font-bold text-slate-900 text-sm">Principal Nodal Officer</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Escalate unresolved requests to the bank Principal Nodal Officer and Zonal Stressed Assets Committee for executive compromise appraisal.</p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Level 3: 30 Days</span>
                  <h3 className="font-bold text-slate-900 text-sm">RBI Integrated Ombudsman</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Lodge an enforceable statutory complaint through cms.rbi.org.in if the bank fails to provide a satisfactory resolution within 30 days.</p>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-timeline-milestones" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  8. Chronological Timeline: 180-Day Resolution Path
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Understanding the lifecycle of stressed retail debt helps borrowers time their hardship submissions for maximum strategic leverage, transitioning from initial default to complete debt discharge.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left border-collapse text-xs divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 min-w-[120px]">Timeline</th>
                      <th className="p-3 min-w-[140px]">Account Status</th>
                      <th className="p-3 min-w-[180px]">Bank &amp; Recovery Action</th>
                      <th className="p-3 min-w-[180px]">Borrower Strategic Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-[#1886ff]">Days 1 to 30</td>
                      <td className="p-3">SMA-0 Delinquency</td>
                      <td className="p-3">Automated payment reminders, tele-calling alerts.</td>
                      <td className="p-3">Conduct debt audit; evaluate restructuring vs settlement.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 31 to 90</td>
                      <td className="p-3">SMA-1 / SMA-2 Stage</td>
                      <td className="p-3">Outsourced to collection agencies; intensive calls.</td>
                      <td className="p-3">Compile hardship proofs; revoke NACH mandate in writing.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 91 to 120</td>
                      <td className="p-3">NPA Classification</td>
                      <td className="p-3">Capital provisioning allocated; file sent to SARB.</td>
                      <td className="p-3">Submit comprehensive hardship dossier to SARB leadership.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 121 to 150</td>
                      <td className="p-3">Committee Review</td>
                      <td className="p-3">Credit committee reviews hardship proofs and haircut.</td>
                      <td className="p-3">Negotiate 40% to 55% settlement with full penal waiver.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 151 to 180</td>
                      <td className="p-3">OTS Sanction &amp; Closure</td>
                      <td className="p-3">Issuance of official Settlement Sanction Letter.</td>
                      <td className="p-3">Vet sanction terms, remit settlement amount, secure NDC.</td>
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
                  9. Specialized Real-World Hardship Scenarios
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Financial distress manifests in various forms. Adapting your hardship presentation to match specific underlying factors ensures bank credit committees quickly validate and approve compromise proposals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm">Corporate Layoffs &amp; Salary Cuts</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit termination notices, severance settlement records, and updated bank statements illustrating sustained zero-income or pay cuts to secure rapid principal waivers without litigation.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm">Medical Emergencies &amp; Critical Illness</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Provide certified hospital discharge summaries, operation invoices, and ongoing treatment estimates demonstrating complete depletion of emergency savings reserves.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm">Business Collapse &amp; Proprietorship Losses</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Enclose audited balance sheets, GST surrender certificates, and vendor default proofs to substantiate business insolvency while safeguarding personal assets under SARFAESI Section 31(g).
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm">Multi-Lender Portfolio Consolidation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Coordinate a synchronized hardship resolution strategy across multiple banking institutions, preventing cross-lender escalation and securing fair, phased settlements.
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
                  10. Frequently Asked Questions: Hardship Letters &amp; Loan Settlement
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
                  <span>RBI Ombudsman Portal</span>
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
                  <Link href="/documents-needed-for-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Documents for Loan Settlement
                  </Link>
                  <Link href="/how-to-convince-bank-for-one-time-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    How to Convince Bank for OTS
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
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Settlement Letter
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
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
                Specialized in banking compliance, debt settlement representation, and financial hardship dispute resolution across Indian banking forums.
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
                  100% CONFIDENTIAL HARDSHIP DEFENSE
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Struggling to Pay Bank Loan EMIs?
                </h3>
                <p className="text-blue-100 text-xs mt-1 leading-relaxed font-normal">
                  Our debt resolution experts compile your legal hardship dossier, represent your case to bank leadership, and negotiate a 40% to 55% settlement.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-2.5 px-4 rounded-full font-bold text-xs sm:text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Facing Loan Default? Get Defense
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
                    Bank Demanding Full Payment for Loan Closure
                  </p>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">Settle for 40%-55% &rarr;</span>
                </Link>

                <Link
                  href="/documents-needed-for-loan-settlement"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Documents Needed for Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">Complete checklist &rarr;</span>
                </Link>

                <Link
                  href="/how-to-convince-bank-for-one-time-settlement"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    How to Convince Bank for One-Time Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">Negotiation guide &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
