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

export default function RuleOf78InterestClient() {
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
    { id: 'what-is-rule-of-78', label: '1. Rule of 78 Explained' },
    { id: 'reducing-balance-vs-rule-78', label: '2. Rule of 78 vs Reducing Balance' },
    { id: 'calculation-matrix', label: '3. ₹5 Lakh Personal Loan Math' },
    { id: 'rbi-regulatory-rules', label: '4. RBI KFS & Prepayment Rules' },
    { id: 'visual-blueprint', label: '5. Visual Audit Blueprint' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Dispute SOP' },
    { id: 'borrower-rights', label: '7. Legal & Consumer Court Relief' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Audit to Refund Timeline' },
    { id: 'specialized-scenarios', label: '10. NBFCs, Apps & Flat-Rate Traps' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Portals' }
  ];

  const faqs = [
    {
      q: 'What is the Rule of 78 in a personal loan?',
      a: 'The Rule of 78 is a loan math rule that loads most interest into your early EMIs. For a 12-month loan, adding 1 to 12 gives 78. The bank takes 12/78 of total interest in Month 1 and only 1/78 in Month 12.'
    },
    {
      q: 'Why does my personal loan principal barely drop in year one?',
      a: 'In early months, most of your EMI pays interest first. High rates slow down principal cuts even on fair loans. Under Rule of 78, the lender takes an even larger interest share upfront, so your debt shrinks much slower.'
    },
    {
      q: 'Does the Rule of 78 cost more if I pay all EMIs on time?',
      a: 'No. If you keep the loan till the last EMI, your total cost stays the same. The trap hits only when you close the loan early. Since you already paid most interest early, you still owe a larger principal balance.'
    },
    {
      q: 'Is the Rule of 78 legal for banks and NBFCs in India?',
      a: 'Most Indian banks now use the reducing-balance method for retail loans. Some NBFCs and loan apps still use flat rates or sum-of-digits closure math. Under RBI KFS rules, a lender cannot charge any hidden formula or fee you did not sign.'
    },
    {
      q: 'How does the RBI Key Facts Statement (KFS) protect borrowers?',
      a: 'RBI Circular RBI/2024-25/18 (April 15, 2024) makes a clear KFS a must for all banks and NBFCs. Before you sign, the lender must share your true APR and monthly split of principal and interest. Hidden loan math breaks this RBI rule.'
    },
    {
      q: 'Can a lender charge a closure fee on a floating-rate personal loan?',
      a: 'No. The RBI Pre-payment Directions, 2025 took effect on January 1, 2026. Banks and NBFCs must charge zero closure fees on floating-rate personal loans for individuals. There is also no lock-in period for early payoff.'
    },
    {
      q: 'What if my fixed-rate loan has front-loaded interest and a 5% fee?',
      a: 'A lender can charge a closure fee on a fixed-rate loan only if it was printed in your KFS. Check your monthly loan chart first. If the lender raised your principal past the KFS chart or hid the fee, you can dispute it.'
    },
    {
      q: 'How do I check if my NBFC used Rule of 78 on my quote?',
      a: 'Ask your lender for your signed KFS, monthly payoff chart, and full closure bill. Match the unpaid principal on your bill with a reducing-balance EMI tool. If your bill asks for more principal, your interest was front-loaded.'
    },
    {
      q: 'Where can I complain if a lender rejects my interest dispute?',
      a: 'First write to the bank or NBFC Grievance Officer (GRO) with your KFS and math proof. If they do not fix it in 30 days, file a free claim at cms.rbi.org.in with the RBI Ombudsman. You can also approach Consumer Court.'
    },
    {
      q: 'How does CredSettle help with front-loaded personal loan traps?',
      a: 'CredSettle checks your KFS, monthly chart, and closure quote against RBI rules. We write formal claims to Nodal Officers and file RBI Ombudsman cases for refunds. If EMIs get too heavy, we also help you settle the loan fairly.'
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
            <span>RBI Key Facts Statement (KFS) &amp; Interest Audit Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Why Personal Loan Principal Barely Drops in Early EMIs
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Learn how Rule of 78 loads most loan interest into your early EMIs and raises early payoff bills. Check your loan sheet under RBI KFS rules and fight unfair bank or NBFC fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Audit My Loan Foreclosure</span>
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
                  Protected under RBI Circular RBI/2024-25/18 (KFS), RBI/2024-25/30, and RBI Pre-payment Directions 2025.
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
                <span>EXECUTIVE BRIEF: RULE OF 78 &amp; FORECLOSURE RIGHTS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">73% Interest Paid by Halfway:</strong> On a 12-month Rule of 78 loan, lenders take 57/78 (73.1%) of total interest in just the first 6 EMIs.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">High Early Payoff Cost:</strong> Closing early hurts most under Rule of 78. Your principal drops much slower than on a fair reducing-balance loan.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">RBI KFS Disclosure Rule:</strong> Under Circular RBI/2024-25/18, lenders must give you a Key Facts Statement with true APR and a full monthly chart before you sign.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Fee on Floating Loans:</strong> RBI Pre-payment Rules (effective January 1, 2026) ban all closure fees on floating-rate personal loans for individuals.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Right to Dispute &amp; Refund:</strong> You can challenge any hidden formula or fee not shown in your KFS. File a claim with the RBI Ombudsman or Consumer Court.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Rule of 78 Explained */}
            <section id="what-is-rule-of-78" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Loan Pricing Math &amp; Front-Loading Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Rule of 78 Explained: How Front-Loaded Interest Works
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers in India get a shock when they try to close a personal loan early. Even after paying 12 or 18 EMIs on time, the principal left looks almost the same. A pricing rule called the Rule of 78 often causes this shock.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Rule of 78 is also called the Sum-of-the-Digits method. Lenders use it on flat-rate loans to take most of the interest in the early months. The name comes from a 12-month loan. Adding the numbers 1 through 12 gives 78.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under this rule, Month 1 carries the biggest interest share and Month 12 carries the smallest. On a 12-month loan, you pay 12/78 (15.38%) of yearly interest in Month 1. You pay 11/78 (14.10%) in Month 2. By Month 12, you pay just 1/78 (1.28%).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For longer loans, lenders use the same math: N times (N + 1), divided by 2. A 24-month loan has a digit sum of 300. A 36-month loan has a sum of 666. In each case, the lender collects about 73% to 75% of all interest in the first half of the loan.
              </p>
            </section>

            {/* SECTION 2: Rule of 78 vs Reducing Balance */}
            <section id="reducing-balance-vs-rule-78" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Amortization Models Compared</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Rule of 78 vs Reducing Balance: Why Principal Stalls
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even on a fair reducing-balance loan, early EMIs hold more interest than later EMIs. This is normal because your debt is highest in Month 1. Each EMI cuts your debt a bit, so next month&apos;s interest falls.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, the Rule of 78 tilts this much harder toward the lender. It locks in the full interest upfront and takes a bigger bite from your first EMIs. Because of that, less of your cash goes toward cutting your debt.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you pay every EMI until the last month, both plans cost the same total rupees. The trap hits only when you prepay, switch banks, or close early. You end up owing more principal than a reducing-balance borrower on the same day.
              </p>

              {/* Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[580px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Loan Feature</th>
                      <th className="p-3">True Reducing Balance</th>
                      <th className="p-3">Rule of 78 (Sum-of-Digits)</th>
                      <th className="p-3">Flat Rate (Equal Split)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">How Interest Works</td>
                      <td className="p-3">Monthly interest on the actual balance left.</td>
                      <td className="p-3">Full interest fixed upfront and loaded into early EMIs.</td>
                      <td className="p-3">Interest billed on the full start amount for all years.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Principal Drop in Year 1</td>
                      <td className="p-3 text-emerald-700 font-semibold">Standard and fair</td>
                      <td className="p-3 text-rose-700 font-semibold">Very slow</td>
                      <td className="p-3 text-amber-700 font-semibold">Hidden inside flat EMI</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Early Payoff Cost</td>
                      <td className="p-3">Lowest. You pay only for days used.</td>
                      <td className="p-3 text-rose-700 font-semibold">Highest. Lender keeps unearned interest.</td>
                      <td className="p-3">Often turned into Rule of 78 at closure.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">RBI KFS Rule</td>
                      <td className="p-3 font-semibold text-[#1886ff]">Standard method across banks</td>
                      <td className="p-3">Must be printed in Annex C monthly chart.</td>
                      <td className="p-3">Must show true higher APR in KFS.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: Calculation Matrix */}
            <section id="calculation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Verified Rupee-by-Rupee Loan Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Amortization Math: ₹5 Lakh Personal Loan Comparison
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Look at a real Indian loan to see how much extra cash Rule of 78 takes on early payoff. Say you borrow ₹5,00,000 for 36 months. Your EMI is ₹19,616 (24% reducing APR), and total interest is ₹2,06,191.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The table below sets True Reducing Balance side by side with Rule of 78 (digit sum = 666). Look at Month 12, when many borrowers try to switch banks or close their loan. That is where the hidden gap hits its peak.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">₹5,00,000 Loan (36 Months | ₹19,616 EMI)</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Total Interest: ₹2,06,191</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[600px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Foreclosure Month</th>
                        <th className="p-3">Rule of 78 Interest Paid</th>
                        <th className="p-3">Reducing Principal Left</th>
                        <th className="p-3">Rule of 78 Principal Left</th>
                        <th className="p-3 text-right">Extra Foreclosure Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Month 1</td>
                        <td className="p-3 font-mono">₹11,145 (5.4%)</td>
                        <td className="p-3 font-mono">₹4,90,384</td>
                        <td className="p-3 font-mono text-amber-700">₹4,91,529</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">+₹1,145</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Month 6</td>
                        <td className="p-3 font-mono">₹62,229 (30.2%)</td>
                        <td className="p-3 font-mono">₹4,39,338</td>
                        <td className="p-3 font-mono text-amber-700">₹4,44,530</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">+₹5,192</td>
                      </tr>
                      <tr className="bg-rose-50/50">
                        <td className="p-3 font-bold text-slate-900">Month 12 (Peak Trap)</td>
                        <td className="p-3 font-mono font-bold text-rose-700">₹1,13,312 (55.0%)</td>
                        <td className="p-3 font-mono">₹3,71,024</td>
                        <td className="p-3 font-mono font-bold text-rose-700">₹3,77,915</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">+₹6,892</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Month 18 (Halfway)</td>
                        <td className="p-3 font-mono font-bold text-rose-600">₹1,53,250 (74.3%)</td>
                        <td className="p-3 font-mono">₹2,94,090</td>
                        <td className="p-3 font-mono text-rose-600">₹3,00,155</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">+₹6,065</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Month 24</td>
                        <td className="p-3 font-mono">₹1,82,043 (88.3%)</td>
                        <td className="p-3 font-mono">₹2,07,450</td>
                        <td className="p-3 font-mono">₹2,11,249</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">+₹3,798</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Month 36 (Full Term)</td>
                        <td className="p-3 font-mono text-[#1886ff]">₹2,06,191 (100%)</td>
                        <td className="p-3 font-mono text-[#1886ff]">₹0</td>
                        <td className="p-3 font-mono text-[#1886ff]">₹0</td>
                        <td className="p-3 text-right text-[#1886ff] font-mono">₹0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 sm:p-5 space-y-2">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-xs sm:text-sm">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <span>Quick 12-Month Flat-Rate Trap Check (₹3,00,000 at 18% Flat)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  An 18% flat rate on ₹3,00,000 for 12 months costs ₹54,000 in interest. That equals a 31.72% real APR and a ₹29,500 monthly EMI. If you close at Month 6 under Rule of 78, the lender keeps ₹39,462 (73.1% of all interest). Only ₹1,37,538 cuts your debt, so ₹1,62,462 stays unpaid.
                </p>
              </div>
            </section>

            {/* SECTION 4: RBI Rules */}
            <section id="rbi-regulatory-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Binding Central Bank Directives</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. RBI Rules: KFS Transparency &amp; Prepayment Directions
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India has four strict rules to stop hidden interest traps and shock payoff bills. These rules bind all banks, small finance banks, co-op banks, and NBFCs in India.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, RBI Circular RBI/2024-25/18 (April 15, 2024) makes a Key Facts Statement (KFS) a must for all retail loans. Before you sign, the bank must share your true APR. It must also give an Annex C chart showing each month&apos;s principal and interest split. Any charge missing from the KFS cannot be billed.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, RBI Circular RBI/2024-25/30 (April 29, 2024) bans unfair interest billing. Lenders cannot charge interest before cash reaches your bank account. They also cannot bill a full month for part-month use or take advance EMIs while billing interest on the full loan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, RBI Pre-payment Directions, 2025 (RBI/2025-26/64) took effect on January 1, 2026. Floating-rate personal loans for individuals now carry zero closure fees and no lock-in period. On fixed-rate loans, any closure fee must appear in the KFS upfront. Fourth, Circular RBI/2023-24/53 stops lenders from adding late fees to your loan principal.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Rule of 78 Interest Audit Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart shows how front-loaded interest hits early EMIs. It also shows how RBI KFS rules help you spot and fight unfair early payoff bills.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/rule-of-78-front-loaded-interest-personal-loan-dispute.jpg"
                    alt="Rule of 78 Front-Loaded Interest in Personal Loans Audit Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Personal Loan Interest Audit Framework • RBI KFS Compliant</span>
                  <a
                    href="/images/infographics/rule-of-78-front-loaded-interest-personal-loan-dispute.jpg"
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
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Audit &amp; Dispute Front-Loaded Dues
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your early payoff quote looks far too high, do not pay it right away. Follow these six steps to check the math and fight any extra charge.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Save Your KFS, Sanction Letter &amp; Loan File
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your signed Key Facts Statement (KFS), Annex C loan chart, and signed contract. Check if your rate is fixed or floating and note the true APR.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Ask for a Line-by-Line Closure Sheet
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email your lender for a full payoff breakup. Ask them to list unpaid principal, odd-day interest, closure fee, GST, and late fees clearly.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Match Principal Against a Reducing-Balance Tool
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Put your loan sum, tenure, and EMI into a true reducing-balance EMI tool. Match the unpaid debt at your EMI month with the lender quote.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Spot Hidden Rule of 78 or Fee Breaches
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check if the bank billed a closure fee on a floating loan or added a fee not in the KFS. Mark every extra rupee of debt or hidden interest.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Send a Written Claim to the GRO &amp; PNO
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Send your math sheet to the Grievance Officer (GRO) citing RBI/2024-25/18 and RBI/2024-25/30. Ask for a clean closure bill within 10 working days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: File With RBI Ombudsman &amp; Get Your NOC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the lender says no or stays quiet for 30 days, file online at cms.rbi.org.in. Once closed, save your No Dues Letter and check your CIBIL file.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Legal Remedies */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Rights &amp; Judicial Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Legal Remedies: Consumer Court &amp; Unfair Trade Claims
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian law gives strong tools when a bank or NBFC hides front-loaded math or blocks fair interest relief. You do not have to accept one-sided fine print.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You can use the Consumer Protection Act, 2019 and the Indian Contract Act, 1872. You can also use the RBI Ombudsman to win refunds and relief for stress.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Unfair Trade Practice (Section 2(47) CPA)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Selling a loan with a low flat rate while hiding Rule of 78 math is an unfair trade act. Consumer courts can cancel hidden fees and order refunds.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Deficiency in Service (Section 2(11) CPA)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Holding back a monthly payoff sheet or padding principal at closure is a service lapse. Consumer courts also award cash relief for mental stress.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Contract Act Relief (Sections 18 &amp; 74)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 18 protects you when a loan agent gives false rate facts. Section 74 stops lenders from forcing harsh fines that exceed real loss.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>RBI Integrated Ombudsman Awards</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The RBI Ombudsman can order lenders to refund extra interest and fix CIBIL data. It can also award up to ₹1 Lakh for loss of time and stress.
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
                8. 3-Tier Escalation Matrix: GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Branch staff and phone agents rarely fix loan math errors on a call. Always move up the official three-step bank complaint ladder in writing.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Banking Authority</th>
                      <th className="p-3">Time Limit</th>
                      <th className="p-3">What Relief You Get</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank or NBFC Grievance Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Shares your full monthly loan chart and checks KFS rules.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Fixes interest math, waives hidden fees, and sends a clean quote.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-GRO</td>
                      <td className="p-3">Orders binding refunds for extra interest via cms.rbi.org.in.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Milestones */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Milestones: Audit to Refund or Waiver
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking each step keeps your paper trail clean. It also lets you move straight to the RBI Ombudsman as soon as 30 days pass.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Dispute Phase</th>
                      <th className="p-3">What the Lender Must Do</th>
                      <th className="p-3">What You Should Do</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 3</td>
                      <td className="p-3 font-mono text-[11px]">File Audit</td>
                      <td className="p-3">Sends your KFS, signed contract, and closure quote.</td>
                      <td className="p-3">Check unpaid principal with a reducing-balance tool.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 4 to 10</td>
                      <td className="p-3 font-mono text-[11px]">GRO Claim</td>
                      <td className="p-3">Logs a formal ticket and checks KFS fee rules.</td>
                      <td className="p-3">Email math proof to GRO citing RBI/2024-25/18.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 11 to 20</td>
                      <td className="p-3 font-mono text-[11px]">PNO Review</td>
                      <td className="p-3">Audits loan math and hidden closure fee terms.</td>
                      <td className="p-3">Write to the Principal Nodal Officer if GRO says no.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 21 to 30</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Reply Window</td>
                      <td className="p-3">Sends a revised payoff bill or final reply.</td>
                      <td className="p-3 font-bold text-amber-800">Keep all emails ready for your RBI CMS claim.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">RBI CMS Filing</td>
                      <td className="p-3">Replies to RBI queries and fixes excess dues.</td>
                      <td className="p-3 font-bold text-slate-900">Upload KFS, EMI proofs, and math sheet on cms.rbi.org.in.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 and Beyond</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">Closure &amp; NDC</td>
                      <td className="p-3">Refunds extra cash, gives NDC, and updates CIBIL.</td>
                      <td className="p-3">Check Closed status on CIBIL, CRIF, Equifax, and Experian.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: NBFCs, Apps &amp; Flat-Rate Traps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Front-loaded interest rarely shows up alone. Lenders often mix it with lock-in rules, top-up loans, or high app fees. Here is how to handle four real cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Digital Loan Apps &amp; Small NBFCs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Many loan apps show low monthly flat rates and take heavy early interest. Under RBI rules, every app must name its NBFC partner and give a clear KFS upfront.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Double Hit: Closure Fee + 18% GST
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When Rule of 78 pads your unpaid debt, a 4% or 5% closure fee plus 18% GST hits that higher sum. Fixing your principal cuts both bills at once.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Top-Up Loans &amp; Refinance Resets
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A top-up loan after 12 EMIs restarts the high-interest cycle from Month 1. Check the net cost first before you roll an old loan into a new one.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    One-Time Settlement (OTS) Exit
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a job loss or health crisis makes EMIs too high, do not take fresh loans to pay interest. CredSettle can help you settle the loan legally and waive extra dues.
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
                Frequently Asked Questions: Rule of 78 Personal Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Plain-English answers to common doubts on Rule of 78 interest, slow principal cuts, RBI KFS rules, and fighting high early payoff bills.
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
                  <strong>Reserve Bank of India KFS Circular:</strong> RBI/2024-25/18, DOR.STR.REC.13/13.03.00/2024-25 (April 15, 2024), Key Facts Statement (KFS) for Loans and Advances, Annex A and Annex C Amortization Disclosures.
                </li>
                <li>
                  <strong>RBI Fair Practices Code on Interest:</strong> RBI/2024-25/30, DoS.CO.PPG.SEC.1/11.01.005/2024-25 (April 29, 2024), Fair Practices Code for Lenders - Charging of Interest.
                </li>
                <li>
                  <strong>RBI Pre-payment Directions, 2025:</strong> RBI/2025-26/64, DoR.MCS.REC.38/01.01.001/2025-26 (July 2, 2025, effective January 1, 2026), Reserve Bank of India (Pre-payment Charges on Loans) Directions, 2025.
                </li>
                <li>
                  <strong>RBI Penal Charges Circular:</strong> RBI/2023-24/53, DoR.MCS.REC.28/01.01.001/2023-24 (August 18, 2023), Fair Lending Practice - Penal Charges in Loan Accounts.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019 &amp; Indian Contract Act, 1872:</strong> Section 2(47) (Unfair Trade Practice), Section 2(11) (Deficiency in Service), and Sections 18 &amp; 74 (Misrepresentation and Penalty Relief).
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
                    <span>RBI Sachet Complaint Portal</span>
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
                  <Link href="/flat-interest-rate-vs-reducing-apr-personal-loan-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Flat Rate vs Reducing APR
                  </Link>
                  <Link href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Hidden Charges Missing in KFS
                  </Link>
                  <Link href="/personal-loan-interest-before-disbursal-bpi-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Interest Charged Before Disbursal
                  </Link>
                  <Link href="/flexi-hybrid-personal-loan-drop-line-overdraft-settle" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Flexi Hybrid Personal Loan Guide
                  </Link>
                  <Link href="/top-up-personal-loan-default-dual-account-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Top-Up Personal Loan Settlement
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/post-write-off-settled-pwos-meaning-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    PWOS Credit Report Meaning
                  </Link>
                  <Link href="/rbi-15-day-fortnightly-credit-bureau-update-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI 15-Day CIBIL Update Rule
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
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
                Expert in personal loan audits, RBI KFS rules, and bank debt relief. Helps Indian borrowers cut unfair charges and close loans safely.
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
                  FORECLOSURE AUDIT SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Shocked by High Foreclosure Dues?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team checks your KFS and loan math, fights hidden Rule of 78 charges at the RBI Ombudsman, and helps you exit debt cleanly.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Request Free Loan Audit
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
                  <span><strong>KFS &amp; APR Verification:</strong> Exact rupee-by-rupee amortization audit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Hidden Fee Reversal:</strong> Challenge illegal floating-loan closure penalties.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Escalation:</strong> End-to-end CMS complaint representation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Fair OTS Negotiation:</strong> Waive bloated interest when EMIs get unaffordable.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/flat-interest-rate-vs-reducing-apr-personal-loan-trap"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Flat Rate vs Reducing APR Trap
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Spot deceptive interest quotes &rarr;</span>
                </Link>

                <Link
                  href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Personal Loan Fees Missing in KFS
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Claim RBI refund for hidden fees &rarr;</span>
                </Link>

                <Link
                  href="/personal-loan-interest-before-disbursal-bpi-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Interest Charged Before Disbursal
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI April 2024 refund directive &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
