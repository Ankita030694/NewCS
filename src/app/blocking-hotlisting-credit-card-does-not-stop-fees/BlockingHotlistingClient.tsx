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
  Building2,
  DollarSign,
  Check,
  Lock,
  Phone,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  Gavel,
  Landmark,
  CreditCard,
  ShieldAlert
} from 'lucide-react';

export default function BlockingHotlistingClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Key Rules' },
    { id: 'blocking-vs-closing', label: '1. Blocking vs Closing Under RBI' },
    { id: 'why-fees-continue', label: '2. Why Hotlisted Cards Charge Fees' },
    { id: 'hidden-fee-traps', label: '3. Hidden Fee Traps & Mandates' },
    { id: 'rbi-closure-penalty', label: '4. RBI 7-Day Rule & Rs 500 Penalty' },
    { id: 'cibil-score-impact', label: '5. How Blocked Cards Hurt CIBIL' },
    { id: 'step-by-step-closure', label: '6. Steps to Permanently Close a Card' },
    { id: 'disputing-fees', label: '7. Disputing Fees on Blocked Cards' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'comparison-table', label: '9. Blocking vs Closing Comparison' },
    { id: 'special-cases', label: '10. Lost Cards, EMIs & Add-On Cards' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Does blocking or hotlisting a credit card stop annual fees?',
      a: 'No. Blocking or hotlisting only stops new card transactions for security reasons. Your credit card account stays open, so the bank can still charge annual fees, renewal fees, and GST until you submit a formal closure request.'
    },
    {
      q: 'What is the difference between blocking and closing a credit card under RBI rules?',
      a: 'Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct, blocking only stops card usage while keeping the account active. Closure ends the entire account relationship between you and the card issuer.'
    },
    {
      q: 'How many days does a bank have to close a credit card in India?',
      a: 'Under RBI rules, a bank or NBFC must close your credit card within 7 working days of your request, provided you have paid all pending dues on the card.'
    },
    {
      q: 'What is the RBI penalty if a bank delays closing my credit card?',
      a: 'If the bank fails to close your credit card within 7 working days after you clear all dues, it must pay you Rs 500 per calendar day of delay until the account is closed.'
    },
    {
      q: 'Can unpaid annual fees on a blocked credit card hurt my CIBIL score?',
      a: 'Yes. If you block a card and stop checking statements, billed annual fees and 18% GST can turn overdue. The bank will add late fees, charge interest, and report the default to CIBIL, which drops your credit score.'
    },
    {
      q: 'Do recurring mandates and OTT subscriptions stop when I block my card?',
      a: 'Not always. Some tokenized merchant mandates or standing instructions may fail, while others linked to the card account can still trigger billing attempts or late fee disputes. Cancel standing instructions via SIHub or your bank before closing the card.'
    },
    {
      q: 'Can a bank force me to visit a branch or send a letter to close my card?',
      a: 'No. RBI rules require card issuers to offer easy closure channels like a helpline, dedicated email, IVR, mobile app, net banking, or a website link. Banks cannot force you to send physical letters.'
    },
    {
      q: 'What happens if I do not use my credit card for over one year?',
      a: 'Under RBI rules, if a credit card is unused for more than one year, the bank must start the closure process after giving you 30 days notice. If you do not reply, the bank must close the card account, subject to zero dues.'
    },
    {
      q: 'How can I get a refund if a bank charged annual fees on my permanently blocked card?',
      a: 'Send a written dispute to the bank customer care and Grievance Redressal Officer with proof of your block or closure request. If unresolved in 30 days, file a complaint with the RBI Integrated Ombudsman at cms.rbi.org.in.'
    },
    {
      q: 'How does CredSettle help with blocked credit card fee traps and CIBIL disputes?',
      a: 'CredSettle audits wrongful annual fees, drafts formal legal notices under RBI Master Directions, files RBI Ombudsman complaints for Rs 500 per day delay penalties, and helps fix unfair CIBIL defaults.'
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
            <span>RBI Credit Card Master Directions &amp; Cardholder Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Why Hotlisting a Credit Card Does Not Stop Annual Fees
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Blocking a lost or unwanted credit card only stops new swipes. Your account stays open, and annual fees keep piling up. Learn the RBI closure rules, avoid hidden fee traps, and protect your CIBIL score.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Resolve Credit Card Fee Disputes</span>
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
                  <span>RBI Cardholder Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by RBI Master Direction on Credit Card and Debit Card Issuance and Conduct.
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
                <span>EXECUTIVE BRIEF: BLOCKING VS CLOSING A CREDIT CARD</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Hotlisting Is Not Closure:</strong> Blocking a card only stops purchases on that 16-digit plastic card. Your underlying loan account remains open with the bank.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Annual Fees Keep Billing:</strong> Because the account is still active, banks continue to bill annual fees, renewal fees, and 18% GST every year.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">7-Working-Day Closure Rule:</strong> Under RBI rules, once you clear all dues and request closure, the bank must close the account within 7 working days.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Rs 500 Daily Delay Penalty:</strong> If the bank delays closing a zero-balance card beyond 7 working days, it must pay you Rs 500 per calendar day.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Silent CIBIL Score Damage:</strong> Unpaid annual fees on a blocked card trigger late fees, high interest, and default marks on your CIBIL report.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1 */}
            <section id="blocking-vs-closing" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>RBI Definitions &amp; Legal Distinction</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Blocking vs Closing: Legal Difference Under RBI
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many cardholders in India think that blocking a credit card in a mobile app ends their relationship with the bank. In reality, blocking and closing are two completely different actions under Reserve Bank of India (RBI) rules.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI Master Direction on Credit Card and Debit Card Issuance and Conduct (2022, updated 2024) defines both terms clearly. Blocking or hotlisting a card is only a security step. It stops new payments on the card while keeping your account active.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Closing a credit card is the complete end of your account relationship with the bank. Once a bank closes your card account, your credit limit is removed and no new annual fees can be billed.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you only hotlist a lost or unwanted card without asking for closure, your contract with the bank stays alive. The bank treats you as an active customer who just happens to have a disabled card.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="why-fees-continue" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CreditCard className="w-4 h-4 text-[#1886ff]" />
                <span>Account Billing Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Why Hotlisted Cards Still Charge Annual Fees
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every credit card has two parts: the physical plastic card and the underlying credit card account. When you tap &ldquo;Block Card&rdquo; or &ldquo;Hotlist Card,&rdquo; the bank only freezes the 16-digit card number.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks hotlist cards for lost cards, theft, damaged chips, or suspected fraud. They expect you to order a replacement card. Because the main credit account stays open, your billing cycle keeps running every month.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When your card anniversary date arrives, the bank system checks if the account is open. It does not check if the plastic card is active or blocked. As a result, the system automatically posts the renewal fee plus 18% GST to your statement.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="hidden-fee-traps" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Hidden Charges &amp; Billing Traps</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Hidden Fee Traps: GST, Late Fees &amp; Mandates
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                An annual fee on a blocked card rarely stays small. If you uninstall the bank app or ignore statement emails, a small Rs 500 fee can grow into thousands of rupees within months.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                    <DollarSign className="w-4 h-4" />
                    <span>Annual Fee + 18% GST + Late Fee</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Once an annual fee is billed and left unpaid past the due date, the bank adds late payment charges (Rs 300 to Rs 1,300), finance charges (up to 42% per year), and 18% GST on every fee.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Recurring Mandates &amp; Add-On Plans</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Card Protection Plans (CPP), insurance add-ons, and standing instructions linked to your card account can still hit your bill. Check our guide on{' '}
                    <Link href="/rbi-card-tokenization-stop-merchant-charges-overdue" className="text-[#1886ff] font-semibold hover:underline">
                      stopping tokenized merchant charges
                    </Link>.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Overlimit Fees From Compounded Interest</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your blocked card had a small balance near the credit limit, added annual fees and interest can push the total over your limit and trigger extra overlimit penalties.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Blocked Replacement Card Trap</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you blocked a lost card and the bank auto-issued a replacement card you never activated, read our{' '}
                    <Link href="/unactivated-credit-card-charges-rbi-500-day-penalty" className="text-[#1886ff] font-semibold hover:underline">
                      RBI 30-day unactivated card rule
                    </Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="rbi-closure-penalty" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Closure Mandate &amp; Compensation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. RBI 7-Day Closure Rule &amp; Rs 500 Daily Penalty
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To stop banks from trapping customers with slow closure steps, the RBI enforces strict rules under Clause 9 of its Credit Card Master Direction.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, a bank must honour your request to close a credit card within 7 working days. This rule applies as soon as you clear all outstanding dues on the card.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, if the bank fails to close your card within 7 working days, it must pay you a penalty of Rs 500 per calendar day of delay. This penalty runs until the bank officially closes the account and notifies you via SMS or email.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, banks must accept closure requests through multiple easy channels. They must offer a helpline, dedicated email ID, IVR, mobile app, internet banking, or a clear link on their website. A bank cannot force you to visit a branch or send a physical letter.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="cibil-score-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Reporting &amp; Score Risk</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. How Unpaid Fees on Blocked Cards Hurt CIBIL
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A blocked credit card still shows as &ldquo;Active&rdquo; on your CIBIL, Experian, Equifax, and CRIF High Mark reports. Because banks now report credit data every 15 days, any unpaid annual fee shows up fast.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you do not pay the billed annual fee, your account moves to 30, 60, and 90 Days Past Due (DPD). A single 30+ DPD mark can drop a strong CIBIL score by 60 to 100 points and block future home or personal loans.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If this has already happened to you, check our detailed guide on fixing{' '}
                <Link href="/unused-credit-card-annual-fee-cibil-npa-rbi-closure" className="text-[#1886ff] font-semibold hover:underline">
                  CIBIL defaults from unused credit card annual fees
                </Link>.
              </p>
            </section>

            {/* SECTION 6 */}
            <section id="step-by-step-closure" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step Guide to Permanently Close a Card
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Never rely on &ldquo;Block Card&rdquo; when you want to stop using a credit card forever. Follow these five steps to close the account cleanly and avoid future fees.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Step 1: Redeem Rewards and Cancel Subscriptions
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Redeem all reward points before closing, as banks forfeit points upon closure. Cancel all OTT, utility, and SIP standing instructions linked to the card.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Step 2: Clear Total Outstanding and Unbilled EMIs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pay your total billed amount, unbilled spends, and any pending merchant EMIs. Confirm that your account balance is zero. If you overpaid, check our guide on{' '}
                    <Link href="/excess-overpayment-blocked-credit-card-refund-rbi-rule" className="text-[#1886ff] font-semibold hover:underline">
                      getting excess overpayment refunds on closed cards
                    </Link>.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Step 3: Submit a Formal Account Closure Request
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Use net banking, the bank mobile app, or send an email to the official credit card support address. Clearly write: &ldquo;Please permanently close my credit card account.&rdquo; Save the ticket or reference number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Step 4: Track the 7-Working-Day RBI Deadline
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The bank must close the card within 7 working days and send you an SMS or email confirmation. If it crosses 7 working days, demand the Rs 500 per day delay penalty in writing.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Step 5: Verify Closure Letter and CIBIL Report
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your zero-balance closure confirmation or{' '}
                    <Link href="/get-noc-after-loan-settlement" className="text-[#1886ff] font-semibold hover:underline">
                      No Objection Certificate (NOC)
                    </Link>. Check your CIBIL report after 30 to 45 days to confirm the status says &ldquo;Closed.&rdquo;
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="disputing-fees" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Reversing Unfair Charges</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Disputing Annual Fees on a Blocked Credit Card
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                What if your card was already blocked and the bank billed you an annual fee anyway? You have strong grounds to demand a full reversal if you never used the card or if you had asked for closure.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the Consumer Protection Act, 2019 (Section 2(11)), charging renewal fees on a permanently blocked card with no active service can amount to deficiency in service. If the bank also raised fees without a 30-day notice, cite our guide on{' '}
                <Link href="/credit-card-mitc-charges-changed-without-30-day-notice" className="text-[#1886ff] font-semibold hover:underline">
                  MITC fee changes without 30-day RBI notice
                </Link>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Also check the RBI 1-year inactivity rule. If your blocked card had zero transactions for over 12 months, the bank was required to send you a 30-day notice and close the account automatically.
              </p>
            </section>

            {/* SECTION 8 */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank to Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If customer care refuses to waive annual fees on a blocked card or delays closure beyond 7 working days, escalate using the RBI three-tier system.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Expected Action &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Days</td>
                      <td className="p-3">Audits block logs, reverses wrongful annual fees, and closes the card account.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Days</td>
                      <td className="p-3">Approves Rs 500/day delay compensation and instructs CIBIL record correction.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-GRO</td>
                      <td className="p-3">Files on cms.rbi.org.in; orders fee refund, Rs 500/day penalty, and CIBIL fix.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9 */}
            <section id="comparison-table" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Side-by-Side Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Blocking vs Closing: Complete Comparison Table
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This table shows how blocking (hotlisting) differs from permanent closure across fees, mandates, RBI penalties, and your CIBIL report.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Credit Card Blocking vs Permanent Closure</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">RBI Master Direction Rules</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Feature</th>
                        <th className="p-3">Blocking / Hotlisting</th>
                        <th className="p-3">Permanent Account Closure</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Account Status</td>
                        <td className="p-3 text-amber-700 font-semibold">Remains Open &amp; Active</td>
                        <td className="p-3 text-emerald-700 font-semibold">Permanently Closed</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Annual / Renewal Fees</td>
                        <td className="p-3 text-rose-600 font-semibold">Continues to be Billed</td>
                        <td className="p-3 text-emerald-700 font-semibold">Stops Immediately</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">New Card Purchases</td>
                        <td className="p-3">Stopped for Security</td>
                        <td className="p-3">Stopped Permanently</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">RBI Turnaround Limit</td>
                        <td className="p-3">Immediate (for lost card)</td>
                        <td className="p-3 font-mono font-bold text-slate-900">7 Working Days</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">RBI Delay Penalty</td>
                        <td className="p-3">Not Applicable for Closure</td>
                        <td className="p-3 font-mono font-bold text-[#1886ff]">Rs 500 per Calendar Day</td>
                      </tr>
                      <tr className="bg-blue-50/40">
                        <td className="p-3 font-medium text-slate-900">CIBIL Report Status</td>
                        <td className="p-3">Shows as Active Account</td>
                        <td className="p-3 font-semibold text-slate-900">Updated to &ldquo;Closed&rdquo;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 10 */}
            <section id="special-cases" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: Lost Cards, EMIs &amp; Add-On Cards
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Certain situations create extra confusion between blocking and closing. Here is how RBI rules apply in four common scenarios.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#1886ff]" />
                    Lost or Stolen Card Without Replacement
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you hotlist a stolen card and do not want a new one, tell the bank to close the account after hotlisting. Otherwise, the bank may mail a replacement card and keep charging annual fees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-emerald-600" />
                    Cards With Ongoing Merchant EMIs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A bank will not close your credit card while merchant EMIs are still running. You must foreclose the EMIs and pay all dues before the 7-day closure clock can start.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Merchant Refunds After Card Closure
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a merchant sends a refund to a card you already closed or blocked, the bank must transfer that credit balance to your bank account. See our{' '}
                    <Link href="/merchant-refund-on-blocked-settled-credit-card-recovery" className="text-[#1886ff] font-semibold hover:underline">
                      blocked card merchant refund guide
                    </Link>.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Add-On Cards &amp; Debt Settlement
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Blocking an add-on card does not close the primary card. If you are stuck in heavy card debt from piled-up fees, explore{' '}
                    <Link href="/services/credit-card-settlement" className="text-[#1886ff] font-semibold hover:underline">
                      legal credit card settlement options
                    </Link>.
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
                Frequently Asked Questions: Blocking vs Closing
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers to common questions on hotlisting vs closing a credit card, annual fee traps, RBI 7-day closure penalties, and CIBIL protection.
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
                Official Regulatory Citations &amp; Legal Authorities
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Master Direction:</strong> Reserve Bank of India (Credit Card and Debit Card - Issuance and Conduct) Directions, 2022 (Updated March 7, 2024), Clause 9 (Closure of Credit Card).
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Deficiency in Service and Statutory Compensation Adjudication via cms.rbi.org.in.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) (Deficiency of Service) and Section 39 (Compensation and Unfair Charge Reversal).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005:</strong> Accurate credit bureau reporting and dispute rectification rules.
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
                  <Link href="/unused-credit-card-annual-fee-cibil-npa-rbi-closure" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unused Card Annual Fee CIBIL Fix
                  </Link>
                  <Link href="/unactivated-credit-card-charges-rbi-500-day-penalty" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unactivated Card Rs 500/Day Rule
                  </Link>
                  <Link href="/rbi-card-tokenization-stop-merchant-charges-overdue" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Tokenized Merchant Charges
                  </Link>
                  <Link href="/excess-overpayment-blocked-credit-card-refund-rbi-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Excess Overpayment Refund Rules
                  </Link>
                  <Link href="/merchant-refund-on-blocked-settled-credit-card-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Merchant Refund on Blocked Card
                  </Link>
                  <Link href="/credit-card-mitc-charges-changed-without-30-day-notice" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    MITC Fee Change 30-Day Notice
                  </Link>
                  <Link href="/ots-payment-credited-to-regular-credit-card-bill-fix" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    OTS Payment Misapplied Fix
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After Closure
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
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
                Specialist in banking compliance, RBI credit card rules, fee disputes, and loan settlement resolutions helping Indian borrowers fight unfair charges.
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
                  CREDIT CARD FEE RELIEF
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Charged Annual Fees on a Blocked Card?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team disputes wrongful annual fees, files RBI Ombudsman claims for Rs 500/day closure delays, and helps clean up CIBIL defaults.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Dispute Card Fees Now
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
                  <span><strong>RBI 7-Day Rule Enforcement:</strong> Claim Rs 500/day for delayed closures.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Wrongful Fee Reversal:</strong> Audit and dispute hidden renewal charges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Dispute Support:</strong> Remove unfair DPD marks from blocked cards.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Escalation:</strong> Complete online filing on cms.rbi.org.in.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/unused-credit-card-annual-fee-cibil-npa-rbi-closure"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unused Card Annual Fee CIBIL Fix
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI 1-year inactivity rule &rarr;</span>
                </Link>

                <Link
                  href="/unactivated-credit-card-charges-rbi-500-day-penalty"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unactivated Card Charges &amp; Penalty
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI 30-day activation rule &rarr;</span>
                </Link>

                <Link
                  href="/services/credit-card-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Settlement Services
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Settle accumulated card debt &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
