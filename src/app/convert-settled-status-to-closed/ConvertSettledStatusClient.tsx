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
  Award,
  BookOpen,
  Building2,
  DollarSign,
  Check,
  Lock,
  Phone,
  Calendar,
  AlertCircle,
  CreditCard,
  Briefcase,
  Bookmark
} from 'lucide-react';

export default function ConvertSettledStatusClient() {
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
    { id: 'quick-crux', label: 'Executive Brief: Key Takeaways' },
    { id: 'settled-vs-closed', label: '1. Settled vs. Closed vs. Written Off' },
    { id: 'why-banks-mark-settled', label: '2. 7-Year Bureau Damage' },
    { id: 'legal-framework', label: '3. CICRA 2005 & RBI Mandates' },
    { id: 'payoff-mechanism', label: '4. The Differential Payoff Rule' },
    { id: 'infographic-overview', label: 'Visual Defense Blueprint' },
    { id: 'step-by-step-roadmap', label: '5. 7-Stage Upgrade Roadmap' },
    { id: 'letter-template', label: '6. Legal Letter Draft Template' },
    { id: 'escalation-matrix', label: '7. RBI Ombudsman Escalation' },
    { id: 'recovery-timeline', label: '8. Credit Score Rebuild Timeline' },
    { id: 'special-scenarios', label: '9. Cards, ARCs & App Loans' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'official-sources', label: 'Regulatory Sources & Authorities' }
  ];

  const faqs = [
    {
      q: 'How to change settled status to closed in CIBIL?',
      a: 'To change settled status to closed in CIBIL, you must contact your original lending bank or NBFC and request a payoff statement for the previously waived settlement differential. After paying the remaining balance in full, obtain an official unconditional No Dues Certificate (NDC). The lender is legally mandated under RBI guidelines to update all four credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) to Closed status within 30 days.'
    },
    {
      q: 'Can I convert settled status to closed without paying the remaining balance?',
      a: 'No. Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), credit bureaus are prohibited from altering authentic reporting without lender confirmation. Unless the lending institution confirms receipt of the waived differential amount and issues a formal closure report, the Settled tag cannot be legally modified or deleted. Any third-party agency claiming otherwise is offering an illegal scam.'
    },
    {
      q: 'How long does settled status stay on my CIBIL credit report?',
      a: 'A settled status remains on your CIBIL report for up to 7 years (84 months) from the date of the compromise settlement reporting. During this period, automated underwriting engines of scheduled commercial banks automatically flag the profile as high credit risk, rejecting prime loan and credit card applications.'
    },
    {
      q: 'What is the exact difference between Settled and Closed status?',
      a: 'Closed status indicates that the borrower fully satisfied 100% of the contractual loan obligation with zero financial loss to the lender. Settled status indicates that the bank accepted a discounted lump-sum payment (One-Time Settlement / OTS) and wrote off the remaining unpaid balance as a loss, which permanently stains the borrower credit history.'
    },
    {
      q: 'How much money do I need to pay to convert a settled loan to closed?',
      a: 'You only need to pay the net differential amount that was waived during the initial One-Time Settlement (OTS). This typically represents the waived principal and agreed contractual interest. You should negotiate with the bank to waive accumulated penal interest, compounding late fees, and legal charges that accrued after default.'
    },
    {
      q: 'How long does it take for CIBIL to reflect Closed status after paying the differential?',
      a: 'Under RBI Master Directions, banks submit monthly data feeds to credit bureaus. Once you clear the dues and receive your NDC, the updated Closed status usually reflects in TransUnion CIBIL within 30 to 45 business days. You can expedite this by raising an online dispute on the CIBIL portal with your NDC attached.'
    },
    {
      q: 'Can I get a home loan or credit card once my loan status is converted to Closed?',
      a: 'Yes. Once the negative Settled tag is converted to Closed, automated underwriting filters stop rejecting your applications. While you will need 6 to 12 months of disciplined repayment behavior to build a 750+ score, you regain eligibility for prime home loans, car loans, and credit cards.'
    },
    {
      q: 'What should I do if the bank refuses to accept my balance payoff request?',
      a: 'If the branch refuses to reopen the account, submit a formal written representation to the Bank Principal Nodal Officer (PNO). If unresolved within 30 days, escalate the complaint to the RBI Integrated Ombudsman portal (cms.rbi.org.in). Banks are legally obligated to accept full recovery of written-off debt.'
    },
    {
      q: 'What is the RBI penalty if a bank delays updating CIBIL after full payment?',
      a: 'Under the RBI circular on Credit Information Companies (CICRA Compensation Framework), banks and credit bureaus must pay compensation of ₹100 per calendar day to the borrower for any delay exceeding 30 days in updating or rectifying credit information after receiving the complete resolution.'
    },
    {
      q: 'Is a No Dues Certificate (NDC) mandatory for CIBIL status conversion?',
      a: 'Yes, an unconditional No Dues Certificate (NDC) or No Objection Certificate (NOC) on the bank official letterhead with authorized signatory stamp is mandatory. It serves as irrefutable legal proof that the loan obligation has been extinguished in full and must be presented during bureau dispute verification.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Swatch Color) */}
      <section
        className="relative text-white pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          {/* Title / H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-sm">
            Convert a Settled Loan to <br />
            <span className="text-blue-100">&quot;Closed&quot; Status (Step-by-Step)</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-2xl mb-8 max-w-3xl mx-auto font-normal md:font-medium text-white/95 leading-relaxed">
            Want to clean up your credit report? Discover how paying your outstanding waiver amount can upgrade your loan status from Settled to Closed.
          </p>

          {/* Single Rounded Full CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:text-[#1886ff] px-8 py-4 rounded-full font-extrabold text-base md:text-lg hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Speak to an Expert About Upgrading Your Loan</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CRISP COUNTER STRIP COMPONENT */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
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
                  <span>Verified Legal Blueprint</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Updated per RBI Master Direction on CICRA &amp; Ombudsman Guidelines 2026.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief / Key Takeaways Box (with #1886ff Theme Color) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: CONVERTING SETTLED LOAN STATUS TO CLOSED</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Differential Payoff is the Only Legal Path:</strong> Simply raising automated dispute tickets will not erase an authentic &quot;Settled&quot; tag. Under Section 21 of CICRA 2005, you must pay the waived principal differential back to the original lender to legally upgrade the account status to &quot;Closed&quot;.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Mandatory Unconditional NDC:</strong> Upon clearing the differential balance, the bank must issue an unconditional No Dues Certificate (NDC / NOC) on official letterhead confirming zero remaining liability.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Statutory 30-Day RBI Bureau Deadline:</strong> Under RBI Master Directions, lending institutions must upload the updated &quot;Closed&quot; status with ₹0 balance to CIBIL, Experian, Equifax, and CRIF High Mark within <strong>30 calendar days</strong> of receiving full payoff.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">₹100/Day Delay Penalty Under RBI Ombudsman:</strong> If the bank or credit bureau fails to update your record within 30 days of receiving your NDC and dispute, they are statutorily liable to pay you <strong>₹100 compensation for each day of delay</strong> under RBI Circular RBI/2023-24/72.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Restores 750+ Prime Credit Score:</strong> Converting to &quot;Closed&quot; immediately halts automated loan rejections, paving the way for complete credit score recovery back to prime 750+ within 6 to 12 months.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: SETTLED VS CLOSED VS WRITTEN OFF */}
            <section id="settled-vs-closed" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4" />
                <span>Credit Bureau Anatomy</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                1. The Critical Difference Between &quot;Settled&quot;, &quot;Closed&quot;, and &quot;Written Off&quot;
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you check your credit report across India&apos;s four RBI-licensed credit information companies (TransUnion CIBIL, Experian India, Equifax India, and CRIF High Mark), loan accounts are categorized by distinct legal status flags. Understanding the exact banking terminology is essential before initiating any dispute or payoff.
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Account Status Flag</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Financial Meaning</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">CIBIL Score Impact</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-500/50 font-bold">Future Loan Impact</th>
                        <th className="p-3.5 md:p-4 font-bold">Legal Recovery Risk</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-emerald-700 bg-emerald-50/30">
                          CLOSED (Clean)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          100% of the principal, contractual interest, and charges were repaid per the loan agreement. Zero loss to lender.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-emerald-600">
                          Positive / Builds 750+ score
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Eligible for prime home loans, car loans, and credit cards at competitive ROI.
                        </td>
                        <td className="p-3.5 md:p-4 font-semibold text-emerald-600">
                          Zero (Full NDC Issued)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-amber-700 bg-amber-50/30">
                          SETTLED (Compromise / OTS)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Bank agreed to a discounted lump-sum (One-Time Settlement) and wrote off the unpaid balance as an operational loss.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-amber-600">
                          Severe Drop (-50 to -120 pts)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Automated rejection on unsecured loans/cards; high risk premium (2-4% higher ROI) on secured loans.
                        </td>
                        <td className="p-3.5 md:p-4">
                          Zero civil liability, but 7-year bureau stigma remains active.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-black text-rose-700 bg-rose-50/30">
                          WRITTEN OFF (Total Default)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Borrower stopped servicing debt. Bank classified account as NPA and moved balance off active ledger to bad debt provisions.
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-rose-600">
                          Catastrophic (-150+ pts)
                        </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200">
                          Complete financial blacklisting across all scheduled commercial banks &amp; NBFCs.
                        </td>
                        <td className="p-3.5 md:p-4 font-semibold text-rose-600">
                          High (Active recovery, DRT, Section 138 / Section 25 PSS Act).
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs md:text-sm text-slate-600 italic">
                <strong>Key Takeaway:</strong> A &quot;Settled&quot; status protects you from legal debt recovery, but it acts as a red flag for credit underwriting. The only legal path to remove this red flag is to upgrade the status to &quot;Closed&quot;.
              </p>
            </section>

            {/* SECTION 2: WHY BANKS MARK ACCOUNTS AS SETTLED */}
            <section id="why-banks-mark-settled" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4" />
                <span>Credit Impact Analysis</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                2. Why Banks Mark Accounts as &quot;Settled&quot; &amp; The 7-Year Credit Damage
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower undergoes financial hardship—such as job loss, medical emergency, or business failure—and negotiates a One-Time Settlement (OTS), the bank agrees to accept an amount lower than the total ledger balance.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For instance, if your outstanding personal loan balance is <strong>₹5,00,000</strong> and the bank accepts <strong>₹2,50,000</strong> to close the case, the remaining <strong>₹2,50,000</strong> is booked as a <em>&quot;Sacrifice / Loss&quot;</em> in the bank&apos;s Profit &amp; Loss account. Under RBI reporting rules, the bank reports two critical data points to CIBIL:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-2 text-rose-600 font-bold mb-1.5 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>The &quot;Settled&quot; Account Status Flag</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    This flag explicitly signals to any future lender evaluating your credit report that you failed to repay the contractually agreed amount, forcing the previous lender to absorb a financial loss.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-2 text-amber-600 font-bold mb-1.5 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>The 7-Year Retention Mandate</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Under Indian credit bureau operating rules, settled records remain visible on your report for up to <strong>7 years (84 months)</strong>, causing automated Loan Origination Systems (LOS) to reject pre-approved credit.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs md:text-sm text-amber-900 leading-relaxed">
                <strong>Why automated loan algorithms reject settled profiles:</strong> Modern Indian retail banking systems (HDFC Bank, ICICI Bank, SBI, Axis Bank, Kotak Mahindra) utilize automated credit decisioning engines. When the underwriting engine detects a &quot;Settled&quot; or &quot;Post-Write-off Settled&quot; status on any unsecured facility within the past 36–60 months, the application is rejected instantly at the bureau check stage—regardless of your current high salary or healthy monthly cash flow.
              </div>
            </section>

            {/* SECTION 3: LEGAL & REGULATORY FRAMEWORK */}
            <section id="legal-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory Protections</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                3. Legal &amp; Regulatory Framework: CICRA 2005 &amp; RBI Directives
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit repair in India is not governed by discretionary bureau whims; it is governed by strict statutory enactments passed by the Parliament of India and directives issued by the Reserve Bank of India (RBI).
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1886ff]"></span>
                    Credit Information Companies (Regulation) Act, 2005 (CICRA) §21
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Section 21 of CICRA obligates all Credit Institutions (Banks and NBFCs) and Credit Information Companies (CIBIL, Experian, Equifax, CRIF) to ensure that credit data is <strong>accurate, authentic, and updated</strong>. When a borrower clears their dues in full, continuing to display a derogatory &quot;Settled&quot; flag constitutes a statutory violation under CICRA.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1886ff]"></span>
                    RBI Master Direction – Credit Information Companies (CIC) Guidelines
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The RBI mandates that all credit institutions must furnish updated credit information to all four credit bureaus at least once a month (within 30 days of any material transaction or closure). Once the bank accepts the differential balance and issues an unconditional No Dues Certificate, it is legally required to upload the modified status as &quot;Closed&quot; in its next regular monthly reporting batch.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    RBI ₹100/Day Delay Compensation Framework (Circular RBI/2023-24/72)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Under the landmark RBI framework on customer protection in credit reporting, if a bank or bureau fails to rectify or update customer credit information within <strong>30 calendar days</strong> of receiving a valid grievance with proof of settlement/closure, the defaulting entity must pay compensation of <strong>₹100 per day</strong> directly to the borrower.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: CAN YOU CONVERT SETTLED TO CLOSED? THE PAYOFF MECHANISM */}
            <section id="payoff-mechanism" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4" />
                <span>Financial Roadmap</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                4. Can You Convert &quot;Settled&quot; to &quot;Closed&quot;? The Legal Payoff Mechanism
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers are misled by fraudulent &quot;CIBIL repair&quot; agencies who claim they can erase a &quot;Settled&quot; status using insider contacts or automated hack dispute forms without paying the lender. <strong>This is completely false and illegal.</strong>
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Indian banking law, the <strong>only lawful and permanent mechanism</strong> to convert a &quot;Settled&quot; account to &quot;Closed&quot; is the <strong>Differential Waiver Payoff</strong>:
              </p>

              {/* Payoff Calculation Box */}
              <div className="rounded-2xl border-2 border-blue-200 bg-white p-5 md:p-6 shadow-xs">
                <h3 className="text-sm md:text-base font-black text-slate-900 mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#1886ff]" />
                  How the Differential Payoff is Calculated
                </h3>
                <div className="space-y-3 text-xs md:text-sm text-slate-700">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="font-semibold">Original Default Balance at Settlement:</span>
                    <span className="font-mono font-bold text-slate-900">₹4,50,000</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="font-semibold">Amount Paid Under One-Time Settlement (OTS):</span>
                    <span className="font-mono font-bold text-emerald-600">- ₹2,00,000</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50 border border-amber-200">
                    <span className="font-semibold text-amber-900">Waived Differential Balance (Booked as Loss):</span>
                    <span className="font-mono font-bold text-amber-700">= ₹2,50,000</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50 border border-blue-200 text-slate-900">
                    <div>
                      <strong className="block text-xs uppercase tracking-wider text-[#1886ff]">Negotiated Payoff Target</strong>
                      <span className="text-[11px] text-slate-500">Pay Pure Principal Difference; Waive Penalties</span>
                    </div>
                    <span className="font-mono text-base md:text-lg font-black text-[#1886ff]">₹2,50,000</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs md:text-sm text-emerald-900">
                <div className="flex items-center gap-2 font-bold mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Advocate Negotiation Rule:</span>
                </div>
                <p className="leading-relaxed">
                  When approaching the bank to upgrade your loan, ensure you do not pay newly fabricated late payment charges or compounded penal interest accumulated after the settlement date. A specialized debt advocate negotiates with the bank&apos;s Principal Nodal Officer to freeze all post-settlement interest and accept solely the exact historical waived differential.
                </p>
              </div>
            </section>

            {/* HIGH-IMPACT INFOGRAPHIC BANNER EMBEDDED (Between Sections 4 and 5) */}
            <div id="infographic-overview" className="scroll-target bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-10 text-slate-800">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-blue-500">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-white text-xs shadow-sm">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-200 block">
                      Legal Defense &amp; Action Blueprint
                    </span>
                    <h3 className="text-sm md:text-base font-black text-white leading-tight">
                      Convert Settled Loan to Closed: Summary &amp; Process Overview
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/convert-settled-status-to-closed.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-200 hover:text-white font-bold flex items-center gap-1 transition-colors"
                >
                  <span className="hidden sm:inline">Open Full Size</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Compact Landscape Infographic Image */}
              <div className="p-3 md:p-4 bg-slate-50">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                  <img
                    src="/images/infographics/convert-settled-status-to-closed.jpg"
                    alt="Convert Settled Status to Closed Summary Infographic"
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Key Takeaway:</strong> Clear the waived differential balance to secure an unconditional NDC and upgrade CIBIL within 30-45 days.</span>
                </div>
                <Link href="/contact" className="text-[#1886ff] font-bold hover:underline">
                  Get Free Case Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* SECTION 5: STEP-BY-STEP ROADMAP */}
            <section id="step-by-step-roadmap" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                5. Step-by-Step Roadmap to Convert Settled Status to Closed
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Executing a successful loan status upgrade requires following an exact 7-stage protocol recognized by banking compliance officers and credit bureaus:
              </p>

              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Retrieve Historical Settlement Documentation
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Locate your original One-Time Settlement (OTS) sanction letter, payment acknowledgment receipts, and the initial conditional settlement closure letter issued by the bank. Verify the exact loan account number, PAN number, and settlement date.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Submit a Formal &quot;Reopening &amp; Payoff&quot; Request to the Bank Nodal Desk
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Do not approach frontline bank tellers who lack the administrative authority to reopen settled NPA ledgers. Submit a formal representation to the <strong>Principal Nodal Officer (PNO)</strong> or <strong>Head of Retail Credit Recovery</strong> requesting a formal calculation of the waived differential balance.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Obtain Official Foreclosure / Payoff Letter with &quot;Closed Status&quot; Undertaking
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Before making any payment, ensure the bank issues a written payoff letter stating: <em>&quot;Upon receipt of ₹[Amount], the bank will issue an unconditional No Dues Certificate and report the account status as CLOSED to all Credit Information Companies.&quot;</em>
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Remit the Differential Balance via Traceable Banking Channels
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Pay the agreed amount directly into the bank&apos;s centralized collection account or via RTGS/NEFT/Demand Draft referencing your exact loan account number. <strong>Never pay cash or transfer funds to recovery agency personal accounts.</strong>
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Collect the Unconditional No Dues Certificate (NDC / NOC)
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Within 7–15 working days of payment clearance, obtain the original physical/digitally signed No Dues Certificate. The certificate must confirm that the loan stands 100% closed with zero outstanding liability.
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Bank Submits Data Feed to CIBIL, Experian, Equifax &amp; CRIF
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      The bank uploads its monthly reporting tape to all credit bureaus updating the account status from &quot;Settled&quot; (or Post-Write-off Settled) to &quot;Closed&quot; with Current Balance and Amount Overdue set to ₹0.
                    </p>
                  </div>
                </div>

                {/* Step 7 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    7
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Raise an Online Bureau Dispute to Accelerate Verification
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                      Log in to the official CIBIL Dispute Resolution Portal, open a dispute under the specific loan account, and upload your No Dues Certificate. CIBIL sends an automated validation request to the bank, expediting the update within 15–30 days.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6: LEGAL LETTER DRAFT TEMPLATE */}
            <section id="letter-template" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4" />
                <span>Ready-to-Use Legal Template</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                6. Formal Legal Draft Template: Reopening &amp; Full Payoff Request Letter
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Use this formal legal notice template when addressing the Principal Nodal Officer and Retail Asset Operations department of your lending bank:
              </p>

              {/* Code / Letter Draft Container with Modern Clean Slate styling */}
              <div className="rounded-2xl border border-slate-700 bg-slate-900 text-slate-100 p-5 md:p-6 shadow-sm overflow-x-auto text-xs font-mono leading-relaxed">
                <div className="text-blue-400 font-bold mb-3 pb-2 border-b border-slate-800 flex items-center justify-between">
                  <span>FORMAL APPLICATION FOR BALANCE PAYOFF &amp; CIBIL STATUS UPGRADE</span>
                  <span className="text-[10px] text-slate-400 uppercase">Registered Post / Email Format</span>
                </div>
                <pre className="whitespace-pre-wrap text-slate-200">
{`To,
The Principal Nodal Officer / Head of Retail Credit Operations,
[Bank / NBFC Name],
[Zonal Office Address / Registered Office],
Email: [nodalofficer@bankname.com]

Subject: Request for Payoff Statement to Clear Waived Differential Balance and Upgrade CIBIL Account Status from "Settled" to "Closed" for Loan Account No: [Insert Loan A/C No.]

Respected Sir/Madam,

I, [Borrower Full Name], residing at [Borrower Address], holding PAN: [Insert PAN] and Aadhaar: [Insert Aadhaar], was the borrower for the aforementioned Loan Facility [Account Number: XXXXXXXX] sanctioned by your institution.

1. That due to severe unforeseen financial hardship [briefly mention: e.g. medical emergency / job loss], I had entered into a One-Time Settlement (OTS) with your institution on [Date of Settlement], under reference letter no. [Insert Settlement Letter Reference No.].
2. That pursuant to the said settlement agreement, I duly paid the agreed settlement consideration of ₹[Amount Paid] on [Date of Payment], and your institution issued a conditional settlement acknowledgment.
3. That subsequent to the settlement, the said loan account has been reported to TransUnion CIBIL, Experian, Equifax, and CRIF High Mark with the derogatory status flag "SETTLED" / "POST-WRITE-OFF SETTLED", causing severe prejudice to my creditworthiness.
4. That I am now in a position to voluntarily extinguish the entire remaining waived differential amount (pure principal and contractual interest) to bring the total repayment to 100% of the loan obligation.
5. That I hereby request your competent authority to provide:
   a) An official statement of account indicating the exact net differential balance (excluding post-settlement penal charges and late fees).
   b) A formal written undertaking confirming that upon realization of the said differential amount, your institution will issue an unconditional No Dues Certificate (NDC) and report the account status as "CLOSED" to all four Credit Information Companies within 30 days pursuant to Section 21 of CICRA 2005.

Kindly process this request and issue the payoff calculation within 7 working days of receipt of this communication.

Thanking you,

Yours sincerely,

___________________________
[Signature]
[Borrower Name]
[Mobile Number]
[Email Address]
Date: [DD/MM/YYYY]
Place: [City, State]`}
                </pre>
              </div>
            </section>

            {/* SECTION 7: ESCALATION PROCESS & RBI OMBUDSMAN */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4" />
                <span>Grievance Redressal Mechanism</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                7. Escalation Process When Banks Refuse or Delay Updating Status
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Occasionally, bank branch managers claim that settled accounts cannot be reopened once written off in the core banking system (CBS). This is an internal administrative hurdle, not a legal barrier. Follow this 3-tier escalation matrix to enforce your rights:
              </p>

              {/* Escalation Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs font-black text-[#1886ff] uppercase tracking-wider mb-1">
                    Level 1 (Days 1–10)
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    Branch &amp; Customer Care
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit written representation to the Branch Manager and log a formal ticket on the bank&apos;s central CRM portal requesting payoff generation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs font-black text-blue-600 uppercase tracking-wider mb-1">
                    Level 2 (Days 11–30)
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    Principal Nodal Officer (PNO)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalate to the bank&apos;s apex grievance desk (PNO). The PNO has administrative override power to issue manual ledger payoff orders.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border-2 border-emerald-300 bg-emerald-50/20 shadow-2xs">
                  <div className="text-xs font-black text-emerald-700 uppercase tracking-wider mb-1">
                    Level 3 (Day 31+)
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    RBI Integrated Ombudsman
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a statutory complaint at <strong>cms.rbi.org.in</strong>. The Ombudsman orders immediate rectification and awards <strong>₹100/day compensation</strong> for unjustifiable delays.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: CREDIT SCORE RECOVERY TIMELINE */}
            <section id="recovery-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4" />
                <span>Credit Rebuilding Roadmap</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                8. Credit Score Recovery Timeline &amp; Post-Closure Strategy
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Converting the status from &quot;Settled&quot; to &quot;Closed&quot; immediately eliminates the negative default tag that triggers automatic loan rejections. However, score recovery to <strong>750+ (Prime Credit Zone)</strong> requires a disciplined rebuilding strategy over 6–12 months:
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Phase / Timeline</th>
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Credit Report Event</th>
                        <th className="p-3.5 border-r border-blue-500/50 font-bold">Expected Score Range</th>
                        <th className="p-3.5 font-bold">Actionable Rebuilding Steps</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Month 1 (Day 1–45)
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Status updated from &quot;Settled&quot; to &quot;Closed&quot;; Balance updated to ₹0; DPD historical count ceases.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">
                          620 – 660
                        </td>
                        <td className="p-3.5">
                          Download fresh CIBIL CIR report; verify that all four bureaus reflect &quot;Closed&quot;.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Months 2 – 6
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          New positive trade-line reporting begins; credit utilization stabilized.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-blue-700">
                          680 – 720
                        </td>
                        <td className="p-3.5">
                          Open a Fixed Deposit-backed secured credit card (e.g. IDFC FIRST WOW or Kotak 811 DreamDifferent); keep utilization below 30%.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">
                          Months 6 – 12
                        </td>
                        <td className="p-3.5 border-r border-slate-200">
                          Consistent on-time repayment history established; aged default impact diminishes.
                        </td>
                        <td className="p-3.5 border-r border-slate-200 font-semibold text-emerald-700">
                          750 – 790+ (Prime)
                        </td>
                        <td className="p-3.5">
                          Eligible for prime home loan interest rates, balance transfers, and pre-approved premium credit cards.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 9: SPECIAL SCENARIOS */}
            <section id="special-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4" />
                <span>Complex Cases</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                9. Special Scenarios: Credit Cards, ARCs, and Digital Fintech Loan Apps
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Credit Card Settlements
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Credit cards carry compounding 42%+ APR interest. When paying the balance to convert to &quot;Closed&quot;, insist on calculating the waiver based on the principal at default, stripping out all accumulated finance charges.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Debt Sold to ARCs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your loan was assigned to an Asset Reconstruction Company (ARCIL, Phoenix, CFM, Edelweiss ARC) under SARFAESI Section 5, you must settle the differential with the ARC directly, as the ARC now owns the legal right to issue the NDC.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-[#1886ff]" />
                    Digital Fintech NBFC Apps
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For app-based digital loans (KreditBee, MoneyView, CASHe, PaySense), obtain the NDC from the underlying RBI-registered NBFC lender, not the digital lending front-end app.
                  </p>
                </div>
              </div>
            </section>

            {/* COMPANY SECTION (Placed inside middle column before FAQ) */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* INTERACTIVE COLLAPSIBLE FAQ ACCORDION */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4 pt-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4" />
                <span>Clarifications &amp; Expert Answers</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                Frequently Asked Questions on Converting Settled Status to Closed
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to view detailed legal and banking answers verified by our senior debt advocates:
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:bg-slate-50 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-blue-50 text-[#1886ff] flex items-center justify-center text-xs font-extrabold flex-shrink-0">
                            Q
                          </span>
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* REGULATORY SOURCES & OFFICIAL LINKS STRIP */}
            <section id="official-sources" className="scroll-target space-y-3 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-600">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Authority &amp; Official Citations</span>
              </div>
              <p className="text-xs text-slate-600">
                All legal procedures, timelines, and rights described on this page are grounded in official Indian statutory frameworks:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">1. RBI Master Directions (CICRA)</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">2. CICRA Act 2005 (India Code)</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
                <a
                  href="https://www.cibil.com/dispute-resolution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">3. CIBIL Dispute Resolution Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">4. RBI Integrated Ombudsman (CMS)</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
                <a
                  href="https://financialservices.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span className="font-semibold truncate">5. Ministry of Finance (DFS)</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 RELATED INTERNAL TOPIC BADGES */}
            <div className="pt-6 border-t border-slate-200 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                Explore Related Credit &amp; Settlement Resources:
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/remove-settled-status-from-cibil"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Remove Settled Status from CIBIL
                </Link>
                <Link
                  href="/credit-card-settlement-hdfc"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  HDFC Credit Card Settlement
                </Link>
                <Link
                  href="/is-loan-settlement-illegal-in-india-truth"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Is Loan Settlement Illegal in India?
                </Link>
                <Link
                  href="/settlement-of-loan-letter"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Settlement of Loan Letter Format
                </Link>
                <Link
                  href="/loan-foreclosure-prepayment-charges-waiver"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Foreclosure Prepayment Charges Waiver
                </Link>
                <Link
                  href="/services/personal-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Personal Loan Settlement Services
                </Link>
                <Link
                  href="/services/credit-card-settlement"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Credit Card Debt Relief
                </Link>
                <Link
                  href="/services/anti-harassment"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Anti-Harassment Legal Support
                </Link>
                <Link
                  href="/rbi-rules-for-recovery-agents"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  RBI Recovery Agent Rules 2026
                </Link>
                <Link
                  href="/legal-help-for-non-closure-of-settled-loan"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs"
                >
                  Legal Help for Non-Closure of Settled Loan
                </Link>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: STICKY AUTHOR & CTA CARDS (Exact match with Image 3) ================= */}
          <aside className="sticky top-6 space-y-6">
            
            {/* Card 1: Author Bio Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-sm">
                  AJ
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Ashish Jhangra</h3>
                  <p className="text-[11px] font-semibold text-[#1886ff]">
                    Senior Debt Settlement Legal Advocate
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized in banking law, DRT proceedings, SARFAESI defenses, and CIBIL rectification with over 11 years of experience resolving complex NPA defaults across Indian banks.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Verified Author</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> CredSettle Panel
                </span>
              </div>
            </div>

            {/* Card 2: Emergency Advocate CTA Card (Matching Image 3: Vibrant Blue Gradient + White CTA Button) */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 shadow-md text-white space-y-4">
              <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-lg bg-white/15 text-blue-100 text-[11px] font-bold tracking-wide">
                <Lock className="w-3.5 h-3.5" />
                <span>100% CONFIDENTIAL</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">
                  Stuck with a &quot;Settled&quot; Tag on CIBIL?
                </h3>
                <p className="text-blue-100 text-sm mt-2 leading-relaxed font-normal">
                  Our legal advocates negotiate directly with your bank to freeze penalties, calculate the true principal differential, and secure your unconditional No Dues Certificate.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full text-center bg-white text-blue-900 font-bold py-3.5 px-4 rounded-xl hover:bg-slate-100 transition-all shadow-md text-sm transform hover:-translate-y-0.5"
              >
                Speak to an Expert About Upgrading Your Loan
              </Link>
              <div className="text-center pt-1">
                <a
                  href="tel:+918800226635"
                  className="text-xs sm:text-sm text-blue-100 hover:text-white font-semibold flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-white" />
                  <span>Call: +91-8800226635</span>
                </a>
              </div>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-5 space-y-3 text-xs shadow-xs">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                CredSettle Trust Commitments
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Legal fees linked to successful resolution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> No middleman wallets or funds pooling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> 100% lawful dispute advocacy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> High Court &amp; DRT panel advocates.</span>
                </li>
              </ul>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}
