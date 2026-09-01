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
  Terminal,
  ShieldAlert
} from 'lucide-react';

export default function CanIGoToJailForCreditCardDebtClient() {
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
    { id: 'quick-crux', label: 'Executive Summary & Crux' },
    { id: 'debt-economics-npa-dynamics', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'financial-breakdown-settlement-math', label: '2. Financial Breakdown & Math' },
    { id: 'legal-forum-comparison-matrix', label: '3. Legal Forum Comparison Matrix' },
    { id: 'technical-cibil-scoring-algorithm', label: '4. CIBIL Algorithm & Scoring Math' },
    { id: 'visual-infographic-asset', label: '5. Visual Infographic Blueprint' },
    { id: 'step-by-step-sop-stages', label: '6. 6-Stage Defense SOP' },
    { id: 'statutory-notice-defense-rights', label: '7. Statutory Notice Defense & Rights' },
    { id: 'three-tier-grievance-matrix', label: '8. 3-Tier Grievance Matrix' },
    { id: 'chronological-timeline-table', label: '9. Chronological Timeline Table' },
    { id: 'specialized-real-world-scenarios', label: '10. Specialized Real Scenarios' },
    { id: 'company-profile', label: '11. About CredSettle' },
    { id: 'frequently-asked-questions', label: '12. Frequently Asked Questions' },
    { id: 'regulatory-sources', label: '13. Statutory Citations & Grid' }
  ];

  const faqs = [
    {
      q: 'Can I go to jail for credit card debt in India?',
      a: 'No. Credit card default is strictly a civil breach of contract under the Indian Contract Act, 1872. Banks, NBFCs, and collection agents have zero legal power to arrest or jail borrowers for unpaid balances.'
    },
    {
      q: 'Can police arrest me or file an FIR for credit card default?',
      a: 'No. Local police cannot arrest you for debt default. Criminal action applies only if intentional fraud at card issuance, such as forged KYC or stolen identity, is proven under Section 420.'
    },
    {
      q: 'What should I do if a recovery agent sends a fake police notice?',
      a: 'Do not pay under threat. Preserve evidence. File a formal complaint with the bank\'s Nodal Officer, report extortion to cybercrime.gov.in, and file an RBI Ombudsman grievance under Section 383 IPC.'
    },
    {
      q: 'What legal action can a bank actually take for credit card default?',
      a: 'Banks can classify accounts as NPA after 90 days, report defaults to CIBIL, issue statutory legal demand notices, initiate arbitration, or file an Order 37 CPC summary suit for civil decree recovery.'
    },
    {
      q: 'What is an Order 37 CPC Summary Suit for credit card dues?',
      a: 'Order 37 CPC is an expedited civil court process for recovering liquidated debts. Borrowers receive court summons and can file Leave to Defend within 10 days contesting inflated 42%+ compound interest.'
    },
    {
      q: 'Can credit card default be treated as criminal cheating under Section 420 IPC?',
      a: 'No. Section 420 IPC requires fraudulent intention at card inception. Inability to pay arising after genuine usage due to job loss or medical crises is purely a civil contractual debt.'
    },
    {
      q: 'Can I go to jail if my credit card NACH auto-debit or cheque bounces?',
      a: 'Bounced NACH (Section 25 PSSA) or cheques (Section 138 NI Act) are bailable quasi-criminal offenses. You receive court summons and can obtain bail and settle dues without facing imprisonment.'
    },
    {
      q: 'What are the Supreme Court guidelines on credit card debt recovery harassment?',
      a: 'In ICICI Bank v. Shanti Devi Sharma, the Supreme Court barred recovery agent intimidation. RBI rules restrict calling hours to 8:00 AM to 7:00 PM and prohibit contacting employers or relatives.'
    },
    {
      q: 'How does a credit card One-Time Settlement (OTS) work in India?',
      a: 'An OTS is a formal compromise where the bank waives compound interest (42%+ APR) and penalties, allowing the borrower to settle principal at a 40% to 60% discount with an NDC.'
    },
    {
      q: 'Can credit card debt disputes be settled at a National Lok Adalat?',
      a: 'Yes. National Lok Adalats organized by NALSA provide pre-litigation conciliation where cardholders negotiate substantial waivers. Lok Adalat awards carry civil court decree status, require zero fees, and cannot be appealed.'
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
            <span>Statutory Borrower Protection &amp; Indian Banking Law</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can I Go to Jail for Credit Card Debt in India? Legal Rights &amp; Protection
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Unsecured credit card default in India is purely a civil contractual dispute. Lenders and recovery agents cannot arrest you, summon police, or order imprisonment. Learn your Supreme Court protections, refute fake arrest threats, and resolve outstanding dues through legal debt settlement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Facing Threats or Arrest Notices? Get Legal Defense &amp; Settle</span>
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
                  <span>Statutory Legal Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by Indian Contract Act 1872, CPC 1908, and Supreme Court Debt Guidelines.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE with 5px #1886ff left border) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: CREDIT CARD DEBT LEGAL PROTECTION IN INDIA</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Under the Indian legal framework, credit card non-payment is strictly classified as a civil contractual breach governed by the Indian Contract Act, 1872. Commercial banks, financial institutions, and third-party recovery agencies possess zero legal authority to issue arrest warrants, summon police officers, or seek criminal imprisonment for bona fide financial defaults. When recovery agents fabricate fake police summons or send intimidatory arrest notices over WhatsApp, they commit punishable criminal extortion under Section 383 of the Indian Penal Code (Section 308 BNS).
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Institutional lenders seeking monetary recovery must adhere strictly to civil judicial remedies, such as filing summary recovery suits under Order 37 of the Code of Civil Procedure (CPC) or pursuing arbitration. Criminal provisions under Section 420 IPC apply exclusively when intentional fraud existed at the time of card issuance, rather than inability to pay caused by subsequent job loss or medical crises. Consequently, cardholders facing aggressive collection tactics are protected by binding Supreme Court precedents that mandate zero harassment and enable formal resolution through structured One-Time Settlements (OTS) with substantial interest waivers.
              </p>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="debt-economics-npa-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Credit Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Credit Card Debt Economics &amp; 90-Day NPA Dynamics in India
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In India, credit card debt represents high-exposure unsecured revolving credit carrying annualized percentage rates (APR) scaling between 42% and 52%. When financial hardship, job loss, or medical crises trigger missed minimum monthly payments, delinquency progresses through strict Reserve Bank of India (RBI) Special Mention Account stages: SMA-0 (1 to 30 days past due), SMA-1 (31 to 60 days past due), and SMA-2 (61 to 90 days past due). Upon crossing the 90-day threshold, the bank classifies the credit card account as a Non-Performing Asset (NPA) under RBI Master Circulars on Prudential Norms.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Crucially, unsecured credit card accounts carry zero tangible collateral or hypothecated security. Consequently, lenders cannot enforce summary physical asset seizure under the SARFAESI Act, 2002, which strictly excludes unsecured debt under Section 31(b). Furthermore, RBI capital adequacy guidelines mandate that banks allocate Tier-1 capital provisioning of 15% to 100% against non-performing unsecured assets. To release tied-up provisioning capital and eliminate ongoing recovery overheads, institutional credit committees prioritize commercial One-Time Settlements (OTS) over expensive, multi-year civil court litigation across Indian jurisdictions.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analytics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Principal vs. Inflated Penal Charges Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the mathematical distinction between genuine principal exposure and inflated penal interest is vital when challenging credit card debt claims. Credit card issuers apply monthly finance charges ranging from 3.5% to 4.2%, compounded monthly, alongside late payment penalties, over-limit charges, and 18% Goods and Services Tax (GST) on all fees. Within 180 days of default, accumulated penalties frequently surpass the initial borrowed principal balance.
              </p>

              {/* Representative 180-Day NPA Settlement Math Card */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#1886ff]" />
                  <span>Representative 180-Day NPA Delinquency Math (₹3.00 Lakh Principal)</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
                    <span className="text-slate-500 text-[11px] block">Original Card Principal Balance</span>
                    <span className="font-extrabold text-slate-900 text-base">₹3,00,000</span>
                    <span className="text-slate-400 text-[10px] block">Actual core card expenditure</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-red-50/60 border border-red-100 space-y-1">
                    <span className="text-red-700 text-[11px] block">Compounded Finance Charges (42% APR)</span>
                    <span className="font-extrabold text-red-700 text-base">₹98,000</span>
                    <span className="text-red-500 text-[10px] block">Capitalized revolving interest</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-red-50/60 border border-red-100 space-y-1">
                    <span className="text-red-700 text-[11px] block">Late Fees, Over-Limit &amp; Penal GST</span>
                    <span className="font-extrabold text-red-700 text-base">₹70,740</span>
                    <span className="text-red-500 text-[10px] block">Predatory collection surcharges</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-100 space-y-1">
                    <span className="text-amber-800 text-[11px] block">Total Inflated Bank Claim at NPA</span>
                    <span className="font-extrabold text-amber-900 text-base">₹4,68,740</span>
                    <span className="text-amber-700 text-[10px] block">156.2% of original principal</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-emerald-900 block">CredSettle Negotiated Compromise Target (45% of Principal):</span>
                    <span className="text-xs text-emerald-700">100% penal waiver + 55% principal relief with official No Dues Certificate.</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg sm:text-xl font-extrabold text-emerald-800">₹1,35,000</span>
                    <span className="text-[10px] text-emerald-600 block font-semibold">Net Savings: ₹3,33,740 (71.2% Total Waiver)</span>
                  </div>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Lenders routinely waive 100% of compounded interest and penal charges, agreeing to compromise on 40% to 55% of the core principal to secure immediate liquid cash recovery across commercial debt settlements.
              </p>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="legal-forum-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Legal Forum Comparison: Resolution Routes vs. Inaction
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Compare statutory debt resolution options, judicial litigation procedures, conciliation forums, and the hazards of passive default:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Strategy / Legal Forum</th>
                      <th className="p-3.5 font-bold">Governing Law</th>
                      <th className="p-3.5 font-bold">Risk of Arrest / Jail</th>
                      <th className="p-3.5 font-bold">Financial &amp; Credit Impact</th>
                      <th className="p-3.5 font-bold">Typical Timeframe</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Strategic Defense</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="p-3.5">Indian Contract Act 1872</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Zero Risk (No arrest)</td>
                      <td className="p-3.5">40% to 60% principal waiver</td>
                      <td className="p-3.5">30 to 60 Days</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Recommended: Structured compromise with complete legal immunity</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Loan Restructuring</td>
                      <td className="p-3.5">RBI Framework</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Zero Risk (Civil relief)</td>
                      <td className="p-3.5">Converts dues to term loan, higher interest</td>
                      <td className="p-3.5">15 to 30 Days</td>
                      <td className="p-3.5 text-slate-700 font-medium">Viable only if steady monthly income resumes</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Order 37 CPC Summary Suit</td>
                      <td className="p-3.5">Code of Civil Procedure 1908</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Zero Risk (Civil decree)</td>
                      <td className="p-3.5">Civil money judgment, decree execution</td>
                      <td className="p-3.5">18 to 36 Months</td>
                      <td className="p-3.5 text-slate-700 font-medium">File Leave to Defend on disputed compound interest</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">National Lok Adalat</td>
                      <td className="p-3.5">Legal Services Authorities Act 1987</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Zero Risk (Pure conciliation)</td>
                      <td className="p-3.5">Final binding consent decree</td>
                      <td className="p-3.5">1 Day</td>
                      <td className="p-3.5 text-slate-700 font-medium">Formalize negotiated compromise without court fees</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Passive Default (Inaction)</td>
                      <td className="p-3.5">Unregulated Collection Exposure</td>
                      <td className="p-3.5 text-amber-700 font-semibold">Zero Jail (Vulnerable to threats)</td>
                      <td className="p-3.5">Ex-parte decrees, credit destruction</td>
                      <td className="p-3.5">Indefinite</td>
                      <td className="p-3.5 text-red-600 font-semibold">Never leave defaults unrepresented; assert statutory rights</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="technical-cibil-scoring-algorithm" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Scoring Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Technical CIBIL Scoring Algorithm &amp; Post-Settlement Rebuilding
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The TransUnion CIBIL credit scoring algorithm computes scores between 300 and 900 based on five weighted parameters: Payment History (35%), Credit Utilization Ratio (30%), Credit Mix (15%), Credit History Length (10%), and New Credit Inquiries (10%). Defaulting on revolving credit cards inflicts immediate dual-impact damage, exhausting 100%+ credit utilization while logging 90+ Days Past Due (DPD) payment defaults.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Upon NPA classification, a credit score of 780 can plummet by 140 to 220 points within three billing cycles, dropping into the sub-580 high-risk credit band. Following a negotiated One-Time Settlement, the card issuer reports the account status as &quot;Settled&quot; or &quot;Post-Write-Off Settled&quot; to all four Credit Information Companies (CIBIL, Experian, CRIF High Mark, Equifax). Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), borrowers retain the statutory right to dispute incorrect arrears or initiate post-settlement balance adjustments to transition records from &quot;Settled&quot; to &quot;Closed&quot;. By maintaining timely payments on small secured credit builder products, borrowers reliably rebuild credit scores back above 750 within 12 to 24 months.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="visual-infographic-asset" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Legal Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Credit Card Debt Legal Rights &amp; Protection
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual infographic synthesizes the complete statutory framework governing credit card defaults in India, illustrating the civil versus criminal legal boundary, Supreme Court guidelines prohibiting police arrest, Order 37 CPC summary suit timelines, and the 6-stage CredSettle debt resolution standard operating procedure.
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/can-i-go-to-jail-for-credit-card-debt.jpg"
                    alt="Can I Go to Jail for Credit Card Debt in India Legal Framework & Borrower Protection"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Blueprint • Indian Contract Act 1872 &amp; CPC 1908</span>
                  <a
                    href="/images/infographics/can-i-go-to-jail-for-credit-card-debt.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>View High-Resolution Infographic</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages - Detailed Narrative Paragraphs) */}
            <section id="step-by-step-sop-stages" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Defense Workflow</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Standard Operating Procedure (SOP): 6 Stages of Credit Card Debt Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Navigating credit card delinquency requires a methodical, statutory sequence designed to halt recovery agent harassment, dispute unconscionable compound finance charges, and secure an official compromise agreement:
              </p>

              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  <strong>Stage 1: Forensic Card Statement &amp; Penalty Audit (Days 1–7):</strong> The initial phase involves obtaining and examining complete historical billing ledgers across the default period. Legal specialists isolate core principal expenditures from usurious monthly finance charges, late payment fines, over-limit penalties, and cascading GST surcharges. Establishing this audited baseline prevents card issuers from demanding inflated claims.
                </p>
                <p>
                  <strong>Stage 2: Comprehensive Hardship Dossier Preparation (Days 8–15):</strong> To refute any potential claims of intentional default, borrowers compile an evidentiary hardship dossier containing objective proof of financial distress, including job termination letters, salary reduction notices, business balance sheets, or hospitalization records. This documentation substantiates bona fide inability to pay under RBI guidelines.
                </p>
                <p>
                  <strong>Stage 3: Credit Committee Representation &amp; Notice Reply (Days 16–30):</strong> A formal legal representation is dispatched to the bank&apos;s recovery division and Grievance Redressal Officer. This communication establishes civil statutory protections under the Indian Contract Act, places recovery agencies on notice against unlawful harassment, and formally petitions the credit committee for compromise resolution.
                </p>
                <p>
                  <strong>Stage 4: Strategic Bilateral Settlement Negotiation (Days 31–45):</strong> Direct negotiations are initiated with the bank&apos;s central legal recovery desk and Principal Nodal Officer. By highlighting the lender&apos;s Tier-1 capital provisioning liabilities and litigation overheads, negotiators structure a compromise targeting a 40% to 60% waiver on core principal and complete cancellation of accrued penal interest.
                </p>
                <p>
                  <strong>Stage 5: Settlement Letter Forensic Vetting &amp; Validation (Days 46–52):</strong> Before any funds are transferred, the formal settlement offer letter undergoes stringent legal scrutiny. The verification confirms that the document originates from authorized corporate domain servers, bears official bank seals, carries a unique settlement ID, grants full release of liability, and details credit bureau update terms.
                </p>
                <p>
                  <strong>Stage 6: Direct Bank Remittance &amp; NDC Procurement (Days 53–65):</strong> Settlement payments are remitted exclusively into the card issuer&apos;s direct corporate account via traceable RTGS or NEFT channels, strictly avoiding third-party collection intermediaries. Upon clearance, the borrower secures an unconditional No Dues Certificate (NDC) and confirms that credit reporting reflects full account closure.
                </p>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Borrower Rights */}
            <section id="statutory-notice-defense-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Defenses</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Notice Defense Architecture &amp; Borrower Legal Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When card issuers initiate formal legal proceedings or recovery agencies issue intimidatory communications, borrowers are protected by comprehensive statutory safeguards across civil and criminal codes:
              </p>

              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  <strong>Electronic Mandate and Cheque Bounce Defenses:</strong> Proceedings initiated under Section 25 of the Payments and Settlement Systems Act, 2007 for bounced NACH auto-debits, or Section 138 of the Negotiable Instruments Act, 1881 for dishonored cheques, represent quasi-criminal statutory mechanisms. While these sections carry potential penalties, they are strictly bailable and compoundable offenses. A formal legal reply issued within the mandatory 15-day notice window allows borrowers to contest incorrect claims, obtain immediate bail through counsel, and compound the matter through mutual settlement without incarceration.
                </p>
                <p>
                  <strong>Order 37 CPC Summary Suit Protections:</strong> When banks file summary civil suits under Order 37 of the Code of Civil Procedure, 1908 for expedited monetary recovery, borrowers receive a formal court summons. Within 10 days of entering appearance, the borrower can file an Application for Leave to Defend. By demonstrating triable issues such as unconscionable 42%+ compound interest rates, unauthorized penalties, or disputed transaction entries, courts routinely grant unconditional leave to defend, bringing lenders to the settlement table.
                </p>
                <p>
                  <strong>Supreme Court Precedents &amp; Fair Practices Enforcement:</strong> In landmark rulings including <em>ICICI Bank v. Shanti Devi Sharma (2008)</em> and <em>Anita Suresh v. Union of India</em>, the Supreme Court of India firmly held that banks cannot employ musclemen or coercive collection tactics to recover debts. Furthermore, RBI Master Directions strictly confine recovery calls to the 8:00 AM to 7:00 PM window and prohibit contacting employers, family members, or third parties, establishing civil damages liability against non-compliant lenders.
                </p>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Grievance Escalation Matrix */}
            <section id="three-tier-grievance-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Redressal Mechanism</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. The 3-Tier Grievance Escalation Matrix &amp; Ombudsman Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When recovery agents deploy abusive tactics, issue fake police notices, or refuse reasonable settlement proposals, borrowers can systematically escalate grievances through a structured 3-tier regulatory framework:
              </p>

              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  <strong>Level 1: Bank Grievance Redressal Officer (GRO) (7–10 Days):</strong> The initial escalation requires submitting a detailed written complaint to the bank&apos;s internal Grievance Redressal Officer, specifying dates, call recordings, agent phone numbers, and copies of fraudulent notices. Under internal banking compliance guidelines, the GRO is mandated to investigate agency misconduct and provide a formal written resolution within 10 business days.
                </p>
                <p>
                  <strong>Level 2: Bank Principal Nodal Officer (PNO) (14–21 Days):</strong> If the GRO fails to resolve the harassment or rectify arbitrary penal charges within the designated timeframe, the dispute is escalated to the bank&apos;s Principal Nodal Officer. As the senior-most appellate authority within the bank, the PNO has the institutional power to recall aggressive collection agencies and refer stressed accounts to the compromise settlement committee.
                </p>
                <p>
                  <strong>Level 3: RBI Integrated Ombudsman Portal (30 Days):</strong> If thirty days elapse without satisfactory resolution, borrowers can file a statutory grievance on the RBI Centralized Management System portal (cms.rbi.org.in) under the Reserve Bank - Integrated Ombudsman Scheme, 2021. The Ombudsman holds statutory authority to penalize the bank and award compensation up to ₹20 Lakhs for mental anguish, harassment, and privacy violations.
                </p>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-timeline-table" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Resolution Timeline</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Timeline Table: Delinquency to Settlement (Day 1 to Month 6)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Review institutional stages, recovery actions, and strategic borrower maneuvers across the 6-month resolution cycle:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Timeline / Phase</th>
                      <th className="p-3.5 font-bold">Account Classification</th>
                      <th className="p-3.5 font-bold">Lender Recovery Action</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Borrower Strategic Defense</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 1–30</td>
                      <td className="p-3.5">SMA-0 (Standard)</td>
                      <td className="p-3.5">Automated reminders, late fees applied</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Audit statement, dispute hidden charges, assess liquidity</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 31–60</td>
                      <td className="p-3.5">SMA-1 (Early Default)</td>
                      <td className="p-3.5">Internal calling, formal payment demand letters</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Establish documented hardship, request interest freeze</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 61–90</td>
                      <td className="p-3.5">SMA-2 (Pre-NPA Alert)</td>
                      <td className="p-3.5">Agency assignment, aggressive call volume</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Issue legal warnings against third-party harassment</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 91–120</td>
                      <td className="p-3.5">NPA Classification</td>
                      <td className="p-3.5">100% interest freeze, legal notices</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Engage legal defense, refute fake notices, invoke civil rights</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 121–180</td>
                      <td className="p-3.5">Strategic OTS Window</td>
                      <td className="p-3.5">Provisioning write-off pressure</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Submit formal OTS proposal for 40% to 55% lump-sum closure</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Month 6+</td>
                      <td className="p-3.5">Full Closure</td>
                      <td className="p-3.5">Direct bank remittance</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Obtain official NDC, update credit bureaus, rebuild score</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios (Rich Paragraphs) */}
            <section id="specialized-real-world-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Practical Case Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Credit Card Debt Default Scenarios
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit card defaults emerge under varied financial and commercial realities, each demanding specialized legal resolution strategies:
              </p>

              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  <strong>Multi-Lender Card Exposure:</strong> Cardholders managing overdue balances across three or more banking institutions simultaneously often face uncoordinated collection pressures. A centralized legal strategy consolidates creditor negotiations, establishing uniform financial insolvency evidence across all lenders to prevent piecemeal litigation while securing synchronized 50%+ compromise waivers.
                </p>
                <p>
                  <strong>Corporate Layoffs &amp; Salaried Income Cessation:</strong> Salaried professionals experiencing involuntary redundancy or corporate restructuring can present termination documentation and bank statements reflecting zero monthly inflows. Institutional credit committees readily accept documented income cessation as justifiable hardship, approving single-bullet settlements with full penal waivers.
                </p>
                <p>
                  <strong>Proprietorship Capital Deficits:</strong> Business owners who utilize personal credit cards to sustain commercial operating expenditures during economic downturns can demonstrate cash flow distress through GST return filings and audited profit-and-loss statements, paving the way for commercial debt compromise settlements.
                </p>
                <p>
                  <strong>Debt Portfolios Assigned to ARCs:</strong> When commercial banks write off non-performing card portfolios and assign underlying debts to Asset Reconstruction Companies (ARCs) like Phoenix ARC or ARCIL at deep portfolio discounts (typically 15% to 30% of book value), borrowers gain substantial leverage to negotiate rapid settlements at up to 60% waivers.
                </p>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: Frequently Asked Questions Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions on Credit Card Debt &amp; Legal Arrest Realities
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to view detailed legal answers verified by our debt resolution professionals:
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#1886ff] transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
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
                Official Regulatory Citations &amp; Judicial References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 73 (Civil Breach Remedies), Ministry of Law and Justice, Government of India.
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Order 37 (Summary Suits on Contracts).
                </li>
                <li>
                  <strong>Supreme Court of India:</strong> <em>ICICI Bank v. Shanti Devi Sharma (2008)</em> (Harassment Prohibition).
                </li>
                <li>
                  <strong>Reserve Bank of India Master Directions:</strong> Credit Card Conduct Directions (Updated 2026).
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Grievance Redressal.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Official Government &amp; Regulatory Portals:</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200 flex items-center justify-between text-xs font-semibold"
                  >
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200 flex items-center justify-between text-xs font-semibold"
                  >
                    <span>RBI CMS Portal</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200 flex items-center justify-between text-xs font-semibold"
                  >
                    <span>TransUnion CIBIL</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200 flex items-center justify-between text-xs font-semibold"
                  >
                    <span>India Code Portal</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200 flex items-center justify-between text-xs font-semibold"
                  >
                    <span>NALSA Legal Services</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200 flex items-center justify-between text-xs font-semibold"
                  >
                    <span>Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
                  </Link>
                  <Link href="/bank-recovery-case-in-court" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Court Recovery Cases
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
                  </Link>
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Settlement Letter
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-5 sticky top-6">
            
            {/* Card 1: Author Bio Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-12 h-12 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-base flex items-center justify-center flex-shrink-0 hover:bg-blue-200 transition-colors shadow-2xs"
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
              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                Specialist in civil debt dispute resolution, credit card defense, and RBI regulatory compliance with over a decade of experience safeguarding Indian borrowers.
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
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>CredSettle Panel</span>
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card (Matching Image 2 exactly) */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white p-5 shadow-md space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white">
                <Lock className="w-3 h-3" />
                <span>100% CONFIDENTIAL</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-extrabold tracking-tight leading-snug">
                  Facing Recovery Harassment?
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Stop illegal agent abuse, protect your dignity, and resolve your debt through structured legal settlement. Get expert representation today.
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <Link
                  href="/contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-xs sm:text-sm text-center block transition-all shadow-sm hover:bg-slate-50"
                >
                  Facing Threats or Arrest Notices? Get Legal Defense &amp; Settle
                </Link>
                
                <a
                  href="tel:+918800226635"
                  className="w-full py-2 px-3 rounded-xl bg-blue-700/60 hover:bg-blue-700 text-white font-bold text-xs text-center flex items-center justify-center gap-2 transition-all border border-blue-500/30"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: +91-8800226635</span>
                </a>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Commitments Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>CredSettle Trust Commitments</span>
              </h4>

              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Performance &amp; success-fee aligned engagement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> 100% of settlement funds paid directly to bank.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> Strict adherence to statutory fair recovery rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Protecting clients across all 28 states &amp; UTs.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Legal Guides */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice for Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full step-by-step reply blueprint &rarr;</span>
                </Link>

                <Link
                  href="/bank-recovery-case-in-court"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Filed Recovery Case in Civil Court
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Civil suit defense &amp; summons guide &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Loan to Closed Status
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Clean credit report blueprint &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
