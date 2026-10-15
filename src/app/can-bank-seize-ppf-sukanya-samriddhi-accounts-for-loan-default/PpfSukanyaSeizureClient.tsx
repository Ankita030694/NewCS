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
  Landmark,
  HeartHandshake
} from 'lucide-react';

export default function PpfSukanyaSeizureClient() {
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
    { id: 'statutory-immunity', label: '1. Statutory Immunity: PPF Framework' },
    { id: 'sukanya-samriddhi-shield', label: '2. Sukanya Samriddhi: Minor Rights' },
    { id: 'asset-protection-matrix', label: '3. Asset Protection Matrix' },
    { id: 'banker-lien-defense', label: '4. Banker Lien Defense & Precedents' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Account Defense Protocol' },
    { id: 'statutory-defense', label: '7. Statutory Defense & Police Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance Matrix' },
    { id: 'procedural-timeline', label: '9. Procedural Milestones Timeline' },
    { id: 'specialized-scenarios', label: '10. Specialized Scenarios & Transfers' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank legally seize or attach my PPF account for loan default?',
      a: 'No. Under Section 14A of the Government Savings Promotion Act, 1873 and Section 60(1)(k) of the Code of Civil Procedure, 1908, money in a Public Provident Fund account cannot be attached by any court decree or creditor for loan default. Banks have zero legal power to freeze or seize your PPF balance.'
    },
    {
      q: "Can a bank touch or debit my daughter's Sukanya Samriddhi Yojana account?",
      a: 'No. The minor girl child is the sole beneficial owner of the Sukanya Samriddhi account. Under Indian banking law, a bank cannot appropriate a child’s funds for a parent’s personal debt due to lack of mutuality. Section 14A also bars court attachment for guardian debts.'
    },
    {
      q: 'Can a bank exercise a banker lien on PPF or Sukanya Samriddhi under Section 171?',
      a: 'No. The bank holds PPF and Sukanya Samriddhi deposits merely as a custodian for the Central Government, not as ordinary commercial deposits. Supreme Court precedents confirm that a banker general lien under Section 171 cannot override statutory protections of government savings schemes.'
    },
    {
      q: 'What happens if my PPF or Sukanya Samriddhi account is in the same bank where I defaulted?',
      a: 'The bank has no legal right to freeze or debit your PPF or SSY account. However, rogue branch managers may unlawfully restrict net banking access. You can protect your accounts by submitting a transfer request to move them to India Post or another neutral bank.'
    },
    {
      q: 'Can recovery agents visit my home or threaten to auction my PPF savings?',
      a: 'No. Recovery agents making false claims about auctioning PPF or seizing your daughter’s Sukanya account violate RBI Fair Practices Code. Such harassment constitutes criminal intimidation under Section 351 of the Bharatiya Nyaya Sanhita (BNS), 2023.'
    },
    {
      q: 'Can the Income Tax Department attach PPF, and is that different from bank loans?',
      a: 'Yes, there is a legal difference. While banks, credit card companies, and civil courts are completely barred from attaching PPF, the Income Tax Department has separate statutory powers for unpaid sovereign tax arrears. Private bank loan defaults cannot trigger PPF attachment.'
    },
    {
      q: 'Can a bank refuse to accept the annual minimum deposit for PPF or Sukanya Samriddhi?',
      a: 'No. Banks act as authorized agents of the Ministry of Finance and must accept statutory minimum annual deposits (minimum ₹500). Refusing deposits to coerce loan repayment is an illegal act that can be reported directly to the RBI Integrated Ombudsman.'
    },
    {
      q: 'How can I transfer my PPF or Sukanya Samriddhi account to India Post?',
      a: 'Submit Form SB-10 (account transfer application) along with your original passbook and KYC documents at your current bank branch. The bank is legally mandated to transfer the account and cheque directly to your chosen Post Office branch within thirty days.'
    },
    {
      q: 'Can I voluntarily withdraw money from my PPF to settle my loan through OTS?',
      a: 'Yes, voluntary partial withdrawal is permitted under PPF rules after 5 financial years. You can use these withdrawn funds to negotiate an official One-Time Settlement (OTS) with 50% to 75% waivers on interest and penalties, completely at your own discretion.'
    },
    {
      q: 'How does CredSettle help borrowers facing threats against small savings accounts?',
      a: 'CredSettle provides complete legal defense by issuing formal notices against unauthorized bank liens, halting recovery agent harassment, guiding account transfers to neutral institutions, and negotiating structured OTS waivers with bank zonal credit committees.'
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
            <span>Government Small Savings Schemes &amp; Child Asset Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can Bank Seize PPF and Sukanya Samriddhi for Loan Default?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A comprehensive legal guide for borrowers facing personal loan or credit card default. Understand Section 14A of the Government Savings Promotion Act, minor ownership rights in Sukanya Samriddhi, and how to stop illegal bank liens.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your PPF &amp; SSY Savings</span>
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
                  <span>Statutory Savings Protection Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Section 14A of the Government Savings Promotion Act, 1873 and Section 60 CPC.
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
                <span>EXECUTIVE BRIEF: PPF &amp; SUKANYA SAMRIDDHI IMMUNITY FROM SEIZURE</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Absolute Court Attachment Bar:</strong> Under Section 14A of the Government Savings Promotion Act, 1873, PPF balances cannot be attached by any court decree or lender.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Child Sole Ownership in SSY:</strong> The minor girl child is the legal owner of the Sukanya Samriddhi account. A parent&apos;s loan default cannot touch the daughter&apos;s money due to lack of mutuality.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Banker Lien Under Section 171:</strong> Banks hold small savings deposits purely as government custodians. They cannot exercise a contractual banker&apos;s lien over public trust funds.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">India Post Transfer Remedy:</strong> If your creditor bank threatens to restrict your account, you have the legal right to transfer both PPF and SSY to your local Post Office branch.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Criminal Intimidation Protections:</strong> Collection agents threatening to auction your family savings commit a punishable offence under Section 351 of the Bharatiya Nyaya Sanhita (BNS).
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Immunity: PPF Legal Protection Framework */}
            <section id="statutory-immunity" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Parliament Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Immunity: PPF Legal Protection Framework
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When borrowers face personal loan or card defaults, recovery agents make threats. They often claim the bank will seize your Public Provident Fund (PPF) balance. They also say court orders will take your family savings. These claims are completely false.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Parliament created the PPF scheme to build long-term savings for citizens. To safeguard these funds, the law gives PPF accounts total protection from loan recovery.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 14A of the Government Savings Promotion Act, 1873 protects your account. It states that no court decree can attach money in your PPF account for any debt.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 60(1)(k) of the Civil Procedure Code also shields government savings deposits. Whether your PPF is in SBI, HDFC, or the Post Office, no bank or court can seize your balance for a loan default.
              </p>
            </section>

            {/* SECTION 2: Sukanya Samriddhi Shield: Minor Beneficial Ownership */}
            <section id="sukanya-samriddhi-shield" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HeartHandshake className="w-4 h-4 text-[#1886ff]" />
                <span>Child Welfare Law &amp; Ownership Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Sukanya Samriddhi Shield: Minor Beneficial Ownership
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The government launched Sukanya Samriddhi Yojana (SSY) to secure the future of the girl child. When a parent defaults on a personal loan, banks sometimes target the daughter&apos;s account. This action breaks Indian banking law.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the Sukanya Samriddhi scheme rules, the minor girl is the sole owner of the account. The parent acts only as a guardian until she turns 18. The deposited money does not belong to the parent.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banking law follows the rule of mutuality. A bank can only set off debts between the same parties. A personal loan is the private debt of the parent. The bank cannot take a child&apos;s money to pay a parent&apos;s loan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 14A of the Government Savings Promotion Act also protects SSY accounts from court orders. Any bank attempt to freeze or debit your daughter&apos;s account is an illegal act.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Ledger Audit &amp; Asset Protection Math</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹10 Lakh Personal Loan Default</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Financial Asset / Claim Component</th>
                        <th className="p-3">Bank Claim / Asset Value</th>
                        <th className="p-3">Statutory Legal Immunity Status</th>
                        <th className="p-3 text-right">Protected Balance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Public Provident Fund (PPF Account)</td>
                        <td className="p-3">₹6,50,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Statutory Immunity (Sec 14A)</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹6,50,000 (Fully Immune)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Sukanya Samriddhi Yojana (Daughter)</td>
                        <td className="p-3">₹4,20,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Minor Trust Immunity (No Mutuality)</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹4,20,000 (Fully Immune)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Defaulted Personal Loan Ledger Claim</td>
                        <td className="p-3 text-rose-600 font-bold">₹10,00,000</td>
                        <td className="p-3 text-blue-600 font-semibold">Civil Debt: Negotiable under RBI OTS Rules</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹3,20,000 (Negotiated OTS)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Net Family Savings Preservation</td>
                        <td className="p-3 text-slate-900">₹10,70,000 Saved</td>
                        <td className="p-3 text-emerald-700">68% Loan Debt Waiver Secured via OTS</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">100% Savings Shielded</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Asset Protection Matrix: Small Savings vs Bank Dues */}
            <section id="asset-protection-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Asset Vulnerability &amp; Shield Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Asset Protection Matrix: Small Savings vs Bank Dues
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers facing debt distress must know which savings have legal protection. Some assets stay safe by law, while ordinary accounts remain open to bank recovery.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Regular savings accounts and fixed deposits can face court attachment. In contrast, government welfare accounts enjoy full legal protection from bank claims.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Asset Classification</th>
                      <th className="p-3">Governing Legislation</th>
                      <th className="p-3">Court Attachment Immunity</th>
                      <th className="p-3">Banker Lien Vulnerability</th>
                      <th className="p-3">Strategic Protection SOP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Public Provident Fund (PPF)</td>
                      <td className="p-3">Govt Savings Act, 1873 (Sec 14A)</td>
                      <td className="p-3 text-emerald-600 font-semibold">Absolute Immunity</td>
                      <td className="p-3 text-emerald-600 font-semibold">Zero Lien Permitted</td>
                      <td className="p-3">Maintain active or transfer to India Post.</td>
                    </tr>
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Sukanya Samriddhi Yojana (SSY)</td>
                      <td className="p-3">SSY Scheme, 2019 &amp; Sec 14A</td>
                      <td className="p-3 text-emerald-600 font-semibold">Absolute Immunity</td>
                      <td className="p-3 text-emerald-600 font-semibold">Zero Lien Permitted</td>
                      <td className="p-3">Sole minor ownership blocks parent debt.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Employees Provident Fund (EPF)</td>
                      <td className="p-3">EPF Act, 1952 (Sec 10)</td>
                      <td className="p-3 text-emerald-600 font-semibold">Absolute Immunity</td>
                      <td className="p-3 text-emerald-600 font-semibold">Zero Lien Permitted</td>
                      <td className="p-3">Disburse retirement funds to neutral bank.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Commercial Savings Account</td>
                      <td className="p-3">Banking Regulation Act, 1949</td>
                      <td className="p-3 text-rose-600">Vulnerable to Garnishee Order</td>
                      <td className="p-3 text-rose-600">Immediate Right of Set-Off</td>
                      <td className="p-3">Do not hold surplus cash in creditor bank.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Fixed Deposits in Creditor Bank</td>
                      <td className="p-3">Indian Contract Act, 1872</td>
                      <td className="p-3 text-rose-600">Subject to Attachment</td>
                      <td className="p-3 text-rose-600">General Banker Lien (Sec 171)</td>
                      <td className="p-3">Liquidate voluntarily for structured OTS deal.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Mutual Funds &amp; Demat Shares</td>
                      <td className="p-3">Civil Procedure Code, 1908</td>
                      <td className="p-3 text-rose-600">Attachable by DRT or Court</td>
                      <td className="p-3 text-amber-600">Subject to Judicial Freezing</td>
                      <td className="p-3">Protect through timely legal debt resolution.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Banker Lien Defense: Contract Act vs Statutory Law */}
            <section id="banker-lien-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Banker Lien Defense: Contract Act vs Statutory Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When borrowers challenge bank freezes on PPF or SSY accounts, banks often cite Section 171 of the Indian Contract Act. This section gives banks a general lien over customer money.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, Indian courts have settled this issue clearly. In PPF and Sukanya accounts, the bank acts only as an agent for the Central Government. The funds belong to the government public account.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A bank&apos;s private contract rule cannot overrule a special law passed by Parliament. Specific welfare statutes always defeat general contract rules.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In Radhey Shyam Gupta v. Punjab National Bank, the Supreme Court ruled that social security funds keep their protection. Courts cannot attach them. In Central Bank of India v. V.R. Murthy, courts confirmed that banks cannot take child savings for a parent&apos;s loan.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint: PPF & Sukanya Account Protection */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: PPF &amp; Sukanya Account Protection
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This clear visual roadmap shows how the law protects PPF and Sukanya accounts from bank recovery. It highlights key rights and safety steps.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/can-bank-seize-ppf-sukanya-samriddhi-accounts-for-loan-default.jpg"
                    alt="PPF and Sukanya Samriddhi Account Protection Against Bank Loan Default Law"
                    width={1200}
                    height={675}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="w-full h-auto rounded-xl object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Small Savings Legal Shield • Section 14A Government Savings Act Compliant</span>
                  <a
                    href="/images/infographics/can-bank-seize-ppf-sukanya-samriddhi-accounts-for-loan-default.jpg"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View High-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP: 6-Stage Account Defense Protocol */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: 6-Stage Account Defense Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a lender threatens your PPF or Sukanya Samriddhi account, follow this simple six-stage plan to secure your funds and settle your debt.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Check Your Account Status
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Review your passbook and online banking portal. Make sure your PPF and Sukanya accounts are active with clean KYC papers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Pay the Yearly Minimum Deposit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Deposit the basic ₹500 yearly into both PPF and SSY. This keeps both accounts regular and avoids default fees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Apply for Transfer to India Post
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If your bank causes trouble, fill Form SB-10 to move your accounts to the Post Office. The bank must complete this transfer.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Send a Formal Legal Warning
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Send a formal lawyer notice to the bank zonal office. Cite Section 14A to warn them against illegal debits or freezes.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Report Agent Threats to Police
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If agents threaten your family or visit your home, record them. File a police complaint under BNS Section 351 for intimidation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Negotiate OTS and Get No Dues
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    With your savings safe, negotiate a 50% to 75% loan settlement with bank leaders. Pay the agreed sum and get your No Dues letter.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Defense: Criminal Intimidation Protections */}
            <section id="statutory-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Defenses &amp; Borrower Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Defense: Criminal Intimidation Protections
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Collection agents who make false threats about taking small savings break the law. You have strong legal remedies against unlawful pressure.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 351 &amp; 352 BNS (Criminal Intimidation)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Threatening a borrower with false asset seizure or arrest is a crime under BNS law, punishable with jail time and fines.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>RBI Fair Practices Code Mandate</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI rules strictly forbid agents from harassing family members, using harsh words, or making false legal threats.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Banking Regulation Act Agency Doctrine</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks act only as government agents for small savings. They cannot take government deposits to clear private debts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Constitutional Article 21 &amp; 300A Defense</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court rules that basic social savings are part of the right to livelihood. No lender can take them without law.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Grievance Redressal Steps */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Grievance Redressal Steps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If branch managers or agents threaten your small savings, use the Reserve Bank of India grievance complaint process.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Tier</th>
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
                      <td className="p-3">Halts unauthorized lien flags, stops agent threats, and registers formal hardship request.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Investigates wrongful set-off attempts, enforces statutory compliance, and initiates OTS.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Issues binding directions via cms.rbi.org.in to reverse illegal holds and penalize rogue lenders.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline: Default Stages to Account Safety */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Default Stages to Account Safety
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing loan default stages helps you protect your small savings before bank recovery actions start.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Delinquency Window</th>
                      <th className="p-3">Regulatory Asset Status</th>
                      <th className="p-3">Lender Collection Actions</th>
                      <th className="p-3">Strategic Borrower Response</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Automated payment reminder SMS and soft telephone calls.</td>
                      <td className="p-3">Ensure PPF and SSY minimum annual deposits are up to date.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Persistent calls and formal overdue payment reminders.</td>
                      <td className="p-3">Consider initiating account transfer of PPF/SSY to India Post.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Pre-NPA warnings and deployment of third-party recovery agents.</td>
                      <td className="p-3">Submit written instructions citing Section 14A immunity to the bank.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Tagging</td>
                      <td className="p-3">Loan marked Non-Performing Asset; capital provisioning triggered.</td>
                      <td className="p-3">Audit the loan ledger and eliminate inflated penal interest charges.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Prime OTS Window</td>
                      <td className="p-3">Legal demand notices or arbitration letters dispatched.</td>
                      <td className="p-3 font-bold text-slate-900">Negotiate a 50% to 75% compromise settlement with CredSettle.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 and Beyond</td>
                      <td className="p-3 font-mono text-[11px]">Loss Asset / ARC</td>
                      <td className="p-3">Debt written off or sold to Asset Reconstruction Company.</td>
                      <td className="p-3">Execute settlement payment and secure the official No Dues Certificate.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Scenarios: Bank Freeze & Account Transfer */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Bank Freeze &amp; Account Transfer
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Loan defaults can create disputes at your local bank branch. Here is how small savings rules work in practical cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Same-Bank Branch Administrative Freeze
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your bank blocks online access to your PPF or SSY, visit the branch with a formal letter. If they refuse to help, transfer the account to the Post Office.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Refusal to Accept Annual Minimum Deposits
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A bank cannot refuse your yearly ₹500 deposit to force loan payments. This breaks government rules and can be sent to the RBI Ombudsman.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Death of Guardian Operating Sukanya Account
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the parent dies with loan debts, the bank cannot take the SSY balance. The other parent or guardian takes over the account with no loan liability.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    Account Transfer to India Post (Post Office)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You can transfer PPF and SSY to the Post Office using Form SB-10. The Post Office does not issue personal loans, so your savings stay safe.
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
                Frequently Asked Questions: PPF &amp; Sukanya Seizure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding Public Provident Fund protection, Sukanya Samriddhi immunity, illegal banker liens, and borrower rights.
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
                  <strong>Government Savings Promotion Act, 1873:</strong> Section 14A, Statutory Protection Against Court Attachment of Small Savings Accounts.
                </li>
                <li>
                  <strong>Public Provident Fund Scheme, 2019:</strong> Ministry of Finance Notification G.S.R. 915(E), Account Operations and Withdrawal Provisions.
                </li>
                <li>
                  <strong>Sukanya Samriddhi Account Scheme, 2019:</strong> Ministry of Finance Notification G.S.R. 914(E), Minor Girl Child Beneficial Ownership Rights.
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Section 60(1), Proviso Clause (k), Non-Attachable Government and Statutory Deposits.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 171, Limits on Banker General Lien Over Government Welfare Schemes.
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> Radhey Shyam Gupta v. Punjab National Bank (2009) and Central Bank of India v. V.R. Murthy.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.indiapost.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Department of Posts (India Post)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://dea.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Ministry of Finance (DEA)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF &amp; Gratuity Seizure Rules
                  </Link>
                  <Link href="/pension-attachment-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pension Attachment Rules
                  </Link>
                  <Link href="/section-60-cpc-assets-property-exempt-from-bank-attachment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 60 CPC Exemptions
                  </Link>
                  <Link href="/salary-account-frozen-by-bank" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Salary Account Freeze
                  </Link>
                  <Link href="/garnishee-order-bank-account-freeze-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Garnishee Order Defense
                  </Link>
                  <Link href="/can-bank-deduct-money-from-another-account" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Set-Off Rules
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/can-bank-freeze-my-savings-account-for-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Savings Account Freeze
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Agent Guidelines
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
                Expert in banking compliance, consumer debt protection, statutory social security immunities, and NPA compromise settlements with extensive experience defending salaried borrowers against unlawful recovery practices.
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
                  Bank Threatening Your PPF or SSY?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior legal resolution specialists stop unlawful bank lien threats, invoke statutory protections under Section 14A, and negotiate up to 75% loan settlement waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Savings Now
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
                  <span><strong>Zero Small Savings Seizure:</strong> 100% legal immunity enforcement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Child Asset Shield:</strong> Protection for Sukanya Samriddhi accounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Post Office Transfer:</strong> Form SB-10 execution assistance.</span>
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
                  href="/can-bank-seize-epf-provident-fund-for-loan-recovery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    EPF &amp; Gratuity Seizure Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Statutory retirement defense &rarr;</span>
                </Link>

                <Link
                  href="/section-60-cpc-assets-property-exempt-from-bank-attachment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 60 CPC Asset Protection
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Exempt property legal list &rarr;</span>
                </Link>

                <Link
                  href="/pension-attachment-for-loan-recovery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Pension Attachment for Loan Recovery
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Pension defense &amp; court rulings &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
