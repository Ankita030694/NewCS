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

export default function PostWriteOffSettledClient() {
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
    { id: 'pwos-meaning', label: '1. What PWOS Means on Loan Reports' },
    { id: 'pwos-vs-settled', label: '2. PWOS vs Settled vs Closed' },
    { id: 'credit-impact-math', label: '3. Score Drop & 7-Year Math' },
    { id: 'rbi-regulatory-rules', label: '4. RBI Write-Off & Cooling Rules' },
    { id: 'visual-blueprint', label: '5. Visual PWOS Upgrade Blueprint' },
    { id: 'step-by-step-sop', label: '6. Upgrade PWOS to Closed SOP' },
    { id: 'borrower-rights', label: '7. Legal Rights & Court Relief' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Default to Closed Timeline' },
    { id: 'specialized-scenarios', label: '10. ARCs, Apps & Co-Lending' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Portals' }
  ];

  const faqs = [
    {
      q: 'What does Post Write-Off Settled (PWOS) mean on a personal loan report?',
      a: 'Post Write-Off Settled (PWOS) means two things happened in order. First, your lender wrote off your personal loan after 180 or more days of missed EMIs. Later, you paid a smaller lump sum under a One-Time Settlement to close the dues.'
    },
    {
      q: 'Is PWOS worse than a regular Settled status on CIBIL?',
      a: 'Yes. Regular Settled shows you closed the loan for less than the full due amount before write-off. PWOS shows a deeper failure because the bank first marked the loan as a loss and later accepted a partial payout.'
    },
    {
      q: 'Do I still owe money if my credit report shows PWOS and zero balance?',
      a: 'No. Once you pay the agreed OTS amount and receive your Settlement NOC, your legal balance due drops to ₹0. The lender cannot chase you for that loan again. The PWOS tag only records the past waiver.'
    },
    {
      q: 'How long does a Post Write-Off Settled tag stay on CIBIL and other bureaus?',
      a: 'A PWOS remark usually stays visible on CIBIL, CRIF High Mark, Equifax, and Experian for up to 7 years from the date of settlement. Its score hit fades slowly as you build clean on-time payments on new credit.'
    },
    {
      q: 'How can I change Post Write-Off Settled to Closed status?',
      a: 'Ask your lender in writing for the exact waived principal balance. Pay that remaining gap through NEFT or RTGS and get a revised No Dues Certificate. Then ask the bank to report the loan as Closed across all four bureaus.'
    },
    {
      q: 'What is the difference between PWOS and Post Write-Off Closed?',
      a: 'PWOS means you settled a written-off loan by paying less than the full balance. Post Write-Off Closed means you paid back 100% of the dues after the write-off. Lenders view Post Write-Off Closed much more favorably.'
    },
    {
      q: 'What is the RBI cooling period after a compromise loan settlement?',
      a: 'Under RBI Circular RBI/2023-24/40 dated June 8, 2023, banks must enforce a cooling period after a compromise settlement. For personal loans, this period is at least 12 months. Many lenders apply longer internal bans.'
    },
    {
      q: 'Can a bank add fresh penal interest when I offer to clear the waiver gap?',
      a: 'No arbitrary compounding is allowed. Under RBI Penal Charges rules (DoR.MCS.REC.28), banks cannot capitalize penal charges into principal. Demand an itemized ledger from the Principal Nodal Officer before paying any balance.'
    },
    {
      q: 'Can I claim ₹100 per day if my lender wrongly keeps PWOS after full payoff?',
      a: 'Yes. Under RBI Circular RBI/2023-24/72, your lender gets 21 days and the credit bureau gets 9 days to resolve a valid dispute. If the wrong PWOS tag stays past 30 calendar days, you can claim ₹100 for each day of delay.'
    },
    {
      q: 'How does CredSettle help borrowers fix or upgrade a PWOS personal loan tag?',
      a: 'CredSettle checks all four credit reports and audits your loan ledger for unfair fees. Our legal team then works with bank Nodal Officers to secure a clean NDC and file RBI Ombudsman claims if updates lag.'
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
            <span>CIBIL UCRF Status Code 04 &amp; RBI Credit Reporting Rules</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            PWOS vs Regular Settled Status on Personal Loan Reports
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Seeing Post Write-Off Settled (PWOS) on your CIBIL, CRIF, Equifax, or Experian report? Learn what PWOS means, how it differs from regular Settled, and how to upgrade it to Closed under RBI rules.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Upgrade Your PWOS Status Now</span>
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
                  Protected under CICRA 2005, RBI Circular RBI/2023-24/40, and RBI ₹100/day delay rules.
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
                <span>EXECUTIVE BRIEF: POST WRITE-OFF SETTLED (PWOS) RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Two-Step Meaning:</strong> PWOS means your lender first wrote off your personal loan as a loss after 180+ days of missed EMIs, and later closed it via a discounted One-Time Settlement.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Legal Dues Left:</strong> With a valid OTS letter and No Objection Certificate (NOC), your overdue balance drops to ₹0 and fresh DPD drops stop.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Harsher Than Regular Settled:</strong> Banks view PWOS more strictly than a plain Settled tag because it shows both a deep write-off and a partial waiver.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">7-Year Report Mark &amp; Cooling Period:</strong> The PWOS tag stays on all four credit bureaus for up to 7 years. RBI rules also require at least a 12-month cooling period for fresh loans.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Path to Clean Closed Status:</strong> Pay the exact waived principal gap, secure a clean No Dues Certificate (NDC), and claim ₹100 per day if the bank delays the bureau update past 30 days.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: What Post Write-Off Settled (PWOS) Means on Reports */}
            <section id="pwos-meaning" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>CIBIL UCRF Status Breakdown</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. What Post Write-Off Settled (PWOS) Means on Reports
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many Indian borrowers pull their credit report after finishing a personal loan settlement and spot the term <strong>Post (WO) Settled</strong> or <strong>PWOS</strong>. This tag looks scary, yet its meaning is easy to understand.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                PWOS records two separate events in the life of your loan. First, you missed EMIs for more than 180 days. After 90 days, the loan became a Non-Performing Asset (NPA). After 180 days, the bank moved the unpaid loan out of its active books as a <strong>Write-Off (WO)</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, you came forward later and signed a One-Time Settlement (OTS). You paid a reduced lump sum, and the bank waived the rest of the bill. Because the bank had already written off the loan before you settled, it reports the account as <strong>Post Write-Off Settled</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under CIBIL&apos;s Uniform Credit Reporting Format (UCRF), banks mark this in the <em>Written-off and Settled Status</em> field. It maps to status code 04, right after Written-off (02) and Settled (03). Your report shows Current Balance as ₹0 and Amount Overdue as ₹0. However, it still lists the Written-Off Amount and the Settlement Amount you paid.
              </p>
            </section>

            {/* SECTION 2: PWOS vs Regular Settled vs Post Write-Off Closed */}
            <section id="pwos-vs-settled" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Status Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. PWOS vs Regular Settled vs Post Write-Off Closed
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks and NBFCs do not treat all closure tags the same way. Even though PWOS and Regular Settled both show zero balance due, bank credit rules flag PWOS much faster.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A regular <strong>Settled</strong> tag means you struck a deal before the bank wrote off the loan. A <strong>PWOS</strong> tag signals two problems at once. First, your default lasted long enough for a write-off. Second, the bank still took a loss on your loan. Still, PWOS is much better than an open <strong>Written-Off</strong> tag, which hurts your score every month.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Bureau Status Tag</th>
                      <th className="p-3">What Happened</th>
                      <th className="p-3">Balance Due</th>
                      <th className="p-3">Lender Risk View</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-rose-50/40">
                      <td className="p-3 font-bold text-rose-800">Written-Off (WO)</td>
                      <td className="p-3">180+ days unpaid; bank booked loss but debt stays legally active.</td>
                      <td className="p-3 font-mono font-bold text-rose-700">Full Due Active</td>
                      <td className="p-3 font-semibold text-rose-700">Severe Block (Active Default)</td>
                    </tr>
                    <tr className="bg-amber-50/40">
                      <td className="p-3 font-bold text-amber-800">Post Write-Off Settled (PWOS)</td>
                      <td className="p-3">Loan written off first, then closed later via discounted OTS payout.</td>
                      <td className="p-3 font-mono font-bold text-slate-900">₹0 Overdue</td>
                      <td className="p-3 font-semibold text-amber-700">High Risk (Two-Stage Default)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Regular Settled</td>
                      <td className="p-3">Loan closed via partial OTS payout before any write-off took place.</td>
                      <td className="p-3 font-mono font-bold text-slate-900">₹0 Overdue</td>
                      <td className="p-3 font-semibold text-amber-600">Negative (Contract Cut Short)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-blue-800">Post Write-Off Closed</td>
                      <td className="p-3">Loan was written off, but borrower later paid 100% of full dues.</td>
                      <td className="p-3 font-mono font-bold text-emerald-700">₹0 Overdue</td>
                      <td className="p-3 font-semibold text-blue-700">Moderate (Full Debt Cleared)</td>
                    </tr>
                    <tr className="bg-emerald-50/40">
                      <td className="p-3 font-bold text-emerald-800">Closed (Standard)</td>
                      <td className="p-3">Full principal and agreed interest paid with clean No Dues Certificate.</td>
                      <td className="p-3 font-mono font-bold text-emerald-700">₹0 Overdue</td>
                      <td className="p-3 font-semibold text-emerald-700">Clean (Best Loan Approval Odds)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: Credit Score Impact & 7-Year Bureau Retention Math */}
            <section id="credit-impact-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>CIBIL Score Math &amp; 7-Year Footprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Credit Score Impact &amp; 7-Year Bureau Retention Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A PWOS entry hits your score across CIBIL, CRIF High Mark, Equifax, and Experian. Because missed EMIs before the write-off already pulled your score down, the PWOS tag often locks your score between 550 and 650.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                By bureau practice in India, negative marks like PWOS stay on your report for up to <strong>7 years</strong> from the last update date. Your score may climb past 720 with a secured card. Even then, prime banks check the status line before approving a home or personal loan.
              </p>

              {/* Representative Impact Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample ₹5,00,000 Personal Loan: PWOS to Closed Math</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Illustrative Bureau Ledger</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Account Stage</th>
                        <th className="p-3">Bureau Status</th>
                        <th className="p-3">Reported Figures</th>
                        <th className="p-3 text-right">Typical Score Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">1. On-Time EMIs</td>
                        <td className="p-3 text-emerald-600 font-semibold">Active (000 DPD)</td>
                        <td className="p-3 font-mono">₹0 Overdue</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">760 to 790</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">2. 180+ Days Unpaid</td>
                        <td className="p-3 text-rose-600 font-semibold">Written-Off (WO)</td>
                        <td className="p-3 font-mono text-rose-600">₹5,00,000 Written Off</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">510 to 560</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">3. OTS Paid (₹2.2L)</td>
                        <td className="p-3 text-amber-600 font-semibold">Post (WO) Settled</td>
                        <td className="p-3 font-mono text-amber-700">₹0 Due | ₹2.8L Waived</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">580 to 640</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">4. Waiver Gap Cleared</td>
                        <td className="p-3 text-blue-700 font-semibold">Closed / PWOC</td>
                        <td className="p-3 font-mono text-blue-700">₹0 Due | Full NDC Issued</td>
                        <td className="p-3 text-right font-bold text-blue-700 font-mono">680 to 725</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">5. 18 Months Clean Credit</td>
                        <td className="p-3 text-[#1886ff]">Closed + Active Card</td>
                        <td className="p-3 font-mono text-[#1886ff]">Zero Negative Tags</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">745+ Prime Eligible</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: RBI Write-Off, Compromise & Cooling Period Rules */}
            <section id="rbi-regulatory-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Circulars &amp; Reporting Deadlines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. RBI Write-Off, Compromise &amp; Cooling Period Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Three major Reserve Bank of India (RBI) rules control how banks write off personal loans, sign settlements, and update your credit file. Knowing these rules stops banks from giving wrong excuses.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>First, the June 8, 2023 RBI Circular (RBI/2023-24/40):</strong> This rule sets the national framework for Compromise Settlements and Technical Write-offs. It clarifies that a technical write-off is only an accounting entry. It does not erase your debt. It also sets a minimum <strong>12-month cooling period</strong> for non-farm loans like personal loans before a lender can offer fresh credit after a compromise settlement.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Second, Weekly Credit Bureau Updates (RBI Directions, 2025):</strong> Banks moved to 15-day updates in 2025. From July 1, 2026, RBI moved them to weekly updates. Lenders now send fresh data four times a month on the 9th, 16th, 23rd, and month-end to all four bureaus.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Third, the ₹100 Per Day Delay Penalty (RBI/2023-24/72):</strong> This October 26, 2023 rule sets a <strong>30-day limit</strong> to fix a valid credit dispute. The bank gets 21 days, and the bureau gets 9 days. If a wrong PWOS tag stays past Day 30, you earn ₹100 per day. The party at fault must pay this sum within 5 working days of fixing the report.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: PWOS Audit &amp; Upgrade to Closed
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart shows how a personal loan moves from Write-Off to PWOS and then to Closed. Follow it to align your status across all four RBI-licensed credit bureaus.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/post-write-off-settled-pwos-meaning-personal-loan.jpg"
                    alt="Post Write-Off Settled (PWOS) Meaning on Personal Loan Credit Report Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle PWOS Credit Rectification Framework • CICRA &amp; RBI Compliant</span>
                  <a
                    href="/images/infographics/post-write-off-settled-pwos-meaning-personal-loan.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Upgrade PWOS to Closed Status */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Upgrade PWOS to Closed Status
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit bureaus cannot delete an accurate PWOS tag just because you ask them. Beware of fake credit-repair agents promising overnight erasure. Instead, follow these six legal steps to upgrade your PWOS status cleanly.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Pull All Four Free Full Credit Reports (FFCR)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your free yearly credit report from CIBIL, CRIF High Mark, Equifax, and Experian. Check the exact Account Status, Written-Off Principal, Settlement Amount, and Loan Account Number on each file.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Audit Waived Principal vs Inflated Interest
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Compare your old OTS letter against the loan statement. Check how much of the waived gap was real principal and how much was illegal compounding penal interest barred by RBI norms.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Request a Written Waiver-Gap Closure Letter
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email the bank&apos;s Principal Nodal Officer (PNO) instead of talking to recovery agents. Ask for a written quote to clear the unpaid waiver gap in exchange for a clean <strong>Closed</strong> bureau status.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Pay Strictly Through Traceable NEFT or RTGS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never pay cash to field agents. Pay the agreed gap straight into the loan account via NEFT or RTGS. Save the UTR number and email the bank stating the payout is for full loan closure.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Secure a Revised Unconditional Closure NDC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Demand a fresh No Dues Certificate (NDC) on official bank letterhead. Make sure the letter states the loan is <strong>Closed in full with zero balance and no waiver</strong>.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: File Parallel Disputes Across All 4 Bureaus
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Wait 15 days for the bank&apos;s weekly data file to sync. If PWOS still shows on CIBIL, CRIF, Equifax, or Experian, file online disputes attaching your NDC and bank account details for the 30-day RBI clock.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Legal Rights: Wrong PWOS Tag & Consumer Relief */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Statutory Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Legal Rights: Wrong PWOS Tag &amp; Consumer Relief
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Sometimes a bank marks a loan as PWOS by mistake. This happens when a borrower already paid the full loan, cleared the waiver gap, or fell victim to a wrong billing fee. Indian law gives you strong tools to fight a wrong PWOS tag.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the Consumer Protection Act, 2019 and CICRA 2005, careless credit reporting is a legal deficiency in service. Both the RBI Ombudsman and Consumer Commissions have ordered banks to wipe wrong write-off marks and pay damages.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Delhi SCDRC: Shyam Garg v. ING Vysya Bank</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In Complaint No. 333/2013 (August 2021), the bank wrongly reported a paid loan with an NDC as &quot;Written Off&quot;. The Commission ordered a fix to Nil Outstanding and awarded ₹10 Lakh plus ₹50,000 in costs.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019 Relief</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 2(11), leaving a false PWOS remark after full repayment is a deficiency in service. You can claim damages for rejected home loans, extra interest costs, and mental stress.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>CICRA 2005 Section 21 Accuracy Right</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 21 of the Credit Information Companies (Regulation) Act, 2005 protects Indian borrowers. It gives you the legal right to check your credit files and demand a fix for wrong account tags.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>RBI ₹100/Day Automatic Delay Payout</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI Circular RBI/2023-24/72 gives banks and bureaus 30 days to fix a proven PWOS reporting error. For every day of delay past Day 30, the party at fault must pay ₹100 directly to your account.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation: Bank GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your lender refuses to issue a waiver-gap quote or ignores your Closure NDC, follow the official RBI three-tier complaint ladder below.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Window</th>
                      <th className="p-3">Action &amp; Legal Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO &amp; Bureaus</td>
                      <td className="p-3">Bank Grievance Officer + All 4 Bureau Desks</td>
                      <td className="p-3 font-mono">7 to 21 Calendar Days</td>
                      <td className="p-3">Verifies your Closure NDC, checks UCRF status code, and triggers a fresh data push.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">Day 21 to Day 30</td>
                      <td className="p-3">Audits loan write-off ledger, waives unlawful penal bloat, and issues closure approval.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI Integrated Ombudsman (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">Post Day 30</td>
                      <td className="p-3">Passes binding order to fix PWOS to Closed and awards ₹100/day delay compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Milestones: Default to Clean Closed Tag */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Lifecycle &amp; Rectification Timeline</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Milestones: Default to Clean Closed Tag
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This timeline shows when a personal loan gets tagged as PWOS. It also shows how fast you can clear or dispute it under RBI weekly update rules.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Stage</th>
                      <th className="p-3">Bureau Status</th>
                      <th className="p-3">What the Lender Does</th>
                      <th className="p-3">Best Borrower Move</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 90 Unpaid</td>
                      <td className="p-3 font-mono text-[11px]">NPA / Sub-Standard</td>
                      <td className="p-3">Flags loan as NPA and begins formal recovery notices.</td>
                      <td className="p-3">Ask for restructuring or early OTS before any write-off occurs.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 180+ Unpaid</td>
                      <td className="p-3 font-mono text-[11px] text-rose-700 font-bold">Written-Off (WO)</td>
                      <td className="p-3">Books a technical write-off for tax and balance-sheet relief.</td>
                      <td className="p-3">Remember the debt stays active; prepare hardship proof for OTS.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">OTS Paid Post-WO</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Post (WO) Settled</td>
                      <td className="p-3">Drops overdue to ₹0 and reports UCRF status as PWOS.</td>
                      <td className="p-3 font-bold text-amber-800">Keep your OTS sanction letter, UTR receipt, and Settlement NOC safe.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Waiver Gap Paid</td>
                      <td className="p-3 font-mono text-[11px] text-blue-700 font-bold">Closure Triggered</td>
                      <td className="p-3">Issues revised full No Dues Certificate and queues weekly bureau upload.</td>
                      <td className="p-3">Wait 10 to 15 days for the 9th, 16th, 23rd, or month-end sync date.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Dispute Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">30-Day RBI Window</td>
                      <td className="p-3">Bank gets 21 days to verify NDC; bureau gets 9 days to update status.</td>
                      <td className="p-3 font-bold text-slate-900">Include your bank account or UPI ID inside every bureau dispute.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 &amp; Beyond</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">Penalty &amp; Ombudsman</td>
                      <td className="p-3">Faces ₹100 per day fine plus binding RBI Ombudsman order.</td>
                      <td className="p-3">File complaint at cms.rbi.org.in for forced Closed update and payout.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Cases: ARCs, Apps & Co-Lending Loans */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Complex Real-World PWOS Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Cases: ARCs, Apps &amp; Co-Lending Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many personal loan borrowers face extra roadblocks when dealing with bad-loan buyers, fintech apps, or job background checks. Here is how to handle each case safely.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    ARC Loan Sales &amp; Double Entries
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a bank sells a written-off loan to an Asset Reconstruction Company (ARC), both entries can show up. The old bank must mark its line &quot;Account Sold&quot; with ₹0 due, while only the ARC updates your final closure status.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Fintech Loan Apps &amp; Co-Lending Splits
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Digital apps often pair a bank and an NBFC behind one loan. Make sure both lending partners receive your closure payment and issue matching NDC letters so one partner does not leave a PWOS mark behind.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Shadow Interest Bloat on Gap Payoffs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Some lenders quote huge sums when you ask to clear a past waiver gap. Cite RBI Circular DoR.MCS.REC.28 against interest-on-penalty compounding and negotiate strictly on the true waived principal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    Bank Jobs, Home Loans &amp; Credit Rebuilding
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    PSU bank recruitments like IBPS and prime home-loan desks often screen for active PWOS remarks. Upgrading to Closed or pairing your NDC with a low-use FD-backed credit card speeds up approval recovery.
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
                Frequently Asked Questions: PWOS on Personal Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Simple, verified answers to common questions about Post Write-Off Settled (PWOS) tags, CIBIL score recovery, RBI cooling periods, and upgrading to Closed status.
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
                  <strong>RBI Framework for Compromise Settlements &amp; Technical Write-offs:</strong> Circular RBI/2023-24/40 (DOR.STR.REC.20/21.04.048/2023-24) dated June 8, 2023 (Board policy, technical write-off scope, and 12-month cooling period).
                </li>
                <li>
                  <strong>RBI Compensation Framework for Delayed Credit Report Updates:</strong> Circular RBI/2023-24/72 dated October 26, 2023 (30-day total dispute limit and ₹100 per day delay payout).
                </li>
                <li>
                  <strong>RBI (Credit Information Companies) Directions, 2025:</strong> Weekly reporting on the 9th, 16th, 23rd, and month-end (effective July 1, 2026) and mandatory four-bureau submission.
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Sections 15 and 21 governing compulsory bureau membership and borrower accuracy rights.
                </li>
                <li>
                  <strong>RBI Fair Lending Practice on Penal Charges &amp; Consumer Law:</strong> Circular DoR.MCS.REC.28/01.01.001/2023-24 (ban on capitalizing penal charges) and Consumer Protection Act, 2019 Section 2(11).
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
                  <Link href="/loan-written-off-vs-settled-cibil-impact" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Written-Off vs Settled Impact
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/can-i-convert-settled-to-closed-later" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Upgrade Settled Tag Later
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled Status on CIBIL
                  </Link>
                  <Link href="/dispute-wrong-settled-status-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Dispute Wrong Settled Tag
                  </Link>
                  <Link href="/personal-loan-settled-cibil-still-overdue-crif-equifax" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Sync All 4 Credit Bureaus
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹100/Day CIBIL Penalty
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After Settlement
                  </Link>
                  <Link href="/explain-the-difference-between-a-loan-write-off-and-a-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan Write-Off vs Settlement
                  </Link>
                  <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL After Settlement
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
                Specialist in Indian banking compliance, CIBIL status upgrades, RBI credit reporting norms, and personal loan settlements helping borrowers convert PWOS tags into clean closed records.
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
                  CREDIT STATUS RECTIFICATION
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Stuck With a PWOS Tag on CIBIL?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking advocates audit your write-off ledger and strip illegal penal fees. We secure your clean Closed NDC and enforce RBI ₹100/day rules across all four credit bureaus.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Book Free PWOS Report Audit
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
                  <span><strong>All 4 Bureaus Audited:</strong> CIBIL, CRIF, Equifax, and Experian checked together.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Waiver-Gap Negotiation:</strong> Strip fake penal charges before closing the gap.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Clean NDC Verification:</strong> Ensure zero-dues wording that bureaus accept.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Filing:</strong> Claim ₹100/day penalty on late status updates.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/loan-written-off-vs-settled-cibil-impact"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Loan Written-Off vs Settled Impact
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Compare bureau tags &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Status to Closed
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Step-by-step NDC guide &rarr;</span>
                </Link>

                <Link
                  href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI ₹100/Day Delayed CIBIL Penalty
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Claim daily delay payouts &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
