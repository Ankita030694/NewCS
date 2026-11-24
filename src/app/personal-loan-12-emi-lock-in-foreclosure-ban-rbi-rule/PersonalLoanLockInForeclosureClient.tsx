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
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  Calendar
} from 'lucide-react';

export default function PersonalLoanLockInForeclosureClient() {
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
    { id: 'statutory-framework', label: '1. RBI Law on 12-EMI Lock-In Periods' },
    { id: 'fixed-vs-floating', label: '2. Fixed vs Floating Lock-In Matrix' },
    { id: 'cost-math-comparison', label: '3. True Cost of a 12-EMI Lock-In' },
    { id: 'kfs-cooling-off-rules', label: '4. KFS Rules & Digital Cooling-Off' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Dispute SOP' },
    { id: 'borrower-rights', label: '7. Unfair Contracts & Consumer Law' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Closure Request to NOC Timeline' },
    { id: 'specialized-scenarios', label: '10. Balance Transfer, Flexi & OTS' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank legally enforce a 12-EMI lock-in on a personal loan in India?',
      a: 'It depends on your loan rate type. For floating-rate personal loans given on or after January 1, 2026, RBI bans all lock-in periods and closure fees. For fixed-rate personal loans, banks can use a 6 to 12 EMI lock-in only if your Key Facts Statement (KFS) states it clearly.'
    },
    {
      q: 'What does RBI Circular RBI/2025-26/64 say about minimum lock-in periods?',
      a: 'The RBI (Pre-payment Charges on Loans) Directions, 2025 took effect on January 1, 2026. It bars banks and NBFCs from charging foreclosure fees or setting any minimum lock-in period on floating-rate personal loans given to individuals for non-business use.'
    },
    {
      q: 'Why do banks like HDFC, ICICI, or Bajaj Finserv still apply a 12-EMI lock-in?',
      a: 'Most retail personal loans in India carry a fixed interest rate, not a floating rate. Because RBI only banned lock-in rules on floating-rate individual loans, lenders still put 6 to 12 EMI lock-in clauses in fixed-rate loan agreements to protect their first-year interest income.'
    },
    {
      q: 'Can I close my personal loan early if the 12-EMI lock-in was not in my KFS?',
      a: 'Yes. Under RBI Circular RBI/2024-25/18 dated April 15, 2024, lenders must list every contingent charge and exit rule in your Key Facts Statement (KFS) before you sign. If a lock-in period or foreclosure fee is missing from your KFS, the lender cannot enforce it later.'
    },
    {
      q: 'Does the RBI digital loan cooling-off period override a 12-EMI lock-in clause?',
      a: 'Yes. Under the RBI Digital Lending Directions, 2025 (RBI/2025-26/36), online loans must offer a cooling-off period of at least one day. Inside this window, you pay only the principal, daily APR interest, and any disclosed processing fee. No lock-in or foreclosure penalty applies.'
    },
    {
      q: 'How much foreclosure fee can a bank charge on a fixed-rate personal loan?',
      a: 'After the lock-in period ends on a fixed-rate personal loan, lenders usually charge 2% to 5% of the remaining principal plus 18% GST. Many banks use a sliding scale, such as 4% in year two, 3% in year three, and 2% after 36 months. The exact rate must match your KFS.'
    },
    {
      q: 'What rule applies to a dual or special rate personal loan?',
      a: 'Under the RBI 2025 Pre-payment Directions, a dual-rate loan that mixes fixed and floating rates depends on the active phase at closure time. If the loan is in its floating-rate phase when you prepay, the lender cannot apply a lock-in period or foreclosure fee.'
    },
    {
      q: 'Can a bank stop a personal loan balance transfer during a lock-in period?',
      a: 'For floating-rate personal loans, RBI bars lock-ins and foreclosure charges regardless of the fund source, including balance transfers from another bank. For fixed-rate loans with a valid KFS lock-in clause, the lender can refuse balance transfer closure until the stated EMIs are paid.'
    },
    {
      q: 'How do I complain if my lender refuses closure or demands hidden foreclosure fees?',
      a: 'First write to the bank Grievance Redressal Officer (GRO) with your KFS and loan agreement attached. Next escalate to the Principal Nodal Officer (PNO). If the lender fails to fix the issue within 30 days, file a free online complaint with the RBI Integrated Ombudsman at cms.rbi.org.in.'
    },
    {
      q: 'How does CredSettle help borrowers facing personal loan lock-in traps or heavy EMIs?',
      a: 'CredSettle checks your Key Facts Statement and loan agreement for RBI breaches. Our team sends formal legal notices to dispute hidden lock-in fees and files RBI Ombudsman claims. If you face real hardship, we also negotiate legal loan settlements.'
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
            <span>RBI Circular RBI/2025-26/64 &amp; KFS Compliance Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can Lenders Block Early Personal Loan Closure for 1 Year?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Learn when a 12-EMI personal loan lock-in is valid and when it breaks Reserve Bank of India law. Understand the 2026 floating-rate ban, Key Facts Statement protections, and how to fight hidden closure fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Dispute Illegal Lock-In Now</span>
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
                  Protected under RBI Circular RBI/2025-26/64, KFS Circular RBI/2024-25/18, and Consumer Law.
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
                <span>EXECUTIVE BRIEF: PERSONAL LOAN 12-EMI LOCK-IN &amp; RBI LAW</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Floating-Rate Lock-In Ban:</strong> RBI Circular RBI/2025-26/64 took effect on January 1, 2026. Banks and NBFCs cannot enforce any lock-in period or foreclosure fee on floating-rate personal loans for individuals.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Fixed-Rate Lock-In Limit:</strong> Lenders may use a 6 to 12 EMI lock-in on fixed-rate personal loans. However, this rule must follow board policy and appear clearly in your Key Facts Statement (KFS).
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Hidden Fee Shield:</strong> Under RBI KFS rules (RBI/2024-25/18), every closure fee must appear in your KFS. Any lock-in or charge missing from that sheet is void and cannot be billed.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Digital Loan Cooling-Off Exit:</strong> Under RBI Digital Lending rules (RBI/2025-26/36), online loans must offer a look-up period of at least one day. You can exit penalty-free during that window.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Fast Refund &amp; Redressal:</strong> Did your bank block valid loan closure or take hidden fees? You can claim a full refund through the RBI Ombudsman or Consumer Court.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: RBI Law on Personal Loan 12-EMI Lock-In Periods */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Central Bank Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Law on Personal Loan 12-EMI Lock-In Periods
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many Indian borrowers get a rude shock when they try to pay off a personal loan early. They save up bonus cash or find a cheaper loan, but the bank says no. Branch staff often quote a strict &quot;12-EMI lock-in period&quot; and refuse to close the loan for one full year.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A lock-in period is a contract rule that stops you from paying off your loan early for a fixed number of months. Lenders love this rule because EMI interest is heaviest in the first year. Forcing you to pay 12 EMIs lets the bank collect a large share of its profit upfront.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To stop unfair exit barriers, the Reserve Bank of India issued the <strong>RBI (Pre-payment Charges on Loans) Directions, 2025</strong> on July 2, 2025. This binding order is Circular <strong>RBI/2025-26/64</strong> (DoR.MCS.REC.38/01.01.001/2025-26). It took effect on <strong>January 1, 2026</strong> for all loans sanctioned or renewed on or after that date.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under this RBI rule, lenders cannot charge any foreclosure fee or set any minimum lock-in period on <strong>floating-rate personal loans</strong> given to individuals for non-business needs. It applies to commercial banks, co-operative banks, and NBFCs. You can close or part-pay a floating-rate loan on any day with zero penalty.
              </p>
            </section>

            {/* SECTION 2: Fixed vs Floating Personal Loans: Lock-In Matrix */}
            <section id="fixed-vs-floating" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Interest Rate Structure &amp; Applicability</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Fixed vs Floating Personal Loans: Lock-In Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Whether your lender can legally enforce a 12-EMI lock-in depends on your interest type and contract date. Most personal loans from private banks and NBFCs use a fixed interest rate. That is why many lenders still enforce lock-in periods on standard retail personal loans.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, even on fixed-rate loans, banks do not have a blank check. Every lock-in rule and fee must follow board policy and appear clearly in your Key Facts Statement. Check your exact loan category in the table below.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[580px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Personal Loan Type</th>
                      <th className="p-3">12-EMI Lock-In Allowed?</th>
                      <th className="p-3">Foreclosure Charge Rule</th>
                      <th className="p-3">Governing RBI Mandate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-emerald-50/40">
                      <td className="p-3 font-bold text-slate-900">Floating-Rate Loan (Individual, Non-Business)</td>
                      <td className="p-3 text-emerald-700 font-bold">Strictly Banned (0 EMIs)</td>
                      <td className="p-3 font-mono font-bold text-emerald-700">₹0 (Part &amp; Full)</td>
                      <td className="p-3">RBI/2025-26/64 (Effective Jan 1, 2026)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Fixed-Rate Personal Loan (With KFS Disclosure)</td>
                      <td className="p-3 text-amber-700 font-semibold">Allowed (Usually 6-12 EMIs)</td>
                      <td className="p-3 font-mono">2% to 5% + 18% GST</td>
                      <td className="p-3">Board Policy + KFS Disclosure Rule</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Fixed-Rate Loan (Missing From KFS)</td>
                      <td className="p-3 text-rose-700 font-bold">Unenforceable / Illegal</td>
                      <td className="p-3 font-mono font-bold text-emerald-700">₹0 (Must Waive)</td>
                      <td className="p-3">RBI KFS Circular (RBI/2024-25/18)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Dual-Rate Loan (Fixed-to-Floating)</td>
                      <td className="p-3">Banned in Floating Phase</td>
                      <td className="p-3">₹0 if Closed While Floating</td>
                      <td className="p-3">RBI/2025-26/64 Dual-Rate Rule</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Digital App Loan (Cooling-Off Window)</td>
                      <td className="p-3 text-emerald-700 font-bold">Overridden by Look-Up</td>
                      <td className="p-3">Principal + Daily APR Only</td>
                      <td className="p-3">RBI Digital Lending (RBI/2025-26/36)</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Lender-Initiated Closure or Recall</td>
                      <td className="p-3 text-emerald-700 font-bold">Not Applicable</td>
                      <td className="p-3 font-mono font-bold text-[#1886ff]">₹0 (Zero Penalty)</td>
                      <td className="p-3">RBI/2025-26/64 Mandatory Waiver</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: Financial Math: True Cost of a 12-EMI Lock-In */}
            <section id="cost-math-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Front-Loaded Interest &amp; Lock-In Cost Ledger</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Financial Math: True Cost of a 12-EMI Lock-In
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Why do major banks and NBFCs fight so hard to keep a 12-EMI lock-in? The real reason lies in reducing-balance EMI math. In the first 12 months of a personal loan, a big slice of every EMI pays interest instead of cutting your principal.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Take a common <strong>₹5,00,000 personal loan</strong> at <strong>14% yearly interest</strong> for <strong>60 months</strong>. Your monthly EMI is <strong>₹11,634</strong>, and total 5-year interest is <strong>₹1,98,048</strong>. Look at how much interest a 12-EMI lock-in extracts in Year 1 alone.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">₹5,00,000 Personal Loan @ 14% p.a. (60 Months, EMI ₹11,634)</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">4% Fee + 18% GST = 4.72%</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Closure Milestone</th>
                        <th className="p-3">Interest Already Paid</th>
                        <th className="p-3">Principal Left</th>
                        <th className="p-3">Fixed Fee (4% + GST)</th>
                        <th className="p-3 text-right">Floating-Rate RBI Fee</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">After Month 3</td>
                        <td className="p-3 font-mono">₹17,296</td>
                        <td className="p-3 font-mono">₹4,82,394</td>
                        <td className="p-3 text-rose-600 font-semibold">Blocked by Lock-In</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">₹0 (Allowed)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">After Month 6</td>
                        <td className="p-3 font-mono">₹33,969</td>
                        <td className="p-3 font-mono">₹4,64,164</td>
                        <td className="p-3 text-rose-600 font-semibold">Blocked by Lock-In</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">₹0 (Allowed)</td>
                      </tr>
                      <tr className="bg-amber-50/50">
                        <td className="p-3 font-bold text-slate-900">After Month 12 (Lock-In Ends)</td>
                        <td className="p-3 font-mono font-bold text-amber-700">₹65,355 (33%)</td>
                        <td className="p-3 font-mono font-bold">₹4,25,746</td>
                        <td className="p-3 font-mono font-bold text-rose-700">₹20,095</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">₹0 (Allowed)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">After Month 24</td>
                        <td className="p-3 font-mono">₹1,19,621 (60%)</td>
                        <td className="p-3 font-mono">₹3,40,402</td>
                        <td className="p-3 font-mono text-amber-700">₹16,067</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">₹0 (Allowed)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">After Month 36</td>
                        <td className="p-3 font-mono text-[#1886ff]">₹1,61,141 (81%)</td>
                        <td className="p-3 font-mono">₹2,42,313</td>
                        <td className="p-3 font-mono text-[#1886ff]">₹11,437</td>
                        <td className="p-3 text-right text-[#1886ff] font-mono">₹0 (Allowed)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Look at Month 12 in that table. You pay <strong>₹65,355</strong> in interest in Year 1, which is <strong>one-third of all 5-year interest</strong>. When the lock-in ends, a 4% plus GST penalty adds another <strong>₹20,095</strong>. Waiting out a 12-EMI lock-in instead of closing at Month 3 on a zero-lock-in loan costs you <strong>₹68,154 extra</strong>.
              </p>
            </section>

            {/* SECTION 4: Key Facts Statement (KFS) & Digital Cooling-Off */}
            <section id="kfs-cooling-off-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Mandatory Disclosures &amp; Exit Windows</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Key Facts Statement (KFS) &amp; Digital Cooling-Off
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even if your personal loan carries a fixed interest rate, two strong RBI rules still protect you from surprise lock-in traps. Always check these two safeguards before paying any foreclosure fee.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, RBI issued the <strong>Key Facts Statement (KFS) Circular</strong> (RBI/2024-25/18) on April 15, 2024. Every bank and NBFC must hand you a simple summary sheet in plain language before you sign a loan. Part 1 of this sheet must clearly list all contingent charges, including foreclosure fees and lock-in conditions.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under this circular, <strong>any charge not mentioned in the KFS cannot be collected from you</strong> at any stage of the loan. Lenders also cannot add a new lock-in period mid-tenure or revive waived charges later. If your KFS leaves the foreclosure row blank or says zero, the bank cannot stop your early closure.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, the <strong>RBI (Digital Lending) Directions, 2025</strong> (RBI/2025-26/36, dated May 8, 2025) give online loan borrowers a mandatory <strong>cooling-off or look-up period</strong>. This exit window must be at least one full day, and many lenders set it at 3 to 7 days. Inside this window, you can cancel the loan by returning only the principal, daily APR interest, and any disclosed one-time processing fee. A 12-EMI lock-in never blocks your cooling-off exit.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Personal Loan Foreclosure Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual reference sums up the RBI foreclosure rules for personal loans. It highlights the zero lock-in shield for floating-rate loans and the mandatory Key Facts Statement checks for fixed-rate borrowers.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/personal-loan-12-emi-lock-in-foreclosure-ban-rbi-rule.jpg"
                    alt="Personal Loan 12-EMI Lock-In Foreclosure Ban and RBI Law Visual Blueprint"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Personal Loan Foreclosure Framework &bull; RBI Circular Compliant</span>
                  <a
                    href="/images/infographics/personal-loan-12-emi-lock-in-foreclosure-ban-rbi-rule.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Challenging a 12-EMI Lock-In */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Challenging a 12-EMI Lock-In
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank or NBFC blocks early loan closure or demands an unlawful foreclosure fee, follow these six simple steps to enforce your rights.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Audit Your Key Facts Statement (KFS) and Sanction Letter
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your KFS, sanction letter, and loan agreement from email or the lender app. Check Part 1 under contingent charges to see if a lock-in period or foreclosure fee is written clearly.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Confirm Fixed, Floating, or Dual Interest Rate Type
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check if your personal loan is linked to a floating rate (like repo rate or MCLR) or a fixed rate. For floating-rate loans sanctioned or renewed on or after January 1, 2026, any lock-in is strictly banned.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Check Cooling-Off Exit or Part-Prepayment Clauses
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you just got a digital loan, invoke the cooling-off period in writing right away. If you are past that window on a fixed-rate loan, check whether partial prepayment is allowed sooner than full closure.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Demand a Written Foreclosure Quote and Fee Breakup
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never rely on phone calls with customer care. Email official support asking for a written foreclosure quote or a written reason why they reject your early payoff. This builds your paper trail.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Send Formal Legal Dispute Citing RBI Circulars
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Write to the Bank Grievance Redressal Officer (GRO) and Principal Nodal Officer (PNO). Cite RBI Circular RBI/2025-26/64 for floating loans or RBI/2024-25/18 if the lock-in was omitted from your KFS.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Escalate to RBI Ombudsman and Collect Your NOC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the lender refuses relief within 30 days, file an online complaint at cms.rbi.org.in. Once your loan closes, collect your No Objection Certificate (NOC) and verify the zero balance on CIBIL within 15 days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Legal Rights: Unfair Contracts & Consumer Courts */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Consumer Protection</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Legal Rights: Unfair Contracts &amp; Consumer Courts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                RBI directions are not your only legal shield. Indian consumer and contract laws also stop lenders from using hidden fine print to trap retail borrowers in high-interest debt.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Individual personal loan borrowers have full rights under Section 2(7) of the Consumer Protection Act, 2019. Consumer courts often cancel unfair closure fees and order lenders to pay back your money with interest.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 2(46), Consumer Protection Act, 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    This section defines an &quot;unfair contract.&quot; One-sided lock-in terms that force heavy exit fees without clear upfront consent can be challenged in State and National Consumer Courts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>RBI Fair Practices Code &amp; No Mid-Term Hikes</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders must give you loan terms in a language you understand. A bank cannot suddenly raise your foreclosure fee or add a new 12-EMI lock-in after disbursing your loan.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Deficiency in Service &amp; Refund With Interest</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Refusing a valid closure payment or charging unlisted fees is a breach of service. Consumer forums order full refunds with 6% to 9% yearly interest plus legal costs.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Section 74, Indian Contract Act, 1872</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Contract law bars windfall penalties disguised as exit fees. Foreclosure charges on fixed-rate loans must reflect reasonable business cost and match disclosed KFS schedules.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Branch staff and call-center agents rarely have the power to waive lock-in clauses. Follow the official three-level RBI complaint path to get a binding decision.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank or NBFC Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Reviews your KFS, checks interest type, and issues a written closure quote.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Audits RBI compliance, waives unlisted fees, and authorizes early account closure.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-GRO</td>
                      <td className="p-3">Passes binding orders on cms.rbi.org.in to allow closure, refund fees, and grant compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline: Closure Request to NOC */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Closure Request to NOC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking each stage keeps your lender on a strict clock and stops extra daily interest from piling up while your dispute runs.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Procedural Stage</th>
                      <th className="p-3">Lender Duty</th>
                      <th className="p-3">Borrower Action Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0</td>
                      <td className="p-3 font-mono text-[11px]">Foreclosure Request</td>
                      <td className="p-3">Logs ticket and shares itemized payoff statement showing principal and charges.</td>
                      <td className="p-3">Save KFS PDF, email foreclosure request, and keep ticket number safe.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 7</td>
                      <td className="p-3 font-mono text-[11px]">KFS &amp; Fee Audit</td>
                      <td className="p-3">Justifies any lock-in or fee with signed KFS proof or waives illegal charges.</td>
                      <td className="p-3">Challenge wrong lock-in rules citing RBI/2025-26/64 or RBI/2024-25/18.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 8 to 20</td>
                      <td className="p-3 font-mono text-[11px]">PNO Escalation</td>
                      <td className="p-3">Head office reviews compliance breach and approves revised zero-penalty closure.</td>
                      <td className="p-3">Send formal reminder to Principal Nodal Officer with full email trail.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 31</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Ombudsman Window</td>
                      <td className="p-3">Becomes liable for regulatory action under RB-IOS 2021 for non-resolution.</td>
                      <td className="p-3 font-bold text-amber-800">File free complaint on cms.rbi.org.in attaching KFS and rejection email.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Closure + 15 Days</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">NOC &amp; CIBIL Sync</td>
                      <td className="p-3">Issues No Dues Certificate and reports Closed status to all 4 credit bureaus.</td>
                      <td className="p-3 font-bold text-slate-900">Cancel e-NACH/UPI AutoPay mandate and verify CIBIL fortnightly update.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Scenarios: Balance Transfer & OTS */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Balance Transfer &amp; OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Real-life personal loans often involve balance transfers, top-ups, flexi overdrafts, or sudden income loss. Here is how RBI lock-in rules work in four common cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Balance Transfer During a Lock-In
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For floating-rate personal loans, RBI bans lock-ins and foreclosure charges regardless of fund source. Your bank cannot block a refinance from another lender. On fixed-rate loans, check if interest savings beat the closure fee plus new processing charges.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Top-Up &amp; Renewed Loans After Jan 2026
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI Circular RBI/2025-26/64 covers all loans sanctioned or renewed on or after January 1, 2026. If you renewed or enhanced an older floating-rate personal loan in 2026, your lender can no longer enforce an old 12-EMI lock-in.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Flexi Hybrid &amp; Overdraft Personal Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For Cash Credit and Overdraft personal facilities, RBI rules state that zero closure fee applies if you give prior notice not to renew and settle the account on its due date. You can also drop drawn balance near zero to cut daily interest.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Financial Hardship &amp; One-Time Settlement
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A 12-EMI lock-in only applies to voluntary early payoff. If you face job loss or a health crisis, you can still ask for EMI relief or a One-Time Settlement (OTS).
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
                Frequently Asked Questions: Personal Loan Lock-In
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Get clear legal answers on personal loan 12-EMI lock-in rules. Learn how RBI 2026 norms, KFS disclosures, and digital cooling-off windows protect you.
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
                  <strong>Reserve Bank of India (Pre-payment Charges on Loans) Directions, 2025:</strong> Circular RBI/2025-26/64 (DoR.MCS.REC.38/01.01.001/2025-26), dated July 2, 2025, effective January 1, 2026.
                </li>
                <li>
                  <strong>Reserve Bank of India Circular on Key Facts Statement (KFS):</strong> Circular RBI/2024-25/18 (DoR.STR.REC.13/13.03.00/2024-25), dated April 15, 2024, on upfront contingent charge disclosure.
                </li>
                <li>
                  <strong>Reserve Bank of India (Digital Lending) Directions, 2025:</strong> Circular RBI/2025-26/36 (DOR.STR.REC.19/21.07.001/2025-26), dated May 8, 2025, Chapter III Paragraph 10 on Cooling-Off Period.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Statutory redressal for deficiency in service, unauthorized foreclosure penalties, and refund orders.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019 &amp; Indian Contract Act, 1872:</strong> Section 2(11) Deficiency of Service, Section 2(46) Unfair Contract, Section 39 Refund Orders, and Section 74 Penal Clauses.
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
                  <a href="https://sachet.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Sachet Compliance Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="http://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Disputes Redressal Commission</span>
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
                  <Link href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Hidden Charges Not in KFS
                  </Link>
                  <Link href="/flat-interest-rate-vs-reducing-apr-personal-loan-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Flat Rate vs Reducing APR Trap
                  </Link>
                  <Link href="/rule-of-78-front-loaded-interest-personal-loan-dispute" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rule of 78 Foreclosure Dispute
                  </Link>
                  <Link href="/rbi-floating-personal-loan-reset-negative-amortization" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Floating Loan Reset Rules
                  </Link>
                  <Link href="/flexi-hybrid-personal-loan-drop-line-overdraft-settle" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Flexi Hybrid Overdraft Loans
                  </Link>
                  <Link href="/bank-refusing-personal-loan-agreement-copy-rbi-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Demand Loan Agreement Copy
                  </Link>
                  <Link href="/personal-loan-agreement-vernacular-language-rbi-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Vernacular Language KFS Rule
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/rbi-15-day-fortnightly-credit-bureau-update-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    15-Day CIBIL Update Rule
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
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
                Expert in Indian banking law, RBI pre-payment rules, and Key Facts Statement audits. He helps retail borrowers challenge unfair bank fees and settle personal loans legally.
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
                  FORECLOSURE DISPUTE SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Blocking Early Loan Closure?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our team checks your KFS and sends legal notices under RBI rules. We help stop unlawful lock-ins, recover unfair closure fees, and get your NOC fast.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Challenge Lock-In &amp; Save Fees
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
                  <span>RBI Compliant &bull; 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>KFS Foreclosure Audit:</strong> Spot missing lock-in disclosures fast.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI 2026 Enforcement:</strong> Zero-fee closure for floating personal loans.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombudsman Filing Support:</strong> End-to-end cms.rbi.org.in escalation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>NOC &amp; CIBIL Closure:</strong> Clean credit update within 15 days.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Hidden Personal Loan Charges Not in KFS
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Claim RBI fee refund &rarr;</span>
                </Link>

                <Link
                  href="/rule-of-78-front-loaded-interest-personal-loan-dispute"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Rule of 78 Front-Loaded Interest Trap
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Challenge foreclosure math &rarr;</span>
                </Link>

                <Link
                  href="/rbi-floating-personal-loan-reset-negative-amortization"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Floating Loan Reset &amp; Tenure Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Borrower rate switch rights &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
