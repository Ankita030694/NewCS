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
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  Calendar,
  CreditCard
} from 'lucide-react';

export default function JumboLoanCreditCardDefaultClient() {
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
    { id: 'quick-crux', label: 'Quick Guide & Legal Rules' },
    { id: 'dual-account-structure', label: '1. Dual Account Structure' },
    { id: 'rbi-ucic-cross-default', label: '2. RBI UCIC & Cross-Default' },
    { id: 'within-vs-above-limit', label: '3. Within vs Over-Limit Loans' },
    { id: 'nach-bounce-setoff', label: '4. Auto-Debit & Salary Set-Off' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Chart' },
    { id: 'ots-settlement-math', label: '6. Combined Dual OTS Math' },
    { id: 'step-by-step-sop', label: '7. Dual Account OTS Steps' },
    { id: 'borrower-rights', label: '8. Borrower Rights & Case Law' },
    { id: 'escalation-matrix', label: '9. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '10. Default to NOC Timeline' },
    { id: 'specialized-scenarios', label: '11. Common Mistakes & Traps' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'RBI & Legal Citations' }
  ];

  const faqs = [
    {
      q: 'Is a Jumbo Loan on a credit card treated as a separate loan account?',
      a: 'Yes. Over-limit Jumbo Loans and many Insta Loans get their own Alternate Account Number (AAN) or Loan Account Number (LAN). Banks send a separate monthly bill and list it as a second loan on CIBIL.'
    },
    {
      q: 'What happens to my credit card if I miss EMIs on my Jumbo Loan?',
      a: 'Under RBI borrower-wise NPA rules, all accounts under your Unique Customer Identification Code (UCIC) share one status. If your Jumbo Loan stays unpaid past 90 days, the bank blocks your card and marks both as NPA.'
    },
    {
      q: 'Does settling my 16-digit credit card also close my Jumbo or Insta Loan?',
      a: 'No, unless the loan was merged into your card bill or clearly listed in your OTS letter. Separate AAN or LAN loans need one joint OTS letter or two separate letters.'
    },
    {
      q: 'Can the bank file a Section 25 bounce case for a Credit Card Jumbo Loan?',
      a: 'Normal card bills do not face cheque bounce laws unless auto-pay fails. Yet Jumbo Loans often link an e-NACH mandate to your bank account. A failed NACH debit can bring a Section 25 notice.'
    },
    {
      q: 'Can my bank deduct Jumbo Loan dues from my salary account?',
      a: 'If your salary lands in the same bank that gave the card and Jumbo Loan, the bank can hold or cut funds under Section 171 of the Indian Contract Act. It cannot touch your account in another bank without a court order.'
    },
    {
      q: 'How do banks treat in-limit Insta Loans vs over-limit Jumbo Loans on default?',
      a: 'In-limit Insta Loans block your card limit and add EMIs to the card bill. On 90-day default, unpaid EMIs cancel and merge into the card balance. Over-limit Jumbo Loans stay separate accounts with their own principal.'
    },
    {
      q: 'Can I settle both my credit card and Jumbo Loan together under RBI rules?',
      a: 'Yes. Under RBI Circular DOR.STR.REC.20/21.04.048/2023-24, every bank must keep a Board-approved OTS policy. You can ask for one joint settlement that closes both your card number and your Jumbo Loan number.'
    },
    {
      q: 'Why am I getting calls from two different recovery agencies from the same bank?',
      a: 'Banks often send late card bills to one agency and Jumbo Loan accounts to a second team. Once you start a joint OTS with the bank nodal desk, both call tracks can be brought under one plan.'
    },
    {
      q: 'How will a dual account OTS appear on my CIBIL report?',
      a: 'If the Jumbo Loan shows as its own loan line, both your card entry and the loan entry will show Settled with zero dues left. Under RBI rules, banks must send fresh status updates every 15 days.'
    },
    {
      q: 'What must I check on the OTS letter before paying a dual account settlement?',
      a: 'Check that the bank letter prints both your 16-digit card number and your exact Jumbo Loan AAN or LAN. Confirm the due dates, full fee waivers, and the promise of a No Dues Certificate (NOC) for both.'
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
            <span>RBI Dual Account &amp; OTS Settlement Rules</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Settling Insta &amp; Jumbo Loans on Credit Cards in India
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Jumbo and Insta Loans often open a second loan account next to your credit card. Learn how RBI cross-default rules work, stop NACH bounce fines, and settle both accounts the right way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Settle Dual Card &amp; Loan Dues</span>
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
                  Backed by RBI Circular DOR.STR.REC.20/21.04.048/2023-24 and RBI Card Rules, 2022.
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
                <span>QUICK SUMMARY: JUMBO &amp; INSTA LOAN DUAL ACCOUNT RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Second Loan Account:</strong> Over-limit Jumbo Loans (like HDFC Insta Jumbo Loan, SBI Encash, and ICICI Insta Loan) create a new loan number and bill outside your 16-digit card.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">UCIC Cross-Default Rule:</strong> Under RBI rules, if your credit card or your Jumbo Loan stays unpaid past 90 days, the bank marks both accounts as NPA.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Auto-Debit &amp; Bounce Risk:</strong> Jumbo Loans often link an auto-debit or e-NACH mandate to your bank account. Failed debits bring bounce fees and Section 25 notices.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Joint OTS Strategy:</strong> Settling only your 16-digit card leaves a separate Jumbo Loan still open. Always ask for one joint One-Time Settlement (OTS) for both.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Dual NOC Check:</strong> Before you pay any OTS sum, make sure the bank letter prints both account numbers and promises a No Dues Certificate (NOC) for each.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Dual Account Structure: Card vs Jumbo & Insta Loans */}
            <section id="dual-account-structure" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CreditCard className="w-4 h-4 text-[#1886ff]" />
                <span>How Bank Card Loans Work</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Dual Account Structure: Card vs Jumbo &amp; Insta Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Big Indian banks offer quick cash loans to credit card users with one OTP click. Common names are HDFC Insta Jumbo Loan, SBI Card Encash, ICICI Insta Loan, and Axis Instant Loan. Most users think this loan is just a normal swipe on their card.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In truth, banks run two very different loan models behind the app screen. Small Insta Loans taken inside your credit limit block your shopping limit. The bank adds those monthly EMIs straight to your normal card bill.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A Jumbo Loan works in a different way because it gives cash above your card limit. The bank opens a new Alternate Account Number (AAN) or Loan Account Number (LAN). You get a second monthly bill and a second loan line on CIBIL.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This split catches many people off guard after a job loss or hospital bill. Paying your 16-digit card bill does not pay your Jumbo Loan AAN. Worse still, settling one account alone leaves half your debt active.
              </p>
            </section>

            {/* SECTION 2: RBI UCIC Rules: Why One Default Triggers Dual NPA */}
            <section id="rbi-ucic-cross-default" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>RBI Borrower-Wise NPA Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI UCIC Rules: Why One Default Triggers Dual NPA
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many users try to save their card by paying the <Link href="/what-is-minimum-amount-due-for-credit-card" className="text-[#1886ff] font-semibold hover:underline">Minimum Amount Due</Link> while skipping a big Jumbo Loan EMI. Others pay the Jumbo Loan EMI on time and skip the card bill. Sadly, neither plan works past three months.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                RBI Income Recognition and Asset Classification (IRAC) norms set one strict rule. Banks must tag Non-Performing Assets (NPAs) by the person, not just by one single loan. Every bank ties your card, bank account, and Jumbo Loan to one Unique Customer Identification Code (UCIC).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your card bill or your Jumbo Loan EMI stays unpaid past 90 days, that account turns into an NPA. Since both share one UCIC, the bank computer tags your second account as an NPA too, even if you paid every EMI on it.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On Day 91, the bank blocks your card spending limit right away. That is why you should treat both accounts together instead of wasting scarce cash on half payments.
              </p>
            </section>

            {/* SECTION 3: Within Limit vs Over-Limit Loans: CIBIL & Billing */}
            <section id="within-vs-above-limit" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Side-by-Side Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Within Limit vs Over-Limit Loans: CIBIL &amp; Billing
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before you speak with your bank for debt relief, check which loan type you hold. Match your latest card bill against your CIBIL report using this simple table.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[580px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Loan Feature</th>
                      <th className="p-3">In-Limit Insta Loan (Blocked Limit)</th>
                      <th className="p-3">Over-Limit Jumbo Loan (Separate AAN)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Card Limit Effect</td>
                      <td className="p-3">Blocks part of your card shopping limit</td>
                      <td className="p-3">Given above your card spending limit</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Account &amp; Bill</td>
                      <td className="p-3">Billed inside your 16-digit card bill</td>
                      <td className="p-3">Gets its own AAN or LAN and own bill</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">How You Pay EMIs</td>
                      <td className="p-3">Paid with your normal monthly card bill</td>
                      <td className="p-3">Often cut via bank auto-debit or e-NACH</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">CIBIL Entry</td>
                      <td className="p-3">Raises card balance use or adds sub-line</td>
                      <td className="p-3">Shows as a separate Personal Loan entry</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">At 90-Day Default</td>
                      <td className="p-3">Future EMIs stop and merge into card dues</td>
                      <td className="p-3">Stays a second recalled loan next to card</td>
                    </tr>
                    <tr className="bg-blue-50/50">
                      <td className="p-3 font-bold text-slate-900">OTS Closure Rule</td>
                      <td className="p-3 font-semibold text-slate-900">One card OTS closes merged card balance</td>
                      <td className="p-3 font-semibold text-[#1886ff]">Needs joint OTS or two separate letters</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Auto-Debit Bounces, Section 25 & Salary Set-Off Law */}
            <section id="nach-bounce-setoff" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Auto-Pay Bounce &amp; Bank Lien Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Auto-Debit Bounces, Section 25 &amp; Salary Set-Off Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Normal credit card bills are plain civil debts unless you gave a cheque or auto-pay form. Yet over-limit Jumbo Loans work like personal loans. Most banks turn on an auto-debit or e-NACH link on your bank account within seven days.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When your account balance is low, each failed debit adds bounce fees plus 18% GST. Also, <Link href="/loan-overdue-nach-bounce-immediate-steps" className="text-[#1886ff] font-semibold hover:underline">bounced e-NACH debits</Link> come under Section 25 of the Payment and Settlement Systems Act, 2007.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 25, a failed auto-debit lets the bank send a written demand notice within 30 days. You then get 15 days from getting that notice to pay the bounced EMI sum before the bank can file a court case.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Watch out for a second risk if your pay comes into that same bank. Under <Link href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act" className="text-[#1886ff] font-semibold hover:underline">Section 171 of the Indian Contract Act, 1872</Link>, the bank can hold or cut money from your account in that same bank to clear late card or Jumbo Loan dues. Keeping your household cash in another bank keeps rent and food money safe while you save for OTS.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Dual Account Default &amp; OTS Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This clear chart shows how one credit card splits into two separate debts on default. It also shows how one joint RBI settlement shields you from split recovery claims.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/jumbo-insta-loan-on-credit-card-default-settlement.jpg"
                    alt="Jumbo and Insta Loan on Credit Card Default Dual Account RBI Settlement Rules"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Dual Account Debt Guide • RBI Rules Compliant</span>
                  <a
                    href="/images/infographics/jumbo-insta-loan-on-credit-card-default-settlement.jpg"
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

            {/* SECTION 6: Combined OTS Math: Settling Card & Loan Together */}
            <section id="ots-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Sample OTS Savings Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Combined OTS Math: Settling Card &amp; Loan Together
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When both accounts run late, bank fees grow fast. Credit cards add 36% to 45% yearly interest, late fees, and 18% GST. At the same time, the Jumbo Loan adds late fines, 3% recall fees, and auto-debit bounce charges.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under <Link href="/rbi-circular-on-loan-settlement-ots" className="text-[#1886ff] font-semibold hover:underline">RBI Circular DOR.STR.REC.20/21.04.048/2023-24</Link> (June 8, 2023), every bank must keep a Board-approved OTS policy. Once both accounts cross 90 days into NPA status, you can ask for a joint lump-sum deal like the example below.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample Dual Account (Card + Jumbo Loan) OTS Table</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">180 Days Past Due (Dual NPA)</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Bill Part</th>
                        <th className="p-3">Bank Claim</th>
                        <th className="p-3">Joint OTS Relief</th>
                        <th className="p-3 text-right">OTS Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Primary Credit Card Spent Principal</td>
                        <td className="p-3 font-mono">₹1,40,000</td>
                        <td className="p-3 text-emerald-700 font-semibold">45% to 55% Principal Cut</td>
                        <td className="p-3 text-right font-bold text-slate-800 font-mono">₹65,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Jumbo Loan Unpaid Principal</td>
                        <td className="p-3 font-mono">₹2,60,000</td>
                        <td className="p-3 text-emerald-700 font-semibold">45% to 55% Principal Cut</td>
                        <td className="p-3 text-right font-bold text-slate-800 font-mono">₹1,25,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Card Interest (42% APR) &amp; Late Fees</td>
                        <td className="p-3 font-mono text-amber-700 font-bold">₹92,000</td>
                        <td className="p-3 text-amber-700 font-semibold">100% Interest Waiver</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">₹0</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Jumbo Loan Fines &amp; Bounce Fees</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">₹58,000</td>
                        <td className="p-3 text-rose-600 font-semibold">100% Fee Waiver</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">₹0</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">18% GST on Interest &amp; Late Fees</td>
                        <td className="p-3 font-mono text-rose-700 font-bold">₹27,000</td>
                        <td className="p-3 text-rose-700 font-semibold">Dropped With Fee Waiver</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">₹0</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Dual Account Closure</td>
                        <td className="p-3 font-mono text-rose-700">₹5,77,000</td>
                        <td className="p-3 text-[#1886ff]">~67% Total Relief</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹1,90,000 (Both Closed)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 7: Step-by-Step SOP: Dual Account Settlement Protocol */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Action Plan</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Step-by-Step SOP: Dual Account Settlement Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six clear steps to close both your credit card and your Jumbo or Insta Loan with zero leftover dues.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Check Your CIBIL Report and List Every Number
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pull your latest credit report and count every open line from your bank. Write down your 16-digit card number and every separate AAN or LAN loan number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Protect Your Salary From Same-Bank Cuts
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If your pay goes into that same bank, ask HR to route future pay to an account in another bank. This stops sudden auto-debits and Section 171 holds while you save for OTS.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Check EMI Merger on In-Limit Card Loans
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    For in-limit Insta Loans, wait until the bank stops future EMIs and merges the balance into your card bill. For over-limit Jumbo Loans, ask for a clear principal statement.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Send One Joint Hardship Request Under Your UCIC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Share proof of job loss, pay cuts, business loss, or hospital bills with the bank central OTS desk. Ask them to link both accounts under your UCIC for one joint deal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Check Both Account Numbers on the OTS Letter
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never pay based on phone calls or chat messages. <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[#1886ff] font-semibold hover:underline">Check the official OTS letter</Link> sent from a real bank email and confirm both numbers are printed cleanly.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Pay Exact Split Sums and Take Both NOCs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pay each agreed sum straight into the exact card number and Jumbo Loan AAN named in the letter. Collect <Link href="/get-noc-after-loan-settlement" className="text-[#1886ff] font-semibold hover:underline">No Dues Certificates</Link> for both accounts within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Borrower Legal Shields & Landmark Court Rulings */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Court Rulings &amp; RBI Shields</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Borrower Legal Shields &amp; Landmark Court Rulings
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Holding two late accounts in one bank often doubles the calls you get each day. Indian courts and RBI rules strictly shield borrowers from unfair threats during hard times.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>SC: ICICI Bank Ltd. v. Prakash Kaur (2007)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court banned banks from sending rude agents or using threats and force. Every loan recovery step must follow fair legal rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>SC: Syndicate Bank v. Vijay Kumar (1992)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court held that a bank lien under Section 171 works only on money kept inside that same bank. A bank cannot freeze accounts in other banks on its own.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>RBI Penal Charges Rule (Jan 2024)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Circular DoR.MCS.REC.28/01.01.001/2023-24, banks cannot add extra penal rates to your loan rate or charge interest on late fines.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>RBI Card Conduct Rules, 2022</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents cannot call before 8:00 AM or after 7:00 PM, shame you before family or boss, or mark default without a 7-day prior notice.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Complaint Steps</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If two agencies harass you at once, or if the bank closes your card after OTS while leaving your Jumbo Loan open on CIBIL, use these three steps.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Tier</th>
                      <th className="p-3">Bank Office</th>
                      <th className="p-3">Reply Time</th>
                      <th className="p-3">How They Help You</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Card &amp; Loan Grievance Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Links card and AAN tickets, shares loan breakup, and logs call complaints.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">15 to 30 Days</td>
                      <td className="p-3">Stops split call harassment, reviews joint OTS deals, and issues missing NOCs.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI Portal (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Orders CIBIL fixes, pays ₹100/day delay fines, and stops unfair agent acts.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Default Timeline: Day 1 Missed EMI to Dual NOC */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Key Timelines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Default Timeline: Day 1 Missed EMI to Dual NOC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing each stage after missing a credit card bill or Jumbo Loan EMI helps you stay calm and avoid costly mistakes.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Days Late</th>
                      <th className="p-3">Bank Stage</th>
                      <th className="p-3">What Happens to Card &amp; Loan</th>
                      <th className="p-3">Your Best Next Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to Day 3</td>
                      <td className="p-3 font-mono text-[11px]">RBI Grace Days</td>
                      <td className="p-3">Card gets 3 grace days; Jumbo Loan auto-debit hits on due date.</td>
                      <td className="p-3">Pay full due if cash allows, or prevent repeat NACH bounces.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 4 to Day 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0 Stage</td>
                      <td className="p-3">Late fees, card interest, and bounce fines start adding up.</td>
                      <td className="p-3">Save both bills and move future pay to another bank.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to Day 89</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1 &amp; SMA-2</td>
                      <td className="p-3">Card swipes blocked; bank sends call alerts and demand letters.</td>
                      <td className="p-3">Reply in writing to any legal or Section 25 bounce notice.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 90+</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Dual UCIC NPA</td>
                      <td className="p-3">Both card and Jumbo Loan turn NPA; in-limit EMIs merge into card.</td>
                      <td className="p-3 font-bold text-amber-800">Send hardship proof and start joint OTS talks.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 120 to 180+</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">OTS &amp; Dual NOC</td>
                      <td className="p-3">Bank grants joint waiver; both lines close once OTS sum is paid.</td>
                      <td className="p-3 font-bold text-slate-900">Check dual OTS letter, pay bank direct, and check CIBIL in 15 days.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Common Mistakes & Bank-Specific Dual Loan Traps */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Mistakes to Avoid</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                11. Common Mistakes &amp; Bank-Specific Dual Loan Traps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Avoid these four common traps that hurt card users even after they pay hard-earned settlement cash.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Settling Only the 16-Digit Card Number
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A card agent may offer a big cut on your 16-digit card while leaving out your HDFC Jumbo AAN or SBI Encash LAN. Months later, a second team claims full Jumbo Loan dues.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Sending Jumbo OTS Cash to the Card Number
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you send your Jumbo Loan OTS cash to your 16-digit card number by mistake, the loan stays unpaid and the OTS deal breaks. Always match the exact AAN or LAN number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#1886ff]" />
                    Making Split Deals With Field Agents
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks send card bills and loan lines to different call teams. Do not strike side deals with field callers; ask the bank nodal desk for one joint letter.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Skipping 30-Day Credit Bureau Checks
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI 15-day update rules, check CIBIL, Experian, Equifax, and CRIF 30 days after paying OTS. Make sure both entries show zero balance left.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 12: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 13: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Jumbo &amp; Insta Loan Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Plain, verified answers on Jumbo Loan AAN numbers, UCIC cross-default rules, Section 25 auto-debit notices, and joint One-Time Settlements in India.
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

            {/* SECTION 14: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>RBI &amp; Legal Citations</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Statutory References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Card Master Direction:</strong> DoR.AUT.REC.No.27/24.01.041/2022-23, Credit Card and Debit Card - Issuance and Conduct Directions, 2022 (EMI Rules, Billing &amp; Agent Conduct).
                </li>
                <li>
                  <strong>RBI Compromise OTS Circular:</strong> RBI/2023-24/40, DOR.STR.REC.20/21.04.048/2023-24 (June 8, 2023), Framework for Compromise Settlements and Technical Write-offs.
                </li>
                <li>
                  <strong>RBI IRAC Norms:</strong> Master Circular on Prudential Norms on Income Recognition, Asset Classification and Provisioning (Borrower-Wise UCIC NPA Rule).
                </li>
                <li>
                  <strong>Payment and Settlement Systems Act, 2007:</strong> Section 25 (e-NACH Bounce Rules, 30-Day Demand Notice &amp; 15-Day Pay Window).
                </li>
                <li>
                  <strong>Indian Contract Act, 1872 &amp; Supreme Court Cases:</strong> Section 171 (Bank Lien), <em>Syndicate Bank v. Vijay Kumar</em> (1992) 2 SCC 330, and <em>ICICI Bank Ltd. v. Prakash Kaur</em> (2007) 2 SCC 711.
                </li>
                <li>
                  <strong>RBI Penal Charges &amp; CIBIL Rules:</strong> DoR.MCS.REC.28/01.01.001/2023-24 (No Penal Interest Compounding) and RBI/2023-24/72 (₹100/Day CIBIL Fix Delay Rule).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Official Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.npci.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>NPCI NACH Rules</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Laws</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>CIBIL Dispute Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/rupay-credit-card-upi-debt-default-settlement-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RuPay UPI Card Default
                  </Link>
                  <Link href="/add-on-supplementary-credit-card-default-liability" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Add-On Card Default Rules
                  </Link>
                  <Link href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 171 Set-Off Law
                  </Link>
                  <Link href="/loan-overdue-nach-bounce-immediate-steps" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    NACH Bounce Steps
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Letter
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After OTS
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Agent Calls
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹100/Day CIBIL Rule
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
                    Legal &amp; Debt Resolution Expert
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Advises Indian card users on dual-account OTS deals, Section 25 bounce notices, bank lien defense, and RBI borrower rights across major banks.
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
                  DUAL ACCOUNT OTS DESK
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Stuck With Both Card &amp; Jumbo Loan Dues?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team stops split call pressure, replies to NACH bounce notices, and secures one joint RBI settlement for both your card and loan.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Dual-Debt Check
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
                  <span>RBI Rules • 100% Private</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Why Choose CredSettle</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Joint UCIC Deal:</strong> Close both card and AAN loan together.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Bounce Notice Help:</strong> Legal replies to Section 25 notices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>OTS Letter Check:</strong> Strict check on both loan numbers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Dual NOC Check:</strong> Clean closure across all 4 bureaus.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Set-Off Right (Sec 171)
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Keep salary accounts safe &rarr;</span>
                </Link>

                <Link
                  href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Check Bank OTS Letter
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Spot fake agent letters fast &rarr;</span>
                </Link>

                <Link
                  href="/settle-multiple-credit-cards"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Settle Multiple Credit Cards
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Multi-card OTS plan &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
