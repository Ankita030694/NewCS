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
  Copy
} from 'lucide-react';

export default function GetNocAfterLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('quick-crux');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

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

  const handleCopyNotice = () => {
    const noticeText = document.getElementById('legal-notice-content')?.innerText || '';
    if (noticeText) {
      navigator.clipboard.writeText(noticeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const navLinks = [
    { id: 'quick-crux', label: 'Executive Brief: Key Takeaways' },
    { id: 'anatomy-of-discharge', label: '1. NDC vs. OTS Letter vs. Statement' },
    { id: 'dangers-of-missing-noc', label: '2. Lethal Risks of Missing NOC' },
    { id: 'statutory-framework', label: '3. Indian Contract Act & RBI Mandates' },
    { id: 'credit-scoring-math', label: '4. CIBIL Bureau Math & Multipliers' },
    { id: 'infographic-overview', label: 'Visual SOP Blueprint' },
    { id: 'step-by-step-sop', label: '5. 6-Stage Standard Operating Procedure' },
    { id: 'legal-notice-template', label: '6. Formal Legal Demand Notice Draft' },
    { id: 'escalation-matrix', label: '7. 3-Tier Escalation & RBI Ombudsman' },
    { id: 'milestone-timeline', label: '8. Document Delivery & CIBIL Timeline' },
    { id: 'special-scenarios', label: '9. Credit Cards, ARCs & Fintech Apps' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'official-sources', label: 'Regulatory Sources & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is a No Dues Certificate (NDC) or NOC after loan settlement?',
      a: 'A No Dues Certificate (NDC), also known as a No Objection Certificate (NOC) or Loan Closure Certificate, is a formal, legally binding instrument issued by a bank, NBFC, or Asset Reconstruction Company (ARC) under its official seal and authorized signature. It explicitly certifies that the borrower has discharged all negotiated settlement obligations in full, that the lender has zero outstanding financial claims against the borrower, and that any liens, hypothecations, or security charges created against the borrower\'s assets or credit profile are unconditionally released.'
    },
    {
      q: 'Why is a settlement letter or payment receipt not enough without an official NDC?',
      a: 'A One-Time Settlement (OTS) sanction letter and bank payment receipts only establish that an offer was made and money was remitted. They do not constitute final legal discharge of the debt under Section 63 of the Indian Contract Act, 1872. Without a formal NDC on the lender\'s official letterhead, the loan account remains technically open or in pending ledger adjustment status within the bank\'s core banking system (CBS). This exposes the borrower to future unlawful recovery harassment, assignment of the unadjusted balance to aggressive recovery agencies or ARCs, and ongoing negative reporting on credit bureau records.'
    },
    {
      q: 'What is the statutory RBI timeline for banks to issue an NOC after loan settlement?',
      a: 'Under Reserve Bank of India (RBI) Master Directions on Fair Practices Code and the landmark RBI Directive on Release of Movable / Immovable Property Documents (RBI/2023-24/60), regulated entities (all Commercial Banks, NBFCs, and Housing Finance Companies) are statutorily mandated to issue the No Dues Certificate and release all original movable/immovable property documents within 30 calendar days of receiving full payment of the agreed settlement consideration.'
    },
    {
      q: 'What compensation can I claim if the bank delays issuing my No Dues Certificate?',
      a: 'If a bank or NBFC fails to issue the NOC or release original property documents within the statutory 30-day window following full settlement clearance, the borrower is legally entitled to compensation of ₹5,000 for each calendar day of delay under RBI Directions (RBI/2023-24/60). Furthermore, for delays in updating credit bureau records (CIBIL, Experian, Equifax, CRIF) post-settlement beyond 30 days, the borrower is entitled to an additional ₹100 per day compensation under RBI Circular RBI/2023-24/72.'
    },
    {
      q: 'What should I do if the bank or NBFC refuses to issue my No Dues Certificate?',
      a: 'If the branch delays or refuses to issue the NDC: (1) Collate your complete audit trail including the OTS sanction letter, timestamped bank transfer / RTGS counterfoils, and account statements showing the debit; (2) Serve a formal legal demand letter to the Bank Branch Manager and Loan Operations Head; (3) Escalate the grievance to the Bank\'s Principal Nodal Officer (PNO); and (4) If unresolved within 30 days, file an online statutory complaint with the RBI Integrated Ombudsman portal (cms.rbi.org.in) claiming immediate document delivery and statutory daily delay compensation.'
    },
    {
      q: 'How does the absence of an NDC impact my CIBIL credit report?',
      a: 'Without an NDC and subsequent backend ledger closure, the bank\'s automated batch reporting system continues to transmit delinquent status feeds—such as Overdue, Written Off, or accumulated Days Past Due (DPD)—to CIBIL, Experian, Equifax, and CRIF High Mark. This depresses your credit score by 70 to 150 points and triggers automated rejections on all future credit card, vehicle loan, and home loan applications. An official NDC is mandatory to initiate bureau dispute rectification and upgrade the record to Settled (or Closed upon differential payoff).'
    },
    {
      q: 'Can a bank or recovery agency demand more money after issuing a settlement letter if the NDC has not been released?',
      a: 'Under Section 63 of the Indian Contract Act, 1872, once a creditor accepts a lesser sum in full satisfaction of a debt under a formal settlement agreement and the borrower honors the payment terms within the stipulated validity date, the creditor is legally estopped from claiming the remaining balance. However, unscrupulous recovery agencies often exploit the absence of a physical NDC to claim that penal charges or administrative fees remain due. Having CredSettle issue a formal legal notice stops these unlawful demands instantly.'
    },
    {
      q: 'How do I get an NOC for a settled credit card or app-based digital loan?',
      a: 'For credit cards, destroy the physical card, secure the final credit card statement reflecting zero current balance, and demand the electronic NDC from the bank\'s card operations division. For digital fintech loan apps (e.g., KreditBee, MoneyView, CASHe), the NDC must be issued directly by the underlying RBI-registered NBFC lender (the regulated entity), not the front-end digital lending app (LSP). Ensure the NOC specifically references the original loan agreement number, PAN, and confirms cancellation of all e-mandates / NACH debits.'
    },
    {
      q: 'What critical details must be verified on the No Dues Certificate to ensure it is legally airtight?',
      a: 'An authentic, legally binding NDC must contain: (1) The bank/NBFC\'s official letterhead with Corporate Identification Number (CIN) and registered office address; (2) The borrower\'s full legal name, PAN, and exact Loan Account Number; (3) Explicit declaration that the account is closed/settled with ₹0 remaining balance; (4) Unconditional discharge of all security interests, liens, and hypothecations; (5) Confirmation of mandate cancellation (NACH / e-mandates); and (6) The authorized officer\'s name, employee code, official signature, and branch/operations stamp.'
    },
    {
      q: 'Can I get my original property documents or vehicle hypothecation removed with the loan settlement NDC?',
      a: 'Yes. For secured loans (e.g., home loans, LAP, auto loans) settled through OTS, the bank is legally obligated under RBI directions to release all original title deeds, share certificates, and Form 35 (for RTO vehicle hypothecation removal) within 30 days of settlement payment clearance. The NDC serves as the foundational document presented to the Sub-Registrar of Assurances or the Regional Transport Office (RTO) to remove encumbrances.'
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
            How to Get Your NOC &amp; <br />
            <span className="text-blue-100">No Dues Certificate After Settlement</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal md:font-medium text-white/95 leading-relaxed">
            Your settlement isn&apos;t complete until you receive an NOC. Learn how to legally force your bank to issue a No Dues Certificate after a settlement.
          </p>

          {/* Single Rounded Full CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:text-[#1886ff] px-7 py-3 md:px-8 md:py-3.5 rounded-full font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Bank Delaying Your NOC? Let Us Help</span>
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
                  Aligned with RBI Master Direction RBI/2023-24/60 &amp; Section 63 Indian Contract Act.
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
                <span>EXECUTIVE BRIEF: SECURING YOUR NO DUES CERTIFICATE (NDC)</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Settlement Without NOC is Legally Incomplete:</strong> Paying your One-Time Settlement (OTS) amount does not automatically extinguish your legal liability. Under Indian banking jurisprudence, only an unconditional No Dues Certificate (NDC) on the lender&apos;s official letterhead legally discharges the borrower under Section 63 of the Indian Contract Act, 1872.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Strict 30-Day RBI Issuance Mandate:</strong> Under RBI Master Direction RBI/2023-24/60, all scheduled commercial banks, NBFCs, and Housing Finance Companies must issue the final loan closure documents and release original security/property documents within <strong>30 calendar days</strong> of settlement payment receipt.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Statutory ₹5,000/Day &amp; ₹100/Day Delay Penalties:</strong> If a bank delays releasing your secured loan NOC/documents past 30 days, they are legally obligated to pay you <strong>₹5,000 per day of delay</strong>. Delays in updating credit bureau records past 30 days attract an additional <strong>₹100 per day</strong> penalty under RBI Circular RBI/2023-24/72.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Essential for Bureau Rectification:</strong> TransUnion CIBIL, Experian, Equifax, and CRIF High Mark require the official NDC as primary documentary proof to stop ongoing default flags, eliminate Days Past Due (DPD) accumulation, and upgrade your credit profile.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: ANATOMY OF DEBT DISCHARGE */}
            <section id="anatomy-of-discharge" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4" />
                <span>Banking Documentation Hierarchy</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                1. The Anatomy of Debt Discharge: NDC vs. OTS Letter vs. Account Statement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Thousands of Indian borrowers fall into a dangerous legal trap: they negotiate a One-Time Settlement (OTS), remit the agreed amount to the bank, and mistakenly assume their debt is extinguished. Months or years later, they are shocked to discover active recovery notices, legal threats, or wrecked credit scores.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To protect yourself, you must distinguish between the four fundamental documents generated during a debt resolution lifecycle:
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Document Type</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Legal Purpose &amp; Definition</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Extinguishes Debt?</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">CIBIL Bureau Power</th>
                        <th className="p-3.5 md:p-4 font-bold">Future Recovery Risk</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-emerald-700 bg-emerald-50/30">
                          Unconditional No Dues Certificate (NDC / NOC)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Final legal discharge instrument signed by bank authorized signatory certifying full payment and zero remaining liability.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-emerald-600">
                          YES (100% Final)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-emerald-600">
                          Conclusive proof to mandate status update to Settled / Closed
                        </td>
                        <td className="p-3.5 md:p-4 font-semibold text-emerald-600">
                          Zero (Complete Estoppel)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-blue-700 bg-blue-50/30">
                          OTS Sanction / Settlement Letter
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Conditional offer letter specifying discounted settlement amount, installment schedules, and validity cut-off date.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-amber-600">
                          NO (Only an Offer)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Not accepted by bureaus as proof of final closure
                        </td>
                        <td className="p-3.5 md:p-4 text-amber-600">
                          High if payment timeline is missed even by 24 hours
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-slate-700 bg-slate-50/30">
                          Loan Account Statement (Showing ₹0 Balance)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Internal banking ledger extract showing balance write-off or technical adjustment entries in the core banking system.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-amber-600">
                          NO (Internal Accounting)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Secondary supporting evidence; requires NDC confirmation
                        </td>
                        <td className="p-3.5 md:p-4">
                          Medium (Bank can adjust ledger for unbooked penal charges)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-rose-700 bg-rose-50/30">
                          Conditional / Interim Acknowledgment Receipt
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Cash / RTGS receipt issued by collection agency or teller stating &quot;Subject to clearing and management approval&quot;.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-rose-600">
                          NO (No Discharge)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-rose-600">
                          Zero bureau acceptance
                        </td>
                        <td className="p-3.5 md:p-4 font-semibold text-rose-600">
                          Severe (Recovery agents can demand full original balance)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs md:text-sm text-slate-600 italic">
                <strong>Legal Rule of Thumb:</strong> Never treat a settlement as closed based on an email confirmation, a WhatsApp message from a recovery agent, or a bank deposit slip. Demand an unconditional No Dues Certificate printed on the bank&apos;s physical letterhead bearing an authorized signatory stamp.
              </p>
            </section>

            {/* SECTION 2: DANGERS OF MISSING NOC */}
            <section id="dangers-of-missing-noc" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4" />
                <span>Risk &amp; Vulnerability Analysis</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                2. Why Banks Delay NOCs &amp; The Lethal Risks of an Unresolved Loan Ledger
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Why do Indian banks and NBFCs frequently delay or withhold No Dues Certificates after receiving settlement funds? The root cause lies in bureaucratic friction, internal accounting bottlenecks, and structural banking incentives:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-2 text-rose-600 font-bold mb-1.5 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>Core Banking System (CBS) Ledger Locks</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When a loan is settled for a discounted amount, the waived portion must be written off through a manual &quot;Sacrifice / Loss Provisioning Voucher&quot; approved by Credit Committee authorities. Frontline branch staff cannot generate the final NDC until this backend voucher is cleared.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-2 text-amber-600 font-bold mb-1.5 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>Debt Assignment to Recovery Agencies &amp; ARCs</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If an account is not formally closed with an NDC, the bank&apos;s automated delinquent portfolio system may inadvertently bundle the residual unadjusted balance into a bad-debt pool and assign it to an Asset Reconstruction Company (ARC) or collection agency.
                  </p>
                </div>
              </div>

              {/* Lethal Consequences Box */}
              <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 text-xs md:text-sm text-rose-950 space-y-3 leading-relaxed">
                <h3 className="font-bold text-sm md:text-base text-rose-900 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  What Happens If You Don&apos;t Obtain Your NDC Immediately:
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    <strong>Unlawful Reactivation of Residual Debt:</strong> Without an NDC, the bank can claim that your OTS terms lapsed, revive the waived principal plus compounded penal interest at 24–36% per annum, and initiate legal proceedings under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act.
                  </li>
                  <li>
                    <strong>SARFAESI &amp; Lien Entanglement on Secured Assets:</strong> For auto loans or home loans, the bank will refuse to release original property title deeds or issue Form 35 to cancel vehicle hypothecation at the RTO, preventing you from selling, transferring, or refinancing your asset.
                  </li>
                  <li>
                    <strong>Continuous 7-Year CIBIL Bleeding:</strong> The bank&apos;s monthly data feed will continue reporting the account as &quot;Overdue&quot;, &quot;Post-Write-off&quot;, or accumulating 900+ Days Past Due (DPD), permanently locking your credit score in the sub-600 rejection zone.
                  </li>
                </ul>
              </div>
            </section>

            {/* SECTION 3: STATUTORY & REGULATORY FRAMEWORK */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory Enactments &amp; RBI Master Directions</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                3. Statutory &amp; Regulatory Protections: Section 63 Contract Act &amp; RBI Mandates
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers in India are shielded by robust statutory protections. When a bank attempts to stall or deny your NDC after receiving full settlement payments, they violate core statutory provisions:
              </p>

              <div className="space-y-3.5">
                {/* Law 1 */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1886ff]"></span>
                    Section 63 of the Indian Contract Act, 1872 (Doctrine of Remission)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Section 63 establishes that every promisee (the bank) may dispense with or remit, wholly or in part, the performance of the promise made to them, or may accept instead of it any satisfaction which they think fit. Once the bank accepts your settlement payment under a sanctioned OTS, the original contract is legally extinguished by operation of law. The bank is legally barred (doctrine of estoppel) from claiming another rupee or refusing the closure certificate.
                  </p>
                </div>

                {/* Law 2 */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1886ff]"></span>
                    RBI Master Direction on Release of Movable/Immovable Property Documents (RBI/2023-24/60)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Issued on September 13, 2023, this landmark RBI directive mandates that all Regulated Entities (REs) must release all original property/movable documents and issue the No Dues Certificate within <strong>30 calendar days</strong> following full payment of loan dues/settlement. If the RE fails to comply, it must pay the borrower <strong>compensation of ₹5,000 for each day of delay</strong>.
                  </p>
                </div>

                {/* Law 3 */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1886ff]"></span>
                    CICRA 2005 Section 21 &amp; RBI Bureau Compensation Circular (RBI/2023-24/72)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Under Section 21 of the Credit Information Companies (Regulation) Act, 2005, lenders must update credit information with all four credit bureaus (CIBIL, Experian, Equifax, CRIF) within 30 days. Under RBI Circular RBI/2023-24/72, failure to rectify or update credit information within 30 days of receiving valid proof of settlement obligates the defaulting entity to pay <strong>₹100 per calendar day compensation</strong> to the borrower.
                  </p>
                </div>

                {/* Law 4 */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1886ff]"></span>
                    RBI Integrated Ombudsman Scheme, 2021
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Non-issuance of NDC, unreasonable delay in releasing title documents, or inaccurate credit reporting constitutes a specific ground of deficiency in banking service under Clause 10 of the RBI Integrated Ombudsman Scheme. The Ombudsman possesses quasi-judicial powers to order immediate document release and award damages for mental harassment.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: CREDIT SCORING MATH & MULTIPLIERS */}
            <section id="credit-scoring-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4" />
                <span>Underwriting Algorithms</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                4. Technical Credit Scoring Math: How an NDC Halts Bureau Degradation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit scoring engines in India (TransUnion CIBIL, Experian, Equifax, CRIF) calculate your 3-digit score (300–900) using weighted multivariate proprietary algorithms. Understanding the mathematical impact of a missing vs. submitted NDC is crucial:
              </p>

              {/* Technical Scoring Card */}
              <div className="rounded-2xl border-2 border-blue-200 bg-white p-5 md:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-slate-900">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <span>CIBIL Score Factor Weightage Model</span>
                  </div>
                  <span className="text-[11px] font-bold bg-blue-50 text-[#1886ff] px-2.5 py-1 rounded-full border border-blue-200">
                    RBI Regulated
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-xl font-black text-blue-800">35%</span>
                    <span className="text-[11px] font-bold text-slate-700 uppercase">Payment History</span>
                    <p className="text-[10px] text-slate-500 mt-1">DPD counts, default records, write-offs</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-xl font-black text-blue-800">30%</span>
                    <span className="text-[11px] font-bold text-slate-700 uppercase">Credit Exposure</span>
                    <p className="text-[10px] text-slate-500 mt-1">Credit Utilization Ratio (CUR) &amp; overdue</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-xl font-black text-blue-800">15%</span>
                    <span className="text-[11px] font-bold text-slate-700 uppercase">Credit History Age</span>
                    <p className="text-[10px] text-slate-500 mt-1">Vintage of active trade-lines</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-xl font-black text-blue-800">10%</span>
                    <span className="text-[11px] font-bold text-slate-700 uppercase">Credit Mix</span>
                    <p className="text-[10px] text-slate-500 mt-1">Secured vs. unsecured loan balance</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-xl font-black text-blue-800">10%</span>
                    <span className="text-[11px] font-bold text-slate-700 uppercase">Recent Inquiries</span>
                    <p className="text-[10px] text-slate-500 mt-1">Hard bureau pulls in past 12 months</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-slate-100 text-xs font-mono space-y-2">
                  <div className="text-blue-400 font-bold">ALGORITHMIC PENALTY MULTIPLIER COMPARISON:</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">
                    <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700">
                      <span className="text-rose-400 font-bold block">WITHOUT NDC (Active Delinquency State):</span>
                      <p className="text-[11px] mt-1 text-slate-400">
                        Score Deduction = -120 to -180 pts. Monthly batch feeds flag account as ongoing NPA. CUR calculated on unadjusted overdue amount. Algorithmic rejection on 100% of prime retail loan underwriting filters.
                      </p>
                    </div>
                    <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700">
                      <span className="text-emerald-400 font-bold block">WITH VERIFIED NDC (Settled / Closed State):</span>
                      <p className="text-[11px] mt-1 text-slate-400">
                        Overdue Balance = ₹0. Ongoing DPD accumulation frozen immediately. Negative severity multiplier neutralized. Trajectory established for score recovery to 750+ over subsequent 6–12 months.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
                      Legal Defense &amp; Action Blueprint
                    </span>
                    <h3 className="text-sm md:text-base font-black text-white leading-tight">
                      How to Get Your NOC &amp; No Dues Certificate: Process Roadmap
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/get-noc-after-loan-settlement.jpg"
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
                    src="/images/infographics/get-noc-after-loan-settlement.jpg"
                    alt="How to Get Your NOC and No Dues Certificate After Loan Settlement Infographic"
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Key Takeaway:</strong> Secure your unconditional NDC within 30 days to legally discharge debt and protect your CIBIL profile.</span>
                </div>
                <Link href="/contact" className="text-[#1886ff] font-bold hover:underline">
                  Get Free Legal Evaluation &rarr;
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
                5. 6-Stage Standard Operating Procedure (SOP) to Secure &amp; Enforce Your NDC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To guarantee that your loan settlement is completed without legal vulnerabilities, follow this rigorous 6-stage operational roadmap established by our debt resolution professionals:
              </p>

              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Audit the Original OTS Sanction Letter &amp; Validity Deadlines
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Verify that your payment strictly honored the terms of the official OTS sanction letter. Ensure that the payment date was prior to the offer expiration date, the amount paid matched the exact single/tranche figures, and payment was deposited directly into the bank&apos;s designated collection ledger (not a recovery agent&apos;s personal UPI).
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
                      Assemble Traceable Proof of Remittance &amp; Account Statement
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Collate bank-stamped deposit counterfoils, RTGS/NEFT transaction UTR numbers, and your bank account debit statement. Download the latest loan account statement showing that the funds were credited to your loan ledger.
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
                      Submit a Formal Written Request for NDC to Loan Operations &amp; Branch Manager
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Submit a formal representation by registered post and registered email to the Branch Manager, Central Retail Asset Operations, and the Principal Nodal Officer citing the OTS sanction letter and RBI Master Direction RBI/2023-24/60.
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
                      Rigorous Verification of the Physical / Electronic No Dues Certificate
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Upon receiving the NDC, inspect it to ensure it contains zero conditional clauses. It must state unequivocally: <em>&quot;The bank has received ₹[Amount] in full and final settlement of Loan Account [Number]. There are zero outstanding dues, and the borrower stands fully discharged of all obligations.&quot;</em>
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
                      Release of Collateral &amp; Revocation of Standing Mandates (NACH / e-Mandates)
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      For secured loans, collect all original title deeds, share certificates, and signed Form 35. Ensure the bank issues written confirmation that all NACH auto-debit mandates and post-dated cheques (PDCs) have been cancelled and destroyed.
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
                      Upload NDC to CIBIL, Experian, Equifax &amp; CRIF Dispute Portals
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Do not wait passively for the bank&apos;s monthly tape submission. Log in to the official CIBIL Dispute Resolution Portal, create an account dispute ticket, and upload the scanned NDC to trigger automated cross-verification within 30 days.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6: LEGAL LETTER DRAFT TEMPLATE */}
            <section id="legal-notice-template" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4" />
                <span>Ready-to-Use Legal Notice Draft</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                6. Formal Legal Demand Notice Template for Delayed No Dues Certificate
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank or NBFC has exceeded the statutory 30-day timeline without delivering your NDC, issue this formal statutory demand notice to the Principal Nodal Officer:
              </p>

              {/* Code / Notice Container */}
              <div className="rounded-2xl border border-slate-700 bg-slate-900 text-slate-100 p-5 md:p-6 shadow-sm overflow-x-auto text-xs font-mono leading-relaxed relative">
                <div className="text-blue-400 font-bold mb-3 pb-2 border-b border-slate-800 flex items-center justify-between">
                  <span>STATUTORY DEMAND NOTICE: NON-ISSUANCE OF NO DUES CERTIFICATE</span>
                  <button
                    onClick={handleCopyNotice}
                    className="flex items-center gap-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded transition-colors"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copied ? 'Copied!' : 'Copy Notice'}</span>
                  </button>
                </div>
                <pre id="legal-notice-content" className="whitespace-pre-wrap text-slate-200">
{`To,
The Principal Nodal Officer / Head of Retail Loan Operations,
[Bank / NBFC Name],
[Zonal Office Address / Corporate Headquarters],
Email: [nodalofficer@bankname.com]

Subject: STATUTORY DEMAND FOR IMMEDIATE ISSUANCE OF UNCONDITIONAL NO DUES CERTIFICATE (NDC) & RELEASE OF SECURITY FOR LOAN ACCOUNT NO: [Insert Loan A/C No.] UNDER RBI DIRECTIVE RBI/2023-24/60 & SECTION 63 OF THE INDIAN CONTRACT ACT, 1872

Respected Sir/Madam,

I, [Borrower Full Name], residing at [Borrower Full Address], holding PAN: [Insert PAN] and Aadhaar: [Insert Aadhaar], was the borrower for the captioned Loan Facility [Account No: XXXXXXXX] sanctioned by your esteemed institution.

1. That pursuant to financial difficulties, your institution and the undersigned entered into a formal One-Time Settlement (OTS) under Sanction Letter Ref No: [Insert OTS Letter Ref No.] dated [DD/MM/YYYY], agreeing upon a full and final settlement consideration of ₹[Amount Paid].
2. That in absolute compliance with the terms and validity of the said OTS Sanction Letter, the undersigned remitted the total agreed settlement sum of ₹[Amount Paid] via [RTGS / NEFT / Demand Draft] under UTR / Reference No: [Insert UTR No.] on [DD/MM/YYYY], which was duly acknowledged and realized in your bank's collection ledger.
3. That by virtue of the realization of the agreed settlement consideration, the original loan agreement stands fully discharged by operation of law under Section 63 of the Indian Contract Act, 1872, and the doctrine of promissory estoppel strictly prohibits your institution from raising any further claims.
4. That despite the lapse of [Number of Days] calendar days from the date of realization, your institution has failed to issue the physical/electronic unconditional No Dues Certificate (NDC) and failed to update the credit information with TransUnion CIBIL, Experian, Equifax, and CRIF High Mark.
5. That this inexcusable failure constitutes a direct statutory breach of:
   a) RBI Master Direction RBI/2023-24/60 (mandating issuance of NDC and release of documents within 30 days, failing which compensation of ₹5,000 per day is statutorily payable).
   b) Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA).
   c) RBI Compensation Framework Circular RBI/2023-24/72 (mandating ₹100/day compensation for delayed credit bureau rectification).

DEMAND:
You are hereby called upon to:
i) Issue and dispatch the physical/digitally signed unconditional No Dues Certificate (NDC) with ₹0 balance within 7 (seven) days of receipt of this notice.
ii) Immediately transmit the revised data tape to all four Credit Information Companies reflecting the account as SETTLED / CLOSED with zero overdue.
iii) Cancel and destroy all remaining NACH mandates, ECS instructions, and post-dated cheques.

Take notice that if you fail to comply within the stipulated 7 days, the undersigned shall escalate the matter to the RBI Integrated Ombudsman (cms.rbi.org.in) claiming the accrued statutory delay compensation of ₹5,000/day and ₹100/day, alongside filing for damages before the appropriate Consumer Disputes Redressal Commission for mental agony and financial injury.

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

            {/* SECTION 7: ESCALATION PROCESS & RBI OMBUDSMAN */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4" />
                <span>Grievance Redressal Architecture</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                7. 3-Tier Escalation Matrix: How to Legally Force Your Bank to Issue the NDC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a local branch manager stalls your request by citing &quot;system maintenance&quot; or &quot;head office approvals,&quot; do not waste months arguing at branch counters. Execute this formal 3-tier escalation hierarchy:
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
                    Branch CRM &amp; Loan Ops
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit written representation to the Branch Manager and log a formal service ticket on the bank&apos;s official CRM portal attaching your OTS letter and payment receipt.
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
                    Escalate to the bank&apos;s apex grievance desk (PNO). The PNO has administrative authority to approve loss vouchers and order immediate manual NDC dispatch.
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
                    File a statutory complaint at <strong>cms.rbi.org.in</strong>. The Ombudsman orders immediate delivery of the NDC and awards <strong>₹5,000/day &amp; ₹100/day delay compensation</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: CHRONOLOGICAL MILESTONE RESOLUTION TABLE */}
            <section id="milestone-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4" />
                <span>Resolution Lifecycle</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                8. Chronological Milestone Resolution Table: Institutional Timelines
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The lifecycle from making your final settlement payment to securing clean credit bureau records follows a precise institutional timeline:
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Timeline Phase</th>
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Banking / Legal Event</th>
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Document Generated</th>
                        <th className="p-3.5 font-bold">Borrower Action Required</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Day 0 (Payment Day)
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Settlement consideration deposited in bank collection account.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-blue-700">
                          Bank deposit slip / RTGS UTR receipt
                        </td>
                        <td className="p-3.5">
                          Preserve timestamped transaction proof; email copy to settlement officer.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Days 1 – 7
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Central operations reconciles ledger; passes sacrifice/loss write-off entry.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-800">
                          Internal Accounting Voucher
                        </td>
                        <td className="p-3.5">
                          Download updated loan ledger statement confirming ₹0 balance.
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
                          Collect original certificate; verify all account &amp; PAN details.
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
                          Form 35 / Original Title Deeds
                        </td>
                        <td className="p-3.5">
                          Submit Form 35 to RTO; cancel NACH mandates with your savings bank.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Days 31 – 45
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Bank transmits monthly data tape to CIBIL, Experian, Equifax &amp; CRIF.
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
                    Credit cards are revolving lines of credit. Upon settlement, the bank card operations division must cancel the plastic card, extinguish accumulated reward point encumbrances, and issue a dedicated electronic NDC confirming zero current balance on both primary and add-on cards.
                  </p>
                </div>

                {/* Scenario 2: ARCs */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Debt Sold to ARCs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank assigned your NPA to an Asset Reconstruction Company (e.g. ARCIL, Phoenix, Edelweiss ARC) under SARFAESI Section 5, you must obtain the NDC directly from the ARC. Ensure the ARC provides a copy of the Deed of Assignment to confirm their legal authority.
                  </p>
                </div>

                {/* Scenario 3: Fintech Apps */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-[#1886ff]" />
                    Digital Fintech NBFC Apps
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For instant app loans (KreditBee, MoneyView, CASHe), the NDC must be issued by the RBI-registered NBFC lender, not the tech front-end LSP. Ensure the NBFC confirms cancellation of all e-mandates and revokes app data permissions.
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
                Frequently Asked Questions on Getting NOC After Loan Settlement
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
                  href="/legal-help-for-non-closure-of-settled-loan"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Legal Help for Non-Closure of Settled Loan
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
                  Loan Foreclosure Charges Waiver
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
                <Link
                  href="/rbi-rules-for-recovery-agents"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  RBI Recovery Agent Rules 2026
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
                  Bank Delaying Your NOC Certificate?
                </h3>
                <p className="text-blue-100 text-sm mt-2 leading-relaxed font-normal">
                  Our legal debt resolution professionals serve formal statutory notices to Bank Principal Nodal Officers, enforce 30-day compliance, and claim ₹5,000/day delay penalties under RBI Master Directions.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full text-center bg-white text-blue-900 font-bold py-3.5 px-4 rounded-xl hover:bg-slate-100 transition-all shadow-md text-sm transform hover:-translate-y-0.5"
              >
                Bank Delaying Your NOC? Let Us Help
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
