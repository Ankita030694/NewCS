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
  Coins
} from 'lucide-react';

export default function CanBankWithholdPledgedGoldClient() {
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
    { id: 'contract-of-pledge', label: '1. Contract of Pledge: Sec 171 vs 174' },
    { id: 'financial-valuation', label: '2. Financial Forensics & Gold Valuation' },
    { id: 'collateral-matrix', label: '3. Collateral Protection Matrix' },
    { id: 'judicial-precedents', label: '4. Judicial Rulings & Court Precedents' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Gold Recovery Protocol' },
    { id: 'legal-protections', label: '7. Criminal Breach & Consumer Rights' },
    { id: 'grievance-matrix', label: '8. 3-Tier Grievance Redressal Matrix' },
    { id: 'procedural-timeline', label: '9. Procedural Milestones & Timelines' },
    { id: 'specialized-scenarios', label: '10. Specialized Real-World Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank legally withhold my pledged gold after I repay the gold loan?',
      a: 'Generally no. Under Section 160 and Section 174 of the Indian Contract Act, 1872, the bank is a bailee and pawnee bound to return the pledged goods once the debt for which they were pledged is discharged, unless an explicit contract to the contrary permits cross-collateralization.'
    },
    {
      q: 'What is a banker general lien under Section 171 of the Contract Act?',
      a: 'Section 171 allows a bank to retain goods bailed to it as security for a general balance of account. However, this right is subject to a contract to the contrary and does not automatically override a specific pledge governed by Section 174.'
    },
    {
      q: 'Can a bank retain my gold if I have an overdue credit card or personal loan?',
      a: 'If your gold pledge form lacks a specific cross-collateralization clause, the bank cannot retain your ornaments for unsecured debts. Courts hold that specific pledges cannot be arbitrarily converted into general securities without borrower consent.'
    },
    {
      q: 'What did the Madras High Court rule in State Bank of India v. Jayanthi?',
      a: 'The Madras High Court held that when jewels are pledged specifically for a particular loan, the bank cannot retain them under Section 171 for other debts once the gold loan is cleared, as the specific pledge creates an implied contract to the contrary.'
    },
    {
      q: 'Can a bank hold my personal gold if I am only a guarantor for someone else?',
      a: 'No. The Orissa High Court in Alekha Sahoo v. Puri Urban Co-operative Bank ruled that a general lien cannot be exercised on a customer personal security for dues owed in the separate legal capacity of a guarantor.'
    },
    {
      q: 'What is the RBI 30-day timeline to return pledged gold and documents?',
      a: 'Under RBI circular DOR.MCS.REC.38/01.01.001/2023-24, lenders must release all movable and immovable collateral within 30 days of full loan repayment. Lenders must pay compensation of ₹5,000 for every day of delay attributable to them.'
    },
    {
      q: 'Does withholding gold after repayment amount to criminal breach of trust?',
      a: 'Yes. Under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (formerly Section 406 IPC), dishonest misappropriation or refusal to return entrusted property after bailment conditions are met constitutes criminal breach of trust.'
    },
    {
      q: 'Can I file a consumer complaint against the bank for withholding my gold?',
      a: 'Yes. Consumer commissions view unlawful retention of pledged jewellery as a grave deficiency in service and unfair trade practice, regularly directing immediate return, awarding compensation, and imposing punitive costs.'
    },
    {
      q: 'What should I do immediately if the bank manager refuses to release my gold?',
      a: 'Demand a written endorsement of refusal, send a formal legal demand notice under Section 160 and 174, lodge a complaint with the Principal Nodal Officer, and escalate to the RBI Integrated Ombudsman portal.'
    },
    {
      q: 'How does CredSettle help borrowers recover withheld gold jewellery?',
      a: 'CredSettle drafts formal statutory notices, challenges improper banker liens, files RBI Ombudsman and consumer complaints, and negotiates comprehensive settlements for any linked unsecured debts to secure swift collateral release.'
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
            <Coins className="w-3.5 h-3.5 text-amber-300" />
            <span>Pledged Collateral Rights &amp; Secured Borrower Protection Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can Bank Withhold Pledged Gold After Loan Repayment?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A comprehensive legal guide for borrowers whose gold loan is repaid but the lender refuses to return the pledged ornaments. Learn how Section 171 and Section 174 apply, how to challenge wrongful lien misuse, and how RBI rules protect your jewellery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Reclaim Your Pledged Gold</span>
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
                  <span>Statutory Pledge Protection Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Section 160 &amp; 174 Indian Contract Act 1872 and RBI Master Directions.
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
                <span>EXECUTIVE BRIEF: PLEDGED GOLD WITHHOLDING &amp; BANKER LIEN MISUSE</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Duty to Return Collateral:</strong> Under Section 160 of the Indian Contract Act, a bank must return pledged gold immediately once the gold loan is cleared.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Section 174 Overrides Section 171:</strong> Section 174 prohibits a pawnee from retaining pledged goods for any debt other than the specific loan for which they were pledged.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">High Court Precedents:</strong> Landmark rulings from Madras, Kerala, and Orissa High Courts hold that banks cannot retain gold for unrelated personal or guarantor debts.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">RBI 30-Day Mandate &amp; ₹5,000/Day Penalty:</strong> Lenders delaying the return of collateral beyond 30 days must pay ₹5,000 per day in statutory compensation.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Consumer Court &amp; Criminal Remedies:</strong> Wrongful withholding constitutes deficiency in service under Consumer Law and criminal breach of trust under BNS Section 316.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Contract of Pledge: Section 171 vs Section 174 */}
            <section id="contract-of-pledge" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Contract Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Contract of Pledge: Section 171 vs Section 174
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an individual pledges gold ornaments with a bank, the transaction is governed by the law of bailment and pledge under the Indian Contract Act, 1872. The borrower is the pawnor, and the bank is the pawnee. Gold is handed over solely to secure that specific loan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers face a frustrating ordeal. After paying every rupee of principal, interest, and processing charges, the branch manager refuses to return the jewellery packet. Instead, the bank claims a banker general lien under Section 171 because the borrower has an overdue credit card or personal loan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 171 provides that bankers may retain goods bailed to them as security for a general balance of account. However, this power applies only in the absence of a contract to the contrary. When a customer pledges gold for a specific loan, that agreement creates a special contract of pledge.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 174 of the Indian Contract Act directly protects the borrower. It states that the pawnee shall not retain the goods pledged for any debt or promise other than the debt for which they were pledged. Therefore, specific pledge rules limit the bank power of general lien.
              </p>
            </section>

            {/* SECTION 2: Financial Forensics & Gold Valuation Breakdown */}
            <section id="financial-valuation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics &amp; Asset Valuation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Forensics: Gold Value vs Disputed Dues
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Gold loans generally operate with a loan-to-value (LTV) ratio of 75 percent. Over the course of a loan tenure, the market value of gold often appreciates substantially. This dynamic creates a severe power imbalance between the bank and the borrower.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks often use the emotional and cultural value of family gold ornaments to force repayment of disputed or inflated unsecured dues. A borrower might have repaid a ₹3.5 Lakh gold loan in full, yet the bank holds ₹12 Lakh worth of jewellery to recover an unadjudicated credit card balance of ₹1.5 Lakh.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Holding collateral whose value far exceeds an alleged unsecured debt is legally disproportionate. It violates equitable principles and fair banking practices. Examining the ledger breakdown helps demonstrate the unjust enrichment sought by the lender.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Ledger Audit &amp; Asset Disparity Math</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">150g Gold Collateral Audit</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Financial Parameter</th>
                        <th className="p-3">Amount / Valuation</th>
                        <th className="p-3">Statutory Legal Status</th>
                        <th className="p-3 text-right">Borrower Recovery Equity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Original Gold Loan Sanctioned</td>
                        <td className="p-3">₹4,20,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Discharged in Full via Valid Receipt</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹0 Pending Dues</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Market Value of 150g Gold Jewellery</td>
                        <td className="p-3">₹12,75,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Absolute Ownership of Borrower</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹12,75,000 Equity Locked</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Separate Disputed Credit Card Ledger</td>
                        <td className="p-3 text-rose-600 font-bold">₹2,80,000</td>
                        <td className="p-3 text-blue-600 font-semibold">Unsecured Claim: Negotiable under OTS</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹75,000 (Fair OTS Value)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Net Asset Disparity Under Illegal Lien</td>
                        <td className="p-3 text-slate-900">₹9,95,000 Excess</td>
                        <td className="p-3 text-rose-700">Unlawful Disproportionate Coercion</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">100% Gold Recoverable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Collateral Protection Matrix */}
            <section id="collateral-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Asset Vulnerability &amp; Shield Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Collateral Protection Matrix: Movable Asset Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers must recognize the clear legal differences between various types of assets held by a financial institution. Indian law provides distinct rules for pledged movable goods, mortgaged real estate, and regular deposits.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                While a bank enjoys an automated right of set-off on cash deposits in the same branch, movable collateral like pledged jewellery cannot be treated as a liquid fund sweep. Here is how asset categories compare under Indian banking law.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Collateral Type</th>
                      <th className="p-3">Governing Legal Code</th>
                      <th className="p-3">Lien Applicability</th>
                      <th className="p-3">Post-Closure Duty</th>
                      <th className="p-3">Strategic Borrower Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Pledged Gold Ornaments</td>
                      <td className="p-3">Contract Act, 1872 (Sec 172-174)</td>
                      <td className="p-3 text-emerald-600 font-semibold">Strictly Specific to Gold Loan</td>
                      <td className="p-3 text-emerald-600 font-semibold">Immediate Return (Sec 160)</td>
                      <td className="p-3">Serve legal notice under Section 174.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Title Deeds (Housing Mortgage)</td>
                      <td className="p-3">Transfer of Property Act, 1882</td>
                      <td className="p-3 text-blue-600">Restricted to Home Loan Security</td>
                      <td className="p-3 text-emerald-600 font-semibold">Mandatory 30-Day Release</td>
                      <td className="p-3">Claim ₹5,000 per day under RBI circular.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Hypothecated Vehicles</td>
                      <td className="p-3">Motor Vehicles Act, 1988</td>
                      <td className="p-3 text-emerald-600 font-semibold">Hypothecation Cancelled upon EMI Pay</td>
                      <td className="p-3 text-emerald-600 font-semibold">Issue Form 35 &amp; NOC</td>
                      <td className="p-3">File complaint with RTO &amp; Banking Ombudsman.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Fixed Deposits (General)</td>
                      <td className="p-3">Contract Act, 1872 (Sec 171)</td>
                      <td className="p-3 text-rose-600 font-semibold">Subject to Banker General Lien</td>
                      <td className="p-3 text-amber-600">May be Adjusted for Dues</td>
                      <td className="p-3">Liquidate voluntarily for structured OTS deal.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Savings Account Balance</td>
                      <td className="p-3">Banking Regulation Act, 1949</td>
                      <td className="p-3 text-rose-600 font-semibold">Right of Set-Off Permitted</td>
                      <td className="p-3 text-rose-600">Immediate Debit Risk</td>
                      <td className="p-3">Operate accounts in a separate neutral bank.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Banker Lien Misuse & Landmark Judicial Rulings */}
            <section id="judicial-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Banker Lien Misuse: Landmark Judicial Rulings
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts have delivered significant rulings on whether a bank can refuse to release pledged gold. While Section 171 grants banks a general lien, that right cannot be exercised arbitrarily against specific pledges.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In the landmark case of State Bank of India v. Jayanthi (2011), the Madras High Court addressed this exact question. The borrower repaid her jewel loan, but the bank withheld the ornaments citing a separate loan default. The High Court ruled that a specific pledge is a contract to the contrary under Section 171. The bank cannot retain jewels for another debt once the gold loan is closed.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Similarly, in Alekha Sahoo v. Puri Urban Co-operative Bank, the Orissa High Court established an essential rule regarding legal capacity. The court held that a bank cannot exercise a general lien over a customer personal gold for dues owed by that customer solely as a guarantor for someone else. Personal collateral belongs to the customer in an individual right, distinct from guarantee liabilities.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In Syndicate Bank v. Vijay Kumar (1992), the Supreme Court recognized banker liens but confirmed they remain subject to express or implied contracts to the contrary. Furthermore, the National Consumer Disputes Redressal Commission (NCDRC) has repeatedly ruled that withholding gold after repayment constitutes deficiency in service, awarding compensation and directing immediate release.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Pledged Gold Recovery Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This authoritative visual blueprint illustrates the legal process for reclaiming pledged gold jewellery from a recalcitrant lender, highlighting statutory provisions, dispute escalation tiers, and consumer remedies.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/can-bank-withhold-pledged-gold-after-loan-repayment.jpg"
                    alt="Bank Withholding Pledged Gold After Loan Repayment Legal Rules"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Gold Collateral Shield Framework • Section 174 Indian Contract Act Compliant</span>
                  <a
                    href="/images/infographics/can-bank-withhold-pledged-gold-after-loan-repayment.jpg"
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

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: 6 Stages to Reclaim Pledged Gold
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your lender refuses to release your pledged gold after full repayment, execute this systematic six-stage legal protocol to force delivery and secure your jewellery.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Secure Full Repayment Receipt &amp; Closure Statement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Always pay loan closure amounts through recorded digital channels or account transfers. Secure an official payment receipt stating that the gold loan account balance is zero.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Audit Original Gold Loan Pledge Document
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Examine the application and pawn token signed during sanction. Check whether there is an explicit cross-collateralization clause. If no such clause exists, the bank has zero contractual right of general lien.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Issue Formal Statutory Demand Notice
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Through legal counsel, dispatch a formal demand notice citing Section 160 and Section 174 of the Indian Contract Act. Give the branch manager a strict 7-day deadline to hand over the gold packet.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Invoke RBI 30-Day Rule for ₹5,000/Day Penalty
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under RBI circular DOR.MCS.REC.38/01.01.001/2023-24, lenders must return movable collateral within 30 days. Notify the bank Principal Nodal Officer that daily ₹5,000 penalties are accumulating.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Escalate to RBI Ombudsman &amp; Police Complaint
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Lodge a complaint on cms.rbi.org.in for unfair trade practice. If the branch threatens auction, submit a police report for criminal breach of trust under Bharatiya Nyaya Sanhita Section 316.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: File Consumer Commission Petition for Immediate Delivery
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    File a consumer petition before the District Consumer Disputes Redressal Commission seeking an ex-parte order directing immediate return of the gold, along with heavy compensation for mental agony.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Defense: Criminal Breach & Consumer Law */}
            <section id="legal-protections" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Defenses &amp; Borrower Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Defense: Criminal Breach &amp; Consumer Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a bank refuses to deliver gold ornaments after receiving full repayment, its conduct crosses the boundary from a civil disagreement into actionable statutory wrongdoing. Borrowers have potent legal shields.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 316 BNS (Criminal Breach of Trust)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank holds gold in trust as a bailee. Refusing to return entrusted property after loan repayment constitutes criminal breach of trust under Bharatiya Nyaya Sanhita 2023.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unlawful retention of pledged jewellery constitutes deficiency in service and unfair trade practice under Section 2(47), empowering commissions to order immediate return and damages.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Civil Injunction under Order 39 CPC</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank threatens to auction withheld gold ornaments for another loan, borrowers can obtain an emergency temporary injunction restraining auction proceedings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Article 300A Constitutional Property Right</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    No citizen can be deprived of personal property except by authority of law. A bank cannot expropriate private gold without due adjudication by a competent court or tribunal.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Bank & RBI Redressal */}
            <section id="grievance-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank &amp; RBI Redressal
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do not engage in endless verbal arguments with branch executives. Follow the formal Reserve Bank of India grievance redressal hierarchy to demand prompt compliance.
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
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Branch &amp; Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Registers formal dispute, halts auction notices, and conducts pledge document audit.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Reviews lien legality, enforces RBI circular compliance, and authorizes collateral release.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Issues binding directions via cms.rbi.org.in, orders return of gold, and awards ₹5,000/day delay fines.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Milestones: Repayment to Gold Release */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Milestones: Repayment to Gold Release
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing the standard lifecycle of gold loan closure enables you to identify procedural infractions early and enforce statutory return timelines.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Timeline</th>
                      <th className="p-3">Legal Stage of Gold Loan</th>
                      <th className="p-3">Expected Banking Action</th>
                      <th className="p-3">Borrower Defensive Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0 (Closure Day)</td>
                      <td className="p-3 font-mono text-[11px]">Debt Extinguishment</td>
                      <td className="p-3">Issue final closure receipt and update core banking ledger.</td>
                      <td className="p-3">Verify zero balance and obtain stamped payment voucher.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 7</td>
                      <td className="p-3 font-mono text-[11px]">Physical Handover Window</td>
                      <td className="p-3">Retrieve jewellery packet from branch safe and inspect seals with customer.</td>
                      <td className="p-3">Verify weight, purity, and gross count against original pledge token.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 8 to 29</td>
                      <td className="p-3 font-mono text-[11px]">Wrongful Retention Zone</td>
                      <td className="p-3">Lender raises oral or written demand regarding other loan facilities.</td>
                      <td className="p-3">Dispatch formal legal notice citing Section 174 of the Contract Act.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 30</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">RBI Mandatory Deadline</td>
                      <td className="p-3">Final statutory deadline to return movable and immovable collateral.</td>
                      <td className="p-3">File complaint with Principal Nodal Officer highlighting Day 30 breach.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 31 and Beyond</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Statutory Penalty Accrual</td>
                      <td className="p-3">Lender incurs mandatory liability of ₹5,000 for each day of delay.</td>
                      <td className="p-3 font-bold text-slate-900">File RBI Ombudsman complaint and claim daily compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Agriculture &amp; Guarantors
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Lien disputes frequently occur in unique financial and familial settings. Here is how Indian court rulings apply across specialized real-world scenarios.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Gold Pledged for Agricultural Credit vs Personal Loan
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agricultural gold loans carry statutory interest subventions and priority sector protections. Courts hold that agricultural pledges cannot be held hostage for commercial or personal defaults under general lien powers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Borrower as Guarantor for Another Debtor
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Alekha Sahoo judgment, a bank cannot retain personal gold jewels for a debt where the customer only acted as a guarantor. The capacity as borrower is legally distinct from that of a surety.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Multiple Gold Loan Packets in the Same Branch
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you close Gold Loan A, the bank cannot withhold Packet A simply because Gold Loan B is ongoing, provided Loan B is regular or has its own distinct pledged collateral security.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    Stridhan &amp; Family Jewellery Rights
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Hindu law, a woman stridhan remains her absolute separate property. A husband creditor bank cannot exercise a general lien on a wife gold ornaments for debts contracted solely by the husband.
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
                Frequently Asked Questions: Pledged Gold &amp; Bank Lien
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding pledged gold return, banker lien misuse, RBI timelines, and borrower remedies in India.
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
                Official Regulatory Citations &amp; Statutory Legal Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 148 (Bailment), Section 160 (Return of Goods), Section 171 (General Lien of Bankers), and Section 174 (Pawnee Duty to Return Pledged Goods).
                </li>
                <li>
                  <strong>Reserve Bank of India Directions:</strong> Circular RBI/2023-24/60 on Release of Movable and Immovable Property Documents on Loan Repayment (September 13, 2023).
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(47), Unfair Trade Practices and Deficiency in Banking Services for Wrongful Collateral Retention.
                </li>
                <li>
                  <strong>Bharatiya Nyaya Sanhita, 2023 (BNS):</strong> Section 316, Criminal Breach of Trust Regarding Property Entrusted Under Bailment.
                </li>
                <li>
                  <strong>Landmark Judicial Precedents:</strong> State Bank of India v. Jayanthi (Madras HC), Alekha Sahoo v. Puri Urban Co-operative Bank (Orissa HC), and Syndicate Bank v. Vijay Kumar (Supreme Court).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a href="https://edaakhil.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>e-Daakhil Consumer Grievance Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a href="https://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Disputes Commission</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/gold-loan-default-auction" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Gold Loan Default Auction
                  </Link>
                  <Link href="/bankers-right-of-set-off-savings-account-section-171-contract-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Banker Right of Set-Off
                  </Link>
                  <Link href="/bank-demanding-full-payment-for-loan-closure" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full Payment Loan Closure
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Agent Guidelines
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/can-bank-freeze-my-savings-account-for-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Savings Account Freeze
                  </Link>
                  <Link href="/garnishee-order-bank-account-freeze-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Garnishee Order Defense
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
                Expert in banking compliance, pledge contracts, movable collateral security, banker lien defenses, and consumer debt disputes under Indian Contract Act and RBI guidelines.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <Link
                  href="/author/ashish-jhangra"
                  className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>View Author Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> CredSettle Panel
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
                  Bank Withholding Your Pledged Gold?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior legal advocates challenge illegal banker general liens, issue statutory Section 174 demand notices, and help recover your jewellery safely.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Reclaim Your Jewellery Now
              </Link>
              <div className="pt-2 flex flex-col items-center justify-center gap-1 text-[11px] text-blue-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-blue-200" />
                  <a href="tel:+918800226635" className="hover:underline font-bold text-white">
                    Call: +91-8800226635
                  </a>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-blue-300">
                  <Lock className="w-3.5 h-3.5" />
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
                  <span><strong>Zero Illegal Collateral Seizure:</strong> Strict Section 174 enforcement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI 30-Day Penalty Claims:</strong> Enforce ₹5,000/day compensation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombudsman &amp; Police Escalation:</strong> Rapid administrative intervention.</span>
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
                  href="/gold-loan-default-auction"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Gold Loan Default Auction
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop illegal gold auction notices &rarr;</span>
                </Link>

                <Link
                  href="/bankers-right-of-set-off-savings-account-section-171-contract-act"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Banker Right of Set-Off
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Section 171 savings freeze defense &rarr;</span>
                </Link>

                <Link
                  href="/get-noc-after-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    No Dues Certificate
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Official bank closure documents &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
