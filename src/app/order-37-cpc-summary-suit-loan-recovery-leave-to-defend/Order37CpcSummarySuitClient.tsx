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
  Award,
  BookOpen,
  Building2,
  DollarSign,
  Check,
  Lock,
  Phone,
  AlertCircle,
  CreditCard,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark
} from 'lucide-react';

export default function Order37CpcSummarySuitClient() {
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
    { id: 'order-37-overview', label: '1. What is Order 37 CPC Summary Suit?' },
    { id: 'summons-appearance', label: '2. Strict 10-Day Summons Procedure' },
    { id: 'leave-to-defend-concept', label: '3. Leave to Defend under Rule 3' },
    { id: 'supreme-court-rulings', label: '4. Landmark Precedents: Hubtown & Mechelec' },
    { id: 'top-triable-issues', label: '5. Top Legal Grounds & Triable Issues' },
    { id: 'visual-blueprint', label: '6. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '7. Step-by-Step SOP: Drafting Defense' },
    { id: 'conditional-vs-unconditional', label: '8. Conditional vs Unconditional Leave' },
    { id: 'limitation-condonation', label: '9. Missing the 10-Day Limitation' },
    { id: 'strategic-settlement', label: '10. How Order 37 Leads to OTS' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is an Order 37 CPC summary suit for loan recovery?',
      a: 'An Order 37 summary suit is an expedited civil procedure under the Code of Civil Procedure, 1908. It allows banks and NBFCs to recover liquidated debts from written loan agreements without the borrower having an automatic right to defend.'
    },
    {
      q: 'How much time do I have to respond after receiving an Order 37 court summons?',
      a: 'You have strictly 10 days from the date of service of the summons in Form No. 4 to enter an appearance in court. If you fail to appear within 10 days, the allegations are deemed admitted, and the court will pass an ex-parte decree.'
    },
    {
      q: 'What is the difference between a Memo of Appearance and Leave to Defend?',
      a: 'A Memo of Appearance (Form 4) informs the court of your residential or advocate address within 10 days of the first summons. Leave to Defend (Rule 3(5)) is a separate application filed within 10 days of receiving the Summons for Judgment (Form 4A).'
    },
    {
      q: 'What happens if I fail to file Leave to Defend within 10 days?',
      a: 'If you fail to apply for Leave to Defend within 10 days of the Summons for Judgment, the lender becomes entitled to an immediate money decree. You must show sufficient cause under Rule 3(7) or special circumstances under Rule 4 to recall it.'
    },
    {
      q: 'What constitutes a triable issue to get unconditional leave to defend?',
      a: 'A triable issue is a bona fide, plausible defense. Key grounds include illegal penal interest capitalization under RBI rules, unliquidated claims, limitation expiry, defective loan agreements, or lack of proper account certification.'
    },
    {
      q: 'Can a bank file an Order 37 suit for credit card dues or personal loans?',
      a: 'Yes. Lenders frequently file Order 37 suits for unsecured personal loans and credit cards. However, if they inflate claims with arbitrary recovery penalties or uncertified statements, borrowers can challenge the suit as unliquidated.'
    },
    {
      q: 'Can the court order me to deposit money to defend an Order 37 suit?',
      a: 'Under the Supreme Court Hubtown ruling, courts cannot order a pre-deposit if you raise a bona fide triable issue. A conditional deposit is ordered only if the defense is doubtful or if you admit to owing a specific portion of the debt.'
    },
    {
      q: 'Can an ex-parte decree under Order 37 CPC be set aside?',
      a: 'Yes. Under Order 37 Rule 4 CPC, the court may set aside a decree under special circumstances. The borrower must demonstrate both a valid reason for non-appearance and a prima facie triable defense on merits.'
    },
    {
      q: 'How does filing Leave to Defend help in negotiating an OTS loan settlement?',
      a: 'When leave to defend is granted, the summary suit converts into an ordinary civil trial lasting 3 to 7 years. To avoid prolonged litigation, banks routinely offer a One-Time Settlement (OTS) with 50% to 75% waivers.'
    },
    {
      q: 'How does CredSettle assist borrowers facing Order 37 CPC summary suits?',
      a: 'CredSettle drafts strong Leave to Defend applications with senior advocates, audits lender statements for RBI non-compliance, defends against conditional deposits, and negotiates structured compromise settlements directly with bank credit committees.'
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
            <Gavel className="w-3.5 h-3.5" />
            <span>Civil Procedure Code &amp; Banking Recovery Legal Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Order 37 CPC Summary Suit for Loan Recovery: Leave to Defend
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A clear legal guide for borrowers facing summary suits under Order 37 CPC. Learn the strict 10-day timeline, grounds for unconditional leave to defend, and how to stop ex-parte decrees.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Order 37 Legal Defense</span>
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
                  <span>Order 37 Rule 3 Defense Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Order XXXVII CPC and Supreme Court Hubtown guidelines.
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
                <span>EXECUTIVE BRIEF: ORDER 37 CPC SUMMARY SUIT DEFENSE CRUX</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict 10-Day Appearance:</strong> You must file a Memo of Appearance within 10 days of receiving court summons in Form 4. Missing this deadline lets the bank get an ex-parte money decree.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Leave to Defend Window:</strong> When the bank serves a Summons for Judgment in Form 4A, you have strictly 10 days to file your Leave to Defend application.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Substantial Defense Wins Free Leave:</strong> Under the Supreme Court Hubtown ruling, showing a fair triable issue gives you unconditional leave to defend without depositing any cash.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Converts to Regular Trial:</strong> Once the court grants leave to defend, the case becomes a regular civil suit. This takes 3 to 7 years in court.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Huge Settlement Leverage:</strong> Banks hate long trials. With the case delayed, banks often offer a One-Time Settlement (OTS) with 50% to 75% waivers on interest and charges.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: What is Order 37 CPC Summary Suit? */}
            <section id="order-37-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Procedural Scope</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. What is Order 37 CPC Summary Suit for Loan Recovery?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on a personal loan, credit card, or business loan, lenders want fast recovery. Regular civil suits in Indian courts take many years. To avoid this delay, banks and NBFCs file a summary suit under Order 37 of the Code of Civil Procedure (CPC), 1908.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Order 37 is an expedited court procedure. It is designed to recover fixed debts without long trials. In an ordinary civil suit, you have an automatic right to file a written statement. But under Order 37, you have no automatic right to defend. The court assumes the lender claim is valid unless you prove a genuine dispute.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Order 37 Rule 1(2), summary suits apply only to specific debts. These include bills of exchange, hundies, and promissory notes. They also cover suits to recover a fixed sum of money arising from a written contract or guarantee. Lenders cannot use Order 37 for unliquidated damages, disputed penalties, or vague charges.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In retail banking, lenders use Order 37 as a pressure tool. They hope the borrower will panic and miss the short 10-day deadline. If the borrower does not act in time, the court passes an immediate money decree.
              </p>
            </section>

            {/* SECTION 2: Strict 10-Day Summons Procedure */}
            <section id="summons-appearance" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Two-Stage Summons Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Strict 10-Day Appearance &amp; Summons Procedure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                An Order 37 suit has a two-stage summons process. You must understand both stages. Missing either deadline causes severe legal harm.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The first stage starts with the service of summons in Form No. 4. When you receive this notice from the court, you have strictly 10 days to enter an appearance. Entering an appearance does not mean filing your defense yet. You only need to file a memo with your address and your advocate details.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you fail to enter an appearance within 10 days, Order 37 Rule 2(3) applies. The court treats all facts in the bank plaint as admitted. The judge will quickly pass a final money decree against you for the full claim with interest.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once you enter an appearance, the second stage begins. The bank must serve a Summons for Judgment in Form No. 4A. This notice includes an affidavit verifying the debt. You then have strictly 10 days from receiving Form 4A to file your Leave to Defend application.
              </p>

              {/* Comparative Table: Order 37 vs Regular Suit */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Procedural Parameter</th>
                      <th className="p-3">Summary Suit (Order 37 CPC)</th>
                      <th className="p-3">Regular Civil Suit (Order 7 &amp; 8 CPC)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Right to Defend</td>
                      <td className="p-3 text-rose-600 font-semibold">No automatic right. Requires court leave.</td>
                      <td className="p-3 text-emerald-600 font-semibold">Automatic statutory right to file defense.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">First Response Window</td>
                      <td className="p-3 font-mono font-bold text-rose-600">10 Days to file Appearance (Form 4).</td>
                      <td className="p-3 font-mono">30 Days (extendable to 90 days for WS).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Summons for Judgment</td>
                      <td className="p-3">Mandatory Form 4A with lender affidavit.</td>
                      <td className="p-3">Not applicable in regular suits.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Leave to Defend Window</td>
                      <td className="p-3 font-mono font-bold text-rose-600">Strictly 10 Days from Form 4A service.</td>
                      <td className="p-3">Not required. Written statement filed directly.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Consequence of Default</td>
                      <td className="p-3 text-rose-600 font-bold">Immediate final money decree passed.</td>
                      <td className="p-3">Matter proceeded ex-parte; evidence recorded.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Dispute Conversion</td>
                      <td className="p-3 text-blue-700 font-bold">Converts to regular trial once leave is granted.</td>
                      <td className="p-3">Follows standard civil trial steps from day one.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: Understanding Leave to Defend under Order 37 Rule 3 */}
            <section id="leave-to-defend-concept" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Pleading Standards &amp; Evidentiary Thresholds</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Understanding Leave to Defend under Order 37 Rule 3
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                An Application for Leave to Defend is your primary shield in an Order 37 suit. Governed by Rule 3(5), this application asks the court for permission to contest the claim.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You must support this application with a sworn affidavit. The affidavit must not make broad or empty claims. It must state clear facts, accounting errors, and legal flaws. You must prove that your defense raises a triable issue.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The judge does not decide the whole case at this early stage. The court does not test whether you will win the trial. The judge only checks if your defense is honest, fair, and reasonable. If your defense is not a fake excuse to delay payment, the court must let you defend.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Ledger Audit &amp; Triable Dispute Math</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹15 Lakh Gross Summary Claim</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Claim Breakdown Component</th>
                        <th className="p-3">Bank Summary Claim</th>
                        <th className="p-3">Legal &amp; Regulatory Status</th>
                        <th className="p-3 text-right">Triable Dispute Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Original Principal Disbursal Balance</td>
                        <td className="p-3">₹7,20,000</td>
                        <td className="p-3 text-blue-600 font-semibold">Base debt verified from bank statements</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹7,20,000 (Admitted Base)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Capitalized Penal Charges &amp; Fees</td>
                        <td className="p-3 text-rose-600 font-semibold">₹3,40,000</td>
                        <td className="p-3 text-rose-600 font-semibold">Illegal under RBI 2024 Fair Lending Rules</td>
                        <td className="p-3 text-right font-bold text-emerald-600">₹3,40,000 (Triable Issue)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Compounded Post-Default Interest</td>
                        <td className="p-3 text-rose-600 font-semibold">₹4,40,000</td>
                        <td className="p-3 text-amber-600 font-semibold">Unliquidated demand outside Order 37 scope</td>
                        <td className="p-3 text-right font-bold text-emerald-600">₹4,40,000 (Triable Issue)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Net Disputed Ledger Claims</td>
                        <td className="p-3 text-slate-900">₹15,00,000 Claimed</td>
                        <td className="p-3 text-emerald-700">₹7,80,000 Proven Triable Inconsistencies</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">Unconditional Leave Granted</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Landmark Supreme Court Rulings: Hubtown & Mechelec */}
            <section id="supreme-court-rulings" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Landmark Supreme Court Rulings: Hubtown &amp; Mechelec
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court of India has set clear rules for granting leave to defend. For forty years, courts followed the Mechelec Engineers case from 1976.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In 2017, the Supreme Court updated these rules in IDBI Trusteeship Services Ltd. v. Hubtown Ltd. (2017) 1 SCC 568. This three-judge ruling modernised the law under Order 37 Rule 3. It gives borrowers a strong legal framework to fight summary suits.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court in Hubtown laid down five core principles:
              </p>

              <div className="space-y-3">
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">Principle 1: Substantial Defense</span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    If you prove a substantial defense, you get unconditional leave to defend. The court has no power to demand any cash deposit.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">Principle 2: Bona Fide Triable Issue</span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    If you raise a fair, bona fide, or reasonable dispute, the court must grant unconditional leave. Your defense does not have to be proven true yet.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wide">Principle 3: Plausible but Doubtful Defense</span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    If your defense is possible but doubtful, the court may grant conditional leave. In this case, you may need to deposit part of the debt or give security.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
                  <span className="text-xs font-bold text-rose-700 uppercase tracking-wide">Principle 4: Sham or Frivolous Defense</span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    If you disclose no defense, or your claim is fake and made only to delay, the court refuses leave. The bank gets an immediate decree.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">Principle 5: Admitted Part of Claim</span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    If you admit owing part of the debt, you must deposit that admitted sum in court. The judge then lets you fight the disputed balance.
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed pt-2">
                The Supreme Court confirmed this again in B.L. Kashyap &amp; Sons Ltd. v. JMS Steels (2022). The court ruled that judges should not deny leave to defend when a real dispute exists.
              </p>
            </section>

            {/* SECTION 5: Top Legal Grounds & Triable Issues in Loan Recovery */}
            <section id="top-triable-issues" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Substantive Legal Defenses</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Top Legal Grounds &amp; Triable Issues in Loan Recovery
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To win unconditional leave to defend against a bank or NBFC, your application must rely on solid legal grounds. The following defenses have consistently succeeded in converting summary suits into regular trials across Indian courts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Illegal Penal Interest &amp; RBI Non-Compliance</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The RBI issued fair lending rules in 2024. These rules ban adding penal charges to loan principal. If the bank added compound interest on late EMIs, the ledger is illegal. This gives you a strong triable issue.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Unliquidated Claim Outside Order 37</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Order 37 applies only to fixed debts. Banks often add random bounce fees and collection charges. This makes the claim unliquidated. As a result, the summary suit is not maintainable.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Statutory Limitation Bar (3-Year Rule)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Limitation Act, 1963 sets a strict time limit. A bank must file a money suit within 3 years of loan default. If the lender sues after 3 years, the claim is time-barred. The court will dismiss it.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Electronic Evidence &amp; BSA 2023 Certification</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks rely on digital account statements. Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, the bank must file an electronic certificate. Without this certificate, the ledger is not valid evidence.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <CreditCard className="w-4 h-4" />
                    <span>Misuse of Blank Security Instruments</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders often take blank cheques at loan signing. Filling inflated amounts without consent breaks Section 20 of the Negotiable Instruments Act. This creates a solid triable dispute.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>Inadequate Stamping of Loan Agreements</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Loan agreements need proper stamp duty. Under Section 35 of the Indian Stamp Act, unstamped papers cannot be used in court. A stamp defect stops the court from passing a summary decree.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Visual Blueprint: Order 37 CPC Defense Timeline
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive infographic illustrates the sequential steps of an Order 37 summary suit, the strict 10-day limitation gates, and the strategic path to securing unconditional leave to defend.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/order-37-cpc-summary-suit-loan-recovery-leave-to-defend.jpg"
                    alt="Order 37 CPC Summary Suit Loan Recovery Leave to Defend Legal Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Civil Court Defense Framework • Order 37 CPC &amp; Hubtown Compliant</span>
                  <a
                    href="/images/infographics/order-37-cpc-summary-suit-loan-recovery-leave-to-defend.jpg"
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

            {/* SECTION 7: Step-by-Step SOP: Drafting Your Leave to Defend */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Step-by-Step SOP: Drafting Your Leave to Defend
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you receive court summons in an Order 37 suit, executing this structured six-stage protocol guarantees that you protect your legal standing and block the bank from securing an easy money decree.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Verify Summons Date &amp; Record Exact Service
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check the speed post envelope or court bailiff receipt. Note the exact date of physical delivery. Calculate the 10-day limitation window immediately, excluding the day of service under Section 12 of the Limitation Act.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: File Memo of Appearance in Court (Form 4)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Engage counsel to file a formal Memo of Appearance under Order 37 Rule 3(1). Provide your verified address and your advocate details. Serve an advance copy to the bank lawyer to stop any ex-parte decree attempts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Forensic Audit of Bank Ledger &amp; Loan Documents
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Examine every annexure attached to the bank plaint. Compare the bank statement against your actual bank credits, identify hidden compound interest, flag missing digital evidence certificates, and note any stamp duty deficiencies.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Draft Leave to Defend Application &amp; Affidavit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Prepare a comprehensive application under Order 37 Rule 3(5) supported by a sworn affidavit. Explicitly frame 3 to 5 distinct triable issues based on Hubtown principles, proving that the suit involves complex questions of law and fact.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Serve Advance Copy &amp; File within 10 Days of Form 4A
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once the lender serves their Summons for Judgment (Form 4A), lodge your leave to defend application within strictly 10 days. Ensure court stamp acknowledgment and keep proof of service on record.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Oral Arguments &amp; Leverage for OTS Loan Settlement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Your counsel presents oral arguments showing prima facie triable issues. When the court grants leave, the bank realizes the case will take years of regular trial, creating the perfect opportunity to negotiate a deep OTS waiver.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Conditional vs Unconditional Leave: Security Deposit */}
            <section id="conditional-vs-unconditional" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Deposit Conditions &amp; Pre-Deposit Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Conditional vs Unconditional Leave: Security Deposit
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers often fear that the court will force them to deposit cash. You should understand the difference between conditional and unconditional leave.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the proviso to Order 37 Rule 3(5), the court cannot ask for a deposit if you raise a bona fide triable defense. The Supreme Court in Hubtown confirmed this rule. If your defense is real and fair, the court must grant unconditional leave without any deposit.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A court orders a deposit in only two cases. First, if your defense is possible but doubtful, the court may ask for partial security. Second, if you admit part of the debt, you must deposit the admitted sum to contest the rest.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[580px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Order Category</th>
                      <th className="p-3">Judicial Finding on Defense</th>
                      <th className="p-3">Deposit Requirement</th>
                      <th className="p-3">Next Procedural Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-emerald-50/40">
                      <td className="p-3 font-bold text-emerald-800">Unconditional Leave</td>
                      <td className="p-3">Substantial or bona fide triable issue established.</td>
                      <td className="p-3 text-emerald-700 font-bold">Zero Cash Deposit Required.</td>
                      <td className="p-3">File Written Statement within 30 days.</td>
                    </tr>
                    <tr className="bg-amber-50/40">
                      <td className="p-3 font-bold text-amber-800">Conditional Leave</td>
                      <td className="p-3">Defense is plausible but doubtful or lacks corroboration.</td>
                      <td className="p-3 text-amber-700 font-bold">Deposit 20% to 50% or Bank Guarantee.</td>
                      <td className="p-3">Deposit amount within court window or challenge.</td>
                    </tr>
                    <tr className="bg-rose-50/40">
                      <td className="p-3 font-bold text-rose-800">Leave Refused</td>
                      <td className="p-3">No defense disclosed, moonshine, or sham assertion.</td>
                      <td className="p-3 text-rose-700 font-bold">Entire claimed sum decreed.</td>
                      <td className="p-3">Bank executes decree or borrower appeals.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Missing the 10-Day Deadline? */}
            <section id="limitation-condonation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Delay Condonation &amp; Setting Aside Decrees</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. What Happens If You Miss the 10-Day Deadline?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers often fail to act within the tight 10-day window. If you miss this deadline, the CPC provides two legal remedies.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The first remedy is Order 37 Rule 3(7). This rule lets the court excuse the delay if you show sufficient cause. Valid reasons include hospital stay, lack of proper address service, or family emergencies. You must file the request quickly with medical or travel records.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The second remedy is Order 37 Rule 4. If the court has already passed an ex-parte decree, you can apply to set it aside. You must prove two things: special reasons for your absence and a genuine defense on merits.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1886ff]" />
                    Order 37 Rule 3(7) Condonation of Delay
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Filed before final decree is signed. Borrower files an application explaining sufficient cause for delay along with the Leave to Defend application. Courts adopt a liberal view if genuine grounds exist.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Order 37 Rule 4 Setting Aside Decree
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Filed after an ex-parte decree is passed. Requires demonstrating special circumstances (such as fraudulent service) plus establishing a bona fide triable dispute on merits to recall the judgment.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10: Strategic Settlement: How Order 37 Leads to OTS */}
            <section id="strategic-settlement" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Negotiation Strategy &amp; Debt Relief</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Strategic Settlement: How Order 37 Leads to OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks file Order 37 suits hoping for an easy win within three months. But when a borrower files a strong leave to defend, the bank loses its speed advantage.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The moment the court grants leave, the case turns into an ordinary civil suit. An ordinary suit requires witness testimony, document proof, and cross-examination. In Indian courts, this trial takes 3 to 7 years.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Bank recovery teams work under tight quarterly targets. They do not want an unsecured retail loan stuck in court for years. Once leave to defend is granted, banks often invite borrowers for a One-Time Settlement (OTS).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                At CredSettle, our legal team uses this court delay as strong leverage. We remove unfair penal charges, highlight bank errors, and help borrowers settle their debts with 50% to 75% waivers and clean NOCs.
              </p>
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
                Frequently Asked Questions: Order 37 CPC Summary Suits
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding summary suits, summons for judgment, leave to defend applications, and borrower rights under Indian civil law.
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
                Official Regulatory Citations &amp; Statutory Legal Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Order XXXVII (Rules 1 to 7), Summary Procedure on Liquidated Debts and Negotiable Instruments.
                </li>
                <li>
                  <strong>Supreme Court of India Landmark Rulings:</strong> IDBI Trusteeship Services Ltd. v. Hubtown Ltd. (2017) 1 SCC 568 and Mechelec Engineers v. Basic Equipment Corp. (1976).
                </li>
                <li>
                  <strong>Supreme Court Reaffirmation:</strong> B.L. Kashyap &amp; Sons Ltd. v. JMS Steels &amp; Power Corp. (2022) 3 SCC 294 on liberal grant of leave to defend.
                </li>
                <li>
                  <strong>Limitation Act, 1963:</strong> Articles 19, 28, and 55, Three-Year Limitation Period for Money Claims and Written Contracts.
                </li>
                <li>
                  <strong>Reserve Bank of India Guidelines:</strong> RBI Circular on Fair Lending Practice - Penal Charges in Loan Accounts (2024).
                </li>
                <li>
                  <strong>Bharatiya Sakshya Adhiniyam, 2023:</strong> Section 63, Admissibility of Electronic Records and Digital Bank Ledgers.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://main.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://districts.ecourts.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>eCourts Services India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/can-bank-send-you-to-civil-prison-for-loan-default-order-21-rule-37-cpc" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Civil Prison Order 21 Rule 37
                  </Link>
                  <Link href="/can-bank-file-section-420-cheating-case-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 420 Cheating Case Defense
                  </Link>
                  <Link href="/section-60-cpc-assets-property-exempt-from-bank-attachment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 60 CPC Exempt Assets
                  </Link>
                  <Link href="/garnishee-order-bank-account-freeze-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Garnishee Order Defense
                  </Link>
                  <Link href="/rbi-guidelines-on-penal-charges-in-loan-accounts" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Penal Charges Rules
                  </Link>
                  <Link href="/police-summons-for-loan-default-rights-against-illegal-interference" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Police Summons Protection
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
                  </Link>
                  <Link href="/fake-arbitration-order-ex-parte-award-challenge-under-section-34" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Order Challenge
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate
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
                Expert in civil litigation defense, Order 37 summary procedure, banking law compliance, and loan compromise negotiations with extensive courtroom experience defending retail borrowers against coercive recovery actions.
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
                  CONFIDENTIAL LEGAL SHIELD
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Facing an Order 37 CPC Court Summons?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  You have only 10 days to enter appearance and apply for leave to defend. Our senior legal team files robust pleadings, raises triable issues, and stops ex-parte decrees.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Legal Rights Now
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
                  <span>Statutory Court Defense • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>10-Day Emergency Response:</strong> Immediate appearance filing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Unconditional Leave Focus:</strong> Strong Hubtown triable grounds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ex-Parte Decree Prevention:</strong> Complete procedural protection.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>OTS Debt Resolution:</strong> Up to 75% loan settlement waivers.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice for Loan
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal notice defense &amp; reply &rarr;</span>
                </Link>

                <Link
                  href="/can-bank-send-you-to-civil-prison-for-loan-default-order-21-rule-37-cpc"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Civil Prison under Order 21 Rule 37
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Jolly George Varghese defense &rarr;</span>
                </Link>

                <Link
                  href="/section-60-cpc-assets-property-exempt-from-bank-attachment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 60 CPC Exempt Assets
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Protect assets from attachment &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
