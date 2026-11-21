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

export default function CreditCardBalanceTransferDefaultClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Interest Crux' },
    { id: 'balance-transfer-mechanics', label: '1. How BT Default Triggers APR Jumps' },
    { id: 'rbi-interest-rules', label: '2. RBI Rules on Retroactive Interest' },
    { id: 'apr-jump-calculation', label: '3. Promo EMI vs 42% Card APR Math' },
    { id: 'disputing-unlawful-fees', label: '4. Unlawful Fees You Can Dispute' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Exiting Defaulted Balance Debt' },
    { id: 'supreme-court-rights', label: '7. Supreme Court Law & Legal Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'default-timeline', label: '9. Default to Settlement Timeline' },
    { id: 'common-bt-traps', label: '10. Origin Delays & Dual-Card Traps' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What happens to my low rate if I miss a credit card balance transfer bill?',
      a: 'Missing your Minimum Due or monthly EMI ends your low promo rate right away. Under bank MITC rules, the unpaid debt shifts to standard card interest of 36% to 45% per year plus 18% GST.'
    },
    {
      q: 'Can a bank charge retroactive interest from Day 1 on a 0% balance transfer?',
      a: 'Yes, if your booking terms and MITC clearly state that missing a due date voids the zero-rate deal from Day 1. However, banks cannot invent hidden backdated fees that were left out of the MITC.'
    },
    {
      q: 'Does the RBI cap credit card interest rates at 30% per year on default?',
      a: 'No. On December 20, 2024, the Supreme Court ruled in HSBC v. Awaz Foundation that only the RBI sets bank rate rules. There is no 30% court cap. Banks can charge 40% to 45% APR if stated upfront in the MITC.'
    },
    {
      q: 'Can banks charge interest on unpaid late fees and GST after balance default?',
      a: 'No. Under the RBI Credit Card Master Direction 2022, card issuers cannot add unpaid late fees, levies, or GST taxes to your base debt to charge fresh compound interest on those fees.'
    },
    {
      q: 'What happens to a Balance Transfer on EMI plan if my card turns NPA at 90 days?',
      a: 'When a card crosses 90 days past due and turns NPA, the bank closes the unbilled EMI plan on its own. All remaining principal merges into one card bill and draws standard monthly card APR.'
    },
    {
      q: 'Do I lose the interest-free period on new swipes after a balance transfer default?',
      a: 'Yes. Once any balance transfer bill or EMI stays unpaid past the due date, your 20 to 50 day grace period stops. Every new swipe on that card draws daily finance charges from Day 1.'
    },
    {
      q: 'Why did my old credit card charge late fees after I booked a balance transfer?',
      a: 'Balance transfer NEFT or draft payouts take 3 to 5 working days to reach your old card. If your old card due date passes before the money lands, the old bank adds late fees and APR. Always pay Minimum Due on the old card first.'
    },
    {
      q: 'Can my bank add an over-limit fee when foreclosed balance dues cross my card limit?',
      a: 'Under the March 2024 RBI rules, banks cannot charge over-limit fees without your clear opt-in consent. Even with consent, interest or fees pushing total debt past your limit cannot trigger an over-limit fee.'
    },
    {
      q: 'Can I settle a defaulted credit card balance transfer via One-Time Settlement (OTS)?',
      a: 'Yes. Balance transfer debt is unsecured card debt. Under the June 2023 RBI settlement rules, borrowers facing job loss, health costs, or cash stress can seek an OTS to waive post-default 42% interest and fees.'
    },
    {
      q: 'How does CredSettle help resolve high-interest credit card balance transfer debt?',
      a: 'CredSettle checks your card bills for illegal fee compounding, stops unfair agent calls under RBI rules, talks with bank nodal teams to cut 42% APR add-ons via OTS, and secures a clean No Dues Certificate.'
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
            <span>RBI Credit Card Master Direction 2022 (Updated 2024) &amp; Borrower Relief</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            What Happens If You Default on Credit Card Balance EMI?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Missing a balance transfer bill cancels your low promo rate and shifts your debt to 42% card APR. Learn what retroactive interest RBI rules allow, spot unlawful bank fees, and settle card debt safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Resolve Balance Transfer Debt</span>
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
                  Protected under RBI Card Master Direction 2022 (Updated 2024) &amp; RBI OTS Guidelines.
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
                <span>EXECUTIVE BRIEF: CREDIT CARD BALANCE TRANSFER DEFAULT RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Instant Loss of Promo Rate:</strong> Missing your Minimum Amount Due or monthly EMI cancels 0% or low-APR balance transfer deals and shifts debt to 36% to 45% yearly APR.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Retroactive Interest Limit:</strong> Banks can charge backdated interest from the transfer date on 0% promo deals only if that rule was clearly printed in your MITC.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Ban on Fee Compounding:</strong> Under RBI Credit Card Directions, banks cannot add unpaid late fees or 18% GST to principal to charge compound interest on fees.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">NPA Plan Auto-Closure:</strong> At 90 days past due, active Balance Transfer on EMI plans auto-close and merge all remaining principal into one lump-sum card bill.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">RBI One-Time Settlement Exit:</strong> Unsecured balance transfer defaults qualify for compromise OTS under June 2023 RBI rules, waiving post-default 42% APR spikes.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: How Credit Card Balance Transfer Default Triggers APR Jumps */}
            <section id="balance-transfer-mechanics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Product Mechanics &amp; Default Triggers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. How Credit Card Balance Transfer Default Triggers APR Jumps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A credit card balance transfer lets you move unpaid debt from one bank card to another bank card at a low rate. Big banks like SBI Card, HDFC Bank, ICICI Bank, and Axis Bank offer two main plans.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The first plan gives a short promo window with 0% or under 1% monthly interest for 60 to 90 days. The second plan is a Balance Transfer on EMI spread over 6 to 24 fixed monthly bills at 12% to 20% yearly interest.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Both plans work as strict offers bound by the card Most Important Terms and Conditions (MITC). Your low rate stays live only if you pay each monthly bill on or before the due date.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you miss the Minimum Due or skip a monthly EMI, the bank cancels the promo deal right away. Your grace period on new swipes stops, and the unpaid balance jumps to 3.4% to 3.75% per month (40.8% to 45% per year) plus 18% GST.
              </p>
            </section>

            {/* SECTION 2: RBI Master Direction Rules on Retroactive Card Interest */}
            <section id="rbi-interest-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Billing &amp; Disclosure Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI Master Direction Rules on Retroactive Card Interest
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many card users see huge shock bills when banks add backdated interest from Day 1 of the transfer. The RBI Credit Card Master Direction 2022 (updated on March 7, 2024) draws a sharp line between valid rules and unfair billing.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, on a 60-day or 90-day 0% promo window, a bank can charge interest from Day 1 on default only if that rule was printed clearly in your MITC. On fixed EMI plans, past paid EMIs stay closed, while left-over principal shifts to standard card APR.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, the March 7, 2024 RBI update states that banks can charge interest and late fees only on the unpaid amount left after credits. If you paid half your bill on time, the bank cannot charge interest on the paid half.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, note that RBI Circular DoR.MCS.REC.28 on loan penal charges excludes credit cards. Instead, Paragraph 9 of the RBI Card Master Direction bars banks from adding unpaid late fees, charges, or GST to principal to charge compound interest.
              </p>
            </section>

            {/* SECTION 3: Cost Breakdown: Promo EMI vs Post-Default 42% Card APR */}
            <section id="apr-jump-calculation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Impact &amp; Debt Snowball Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Cost Breakdown: Promo EMI vs Post-Default 42% Card APR
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Looking at real numbers shows why a missed balance transfer bill grows so fast. Suppose you move ₹1,50,000 onto a 12-month Balance Transfer on EMI plan at 15% yearly interest, pay two EMIs, and then lose your job.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once bills stay unpaid for three months (90 days past due), the bank closes the EMI plan, adds a closure fee, and moves the ₹1,27,500 base debt to 42% yearly card APR plus 18% GST on interest.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample ₹1,50,000 Balance Transfer Default Ledger</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">15% Promo vs 42% Default APR</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Repayment Stage</th>
                        <th className="p-3">Applied Interest Rate</th>
                        <th className="p-3">Billing &amp; Penalty Action</th>
                        <th className="p-3 text-right">Total Payable Balance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Month 1 to 2 (On Time)</td>
                        <td className="p-3 font-mono text-emerald-600 font-semibold">15% p.a. (Promo EMI)</td>
                        <td className="p-3 text-emerald-600 font-semibold">Fixed ₹13,539 EMI Paid Cleanly</td>
                        <td className="p-3 text-right font-bold text-slate-600 font-mono">₹1,27,500 (Unbilled Base)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 30 Past Due (1 Missed EMI)</td>
                        <td className="p-3 font-mono text-amber-600 font-bold">42% p.a. on Overdue EMI</td>
                        <td className="p-3 text-amber-600 font-semibold">Late Fee ₹950 + Grace Period Lost</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">₹1,29,180</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 91 NPA (Plan Cancelled)</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">42% p.a. on Full Principal</td>
                        <td className="p-3 text-rose-600 font-semibold">Unbilled EMI Merged + 3% Fee + GST</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">₹1,46,850 (Lump Sum Due)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 180 Past Due (6 Months)</td>
                        <td className="p-3 font-mono text-rose-700 font-bold">3.5%/Month + 18% GST</td>
                        <td className="p-3 text-rose-700 font-semibold">Monthly Revolving Interest Snowball</td>
                        <td className="p-3 text-right font-bold text-rose-800 font-mono">₹1,68,900</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">RBI Compromise OTS Exit</td>
                        <td className="p-3 font-mono text-[#1886ff]">Frozen &amp; Settled</td>
                        <td className="p-3 text-[#1886ff]">Waiver of Post-Default APR &amp; Fees</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹58,000 to ₹75,000 (OTS Range)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Unlawful Charges You Can Dispute After Balance Default */}
            <section id="disputing-unlawful-fees" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Statement Audit &amp; Billing Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Unlawful Charges You Can Dispute After Balance Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks can switch to standard card rates on default, yet billing systems often add extra fees that break RBI rules. Checking your monthly bills gives you strong ground for fee refunds or lower settlement payouts.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Check first for unapproved <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[#1886ff] hover:underline font-semibold">credit card over-limit fees</Link>. When an <Link href="/unbilled-credit-card-merchant-emi-foreclosure-default" className="text-[#1886ff] hover:underline font-semibold">unbilled EMI closes on default</Link> and joins past interest, your bill often crosses your card limit. Under RBI rules, banks cannot charge over-limit fees without clear opt-in consent, or when interest pushes debt past your limit.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Check second for interest added on unpaid late fees and 18% GST. Your card bill must keep base debt apart from fee and tax lines. Charging 3.5% monthly interest on old late fees breaks RBI Master Direction Paragraph 9(b).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Check third for double fees when the bank cancels your EMI plan. Many card MITC sheets list a 3% closure fee only when a user asks to close early. If the bank ends your plan on its own and charges 42% APR right away, you can dispute that 3% fee.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Balance Transfer Default &amp; OTS Relief
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual overview shows how missed payments revoke low balance transfer rates, trigger 42% card APR, and open legal debt relief pathways under RBI guidelines.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/credit-card-balance-transfer-default-interest-rules.jpg"
                    alt="Credit Card Balance Transfer Default Interest Rules and RBI Debt Relief Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Balance Transfer Protection Guide • RBI Card Master Direction Compliant</span>
                  <a
                    href="/images/infographics/credit-card-balance-transfer-default-interest-rules.jpg"
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

            {/* SECTION 6: Step-by-Step Guide: Exiting Defaulted Balance Transfers */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step Guide: Exiting Defaulted Balance Transfers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your low balance transfer rate is gone and monthly charges are growing fast, follow these six steps to stop the debt trap and close your card safely.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Stop New Swipes on Both Cards Right Away
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once a balance transfer bill is late, your grace period stops. Every new swipe draws 42% APR from Day 1. Move daily spends to a debit card or savings UPI.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Save Your Booking Mail &amp; MITC Sheet
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your first balance transfer mail, EMI chart, and card MITC. Note down the real transferred sum apart from processing fees, late charges, APR, and GST.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Ask for Goodwill Waiver After a 1-Time Slip
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you missed one bill by 2 or 3 days due to an auto-pay glitch and can pay it now, email support asking for a one-time late fee refund and rate reset.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Escape the Minimum Amount Due Trap
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Do not keep paying just the 5% <Link href="/credit-card-minimum-due-trap" className="text-[#1886ff] hover:underline font-semibold">Minimum Amount Due</Link> once your low rate ends. At 42% APR plus GST, small minimum bills only feed monthly interest while your base debt stays flat.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Flag Illegal Fee Compounding in Writing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email the bank Grievance Officer to flag any unapproved over-limit fees, interest billed on paid sums, or interest charged on late fees under the March 2024 RBI rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Seek a Formal One-Time Settlement (OTS)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    In real hardship after Day 90 NPA, share job loss or health proof to seek a lump-sum <Link href="/credit-card-settlement-process" className="text-[#1886ff] hover:underline font-semibold">credit card OTS</Link>. Pay only after checking an official bank OTS letter and collect your No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Supreme Court Law & Legal Rights for Card Defaulters */}
            <section id="supreme-court-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Borrower Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Supreme Court Law &amp; Legal Rights for Card Defaulters
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many old web blogs still claim that courts cap credit card interest at 30% per year. Knowing the real Supreme Court law saves you time and guides you to relief steps that work.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                While courts do not cap stated card APR, Indian law gives card users strong shields against hidden backdated charges, rude agents, and illegal fee compounding.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>SC: HSBC v. Awaz Foundation (Dec 2024)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court ended the old 2008 NCDRC 30% cap under Section 21A of the Banking Regulation Act. Banks can charge 36% to 45% APR if stated clearly in the MITC, making OTS talks far smarter than rate-cap suits.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>MITC 30-Day Prior Notice Protection</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Card Rules, banks cannot change balance transfer terms or raise fees mid-plan without giving 30 days clear notice and a right to close the card under old terms.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Section 74 Indian Contract Act Defense</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In civil or arbitration claims, banks cannot enforce random penalty slabs that cross fair breach loss or clash with their own signed MITC sheet.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Zero Arrest &amp; Anti-Harassment Shield</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Balance transfer default is a civil unsecured case, not a crime unless a cheque or mandate bounces with fraud. Agents cannot call outside 8 AM to 7 PM or shame your family.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a card issuer charges undisclosed retroactive interest, compounds late fees, or ignores unlawful recovery complaints, escalate through this three-tier RBI redressal path.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Billing &amp; Legal Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: Card GRO</td>
                      <td className="p-3">Card Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Reviews BT booking logs, reverses glitch-based late fees, and checks MITC rules.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: Bank PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Removes unlawful over-limit or compounded fee interest and reviews hardship OTS files.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-GRO</td>
                      <td className="p-3">Adjudicates RBI Master Direction breaches on cms.rbi.org.in and orders fee refunds.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Default Timeline: Missed BT Due Date to NPA Settlement */}
            <section id="default-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Delinquency &amp; Resolution Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Default Timeline: Missed BT Due Date to NPA Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking each delinquency stage on your balance transfer card helps you act before interest snowballs or legal notices arrive.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Days Past Due</th>
                      <th className="p-3">Account Stage</th>
                      <th className="p-3">Bank Billing &amp; Bureau Impact</th>
                      <th className="p-3">Recommended Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 3</td>
                      <td className="p-3 font-mono text-[11px]">RBI Grace Window</td>
                      <td className="p-3">No late fee or CIBIL past-due report if cleared within 3 days after due date.</td>
                      <td className="p-3">Pay overdue EMI or Minimum Due right away to save your promo rate.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 4 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0 / Promo Revoked</td>
                      <td className="p-3">Promo APR revoked; late fee added; standard 3.5% monthly interest begins.</td>
                      <td className="p-3">Stop card spends and seek a goodwill fee reversal if delay was a one-off error.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 89</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1 &amp; SMA-2</td>
                      <td className="p-3">Card blocked for swipes; CIBIL score drops 60 to 100 points; reminder calls rise.</td>
                      <td className="p-3">Explore fixed term restructuring if salary is stable; audit statements for unlawful fees.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 90+</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA &amp; EMI Auto-Closure</td>
                      <td className="p-3">Unbilled BT-on-EMI cancels and merges into main bill at 42% APR.</td>
                      <td className="p-3 font-bold text-amber-800">Avoid small token payments; prepare hardship file for formal OTS talks.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 120 to 180+</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">OTS Resolution Window</td>
                      <td className="p-3">Bank recovery &amp; Lok Adalat teams open compromise waivers on inflated dues.</td>
                      <td className="p-3 font-bold text-slate-900">Close debt via verified bank OTS letter, collect NDC, and check 15-day bureau update.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Common Traps: Origin Card Delays & Dual-Card Defaults */}
            <section id="common-bt-traps" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Balance Transfer Pitfalls</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Common Traps: Origin Card Delays &amp; Dual-Card Defaults
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many credit card balance transfer crises begin with hidden operational traps across the old card and the new card. Watch out for these four common scenarios.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1886ff]" />
                    NEFT Transfer Delay on the Origin Card
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Balance transfer NEFT or draft payouts take 3 to 5 working days. If your old card due date passes before the payout settles, the old bank charges late fees and 42% APR too. Always pay Minimum Due on the old card first.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Re-Swiping the Freed-Up Old Credit Card
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Moving ₹2 Lakh to a new card frees up the ₹2 Lakh limit on your old card. Swiping the old card again quickly doubles your total debt. If both cards go overdue, you can <Link href="/settle-multiple-credit-cards" className="text-[#1886ff] hover:underline font-semibold">settle multiple credit cards</Link> together.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Balance Transfer vs Personal Loan Consolidation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Card balance transfers carry a 42% default APR cliff. If your CIBIL is still healthy, a standard <Link href="/credit-card-debt-consolidation" className="text-[#1886ff] hover:underline font-semibold">debt consolidation loan</Link> at 12% to 15% avoids revolving card interest jumps.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Salary Account Set-Off Risk in Same Bank
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Never transfer huge card debt onto a credit card issued by the same bank that holds your salary account. On default, that bank may invoke banker lien under Section 171 of the Contract Act to hold savings funds.
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
                Frequently Asked Questions: Card Balance Transfer Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers on promotional interest revocation, backdated APR rules, Supreme Court judgments, RBI fee caps, and credit card settlement options in India.
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
                  <strong>RBI Credit Card Master Direction:</strong> RBI/2022-23/92, DoR.AUT.REC.No.27/24.01.041/2022-23, Master Direction - Credit Card and Debit Card - Issuance and Conduct Directions, 2022 (as amended via RBI/2023-24/132 dated March 7, 2024).
                </li>
                <li>
                  <strong>Supreme Court of India Precedent:</strong> Hongkong and Shanghai Banking Corp. Ltd. v. Awaz Foundation &amp; Ors., 2024 INSC 1019 (Decided December 20, 2024) on Section 21A of the Banking Regulation Act, 1949 and RBI rate jurisdiction.
                </li>
                <li>
                  <strong>RBI Compromise Settlement Framework:</strong> RBI/2023-24/40, DOR.STR.REC.20/21.04.048/2023-24 (June 8, 2023), Framework for Compromise Settlements and Technical Write-offs.
                </li>
                <li>
                  <strong>RBI Recovery Conduct Circular:</strong> RBI/2022-23/108, DOR.ORG.REC.65/21.04.158/2022-23 (August 12, 2022), Outsourcing of Financial Services - Responsibilities of Regulated Entities Employing Recovery Agents.
                </li>
                <li>
                  <strong>Statutory Enactments:</strong> Section 74 &amp; Section 171 of the Indian Contract Act, 1872, and Reserve Bank - Integrated Ombudsman Scheme, 2021.
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
                  <a href="https://main.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority (Lok Adalat)</span>
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
                  <Link href="/unbilled-credit-card-merchant-emi-foreclosure-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unbilled Card EMI Foreclosure
                  </Link>
                  <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Overlimit Fee RBI Refund
                  </Link>
                  <Link href="/credit-card-atm-cash-withdrawal-interest-trap-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    ATM Cash Advance Interest Trap
                  </Link>
                  <Link href="/jumbo-insta-loan-on-credit-card-default-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Jumbo Loan on Card Default
                  </Link>
                  <Link href="/credit-card-minimum-due-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Minimum Due Trap
                  </Link>
                  <Link href="/credit-card-settlement-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Process
                  </Link>
                  <Link href="/credit-card-debt-consolidation" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Card Debt Consolidation Guide
                  </Link>
                  <Link href="/credit-card-npa-timeline" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card NPA Timeline
                  </Link>
                  <Link href="/stop-credit-card-recovery-calls" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Card Recovery Calls
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
                Specialist in RBI credit card billing directions, MITC fee disputes, anti-harassment defense, and One-Time Settlement negotiations across major Indian banks and card issuers.
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
                  CARD DEBT RELIEF DESK
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Stuck in a 42% Balance Transfer Trap?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal debt specialists audit unlawful card charges, shield you from recovery harassment, and negotiate up to 50% to 70% relief on inflated card bills via official bank OTS.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Card Debt Audit
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
                  <span><strong>MITC &amp; APR Audit:</strong> Flagging unlawful fee compounding &amp; over-limit charges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-Harassment Shield:</strong> Enforcing strict 8 AM to 7 PM RBI agent conduct.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank OTS:</strong> Waiving post-default 42% APR &amp; penal snowballs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified Closure:</strong> Official OTS letter check &amp; No Dues Certificate.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/unbilled-credit-card-merchant-emi-foreclosure-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unbilled Credit Card EMI Foreclosure
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">90-day NPA auto-closure rules &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-overlimit-fee-without-consent-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Over-Limit Fee Without Consent Refund
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">March 2024 RBI opt-in mandate &rarr;</span>
                </Link>

                <Link
                  href="/debt-settlement-vs-loan-restructuring-credit-card"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Card Settlement vs Restructuring
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Choose the right exit plan &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
