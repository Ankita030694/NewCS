'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  CreditCard,
  Check,
  Lock,
  Phone,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Gavel,
  Landmark,
  Calendar
} from 'lucide-react';

export default function ChargeVsCreditCardSettlementClient() {
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
    { id: 'rbi-definition', label: '1. RBI Definition: Charge vs Credit' },
    { id: 'billing-structure', label: '2. Full Payment vs Minimum Due' },
    { id: 'default-triggers', label: '3. Day-1 Breach vs 90-Day NPA' },
    { id: 'settlement-comparison', label: '4. Charge vs Credit OTS Matrix' },
    { id: 'rbi-framework', label: '5. RBI Compromise & CIBIL Rules' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Settlement SOP' },
    { id: 'legal-protections', label: '7. Legal Notices & Borrower Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Default to Settlement Timeline' },
    { id: 'specialized-cases', label: '10. Amex, Corporate & Add-On Cards' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'How does the RBI define a charge card compared to a credit card?',
      a: 'Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct, a charge card is a type of credit card where the user must pay the full billed amount on the due date. Rolling over the balance to the next billing cycle is not allowed.'
    },
    {
      q: 'Why are charge card settlements harder to negotiate than revolving credit cards?',
      a: 'Revolving credit card balances often contain 35% to 50% compounded interest and late fees, which banks can easily waive. Charge card dues consist mostly of pure principal spends plus flat delinquency fees, so issuers offer smaller principal haircuts unless severe financial hardship is proven.'
    },
    {
      q: 'Can I pay a Minimum Amount Due on a charge card to avoid default?',
      a: 'No. A charge card does not have a Minimum Amount Due option for revolving debt. You must clear 100% of the statement balance by the due date, unless the issuer specifically offers a temporary Pay Over Time or EMI conversion facility.'
    },
    {
      q: 'When does a defaulted charge card become an NPA in India?',
      a: 'Under RBI prudential norms, any credit facility including a charge card or revolving credit card is classified as a Non-Performing Asset (NPA) when the overdue amount remains unpaid for more than 90 days past the payment due date.'
    },
    {
      q: 'Does the 3-day RBI grace period apply to charge cards?',
      a: 'Yes. Under the RBI Master Direction on Credit Cards, card issuers can only report an account as past due to credit bureaus or levy late payment charges if the bill remains unpaid for more than three days after the payment due date.'
    },
    {
      q: 'Can a card issuer file a criminal case for charge card default?',
      a: 'Simple inability to pay a charge card or credit card bill is a civil dispute, not a criminal offence. Criminal action under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act applies only if a repayment cheque or NACH auto-debit mandate bounces.'
    },
    {
      q: 'What happens to my CIBIL score after settling a charge card?',
      a: 'Once you complete a One-Time Settlement, the issuer reports the account to CIBIL and other bureaus as Settled instead of Closed. Under RBI rules, lenders must update credit bureau records every 15 days. A Settled tag lowers your credit score and remains visible for up to seven years.'
    },
    {
      q: 'What is the RBI cooling-off period after a compromise settlement?',
      a: 'Under the RBI Framework for Compromise Settlements dated June 8, 2023, regulated lenders must apply a minimum 12-month cooling-off period before granting fresh credit exposure to a borrower who completed a compromise settlement.'
    },
    {
      q: 'Will I lose my reward points if I default on a charge card?',
      a: 'Yes. Most card agreements allow the issuer to freeze or forfeit accumulated reward points once an account becomes overdue or enters settlement. You should redeem valid points before missing a due date if you anticipate financial hardship.'
    },
    {
      q: 'How does CredSettle help settle charge card and credit card defaults?',
      a: 'CredSettle audits your statements for unlawful charges, compiles hardship documentation, negotiates structured One-Time Settlement terms directly with the card issuer, stops unlawful recovery harassment, and verifies your final No Dues Certificate.'
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
            <span>RBI Master Directions &amp; Compromise Settlement Framework</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How Charge Card Default Differs From Credit Card Debt
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Learn how charge card default differs from credit card debt in India. Compare One-Time Settlement rules, RBI norms, and CIBIL impact for both card types.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Card Settlement Help</span>
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
                  <span>RBI Borrower Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by RBI Master Directions on Credit Cards and Compromise Settlement norms.
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
                <span>EXECUTIVE BRIEF: CHARGE CARD VS CREDIT CARD SETTLEMENT</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Minimum Due Option:</strong> Under RBI rules, a charge card requires 100% payment every billing cycle. You cannot roll over unpaid balances by paying a Minimum Amount Due.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Principal vs Interest Composition:</strong> Revolving credit card debt grows through 36% to 45% annual interest. Charge card debt stays mostly pure principal plus delinquency fees, leading to stricter settlement haircuts.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Same 90-Day NPA Timeline:</strong> Both card types enter Non-Performing Asset (NPA) status after 90 days of continuous non-payment, opening the formal One-Time Settlement window.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Identical RBI Protections:</strong> Card issuers must give a 3-day grace period before reporting late dues, follow fair recovery rules, and issue a binding No Dues Certificate after settlement.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">CIBIL &amp; Cooling-Off Rule:</strong> Both settlements mark your credit report as &quot;Settled&quot; and trigger a minimum 12-month cooling-off period for fresh credit under RBI&apos;s June 2023 framework.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: RBI Definition */}
            <section id="rbi-definition" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Classification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Definition: Charge Card vs Revolving Credit Card
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many people in India think charge cards and credit cards work the same way. However, the Reserve Bank of India (RBI) treats them as two different card types.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI rules, a charge card requires you to pay the full bill on the due date. You cannot carry any unpaid balance into the next month.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A credit card works differently. It gives you a fixed limit and two choices. You can pay the full bill, or pay a small Minimum Amount Due and carry the rest forward with high monthly interest.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In India, cards like the American Express Platinum, Gold, and Green cards work as charge cards. Most banks like HDFC, ICICI, and SBI issue standard credit cards.
              </p>
            </section>

            {/* SECTION 2: Billing Structure */}
            <section id="billing-structure" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CreditCard className="w-4 h-4 text-[#1886ff]" />
                <span>Repayment Mechanics &amp; Debt Growth</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Billing Structure: Full Payment vs Minimum Due Trap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing how debt grows on each card shows why banks settle them differently. Credit cards grow through monthly interest, while charge cards demand one full payment.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On a credit card, paying only the{' '}
                <Link href="/what-is-minimum-amount-due-for-credit-card" className="text-[#1886ff] hover:underline font-semibold">
                  Minimum Amount Due
                </Link>{' '}
                keeps your card open for a short time. But interest at 3% to 3.75% per month adds up fast. In one year, interest and 18% GST can double your bill.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On a charge card, there is often no fixed spend limit and no option to pay a small part. If you spend ₹5,00,000, the full ₹5,00,000 is due on the due date. If you miss it, the bank adds a late fee and blocks the card right away.
              </p>
            </section>

            {/* SECTION 3: Default Triggers */}
            <section id="default-triggers" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Delinquency &amp; NPA Classification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Default Triggers: Day-1 Breach vs 90-Day NPA Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Missing a charge card bill triggers faster action from the card issuer. Since the rule requires 100% monthly payment, even one missed bill breaks the contract.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Still, RBI rules protect you from instant credit score damage. A bank cannot report you as late to CIBIL or add late fees until three days pass after the due date.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For both card types, the Non-Performing Asset (NPA) rule is the same. After 90 days of unpaid dues, the bank marks the account as an NPA. This opens the door for formal debt settlement.
              </p>
            </section>

            {/* SECTION 4: Settlement Comparison Table */}
            <section id="settlement-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Head-to-Head OTS Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Settlement Comparison: Charge Card vs Credit Card OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you ask for a{' '}
                <Link href="/services/credit-card-settlement" className="text-[#1886ff] hover:underline font-semibold">
                  credit card One-Time Settlement (OTS)
                </Link>
                , the discount depends on how much of your bill is principal versus interest. The table below compares both cards side by side.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Charge Card vs Revolving Credit Card Settlement Matrix</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Indian Banking Practice</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[580px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Comparison Factor</th>
                        <th className="p-3">Charge Card Default</th>
                        <th className="p-3">Revolving Credit Card Default</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-semibold text-slate-900">Repayment Structure</td>
                        <td className="p-3">100% of statement balance due every month; no revolving option.</td>
                        <td className="p-3">Minimum Amount Due (usually 5%) allowed; balance rolls over.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-900">Composition of Dues</td>
                        <td className="p-3">Mostly pure principal spends plus flat delinquency or late fees.</td>
                        <td className="p-3">Heavy mix of principal, 36% to 45% APR interest, late fees, and 18% GST.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-900">Card Suspension Speed</td>
                        <td className="p-3 text-rose-700 font-medium">Immediate freeze within days of missed full payment.</td>
                        <td className="p-3">Remains active while paying Minimum Due; blocked after 60 to 90 days overdue.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-900">Typical OTS Waiver Range</td>
                        <td className="p-3 font-medium text-amber-700">Lower waivers (20% to 40%) since debt is mostly clean principal.</td>
                        <td className="p-3 font-medium text-emerald-700">Higher waivers (40% to 65%) as banks easily waive inflated interest.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-900">Legal Escalation Posture</td>
                        <td className="p-3">Rapid institutional legal notices, arbitration, or summary suits for high balances.</td>
                        <td className="p-3">Collection agencies first, followed by Lok Adalat or arbitration after NPA.</td>
                      </tr>
                      <tr className="bg-blue-50/50">
                        <td className="p-3 font-semibold text-slate-900">CIBIL &amp; Cooling-Off</td>
                        <td className="p-3 font-medium text-slate-900">Reported as &quot;Settled&quot;; 12-month RBI cooling-off period applies.</td>
                        <td className="p-3 font-medium text-slate-900">Reported as &quot;Settled&quot;; 12-month RBI cooling-off period applies.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 5: RBI Compromise Framework & CIBIL */}
            <section id="rbi-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Settlement Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. RBI Compromise Framework &amp; Credit Bureau Reporting
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On June 8, 2023, the RBI issued its Framework for Compromise Settlements (Circular RBI/2023-24/40). This rule covers all banks and NBFCs in India.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under this rule, every bank must use a board-approved policy for One-Time Settlements. The policy sets clear rules on wait times, waivers, and sign-offs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1886ff]" />
                    15-Day Credit Bureau Reporting
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks must update CIBIL, Experian, CRIF, and Equifax every 15 days. Your &quot;Settled&quot; tag must show up right after you pay the OTS amount.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    12-Month Cooling-Off Period
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Once you settle a card, the same bank must wait at least 12 months before giving you any new loan or card.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-indigo-600" />
                    Late Fee Calculation Safeguard
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI card rules, late fees and penal interest can only apply to the unpaid due amount, not your full spend.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    Mandatory No Dues Certificate
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    After you pay the OTS sum, the bank must close your card and send a{' '}
                    <Link href="/get-noc-after-loan-settlement" className="text-[#1886ff] hover:underline font-semibold">
                      No Dues Certificate (NDC)
                    </Link>{' '}
                    showing zero balance.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Settling a Charge Card Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Charge card issuers rarely cut principal without strong proof. You need a clear plan. Follow these six steps to settle your card safely.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Check Your Principal vs Fee Split
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your last six monthly bills. Split your main spend from late fees and{' '}
                    <Link href="/is-18-percent-gst-waived-credit-card-settlement-ots" className="text-[#1886ff] hover:underline font-semibold">
                      18% GST charges
                    </Link>
                    . Check if any fee broke the 3-day RBI grace rule.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Gather Proof of Hardship
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Charge card firms check why you cannot pay. Collect job loss letters, business loss records, medical bills, or bank statements showing low cash flow.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Send a Written OTS Offer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Write to the card issuer&apos;s credit team. Ask them to waive all late fees. Offer a lump sum or a 3-to-6 month payment plan you can afford.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Check the Official OTS Letter
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never pay an agent on a phone promise. Always{' '}
                    <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[#1886ff] hover:underline font-semibold">
                      verify the bank OTS sanction letter
                    </Link>{' '}
                    on bank letterhead. Check the exact sum, due dates, and full closure terms.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Pay Only Through Bank Channels
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pay the OTS sum via NEFT, RTGS, or net banking straight to your card account. Save every receipt and payment reference number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Collect NDC and Check CIBIL
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Get your No Dues Certificate within 15 to 30 days of payment. Check your CIBIL report after the next 15-day update to confirm zero balance.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Legal Notices, Arbitration & Borrower Protections */}
            <section id="legal-protections" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Legal Remedies &amp; Anti-Harassment Shields</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Legal Notices, Arbitration &amp; Borrower Protections
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Charge card issuers often send legal notices faster than other banks because bills can be large. Knowing your legal rights helps you stay calm and protect your family.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Civil Nature of Card Default</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unpaid card bills are civil debts, not crimes. Banks cannot threaten arrest unless a payment cheque or NACH mandate bounces under Section 138 of the NI Act.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Arbitration &amp; Summary Suits</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Most card terms include an arbitration clause. If you get a{' '}
                    <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[#1886ff] hover:underline font-semibold">
                      legal or arbitration notice
                    </Link>
                    , you can attend hearings and offer a fair settlement.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>RBI Recovery Agent Conduct Rules</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under{' '}
                    <Link href="/rbi-rules-for-recovery-agents" className="text-[#1886ff] hover:underline font-semibold">
                      RBI recovery rules
                    </Link>
                    , agents can only call between 8:00 AM and 7:00 PM. They cannot abuse you or call your family and office staff.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Right to Stop Harassment</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If agents break privacy rules or threaten you, save call logs and{' '}
                    <Link href="/stop-recovery-agent-harassment" className="text-[#1886ff] hover:underline font-semibold">
                      file a harassment complaint
                    </Link>{' '}
                    with the bank Nodal Officer and RBI Ombudsman.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Redressal Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a card issuer refuses to waive unlawful fees, delays your No Dues Certificate, or allows abusive recovery calls, use the official RBI three-tier escalation process.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Window</th>
                      <th className="p-3">Scope of Intervention</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Card Issuer Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Reviews billing disputes, late fee reversals, and recovery conduct complaints.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">15 to 30 Calendar Days</td>
                      <td className="p-3">Escalates unresolved OTS approvals, NDC delays, and CIBIL update errors.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">After 30 Days Unresolved</td>
                      <td className="p-3">Issues binding orders via cms.rbi.org.in for unfair charges, harassment, or bureau errors.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Default to Closure Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Default to Settlement Timeline: Key Milestones
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Timing your settlement proposal correctly improves your chances of approval. Most issuers will not approve a compromise OTS before an account reaches NPA status.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Delinquency Window</th>
                      <th className="p-3">Charge Card Stage</th>
                      <th className="p-3">Credit Card Stage</th>
                      <th className="p-3">Recommended Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to Day 3</td>
                      <td className="p-3">RBI grace window; no CIBIL reporting yet.</td>
                      <td className="p-3">RBI grace window; no late fee or CIC report yet.</td>
                      <td className="p-3">Notify issuer in writing if facing temporary delay.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 4 to Day 60</td>
                      <td className="p-3">Card suspended; delinquency fees and reminders start.</td>
                      <td className="p-3">High interest accrues; reminder calls begin.</td>
                      <td className="p-3">Gather hardship proof; avoid taking new payday loans.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 90+ (NPA)</td>
                      <td className="p-3 font-semibold text-amber-800">Account turns NPA; legal notice or arbitration risk rises.</td>
                      <td className="p-3 font-semibold text-amber-800">Account turns NPA; bank enters settlement eligibility.</td>
                      <td className="p-3 font-bold text-amber-900">Submit formal hardship OTS proposal in writing.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 120 to 180+</td>
                      <td className="p-3 font-semibold text-[#1886ff]">Negotiated OTS or structured repayment plan.</td>
                      <td className="p-3 font-semibold text-[#1886ff]">High-waiver OTS or Lok Adalat settlement offer.</td>
                      <td className="p-3 font-bold text-slate-900">Verify OTS letter, pay via bank channel, secure NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Cases */}
            <section id="specialized-cases" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Card Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Cases: Amex, Corporate &amp; Add-On Cards
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Card defaults often involve special structures such as corporate charge cards, multiple cards with the same bank, or supplementary cards. Each carries specific legal rules in India.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    American Express Charge Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Amex charge cards (such as Platinum and Gold) carry strict internal blacklisting policies. Even after an OTS, Amex rarely restores card privileges, and reward points are usually forfeited upon default.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    Corporate Charge Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Liability on a{' '}
                    <Link href="/corporate-credit-card-default-employee-company-liability" className="text-[#1886ff] hover:underline font-semibold">
                      corporate credit or charge card
                    </Link>{' '}
                    depends on whether the contract is &quot;individual liability&quot; or &quot;corporate liability.&quot; Check your employment and card agreement before negotiating.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    Multi-Card UCIC Cross-Default
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you hold two cards with the same bank,{' '}
                    <Link href="/one-credit-card-default-blocks-second-card-same-bank" className="text-[#1886ff] hover:underline font-semibold">
                      defaulting on one card
                    </Link>{' '}
                    typically freezes your second card under the bank&apos;s Unique Customer Identification Code (UCIC) policy.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    Add-On Supplementary Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Whether on a charge card or a revolving credit card, the primary cardholder remains legally liable for all unpaid dues incurred by{' '}
                    <Link href="/add-on-supplementary-credit-card-default-liability" className="text-[#1886ff] hover:underline font-semibold">
                      add-on cardholders
                    </Link>
                    .
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
                Frequently Asked Questions: Charge Card Settlements
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers to common questions about charge card defaults, revolving credit card OTS waivers, CIBIL reporting, and RBI borrower rights.
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
                  <strong>RBI Master Direction:</strong> Credit Card and Debit Card - Issuance and Conduct Directions, 2022 (updated March 2024) - Charge Card Definition and 3-Day Grace Rule.
                </li>
                <li>
                  <strong>RBI Circular RBI/2023-24/40:</strong> Framework for Compromise Settlements and Technical Write-offs (June 8, 2023) - Board Policy and 12-Month Cooling-Off Period.
                </li>
                <li>
                  <strong>RBI Fortnightly Credit Reporting Mandate:</strong> 15-Day Credit Information Company (CIC) Reporting Rules for Settlement Updates.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Grievance Redressal for Unfair Card Billing and Recovery Harassment.
                </li>
                <li>
                  <strong>Negotiable Instruments Act, 1881 &amp; Payment and Settlement Systems Act, 2007:</strong> Section 138 and Section 25 for Cheque/NACH Bounce Disputes.
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
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>NALSA Lok Adalat Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Service
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/what-is-minimum-amount-due-for-credit-card" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Minimum Amount Due Trap
                  </Link>
                  <Link href="/is-18-percent-gst-waived-credit-card-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    18% GST in Card OTS
                  </Link>
                  <Link href="/corporate-credit-card-default-employee-company-liability" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Corporate Card Default Law
                  </Link>
                  <Link href="/one-credit-card-default-blocks-second-card-same-bank" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Multi-Card UCIC Blocking
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Letter
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Guidelines
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
                Specialist in credit card debt restructuring, RBI Master Directions, arbitration defense, and One-Time Settlement negotiations for Indian borrowers.
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
                  CARD SETTLEMENT SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Overdue on a Charge Card or Credit Card?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team negotiates structured OTS terms with card issuers, handles arbitration notices, stops recovery harassment, and secures your No Dues Certificate.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Book Free Debt Consultation
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
                  <span><strong>Fee &amp; Interest Audit:</strong> Identifies unlawful charges under RBI rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Harassment Protection:</strong> Formal notices to stop abusive recovery calls.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Structured OTS Negotiation:</strong> Verified sanction letters before payment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>NDC &amp; Bureau Tracking:</strong> Ensures closure certificate and CIBIL update.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/services/credit-card-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Debt Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Complete OTS negotiation support &rarr;</span>
                </Link>

                <Link
                  href="/get-noc-after-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Get NOC After Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Official bank closure steps &rarr;</span>
                </Link>

                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Legal Notice Reply Guide
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Arbitration &amp; notice defense &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
