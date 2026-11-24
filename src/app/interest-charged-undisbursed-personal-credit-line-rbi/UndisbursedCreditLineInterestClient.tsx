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

export default function UndisbursedCreditLineInterestClient() {
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
    { id: 'statutory-framework', label: '1. RBI Ban on Undisbursed Interest' },
    { id: 'sanctioned-vs-drawn', label: '2. Sanctioned Limit vs Drawn Cash' },
    { id: 'overcharge-math', label: '3. Full Limit vs Drawn Cost Math' },
    { id: 'hidden-fee-traps', label: '4. Commitment Fees & KFS Rules' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Refund SOP' },
    { id: 'borrower-rights', label: '7. Contract Law & Consumer Rulings' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Audit to Refund Milestones' },
    { id: 'specialized-scenarios', label: '10. Flexi OD, UPI Lines & Apps' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Portals' }
  ];

  const faqs = [
    {
      q: 'Can a bank or NBFC charge interest on an undisbursed personal credit line?',
      a: 'No. Under RBI Circular RBI/2024-25/30 (April 29, 2024), banks can charge interest only from the date cash hits your bank account. Charging interest on an unused credit limit is illegal.'
    },
    {
      q: 'What does the RBI April 29, 2024 circular say about charging interest?',
      a: 'This rule bans charging interest from the loan approval or signing date. It also stops full-month billing on mid-month payouts. Lenders must fix their systems and refund all excess interest.'
    },
    {
      q: 'Can a lender charge a commitment fee or annual fee on my unused credit limit?',
      a: 'A bank or NBFC can charge an annual fee only if it is printed upfront in your Key Facts Statement (KFS). Under RBI Circular RBI/2024-25/18, hidden fees left out of your KFS are invalid.'
    },
    {
      q: 'Why is my lender deducting full EMI when I withdrew only part of my limit?',
      a: 'Some NBFCs book the full credit limit as a fixed term loan by mistake or design. Check your KFS and bank credit proofs. You can demand an instant switch to billing on drawn cash only.'
    },
    {
      q: 'Is money sitting in a loan app wallet treated as disbursed under RBI rules?',
      a: 'No. Under the RBI (Digital Lending) Directions, 2025, every loan payout must move straight from the lender bank to your bank account. Cash stuck in an app wallet is not disbursed.'
    },
    {
      q: 'How do RBI rules apply to Flexi Personal Loans and Drop-Line Overdrafts?',
      a: 'In a Flexi Personal Loan or Drop-Line Overdraft, interest runs only on the net cash you draw and keep unpaid. Any money you repay early or leave unused must carry zero interest.'
    },
    {
      q: 'What happens to my CIBIL score if I dispute illegal undisbursed interest?',
      a: 'If a wrong EMI on an unused limit bounces, the bank may mark your CIBIL report overdue. Once you prove the error to the PNO or RBI Ombudsman, the bank must wipe that bad mark within 30 days.'
    },
    {
      q: 'Can I cancel an unused personal credit line without paying foreclosure charges?',
      a: 'Yes. If you have zero drawn cash, you owe zero interest. You can ask for free closure and a written No Dues Certificate (NOC). Digital loans also give at least a one-day cooling-off exit with no fine.'
    },
    {
      q: 'How much compensation can the RBI Ombudsman award for excess interest billing?',
      a: 'Under the Reserve Bank - Integrated Ombudsman Scheme, 2026, the Ombudsman can order a full refund and CIBIL fix. It can also award up to ₹30 lakh for direct loss and up to ₹3 lakh for mental stress.'
    },
    {
      q: 'How does CredSettle help recover undisbursed credit line interest refunds?',
      a: 'CredSettle checks your KFS, bank credit proofs, and loan sheet to find every extra rupee billed. Our legal team sends RBI notices, files Ombudsman claims, fixes CIBIL errors, and helps close bad debt.'
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
            <span>RBI Circular DoS.CO.PPG.SEC.1 &amp; Personal Credit Line Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            RBI Ban on Charging EMI Over Unutilized Sanctioned Limit
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Is your bank or NBFC charging interest on a personal credit line you never withdrew? Learn the strict RBI rules that ban interest on undisbursed limits, stop unfair EMIs, and help you claim a full refund.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Claim Your Interest Refund</span>
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
                  Protected under RBI Circular RBI/2024-25/30, the 2024 KFS Circular, and Digital Lending Directions 2025.
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
                <span>EXECUTIVE BRIEF: RBI RULES ON UNDISBURSED CREDIT LINE INTEREST</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Pay Only on Drawn Cash:</strong> RBI Circular RBI/2024-25/30 (April 29, 2024) sets a strict rule. Banks can charge interest only from the date cash hits your account.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Interest on Unused Limit:</strong> Suppose your limit is ₹5 lakh and you draw ₹1 lakh. You pay interest only on ₹1 lakh. The unused ₹4 lakh costs ₹0.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Direct Bank Flow Rule:</strong> Under the RBI (Digital Lending) Directions, 2025, payouts must go straight to your bank. Cash kept in an app wallet is not disbursed.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Key Facts Statement Shield:</strong> Under RBI Circular RBI/2024-25/18, hidden fees left out of your KFS are void. Banks cannot add secret commitment charges later.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Full Refund &amp; Ombudsman Relief:</strong> Claim a full refund and wipe bad CIBIL marks. Under RB-IOS 2026, you can seek up to ₹30 lakh for loss plus ₹3 lakh for stress.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Framework: RBI Ban on Undisbursed Interest */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Mandates &amp; Fair Lending Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Framework: RBI Ban on Undisbursed Interest
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many Indian borrowers open a personal credit line or flexi loan for emergency cash backup. They expect to pay interest only when they pull money into their bank account. Yet some NBFCs and digital apps start billing full EMIs right after loan approval.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To end this unfair billing, the Reserve Bank of India issued a strict circular on April 29, 2024. Circular RBI/2024-25/30 (DoS.CO.PPG.SEC.1/11.01.005/2024-25) covers all commercial banks, small finance banks, co-operative banks, and NBFCs across India.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During bank audits, the RBI found lenders charging interest from the loan sanction date or contract date. Some lenders billed full-month interest even when a borrower drew money late in the month. Others kept advance EMIs while still charging interest on the full loan limit.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI ruled that these practices break the Fair Practices Code. It ordered all banks and NBFCs to fix their billing systems right away and refund every rupee of excess interest collected from borrowers.
              </p>
            </section>

            {/* SECTION 2: Sanctioned Limit vs Drawn Principal: Core Credit Law */}
            <section id="sanctioned-vs-drawn" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Core Credit Line Structure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Sanctioned Limit vs Drawn Principal: Core Credit Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every personal credit line has two distinct numbers. The first is your <strong>Sanctioned Limit</strong>, which is the top spending cap the lender approves. The second is your <strong>Drawn Principal</strong>, which is the real cash sent into your savings account.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In Indian banking law, interest is the cost of using borrowed money. If money stays inside the bank&apos;s own reserve, you have not borrowed or used it yet. As a result, the lender has zero legal right to charge interest on your unused limit.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The same rule applies to partial withdrawals and early repayments. For example, suppose you draw ₹1,00,000 on Day 15 of a month. The lender can charge interest only for the exact days you hold that ₹1,00,000, not for the whole 30-day cycle.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI also reinforced this rule in its September 4, 2023 circular on Pre-Sanctioned Credit Lines on UPI and the RBI (Digital Lending) Directions, 2025. Both rules confirm that interest runs strictly on actual funds transferred to the borrower.
              </p>
            </section>

            {/* SECTION 3: Overcharge Math: Full Limit vs Utilized Tranche Cost */}
            <section id="overcharge-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Excess Billing Audit &amp; Refund Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Overcharge Math: Full Limit vs Utilized Tranche Cost
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Charging interest on an unused credit limit inflates your monthly debt bill fast. Consider a salaried borrower who holds an approved ₹5,00,000 personal credit line at 18% yearly interest (1.5% per month).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The table below shows how much unlawful interest piles up when a bank bills the full ₹5,00,000 limit instead of the actual drawn cash. You can use this same math to audit your own loan statement.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Credit Line Interest Audit (18% p.a. on ₹5,00,000 Limit)</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Drawn vs Undisbursed Math</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Usage Scenario</th>
                        <th className="p-3">Cash Drawn</th>
                        <th className="p-3">Lawful Interest</th>
                        <th className="p-3">Full-Limit Bill</th>
                        <th className="p-3 text-right">Refund Owed to You</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Unused Backup Line (30 Days)</td>
                        <td className="p-3 font-mono">₹0</td>
                        <td className="p-3 text-emerald-600 font-semibold font-mono">₹0</td>
                        <td className="p-3 text-rose-600 font-mono">₹7,500</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">₹7,500 (100% Excess)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">20% Drawn for Full Month</td>
                        <td className="p-3 font-mono">₹1,00,000</td>
                        <td className="p-3 text-emerald-600 font-semibold font-mono">₹1,500</td>
                        <td className="p-3 text-amber-700 font-mono">₹7,500</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">₹6,000 / month</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">50% Drawn Mid-Month (15 Days)</td>
                        <td className="p-3 font-mono">₹2,50,000</td>
                        <td className="p-3 text-emerald-600 font-semibold font-mono">₹1,875</td>
                        <td className="p-3 text-rose-600 font-mono">₹7,500</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">₹5,625 / month</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">6 Months of Unused-Limit EMIs</td>
                        <td className="p-3 font-mono">₹1,00,000</td>
                        <td className="p-3 text-emerald-600 font-semibold font-mono">₹9,000</td>
                        <td className="p-3 text-rose-700 font-mono">₹45,000</td>
                        <td className="p-3 text-right font-bold text-rose-800 font-mono">₹36,000 + Bounce Fees</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">12-Month Overcharge Impact</td>
                        <td className="p-3 font-mono">₹1,00,000 Avg</td>
                        <td className="p-3 font-mono text-emerald-700">₹18,000</td>
                        <td className="p-3 font-mono text-rose-700">₹90,000</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹72,000+ Refundable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Remember to add indirect losses to your claim. Suppose a wrong EMI made your auto-debit bounce. The bank must refund the bounce fee, late fee, and 18% GST too.
              </p>
            </section>

            {/* SECTION 4: Hidden Traps: Commitment Fees, App Wallets & KFS Law */}
            <section id="hidden-fee-traps" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Hidden Fee Shields &amp; Digital Lending Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Hidden Traps: Commitment Fees, App Wallets &amp; KFS Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Some lenders try to bypass the interest ban with new fee labels. They call the charge a &quot;commitment fee,&quot; &quot;limit fee,&quot; or &quot;renewal charge.&quot; Three clear RBI rules stop these hidden traps.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>First, the Key Facts Statement (KFS) Rule.</strong> RBI Circular RBI/2024-25/18 took effect on October 1, 2024. Banks must list every fee and the true APR in one KFS sheet before you sign. Any fee left out of your KFS is void without your written consent.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Second, the Direct Bank Flow Rule.</strong> Some loan apps put your limit in an app wallet and start interest early. Under the RBI (Digital Lending) Directions, 2025 (RBI/2025-26/36), all loan cash must go straight to your bank account. Wallet funds do not count as cash paid out.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Third, the Penal Charge Ban.</strong> Under RBI Circular RBI/2023-24/53 (from April 1, 2024), banks cannot add penal interest onto your base loan rate. They cannot compound late fines, and they cannot raise your limit on their own without your request.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Credit Line Interest Refund Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual guide highlights your core borrower rights under RBI Fair Practices and Key Facts Statement rules. Lenders can bill interest strictly on drawn funds, never on your unused personal credit limit.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/interest-charged-undisbursed-personal-credit-line-rbi.jpg"
                    alt="RBI Ban on Charging Interest on Undisbursed Personal Credit Line"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Personal Credit Line Protection Framework • RBI Circular Compliant</span>
                  <a
                    href="/images/infographics/interest-charged-undisbursed-personal-credit-line-rbi.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Claiming Undisbursed Interest Refunds */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Claiming Undisbursed Interest Refunds
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Is your bank charging interest on an unused credit line? Follow these six simple steps to stop unfair EMIs and get your cash back.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Collect Your KFS, Loan Deed &amp; Statement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Save your Key Facts Statement (KFS), sanction letter, and Statement of Account (SOA). Check if the bank listed any annual fee or fixed charge upfront.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Match Bank UTR Credits Against Billing Dates
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check your bank passbook and mark each NEFT or IMPS credit from the lender. Compare that payout date with the day interest began.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Build an Itemized Excess Interest Sheet
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Work out the true daily interest on drawn cash only. Subtract it from the bank&apos;s bill to find your refund. Add wrong bounce fees and GST.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Email a Formal RBI Dispute Notice to the GRO
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email the bank&apos;s Grievance Redressal Officer (GRO) with your UTR proofs. Cite RBI Circular RBI/2024-25/30 and ask for a full refund and fresh EMI plan.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Guard Your CIBIL File &amp; Stop Wrongful Debits
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Save your dispute ticket ID right away. Ask the bank in writing to pause bad CIBIL reports while your case stays open. Never accept unfair fees over calls.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Escalate to PNO and RBI Ombudsman Portal
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Did the lender deny your claim or stay silent for 30 days? File a free case on cms.rbi.org.in. Attach your KFS, bank statement, and refund math.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Borrower Legal Rights: Contract Law & Consumer Rulings */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections &amp; Judicial Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Borrower Legal Rights: Contract Law &amp; Consumer Rulings
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Strong Indian laws back up RBI circulars on unfair credit billing. Courts view interest on undisbursed cash as a clear breach of borrower rights.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Use these four legal tools together to claim refunds, wipe CIBIL errors, and seek extra damages from your lender.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Charging EMIs on undisbursed cash is a service lapse under Section 2(11) and an unfair practice under Section 2(47). Consumer courts order refunds plus mental stress payouts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Indian Contract Act, 1872 (Section 72)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 72 says any party who takes cash by mistake or force must pay it back. Interest pulled for money never lent is unfair gain and must be repaid in full.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>RBI Integrated Ombudsman Scheme, 2026</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    From July 1, 2026, the RBI Ombudsman can cancel illegal bills and order full refunds. It can award up to ₹30 lakh for loss plus ₹3 lakh for stress and costs.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>CICRA 2005 &amp; ₹100/Day CIBIL Rule</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Wrong billing can stain your CIBIL, CRIF, or Equifax file. Once you dispute it, lenders must fix errors within 30 days or pay ₹100 per day in delay relief.
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
                Customer care agents often read from a script and refuse to waive excess interest. Use the binding three-tier RBI grievance ladder below to force a formal compliance review.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Response Window</th>
                      <th className="p-3">Scope of Relief &amp; Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank or NBFC Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 14 Days</td>
                      <td className="p-3">Verifies KFS terms and UTR credit dates, logs a formal ticket, and pauses wrong fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">15 to 30 Days</td>
                      <td className="p-3">Approves interest refunds, rebuilds the EMI schedule, and sends CIBIL clean-up files.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">After 30 Days</td>
                      <td className="p-3">Issues binding refund awards on cms.rbi.org.in plus up to ₹30 lakh loss and ₹3 lakh stress relief.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Milestones: Audit to CIBIL Fix & Refund */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Milestones: Audit to CIBIL Fix &amp; Refund
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking each stage keeps your paper trail airtight. A clear date-wise timeline helps you win faster at the Principal Nodal Officer or RBI Ombudsman stage.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Window</th>
                      <th className="p-3">Dispute Phase</th>
                      <th className="p-3">Lender Legal Duty</th>
                      <th className="p-3">Borrower Action Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 3</td>
                      <td className="p-3 font-mono text-[11px]">Evidence Audit</td>
                      <td className="p-3">Must provide KFS, loan deed copy, and full SOA on request.</td>
                      <td className="p-3">Match bank UTR entries against interest dates and build refund math.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 4 to 14</td>
                      <td className="p-3 font-mono text-[11px]">GRO Filing</td>
                      <td className="p-3">Issues complaint reference ID and reviews billing under April 2024 rules.</td>
                      <td className="p-3">Email GRO with RBI circular citations and demand written reply.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 15 to 30</td>
                      <td className="p-3 font-mono text-[11px]">PNO Review</td>
                      <td className="p-3">Audits excess interest, reverses bounce charges, and resets EMI ledger.</td>
                      <td className="p-3">Escalate to PNO if GRO rejects claim or sends a generic response.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 31</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">RBI CMS Trigger</td>
                      <td className="p-3">30-day statutory window closes; lender faces regulatory scrutiny.</td>
                      <td className="p-3 font-bold text-amber-800">File online complaint at cms.rbi.org.in under RB-IOS 2026.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 32 to 60</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Refund &amp; Credit</td>
                      <td className="p-3">Credits excess interest back to your account and updates loan status.</td>
                      <td className="p-3 font-bold text-slate-900">Check updated SOA and confirm zero pending illegal charges.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 and Beyond</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">CIBIL &amp; NOC Check</td>
                      <td className="p-3">Updates CIBIL, CRIF, and Equifax within fortnightly reporting cycles.</td>
                      <td className="p-3">Download fresh credit reports and save your clean No Dues Certificate.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Scenarios: Flexi OD, UPI Lines & Apps */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Flexi OD, UPI Lines &amp; Apps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit lines come in many forms across Indian banks and NBFCs. Here is how RBI rules guard you in four common real-life cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Flexi Hybrid &amp; Drop-Line Overdrafts
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In a flexi loan or drop-line overdraft, your credit cap drops each year. Interest still runs only on your net drawn sum. Annual fees apply only if shown in your KFS.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Pre-Sanctioned Credit Lines on UPI
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI&apos;s September 2023 UPI rule, banks charge interest only when you scan and pay. An idle pre-approved UPI credit limit must cost zero interest.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Digital Lending App Wallet Traps
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Some apps deduct fees early and park cash in an app wallet for days. Under 2025 RBI rules, interest starts only when real NEFT or IMPS cash hits your bank.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Unused Line Closure &amp; NPA Settlement
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you never drew cash, ask for free closure and an NOC right away. If unfair EMIs pushed your line into default, CredSettle helps audit the debt and settle cleanly.
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
                Frequently Asked Questions: Undisbursed Credit Interest
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal answers on undisbursed personal credit line interest, hidden KFS fees, app wallet disbursals, CIBIL repair, and RBI Ombudsman refunds.
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
                  <strong>RBI Circular on Charging of Interest:</strong> RBI/2024-25/30, DoS.CO.PPG.SEC.1/11.01.005/2024-25 (dated April 29, 2024), Fair Practices Code for Lenders - Charging of Interest.
                </li>
                <li>
                  <strong>RBI Key Facts Statement (KFS) Circular:</strong> RBI/2024-25/18, DOR.STR.REC.13/13.03.00/2024-25 (dated April 15, 2024; mandatory effective October 1, 2024), Key Facts Statement for Loans &amp; Advances.
                </li>
                <li>
                  <strong>Reserve Bank of India (Digital Lending) Directions, 2025:</strong> RBI/2025-26/36, DOR.STR.REC.19/21.07.001/2025-26 (dated May 8, 2025), Chapter III Direct-to-Account Disbursal &amp; Credit Limit Rules.
                </li>
                <li>
                  <strong>RBI Penal Charges &amp; UPI Credit Line Circulars:</strong> RBI/2023-24/53 (August 18, 2023) on Fair Lending Practice - Penal Charges in Loan Accounts, and RBI/2023-24/58 (September 4, 2023) on Pre-Sanctioned Credit Lines on UPI.
                </li>
                <li>
                  <strong>Statutory Consumer &amp; Ombudsman Remedies:</strong> Reserve Bank - Integrated Ombudsman Scheme (RB-IOS), 2026; Consumer Protection Act, 2019 (Sections 2(11), 2(47), and 39); Indian Contract Act, 1872 (Section 72).
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
                  <a href="https://sachet.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Sachet Complaint Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
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
                  <Link href="/personal-loan-interest-before-disbursal-bpi-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Interest Before Disbursal Refund
                  </Link>
                  <Link href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Hidden Charges Not in KFS
                  </Link>
                  <Link href="/flexi-hybrid-personal-loan-drop-line-overdraft-settle" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Flexi Hybrid &amp; Drop-Line OD
                  </Link>
                  <Link href="/pre-sanctioned-credit-line-on-upi-default-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    UPI Credit Line Settlement
                  </Link>
                  <Link href="/flat-interest-rate-vs-reducing-apr-personal-loan-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Flat Rate vs Reducing APR
                  </Link>
                  <Link href="/rule-of-78-front-loaded-interest-personal-loan-dispute" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rule of 78 Interest Dispute
                  </Link>
                  <Link href="/bank-refusing-personal-loan-agreement-copy-rbi-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Refusing Loan Agreement
                  </Link>
                  <Link href="/personal-loan-disbursed-into-frozen-dormant-account" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan Sent to Frozen Account
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
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
                Specialist in RBI Fair Practices audits, personal credit line disputes, KFS compliance, and debt resolution helping borrowers reverse unlawful interest and repair credit reports.
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
                  EXCESS INTEREST RECOVERY
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Billed on an Unused Credit Limit?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking lawyers audit your KFS and UTR receipts, send formal notices under RBI Circular RBI/2024-25/30, and recover excess interest plus CIBIL clean-up.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Audit My Credit Line Now
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
                  <span><strong>Exact UTR &amp; SOA Audit:</strong> Pinpoints every rupee billed on unused funds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Circular Legal Notices:</strong> Direct demand to Bank and NBFC Nodal Officers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL &amp; Bureau Repair:</strong> Removes false overdue tags from wrong EMIs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Representation:</strong> End-to-end filing on cms.rbi.org.in.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/personal-loan-interest-before-disbursal-bpi-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Interest Charged Before Loan Disbursal
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI April 2024 refund guide &rarr;</span>
                </Link>

                <Link
                  href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Hidden Loan Charges Not in KFS
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Key Facts Statement refund rules &rarr;</span>
                </Link>

                <Link
                  href="/flexi-hybrid-personal-loan-drop-line-overdraft-settle"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Flexi Hybrid &amp; Drop-Line OD Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Resolve flexi credit line debt &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
