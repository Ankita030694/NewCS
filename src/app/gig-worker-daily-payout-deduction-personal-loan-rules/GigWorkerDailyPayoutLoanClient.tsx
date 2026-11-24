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

export default function GigWorkerDailyPayoutLoanClient() {
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
    { id: 'direct-flow-law', label: '1. RBI Direct-Flow Rules' },
    { id: 'payout-skimming-mechanics', label: '2. How Payout Deduction Traps Work' },
    { id: 'cost-comparison-matrix', label: '3. Daily Deduction Cost Math' },
    { id: 'kfs-cooling-off-rules', label: '4. KFS, APR & Cooling-Off Rights' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Stop Unfair Payout Cuts SOP' },
    { id: 'gig-worker-statutes', label: '7. Gig Worker Laws & ID Blocks' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Default to Resolution Milestones' },
    { id: 'specialized-scenarios', label: '10. Fleet Leases & Platform Shifts' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a delivery or cab app cut loan EMIs straight from my daily wallet payout?',
      a: 'Under the RBI Digital Lending Directions of 2025, all loan payouts and EMIs must move straight between the lender and your bank account. A gig app or LSP cannot use a pool account to skim loan EMIs before your pay reaches your bank.'
    },
    {
      q: 'What is the RBI direct fund-flow rule for digital personal loans?',
      a: 'RBI Notification DOR.STR.REC.19/21.07.001/2025-26 sets a strict direct-flow rule. Every bank and NBFC must send loan funds straight to your bank account and collect EMIs straight from it. No third-party app can hold or route your loan money.'
    },
    {
      q: 'Can Swiggy, Zomato, Uber, or Ola block my partner ID for a third-party NBFC loan default?',
      a: 'An unsecured loan from a separate NBFC is a deal between you and that lender. A gig platform cannot block your ID without valid contract grounds and fair notice. In Karnataka, the 2025 Gig Workers Act requires 14 days written notice before ID blocks.'
    },
    {
      q: 'What should I do if the app deducts from my daily payout and hits UPI AutoPay too?',
      a: 'Double debit is a serious bank error. Save screenshots of both your app payout ledger and your bank passbook showing the AutoPay debit or bounce fee. Email the NBFC Grievance Officer right away to claim a full refund of extra debits and bounce fees.'
    },
    {
      q: 'Are flat daily fees and hidden platform charges legal on gig worker loans?',
      a: 'No. RBI KFS rules of April 2024 and Digital Lending rules of 2025 require clear upfront pricing. Lenders must list the exact APR and all fees in a Key Facts Statement. Any unlisted charge is illegal, and the NBFC must pay LSP fees directly.'
    },
    {
      q: 'How do I check if a gig worker loan app is registered with the RBI?',
      a: 'Check the official RBI Public Directory of Digital Lending Apps on the RBI portal, live since July 1, 2025. Every legal app must name its RBI-registered bank or NBFC lender on the app screen and inside your KFS.'
    },
    {
      q: 'Can an NBFC add daily compounding late interest if I fall sick and miss payouts?',
      a: 'No. Under RBI Circular RBI/2023-24/53 effective April 1, 2024, lenders cannot add late fees to your loan principal or charge interest on penalties. They can only levy flat, fair penal charges listed upfront in your KFS.'
    },
    {
      q: 'Do small daily payout loans affect my CIBIL score if I switch gig apps?',
      a: 'Yes. Regulated NBFCs report every micro-loan to CIBIL, Experian, Equifax, and CRIF High Mark every 15 days under RBI rules. If you switch gig apps and stop paying, missed daily dues fast turn into overdue marks on your credit report.'
    },
    {
      q: 'Can I settle a gig worker personal loan via One-Time Settlement (OTS)?',
      a: 'Yes. If injury, bike damage, or low orders stop you from paying in full, you can ask the NBFC for a One-Time Settlement. Always get a written OTS letter on NBFC letterhead and collect a No Dues Certificate after payment.'
    },
    {
      q: 'How does CredSettle help gig workers stuck in daily payout deduction loans?',
      a: 'CredSettle checks your KFS, payout ledger, and AutoPay bounces for RBI rule breaks. Our legal team sends notices to reverse illegal skimming and hidden fees, stops agent harassment, files RBI Ombudsman cases, and secures fair OTS exits.'
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
            <span>RBI Digital Lending Directions 2025 &amp; Gig Worker Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            RBI Direct-Flow Rules Against App Payout Loan Skimming
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Is a loan app cutting daily EMIs straight from your delivery or cab payouts? Learn how the RBI direct bank-flow rule bans third-party pool skimming, stops hidden fees, and protects your income and CIBIL score.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Audit My Gig Loan Deductions</span>
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
                  <span>Gig Worker Debt Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Digital Lending Directions 2025, RBI KFS Circular 2024, and State Gig Worker Acts.
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
                <span>EXECUTIVE BRIEF: GIG WORKER DAILY PAYOUT LOAN RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Direct Bank-Flow Rule:</strong> Under RBI Digital Lending rules 2025, loan funds and EMIs must move straight between your bank and the lender.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Pool Wallet Skimming:</strong> A gig app or LSP cannot hold your daily pay in a pool account to skim loan EMIs.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Hidden Platform Fees:</strong> Lenders must pay LSP fees directly. Any fee left out of your Key Facts Statement (KFS) is illegal and refundable.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Double-Debit Refunds:</strong> If an app cuts daily pay and also hits UPI AutoPay, claim a full refund of extra debits and bounce fees.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Fair Notice Before ID Blocks:</strong> Gig apps cannot freeze your work ID at will. Laws like Karnataka Act 72 of 2025 require clear pay slips and 14-day notices.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: RBI Direct-Flow Rules for Gig Worker App Loans */}
            <section id="direct-flow-law" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Mandate &amp; Direct Fund Flow</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Direct-Flow Rules for Gig Worker App Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Millions of delivery riders, cab drivers, and home service workers in India use instant micro-loans offered inside partner apps. Platforms like Swiggy, Zomato, Uber, Ola, Rapido, Blinkit, Porter, and Urban Company often partner with fintech apps to pitch quick cash.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                These apps market daily payout deductions as easy credit. They promise small daily cuts of Rs 100 to Rs 300 from your ride or order wallet. However, the Reserve Bank of India has strict rules on how digital loans move money.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On May 8, 2025, the RBI issued the Reserve Bank of India (Digital Lending) Directions, 2025 under reference DOR.STR.REC.19/21.07.001/2025-26. These directions replace the 2022 guidelines and bind every bank and Non-Banking Financial Company (NBFC) in India.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The core rule is simple. All loan payouts must go straight from the bank or NBFC into your own bank account. Every repayment must also go straight from your bank account back to the lender.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A third-party app or Lending Service Provider (LSP) cannot use a pass-through or pool account to hold your money. Suppose a gig app parks your daily pay in a pool wallet and cuts an NBFC loan EMI first. That practice breaks the RBI direct-flow rule.
              </p>
            </section>

            {/* SECTION 2: How Daily Payout Deduction Loans Trap Gig Workers */}
            <section id="payout-skimming-mechanics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Mechanics of the Daily Deduction Trap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. How Daily Payout Deduction Loans Trap Gig Workers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Daily payout loans look harmless at first glance. A rider borrowing Rs 10,000 thinks a cut of Rs 150 per day is easy to manage. In reality, gig earnings go up and down every week.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Heavy monsoon rain, fever, bike repairs, or sudden app algorithm drops can cut your daily orders in half. Even when you earn only Rs 250 in a day, the app tries to take its fixed deduction first. That leaves you with almost zero cash for fuel and food.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many fintech LSPs also bypass the direct-flow ban by setting up two recovery traps at once. They link your daily payout wallet AND register a UPI AutoPay or e-NACH mandate on your savings bank account.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a glitch happens, the app cuts money from your daily earnings while the NBFC also hits your bank account. If your bank account is empty, your bank charges Rs 295 to Rs 590 per bounce. Within one month, bounce fees can cost more than the original loan.
              </p>
            </section>

            {/* SECTION 3: Daily Deduction Cost Math: True APR vs Flat Fees */}
            <section id="cost-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Hidden Math &amp; True Borrowing Cost</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Daily Deduction Cost Math: True APR vs Flat Fees
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many gig loan apps quote a low-sounding flat fee like &quot;only 3% per month&quot; or &quot;Rs 180 per day for 65 days.&quot; Because you pay back principal every single day, your average loan balance drops rapidly while you still pay full interest on the starting amount.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you add upfront processing fees, subscription fees, and 18% GST, the real Annual Percentage Rate (APR) often crosses 60% to 120% per year. The table below compares a typical Rs 10,000 daily deduction loan against a compliant bank personal loan.
              </p>

              {/* Representative Cost Comparison Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Illustrative Rs 10,000 Gig Loan Cost Audit</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Flat Deduction vs True APR</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Loan Feature</th>
                        <th className="p-3">App Daily Payout Loan</th>
                        <th className="p-3">Compliant RBI Micro-Loan</th>
                        <th className="p-3 text-right">RBI Legal Check</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Sanctioned Amount</td>
                        <td className="p-3 font-mono">₹10,000 (₹9,200 credited)</td>
                        <td className="p-3 font-mono text-emerald-700">₹10,000 (₹9,800 credited)</td>
                        <td className="p-3 text-right font-semibold text-slate-700">Must go direct to bank</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Repayment Model</td>
                        <td className="p-3 text-rose-600 font-semibold">₹180/day x 65 days</td>
                        <td className="p-3 text-emerald-700 font-semibold">3 Monthly EMIs via Bank</td>
                        <td className="p-3 text-right font-semibold text-amber-700">No LSP pool skimming</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Upfront Platform Fee</td>
                        <td className="p-3 text-rose-600 font-mono">₹800 (8% + GST)</td>
                        <td className="p-3 text-emerald-700 font-mono">₹200 (2% in KFS)</td>
                        <td className="p-3 text-right font-semibold text-rose-700">RE must pay LSP fee</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Total Cash Repaid</td>
                        <td className="p-3 font-mono text-rose-700 font-bold">₹11,700 in 65 days</td>
                        <td className="p-3 font-mono text-emerald-700 font-bold">₹10,450 in 90 days</td>
                        <td className="p-3 text-right font-bold text-slate-800">₹1,250 excess gap</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Effective Annual APR</td>
                        <td className="p-3 font-mono text-rose-700">Over 145% APR</td>
                        <td className="p-3 font-mono text-emerald-700">22% to 28% APR</td>
                        <td className="p-3 text-right text-[#1886ff] font-mono">Must be printed in KFS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: KFS Transparency, APR & Cooling-Off Rights */}
            <section id="kfs-cooling-off-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Disclosure Shield &amp; Zero-Penalty Exit</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. KFS Transparency, APR &amp; Cooling-Off Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before any bank or NBFC disburses a gig worker loan, it must give you a Key Facts Statement (KFS). This is required under RBI Circular RBI/2024-25/18 dated April 15, 2024, which took full effect on October 1, 2024.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The KFS is a plain summary page in a language you understand. It must list the exact RBI-registered lender name, total loan amount, real Annual Percentage Rate (APR), daily or monthly installment plan, and every fee.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Paragraph 8 of the KFS Circular gives you a powerful weapon. Any fee, platform charge, convenience charge, or penalty not clearly listed in the KFS cannot be charged to you at any point. If an app took unlisted fees, you can demand a full refund.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You also get a mandatory cooling-off or look-up window under the 2025 Digital Lending Directions. For loans lasting seven days or more, lenders must give at least three working days to cancel. You only return the principal plus daily interest for the days you held the money, with zero foreclosure penalty.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Also, RBI Circular RBI/2023-24/53 effective April 1, 2024 bans compounding late interest. Suppose you miss a daily cut due to sickness or slow orders. The NBFC cannot add late fees to your loan principal or charge interest on penalties.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Gig Worker Payout Protection
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual guide highlights your core statutory shields under the RBI Digital Lending Directions of 2025. Keep these rules handy whenever a loan app or partner platform tries to cut daily payouts without a valid KFS or direct bank flow.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/gig-worker-daily-payout-deduction-personal-loan-rules.jpg"
                    alt="RBI Direct-Flow Rules on Gig Worker Daily Payout Deduction Personal Loans"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Gig Worker Loan Protection Framework • RBI 2025 Compliant</span>
                  <a
                    href="/images/infographics/gig-worker-daily-payout-deduction-personal-loan-rules.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Stop Unfair Payout Deductions */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Stop Unfair Payout Deductions
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a delivery app or fintech NBFC is skimming your daily earnings unfairly, follow these six steps. Do not delete the app or ignore messages. Collect clear proof first so the lender cannot twist the record.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Verify the Lender on the RBI DLA Directory
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Open the loan app and note the exact RBI-registered NBFC or bank name. Check it on the official RBI Public Directory of Digital Lending Apps on the RBI portal. If no regulated lender exists, report the illegal app to cybercrime.gov.in and the RBI Sachet portal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Download Your KFS and Payout Ledger
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download the Key Facts Statement, sanction letter, and signed loan agreement from your email or app. Take dated screenshots of every daily payout cut inside your partner app alongside your bank passbook entries.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Audit Direct-Flow and Double-Debit Errors
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check if the app routed repayments through a third-party wallet or skimmed LSP fees from your payout. Also mark every date where both an app wallet cut and a bank UPI AutoPay debit or bounce happened for the same due.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Send a Written Dispute to the NBFC GRO
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email the NBFC Grievance Redressal Officer (GRO) with your loan number and screenshots. Cite RBI Digital Lending Directions 2025 (DOR.STR.REC.19) and KFS Circular RBI/2024-25/18. Demand a stop to third-party skimming, refund of unlisted fees, and reversal of duplicate bounce charges.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Pause Unsafe AutoPay and Seek Restructure or OTS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Suppose injury or low orders stop you from paying daily. Email the NBFC to ask for a smaller weekly or monthly plan, or a One-Time Settlement (OTS). Keep every offer in writing so you have proof.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Escalate to the RBI Ombudsman and Verify CIBIL
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the NBFC does not fix the issue within 30 days, file a free online complaint on cms.rbi.org.in. Once you close or settle the account, collect your No Dues Certificate (NDC) and confirm your CIBIL update within 15 days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Gig Worker Laws: ID Blocks & Statutory Rights */}
            <section id="gig-worker-statutes" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Platform Worker Statutes &amp; Legal Defenses</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Gig Worker Laws: ID Blocks &amp; Statutory Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For years, aggregators treated delivery riders and cab partners as independent contractors with few income protections. Today, central and state laws give gig workers clear legal shields against opaque deductions and sudden ID blocks.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing these laws helps you stand firm against threats. Recovery agents cannot shut down your work ID or file a fake police case over an unpaid micro-loan.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Code on Social Security, 2020</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sections 2(35) and 2(61) formally recognize gig workers and platform workers under Indian central law. The statute creates welfare boards and stops platforms from treating workers as legally invisible.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Karnataka Gig Workers Act, 2025</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Karnataka Act No. 72 of 2025 bans secret earnings cuts. Platforms must explain every deduction before payout, give 14 days written notice before ID deactivation, and provide an Internal Dispute Resolution Committee (IDRC).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 2(46), one-sided click-wrap loan terms that allow hidden fees or sudden payout seizures qualify as unfair contracts. Borrowers can claim refunds and damages for deficiency of service under Section 2(11).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>RBI Recovery &amp; Civil Default Shield</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Missing an unsecured personal loan EMI is a civil contract matter, not a crime. Recovery agents cannot arrest you, block your Aadhaar or PAN, call after 7:00 PM, or harass your family and delivery customers.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation: NBFC GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation: NBFC GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                App chat support rarely fixes illegal payout cuts or bounce fees. Under RBI rules, the regulated bank or NBFC owns full legal blame for its Lending Service Provider. Use this three-step escalation path to force action.
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
                      <td className="p-3 font-bold text-slate-900">Level 1: NBFC GRO</td>
                      <td className="p-3">Lender Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 14 Working Days</td>
                      <td className="p-3">Audits app wallet deductions, stops duplicate UPI AutoPay hits, and shares your full KFS.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO &amp; IDRC</td>
                      <td className="p-3">Principal Nodal Officer / Platform IDRC</td>
                      <td className="p-3 font-mono">15 to 30 Calendar Days</td>
                      <td className="p-3">Reverses hidden platform charges, lifts wrongful ID blocks, and approves restructure or OTS.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-Filing</td>
                      <td className="p-3">Issues binding orders on cms.rbi.org.in to refund illegal fees, fix CIBIL, and penalize direct-flow breaches.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Loan Default to Debt Resolution Milestones */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Loan Default to Debt Resolution Milestones
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Because daily payout loans have short tenors, missed cuts escalate faster than regular bank loans. Under RBI Circular RBI/2024-25/60 effective January 1, 2025, lenders also report account status to credit bureaus every 15 days. Here is what happens at each stage.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Account Status</th>
                      <th className="p-3">Lender / App Action</th>
                      <th className="p-3">Borrower Protection Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 7 Missed</td>
                      <td className="p-3 font-mono text-[11px]">Early Arrears</td>
                      <td className="p-3">App shows negative wallet or retries bank UPI AutoPay mandate.</td>
                      <td className="p-3">Screenshot payout ledger and report any double debit immediately.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 15 (Fortnight)</td>
                      <td className="p-3 font-mono text-[11px]">First Bureau Cycle</td>
                      <td className="p-3">NBFC uploads overdue Days Past Due (DPD) data to CIBIL and CRIF.</td>
                      <td className="p-3">Email the GRO to request a temporary pause or smaller weekly schedule.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1 / SMA-2</td>
                      <td className="p-3">Third-party recovery callers start calling; flat penal charges apply.</td>
                      <td className="p-3">Log any after-hours or abusive calls; check if penalties match KFS.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 90</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Classification</td>
                      <td className="p-3">Loan becomes Non-Performing Asset; NBFC sends demand or recall notice.</td>
                      <td className="p-3 font-bold text-amber-800">Send formal hardship letter and initiate legal OTS negotiation.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 120 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Settlement Window</td>
                      <td className="p-3">NBFC considers principal-focused One-Time Settlement (OTS) waivers.</td>
                      <td className="p-3 font-bold text-slate-900">Verify official OTS letter on NBFC letterhead before paying.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Post-Settlement (+15 Days)</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">NDC &amp; Bureau Sync</td>
                      <td className="p-3">Lender issues No Dues Certificate and updates CIBIL in next 15-day cycle.</td>
                      <td className="p-3">Check CIBIL report and submit NDC to lift any partner app flag.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Cases: Fleet Leases & Platform Shifts */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Cases: Fleet Leases &amp; Platform Shifts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Not every deduction inside a gig partner app follows the exact same contract. Here is how Indian law treats four common real-world situations gig workers face.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    EV / Bike Lease-to-Own vs Unsecured Cash Loan
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    An EV rental or hypothecated two-wheeler loan carries a lien on the vehicle. An unsecured daily payout personal loan does not. No recovery agent can legally seize your personal bike or phone to recover an unsecured cash advance.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Switching Gig Apps (Swiggy to Zomato / Uber to Rapido)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Switching platforms stops daily app wallet cuts, yet your NBFC loan stays active. Ask the NBFC for a direct UPI or NEFT pay link. Paying straight to the lender helps you avoid bounce fees and CIBIL drops.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    COD Floating Cash vs NBFC Loan Balance
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Platforms can pause your ID if you hold un-deposited Cash on Delivery (COD) customer cash. Keep COD cash strictly separate from third-party NBFC loans. Deposit COD cash directly so the platform cannot freeze your account over mixed balances.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Medical Emergency, Accident &amp; Monsoon Income Drop
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a road accident, illness, or seasonal rain drop cuts your work days, send hospital bills or app earning screenshots to the NBFC. Documented hardship gives strong grounds for fee waivers, lower EMIs, or an affordable OTS settlement.
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
                Frequently Asked Questions: Gig Worker Payout Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Get plain answers on RBI direct-flow rules, daily wallet skimming, and KFS fee refunds. We also cover partner ID blocks and safe OTS steps for riders and cab drivers.
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
                  <strong>Reserve Bank of India (Digital Lending) Directions, 2025:</strong> Notification DOR.STR.REC.19/21.07.001/2025-26 (May 8, 2025), Direct Fund Flow Mandate, Prohibition of Third-Party Pool Accounts, LSP Fee Rules, and Public Directory of DLAs.
                </li>
                <li>
                  <strong>Reserve Bank of India KFS Circular:</strong> RBI/2024-25/18, DOR.STR.REC.13/13.03.00/2024-25 (April 15, 2024), Mandatory Key Facts Statement, APR Disclosure, Cooling-Off Window, and Ban on Unannounced Charges.
                </li>
                <li>
                  <strong>Reserve Bank of India Fair Lending Practice Circular:</strong> RBI/2023-24/53, DoR.MCS.REC.28/01.01.001/2023-24 (Effective April 1, 2024), Prohibition on Capitalization and Compounding of Penal Charges.
                </li>
                <li>
                  <strong>Reserve Bank of India Credit Information Reporting Directions:</strong> RBI/2024-25/60 (Effective January 1, 2025), Mandatory Fortnightly (15-Day) Reporting to CIBIL, Experian, Equifax, and CRIF High Mark.
                </li>
                <li>
                  <strong>Gig Worker &amp; Consumer Protection Statutes:</strong> Code on Social Security, 2020 (Sections 2(35) &amp; 2(61)); Karnataka Platform-Based Gig Workers (Social Security and Welfare) Act, 2025 (Act No. 72 of 2025); Consumer Protection Act, 2019 (Sections 2(11) &amp; 2(46)).
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
                    <span>RBI Sachet Illegal App Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.npci.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>NPCI UPI AutoPay &amp; NACH</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Portal</span>
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
                  <Link href="/upi-autopay-mandate-pause-vs-revoke-personal-loan-emi" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    UPI AutoPay Pause vs Revoke
                  </Link>
                  <Link href="/nbfc-presenting-mandate-multiple-times-month-bounce-fee" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Multiple Mandate Bounce Rules
                  </Link>
                  <Link href="/salary-deduction-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Salary Deduction Loan Default
                  </Link>
                  <Link href="/dpdp-act-2023-data-erasure-digital-personal-loan-apps" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan App Data Erasure Rights
                  </Link>
                  <Link href="/rbi-15-day-fortnightly-credit-bureau-update-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI 15-Day CIBIL Update Rule
                  </Link>
                  <Link href="/personal-loan-agreement-vernacular-language-rbi-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Vernacular Loan Contract Law
                  </Link>
                  <Link href="/services/app-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    App Loan Settlement Help
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/two-wheeler-bike-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Two-Wheeler Bike Loan Relief
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
                Specialist in RBI Digital Lending compliance, NBFC fee audits, borrower defense, and personal loan settlement across India with hands-on experience resolving app loan disputes.
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
                  GIG WORKER DEBT SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  App Skimming Your Daily Payouts?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team audits your KFS and payout cuts under RBI Digital Lending Directions 2025, stops double debits and recovery harassment, and negotiates clean OTS closures.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Stop Unfair Deductions Now
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
                  <span><strong>Direct-Flow Legal Audit:</strong> Challenge illegal pool skimming and hidden LSP fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Double-Debit Fee Recovery:</strong> Reclaim duplicate UPI AutoPay bounce penalties.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-Harassment Shield:</strong> Stop odd-hour calls and fake arrest threats fast.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified OTS &amp; NDC Exit:</strong> Settle NBFC debt cleanly and update CIBIL in 15 days.</span>
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
                    Hidden Charges Not in KFS: RBI Refund
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Claim unlisted fee refunds &rarr;</span>
                </Link>

                <Link
                  href="/upi-autopay-mandate-pause-vs-revoke-personal-loan-emi"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    UPI AutoPay Mandate: Pause vs Revoke
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Control recurring bank debits &rarr;</span>
                </Link>

                <Link
                  href="/nbfc-presenting-mandate-multiple-times-month-bounce-fee"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Multiple NBFC Mandate Bounce Fees
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop repeated bounce charges &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
