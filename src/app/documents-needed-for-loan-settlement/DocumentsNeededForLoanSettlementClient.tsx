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
  BookOpen,
  Building2,
  DollarSign,
  Check,
  Lock,
  Phone,
  Calendar,
  CreditCard,
  Briefcase,
  Bookmark,
  ArrowRight
} from 'lucide-react';

export default function DocumentsNeededForLoanSettlementClient() {
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
    { id: 'statutory-burden-of-proof', label: '1. Statutory Framework & Burden of Proof' },
    { id: 'hardship-matrix-table', label: '2. Hardship Classification & Matrix' },
    { id: 'financial-scoring-math', label: '3. Financial Distress Analytics & Formulas' },
    { id: 'infographic-overview', label: 'Visual Roadmap Blueprint' },
    { id: 'documentation-sop', label: '4. 6-Stage Document Compilation SOP' },
    { id: 'hardship-narrative-guide', label: '5. Legal Hardship Representation Guide' },
    { id: 'escalation-matrix', label: '6. 3-Tier Escalation Matrix' },
    { id: 'milestone-timeline', label: '7. Chronological Timeline & NOC' },
    { id: 'special-scenarios', label: '8. Cards, ARCs & Digital Loan Apps' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'official-sources', label: 'Regulatory Sources & Authorities' }
  ];

  const faqs = [
    {
      q: 'What core documents do I need to submit to initiate a personal loan settlement?',
      a: 'To initiate a formal One-Time Settlement (OTS) for a personal loan or credit card default, you must compile a structured 4-part dossier: (1) Primary KYC proofs (self-attested PAN Card and Aadhaar Card); (2) Original Loan Documentation (Loan Sanction Letter, Agreement copy, and Loan Account Statement showing total disbursed amount and repayment history); (3) Bank Account Statements for the preceding 6 to 12 months across all active accounts demonstrating genuine cash-flow distress and zero unencumbered liquidity; and (4) Primary Hardship Proofs such as medical summaries, termination letters, or audited loss accounts establishing an involuntary inability to service contractual EMIs.'
    },
    {
      q: 'What specific documents serve as legally valid proof of financial hardship for banks and NBFCs?',
      a: 'Banks and NBFC Stressed Asset Committees classify hardship into four distinct statutory categories requiring specific evidentiary documentation: (1) Medical Crisis: Hospital discharge summaries, surgical invoices, ongoing specialist prescription protocols, and pharmacy ledgers; (2) Involuntary Job Loss / Salary Reduction: Official termination or layoff letters, severance slips, revised employment contracts showing pay cuts, and salary account statements showing cessation of credits; (3) Business Failure: Audited P&L statements, GST filing returns showing turnover collapse, shop establishment cancellation receipts, or vendor litigation notices; and (4) Death of Primary Earner: Legal death certificate, legal heir certificate, and household dependency affidavits.'
    },
    {
      q: 'What critical documents must I receive from the bank immediately after completing a loan settlement?',
      a: 'Upon remitting the agreed settlement consideration, you must secure three vital post-settlement documents: (1) Bank-Stamped Payment Receipt or UTR Acknowledgement confirming exact credited funds against your specific Loan Account Number; (2) Unconditional No Dues Certificate (NDC) or No Objection Certificate (NOC) on official bank letterhead signed by an authorized signatory stating that the account is fully discharged with zero balance outstanding; and (3) A formal closure intimation confirming that all pending civil, criminal (Section 138 NI Act / Section 25 PSS Act), or arbitration proceedings stand withdrawn with court memos attached.'
    },
    {
      q: 'How do I prove genuine financial hardship if I am a self-employed business owner or freelancer?',
      a: 'Self-employed professionals and proprietorships must submit objective financial records proving severe economic contraction: (1) Income Tax Returns (ITR-3 / ITR-4) for the past 2 to 3 financial years illustrating a precipitous drop in gross total income; (2) GSTR-3B and GSTR-1 monthly filings demonstrating a sustained collapse in business turnover; (3) Current Account bank statements for the past 12 months showing cash flow depletion and return of outward clearing cheques; (4) Contract termination notices or client cancellation emails; and (5) A certified Net Worth Statement and Asset-Liability Ledger issued by a Chartered Accountant.'
    },
    {
      q: 'Can a bank reject my loan settlement proposal if my submitted hardship documentation is incomplete?',
      a: 'Yes. Under the Reserve Bank of India (Prudential Framework for Resolution of Stressed Assets) Master Directions, bank settlement sanctioning committees are legally prohibited from granting arbitrary loan haircuts without verifiable justification. If a borrower submits an informal letter without certified bank statements, medical records, or income proofs, the bank will classify the default as "willful or strategic" rather than "genuine financial distress" and reject the settlement, initiating aggressive SARFAESI, DRT, or Section 138 recovery actions instead.'
    },
    {
      q: 'Why are 6 to 12 months of certified bank account statements scrutinized during settlement negotiations?',
      a: 'Credit risk and stressed asset managers conduct forensic scrutiny on bank statements to verify three critical parameters: (1) Absence of hidden liquidity or undeclared surplus income; (2) Verification that the borrower has not diverted loan funds into high-risk equity markets, luxury consumption, or crypto assets; and (3) Proof that the monthly average balance (MAB) is consistently below the required threshold to service regular contractual EMIs. Any unexplained high-value credit entries can severely weaken the borrower\'s negotiation leverage.'
    },
    {
      q: 'What post-settlement documents are required to update my CIBIL score and rectify credit bureau records?',
      a: 'To ensure credit bureaus reflect your settlement accurately, you need: (1) The official Bank OTS Sanction Letter detailing the approved compromise terms; (2) Real-time RTGS/NEFT transaction counterfoils and bank statement debit proof; (3) The original No Dues Certificate (NDC) issued by the lender; and (4) A formal Bank Bureau Update Confirmation Letter. If the lender fails to report the "Settled" status with ₹0 current balance to CIBIL, Experian, Equifax, and CRIF High Mark within 30 to 45 days, these documents form the mandatory evidentiary basis for filing a statutory bureau dispute under Section 21 of the Credit Information Companies (Regulation) Act, 2005.'
    },
    {
      q: 'Is a medical certificate from a private clinic accepted by banks as valid proof of medical hardship?',
      a: 'While a medical certificate from a registered medical practitioner (with valid State Medical Council registration number) is considered, banks accord significantly higher evidentiary weight to institutional records: (1) Detailed inpatient discharge summaries from NABH/NABL-accredited hospitals or government medical colleges; (2) Itemized pharmacy bills and diagnostic investigation reports (MRI, PET CT, biopsy, dialysis records); and (3) Health insurance claim settlement or rejection letters demonstrating heavy out-of-pocket medical expenditure that depleted household savings.'
    },
    {
      q: 'What documents protect me against unauthorized collection harassment during the settlement review period?',
      a: 'To halt abusive third-party recovery telecalling and illegal home visits during negotiations, maintain: (1) A formal Hardship Representation Acknowledgement bearing the bank\'s CRM Grievance Ticket Number; (2) A Legal Notice of Representation issued under the RBI Master Circular on Recovery Agents prohibiting harassment between 7 PM and 8 AM; (3) Copies of submitted medical/job loss dossiers establishing active bona fide dispute resolution; and (4) Call recording logs and CCTV timestamps documenting any recovery agent misconduct to support immediate escalation to the Principal Nodal Officer and Banking Ombudsman.'
    },
    {
      q: 'What is the legal difference between an informal agent settlement offer and an official OTS sanction letter?',
      a: 'An informal settlement offer sent via WhatsApp, SMS, or third-party collection agency email has zero legal validity under Indian contract law; remitting funds against such informal drafts is treated as a routine part-payment against overdue interest, leaving your principal default active. In contrast, an official One-Time Settlement (OTS) Sanction Letter is generated directly from the lender\'s Core Banking System (CBS) on official corporate letterhead, signed by an authorized Scale-IV/Competent Authority with employee credentials, and contains an irrevocable full and final debt satisfaction clause under Section 63 of the Indian Contract Act, 1872.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Swatch Color) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          {/* Title / H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Documents Needed for Loan Settlement <br />
            <span className="text-blue-100">(Hardship Proof &amp; Essential Checklist)</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal md:font-medium text-white/95 leading-relaxed">
            Prepare for your settlement negotiation. Learn exactly which documents you need to prove financial hardship and secure the highest possible waiver.
          </p>

          {/* Single Rounded Full CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Let Us Handle the Paperwork for You</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. COUNTER STRIP COMPONENT */}
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
                  <span>Verified Legal Blueprint</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Updated per RBI Master Direction on Compromise Settlements &amp; CICRA Guidelines 2026.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief / Key Takeaways Box (with #1886ff Theme Color) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: DOCUMENTS NEEDED FOR LOAN SETTLEMENT</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Burden of Evidentiary Proof on the Borrower:</strong> Under Reserve Bank of India (RBI) compromise settlement norms, banks cannot grant discretionary principal write-offs without an audited hardship dossier proving involuntary inability to pay.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">4 Verified Hardship Categories:</strong> Lenders sanction maximum waivers (50% to 75%+) only when backed by objective documentation: medical summaries for chronic illness, official termination letters for job loss, audited P&amp;L/GST returns for business collapse, or death certificates.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Forensic Bank Statement Scrutiny:</strong> 6 to 12 months of certified account statements across all active accounts are audited by credit committees to verify zero hidden liquidity, low average monthly balances, and absence of fund diversion.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Crucial Pre-Remittance CBS Sanction Letter:</strong> Never transfer funds on WhatsApp drafts or collection agency emails. Demand an official Core Banking System (CBS) One-Time Settlement (OTS) sanction letter on bank letterhead signed by an authorized Scale-IV officer.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Mandatory Post-Settlement Documents:</strong> Immediately upon payment, secure timestamped RTGS/NEFT UTR receipts, an unconditional No Dues Certificate (NDC), court case withdrawal memos, and credit bureau update confirmations within 30 to 45 days.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: STATUTORY BURDEN OF PROOF */}
            <section id="statutory-burden-of-proof" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4" />
                <span>Statutory Banking Framework</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                1. Statutory Framework &amp; The Legal Burden of Proof for Loan Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on an unsecured personal loan, credit card, or business credit line in India, entering into a compromise settlement is not an automatic right; it is a legally governed novation process under <strong>Section 63 of the Indian Contract Act, 1872</strong> and the <strong>Reserve Bank of India (Prudential Framework for Resolution of Stressed Assets) Master Directions</strong>. Under these statutory guidelines, Indian scheduled commercial banks, public sector lenders, and non-banking financial companies (NBFCs) operate under stringent regulatory audits. Bank managers and credit sanctioning committees cannot arbitrarily waive public funds or write off loan balances without compiling an incontrovertible evidentiary audit trail.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The legal concept of the <em>&quot;Burden of Proof&quot;</em> rests squarely on the borrower. Under the regulatory definitions established by the RBI and the Central Vigilance Commission (CVC), lending institutions must categorize every defaulting account into one of two fundamental classifications: <strong>Genuine Financial Distress</strong> or <strong>Willful Default / Strategic Non-Payment</strong>. If a borrower approaches a lender seeking a substantial waiver without submitting verifiable documentary proof of economic distress, internal credit risk algorithms automatically classify the account as a strategic default. This triggers aggressive legal escalations under Section 138 of the Negotiable Instruments Act (cheque bounce), Section 25 of the Payment and Settlement Systems Act (NACH mandate bounce), civil recovery suits before the Civil Courts or Debts Recovery Tribunal (DRT), and attachment proceedings.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Conversely, when a borrower presents a meticulously documented Hardship Representation Dossier—substantiating unforeseen macroeconomic disruptions, catastrophic medical emergencies, business insolvencies, or involuntary employment termination—the institution&apos;s Stressed Assets Management Branch (SAMB) is empowered under board-approved compromise policies to sanction significant principal and interest waivers, sometimes exceeding 50% to 75% of the total outstanding ledger.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-2 text-blue-700 font-bold mb-1.5 text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>RBI Compromise Policy Compliance</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    All compromise settlements require board-approved policies ensuring that write-offs are backed by verifiable borrower distress documentation, preventing internal vigilance red flags.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold mb-1.5 text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Evidentiary Hardship Immunity</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Documented proof of hardship refutes allegations of willful default, compelling the bank to prioritize amicable debt resolution over protracted civil and criminal litigation.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 2: HARDSHIP CLASSIFICATION & MATRIX */}
            <section id="hardship-matrix-table" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4" />
                <span>Hardship Classification Matrix</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                2. Comprehensive Hardship Classification &amp; Documentation Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian lenders evaluate settlement applications based on distinct hardship categories. Each category requires specific corroborating documentation to substantiate the borrower&apos;s financial inability to repay the contractual debt:
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Hardship Category</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Mandatory Documentation Dossier</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Lender Audit &amp; Scrutiny Level</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Target Waiver Potential</th>
                        <th className="p-3.5 md:p-4 font-bold">Approval Probability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-slate-900 bg-slate-50/50">
                          Critical Illness / Medical Crisis
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-slate-800">
                          Hospital discharge summary, surgery bills, ICU invoices, ongoing prescription protocols, health insurance rejection/exhaustion letters.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 text-slate-700">
                          High (Cross-verified with hospital billing ledgers and out-of-pocket medical cash debits).
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-emerald-700 bg-emerald-50/20">
                          60% to 80% Waiver on Principal + 100% Interest Write-off
                        </td>
                        <td className="p-3.5 md:p-4 font-bold text-emerald-600">
                          Very High (&gt;90%)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-slate-900 bg-slate-50/50">
                          Involuntary Job Loss / Retrenchment
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-slate-800">
                          Official termination/layoff letter, severance settlement slip, salary account statement showing zero credits for 6+ months, resignation acceptance on medical grounds.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 text-slate-700">
                          Medium-High (Verification of EPFO passbook exits and active LinkedIn / employment portals).
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-emerald-700 bg-emerald-50/20">
                          50% to 70% Waiver on Principal + 100% Penal Waiver
                        </td>
                        <td className="p-3.5 md:p-4 font-bold text-blue-600">
                          High (80%–88%)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-slate-900 bg-slate-50/50">
                          Business Failure / Revenue Collapse
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-slate-800">
                          ITR filings (past 2–3 yrs), GSTR-3B/1 returns showing turnover drop, CA Net Worth &amp; Loss Certificate, shop establishment closure deed, vendor default notices.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 text-slate-700">
                          Extremely High (Forensic analysis of current account cash flows, GST turnover reconciliation).
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-emerald-700 bg-emerald-50/20">
                          45% to 65% Waiver on Principal + 100% Unapplied Interest
                        </td>
                        <td className="p-3.5 md:p-4 font-bold text-blue-600">
                          Moderate-High (75%–82%)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-slate-900 bg-slate-50/50">
                          Demise of Primary Earner / Family Crisis
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-slate-800">
                          Official Municipal Death Certificate, Legal Heir Certificate / Surviving Member Certificate, family dependency affidavit, no-income declarations.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 text-slate-700">
                          Standard Legal Audit (Verification of municipal registration and co-borrower / guarantor liability).
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-emerald-700 bg-emerald-50/20">
                          70% to 90% Waiver or Complete Sympathetic Closure
                        </td>
                        <td className="p-3.5 md:p-4 font-bold text-emerald-600">
                          Very High (&gt;95%)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs md:text-sm text-slate-600 italic">
                <strong>Key Negotiation Insight:</strong> Lenders calculate the settlement haircut strictly on the objective quality of documentation. Presenting disorganized or partial proofs allows recovery desks to downplay your hardship and demand full outstanding payments.
              </p>
            </section>

            {/* SECTION 3: FINANCIAL SCORING MATH & ANALYTICS */}
            <section id="financial-scoring-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4" />
                <span>Financial Analytics &amp; Formulas</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                3. Financial Hardship Calculation Math, Debt Service Burdens &amp; Haircut Analytics
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Stressed Asset Management Committees and Credit Risk Officers utilize mathematical solvency models to evaluate whether a compromise settlement represents the maximum recoverable value compared to the cost of legal recovery.
              </p>

              {/* Technical Math Card */}
              <div className="rounded-2xl border-2 border-blue-200 bg-white p-5 md:p-6 shadow-xs space-y-4">
                <h3 className="text-sm md:text-base font-black text-slate-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#1886ff]" />
                  Institutional Solvency &amp; Capacity Formulas
                </h3>
                
                <div className="space-y-3 text-xs md:text-sm text-slate-700">
                  <div className="p-3 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed">
                    Debt Service Burden Ratio (DSBR) = (Total Monthly Contractual EMI Obligations / Net Verifiable Monthly Household Income) &times; 100
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed">
                    Disposable Income Deficit (DID) = Net Monthly Inflow - [Essential Living Expenses + Out-of-Pocket Medical Costs]
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed">
                    Liquidity Distress Index (LDI) = Unencumbered Liquid Bank Balances / Total Defaulted Unsecured Principal Exposure
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                      <span className="font-bold text-blue-900 block mb-1">DSBR Threshold (&gt; 70%):</span>
                      <span className="text-slate-700 text-xs">A DSBR exceeding 70% proves structural insolvency, establishing that continuing regular EMIs will trigger severe living deprivation.</span>
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                      <span className="font-bold text-emerald-900 block mb-1">LDI Target (&lt; 0.15):</span>
                      <span className="text-slate-700 text-xs">When total available liquid funds represent less than 15% of total debt, credit committees are motivated to accept an immediate lump-sum OTS.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Forensic Balance Sheet Factors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Demonstrating Zero Unencumbered Assets
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Lenders verify that the borrower does not own unencumbered real estate, mutual fund portfolios, fixed deposits, or demat shares that could be attached via civil execution petitions. A CA-certified Net Worth statement showing zero attachable assets is critical.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Present Value of Future Recovery (PVFR)
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Banks compare an immediate cash settlement against the present value of dragged-out litigation over 3 to 7 years in civil court. Proving lack of attachable assets maximizes the bank&apos;s willingness to grant a high principal discount today.
                  </p>
                </div>
              </div>
            </section>

            {/* HIGH-IMPACT INFOGRAPHIC BANNER EMBEDDED (Between Sections 3 and 4) */}
            <div id="infographic-overview" className="scroll-target bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-10 text-slate-800">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-blue-500">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-white text-xs shadow-xs">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-200 block">
                      Legal Documentation Roadmap
                    </span>
                    <h3 className="text-sm md:text-base font-black text-white leading-tight">
                      Essential Documents Needed for Loan Settlement &amp; Hardship Proof
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/documents-needed-for-loan-settlement.jpg"
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
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-white">
                  <img
                    src="/images/infographics/documents-needed-for-loan-settlement.jpg"
                    alt="Essential Documents Needed for Loan Settlement and Hardship Proof Infographic"
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Core Blueprint:</strong> Structured across 4 phases: Identity/Loan Docs, Hardship Evidence, Sanction Verification &amp; Mandatory Post-Settlement Documents.</span>
                </div>
                <Link href="/contact" className="text-[#1886ff] font-bold hover:underline">
                  Let Us Handle the Paperwork for You &rarr;
                </Link>
              </div>
            </div>

            {/* SECTION 4: 6-STAGE COMPILATION SOP */}
            <section id="documentation-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                4. 6-Stage Standard Operating Procedure (SOP) for Document Dossier Compilation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To present an unassailable settlement representation to your bank or NBFC, follow this rigorous sequential 6-stage standard operating procedure:
              </p>

              <div className="space-y-4">
                {/* Stage 1 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 1: KYC &amp; Loan Facility Forensic Audit
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Assemble certified self-attested copies of your primary identity documents (PAN Card and Aadhaar Card). Retrieve your original Loan Sanction Letter, signed Loan Agreement copy, and complete historical Loan Account Statement. Audit all historical payments to establish total principal repaid, unapplied interest charged, penal charges added, and exact ledger balance.
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
                      Stage 2: Income Invalidation &amp; Multi-Bank Statement Cleansing
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Download 6 to 12 months of certified e-statements across all operative savings and current accounts in your name. Conduct an audit to ensure there are no unexplained high-value inward transfers, active high-value mutual fund SIPs, or undeclared income streams that could jeopardize your hardship representation.
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
                      Stage 3: Primary Hardship Evidence Gathering &amp; Chronological Timeline Assembly
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Collate the specific documentation corresponding to your hardship category: certified hospital discharge summaries, medical invoices, job termination/layoff letters, severance slips, or audited business P&amp;L loss statements. Construct a chronological timeline connecting the exact date of financial disruption to the first missed EMI date.
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
                      Stage 4: Net Worth Statement &amp; Asset-Liability Ledger Certification
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Prepare a comprehensive statement of assets and liabilities. If dealing with large exposures (above ₹5 Lakhs to ₹10 Lakhs), secure a certified Net Worth Statement from a practicing Chartered Accountant confirming the absence of unencumbered liquid assets and verifying negative net disposable income.
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
                      Stage 5: Formal Submission to Stressed Assets Management Branch (SAMB)
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Submit the complete bound dossier along with a formal Hardship Representation Letter to the bank&apos;s Branch Manager, Asset Recovery Hub, and Principal Nodal Officer via registered post and official corporate email. Obtain a formal written acknowledgement and internal CRM Grievance Ticket Number.
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
                      Stage 6: Post-Settlement Document Recovery &amp; Bureau Validation
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Following remittance of the negotiated settlement consideration into the bank&apos;s centralized collection pool, immediately secure the payment counterfoil with UTR number, demand the unconditional No Dues Certificate (NDC) within 30 days, verify court withdrawal memos, and track the credit bureau update to &quot;Settled&quot; with ₹0 balance.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 5: LEGAL HARDSHIP REPRESENTATION GUIDE (PARAGRAPH CONTENT - NO POINTS) */}
            <section id="hardship-narrative-guide" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4" />
                <span>Authoritative Legal &amp; Financial Narrative</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                5. Comprehensive Guide to Structuring an Unassailable Hardship Representation
              </h2>
              
              <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-xs space-y-5 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  Constructing an effective financial hardship representation requires adhering to the formal principles of banking jurisprudence, administrative law, and contract novation under Section 63 of the Indian Contract Act, 1872. When a borrower approaches a scheduled commercial bank or an institutional NBFC, the written representation serves as the cornerstone legal document upon which the entire Stressed Assets Management Committee bases its resolution decision. A haphazardly drafted communication or an informal plea that relies solely on emotional appeals without statutory precision is routinely dismissed by credit risk teams as a tactical attempt to evade repayment obligations. To ensure institutional credibility, the narrative must clearly articulate the historical chronology of the credit facility, emphasizing that the borrower maintained a clean, diligent repayment track record prior to the occurrence of an unforeseen, non-willful economic catastrophe.
                </p>
                <p>
                  The representation must meticulously bridge the causal nexus between the disruptive event and the subsequent failure to service contractual EMIs. Whether the precipitating factor is an acute medical crisis involving extensive inpatient hospitalization and recurring medical protocols, an involuntary retrenchment resulting from corporate downsizing, or a severe macroeconomic collapse within a proprietorship or commercial enterprise, every assertion made in the narrative must correspond directly to a serialized annexure within the accompanying evidentiary dossier. In institutional banking practice, credit committees cross-reference the narrative statements against the submitted bank account statements, tax filings, and institutional certifications. Any inconsistency between the written assertions and the forensic records instantly invalidates the credibility of the settlement proposal, leading to the immediate rejection of the compromise petition.
                </p>
                <p>
                  Furthermore, the representation must establish the statutory doctrine of impossibility of performance and present a transparent disclosure of the borrower&apos;s comprehensive asset-liability structure. By explicitly proving that the borrower has exhausted all unencumbered liquid reserves, provident fund balances, and personal savings, the narrative demonstrates that the offered compromise sum represents the absolute maximum recoverable consideration available to the lender. Under the Reserve Bank of India Master Directions on Resolution of Stressed Assets, credit committees are required to balance recovery maximization against the legal expenditures, asset depreciation, and temporal delays associated with long-term litigation under the SARFAESI Act, the Recovery of Debts and Bankruptcy Act, or summary civil suits. By framing the One-Time Settlement offer as an immediate, commercially prudent recovery mechanism that yields higher net present value than contested court proceedings, the narrative aligns the borrower&apos;s relief objectives with the lender&apos;s institutional risk mandates.
                </p>
                <p>
                  Finally, the representation must incorporate clear legal safeguards regarding post-settlement compliance, account closure, and statutory credit bureau rectification. It must explicitly state that the settlement offer is conditional upon the bank issuing a formal, irrevocable Core Banking System sanction letter prior to remittance, extinguishing all residual civil and criminal claims, unconditionally withdrawing any pending litigation under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act, and transmitting accurate data updates to TransUnion CIBIL, Experian, Equifax, and CRIF High Mark pursuant to Section 21 of the Credit Information Companies (Regulation) Act, 2005. Executing this comprehensive narrative alongside a notarized affidavit of financial status creates a legally enforceable representation that protects the borrower against subsequent bad-faith claims or unauthorized debt reactivation by secondary collection agencies.
                </p>
              </div>
            </section>

            {/* SECTION 6: 3-TIER ESCALATION MATRIX */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4" />
                <span>Institutional Grievance Architecture</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                6. 3-Tier Banking &amp; RBI Ombudsman Escalation Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the branch credit operations team ignores your hardship documentation, delays processing your compromise petition, or continues unauthorized recovery pressure during active negotiations, follow this institutional escalation hierarchy:
              </p>

              {/* Escalation Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs font-black text-[#1886ff] uppercase tracking-wider mb-1">
                    Tier 1 (Days 1–7)
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    Branch Credit Operations &amp; ARMB
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit the certified documentation dossier in person to the Branch Manager and the Asset Recovery Management Branch (ARMB). Ensure your submission is logged on the bank&apos;s internal portal to generate an official CRM Grievance Ticket Number.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs font-black text-blue-600 uppercase tracking-wider mb-1">
                    Tier 2 (Days 8–21)
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    Principal Nodal Officer (PNO)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalate to the bank&apos;s apex grievance authority (PNO / Chief Grievance Redressal Officer). The PNO possesses executive oversight to halt rogue recovery telecalling, audit submitted medical/job loss dossiers, and direct the Stressed Assets Committee to evaluate the OTS.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border-2 border-emerald-300 bg-emerald-50/20 shadow-2xs">
                  <div className="text-xs font-black text-emerald-700 uppercase tracking-wider mb-1">
                    Tier 3 (Day 22+)
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    RBI Integrated Ombudsman
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a statutory complaint at <strong>cms.rbi.org.in</strong> under the RBI Integrated Ombudsman Scheme, 2021. The Ombudsman enforces fair debt collection guidelines, mandates review of genuine hardship representations, and penalizes institutional non-responsiveness.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: CHRONOLOGICAL TIMELINE & NOC */}
            <section id="milestone-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4" />
                <span>Resolution &amp; Bureau Milestones</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                7. Chronological Settlement Documentation &amp; Post-Closure Timeline
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A complete loan settlement cycle—from initial document dossier submission to final credit bureau status rectification—follows a structured statutory timeline:
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Timeline Milestone</th>
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Procedural &amp; Banking Action</th>
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Required Documentation</th>
                        <th className="p-3.5 font-bold">Borrower Safeguards</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Day 1 – 5
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Forensic Dossier Assembly &amp; Hardship Representation Submission.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-800">
                          KYC, Loan Statements, 12-Month Bank Statements, Medical/Job Loss proofs.
                        </td>
                        <td className="p-3.5">
                          Demand formal written receipt and registered CRM Ticket Number.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Day 6 – 15
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Stressed Asset Committee Review &amp; Haircut Calculation.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-blue-700">
                          Net Worth Statement, Asset-Liability Ledger, Income Loss Affidavit.
                        </td>
                        <td className="p-3.5">
                          Cease all verbal discussions with field telecallers; direct all communication to PNO.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Day 16 – 25
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Issuance &amp; Verification of Core Banking (CBS) OTS Sanction Letter.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-emerald-700">
                          Official CBS Letterhead Sanction with Signatory Employee ID &amp; CIN.
                        </td>
                        <td className="p-3.5">
                          Verify full discharge clause, waiver breakdown, and case withdrawal covenants.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Day 26 – 35
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Direct Settlement Remittance &amp; Immediate Payment Counterfoil Collection.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-blue-700">
                          RTGS / NEFT Counterfoil, Live UTR Timestamp, Bank Ledger Debit Statement.
                        </td>
                        <td className="p-3.5">
                          Remit strictly into bank collection pool account; never pay collection agents.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Day 36 – 50
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Issuance of Unconditional No Dues Certificate (NDC) &amp; Court Case Withdrawal.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-emerald-700">
                          Original Bank No Dues Certificate, Section 138 / DRT Case Withdrawal Memo.
                        </td>
                        <td className="p-3.5">
                          Secure court order copy showing criminal/civil complaint dismissed as settled.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Day 51 – 75
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Credit Bureau Data Tape Update (CIBIL, Experian, Equifax, CRIF).
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-emerald-700">
                          Updated CIBIL CIR Report reflecting &quot;Settled&quot; status and ₹0 balance.
                        </td>
                        <td className="p-3.5">
                          If bureau not updated, file statutory CICRA Section 21 dispute attaching NDC.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 8: SPECIAL REAL-WORLD SCENARIOS */}
            <section id="special-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4" />
                <span>Specialized Real-World Scenarios</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                8. Specialized Scenarios: Credit Cards, ARCs, and Digital Fintech Loan Apps
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Credit Card Settlements
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Card issuers (HDFC, SBI Card, ICICI, Axis, RBL, Standard Chartered) require 16-digit card statements showing accrued late charges. Ensure the settlement letter explicitly provides for the permanent cancellation of primary and add-on cards, waiver of revolving finance charges, and ₹0 balance reporting.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Debt Assigned to ARCs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your debt was sold to an Asset Reconstruction Company (ARCIL, Phoenix, CFM, Edelweiss ARC, Invent ARC) under SARFAESI Section 5, demand a copy of the <strong>Assignment Deed / Novation Notice</strong>. The settlement sanction letter and subsequent NDC must be issued directly by the ARC as legal assignee.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-[#1886ff]" />
                    Digital Fintech NBFC Apps
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For instant loan apps (KreditBee, MoneyView, CASHe, PaySense, Ring, Kissht), verify the <strong>underlying RBI-registered NBFC lender</strong>. Settlement letters and No Dues Certificates must be issued by the regulated NBFC, never the third-party loan aggregation app or external agency.
                  </p>
                </div>
              </div>
            </section>

            {/* COMPANY SECTION (Placed inside middle column before FAQ) */}
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
                Frequently Asked Questions on Documents Needed for Loan Settlement
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to view detailed legal and banking answers verified by our debt resolution experts:
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
                All legal procedures, documentation checklists, and borrower rights described on this page are grounded in official Indian statutory frameworks:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">1. RBI Master Directions on Compromise Settlements</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">2. Indian Contract Act 1872 §63 (India Code)</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
                <a
                  href="https://www.cibil.com/dispute-resolution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">3. CIBIL Dispute Resolution Portal (CICRA §21)</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">4. RBI Integrated Ombudsman (CMS Portal)</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
                <a
                  href="https://financialservices.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">5. Ministry of Finance (DFS Guidelines)</span>
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
                  href="/get-noc-after-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Get NOC After Loan Settlement
                </Link>
                <Link
                  href="/verify-loan-settlement-letter"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Verify Loan Settlement Letter
                </Link>
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
                  href="/dispute-wrong-settled-status-cibil"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Dispute Wrong Settled Status in CIBIL
                </Link>
                <Link
                  href="/full-and-final-settlement-meaning"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Full and Final Settlement Meaning
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
                  href="/rbi-rules-for-recovery-agents"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  RBI Recovery Agent Rules 2026
                </Link>
                <Link
                  href="/services/personal-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Personal Loan Settlement Services
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
                Specialized in banking compliance, debt resolution strategies, loan dispute negotiations, and CIBIL rectification with extensive experience compiling hardship dossiers for complex NPA defaults.
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
                  Struggling with Loan Settlement Paperwork?
                </h3>
                <p className="text-blue-100 text-sm mt-2 leading-relaxed font-normal">
                  Don&apos;t let banks reject your settlement or recovery agents exploit missing proofs. Let our legal team compile, audit, and represent your hardship dossier.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full text-center bg-white text-blue-900 font-bold py-3.5 px-4 rounded-xl hover:bg-slate-100 transition-all shadow-md text-sm transform hover:-translate-y-0.5"
              >
                Let Us Handle the Paperwork for You
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

          </aside>

        </div>
      </div>
    </main>
  );
}
