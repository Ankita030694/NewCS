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
  Landmark
} from 'lucide-react';

export default function GuarantorDischargeClient() {
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
    { id: 'section-135-discharge-rule', label: '1. Section 135: Legal Discharge Rule' },
    { id: 'anatomy-loan-settlement', label: '2. Anatomy of Loan Settlement & Math' },
    { id: 'co-extensive-liability-matrix', label: '3. Co-Extensive Liability Matrix' },
    { id: 'contractual-waiver-clauses', label: '4. Bank Contractual Waiver Clauses' },
    { id: 'supreme-court-precedents', label: '5. Supreme Court Precedents & Rulings' },
    { id: 'ibc-vs-contract-act', label: '6. IBC Insolvency vs Contract Act' },
    { id: 'visual-blueprint', label: '7. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '8. 6-Stage Guarantor Shield Protocol' },
    { id: 'statutory-notice-defense', label: '9. Notice Defense & Recovery Challenges' },
    { id: 'escalation-matrix', label: '10. 3-Tier Grievance & Redressal Matrix' },
    { id: 'specialized-scenarios', label: '11. Specialized Scenarios & Heirs' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Does a One-Time Settlement (OTS) with the borrower discharge the guarantor?',
      a: 'Yes. Under Section 135 of the Indian Contract Act, 1872, a composition or settlement between creditor and principal debtor discharges the surety, unless the surety consented or the agreement preserved remedies against the guarantor.'
    },
    {
      q: 'What does Section 135 of the Indian Contract Act state?',
      a: 'Section 135 provides that any contract between creditor and principal debtor by which the creditor makes a composition, promises to give time, or promises not to sue the debtor, discharges the surety unless the surety assents.'
    },
    {
      q: 'Can a bank recover the remaining balance from the guarantor after settling with the borrower?',
      a: 'No, provided the loan settlement was executed as full and final satisfaction without reservation of rights. Under Section 128, surety liability is co-extensive. When the principal debt is extinguished, the guarantor cannot be pursued.'
    },
    {
      q: 'Do standard bank guarantee waiver clauses override Section 135 protection?',
      a: 'While banks insert clauses waiving consent for variations, full extinguishment of the underlying loan debt extinguishes the accessory guarantee. Banks cannot create fresh debt against a guarantor once the loan account is closed via compromise.'
    },
    {
      q: 'Does the Supreme Court ruling in Lalit Kumar Jain v. SBI apply to retail loan settlements?',
      a: 'No. Lalit Kumar Jain applies specifically to corporate insolvency under the IBC where discharge occurs involuntarily by statutory operation. In contrast, consensual retail bank OTS settlements are governed by voluntary contract rules under Section 135.'
    },
    {
      q: 'What happens to the guarantor property or collateral after the borrower settles?',
      a: 'Once the settlement terms are fulfilled and the loan is closed, the bank is legally obligated under Section 141 of the Contract Act and RBI Fair Lending Directions to release all title deeds and charge certificates within 30 days.'
    },
    {
      q: 'How is the guarantor CIBIL credit score affected after a loan settlement?',
      a: 'If the bank marks the account as Settled for the borrower, it must reflect the identical closure status for the guarantor. Banks cannot report the guarantor as a defaulter or written-off while treating the borrower debt as resolved.'
    },
    {
      q: 'Can recovery agents harass a loan guarantor after the principal borrower enters an OTS?',
      a: 'No. Continued recovery pressure against a guarantor after an agreed settlement violates the RBI Fair Practices Code and Section 351 of Bharatiya Nyaya Sanhita (BNS) 2023, entitling the guarantor to legal injunctions and damages.'
    },
    {
      q: 'What should a guarantor do if a bank sends a demand notice after borrower settlement?',
      a: 'The guarantor should immediately send a formal legal rebuttal citing Section 135, Section 134, and Section 128 of the Indian Contract Act, attaching the borrower OTS sanction letter and proof of payment, and escalate to the RBI Ombudsman.'
    },
    {
      q: 'How does CredSettle protect loan guarantors during bank settlement negotiations?',
      a: 'CredSettle ensures that loan settlement agreements explicitly discharge both the principal borrower and guarantors, demands simultaneous release of all guarantor collaterals, and secures a unified No Dues Certificate.'
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
            <span>Indian Contract Act 1872 &amp; Commercial Surety Law</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Guarantor Discharge After Loan Settlement: Section 135 Rights
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            An in-depth legal analysis of Section 135 of the Indian Contract Act, 1872. Discover how a bank compromise settlement or OTS with the principal borrower discharges personal guarantors, safeguards collateral, and stops recovery actions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your Guarantor Rights</span>
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
                  <span>Statutory Surety Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Section 135, Section 134, and Section 128 of the Indian Contract Act, 1872.
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
                <span>EXECUTIVE BRIEF: GUARANTOR DISCHARGE UNDER SECTION 135 CONTRACT ACT</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">The Core Mandate of Section 135:</strong> Any contract between a creditor bank and the principal borrower to make a composition, give time, or not to sue discharges the personal guarantor, unless the guarantor assents.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Accessory Nature of Guarantee:</strong> Under Section 128, a surety liability is co-extensive with the borrower. When the primary debt is extinguished through an OTS compromise, the guarantee cannot survive independently.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Shortfall Recovery Against Surety:</strong> If a bank accepts a settlement from the borrower as full satisfaction without an express reservation of rights, it cannot initiate separate recovery against the guarantor for the waived balance.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Distinction from IBC Insolvency:</strong> The Supreme Court ruling in Lalit Kumar Jain applies strictly to statutory insolvency under the IBC. Voluntary retail loan compromise settlements remain fully governed by Contract Act protections.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Immediate Collateral Release:</strong> Under Section 141 and RBI directions, once the agreed settlement sum is remitted, the lender must return all mortgaged title deeds and discharge guarantees within 30 days.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Section 135 Contract Act: The Legal Discharge Rule */}
            <section id="section-135-discharge-rule" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Parliament Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Section 135 Contract Act: The Legal Discharge Rule
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on a commercial credit facility, term loan, or unsecured personal loan, banks frequently demand payment from the personal guarantor. However, if the borrower subsequently enters into a One-Time Settlement (OTS) or compromise arrangement with the lender, a pivotal legal question arises: Does that loan settlement automatically discharge the guarantor?
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The statutory foundation for answering this question lies in Section 135 of the Indian Contract Act, 1872. This provision codifies an essential equitable safeguard designed to prevent creditors from secretly altering repayment obligations or compromising claims behind the surety back.
              </p>
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-slate-800 text-xs sm:text-sm leading-relaxed">
                <strong>Statutory Text of Section 135, Indian Contract Act, 1872:</strong>
                <p className="mt-1 italic text-slate-700">
                  &ldquo;A contract between the creditor and the principal debtor, by which the creditor makes a composition with, or promises to give time to, or not to sue, the principal debtor, discharges the surety, unless the surety assents to such contract.&rdquo;
                </p>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 135, three distinct factual scenarios trigger the statutory discharge of a personal guarantor:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Making a Composition (Compromise Settlement / OTS):</strong> When the lender enters into a settlement agreement accepting a reduced amount in satisfaction of the total loan ledger, this constitutes a composition that discharges the surety.
                </li>
                <li>
                  <strong>Promise to Give Time (Extension / Loan Restructuring):</strong> When the lender grants an extended repayment window, moratorium, or revised tenure to the borrower without the guarantor express concurrence.
                </li>
                <li>
                  <strong>Promise Not to Sue (Covenant Not to Sue):</strong> When the creditor bank executes a formal covenant undertaking not to initiate litigation or recovery enforcement against the principal borrower.
                </li>
              </ul>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The legislative intent is crystal clear: a contract of guarantee is predicated on specific risk parameters. If the creditor unilaterally varies those parameters or settles with the debtor, the guarantor cannot be left exposed to arbitrary residual claims.
              </p>
            </section>

            {/* SECTION 2: Anatomy of Loan Settlement: Principal Debtor vs Surety */}
            <section id="anatomy-loan-settlement" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics &amp; Settlement Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Anatomy of Loan Settlement: Principal Debtor vs Surety
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In practical debt resolution across Indian public and private sector banks, a One-Time Settlement (OTS) involves negotiating a substantial waiver of penal interest, compounded charges, and unapplied ledger costs. For instance, in an overdue credit facility of ₹25 Lakhs, a bank credit committee might approve an OTS of ₹10 Lakhs as full and final closure.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Trouble begins when recovery departments attempt a dual recovery strategy. After pocketing the ₹10 Lakh settlement amount from the borrower, collection officers sometimes dispatch demand notices to the personal guarantor claiming the remaining ₹15 Lakh &ldquo;shortfall.&rdquo; Legally, this maneuver is fundamentally flawed under Indian contract jurisprudence.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A contract of guarantee is strictly an accessory obligation. The guarantor does not owe a separate, primary debt to the bank; they merely guarantee performance of the principal debtor obligation. When the principal debt is compromised and extinguished by mutual agreement, the accessory liability has no legal foundation upon which to stand.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Forensic Audit: Settlement Impact on Guarantor Liability</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹25 Lakh Disputed Loan Ledger</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Financial Parameter / Claim Head</th>
                        <th className="p-3">Pre-Settlement Ledger</th>
                        <th className="p-3">Post-OTS Resolution Status</th>
                        <th className="p-3 text-right">Guarantor Liability Position</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Principal Outstanding Amount</td>
                        <td className="p-3">₹16,50,000</td>
                        <td className="p-3 text-blue-600 font-semibold">Compromised via OTS Remittance</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹0 (Discharged under Sec 135)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Accrued Regular &amp; Penal Interest</td>
                        <td className="p-3">₹8,50,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Waived by Bank Sanction</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹0 (Extinguished Debt)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Agreed Full &amp; Final OTS Sum</td>
                        <td className="p-3 text-slate-900 font-bold">₹10,00,000</td>
                        <td className="p-3 text-emerald-700 font-semibold">Paid in Full by Principal Debtor</td>
                        <td className="p-3 text-right font-bold text-slate-900">Fully Satisfied Account</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Shortfall Balance Claimed by Bank</td>
                        <td className="p-3 text-rose-600 font-bold">₹15,00,000 Claimed</td>
                        <td className="p-3 text-emerald-700">Unenforceable Under Sec 128 &amp; 135</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">100% Released from Guarantee</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Co-Extensive Liability Matrix: Section 128 vs Section 135 */}
            <section id="co-extensive-liability-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Interplay &amp; Contractual Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Co-Extensive Liability Matrix: Section 128 vs Section 135
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Bank recovery officers routinely quote Section 128 of the Indian Contract Act to intimidate guarantors, arguing that because the surety liability is &ldquo;co-extensive&rdquo; with that of the borrower, the bank has the absolute right to recover money from either party at its sole whim.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                While it is true that under Section 128 the lender can sue the guarantor without first exhausting remedies against the borrower, this co-extensive principle works both ways. The guarantor liability is co-extensive with the borrower liability; it is never larger than the debtor obligation. When the debtor obligation is reduced to zero by a valid settlement, the co-extensive liability of the guarantor also collapses to zero.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Section of Contract Act</th>
                      <th className="p-3">Core Legal Principle</th>
                      <th className="p-3">Impact on Loan Guarantor</th>
                      <th className="p-3">CredSettle Defense Application</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Section 128</td>
                      <td className="p-3">Co-extensive liability of surety</td>
                      <td className="p-3 text-slate-700">Surety liable to same extent as debtor</td>
                      <td className="p-3">Extinguishment of primary debt wipes out surety liability.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Section 133</td>
                      <td className="p-3">Discharge by variance in contract</td>
                      <td className="p-3 text-emerald-600 font-semibold">Automatic discharge of surety</td>
                      <td className="p-3">Unilateral tenure or rate changes release guarantor.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Section 134</td>
                      <td className="p-3">Discharge by release of principal debtor</td>
                      <td className="p-3 text-emerald-600 font-semibold">Surety is discharged completely</td>
                      <td className="p-3">Issuing No Dues Certificate to borrower releases surety.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Section 135</td>
                      <td className="p-3">Discharge by composition or giving time</td>
                      <td className="p-3 text-emerald-600 font-semibold">Full statutory immunity</td>
                      <td className="p-3">OTS compromise without surety assent discharges guarantee.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Section 139</td>
                      <td className="p-3">Impairment of surety eventual remedy</td>
                      <td className="p-3 text-rose-600 font-semibold">Discharge of surety</td>
                      <td className="p-3">Settling with borrower impairs surety subrogation rights.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Section 140 &amp; 141</td>
                      <td className="p-3">Subrogation rights and benefit of securities</td>
                      <td className="p-3 text-indigo-600 font-semibold">Immediate right to retrieve securities</td>
                      <td className="p-3">Bank must return guarantor title deeds and collaterals.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Contractual Waiver Clauses: Can Banks Override Section 135? */}
            <section id="contractual-waiver-clauses" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Deed of Guarantee Analysis &amp; Waiver Limits</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Contractual Waiver Clauses: Can Banks Override Section 135?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When challenged with Section 135, legal departments of banks point to their standard, pre-printed deed of personal guarantee forms. These agreements routinely contain expansive boilerplate clauses where the guarantor purportedly waives all statutory protections under Chapter VIII of the Indian Contract Act.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Typical bank guarantee language stipulates that &ldquo;the bank shall be entitled to grant time, compound, abandon, release, or compromise any claim with the borrower without reference to or consent from the guarantor, and such acts shall not release or impair the guarantor liability.&rdquo;
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Can such boilerplate clauses legally defeat a guarantor defense when a loan has been settled? Indian judicial scrutiny establishes a clear boundary between procedural variations and complete debt extinguishment:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1886ff]" />
                    Scope of Valid Prior Assent
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Courts have recognized that prior general consent in the guarantee agreement can permit ordinary tenure extensions or rescheduling of installments without discharging the guarantor.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    Voidness Against Total Debt Extinction
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    No boilerplate clause can resurrect liability for a debt that has been legally satisfied and extinguished. Once the bank accepts a settlement in full satisfaction, there is no subsisting debt to guarantee.
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the compromise settlement agreement between bank and borrower does not expressly reserve the bank right to proceed against the guarantor, or if the borrower receives an absolute release, the bank cannot selectively enforce the guarantee against the surety for the waived ledger portion.
              </p>
            </section>

            {/* SECTION 5: Supreme Court Precedents on Guarantor Discharge in India */}
            <section id="supreme-court-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Jurisprudence &amp; Apex Rulings</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Supreme Court Precedents on Guarantor Discharge in India
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Over decades of commercial adjudication, the Supreme Court of India and prominent High Courts have delineated the protective boundaries shielding guarantors from unfair creditor conduct.
              </p>

              <div className="space-y-3 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">State of Madhya Pradesh v. Kaluram (1967) 1 SCR 266</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 text-[#1886ff] font-bold">Apex Benchmark</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court held that the expression &ldquo;security&rdquo; in Section 141 encompasses all rights that the creditor had against the property of the principal debtor. If the creditor impairs these securities or remedies, the surety is discharged to the extent of the impairment under Section 139.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Amrit Lal Goverdhan Lalan v. State Bank of Travancore (1968) 3 SCR 722</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 text-[#1886ff] font-bold">Subrogation Rights</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court reaffirmed that the surety is entitled to every remedy that the creditor had against the principal debtor upon payment. When a creditor privately settles and releases the debtor, the surety right of indemnity under Section 145 is crippled, working an automatic discharge under Section 135.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Central Bank of India v. C.L. Vimla (2015) 7 SCC 337</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 text-[#1886ff] font-bold">Consent Boundaries</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Apex Court examined the validity of consent clauses in guarantee agreements, establishing that while parties may contract out of certain provisions, such waivers cannot be stretched to validate fraudulent or unilateral extinguishment of surety core rights.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: IBC Insolvency vs Contract Act: Corporate vs Personal Loans */}
            <section id="ibc-vs-contract-act" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Distinctions: IBC vs Contract Act</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. IBC Insolvency vs Contract Act: Corporate vs Personal Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A frequent source of confusion among borrowers and bank legal managers stems from the landmark Supreme Court ruling in <em>Lalit Kumar Jain v. Union of India (2021) 9 SCC 321</em>. In that case, the Supreme Court held that the approval of a resolution plan for a corporate debtor under the Insolvency and Bankruptcy Code, 2016 (IBC) does not automatically discharge personal guarantors.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Bank recovery representatives frequently misquote this ruling to argue that even in ordinary retail or MSME loan settlements, personal guarantors can never be discharged. This argument collapses upon rigorous legal examination:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[580px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Legal Attribute</th>
                      <th className="p-3">IBC Resolution Plan (Lalit Kumar Jain)</th>
                      <th className="p-3">Retail / MSME Loan OTS (Section 135)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Nature of Discharge</td>
                      <td className="p-3 text-amber-600 font-semibold">Involuntary statutory discharge by law</td>
                      <td className="p-3 text-emerald-600 font-semibold">Voluntary consensual contract between parties</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Governing Statute</td>
                      <td className="p-3">Section 31 of Insolvency &amp; Bankruptcy Code</td>
                      <td className="p-3">Section 135 &amp; 134 of Indian Contract Act, 1872</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Creditor Assent</td>
                      <td className="p-3">Binding on dissenting creditors via NCLT order</td>
                      <td className="p-3">Direct mutual agreement between bank and borrower</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Guarantor Liability</td>
                      <td className="p-3 text-rose-600 font-semibold">Personal guarantor remains liable under IBC</td>
                      <td className="p-3 text-emerald-600 font-semibold">Guarantor discharged unless expressly consenting</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In retail banking, personal loans, business overdrafts, and vehicle loans settled through mutual OTS compromises outside the NCLT, the rules of Section 135 and Section 128 of the Contract Act apply in full force.
              </p>
            </section>

            {/* SECTION 7: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Visual Blueprint: Guarantor Discharge &amp; Settlement Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive visual roadmap illustrates how a loan settlement between bank and borrower legally triggers the discharge of surety liability, protecting guarantor personal assets and collateral.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/does-loan-settlement-discharge-guarantor-section-135-contract-act.jpg"
                    alt="Guarantor Discharge Under Section 135 Indian Contract Act Law"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Surety Defense Framework • Section 135 Contract Act Compliant</span>
                  <a
                    href="/images/infographics/does-loan-settlement-discharge-guarantor-section-135-contract-act.jpg"
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

            {/* SECTION 8: Step-by-Step SOP: Guarantor Legal Protection Protocol */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Step-by-Step SOP: Guarantor Legal Protection Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you are a personal guarantor on a stressed loan or the primary borrower is negotiating an OTS, executing this 6-stage legal protocol guarantees total discharge and prevents post-settlement harassment.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Demand Direct Participation in OTS Negotiations
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never permit the primary borrower to negotiate an OTS in isolation. Insist on being formally included in all correspondence with the bank credit committee to prevent unfavorable terms.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Audit OTS Sanction Letter for Unified Release Clauses
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Scrutinize the draft settlement sanction letter. Verify that it explicitly states: &ldquo;Payment of the settlement amount constitutes full and final satisfaction of all claims against both Borrower and Personal Guarantor(s).&rdquo;
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Prevent Reservation of Rights Against the Surety
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Reject any bank OTS sanction that includes clauses attempting to &ldquo;reserve the right to recover the balance shortfall from the guarantor.&rdquo; Demand complete debt extinguishment under Section 134.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Remit Agreed Settlement Sum Through Formal Banking Channels
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ensure payment of the agreed compromise sum is made strictly via RTGS or demand draft referencing the specific OTS sanction letter number directly into the designated loan account.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Secure Unified No Dues Certificate &amp; Collateral Return
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Within 30 days of remittance, obtain an official No Dues Certificate naming both borrower and guarantor. Demand the unconditional release of all pledged title deeds under Section 141.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Monitor Credit Bureau Status Across CIBIL &amp; Experian
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Verify that your credit bureau records are updated to &ldquo;Settled&rdquo; or &ldquo;Closed.&rdquo; If derogatory default remarks linger, file an immediate correction petition under RBI CIC guidelines.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Statutory Notice Defense: Challenging Illegal Bank Recovery */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Defenses &amp; Guarantor Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Statutory Notice Defense: Challenging Illegal Bank Recovery
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a lender or collection agency attempts to initiate recovery proceedings against you as a guarantor after an OTS or secret restructuring with the borrower, you possess potent statutory and judicial shields.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Defense in Debt Recovery Tribunal (DRT)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In applications under Section 19 of the RDB Act, file a written statement invoking Section 135. The compromise agreement between bank and borrower serves as conclusive evidence of surety discharge.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Quashing SARFAESI Section 13(2) Notices</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank issues a 60-day demand notice against mortgaged guarantor property after settling the principal loan, submit a detailed objection under Section 13(3A) proving debt extinguishment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Section 138 Cheque Bounce Immunity</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Security cheques furnished by a guarantor become unenforceable upon settlement of the primary debt, as no legally enforceable debt remains under the Negotiable Instruments Act.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Section 351 BNS Harassment Defense</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Threats of property attachment or defamation by collection agents against a discharged guarantor constitute criminal intimidation under Section 351 of Bharatiya Nyaya Sanhita, 2023.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10: 3-Tier Grievance Matrix: Escalation & Ombudsman Redressal */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. 3-Tier Grievance Matrix: Escalation &amp; Ombudsman Redressal
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When branch managers refuse to release guarantor collateral or persist with unlawful collection demands post-settlement, escalate through the Reserve Bank of India institutional redressal machinery.
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
                      <td className="p-3">Records dispute, reviews settlement sanction letter, and halts unauthorized recovery calls.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Audits ledger entries, enforces Section 135 compliance, and orders release of guarantor deeds.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Passes binding awards under cms.rbi.org.in, penalizing lenders and awarding compensation for delayed title release.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Specialized Scenarios: OTS, Multiple Sureties & Heirs */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Legal Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                11. Specialized Scenarios: OTS, Multiple Sureties &amp; Heirs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Guarantee disputes frequently intersect with unique contractual dynamics. Here is how Section 135 and allied legal provisions operate across complex scenarios.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Multiple Co-Sureties (Section 138 Interplay)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 138, the release of one co-surety by the creditor does not discharge others. However, if the bank compounds the principal debt with the primary borrower under Section 135, all co-sureties are discharged together.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Death of Principal Debtor &amp; Legal Heirs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a primary borrower passes away, legal heirs are liable only to the extent of inherited estate value. If the bank settles with heirs for the estate proceeds, the guarantor obligation is discharged simultaneously.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Release of Mortgaged Collateral Under Section 141
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 141, if the creditor bank parts with or releases the borrower collateral without the surety consent, the surety is discharged to the value of that security.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    CIBIL Discrepancy &amp; Defaulter Rectification
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Credit bureaus must reflect the identical closure status for both borrower and guarantor. CredSettle ensures that banks update the guarantor bureau record from &ldquo;Written-Off&rdquo; to &ldquo;Settled.&rdquo;
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 12: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 13: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Guarantor Discharge &amp; Section 135
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding loan settlement impact on personal guarantors, Section 135 defenses, collateral release, and creditor recovery limits.
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

            {/* SECTION 14: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Statutory Citations, Indian Contract Act &amp; Legal Authorities
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 135, Discharge of Surety When Creditor Makes Composition with, or Promises to Give Time to, Principal Debtor.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 128, Co-Extensive Liability of Surety with Principal Debtor.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 133 &amp; 134, Discharge of Surety by Variance in Terms and by Release or Discharge of Debtor.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 139, 140 &amp; 141, Impairment of Surety Remedy, Right of Subrogation, and Benefit of Securities.
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> State of MP v. Kaluram (1967), Amrit Lal Goverdhan Lalan v. State Bank of Travancore (1968), and Central Bank of India v. C.L. Vimla (2015).
                </li>
              </ul>

              {/* Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://main.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://drt.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Debts Recovery Tribunal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Banker Right of Set-Off Section 171
                  </Link>
                  <Link href="/joint-home-loan-default-rights-of-non-defaulting-co-borrower" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Joint Loan Co-Borrower Rights
                  </Link>
                  <Link href="/sole-proprietorship-loan-default-personal-liability-asset-risks" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Sole Proprietor Liability Risks
                  </Link>
                  <Link href="/can-bank-freeze-joint-savings-account-co-holder-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Joint Account Freeze Rules
                  </Link>
                  <Link href="/can-bank-seize-demat-account-shares-mutual-funds-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Demat &amp; Shares Seizure Rules
                  </Link>
                  <Link href="/section-60-cpc-assets-property-exempt-from-bank-attachment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 60 CPC Exempt Assets
                  </Link>
                  <Link href="/can-bank-send-you-to-civil-prison-for-loan-default-order-21-rule-37-cpc" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Civil Prison Order 21 CPC
                  </Link>
                  <Link href="/police-summons-for-loan-default-rights-against-illegal-interference" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Police Summons Protection
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF &amp; Gratuity Seizure Immunity
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/cgtmse-loan-default-borrower-liability-ots-settlement-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    CGTMSE Loan Default Rules
                  </Link>
                  <Link href="/rbi-circular-on-loan-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI OTS Master Circular
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
                Specialist in banking compliance, guarantee deed defense, Contract Act provisions, and commercial debt compromise settlements with extensive experience defending personal guarantors against unlawful creditor enforcement.
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
                  GUARANTOR LEGAL SHIELD
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Demanding Loan Dues from You as Guarantor?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior legal resolution team invokes Section 135 and Section 128 protections, challenges unlawful demand notices, protects your collateral property, and secures complete release from surety obligations.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Guarantor Rights
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
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 135 Defense:</strong> Full surety discharge enforcement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Collateral Retrieval:</strong> Recovery of mortgaged property deeds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Redressal:</strong> Direct escalation against unfair demands.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Bureau Clean-Up:</strong> Restoration of credit standing.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Banker Right of Set-Off Section 171
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Contract Act set-off rules &rarr;</span>
                </Link>

                <Link
                  href="/joint-home-loan-default-rights-of-non-defaulting-co-borrower"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Joint Home Loan Default Rights
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Co-borrower legal protection &rarr;</span>
                </Link>

                <Link
                  href="/can-bank-seize-epf-provident-fund-for-loan-recovery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank Seize EPF &amp; Gratuity?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Statutory retirement defense &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
