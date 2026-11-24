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

export default function Section59ContractActClient() {
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
    { id: 'statutory-framework', label: '1. Section 59 to 61 Payment Rules' },
    { id: 'single-vs-multiple-debts', label: '2. Single Loan vs Multiple Loans' },
    { id: 'appropriation-math', label: '3. Principal Credit vs Interest Math' },
    { id: 'rbi-safeguards', label: '4. RBI Penal, KFS & 2026 Rules' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Principal SOP' },
    { id: 'judicial-precedents', label: '7. Supreme Court Limits & Rulings' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Payment to Credit Milestones' },
    { id: 'specialized-scenarios', label: '10. Top-Ups, NPAs & Settlements' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What does Section 59 of the Indian Contract Act say about loan payments?',
      a: 'Section 59 applies when you owe two or more separate loans to the same bank. If you clearly state which loan your payment must clear, the bank must follow your instruction once it accepts the money.'
    },
    {
      q: 'Can I use Section 59 to pay only principal on an overdue personal loan?',
      a: 'No, not by Section 59 alone. The Supreme Court ruled in ICDS v. Smithaben Patel that principal and interest on one loan are not separate debts. Banks apply overdue payments to interest first unless they agree in writing to waive it.'
    },
    {
      q: 'How do I make sure my part-prepayment cuts my personal loan principal?',
      a: 'Keep your monthly EMIs up to date first. Then send a written part-prepayment request asking the bank to cut your loan principal and shorten your tenure. Never transfer extra money without a principal-cut ticket.'
    },
    {
      q: 'What happens if an NBFC parks my extra payment as Advance EMI instead of principal?',
      a: 'If a lender holds your money as Advance EMI, your principal stays unchanged and you save zero interest. Send a written notice to the Grievance Officer asking for a backdated principal credit and a fresh repayment schedule.'
    },
    {
      q: 'Can a bank add late fees to my personal loan principal and charge interest?',
      a: 'No. Under RBI Circular DoR.MCS.REC.28 on Penal Charges, banks and NBFCs cannot add late fees into principal or charge interest on penal charges. Any such compounding breaks RBI rules and can be reversed.'
    },
    {
      q: 'What happens under Section 60 if I pay without naming a loan account?',
      a: 'Under Section 60 of the Contract Act, staying silent gives the bank full choice over where to put your money. The bank can apply your cash to an older card, a lower-priority fee, or even a time-barred debt.'
    },
    {
      q: 'Do I have to pay a fee to prepay my personal loan principal in 2026?',
      a: 'Under RBI Pre-payment Charges Directions effective January 1, 2026, lenders cannot charge any prepayment fee on floating-rate personal loans to individuals. For fixed-rate loans, only fees clearly printed in your Key Facts Statement apply.'
    },
    {
      q: 'Does Section 59 work after a bank gets a court decree or arbitration award?',
      a: 'No. The Supreme Court held in Gurpreet Singh v. Union of India and Leela Hotels v. HUDCO that Sections 59 to 61 stop working once a court decree is passed. Post-decree payments follow Order XXI Rule 1 CPC, clearing interest and costs first.'
    },
    {
      q: 'Should I pay small amounts into an NPA personal loan to cut principal?',
      a: 'No. Small unmarked payments into an NPA loan often vanish into unpaid interest and penal dues while resetting the 3-year limitation clock. Instead, pause random transfers and sign a written One-Time Settlement letter first.'
    },
    {
      q: 'How does CredSettle help fix wrong loan payment credits and settle debt?',
      a: 'CredSettle audits your loan ledger for illegal penal fees and drafts Section 59 or RBI Ombudsman notices. We fix wrong payment credits and negotiate fair One-Time Settlements to wipe out bloated interest.'
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
            <span>Indian Contract Act, 1872 &amp; RBI Fair Lending Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Force Banks to Apply Part-Payments Toward Loan Principal
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Learn how Section 59 of the Indian Contract Act works for personal loans in India. Know when banks must cut your principal, when interest comes first, and how RBI rules stop unfair penal charges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Audit My Loan Ledger</span>
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
                  Backed by Sections 59 to 61 of the Indian Contract Act and RBI Penal Charges and KFS rules.
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
                <span>EXECUTIVE BRIEF: SECTION 59 LOAN PAYMENT RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Multiple Loans Right (Section 59):</strong> When you hold two or more loans with one bank, Section 59 lets you name the exact loan to pay. Once the bank accepts the money, it must obey your written choice.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Single Overdue Loan Limit:</strong> The Supreme Court held in <em>ICDS v. Smithaben Patel</em> that principal and interest on one loan are not separate debts. You cannot bypass unpaid interest on one loan without bank consent.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Active Loan Part-Prepayment:</strong> When your EMIs are paid on time, your extra lump sum must cut the loan principal. Do not let an NBFC park it as Advance EMI with zero interest savings.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Ban on Penal Compounding:</strong> Under RBI Circular DoR.MCS.REC.28, lenders cannot add late fees to your principal. They also cannot charge interest on penal charges.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Prepayment Fee Rule (2026):</strong> Effective January 1, 2026, RBI bans prepayment penalties on floating-rate personal loans to individuals, with zero lock-in period.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Section 59 to 61 Contract Act: Payment Credit Rules */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Framework: Indian Contract Act, 1872</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Section 59 to 61 Contract Act: Payment Credit Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many Indian borrowers pay extra cash to their bank, hoping to cut their personal loan principal fast. Weeks later, they see that the bank used the money for fees, late charges, or another card. Sections 59, 60, and 61 of the Indian Contract Act, 1872 set the legal rules for this exact problem.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In law, choosing which debt a payment clears is called appropriation. Under <strong>Section 59</strong>, if you owe two or more separate debts to one bank, you hold the first right to choose. You must tell the bank clearly, in writing or by clear facts, which debt the cash must pay.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once the bank takes your payment, it must apply the cash exactly as you told it to. The bank cannot keep your money and ignore your written note. For example, if you send ₹40,000 and write the account number of Loan B, the bank cannot divert it to Loan A.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Section 60</strong> works when you stay silent while paying. If you give no clear note, the bank can put your cash toward any lawful due, even an old time-barred debt. <strong>Section 61</strong> applies when neither side chooses, clearing debts in strict date order from oldest to newest.
              </p>
            </section>

            {/* SECTION 2: Single Personal Loan vs Multiple Bank Accounts Law */}
            <section id="single-vs-multiple-debts" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Legal Myth Busting &amp; Contract Law Reality</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Single Personal Loan vs Multiple Bank Accounts Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many social media videos tell borrowers to quote Section 59 on an overdue personal loan and force the bank to cut only principal. You must know the true legal position before trying this step. Courts draw a sharp line between one loan and many loans.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court ruled in <em>ICDS v. Smithaben H. Patel (1999)</em> that Section 59 covers separate debts, not the principal and interest parts of one loan. On a single overdue loan, your signed loan agreement sets the payment order. Almost every Indian personal loan contract clears bounce fees and unpaid interest first, and principal last.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Does that mean you have no right to cut your principal? Not at all. You can still force principal credit in three clear, lawful ways:
              </p>
              <ul className="space-y-2 text-sm md:text-base text-slate-700 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Active Loan Part-Prepayment:</strong> When your regular EMIs are paid on time, there is no overdue interest backlog. After covering interest for the current days, your extra lump sum must go straight to principal.
                </li>
                <li>
                  <strong>Multiple Loans With One Bank:</strong> If you hold a personal loan, a top-up loan, and a credit card with the same bank, Section 59 applies with full force. Your written note stops the bank from draining cash into the wrong account.
                </li>
                <li>
                  <strong>Written Conditional Offer or OTS:</strong> Under <em>Meghraj v. Mst. Bayabai</em>, the interest-first rule yields if the bank agrees in writing to credit principal first or signs a One-Time Settlement letter waiving interest.
                </li>
              </ul>
            </section>

            {/* SECTION 3: Financial Math: Principal Credit vs Interest First */}
            <section id="appropriation-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Real Numbers &amp; Interest Savings Audit</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Financial Math: Principal Credit vs Interest First
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Where your bank credits a ₹1,00,000 lump sum changes your debt cost by tens of thousands of rupees. Consider a ₹5,00,000 personal loan at 14% interest for 48 months, with a monthly EMI of ₹13,663. After 12 EMIs, your remaining principal is about ₹4,01,500.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Now see what happens when you pay ₹1,00,000 in Month 13 under five real banking scenarios. The table below compares your principal cut and interest saved in each case.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">₹1,00,000 Payment Impact on a ₹5L Personal Loan (14% p.a.)</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Month 13 Principal: ₹4,01,500</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Payment Scenario</th>
                        <th className="p-3">Where Bank Credits ₹1,00,000</th>
                        <th className="p-3">New Principal Balance</th>
                        <th className="p-3 text-right">Interest Saved</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">1. Active Part-Prepayment</td>
                        <td className="p-3 text-emerald-700 font-semibold">Direct Principal Reduction</td>
                        <td className="p-3 font-mono font-bold text-emerald-700">₹3,01,500</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">~₹43,800 (10 EMIs Cut)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">2. Advance EMI Parking Trap</td>
                        <td className="p-3 text-rose-600 font-semibold">Held in Suspense for Next 7 EMIs</td>
                        <td className="p-3 font-mono text-rose-600">₹4,01,500 (Unchanged)</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">₹0 Saved</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">3. 4-Month Overdue Loan</td>
                        <td className="p-3 text-amber-700 font-semibold">Bounce Fees + Overdue Interest First</td>
                        <td className="p-3 font-mono text-amber-700">~₹3,63,500</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">Minimal (~₹14,000)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">4. Dual Loans + Section 59 Note</td>
                        <td className="p-3 text-blue-700 font-semibold">Clears 42% Card or Specific LAN</td>
                        <td className="p-3 font-mono text-blue-700">High-Cost Debt Cleared</td>
                        <td className="p-3 text-right font-bold text-blue-700 font-mono">₹42,000+/Year Saved</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">5. NPA One-Time Settlement</td>
                        <td className="p-3 text-[#1886ff]">Negotiated Principal Closure (NOC)</td>
                        <td className="p-3 font-mono text-[#1886ff]">₹0 (Full Legal Exit)</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">100% Penal Dues Waived</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: RBI Penal Charges, KFS & 2026 Prepayment Rules */}
            <section id="rbi-safeguards" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Circulars &amp; Fair Lending Shields</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. RBI Penal Charges, KFS &amp; 2026 Prepayment Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even when a single loan contract puts interest before principal, banks cannot charge hidden or unfair fees. Four strict Reserve Bank of India (RBI) directives shield your payments from unlawful deductions.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>First, RBI Penal Charges Circular (DoR.MCS.REC.28):</strong> Banks and NBFCs can no longer levy extra penal interest on defaults. They may charge only a flat penal fee, and they are banned from adding it to your principal. No further interest can be charged on late fees.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Second, RBI Key Facts Statement Circular (DoR.STR.REC.13):</strong> Issued on April 15, 2024, this rule forces lenders to list every fee and charge upfront in a clear KFS sheet. If a fee or prepayment penalty is missing from your KFS, the lender cannot cut it from your payment.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Third, RBI Pre-payment Charges Directions, 2025 (Effective January 1, 2026):</strong> Under circular RBI/2025-26/64, banks and NBFCs cannot levy any foreclosure or part-prepayment fee on floating-rate personal loans to individuals. There is zero minimum lock-in period, regardless of where your funds come from.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Fourth, RBI IRACP NPA Recovery Policy:</strong> Once a loan turns NPA, banks stop booking regular income on unpaid dues. If your loan contract has no clear recovery waterfall, RBI mandates a fair, uniform, Board-approved policy for crediting recoveries instead of arbitrary adjustments.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Section 59 Payment Allocation Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart explains how Section 59 of the Contract Act works with RBI fair lending rules. It shows how to direct your loan payments toward principal.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/section-59-contract-act-loan-payment-to-principal-rule.jpg"
                    alt="Section 59 Indian Contract Act Loan Payment to Principal Rule Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Section 59 Payment Protection Framework • RBI &amp; ICA Compliant</span>
                  <a
                    href="/images/infographics/section-59-contract-act-loan-payment-to-principal-rule.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Directing Payments to Principal */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Directing Payments to Principal
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Never transfer extra money into a personal loan account without leaving a paper trail. Follow these six steps so your bank credits your payment cleanly and saves you maximum interest.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Audit Your Loan Agreement, KFS &amp; Ledger
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your latest Statement of Account and Key Facts Statement. Check if the lender added illegal compound penal interest or unlisted fees to your loan balance.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Check Account Status Before Sending Cash
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Confirm whether your loan is active, overdue, or one of several loans with the bank. If the loan is already an NPA, stop small payments and ask for an official One-Time Settlement letter instead.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Email a Written Section 59 Intimation First
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email the bank support desk and branch manager before paying. Name the exact Loan Account Number (LAN), invoke Section 59 for multi-loan accounts, and ask for Principal Reduction with Tenure Cut.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Pay by Traceable NEFT, RTGS, or Cheque
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Avoid cash or unmarked UPI transfers. Write &quot;Principal Part-Prepayment LAN [Number] - Sec 59&quot; in the bank transfer remark or on the back of your cheque, and save the UTR proof.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Demand a Revised Repayment Schedule in 7 Days
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check your updated Statement of Account within seven working days. Verify that your principal balance dropped by the exact lump sum and your remaining EMI count went down.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Dispute Advance EMI Parking or Wrong Credits
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the lender parked your funds as Advance EMI or paid the wrong loan, raise a written dispute with the Grievance Officer immediately. Demand backdated adjustment from the payment value date.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Supreme Court Rulings & Legal Limits on Section 59 */}
            <section id="judicial-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Landmark Judgments &amp; Legal Boundaries</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Supreme Court Rulings &amp; Legal Limits on Section 59
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Four Supreme Court rulings shape how Indian banks, DRTs, and civil courts judge every payment dispute. Knowing these cases keeps your legal notice accurate and strong.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>ICDS Ltd. v. Smithaben H. Patel (1999)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court held that Sections 59 to 61 apply only when a borrower owes several distinct debts. They do not apply to principal and interest heads of one single loan, or after a court decree.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Meghraj v. Mst. Bayabai (1969)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Court confirmed the general interest-first rule for a single debt. However, it noted an exception when the lender agrees to a borrower&apos;s clear condition to credit principal first.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Leela Hotels Ltd. v. HUDCO (2012)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Building on <em>Gurpreet Singh v. Union of India (2006)</em>, the Court ruled that after an award or decree, Order XXI Rule 1 CPC governs. A debtor cannot force principal-only credit if the creditor protests.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Central Bank of India v. Ravindra (2002)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A five-judge Constitution Bench ruled that penal interest can never be capitalized into principal. This landmark judgment forms the legal base for RBI&apos;s strict ban on penal compounding.
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
                Your bank may ignore your Section 59 loan choice or park cash as Advance EMI. If it also adds compound late fees, use the official RBI three-tier complaint ladder.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank or NBFC Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Reviews your payment proof, reverses Advance EMI parking, and fixes wrong loan credits.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Audits KFS disclosures, removes unlawful penal compounding, and issues backdated interest refunds.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-Complaint</td>
                      <td className="p-3">Issues binding orders on cms.rbi.org.in to re-credit principal, refund extra interest, and award damages.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Milestones: Payment to Principal Credit */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Milestones: Payment to Principal Credit
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Track each date after you pay your lump sum. Early ledger checks help you spot misapplied funds before extra interest builds up.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Accounting Phase</th>
                      <th className="p-3">Lender Action Required</th>
                      <th className="p-3">Borrower Action Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0</td>
                      <td className="p-3 font-mono text-[11px]">Intimation &amp; Payment</td>
                      <td className="p-3">Receives NEFT/RTGS transfer and logs part-prepayment or Section 59 request.</td>
                      <td className="p-3">Send written email citing LAN and save UTR receipt and service ticket ID.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 3</td>
                      <td className="p-3 font-mono text-[11px]">Ledger Posting</td>
                      <td className="p-3">Applies funds against principal as of the exact value date received.</td>
                      <td className="p-3">Check mobile banking app to confirm money is not stuck in Suspense or Advance EMI.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 4 to 7</td>
                      <td className="p-3 font-mono text-[11px]">Schedule Update</td>
                      <td className="p-3">Generates revised amortization schedule showing reduced tenure or lower EMI.</td>
                      <td className="p-3">Download Statement of Account and verify principal drop and zero unlisted fees.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 8 to 15</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">GRO Rectification</td>
                      <td className="p-3">Investigates misallocation, Advance EMI parking, or wrong multi-loan posting.</td>
                      <td className="p-3 font-bold text-amber-800">File formal written notice with Bank GRO citing Section 59 and RBI KFS rules.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 16 to 30</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">PNO Escalation</td>
                      <td className="p-3">Head Office reviews ledger breach and calculates backdated interest credit.</td>
                      <td className="p-3 font-bold text-slate-900">Escalate to Principal Nodal Officer with full email trail and ledger proof.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 and Beyond</td>
                      <td className="p-3 font-mono text-[11px] text-rose-700 font-bold">RBI Ombudsman</td>
                      <td className="p-3">Faces binding Ombudsman rectification order and deficiency compensation.</td>
                      <td className="p-3">Submit full dossier on cms.rbi.org.in for binding reversal and interest refund.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Real-World Cases: Top-Up Loans, NPAs & Settlements */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Real-World Cases: Top-Up Loans, NPAs &amp; Settlements
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Payment disputes look different when you carry top-up loans, NBFC app loans, or NPA accounts. Here is how Indian law protects you in four common real-life cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Main Loan + Top-Up Loan (Dual LANs)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A top-up personal loan carries a separate Loan Account Number (LAN). This is a textbook Section 59 case. Always name the exact LAN in writing so the bank cannot split your cash under Section 60.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    NBFC &quot;Advance EMI&quot; Parking Trap
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Many digital NBFC apps treat extra UPI payments as Advance EMI instead of principal reduction. Demand an immediate backdated principal credit through the Nodal Officer so you do not lose interest savings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    NPA Accounts &amp; One-Time Settlement
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Once a loan crosses 90 days overdue and becomes an NPA, small ad-hoc payments rarely lower your principal. Stop random transfers and negotiate a formal One-Time Settlement letter that waives penal dues first.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    Section 59 vs Section 171 Bank Lien
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 171, banks often auto-debit savings accounts to cover overdue loans. By marking a payment for a specific loan under Section 59, you create a specific purpose that limits arbitrary cross-account diversion.
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
                Frequently Asked Questions: Section 59 Loan Payments
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers to the most common borrower questions on Section 59 of the Contract Act, principal part-prepayments, penal charges, and RBI dispute rights.
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
                  <strong>Indian Contract Act, 1872:</strong> Sections 59, 60, and 61 (Appropriation of Payments) and Section 171 (General Lien of Bankers).
                </li>
                <li>
                  <strong>RBI Circular on Penal Charges:</strong> RBI/2023-24/53, DoR.MCS.REC.28/01.01.001/2023-24, Fair Lending Practice - Penal Charges in Loan Accounts (Ban on Penal Compounding).
                </li>
                <li>
                  <strong>RBI Key Facts Statement Circular:</strong> RBI/2024-25/18, DoR.STR.REC.13/13.03.00/2024-25 dated April 15, 2024 (Mandatory Fee and APR Disclosures for Retail Loans).
                </li>
                <li>
                  <strong>RBI (Pre-payment Charges on Loans) Directions, 2025:</strong> RBI/2025-26/64, DoR.MCS.REC.38/01.01.001/2025-26 (Zero Prepayment Fee on Floating-Rate Individual Loans Effective January 1, 2026).
                </li>
                <li>
                  <strong>RBI Master Circular on IRACP Norms:</strong> Prudential Norms on Income Recognition, Asset Classification and Provisioning (Transparent Policy for Appropriation of NPA Recoveries).
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> ICDS Ltd. v. Smithaben H. Patel (1999) 3 SCC 80; Meghraj v. Mst. Bayabai (1969) 2 SCC 274; Central Bank of India v. Ravindra (2002) 1 SCC 367; Gurpreet Singh v. Union of India (2006) 8 SCC 457; and Leela Hotels Ltd. v. HUDCO (2012) 1 SCC 302.
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
                    <span>India Code (Contract Act, 1872)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://sachet.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Sachet Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/rbi-guidelines-on-penal-charges-in-loan-accounts" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Penal Charges Rules
                  </Link>
                  <Link href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Hidden Fees Missing in KFS
                  </Link>
                  <Link href="/foreclosure-and-part-prepayment-charges-on-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Prepayment Rules
                  </Link>
                  <Link href="/interest-rate-recalculate-after-prepayment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Interest Reset After Prepayment
                  </Link>
                  <Link href="/prepayment-reflection-time-in-loan-account" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Prepayment Ledger Reflection Time
                  </Link>
                  <Link href="/top-up-personal-loan-default-dual-account-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Top-Up Dual LAN Settlement
                  </Link>
                  <Link href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 171 Bank Right of Set-Off
                  </Link>
                  <Link href="/does-loan-settlement-discharge-guarantor-section-135-contract-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 135 Guarantor Discharge
                  </Link>
                  <Link href="/how-to-negotiate-a-lower-principal-amount-for-creditors" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Negotiate Lower Loan Principal
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
                Specialist in Indian banking contracts, RBI penal charge audits, loan ledger verification, and personal loan settlements, helping borrowers challenge unfair adjustments and exit debt legally.
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
                  LOAN LEDGER &amp; OTS SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Diverted Your Part-Payment?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team audits your loan ledger, sends Section 59 and RBI Penal Charge notices, reverses Advance EMI traps, and settles bloated dues for a clean NOC.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Loan Ledger Audit
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
                  <span><strong>Section 59 Legal Drafting:</strong> Ironclad multi-loan payment notices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Penal Compounding Audit:</strong> Strip unlawful fees under RBI rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Advance EMI Reversal:</strong> Backdated principal credit disputes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Principal-Focused OTS:</strong> Waive interest bloat and secure NOC.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/rbi-guidelines-on-penal-charges-in-loan-accounts"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Guidelines on Penal Charges
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Ban on compound late fees &rarr;</span>
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
                  href="/top-up-personal-loan-default-dual-account-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Top-Up Personal Loan Dual Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Manage two LANs safely &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
