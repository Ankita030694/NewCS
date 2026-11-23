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

export default function IbpsBankJobSettledLoanClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Quick Answer' },
    { id: 'ibps-sbi-rules', label: '1. IBPS & SBI Credit History Rules' },
    { id: 'settled-vs-closed', label: '2. Settled vs Closed on CIBIL' },
    { id: 'bank-wise-matrix', label: '3. Bank-Wise CIBIL Policy Matrix' },
    { id: 'high-court-precedent', label: '4. Madras High Court SBI Ruling' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Fix Settled Loan Before DV' },
    { id: 'statutory-rights', label: '7. CICRA 2005 & RBI Update Laws' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'joining-timeline', label: '9. Result to Joining Timeline' },
    { id: 'common-mistakes', label: '10. Mistakes & Special Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can I get selected in IBPS PO or Clerk with a settled personal loan?',
      a: 'Yes, you can write IBPS Prelims, Mains, and Interviews with a settled loan. Banks check your CIBIL report only at joining. You will need zero unpaid dues, an updated report, or a signed lender NOC to join smoothly.'
    },
    {
      q: 'What is the minimum CIBIL score needed for IBPS bank joining?',
      a: 'IBPS rules say you must keep a clean credit record as per your allotted bank policy. Many public banks use 650 as a base score. If you never took a loan or card, you do not need a score.'
    },
    {
      q: 'Does an NOC from a settled personal loan always guarantee bank joining?',
      a: 'No, not in every case. An NOC proves you owe zero money today, which helps under IBPS rules. Still, some bank notices bar past defaults or write-offs. Paying the waived balance to mark the loan Closed is much safer.'
    },
    {
      q: 'Did SBI remove the CIBIL score clause for SBI PO recruitment?',
      a: 'Yes. On July 1, 2026, SBI issued a notice (Advt. No. CRPD/PO/2026-27/09) dropping the CIBIL score rule for SBI PO 2026-27. Still, always read the latest notice for SBI Clerk, SBI CBO, and other bank posts.'
    },
    {
      q: 'What did the Madras High Court decide in P. Karthikeyan v. SBI?',
      a: 'On June 2, 2025, the Madras High Court backed SBI in cancelling a CBO job offer under Clause 1(E). The court said bank staff handle public funds. Paying old dues later does not erase a past default bar.'
    },
    {
      q: 'How do I convert a Settled personal loan status to Closed before DV?',
      a: 'Ask your old lender in writing for the waived balance amount. Pay that sum in full through bank transfer. Collect a fresh No Dues Certificate (NDC) and make sure the bank reports Closed status to all four bureaus.'
    },
    {
      q: 'How fast does CIBIL update after I close my settled personal loan?',
      a: 'Under RBI Circular RBI/2024-25/60 (from January 1, 2025), banks must send credit data every 15 days. They report as of the 15th and last day of each month within 7 days. Most updates now show in 15 to 25 days.'
    },
    {
      q: 'What if the bank delays updating my CIBIL report before my joining date?',
      a: 'Under CICRA 2005 Section 21(3) and RBI Circular RBI/2023-24/72, lenders and bureaus must fix disputes within 30 days. The bank gets 21 days and the bureau gets 9 days. Any extra delay earns you ₹100 per day.'
    },
    {
      q: 'Are private banks like HDFC and ICICI stricter than IBPS PSU banks?',
      a: 'Yes. Private banks run strict background checks on full credit reports for on-roll roles. A Settled or Written-Off tag often puts your offer on hold. Upgrading the loan to Closed before joining clears that block.'
    },
    {
      q: 'How does CredSettle help bank job candidates clear CIBIL verification?',
      a: 'CredSettle checks all four credit reports and talks to bank Nodal Officers for you. We help change Settled loans to Closed, get clean NDC letters, file CICRA disputes, and push fast RBI Ombudsman action before DV.'
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
            <span>IBPS &amp; Banking Recruitment CIBIL Rules Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Clear Banking Recruitment CIBIL Rules With Loan NOC
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Cleared IBPS PO, Clerk, RRB, or a bank exam with a settled personal loan? Learn the exact CIBIL rules, court orders, and how to fix your credit file before joining.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Pre-Joining CIBIL Audit</span>
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
                  <span>Bank Candidate Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Backed by CICRA 2005 Section 21(3), RBI 15-Day Updates, and ₹100/day delay rules.
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
                <span>EXECUTIVE BRIEF: IBPS &amp; BANK JOB CIBIL CHECK RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No CIBIL Bar for Exams:</strong> You can sit for IBPS PO, Clerk, SO, RRB, and SBI exams with a settled loan. Banks check CIBIL only at joining.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">IBPS NOC Relief Rule:</strong> IBPS wants a clean credit history at joining. If CIBIL is stale, you can show a signed lender NOC proving zero dues.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Why Settled Is Risky:</strong> Settled means the bank waived part of your debt. Many HR teams flag Settled accounts until you mark them Closed.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">SBI 2026 Policy Shift:</strong> SBI dropped the CIBIL rule on July 1, 2026 for SBI PO. Still, strict rules remain for IBPS banks, private banks, and SBI CBO.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Fast RBI 15-Day Updates:</strong> Since January 1, 2025, banks must update credit bureaus every 15 days. If they delay a fix past 30 days, you earn ₹100 per day.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1 */}
            <section id="ibps-sbi-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Official Exam Notices &amp; Joining Clauses</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. IBPS &amp; SBI Credit History Rules for Bank Selection
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many job seekers fear an old settled personal loan will block their bank exam form. That is not true. You do not need a CIBIL score to apply for IBPS PO, Clerk, SO, or RRB exams.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Your credit check starts only after you clear the exam and get a bank seat. At that stage, the allotted bank runs Document Verification (DV) and background checks before you join.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Official IBPS notices include a clear Credit History clause with two rules. First, you must hold a healthy credit history when you join the bank. Each bank sets its own score cutoff, and many PSU banks use 650 as a base mark.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, what if your CIBIL report has not updated before your joining date? You must either get the report updated or bring a No Objection Certificate (NOC) from the lender. That letter must confirm zero unpaid dues on the flagged loan. Without it, the bank can cancel your job offer.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Students who never took a loan or credit card are exempt from the CIBIL score rule. Having no credit file is never treated as a bad record.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="settled-vs-closed" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Report Tags &amp; HR Screening</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Settled vs Closed Loan: How Bank HR Reads CIBIL
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The exact tag on your credit report matters a lot at bank joining. Many people think a One-Time Settlement (OTS) clears their CIBIL file fully. In fact, banks view Settled and Closed in very different ways.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A <strong>Closed</strong> tag means you paid the full loan and interest on time or in full. Bank HR teams treat a Closed loan as clean and safe.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A <strong>Settled</strong> tag means the lender took a lower sum and wrote off the rest. Your balance drops to zero, yet the Settled remark stays on your file for up to seven years.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Bank staff handle public cash every day. Because of this, HR teams see Settled or Post Write-Off Settled (PWOS) tags as a red flag. Strict banks can hold your offer until you{' '}
                <Link
                  href="/convert-settled-status-to-closed"
                  className="text-[#1886ff] font-semibold hover:underline"
                >
                  convert your settled status to closed
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Closed Status (Zero Risk)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Shows you paid the full debt with zero loss to the bank. Passes IBPS, PSU, RBI, and private bank checks with no extra questions.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Settled Status (Moderate to High Risk)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Shows zero current balance but records a waiver. Some IBPS banks accept a clean NOC. Stricter HR teams ask for full loan closure first.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Written-Off or PWOS (Severe Risk)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Marks a past default that the lender wrote off as a loss. This carries a high risk of offer cancellation under strict rules like SBI CBO Clause 1(E).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <UserCheck className="w-4 h-4" />
                    <span>No Credit History / Score -1 (Safe)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Means you never used a loan or credit card. IBPS rules exempt fresh candidates with no credit file from any score cutoff.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="bank-wise-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Policy Comparison Across Indian Banks</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Bank-Wise CIBIL Rules: IBPS, SBI, RBI &amp; Private
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit rules are not the same at every Indian bank. For example, State Bank of India issued a corrigendum on July 1, 2026. That notice dropped the CIBIL clause for SBI PO 2026-27 (Advt. No. CRPD/PO/2026-27/09).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, that SBI update does not change IBPS Participating Banks, RRBs, or private banks. Always check the exact job notice for your exam year. The table below compares how each bank group handles a settled loan.
              </p>

              {/* Comparison Table Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Banking Sector CIBIL &amp; Settled Loan Screening Matrix</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Verified Joining Rules</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[580px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Recruiting Body / Bank</th>
                        <th className="p-3">CIBIL Score Rule</th>
                        <th className="p-3">Settled Loan Impact</th>
                        <th className="p-3">Safest Action Before DV</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">IBPS PO, Clerk &amp; SO (PSU Banks)</td>
                        <td className="p-3">Clean history per bank policy (often 650+)</td>
                        <td className="p-3 text-amber-700 font-semibold">Needs NOC or updated credit report</td>
                        <td className="p-3">Bring lender NOC and change Settled to Closed if time allows.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">IBPS RRB (Regional Rural Banks)</td>
                        <td className="p-3">Healthy credit record at joining date</td>
                        <td className="p-3 text-amber-700 font-semibold">Bad marks need NOC or fresh update</td>
                        <td className="p-3">Pay any pending dues and bring original lender NDC to DV.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">SBI PO (2026-27 Corrigendum)</td>
                        <td className="p-3 text-emerald-700 font-semibold">CIBIL clause dropped on July 1, 2026</td>
                        <td className="p-3 text-emerald-700 font-semibold">Not a hiring bar for PO 2026-27</td>
                        <td className="p-3">Check active yearly notice and keep police checks clean.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">SBI CBO &amp; Specialist Roles</td>
                        <td className="p-3 text-rose-700 font-semibold">Strict Clause 1(E) credit review</td>
                        <td className="p-3 text-rose-700 font-semibold">High rejection risk for past defaults</td>
                        <td className="p-3">Close accounts well before applying. Do not quit early.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">RBI Grade B &amp; Regulatory Roles</td>
                        <td className="p-3">Strict background and conduct checks</td>
                        <td className="p-3 text-amber-700 font-semibold">Triggers deeper HR compliance review</td>
                        <td className="p-3">Upgrade to Closed and keep a clear hardship note ready.</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-medium text-slate-900">
                        <td className="p-3 font-bold">Private Banks (HDFC, ICICI, Axis)</td>
                        <td className="p-3 font-semibold text-[#1886ff]">Internal cutoffs (often 650 to 700+)</td>
                        <td className="p-3 font-bold text-rose-700">BGV red flag for on-roll roles</td>
                        <td className="p-3 font-semibold">Pay waived sum, collect clean NDC, and update all 4 bureaus.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="high-court-precedent" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Landmark Indian Court Ruling</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. High Court Precedent: P. Karthikeyan vs SBI Ruling
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every bank job seeker with past loan trouble must know a key Madras High Court order. It is <strong>P. Karthikeyan v. The General Manager, State Bank of India</strong> (W.P. No. 11122 of 2021, decided June 2, 2025, 2025 SCC OnLine Mad 3238).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In this case, the candidate passed every round of the SBI Circle Based Officer (CBO) exam and medical test. SBI sent him a job offer on March 12, 2021. Trusting that letter, he quit his old job at HDFC Bank.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Next, SBI checked his CIBIL report. The file showed past loan defaults, late credit card bills, and written-off accounts. On April 9, 2021, SBI cancelled his job offer under Clause 1(E) of the job notice.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The candidate went to court under Article 226 of the Constitution. He showed that he had paid off his old dues and held NOC letters before the offer date. Justice N. Mala dismissed his case and backed SBI.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The court ruled that bank staff look after public money, so strict money discipline is a must. When a job notice bars a history of default, paying dues later does not erase that bar. Courts will not strike down fair bank hiring rules.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Clearing Bank DV With Loan NOC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual guide shows the key papers you need for bank joining checks. Pairing a clean lender NOC with the RBI 15-day update rule protects your job offer.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/ibps-bank-job-verification-settled-personal-loan-cibil.jpg"
                    alt="IBPS and Bank Job CIBIL Verification Rules With Settled Personal Loan NOC Blueprint"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Banking Recruitment CIBIL Clearance Framework • CICRA &amp; RBI Compliant</span>
                  <a
                    href="/images/infographics/ibps-bank-job-verification-settled-personal-loan-cibil.jpg"
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

            {/* SECTION 6: Step-by-Step SOP */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Action Plan</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Fix Settled Loan Before Joining
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Start these six steps as soon as you clear Mains or get an interview call. Waiting until the final joining week gives bureaus too little time to update your file.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Pull Reports From All Four Credit Bureaus
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your full credit file from CIBIL, Experian, Equifax, and CRIF High Mark. Check the exact account tag, balance, overdue sum, and write-off status on each loan.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Ask for a Written Closure Quote
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Write to your old lender or NBFC Nodal Officer to pay the waived settlement balance. Ask for a signed letter showing the exact balance and promising a Closed report update.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Pay Online and Collect a Clean NDC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pay only to the official loan account via NEFT, RTGS, or IMPS. Collect a signed{' '}
                    <Link
                      href="/get-noc-after-loan-settlement"
                      className="text-[#1886ff] font-semibold hover:underline"
                    >
                      No Dues Certificate (NDC) or NOC
                    </Link>{' '}
                    on bank letterhead showing your loan number, zero balance, and full closure.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Track the RBI 15-Day Update Cycle
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Banks must report credit data on the 15th and last day of each month within seven days. Pull a fresh CIBIL report after the next cycle to confirm the Closed tag appears.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Raise a Formal Dispute If Stale
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank does not update your file, log a{' '}
                    <Link
                      href="/cibil-dispute-wrong-overdue-entry-filing-process"
                      className="text-[#1886ff] font-semibold hover:underline"
                    >
                      CIBIL dispute with your NDC copy
                    </Link>
                    . Cite Section 21(3) of CICRA 2005 and save your ticket number for bank HR.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Carry a Complete DV Proof Folder
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Bring original NOC letters, bank payment proofs, fresh CIBIL printouts, and email logs to DV. Always answer HR honestly, because hiding facts leads to instant rejection.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Rights */}
            <section id="statutory-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Legal Rights &amp; RBI Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Rights: CICRA 2005 &amp; RBI Update Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Some candidates lose a job offer only because an old bank fails to update CIBIL after closure. Indian law gives you strong tools to force a fast fix and claim daily payouts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>CICRA 2005 Section 21(3) Right to Fix</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 21(3) of the Credit Information Companies (Regulation) Act, 2005 gives you the right to fix wrong data. The lender and bureau must update your file within 30 days once the bank confirms the truth.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Clock className="w-4 h-4" />
                    <span>RBI 15-Day Credit Reporting Rule</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI Circular RBI/2024-25/60 (active from January 1, 2025) ended slow monthly updates. Banks must send fresh credit data as of the 15th and last day of each month within 7 days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <DollarSign className="w-4 h-4" />
                    <span>RBI ₹100 Per Day Delay Payout</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Circular RBI/2023-24/72, a credit dispute must close within 30 days (21 days for the bank, 9 days for the bureau). Any extra delay entitles you to{' '}
                    <Link
                      href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update"
                      className="text-[#1886ff] font-semibold hover:underline"
                    >
                      ₹100 per day in compensation
                    </Link>
                    .
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>Direct Bank Credit in 5 Working Days</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Once a delayed CIBIL case closes, the bank or bureau must pay the ₹100 daily fine straight into your bank account within 5 working days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Complaint Escalation Path</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Lender to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your old bank refuses to issue an NDC or ignores your CIBIL update, act fast. Use this official three-step complaint path.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Time Limit</th>
                      <th className="p-3">Relief You Can Expect</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO &amp; CIC Portal</td>
                      <td className="p-3">Lender Grievance Officer + CIBIL Dispute</td>
                      <td className="p-3 font-mono">Up to 21 Days (Bank)</td>
                      <td className="p-3">Issues signed NDC, checks zero ledger dues, and sends fresh data to all 4 bureaus.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: Bank PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">Day 22 to Day 30</td>
                      <td className="p-3">Pushes urgent bureau upload before DV and starts the 9-day bureau update clock.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI Integrated Ombudsman (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">After 30 Days</td>
                      <td className="p-3">Issues a binding order under RB-IOS 2021 to fix your file and pay ₹100 per day.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline */}
            <section id="joining-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Candidate Action Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Joining Timeline: Exam Result to CIBIL Clearance
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Good timing decides if your CIBIL report clears before DV. Follow this timeline across your IBPS or bank exam stages.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Exam Stage</th>
                      <th className="p-3">Time Left</th>
                      <th className="p-3">Credit Risk Stage</th>
                      <th className="p-3">Smart Candidate Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Prelims &amp; Mains Prep</td>
                      <td className="p-3 font-mono text-[11px]">4 to 6 Months</td>
                      <td className="p-3">No CIBIL check yet</td>
                      <td className="p-3">Pull all 4 bureau reports and save funds to pay any waived loan balance.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Mains Cleared / Interview</td>
                      <td className="p-3 font-mono text-[11px]">60 to 90 Days</td>
                      <td className="p-3">Best closure window</td>
                      <td className="p-3">Pay waived principal, get a signed NDC, and track the 15-day bureau update.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Provisional Allotment</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">30 to 45 Days</td>
                      <td className="p-3 font-bold text-amber-800">High Priority Stage</td>
                      <td className="p-3">Check fresh CIBIL PDF. File a CICRA Section 21(3) dispute at once if stale.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">DV &amp; Joining Letter</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">7 to 15 Days</td>
                      <td className="p-3 font-bold text-slate-900">Active HR Check</td>
                      <td className="p-3">Submit original NOC, payment slips, and fresh CIBIL copy. Hold off quitting old job.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Joining Extension Request</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">If Bank Delays</td>
                      <td className="p-3">HR short hold</td>
                      <td className="p-3">Ask HR for a brief joining extension using your RBI CMS ticket until CIBIL syncs.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Common Mistakes & Special Scenarios */}
            <section id="common-mistakes" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Candidate Precautions &amp; Edge Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Common Mistakes &amp; Special Bank Job Scenarios
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many offer losses happen from simple mistakes or hidden credit entries. Watch out for these four traps before your joining check.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    Quitting Your Current Job Too Early
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    As seen in P. Karthikeyan v. SBI, quitting early can leave you with no job at all. Wait until bank HR confirms your DV and credit check are clean.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    Checking Only CIBIL &amp; Skipping Other Bureaus
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Some banks pull Experian, Equifax, or CRIF High Mark instead of CIBIL. A loan fixed on CIBIL may still show Overdue on another bureau if you skip checking all four.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Co-Borrower or Guarantor Loan Defaults
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you co-signed a family loan that turned overdue or settled, it also sits on your credit file. Collect a clean NOC for co-signed loans too before DV.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    Settling With the Same Allotted Bank
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    What if you settled a loan with the same bank that later picks you via IBPS? That bank keeps internal defaulter logs even after CIBIL updates. Pay the waived sum early to clear your name.
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
                Frequently Asked Questions: Bank Job &amp; Settled Loan
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Simple, direct answers to common questions on IBPS jobs, SBI CIBIL rules, NOC letters, and closing a settled personal loan before DV.
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
                  <strong>IBPS Common Recruitment Process (CRP) Notifications:</strong> Standard Credit History Clause requiring healthy credit history at joining, updated credit status, or lender No Objection Certificate (NOC).
                </li>
                <li>
                  <strong>Madras High Court Precedent:</strong> P. Karthikeyan v. The General Manager, State Bank of India &amp; Ors., W.P. No. 11122 of 2021, decided June 2, 2025 (2025 SCC OnLine Mad 3238).
                </li>
                <li>
                  <strong>SBI Official Recruitment Corrigendum:</strong> Corrigendum dated July 1, 2026 to Advt. No. CRPD/PO/2026-27/09 removing the CIBIL score clause for SBI PO 2026-27 recruitment.
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Section 21(3), Statutory Right to Request Updation and Rectification of Credit Information Within 30 Days.
                </li>
                <li>
                  <strong>Reserve Bank of India Circular (Fortnightly Reporting):</strong> RBI/2024-25/60 (DoR.FIN.REC.No.32/20.16.056/2024-25), dated August 8, 2024, effective January 1, 2025.
                </li>
                <li>
                  <strong>Reserve Bank of India Circular (Delay Compensation):</strong> RBI/2023-24/72 (DoR.FIN.REC.48/20.16.003/2023-24), dated October 26, 2023, mandating ₹100 per calendar day compensation beyond 30 days.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.ibps.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>IBPS Official Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://sbi.co.in/web/careers" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>SBI Official Careers</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code (CICRA 2005)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After Settlement
                  </Link>
                  <Link href="/does-loan-settlement-affect-government-job" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Settlement &amp; Government Jobs
                  </Link>
                  <Link href="/does-settled-loan-npa-affect-government-job-verification" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    NPA &amp; Police Verification
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹100/Day CIBIL Penalty
                  </Link>
                  <Link href="/cibil-dispute-wrong-overdue-entry-filing-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    File CIBIL Overdue Dispute
                  </Link>
                  <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL After Settlement
                  </Link>
                  <Link href="/loan-written-off-vs-settled-cibil-impact" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Written-Off vs Settled Impact
                  </Link>
                  <Link href="/background-verification-for-it-job-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    IT Job BGV &amp; Loan Default
                  </Link>
                  <Link href="/legal-help-for-non-closure-of-settled-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Non-Closure of Settled Loan
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
                Helps bank job seekers fix CIBIL files under CICRA 2005, clear settled loans with lenders, and pass IBPS and bank checks on time.
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
                  PRE-JOINING CIBIL CLEARANCE
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Cleared IBPS With a Settled Loan?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team helps upgrade Settled loans to Closed with Bank Nodal Officers, get clean NDCs, and enforce RBI 15-day updates before DV.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Clear Your CIBIL Before DV
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
                  <span>CICRA 2005 Compliant • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>4-Bureau Audit:</strong> Complete scan of CIBIL, Experian, Equifax, and CRIF.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Settled-to-Closed Support:</strong> Direct Nodal Officer closure &amp; NDC recovery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI 15-Day Follow-Up:</strong> Enforce fortnightly reporting before joining.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombudsman Escalation:</strong> Recover ₹100/day for unlawful update delays.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Status to Closed
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full closure &amp; NDC steps &rarr;</span>
                </Link>

                <Link
                  href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI ₹100/Day CIBIL Update Penalty
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Claim delayed rectification dues &rarr;</span>
                </Link>

                <Link
                  href="/does-loan-settlement-affect-government-job"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Loan Settlement &amp; Government Jobs
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">UPSC, SSC &amp; CCS conduct rules &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
