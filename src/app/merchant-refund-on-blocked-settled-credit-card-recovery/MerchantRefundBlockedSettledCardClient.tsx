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
  Landmark
} from 'lucide-react';

export default function MerchantRefundBlockedSettledCardClient() {
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
    { id: 'closed-loop-rules', label: '1. Why Refunds Hit Closed Cards' },
    { id: 'rbi-credit-balance-law', label: '2. RBI Closed Card NEFT Mandate' },
    { id: 'four-card-scenarios', label: '3. Four Card Refund Scenarios' },
    { id: 'settled-card-ots-law', label: '4. Settled (OTS) Card Refund Law' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'arn-rrn-ledger-math', label: '6. ARN Tracking & Ledger Math' },
    { id: 'step-by-step-sop', label: '7. Step-by-Step NEFT Claim SOP' },
    { id: 'judicial-precedents', label: '8. Court & Consumer Rulings' },
    { id: 'escalation-timelines', label: '9. 3-Tier Escalation & Deadlines' },
    { id: 'common-mistakes-cases', label: '10. Chargebacks & DEA Fund Rules' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Does a merchant refund bounce back if my credit card is blocked or closed?',
      a: 'Usually no. Card networks route refunds using the original transaction reference. Even when the 16-digit card is blocked or closed, the refund lands in your card account ledger or the bank internal sundry pool.'
    },
    {
      q: 'What is the RBI rule for a credit balance in a closed credit card account?',
      a: 'Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct, 2022, any credit balance left in or sent to a closed credit card must be transferred to your savings bank account via NEFT or RTGS.'
    },
    {
      q: 'Why do merchants refuse to send my card refund to a savings account or UPI ID?',
      a: 'Payment gateways follow strict anti-money laundering and anti-fraud rules. Closed-loop refund rules force merchants to return money only to the original payment source to stop cash cycling and double chargebacks.'
    },
    {
      q: 'What is an ARN or RRN, and how does it help trace my stuck refund?',
      a: 'Visa and Mastercard assign a 23-digit Acquirer Reference Number (ARN) to every refund. RuPay assigns a 12-digit Retrieval Reference Number (RRN). Your card bank uses this number to locate cash in its suspense account.'
    },
    {
      q: 'What happens if a refund hits a card that is blocked due to unpaid overdue bills?',
      a: 'If your card is blocked for unpaid bills and not yet settled, the bank will not pay cash to you. Under Section 171 of the Indian Contract Act and RBI billing rules, the refund reduces your net overdue balance.'
    },
    {
      q: 'Can a bank keep my merchant refund after I finish a One-Time Settlement (OTS)?',
      a: 'It depends on what transaction was refunded and your OTS terms. If you already paid for that purchase earlier and hold an unconditional No Dues Certificate, Section 63 extinguishes old debt. Yet if the bank waived that exact unpaid swipe in OTS, the bank can adjust the reversal.'
    },
    {
      q: 'Does a refund credited after bill generation reduce my Minimum Amount Due?',
      a: 'Under the March 2024 RBI amendment, banks can charge interest and late fees only on the net unpaid balance after subtracting posted refunds. Still, check your issuer app to confirm whether Minimum Due needs a small direct payment.'
    },
    {
      q: 'Can I claim Rs 100 per day compensation for a delayed failed transaction reversal?',
      a: 'Yes, for failed online or POS card debits where the merchant got no payment confirmation. Under RBI Circular DPSS.CO.PD No.629 dated September 20, 2019, auto-reversal must finish in T+5 days or the bank owes Rs 100 per day.'
    },
    {
      q: 'What documents do banks ask for to release a closed card refund via NEFT?',
      a: 'Banks normally ask for a written refund request, the 23-digit ARN or 12-digit RRN from the merchant, self-attested KYC, and a cancelled cheque or bank statement showing your name, account number, and IFSC.'
    },
    {
      q: 'What happens to unclaimed refunds sitting in a closed credit card for years?',
      a: 'Credit balances left unclaimed for 10 years move to the RBI Depositor Education and Awareness (DEA) Fund under Section 26A of the Banking Regulation Act. You can still claim your money later through the same card bank.'
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
            <span>RBI Credit Card Master Direction &amp; Section 63 OTS Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How to Recover Refunds Sent to a Closed Credit Card
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did a store send a refund to a credit card that is now blocked, closed, or settled? Your money is not lost. Learn how RBI NEFT rules, 23-digit ARN codes, and OTS laws get your cash back.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Recover Stuck Card Refund</span>
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
                  Protected under RBI Circular RBI/2022-23/92 and the Indian Contract Act, 1872.
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
                <span>EXECUTIVE BRIEF: BLOCKED, CLOSED &amp; SETTLED CARD REFUND LAW</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Money Never Vanishes:</strong> Refunds sent to a blocked or closed card still reach your card bank. They land in your card ledger or the bank internal sundry pool.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">RBI Direct NEFT Rule:</strong> Under the RBI Credit Card Master Direction, banks must transfer any credit balance in a closed card directly to your savings account.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">23-Digit ARN Proof:</strong> Ask the merchant for the 23-digit ARN (Visa or Mastercard) or 12-digit RRN (RuPay). Banks must trace this reference number.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Overdue vs Settled Cards:</strong> On unpaid overdue cards, refunds cut your bill balance. On settled OTS cards, payout rights depend on whether you paid that bill earlier.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Ombudsman Relief:</strong> If a bank holds your refund past 30 days, you can file a free claim on the RBI CMS portal at cms.rbi.org.in.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Why Merchants Send Refunds to Blocked or Closed Cards */}
            <section id="closed-loop-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Payment Gateway &amp; Card Network Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Why Merchants Send Refunds to Blocked or Closed Cards
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Cardholders often panic when an airline, hotel, or shopping app sends a refund to a dead credit card. You may ask the store to pay your UPI ID or bank account instead. Almost every merchant will say no.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Merchants follow strict closed-loop rules set by Visa, Mastercard, RuPay, and payment gateways. Under anti-money laundering norms, a card purchase refund must go back to the exact original payment source.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If stores sent credit card refunds to savings accounts, users could turn credit limits into free cash. It would also let dishonest buyers take a bank transfer and still file a card chargeback later.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Here is the good news. Your 16-digit plastic card is only a key, not the whole bank ledger. Even when a card is hotlisted, expired, blocked, or closed, the payment network still delivers the money to your card bank.
              </p>
            </section>

            {/* SECTION 2: RBI Master Direction: Closed Card NEFT Refund Mandate */}
            <section id="rbi-credit-balance-law" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Consumer Protection Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI Master Direction: Closed Card NEFT Refund Mandate
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India sets strict rules in its Credit Card Master Direction, 2022 (Circular RBI/2022-23/92). This law binds every bank and card NBFC in India.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI rule on closed cards is direct and clear. Once a credit card is closed, the bank must send any credit balance to your savings bank account.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                What if the bank does not have your bank account number? Under RBI rules, the bank must reach out to you, get your bank details, and pay via NEFT or RTGS.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A bank cannot keep your excess cash in a hidden suspense account. Nor can it deduct fake service fees to wipe out a positive refund balance on a zero-dues closed card.
              </p>
            </section>

            {/* SECTION 3: Four Card Scenarios: Blocked, Closed, Overdue & Settled */}
            <section id="four-card-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Account Status Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Four Card Scenarios: Blocked, Closed, Overdue &amp; Settled
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Not every blocked card follows the same payout rule. What happens to your merchant refund depends on why the card was stopped and whether any unpaid debt remains.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[580px]">
                  <thead>
                    <tr className="bg-slate-900 text-white font-semibold">
                      <th className="p-3">Credit Card Status</th>
                      <th className="p-3">Where the Refund Lands</th>
                      <th className="p-3">Your Legal Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">1. Lost, Hotlisted or Upgraded Card</td>
                      <td className="p-3">Maps automatically to your new 16-digit replacement card ledger.</td>
                      <td className="p-3 text-emerald-700 font-semibold">Lowers next bill or transfers to bank on request.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">2. Closed Card With Zero Dues</td>
                      <td className="p-3">Creates a positive credit balance or sits in bank sundry pool.</td>
                      <td className="p-3 text-emerald-700 font-semibold">100% NEFT payout to your savings account under RBI law.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">3. Blocked Overdue or NPA Card</td>
                      <td className="p-3">Posts directly to your delinquent credit card account ledger.</td>
                      <td className="p-3 text-amber-800 font-semibold">Bank sets off refund against unpaid card dues (no cash out).</td>
                    </tr>
                    <tr className="bg-blue-50/50">
                      <td className="p-3 font-bold text-slate-900">4. Settled Card After OTS &amp; NOC</td>
                      <td className="p-3">Hits closed write-off ledger or bank internal suspense pool.</td>
                      <td className="p-3 text-[#1886ff] font-semibold">NEFT payout if purchase was already paid; adjusted if waived.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Look closely at Scenario 3. Suppose your card is blocked for missed bills while you plan a <Link href="/services/credit-card-settlement" className="text-[#1886ff] font-semibold hover:underline">credit card settlement</Link>. Any refund posted before OTS cuts your unpaid debt first. Under the March 7, 2024 RBI rule (Circular DoR.AUT.REC.86), banks can charge interest and late fees only on the net sum left after refunds post.
              </p>
            </section>

            {/* SECTION 4: Refunds on Settled (OTS) Cards: Section 63 & Bank Lien */}
            <section id="settled-card-ots-law" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Post-Settlement Legal Audit</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Refunds on Settled (OTS) Cards: Section 63 &amp; Bank Lien
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Big disputes often start after a <Link href="/rbi-circular-on-loan-settlement-ots" className="text-[#1886ff] font-semibold hover:underline">One-Time Settlement (OTS)</Link>. Suppose you owed Rs 1,50,000, paid Rs 65,000 to settle, and got a No Dues Certificate (NOC). Two months later, an airline sends a Rs 25,000 ticket refund to that settled card.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many banks quietly keep that Rs 25,000 and blame the Rs 85,000 waiver they gave earlier. Whether the bank can keep it depends on two clear legal tests.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Case A: You Already Paid for That Item Before Default.</strong> Suppose you bought a ticket a year ago and paid that monthly card bill in full. Later, you defaulted on newer bills and settled the card with a clear <Link href="/get-noc-after-loan-settlement" className="text-[#1886ff] font-semibold hover:underline">No Dues Certificate</Link>. Under Section 63 of the Indian Contract Act, 1872, that OTS wiped out the old debt. Keeping your paid ticket refund violates Section 72.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Case B: The Refunded Swipe Was Part of the Waived Debt.</strong> Suppose you swiped Rs 50,000 for a phone, never paid that bill, settled for 40%, and then cancelled the order. You cannot take both a debt waiver and cash back on an unpaid swipe. Also check your OTS letter terms and check for other unpaid loans under <Link href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act" className="text-[#1886ff] font-semibold hover:underline">Section 171 banker&apos;s lien rules</Link>.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: ARN Refund Tracking &amp; NEFT Recovery
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This chart shows how store refunds move via ARN or RRN codes into closed card ledgers. It also shows how RBI rules send clean credit balances to your bank account.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/merchant-refund-on-blocked-settled-credit-card-recovery.jpg"
                    alt="Merchant Refund on Blocked, Closed, or Settled Credit Card RBI NEFT Recovery Flow"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Card Refund Recovery Framework • RBI Master Direction Compliant</span>
                  <a
                    href="/images/infographics/merchant-refund-on-blocked-settled-credit-card-recovery.jpg"
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

            {/* SECTION 6: ARN vs RRN Tracking & Sample Refund Adjustment Math */}
            <section id="arn-rrn-ledger-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Reference Codes &amp; Ledger Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. ARN vs RRN Tracking &amp; Sample Refund Adjustment Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Phone banking agents often say they see no refund on your closed card. That happens because frontline staff only check your statement screen, not the bank back-end clearing suspense pool.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To force a back-end trace, ask the merchant for the official network reference number. Visa and Mastercard refunds carry a unique <strong>23-digit Acquirer Reference Number (ARN)</strong>. <Link href="/rupay-credit-card-upi-debt-default-settlement-rules" className="text-[#1886ff] font-semibold hover:underline">RuPay credit card</Link> and domestic refunds carry a <strong>12-digit Retrieval Reference Number (RRN)</strong>.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample Rs 30,000 Refund Impact Across Card States</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">RBI Ledger Comparison</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Account Situation</th>
                        <th className="p-3">Balance Before Refund</th>
                        <th className="p-3">Rs 30,000 Refund Action</th>
                        <th className="p-3 text-right">Net Cash or Debt Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Closed Card (Zero Dues)</td>
                        <td className="p-3 font-mono">Rs 0</td>
                        <td className="p-3 text-emerald-600 font-semibold">Credited to Closed Ledger</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">Rs 30,000 NEFT to You</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Closed With Small Credit</td>
                        <td className="p-3 font-mono">Rs 1,200 Credit</td>
                        <td className="p-3 text-emerald-600 font-semibold">Added to Credit Balance</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">Rs 31,200 NEFT to You</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Blocked Overdue (Pre-OTS)</td>
                        <td className="p-3 font-mono text-amber-700">Rs 90,000 Due</td>
                        <td className="p-3 text-amber-700 font-semibold">Set Off Under RBI Rule</td>
                        <td className="p-3 text-right font-bold text-amber-800 font-mono">Net Due Drops to Rs 60,000</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Settled OTS (Prior Paid Bill)</td>
                        <td className="p-3 font-mono text-[#1886ff]">Rs 0 (NOC Issued)</td>
                        <td className="p-3 text-[#1886ff]">Section 63 &amp; 72 Claim</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">Rs 30,000 NEFT Claimable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 7: Step-by-Step SOP: Claiming Refunds via NEFT Transfer */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Step-by-Step SOP: Claiming Refunds via NEFT Transfer
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six practical steps to move a stuck refund from a closed or settled card into your active savings account.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Step 1: Collect Written ARN or RRN Proof From the Merchant
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Wait 3 to 5 business days after the merchant confirms refund dispatch. Ask merchant support for an email showing the exact refund amount, date, last 4 card digits, and the 23-digit ARN or 12-digit RRN.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Step 2: Check Closure Letter or OTS No Dues Certificate
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Keep your zero-dues closure email or <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[#1886ff] font-semibold hover:underline">verified OTS closure letter</Link> ready. If your card was settled, pull the old bill statement proving you paid for that item before default.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Step 3: Email the Card Grievance Desk for a Sundry Trace
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Do not rely on phone calls. Email the bank credit card grievance cell asking them to trace the ARN in their Visa, Mastercard, or RuPay inward clearing and sundry suspense account.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Step 4: Submit NEFT Mandate and Cancelled Cheque Leaf
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Attach a clear scan of a cancelled cheque with your printed name, IFSC code, and active savings account number, along with self-attested PAN or Aadhaar KYC.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Step 5: Cite RBI Credit Balance Transfer Mandate in Writing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Mention RBI Master Direction RBI/2022-23/92 in your email. Demand direct NEFT release of your post-closure credit balance within 7 to 10 working days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Step 6: Escalate to Principal Nodal Officer and RBI CMS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank delays past 30 days or wrongly retains cash after an unconditional NOC, file a formal complaint on cms.rbi.org.in for refund payout plus compensation.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Court Rulings: Accord, Unjust Enrichment & Deficiency */}
            <section id="judicial-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory &amp; Judicial Foundations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Court Rulings: Accord, Unjust Enrichment &amp; Deficiency
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts and consumer commissions take a strict view when banks hold back customer funds without legal authority. Four established legal pillars protect your claim.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>SC: Lala Kapurchand Godha (1963)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Interpreting Section 63 of the Indian Contract Act, the Supreme Court held that once a creditor accepts a reduced sum in full and final settlement, the whole debt stands discharged.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Section 72: Ban on Unjust Enrichment</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    As affirmed by the Supreme Court in Kanhaiya Lal Saraf and Mafatlal Industries, Section 72 bars any institution from keeping money received by mistake that belongs to another party.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Consumer Act Section 2(11) Deficiency</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Consumer commissions consistently hold that parking a closed card refund in a suspense account and making customers run pillar to post is a deficiency in banking service.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>RBI TAT Circular: Rs 100/Day Rule</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For failed online or POS swipes where the merchant got no value, RBI Circular DPSS.CO.PD No.629 mandates reversal in T+5 days, with a Rs 100 daily penalty for bank delay.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix & RBI Turnaround Deadlines */}
            <section id="escalation-timelines" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation &amp; Deadlines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. 3-Tier Escalation Matrix &amp; RBI Turnaround Deadlines
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Never let a ticket drag on for months on phone support. Use this three-tier banking escalation path to recover stuck refunds fast.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Authority to Contact</th>
                      <th className="p-3">Response Window</th>
                      <th className="p-3">Action &amp; Relief Granted</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 1: Card Grievance</td>
                      <td className="p-3">Credit Card Grievance Redressal Cell</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Traces 23-digit ARN in clearing files and triggers NEFT credit balance payout.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 2: Bank PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">10 to 15 Working Days</td>
                      <td className="p-3">Audits OTS NOC terms, overrides wrong write-off holds, and clears suspense funds.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Tier 3: RBI Ombudsman</td>
                      <td className="p-3">RBI Integrated Ombudsman (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">After 30 Days Total</td>
                      <td className="p-3">Orders full NEFT refund, applicable TAT compensation, and CIBIL correction if needed.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Common Mistakes, Chargebacks & DEA Fund Rules */}
            <section id="common-mistakes-cases" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <UserCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Edge Cases &amp; Precautions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Common Mistakes, Chargebacks &amp; DEA Fund Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Small procedural errors can delay your refund or create unexpected CIBIL remarks. Watch out for these four special cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Accepting Store Wallet Vouchers Blindly
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your card is blocked for unpaid bills, taking a non-transferable store voucher instead of a source refund leaves your high-interest card bill unchanged. Weigh interest cost first.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Post-Closure Chargeback Credits
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Won a fraud or non-delivery chargeback after closing your card? That reversal follows the exact same RBI Master Direction rule and must be sent to your bank account via NEFT.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    10-Year RBI DEA Fund Transfer Rule
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 26A of the Banking Regulation Act, unclaimed credit balances in closed cards move to the RBI DEA Fund after 10 years. You can still claim them via KYC at the issuing bank.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Checking CIBIL After Post-OTS Credits
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sometimes a late refund re-opens an internal closed card ledger and triggers a wrong reporting feed. Always audit your credit report and file a <Link href="/cibil-dispute-wrong-overdue-entry-filing-process" className="text-[#1886ff] font-semibold hover:underline">CIBIL dispute</Link> if status shifts.
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
                Frequently Asked Questions: Closed &amp; Settled Card Refunds
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers on ARN tracking, RBI closed card NEFT rules, overdue card set-off, and post-settlement refund recovery in India.
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
                Official RBI Circulars &amp; Statutory Legal Citations
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Master Direction (Credit Card &amp; Debit Card Issuance and Conduct Directions, 2022):</strong> RBI/2022-23/92, DoR.AUT.REC.No.27/24.01.041/2022-23 (dated April 21, 2022) and Amendment Circular RBI/2023-24/132, DoR.AUT.REC.86/24.01.041/2023-24 (dated March 7, 2024).
                </li>
                <li>
                  <strong>RBI Harmonisation of Turn Around Time (TAT) Circular:</strong> RBI/2019-20/67, DPSS.CO.PD No.629/02.01.014/2019-20 (dated September 20, 2019) on T+5 Auto-Reversal and Rs 100/Day Compensation.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 63 (Remission of Performance &amp; Full Satisfaction), Section 72 (Restitution of Money Paid by Mistake), and Section 171 (General Lien of Bankers).
                </li>
                <li>
                  <strong>Banking Regulation Act, 1949:</strong> Section 26A (Depositor Education and Awareness Fund Rules for 10-Year Unclaimed Credit Balances).
                </li>
                <li>
                  <strong>Supreme Court Precedents &amp; Consumer Law:</strong> Lala Kapurchand Godha v. Mir Nawab Himayatalikhan Azamjah, AIR 1963 SC 250; Sales Tax Officer v. Kanhaiya Lal Mukund Lal Saraf, AIR 1959 SC 135; Consumer Protection Act, 2019, Section 2(11).
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
                  <a href="https://udgam.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI UDGAM Unclaimed Funds</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.npci.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>NPCI &amp; RuPay Network</span>
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
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/rbi-circular-on-loan-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI OTS Settlement Circular
                  </Link>
                  <Link href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 171 Bank Set-Off Law
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Letter
                  </Link>
                  <Link href="/jumbo-insta-loan-on-credit-card-default-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Jumbo Loan on Card Rules
                  </Link>
                  <Link href="/fd-backed-secured-credit-card-default-liquidation-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    FD-Backed Card Default Law
                  </Link>
                  <Link href="/rupay-credit-card-upi-debt-default-settlement-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RuPay UPI Credit Card Rules
                  </Link>
                  <Link href="/add-on-supplementary-credit-card-default-liability" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Add-On Card Liability Law
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Rs 100/Day CIBIL Penalty
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
                Specialist in RBI credit card compliance, payment dispute resolution, banker&apos;s lien audits, and One-Time Settlement (OTS) closures across major Indian card issuers.
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
                  CARD REFUND &amp; OTS HELP
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Refund Stuck in a Blocked or Settled Card?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking legal team traces 23-digit ARN credits, challenges unlawful post-OTS holds, and helps you settle overdue credit cards with up to 50% to 75% relief.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Legal Assistance Now
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
                  <span><strong>ARN &amp; Sundry Audit:</strong> Back-end clearing trace with Bank PNO.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct NEFT Release:</strong> Enforcing RBI closed card payout rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 63 OTS Defense:</strong> Protecting unconditional NOC finality.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Filing:</strong> End-to-end CMS escalation support.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/get-noc-after-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Get NOC After Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Unconditional closure steps &rarr;</span>
                </Link>

                <Link
                  href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Banker&apos;s Right of Set-Off (Sec 171)
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">When banks can adjust funds &rarr;</span>
                </Link>

                <Link
                  href="/jumbo-insta-loan-on-credit-card-default-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Jumbo &amp; Insta Loan on Card Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Dual account OTS rules &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
