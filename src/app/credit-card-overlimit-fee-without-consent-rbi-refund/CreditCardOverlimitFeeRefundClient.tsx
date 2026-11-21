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

export default function CreditCardOverlimitFeeRefundClient() {
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
    { id: 'quick-crux', label: 'Quick Answer & RBI Rules' },
    { id: 'rbi-consent-framework', label: '1. RBI Explicit Consent Rule' },
    { id: 'interest-fees-exclusion', label: '2. Interest & Fee Exclusion' },
    { id: 'toggle-controls-march-2024', label: '3. March 2024 App Toggle Law' },
    { id: 'overlimit-fee-math', label: '4. Bank Fee Math & MAD Trap' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Chart' },
    { id: 'valid-vs-invalid-consent', label: '6. Valid vs Illegal Charges' },
    { id: 'judicial-precedents', label: '7. Court & Ombudsman Rulings' },
    { id: 'step-by-step-refund', label: '8. 6-Step Refund Procedure' },
    { id: 'escalation-matrix', label: '9. 3-Tier Escalation Matrix' },
    { id: 'refund-ots-timeline', label: '10. Refund & CIBIL Timelines' },
    { id: 'common-mistakes-ots', label: '11. Mistakes & OTS Debt Exit' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'RBI & Statutory Citations' }
  ];

  const faqs = [
    {
      q: 'Can a bank charge a credit card overlimit fee without my consent?',
      a: 'No. Under the RBI Credit Card Master Direction, no bank can let your card cross its set limit without prior clear consent. Without your consent, the bank cannot charge any overlimit fee.'
    },
    {
      q: 'Can interest, late fees, or GST trigger an overlimit charge on my card?',
      a: 'No. RBI rules say monthly interest, late fees, and taxes cannot count toward an overlimit breach. Banks cannot charge an overlimit fine if their own fees pushed your bill past the limit.'
    },
    {
      q: 'Does signing a general credit card application count as consent for overlimit fees?',
      a: 'No. Fine print in a card form or a pre-ticked box is not valid consent. You must turn on the feature yourself via an OTP, bank app switch, net banking, or recorded call.'
    },
    {
      q: 'How much overlimit fee do Indian banks usually charge?',
      a: 'Big banks like HDFC, SBI Card, ICICI, and Axis charge 2.5% of the extra sum, with a minimum fee of ₹500 to ₹600 plus 18% GST. Without valid consent, the bank must refund it all.'
    },
    {
      q: 'How do I turn off the overlimit feature on my credit card?',
      a: 'Under the March 2024 RBI update, every card issuer must give you an ON or OFF switch in its mobile app, net banking site, or 24x7 IVR call menu. You can turn it off anytime.'
    },
    {
      q: 'Will the bank also refund 18% GST and interest charged on an illegal overlimit fee?',
      a: 'Yes. When a bank reverses an unfair overlimit fee, it must also refund the 18% GST billed on that fee. It must also wipe out any extra interest added on top of that charge.'
    },
    {
      q: 'How does an unauthorized overlimit charge hurt my CIBIL score?',
      a: 'Crossing 100% of your card limit spikes your credit use ratio and raises your Minimum Amount Due. If a wrong fee caused a late mark, the bank must fix your CIBIL report in 30 days or pay ₹100 per day.'
    },
    {
      q: 'What if the bank refuses to refund my credit card overlimit charges?',
      a: 'Write to the Bank Grievance Officer and Principal Nodal Officer first. If they say no or do not reply in 30 days, file a free case with the RBI Ombudsman at cms.rbi.org.in.'
    },
    {
      q: 'Can a bank charge an overlimit fee multiple times in the same billing month?',
      a: 'Even when you opt in, bank MITC rules allow an overlimit fee only once per billing month. If you never opted in, the bank cannot charge this fee even once.'
    },
    {
      q: 'Can I settle my credit card if stacked overlimit fees pushed me into default?',
      a: 'Yes. Under RBI Circular DOR.STR.REC.20/21.04.048/2023-24, CredSettle checks your past bills to cut out unfair fees. Our team then arranges a formal One-Time Settlement (OTS) to close your debt.'
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
            <span>RBI Credit Card Master Direction &amp; Refund Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Claim Refund for Unauthorized Credit Card Overlimit Fees
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Reserve Bank of India rules ban banks from letting your card cross its credit limit or charging overlimit fees without your clear prior consent. Learn how to claim a 100% fee and GST refund, fix your CIBIL score, and exit unfair card debt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Dispute Unfair Card Charges</span>
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
                  Protected under RBI Master Direction DoR.AUT.REC.No.27/24.01.041/2022-23 &amp; 2024 Updates.
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
                <span>QUICK ANSWER: RBI CREDIT CARD OVERLIMIT REFUND RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Consent Means Zero Fee:</strong> Under RBI Master Directions, banks cannot let your card cross its approved limit or charge an overlimit fee unless you gave clear prior consent.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Interest &amp; Late Fees Excluded:</strong> Banks cannot count monthly finance charges, late fees, or GST to push your balance past your limit and slap an overlimit fine.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory ON/OFF Toggle:</strong> Since March 2024, every card issuer must give you a live toggle inside its mobile app and net banking to turn overlimit use off anytime.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">100% Fee, GST &amp; Interest Reversal:</strong> If charged without valid opt-in proof, the bank must refund the full overlimit fee, 18% GST, and any interest added on top of it.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Ombudsman &amp; OTS Protection:</strong> If the bank refuses a refund within 30 days, escalate to the RBI Ombudsman for free, or settle maxed-out NPA dues via official OTS.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: RBI Master Direction: Prior Explicit Consent Mandate */}
            <section id="rbi-consent-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Regulatory Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Master Direction: Prior Explicit Consent Mandate
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For years, credit card users in India faced an unfair bill shock. You would swipe your card near its spending cap, expecting any extra amount to fail. Instead, the bank let the swipe go through and added a ₹600 fine to your next bill.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To stop this trap, the Reserve Bank of India issued the Credit Card and Debit Card Directions, 2022 (Circular DoR.AUT.REC.No.27/24.01.041/2022-23). These strict rules cover every bank and card issuer in India, such as SBI Card, HDFC, ICICI, Axis, and Kotak.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Paragraph 6(b)(v) of the RBI Master Direction, a bank cannot let your card cross its set limit without your prior clear consent. Simply put, overlimit use must stay OFF by default when you get a new card.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you never opted in, the bank must decline any swipe that goes past your limit. If the bank still lets the charge pass without your clear nod, it cannot bill you one rupee as an overlimit fee.
              </p>
            </section>

            {/* SECTION 2: Interest & Fee Exclusion: Illegal Overlimit Triggers */}
            <section id="interest-fees-exclusion" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Bank Fee Spiral Protection</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Interest &amp; Fee Exclusion: Illegal Overlimit Triggers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The worst abuse happens when you stop swiping your card, yet overlimit fines keep showing up each month. This hits people stuck in the <Link href="/credit-card-minimum-due-trap" className="text-[#1886ff] font-semibold hover:underline">credit card minimum due trap</Link> or facing a cash crunch.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Take a real example. Say your card limit is ₹1,00,000 and you spent ₹97,000 on care bills. You stayed ₹3,000 under your limit. On the due date, you miss full payment, so the bank adds ₹3,600 in interest and a ₹1,100 late fee.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Your total bill now sits at ₹1,01,700. Many banks used to call that an overlimit breach and slap a ₹600 fine plus 18% GST each month. RBI Master Direction FAQs now ban this trick across India.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                RBI rules say interest, late fees, GST, and bank charges must never count toward an overlimit breach. Only your own approved spending past the limit can bring an overlimit fee. Every fine caused by bank interest or late fees must be paid back in full.
              </p>
            </section>

            {/* SECTION 3: March 2024 RBI Rules: App & Net-Banking Toggle Rights */}
            <section id="toggle-controls-march-2024" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CreditCard className="w-4 h-4 text-[#1886ff]" />
                <span>2024 RBI Digital Control Update</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. March 2024 RBI Rules: App &amp; Net-Banking Toggle Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On March 7, 2024, the RBI made card rules even stronger via Circular DoR.RAUG.AUT.REC.No.81/24.01.041/2023-24. Earlier, sales callers pushed users to say yes once on a phone call. Banks then gave no easy way to turn the feature back off.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the March 2024 rule, every card issuer must give you a live ON or OFF switch inside its mobile app and net banking site. It sits right next to the switches for online or foreign swipes.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You can turn overlimit use off in seconds without calling care desks or visiting a branch. Once that switch is OFF, any fee billed for crossing your limit breaks RBI law.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The 2024 update also shields part-payers. Banks can charge interest only on the unpaid balance left after taking out your part-payments, refunds, and fee reversals.
              </p>
            </section>

            {/* SECTION 4: Bank Overlimit Fee Math, 18% GST & Minimum Due Trap */}
            <section id="overlimit-fee-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Fee Schedules &amp; Hidden Bill Impact</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Bank Overlimit Fee Math, 18% GST &amp; Minimum Due Trap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                An unauthorized overlimit fee hurts your wallet in three ways at once. First, banks charge 2.5% of the overlimit sum with a minimum floor of ₹500 to ₹600. Even crossing your limit by ₹50 triggers the full ₹500 or ₹600 fine plus 18% GST.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, banks add the entire overlimit sum plus the fee straight into your <Link href="/what-is-minimum-amount-due-for-credit-card" className="text-[#1886ff] font-semibold hover:underline">Minimum Amount Due (MAD)</Link>. If you cannot pay that sudden jump in MAD, the bank slaps a late payment fine and reports Days Past Due (DPD) to CIBIL. Check typical bank charges below.
              </p>

              {/* Representative Fee Ledger Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Major Bank Overlimit Fee &amp; Refund Ledger</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Plus 18% GST on Fee</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[580px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Card Issuer</th>
                        <th className="p-3">Standard MITC Fee</th>
                        <th className="p-3">Min Bill Hit (With GST)</th>
                        <th className="p-3 text-right">Fee Owed Without Explicit Consent</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-bold text-slate-900">SBI Card</td>
                        <td className="p-3">2.5% of overlimit (Min ₹600)</td>
                        <td className="p-3 font-mono text-rose-700 font-semibold">₹708 per cycle</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹0 (100% Refundable)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">HDFC Bank</td>
                        <td className="p-3">2.5% of overlimit (Min ₹550)</td>
                        <td className="p-3 font-mono text-rose-700 font-semibold">₹649 per cycle</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹0 (100% Refundable)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">ICICI Bank</td>
                        <td className="p-3">2.5% of overlimit (Min ₹500)</td>
                        <td className="p-3 font-mono text-rose-700 font-semibold">₹590 per cycle</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹0 (100% Refundable)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">Axis &amp; Kotak Bank</td>
                        <td className="p-3">2.5% of overlimit (Min ₹500)</td>
                        <td className="p-3 font-mono text-rose-700 font-semibold">₹590 per cycle</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹0 (100% Refundable)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Interest / Late Fee Breach</td>
                        <td className="p-3">Balance crossed limit via bank fees</td>
                        <td className="p-3 text-rose-700">Illegal across all banks</td>
                        <td className="p-3 text-right text-[#1886ff]">Full Fee + GST + Interest Reversal</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Overlimit Consent &amp; Refund Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual guide summarizes how the RBI explicit consent shield works. Use it to verify whether an overlimit charge on your monthly statement is legal or eligible for a full reversal.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/credit-card-overlimit-fee-without-consent-rbi-refund.jpg"
                    alt="RBI Rules for Credit Card Overlimit Fee Refund Without Explicit Consent"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Cardholder Protection Blueprint • RBI Master Direction Compliant</span>
                  <a
                    href="/images/infographics/credit-card-overlimit-fee-without-consent-rbi-refund.jpg"
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

            {/* SECTION 6: Valid Opt-In vs Illegal Overlimit Charges Compared */}
            <section id="valid-vs-invalid-consent" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Audit Your Card Statement</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Valid Opt-In vs Illegal Overlimit Charges Compared
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Customer care teams often claim that you agreed to overlimit charges when you first applied for the card. That excuse fails under RBI audits. Check this table to see if your bank has valid proof of consent.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[580px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Billing Scenario</th>
                      <th className="p-3">Does It Count as RBI Consent?</th>
                      <th className="p-3">Your Legal Refund Right</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Fine print in initial card form</td>
                      <td className="p-3 text-rose-700 font-semibold">No (Bundled boilerplate is invalid)</td>
                      <td className="p-3">Demand 100% refund of fee and 18% GST</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Pre-ticked checkbox on portal</td>
                      <td className="p-3 text-rose-700 font-semibold">No (Dark pattern, not active opt-in)</td>
                      <td className="p-3">Demand full reversal and consent audit log</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Interest or late fee crossed limit</td>
                      <td className="p-3 text-rose-700 font-semibold">No (Banned even if toggle was ON)</td>
                      <td className="p-3 font-semibold text-slate-900">Mandatory refund of every monthly fine</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Bank slashed limit below balance</td>
                      <td className="p-3 text-rose-700 font-semibold">No (User did not swipe over limit)</td>
                      <td className="p-3">Zero overlimit fee allowed after limit cut</td>
                    </tr>
                    <tr className="bg-blue-50/50">
                      <td className="p-3 font-bold text-slate-900">User turned toggle ON via OTP/App</td>
                      <td className="p-3 text-emerald-700 font-semibold">Yes (Valid for retail swipes only)</td>
                      <td className="p-3">Valid once per cycle; switch OFF in app now</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 7: Supreme Court & Consumer Rulings on Card Charges */}
            <section id="judicial-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Statutory Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Supreme Court &amp; Consumer Rulings on Card Charges
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts and regulatory forums draw a sharp line between disclosed interest rates and unauthorized penalty fees. When a bank breaks an explicit RBI rule, strong legal remedies back the cardholder.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>SC: HSBC v. Awaz Foundation (Dec 2024)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court held that RBI has exclusive power under the Banking Regulation Act, 1949 to regulate credit cards. While courts do not cap MITC interest rates, every RBI Master Direction rule on consent is binding law under Section 35A.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Charging unconsented card fees is a Deficiency in Service under Section 2(11) and an Unfair Trade Practice under Section 2(47). District Commissions order full refunds plus harassment damages via E-Jagriti.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>RBI ₹100/Day CIBIL Compensation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[#1886ff] font-semibold hover:underline">RBI Circular DoR.FIN.REC.49</Link>, if a wrong overlimit fee harmed your CIBIL report and the bank fails to fix it within 30 days of complaint, you earn ₹100 per day.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>RBI Integrated Ombudsman Scheme, 2021</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The RBI Ombudsman orders banks and NBFC card issuers to reverse unauthorized overlimit fees, GST, and compounding interest for free, and can award up to ₹1 Lakh for mental agony.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Step-by-Step SOP: Claim Full Overlimit Fee Refund */}
            <section id="step-by-step-refund" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Practical Action Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Step-by-Step SOP: Claim Full Overlimit Fee Refund
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do not rely on a phone call alone. Care agents often reverse just one month while keeping older fines. Follow these six steps to get every rupee back.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Check and Screenshot Your Card App Toggle
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Open your card app or net banking page and save a screenshot of the Overlimit switch. If it is ON without your nod, turn it OFF right now and save the alert.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Audit Past Statements for Fee &amp; Interest Triggers
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your past 12 to 24 monthly bills. List each Overlimit Fee and its 18% GST. Mark every month where bank interest or late fees pushed your balance past the limit.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Demand Digital Consent Proof From Bank GRO
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email the Bank Grievance Officer citing RBI Master Direction DoR.AUT.REC.No.27/24.01.041/2022-23. Ask the bank to show dated OTP or call proof, or refund all fees, GST, and extra interest.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Pay Undisputed Dues to Prevent Fresh Interest
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If your card is still active, pay your real spending amount while you dispute the wrong fee in writing. Check your interest math with our <Link href="/tools/credit-card-interest-calculator" className="text-[#1886ff] font-semibold hover:underline">credit card interest calculator</Link>.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Escalate to Principal Nodal Officer &amp; RBI CMS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank says no or fails to reply within 30 days, file a free case on cms.rbi.org.in. Upload your card bills, email trail, and app screenshots.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Verify CIBIL Rectification or Close via OTS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Make sure the bank clears any late mark caused by the wrong fee across all four bureaus. If your debt is too big to pay, start a legal <Link href="/credit-card-settlement-process" className="text-[#1886ff] font-semibold hover:underline">credit card settlement</Link> after cutting out unfair fines.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Official Redressal Hierarchy</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this exact institutional chain so your complaint is never rejected on technical grounds for skipping internal bank grievance desks.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Response Window</th>
                      <th className="p-3">Relief &amp; Enforcement Power</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Card Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Logs service ticket, checks opt-in trail, and reverses recent cycle fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">Up to Day 30 Total</td>
                      <td className="p-3">Audits historical ledger, refunds multi-month fees + 18% GST, fixes CIBIL.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI CMS</td>
                      <td className="p-3">RBI Integrated Ombudsman (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">After Day 30 or Rejection</td>
                      <td className="p-3">Orders binding fee, GST, and interest refund plus up to ₹1 Lakh harassment award.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Deadlines & Timelines: Fee Reversal to CIBIL Fix */}
            <section id="refund-ots-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Deadlines &amp; Clocks</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Deadlines &amp; Timelines: Fee Reversal to CIBIL Fix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every RBI remedy runs on strict statutory clocks. Track these dates carefully from the day you spot an unauthorized overlimit charge on your bill.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Window</th>
                      <th className="p-3">Regulatory Stage</th>
                      <th className="p-3">Bank Legal Duty</th>
                      <th className="p-3">Cardholder Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Within 30 Days of Bill</td>
                      <td className="p-3 font-mono text-[11px]">Billing Dispute</td>
                      <td className="p-3">Must explain charge with documentary proof within 30 days under Master Direction.</td>
                      <td className="p-3">Turn off app toggle and email written dispute to bank GRO.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 15 (Fortnightly)</td>
                      <td className="p-3 font-mono text-[11px]">Bureau Sync</td>
                      <td className="p-3">Must push updated card balance and status to credit bureaus every 15 days.</td>
                      <td className="p-3">Monitor CIBIL utilization drop once overlimit fees are credited back.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 31 Post-Complaint</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Statutory Breach</td>
                      <td className="p-3">Unresolved CIBIL dispute triggers ₹100/day fine; Ombudsman window opens.</td>
                      <td className="p-3 font-bold text-amber-800">Lodge online case on cms.rbi.org.in within 1 year of bank reply/30-day lapse.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 90+ Overdue</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">NPA &amp; OTS Stage</td>
                      <td className="p-3">Classifies unpaid card as NPA; stops unapplied interest accrual in suspense ledger.</td>
                      <td className="p-3 font-bold text-slate-900">Strip out illegal fees and negotiate lump-sum OTS with NOC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Common Mistakes & OTS Relief for Overlimit Debt */}
            <section id="common-mistakes-ots" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Precautions &amp; Debt Resolution</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                11. Common Mistakes &amp; OTS Relief for Overlimit Debt
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Watch out for subtle bank app prompts and settlement traps when clearing an over-utilized credit card account.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Clicking Pop-Up OTPs During Checkout
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Some bank apps flash a quick prompt asking to &quot;Enable Overlimit to Complete Payment.&quot; Clicking that OTP turns the switch ON permanently for future cycles until you manually turn it off again.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    Accepting Partial Fee Waivers Without GST
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Phone agents often reverse ₹600 as a courtesy while keeping the ₹108 GST and 42% annual interest charged on that fee. Always insist on a complete reversal of fee, tax, and cascading finance charges.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Stopping Recovery Harassment on Maxed Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Overlimit accounts get flagged to aggressive call desks first. Remember that <Link href="/stop-credit-card-recovery-calls" className="text-[#1886ff] font-semibold hover:underline">RBI recovery rules</Link> strictly bar calls before 8 AM, after 7 PM, or to your family and workplace.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    Using Fee Audits to Maximize OTS Waivers
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a ₹1 Lakh card balloons to ₹2.4 Lakh from 42% APR, late fines, and illegal overlimit fees, CredSettle challenges the unlawful charges first and negotiates a <Link href="/credit-card-settlement-discount" className="text-[#1886ff] font-semibold hover:underline">50% to 75% OTS waiver</Link> under RBI rules.
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
                Frequently Asked Questions: Credit Card Overlimit Refunds
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers on RBI explicit consent rules, interest-triggered overlimit breaches, GST refunds, CIBIL repairs, and credit card settlement options.
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
                Official RBI Circulars &amp; Statutory Legal References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Master Direction (Credit Card and Debit Card - Issuance and Conduct Directions, 2022):</strong> RBI/2022-23/92, DoR.AUT.REC.No.27/24.01.041/2022-23, Paragraph 6(b)(v) on Prior Explicit Consent for Credit Limit Breach.
                </li>
                <li>
                  <strong>RBI 2024 Amendment &amp; Official FAQs (March 7, 2024):</strong> RBI/2023-24/132, DoR.RAUG.AUT.REC.No.81/24.01.041/2023-24 on Overlimit Digital Toggle Controls and Exclusion of Interest/Charges from Overlimit Calculation.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Clause 14 &amp; 15 on Deficiency in Service Reversals and Compensation Awards.
                </li>
                <li>
                  <strong>RBI Credit Information Compensation Circular:</strong> RBI/2023-24/72, DoR.FIN.REC.49/20.16.003/2023-24 (₹100 per calendar day compensation for delayed CIBIL rectification beyond 30 days).
                </li>
                <li>
                  <strong>RBI Compromise Settlement Framework:</strong> RBI/2023-24/40, DOR.STR.REC.20/21.04.048/2023-24 on Board-Approved One-Time Settlement (OTS) of Stressed Credit Card Accounts.
                </li>
                <li>
                  <strong>Supreme Court of India Precedent:</strong> The Hongkong and Shanghai Banking Corporation Ltd. (HSBC) v. Awaz Foundation &amp; Ors., Civil Appeal No. 5273 of 2008 (Decided December 20, 2024) &amp; Consumer Protection Act, 2019 (Sections 2(11) &amp; 2(47)).
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
                  <a href="https://e-jagriti.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>E-Jagriti Consumer Commission Portal</span>
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
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Dispute Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/credit-card-minimum-due-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Minimum Due Trap
                  </Link>
                  <Link href="/what-is-minimum-amount-due-for-credit-card" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Minimum Amount Due Explained
                  </Link>
                  <Link href="/credit-card-settlement-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Process
                  </Link>
                  <Link href="/credit-card-settlement-calculator" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Card Settlement Calculator
                  </Link>
                  <Link href="/jumbo-insta-loan-on-credit-card-default-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Jumbo &amp; Insta Card Loan Rules
                  </Link>
                  <Link href="/rupay-credit-card-upi-debt-default-settlement-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RuPay UPI Credit Card Default
                  </Link>
                  <Link href="/add-on-supplementary-credit-card-default-liability" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Add-On Card Default Liability
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹100/Day CIBIL Penalty
                  </Link>
                  <Link href="/stop-credit-card-recovery-calls" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Card Recovery Calls
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Debt Relief Service
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
                Specialist in RBI credit card conduct regulations, unfair banking fee reversals, Ombudsman representation, and structured credit card debt settlements across India.
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
                  RBI CARD DISPUTE &amp; OTS DESK
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Trapped in Overlimit Fees &amp; Card Debt?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking legal team audits unlawful overlimit fees, files Principal Nodal &amp; RBI Ombudsman claims, stops recovery harassment, and settles maxed-out card dues.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Card Audit Now
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
                  <span><strong>Statement Fee Audit:</strong> Spots illegal overlimit, late, and GST charges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Consent Proof Challenge:</strong> Compels banks to show valid opt-in logs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Score Protection:</strong> Enforces 15-day bureau updates and DPD fixes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>50% to 75% OTS Relief:</strong> Formal settlement for maxed-out NPA cards.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Card Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/credit-card-minimum-due-trap"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Escape Credit Card Minimum Due Trap
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop 42% revolving interest &rarr;</span>
                </Link>

                <Link
                  href="/jumbo-insta-loan-on-credit-card-default-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Jumbo &amp; Insta Card Loan Default Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Dual account OTS strategy &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-settlement-process"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Settlement Process India
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Step-by-step legal OTS guide &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
