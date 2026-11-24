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

export default function CorporateTieUpRateHikeClient() {
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
    { id: 'statutory-framework', label: '1. RBI Rules on Post-Exit Hikes' },
    { id: 'fixed-vs-floating', label: '2. Fixed vs Floating & Staff Loans' },
    { id: 'rate-hike-math', label: '3. Rate Step-Up EMI & Cost Math' },
    { id: 'kfs-penal-shields', label: '4. KFS, Notice & Penal Charge Ban' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Dispute SOP' },
    { id: 'borrower-legal-rights', label: '7. Contract Law & Court Rulings' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Resignation to Refund Timeline' },
    { id: 'specialized-scenarios', label: '10. Layoffs, Overdrafts & Transfers' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Portals' }
  ];

  const faqs = [
    {
      q: 'Can a bank hike my corporate tie-up personal loan rate after I resign?',
      a: 'Not automatically. A bank cannot raise a fixed loan rate on its own. It can do so only if your signed contract and Key Facts Statement (KFS) clearly include an exit step-up clause.'
    },
    {
      q: 'What happens to a fixed-rate corporate salary loan when my salary stops?',
      a: 'Your salary account usually changes into a normal savings account after 30 to 90 days of no salary credits. Your fixed loan rate stays unchanged if you keep paying EMIs on time and no exit clause exists.'
    },
    {
      q: 'Can a bank backdate a rate hike to the exact day I left my job?',
      a: 'No. Under the RBI Fair Practices Code (DBOD.Leg.No.BC.104/09.07.007/2002-03), any valid rate or charge change applies only going forward. Lenders must give prior written notice and can never backdate a hike.'
    },
    {
      q: 'How is a corporate tie-up personal loan different from a bank staff loan?',
      a: 'A bank staff loan gives bank staff a 4% to 6% rate under staff rules, and it shifts to market rates upon exit. A corporate tie-up loan for IT or private staff is a retail loan ruled only by your KFS and loan deed.'
    },
    {
      q: 'Can a bank add extra penal interest if I stop crediting salary to that bank?',
      a: 'No. Under RBI Circular RBI/2023-24/53 (effective April 1, 2024), banks cannot add penal interest onto your loan rate. Any breach fee must be a separate, flat penal charge with zero compounding.'
    },
    {
      q: 'What if the rate step-up clause was missing from my Key Facts Statement (KFS)?',
      a: 'Under RBI Circular RBI/2024-25/18 (effective October 1, 2024), lenders must list all rate triggers in the KFS upfront. Any hidden step-up rule missing from your KFS cannot be charged without your clear written consent.'
    },
    {
      q: 'Can a bank raise my floating-rate spread just because I changed companies?',
      a: 'Not without proof. Under the RBI Master Direction on Interest Rate on Advances, a bank can raise your credit spread only after a full written review showing higher risk. Switching to a stable job is not credit decay.'
    },
    {
      q: 'Do I have to pay foreclosure fees if I transfer my hiked loan to another bank?',
      a: 'Under the RBI Pre-payment Charges Directions, 2025 (from January 1, 2026), floating personal loans have zero foreclosure fees and zero lock-in. Fixed loans carry foreclosure fees only if clearly printed in your KFS.'
    },
    {
      q: 'What relief can the RBI Ombudsman grant for an illegal post-exit rate hike?',
      a: 'Under the Reserve Bank - Integrated Ombudsman Scheme, 2026, the Ombudsman can roll back an invalid hike and order a full refund. It can also award up to ₹30 lakh for direct loss plus up to ₹3 lakh for stress.'
    },
    {
      q: 'How does CredSettle help if my corporate loan EMI jumps after a job exit?',
      a: 'CredSettle audits your KFS and loan deed and sends RBI legal notices to reverse illegal hikes. We also file RBI Ombudsman cases and negotiate lower EMIs or One-Time Settlement (OTS) after layoffs.'
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
            <span>RBI Fair Practices Code, KFS &amp; Salary Loan Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Audit Post-Resignation Interest Step-Up on Salary Loans
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did your bank hike your corporate tie-up personal loan interest rate after you left your job? Check your Key Facts Statement, invoke binding RBI rules, and stop unfair rate jumps today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Audit My Loan Rate Hike</span>
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
                  Protected by RBI KFS Rules (2024), Fair Practices Code, Penal Charges Ban, and RB-IOS 2026.
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
                <span>EXECUTIVE BRIEF: CORPORATE LOAN RATE HIKES AFTER JOB EXIT</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Silent Hike on Fixed Loans:</strong> Banks cannot raise a fixed loan rate after you quit. They need a clear step-up clause in your signed contract.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">KFS Disclosure Mandate:</strong> Under RBI Circular RBI/2024-25/18, all rate rules must be in your KFS. Any missing fee or hike is void without your written okay.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Prospective Notice Only:</strong> Under the RBI Fair Practices Code, valid rate changes apply only going forward. Backdated interest debits are illegal.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Ban on Penal Rate Jumps:</strong> Under RBI Circular RBI/2023-24/53, lenders cannot add penal interest onto your rate. All breach fees must stay flat and separate.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero-Fee Exit on Floating Loans:</strong> Under RBI Pre-payment Directions, 2025 (from Jan 1, 2026), floating personal loans carry zero foreclosure fees and zero lock-in.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: RBI Rules on Corporate Loan Rate Hikes After Exit */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Rules &amp; Central Bank Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Rules on Corporate Loan Rate Hikes After Exit
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many salaried staff in India get personal loans through a corporate salary tie-up. Banks give lower rates to workers at top IT, MNC, and PSU firms. These special deals often cut your rate by 0.5% to 2% and reduce fees.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Trouble starts when you resign, switch jobs, or face a layoff. After 30 to 90 days of no salary credits, your bank changes your salary account into a normal savings account. Some lenders then raise your active personal loan rate by 2% to 5%.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In India, banks and NBFCs cannot raise your loan rate on a whim. Every rate hike must pass strict tests under the Indian Contract Act and Reserve Bank of India (RBI) rules. If your loan deed has no exit step-up term, the hike is unlawful.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even if a written clause exists, the lender must still obey RBI notice rules. It must give you advance written notice and apply the change only going forward. It can never backdate extra interest to the month you left work.
              </p>
            </section>

            {/* SECTION 2: Fixed vs Floating Rates & Bank Staff Loan Rules */}
            <section id="fixed-vs-floating" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Loan Type Audit &amp; Key Distinctions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Fixed vs Floating Rates &amp; Bank Staff Loan Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Whether your lender can touch your interest rate depends on your exact loan type. Many borrowers mix up regular corporate salary loans with bank staff loans. Knowing which bucket you fall into decides your legal defense.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most corporate tie-up personal loans (like SBI Xpress Credit or private bank salary term loans) carry a fixed rate. That rate stays locked for the full tenure. Resigning does not let the bank break a fixed rate unless a clear exit clause sits in your signed KFS.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Floating-rate loans work differently. Under the RBI Master Direction on Interest Rate on Advances (2016), the rate equals an external benchmark plus a spread. A bank can raise your credit risk spread only after a full written risk review under its Board policy.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Other spread parts, such as bank profit margins, stay locked for at least three years. Moving to a new job with steady pay does not prove higher credit risk. By contrast, a bank&apos;s own staff loan (at 4% to 6% for bank employees) legally converts to market rates upon exit under staff service rules.
              </p>
            </section>

            {/* SECTION 3: Rate Step-Up Math: Extra Interest & EMI Impact */}
            <section id="rate-hike-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Impact Audit &amp; Extra Cost Ledger</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Rate Step-Up Math: Extra Interest &amp; EMI Impact
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A small 2% to 6% rate jump after you resign costs far more than most people realize. Many banks hide the jump by keeping your EMI the same and stretching your loan tenure by several months.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Consider a ₹10,00,000 corporate personal loan taken at 10.75% for 60 months (original EMI: ₹21,618). Suppose you leave your job after 12 months with ₹8,40,371 left to pay over 48 months. The table below shows your real extra burden.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">₹10 Lakh Corporate Loan Step-Up Ledger (48 Months Left)</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Base Rate: 10.75%</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Post-Exit Interest Rate</th>
                        <th className="p-3">Revised Monthly EMI</th>
                        <th className="p-3">Monthly Jump</th>
                        <th className="p-3 text-right">Extra Cost (48 Months)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">10.75% (Original Tie-Up Rate)</td>
                        <td className="p-3 font-mono">₹21,618</td>
                        <td className="p-3 text-emerald-600 font-semibold">₹0 (Locked Rate)</td>
                        <td className="p-3 text-right font-bold text-slate-500 font-mono">₹0</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">12.75% (+2% Discount Cut)</td>
                        <td className="p-3 font-mono text-amber-700 font-bold">₹22,441</td>
                        <td className="p-3 text-amber-600 font-semibold">+₹823 / month</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">₹39,503</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">14.75% (+4% Retail Card Rate)</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">₹23,282</td>
                        <td className="p-3 text-rose-600 font-semibold">+₹1,664 / month</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">₹79,865</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">16.75% (+6% Penal Repricing)</td>
                        <td className="p-3 font-mono text-[#1886ff]">₹24,140</td>
                        <td className="p-3 text-[#1886ff]">+₹2,522 / month</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹1,21,077</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: KFS Disclosure, Prospective Notice & Penal Charge Ban */}
            <section id="kfs-penal-shields" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Three Binding RBI Protections Against Rate Traps</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. KFS Disclosure, Prospective Notice &amp; Penal Charge Ban
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Three strict RBI circulars protect you from surprise interest hikes after a job switch. First, check your Key Facts Statement (KFS). Under RBI Circular RBI/2024-25/18 (mandatory from October 1, 2024), lenders must print all interest triggers, reset clauses, and fees upfront in simple words.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Any fee or rate jump missing from your KFS cannot be charged without your clear written consent. Second, check the date of the hike. Under the RBI Fair Practices Code (DBOD.Leg.No.BC.104/09.07.007/2002-03), lenders must send prior notice before changing terms and apply changes only going forward.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, check whether the bank calls the jump a penalty for leaving your salary account. Under RBI Circular RBI/2023-24/53 (in force from April 1, 2024), banks and NBFCs cannot levy penal interest on top of your loan rate for breaking a loan condition.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Any penalty for missing a salary-credit rule must be billed as a separate, reasonable penal charge. Lenders can never add that penalty to your loan principal or charge interest on top of it. For floating loans, RBI Circular RBI/2023-24/55 also requires clear notice of EMI and tenure impact.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Post-Exit Rate Audit Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual guide highlights your core shields against unfair post-resignation loan hikes. Use it alongside your Key Facts Statement to audit your bank notice and protect your monthly EMI.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/corporate-tie-up-personal-loan-rate-hike-after-resign.jpg"
                    alt="Corporate Tie-Up Personal Loan Rate Hike After Job Exit RBI Rules Audit Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Corporate Salary Loan Audit Framework • RBI Compliant</span>
                  <a
                    href="/images/infographics/corporate-tie-up-personal-loan-rate-hike-after-resign.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Dispute an Illegal Rate Hike */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Dispute an Illegal Rate Hike
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your lender increased your personal loan rate after your job exit, do not stay silent or skip EMIs. Follow these six steps to audit the jump and demand a full rollback.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Pull Your Signed Loan Agreement and KFS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your sanction letter, Key Facts Statement (KFS), and full EMI chart. If the bank never gave you a copy, demand it free under RBI Fair Practices rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Check for Any Explicit Exit Step-Up Clause
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Read the rate type, special discount, and reset clauses carefully. Confirm whether your loan is fixed or floating and whether an exit rate jump was printed upfront.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Shift Your NACH Mandate to Prevent Bounces
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Keep paying your regular EMI while you fight the hike. Move your auto-debit mandate to your active bank account so bounced EMIs never hurt your CIBIL score.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Map Your New Employer Corporate Tie-Up
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If your new company also has a salary tie-up with the same bank, send your new offer letter to HR and the branch. Mapping your new corporate code often restores your lower rate fast.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Send a Written Dispute Citing RBI Circulars
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email the Grievance Officer citing the RBI KFS Circular, the Fair Practices prospective rule, and the Penal Charges ban. Demand written proof of any risk review and a refund of excess interest.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Escalate to RBI Ombudsman or Refinance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank refuses relief within 30 days, file a free complaint at cms.rbi.org.in. If a valid exit clause exists, switch to a lower-rate bank via a balance transfer.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Contract Law, Supreme Court & Consumer Remedies */}
            <section id="borrower-legal-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Contract Law Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Contract Law, Supreme Court &amp; Consumer Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts decide loan interest disputes by reading the exact words of your signed contract alongside binding RBI rules. You win when you prove the bank stepped outside the signed deed or broke a central bank rule.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                At the same time, courts enforce written clauses you already signed. That is why auditing your contract before filing a legal claim saves time and boosts your odds of success.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 62, Indian Contract Act, 1872</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    As held in Citi Bank N.A. v. Standard Chartered Bank (SC), changing a fixed contract needs both sides to agree. A bank cannot rewrite a fixed rate on its own.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Central Bank of India v. Ravindra (2002 SC)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A Constitution Bench banned banks from compounding penal interest onto principal. Courts can also strike down harsh penalty rates that violate public policy.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hidden rate hikes, missing KFS disclosures, and backdated debits count as Unfair Contracts (Section 2(46)) and Deficiency in Service (Section 2(11)).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Contract Scope: Rajesh Monga (2024 SC)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In Rajesh Monga v. HDFC Ltd. and ICICI Bank v. Vishnu Bansal (NCDRC), courts upheld valid floating reset terms signed upfront. Always verify the exact text first.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Bank GRO to Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank GRO to Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Branch staff rarely have power to roll back automated core-banking rate jumps. Use the formal three-tier RBI escalation path to reach senior officers who can reverse the charge.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Relief &amp; Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank or NBFC Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 14 Working Days</td>
                      <td className="p-3">Checks KFS clauses, logs ticket ID, and fixes wrong salary-account tags.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">15 to 30 Calendar Days</td>
                      <td className="p-3">Reviews risk audit files, reverses backdated interest, and approves refunds.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman (RB-IOS 2026)</td>
                      <td className="p-3 font-mono">After 30 Days of PNO</td>
                      <td className="p-3">Orders rate rollback, excess refund up to ₹30 lakh, and up to ₹3 lakh for stress.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Resignation to Rate Refund: Key Legal Milestones */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Resignation to Rate Refund: Key Legal Milestones
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing each milestone after your last working day helps you spot silent repricing early and keep your credit report clean.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Window</th>
                      <th className="p-3">Banking Phase</th>
                      <th className="p-3">What the Lender Does</th>
                      <th className="p-3">Your Smart Action Plan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0 (Last Day)</td>
                      <td className="p-3 font-mono text-[11px]">Job Exit</td>
                      <td className="p-3">Employer stops corporate salary feed to your linked bank account.</td>
                      <td className="p-3">Download your KFS, signed loan deed, and current EMI ledger.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 30 to 90</td>
                      <td className="p-3 font-mono text-[11px]">Account Shift</td>
                      <td className="p-3">Converts corporate salary account into a normal savings account.</td>
                      <td className="p-3">Keep enough balance or shift your NACH mandate to your new bank.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Rate Hike Alert</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Repricing Trigger</td>
                      <td className="p-3">Sends rate hike SMS or silently adds extra EMIs to your schedule.</td>
                      <td className="p-3 font-bold text-amber-800">Audit KFS clauses and email Bank GRO within 7 days.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 15 to 30 Post-Notice</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">PNO Review</td>
                      <td className="p-3">Must give a written reply proving the contractual basis and risk audit.</td>
                      <td className="p-3 font-bold text-slate-900">Save the written reply or wait 30 days for Ombudsman eligibility.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31+ Post-Dispute</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">Ombudsman / Exit</td>
                      <td className="p-3">Faces RBI Ombudsman order for rate rollback and excess refund.</td>
                      <td className="p-3">File on cms.rbi.org.in or move loan via zero-fee balance transfer.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Special Cases: Layoffs, Overdrafts & Refinancing */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: Layoffs, Overdrafts &amp; Refinancing
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Job transitions are rarely simple. Whether you joined a rival firm, lost your job in a layoff, or hold a flexi salary overdraft, here is how Indian banking rules apply to your case.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Corporate Salary Overdrafts (Flexi / Drop-Line)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unlike fixed term loans, salary overdrafts renew yearly and tie drawing limits directly to monthly salary credits. Leaving work can trigger a limit freeze or higher rate at renewal, so plan a balance transfer early.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Zero-Fee Balance Transfer (2025/2026 RBI Rule)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the RBI Pre-payment Charges on Loans Directions, 2025 (effective January 1, 2026), floating-rate personal loans have zero foreclosure fees and zero lock-in. Move your loan freely if a new bank offers a cheaper rate.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Employer Payroll Deduction &amp; FinTech Tie-Up Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Some NBFCs partner with HR teams to deduct EMIs straight from payroll. After you resign, your old employer cannot withhold your relieving letter for a third-party NBFC loan unless you signed a lawful indemnity.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Involuntary Layoff &amp; Debt Settlement (OTS)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a layoff left you without income and a rate hike made EMIs impossible, seek formal hardship restructuring first. If default crosses 90 days (NPA), CredSettle can negotiate a legal One-Time Settlement with a full waiver on hiked interest.
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
                Frequently Asked Questions: Corporate Loan Rate Hikes
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers to the most common questions on corporate tie-up personal loan interest hikes after resignation, KFS rights, penal charge bans, and RBI Ombudsman relief.
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
                  <strong>RBI Key Facts Statement (KFS) Circular:</strong> RBI/2024-25/18, DOR.STR.REC.13/13.03.00/2024-25 (April 15, 2024; mandatory from October 1, 2024) on mandatory upfront disclosure of APR, rate triggers, and charges.
                </li>
                <li>
                  <strong>RBI Fair Practices Code for Lenders:</strong> DBOD.Leg.No.BC.104/09.07.007/2002-03 and NBFC Scale Based Regulation Master Direction (RBI/DoR/2023-24/106) mandating prior notice and prospective-only rate changes.
                </li>
                <li>
                  <strong>RBI Penal Charges Circular:</strong> RBI/2023-24/53, DoR.MCS.REC.28/01.01.001/2023-24 (effective April 1, 2024) banning penal interest additions and capitalization on non-compliance.
                </li>
                <li>
                  <strong>RBI Floating Rate Reset &amp; Pre-payment Directions:</strong> RBI/2023-24/55 (DOR.MCS.REC.32) on EMI-based floating loan resets, Master Direction - Interest Rate on Advances (2016), and Pre-payment Charges on Loans Directions, 2025 (effective January 1, 2026).
                </li>
                <li>
                  <strong>Statutes &amp; Supreme Court Precedents:</strong> Section 62 of the Indian Contract Act, 1872; Consumer Protection Act, 2019 (Sections 2(11), 2(46)); Reserve Bank - Integrated Ombudsman Scheme, 2026; Central Bank of India v. Ravindra (2002) 1 SCC 367; Rajesh Monga v. HDFC Ltd. (2024 SC).
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
                    <span>RBI Sachet Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://edaakhil.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>e-Daakhil Consumer Commission</span>
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
                  <Link href="/bank-refusing-personal-loan-agreement-copy-rbi-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Demand Loan Agreement Copy
                  </Link>
                  <Link href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Hidden KFS Fees Refund Rule
                  </Link>
                  <Link href="/rbi-floating-personal-loan-reset-negative-amortization" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Floating Rate Reset Rules
                  </Link>
                  <Link href="/rbi-guidelines-on-penal-charges-in-loan-accounts" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Penal Charges Guidelines
                  </Link>
                  <Link href="/can-hr-refuse-salary-account-switch-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Switch Salary Account Rules
                  </Link>
                  <Link href="/employer-withholding-relieving-letter-fnf-staff-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Relieving Letter &amp; Staff Loan
                  </Link>
                  <Link href="/corporate-credit-card-default-employee-company-liability" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Corporate Credit Card Liability
                  </Link>
                  <Link href="/flat-interest-rate-vs-reducing-apr-personal-loan-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Flat Rate vs Reducing APR
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
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
                Specialist in personal loan audits, RBI KFS rules, Fair Practices Code disputes, and debt settlement with deep experience helping salaried borrowers fight unfair bank repricing.
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
                  RATE HIKE AUDIT DESK
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Hiked Your Loan Rate After Job Exit?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team audits your KFS and loan contract, drafts RBI notices to stop illegal rate jumps, and helps you claim refunds or settle unaffordable EMIs safely.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Rate Audit Now
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
                  <span><strong>KFS &amp; Loan Deed Audit:</strong> Spot missing step-up clauses fast.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Notice Drafting:</strong> Stop backdated and penal rate jumps.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombudsman Filing Support:</strong> Full help on cms.rbi.org.in.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Layoff Debt Relief:</strong> Safe EMI restructuring or legal OTS.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/bank-refusing-personal-loan-agreement-copy-rbi-rule"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Refusing Loan Agreement Copy?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Demand free KFS &amp; contract &rarr;</span>
                </Link>

                <Link
                  href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Hidden Loan Fees Missing in KFS
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Claim RBI fee refunds &rarr;</span>
                </Link>

                <Link
                  href="/can-hr-refuse-salary-account-switch-personal-loan"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can HR Block Salary Account Switch?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Protect your monthly pay &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
