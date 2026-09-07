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

export default function CivilSuitForRecoveryOfMoneyByBankClient() {
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
    { id: 'quick-crux', label: 'Executive Summary' },
    { id: 'debt-economics-civil-suits', label: '1. Debt Economics & Civil Suits' },
    { id: 'financial-breakdown-claim-math', label: '2. Claim Math & Settlement Relief' },
    { id: 'legal-forum-comparison-matrix', label: '3. Civil Suits vs Legal Forums' },
    { id: 'cibil-algorithm-credit-restoration', label: '4. CIBIL Impact & Credit Repair' },
    { id: 'infographic-overview', label: 'Visual 6-Step Defense Blueprint' },
    { id: 'step-by-step-civil-defense-sop', label: '5. 6-Stage Defense SOP' },
    { id: 'statutory-notice-defense-rights', label: '6. Order 37 & Limitation Defenses' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance Redressal' },
    { id: 'chronological-milestones-timeline', label: '8. Chronological Lawsuit Milestones' },
    { id: 'specialized-civil-scenarios', label: '9. Specialized Default Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authority' }
  ];

  const faqs = [
    {
      q: 'What is a civil suit for recovery of money by a bank under Order 37 CPC?',
      a: 'A civil recovery suit under Order 37 of the Code of Civil Procedure (CPC), 1908 is an expedited summary legal proceeding instituted by a bank or financial institution to recover liquidated contractual debts, unpaid loan balances, or credit card dues without undergoing a protracted regular civil trial.'
    },
    {
      q: 'What is the strict 10-day timeline to enter an appearance in an Order 37 summary suit?',
      a: 'Upon service of the initial Order 37 summons in Form 4, the defendant borrower has strictly 10 days to file a formal Memo of Appearance in court. If the borrower fails to enter appearance within this 10-day window, the court deems the bank\'s claims admitted and passes an immediate ex-parte decree.'
    },
    {
      q: 'What is an Application for Leave to Defend and when must it be filed?',
      a: 'After the borrower enters appearance, the bank serves a Summons for Judgment in Form 4A. Under Order 37 Rule 3(5) CPC, the borrower must file an Application for Leave to Defend supported by an affidavit within strictly 10 days, establishing triable issues, dispute on interest, or bona fide defense.'
    },
    {
      q: 'What constitutes a valid triable issue to secure unconditional leave to defend?',
      a: 'Under the landmark Supreme Court ruling in IDBI Trusteeship Services Ltd. v. Hubtown Ltd., unconditional leave is granted if the defendant raises substantial, plausible, or triable legal issues such as unauthorized interest compounding, time-barred debt, disputed account entries, or contractual breach by the lender.'
    },
    {
      q: 'What is the statutory limitation period for a bank to file a civil recovery suit?',
      a: 'Under Article 19 and 21 of the Limitation Act, 1963, the statutory limitation period for a bank to file a civil money recovery suit is strictly 3 years from the date of loan default, cause of action, or the last acknowledged payment in writing under Section 18.'
    },
    {
      q: 'Can the civil court attach my salary, home, or personal assets in a money recovery suit?',
      a: 'The court can only order attachment after decree or under Section 60 CPC during execution. However, Section 60 explicitly exempts essential dwelling houses, mandatory salary portions, pensions, Provident Fund (PF), and basic household necessities from judicial attachment.'
    },
    {
      q: 'Can a borrower go to jail or face arrest in a bank civil recovery suit?',
      a: 'No. Defaulting on an unsecured personal loan or credit card is strictly a civil dispute. Civil courts cannot order arrest or imprisonment for genuine inability to pay debt. Civil detention under Section 51 CPC applies solely if a borrower willfully conceals substantial assets to defraud court decrees.'
    },
    {
      q: 'Can a civil suit for loan recovery be settled through a compromise One-Time Settlement (OTS)?',
      a: 'Yes. At any stage before final judgment, the borrower and bank can negotiate an out-of-court compromise One-Time Settlement (OTS) with a 40% to 60% waiver. Once terms are executed, the parties file a joint compromise memo under Order 23 Rule 3 CPC to formally close the case.'
    },
    {
      q: 'What happens if a borrower fails to respond to an Order 37 civil suit summons?',
      a: 'If the borrower ignores the summons or misses the 10-day appearance deadline, the court passes an ex-parte summary judgment under Order 37 Rule 2(3) CPC. The bank obtains an execution decree to issue garnishee orders against bank accounts or non-exempt assets.'
    },
    {
      q: 'How does settling an Order 37 bank civil recovery suit impact my CIBIL credit score?',
      a: 'Following execution of the compromise settlement and issuance of a No Dues Certificate, the bank files a satisfaction of decree and updates credit bureaus to "Settled" or "Closed" under Section 21 of CICRA, 2005, halting active delinquency and permitting credit rebuilding over 18 to 24 months.'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-blue-100 mb-4 border border-white/15">
            <Scale className="w-3.5 h-3.5 text-blue-200" />
            <span>Order 37 Code of Civil Procedure 1908 • Summary Debt Recovery Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Civil Suit for Recovery of Money by Bank: Order 37 CPC Defense
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Has your bank instituted a summary civil recovery suit under Order 37 CPC for an unpaid loan or credit card? Learn your 10-day timeline to file an appearance and Leave to Defend, contest inflated penal claims, protect personal assets, and secure a 40% to 60% compromise settlement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Draft a Reply to a Civil Suit</span>
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
                  <span>Order 37 Judicial Safeguards</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed under the Code of Civil Procedure 1908 and Supreme Court Precedents.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: CIVIL RECOVERY SUIT &amp; ORDER 37 DEFENSE CRUX</span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Summary Procedure:</strong> Order 37 CPC provides an expedited forum for banks to fast-track liquidated debt recovery without full trials.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">10-Day Memo of Appearance:</strong> Borrowers must file Form 4 within 10 days of summons service to prevent ex-parte default decrees.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">10-Day Leave to Defend:</strong> Upon receiving Summons for Judgment (Form 4A), a comprehensive defense affidavit must be filed within 10 days.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Triable Issues Entitle Leave:</strong> Establishing bona fide accounting disputes or penal compounding secures unconditional leave under Hubtown jurisprudence.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">3-Year Limitation Bar:</strong> Recovery claims filed beyond 3 years from default or the last written acknowledgment are barred under Limitation Act.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Zero Arrest Risk:</strong> Unsecured loan default is purely a civil dispute; civil courts cannot arrest or jail borrowers for honest insolvency.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Section 60 Asset Exemption:</strong> Primary residential homes, essential clothing, tools of trade, and pensions are legally exempt from attachment.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Bilateral 40% to 60% OTS:</strong> Timely legal defense creates commercial leverage to negotiate a formal compromise settlement under Order 23 Rule 3.
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 1: Debt Economics & Delinquency Cycle */}
            <section id="debt-economics-civil-suits" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Framework &amp; Banking Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics: Bank Civil Suits &amp; Delinquency Cycle
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  When financial hardships like corporate layoffs, business losses, or medical crises disrupt cash flows, unsecured credit facilities like personal loans and credit cards enter default. Under RBI prudential guidelines, unpaid loans transition across Special Mention Accounts: SMA-0 (1–30 days overdue), SMA-1 (31–60 days), and SMA-2 (61–90 days). Beyond 90 days, the lender statutorily classifies the loan as a Non-Performing Asset (NPA), triggering heavy Tier-1 capital provisioning requirements.
                </p>
                <p>
                  For unsecured loan balances under ₹20 Lakhs, lenders cannot approach the Debt Recovery Tribunal (DRT). Since no physical asset is hypothecated or mortgaged, the drastic property seizure powers under Section 13(4) of the SARFAESI Act are also unavailable. To recover dues, banks file summary civil suits under Order 37 CPC rather than ordinary suits under Order 7, seeking to obtain quick money decrees by curtailing the borrower&apos;s right to defend unless leave is granted.
                </p>
                <p>
                  For the borrower, this summary framework requires swift procedural action. Entering a timely appearance and raising substantial legal defenses blocks immediate summary judgments, forcing the bank&apos;s stressed asset cell to negotiate a realistic compromise One-Time Settlement (OTS).
                </p>
              </div>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-claim-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis &amp; Settlement Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Principal vs Inflated Bank Claims
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  A frequent issue in bank recovery suits is the massive inflation of demand amounts. Once an account defaults, banking software automatically layers compounded penal interest, late payment penalties, bounce charges, and litigation fees on top of regular interest. Over 12 to 24 months, these unapproved charges often inflate the claimed amount by 45% to 75% above the true principal outstanding.
                </p>
                <p>
                  Indian contract jurisprudence strictly prohibits capitalizing penal interest into principal balances. The audit below breaks down a representative ₹15 Lakhs unsecured personal loan default, showing how arbitrary compounding inflates bank claims and illustrating the achievable compromise settlement range:
                </p>

                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    Representative Financial Breakdown &amp; Compromise Target
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Sanctioned Loan Amount:</span>
                        <span className="font-bold text-slate-900">₹15,00,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Principal Balance at Default:</span>
                        <span className="font-bold text-slate-900">₹12,40,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Contractual Interest (15% p.a.):</span>
                        <span className="font-bold text-slate-900">₹3,72,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Compounded Penal Surcharges (24% p.a.):</span>
                        <span className="font-bold text-red-600">₹4,85,000</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Legal, Court Fees &amp; Misc Levies:</span>
                        <span className="font-bold text-slate-900">₹83,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Total Bank Civil Suit Demand:</span>
                        <span className="font-bold text-red-700">₹21,80,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100 bg-blue-50/60 px-2 rounded-md">
                        <span className="font-semibold text-blue-900">Realistic Compromise OTS Target:</span>
                        <span className="font-extrabold text-[#1886ff]">₹6,50,000 – ₹8,50,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100 bg-emerald-50/60 px-2 rounded-md">
                        <span className="font-semibold text-emerald-900">Achievable Borrower Debt Relief:</span>
                        <span className="font-extrabold text-emerald-700">55% to 65% Total Waiver</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 italic">
                    Note: Compromise settlements are structured upon verified hardship and legal challenges against penal compounding. Settlement amounts are payable directly to the bank against a formal sanction letter.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="legal-forum-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Legal Forum Matrix: Civil Suits vs Other Debt Forums
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  Institutional lenders choose recovery avenues based on loan size, security, and contractual terms. Understanding how Order 37 summary suits compare to ordinary suits, DRT proceedings, arbitration, and Lok Adalats helps borrowers select the right legal strategy:
                </p>

                <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                  <table className="w-full text-left text-xs md:text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                      <tr>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Recovery Forum</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Pecuniary Range</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Governing Law</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Arrest Powers</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Appeal Mechanism</th>
                        <th className="p-3.5 font-bold text-[#1886ff]">Key Defense Strategy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Summary Civil Suit (Order 37 CPC)</td>
                        <td className="p-3.5 border-r border-slate-200/80 font-semibold text-slate-800">Below ₹20 Lakhs</td>
                        <td className="p-3.5 border-r border-slate-200/80">CPC, 1908</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-emerald-700 font-semibold">NO (Money Recovery)</td>
                        <td className="p-3.5 border-r border-slate-200/80">Regular First Appeal (RFA) to District / High Court</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">File 10-day Appearance &amp; Leave to Defend establishing triable issues</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Regular Money Suit (Order 7 CPC)</td>
                        <td className="p-3.5 border-r border-slate-200/80">Any Jurisdiction</td>
                        <td className="p-3.5 border-r border-slate-200/80">CPC, 1908</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-emerald-700 font-semibold">NO (Civil Remedy)</td>
                        <td className="p-3.5 border-r border-slate-200/80">First Appeal (Sec 96 CPC)</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">File 30-day Written Statement, dispute ledgers &amp; examine bank witnesses</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Debt Recovery Tribunal (DRT)</td>
                        <td className="p-3.5 border-r border-slate-200/80 font-semibold text-slate-800">₹20 Lakhs &amp; Above</td>
                        <td className="p-3.5 border-r border-slate-200/80">RDB Act, 1993</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-emerald-700 font-semibold">NO (Special Tribunal)</td>
                        <td className="p-3.5 border-r border-slate-200/80">DRAT (Sec 20) with 25%-50% Pre-deposit</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">File Section 19(5) WS, contest penal interest &amp; negotiate compromise OTS</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Arbitration Tribunal</td>
                        <td className="p-3.5 border-r border-slate-200/80">Contractual Value</td>
                        <td className="p-3.5 border-r border-slate-200/80">Arbitration Act, 1996</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-emerald-700 font-semibold">NO (Private Forum)</td>
                        <td className="p-3.5 border-r border-slate-200/80">Section 34 Petition in Civil Court</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Challenge unilateral arbitrator appointment under Perkins Eastman precedent</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">National Lok Adalat</td>
                        <td className="p-3.5 border-r border-slate-200/80">Consensual Settlement</td>
                        <td className="p-3.5 border-r border-slate-200/80">Legal Services Act, 1987</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-emerald-700 font-semibold">NO (Pure Conciliation)</td>
                        <td className="p-3.5 border-r border-slate-200/80">Non-Appealable (Final Consent Award)</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Execute mutually agreed OTS with full waiver of penal interest</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Inaction / Missing 10-Day Window</td>
                        <td className="p-3.5 border-r border-slate-200/80">N/A</td>
                        <td className="p-3.5 border-r border-slate-200/80">Ex-Parte Decree</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-amber-700 font-semibold">Account Garnishee Risk</td>
                        <td className="p-3.5 border-r border-slate-200/80">Order 37 Rule 4 Set-Aside Petition</td>
                        <td className="p-3.5 text-red-700 font-semibold">Results in immediate money decree and execution against bank accounts</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-credit-restoration" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Architecture &amp; Scoring Trajectory</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Algorithm: Credit Score Trajectory &amp; Repair
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  When a bank files a civil suit, it reports the litigation to all four licensed credit bureaus: TransUnion CIBIL, Equifax, Experian, and CRIF High Mark. Credit scores are computed across five core parameters: payment history (35%), credit utilization (30%), credit history length (15%), credit mix (10%), and new inquiries (10%).
                </p>
                <p>
                  Defaulting past 90 DPD drops scores by 100 to 180 points. Crucially, a &quot;Suit Filed&quot; remark creates an immediate institutional block across Indian lenders, preventing approvals for fresh personal, home, or business credit.
                </p>
                <p>
                  Resolving the suit through a compromise OTS resolves this freeze. Under Section 21 of CICRA 2005, the lender must update credit bureaus to &quot;Settled&quot; or &quot;Closed&quot; within 30 days of receiving settlement funds and issuing an NOC. This stops negative DPD reporting and allows borrowers to rebuild credit scores back to 750+ over 18 to 24 months.
                </p>
              </div>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Blueprint: 6-Step Order 37 CPC Defense Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Review the procedural roadmap below detailing the step-by-step defense sequence under Order 37 CPC, from initial summons receipt to decree disposal and credit restoration:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/civil-suit-for-recovery-of-money-by-bank.jpg"
                    alt="6-Step Order 37 CPC Civil Recovery Suit Legal Defense Workflow Diagram India"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Architecture • Code of Civil Procedure 1908</span>
                  <a
                    href="/images/infographics/civil-suit-for-recovery-of-money-by-bank.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>View High-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: 6-Stage Standard Operating Procedure (SOP) */}
            <section id="step-by-step-civil-defense-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP: 6-Stage Civil Suit Defense Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Handling an Order 37 summary suit requires strict adherence to statutory deadlines and procedural precision. Follow this 6-stage operational protocol:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 1–5</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Summons Audit &amp; Service Verification
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Verify the Order 37 Form 4 summons and delivery date to start the 10-day appearance clock. Audit the plaint annexures and account statements under the Bankers Books Evidence Act for interest compounding errors.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 6–10</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Filing Mandatory Memo of Appearance (Form 4)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    File a formal Memo of Appearance under Order 37 Rule 3(1) CPC within 10 days of service. Serve a copy on bank counsel to formally notify the court and prevent an ex-parte money decree.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 11–20</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Examination of Summons for Judgment (Form 4A)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Upon receiving the bank&apos;s Form 4A Summons for Judgment and affidavit, evaluate whether procedural mandates are met. Identify flaws like unliquidated damages, time-barred claims, or missing loan agreements.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 21–30</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Filing Leave to Defend Application &amp; Affidavit
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    File an Application for Leave to Defend with supporting affidavit under Order 37 Rule 3(5) CPC within 10 days of Form 4A. Raise triable issues under the Hubtown ruling to secure unconditional leave.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 31–60</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Bilateral Compromise Settlement Negotiations
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Use legal defenses and accounting disputes to engage the bank&apos;s Stressed Asset Resolution Committee. Negotiate an affordable compromise OTS with a 40% to 60% waiver formalized in an official sanction letter.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 61–90</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Joint Compromise Decree, Case Withdrawal &amp; NDC
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    File a joint compromise petition under Order 23 Rule 3 CPC upon paying settlement funds. The court disposes of the suit as satisfied, followed by issuance of a No Dues Certificate and credit bureau closure.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights under CPC */}
            <section id="statutory-notice-defense-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Jurisprudence &amp; Defense Grid</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense: Order 37 &amp; Limitation Rights
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  A robust defense against a summary recovery suit is grounded in statutory procedural safeguards under the CPC, Limitation Act, and Supreme Court rulings across four key pillars:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                      <Gavel className="w-4 h-4" />
                      <span>Order 37 Rule 3 CPC Leave to Defend</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      In IDBI Trusteeship Services Ltd. v. Hubtown Ltd. (2017), the Supreme Court established that when a defendant raises plausible, triable issues regarding debt calculations, the court must grant unconditional leave to defend.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                      <Clock className="w-4 h-4" />
                      <span>Limitation Act 1963 (Articles 19 &amp; 21)</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Banks must file recovery suits within strictly 3 years from the date of default. Without a written acknowledgment under Section 18 within this 3-year window, the claim is legally time-barred and must be dismissed.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                      <Scale className="w-4 h-4" />
                      <span>Section 34 CPC Interest Discretion</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under Section 34 CPC and Central Bank of India v. Ravindra (2002), courts hold broad discretion over interest rates and cannot permit compounding of penal charges, enabling borrowers to dispute inflated demands.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Section 60 CPC Asset Protection</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Section 60 CPC protects primary residential dwellings, essential household items, trade tools, mandatory salary portions, and Provident Fund balances from judicial attachment during execution.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Grievance Redressal Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Redressal Mechanisms</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Escalation Matrix: Institutional Redressal
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  Borrowers facing unreasonable recovery litigation or agent misconduct can escalate through a structured 3-tier grievance framework:
                </p>

                <div className="space-y-3 pt-1">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                        Level 1: Bank Legal Cell &amp; PNO
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">Turnaround: 7–10 Days</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Internal Representation &amp; Stressed Asset Committee
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Submit a formal legal representation to the bank&apos;s Principal Nodal Officer highlighting ledger errors and financial hardship, seeking reference to the Stressed Asset Resolution Committee for an OTS.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                        Level 2: Court-Annexed Mediation &amp; Lok Adalat
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">Turnaround: 14–21 Days</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Section 89 CPC Alternative Dispute Resolution
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Apply under Section 89 CPC to refer the recovery suit to court-annexed mediation or National Lok Adalat for neutral conciliation and significant compound interest waivers.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                        Level 3: RBI Integrated Ombudsman
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">Turnaround: 30 Days</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Complaint on CMS Portal (cms.rbi.org.in)
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Lodge a formal complaint on the RBI CMS portal if the lender employs abusive recovery tactics, contacts third-party references, or denies certified account statements.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Procedural Milestones Table */}
            <section id="chronological-milestones-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Chronological Milestones: Summons to Final Decree
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  Tracking the chronological timeline of an Order 37 summary recovery suit ensures timely defense filings and effective settlement positioning:
                </p>

                <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                  <table className="w-full text-left text-xs md:text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                      <tr>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Procedural Phase</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Judicial Milestone</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Statutory Limitation</th>
                        <th className="p-3.5 font-bold text-[#1886ff]">Strategic Borrower Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Day 1</td>
                        <td className="p-3.5 border-r border-slate-200/80">Service of Order 37 Form 4 Summons</td>
                        <td className="p-3.5 border-r border-slate-200/80">Date of registered post delivery</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Preserve postal envelope, audit loan ledger &amp; consult legal experts</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Days 1–10</td>
                        <td className="p-3.5 border-r border-slate-200/80">Filing Memo of Appearance in Form 4</td>
                        <td className="p-3.5 border-r border-slate-200/80">Strictly 10 days from service</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Enter court appearance and serve formal notice on bank counsel</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Days 15–25</td>
                        <td className="p-3.5 border-r border-slate-200/80">Service of Summons for Judgment (Form 4A)</td>
                        <td className="p-3.5 border-r border-slate-200/80">Bank procedural trigger</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Audit bank affidavit, detect accounting errors &amp; time-bar flaws</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Days 25–35</td>
                        <td className="p-3.5 border-r border-slate-200/80">Filing Leave to Defend Affidavit</td>
                        <td className="p-3.5 border-r border-slate-200/80">Strictly 10 days from Form 4A</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Submit comprehensive defense affidavit establishing triable issues</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Months 2–3</td>
                        <td className="p-3.5 border-r border-slate-200/80">Compromise Settlement &amp; Mediation Window</td>
                        <td className="p-3.5 border-r border-slate-200/80">Pre-decree discussion phase</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Negotiate 40% to 60% OTS waiver with Bank Zonal Resolution Cell</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Months 3–4</td>
                        <td className="p-3.5 border-r border-slate-200/80">Joint Compromise Decree &amp; Suit Disposal</td>
                        <td className="p-3.5 border-r border-slate-200/80">Order 23 Rule 3 disposal</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Remit settlement funds, obtain NDC &amp; verify credit bureau update</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-civil-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Civil Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: High-Exposure Recovery Suits
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  Bank recovery suits often intersect with complex employment, card debt, and assignment scenarios. Understanding these variations helps borrowers formulate precise defenses:
                </p>

                <div className="space-y-3 pt-1">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[#1886ff]" />
                      Unsecured Personal Loans Under ₹20 Lakhs
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Salaried professionals facing income loss who defaulted on unsecured loans (₹5L to ₹19L) receive Order 37 summons. With DRT and SARFAESI unavailable, demonstrating financial hardship and interest errors incentivizes banks to approve structured compromise settlements.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-[#1886ff]" />
                      Credit Card Civil Recovery Suits
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Card balances subject to 42% to 48% annual charges can be contested in the Leave to Defend affidavit under Section 34 CPC and the Usurious Loans Act, forcing issuers to reduce claims to actual principal spent.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-[#1886ff]" />
                      Guarantor Liability in Civil Suits
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Personal guarantors impleaded in recovery suits possess distinct legal protections under Sections 133 to 141 of the Indian Contract Act regarding contract variances or creditor negligence.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#1886ff]" />
                      Debt Assigned to ARCs
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      When bad loans are assigned to ARCs under Section 5 SARFAESI, ARCs substitute themselves under Order 22 Rule 10 CPC. Because ARCs acquire portfolios at 70% to 80% discounts, they readily accept discounted settlements.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: Frequently Asked Questions Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Bank Civil Recovery Suits
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to explore authoritative legal answers verified by our banking compliance and debt resolution professionals:
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#1886ff] transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
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
                <span>Official Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Statutory References &amp; Official Regulatory Citations
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Code of Civil Procedure, 1908:</strong> Order 37 Rules 1–7 (Summary Procedure), Section 34 (Interest), Section 60 (Exemptions), Order 23 Rule 3 (Compromise).
                </li>
                <li>
                  <strong>Limitation Act, 1963:</strong> Articles 19 &amp; 21 (3-Year Limitation Period), Section 18 (Acknowledgment of Debt).
                </li>
                <li>
                  <strong>Supreme Court Precedents:</strong> <em>IDBI Trusteeship Services Ltd. v. Hubtown Ltd. (2017) 1 SCC 568</em> (Leave to Defend) &amp; <em>Central Bank of India v. Ravindra (2002) 1 SCC 367</em> (Compound Penal Interest).
                </li>
                <li>
                  <strong>RBI Master Directions:</strong> Fair Practices Code for Lenders, Grievance Redressal, and NPA Prudential Norms (Updated 2026).
                </li>
                <li>
                  <strong>CICRA, 2005:</strong> Section 21 (Mandatory Accuracy, Dispute Resolution, and Bureau Reporting Post-Settlement).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Outbound Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>Reserve Bank of India (rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>RBI Complaint Portal (cms.rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>TransUnion CIBIL (cibil.com)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>India Code Statutory Repository (indiacode.nic.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>National Legal Services Authority (nalsa.gov.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>National Cyber Crime Portal (cybercrime.gov.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/drt-notice-for-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    DRT Notice Defense
                  </Link>
                  <Link href="/bank-recovery-case-in-court" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Court Recovery Cases
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Protection
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
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
                Specialized in civil court debt recovery litigation, Order 37 summary suit defense, Leave to Defend affidavits, banking compliance, and high-value loan compromise settlements across Indian civil courts.
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

            {/* Card 2: Emergency CTA Card */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL CIVIL SUIT DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Filed a Civil Recovery Suit?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal specialists draft your 10-day Memo of Appearance, file your Leave to Defend affidavit, dispute penal charges, and negotiate a 40% to 60% settlement.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Draft a Reply to a Civil Suit
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
                  <span>Direct Bank Settlement • RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Settlement Risk:</strong> Success-linked settlement fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> No third-party escrow or holding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CPC &amp; RBI Compliance:</strong> 100% lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Civil Defense:</strong> Expert advocates &amp; financial negotiators.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice for Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full step-by-step reply blueprint &rarr;</span>
                </Link>

                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Arbitration Notice for Personal Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Perkins Eastman defense blueprint &rarr;</span>
                </Link>

                <Link
                  href="/drt-notice-for-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    DRT Notice for Personal Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Section 19 Written Statement defense &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
