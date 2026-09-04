'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import {
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
  Lock,
  Phone,
  AlertCircle,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  ShieldAlert,
  ChevronDown
} from 'lucide-react';

export default function SbiPersonalLoanSettlementProcessClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Crux' },
    { id: 'debt-economics', label: '1. SBI NPA & SARB Dynamics' },
    { id: 'settlement-math', label: '2. Ledger Math & Settlement Calculation' },
    { id: 'comparison-matrix', label: '3. Resolution Comparison Matrix' },
    { id: 'cibil-dynamics', label: '4. CIBIL Algorithm & Section 21 CICRA' },
    { id: 'infographic-overview', label: '5. Visual 6-Stage Process Blueprint' },
    { id: 'six-stage-sop', label: '6. 6-Stage Institutional Settlement SOP' },
    { id: 'statutory-defense', label: '7. Statutory Notice Defense & Rights' },
    { id: 'grievance-matrix', label: '8. 3-Tier Escalation Architecture' },
    { id: 'chronological-milestones', label: '9. Procedural Timeline & Milestones' },
    { id: 'specialized-scenarios', label: '10. Real-World SBI Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-citations', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is the SBI personal loan settlement process and when does State Bank of India agree to an OTS?',
      a: 'The SBI personal loan settlement process is an institutional compromise mechanism governed by SBI Stressed Assets Resolution Policy and RBI guidelines. SBI considers a One-Time Settlement (OTS) when an unsecured personal loan (such as Xpress Credit or Quick Personal Loan) has been classified as a Non-Performing Asset (NPA) past 90 days, and the borrower establishes genuine, verifiable financial hardship such as job loss, severe medical emergency, or business insolvency.'
    },
    {
      q: 'What is an SBI Stressed Assets Recovery Branch (SARB) and why was my loan transferred there?',
      a: 'A Stressed Assets Recovery Branch (SARB) or Stressed Assets Resolution Centre (SARC) is a specialized SBI branch dedicated exclusively to recovering and resolving non-performing accounts. When a personal loan remains in default for over 120 to 180 days (reaching SMA-2 or Doubtful-1 status), the home branch transfers the recovery ledger to SARB. SARB officers, led by Assistant General Managers (AGMs) or Chief Managers, possess dedicated discretionary authority to evaluate and approve compromise settlement proposals.'
    },
    {
      q: 'What is the SBI Rinn Samadhan scheme and how does it benefit personal loan borrowers?',
      a: 'The SBI Rinn Samadhan Scheme is a recurring, non-discretionary One-Time Settlement (OTS) framework periodically rolled out by State Bank of India to resolve legacy retail NPAs. Under Rinn Samadhan, eligible borrowers receive a 100% waiver of accumulated penal interest, overdue compounding charges, and legal expenses, alongside substantial pre-approved concessions of 30% to 50% on the outstanding real principal balance.'
    },
    {
      q: 'How much waiver or discount can I negotiate on an SBI personal loan settlement?',
      a: 'Borrowers typically secure a 100% complete waiver on all accumulated penal interest, bounce fees, and accrued late charges. On the core principal balance, SBI settlement discounts typically range from 40% to 60%, depending on the age of the NPA classification, the absence of attachable assets, and the strength of the documented hardship dossier submitted to the Credit Committee.'
    },
    {
      q: 'Can SBI file a criminal case under Section 138 or Section 25 for personal loan default?',
      a: 'Pure loan default is strictly a civil dispute. However, if post-dated security cheques or NACH auto-debit mandates bounce due to insufficient funds, SBI panel advocates frequently issue statutory legal notices under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act. Borrowers must reply through a legal professional within 15 days to place bona fide hardship on record and prevent magistrate court summons.'
    },
    {
      q: 'Can SBI attach my salary account or seize property for an unsecured personal loan?',
      a: "Unsecured personal loans like SBI Xpress Credit do not carry a mortgage or hypothecated collateral, meaning SBI cannot invoke the SARFAESI Act to seize residential property without a court order. However, if you maintain an active savings or salary account within SBI, the bank may exercise its common law Banker's Right of Lien and Set-Off to debit funds, which is why financial advisors recommend managing operational liquidity appropriately during dispute resolution."
    },
    {
      q: 'How does settling an SBI personal loan through National Lok Adalat work?',
      a: 'State Bank of India regularly refers chronic retail defaults to National Lok Adalat benches organized by DLSA/NALSA. In Lok Adalat, an authorized SBI recovery official negotiates directly before a judicial conciliator. Once a mutually agreeable discounted figure is reached, the bench passes a formal Consent Award under Section 21 of the Legal Services Authorities Act, 1987, which operates as a final, non-appealable civil court decree.'
    },
    {
      q: 'How does an SBI personal loan settlement affect my CIBIL score and credit report?',
      a: 'Upon settlement remittance, SBI updates the credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) reporting the account as "Settled" or "Post-Write-off Settled" with a zero balance. While this remark initially depresses the score, it halts escalating Days Past Due (DPD) counts. Borrowers can gradually rehabilitate their credit score back to 750+ over 18 to 24 months using secured credit builder instruments.'
    },
    {
      q: 'What is an official SBI No Dues Certificate (NDC) and how do I verify its authenticity?',
      a: 'An authentic SBI No Dues Certificate (NDC) is an official discharge document issued on State Bank of India letterhead, bearing the branch seal, unique reference number, and signature of the authorized Chief Manager or AGM. It explicitly declares that the specific loan account has been closed under OTS with zero outstanding liability. Borrowers must verify that the loan account number and zero balance reflect in SBI Core Banking Solutions (CBS).'
    },
    {
      q: 'How long does the entire SBI personal loan settlement process take from start to finish?',
      a: 'The complete institutional process typically spans 45 to 90 days. The timeline encompasses account forensic audit (7-10 days), hardship dossier preparation and submission to SARB or AGM (10-15 days), Credit Committee evaluation and bilateral negotiations (15-30 days), sanction letter vetting, payment remittance, and final CBS closure along with NDC issuance (15-20 days).'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 text-xs font-semibold mb-4 tracking-wide uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
            <span>Official SBI Debt Resolution Directive 2026</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            SBI Personal Loan Settlement Process
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Navigating an overdue State Bank of India personal loan requires understanding institutional hierarchies, internal credit mandates, and statutory protections. Learn how to transition from aggressive recovery agency calls to formal Stressed Assets Recovery Branch negotiations, secure 40% to 60% principal waivers through SBI Rinn Samadhan or Lok Adalat schemes, and obtain a legally binding No Dues Certificate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Facing SBI Recovery or Notice? Speak to a Settlement Expert</span>
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
                  <span>Institutional Resolution</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Structured under SBI Stressed Assets Policy and RBI Prudential Norms.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Summary Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: SBI PERSONAL LOAN SETTLEMENT CRUX</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-normal">
                <li className="flex items-start sm:items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5 sm:mt-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Institutional SARB Escalation:</strong> Chronic defaults (90+ days) transfer from retail branches to SARB for compromise review.
                  </div>
                </li>

                <li className="flex items-start sm:items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5 sm:mt-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">100% Penal Interest Waiver:</strong> Official OTS approvals completely eliminate all penal interest, bounce charges, and late fees.
                  </div>
                </li>

                <li className="flex items-start sm:items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5 sm:mt-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">40% to 60% Principal Haircut:</strong> Hardship dossiers enable distressed borrowers to settle the core balance at a 40% to 60% discount.
                  </div>
                </li>

                <li className="flex items-start sm:items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5 sm:mt-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">SBI Rinn Samadhan Windows:</strong> SBI periodic OTS circulars deliver pre-approved settlement concessions for retail NPAs.
                  </div>
                </li>

                <li className="flex items-start sm:items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5 sm:mt-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">National Lok Adalat Decrees:</strong> Quarterly conciliation benches issue binding, non-appealable civil awards under Section 21.
                  </div>
                </li>

                <li className="flex items-start sm:items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5 sm:mt-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Criminal Threat Defense:</strong> Legal replies to Section 138 and Section 25 notices immediately stop coercive recovery threats.
                  </div>
                </li>

                <li className="flex items-start sm:items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5 sm:mt-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Banker&apos;s Lien Protection:</strong> Isolating operational accounts prevents SBI from debiting funds under common law set-off.
                  </div>
                </li>

                <li className="flex items-start sm:items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5 sm:mt-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Official CBS No Dues Certificate:</strong> Legal closure requires an authorized AGM sanction letter and zero CBS balance.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="debt-economics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Credit Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics &amp; SBI Stressed Assets Architecture
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                State Bank of India operates India&apos;s largest retail credit book, with personal loan products like SBI Xpress Credit, Pension Loans, and Quick Personal Loans serving millions of salaried executives and pensioners. However, when sudden life disruptions strike, such as catastrophic healthcare events, sudden corporate downsizing, or business liquidation, borrowers face an institutional recovery machine that escalates rapidly. Under the Reserve Bank of India Master Circular on Prudential Norms on Advances, an unpaid loan advances through Special Mention Account stages: SMA-0 (1 to 30 days overdue), SMA-1 (31 to 60 days overdue), and SMA-2 (61 to 90 days overdue).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Upon crossing 90 days of continuous non-servicing, the account is classified as a Non-Performing Asset (NPA). For SBI, an unsecured NPA triggers substantial Tier-1 capital provisioning requirements, compelling the bank to set aside 15% to 25% of the exposure against its balance sheet reserves. Because unsecured personal loans lack mortgageable collateral enforceable under the SARFAESI Act, SBI&apos;s legal options are limited to lengthy civil litigation. Consequently, transferring chronic defaults to the Stressed Assets Recovery Branch (SARB) or Stressed Assets Resolution Centre (SARC) creates a powerful commercial incentive for the bank to accept an amicable One-Time Settlement rather than carry dead asset weight.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis &amp; Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown &amp; Representative Settlement Ledger Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an SBI personal loan defaults, the bank&apos;s automated Core Banking Solution (CBS) begins compounding uncollected interest, levying penal charges at 2% per month, and tacking on recovery administrative costs. Within 12 to 18 months, an original principal balance of ₹10,00,000 routinely inflates into a nominal claim exceeding ₹14,50,000. This artificial ledger inflation creates acute borrower panic, yet it represents the key leverage point during professional bilateral negotiations.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During formal compromise deliberations, settlement counsel isolates the core outstanding principal from ledger penalties. SBI internal recovery circulars empower competent authorities, ranging from Assistant General Managers (AGMs) to Deputy General Managers (DGMs), to sacrifice 100% of accumulated penal charges and concede a 40% to 55% haircut on the real principal. The breakdown below demonstrates how a representative ₹10 Lakhs SBI default is resolved in practice:
              </p>

              {/* Representative Calculation Card */}
              <div className="bg-white rounded-2xl border border-blue-200/80 p-5 sm:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700">
                    Representative SBI Personal Loan Settlement Baseline
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-50 text-[#1886ff]">
                    180-Day NPA Example
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block text-xs">Original Principal Balance</span>
                    <strong className="text-base text-slate-900 font-extrabold">₹10,00,000</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block text-xs">Penal Charges &amp; Interest</span>
                    <strong className="text-base text-rose-600 font-extrabold">+₹4,50,000</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block text-xs">Nominal Claimed Balance</span>
                    <strong className="text-base text-slate-900 font-extrabold">₹14,50,000</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <span className="text-emerald-700 block text-xs font-medium">Penal Waiver (100%)</span>
                    <strong className="text-base text-emerald-700 font-extrabold">-₹4,50,000</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <span className="text-emerald-700 block text-xs font-medium">Principal Haircut (50%)</span>
                    <strong className="text-base text-emerald-700 font-extrabold">-₹5,00,000</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200">
                    <span className="text-[#1886ff] block text-xs font-bold">Final Approved OTS Figure</span>
                    <strong className="text-base text-[#1886ff] font-black">₹5,00,000</strong>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-100 gap-2">
                  <span>Net Savings Achieved: <strong className="text-emerald-600 font-bold">₹9,50,000 (65.5% Total Relief)</strong></span>
                  <span>Payment Schedule: <strong className="text-slate-800 font-semibold">1 to 3 Manageable Tranches</strong></span>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Strategic Evaluation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Institutional Dispute Resolution Pathways Compared
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers facing severe distress on SBI unsecured credit often weigh multiple legal and operational pathways. The table below outlines how an official One-Time Settlement stacks up against loan restructuring, formal court litigation, National Lok Adalat conciliation, and prolonged inaction across cost, finality, credit bureau impact, and procedural timelines.
              </p>

              {/* 4-Sided Bordered Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/90 text-slate-800 font-bold border-b border-slate-200/80 divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4 min-w-[140px]">Resolution Option</th>
                      <th className="p-3.5 md:p-4 min-w-[150px]">Financial Obligation</th>
                      <th className="p-3.5 md:p-4 min-w-[150px]">Legal Finality</th>
                      <th className="p-3.5 md:p-4 min-w-[150px]">Credit Score Impact</th>
                      <th className="p-3.5 md:p-4 min-w-[110px]">Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="hover:bg-blue-50/40 transition-colors divide-x divide-slate-200/80">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900 bg-slate-50/50">
                        SBI One-Time Settlement (OTS)
                      </td>
                      <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">
                        40% to 60% principal waiver + 100% penal interest cut
                      </td>
                      <td className="p-3.5 md:p-4">
                        Complete legal discharge with official SBI No Dues Certificate
                      </td>
                      <td className="p-3.5 md:p-4">
                        Reported as Settled; halts DPD; rebuildable within 18-24 months
                      </td>
                      <td className="p-3.5 md:p-4 font-medium text-slate-800">
                        45 to 75 days
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors divide-x divide-slate-200/80">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900 bg-slate-50/50">
                        Loan Restructuring
                      </td>
                      <td className="p-3.5 md:p-4">
                        100% principal repaid plus re-amortized compounding interest
                      </td>
                      <td className="p-3.5 md:p-4">
                        Contractual modification; full debt liability remains active
                      </td>
                      <td className="p-3.5 md:p-4">
                        Flagged as Restructured; elevated risk of secondary default
                      </td>
                      <td className="p-3.5 md:p-4 font-medium text-slate-800">
                        30 to 60 days
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors divide-x divide-slate-200/80">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900 bg-slate-50/50">
                        Civil Suit / DRT Section 19
                      </td>
                      <td className="p-3.5 md:p-4 text-rose-600 font-semibold">
                        100% claim plus court interest and advocate recovery expenses
                      </td>
                      <td className="p-3.5 md:p-4">
                        Contested adversarial decree with potential bank account attachment
                      </td>
                      <td className="p-3.5 md:p-4">
                        Suit Filed remark; severe long-term institutional credit exclusion
                      </td>
                      <td className="p-3.5 md:p-4 font-medium text-slate-800">
                        3 to 7 years
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/40 transition-colors divide-x divide-slate-200/80">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900 bg-slate-50/50">
                        National Lok Adalat Concession
                      </td>
                      <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">
                        40% to 55% principal waiver + 100% penal interest cut
                      </td>
                      <td className="p-3.5 md:p-4">
                        Non-appealable Consent Award under Section 21 of LSA Act, 1987
                      </td>
                      <td className="p-3.5 md:p-4">
                        Reported as Settled with permanent immunity against civil litigation
                      </td>
                      <td className="p-3.5 md:p-4 font-medium text-slate-800">
                        1 to 2 sessions
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors divide-x divide-slate-200/80">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900 bg-slate-50/50">
                        Inaction &amp; Default Neglect
                      </td>
                      <td className="p-3.5 md:p-4 text-rose-600 font-semibold">
                        Rapidly compounding penalties, 24% APR, and collection vendor costs
                      </td>
                      <td className="p-3.5 md:p-4">
                        Persistent Section 138 NI Act and Section 25 PSSA legal notices
                      </td>
                      <td className="p-3.5 md:p-4">
                        Continuous DPD degradation dropping score below 550 indefinitely
                      </td>
                      <td className="p-3.5 md:p-4 font-medium text-slate-800">
                        Unresolved
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Dynamics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Algorithm Scoring Math &amp; Section 21 CICRA Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the credit bureau reporting mechanics following an SBI settlement is crucial for long-term financial recovery. Credit Information Companies (TransUnion CIBIL, Equifax, Experian, CRIF High Mark) calculate scores based on five core mathematical weighting pillars: Payment History (35%), Credit Exposure and Utilization (30%), Credit History Length (15%), Credit Mix (10%), and Recent Inquiries (10%).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When SBI closes a loan under OTS, it transmits a commercial code update reporting the account status as &quot;Settled&quot; or &quot;Post-Write-off Settled&quot; with a current balance of zero. While this reporting stops the compounding accumulation of Days Past Due (DPD) that crushes credit scores month after month, the settled notation typically causes an immediate drop of 60 to 110 points. However, under Section 21 of the Credit Information Companies (Regulation) Act (CICRA), 2005, borrowers retain the legal right to ensure that their zero balance is accurately updated within 30 days. Borrowers can subsequently rehabilitate their credit score back to 750+ within 18 to 24 months by utilizing disciplined secured credit cards and asset-backed micro-facilities.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Process Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual 6-Stage Institutional Settlement Blueprint
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive infographic illustrates the sequential journey through SBI&apos;s institutional recovery hierarchy, from initial RACPC statement audit to SARB branch negotiations and final Core Banking Solution closure.
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 p-3 sm:p-4 shadow-sm space-y-3">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950">
                  <Image
                    src="/images/infographics/sbi-personal-loan-settlement-process.jpg"
                    alt="SBI Personal Loan Settlement Process 6-Stage Blueprint"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-2 text-xs text-slate-500">
                  <span>Official CredSettle Institutional Debt Settlement Blueprint</span>
                  <a
                    href="/images/infographics/sbi-personal-loan-settlement-process.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#1886ff] font-semibold hover:underline"
                  >
                    <span>View High-Resolution Image</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="six-stage-sop" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Navigating SBI Settlement in 6 Stages
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Executing a compromise settlement with India&apos;s largest public sector bank requires meticulous adherence to administrative protocol. Our structured 6-stage SOP ensures legal defense, audit baseline accuracy, and authoritative Credit Committee approvals.
              </p>

              <div className="space-y-4">
                {/* Stage 1 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#1886ff] uppercase tracking-wider">
                      Stage 1: Forensic RACPC Ledger Audit
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1886ff]">
                      Days 1 to 10
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Specialists audit the SBI Retail Assets Central Processing Centre (RACPC) loan ledger to separate the core disbursed principal from compounded penal charges, uncollected interest, and unwarranted recovery levies, establishing the definitive non-inflated settlement baseline.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#1886ff] uppercase tracking-wider">
                      Stage 2: Comprehensive Hardship Dossier Compilation
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1886ff]">
                      Days 11 to 20
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    A legally sound financial hardship memo is prepared, aggregating concrete documentary evidence such as medical discharge summaries, termination letters, salary reduction slips, or business insolvency records to prove that default was involuntary and bona fide.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#1886ff] uppercase tracking-wider">
                      Stage 3: SARB Institutional Representation
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1886ff]">
                      Days 21 to 35
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    The file is formally presented directly to the Chief Manager or Assistant General Manager (AGM) of the assigned Stressed Assets Recovery Branch, effectively bypassing third-party collection agencies and placing the matter before competent credit authorities.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#1886ff] uppercase tracking-wider">
                      Stage 4: Strategic Bilateral &amp; OTS Negotiation
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1886ff]">
                      Days 36 to 55
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Resolution counsel negotiates across bilateral sessions or National Lok Adalat benches under SBI Rinn Samadhan circulars, systematically securing a 100% waiver of penal components and driving principal haircut concessions into the 40% to 60% bracket.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#1886ff] uppercase tracking-wider">
                      Stage 5: Sanction Letter Forensic Vetting
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1886ff]">
                      Days 56 to 65
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    The formal SBI compromise offer is scrutinized on official bank letterhead to verify branch authorization, explicit account numbers, confirmed payment tranches, and clear clauses stipulating the immediate withdrawal of pending legal proceedings upon payment.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#1886ff] uppercase tracking-wider">
                      Stage 6: Remittance, CBS Zeroing &amp; NDC Issuance
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1886ff]">
                      Days 66 to 75
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Settlement funds are remitted directly into the dedicated SBI loan account. Counsel verifies the internal ledger write-off in Core Banking Solutions and secures the official stamped No Dues Certificate alongside credit bureau updates.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Notice Defense &amp; Legal Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an SBI personal loan enters chronic default, panel advocates deploy statutory legal notices to exert psychological pressure. Understanding your statutory rights under Indian banking laws ensures you respond proactively and halt aggressive vendor tactics.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span>Section 25 PSSA (NACH Bounce Defense)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When NACH auto-debit mandates fail due to financial destitution, SBI panel advocates often issue Section 25 notices. Legal counsel responds formally within 15 days demonstrating involuntary financial distress, proving absence of fraudulent mens rea, and converting the confrontation into compromise dialogue.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <FileText className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Section 138 Negotiable Instruments Act</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    For bounced undated security cheques collected at loan disbursement, Section 138 notices demand immediate strategic legal intervention. Timely replies challenge the misuse of security cheques for indeterminate future liabilities and stay coercive criminal court filings while settlement is finalized.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Scale className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <span>Arbitration Neutralization (Perkins &amp; TRF Ltd.)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    SBI arbitration notices invoking unilateral appointments are legally defective under Supreme Court rulings in TRF Ltd. and Perkins Eastman. Legal counsel challenges the unilateral arbitrator&apos;s jurisdiction under Section 12 and Section 21 of the Arbitration Act, directing the bank back to bilateral conciliation.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <ShieldAlert className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>RBI Fair Practices &amp; SARFAESI Exemption</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under RBI Master Directions, recovery agents are strictly prohibited from calling before 8:00 AM or after 7:00 PM, visiting workplaces without consent, or harassing relatives. Furthermore, unsecured personal loans are statutorily exempt from summary property attachment under the SARFAESI Act.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="grievance-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Redressal Mechanism</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Grievance &amp; Institutional Escalation Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If SBI branch staff or assigned recovery agencies violate RBI Fair Practice codes or refuse to process legitimate hardship petitions, borrowers must escalate through State Bank of India&apos;s statutory three-tier grievance framework.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">
                    Level 1: Branch &amp; GRO
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Branch Manager &amp; Circle GRO</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Direct representation to the home branch manager and Circle Grievance Redressal Officer to log formal dispute tokens regarding incorrect ledger calculations or recovery harassment, with a statutory turnaround time of 7 to 10 working days.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">
                    Level 2: Principal Nodal Officer
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">PNO &amp; SARB AGM</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalation to the State Bank of India Local Head Office (LHO) Principal Nodal Officer and SARB Assistant General Manager for unresolved grievances or deadlock in settlement negotiations, requiring response within 14 to 21 days.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">
                    Level 3: Regulatory Ombudsman
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">RBI Integrated Ombudsman</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Filing a formal complaint on the RBI CMS portal (cms.rbi.org.in) under the Reserve Bank - Integrated Ombudsman Scheme, 2021 if the bank fails to resolve complaints or violates fair recovery practices within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Default Trajectory</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Procedural Milestones (Day 1 to Month 6)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Navigating an SBI personal loan default requires understanding the procedural timeline from initial payment bounce to SARB transfer and ultimate OTS resolution. The milestone matrix below details institutional actions and recommended legal responses.
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/90 text-slate-800 font-bold border-b border-slate-200/80 divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4 min-w-[110px]">Timeline</th>
                      <th className="p-3.5 md:p-4 min-w-[130px]">Classification</th>
                      <th className="p-3.5 md:p-4 min-w-[200px]">SBI Institutional Action</th>
                      <th className="p-3.5 md:p-4 min-w-[200px]">Strategic Borrower Response</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="hover:bg-slate-50/60 transition-colors divide-x divide-slate-200/80">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900 bg-slate-50/50">Day 1 - 30</td>
                      <td className="p-3.5 md:p-4 font-semibold text-amber-600">SMA-0 Status</td>
                      <td className="p-3.5 md:p-4">Automated SMS alerts and soft tele-reminders from branch</td>
                      <td className="p-3.5 md:p-4">Audit cash flows and assess whether hardship is temporary or systemic</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors divide-x divide-slate-200/80">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900 bg-slate-50/50">Day 31 - 90</td>
                      <td className="p-3.5 md:p-4 font-semibold text-orange-600">SMA-1 &amp; SMA-2</td>
                      <td className="p-3.5 md:p-4">Loan recall notices issued; NACH bounce re-presentment charges</td>
                      <td className="p-3.5 md:p-4">Consolidate medical, employment, or business hardship documentation</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors divide-x divide-slate-200/80">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900 bg-slate-50/50">Day 91 - 120</td>
                      <td className="p-3.5 md:p-4 font-semibold text-rose-600">NPA Classification</td>
                      <td className="p-3.5 md:p-4">Account declared Sub-Standard; external recovery agency assigned</td>
                      <td className="p-3.5 md:p-4">Issue formal cease-and-desist representation against agency harassment</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60 transition-colors divide-x divide-slate-200/80">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900 bg-slate-50/50">Day 121 - 180</td>
                      <td className="p-3.5 md:p-4 font-semibold text-purple-600">SARB Transfer</td>
                      <td className="p-3.5 md:p-4">Ledger shifted to Stressed Assets Recovery Branch under AGM mandate</td>
                      <td className="p-3.5 md:p-4">Submit structured compromise settlement proposal directly to SARB desk</td>
                    </tr>
                    <tr className="hover:bg-blue-50/40 transition-colors divide-x divide-slate-200/80">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900 bg-slate-50/50">Month 6+</td>
                      <td className="p-3.5 md:p-4 font-semibold text-emerald-700">OTS Window</td>
                      <td className="p-3.5 md:p-4">Rinn Samadhan scheme concessions or National Lok Adalat referral</td>
                      <td className="p-3.5 md:p-4">Finalize 40% to 60% haircut, remit payment, and secure official NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Case Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Real-World SBI Settlement Scenarios
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Different categories of borrowers face unique institutional pressures when settling an unsecured debt with State Bank of India. Here is how specialized circumstances are handled:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    SBI Xpress Credit for Government &amp; Defence Personnel
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Government employees and defence personnel facing salary freezes, departmental inquiries, or post-retirement income shocks can leverage service hardship documentation to secure structured OTS approvals without risking service record complications.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    Severe Healthcare Crises &amp; Permanent Disability
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Catastrophic medical diagnoses involving prolonged hospitalization or permanent earning impairment represent the strongest legal basis for maximum principal waivers, frequently qualifying for the highest concession tier under SBI benevolent settlement guidelines.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    Proprietary Business Collapse &amp; Working Capital Stress
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Small enterprise owners who utilized personal loans for working capital during business downturns can establish commercial insolvency through audited balance sheets and GST cancellation filings to achieve aggressive debt haircuts.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    Asset Reconstruction Company (ARC) Debt Assignments
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If SBI assigns chronic retail portfolios to ARCs like Phoenix or Assets Care, resolution dynamics shift advantageously, as ARCs acquire debt at deep discounts and demonstrate higher commercial flexibility for immediate one-time settlements.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile */}
            <div id="company-profile" className="scroll-target pt-4">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Legal &amp; Financial Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions About SBI Personal Loan Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Explore definitive, legally validated answers to the most common questions regarding State Bank of India personal loan settlement procedures, SARB escalations, waiver math, and credit score rehabilitation.
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-xs transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#1886ff] transition-colors"
                      >
                        <span className="text-xs sm:text-sm md:text-base pr-2">{faq.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'transform rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                          <p className="pt-3">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-5 pt-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Authority &amp; Resources</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Statutory Citations &amp; Regulatory Authorities
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every legal principle, settlement ratio, and consumer protection mandate outlined in this guide is derived from Indian statutory law and regulatory guidelines issued by the Reserve Bank of India.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Governing Acts and Regulatory Frameworks:
                </span>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc list-inside">
                  <li>Reserve Bank of India Act, 1934 and RBI Master Direction on Prudential Norms on Advances</li>
                  <li>State Bank of India Act, 1955 and SBI Policy on Compromise Settlement of Stressed Assets</li>
                  <li>Legal Services Authorities Act, 1987 (Section 19, Section 20, and Section 21 Consent Decrees)</li>
                  <li>Credit Information Companies (Regulation) Act, 2005 (Section 21 Bureau Correction Mandates)</li>
                  <li>Negotiable Instruments Act, 1881 (Section 138 Dishonour of Cheques Defense)</li>
                  <li>Payment and Settlement Systems Act, 2007 (Section 25 Electronic Clearing Discharges)</li>
                </ul>
              </div>

              {/* Outbound Badges */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Official Statutory Outbound Resources:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'rbi.org.in', url: 'https://www.rbi.org.in' },
                    { name: 'cms.rbi.org.in', url: 'https://cms.rbi.org.in' },
                    { name: 'cibil.com', url: 'https://www.cibil.com' },
                    { name: 'indiacode.nic.in', url: 'https://www.indiacode.nic.in' },
                    { name: 'nalsa.gov.in', url: 'https://nalsa.gov.in' },
                    { name: 'cybercrime.gov.in', url: 'https://cybercrime.gov.in' }
                  ].map((site) => (
                    <a
                      key={site.name}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-xs font-medium text-slate-700 inline-flex items-center gap-1.5 shadow-2xs transition-colors"
                    >
                      <span>{site.name}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Internal Resource Badges */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Related CredSettle Debt Resolution Guides:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Lok Adalat Loan Settlement', href: '/lok-adalat-personal-loan-settlement' },
                    { label: 'Credit Card Settlement Calculator', href: '/credit-card-settlement-calculator' },
                    { label: 'How to Write a Hardship Letter', href: '/how-to-write-a-hardship-letter-for-loan-settlement' },
                    { label: 'Verify Loan Settlement Letter', href: '/verify-loan-settlement-letter' },
                    { label: 'Get NOC After Loan Settlement', href: '/get-noc-after-loan-settlement' },
                    { label: 'Improve CIBIL After Settlement', href: '/improve-cibil-after-loan-settlement' },
                    { label: 'What Happens if I Default on Settlement', href: '/what-happens-if-i-default-on-settlement-agreement' },
                    { label: 'Business Loan Settlement Process', href: '/business-loan-settlement-process' },
                    { label: 'Two Wheeler Bike Loan Settlement', href: '/two-wheeler-bike-loan-settlement' },
                    { label: 'Education Loan Settlement', href: '/education-loan-settlement' }
                  ].map((guide) => (
                    <Link
                      key={guide.label}
                      href={guide.href}
                      className="px-3 py-1.5 rounded-lg bg-blue-50/60 hover:bg-blue-100/70 text-[#1886ff] hover:text-blue-800 text-xs font-semibold shadow-2xs transition-colors"
                    >
                      {guide.label}
                    </Link>
                  ))}
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="sticky top-6 space-y-5">
            {/* Author Bio Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600 to-[#1886ff] flex items-center justify-center text-white font-black text-base shadow-sm">
                  AJ
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900 leading-tight">Ashish Jhangra</h3>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Legal &amp; Debt Resolution Professional
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Expert in banking dispute resolution, SARB recovery negotiations, and statutory consumer protection across Indian public and private sector lenders.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Publisher: CredSettle</span>
                <span className="text-emerald-600 font-semibold">Verified Author</span>
              </div>
            </div>

            {/* Emergency CTA Card (#2452ae) */}
            <div
              className="rounded-2xl p-5 text-white shadow-md space-y-3.5 relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-200">
                <Phone className="w-4 h-4 text-blue-200" />
                <span>Urgent Recovery Help</span>
              </div>
              <h3 className="text-base font-extrabold leading-snug">
                Facing Harassment or Notices from SBI?
              </h3>
              <p className="text-xs text-blue-100/90 leading-relaxed">
                Connect directly with our legal and resolution team to stop unauthorized recovery calls and negotiate pre-approved OTS terms.
              </p>
              <a
                href="tel:+918800226635"
                className="w-full py-2.5 px-4 rounded-xl bg-white text-blue-900 hover:text-[#1886ff] font-black text-xs sm:text-sm text-center block transition-all shadow-xs hover:shadow-md"
              >
                Call Helpline: +91-8800226635
              </a>
            </div>

            {/* Trust Badges Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-slate-800 block">
                CredSettle Trust Metrics
              </span>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>5,000+ Cases Amicably Resolved</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>₹120+ Crores in Total Debt Settled</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>100% Legal Protection from Harassment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>RBI-Compliant Resolution Protocols</span>
                </li>
              </ul>
            </div>

            {/* Quick Related Guides */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-slate-800 block">
                Related Resources
              </span>
              <div className="space-y-2 text-xs">
                <Link
                  href="/lok-adalat-personal-loan-settlement"
                  className="block text-slate-700 hover:text-[#1886ff] font-medium transition-colors"
                >
                  Lok Adalat Personal Loan Settlement &rarr;
                </Link>
                <Link
                  href="/how-to-write-a-hardship-letter-for-loan-settlement"
                  className="block text-slate-700 hover:text-[#1886ff] font-medium transition-colors"
                >
                  Hardship Letter for Loan Settlement &rarr;
                </Link>
                <Link
                  href="/verify-loan-settlement-letter"
                  className="block text-slate-700 hover:text-[#1886ff] font-medium transition-colors"
                >
                  How to Verify Settlement Letters &rarr;
                </Link>
                <Link
                  href="/improve-cibil-after-loan-settlement"
                  className="block text-slate-700 hover:text-[#1886ff] font-medium transition-colors"
                >
                  Rebuild CIBIL Score After Settlement &rarr;
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
