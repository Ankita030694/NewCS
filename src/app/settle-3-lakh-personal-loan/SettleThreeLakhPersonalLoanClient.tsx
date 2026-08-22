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
  Calculator,
  Percent,
  ReceiptText
} from 'lucide-react';

export default function SettleThreeLakhPersonalLoanClient() {
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
    { id: 'can-you-settle-3-lakh', label: '1. Can You Settle a ₹3 Lakh Loan?' },
    { id: 'settlement-amount-breakdown', label: '2. Settlement Formula & Numbers' },
    { id: 'status-comparison-table', label: '3. Resolution Option Comparison' },
    { id: 'scoring-math-analytics', label: '4. CIBIL Scoring Math & Penalties' },
    { id: 'infographic-overview', label: 'Visual 6-Step Settlement Blueprint' },
    { id: 'step-by-step-settlement-sop', label: '5. 6-Stage Settlement SOP' },
    { id: 'formal-legal-notice-defense', label: '6. Statutory Notice Defense' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance Matrix' },
    { id: 'chronological-resolution-milestones', label: '8. Timelines & Milestones' },
    { id: 'specialized-loan-scenarios', label: '9. Fintech Apps & Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can I settle a ₹3 lakh personal loan in India?',
      a: 'Yes, you can settle a ₹3 lakh personal loan in India through a formal One-Time Settlement (OTS) with your lending bank or NBFC. When an individual encounters genuine financial distress (such as job loss, unexpected medical hospitalization, business contraction, or family crisis), commercial lenders understand that pursuing formal civil recovery or arbitration for ₹3 lakhs entails disproportionate legal overheads and administrative delays. Under RBI prudential guidelines, banks routinely negotiate compromise settlements, accepting between ₹90,000 to ₹1,35,000 (representing a 55% to 70% overall waiver on the inflated outstanding claim) to permanently extinguish the liability and release balance-sheet provisioning.'
    },
    {
      q: 'What happens if I don\'t pay a ₹3 lakh personal loan?',
      a: 'Defaulting on an unsecured personal loan of ₹3 lakhs is strictly a civil dispute arising from contractual breach under the Indian Contract Act, 1872. Lenders cannot initiate criminal arrest, lodge police FIRs, or seize personal residential property without an explicit court decree. In institutional terms, the account progresses through Special Mention Account stages (SMA-0, SMA-1, SMA-2) during the initial 90 days before being classified as a Non-Performing Asset (NPA). If monthly auto-debit NACH mandates bounce, the lender may issue statutory notices under Section 25 of the Payments and Settlement Systems Act (PSSA), 2007. These civil and quasi-criminal recovery proceedings are systematically withdrawn and closed once an OTS is executed.'
    },
    {
      q: 'How much will a bank accept to settle a ₹3 lakh personal loan?',
      a: 'For a ₹3 lakh unsecured personal loan, commercial banks and NBFCs typically settle at 30% to 45% of the true remaining principal balance, which generally equates to a lump-sum payment between ₹90,000 and ₹1,35,000. Furthermore, all accrued penal interest, monthly late payment surcharges, and electronic mandate return penalties (which frequently escalate the lender\'s gross demand notice to ₹3.9–₹4.4 lakhs) are completely waived in a professionally structured settlement agreement.'
    },
    {
      q: 'Why do banks agree to compromise settlements on ₹3 lakh loans rather than pursuing court litigation?',
      a: 'Initiating a formal summary recovery suit under Order 37 of the Code of Civil Procedure or conducting arbitral proceedings under the Arbitration & Conciliation Act, 1996 for a ₹3 lakh default requires the lender to incur substantial upfront legal expenses. Advocate retainers, court stamp fees, arbitral tribunal fees, and summons execution costs routinely exceed ₹50,000 to ₹75,000, with judicial disposal spanning two to four years. Additionally, RBI prudential provisioning norms mandate that banks lock up 100% capital against unrecovered sub-standard NPAs. Recovering ₹1,00,000 to ₹1,30,000 upfront through an OTS frees regulatory capital and eliminates legal uncertainty.'
    },
    {
      q: 'What is the step-by-step process for settling a ₹3 lakh personal loan?',
      a: 'The settlement process follows six sequential stages: (1) Reconciling the certified Statement of Account (SOA) to isolate true principal from bogus penal levies, (2) Compiling an authentic financial hardship dossier (termination letters, hospital records, bank statements), (3) Submitting a formal Hardship Notice and OTS compromise proposal directly to the bank\'s credit risk committee, (4) Negotiating the settlement bracket down from initial bank demands to 35%–45% of principal, (5) Legally verifying and vetting the written OTS Sanction Letter on official bank letterhead, and (6) Remitting the agreed funds directly into your loan account and securing a formal No Dues Certificate (NDC).'
    },
    {
      q: 'How will settling a ₹3 lakh loan impact my CIBIL score and credit report?',
      a: 'Settling a ₹3 lakh personal loan leads the lending institution to report the account status as "Settled" (or "Post-Write-Off Settled") to TransUnion CIBIL, Experian, Equifax, and CRIF High Mark, which typically reduces your credit score by 75 to 120 points. While this notation remains in credit bureau records for up to 7 years under CICRA 2005 regulations, it brings an immediate halt to compounding "Days Past Due" (DPD) penalties and prevents "Suit Filed" marks. Borrowers can systematically rebuild their CIBIL score back above 750 within 12 to 24 months through disciplined secured credit card usage or by later exercising the legal option to pay the balance waiver to convert the tag to "Closed".'
    },
    {
      q: 'Can recovery agents visit my home or workplace for a ₹3 lakh default?',
      a: 'Under the Reserve Bank of India Master Directions on Fair Practices Code and Guidelines on Recovery Agents, collection personnel are strictly forbidden from visiting a borrower\'s home or office without prior written notice, contacting borrowers before 8:00 AM or after 7:00 PM, using abusive or threatening language, or communicating with colleagues, friends, or family members. Any breach of these statutory standards can be immediately escalated to the bank\'s Principal Nodal Officer and the RBI Integrated Ombudsman on cms.rbi.org.in for disciplinary penalties and compensation.'
    },
    {
      q: 'How should I handle a Section 25 NACH bounce notice for my ₹3 lakh loan?',
      a: 'Receiving a Section 25 notice under the Payments and Settlement Systems Act, 2007 requires a prompt, legally structured written reply within the mandatory 15-day window. The response must clearly demonstrate authentic financial distress, establish the complete absence of fraudulent intention (mens rea), and formally tender a One-Time Settlement compromise. Upon executing the OTS agreement and disbursing the agreed settlement sum, the lending institution is legally required to withdraw all Section 25 proceedings.'
    },
    {
      q: 'Can digital fintech instant loan apps settle a ₹3 lakh personal loan?',
      a: 'Yes, registered fintech NBFC platforms (such as KreditBee, Navi, MoneyTap, PaySense, and CASHe) routinely enter into One-Time Settlements for defaulted loans up to ₹3 lakhs. Due to their rapid capital turnover models and quarterly balance-sheet write-down cycles, fintech credit committees frequently provide substantial settlement discounts (50% to 65% waivers on gross claims), particularly towards the conclusion of financial quarters when represented by seasoned debt resolution professionals.'
    },
    {
      q: 'How do I obtain a genuine No Dues Certificate (NDC) after settling my ₹3 lakh loan?',
      a: 'Once the agreed settlement figure is remitted directly into your loan account via RTGS, NEFT, or net banking as stipulated in your written Settlement Sanction Letter, the lending institution is legally required under RBI directives to issue an official No Dues Certificate (NDC) or No Objection Certificate (NOC) within 21 to 30 days. This certificate provides conclusive statutory evidence that all financial liabilities against the loan account have been permanently extinguished.'
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Settle 3 Lakh Personal Loan
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Unpaid ₹3 Lakh personal loan? Discover how to stop aggressive bank recovery calls, legally protect your assets, and negotiate a formal One-Time Settlement (OTS) with maximum principal waiver.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Legal Help for Your ₹3 Lakh Default</span>
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
                  <span>Mid-Ticket Borrower Rights</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected by RBI Fair Practices Code, PSSA §25 &amp; CICRA Framework.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: SETTLING A ₹3 LAKH PERSONAL LOAN</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-normal">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Settlement Bracket:</strong> ₹3 Lakh loans are actively settled by banks to avoid ₹50,000+ court litigation costs.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Expected Payout:</strong> Settle for 30% to 45% of true principal, closing the debt for ₹90,000 – ₹1,35,000.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">100% Penal Waiver:</strong> All compounded late fees, penal interest, and bounce charges are fully waived.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Civil Dispute Only:</strong> Unsecured loan default is strictly civil with zero risk of police arrest or FIR.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Notice Resolution:</strong> Section 25 PSSA and Section 138 notices are closed upon executing the OTS.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">No Asset Seizure:</strong> Lenders cannot attach property, freeze accounts, or deduct salary without court decree.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">RBI Protection:</strong> Agents cannot call after 7 PM, contact relatives, or visit without written intimation.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">Direct Payment:</strong> Pay directly into your loan account under written bank sanction to secure a No Dues Certificate.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong className="text-slate-900 font-bold">CIBIL Recovery:</strong> Halts ongoing monthly DPD damage, enabling score recovery above 750 in 12–24 months.</span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Can You Settle a ₹3 Lakh Personal Loan? */}
            <section id="can-you-settle-3-lakh" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Mid-Tier Retail Debt Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Can You Settle a ₹3 Lakh Personal Loan? The Mid-Tier Debt Economics
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A widespread misconception among retail borrowers is that compromise debt settlements are reserved solely for high-net-worth commercial entities or multi-crore corporate NPAs. In practice, <strong>a ₹3 Lakh unsecured personal loan occupies a sweet spot in retail banking, where institutional lenders prefer negotiating a swift cash settlement over committing capital to protracted civil recovery</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an individual defaults on an unsecured ₹3 Lakh facility due to unavoidable life disruptions, such as corporate layoffs, severe medical diagnoses, sudden business insolvency, or death of a primary earner, the debt enters a structured regulatory lifecycle governed by the Reserve Bank of India. Because personal loans lack underlying collateral like property, gold, or vehicles, the lender possesses no immediate physical asset to attach or liquidate under the SARFAESI Act.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During the preliminary 90 days following a missed payment, the account is categorized as a Special Mention Account across SMA-0, SMA-1, and SMA-2 stages. At this juncture, internal tele-calling departments apply persistent pressure to collect overdue installments alongside steep penal surcharges. However, on Day 91, the account crosses the mandatory threshold into a Sub-Standard Non-Performing Asset (NPA). Under RBI capital adequacy frameworks, the lender must immediately freeze valuable tier-1 capital in mandatory provisioning, ranging from 15% up to 100% of the loan value.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This regulatory provisioning requirement creates a direct financial incentive for the bank&apos;s credit committee to negotiate. If the institution decides to file a civil recovery suit under Order 37 of the Code of Civil Procedure or initiate arbitration proceedings, it must expend ₹50,000 to ₹75,000 in advocate fees, court stamp duties, and process service costs. With judicial recovery timelines spanning several years, the net present value of any prospective recovery diminishes sharply. Consequently, when presented with a well-documented hardship dossier and an upfront lump-sum offer between ₹90,000 and ₹1,35,000, bank settlement committees routinely accept the compromise to release provisioning reserves and recover immediate liquidity.
              </p>
            </section>

            {/* SECTION 2: The Financial Breakdown: Settlement Formula & Numbers */}
            <section id="settlement-amount-breakdown" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calculator className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis &amp; Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. The Financial Breakdown: How Much to Pay for a ₹3 Lakh Settlement?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Following a default on a ₹3,00,000 loan, lenders rapidly inflate the claimed liability by applying compound penal interest rates (often 24% to 36% per annum), monthly late payment fees, electronic NACH return penalties, and administrative legal notice charges. Within 6 to 12 months, a borrower who originally owed ₹2.5 Lakhs in principal may receive formal demand notices claiming ₹3,80,000 to ₹4,30,000.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Strategic debt settlement requires dissecting this inflated gross demand into its fundamental accounting components: <em>True Principal Balance</em>, <em>Contractual Regular Interest</em>, and <em>Artificial Penal Add-ons</em>. Professional negotiations target 100% eradication of all penal levies and a deep discount on the actual remaining principal:
              </p>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <ReceiptText className="w-4 h-4 text-[#1886ff]" />
                    <span>Anatomy of a Defaulted ₹3 Lakh Personal Loan Claim</span>
                  </h3>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    Representative 180-Day NPA Case
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Original Principal Disbursed:</span>
                    <span className="font-semibold text-slate-900">₹3,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Principal Repaid Prior to Default (e.g. 5 EMIs):</span>
                    <span className="font-semibold text-emerald-600">- ₹54,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600 font-bold">True Outstanding Principal at Default:</span>
                    <span className="font-bold text-slate-900">₹2,46,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Contractual Interest Due (16% p.a.):</span>
                    <span className="font-semibold text-slate-700">₹36,900</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Compounded Penal Surcharges (24% p.a. monthly):</span>
                    <span className="font-semibold text-red-600">+ ₹59,040</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">NACH Bounce Penalties, Legal Charges &amp; Overheads:</span>
                    <span className="font-semibold text-red-600">+ ₹24,800</span>
                  </div>
                  <div className="flex justify-between items-center py-2 bg-slate-50 px-3 rounded-lg font-bold">
                    <span className="text-slate-800">Total Claim Demanded by Bank Recovery Desk:</span>
                    <span className="text-red-700 text-sm sm:text-base">₹3,66,740 – ₹4,20,000</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200">
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-800 block">
                        CredSettle Professional Settlement Target
                      </span>
                      <p className="text-xs text-emerald-900 mt-0.5">
                        Targeting 35% to 50% of the true principal balance with 100% penal fee waiver.
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg sm:text-2xl font-black text-emerald-700">
                        ₹85,000 – ₹1,20,000
                      </span>
                      <span className="block text-[10px] text-emerald-800 font-bold">
                        (65% to 75% Total Claim Discount)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Status Comparison Table */}
            <section id="status-comparison-table" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Resolution Pathways Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparative Resolution Matrix: Settlement vs. Restructuring vs. Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When confronting a defaulted ₹3 Lakh personal loan in India, borrowers have five primary financial and legal pathways available. Each option carries distinct capital requirements, regulatory timelines, and credit score consequences:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Resolution Option</th>
                      <th className="p-3.5 font-bold">Upfront Cash Needed</th>
                      <th className="p-3.5 font-bold">CIBIL Status Impact</th>
                      <th className="p-3.5 font-bold">Legal Harassment Risk</th>
                      <th className="p-3.5 font-bold">Resolution Timeline</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Strategic Verdict</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">₹90,000 – ₹1,35,000 (Lump-sum)</td>
                      <td className="p-3.5">&quot;Settled&quot; (-75 to -120 pts)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Eliminated (NDC Issued)</td>
                      <td className="p-3.5">30 to 60 Days</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Best for immediate financial relief and closing bad debt</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Loan Restructuring / Tenure Extension</td>
                      <td className="p-3.5 text-slate-800 font-medium">₹3,00,000 + Extended Interest</td>
                      <td className="p-3.5">&quot;Restructured&quot; (Mild dip)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Eliminated while EMIs paid</td>
                      <td className="p-3.5">36 to 60 Months</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Suitable only if you have stable, predictable monthly income</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">National Lok Adalat Settlement</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">₹1,00,000 – ₹1,45,000 (On spot)</td>
                      <td className="p-3.5">&quot;Settled via Lok Adalat&quot;</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Legally Closed (Sec 21 LSA)</td>
                      <td className="p-3.5">1 Day (Sitting date)</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Highly effective if your bank issues a Lok Adalat notice</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Prolonged Default / Inaction</td>
                      <td className="p-3.5 text-red-700 font-semibold">₹0 upfront, but claims grow</td>
                      <td className="p-3.5 text-red-700 font-bold">&quot;Written Off / Suit Filed&quot; (-200 pts)</td>
                      <td className="p-3.5 text-red-700 font-bold">Severe (Calls, notices, visits)</td>
                      <td className="p-3.5">Indefinite (Years)</td>
                      <td className="p-3.5 text-red-600 font-semibold">Worst approach; destroys creditworthiness across all lenders</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Sale to Asset Reconstruction Co. (ARC)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">₹75,000 – ₹1,10,000</td>
                      <td className="p-3.5">&quot;Sold to ARC / Settled&quot;</td>
                      <td className="p-3.5 text-amber-700 font-semibold">Moderate (ARC follow-ups)</td>
                      <td className="p-3.5">6 to 12 Months</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">High discount potential as ARCs buy debt at 20-30% face value</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical Scoring Math & CIBIL Analytics Card */}
            <section id="scoring-math-analytics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>CIBIL Algorithm &amp; Scoring Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Technical CIBIL Scoring Math: The Mathematical Impact of ₹3 Lakh Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit rating engines operated by TransUnion CIBIL, Experian, CRIF High Mark, and Equifax compute individual credit scores using structured mathematical weighting across distinct credit parameters. Understanding how an active default versus a completed settlement impacts these mathematical formulas provides clear guidance for your credit rehabilitation strategy:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Percent className="w-4 h-4 text-[#1886ff]" />
                    Credit Bureau Algorithm Factor Weights
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Payment History (DPD Records):</span>
                      <span className="font-bold text-slate-900">35% Weightage</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Credit Utilization Ratio (CUR):</span>
                      <span className="font-bold text-slate-900">30% Weightage</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Credit Age &amp; History Length:</span>
                      <span className="font-bold text-slate-900">15% Weightage</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Credit Mix (Secured vs. Unsecured):</span>
                      <span className="font-bold text-slate-900">10% Weightage</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Hard Inquiries &amp; Recent Applications:</span>
                      <span className="font-bold text-slate-900">10% Weightage</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Default Impact on 35% Factor:</span>
                      <span className="text-red-700">Immediate -80 to -150 Points</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-600" />
                    Settlement vs Default Recovery Timeline
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Ongoing Default (Unsettled):</span>
                      <span className="font-bold text-red-600">DPD accumulates indefinitely (900+ DPD)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Settlement Status Applied:</span>
                      <span className="font-bold text-amber-600">DPD stops immediately; account marked &quot;Settled&quot;</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Score Recovery Stage 1 (Months 1–6):</span>
                      <span className="font-bold text-slate-800">+30 to +45 Points with Secured FD Card</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Score Recovery Stage 2 (Months 7–18):</span>
                      <span className="font-bold text-slate-800">+50 to +85 Points with flawless payment cycles</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Target CIBIL at Month 24:</span>
                      <span className="text-emerald-700">750+ (Prime Borrower Territory)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200/70 p-4 rounded-xl text-xs md:text-sm text-emerald-950 leading-relaxed">
                <p>
                  <strong>The Statutory CIBIL Conversion Remedy:</strong> Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), borrowers who complete a settlement retain the legal entitlement to approach their original lender in future years, pay the remaining waived differential amount, and formally convert the credit bureau remark from <em>&quot;Settled&quot;</em> to <em>&quot;Closed&quot;</em>, permanently removing any adverse settlement history.
                </p>
              </div>
            </section>

            {/* SECTION 5: Embedded 16:9 Infographic Banner */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Resolution Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: ₹3 Lakh Personal Loan Settlement Roadmap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Study this comprehensive 6-stage roadmap detailing the entire trajectory from initial loan default to hardship evaluation, compromise negotiation, formal sanction, direct payment, and credit rehabilitation:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/settle-3-lakh-personal-loan.jpg"
                    alt="3 Lakh Personal Loan Settlement Roadmap and Process Flow Diagram India"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Small-Ticket Loan Settlement Blueprint • RBI Compliant Resolution</span>
                  <a
                    href="/images/infographics/settle-3-lakh-personal-loan.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>View High-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: 6-Stage Standard Operating Procedure (SOP) */}
            <section id="step-by-step-settlement-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Resolution SOP</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Standard Operating Procedure (SOP): 6 Stages to Settle a ₹3 Lakh Personal Loan
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Executing a successful debt settlement requires adherence to a rigorous, sequential standard operating procedure designed to eliminate illegal recovery harassment and secure maximum principal reduction:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 1–15</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Loan Statement Audit &amp; True Principal Reconciliation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The borrower must obtain an official, certified Statement of Account (SOA) directly from the lending institution. Every historical installment paid is carefully audited to separate actual principal amortization from accrued interest. All non-contractual additions, including compounded penal interest, late payment surcharges, and electronic clearing bounce penalties, are flagged and subtracted to establish the true net principal balance. This net principal serves as the benchmark for calculating the target settlement bracket of 35% to 45%.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 16–30</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Financial Hardship Dossier Compilation &amp; Harassment Defense
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    A comprehensive hardship dossier is assembled, containing authentic, verifiable proof of financial inability. Crucial documentation includes employment termination letters, salary reduction slips, medical hospital discharge summaries, GST returns showing business downturn, and recent bank statements demonstrating illiquidity. Concurrently, if recovery agents initiate unauthorized phone calls, visit workplaces unannounced, or contact references, a formal Cease-and-Desist legal notice is dispatched invoking the RBI Fair Practices Code.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 31–45</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Submission of Formal Hardship Letter &amp; OTS Compromise Proposal
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    A structured Hardship Representation and One-Time Settlement (OTS) proposal is submitted directly to the bank&apos;s Branch Manager, Head of Credit Recovery, and Grievance Officer. The proposal establishes that non-payment stems from authentic economic hardship rather than willful default, references relevant RBI prudential guidelines, and formally tenders an initial settlement compromise offer (typically 25% to 30% of principal) to initiate formal institutional negotiations.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 46–60</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Bilateral Counter-Negotiations with Bank Credit Committee
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The bank&apos;s internal Credit Risk and NPA Committee reviews the proposal and invariably issues counter-demands seeking 70% to 80% of the gross outstanding amount. Debt resolution negotiators leverage the borrower&apos;s documented insolvency, calculate the bank&apos;s high provisioning costs, and exploit quarter-end balance sheet reconciliation pressures (March, June, September, December) to negotiate the final compromise down to 35%–45% of principal.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 61–75</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Legal Vetting of Written Settlement Sanction Letter
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Under no circumstances should any funds be transferred based on verbal assurances or WhatsApp messages from recovery agents. A formal Settlement Sanction Letter issued on official bank letterhead and signed by an authorized Assistant General Manager or Chief Manager is rigorously vetted. The letter must unambiguously state the loan account number, the precise agreed settlement amount, the waiver of all remaining claims, the payment deadline, and the lender&apos;s commitment to issue a full No Dues Certificate.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 76–90</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Direct Account Remittance &amp; No Dues Certificate (NDC) Retrieval
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The negotiated settlement sum is remitted directly into the borrower&apos;s loan account through traceable banking channels (RTGS, NEFT, or net banking) prior to the sanction expiration date. Within 21 to 30 days of remittance, the bank issues an official No Dues Certificate (NDC) or No Objection Certificate (NOC). After 45 days, credit bureau records with CIBIL, Experian, and CRIF High Mark are audited to ensure the balance is reported as ₹0 and the status is updated to &quot;Settled&quot;.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Formal Legal Notice Defense & Statutory Framework */}
            <section id="formal-legal-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Notice Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Formal Legal Notice Defense &amp; Statutory Legal Framework
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a ₹3 Lakh personal loan goes into default, lending institutions frequently issue intimidating advocate notices to induce panic. Mastering the exact statutory frameworks governing these notices ensures you respond with strategic precision:
              </p>

              <div className="bg-slate-900 text-slate-100 p-5 md:p-6 rounded-2xl font-mono text-xs space-y-3 overflow-x-auto shadow-md">
                <div className="text-emerald-400 font-bold flex items-center gap-2">
                  <span>[STATUTORY NOTICE CLASSIFICATION &amp; BORROWER LEGAL SAFEGUARDS]</span>
                </div>
                <div className="border-t border-slate-800 pt-2 space-y-2 text-slate-300">
                  <p>
                    <span className="text-yellow-400">1. SECTION 25 PSSA 2007 (NACH / ECS DISHONOUR):</span>
                    <br />
                    Quasi-criminal statutory notice issued when monthly automated electronic clearing bounces due to insufficient funds.
                    <br />
                    <span className="text-emerald-300">Defensive Remedy:</span> Submit a formal legal reply within 15 days demonstrating authentic financial distress, lack of fraudulent intent (absence of mens rea), and a formal offer of compromise OTS. Executing the OTS legally closes the proceeding.
                  </p>
                  <p>
                    <span className="text-yellow-400">2. SECTION 138 NEGOTIABLE INSTRUMENTS ACT (CHEQUE DISHONOUR):</span>
                    <br />
                    Issued only if a physical security cheque provided at loan inception was presented and returned unpaid.
                    <br />
                    <span className="text-emerald-300">Defensive Remedy:</span> Compoundable statutory offense. Upon payment of the agreed OTS amount, Section 138 complaints are automatically quashed under Section 147 of the Negotiable Instruments Act.
                  </p>
                  <p>
                    <span className="text-yellow-400">3. SECTION 21 ARBITRATION &amp; CONCILIATION ACT 1996:</span>
                    <br />
                    Notice invoking the loan agreement&apos;s arbitration clause.
                    <br />
                    <span className="text-emerald-300">Defensive Remedy:</span> Supreme Court binding precedents in <em>Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020)</em> and <em>TRF Ltd. v. Energo Engineering Projects Ltd. (2017)</em> strictly prohibit unilateral appointment of sole arbitrators by banks. Challenge jurisdiction under Section 12(5).
                  </p>
                  <p>
                    <span className="text-yellow-400">4. SECTIONS 73 &amp; 74 INDIAN CONTRACT ACT 1872:</span>
                    <br />
                    Civil demand notice alleging contractual breach and seeking monetary compensation.
                    <br />
                    <span className="text-emerald-300">Defensive Remedy:</span> Strictly a civil financial dispute with zero arrest or police powers; provides prime statutory grounds for direct bilateral settlement negotiations.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                  Statutory Rights under RBI Fair Practices Code
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Under the Reserve Bank of India Master Directions on Fair Practices Code, commercial banks and NBFCs are held strictly liable for the conduct of their recovery agents. Recovery personnel are legally prohibited from:
                </p>
                <ul className="list-disc pl-5 text-xs md:text-sm text-slate-600 space-y-1.5">
                  <li>Initiating contact before 8:00 AM or after 7:00 PM in the evening.</li>
                  <li>Accessing mobile contacts or communicating with employers, family, or references.</li>
                  <li>Using threatening, abusive, or defamatory language over phone calls, SMS, or WhatsApp.</li>
                  <li>Visiting residential premises or workplaces without prior written intimation and valid authorization.</li>
                  <li>Impersonating police officials, judicial magistrates, or government enforcement officers.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. The 3-Tier Escalation Matrix for Unfair Recovery &amp; Dispute Resolution
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the lending bank or its external collection agents ignore your hardship submissions, apply non-contractual penal rates, or engage in coercive recovery tactics for a ₹3 Lakh loan, escalate through this structured 3-tier hierarchy:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Branch Manager &amp; NBFC Grievance Desk
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Response: 7–10 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Formal Written Grievance &amp; Hardship Representation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Submit a formal email and speed post letter directly to the Branch Manager and the internal Grievance Redressal Officer (GRO), detailing your loan account number, documented financial hardship, and formal settlement proposal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: Principal Nodal Officer (PNO) of the Bank
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Response: 14–21 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Escalation for Recovery Harassment &amp; Excessive Penal Charges
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If Level 1 fails to respond within 30 days, rejects reasonable settlement terms, or allows recovery agents to continue coercive tactics, escalate the grievance to the bank&apos;s Principal Nodal Officer (PNO).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: RBI Integrated Ombudsman (CMS Portal)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Response: 30 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Statutory Complaint on cms.rbi.org.in
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If the lender fails to resolve your grievance within 30 days or violates the RBI Fair Practices Code, lodge a statutory regulatory complaint on the <strong>RBI Integrated Ombudsman Portal (cms.rbi.org.in)</strong>. The Ombudsman has statutory authority to award compensation up to ₹20 Lakhs for mental harassment and direct fair compromise terms.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Milestone Resolution Table */}
            <section id="chronological-resolution-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Chronological Timelines &amp; Milestone Resolution Table (Day 0 to Month 6)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the chronological milestones of a ₹3 Lakh loan default allows you to plan your legal defense, protect personal cash flow, and execute negotiations when the bank&apos;s willingness to offer discounts peaks:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Timeline Phase</th>
                      <th className="p-3.5 font-bold">Institutional Status</th>
                      <th className="p-3.5 font-bold">Bank Recovery Action</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Borrower Strategic Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3.5">SMA-0 / Overdue</td>
                      <td className="p-3.5">Automated SMS, emails, tele-calling payment reminders</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Audit loan SOA and assess true financial liquidity</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Day 31 to 90</td>
                      <td className="p-3.5">SMA-1 &amp; SMA-2</td>
                      <td className="p-3.5">Intensified collection calls, field agent visit notices</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Compile hardship dossier; issue anti-harassment notice if needed</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3.5">NPA (Sub-Standard)</td>
                      <td className="p-3.5">Loan recall notice / Section 25 NACH bounce notice</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Submit formal OTS Hardship Proposal for 30%–45% principal</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Months 4 to 5</td>
                      <td className="p-3.5">Compromise OTS Window</td>
                      <td className="p-3.5">Bank Settlement Committee reviews compromise proposal</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Execute bilateral negotiation; secure written OTS Sanction Letter</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Month 6</td>
                      <td className="p-3.5">Account Closed / Settled</td>
                      <td className="p-3.5">Issuance of official No Dues Certificate (NDC)</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Remit agreed OTS sum directly; obtain NDC; initiate CIBIL rebuild</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-loan-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: Digital Fintech Apps, Credit Cards &amp; ARCs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Defaulting on ₹3 Lakh in unsecured credit can arise across various lending structures, each requiring a tailored resolution strategy:
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#1886ff]" />
                    Fintech NBFC Digital Instant Loan Apps (KreditBee, Navi, MoneyTap, PaySense)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Digital lending apps disburse personal credit swiftly but frequently deploy automated collection algorithms, WhatsApp bots, and aggressive Online Dispute Resolution (ODR) notices upon default. Because digital NBFCs operate on high loan velocity and rapid balance-sheet amortization, their credit committees frequently approve substantial 45% to 65% settlement discounts, particularly during quarter-end reporting periods (March and September).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-[#1886ff]" />
                    Multiple Small Micro-Loans Totaling ₹3 Lakh
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Borrowers frequently find themselves managing 4 to 6 smaller loans across multiple fintech apps (e.g. ₹40,000 + ₹60,000 + ₹80,000 + ₹1,20,000). Dispersing limited capital across multiple minimum payments depletes savings without reducing principal. A unified debt settlement strategy consolidates your capital, prioritizes the most aggressive lenders first, and secures sequential compromise settlements across all accounts simultaneously.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Credit Card Jumbo Loans vs. Standalone Personal Loans
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If your ₹3 Lakh debt is an pre-approved &quot;Jumbo Loan&quot; or &quot;Loan on Credit Card&quot;, defaulting on the EMI will automatically cause the bank to freeze the primary credit card, merge the outstanding balances, and demand the entire credit limit. During negotiations, the settlement agreement must explicitly cover both the card and the loan account to ensure total liability discharge and receipt of an all-inclusive No Dues Certificate.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Loans Assigned to Asset Reconstruction Companies (ARCs)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When traditional commercial banks write off ₹3 Lakh personal loans, they bundle them into bad debt portfolios and assign them to Asset Reconstruction Companies (such as CFM ARC, Phoenix ARC, or ARCIL) at 20% to 30% of face value under Section 5 of the SARFAESI Act. Because ARCs acquire these portfolios at deep discounts, they possess substantial margin flexibility, making them highly receptive to 60% to 75% compromise settlements.
                  </p>
                </div>
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
                Frequently Asked Questions on Settling a ₹3 Lakh Personal Loan
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to view detailed legal and financial answers verified by our debt resolution professionals:
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

            {/* SECTION 13: Regulatory Sources & Authorities */}
            <section id="regulatory-sources" className="scroll-target space-y-5 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Official Regulatory Citations &amp; Legal References
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  The statutory frameworks, dispute procedures, and debt relief mechanisms referenced in this guide are directly anchored in official Indian banking enactments and Reserve Bank of India Master Directions:
                </p>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc pl-5">
                <li>
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Reserve Bank of India (RBI):</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>{' '}
                  Master Direction on Fair Practices Code for Lenders (Guidelines on Recovery Agents and Grievance Redressal, Updated 2026).
                </li>
                <li>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Reserve Bank - Integrated Ombudsman Scheme, 2021:</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>{' '}
                  Statutory Grievance Redressal Mechanism for Commercial Banks and NBFCs (
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-mono text-xs"
                  >
                    cms.rbi.org.in
                  </a>
                  ).
                </li>
                <li>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Credit Information Companies (Regulation) Act, 2005 (CICRA):</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>{' '}
                  Section 21 regarding Borrower Rights, Credit Dispute Resolution, and Bureau Reporting.
                </li>
                <li>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Payments and Settlement Systems Act, 2007 (PSSA):</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>{' '}
                  Section 25 regarding Dishonour of Electronic Funds Transfer and NACH Mandates.
                </li>
                <li>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Indian Contract Act, 1872:</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>{' '}
                  Sections 73 and 74 regarding Breach of Contract and Civil Monetary Compensation.
                </li>
                <li>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Negotiable Instruments Act, 1881:</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>{' '}
                  Section 138 &amp; Section 147 regarding Dishonour of Cheques and Compounding of Offenses.
                </li>
              </ul>

              {/* 6 Official Outbound Authority Link Badges */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-800 block mb-3 uppercase tracking-wider">
                  Official Outbound Authority Portals &amp; Statutory Registers:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs hover:shadow-sm transition-all flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#1886ff] group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Landmark className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                      <span className="truncate">RBI Official Portal (rbi.org.in)</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff] flex-shrink-0 ml-1" />
                  </a>

                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs hover:shadow-sm transition-all flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#1886ff] group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="truncate">RBI Integrated Ombudsman (CMS)</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff] flex-shrink-0 ml-1" />
                  </a>

                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs hover:shadow-sm transition-all flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#1886ff] group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <TrendingUp className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                      <span className="truncate">TransUnion CIBIL Official</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff] flex-shrink-0 ml-1" />
                  </a>

                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs hover:shadow-sm transition-all flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#1886ff] group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Scale className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                      <span className="truncate">India Code Statutory Repository</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff] flex-shrink-0 ml-1" />
                  </a>

                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs hover:shadow-sm transition-all flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#1886ff] group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Gavel className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                      <span className="truncate">NALSA National Lok Adalat</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff] flex-shrink-0 ml-1" />
                  </a>

                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs hover:shadow-sm transition-all flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#1886ff] group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span className="truncate">National Cyber Crime Portal</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1886ff] flex-shrink-0 ml-1" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Debt Resolution &amp; Legal Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/settle-1-lakh-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Settle ₹1 Lakh Loan
                  </Link>
                  <Link href="/settle-2-lakh-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Settle ₹2 Lakh Loan
                  </Link>
                  <Link href="/mental-harassment-by-recovery-agents-legal-action" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    NACH Section 25 Defense
                  </Link>
                  <Link href="/section-138-cheque-bounce-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 138 Cheque Defense
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get No Dues Certificate (NOC)
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
                  </Link>
                  <Link href="/lok-adalat-personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Lok Adalat Settlement
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
                Specialized in banking compliance, small-ticket loan dispute resolution, and NPA settlement negotiations with deep expertise resolving personal loan and fintech debts across Indian banking forums.
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

            {/* Card 2: Emergency CTA Card */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL DEBT RELIEF
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Defaulting on a ₹3 Lakh Personal Loan?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution experts negotiate directly with banks to stop recovery harassment, secure a 55% to 70% loan waiver, and protect your legal rights.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Legal Help for Your ₹3 Lakh Default
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
                  <span>Direct Bank Settlement • RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked settlement fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> Zero middleman fund holding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> 100% lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated debt resolution specialists.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Debt Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/services/personal-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Personal Loan Settlement Services
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full compromise settlement blueprint &rarr;</span>
                </Link>

                <Link
                  href="/ecs-nach-bounce-legal-notice-section-25"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    NACH Bounce Section 25 Notice Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal reply and dispute guide &rarr;</span>
                </Link>

                <Link
                  href="/improve-cibil-after-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Rebuild CIBIL Score After Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Step-by-step credit repair strategy &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
