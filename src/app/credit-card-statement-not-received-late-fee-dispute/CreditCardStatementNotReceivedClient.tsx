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
  Calendar
} from 'lucide-react';

export default function CreditCardStatementNotReceivedClient() {
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
    { id: 'statutory-framework', label: '1. RBI Statement & Billing Rules' },
    { id: 'payment-window-grace', label: '2. 14-Day Window & 3-Day Grace' },
    { id: 'reversal-math', label: '3. Late Fees, Interest & 18% GST' },
    { id: 'cibil-compensation', label: '4. CIBIL Dispute & Rs 100/Day Rule' },
    { id: 'step-by-step-sop', label: '5. Step-by-Step Reversal SOP' },
    { id: 'borrower-rights', label: '6. Consumer Court & Legal Rights' },
    { id: 'escalation-matrix', label: '7. 3-Tier Escalation Matrix' },
    { id: 'dispute-timeline', label: '8. Dispute to CIBIL Fix Timeline' },
    { id: 'common-scenarios', label: '9. Spam, Address & App Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank charge a late fee if I never received my credit card statement?',
      a: 'No. Under Paragraph 10 of the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct, 2022, card issuers must ensure there is no delay in sending bills. You must get at least 14 days to pay before interest starts. If the bank failed to deliver the statement, you can demand a full reversal of late fees, interest, and GST.'
    },
    {
      q: 'What is the RBI 14-day payment window rule for credit card bills?',
      a: 'The RBI Master Direction requires banks to give cardholders at least one fortnight (14 days) between the statement delivery date and the payment due date. If a delayed or missing bill leaves you with fewer than 14 days to pay, charging interest or late fees violates RBI rules.'
    },
    {
      q: 'How does the RBI 3-day grace period protect me from late fees and CIBIL drops?',
      a: 'Under RBI rules, a bank can levy late payment charges or report your credit card as past due to CIBIL only if the account stays unpaid for more than three days after the due date. Paying within those three grace days stops both late fees and negative credit bureau reporting.'
    },
    {
      q: 'Will the bank reverse 18% GST and finance charges along with the late fee?',
      a: 'Yes. When a bank reverses a wrongful late payment fee and finance charges, it must also reverse the 18% GST charged on those amounts. Always check your next statement to verify that every fee, interest charge, and tax component has been credited back.'
    },
    {
      q: 'What if the bank says the statement was available on its mobile app?',
      a: 'App availability alone does not excuse a bank from its duty to send statements. Under RBI directions, electronic statements require explicit cardholder consent and reliable delivery to your registered email or postal address. If the bank did not send the bill as agreed, it remains a deficiency in service.'
    },
    {
      q: 'How do I remove a late payment mark from CIBIL caused by a missing statement?',
      a: 'First, get written confirmation from the bank reversing the late fee due to non-delivery. Next, ask the bank in writing to send a credit bureau rectification request. Also raise a dispute on the CIBIL portal with your bank email proof attached.'
    },
    {
      q: 'Can I get Rs 100 per day compensation for delayed CIBIL correction?',
      a: 'Yes. Under RBI Circular DoR.FIN.REC.48 dated October 26, 2023, banks get 21 days and credit bureaus get 9 days (30 calendar days total) to resolve a CIBIL data dispute. If they fail to fix an admitted error within 30 days, you are entitled to Rs 100 per day until the correction is updated.'
    },
    {
      q: 'How long does a bank have to resolve my credit card billing dispute?',
      a: 'Under the RBI Master Direction, a card issuer must investigate a billing dispute and give a clear explanation with documentary proof within a maximum of 30 days from your complaint date. If unresolved after 30 days, you can escalate directly to the RBI Ombudsman.'
    },
    {
      q: 'Can I approach Consumer Court if the bank refuses to reverse the charges?',
      a: 'Yes. Charging late fees and ruining a credit score after failing to deliver a billing statement is a deficiency in service under Section 2(11) of the Consumer Protection Act, 2019. You can file a complaint in the District Consumer Commission for fee refunds, CIBIL restoration, and compensation for mental agony.'
    },
    {
      q: 'How does CredSettle help with credit card late fee and CIBIL disputes?',
      a: 'CredSettle drafts formal dispute notices citing RBI Master Directions, escalates unresolved claims to the bank Principal Nodal Officer and RBI Ombudsman, removes wrongful late payment entries from CIBIL, and negotiates affordable settlements if your card balance has spiraled.'
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
            <span>RBI Master Direction on Credit Cards &amp; Billing Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Waive Credit Card Late Fees When Statement Never Arrived
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did your bank charge late fees, finance interest, and 18% GST because your credit card bill never reached you? Learn how RBI billing rules protect you, reverse unfair charges, and fix CIBIL errors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Dispute Late Fee &amp; CIBIL Error</span>
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
                  Protected under RBI Master Direction 2022, CIC Compensation Rules 2023, and Consumer Protection Act, 2019.
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
                <span>EXECUTIVE BRIEF: RBI STATEMENT NON-DELIVERY &amp; LATE FEE RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory 14-Day Payment Window:</strong> Under RBI rules, banks must send your bill with zero delay and give at least 14 days to pay before charging interest.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">3-Day Statutory Grace Period:</strong> Banks cannot charge late fees or report your card as past due to CIBIL unless it remains unpaid for more than 3 days after the due date.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Full Fee &amp; GST Reversal:</strong> When a missing statement causes a missed payment, you have the right to a 100% reversal of late fees, finance interest, and 18% GST.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Rs 100/Day CIBIL Delay Penalty:</strong> If the bank or CIBIL fails to fix a disputed credit report entry within 30 calendar days, you can claim Rs 100 per day.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">30-Day Ombudsman Escalation:</strong> If the bank rejects your dispute or ignores it for 30 days, file a free online complaint with the RBI Integrated Ombudsman.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Framework: RBI Statement & Billing Rules */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Central Bank Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Framework: RBI Statement &amp; Billing Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many credit card holders in India face a sudden shock when checking their accounts. They discover hefty late payment fees, interest charges, and even a drop in their CIBIL score, even though they never received their monthly statement.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks often blame email servers, postal delays, or customer spam folders. However, the Reserve Bank of India (RBI) places the legal duty of timely bill delivery directly on the card issuer.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Paragraph 10 of the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct, 2022 (updated March 2024), banks and NBFCs must ensure there is no delay in dispatching or emailing bills.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                These directions also require card issuers to get explicit customer consent before switching from paper bills to electronic statements. If a bank fails to send your statement through your chosen channel, penalizing you for late payment breaks RBI rules.
              </p>
            </section>

            {/* SECTION 2: The 14-Day Payment Window & 3-Day Grace Rule */}
            <section id="payment-window-grace" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Deadlines &amp; Grace Buffers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. The 14-Day Payment Window &amp; 3-Day Grace Rule
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI Master Direction gives cardholders two clear time protections. Every bank and credit card issuer in India must follow both rules strictly.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, you must receive your billing statement with at least one fortnight (14 days) left to make payment before interest starts accruing. If a delayed email or courier leaves you with only 4 or 5 days before the due date, the bank cannot fairly charge interest.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, RBI mandates a mandatory 3-day grace period after the payment due date. A bank can charge a late fee or report your account as past due to CIBIL only if the balance stays unpaid for more than 3 days past the due date.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For example, if your due date was the 10th of the month and you paid the minimum or full due by the 13th, the bank cannot levy any late payment fee or mark your CIBIL report as late.
              </p>
            </section>

            {/* SECTION 3: Reversal Math: Late Fees, Interest & 18% GST */}
            <section id="reversal-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Fee Calculation Rules &amp; Full Reversal Breakdown</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Reversal Math: Late Fees, Interest &amp; 18% GST
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A missing credit card statement triggers a chain of extra charges. Most banks charge a flat late fee based on your balance tier, plus 36% to 45% annual finance charges, plus 18% GST on every fee and interest entry.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Also, under RBI rules, late fees and interest can only be calculated on the unpaid amount after the due date, never on the total statement amount if you made a partial payment. When you win a reversal, all four cost layers must be refunded.
              </p>

              {/* Representative Reversal Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample Reversal Breakdown (Rs 45,000 Unpaid Bill)</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">100% Waiver Eligible on Non-Delivery</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Charge Component</th>
                        <th className="p-3">Typical Bank Levy</th>
                        <th className="p-3">RBI Legal Position</th>
                        <th className="p-3 text-right">Amount to Reclaim</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Late Payment Fee</td>
                        <td className="p-3 font-mono">Rs 1,100</td>
                        <td className="p-3 text-emerald-600 font-semibold">Waived if statement not sent</td>
                        <td className="p-3 text-right font-bold text-slate-800 font-mono">Rs 1,100</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Finance Charges (Interest)</td>
                        <td className="p-3 font-mono">Rs 1,650 (approx.)</td>
                        <td className="p-3 text-emerald-600 font-semibold">Violates 14-day payment rule</td>
                        <td className="p-3 text-right font-bold text-slate-800 font-mono">Rs 1,650</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">18% GST on Fee &amp; Interest</td>
                        <td className="p-3 font-mono">Rs 495</td>
                        <td className="p-3 text-amber-600 font-semibold">Must reverse with base charges</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">Rs 495</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Overlimit Fee (If Triggered)</td>
                        <td className="p-3 font-mono">Rs 500 + GST</td>
                        <td className="p-3 text-rose-600 font-semibold">Invalid if caused by bank fees</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">Rs 590</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Wrongful Billing</td>
                        <td className="p-3 font-mono text-[#1886ff]">1 Billing Cycle</td>
                        <td className="p-3 text-[#1886ff]">Full Credit Note + CIBIL Fix</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">Rs 3,835 Saved</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: CIBIL Dispute & Rs 100/Day Delay Compensation */}
            <section id="cibil-compensation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Rectification &amp; Daily Penalty Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Dispute &amp; Rs 100/Day Delay Compensation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A late fee reversal is only half the battle. If the bank reported a 30 Days Past Due (DPD) mark to CIBIL, Experian, Equifax, or CRIF High Mark, your credit score can drop by 50 to 100 points overnight.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once the bank accepts that your statement was not delivered, it must update your repayment status back to zero DPD. Under RBI Circular DoR.FIN.REC.48 dated October 26, 2023, banks and credit bureaus face strict timelines to fix such errors.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                From the day you file a formal CIBIL dispute, the bank gets 21 calendar days to verify and send corrected data. The credit bureau then gets 9 calendar days to update your report, making 30 calendar days in total.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your credit report is not corrected within 30 calendar days, the party at fault must pay you Rs 100 per calendar day of delay. They must credit this compensation directly to your bank account or UPI ID within 5 working days of resolution.
              </p>
            </section>

            {/* SECTION 5: Step-by-Step SOP: Reversing Unfair Late Fees */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP: Reversing Unfair Late Fees
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six practical steps immediately after noticing a late fee from an undelivered credit card bill.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Pay the Undisputed Principal Amount Immediately
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Clear your actual spend amount right away so daily interest stops growing. Paying the principal shows good faith and stops your account from slipping toward NPA status.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Gather Delivery Failure Evidence
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check your registered email inbox, spam folder, and SMS logs for the billing month. Take screenshots showing no statement arrived and confirm your registered email or address in bank records is accurate.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Email Customer Care Citing RBI Paragraph 10
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Send a written email instead of only calling. Cite Paragraph 10 of the RBI Master Direction on Credit Cards (14-day payment window) and demand a 100% reversal of late fees, interest, and 18% GST.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Demand Written Proof of Statement Dispatch
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank claims it sent the statement, ask for server email delivery logs or India Post courier tracking numbers. Under RBI rules, the bank carries the burden of proving timely dispatch.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: File a Formal CIBIL Dispute with Bank Account Details
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once the bank admits the billing error, raise an online dispute on CIBIL, Experian, Equifax, and CRIF. Include your bank account or UPI details so any delay beyond 30 days triggers Rs 100/day compensation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Escalate to RBI Ombudsman on Day 31
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank refuses the reversal or fails to reply within 30 days, lodge a free complaint at cms.rbi.org.in. Attach your ticket numbers, screenshots, and statement logs for a binding Ombudsman order.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Consumer Court Rights & Deficiency in Service */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Consumer Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Consumer Court Rights &amp; Deficiency in Service
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Beyond RBI Ombudsman relief, Indian consumer law gives strong protection against unfair credit card billing. Penalizing a customer after failing to deliver a monthly bill is treated as a clear deficiency in service.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 2(11) and Section 39 of the Consumer Protection Act, 2019, District Consumer Commissions can order full refunds, credit report cleanups, and extra compensation for harassment.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Deficiency in Service Under CPA 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Consumer commissions consistently hold that banks cannot profit from their own failure to deliver statements. Failing to send a bill breaches the basic duty of care owed to cardholders.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Unfair Trade Practice Claims</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Adding compounding interest and 18% GST on an uncommunicated bill qualifies as an unfair trade practice. Courts can order punitive damages to deter repeated billing negligence.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Compensation for Loan Rejection Loss</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a wrongful CIBIL late mark caused your home loan or car loan to be rejected or priced at a higher interest rate, you can claim compensation for that financial loss.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>No Compulsory Goodwill Waiver Needed</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks often say they are granting a one-time goodwill waiver. Insist on a billing error reversal in writing so it does not eat up your future waiver quota or leave your CIBIL damaged.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: 3-Tier Escalation Matrix: GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Escalation Matrix: GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Frontline phone agents often read from scripts and refuse late fee waivers. Use the official three-tier escalation route to reach officers with authority to reverse charges and fix CIBIL data.
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
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Audits email/SMS dispatch logs and approves late fee, interest, and GST reversal.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Reviews rejected claims, orders CIBIL DPD removal, and prevents recovery calls.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-Complaint</td>
                      <td className="p-3">Issues binding orders on cms.rbi.org.in for full refund, CIBIL cleanup, and Rs 100/day penalty.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 8: Dispute Timeline: Billing Date to CIBIL Fix */}
            <section id="dispute-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Dispute Timeline: Billing Date to CIBIL Fix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking each milestone helps you prove regulatory breaches and claim statutory compensation if the bank delays your fix.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Regulatory Phase</th>
                      <th className="p-3">Bank / CIC Duty</th>
                      <th className="p-3">Cardholder Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Statement Date</td>
                      <td className="p-3 font-mono text-[11px]">Bill Generation</td>
                      <td className="p-3">Must dispatch bill promptly with at least 14 days before due date.</td>
                      <td className="p-3">Check registered email and SMS around your normal cycle date.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Due Date + 3 Days</td>
                      <td className="p-3 font-mono text-[11px]">RBI Grace Window</td>
                      <td className="p-3">Cannot levy late fees or report DPD to CIBIL during these 3 days.</td>
                      <td className="p-3">Pay principal immediately if you notice a missed bill within 3 days.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Dispute Day 1 to 21</td>
                      <td className="p-3 font-mono text-[11px]">Bank Review Window</td>
                      <td className="p-3">Bank must verify delivery logs, reverse charges, and update CICs.</td>
                      <td className="p-3">Email GRO/PNO citing RBI Paragraph 10 and save ticket numbers.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Dispute Day 22 to 30</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">CIC Update Window</td>
                      <td className="p-3">Credit bureau has 9 days to reflect bank corrections on your report.</td>
                      <td className="p-3 font-bold text-amber-800">Track CIBIL dispute status and ensure bank details are attached.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 31 Onward</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Penalty &amp; Ombudsman</td>
                      <td className="p-3">Rs 100/day CIBIL delay penalty starts; Ombudsman jurisdiction opens.</td>
                      <td className="p-3 font-bold text-slate-900">File complaint on cms.rbi.org.in for binding relief and payout.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Common Scenarios: Spam Filters, Address & Apps */}
            <section id="common-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Billing Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Common Scenarios: Spam Filters, Address &amp; Apps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks often raise common excuses when rejecting late fee reversal requests. Here is how RBI rules apply in each situation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Bank Email Blocked or Bounced
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a bank email bounced due to server or authentication issues, the bank receives a bounce log. It must send an alternate SMS alert or physical bill instead of charging a late fee.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Physical Bill vs E-Statement Consent
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you never consented to paperless billing, the bank cannot switch you to email-only statements. Failure to post a physical bill to your recorded address makes any late fee invalid.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    App-Only Statement Excuse
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks sometimes argue you should have checked their mobile app. However, RBI rules require active dispatch of statements, not passive hosting inside a login portal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Unupdated Address or Email by Customer
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you changed your email or home address without informing the bank, the bank is not at fault for sending the bill to your old details. Always keep KYC contact details updated.
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
                Frequently Asked Questions: Statement Not Received
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers on reversing credit card late fees, removing unfair interest and 18% GST, and fixing CIBIL errors when your statement never arrived.
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
                  <strong>RBI Master Direction (Credit Card and Debit Card Issuance and Conduct Directions, 2022):</strong> RBI/2022-23/92, DoR.AUT.REC.No.27/24.01.041/2022-23 (updated March 7, 2024), Paragraph 10 (Billing, 14-day payment window, and 3-day grace period) and Paragraph 14 (Grievance Redressal).
                </li>
                <li>
                  <strong>RBI Credit Information Compensation Circular:</strong> RBI/2023-24/72, DoR.FIN.REC.48/20.16.003/2023-24, Framework for Compensation to Customers for Delayed Updation/Rectification of Credit Information (Rs 100/day after 30 calendar days).
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Clause 8 and Clause 10, Deficiency in Service and Billing Dispute Adjudication.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) (Deficiency of Service), Section 2(47) (Unfair Trade Practice), and Section 39 (Compensation Orders).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005:</strong> Section 21 (Alteration of Credit Information Files and Dispute Resolution).
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
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Dispute Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Commission</span>
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
                  <Link href="/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Guide
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Services
                  </Link>
                  <Link href="/change-credit-card-billing-cycle-date-rbi-salary-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Change Card Billing Cycle Date
                  </Link>
                  <Link href="/credit-card-auto-debit-failed-sufficient-balance-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Auto-Debit Failed CIBIL Fix
                  </Link>
                  <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Overlimit Fee RBI Refund
                  </Link>
                  <Link href="/unactivated-credit-card-charges-rbi-500-day-penalty" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unactivated Card Rs 500 Penalty
                  </Link>
                  <Link href="/credit-card-pending-chargeback-rbi-shadow-credit-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pending Chargeback Bill Rules
                  </Link>
                  <Link href="/bank-increased-credit-card-apr-interest-rbi-opt-out" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Card Interest Rate Hike Opt-Out
                  </Link>
                  <Link href="/is-18-percent-gst-waived-credit-card-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    18% GST on Credit Card OTS
                  </Link>
                  <Link href="/stop-credit-card-recovery-calls" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Card Recovery Calls
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
                Specialist in credit card billing disputes, CIBIL rectification, RBI Master Directions, and debt settlement resolutions with extensive experience holding card issuers accountable.
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
                  BILLING &amp; CIBIL RELIEF
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Charged Late Fees Without a Statement?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team drafts formal notices under RBI Paragraph 10, recovers wrongful late fees, interest, and 18% GST, and clears false late payment marks from your CIBIL report.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Reverse Late Fees Now
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
                  <span><strong>100% Fee &amp; GST Reversal:</strong> Recover wrongful penalties and interest.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL DPD Removal:</strong> Restore your credit score from false late marks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Rs 100/Day Penalty Claims:</strong> Enforce RBI 30-day CIBIL update timelines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Filing:</strong> Complete representation on cms.rbi.org.in.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/change-credit-card-billing-cycle-date-rbi-salary-rule"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Change Credit Card Billing Date
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI salary sync rule &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-auto-debit-failed-sufficient-balance-cibil"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Auto-Debit Failed With Balance
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Reverse bounce fee &amp; CIBIL &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-overlimit-fee-without-consent-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Overlimit Fee Without Consent
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Claim RBI fee refund &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
