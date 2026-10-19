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
  Landmark,
  Percent,
  Receipt
} from 'lucide-react';

export default function RbiPenalChargesClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Regulatory Crux' },
    { id: 'rbi-circular-shift', label: '1. RBI Penal Charges Circular' },
    { id: 'charges-vs-interest', label: '2. Penal Interest vs Penal Charges' },
    { id: 'capitalization-ban', label: '3. Ban on Compounding & Ledgers' },
    { id: 'board-policy-parity', label: '4. Board Policy & Borrower Parity' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Audit & Waiver SOP' },
    { id: 'transparency-kfs', label: '7. Key Fact Statement Directives' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance Redressal' },
    { id: 'procedural-timeline', label: '9. Delinquency to Waiver Timeline' },
    { id: 'product-exceptions', label: '10. Product Exceptions & Credit Cards' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Directives' }
  ];

  const faqs = [
    {
      q: 'What is the primary difference between penal interest and penal charges under RBI rules?',
      a: 'Under RBI circular RBI/2023-24/53, penal interest was an extra percentage added to the contracted interest rate that compounded over time. Under the new rules, lenders can only levy penal charges as a separate, distinct fee. Penal charges cannot be added to the principal and cannot attract any further interest.'
    },
    {
      q: 'Can banks capitalize or compound penal charges on overdue loan accounts?',
      a: 'No. The Reserve Bank of India has strictly prohibited the capitalization of penal charges. Lenders cannot add penal charges to the loan principal, and no interest can ever be computed or charged on accumulated penal charges.'
    },
    {
      q: 'When did the RBI guidelines on penal charges become effective?',
      a: 'The instructions became mandatory for all fresh loans sanctioned on or after April 1, 2024. For existing loan accounts, banks and NBFCs were mandated to switch to the new penal charges regime on the next review or renewal date, latest by June 30, 2024.'
    },
    {
      q: 'Do RBI penal charge guidelines apply to credit cards?',
      a: 'No. The circular explicitly specifies that instructions on penal charges do not apply to credit cards. Credit card finance charges and late payment fees continue to be governed by the Master Direction on Credit Card and Debit Card Issuance and Conduct Directions, 2022.'
    },
    {
      q: 'What is the borrower parity rule for individual vs non-individual loans?',
      a: 'The RBI mandates that the quantum of penal charges levied on individual borrowers for personal, home, or retail loans cannot exceed the penal charges applicable to corporate or non-individual borrowers for identical defaults.'
    },
    {
      q: 'Where must lenders disclose the penal charges policy to borrowers?',
      a: 'Lenders must clearly disclose penal charges upfront in the Key Fact Statement (KFS), the loan agreement, and under the Most Important Terms and Conditions (MITC). They must also publish the complete schedule on their official website under Interest Rates and Service Charges.'
    },
    {
      q: 'Can banks use penal charges as a revenue generation tool?',
      a: 'No. The RBI has made it unequivocally clear that the sole objective of levying penal charges is to inculcate credit discipline. Penal charges cannot be deployed as a revenue enhancement or profit-generating mechanism by any lending institution.'
    },
    {
      q: 'What should I do if a bank compounds penal interest after April 2024?',
      a: 'You should demand a forensic ledger audit through legal counsel. If the bank fails to reverse unlawful compounding within 30 days, you can lodge a formal complaint with the RBI Integrated Ombudsman via cms.rbi.org.in citing circular RBI/2023-24/53.'
    },
    {
      q: 'Can penal charges be waived during a One-Time Settlement (OTS)?',
      a: 'Yes. In structured debt resolution and One-Time Settlements (OTS), 100% of accumulated penal charges and overdue interest are customarily waived. CredSettle negotiates directly with bank credit committees to eliminate all penal fees and achieve 40% to 75% haircuts on core principal.'
    },
    {
      q: 'How does CredSettle help borrowers facing inflated penal loan claims?',
      a: 'CredSettle conducts a forensic audit of your loan statements, identifies unauthorized compounding and illegal penal interest debits, issues formal regulatory dispute notices to the lender, and negotiates an affordable, binding settlement with a clean No Dues Certificate.'
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold mb-3">
            <Landmark className="w-3.5 h-3.5" />
            <span>Fair Lending Practice &amp; Regulatory Compliance Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            RBI Guidelines on Penal Charges in Loan Accounts
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Authoritative legal guide for borrowers on RBI circular RBI/2023-24/53. Understand the ban on penal interest compounding, board-approved reasonableness rules, and how to audit and waive unlawful loan charges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Audit Your Penal Charges</span>
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
                  <span>Fair Lending Practice Directive</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Enforcing RBI circular RBI/2023-24/53 and Section 35A of the Banking Regulation Act.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: RBI PENAL CHARGES REGULATORY CRUX</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Total Ban on Penal Interest:</strong> Under RBI circular RBI/2023-24/53, lenders can no longer add a penal interest percentage to the contracted loan interest rate.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict Prohibition on Capitalization:</strong> Lenders are prohibited from adding penal charges to the loan principal. No compound interest can ever be charged on penal fees.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Revenue Enhancement:</strong> The Reserve Bank mandates that penalties exist solely as a credit discipline deterrent, not as a profit or revenue generator.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Borrower Parity Mandate:</strong> Individual retail borrowers cannot be charged higher penal charges than corporate or commercial borrowers for similar non-compliance.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Full Waiver in OTS Settlements:</strong> In formal compromise settlements, 100% of accumulated penal fees and overdue charges are routinely waived by bank credit committees.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: RBI Penal Charges Circular */}
            <section id="rbi-circular-shift" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Mandate &amp; Regulatory Background</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Penal Charges Circular: The Legal Shift
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For decades, commercial banks and Non-Banking Financial Companies (NBFCs) across India exploited loan delinquency by levying usurious penal interest rates ranging from 2% to 4% per month over and above the regular contracted loan rate. Because this penalty was structured as interest, lending software routinely merged it with the borrower principal, generating compound interest on unpaid penalties.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This predatory practice trapped distressed retail borrowers, MSMEs, and salaried employees in an irreversible debt spiral. A single missed EMI triggered escalating compound interest that rapidly surpassed the original borrowed principal, causing loan defaults to multiply exponentially.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To eliminate this systemic exploitation, the Reserve Bank of India issued its landmark circular on Fair Lending Practice - Penal Charges in Loan Accounts (Circular No. RBI/2023-24/53 DoR.MCS.REC.28/01.01.001/2023-24) on August 18, 2023. Exercising statutory powers under Section 21, Section 35A, and Section 56 of the Banking Regulation Act, 1949, and the RBI Act, 1934, the central bank completely dismantled the penal interest model.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The central directive is uncompromising: penalties for loan non-compliance must be treated exclusively as distinct penal charges. Lenders can no longer add any additional interest rate to the loan, cannot capitalize penalties, and cannot compute interest upon interest.
              </p>
            </section>

            {/* SECTION 2: Penal Interest vs Penal Charges */}
            <section id="charges-vs-interest" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Penal Interest vs Penal Charges: Key Differences
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To protect your financial rights and challenge unlawful loan ledger statements, borrowers must understand the precise technical and legal distinction between penal interest and penal charges under current RBI jurisprudence.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                While penal interest was an aggressive interest rate multiplier that increased the lender financial yield, penal charges are strictly regulated administrative penalties designed solely to encourage contractual compliance.
              </p>

              {/* Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Comparative Feature</th>
                      <th className="p-3">Pre-2024 Regime (Penal Interest)</th>
                      <th className="p-3">RBI 2024 Mandate (Penal Charges)</th>
                      <th className="p-3">Impact on Borrower Protection</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-rose-50/20">
                      <td className="p-3 font-bold text-slate-900">Legal Classification</td>
                      <td className="p-3 text-rose-700">Additional interest rate added to advance</td>
                      <td className="p-3 text-emerald-700 font-semibold">Separate, standalone non-interest charge</td>
                      <td className="p-3">Eliminates disguised interest rate inflation.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Capitalization on Principal</td>
                      <td className="p-3 text-rose-700">Added to principal balance every billing cycle</td>
                      <td className="p-3 text-emerald-700 font-semibold">Absolute statutory bar on capitalization</td>
                      <td className="p-3">Prevents snowballing compounding debt traps.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Interest on Penalty</td>
                      <td className="p-3 text-rose-700">Full compounding interest charged on penalty</td>
                      <td className="p-3 text-emerald-700 font-semibold">Zero interest permitted on penal charges</td>
                      <td className="p-3">Borrowers only pay the exact base penalty fee.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Regulatory Purpose</td>
                      <td className="p-3 text-rose-700">Used as revenue and profit enhancement</td>
                      <td className="p-3 text-emerald-700 font-semibold">Restricted strictly to credit discipline</td>
                      <td className="p-3">Prohibits predatory lender fee structures.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Board Policy Oversight</td>
                      <td className="p-3 text-rose-700">Arbitrary officer discretion at branch level</td>
                      <td className="p-3 text-emerald-700 font-semibold">Mandatory published Board-Approved Policy</td>
                      <td className="p-3">Enforces uniform, transparent standards.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Individual vs Corporate</td>
                      <td className="p-3 text-rose-700">Retail borrowers charged 2x to 3x higher rates</td>
                      <td className="p-3 text-emerald-700 font-semibold">Strict parity: individual charges &le; corporate</td>
                      <td className="p-3">Guarantees equal rights for retail consumers.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: Ban on Capitalization */}
            <section id="capitalization-ban" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Percent className="w-4 h-4 text-[#1886ff]" />
                <span>Forensic Accounting &amp; Ledger Audit</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Ban on Capitalization: Compounding Restrictions
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The most impactful clause of the RBI guidelines is paragraph 3(b): Lenders shall not capitalize penal charges, meaning no further interest shall be computed on such charges. This instruction does not affect the normal procedures for compounding interest on the principal loan amount itself, but completely isolates the penalty.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the old system, if a borrower missed an EMI of ₹40,000 on a ₹10,00,000 personal loan, the bank added ₹1,500 penal interest to the principal ledger balance. In the next billing cycle, the bank charged its 16% regular interest PLUS 24% penal interest on ₹10,01,500. Within 12 months of default, the borrower owed hundreds of thousands in phantom interest.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the 2024 RBI directive, penal charges must sit in a separate non-interest-bearing column. Even if penal charges remain unpaid for twelve consecutive months, they remain fixed at their nominal figure without ever attracting interest.
              </p>

              {/* Representative Ledger Audit Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Forensic Ledger Audit Math: ₹10 Lakh Personal Loan Overdue</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">12-Month Delinquency Model</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Ledger Component</th>
                        <th className="p-3">Old Compounding Practice</th>
                        <th className="p-3">RBI Compliant Balance</th>
                        <th className="p-3 text-right">Borrower Relief via Audit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Contracted Principal Balance</td>
                        <td className="p-3">₹10,00,000</td>
                        <td className="p-3">₹10,00,000</td>
                        <td className="p-3 text-right font-bold text-slate-700">₹0 (Base Principal)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Regular Contracted Interest (15% p.a.)</td>
                        <td className="p-3">₹1,50,000</td>
                        <td className="p-3">₹1,50,000</td>
                        <td className="p-3 text-right font-bold text-slate-700">Standard Contractual</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Penal Interest Levied</td>
                        <td className="p-3 text-rose-600 font-bold">₹2,40,000 (Capitalized)</td>
                        <td className="p-3 text-emerald-600 font-semibold">₹0 (Strictly Banned)</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹2,40,000 Saved</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Compound Interest on Penal Dues</td>
                        <td className="p-3 text-rose-600 font-bold">₹78,400 (Interest on Interest)</td>
                        <td className="p-3 text-emerald-600 font-semibold">₹0 (Prohibited)</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹78,400 Saved</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Approved Standalone Penal Charges</td>
                        <td className="p-3">₹0 (Disguised in interest)</td>
                        <td className="p-3 text-blue-600 font-bold">₹18,000 (Fixed Fee)</td>
                        <td className="p-3 text-right font-bold text-blue-700">Waved in OTS</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Claim vs Final OTS Settlement</td>
                        <td className="p-3 text-rose-700">₹14,68,400 Gross Claim</td>
                        <td className="p-3 text-emerald-700">₹11,68,000 Real Dues</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">Settled at ₹3,85,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Board Policy & Parity */}
            <section id="board-policy-parity" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Fair Lending Governance Standards</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Board-Approved Policy &amp; Parity for Borrowers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Prior to the 2024 directive, branch managers and credit recovery desks applied arbitrary penalties based on internal recovery quotas. A borrower who was 30 days late on a personal loan might see a 36% penal charge, while a commercial borrower defaulting on a ₹10 Crore cash credit line was offered a waiver.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI has instituted two ironclad governance safeguards that every Regulated Entity (RE) must implement:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Board-Approved Policy Requirement</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The quantum and schedule of penal charges must be explicitly approved by the Board of Directors of the bank or NBFC. Penalties must be reasonable, proportionate to default duration, non-discriminatory within loan categories, and published prominently on the institution website.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <UserCheck className="w-4 h-4" />
                    <span>The Individual Borrower Parity Mandate</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under paragraph 3(e) of the circular, penal charges levied on individual borrowers for non-business loans (home loans, personal loans, vehicle loans, education loans) can never be higher than those applicable to corporate borrowers for identical non-compliance.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: RBI Fair Lending Framework
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive infographic visualizes the six regulatory pillars enacted by the Reserve Bank of India, detailing the operational shifts from predatory penal interest to transparent, board-governed penal charges.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/rbi-guidelines-on-penal-charges-in-loan-accounts.jpg"
                    alt="RBI Guidelines on Penal Charges in Loan Accounts Infographic"
                    width={1200}
                    height={675}
                    priority
                    className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Regulatory Compliance Framework • RBI/2023-24/53 Compliant</span>
                  <a
                    href="/images/infographics/rbi-guidelines-on-penal-charges-in-loan-accounts.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View High-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Audit &amp; Waive Penal Charges
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank or NBFC has levied inflated interest, compound charges, or arbitrary default penalties on your loan account, execute this six-stage legal resolution protocol to reclaim your rights and achieve a debt-free resolution.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Procure Certified Statement of Account (SOA)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Request a complete, certified loan statement from the date of loan disbursement to the present. Ensure the statement itemizes all debits, specifically separating principal repayments, regular contracted interest, penal interest, and incidental fees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Conduct Forensic Accounting Ledger Audit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Audit the ledger against RBI Circular RBI/2023-24/53. Identify whether penal interest was capitalized into the principal balance post-April 2024, whether interest was charged on penalties, and whether individual borrower parity rules were breached.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Issue Formal Regulatory Dispute Notice
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Through legal counsel, dispatch a formal demand notice to the bank Grievance Redressal Officer (GRO) and Nodal Desk. Demand immediate de-capitalization of unlawful charges and a re-calculation of the true outstanding principal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Escalate to the RBI Integrated Ombudsman
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the lender fails to resolve the unauthorized ledger entries within 30 days, file an official grievance through the RBI Complaint Management System (CMS) at cms.rbi.org.in, invoking regulatory penalties against the bank.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Propose One-Time Settlement (OTS) with Full Waiver
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    With regulatory leverage established, initiate structured compromise negotiations directly with the bank Stressed Asset Resolution Branch (SARB). Demand 100% waiver of all penal fees and a 40% to 75% haircut on the core principal balance.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Settlement Sanction &amp; No Dues Certificate
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Vet the formal settlement sanction letter to confirm that all penal claims are irrevocably extinguished. Remit the agreed settlement funds directly into your loan account and secure your clean No Dues Certificate within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Key Fact Statement & Transparency */}
            <section id="transparency-kfs" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Receipt className="w-4 h-4 text-[#1886ff]" />
                <span>Mandatory Disclosure Directives</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Key Fact Statement &amp; Transparency Directives
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India has mandated complete contractual transparency so that borrowers are never surprised by hidden charges or ambiguous penalty clauses upon loan default.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Key Fact Statement (KFS) Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders must disclose the exact quantum and specific calculation formula of penal charges in the standard Key Fact Statement provided to borrowers before signing the loan contract.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Phone className="w-4 h-4" />
                    <span>Real-Time Default Reminders</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Whenever an EMI payment reminder is issued via SMS, WhatsApp, or formal letter, the lender must clearly communicate the exact applicable penal charge and the factual basis of the levy.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Public Website Disclosure</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every commercial bank, cooperative bank, and NBFC must display its comprehensive penal charges schedule under the Interest Rates and Service Charges portal on its official website.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>MITC Contractual Binding</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Most Important Terms and Conditions (MITC) must include clear examples showing how penal charges are computed, explicitly confirming that no interest will be applied to penal fees.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: RBI Redressal Steps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your lender continues to levy unauthorized compound penal interest, fails to transition an existing loan by June 2024, or refuses to provide an itemized fee statement, utilize the Reserve Bank institutional grievance redressal mechanism.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Reviews statement of account, identifies unauthorized compounding, and freezes disputed penal debits.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Enforces institutional compliance with circular RBI/2023-24/53, reverses illegal charges, and evaluates OTS.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Issues binding statutory award via cms.rbi.org.in, mandates ledger rectification, and awards compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Default to Charge Waiver
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the delinquency lifecycle of your loan enables you to monitor when penal charges are recorded and leverage regulatory non-compliance during compromise negotiations.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Delinquency Window</th>
                      <th className="p-3">Asset Classification</th>
                      <th className="p-3">Penal Charge Behavior</th>
                      <th className="p-3">Strategic Action Required</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Fixed penal charge recorded; zero interest compounded.</td>
                      <td className="p-3">Review reminder notice to ensure fee matches KFS schedule.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Second default fee recorded in separate non-interest ledger.</td>
                      <td className="p-3">Ensure bank has not added unpaid fees to loan principal.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Pre-NPA notice dispatched with itemized overdue breakdown.</td>
                      <td className="p-3">Demand audit if cumulative penalty exceeds approved policy.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Tagging</td>
                      <td className="p-3">Account marked NPA; income recognition suspended.</td>
                      <td className="p-3">Regular interest stops accruing; conduct forensic ledger audit.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Prime OTS Window</td>
                      <td className="p-3">Lender open to full waiver of uncollected penal charges.</td>
                      <td className="p-3 font-bold text-slate-900">Execute structured 50% to 75% OTS with CredSettle.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 and Beyond</td>
                      <td className="p-3 font-mono text-[11px]">Recovery / ARC</td>
                      <td className="p-3">Debt assigned or referred to legal recovery committee.</td>
                      <td className="p-3">Enforce NDC closure and obtain CIBIL record update.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Product Exceptions & Credit Cards */}
            <section id="product-exceptions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Product Scope &amp; Legal Nuances</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Product Exceptions: Credit Cards &amp; Business
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                While the RBI guidelines apply broadly to commercial banks, NBFCs, and cooperative banks, borrowers must be aware of specific product exemptions and specialized loan categories.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Credit Card Accounts Excluded
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Paragraph 2 of the circular explicitly states that instructions on penal charges do not apply to credit cards. Credit cards remain governed by the Master Direction on Credit Card and Debit Card Issuance and Conduct Directions, 2022. However, credit card dues can still be settled via OTS.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    Business Loans &amp; Overdraft Facilities
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Commercial loans, MSME credit, and working capital overdrafts fall strictly within the penal charges circular. Lenders cannot charge penal interest on stock statement delays or technical covenant defaults.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-indigo-600" />
                    Housing &amp; Vehicle Loan Parity
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Home loans and auto loans availed by individuals enjoy full parity protection. NBFC housing finance companies (HFCs) cannot charge higher penal rates on retail mortgage defaults than corporate project finance loans.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Pre-April 2024 Transition Rules
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For loan accounts running prior to April 1, 2024, lenders were given until June 30, 2024, to switch over. Any capitalization of penal charges continuing after June 30 constitutes a direct regulatory breach.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: RBI Penal Charges Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding penal charges, compounding prohibitions, borrower parity rights, and loan settlement procedures under Indian banking law.
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden shadow-2xs transition-all duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
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

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Statutory Directives
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Circular RBI/2023-24/53 (DoR.MCS.REC.28/01.01.001/2023-24):</strong> Fair Lending Practice - Penal Charges in Loan Accounts, issued August 18, 2023.
                </li>
                <li>
                  <strong>RBI Circular RBI/2023-24/102 (DoR.MCS.REC.61/01.01.001/2023-24):</strong> Fair Lending Practice - Penal Charges in Loan Accounts Extension of Timeline, issued December 29, 2023.
                </li>
                <li>
                  <strong>Banking Regulation Act, 1949:</strong> Section 21 and Section 35A, Statutory Powers of the Reserve Bank to Control Advances and Issue Public Interest Directions.
                </li>
                <li>
                  <strong>Reserve Bank of India Act, 1934:</strong> Section 45JA, 45L, and 45M, Regulatory Powers Over Non-Banking Financial Companies.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(47), Unfair Trade Practices Arising from Compounding Penal Interest and Concealed Charges.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.epfindia.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>EPFO Official Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan Settlement Guide
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/business-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business Loan Settlement
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF Seizure Protection
                  </Link>
                  <Link href="/can-bank-file-section-420-cheating-case-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 420 Loan Default Rules
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Agent Rules
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Agent Harassment
                  </Link>
                  <Link href="/can-bank-freeze-my-savings-account-for-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Savings Account Freeze
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Defense
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
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
                Specialist in banking compliance, consumer debt protection, forensic ledger audits, and RBI regulatory grievance redressal with over a decade of experience defending borrowers against unlawful bank recovery practices.
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


            {/* Card 2: Emergency CTA Card (#2452ae background) */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  CONFIDENTIAL LEGAL AUDIT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Charging Illegal Penal Interest?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking compliance advocates conduct a forensic audit of your loan statements, challenge unauthorized compound interest under RBI circular RBI/2023-24/53, and negotiate deep settlement discounts.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Audit Your Loan Ledger Now
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
                  <span>RBI Fair Practice Shield • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Penal Compounding:</strong> Elimination of phantom interest.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Forensic Ledger Check:</strong> Independent statement audit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Redressal:</strong> Direct statutory escalations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official Bank Closure:</strong> Guaranteed No Dues Certificate.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/can-bank-seize-epf-provident-fund-for-loan-recovery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank Seize EPF or Gratuity?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Retirement fund legal shield &rarr;</span>
                </Link>

                <Link
                  href="/can-bank-file-section-420-cheating-case-for-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 420 Loan Default Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Civil vs criminal default rights &rarr;</span>
                </Link>

                <Link
                  href="/rbi-rules-for-recovery-agents"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Rules for Recovery Agents
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop unlawful recovery agent calls &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
