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

export default function ChangePersonalLoanEmiDateClient() {
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
    { id: 'rbi-framework', label: '1. RBI Rules: Loan vs Credit Card' },
    { id: 'bank-policies', label: '2. Bank & NBFC EMI Date Rules' },
    { id: 'bpi-math', label: '3. Broken Period Interest (BPI) Math' },
    { id: 'mandate-rules', label: '4. NACH & UPI Autopay Shift Rules' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step EMI Shift SOP' },
    { id: 'legal-rights', label: '7. Bounce Fees, CIBIL & Sec 25 Law' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Request to Activation Timeline' },
    { id: 'specialized-scenarios', label: '10. Job Switch & Bank Refusal Cases' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can I change my personal loan EMI debit date to match my new salary day?',
      a: 'Yes, most Indian banks and NBFCs allow a one-time EMI date shift if your loan has zero overdue dues. However, it depends on your lender policy and is not an automatic RBI right like credit card billing dates.'
    },
    {
      q: 'Does RBI force banks to change a personal loan EMI due date?',
      a: 'No. RBI gives a legal right to shift credit card billing cycles at least once, but personal loan due dates follow each bank board policy. Still, RBI rules bar hidden swap fees, inflated interest, and unfair bounce penalties.'
    },
    {
      q: 'What is Broken Period Interest (BPI) when shifting an EMI date?',
      a: 'Broken Period Interest is the daily interest for the extra days between your old due date and your new due date. For example, moving your EMI from the 5th to the 12th adds 7 extra days of simple daily interest on your unpaid principal.'
    },
    {
      q: 'How much fee do banks charge to shift a personal loan EMI date?',
      a: 'Most banks and NBFCs charge a one-time swap fee of Rs 500 to Rs 2,000 plus 18% GST, along with Broken Period Interest. Under RBI KFS rules, a lender cannot charge any swap fee that is missing from your official Schedule of Charges.'
    },
    {
      q: 'Does my NACH or UPI Autopay mandate update on its own?',
      a: 'No. Changing your EMI date does not edit your live NACH or UPI Autopay mandate. You must sign a fresh mandate for the new date and confirm in writing that the old mandate is cancelled to stop double debits.'
    },
    {
      q: 'How long does it take for the new personal loan EMI date to go live?',
      a: 'Most banks take 7 to 10 working days to calculate your BPI and approve the request. Full activation with a new NACH mandate usually takes 20 to 30 days, so keep funds ready for the current month EMI.'
    },
    {
      q: 'Will changing my personal loan EMI date hurt my CIBIL score?',
      a: 'No. An approved EMI date change does not hurt your CIBIL score at all. Your score drops only if an EMI bounces during the switch and stays unpaid past the lender credit bureau reporting cut-off.'
    },
    {
      q: 'Can a bank file a Section 25 case if my EMI bounces due to a salary delay?',
      a: 'Yes. Under Section 25 of the Payment and Settlement Systems Act, 2007, a bounced NACH debit carries legal risk if unpaid for 15 days after notice. Clearing the EMI quickly and shifting your due date stops this risk.'
    },
    {
      q: 'What should I do if my bank or loan app refuses to change my EMI date?',
      a: 'Build a one-month EMI cash buffer in your bank account first. You can also try a balance transfer to a bank that offers your chosen due date. If bounce fees pushed you into debt stress, ask for loan restructuring.'
    },
    {
      q: 'How can CredSettle help if salary date mismatches caused EMI bounces and notices?',
      a: 'CredSettle audits unfair bounce fees and illegal compounding under RBI penal rules. Our team replies to Section 25 NACH notices, escalates bank errors to the RBI Ombudsman, and negotiates restructuring or OTS relief.'
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
            <span>Personal Loan EMI Sync &amp; RBI Borrower Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Prevent Monthly Bounces by Shifting Personal Loan Cycle
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did your new job or employer change your salary day? Learn how to change your personal loan EMI debit date in India. Check fair Broken Period Interest math, update NACH mandates safely, and protect your CIBIL score.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Resolve EMI Bounce Disputes</span>
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
                  Backed by RBI Fair Practices Code, KFS Circular 2024, and RBI Penal Charges Rules.
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
                <span>EXECUTIVE BRIEF: SHIFTING PERSONAL LOAN EMI DEBIT DATES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Lender Policy vs RBI Right:</strong> Unlike credit card billing dates, banks are not forced by RBI to change personal loan EMI dates. Most big banks allow it once if you have zero overdue dues.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Fair Broken Period Interest:</strong> Pushing your due date forward adds extra days of simple daily interest called Broken Period Interest (BPI). Under RBI rules, banks cannot pad extra days or hide swap fees.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Manual NACH Mandate Reset:</strong> Your old NACH or UPI Autopay will not update on its own. You must sign a fresh mandate and confirm the old one is cancelled to avoid double debits.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Fast CIBIL Reporting Risk:</strong> Under new RBI fortnightly and frequent bureau rules, even a 5-day salary date mismatch can hit your CIBIL report fast and cut your score.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Protection Against Bounce Traps:</strong> Lenders cannot compound penal interest on failed EMIs or hit your mandate multiple times a month to pile up bounce fees.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: RBI Rules: Personal Loan EMI Date vs Credit Card Cycle */}
            <section id="rbi-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Clarity &amp; RBI Fair Practices</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Rules: Personal Loan EMI Date vs Credit Card Cycle
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many Indian workers change jobs and get a new salary date. Your old firm may have paid you on the 1st, while your new firm pays you on the 7th or 10th. If your personal loan EMI still hits on the 5th, your account stays empty on debit day.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, know one key truth about Reserve Bank of India (RBI) rules. For credit cards, the RBI Master Direction forces every card bank to let you change your billing cycle at least once. That rule is a strict legal right for card users.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Personal loans do not have that same automatic right. A personal loan has a fixed repayment schedule built into your loan contract. Because of this, shifting a personal loan EMI due date depends on your bank or NBFC board policy.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Still, RBI rules protect you tightly once you ask for a shift or face a mismatch. Under RBI Key Facts Statement (KFS) rules from April 2024, lenders cannot add surprise swap fees that were never listed in your schedule of charges. Under RBI interest charging rules from April 2024, they can only charge daily interest for the exact extra days.
              </p>
            </section>

            {/* SECTION 2: Major Bank & NBFC EMI Date Change Policies in India */}
            <section id="bank-policies" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Lender Comparison &amp; Eligibility Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Major Bank &amp; NBFC EMI Date Change Policies in India
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most large banks and NBFCs let good borrowers shift their EMI date once during the loan tenure. Almost every lender enforces three base rules before saying yes. Your loan must have zero overdue dues, and you usually need 3 to 6 on-time EMIs first. You must also pick from fixed bank dates like the 2nd, 5th, 10th, or 15th.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Keep your new appointment letter or latest salary slip ready as proof of your new pay day. The table below shows how top Indian lenders handle EMI date shift requests.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[580px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Bank / NBFC</th>
                      <th className="p-3">How to Request</th>
                      <th className="p-3">Typical Fee + Cost</th>
                      <th className="p-3">Key Approval Rule</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">HDFC Bank</td>
                      <td className="p-3">NetBanking or Retail Loan Centre (&quot;Shift in Due Date&quot; form)</td>
                      <td className="p-3 font-mono">~₹500 + GST + upfront BPI</td>
                      <td className="p-3">Zero overdue status; takes ~7 days to quote, ~25 days to go live.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">ICICI Bank</td>
                      <td className="p-3">iMobile / Internet Banking service request or loan branch</td>
                      <td className="p-3 font-mono">Swap fee + GST + interim BPI</td>
                      <td className="p-3">Only allowed into pre-set personal loan cycle slots.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Axis Bank</td>
                      <td className="p-3">Axis Mobile / NetBanking or local Axis Loan Centre</td>
                      <td className="p-3 font-mono">₹500 to ₹1,000 + GST + BPI</td>
                      <td className="p-3">Clean repayment history; requires fresh e-NACH setup.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">SBI (State Bank)</td>
                      <td className="p-3">Written letter at your Home Branch with salary proof</td>
                      <td className="p-3 font-mono">Nominal / case-based + BPI</td>
                      <td className="p-3">Strict branch manager review; Standing Instruction reset needed.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Bajaj Finserv &amp; NBFCs</td>
                      <td className="p-3">&quot;My Account&quot; portal, support ticket, or branch desk</td>
                      <td className="p-3 font-mono">₹500 to ₹2,000 + GST + BPI</td>
                      <td className="p-3">Usually once per loan after 3 to 6 paid EMIs; fresh mandate must clear.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Digital Loan Apps</td>
                      <td className="p-3">In-app ticket or NBFC Nodal Desk email</td>
                      <td className="p-3 font-mono">Often not supported</td>
                      <td className="p-3 text-amber-800 font-medium">Fixed scripts often deny shifts; use buffer or refinance exit.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: Broken Period Interest (BPI) Math & Cost Comparison */}
            <section id="bpi-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Interest Calculation &amp; Yearly Savings Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Broken Period Interest (BPI) Math &amp; Cost Comparison
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you push your EMI date forward, your bank waits longer to collect that month&apos;s payment. Because personal loans accrue interest each day on the unpaid principal, those extra gap days create Broken Period Interest (BPI).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The BPI formula is easy to verify on your phone: <strong>(Unpaid Principal × Yearly Interest Rate × Extra Days) ÷ 365</strong>. Always ask the bank for a written BPI break-up before you pay. Under RBI circular RBI/2024-25/30, a lender can charge interest only for exact extra days and never a full extra month.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers skip a date shift because they do not want to pay ₹1,500 to ₹2,000 upfront. That mistake costs far more over a year. The ledger below compares a one-time shift on a ₹5,00,000 loan at 14% interest against letting your EMI bounce every month.
              </p>

              {/* Representative Cost Comparison Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Cost Ledger: 7-Day EMI Shift (5th to 12th) on ₹5 Lakh Loan</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">14% p.a. Reducing Rate</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Cost Component</th>
                        <th className="p-3">Official EMI Date Shift (One-Time)</th>
                        <th className="p-3">No Shift: Monthly 5-Day Delay (12 Months)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Broken Period Interest (7 Days)</td>
                        <td className="p-3 font-mono text-slate-800">₹1,342 (₹191.78/day × 7)</td>
                        <td className="p-3 font-mono">₹0</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Bank Swap / Admin Fee (+18% GST)</td>
                        <td className="p-3 font-mono text-slate-800">₹590 (₹500 + GST)</td>
                        <td className="p-3 font-mono">₹0</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Savings Bank NACH Return Fee</td>
                        <td className="p-3 font-mono text-emerald-600 font-bold">₹0</td>
                        <td className="p-3 font-mono text-rose-600">₹7,080 (₹590 × 12 bounces)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Lender EMI Bounce + Penal Charge</td>
                        <td className="p-3 font-mono text-emerald-600 font-bold">₹0</td>
                        <td className="p-3 font-mono text-rose-600">₹9,600+ (₹800 avg × 12)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">CIBIL Score &amp; Legal Risk</td>
                        <td className="p-3 text-emerald-700 font-semibold">Zero Impact (Clean Track)</td>
                        <td className="p-3 text-rose-700 font-semibold">DPD Drops + Sec 25 Risk</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total 12-Month Outflow</td>
                        <td className="p-3 text-[#1886ff] font-mono text-sm sm:text-base">₹1,932 (Saves ~₹14,748/yr)</td>
                        <td className="p-3 text-rose-700 font-mono text-sm sm:text-base">₹16,680+ &amp; Damaged CIBIL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: NACH, e-Mandate & UPI Autopay Transition Rules */}
            <section id="mandate-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Auto-Debit Traps &amp; Mandate Hygiene</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. NACH, e-Mandate &amp; UPI Autopay Transition Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The biggest mistake borrowers make happens right after the bank approves the new date. Your active NACH (National Automated Clearing House) or UPI Autopay mandate does not adjust on its own. It stays tied to the old debit date unless formally replaced.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Never cancel or pause your old NACH or UPI Autopay mandate before getting written approval from the lender. Stopping a live mandate on your own breaks your loan agreement. Some lenders treat an unapproved stop-payment just like a bounced cheque.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Wait for your lender to confirm the new date by email. Then sign the fresh e-NACH or UPI Autopay mandate at least 7 working days early. Also get written proof that your old UMRN (Unique Mandate Reference Number) is cancelled.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Watch your bank account closely during the switch month. If the new mandate is still under bank verification, pay that one EMI manually via the lender app or portal. Save the UTR number so you have clear proof of on-time payment.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Personal Loan EMI Date Shift Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual guide sums up the safe way to sync your personal loan cycle with your new salary day. Keep these checks handy so you prevent bounce fees and protect your credit profile.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/change-personal-loan-emi-debit-date-match-salary-date.jpg"
                    alt="Change Personal Loan EMI Debit Date to Match New Salary Day Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Personal Loan EMI Sync Framework • RBI Compliant Guide</span>
                  <a
                    href="/images/infographics/change-personal-loan-emi-debit-date-match-salary-date.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Shift Your Personal Loan EMI Date */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Shift Your Personal Loan EMI Date
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do not wait until an EMI bounces to contact your bank. Follow these six simple steps as soon as your new salary date is confirmed.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Clear All Overdue Dues and Pick a Safe Buffer Day
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check your loan ledger and clear any small pending fees first. Pick a new EMI date that falls 3 to 5 days after your salary day so bank holidays never cause a bounce.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Submit a Written EMI Date Shift Application
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Raise a formal request via NetBanking, email, or your loan branch. Attach your new offer letter or salary slip showing your updated payroll credit date and save your service ticket number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Audit the BPI Quote and Schedule of Charges
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When the lender replies with the cost, verify the daily BPI formula against your unpaid principal. Check that the swap fee matches your Key Facts Statement (KFS) and dispute any unlisted fee.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Pay Interim BPI and Sign the Revised Schedule
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pay the approved BPI and swap fee through official net banking or a bank branch receipt. Download the updated loan repayment schedule showing your new monthly due date and final loan end date.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Register Fresh e-NACH and Cancel the Old UMRN
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Approve the new e-NACH or UPI Autopay mandate using your debit card or net banking OTP. Confirm via email that the old UMRN is closed so both mandates do not hit your savings account.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Verify the First Debit and Check Your CIBIL Report
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Keep extra funds in your account during the switch month just in case the old debit fires late. Pull your CIBIL report 30 days later to confirm zero Days Past Due (DPD) marks were added.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Legal Rights: Bounce Fees, CIBIL & Section 25 PASSA */}
            <section id="legal-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections &amp; Legal Defenses</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Legal Rights: Bounce Fees, CIBIL &amp; Section 25 PASSA
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even if a salary date mismatch already caused one or two EMI bounces, Indian banking law sets hard limits on what lenders can do. Knowing these four protections helps you fight back against unfair charges and harsh notices.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>No Compounding Penal Interest (RBI 2024)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Circular DoR.MCS.REC.28 (effective April 1, 2024), banks cannot add penal interest onto your loan rate or charge interest on top of late fees. Only fair, flat penal charges are allowed.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Clock className="w-4 h-4" />
                    <span>15-Day &amp; Frequent CIBIL Reporting</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Circular RBI/2024-25/60, lenders report loan status to CIBIL every 15 days (and on weekly snapshots). If a bank error caused a bounce during your shift, you can demand a free CIBIL fix within 30 days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Ban on Repeated Monthly Mandate Hits</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Some NBFCs re-run a failed NACH mandate 3 to 5 times in one month to pile up bounce fees. RBI treats excessive re-presentment without consent as an unfair practice you can claim back.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Section 25 PASSA Notice Defense</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A NACH bounce notice under Section 25 of the Payment and Settlement Systems Act, 2007 gives you 15 days to pay or reply. Showing manual payment proof or a pending shift ticket proves honest intent.
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
                What if your bank approved the shift but still hit your old NACH mandate? They may charge double fees or add a wrong DPD mark on CIBIL. Follow this official RBI three-tier complaint ladder to recover your money and clean your credit file.
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
                      <td className="p-3">Bank / NBFC Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Reverses wrong bounce charges, cancels the old UMRN, and fixes BPI math errors.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Reviews unfair refusal, removes wrong CIBIL DPD entries, and stops extra NACH hits.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Issues binding orders on cms.rbi.org.in to refund unfair fees and pay CIBIL delay compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline: Request to New EMI Activation */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Request to New EMI Activation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Timing your EMI date shift right prevents a transition-month bounce. Use this day-by-day timeline to plan your funds while the bank updates its system and NACH records.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Operational Phase</th>
                      <th className="p-3">Lender Action Required</th>
                      <th className="p-3">Borrower Action Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to Day 3</td>
                      <td className="p-3 font-mono text-[11px]">Request Filing</td>
                      <td className="p-3">Logs ticket and checks your repayment track for zero overdue dues.</td>
                      <td className="p-3">Submit salary proof right after your current EMI clears cleanly.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 4 to Day 10</td>
                      <td className="p-3 font-mono text-[11px]">BPI &amp; Fee Quote</td>
                      <td className="p-3">Sends written quote for Broken Period Interest and swap fee.</td>
                      <td className="p-3">Verify daily BPI math against your KFS and pay approved dues.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 11 to Day 18</td>
                      <td className="p-3 font-mono text-[11px]">Mandate Reset</td>
                      <td className="p-3">Issues revised schedule, links new e-NACH, and cancels old UMRN.</td>
                      <td className="p-3">Authenticate new mandate via OTP and save old mandate closure email.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 19 to Day 30</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Buffer Window</td>
                      <td className="p-3">NPCI activates the fresh NACH mandate across both banks.</td>
                      <td className="p-3 font-bold text-amber-800">Keep buffer balance ready or pay manually if mandate shows pending.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Next Billing Cycle</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">New Cycle Live</td>
                      <td className="p-3">Auto-debits EMI cleanly on your new post-salary due date.</td>
                      <td className="p-3 font-bold text-slate-900">Verify debit SMS and confirm zero DPD on next CIBIL refresh.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Scenarios: Job Switch & Bank Refusal */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Job Switch &amp; Bank Refusal
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Real life does not always fit a neat bank form. Here is how to handle tough payroll transitions, rigid loan apps, and multi-loan cash crunches without ruining your credit record.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    When Your Bank or Loan App Refuses
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a lender rejects your date shift, keep one extra EMI permanently in your debit account as a safety float. If your CIBIL is above 750, you can also do a balance transfer to a bank that offers your chosen due date.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    Notice Period &amp; Full-and-Final (F&amp;F) Gap
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Switching employers often leaves a 45-day cash gap while your old company processes F&amp;F dues. Ask your bank for a temporary 1-month payment alignment before the due date instead of letting NACH bounce silently.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Changing Salary Bank Account &amp; EMI Date Together
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A new employer may open your salary account in a different bank. Submit a Bank Account Swap request together with your EMI Date Shift so you only pay the NACH reset fee once.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Syncing Credit Cards &amp; Multiple Personal Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Shift your credit card billing dates first using your mandatory RBI right. Then align your personal loan EMIs to fall 3 to 5 days after salary credit. If stacked bounces already caused default, explore legal restructuring or OTS.
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
                Frequently Asked Questions: Personal Loan EMI Date Shift
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, practical answers to common questions on shifting your personal loan EMI debit date, Broken Period Interest, NACH mandate resets, and CIBIL protection in India.
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
                  <strong>RBI Key Facts Statement (KFS) Circular:</strong> RBI/2024-25/18 (DOR.STR.REC.13/13.03.00/2024-25, dated April 15, 2024) - Mandatory upfront fee disclosure and ban on hidden charges.
                </li>
                <li>
                  <strong>RBI Fair Practices Code on Charging of Interest:</strong> RBI/2024-25/30 (DoR.STR.REC.20/13.03.00/2024-25, dated April 29, 2024) - Daily pro-rata interest calculation and fair Broken Period Interest rules.
                </li>
                <li>
                  <strong>RBI Fair Lending Practice - Penal Charges Circular:</strong> RBI/2023-24/53 (DoR.MCS.REC.28/01.01.001/2023-24, effective April 1, 2024) - Ban on capitalizing penal interest on EMI bounces.
                </li>
                <li>
                  <strong>RBI Credit Information Reporting Directive:</strong> RBI/2024-25/60 (dated August 8, 2024, effective January 1, 2025) - Fortnightly and frequent credit bureau DPD updates and dispute timelines.
                </li>
                <li>
                  <strong>Payment and Settlement Systems Act, 2007:</strong> Section 25 - Dishonour of electronic funds transfer (NACH / ECS) mandates, statutory 15-day notice period, and compounding remedies.
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
                  <a href="https://www.npci.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>NPCI NACH &amp; UPI Autopay</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Dispute Portal</span>
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
                  <Link href="/change-credit-card-billing-cycle-date-rbi-salary-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Billing Cycle Rule
                  </Link>
                  <Link href="/upi-autopay-mandate-pause-vs-revoke-personal-loan-emi" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    UPI Autopay Pause vs Revoke
                  </Link>
                  <Link href="/nbfc-presenting-mandate-multiple-times-month-bounce-fee" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Multiple NACH Hits Bounce Refund
                  </Link>
                  <Link href="/personal-loan-interest-before-disbursal-bpi-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan BPI Refund Rule
                  </Link>
                  <Link href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Hidden Fees Missing in KFS
                  </Link>
                  <Link href="/can-hr-refuse-salary-account-switch-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Switch Salary Bank Account Rules
                  </Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 25 NACH Bounce Notice
                  </Link>
                  <Link href="/stop-auto-debit-ecs-bounce-charges" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Auto-Debit Bounce Fees
                  </Link>
                  <Link href="/loan-emi-overdue-1-day-what-happens" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    1-Day Overdue Loan EMI Rules
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
                Specialist in personal loan compliance, RBI Fair Practices rules, NACH bounce defense, and debt restructuring helping Indian borrowers protect their credit scores and resolve lender disputes.
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
                  EMI BOUNCE &amp; CIBIL SHIELD
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Stuck in Monthly EMI Bounce Fees?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking advisors challenge illegal bounce fees, fix wrong CIBIL DPD entries, reply to Section 25 NACH notices, and negotiate fair loan restructuring or OTS relief.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Book Free Loan Review Now
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
                  <span><strong>RBI Penal Rule Audit:</strong> Stop illegal compounding and excess bounce fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 25 Legal Defense:</strong> Fast written reply to NACH bounce notices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL DPD Correction:</strong> Remove wrong overdue marks via RBI CMS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Harassment Stop Shield:</strong> Legal action against unfair recovery calls.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/change-credit-card-billing-cycle-date-rbi-salary-rule"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Change Credit Card Billing Date
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Mandatory RBI salary sync rule &rarr;</span>
                </Link>

                <Link
                  href="/upi-autopay-mandate-pause-vs-revoke-personal-loan-emi"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    UPI Autopay Pause vs Revoke
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Safe mandate control rules &rarr;</span>
                </Link>

                <Link
                  href="/ecs-nach-bounce-legal-notice-section-25"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 25 NACH Bounce Notice
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">15-day legal defense steps &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
