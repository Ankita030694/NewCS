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

export default function CreditCardAtmCashAdvanceClient() {
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
    { id: 'daily-debt-trap', label: '1. Daily Cash Advance Trap' },
    { id: 'rbi-billing-rules', label: '2. RBI Master Direction Rules' },
    { id: 'swipe-vs-atm-comparison', label: '3. Swipe vs ATM Cash Fees' },
    { id: 'minimum-due-trailing', label: '4. Minimum Due & Trailing Trap' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Chart' },
    { id: 'ots-settlement-math', label: '6. Cash Inflation vs OTS Math' },
    { id: 'step-by-step-sop', label: '7. Step-by-Step Escape SOP' },
    { id: 'borrower-rights', label: '8. Court Rulings & Legal Shield' },
    { id: 'escalation-matrix', label: '9. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '10. Day 1 Cash to OTS Timeline' },
    { id: 'common-mistakes', label: '11. Mistakes & Precautions' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'RBI & Legal Citations' }
  ];

  const faqs = [
    {
      q: 'Does a credit card ATM cash withdrawal get an interest-free grace period?',
      a: 'No. Under RBI rules and bank MITC terms, ATM cash advances get zero interest-free grace days. Daily interest at 3.4% to 3.75% per month starts from the exact day you take the cash.'
    },
    {
      q: 'What fees do Indian banks charge on a credit card ATM cash advance?',
      a: 'Banks charge an instant cash advance fee of 2.5% to 3.5% of the cash taken, or ₹300 to ₹500 minimum, whichever is higher. They also add 18% GST on the fee and on all daily interest.'
    },
    {
      q: 'Why was I charged interest next month even after paying my statement bill in full?',
      a: 'Daily interest keeps running between your bill date and the day you actually pay. That unbilled gap shows up on your next bill as trailing interest unless you pay a little extra early.'
    },
    {
      q: 'Does an unpaid cash advance cancel the grace period on normal shopping swipes?',
      a: 'Yes. If you do not clear the Total Amount Due by the due date and carry any cash balance forward, you lose your grace period. Every new grocery or shopping swipe also draws interest from Day 1.'
    },
    {
      q: 'Can a Consumer Court cap 42% credit card cash advance interest at 30%?',
      a: 'No. In HSBC v. Awaz (December 2024), the Supreme Court ruled under Section 21A of the Banking Regulation Act that courts cannot cap card interest rates if the bank disclosed them in the MITC.'
    },
    {
      q: 'Can banks charge compound interest on unpaid late fees and GST?',
      a: 'No. Under Paragraph 9 of the RBI Credit Card Master Direction, 2022, banks cannot add unpaid taxes, levies, or fees into principal to charge extra interest on top of them.'
    },
    {
      q: 'Can the police arrest me if I default on a credit card ATM cash withdrawal?',
      a: 'No. Taking cash inside your approved ATM cash limit with your own PIN is a legal contract, not fraud. Card default is a civil matter unless a cheque or e-NACH auto-debit bounces.'
    },
    {
      q: 'Can I settle inflated credit card cash advance dues through an RBI OTS?',
      a: 'Yes. Once an unpaid card crosses 90 days into NPA status, you can seek a One-Time Settlement under RBI Circular DOR.STR.REC.20/21.04.048/2023-24 to waive heavy interest and late fees.'
    },
    {
      q: 'Can my bank cut cash advance dues straight from my salary account?',
      a: 'If your salary account sits in the same bank that issued your credit card, the bank can hold or cut funds under Section 171 of the Indian Contract Act. It cannot touch accounts in other banks.'
    },
    {
      q: 'How soon must the bank update CIBIL after I pay my OTS settlement?',
      a: 'Under RBI fortnightly reporting rules, banks must send updated status files to CIBIL, Experian, Equifax, and CRIF every 15 days and issue your No Dues Certificate within 30 days.'
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
            <span>RBI Credit Card Directions 2022 &amp; OTS Relief Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Escape Credit Card Cash Withdrawal Daily Interest Trap
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Taking cash at an ATM on a credit card starts 40% to 45% yearly interest from Day 1 with zero grace days. Learn RBI billing rules, dispute illegal fee compounding, and settle inflated dues the legal way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Exit Your Cash Advance Trap</span>
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
                  Backed by RBI Card Directions 2022 and Compromise OTS Circular 2023.
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
                <span>EXECUTIVE BRIEF: CREDIT CARD ATM CASH ADVANCE RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Grace Period Trap:</strong> Unlike store swipes, ATM cash advances get zero free days. Daily interest at 3.4% to 3.75% per month starts from Day 1.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Instant Fee Plus 18% GST:</strong> Every ATM pull adds a 2.5% to 3.5% cash fee (or ₹500 minimum) plus 18% GST on both fees and daily interest.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">RBI Ban on Fee Compounding:</strong> Under RBI Card Directions, banks cannot charge compound interest on unpaid GST, taxes, or late fees.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Supreme Court Rate Rule (2024):</strong> In <em>HSBC v. Awaz</em>, the Supreme Court held courts cannot cap 42% card rates, making RBI OTS your main exit.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Legal Compromise OTS:</strong> Once unpaid dues cross 90 days into NPA status, banks waive steep interest and fines under Board-approved OTS plans.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: How ATM Cash Withdrawals Trigger a Daily Debt Trap */}
            <section id="daily-debt-trap" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CreditCard className="w-4 h-4 text-[#1886ff]" />
                <span>Anatomy of the Cash Advance Spiral</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. How ATM Cash Withdrawals Trigger a Daily Debt Trap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During a hospital need, rent gap, or sudden job loss, many people put their credit card into an ATM for quick cash. Banks call this feature a cash advance and set it at 20% to 40% of your card limit. Most card users assume they get 45 free days to pay that cash back, just like normal store swipes.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                That belief starts one of the fastest debt traps in Indian banking. The second cash leaves the ATM slot, HDFC, SBI Card, ICICI, Axis, and other issuers charge a flat fee of 2.5% to 3.5%, or ₹500 minimum. Taking five ₹2,000 notes in five separate pulls costs ₹2,500 in flat fees plus ₹450 in GST on the spot.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Worse still, ATM cash gets zero interest-free days. Finance charges of 3.4% to 3.75% per month (40.8% to 45% per year) begin from the exact minute of withdrawal. Every single day you wait for your monthly bill to print, daily interest plus 18% GST keeps piling up.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Within six to nine months of missed bills, late fines, over-limit fees, and 45% APR can easily double your original cash withdrawal. Understanding your RBI rights is the quickest way to halt this spiral.
              </p>
            </section>

            {/* SECTION 2: RBI Master Direction Rules on Cash Advance Billing */}
            <section id="rbi-billing-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Consumer Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI Master Direction Rules on Cash Advance Billing
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit card cash advances in India follow the Reserve Bank of India (Credit Card and Debit Card - Issuance and Conduct) Directions, 2022 (Circular DoR.AUT.REC.No.27/24.01.041/2022-23, updated on March 7, 2024). While RBI does not fix a low rate cap, it enforces four strict billing rules that banks cannot break.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, every issuer must print your exact cash limit, flat cash fee, monthly rate, and yearly APR inside the Most Important Terms and Conditions (MITC). They must also show clear math examples of how cash interest works. Any hidden charge left out of the MITC must be refunded in full.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, Paragraph 9 of the RBI Master Direction bans banks from charging interest on unpaid taxes, levies, or fees. A bank can charge interest on the cash principal you took, yet it cannot add unpaid 18% GST or late fees into principal to compound more interest.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, banks must use the adjusted balance rule after any part payment. If your bill is ₹50,000 and you pay ₹30,000 before the due date, future interest and late fees apply only on the remaining ₹20,000. Also, banks must give 3 grace days past the due date before adding late fees or reporting past-due marks to CIBIL.
              </p>
            </section>

            {/* SECTION 3: Retail Swipes vs ATM Cash Advances: Fee Comparison */}
            <section id="swipe-vs-atm-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Side-by-Side Cost Audit</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Retail Swipes vs ATM Cash Advances: Fee Comparison
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers treat an ATM cash pull like an online bill payment or shop swipe. This comparison table shows why ATM cash advances cost far more from the very first day.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[580px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Billing Parameter</th>
                      <th className="p-3">Normal Retail / Online Swipe</th>
                      <th className="p-3">Credit Card ATM Cash Advance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Upfront Transaction Fee</td>
                      <td className="p-3 text-emerald-700 font-medium">₹0 on regular merchant spends</td>
                      <td className="p-3 text-rose-700 font-semibold">2.5% to 3.5% or ₹500 min + 18% GST</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Interest-Free Grace Window</td>
                      <td className="p-3">20 to 50 free days if prior bill cleared</td>
                      <td className="p-3 font-semibold text-rose-700">Zero grace days (0 days free)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">When Interest Starts</td>
                      <td className="p-3">Only if Total Due stays unpaid on due date</td>
                      <td className="p-3">Exact day &amp; hour of ATM withdrawal</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Typical Annual APR</td>
                      <td className="p-3">0% if paid in full; 36% to 45% if rolled</td>
                      <td className="p-3 font-mono font-semibold text-slate-900">40.8% to 45%+ p.a. from Day 1</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Reward Points &amp; Perks</td>
                      <td className="p-3">Earns normal reward points or cashback</td>
                      <td className="p-3">Zero reward points on all cards</td>
                    </tr>
                    <tr className="bg-blue-50/50">
                      <td className="p-3 font-bold text-slate-900">Impact on Credit Score</td>
                      <td className="p-3">Normal if usage stays below 30% limit</td>
                      <td className="p-3 font-semibold text-[#1886ff]">Flags cash stress &amp; spikes utilization</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Why Minimum Due & Trailing Interest Ruin Your Bill */}
            <section id="minimum-due-trailing" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Hidden Repayment Traps</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Why Minimum Due &amp; Trailing Interest Ruin Your Bill
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Three hidden billing traps stop ordinary cardholders from clearing an ATM cash advance. First is the <Link href="/credit-card-minimum-due-trap" className="text-[#1886ff] font-semibold hover:underline">Minimum Amount Due (MAD) trap</Link>. Paying 5% MAD only prevents a late payment fee; the other 95% of your cash pull keeps drawing ~42% yearly interest plus 18% GST every day.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, rolling over any cash balance cancels your free grace period on the whole card. Once a balance carries forward, even a ₹500 milk or medicine swipe loses its free days and starts drawing 3.5% monthly interest from the day you swipe.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, bank MITC rules apply your payments in a strict order: 100% of GST and taxes first, EMIs second, fees third, finance interest fourth, and your cash principal last. Also, daily interest runs between your bill print date and the date you pay, leaving surprise trailing interest on next month&apos;s bill unless you clear unbilled interest right inside the bank app.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Cash Advance Trap &amp; RBI OTS Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual guide shows how Day 1 cash fees, zero grace days, and 18% GST inflate small ATM pulls, and how an official RBI One-Time Settlement cuts away unfair penalties.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/credit-card-atm-cash-withdrawal-interest-trap-settlement.jpg"
                    alt="Credit Card ATM Cash Advance Daily Interest Trap and RBI Settlement Rules"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Cash Advance Relief Framework • RBI Guidelines Compliant</span>
                  <a
                    href="/images/infographics/credit-card-atm-cash-withdrawal-interest-trap-settlement.jpg"
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

            {/* SECTION 6: Cash Advance Inflation vs RBI OTS Settlement Math */}
            <section id="ots-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Debt Inflation &amp; Waiver Ledger</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Cash Advance Inflation vs RBI OTS Settlement Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a cardholder cannot clear ATM cash pulls due to job loss, pay cuts, or medical bills, total dues swell fast. Because credit cards have no pledged collateral, banks classify unpaid cards past 90 days as Non-Performing Assets (NPAs).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under <Link href="/rbi-circular-on-loan-settlement-ots" className="text-[#1886ff] font-semibold hover:underline">RBI Circular DOR.STR.REC.20/21.04.048/2023-24</Link> (June 8, 2023), every bank and NBFC maintains a Board-approved compromise settlement policy. In genuine hardship cases, banks waive 100% of accumulated daily interest, late fines, and GST on waived fees, as illustrated below.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample ₹1.50 Lakh Cash Advance &amp; Card Bill OTS Ledger</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">180+ Days Past Due (NPA)</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Statement Component</th>
                        <th className="p-3">Inflated Bank Claim</th>
                        <th className="p-3">RBI Policy OTS Treatment</th>
                        <th className="p-3 text-right">Final OTS Payable</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">ATM Cash Taken &amp; Retail Principal</td>
                        <td className="p-3 font-mono">₹1,50,000</td>
                        <td className="p-3 text-emerald-700 font-semibold">45% to 55% Hardship Haircut</td>
                        <td className="p-3 text-right font-bold text-slate-800 font-mono">₹75,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">2.5% to 3.5% Upfront ATM Cash Fees</td>
                        <td className="p-3 font-mono text-amber-700 font-bold">₹6,500</td>
                        <td className="p-3 text-amber-700 font-semibold">100% Fee Waiver</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">₹0</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Daily Cash Interest (42% to 45% APR)</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">₹74,000</td>
                        <td className="p-3 text-rose-600 font-semibold">100% Suspense Interest Waiver</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">₹0</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Late Payment &amp; Over-Limit Penalties</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">₹14,500</td>
                        <td className="p-3 text-rose-600 font-semibold">100% Penalty Waiver</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">₹0</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">18% GST on Interest &amp; Bank Fees</td>
                        <td className="p-3 font-mono text-rose-700 font-bold">₹17,100</td>
                        <td className="p-3 text-rose-700 font-semibold">Dropped With Fee Reversal</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">₹0</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Full &amp; Final Closure</td>
                        <td className="p-3 font-mono text-rose-700">₹2,62,100</td>
                        <td className="p-3 text-[#1886ff]">~71% Total Debt Relief</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹75,000 (Closed via OTS)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 7: Step-by-Step SOP: Stopping the Cash Advance Spiral */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Step-by-Step SOP: Stopping the Cash Advance Spiral
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Whether your cash withdrawal happened last week or turned into an overdue NPA six months ago, follow these six steps to stop the bleeding and close the debt safely.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Freeze ATM Withdrawals and All Card Swipes
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Turn off ATM cash withdrawals in your card app right away. Stop swiping that card for daily groceries because every new swipe draws Day 1 interest while a cash balance remains unpaid.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Clear Immediately or Convert Early if Solvent
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you have savings, do not wait for the bill date; pay the cash amount plus ₹600 extra right now to kill daily and trailing interest. If short on lump cash, check if a 14% personal loan can clear the 42% card balance.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Shield Your Salary From Section 171 Bank Lien
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you cannot pay at all and your salary enters the same bank that issued your card, shift your salary credit to another bank. This prevents sudden <Link href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act" className="text-[#1886ff] font-semibold hover:underline">Section 171 set-off cuts</Link> from taking your rent and food money.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Audit Statements for Illegal Fee Compounding
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your past six bills and separate pure principal from fees, interest, and GST. Flag any month where the bank charged interest on unpaid GST or late fees in breach of RBI Paragraph 9 rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: File Formal Hardship OTS Request Post-NPA
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once your card crosses 90 days past due, submit job loss, medical, or income-drop proof to the bank nodal settlement desk. Negotiate on your true cash principal rather than the doubled penalty bill.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Verify Official OTS Letter and Collect NOC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[#1886ff] font-semibold hover:underline">Verify the official OTS sanction letter</Link> from the bank domain before paying a single rupee. Pay directly to your 16-digit card account and collect your <Link href="/get-noc-after-loan-settlement" className="text-[#1886ff] font-semibold hover:underline">No Dues Certificate</Link> within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Supreme Court Precedents & Borrower Legal Shields */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Rulings &amp; Borrower Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Supreme Court Precedents &amp; Borrower Legal Shields
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Recovery callers often scare cash-advance defaulters with false claims of police FIRs or criminal cheating cases. Knowing exact Supreme Court law separates real rules from empty threats.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>SC: HSBC v. Awaz &amp; Ors. (2024 INSC 1044)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    On December 20, 2024, the Supreme Court set aside the 2008 NCDRC 30% rate cap. Under Section 21A of the Banking Regulation Act, courts cannot cut disclosed 42% card rates, making RBI OTS vital.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>SC: ICICI Bank Ltd. v. Prakash Kaur (2007)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court barred banks from hiring abusive musclemen or intimidating borrowers. All credit card recovery must strictly follow lawful civil steps and RBI dignity rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Pure Civil Debt: No Arrest or BNS Cheating</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pulling cash inside your bank-approved ATM cash limit is a valid contract, not cheating under Section 318 of BNS 2023. <Link href="/can-i-go-to-jail-for-credit-card-debt" className="text-[#1886ff] font-semibold hover:underline">Police cannot arrest you</Link> for an unpaid credit card bill.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>SC: Syndicate Bank v. Vijay Kumar (1992)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A banker&apos;s general lien under Section 171 of the Contract Act applies only to funds held in that same bank. No bank can freeze your account in another bank without a court decree.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Redressal Channels</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank levies undisclosed ATM fees, compounds interest on unpaid GST, or allows recovery agents to call outside 8:00 AM to 7:00 PM, escalate through these three official tiers.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Window</th>
                      <th className="p-3">Relief &amp; Enforcement Power</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Card Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Provides itemized cash fee ledger, reverses billing glitches, and logs harassment tickets.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">15 to 30 Days</td>
                      <td className="p-3">Refunds compounded tax interest, halts rogue callers, and reviews formal hardship OTS offers.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI CMS Portal (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Awards compensation for RBI rule breaches, <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[#1886ff] font-semibold hover:underline">₹100/day CIBIL delay fines</Link>, and missing NOCs.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Delinquency Timeline: Day 1 Withdrawal to OTS NOC */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Delinquency &amp; Resolution Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Delinquency Timeline: Day 1 Withdrawal to OTS NOC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking how a credit card cash withdrawal moves from Day 1 interest to final NPA settlement helps you take the right legal step at every stage.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Stage Window</th>
                      <th className="p-3">Account Status</th>
                      <th className="p-3">Bank Billing &amp; Recovery Action</th>
                      <th className="p-3">Recommended Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">ATM Withdrawal Day</td>
                      <td className="p-3 font-mono text-[11px]">Active (Zero Grace)</td>
                      <td className="p-3">Charges ₹500+ cash fee + 18% GST; starts ~0.12% daily interest at once.</td>
                      <td className="p-3">Repay cash early inside app if possible; stop fresh card swipes.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Due Date + 3 Days</td>
                      <td className="p-3 font-mono text-[11px]">RBI 3-Day Window</td>
                      <td className="p-3">No late fee or CIBIL default mark allowed during first 3 grace days.</td>
                      <td className="p-3">Clear full Total Amount Due (not Minimum Due) if funds exist.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 4 to Day 89</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0 / SMA-1 / SMA-2</td>
                      <td className="p-3">Late fees, 42% APR, and reminder calls rise; card limit gets blocked.</td>
                      <td className="p-3">Stop paying 5% Minimum Due if insolvent; protect salary in separate bank.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 90+ Past Due</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Classification</td>
                      <td className="p-3">Account turns NPA; eligible for Board-approved compromise OTS review.</td>
                      <td className="p-3 font-bold text-amber-800">File written hardship proofs and propose lump-sum principal settlement.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 120 to 180+</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">OTS Closure &amp; NOC</td>
                      <td className="p-3">Issues formal OTS letter, waives interest/fees, and updates CIBIL in 15 days.</td>
                      <td className="p-3 font-bold text-slate-900">Verify OTS letter, pay card account directly, and save final NOC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Common Mistakes & Precautions in Cash Debt Relief */}
            <section id="common-mistakes" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Borrower Safeguards</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                11. Common Mistakes &amp; Precautions in Cash Debt Relief
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Avoid these four costly errors that trap borrowers deeper into high-interest debt or expose them to settlement scams.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Taking Cash From Card B to Pay Card A
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Withdrawing ATM cash or rotating wallet loads on a second card to pay Minimum Due on your first card adds fresh 3% fees and 42% APR, doubling your total debt in months.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Paying Token Cash to Field Recovery Agents
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Small ₹5,000 &quot;hold&quot; payments get swallowed by GST and billed interest without cutting a rupee of principal. Worse, token payments reset the 3-year civil suit clock under Section 19 of the Limitation Act.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#1886ff]" />
                    Trusting Verbal or WhatsApp OTS Promises
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Third-party telecallers cannot grant binding waivers. Only pay after receiving a signed OTS sanction letter from the bank&apos;s official email domain showing your exact 16-digit card number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Leaving Active Auto-Debit Mandates Open
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your card has a linked NACH or auto-debit on an empty savings account, repeated hits trigger bounce fines and Section 25 Payment and Settlement Systems Act notices. Manage mandates cleanly early on.
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
                Frequently Asked Questions: Credit Card Cash Advances
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers on ATM cash withdrawal fees, Day 1 finance charges, trailing interest, Supreme Court rulings, and RBI One-Time Settlements in India.
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
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Statutory References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Credit Card Master Direction:</strong> RBI/2022-23/92, DoR.AUT.REC.No.27/24.01.041/2022-23 (April 21, 2022), amended via DOR.RAUG.AUT.REC.No.81/24.01.041/2023-24 (March 7, 2024) on MITC Disclosure, Adjusted Balance Interest, and Non-Capitalization of Taxes/Charges.
                </li>
                <li>
                  <strong>RBI Compromise Settlement Framework:</strong> RBI/2023-24/40, DOR.STR.REC.20/21.04.048/2023-24 (June 8, 2023), Framework for Compromise Settlements and Technical Write-offs.
                </li>
                <li>
                  <strong>Supreme Court Precedents:</strong> <em>Hongkong and Shanghai Banking Corp. Ltd. v. Awaz &amp; Ors.</em>, 2024 INSC 1044 (Dec 20, 2024); <em>ICICI Bank Ltd. v. Prakash Kaur</em>, (2007) 2 SCC 711; and <em>Syndicate Bank v. Vijay Kumar</em>, (1992) 2 SCC 330.
                </li>
                <li>
                  <strong>Banking Regulation Act, 1949 &amp; Indian Contract Act, 1872:</strong> Section 21A &amp; Section 35A (RBI Interest Rate Domain) and Section 171 (Banker&apos;s Right of General Lien).
                </li>
                <li>
                  <strong>Credit Information &amp; Ombudsman Mandates:</strong> Reserve Bank - Integrated Ombudsman Scheme, 2021; RBI/2023-24/72 (₹100/Day Bureau Dispute Delay Penalty); and DoR.FIN.REC.32/20.16.056/2024-25 (15-Day Fortnightly CIC Reporting).
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
                  <a href="https://www.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Portal</span>
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
                  <Link href="/credit-card-minimum-due-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Minimum Due Debt Trap
                  </Link>
                  <Link href="/credit-card-settlement-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Card Settlement Process
                  </Link>
                  <Link href="/credit-card-settlement-discount" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    50% to 75% Card Waiver Guide
                  </Link>
                  <Link href="/jumbo-insta-loan-on-credit-card-default-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Jumbo &amp; Insta Card Loans
                  </Link>
                  <Link href="/rupay-credit-card-upi-debt-default-settlement-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RuPay UPI Card Default
                  </Link>
                  <Link href="/settle-multiple-credit-cards" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Settle Multiple Credit Cards
                  </Link>
                  <Link href="/stop-credit-card-recovery-calls" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Card Recovery Calls
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Letter
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
                Specialist in RBI credit card billing compliance, cash advance dispute audits, anti-harassment defense, and Board-approved One-Time Settlements across Indian banks.
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
                  CREDIT CARD OTS RELIEF DESK
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Drowning in Daily ATM Cash Interest?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking advocates stop illegal recovery calls, audit unlawful fee compounding, and negotiate formal RBI One-Time Settlements to slash inflated card dues.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Card Debt Audit
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
                  <span><strong>100% Interest &amp; Fee Audit:</strong> Spot illegal tax compounding fast.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-Harassment Shield:</strong> Stop abusive calls under RBI rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified Bank OTS Letters:</strong> Direct PNO &amp; nodal desk closure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Guaranteed NOC &amp; CIBIL Sync:</strong> 15-day bureau update tracking.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/credit-card-minimum-due-trap"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Escape Minimum Due Trap
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Why 5% payments never cut debt &rarr;</span>
                </Link>

                <Link
                  href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 171 Bank Lien Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Protect salary accounts legally &rarr;</span>
                </Link>

                <Link
                  href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Verify Bank OTS Sanction Letter
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Avoid fake agency letters &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
