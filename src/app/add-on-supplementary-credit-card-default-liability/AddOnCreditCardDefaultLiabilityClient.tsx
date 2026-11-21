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

export default function AddOnCreditCardDefaultLiabilityClient() {
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
    { id: 'statutory-framework', label: '1. RBI Law on Add-On Credit Cards' },
    { id: 'contractual-clauses', label: '2. Primary vs Add-On Contract Law' },
    { id: 'cibil-credit-impact', label: '3. CIBIL Score Impact & Disputes' },
    { id: 'court-precedents', label: '4. Court Rulings & Precedents' },
    { id: 'visual-blueprint', label: '5. Visual Liability Blueprint' },
    { id: 'specialized-scenarios', label: '6. Divorce, Death & Family Disputes' },
    { id: 'closure-penalties', label: '7. 7-Day Card Closure & ₹500 Rule' },
    { id: 'step-by-step-sop', label: '8. Step-by-Step Resolution SOP' },
    { id: 'escalation-matrix', label: '9. 3-Tier RBI Escalation Matrix' },
    { id: 'procedural-timeline', label: '10. Default to Settlement Timeline' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Who must pay when an add-on credit card goes into default in India?',
      a: 'Under Chapter I, Paragraph 3(a)(i) of the RBI Master Direction on Credit Cards (2022), the primary cardholder owes 100% of the bill. This covers all swipes, EMIs, interest, and late fees on every add-on card.'
    },
    {
      q: 'Does an add-on credit card default hurt the add-on user CIBIL score?',
      a: 'No. The card account is linked only to the primary holder PAN and income. Missed bills hurt only the primary holder CIBIL score. If a bank wrongly marks the add-on user PAN, you can dispute it under CICRA 2005.'
    },
    {
      q: 'Can bank agents force an add-on cardholder to pay overdue bills?',
      a: 'No. Agents cannot force or harass an add-on user to pay from personal funds. Under RBI Fair Practices rules and Supreme Court orders, threatening family members is illegal. You can file a complaint with the RBI Ombudsman.'
    },
    {
      q: 'Does an add-on user have to pay if the primary cardholder dies?',
      a: 'No. When a primary holder dies, the add-on user owes nothing from personal income or savings. Under Section 50 of the Code of Civil Procedure, banks can claim dues only from assets left in the deceased estate.'
    },
    {
      q: 'Who pays add-on credit card bills swiped by an ex-spouse during divorce?',
      a: 'To the bank, the primary holder must pay for every swipe made before the add-on card is blocked. Family court divorce orders do not bind banks. Block the add-on card right away and claim the sum in family court.'
    },
    {
      q: 'Can a bank freeze the add-on user savings account for card default?',
      a: 'No. A bank right of lien under Section 171 of the Indian Contract Act applies only to accounts owned by the primary debtor. The bank cannot touch a personal savings or salary account owned solely by the add-on user.'
    },
    {
      q: 'What is the RBI ₹100 per day rule for wrong CIBIL tags on add-on cards?',
      a: 'Under RBI Circular RBI/2023-24/72, banks and credit bureaus must fix wrong CIBIL entries within 30 calendar days of your complaint. If they take longer than 30 days, they must pay you ₹100 for each extra day.'
    },
    {
      q: 'How fast must a bank close an add-on or primary credit card on request?',
      a: 'Either the primary holder or the add-on user can block an add-on card at once. For full closure with zero dues, RBI rules give the bank 7 working days. Delays past 7 days carry a ₹500 daily penalty.'
    },
    {
      q: 'Can primary and add-on card dues be settled together in One-Time Settlement?',
      a: 'Yes. Add-on cards share one credit limit and one bill with the primary card. In a One-Time Settlement (OTS), one agreed payment clears both primary and add-on dues under a single No Dues Certificate.'
    },
    {
      q: 'What if online fraud happens on an add-on credit card?',
      a: 'Under the RBI 2017 Electronic Banking Circular, report any fraud on an add-on card within 3 working days. When there is no cardholder fault, you have zero liability and the bank must reverse the charge.'
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
            <span>RBI Credit Card Master Direction 2022 &amp; Debt Defense Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Who Is Liable for Supplementary Credit Card Default?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            RBI rules place 100% bill liability on the primary credit card holder. Learn how to protect your CIBIL score, stop agent calls to family, and settle heavy add-on card debt legally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Resolve Add-On Card Debt</span>
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
                  <span>Statutory Cardholder Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Master Direction 2022, CICRA 2005, and CPC Section 50.
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
                <span>EXECUTIVE BRIEF: ADD-ON CREDIT CARD LIABILITY RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">100% Primary Holder Debt:</strong> Under RBI rules, every swipe, EMI, fee, and interest charge on an add-on card must be paid by the primary cardholder.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">CIBIL Impact &amp; ₹100/Day Rule:</strong> Default hits the primary PAN. If a bank wrongly reports an add-on user on CIBIL, delays past 30 days earn ₹100 per day.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Death of Primary Holder:</strong> Add-on users never pay from their own pocket. Under Section 50 CPC, banks can claim dues only from the deceased estate.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Divorce Does Not Bind Banks:</strong> Family court terms do not change your bank contract. Block spouse add-on cards right away to stop fresh debt.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Single One-Time Settlement:</strong> Primary and add-on card dues merge into one account. You can settle the combined bill for 40% to 70% relief via OTS.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: RBI Master Direction on Add-On Credit Card Liability */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Central Bank Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Master Direction on Add-On Credit Card Liability
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many people in India give add-on credit cards to a spouse, parent, or child. Trouble starts when heavy spending, job loss, or a family fight leads to missed bills. Both users then ask who the bank can legally force to pay.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India answers this in its 2022 Credit Card Master Direction. Circular DoR.AUT.REC.No.27/24.01.041/2022-23 sets binding rules for all banks and card issuers in India. Chapter I, Paragraph 3(a)(i) defines an add-on card in clear terms.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                An add-on card is a supplementary card tied to the main credit card. It works strictly inside the credit limit and debt liability of the primary holder. The bank grants this limit based only on the primary holder income and KYC papers.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Because of this rule, the primary cardholder owes 100% of the unpaid bill. Even if your family member spent money without asking you, the bank will claim it from you. RBI rules also require the primary holder written consent before a bank issues any add-on card.
              </p>
            </section>

            {/* SECTION 2: Primary vs Add-On Holder: Contract Law and Clauses */}
            <section id="contractual-clauses" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Privity of Contract &amp; MITC Fine Print</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Primary vs Add-On Holder: Contract Law and Clauses
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the Indian Contract Act of 1872, a contract binds only the people who sign it. Lawyers call this privity of contract. For a credit card, only the primary holder signs the main credit contract with the bank.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Some banks add fine print in their Most Important Terms and Conditions (MITC). These lines claim that add-on users share joint liability for swipes on their card. Recovery agents often read out this fine print to scare spouses or young students.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Yet RBI rules and consumer courts treat an add-on user very differently from a loan co-borrower. An add-on user does not own the credit line and gets no separate bill. The table below shows how Indian law treats each person during default.
              </p>

              {/* Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Legal Liability Matrix: Primary vs Add-On vs Co-Borrower</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">RBI Para 3(a)(i) Standard</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[580px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Legal Parameter</th>
                        <th className="p-3">Primary Cardholder</th>
                        <th className="p-3">Add-On Card User</th>
                        <th className="p-3">Joint Loan Co-Borrower</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Repayment Liability</td>
                        <td className="p-3 text-rose-700 font-bold">100% Principal Debtor</td>
                        <td className="p-3 text-emerald-700 font-semibold">Authorized User Only</td>
                        <td className="p-3 text-rose-700 font-semibold">100% Joint &amp; Several</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Credit Limit Ownership</td>
                        <td className="p-3">Owns Sanctioned Limit</td>
                        <td className="p-3">Shares Primary Sub-Limit</td>
                        <td className="p-3">Co-Owns Loan Sanction</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">PAN &amp; CIBIL Impact</td>
                        <td className="p-3 text-rose-700 font-semibold">Direct Score Drop on Default</td>
                        <td className="p-3 text-emerald-700 font-semibold">No Score Impact (If Valid)</td>
                        <td className="p-3 text-rose-700 font-semibold">Both PANs Hit Equally</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Bank Savings Lien (Sec 171)</td>
                        <td className="p-3">Applicable on Own Account</td>
                        <td className="p-3 text-emerald-700 font-semibold">Exempt From Bank Set-Off</td>
                        <td className="p-3">Applicable on Co-Owner</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-semibold text-slate-900">
                        <td className="p-3">OTS Settlement Power</td>
                        <td className="p-3 text-[#1886ff]">Sole Signatory for OTS &amp; NOC</td>
                        <td className="p-3 text-slate-600">Cannot Settle Alone</td>
                        <td className="p-3 text-[#1886ff]">Joint OTS Release Needed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: CIBIL Score Impact and Wrongful Reporting Remedies */}
            <section id="cibil-credit-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Rules &amp; CICRA 2005</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. CIBIL Score Impact and Wrongful Reporting Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every swipe on an add-on card uses up the credit limit of the primary holder. When total spending passes 30% of the card limit, the primary CIBIL score starts to drop. If the bill stays unpaid, the default is recorded against the primary holder PAN.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI update of March 7, 2024 (Circular RBI/2023-24/132), banks must give a 3-day grace window past the due date. A bank can report a card as past due to CIBIL, Experian, Equifax, or CRIF only after three unpaid days pass.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Normally, an add-on card does not show up on the add-on user credit report. Still, banks sometimes take KYC for an add-on card and wrongly link a default to the add-on PAN. This mistake can block your spouse or child from getting future loans.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under CICRA 2005 and RBI Circular RBI/2023-24/72, wrong CIBIL entries must be removed within 30 days. The bank gets 21 days to check files, and the bureau gets 9 days to fix the report. Delays past Day 30 earn the victim ₹100 per day in compensation. Read our <Link href="/how-does-settling-a-loan-impact-my-cibil-credit-score" className="text-[#1886ff] hover:underline font-semibold">CIBIL settlement score guide</Link> to learn how to rebuild credit.
              </p>

              {/* Representative Compensation & Impact Ledger */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Wrongful Add-On CIBIL Dispute &amp; Compensation Timeline</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">RBI/2023-24/72 Mandate</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Dispute Window</th>
                        <th className="p-3">Responsible Entity</th>
                        <th className="p-3">Statutory Duty</th>
                        <th className="p-3 text-right">Compensation to Add-On User</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 1 to Day 21</td>
                        <td className="p-3">Card Issuing Bank</td>
                        <td className="p-3 text-emerald-600 font-semibold">Verify Add-On Status &amp; Detach PAN</td>
                        <td className="p-3 text-right font-bold text-slate-500">₹0 (Statutory Window)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 22 to Day 30</td>
                        <td className="p-3">CIBIL / Credit Bureau</td>
                        <td className="p-3 text-emerald-600 font-semibold">Delete Wrongful Default Entry</td>
                        <td className="p-3 text-right font-bold text-slate-500">₹0 (Statutory Window)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 45 (15 Days Late)</td>
                        <td className="p-3">Delaying Bank or Bureau</td>
                        <td className="p-3 text-amber-600 font-semibold">Breach of 30-Day CICRA Rule</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">₹1,500</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Day 90 (60 Days Late)</td>
                        <td className="p-3 text-[#1886ff]">Ombudsman Escalation</td>
                        <td className="p-3 text-[#1886ff]">Mandatory UPI / Bank Credit in 5 Days</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹6,000 + Tort Damages</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Consumer Commission and Court Precedents in India */}
            <section id="court-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Borrower Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Consumer Commission and Court Precedents in India
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts treat credit card debt as a civil money matter. Police cannot arrest the primary holder or the add-on user just because a card bill is unpaid. Check our guide on <Link href="/can-i-go-to-jail-for-credit-card-debt" className="text-[#1886ff] hover:underline font-semibold">whether you can go to jail for credit card debt</Link> to know your legal shield.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Supreme Court rulings and National Consumer Commission (NCDRC) orders also protect families from rough agents and online card fraud.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>SC: ICICI Bank Ltd. v. Prakash Kaur (2007)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court barred banks from sending musclemen or abusive recovery agents. Banks must collect unpaid card dues only through lawful civil court steps.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Privacy Shield for Family &amp; Add-On Users</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Fair Practices rules, agents cannot call before 8:00 AM or after 7:00 PM. They also cannot shame spouses, parents, or add-on users at home or work.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Consumer Act 2019: Deficiency in Service</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 2(11) of the Consumer Protection Act, 2019, consumer courts fine banks that harass non-liable add-on users or harm their CIBIL reports.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>RBI Zero Liability on Add-On Fraud (2017)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If phishing or card cloning hits an add-on card, report it within 3 working days. You get zero liability under RBI rules, and the bank must prove any fault.
                  </p>
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
                5. Visual Blueprint: Add-On Card Default and Liability
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This chart shows how RBI rules link an add-on card to the main card account and place 100% repayment duty on the primary cardholder.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/add-on-supplementary-credit-card-default-liability.jpg"
                    alt="Add-On Credit Card Default Primary Holder Liability Under RBI Rules"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Credit Card Liability Framework • RBI Master Direction 2022 Compliant</span>
                  <a
                    href="/images/infographics/add-on-supplementary-credit-card-default-liability.jpg"
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

            {/* SECTION 6: Divorce, Death of Primary Holder, and Family Disputes */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Divorce, Death of Primary Holder, and Family Disputes
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most add-on card defaults start during hard life events like a death in the family, a divorce, or heavy spending by a child. Here is how Indian law handles each case.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Death of Primary Cardholder (Section 50 CPC)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a primary holder dies, the spouse or child with an add-on card owes nothing from personal earnings. Under Section 50 and Section 52 of the Code of Civil Procedure, banks can claim dues only from assets left by the deceased. Read our <Link href="/loan-recovery-after-death-of-borrower-legal-heir-rights-india" className="text-[#1886ff] hover:underline font-semibold">deceased borrower heir rights guide</Link>.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Divorce &amp; Estranged Spouse Card Swipes
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A family court divorce order does not bind your bank because the bank was not part of your marriage case. The primary spouse must still pay the bank for swipes made before blocking the add-on card. You can then claim that money back in family court.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Bank Set-Off Lien on Savings Accounts
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 171 of the Indian Contract Act, a bank can place a hold only on deposits owned by the primary debtor. The bank cannot freeze or cut money from the add-on user personal salary account. See our <Link href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act" className="text-[#1886ff] hover:underline font-semibold">Section 171 bank set-off guide</Link>.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Unbilled Merchant EMIs on Add-On Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a relative bought phones or tickets on EMI with the add-on card, default cancels the EMI plan. All unpaid principal instalments get added straight to the primary card bill as one combined sum.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Blocking Add-On Cards and RBI 7-Day Closure Penalty */}
            <section id="closure-penalties" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Card Cancellation Rules &amp; Common Mistakes</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Blocking Add-On Cards and RBI 7-Day Closure Penalty
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many primary holders make costly mistakes when an add-on card bill grows too large. Never just delete the card app without closing the add-on card. Saved online tokens and app plans will keep charging your monthly bill.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI rules, either the primary holder or the add-on user can block an add-on card at once. You can use the mobile app, net banking, IVR, or phone helpline. Banks cannot force you to send paper letters by post.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once all dues are paid or settled, the bank must close a credit card within 7 working days. If the bank delays past 7 working days on a zero-balance card, RBI rules impose a ₹500 per day penalty payable to you.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Also stay clear of the <Link href="/credit-card-minimum-due-trap" className="text-[#1886ff] hover:underline font-semibold">credit card minimum due trap</Link>. Paying just 5% Minimum Amount Due leaves 95% of your bill growing at 36% to 45% yearly interest plus 18% GST. That can double your debt in two years.
              </p>
            </section>

            {/* SECTION 8: Step-by-Step SOP to Resolve Add-On Credit Card Debt */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Step-by-Step SOP to Resolve Add-On Credit Card Debt
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six clear steps to stop new add-on charges, shield your family from agent calls, and close heavy credit card bills.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Block All Add-On Cards and Saved Tokens
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Open your bank app or call customer care to close every add-on card for good. Delete saved card tokens on SI-Hub so auto-pay charges stop right away.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Split Real Spending From Interest and Fees
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your past twelve card bills. Add up real swipes on both primary and add-on cards, and separate them from 42% interest, late fees, and 18% GST.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Check Both Credit Reports for Errors
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pull CIBIL and Experian reports for both the primary holder and the add-on user. If the bank marked the add-on PAN in default, send a 30-day CICRA dispute notice.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Protect Salary Cash and Stop Agent Calls
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Keep the primary holder living money in a separate bank to avoid Section 171 hold cuts. Send a legal warning if agents call your family. Learn how to <Link href="/stop-credit-card-recovery-calls" className="text-[#1886ff] hover:underline font-semibold">stop credit card recovery calls</Link>.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Request One-Time Settlement (OTS) on Main Account
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once the card crosses 90 days unpaid and turns NPA, ask the bank nodal desk for a single <Link href="/services/credit-card-settlement" className="text-[#1886ff] hover:underline font-semibold">credit card settlement</Link> covering both primary and add-on balances.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Check OTS Letter and Collect Final NOC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Always <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[#1886ff] hover:underline font-semibold">verify the bank OTS letter</Link> before you pay into the card account. Collect your <Link href="/get-noc-after-loan-settlement" className="text-[#1886ff] hover:underline font-semibold">No Dues Certificate</Link> and check CIBIL after 15 to 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If agents trouble your family, delay card closure, or mark an add-on PAN on CIBIL, use this official three-step RBI complaint path.
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
                      <td className="p-3">Card Issuer Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Blocks add-on cards, logs fraud claims, and stops agent calls to relatives.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Calendar Days</td>
                      <td className="p-3">Removes wrong add-on CIBIL tags, clears OTS terms, and checks ₹500/day delays.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-Complaint</td>
                      <td className="p-3">Passes binding orders on cms.rbi.org.in for ₹100/day CIBIL delays and harassment.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Procedural Timeline: Card Default to Debt Closure */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Procedural Timeline: Card Default to Debt Closure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing the <Link href="/credit-card-npa-timeline" className="text-[#1886ff] hover:underline font-semibold">credit card NPA timeline</Link> helps primary holders stay calm at each stage and secure strong fee waivers.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Days Past Due (DPD)</th>
                      <th className="p-3">Account Classification</th>
                      <th className="p-3">Bank Action on Primary &amp; Add-On</th>
                      <th className="p-3">Recommended Cardholder Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to Day 3</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">RBI 3-Day Buffer</td>
                      <td className="p-3">No late fee or CIBIL past-due tag allowed during these 3 days.</td>
                      <td className="p-3">Pay bill if short delay; block add-on card if misused.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 4 to Day 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0 Stage</td>
                      <td className="p-3">Late fees, 3.5% monthly interest, and reminder alerts start.</td>
                      <td className="p-3">Check combined statement and cancel standing instructions.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to Day 89</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">SMA-1 / SMA-2</td>
                      <td className="p-3">Both primary and add-on cards blocked; active EMIs foreclosed.</td>
                      <td className="p-3">Keep hardship proof ready and reply to <Link href="/credit-card-legal-notice-process-next-steps" className="text-[#1886ff] hover:underline font-semibold">card legal notices</Link>.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 90+</td>
                      <td className="p-3 font-mono text-[11px] text-rose-700 font-bold">NPA Classification</td>
                      <td className="p-3">Account marked Non-Performing Asset; recall notice sent to primary holder.</td>
                      <td className="p-3 font-bold text-amber-800">Start One-Time Settlement talks with the bank nodal team.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 120 to 180+</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">OTS &amp; Closure</td>
                      <td className="p-3">Bank waives added interest and late fees under its OTS policy.</td>
                      <td className="p-3 font-bold text-slate-900">Pay verified OTS sum, collect NOC, and check 15-day CIBIL update.</td>
                    </tr>
                  </tbody>
                </table>
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
                Frequently Asked Questions: Add-On Credit Card Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Simple, verified legal answers on primary holder debt, add-on user CIBIL safety, death of a cardholder, divorce bills, and credit card settlement in India.
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
                Official Regulatory Citations and Statutory References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Credit Card Master Direction (2022):</strong> Circular RBI/2022-23/92, DoR.AUT.REC.No.27/24.01.041/2022-23, Chapter I, Para 3(a)(i), updated March 7, 2024 (RBI/2023-24/132).
                </li>
                <li>
                  <strong>RBI Credit Report Compensation Rule:</strong> Circular RBI/2023-24/72, DoR.FIN.REC.49/20.16.003/2023-24 (₹100 per day payout for CIBIL delays past 30 days).
                </li>
                <li>
                  <strong>Credit Information Companies Act, 2005 (CICRA):</strong> Section 21, 30-day rule to fix wrong credit report entries.
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 &amp; Contract Act, 1872:</strong> Section 50 &amp; Section 52 CPC (Estate limit on legal heirs) and Section 171 Contract Act (Banker lien scope).
                </li>
                <li>
                  <strong>Supreme Court &amp; Consumer Law:</strong> Manager, ICICI Bank Ltd. v. Prakash Kaur (2007) 2 SCC 711; Consumer Protection Act, 2019, Section 2(11); RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18 (Zero liability on card fraud).
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
                  <a href="https://www.cibil.com/dispute" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>CIBIL Official Dispute Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="http://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Disputes Redressal Commission</span>
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
                    Credit Card Settlement Services
                  </Link>
                  <Link href="/credit-card-settlement-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Process
                  </Link>
                  <Link href="/credit-card-minimum-due-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Minimum Due Trap
                  </Link>
                  <Link href="/credit-card-npa-timeline" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card NPA Timeline
                  </Link>
                  <Link href="/stop-credit-card-recovery-calls" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Credit Card Recovery Calls
                  </Link>
                  <Link href="/can-i-go-to-jail-for-credit-card-debt" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can You Go to Jail for Card Debt?
                  </Link>
                  <Link href="/loan-recovery-after-death-of-borrower-legal-heir-rights-india" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Deceased Borrower Heir Rights
                  </Link>
                  <Link href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 171 Bank Set-Off Rules
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
                Expert in RBI credit card rules, borrower legal defense, CIBIL error fixes, and One-Time Settlement talks with major Indian banks.
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
                  CARD DEBT DEFENSE DESK
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Stuck With Unpaid Add-On Credit Card Dues?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team stops agent calls to your family, clears wrong add-on CIBIL tags, and secures 40% to 70% OTS waivers on combined bills.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Legal Assessment
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
                  <span><strong>Family Call Shield:</strong> Fast legal stop on calling add-on users.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Single Card Settlement:</strong> One OTS clears primary and add-on dues.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Wrong CIBIL Fix:</strong> 30-day CICRA removal &amp; ₹100/day claim.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Checked NOC Closure:</strong> Bank OTS letter audit before you pay.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/services/credit-card-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Debt Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Official OTS waiver program &rarr;</span>
                </Link>

                <Link
                  href="/stop-credit-card-recovery-calls"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Stop Credit Card Recovery Calls
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI Fair Practices protection &rarr;</span>
                </Link>

                <Link
                  href="/loan-recovery-after-death-of-borrower-legal-heir-rights-india"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Deceased Borrower Legal Heir Rights
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Section 50 CPC estate limit &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
