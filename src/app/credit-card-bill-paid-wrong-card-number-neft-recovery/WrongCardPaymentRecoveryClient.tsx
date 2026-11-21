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
  BookOpen,
  Check,
  Lock,
  Phone,
  Bookmark,
  ArrowRight,
  Clock,
  CreditCard,
  Gavel,
  Landmark,
  RefreshCw,
  ShieldAlert
} from 'lucide-react';

export default function WrongCardPaymentRecoveryClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Quick Answer' },
    { id: 'rbi-rules', label: '1. RBI Rules on Wrong Card Payments' },
    { id: 'invalid-vs-valid', label: '2. Invalid vs Valid Card Number' },
    { id: 'payment-modes', label: '3. NEFT, IMPS, UPI & BBPS Rules' },
    { id: 'recovery-sop', label: '4. Step-by-Step Recovery SOP' },
    { id: 'section-72', label: '5. Section 72 & Court Judgments' },
    { id: 'protect-cibil', label: '6. Protect Your Card & CIBIL Score' },
    { id: 'escalation-matrix', label: '7. 3-Tier Escalation & Ombudsman' },
    { id: 'common-mistakes', label: '8. Common Mistakes to Avoid' },
    { id: 'special-scenarios', label: '9. Closed, Blocked & Add-On Cards' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What happens if I pay my credit card bill to a wrong 16-digit card number?',
      a: 'If the wrong number does not exist or fails validation, the bank rejects the payment and refunds your money automatically. If the number belongs to another real cardholder, the payment posts to their card account and needs bank coordination and their consent for reversal.'
    },
    {
      q: 'Why did the bank process my NEFT payment even though the name did not match?',
      a: 'Under RBI circular RBI/2010-11/235, banks process inward NEFT and RTGS transfers solely based on the account or card number entered. They do not match the beneficiary name because spelling variations would slow down automated banking.'
    },
    {
      q: 'How many days does an automatic refund take for an invalid card number?',
      a: 'Under RBI turnaround time rules for failed transactions, failed NEFT or IMPS transfers to invalid numbers usually bounce back within T+1 working days. BBPS payments to non-existent card numbers generally reverse within 5 to 14 working days.'
    },
    {
      q: 'Can a bank reverse money from another person credit card without their consent?',
      a: 'No. Once funds are validly credited to another active customer account, banks cannot unilaterally debit that account without the recipient consent. However, the beneficiary bank must contact the recipient and request written authorization for reversal.'
    },
    {
      q: 'What can I do if the unintended recipient refuses to return my money?',
      a: 'Under Section 72 of the Indian Contract Act, 1872, any person who receives money by mistake is legally bound to return it. You can send a legal notice through an advocate and file a civil recovery suit making the bank a formal party.'
    },
    {
      q: 'Should I wait for the refund before paying my actual credit card bill?',
      a: 'No. Always pay at least the Minimum Amount Due or Total Amount Due on your real credit card before the due date. Waiting for a wrong transfer refund can trigger late payment fees, high interest charges, and negative CIBIL reporting.'
    },
    {
      q: 'How do I recover a wrong credit card bill payment made via GPay, PhonePe, or CRED?',
      a: 'Note your 20-character Bharat Connect or BBPS Transaction Reference ID and raise a dispute inside the payment app immediately. You should also email the card-issuing bank with your UTR and payment screenshot.'
    },
    {
      q: 'Can the card issuer waive late fees if I paid my own old or blocked card number?',
      a: 'Yes. If you mistakenly paid your own closed, upgraded, or hotlisted card number with the same bank, the bank can transfer the credit internally to your active card. You can also request a one-time waiver of late fees and interest.'
    },
    {
      q: 'When can I complain to the RBI Integrated Ombudsman for a wrong card payment?',
      a: 'You can file an online complaint at cms.rbi.org.in if your bank or the beneficiary bank fails to respond, refuses to trace the UTR, or does not resolve your written complaint within 30 days.'
    },
    {
      q: 'How does CredSettle help with wrong credit card payment recovery and billing disputes?',
      a: 'CredSettle helps borrowers trace misrouted payments, draft formal bank and Section 72 legal notices, seek late fee and CIBIL reversals, and escalate unresolved bank lapses to the RBI Integrated Ombudsman.'
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
            <span>RBI Payment Guidelines &amp; Section 72 Recovery Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Recover Credit Card Payment Sent to Wrong Card Number
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Sent your credit card bill to a wrong 16-digit card number via NEFT, IMPS, UPI, or BBPS? Learn how RBI reversal rules work, how to get your money back, and how to protect your CIBIL score from late fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Payment Dispute Help</span>
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
                  <span>Legal Recovery Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Backed by RBI Circular RBI/2010-11/235 and Section 72 of the Indian Contract Act, 1872.
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
                <span>QUICK ANSWER: CAN YOU RECOVER A WRONG CARD PAYMENT?</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">If the Wrong Number Is Invalid:</strong> Most single-digit typos fail card checksum validation. The receiving bank rejects the payment, and you get an automatic refund within T+1 to 14 working days.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">If It Belongs to Someone Else:</strong> Under RBI rules, banks process NEFT and IMPS solely by number. They cannot debit another person&apos;s card without their consent, but must contact them to request reversal.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Your Legal Right Under Section 72:</strong> Under Section 72 of the Indian Contract Act, 1872, anyone receiving money by mistake must return it. You can sue for recovery if they refuse.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Pay Your Real Bill Immediately:</strong> Do not wait for the refund before paying your active credit card bill. Pay at least the Minimum Amount Due now to stop 36% to 48% interest and CIBIL damage.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1 */}
            <section id="rbi-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Framework &amp; Bank Liability</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Rules on Wrong Credit Card Number Payments
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many cardholders feel shocked when an NEFT or IMPS payment goes through even after they typed the wrong 16-digit credit card number. You might wonder why the bank did not stop the transfer when the cardholder name did not match.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The answer lies in RBI Circular <strong>RBI/2010-11/235</strong> (DPSS (CO) EPPD No. 863/04.03.01/2010-11) dated October 14, 2010. Under this rule, banks process electronic transfers like NEFT and RTGS solely based on the beneficiary account or card number.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks do not match the beneficiary name because spelling variations and initials would slow down automated Straight-Through-Processing (STP). As a result, the responsibility for entering the correct 16-digit card number rests with the sender.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, this does not leave you helpless. The same RBI framework requires banks to run transparent grievance systems to trace mistaken credits and help recover your money from the unintended recipient.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="invalid-vs-valid" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CreditCard className="w-4 h-4 text-[#1886ff]" />
                <span>Card Validation &amp; Posting Outcomes</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Invalid vs Valid Card Number: What Happens Next
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit card numbers are not random digits. Most 16-digit Visa, Mastercard, and RuPay numbers use the Luhn algorithm check digit at the end. This math rule means a single wrong digit usually creates an invalid card number.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white rounded-2xl border border-emerald-200 p-5 space-y-2.5 shadow-2xs">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <RefreshCw className="w-4 h-4 flex-shrink-0" />
                    <span>Case A: Number Does Not Exist</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The beneficiary bank&apos;s system fails to find a matching active card profile. The transaction is rejected during clearing or reconciliation.
                  </p>
                  <p className="text-xs font-semibold text-emerald-700">
                    Outcome: Automatic refund to your bank account within T+1 to 14 working days under RBI TAT rules.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-amber-200 p-5 space-y-2.5 shadow-2xs">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>Case B: Belongs to Another Person</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you swapped two digits or copied an old card number that belongs to another customer, the payment posts to their card balance.
                  </p>
                  <p className="text-xs font-semibold text-amber-700">
                    Outcome: Manual reversal request needed. The bank must contact the recipient and obtain their consent.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="payment-modes" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Channel-Wise Reversal Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Payment Mode Comparison: NEFT, IMPS, UPI &amp; BBPS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Your recovery timeline and dispute process depend on which payment channel you used. For example, Bharat BillPay (BBPS / Bharat Connect) apps give you a 20-character reference ID, while NEFT gives you a UTR number.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 border-b border-slate-200">
                      <th className="p-3.5 font-bold">Payment Mode</th>
                      <th className="p-3.5 font-bold">Tracking ID</th>
                      <th className="p-3.5 font-bold">Invalid Card Refund</th>
                      <th className="p-3.5 font-bold">Valid Wrong Card Rule</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">NEFT</td>
                      <td className="p-3.5">16 or 22-char UTR</td>
                      <td className="p-3.5">T+1 working day (RBI TAT)</td>
                      <td className="p-3.5">Bank coordination &amp; recipient consent</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">IMPS</td>
                      <td className="p-3.5">12-digit RRN</td>
                      <td className="p-3.5">T+1 working day (RBI TAT)</td>
                      <td className="p-3.5">Recipient consent via beneficiary bank</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">BBPS / Apps (CRED, GPay)</td>
                      <td className="p-3.5">20-char Bharat Connect ID</td>
                      <td className="p-3.5">5 to 14 working days</td>
                      <td className="p-3.5">BBPS Dispute (DRM) + Biller bank recall</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">UPI</td>
                      <td className="p-3.5">12-digit UPI Ref No.</td>
                      <td className="p-3.5">T+1 working day</td>
                      <td className="p-3.5">App dispute + NPCI UDIR chargeback</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="recovery-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Actionable Recovery Checklist</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Step-by-Step SOP to Recover Your Mistaken Payment
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Speed matters when a payment lands on someone else&apos;s card. Follow these five steps on the same day you spot the error.
              </p>

              <div className="space-y-3">
                {[
                  {
                    step: 'Step 1: Collect All Transaction Proofs Immediately',
                    desc: 'Download your bank debit SMS, account statement, and payment receipt. Note the UTR, RRN, or 20-character Bharat Connect ID, exact amount, date, and the wrong 16-digit card number you entered.'
                  },
                  {
                    step: 'Step 2: Lodge a Written Dispute with Your Remitting Bank',
                    desc: 'Call customer care and also send an email or visit your home branch. Submit a signed letter stating that you paid a credit card bill to a wrong card number by mistake. Ask for an official complaint ticket number.'
                  },
                  {
                    step: 'Step 3: Report to the Payment App & Biller Bank',
                    desc: 'If you used GPay, PhonePe, Paytm, or CRED, raise a wrong-beneficiary ticket in the app under BBPS Dispute Resolution. Also email the credit card issuing bank with your payment proof.'
                  },
                  {
                    step: 'Step 4: Request Inter-Bank Recall & Recipient Consent',
                    desc: 'Your bank will send a recall request to the card-issuing bank. The issuing bank will trace the unintended cardholder and ask for their written consent to debit and refund the excess credit.'
                  },
                  {
                    step: 'Step 5: Track the RBI TAT & Escalate if Delayed',
                    desc: 'Under RBI rules for failed transactions (RBI/2019-20/67), invalid transfers must auto-reverse within T+1 working days. If your bank delays beyond this or refuses to trace the UTR, escalate to the Principal Nodal Officer.'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs space-y-1.5"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">{item.step}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 5 */}
            <section id="section-72" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Indian Contract Act &amp; Precedents</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Section 72 Contract Act &amp; Key Court Judgments
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                What happens if the wrong cardholder refuses to give consent, or ignores the bank&apos;s calls? Indian law does not allow anyone to keep money that came to them by mistake.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Section 72 of the Indian Contract Act, 1872</strong> states clearly: &ldquo;A person to whom money has been paid, or anything delivered, by mistake or under coercion, must repay or return it.&rdquo; Keeping such money is illegal unjust enrichment.
              </p>
              <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-2xs">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Key Court Rulings Supporting Mistaken Payment Recovery
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Sales Tax Officer v. Kanhaiyalal (Supreme Court, 1958):</strong> The Constitution Bench held that Section 72 applies to both mistakes of fact and mistakes of law. Typing a wrong card digit is a clear mistake of fact.
                  </li>
                  <li>
                    <strong>S. Kotrabasappa v. Indian Bank (Karnataka High Court, 1987):</strong> The Court ruled that a customer who receives a mistaken credit must repay it under Section 72 and cannot treat it as a windfall.
                  </li>
                  <li>
                    <strong>Bank of India v. T.R. Arora (Delhi High Court, 1999):</strong> The Court confirmed that a recipient who withdraws or uses money credited by mistake is liable to return the principal along with interest.
                  </li>
                  <li>
                    <strong>Jammu &amp; Kashmir Bank Ltd. v. Attar-Ul-Nissa (Supreme Court):</strong> The Court clarified that while banks cannot act arbitrarily without due process, restitution under Section 72 can be enforced through formal civil recovery proceedings.
                  </li>
                </ul>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This means if the recipient refuses consent, you can send a formal legal notice through an advocate. If needed, you can file a civil recovery suit under Section 72 and ask the court to direct the bank to disclose the recipient&apos;s KYC details.
              </p>
            </section>

            {/* SECTION 6 */}
            <section id="protect-cibil" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Protect Your Active Credit Card</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Protecting Your Real Card &amp; CIBIL Score Today
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The biggest financial risk of a wrong card payment is not only the stuck money. It is missing the due date on your actual credit card while waiting for a refund.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the <strong>RBI Master Direction on Credit Card and Debit Card (2022)</strong>, card issuers give a mandatory 3-day grace period after the payment due date before reporting an account as past due to CIBIL or charging late fees.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, once those 3 days pass, the bank can report a Days Past Due (DPD) mark on your credit report and charge 36% to 48% annual interest on the unpaid balance. Therefore, pay at least your Minimum Amount Due on your real card right away, then pursue your refund separately. If your credit score is already hurt by a disputed late entry, check our{' '}
                <Link href="/cibil-dispute-wrong-overdue-entry-filing-process" className="text-[#1886ff] font-semibold hover:underline">
                  CIBIL wrong overdue dispute guide
                </Link>.
              </p>
            </section>

            {/* SECTION 7 */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Redressal Ladder</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Escalation &amp; RBI Ombudsman Complaint
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank or the card issuer refuses to trace the UTR, ignores your emails, or fails to contact the unintended recipient, follow this three-tier escalation matrix.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 border-b border-slate-200">
                      <th className="p-3.5 font-bold">Escalation Tier</th>
                      <th className="p-3.5 font-bold">Authority</th>
                      <th className="p-3.5 font-bold">When to Escalate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Tier 1</td>
                      <td className="p-3.5">Bank Grievance Redressal Officer &amp; BBPS DRM</td>
                      <td className="p-3.5">Immediately on Day 1 with UTR / Bharat Connect ID</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Tier 2</td>
                      <td className="p-3.5">Principal Nodal Officer (PNO) &amp; DigiSaathi</td>
                      <td className="p-3.5">If unresolved after 7 to 10 working days</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Tier 3</td>
                      <td className="p-3.5">RBI Integrated Ombudsman (cms.rbi.org.in)</td>
                      <td className="p-3.5">After 30 days of no reply or unsatisfactory bank action</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 8 */}
            <section id="common-mistakes" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Avoid Costly Errors</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Common Mistakes That Delay Wrong Payment Refunds
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs">
                <li className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Relying Only on Phone Calls:</strong> Verbal calls leave no paper trail for the RBI Ombudsman. Always send an email and get a written complaint number.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Skipping Your Active Bill Payment:</strong> Waiting 30 days for a refund without paying your real card creates avoidable interest and late fees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Filing Cyber Crime Fraud Reports for a Typo:</strong> A genuine typing error is a civil mistake under Section 72, not cyber theft, unless the recipient actively deceives you.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Not Verifying Saved Beneficiaries:</strong> Delete old or replaced credit card numbers from your net banking NEFT beneficiary list immediately.
                  </span>
                </li>
              </ul>
            </section>

            {/* SECTION 9 */}
            <section id="special-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CreditCard className="w-4 h-4 text-[#1886ff]" />
                <span>Edge Cases &amp; Card Transfers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Special Scenarios: Closed, Blocked &amp; Add-On Cards
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900">Paid Your Own Closed or Hotlisted Card</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you paid an old card number that was replaced or blocked due to loss, the money stays with your own bank. Ask the bank to transfer the credit balance to your active card or refund it to your savings account.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900">Paid an Add-On Card Number Instead of Primary</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Most Indian banks link add-on cards to the primary card billing ledger. Usually the payment adjusts automatically, though some banks take 2 to 3 working days to reconcile. Keep your UTR handy and confirm via statement.
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
                Frequently Asked Questions: Wrong Card Bill Recovery
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers on recovering mistaken credit card payments, RBI consent rules, Section 72 legal remedies, and protecting your CIBIL score.
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
                  <strong>RBI Circular RBI/2010-11/235:</strong> DPSS (CO) EPPD No. 863/04.03.01/2010-11, Processing inward electronic payment transactions based solely on account number information.
                </li>
                <li>
                  <strong>RBI Circular RBI/2019-20/67:</strong> DPSS.CO.PD No.629/02.01.014/2019-20, Harmonisation of Turn Around Time (TAT) and customer compensation for failed transactions.
                </li>
                <li>
                  <strong>RBI Master Direction (Credit Card &amp; Debit Card):</strong> Issuance and Conduct Directions, 2022 (Billing Disputes, Late Fee Basis, and 3-Day Reporting Buffer).
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 72, Liability of person to whom money is paid, or thing delivered, by mistake or under coercion.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Escalation of unresolved banking and electronic fund transfer grievances.
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
                  <a href="https://www.npci.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>NPCI Official Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.digisaathi.info" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>DigiSaathi Digital Payments Helpline</span>
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

              {/* Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Guide
                  </Link>
                  <Link href="/cibil-dispute-wrong-overdue-entry-filing-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    CIBIL Wrong Overdue Dispute
                  </Link>
                  <Link href="/credit-card-pending-chargeback-rbi-shadow-credit-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pending Chargeback Rules
                  </Link>
                  <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Overlimit Fee RBI Refund
                  </Link>
                  <Link href="/merchant-refund-on-blocked-settled-credit-card-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Refund on Blocked Card
                  </Link>
                  <Link href="/unactivated-credit-card-charges-rbi-500-day-penalty" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unactivated Card RBI Penalty
                  </Link>
                  <Link href="/credit-card-minimum-due-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Minimum Due Trap
                  </Link>
                  <Link href="/credit-card-npa-timeline" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card NPA Timeline
                  </Link>
                  <Link href="/stop-credit-card-recovery-calls" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Calls
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Debt Relief
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
                Specialist in RBI payment guidelines, credit card billing disputes, CIBIL rectification, and banking legal notices with extensive experience resolving cardholder disputes across India.
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
                  PAYMENT DISPUTE SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Stuck With a Wrong Card Payment?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team helps draft bank recall letters, Section 72 recovery notices, late fee waivers, and RBI Ombudsman complaints.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Speak With a Legal Expert
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
                  <span>RBI Compliant &bull; 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Bank Recall Coordination:</strong> Structured UTR &amp; BBPS escalation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 72 Legal Notices:</strong> Formal restitution demands.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL &amp; Late Fee Protection:</strong> Dispute wrongful DPD marks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Filing:</strong> Complete CMS portal representation.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/cibil-dispute-wrong-overdue-entry-filing-process"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    CIBIL Wrong Overdue Entry Fix
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Credit report dispute steps &rarr;</span>
                </Link>

                <Link
                  href="/merchant-refund-on-blocked-settled-credit-card-recovery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Merchant Refund on Blocked Card
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Recover stuck card refunds &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-pending-chargeback-rbi-shadow-credit-rules"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Pending Chargeback &amp; Shadow Credit
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI billing dispute rights &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
