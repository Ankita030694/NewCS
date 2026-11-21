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
  HelpCircle,
  TrendingUp,
  BookOpen,
  CreditCard,
  Check,
  Lock,
  Phone,
  Bookmark,
  ArrowRight,
  Clock,
  Landmark,
  ShieldAlert,
  Layers
} from 'lucide-react';

export default function OneCardDefaultBlocksClient() {
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
    { id: 'borrower-wise-npa', label: '1. RBI Borrower-Wise NPA Rule' },
    { id: 'same-vs-other-bank', label: '2. Same Bank vs Other Bank Cards' },
    { id: 'ucic-cbs-trigger', label: '3. How UCIC Triggers Card Blocks' },
    { id: 'cross-default-clauses', label: '4. Cross-Default Contract Clauses' },
    { id: 'npa-timeline', label: '5. RBI 3-Day & 90-Day NPA Timeline' },
    { id: 'set-off-rights', label: '6. Banker Right of Set-Off' },
    { id: 'other-bank-impact', label: '7. Impact on Other Bank Cards' },
    { id: 'npa-upgrade-rule', label: '8. Entire Arrears Upgrade Rule' },
    { id: 'action-plan', label: '9. Step-by-Step Protection Plan' },
    { id: 'special-scenarios', label: '10. Add-On & Corporate Cards' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Regulatory Citations & Sources' }
  ];

  const faqs = [
    {
      q: 'Does defaulting on one credit card block my second card with the same bank?',
      a: 'Yes. Under RBI borrower-wise NPA rules, all credit facilities under your Unique Customer Identification Code (UCIC) are linked. If one card turns into an NPA after 90 days of default, the bank can block your second card and other credit lines with the same bank.'
    },
    {
      q: 'Will defaulting on one bank credit card automatically block my card from another bank?',
      a: 'No, another bank will not automatically block your card on day one if you pay its bills on time. However, your CIBIL score drops sharply after a default. Other banks monitor credit bureau alerts and may slash your credit limit, freeze rewards, or refuse card renewal.'
    },
    {
      q: 'What is UCIC in Indian banking and how does it affect multiple credit cards?',
      a: 'UCIC stands for Unique Customer Identification Code. Every bank assigns one UCIC or Customer ID to all your accounts, loans, and credit cards in that bank. When one card becomes overdue past 90 days, the core banking system flags your entire UCIC as an NPA.'
    },
    {
      q: 'When does a credit card account become an NPA under RBI rules?',
      a: 'Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct, a credit card becomes an NPA if the Minimum Amount Due (MAD) remains unpaid for more than 90 days from the payment due date.'
    },
    {
      q: 'Can a bank block my savings account or deduct money for a credit card default?',
      a: 'Yes. Under Section 171 of the Indian Contract Act, 1872, a bank holds a general right of set-off within the same legal institution. It can put a hold on your savings account or adjust fixed deposits in the same bank against unpaid credit card dues.'
    },
    {
      q: 'If I pay the overdue amount on only one card, will my second card unblock?',
      a: 'No. Under RBI circular DOR.STR.REC.68/21.04.048/2021-22, a borrower account is upgraded from NPA to standard only after clearing the entire arrears of interest and principal across all credit facilities with that bank.'
    },
    {
      q: 'What happens to a shared credit limit when one card is blocked?',
      a: 'Most second cards from the same bank share a single combined credit limit. Once the primary card defaults or exceeds 90 days overdue, the bank freezes the shared credit pool, which immediately blocks spending on the second card.'
    },
    {
      q: 'Can other banks reject my credit card renewal because of a default elsewhere?',
      a: 'Yes. Credit cards usually expire every 3 to 5 years. Before issuing a renewal card, the issuer runs a fresh CIBIL check. A low score or an active default status gives the bank full contractual authority to decline renewal.'
    },
    {
      q: 'Does a primary card default block an add-on supplementary credit card?',
      a: 'Yes. Add-on cards operate under the primary cardholder account and shared limit. If the primary card is blocked or turns into an NPA, all linked add-on cards are suspended immediately.'
    },
    {
      q: 'How can I settle one defaulted credit card without losing all my banking access?',
      a: 'Before the 90-day NPA mark, shift your primary salary or savings flow to a separate bank where you hold no defaulted debt. Then negotiate a formal One-Time Settlement (OTS) and obtain an official No Dues Certificate (NOC).'
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
            <span>RBI IRACP Norms &amp; Credit Card Conduct Rules</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Multi-Card UCIC Cross-Default Rules Within Same Bank
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Defaulting on one credit card triggers borrower-wise NPA rules across the same bank. Learn how UCIC linking blocks your second card, how other banks react via CIBIL, and how to settle your debt legally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Legal Settlement Help</span>
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
                  <span>RBI Regulatory Guide</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Based on RBI IRACP norms, Credit Card Master Directions 2022, and Section 171 of the Contract Act.
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
                <span>QUICK ANSWER: DOES ONE CARD DEFAULT BLOCK OTHER CARDS?</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Same Bank Cards (Blocked):</strong> Yes. If you hold two cards with the same bank, defaulting on one card blocks the second card. RBI rules treat all loans and cards under one Customer ID (UCIC) as a single borrower risk.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Other Bank Cards (Not Instantly Blocked):</strong> No. Another bank will not instantly block your active card if you pay its bills on time. However, your CIBIL score falls fast after a default.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Indirect Risks at Other Banks:</strong> Other banks run regular CIBIL portfolio checks. When they spot a default, they often slash your credit limit or decline card renewal at expiry.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Linked Savings &amp; Loans at Same Bank:</strong> A 90-day card default turns your entire UCIC profile into a Non-Performing Asset (NPA). Your bank can also freeze your savings account balance using its right of set-off.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Entire Arrears Rule for Upgrade:</strong> Clearing only one card does not lift the NPA tag. Under RBI norms, you must clear overdue dues on all linked facilities in that bank to restore standard status.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: 1. RBI Borrower-Wise NPA Rule & UCIC Cross-Default */}
            <section id="borrower-wise-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Banking Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Borrower-Wise NPA Rule &amp; UCIC Cross-Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many cardholders believe each credit card is a separate contract. They assume that missing payments on one card will leave their second card untouched. In India, banking regulations work differently.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India (RBI) enforces Prudential Norms on Income Recognition, Asset Classification, and Provisioning (IRACP). Under these rules, banks must classify bad loans on a <strong>borrower-wise basis</strong>, not a facility-wise basis.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This means your bank looks at you as one single borrower across all its products. If your first credit card stays overdue for more than 90 days, it becomes a Non-Performing Asset (NPA). As a result, every other card and loan you hold with that same bank is also marked as NPA.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For example, suppose you have a cashback card and a travel card from the same bank. Even if you pay the travel card on time, a 90-day default on the cashback card drags both cards into NPA status. The bank then blocks the second card to stop further credit exposure.
              </p>
            </section>

            {/* SECTION 2: 2. Same Bank vs Other Bank Cards: Comparison Matrix */}
            <section id="same-vs-other-bank" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Layers className="w-4 h-4 text-[#1886ff]" />
                <span>Direct vs Indirect Default Impact</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Same Bank vs Other Bank Cards: Comparison Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The impact of a credit card default depends heavily on which bank issued your other cards. Same-bank cards face immediate automated blocks. Cards from different banks face delayed credit-score actions instead.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Same Bank vs Other Bank Card Impact</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">RBI &amp; CIBIL Matrix</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Impact Area</th>
                        <th className="p-3">Second Card (Same Bank)</th>
                        <th className="p-3">Active Card (Other Bank)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Card Blocking</td>
                        <td className="p-3 text-rose-600 font-semibold">Blocked immediately on NPA or cross-default</td>
                        <td className="p-3 text-emerald-600 font-semibold">Stays active if bills are paid on time</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">NPA Classification</td>
                        <td className="p-3">Marked NPA automatically via UCIC</td>
                        <td className="p-3">Remains Standard if no overdue with that bank</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Credit Limit</td>
                        <td className="p-3">Shared limit frozen to zero</td>
                        <td className="p-3 text-amber-600 font-semibold">Often slashed during CIBIL risk reviews</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Savings Account Hold</td>
                        <td className="p-3 text-rose-600 font-semibold">Bank can freeze or debit via Set-Off</td>
                        <td className="p-3 text-emerald-600 font-semibold">Protected; Bank A cannot touch Bank B funds</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Card Renewal</td>
                        <td className="p-3 text-rose-700">Rejected permanently</td>
                        <td className="p-3 text-amber-700">High risk of denial at expiry date</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: 3. How UCIC & Core Banking Systems Trigger Card Blocks */}
            <section id="ucic-cbs-trigger" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Automated Banking Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. How UCIC &amp; Core Banking Systems Trigger Card Blocks
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every bank in India assigns a Unique Customer Identification Code (UCIC) to each customer. Banks also call this a Customer ID, CIF, or CRN. The RBI requires banks to map all your accounts under this single UCIC using your PAN and Aadhaar.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Your savings account, personal loan, home loan, and multiple credit cards all sit under the same UCIC. Banks run automated Core Banking System (CBS) batch checks at the end of every day.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When one credit card crosses 90 days past its due date, the CBS flags that UCIC as an NPA. The system then pushes an automated restriction across all cards linked to that Customer ID. No branch manager needs to approve this block manually.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In addition, most banks issue a second card on a shared credit limit. Because both cards draw from one combined pool, freezing the primary card limit instantly disables the second card too.
              </p>
            </section>

            {/* SECTION 4: 4. Credit Card Cross-Default & Acceleration Clauses */}
            <section id="cross-default-clauses" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Cardholder Agreement Terms</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Credit Card Cross-Default &amp; Acceleration Clauses
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Apart from RBI accounting rules, your credit card Most Important Terms and Conditions (MITC) include a <strong>Cross-Default Clause</strong>. You accept these terms when you sign the card application or activate the card.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A cross-default clause states that defaulting on any single facility with the bank counts as a default on all your facilities with that bank. It gives the bank three major contractual powers:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-rose-600" />
                    Immediate Card Freeze
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank can suspend spending on your second card even before the 90-day NPA mark if risk triggers fire early.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Debt Acceleration
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank can cancel your credit line and demand full lump-sum payment of all unbilled EMIs and balances at once.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#1886ff]" />
                    Reward Forfeiture
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Defaulting allows the issuer to block redemption of accumulated reward points across your linked card accounts.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 5: 5. RBI 3-Day Grace & 90-Day NPA Timeline Breakdown */}
            <section id="npa-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Delinquency Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. RBI 3-Day Grace &amp; 90-Day NPA Timeline Breakdown
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct (2022), card issuers must follow strict reporting timelines. Knowing this timeline helps you act before your second card gets blocked.
              </p>

              <div className="space-y-3">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Days 1 to 3 Past Due: RBI Grace Window</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Banks cannot report your account as past due to CIBIL or charge late fees until your payment is overdue for more than 3 days from the due date.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Days 4 to 60 (SMA-0 &amp; SMA-1): Early Warnings</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Your card enters Special Mention Account (SMA) stages. The bank may temporarily restrict your second card or lower its limit as a precaution.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Days 61 to 90 (SMA-2): Pre-NPA Alert</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Your CIBIL score drops sharply. Other banks receive bureau alerts and may freeze your credit limits or block pre-approved loan offers.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Day 91 Onward (NPA): Mandatory UCIC Cross-Block</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      If the Minimum Amount Due remains unpaid past 90 days, the card becomes an NPA. Every other card and credit line under your UCIC in that bank is blocked.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6: 6. Banker's Right of Set-Off on Linked Accounts */}
            <section id="set-off-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Indian Contract Act Provisions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Banker&apos;s Right of Set-Off on Linked Accounts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Blocking your second credit card is not the only step a bank can take. If you also keep a savings account or fixed deposit with the same bank, your funds are at risk.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under <strong>Section 171 of the Indian Contract Act, 1872</strong>, banks hold a statutory general lien and right of set-off. This legal right lets the bank combine your accounts and adjust your positive deposit balance against your unpaid credit card debt.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, this right applies strictly within the same bank. Bank A cannot freeze or debit your savings account held at Bank B without a court order. You can read more in our detailed guide on the{' '}
                <Link
                  href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act"
                  className="text-[#1886ff] font-semibold hover:underline"
                >
                  banker&apos;s right of set-off under Section 171
                </Link>
                .
              </p>
            </section>

            {/* SECTION 7: 7. Impact on Other Bank Cards: CIBIL, Limits & Renewal */}
            <section id="other-bank-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Cross-Bank Credit Bureau Effect</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Impact on Other Bank Cards: CIBIL, Limits &amp; Renewal
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A default at Bank A does not trigger an instant UCIC block at Bank B. Different banks do not share Core Banking Systems. As long as you pay Bank B on time, Bank B usually keeps your card active in the short term.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, all Indian banks report payment status to credit bureaus like CIBIL, Experian, Equifax, and CRIF High Mark. Under recent RBI rules, lenders update credit bureaus every 15 days.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once your default appears on CIBIL, other banks react in three common ways:
              </p>
              <ul className="space-y-2 text-sm md:text-base text-slate-700 list-disc pl-5 leading-relaxed">
                <li>
                  <strong>Sudden Limit Reduction:</strong> Other banks run automated risk reviews and may slash your credit limit by 50% to 90%. See our guide on{' '}
                  <Link
                    href="/sudden-credit-card-limit-reduction-high-utilization-fix"
                    className="text-[#1886ff] font-semibold hover:underline"
                  >
                    sudden credit card limit reduction fixes
                  </Link>
                  .
                </li>
                <li>
                  <strong>Card Renewal Rejection:</strong> Every card has a 3-to-5-year expiry date. Before sending a renewal card, Bank B pulls your CIBIL report and can refuse renewal if it sees an active default.
                </li>
                <li>
                  <strong>New Application Denial:</strong> Any application for a new credit card, personal loan, or EMI conversion will be rejected until the default is resolved.
                </li>
              </ul>
            </section>

            {/* SECTION 8: 8. Borrower-Wise NPA Upgrade: Entire Arrears Rule */}
            <section id="npa-upgrade-rule" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CheckCircle2 className="w-4 h-4 text-[#1886ff]" />
                <span>RBI Upgradation Clarification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Borrower-Wise NPA Upgrade: Entire Arrears Rule
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers assume that paying the Minimum Amount Due will unblock their cards. Once an account crosses 90 days and becomes an NPA, partial payments do not remove the NPA tag.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                RBI circular <strong>DOR.STR.REC.68/21.04.048/2021-22</strong> (dated November 12, 2021) and its follow-up circular <strong>DOR.STR.REC.85/21.04.048/2021-22</strong> make the rule clear. Loan or card accounts marked as NPA can only move back to Standard status after you pay the <strong>entire arrears of interest and principal</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you hold multiple cards or loans with that bank, you must clear the overdue arrears across every single facility. Paying off just one card will not upgrade your UCIC profile or unblock your other cards automatically.
              </p>
            </section>

            {/* SECTION 9: 9. Step-by-Step Action Plan to Protect Active Cards */}
            <section id="action-plan" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Practical Borrower Strategy</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Step-by-Step Action Plan to Protect Active Cards
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you are struggling to pay one credit card bill, take quick action before Day 90. Follow these steps to protect your essential banking access and resolve the debt safely:
              </p>

              <div className="space-y-3">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs">
                  <h3 className="text-sm font-bold text-slate-900">Step 1: Separate Your Salary and Savings Account</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Move your primary salary and daily savings to a different bank where you have zero debt. This protects your monthly living funds from a same-bank set-off freeze.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs">
                  <h3 className="text-sm font-bold text-slate-900">Step 2: Keep Other Bank Cards 100% Current</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Never miss payments on cards held with other banks. Keep your utilization low on those cards so other issuers do not see active distress on their own books.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs">
                  <h3 className="text-sm font-bold text-slate-900">Step 3: Request Hardship Restructuring or OTS</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    If you cannot pay the full balance, write to the bank explaining your financial hardship. You can negotiate a formal{' '}
                    <Link href="/services/credit-card-settlement" className="text-[#1886ff] font-semibold hover:underline">
                      One-Time Settlement (OTS)
                    </Link>{' '}
                    for a reduced lump-sum amount.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs">
                  <h3 className="text-sm font-bold text-slate-900">Step 4: Collect Your Official Settlement Letter and NOC</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Pay only after receiving an official settlement letter on bank letterhead. After payment, collect your{' '}
                    <Link href="/get-noc-after-loan-settlement" className="text-[#1886ff] font-semibold hover:underline">
                      No Dues Certificate (NOC)
                    </Link>{' '}
                    to stop future recovery claims.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10: 10. Co-Branded, Add-On & Corporate Card Scenarios */}
            <section id="special-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CreditCard className="w-4 h-4 text-[#1886ff]" />
                <span>Special Multi-Card Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Co-Branded, Add-On &amp; Corporate Card Scenarios
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Cross-default rules also apply to specialized card types. Here is how special card relationships behave during a default:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">Co-Branded Cards (Same Issuer)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you hold a bank&apos;s core card and its co-branded retail card (such as an e-commerce or airline card), both share the same bank UCIC. Defaulting on one blocks the other. Learn more about{' '}
                    <Link
                      href="/co-branded-credit-card-default-partner-app-block-rules"
                      className="text-[#1886ff] font-semibold hover:underline"
                    >
                      co-branded card default rules
                    </Link>
                    .
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">Add-On Supplementary Cards</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Supplementary cards share the primary holder&apos;s limit and account. Blocking the primary card blocks every add-on card instantly. See our guide on{' '}
                    <Link
                      href="/add-on-supplementary-credit-card-default-liability"
                      className="text-[#1886ff] font-semibold hover:underline"
                    >
                      add-on card default liability
                    </Link>
                    .
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">Insta &amp; Jumbo Card Loans</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pre-approved loans booked against your credit card carry a separate loan account number under your UCIC. Defaulting on the card blocks the loan facility and vice versa. Read about{' '}
                    <Link
                      href="/jumbo-insta-loan-on-credit-card-default-settlement"
                      className="text-[#1886ff] font-semibold hover:underline"
                    >
                      jumbo loan on credit card settlement
                    </Link>
                    .
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">Corporate vs Personal Cards</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a corporate card is under company liability, it belongs to the employer&apos;s legal entity. However, if it is under joint or individual liability, a default can affect your personal UCIC with that bank.
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
                Frequently Asked Questions: Multi-Card Default Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers to common questions about UCIC cross-default, same-bank card blocks, CIBIL impact, and legal settlement options.
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
                  <strong>RBI Master Direction (2022):</strong> Master Direction on Credit Card and Debit Card Issuance and Conduct Directions, 2022 (3-day past-due grace period and 90-day NPA norms).
                </li>
                <li>
                  <strong>RBI Prudential Norms (IRACP):</strong> Master Circular on Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances (Borrower-wise asset classification).
                </li>
                <li>
                  <strong>RBI Circular DOR.STR.REC.68/21.04.048/2021-22:</strong> Prudential norms on IRACP Clarifications dated November 12, 2021, and Circular DOR.STR.REC.85/21.04.048/2021-22 dated February 15, 2022 (Entire arrears across all facilities for NPA upgradation).
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 171 (General lien of bankers and right of set-off within the same banking institution).
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Grievance redressal mechanism for unauthorized account freezes or unfair credit reporting.
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
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL</span>
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
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
                  </Link>
                  <Link href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Banker Right of Set-Off
                  </Link>
                  <Link href="/can-bank-freeze-my-savings-account-for-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Savings Account Freeze Rules
                  </Link>
                  <Link href="/sudden-credit-card-limit-reduction-high-utilization-fix" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Limit Slash Fix
                  </Link>
                  <Link href="/add-on-supplementary-credit-card-default-liability" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Add-On Card Default Liability
                  </Link>
                  <Link href="/jumbo-insta-loan-on-credit-card-default-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Jumbo Loan on Card Settlement
                  </Link>
                  <Link href="/co-branded-credit-card-default-partner-app-block-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Co-Branded Card Block Rules
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After Settlement
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
                Specialist in credit card debt settlement, RBI regulatory compliance, and borrower protection with extensive experience resolving multi-card defaults legally across India.
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
                  CREDIT CARD DEBT RELIEF
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Multiple Credit Cards Blocked Due to Default?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team negotiates RBI-compliant One-Time Settlements, stops recovery harassment, and helps you clear your debt with an official NOC.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Book Free Legal Consultation
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
                  <span><strong>Up to 50%+ Debt Waiver:</strong> Structured OTS negotiations with banks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-Harassment Shield:</strong> Stop abusive recovery calls legally.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified NOC Closure:</strong> Proper settlement letters and closure proof.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Escalation:</strong> Action against unlawful account holds.</span>
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
                    Credit Card Settlement Guide
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Negotiate legal OTS waivers &rarr;</span>
                </Link>

                <Link
                  href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Banker&apos;s Right of Set-Off Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Protect your savings account &rarr;</span>
                </Link>

                <Link
                  href="/sudden-credit-card-limit-reduction-high-utilization-fix"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Sudden Credit Card Limit Slash
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI notice &amp; CIBIL impact &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
