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
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  Gavel,
  Landmark,
  Calendar,
  Ban,
  RefreshCw,
  Sparkles
} from 'lucide-react';

export default function NbfcMultipleMandateBounceClient() {
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
    { id: 'why-nbfcs-hit-mandate', label: '1. Why NBFCs Hit Mandates 5 Times' },
    { id: 'npci-retry-limits', label: '2. NPCI Retry Caps & Cooling Rule' },
    { id: 'rbi-penal-kfs-rules', label: '3. RBI Penal Charges & KFS Law' },
    { id: 'double-hit-cost-math', label: '4. Bank vs NBFC Bounce Fee Math' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'upi-vs-enach-rules', label: '6. UPI AutoPay vs e-NACH Notice' },
    { id: 'section-25-judgments', label: '7. Section 25 & Court Rulings' },
    { id: 'step-by-step-refund-sop', label: '8. Step-by-Step Refund SOP' },
    { id: 'cancel-nach-without-noc', label: '9. Cancel NACH Without NBFC NOC' },
    { id: 'escalation-matrix', label: '10. 3-Tier RBI Escalation Matrix' },
    { id: 'mistakes-and-remedies', label: '11. Mistakes & Safe Loan Remedies' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Portals' }
  ];

  const faqs = [
    {
      q: 'Can an NBFC legally hit my NACH mandate 5 times in the same month?',
      a: 'No. Under NPCI NACH debit return circulars, lenders must cap retries of a returned transaction at 2 re-presentations (1 initial hit plus 2 retries) with a 3-day cooling period. Presenting the same mandate 5 times in one month breaches NPCI operating rules.'
    },
    {
      q: 'How do I get a refund for extra bounce charges from an NBFC?',
      a: 'Download your bank statement and loan ledger showing all retry dates. Email the NBFC Grievance Redressal Officer citing NPCI retry limits and RBI Circular RBI/2023-24/53. If they do not refund excess fees within 30 days, file a complaint on cms.rbi.org.in.'
    },
    {
      q: 'Can I also recover inward NACH return fees cut by my own bank?',
      a: 'Yes. Raise a written dispute with your destination bank and claim reimbursement from the NBFC for every return charge caused by excess retries beyond NPCI limits. If your bank charged fees after you cancelled the mandate, your bank must refund them directly.'
    },
    {
      q: 'Can an NBFC add unpaid bounce charges to my loan principal and charge interest?',
      a: 'No. RBI Circular DoR.MCS.REC.28 (RBI/2023-24/53) and the Supreme Court ruling in Central Bank of India v. Ravindra ban lenders from adding penal charges to the loan principal or charging interest on top of bounce fees.'
    },
    {
      q: 'What if the bounce fee amount was not mentioned in my Key Facts Statement (KFS)?',
      a: 'Under RBI Circular RBI/2024-25/18 dated April 15, 2024, an NBFC cannot collect any fee or penal charge that was missing from your Key Facts Statement without your clear consent. You can demand a full 100% refund of undisclosed fees.'
    },
    {
      q: 'Can I cancel my NACH mandate through my bank without an NOC from the NBFC?',
      a: 'Yes. Under NPCI NACH guidelines, cancelling or stopping a mandate is the account holder right. Your destination bank cannot refuse cancellation for lack of an NBFC NOC. However, you must still pay or settle the loan through other legal modes.'
    },
    {
      q: 'Does the RBI 24-hour pre-debit alert rule apply to both UPI AutoPay and e-NACH?',
      a: 'The mandatory 24-hour pre-debit notification with an instant opt-out link applies directly to UPI AutoPay and card e-mandates under the RBI E-Mandate Framework. For e-NACH, NPCI requires prior SMS or email notice and a 3-day cooling period before retries.'
    },
    {
      q: 'Does every NACH bounce in the same month create a separate Section 25 criminal case?',
      a: 'No. A Section 25 Payment and Settlement Systems Act case requires a valid dishonour memo, a formal demand notice within 30 days, a 15-day cure window, and a magistrate complaint within 1 month. Automated retry loops do not create five separate jail cases.'
    },
    {
      q: 'Will multiple NACH bounces in the same month hurt my CIBIL score five times?',
      a: 'No. Lenders report your Days Past Due (DPD) status to credit bureaus every 15 days based on the unpaid EMI, not per NACH retry. However, unpaid bounce fees can keep an account overdue if you pay only the base EMI and ignore the disputed fee ledger.'
    },
    {
      q: 'How does CredSettle help stop repeat NACH hits and resolve NBFC personal loans?',
      a: 'CredSettle audits your loan ledger for illegal retry fees, sends formal notices under RBI and NPCI circulars to waive stacked bounce charges, defends Section 25 notices, and negotiates structured One-Time Settlements with an official No Dues Certificate.'
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
            <span>NPCI NACH Retry Limits &amp; RBI Penal Charge Rules</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Stop Repeated Same-Month NACH Presentations &amp; Fees
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Is your NBFC hitting your bank mandate 5 times in one month and draining your account with bounce fees? Learn NPCI retry limits, RBI penal charge rules, and the exact steps to claim a full refund.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Claim Bounce Fee Refund Help</span>
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
                  <span>Statutory Borrower Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Backed by NPCI NACH Circulars (007 &amp; 012) and RBI Penal Charges Circular RBI/2023-24/53.
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
                <span>EXECUTIVE BRIEF: MULTIPLE NACH HITS &amp; BOUNCE FEE REFUNDS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict NPCI Retry Cap:</strong> NPCI rules limit retries on a failed NACH debit to 2 tries (1 initial hit plus 2 retries). Hitting your bank 5 times in a month breaks these rules.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">3-Day Cooling Period:</strong> Lenders must wait at least 3 days after a bounce before trying again. Only your clear consent allows an earlier hit. They must also send SMS or email alerts first.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Profit From Penalties:</strong> RBI Circular RBI/2023-24/53 bans using penalty fees for profit. NBFCs cannot add bounce fees to your loan principal or charge interest on them.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Key Facts Statement Rule:</strong> RBI Circular RBI/2024-25/18 protects you from hidden fees. If a bounce fee is missing from your Key Facts Statement (KFS), the NBFC cannot charge it.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Right to Cancel Mandate:</strong> You can stop a NACH mandate directly at your own bank without an NBFC NOC. Then you can pay manually or settle the loan without daily bounce hits.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Why NBFCs Hit NACH Mandates 5 Times a Month */}
            <section id="why-nbfcs-hit-mandate" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <RefreshCw className="w-4 h-4 text-[#1886ff]" />
                <span>Quick Answer &amp; Problem Overview</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Why NBFCs Hit NACH Mandates 5 Times a Month
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Quick Answer:</strong> No, an NBFC should not hit your bank account 5 times in one month for the same missed EMI. NPCI rules limit retries on a returned NACH debit to two attempts after the first bounce, with a three-day gap in between.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many personal loan NBFCs and digital lending apps run auto-retry scripts when an EMI fails. They hope your salary or a friend&apos;s transfer hits your savings account so they can sweep the cash first.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even worse, each failed hit triggers two separate fees. Your own bank cuts an inward NACH return fee from your savings account. At the same time, the NBFC adds a bounce fee to your loan balance.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a lender hits your bank 5 times in a month, costs explode fast. A single ₹4,000 EMI delay can pile up ₹5,000 to ₹8,000 in bounce fees. Indian banking rules protect you and help you claim a refund.
              </p>
            </section>

            {/* SECTION 2: NPCI NACH Retry Limits & 3-Day Cooling Period */}
            <section id="npci-retry-limits" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>NPCI Clearinghouse Operating Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. NPCI NACH Retry Limits &amp; 3-Day Cooling Period
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                NACH stands for National Automated Clearing House. The National Payments Corporation of India (NPCI) runs this system for recurring EMI debits across India. Every bank and NBFC using NACH must follow NPCI circulars.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In 2023, NPCI issued strict circulars to stop lenders from spamming empty bank accounts with endless debit files. The key circulars are <strong>NPCI/2023-24/NACH/007</strong> (August 18, 2023), addendum <strong>NPCI/NACH/OC No.010/2023-24</strong> (October 31, 2023), and Master Circular <strong>NPCI/NACH/OC No.012/2023-24</strong> (December 29, 2023).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <Ban className="w-4 h-4" />
                    <span>Maximum 2 Re-Presentations Only</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    NPCI limits a lender to 1 initial presentation plus at most 2 retries for a returned debit. Hitting your mandate 4, 5, or 8 times in one month breaks this cap directly.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Mandatory 3-Day Cooling Period</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders must wait at least 3 days after a bounce date before retrying. They can retry sooner only if you clearly confirm that funds are now in your bank account.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Prior Notice &amp; Fund Confirmation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    NBFCs must send an SMS or email alert before a debit retry. NPCI directs lenders to confirm fund readiness with the borrower rather than blindly hitting the account.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>50% Return Cap &amp; Mandate Ban</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If an NBFC&apos;s NACH return rate crosses 50%, NPCI charges extra return fees and can block it from registering new mandates. Closed or stopped accounts cannot be retried at all.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: RBI Penal Charges & Key Facts Statement Rules */}
            <section id="rbi-penal-kfs-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Binding Reserve Bank of India Circulars</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. RBI Penal Charges &amp; Key Facts Statement Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Alongside NPCI rules, two major RBI circulars give you strong legal power to challenge stacked NBFC bounce fees and demand a refund.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, RBI issued Circular <strong>RBI/2023-24/53</strong> (DoR.MCS.REC.28/01.01.001/2023-24) on August 18, 2023, on <em>Fair Lending Practice: Penal Charges in Loan Accounts</em>. A follow-up circular (<strong>RBI/2023-24/102</strong>) made these rules binding from April 1, 2024 for new loans and June 30, 2024 for older loans.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5 leading-relaxed">
                <li>
                  <strong>Not a Profit Tool:</strong> RBI clearly states that penal charges exist only to promote credit discipline. NBFCs cannot use repeat bounce fees as a source of extra revenue.
                </li>
                <li>
                  <strong>No Interest on Bounce Fees:</strong> Lenders cannot add unpaid bounce charges to your loan principal (no capitalization). They cannot charge compound interest on bounce fees.
                </li>
                <li>
                  <strong>Reasonable &amp; Fair Policy:</strong> Bounce charges must follow a Board-approved policy and match the actual default. Personal loan borrowers cannot be charged more than business borrowers for the same breach.
                </li>
              </ul>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, RBI issued the <strong>Key Facts Statement (KFS) Circular RBI/2024-25/18</strong> (DoR.STR.REC.13/13.03.00/2024-25) on April 15, 2024. Every NBFC must give you a plain one-page KFS before you sign your loan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under this circular, an NBFC cannot collect any bounce charge or penal fee that was left out of your KFS without your clear consent. If your KFS lists one bounce fee or omits retry charges, extra same-month fees are unlawful.
              </p>
            </section>

            {/* SECTION 4: Double-Hit Cost Math: Bank vs NBFC Bounce Fees */}
            <section id="double-hit-cost-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Damage Audit &amp; Refund Ledger</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Double-Hit Cost Math: Bank vs NBFC Bounce Fees
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers notice only the fee inside their loan app. Yet your own savings bank also cuts a return fee on each failed hit. Most banks charge ₹250 to ₹590 (with GST) per bounce.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Look at how 5 hits in one month turn a ₹6,000 EMI into a costly fee trap. The table below uses a common ₹590 bank return fee and a ₹590 NBFC bounce fee per hit.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Same-Month 5-Hit NACH Bounce Ledger (Illustrative)</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">NPCI Limit: 1 Initial + 2 Retries Max</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[580px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Debit Attempt &amp; Day</th>
                        <th className="p-3">NPCI Rule Status</th>
                        <th className="p-3 text-right">Bank Return Fee</th>
                        <th className="p-3 text-right">NBFC Bounce Fee</th>
                        <th className="p-3 text-right">Refund Claim Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Hit 1 (EMI Due Date: Day 5)</td>
                        <td className="p-3 text-emerald-600 font-semibold">Permitted (Initial Hit)</td>
                        <td className="p-3 text-right font-mono">₹590</td>
                        <td className="p-3 text-right font-mono">₹590</td>
                        <td className="p-3 text-right text-slate-500 font-semibold">Dispute only if KFS silent</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Hit 2 (Day 7: 2-Day Gap)</td>
                        <td className="p-3 text-amber-600 font-semibold">Breach (Under 3-Day Gap)</td>
                        <td className="p-3 text-right font-mono">₹590</td>
                        <td className="p-3 text-right font-mono">₹590</td>
                        <td className="p-3 text-right text-amber-700 font-bold">Challenge Cooling Breach</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Hit 3 (Day 11: Retry 2)</td>
                        <td className="p-3 text-amber-600 font-semibold">Max Limit (Needs Notice)</td>
                        <td className="p-3 text-right font-mono">₹590</td>
                        <td className="p-3 text-right font-mono">₹590</td>
                        <td className="p-3 text-right text-amber-700 font-bold">Challenge If No Alert</td>
                      </tr>
                      <tr className="bg-rose-50/40">
                        <td className="p-3 font-medium text-slate-900">Hit 4 (Day 16: Retry 3)</td>
                        <td className="p-3 text-rose-600 font-semibold">Violates NPCI 2-Retry Cap</td>
                        <td className="p-3 text-right font-mono text-rose-700 font-bold">₹590</td>
                        <td className="p-3 text-right font-mono text-rose-700 font-bold">₹590</td>
                        <td className="p-3 text-right text-rose-700 font-bold">Full Refund Demand</td>
                      </tr>
                      <tr className="bg-rose-50/60">
                        <td className="p-3 font-medium text-slate-900">Hit 5 (Day 22: Retry 4)</td>
                        <td className="p-3 text-rose-700 font-semibold">Violates NPCI &amp; RBI Rules</td>
                        <td className="p-3 text-right font-mono text-rose-700 font-bold">₹590</td>
                        <td className="p-3 text-right font-mono text-rose-700 font-bold">₹590</td>
                        <td className="p-3 text-right text-rose-700 font-bold">Full Refund + Compensation</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Single-Month Impact</td>
                        <td className="p-3 text-[#1886ff]">10 Separate Fee Entries</td>
                        <td className="p-3 text-right font-mono">₹2,950</td>
                        <td className="p-3 text-right font-mono">₹2,950</td>
                        <td className="p-3 text-right text-[#1886ff] font-mono">₹5,900 Total Drain</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Notice the result: on a single missed EMI, excess retries can drain nearly ₹5,900 before you even pay a rupee toward your real loan principal. You have a clear basis to demand reversal of every excess NBFC charge and reimbursement of matching bank return fees.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: NACH Retry Cap &amp; Refund Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart sums up your core rights under NPCI and RBI rules. It shows the 2-retry limit, the 3-day cooling gap, and why excess hits trigger bounce fee refunds.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/nbfc-presenting-mandate-multiple-times-month-bounce-fee.jpg"
                    alt="NBFC Repeated NACH Mandate Presentation Rules, NPCI 2-Retry Limit and RBI Bounce Fee Refund Shield"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle NACH Bounce Protection Framework • NPCI &amp; RBI Compliant</span>
                  <a
                    href="/images/infographics/nbfc-presenting-mandate-multiple-times-month-bounce-fee.jpg"
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

            {/* SECTION 6: UPI AutoPay vs e-NACH Pre-Debit Notice Rules */}
            <section id="upi-vs-enach-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Comparing Auto-Debit Mandate Channels</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. UPI AutoPay vs e-NACH Pre-Debit Notice Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers mix up UPI AutoPay rules with e-NACH rules when drafting complaints. Knowing the exact legal difference makes your RBI Ombudsman claim much stronger and harder for an NBFC to reject.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Protection Feature</th>
                      <th className="p-3">e-NACH / Physical NACH</th>
                      <th className="p-3">UPI AutoPay Mandate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Governing Rules</td>
                      <td className="p-3">NPCI NACH Circulars (007, 010, 012) &amp; RBI Fair Lending Rules.</td>
                      <td className="p-3">RBI Digital Payments E-Mandate Framework &amp; NPCI UPI Rules.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Pre-Debit Alert</td>
                      <td className="p-3">Lender must send SMS or email notice before presentation and retry.</td>
                      <td className="p-3">Strict mandatory 24-hour pre-debit alert with instant opt-out link.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Retry &amp; Gap Rules</td>
                      <td className="p-3">Max 2 retries after initial hit; at least 3-day cooling period.</td>
                      <td className="p-3">You can pause or revoke in-app before debit to avoid repeat failures.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Bank Bounce Charges</td>
                      <td className="p-3">Heavy inward return fee (₹250 to ₹590+) cut by your bank each time.</td>
                      <td className="p-3">Usually zero bank return fee, though NBFCs may still add loan late fees.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">How to Stop Debits</td>
                      <td className="p-3">Cancel via destination bank NetBanking, app, or branch request.</td>
                      <td className="p-3">Instant pause or revoke inside PhonePe, GPay, Paytm, or BHIM.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If your personal loan uses UPI AutoPay and the NBFC failed to trigger a 24-hour pre-debit alert, cite the RBI E-Mandate Framework directly. For e-NACH personal loans, cite NPCI&apos;s 2-retry cap, 3-day cooling rule, and RBI&apos;s Penal Charges circular.
              </p>
            </section>

            {/* SECTION 6: Section 25 PSS Act & Landmark Court Judgments */}
            <section id="section-25-judgments" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Law &amp; Judicial Precedents</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Section 25 PSS Act &amp; Landmark Court Judgments
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you protest 5 bounces, NBFC agents often threaten arrest under <strong>Section 25 of the Payment and Settlement Systems (PSS) Act, 2007</strong>. You must know the real law so recovery calls cannot scare you.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 25, a bounced NACH or ECS debit for low funds is a criminal offence. It carries up to two years in jail or a fine up to twice the amount. Under Section 25(5), the notice rules of Chapter XVII of the Negotiable Instruments Act also apply.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Still, an NBFC cannot send you to jail over auto-retry bounces. First, the lender must send a written notice within <strong>30 days</strong> of the bounce. Next, it must give you <strong>15 days</strong> to pay. Only after those 15 days can it file a court case within <strong>1 month</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Central Bank of India v. Ravindra (2002)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In <strong>(2002) 1 SCC 367</strong>, a Supreme Court Constitution Bench banned adding penal charges to loan principal. Lenders cannot charge interest on penalties. The Court also held that RBI circulars bind all lenders over loan contracts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>M.S.R. Leathers v. S. Palaniappan (2013)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In <strong>(2013) 1 SCC 177</strong>, the Supreme Court allowed lawful re-presentation of a valid payment instrument. Yet this rule does not let NBFCs break NPCI&apos;s 2-retry cap just to collect extra bounce fees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Section 25 Procedural Scrutiny Cases</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cases like <strong>Vipul Kant Upadhyay v. Standard Chartered Bank (2023:DHC:3757)</strong> and <strong>Sohail Anwar Lone v. Tata Capital (SC, 2025)</strong> confirm strict court checks. Lenders must follow every notice and jurisdiction rule in Section 25 cases.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019 Relief</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 2(11) covers Deficiency in Service, and Section 2(47) covers Unfair Trade Practice. Under both sections, consumer courts order banks and NBFCs to refund wrong NACH fees and pay mental stress damages.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Step-by-Step SOP: Stop Repeats & Claim Refunds */}
            <section id="step-by-step-refund-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Actionable Borrower Playbook</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Step-by-Step SOP: Stop Repeats &amp; Claim Refunds
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six clear steps to stop repeat debits, build rock-solid proof, and force the NBFC to reverse unlawful bounce fees.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Build Your Bounce Evidence Timeline
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your bank statement, NBFC loan statement, and Key Facts Statement (KFS). Highlight every NACH debit date, UMRN mandate number, bank return charge, and NBFC bounce fee in one simple table.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Audit Cooling Gaps &amp; Missing Alerts
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Count how many times the mandate ran in one month. Mark every retry beyond attempt 3, every retry made within 3 days of a bounce, and every debit sent without prior SMS or email notice.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Email the NBFC Grievance Redressal Officer (GRO)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Send a clear written email to the NBFC GRO, not just chat support. Cite NPCI Circulars 007 and 012, RBI Circular RBI/2023-24/53, and RBI KFS rules. Demand reversal of all excess NBFC fees plus reimbursement of your bank return charges.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: File a Parallel Dispute With Your Own Bank
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Write to your savings bank customer care and ask them to log an NPCI NACH dispute (DMS) against the lender&apos;s utility code for repeated same-month debits. Ask your bank for a goodwill or policy waiver on duplicate return fees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Escalate to Principal Nodal Officer (PNO)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the GRO replies with a standard template or ignores your proof for 7 to 14 days, escalate to the NBFC Principal Nodal Officer. Attach your ticket number and warn that you will file an RBI Ombudsman complaint on Day 31.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: File on RBI CMS Portal (cms.rbi.org.in)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the NBFC refuses relief or takes over 30 days, file a free complaint under the RBI Integrated Ombudsman Scheme, 2021. Upload your highlighted PDF timeline, KFS copy, and unanswered GRO emails for a binding refund order.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Can You Cancel a NACH Mandate Without NBFC NOC? */}
            <section id="cancel-nach-without-noc" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Ban className="w-4 h-4 text-[#1886ff]" />
                <span>Destination Bank Mandate Stop Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Can You Cancel a NACH Mandate Without NBFC NOC?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Yes. Under NPCI NACH Mandate Cancellation rules (including NPCI/2022-23/NACH/004 and Master Circular NPCI/2024-25/NACH/001), stopping or cancelling a NACH mandate is strictly the account holder&apos;s right.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Your own bank (the destination bank) cannot reject your cancellation request just because you lack an NOC from the NBFC. You can cancel the mandate through NetBanking, your mobile banking app, or a signed branch letter citing the UMRN number.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once cancelled in NPCI&apos;s Mandate Management System (MMS), your bank must block future debits under that UMRN. If your bank still processes a debit or charges a bounce fee after valid cancellation, your bank is directly liable to refund you.
              </p>
              <div className="rounded-2xl bg-amber-50/70 border border-amber-200/80 p-4 sm:p-5 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-xs sm:text-sm">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <span>Crucial Legal Warning Before Stopping NACH</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                  Cancelling NACH stops the automated debit loop and saves you from bank bounce fees. It does <strong>not</strong> cancel your loan debt. Always inform the NBFC in writing that you are shifting to manual UPI or NEFT payments, or seeking hardship restructuring or settlement.
                </p>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix: GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Timeline</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. 3-Tier Escalation Matrix: GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If customer care refuses to refund excess same-month bounce charges, follow this official three-tier escalation route with exact statutory deadlines.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Level</th>
                      <th className="p-3">Authority to Contact</th>
                      <th className="p-3">Wait Window</th>
                      <th className="p-3">Expected Relief &amp; Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 1: Internal GRO</td>
                      <td className="p-3">NBFC Grievance Redressal Officer &amp; Bank Desk</td>
                      <td className="p-3 font-mono">7 to 14 Days</td>
                      <td className="p-3">Logs formal complaint ID, audits retry count, and reverses excess NBFC fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 2: Head Office PNO</td>
                      <td className="p-3">Principal Nodal Officer (NBFC &amp; Destination Bank)</td>
                      <td className="p-3 font-mono">Up to Day 30</td>
                      <td className="p-3">Overrides branch denials, halts auto-retry scripts, and reimburses bank return charges.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Tier 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">Day 31 Onwards</td>
                      <td className="p-3">Orders full fee refund, stops unfair penal practices, and can award compensation.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Parallel: Consumer Court</td>
                      <td className="p-3">District Consumer Commission (e-Daakhil)</td>
                      <td className="p-3 font-mono">Within 2 Years</td>
                      <td className="p-3">Awards refund, mental agony damages, and legal costs for unfair trade practices.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Common Mistakes & Safe Personal Loan Remedies */}
            <section id="mistakes-and-remedies" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Precautions &amp; Long-Term Debt Solutions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                11. Common Mistakes &amp; Safe Personal Loan Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers facing repeated NACH hits often make small mistakes that weaken their refund claim or trigger deeper debt trouble. Avoid these four common traps.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    Leaving Small Cash in the Linked Bank Account
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Keeping ₹2,000 in an account facing a ₹10,000 NACH debit causes repeated bounces, letting your bank drain that ₹2,000 through return fees. Keep funds separate until you pay directly or cancel the mandate.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    Ignoring EMI Due Date Mismatch With Salary
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your salary arrives on the 7th and your NACH hits on the 2nd, every month starts with a bounce. Request an official EMI date shift in writing to stop permanent bounce cycles.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#1886ff]" />
                    Relying Only on Phone Calls With Agents
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Recovery agents often promise fee waivers verbally so you pay quickly, then never reverse the ledger. Never trust verbal claims. Always send written emails and save ticket numbers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Waiting Too Long During Genuine Financial Hardship
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If job loss or medical costs prevent you from paying EMIs, do not let bounce fees snowball. Request loan restructuring or a formal One-Time Settlement (OTS) to waive penal fees and close the loan cleanly.
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
                Frequently Asked Questions: NACH Bounce Refunds
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers to common borrower questions on repeated same-month NACH presentations, NPCI retry caps, RBI bounce fee refunds, and Section 25 notices.
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
                  <strong>NPCI NACH Debit Return Circulars:</strong> NPCI/2023-24/NACH/007 (August 18, 2023), NPCI/NACH/OC No.010/2023-24 (October 31, 2023), and Master Circular NPCI/NACH/OC No.012/2023-24 (December 29, 2023) on ACH Debit Return Penalties, 2-Retry Limits, and 3-Day Cooling Period.
                </li>
                <li>
                  <strong>NPCI NACH Mandate Cancellation Guidelines:</strong> Circulars including NPCI/2022-23/NACH/004 and Master Circular NPCI/2024-25/NACH/001 affirming customer-initiated mandate cancellation via destination banks.
                </li>
                <li>
                  <strong>Reserve Bank of India Penal Charges Circular:</strong> RBI/2023-24/53 (DoR.MCS.REC.28/01.01.001/2023-24, August 18, 2023) and Extension Circular RBI/2023-24/102 (December 29, 2023), Fair Lending Practice: Penal Charges in Loan Accounts.
                </li>
                <li>
                  <strong>Reserve Bank of India Key Facts Statement Circular:</strong> RBI/2024-25/18 (DoR.STR.REC.13/13.03.00/2024-25, April 15, 2024), Mandatory Disclosure of All Fees and Penal Charges in KFS.
                </li>
                <li>
                  <strong>Payment and Settlement Systems Act, 2007:</strong> Section 25 (Dishonour of Electronic Funds Transfer for Insufficiency of Funds), read with Chapter XVII of the Negotiable Instruments Act, 1881.
                </li>
                <li>
                  <strong>Supreme Court &amp; High Court Precedents:</strong> Central Bank of India v. Ravindra (2002) 1 SCC 367; M.S.R. Leathers v. S. Palaniappan (2013) 1 SCC 177; Vipul Kant Upadhyay v. Standard Chartered Bank (2023:DHC:3757); Sohail Anwar Lone v. Tata Capital Housing Finance (SC, 2025).
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
                  <a href="https://www.npci.org.in/what-we-do/nach/circulars" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>NPCI NACH Circulars Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
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
                  <Link href="/upi-autopay-mandate-pause-vs-revoke-personal-loan-emi" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    UPI AutoPay Pause vs Revoke
                  </Link>
                  <Link href="/stop-auto-debit-ecs-bounce-charges" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Auto-Debit &amp; ECS Bounce Fees
                  </Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 25 NACH Legal Notice Defense
                  </Link>
                  <Link href="/loan-overdue-nach-bounce-immediate-steps" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan Overdue NACH Bounce Steps
                  </Link>
                  <Link href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Fees Missing in KFS
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement Guide
                  </Link>
                  <Link href="/services/nbfc-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    NBFC Loan Settlement Services
                  </Link>
                  <Link href="/can-bank-deduct-money-from-another-account" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Set-Off From Another Account
                  </Link>
                  <Link href="/revoke-account-aggregator-consent-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Revoke Account Aggregator Consent
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Agent Harassment
                  </Link>
                  <Link href="/rbi-circular-on-loan-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Circular on Loan Settlement
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
                Specialist in RBI banking compliance, NBFC personal loan defense, NACH bounce disputes, and structured debt settlements helping Indian borrowers stop unfair penal fees.
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
                  NBFC BOUNCE FEE RELIEF
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  NBFC Hitting Your Mandate Every Few Days?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team audits repeat NACH retries under NPCI and RBI circulars, demands bounce charge refunds, defends Section 25 notices, and negotiates safe loan settlements.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Stop Excess Bounce Fees Now
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
                  <span><strong>NPCI &amp; RBI Audit:</strong> Pinpoints illegal retries and KFS fee breaches.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Formal GRO &amp; Ombudsman Filing:</strong> Complete refund escalation support.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 25 Notice Defense:</strong> Legal reply to NACH dishonour threats.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Clean Loan Settlement:</strong> Waives stacked fees with an official NDC.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/stop-auto-debit-ecs-bounce-charges"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Stop Auto-Debit &amp; ECS Bounce Fees
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Mandate cancellation steps &rarr;</span>
                </Link>

                <Link
                  href="/ecs-nach-bounce-legal-notice-section-25"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 25 NACH Bounce Notice Reply
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">PSS Act defense playbook &rarr;</span>
                </Link>

                <Link
                  href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Personal Loan Fees Missing in KFS
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI KFS refund mandate &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
