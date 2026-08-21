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
  BadgeAlert,
  Landmark,
  Copy,
  CheckCheck,
  Wallet,
  Ban
} from 'lucide-react';

export default function SalaryDeductionPersonalLoanClient() {
  const [activeId, setActiveId] = useState<string>('quick-crux');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

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

  const handleCopyNotice = () => {
    const noticeElement = document.getElementById('legal-notice-content');
    if (noticeElement) {
      navigator.clipboard.writeText(noticeElement.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const navLinks = [
    { id: 'quick-crux', label: 'Executive Brief & Crux' },
    { id: 'can-bank-deduct-salary', label: '1. Bank Salary Deduction & Legal Reality' },
    { id: 'right-of-set-off-section-171', label: '2. Right of Set-Off & Section 171' },
    { id: 'same-bank-vs-separate-bank', label: '3. Same-Bank vs. Separate-Bank Accounts' },
    { id: 'legal-status-comparison-grid', label: '4. Legal Status & Recovery Comparison Grid' },
    { id: 'financial-scoring-math-exposure', label: '5. Financial Exposure Math & CIBIL Impact' },
    { id: 'infographic-overview', label: 'Visual 6-Step Defense Blueprint' },
    { id: 'six-stage-defense-sop', label: '6. 6-Stage Defense & Protection SOP' },
    { id: 'formal-legal-notice-terminal', label: '7. Statutory Demand Notice (Monospace Draft)' },
    { id: 'three-tier-escalation-matrix', label: '8. 3-Tier Grievance & Ombudsman Matrix' },
    { id: 'chronological-milestones-timeline', label: '9. Chronological Resolution Milestones' },
    { id: 'specialized-salary-scenarios', label: '10. Special Scenarios: Joint Accounts, PF & HR' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-authorities', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank legally deduct money directly from my salary account without my permission?',
      a: "A bank can only debit money from your account if there is an active auto-debit (NACH/e-mandate/SI) authorization or under the common law 'Right of Set-Off' (Section 171 of Indian Contract Act) if your loan and salary account are in the same bank. However, under RBI Fair Practices Code and Supreme Court rulings, banks cannot arbitrarily seize 100% of your monthly salary without prior notice or if the salary account is maintained with a different banking institution."
    },
    {
      q: "What is the banker's 'Right of Set-Off' and when does it apply?",
      a: "The Right of Set-Off (rooted in Section 171 of the Indian Contract Act, 1872) allows a bank to merge or adjust a debtor's credit balance (e.g., salary account or fixed deposit) against an overdue loan liability. However, this right strictly requires mutuality (the accounts must be in the exact same capacity and name) and exists only between accounts held within the same financial institution. A bank cannot exercise set-off against accounts held in other separate banks."
    },
    {
      q: 'Can a bank attach my salary account if the loan is with a different bank?',
      a: "No. If your personal loan or credit card is with Bank A and your salary account is with Bank B, Bank A cannot directly freeze, debit, or exercise set-off against your Bank B salary account. Bank A's only automated recovery route is through active NACH/ECS mandates, which you have a statutory right to cancel, or by obtaining a formal Garnishee Order / Salary Attachment Decree from a competent Civil Court."
    },
    {
      q: 'How can I stop or cancel a NACH/e-mandate auto-debit on my salary account?',
      a: "Under RBI Circular DPSS.CO.CHD.No./133/04.07.05/2019-20, every customer has the statutory right to stop or cancel NACH, e-mandates, or Standing Instructions (SI). You can revoke the mandate via your net banking / mobile app portal under the 'e-Mandate Management' section, or by submitting a physical/email Mandate Revocation Notice to your home bank branch. Once revoked, the bank is legally barred from debiting future installments under that mandate."
    },
    {
      q: 'What is the statutory protection for salary under Section 60 of the Code of Civil Procedure (CPC)?',
      a: 'Under Section 60(1)(i) of the Code of Civil Procedure, 1908, the law provides robust protection to salaried individuals against total income seizure. In any civil execution decree, the first ₹1,000 plus two-thirds (2/3rd) of the remainder of salary is completely exempt from attachment. Furthermore, salary attachment cannot extend beyond 24 consecutive months. Total salary sweep by banks violates this legislative protection.'
    },
    {
      q: "Can my employer deduct money from my salary on a bank's informal request?",
      a: 'Absolutely not. An employer has zero legal authority to deduct loan EMIs or transfer funds to a lending bank unless served with a formal judicial attachment order passed by a competent Civil Court under Order 21 Rule 48 CPC, or unless the employee has signed an explicit tripartite payroll deduction agreement. Recovery agents calling or writing to HR departments to demand salary withholding commit an illegal act punishable under labor and criminal laws.'
    },
    {
      q: 'What should I do if the bank wipes out my entire salary on payday?',
      a: 'If a bank illegally sweeps your entire monthly salary leaving zero subsistence funds, take immediate action: (1) Submit an emergency written protest to the Branch Manager and Principal Nodal Officer demanding refund under Section 60 CPC principles; (2) Instruct your employer HR to immediately route future salary credits to a new account in a separate bank; (3) File an urgent complaint with the RBI Integrated Ombudsman at cms.rbi.org.in for predatory recovery and breach of Fair Practices Code.'
    },
    {
      q: 'Does cancelling NACH mandate attract criminal liability under Section 25 of the PSS Act?',
      a: 'Cancelling a NACH mandate prevents auto-debits, but if an auto-debit attempt dishonors due to insufficient funds prior to formal revocation, the lender may issue a 30-day notice under Section 25 of the Payment and Settlement Systems Act, 2007 (analogous to Section 138 NI Act). However, default on an unsecured loan remains fundamentally a civil debt, and timely legal representation can settle the matter through compromise without criminal conviction.'
    },
    {
      q: 'Can a bank debit my joint account or provident fund (PF) for my personal loan default?',
      a: 'No. The Right of Set-Off requires strict mutuality of parties. A bank cannot debit a joint account (e.g., held with a spouse or parent) to recover the sole individual debt of one account holder unless the other party is a co-borrower or guarantor. Furthermore, statutory funds such as Provident Fund (EPF/PPF under Section 10 of EPF Act) and gratuity are completely immune from bank set-off and court attachment.'
    },
    {
      q: 'How can CredSettle help me stop illegal salary deductions and resolve the defaulted loan?',
      a: 'CredSettle provides a complete legal and financial defense: we issue formal statutory stop notices to banks under Section 171 Contract Act and RBI Mandate Revocation directives, protect your salary through structured account segregation, defend against aggressive recovery tactics, and negotiate a formal compromise One-Time Settlement (OTS) with a 40% to 70% waiver on accumulated dues, culminating in a clean No Dues Certificate.'
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can a Bank Legally Deduct EMI from Your Salary Account?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Is the bank emptying your salary account using the &quot;Right of Set-Off&quot; to recover a defaulted loan? Learn how to legally stop auto-debits, protect your livelihood under Section 60 CPC, and settle your loan safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Illegal Salary Deductions Now</span>
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
                  <span>Statutory Income Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by Indian Contract Act 1872, CPC Section 60 &amp; RBI Fair Practices Code.
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
                <span>EXECUTIVE BRIEF: SALARY DEDUCTION &amp; RIGHT OF SET-OFF DEFENSE</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Same-Bank vs. Separate-Bank Distinction:</strong> If your defaulted loan and your salary account are with the <em>same bank</em>, the bank can technically attempt an internal debit using the &quot;Right of Set-Off&quot;. If your salary account is with a <em>different bank</em>, the lender has zero direct access and relies solely on NACH mandates or civil court decrees.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Absolute Right to Cancel Auto-Debits (NACH):</strong> Under RBI Circular DPSS.CO.CHD.No./133/04.07.05/2019-20, borrowers possess an unconditional statutory right to revoke or cancel NACH, e-mandates, or Standing Instructions through net banking or written bank notice.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Section 60 CPC Statutory Subsistence Exemption:</strong> Total salary confiscation is unlawful. Under Section 60(1)(i) of the Code of Civil Procedure, 1908, the first ₹1,000 plus two-thirds (2/3rd) of the remaining salary is completely exempt from judicial attachment, preserving fundamental subsistence funds.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Employer HR Protection &amp; Strict Mutuality:</strong> A bank cannot demand that your employer deduct EMIs directly from your paycheck without a formal court decree. Furthermore, banks cannot touch joint accounts (spouse/parents) or statutory Provident Funds (EPF/PPF) under the doctrine of strict mutuality.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Legal Impasse to Secure 40%–70% OTS Waiver:</strong> Rerouting your salary and asserting statutory objections halts predatory auto-debits, bringing the lender to the negotiating table for an amicable One-Time Settlement (OTS) with substantial interest waivers.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: What is Bank Salary Deduction & The Legal Reality */}
            <section id="can-bank-deduct-salary" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Realities</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Can a Bank Deduct Money Directly from Your Salary Account?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When salaried professionals in India face unexpected financial distress, job transitions, or medical crises and miss personal loan or credit card EMIs, their primary anxiety centers on their monthly paycheck: <em>Will the bank empty my salary account the moment my salary gets credited?</em>
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The legal reality depends fundamentally on the technical architecture of your banking relationship and the legal instruments executed during loan sanction. Under Indian banking law, there are two distinct mechanisms through which a bank attempts to deduct funds:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-blue-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <CreditCard className="w-4 h-4" />
                    <span>1. Automated Mandates (NACH / ECS / SI)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When you take a loan from Bank A while holding a salary account at Bank B, Bank A relies on a National Automated Clearing House (NACH) mandate or electronic Standing Instruction (SI). This is an authorized clearing system, not an automatic legal seizure. You have the statutory right to cancel this mandate.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-indigo-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>2. Internal Account Sweep (Right of Set-Off)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your personal loan and your salary account are both maintained within the <em>same financial institution</em>, the bank uses internal ledger transfers under the common law doctrine of the &quot;Right of Set-Off&quot; (Section 171, Indian Contract Act, 1872) without triggering external clearing clearing houses.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/70 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>The Core Legal Principle:</strong> A lending bank possesses <strong>zero power to unilaterally freeze or seize funds from a salary account held in a third-party bank</strong> without either an active NACH mandate or a formal judicial Garnishee Order issued by a civil court under Order 21 Rule 46 of the Code of Civil Procedure, 1908.
                </p>
              </div>
            </section>

            {/* SECTION 2: Right of Set-Off & Section 171 Contract Act */}
            <section id="right-of-set-off-section-171" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Banking Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. The Banker&apos;s &quot;Right of Set-Off&quot; under Section 171 of the Indian Contract Act
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on an unsecured debt, banks frequently cite their &quot;Banker&apos;s Lien&quot; and &quot;Right of Set-Off&quot; to sweep 100% of the funds resting in the debtor&apos;s savings or salary account. Understanding the statutory boundaries of this right is vital to defending your income.
              </p>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                  <Gavel className="w-4 h-4 text-[#1886ff]" />
                  What is Section 171 of the Indian Contract Act, 1872?
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Section 171 provides that bankers may, in the absence of a contract to the contrary, retain as a security for a general balance of account, any goods or securities bailed to them. Extending this principle to cash balances, the Right of Set-Off empowers a bank to combine two accounts (one in credit, one in debit) belonging to the exact same customer to extinguish or reduce a matured, legally enforceable debt.
                </p>
              </div>

              {/* The 4 Non-Negotiable Legal Preconditions for Set-Off */}
              <div className="space-y-3 pt-1">
                <h3 className="text-sm md:text-base font-bold text-slate-900">
                  The 4 Statutory Preconditions Required for a Lawful Set-Off:
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-[11px] font-bold">1</span>
                      <span>Strict Mutuality of Parties</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The credit balance and the debit liability must belong to the exact same person in the exact same capacity. A bank cannot set off a personal loan against a joint account or a partnership firm account.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-[11px] font-bold">2</span>
                      <span>Debt Must Be Due &amp; Ascertained</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Set-off can only be exercised against a liquidated, matured, and overdue liability. A bank cannot debit your salary account for future unaccrued EMIs or unadjudicated disputed penalties.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-[11px] font-bold">3</span>
                      <span>Mandatory Reasonable Notice</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Supreme Court precedents and the RBI Fair Practices Code establish that exercising set-off without prior reasonable written notice is an unfair trade practice. A surprise zero-balance sweep is actionable before the Banking Ombudsman.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-[11px] font-bold">4</span>
                      <span>Same Legal Entity Limitation</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The Right of Set-Off exists solely between accounts maintained inside the same banking corporation. HDFC Bank cannot exercise set-off against an ICICI Bank salary account under any circumstance.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: Same-Bank vs. Separate-Bank Accounts */}
            <section id="same-bank-vs-separate-bank" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Wallet className="w-4 h-4 text-[#1886ff]" />
                <span>Account Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. The Critical Difference: Same-Bank vs. Separate-Bank Accounts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The single most impactful factor determining whether your salary is vulnerable to immediate seizure is whether your salary account resides in the same banking institution as your loan facility.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Same-Bank Scenario */}
                <div className="bg-red-50/70 border border-red-200 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-red-800 font-bold text-sm sm:text-base">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span>Scenario A: Same-Bank Account (High Risk)</span>
                  </div>
                  <p className="text-xs md:text-sm text-red-950 leading-relaxed">
                    <strong>Example:</strong> You took a personal loan from Axis Bank and your corporate salary is credited to your Axis Bank account.
                  </p>
                  <div className="text-xs text-red-900 space-y-2">
                    <p className="font-semibold text-red-950">How the Bank Operates:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>The bank has direct backend database access to your incoming credits.</li>
                      <li>Automated sweep bots trigger on the 1st/30th of the month the second payroll lands.</li>
                      <li>Cancelling NACH does not prevent internal set-off sweeps.</li>
                      <li><strong>Immediate Remedy:</strong> You must request employer HR to switch your payroll account to a separate bank.</li>
                    </ul>
                  </div>
                </div>

                {/* Separate-Bank Scenario */}
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm sm:text-base">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Scenario B: Separate-Bank Account (Protected)</span>
                  </div>
                  <p className="text-xs md:text-sm text-emerald-950 leading-relaxed">
                    <strong>Example:</strong> You took a personal loan from Bajaj Finserv / HDFC and your salary is credited to SBI or Kotak Bank.
                  </p>
                  <div className="text-xs text-emerald-900 space-y-2">
                    <p className="font-semibold text-emerald-950">How the Bank Operates:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>The lender has zero internal access to your SBI / Kotak account balance.</li>
                      <li>The lender is restricted to external NACH / e-mandate clearing attempts.</li>
                      <li>Revoking the NACH mandate legally stops automated debits completely.</li>
                      <li><strong>Immediate Remedy:</strong> Exercise statutory mandate revocation and proceed to negotiated OTS.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 4: 4-Sided Bordered Status Comparison Table (Full Grid) */}
            <section id="legal-status-comparison-grid" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Legal Status &amp; Recovery Comparison Grid: Salary Deduction Scenarios
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Compare how different recovery methods operate, their statutory legality, power to attach income, and exact borrower defense routes:
              </p>

              {/* Table with both vertical and horizontal lines forming a proper grid */}
              <div className="overflow-x-auto rounded-2xl border border-slate-300 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse border border-slate-300">
                  <thead className="bg-slate-100 border-b border-slate-300 text-slate-800">
                    <tr>
                      <th className="p-3.5 font-bold border border-slate-300">Recovery Scenario</th>
                      <th className="p-3.5 font-bold border border-slate-300">Governing Statute</th>
                      <th className="p-3.5 font-bold border border-slate-300">Direct Account Access</th>
                      <th className="p-3.5 font-bold border border-slate-300">Can Bank Empty 100% Salary?</th>
                      <th className="p-3.5 font-bold border border-slate-300">Legal Recourse &amp; Defense</th>
                      <th className="p-3.5 font-bold border border-slate-300 text-[#1886ff]">CredSettle Strategic Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600">
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">
                        Internal Sweep (Same Bank)
                      </td>
                      <td className="p-3.5 border border-slate-200">Sec 171 Indian Contract Act 1872</td>
                      <td className="p-3.5 text-red-700 font-semibold border border-slate-200">YES (Internal Core Banking)</td>
                      <td className="p-3.5 text-red-700 font-semibold border border-slate-200">YES (Unless Challenged)</td>
                      <td className="p-3.5 border border-slate-200">Sec 60 CPC Notice &amp; Reroute Payroll</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Switch salary account to separate bank &amp; issue refund notice</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">
                        Cross-Bank NACH / e-Mandate
                      </td>
                      <td className="p-3.5 border border-slate-200">Payment &amp; Settlement Systems Act 2007</td>
                      <td className="p-3.5 text-amber-700 font-semibold border border-slate-200">Conditional (Mandate Only)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold border border-slate-200">NO (Only Mandate Amount)</td>
                      <td className="p-3.5 border border-slate-200">RBI Mandate Revocation Circular</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Submit formal NACH cancellation notice via net banking &amp; branch</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">
                        Court Garnishee Order
                      </td>
                      <td className="p-3.5 border border-slate-200">Order 21 Rule 46 / 48 CPC 1908</td>
                      <td className="p-3.5 text-red-700 font-semibold border border-slate-200">YES (Via Court Summons)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold border border-slate-200">NO (Sec 60 CPC Exemption: 1st ₹1,000 + 2/3rd Exempt)</td>
                      <td className="p-3.5 border border-slate-200">Civil Court Objection &amp; OTS Compromise</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">File application for stay &amp; negotiate structured one-time settlement</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">
                        Joint Account Debit (Spouse/Parent)
                      </td>
                      <td className="p-3.5 border border-slate-200">Doctrine of Mutuality (Contract Act)</td>
                      <td className="p-3.5 text-amber-700 font-semibold border border-slate-200">YES (If in Same Bank)</td>
                      <td className="p-3.5 text-red-700 font-semibold border border-slate-200">ILLEGAL (Direct Violation of Mutuality)</td>
                      <td className="p-3.5 border border-slate-200">RBI Ombudsman Complaint for Illegal Debit</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Demand 100% refund of co-owner funds under Banking Ombudsman Scheme</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">
                        Direct HR / Employer Withholding
                      </td>
                      <td className="p-3.5 border border-slate-200">Payment of Wages Act 1936</td>
                      <td className="p-3.5 text-emerald-700 font-semibold border border-slate-200">NO (Zero Legal Access)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold border border-slate-200">STRICTLY ILLEGAL (Criminal Extortion)</td>
                      <td className="p-3.5 border border-slate-200">Sec 383 IPC / Sec 308 BNS &amp; RBI Sachet</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Issue cease-and-desist warning to lender; HR cannot deduct without court decree</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Technical Financial Risk & Scoring Penalty Analytics */}
            <section id="financial-scoring-math-exposure" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analytics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Technical Financial Risk Analytics &amp; CIBIL Scoring Penalties
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a bank repeatedly attempts uncoordinated salary debits or leaves a defaulted loan unpaid, the borrower faces both acute financial bleeding and severe credit bureau rating destruction. The mathematical mechanics operate as follows:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    Compounding NACH Bounce Charges &amp; Penal Multipliers
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Lender NACH Bounce Surcharge:</span>
                      <span className="font-bold text-red-600">₹450 – ₹590 per presentation</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Salary Bank Inward Return Fee:</span>
                      <span className="font-bold text-red-600">₹250 – ₹350 per presentation</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Monthly Presentation Frequency:</span>
                      <span className="font-bold text-slate-900">Up to 4 presentations/month</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Annual Unproductive Bounce Drain:</span>
                      <span className="font-bold text-red-700">₹30,000 – ₹45,000 per loan</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Compounded Penal Interest:</span>
                      <span className="text-red-700">+24% to 36% p.a. on overdue EMI</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-red-600" />
                    CIBIL Score Destruction &amp; Algorithmic Multipliers
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Payment History Weightage (CIBIL):</span>
                      <span className="font-bold text-slate-900">35% of total score</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Immediate Score Drop (1st Default):</span>
                      <span className="font-bold text-red-600">-60 to -90 Points</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>90+ DPD Classification:</span>
                      <span className="font-bold text-red-700">NPA / Loss Asset Hard Flag</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>LOS Underwriting Impact:</span>
                      <span className="font-bold text-slate-900">Automated Credit Card / Loan Rejection</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>OTS Settlement Restoration:</span>
                      <span className="text-emerald-700">Converts to &quot;Closed&quot; &amp; Score Rebounds</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6: Embedded 16:9 Infographic Banner */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: 6-Step Salary Protection &amp; Debt Resolution
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Refer to this visual blueprint outlining the 6-stage procedural sequence to protect your monthly salary from unauthorized bank sweeps, invoke statutory exemptions, and achieve an amicable debt settlement:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/salary-deduction-personal-loan-default.jpg"
                    alt="Bank Salary Deduction & Right of Set-Off Defense Blueprint India"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Architecture • Indian Contract Act 1872 &amp; CPC Sec 60</span>
                  <a
                    href="/images/infographics/salary-deduction-personal-loan-default.jpg"
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

            {/* SECTION 7: 6-Stage Standard Operating Procedure (SOP) */}
            <section id="six-stage-defense-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Protection SOP</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Standard Operating Procedure (SOP): 6 Stages of Salary Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this battle-tested, sequential protocol to secure your monthly livelihood and resolve your personal loan dispute on favorable terms:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 1–3</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Immediate Account Segregation &amp; Payroll Account Rerouting
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If your salary account is held with the lending bank, immediately submit a formal written request to your employer HR/payroll department to update your salary disbursement account to a fresh account in a separate, unrelated scheduled commercial bank (e.g., SBI, Bank of Baroda, or Kotak). This physically severs the lending bank&apos;s automated database sweep capabilities before the next payday.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 4–7</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Statutory NACH &amp; e-Mandate Revocation under RBI Circular
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Exercise your statutory rights under RBI Circular DPSS.CO.CHD.No./133/04.07.05/2019-20. Log into your net banking portal and revoke the active e-mandate. Simultaneously send a written Mandate Cancellation Notice via registered email and speed post to the destination branch, demanding the immediate cessation of automated debit presentations.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 8–15</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Formal Legal Objection against Section 171 Right of Set-Off
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If the bank executed an unauthorized sweep, serve a formal legal notice upon the Branch Manager and Principal Nodal Officer. Challenge the debit on grounds of lack of prior notice, violation of the RBI Fair Practices Code, and breach of mutuality (if joint funds or salary credits were swept). Demand an immediate refund of essential subsistence funds.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 16–30</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Invoking Section 60 CPC Statutory Subsistence Protections
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    In your formal representation, cite Section 60(1)(i) of the Code of Civil Procedure, 1908. Put the bank on record that even a civil execution court is statutorily prohibited from attaching the first ₹1,000 plus two-thirds of salary, and an extrajudicial full salary sweep violates fundamental livelihood rights under Article 21 of the Constitution of India.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 31–60</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Escalating to the RBI Integrated Ombudsman (CMS Portal)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If the bank fails to reverse illegal deductions, file an expedited regulatory complaint on the <strong>RBI CMS portal (cms.rbi.org.in)</strong> under the Reserve Bank - Integrated Ombudsman Scheme, 2021. Include bank statements, mandate cancellation receipts, and proof of financial distress to compel regulatory intervention.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Months 2–4</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Negotiating Compromise OTS (40%–70% Waiver) &amp; Obtaining NDC
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    With salary deductions successfully halted and regulatory scrutiny initiated, the lender loses automated leverage and becomes motivated to close the non-performing asset (NPA). CredSettle leads bilateral negotiations to secure a 40% to 70% waiver on accumulated dues, culminating in a formal OTS Sanction Letter and an official No Dues Certificate (NDC).
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Formal Legal Notice Monospace Terminal Draft */}
            <section id="formal-legal-notice-terminal" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Notice Template</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Formal Statutory Demand Notice (Monospace Terminal Draft)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank has executed an unauthorized salary sweep or continues unapproved NACH debit presentations, dispatch this formal statutory notice to the Bank Principal Nodal Officer and Branch Manager:
              </p>

              {/* Code / Notice Container */}
              <div className="rounded-2xl border border-slate-700 bg-slate-900 text-slate-100 p-5 md:p-6 shadow-sm overflow-x-auto text-xs font-mono leading-relaxed relative">
                <div className="text-blue-400 font-bold mb-3 pb-2 border-b border-slate-800 flex items-center justify-between">
                  <span>STATUTORY DEMAND NOTICE: ILLEGAL SALARY DEDUCTION &amp; MANDATE REVOCATION</span>
                  <button
                    onClick={handleCopyNotice}
                    className="flex items-center gap-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded transition-colors"
                  >
                    {copied ? <CheckCheck className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied!' : 'Copy Notice'}</span>
                  </button>
                </div>
                <pre id="legal-notice-content" className="whitespace-pre-wrap text-slate-200">
{`To,
The Branch Manager & Principal Nodal Officer (PNO),
[Bank / NBFC Name],
[Zonal Office Address / Branch Address],
Email: [nodalofficer@bankname.com]

Subject: FORMAL STATUTORY NOTICE FOR IMMEDIATE CEASE & DESIST OF UNAUTHORIZED SALARY DEDUCTIONS, REVOCATION OF NACH/e-MANDATE, AND OBJECTION TO UNLAWFUL SET-OFF UNDER SECTION 171 INDIAN CONTRACT ACT & SECTION 60(1)(i) CPC FOR LOAN A/C NO: [Insert Loan A/C No.]

Respected Sir/Madam,

I, [Borrower Full Name], residing at [Borrower Full Address], holding Savings/Salary Account No: [Insert Account No.] with your branch, submit this formal legal representation:

1. That the undersigned availed a Personal Loan Facility [Account No: XXXXXXXX] from your esteemed institution. Due to severe bona fide financial distress resulting from [salary reduction / medical emergency / business loss], the undersigned has experienced genuine hardship in servicing regular monthly EMIs.

2. That on [DD/MM/YYYY], your institution executed an unauthorized direct debit/sweep of ₹[Amount Deducted] from the captioned salary account without prior written notice, completely depleting the undersigned's monthly salary and leaving zero funds for family subsistence, rent, and basic medical sustenance.

3. TAKE NOTICE that this unilateral action constitutes an unlawful exercise of the Banker's Right of Set-Off under Section 171 of the Indian Contract Act, 1872, for the following statutory reasons:
   a) Lack of Reasonable Notice: Under binding Supreme Court precedents and RBI Master Directions on Fair Practices Code, set-off cannot be exercised extrajudicially without prior written intimation.
   b) Violation of Section 60(1)(i) Code of Civil Procedure, 1908: Even an executing civil court is statutorily barred from attaching the first ₹1,000 and two-thirds (2/3rd) of the remainder of salary. Your bank's 100% sweep is unconstitutional and violates the right to livelihood under Article 21.
   c) Strict Mutuality Breach: The credited funds represent monthly earned wages intended for family subsistence and are not general deposits subject to unrestricted lien.

4. STATUTORY MANDATE REVOCATION:
   Pursuant to RBI Circular DPSS.CO.CHD.No./133/04.07.05/2019-20, the undersigned hereby formally REVOKES and CANCELS all active NACH, ECS, e-mandates, and Standing Instructions associated with the said loan facility. Any subsequent debit presentation initiated by your bank shall constitute an intentional regulatory offense.

DEMAND:
You are hereby called upon to:
i) Immediately reverse and refund the unauthorized deducted sum of ₹[Amount Deducted] back to Account No: [Insert Account No.] within 7 (seven) calendar days of receipt of this notice.
ii) Update the central clearing server to record the NACH/ECS mandate as CANCELLED.
iii) Direct your collection representatives to cease contacting the undersigned's employer or family, in strict compliance with the RBI Master Direction on Recovery Agents.
iv) Refer the outstanding loan account to the Bank's Compromise Settlement Committee for an amicable One-Time Settlement (OTS).

Take notice that failure to comply within 7 days shall compel the undersigned to lodge a formal statutory complaint before the Reserve Bank of India Integrated Ombudsman (cms.rbi.org.in) alongside initiating appropriate proceedings before the Consumer Disputes Redressal Commission for compensation for mental agony and financial injury.

Yours sincerely,

___________________________
[Signature]
[Borrower Name]
[Mobile Number]
[Registered Email ID]`}
                </pre>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix & Regulatory Grievance Mechanisms */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Escalation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. The 3-Tier Escalation Matrix &amp; Judicial Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the lending bank ignores your mandate cancellation or refuses to refund unauthorized salary sweeps, escalate through this structured 3-tier regulatory and judicial matrix:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Branch Manager &amp; Bank Legal Desk
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 7–14 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Submission of Formal Mandate Cancellation &amp; Set-Off Protest
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Submit the written statutory notice directly to your home branch manager and email the Bank&apos;s Centralized Customer Redressal Desk. Obtain a physical receiving stamp or electronic ticket acknowledgement number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: Principal Nodal Officer (PNO) &amp; Internal Ombudsman
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 15–30 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Escalation to Apex Internal Banking Authority
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If the branch fails to resolve the grievance within 14 days, escalate to the bank&apos;s appointed Principal Nodal Officer (PNO). The PNO operates under direct RBI mandates to review arbitrary recoveries, reverse unfair penalties, and facilitate OTS compromise settlements.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: RBI Integrated Ombudsman (CMS Portal)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 30 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Regulatory Redressal &amp; Statutory Compensation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If 30 days elapse without resolution, lodge a formal complaint on the <strong>RBI CMS portal (cms.rbi.org.in)</strong> under the Reserve Bank - Integrated Ombudsman Scheme, 2021. The Ombudsman holds statutory powers to order immediate fund restitution, levy fines on the bank, and grant compensation up to ₹20 Lakhs for mental harassment.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10: Chronological Milestone Resolution Table (Full Grid) */}
            <section id="chronological-milestones-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Timelines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Milestone Resolution Timeline (Day 0 to Month 6)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding institutional and legal milestones allows borrowers to plan defense maneuvers and settlement negotiations strategically:
              </p>

              {/* Table with both vertical and horizontal lines forming a proper grid */}
              <div className="overflow-x-auto rounded-2xl border border-slate-300 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse border border-slate-300">
                  <thead className="bg-slate-100 border-b border-slate-300 text-slate-800">
                    <tr>
                      <th className="p-3.5 font-bold border border-slate-300">Milestone Phase</th>
                      <th className="p-3.5 font-bold border border-slate-300">Key Legal / Banking Event</th>
                      <th className="p-3.5 font-bold border border-slate-300">Statutory Limitation Window</th>
                      <th className="p-3.5 font-bold border border-slate-300 text-[#1886ff]">Borrower Strategic Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600">
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">Day 0</td>
                      <td className="p-3.5 border border-slate-200">First Missed EMI / Auto-Debit Bounce</td>
                      <td className="p-3.5 border border-slate-200">1 to 30 Days Past Due (DPD)</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Audit banking setup &amp; prepare salary account firewall</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">Days 1–5</td>
                      <td className="p-3.5 border border-slate-200">Payroll Rerouting &amp; Account Segregation</td>
                      <td className="p-3.5 border border-slate-200">Prior to next employer payroll cycle</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Submit new account details to employer HR to protect wages</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">Days 6–15</td>
                      <td className="p-3.5 border border-slate-200">NACH Cancellation &amp; Statutory Notice</td>
                      <td className="p-3.5 border border-slate-200">Within 30 days of default notice</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Dispatch Section 171 notice &amp; cancel e-mandates on net banking</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">Days 16–30</td>
                      <td className="p-3.5 border border-slate-200">NPA Classification (90 DPD Window)</td>
                      <td className="p-3.5 border border-slate-200">Statutory 90-day RBI prudential norm</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Engage CredSettle legal desk to open formal OTS settlement channel</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">Months 2–4</td>
                      <td className="p-3.5 border border-slate-200">OTS Compromise Negotiation Window</td>
                      <td className="p-3.5 border border-slate-200">Bilateral negotiation period</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Secure official written OTS sanction letter with 40%–70% waiver</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">Months 5–6</td>
                      <td className="p-3.5 border border-slate-200">Full Closure &amp; No Dues Certificate (NDC)</td>
                      <td className="p-3.5 border border-slate-200">Within 30 days of settlement payment</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Collect NDC &amp; verify CIBIL record updated to &quot;Closed&quot; status</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Specialized Real-World Scenarios */}
            <section id="specialized-salary-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Scenarios: Joint Accounts, Provident Funds &amp; HR Threats
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Salary deduction dynamics vary across complex family financial structures and aggressive recovery practices:
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    1. Joint Accounts with Spouse or Parents: The Rule of Mutuality
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Under Indian contract jurisprudence, a bank <strong>cannot debit a joint account</strong> held by a borrower along with a spouse, parent, or sibling to recover an individual debt, unless the joint holder is a signed co-borrower or guarantor. If a bank unlawfully sweeps funds from a joint account, a formal objection citing lack of mutuality mandates immediate restitution of the co-holder&apos;s funds.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    2. Complete Statutory Immunity for Provident Fund (EPF/PPF) &amp; Gratuity
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Under Section 10 of the Employees&apos; Provident Funds and Miscellaneous Provisions Act, 1952, Section 60(1)(k) CPC, and the Public Provident Fund Act, 1968, funds lying in EPF, PPF, and statutory Gratuity accounts are <strong>completely immune from bank set-off and civil court attachment</strong>. Any attempt by a bank to freeze or debit PF accumulation is void ab initio.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Ban className="w-4 h-4 text-red-600" />
                    3. Recovery Agent Threats to Contact Employer HR / Company Payroll
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Recovery agents frequently threaten: <em>&quot;We will send a legal notice to your HR and deduct EMI directly from your salary.&quot;</em> This is a complete bluff and an illegal practice. An employer is legally prohibited under the Payment of Wages Act, 1936 from withholding an employee&apos;s salary for private loans without an explicit judicial order passed under Order 21 Rule 48 CPC.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#1886ff]" />
                    4. Digital Fintech NBFC Apps &amp; UPI Auto-Pay Overrides
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Instant loan applications often register recurring UPI Auto-Pay mandates on Google Pay, PhonePe, or Paytm. If you face distress, you must cancel these mandates directly inside your UPI application settings under &apos;AutoPay / Recurring Mandates&apos; to prevent random mid-month debits.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 12: Company Profile */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 13: Frequently Asked Questions Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions on Bank Salary Deductions &amp; Set-Off
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to view detailed legal answers verified by our debt resolution professionals:
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

            {/* SECTION 14: Regulatory Authorities & Outbound Links */}
            <section id="regulatory-authorities" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Judicial References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 171 (Banker&apos;s General Lien &amp; Right of Set-Off), Ministry of Law and Justice, Government of India.
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908:</strong> Section 60(1)(i) (Statutory Exemption of Salary from Attachment) and Order 21 Rule 48.
                </li>
                <li>
                  <strong>Reserve Bank of India (RBI):</strong> Master Direction on Fair Practices Code for Lenders &amp; Circular DPSS.CO.CHD.No./133/04.07.05/2019-20 (Customer Rights on NACH Mandate Cancellation).
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Redressal Mechanism for Unfair Bank Debits (cms.rbi.org.in).
                </li>
                <li>
                  <strong>Payment and Settlement Systems Act, 2007:</strong> Section 25 (Dishonour of Electronic Funds Transfer).
                </li>
              </ul>

              {/* 10 Internal Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
                  </Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    NACH Bounce Section 25
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/bank-recovery-case-in-court" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Court Recovery Cases
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
                  </Link>
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Settlement Letter
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
                Specialized in banking compliance, arbitral defense strategies, loan dispute resolution, and NPA settlement negotiations with deep expertise challenging unlawful salary sweeps and banker liens across Indian banking forums.
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
                  100% CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Emptying Your Salary Account?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution experts challenge illegal set-off sweeps, stop NACH auto-debits, protect your livelihood, and negotiate a 40% to 70% loan waiver.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Stop Illegal Salary Deductions Now
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
                  <span><strong>Zero Upfront Risk:</strong> Success-linked settlement fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> Zero middleman fund holding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> 100% lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated debt resolution specialists.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/ecs-nach-bounce-legal-notice-section-25"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    ECS / NACH Bounce Legal Notice Section 25
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
                  <span className="text-[10px] text-slate-400 mt-1 block">Perkins Eastman defense guide &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Loan to Closed Status
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Clean credit report blueprint &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
