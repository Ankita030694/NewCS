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
  FileCheck2,
  ShieldAlert
} from 'lucide-react';

export default function CgtmseLoanDefaultClient() {
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
    { id: 'cgtmse-scheme', label: '1. CGTMSE Scheme & Coverage Boundaries' },
    { id: 'borrower-liability', label: '2. Borrower Liability: Bank Claim vs Defaulter' },
    { id: 'recovery-channels', label: '3. Bank Recovery Channels: DRT & SARFAESI' },
    { id: 'section-60-cpc', label: '4. Section 60 CPC: Exempt Assets Defense' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Stage CGTMSE OTS Protocol' },
    { id: 'personal-guarantee', label: '7. Personal Guarantee & Harassment Defense' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance & Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Procedural Delinquency Milestones' },
    { id: 'specialized-scenarios', label: '10. Specialized MSME Real-World Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Does CGTMSE guarantee mean the borrower is free from loan liability after default?',
      a: 'No. The CGTMSE guarantee is an indemnity for the lending bank, not insurance for the borrower. When an MSME defaults, the bank can claim 75% to 85% of the defaulted sum from the CGTMSE Trust. However, the borrower remains 100% legally liable for the entire debt. The bank is legally mandated by CGTMSE rules to pursue recovery against the borrower.'
    },
    {
      q: 'Can a bank initiate SARFAESI action against personal property for a CGTMSE loan?',
      a: 'No, unless that property was lawfully charged. CGTMSE scheme rules explicitly prohibit lenders from accepting third-party guarantees or collateral security on covered credit facilities up to ₹2 Crore or ₹5 Crore. Because no mortgage is created over personal residential property, the bank cannot invoke SARFAESI Section 13(4) against your home. They can only repossess hypothecated business assets such as stock and machinery.'
    },
    {
      q: 'Can a CGTMSE loan account be settled through a One-Time Settlement (OTS)?',
      a: 'Yes. CGTMSE operational guidelines explicitly permit Member Lending Institutions (MLIs) to enter into compromise settlements and OTS under their internal board-approved policies. The bank can grant substantial waivers on penal charges, compound interest, and even principal haircuts, subsequently sharing the net recovered amount with CGTMSE.'
    },
    {
      q: 'What happens if the bank has already received a claim payout from CGTMSE?',
      a: 'Even if the bank has received its first or second tranche claim payout from CGTMSE, the bank retains full legal authority to settle the account via OTS. The bank is required to report the settlement to CGTMSE and remit the trust\'s proportionate share of the recovered funds. Upon paying the agreed OTS sum, you receive a full No Dues Certificate and legal case closure.'
    },
    {
      q: 'Can a bank attach personal assets exempt under Section 60 of the CPC for a CGTMSE loan default?',
      a: 'No. If a bank files a recovery suit in a civil court or Debt Recovery Tribunal (DRT) to execute a decree against personal property, Section 60(1) of the Code of Civil Procedure (CPC) strictly protects exempt assets. Your personal residential house (if an agriculturist), necessary clothing, cooking utensils, tools of trade, EPF balance, gratuity, and salary limits cannot be attached.'
    },
    {
      q: 'Is the promoter\'s personal guarantee enforceable in a CGTMSE loan default?',
      a: 'Yes. While CGTMSE prohibits third-party collateral and external guarantors, lending institutions routinely secure personal guarantees from promoters, proprietors, and primary directors. If the borrower entity defaults, the bank can proceed against the personal guarantor through civil suits, DRT recovery proceedings, or personal insolvency under the Insolvency and Bankruptcy Code (IBC).'
    },
    {
      q: 'Can recovery agents visit an MSME borrower\'s residence or threaten police action?',
      a: 'No. The RBI Master Circular on Fair Practices Code strictly prohibits recovery agents from visiting borrowers outside permissible hours (8:00 AM to 7:00 PM), intimidating family members, or threatening false criminal action. Defaulting on a business loan due to commercial distress is a civil dispute, not a criminal offence, unless fraud or diversion of funds is proven.'
    },
    {
      q: 'What documents are required to apply for an OTS settlement on a defaulted CGTMSE loan?',
      a: 'To propose an OTS, submit a formal commercial hardship letter, audited financial statements proving business closure or severe turnover contraction, bank account statements across all active accounts, an asset-liability affidavit, GST cancellation or surrender receipts (if applicable), and a realistic lump-sum settlement offer backed by third-party family assistance.'
    },
    {
      q: 'How does a CGTMSE loan default affect the promoter\'s CIBIL score and commercial CMR rank?',
      a: 'Upon 90 days of non-payment, the loan is reported as a Non-Performing Asset (NPA) to credit bureaus, significantly impairing both the entity\'s CIBIL MSME Rank (CMR) and the promoters\' personal credit scores. However, negotiating an OTS and securing a formal No Dues Certificate stops further legal reporting and allows you to initiate credit score rehabilitation.'
    },
    {
      q: 'How does CredSettle help MSME borrowers resolve defaulted CGTMSE loans?',
      a: 'CredSettle provides comprehensive legal and financial defense. Our senior advocates stop unlawful recovery harassment, challenge inflated penal ledgers, enforce statutory asset immunities under Section 60 CPC and MSMED Act, and negotiate directly with bank zonal credit committees to achieve deep debt waivers and official No Dues Certificates.'
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
            <span>MSME Borrower Rights &amp; Banking Legal Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            CGTMSE Loan Default: Borrower Liability &amp; OTS Settlement
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A clear guide for small business owners facing loan default. Learn your rights, Section 60 CPC asset shields, and bank OTS settlement rules.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Resolve CGTMSE Loan Dues</span>
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
                  <span>Statutory MSME Protection Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed under CGTMSE Operational Framework and RBI Compromise Settlement Directives.
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
                <span>EXECUTIVE BRIEF: CGTMSE DEFAULT LIABILITY &amp; OTS RESOLUTION CRUX</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Bank Protection, Not Borrower Relief:</strong> CGTMSE protects the lending bank from loss. It does not cancel your duty to pay back the loan if your business closes.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Subrogation and Legal Recovery:</strong> When the bank collects 75% to 85% from the Trust, CGTMSE gains legal rights over the debt. By law, the bank must still take legal steps to recover money from you.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Mortgage on Personal Homes:</strong> CGTMSE loans do not allow collateral security. Lenders cannot take your family home under Section 13(4) of the SARFAESI Act.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Exempt Assets Under Section 60 CPC:</strong> If the bank files a court suit, Section 60 of the CPC protects essential personal assets. Your tools of trade, essential clothes, utensils, and PF savings cannot be seized.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Settle Dues Through Bank OTS:</strong> Banks have approved OTS rules under RBI norms. You can settle the defaulted loan for a lower lump sum and get a full No Dues Certificate.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: CGTMSE Guarantee Scheme */}
            <section id="cgtmse-scheme" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Scheme Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. CGTMSE Guarantee Scheme: What It Covers and What It Does Not
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you run a small business in India, taking a bank loan is common. The Credit Guarantee Fund Trust for Micro and Small Enterprises, or CGTMSE, helps small businesses get bank credit without giving property as security. The scheme supports loans up to ₹5 Crore.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many business owners believe a big myth. They think that if their business fails, the government pays the bank and they do not have to pay anything back. This belief is mistaken and can cause serious legal trouble.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In simple terms, CGTMSE gives a guarantee to the bank, not to you. If your business defaults, the bank can claim 75% to 85% of the loss from the Trust. But you still owe the full loan amount. The bank must by law try to recover the money from you.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an account turns into a Non-Performing Asset, or NPA, the Trust disburses funds to the lender. However, the borrower and personal guarantors remain fully liable for the entire debt under Indian banking rules.
              </p>
            </section>

            {/* SECTION 2: Borrower Liability & Representative Math */}
            <section id="borrower-liability" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Subrogation Rights &amp; Recovery Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Borrower Liability: Does Bank Claim Exonerate Defaulter?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a business defaults, the bank invokes the guarantee and files a claim with the Trust. The Trust then pays the bank an initial claim payout, usually 75% of the covered principal.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 140 and Section 141 of the Indian Contract Act, 1872, this payout triggers subrogation. This means the Trust steps into the shoes of the bank. The bank must keep taking legal recovery steps against the borrower.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The bank must act with the same care as it would for an unsecured loan. Any money recovered from the borrower is shared with CGTMSE in the same ratio after deducting legal costs.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative CGTMSE Default &amp; OTS Recovery Ledger Math</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹50 Lakh Collateral-Free Term Loan</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Financial Ledger Component</th>
                        <th className="p-3">Statutory Amount</th>
                        <th className="p-3">Legal Regulatory Classification</th>
                        <th className="p-3 text-right">Settlement Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Original Sanctioned Facility</td>
                        <td className="p-3">₹50,00,000</td>
                        <td className="p-3 text-slate-700">CGTMSE Covered Collateral-Free Credit</td>
                        <td className="p-3 text-right font-medium text-slate-900">100% Primary Borrower Liability</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">CGTMSE First Tranche Claim (75%)</td>
                        <td className="p-3 text-emerald-600 font-semibold">₹37,50,000</td>
                        <td className="p-3 text-emerald-700">Disbursed to Bank upon NPA &amp; Legal Filing</td>
                        <td className="p-3 text-right font-medium text-emerald-700">Eases Bank Capital Provisioning</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Accrued Penalties &amp; Unapplied Dues</td>
                        <td className="p-3 text-rose-600">₹9,80,000</td>
                        <td className="p-3 text-rose-700">Compounded Dues &amp; Recovery Expenses</td>
                        <td className="p-3 text-right font-bold text-rose-600">100% Waived under RBI OTS</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Negotiated Compromise OTS Sum</td>
                        <td className="p-3 font-bold text-blue-700">₹16,50,000</td>
                        <td className="p-3 text-blue-700">Approved by Bank Zonal Credit Committee</td>
                        <td className="p-3 text-right font-bold text-blue-700">Final One-Time Cash Payoff</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Pro-Rata CGTMSE Refund (75%)</td>
                        <td className="p-3 text-slate-900">₹12,37,500 Remitted</td>
                        <td className="p-3 text-emerald-700">Bank Remits Pro-Rata Share to Trust</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">Full NDC &amp; Case Dismissal</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Bank Recovery Channels */}
            <section id="recovery-channels" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Recovery Instruments</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Bank Recovery Channels: DRT, SARFAESI &amp; Civil Courts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an account turns bad, the lender must start formal recovery steps to satisfy CGTMSE claim terms. The chosen legal route depends on the total claim and whether the business has movable assets.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under CGTMSE rules, banks cannot take a mortgage over your personal home or land. This means they cannot use SARFAESI to take your house. But they can take action against business assets and personal guarantors.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Recovery Channel</th>
                      <th className="p-3">Statutory Act</th>
                      <th className="p-3">Applicability to CGTMSE</th>
                      <th className="p-3">Asset Seizure Risk</th>
                      <th className="p-3">Legal Defense Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">SARFAESI Act</td>
                      <td className="p-3">SARFAESI Act, 2002</td>
                      <td className="p-3 text-amber-600 font-semibold">Limited to Movables</td>
                      <td className="p-3">Hypothecated machinery and stock only.</td>
                      <td className="p-3">Cannot touch unmortgaged personal homes.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Debt Recovery Tribunal</td>
                      <td className="p-3">RDB Act, 1993</td>
                      <td className="p-3 text-emerald-600 font-semibold">Applicable if &gt;= ₹20 Lakhs</td>
                      <td className="p-3">Personal asset disclosure and garnishee orders.</td>
                      <td className="p-3">File written statement challenging penal calculations.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Civil Recovery Suit</td>
                      <td className="p-3">Code of Civil Procedure, 1908</td>
                      <td className="p-3 text-blue-600 font-semibold">Applicable under ₹20 Lakhs</td>
                      <td className="p-3">Execution decree against unencumbered assets.</td>
                      <td className="p-3">Invoke Section 60 CPC statutory property exemptions.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Lok Adalat</td>
                      <td className="p-3">Legal Services Authorities Act, 1987</td>
                      <td className="p-3 text-purple-600 font-semibold">Mutual Settlement &lt;= ₹20 Lakhs</td>
                      <td className="p-3">Consent award with decree status.</td>
                      <td className="p-3">Execute structured OTS with zero court fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Cheque / NACH Action</td>
                      <td className="p-3">Section 138 NI Act / Sec 25 PSSA</td>
                      <td className="p-3 text-rose-600 font-semibold">Routine Criminal Complaint</td>
                      <td className="p-3">Bailable warrants for dishonored EMIs.</td>
                      <td className="p-3">Obtain bail and compound proceedings upon OTS.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Section 60 CPC Protections */}
            <section id="section-60-cpc" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Asset Immunities</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Section 60 CPC Protections: Exempt Assets for Defaulters
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A bank cannot take all your assets if it wins a civil court decree or a DRT order. Section 60(1) of the CPC protects key personal properties from attachment.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian law protects your basic dignity and family survival. Since CGTMSE loans do not mortgage your home, the bank must go through court execution. In court execution, these assets are fully safe:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Homes of Farmers and Workers</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 60(1)(c), courts cannot seize or sell homes lived in by farmers, laborers, or domestic helpers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Briefcase className="w-4 h-4" />
                    <span>Tools of Trade and Artisan Gear</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 60(1)(b), basic artisan tools, farming implements, and livestock needed to earn a living are fully exempt.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Provident Fund and Gratuity</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 60(1)(g) and (k), money in EPF, gratuity, or pensions is fully safe from court attachment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Salary Limits and LIC Policies</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 60(1)(i) protects basic pay from attachment. Section 60(1)(kb) protects life insurance policies from bank seizure.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: CGTMSE Default and OTS Roadmap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This clear roadmap shows how to resolve a defaulted CGTMSE loan. See each step from bank claim to an approved One-Time Settlement.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/cgtmse-loan-default-borrower-liability-ots-settlement-rules.jpg"
                    alt="CGTMSE Loan Default Borrower Liability and OTS Settlement Legal Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle MSME Debt Resolution Architecture • CGTMSE Scheme Compliant</span>
                  <a
                    href="/images/infographics/cgtmse-loan-default-borrower-liability-ots-settlement-rules.jpg"
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
                6. Step-by-Step SOP: 6-Stage CGTMSE OTS Settlement Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Did your business default on a CGTMSE loan? Follow this six-stage guide. It helps you settle debt fairly and protect your personal assets.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Check Your Loan Account Ledger
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ask your bank branch for a full account statement. Look for extra penal interest, processing fees, and compounding charges added after the account became an NPA.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Show Real Business Hardship
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Gather your audited accounts, tax returns, and canceled orders. Show that your business suffered real market loss, rather than intentional fraud or diverted funds.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Check CGTMSE Claim Status
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Find out if the bank has received its first claim payout of 75% from CGTMSE. After getting this cash, the bank faces less pressure and can offer better settlement terms.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Send a Formal OTS Letter
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Send a written settlement offer under the bank board-approved OTS policy. Cite RBI rules on MSME loans, ask for a complete waiver of penal interest, and offer a clear cash sum.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Negotiate with Stressed Asset Desk
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Meet with the bank Zonal Stressed Assets desk. CredSettle legal experts represent your case, stop unfair recovery tactics, and negotiate a steep discount.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Get Sanction Letter and Pay Dues
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check the written settlement letter carefully to confirm full closure. Pay the agreed amount by RTGS, discharge personal guarantees, close court cases, and collect your No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Personal Guarantee & Harassment Defense */}
            <section id="personal-guarantee" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Borrower Legal Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Personal Guarantee &amp; Recovery Agent Intimidation Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a business loan defaults, third-party collection agents often use aggressive threats. They may threaten police arrest or say they will take your parents&apos; home. You must know your legal rights against such conduct.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 351 &amp; 352 BNS (Criminal Threats)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Threatening arrest or fake police cases for a business loan default is a crime under BNS law.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>RBI Fair Practices Code Rules</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI rules strictly bar recovery agents from calling before 8:00 AM or after 7:00 PM. They cannot call your family or visit your home without prior notice.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Civil Dispute vs Criminal Cheating</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court has ruled that honest business failure is a civil contract dispute. Lenders cannot turn it into criminal cheating under Section 420.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Limits on Director and Partner Liability</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In a Private Limited company, directors are not personally liable unless they signed a personal guarantee. In partnerships, liability is limited to firm assets.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Grievance Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Grievance Matrix: Bank to RBI MSME Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do bank branch staff reject your OTS offer? Do recovery agents harass you? You can use the RBI three-step grievance process.
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
                      <td className="p-3">Bank Internal Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">10 to 14 Working Days</td>
                      <td className="p-3">Halts abusive agent calls, halts illegal account liens, and directs branch to evaluate OTS.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Reviews commercial hardship documents, corrects ledger discrepancies, and tables OTS to committee.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Issues binding directions via cms.rbi.org.in to penalize rogue lenders and enforce fair practices.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline Table */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Delinquency Timeline: SMA-0 to Loss Asset
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Know the stages of loan default. This helps you plan your next move and offer an OTS at the right time.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Delinquency Window</th>
                      <th className="p-3">Regulatory Asset Status</th>
                      <th className="p-3">Lender Action &amp; CGTMSE Phase</th>
                      <th className="p-3">Strategic Borrower Response</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Automated payment reminders and branch courtesy calls.</td>
                      <td className="p-3">Review business cash flows and request formal loan restructuring.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Formal overdue warnings and branch manager inspection visits.</td>
                      <td className="p-3">Protect operating receivables and redirect business sales to neutral accounts.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Pre-NPA recall notices and third-party recovery agent assignment.</td>
                      <td className="p-3">Issue written legal replies documenting business failure and stop agent visits.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Classification</td>
                      <td className="p-3">Bank marks account NPA; 100% provisioning starts; legal filing initiated.</td>
                      <td className="p-3">Audit the loan ledger and contest excessive penal compounding charges.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Month 6 to 12</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">CGTMSE Claim Phase</td>
                      <td className="p-3">Bank files DRT/Lok Adalat suit and receives 75% CGTMSE first tranche payout.</td>
                      <td className="p-3 font-bold text-slate-900">Prime OTS Window: Propose a 50% to 75% compromise settlement with CredSettle.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Year 1 and Beyond</td>
                      <td className="p-3 font-mono text-[11px]">Doubtful / Loss Asset</td>
                      <td className="p-3">Debt written off on bank balance sheet; account transferred to ARC or stressed cell.</td>
                      <td className="p-3">Execute final compromise settlement payment and obtain clean No Dues Certificate.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized MSME Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized MSME Scenarios: Insolvency &amp; Restructuring
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Business defaults bring tricky situations. Here is how the law protects you in real cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Proprietorship vs Private Limited Entity
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In a sole proprietorship, personal assets are open to court decree execution. In a Private Limited firm, directors are safe unless they gave a personal guarantee.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Section 94 IBC Personal Insolvency Moratorium
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If lender lawsuits become overwhelming, guarantors can apply under Section 94 of the IBC. This gives an instant stay under Section 96, stopping all court cases.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Hypothecated Stock Depleted by Business
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If stock was sold in normal trade before closure, the bank cannot claim fraud without proof.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    Defending Against Wilful Defaulter Tags
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks cannot simply label a borrower a wilful defaulter. Under RBI rules, they must show real fund diversion through a formal hearing committee.
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
                Frequently Asked Questions: CGTMSE Loan Default Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, direct answers about CGTMSE claim payouts, borrower liability, personal guarantees, and One-Time Settlements.
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
                  <strong>Credit Guarantee Fund Scheme for Micro and Small Enterprises (CGS-I):</strong> Scheme Operational Guidelines on Claim Lodgement, Invocation &amp; Recovery Sharing.
                </li>
                <li>
                  <strong>Reserve Bank of India (RBI) Master Directions:</strong> Lending to Micro, Small &amp; Medium Enterprises (MSME) Sector (FIDD.MSME.BC.No.3/2016-17).
                </li>
                <li>
                  <strong>Reserve Bank of India Prudential Framework:</strong> Framework for Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24).
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Section 60(1), Property Exempt from Bank Attachment and Execution of Decrees.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Sections 140 and 141, Statutory Rights of Subrogation and Securities Held by Creditors.
                </li>
                <li>
                  <strong>Recovery of Debts and Bankruptcy Act, 1993 (RDB Act):</strong> Statutory Jurisdiction and Recovery Guidelines for Debts Exceeding ₹20 Lakhs.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.cgtmse.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>CGTMSE Official Trust Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.sidbi.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Small Industries Development Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://champions.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Ministry of MSME Champions Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/section-60-cpc-assets-property-exempt-from-bank-attachment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 60 CPC Exempt Assets
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF &amp; Gratuity Seizure Protection
                  </Link>
                  <Link href="/msme-loan-default-legal-action" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    MSME Loan Default Legal Action
                  </Link>
                  <Link href="/services/business-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business Loan Settlement
                  </Link>
                  <Link href="/overdraft-cash-credit-od-cc-default-settlement-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    OD CC Account Settlement
                  </Link>
                  <Link href="/sarfaesi-section-14-physical-possession-order-dm-cmm" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    SARFAESI Section 14 Defense
                  </Link>
                  <Link href="/loan-recall-notice-from-bank-legal-defense-reply-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan Recall Notice Reply
                  </Link>
                  <Link href="/personal-insolvency-section-94-ibc-interim-moratorium" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 94 IBC Personal Moratorium
                  </Link>
                  <Link href="/willful-defaulter-notice-rbi-rules-legal-defense-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Willful Defaulter Notice Defense
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Rules
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate
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
                Expert in MSME banking rules, CGTMSE compliance, DRT defense, and loan compromise settlements.
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
                  CONFIDENTIAL LEGAL SHIELD
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Defaulted on a CGTMSE Business Loan?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team protects your personal assets. We stop agent harassment and negotiate up to 75% loan waivers under RBI rules.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Request Confidential Settlement
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
                  <span><strong>Zero Residential Seizure:</strong> Enforcing CGTMSE collateral bars.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 60 CPC Protection:</strong> Safeguarding exempt personal assets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Zonal Talks:</strong> Bypassing third-party recovery agents.</span>
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
                  href="/section-60-cpc-assets-property-exempt-from-bank-attachment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 60 CPC Exempt Assets
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Assets exempt from attachment &rarr;</span>
                </Link>

                <Link
                  href="/services/business-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Business Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">MSME loan compromise rules &rarr;</span>
                </Link>

                <Link
                  href="/can-bank-seize-epf-provident-fund-for-loan-recovery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    EPF &amp; Gratuity Seizure Protection
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Statutory retirement fund defense &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
