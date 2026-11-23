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

export default function PersonalLoanSettledCibilOverdueCrifEquifaxClient() {
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
    { id: 'why-mismatch-happens', label: '1. Why CIBIL Differs From CRIF & Equifax' },
    { id: 'legal-framework', label: '2. CICRA 2005 & RBI 4-Bureau Rules' },
    { id: 'rbi-penalty-rules', label: '3. RBI 15-Day Rule & Rs 100/Day Fine' },
    { id: 'bureau-comparison', label: '4. All 4 Credit Bureaus Comparison' },
    { id: 'visual-blueprint', label: '5. Visual 4-Bureau Sync Blueprint' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step CRIF & Equifax Fix' },
    { id: 'court-precedents', label: '7. Court Rulings & Consumer Relief' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. NOC to 4-Bureau Sync Timeline' },
    { id: 'specialized-scenarios', label: '10. NBFCs, ARCs & Co-Lending Gaps' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Why does my settled loan show updated in CIBIL but still overdue in CRIF and Equifax?',
      a: 'The four bureaus in India do not share live data with each other. Your bank sends a separate file to CIBIL, CRIF High Mark, Equifax, and Experian. A missed upload or wrong code leaves CRIF or Equifax stuck on old overdue dues.'
    },
    {
      q: 'Must banks and NBFCs update all four credit bureaus in India?',
      a: 'Yes. Under CICRA 2005 and RBI 2015 circulars (RBI/2014-15/405 and RBI/2014-15/458), every bank and NBFC must join all four bureaus. Lenders must send the same clean data to CIBIL, CRIF High Mark, Equifax, and Experian.'
    },
    {
      q: 'How fast must a lender report my loan settlement to CRIF and Equifax?',
      a: 'Under RBI rules, lenders moved to 15-day reporting in 2025 and four monthly update dates (9th, 16th, 23rd, and month-end) from July 1, 2026. Once you pay your OTS sum and get your NDC, all four reports should show zero overdue within 10 to 15 days.'
    },
    {
      q: 'Can I claim Rs 100 per day for a delayed CRIF or Equifax fix?',
      a: 'Yes. Under RBI circular RBI/2023-24/72 dated October 26, 2023, your bank and bureau get 30 days in total to fix a dispute. That gives 21 days to the bank and 9 days to the bureau. Any delay past 30 days earns Rs 100 per day.'
    },
    {
      q: 'Can I claim Rs 100 per day on both CRIF High Mark and Equifax at once?',
      a: 'Yes. Each bureau keeps its own report and its own dispute ID. If you file formal disputes with both CRIF and Equifax, and both cross 30 days, the party at fault must pay Rs 100 per day on each late dispute.'
    },
    {
      q: 'Do I have to pay to check my CRIF High Mark, Equifax, and Experian reports?',
      a: 'No. RBI rules give every person in India one Free Full Credit Report each year from all four bureaus. You can pull all four reports online with your PAN and mobile OTP.'
    },
    {
      q: 'What papers do I need to fix a CRIF or Equifax overdue error?',
      a: 'Keep four files ready: your OTS letter, your No Dues Certificate (NDC), your UTR bank receipts, and your PAN card. Add the page from your CIBIL report that shows zero overdue.'
    },
    {
      q: 'Can CRIF or Equifax fix my loan status on their own with my NOC?',
      a: 'No. Under Section 21 of CICRA 2005, a bureau cannot change loan data on its own. It sends your NOC to your bank or NBFC. Your bank must confirm the fix within 21 days.'
    },
    {
      q: 'What if my bank ignores my CRIF and Equifax emails for 30 days?',
      a: 'Write to the bank Principal Nodal Officer right away. If the error stays open past Day 30 from your first complaint, file a case on cms.rbi.org.in. The RBI Ombudsman can order a fast fix and Rs 100 per day.'
    },
    {
      q: 'How does CredSettle help fix wrong overdue marks across all four bureaus?',
      a: 'CredSettle checks all four reports side by side. Our team files clean disputes on CIBIL, CRIF, Equifax, and Experian, writes to bank Nodal Officers, and handles RBI Ombudsman filings for you.'
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
            <span>RBI 4-Bureau Reporting Rules &amp; Rs 100/Day Payout</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Sync Personal Loan Closure Across All 4 Credit Bureaus
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did your settled personal loan update in CIBIL, while CRIF, Equifax, or Experian still show it overdue? Learn the RBI 15-day rule, fix all four reports fast, and claim Rs 100 per day for delays.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Fix All 4 Bureau Reports Now</span>
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
                  <span>4-Bureau Legal Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Backed by CICRA 2005, RBI Circular RBI/2023-24/72, and RBI 15-day reporting rules.
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
                <span>QUICK ANSWER: FIXING CRIF, EQUIFAX &amp; EXPERIAN OVERDUE ERRORS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Auto-Sync Between Bureaus:</strong> CIBIL, CRIF High Mark, Equifax, and Experian run separate systems. Fixing CIBIL does not auto-fix the other three reports.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory 4-Bureau Duty:</strong> RBI rules require every bank and NBFC to send the same clean update to all four bureaus, not just CIBIL.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">15-Day Reporting Cycle:</strong> Under RBI rules, lenders must send fresh loan data every 15 days. Long 90-day delays are no longer valid.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Rs 100 Per Day Payout:</strong> Under RBI circular RBI/2023-24/72, any dispute left open past 30 days (21 days bank + 9 days bureau) earns Rs 100 per day.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Overdue Must Show:</strong> Once settled, every report must show Rs 0 overdue and stop adding new Days Past Due (DPD) marks.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1 */}
            <section id="why-mismatch-happens" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Why Reports Do Not Match</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Why Loans Show Settled in CIBIL But Overdue Elsewhere
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers settle a personal loan and check only their CIBIL report. CIBIL shows Settled with zero due. Months later, a new bank or app rejects their loan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Why did that happen? The new lender checked CRIF High Mark, Equifax, or Experian instead of CIBIL. On those reports, the old loan still shows open and overdue.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                India has four licensed Credit Information Companies (CICs). They are rivals and do not share live data with each other. Your bank must send four separate data files.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                After a One-Time Settlement (OTS), bank teams often update CIBIL first. A missed upload, bad file format, or manual error leaves CRIF and Equifax stuck on old default rows.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    Silent File Upload Errors
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Each bureau checks files for exact fields. If your bank sends a wrong PAN or date of birth, CRIF or Equifax drops that row. Your old overdue stays live.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    CIBIL-Only Manual Fixes
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you raise a dispute only on CIBIL, the bank fixes only CIBIL. Staff forget to send that same update to CRIF High Mark, Equifax, and Experian.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 2 */}
            <section id="legal-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Indian Laws &amp; RBI Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Legal Framework: CICRA 2005 and RBI 4-Bureau Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A bank cannot say its job ends after fixing CIBIL. Credit reporting in India falls under the Credit Information Companies (Regulation) Act, 2005 (CICRA) and strict RBI rules.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Years ago, Section 15 of CICRA asked lenders to join at least one bureau. That split credit data across silos. To fix this gap, the RBI stepped in during early 2015.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Through circulars RBI/2014-15/405 (for banks) and RBI/2014-15/458 (for NBFCs), the RBI told all lenders to join all four bureaus. Lenders must send clean, matching data to all four.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 21(3) of CICRA 2005, you have the right to fix wrong data. Once you hold an OTS letter and No Dues Certificate (NDC), reporting live overdue dues breaks RBI rules.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="rbi-penalty-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Fast Updates &amp; Daily Fine Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. RBI 15-Day Reporting &amp; Rs 100/Day Delay Penalty
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Two strong RBI rules help you clear CRIF and Equifax errors fast. First, the RBI replaced slow monthly uploads with 15-day reporting in 2025. From July 1, 2026, RBI rules require updates four times each month: on the 9th, 16th, 23rd, and month-end.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Lenders must also use the Uniform Credit Reporting Format (UCRF) and attach your CKYC ID where on file. A bank can no longer tell you to wait three months for a settled loan to sync.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, RBI circular RBI/2023-24/72 (dated October 26, 2023) sets a daily fine. If your written dispute stays open past 30 days, you get Rs 100 for each extra day.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In those 30 days, the bank gets 21 days to verify and send clean data. The bureau gets 9 days to update your file. The party at fault must pay you within 5 working days of closure.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">RBI Rs 100/Day Bureau Delay Payout Chart</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Circular RBI/2023-24/72</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Dispute Age (Calendar Days)</th>
                        <th className="p-3">Late Days Past Day 30</th>
                        <th className="p-3">One Bureau Payout</th>
                        <th className="p-3 text-right">Two Bureaus (CRIF + Equifax)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 1 to Day 30 (21 Bank + 9 Bureau)</td>
                        <td className="p-3 font-mono">0 Days</td>
                        <td className="p-3 text-emerald-600 font-semibold">Rs 0 (Allowed Time)</td>
                        <td className="p-3 text-right font-bold text-slate-500">Rs 0</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 45 (15 Days Late)</td>
                        <td className="p-3 font-mono text-amber-600 font-bold">15 Days</td>
                        <td className="p-3 text-amber-700 font-semibold font-mono">Rs 1,500</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">Rs 3,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 60 (30 Days Late)</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">30 Days</td>
                        <td className="p-3 text-rose-700 font-semibold font-mono">Rs 3,000</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">Rs 6,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 90 (60 Days Late)</td>
                        <td className="p-3 font-mono text-rose-700 font-bold">60 Days</td>
                        <td className="p-3 text-rose-800 font-semibold font-mono">Rs 6,000</td>
                        <td className="p-3 text-right font-bold text-rose-800 font-mono">Rs 12,000</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Day 120 (90 Days Late)</td>
                        <td className="p-3 font-mono text-[#1886ff]">90 Days</td>
                        <td className="p-3 text-[#1886ff] font-mono">Rs 9,000</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">Rs 18,000 + RBI Order</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="bureau-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>4-Bureau Overview &amp; Dispute Portals</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Bureau Comparison: CIBIL, CRIF, Equifax &amp; Experian
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Different banks and apps prefer different credit bureaus. That is why a clean CIBIL report alone will not save you from loan rejections.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most NBFCs and digital loan apps pull CRIF High Mark and Equifax scores. Many private banks and card firms check Experian along with CIBIL.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[580px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Credit Bureau</th>
                      <th className="p-3">Who Checks It Most</th>
                      <th className="p-3">Common Post-OTS Bug</th>
                      <th className="p-3">Official Dispute Link</th>
                    </tr>
                  </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-bold text-slate-900">TransUnion CIBIL</td>
                        <td className="p-3">PSU banks, top private banks, home loans</td>
                        <td className="p-3">Usually updates first; rare wrong write-off sum</td>
                        <td className="p-3 font-mono text-[11px]">myscore.cibil.com</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">CRIF High Mark</td>
                        <td className="p-3">NBFCs, microfinance, digital loan apps</td>
                        <td className="p-3 text-rose-700 font-semibold">Loan stays Active with old overdue &amp; DPD</td>
                        <td className="p-3 font-mono text-[11px]">cir.crifhighmark.com</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">Equifax India</td>
                        <td className="p-3">NBFCs, auto loans, consumer finance</td>
                        <td className="p-3 text-rose-700 font-semibold">Duplicate row or open overdue amount</td>
                        <td className="p-3 font-mono text-[11px]">d2c.equifax.co.in / ecissupport@equifax.com</td>
                      </tr>
                      <tr className="bg-blue-50/40">
                        <td className="p-3 font-bold text-slate-900">Experian India</td>
                        <td className="p-3">Fintech lenders, online credit card firms</td>
                        <td className="p-3 text-amber-700 font-semibold">Late close date or missing Settled tag</td>
                        <td className="p-3 font-mono text-[11px]">consumer.experian.in/ECSINDIA-DCE</td>
                      </tr>
                    </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: 4-Bureau Credit Sync Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart maps each step to sync your settled loan across CIBIL, CRIF High Mark, Equifax, and Experian within the RBI 30-day clock.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/personal-loan-settled-cibil-still-overdue-crif-equifax.jpg"
                    alt="Sync Personal Loan Settlement Across CIBIL, CRIF High Mark, Equifax, and Experian Blueprint"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle 4-Bureau Credit Sync Chart • RBI Circular RBI/2023-24/72</span>
                  <a
                    href="/images/infographics/personal-loan-settled-cibil-still-overdue-crif-equifax.jpg"
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
                <span>Action Plan</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Fix CRIF and Equifax Overdue Marks
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six clear steps to wipe stale overdue dues from CRIF High Mark, Equifax, and Experian. Keep every email and ticket ID as proof.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Pull All 4 Free Full Credit Reports
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Get your free yearly report from CIBIL, CRIF High Mark, Equifax, and Experian. Write down the Loan Account Number, report ID, overdue sum, and update date on each file.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Build One Clean Proof PDF
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Merge your OTS letter, No Dues Certificate (NDC), bank UTR slips, and the clean CIBIL page into one PDF. Keep the file small so every portal accepts it.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: File Disputes on CRIF, Equifax &amp; Experian Together
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Log in to each bureau that shows a wrong overdue sum. Mark Account Status and Amount Overdue as wrong. Upload your proof PDF and save each Dispute ID.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Email Your Bank Grievance Officer the Same Day
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Do not wait on bureau portals alone. Email your bank Grievance Officer with all Dispute IDs, your NDC, and your bank or UPI details. Cite RBI circular RBI/2023-24/72 and ask for a 4-bureau fix.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Watch the 21-Day Bank &amp; 9-Day Bureau Clock
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Mark Day 21 and Day 30 on your phone. If the bank has not sent the fix by Day 21, write to the Principal Nodal Officer (PNO). Warn them that the Rs 100 daily fine is close.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: File on RBI CMS Portal on Day 31
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If any bureau still shows overdue dues on Day 31, file a case on cms.rbi.org.in. Name both the bank and the bureau. Ask for a fast sync and full Rs 100 per day payout.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Judicial Precedents & Consumer Remedies */}
            <section id="court-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Consumer Law &amp; High Court Stand</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Court Rulings &amp; Consumer Compensation Precedents
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Consumer courts and High Courts in India take wrong credit reports very seriously. Showing a settled loan as overdue breaks the Consumer Protection Act, 2019 under Section 2(11).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI Rs 100 per day fine is only the basic payout. If a wrong CRIF or Equifax mark causes real money loss, you can claim much larger damages in Consumer Court.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>NCDRC Consumer Court Relief</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Consumer courts routinely punish banks that fail to update closed personal loans. Orders direct lenders to wipe wrong default tags and pay damages for mental stress.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>High Court View on Sloppy Records</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High Courts, including the Madras High Court, protect retail borrowers from sloppy records. Customers can claim damages when wrong default marks block fresh loans.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Claims for Rejected New Loans</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Did a bank reject your home or car loan because of a wrong CRIF or Equifax overdue? Save that rejection email. It acts as strong proof of loss in Consumer Court.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Right to a Clean Name</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Employers and banks check credit files during hiring and loan checks. Branding a settled borrower as an active defaulter harms your good name and supports extra relief.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>3-Step Complaint Ladder</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bureau to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If bank staff send routine replies blaming the bureau, move up this official three-step ladder right away.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Step</th>
                      <th className="p-3">Who to Contact</th>
                      <th className="p-3">Time Limit</th>
                      <th className="p-3">What Happens Next</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: Bureau &amp; GRO</td>
                      <td className="p-3">CRIF/Equifax Portal + Bank GRO</td>
                      <td className="p-3 font-mono">Up to 21 Days</td>
                      <td className="p-3">Bank checks your NDC and sends a clean file to all 4 bureaus.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: Bank PNO</td>
                      <td className="p-3">Principal Nodal Officer &amp; Bureau Desk</td>
                      <td className="p-3 font-mono">Day 22 to Day 30</td>
                      <td className="p-3">Fixes PAN or account errors and closes your ticket before Day 31.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI CMS Portal (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">Day 31 Onwards</td>
                      <td className="p-3">Forces all 4 bureaus to sync and awards Rs 100/day payout.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Key Dates to Track</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: From NOC to 4-Bureau Sync
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Watch these dates after your OTS payment so you spot CRIF or Equifax errors early before applying for a new loan.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Window</th>
                      <th className="p-3">Stage</th>
                      <th className="p-3">Bank &amp; Bureau Job</th>
                      <th className="p-3">Your Checklist</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0 (Paid)</td>
                      <td className="p-3 font-mono text-[11px]">OTS Paid</td>
                      <td className="p-3">Bank issues your Settlement Letter or NDC with Rs 0 due.</td>
                      <td className="p-3">Save UTR slip, OTS letter, and signed NDC in one folder.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 21</td>
                      <td className="p-3 font-mono text-[11px]">15-Day Upload</td>
                      <td className="p-3">Bank sends settled data to CIBIL, CRIF, Equifax, and Experian.</td>
                      <td className="p-3">Wait one full 15-day cycle, then pull all 4 free reports.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 22 to 30</td>
                      <td className="p-3 font-mono text-[11px]">4-Bureau Audit</td>
                      <td className="p-3">All 4 bureaus should show Settled and Rs 0 overdue.</td>
                      <td className="p-3">If CRIF or Equifax is wrong, file disputes and email Bank GRO.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Dispute Day 21</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Bank Cutoff</td>
                      <td className="p-3">Bank must verify and push the clean update to the bureau.</td>
                      <td className="p-3 font-bold text-amber-800">Email the Bank PNO if your ticket still waits on bank proof.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Dispute Day 31+</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Fine Starts</td>
                      <td className="p-3">Rs 100/day fine starts adding up for each late dispute.</td>
                      <td className="p-3 font-bold text-slate-900">File on cms.rbi.org.in with your Dispute IDs and NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Special Scenarios & Common Mistakes */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Edge Cases &amp; Common Mistakes</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: NBFCs, ARCs &amp; Co-Lending Sync Gaps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Some loan setups cause stubborn errors on CRIF High Mark and Equifax even after full payment. Watch out for these four common traps.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Loan Apps &amp; Co-Lending NBFCs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Many loan apps use two NBFC partners in an 80:20 split. One partner updates CIBIL while the other misses CRIF. Check the exact lender name on your CRIF report first.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Loans Sold to ARCs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If an Asset Reconstruction Company (ARC) settled your loan, the old bank row can stay overdue on Equifax. Ask the old bank to mark its entry as sold or zero balance too.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Mistake: Paying Without an Official NDC
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Never pay an agent on phone promises alone. Without a bank OTS letter and NDC, CRIF and Equifax disputes fail because the bank treats your cash as a part EMI.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    Mistake: Confusing Settled With Closed
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A 4-bureau sync clears the wrong overdue amount and sets CRIF and Equifax to Settled. To move from Settled to Closed, you must pay the waived sum and get a new NDC.
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
                Frequently Asked Questions: 4-Bureau Settlement Sync
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers on how to fix a personal loan that shows settled in CIBIL but still shows overdue in CRIF High Mark, Equifax, or Experian.
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
                  <strong>CICRA 2005 (Credit Information Companies Act):</strong> Sections 15, 17, and 21 set rules for lender bureau membership and your right to fix wrong data.
                </li>
                <li>
                  <strong>RBI Circular RBI/2023-24/72 (DoR.FIN.REC.48):</strong> Dated October 26, 2023. Sets the Rs 100 per day fine when a credit dispute crosses 30 days.
                </li>
                <li>
                  <strong>RBI Circulars RBI/2014-15/405 &amp; RBI/2014-15/458:</strong> 2015 rules asking all banks and NBFCs to join and report data to all four bureaus.
                </li>
                <li>
                  <strong>RBI (Credit Information Reporting) Directions, 2025 &amp; Dec 4, 2025 Rules (RBI/DOR/2025-26/117 &amp; 119):</strong> Master rules setting 15-day reporting in 2025 and 4 monthly sync dates (9th, 16th, 23rd, month-end) from July 1, 2026.
                </li>
                <li>
                  <strong>RBI Ombudsman Scheme, 2021 &amp; Consumer Protection Act, 2019:</strong> Lets you file online at cms.rbi.org.in and claim relief for wrong credit entries.
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
                  <a href="https://www.crifhighmark.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>CRIF High Mark India</span>
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
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Rs 100/Day CIBIL Compensation
                  </Link>
                  <Link href="/cibil-dispute-wrong-overdue-entry-filing-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    CIBIL Wrong Overdue Dispute Guide
                  </Link>
                  <Link href="/dispute-wrong-settled-status-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Dispute Wrong Settled Status
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled Status From CIBIL
                  </Link>
                  <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Improve Score After Settlement
                  </Link>
                  <Link href="/loan-written-off-vs-settled-cibil-impact" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Written-Off vs Settled Impact
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After Loan Settlement
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/personal-loan-settlement-cibil-impact" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan CIBIL Impact
                  </Link>
                  <Link href="/ibps-bank-job-verification-settled-personal-loan-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Job Verification With Settled Loan
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
                Expert in Indian banking rules, CICRA 2005 credit bureau disputes, RBI Ombudsman cases, and loan settlement fixes across CIBIL, CRIF High Mark, Equifax, and Experian.
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
                  4-BUREAU DISPUTE SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  CRIF or Equifax Still Showing Overdue?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our team audits all four credit reports, sends legal notices under RBI circular RBI/2023-24/72, clears stale overdue marks, and claims your Rs 100/day fine.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Sync All 4 Credit Bureaus Now
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
                  <span><strong>4-Bureau Audit:</strong> Clean fixes for CIBIL, CRIF, Equifax &amp; Experian.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Rs 100/Day Claims:</strong> Full RBI/2023-24/72 delay payout help.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Nodal Officer Notices:</strong> Direct legal letters to bank PNO desks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI CMS Filing:</strong> Full Ombudsman support if the bank delays.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Credit Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Rs 100/Day CIBIL Update Compensation
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Daily delay fine guide &rarr;</span>
                </Link>

                <Link
                  href="/cibil-dispute-wrong-overdue-entry-filing-process"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Dispute Wrong Overdue Entry in CIBIL
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Step-by-step dispute steps &rarr;</span>
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
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
