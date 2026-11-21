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
  Coins,
  Percent
} from 'lucide-react';

export default function CreditLineNscKvpSgbDefaultClient() {
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
    { id: 'statutory-framework', label: '1. Contract Act & Post Office Rules' },
    { id: 'nsc-kvp-pledge-rules', label: '2. NSC & KVP Form-7 Lien Rules' },
    { id: 'sgb-pledge-invocation', label: '3. SGB Invocation & RBI Guidelines' },
    { id: 'liquidation-mechanics', label: '4. Surrender Value vs Exchange Sale' },
    { id: 'surplus-refund-rule', label: '5. Section 176 Surplus Protections' },
    { id: 'collateral-deficit-rules', label: '6. Collateral Deficit & Balance Dues' },
    { id: 'visual-blueprint', label: '7. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '8. SOP: Responding to Default Notice' },
    { id: 'cibil-compensation', label: '9. CIBIL Bureau & Rs 100/Day Relief' },
    { id: 'escalation-matrix', label: '10. 3-Tier Redressal Escalation' },
    { id: 'common-bank-violations', label: '11. Bank Violations & Forfeitures' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank immediately seize and liquidate my NSC or KVP upon default?',
      a: 'No. Under Section 176 of the Indian Contract Act, 1872 and the RBI Fair Practices Code, a lender cannot immediately liquidate your pledged securities without serving a clear, reasonable demand and cure notice (typically 15 to 30 days). This gives the borrower the statutory right under Section 177 to redeem the pledge by paying the overdue arrears before any actual encashment occurs.'
    },
    {
      q: 'What happens if the encashment of NSC or KVP exceeds my loan dues?',
      a: 'Under Section 176 of the Indian Contract Act, the lender is legally required to pay over any surplus proceeds to the borrower immediately. If your outstanding debt is Rs 3,00,000 and the Post Office pays Rs 4,50,000 on certificate maturity or surrender, the bank must credit the remaining Rs 1,50,000 back to your bank account.'
    },
    {
      q: 'How does a bank invoke a pledge on Sovereign Gold Bonds (SGBs)?',
      a: 'For dematerialized SGBs, the bank invokes the pledge through its Depository Participant (DP) under SEBI and depository regulations, transferring units to its recovery account to sell on the stock exchange (NSE/BSE). For Certificate of Holding (BLA) bonds, the lender applies to the RBI Public Debt Office (PDO) under Regulation 21 of the Government Securities Regulations, 2007.'
    },
    {
      q: 'What happens to the price appreciation of my Sovereign Gold Bonds if I default?',
      a: 'The price appreciation remains the legal equity of the borrower. Because gold prices often rise significantly during the 8-year SGB tenure, liquidation proceeds frequently exceed the outstanding loan balance. The bank can only recover its sanctioned principal, agreed contractual interest, and reasonable legal expenses; all excess capital gains must be refunded to you.'
    },
    {
      q: 'Can the bank take my other personal assets if the pledged collateral falls short?',
      a: 'If the sale or encashment of NSC, KVP, or SGB proceeds is insufficient to cover the total debt, the bank cannot automatically seize other bank accounts, vehicles, or property without a court decree or DRT recovery certificate. The remaining deficit becomes an ordinary unsecured debt for which the bank must pursue civil recovery or debt settlement.'
    },
    {
      q: 'Is a loan against NSC, KVP, or SGB classified as an NPA after 90 days?',
      a: 'Under the RBI Master Circular on Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRAC), advances fully secured by government securities, term deposits, and surrender-eligible small savings certificates enjoy specific exemptions from standard NPA provisioning, provided the realizable collateral value covers the outstanding balance.'
    },
    {
      q: 'Can a bank charge compounding penal interest on a defaulted credit line against securities?',
      a: 'No. Under the RBI Fair Lending Practices circular on Penal Charges in Loan Accounts (effective April 1, 2024), banks and NBFCs cannot levy penal interest or compound punitive charges. Any penalty for late payment must be charged solely as reasonable, non-capitalized penal charges.'
    },
    {
      q: 'How is a defaulted loan against securities reported on my CIBIL report?',
      a: 'Once the bank encashes the collateral and recovers all dues in full, it must mark the loan facility as Closed in credit bureau records. Under the RBI circular dated September 20, 2023, banks must update credit bureau records within 30 days; failure to do so entitles the borrower to statutory compensation of Rs 100 per day.'
    },
    {
      q: 'Can I dispute the sale of my SGBs if the bank sold them below market value?',
      a: 'Yes. Lenders have a fiduciary duty under the law of pledge to act in good faith and obtain fair market value when liquidating listed securities like SGBs on public exchanges. If a bank sells units at an unreasonable discount without proper notice, you can challenge the action before the Banking Ombudsman or Consumer Commission.'
    },
    {
      q: 'How does CredSettle assist borrowers facing loan default against NSC, KVP, or SGBs?',
      a: 'CredSettle provides specialized banking and debt resolution representation. We audit bank loan statements to eliminate illegal penal charges, defend against aggressive forfeiture notices under Section 176 of the Contract Act, enforce surplus refund claims, negotiate one-time settlements on deficit balances, and ensure clean CIBIL bureau updates.'
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
            <span>Pledge Law, Government Securities &amp; Borrower Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            What Happens on Default of NSC, KVP or SGB Credit Lines?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Pledged small savings certificates or Sovereign Gold Bonds for an overdraft or term loan? Learn your rights against premature liquidation, mandatory 15-day cure notices, and Section 176 surplus refunds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Pledged Collateral</span>
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
                  <span>Statutory Pledge Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Indian Contract Act 1872, GS Promotion Rules 2018, and RBI Fair Lending Directives.
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
                <span>EXECUTIVE BRIEF: DEFAULT RULES FOR NSC, KVP &amp; SGB LOANS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Cure Notice Period:</strong> Under Section 176 of the Indian Contract Act, lenders cannot liquidate pledged NSC, KVP, or SGBs without serving a formal 15 to 30-day demand notice.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Absolute Right to Redeem (Section 177):</strong> Borrowers retain the legal right to pay outstanding arrears and redeem their pledged certificates or gold bonds at any point before the actual sale occurs.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict Surplus Return Mandate:</strong> Banks are prohibited from keeping windfall gains. If encashment or secondary market sale proceeds exceed the loan balance, the excess money must be immediately returned to the borrower.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Deficit Recourse Limitations:</strong> If collateral liquidation fails to satisfy the entire debt, the remaining unpaid balance becomes an ordinary unsecured claim. The bank cannot freeze other assets without civil court or DRT orders.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Credit Bureau Rectification:</strong> Following full recovery via collateral encashment, lenders must update credit bureau records to Closed status within 30 days or face Rs 100/day RBI delay penalties.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Framework: Indian Contract Act & Post Office Rules */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Judicial Doctrine</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Framework: Indian Contract Act &amp; Post Office Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Pledging government-backed instruments such as National Savings Certificates (NSC), Kisan Vikas Patra (KVP), and Sovereign Gold Bonds (SGB) provides borrowers with rapid liquidity. Scheduled commercial banks, cooperative institutions, and non-banking financial companies (NBFCs) readily sanction overdraft credit lines and term loans against these sovereign securities due to their negligible default risk.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, when commercial adversity, business revenue disruption, or personal emergencies cause a default on EMI repayments or credit line interest servicing, lenders often threaten immediate forfeiture. It is crucial to understand that under Indian jurisprudence, taking a loan against securities is governed strictly by the law of bailment and pledge under Chapter IX of the Indian Contract Act, 1872.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 172 of the Indian Contract Act, the borrower acts as the pawnor and the lending bank functions as the pawnee. The bank acquires a special property interest in the collateral solely as security for debt repayment. The bank does not obtain absolute ownership of the underlying certificates or gold bonds.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Furthermore, the issuance, pledge registration, and redemption of small savings certificates are regulated by the Government Savings Promotion Act, 1873, and the Government Savings Promotion General Rules, 2018. Lenders cannot invent unilateral forfeiture procedures that contravene these statutory mandates.
              </p>
            </section>

            {/* SECTION 2: How NSC & KVP Pledges Work: Post Office Form-7 Lien Rules */}
            <section id="nsc-kvp-pledge-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Small Savings Pledges &amp; Lien Registration</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. How NSC &amp; KVP Pledges Work: Post Office Form-7 Lien Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To create a valid pledge on NSC (VIII Issue) or KVP certificates, the borrower and the lender must complete a statutory pledge process with the Department of Posts (India Post) or an authorized public sector bank. Under Rule 14 and Rule 15 of the Government Savings Promotion General Rules, 2018, this requires submitting Form-7 (Application for Transfer of Certificate as Pledge).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Postmaster reviews the application, registers the lien in the official post office ledger, and stamps a formal pledge endorsement across the physical certificate or e-certificate. This endorsement legally restricts the borrower from encashing, transferring, or duplicating the security until the bank formally releases the pledge.
              </p>

              {/* Technical Comparison Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Coins className="w-4 h-4" />
                    <span>National Savings Certificates (NSC VIII Issue)</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• <strong>Tenure:</strong> Fixed 5-year lock-in period.</li>
                    <li>• <strong>Typical Loan Margin:</strong> Banks advance 70% to 85% of face value plus accrued compound interest.</li>
                    <li>• <strong>Premature Liquidation:</strong> Post Office rules allow premature encashment upon default only when the pledgee bank submits an official forfeiture claim under Form-7.</li>
                    <li>• <strong>Interest Calculation:</strong> Accrued interest is governed by the original issue rate and credited up to the encashment date.</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>Kisan Vikas Patra (KVP)</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• <strong>Tenure:</strong> Matures upon doubling the principal amount (approx. 115 to 123 months based on issue date).</li>
                    <li>• <strong>Surrender Table:</strong> Encashable after a mandatory 2.5-year lock-in period at predefined tabular surrender values.</li>
                    <li>• <strong>LTV Baseline:</strong> Sanctioned against the current surrender value certified by the Post Office.</li>
                    <li>• <strong>Forfeiture Procedure:</strong> Lender presents the lien-marked certificate with a demand notice to the Postmaster for realization.</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed pt-2">
                When a borrower defaults on an NSC or KVP loan, the lender does not instantly pocket the money. The bank must physically deliver the original certificates and discharge declarations to the Postmaster. The Post Office audits the claim, computes the applicable surrender or maturity proceeds, and disburses the funds directly into the bank recovery account.
              </p>
            </section>

            {/* SECTION 3: Sovereign Gold Bond (SGB) Pledge Invocation & RBI Guidelines */}
            <section id="sgb-pledge-invocation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Coins className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Guidelines &amp; Sovereign Securities</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Sovereign Gold Bond (SGB) Pledge Invocation &amp; RBI Guidelines
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Sovereign Gold Bonds represent government debt denominated in grams of gold, issued by the Reserve Bank of India under the Government Securities Act, 2006. Because SGBs carry sovereign backing and pay a semi-annual interest coupon of 2.50% per annum alongside gold market appreciation, they are widely utilized as prime collateral for personal credit lines and business working capital.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Pledging and invoking SGB collateral depends entirely upon the format in which the bonds are held:
              </p>

              <div className="space-y-3 pt-1">
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <span>A. Dematerialized SGBs (NSDL / CDSL Depository Accounts)</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When SGBs are held in demat format, the borrower creates a pledge via the depository system using standard pledge request forms (PRF). In the event of default, the lender instructs its Depository Participant (DP) to invoke the pledge. The invoked units are transferred into the bank recovery demat account and liquidated through secondary market trading on the National Stock Exchange (NSE) or Bombay Stock Exchange (BSE).
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    <span>B. Certificate of Holding / Bond Ledger Account (RBI E-Kuber)</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the investor holds physical Certificates of Holding registered in the RBI Bond Ledger Account (BLA), lien marking is recorded in the RBI E-Kuber system. In case of default, the bank invokes the pledge pursuant to Chapter VII, Regulation 21 of the Government Securities Regulations, 2007. The bank submits an application along with default proof to the Public Debt Office (PDO), RBI Mumbai, to transfer the security or collect redemption proceeds.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200/80 p-4 rounded-xl text-xs text-amber-900 space-y-1 mt-2">
                <p className="font-bold flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>Important RBI Regulatory Clarifications for SGB Pledges:</span>
                </p>
                <p className="leading-relaxed">
                  1. Under RBI directives, lenders acquiring SGBs through pledge invocation on loan default are <strong>specifically exempted from the annual individual holding limit</strong> (normally 4 kg per fiscal year).
                </p>
                <p className="leading-relaxed">
                  2. Commercial banks that acquire SGBs through default invocation can count those specific government securities toward fulfilling their statutory <strong>Statutory Liquidity Ratio (SLR)</strong> requirements.
                </p>
              </div>
            </section>

            {/* SECTION 4: Liquidation Mechanics: Surrender Value vs Secondary Sale */}
            <section id="liquidation-mechanics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Valuation Realization &amp; Execution Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Liquidation Mechanics: Surrender Value vs Secondary Sale
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a lender decides to enforce its security interest following an unresolved default, the execution mechanism differs dramatically based on whether the underlying asset is a fixed small savings certificate or a market-traded bond.
              </p>

              {/* Comparison Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3">Collateral Type</th>
                      <th className="p-3">Liquidation Channel</th>
                      <th className="p-3">Valuation Benchmark</th>
                      <th className="p-3">Execution Timeframe</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900">National Savings Certificate (NSC)</td>
                      <td className="p-3">India Post Issuing Branch</td>
                      <td className="p-3">Face Value + Accrued Compound Interest</td>
                      <td className="p-3">7 to 15 working days</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900">Kisan Vikas Patra (KVP)</td>
                      <td className="p-3">India Post Issuing Branch</td>
                      <td className="p-3">Post Office Table of Surrender Values</td>
                      <td className="p-3">7 to 15 working days</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900">Demat Sovereign Gold Bonds (SGB)</td>
                      <td className="p-3">NSE / BSE Secondary Market</td>
                      <td className="p-3">Real-time Spot Exchange Price per Gram</td>
                      <td className="p-3">T+1 settlement post-invocation</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900">BLA Sovereign Gold Bonds (E-Kuber)</td>
                      <td className="p-3">RBI Public Debt Office (PDO)</td>
                      <td className="p-3">IBJA Gold Average Closing Price</td>
                      <td className="p-3">15 to 30 working days</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed pt-1">
                For demat SGBs, lenders are legally bound by fiduciary obligations to sell at prevailing fair market rates. They cannot dump securities in artificial off-market block sales at distress discounts. Doing so gives the borrower actionable grounds to sue for breach of trust under the Indian Contract Act and Consumer Protection Act, 2019.
              </p>
            </section>

            {/* SECTION 5: The Surplus Refund Rule: Section 176 Contract Act Protections */}
            <section id="surplus-refund-rule" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Percent className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Accounting &amp; Excess Fund Recovery</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. The Surplus Refund Rule: Section 176 Contract Act Protections
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The most critical borrower protection in secured collateral defaults is the statutory Surplus Refund Rule codified under Section 176 of the Indian Contract Act, 1872. Section 176 explicitly commands:
              </p>

              <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs sm:text-sm text-slate-800 italic leading-relaxed">
                &ldquo;If the proceeds of such sale are greater than the amount so due, the pawnee shall pay over the surplus to the pawnor.&rdquo;
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers mistakenly believe that once they default on an overdraft against gold bonds or small savings, the bank keeps the entire collateral. This is completely false. The bank is strictly a secured creditor, not an equity partner. It is entitled only to recover:
              </p>

              <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-5">
                <li>Sanctioned principal amount actually disbursed and drawn down.</li>
                <li>Legitimate contractual interest accrued up to the date of collateral liquidation.</li>
                <li>Reasonable, actual, and verifiable administrative or legal expenses incurred in executing the sale.</li>
              </ul>

              {/* Realistic Math Box */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                  Practical Financial Example: SGB Collateral Appreciation Surplus
                </span>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Overdraft Limit Sanctioned (against 100 grams SGB in 2020):</span>
                    <strong className="text-slate-900">₹3,50,000</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Principal Drawn &amp; Accrued Contractual Interest at Default (2026):</span>
                    <strong className="text-slate-900">₹4,20,000</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Collateral Liquidation Realization (100 grams SGB @ ₹7,500/g in 2026):</span>
                    <strong className="text-emerald-700">₹7,50,000</strong>
                  </div>
                  <div className="flex justify-between py-1.5 bg-emerald-50 px-2 rounded-lg text-emerald-900 font-bold">
                    <span>Mandatory Surplus Bank MUST Refund to Borrower (Sec 176):</span>
                    <span className="text-sm">₹3,30,000</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  If the bank delays transferring this ₹3,30,000 surplus or attempts to swallow it as arbitrary penalties, the borrower can file an immediate complaint with the RBI Banking Ombudsman and claim 18% compensatory interest.
                </p>
              </div>
            </section>

            {/* SECTION 6: What Happens if Collateral Value Falls Short of Total Debt? */}
            <section id="collateral-deficit-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Shortfall Liability &amp; Unsecured Recovery Limits</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. What Happens if Collateral Value Falls Short of Total Debt?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                What occurs when the encashed value of the collateral is insufficient to clear the accumulated loan dues? This scenario rarely happens with NSC or KVP due to safe LTV margins, but it can arise with SGB credit lines if gold prices experience sharp corrections while interest compounds over extended non-payment periods.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the second limb of Section 176 of the Indian Contract Act:
              </p>

              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-800 italic leading-relaxed">
                &ldquo;If the proceeds of the sale are less than the amount due, the pawnor is still liable to pay the balance.&rdquo;
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Crucially, the legal status of the remaining debt undergoes an immediate transformation:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Residual Debt Becomes Unsecured</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Once the pledged certificates or gold bonds are sold, the security is extinguished. The remaining deficit becomes an ordinary unsecured personal loan. The bank no longer holds special collateral rights.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Gavel className="w-4 h-4 text-[#1886ff]" />
                    <span>No Automatic Asset Seizure</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank cannot attach your salary, freeze your house, or seize other family assets without first filing an ordinary civil recovery suit or initiating DRT proceedings (if debt exceeds ₹20 Lakhs) and obtaining a judicial decree.
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed pt-1">
                This deficit balance provides prime opportunity for a negotiated One-Time Settlement (OTS). CredSettle regularly represents borrowers to negotiate waivers of 40% to 70% on residual deficit balances, eliminating all compounded penalties.
              </p>
            </section>

            {/* SECTION 7: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Process Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Visual Blueprint: Collateral Default &amp; Lien Resolution
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The operational flow diagram below outlines the 6 critical stages of collateral default handling in India, from initial pledge auditing and mandatory Section 176 cure notices to pledge invocation, fair market liquidation, and statutory surplus refund execution.
              </p>

              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-md bg-white">
                <Image
                  src="/images/infographics/credit-line-against-nsc-kvp-sovereign-gold-bond-default.jpg"
                  alt="6-Stage Framework for Credit Line Against NSC, KVP and SGB Default Rules and Pledge Invocation in India"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover"
                  priority={false}
                />
                <div className="p-3 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500">
                  Figure 1: Statutory stages of loan against securities default, pledge invocation, and Section 176 surplus recovery.
                </div>
              </div>
            </section>

            {/* SECTION 8: Step-by-Step SOP: Responding to a Bank Lien Default Notice */}
            <section id="step-by-step-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure (SOP)</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Step-by-Step SOP: Responding to a Bank Lien Default Notice
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank or NBFC has issued a recall notice or threatened to liquidate your pledged NSC, KVP, or Sovereign Gold Bonds, following this battle-tested protocol protects your financial assets:
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Demand Full Loan Statement of Account</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Write to the branch manager demanding an itemized loan ledger. Cross-check that the lender has not applied compounding penal interest, which violates the RBI Fair Lending Directives effective April 2024.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Invoke Section 177 Right of Redemption</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      If you have interim liquidity, issue a formal legal notice exercising your statutory right to redeem under Section 177 of the Indian Contract Act. You are entitled to pay off the overdue balance and demand immediate cancellation of the Form-7 lien.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Notify the Post Office or Depository Participant</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Send a copy of your dispute letter to the issuing Postmaster or Depository Participant (DP). Put them on notice that the exact loan balance is in active dispute and that any premature liquidation must strictly comply with Section 176 notice rules.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Demand Written Sale Accounting &amp; Surplus Remittance</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      If the securities are encashed, mandate that the bank furnish certified documentary proof of the sale price, date of sale, and fee deductions. Submit your bank account details for immediate credit of the surplus funds.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9: CIBIL Bureau Reporting & RBI Delay Compensation Guidelines */}
            <section id="cibil-compensation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Integrity &amp; RBI Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. CIBIL Bureau Reporting &amp; RBI Delay Compensation Guidelines
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A common injustice faced by borrowers is that even after the bank fully recovers its loan dues by encashing pledged NSC, KVP, or SGB collateral, the loan account continues to appear as &ldquo;Overdue&rdquo;, &ldquo;Written Off&rdquo;, or &ldquo;Default&rdquo; on their CIBIL and Experian reports.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the Credit Information Companies (Regulation) Act, 2005 (CICRA) and the Reserve Bank of India Master Direction on Credit Information Reporting:
              </p>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Mandatory Credit Information Company (CIC) Update Rules
                </h3>
                <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Accurate Account Status:</strong> Once collateral encashment satisfies the principal and contractual interest in full, the bank must report the facility as <strong>&ldquo;Closed&rdquo;</strong>, not &ldquo;Settled&rdquo; or &ldquo;Post-Write-Off Settled&rdquo;.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>30-Day Bureau Reporting Mandate:</strong> Lenders must update all 4 credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) within 30 days of debt resolution.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>₹100 Per Day Delay Compensation:</strong> Under RBI Circular RBI/2023-24/72 (dated September 20, 2023), if a bank fails to rectify wrongful bureau reporting within 30 days of a formal dispute, it must pay the borrower <strong>₹100 per calendar day</strong> of continuing delay.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* SECTION 10: 3-Tier Escalation Matrix: Bank, Post Office & RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Dispute Escalation Process</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. 3-Tier Escalation Matrix: Bank, Post Office &amp; RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a financial institution refuses to honor Section 176 surplus refunds, withholds remaining unencumbered certificates, or levies punitive compounding interest, you can initiate a formal 3-tier escalation:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="text-xs font-black uppercase tracking-wider text-[#1886ff]">
                    Tier 1: Internal Bank GRO
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Principal Nodal Officer</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a formal written complaint to the bank Principal Nodal Officer (PNO) demanding immediate cessation of liquidation or remittance of surplus under Section 176 Contract Act.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="text-xs font-black uppercase tracking-wider text-emerald-600">
                    Tier 2: RBI Ombudsman
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">RB-IOS 2021 Portal</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If unresolved within 30 days, lodge a complaint on the RBI CMS portal (cms.rbi.org.in). The Banking Ombudsman can direct full refund of surplus and award up to ₹20 Lakhs compensation.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="text-xs font-black uppercase tracking-wider text-amber-600">
                    Tier 3: Judicial Relief
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Consumer Commission / Civil Court</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a petition before District Consumer Disputes Redressal Commission for deficiency of service under Section 2(11) of Consumer Protection Act, 2019, claiming mental agony damages.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Common Bank Violations & Illegal Collateral Forfeitures */}
            <section id="common-bank-violations" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Infractions &amp; Consumer Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                11. Common Bank Violations &amp; Illegal Collateral Forfeitures
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During our legal audits at CredSettle, we uncover frequent statutory infractions committed by lending institutions handling secured securities defaults:
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Liquidation Without Prior Demand Notice:</strong> Enchasing NSC or KVP certificates without serving the mandatory Section 176 demand notice violates the law of pledge and constitutes actionable conversion of property.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Unlawful Retention of Surplus Proceeds:</strong> Swallowing excess funds derived from gold price appreciation or matured NSC interest into internal bank profit accounts.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Withholding Unpledged or Excess Certificates:</strong> If a borrower pledged five separate ₹1 Lakh NSC certificates and liquidating three clears the entire debt, the bank must immediately release the lien on the remaining two certificates.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Levying Capitalized Penal Interest:</strong> Charging compound interest upon penal fees, explicitly barred by the Reserve Bank of India since April 1, 2024.
                  </div>
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
                <span>Clear Consumer Legal Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: NSC, KVP &amp; SGB Loan Defaults
              </h2>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/90 bg-white shadow-xs overflow-hidden transition-all duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                      >
                        <span className="font-bold text-xs sm:text-sm md:text-base text-slate-900 leading-snug">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 14: Statutory Citations & Authorities */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Authority Citations</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Statutory Citations, Regulatory Circulars &amp; Legal Authorities
              </h2>
              <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Sections 172 to 177 (Bailment of Pledges, Rights of Pawnee upon Default, Surplus Refund, and Right of Redemption).
                </li>
                <li>
                  <strong>Government Savings Promotion General Rules, 2018:</strong> Rules 14 and 15 (Pledging of Small Savings Accounts and Certificates via Form-7).
                </li>
                <li>
                  <strong>Government Securities Act, 2006:</strong> Section 28 (Lien, Hypothecation and Pledge of Government Securities).
                </li>
                <li>
                  <strong>Government Securities Regulations, 2007:</strong> Chapter VII, Regulation 21 (Invocation of Pledge in RBI E-Kuber / Bond Ledger Account).
                </li>
                <li>
                  <strong>RBI Master Direction on Prudential Norms on IRAC:</strong> Exemption of loans against government securities and term deposits from standard NPA provisioning.
                </li>
                <li>
                  <strong>RBI Circular on Fair Lending Practices (2023-24):</strong> Penal Charges in Loan Accounts (Compounding ban effective April 1, 2024).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Section 21 &amp; RBI Circular of Sept 20, 2023 (₹100/day compensation for delay in credit bureau updates).
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) (Deficiency of Service) and Section 39 (Civil Compensation for Unfair Trade Practices).
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
                  <a href="https://www.indiapost.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Department of Posts (India Post)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Dispute Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/fd-backed-secured-credit-card-default-liquidation-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    FD Credit Card Liquidation Rules
                  </Link>
                  <Link href="/can-bank-seize-demat-account-shares-mutual-funds-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can Bank Seize Demat Shares
                  </Link>
                  <Link href="/can-bank-withhold-pledged-gold-after-loan-repayment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Withheld Pledged Gold Legal Defense
                  </Link>
                  <Link href="/surplus-sale-proceeds-after-bank-auction-section-13-7-sarfaesi-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Surplus Sale Proceeds SARFAESI
                  </Link>
                  <Link href="/can-bank-seize-ppf-sukanya-samriddhi-accounts-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    PPF &amp; Small Savings Protection
                  </Link>
                  <Link href="/bankers-right-of-set-off-savings-account-section-171-contract-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Right of Set-Off Defense
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹100/Day CIBIL Compensation
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Debt Settlement
                  </Link>
                  <Link href="/services/credit-score-builder" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Score Builder &amp; Repair
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
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
                Specialist in banking compliance, pledge invocation defense under Section 176 Contract Act, collateral surplus recovery, and CIBIL error rectification with extensive experience protecting borrowers against illegal bank forfeitures.
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
                  COLLATERAL DEFENSE &amp; SURPLUS RECOVERY
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Facing Loan Default on NSC, KVP or SGB?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking advocates audit loan ledgers to remove illegal penal interest, protect pledged certificates from distress liquidation, and enforce mandatory Section 176 surplus refunds.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Claim Surplus &amp; Settle Debt
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
                  <span><strong>Section 176 Surplus Recovery:</strong> Full refund of excess collateral sale proceeds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Penal Interest Waiver:</strong> 100% removal of illegal compounded penal charges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Deficit OTS Negotiations:</strong> 40% to 70% waivers on residual unsecured balances.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Bureau Rectification:</strong> Enforce clean Closed account status and Rs 100/day delay claims.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/fd-backed-secured-credit-card-default-liquidation-rules"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    FD Credit Card Liquidation Law
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Deposit liquidation rules &rarr;</span>
                </Link>

                <Link
                  href="/surplus-sale-proceeds-after-bank-auction-section-13-7-sarfaesi-act"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Surplus Sale Proceeds SARFAESI
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Section 13(7) refund rights &rarr;</span>
                </Link>

                <Link
                  href="/can-bank-withhold-pledged-gold-after-loan-repayment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Withheld Pledged Gold Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">General lien limits &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
