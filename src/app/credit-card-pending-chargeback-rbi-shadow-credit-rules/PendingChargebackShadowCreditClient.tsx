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
  DollarSign,
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
  Calendar,
  CreditCard
} from 'lucide-react';

export default function PendingChargebackShadowCreditClient() {
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
    { id: 'shadow-credit-law', label: '1. RBI Shadow Credit Law' },
    { id: 'fraud-vs-merchant', label: '2. Fraud vs Merchant Dispute' },
    { id: 'zero-liability-rules', label: '3. Zero Liability & 10-Day Rule' },
    { id: 'interest-gst-rules', label: '4. Interest, Late Fees & GST' },
    { id: 'cibil-protection', label: '5. CIBIL Default Protection' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Chargeback SOP' },
    { id: 'escalation-matrix', label: '7. 3-Tier Escalation Matrix' },
    { id: 'chargeback-timelines', label: '8. Day 0 to Resolution Timeline' },
    { id: 'special-scenarios', label: '9. EMI, Forex & Failed Reversals' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Do I have to pay a disputed credit card bill while a chargeback is pending?',
      a: 'No, if you report a charge as fraud, the RBI bars banks from adding fees or interest until the probe ends. Still, you must pay the rest of your undisputed bill on time to avoid late fees.'
    },
    {
      q: 'What is RBI shadow credit or shadow reversal for credit cards?',
      a: 'Shadow credit is a temporary credit a bank posts while it checks an unwanted card charge. Under RBI circular DBR.No.Leg.BC.78/09.07.005/2017-18, the bank must post this credit within 10 working days.'
    },
    {
      q: 'How many days does a bank have to reply to a credit card billing dispute?',
      a: 'Under the RBI Master Direction on Credit Cards, the bank must give you a clear reply and proof within 30 days from the date of your complaint.'
    },
    {
      q: 'Can a bank report my credit card as overdue to CIBIL during a pending chargeback?',
      a: 'No. RBI rules ban banks from reporting a disputed sum as a default to CIBIL or other credit bureaus while the dispute is open. They must wait until the case is closed.'
    },
    {
      q: 'What is the difference between a fraud dispute and a merchant service dispute?',
      a: 'Fraud means you never approved the charge. A merchant dispute means you paid for goods or services that were not delivered. Fraud claims get strict zero-fee protection, while merchant claims can accrue interest if you lose.'
    },
    {
      q: 'When do I get zero liability for an unauthorised credit card charge?',
      a: 'You have zero liability if the fraud came from a bank lapse or third-party breach and you report it within 3 working days of the alert. You also owe nothing if the bank itself caused the loss.'
    },
    {
      q: 'Can the bank charge interest and GST if a chargeback fails later?',
      a: 'Yes. If you approved the payment or shared your OTP and the bank rejects your claim, it can take back the shadow credit. The bank can then charge interest from the original due date.'
    },
    {
      q: 'How much compensation can I claim if the bank delays fixing my CIBIL report?',
      a: 'Under RBI circular DoR.FIN.REC.48/20.16.003/2023-24, if a bank or bureau fails to fix a valid CIBIL error within 30 days, you can claim ₹100 for each day of delay.'
    },
    {
      q: 'What should I do if the bank rejects my chargeback or ignores the 30-day rule?',
      a: 'First write to the bank Grievance Redressal Officer and Principal Nodal Officer. If they do not fix it within 30 days, file a free online case with the RBI Ombudsman at cms.rbi.org.in.'
    },
    {
      q: 'How does CredSettle help with disputed credit card bills and wrongful dues?',
      a: 'CredSettle checks your card bills, sends formal notices citing RBI rules, stops recovery calls, handles RBI Ombudsman cases, and helps fix wrongful CIBIL marks.'
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
            <span>RBI Master Direction &amp; Shadow Credit Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Do You Have to Pay Disputed Credit Card Bills in India?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Learn how RBI shadow credit rules protect you during a pending chargeback. Find out when banks must freeze interest, post a 10-day shadow credit, and keep disputed dues off your CIBIL report.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Resolve Disputed Card Bill</span>
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
                  <span>RBI Cardholder Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Credit Card Master Directions and the 2017 Zero Liability Circular.
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
                <span>EXECUTIVE BRIEF: RBI PENDING CHARGEBACK &amp; SHADOW CREDIT RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Fees on Fraud Claims:</strong> Under the RBI Master Direction on Credit Cards, banks cannot add interest or late fees on sums disputed as fraud while the probe is active.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">10-Day Shadow Credit:</strong> Under RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18, banks must post a shadow reversal within 10 working days of a fraud report.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">30-Day Proof Rule:</strong> When you protest a card bill, the bank must send a clear reply and written proof within 30 days.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">CIBIL Default Ban:</strong> Card issuers cannot report a disputed sum as overdue to CIBIL or other bureaus until the dispute ends.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Pay Undisputed Dues First:</strong> Always pay the rest of your card bill on time so normal spends do not attract high interest.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: 1. RBI Shadow Credit Law: What Happens During a Dispute */}
            <section id="shadow-credit-law" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Rules &amp; Billing Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Shadow Credit Law: What Happens During a Dispute
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many cardholders in India panic when a wrong charge shows up on their bill. Banks often push you to pay the full bill by the due date, even when a dispute is open.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India (RBI) has clear rules to stop this pressure. Two main rules guard your rights. These are the <strong>RBI Master Direction on Credit Cards</strong> and the <strong>RBI Customer Protection Circular dated July 6, 2017</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under these rules, a &quot;shadow credit&quot; is a temporary credit placed on your card account. It offsets the disputed charge while the bank checks the facts. As a result, you do not have to pay for fraud from your own pocket.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Also, when you dispute a bill, the bank must reply with proof within <strong>30 days</strong>. It cannot ignore your complaint and keep adding late fees.
              </p>
            </section>

            {/* SECTION 2: 2. Fraud vs Merchant Dispute: When You Must Pay the Bill */}
            <section id="fraud-vs-merchant" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CreditCard className="w-4 h-4 text-[#1886ff]" />
                <span>Dispute Types &amp; Payment Duty</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Fraud vs Merchant Dispute: When You Must Pay the Bill
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Your right to hold back payment depends on the kind of dispute you file. Indian banking law treats fraud differently from a seller dispute.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In a <strong>fraud dispute</strong>, you never approved the charge. For example, someone stole your card data or swiped your card without your consent. The RBI Master Direction bars banks from adding any fees on fraud claims until the case is closed.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In a <strong>merchant dispute</strong>, you approved the payment, such as booking a ticket or buying a product, but the seller failed to deliver. Card network rules (Visa, Mastercard, or RuPay) handle these claims. If the seller wins the claim, the bank can ask you to pay.
              </p>

              {/* Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Fraud Dispute vs Merchant Chargeback Rules</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">RBI Master Direction Matrix</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[560px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Dispute Feature</th>
                        <th className="p-3">Fraud Dispute (Unauthorised)</th>
                        <th className="p-3">Merchant Chargeback</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Your Consent</td>
                        <td className="p-3">No consent given (stolen card, skimming, phishing).</td>
                        <td className="p-3">Approved by you via OTP, PIN, or tap.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Shadow Credit Rule</td>
                        <td className="p-3 font-semibold text-emerald-700">Must be posted in 10 working days (RBI 2017 rule).</td>
                        <td className="p-3">Given at the bank&apos;s discretion during review.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Interest &amp; Late Fees</td>
                        <td className="p-3 font-semibold text-emerald-700">Strictly banned while fraud claim is open.</td>
                        <td className="p-3">May apply later if the claim is rejected.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">CIBIL Reporting</td>
                        <td className="p-3">Banned until the dispute is fully resolved.</td>
                        <td className="p-3">Banned for disputed sum during active ticket.</td>
                      </tr>
                      <tr className="bg-blue-50/50">
                        <td className="p-3 font-bold text-slate-900">Safe Payment Plan</td>
                        <td className="p-3 font-bold text-[#1886ff]">Pay undisputed bill; demand shadow credit.</td>
                        <td className="p-3 font-bold text-slate-800">Pay undisputed bill; pay under protest if risky.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: 3. Zero Liability & 10-Day Shadow Reversal Timelines */}
            <section id="zero-liability-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>RBI 2017 Circular DBR.No.Leg.BC.78/09.07.005/2017-18</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Zero Liability &amp; 10-Day Shadow Reversal Timelines
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Speed matters when you spot a fraud charge on your credit card. The RBI July 6, 2017 circular links your loss limit to how fast you report the fraud.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Paragraph 9 of this rule, the bank must post a <strong>shadow reversal within 10 working days</strong> after you report the fraud. The bank cannot make you wait for a police report or an insurance check first.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This credit must be <strong>value-dated</strong> back to the date of the fraud charge. This means you lose zero interest and face no late fees on your card bill.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Zero Liability (Within 3 Working Days)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You owe nothing if the fraud came from a bank lapse or third-party breach and you report it within 3 working days of the bank alert.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Limited Liability (4 to 7 Working Days)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you report a third-party breach between 4 and 7 working days, your loss is capped by your card limit (up to ₹25,000 for limits above ₹5 Lakh).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Clock className="w-4 h-4" />
                    <span>90-Day Final Closure Limit</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank has up to 90 days from your complaint date to finish its review. The bank itself must prove if you were at fault.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                    <Lock className="w-4 h-4" />
                    <span>When You Share Your OTP or PIN</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you shared your OTP, PIN, or CVV, you bear the loss until you report the fraud. However, the bank must cover any loss after your report.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: 4. Interest, Late Fees & GST During Pending Chargebacks */}
            <section id="interest-gst-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Finance Charges, Late Fees &amp; Tax Reversals</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Interest, Late Fees &amp; GST During Pending Chargebacks
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit card interest in India runs at 3% to 4% per month (36% to 48% a year), plus 18% GST on all fees. Even one month of wrong interest can make a disputed bill grow fast.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you dispute a charge as fraud, the RBI Master Direction bars the bank from charging interest or late fees on it. If the bank system still adds these charges, the bank must reverse both the interest and the 18% GST.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, always protect your <strong>interest-free grace period</strong>. If you leave even ₹100 of your normal, undisputed spend unpaid, you lose the grace period on new buys. Always pay your exact undisputed balance before the due date.
              </p>
            </section>

            {/* SECTION 5: 5. CIBIL Protection: Stopping Wrongful Default Reporting */}
            <section id="cibil-protection" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Rules &amp; ₹100/Day Penalty</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. CIBIL Protection: Stopping Wrongful Default Reporting
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many cardholders pay disputed bills because they fear a drop in their CIBIL score. The RBI Master Direction stops banks from using your credit score as a threat.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Card issuers cannot report a disputed charge as a default to CIBIL, Experian, Equifax, or CRIF High Mark while a ticket is open. They can only report a default after the dispute is settled and you fail to pay a valid due.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a bank wrongly marks your card as overdue during an active chargeback, file a dispute right away. Under RBI Circular <strong>DoR.FIN.REC.48/20.16.003/2023-24</strong>, if a bank or bureau fails to fix a valid error within <strong>30 days</strong>, they owe you <strong>₹100 per day</strong>.
              </p>
            </section>

            {/* SECTION 6: 6. Step-by-Step SOP: Filing a Credit Card Chargeback */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Action Plan</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Filing a Credit Card Chargeback
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six clear steps as soon as you see an unwanted or disputed charge on your card statement.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Block Your Card &amp; Report in 3 Working Days
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Block the card in your bank app or call the helpline at once if it is fraud. Save the complaint number and time to lock in RBI zero-liability rights.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Email the Dispute Form &amp; Proof
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Send the signed Dispute Form to the bank&apos;s official dispute email. Attach screenshots, seller cancellation chats, or a cybercrime report from cybercrime.gov.in.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Pay the Undisputed Bill Before Due Date
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Subtract the disputed sum from your Total Amount Due. Pay the rest on time via NEFT or net banking and keep the payment receipt safe.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Demand 10-Day Shadow Credit in Writing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the charge was fraud and no shadow credit shows up after 10 working days, send a formal email citing RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Check Next Bill for Wrong Interest or GST
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Read your next card statement closely. If the bank added interest, late fees, or GST on a fraud claim, demand a full reversal under the RBI Master Direction.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Escalate to PNO &amp; RBI Ombudsman
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank gives no proof within 30 days or rejects a valid fraud claim, write to the Principal Nodal Officer. If still unresolved, file a case on cms.rbi.org.in.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: 7. 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Official Escalation Path</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If support agents keep asking for money or recovery agents call you over an open chargeback, use the official RBI three-tier complaint path.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Bank or RBI Officer</th>
                      <th className="p-3">Response Time</th>
                      <th className="p-3">Action &amp; Relief Provided</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Card Issuer Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 15 Working Days</td>
                      <td className="p-3">Posts shadow credit, stops recovery calls, and starts card network chargeback.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">Up to 30 Calendar Days</td>
                      <td className="p-3">Checks logs, waives wrong interest or GST, and blocks CIBIL default marks.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">After 30 Days Unresolved</td>
                      <td className="p-3">Passes binding orders on cms.rbi.org.in for full refund, CIBIL fix, and damages.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 8: 8. Chargeback Timelines: Day 0 to Final Resolution */}
            <section id="chargeback-timelines" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Key Deadlines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Chargeback Timelines: Day 0 to Final Resolution
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing each deadline helps you spot bank delays early and protect your credit score.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Time Window</th>
                      <th className="p-3">Stage</th>
                      <th className="p-3">What the Bank Must Do</th>
                      <th className="p-3">What You Should Do</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0 to Day 3</td>
                      <td className="p-3 font-mono text-[11px]">Zero Liability Window</td>
                      <td className="p-3">Blocks card and gives a formal ticket number.</td>
                      <td className="p-3">Report fraud right away and file cyber complaint.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Within 10 Working Days</td>
                      <td className="p-3 font-mono text-[11px]">Shadow Credit</td>
                      <td className="p-3">Posts value-dated shadow credit for fraud debit.</td>
                      <td className="p-3">Pay undisputed bill and check shadow credit entry.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Within 30 Calendar Days</td>
                      <td className="p-3 font-mono text-[11px]">Proof Rule</td>
                      <td className="p-3">Sends written reply and documentary proof.</td>
                      <td className="p-3">Write to Principal Nodal Officer if no proof comes.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 31 Onward</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Ombudsman Stage</td>
                      <td className="p-3">Faces RBI CMS complaint if dispute is still open.</td>
                      <td className="p-3 font-bold text-amber-800">File complaint on cms.rbi.org.in with email proof.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Up to Day 90</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Final Closure</td>
                      <td className="p-3">Ends review, proves fault if any, and updates CIBIL.</td>
                      <td className="p-3 font-bold text-slate-900">Check for zero disputed dues and clean CIBIL score.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: 9. Special Cases: EMI, International & Failed Reversals */}
            <section id="special-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Special Dispute Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Special Cases: EMI, International &amp; Failed Reversals
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Some card disputes involve EMIs, foreign currency fees, or recovery calls. Here is how RBI rules apply in those cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    Disputed Merchant EMIs &amp; Foreclosure
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a disputed charge turned into an EMI, ask the bank to pause monthly EMIs during the review. If you win, the bank must refund all EMI interest and fees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Foreign Currency &amp; Markup Refunds
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Foreign card refunds often fall short due to exchange rate gaps and 3.5% markup plus GST. For confirmed fraud, the bank must refund the full rupee sum debited.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Gavel className="w-4 h-4 text-indigo-600" />
                    Recovery Calls During Active Chargeback
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks cannot send recovery agents or threaten legal action over a charge under active fraud review. Report such threats to the RBI Ombudsman at once.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    When a Chargeback Fails &amp; Debt Grows
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a large seller dispute fails and high interest makes the bill hard to pay, you can seek a formal One-Time Settlement (OTS) or interest waiver with legal help.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 11: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Pending Card Chargebacks
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Simple answers on paying disputed credit card bills, shadow credit rules, CIBIL safety, and RBI Ombudsman steps.
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

            {/* SECTION 12: Citations & Outbound Authority Grid */}
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
                  <strong>RBI Master Direction:</strong> Master Direction on Credit Card and Debit Card Issuance and Conduct Directions, 2022 (Updated 2024): Billing Disputes (30-day reply), Ban on Charges for Fraud-Disputed Claims, and CIC Default Reporting Rules.
                </li>
                <li>
                  <strong>RBI Customer Protection Circular:</strong> RBI/2017-18/15, DBR.No.Leg.BC.78/09.07.005/2017-18 (July 6, 2017): Zero Liability and 10-Working-Day Shadow Reversal Rule.
                </li>
                <li>
                  <strong>RBI Credit Information Compensation Rule:</strong> RBI/2023-24/72, DoR.FIN.REC.48/20.16.003/2023-24 (October 26, 2023): ₹100 per day payout for delayed CIBIL fix beyond 30 days.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Redressal for Credit Card Billing Disputes and Bank Service Lapses.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) Deficiency in Service claims before Consumer Commissions.
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
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Dispute Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
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
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Services
                  </Link>
                  <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Overlimit Fee RBI Refund
                  </Link>
                  <Link href="/merchant-refund-on-blocked-settled-credit-card-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Refund on Blocked Credit Card
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    CIBIL ₹100/Day Delay Penalty
                  </Link>
                  <Link href="/cibil-dispute-wrong-overdue-entry-filing-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Fix Wrong CIBIL Overdue Entry
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Agent Rules
                  </Link>
                  <Link href="/how-to-contact-the-banking-ombudsman-regarding-harassment-complaints" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Ombudsman Filing Guide
                  </Link>
                  <Link href="/credit-card-legal-notice-process-next-steps" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Legal Notice Reply
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
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
                Specialist in credit card dispute defense, RBI Master Directions, CIBIL fixes, and debt settlement helping Indian cardholders stop unfair charges.
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
                  DISPUTE &amp; CHARGEBACK HELP
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Charging Interest on a Disputed Card?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking team sends formal notices under RBI rules, stops recovery calls, removes unfair fees, and guards your CIBIL score.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Legal Dispute Help
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
                  <span><strong>10-Day Shadow Credit:</strong> Formal RBI circular notices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Interest &amp; GST Waiver:</strong> Removal of illegal billing fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Score Shield:</strong> Stop wrongful default marks during review.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Help:</strong> Full CMS portal filing support.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI ₹100/Day CIBIL Delay Penalty
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Credit report correction rights &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-overlimit-fee-without-consent-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Overlimit Fee Refund
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI consent &amp; reversal rules &rarr;</span>
                </Link>

                <Link
                  href="/services/credit-card-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Debt Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal OTS &amp; harassment protection &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
