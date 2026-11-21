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
  Sparkles,
  Gavel,
  Landmark,
  Calendar
} from 'lucide-react';

export default function CreditCardRewardPointsForfeitureClient() {
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
    { id: 'statutory-framework', label: '1. RBI Master Direction & MITC' },
    { id: 'freeze-vs-forfeiture', label: '2. Freeze vs Permanent Forfeiture' },
    { id: 'issuer-comparison', label: '3. Bank MITC Comparison Table' },
    { id: 'pre-default-cashout', label: '4. Pre-Default Point Cashout SOP' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'ots-settlement-math', label: '6. Reward Value vs OTS Savings' },
    { id: 'negative-points-clawback', label: '7. Negative Points & Clawbacks' },
    { id: 'unfair-forfeiture-remedies', label: '8. Challenging Unfair Forfeiture' },
    { id: 'escalation-matrix', label: '9. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '10. Grace to NPA Timeline' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank legally forfeit my credit card reward points when my account is overdue?',
      a: 'Yes, if your bank states this rule in its Most Important Terms and Conditions (MITC). Under RBI rules, reward points are contract perks, not cash savings. Banks block point use on late bills and wipe them out on hard default.'
    },
    {
      q: 'Do banks freeze reward points immediately on the payment due date?',
      a: 'No. Under the RBI Master Direction on Credit Cards, banks must give a 3-day grace window past the due date. Your card is not marked late during these three days. Your reward portal also stays open.'
    },
    {
      q: 'Will my frozen reward points return if I pay my overdue credit card bill?',
      a: 'Yes, if the delay is short (under 30 to 60 days) and your card is still open. Paying at least the Minimum Amount Due lifts the short-term freeze. Once a card hits 90-day NPA status, lost points do not come back.'
    },
    {
      q: 'Can I force the bank to adjust forfeited reward points against my One-Time Settlement (OTS)?',
      a: 'No. Once your card hits 90-day NPA default, unused points expire under MITC default terms. You cannot force a set-off for lost points during OTS. Still, banks often cut 50% to 75% of total dues in OTS.'
    },
    {
      q: 'How should I use my reward points if I know I cannot pay next month’s credit card bill?',
      a: 'Act while your card is still active and on time. Log into your bank app and turn your points into statement cash credit. This cash credit cuts your billed amount right away before any freeze starts.'
    },
    {
      q: 'What happens to reward points when I request voluntary credit card closure?',
      a: 'Under RBI rules, banks must close a zero-dues card in 7 working days or pay a ₹500 daily fine. Unused points expire as soon as the card closes. Always cash out all points before you ask to close the card.'
    },
    {
      q: 'What are negative reward points and can a bank charge money for them?',
      a: 'Negative points happen when you spend points from a swipe and later cancel that order for a refund. The bank takes back those points, pushing your balance below zero. On card closure, the bank can bill you in rupees for that deficit.'
    },
    {
      q: 'Can a bank forfeit my reward points without notice if my card is NOT overdue?',
      a: 'No. Under RBI rules and the Consumer Protection Act, 2019, banks cannot wipe out points on a clean card without fair notice. Unfair point removal is a service fault that you can report to the RBI Ombudsman.'
    },
    {
      q: 'Are my reward points safe if my bill is unpaid due to a pending fraud dispute?',
      a: 'Yes. If you report a fraud swipe on time under RBI Zero Liability rules, the bank must give shadow credit. The bank cannot treat that disputed sum as late or wipe out your earned points.'
    },
    {
      q: 'Should I pay the Minimum Amount Due just to save my accumulated reward points?',
      a: 'No. Paying only the Minimum Amount Due triggers 36% to 45% yearly interest plus 18% GST on your whole bill. One month of card interest often costs more than your points are worth. Saving cash for a clean OTS saves much more.'
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
            <span>RBI Master Direction DoR.AUT.REC.27 &amp; MITC Compliance</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can Banks Forfeit Credit Card Reward Points on Default?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Find out when banks can freeze or cancel credit card reward points on late bills under RBI MITC rules. Learn how to cash out points before default, fight unfair cuts, and settle debt legally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Resolve Overdue Credit Card Debt</span>
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
                  Protected under RBI Master Direction RBI/2022-23/92 and the Consumer Protection Act, 2019.
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
                <span>EXECUTIVE BRIEF: CREDIT CARD REWARD POINTS FORFEITURE RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">MITC Contract Rules Apply:</strong> Reward points are contract perks under your bank&apos;s Most Important Terms and Conditions (MITC). They are not cash bank deposits.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">3-Day RBI Grace Window:</strong> Banks cannot mark your card late, add fines, or lock your reward portal during the 3-day grace window past the due date.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Freeze First, Wipeout Later:</strong> Missing the Minimum Amount Due locks point use for a short time. Crossing 60 to 90 Days Past Due (NPA) wipes points out for good.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Cash Out Before Default:</strong> Turn your earned points into statement cash credit while your card is still active and before asking to close it.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">OTS Beats Point Value:</strong> Never pay 42% card interest just to save small points. An RBI One-Time Settlement (OTS) cuts 50% to 75% of total dues.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: RBI Master Direction & MITC Rules on Reward Points */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Rules &amp; Contractual Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Master Direction &amp; MITC Rules on Reward Points
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many users think credit card reward points work like cash in a savings account. Under Indian banking law, that view is incorrect. Reward points, CashPoints, and air miles are loyalty perks tied to your card contract.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India governs cards under the Master Direction on Credit Card and Debit Card Issuance and Conduct Directions, 2022 (Circular RBI/2022-23/92, updated March 7, 2024). RBI orders every bank to run point and cashback plans in an open, fair way.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Each bank must keep clear book records for all earned points. It must also print full rules on point earning, expiry, and loss inside the Most Important Terms and Conditions (MITC) shared when you get the card.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The MITC acts as a valid contract under the Indian Contract Act, 1872. If your MITC states that points expire on default, the bank can cancel them when bills stay unpaid. Still, a bank cannot change MITC reward rules in secret without giving you clear advance notice.
              </p>
            </section>

            {/* SECTION 2: Temporary Freeze vs Permanent Reward Point Forfeiture */}
            <section id="freeze-vs-forfeiture" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Overdue Stages &amp; Portal Blocks</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Temporary Freeze vs Permanent Reward Point Forfeiture
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks do not wipe out your whole point balance on the night you miss a due date. Instead, Indian card issuers follow three clear stages based on your Days Past Due (DPD) count.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Stage one is the 3-day RBI grace window past your Payment Due Date. During these three days, banks cannot add late fees, report defaults to CIBIL, or lock your reward tab.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Stage two is a short-term freeze from Day 4 to Day 60 past due (SMA-0 and SMA-1). Once the Minimum Amount Due stays unpaid past the grace window, the bank locks the redeem button on its app. You also stop earning new points, though paying the late bill usually unlocks old points.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Stage three is total loss when your card crosses 60 to 90 Days Past Due into <Link href="/credit-card-npa-timeline" className="text-[#1886ff] font-semibold hover:underline">Non-Performing Asset (NPA) status</Link> or gets closed by the bank. At this point, the bank wipes all unused points to zero. Even if you pay or settle later, lost points will not return.
              </p>
            </section>

            {/* SECTION 3: Bank MITC Comparison: HDFC, SBI, ICICI & Axis Rules */}
            <section id="issuer-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Major Indian Card Issuer Policies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Bank MITC Comparison: HDFC, SBI, ICICI &amp; Axis Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every large Indian bank puts strict late-payment rules in its MITC guide. Normal point life runs for two to three years, yet bill defaults speed up point loss across all major banks.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Card Issuer</th>
                      <th className="p-3">Normal Point Life</th>
                      <th className="p-3">Late Bill Freeze Rule</th>
                      <th className="p-3">Permanent Loss Trigger</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">HDFC Bank</td>
                      <td className="p-3">2 years (3 years on Infinia &amp; Diners Black)</td>
                      <td className="p-3">Point use locked once MAD is missed past grace days</td>
                      <td className="p-3">Wiped to zero on card block, 90-day NPA, or OTS deal</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">SBI Card</td>
                      <td className="p-3">24 months from earn month</td>
                      <td className="p-3">Portal locked as soon as bill turns overdue</td>
                      <td className="p-3">All saved points lapse right away on card cancel or NPA</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">ICICI Bank</td>
                      <td className="p-3">2 to 3 years (Direct payout on co-brand cards)</td>
                      <td className="p-3">Bank points frozen during unpaid bill cycles</td>
                      <td className="p-3">Bank points lost on default; past partner wallet cash stays safe</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Axis Bank (EDGE)</td>
                      <td className="p-3">3 years from credit date</td>
                      <td className="p-3">EDGE portal locked when account is past due</td>
                      <td className="p-3">Points wiped at 60 to 90+ DPD breach or card write-off</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Amex / Kotak / IDFC</td>
                      <td className="p-3">2 to 3 years (No expiry on select cards)</td>
                      <td className="p-3">Point use paused while Minimum Due is unpaid</td>
                      <td className="p-3">Even non-expiring points lapse for good when card is revoked</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Pre-Default Strategy: Cash Out Points Before Missing Due */}
            <section id="pre-default-cashout" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Pre-Default Strategy: Cash Out Points Before Missing Due
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you face a job loss, pay cut, or health crisis, act before your next due date passes. Follow these six simple steps to save the cash value of your points before any bank lock begins.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Check Your Point Balance While Card Is Active
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Open your card app while your bill status is still on time. Save a copy of your latest bill showing your point count and cash rate.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Turn Points Into Statement Cash Credit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pick statement cash credit instead of gift items. Cash credit trims your actual card bill within two to three working days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Shift Miles to Partner Apps If Cash Value Is Low
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If your bank gives very low cash rates, move points to airline, hotel, or partner wallets before missing a bill. Once points leave the bank, a later card block cannot touch them.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Use All Points Before a 7-Day Card Closure Request
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Redeem every point before asking to close a debt-free card. Under RBI rules, banks must close zero-dues cards in 7 working days (or pay ₹500 per day fine), and unused points die on closure.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Skip the Minimum Amount Due Debt Trap
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never take new loans to pay the <Link href="/credit-card-minimum-due-trap" className="text-[#1886ff] font-semibold hover:underline">Minimum Amount Due</Link> just to keep points unlocked. Paying 3.5% monthly interest drains far more money than points return.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Plan an RBI OTS When You Cannot Pay Full Dues
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    After cashing out your points, keep your savings in a separate bank. You can then seek a clean <Link href="/credit-card-settlement-process" className="text-[#1886ff] font-semibold hover:underline">credit card One-Time Settlement</Link> once the account enters NPA.
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
                5. Visual Blueprint: Reward Forfeiture &amp; Protection Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This clear chart shows how RBI MITC rules treat reward points on late bills. It also outlines how to cash out points early and settle unpayable card debt safely.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/credit-card-reward-points-forfeiture-overdue-rules.jpg"
                    alt="Credit Card Reward Points Forfeiture on Overdue Rules and RBI MITC Protection"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Credit Card Reward &amp; Settlement Guide • RBI Master Direction Compliant</span>
                  <a
                    href="/images/infographics/credit-card-reward-points-forfeiture-overdue-rules.jpg"
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

            {/* SECTION 6: Reward Value vs OTS Waiver: Financial Comparison Math */}
            <section id="ots-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Debt Economics &amp; Settlement Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Reward Value vs OTS Waiver: Financial Comparison Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Recovery agents often warn that you will lose 40,000 reward points if you miss your bill. Check the real rupee math before falling for that line. Most Indian cards value one point at just ₹0.20 to ₹0.25 in cash.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under <Link href="/rbi-circular-on-loan-settlement-ots" className="text-[#1886ff] font-semibold hover:underline">RBI Circular DOR.STR.REC.20/21.04.048/2023-24</Link> (June 8, 2023), every bank holds a Board-approved OTS policy for NPA cards. Compare a ₹10,000 point loss with a <Link href="/credit-card-settlement-discount" className="text-[#1886ff] font-semibold hover:underline">50% to 75% OTS cut</Link> on a ₹3,00,000 card debt below.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample ₹3,00,000 Card Bill: Point Loss vs OTS Relief</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">40,000 Points (@ ₹0.25 = ₹10,000)</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Bill Item</th>
                        <th className="p-3">Minimum Due Trap (6 Months)</th>
                        <th className="p-3">RBI Compromise OTS</th>
                        <th className="p-3 text-right">Net Borrower Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Spent Card Principal</td>
                        <td className="p-3 font-mono">₹3,00,000</td>
                        <td className="p-3 font-mono">₹3,00,000</td>
                        <td className="p-3 text-right font-semibold text-emerald-700">55% Principal Cut in OTS</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">6-Month Interest (42% APR) &amp; Late Fees</td>
                        <td className="p-3 font-mono text-amber-700 font-bold">+ ₹78,000 Paid</td>
                        <td className="p-3 text-emerald-700 font-semibold">100% Waived in OTS</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">₹78,000 Saved</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">18% GST on Interest &amp; Fines</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">+ ₹14,040 Paid</td>
                        <td className="p-3 text-emerald-700 font-semibold">Dropped With Waiver</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">₹14,040 Saved</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">40,000 Reward Points Value</td>
                        <td className="p-3 text-emerald-600 font-semibold">₹10,000 Kept Open</td>
                        <td className="p-3 text-rose-600 font-semibold">₹10,000 Lost (if not cashed early)</td>
                        <td className="p-3 text-right font-bold text-slate-600 font-mono">- ₹10,000 Point Loss</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Cash Paid &amp; Final Status</td>
                        <td className="p-3 font-mono text-rose-700">₹92,040 Gone (Still Owe ₹2.9L)</td>
                        <td className="p-3 font-mono text-[#1886ff]">₹1,35,000 Closed + NDC</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹2,47,040 Net Savings</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 7: Negative Reward Points, Clawbacks & Refund Debits */}
            <section id="negative-points-clawback" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Clawback Audits &amp; Fraud Traps</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Negative Reward Points, Clawbacks &amp; Refund Debits
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Check for negative reward points before you close or settle any card. Suppose you buy an item, earn points, spend those points right away, and later return the item for a refund. The bank will take back the points earned on that cancelled order.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Since your point balance was already zero, this clawback drops your tally below zero (such as -8,000 points). Under MITC rules at Axis Bank, HDFC Bank, and SBI Card, banks turn negative points into a rupee charge on your final card bill.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When settling a card via OTS, ensure your sanction letter covers principal, interest, fines, and any negative point charges in one lump sum. Always <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[#1886ff] font-semibold hover:underline">verify your OTS letter</Link> so no hidden reward debit stays open later.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Also watch out for fake &quot;Reward Points Expiring Tonight&quot; calls and SMS links. Fraud callers pose as bank staff and send fake APK apps to steal OTPs. Real banks never ask for an OTP or screen share to cash out card points.
              </p>
            </section>

            {/* SECTION 8: Challenging Arbitrary Forfeiture: Consumer & RBI Law */}
            <section id="unfair-forfeiture-remedies" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Consumer Commission &amp; Ombudsman Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Challenging Arbitrary Forfeiture: Consumer &amp; RBI Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks can cancel points on real defaults, yet they cannot wipe out earned points unfairly when your account is clean. Consumer Commissions and the RBI Ombudsman step in when banks cancel points without fair notice or proof.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Sudden Card Block Without Proof</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks sometimes block active cards over vague business-use claims and erase large point balances. Under Section 2(11) of the Consumer Protection Act, 2019, wiping points without notice or proof is a service fault.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>MITC Rule Cut Without Prior Notice</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Master Direction rules, banks must warn cardholders in advance before cutting point value or expiry time. Secret cuts can be challenged on the RBI CMS portal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Pending Chargeback &amp; Fraud Claims</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Zero Liability Circular DBR.No.Leg.BC.78/09.07.005/2017-18, banks cannot mark a reported fraud swipe as late during inquiry. Any points lost over a fraud bill must be given back.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Failed Auto-Debit Tech Glitches</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your bank account held full cash yet the bank&apos;s auto-pay system failed, you are not at fault. Demand full return of late fees, CIBIL score fixes, and frozen points.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank unfairly wipes points on a clean card, bills a wrong clawback, or delays your OTS letter, escalate step by step below. File with either the RBI Ombudsman or Consumer Court at one time, not both at once for the same claim.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Banking Authority</th>
                      <th className="p-3">Reply Window</th>
                      <th className="p-3">Relief &amp; Action Scope</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Card Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Checks point logs, verifies 3-day grace rules, and lifts wrong app blocks.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">Up to 30 Days Total</td>
                      <td className="p-3">Audits MITC notice proof, drops unfair clawbacks, or clears OTS terms.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI / Forum</td>
                      <td className="p-3">RBI Ombudsman or e-Jagriti Forum</td>
                      <td className="p-3 font-mono">After 30 Days Post-GRO</td>
                      <td className="p-3">Orders return of unfairly wiped points or grants payout via cms.rbi.org.in.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Delinquency Timeline: 3-Day Grace to NPA Settlement */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Delinquency Timeline: 3-Day Grace to NPA Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this timeline so you know the exact day your point cashout window shuts and when formal OTS debt relief opens.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Time Window</th>
                      <th className="p-3">Card Stage</th>
                      <th className="p-3">Reward Points Status</th>
                      <th className="p-3">Smart Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Before Due Date</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">Active Card</td>
                      <td className="p-3">100% open for cash credit, vouchers, or partner shift.</td>
                      <td className="p-3">Cash out all points to bill credit if money is tight ahead.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Days 1 to 3 Past Due</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-600 font-bold">RBI Grace Window</td>
                      <td className="p-3">Safe from late tag; reward portal stays open.</td>
                      <td className="p-3">Pay bill within 3 days to avoid late fines and CIBIL drop.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Days 4 to 30 Past Due</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">SMA-0 Overdue</td>
                      <td className="p-3">Point use locked; new point earning paused.</td>
                      <td className="p-3">Clear bill if crunch is brief, or stop paying Minimum Due.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Days 31 to 89 Past Due</td>
                      <td className="p-3 font-mono text-[11px] text-rose-600 font-bold">SMA-1 &amp; SMA-2</td>
                      <td className="p-3">Card blocked; bank sends default and cancel notice.</td>
                      <td className="p-3">Keep hardship records and <Link href="/stop-credit-card-recovery-calls" className="text-[#1886ff] font-semibold hover:underline">use RBI call protection rules</Link>.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 90+ Past Due</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">NPA &amp; OTS Stage</td>
                      <td className="p-3">Unused points wiped for good under MITC rules.</td>
                      <td className="p-3 font-bold text-slate-900">Settle for 50% to 75% waiver and get <Link href="/get-noc-after-loan-settlement" className="text-[#1886ff] hover:underline">No Dues Certificate</Link>.</td>
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
                Frequently Asked Questions: Credit Card Reward Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Plain answers to key questions on credit card reward loss, RBI 3-day grace rules, negative point charges, and OTS debt relief.
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
                  <strong>RBI Master Direction on Credit Cards:</strong> RBI/2022-23/92, DoR.AUT.REC.No.27/24.01.041/2022-23 (updated March 7, 2024). Covers MITC terms, 3-day grace window, point rules, and 7-day card closure.
                </li>
                <li>
                  <strong>RBI Compromise Settlement Rules:</strong> Circular DOR.STR.REC.20/21.04.048/2023-24 dated June 8, 2023. Governs Board-approved One-Time Settlement (OTS) plans for unpaid cards.
                </li>
                <li>
                  <strong>RBI Zero Liability Circular:</strong> DBR.No.Leg.BC.78/09.07.005/2017-18 dated July 6, 2017. Protects reported fraud swipes from late interest or point loss.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Official portal at cms.rbi.org.in to dispute unfair reward point loss or MITC notice breaches.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019 &amp; Indian Contract Act, 1872:</strong> Sections 2(11) and 2(47) of CPA 2019 on service fault and unfair trade rules read with MITC contracts.
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
                    <span>e-Jagriti Consumer Commission Portal</span>
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
                  <Link href="/credit-card-settlement-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Process
                  </Link>
                  <Link href="/credit-card-minimum-due-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Escape Minimum Due Trap
                  </Link>
                  <Link href="/credit-card-npa-timeline" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card NPA Timeline
                  </Link>
                  <Link href="/credit-card-settlement-discount" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    50% to 75% Card OTS Waiver
                  </Link>
                  <Link href="/settle-multiple-credit-cards" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Settle Multiple Credit Cards
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Relief Program
                  </Link>
                  <Link href="/rupay-credit-card-upi-debt-default-settlement-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RuPay UPI Credit Card Default
                  </Link>
                  <Link href="/jumbo-insta-loan-on-credit-card-default-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Jumbo Loan on Card Settlement
                  </Link>
                  <Link href="/add-on-supplementary-credit-card-default-liability" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Add-On Card Default Liability
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After Settlement
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
                Specialist in RBI credit card rules, MITC disputes, recovery call protection, and One-Time Settlement deals across major Indian banks.
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
                  Overdue Credit Card Spiraling Out of Control?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Stop paying 42% card interest just to save small points. Our legal team halts recovery calls, checks unfair bank charges, and secures 50% to 75% RBI-compliant OTS cuts.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Check Your Card OTS Eligibility
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
                  <span><strong>50% to 75% OTS Relief:</strong> Cut high interest, late fines, and GST.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>MITC &amp; Clawback Audit:</strong> Check every card debit and point charge.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-Harassment Shield:</strong> Stop unfair recovery calls under RBI law.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Clean No Dues Closure:</strong> Sanction letter check and final NDC proof.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Credit Card Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/credit-card-settlement-process"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Settlement Process
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Step-by-step OTS guide &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-minimum-due-trap"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Escape Minimum Due Debt Trap
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">How 42% revolving APR works &rarr;</span>
                </Link>

                <Link
                  href="/jumbo-insta-loan-on-credit-card-default-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Jumbo &amp; Insta Loan on Card Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Dual account settlement rules &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
