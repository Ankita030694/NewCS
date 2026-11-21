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

export default function CreditCardAprHikeOptOutClient() {
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
    { id: 'quick-answer', label: '1. Quick Answer: 45-Day Opt-Out Myth' },
    { id: 'rbi-notice-law', label: '2. RBI 30-Day Notice & MITC Law' },
    { id: 'dynamic-apr-hikes', label: '3. Why Banks Hike APR to 45%-47.4%' },
    { id: 'supreme-court-ruling', label: '4. Supreme Court: HSBC v. Awaz (2024)' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Opt-Out & Dispute SOP' },
    { id: 'comparison-matrix', label: '7. Minimum Due vs Opt-Out Math' },
    { id: 'statutory-deadlines', label: '8. Key Deadlines & Rs 500/Day Penalty' },
    { id: 'escalation-matrix', label: '9. 3-Tier Escalation Matrix' },
    { id: 'common-mistakes', label: '10. Mistakes & Debt Relief Options' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Is there a 45-day opt-out law for credit card interest rate hikes in India?',
      a: 'No. The 45-day advance notice and opt-out rule comes from the US Credit CARD Act of 2009. In India, RBI Master Direction 2022 mandates at least 30 days (one month) prior notice before unfavorable fee or MITC changes take effect, along with the right to surrender the card without closure fees.'
    },
    {
      q: 'Can an Indian bank increase my credit card APR above 45% per year legally?',
      a: 'Yes, if the rate follows a Board-approved policy and is disclosed in the Most Important Terms and Conditions (MITC). In December 2024, the Supreme Court in HSBC v. Awaz Foundation set aside the old 30% NCDRC cap and confirmed that only the RBI regulates credit card interest rates.'
    },
    {
      q: 'Can a bank apply a higher credit card interest rate to old bills without notice?',
      a: 'No. Under the RBI Master Direction on Credit Card and Debit Card (2022), any change in charges or terms to the disadvantage of a cardholder can only apply prospectively after giving at least one month (30 days) advance notice.'
    },
    {
      q: 'How do I opt out when my bank hikes credit card finance charges?',
      a: 'Within the 30-day notice window, you can reject the revised terms and request permanent card surrender. Under RBI rules, the bank cannot charge any extra card closure fee, provided you clear your existing outstanding dues.'
    },
    {
      q: 'What happens if I cannot clear my full balance to close the card after an APR hike?',
      a: 'In India, a card cannot be formally closed while dues remain unpaid. To stop 42% to 48% revolving APR, you can shift the balance to a lower-rate personal loan, convert eligible dues into fixed EMIs, or seek a structured One-Time Settlement (OTS) if you face genuine financial hardship.'
    },
    {
      q: 'What is the Rs 500 per day RBI penalty during credit card surrender?',
      a: 'Once you clear all dues and submit a card closure request, the issuer must close your credit card account within 7 working days. If the bank delays closure beyond 7 working days, it must pay you Rs 500 per calendar day of delay.'
    },
    {
      q: 'Can banks charge interest on the full bill if I paid most of my credit card statement?',
      a: 'No. Under the RBI amendment dated March 7, 2024, banks can charge finance interest only on the remaining unpaid balance adjusted for payments, refunds, and reversals, not on the entire initial statement amount.'
    },
    {
      q: 'Why did my low-interest credit card suddenly jump to 3.75% per month?',
      a: 'Many Indian banks use dynamic APR tiers linked to repayment behavior and credit utilization. Missing a due date beyond the 3-day grace period can move your card from a promotional tier (around 1.99% monthly) to the highest risk slab (3.75% to 3.95% monthly).'
    },
    {
      q: 'Does the April 2024 RBI Key Facts Statement (KFS) rule apply to credit cards?',
      a: 'No. The RBI KFS circular dated April 15, 2024 explicitly exempts credit card receivables because credit cards are governed separately by the MITC disclosure rules under the RBI Credit Card Master Direction.'
    },
    {
      q: 'Where can I complain if my bank hiked credit card APR secretly without a 30-day notice?',
      a: 'First file a written dispute with the bank Grievance Redressal Officer and Principal Nodal Officer demanding reversal of excess interest. If unresolved after 30 days, escalate the complaint online to the RBI Integrated Ombudsman at cms.rbi.org.in.'
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
            <span>RBI Credit Card Master Direction 2022 &amp; MITC Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can Bank Hike Credit Card APR? Know RBI Opt-Out Rights
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did your bank suddenly raise your credit card interest rate to 45% or 47.4% per year? Learn the real RBI 30-day prior notice mandate, why the 45-day opt-out rule is misunderstood in India, and how to exit unfair APR traps legally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Unfair Card Interest Now</span>
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
                  Protected under RBI Master Direction 2022 (Amended March 2024) and Consumer Protection Act, 2019.
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
                <span>EXECUTIVE BRIEF: RBI CREDIT CARD APR HIKE &amp; OPT-OUT RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">30-Day RBI Rule vs 45-Day Myth:</strong> India does not have a US-style 45-day opt-out statute. Instead, RBI Master Direction 2022 mandates at least 30 days (one month) prior notice before unfavorable charge or MITC changes apply.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Prospective Changes Only:</strong> Banks cannot apply a hiked Annual Percentage Rate (APR) backward to closed statements. Every adverse change must operate strictly in the future after advance notice.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Free Card Surrender Right:</strong> If you reject a rate or fee hike during the 30-day notice period, you can surrender your card with zero closure charges after paying existing dues.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">March 2024 RBI Interest Reform:</strong> Banks can levy finance charges only on the remaining unpaid balance adjusted for partial payments and refunds, never on the full initial bill.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Rs 500 Daily Closure Penalty:</strong> Once dues are cleared, the bank must close a surrendered card within 7 working days or pay you Rs 500 per calendar day of delay.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Quick Answer: Is There a 45-Day Opt-Out Law in India? */}
            <section id="quick-answer" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Verified Legal Reality Check</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Quick Answer: Is There a 45-Day Opt-Out Law in India?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many Indian cardholders search for a 45-day opt-out law after seeing a sudden credit card interest hike. Online blogs and AI summaries often claim you get 45 days to reject a rate hike and repay old dues at your old rate over five years.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Here is the verified legal truth. The 45-day advance notice rule belongs to the United States Credit CARD Act of 2009. It does not apply to banks or NBFCs in India. Relying on foreign rules in a bank dispute will weaken your complaint.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In India, your protection comes from the Reserve Bank of India (RBI). Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct, 2022, banks must give at least <strong>one month (30 days) prior notice</strong> before making unfavorable changes to charges or terms.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Where does 45 days actually appear in Indian credit cards? First, many Indian banks hiked monthly finance charges to 3.75%, which equals a 45% yearly APR. Second, cards offer up to 45 interest-free days on fresh purchases, and credit bureaus take 30 to 45 days to reflect a closed card.
              </p>
            </section>

            {/* SECTION 2: RBI Master Direction: 30-Day Prior Notice & MITC Law */}
            <section id="rbi-notice-law" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Statutory Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI Master Direction: 30-Day Prior Notice &amp; MITC Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every credit card issued in India is governed by RBI Master Direction DoR.AUT.REC.No.27/24.01.041/2022-23, along with its key amendment dated March 7, 2024. These binding rules stop banks from changing card pricing in secret.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the chapter on Interest Rates and Other Charges and the Most Important Terms and Conditions (MITC) rules, every card issuer must follow four strict duties:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Mandatory 30-Day Advance Notice:</strong> Any change in charges or MITC terms that hurts the cardholder can take effect only prospectively after at least one month (30 days) prior notice via email, SMS, or statement alert.
                </li>
                <li>
                  <strong>Zero-Fee Right to Surrender:</strong> If you do not accept a disadvantageous change, you have the legal right to surrender your credit card without paying any extra closure fee, subject to clearing your existing dues.
                </li>
                <li>
                  <strong>Clear Annualized APR Examples:</strong> Banks cannot hide behind small monthly numbers like 3.5% per month. They must quote the full Annualized Percentage Rate (APR) with clear examples in the MITC and welcome kit.
                </li>
                <li>
                  <strong>Interest Only on Remaining Unpaid Balance:</strong> Under the March 7, 2024 RBI amendment, if you make a partial payment, the bank can charge interest only on the remaining unpaid balance, not on the full original bill.
                </li>
              </ul>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Note one crucial legal distinction. RBI&apos;s April 15, 2024 circular on Key Facts Statements (KFS) applies to term loans like personal loans, while credit card receivables remain exempted and governed directly under the MITC framework.
              </p>
            </section>

            {/* SECTION 3: Why Banks Hike Credit Card APR to 45% or 47.4% Yearly */}
            <section id="dynamic-apr-hikes" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Dynamic Risk Pricing &amp; Compounding Traps</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Why Banks Hike Credit Card APR to 45% or 47.4% Yearly
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Why do cardholders wake up to a sudden jump from 1.99% monthly interest (23.88% yearly) to 3.75% or 3.95% monthly interest (45% to 47.4% yearly)? Banks use two mechanisms to raise your cost of borrowing.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, major private and public sector issuers periodically revise their base tariff across entire card portfolios. For this type of tariff revision, the bank must send a formal 30-day advance MITC revision notice.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, many cards now use <strong>Dynamic APR</strong> (risk-based tier pricing). When you apply, the bank advertises a low starting rate like 0.99% or 1.99% per month. However, the fine print allows the system to move you to the top slab (3.75% or 3.95% per month) if you miss a due date beyond the 3-day RBI grace period or max out your{' '}
                <Link href="/sudden-credit-card-limit-reduction-high-utilization-fix" className="text-[#1886ff] font-semibold hover:underline">
                  credit card utilization limit
                </Link>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI rules, if a bank charges differential interest rates based on cardholder risk, it must follow a Board-approved ceiling, disclose the exact trigger rules transparently, and avoid hidden arbitrary jumps. Worse still, every rupee of credit card interest attracts{' '}
                <Link href="/is-18-percent-gst-waived-credit-card-settlement-ots" className="text-[#1886ff] font-semibold hover:underline">
                  18% GST on finance charges
                </Link>
                , pushing your real yearly cost above 53% to 55%.
              </p>
            </section>

            {/* SECTION 4: Supreme Court Ruling: HSBC v. Awaz Foundation (2024) */}
            <section id="supreme-court-ruling" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Landmark Judicial Precedents</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Supreme Court Ruling: HSBC v. Awaz Foundation (2024)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Can you sue a bank in Consumer Court simply because 45% APR feels too high? You must know the landmark Supreme Court verdict before drafting any legal notice.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In 2008, the National Consumer Disputes Redressal Commission (NCDRC) ruled that charging more than 30% annual interest on credit cards was an unfair trade practice. Banks challenged that order before the Supreme Court.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On December 20, 2024, in <strong>The Hongkong and Shanghai Banking Corp. Ltd. v. Awaz &amp; Ors. (2024 INSC 1044)</strong>, the Supreme Court set aside the 30% NCDRC cap. Under Sections 21A and 35A of the Banking Regulation Act, 1949, the Court held that regulating bank interest rates belongs exclusively to the RBI.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>HSBC v. Awaz &amp; Ors. (2024 INSC 1044)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Consumer courts cannot impose a blanket 30% interest cap. However, banks remain strictly bound by RBI Master Directions on prior notice and transparent MITC disclosure.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Central Bank of India v. Ravindra (2002)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A Constitution Bench of the Supreme Court ruled that penal interest cannot be capitalized to charge compound interest on penalty amounts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Winning Ground 1: No 30-Day Notice</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a bank raised your tariff or fee without verifiable 30-day advance intimation, the RBI Ombudsman can order full reversal of the excess charge.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Winning Ground 2: Full-Bill Interest Breach</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Charging finance interest on the already-paid portion of your bill violates the March 7, 2024 RBI amendment and constitutes deficiency of service under CPA 2019.
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
                5. Visual Blueprint: APR Hike Notice &amp; Card Exit Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual overview illustrates your core statutory shields under RBI regulations: mandatory 30-day advance MITC notice and your right to surrender the credit card without closure penalties.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/bank-increased-credit-card-apr-interest-rbi-opt-out.jpg"
                    alt="RBI 30-Day Prior Notice and Free Credit Card Surrender Rule on APR Hikes"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Cardholder Protection Framework • RBI Master Direction Compliant</span>
                  <a
                    href="/images/infographics/bank-increased-credit-card-apr-interest-rbi-opt-out.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Opt Out or Dispute Unfair APR Hikes */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Opt Out or Dispute Unfair APR Hikes
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Whether you received a 30-day rate hike alert or spotted a surprise interest jump on your bill, follow these six practical steps to protect your money and CIBIL score.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Audit Your MITC Notice &amp; Billing Statement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check your email, SMS inbox, and past two card statements for any 30-day advance MITC revision alert. Compare the billed APR against your original welcome kit rate.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Stop Fresh Card Swipes &amp; Auto-Debits Immediately
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once a card carries an unpaid balance, the 45-day interest-free grace period disappears. Every new swipe accrues 42% to 48% APR from Day 1, so pause card usage immediately.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Demand Fee Reversal If No 30-Day Notice Was Sent
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank raised charges retroactively or gave less than one month notice, email customer care citing RBI Master Direction 2022. Demand recalculation at the prior rate plus GST reversal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Clear or Refinance Dues Before Requesting Surrender
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Indian rules, you must clear outstanding dues to surrender a card. Pay the balance or shift it to a 12% to 15% personal loan rather than paying 47% card APR.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Submit Formal Zero-Fee Card Surrender Within Notice Window
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Raise a closure request via the bank app, helpline, or dedicated closure email. State that you are surrendering due to unfavorable MITC changes and save the ticket number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Track 7-Working-Day Closure &amp; Bureau Update
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Verify written closure confirmation within 7 working days. Check your CIBIL report after 30 to 45 days to confirm the account reads &ldquo;Closed&rdquo; with zero balance.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Financial Comparison: Paying Minimum Due vs Opt-Out */}
            <section id="comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Debt Math on Rs 2,00,000 Card Dues</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Financial Comparison: Paying Minimum Due vs Opt-Out
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a bank raises monthly finance charges to 3.75% (45% APR) plus 18% GST, staying in the{' '}
                <Link href="/credit-card-minimum-due-trap" className="text-[#1886ff] font-semibold hover:underline">
                  credit card minimum due trap
                </Link>{' '}
                multiplies your debt rapidly. Compare four practical choices on a Rs 2,00,000 balance below.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Rs 2,00,000 Balance Impact Under 45% APR Hike</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">3.75%/Mo + 18% GST</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Borrower Strategy</th>
                        <th className="p-3">Effective Annual Cost</th>
                        <th className="p-3">12-Month Interest + GST</th>
                        <th className="p-3 text-right">CIBIL &amp; Legal Outcome</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Pay Only 5% Minimum Due</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">~53.1% (with GST)</td>
                        <td className="p-3 font-mono text-rose-700 font-bold">Rs 95,000+ Drained</td>
                        <td className="p-3 text-right font-bold text-rose-700">Years in Debt Spiral</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Clear Dues &amp; Surrender in 30 Days</td>
                        <td className="p-3 font-mono text-emerald-600 font-bold">0% Future APR</td>
                        <td className="p-3 font-mono text-emerald-700 font-bold">Rs 0 Extra Closure Fee</td>
                        <td className="p-3 text-right font-bold text-emerald-600">Clean &ldquo;Closed&rdquo; CIBIL</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Refinance via Personal Loan &amp; Close Card</td>
                        <td className="p-3 font-mono text-amber-600 font-bold">13% to 16% p.a.</td>
                        <td className="p-3 font-mono text-amber-700 font-bold">~Rs 16,500 Interest</td>
                        <td className="p-3 text-right font-bold text-slate-700">Saves ~70% Interest</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Structured OTS Settlement (Hardship Case)</td>
                        <td className="p-3 font-mono text-[#1886ff]">Interest Frozen at OTS</td>
                        <td className="p-3 font-mono text-[#1886ff]">Up to 50%-70% Waiver</td>
                        <td className="p-3 text-right text-[#1886ff]">Legal Debt Exit + NDC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 8: Key Deadlines: 30-Day Notice & 7-Day Closure Penalty */}
            <section id="statutory-deadlines" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Timelines &amp; Penalties</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Key Deadlines: 30-Day Notice &amp; 7-Day Closure Penalty
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking exact RBI timelines turns a weak customer request into an enforceable legal claim. Use this milestone table whenever a card issuer changes your terms or delays closure.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Regulatory Window</th>
                      <th className="p-3">RBI Rule / Direction</th>
                      <th className="p-3">Bank Obligation</th>
                      <th className="p-3">Cardholder Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">At Least 30 Days Prior</td>
                      <td className="p-3 font-mono text-[11px]">MITC &amp; Charge Change Rule</td>
                      <td className="p-3">Send advance notice before adverse charge or term revision.</td>
                      <td className="p-3">Demand reversal if hiked without 30-day advance notice.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">3 Days Past Due Date</td>
                      <td className="p-3 font-mono text-[11px]">Grace Period Clause</td>
                      <td className="p-3">Cannot levy late fee or report DPD within 3 days of due date.</td>
                      <td className="p-3">Pay within 3 days to prevent dynamic APR tier jump.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">7 Working Days</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Card Closure Mandate</td>
                      <td className="p-3">Must close surrendered card once all dues are zeroed.</td>
                      <td className="p-3 font-bold text-amber-800">Claim Rs 500 per calendar day delay penalty from Day 8.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">15 to 30 Days Post-Closure</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">CIC Reporting Rule</td>
                      <td className="p-3">Must report &ldquo;Closed&rdquo; account status to CIBIL and all CICs.</td>
                      <td className="p-3 font-bold text-slate-900">Claim Rs 100/day if CIBIL dispute stays unfixed past 30 days.</td>
                    </tr>
                  </tbody>
                </table>
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
                If customer care refuses to reverse an unnotified rate hike, charges interest on your full bill despite partial payment, or stalls your closure request, escalate through these three official tiers.
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
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Audits statement interest math, checks notice logs, and logs closure request.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">10 to 15 Working Days</td>
                      <td className="p-3">Reverses unlawful retroactive charges, GST, and approves Rs 500/day closure delay payout.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-Complaint</td>
                      <td className="p-3">Adjudicates on cms.rbi.org.in and directs refund, penalty credit, and CIBIL correction.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Common Mistakes & Debt Relief When You Cannot Pay */}
            <section id="common-mistakes" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Precautions &amp; Hardship Resolution</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Common Mistakes &amp; Debt Relief When You Cannot Pay
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers make costly errors after an APR hike, turning a manageable balance into a severe non-performing asset (NPA). Avoid these four mistakes and know your legal exit options.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    Blocking Instead of Closing the Card
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hotlisting or blocking a card in the mobile app only stops fresh swipes. Annual fees and 45% revolving APR keep compounding until formal account closure.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600" />
                    Ignoring Unbilled Merchant EMIs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Before surrendering a card, check active merchant EMIs and standing instructions. Unpaid EMI principal must be foreclosed or cleared before closure completes.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#1886ff]" />
                    Debt Consolidation vs Balance Transfer
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your CIBIL score is still strong,{' '}
                    <Link href="/credit-card-debt-consolidation" className="text-[#1886ff] font-semibold hover:underline">
                      credit card debt consolidation
                    </Link>{' '}
                    via a lower-rate term loan lets you clear card dues immediately and surrender the high-APR card cleanly.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Legal One-Time Settlement (OTS) Relief
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If job loss, medical crisis, or 47% compounding has made full repayment impossible, CredSettle negotiates formal{' '}
                    <Link href="/credit-card-settlement-process" className="text-[#1886ff] font-semibold hover:underline">
                      credit card One-Time Settlements
                    </Link>{' '}
                    to waive inflated interest and stop harassment.
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
                Frequently Asked Questions: Credit Card APR Hike Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers on RBI prior notice rules, dynamic credit card interest hikes, card surrender rights, Rs 500 daily penalties, and debt resolution in India.
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
                  <strong>RBI Master Direction:</strong> Reserve Bank of India (Credit Card and Debit Card - Issuance and Conduct) Directions, 2022 (Ref: RBI/2022-23/92, DoR.AUT.REC.No.27/24.01.041/2022-23, Chapter III on Interest Rates and Charges &amp; Chapter VI on MITC).
                </li>
                <li>
                  <strong>RBI Amendment Circular (March 7, 2024):</strong> RBI/2023-24/132, DoR.AUT.REC.81/24.01.041/2023-24 (Mandating interest levy strictly on remaining adjusted unpaid balance and transparent closure rules).
                </li>
                <li>
                  <strong>Supreme Court of India Precedent:</strong> The Hongkong and Shanghai Banking Corp. Ltd. v. Awaz &amp; Ors., Civil Appeal No. 5273 of 2008, 2024 INSC 1044 (Decided December 20, 2024 under Sections 21A and 35A of the Banking Regulation Act, 1949).
                </li>
                <li>
                  <strong>Supreme Court Constitution Bench:</strong> Central Bank of India v. Ravindra &amp; Ors., (2002) 1 SCC 367 (Prohibiting capitalization of penal interest).
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021 &amp; Consumer Protection Act, 2019:</strong> Redressal for deficiency in banking service and unnotified fee deductions.
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
                  <a href="https://www.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
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
                  <Link href="/credit-card-minimum-due-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Minimum Due Trap
                  </Link>
                  <Link href="/credit-card-settlement-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Process
                  </Link>
                  <Link href="/is-18-percent-gst-waived-credit-card-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    18% GST on Card Interest &amp; OTS
                  </Link>
                  <Link href="/credit-card-balance-transfer-default-interest-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Card Balance Transfer Rules
                  </Link>
                  <Link href="/unactivated-credit-card-charges-rbi-500-day-penalty" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unactivated Card Rs 500 Penalty
                  </Link>
                  <Link href="/unsolicited-credit-card-upgrade-limit-increase-rbi-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unsolicited Card Upgrade Penalty
                  </Link>
                  <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Overlimit Fee RBI Refund
                  </Link>
                  <Link href="/rbi-guidelines-on-penal-charges-in-loan-accounts" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Penal Charges Rules
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Debt Relief Service
                  </Link>
                  <Link href="/stop-credit-card-recovery-calls" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Card Recovery Harassment
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
                Specialist in credit card disputes, RBI Master Direction compliance, Ombudsman escalations, and unsecured debt settlement across leading Indian banks and card issuers.
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
                  45% APR DEBT EXIT SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Trapped by a 45% Credit Card APR Hike?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking legal team disputes unnotified MITC charges, stops recovery harassment, and negotiates formal 50% to 70% One-Time Settlements with official bank No Dues Certificates.
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
                  <span><strong>MITC Notice Audit:</strong> Challenge unnotified APR &amp; fee hikes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Closure Delay Penalty:</strong> Enforce Rs 500/day past 7 working days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Structured OTS Relief:</strong> Freeze compounding 47% card interest.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Escalation:</strong> Complete cms.rbi.org.in representation.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/credit-card-minimum-due-trap"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Escape Credit Card Minimum Due Trap
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Break 45% APR compounding &rarr;</span>
                </Link>

                <Link
                  href="/is-18-percent-gst-waived-credit-card-settlement-ots"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    18% GST on Credit Card Interest &amp; OTS
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">How GST waivers work &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-settlement-process"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Settlement Process India
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Step-by-step legal OTS guide &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
