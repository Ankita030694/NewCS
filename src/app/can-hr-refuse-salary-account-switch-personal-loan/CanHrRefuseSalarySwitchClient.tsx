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

export default function CanHrRefuseSalarySwitchClient() {
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
    { id: 'can-hr-refuse', label: '1. Can HR Refuse a Salary Switch?' },
    { id: 'labour-law-framework', label: '2. Code on Wages & Payment Rules' },
    { id: 'banker-lien-risk', label: '3. Section 171 Banker Lien Risk' },
    { id: 'court-rulings', label: '4. Court Rulings & Section 60 CPC' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-guide', label: '6. Step-by-Step Salary Switch SOP' },
    { id: 'nach-bounce-risks', label: '7. NACH & Section 25 PSS Risks' },
    { id: 'bank-hr-privacy', label: '8. Can Banks Pressure Your HR?' },
    { id: 'mistakes-precautions', label: '9. Common Mistakes & Precautions' },
    { id: 'escalation-matrix', label: '10. HR Refusal to RBI Ombudsman' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can HR legally refuse to change my salary bank account during a personal loan default?',
      a: 'HR can follow a neutral company payroll policy that limits salary credits to approved partner banks. However, HR cannot refuse your switch just because a private bank asked them to block it for a personal loan default.'
    },
    {
      q: 'Does Indian labour law give me a right to choose any bank for my salary?',
      a: 'Section 15 of the Code on Wages, 2019 and Section 6 of the Payment of Wages Act, 1936 allow wages by bank credit, cheque, or electronic mode. Neither law forces an employer to support every bank outside its payroll panel, though most firms allow switching between partner banks or valid NEFT accounts.'
    },
    {
      q: 'Can my bank deduct my entire salary under Section 171 of the Indian Contract Act?',
      a: 'If your defaulted loan and salary account are in the same bank, the bank may invoke general lien or contractual set-off under Section 171 for overdue amounts. Courts allow set-off for due debts in the same bank, which is why borrowers switch salary accounts to protect family expenses.'
    },
    {
      q: 'Can a bank call my HR department to stop my salary bank account change?',
      a: 'No. RBI Fair Practices Code and outsourcing rules strictly bar banks and recovery agents from disclosing your loan default to your employer or HR. Calling HR to block a salary shift is a serious privacy breach you can report to the RBI Ombudsman.'
    },
    {
      q: 'Does switching my salary bank account erase my personal loan debt?',
      a: 'No. Moving your salary only stops automatic same-bank set-off on future paychecks. Your loan liability remains active, interest continues to accrue, and the lender can still send legal notices or report defaults to credit bureaus.'
    },
    {
      q: 'Will changing my salary account trigger a criminal case under Section 25 of the PSS Act?',
      a: 'Switching your salary account is not a crime by itself. However, if your old account lacks funds and your NACH EMI mandate bounces, the lender can issue a 15-day demand notice and file a bailable criminal complaint under Section 25 of the Payment and Settlement Systems Act, 2007.'
    },
    {
      q: 'Can my employer deduct personal loan EMIs from my salary on a bank request?',
      a: 'No. Under Section 18 of the Code on Wages, 2019 and Section 7 of the Payment of Wages Act, 1936, an employer cannot deduct money for a private third-party bank loan without a civil court attachment order or lawful statutory authority.'
    },
    {
      q: 'How much salary can a civil court attach under Section 60 CPC for a personal loan?',
      a: 'Under Section 60(1)(i) of the Code of Civil Procedure, 1908, the first ₹1,000 and two-thirds of the remaining monthly salary are exempt. At most one-third of the remaining salary can be attached after a formal court decree, for a maximum continuous span of 24 months.'
    },
    {
      q: 'What if I signed an employer salary deduction letter for a corporate tie-up loan?',
      a: 'Check whether you signed a tripartite letter or staff loan mandate with your company. For direct employer staff loans or government-approved housing advances, special recovery rules may apply. For regular private bank personal loans, employers rarely hold valid statutory authority to force deductions.'
    },
    {
      q: 'How does CredSettle help salaried borrowers facing salary account lien threats?',
      a: 'CredSettle helps you protect monthly household cash flow, responds to Section 25 NACH notices, files RBI complaints against workplace harassment, and negotiates a formal One-Time Settlement (OTS) with an official No Dues Certificate.'
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
            <span>Indian Labour Law, RBI Privacy Rules &amp; Borrower Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Employee Legal Right to Change Salary Account in India
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Can HR refuse your salary bank account switch during a personal loan default? Learn how Indian labour codes, Section 171 banker lien, and Section 25 NACH rules work so you can protect your livelihood legally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your Salary &amp; Settle Debt</span>
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
                  <span>Salaried Borrower Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Guided by Code on Wages 2019, Section 60 CPC, and RBI Fair Practices Code.
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
                <span>EXECUTIVE BRIEF: SWITCHING SALARY ACCOUNT DURING LOAN DEFAULT</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Quick Legal Answer:</strong> HR can enforce a neutral corporate bank panel policy. However, HR cannot block a salary account change just to help a private lender recover a personal loan.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Why Borrowers Switch:</strong> When your loan and salary are in the same bank, the bank can sweep your paycheck using its general lien under Section 171 of the Indian Contract Act.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Employer Salary Deductions:</strong> Under Section 18 of the Code on Wages, 2019, your employer cannot cut salary for a private third-party bank loan without a civil court order.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict RBI Workplace Privacy:</strong> Banks and recovery agents cannot call or email your HR to expose your default or stop a payroll bank update.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Debt Still Requires Legal Closure:</strong> Moving salary protects urgent household bills, but bounced NACH mandates can trigger Section 25 PSS Act notices. Plan a formal settlement early.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Can HR Refuse a Salary Bank Account Switch in India? */}
            <section id="can-hr-refuse" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Quick Answer &amp; Core Legal Distinction</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Can HR Refuse a Salary Bank Account Switch in India?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many salaried borrowers panic when a personal loan goes overdue in their salary bank. They fear the bank will wipe out their full monthly paycheck on payday. As a result, they ask HR to route their salary to a different bank account.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The legal answer has two clear parts. First, Indian labour law does not force every company to support every bank in India. Many large employers tie up with two or three partner banks for bulk payroll processing.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Therefore, HR can ask you to pick another bank from the company&apos;s approved corporate payroll panel. That is a normal office payroll rule, not a loan recovery barrier.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, HR has no legal right to refuse your bank switch because of a personal loan default. Your loan contract is strictly between you and the bank. Unless a civil court sends a valid attachment order, your employer must stay neutral.
              </p>
            </section>

            {/* SECTION 2: Indian Labour Laws: Code on Wages & Payment Rules */}
            <section id="labour-law-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Labour Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Indian Labour Laws: Code on Wages &amp; Payment Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Two major labour laws govern how employers pay salaries in India. These are the Payment of Wages Act, 1936 and the Code on Wages, 2019. Knowing what these laws say helps you avoid wrong claims during HR talks.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 6 of the Payment of Wages Act, 1936 and Section 15 of the Code on Wages, 2019, employers pay wages by bank credit, cheque, or electronic mode. Neither law forces a firm to credit salary into any random bank outside its payroll setup.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, Section 18 of the Code on Wages, 2019 (earlier Section 7 of the 1936 Act) gives you strong protection against illegal pay cuts. An employer can only make deductions listed in the law, such as income tax, provident fund, or court orders.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Private bank personal loans are not valid salary deductions under Section 18. Your employer cannot hold your salary, block your switch on a bank&apos;s request, or pay your bank directly without a court decree.
              </p>

              {/* Comparison Table: Corporate Policy vs Illegal Interference */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">HR Payroll Rights vs Unlawful Bank Interference</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Indian Labour Law Matrix</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">HR or Employer Action</th>
                        <th className="p-3">Legal Validity</th>
                        <th className="p-3">Governing Rule</th>
                        <th className="p-3">Practical Employee Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Limiting salary to 2-3 corporate partner banks</td>
                        <td className="p-3 text-emerald-600 font-semibold">Permitted Policy</td>
                        <td className="p-3">Code on Wages Sec. 15</td>
                        <td className="p-3">Pick a different bank from your company&apos;s approved partner list.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Asking for 15-30 days payroll cut-off notice</td>
                        <td className="p-3 text-emerald-600 font-semibold">Permitted Policy</td>
                        <td className="p-3">Internal Payroll SOP</td>
                        <td className="p-3">Submit bank change request right after payday before next cut-off.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Blocking switch after receiving a bank email or call</td>
                        <td className="p-3 text-rose-600 font-semibold">Unlawful Act</td>
                        <td className="p-3">RBI Fair Practices Code</td>
                        <td className="p-3">Remind HR of privacy rules and file an RBI CMS complaint against the bank.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Deducting third-party loan EMI without court order</td>
                        <td className="p-3 text-rose-700 font-semibold">Strictly Illegal</td>
                        <td className="p-3">Code on Wages Sec. 18</td>
                        <td className="p-3">Send written objection citing Section 18 and approach Labour Commissioner.</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Acting on a civil court salary attachment decree</td>
                        <td className="p-3 text-[#1886ff]">Mandatory</td>
                        <td className="p-3">Section 60(1)(i) CPC</td>
                        <td className="p-3">Verify deduction stays within 1/3rd cap after ₹1,000 exemption.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Banker Lien Risk: Section 171 Contract Act Explained */}
            <section id="banker-lien-risk" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Same-Bank Set-Off &amp; Hold Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Banker Lien Risk: Section 171 Contract Act Explained
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Why do borrowers rush to switch their salary account during a loan default? The main reason is Section 171 of the Indian Contract Act, 1872. This law gives banks a statutory &quot;general lien&quot; over funds held with them.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In plain words, if your personal loan and salary account are in the same bank, the bank can hold your balance. Standard loan agreements also include a &quot;right of set-off&quot; clause that lets the bank auto-debit overdue dues.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On salary day, the bank&apos;s system can freeze or sweep the full overdue amount within seconds. This can leave you with zero cash for rent, groceries, school fees, or medical care.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A bank&apos;s Section 171 lien only works on accounts held inside that same bank. Bank A cannot freeze or debit your salary account in Bank B without a civil court order or an active NACH mandate. That is why routing future salary to a separate bank stops instant same-bank sweeps.
              </p>
            </section>

            {/* SECTION 4: Court Rulings on Salary Set-Off & Section 60 CPC */}
            <section id="court-rulings" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Legal Reality</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Court Rulings on Salary Set-Off &amp; Section 60 CPC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many social media posts claim that banks can never touch a salary account under Section 60 of the Code of Civil Procedure (CPC). That claim is incomplete and can put borrowers at risk. Here is what Indian courts actually hold.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Supreme Court: Syndicate Bank v. Vijay Kumar (1992)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court affirmed that a bank holds a general lien under Section 171 over money and securities deposited by a customer in the normal course of business, unless the contract says otherwise.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>High Court Rulings on Section 60 CPC vs Set-Off</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Division Benches such as the Kerala High Court have clarified that Section 60(1)(i) CPC applies to court decree execution. It does not automatically stop a same-bank contractual set-off for crystallized overdue dues.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Limits on Arbitrary Bank Freezes</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Courts still restrict unfair bank actions. A bank can only set off an actual due amount, not future unbilled EMIs, and cannot freeze funds belonging solely to a third party or unrelated joint holder.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Section 60(1)(i) CPC Court Attachment Cap</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a lender wins a civil suit and gets a salary attachment order, the first ₹1,000 plus two-thirds of the rest stay protected. Only one-third can be attached, capped at 24 continuous months.
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
                5. Visual Blueprint: Safe Salary Switch &amp; Debt Exit
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This blueprint maps the safe legal sequence for salaried borrowers. Follow these four stages to protect household cash flow while steering your overdue personal loan toward a lawful settlement.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/can-hr-refuse-salary-account-switch-personal-loan.jpg"
                    alt="Visual blueprint showing the 4-step legal guide to switching your salary bank account during personal loan default"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Salaried Borrower Protection Framework • RBI &amp; Labour Law Aligned</span>
                  <a
                    href="/images/infographics/can-hr-refuse-salary-account-switch-personal-loan.jpg"
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

            {/* SECTION 6: Step-by-Step Guide to Request a Salary Account Switch */}
            <section id="step-by-step-guide" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step Guide to Request a Salary Account Switch
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six clean steps to shift your salary account smoothly without triggering office conflict or missing payroll dates.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Check Your Company&apos;s Approved Bank Panel
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Open your HRMS portal or employee handbook and check which banks your employer uses for payroll. Choose a bank where you have zero loans, credit cards, or guarantor links.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Open a Clean Savings or Corporate Salary Account
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Open an active KYC-verified account at the new bank and get a cancelled cheque or official account letter showing your name, IFSC code, and account number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Submit a Neutral Written Request Before Payroll Cut-Off
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Apply right after your current salary arrives, usually between the 1st and 10th of the month. Keep your reason simple and professional, such as personal banking convenience or branch access.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Check If Any Corporate Tie-Up Mandate Exists
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Review your loan sanction letter to confirm it is an ordinary private personal loan, not an employer-guaranteed staff loan. Private bank loans give HR zero reason to block your update.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Confirm Penny-Drop Test and Payroll Update
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Get written confirmation from payroll that the new bank details are active before the 20th of the month. This prevents your next paycheck from landing in a lien-marked account.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Notify the Lender of Hardship and Plan Resolution
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email your lender about your financial hardship right away. Keep a clean paper trail showing genuine inability to pay rather than willful evasion, and start planning a restructuring or OTS.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: NACH Mandate, Section 25 PSS Act & Bounce Risks */}
            <section id="nach-bounce-risks" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Electronic Debit &amp; Statutory Notice Timelines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. NACH Mandate, Section 25 PSS Act &amp; Bounce Risks
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Switching your salary account protects your cash from an instant bank sweep. However, it does not cancel your NACH or e-NACH auto-debit mandate on the old account.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When your old account has zero funds on EMI date, the NACH debit bounces. Under Section 25 of the Payment and Settlement Systems (PSS) Act, 2007, a bounced electronic debit carries legal weight similar to a cheque bounce under Section 138 of the Negotiable Instruments Act.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a lender sends a Section 25 demand notice within 30 days of bounce, you have 15 days to pay or send a legal reply. The offence is bailable and compoundable, so you can resolve it through court appearance and settlement. Never ignore a formal Section 25 notice.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Post-Switch Milestone</th>
                      <th className="p-3">What Happens Legally</th>
                      <th className="p-3">Statutory Deadline</th>
                      <th className="p-3">Smart Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3">EMI bounces on old account; bank levies bounce fee and calls start.</td>
                      <td className="p-3 font-mono text-[11px]">30 Days for Notice</td>
                      <td className="p-3">Send written hardship email and keep all call logs saved.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3">Lender may issue Section 25 PSS Act or arbitration demand notice.</td>
                      <td className="p-3 font-mono text-[11px]">15-Day Reply Window</td>
                      <td className="p-3">Reply formally through legal counsel; never ignore court notices.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 90</td>
                      <td className="p-3">Loan turns Non-Performing Asset (NPA); credit score drops.</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Classification</td>
                      <td className="p-3 font-bold text-amber-800">Build a lump-sum fund in your safe account for OTS talks.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 90 to 180</td>
                      <td className="p-3">Bank settlement desk opens formal One-Time Settlement offers.</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">OTS Negotiation</td>
                      <td className="p-3 font-bold text-slate-900">Verify official settlement letter and secure a No Dues Certificate.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 8: Can Banks Force HR to Block Your Salary Account Shift? */}
            <section id="bank-hr-privacy" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>RBI Borrower Privacy Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Can Banks Force HR to Block Your Salary Account Shift?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Sometimes a bank relationship manager or recovery agent warns you that they will inform your HR if you shift your salary account. This threat is completely unlawful under RBI rules.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI Fair Practices Code and RBI Master Directions on Outsourcing of Financial Services, lenders must keep your debt details strictly confidential. Agents cannot call your HR, manager, or coworkers to shame you or press for payment.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Furthermore, a bank has no legal authority to tell your employer which bank account must receive your monthly salary. If a bank representative emails your HR asking them to reject your bank update, save that email immediately. It is direct proof of a regulatory violation.
              </p>
            </section>

            {/* SECTION 9: Common Mistakes & Legal Precautions When Switching */}
            <section id="mistakes-precautions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Practical Safeguards</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Common Mistakes &amp; Legal Precautions When Switching
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers often make avoidable mistakes during a salary switch that increase legal trouble or bank fees. Watch out for these four common traps.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    Moving Salary to Another Bank Where You Hold Debt
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Never shift your salary to a bank where you hold a credit card or second loan. If that debt also defaults later, the new bank can invoke Section 171 lien too.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-amber-600" />
                    Leaving Partial Balance in the Old Account
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Do not leave savings in your old account after switching. Multiple NACH retries and bounce charges can drain small balances or push the account into a negative hold.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    Closing the Old Account Without Handling Active Mandates
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Closing a bank account while an EMI mandate is active can look like deliberate stop-payment in Section 25 proceedings. Keep communication open with the lender in writing.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Ignoring Formal Settlement After Switching
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A salary switch buys you breathing room for rent and food, not debt forgiveness. Use the stability to save a settlement corpus and close the loan legally with an NOC.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10: Escalation Matrix: HR Refusal to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Legal Remedies &amp; Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Escalation Matrix: HR Refusal to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank contacted HR to block your payroll change, or if your employer deducted a private bank loan illegally, use this three-tier escalation matrix.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Competent Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Relief &amp; Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: Internal HR</td>
                      <td className="p-3">HR Head &amp; Payroll Grievance Desk</td>
                      <td className="p-3 font-mono">5 to 10 Working Days</td>
                      <td className="p-3">Request shift to an approved partner bank; cite Code on Wages Sec. 18 if deductions occur.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: Bank PNO</td>
                      <td className="p-3">Principal Nodal Officer (Lending Bank)</td>
                      <td className="p-3 font-mono">15 to 30 Calendar Days</td>
                      <td className="p-3">Report unauthorized calls or emails to HR; demand written stop to workplace interference.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: Regulators</td>
                      <td className="p-3">RBI Ombudsman &amp; Labour Commissioner</td>
                      <td className="p-3 font-mono">30 Days Post-Complaint</td>
                      <td className="p-3">File privacy breach on cms.rbi.org.in against bank, or wage deduction claim with Labour Office.</td>
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
                Frequently Asked Questions: Salary Account Switch
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers to the most common questions Indian salaried employees ask about switching salary bank accounts during personal loan hardship.
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
                  <strong>Code on Wages, 2019:</strong> Section 15 (Mode of Payment of Wages) and Section 18 (Authorized Deductions Which May Be Made From Wages).
                </li>
                <li>
                  <strong>Payment of Wages Act, 1936:</strong> Section 6 (Wages to be Paid in Current Coin, Currency Notes, Cheque, or Bank Account) and Section 7 (Permissible Deductions).
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 171 (General Lien of Bankers, Factors, Wharfingers, Attorneys and Policy-Brokers) as interpreted in Syndicate Bank v. Vijay Kumar (1992).
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Section 60(1)(i) (Exemption of First ₹1,000 and Two-Thirds of Remainder of Salary From Court Attachment).
                </li>
                <li>
                  <strong>Payment and Settlement Systems Act, 2007:</strong> Section 25 (Dishonour of Electronic Funds Transfer for Insufficiency of Funds).
                </li>
                <li>
                  <strong>Reserve Bank of India Fair Practices Code &amp; Integrated Ombudsman Scheme, 2021:</strong> Strict Confidentiality, Anti-Harassment Conduct, and Third-Party Disclosure Prohibition.
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
                  <a href="https://labour.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Ministry of Labour &amp; Employment</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.npci.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>NPCI NACH Guidelines</span>
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
                  <Link href="/salary-account-frozen-by-bank-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Salary Account Frozen Relief
                  </Link>
                  <Link href="/bank-froze-salary-account-for-loan-default-how-to-get-salary" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    How to Get Salary From Frozen Account
                  </Link>
                  <Link href="/can-bank-contact-my-employer-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can Bank Contact Employer?
                  </Link>
                  <Link href="/can-bank-deduct-money-from-another-account" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Set-Off From Another Account
                  </Link>
                  <Link href="/stop-auto-debit-ecs-bounce-charges" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Auto-Debit &amp; ECS Bounce Fees
                  </Link>
                  <Link href="/upi-autopay-mandate-pause-vs-revoke-personal-loan-emi" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    UPI Autopay Pause vs Revoke
                  </Link>
                  <Link href="/section-60-cpc-assets-property-exempt-from-bank-attachment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 60 CPC Exempt Assets
                  </Link>
                  <Link href="/can-bank-freeze-my-savings-account-for-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Savings Account Freeze Rules
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
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
                Specialist in banking compliance, salaried borrower defense, RBI statutory guidelines, and personal loan settlement resolutions with extensive experience protecting employees from unlawful recovery pressure.
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
                  SALARIED BORROWER SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Threatening Your Salary Account or HR?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team protects your monthly livelihood, replies to Section 25 NACH notices, stops illegal workplace calls under RBI rules, and negotiates a formal OTS.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Legal Strategy Call
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
                  <span><strong>Workplace Privacy Shield:</strong> Immediate RBI notice against HR calls.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 25 NACH Defense:</strong> Formal legal replies to bounce notices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Structured OTS Waiver:</strong> Save up to 50% to 75% on unsecured loans.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified Closure Papers:</strong> Official bank settlement letter and NOC.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/salary-account-frozen-by-bank-for-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Salary Account Frozen for Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Unfreeze remedies &amp; rights &rarr;</span>
                </Link>

                <Link
                  href="/can-bank-contact-my-employer-for-loan-recovery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank Contact My Employer?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI privacy &amp; HR shield &rarr;</span>
                </Link>

                <Link
                  href="/stop-auto-debit-ecs-bounce-charges"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Stop Auto-Debit &amp; ECS Bounce Fees
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Manage NACH legally &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
