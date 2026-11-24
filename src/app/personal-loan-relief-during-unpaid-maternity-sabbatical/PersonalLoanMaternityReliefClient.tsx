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

export default function PersonalLoanMaternityReliefClient() {
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
    { id: 'statutory-framework', label: '1. RBI Rules & Maternity Law' },
    { id: 'relief-pathways', label: '2. Four Legal EMI Relief Options' },
    { id: 'comparison-matrix', label: '3. Relief Math & EMI Comparison' },
    { id: 'cibil-iracp-impact', label: '4. CIBIL Score & IRACP Rules' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Relief SOP' },
    { id: 'borrower-rights', label: '7. Harassment & Spouse Shield' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Pre-Leave to Return Timeline' },
    { id: 'specialized-scenarios', label: '10. App Loans, Gig & Layoffs' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Portals' }
  ];

  const faqs = [
    {
      q: 'Does RBI mandate a loan moratorium during unpaid maternity leave?',
      a: 'No. RBI does not mandate an automatic EMI pause for unpaid maternity leave or career breaks. However, banks and NBFCs can approve custom relief under their board-approved hardship policies. You can ask for a tenure extension, lower EMIs, or a short principal pause before you miss a payment.'
    },
    {
      q: 'Can I extend my personal loan tenure during an unpaid maternity break?',
      a: 'Yes. Most banks and NBFCs let good borrowers stretch their loan tenure to cut monthly EMIs. Extending a 3-year balance to 5 years can drop your monthly EMI by nearly 30%. You must apply in writing with HR leave proof before your account falls overdue.'
    },
    {
      q: 'What is the Maternity Benefit Act rule on unpaid maternity leave in India?',
      a: 'Under the Maternity Benefit (Amendment) Act, 2017, eligible women get 26 weeks of paid leave for up to two kids. Section 10 adds 1 extra paid month for pregnancy illness. Unpaid leave starts if you extend past 26 weeks, worked under 80 days under Section 5(2), or work at a firm with under 10 staff.'
    },
    {
      q: 'Will restructuring my personal loan during maternity leave hurt my CIBIL score?',
      a: 'Yes, it causes a mild temporary dip. Under RBI IRACP rules, a stress-based change marks your loan as Restructured on CIBIL and moves it out of standard status for one year. Still, a Restructured tag hurts far less than missed EMIs, default marks, or a write-off.'
    },
    {
      q: 'Does interest keep adding up during a personal loan moratorium?',
      a: 'Yes. Even when a bank grants a 3-month EMI pause, daily interest keeps growing on your unpaid principal. That is why paying interest-only EMIs or stretching your tenure is often cheaper than a full payment pause.'
    },
    {
      q: 'Is my husband legally liable to pay my personal loan during maternity leave?',
      a: 'No. If the personal loan is only in your name, your husband is not legally liable for it. Under Indian contract law, lenders can only recover dues from the borrower, co-borrower, or guarantor. Banks cannot debit his personal account or call him to demand your dues.'
    },
    {
      q: 'Can recovery agents visit my home or hospital after childbirth?',
      a: 'No. RBI Circular RBI/2022-23/108 bars calls or visits before 8 AM and after 7 PM. Under the RBI Responsible Business Conduct rules, lenders must also avoid recovery calls or visits during medical emergencies and sensitive family events. You can report any abuse to the bank PNO and RBI Ombudsman.'
    },
    {
      q: 'Can a bank compound interest on late fees if I miss a maternity EMI?',
      a: 'No. Under RBI Circular RBI/2023-24/53 effective April 1, 2024, lenders cannot add penal interest to your loan rate. They may only levy fair, flat penal charges. Compounding or charging extra interest on unpaid late fees is strictly banned.'
    },
    {
      q: 'Should I choose restructuring or One-Time Settlement (OTS) on maternity leave?',
      a: 'Pick restructuring or a longer loan term if you plan to rejoin work in 3 to 9 months. Choose One-Time Settlement (OTS) under RBI Circular RBI/2023-24/40 only after 90 days overdue. Use OTS when you left your job and cannot pay full EMIs again.'
    },
    {
      q: 'How does CredSettle help women facing personal loan stress during maternity?',
      a: 'CredSettle drafts RBI-backed hardship letters, audits illegal penal charges, negotiates EMI step-downs or OTS waivers, and stops illegal recovery calls. Our legal team protects your privacy and guides you through RBI Ombudsman complaints if a lender acts unfairly.'
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
            <span>RBI Hardship Policies &amp; Women Borrower Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Managing Unsecured Loan EMIs During Maternity Career Gap
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Taking unpaid maternity leave or a child-care break should not trap you in debt. Learn how RBI restructuring rules, EMI step-downs, and legal protections keep your CIBIL score and family safe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Maternity EMI Relief Plan</span>
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
                  <span>Borrower Legal Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Backed by RBI Penal Charge Rules, RB-IOS 2026, and Fair Practices Code norms.
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
                <span>EXECUTIVE BRIEF: MATERNITY PERSONAL LOAN RELIEF RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Automatic RBI Pause:</strong> RBI does not force banks to give free EMI breaks for unpaid leave. You must apply under your bank&apos;s board-approved hardship policy.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Best First Move:</strong> Apply 30 to 45 days before unpaid leave starts. Ask for a tenure stretch or a 3 to 6 month interest-only plan while your loan is still regular.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Fee Compounding:</strong> Under RBI Circular RBI/2023-24/53, banks cannot charge extra interest on unpaid late fees. Penalties must stay flat and fair.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict Harassment Ban:</strong> Agents cannot call before 8 AM or after 7 PM. RBI conduct rules also bar intrusive visits during medical care and sensitive family events.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Spouse &amp; Stridhan Safety:</strong> Your husband is not liable for a sole personal loan in your name. Banks cannot touch your stridhan gold or home goods without a court order.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: RBI Rules: Unpaid Maternity Leave & Loan Relief */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Rules &amp; Indian Labor Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Rules: Unpaid Maternity Leave &amp; Loan Relief
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many working women in India face a sudden pay drop around childbirth. You may need unpaid leave after your paid break ends. Yet your monthly personal loan EMI keeps hitting your bank account every month.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, know the clear RBI position. The Reserve Bank of India has no active blanket moratorium for personal life breaks. Those wide COVID-19 EMI pause schemes have already ended. Today, banks do not have to pause your loan automatically.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, RBI rules allow every bank and NBFC to grant hardship relief under its board-approved policy. If you show real loss of pay and a clean past record, lenders can cut your EMI, extend your term, or pause principal dues.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You should also check your rights under the Maternity Benefit (Amendment) Act, 2017. Firms with 10 or more staff must give 26 weeks of paid leave for your first two kids. Section 10 adds 1 extra paid month for pregnancy illness. Unpaid leave starts when you extend past 26 weeks or worked under 80 days under Section 5(2). It also affects women in small firms or gig work.
              </p>
            </section>

            {/* SECTION 2: Four Legal Relief Options for Maternity Loan EMIs */}
            <section id="relief-pathways" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Approved Bank Relief Pathways</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Four Legal Relief Options for Maternity Loan EMIs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do not skip EMIs silently when your salary stops. Silent defaults trigger bounce fees, harsh calls, and fast CIBIL damage. Pick one of these four legal relief paths based on when you plan to return to work.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong className="text-slate-900">1. Tenure Extension (EMI Step-Down):</strong> Ask your lender to stretch your remaining loan term. Moving a 3-year balance to 5 years can cut your monthly bill by about 30%. This keeps your account running smoothly while your income is zero.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong className="text-slate-900">2. Principal Pause (Interest-Only EMI):</strong> Some banks let you pay only monthly interest for 3 to 6 months. You pause the principal part until your pay restarts. You pay less cash each month and stop your loan balance from growing bigger.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong className="text-slate-900">3. Low-Cost Bridge Cash:</strong> Never swipe credit cards at 36% to 42% APR to pay a 14% personal loan. If you hold a Fixed Deposit, an overdraft against your FD costs far less. If you quit work for over a month, you can also check EPF partial withdrawal rules to bridge EMIs cleanly.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong className="text-slate-900">4. One-Time Settlement (OTS):</strong> Sometimes a short maternity break becomes a full job exit. If your loan crosses 90 days overdue (NPA) and you cannot earn soon, you can settle under RBI Circular RBI/2023-24/40. Lenders often waive 40% to 60% of inflated dues for a single agreed payout.
              </p>
            </section>

            {/* SECTION 3: Relief Math: EMI Step-Down vs Moratorium vs OTS */}
            <section id="comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Cash-Flow Impact &amp; Cost Ledger</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Relief Math: EMI Step-Down vs Moratorium vs OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every relief option trades short-term cash savings against long-term interest or CIBIL impact. Suppose you have a ₹5,00,000 personal loan balance at 14% interest with 36 months left.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Your normal monthly EMI is ₹17,089. The table below shows how each bank relief plan changes your monthly cash outgo during a 6-month unpaid maternity break.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample ₹5 Lakh Loan Relief Comparison (14% p.a.)</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">36 Months Balance Left</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Relief Option</th>
                        <th className="p-3">Monthly Outgo</th>
                        <th className="p-3">Best Fit Case</th>
                        <th className="p-3 text-right">CIBIL Status Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Regular Unchanged EMI</td>
                        <td className="p-3 font-mono font-bold text-slate-900">₹17,089 / mo</td>
                        <td className="p-3">Strong savings or spouse support covers break</td>
                        <td className="p-3 text-right text-emerald-600 font-bold">Zero Impact (Standard)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Tenure Extension (60 Mo)</td>
                        <td className="p-3 font-mono text-emerald-700 font-bold">₹11,634 / mo</td>
                        <td className="p-3">Rejoining job in 3 to 9 months; need 32% cut</td>
                        <td className="p-3 text-right text-amber-600 font-bold">Restructured Tag (Mild Dip)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Interest-Only Pause (3-6 Mo)</td>
                        <td className="p-3 font-mono text-[#1886ff] font-bold">₹5,833 / mo</td>
                        <td className="p-3">Short unpaid LOP with fixed job return date</td>
                        <td className="p-3 text-right text-amber-600 font-bold">Restructured (No Bounce)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Full Moratorium (3 Mo)</td>
                        <td className="p-3 font-mono text-amber-700 font-bold">₹0 (Interest Adds)</td>
                        <td className="p-3">Zero cash in hand; high medical costs now</td>
                        <td className="p-3 text-right text-amber-700 font-bold">Higher Total Cost + Tag</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">One-Time Settlement (OTS)</td>
                        <td className="p-3 font-mono text-[#1886ff]">₹2.0L - ₹3.0L Once</td>
                        <td className="p-3">Permanent career break; loan 90+ days NPA</td>
                        <td className="p-3 text-right text-rose-700 font-bold">Settled Tag (Debt Closed)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: CIBIL Score & IRACP Rules on Restructured Loans */}
            <section id="cibil-iracp-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Reporting &amp; Fee Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Score &amp; IRACP Rules on Restructured Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many mothers ask why banks hesitate to approve a simple 3-month EMI pause. The real reason is the RBI IRACP (Income Recognition and Asset Classification) norm. Under standard rules, changing loan terms due to stress forces the bank to downgrade a Standard loan to Sub-Standard status.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Because of this rule, the bank must hold extra money in reserve for one full year. Your CIBIL report will also display a &quot;Restructured&quot; remark. After you pay the new EMIs on time for 12 months, the bank can upgrade the account back to Standard.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Two newer RBI rules now help you protect your score and money. First, under RBI Circular RBI/2024-25/60 and the 2025 Credit Reporting Directions, lenders must update CIBIL and other bureaus every 15 days. Once you get written relief or clear dues, your report updates much faster.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, under RBI Circular RBI/2023-24/53 (live from April 1, 2024), banks cannot add penal interest onto your loan rate. They can only charge flat, fair penal fees. They are strictly barred from charging interest on top of unpaid late fees.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Maternity Loan Relief Framework
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual sums up your personal loan shield during an unpaid maternity break. Use proactive hardship requests, CIBIL checks, and RBI conduct rules to stay in full control of your debt.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/personal-loan-relief-during-unpaid-maternity-sabbatical.jpg"
                    alt="Personal Loan Relief and Restructuring Guide During Unpaid Maternity Leave in India"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>CredSettle Borrower Protection Framework • RBI Hardship &amp; CIBIL Rules</span>
                  <a
                    href="/images/infographics/personal-loan-relief-during-unpaid-maternity-sabbatical.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Requesting Maternity Loan Relief */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Requesting Maternity Loan Relief
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Phone calls to customer care rarely get a hardship plan approved. Follow these six written steps at least 30 days before your unpaid maternity leave starts.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Gather HR Leave Proof &amp; Medical Records
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Get an official HR email or letter showing your unpaid maternity or sabbatical dates. Keep your doctor note, hospital summary, and last three payslips ready to prove real income loss.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Check Your Loan Agreement, KFS &amp; Insurance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Read your Key Facts Statement (KFS) and any bundled loan insurance policy. Standard plans do not cover routine leave, but check for critical pregnancy illness or layoff riders.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Email a Formal Hardship Request Early
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Write to your branch manager and loan helpdesk before any EMI bounces. State the exact monthly amount you can pay and ask for tenure extension or interest-only EMIs.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Prevent Repeated NACH Bounce Traps
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Do not leave an active NACH mandate bouncing every month. Each bounce adds ₹500 to ₹750 plus GST and risks Section 25 PASSA notices. Seek written debit suspension while your relief ticket runs.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Audit Penal Fees &amp; Sign Revised Terms
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check your ledger for illegal compounded late fees under RBI Circular RBI/2023-24/53. Only pay revised EMIs after receiving an official email or signed addendum on bank letterhead.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Escalate Unfair Refusals or Abuse
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the lender ignores your proof, levies unfair charges, or sends rude agents, escalate to the Principal Nodal Officer. After 30 days, file online at cms.rbi.org.in.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Legal Rights: Harassment Shield & Spouse Immunity */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Women Borrower Protections Under Indian Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Legal Rights: Harassment Shield &amp; Spouse Immunity
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even if you miss EMIs during maternity recovery, debt default is a civil matter in India. You cannot be jailed or shamed for genuine financial hardship. Indian law gives you four strong shields.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Medical &amp; Maternity Harassment Ban</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI Circular RBI/2022-23/108 bars calls before 8 AM and after 7 PM. Updated 2026 RBI conduct rules also stop agents from calling or visiting during medical emergencies or family crises.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <UserCheck className="w-4 h-4" />
                    <span>Zero Spouse Liability on Sole Loans</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you took the personal loan alone, your husband has zero legal duty to pay it. Under the Indian Contract Act, 1872, banks cannot debit his account or press him for your debt.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>HR &amp; Workplace Privacy Protection</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Recovery agents cannot call your boss, HR team, or family to shame you. Under Section 12 of the Maternity Benefit Act, employers also cannot fire you during legal maternity leave.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Stridhan &amp; Household Asset Safety</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Personal loans have no security or collateral. Banks cannot take your stridhan jewelry or household items. Section 60 of the CPC strictly protects daily home goods and personal ornaments.
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
                Banks must treat your hardship file fairly. If a bank adds illegal fees, ignores your emails, or sends rude agents, use the RBI three-tier complaint ladder.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Response Window</th>
                      <th className="p-3">Relief You Can Demand</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Logs your hardship file, stops agent calls, and audits late fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Approves restructuring, refunds illegal charges, and fixes CIBIL errors.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RB-IOS 2026 (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Can award up to ₹30 Lakh loss and ₹3 Lakh for mental harassment.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Milestones: Pre-Leave to Career Return */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Maternity Sabbatical Debt Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Milestones: Pre-Leave to Career Return
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Timing matters most in personal loan relief. Acting 45 days before your pay stops keeps your options wide open and protects your CIBIL score.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Stage</th>
                      <th className="p-3">Account Status</th>
                      <th className="p-3">Key Risk to Watch</th>
                      <th className="p-3">Best Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">45 Days Before LOP</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">Standard (0 DPD)</td>
                      <td className="p-3">Delaying leaves zero time for credit review.</td>
                      <td className="p-3">Submit HR leave proof and ask for tenure extension.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 1 to 3 LOP</td>
                      <td className="p-3 font-mono text-[11px]">Active Relief / SMA-0</td>
                      <td className="p-3">Auto-debit bounces and compounding late fees.</td>
                      <td className="p-3">Pay revised lower EMI or interest-only amount on time.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60 Overdue</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">SMA-1 Alert</td>
                      <td className="p-3">Frequent reminder calls and early CIBIL dip.</td>
                      <td className="p-3">Record all calls and escalate relief file to bank PNO.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 61 to 89 Overdue</td>
                      <td className="p-3 font-mono text-[11px] text-amber-800 font-bold">SMA-2 Pre-NPA</td>
                      <td className="p-3">Field agents assigned and recall notices sent.</td>
                      <td className="p-3 font-bold text-amber-800">Send formal legal reply citing maternity hardship proof.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 90+ (Job Exit)</td>
                      <td className="p-3 font-mono text-[11px] text-rose-700 font-bold">NPA Stage</td>
                      <td className="p-3">Full balance recall or arbitration notices.</td>
                      <td className="p-3 font-bold text-slate-900">Negotiate verified OTS waiver under RBI 2023 rules.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Career Return</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Rebuild Phase</td>
                      <td className="p-3">Stale bureau status slowing credit recovery.</td>
                      <td className="p-3">Verify 15-day CIBIL updates and resume clean EMIs.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Cases: Freelancers, App Loans & Layoffs */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Maternity Debt Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Cases: Freelancers, App Loans &amp; Layoffs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Not every mother has a corporate HR letter or a single bank loan. Here is how RBI rules protect you in four common real-life cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Digital Loan Apps &amp; NBFCs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Digital Lending Directions, 2025, loan apps cannot read your contacts, photos, or call logs. If an app threatens to message family during maternity, file a cybercrime and RBI CMS complaint at once.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Self-Employed &amp; Freelance Mothers
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Without an HR letter, prove hardship using your doctor note, birth summary, and 6-month bank statements showing lower client receipts. Banks accept clear medical and bank records for tenure extension.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Job Loss or Post-Maternity Layoff
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dismissal during maternity leave is illegal under Section 12 of the Maternity Benefit Act. If laid off after return, check your bundled loan insurance for 3 to 6 months of job-loss EMI cover.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Multiple Personal Loans &amp; Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Never borrow from one app to pay another during a career break. Protect rent and baby health costs first. Then negotiate structured EMI cuts or clean OTS exits across all unsecured lenders.
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
                Frequently Asked Questions: Maternity Loan Relief
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, plain-English answers to common questions on personal loan EMI relief, CIBIL tags, husband liability, and recovery protection during unpaid maternity leave in India.
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
                  <strong>RBI Penal Charges Circular:</strong> RBI/2023-24/53, DoR.MCS.REC.28/01.01.001/2023-24 (Fair Lending Practice - Penal Charges in Loan Accounts, effective April 1, 2024).
                </li>
                <li>
                  <strong>RBI Compromise Settlement Framework:</strong> RBI/2023-24/40, DOR.STR.REC.20/21.04.048/2023-24 (Framework for Compromise Settlements and Technical Write-offs, June 8, 2023).
                </li>
                <li>
                  <strong>RBI Recovery Agent Conduct Rules:</strong> RBI/2022-23/108, DOR.ORG.REC.65/21.04.158/2022-23 and RBI Responsible Business Conduct Amendment Directions, 2026.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2026 (RB-IOS, 2026):</strong> Effective July 1, 2026, covering consequential loss up to ₹30 Lakh and harassment awards up to ₹3 Lakh.
                </li>
                <li>
                  <strong>Maternity Benefit Act, 1961 (as amended in 2017):</strong> Sections 5, 10, and 12 governing 26-week paid leave, 80-day work rule, illness leave, and dismissal ban.
                </li>
                <li>
                  <strong>RBI Credit Information Reporting Directions, 2025:</strong> Master Direction RBI/DoR/2024-25/125 and Circular RBI/2024-25/60 mandating 15-day fortnightly bureau updates.
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
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://labour.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Ministry of Labour &amp; Employment</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/loan-restructuring-settlement-terminal-illness-disability" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Medical Hardship Loan Relief
                  </Link>
                  <Link href="/how-to-write-a-hardship-letter-for-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Write a Hardship Letter
                  </Link>
                  <Link href="/rbi-guidelines-on-penal-charges-in-loan-accounts" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Penal Charges Rules
                  </Link>
                  <Link href="/stop-auto-debit-ecs-bounce-charges" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Auto-Debit Bounce Fees
                  </Link>
                  <Link href="/upi-autopay-mandate-pause-vs-revoke-personal-loan-emi" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    UPI Autopay Pause vs Revoke
                  </Link>
                  <Link href="/rbi-15-day-fortnightly-credit-bureau-update-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI 15-Day CIBIL Updates
                  </Link>
                  <Link href="/wedding-personal-loan-default-wife-stridhan-protection" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Wife Stridhan Immunity
                  </Link>
                  <Link href="/can-bank-contact-my-employer-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Workplace Recovery Shield
                  </Link>
                  <Link href="/job-loss-insurance-for-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Job Loss Loan Insurance
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
                Expert in personal loan relief, RBI hardship rules, and OTS talks. Helps Indian borrowers stop agent abuse and protect their credit score.
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
                  MATERNITY HARDSHIP SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Struggling With EMIs on Unpaid Maternity Leave?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team drafts RBI hardship letters, cuts monthly EMIs or settles dues, blocks illegal recovery calls, and keeps your family stress-free.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Request Free Relief Review
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
                  <span><strong>RBI Hardship Drafting:</strong> Custom letters for EMI cuts and pauses.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-Harassment Shield:</strong> Stop illegal calls to you, HR, or spouse.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Penal Fee Audit:</strong> Remove illegal compounded late charges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombudsman Support:</strong> Fast filing under RB-IOS 2026 rules.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/loan-restructuring-settlement-terminal-illness-disability"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Medical Hardship Loan Restructuring
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Health crisis EMI relief &rarr;</span>
                </Link>

                <Link
                  href="/how-to-write-a-hardship-letter-for-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    How to Write a Loan Hardship Letter
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Step-by-step bank template &rarr;</span>
                </Link>

                <Link
                  href="/rbi-guidelines-on-penal-charges-in-loan-accounts"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Penal Charges Guidelines
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop late fee compounding &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
