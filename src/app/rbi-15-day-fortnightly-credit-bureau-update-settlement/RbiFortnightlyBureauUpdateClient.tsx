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

export default function RbiFortnightlyBureauUpdateClient() {
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
    { id: 'statutory-framework', label: '1. RBI 15-Day Fortnightly Mandate' },
    { id: 'reporting-cycles', label: '2. 15-Day Rule vs 2026 Schedule' },
    { id: 'settlement-math', label: '3. Day-by-Day Update Timeline' },
    { id: 'data-rejection-causes', label: '4. Why Loans Stay Overdue Past 15 Days' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Bureau Update SOP' },
    { id: 'compensation-rights', label: '7. ₹100/Day Delay Payout Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. OTS Payment to Clean Report' },
    { id: 'specialized-scenarios', label: '10. NBFCs, ARCs & Co-Lending Cases' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is the RBI 15-day fortnightly credit bureau reporting rule?',
      a: 'Under RBI circular RBI/2024-25/60 effective January 1, 2025, banks and NBFCs stopped monthly credit updates. Lenders had to send credit data every 15 days, on the 15th and last day of each month. From July 1, 2026, RBI upgraded this to four updates per month.'
    },
    {
      q: 'How fast does a settled personal loan show on CIBIL under RBI rules?',
      a: 'Once your bank closes your OTS ledger and issues an NDC, it reports the closure in the next cycle. Under the 15-day rule, updates took 12 to 27 days. Under the July 2026 four-date rule, most settled loans update on CIBIL within 7 to 14 days.'
    },
    {
      q: 'Does the 15-day clock start on my OTS payment date or NDC date?',
      a: 'The reporting clock starts when your lender marks the loan closed in its core system. If you pay in parts, the update runs only after your last OTS payment clears and the bank issues your No Dues Certificate.'
    },
    {
      q: 'How many days do credit bureaus get to load bank data?',
      a: 'Under the 2025 fortnightly rule, bureaus got 5 calendar days to load data, down from 7 days. Under the July 2026 amendment (RBI/DOR/2025-26/119), bureaus must load files and send error reports within 3 calendar days of receipt.'
    },
    {
      q: 'What changed under the RBI July 2026 credit reporting update?',
      a: 'In December 2025, RBI issued amendment rules effective July 1, 2026. Lenders now report on four dates each month: the 9th, 16th, 23rd, and month-end. Interim files go within 4 days, full month-end files go by the 5th, and bureaus load them in 3 days.'
    },
    {
      q: 'Why is my settled personal loan still showing overdue after 15 days?',
      a: 'Common causes include a slow internal bank closure, a PAN or CKYC error, or a rejected batch file at the bureau. Under RBI rules, the bank must fix rejected rows and resend them by the very next cycle date.'
    },
    {
      q: 'Can I claim ₹100 per day if my settled loan is not updated on time?',
      a: 'Yes. First file a written dispute with your bank and the bureau. Under RBI circular RBI/2023-24/72, they get 30 days in total. The bank gets 21 days and the bureau gets 9 days. Any delay past Day 30 earns ₹100 per day.'
    },
    {
      q: 'How do I receive the ₹100 per day RBI delay payout?',
      a: 'Add your bank account number or UPI ID inside your dispute form. Once a late error is fixed past Day 30, the bank or bureau must send ₹100 per day directly to your account within 5 working days.'
    },
    {
      q: 'Does fortnightly reporting apply to NBFCs, loan apps, and ARCs?',
      a: 'Yes. Every RBI-regulated lender must follow these rules. This covers public banks, private banks, small finance banks, NBFCs, loan app partners, and Asset Reconstruction Companies (ARCs) across all four credit bureaus.'
    },
    {
      q: 'How does CredSettle help fix slow bureau updates after settlement?',
      a: 'CredSettle checks all four credit reports, finds CKYC or NDC gaps, and files clean disputes. Our legal team writes to bank Nodal Officers, files RBI Ombudsman cases, and helps claim ₹100 per day for delays.'
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
            <span>RBI Circular RBI/2024-25/60 &amp; 2026 Reporting Rules</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How Fast Loan Settlement Updates Under 15-Day RBI Rule
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Banks can no longer make you wait 45 to 60 days after a personal loan settlement. Learn the RBI 15-day reporting rule, the faster July 2026 four-date cycle, and how to claim ₹100 per day for delays.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Force Fast Credit Bureau Update</span>
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
                  <span>Credit Report Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Backed by RBI Circulars RBI/2024-25/60, RBI/2023-24/72, and CICRA 2005.
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
                <span>EXECUTIVE BRIEF: RBI 15-DAY BUREAU UPDATE RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">End of 45-Day Waits:</strong> From January 1, 2025, RBI ended monthly credit reporting. All banks and NBFCs began reporting every 15 days on the 15th and month-end.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Faster 2026 Upgrade:</strong> From July 1, 2026, RBI moved to four dates per month (9th, 16th, 23rd, and month-end). Most settled loans now refresh in 7 to 14 days.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">3-Day Bureau Load Rule:</strong> Bureaus cut load time from 5 days in 2025 to 3 calendar days from July 2026. Bureaus also flag slow banks to RBI via DAKSH.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory ₹100/Day Fine:</strong> File a written dispute if your report stays wrong. If it crosses 30 days (21 bank + 9 bureau), you earn ₹100 per day.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Fast Fix for Rejected Rows:</strong> Sometimes a CKYC or PAN mismatch blocks your update. Your lender must fix and resend that row by the next cycle date.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Framework: RBI 15-Day Fortnightly Mandate */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Rules &amp; Legal Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Framework: RBI 15-Day Fortnightly Mandate
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For years, Indian borrowers waited 45 to 60 days for CIBIL to show a loan settlement. Banks only sent credit files once a month. That long gap hurt borrowers who had already paid their dues in full.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To fix this lag, the Reserve Bank of India issued Circular RBI/2024-25/60 on August 8, 2024. The rule took effect on January 1, 2025. It ordered all banks, NBFCs, and ARCs to report credit data every 15 days.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On January 6, 2025, RBI folded this rule into its Credit Information Reporting Master Direction (RBI/DoR/2024-25/125) under Section 11 of CICRA 2005. Every lender must report clean data to all four bureaus. Bureaus must also flag late lenders to RBI on the DAKSH portal twice a year (March 31 and September 30).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                RBI did not stop at 15 days. On December 4, 2025, RBI issued amendment rules (RBI/DOR/2025-26/110, 118, and 119) effective July 1, 2026. Lenders now report four times a month, and bureaus load clean data in just 3 calendar days.
              </p>
            </section>

            {/* SECTION 2: Cut-Off Dates: 15-Day Rule vs 2026 Weekly Schedule */}
            <section id="reporting-cycles" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Cut-Off Dates &amp; Submission Deadlines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Cut-Off Dates: 15-Day Rule vs 2026 Weekly Schedule
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many bank staff still tell borrowers to wait 60 days for a CIBIL update. That claim is outdated and wrong. Under current RBI rules, every settled personal loan moves through a short, fixed cycle.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, the 15-day rule (Jan 2025) cut wait times in half. Lenders had to close data on the 15th and last day of every month. They got 7 calendar days to upload files, and bureaus got 5 calendar days to load them.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, the July 1, 2026 rule moved to four dates: the 9th, 16th, 23rd, and last day of each month. Interim changes go within 4 calendar days. Full month-end files go by the 5th of next month, and bureaus load them within 3 calendar days.
              </p>

              {/* Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Evolution of RBI Credit Bureau Reporting Rules</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Monthly to Weekly Sync</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[560px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Reporting Rule</th>
                        <th className="p-3">Cut-Off Dates</th>
                        <th className="p-3">Bank Upload Limit</th>
                        <th className="p-3">Bureau Load Limit</th>
                        <th className="p-3 text-right">Typical OTS Sync</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Old Monthly Rule (Pre-2025)</td>
                        <td className="p-3">Last day of month</td>
                        <td className="p-3">10 to 15 days</td>
                        <td className="p-3">7 calendar days</td>
                        <td className="p-3 text-right font-bold text-rose-600">35 to 60 Days</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">15-Day Rule (Jan 1, 2025)</td>
                        <td className="p-3 font-mono">15th &amp; Month-End</td>
                        <td className="p-3">7 calendar days</td>
                        <td className="p-3">5 calendar days</td>
                        <td className="p-3 text-right font-bold text-amber-700">12 to 27 Days</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">4-Date Rule (July 1, 2026)</td>
                        <td className="p-3 font-mono text-[#1886ff]">9th, 16th, 23rd, End</td>
                        <td className="p-3 text-[#1886ff]">4 days (5th for End)</td>
                        <td className="p-3 text-[#1886ff]">3 calendar days</td>
                        <td className="p-3 text-right text-[#1886ff]">7 to 14 Days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Settlement Update Timeline: Day-by-Day Calculation */}
            <section id="settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Calendar Math After OTS Payment</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Settlement Update Timeline: Day-by-Day Calculation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Your exact wait time depends on the date your bank closes your loan account. Paying your One-Time Settlement (OTS) sum is step one. The lender must then clear your ledger and issue a No Dues Certificate (NDC).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once the ledger reads zero, your loan joins the very next cut-off batch. Look at how real dates work under both the 15-day rule and the four-date cycle. This table shows when you should check your CIBIL report.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample Personal Loan OTS Reporting Calendar</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Cut-Off + Upload + 3-Day Load</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[560px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Loan Closure / NDC Date</th>
                        <th className="p-3">15-Day Rule Cut-Off</th>
                        <th className="p-3">2026 4-Date Cut-Off</th>
                        <th className="p-3 text-right">Expected Live Bureau Update</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">4th of the Month</td>
                        <td className="p-3 font-mono">15th (by 22nd)</td>
                        <td className="p-3 font-mono text-[#1886ff] font-bold">9th (by 13th)</td>
                        <td className="p-3 text-right font-bold text-emerald-700">16th (12 Days Total)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">12th of the Month</td>
                        <td className="p-3 font-mono">15th (by 22nd)</td>
                        <td className="p-3 font-mono text-[#1886ff] font-bold">16th (by 20th)</td>
                        <td className="p-3 text-right font-bold text-emerald-700">23rd (11 Days Total)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">19th of the Month</td>
                        <td className="p-3 font-mono">30th/31st (by 7th)</td>
                        <td className="p-3 font-mono text-[#1886ff] font-bold">23rd (by 27th)</td>
                        <td className="p-3 text-right font-bold text-emerald-700">30th (11 Days Total)</td>
                      </tr>
                      <tr className="bg-amber-50/60">
                        <td className="p-3 font-medium text-slate-900">26th of the Month</td>
                        <td className="p-3 font-mono">30th/31st (by 7th)</td>
                        <td className="p-3 font-mono text-amber-700 font-bold">Month-End (by 5th)</td>
                        <td className="p-3 text-right font-bold text-amber-800">8th Next Month (13 Days)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Past Day 15 Without Update</td>
                        <td className="p-3 font-mono text-rose-600">Missed Cycle</td>
                        <td className="p-3 font-mono text-rose-600">Reporting Breach</td>
                        <td className="p-3 text-right text-[#1886ff]">File Dispute for ₹100/Day</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Why Settled Loans Still Show Overdue After 15 Days */}
            <section id="data-rejection-causes" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Common Bank Bottlenecks &amp; Rejection Fixes</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Why Settled Loans Still Show Overdue After 15 Days
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers check CIBIL 20 days after settling and still see an active overdue balance. Days Past Due (DPD) may even keep climbing. Three common glitches cause almost every post-settlement lag in India.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, your OTS money may sit in a bank suspense account. Until the recovery team maps the payment and closes your Loan Account Number (LAN), the bank system keeps reporting your loan as unpaid.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, credit bureaus reject bad files on the spot. Under RBI rules, lenders must send your Central KYC (CKYC) number and PAN. If a field fails the check, the bureau sends an error report within 3 days and drops that row.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, banks sometimes fix CIBIL first and forget CRIF High Mark, Equifax, or Experian. Under RBI 2025 amendment rules, the bank must fix rejected rows and resend them by the very next cycle date.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Fields That Must Update After Settlement
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Check four fields on all four reports: Account Status reads Settled (or Post Write-Off Settled), Current Balance is ₹0, Amount Overdue is ₹0, and new monthly DPD marks stop completely.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    What Fast Reporting Does Not Erase
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fast 15-day or weekly reporting stops fresh score drops right away. It does not erase older missed EMIs or turn Settled into Closed unless you pay the waived balance later.
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
                5. Visual Blueprint: Fortnightly Update &amp; Penalty Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This blueprint sums up how your settled personal loan syncs across CIBIL, CRIF High Mark, Equifax, and Experian. Use it to track the 15-day reporting rule and claim your ₹100 daily penalty.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/rbi-15-day-fortnightly-credit-bureau-update-settlement.jpg"
                    alt="RBI 15-Day Fortnightly Credit Bureau Update After Personal Loan Settlement"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Bureau Update Framework • RBI Master Direction Compliant</span>
                  <a
                    href="/images/infographics/rbi-15-day-fortnightly-credit-bureau-update-settlement.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Enforce Fast Bureau Updates */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Enforce Fast Bureau Updates
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six clear steps after paying your personal loan OTS. Doing this ensures fast bureau updates and builds a strong legal record for ₹100 per day compensation.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Collect Your OTS Letter, UTR Slip, and NDC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Save your signed OTS sanction letter and bank UTR payment proof. Ask the bank for your No Dues Certificate (NDC) showing ₹0 overdue balance and the exact loan closure date.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Wait One Complete Reporting Cycle
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Note the next RBI cut-off date after your NDC date (9th, 16th, 23rd, or month-end). Allow 4 days for bank upload and 3 days for bureau loading under 2026 rules. Most reports refresh in 7 to 14 days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Download All 4 Free Full Credit Reports (FFCR)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pull your free annual report from CIBIL, CRIF High Mark, Equifax, and Experian. Check three fields on each report: Account Status, Current Balance (₹0), and Amount Overdue (₹0).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: File Parallel Bank and Bureau Disputes With UPI ID
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If any report still shows overdue past Day 15, raise a dispute online at that bureau and email the bank Grievance Officer. Attach your NDC, PAN, and bank account or UPI ID for compensation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Track the 21-Day Lender and 9-Day Bureau Clocks
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Your written complaint starts the legal 30-day clock. The lender has 21 calendar days to verify and send fixed data. The credit bureau then has 9 calendar days to update your report.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Escalate to RBI Ombudsman on Day 31 for ₹100/Day
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the overdue error remains past 30 days from your dispute date, file a free case on cms.rbi.org.in. Demand instant report rectification and ₹100 per day credited within 5 working days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Borrower Rights: ₹100/Day Delay Compensation Rules */}
            <section id="compensation-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Penalties &amp; Borrower Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Borrower Rights: ₹100/Day Delay Compensation Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI Circular RBI/2023-24/72 (effective April 26, 2024), delayed credit fixes carry a direct cash penalty. If a bank or bureau fails to fix your dispute within 30 calendar days, you earn ₹100 per day.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Liability is split cleanly. If your bank delays past 21 days, the bank pays. If the bank submits on time but the bureau misses Day 30, the bureau pays. Both pay a share if both cause the delay.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>5-Working-Day Automatic Payout Rule</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Once your late dispute is fixed, the bank or bureau must send your ₹100/day sum within 5 working days. Give your bank account or UPI ID inside your complaint so payment is never blocked.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Section 21 CICRA 2005 Right to Fix Errors</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 21 of CICRA 2005 protects every borrower in India. You have the legal right to inspect credit files and demand accurate updates using your bank papers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Mandatory SMS &amp; Email Default Alerts</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI rules require banks to send SMS or email alerts before reporting a new default. Bureaus must also alert you when any lender pulls your report, keeping your file transparent.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Consumer Court Relief Under CPA 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a wrong overdue tag causes job loss or home loan rejection, you can also sue under the Consumer Protection Act, 2019. Courts award extra damages for service failure and mental stress.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do not waste months calling branch helpdesks. If your settled personal loan stays overdue past one reporting cycle, follow this three-tier RBI escalation path.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Response Window</th>
                      <th className="p-3">Action &amp; Relief Granted</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO &amp; CIC</td>
                      <td className="p-3">Bank Grievance Officer &amp; Bureau Desk</td>
                      <td className="p-3 font-mono">7 to 14 Days</td>
                      <td className="p-3">Logs formal dispute ID, checks NDC, and triggers next cycle upload.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO / IO</td>
                      <td className="p-3">Principal Nodal Officer &amp; Internal Ombudsman</td>
                      <td className="p-3 font-mono">Up to Day 21</td>
                      <td className="p-3">Fixes CKYC/PAN rejection errors and sends manual patch across all 4 CICs.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI Integrated Ombudsman (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">Day 31 Onward</td>
                      <td className="p-3">Orders both bank and bureau to fix report and pay ₹100/day penalty.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Milestones: OTS Payment to Clean Report */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Milestones: OTS Payment to Clean Report
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking each milestone helps you spot bank delays early and trigger the ₹100 per day compensation clock without losing time.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Regulatory Phase</th>
                      <th className="p-3">Lender / Bureau Duty</th>
                      <th className="p-3">Your Action Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0</td>
                      <td className="p-3 font-mono text-[11px]">Final OTS Paid</td>
                      <td className="p-3">Closes personal loan ledger and issues signed No Dues Certificate.</td>
                      <td className="p-3">Save UTR receipt, OTS letter, and NDC PDF safely.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 10</td>
                      <td className="p-3 font-mono text-[11px]">Next Cut-Off Cycle</td>
                      <td className="p-3">Captures closure on next date (9th, 16th, 23rd, or end) and uploads file.</td>
                      <td className="p-3">Confirm via email that your LAN status reads closed internally.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 10 to 15</td>
                      <td className="p-3 font-mono text-[11px]">3-Day Ingestion</td>
                      <td className="p-3">CIBIL, CRIF, Equifax, and Experian load files within 3 calendar days (5 days in 2025).</td>
                      <td className="p-3">Pull all four free credit reports and check zero overdue balance.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 16 to 20</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Dispute Trigger</td>
                      <td className="p-3">Missed cycle or rejected row; bank must fix by next reference date.</td>
                      <td className="p-3 font-bold text-amber-800">File formal bank + bureau dispute with NDC and UPI ID.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Dispute Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">21 + 9 Day Window</td>
                      <td className="p-3">Bank gets 21 days to verify; bureau gets 9 days to update CIR.</td>
                      <td className="p-3 font-bold text-slate-900">Escalate to Bank PNO if unresolved past Dispute Day 21.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Dispute Day 31+</td>
                      <td className="p-3 font-mono text-[11px] text-rose-700 font-bold">₹100/Day Penalty</td>
                      <td className="p-3">Liable party owes ₹100 per day, paid within 5 working days of fix.</td>
                      <td className="p-3">File RBI CMS Ombudsman complaint for update and cash payout.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Scenarios: NBFCs, ARCs & Co-Lending */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Personal Loan Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: NBFCs, ARCs &amp; Co-Lending
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Not every personal loan sits with one traditional bank. Here is how the RBI 15-day and 2026 reporting rules work across loan apps, bad banks, and split settlements.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Loan Apps &amp; Co-Lending NBFC Splits
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Many digital personal loans split 80:20 between a bank and an NBFC. Both regulated partners must update your settlement status on the same reporting schedule. A delay by either party triggers the ₹100/day penalty.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Asset Reconstruction Companies (ARCs)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Amendment Direction RBI/DOR/2025-26/118, ARCs follow the exact same reporting rules as banks. After an ARC settlement, both the old bank and the ARC must reflect zero dues without duplicates.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Multi-Installment OTS Settlements
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your OTS spans three monthly installments, the settled status does not trigger on installment one. Partial payments only reduce balance due. The closure tag hits the bureau in the cycle after your final payment clears.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Upgrading Settled Status to Closed Later
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you later pay the waived OTS amount to convert &quot;Settled&quot; into &quot;Closed&quot;, the same fast schedule applies. Get a fresh full-closure NDC and watch the clean &quot;Closed&quot; tag appear within 15 days.
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
                Frequently Asked Questions: Fortnightly Bureau Updates
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers on RBI 15-day credit reporting, the July 2026 four-date cycle, CIBIL ingestion rules, and ₹100 per day compensation claims.
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
                  <strong>RBI Fortnightly Reporting Circular:</strong> RBI/2024-25/60 (DoR.FIN.REC.No.32/20.16.056/2024-25), dated August 8, 2024, Frequency of Reporting of Credit Information by Credit Institutions to CICs (effective January 1, 2025).
                </li>
                <li>
                  <strong>RBI Credit Information Reporting Master Direction:</strong> RBI/DoR/2024-25/125 (DoR.FIN.REC.No.55/20.16.056/2024-25), dated January 6, 2025, issued under Section 11 of CICRA 2005.
                </li>
                <li>
                  <strong>RBI 2025 Amendment Directions (July 2026 4-Date Cycle):</strong> RBI/DOR/2025-26/110 (Commercial Banks), RBI/DOR/2025-26/118 (ARCs), and RBI/DOR/2025-26/119 (CICs), dated December 4, 2025 (effective July 1, 2026; 3-day CIC ingestion and file-level DQI under Paragraph 39).
                </li>
                <li>
                  <strong>RBI Delayed Credit Updation &amp; Alert Rules:</strong> RBI/2023-24/72 (₹100/day penalty after 30 calendar days: 21 days CI + 9 days CIC) and RBI/2023-24/73 (mandatory SMS/email alerts), dated October 26, 2023.
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA) &amp; RB-IOS 2021:</strong> Sections 15 and 21 (Mandatory 4-bureau membership and right to rectification) and RBI Integrated Ombudsman coverage of CICs.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Regulatory &amp; Credit Bureau Portals:</span>
                <div className="flex flex-wrap gap-2">
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
                  <a href="https://www.crifhighmark.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>CRIF High Mark</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.equifax.co.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Equifax India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.experian.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Experian India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/personal-loan-settled-cibil-still-overdue-crif-equifax" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    4-Bureau Settlement Sync Fix
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Letter
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/remove-unauthorized-multiple-cibil-hard-inquiries-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove CIBIL Hard Inquiries
                  </Link>
                  <Link href="/rbi-5000-per-day-delay-compensation-property-documents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹5,000/Day Property Rule
                  </Link>
                  <Link href="/top-up-personal-loan-default-dual-account-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Top-Up Loan Dual Settlement
                  </Link>
                  <Link href="/ibps-bank-job-verification-settled-personal-loan-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Job CIBIL Verification
                  </Link>
                  <Link href="/unknown-nbfc-downloaded-ckyc-record-prevent-loan-fraud" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    CKYC Loan Fraud Protection
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹100/Day CIBIL Compensation
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
                Specialist in personal loan settlements, CICRA 2005 compliance, RBI credit reporting directions, and Ombudsman escalations helping Indian borrowers clear wrong overdue entries fast.
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
                  FAST BUREAU RECTIFICATION
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Settled Loan Still Overdue Past 15 Days?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our team checks all 4 credit reports and sends RBI notices to your lender. We fix CKYC upload errors and claim your ₹100 per day delay penalty.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Fix CIBIL &amp; Claim ₹100/Day
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
                  <span><strong>All 4 Bureaus Audited:</strong> CIBIL, CRIF High Mark, Equifax, and Experian.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>₹100/Day Penalty Claims:</strong> Enforced under RBI/2023-24/72 rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CKYC &amp; NDC Verification:</strong> Stops silent bureau row rejections.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Filing:</strong> Complete online representation at cms.rbi.org.in.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/personal-loan-settled-cibil-still-overdue-crif-equifax"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Loan Settled in CIBIL But Overdue in CRIF
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Sync all 4 credit bureaus &rarr;</span>
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
                  href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI ₹100/Day CIBIL Delay Compensation
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Claim daily bureau delay penalty &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
