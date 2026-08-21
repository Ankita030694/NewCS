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
  Clock,
  Landmark,
  FileCheck,
  Layers,
  Gavel
} from 'lucide-react';

export default function FullAndFinalSettlementMeaningClient() {
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
    { id: 'legal-definition', label: '1. Legal Definition & Banking Taxonomy' },
    { id: 'settlement-vs-noc', label: '2. Settlement Letter vs. NDC / NOC' },
    { id: 'post-payment-events', label: '3. What Happens After Paying Settlement' },
    { id: 'cibil-scoring-math', label: '4. CIBIL Bureau Math & Algorithms' },
    { id: 'infographic-roadmap', label: 'Visual F&F Resolution Blueprint' },
    { id: 'step-by-step-sop', label: '5. 6-Stage Standard Operating Procedure' },
    { id: 'statutory-framework', label: '6. Contract Act §63 & Legal Mechanics' },
    { id: 'escalation-matrix', label: '7. 3-Tier Escalation & RBI Ombudsman' },
    { id: 'resolution-timeline', label: '8. Institutional Milestones & Timelines' },
    { id: 'special-scenarios', label: '9. Credit Cards, ARCs & Fintech Apps' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'official-sources', label: 'Regulatory Sources & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is the legal definition of a Full and Final (F&F) Settlement in banking?',
      a: 'A Full and Final (F&F) Settlement—commonly referred to in Indian banking jurisprudence as a One-Time Settlement (OTS) or Compromise Settlement—is a legally binding accord reached between a borrower in distress and a regulated creditor (Bank, NBFC, or ARC). Under this agreement, the creditor consents to accept a mutually agreed lump-sum or structured tranche amount that is less than the total outstanding ledger balance (principal plus accrued penal interest and legal fees) as complete and irrevocable satisfaction of the entire debt obligation under Section 63 of the Indian Contract Act, 1872.'
    },
    {
      q: 'What is the exact difference between a Settlement Letter and a No Objection Certificate (NOC) / No Dues Certificate (NDC)?',
      a: 'An OTS Settlement Sanction Letter is a conditional offer document issued prior to payment, detailing the discounted settlement amount, payment due dates, and terms of compromise; it does not extinguish the debt until fully paid. In contrast, a No Objection Certificate (NOC) or No Dues Certificate (NDC) is a post-payment legal discharge instrument issued on official bank letterhead after realization of funds. The NDC certifies that all agreed settlement terms were fulfilled, the outstanding loan balance is ₹0, all security charges/hypothecations are released, and the lender possesses zero future claims against the borrower.'
    },
    {
      q: 'What happens immediately after paying the settlement amount to the bank?',
      a: 'Immediately upon payment clearance, several critical backend banking and legal events occur: (1) The funds are credited to your loan ledger and reconciled by Central Operations; (2) The bank\'s credit committee passes a formal Loss/Sacrifice Provisioning voucher to write off the waived portion; (3) The account status transitions in the Core Banking System (CBS) to settled/closed; (4) The lender is statutorily mandated to issue an unconditional No Dues Certificate within 30 days under RBI Master Direction RBI/2023-24/60; and (5) The lender transmits an updated data tape in the next monthly reporting cycle to CIBIL, Experian, Equifax, and CRIF High Mark.'
    },
    {
      q: 'Does a Full and Final Settlement wipe out or clear my CIBIL credit report?',
      a: 'No. A full and final settlement does not wipe your credit file clean. Because the bank incurred a financial loss by waiving part of the contractually owed balance, the account status on your Credit Information Report (CIR) changes from "Default/Overdue/Written Off" to "Settled" (or "Post-Write-off Settled"). While this halts further default escalation and freezes Days Past Due (DPD) accumulation, the "Settled" remark remains on bureau records for 7 years (84 months) unless you subsequently pay the waived differential amount to convert the tag to "Closed".'
    },
    {
      q: 'Can a bank or recovery agency demand more money after a Full and Final settlement is paid?',
      a: 'Under Section 63 of the Indian Contract Act, 1872, once a creditor accepts the negotiated settlement amount in full satisfaction of the claim and the borrower satisfies all conditions within the stipulated validity date, the doctrine of promissory estoppel legally bars the lender or its assignees from demanding additional payments or reviving the waived amount. If an aggressive collection agency attempts further recovery, serving a formal legal notice referencing the OTS letter, payment receipts, and NDC immediately quashes unlawful demands.'
    },
    {
      q: 'What is the statutory RBI timeline for lenders to deliver the NOC after settlement?',
      a: 'Under Reserve Bank of India (RBI) Directive RBI/2023-24/60 (Directions on Release of Movable and Immovable Property Documents), all Commercial Banks, NBFCs, and Housing Finance Companies are legally required to issue the final No Dues Certificate and return all original title deeds/collateral documents within 30 calendar days of receiving full settlement consideration. Failure to comply mandates the lender to pay the borrower ₹5,000 per calendar day of unexcused delay.'
    },
    {
      q: 'How does an F&F settlement impact my credit score mathematically?',
      a: 'When a settlement is completed, the immediate impact depends on the prior state of the account. If the account was actively accumulating 90+ DPD and late fees, settling freezes delinquency and reduces your revolving Credit Utilization Ratio (CUR) to 0, which halts further score collapse and stabilizes the score. However, because Payment History accounts for 35% of the CIBIL algorithm, the historical delinquencies and "Settled" status incur an algorithmic penalty, typically keeping scores depressed between 620 and 700 until positive credit rebuilding steps are taken.'
    },
    {
      q: 'What critical elements must be verified in a Settlement Sanction Letter before paying?',
      a: 'Before making any payment, verify 6 mandatory elements: (1) Official letterhead with corporate CIN and branch stamp; (2) Exact borrower legal name, PAN, and Loan Account Number; (3) Precise settlement amount broken down into single payment or explicit installment dates; (4) Clear statement that payment constitutes "Full and Final Satisfaction" of the entire claim; (5) Direct bank collection account details (never pay via personal UPI or cash to an agent); and (6) Name, designation, employee code, and signature of an authorized bank official.'
    },
    {
      q: 'Can I take a new personal loan or credit card after doing a Full and Final Settlement?',
      a: 'Yes, but prime scheduled banks will generally decline unsecured personal loans and premium credit cards during the initial 12–24 months post-settlement due to automated underwriting filters flagging the "Settled" status. However, borrowers can successfully rebuild eligibility by obtaining a secured credit card against a Fixed Deposit (FD), maintaining a credit utilization ratio below 30%, servicing all other existing EMIs punctually, or paying the waived differential amount to upgrade the status to "Closed".'
    },
    {
      q: 'What is the legal procedure if the bank refuses to update CIBIL after settlement payment?',
      a: 'If the bank fails to update the credit bureaus within 30 days of receiving settlement funds, you should: (1) Raise a formal grievance with the Bank\'s Principal Nodal Officer (PNO); (2) Log an online dispute on the TransUnion CIBIL Dispute Resolution portal attaching the OTS letter and NDC; and (3) If unresolved after 30 days, file a statutory complaint with the RBI Integrated Ombudsman at cms.rbi.org.in. Under RBI Circular RBI/2023-24/72, borrowers are entitled to ₹100 per day compensation for every day of delay beyond the statutory 30-day window.'
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-sm">
            What Does &quot;Full and Final Settlement&quot; <br />
            <span className="text-blue-100">Actually Mean? Legal &amp; CIBIL Guide</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal md:font-medium text-white/95 leading-relaxed">
            Understand the legal definition of a Full and Final (F&amp;F) debt settlement, what it means for your CIBIL, and the exact steps to finalize it.
          </p>

          {/* Single Rounded Full CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:text-[#1886ff] px-7 py-3 md:px-8 md:py-3.5 rounded-full font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Need Help Negotiating an F&amp;F Settlement?</span>
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
                  <span>Statutory Compliance 2026</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Aligned with Section 63 Indian Contract Act, RBI Master Directions &amp; CICRA 2005.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Callout Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: UNDERSTANDING FULL AND FINAL DEBT SETTLEMENT</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Absolute Legal Debt Extinguishment:</strong> A Full and Final (F&amp;F) Settlement—legally classified as a Compromise Settlement or One-Time Settlement (OTS)—is a bilateral contract under Section 63 of the Indian Contract Act, 1872. When executed properly, the creditor accepts a discounted lump sum and irrevocably relinquishes all future legal claims against the borrower.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Settlement Letter vs. No Dues Certificate:</strong> A settlement sanction letter is merely an <em>offer of accord</em>; it does not close the loan. Complete satisfaction occurs only when the lender receives the agreed funds and issues an unconditional <strong>No Dues Certificate (NDC) / No Objection Certificate (NOC)</strong> on official letterhead.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">CIBIL Bureau Reporting Dynamics:</strong> Settleing debt stops compounding interest, halts aggressive recovery harassment, and eliminates accumulating Days Past Due (DPD). However, the credit bureaus record the trade-line as &quot;Settled&quot; (reflecting the lender&apos;s financial sacrifice), requiring proactive credit rebuilding or subsequent differential payoff to convert to &quot;Closed&quot;.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Strict RBI 30-Day Document Release Mandate:</strong> Under RBI Directive RBI/2023-24/60, all regulated banks and NBFCs must issue the final NDC and return all original security/property deeds within <strong>30 calendar days</strong> of receiving settlement remittance, under penalty of ₹5,000 per day of delay.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: LEGAL DEFINITION & BANKING TAXONOMY */}
            <section id="legal-definition" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4" />
                <span>Banking Jurisprudence &amp; Terminology</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                1. Legal Definition &amp; Banking Taxonomy of a Full and Final Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In Indian banking jurisprudence, the phrase <strong>&quot;Full and Final Settlement&quot; (F&amp;F Settlement)</strong> refers to a formal compromise agreement entered into between a distressed borrower and a regulated lending institution (Scheduled Commercial Bank, NBFC, Housing Finance Company, or Asset Reconstruction Company). Under this accord, the lender formally agrees to accept an amount lower than the total contractually outstanding liability (which encompasses unpaid principal, accrued regular interest, penal interest, late fees, and legal charges) in complete and absolute discharge of the underlying loan contract.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers frequently conflate different loan closure states. To understand where a Full and Final Settlement sits within the banking spectrum, examine the five distinct legal states of loan resolution in India:
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Resolution Mechanism</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Legal Mechanism &amp; Financial Payoff</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">CIBIL Status Tag</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Lender Financial Loss</th>
                        <th className="p-3.5 md:p-4 font-bold">Future Legal Liability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-emerald-700 bg-emerald-50/30">
                          Standard Full Payoff (Regular Closure)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Borrower satisfies 100% of the contractual principal, interest, and applicable foreclosure charges without any waiver.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-emerald-600">
                          CLOSED / REGULAR
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-emerald-600">
                          ₹0 (Zero Loss)
                        </td>
                        <td className="p-3.5 md:p-4 font-semibold text-emerald-600">
                          Fully Extinguished
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-blue-700 bg-blue-50/30">
                          Full &amp; Final Settlement (Compromise / OTS)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Bilateral agreement where lender accepts discounted lump-sum consideration; balance is written off as a commercial sacrifice.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-blue-700">
                          SETTLED / POST-WRITE-OFF SETTLED
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 text-amber-600 font-semibold">
                          Waived Amount Written Off
                        </td>
                        <td className="p-3.5 md:p-4 font-semibold text-emerald-600">
                          Extinguished via Estoppel (§63)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-amber-700 bg-amber-50/30">
                          Loan Restructuring / Rescheduling
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Tenure extension, interest rate reduction, or EMI moratorium without principal write-off; contract remains active.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-amber-700">
                          RESTRUCTURED
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Zero Principal Loss (Deferred Yield)
                        </td>
                        <td className="p-3.5 md:p-4 text-amber-700">
                          Active ongoing debt obligation
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-rose-700 bg-rose-50/30">
                          Unilateral Bank Write-Off (Bad Debt)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Internal accounting transfer to provision for NPA; lender retains active legal rights to recover and assign to ARCs.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-rose-600">
                          WRITTEN OFF
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-rose-600">
                          100% Provisioned
                        </td>
                        <td className="p-3.5 md:p-4 font-semibold text-rose-600">
                          Active legal recovery &amp; arbitration
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-purple-700 bg-purple-50/30">
                          Willful Default Classification
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Borrower has capacity to pay but defaults or siphons funds; penalized under RBI Master Circular on Willful Defaulters.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-purple-700">
                          SUIT FILED / WILLFUL DEFAULT
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 text-rose-700 font-semibold">
                          Total Loss
                        </td>
                        <td className="p-3.5 md:p-4 text-rose-700 font-semibold">
                          Criminal prosecution &amp; civil recovery
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs md:text-sm text-slate-600 italic">
                <strong>Key Takeaway:</strong> A Full and Final Settlement is NOT a unilateral default or write-off; it is a legally enforceable compromise sanctioned by the bank&apos;s competent authority under the doctrine of accord and satisfaction.
              </p>
            </section>

            {/* SECTION 2: SETTLEMENT LETTER VS NOC */}
            <section id="settlement-vs-noc" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileCheck className="w-4 h-4" />
                <span>Documentation &amp; Evidentiary Hierarchy</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                2. Critical Distinction: Settlement Sanction Letter vs. No Dues Certificate (NOC/NDC)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                One of the most catastrophic mistakes borrowers make is assuming that receiving an OTS Sanction Letter means their debt is closed. In legal reality, the Settlement Sanction Letter and the No Dues Certificate occupy diametrically opposed positions in the debt resolution lifecycle:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Settlement Letter Card */}
                <div className="p-5 rounded-2xl bg-white border border-blue-200 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>The Settlement Sanction Letter (Pre-Payment Offer)</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The settlement letter is a <strong>conditional proposal</strong> issued by the bank specifying the exact terms under which they are willing to discharge the loan. It outlines the negotiated settlement sum, the installment tranches, and the hard validity cut-off date.
                  </p>
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                    <strong>Legal Limitation:</strong> If you miss the payment validity deadline even by 24 hours or pay a single rupee less, the settlement letter becomes null and void automatically, and the bank reserves the right to reinstate the full original debt with compounded penal charges.
                  </div>
                </div>

                {/* NOC / NDC Card */}
                <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>The No Dues Certificate (Post-Payment Discharge)</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The No Dues Certificate (NDC) or No Objection Certificate (NOC) is the <strong>absolute legal deed of release</strong> issued <em>after</em> the settlement funds are cleared. It formally certifies that all settlement obligations have been satisfied in full and the account balance is ₹0.
                  </p>
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
                    <strong>Legal Power:</strong> The NDC is the only document recognized by TransUnion CIBIL, Experian, Equifax, and CRIF High Mark as conclusive proof to freeze delinquency reporting, cancel liens, and protect the borrower from future third-party recovery attempts.
                  </div>
                </div>
              </div>

              {/* Warning Callout Box */}
              <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 text-xs md:text-sm text-rose-950 space-y-2 leading-relaxed">
                <div className="flex items-center gap-2 font-bold text-rose-900">
                  <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  <span>The Dangerous Myth of the Cashier / Agent Receipt</span>
                </div>
                <p>
                  Never accept a verbal assurance from a collection executive, a payment receipt stamped &quot;Subject to realization,&quot; or an informal WhatsApp confirmation as proof of loan closure. Unless the bank issues an official NDC on physical or digitally verified corporate letterhead, your loan account remains active on the bank&apos;s Core Banking System (CBS) ledger.
                </p>
              </div>
            </section>

            {/* SECTION 3: WHAT HAPPENS AFTER PAYING SETTLEMENT AMOUNT */}
            <section id="post-payment-events" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4" />
                <span>Backend Banking Lifecycle</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                3. What Happens Immediately After Paying the Settlement Amount?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you execute your payment according to the approved settlement sanction letter, a complex chain of backend banking, accounting, and regulatory compliance events is initiated across multiple departments:
              </p>

              <div className="space-y-3.5">
                {/* Event 1 */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1886ff]"></span>
                    Stage 1: Central Operations (COPS) Remittance Reconciliation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Your payment (remitted via RTGS/NEFT directly into the bank&apos;s centralized collection or NPA pooling account) is matched against your Loan Account Number by Central Operations. The remittance is credited to your ledger to clear the negotiated principal portion.
                  </p>
                </div>

                {/* Event 2 */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1886ff]"></span>
                    Stage 2: Passing the Loss / Sacrifice Provisioning Voucher
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Because you paid less than the total contractual balance, the remaining unpaid balance (the &quot;waiver&quot;) must be written off through a formal internal accounting voucher approved by the Credit Committee or Zonal Sanctioning Authority. This voucher zeroes out the remaining ledger balance.
                  </p>
                </div>

                {/* Event 3 */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1886ff]"></span>
                    Stage 3: Core Banking System (CBS) Status Transition
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Once the sacrifice voucher is posted, the loan account status in Finacle, BaNCS, or Flexcube flips from &quot;Active NPA / Sub-Standard&quot; to &quot;Settled / Compromise Closed&quot;. This prevents automated accrual of daily interest and stops automated SMS/calling queues.
                  </p>
                </div>

                {/* Event 4 */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1886ff]"></span>
                    Stage 4: Execution &amp; Dispatch of the No Dues Certificate
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Under RBI Directive RBI/2023-24/60, the bank is statutorily obligated to generate, sign, and deliver the unconditional No Dues Certificate within <strong>30 calendar days</strong>. For secured loans, all original property deeds and Form 35 documents must be handed over simultaneously.
                  </p>
                </div>

                {/* Event 5 */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1886ff]"></span>
                    Stage 5: Monthly Batch Tape Transmission to Credit Bureaus
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    At the close of each calendar month, the bank compiles its member data feed and transmits it to TransUnion CIBIL, Experian, Equifax, and CRIF High Mark under Section 21 of CICRA 2005. The account trade-line is updated to reflect zero current balance and marked with the &quot;Settled&quot; status.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: CREDIT SCORING MATH & CIBIL ALGORITHMS */}
            <section id="cibil-scoring-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4" />
                <span>Underwriting Algorithms &amp; Score Dynamics</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                4. Credit Scoring Math: How an F&amp;F Settlement Impacts Your CIBIL Score
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit Information Companies (CIBIL, Experian, Equifax, CRIF) calculate your credit score between 300 and 900 based on weighted multivariate mathematical models. Understanding how a full and final settlement interacts with each component of the scoring algorithm is vital:
              </p>

              {/* Technical Scoring Card */}
              <div className="rounded-2xl border-2 border-blue-200 bg-white p-5 md:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-slate-900">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <span>CIBIL Score Factor Weightage Architecture</span>
                  </div>
                  <span className="text-[11px] font-bold bg-blue-50 text-[#1886ff] px-2.5 py-1 rounded-full border border-blue-200">
                    RBI Regulated
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-xl font-black text-blue-800">35%</span>
                    <span className="text-[11px] font-bold text-slate-700 uppercase">Payment History</span>
                    <p className="text-[10px] text-slate-500 mt-1">DPD counts, settlement flags, write-offs</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-xl font-black text-blue-800">30%</span>
                    <span className="text-[11px] font-bold text-slate-700 uppercase">Credit Exposure</span>
                    <p className="text-[10px] text-slate-500 mt-1">Revolving CUR &amp; total overdue amount</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-xl font-black text-blue-800">15%</span>
                    <span className="text-[11px] font-bold text-slate-700 uppercase">Credit History Age</span>
                    <p className="text-[10px] text-slate-500 mt-1">Vintage of established trade-lines</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-xl font-black text-blue-800">10%</span>
                    <span className="text-[11px] font-bold text-slate-700 uppercase">Credit Mix</span>
                    <p className="text-[10px] text-slate-500 mt-1">Secured vs. unsecured credit balance</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-xl font-black text-blue-800">10%</span>
                    <span className="text-[11px] font-bold text-slate-700 uppercase">Recent Inquiries</span>
                    <p className="text-[10px] text-slate-500 mt-1">Hard credit inquiries in last 12 months</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-slate-100 text-xs font-mono space-y-2">
                  <div className="text-blue-400 font-bold">ALGORITHMIC MULTIPLIER COMPARISON:</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">
                    <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700">
                      <span className="text-rose-400 font-bold block">ACTIVE DELINQUENCY (Unsettled State):</span>
                      <p className="text-[11px] mt-1 text-slate-400">
                        Monthly DPD increments (+30, +60, +90, +180). Overdue balances inflate with compound penal interest. CUR remains pegged at 100%+. Score drops continuously to the sub-580 zone, triggering automated loan application rejections across all scheduled banks.
                      </p>
                    </div>
                    <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700">
                      <span className="text-emerald-400 font-bold block">EXECUTED F&amp;F SETTLEMENT (Settled State):</span>
                      <p className="text-[11px] mt-1 text-slate-400">
                        Overdue balance drops to ₹0 immediately. Ongoing DPD accumulation is frozen permanently. Revolving exposure is eliminated. Score stabilizes in the 620–680 range, establishing an active runway for score restoration to 750+ within 12–18 months.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* HIGH-IMPACT INFOGRAPHIC BANNER EMBEDDED */}
            <div id="infographic-roadmap" className="scroll-target bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-10 text-slate-800">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-blue-500">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-white text-xs shadow-sm">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-200 block">
                      Legal Defense &amp; Resolution Blueprint
                    </span>
                    <h3 className="text-sm md:text-base font-black text-white leading-tight">
                      Full and Final Debt Settlement Process Roadmap
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/full-and-final-settlement-meaning.jpg"
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
                    src="/images/infographics/full-and-final-settlement-meaning.jpg"
                    alt="Full and Final Debt Settlement Meaning and Roadmap Infographic"
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Key Takeaway:</strong> Secure your official OTS sanction letter, pay directly into the bank collection ledger, and obtain an unconditional NDC within 30 days.</span>
                </div>
                <Link href="/contact" className="text-[#1886ff] font-bold hover:underline">
                  Need Help Negotiating an F&amp;F Settlement? &rarr;
                </Link>
              </div>
            </div>

            {/* SECTION 5: STEP-BY-STEP SOP */}
            <section id="step-by-step-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                5. 6-Stage Standard Operating Procedure (SOP) to Execute an Airtight F&amp;F Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To prevent post-settlement legal disputes, unauthorized balance revival, or perpetual bureau default tags, follow this strict 6-stage operational protocol developed by CredSettle debt resolution professionals:
              </p>

              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 1: Financial Hardship Assessment &amp; Formal Settlement Petition
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Compile verifiable documentary evidence of genuine financial hardship (e.g., job loss, medical catastrophe, business insolvency). Submit a formal settlement representation to the bank&apos;s Central Collections and Retail NPA Committee proposing a realistic lump-sum or structured compromise figure based on the principal balance.
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
                      Stage 2: Comprehensive Audit of the OTS Sanction Letter
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Scrutinize the bank&apos;s settlement sanction letter to confirm it is issued on physical letterhead bearing the bank&apos;s CIN, branch seal, and authorized signatory signature. Verify that the letter explicitly contains the phrase <em>&quot;accepted in full and final settlement of all claims against Loan Account No. XXXXXXXXX&quot;</em>.
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
                      Stage 3: Traceable Direct Bank Remittance (RTGS / NEFT / Demand Draft)
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Remit the exact sanctioned settlement amount prior to the validity cut-off date directly into the bank&apos;s designated collection account. Never pay through personal UPI IDs, third-party payment gateways, or cash handed to collection agents. Secure timestamped RTGS UTR receipts.
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
                      Stage 4: Demand &amp; Verification of the Unconditional No Dues Certificate
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Immediately upon remittance clearance, file a written request demanding issuance of the physical/digital No Dues Certificate (NDC). Inspect the certificate to ensure it certifies zero remaining balance, confirms complete discharge, and contains no conditional reservation clauses.
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
                      Stage 5: Collateral Retrieval &amp; Auto-Debit Mandate Revocation
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      For secured loans, collect all original title deeds, share certificates, and signed Form 35 (for RTO vehicle hypothecation removal). Instruct your savings bank to revoke and cancel all active NACH/ECS mandates, and demand written confirmation that all post-dated cheques (PDCs) have been destroyed.
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
                      Stage 6: Credit Bureau Validation &amp; Long-Term Score Rebuilding
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Download your updated CIBIL and Experian reports after 45 days. Verify that the overdue balance reflects ₹0 and the status is updated to &quot;Settled&quot;. If the bank fails to update bureau records within 30 days, raise an online dispute with your scanned NDC attached.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6: STATUTORY LEGAL PROTECTIONS & CONTRACTUAL MECHANICS */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory Enactments &amp; Contractual Mechanics</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                6. Contract Act §63 &amp; Statutory Legal Protections: Why Lenders Cannot Revive Settled Debt
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers fear that years after settling a loan, the bank or an aggressive collection agency might resurface to demand the waived balance. Under Indian jurisprudence, a properly executed Full and Final Settlement is fortified by foundational statutory protections that legally extinguish the creditor&apos;s claims.
              </p>

              <div className="space-y-4">
                {/* Section 63 Contract Act */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Gavel className="w-5 h-5 text-[#1886ff]" />
                    <span>Section 63 of the Indian Contract Act, 1872 (Doctrine of Remission)</span>
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Section 63 of the Indian Contract Act establishes that <em>&quot;Every promisee may dispense with or remit, wholly or in part, the performance of the promise made to him, or may extend the time for such performance, or may accept instead of it any satisfaction which he thinks fit.&quot;</em> In the context of debt settlement, once a bank accepts a lesser sum under an OTS agreement, the original contract is discharged by operation of law. Unlike English Common Law, Indian law requires no fresh consideration for remission to be legally valid and permanent.
                  </p>
                </div>

                {/* Doctrine of Accord and Satisfaction */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-[#1886ff]" />
                    <span>The Doctrine of Accord &amp; Satisfaction and Promissory Estoppel</span>
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    In banking jurisprudence, the sanction letter represents the <strong>Accord</strong> (agreement to settle for a specific sum), and the remittance of funds constitutes the <strong>Satisfaction</strong> (performance of the agreed compromise). Once accord and satisfaction are completed, the legal doctrine of <strong>Promissory Estoppel</strong> strictly prohibits the lender, its recovery agents, or assignee Asset Reconstruction Companies from reviving the waived debt or initiating legal proceedings under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act.
                  </p>
                </div>

                {/* Statutory Penalties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5 mb-1.5">
                      <Landmark className="w-4 h-4 text-blue-600" />
                      <span>RBI Directive RBI/2023-24/60 (₹5,000/Day Delay Penalty)</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Lenders failing to issue the No Dues Certificate and release original property/movable documents within 30 days of settlement payment must pay the borrower ₹5,000 compensation for every day of unexcused delay.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5 mb-1.5">
                      <Building2 className="w-4 h-4 text-emerald-600" />
                      <span>RBI Circular RBI/2023-24/72 (₹100/Day Bureau Penalty)</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Lenders and credit bureaus that fail to update or rectify credit bureau reporting within 30 days of receiving valid settlement proof must pay ₹100 per day compensation to the aggrieved borrower.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 7: ESCALATION PROCESS & RBI OMBUDSMAN */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4" />
                <span>Grievance Redressal Architecture</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                7. 3-Tier Escalation Matrix: Enforcing Compliance &amp; Resolving Grievances
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your lending institution delays issuing your No Dues Certificate, continues recovery harassment post-settlement, or fails to update TransUnion CIBIL, execute this structured 3-tier escalation hierarchy:
              </p>

              {/* 3-Tier Escalation Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Level 1 */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs font-black text-[#1886ff] uppercase tracking-wider mb-1">
                    Tier 1 (Days 1–10)
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Branch Operations &amp; CRM
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit written representation to the Branch Manager and log a formal service ticket on the bank&apos;s central portal attaching your OTS sanction letter and transaction UTR receipt.
                  </p>
                </div>

                {/* Level 2 */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs font-black text-blue-600 uppercase tracking-wider mb-1">
                    Tier 2 (Days 11–30)
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <Landmark className="w-4 h-4 text-blue-600" />
                    Principal Nodal Officer (PNO)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalate to the bank&apos;s apex grievance desk (PNO). The PNO has administrative authority to approve backend sacrifice vouchers and expedite manual NDC generation.
                  </p>
                </div>

                {/* Level 3 */}
                <div className="p-4 rounded-xl bg-white border-2 border-emerald-300 bg-emerald-50/20 shadow-2xs">
                  <div className="text-xs font-black text-emerald-700 uppercase tracking-wider mb-1">
                    Tier 3 (Day 31+)
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-600" />
                    RBI Integrated Ombudsman
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a statutory complaint at <strong>cms.rbi.org.in</strong>. The Ombudsman orders immediate delivery of the NDC and awards statutory daily delay compensation.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: CHRONOLOGICAL RESOLUTION TIMELINE */}
            <section id="resolution-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4" />
                <span>Resolution Milestones</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                8. Chronological Milestone Resolution Table: Institutional Timelines
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The institutional timeline from payment execution to clean bureau records follows a defined sequence:
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Timeline Phase</th>
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Institutional / Banking Event</th>
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Legal Document Generated</th>
                        <th className="p-3.5 font-bold">Borrower Action Required</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Day 0 (Payment Day)
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Settlement funds remitted into designated bank collection ledger.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-blue-700">
                          RTGS / NEFT UTR Counterfoil
                        </td>
                        <td className="p-3.5">
                          Preserve transaction counterfoils; email copies to bank settlement team.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Days 1 – 7
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Operations reconciles payment; passes internal sacrifice/loss accounting voucher.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-800">
                          Internal Accounting Voucher
                        </td>
                        <td className="p-3.5">
                          Download updated loan ledger statement verifying ₹0 outstanding balance.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Days 8 – 20
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Authorized signatory generates official physical / digitally signed NDC.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-emerald-700">
                          Unconditional No Dues Certificate (NDC)
                        </td>
                        <td className="p-3.5">
                          Collect original certificate; verify all account, name &amp; PAN details.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Days 21 – 30
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Security released; Form 35 issued for auto loans; property deeds handed over.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-emerald-700">
                          Form 35 / Original Property Deeds
                        </td>
                        <td className="p-3.5">
                          Submit Form 35 to RTO; cancel all active NACH/ECS mandates with your bank.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Days 31 – 45+
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Bank transmits monthly data tape to CIBIL, Experian, Equifax &amp; CRIF High Mark.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-blue-700">
                          Updated Credit Bureau Report (CIR)
                        </td>
                        <td className="p-3.5">
                          Download fresh CIBIL report; raise online dispute with NDC if tape is delayed.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 9: SPECIAL SCENARIOS */}
            <section id="special-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4" />
                <span>Specialized Domain Scenarios</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                9. Specialized Scenarios: Credit Cards, ARCs, and Digital Fintech Loan Apps
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Scenario 1: Credit Cards */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Credit Card Settlements
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Credit cards are unsecured revolving credit lines. Upon settlement, the bank&apos;s card operations department must deactivate all physical/virtual cards, extinguish accumulated reward point encumbrances, and issue a dedicated electronic NDC confirming zero current balance on primary and add-on cards.
                  </p>
                </div>

                {/* Scenario 2: ARCs */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Debt Sold to ARCs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank assigned your NPA to an Asset Reconstruction Company (ARC) under SARFAESI Section 5, you must negotiate and obtain the NDC directly from the ARC. Ensure the ARC provides a copy of the Assignment Agreement confirming their exclusive legal authority to discharge the debt.
                  </p>
                </div>

                {/* Scenario 3: Fintech Apps */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-[#1886ff]" />
                    Digital Fintech NBFC Apps
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For instant app loans (KreditBee, MoneyView, CASHe), the settlement must be executed with the underlying RBI-registered NBFC lender (the Regulated Entity), not the front-end Lending Service Provider (LSP). Ensure the NBFC cancels e-mandates and revokes app data permissions under RBI Digital Lending Directives.
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
                Frequently Asked Questions on Full and Final Settlement Meaning
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
                All legal procedures, timelines, and rights described on this page are grounded in official Indian statutory frameworks:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">1. RBI Release of Documents Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">2. Indian Contract Act 1872 §63</span>
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
                  <span className="font-semibold truncate">5. Department of Financial Services (DFS)</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 RELATED INTERNAL TOPIC BADGES */}
            <div className="pt-6 border-t border-slate-200 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                Explore Related Settlement &amp; Legal Protection Resources:
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/convert-settled-status-to-closed"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Convert Settled Status to Closed
                </Link>
                <Link
                  href="/get-noc-after-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Get NOC After Loan Settlement
                </Link>
                <Link
                  href="/dispute-wrong-settled-status-cibil"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Dispute Wrong Settled Status on CIBIL
                </Link>
                <Link
                  href="/remove-settled-status-from-cibil"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Remove Settled Status from CIBIL
                </Link>
                <Link
                  href="/verify-loan-settlement-letter"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Verify Loan Settlement Letter
                </Link>
                <Link
                  href="/get-loan-after-settlement"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Get Loan After Settlement
                </Link>
                <Link
                  href="/improve-cibil-after-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Improve CIBIL After Settlement
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
                  Credit Card Debt Relief Services
                </Link>
                <Link
                  href="/services/anti-harassment"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Anti-Harassment Legal Defense
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

            {/* Card 2: Emergency Advocate CTA Card */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 shadow-md text-white space-y-4">
              <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-lg bg-white/15 text-blue-100 text-[11px] font-bold tracking-wide">
                <Lock className="w-3.5 h-3.5" />
                <span>100% CONFIDENTIAL</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">
                  Need Help Negotiating an F&amp;F Settlement?
                </h3>
                <p className="text-blue-100 text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution professionals negotiate directly with Bank Principal Nodal Officers, eliminate unfair interest &amp; penal fees, verify settlement letters, and enforce 30-day NDC delivery.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full text-center bg-white text-blue-900 font-bold py-3.5 px-4 rounded-xl hover:bg-slate-100 transition-all shadow-md text-sm transform hover:-translate-y-0.5"
              >
                Need Help Negotiating an F&amp;F Settlement?
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
                  <span><strong>Zero Upfront Risk:</strong> Success-linked resolution model.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> Zero middleman fund handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> 100% lawful statutory enforcement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated banking resolution specialists.</span>
                </li>
              </ul>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}
