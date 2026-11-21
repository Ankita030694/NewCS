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

export default function UnactivatedCardPenaltyClient() {
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
    { id: 'statutory-framework', label: '1. Statutory Framework: RBI 2022 Rules' },
    { id: 'thirty-day-rule', label: '2. 30-Day Rule & OTP Consent Mandate' },
    { id: 'penalty-distinction', label: '3. Rs 500/Day vs 2x Charge Penalty' },
    { id: 'calculation-matrix', label: '4. Penalty & Refund Calculation Math' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Dispute SOP' },
    { id: 'cibil-protection', label: '7. CIBIL Error & Bureau Rectification' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Issuance to Payout Timeline' },
    { id: 'specialized-scenarios', label: '10. Bank Excuses & Special Cases' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank charge annual or joining fees on an unactivated credit card?',
      a: 'No. Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct, 2022, a bank cannot activate or bill you for a card without explicit OTP-based consent if it remains unactivated for more than 30 days. If no consent is given, the bank must close the card at zero cost.'
    },
    {
      q: 'What is the RBI 30-day rule for unactivated credit cards?',
      a: 'Under paragraph 6(a)(vi) of the RBI Master Direction, if a credit card is not activated by the customer for more than 30 days from issuance, the bank must seek OTP-based consent before activating it. If the customer refuses or does not reply, the bank must close the card account within 7 working days without any charge.'
    },
    {
      q: 'When does the RBI Rs 500 per day penalty apply?',
      a: 'The Rs 500 per calendar day penalty applies when a card issuer fails to close a credit card account within 7 working days of a closure request or non-consent confirmation, provided there are no legitimate outstanding dues on the account.'
    },
    {
      q: 'What is the difference between the Rs 500/day penalty and the 2x penalty?',
      a: 'The Rs 500 per day penalty applies to delays beyond 7 working days in closing a credit card account with zero dues. The 2x penalty applies when a bank issues and activates an unsolicited card without explicit consent and bills the customer: the bank must reverse all charges and pay twice the reversed amount as penalty.'
    },
    {
      q: 'What actions count as activating a credit card under RBI rules?',
      a: 'Customer-initiated steps that show intent to use the card count as activation. These include generating a PIN, changing transaction limits or controls, or activating via IVR, recorded customer care call, SMS, or mobile app. Simply receiving the courier parcel does not activate the card.'
    },
    {
      q: 'Can an unactivated credit card fee hurt my CIBIL score?',
      a: 'It should not, because an unactivated card without consent must be closed at zero cost. However, some banks wrongly bill joining fees and report late payments to CIBIL. You can dispute this with the bank and credit bureau to get the wrong entry removed completely.'
    },
    {
      q: 'Does the 30-day rule apply to renewed or replacement credit cards?',
      a: 'Yes, the OTP consent and closure rule applies to unactivated renewed or replacement cards too. However, for a renewed or replaced card, closing the unactivated card is subject to clearing any existing unpaid dues from the previous card.'
    },
    {
      q: 'How do I claim the Rs 500 per day penalty or 2x refund from my bank?',
      a: 'First, submit a written dispute to the bank Grievance Redressal Officer (GRO) citing the RBI Master Direction 2022. If the bank does not resolve it or pay the statutory penalty within 30 days, file a free complaint on the RBI Integrated Ombudsman portal at cms.rbi.org.in.'
    },
    {
      q: 'Can a bank force me to send a physical letter to close an unactivated card?',
      a: 'No. RBI rules require banks to provide multiple easy closure channels, including dedicated email, helpline, IVR, mobile app, and website links. Banks cannot force you to visit a branch or send a physical letter.'
    },
    {
      q: 'How does CredSettle help with unactivated credit card disputes?',
      a: 'CredSettle drafts formal RBI-compliant legal notices, demands full fee waivers and statutory penalties, escalates cases to Principal Nodal Officers and the RBI Ombudsman, and ensures erroneous CIBIL defaults are deleted.'
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
            <span>RBI Master Direction 2022 &amp; Cardholder Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            RBI 30-Day Credit Card Activation &amp; Rs 500 Penalty Rule
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did a bank bill you for a card you never activated? Learn how RBI rules protect you with 30-day OTP consent, free closure, 2x fee refunds, and Rs 500 per day delay payouts.
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
                  Protected under RBI Master Direction 2022 (DoR.AUT.REC.No.27) and RB-IOS 2021.
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
                <span>EXECUTIVE BRIEF: UNACTIVATED CREDIT CARD RBI RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">30-Day OTP Consent Mandate:</strong> If a new credit card is not activated within 30 days of issuance, the bank must seek OTP-based consent before activating it.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Zero-Cost Closure:</strong> If you do not give OTP consent, the bank must close the credit card account within 7 working days at zero cost to you.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Rs 500/Day Closure Delay Penalty:</strong> If the bank delays closing a zero-dues card beyond 7 working days, it must pay you Rs 500 per calendar day of delay.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">2x Penalty for Unsolicited Billing:</strong> If a bank bills you on an unsolicited card activated without consent, it must reverse all fees and pay twice that amount as penalty.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">CIBIL Score Protection:</strong> Banks cannot report defaults on unactivated cards. Wrong credit report entries must be deleted, with Rs 100/day CIC delay relief if unresolved beyond 30 days.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Framework: RBI Master Direction 2022 */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Regulations &amp; Legal Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Framework: RBI Master Direction 2022
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many banks in India send pre-approved credit cards with bank accounts or loans. Often, users keep the envelope sealed and never turn on the card. Months later, they get bills for joining fees and late fines.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To stop this unfair billing, the RBI issued the Credit Card and Debit Card Directions, 2022. This binding rule (RBI/2022-23/92, DoR.AUT.REC.No.27) started on July 1, 2022. It was updated on March 7, 2024.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                These rules bind every bank and NBFC that issues credit cards in India. Public banks, private banks, and co-operative banks must follow them. No bank can bypass these RBI rules using fine print.
              </p>
            </section>

            {/* SECTION 2: The 30-Day Activation Rule & OTP Consent Mandate */}
            <section id="thirty-day-rule" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Consent &amp; Account Closure Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. The 30-Day Activation Rule &amp; OTP Consent Mandate
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Paragraph 6(a)(vi) of the RBI Master Direction sets a strict 30-day rule for new cards. If you do not activate your card within 30 days of issue, the bank cannot turn it on by itself.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Instead, the bank must ask for your One Time Password (OTP) consent first. If you do not give OTP consent, the bank must close the card. This closure must finish within seven working days at zero cost to you.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                What counts as card activation under RBI rules? Only steps you start yourself count. This includes setting a PIN, changing spend limits, or using IVR, SMS, or mobile apps. Receiving the courier parcel does not activate the card.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Also, if an active card stays unused for over one year, the bank must warn you first. If you do not reply within 30 days, the bank must close that card after dues are paid.
              </p>
            </section>

            {/* SECTION 3: Rs 500/Day Closure Penalty vs 2x Charge Reversal */}
            <section id="penalty-distinction" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Two Distinct RBI Penalties Explained</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Rs 500/Day Closure Penalty vs 2x Charge Reversal
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers often mix up two different RBI penalty rules when fighting unactivated card bills. Understanding both rules helps you demand the exact compensation you are owed.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Rule A: Rs 500/Day Closure Delay Penalty</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Closure of Credit Card rules, banks must close a card within 7 working days of your request or non-consent confirmation. If the bank delays closure beyond 7 working days when there are zero dues, it must pay Rs 500 per calendar day of delay until closure.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Rule B: 2x Penalty on Unsolicited Card Billing</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Paragraph 6(a)(i)-(v), banks cannot issue or activate unsolicited cards without explicit consent. If a bank activates and bills you without consent, it must reverse all charges immediately and pay you a penalty equal to twice (2x) the reversed amount without demur.
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For example, suppose a bank issues an unsolicited card, activates it without your OTP, and bills Rs 2,500 in fees. The bank must cancel the Rs 2,500 bill and pay you Rs 5,000 as a 2x penalty. If the bank also delays closing that zero-dues account past 7 working days, the Rs 500 per day penalty applies on top.
              </p>
            </section>

            {/* SECTION 4: Calculation Matrix: Daily Penalty & 2x Refund Math */}
            <section id="calculation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Penalty Formulas &amp; Examples</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Calculation Matrix: Daily Penalty &amp; 2x Refund Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You do not need to prove financial loss to claim RBI statutory penalties. Once the bank misses the 7-working-day closure window or bills an unconsented card, the compensation becomes automatic. The table below shows real payout scenarios.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">RBI Credit Card Penalty &amp; Compensation Matrix</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Rs 500/Day &amp; 2x Statutory Rules</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Violation Scenario</th>
                        <th className="p-3">Applicable RBI Clause</th>
                        <th className="p-3">Example Delay / Fee</th>
                        <th className="p-3 text-right">Compensation Owed to You</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Unactivated card closed within 7 working days</td>
                        <td className="p-3 font-mono text-xs">Para 6(a)(vi)</td>
                        <td className="p-3">0 Delay Days</td>
                        <td className="p-3 text-right font-bold text-emerald-600">Rs 0 (Zero-Cost Closure)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Closure delayed by 10 calendar days past Day 7</td>
                        <td className="p-3 font-mono text-xs">Closure Clause</td>
                        <td className="p-3 font-mono text-amber-600 font-bold">10 Days Delay</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">Rs 5,000 (10 x Rs 500)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Closure delayed by 30 calendar days past Day 7</td>
                        <td className="p-3 font-mono text-xs">Closure Clause</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">30 Days Delay</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">Rs 15,000 (30 x Rs 500)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Unsolicited card billed Rs 2,000 without consent</td>
                        <td className="p-3 font-mono text-xs">Para 6(a)(iv)</td>
                        <td className="p-3 font-mono">Rs 2,000 Billed</td>
                        <td className="p-3 text-right font-bold text-rose-800 font-mono">Rs 2,000 Reversal + Rs 4,000 Penalty</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Wrong CIBIL default not fixed within 30 days</td>
                        <td className="p-3 font-mono text-xs text-[#1886ff]">RBI/2023-24/72</td>
                        <td className="p-3 font-mono text-[#1886ff]">20 Days Delay</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">Rs 2,000 (Rs 100/Day CIC)</td>
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
                5. Visual Blueprint: Unactivated Card Redressal Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual guide maps the complete 30-day activation timeline, the 7-working-day closure rule, and how to claim your Rs 500 per day or 2x penalty from the bank.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/unactivated-credit-card-charges-rbi-500-day-penalty.jpg"
                    alt="RBI 30-Day Unactivated Credit Card Charges and Rs 500 Per Day Penalty Rule"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Cardholder Protection Framework • RBI Master Direction Compliant</span>
                  <a
                    href="/images/infographics/unactivated-credit-card-charges-rbi-500-day-penalty.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Dispute Unactivated Card Bills */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Dispute Unactivated Card Bills
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a bank sends you a bill for an unactivated credit card or delays closing it, do not pay the unfair fee. Follow these six steps to cancel the bill and claim compensation.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Gather Proof of Non-Activation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Save the card dispatch email, SMS alerts, and billing statement. Do not set a PIN, log into the card app, or make any test transaction. Keep proof that you never gave OTP-based consent.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Send Written Non-Consent &amp; Closure Email
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email the bank customer care and official card closure desk. State clearly that the card was never activated, you decline OTP consent, and demand zero-cost closure within 7 working days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Cite RBI Master Direction Paragraph 6(a)(vi)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank already billed joining fees, GST, or late charges, demand a 100% reversal under RBI Master Direction 2022. If the card was unsolicited, demand the 2x statutory penalty as well.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Start the 7-Working-Day Penalty Clock
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Save the service request number and timestamp of your closure email. Once 7 working days pass without an official closure SMS or email, begin counting Rs 500 for each calendar day of delay.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Escalate to Bank GRO and PNO
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Forward the unanswered ticket to the bank Grievance Redressal Officer (GRO) and Principal Nodal Officer (PNO). Attach your fee reversal demand, closure proof, and daily penalty calculation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: File Complaint on RBI CMS Portal
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank fails to resolve your issue within 30 days, file a complaint on cms.rbi.org.in. The RBI Ombudsman can order account closure, penalty payout, and complete CIBIL cleanup.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: CIBIL Protection & Credit Bureau Error Rectification */}
            <section id="cibil-protection" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Rights &amp; Compensation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. CIBIL Protection &amp; Credit Bureau Error Rectification
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Unpaid joining fees on an unactivated card often cause late payment marks (DPD) on CIBIL, Experian, Equifax, and CRIF reports. This can drop your credit score by 50 to 100 points for no fault of yours.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the Credit Information Companies Act, 2005 and RBI Circular RBI/2023-24/72, banks must fix wrong credit entries fast. If a bank or bureau fails to fix your dispute within 30 days, they must pay Rs 100 per day of delay.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Demand Full Tradeline Deletion</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Do not accept a &quot;Settled&quot; or &quot;Written Off&quot; status for an unactivated card. Because the card was never legally active, demand that the bank mark it &quot;Closed with Zero Dues&quot; or delete the tradeline and all DPD marks entirely.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Rs 100/Day Bureau Delay Relief</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Raise an online dispute directly on the CIBIL portal and email the bank simultaneously. Under RBI rules effective April 2024, the bank gets 21 days and the bureau gets 9 days (30 days total) to fix the error before Rs 100/day compensation starts.
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
                If customer support refuses to cancel unactivated card charges or pay the Rs 500 daily penalty, use this three-tier RBI escalation path.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Window</th>
                      <th className="p-3">Scope of Relief &amp; Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 15 Days</td>
                      <td className="p-3">Audits activation logs, reverses unconsented fees, and closes the card account.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">15 to 30 Days</td>
                      <td className="p-3">Approves Rs 500/day or 2x penalty payouts and instructs CIBIL tradeline removal.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-Filing</td>
                      <td className="p-3">Issues binding award on cms.rbi.org.in for penalty payout, closure, and harassment damages.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline: Card Issuance to Compensation */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Milestone Tracker</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Card Issuance to Compensation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking exact dates from card issuance to your closure request helps you prove bank non-compliance before the RBI Ombudsman.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Stage</th>
                      <th className="p-3">Regulatory Status</th>
                      <th className="p-3">Bank Duty</th>
                      <th className="p-3">Cardholder Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0 to Day 30</td>
                      <td className="p-3 font-mono text-[11px]">Activation Window</td>
                      <td className="p-3">Cannot activate or bill without customer-initiated activation.</td>
                      <td className="p-3">Leave card unactivated if unwanted; save dispatch alerts.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 Onwards</td>
                      <td className="p-3 font-mono text-[11px]">OTP Consent Stage</td>
                      <td className="p-3">Must seek OTP-based consent before activating the card.</td>
                      <td className="p-3">Do not share or enter activation OTP; reply declining consent.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Next 7 Working Days</td>
                      <td className="p-3 font-mono text-[11px]">Mandatory Closure</td>
                      <td className="p-3">Must close unactivated card at zero cost and notify via SMS/email.</td>
                      <td className="p-3">Track ticket number and check for official closure NOC.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 8+ Working Day</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Penalty Commences</td>
                      <td className="p-3">Accrues Rs 500 per calendar day delay penalty on zero-dues card.</td>
                      <td className="p-3 font-bold text-amber-800">Send formal notice to Bank GRO demanding Rs 500/day payout.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 30 Post-Complaint</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Ombudsman Filing</td>
                      <td className="p-3">Faces binding adjudication for penalties and CIBIL rectification.</td>
                      <td className="p-3 font-bold text-slate-900">Escalate on cms.rbi.org.in with full email trail and bills.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Common Bank Excuses & Specialized Card Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Edge Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Common Bank Excuses &amp; Specialized Card Scenarios
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks often use technical excuses to reject closure requests or defend unfair joining fees. Here is how RBI rules treat four common scenarios.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    &quot;Pending Joining Fee&quot; Closure Refusal
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks sometimes refuse to pay the Rs 500/day penalty by claiming an unpaid joining fee exists. However, if the card was never activated within 30 days with OTP consent, the fee itself is illegal and cannot block zero-dues closure.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Bundled Add-On or Co-Branded Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sales agents often bundle a credit card with a home loan or salary account. Without your explicit consent and activation, any billing on that bundled card violates RBI rules and qualifies for 2x penalty reversal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Virtual &amp; UPI RuPay Credit Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The 30-day activation and OTP consent rule applies equally to digital-only virtual cards and RuPay UPI credit cards. Generating a UPI PIN or enabling online transactions counts as activation, so avoid doing so on unwanted cards.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Renewed &amp; Replacement Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When an existing card expires, banks send a renewed card. If you do not activate it within 30 days, the bank must seek OTP consent. However, you must clear any unpaid balance from your old card before closing the account.
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
                Frequently Asked Questions: Unactivated Card Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers to common questions on unactivated credit card fees, the 30-day OTP consent mandate, Rs 500 per day closure penalties, and CIBIL dispute fixes.
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
                  <strong>Reserve Bank of India Master Direction:</strong> RBI/2022-23/92, DoR.AUT.REC.No.27/24.01.041/2022-23, Credit Card and Debit Card Issuance and Conduct Directions, 2022 (Paragraph 6(a)(vi) and Closure of Credit Card provisions).
                </li>
                <li>
                  <strong>Reserve Bank Integrated Ombudsman Scheme, 2021:</strong> Adjudication of Deficiency in Banking Service, Unauthorized Card Issuance, and Statutory Compensation.
                </li>
                <li>
                  <strong>RBI Credit Information Compensation Framework:</strong> RBI/2023-24/72, Framework for Compensation to Customers for Delayed Updation or Rectification of Credit Information (Rs 100/Day beyond 30 Days).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005:</strong> Section 21(3), Right of Borrowers to Request Rectification of Inaccurate Credit History.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) (Deficiency of Service) and Section 39 (Compensation for Unfair Trade Practices).
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
                  <Link href="/unsolicited-credit-card-upgrade-limit-increase-rbi-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unsolicited Card Upgrade Penalty
                  </Link>
                  <Link href="/unused-credit-card-annual-fee-cibil-npa-rbi-closure" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unused Card Annual Fee CIBIL Fix
                  </Link>
                  <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Overlimit Fee Without Consent
                  </Link>
                  <Link href="/credit-card-pending-chargeback-rbi-shadow-credit-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pending Chargeback Billing Rules
                  </Link>
                  <Link href="/credit-card-reward-points-forfeiture-overdue-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Reward Points Forfeiture Rules
                  </Link>
                  <Link href="/credit-card-balance-transfer-default-interest-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Balance Transfer Default Rules
                  </Link>
                  <Link href="/rupay-credit-card-upi-debt-default-settlement-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RuPay UPI Credit Card Rules
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Services
                  </Link>
                  <Link href="/services/credit-score-builder" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Score Builder &amp; Repair
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
                Specialist in RBI credit card compliance, banking disputes, CIBIL error rectification, and borrower protection with extensive experience holding card issuers accountable under central bank mandates.
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
                  CARD DISPUTE &amp; PENALTY SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Billed for an Unactivated Card?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking legal team drafts formal notices under RBI Master Direction 2022, reverses illegal fees, removes CIBIL defaults, and recovers your Rs 500/day or 2x penalty.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Claim RBI Penalty &amp; Fee Waiver
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
                  <span><strong>100% Illegal Fee Reversal:</strong> Full waiver of unactivated card charges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Penalty Claims:</strong> Rs 500/day closure delay &amp; 2x billing relief.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Score Protection:</strong> Complete removal of wrongful DPD entries.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Escalation:</strong> End-to-end CMS portal filing.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/unsolicited-credit-card-upgrade-limit-increase-rbi-rule"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unsolicited Card Upgrade Penalty
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">2x RBI reversal rule &rarr;</span>
                </Link>

                <Link
                  href="/unused-credit-card-annual-fee-cibil-npa-rbi-closure"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unused Card Annual Fee CIBIL Fix
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">1-year inactivity closure &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-overlimit-fee-without-consent-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Overlimit Fee Without Consent
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Claim RBI fee refund &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
