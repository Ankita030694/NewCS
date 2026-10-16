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

export default function BankersRightOfSetOffClient() {
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
    { id: 'statutory-framework', label: '1. Section 171 Banker General Lien' },
    { id: 'set-off-vs-lien', label: '2. Set-Off vs Banker Lien Differences' },
    { id: 'mutuality-principle', label: '3. The Mutuality Principle' },
    { id: 'protected-accounts', label: '4. Protected Accounts & Exemptions' },
    { id: 'joint-accounts-rules', label: '5. Joint Accounts & Mandate Rules' },
    { id: 'mandatory-notice-law', label: '6. Mandatory Notice & Case Law' },
    { id: 'visual-blueprint', label: '7. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '8. 6-Stage Debit Reversal SOP' },
    { id: 'escalation-matrix', label: '9. 3-Tier Grievance Redressal Matrix' },
    { id: 'procedural-milestones', label: '10. Delinquency Timeline Milestones' },
    { id: 'specialized-scenarios', label: '11. Specialized Real-World Cases' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: "What is the banker's right of set-off under Indian banking law?",
      a: 'The right of set-off allows a bank to combine a customer deposit balance with an overdue loan. The bank uses the deposit money to reduce or pay off the unpaid debt. This power links to Section 171 of the Indian Contract Act, 1872.'
    },
    {
      q: 'Can a bank debit my savings account without prior notice?',
      a: 'No. The Bombay High Court ruled in SBI v. Javed Akhtar Hussain that banks must give fair notice before taking money. The RBI Fair Practices Code also demands fair warning so borrowers can manage essential expenses.'
    },
    {
      q: 'What does the mutuality of debts rule mean?',
      a: 'Mutuality means both debts must exist between the exact same people in the same legal role. A bank cannot use joint savings or trust funds to settle an individual loan debt. When roles differ, mutuality fails completely.'
    },
    {
      q: "Can a bank deduct money from a joint savings account for one person's personal loan?",
      a: 'No. Money in a joint savings account belongs jointly to all account holders. A bank cannot seize joint money for one person debt unless all holders signed the loan contract as co-borrowers.'
    },
    {
      q: 'Can a bank set off money from a trust or specific purpose account?',
      a: 'No. Money kept for a clear purpose like tax, rent, or client trust cannot be seized. In these cases, the bank acts as a custodian. Section 171 does not allow set-off on trust funds.'
    },
    {
      q: 'Can a bank exercise set-off on time-barred loan dues?',
      a: 'Under the Limitation Act, 1963, suits must be filed within 3 years. While a bank lien does not die automatically, taking money from active accounts for old debts without notice is treated as an unfair trade practice by the RBI.'
    },
    {
      q: 'What should I do if a bank illegally debits my savings account?',
      a: 'Write a firm letter to the branch manager immediately. Cite Section 171 and lack of notice. If the branch does not refund the money within 7 days, file a complaint on the RBI CMS portal.'
    },
    {
      q: 'How can I prevent a bank from touching my monthly salary or savings?',
      a: 'Open a new savings or salary account in a completely different bank where you have no debt. Tell your employer HR to send all monthly salary payments to this safe neutral bank.'
    },
    {
      q: 'Can I negotiate a loan settlement after my account has been debited?',
      a: 'Yes. Challenging an unlawful debit gives you strong leverage. You can negotiate a One-Time Settlement with the bank credit team. This helps you secure a 50% to 75% waiver and a clean No Dues Certificate.'
    },
    {
      q: 'How does CredSettle assist borrowers facing wrongful bank set-offs?',
      a: 'CredSettle sends formal legal notices demanding full refund of illegal debits. Our team files complaints with the RBI Ombudsman, protects your income, and negotiates deep debt waivers.'
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
            <span>Banking Law &amp; Section 171 Indian Contract Act</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can Bank Debit Savings Account? Section 171 Right of Set-Off
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Understand how banker&apos;s right of set-off works on savings accounts under Section 171 of the Contract Act. Learn your rights against surprise debits, mandatory notice rules, and mutuality requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Illegal Account Set-Off</span>
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
                  <span>Borrower Account Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected by Section 171 Contract Act limits and RBI Fair Practices Code.
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
                <span>EXECUTIVE BRIEF: BANKER RIGHT OF SET-OFF &amp; SECTION 171</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Legal Banking Power:</strong> Section 171 of the Contract Act gives banks a general lien. It lets lenders combine accounts to recover an overdue debt.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mutuality Is Required:</strong> Debts must exist between the same two people in the same role. A bank cannot take money if roles differ.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Joint Accounts Are Safe:</strong> A bank cannot touch a joint savings account to settle one person loan unless all holders signed the debt contract.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Advance Notice Is Mandatory:</strong> The Bombay High Court ruled that surprise account debits without prior written notice are unlawful.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Neutral Bank Account Rule:</strong> Always keep your salary and savings in a neutral bank where you have no active loan or credit card dues.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Section 171 Banker General Lien */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactment &amp; Legal Principles</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Framework: Section 171 Banker General Lien
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers face sudden account debits. You check your bank balance and see that money is missing. The bank took your funds to pay an overdue personal loan or credit card bill.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you ask branch staff, they cite Section 171 of the Indian Contract Act, 1872. This section allows a banker to retain goods or balances as security for general debt.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Cash deposited in a bank creates a debtor and creditor bond. The Supreme Court in Syndicate Bank v. Vijay Kumar held that a banker lien acts as an implied pledge. The bank can adjust deposit balances against loan dues.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, this right has clear legal limits. Section 171 applies only when there is no agreement to the contrary. Banks must follow fair rules before touching customer savings.
              </p>
            </section>

            {/* SECTION 2: Set-Off vs Banker Lien Differences */}
            <section id="set-off-vs-lien" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Legal Mechanics &amp; Accounting Adjustments</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Right of Set-Off vs Banker Lien: Key Differences
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks often mix up a banker lien and the right of set-off. Both tools help lenders recover money. But they work in very different ways under Indian law.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A banker lien under Section 171 is a right of retention. It allows a bank to hold physical goods, bonds, or fixed deposit receipts. The bank holds these assets until the debt is cleared.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In contrast, the right of set-off is an accounting step. The bank joins a positive balance in savings with a negative balance in a loan. The money is transferred right away to clear the overdue amount.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Ledger Audit: Right of Set-Off Dispute</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹5 Lakh Overdue Claim</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Account / Transaction Element</th>
                        <th className="p-3">Bank Ledger Position</th>
                        <th className="p-3">Statutory Legal Status</th>
                        <th className="p-3 text-right">Recoverable Balance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Savings Account Balance (Operative)</td>
                        <td className="p-3">₹1,75,000</td>
                        <td className="p-3 text-amber-600 font-semibold">Prior Notice Rule Applies</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹1,75,000 (Refundable if no notice)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Joint Savings Balance (with Mother)</td>
                        <td className="p-3">₹2,40,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Illegal Debit (Mutuality Absent)</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹2,40,000 (Fully Protected)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Overdue Unsecured Personal Loan</td>
                        <td className="p-3 text-rose-600 font-bold">₹5,00,000</td>
                        <td className="p-3 text-blue-600 font-semibold">Unsecured Claim (Negotiable OTS)</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹1,50,000 (Settled via OTS)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Net Financial Asset Shield</td>
                        <td className="p-3 text-slate-900">₹4,15,000 Saved</td>
                        <td className="p-3 text-emerald-700">70% Loan Debt Relief Secured</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">100% Rights Upheld</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: The Mutuality Principle */}
            <section id="mutuality-principle" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>The Golden Rule of Indian Banking Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. The Mutuality Principle: When Set-Off Is Permitted
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The most important rule in banking set-off is the Mutuality Principle. Both debts must be between the exact same persons in the same legal role.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This rule requires two clear checks. First, the debtor and creditor must be identical. Second, the accounts must be held in the same capacity.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For instance, an individual holds a personal savings account and an individual loan with the same bank. Here, mutuality is satisfied. Both debts belong to the same person.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, if you hold money as a trustee, guardian, or business partner, the role changes completely. The bank cannot seize trust or firm money to pay your individual personal debt.
              </p>
            </section>

            {/* SECTION 4: Protected Accounts & Exemptions */}
            <section id="protected-accounts" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Account Classification &amp; Seizure Vulnerability</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Protected Accounts: When Bank Set-Off Is Illegal
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian banking law shields specific categories of deposits from set-off actions. If a lender took money from any protected account, the debit is completely void.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Deposit Classification</th>
                      <th className="p-3">Governing Legal Authority</th>
                      <th className="p-3">Banker Set-Off Permissibility</th>
                      <th className="p-3">Mandatory Legal Reason</th>
                      <th className="p-3">Recommended Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Specific Purpose Deposits</td>
                      <td className="p-3">Indian Contract Act, 1872</td>
                      <td className="p-3 text-emerald-600 font-semibold">Strictly Prohibited</td>
                      <td className="p-3">Deposited for a clear objective like taxes or rent.</td>
                      <td className="p-3">Submit letter showing the dedicated purpose.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Joint Savings Account</td>
                      <td className="p-3">Simla Banking Co. Precedents</td>
                      <td className="p-3 text-emerald-600 font-semibold">Strictly Prohibited</td>
                      <td className="p-3">Funds belong jointly to all named account holders.</td>
                      <td className="p-3">Demand instant reversal for non-borrower holder.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Trust &amp; Escrow Accounts</td>
                      <td className="p-3">Indian Trusts Act, 1882</td>
                      <td className="p-3 text-emerald-600 font-semibold">Strictly Prohibited</td>
                      <td className="p-3">Held in trust; not personal asset of holder.</td>
                      <td className="p-3">Provide trust deed or escrow agreement to branch.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Provident Fund &amp; Gratuity</td>
                      <td className="p-3">EPF Act Sec 10 / Gratuity Sec 13</td>
                      <td className="p-3 text-emerald-600 font-semibold">Strictly Prohibited</td>
                      <td className="p-3">Supreme Court immunity in Radhey Shyam Gupta.</td>
                      <td className="p-3">Trace deposit back to EPFO or gratuity trust.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Partnership Firm Account</td>
                      <td className="p-3">Indian Partnership Act, 1932</td>
                      <td className="p-3 text-emerald-600 font-semibold">Strictly Prohibited</td>
                      <td className="p-3">Cannot settle single partner individual debt.</td>
                      <td className="p-3">Submit partnership deed and formal objection.</td>
                    </tr>
                    <tr className="bg-rose-50/40">
                      <td className="p-3 font-medium text-slate-900">Sole Individual Savings</td>
                      <td className="p-3">Section 171 Contract Act</td>
                      <td className="p-3 text-rose-600 font-semibold">Permitted with Prior Notice</td>
                      <td className="p-3">Mutuality present; requires reasonable notice.</td>
                      <td className="p-3">Shift operative salary and savings to neutral bank.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Joint Accounts & Mandate Rules */}
            <section id="joint-accounts-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <UserCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Joint Ownership &amp; Operating Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Joint Accounts &amp; Set-Off: Survivor &amp; Mandate Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many banks commit a serious mistake by taking money from joint savings accounts. This happens when an individual defaults on an unsecured card, and the lender debits an account shared with a spouse or parent.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Money in a joint account belongs jointly to all account holders. High Court rulings like Simla Banking Co. v. Bhagwan Kuar confirmed this point. A bank cannot use joint funds to pay one person loan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Lenders often claim that an Either or Survivor mandate gives them debit rights. This claim is false. That mandate only allows convenient withdrawals. It does not make the innocent co-holder liable for a debt they never signed.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Unless both account holders signed the loan papers as co-borrowers, the debit is completely unauthorized. The non-defaulting holder can demand a prompt refund and file a complaint with the RBI.
              </p>
            </section>

            {/* SECTION 6: Mandatory Notice & Case Law */}
            <section id="mandatory-notice-law" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Fair Dealing Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Mandatory Notice Requirement: RBI &amp; High Court Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Can a bank take money from your savings account in secret? Lenders often rely on fine-print clauses claiming they can combine accounts without warning. Indian courts reject this unfair practice.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In State Bank of India v. Javed Akhtar Hussain, the Bombay High Court ruled that banks must give prior reasonable notice. Borrowers must be given time to manage family needs or show why the debit is improper.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a bank seizes money without notice, household rent bounces and living expenses are wiped out. The court noted that surprise debits breach the duty of care owed to customers.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI Fair Practices Code, banks must send written notice before combining accounts. Taking money without notice is a clear service deficiency under the Consumer Protection Act.
              </p>
            </section>

            {/* SECTION 7: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Visual Blueprint: Banker Right of Set-Off Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This infographic explains the legal tests for banker set-off under Section 171. It shows when account debits are permitted and when joint or trust funds are protected.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/bankers-right-of-set-off-savings-account-section-171-contract-act.jpg"
                    alt="Banker Right of Set-Off on Savings Account Section 171 Law"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Banking Rights Architecture • Section 171 Contract Act Compliant</span>
                  <a
                    href="/images/infographics/bankers-right-of-set-off-savings-account-section-171-contract-act.jpg"
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

            {/* SECTION 8: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Step-by-Step SOP: Reversing Illegal Account Debits
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank debited your savings or joint account unlawfully, follow this six-step procedure to demand a full reversal and protect your funds.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Download Stamped Bank Account Statements
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download full statements for both the deposit and loan accounts. Check the exact transaction date, amount, and confirm the lack of prior written debit advice.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Open an Operative Neutral Bank Account
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Open a new account in a separate bank where you have zero loans. Shift your monthly salary, client fees, and family savings to this safe account immediately.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Submit a Formal Written Objection to the Branch
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Deliver a written notice to the branch manager. Cite Section 171 limits, absence of mutuality, and the Bombay High Court ruling in SBI v. Javed Akhtar Hussain.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Escalate to the Principal Nodal Officer (PNO)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the branch does not reverse the debit within 7 days, email the bank Principal Nodal Officer. Demand an immediate reversal of the unauthorized transaction.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: File an RBI Integrated Ombudsman Complaint
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submit an online complaint on cms.rbi.org.in. The RBI Ombudsman can order the bank to refund the debited amount and award compensation for service deficiency.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Negotiate a Comprehensive OTS Agreement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Use your strong legal complaint to negotiate a One-Time Settlement with the bank. Settle the loan with a 50% to 75% waiver and collect your No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. 3-Tier Escalation Matrix: Bank Redressal to RBI
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a lender took your money without fair notice or violated mutuality rules, follow this official three-tier path to get your funds back quickly.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Level</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Relief &amp; Enforcement Scope</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: Branch / GRO</td>
                      <td className="p-3">Branch Manager &amp; Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Checks debit mandate, verifies account ownership, and removes unlawful holds.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Audits mutuality rules, orders refund of wrongful debits, and initiates OTS.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Issues binding orders on cms.rbi.org.in for full refund and financial compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Procedural Timeline Milestones */}
            <section id="procedural-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Procedural Milestones: From Default to Resolution
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks follow a standard path before taking money or sending recovery agents. Knowing these stages helps you protect your deposits in advance.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Delinquency Period</th>
                      <th className="p-3">Asset Classification</th>
                      <th className="p-3">Lender Action &amp; Set-Off Risk</th>
                      <th className="p-3">Defensive Borrower Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Gentle calls and automated SMS alerts. Very low set-off risk.</td>
                      <td className="p-3">Check your bank accounts. Ensure savings are in a separate bank.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Overdue letters arrive. System marks internal flags on linked accounts.</td>
                      <td className="p-3">Open a new neutral account and divert all upcoming cash credits.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Pre-NPA warnings start. High risk of automated set-off sweeps on deposits.</td>
                      <td className="p-3">Empty surplus balances from loan bank; cancel all auto-debit mandates.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Tagging</td>
                      <td className="p-3">Account marked NPA. Bank runs active sweeps on all linked customer balances.</td>
                      <td className="p-3">Audit the loan statement to remove unfair penal fees; send legal notice.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Prime OTS Window</td>
                      <td className="p-3">Bank sends legal recovery notices or initiates arbitration.</td>
                      <td className="p-3 font-bold text-slate-900">Negotiate a 50% to 75% compromise settlement with CredSettle.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 and Beyond</td>
                      <td className="p-3 font-mono text-[11px]">Loss Asset / ARC</td>
                      <td className="p-3">Debt assigned to Asset Reconstruction Company or written off.</td>
                      <td className="p-3">Pay the agreed settlement sum and get your official No Dues Certificate.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Specialized Real-World Cases */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                11. Specialized Scenarios: Salary, FDs &amp; Third Parties
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Bank set-off issues often touch salaries, fixed deposits, and business funds. Here is how Indian legal rules protect your money in each case.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Corporate Salary Accounts with Corporate Tie-Ups
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you took a loan from your salary bank, they may debit your paycheck immediately. To stop this, ask your HR in writing to disburse your salary to a separate bank.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-emerald-600" />
                    Fixed Deposits Created with Special Instructions
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Radhey Shyam Gupta ruling, fixed deposits made from pension or gratuity keep their legal protection. Clear bank records prevent lenders from taking these funds.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Sole Proprietorship vs Personal Loan Dues
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In India, a sole proprietor and their business are the same legal person. Because mutuality exists here, keep your business current account in a separate bank.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Time-Barred Loan Defaults (Beyond 3 Years)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Limitation Act, 1963, lenders cannot file court suits after 3 years. Taking money for old debts without a court order is treated as unfair by the RBI.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 12: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 13: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Banker Right of Set-Off
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal answers on banker general liens under Section 171 of the Contract Act, mutuality requirements, joint account protections, and dispute redressal under Indian banking regulations.
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

            {/* SECTION 14: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Statutory Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 171, General Lien of Bankers, Factors, Wharfingers, Attorneys and Policy Brokers.
                </li>
                <li>
                  <strong>Reserve Bank of India Master Directions:</strong> Fair Practices Code for Lenders and Banking Ombudsman Scheme Guidelines.
                </li>
                <li>
                  <strong>Supreme Court of India Ruling:</strong> Syndicate Bank v. Vijay Kumar &amp; Ors. (AIR 1992 SC 1066), Banker Lien as Implied Pledge.
                </li>
                <li>
                  <strong>Bombay High Court Precedent:</strong> State Bank of India v. Javed Akhtar Hussain &amp; Anr. (AIR 1993 Bom 87), Mandatory Prior Notice Requirement.
                </li>
                <li>
                  <strong>Punjab &amp; Haryana High Court Ruling:</strong> Simla Banking &amp; Industrial Co. Ltd. v. Bhagwan Kuar, Immunity of Joint Deposits from Individual Set-Off.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11), Deficiency of Service for Unauthorized Bank Account Debits.
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
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://edaakhil.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>e-Daakhil Consumer Commission</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://drat.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Debt Recovery Appellate Tribunal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/can-bank-deduct-money-from-another-account" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Set-Off Rules
                  </Link>
                  <Link href="/can-bank-freeze-my-savings-account-for-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Savings Account Freeze
                  </Link>
                  <Link href="/salary-account-frozen-by-bank" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Salary Account Freeze
                  </Link>
                  <Link href="/garnishee-order-bank-account-freeze-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Garnishee Order Defense
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF &amp; Gratuity Seizure Law
                  </Link>
                  <Link href="/pension-attachment-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pension Attachment Rules
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Agent Guidelines
                  </Link>
                  <Link href="/section-60-cpc-assets-property-exempt-from-bank-attachment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 60 CPC Exemptions
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
                Specialist in Indian banking law, Section 171 banker general liens, consumer protection, and structured NPA debt compromise settlements. Ashish regularly defends borrowers against unlawful account sweeps and aggressive bank actions.
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
                  Bank Siphoned Your Savings Account?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior legal team challenges illegal set-offs under Section 171, halts unauthorized account sweeps, and negotiates up to 75% loan settlement waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Bank Balance Now
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
                  <span>Statutory Protection • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Unlawful Set-Off:</strong> Strict enforcement of Section 171 limits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Joint Account Protection:</strong> Shielding non-borrower funds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Escalation:</strong> Rapid redressal for service deficiency.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official Bank Closure:</strong> Guaranteed No Dues Certificate.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/can-bank-deduct-money-from-another-account"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank Deduct from Another Account?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Cross-account deduction rules &rarr;</span>
                </Link>

                <Link
                  href="/can-bank-freeze-my-savings-account-for-loan"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank Freeze Savings Account?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Unfreeze bank account steps &rarr;</span>
                </Link>

                <Link
                  href="/salary-account-frozen-by-bank"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Salary Account Frozen by Bank
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Salary unfreeze legal remedies &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
