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

export default function CommercialCardBlockClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Debt Crux' },
    { id: 'why-banks-block', label: '1. Why Banks Block Personal Cards' },
    { id: 'rbi-framework', label: '2. RBI Master Direction Rules' },
    { id: 'debt-recall-emi', label: '3. Debt Recall & EMI Foreclosure' },
    { id: 'personal-vs-business', label: '4. Personal vs Business Card Rules' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'tax-sft-compliance', label: '6. Income Tax SFT 114E & GST Risks' },
    { id: 'step-by-step-action', label: '7. Step-by-Step Action Plan' },
    { id: 'borrower-rights', label: '8. Borrower Rights & Charge Audit' },
    { id: 'escalation-matrix', label: '9. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '10. Block to Closure or OTS Timeline' },
    { id: 'special-scenarios', label: '11. Special Cases: BPSP & MSMEs' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Why do banks block personal credit cards for commercial spends?',
      a: 'Personal credit cards are issued only for personal and household use under Most Important Terms and Conditions (MITC). When banks detect high-value vendor payments, wholesale inventory purchases, or business gateway transfers, they flag the card for policy breach and block it.'
    },
    {
      q: 'Can a bank demand full immediate payment after blocking a card?',
      a: 'Yes. Under standard cardholder agreements, cancelling a card for commercial misuse can trigger a debt recall. The bank revokes your revolving credit limit and may foreclose active EMIs, demanding the entire outstanding principal in one lump sum.'
    },
    {
      q: 'What happens to active EMIs when a card is blocked for business use?',
      a: 'When a bank cancels your card or accelerates the debt, active merchant or instant EMIs are often foreclosed. The remaining unpaid principal is added to your current statement balance, and foreclosure fees of up to 3 percent may be billed unless disputed.'
    },
    {
      q: 'Does blocking a credit card for commercial use hurt my CIBIL score?',
      a: 'A card block alone does not drop your CIBIL score if you pay the balance on time. However, if you miss payments due to sudden debt recall or EMI foreclosure, the bank reports Days Past Due (DPD), which sharply lowers your credit score.'
    },
    {
      q: 'Can I unblock a personal card if the high spends were actually personal?',
      a: 'Yes. If your large spends were for a wedding, medical emergency, or family event, you can submit invoices and bank statements to the bank risk team. Once verified, the bank may lift the block or restore normal billing.'
    },
    {
      q: 'What if I cannot pay the entire recalled lump sum after card closure?',
      a: 'You can write to the Principal Nodal Officer to request a structured repayment plan or a One-Time Settlement (OTS). Negotiating a written settlement prevents prolonged default and helps you close the account legally with a No Dues Certificate.'
    },
    {
      q: 'Can a bank forfeit my reward points when blocking a card for business spends?',
      a: 'Many banks include clauses in their MITC allowing forfeiture of reward points earned on commercial or prohibited transactions. However, you can challenge arbitrary forfeiture of genuinely earned personal points before the RBI Ombudsman.'
    },
    {
      q: 'How does Income Tax SFT Rule 114E affect commercial spends on personal cards?',
      a: 'Under Rule 114E, banks report credit card bill payments of Rs 10 lakh or more in a financial year (or Rs 1 lakh in cash) to the Income Tax Department. This appears in your AIS and can trigger tax queries if your declared ITR income is lower.'
    },
    {
      q: 'Are banks allowed to charge compound interest on penal fees after a card block?',
      a: 'No. Under RBI guidelines on penal charges effective 2024, lenders cannot capitalize penal charges or charge compound interest on late fees. You can audit your statement and demand removal of any compounded penalties.'
    },
    {
      q: 'How can CredSettle help if my personal credit card is blocked with high debt?',
      a: 'CredSettle audits your recalled card statement, challenges unlawful foreclosure or penal fees, represents you before the bank Nodal Officer and RBI Ombudsman, and negotiates an affordable EMI restructuring or One-Time Settlement.'
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
            <span>RBI Credit Card Conduct Rules &amp; Debt Recall Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Personal Credit Card Cancelled for Business Use: Relief
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did your bank block your personal credit card for commercial spends and demand immediate full payment? Learn how to handle debt recall, stop unfair EMI foreclosure fees, protect your CIBIL score, and settle dues legally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Debt Recall Legal Help</span>
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
                  Guided by RBI Credit Card Master Directions and the Integrated Ombudsman Scheme, 2021.
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
                <span>EXECUTIVE BRIEF: COMMERCIAL SPEND CARD BLOCKS &amp; DEBT RECALL</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">MITC Policy Breach:</strong> Indian banks issue retail credit cards strictly for personal expenses. Heavy business spends trigger automated risk blocks under card terms.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Debt Recall &amp; EMI Foreclosure:</strong> When a card is cancelled, banks can revoke credit limits, foreclose active EMIs, and demand the full balance at once.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Right to Dispute Wrong Flags:</strong> If your high-value spends were personal, such as wedding or hospital bills, you can submit invoices to lift the block.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Compounded Penal Charges:</strong> RBI rules bar banks from capitalizing late fees or penal charges. You can audit your bill and demand fee reversals.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Structured Settlement Option:</strong> If you cannot pay the recalled lump sum, you can negotiate a written repayment plan or One-Time Settlement (OTS).
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1 */}
            <section id="why-banks-block" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Risk Triggers &amp; Bank Monitoring</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Why Banks Block Personal Cards for Business Spends
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Across India, major issuers like HDFC Bank, ICICI Bank, SBI Card, and Axis Bank monitor card spending patterns closely. Retail credit cards are meant only for personal, family, and household expenses. Using them for business turnover violates the Most Important Terms and Conditions (MITC).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many small business owners, freelancers, and traders swipe personal cards for inventory, digital ads, or vendor payouts. Automated bank systems flag these patterns fast. When your monthly card spend far exceeds your declared income, the compliance team steps in.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks also block cards to stop reward point misuse and follow Anti-Money Laundering (AML) rules. Business spends often pass through Business Payment Solution Providers (BPSPs) or high-risk merchant codes. Once flagged, the bank may freeze the card without prior warning.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="rbi-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Conduct Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI Master Direction Rules on Card Blocking &amp; Closure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India governs credit cards under the Master Direction on Credit Card and Debit Card Issuance and Conduct Directions, 2022, updated in March 2024. These rules draw a sharp line between personal credit cards and business credit cards.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI norms, lenders must monitor the end-use of funds on business cards. For retail cards, banks rely on their cardholder agreement to restrict commercial use. However, blocking or cancelling a card does not give the bank freedom to act unfairly.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Card issuers must communicate clearly with the cardholder about why the card was blocked. They must also give a transparent statement of exact dues. If you clear all valid dues, the bank must close the account cleanly and update credit bureaus within 30 days.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="debt-recall-emi" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Accelerated Repayment &amp; Foreclosure Impact</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Debt Recall &amp; Immediate EMI Foreclosure Explained
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A sudden commercial block often triggers a financial shock called a debt recall. Because the bank treats business use as a contract breach, it cancels your revolving credit line. You can no longer pay just the Minimum Amount Due to keep the account active.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even worse, cancelling the card usually triggers immediate EMI foreclosure. Any active merchant EMIs, instant card loans, or balance transfers get cancelled at once. The bank adds all unbilled principal directly to your next statement.
              </p>

              {/* Representative Impact Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">How Debt Recall Inflates Your Next Card Bill</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Illustrative Example</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Account Component</th>
                        <th className="p-3">Before Card Block</th>
                        <th className="p-3">After Debt Recall</th>
                        <th className="p-3 text-right">Borrower Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Regular Unbilled Spends</td>
                        <td className="p-3 font-mono">Rs 1,20,000</td>
                        <td className="p-3 font-mono">Rs 1,20,000</td>
                        <td className="p-3 text-right font-semibold text-slate-700">Due on next bill date</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Active Merchant EMIs</td>
                        <td className="p-3 font-mono">Rs 20,000 / month</td>
                        <td className="p-3 font-mono text-amber-700 font-bold">Rs 2,40,000 (Foreclosed)</td>
                        <td className="p-3 text-right font-semibold text-amber-700">Full principal accelerated</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">EMI Foreclosure Fee (3% + GST)</td>
                        <td className="p-3 font-mono">Rs 0</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">Rs 8,496</td>
                        <td className="p-3 text-right font-semibold text-rose-600">Disputable if involuntary</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Immediate Demand</td>
                        <td className="p-3 font-mono">Rs 1,40,000</td>
                        <td className="p-3 font-mono text-[#1886ff]">Rs 3,68,496</td>
                        <td className="p-3 text-right text-[#1886ff]">Lump-sum payment risk</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="personal-vs-business" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Card Classification &amp; Legal Scope</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Personal vs Business Credit Card Liability Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing how personal cards differ from business cards helps you defend your account. It also prevents future blocks if you run a sole proprietorship or freelance practice.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Parameter</th>
                      <th className="p-3">Personal Retail Credit Card</th>
                      <th className="p-3">Business / Commercial Card</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Permitted Usage</td>
                      <td className="p-3">Personal, family, and household expenses only.</td>
                      <td className="p-3">Vendor payouts, GST, ads, travel, and business inventory.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">KYC &amp; Underwriting</td>
                      <td className="p-3">Salary slips or personal ITR of the individual.</td>
                      <td className="p-3">GST registration, Udyam certificate, or business financials.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">High Turnover Trigger</td>
                      <td className="p-3">Flags AML alert and leads to sudden card block.</td>
                      <td className="p-3">Expected and permitted within sanctioned business limit.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Reward Point Rules</td>
                      <td className="p-3">Points may be forfeited or capped on commercial MCCs.</td>
                      <td className="p-3">Tailored cashback and tax-payment milestone benefits.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Commercial Block &amp; Debt Relief
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual roadmap outlines the four stages of handling a commercial spend card block. It covers statement audits, bank escalations, CIBIL protection, and legal settlement paths.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/credit-card-blocked-for-commercial-usage-debt-recall.jpg"
                    alt="Personal Credit Card Blocked for Commercial Spends Debt Recall and Relief Blueprint"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>CredSettle Commercial Card Block &amp; Debt Recall Framework • RBI Compliant</span>
                  <a
                    href="/images/infographics/credit-card-blocked-for-commercial-usage-debt-recall.jpg"
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

            {/* SECTION 6 */}
            <section id="tax-sft-compliance" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Tax Reporting &amp; Audit Exposure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Income Tax SFT Rule 114E &amp; GST Compliance Risks
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Commercial spends on a personal card create tax risks beyond a bank block. Under Rule 114E of the Income Tax Rules, banks file a Statement of Financial Transactions (SFT) in Form 61A for high card payments.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your non-cash credit card bill payments reach Rs 10 lakh or more in a financial year with one bank, the bank reports it to the tax department. For cash payments, the limit is only Rs 1 lakh. This data shows up directly in your Annual Information Statement (AIS).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your Income Tax Return (ITR) shows lower income than your card bills, you may get an e-verification notice. Keep all vendor invoices and bank transfer proofs ready to show the spends were business expenses or reimbursements.
              </p>
            </section>

            {/* SECTION 7 */}
            <section id="step-by-step-action" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Step-by-Step Action Plan After Commercial Block
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do not panic or ignore emails from your bank after a commercial block. Follow these six practical steps to control the damage and protect your credit profile.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Get Written Reason for the Block
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email customer support immediately to ask for the exact reason behind the freeze. Ask whether the block is temporary for KYC review or permanent for MITC violation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Submit Invoices If Spends Were Personal
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    High personal spends like wedding shopping, hospital bills, or tuition fees often look like commercial activity. Send valid receipts and bank statements to prove personal use.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Audit Your Recalled Statement &amp; Foreclosed EMIs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your full statement and check every fee added after the block. Spot involuntary EMI foreclosure charges, overlimit fees, and compounded late penalties.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Request EMI Restoration or Repayment Plan
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you cannot pay the recalled lump sum at once, write to the Principal Nodal Officer. Ask them to keep your original EMI schedule active or convert the total due into an affordable installment plan.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Negotiate a Written One-Time Settlement (OTS)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When business losses prevent full repayment, negotiate an OTS on the true principal. Always insist on an official settlement letter on bank letterhead before paying any amount.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Collect Closure NOC &amp; Verify CIBIL Update
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once you pay the agreed amount, collect your No Dues Certificate (NDC). Check your CIBIL report after 30 days to confirm the balance shows zero.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8 */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Safeguards &amp; Legal Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Borrower Rights &amp; Protection Against Unfair Charges
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even if you breached card terms by making business spends, you still retain strong legal rights under RBI rules and Indian contract law. Banks cannot impose arbitrary penalties or harass you.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>No Capitalization of Penal Charges</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI guidelines on penal charges, banks cannot add late fees or default charges to your principal to charge compound interest. Only simple penal charges are allowed.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Disputing Involuntary EMI Foreclosure Fees</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Foreclosure fees usually apply when a borrower chooses to close an EMI early. If the bank forced the foreclosure by cancelling your card, you can demand a waiver of that fee.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Lock className="w-4 h-4" />
                    <span>Protection Against Recovery Harassment</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI Fair Practices rules prohibit recovery agents from calling before 8 AM or after 7 PM, visiting without notice, or shaming you before business clients and family.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Right to Clear Closure &amp; Bureau Update</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Once you pay your full dues or settled sum, the bank must issue a formal closure letter and update CIBIL, Experian, CRIF, and Equifax within the statutory cycle.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9 */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. 3-Tier Escalation Matrix: GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If customer care refuses to review your personal spend invoices, waive unfair foreclosure fees, or offer a realistic repayment plan, use the RBI three-tier escalation system.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Response Window</th>
                      <th className="p-3">Scope of Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Reviews personal spend proof and logs fee reversal requests.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Approves EMI reinstatement, penalty waivers, or OTS terms.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-Complaint</td>
                      <td className="p-3">Adjudicates unfair billing, harassment, and CIBIL errors on cms.rbi.org.in.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10 */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Timeline: From Card Block to CIBIL Closure or OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Acting quickly during the first 30 days after a commercial block prevents your account from slipping into Days Past Due (DPD) and Non-Performing Asset (NPA) status.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Window</th>
                      <th className="p-3">Account Stage</th>
                      <th className="p-3">Bank Action</th>
                      <th className="p-3">Recommended Borrower Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 7</td>
                      <td className="p-3 font-mono text-[11px]">Risk Freeze</td>
                      <td className="p-3">Blocks card and sends SMS or email asking for spend clarification.</td>
                      <td className="p-3">Request written reason and submit invoices if spends are personal.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 8 to 30</td>
                      <td className="p-3 font-mono text-[11px]">Debt Recall</td>
                      <td className="p-3">Cancels card permanently, forecloses active EMIs, and bills full balance.</td>
                      <td className="p-3">Audit statement and petition PNO to restore EMIs or waive fees.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 31 to 90</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">SMA-1 / SMA-2</td>
                      <td className="p-3">Reports missed lump-sum payment as DPD to CIBIL and starts recovery calls.</td>
                      <td className="p-3 font-bold text-amber-800">Escalate to RBI CMS for unfair billing or initiate structured repayment.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">NPA &amp; OTS Window</td>
                      <td className="p-3">Classifies account as NPA and opens formal One-Time Settlement desk.</td>
                      <td className="p-3 font-bold text-slate-900">Negotiate OTS waiver, pay via bank channel, and secure NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11 */}
            <section id="special-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Card Block Situations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                11. Special Cases: Vendor Apps, Rent &amp; MSME Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Commercial card blocks happen in several common ways across India. Understanding your exact scenario helps you choose the right legal or settlement response.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    BPSP &amp; Vendor Payment Gateways
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Using third-party apps to pay suppliers, office rent, or GST via a personal card triggers immediate risk flags. Banks treat repeated vendor transfers as unauthorized commercial credit rotation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Cross-Default on Other Bank Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Unique Customer Identification Code (UCIC) linking, defaulting on a recalled card can freeze your second card or savings account with the same bank. Act early to separate personal accounts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Conversion to Business Card or Term Loan
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you have a strong repayment history and GST registration, some banks allow converting your personal card balance into a structured business term loan or shifting to a dedicated Biz-series card.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Add-On Cards &amp; Employee Misuse
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a family member or staff member used an add-on card for commercial swipes, the primary cardholder remains legally liable. Cancel supplementary cards right away during any dispute.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 12: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 13: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Commercial Card Blocks
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers to common questions about personal credit cards blocked for commercial use, debt recall, EMI foreclosure, CIBIL impact, and RBI remedies.
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

            {/* SECTION 14: Citations & Outbound Authority Grid */}
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
                  <strong>Reserve Bank of India Master Direction:</strong> Master Direction - Credit Card and Debit Card - Issuance and Conduct Directions, 2022 (Updated March 7, 2024), governing retail vs business card usage, closure timelines, and bureau reporting.
                </li>
                <li>
                  <strong>RBI Fair Lending Practice - Penal Charges Circular:</strong> DoR.MCS.REC.28/01.01.001/2023-24, prohibiting capitalization and compounding of penal charges on loan and card accounts.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Grievance adjudication for unfair billing, wrongful card blocking, and recovery harassment.
                </li>
                <li>
                  <strong>Income Tax Rules, 1962:</strong> Rule 114E read with Section 285BA of the Income Tax Act, 1961 (Statement of Financial Transactions reporting for credit card bill payments).
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Provisions governing cardholder Most Important Terms and Conditions (MITC) and reasonable compensation on contract breach.
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
                  <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Income Tax e-Filing Portal (AIS)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL</span>
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
                    Credit Card Settlement
                  </Link>
                  <Link href="/unbilled-credit-card-merchant-emi-foreclosure-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unbilled EMI Foreclosure Rules
                  </Link>
                  <Link href="/bank-increased-credit-card-apr-interest-rbi-opt-out" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card APR Hike Opt-Out
                  </Link>
                  <Link href="/bank-demanding-full-payment-for-loan-closure" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Demanding Full Payment
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/can-i-convert-settled-to-closed-later" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/add-on-supplementary-credit-card-default-liability" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Add-On Card Default Liability
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/business-loan-settlement-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business Loan Settlement
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
                Specialist in credit card compliance, RBI statutory guidelines, and debt settlement negotiations with extensive experience resolving bank debt recalls and CIBIL disputes across India.
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
                  DEBT RECALL DEFENSE
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Card Blocked &amp; Full Dues Demanded?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution team audits foreclosed EMIs, challenges unfair penal fees, stops recovery calls, and negotiates affordable settlements with your bank.
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
                  <span><strong>Statement &amp; Fee Audit:</strong> Remove unlawful foreclosure charges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Filings:</strong> Escalate unfair card blocks cleanly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Structured OTS Relief:</strong> Settle recalled dues at reduced principal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-Harassment Shield:</strong> Stop unlawful agent calls legally.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/unbilled-credit-card-merchant-emi-foreclosure-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unbilled Credit Card EMI Foreclosure
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Handling accelerated EMIs &rarr;</span>
                </Link>

                <Link
                  href="/services/credit-card-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Debt Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal OTS &amp; waiver options &rarr;</span>
                </Link>

                <Link
                  href="/bank-demanding-full-payment-for-loan-closure"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Demanding Full Payment
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Respond to debt recall &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
