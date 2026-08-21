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
  Sparkles,
  Calculator,
  Clock,
  Send,
  UserCheck
} from 'lucide-react';

export default function DisputeWrongSettledStatusClient() {
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
    { id: 'anatomy-of-error', label: '1. Why Banks Misreport Settlements' },
    { id: 'status-comparison', label: '2. Erroneous vs. Clean Status' },
    { id: 'scoring-impact-math', label: '3. Credit Scoring Damage & Math' },
    { id: 'statutory-framework', label: '4. CICRA §21 & RBI Mandates' },
    { id: 'evidence-dossier', label: '5. Crucial Documentary Evidence' },
    { id: 'infographic-overview', label: 'Visual Dispute Blueprint' },
    { id: 'dispute-sop-roadmap', label: '6. 6-Stage Dispute Rectification SOP' },
    { id: 'legal-notice-template', label: '7. Formal Legal Notice Draft' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'resolution-timeline', label: '9. Chronological Milestone Table' },
    { id: 'complex-scenarios', label: '10. Cards, ARCs & Fintech Apps' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'official-sources', label: 'Regulatory Sources & Authorities' }
  ];

  const faqs = [
    {
      q: 'Why did my bank mark my loan as "Settled" when I paid it in full?',
      a: 'Banks often mark fully paid loans as "Settled" due to administrative or technical errors in their Core Banking Systems (CBS). Common causes include failure to link late waiver adjustments to the main loan ledger, branch personnel misallocating the final payment as a partial settlement write-off, or automated batch reporting failures during data transmission to credit bureaus under monthly CICRA feeds.'
    },
    {
      q: 'How do I dispute a wrong "Settled" status on CIBIL?',
      a: 'To dispute an incorrect "Settled" tag, first gather your conclusive documentary evidence—specifically your original unconditional No Dues Certificate (NDC), final loan statement reflecting a ₹0 balance, and bank payment confirmation receipts. Next, submit an online dispute on the official CIBIL Dispute Resolution Portal specifying account details and attaching your NDC. Simultaneously, serve a formal written grievance with your documentary evidence to the lending bank\'s Principal Nodal Officer (PNO) under Section 21 of CICRA 2005.'
    },
    {
      q: 'How long does it take CIBIL and the bank to correct an incorrect settled tag?',
      a: 'Under the Credit Information Companies (Regulation) Act, 2005 and Reserve Bank of India (RBI) Master Directions, credit institutions and bureaus are statutorily required to resolve data disputes and update records within 30 calendar days from the date of dispute lodging. Once the bank verifies the full payoff and updates its monthly bureau tape, CIBIL reflects the corrected "Closed" or "Regular" status within 30 to 45 business days.'
    },
    {
      q: 'What compensation can I claim if the bank delays correcting my wrong CIBIL status?',
      a: 'Under RBI Circular RBI/2023-24/72 (Framework for Compensation to Customers for Delayed Updation/Rectification of Credit Information), banks and Credit Information Companies are legally obligated to pay compensation of ₹100 per calendar day directly to the borrower for any delay exceeding 30 calendar days from the date of raising the dispute with valid proof of full closure.'
    },
    {
      q: 'What is the legal difference between an erroneous "Settled" status and a valid "Closed" status?',
      a: 'A "Closed" status certifies that the borrower satisfied 100% of the contractual loan obligation (principal, interest, and agreed charges) with zero financial sacrifice or loss to the lender, generating a positive credit footprint. An erroneous "Settled" status incorrectly indicates that the bank took a haircut or wrote off unpaid funds, slashing the borrower\'s credit score by 70 to 120 points and causing automated loan application rejections.'
    },
    {
      q: 'Can I sue the bank or approach Consumer Court for an incorrect CIBIL reporting?',
      a: 'Yes. Under the Consumer Protection Act, 2019 and Section 21 of CICRA 2005, wrongfully reporting a fully paid loan as settled constitutes a deficiency in banking service and unfair trade practice causing reputational damage and financial injury. Borrowers can escalate to the RBI Integrated Ombudsman for immediate rectification and compensation, or file a complaint before the District Consumer Disputes Redressal Commission seeking damages for mental agony and denied credit opportunities.'
    },
    {
      q: 'What if the lending bank has sold or assigned my loan to an Asset Reconstruction Company (ARC)?',
      a: 'If the original lender assigned the debt to an ARC under Section 5 of the SARFAESI Act 2002 prior to full payment, the ARC assumes all creditor rights and reporting responsibilities. You must obtain your unconditional NDC directly from the ARC and file your dispute citing the ARC\'s closure confirmation to ensure both the original bank and the ARC update their bureau records to reflect zero overdue and a "Closed" status.'
    },
    {
      q: 'Will correcting a wrong "Settled" status immediately restore my CIBIL score?',
      a: 'Rectifying a wrong "Settled" tag to "Closed" immediately removes the derogatory default flag and eliminates the historical write-off penalty. Borrowers typically experience a score jump of 50 to 90+ points within the first reporting cycle following bureau data correction, while the removal of the negative flag stops automated rejections across prime lending institutions.'
    },
    {
      q: 'What documents are essential to prove the bank\'s reporting error?',
      a: 'Essential evidence includes: (1) The official, unconditional No Dues Certificate (NDC) or No Objection Certificate (NOC) on bank letterhead with an authorized signatory stamp, (2) The complete loan account statement showing all EMI debits, foreclosure credits, and a final ₹0 ledger balance, (3) Bank counterfoils or NEFT/RTGS transaction receipts of the final payoff, and (4) Original sanction/closure correspondence.'
    },
    {
      q: 'What should I do if the bank\'s branch manager refuses to admit the reporting error?',
      a: 'Branch managers often lack backend ledger override authority for accounts archived in core banking systems. Do not waste time arguing at the local branch. Immediately escalate the matter in writing to the bank\'s Principal Nodal Officer (PNO). If the PNO fails to resolve the issue within 30 days, submit a formal grievance to the RBI Integrated Ombudsman at cms.rbi.org.in citing non-compliance with CICRA 2005 §21 and RBI Master Directions.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Swatch Color - Compact 40% Reduced Height) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center z-10 relative">
          {/* Title / H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-sm">
            Dispute an Incorrect <br />
            <span className="text-blue-100">&quot;Settled&quot; Status on Your CIBIL Report</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did the bank wrongly mark your fully paid loan as &quot;Settled&quot;? Learn how to file a formal dispute with CIBIL and send a legal notice to the bank.
          </p>

          {/* Single Rounded Full CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:text-[#1886ff] px-7 py-3 md:px-8 md:py-3.5 rounded-full font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>File a Legal Dispute Against the Bank</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. COUNTER STRIP COMPONENT */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
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
                  <span>Statutory Dispute Standard</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Prepared in accordance with Section 21 of CICRA 2005 &amp; RBI Ombudsman Master Circular 2026.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE BRIEF / KEY TAKEAWAYS CALLOUT */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: DISPUTING WRONGFUL &quot;SETTLED&quot; STATUS ON CIBIL</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                Few administrative errors in Indian retail finance cause as much sudden devastation to a borrower&apos;s financial life as an erroneous &quot;Settled&quot; status marking on a TransUnion CIBIL credit report. When a consumer diligently services their EMIs to full maturity or executes a complete loan foreclosure, they expect their credit report to reflect an unblemished &quot;Closed&quot; flag. However, due to internal core banking reconciliations, unadjusted service fees, or clerical negligence during monthly batch reporting, commercial banks frequently upload fully repaid facilities under derogatory loss codes.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                Under Indian banking jurisprudence, an inaccurate settled tag is not merely an inconvenience; it represents a statutory violation under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA). Borrowers are endowed with enforceable statutory remedies, including mandatory 30-day dispute resolution timelines, access to the Reserve Bank of India (RBI) Integrated Ombudsman, and daily statutory compensation of ₹100 for unrectified reporting delays under RBI Circular RBI/2023-24/72.
              </p>

              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-blue-200/60">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Unconditional NDC is Irrefutable Legal Proof:</strong> An official No Dues Certificate on bank letterhead serves as conclusive legal evidence that contractual liability was extinguished in full without financial sacrifice.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Dual-Pronged Legal Escalation:</strong> Filing a lone dispute on the CIBIL portal is rarely sufficient; borrowers must simultaneously serve a formal demand letter to the Bank&apos;s Principal Nodal Officer (PNO).
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Statutory ₹100/Day Delay Penalty:</strong> If the bank or credit bureau fails to update the erroneous entry within 30 calendar days of receiving proof, they are legally obligated to pay ₹100 per day in compensation.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Immediate 50–90+ Point Score Recovery:</strong> Once the bureau removes the derogatory settlement classification and updates the account to &quot;Closed&quot;, automated lending filters immediately restore underwriting eligibility.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: THE ANATOMY OF ERRONEOUS REPORTING */}
            <section id="anatomy-of-error" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4" />
                <span>Operational Vulnerabilities</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                1. The Anatomy of Erroneous Reporting: Why Banks Misclassify Fully Paid Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To effectively dismantle a wrongful settlement entry, one must first understand how modern scheduled commercial banks (such as HDFC Bank, ICICI Bank, State Bank of India, Axis Bank, and Kotak Mahindra Bank) and Non-Banking Financial Companies (NBFCs) manage credit data transmission. The Indian retail credit ecosystem relies on monthly batch uploads where massive database extracts are transmitted to the four licensed Credit Information Companies: TransUnion CIBIL, Experian India, Equifax India, and CRIF High Mark.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Despite sophisticated core banking software (Finacle, BaNCS, Flexcube), data transmission errors occur with alarming frequency. The primary systemic drivers of wrongful &quot;Settled&quot; markings include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Unadjusted Residual Charges</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    During loan foreclosure, back-office desks frequently fail to reverse minor unbilled charges (e.g., ₹250 late fee or ₹150 GST differential). When the borrower pays the stated foreclosure amount, the core banking system flags the account as partially unrecovered, automatically categorizing the residual waiver as a compromise settlement loss.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>Clerical GL Misallocation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a borrower deposits a lump-sum payoff via RTGS or demand draft, branch cashiers occasionally credit the funds to an internal suspense or recovery general ledger (GL) instead of tagging the main customer loan account. The backend system continues to register an active default, eventually writing it off as a settlement.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                    <CreditCard className="w-4 h-4" />
                    <span>Card Fee Dispute Leakage</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    On credit cards, when customer support agrees to reverse an erroneous annual maintenance fee or unauthorized charge, the reversal is often coded internally as a &quot;concession&quot; rather than a billing correction. Upon card closure, the algorithms transmit the concession as a partial compromise settlement.
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed pt-1">
                Regardless of whether the error originated from a software glitch or human negligence, the legal consequence for the borrower remains identical: the credit bureau marks the account as an unresolved financial loss, severely damaging their credit score and halting access to prime loans.
              </p>
            </section>

            {/* SECTION 2: STATUS COMPARISON TABLE */}
            <section id="status-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4" />
                <span>Credit Bureau Status Taxonomy</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                2. Erroneous Settled vs. Closed vs. Written-Off: The Legal Distinctions
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit underwriters and automated Loan Origination Systems (LOS) categorize credit report flags using strict risk weight algorithms. The table below delineates the profound legal, financial, and credit differences between these distinct reporting flags:
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Bureau Status Tag</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Factual Transaction Reality</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">CIBIL Score Impact</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Automated LOS Action</th>
                        <th className="p-3.5 md:p-4 font-bold">Statutory Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-emerald-700 bg-emerald-50/30">
                          CLOSED (Clean / Standard)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          100% of principal, contractual interest, and fees repaid. Lender incurred zero loss.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-emerald-600">
                          Positive (+750 to 850 Prime)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Instant pre-approval eligibility for prime home loans, auto loans, and premium credit cards.
                        </td>
                        <td className="p-3.5 md:p-4 font-semibold text-emerald-600">
                          None required (Target state).
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors bg-rose-50/20">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-rose-700 bg-rose-50/40">
                          ERRONEOUS &quot;SETTLED&quot;
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Borrower paid 100% in full, but bank erroneously reported a compromise haircut or ledger loss.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-rose-600">
                          Severe Drop (-70 to -120 pts)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Immediate algorithmic rejection across all tier-1 banks due to derogatory loss flag.
                        </td>
                        <td className="p-3.5 md:p-4 font-semibold text-[#1886ff]">
                          Section 21 CICRA Dispute + RBI Ombudsman Escalation.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-amber-700 bg-amber-50/30">
                          ACTUAL COMPROMISE SETTLED
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Borrower suffered hardship and negotiated a discounted One-Time Settlement (OTS), bank waived balance.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-amber-600">
                          Depressed Score (580 to 660)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          High-risk category; prime unsecured loans denied for 36–84 months unless differential is paid.
                        </td>
                        <td className="p-3.5 md:p-4 font-semibold text-amber-700">
                          Voluntary Differential Payoff to convert to Closed.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-red-800 bg-red-50/30">
                          WRITTEN OFF / SUIT FILED
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Total non-payment; account declared Non-Performing Asset (NPA), recovery proceedings initiated.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-red-700">
                          Catastrophic (&lt;550)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Total systemic blacklisting across all banking and financial institutions in India.
                        </td>
                        <td className="p-3.5 md:p-4 font-semibold text-red-700">
                          Legal Debt Settlement / DRT Representation.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs md:text-sm text-slate-600 italic">
                <strong>Key Legal Distinction:</strong> While an actual compromise settlement accurately reflects a negotiated haircut, an erroneous settlement tag is a factual falsehood. The law affords you the right to demand its complete and unconditional correction without paying an extra rupee.
              </p>
            </section>

            {/* SECTION 3: SCORING IMPACT & MATH CARD */}
            <section id="scoring-impact-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calculator className="w-4 h-4" />
                <span>Credit Scoring Analytics</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                3. The Exact Credit Scoring Damage: Mathematical Weight Breakdown
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                TransUnion CIBIL computes a borrower&apos;s 3-digit credit score (ranging from 300 to 900) using a multi-factor multivariate scoring algorithm. An erroneous settlement tag contaminates the single most heavily weighted factor in the entire algorithm: <strong>Payment History</strong>.
              </p>

              {/* Technical Scoring / Math Card */}
              <div className="rounded-2xl border-2 border-blue-200 bg-white p-5 md:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2 font-black text-slate-900 text-sm md:text-base">
                    <TrendingUp className="w-5 h-5 text-[#1886ff]" />
                    <span>CIBIL Score Factor Weightage &amp; Impact Analysis</span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-800">
                    Critical Damage Risk
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200">
                    <span className="text-2xl font-black text-blue-700 block">35%</span>
                    <span className="text-xs font-bold text-slate-800 block mt-0.5">Payment History</span>
                    <span className="text-[10px] text-rose-600 font-semibold block mt-1">-70 to -120 pts if Settled</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-2xl font-black text-slate-700 block">30%</span>
                    <span className="text-xs font-bold text-slate-800 block mt-0.5">Credit Utilization</span>
                    <span className="text-[10px] text-slate-500 block mt-1">Max 30% Threshold</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-2xl font-black text-slate-700 block">15%</span>
                    <span className="text-xs font-bold text-slate-800 block mt-0.5">Credit History Length</span>
                    <span className="text-[10px] text-slate-500 block mt-1">Vintage &amp; Trade Longevity</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-2xl font-black text-slate-700 block">10%</span>
                    <span className="text-xs font-bold text-slate-800 block mt-0.5">Credit Mix</span>
                    <span className="text-[10px] text-slate-500 block mt-1">Secured vs Unsecured</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-2xl font-black text-slate-700 block">10%</span>
                    <span className="text-xs font-bold text-slate-800 block mt-0.5">New Inquiries</span>
                    <span className="text-[10px] text-slate-500 block mt-1">Hard Inquiries in 90 Days</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-slate-100 text-xs md:text-sm space-y-2">
                  <div className="text-blue-400 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>The Mathematical Multiplier Effect of Erroneous Reporting:</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    When a facility is marked &quot;Settled&quot;, the scoring engine computes a severity coefficient based on Days Past Due (DPD) and booked loss ratio. Even if a borrower boasts a 10-year perfect track record across 5 other credit lines, a single misreported ₹50,000 personal loan will degrade their overall composite score from <strong>785 (Super-Prime)</strong> down to <strong>675 (Sub-Prime)</strong>. Furthermore, underwriting algorithms in Indian retail banking trigger an instant hard disqualification whenever a &quot;Settled&quot; flag is detected within the preceding 36 months.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: STATUTORY & LEGAL FRAMEWORK */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory Enactments &amp; Protections</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                4. Statutory &amp; Legal Framework: CICRA 2005 &amp; RBI Mandates
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Consumers in India are not defenseless against banking clerical errors. The legal apparatus established by the Parliament of India and the Reserve Bank of India imposes strict fiduciary and legal liabilities on credit institutions that publish false or unverified customer credit records:
              </p>

              <div className="space-y-3.5">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1886ff]"></span>
                    Section 21 of the Credit Information Companies (Regulation) Act, 2005
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Section 21 of CICRA 2005 mandates that every credit institution (Bank/NBFC) and credit information company (CIBIL/Experian/Equifax/CRIF) shall take all reasonable steps to ensure that the credit information contained in its database is <strong>accurate, complete, and up to date</strong>. If an individual brings an inaccuracy to the institution&apos;s notice, the institution is statutorily bound to update or expunge the inaccurate entry within <strong>30 calendar days</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1886ff]"></span>
                    RBI Master Directions on Credit Information Companies (Data Rectification)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Under the Master Directions issued under Section 11 of CICRA and Section 35A of the Banking Regulation Act, 1949, all credit institutions must appoint dedicated Nodal Officers for credit bureau reconciliation. Upon receipt of full repayment, the credit institution is obligated to reflect the closure in its subsequent monthly data submission without requiring extra procedural hurdles from the consumer.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border-2 border-emerald-300 bg-emerald-50/20 shadow-2xs space-y-1.5">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                    RBI ₹100/Day Customer Compensation Framework (Circular RBI/2023-24/72)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    To curb banking apathy, the Reserve Bank of India implemented a mandatory compensation framework. If a credit institution or credit bureau fails to update or rectify a disputed credit record within <strong>30 calendar days</strong> of receiving a valid complaint with supporting documentation, the defaulting entity must pay compensation of <strong>₹100 per calendar day</strong> directly into the complainant&apos;s bank account until the entry is rectified.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 5: EVIDENCE DOSSIER */}
            <section id="evidence-dossier" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4" />
                <span>Documentary Pre-Requisites</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                5. Crucial Documentary Evidence: Building an Irrefutable Dispute Dossier
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before serving formal legal notices or filing bureau disputes, you must assemble a comprehensive evidentiary dossier. Bank compliance desks and the RBI Ombudsman evaluate disputes based on tangible transaction documentation rather than verbal assertions. Ensure your dossier contains:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>1. Unconditional No Dues Certificate (NDC / NOC)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The NDC must be on the bank&apos;s official letterhead, bearing an authorized signatory stamp and reference number. It must explicitly state that the loan account has been closed in full with zero remaining liability and no waiver granted.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>2. Comprehensive Loan Statement Showing ₹0 Balance</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Obtain a certified statement of the loan account covering the entire lifecycle from inception to final closure, verifying that the terminal principal balance and interest accrued are exactly ₹0.00.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>3. Traceable Payoff Banking Receipts</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bank counterfoils, stamped deposit challans, or NEFT/RTGS transaction UTR numbers confirming the final prepayment/foreclosure remittance directly into the lending bank&apos;s centralized master account.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>4. Current Bureau Credit Information Report (CIR)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A fresh, full-form CIBIL CIR generated within the last 15 days showing the exact Account Number, Member Name, Date Reported, and the erroneous &quot;Settled&quot; status flag under the Accounts Information section.
                  </p>
                </div>
              </div>
            </section>

            {/* HIGH-IMPACT INFOGRAPHIC BANNER EMBEDDED (Between Sections 4/5 and 6) */}
            <div id="infographic-overview" className="scroll-target bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-10 text-slate-800">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-blue-500">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-white text-xs shadow-sm">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-200 block">
                      Legal Dispute &amp; Action Blueprint
                    </span>
                    <h3 className="text-sm md:text-base font-black text-white leading-tight">
                      How to Dispute Wrongful &quot;Settled&quot; Status on CIBIL: Process Overview
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/dispute-wrong-settled-status-cibil.jpg"
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
                  <img
                    src="/images/infographics/dispute-wrong-settled-status-cibil.jpg"
                    alt="How to Dispute Wrongful Settled Status on CIBIL Infographic Blueprint"
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Statutory Remedy:</strong> Serve legal notice to the Bank Nodal Officer &amp; lodge a CIBIL dispute to trigger mandatory 30-day correction.</span>
                </div>
                <Link href="/contact" className="text-[#1886ff] font-bold hover:underline">
                  Request Advocate Representation &rarr;
                </Link>
              </div>
            </div>

            {/* SECTION 6: 6-STAGE DISPUTE RECTIFICATION SOP */}
            <section id="dispute-sop-roadmap" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                6. 6-Stage Dispute &amp; Rectification SOP: Step-by-Step Execution
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this sequential 6-stage Standard Operating Procedure to enforce your statutory rights and ensure full bureau correction across CIBIL, Experian, Equifax, and CRIF High Mark:
              </p>

              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Step 1: Download CIR &amp; Identify the Exact Control Number (ECN)
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Log in to the official TransUnion CIBIL portal and obtain your updated Credit Information Report. Record the 9-digit <strong>Enquiry Control Number (ECN)</strong> printed on the top header of the report. The ECN is mandatory for lodging an electronic dispute ticket.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Step 2: Lodge an Official Online Dispute on the CIBIL Dispute Portal
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Navigate to CIBIL&apos;s Online Dispute Resolution section. Select the disputed loan account, choose &quot;Account Details Dispute&quot;, and select <em>&quot;Incorrect Status / Loan Paid in Full - Status should be Closed&quot;</em>. Enter your remarks citing the NDC reference number and date of issuance.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Step 3: Serve Formal Written Representation to the Bank Principal Nodal Officer
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Simultaneously dispatch a formal written representation via Registered Post AD and official email to the bank&apos;s <strong>Principal Nodal Officer (PNO)</strong> and Credit Bureau Operations Desk. Attach certified copies of the NDC, foreclosure statement, and payment receipts, referencing Section 21 of CICRA 2005.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Step 4: Monitor the Statutory 30-Day Inter-Institutional Verification Loop
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Under CICRA rules, CIBIL forwards the dispute query directly to the lending bank&apos;s automated verification gateway. The bank has a statutory maximum of <strong>30 calendar days</strong> to verify internal records and upload an amended data feed confirming full closure.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Step 5: Escalate to the RBI Integrated Ombudsman on Day 31 (If Unresolved)
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      If the bank fails to rectify the status within 30 days or issues an evasive denial, immediately lodge a statutory complaint on the RBI Complaint Management System (<strong>cms.rbi.org.in</strong>). Cite failure of CICRA Section 21 compliance and demand ₹100/day statutory compensation under RBI Circular RBI/2023-24/72.
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Step 6: Confirm Cross-Bureau Rectification &amp; Score Rebound
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Upon resolution, verify that all four credit bureaus (CIBIL, Experian, Equifax, CRIF) reflect &quot;Closed&quot; status with ₹0 Current Balance and zero overdue amounts. Download the updated CIR and observe the immediate 50–90+ point credit score restoration.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 7: FORMAL LEGAL NOTICE TEMPLATE */}
            <section id="legal-notice-template" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4" />
                <span>Statutory Notice Draft</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                7. Formal Legal Notice Draft: Demand for Immediate Rectification under CICRA §21
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Use this battle-tested formal legal notice template when serving representation to the Principal Nodal Officer and Central Credit Bureau Operations desk of the lending bank:
              </p>

              {/* Monospace Code / Notice Template Container */}
              <div className="rounded-2xl border border-slate-700 bg-slate-900 text-slate-100 p-5 md:p-6 shadow-sm overflow-x-auto text-xs font-mono leading-relaxed">
                <div className="text-blue-400 font-bold mb-3 pb-2 border-b border-slate-800 flex items-center justify-between">
                  <span>FORMAL LEGAL DEMAND NOTICE UNDER SECTION 21 OF CICRA, 2005</span>
                  <span className="text-[10px] text-slate-400 uppercase">Speed Post / Regd AD &amp; Email</span>
                </div>
                <pre className="whitespace-pre-wrap text-slate-200">
{`To,
The Principal Nodal Officer / Central Grievance Redressal Authority,
[Name of Lending Bank / NBFC],
[Registered / Corporate Office Address],
Email: [nodal.officer@bankname.com]

CC: The Head of Operations, TransUnion CIBIL Limited, One World Center, Mumbai.

SUBJECT: STATUTORY DEMAND FOR IMMEDIATE RECTIFICATION OF ERRONEOUS "SETTLED" STATUS TO "CLOSED" IN CREDIT BUREAU RECORDS AND CLAIM FOR COMPENSATION FOR LOAN ACCOUNT NO: [INSERT LOAN A/C NO.]

Respected Sir/Madam,

I, [Borrower Full Name], residing at [Complete Residential Address], holding PAN: [Insert PAN] and Aadhaar: [Insert Aadhaar], do hereby state and demand as follows:

1. That I was the sole borrower of the captioned Loan Facility [Account Number: XXXXXXXX] sanctioned and disbursed by your esteemed institution.
2. That I diligently paid all equated monthly installments and completely paid off the entire loan obligation in full on [Insert Date of Final Payment / Foreclosure], resulting in a ₹0.00 terminal balance.
3. That your institution duly acknowledged full satisfaction of all dues and issued an official, unconditional No Dues Certificate (NDC / NOC) bearing Reference No. [Insert NDC Ref No.] dated [Insert Date of NDC] (enclosed herewith as Annexure A).
4. That notwithstanding the unconditional liquidation of all liabilities, your institution has unlawfully and negligently reported the said account to TransUnion CIBIL, Experian India, Equifax India, and CRIF High Mark under the derogatory classification "SETTLED" / "POST-WRITE-OFF SETTLED" instead of "CLOSED".
5. That this wrongful reporting represents a gross breach of Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), which mandates credit institutions to maintain authentic, accurate, and up-to-date data.
6. That as a direct consequence of your wrongful reporting, my CIBIL credit score has suffered an artificial degradation of [Insert Score Drop, e.g., 85 points], leading to unjust rejections of subsequent credit applications and severe reputational injury.

IN LIGHT OF THE AFOREMENTIONED FACTS, YOU ARE HEREBY CALLED UPON TO:
a) Immediately transmit a corrected electronic data tape to TransUnion CIBIL, Experian, Equifax, and CRIF High Mark updating Loan Account No. [Insert Account No.] from "Settled" to "CLOSED" with ₹0 overdue within 15 days of receipt of this notice.
b) Provide a written confirmation along with the internal Bureau Rectification Request Reference Number to the undersigned.

TAKE NOTICE that if you fail to rectify the credit records within the statutory 30-day window prescribed under RBI guidelines, I shall be constrained to escalate this matter to the Reserve Bank of India Integrated Ombudsman under the Reserve Bank - Integrated Ombudsman Scheme, 2021, and claim statutory compensation of ₹100 per day of delay under RBI Circular RBI/2023-24/72, alongside filing appropriate claims for damages before the competent Consumer Disputes Redressal Commission entirely at your risk and consequence.

Yours faithfully,

___________________________
[Signature]
[Borrower Name]
[Contact Mobile Number]
[Email Address]
Date: [DD/MM/YYYY]
Place: [City, State]

Enclosures:
1. Copy of Unconditional No Dues Certificate (Annexure A).
2. Copy of Final Foreclosure Account Statement (Annexure B).
3. Copy of Payment Confirmation Challan / RTGS Receipt (Annexure C).
4. Copy of Recent CIBIL Credit Information Report (Annexure D).`}
                </pre>
              </div>
            </section>

            {/* SECTION 8: 3-TIER ESCALATION MATRIX */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4" />
                <span>Grievance Architecture</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                8. 3-Tier Escalation Matrix for Unresolved Banking Disputes
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When dealing with commercial banks, frontline branch personnel often claim inability to modify historical credit feeds due to archived core banking ledgers. Do not get trapped in endless branch visits. Execute this structured 3-tier regulatory escalation:
              </p>

              {/* Escalation Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="text-xs font-black text-[#1886ff] uppercase tracking-wider">
                    Tier 1 (Days 1–10)
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Branch Manager &amp; CRM Desk
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a formal written letter with NDC copy to the Home Branch Manager and log a formal service request on the bank&apos;s centralized internet banking grievance portal. Demand an internal CRM Service Request (SR) number.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="text-xs font-black text-blue-600 uppercase tracking-wider">
                    Tier 2 (Days 11–30)
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Principal Nodal Officer (PNO)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the branch fails to rectify within 10 days, escalate to the apex Principal Nodal Officer. The PNO possesses executive administrative override authority to initiate manual off-cycle bureau corrections directly with CIBIL.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border-2 border-emerald-300 bg-emerald-50/20 shadow-2xs space-y-2">
                  <div className="text-xs font-black text-emerald-700 uppercase tracking-wider">
                    Tier 3 (Day 31+)
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    RBI Integrated Ombudsman
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File an online petition at <strong>cms.rbi.org.in</strong>. The Ombudsman operates with quasi-judicial powers to order immediate status restoration and enforce mandatory ₹100/day customer compensation for statutory delays.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: RESOLUTION TIMELINE */}
            <section id="resolution-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4" />
                <span>Chronological Milestones</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                9. Chronological Resolution Timeline: What to Expect at Every Stage
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Rectifying an erroneous credit bureau marking follows a predictable institutional lifecycle. The table below outlines key procedural milestones and expected credit score recovery:
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Timeline Stage</th>
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Institutional Action</th>
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Bureau State</th>
                        <th className="p-3.5 font-bold">Credit Score Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Phase 1: Days 1–15
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Dispute lodged on CIBIL portal; Legal Notice served to Bank PNO with NDC proof.
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Account tagged as &quot;Under Dispute&quot; by CIBIL; automated query sent to bank gateway.
                        </td>
                        <td className="p-3.5 font-semibold text-slate-600">
                          Temporary freeze on derogatory weighting during active investigation.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Phase 2: Days 16–30
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Bank Credit Operations verifies internal ledger, approves correction, and uploads revised tape.
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Status updated from &quot;Settled&quot; to &quot;CLOSED&quot;; Amount Overdue set to ₹0.
                        </td>
                        <td className="p-3.5 font-semibold text-emerald-600">
                          Immediate score jump of +50 to +80 points upon tape processing.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Phase 3: Days 31–60+
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Escalation to RBI Ombudsman (if delayed); Ombudsman awards ₹100/day penalty &amp; orders immediate refresh.
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          All 4 credit bureaus (CIBIL, Experian, Equifax, CRIF) synchronized to clean Closed status.
                        </td>
                        <td className="p-3.5 font-semibold text-emerald-700">
                          Full restoration to 750–800+ Super-Prime band; 100% prime loan eligibility restored.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 10: COMPLEX SCENARIOS */}
            <section id="complex-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4" />
                <span>Specialized Banking Scenarios</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                10. Complex Scenarios: Credit Cards, Asset Reconstruction Companies &amp; Fintech Apps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Certain retail lending structures involve third-party entities, securitization, or digital intermediaries that complicate the dispute resolution pathway:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Credit Card Annual Fee Disputes
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Card issuers frequently charge unauthorized renewal or inactive fees, subsequently reporting the card as settled when the customer pays only the actual purchase spends. Under RBI Credit Card Directions, banks cannot report disputed charges to credit bureaus while investigation is pending.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Loans Assigned to ARCs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank assigned your loan portfolio to an Asset Reconstruction Company (ARC) under SARFAESI Section 5 before you paid it off, the ARC holds all legal creditor rights. You must obtain the NDC from the ARC and compel both the originating bank and the ARC to submit synchronized bureau updates.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-[#1886ff]" />
                    Digital Fintech Lending Apps
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For instant app loans (Lending Service Providers / LSPs), the frontend digital platform does not report to CIBIL. You must identify the underlying RBI-registered NBFC balance sheet lender, serve notice to their compliance desk, and obtain the closure confirmation directly from the regulated NBFC.
                  </p>
                </div>
              </div>
            </section>

            {/* COMPANY SECTION (Directly above FAQ) */}
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
                Frequently Asked Questions on Disputing Wrong Settled Status on CIBIL
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to view detailed legal and banking answers verified by our debt dispute and CIBIL rectification experts:
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
                All dispute procedures, compensation frameworks, and banking rights detailed on this page are grounded in official Indian statutory enactments:
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
                Explore Related Credit Dispute &amp; Settlement Resources:
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
                  href="/improve-cibil-after-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Improve CIBIL After Settlement
                </Link>
                <Link
                  href="/get-loan-after-settlement"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Get Loan After Settlement
                </Link>
                <Link
                  href="/settlement-of-loan-letter"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Settlement of Loan Letter Format
                </Link>
                <Link
                  href="/is-loan-settlement-illegal-in-india-truth"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Is Loan Settlement Illegal in India?
                </Link>
                <Link
                  href="/services/personal-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Personal Loan Dispute &amp; Settlement
                </Link>
                <Link
                  href="/services/credit-card-settlement"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Credit Card Dispute Resolution
                </Link>
                <Link
                  href="/services/anti-harassment"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Anti-Harassment Legal Defense
                </Link>
                <Link
                  href="/rbi-rules-for-recovery-agents"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  RBI Recovery Agent Guidelines
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

            {/* Card 2: Emergency Advocate CTA Card (Vibrant Blue Gradient + White CTA Button) */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 shadow-md text-white space-y-4">
              <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-lg bg-white/15 text-blue-100 text-[11px] font-bold tracking-wide">
                <Lock className="w-3.5 h-3.5" />
                <span>100% CONFIDENTIAL</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">
                  Bank Wrongly Marked Your Loan as Settled?
                </h3>
                <p className="text-blue-100 text-sm mt-2 leading-relaxed font-normal">
                  Our legal dispute specialists serve formal statutory notices to the Bank Principal Nodal Officer and escalate to the RBI Integrated Ombudsman to enforce clean bureau rectification.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full text-center bg-white text-blue-900 font-bold py-3.5 px-4 rounded-xl hover:bg-slate-100 transition-all shadow-md text-sm transform hover:-translate-y-0.5"
              >
                File a Legal Dispute Against the Bank
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

            {/* Card 3: Trust Commitments Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-5 space-y-3 text-xs shadow-xs">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                CredSettle Trust Commitments
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked dispute resolution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> Zero middleman fund holding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> 100% lawful statutory dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated banking dispute advocates.</span>
                </li>
              </ul>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}
