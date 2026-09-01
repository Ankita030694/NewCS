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
  BadgeAlert,
  Landmark,
  Smartphone,
  ShieldAlert,
  Layers,
  Cpu
} from 'lucide-react';

export default function ConsumerDurableLoanDefaultClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Crux' },
    { id: 'debt-economics-npa-dynamics', label: '1. Micro-Credit & NPA Economics' },
    { id: 'financial-breakdown-settlement-math', label: '2. Bounce Fees & Settlement Math' },
    { id: 'legal-forum-comparison-matrix', label: '3. Resolution Comparison Matrix' },
    { id: 'cibil-algorithm-multi-bureau', label: '4. CIBIL Algorithm & Bureau Sync' },
    { id: 'infographic-overview', label: 'Visual 6-Stage Defense Blueprint' },
    { id: 'step-by-step-settlement-sop', label: '5. 6-Stage Settlement SOP' },
    { id: 'statutory-notice-defense-rights', label: '6. Statutory Notice Defense Grid' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance & RBI Matrix' },
    { id: 'chronological-resolution-milestones', label: '8. Chronological Timeline Table' },
    { id: 'specialized-loan-scenarios', label: '9. Specialized Default Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
  {
    "q": "Can you be arrested for defaulting on a consumer durable loan?",
    "a": "No. Defaulting on a consumer durable loan, EMI card, or BNPL line is strictly a civil dispute. Debt non-payment carries zero criminal liability under Indian law and RBI Fair Practices Code."
  },
  {
    "q": "What legal action can NBFCs take for EMI card defaults?",
    "a": "NBFCs can issue legal demand notices, seek Lok Adalat conciliation, or issue statutory notices under Section 25 PSSA or Section 138 NI Act if electronic mandates or cheques bounce."
  },
  {
    "q": "Why do NACH bounce charges compound on defaulted loan accounts?",
    "a": "Lenders and banks both levy separate bounce fees of ₹350 to ₹750 per failed auto-debit presentation. Multiple presentations inflate balances, but these fees are 100% waivable in settlement."
  },
  {
    "q": "How does defaulting on a mobile loan impact my CIBIL score?",
    "a": "A missed mobile EMI triggers Days Past Due entries across CIBIL, CRIF, Experian, and Equifax, dropping scores by 50 to 120 points and restricting future credit approvals."
  },
  {
    "q": "What should I do if recovery agents harass my contacts or use bots?",
    "a": "Contact scraping and bot calls violate RBI Digital Lending Guidelines 2022. Document instances and file formal complaints with the NBFC Grievance Officer and RBI CMS portal (cms.rbi.org.in)."
  },
  {
    "q": "Can I negotiate a One-Time Settlement (OTS) for consumer durable loans?",
    "a": "Yes. Once an unsecured consumer loan crosses 90 days into NPA status, NBFCs routinely approve One-Time Settlements with a 40% to 60% principal waiver and complete penal fee cancellation."
  },
  {
    "q": "How do I legally reply to a Section 25 PSSA bounce notice?",
    "a": "Respond within 30 days via legal counsel, documenting involuntary financial hardship, disputing unauthorized repetitive mandate presentations, and proposing an amicable compromise settlement."
  },
  {
    "q": "What is the difference between loan restructuring and a compromise settlement?",
    "a": "Restructuring extends repayment tenure with ongoing interest accrual, while a compromise One-Time Settlement (OTS) permanently closes the loan at a discounted lump sum, waiving residual balances."
  },
  {
    "q": "How can I verify an NBFC settlement sanction letter before payment?",
    "a": "Ensure the letter is on official NBFC letterhead, contains your exact loan account number, sanctioned compromise sum, explicit discharge covenants, NACH cancellation terms, and direct NBFC bank details."
  },
  {
    "q": "How long does it take credit bureaus to reflect loan settlement?",
    "a": "Following full settlement payment and No Dues Certificate issuance, NBFCs must update CIBIL, CRIF, Experian, and Equifax records to Settled within 30 to 45 days under CICRA 2005."
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-sky-300" />
            <span>Statutory Legal Protection &amp; Debt Settlement Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Consumer Durable &amp; Mobile Loan Default
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Struggling with unpaid smartphone EMIs, NBFC consumer credit cards, or Buy-Now-Pay-Later dues? Understand your legal protections against unlawful recovery harassment, halt escalating NACH bounce penalties, and negotiate an official compromise settlement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Harassment &amp; Settle Consumer Loans</span>
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
                      href={'#' + link.id}
                      className={'block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ' + (
                        isActive
                          ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      )}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Statutory Borrower Rights</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected by RBI Digital Lending Guidelines 2022 &amp; Section 25 PSSA Safeguards.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-3 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: CONSUMER DURABLE &amp; BNPL DEFAULT RESOLUTION</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Civil Dispute Nature:</strong> Consumer durable and BNPL defaults are strictly civil matters carrying zero criminal arrest risk under Indian law.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Prohibition of Bot Calls:</strong> RBI Digital Lending Guidelines 2022 strictly ban contact list scraping and automated dialer bots.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Section 25 PSSA Defense:</strong> Failed auto-debit notices are defensible by demonstrating bona fide distress and disputing unauthorized re-presentations.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">100% Bounce Fee Waiver:</strong> Compounded NACH bounce charges and late payment penalties are completely eliminated during settlement.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">40% to 60% Principal Haircut:</strong> Unsecured NPA consumer loans are routinely settled at substantial principal discounts to clear books.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Multi-Bureau Synchronization:</strong> Full settlement updates records across CIBIL, CRIF, Experian, and Equifax under Section 21 CICRA 2005.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Sanction Letter Verification:</strong> Settlement payments must only be made against verified official NBFC sanction letters.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">3-Tier Statutory Redressal:</strong> Grievances can be escalated sequentially to the NBFC Grievance Officer, Principal Nodal Officer, and RBI Ombudsman.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: DEBT ECONOMICS & NPA DYNAMICS */}
            <section id="debt-economics-npa-dynamics" className="scroll-target space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-blue-100/70 text-[#1886ff] font-black text-xs">01</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Micro-Credit Economics &amp; NBFC NPA Mechanics
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Consumer durable loans and Buy-Now-Pay-Later facilities offered by non-banking financial companies like Bajaj Finserv, Home Credit, and TVS Credit operate as high-volume, unsecured micro-credit lines. When sudden income shocks or medical emergencies disrupt cash flows, borrowers frequently default across retail financing tranches. Under RBI prudential norms, unpaid loan installments progress through Special Mention Account stages: SMA-0 for 1 to 30 days overdue, SMA-1 for 31 to 60 days, and SMA-2 for 61 to 90 days, culminating in mandatory Non-Performing Asset (NPA) classification upon crossing the 90-day delinquency threshold.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Once an unsecured consumer loan is designated as an NPA, the lending NBFC must allocate 100% Tier-1 capital loss provisioning against the asset. Because these loans are entirely unsecured, lenders cannot invoke the SARFAESI Act, which applies solely to secured debts exceeding one lakh rupees with registered collateral. Pursuing formal civil litigation for small balances between ten thousand and one lakh rupees is commercially unviable due to heavy court fees and legal expenses. Consequently, NBFC credit committees actively approve One-Time Settlements (OTS) to recover core principal capital.
              </p>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-blue-100/70 text-[#1886ff] font-black text-xs">02</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Compounding Penal Charges &amp; Realistic Settlement Math
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Defaulted consumer durable accounts experience rapid balance inflation driven by automated penal mechanisms. When an electronic NACH mandate fails, both the lending institution and the depository bank levy separate bounce penalties ranging from ₹350 to ₹750 per instance. When lenders re-present failed mandates repeatedly without borrower consent, these automated fees quickly exceed the original EMI balance. Under RBI Fair Lending Guidelines 2024, penal interest cannot be compounded into principal. During formal settlement negotiations, legal representation secures complete elimination of all bounce fees and penal surcharges.
              </p>

              {/* 4-Sided Bordered Financial Math Table Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm text-slate-700 divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/70 text-slate-900 font-extrabold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-2.5">Financial Component</th>
                      <th className="p-2.5">Claimed Total</th>
                      <th className="p-2.5">Audit Adjustment</th>
                      <th className="p-2.5">Settled Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80">
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-2.5 font-semibold text-slate-900">Principal Balance</td>
                      <td className="p-2.5">₹36,000</td>
                      <td className="p-2.5 text-emerald-700 font-medium">45% Haircut</td>
                      <td className="p-2.5 font-bold text-slate-900">₹19,800</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 bg-slate-50/40">
                      <td className="p-2.5 font-semibold text-slate-900">Normal Interest</td>
                      <td className="p-2.5">₹4,200</td>
                      <td className="p-2.5 text-emerald-700 font-medium">Reconciled</td>
                      <td className="p-2.5 font-bold text-slate-900">₹1,200</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-2.5 font-semibold text-slate-900">Penal &amp; Bounce Fees</td>
                      <td className="p-2.5">₹13,000</td>
                      <td className="p-2.5 text-emerald-700 font-medium">100% Waived</td>
                      <td className="p-2.5 font-bold text-emerald-700">₹0</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 bg-blue-50/60 font-black text-slate-900">
                      <td className="p-2.5 text-blue-950">Total Obligation</td>
                      <td className="p-2.5 text-rose-700 line-through">₹53,200</td>
                      <td className="p-2.5 text-emerald-800">60.5% Relief</td>
                      <td className="p-2.5 text-[#1886ff] text-base">₹21,000 (Full &amp; Final)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="legal-forum-comparison-matrix" className="scroll-target space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-blue-100/70 text-[#1886ff] font-black text-xs">03</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Resolution Pathways for Consumer Durable Debt
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Evaluating dispute resolution pathways allows borrowers to select the optimal mechanism to eliminate liability while managing credit score impacts effectively.
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm text-slate-700 divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-900 font-extrabold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-2.5">Pathway</th>
                      <th className="p-2.5">Legal Exposure</th>
                      <th className="p-2.5">Financial Relief</th>
                      <th className="p-2.5">Bureau Impact</th>
                      <th className="p-2.5">Ideal Scenario</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80">
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-2.5 font-bold text-[#1886ff]">OTS Settlement</td>
                      <td className="p-2.5">Direct Nodal negotiation; notices closed.</td>
                      <td className="p-2.5 text-emerald-700 font-semibold">40% to 60% principal waiver; 100% fee waiver.</td>
                      <td className="p-2.5">Marked as Settled; rebuilds in 12 to 24 months.</td>
                      <td className="p-2.5">Job loss or multi-debt distress.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 bg-slate-50/40">
                      <td className="p-2.5 font-bold text-slate-900">Restructuring</td>
                      <td className="p-2.5">Tenor extension with revised EMIs.</td>
                      <td className="p-2.5">Zero principal waiver; higher interest.</td>
                      <td className="p-2.5">Marked as Restructured.</td>
                      <td className="p-2.5">Temporary income dip.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-2.5 font-bold text-slate-900">Lok Adalat</td>
                      <td className="p-2.5">Pre-litigation judicial conciliation.</td>
                      <td className="p-2.5">30% to 50% discount with binding award.</td>
                      <td className="p-2.5">Settled through Lok Adalat Award.</td>
                      <td className="p-2.5">Court-endorsed closure.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 bg-slate-50/40">
                      <td className="p-2.5 font-bold text-slate-900">Civil Suit</td>
                      <td className="p-2.5">Lender files summary civil suit.</td>
                      <td className="p-2.5">High advocate fees and decree risk.</td>
                      <td className="p-2.5">Prolonged default record.</td>
                      <td className="p-2.5">Rare for micro-loans.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-2.5 font-bold text-rose-600">Inaction</td>
                      <td className="p-2.5">Persistent bot calls and field visits.</td>
                      <td className="p-2.5">Compounding penalties inflating debt.</td>
                      <td className="p-2.5">Written Off status; score &lt;550.</td>
                      <td className="p-2.5 text-rose-700 font-medium">Unadvisable.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: TECHNICAL CIBIL ALGORITHM & MULTI-BUREAU MATH */}
            <section id="cibil-algorithm-multi-bureau" className="scroll-target space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-blue-100/70 text-[#1886ff] font-black text-xs">04</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  CIBIL Scoring Algorithms &amp; Multi-Bureau Reporting Disparities
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Credit scoring models used by TransUnion CIBIL, Experian, CRIF High Mark, and Equifax allocate 35% of total score weight strictly to Payment History. Even a default on a ₹10,000 smartphone loan creates an immediate Days Past Due (DPD) record, causing scores to drop by 50 to 120 points. Moreover, fintech BNPL platforms often partition a single transaction across multiple partner NBFC balance sheets, generating separate default trade lines across different credit bureaus that severely elevate Credit Utilization ratios (30% weight).
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Under Section 21 of the Credit Information Companies (Regulation) Act (CICRA) 2005, lending NBFCs are statutorily obligated to update bureau records within 30 to 45 days of issuing a No Dues Certificate. Once the status reflects Settled with a zero outstanding balance, ongoing DPD reporting stops. Borrowers can then rebuild their score back to 750+ within 12 to 24 months using secured credit products.
              </p>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-blue-100/70 text-[#1886ff] font-black text-xs">05</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Visual 6-Stage Defense &amp; Resolution Blueprint
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Our proprietary 6-stage legal framework provides comprehensive protection against recovery harassment, eliminates predatory charges, and ensures legitimate debt discharge for consumer durable defaults.
              </p>

              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-900 group">
                <Image
                  src="/images/infographics/consumer-durable-loan-default.jpg"
                  alt="Consumer Durable and Mobile Loan Default Resolution Framework Infographic"
                  width={1920}
                  height={1080}
                  priority
                  className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-[1.01]"
                />
                <div className="p-2 bg-slate-900/90 text-center text-xs text-slate-300 border-t border-slate-800 flex items-center justify-between">
                  <span>CredSettle Consumer Durable Resolution Framework (16:9 Blueprint)</span>
                  <a
                    href="/images/infographics/consumer-durable-loan-default.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:text-sky-400 font-bold inline-flex items-center gap-1"
                  >
                    <span>View Full Size</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-settlement-sop" className="scroll-target space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-blue-100/70 text-[#1886ff] font-black text-xs">06</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  6-Stage Standard Operating Procedure for Consumer Loan Settlement
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Our structured six-stage SOP ensures seamless debt resolution by uniting forensic accounting with assertive statutory legal representation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Stage 1 */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#06b6d4] uppercase tracking-wider bg-cyan-50 px-2 py-0.5 rounded-md border border-cyan-200">
                      Stage 01: Audit
                    </span>
                    <FileText className="w-4 h-4 text-[#06b6d4]" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Forensic Ledger Audit</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    We audit your loan statement, separating principal from penal interest, unauthorized NACH bounce fees, and disputed processing charges across BNPL tranches.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#3b82f6] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                      Stage 02: Dossier
                    </span>
                    <Briefcase className="w-4 h-4 text-[#3b82f6]" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Hardship Documentation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    We assemble a verified hardship dossier containing job termination letters, medical records, or bank deficit proofs substantiating involuntary default.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#8b5cf6] uppercase tracking-wider bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                      Stage 03: Defense
                    </span>
                    <ShieldAlert className="w-4 h-4 text-[#8b5cf6]" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Anti-Harassment Notice</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    We issue statutory legal notices under RBI Digital Lending Guidelines and IT Act Sections 66E and 72A, halting recovery agent contact scraping and bot calls.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#f59e0b] uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                      Stage 04: Negotiation
                    </span>
                    <TrendingUp className="w-4 h-4 text-[#f59e0b]" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Credit Committee OTS</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Our legal negotiators represent your case before the NBFC Principal Nodal Officer and Credit Committee, securing a 40% to 60% principal waiver.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#10b981] uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      Stage 05: Vetting
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Sanction Letter Vetting</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    We vet the official sanction letter issued directly on NBFC letterhead, verifying explicit full debt discharge covenants and NACH cancellation.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#14b8a6] uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200">
                      Stage 06: Closure
                    </span>
                    <Sparkles className="w-4 h-4 text-[#14b8a6]" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">NDC &amp; Bureau Sync</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Payment is made directly into the lender official account, followed by receipt of the No Dues Certificate and credit bureau synchronization.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & BORROWER LEGAL RIGHTS */}
            <section id="statutory-notice-defense-rights" className="scroll-target space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-blue-100/70 text-[#1886ff] font-black text-xs">07</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Notice Defense &amp; Legal Protection Grid
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                When consumer durable loans default, lenders issue formal statutory notices. Understanding the legal framework governing each notice allows borrowers to assert their statutory defenses effectively.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Card 1: Section 25 PSSA */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider">
                    <Gavel className="w-4 h-4" />
                    <span>Section 25 PSSA (NACH Bounce)</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Electronic Mandate Defense</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Section 25 PSSA penalizes electronic debit bounces. A statutory notice requires a formal legal response within 30 days demonstrating involuntary hardship and challenging unauthorized multiple presentations.
                  </p>
                </div>

                {/* Card 2: Section 138 NI Act */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider">
                    <Scale className="w-4 h-4" />
                    <span>Section 138 NI Act (Cheque Bounce)</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Negotiable Instruments Reply</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    If a security cheque is dishonored, lenders must issue a demand notice within 30 days. Our counsel drafts statutory replies challenging inflated interest sums and seeking conciliation.
                  </p>
                </div>

                {/* Card 3: Arbitration Section 21 */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-purple-600 font-bold text-xs uppercase tracking-wider">
                    <Landmark className="w-4 h-4" />
                    <span>Section 21 Arbitration Act 1996</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Challenging Arbitrators</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Fintech lenders often appoint sole arbitrators unilaterally. Under Supreme Court rulings in TRF Ltd. and Perkins Eastman, unilateral appointments by an interested lender are de jure invalid under Section 12(5).
                  </p>
                </div>

                {/* Card 4: RBI Digital Lending & IT Act */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider">
                    <BadgeAlert className="w-4 h-4" />
                    <span>RBI Digital Lending &amp; IT Act</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Injunction Against Harassment</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    RBI Digital Lending Guidelines 2022 and Sections 66E and 72A of the IT Act strictly prohibit accessing contacts or deploying bot calls, enabling immediate regulatory complaints before the RBI Ombudsman.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER ESCALATION MATRIX */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-blue-100/70 text-[#1886ff] font-black text-xs">08</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  3-Tier Statutory Grievance Redressal Mechanism
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                When lenders violate Fair Practices Codes or permit collection harassment, borrowers can escalate disputes through a structured regulatory hierarchy.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm text-slate-700 divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-900 font-extrabold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-2.5">Tier</th>
                      <th className="p-2.5">Authority</th>
                      <th className="p-2.5">Turnaround</th>
                      <th className="p-2.5">Procedural Scope</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80">
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-2.5 font-bold text-slate-900">Level 1</td>
                      <td className="p-2.5 font-semibold text-[#1886ff]">Grievance Officer (GRO)</td>
                      <td className="p-2.5">7 to 10 Days</td>
                      <td className="p-2.5">Disputing billing errors and agent misconduct.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 bg-slate-50/40">
                      <td className="p-2.5 font-bold text-slate-900">Level 2</td>
                      <td className="p-2.5 font-semibold text-indigo-700">Principal Nodal Officer</td>
                      <td className="p-2.5">14 to 21 Days</td>
                      <td className="p-2.5">Appealing disputes; negotiating OTS terms.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-2.5 font-bold text-slate-900">Level 3</td>
                      <td className="p-2.5 font-semibold text-emerald-700">RBI Ombudsman</td>
                      <td className="p-2.5">30 Days</td>
                      <td className="p-2.5">Filing complaints on cms.rbi.org.in.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-resolution-milestones" className="scroll-target space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-blue-100/70 text-[#1886ff] font-black text-xs">09</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Chronological Default Progression &amp; Resolution Milestones
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Tracking delinquency milestones allows timely legal intervention to secure maximum waivers while halting aggressive collection escalation.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm text-slate-700 divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-900 font-extrabold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-2.5">Timeline</th>
                      <th className="p-2.5">Status</th>
                      <th className="p-2.5">Lender Actions</th>
                      <th className="p-2.5">Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80">
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-2.5 font-bold text-slate-900">Days 1 to 30</td>
                      <td className="p-2.5 text-amber-700 font-semibold">SMA-0</td>
                      <td className="p-2.5">SMS reminders and initial bounce fee.</td>
                      <td className="p-2.5">Review loan ledger.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 bg-slate-50/40">
                      <td className="p-2.5 font-bold text-slate-900">Days 31 to 90</td>
                      <td className="p-2.5 text-orange-700 font-semibold">SMA-1 / SMA-2</td>
                      <td className="p-2.5">Tele-calling surges and demand notices.</td>
                      <td className="p-2.5">Issue anti-harassment notice.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-2.5 font-bold text-slate-900">Days 91 to 120</td>
                      <td className="p-2.5 text-rose-700 font-semibold">NPA Status</td>
                      <td className="p-2.5">Section 25 PSSA statutory notices.</td>
                      <td className="p-2.5">Engage counsel to propose OTS.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 bg-slate-50/40">
                      <td className="p-2.5 font-bold text-[#1886ff]">Days 121 to 180</td>
                      <td className="p-2.5 font-semibold text-[#1886ff]">OTS Window</td>
                      <td className="p-2.5">Credit committee evaluates terms.</td>
                      <td className="p-2.5">Negotiate 40% to 60% waiver.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-2.5 font-bold text-emerald-700">Month 6 Onward</td>
                      <td className="p-2.5 text-emerald-800 font-semibold">Closed</td>
                      <td className="p-2.5">Issuance of NDC and cancellation.</td>
                      <td className="p-2.5">Verify CIBIL bureau update.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-loan-scenarios" className="scroll-target space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-blue-100/70 text-[#1886ff] font-black text-xs">10</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Specialized Scenarios in Consumer Credit Defaults
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Consumer credit defaults require tailored legal strategies depending on the underlying financing structure and lender collection tactics.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Scenario 1 */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs uppercase tracking-wider">
                    <Layers className="w-4 h-4" />
                    <span>Multi-App BNPL Stacking</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Consolidated Debt Resolution</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Borrowers stacking BNPL lines across Simpl, Lazypay, and apps face multiple notices. We consolidate cross-lender negotiations into a single synchronized compromise plan.
                  </p>
                </div>

                {/* Scenario 2 */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider">
                    <Briefcase className="w-4 h-4" />
                    <span>Salaried Job Loss &amp; Layoffs</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Involuntary Distress Petition</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Sudden layoffs leave individuals unable to pay active electronics EMIs. We submit verified severance proofs to NBFC committees to secure maximum principal haircuts.
                  </p>
                </div>

                {/* Scenario 3 */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider">
                    <Cpu className="w-4 h-4" />
                    <span>Auto-Dialer Bots &amp; Spam</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Regulatory Injunction</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Fintech apps using automated dialers making dozens of daily calls violate RBI rules. We issue immediate legal cease notices, stopping aggressive calling within 48 hours.
                  </p>
                </div>

                {/* Scenario 4 */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider">
                    <Building2 className="w-4 h-4" />
                    <span>ARC Debt Assignments</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Asset Reconstruction OTS</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    When consumer debts are sold to ARCs like Phoenix or Arcil at deep discounts, we leverage their acquisition cost to negotiate deep settlements of 60% to 70% off.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: COMPANY SECTION */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="scroll-target space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-blue-100/70 text-[#1886ff] font-black text-xs">11</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Find clear, authoritative answers to common legal and financial questions regarding consumer durable loan defaults, NBFC EMI cards, BNPL lines, and recovery regulations.
              </p>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-3.5 sm:p-4 text-left font-bold text-slate-900 hover:text-[#1886ff] flex items-center justify-between gap-4 text-xs sm:text-sm md:text-base transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={'w-4 h-4 sm:w-5 sm:h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ' + (
                            isOpen ? 'transform rotate-180 text-[#1886ff]' : ''
                          )}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-2.5 leading-relaxed font-normal">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="scroll-target space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-blue-100/70 text-[#1886ff] font-black text-xs">12</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Citations &amp; Regulatory Authorities
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Our consumer debt resolution protocols strictly adhere to statutory Indian financial enactments, Reserve Bank of India regulatory directives, and established judicial precedents governing consumer credit.
              </p>

              {/* Statutory Enactments List */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs space-y-2">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Primary Governing Frameworks &amp; Statutory Codes:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#1886ff]" />
                    <span>RBI Digital Lending Guidelines (2022)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#1886ff]" />
                    <span>Payment &amp; Settlement Systems Act (Sec 25)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#1886ff]" />
                    <span>Credit Information Companies Act (CICRA 2005)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#1886ff]" />
                    <span>Negotiable Instruments Act (Section 138)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#1886ff]" />
                    <span>Information Technology Act (Sec 66E &amp; 72A)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#1886ff]" />
                    <span>Arbitration &amp; Conciliation Act (1996)</span>
                  </li>
                </ul>
              </div>

              {/* 6 Outbound Regulatory Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white rounded-xl border border-slate-200/80 hover:border-[#1886ff] transition-all flex items-center justify-between text-xs font-bold text-slate-800 hover:text-[#1886ff]"
                >
                  <span>RBI Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white rounded-xl border border-slate-200/80 hover:border-[#1886ff] transition-all flex items-center justify-between text-xs font-bold text-slate-800 hover:text-[#1886ff]"
                >
                  <span>RBI Ombudsman CMS</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white rounded-xl border border-slate-200/80 hover:border-[#1886ff] transition-all flex items-center justify-between text-xs font-bold text-slate-800 hover:text-[#1886ff]"
                >
                  <span>TransUnion CIBIL</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white rounded-xl border border-slate-200/80 hover:border-[#1886ff] transition-all flex items-center justify-between text-xs font-bold text-slate-800 hover:text-[#1886ff]"
                >
                  <span>India Code Legislative</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white rounded-xl border border-slate-200/80 hover:border-[#1886ff] transition-all flex items-center justify-between text-xs font-bold text-slate-800 hover:text-[#1886ff]"
                >
                  <span>NALSA Lok Adalat</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white rounded-xl border border-slate-200/80 hover:border-[#1886ff] transition-all flex items-center justify-between text-xs font-bold text-slate-800 hover:text-[#1886ff]"
                >
                  <span>National Cyber Crime</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-2">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Related Debt Resolution Topics:
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/settle-personal-loan"
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] text-xs font-semibold border border-slate-200/80 transition-all"
                  >
                    Personal Loan Settlement
                  </Link>
                  <Link
                    href="/credit-card-settlement-process"
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] text-xs font-semibold border border-slate-200/80 transition-all"
                  >
                    Credit Card Settlement
                  </Link>
                  <Link
                    href="/arbitration-notice-personal-loan-default"
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] text-xs font-semibold border border-slate-200/80 transition-all"
                  >
                    Arbitration Notice Defense
                  </Link>
                  <Link
                    href="/section-138-cheque-bounce-personal-loan"
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] text-xs font-semibold border border-slate-200/80 transition-all"
                  >
                    Section 138 Cheque Bounce
                  </Link>
                  <Link
                    href="/lok-adalat-personal-loan-settlement"
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] text-xs font-semibold border border-slate-200/80 transition-all"
                  >
                    Lok Adalat Loan Settlement
                  </Link>
                  <Link
                    href="/get-noc-after-loan-settlement"
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] text-xs font-semibold border border-slate-200/80 transition-all"
                  >
                    No Dues Certificate Guide
                  </Link>
                  <Link
                    href="/improve-cibil-after-loan-settlement"
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] text-xs font-semibold border border-slate-200/80 transition-all"
                  >
                    CIBIL Score Repair
                  </Link>
                  <Link
                    href="/fake-loan-app-harassment-cyber-crime"
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] text-xs font-semibold border border-slate-200/80 transition-all"
                  >
                    Stop Loan App Harassment
                  </Link>
                  <Link
                    href="/two-wheeler-bike-loan-settlement"
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] text-xs font-semibold border border-slate-200/80 transition-all"
                  >
                    Two-Wheeler Loan Settlement
                  </Link>
                  <Link
                    href="/verify-loan-settlement-letter"
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] text-xs font-semibold border border-slate-200/80 transition-all"
                  >
                    Verify Settlement Letter
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="sticky top-6 space-y-4">
            
            {/* Author Bio Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-sm border-2 border-blue-200">
                  AJ
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Ashish Jhangra</h4>
                  <p className="text-[11px] font-semibold text-slate-500">Legal &amp; Debt Resolution Professional</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialist in Indian banking law, NBFC micro-loan disputes, and RBI digital lending compliance.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>Verified Author</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5" />
                  Reviewed
                </span>
              </div>
            </div>

            {/* Emergency CTA Card (#2452ae) */}
            <div
              className="rounded-2xl text-white p-4 shadow-lg space-y-2.5"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-sky-300 flex-shrink-0" />
                <h4 className="text-sm font-bold tracking-tight">Facing Collection Harassment?</h4>
              </div>
              <p className="text-xs text-blue-100 leading-relaxed font-normal">
                Stop illegal bot calls, contact scraping, and aggressive visits immediately with formal legal representation.
              </p>
              <Link
                href="/contact"
                className="w-full py-2.5 px-4 rounded-xl bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-xs hover:bg-slate-50 transition-all text-center block shadow-xs"
              >
                Request Legal Protection
              </Link>
              <div className="pt-1.5 border-t border-white/15 flex items-center justify-center gap-2 text-xs font-semibold text-white/90">
                <Phone className="w-3.5 h-3.5" />
                <a href="tel:+918800226635" className="hover:underline">
                  +91-8800226635
                </a>
              </div>
            </div>

            {/* CredSettle Trust Badges Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-800 pb-2 border-b border-slate-100">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>CredSettle Assurance</span>
              </div>
              <div className="space-y-1 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Direct NBFC Portal Payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Zero Payment to Agents</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Official Sanction Letters</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Multi-Bureau Sync</span>
                </div>
              </div>
            </div>

            {/* Related Resolution Guides Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 space-y-2">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 pb-2 border-b border-slate-100">
                Related Legal Guides
              </h4>
              <div className="space-y-1 text-xs">
                <Link
                  href="/settle-personal-loan"
                  className="block text-slate-600 hover:text-[#1886ff] font-medium transition-colors"
                >
                  &bull; Personal Loan OTS Guide
                </Link>
                <Link
                  href="/credit-card-settlement-process"
                  className="block text-slate-600 hover:text-[#1886ff] font-medium transition-colors"
                >
                  &bull; Credit Card Settlement SOP
                </Link>
                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="block text-slate-600 hover:text-[#1886ff] font-medium transition-colors"
                >
                  &bull; Replying to Arbitration
                </Link>
                <Link
                  href="/fake-loan-app-harassment-cyber-crime"
                  className="block text-slate-600 hover:text-[#1886ff] font-medium transition-colors"
                >
                  &bull; Loan App Harassment Complaint
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
