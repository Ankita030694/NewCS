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
  Calendar,
  Ban,
  RefreshCw
} from 'lucide-react';

export default function UpiAutopayPauseRevokeClient() {
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
    { id: 'statutory-framework', label: '1. RBI & NPCI UPI Autopay Rules' },
    { id: 'pause-vs-revoke', label: '2. Pause vs Revoke Comparison' },
    { id: 'mcc-7322-non-revocable', label: '3. Why Apps Hide Loan Buttons' },
    { id: 'pre-debit-notice', label: '4. 24-Hour Notice & EMI Limits' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'section-25-liability', label: '6. Section 25 Law & Court Rulings' },
    { id: 'step-by-step-sop', label: '7. Safely Cancel a Loan Mandate' },
    { id: 'charges-and-penalties', label: '8. Bounce Fees & Retry Caps' },
    { id: 'escalation-matrix', label: '9. 3-Tier Escalation Matrix' },
    { id: 'specialized-scenarios', label: '10. OTS, Fintechs & App Switching' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is the main difference between pausing and revoking a UPI Autopay mandate?',
      a: 'Pausing stops automatic debits for a short set period, and you can resume the mandate later without making a new one. Revoking cancels the mandate for good, so it can never run again unless you create a brand-new mandate with your UPI PIN.'
    },
    {
      q: 'Why are the Pause and Revoke buttons missing for my personal loan UPI Autopay?',
      a: 'Under NPCI Circular OC 125A dated July 20, 2022, loan EMI mandates use Merchant Category Code (MCC) 7322 with a non-revocable flag. Because of this rule, apps like Google Pay, PhonePe, Paytm, and BHIM must hide direct Pause and Revoke buttons for loan EMIs.'
    },
    {
      q: 'Does pausing or revoking UPI Autopay stop my personal loan EMI liability?',
      a: 'No. Stopping an auto-debit only stops the payment rail. Your loan contract stays active, so interest, late fees, and overdue CIBIL reporting still apply unless you pay by another mode or settle the loan formally.'
    },
    {
      q: 'What is the RBI 24-hour pre-debit notice rule for UPI Autopay loan EMIs?',
      a: 'Under the RBI E-mandate Framework, your bank or lender must send a pre-debit alert at least 24 hours before charging your account. The alert must list the lender name, exact EMI sum, debit date, and Unique Mandate Number (UMN).'
    },
    {
      q: 'Does the RBI Rs 1 lakh UPI Autopay limit apply to personal loan EMIs?',
      a: 'No. The Rs 1,00,000 no-PIN limit applies only to mutual fund SIPs, insurance premiums, and credit card bills. Standard personal loan EMIs stay capped at Rs 15,000 per debit without entering a fresh UPI PIN.'
    },
    {
      q: 'Can a lender file a criminal case under Section 25 of the PSS Act if UPI Autopay fails?',
      a: 'Yes. Under Section 25 of the Payment and Settlement Systems Act, 2007, a bounced electronic loan debit due to low funds carries penalties like Section 138 cheque bounce law. The lender must send a written notice within 30 days and give you 15 days to pay.'
    },
    {
      q: 'How many times can a lender retry a failed UPI Autopay debit in one cycle?',
      a: 'Under NPCI Circular OC 215A dated May 21, 2025, a lender gets 1 main attempt plus up to 3 retries per billing cycle. All AutoPay debits must also run only during non-peak hours, outside 10:00 AM to 1:00 PM and 5:00 PM to 9:30 PM.'
    },
    {
      q: 'How do I revoke a non-revocable loan UPI mandate after closing or settling my loan?',
      a: 'NPCI OC 125A requires every lender to offer a mandate cancellation path on its own app or website. Submit your closure letter or NOC there, email the lender support desk with your UMN, and ask them to send a merchant revoke instruction.'
    },
    {
      q: 'Can an NBFC add interest on top of UPI Autopay bounce fees?',
      a: 'No. Under the RBI Penal Charges Circular effective April 1, 2024, lenders cannot charge penal interest or compound bounce fees into your loan principal. Penal fees must be flat, fair, and clearly shown in your Key Facts Statement (KFS).'
    },
    {
      q: 'How does CredSettle help if a lender blocks mandate revocation or sends Section 25 notices?',
      a: 'CredSettle audits your loan ledger for illegal bounce fees, files formal RBI Ombudsman complaints for unauthorized post-closure debits, defends against Section 25 PSS Act notices, and negotiates documented One-Time Settlements (OTS).'
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
            <span>RBI E-Mandate Framework &amp; NPCI Circular OC 125A Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            RBI 24-Hour Notice &amp; UPI Autopay Rules for Loan EMIs
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Learn the real difference between pausing and revoking a UPI Autopay mandate for personal loan EMIs. Know why apps hide loan cancel buttons, how the 24-hour alert works, and how to stay safe from Section 25 bounce cases.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Free Legal EMI Advice</span>
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
                  <span>Statutory Borrower Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Guided by RBI E-mandate Framework, NPCI OC 125A, and Section 25 of the PSS Act, 2007.
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
                <span>EXECUTIVE BRIEF: UPI AUTOPAY PAUSE VS REVOKE FOR LOAN EMIS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Pause vs Revoke Basics:</strong> Pause stops auto-debits for a short window and lets you resume later. Revoke kills the mandate for good, so it can never pull money again.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Loan Apps Lock In-App Buttons:</strong> Under NPCI Circular OC 125A, loan EMI mandates (MCC 7322) use a non-revocable flag. UPI apps must hide Pause and Revoke buttons for active loans.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory 24-Hour Notice:</strong> RBI rules force banks and lenders to send an SMS or email alert at least 24 hours before any EMI debit. Missing this alert gives you grounds to dispute bounce fees.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Debt Does Not Vanish:</strong> Even if your UPI app lets you pause or revoke a mandate, your loan EMI is still due. Unpaid EMIs still trigger late fees, CIBIL drops, and Section 25 legal notices.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict Retry &amp; Penalty Caps:</strong> NPCI caps lenders at 1 debit try plus 3 retries per cycle during non-peak hours. RBI also bans lenders from adding interest on top of bounce fees.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Framework: RBI & NPCI UPI Autopay Rules */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank &amp; Payment Network Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Framework: RBI &amp; NPCI UPI Autopay Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many Indian borrowers link personal loan EMIs to UPI Autopay on Google Pay, PhonePe, Paytm, or BHIM. When money gets tight or a loan ends, borrowers often try to pause or cancel the mandate in their UPI app.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, loan mandates follow much stricter laws than Netflix or phone bills. Two bodies set the rules: the Reserve Bank of India (RBI) and the National Payments Corporation of India (NPCI).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI brought UPI into its e-mandate rulebook in January 2020 via Circular RBI/2019-20/139. In June 2022, RBI raised the auto-debit cap to Rs 15,000 per debit. On April 21, 2026, RBI merged eight past circulars into one master rulebook: the Digital Payments E-mandate Framework, 2026 (Circular S56).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Alongside RBI rules, NPCI issued Circular OC 125 and its July 2022 addendum OC 125A. These NPCI rules treat loan EMIs as a binding promise to pay a debt under the Payment and Settlement Systems (PSS) Act, 2007. That legal tag changes how Pause and Revoke work for personal loans.
              </p>
            </section>

            {/* SECTION 2: Pause vs Revoke: Technical & Legal Differences */}
            <section id="pause-vs-revoke" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <RefreshCw className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Feature &amp; Impact Breakdown</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Pause vs Revoke: Technical &amp; Legal Differences
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing how Pause differs from Revoke helps you avoid surprise debits or broken loan terms. Both buttons stop automatic bank pulls, yet they act in very different ways.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Pause puts your mandate on hold for dates you pick. Revoke deletes the mandate permanently. Neither choice erases a loan balance that you still legally owe.
              </p>

              {/* Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">UPI Autopay: Pause vs Revoke for Personal Loan EMIs</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">NPCI &amp; RBI Comparison</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Feature</th>
                        <th className="p-3">Pause UPI Autopay</th>
                        <th className="p-3">Revoke UPI Autopay</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Action Type</td>
                        <td className="p-3">Short hold on auto-debits for chosen dates.</td>
                        <td className="p-3">Final, permanent end of the mandate.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Can You Undo It?</td>
                        <td className="p-3 text-emerald-700 font-semibold">Yes. Tap Resume anytime without a new setup.</td>
                        <td className="p-3 text-rose-700 font-semibold">No. You must register a fresh mandate later.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Allowed for MCC 7322 Loans?</td>
                        <td className="p-3 text-amber-700 font-semibold">Hidden in UPI apps under NPCI OC 125A.</td>
                        <td className="p-3 text-amber-700 font-semibold">Hidden in UPI apps; needs lender portal approval.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">UPI PIN Check</td>
                        <td className="p-3">Needs app check or UPI PIN (when visible).</td>
                        <td className="p-3">Always needs UPI PIN or lender-side revoke signal.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Effect on Loan EMI</td>
                        <td className="p-3">EMI still stays due; late fees and CIBIL DPD apply.</td>
                        <td className="p-3">Loan stays active unless you pay, close, or settle.</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Best Real Use Case</td>
                        <td className="p-3 text-[#1886ff]">Short hold on non-7322 bills or approved EMI shift.</td>
                        <td className="p-3 text-[#1886ff]">Loan closure, OTS payout, or bank account change.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Why UPI Apps Hide Pause & Revoke for Loan EMIs */}
            <section id="mcc-7322-non-revocable" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Ban className="w-4 h-4 text-[#1886ff]" />
                <span>NPCI OC 125A &amp; Non-Revocable Flag Explained</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Why UPI Apps Hide Pause &amp; Revoke for Loan EMIs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers open Google Pay or PhonePe, tap their personal loan Autopay entry, and see no Pause or Cancel button. This is not an app bug. It happens because of a strict NPCI directive.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before mid-2022, some borrowers took quick app loans and canceled their UPI mandate the next day to skip EMIs. To stop this gap, NPCI issued Circular OC 125A on July 20, 2022.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under OC 125A, banks and NBFCs use Merchant Category Code (MCC) 7322 for loan EMIs. When setting up the mandate, the lender marks a hidden rule flag as non-revocable (revokeable = N). Your UPI app reads this flag and locks both the Pause and Revoke buttons.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                At the same time, NPCI also put a duty on lenders. Every bank or NBFC using MCC 7322 must give you a cancel option on its own website or loan app. Once you close your loan or switch banks, the lender must approve and trigger the revoke from its end.
              </p>
            </section>

            {/* SECTION 4: RBI 24-Hour Pre-Debit Notice & Limit Rules */}
            <section id="pre-debit-notice" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Borrower Alerts &amp; Transaction Caps</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. RBI 24-Hour Pre-Debit Notice &amp; Limit Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even when a loan mandate is non-revocable in your UPI app, your lender cannot pull money silently. The RBI E-mandate Framework gives you clear notice rights and strict debit caps.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, your bank or lender must send a Pre-Debit Notification (PDN) at least 24 hours before charging your account. For example, if your EMI is due on the 5th, the alert must reach you by the 4th.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The 24-hour alert must show the lender name, exact debit amount, date, Unique Mandate Number (UMN), and debit reason. If a lender charges your account without sending this notice, you can dispute any bounce fee or wrong debit.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, watch out for a common myth about the Rs 1 lakh limit. RBI raised the no-PIN auto-debit cap to Rs 1,00,000 in December 2023 only for mutual funds, insurance, and credit card bills. Standard personal loan EMIs stay capped at Rs 15,000 per debit without entering a UPI PIN. Larger EMIs either ask for a fresh UPI PIN each month or use e-NACH instead.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: UPI Autopay EMI Mandate Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart highlights the split between Pause and Revoke, the MCC 7322 loan lock, and the mandatory RBI 24-hour pre-debit notice for personal loan EMIs.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/upi-autopay-mandate-pause-vs-revoke-personal-loan-emi.jpg"
                    alt="UPI Autopay Pause vs Revoke Rules and RBI 24-Hour Notice for Personal Loan EMIs"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle EMI Mandate Framework • RBI &amp; NPCI Compliant</span>
                  <a
                    href="/images/infographics/upi-autopay-mandate-pause-vs-revoke-personal-loan-emi.jpg"
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

            {/* SECTION 6: Section 25 PSS Act & Court Rulings on Bounces */}
            <section id="section-25-liability" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Law &amp; Court Precedents</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Section 25 PSS Act &amp; Court Rulings on Bounces
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers believe that UPI Autopay is safer than giving post-dated cheques. That is false. Under Section 25 of the Payment and Settlement Systems (PSS) Act, 2007, a bounced electronic debit carries the same legal weight as a bounced cheque under Section 138 of the Negotiable Instruments Act, 1881.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your UPI Autopay EMI bounces for low funds or a bad-faith stop order, the lender can start a criminal case. The law allows up to two years in jail, a fine up to twice the bounced EMI, or both. Yet lenders must strictly obey court-backed steps first.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Delhi HC: Ritu Jain v. State (2019)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Delhi High Court confirmed that Section 25(5) of the PSS Act brings in Chapter XVII of the NI Act. Courts check stop-payment bounce cases closely to see if the borrower tried to dodge a real debt.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Calcutta HC: N.P. Mathi Lingan Case</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High Courts have quashed Section 25 cases when lenders missed the strict 30-day rule. The lender must send a written notice within 30 days of the bank return memo and give you 15 days to pay.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Supreme Court: Sripati Singh (2021)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court held that a payment tool taken as security becomes active once a loan EMI falls due. Presenting that mandate after default creates a valid legal cause of action.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Section 31 PSS Act: Right to Compound</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 25 cases are compoundable under Section 31 of the PSS Act. If you settle the loan with the lender through an OTS or court mediation, the criminal case can be legally closed.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Step-by-Step SOP: Safely Cancel a Loan Mandate */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Step-by-Step SOP: Safely Cancel a Loan Mandate
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six clean steps to pause, switch, or cancel a personal loan UPI Autopay mandate without triggering illegal charges or surprise legal notices.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                      1
                    </span>
                    Stage 1: Locate Your UMN Inside the Original UPI App
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Open the exact app you used to create the mandate (Google Pay Profile &gt; Autopay, PhonePe Manage Payments &gt; Autopay, or BHIM Mandates). Save a screenshot of the Unique Mandate Number (UMN), lender name, and debit cap.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                      2
                    </span>
                    Stage 2: Check Whether Your Mandate Is MCC 7322 Locked
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check if Pause or Cancel appears on screen. If both buttons are hidden, the lender tagged your loan under MCC 7322 as non-revocable. Do not uninstall the UPI app, because deleting the app never cancels a bank-level mandate.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                      3
                    </span>
                    Stage 3: Choose the Right Legal Ground Before Revoking
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If your loan is paid off or settled, keep your No Objection Certificate (NOC) ready. If you are switching salary banks, set up the new bank mandate first. If you face job loss or medical hardship, write a formal hardship email before the next debit date.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                      4
                    </span>
                    Stage 4: Trigger Revocation on the Lender Portal or Email
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Log into the lender app or web portal and use its mandate cancel option as required by NPCI OC 125A. Also email customer care with your loan account number, UMN, and NOC so you hold a dated written trail.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                      5
                    </span>
                    Stage 5: Watch for the 24-Hour Alert and Peak-Hour Violations
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Track every SMS and email before the EMI date. If the lender runs a debit after loan closure, skips the 24-hour alert, or tries more than 4 times in one cycle, save bank statements and SMS logs as proof.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                      6
                    </span>
                    Stage 6: Verify Cancelled Status and Demand Fee Refunds
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once the lender sends the revoke signal, check that your UPI app shows the mandate under Completed or Revoked. If money was pulled wrongly, demand a full refund plus reversal of bank return fees via the Grievance Officer.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Bounce Fees, Retries & RBI Penal Charge Rules */}
            <section id="charges-and-penalties" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>NPCI Retry Caps &amp; RBI Penal Fee Ban</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Bounce Fees, Retries &amp; RBI Penal Charge Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A failed auto-debit often brings two separate charges: your home bank return fee and the lender bounce fee. Two major rules protect borrowers from unfair fee traps.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, NPCI Circular OC 215A (May 21, 2025) caps AutoPay execution to 1 main try plus up to 3 retries per cycle. Debits are also blocked during peak UPI hours (10:00 AM to 1:00 PM and 5:00 PM to 9:30 PM).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, the RBI Penal Charges Circular (effective April 1, 2024) bans lenders from charging penal interest or adding bounce charges to your loan principal. Every penal fee must be flat, fair, and listed upfront in your Key Facts Statement (KFS).
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Key Regulatory Caps &amp; Borrower Protections Matrix</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">RBI 2024-2026 &amp; NPCI Rules</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Rule Area</th>
                        <th className="p-3">Strict Legal Limit</th>
                        <th className="p-3">Governing Circular</th>
                        <th className="p-3">Borrower Remedy on Breach</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Pre-Debit Notice</td>
                        <td className="p-3 font-mono font-bold text-slate-900">Min 24 Hours Prior</td>
                        <td className="p-3">RBI E-mandate 2026 (S56)</td>
                        <td className="p-3 text-emerald-700 font-semibold">Dispute debit &amp; claim return fee refund</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">No-PIN Loan EMI Cap</td>
                        <td className="p-3 font-mono font-bold text-slate-900">Rs 15,000 / Debit</td>
                        <td className="p-3">RBI/2022-23/73</td>
                        <td className="p-3">Debits above Rs 15,000 need fresh UPI PIN</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Retries Per Cycle</td>
                        <td className="p-3 font-mono font-bold text-amber-700">1 Main + 3 Retries</td>
                        <td className="p-3">NPCI OC 215A (2025)</td>
                        <td className="p-3">Challenge excess hits &amp; stacked bounce fees</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Execution Hours</td>
                        <td className="p-3 font-mono font-bold text-slate-900">Non-Peak Only</td>
                        <td className="p-3">NPCI OC 215A (2025)</td>
                        <td className="p-3">Blocked 10 AM-1 PM &amp; 5 PM-9:30 PM</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Penal Charge Interest</td>
                        <td className="p-3 font-mono text-[#1886ff]">0% Compounding</td>
                        <td className="p-3">RBI/2023-24/53 &amp; 102</td>
                        <td className="p-3 text-[#1886ff]">Demand full reversal of interest on penalties</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix: Bank to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. 3-Tier Escalation Matrix: Bank to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your lender keeps pulling money after loan closure, refuses to revoke a closed MCC 7322 mandate, or skips the 24-hour notice, use the three-tier RBI escalation path below.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Response Window</th>
                      <th className="p-3">Relief You Can Demand</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Lender Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 14 Days</td>
                      <td className="p-3">Immediate mandate revoke via UMN and refund of wrong debits or hidden fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">Up to 30 Days</td>
                      <td className="p-3">Audit of missing 24-hour alerts, bounce fee reversals, and CIBIL correction.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI Integrated Ombudsman (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">After 30 Days</td>
                      <td className="p-3">Binding order for refund, mandate closure, and compensation for service deficiency.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Special Cases: OTS Closure, Fintechs & Switching */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Borrower Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: OTS Closure, Fintechs &amp; Switching
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Standard app steps do not always cover tricky situations like loan settlements, fintech apps, or moving UPI apps. Here is how RBI and NPCI rules apply in four real cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1886ff]" />
                    After One-Time Settlement (OTS)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Always ask the lender to include mandate cancellation inside your written OTS letter. Once you pay the OTS sum and receive your No Dues Certificate, demand UMN revocation right away so no extra EMI pulls next month.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Fintech Loan Apps Using Non-7322 Codes
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Some digital loan apps register under non-7322 codes, so Pause and Revoke still show up in PhonePe or Google Pay. Remember that revoking the mandate does not erase your debt, and you should never ignore a formal lender notice.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-indigo-600" />
                    Porting UPI Mandates Across Apps
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under NPCI OC 223, you can port active UPI Autopay mandates to another UPI app once every 90 days. Porting moves your mandate safely, but it does not unlock a non-revocable loan flag.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Emptying Account vs Formal Restructuring
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Leaving zero funds in your account to dodge an EMI triggers bank bounce fees, CIBIL drops, and Section 25 risk. If you face real job loss or illness, ask the lender in writing for EMI restructuring or legal debt settlement.
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
                Frequently Asked Questions: UPI Autopay Loan EMIs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers to common questions on UPI Autopay pause vs revoke, MCC 7322 locks, 24-hour alerts, bounce fees, and Section 25 PSS Act rules.
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
                  <strong>RBI Digital Payments - E-mandate Framework, 2026:</strong> Circular RBI/CO.DPSS.POLC.No.S56/02.14.003/2026-27 (April 21, 2026), consolidating RBI/2019-20/139 (UPI e-mandates), RBI/2022-23/73 (Rs 15,000 limit), and CO.DPSS.POLC.No.S-882/02.14.003/2023-24 (Rs 1 lakh category caps).
                </li>
                <li>
                  <strong>NPCI Operating Circulars OC 125 &amp; OC 125A:</strong> NPCI/UPI/OC No. 125/2021-22 (Nov 25, 2021) and Addendum OC 125A/2022-23 (July 20, 2022) governing MCC 7322 non-revocable loan EMI mandates and lender-side cancellation portals.
                </li>
                <li>
                  <strong>NPCI Operating Circular OC 215A/2025-26:</strong> Dated May 21, 2025, capping UPI AutoPay executions to 1 main attempt plus 3 retries per cycle and restricting execution to non-peak hours.
                </li>
                <li>
                  <strong>Payment and Settlement Systems Act, 2007:</strong> Section 25 (Dishonour of electronic funds transfer for insufficiency of funds) and Section 31 (Compounding of offences), read with Chapter XVII of the Negotiable Instruments Act, 1881.
                </li>
                <li>
                  <strong>RBI Fair Lending Practice - Penal Charges Circular:</strong> RBI/2023-24/53 (Aug 18, 2023) and RBI/2023-24/102 (effective April 1, 2024), banning penal interest and capitalization of bounce or penal fees.
                </li>
                <li>
                  <strong>Judicial Precedents:</strong> Ritu Jain v. State Through Standing Counsel (Delhi High Court, 2019), Sripati Singh v. State of Jharkhand (Supreme Court, 2021), Rangappa v. Sri Mohan (Supreme Court, 2010), and N.P. Mathi Lingan v. State of West Bengal (Calcutta High Court).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">
                  Verified Government &amp; Regulatory Portals:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.npci.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>NPCI Official UPI Rules</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>RBI Integrated Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://sachet.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>RBI Sachet Complaint Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://consumerhelpline.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">
                  Explore Related CredSettle Guides:
                </span>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/stop-auto-debit-ecs-bounce-charges"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200"
                  >
                    Stop NACH &amp; ECS Auto-Debit
                  </Link>
                  <Link
                    href="/rbi-guidelines-on-penal-charges-in-loan-accounts"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200"
                  >
                    RBI Penal Charges Rules
                  </Link>
                  <Link
                    href="/revoke-account-aggregator-consent-personal-loan-default"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200"
                  >
                    Revoke Account Aggregator Consent
                  </Link>
                  <Link
                    href="/dpdp-act-2023-data-erasure-digital-personal-loan-apps"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200"
                  >
                    DPDP Act Loan App Data Erasure
                  </Link>
                  <Link
                    href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200"
                  >
                    Hidden Personal Loan KFS Refund
                  </Link>
                  <Link
                    href="/what-happens-after-missing-personal-loan-emi"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200"
                  >
                    Missing Personal Loan EMI Rules
                  </Link>
                  <Link
                    href="/services/personal-loan-settlement"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200"
                  >
                    Personal Loan Settlement
                  </Link>
                  <Link
                    href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200"
                  >
                    Banker Right of Set-Off Rules
                  </Link>
                  <Link
                    href="/get-noc-after-loan-settlement"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200"
                  >
                    Get NOC After Loan Settlement
                  </Link>
                  <Link
                    href="/stop-recovery-agent-harassment"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200"
                  >
                    Stop Recovery Agent Harassment
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
                Specialist in RBI payment guidelines, personal loan defense, Section 25 PSS Act disputes, and structured debt settlements helping Indian borrowers resolve banking conflicts legally.
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
                  EMI MANDATE &amp; DEBT RELIEF
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Stuck With UPI Autopay Bounces or Illegal Debits?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team audits unfair bounce fees, enforces RBI 24-hour notice rules, defends against Section 25 notices, and negotiates clean personal loan settlements.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Book Free Legal Consultation
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
                  <span>
                    <strong>RBI &amp; NPCI Rule Audit:</strong> Spot missing 24-hour notices and illegal retries.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Section 25 Notice Defense:</strong> Timely legal replies and Section 31 compounding.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Penal Fee Reversals:</strong> Enforce RBI bans on compounded bounce penalties.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Clean OTS &amp; Mandate Closure:</strong> Stop post-settlement phantom auto-debits.
                  </span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/stop-auto-debit-ecs-bounce-charges"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Stop NACH/ECS Auto-Debit &amp; Bounce Fees
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    UMRN cancellation steps &rarr;
                  </span>
                </Link>

                <Link
                  href="/rbi-guidelines-on-penal-charges-in-loan-accounts"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Guidelines on Loan Penal Charges
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    No compounding rule explained &rarr;
                  </span>
                </Link>

                <Link
                  href="/revoke-account-aggregator-consent-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Revoke Account Aggregator Consent
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    Stop live balance tracking &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
