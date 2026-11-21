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
  Gavel,
  Landmark,
  Calendar,
  CreditCard
} from 'lucide-react';

export default function CreditCardEmiRejectedClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Quick Help' },
    { id: 'rejection-reasons', label: '1. Why Banks Reject EMI Conversion' },
    { id: 'financial-impact', label: '2. Lump Sum Bill vs APR Trap' },
    { id: 'rbi-framework', label: '3. RBI Master Direction 2022 Rules' },
    { id: 'merchant-vs-post', label: '4. Merchant EMI vs Post-Swipe EMI' },
    { id: 'step-by-step-sop', label: '5. Step-by-Step Action Plan' },
    { id: 'cibil-protection', label: '6. Protecting Your CIBIL Score' },
    { id: 'legal-remedies', label: '7. RBI Ombudsman & Consumer Court' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Swipe to Dispute Timeline' },
    { id: 'debt-relief-options', label: '10. Debt Relief If You Cannot Pay' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Why did my bank reject credit card EMI conversion after the swipe?',
      a: 'Banks reject post-purchase EMI requests for several reasons. Common triggers include excluded merchant categories like gold, jewelry, or fuel, requests made after statement generation, low available credit limit, or internal risk flags on your account.'
    },
    {
      q: 'Can a bank reject an instant EMI selected at the checkout or PoS terminal?',
      a: 'Even when an EMI option appears at checkout, final approval depends on the issuer credit policy. However, if the charge slip or checkout page confirmed an EMI plan and the bank billed it as a lump sum without notice, you can dispute it as a deficiency in service.'
    },
    {
      q: 'What happens if I cannot pay the sudden lump sum credit card bill?',
      a: 'If you pay only the minimum amount due or miss the due date, the bank charges revolving interest of 36% to 49% per year plus 18% GST. You also lose the interest-free grace period on all new purchases.'
    },
    {
      q: 'What do RBI Master Directions 2022 say about credit card EMIs?',
      a: 'Under Paragraph 6(b)(iii) of the RBI Master Direction on Credit Cards, 2022, issuers must disclose the principal, interest, and upfront discount breakup before EMI conversion. They must also show these details separately on your monthly bill.'
    },
    {
      q: 'Can the bank report me to CIBIL while my EMI dispute is pending?',
      a: 'Under RBI rules, card issuers must exercise strict care with disputed accounts and should not report a disputed balance as default until the dispute is investigated. Paying at least the minimum amount due under protest also protects your CIBIL record.'
    },
    {
      q: 'How long does the bank have to respond to my billing or EMI dispute?',
      a: 'Under the RBI Master Direction 2022, the card issuer must provide a clear explanation and supporting documentary evidence within a maximum of 30 days from the date you raise a billing dispute.'
    },
    {
      q: 'Can I convert a transaction to EMI after the monthly bill is generated?',
      a: 'Most banks block self-service EMI conversion once the statement is generated. However, you can call customer care or email the grievance cell to request a manual conversion or a short-term payment plan before the due date.'
    },
    {
      q: 'When can I file a complaint with the RBI Integrated Ombudsman?',
      a: 'You can file a complaint on the RBI CMS portal at cms.rbi.org.in if the bank fails to reply within 30 days or gives an unsatisfactory rejection. You must file within one year of the bank response or expiry of the 30-day window.'
    },
    {
      q: 'Can I approach Consumer Court if the bank mis-sold a No-Cost EMI?',
      a: 'Yes. If checkout screenshots or charge slips prove you opted for an advertised EMI and the bank or merchant switched it to a lump sum, you can file a claim for deficiency in service under the Consumer Protection Act, 2019.'
    },
    {
      q: 'How can CredSettle help if the rejected EMI pushed me into debt?',
      a: 'CredSettle helps borrowers who face unaffordable lump-sum credit card bills after EMI rejection. Our team drafts RBI-compliant disputes, negotiates interest waivers or restructuring, stops recovery harassment, and arranges lawful One-Time Settlements.'
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
            <CreditCard className="w-3.5 h-3.5" />
            <span>RBI Credit Card Directions 2022 &amp; Debt Relief Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            What to Do When Bank Rejects Credit Card EMI Conversion
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did your bank reject your post-purchase EMI request and bill the full amount at once? Learn why this happens, how RBI billing rules protect you, and how to escape high revolving interest without ruining your CIBIL score.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Credit Card Debt Help</span>
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
                  <span>RBI Billing Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Master Direction 2022 and the Consumer Protection Act, 2019.
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
                <span>EXECUTIVE BRIEF: CREDIT CARD EMI REJECTION HELP</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Immediate Danger:</strong> When an EMI conversion fails, the full purchase sits on your bill. Unpaid dues attract 36% to 49% annual interest plus 18% GST.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">RBI 30-Day Dispute Rule:</strong> If an advertised EMI failed or billed wrongly, raise a written dispute. The bank must reply with proof within 30 days.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Protect CIBIL First:</strong> Never ignore the bill while fighting the bank. Pay at least the Minimum Amount Due under protest to stop late tags.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Dispute CIBIL Protection:</strong> Under RBI directions, banks should not report a disputed balance as a default until they finish investigating your complaint.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Debt Relief Alternatives:</strong> If you cannot pay the lump sum, explore balance transfers, personal loans, bank restructuring, or One-Time Settlement (OTS).
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Why Banks Reject Credit Card EMI Conversion After Swipe */}
            <section id="rejection-reasons" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Common Triggers &amp; Bank Policies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Why Banks Reject Credit Card EMI Conversion After Swipe
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many cardholders make a big purchase expecting to convert it into monthly EMIs later. They swipe the card, open the bank app a few days later, and see an error or rejection message. Suddenly, the bank demands the entire amount in one billing cycle.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks treat post-purchase EMI conversion as a fresh loan facility, not an automatic right. Even if you have a good payment record, your request can fail due to strict internal rules. Knowing the exact reason helps you decide your next move.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-rose-600" />
                    Excluded Merchant Categories (MCC)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Major banks block EMI conversion on gold, jewelry, fuel pumps, cash withdrawals, wallet loads, and rent payments. These merchant category codes are barred by bank risk policies.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    Statement Already Generated
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Most issuers require you to apply for EMI before your monthly bill date. Once the statement generates with the full amount, self-service app conversion usually locks out.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    Credit Limit &amp; Risk Flags
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the swipe pushed your card overlimit, or if your CIBIL score dropped recently, the bank risk engine can reject the EMI request immediately.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-600" />
                    Transaction Age or Minimum Value
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Transactions below ₹2,500 to ₹5,000 do not qualify for EMI. Requests made more than 30 to 60 days after the swipe also expire automatically.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 2: Financial Impact: Lump Sum Bill vs Revolving APR Trap */}
            <section id="financial-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Revolving Credit &amp; Interest Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Impact: Lump Sum Bill vs Revolving APR Trap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A rejected EMI turns an affordable monthly installment into a sudden financial emergency. If you planned to pay ₹10,000 a month and now owe ₹1,00,000 in 20 days, paying only the Minimum Amount Due can trigger a severe debt spiral.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit card revolving interest in India ranges from 36% to 49% per year, plus 18% GST on all interest and late fees. You also lose the interest-free grace period on every new swipe until you clear the entire bill to zero.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Cost Comparison on a ₹1,00,000 Purchase</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">12-Month Cost Impact</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Payment Scenario</th>
                        <th className="p-3">Typical Annual Rate</th>
                        <th className="p-3">Interest + GST Burden</th>
                        <th className="p-3 text-right">Impact on Your Finances</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Approved 12-Month Card EMI</td>
                        <td className="p-3 font-mono">14% to 16% p.a.</td>
                        <td className="p-3 text-emerald-600 font-semibold">~₹9,200 to ₹10,500</td>
                        <td className="p-3 text-right font-bold text-emerald-700">Fixed Monthly Budget</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Personal Loan / Balance Transfer</td>
                        <td className="p-3 font-mono">11% to 15% p.a.</td>
                        <td className="p-3 text-[#1886ff] font-semibold">~₹7,200 to ₹9,800</td>
                        <td className="p-3 text-right font-bold text-[#1886ff]">Stops Card APR Spiral</td>
                      </tr>
                      <tr className="bg-amber-50/40">
                        <td className="p-3 font-medium text-slate-900">Paying Minimum Due (5% Monthly)</td>
                        <td className="p-3 font-mono text-amber-700 font-bold">40% to 45% APR</td>
                        <td className="p-3 text-amber-700 font-semibold">₹38,000+ (Compounding)</td>
                        <td className="p-3 text-right font-bold text-amber-800">Multi-Year Debt Trap</td>
                      </tr>
                      <tr className="bg-rose-50/50 font-bold text-slate-900">
                        <td className="p-3">Missed Payment / Default</td>
                        <td className="p-3 font-mono text-rose-700">42%+ &amp; Late Fees</td>
                        <td className="p-3 text-rose-700">₹50,000+ &amp; Penalties</td>
                        <td className="p-3 text-right text-rose-700">CIBIL Drop &amp; Recovery Calls</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: RBI Master Direction 2022 Rules on Credit Card EMIs */}
            <section id="rbi-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Central Bank Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. RBI Master Direction 2022 Rules on Credit Card EMIs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit card billing and EMI conversions in India are governed by the Reserve Bank of India (Credit Card and Debit Card – Issuance and Conduct) Directions, 2022. These rules apply to all scheduled commercial banks and NBFC card issuers.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Paragraph 6(b)(iii) of the Master Directions, banks must maintain full transparency before converting any spend into EMIs. They must clearly show the principal amount, interest rate, processing fee, and any upfront discount before you confirm.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI also bans banks from hiding interest inside so-called zero-interest or No-Cost EMI offers. Every EMI conversion must appear separately on your monthly credit card statement with its principal and interest components.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Additionally, RBI rules prohibit banks from capitalizing unpaid charges, levies, or taxes to charge extra interest on top of penalties. If your bank billed wrongful charges after an EMI error, you have a legal right to demand reversal.
              </p>
            </section>

            {/* SECTION 4: Merchant EMI Failure vs Post-Purchase EMI Rejection */}
            <section id="merchant-vs-post" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Distinguishing Legal Liability</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Merchant EMI Failure vs Post-Purchase EMI Rejection
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Your legal strength depends heavily on whether you chose an EMI at the point of sale or tried to convert a normal swipe later. Courts and the RBI Ombudsman treat these two cases very differently.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Feature</th>
                      <th className="p-3">Instant / Merchant EMI Failure</th>
                      <th className="p-3">Post-Purchase App EMI Rejection</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">How It Happens</td>
                      <td className="p-3">You select EMI on Amazon, Flipkart, or a store PoS machine, yet the bank bills a lump sum.</td>
                      <td className="p-3">You make a regular full swipe and later tap &quot;Convert to EMI&quot; in your bank app.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Bank Discretion</td>
                      <td className="p-3">Low, if checkout or charge slip clearly recorded an EMI plan and upfront discount.</td>
                      <td className="p-3">High, because post-swipe conversion is subject to internal bank credit policy.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Key Evidence Needed</td>
                      <td className="p-3">Order invoice, checkout screenshot, PoS charge slip showing EMI tenure.</td>
                      <td className="p-3">App error screenshot, MITC terms, and email confirmation of prior eligibility.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Best Legal Remedy</td>
                      <td className="p-3">Formal billing dispute under RBI 30-day rule, Ombudsman, or Consumer Court.</td>
                      <td className="p-3">Manual conversion request, interest waiver negotiation, or debt restructuring.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Step-by-Step SOP: What to Do After EMI Rejection */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP: What to Do After EMI Rejection
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do not panic or wait until your due date passes. Follow these six steps immediately to protect your credit profile and challenge wrongful billing.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Capture All Transaction and Error Proof
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Save your merchant invoice, PoS slip, checkout screenshot, and the bank app rejection screen. If a store promised instant EMI, ask the merchant for written confirmation of the terminal batch.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Request Manual Conversion Before Bill Date
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Call customer care and also send an email immediately. Sometimes the mobile app rejects an eligible swipe due to a technical glitch, and the backend team can manually convert it.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Check Merchant Cancellation or Split Payment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the purchase is within the merchant return window and you cannot afford the lump sum, check if you can cancel the order or re-book using an approved EMI card.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Pay Minimum Due Under Written Protest
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Before the due date, pay at least the Minimum Amount Due (or as much principal as you can) while stating in an email that the payment is made under protest pending EMI dispute resolution.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: File a Formal Billing Dispute Ticket
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If a merchant EMI failed or the bank promised conversion in writing, lodge a formal billing dispute. Under RBI rules, the bank must respond with documentary proof within 30 days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Escalate to Nodal Officer and RBI Ombudsman
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank refuses to fix a proven merchant EMI failure or levies wrongful late fees within 30 days, escalate to the Principal Nodal Officer and then to cms.rbi.org.in.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Protecting Your CIBIL Score During an EMI Dispute */}
            <section id="cibil-protection" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau &amp; Reporting Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Protecting Your CIBIL Score During an EMI Dispute
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A sudden lump-sum bill often spikes your credit utilization ratio above 30% and risks a missed payment tag. Both events can drop your CIBIL score by 50 to 100 points in a single month.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI Master Direction 2022, card issuers must exercise strict care with accounts that have pending billing disputes. Banks must not report a disputed amount as overdue or in default until they complete their investigation and settle the dispute.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a bank wrongly reports a disputed balance as default, file a dispute on the CIBIL portal and with the bank immediately. Under RBI credit information rules, the bank and credit bureau have 30 calendar days to fix the error, or they owe you ₹100 per day for further delay.
              </p>
            </section>

            {/* SECTION 7: Legal Remedies: RBI Ombudsman & Consumer Court Claims */}
            <section id="legal-remedies" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory &amp; Judicial Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Legal Remedies: RBI Ombudsman &amp; Consumer Court Claims
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an EMI rejection stems from a bank glitch, misleading advertisement, or broken merchant promise, Indian law gives you strong forums to claim relief without expensive court battles.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>RBI Integrated Ombudsman Scheme, 2021</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a free online complaint on cms.rbi.org.in if the bank fails to resolve your dispute in 30 days. You can seek EMI conversion, interest reversal, and compensation for service deficiency.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advertising No-Cost EMI and switching it to a lump sum is an Unfair Trade Practice under Section 2(47) and Deficiency in Service under Section 2(11). District Commissions can award full refunds and damages.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Zero-Fee Chargeback / Reversal Claims</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the merchant promised instant EMI and failed to process the EMI code on the terminal, you can ask the bank to reverse lost cashback or cancel the transaction without penalty.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Anti-Harassment &amp; Fair Recovery Rules</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Even if you fall behind on the lump-sum bill, RBI Fair Practices guidelines ban recovery agents from calling before 8 AM or after 7 PM, or contacting your family and workplace.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: GRO, PNO & RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: GRO, PNO &amp; RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Always escalate in writing so you have a clear paper trail. Use the three-tier banking grievance system below.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Card Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Logs official dispute ticket, reviews MCC/EMI eligibility, and checks manual conversion.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">Up to 30 Calendar Days</td>
                      <td className="p-3">Audits merchant EMI logs, waives finance charges/late fees, or approves a payment plan.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">After 30 Days Post-GRO</td>
                      <td className="p-3">Passes binding orders on cms.rbi.org.in for interest reversal, CIBIL fix, and compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Milestones: Swipe Date to Dispute Closure */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Milestones: Swipe Date to Dispute Closure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Timing matters in credit card EMI disputes. Acting before your statement generation date gives you the best chance of an easy fix.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Window</th>
                      <th className="p-3">Billing Stage</th>
                      <th className="p-3">What Happens</th>
                      <th className="p-3">Recommended Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to Day 5</td>
                      <td className="p-3 font-mono text-[11px]">Unbilled Transaction</td>
                      <td className="p-3">Transaction settles; app may reject EMI due to MCC or risk rules.</td>
                      <td className="p-3">Screenshot error, call support for manual conversion, or cancel order if eligible.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Before Bill Date</td>
                      <td className="p-3 font-mono text-[11px]">Pre-Statement Window</td>
                      <td className="p-3">Last window for standard bank post-purchase EMI processing.</td>
                      <td className="p-3">Email GRO with checkout/PoS proof and get a written ticket number.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Statement Date to Due Date</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Billed Lump Sum</td>
                      <td className="p-3">Full amount appears on bill; risk of late fees and 42% APR starts after due date.</td>
                      <td className="p-3 font-bold text-amber-800">Pay Minimum Due under protest, or shift balance via Personal Loan / BT.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 31 Post-Complaint</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">RBI Escalation</td>
                      <td className="p-3">Bank 30-day statutory dispute resolution deadline expires.</td>
                      <td className="p-3 font-bold text-slate-900">File formal complaint on cms.rbi.org.in or consult CredSettle for debt relief.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Debt Relief Options If You Cannot Pay the Lump Sum */}
            <section id="debt-relief-options" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Practical Debt Exit Strategies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Debt Relief Options If You Cannot Pay the Lump Sum
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank refuses EMI conversion on an excluded spend (like gold, medical bills, or tax payments) and you truly cannot pay the lump sum, do not let 42% revolving interest destroy your savings. Consider these four legal exit options.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Credit Card Balance Transfer (BT)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Move the lump sum to another bank card offering a 6-month to 12-month Balance Transfer on EMI at 12% to 15% interest instead of 42% APR.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    Low-Interest Personal Loan Payoff
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A personal loan at 11% to 14% per year cuts your monthly interest cost by more than two-thirds and keeps your card utilization low.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Bank Hardship Restructuring Plan
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you face job loss or a medical crisis, write to the bank credit team for a structured hardship repayment plan with reduced interest.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-amber-600" />
                    One-Time Settlement (OTS) via CredSettle
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your total card debt has become unmanageable due to compounded interest, CredSettle negotiates a lawful One-Time Settlement to close the account at a reduced amount with an official NOC.
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
                Frequently Asked Questions: Credit Card EMI Rejection
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers on credit card EMI rejection rules, RBI billing dispute timelines, CIBIL score protection, and legal debt relief options in India.
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
                  <strong>RBI Master Direction (Credit Card and Debit Card – Issuance and Conduct) Directions, 2022:</strong> Paragraph 6(b)(iii) (EMI Transparency &amp; Statement Disclosure), Interest Rate &amp; Billing Dispute 30-Day Rules.
                </li>
                <li>
                  <strong>Reserve Bank – Integrated Ombudsman Scheme, 2021:</strong> Grievance escalation for deficiency in banking service and wrongful billing charges.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) (Deficiency in Service) and Section 2(47) (Unfair Trade Practice for Misleading EMI Offers).
                </li>
                <li>
                  <strong>RBI Framework for Credit Information Reporting (2023):</strong> 30-day credit bureau dispute rectification and ₹100 per day delay compensation.
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
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Dispute Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Services
                  </Link>
                  <Link href="/unbilled-credit-card-merchant-emi-foreclosure-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unbilled Credit Card EMI Rules
                  </Link>
                  <Link href="/credit-card-balance-transfer-default-interest-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Balance Transfer Interest Rules
                  </Link>
                  <Link href="/credit-card-pending-chargeback-rbi-shadow-credit-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pending Chargeback Shadow Credit
                  </Link>
                  <Link href="/is-18-percent-gst-waived-credit-card-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    18% GST on Credit Card OTS
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
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
                Specialist in credit card disputes, RBI Master Directions compliance, Ombudsman escalations, and lawful debt settlement resolutions across India.
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
                  CREDIT CARD DEBT SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Stuck With a Rejected Credit Card EMI Bill?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal and debt team helps you challenge wrongful billing under RBI 2022 rules, stop 42% APR compounding, and settle unpayable dues safely.
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
                  <span><strong>RBI Dispute Drafting:</strong> Formal 30-day billing dispute notices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Interest &amp; Fee Waivers:</strong> Negotiate relief from 42% APR traps.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-Harassment Shield:</strong> Stop illegal recovery agent calls.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Lawful OTS Closure:</strong> Official settlement letters and NOC.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Credit Card Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/services/credit-card-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Debt Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Reduce card debt legally &rarr;</span>
                </Link>

                <Link
                  href="/unbilled-credit-card-merchant-emi-foreclosure-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unbilled Credit Card EMI Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Foreclosure &amp; NPA impact &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-balance-transfer-default-interest-rules"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Balance Transfer Default Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Retroactive interest defense &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
