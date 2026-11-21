'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  Gavel,
  Landmark,
  Calendar
} from 'lucide-react';

export default function ChangeBillingCycleClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & RBI Rule' },
    { id: 'statutory-framework', label: '1. RBI Credit Card Billing Rules' },
    { id: 'march-2024-amendment', label: '2. March 2024 Amendment Update' },
    { id: 'salary-sync-math', label: '3. Salary Sync Math & Due Dates' },
    { id: 'grace-period-rules', label: '4. Interest-Free & 3-Day Grace' },
    { id: 'step-by-step-sop', label: '5. How to Change Your Billing Date' },
    { id: 'transition-cibil-trap', label: '6. Protecting CIBIL During Shift' },
    { id: 'borrower-rights', label: '7. Legal Rights on Bank Refusal' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Request to New Cycle Timeline' },
    { id: 'specialized-scenarios', label: '10. EMIs, Auto-Debit & Add-Ons' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Portals' }
  ];

  const faqs = [
    {
      q: 'Can I change my credit card billing cycle date under RBI rules?',
      a: 'Yes. Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct (2022, updated March 2024), card issuers must give cardholders the option to modify their billing cycle to suit their convenience.'
    },
    {
      q: 'How many times can I change my credit card billing date?',
      a: 'Originally, the 2022 RBI rule mandated at least a one-time option. After the March 2024 RBI amendment, banks must offer greater flexibility beyond a single lifetime change, subject to their cooling-off period between two requests.'
    },
    {
      q: 'What is the best credit card billing date for a salaried person?',
      a: 'If you receive your salary on the 1st of the month, choose a statement generation date between the 15th and 20th. Your payment due date will then fall between the 3rd and 8th of the next month, right after salary credit.'
    },
    {
      q: 'Does changing the billing cycle affect my CIBIL score?',
      a: 'No. Changing your statement date does not hurt your CIBIL score. However, you must pay the existing billed statement by its original due date during the transition month to avoid a late mark.'
    },
    {
      q: 'Can a bank charge a fee to change my credit card billing cycle?',
      a: 'No. Banks and card issuers do not charge any fee for modifying your billing cycle date under RBI guidelines. You can submit the request free via net banking, mobile app, or customer care.'
    },
    {
      q: 'Can I change my billing cycle if I have an overdue credit card balance?',
      a: 'Most banks require your credit card account to be active and free of overdue payments before approving a billing cycle change. Clear any past-due balance first, or contact CredSettle if you need debt relief.'
    },
    {
      q: 'What happens to my interest-free period during the transition month?',
      a: 'Your transition statement may cover slightly fewer or slightly more days than the standard 30-day cycle. RBI rules still require banks to give you at least a fortnight (15 days) from statement delivery to pay without interest.'
    },
    {
      q: 'Do existing credit card EMIs block a billing cycle date change?',
      a: 'Some banks pause billing cycle changes while an active merchant EMI or loan-on-card is running, while others adjust future EMI billing dates automatically. Check your bank terms or ask customer support before applying.'
    },
    {
      q: 'What if my bank refuses to change my credit card billing date?',
      a: 'File a written complaint with the bank Grievance Redressal Officer (GRO) citing the RBI Master Direction on Credit Card Conduct. If unresolved within 30 days, escalate the matter to the RBI Integrated Ombudsman at cms.rbi.org.in.'
    },
    {
      q: 'How does CredSettle help if mismatched billing dates caused credit card debt?',
      a: 'If late fees, revolving interest, and mismatched due dates have pushed your card into default, CredSettle audits wrongful charges, stops recovery harassment, and negotiates a legal One-Time Settlement (OTS) with your bank.'
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
            <span>RBI Master Direction on Credit Card Conduct (2022 &amp; 2024 Update)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Use RBI Billing Cycle Rule to Avoid Credit Card Late Fees
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Sync your credit card statement and due date with your monthly salary under Reserve Bank of India rules. Stop recurring late payment penalties, protect your CIBIL score, and take control of your monthly cash flow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Resolve Credit Card Late Fee Disputes</span>
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
                  <span>RBI Cardholder Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Master Direction on Credit Card Conduct and the Consumer Protection Act, 2019.
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
                <span>EXECUTIVE BRIEF: RBI BILLING CYCLE SALARY SYNC RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Right to Change Billing Date:</strong> Under the RBI Master Direction on Credit Cards, every bank must let you change your credit card billing cycle to match your salary schedule.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Expanded Choice (March 2024):</strong> RBI updated the 2022 rule so banks no longer lock you into one lifetime change. You can update dates again if your pay date shifts.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Minimum 15-Day Payment Window:</strong> Banks must send your bill on time and give at least 15 days to pay before charging interest.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">3-Day Grace Shield:</strong> Before marking a card past due in CIBIL or adding late fees, banks must honor RBI grace rules and send clear alerts.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Processing Fee:</strong> Banks cannot charge a fee to update your billing cycle. Requests work online via net banking, mobile apps, or customer support.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Framework */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Mandate &amp; Cardholder Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Framework: RBI Credit Card Billing Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many salaried Indians miss credit card due dates for one simple reason. Their card due date falls around the 22nd or 25th of the month, while their salary arrives on the 1st or 7th.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even a one-day cash shortfall triggers heavy late payment fees, 18% GST, and high revolving interest rates of 36% to 45% per year. Worse, a single late mark can drop your CIBIL score by 50 to 100 points.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To solve this problem, the Reserve Bank of India issued the Master Direction on Credit Card and Debit Card Issuance and Conduct in April 2022. This rule took effect on July 1, 2022, and applies to all scheduled commercial banks and NBFC card issuers.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under these directions, the RBI noted that banks do not follow a single standard billing cycle. Therefore, RBI mandated that card issuers must give cardholders the option to change their billing cycle date to suit their cash flow.
              </p>
            </section>

            {/* SECTION 2: March 2024 Amendment */}
            <section id="march-2024-amendment" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>2022 Rule vs. 2024 Regulatory Update</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. March 2024 Amendment: Beyond the One-Time Option
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When the 2022 Master Direction launched, many banks treated the rule as a strict one-time lifetime privilege. If a customer switched jobs and their salary date moved from the 1st to the 10th, banks often refused a second change.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On March 7, 2024, the Reserve Bank of India updated the Master Direction to fix this gap. The new rule removed the strict one-time cap and told banks to give cardholders more choice.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Today, banks let you change your billing cycle more than once. Most banks keep a short gap, like 6 months or 1 year, between two requests. They must also let you apply through mobile apps, net banking, IVR, or email.
              </p>
            </section>

            {/* SECTION 3: Salary Sync Math */}
            <section id="salary-sync-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Statement Date vs. Payment Due Date</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Salary Sync Math: Optimal Statement &amp; Due Dates
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most people confuse their billing date with their payment due date. Your billing date is the day your monthly statement generates. Your due date usually falls 18 to 20 days after that statement date.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To never miss a payment, set your due date 4 to 6 days after your salary hits your bank account. This buffer protects you against weekend delays, NEFT holidays, or late payroll processing.
              </p>

              {/* Salary Sync Matrix Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Ideal Billing Cycle Mapping by Salary Date</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">18 to 20 Days Payment Window</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Your Monthly Salary Date</th>
                        <th className="p-3">Best Statement Date</th>
                        <th className="p-3">Resulting Due Date</th>
                        <th className="p-3 text-right">Cash-Flow Safety Buffer</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Last Day / 1st of Month</td>
                        <td className="p-3 font-mono font-bold text-[#1886ff]">16th to 18th</td>
                        <td className="p-3 font-mono">4th to 7th (Next Month)</td>
                        <td className="p-3 text-right font-bold text-emerald-600">4 to 6 Days Buffer</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">5th of Every Month</td>
                        <td className="p-3 font-mono font-bold text-[#1886ff]">20th to 22nd</td>
                        <td className="p-3 font-mono">9th to 11th (Next Month)</td>
                        <td className="p-3 text-right font-bold text-emerald-600">4 to 6 Days Buffer</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">7th of Every Month</td>
                        <td className="p-3 font-mono font-bold text-[#1886ff]">22nd to 24th</td>
                        <td className="p-3 font-mono">11th to 13th (Next Month)</td>
                        <td className="p-3 text-right font-bold text-emerald-600">4 to 6 Days Buffer</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">10th of Every Month</td>
                        <td className="p-3 font-mono font-bold text-[#1886ff]">25th to 27th</td>
                        <td className="p-3 font-mono">14th to 16th (Next Month)</td>
                        <td className="p-3 text-right font-bold text-emerald-600">4 to 6 Days Buffer</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">15th / Mid-Month Pay</td>
                        <td className="p-3 font-mono text-[#1886ff]">1st to 3rd</td>
                        <td className="p-3 font-mono">20th to 22nd (Same Month)</td>
                        <td className="p-3 text-right text-[#1886ff] font-mono">5 to 7 Days Buffer</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Interest-Free Period & 3-Day Grace */}
            <section id="grace-period-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Payment Window &amp; Credit Bureau Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Interest-Free Period &amp; 3-Day Grace Window Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Matching your billing date also guards your interest-free days. Under RBI rules, banks must send your bill right away and give at least 15 days to pay.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                RBI rules also give a safety net for small delays. A bank cannot report your card as past due to CIBIL, Experian, or Equifax unless it stays unpaid past the 3-day grace window after the due date.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even so, do not count on the 3-day grace window every month. Some banks charge interest on new spends if you miss the main due date. Syncing your bill with your salary removes this risk.
              </p>
            </section>

            {/* SECTION 5: Step-by-Step SOP */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP: Changing Your Billing Cycle Date
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six practical steps to shift your credit card billing cycle cleanly without triggering late fees or system errors.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Clear Any Overdue or Unpaid Minimum Balance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check your card app and pay any pending minimum or total due first. Most banks reject billing cycle change requests if the account shows an overdue status.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Pick Your New Statement Date Using Salary Math
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Add 18 to 20 days to your chosen statement date to confirm your new due date. Make sure the due date lands 4 to 6 days after your salary arrives.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Submit Request via Bank App or Net Banking
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Open your bank mobile app or net banking portal under Credit Card Services. Select Change Billing Cycle Date, pick from the available dates, and save your service request number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Use Email Support if App Option Is Missing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the app blocks the option, email customer care citing the RBI Master Direction on Credit Card Conduct. Keep a screenshot of your request and the bank reply.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Pay the Transition Statement on Its Existing Due Date
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Your new cycle usually takes effect from the next billing month. Always pay the current active bill by its original due date so no late fee is charged.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Verify New Statement Date and Update Auto-Debit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once the next statement arrives, check the new due date. Update any manual calendar reminders or standing instructions in your savings account to match.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Transition Trap */}
            <section id="transition-cibil-trap" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Avoiding Hidden Transition Pitfalls</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Transition Trap: Protecting CIBIL During Cycle Shift
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The biggest risk comes in the 30 days right after you change your billing date. Many people think the new due date applies to a bill they already received.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In fact, the new date applies only from your next cycle. Your old bill keeps its old due date. If you miss that bill, the bank may mark a Days Past Due (DPD) entry on your CIBIL report.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Also watch out for a shorter or longer bill in the shift month. Your first new bill may cover 15 to 45 days. Check your email and bank app closely during that month.
              </p>
            </section>

            {/* SECTION 7: Borrower Legal Rights */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Remedies &amp; Consumer Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Borrower Legal Rights: Bank Refusal &amp; Wrongful Fees
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks must follow RBI Master Directions strictly. If an issuer denies a valid billing cycle request or charges wrongful late fees during a bank-delayed transition, you have strong legal remedies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>RBI Master Direction Enforcement</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the March 2024 RBI rule, banks cannot use old one-time policies to block fair billing date changes.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>30-Day Billing Dispute Resolution</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you challenge a late fee or interest charge from a cycle shift, the bank must check and reply with proof within 30 days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Denying an RBI-mandated service or hurting your credit score via bank errors is a service lapse under Section 2(11) of this Act.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>CIBIL Error Rectification Right</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Credit Information Companies Act, banks must fix wrong DPD marks caused by billing shift errors within 30 days.
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
                8. 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If customer care refuses to update your billing date or reverse a transition late fee, use the official three-tier banking escalation system.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Approves billing cycle change manually and reverses transition late fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Audits system rejection logs, waives GST/interest, and updates CIBIL status.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-Complaint</td>
                      <td className="p-3">Issues binding orders on cms.rbi.org.in for fee refunds and compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Request to New Statement Cycle
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing how banks process a billing cycle change helps you avoid missed payments during the handover month.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Processing Phase</th>
                      <th className="p-3">Bank Action Required</th>
                      <th className="p-3">Cardholder Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0</td>
                      <td className="p-3 font-mono text-[11px]">Request Filed</td>
                      <td className="p-3">Logs request and checks account for zero overdue status.</td>
                      <td className="p-3">Save SRN number and confirmation email or SMS.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 5</td>
                      <td className="p-3 font-mono text-[11px]">System Approval</td>
                      <td className="p-3">Confirms new statement date via SMS and registered email.</td>
                      <td className="p-3">Verify the new date matches your salary buffer math.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Current Due Date</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Transition Bill</td>
                      <td className="p-3">Keeps existing billed statement on old payment deadline.</td>
                      <td className="p-3 font-bold text-amber-800">Pay existing bill in full before old due date expires.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Next Statement</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">New Cycle Active</td>
                      <td className="p-3">Generates statement on new date with 15+ day payment window.</td>
                      <td className="p-3 font-bold text-slate-900">Confirm new due date and reset auto-debit mandate.</td>
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
                10. Specialized Scenarios: EMIs, Auto-Debit &amp; Add-Ons
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Certain card features interact with a billing cycle change. Check these four common scenarios before submitting your request.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Active Merchant EMIs &amp; Insta Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Some banks restrict billing cycle edits when an active card EMI or loan-on-card exists. Ask support if your EMI schedule shifts automatically or requires foreclosure first.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Auto-Debit &amp; Standing Instructions
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you use NACH or savings account auto-debit, verify that the bank updates the pull date automatically. Keep extra balance in your account during the transition month.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Add-On Supplementary Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Add-on cards share the primary cardholder billing statement. When you change the primary card billing date, all supplementary cards shift to the new cycle automatically.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Cards Already in Revolving Debt or Default
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If mismatched due dates already trapped you in minimum-due debt and late fees, changing the date alone will not fix the balance. Consider formal debt restructuring or <Link href="/services/credit-card-settlement" className="text-[#1886ff] hover:underline font-semibold">credit card settlement</Link>.
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
                Frequently Asked Questions: Credit Card Billing Date
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers to common questions on changing your credit card billing cycle date, RBI salary sync rules, grace periods, and CIBIL safety.
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
                  <strong>Reserve Bank of India Master Direction:</strong> Master Direction - Credit Card and Debit Card - Issuance and Conduct Directions, 2022 (DoR.AUT.REC.No.27/24.01.041/2022-23, amended March 7, 2024).
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Section 10, Deficiency in Service and Billing Dispute Redressal.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) (Deficiency of Service) and Section 39 (Relief for Unfair Banking Charges).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005:</strong> Section 21, Alteration and Rectification of Inaccurate Credit Reports.
                </li>
              </ul>

              {/* Outbound Authority Badges */}
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
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
                  </Link>
                  <Link href="/unactivated-credit-card-charges-rbi-500-day-penalty" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unactivated Card 500/Day Rule
                  </Link>
                  <Link href="/unsolicited-credit-card-upgrade-limit-increase-rbi-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unsolicited Card Upgrade Rule
                  </Link>
                  <Link href="/unused-credit-card-annual-fee-cibil-npa-rbi-closure" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unused Card Annual Fee CIBIL
                  </Link>
                  <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Overlimit Fee Refund Rule
                  </Link>
                  <Link href="/credit-card-pending-chargeback-rbi-shadow-credit-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pending Chargeback Rules
                  </Link>
                  <Link href="/co-branded-credit-card-default-partner-app-block-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Co-Branded Card Default Law
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Guidelines
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
                Specialist in banking compliance, credit card dispute defense, RBI Master Directions, and loan settlement resolutions helping Indian borrowers challenge unfair charges and resolve debt legally.
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
                  CREDIT CARD DEBT SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Late Fees &amp; Interest Trapped Your Card?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  If mismatched due dates and compounding late fees pushed your credit card into default, our team disputes wrongful charges and negotiates legal OTS waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Card Debt Review
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
                  <span><strong>RBI Rule Enforcement:</strong> Challenge wrongful late fees and interest.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Error Rectification:</strong> Remove inaccurate transition DPD marks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-Harassment Shield:</strong> Stop unlawful recovery calls immediately.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombudsman Escalation:</strong> Structured filings on cms.rbi.org.in.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/unactivated-credit-card-charges-rbi-500-day-penalty"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unactivated Card RBI 500/Day Rule
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Billing dispute penalty &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-overlimit-fee-without-consent-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Overlimit Fee Without Consent Refund
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI consent &amp; reversal rules &rarr;</span>
                </Link>

                <Link
                  href="/services/credit-card-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Debt Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal OTS &amp; waiver process &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
