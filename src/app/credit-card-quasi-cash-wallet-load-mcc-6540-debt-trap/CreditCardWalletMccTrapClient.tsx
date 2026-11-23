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
  Check,
  Lock,
  Phone,
  Bookmark,
  ArrowRight,
  Clock,
  Sparkles,
  Gavel,
  Landmark,
  Wallet,
  Percent,
  RefreshCw
} from 'lucide-react';

export default function CreditCardWalletMccTrapClient() {
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
    { id: 'mcc-6540-explained', label: '1. MCC 6540 Explained: Anatomy of Fees' },
    { id: 'surcharge-calculation', label: '2. Surcharge Math & Cost Breakdown' },
    { id: 'quasi-cash-interest', label: '3. Quasi-Cash Day-One Finance Charges' },
    { id: 'money-rotation-spiral', label: '4. The Money Rotation Trap & Spiral' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'rbi-regulatory-framework', label: '6. RBI Master Directions & Notice Rules' },
    { id: 'judicial-precedents', label: '7. Landmark Court Judgments on Fees' },
    { id: 'borrower-rights', label: '8. Legal Rights to Dispute Charges' },
    { id: 'dispute-sop', label: '9. Step-by-Step Billing Dispute SOP' },
    { id: 'escalation-matrix', label: '10. 3-Tier Escalation Matrix' },
    { id: 'settlement-relief', label: '11. Compromise Settlement Solutions' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What does MCC 6540 mean on a credit card statement?',
      a: 'MCC 6540 is a four-digit merchant code. Card networks use it to label digital wallet reloads and prepaid card top-ups. When you add funds to Paytm, Mobikwik, or Amazon Pay, the bank tags your swipe with this code.'
    },
    {
      q: 'Why do Indian banks charge extra fees on wallet loading transactions?',
      a: 'Banks charge extra fees to stop cash rotation. They levy a fee of 1% to 2.5% plus GST. This stops borrowers from turning card credit into free liquid cash.'
    },
    {
      q: 'Does an MCC 6540 transaction have an interest-free grace period?',
      a: 'Most banks remove the grace period for wallet top-ups. They treat wallet loads as quasi-cash or cash advances. Daily interest starts from the day of the transaction at 42% to 45% APR.'
    },
    {
      q: 'Can a bank change wallet load charges without prior notice?',
      a: 'No. RBI rules require 30 days prior notice before banks can change any fees. If the bank adds an unannounced wallet surcharge, you can dispute and reverse it.'
    },
    {
      q: 'What is the credit card rotation trap?',
      a: 'The rotation trap occurs when you use one card to load a wallet. You send that cash to your bank and pay another card bill. High transaction fees burn 5% to 8% each cycle, doubling your debt quickly.'
    },
    {
      q: 'Do wallet reloads earn reward points or count toward milestone spends?',
      a: 'No. Almost all major Indian banks exclude MCC 6540 from rewards. You will not earn points, cashback, or fee waiver credits on wallet loads.'
    },
    {
      q: 'Can I dispute unexpected MCC 6540 surcharges with my bank?',
      a: 'Yes. You can raise a formal billing dispute within 30 days. Cite Clause 9 of the RBI Master Direction 2022 if the bank failed to provide advance notice.'
    },
    {
      q: 'Can the bank report me to CIBIL while a fee dispute is pending?',
      a: 'No. Under RBI Master Direction Clause 10, banks cannot report an account as overdue while a genuine billing dispute is under investigation.'
    },
    {
      q: 'How do I escalate an unresolved wallet surcharge complaint?',
      a: 'First complain in writing to the card grievance cell. If they do not fix it in 30 days, email the Principal Nodal Officer. If still unresolved, file a complaint on the RBI CMS portal.'
    },
    {
      q: 'How does CredSettle help borrowers trapped in credit card wallet load debt?',
      a: 'CredSettle reviews your statements and challenges unfair fees. We stop recovery agent harassment under RBI rules. We negotiate a one-time settlement with 50% to 75% fee waivers and secure a formal NOC.'
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
            <span>RBI Master Direction &amp; Merchant Category Code 6540 Advisory</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Exit Credit Card Wallet Reload Surcharges &amp; Debt Cycles
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Learn how wallet reloads trigger MCC 6540 bank fees and cancel your grace period. Understand your legal rights under RBI rules and discover how to settle heavy card debt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Resolve Wallet Card Debt</span>
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
                  <span>Borrower Protection Shield</span>
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
                <span>EXECUTIVE BRIEF: MCC 6540 WALLET SURCHARGES &amp; DEBT RISKS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">What is MCC 6540:</strong> It is a merchant code for wallet funding. Card networks use it when you add cash to mobile wallets.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Extra Surcharges:</strong> Banks add a fee of 1% to 2.5% plus GST on wallet loads. This fee appears on your card bill.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Grace Period:</strong> Many banks treat wallet loads as cash advances. Interest starts from day one at up to 45% APR.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">The Rotation Trap:</strong> Moving card money through wallets burns 5% to 8% in fees per cycle. Debt grows very fast.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">RBI Notice Rule:</strong> Banks must give 30 days prior notice before adding new fees. You can dispute unannounced charges.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: MCC 6540 Explained */}
            <section id="mcc-6540-explained" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Wallet className="w-4 h-4 text-[#1886ff]" />
                <span>Section 1</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. MCC 6540 Explained: Anatomy of the Wallet Load Fee
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A Merchant Category Code is a four-digit number. Networks like Visa and RuPay use it to tag merchant services. When you load a mobile wallet, the bank tags the swipe under MCC 6540.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This code covers wallet funding and stored value cards. In plain words, you turn card credit into digital cash.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks noticed that cardholders load wallets to get quick cash. Borrowers also rotate money between cards. To stop this, banks added heavy fees:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-[#1886ff] font-bold text-sm">
                    1
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Direct Surcharges</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks add a fee of 1% to 2.5% plus GST on every wallet load swipe.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-[#1886ff] font-bold text-sm">
                    2
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Zero Rewards</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Wallet top-ups earn no reward points, no cashback, and no milestone credits.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-[#1886ff] font-bold text-sm">
                    3
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Quasi-Cash Rules</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Many banks remove the free credit window. They charge daily interest from day one.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 2: Surcharge Math & Cost Breakdown */}
            <section id="surcharge-calculation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Percent className="w-4 h-4 text-[#1886ff]" />
                <span>Section 2</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. The Surcharge Math: How Wallet Reloads Create Debt
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many users think wallet loads only cost the small fee shown in the app. In truth, several hidden fees hit your credit card balance at once.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you load a wallet and move funds to a bank account, you pay three separate fees:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3 md:p-3.5">Fee Category</th>
                      <th className="p-3 md:p-3.5">Standard Rate</th>
                      <th className="p-3 md:p-3.5">Charged By</th>
                      <th className="p-3 md:p-3.5">Cost on ₹50,000 Load</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Wallet Convenience Fee</td>
                      <td className="p-3">1.5% to 2.5% + GST</td>
                      <td className="p-3">Wallet App (Paytm/Mobikwik)</td>
                      <td className="p-3 text-red-600 font-bold">₹1,180</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Bank MCC 6540 Surcharge</td>
                      <td className="p-3">1.0% to 1.5% + GST</td>
                      <td className="p-3">Card Issuing Bank</td>
                      <td className="p-3 text-red-600 font-bold">₹590</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Wallet-to-Bank Payout Fee</td>
                      <td className="p-3">2.0% to 3.5% + GST</td>
                      <td className="p-3">Wallet Platform</td>
                      <td className="p-3 text-red-600 font-bold">₹1,475</td>
                    </tr>
                    <tr className="bg-blue-50/50 font-bold text-slate-900">
                      <td className="p-3">Total Direct Cash Loss</td>
                      <td className="p-3">4.5% to 7.5%</td>
                      <td className="p-3">All Intermediaries</td>
                      <td className="p-3 text-[#1886ff] text-base font-extrabold">₹3,245 (6.49%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs md:text-sm text-slate-600 leading-relaxed italic">
                In this example, you borrow ₹50,000 but receive only ₹46,755 in cash. You owe the full ₹50,000 plus interest while losing ₹3,245 to fees.
              </p>
            </section>

            {/* SECTION 3: Quasi-Cash Day-One Finance Charges */}
            <section id="quasi-cash-interest" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Section 3</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Quasi-Cash Traps: Immediate Day-One Finance Charges
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The biggest risk with MCC 6540 is the quasi-cash label. Normal retail purchases enjoy a free credit window of 20 to 50 days. But quasi-cash transactions do not get this benefit.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Quasi-cash means any transaction that turns into cash quickly. This includes lottery tickets, gaming tokens, and mobile wallet loads. For these swipes, banks charge interest right away.
              </p>

              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>How Daily Interest Piles Up Fast</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                  Credit card interest is high. Banks charge 3.5% to 3.75% per month (42% to 45% a year). You also pay 18% GST on that interest. If you load a wallet on day 5 of your cycle, interest runs for 25 days before your bill arrives.
                </p>
                <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                  If you carry a past balance, things get worse. You lose the grace period on all new spends. Daily interest piles up quickly, making your debt hard to pay.
                </p>
              </div>
            </section>

            {/* SECTION 4: The Money Rotation Trap & Spiral */}
            <section id="money-rotation-spiral" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <RefreshCw className="w-4 h-4 text-[#1886ff]" />
                <span>Section 4</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. The Money Rotation Trap: Why Cardholders Get Stuck
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When cash runs short, many cardholders rotate money between cards. A borrower loads a wallet using Card A. Next, they send that money to a bank account. Then they pay the minimum due on Card B.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Next month, the borrower repeats the process. While this delays default, the math causes quick financial trouble:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Heavy Fee Leaks</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Every rotation loses 5% to 7% in fees. Rotating ₹1,00,000 four times burns over ₹25,000 in pure fees without clearing any debt.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Credit Limits Run Out</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Fees and interest eat up your limit. Soon, you can no longer reload wallets to pay minimum dues.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Sudden Default Spiral</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      When rotation stops, multiple cards default at the same time. Late fees and interest surge, and recovery agents start calling.
                    </p>
                  </div>
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
                5. Visual Blueprint: Wallet Load Debt Resolution Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This diagram shows how wallet rotation leads to debt traps. It also explains the legal steps to dispute fees and resolve your debt.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/credit-card-quasi-cash-wallet-load-mcc-6540-debt-trap.jpg"
                    alt="Credit Card Wallet Load MCC 6540 Surcharge and Quasi Cash Debt Trap Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Cardholder Protection Framework &bull; RBI Master Direction Compliant</span>
                  <a
                    href="/images/infographics/credit-card-quasi-cash-wallet-load-mcc-6540-debt-trap.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>View High-Res Infographic</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: RBI Master Directions on Card Surcharges */}
            <section id="rbi-regulatory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Section 6</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. RBI Master Directions: Credit Card Surcharge Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India regulates credit card operations. Lenders must follow the Master Direction on Credit Card and Debit Card Issuance and Conduct, 2022:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    Clause 7: Clear Fee Disclosures
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Card issuers must list all fees and interest rates clearly in the terms document. A bank cannot charge any fee that it did not disclose beforehand.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    Clause 9: Mandatory 30-Day Prior Notice
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks cannot add new fees on MCC 6540 without giving 30 days prior notice. If the bank fails to inform you first, the charge is invalid.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    Clause 10: Bureau Freeze During Billing Disputes
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When you raise a written billing dispute, the bank must reply within 30 days. The bank cannot report disputed dues to CIBIL while reviewing your complaint.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Landmark Court Rulings on Unfair Bank Card Fees */}
            <section id="judicial-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Section 7</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Landmark Court Rulings on Unfair Bank Card Fees
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts protect borrowers from unfair bank fees and illegal interest:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm text-[#1886ff]">
                    Central Bank of India v. Ravindra (Supreme Court, 2002)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    The Supreme Court ruled that banks cannot compound penal interest. Lenders cannot add penalty fees to principal debt to grow charges without legal sanction.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm text-[#1886ff]">
                    Citibank N.A. v. Rohit Somani (NCDRC, 2013)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    The consumer commission held that lenders cannot quietly treat retail swipes as cash advances without clear, advance notice to the customer.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm text-[#1886ff]">
                    State Bank of India v. Dr. B.L. Sharma (NCDRC, 2019)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    The commission confirmed that debiting unnotified charges is a deficiency in banking service and an unfair trade practice.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Legal Rights: How Borrowers Can Dispute MCC 6540 */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Section 8</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Legal Rights: How Borrowers Can Dispute MCC 6540
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank charged unexpected fees on wallet loads without notice, you have clear legal rights:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Refund of Unnotified Charges</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank failed to send 30 days prior notice about wallet load fees, you can claim a full refund.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>CIBIL Default Protection</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks cannot mark your account as overdue in CIBIL for charges under active billing dispute.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Protection from Harassment</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI rules, recovery agents cannot call you before 8 AM or after 7 PM or threaten you.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Right to Itemized Bills</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You have the right to get a clear bill showing principal debt, interest rates, GST, and merchant codes.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Step-by-Step Dispute SOP */}
            <section id="dispute-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Section 9</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Step-by-Step SOP: Disputing Wallet Load Surcharges
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these simple steps to dispute arbitrary fees and safeguard your credit score:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Check Your Statement for MCC 6540</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Download your card statement. Look for entries named &quot;Wallet Load Surcharge,&quot; &quot;POI Fee,&quot; or extra interest.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Send a Formal Dispute Email</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Write to the card grievance desk within 30 days. Cite RBI Clause 9 and ask for proof of 30 days prior notice.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Ask to Freeze Bureau Reporting</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Instruct the bank in writing not to report the disputed sum as delinquent to CIBIL while they review it.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Stop Money Rotation Right Away</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Do not execute new wallet reloads. More rotations will only add more fees and make legal settlement harder.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 10: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Section 10</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. 3-Tier Escalation Matrix: Bank PNO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the bank rejects your dispute or fails to reply, follow this three-step escalation path:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-full inline-block">
                    Tier 1: Card Grievance Desk
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">Bank Card Division</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit your written complaint with transaction dates. The bank has 30 days to resolve the matter.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-full inline-block">
                    Tier 2: Principal Nodal Officer
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">Bank PNO Desk</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If unresolved after 30 days, write to the PNO. The PNO has executive power to reverse fees and fix records.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-full inline-block">
                    Tier 3: RBI Ombudsman
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">RBI CMS Portal</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File an online complaint at cms.rbi.org.in. The RBI Ombudsman can order refunds and compensation.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Compromise Settlement: Settle Spiraling Card Dues */}
            <section id="settlement-relief" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Section 11</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                11. Compromise Settlement: Settle Spiraling Card Dues
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When balances spiral due to compounding fees, disputing small charges may not be enough. The total bill often grows beyond what you can afford to pay.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A formal One-Time Settlement (OTS) provides legal closure. CredSettle works directly with your lender to resolve these heavy card debts:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Waiver of Fees and Interest</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    CredSettle audits your card bills to remove accumulated fees and interest. We negotiate waivers of <strong>50% to 75%</strong> on total dues.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Stop Recovery Agent Calls</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our legal team issues formal notices to the bank. This enforces RBI recovery rules and stops recovery agent calls.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Official Bank Sanction Letter</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We ensure you receive an authentic settlement letter from the bank. This protects you from third-party agency scams.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Guaranteed No Dues Certificate</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Once paid, we secure your official No Dues Certificate (NOC) and verify that the bank closes the account on your credit report.
                  </p>
                </div>
              </div>
            </section>

            {/* COMPANY SECTION (About CredSettle) */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* FREQUENTLY ASKED QUESTIONS SECTION */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: MCC 6540 Wallet Surcharges
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Find clear answers to common questions about wallet fees, quasi-cash interest, and legal settlement steps.
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200/80 bg-white shadow-xs overflow-hidden transition-all duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                      >
                        <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 12: Regulatory Sources & Citations */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Legal References</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Official Regulatory Citations &amp; Statutory References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Master Direction:</strong> Credit Card and Debit Card Issuance and Conduct Directions, 2022 (updated March 2024), Clauses 7, 9, and 10.
                </li>
                <li>
                  <strong>RBI Master Directions on PPIs:</strong> Master Direction DPSS.CO.PD.No.1164/02.14.006/2017-18 on wallet operations in India.
                </li>
                <li>
                  <strong>RBI Integrated Ombudsman Scheme, 2021:</strong> Section 10, Grounds of Complaint on banking deficiencies and tariff changes.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(47) (Unfair Trade Practice) and Section 2(11) (Deficiency of Service).
                </li>
                <li>
                  <strong>Supreme Court of India Ruling:</strong> Central Bank of India v. Ravindra (2002) 1 SCC 367 on interest compounding limits.
                </li>
                <li>
                  <strong>NCDRC Precedents:</strong> Citibank N.A. v. Rohit Somani (2013) on transparency in cash advance categorization.
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
                  <a href="http://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Commission</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/credit-card-rent-payment-rotation-block-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rent Payment Rotation Block
                  </Link>
                  <Link href="/credit-card-atm-cash-withdrawal-interest-trap-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    ATM Cash Advance Trap
                  </Link>
                  <Link href="/credit-card-balance-transfer-default-interest-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Balance Transfer Rules
                  </Link>
                  <Link href="/unbilled-credit-card-merchant-emi-foreclosure-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unbilled Card EMI Foreclosure
                  </Link>
                  <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Overlimit Fee Refund Rules
                  </Link>
                  <Link href="/bank-increased-credit-card-apr-interest-rbi-opt-out" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Card Interest Rate Hike Defense
                  </Link>
                  <Link href="/is-18-percent-gst-waived-credit-card-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    18% GST in Card Settlement
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Guidelines
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate (NOC)
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
                Specialist in credit card rules, consumer finance disputes, unfair fees, and debt settlement negotiations under Reserve Bank of India mandates.
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
                  CARD DEBT RELIEF SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Trapped in Credit Card Surcharges?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our team disputes unfair wallet fees, halts compounding interest, stops recovery harassment, and negotiates legal card settlements.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Debt Relief Assessment
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
                  <span><strong>100% RBI Circular Enforcement:</strong> Challenge unnotified surcharges under Clause 9.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>50% to 75% Dues Reduction:</strong> Settle compounding credit card balances via OTS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Harassment Shield:</strong> Stop recovery agent intimidation under RBI FPC rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official Bank NOC:</strong> Secure complete financial closure and CIBIL update.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/credit-card-rent-payment-rotation-block-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Rent Payment Block
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Rent rotation rules &amp; settlement &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-atm-cash-withdrawal-interest-trap-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    ATM Cash Advance Interest Trap
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Day-one cash charge defense &rarr;</span>
                </Link>

                <Link
                  href="/stop-recovery-agent-harassment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Stop Recovery Agent Harassment
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI rules &amp; police complaint steps &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
