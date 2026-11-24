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

export default function ClosedLoanDefunctNbfcClient() {
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
    { id: 'statutory-framework', label: '1. RBI Cancelled-NBFC Reporting Rules' },
    { id: 'why-loans-stay-active', label: '2. Why Closed Loans Stay Active' },
    { id: 'compensation-matrix', label: '3. ₹100 Daily CIBIL Delay Penalty' },
    { id: 'cic-obligations-disclaimers', label: '4. Credit Bureau Duties & Tags' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step CIBIL Fix SOP' },
    { id: 'borrower-rights', label: '7. High Court & Consumer Remedies' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Dispute to Closure Milestones' },
    { id: 'specialized-scenarios', label: '10. Liquidators, ARCs & Loan Apps' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Why is my closed personal loan still active on CIBIL after the NBFC shut down?',
      a: 'When an NBFC loses its RBI license or closes its office, its staff often stop sending loan updates to credit bureaus. As a result, your last balance stays frozen as active on CIBIL even though you paid every rupee.'
    },
    {
      q: 'Does an NBFC still have to update CIBIL after RBI cancels its license?',
      a: 'Yes. RBI Circular RBI/2024-25/81 took effect on October 10, 2024. Under this rule, a cancelled NBFC must still report old loans to all four bureaus until the loans close or the firm winds up.'
    },
    {
      q: 'Can CIBIL fix a closed loan entry if the NBFC does not reply to disputes?',
      a: 'CIBIL first asks the lender to check the change. If the NBFC is defunct or lost its license, write to the CIBIL Nodal Officer. You can also approach the RBI Ombudsman with your NOC and bank payment proof.'
    },
    {
      q: 'What must CIBIL show on my report when an NBFC license is cancelled?',
      a: 'Under RBI rules, CIBIL, Experian, Equifax, and CRIF High Mark must tag the firm as a Licence Cancelled Entity. They must also add a note so future banks know the old lender cannot update the entry.'
    },
    {
      q: 'Can I claim ₹100 per day if my CIBIL dispute stays open past 30 days?',
      a: 'Yes. Under RBI Circular RBI/2023-24/72, lenders get 21 days and bureaus get 9 days to fix report errors. If a valid dispute passes 30 days, the at-fault party must pay you ₹100 per day.'
    },
    {
      q: 'Does the RBI Integrated Ombudsman handle complaints against CIBIL and other bureaus?',
      a: 'Yes. All four credit bureaus in India fall under the RBI Ombudsman Scheme. Even when an NBFC shuts down, you can file a free claim against CIBIL at cms.rbi.org.in if they refuse a fair review.'
    },
    {
      q: 'What if I lost my No Dues Certificate (NOC) before the NBFC shut down?',
      a: 'You can still win your dispute without an NOC. Collect your bank statements showing each EMI, the final payoff UTR, and your loan letter. Add any closure SMS or email you saved.'
    },
    {
      q: 'My loan app shut down, so is the backend NBFC also closed?',
      a: 'Not always. Many loan apps are only tech partners for a licensed NBFC. Check your loan letter or Key Facts Statement to find the real NBFC name. Then email its Grievance Officer directly.'
    },
    {
      q: 'Who updates CIBIL if a defunct NBFC is under NCLT liquidation or sold my loan?',
      a: 'If the NBFC is in liquidation, the Official Liquidator handles old loan files. If an Asset Reconstruction Company bought the loan book, that ARC must update your credit report.'
    },
    {
      q: 'How does CredSettle help fix orphaned loans from defunct NBFCs on CIBIL?',
      a: 'CredSettle checks the NBFC status on RBI and MCA portals and builds your payment proof file. We send formal notices to all four credit bureaus and file RBI Ombudsman claims for full loan closure.'
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
            <span>RBI Circular RBI/2024-25/81 &amp; CICRA 2005 Compliance</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Clear Orphaned CIBIL Entries From Cancelled-License NBFCs
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Paid off your personal loan, yet it still shows as active on CIBIL after the NBFC shut down? Learn how to invoke RBI credit reporting rules, fix all four credit bureaus, and claim ₹100 per day for delays.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Fix Your Orphaned CIBIL Entry</span>
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
                  Protected under CICRA 2005, RBI/2024-25/81, and RBI/2023-24/72.
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
                <span>EXECUTIVE BRIEF: FIXING CLOSED LOANS OF DEFUNCT NBFCS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Reporting Duty Stays Alive:</strong> Under RBI Circular RBI/2024-25/81, an NBFC that loses its license must still report old loans until they close or the firm winds up.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Bureau Tag:</strong> CIBIL, Experian, Equifax, and CRIF High Mark must mark defunct lenders as Licence Cancelled Entities with a clear note on your report.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">30-Day Dispute Window:</strong> Under CICRA 2005 and RBI/2023-24/72, lenders get 21 days and bureaus get 9 days to fix wrong credit report records.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">₹100 Daily Delay Payout:</strong> If a valid credit dispute stays open past 30 calendar days, the at-fault party must pay ₹100 per day straight to your bank account.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Ombudsman Covers All Bureaus:</strong> Even if the NBFC disappears, all four credit bureaus come under the RBI Integrated Ombudsman at cms.rbi.org.in.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Framework: RBI Cancelled-NBFC Reporting Rules */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Central Bank Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Framework: RBI Cancelled-NBFC Reporting Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Thousands of Indian borrowers face a painful trap after repaying a small personal loan. They pay off the debt in full, but the NBFC loses its RBI license or shuts down its office. Their CIBIL report still shows the loan as open or overdue.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Earlier, a major legal gap caused this mess. When RBI cancelled an NBFC license (called a CoR), the firm lost its Credit Institution tag under CICRA 2005. Bureaus then cut off its feed, freezing old loans forever.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To end this hardship, RBI issued <strong>Circular RBI/2024-25/81</strong> (DoR.FIN.REC.47) on October 10, 2024. This binding rule now sits inside the <strong>RBI Credit Information Reporting Directions, 2025</strong> (RBI/DoR/2024-25/125, dated January 6, 2025).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 2(f)(vii) of CICRA 2005, a cancelled NBFC still acts as a Credit Institution for old loans. It must report updates to all four bureaus until each loan closes or the firm winds up. Bureaus got six months, until April 2025, to set up this rule.
              </p>
            </section>

            {/* SECTION 2: Why Closed Loans Stay Active After an NBFC Shuts Down */}
            <section id="why-loans-stay-active" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Root Causes &amp; Credit Score Impact</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Why Closed Loans Stay Active After an NBFC Shuts Down
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A closed loan does not update itself on CIBIL when your last EMI clears your bank. The lender must upload a clean closure file to CIBIL, Experian, Equifax, and CRIF High Mark. Under <strong>RBI Circular RBI/2024-25/60</strong>, active lenders must send these updates every 15 days starting January 1, 2025.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an NBFC faces an RBI ban or runs out of cash, four common errors leave paid loans stuck as active on your credit file:
              </p>
              <ul className="space-y-2 text-sm md:text-base text-slate-700 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Abrupt Staff Exit:</strong> The NBFC shuts its office and lays off its compliance team before sending final zero-balance files to bureaus.
                </li>
                <li>
                  <strong>Unpaid Bureau Bills:</strong> Before the 2024 RBI rule waived fees for cancelled lenders, bureaus cut off NBFCs that stopped paying yearly fees.
                </li>
                <li>
                  <strong>Vanished Loan Apps:</strong> A fintech app shuts down, leaving borrowers unable to download their No Dues Certificate (NOC) or contact support.
                </li>
                <li>
                  <strong>Messy Portfolio Sales:</strong> The dying NBFC sells its loan book to a buyer or ARC, and the buyer opens a new loan entry without closing the old one.
                </li>
              </ul>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                An orphaned active loan harms your finances right away. New banks count the fake EMI in your monthly debt ratio and reject your home or car loan. Worse, if the data feed froze with a late flag, your credit score stays crushed for years until you clear it.
              </p>
            </section>

            {/* SECTION 3: Calculation Matrix: ₹100 Daily CIBIL Delay Penalty */}
            <section id="compensation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Penalty Formulas &amp; Accrual Ledger</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Calculation Matrix: ₹100 Daily CIBIL Delay Penalty
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under <strong>RBI Circular RBI/2023-24/72</strong> (DoR.FIN.REC.48, dated October 26, 2023), borrowers have a direct right to cash payouts for slow credit report fixes. This rule works under Section 11(1) and Section 21(3) of CICRA 2005.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once you file a credit dispute, the lender gets <strong>21 calendar days</strong> to send clean data. The credit bureau then gets <strong>9 calendar days</strong> to update your report. Together, both must fix your file within <strong>30 calendar days</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your dispute stays open past 30 days, the at-fault lender or bureau must pay you <strong>₹100 for every extra calendar day</strong>. They must credit this payout to your bank account or UPI within 5 working days of fixing the entry. Look at how this daily penalty grows over time.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative CIBIL Dispute Delay Penalty Ledger</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹100 Flat Daily Accrual (RBI/2023-24/72)</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Timeline Post-Dispute Filing</th>
                        <th className="p-3">Delay Beyond Day 30</th>
                        <th className="p-3">Regulatory Status &amp; Liability</th>
                        <th className="p-3 text-right">Statutory Payout Owed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 1 to Day 21</td>
                        <td className="p-3 font-mono">0 Days</td>
                        <td className="p-3 text-emerald-600 font-semibold">NBFC / Lender Verification Window</td>
                        <td className="p-3 text-right font-bold text-slate-500">₹0 (Statutory Limit)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 22 to Day 30</td>
                        <td className="p-3 font-mono">0 Days</td>
                        <td className="p-3 text-emerald-600 font-semibold">Bureau Update &amp; Tagging Window</td>
                        <td className="p-3 text-right font-bold text-slate-500">₹0 (Statutory Limit)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 45 (15 Days Delayed)</td>
                        <td className="p-3 font-mono text-amber-600 font-bold">15 Days Delay</td>
                        <td className="p-3 text-amber-600 font-semibold">Breach of 30-Day CICRA Rule</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">₹1,500</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 60 (30 Days Delayed)</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">30 Days Delay</td>
                        <td className="p-3 text-rose-600 font-semibold">RBI Ombudsman Escalation Stage</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">₹3,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 90 (60 Days Delayed)</td>
                        <td className="p-3 font-mono text-rose-700 font-bold">60 Days Delay</td>
                        <td className="p-3 text-rose-700 font-semibold">Binding Bureau / CI Penalty Order</td>
                        <td className="p-3 text-right font-bold text-rose-800 font-mono">₹6,000</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Day 120 (90 Days Delayed)</td>
                        <td className="p-3 font-mono text-[#1886ff]">90 Days Delay</td>
                        <td className="p-3 text-[#1886ff]">Consumer Court &amp; Mental Agony Suit</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹9,000 + Damages</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Keep one key point in mind. If the NBFC is fully dissolved, collecting ₹100 per day from the dead firm can be hard. However, if the credit bureau itself misses its 9-day update deadline or fails to add the required RBI disclaimer tag, the <strong>credit bureau must pay you the penalty</strong>.
              </p>
            </section>

            {/* SECTION 4: Credit Bureau Duties: Licence Cancelled Tags & Rules */}
            <section id="cic-obligations-disclaimers" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Mandatory Bureau Tags &amp; Fee Waivers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Credit Bureau Duties: Licence Cancelled Tags &amp; Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers hear one stock excuse from credit bureaus: &quot;We cannot change any loan status until the lender replies.&quot; That excuse no longer holds up when an NBFC loses its RBI license.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under <strong>RBI Circular RBI/2024-25/81</strong> and the <strong>2025 Credit Information Master Direction</strong>, all four Indian bureaus (TransUnion CIBIL, Experian, Equifax, and CRIF High Mark) must follow four strict duties:
              </p>
              <ul className="space-y-2 text-sm md:text-base text-slate-700 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Tag Cancelled Lenders:</strong> Bureaus must track RBI license cancellation orders and tag those firms as <strong>Licence Cancelled Entities</strong> in their system.
                </li>
                <li>
                  <strong>Add Report Disclaimers:</strong> Your Credit Information Report (CIR) must carry a clear note stating that the lender lost its license and can no longer update the entry. This protects you when new banks check your file.
                </li>
                <li>
                  <strong>Waive Membership Fees:</strong> Bureaus cannot charge annual or membership fees to cancelled-license NBFCs. This removes the billing barrier that once stopped defunct lenders from uploading loan closures.
                </li>
                <li>
                  <strong>Log Fair Dispute Reviews:</strong> Bureaus must record your proof of payment, send clear rejection reasons in writing, and follow Ombudsman orders to suppress or close orphaned entries.
                </li>
              </ul>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Always check all four Indian credit bureaus. A closed NBFC loan might be cleared on CIBIL but still sit active on CRIF High Mark, Equifax, or Experian. Every bureau gives you one free full credit report each calendar year under RBI rules.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Orphaned CIBIL Rectification Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual guide sums up your legal shield when an NBFC shuts down after loan payoff. It highlights the RBI 30-day fix window, the ₹100 daily delay penalty, and your CICRA rights against all four credit bureaus.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/closed-loan-active-cibil-after-nbfc-license-cancelled.jpg"
                    alt="Closed Loan Active on CIBIL After NBFC License Cancelled Visual Blueprint"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Orphaned CIBIL Rectification Framework &bull; RBI Circular Compliant</span>
                  <a
                    href="/images/infographics/closed-loan-active-cibil-after-nbfc-license-cancelled.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Clearing a Defunct NBFC Loan Entry */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Clearing a Defunct NBFC Loan Entry
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six tested steps to build an ironclad paper trail and get your closed personal loan removed or marked Closed on your credit reports.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Check the NBFC Status on RBI and MCA Portals
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Search the lender name on the RBI list of cancelled NBFCs at rbi.org.in and download the official press release PDF. Next, check the company CIN on mca.gov.in to see if it is Active, Under Liquidation, or Struck Off.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Build Your Complete Loan Closure Proof Pack
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Put all proof in one clear PDF file. Add your No Dues Certificate (NOC), final settlement letter, loan sanction letter, and bank statements highlighting every EMI and your final payoff UTR or IMPS reference number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: File Disputes Across All Four Credit Bureaus
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Log into CIBIL, Experian, Equifax, and CRIF High Mark and raise an online dispute for the loan account. State clearly that the NBFC lost its RBI license, cite RBI/2024-25/81, upload your proof pack, and enter your bank details for ₹100/day delay compensation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Send Written Notice to the NBFC or Liquidator
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email the last known Grievance Officer or MCA-registered company email of the NBFC, and send a speed post letter to its office or Official Liquidator. Save email bounce screens and postal return receipts to prove the lender is unreachable.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Escalate to Each Bureau Principal Nodal Officer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If CIBIL closes your ticket saying the lender did not reply, do not stop there. Email the CIBIL Nodal Officer with your Dispute ID, RBI license cancellation PDF, bounce proof, and NOC. Demand both a manual override review and the mandatory Licence Cancelled Entity tag.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: File a Complaint on the RBI CMS Ombudsman Portal
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If 30 days pass or the bureau rejects your proof, file a free complaint at cms.rbi.org.in naming the Credit Information Company. Attach your proof pack and demand immediate account closure or suppression plus ₹100 per day for delayed resolution.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Borrower Legal Rights: High Court & Consumer Remedies */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Statutory Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Borrower Legal Rights: High Court &amp; Consumer Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts treat wrong credit reports very seriously. A false active loan blocks your access to fair banking and damages your name. If the bureau and Ombudsman route fails to clean your report, you have strong court remedies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Kerala HC: Credit Score &amp; Article 21 Dignity</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In K. Venugopal Nair v. Canara Bank (2024), the Kerala High Court held that your credit score ties directly to your reputation and dignity under Article 21. Bureaus and banks cannot sit idle once a loan is paid off.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>CICRA Sections 19 &amp; 21(3) Accuracy Duty</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 19 of CICRA 2005 requires clean, accurate data. Under Section 21(3), once you submit clear proof of an error, the bureau and lender must inspect and update the wrong entry within 30 calendar days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Consumer Court Deficiency of Service Claims</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Consumer Protection Act, 2019, keeping a paid loan active is a clear deficiency in service. District Consumer Commissions can order CIBIL updates plus payouts for mental agony and rejected loans.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Retail vs Commercial Loan Distinction</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In Central Bank of India v. Ad Bureau Advertising (2025), the Supreme Court drew a clear line. Personal loan borrowers qualify fully for Consumer Courts. Business firms must file civil suits or High Court writs instead.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Bureau GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bureau GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Since September 1, 2022, all four Credit Information Companies fall directly under the <strong>Reserve Bank Integrated Ombudsman Scheme (RB-IOS)</strong>. Even if the NBFC shuts down, this three-tier ladder holds the credit bureau accountable.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Action &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: Portal Dispute</td>
                      <td className="p-3">Bureau Dispute Desk &amp; NBFC GRO</td>
                      <td className="p-3 font-mono">Up to 30 Calendar Days</td>
                      <td className="p-3">Logs official Dispute ID, sends lender check, and starts the RBI delay clock.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: Bureau PNO</td>
                      <td className="p-3">CIBIL / CIC Principal Nodal Officer</td>
                      <td className="p-3 font-mono">7 to 15 Working Days</td>
                      <td className="p-3">Reviews NOC, RBI CoR order, and bounce proofs; adds Licence Cancelled Entity tag.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI Integrated Ombudsman (CMS)</td>
                      <td className="p-3 font-mono">30 Days Post-Level 2</td>
                      <td className="p-3">Issues binding order on cms.rbi.org.in to fix or suppress entry and pay ₹100/day penalty.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Milestones: Dispute Filing to CIBIL Closure */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Milestones: Dispute Filing to CIBIL Closure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking each day from your first dispute helps you spot bureau inaction early and build a clean RBI Ombudsman case.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Regulatory Phase</th>
                      <th className="p-3">NBFC / Bureau Duty</th>
                      <th className="p-3">Borrower Action Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0</td>
                      <td className="p-3 font-mono text-[11px]">Dispute Filed</td>
                      <td className="p-3">Bureau issues Dispute ID and alerts the listed NBFC or successor.</td>
                      <td className="p-3">Upload NOC, bank UTR statements, RBI order, and bank details.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 21</td>
                      <td className="p-3 font-mono text-[11px]">Lender Window</td>
                      <td className="p-3">NBFC or Liquidator has 21 days to verify payoff and send closure data.</td>
                      <td className="p-3">Email NBFC and save bounce screens or postal return slips.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 22 to 30</td>
                      <td className="p-3 font-mono text-[11px]">Bureau Window</td>
                      <td className="p-3">Bureau updates report or tags lender as Licence Cancelled Entity.</td>
                      <td className="p-3">Check ticket email; prepare Bureau PNO notice if rejected.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 31</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Penalty Starts</td>
                      <td className="p-3">Breach of 30-day CICRA limit; ₹100/day compensation begins.</td>
                      <td className="p-3 font-bold text-amber-800">Send formal escalation email to Bureau Principal Nodal Officer.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 32 to 60</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Ombudsman Filing</td>
                      <td className="p-3">RBI Ombudsman reviews proof pack and asks bureau for formal reply.</td>
                      <td className="p-3 font-bold text-slate-900">File free claim on cms.rbi.org.in against the credit bureau.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 and Beyond</td>
                      <td className="p-3 font-mono text-[11px] text-rose-700 font-bold">Final Closure</td>
                      <td className="p-3">Bureau closes or suppresses orphaned tradeline and pays delay dues.</td>
                      <td className="p-3">Download fresh credit reports from all 4 bureaus to confirm fix.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Scenarios: Liquidators, ARCs & Loan Apps */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Liquidators, ARCs &amp; Loan Apps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every shut-down NBFC case follows a different path. Knowing which legal scenario fits your loan helps you target the exact person who holds the power to clear your CIBIL record.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    NBFC Under NCLT Liquidation or Strike-Off
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a firm enters NCLT liquidation under IBC, an Official Liquidator takes over its records. Look up the liquidator name on mca.gov.in or ibbi.gov.in and send your payment proofs to obtain a formal closure letter for CIBIL.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Loan Sold to an ARC or Partner NBFC
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Many failing NBFCs sell their loans to an Asset Reconstruction Company (ARC) before losing their license. Check your credit report for a duplicate ARC entry. The buying ARC holds full duty to mark both the old and new accounts Closed.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Loan App Vanished, But Backend NBFC Is Active
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Often only the fintech app closes while the RBI-licensed backend NBFC stays open. Check your sanction letter or Key Facts Statement for the real NBFC name, then file a direct complaint with its Nodal Officer and RBI Ombudsman.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Paid Off Loan With No Saved NOC Copy
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Do not panic if you never saved your NOC. Download your full bank passbook showing all EMI debits, the final payoff UTR, and NACH mandate stop proof. Pair this with a signed self-declaration when filing before CIBIL and the Ombudsman.
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
                Frequently Asked Questions: Defunct NBFC CIBIL Disputes
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, plain-English answers on fixing orphaned personal loans from shut-down NBFCs, RBI credit bureau tags, Ombudsman claims, and ₹100 daily delay payouts.
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
                  <strong>Reserve Bank of India Circular (Cancelled CoR Reporting):</strong> RBI/2024-25/81, DoR.FIN.REC.47/20.16.042/2024-25 (dated October 10, 2024), Implementation of Credit Information Reporting Mechanism subsequent to cancellation of licence or Certificate of Registration.
                </li>
                <li>
                  <strong>RBI Master Direction on Credit Information Reporting, 2025:</strong> RBI/DoR/2024-25/125, DoR.FIN.REC.No.55/20.16.056/2024-25 (dated January 6, 2025), consolidated directions for Credit Institutions and Credit Information Companies.
                </li>
                <li>
                  <strong>RBI Credit Report Delay Compensation Circular:</strong> RBI/2023-24/72, DoR.FIN.REC.48/20.16.003/2023-24 (dated October 26, 2023), Framework for compensation of ₹100 per calendar day for delayed updation or rectification beyond 30 days.
                </li>
                <li>
                  <strong>RBI Fortnightly Reporting Circular:</strong> RBI/2024-25/60, DoR.FIN.REC.No.32/20.16.056/2024-25 (dated August 8, 2024), 15-day credit reporting cycle effective January 1, 2025.
                </li>
                <li>
                  <strong>Statutes &amp; Court Precedents:</strong> Credit Information Companies (Regulation) Act, 2005 (Sections 2(f)(vii), 11(1), 19 &amp; 21(3)), Reserve Bank Integrated Ombudsman Scheme, 2021 (covering CICs since September 1, 2022), Consumer Protection Act, 2019, and K. Venugopal Nair v. Canara Bank (Kerala High Court, 2024).
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
                    <span>TransUnion CIBIL Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Ministry of Corporate Affairs</span>
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
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹100/Day CIBIL Penalty
                  </Link>
                  <Link href="/rbi-15-day-fortnightly-credit-bureau-update-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI 15-Day Bureau Update Rule
                  </Link>
                  <Link href="/personal-loan-settled-cibil-still-overdue-crif-equifax" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    CRIF &amp; Equifax Overdue Fix
                  </Link>
                  <Link href="/duplicate-personal-loan-cibil-securitisation-assignment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Duplicate Loan on CIBIL Fix
                  </Link>
                  <Link href="/strangers-loan-on-my-cibil-mixed-credit-file-rectify" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Mixed Credit File Rectify
                  </Link>
                  <Link href="/cibil-dispute-wrong-overdue-entry-filing-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    CIBIL Wrong Overdue Dispute
                  </Link>
                  <Link href="/post-write-off-settled-pwos-meaning-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Post Write-Off Settled Guide
                  </Link>
                  <Link href="/bnpl-pay-later-shadow-nbfc-loan-entries-cibil-closure" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Shadow NBFC BNPL Closure
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/services/nbfc-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    NBFC Loan Settlement Help
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
                Specialist in CICRA 2005 compliance, credit bureau disputes, RBI NBFC rules, and loan closure legal remedies with proven success clearing orphaned credit records across India.
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
                  CIBIL RECTIFICATION SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Defunct NBFC Ruining Your CIBIL Score?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking legal team traces cancelled NBFCs, files formal CICRA notices with all four credit bureaus, and escalates refused disputes to the RBI Ombudsman for full closure.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Clear Your CIBIL Record Now
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
                  <span><strong>All 4 Bureaus Covered:</strong> CIBIL, Experian, Equifax, and CRIF High Mark.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI/2024-25/81 Enforcement:</strong> Mandatory Licence Cancelled tags and closure review.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>₹100/Day Penalty Claims:</strong> Full statutory filing after Day 30 delays.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Representation:</strong> End-to-end CMS filing and follow-up.</span>
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
                  <span className="text-[10px] text-slate-400 mt-1 block">Claim daily bureau payout &rarr;</span>
                </Link>

                <Link
                  href="/duplicate-personal-loan-cibil-securitisation-assignment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Duplicate Loan on CIBIL After ARC Sale
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Remove double loan entries &rarr;</span>
                </Link>

                <Link
                  href="/personal-loan-settled-cibil-still-overdue-crif-equifax"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Settled in CIBIL, Overdue in CRIF?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Sync all 4 credit bureaus &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
