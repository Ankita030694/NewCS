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

export default function RemoveUnauthorizedCibilInquiriesClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Quick Answer' },
    { id: 'hard-vs-soft-inquiries', label: '1. Hard vs Soft CIBIL Inquiries' },
    { id: 'statutory-framework', label: '2. CICRA 2005 & RBI Circulars' },
    { id: 'aggregator-consent-rules', label: '3. Aggregator & DSA Consent Rules' },
    { id: 'compensation-matrix', label: '4. RBI 30-Day & ₹100/Day Penalty' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Removal Guide' },
    { id: 'court-precedents', label: '7. Court Judgments & Remedies' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Alert to Score Recovery Timeline' },
    { id: 'common-mistakes-scenarios', label: '10. Mistakes & Special Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Official Citations & Portals' }
  ];

  const faqs = [
    {
      q: 'Can I remove an unauthorized hard inquiry from my CIBIL report?',
      a: 'Yes. You can remove any hard inquiry made without your consent, due to lender error, or from PAN misuse. Under CICRA 2005, CIBIL cannot delete an entry on its own. You must file a bureau dispute and ask the lender to send a suppression note.'
    },
    {
      q: 'Why did my CIBIL score drop after I checked loan offers on an app?',
      a: 'Some loan apps and DSA brokers send your PAN to many partner banks at once. Each bank then runs a hard credit pull. Seeing many personal loan pulls in a few days signals high risk and drops your CIBIL score.'
    },
    {
      q: 'How long does a hard inquiry stay on a CIBIL report in India?',
      a: 'A hard inquiry stays visible on your CIBIL report for 24 to 36 months. Its score drop is strongest in the first 3 to 6 months. Once an illegal pull is deleted through a dispute, your score recovers faster.'
    },
    {
      q: 'What is the RBI 30-day rule and ₹100 per day delay penalty?',
      a: 'Under RBI Circular RBI/2023-24/72, lenders get 21 days to verify a credit dispute and bureaus get 9 days to update your file. If your dispute stays open past 30 days, the guilty party must pay you ₹100 per day of delay.'
    },
    {
      q: 'Must credit bureaus send an SMS alert when a bank checks my CIBIL report?',
      a: 'Yes. Under RBI Circular RBI/2023-24/73 and the 2025 RBI Master Direction, bureaus must send an SMS or email alert when a lender pulls your file. This rule applies if your mobile number or email is on record.'
    },
    {
      q: 'Can I delete a hard inquiry if my personal loan application was rejected?',
      a: 'No. If you gave clear consent and applied for the loan yourself, the hard inquiry stays valid even after rejection. Only pulls done without valid consent, duplicate pulls, or fraud checks can be removed.'
    },
    {
      q: 'Is a bank liable if a third-party loan aggregator pulled my report without consent?',
      a: 'Yes. Under the 2025 RBI Digital Lending Directions, banks and NBFCs stay fully liable for their loan apps and DSA agents. If an app runs pulls without clear consent, the partner lender must remove them.'
    },
    {
      q: 'Should I check only CIBIL or all four credit bureaus for fake inquiries?',
      a: 'You must check all four bureaus in India: TransUnion CIBIL, Experian, Equifax, and CRIF High Mark. Many loan apps pull Experian or CRIF along with CIBIL. Every bureau gives one free full report per year.'
    },
    {
      q: 'Can I file a complaint with the RBI Ombudsman against TransUnion CIBIL?',
      a: 'Yes. Since September 1, 2022, all four credit bureaus come under the RBI Integrated Ombudsman Scheme. If a bank or bureau fails to fix your dispute in 30 days, file a free case at cms.rbi.org.in.'
    },
    {
      q: 'How does CredSettle help remove multiple unauthorized CIBIL hard inquiries?',
      a: 'CredSettle checks all four credit reports and sends legal notices to each lender for consent proof. We track the 30-day RBI deadline, claim your ₹100 daily delay relief, and take tough cases to the RBI Ombudsman.'
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
            <span>CICRA 2005 &amp; RBI Credit Information Directions Compliance</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Fix CIBIL Drop From Unauthorized Aggregator Loan Pulls
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did a loan app, broker, or unknown NBFC flood your CIBIL report with hard pulls? Learn how to remove fake personal loan inquiries in 30 days and claim ₹100 per day for RBI delays.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Remove Fake CIBIL Inquiries</span>
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
                  <span>Statutory Credit Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under CICRA 2005, RBI Circular RBI/2023-24/72, and RBI Digital Lending Directions 2025.
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
                <span>QUICK ANSWER: HOW TO REMOVE UNAUTHORIZED CIBIL HARD INQUIRIES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">You Can Delete Illegal Pulls:</strong> Hard checks run without your consent, by rogue DSAs, or via PAN misuse can be wiped from your report.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Use a Dual-Track Dispute:</strong> CIBIL cannot erase an entry alone under CICRA 2005. Raise a bureau ticket and demand proof of consent from the lender.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict 30-Day RBI Clock:</strong> Lenders get 21 days to verify disputes and bureaus get 9 days to update your file. Delays past day 30 earn ₹100 per day.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory SMS Alerts:</strong> Credit bureaus must alert you by SMS or email whenever a bank or NBFC pulls your report under RBI rules.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Free Ombudsman Remedy:</strong> Both banks and all four credit bureaus come under the RBI Ombudsman. File free cases online at cms.rbi.org.in.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Hard vs Soft CIBIL Inquiries: Score Drop Explained */}
            <section id="hard-vs-soft-inquiries" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Score Mechanics &amp; Inquiry Blasts</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Hard vs Soft CIBIL Inquiries: Score Drop Explained
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers face a sudden CIBIL score drop right after checking personal loan rates online. You fill out one short form on a loan portal or talk to a phone agent. Hours later, you get six to ten SMS alerts from banks and NBFCs you never picked.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Each formal loan check logs a hard inquiry on your credit file. A single hard pull may trim your score by only a few points. However, five to ten personal loan pulls in one week look like a sign of cash stress to bank risk systems.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks call this pattern credit-hungry behavior. As a result, good borrowers with clean EMI records get rejected or offered higher interest rates. Even worse, hard inquiries remain visible on your report for 24 to 36 months unless removed.
              </p>

              {/* Soft vs Hard Inquiry Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[560px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Inquiry Feature</th>
                      <th className="p-3">Soft Inquiry (Safe)</th>
                      <th className="p-3">Genuine Hard Inquiry</th>
                      <th className="p-3">Unauthorized Hard Pull</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">How It Happens</td>
                      <td className="p-3">You check your own score or view pre-approved offers.</td>
                      <td className="p-3">You apply directly for a personal loan or card.</td>
                      <td className="p-3">DSA, loan app, or scammer pulls your PAN without consent.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Impact on Score</td>
                      <td className="p-3 text-emerald-600 font-semibold">Zero impact on score.</td>
                      <td className="p-3 text-amber-600 font-semibold">Small short-term dip.</td>
                      <td className="p-3 text-rose-600 font-semibold">Sharp drop when clustered.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Who Can See It</td>
                      <td className="p-3">Visible only to you.</td>
                      <td className="p-3">Visible to all lenders.</td>
                      <td className="p-3">Visible to all lenders for 2 to 3 years.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Can Be Removed?</td>
                      <td className="p-3">Not needed (zero harm).</td>
                      <td className="p-3">No, even if loan is rejected.</td>
                      <td className="p-3 font-bold text-[#1886ff]">Yes, via RBI dispute rules.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 2: Legal Framework: CICRA 2005 & RBI Circulars */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Laws &amp; Central Bank Directives</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Legal Framework: CICRA 2005 &amp; RBI Circulars
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit bureaus and lenders in India do not operate in a legal gray zone. Strict Parliament laws and Reserve Bank of India rules control who can read your credit file and how errors must be fixed.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The core statute is the Credit Information Companies (Regulation) Act, 2005, known as CICRA. Under Section 17, only licensed member banks, NBFCs, and specified users can pull credit reports for valid lending needs.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 20 of CICRA and Regulation 10 of the CIC Regulations, 2006 enforce strict privacy rules. Lenders must guard your data from misuse and never pull reports without a lawful credit request. Under Section 23(2), a willful breach of privacy rules carries a fine up to ₹1 crore.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 21 gives every borrower two direct tools. First, you can ask any lender for a copy of the credit report they pulled. Second, Section 21(3) lets you demand correction of wrong data within 30 days.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To strengthen these rights, RBI issued Circular RBI/2023-24/73 on October 26, 2023. It directs bureaus to send instant SMS or email alerts whenever a lender accesses your report. Later, RBI merged all these rules into the Master Direction on Credit Information Reporting, 2025 (RBI/DoR/2024-25/125, dated January 6, 2025).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                RBI also cut bureau update lag through Circular RBI/2024-25/60, effective January 1, 2025. Lenders must now report credit updates every 15 days instead of once a month. This helps clean up approved corrections much faster.
              </p>
            </section>

            {/* SECTION 3: Loan Aggregator & DSA Consent Rules Under RBI Law */}
            <section id="aggregator-consent-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Digital Lending &amp; Data Privacy Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Loan Aggregator &amp; DSA Consent Rules Under RBI Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most multiple inquiry blasts happen on loan comparison apps, fintech marketplaces, or through Direct Selling Agents (DSAs). Borrowers often click one &quot;Check Eligibility&quot; button, and ten NBFCs pull their CIBIL report behind the scenes.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India (Digital Lending) Directions, 2025 (Circular RBI/2025-26/36, dated May 8, 2025) target this exact problem. Paragraph 6, effective November 1, 2025, sets strict rules for Lending Service Providers (LSPs) that display offers from multiple lenders.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Loan apps must show a clear, neutral view of matching loan offers before sending your file to lenders. Consent for bureau pulls must be specific and need-based. More importantly, the partner bank or NBFC bears full legal blame if its agent breaks RBI consent rules.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 6 of the Digital Personal Data Protection (DPDP) Act, 2023 backs this up. Valid consent must be free, specific, clear, and given by an active choice. Pre-ticked boxes or buried fine print allowing &quot;all partner banks&quot; to pull your CIBIL file do not meet this test.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Valid RBI &amp; DPDP Consent</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You pick one named bank or NBFC after viewing terms. You give an active OTP or click for that specific lender. The lender keeps a dated audit log of your exact consent.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Illegal Shotgun Inquiry Blast</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A broker shares your PAN across 10 lenders without naming them first. Or an app uses a pre-ticked box to trigger hard pulls across NBFCs you never chose.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: RBI 30-Day Rule & ₹100 Daily Delay Compensation */}
            <section id="compensation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Penalty Rules &amp; Accrual Ledger</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. RBI 30-Day Rule &amp; ₹100 Daily Delay Compensation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Earlier, banks and bureaus dragged CIBIL disputes for months without penalty. To end this delay, RBI issued Circular RBI/2023-24/72 (DoR.FIN.REC.48/20.16.003/2023-24) on October 26, 2023. The rule took effect on April 26, 2024.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under this rule, your dispute must be solved within 30 calendar days from the date you file it. The Credit Institution (bank or NBFC) gets 21 days to verify your claim and send the correction. The bureau gets 9 days to update your report.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your verified dispute stays open past 30 days, you earn ₹100 for every extra calendar day. The party that caused the delay must credit this money to your bank account within 5 working days of closing the dispute. Always enter your bank details or UPI ID when filing your dispute.
              </p>

              {/* Representative Compensation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">RBI Credit Dispute Delay Penalty Ledger</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹100 Flat Daily Accrual Rate</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Time Since Dispute Filed</th>
                        <th className="p-3">Delay Past Day 30</th>
                        <th className="p-3">RBI Regulatory Status</th>
                        <th className="p-3 text-right">Statutory Payout Owed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 1 to Day 21</td>
                        <td className="p-3 font-mono">0 Days</td>
                        <td className="p-3 text-emerald-600 font-semibold">Bank / NBFC Verification Window</td>
                        <td className="p-3 text-right font-bold text-slate-500">₹0 (Allowed Window)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 22 to Day 30</td>
                        <td className="p-3 font-mono">0 Days</td>
                        <td className="p-3 text-emerald-600 font-semibold">Bureau Report Update Window</td>
                        <td className="p-3 text-right font-bold text-slate-500">₹0 (Allowed Window)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 45 (15 Days Late)</td>
                        <td className="p-3 font-mono text-amber-600 font-bold">15 Days Delay</td>
                        <td className="p-3 text-amber-600 font-semibold">RBI Breach: Daily Penalty Active</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">₹1,500</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 60 (30 Days Late)</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">30 Days Delay</td>
                        <td className="p-3 text-rose-600 font-semibold">RBI Ombudsman Escalation Stage</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">₹3,000</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Day 90 (60 Days Late)</td>
                        <td className="p-3 font-mono text-[#1886ff]">60 Days Delay</td>
                        <td className="p-3 text-[#1886ff]">Ombudsman + Consumer Damages</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹6,000 + Extra Relief</td>
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
                5. Visual Blueprint: Hard Inquiry Removal Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart maps the full legal path to erase fake loan pulls. It shows how the 30-day RBI dispute clock, lender consent audit, and ₹100 daily penalty protect your credit score.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/remove-unauthorized-multiple-cibil-hard-inquiries-loan.jpg"
                    alt="RBI Rules and 30-Day Workflow to Remove Unauthorized Multiple CIBIL Loan Hard Inquiries"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Credit Bureau Dispute Framework • RBI Master Direction 2025 Compliant</span>
                  <a
                    href="/images/infographics/remove-unauthorized-multiple-cibil-hard-inquiries-loan.jpg"
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

            {/* SECTION 6: Step-by-Step Guide to Remove Hard CIBIL Inquiries */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step Guide to Remove Hard CIBIL Inquiries
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six clear steps to wipe fake personal loan pulls from your credit report and restore your score fast.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Download Reports From All 4 Credit Bureaus
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Get your free full report from TransUnion CIBIL, Experian, Equifax, and CRIF High Mark. Open the Enquiry tab and list every bank name, exact date, and loan amount shown.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Separate Valid Pulls From Unauthorized Entries
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Mark only inquiries you never approved, duplicate pulls by one bank, or unknown NBFCs. Save screenshots of SMS alerts, loan app screens, and emails as proof.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Raise Online Bureau Disputes With Payout Info
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Log into the myCIBIL Dispute Center and select each fake entry under Enquiry Information. Add your bank account or UPI ID so the 30-day RBI penalty clock starts right away.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Email Each Lender Demanding Consent Proof
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Write to each bank or NBFC Grievance Redressal Officer directly. Cite CICRA Section 21 and RBI Digital Lending Directions. Demand your signed form or OTP log, or ask them to suppress the pull.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: File a Cyber Crime Report for PAN Fraud
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If strange loans or pulls show PAN identity theft, file an online complaint at cybercrime.gov.in. Attach the complaint number to your emails to the lender and CIBIL.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Audit Updated Report &amp; Escalate on Day 31
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check your updated free credit report once the dispute closes. If any bank rejects without valid proof or crosses 30 days, file a free case with the RBI Ombudsman on day 31.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Court Judgments & Borrower Legal Remedies */}
            <section id="court-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Statutory Relief</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Court Judgments &amp; Borrower Legal Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian High Courts and Consumer Commissions hold banks and credit bureaus liable when wrong credit records hurt a borrower. Note that standalone court orders solely on hard inquiries are rare. Instead, courts apply broader rules on privacy, negligence, and wrong CIBIL reporting.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the Consumer Protection Act, 2019, wrongful credit reporting and refusal to fix errors amount to a deficiency in service. You can claim damages for loan rejection losses and mental stress in addition to the RBI ₹100 daily penalty.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Supreme Court: Justice K.S. Puttaswamy (2017)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A 9-judge bench held that data privacy is a basic right under Article 21. Lenders cannot read your credit history without lawful grounds or clear consent.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Kerala HC: K. Venugopal Nair v. Canara Bank (2024)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In WP(C) No. 5339 of 2024, the bank cleared the loan status online. The Kerala High Court ordered TransUnion CIBIL to restore the borrower credit score right away.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>DCDRC Medak: Sangameshwar v. CIBIL &amp; Bajaj (2023)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Wrong CIBIL data led to loan rejections for the borrower. The Consumer Commission ordered both the NBFC and CIBIL to pay ₹5 lakh each for loss and mental stress.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>TN SCDRC: A.P. Suryaprakasam v. Kotak Prime (2015)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The State Commission found the lender guilty of a service lapse for wrong CIBIL reporting. It awarded damages for mental stress and harm to the borrower good name.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation: Lender GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation: Lender GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Since September 1, 2022, RBI brought all four credit bureaus under the Integrated Ombudsman Scheme (Notification CEPD.PRD.No.S544). Under Clause 15(2), the Ombudsman can award up to ₹20 lakh for actual loss plus up to ₹1 lakh for mental agony.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Authority to Contact</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">What Relief You Get</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO &amp; CIC</td>
                      <td className="p-3">Lender Grievance Officer + CIBIL Dispute Desk</td>
                      <td className="p-3 font-mono">Up to 21 + 9 Days</td>
                      <td className="p-3">Audits consent log, marks entry under dispute, and issues suppression note.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Bank / NBFC Head Office)</td>
                      <td className="p-3 font-mono">7 to 14 Days</td>
                      <td className="p-3">Reviews rogue DSA or app pulls and orders fast bureau purge.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI CMS Portal (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">After 30 Days</td>
                      <td className="p-3">Orders deletion, enforces ₹100/day penalty, and awards Clause 15(2) damages.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Dispute Milestones: Alert to Score Restoration */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Dispute Milestones: Alert to Score Restoration
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking each deadline stops banks from stalling your ticket. Keep all email dates and dispute IDs saved in one folder.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Regulatory Phase</th>
                      <th className="p-3">Lender / Bureau Duty</th>
                      <th className="p-3">Your Action Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0</td>
                      <td className="p-3 font-mono text-[11px]">SMS Alert &amp; Filing</td>
                      <td className="p-3">CIC sends mandatory SMS alert under RBI/2023-24/73.</td>
                      <td className="p-3">Pull all 4 bureau reports, file disputes, and email each lender GRO.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 21</td>
                      <td className="p-3 font-mono text-[11px]">Lender Consent Audit</td>
                      <td className="p-3">Bank or NBFC must verify OTP consent or send deletion order.</td>
                      <td className="p-3">Follow up in writing if the lender asks for extra time or gives vague replies.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 22 to 30</td>
                      <td className="p-3 font-mono text-[11px]">Bureau Suppression</td>
                      <td className="p-3">Bureau removes verified fake pulls and emails updated report.</td>
                      <td className="p-3">Check that every disputed bank name is gone from the Enquiry tab.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 31</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">₹100/Day Starts</td>
                      <td className="p-3">Statutory breach begins; daily ₹100 delay compensation accrues.</td>
                      <td className="p-3 font-bold text-amber-800">Escalate to Bank PNO and file RBI Ombudsman complaint online.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Within 5 Days Post-Fix</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Payout &amp; Sync</td>
                      <td className="p-3">Credits delay payout and syncs records in next 15-day cycle.</td>
                      <td className="p-3 font-bold text-slate-900">Confirm bank credit and check restored score across all 4 bureaus.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Common Mistakes & Special Dispute Scenarios */}
            <section id="common-mistakes-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Practical Precautions &amp; Edge Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Common Mistakes &amp; Special Dispute Scenarios
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers often lose valid disputes because of small mistakes. Avoid these traps to get unauthorized inquiries removed on the first try.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    Disputing Genuine Rejected Applications
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you applied for a loan yourself and got rejected, the bank holds your OTP consent. Disputing valid pulls wastes time and gets rejected under CICRA rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1886ff]" />
                    Duplicate Pulls From One Application
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sometimes an app glitch triggers 2 or 3 hard pulls from the same NBFC on the same day. You have the right to demand removal of all extra duplicate entries.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    BNPL &amp; Unknown Shadow NBFC Pulls
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Checking a Buy Now Pay Later limit often triggers pulls from partner NBFCs you never recognize. Audit the app privacy terms and demand removal if consent was unclear.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Ignoring Experian, Equifax &amp; CRIF
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cleaning only CIBIL leaves fake inquiries active on Experian, Equifax, and CRIF High Mark. Many top NBFCs reject loans based on CRIF or Experian inquiry counts.
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
                Frequently Asked Questions: CIBIL Hard Inquiries
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers to the most common questions on deleting fake CIBIL loan pulls, RBI delay penalties, and loan aggregator rules.
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
                Official Regulatory Citations &amp; Legal References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Sections 17, 18, 20, 21, and 23(2), read with Regulation 10 of the CIC Regulations, 2006.
                </li>
                <li>
                  <strong>RBI Circular RBI/2023-24/72 (DoR.FIN.REC.48/20.16.003/2023-24):</strong> Framework for Compensation to Customers for Delayed Updation or Rectification of Credit Information (₹100 per calendar day).
                </li>
                <li>
                  <strong>RBI Circular RBI/2023-24/73 (DoR.FIN.REC.49/20.16.003/2023-24):</strong> Strengthening of Customer Service by CICs and CIs (mandatory SMS and email alerts on report access).
                </li>
                <li>
                  <strong>RBI Master Direction RBI/DoR/2024-25/125 (January 6, 2025):</strong> Credit Information Reporting Directions, 2025, consolidating fortnightly updates (RBI/2024-25/60) and dispute rules.
                </li>
                <li>
                  <strong>RBI (Digital Lending) Directions, 2025 (RBI/2025-26/36, May 8, 2025):</strong> Explicit borrower consent and Paragraph 6 multi-lender aggregation rules (effective November 1, 2025).
                </li>
                <li>
                  <strong>Reserve Bank Integrated Ombudsman Scheme, 2021 &amp; DPDP Act, 2023:</strong> Notification CEPD.PRD.No.S544 (CIC inclusion from September 1, 2022), Clause 15(2) compensation, and DPDP Act Section 6 consent rules.
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
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Dispute Center</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
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
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹100/Day CIBIL Delay Rule
                  </Link>
                  <Link href="/cibil-dispute-wrong-overdue-entry-filing-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    CIBIL Wrong Overdue Dispute
                  </Link>
                  <Link href="/dpdp-act-2023-data-erasure-digital-personal-loan-apps" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    DPDP Act Loan App Data Erasure
                  </Link>
                  <Link href="/revoke-account-aggregator-consent-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Revoke Account Aggregator Consent
                  </Link>
                  <Link href="/bnpl-pay-later-shadow-nbfc-loan-entries-cibil-closure" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Close BNPL Shadow NBFC Entries
                  </Link>
                  <Link href="/why-does-my-credit-score-drop-even-though-i-pay-on-time" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Why Credit Scores Drop Unexpectedly
                  </Link>
                  <Link href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan KFS Hidden Fees
                  </Link>
                  <Link href="/rbi-digital-lending-rules-ban-on-accessing-contacts-photo-gallery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Digital Lending Privacy Rules
                  </Link>
                  <Link href="/services/credit-score-builder" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Score Builder Service
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
                Expert in CICRA 2005 disputes, RBI lending rules, and credit report repair. Helps Indian borrowers fix CIBIL errors and defend loan cases.
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
                  CIBIL DISPUTE &amp; LEGAL DESK
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Fake Loan Pulls Ruined Your CIBIL Score?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our team sends CICRA notices to each bank and demands consent logs. We help wipe fake hard pulls and claim your ₹100 daily RBI delay payout.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Start Free CIBIL Audit Now
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
                  <span><strong>4-Bureau Audit:</strong> CIBIL, Experian, Equifax, and CRIF cleanup.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Lender Consent Demand:</strong> Formal legal notices to Bank GROs and PNOs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI ₹100/Day Claim:</strong> Full tracking of the 30-day statutory clock.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombudsman Filing:</strong> End-to-end support on the RBI CMS portal.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Credit Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI ₹100/Day CIBIL Delay Penalty
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Claim daily delay relief &rarr;</span>
                </Link>

                <Link
                  href="/cibil-dispute-wrong-overdue-entry-filing-process"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Fix Wrong Overdue Entry on CIBIL
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Step-by-step dispute SOP &rarr;</span>
                </Link>

                <Link
                  href="/dpdp-act-2023-data-erasure-digital-personal-loan-apps"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    DPDP Act Data Erasure for Loan Apps
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop fintech data misuse &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
