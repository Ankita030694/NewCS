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
  FileText,
  HelpCircle,
  TrendingUp,
  Award,
  BookOpen,
  Building2,
  Check,
  Lock,
  Phone,
  AlertCircle,
  Briefcase,
  ArrowRight,
  Clock,
  Gavel,
  Landmark,
  Layers,
  Percent,
  FileCheck,
  ShieldAlert,
  BadgePercent,
  Home
} from 'lucide-react';

export default function HomeLoanSarfaesiClient() {
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
    { id: 'quick-crux', label: 'Executive Summary' },
    { id: 'sarfaesi-framework-npa', label: '1. SARFAESI Framework & NPA Triggers' },
    { id: 'financial-breakdown-math', label: '2. Ledger Audit & Penal Math Breakdown' },
    { id: 'resolution-mechanisms-matrix', label: '3. Resolution & Defense Matrix' },
    { id: 'cibil-algorithm-restoration', label: '4. CIBIL Impact & Deed Recovery' },
    { id: 'infographic-overview', label: '5. Visual 6-Stage Defense Blueprint' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Statutory Defense SOP' },
    { id: 'statutory-notice-defense', label: '7. Statutory Notice Defense & Rights' },
    { id: 'three-tier-escalation', label: '8. 3-Tier Grievance Redressal Matrix' },
    { id: 'chronological-milestones', label: '9. Chronological Milestones Timeline' },
    { id: 'specialized-scenarios', label: '10. Specialized Real-World Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is a Section 13(2) demand notice under the SARFAESI Act, and how much time do I have to respond?',
      a: 'A Section 13(2) notice is a statutory demand served by a secured creditor after a home loan account remains continuously unpaid for 90 days and is classified as an NPA. The notice grants the borrower an unconditional 60-day statutory cure window to pay the exact outstanding dues or file a formal legal objection under Section 13(3A).'
    },
    {
      q: 'What happens if the bank fails to respond to my Section 13(3A) representation within 15 days?',
      a: 'Under Section 13(3A) of the SARFAESI Act, the bank must examine borrower objections and communicate a reasoned written reply within exactly 15 days. If the bank fails to issue this reasoned decision or attempts to take physical possession without considering the objection, the entire subsequent recovery proceeding is vitiated and can be stayed by the DRT.'
    },
    {
      q: 'Can the bank take physical possession of my residential house without a court order?',
      a: 'No. While banks can assume symbolic possession under Section 13(4) by issuing a notice and affixing it to the premises, taking physical possession against an occupying homeowner requires an administrative order from the District Magistrate (DM) or Chief Metropolitan Magistrate (CMM) under Section 14 of the SARFAESI Act.'
    },
    {
      q: 'When can a borrower approach the Debt Recovery Tribunal (DRT) under Section 17?',
      a: 'A borrower can file a Securitisation Application (SA) before the DRT under Section 17 within 45 days from the date the bank takes any measure under Section 13(4), such as issuing a possession notice, taking symbolic possession, or publishing an auction sale notice. Borrowers cannot approach the DRT merely upon receiving a Section 13(2) notice.'
    },
    {
      q: 'Is there a mandatory pre-deposit required to file a Securitisation Application before the DRT?',
      a: 'No. Under Section 17 of the SARFAESI Act, borrowers are NOT required to make any mandatory pre-deposit to file an application before the DRT. Mandatory pre-deposit rules (ranging from 25% to 50%) only apply if a borrower subsequently files an appeal before the Debt Recovery Appellate Tribunal (DRAT) under Section 18 against an adverse DRT order.'
    },
    {
      q: 'Can a borrower settle a defaulted home loan through a One-Time Settlement (OTS) during SARFAESI proceedings?',
      a: 'Yes. Even after SARFAESI notices are issued, banks actively entertain One-Time Settlement (OTS) proposals to avoid extended tribunal litigation and uncertain auction realizations. Compromise terms are evaluated under bank board-approved policies and RBI June 2023 norms, allowing borrowers to settle for an agreed sum and reclaim original title deeds.'
    },
    {
      q: 'What are the legal requirements for a bank before conducting a public auction under SARFAESI?',
      a: 'Under the Security Interest (Enforcement) Rules 2002, the bank must obtain a valuation report from an approved valuer, serve an individual 30-day notice of sale to the borrower under Rule 8(6), publish the public auction notice in two leading newspapers (one in the vernacular language) under Rule 9(1), and strictly adhere to reserve price transparency norms.'
    },
    {
      q: 'Are agricultural properties or loans below certain thresholds exempt from SARFAESI proceedings?',
      a: 'Yes. Under Section 31(i) of the SARFAESI Act, security interest cannot be created or enforced on agricultural land. Furthermore, under Section 31(h), SARFAESI proceedings do not apply where the remaining unpaid debt is less than 20% of the principal and interest, or where the entire outstanding claim is under ₹1 Lakh.'
    },
    {
      q: 'Can tenants living in a mortgaged property be summarily evicted under Section 14?',
      a: 'No. As established by the Supreme Court in Harshad Govardhan Sondagar v. International Assets Reconstruction Co., valid tenancies created before mortgage or registered lease deeds cannot be summarily terminated under Section 14. The Magistrate must examine the leasehold rights, and banks can only assume constructive or landlord possession.'
    },
    {
      q: 'How does a home loan settlement impact my CIBIL score and how do I retrieve my original title deeds?',
      a: 'Upon full payment of the agreed settlement sum under Section 13(8), the bank is legally obligated to issue a No Dues Certificate, release all original title deeds within 30 days under RBI directives, and report the account status to credit bureaus. The record updates to Settled, stopping overdue compounding and enabling credit rehabilitation.'
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
          <span className="text-[11px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3.5 py-1 rounded-full inline-block mb-3 border border-white/15">
            Mortgage Security Enforcement &amp; SARFAESI Legal Defense
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Home Loan Default &amp; SARFAESI Act: How to Stop Bank Property Auction &amp; Eviction
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Master the statutory defense blueprint to challenge Section 13(2) demand notices, enforce the mandatory 15-day bank reply rule under Section 13(3A), obtain urgent interim stays from the Debt Recovery Tribunal under Section 17, and negotiate One-Time Settlement deed redemption.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Facing SARFAESI Auction? Protect Your Property &amp; Stop Bank Eviction</span>
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
                      href={'#' + link.id}
                      className={'block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ' + (
                        isActive
                          ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      )}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Statutory Mortgage Rights</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by SARFAESI Act 2002, Security Interest Rules 2002, Transfer of Property Act 1882, and RBI Master Directives.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= CENTER COLUMN: EDITORIAL CONTENT ================= */}
          <div className="space-y-10 min-w-0">

            {/* EXECUTIVE SUMMARY BOX (#F4F8FE with border-l-[5px] border-l-[#1886ff]) */}
            <section
              id="quick-crux"
              className="scroll-target rounded-2xl p-6 md:p-7 border border-blue-100 shadow-xs space-y-4"
              style={{ backgroundColor: '#F4F8FE', borderLeft: '5px solid #1886ff' }}
            >
              <div className="flex items-center gap-2.5 text-[#1886ff]">
                <Briefcase className="w-5 h-5 flex-shrink-0" />
                <h2 className="text-lg md:text-xl font-extrabold text-slate-900">
                  Executive Summary: Strategic Machinery of SARFAESI Defense &amp; Property Protection
                </h2>
              </div>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Section 13(2) Demand Window:</strong> Borrowers hold an unconditional 60-day cure period during which lenders are legally barred from seizing physical possession.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory 15-Day Written Order:</strong> A formal Section 13(3A) objection legally compels the bank to issue a reasoned written determination within 15 days, vitiating subsequent coercive steps if neglected.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Section 14 Judicial Safeguard:</strong> Banks cannot forcibly dispossess an occupant without obtaining an administrative clearance order from the District Magistrate or Chief Metropolitan Magistrate.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Pre-Deposit DRT Remedy:</strong> Filing a Securitisation Application under Section 17 before the Debt Recovery Tribunal does not require any mandatory deposit and can secure interim auction stay orders.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Compromise OTS Economics:</strong> Institutional lenders actively accept One-Time Settlement compromise terms to avoid multi-year tribunal delays, discounting penal levies and interest.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Deed Redemption &amp; Title Recovery:</strong> Under Section 13(8), full settlement payment prior to auction notice publication entitles the borrower to an immediate return of all original title deeds within 30 days.</span>
                </li>
              </ul>
            </section>

            {/* SECTION 1: SARFAESI FRAMEWORK & NPA DYNAMICS */}
            <section id="sarfaesi-framework-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Landmark className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  1. The SARFAESI Framework &amp; 90-Day NPA Classification Dynamics
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower signs a mortgage contract for a residential or commercial property in India, the transaction is underpinned by the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act). Unlike unsecured credit cards or personal loans where lenders must institute protracted civil suits under the Code of Civil Procedure, secured home loans grant financial institutions summary powers to enforce their security interest without the direct intervention of a civil court.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, this enforcement mechanism does not operate arbitrarily. The statutory machinery can only be activated after an account satisfies strict regulatory criteria established by the Reserve Bank of India. When an equated monthly installment (EMI) remains unpaid, the banking core software initiates progressive monitoring across Special Mention Account (SMA) buckets: SMA-0 for delinquencies between 1 and 30 days, SMA-1 for delays between 31 and 60 days, and SMA-2 for arrears spanning 61 to 90 days. Only upon the 91st consecutive day of non-payment is the credit facility formally classified as a Non-Performing Asset (NPA).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                NPA classification triggers substantial balance sheet consequences for the lender. Under RBI prudential norms, banks must immediately freeze uncollected interest recognition and allocate mandatory capital provisioning out of their operating reserves. To mitigate this capital drag, the lender issues a statutory demand notice under Section 13(2) of the SARFAESI Act. Borrowers must understand that a Section 13(2) notice is not an eviction order. It is a formal demand granting an unconditional 60-day statutory window during which the homeowner retains full ownership, physical possession, and statutory rights to challenge the bank claims.
              </p>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & FORENSIC LEDGER AUDIT */}
            <section id="financial-breakdown-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Percent className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  2. Loan Ledger Forensic Audit &amp; Penal Math Breakdown
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A frequent vulnerability in bank SARFAESI claims lies in the mathematical computation of the claimed debt. When an account enters delinquency, automated banking systems routinely levy penal interest, overdue processing charges, inspection fees, and legal overheads. Over several quarters, these ancillary fees compound exponentially, inflating the demand amount by 20% to 40% beyond the legitimate principal and contracted interest.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI Master Circular on Fair Practices Code and the landmark directives on penal charges in loan accounts, regulated entities are strictly prohibited from capitalizing penal charges into the principal debt for compounding purposes. Penal levies must be recovered separately as operational fees and cannot be compounded with monthly interest. When an institutional borrower or homeowner conducts a forensic audit of their historical loan ledger, substantial accounting discrepancies frequently emerge, providing decisive leverage to dispute the Section 13(2) demand notice.
              </p>
              
              {/* Financial Calculation Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <BadgePercent className="w-5 h-5 text-[#1886ff]" />
                  Forensic Debt Audit: Representative ₹75 Lakh Home Loan Default Claim
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider text-rose-600">Bank Section 13(2) Demand Claim</span>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Core Principal Balance:</span>
                      <span className="font-semibold text-slate-900">₹68,50,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Contractual Overdue Interest:</span>
                      <span className="font-semibold text-slate-900">₹8,20,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Compounded Penal Charges:</span>
                      <span className="font-semibold text-rose-600">₹6,40,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Administrative &amp; Legal Fees:</span>
                      <span className="font-semibold text-rose-600">₹2,80,000</span>
                    </div>
                    <div className="flex justify-between pt-2 text-slate-900 font-extrabold text-sm">
                      <span>Total Bank Demand Claim:</span>
                      <span className="text-rose-600">₹85,90,000</span>
                    </div>
                  </div>

                  <div className="bg-blue-50/60 p-4 rounded-xl space-y-2 border border-blue-100">
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider text-[#1886ff]">Audited Settlement Baseline</span>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Verified Core Principal:</span>
                      <span className="font-semibold text-slate-900">₹68,50,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Simple Contractual Interest:</span>
                      <span className="font-semibold text-slate-900">₹6,10,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Illegal Penal Charges Waived:</span>
                      <span className="font-semibold text-emerald-600">-₹6,40,000 (100%)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Arbitrary Fees Struck Down:</span>
                      <span className="font-semibold text-emerald-600">-₹2,80,000 (100%)</span>
                    </div>
                    <div className="flex justify-between pt-2 text-slate-900 font-extrabold text-sm">
                      <span>Audited Compromise Baseline:</span>
                      <span className="text-[#1886ff]">₹58,00,000 - ₹62,00,000</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed italic">
                  Note: A forensic audit eliminates unauthorized interest capitalizing during moratoria, rectifies unapplied interest rate reductions under floating benchmark benchmarks, and strips away unapproved administrative fees, creating a clean baseline for compromise negotiations.
                </p>
              </div>
            </section>

            {/* SECTION 3: RESOLUTION & DEFENSE MECHANISMS MATRIX */}
            <section id="resolution-mechanisms-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Scale className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  3. Resolution &amp; Legal Defense Mechanisms Matrix
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Home loan borrowers confronted by SARFAESI recovery proceedings have multiple legal and institutional pathways to protect their assets. Choosing the appropriate mechanism depends on the stage of enforcement, the borrower financial liquidity, and whether the primary objective is immediate debt redemption, long-term loan rehabilitation, or a negotiated exit.
              </p>

              {/* 4-Sided Bordered Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100/80 text-slate-900 font-bold border-b border-slate-200/80">
                        <th className="p-3.5 md:p-4 border-r border-slate-200/80">Mechanism</th>
                        <th className="p-3.5 md:p-4 border-r border-slate-200/80">Governing Section</th>
                        <th className="p-3.5 md:p-4 border-r border-slate-200/80">Statutory Timeline</th>
                        <th className="p-3.5 md:p-4 border-r border-slate-200/80">Borrower Protection</th>
                        <th className="p-3.5 md:p-4">Bank Concession Scope</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-700">
                      <tr className="hover:bg-slate-50/60 transition-colors">
                        <td className="p-3.5 md:p-4 font-bold text-slate-900 border-r border-slate-200/80">
                          Section 13(3A) Objection
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          SARFAESI Act Sec 13(3A)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          Within 60 days of 13(2)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          Compels formal 15-day bank reply; halts hasty physical steps
                        </td>
                        <td className="p-3.5 md:p-4">
                          Correction of ledger errors, removal of unapplied penal fees
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/60 transition-colors">
                        <td className="p-3.5 md:p-4 font-bold text-slate-900 border-r border-slate-200/80">
                          DRT Securitisation Application
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          SARFAESI Act Sec 17
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          Within 45 days of 13(4)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          Interim judicial stay on auction, quashes flawed possession
                        </td>
                        <td className="p-3.5 md:p-4">
                          Court-directed mediation, revision of auction reserve price
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/60 transition-colors">
                        <td className="p-3.5 md:p-4 font-bold text-slate-900 border-r border-slate-200/80">
                          One-Time Settlement (OTS)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          RBI June 2023 Norms &amp; Sec 13(8)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          Any stage prior to auction
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          Complete debt extinguishment, immediate release of title deeds
                        </td>
                        <td className="p-3.5 md:p-4">
                          100% penal waiver, 15% to 45% core interest and balance haircut
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/60 transition-colors">
                        <td className="p-3.5 md:p-4 font-bold text-slate-900 border-r border-slate-200/80">
                          Loan Restructuring / Rescheduling
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          RBI Prudential Framework
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          SMA-1 or early NPA stage
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          Retains property ownership, reduces monthly installment burden
                        </td>
                        <td className="p-3.5 md:p-4">
                          Tenor extension up to 5 years, interest rate restructuring
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/60 transition-colors">
                        <td className="p-3.5 md:p-4 font-bold text-slate-900 border-r border-slate-200/80">
                          National Lok Adalat
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          Legal Services Authorities Act
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          Quarterly judicial sittings
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          Final non-appealable award, zero court fees, stops litigation
                        </td>
                        <td className="p-3.5 md:p-4">
                          Standardized concession grids approved by zonal committees
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: CIBIL ALGORITHM & DEED RECOVERY DYNAMICS */}
            <section id="cibil-algorithm-restoration" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <TrendingUp className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  4. CIBIL Algorithm &amp; Mortgage Debt Closure Dynamics
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Defaulting on a secured home loan causes significant damage to an individual credit profile. Because home loans represent high-ticket facilities, credit scoring algorithms like TransUnion CIBIL, Experian, and CRIF High Mark heavily weight 90+ Days Past Due (DPD) delinquencies. When an account enters NPA status, the borrower credit score typically plummets from prime tiers (750+) to subprime thresholds (520 to 580), completely restricting access to institutional credit lines.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When concluding a compromise settlement on a secured facility, understanding bureau reporting nomenclature is critical. If the account is closed under an OTS with a financial haircut, the bank reports the account status as Settled or Post-Write-Off Settled. While this mark indicates that the debt was resolved for less than the full contracted balance, it arrests further delinquency escalation, stops ongoing interest accrual, and marks the outstanding overdue balance as zero. Over a 12 to 24 month period, disciplined credit rebuilding through secured fixed-deposit credit cards can restore the credit score above 720.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Equally crucial is the recovery of original title deeds. Under the landmark Reserve Bank of India directive issued on September 13, 2023, all regulated commercial banks and Housing Finance Companies (HFCs) are legally mandated to release all original movable and immovable property documents within 30 days of full loan repayment or compromise settlement. If the lender fails to return the title documents within this 30-day window, the bank is obligated to compensate the borrower at ₹5,000 for each day of delay beyond 30 days, alongside bearing the full cost of reconstructing certified copies in the event of document loss.
              </p>
            </section>

            {/* SECTION 5: INFOGRAPHIC OVERVIEW */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <FileText className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  5. Visual 6-Stage SARFAESI Defense &amp; Property Protection Blueprint
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the chronological interplay between bank enforcement powers and borrower legal remedies is essential for defending your mortgaged home. The comprehensive architectural infographic below maps out the 6 pivotal stages of the SARFAESI process, highlighting critical statutory deadlines, judicial stay checkpoints, and the structured redemption pathway to retrieve original property documents.
              </p>

              {/* Infographic Image Container */}
              <div className="rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-900 shadow-md">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/infographics/home-loan-default-sarfaesi-act.jpg"
                    alt="Home Loan Default SARFAESI Act 6-Stage Defense Infographic"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1200px) 100vw, 1100px"
                    priority
                  />
                </div>
                <div className="p-4 bg-slate-950 text-slate-300 text-xs border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2">
                  <span>CredSettle SARFAESI Defense &amp; Mortgage Resolution Framework</span>
                  <span className="text-blue-400 font-semibold">Statutory Compliance: SARFAESI Act 2002 &amp; Security Interest Rules</span>
                </div>
              </div>
            </section>

            {/* SECTION 6: 6-STAGE STATUTORY DEFENSE SOP */}
            <section id="step-by-step-sop" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Layers className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  6. The 6-Stage Statutory Defense SOP: From Notice to Deed Release
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Navigating a home loan default requires a disciplined legal strategy that leverages statutory safeguards at every stage. Homeowners often panic upon receiving bank communications, allowing critical statutory timelines to elapse by default. By following this standardized operational procedure, borrowers can systematically challenge bank non-compliance, halt coercive physical possession, and negotiate an equitable debt resolution.
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-sm flex-shrink-0">
                      01
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-slate-900">
                      Stage 1: Demand Notice Scrutiny &amp; 60-Day Cure Window Audit
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-11">
                    The process begins when the bank serves a statutory demand notice under Section 13(2). Borrowers must immediately verify the notice validity: confirm that the account was legitimately classified as an NPA after 90 days of continuous default, scrutinize the detailed breakup of principal, interest, and charges, and confirm whether the security interest is registered with the Central Registry of Securitisation Asset Reconstruction and Security Interest of India (CERSAI) under Section 26D. The notice triggers an absolute 60-day statutory window during which the bank cannot initiate physical possession.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-sm flex-shrink-0">
                      02
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-slate-900">
                      Stage 2: Section 13(3A) Formal Representation &amp; Mandatory 15-Day Reply
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-11">
                    Within the 60-day period, the borrower must submit a comprehensive written representation or objection under Section 13(3A). This document challenges erroneous ledger entries, disputes illegal compound penal levies, asserts bonafide financial hardship, or proposes a viable restructuring plan. Under the statute, the authorized officer is legally obligated to consider the representation and communicate a reasoned written order within exactly 15 days. If the bank fails to issue this reasoned reply before proceeding to possession, the entire subsequent recovery action becomes legally void.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-sm flex-shrink-0">
                      03
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-slate-900">
                      Stage 3: Property Valuation &amp; Rule 8(6) Statutory Notice Audit
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-11">
                    If the bank assumes symbolic possession under Section 13(4) by affixing a possession notice, it must comply with Rule 8 of the Security Interest (Enforcement) Rules, 2002. The lender must obtain an objective valuation report from an approved registered valuer before fixing the reserve price. Under Rule 8(6), the authorized officer must serve an individual 30-day notice of sale directly to the borrower before scheduling any public auction. Borrowers can audit the valuation to ensure the property is not being auctioned at an artificial distress price that erodes their accumulated equity.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-sm flex-shrink-0">
                      04
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-slate-900">
                      Stage 4: Filing Section 17 Securitisation Application before the DRT
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-11">
                    Once the bank takes any measure under Section 13(4), the borrower has 45 days to file a Securitisation Application (SA) before the jurisdictional Debt Recovery Tribunal (DRT) under Section 17. Crucially, filing an application under Section 17 requires zero mandatory pre-deposit of the claimed amount. By demonstrating procedural lapses such as failure to reply under Section 13(3A), undervaluation of the asset, or improper service of the 30-day sale notice, the borrower can obtain urgent interim stay orders halting public auctions and physical eviction.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-sm flex-shrink-0">
                      05
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-slate-900">
                      Stage 5: Structuring Compromise OTS Terms with Zonal Committees
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-11">
                    With legal defenses established and the auction stayed, negotiations transition to the bank Stressed Assets Resolution Branch (SARB) or Zonal Settlement Advisory Committee. Lenders recognize that prolonged DRT proceedings and sluggish property auctions tie up institutional capital. Borrowers can propose a structured One-Time Settlement (OTS) under the RBI June 2023 compromise framework, offering an upfront deposit (typically 10% to 15%) with the balance payable in agreed installments, securing complete waivers of penal interest and legal costs.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-sm flex-shrink-0">
                      06
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-slate-900">
                      Stage 6: Section 13(8) Deed Redemption, NDC, and Bureau Rectification
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-11">
                    Under Section 13(8) of the SARFAESI Act, the borrower holds a statutory right of redemption. If the agreed dues or settlement sum are tendered before the date of publication of the auction notice, the secured creditor cannot proceed with the sale. Upon realization of the final settlement installment, the bank must issue an unconditional No Dues Certificate, withdraw all pending Section 14 and DRT proceedings, release original title deeds within 30 days under RBI mandates, and update bureau records.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & BORROWER RIGHTS */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Gavel className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  7. Statutory Notice Defense &amp; Homeowner Safeguards
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The SARFAESI Act balances the creditor right to speedy debt recovery with constitutional protections under Article 300A of the Indian Constitution, which provides that no person shall be deprived of their property save by authority of law. Because summary enforcement bypasses judicial trials, the Supreme Court of India has repeatedly held that banks must adhere strictly to every procedural requirement of the statute. Any failure by the lender to follow statutory rules renders the recovery action illegal and liable to be quashed.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A critical distinction exists between symbolic possession under Section 13(4) and physical dispossession under Section 14. When a bank serves a possession notice under Section 13(4), it merely assumes legal or symbolic control. The bank cannot forcibly break locks, evict residents, or remove personal belongings based solely on a Section 13(4) notice. To obtain physical possession against an unwilling occupant, the authorized officer must make an application supported by an affidavit to the District Magistrate (DM) or Chief Metropolitan Magistrate (CMM) under Section 14.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before the Magistrate issues a physical possession order, the officer must verify that the bank has satisfied nine mandatory statutory conditions outlined in the proviso to Section 14(1). These include verifying proper service of the 60-day demand notice, receipt and disposal of the Section 13(3A) representation, valid registration on CERSAI, and absence of full payment. If the bank affidavit conceals facts or misrepresents compliance, the borrower can challenge the Section 14 application, delaying physical eviction and creating a vital window to negotiate compromise terms.
              </p>
            </section>

            {/* SECTION 8: 3-TIER GRIEVANCE REDRESSAL MATRIX */}
            <section id="three-tier-escalation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Building2 className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  8. 3-Tier Grievance Redressal &amp; Legal Escalation Matrix
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When confronting coercive actions, unlawful recovery agent harassment, or administrative non-compliance by bank officials, borrowers should execute a structured escalation across institutional, regulatory, and judicial tiers. Relying solely on verbal arguments with branch managers is ineffective because local managers operate under strict non-discretionary recovery targets.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-xs">1</span>
                    <span>Tier 1: Internal Banking</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Authorized Officer &amp; SARB</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit written legal objections directly to the designated Authorized Officer, Regional Stressed Assets Branch, and the bank Principal Nodal Officer (PNO). Demand ledger reconciliation and formal recording of compromise proposals.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-xs">2</span>
                    <span>Tier 2: Regulatory</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">RBI Integrated Ombudsman</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank violates the Fair Practices Code, deploys unauthorized recovery agents, or fails to respond within 30 days, file an online complaint under the RBI Reserve Bank Integrated Ombudsman Scheme (RB-IOS) via cms.rbi.org.in.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-2">
                  <div className="flex items-center gap-2 text-violet-600 font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-violet-50 flex items-center justify-center text-xs">3</span>
                    <span>Tier 3: Judicial Tribunals</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">DRT &amp; High Court Writs</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a Securitisation Application before the DRT under Section 17 for interim injunctions. In cases of flagrant constitutional violations or tribunal vacancies, invoke the High Court extraordinary writ jurisdiction under Article 226.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL MILESTONES TIMELINE */}
            <section id="chronological-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  9. Chronological Milestones &amp; Legal Defense Timeline
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The recovery process under SARFAESI follows a predictable statutory calendar. Knowing the exact sequence of events empowers homeowners to anticipate lender actions and deploy legal remedies before deadlines expire.
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100/80 text-slate-900 font-bold border-b border-slate-200/80">
                        <th className="p-3.5 md:p-4 border-r border-slate-200/80">Delinquency Phase</th>
                        <th className="p-3.5 md:p-4 border-r border-slate-200/80">Regulatory Event</th>
                        <th className="p-3.5 md:p-4 border-r border-slate-200/80">Bank Action Scope</th>
                        <th className="p-3.5 md:p-4">Borrower Legal Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-700">
                      <tr className="hover:bg-slate-50/60 transition-colors">
                        <td className="p-3.5 md:p-4 font-bold text-slate-900 border-r border-slate-200/80">
                          Days 1 to 90
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          Special Mention Account (SMA-0/1/2)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          Routine collection reminders, telephonic notices, late fee charges
                        </td>
                        <td className="p-3.5 md:p-4">
                          Request loan restructuring, EMI deferment, or tenor extension
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/60 transition-colors">
                        <td className="p-3.5 md:p-4 font-bold text-slate-900 border-r border-slate-200/80">
                          Day 91
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          NPA Classification Trigger
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          Account classified as Non-Performing Asset, provisioning allocated
                        </td>
                        <td className="p-3.5 md:p-4">
                          Audit ledger balance, demand statement of accounts, prepare hardship brief
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/60 transition-colors">
                        <td className="p-3.5 md:p-4 font-bold text-slate-900 border-r border-slate-200/80">
                          Days 91 to 150
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          Section 13(2) Demand Period
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          Service of 60-day demand notice demanding entire outstanding dues
                        </td>
                        <td className="p-3.5 md:p-4">
                          File formal Section 13(3A) representation; invoke 15-day bank reply mandate
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/60 transition-colors">
                        <td className="p-3.5 md:p-4 font-bold text-slate-900 border-r border-slate-200/80">
                          Days 151 to 180
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          Section 13(4) Symbolic Possession
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          Affixing possession notice, newspaper publication, Sec 14 DM filing
                        </td>
                        <td className="p-3.5 md:p-4">
                          File Securitisation Application before DRT under Section 17; oppose DM order
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/60 transition-colors">
                        <td className="p-3.5 md:p-4 font-bold text-slate-900 border-r border-slate-200/80">
                          Day 180 onwards
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          Public Auction &amp; Redemption
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200/80">
                          Rule 8(6) 30-day notice, Rule 9(1) newspaper auction advertisement
                        </td>
                        <td className="p-3.5 md:p-4">
                          Exercise Section 13(8) right of redemption; execute compromise OTS terms
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <ShieldAlert className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  10. Specialized Real-World Scenarios &amp; Complex Legal Nuances
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Secured home loan defaults frequently involve complex collateral structures, third-party rights, and developer defaults. Recognizing these unique factual matrices provides decisive legal defenses against summary bank enforcement.
              </p>

              <div className="space-y-4 text-xs md:text-sm text-slate-700">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-2 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm md:text-base">
                    Agricultural Land Exemption under Section 31(i)
                  </h3>
                  <p className="leading-relaxed">
                    Under Section 31(i) of the SARFAESI Act, the provisions of the Act do not apply to any security interest created in agricultural land. In numerous cases where farmhouses, suburban plots, or mixed-use lands are mortgaged for housing credit, banks improperly attempt SARFAESI enforcement. The Supreme Court in ITC Limited v. Blue Coast Hotels Ltd reaffirmed that revenue records determining agricultural classification at the time of mortgage creation govern exemption, barring banks from taking summary possession.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-2 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm md:text-base">
                    Builder-Buyer Subvention Scheme Defaults
                  </h3>
                  <p className="leading-relaxed">
                    In subvention schemes, buyers, developers, and lending institutions enter tripartite agreements where the builder promises to service EMIs until project possession. When developers abandon construction and default on EMIs, banks aggressively initiate recovery against individual homebuyers. High Courts across India, including the Delhi High Court in multiple landmark writ petitions, have granted interim injunctions restraining lenders from coercive SARFAESI actions against innocent buyers who never received physical possession from defaulting developers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-2 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm md:text-base">
                    Protection of Bonafide Tenants under Section 14
                  </h3>
                  <p className="leading-relaxed">
                    Where a mortgaged residential property is occupied by a valid tenant under a registered lease deed executed prior to mortgage creation, the tenant cannot be summarily evicted by the Magistrate under Section 14. In Harshad Govardhan Sondagar v. International Assets Reconstruction Co., the Supreme Court held that the Chief Metropolitan Magistrate must determine the validity of the tenancy, and the secured creditor can only assume symbolic possession and landlord rights, preserving tenant occupation until lawful lease expiry.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-2 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm md:text-base">
                    Debt Transferred to Asset Reconstruction Companies (ARCs)
                  </h3>
                  <p className="leading-relaxed">
                    When public or private banks cannot recover distressed housing debt, they assign the portfolio to an Asset Reconstruction Company under Section 5 of the SARFAESI Act. ARCs typically acquire these Non-Performing Assets at significant discounts, often paying only 30% to 50% of the book value. Because ARCs acquire the debt at a deep haircut, they possess substantial commercial flexibility to negotiate attractive One-Time Settlement compromise packages with borrowers who demonstrate verifiable illiquidity.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: ABOUT CREDSETTLE (CompanySection) */}
            <section id="company-profile" className="scroll-target pt-4">
              <CompanySection />
            </section>

            {/* SECTION 12: FREQUENTLY ASKED QUESTIONS (10 ACCORDIONS) */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4 pt-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <HelpCircle className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  Frequently Asked Questions
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Clear, authoritative answers to critical questions regarding home loan defaults, SARFAESI proceedings, DRT stays, and property deed recovery.
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-xs md:text-sm hover:text-[#1886ff] transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={'w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ' + (
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          )}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 md:px-5 md:pb-5 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Award className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg md:text-xl font-bold text-slate-900">
                  Statutory Citations &amp; Regulatory Authorities
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                CredSettle mortgage dispute resolution and SARFAESI defense procedures strictly adhere to statutory frameworks including the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act (2002), Security Interest (Enforcement) Rules (2002), Recovery of Debts and Bankruptcy Act (1993), Transfer of Property Act (1882), RBI Master Direction on Compromise Settlements (June 8, 2023), and RBI Direction on Release of Movable/Immovable Property Documents (September 13, 2023).
              </p>

              {/* Outbound Badges */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                  Verified Institutional Regulators:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>RBI (rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>Ombudsman (cms.rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://drt.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>DRT (drt.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>CIBIL (cibil.com)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>India Code (indiacode.nic.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>NALSA (nalsa.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Internal Related Badges */}
              <div className="space-y-2 pt-3 border-t border-slate-200/80">
                <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                  Related Debt Resolution Guides:
                </span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/how-to-convince-bank-for-one-time-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convince Bank for OTS
                  </Link>
                  <Link href="/best-lawyer-for-personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan Settlement Lawyer
                  </Link>
                  <Link href="/business-loan-settlement-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business Loan Settlement
                  </Link>
                  <Link href="/two-wheeler-bike-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Vehicle Loan Settlement
                  </Link>
                  <Link href="/gold-loan-default-auction" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Gold Loan Auction
                  </Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 25 NACH Notice
                  </Link>
                  <Link href="/section-138-cheque-bounce-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 138 Defense
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
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
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Specialized in mortgage dispute resolution, SARFAESI defense, DRT stay petitions, and Zonal committee settlements.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <Link
                  href="/author/ashish-jhangra"
                  className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Author Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> CredSettle Panel
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card (#2452ae Background) */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  MORTGAGE DEFENSE CELL
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Facing SARFAESI Auction?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our mortgage defense specialists represent you before bank Stressed Assets branches and file urgent DRT stay applications.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Facing SARFAESI Auction? Protect Your Property &amp; Stop Bank Eviction
              </Link>
              <div className="pt-2 flex flex-col items-center justify-center gap-1 text-[11px] text-blue-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-blue-200" />
                  <a href="tel:+918800226635" className="hover:underline font-bold text-white">
                    Call: +91-8800226635
                  </a>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-blue-300">
                  <Lock className="w-3 h-3" />
                  <span>Direct Bank Settlement • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Performance-linked fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Remittance:</strong> No middleman pooling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>SARB Representation:</strong> Direct institutional talks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Defense:</strong> DRT &amp; SARFAESI panel.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related SARFAESI Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/how-to-convince-bank-for-one-time-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    How to Convince Bank for One Time Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">OTS negotiation blueprint &rarr;</span>
                </Link>

                <Link
                  href="/best-lawyer-for-personal-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Best Lawyer for Personal Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal representation &rarr;</span>
                </Link>

                <Link
                  href="/gold-loan-default-auction"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Gold Loan Default &amp; Auction Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Secured debt relief &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
