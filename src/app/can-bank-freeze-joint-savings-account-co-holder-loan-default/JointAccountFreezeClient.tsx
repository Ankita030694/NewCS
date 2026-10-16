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
  Landmark,
  Users
} from 'lucide-react';

export default function JointAccountFreezeClient() {
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
    { id: 'legal-verdict', label: '1. Legal Verdict & Bank Authority' },
    { id: 'doctrine-mutuality', label: '2. Doctrine of Mutuality: Section 171 Rules' },
    { id: 'operating-mandates', label: '3. Operating Mandates: Either or Survivor vs Jointly' },
    { id: 'garnishee-orders', label: '4. Garnishee Orders & Civil Court Attachment' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'action-protocol', label: '6. 6-Stage Action Protocol to Unfreeze Account' },
    { id: 'beneficial-ownership', label: '7. Proving Beneficial Ownership of Funds' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance & Redressal Matrix' },
    { id: 'procedural-timeline', label: '9. Delinquency Timeline to Account Freeze' },
    { id: 'special-scenarios', label: '10. Special Scenarios: Spouses, FDs & Co-Borrowers' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank freeze a joint savings account if only one co-holder defaults on a loan?',
      a: 'Under the Doctrine of Mutuality and Section 171 of the Indian Contract Act, a bank cannot legally freeze or set off joint account funds for the individual personal debt of one co-holder. However, banks often place an automated debit freeze that the innocent co-holder must challenge with proof of beneficial ownership.'
    },
    {
      q: 'What is the Doctrine of Mutuality in banking law regarding set-off?',
      a: 'The Doctrine of Mutuality requires that debts must exist between the exact same parties in the same legal right. An individual debt owed solely by Holder A cannot be set off against funds held jointly by Holder A and Holder B, because Holder B has an independent property right in the account.'
    },
    {
      q: 'Does an Either or Survivor mandate allow the bank to seize the entire balance?',
      a: 'No. An Either or Survivor mandate is only an operational instruction for transacting on the account during life. It does not establish beneficial ownership. Indian courts have affirmed that true ownership depends on who contributed the money.'
    },
    {
      q: 'Can a court issue a Garnishee Order against a joint account for an individual debt?',
      a: 'Under landmark rulings like Hirschorn v. Evans and Indian civil procedure, a garnishee order against one judgment debtor cannot attach a joint account belonging to him and a non-debtor, unless the creditor proves that the funds belong exclusively to the debtor.'
    },
    {
      q: 'What happens if the joint account co-holder is also a co-borrower or guarantor?',
      a: 'If both account holders signed the loan as co-borrowers or if the co-holder signed as a personal guarantor, their liability is joint and several under Section 128 of the Indian Contract Act. In that scenario, the bank possesses the legal right of set-off.'
    },
    {
      q: 'Can a bank seize a wife\'s salary or pension deposited in a joint account with her husband?',
      a: 'No. A wife\'s salary, pension, or personal savings deposited into a joint account belong to her beneficially. By providing salary slips and bank statements, she can compel the bank to remove the debit freeze and release her funds.'
    },
    {
      q: 'Can a bank freeze a joint account held in a completely different bank?',
      a: 'No. A creditor bank has no banker lien or set-off authority over accounts maintained at another banking institution. They can only reach external accounts through a formal court order or Debt Recovery Tribunal decree.'
    },
    {
      q: 'Can a bank debit a joint fixed deposit for one co-holder\'s personal loan?',
      a: 'A bank cannot set off a joint fixed deposit for an individual debt unless both joint depositors signed a pledge or mandate letter authorizing the bank to lien the deposit against that specific credit facility.'
    },
    {
      q: 'What should the innocent co-holder do immediately if the joint account is frozen?',
      a: 'The innocent co-holder must immediately submit a written objection letter to the branch manager with proof of source of funds, demand account bifurcation, redirect future salary credits, and escalate to the Principal Nodal Officer and RBI Ombudsman.'
    },
    {
      q: 'How does CredSettle assist co-holders facing wrongful joint account freezes?',
      a: 'CredSettle issues statutory legal notices under Section 171 of the Contract Act and Consumer Protection Act, halts recovery harassment against non-borrowers, secures account de-freezing, and negotiates up to 75% debt settlement waivers for the borrower.'
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
            <Users className="w-3.5 h-3.5" />
            <span>Joint Account Rights &amp; Banking Law Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can Bank Freeze Joint Savings Account for Co-Holder Default?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Understand your legal protections when a joint bank account faces a freeze or set-off because of one co-holder loan default. Learn the Doctrine of Mutuality, beneficial ownership rights, and RBI grievance remedies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your Joint Account</span>
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
                  <span>Doctrine of Mutuality Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Section 171 Contract Act and established Supreme Court jurisprudence.
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
                <span>EXECUTIVE BRIEF: JOINT ACCOUNT FREEZE &amp; SET-OFF IMMUNITY</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Doctrine of Mutuality:</strong> A bank cannot set off an individual personal loan against money held in a joint account. The debts lack mutuality between identical parties.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Operating Mandate vs Ownership:</strong> An Either or Survivor mandate grants transaction authority during life. It does not transfer beneficial ownership of the money.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Innocent Co-Holder Immunity:</strong> If the non-defaulting co-holder did not sign as a co-borrower or guarantor, their salary and savings are legally protected.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Garnishee Order Protection:</strong> Court decrees against one debtor cannot attach joint funds unless the creditor proves the debtor owns 100% of the deposit.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Immediate Legal Remedy:</strong> Submit a written source-of-funds objection to the branch manager, demand bifurcation, and escalate to the RBI Ombudsman.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Legal Verdict */}
            <section id="legal-verdict" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Mandate &amp; Banking Principles</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Legal Verdict: Can Bank Freeze Joint Savings Account?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The straightforward answer under Indian banking jurisprudence is clear. A bank has no legal right to freeze or confiscate the entire balance of a joint savings account to satisfy the separate, individual loan default of one co-holder. However, in practical daily banking, lenders frequently place automated debit freezes on joint accounts when a loan turns into a Non-Performing Asset (NPA).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This administrative freeze occurs because core banking software links all accounts sharing the defaulting borrower Permanent Account Number (PAN). When a loan account reaches 90 days of non-payment, automated risk systems flag every connected account. They impose debit restrictions without human scrutiny of who actually owns the underlying deposit.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                While the bank computer may initiate this debit block automatically, the action violates fundamental contract principles unless both parties signed the loan agreement. An innocent spouse, parent, sibling, or business partner who contributed money to that joint account possesses an absolute legal right to demand the immediate release of their funds.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To reverse this freeze, the non-defaulting co-holder must understand the distinction between operational mandates and beneficial ownership. You must demonstrate that the funds in the account represent your personal earnings, pension, or business income. Once proven, the bank is legally obligated to lift the restriction.
              </p>
            </section>

            {/* SECTION 2: Doctrine of Mutuality */}
            <section id="doctrine-mutuality" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Indian Contract Act &amp; Right of Set-Off</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Doctrine of Mutuality: Section 171 Contract Act Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks often justify account freezes by invoking the banker right of general lien under Section 171 of the Indian Contract Act, 1872. Section 171 allows a bank to retain goods and securities bailed to them as security for a general balance of account. Over time, commercial banks expanded this concept into an equitable right of set-off, enabling them to combine accounts to recover overdue liabilities.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, the exercise of set-off is strictly governed by the Doctrine of Mutuality. Under this doctrine, a debt due from one person cannot be set off against a debt due to him and others jointly. For set-off to be legally valid, the money held by the bank and the debt owed to the bank must exist between the exact same parties and in the exact same legal right.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When Holder A defaults on an individual personal loan or credit card, the debt is owed solely by Holder A. The joint account, however, belongs jointly to Holder A and Holder B. Because Holder B owes nothing to the bank, there is no mutuality of claims between the bank and Holder B. Confiscating Holder B money to pay Holder A debt constitutes unlawful conversion of property and a deficiency of service under the Consumer Protection Act, 2019.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Joint Account Ledger Audit &amp; Risk Math</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹8.5 Lakh Total Joint Exposure</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Financial Component</th>
                        <th className="p-3">Ledger Value</th>
                        <th className="p-3">Legal Ownership &amp; Immunity Status</th>
                        <th className="p-3 text-right">Protected Balance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Co-Holder B Salary Credits (Non-Debtor)</td>
                        <td className="p-3 font-semibold text-emerald-600">₹5,50,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Beneficial Title (Mutuality Bar)</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹5,50,000 (Fully Protected)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Co-Holder A Share (Defaulting Debtor)</td>
                        <td className="p-3 text-slate-900 font-medium">₹3,00,000</td>
                        <td className="p-3 text-amber-600 font-semibold">Vulnerable to Attachment after Severance</td>
                        <td className="p-3 text-right font-bold text-amber-700">Subject to Direct OTS</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Overdue Personal Loan Claim on Holder A</td>
                        <td className="p-3 text-rose-600 font-bold">₹9,80,000</td>
                        <td className="p-3 text-blue-600 font-semibold">Individual Debt: No Claim Against Holder B</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹3,20,000 (Target OTS Sum)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Net Asset Protection Outcome</td>
                        <td className="p-3 text-slate-900">₹5.5L Saved</td>
                        <td className="p-3 text-emerald-700">67% Haircut on Defaulted Loan Claim</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">Innocent Funds Freed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Operating Mandates Comparison */}
            <section id="operating-mandates" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Operating Mandate Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Operating Mandates: Either or Survivor vs Jointly
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many bank managers misinterpret account opening mandates when justifying freezes. They argue that because an account is marked Either or Survivor, either co-holder can withdraw the entire balance, giving the bank the right to debit the full balance for either holder loan default.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This argument has been repeatedly rejected by Indian courts. An operating mandate is merely an administrative agreement between depositors and the bank regarding who can sign cheques or authorize online transfers. It is not an assignment of title. The right to operate an account does not create ownership of the funds deposited by another person.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Account Mandate</th>
                      <th className="p-3">Operating Authority</th>
                      <th className="p-3">Banker Set-Off Risk</th>
                      <th className="p-3">Garnishee Vulnerability</th>
                      <th className="p-3">Legal Protection Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Either or Survivor (E or S)</td>
                      <td className="p-3">Either holder operates independently during lifetime.</td>
                      <td className="p-3 text-amber-600 font-semibold">High Automated Risk</td>
                      <td className="p-3 text-emerald-600 font-semibold">Fails without Severance</td>
                      <td className="p-3">Submit source tracing to defeat set-off immediately.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Jointly (Operated Jointly)</td>
                      <td className="p-3">All holders must sign every transaction together.</td>
                      <td className="p-3 text-emerald-600 font-semibold">Very Low Risk</td>
                      <td className="p-3 text-emerald-600 font-semibold">Strictly Protected</td>
                      <td className="p-3">Bank cannot touch funds without all signatures.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Former or Survivor (F or S)</td>
                      <td className="p-3">Only former operates; survivor operates on death.</td>
                      <td className="p-3 text-amber-600 font-medium">Moderate (Depends on Debtor)</td>
                      <td className="p-3 text-slate-700">Former share only</td>
                      <td className="p-3">If former defaults, survivor can assert contingent share.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Anyone or Survivor</td>
                      <td className="p-3">Any one of 3 or more holders operates alone.</td>
                      <td className="p-3 text-amber-600 font-semibold">High Automated Risk</td>
                      <td className="p-3 text-emerald-600 font-semibold">Fails without Severance</td>
                      <td className="p-3">Demand immediate bifurcation of non-debtor contributions.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Joint Fixed Deposit</td>
                      <td className="p-3">Operated under deposit mandate instructions.</td>
                      <td className="p-3 text-emerald-600 font-semibold">Zero without Mandate</td>
                      <td className="p-3 text-slate-700">Debtor moiety only</td>
                      <td className="p-3">Refuse premature liquidation consent as non-debtor.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Garnishee Orders & Civil Court Attachment */}
            <section id="garnishee-orders" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Garnishee Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Garnishee Orders &amp; Civil Court Attachment Under CPC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a creditor bank obtains a court decree or a certificate of recovery from a Debt Recovery Tribunal (DRT), they often apply for a Garnishee Order under Order 21 Rule 46 of the Code of Civil Procedure (CPC), 1908. A garnishee order directs a third party (the bank) holding money for the judgment debtor not to pay it to the debtor, but to pay it into court.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The legal question is whether a garnishee order naming only one co-holder can attach a joint account. High Courts in India and established English common law precedents have answered decisively in the negative.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In the leading authority of Hirschorn v. Evans (1938) 2 KB 801, the Court of Appeal established that a garnishee order against a husband cannot attach a bank account opened in the joint names of the husband and wife. The court held that the debt owed by the bank to the joint depositors is a joint debt. It cannot be converted into an individual debt to satisfy a decree against one of them.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This rule has been consistently followed in India in cases such as Simla Banking &amp; Industrial Co. Ltd. v. Bhagwan Kuar (AIR 1928 Lah 316) and Radha Raman Choudhary v. Chota Nagpur Banking Association Ltd. (AIR 1944 Pat 368). In State Bank of India v. Javed Akhtar Hussain (AIR 1993 Bom 87), the Bombay High Court held that a bank cannot unilaterally freeze an account without due notice and without demonstrating mutuality of debt.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Joint Account Freeze Legal Shield
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This legal blueprint explains how the Doctrine of Mutuality and Section 171 of the Indian Contract Act protect innocent joint co-holders from illegal bank freezes and unilateral set-off debits.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/can-bank-freeze-joint-savings-account-co-holder-loan-default.jpg"
                    alt="Bank Freeze Joint Savings Account Co-Holder Loan Default Rules"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>CredSettle Joint Account Protection Framework • Section 171 Contract Act Compliant</span>
                  <a
                    href="/images/infographics/can-bank-freeze-joint-savings-account-co-holder-loan-default.jpg"
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

            {/* SECTION 6: 6-Stage Action Protocol */}
            <section id="action-protocol" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Action Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. 6-Stage Action Protocol to Unfreeze Joint Accounts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your joint bank account has been placed under a debit freeze because of a co-holder loan default, follow this verified six-stage protocol to unfreeze your funds and restore banking operations.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Submit Written Objection &amp; Source Proof
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submit a formal written objection to the branch manager. Attach bank account statements, salary slips, pension sanction orders, or business invoices proving that you contributed the deposited money.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Demand Account Bifurcation &amp; Lien Segregation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Demand that the bank bifurcate the account immediately. Even if the bank claims a lien on the defaulting co-holder presumed share, they cannot freeze your independent share under Indian law.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Divert Inflows to a Neutral Bank Account
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Immediately notify your payroll department, clients, or pension authority to stop depositing funds into the frozen joint account. Open an individual account in a bank where neither holder has unpaid debt.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Issue Formal Legal Notice Under Section 171
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Have an advocate issue a legal demand notice to the bank zonal office. Cite lack of mutuality, breach of contract, and consumer deficiency, giving the bank 7 business days to lift the freeze.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Escalate to Principal Nodal Officer &amp; RBI Ombudsman
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the branch fails to act, file a digital complaint with the bank Principal Nodal Officer and escalate to the RBI Integrated Ombudsman at cms.rbi.org.in for immediate regulatory intervention.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Resolve Defaulting Loan via Structured OTS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    With your personal funds protected, assist the defaulting co-holder in negotiating a formal One-Time Settlement (OTS). CredSettle helps secure 50% to 75% waivers on accumulated interest and penalties.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Proving Beneficial Ownership */}
            <section id="beneficial-ownership" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Beneficial Ownership Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Beneficial Ownership Defense: Proving Source of Funds
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In banking litigation, courts recognize that legal ownership follows the contributor of the funds. Establishing that you are the beneficial owner of the frozen balance dismantles the bank claim of set-off. Here are the primary documentary evidences used to prove your title.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <CreditCard className="w-4 h-4" />
                    <span>Salary Slip &amp; Employer Form 16 Records</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Matching electronic salary credits from your employer direct into the joint account provides conclusive proof that the deposited funds constitute your personal compensation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Pension &amp; Government Social Security Tracing</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pension credits from central or state authorities maintain statutory immunity under Section 11 of the Pensions Act and Section 60(1)(g) of the CPC, making any freeze illegal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Gift Deeds &amp; Ancestral Inheritance Proceeds</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Monies received through registered gift deeds, inheritance payouts, or ancestral land sales credited into the account establish separate sole ownership in favour of the recipient.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Independent Professional &amp; Business Inflows</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    GST returns, client TDS certificates, and professional service invoices clearly distinguish the non-defaulting co-holder commercial earnings from the debtor personal finances.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Branch to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the branch manager refuses to unfreeze your joint account or ignores your proof of funds, escalate through the Reserve Bank of India mandated three-tier grievance redressal framework.
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
                      <td className="p-3 font-bold text-slate-900">Level 1: Branch / GRO</td>
                      <td className="p-3">Branch Manager &amp; Grievance Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Submits source tracing documents; requests manual removal of debit block on innocent co-holder share.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO Desk</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Audits set-off legality, verifies absence of co-borrower liability, and orders reversal of wrongful debits.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Issues binding directions via cms.rbi.org.in, unfreezes account, and awards compensation for wrongful freeze.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Delinquency to Account Freeze
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding how an overdue loan progresses through standard delinquency cycles helps you anticipate when banks attempt account freezes and when to execute defensive steps.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Delinquency Window</th>
                      <th className="p-3">Asset Classification</th>
                      <th className="p-3">Bank Action on Joint Accounts</th>
                      <th className="p-3">Innocent Co-Holder Defense</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Automated SMS alerts and telephonic payment reminders.</td>
                      <td className="p-3">Ensure your independent income is not deposited with the loan bank.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Overdue letters dispatched; internal system risk flags created.</td>
                      <td className="p-3">Open a new individual account in a neutral bank without loan exposure.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Pre-NPA alerts and third-party recovery agency engagement.</td>
                      <td className="p-3">Divert salary mandates and gather bank statements proving fund origins.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Tagging</td>
                      <td className="p-3">Automated debit freeze or lien flag placed on joint accounts.</td>
                      <td className="p-3">Submit immediate written objection citing Doctrine of Mutuality.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">OTS Window</td>
                      <td className="p-3">Legal demand notice issued; set-off sweep attempted.</td>
                      <td className="p-3 font-bold text-slate-900">Issue legal notice, escalate to RBI CMS, and settle borrower debt.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 and Beyond</td>
                      <td className="p-3 font-mono text-[11px]">ARC / Write-Off</td>
                      <td className="p-3">Debt assigned to ARC or referred to Lok Adalat / DRT.</td>
                      <td className="p-3">Obtain complete account unfreeze and secure official No Dues Certificate.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Special Real-World Scenarios */}
            <section id="special-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Scenarios: Spouses, FDs &amp; Co-Borrower Risks
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Joint accounts function across diverse family and commercial settings. Here is how banking regulations apply in common practical situations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Husband and Wife Joint Accounts
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Marriage does not create joint financial liability for separate loans. Under Indian law, a spouse individual personal loan or credit card debt cannot be recovered from the other spouse earnings in a joint account.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Joint Fixed Deposits (FDs)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A bank cannot prematurely break or set off a joint fixed deposit for one depositor default unless both joint holders signed a clear pledge letter hypothecating the deposit for that loan facility.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Co-Borrower vs Co-Holder Distinction
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you signed the loan agreement as a co-borrower or personal guarantor, your liability is joint and several under Section 128. In that case, the bank has the legal right to freeze your account.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    Joint Accounts in a Different Bank
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A lender bank cannot place a lien on accounts held at a different bank. They can only attach funds in external banks by obtaining a formal Garnishee Order from a competent civil court or DRT.
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
                Frequently Asked Questions: Joint Account Freeze Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions on joint savings account freezes, banker right of set-off, Doctrine of Mutuality, and innocent co-holder rights in India.
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
                        aria-controls={`faq-answer-${index}`}
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
                        <div id={`faq-answer-${index}`} className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
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
                Official Statutory Citations &amp; Legal Banking Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 171, General Lien of Bankers, Factors, Wharfingers, Attorneys and Policy Brokers.
                </li>
                <li>
                  <strong>Doctrine of Mutuality:</strong> Judicial requirement that set-off requires identical parties in the exact same capacity and right.
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Order 21 Rule 46 (Garnishee Orders) &amp; Rule 58 (Objections to Attachment of Property).
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(46), Unfair Contract Terms &amp; Unilateral Appropriation of Non-Borrower Deposits.
                </li>
                <li>
                  <strong>Key Judicial Authorities:</strong> Hirschorn v. Evans (1938), Simla Banking &amp; Industrial Co. v. Bhagwan Kuar (AIR 1928), and State Bank of India v. Javed Akhtar Hussain (AIR 1993).
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
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://drt.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Debt Recovery Tribunals Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Banker Right of Set-Off
                  </Link>
                  <Link href="/can-bank-freeze-my-savings-account-for-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Savings Account Freeze
                  </Link>
                  <Link href="/joint-home-loan-default-rights-of-non-defaulting-co-borrower" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Joint Home Loan Default
                  </Link>
                  <Link href="/garnishee-order-bank-account-freeze-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Garnishee Order Defense
                  </Link>
                  <Link href="/can-bank-deduct-money-from-another-account" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Deduct from Another Account
                  </Link>
                  <Link href="/salary-account-frozen-by-bank" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Salary Account Freeze
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
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
                  Bank Frozen Your Joint Account?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking resolution specialists enforce the Doctrine of Mutuality under Section 171, lift unauthorized joint account freezes, and negotiate up to 75% loan settlement waivers.
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
                  <span><strong>Zero Unlawful Set-Off:</strong> Strict enforcement of Doctrine of Mutuality.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Innocent Co-Holder Shield:</strong> Complete protection for non-borrower funds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Redressal:</strong> Direct escalation against rogue lenders.</span>
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
                  href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Banker Right of Set-Off on Savings Account
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Section 171 legal limits &rarr;</span>
                </Link>

                <Link
                  href="/can-bank-freeze-my-savings-account-for-loan"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank Freeze My Savings Account for Loan?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Account freeze legal defense &rarr;</span>
                </Link>

                <Link
                  href="/joint-home-loan-default-rights-of-non-defaulting-co-borrower"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Joint Home Loan Default Co-Borrower Rights
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Non-defaulting borrower protection &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
