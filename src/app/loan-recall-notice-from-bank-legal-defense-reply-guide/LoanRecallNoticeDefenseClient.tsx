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
  DollarSign,
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

export default function LoanRecallNoticeDefenseClient() {
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
    { id: 'what-is-loan-recall', label: '1. Loan Recall & Acceleration Clause' },
    { id: 'financial-forensics', label: '2. Financial Forensics: True vs Claimed Dues' },
    { id: 'notice-comparison-matrix', label: '3. Notice Comparison Matrix' },
    { id: 'arbitration-and-judicial-defense', label: '4. Unilateral Arbitration & SC Rulings' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Loan Recall Reply Protocol' },
    { id: 'statutory-defense', label: '7. Statutory Defense & Borrower Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance & Redressal Matrix' },
    { id: 'procedural-timeline', label: '9. Procedural Milestones & Timeline' },
    { id: 'specialized-scenarios', label: '10. Specialized Scenarios: Secured vs Unsecured' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is a loan recall notice from a bank in India?',
      a: 'A loan recall notice is a formal legal communication issued by a bank or NBFC after consecutive EMI defaults, typically around 90 days past due. By invoking the acceleration clause in your loan agreement, the lender cancels your remaining EMI tenure and demands the entire outstanding principal and interest within 7 to 15 days.'
    },
    {
      q: 'Can a bank send me to jail if I cannot pay the loan recall amount in 7 days?',
      a: 'No. A loan recall notice is purely a contractual civil demand. Defaulting on a loan due to genuine financial hardship like job loss or medical emergency is not a criminal offence in India. Police cannot arrest you merely for failing to pay the recalled loan balance.'
    },
    {
      q: 'Why is it mandatory to reply to a bank loan recall notice within 15 days?',
      a: 'Replying within 7 to 15 days creates an official legal record that you are a bona fide borrower facing temporary financial distress, not a willful defaulter. A timely legal reply also disputes inflated penal interest calculations and prevents the bank from obtaining an uncontested ex-parte arbitration award.'
    },
    {
      q: 'What is a Loan Recall cum Arbitration Notice and how do I contest it?',
      a: 'Unsecured personal loan and credit card lenders often combine a loan recall notice with an arbitration invocation under Section 21 of the Arbitration and Conciliation Act, 1996. Under the Supreme Court ruling in Perkins Eastman Architects DPC v. HSCC (India) Ltd., a bank cannot unilaterally appoint a sole arbitrator of its own choice. You must object to unilateral appointment in your legal reply.'
    },
    {
      q: 'Can I request EMI regularization instead of full payment after a loan recall notice?',
      a: 'Yes. If your cash flow has recovered and you only missed 3 or 4 EMIs, your legal counsel can submit a formal regularization request offering to clear the overdue EMI arrears so the bank withdraws the recall notice and restores your original monthly schedule.'
    },
    {
      q: 'How does a loan recall notice differ from a SARFAESI Section 13(2) notice?',
      a: 'A loan recall notice is a contractual termination of the EMI facility giving 7 to 15 days to pay, applicable to both unsecured and secured loans. A SARFAESI Section 13(2) notice is a statutory 60-day demand issued strictly for secured loans above ₹1 Lakh after NPA classification to enforce collateral security.'
    },
    {
      q: 'Can I challenge compound penal interest in the loan recall demand?',
      a: 'Yes. Under the RBI Fair Lending Practice guidelines on Penal Charges in Loan Accounts (effective 2024), banks are strictly prohibited from capitalizing penal charges or charging compound interest on penalty amounts. Any compounding of penal interest in the recall ledger must be legally disputed.'
    },
    {
      q: 'What happens if I ignore a loan recall notice completely?',
      a: 'Ignoring a loan recall notice allows the lender to proceed with a unilateral arbitration claim, file a civil recovery suit under Order 37 CPC, deposit security cheques or NACH mandates to trigger Section 138 NI Act / Section 25 PSS Act cases, or initiate SARFAESI action on mortgaged property.'
    },
    {
      q: 'Can I settle my loan via One-Time Settlement (OTS) after receiving a recall notice?',
      a: 'Yes. In fact, once a bank issues a loan recall notice and classifies the account as an NPA, the file moves to the stressed assets recovery desk. This opens the prime window to negotiate a formal One-Time Settlement (OTS) with a 50% to 75% waiver on total claimed dues.'
    },
    {
      q: 'How does CredSettle help borrowers who receive a bank loan recall notice?',
      a: 'CredSettle drafts a formal advocate-vetted legal reply within the 7 to 15 day statutory window, challenges illegal penal interest and unilateral arbitration clauses, shields you from recovery agent harassment, and negotiates a legally binding compromise settlement with an official No Dues Certificate.'
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
            <span>Banking Contract Law &amp; Statutory Notice Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Received a Bank Loan Recall Notice? Legal Defense &amp; Reply
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A complete legal defense and reply guide for borrowers facing a bank or NBFC loan recall notice. Learn how to contest acceleration clauses, challenge unilateral arbitration, remove compounding penalties, and negotiate a 50% to 75% One-Time Settlement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Draft Your Legal Reply Now</span>
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
                  <span>Statutory Notice Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Compliant with RBI Fair Practices Code and Arbitration Act 1996.
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
                <span>EXECUTIVE BRIEF: LOAN RECALL NOTICE DEFENSE &amp; REPLY PROTOCOL</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Contractual Acceleration Trigger:</strong> A loan recall notice terminates your monthly EMI schedule after 3 consecutive defaults, demanding the entire remaining principal within 7 to 15 days.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory 15-Day Legal Reply:</strong> Never leave a recall notice unanswered. A formal legal reply records genuine hardship, stops willful default tags, and challenges inflated ledgers.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Block Unilateral Arbitration:</strong> Under the Supreme Court ruling in Perkins Eastman, banks cannot appoint a sole arbitrator without your written consent.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Audit Compounding Penalties:</strong> RBI guidelines strictly forbid banks from capitalizing penal charges or charging compound interest on late payment fees.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Prime OTS Negotiation Window:</strong> Once a loan is recalled, the account moves to the bank recovery desk, opening the doorway for a 50% to 75% One-Time Settlement waiver.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Loan Recall Notice: Acceleration Clause & Legal Meaning */}
            <section id="what-is-loan-recall" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Banking Contract Law &amp; Event of Default</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Loan Recall Notice: Acceleration Clause &amp; Legal Meaning
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Receiving a Loan Recall Notice from a bank or Non-Banking Financial Company (NBFC) is often a terrifying moment for a borrower. Whereas earlier collection messages only asked for one or two missed Equated Monthly Installments (EMIs), a loan recall notice suddenly demands the entire remaining loan principal, accrued interest, and bounce charges within seven to fifteen days.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To defend against this notice effectively, you must understand its legal foundation. Every retail and business loan agreement signed in India contains an Event of Default clause paired with an Acceleration Clause. Under the Indian Contract Act, 1872, the lender agrees to let you repay the loan in monthly installments over several years, provided you pay each EMI on time.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower misses three consecutive EMIs (reaching 90 days past due and classifying the account as a Non-Performing Asset or NPA), the bank invokes the acceleration clause. This legal action cancels the deferred installment facility, recalls the credit sanction, and makes the entire unmatured principal balance immediately payable.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Despite its intimidating tone, a loan recall notice is not a court order, arrest warrant, or property attachment decree. It is a mandatory contractual step that a bank must take before it can initiate formal civil recovery, arbitration, or Compromise Settlement (OTS) discussions.
              </p>
            </section>

            {/* SECTION 2: Financial Forensics: Principal vs Inflated Recall Demand */}
            <section id="financial-forensics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics &amp; Ledger Audit</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Forensics: Principal vs Inflated Recall Demand
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a bank dispatches a loan recall notice, the total amount demanded at the bottom of the letter is almost always heavily inflated. Automated bank accounting software bundles unmatured future interest, repeated NACH or ECS dishonour fees, legal notice charges, and compounded penal interest into a single lump-sum figure.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the Reserve Bank of India (RBI) Fair Lending Practice guidelines on Penal Charges in Loan Accounts (effective January 1, 2024), banks and NBFCs are strictly prohibited from levying penal interest that gets added to the principal to compute compound interest. Any penalty for late payment must be treated as a standalone, non-compounding charge.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                By demanding a complete Foreclosure and Account Ledger Statement in your legal reply, you can separate the true principal outstanding from artificial accounting add-ons. This forensic breakdown becomes your strongest lever during One-Time Settlement negotiations.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Loan Recall Ledger Audit &amp; OTS Math</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹10.85 Lakh Recall Notice Claim</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Recall Notice Ledger Component</th>
                        <th className="p-3">Bank Recall Demand</th>
                        <th className="p-3">Legal Audit &amp; RBI Rule Status</th>
                        <th className="p-3 text-right">Negotiated OTS Payable</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Unmatured &amp; Overdue Principal</td>
                        <td className="p-3">₹7,20,000</td>
                        <td className="p-3 text-blue-600 font-semibold">Core Contractual Debt (Eligible for Haircut)</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹3,60,000 (50% Waiver)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Accrued Contractual Interest</td>
                        <td className="p-3">₹1,95,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Waivable under RBI NPA Compromise Norms</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹0 (100% Waived)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Compounded Penal Interest &amp; Late Fees</td>
                        <td className="p-3 text-rose-600 font-bold">₹1,15,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Challenged under RBI 2024 Penal Charge Rules</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹0 (100% Removed)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Repeated NACH Bounce &amp; Legal Charges</td>
                        <td className="p-3 text-rose-600 font-bold">₹55,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Disputed as Redundant Automated Presentations</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹0 (100% Waived)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Recall Resolution Summary</td>
                        <td className="p-3 text-rose-600">₹10,85,000 Claimed</td>
                        <td className="p-3 text-emerald-700">₹7,25,000 Total Relief (66.8% Net Savings)</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹3,60,000 Final OTS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Notice Comparison Matrix */}
            <section id="notice-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory vs Contractual Notices</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Notice Comparison: Recall vs Section 13(2) &amp; Section 138
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers often confuse a contractual Loan Recall Notice with statutory recovery notices such as a SARFAESI Section 13(2) demand or a Section 138 Cheque Bounce notice. Identifying the exact legal nature of your notice determines the correct reply deadline and defense strategy.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The comparison table below breaks down the governing law, response window, risk level, and mandatory legal defense for each notice type issued by Indian banks.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Notice Category</th>
                      <th className="p-3">Governing Law</th>
                      <th className="p-3">Standard Reply Window</th>
                      <th className="p-3">Loan Type Covered</th>
                      <th className="p-3">Primary Legal Defense Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Loan Recall Notice</td>
                      <td className="p-3">Indian Contract Act, 1872</td>
                      <td className="p-3 text-[#1886ff] font-semibold">7 to 15 Days</td>
                      <td className="p-3">Personal, Business, Card &amp; Secured</td>
                      <td className="p-3">Dispute ledger inflation, record hardship &amp; propose OTS or restructuring.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Recall cum Arbitration Notice</td>
                      <td className="p-3">Arbitration Act, 1996 (Sec 21)</td>
                      <td className="p-3 text-amber-600 font-semibold">15 to 30 Days</td>
                      <td className="p-3">Unsecured Loans &amp; Credit Cards</td>
                      <td className="p-3">Reject unilateral arbitrator appointment under Perkins Eastman ruling.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">SARFAESI Demand Notice</td>
                      <td className="p-3">SARFAESI Act, 2002 (Sec 13(2))</td>
                      <td className="p-3 text-emerald-600 font-semibold">60 Days Statutory</td>
                      <td className="p-3">Secured Loans (&gt; ₹1 Lakh NPA)</td>
                      <td className="p-3">File Section 13(3A) statutory objections requiring 15-day bank reply.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Cheque / NACH Dishonour Notice</td>
                      <td className="p-3">NI Act (Sec 138) / PSS Act (Sec 25)</td>
                      <td className="p-3 text-rose-600 font-semibold">15 Days Strict</td>
                      <td className="p-3">Any Loan with Mandate / Cheque</td>
                      <td className="p-3">Challenge security cheque misuse &amp; excess amount beyond legal liability.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Lok Adalat Pre-Litigation Notice</td>
                      <td className="p-3">Legal Services Authorities Act, 1987</td>
                      <td className="p-3 text-emerald-600 font-semibold">On Hearing Date</td>
                      <td className="p-3">Retail &amp; Unsecured NPA Loans</td>
                      <td className="p-3">Conciliatory forum only; attend to negotiate deep 50% to 75% waivers.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Unilateral Arbitration & Judicial Precedents Defense */}
            <section id="arbitration-and-judicial-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Supreme Court Rulings &amp; Arbitration Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Unilateral Arbitration &amp; Judicial Precedents Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In over 80% of personal loan, business loan, and credit card defaults, private banks and NBFCs issue a combined document titled Loan Recall cum Reference to Arbitration Notice. This notice states that if you fail to pay the recalled balance within 7 or 15 days, the lender will refer the dispute to a sole arbitrator nominated by the bank, often via an online arbitration portal.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian borrowers possess an ironclad constitutional and statutory defense against this tactic. Under Section 12(5) read with the Seventh Schedule of the Arbitration and Conciliation Act, 1996, any person who has a financial or professional relationship with one of the parties is legally ineligible to act as an arbitrator.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In the landmark judgment of Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2019) and TRF Ltd. v. Energo Engineering Projects Ltd. (2017), the Supreme Court of India ruled that a party with a vested interest in the outcome of a dispute (such as a creditor bank) cannot unilaterally appoint a sole arbitrator. Furthermore, in Central Organisation for Railway Electrification (CORE) v. ECI SPIC SMO MCML (2024), the Supreme Court Constitution Bench reaffirmed that unilateral appointment clauses in standard-form contracts violate equal treatment under Section 18 of the Arbitration Act.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Similarly, in Mardia Chemicals Ltd. v. Union of India (2004), the Supreme Court established that lenders have a duty to act fairly, reasonably, and in good faith when recalling credit facilities, rather than acting arbitrarily to crush a borrower facing genuine business or personal adversity.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Loan Recall Notice Defense Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual roadmap illustrates how a bank loan recall notice triggers loan acceleration and how a structured 15-day legal reply blocks unilateral arbitration and steers the account toward an affordable compromise settlement.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/loan-recall-notice-from-bank-legal-defense-reply-guide.jpg"
                    alt="Loan Recall Notice from Bank Legal Defense and Reply Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Legal Defense Framework • RBI &amp; Arbitration Act 1996 Compliant</span>
                  <a
                    href="/images/infographics/loan-recall-notice-from-bank-legal-defense-reply-guide.jpg"
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
                6. Step-by-Step SOP: 6-Stage Loan Recall Reply Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a loan recall notice arrives via registered post, courier, or email, follow this six-stage legal protocol to protect your rights, prevent ex-parte orders, and resolve the debt on your terms.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Verify Advocate Credentials &amp; Notice Authenticity
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check that the notice carries a valid bank reference number, advocate enrolment number, and exact loan account details. Beware of fake WhatsApp drafts sent by third-party collection agencies masquerading as court summons.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Demand Complete Account Ledger &amp; Foreclosure Breakup
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Most recall notices state a single lump-sum figure without explaining how it was calculated. In your reply, formally demand an itemized statement separating principal, regular interest, and penal charges.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Place Genuine Financial Hardship on Official Record
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Document the exact cause of default, such as corporate layoff, medical hospitalization, or business revenue loss. Recording your previous track record of timely EMI payments proves you are not a willful defaulter.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Object to Unilateral Arbitrator Appointment &amp; Security Misuse
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Explicitly state that you do not consent to any sole arbitrator unilaterally nominated by the bank under Section 12(5) of the Arbitration Act. Simultaneously instruct the bank not to present blank security cheques or NACH mandates.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Dispatch Reply via Registered Post A.D. &amp; Email
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Send your legal reply within the 7 to 15 day window to both the issuing advocate and the bank Grievance Redressal Officer via Registered Post with Acknowledgment Due (RPAD) and official email, preserving the postal receipt.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Negotiate Formal OTS or Account Regularization
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once the legal reply locks in your defense, engage the bank NPA settlement committee through CredSettle to secure either EMI regularization or a 50% to 75% One-Time Settlement waiver backed by a formal sanction letter.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Defense: Borrower Rights & Legal Remedies */}
            <section id="statutory-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Defenses &amp; Borrower Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Defense: Borrower Rights &amp; Legal Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even after a loan is recalled, banks and their recovery agents remain strictly bound by RBI regulatory directives and Indian statutory laws. You can invoke these four core legal shields immediately in your notice reply.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 12(5) Arbitration Act Shield</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bars banks from appointing their own empanelled advocates or retired officers as sole arbitrators without an express post-dispute written agreement from the borrower.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>RBI Fair Practices &amp; Agent Conduct Code</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A loan recall notice does not permit recovery agents to call before 8:00 AM or after 7:00 PM, contact relatives or employers, or threaten police arrest for a civil debt.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Protection Against Blank Security Cheque Misuse</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 56 of the Negotiable Instruments Act and Supreme Court rulings (Dashrathbhai Trikambhai Patel), filling an inflated recall amount on an old security cheque without endorsing part-payments is legally contestable.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>RBI Compromise Settlement Framework (2023)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI mandates that all regulated banks and NBFCs maintain board-approved policies for compromise settlements of stressed and recalled retail loans, enabling structured debt waivers.
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
                8. 3-Tier Escalation Matrix: Banking Grievance Redressal
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a lender issues a premature loan recall notice without proper intimation, refuses to share the itemized loan ledger, or couples the notice with unlawful agent intimidation, escalate through the official RBI three-tier redressal channel.
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
                      <td className="p-3">Registers formal reply to recall notice, supplies complete ledger breakup, and halts agent harassment.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Zonal / Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Audits illegal compounding of penal charges, reviews hardship proofs, and routes file to OTS committee.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Adjudicates unfair lending practices via cms.rbi.org.in and directs reversal of unlawful penalty debits.</td>
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
                9. Procedural Timeline: Default to Recall &amp; OTS Closure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing exactly when a bank triggers loan acceleration during the delinquency lifecycle helps you prepare your legal response and financial strategy well ahead of time.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Delinquency Window</th>
                      <th className="p-3">Regulatory Asset Status</th>
                      <th className="p-3">Lender Legal &amp; Recovery Action</th>
                      <th className="p-3">Strategic Borrower Defense</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Automated EMI bounce alerts and soft tele-calling reminders.</td>
                      <td className="p-3">Stop multiple NACH presentations and preserve liquidity in a neutral bank.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Overdue demand letters asking solely for missed EMI arrears.</td>
                      <td className="p-3">Submit written financial hardship intimation to the bank branch or email desk.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Pre-NPA warning notices and field collection visits.</td>
                      <td className="p-3">Maintain call records and request restructuring if income has stabilized.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 105</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA &amp; Loan Recall</td>
                      <td className="p-3">Account marked NPA; Loan Recall Notice issued invoking acceleration clause.</td>
                      <td className="p-3 font-semibold text-slate-900">Dispatch formal advocate legal reply within 7 to 15 days disputing inflated ledger.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 106 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Arbitration / OTS Window</td>
                      <td className="p-3">Section 21 arbitration reference or Lok Adalat pre-litigation invite.</td>
                      <td className="p-3 font-bold text-slate-900">Block unilateral arbitration and negotiate 50% to 75% OTS with CredSettle.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Post-Settlement</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">Resolved &amp; Closed</td>
                      <td className="p-3">Bank withdraws recall &amp; arbitration notices upon OTS payment.</td>
                      <td className="p-3">Collect official No Dues Certificate (NDC) and verify CIBIL closure update.</td>
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
                10. Specialized Scenarios: Secured vs Unsecured Recall
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A loan recall notice operates differently depending on whether the credit facility is unsecured, backed by a vehicle, mortgaged against property, or co-signed by a guarantor. Here is how to handle each specific case.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Unsecured Personal Loans &amp; Credit Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Because the lender holds no physical collateral, a recall notice on an unsecured loan is almost always followed by arbitral threats or Section 138/Section 25 notices. Contesting the arbitration clause and negotiating a lump-sum or 3-part OTS yields deep 50% to 75% waivers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    Home Loans &amp; LAP (Pre-SARFAESI Recall)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In housing and mortgage loans, banks issue a loan recall notice right before serving a statutory 60-day Section 13(2) SARFAESI notice. Replying immediately and offering to clear overdue EMIs can regularize the account and prevent SARFAESI property possession.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Auto &amp; Commercial Vehicle Hypothecation Recall
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Vehicle loan recall notices often demand that you pay the entire balance within 7 days or surrender the hypothecated car. Under Supreme Court rulings (ICICI Bank v. Prakash Kaur), banks cannot use musclemen to forcibly snatch vehicles on the road; due legal process is mandatory.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    Co-Borrowers &amp; Personal Guarantors
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 128 of the Indian Contract Act, a guarantor’s liability is co-extensive with the principal borrower, so banks address the recall notice to both. A unified legal reply protects both the borrower and guarantor from dual recovery harassment and ensures any OTS discharges both names.
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
                Frequently Asked Questions: Bank Loan Recall Notice Guide
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal answers to the most common questions asked by borrowers after receiving a loan recall notice or arbitration demand from an Indian bank or NBFC.
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
                Official Regulatory Citations &amp; Statutory Legal Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Sections 73, 74, and 128 governing contractual default damages, penalty stipulations, and co-extensive guarantor obligations.
                </li>
                <li>
                  <strong>Arbitration and Conciliation Act, 1996:</strong> Section 21 (Commencement of Arbitral Proceedings) and Section 12(5) read with the Seventh Schedule prohibiting unilateral arbitrator appointment.
                </li>
                <li>
                  <strong>RBI Circular on Fair Lending Practice - Penal Charges in Loan Accounts (2023/2024):</strong> Prohibits capitalization of penal charges and compounding of penalty interest in recalled accounts.
                </li>
                <li>
                  <strong>RBI Framework for Compromise Settlements and Technical Write-offs (June 2023):</strong> Mandates board-approved OTS settlement mechanisms across all commercial banks and NBFCs.
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2019) and Mardia Chemicals Ltd. v. Union of India (2004).
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
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://drt.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Debt Recovery Tribunal Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://ecourts.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>eCourts Services India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/bank-arbitration-notice-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/rbi-guidelines-on-penal-charges-in-loan-accounts" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Penal Charges Rules
                  </Link>
                  <Link href="/sarfaesi-act-section-13-2-notice-stop-auction" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    SARFAESI 13(2) Notice Defense
                  </Link>
                  <Link href="/willful-defaulter-notice-rbi-rules-legal-defense-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Willful Defaulter Notice Defense
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/how-to-convince-bank-for-one-time-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    One Time Settlement Guide
                  </Link>
                  <Link href="/fake-legal-notice-from-advocate-whatsapp" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Spot Fake WhatsApp Notices
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF &amp; Gratuity Protection
                  </Link>
                  <Link href="/civil-suit-for-recovery-of-money-by-bank" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Order 37 Civil Recovery Suit
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
                Specialist in banking contract litigation, loan recall notice rebuttals, unilateral arbitration defense, and RBI-compliant NPA compromise settlements across major Indian commercial banks and NBFCs.
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
                  15-DAY LEGAL REPLY DESK
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Got a 7-Day or 15-Day Loan Recall Notice?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Do not let the bank obtain an ex-parte arbitration order. Our legal team drafts your statutory reply, challenges inflated penalties, and negotiates a 50% to 75% OTS waiver.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Reply &amp; Settle Your Loan Now
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
                  <span>Advocate-Vetted Reply • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Timely Legal Rebuttal:</strong> Dispatched within the 7 to 15 day window.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Arbitration Defense:</strong> Blocks unilateral arbitrator appointments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ledger Forensic Audit:</strong> Eliminates unlawful compound penalties.</span>
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
                  href="/bank-arbitration-notice-loan"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Arbitration Notice Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Contest Section 21 notices &rarr;</span>
                </Link>

                <Link
                  href="/rbi-guidelines-on-penal-charges-in-loan-accounts"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Guidelines on Penal Charges
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop compounding penalty interest &rarr;</span>
                </Link>

                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice: What to Do
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Complete notice reply guide &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
