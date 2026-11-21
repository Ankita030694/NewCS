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
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Gavel,
  Landmark,
  Calendar
} from 'lucide-react';

export default function UpiCreditLineSettlementClient() {
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
    { id: 'rbi-framework', label: '1. RBI Framework: Credit Line on UPI' },
    { id: 'clif-vs-clib', label: '2. How UPI Credit Lines Work (CLIF vs CLIB)' },
    { id: 'penal-charges', label: '3. Penal Charges & Fee Rules' },
    { id: 'npa-cibil-impact', label: '4. Default, NPA & CIBIL Impact' },
    { id: 'settlement-rules', label: '5. RBI Compromise Settlement Rules' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Settlement SOP' },
    { id: 'borrower-rights', label: '7. Borrower Rights & Protections' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Default to Settlement Timeline' },
    { id: 'specialized-scenarios', label: '10. Common Mistakes & Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is a pre-sanctioned credit line on UPI under RBI rules?',
      a: 'Under RBI circular RBI/2023-24/58 dated September 4, 2023, scheduled commercial banks and later small finance banks can link pre-approved credit lines to UPI. Customers can scan and pay merchants using this credit limit instead of a savings account.'
    },
    {
      q: 'Can a bank activate a UPI credit line without my permission?',
      a: 'No. RBI rules require prior explicit consent from the customer before linking or activating a pre-sanctioned credit line on UPI. If a bank activates one without consent, you can dispute it and escalate to the RBI Ombudsman.'
    },
    {
      q: 'Can I settle a defaulted pre-sanctioned credit line on UPI through OTS?',
      a: 'Yes. Once your account crosses 90 days past due and becomes a Non-Performing Asset (NPA), you can request a One-Time Settlement (OTS) under the RBI Compromise Settlement framework circular DOR.STR.REC.20 dated June 8, 2023.'
    },
    {
      q: 'Can banks charge compound interest on late payment penalties for UPI credit lines?',
      a: 'No. Under RBI circular DoR.MCS.REC.28 on Penal Charges in Loan Accounts, banks cannot capitalize penal charges. They cannot add penal charges to the principal or charge compound interest on penalty amounts.'
    },
    {
      q: 'Does defaulting on a UPI credit line block my regular savings account UPI?',
      a: 'Defaulting blocks the credit line itself and harms your credit score. However, your regular savings account UPI works normally unless the bank exercises a contractual right of set-off or places a debit freeze for overdue dues.'
    },
    {
      q: 'What is the difference between CLIF and CLIB credit lines on UPI?',
      a: 'In the Credit Line Interest-Free (CLIF) model, you get an interest-free billing period if you pay the full bill by the due date. In the Credit Line Interest-Bearing (CLIB) model, interest starts accruing from the date of each UPI transaction.'
    },
    {
      q: 'How does settling a UPI credit line affect my CIBIL score?',
      a: 'A compromise settlement is reported as Settled rather than Closed to credit bureaus like CIBIL. This lowers your score temporarily, and RBI rules require a minimum 12-month cooling period before the same bank can offer fresh credit.'
    },
    {
      q: 'How quickly must a bank update CIBIL after I pay the UPI credit line settlement?',
      a: 'Under RBI fortnightly credit reporting rules, banks must report account status updates to credit bureaus every 15 days. Your settlement status should reflect on your credit report within two to four weeks of final payment.'
    },
    {
      q: 'Can recovery agents harass me or call my family for a UPI credit line default?',
      a: 'No. RBI Fair Practices rules strictly forbid recovery agents from calling before 8:00 AM or after 7:00 PM, using abusive language, or contacting your relatives and colleagues. You can complain to the Bank GRO and RBI Ombudsman.'
    },
    {
      q: 'How does CredSettle help resolve a defaulted UPI credit line?',
      a: 'CredSettle audits your bank statement to remove unlawful compounded penal charges, stops recovery harassment with formal legal representation, negotiates a written OTS waiver, and ensures you receive an official No Dues Certificate.'
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
            <span>RBI Circular DOR.CRE.REC.37 &amp; Compromise Settlement Rules</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How to Settle Bank Pre-Sanctioned Credit Lines on UPI
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Falling behind on a bank pre-sanctioned credit line linked to UPI? Understand RBI rules on consent, penal charges, NPA classification, and how to negotiate a legal One-Time Settlement without harassment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Free UPI Credit Line Help</span>
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
                  <span>RBI Digital Credit Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Circulars RBI/2023-24/58, DoR.MCS.REC.28, and DOR.STR.REC.20.
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
                <span>EXECUTIVE BRIEF: UPI CREDIT LINE DEFAULT &amp; SETTLEMENT</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Explicit Consent Mandatory:</strong> Under RBI rules, banks can link a pre-sanctioned credit line to UPI only with your prior explicit consent.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Compounding on Penal Charges:</strong> Under RBI Circular DoR.MCS.REC.28, lenders cannot capitalize penal charges or charge interest on late fees.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Eligible for One-Time Settlement:</strong> Once the account crosses 90 days past due (NPA), you can seek a compromise settlement under RBI Circular DOR.STR.REC.20.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Savings UPI Stays Separate:</strong> Defaulting on a UPI credit line blocks the credit limit, not your normal savings UPI, unless the bank enforces a set-off lien.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Written OTS &amp; NDC Required:</strong> Never pay a settlement amount without an official bank sanction letter, and collect a No Dues Certificate (NDC) after payment.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1 */}
            <section id="rbi-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Central Bank Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Framework: Pre-Sanctioned Credit Line on UPI
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On September 4, 2023, the Reserve Bank of India (RBI) issued Circular RBI/2023-24/58 (DOR.CRE.REC.37/21.04.172/2023-24). This rule allowed Scheduled Commercial Banks to link pre-sanctioned credit lines to the Unified Payments Interface (UPI). Later, the RBI expanded this facility to Small Finance Banks as well.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before this rule, UPI only supported savings accounts, current accounts, overdraft accounts, prepaid wallets, and RuPay credit cards. Now, banks can offer a pre-approved digital credit limit directly inside any UPI app. You can scan a merchant QR code and pay using this credit line instead of your bank balance.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI circular places strict duties on issuing banks. First, a bank can link and activate a credit line on UPI only with your prior explicit consent. Second, the bank must follow a Board-approved policy that clearly states the credit limit, billing cycle, interest rate, and default charges.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Because a UPI credit line is a formal bank loan facility, any default is governed by RBI prudential norms. This means standard Non-Performing Asset (NPA) rules, Fair Practices Codes, and Compromise Settlement guidelines apply to it just like a personal loan or overdraft.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="clif-vs-clib" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>NPCI Operational Models &amp; Billing Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. How UPI Credit Lines Work: CLIF vs CLIB Models
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The National Payments Corporation of India (NPCI) groups bank credit lines on UPI into two main models. Knowing which model you signed up for helps you check if your bank overcharged you during a default.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Comparison: CLIF vs CLIB UPI Credit Line Models</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">NPCI UPI Architecture</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Feature</th>
                        <th className="p-3">CLIF (Interest-Free Credit Line)</th>
                        <th className="p-3">CLIB (Interest-Bearing Credit Line)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Interest Start Date</td>
                        <td className="p-3">Interest-free grace period until the monthly due date if paid in full.</td>
                        <td className="p-3">Interest accrues daily from the exact date of each UPI payment.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Repayment Structure</td>
                        <td className="p-3">Monthly statement cycle similar to a credit card bill.</td>
                        <td className="p-3">Revolving overdraft or fixed EMI schedule per bank MITC.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">On Missed Due Date</td>
                        <td className="p-3">Interest applies retroactively or on unpaid balance plus penal fee.</td>
                        <td className="p-3">Daily interest continues on unpaid principal plus separate penal charge.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Default Settlement</td>
                        <td className="p-3 font-semibold text-[#1886ff]">Eligible for OTS after 90 days NPA.</td>
                        <td className="p-3 font-semibold text-[#1886ff]">Eligible for OTS after 90 days NPA.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Each issuing bank must disclose these terms in the Most Important Terms and Conditions (MITC) and Key Facts Statement (KFS) before you link the line. If your bank switched your terms or hid the interest-bearing rule, you have strong grounds to dispute the excess interest.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="penal-charges" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Fair Lending Practice &amp; Fee Caps</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Penal Charges &amp; Fee Rules Under RBI Fair Lending
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When borrowers miss a UPI credit line payment, the balance often grows fast due to late fees. To stop lenders from turning penalties into a profit center, the RBI issued Circular RBI/2023-24/53 (DoR.MCS.REC.28/01.01.001/2023-24) on August 18, 2023.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This rule took full effect in 2024 for all new and renewed credit facilities. It sets four strict protections for borrowers who default on a bank credit line:
              </p>
              <ul className="space-y-2 text-sm md:text-base text-slate-700 list-disc pl-5 leading-relaxed">
                <li>
                  <strong className="text-slate-900">No Penal Interest:</strong> Banks cannot add a penalty percentage on top of your base interest rate. Any default penalty must be charged separately as a flat or structured penal charge.
                </li>
                <li>
                  <strong className="text-slate-900">Strict Ban on Capitalization:</strong> Lenders cannot add unpaid penal charges to your principal balance. They cannot charge compound interest on penal charges.
                </li>
                <li>
                  <strong className="text-slate-900">No Revenue Enhancement:</strong> The RBI states that penal charges exist only to promote credit discipline. Banks cannot use them to inflate their revenue.
                </li>
                <li>
                  <strong className="text-slate-900">Clear Disclosure:</strong> The exact fee and trigger must appear in your Key Facts Statement (KFS), sanction letter, and default reminder messages.
                </li>
              </ul>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before you agree to any settlement figure, audit your statement. If the bank compounded interest on late fees, you can demand a full reversal of those unlawful charges.
              </p>
            </section>

            {/* SECTION 4 */}
            <section id="npa-cibil-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Reporting &amp; Account Status</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. UPI Credit Line Default: NPA &amp; CIBIL Impact
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers ask whether defaulting on a UPI credit line stops them from using UPI altogether. In most cases, your regular savings account UPI continues to work for normal transfers. Only the credit line funding source is frozen or blocked.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, there is one major risk if your savings account is with the same bank. Under banking contracts, banks often hold a Right of Set-Off. If your credit line stays overdue, the bank may mark a lien on your savings balance or auto-debit funds to recover the unpaid dues.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On your credit report, banks report UPI credit line usage to CIBIL, Experian, Equifax, and CRIF High Mark. Under RBI fortnightly reporting rules, lenders update credit bureaus every 15 days. Missing even one payment lowers your score, and crossing 90 days past due classifies the account as a Non-Performing Asset (NPA).
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="settlement-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Compromise Settlement Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Compromise Settlement Rules: RBI June 2023 Circular
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you face genuine financial hardship, such as a job loss, medical crisis, or business downturn, you can settle your defaulted UPI credit line legally. On June 8, 2023, the RBI issued Circular RBI/2023-24/40 (DOR.STR.REC.20/21.04.048/2023-24) on Compromise Settlements and Technical Write-offs.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This framework applies to all commercial banks and small finance banks offering UPI credit lines. Under a Compromise Settlement, also known as a One-Time Settlement (OTS), the bank agrees to accept a reduced lump-sum or short-installment payment to close the debt fully.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The bank waives accumulated penal charges, late fees, and part of the interest or principal based on its Board-approved policy. After a compromise settlement, RBI rules impose a minimum 12-month cooling period before that bank can sanction fresh credit to you.
              </p>
            </section>

            {/* SECTION 6: Step-by-Step SOP */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Settling a UPI Credit Line
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six practical steps to resolve a defaulted pre-sanctioned credit line on UPI safely and legally.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Audit Principal vs Penal Charges in Your Statement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your full UPI credit line ledger and Key Facts Statement (KFS). Separate the actual principal drawn from interest, late fees, and any compounded penal charges.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Protect Your Savings Balance and Stop Harassment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Avoid keeping emergency funds in the same bank where your credit line is overdue to prevent sudden set-off debits. Record any abusive recovery calls and send a written notice if agents break RBI rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Submit a Written Hardship &amp; OTS Request
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email the bank recovery cell or grievance desk with proof of financial hardship, such as termination letters or medical bills. Propose a realistic lump-sum One-Time Settlement based on your principal balance.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Demand Waiver of Unlawful Penal Charges
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Cite RBI Circular DoR.MCS.REC.28 if the bank capitalized penal charges. Use this regulatory violation as leverage to negotiate a 40% to 60% waiver on the total inflated demand.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Verify the Official Bank OTS Letter Before Paying
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never pay a recovery agent based on a WhatsApp message or phone promise. Wait for an official settlement letter from an authentic bank email domain stating the exact amount, due date, and full closure terms.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Collect No Dues Certificate and Audit CIBIL
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pay through traceable banking channels and request your No Dues Certificate (NDC). Check your credit report after 15 to 30 days to confirm the balance shows zero and the status is updated.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Borrower Rights */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Fair Practices Code &amp; Legal Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Borrower Rights &amp; Recovery Agent Protections
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Defaulting on a digital credit line does not take away your legal dignity. The RBI Master Directions and the Consumer Protection Act, 2019 protect every retail borrower against unfair bank conduct.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Strict Recovery Calling Hours</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI guidelines, recovery agents can only contact you between 8:00 AM and 7:00 PM. Late-night calls or repeated harassment violate central bank rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <UserCheck className="w-4 h-4" />
                    <span>No Contacting Family or Employer</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents cannot call your relatives, friends, or workplace to shame you over a UPI credit line default. Sharing your debt details with third parties breaches privacy norms.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Prior Consent Proof Requirement</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you never opted into the UPI credit line, demand the digital consent log from the bank. Without valid consent records, the bank cannot enforce default charges.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Deficiency in Service Remedies</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 2(11) of the Consumer Protection Act, 2019, wrong billing, failed CIBIL updates after settlement, or harassment qualify as deficiency in service.
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
                8. 3-Tier Escalation: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank refuses to reverse illegal penal charges, ignores your settlement request, or fails to issue a No Dues Certificate, use this three-tier escalation system.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Response Window</th>
                      <th className="p-3">Scope of Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 14 Days</td>
                      <td className="p-3">Reviews MITC consent, reverses unlawful penal compounding, and logs complaint ID.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">Up to 30 Days</td>
                      <td className="p-3">Approves hardship OTS waivers, halts aggressive agents, and issues NDC clearances.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI Integrated Ombudsman Scheme</td>
                      <td className="p-3 font-mono">30 Days Post-Filing</td>
                      <td className="p-3">Passes binding orders on cms.rbi.org.in for fee refunds, CIBIL fixes, and harassment relief.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Default &amp; Resolution Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Default to Settlement Timeline: Key Milestones
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding how banks classify overdue UPI credit lines helps you time your settlement request and protect your finances.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Overdue Window</th>
                      <th className="p-3">RBI Classification</th>
                      <th className="p-3">Bank Action</th>
                      <th className="p-3">Recommended Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Sends SMS reminders and suspends credit line usage.</td>
                      <td className="p-3">Pay minimum or full due if temporary cash crunch; check for wrong fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Escalates collection calls and reports overdue status to CIBIL.</td>
                      <td className="p-3">Request temporary restructuring or EMI conversion in writing.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Issues formal demand notice before NPA tagging.</td>
                      <td className="p-3">Audit statement for illegal penal interest and prepare hardship file.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 Onwards</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Status</td>
                      <td className="p-3">Account becomes NPA; bank becomes open to Compromise Settlement.</td>
                      <td className="p-3 font-bold text-amber-800">Submit formal OTS proposal citing financial hardship.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Post-Settlement</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Closure &amp; Cooling</td>
                      <td className="p-3">Issues NDC and updates bureau within 15 days; 12-month cooling starts.</td>
                      <td className="p-3 font-bold text-slate-900">Verify zero balance on CIBIL and begin credit rebuilding.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Common Pitfalls &amp; Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Common Mistakes &amp; Special UPI Line Scenarios
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Avoid these common errors when handling a defaulted pre-sanctioned credit line on UPI.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Confusing UPI Credit Line with RuPay Card
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A RuPay Credit Card on UPI follows Credit Card Master Directions, while a bank credit line follows retail loan and penal charge circulars. Check which product you hold before citing rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Paying Without an Official OTS Letter
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Third-party agents often ask for part-payments promising full closure. Without a bank-issued OTS letter, the bank treats your payment as a regular partial installment and keeps the loan active.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Auto-Debit &amp; UPI Autopay Bounces
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your UPI credit line uses an auto-debit mandate, repeated bounce attempts trigger bank return fees. Resolve or pause mandates formally while negotiating your settlement.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Small Finance Bank UPI Credit Lines
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The RBI extended UPI credit lines to Small Finance Banks. They must follow the exact same consent, penal charge, and compromise settlement rules as large commercial banks.
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
                Frequently Asked Questions: UPI Credit Line Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers on pre-sanctioned credit lines on UPI, RBI penal charge rules, CIBIL impact, and legal One-Time Settlement steps.
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
                Official Regulatory Citations &amp; Statutory References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Reserve Bank of India Circular:</strong> RBI/2023-24/58, DOR.CRE.REC.37/21.04.172/2023-24, Operation of Pre-Sanctioned Credit Lines at Banks through Unified Payments Interface (UPI).
                </li>
                <li>
                  <strong>Reserve Bank of India Circular:</strong> RBI/2023-24/53, DoR.MCS.REC.28/01.01.001/2023-24, Fair Lending Practice - Penal Charges in Loan Accounts.
                </li>
                <li>
                  <strong>Reserve Bank of India Circular:</strong> RBI/2023-24/40, DOR.STR.REC.20/21.04.048/2023-24, Framework for Compromise Settlements and Technical Write-offs.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Redressal for unauthorized activation, unfair charges, and recovery harassment.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) Deficiency of Service and Section 39 Remedies for Unfair Banking Practices.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.npci.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>NPCI UPI Guidelines</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="http://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Commission</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/rupay-credit-card-upi-debt-default-settlement-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RuPay Credit Card UPI Default
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Letter
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Guidelines
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
                  </Link>
                  <Link href="/bank-increased-credit-card-apr-interest-rbi-opt-out" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card APR Hike Opt-Out
                  </Link>
                  <Link href="/rbi-5000-per-day-delay-compensation-property-documents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI 5000/Day Delay Penalty
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
                Specialist in banking compliance, digital credit line disputes, RBI statutory guidelines, and loan settlement resolutions with extensive experience protecting Indian borrowers.
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
                  UPI CREDIT LINE RELIEF
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Struggling With UPI Credit Line Dues?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team audits unlawful penal compounding under RBI rules, stops recovery harassment, and negotiates an official One-Time Settlement with a verified No Dues Certificate.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Start Legal Settlement Now
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
                  <span>RBI Compliant • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Penal Fee Audit:</strong> Remove illegal compounded late fees under RBI rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Harassment Shield:</strong> Formal legal representation against agent abuse.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified OTS Letters:</strong> Direct bank sanction letters before payment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>NDC &amp; Bureau Tracking:</strong> Clean closure and 15-day CIBIL updates.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/rupay-credit-card-upi-debt-default-settlement-rules"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RuPay Credit Card UPI Default Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">UPI card default &amp; settlement &rarr;</span>
                </Link>

                <Link
                  href="/get-noc-after-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Get NOC After Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Official bank closure steps &rarr;</span>
                </Link>

                <Link
                  href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Verify Bank OTS Sanction Letter
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Avoid fake settlement scams &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
