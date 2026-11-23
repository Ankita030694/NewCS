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
  TrendingUp,
  BookOpen,
  DollarSign,
  Check,
  Lock,
  Phone,
  Bookmark,
  ArrowRight,
  Clock,
  Gavel,
  Landmark,
  CreditCard
} from 'lucide-react';

export default function CreditCardMitcFeeChangeClient() {
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
    { id: 'rbi-notice-rule', label: '1. RBI 30-Day Notice Rule for MITC' },
    { id: 'prospective-vs-retro', label: '2. Prospective vs Retroactive Fees' },
    { id: 'common-mitc-fees', label: '3. Common MITC Fee Changes' },
    { id: 'right-to-surrender', label: '4. Right to Surrender Card Fee-Free' },
    { id: 'dispute-steps', label: '5. Step-by-Step Fee Dispute SOP' },
    { id: 'consumer-remedies', label: '6. Consumer Court & Legal Remedies' },
    { id: 'escalation-matrix', label: '7. 3-Tier Escalation & Ombudsman' },
    { id: 'cibil-protection', label: '8. CIBIL & Disputed Fee Protection' },
    { id: 'mitc-vs-apr', label: '9. MITC Fee Change vs APR Hike' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank increase credit card fees without a 30-day prior notice?',
      a: 'No. Under Paragraph 9 of the RBI Master Direction on Credit Cards (2022), card issuers can change charges only with prospective effect after giving at least one month (30 days) prior notice to the cardholder.'
    },
    {
      q: 'What is MITC on a credit card?',
      a: 'MITC stands for Most Important Terms and Conditions. It is the standard summary document listing all joining fees, annual fees, forex markups, late payment slabs, and cash advance charges governing your credit card.'
    },
    {
      q: 'Can I close my credit card without penalty if the bank increases MITC fees?',
      a: 'Yes. Under RBI directions, if a bank changes charges to your disadvantage, you have the right to surrender your credit card without paying any extra closure fee, provided you clear your existing dues.'
    },
    {
      q: 'Are banks allowed to apply new credit card fees retroactively?',
      a: 'No. RBI rules state that changes in charges must have prospective effect only. A bank cannot charge a newly introduced fee on transactions made before the 30-day notice period ends.'
    },
    {
      q: 'What if the bank only updated its website PDF without emailing or texting me?',
      a: 'Silent website updates do not count as valid prior notice. Banks must proactively notify cardholders through registered communication channels such as email or SMS at least one month before the new fee takes effect.'
    },
    {
      q: 'What happens if I refuse to pay an unauthorized MITC fee?',
      a: 'You should pay your undisputed principal balance and raise a written dispute immediately. If the bank adds late fees or reports you as overdue to CIBIL over an un-notified charge, you can seek reversal and compensation from the RBI Ombudsman.'
    },
    {
      q: 'How long does the bank have to close my card when I opt out of a fee hike?',
      a: 'Once you request closure and clear your pending dues, the card issuer must close the credit card within seven working days. Delays beyond seven working days attract a Rs 500 per day penalty payable to you.'
    },
    {
      q: 'Can I file a Consumer Court case for unilateral MITC fee changes?',
      a: 'Yes. Charging fees without prior notice amounts to deficiency in service under Section 2(11) and unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. You can claim a refund, mental agony damages, and legal costs.'
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
            <span>RBI Master Direction 2022 &amp; Cardholder Fee Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Challenge Unilateral Credit Card Fee Changes Under MITC
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Banks cannot raise credit card fees or add new surcharges without giving at least 30 days prior notice. Learn how to dispute un-notified MITC charges, surrender your card fee-free, and protect your CIBIL score.
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
                  <span>RBI Cardholder Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Master Direction 2022 and the Consumer Protection Act, 2019.
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
                <span>EXECUTIVE BRIEF: RBI MITC FEE CHANGE RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory 30-Day Prior Notice:</strong> Under Paragraph 9 of the RBI Credit Card Master Direction, issuers must give at least one month notice before raising any fee or adding a new charge.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Prospective Effect Only:</strong> Banks cannot apply new MITC charges to past transactions or ongoing billing cycles. Every fee change must apply only to future dates.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Fee-Free Card Surrender:</strong> If a revised fee is against your interest, you can close the card without any closure penalty after clearing existing dues.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">7-Working-Day Closure Rule:</strong> Once you opt out and clear dues, the bank must close the card within 7 working days or pay ₹500 per day for further delay.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Ombudsman &amp; Consumer Relief:</strong> Un-notified charges count as deficiency in service. You can recover full refunds, GST reversals, and CIBIL corrections.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1 */}
            <section id="rbi-notice-rule" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Mandate &amp; Central Bank Directions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI 30-Day Notice Rule for Credit Card MITC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every credit card in India is governed by a document called the Most Important Terms and Conditions (MITC). Your bank sends this summary in your welcome kit and hosts it on its website. It lists every fee, surcharge, and billing rule you agreed to follow.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many cardholders suddenly notice new charges on their monthly statement. Common surprises include higher annual fees, rent payment surcharges, or utility fee caps. Banks sometimes introduce these charges silently or update a PDF online without alerting you.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India prohibits this practice. Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct (2022), Paragraph 9 sets a clear rule. Card issuers can change charges only after giving prior notice of at least one month.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This notice must reach you through your registered email, SMS, or postal address. A silent edit on the bank website does not satisfy the RBI requirement. If the bank failed to send direct prior notice, the revised fee is unlawful.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="prospective-vs-retro" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Effective Date &amp; Billing Cycle Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Prospective Effect vs Retroactive Bank Fees
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Paragraph 9 of the RBI Master Direction states that changes in charges must have prospective effect only. Prospective effect means a new fee can apply only after the 30-day notice period finishes.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For example, suppose a bank emails you on May 1 about a new 1 percent rent surcharge. The earliest date the bank can charge that fee is June 1. It cannot charge the fee on a rent payment made on May 15.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Similarly, banks cannot add a new annual renewal fee to a card whose renewal date falls inside the 30-day notice window. If a bank applies any MITC charge retroactively, you have the right to demand a full reversal along with the 18 percent GST charged on that fee.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="common-mitc-fees" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CreditCard className="w-4 h-4 text-[#1886ff]" />
                <span>Fee Categories Covered Under MITC</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Common MITC Fee Changes That Require Notice
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The 30-day prior notice rule covers all non-interest fees and service charges listed in the MITC. Banks often revise these charges to boost fee income. Review the table below to see which fee hikes require mandatory advance notice.
              </p>

              {/* Comparison Table Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">MITC Charges Requiring 30-Day RBI Notice</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">RBI Paragraph 9 Mandate</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">MITC Fee Category</th>
                        <th className="p-3">Common Bank Revision</th>
                        <th className="p-3">30-Day Notice Required?</th>
                        <th className="p-3">Your Legal Right</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Annual &amp; Renewal Fee</td>
                        <td className="p-3">Raising fee or spend waiver threshold</td>
                        <td className="p-3 text-emerald-600 font-semibold">Yes (Mandatory)</td>
                        <td className="p-3">Reverse un-notified fee or close card free</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Rent, Utility &amp; Education Fee</td>
                        <td className="p-3">Adding 1% to 2% category surcharge</td>
                        <td className="p-3 text-emerald-600 font-semibold">Yes (Mandatory)</td>
                        <td className="p-3">Demand refund for pre-notice swipes</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Forex Markup Fee</td>
                        <td className="p-3">Increasing markup from 2% to 3.5%</td>
                        <td className="p-3 text-emerald-600 font-semibold">Yes (Mandatory)</td>
                        <td className="p-3">Dispute excess markup + 18% GST</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Late Payment Fee Slabs</td>
                        <td className="p-3">Raising maximum penalty cap</td>
                        <td className="p-3 text-emerald-600 font-semibold">Yes (Mandatory)</td>
                        <td className="p-3">Cap penalty at old MITC slab</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-semibold text-slate-900">
                        <td className="p-3">Reward Redemption &amp; EMI Fees</td>
                        <td className="p-3">New processing or redemption fee</td>
                        <td className="p-3 text-[#1886ff]">Yes (Mandatory)</td>
                        <td className="p-3 text-[#1886ff]">Ombudsman reversal if un-notified</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="right-to-surrender" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Cardholder Opt-Out &amp; Exit Protection</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Right to Surrender Card Without Extra Fees
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI rule gives you a strong exit option when a bank makes your credit card more expensive. If any MITC change is to your disadvantage, you do not have to accept it.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Paragraph 9 states that you can surrender your card without paying any extra closure charge. The bank cannot demand a cancellation penalty or retain the newly hiked annual fee before closing the account.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You only need to clear your valid, undisputed dues up to the closure date. Once you submit your closure request and clear the balance, Paragraph 11 of the RBI Master Direction applies. The bank must close the card within seven working days, or pay you ₹500 per day for any delay. Learn more in our{' '}
                <Link href="/bank-failed-close-credit-card-7-days-rbi-500-penalty" className="text-[#1886ff] font-semibold hover:underline">
                  RBI 7-day credit card closure penalty guide
                </Link>.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="dispute-steps" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step Dispute for Un-Notified Fees
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your statement shows a fee hike that the bank never announced 30 days in advance, follow these five steps to protect your money and credit record.
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: 'Step 1',
                    title: 'Audit Your Registered Email and SMS Inbox',
                    desc: 'Search your registered email and SMS history for the bank name and words like "MITC", "schedule of charges", or "revision". Take screenshots if no notice was sent at least 30 days before the billing date.'
                  },
                  {
                    step: 'Step 2',
                    title: 'Pay Only the Undisputed Principal Balance',
                    desc: 'Pay all genuine purchases and old agreed dues before the due date. Do not leave the whole bill unpaid, as that can trigger genuine late fees on your regular spends.'
                  },
                  {
                    step: 'Step 3',
                    title: 'Email the Bank Grievance Redressal Officer',
                    desc: 'Write to the official customer care and Grievance Redressal Officer. Quote Paragraph 9 of the RBI Master Direction (2022), attach your statement, and demand reversal of the un-notified fee plus GST.'
                  },
                  {
                    step: 'Step 4',
                    title: 'Exercise Your Fee-Free Surrender Option',
                    desc: 'If you no longer want the card under the new fee structure, state clearly in writing that you are surrendering the card due to a disadvantageous MITC change and request closure within 7 working days.'
                  },
                  {
                    step: 'Step 5',
                    title: 'Escalate to the RBI Integrated Ombudsman',
                    desc: 'If the bank rejects your claim or fails to reply within 30 days, file a free complaint online at cms.rbi.org.in with your ticket number and statement proof.'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs"
                  >
                    <div className="flex-shrink-0 w-16 h-8 rounded-full bg-blue-50 text-[#1886ff] font-extrabold text-xs flex items-center justify-center border border-blue-100">
                      {item.step}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="consumer-remedies" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Consumer Protection Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Consumer Court &amp; Unfair Contract Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Beyond RBI directions, Indian consumer law gives you strong backing against surprise bank fees. A credit card agreement is a binding contract under the Indian Contract Act, 1872. Neither party can alter key pricing terms unilaterally without proper notice.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the Consumer Protection Act, 2019, imposing un-notified fees violates two core provisions. First, it counts as a <strong>Deficiency in Service</strong> under Section 2(11). Second, hiding fee hikes or using one-sided contract clauses counts as an <strong>Unfair Trade Practice</strong> under Section 2(47) and an <strong>Unfair Contract</strong> under Section 2(46).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                District Consumer Commissions have repeatedly ordered banks to refund unilateral fees. Under Section 39 of the Act, you can also claim compensation for mental agony, harassment by collection agents, and litigation expenses.
              </p>
            </section>

            {/* SECTION 7 */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Redressal Pathways</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Escalation &amp; RBI Ombudsman Timeline
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do not rely on phone calls with customer care executives. Always build a written paper trail across the three official redressal tiers below.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#1886ff]">Tier 1: Day 1 to Day 7</span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">Card Issuer Support</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Email the bank support desk with your card last 4 digits and statement date. Ask for written proof of the 30-day prior notice sent to you.
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#1886ff]">Tier 2: Day 8 to Day 30</span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">Principal Nodal Officer</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalate to the bank Principal Nodal Officer (PNO). Cite RBI Master Direction Paragraph 9 and demand reversal of the fee, GST, and any accrued interest.
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#1886ff]">Tier 3: After Day 30</span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">RBI Ombudsman (CMS)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a complaint on cms.rbi.org.in under the Reserve Bank Integrated Ombudsman Scheme, 2021. The Ombudsman can order a full refund and compensation.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8 */}
            <section id="cibil-protection" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Score &amp; Bureau Reporting</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. CIBIL Impact &amp; Disputed Fee Protection
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers worry that disputing an unfair fee will ruin their CIBIL score. Sometimes a bank keeps the disputed fee on your ledger, adds late payment charges every month, and reports your account as Days Past Due (DPD).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI credit reporting guidelines, banks must update accurate data and resolve credit bureau disputes within 30 calendar days. If a bank delays fixing a wrong default caused by an invalid MITC fee, you may also qualify for ₹100 per day delay compensation. Read our{' '}
                <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[#1886ff] font-semibold hover:underline">
                  RBI 100 per day CIBIL update compensation guide
                </Link>{' '}
                or check how to fix{' '}
                <Link href="/lifetime-free-ltf-credit-card-annual-fee-dispute-cibil" className="text-[#1886ff] font-semibold hover:underline">
                  lifetime free credit card annual fee CIBIL disputes
                </Link>.
              </p>
            </section>

            {/* SECTION 9 */}
            <section id="mitc-vs-apr" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Distinguishing Fees From Interest Rates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. MITC Fee Change vs APR Hike: Key Differences
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian banking law treats administrative MITC charges and revolving interest rates (APR) slightly differently. In <em>HSBC Ltd. v. Awaz</em> (2024), the Supreme Court held that banks have autonomy over credit card interest rates within RBI policy limits.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, both APR hikes and MITC fee revisions still require at least one month prior notice and prospective application. For a detailed look at interest rate hikes, see our guide on{' '}
                <Link href="/bank-increased-credit-card-apr-interest-rbi-opt-out" className="text-[#1886ff] font-semibold hover:underline">
                  credit card APR interest rate hike opt-out rules
                </Link>. If inflated fees and interest have pushed your card balance out of control, you can also explore{' '}
                <Link href="/credit-card-settlement" className="text-[#1886ff] font-semibold hover:underline">
                  credit card debt settlement options
                </Link>{' '}
                or learn how to{' '}
                <Link href="/stop-credit-card-recovery-calls" className="text-[#1886ff] font-semibold hover:underline">
                  stop credit card recovery calls
                </Link>.
              </p>
            </section>

            {/* COMPANY PROFILE SECTION */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 10: FAQ */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CheckCircle2 className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Credit Card MITC Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers on RBI 30-day prior notice rules, fee-free card surrender, and legal remedies against unilateral MITC fee changes.
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

            {/* SECTION 11: Citations & Outbound Authority Grid */}
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
                  <strong>RBI Master Direction (Credit Card and Debit Card - Issuance and Conduct Directions, 2022):</strong> Paragraph 9 (Interest Rates and Other Charges - 1-Month Prior Notice, Prospective Effect, and Fee-Free Surrender) and Paragraph 11 (7-Working-Day Closure &amp; Rs 500/Day Penalty).
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Deficiency in Banking Service Redressal via RBI CMS Portal.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) (Deficiency in Service), Section 2(46) (Unfair Contract), Section 2(47) (Unfair Trade Practice), and Section 39 (Refund and Compensation Orders).
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Contractual Consent and Prohibition on Unilateral Variation of Core Terms Without Notice.
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

              {/* Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-increased-credit-card-apr-interest-rbi-opt-out" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card APR Hike Opt-Out
                  </Link>
                  <Link href="/bank-failed-close-credit-card-7-days-rbi-500-penalty" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    7-Day Card Closure Penalty
                  </Link>
                  <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Overlimit Fee RBI Refund
                  </Link>
                  <Link href="/lifetime-free-ltf-credit-card-annual-fee-dispute-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    LTF Annual Fee CIBIL Fix
                  </Link>
                  <Link href="/unactivated-credit-card-charges-rbi-500-day-penalty" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unactivated Card RBI Penalty
                  </Link>
                  <Link href="/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
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
                Specialist in banking compliance, credit card fee disputes, RBI statutory guidelines, and debt settlement resolutions helping borrowers challenge unlawful bank charges.
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
                  CARDHOLDER FEE DEFENSE
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Charged Un-Notified Card Fees?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team drafts RBI Paragraph 9 dispute notices, demands full fee and GST reversals, and protects your CIBIL score from wrongful overdue reporting.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Challenge Unfair Fees Now
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
                  <span><strong>RBI Master Direction Citations:</strong> Formal notice under Paragraph 9.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Fee &amp; GST Reversal:</strong> Full refund of un-notified MITC charges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Dispute Protection:</strong> Prevent wrongful overdue marks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombudsman Escalation:</strong> Complete RBI CMS filing support.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/bank-increased-credit-card-apr-interest-rbi-opt-out"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card APR Hike Opt-Out
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI interest rate rules &rarr;</span>
                </Link>

                <Link
                  href="/bank-failed-close-credit-card-7-days-rbi-500-penalty"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    7-Day Card Closure Penalty
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Claim Rs 500/day delay fee &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-overlimit-fee-without-consent-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Overlimit Fee Without Consent
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI consent &amp; refund rules &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
