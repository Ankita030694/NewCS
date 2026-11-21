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
  Calendar,
  CreditCard
} from 'lucide-react';

export default function BankVoucherClawbackClient() {
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
    { id: 'clawback-mechanics', label: '1. Welcome Voucher Clawback Mechanics' },
    { id: 'rbi-master-directions', label: '2. RBI Master Directions & Protections' },
    { id: 'settlement-inflation', label: '3. Settlement Ledger Debits & Inflation' },
    { id: 'contract-law-cpa', label: '4. Contract Law & CPA 2019 Protections' },
    { id: 'comparison-matrix', label: '5. Clawbacks vs Legitimate Bank Dues' },
    { id: 'visual-blueprint', label: 'Visual Blueprint Infographic' },
    { id: 'dispute-sop', label: '6. Step-by-Step Clawback Dispute SOP' },
    { id: 'cibil-protection', label: '7. CIBIL Error Defense & Rectification' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Procedural Timeline & Milestones' },
    { id: 'real-world-scenarios', label: '10. Real-World Case Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is a credit card welcome voucher and cashback clawback?',
      a: 'A credit card clawback is a retroactive debit where the card issuer charges the rupee value of promotional welcome vouchers, gift cards, bonus reward points, or cashback back to the cardholder account, typically triggered upon early card cancellation or during debt settlement.'
    },
    {
      q: 'Can a bank claw back welcome vouchers if I paid the card joining fee?',
      a: 'No. If you paid a non-refundable joining or annual fee that entitled you to the welcome voucher, the voucher represents valid contractual consideration under Section 2(d) of the Indian Contract Act, 1872. The bank cannot claw back its value upon early closure unless explicit, pre-agreed fraud terms apply.'
    },
    {
      q: 'Does the RBI allow banks to add voucher clawbacks during loan settlement?',
      a: 'No. Under the RBI Master Direction on Credit Card Conduct (2022) and the Fair Practices Code, lenders cannot artificially inflate outstanding settlement balances with retroactive promotional debits. Settlement terms must be based on genuine principal dues and contractually authorized fees disclosed upfront in the MITC.'
    },
    {
      q: 'Can a bank refuse to close my credit card over disputed clawback charges?',
      a: 'Under Section 8 of the RBI Master Direction 2022, card issuers must complete card closure within 7 working days of receiving a request, subject to clearance of legitimate dues. Banks cannot generate bogus or disputed clawback debits to delay closure; failing to close incurs an RBI penalty of ₹500 per day.'
    },
    {
      q: 'What happens if cashback clawback pushes my card balance into negative or overlimit?',
      a: 'If a bank retroactively claws back promotional cashback (for instance, following transaction refunds) and causes an overlimit condition, it cannot levy overlimit fees or penal interest without prior customer consent, in strict compliance with RBI credit card conduct regulations.'
    },
    {
      q: 'Can a bank debit my savings account for credit card voucher clawbacks?',
      a: 'While banks claim a general lien under Section 171 of the Indian Contract Act, judicial precedents from High Courts establish that banker set-off cannot be exercised arbitrarily over disputed, unliquidated claims or without prior written notice and opportunity to contest.'
    },
    {
      q: 'Will a disputed voucher clawback affect my CIBIL score?',
      a: 'If an issuer reports an unpaid clawback debit as overdue or delinquent, it harms your credit score. However, under Credit Information Companies (Regulation) Act (CICRA) rules and RBI directives, cardholders can formally dispute the unauthorized reporting and demand bureau rectification within 30 days.'
    },
    {
      q: 'Is retroactive voucher clawback considered an unfair trade practice?',
      a: 'Yes. Under Section 2(46) and Section 2(47) of the Consumer Protection Act, 2019, luring customers with free welcome gifts and subsequently billing them upon cancellation without prominent upfront MITC disclosure constitutes an unfair contract and unfair trade practice.'
    },
    {
      q: 'How can I ensure voucher clawbacks are waived during a credit card OTS?',
      a: 'Ensure your written One-Time Settlement (OTS) sanction letter explicitly includes a comprehensive waiver clause stating that all promotional debits, voucher clawbacks, finance charges, and penal fees are extinguished, and that an unconditional No Dues Certificate (NDC) will be issued.'
    },
    {
      q: 'How does CredSettle help borrowers facing unfair voucher and cashback clawbacks?',
      a: 'CredSettle audits credit card ledgers to identify bogus debits, drafts statutory dispute notices citing RBI Master Directions, negotiates clean settlements eliminating clawbacks, and files escalations before the RBI Integrated Ombudsman and Consumer Commissions.'
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
            <span>RBI Master Direction 2022 &amp; Consumer Protection Compliance</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Disputing Reward &amp; Voucher Clawbacks in Card Closure
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Understand your rights when banks attempt to claw back promotional welcome vouchers or cashback during card cancellation or debt settlement. Stop illegal ledger inflation, protect your CIBIL score, and secure unconditional closure under RBI rules.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Dispute Unfair Card Clawbacks</span>
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
                  Protected under RBI Master Direction 2022 and Consumer Protection Act, 2019.
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
                <span>EXECUTIVE BRIEF: VOUCHER &amp; CASHBACK CLAWBACK RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Unilateral Debits Prohibited:</strong> Banks cannot retroactively bill cardholders for welcome vouchers or promotional rewards without clear upfront contractual terms in the Most Important Terms and Conditions (MITC).
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Joining Fee Consideration:</strong> If you paid a joining or renewal fee, welcome vouchers constitute contractual consideration under Section 2(d) of the Contract Act and cannot be recovered on early closure.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">7-Day Mandatory Closure:</strong> Under Section 8 of the RBI Master Direction 2022, banks must close credit cards within seven working days of request. Unresolved clawback claims cannot be used as an excuse to block closure.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Settlement Ledger Inflation:</strong> Lenders often attempt to resurrect past vouchers or promotional cashbacks to inflate total ledger balances during One-Time Settlement (OTS). Genuine settlements must focus strictly on true principal dues.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Statutory Escalation:</strong> Unfair clawback debits and unauthorized set-offs can be challenged directly through the Bank Principal Nodal Officer and escalated to the RBI Integrated Ombudsman for full reversal.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Welcome Voucher Clawback: Banking Mechanics Explained */}
            <section id="clawback-mechanics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Commercial Tactics &amp; Operational Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Welcome Voucher Clawback: Banking Mechanics Explained
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many credit card issuers in India attract new customers by offering attractive welcome gifts. These include e-commerce shopping vouchers worth ₹2,000 to ₹10,000, airline companion tickets, hotel booking points, or introductory cashback bonuses. Customers frequently receive these perks upon card activation or after spending an initial threshold.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Trouble starts when a cardholder decides to cancel the card within the first year or enters debt settlement. Banks often hit back by debiting the full cash equivalent of the welcome gift directly to the card statement. This banking maneuver is known as a voucher or cashback clawback.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The bank creates an unexpected debit balance on an account that the customer thought was completely settled or closed. When the cardholder refuses to pay this surprise charge, the bank levies finance charges of up to 42% per annum, slaps on late payment fees, and reports the account as overdue to credit bureaus like CIBIL.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding whether this clawback is legally enforceable requires examining Reserve Bank of India directives, the Indian Contract Act, and consumer protection laws. In most routine cases, retroactive clawbacks imposed without explicit upfront disclosure represent an illegal and unfair trade practice.
              </p>
            </section>

            {/* SECTION 2: RBI Master Directions: Cardholder Protection Mandates */}
            <section id="rbi-master-directions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Regulatory Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI Master Directions: Cardholder Protection Mandates
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The primary regulatory shield for Indian cardholders is the <strong>RBI Master Direction on Credit Card and Debit Card Issuance and Conduct Directions, 2022</strong>. This regulatory framework sets binding standards on fees, billing disclosures, reward programs, and card closure protocols.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 5(b) of the Master Direction, card issuers must furnish the Most Important Terms and Conditions (MITC) to borrowers in clear, legible font. Any condition that allows a bank to claw back welcome benefits, charge cancellation penalties, or forfeit earned rewards must be highlighted prominently before card onboarding.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Furthermore, Section 8 of the Master Direction governs credit card closure. It states that card issuers must honor any closure request within seven working days, provided all legitimate dues have been cleared. Crucially, card issuers are strictly prohibited from generating bogus or unexpected post-closure debits to delay account termination.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a bank fails to close the credit card account within seven working days after the customer has paid genuine outstanding dues, the bank must pay a mandatory statutory penalty of ₹500 per calendar day of delay to the customer until the account is closed.
              </p>
            </section>

            {/* SECTION 3: Settlement Inflation: Artificially Added Ledger Debits */}
            <section id="settlement-inflation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Debt Resolution Ledger Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Settlement Inflation: Artificially Added Ledger Debits
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During distressed loan recovery and One-Time Settlement (OTS) negotiations, banks and recovery agencies frequently use clawbacks as leverage. When a borrower faces financial hardship and requests a debt settlement, recovery managers often reopen historical records to inflate the outstanding ledger.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                They add back the rupee value of shopping vouchers, introductory reward points, and fee waivers granted months or years earlier. For example, if your actual spend principal is ₹1,00,000, the bank might add ₹10,000 for a welcome gift card, plus compound interest and GST, inflating the claim to ₹1,65,000.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This artificial ledger inflation is designed to make any compromise settlement appear generous while ensuring the bank recovers promotional perks. Under the RBI Fair Practices Code for Lenders, banks must provide a transparent, itemized ledger distinguishing actual purchase principal from discretionary fees and promotional reversals.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When negotiating a debt settlement through CredSettle, our legal team ensures that all retroactive clawback entries and administrative fees are stripped out. Settlements are negotiated strictly on true principal balances, and the final OTS letter must explicitly extinguish all promotional claims.
              </p>
            </section>

            {/* SECTION 4: Contract Law & Unfair Trade Practices Under CPA 2019 */}
            <section id="contract-law-cpa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Consumer Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Contract Law &amp; Unfair Trade Practices Under CPA 2019
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Beyond banking circulars, retroactive voucher clawbacks run counter to fundamental principles of Indian contract and consumer protection law.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 2(d) and Section 25 of the <strong>Indian Contract Act, 1872</strong>, a contract requires valid consideration. When a cardholder pays a joining fee of ₹1,000 or ₹5,000, that payment serves as consideration for both card issuance and the welcome voucher. Once the bank accepts and retains that joining fee, the gift card is not a free giveaway. It is a paid contractual benefit that cannot be clawed back upon termination.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Furthermore, under Section 73 and Section 74 of the Contract Act, a party cannot levy punitive damages for terminating an open-ended agreement. If the card contract allows termination by customer notice, imposing a financial penalty disguised as a voucher recovery represents an unenforceable liquidated penalty.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the <strong>Consumer Protection Act, 2019</strong>, such conduct violates two key provisions:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Unfair Contract: Section 2(46)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Clauses that impose unreasonable detriments or arbitrary termination penalties on consumers without reciprocal obligations are legally void as unfair contractual terms.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Unfair Trade Practice: Section 2(47)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Luring customers with free gifts and later billing them upon card closure without upfront disclosure constitutes a deceptive and actionable unfair trade practice.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 5: Voucher Clawback vs Legitimate Bank Dues Comparison */}
            <section id="comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Analytical Distinction Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Voucher Clawback vs Legitimate Bank Dues Comparison
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To successfully dispute unfair charges, you must clearly distinguish between valid credit card obligations and unauthorized clawback debits. The table below outlines how these charges compare under Indian regulatory standards.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Credit Card Billing Dispute Classification</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">RBI &amp; CPA Regulatory Benchmark</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[600px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Billing Element</th>
                        <th className="p-3">Legitimate Dues</th>
                        <th className="p-3">Unlawful Clawback Debits</th>
                        <th className="p-3">Legal Enforceability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Purchase Principal</td>
                        <td className="p-3">Actual merchant swipes &amp; online orders</td>
                        <td className="p-3 text-rose-600 font-medium">Added rupee value of gifts or vouchers</td>
                        <td className="p-3 font-semibold text-emerald-700">Only actual swipes are payable</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Welcome Benefits</td>
                        <td className="p-3">Provided against joining fee payment</td>
                        <td className="p-3 text-rose-600 font-medium">Retroactively billed upon early card closure</td>
                        <td className="p-3 font-semibold text-rose-700">Clawback is void without explicit MITC</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Cashback on Refunds</td>
                        <td className="p-3">Adjusted if underlying purchase is refunded</td>
                        <td className="p-3 text-rose-600 font-medium">Overlimit fees levied when clawback pushes negative</td>
                        <td className="p-3 font-semibold text-amber-700">Overlimit fees require consent</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Card Closure Timeline</td>
                        <td className="p-3">Closed in 7 working days once dues cleared</td>
                        <td className="p-3 text-rose-600 font-medium">Blocked indefinitely citing voucher disputes</td>
                        <td className="p-3 font-semibold text-rose-700">Triggers ₹500/day bank penalty</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Settlement / OTS</td>
                        <td className="p-3">Waiver applied on genuine principal</td>
                        <td className="p-3 text-[#1886ff]">Artificial inflation with expired promotions</td>
                        <td className="p-3 text-[#1886ff]">Must be completely waived in OTS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Blueprint: Card Clawback Defense Architecture
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This blueprint illustrates the complete workflow for disputing unauthorized credit card voucher clawbacks, enforcing mandatory closure timelines, and negotiating clean debt settlements.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/bank-clawback-credit-card-welcome-vouchers-settlement.jpg"
                    alt="Disputing Credit Card Voucher and Cashback Clawbacks in Settlement"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Cardholder Protection Framework • RBI Master Direction 2022 Compliant</span>
                  <a
                    href="/images/infographics/bank-clawback-credit-card-welcome-vouchers-settlement.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Disputing Unlawful Voucher Clawbacks */}
            <section id="dispute-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Disputing Unlawful Voucher Clawbacks
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your card issuer has debited a voucher clawback to your statement or is holding up card closure, follow this six-stage legal procedure to protect your finances.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Demand Complete Itemized Ledger and MITC Copy
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Request an itemized billing statement isolating the disputed clawback debit from genuine merchant swipes. Demand a certified copy of the Most Important Terms and Conditions (MITC) signed or accepted during onboarding.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Pay Genuine Undisputed Principal Dues
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Clear any genuine merchant transactions to eliminate legitimate interest accruals. State clearly in writing that the payment covers verified merchant principal and that the clawback charge is formally disputed.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Issue Formal Dispute Letter to Bank Nodal Officer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submit a formal written dispute to the bank Grievance Redressal Officer citing Section 5 and Section 8 of the RBI Master Direction 2022. Demand immediate reversal of the clawback and unconditional closure within 7 working days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Prevent Unauthorized Savings Account Set-Off
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you hold a savings or salary account with the same bank, issue a written communication denying consent for banker set-off under Section 171 of the Contract Act for disputed, unliquidated claims.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Lock In Waiver in OTS Sanction Letter
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If negotiating a debt settlement, never pay without a formal written OTS sanction letter on official bank letterhead explicitly extinguishing all voucher clawbacks, administrative fees, and finance charges.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Escalate to RBI Ombudsman on Day 31
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank fails to reverse the charge within 30 days or delays closure past 7 working days, file an online complaint at cms.rbi.org.in to claim charge reversal and the ₹500 per day statutory delay penalty.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: CIBIL Protection: Rectifying Adverse Default Reporting */}
            <section id="cibil-protection" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Integrity &amp; Rectification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. CIBIL Protection: Rectifying Adverse Default Reporting
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The most severe collateral consequence of an unpaid voucher clawback is damage to your credit report. When a customer ignores an unfair clawback debit, the bank internal software marks the account as overdue. Within 90 days, it is flagged as a Non-Performing Asset (NPA) or written off.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This adverse reporting can lower your CIBIL score by 50 to 120 points, crippling your ability to secure future personal loans, home loans, or business credit lines.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong> and recent RBI circulars, credit institutions have a statutory duty to ensure that credit data submitted to CICs is accurate, authentic, and complete. Reporting a disputed, unauthorized promotional clawback as a credit default violates this statutory requirement.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers can file a formal data dispute with CIBIL, Experian, Equifax, and CRIF High Mark. Under RBI rules, credit bureaus and lenders must investigate and rectify erroneous records within thirty calendar days. Failure to update data within 30 days makes the lender liable to pay compensation of ₹100 per day to the consumer.
              </p>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Bank PNO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Redressal Pathway</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank PNO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When frontline customer care executives refuse to reverse an unfair voucher clawback, you must escalate through the official regulatory grievance redressal hierarchy.
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
                      <td className="p-3 font-bold text-slate-900">Tier 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Examines initial complaint, halts automated collection calls, and checks MITC terms.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Reviews regulatory compliance, reverses illegal clawbacks, and authorizes card closure.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Tier 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Issues binding orders on cms.rbi.org.in to cancel clawbacks, repair CIBIL, and award ₹500/day delay fines.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline: Dispute to Settlement Resolution */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Dispute to Settlement Resolution
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the critical milestone deadlines prevents lenders from trapping you in perpetual default or exploiting administrative delays.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Regulatory Phase</th>
                      <th className="p-3">Lender Action Required</th>
                      <th className="p-3">Borrower Action Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to Day 7</td>
                      <td className="p-3 font-mono text-[11px]">Closure Request</td>
                      <td className="p-3">Close card account if genuine spend dues are cleared.</td>
                      <td className="p-3">Submit closure via email or banking app and retain confirmation receipt.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 8</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Statutory Breach</td>
                      <td className="p-3">Card remains open; ₹500 per day statutory bank penalty triggers.</td>
                      <td className="p-3 font-bold text-amber-800">Serve formal demand notice for immediate closure and penalty accrual.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 9 to Day 30</td>
                      <td className="p-3 font-mono text-[11px]">PNO Escalation</td>
                      <td className="p-3">Bank Principal Nodal Officer investigates disputed billing entries.</td>
                      <td className="p-3">Provide copy of joining fee payment and demand complete clawback reversal.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 31 and Beyond</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Ombudsman Petition</td>
                      <td className="p-3">Subject to binding adjudication by RBI Ombudsman under 2021 Scheme.</td>
                      <td className="p-3 font-bold text-slate-900">File digital complaint on cms.rbi.org.in for reversal, NOC, and damages.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Real-World Case Scenarios: Early Closure & OTS Traps */}
            <section id="real-world-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Practical Case Studies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Real-World Case Scenarios: Early Closure &amp; OTS Traps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers face credit card clawback disputes in various real-world scenarios. Here is how statutory rules apply across common situations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Joining Fee Paid with Early Cancellation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you paid a ₹3,000 joining fee and received a ₹3,000 Amazon voucher, cancelling the card in month 8 does not give the bank the right to claw back the voucher. The joining fee provided valid legal consideration.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    OTS Settlement Ledger Padding
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When negotiating a settlement for a delinquent card, collection teams frequently resurrect old cashback bonuses to pad the ledger. CredSettle eliminates these bogus debits during structured negotiations.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    Refund Reversals Triggering Overlimit Fees
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a merchant refunds a transaction, banks often reverse the corresponding cashback. If this pushes your balance over your credit limit, banks cannot charge overlimit fees without prior consent under RBI rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-indigo-600" />
                    Banker Set-Off on Savings Accounts
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks sometimes auto-debit disputed clawback amounts from a customer savings account citing Section 171 lien rights. High Court rulings confirm that disputed claims cannot be set off without prior notice.
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
                Frequently Asked Questions: Card Voucher Clawbacks
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding credit card welcome voucher clawbacks, cashback reversals, closure timelines, and borrower rights under RBI rules.
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
                  <strong>Reserve Bank of India Master Direction:</strong> RBI/2022-23/92 DOR.AUT.REC.No.27/23.10.001/2022-23, Credit Card and Debit Card – Issuance and Conduct Directions, 2022 (Section 5 MITC Disclosures &amp; Section 8 Card Closure Regulations).
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Adjudication of deficiency in service, billing disputes, and non-compliance with card closure directives.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 2(d) (Valuable Consideration), Section 25 (Enforceability), Section 73-74 (Liquidated Damages vs Penalties), and Section 171 (Limits on Banker&apos;s General Lien).
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) (Deficiency of Service), Section 2(46) (Unfair Contracts), and Section 2(47) (Unfair Trade Practices).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Rules governing credit data authenticity, dispute resolution timelines, and credit bureau reporting standards.
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
                    <span>TransUnion CIBIL Bureau</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="http://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Commission</span>
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
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Process
                  </Link>
                  <Link href="/unactivated-credit-card-charges-rbi-500-day-penalty" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unactivated Card Charges Defense
                  </Link>
                  <Link href="/unauthorized-card-protection-plan-cpp-charges-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unauthorized CPP Charges Refund
                  </Link>
                  <Link href="/credit-card-reward-points-forfeiture-overdue-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Reward Points Forfeiture Rules
                  </Link>
                  <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Overlimit Fee Refund Rules
                  </Link>
                  <Link href="/unbilled-credit-card-merchant-emi-foreclosure-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unbilled Merchant EMI Rules
                  </Link>
                  <Link href="/merchant-refund-on-blocked-settled-credit-card-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Merchant Refund on Blocked Card
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Guidelines
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
                Specialist in credit card regulatory compliance, consumer debt defense, unfair bank fee reversals, and RBI Ombudsman disputes with extensive experience protecting borrowers against predatory banking debits.
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
                  CREDIT CARD LEGAL DEFENSE
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Imposed Unfair Voucher Clawbacks?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking advocates audit your statement, challenge illegal clawback debits under RBI Master Direction 2022, enforce 7-day card closure, and protect your credit score.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Dispute Unfair Card Charges Now
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
                  <span><strong>100% RBI Regulatory Defense:</strong> Direct enforcement of Master Direction 2022.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Illegal Debit Elimination:</strong> Stripping bogus clawbacks from settlement ledgers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory 7-Day Closure:</strong> Enforcing card cancellation with ₹500/day delay fines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Dispute &amp; Rectification:</strong> Removing fraudulent default tags within 30 days.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/credit-card-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Settlement Process
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Settle credit card debt legally &rarr;</span>
                </Link>

                <Link
                  href="/unactivated-credit-card-charges-rbi-500-day-penalty"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unactivated Card Charges Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Claim RBI ₹500/day penalty &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-reward-points-forfeiture-overdue-rules"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Reward Points Forfeiture Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Protect earned reward points &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
