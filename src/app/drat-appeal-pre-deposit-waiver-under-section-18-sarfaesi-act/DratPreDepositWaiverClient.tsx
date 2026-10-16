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
  BookOpen,
  Building2,
  Check,
  Lock,
  Phone,
  CreditCard,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark
} from 'lucide-react';

export default function DratPreDepositWaiverClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Legal Crux' },
    { id: 'statutory-mandate', label: '1. Section 18 Mandate: 50% Pre-Deposit' },
    { id: 'waiver-limits', label: '2. Waiver Limits: Reduction to 25%' },
    { id: 'comparison-matrix', label: '3. Pre-Deposit vs Appeal Rights Matrix' },
    { id: 'supreme-court-rulings', label: '4. Supreme Court Landmark Precedents' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step SOP: DRAT Waiver Petition' },
    { id: 'debt-calculation-defense', label: '7. Debt Calculation & Sidha Neelkanth' },
    { id: 'escalation-matrix', label: '8. 3-Tier Redressal & Appellate Matrix' },
    { id: 'procedural-timeline', label: '9. Procedural Timeline: DRT to DRAT' },
    { id: 'specialized-scenarios', label: '10. Specialized Scenarios: Third Parties' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is the mandatory pre-deposit under Section 18 of the SARFAESI Act?',
      a: 'Under the second proviso to Section 18(1) of the SARFAESI Act, an appellant must deposit 50% of the debt due as claimed by the secured creditor or determined by the DRT, whichever is less, before the DRAT can entertain the appeal.'
    },
    {
      q: 'Can DRAT grant a total waiver (0%) of the pre-deposit requirement?',
      a: 'No. The Supreme Court in Kotak Mahindra Bank v. Ambuj Kasliwal held that DRAT has no statutory authority or inherent jurisdiction to reduce the pre-deposit below 25%. A complete waiver is legally impermissible.'
    },
    {
      q: 'What is the minimum pre-deposit amount DRAT can order after hearing a waiver plea?',
      a: 'Under the third proviso to Section 18(1), DRAT can reduce the pre-deposit from 50% to a minimum of 25% of the debt due, provided the tribunal records reasons in writing explaining the borrower financial hardship or strong legal merits.'
    },
    {
      q: 'How is the amount of debt due calculated for the pre-deposit under Section 18?',
      a: 'In Sidha Neelkanth Paper Industries, the Supreme Court held that when a borrower challenges Section 13(4) measures, the debt due is the total claim stated in the demand notice. Prior auction recoveries can only be deducted if the borrower unequivocally accepts the sale.'
    },
    {
      q: 'Does a third party or tenant challenging a DRT order have to make the 50% pre-deposit?',
      a: 'Various High Courts have held that genuine third parties or tenants who are neither principal borrowers, mortgagors, nor guarantors are not bound by the rigid 50% requirement, as they owe no debt to the secured lender.'
    },
    {
      q: 'Can the High Court waive the pre-deposit under Article 226 or Article 227?',
      a: 'No. The Supreme Court has repeatedly ruled that High Courts cannot use discretionary writ powers under Article 226 or 227 to bypass the mandatory statutory condition of pre-deposit or direct DRAT to entertain an appeal below 25%.'
    },
    {
      q: 'Is the pre-deposit forfeited or adjusted against the loan account by the bank?',
      a: 'No. The Supreme Court in Axis Bank v. SBS Organics ruled that pre-deposit money is not a secured asset of the lender. It remains in the custody of the DRAT registry and must be refunded if the appeal is allowed or disposed of.'
    },
    {
      q: 'What is the time limit for filing an appeal before DRAT under Section 18?',
      a: 'An appeal under Section 18 must be filed within 30 days from the date of receipt of the DRT order. An application for condonation of delay under Section 5 of the Limitation Act can be submitted if supported by sufficient cause.'
    },
    {
      q: 'Can a borrower pay the 25% reduced pre-deposit in installments?',
      a: 'Yes. DRAT frequently grants staggered compliance, allowing borrowers to deposit 10% to 12.5% upfront within 2 weeks to obtain an interim stay on auction or possession, with the balance payable within 4 to 6 weeks.'
    },
    {
      q: 'How does CredSettle help borrowers facing SARFAESI auction and DRAT pre-deposits?',
      a: 'CredSettle audits lender debt claims to strip unlawful penal charges, files robust waiver petitions to reduce pre-deposits to 25%, secures interim stays, and negotiates One-Time Settlements (OTS) with 40% to 65% principal haircuts.'
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
            <span>SARFAESI Act 2002 • Debt Recovery Appellate Tribunal Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            DRAT Pre-Deposit Waiver Rules Under Section 18 SARFAESI
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            This legal guide helps you appeal DRT orders before the DRAT. Learn the 50% deposit rule. Learn the 25% waiver floor. Understand Supreme Court rulings. Protect your property with debt settlement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Consult DRAT Legal Specialists</span>
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
                  <span>Section 18 Appellate Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Discretionary reduction to 25% under SARFAESI Act Section 18 third proviso.
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
                <span>EXECUTIVE BRIEF: SECTION 18 DRAT PRE-DEPOSIT WAIVER ESSENTIALS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory 50% Requirement:</strong> Under the second proviso to Section 18(1), borrowers appealing a DRT order must deposit 50% of the debt due before DRAT can hear the appeal.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Discretionary Reduction to 25%:</strong> Under the third proviso, DRAT has the legal power to reduce the pre-deposit to a minimum floor of 25% upon recording written reasons.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Complete Waiver Barred (0% Prohibited):</strong> The Supreme Court in Ambuj Kasliwal confirmed that neither DRAT nor High Courts under Article 226 can waive the pre-deposit below 25%.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Debt Recalibration Defense:</strong> In Sidha Neelkanth, the Supreme Court clarified debt due computation. Borrowers can audit bank statements to strip illegal penal charges and compounding fees.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Pre-Deposit is Refundable:</strong> In Axis Bank v. SBS Organics, the Supreme Court confirmed pre-deposit money is not secured bank asset. Funds remain refundable if the appeal succeeds.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Section 18 Mandate */}
            <section id="statutory-mandate" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactment &amp; Appellate Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Section 18 Mandate: The 50% Pre-Deposit Rule
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A borrower may lose a case before the DRT under Section 17. The next legal step is an appeal before the DRAT. Section 18 of the SARFAESI Act, 2002 governs this appeal right. It gives borrowers a formal way to challenge DRT orders.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Yet Section 18 sets a tough money rule. Under the second proviso to Section 18(1), the borrower must deposit 50% of the debt due. This sum is either claimed by the bank or fixed by the DRT, whichever is less.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This rule is a strict entry condition. The DRAT cannot hear the case on merits without this deposit. It cannot review bank errors or procedural flaws yet. If you miss the payment deadline, the DRAT must dismiss the appeal.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Parliament created this rule to stop delay tactics. It wanted to curb false cases aimed at stalling asset auctions. But honest borrowers face hard cash problems. You need skilled legal help to handle this rule.
              </p>
            </section>

            {/* SECTION 2: Waiver Limits: Discretionary Reduction to 25% */}
            <section id="waiver-limits" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Discretion &amp; Statutory Limits</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Waiver Limits: Discretionary Reduction to 25%
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The standard pre-deposit is 50%. But the third proviso to Section 18(1) gives key relief. The DRAT has the power to lower the deposit to 25%. This 25% floor is the lowest statutory level.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This relief is not automatic. The DRAT must write down its clear reasons for granting it. You must file a separate waiver plea alongside your main appeal. This plea asks for a cut to 25%.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You must prove true financial hardship to get this cut. Submit bank records, tax forms, and books of account. Show that business distress caused the default, not willful neglect.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The law bars any cut below 25%. The words "not less than twenty-five per cent" are final. The DRAT has no power to grant a 0% waiver. It cannot reduce the deposit to 10% or 15%.
              </p>
            </section>

            {/* SECTION 3: Pre-Deposit vs Appeal Rights Matrix */}
            <section id="comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Forum Comparison &amp; Financial Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Pre-Deposit vs Appeal Rights: Comparison Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers must compare each court forum in India. Each court has its own deposit rules and stay powers. Knowing these limits prevents costly mistakes and protects your property.
              </p>

              {/* Forum Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Judicial Forum</th>
                      <th className="p-3">Governing Provision</th>
                      <th className="p-3">Pre-Deposit Requirement</th>
                      <th className="p-3">Waiver Powers</th>
                      <th className="p-3">Stay Jurisdiction</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">DRAT (Appellate Tribunal)</td>
                      <td className="p-3">Section 18 SARFAESI Act</td>
                      <td className="p-3 text-rose-600 font-semibold">50% Baseline Mandatory</td>
                      <td className="p-3 text-amber-600 font-semibold">Can reduce to 25% minimum</td>
                      <td className="p-3 text-emerald-600 font-semibold">Full stay upon pre-deposit</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">DRT (Original Tribunal)</td>
                      <td className="p-3">Section 17 SARFAESI Act</td>
                      <td className="p-3 text-emerald-600 font-semibold">Zero Pre-Deposit (0%)</td>
                      <td className="p-3 text-slate-600">Not Applicable (No deposit)</td>
                      <td className="p-3 text-emerald-600 font-semibold">Can stay Section 13(4) sale</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">High Court (Writ Petition)</td>
                      <td className="p-3">Article 226 Constitution</td>
                      <td className="p-3 text-slate-600">No statutory pre-deposit</td>
                      <td className="p-3 text-rose-600">Cannot waive Section 18 mandate</td>
                      <td className="p-3 text-amber-600">Rare; only jurisdictional errors</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">DRAT (Recovery Appeal)</td>
                      <td className="p-3">Section 20 RDB Act, 1993</td>
                      <td className="p-3 text-rose-600 font-semibold">50% of debt determined</td>
                      <td className="p-3 text-amber-600 font-semibold">Can reduce to 25% minimum</td>
                      <td className="p-3 text-emerald-600 font-semibold">Stays recovery certificate</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Civil Court</td>
                      <td className="p-3">Code of Civil Procedure</td>
                      <td className="p-3 text-slate-500">Not Applicable</td>
                      <td className="p-3 text-rose-600 font-bold">Barred under Section 34</td>
                      <td className="p-3 text-rose-600">Zero jurisdiction on SARFAESI</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs mt-4">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Pre-Deposit Recalibration Math</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹2.50 Crore Gross Lender Claim</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Pre-Deposit Stage / Component</th>
                        <th className="p-3">Claim Calculation</th>
                        <th className="p-3">Deposit Rate (%)</th>
                        <th className="p-3 text-right">Payable Pre-Deposit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Statutory 50% Baseline (Uncontested)</td>
                        <td className="p-3">₹2,50,00,000</td>
                        <td className="p-3 text-rose-600 font-semibold">50% Statutory Rate</td>
                        <td className="p-3 text-right font-bold text-rose-700">₹1,25,00,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Section 18 Third Proviso Discretionary Waiver</td>
                        <td className="p-3">₹2,50,00,000</td>
                        <td className="p-3 text-amber-600 font-semibold">25% Minimum Floor</td>
                        <td className="p-3 text-right font-bold text-amber-700">₹62,50,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Ledger Recalibration (Deduct Penal Fees)</td>
                        <td className="p-3 text-emerald-700 font-semibold">₹1,90,00,000 (Adjusted Debt)</td>
                        <td className="p-3 text-blue-600 font-semibold">25% on True Debt</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹47,50,000</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Net Upfront Relief &amp; OTS Potential</td>
                        <td className="p-3 text-slate-900">₹60 Lakhs Ledger Inflations Stripped</td>
                        <td className="p-3 text-emerald-700">Deposit Burden Slashed by 62%</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹47.50 Lakhs (Secures Stay)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Supreme Court Landmark Rulings on Section 18 */}
            <section id="supreme-court-rulings" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Constitutional &amp; Appellate Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Supreme Court Landmark Rulings on Section 18
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court of India has settled the Section 18 pre-deposit rules. These landmark rulings guide every DRAT appeal in India today. Learn how they affect your rights.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Narayan Chandra Ghosh v. UCO Bank (2011)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court held that the deposit is mandatory. The DRAT cannot hear the appeal without it. If you fail to pay, the court will dismiss the case.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Kotak Mahindra Bank v. Ambuj Kasliwal (2021)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The court held that DRAT cannot waive the deposit below 25%. High Courts cannot bypass this limit under Article 226 or 227.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>Sidha Neelkanth Paper v. Prudent ARC (2023)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The court clarified debt sums. Challenging Section 13(4) means paying on the demand notice sum. Auction sums count only if you accept the sale.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Axis Bank v. SBS Organics (2016)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The court ruled that pre-deposit money is not bank property. The court registry keeps it safe. You get a full refund if your appeal wins.
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
                5. Visual Blueprint: DRAT Appeal Waiver Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart outlines the Section 18 DRAT process. See the 50% baseline. See the 25% waiver floor. Review debt audit steps and loan settlement paths.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/drat-appeal-pre-deposit-waiver-under-section-18-sarfaesi-act.jpg"
                    alt="DRAT Section 18 SARFAESI Appeal Pre-Deposit Waiver Blueprint"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Appellate Protocol • Section 18 SARFAESI Act Compliant</span>
                  <a
                    href="/images/infographics/drat-appeal-pre-deposit-waiver-under-section-18-sarfaesi-act.jpg"
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
                6. Step-by-Step SOP: Filing DRAT Waiver Petition
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The DRT may reject your plea or refuse a stay. You must then take fast legal steps. Follow this six-stage plan to guard your assets and lower your deposit costs.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Audit DRT Order &amp; Calculate 30-Day Limitation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Get a certified copy of the DRT order right away. You must file your appeal within thirty days. If you miss this date, file for condonation of delay under Section 5.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Draft Interlocutory Waiver Application (IA)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    File a waiver plea under the third proviso to Section 18(1). Attach bank proof to show cash hardship. Point out clear legal flaws in the bank recovery actions.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Audit &amp; Recalibrate Creditor Debt Ledger
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check your loan ledger for illegal penal interest. RBI rules ban compound penalty fees. Cutting these fees lowers the total debt sum and your 25% deposit.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Propose Staggered Deposit Compliance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ask DRAT to let you pay the 25% sum in two or three parts. Offer 10% right away. This good-faith step helps you secure an urgent stay on property takeover.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Secure Interim Stay on Auction &amp; Possession
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pay the first part into the court registry. Then ask the bench for an urgent stay. This stops Section 14 physical takeover and halts public e-auctions.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Initiate Dual-Track Compromise Settlement (OTS)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Use the stay order to negotiate with the bank. Enter formal compromise talks. Aim for a 40% to 65% debt waiver and secure a clean No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Debt Due Calculation Defense */}
            <section id="debt-calculation-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Accounting Forensics &amp; Legal Principles</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Debt Due Calculation: Sidha Neelkanth Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Calculating the exact debt due is a major issue in DRAT appeals. Banks often inflate their claims with added fees and penal rates. You have the right to dispute these sums.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court gave clear rules in the Sidha Neelkanth case (2023). The court noted that debt due means the bank claim or the DRT sum, whichever is less.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The DRT may fix a lower sum in its order. If so, your 25% deposit applies to that lower sum. This protects you from inflated bank demands.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                RBI rules ban banks from compounding penal interest on loans. You can ask the DRAT to remove these extra charges. This cuts the baseline debt and your deposit.
              </p>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix Table */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Appellate Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                SARFAESI appeals follow a set order of courts. Each judicial level has distinct powers. Knowing where to file helps you win timely relief.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Appellate Tier</th>
                      <th className="p-3">Judicial Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 1: DRAT Registry</td>
                      <td className="p-3">Registrar / Scrutiny Bench</td>
                      <td className="p-3 font-mono">3 to 7 Working Days</td>
                      <td className="p-3">Scrutiny of appeal memo, fee compliance, caveat verification, and urgent listing.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 2: DRAT Bench</td>
                      <td className="p-3">Chairperson / Presiding Officer</td>
                      <td className="p-3 font-mono">14 to 30 Working Days</td>
                      <td className="p-3">Adjudication of waiver application, reduction to 25%, and granting interim stay orders.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Tier 3: High Court</td>
                      <td className="p-3">Division Bench (Article 227)</td>
                      <td className="p-3 font-mono">30 to 45 Days</td>
                      <td className="p-3">Supervisory review limited to jurisdictional errors, denial of natural justice, or perverse orders.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline Table */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: DRT Order to DRAT Appeal
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this timeline from DRT order to DRAT hearing. Plan each legal step with care. Act early to stop property auction and keep your assets safe.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Milestone</th>
                      <th className="p-3">Procedural Stage</th>
                      <th className="p-3">Bank Action / Legal Event</th>
                      <th className="p-3">Borrower Defensive Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 10</td>
                      <td className="p-3 font-mono text-[11px]">DRT Pronouncement</td>
                      <td className="p-3">DRT dismisses Section 17 petition; bank prepares auction notice.</td>
                      <td className="p-3">File urgent application for certified copy of judgment.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 11 to 30</td>
                      <td className="p-3 font-mono text-[11px]">Limitation Period</td>
                      <td className="p-3">Bank serves 30-day sale notice or files Section 14 CMM application.</td>
                      <td className="p-3">Draft appeal memo and Section 18 waiver application.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 45</td>
                      <td className="p-3 font-mono text-[11px]">Admission Hearing</td>
                      <td className="p-3">Lender counsel demands full 50% pre-deposit compliance.</td>
                      <td className="p-3">Argue financial hardship to secure 25% waiver order.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 46 to 75</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Deposit Window</td>
                      <td className="p-3">Bank e-auction scheduled; lender presses for physical takeover.</td>
                      <td className="p-3">Deposit initial instalment to enforce ad-interim stay.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 76 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Appellate Review</td>
                      <td className="p-3">Bank forced to halt auction; asset locked in status quo.</td>
                      <td className="p-3 font-bold text-slate-900">Advance One-Time Settlement proposal with CredSettle.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 5 and Beyond</td>
                      <td className="p-3 font-mono text-[11px]">Final Resolution</td>
                      <td className="p-3">DRAT final adjudication or bank sanctions compromise OTS letter.</td>
                      <td className="p-3">Remit settlement sum, retrieve title deeds, and withdraw appeal.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Third Parties &amp; OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Appellate debt litigation frequently involves complex factual variations beyond standard corporate defaults. Here is how Section 18 applies across specialized circumstances.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Third-Party Mortgagors &amp; Tenants
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Genuine third parties and tenants holding valid pre-existing leases who are neither borrowers nor guarantors owe no personal debt to the bank. High Courts have recognized that imposing a rigid 50% pre-deposit on such strangers would render their right of appeal meaningless.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Auction Purchasers Challenging Cancellations
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a successful auction buyer appeals a DRT order that sets aside a SARFAESI sale, they do not carry borrower debt liability. Courts have held that auction purchasers are exempt from the pre-deposit requirement of Section 18.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Corporate Guarantors vs Principal Borrowers
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 2(1)(f) of the SARFAESI Act, the definition of borrower includes guarantors. Corporate and personal guarantors appealing a DRT order remain fully bound by the pre-deposit rule and must seek reduction under the third proviso.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    Stressed MSME Borrowers &amp; Dual-Track OTS
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Small enterprises facing SARFAESI actions can leverage DRAT appeal proceedings to secure valuable negotiating time. Depositing 25% into registry custody demonstrates capacity, opening the door for banks to approve compromise settlements.
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
                Frequently Asked Questions: DRAT Pre-Deposit Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Find clear answers to common questions on Section 18 pre-deposits. Learn waiver limits. Know key Supreme Court rulings and protect your borrower rights.
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
                Official Regulatory Citations &amp; Statutory Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>SARFAESI Act, 2002:</strong> Section 18, Appeal to Appellate Tribunal and Mandatory Pre-Deposit Provisos.
                </li>
                <li>
                  <strong>Recovery of Debts and Bankruptcy Act, 1993 (RDB Act):</strong> Section 20, Appellate Jurisdiction and Pre-Deposit Criteria.
                </li>
                <li>
                  <strong>Limitation Act, 1963:</strong> Section 5, Condonation of Delay in Preferring Statutory Appeals before Appellate Tribunals.
                </li>
                <li>
                  <strong>Reserve Bank of India Master Directions:</strong> Circular RBI/2023-24/53 on Fair Lending Practice and Fair Conduct.
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> Narayan Chandra Ghosh (2011), Kotak Mahindra v. Ambuj Kasliwal (2021), Sidha Neelkanth (2023), and Axis Bank v. SBS Organics (2016).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Judicial Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://drat.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Debts Recovery Appellate Tribunal Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://main.sci.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://services.ecourts.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>eCourts Services Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/sarfaesi-act-section-13-2-notice-stop-auction" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 13(2) Notice Defense
                  </Link>
                  <Link href="/sarfaesi-section-13-4-notice-30-day-auction-sale-challenge" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 13(4) Auction Challenge
                  </Link>
                  <Link href="/sarfaesi-section-14-physical-possession-order-dm-cmm" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 14 Physical Possession
                  </Link>
                  <Link href="/section-13-8-sarfaesi-act-right-of-mortgage-redemption-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 13(8) Mortgage Redemption
                  </Link>
                  <Link href="/services/business-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business Loan Settlement
                  </Link>
                  <Link href="/phoenix-arc-asset-reconstruction-company-debt-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    ARC Debt Settlement Guide
                  </Link>
                  <Link href="/willful-defaulter-notice-rbi-rules-legal-defense-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Willful Defaulter Notice Defense
                  </Link>
                  <Link href="/home-loan-default-sarfaesi-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Home Loan Default SARFAESI
                  </Link>
                  <Link href="/rbi-circular-on-loan-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI OTS Compromise Circular
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
                Specialist in SARFAESI Act defense, DRAT appeals, and loan settlement. He helps borrowers reduce pre-deposits and negotiate bank compromise deals.
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
                  CONFIDENTIAL LEGAL SHIELD
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Facing SARFAESI Auction or DRT Dismissal?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team files urgent DRAT appeals. We fight for 25% waiver relief. We secure auction stays and negotiate debt settlement for you.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Request Urgent DRAT Defense
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
                  <span>Statutory Protection • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Advantage</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Pre-Deposit Reduction:</strong> Maximizing the 25% waiver floor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Immediate Auction Stay:</strong> Preventing physical asset alienation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Forensic Ledger Audit:</strong> Stripping unauthorized compounding interest.</span>
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
                  href="/sarfaesi-section-13-4-notice-30-day-auction-sale-challenge"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 13(4) Auction Sale Challenge
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">30-day notice defense &rarr;</span>
                </Link>

                <Link
                  href="/section-13-8-sarfaesi-act-right-of-mortgage-redemption-rules"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 13(8) Mortgage Redemption Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Redemption cutoff law &rarr;</span>
                </Link>

                <Link
                  href="/sarfaesi-section-14-physical-possession-order-dm-cmm"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 14 Physical Possession Orders
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">DM &amp; CMM order defense &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
