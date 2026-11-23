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
  Calculator,
  Percent,
  Receipt
} from 'lucide-react';

export default function FlatRateVsReducingClient() {
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
    { id: 'statutory-framework', label: '1. Statutory Framework: RBI 2024 KFS' },
    { id: 'mathematical-reality', label: '2. Flat Rate vs Reducing APR Math' },
    { id: 'sales-tactics', label: '3. Deceptive DSA Mis-Selling Tactics' },
    { id: 'kfs-disclosures', label: '4. Mandatory KFS Loan Disclosures' },
    { id: 'financial-comparison', label: '5. Flat vs Reducing Cost Comparison' },
    { id: 'consumer-protection', label: '6. Consumer Protection Act Remedies' },
    { id: 'step-by-step-sop', label: '7. Step-by-Step Loan Dispute SOP' },
    { id: 'cibil-defense', label: '8. CIBIL Score & Default Defense' },
    { id: 'escalation-matrix', label: '9. 3-Tier Escalation Matrix' },
    { id: 'special-scenarios', label: '10. Fintech Apps, NBFCs & Settlement' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is the difference between a flat interest rate and a reducing balance rate?',
      a: 'Under a flat rate, interest is charged on the original principal for the entire loan tenure, ignoring principal paid off in monthly EMIs. Under a reducing balance rate, interest is only charged on the outstanding loan balance. As a result, a flat rate has an effective Annual Percentage Rate (APR) nearly double its quoted headline rate.'
    },
    {
      q: 'Why do loan agents promote flat interest rates on personal loans?',
      a: 'Direct Selling Agents (DSAs) and predatory lenders quote flat interest rates to make costly loans appear cheap. A 10% flat rate looks attractive compared to a 14% reducing rate, but the 10% flat rate actually costs approximately 18% to 19% in reducing APR terms, deceiving borrowers into taking high-interest debt.'
    },
    {
      q: 'Has the RBI banned banks and NBFCs from quoting flat interest rates?',
      a: 'Yes. Under the RBI Master Direction on Key Facts Statement (KFS) dated April 15, 2024, all banks, NBFCs, and digital lenders must disclose the all-inclusive Annual Percentage Rate (APR) computed on a reducing-balance basis before loan execution. Quoting flat headline rates without prominent reducing APR disclosure is a regulatory violation.'
    },
    {
      q: 'What is the Key Facts Statement (KFS) mandate issued by the RBI?',
      a: 'The RBI mandates that lenders must provide a standardized Key Facts Statement (KFS) to every retail borrower before loan signing. The KFS must clearly state the true APR, recovery schedule, itemized fees, penal charges, and cooling-off period. Lenders cannot collect any fee or charge not listed in the KFS.'
    },
    {
      q: 'How do I calculate the real reducing APR from a flat interest rate?',
      a: 'As a reliable rule of thumb for a 3 to 5 year personal loan, multiply the flat interest rate by approximately 1.75 to 1.85. For instance, a 12% flat rate equals an effective reducing APR of approximately 21.5% to 22.5%. You can also compute the exact reducing rate using standard loan amortization or IRR formulas.'
    },
    {
      q: 'Can I dispute my personal loan if the lender concealed the true reducing APR?',
      a: 'Yes. Concealing the true interest calculation or misrepresenting loan costs violates the RBI Fair Practices Code and Section 2(47) of the Consumer Protection Act, 2019. You can file a formal grievance with the lender, escalate to the RBI Ombudsman, or approach the Consumer Forum for interest recomputation and compensation.'
    },
    {
      q: 'What happens if a bank or NBFC charged fees not listed in the KFS?',
      a: 'Under RBI circular RBI/2024-25/18, any fee, charge, or insurance premium not explicitly itemized in the Key Facts Statement cannot be charged to the borrower. If deducted, the lender must refund the unauthorized amount with interest upon your written dispute.'
    },
    {
      q: 'Can flat-rate loan mis-selling damage my CIBIL score if I default?',
      a: 'Yes. Predatory flat rates cause inflated monthly EMIs that lead to unexpected debt burdens and missed payments, damaging your CIBIL score. If your delinquency was caused by undisclosed charges or disputed interest mis-selling, CredSettle helps you dispute the erroneous reporting and negotiate a lawful resolution.'
    },
    {
      q: 'How can CredSettle help if I am trapped in a predatory personal loan?',
      a: 'CredSettle analyzes your loan agreement and KFS, audits interest calculations, issues formal legal notices for regulatory non-compliance, negotiates significant interest and penalty waivers, stops recovery agent harassment, and secures an official No Dues Certificate (NDC).'
    },
    {
      q: 'Can I pre-close or settle a personal loan with disputed flat-rate interest?',
      a: 'Yes. Under RBI guidelines, floating-rate personal loans to individuals carry zero foreclosure penalties. If your loan has a predatory fixed flat rate, CredSettle can negotiate a One-Time Settlement (OTS) with up to 50% to 75% waiver on inflated interest, hidden charges, and late fees.'
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
            <span>RBI KFS Mandate 2024 &amp; Personal Loan Transparency</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Spot Deceptive Flat Interest Rates on Personal Loans
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Were you promised an 8% or 10% loan only to find your EMIs drain your bank account? Learn how lenders hide true APR, what RBI rules mandate, and how to dispute unfair debt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Dispute Mis-Sold Loan Terms</span>
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
                  <span>Borrower Transparency Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Circular RBI/2024-25/18 (KFS Mandate) and Consumer Protection Act 2019.
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
                <span>Executive Brief: Flat Rate vs Reducing APR Loan Trap</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">The Deceptive Gap:</strong> A flat interest rate charges interest on the full original principal for the entire loan tenure. In contrast, reducing balance interest only charges interest on the outstanding unpaid principal.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">The 1.8x Multiplier Rule:</strong> A quoted flat rate of 10% is actually equivalent to an effective reducing Annual Percentage Rate (APR) of approximately 18% to 19%.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory RBI KFS Framework:</strong> Under the RBI Master Direction on Key Facts Statement (April 15, 2024), lenders cannot quote flat rates without prominently disclosing the reducing APR and complete amortization schedule.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Prohibition of Unlisted Fees:</strong> Lenders cannot charge any fee, processing charge, documentation cost, or insurance premium unless it is explicitly itemized in the standardized KFS.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Legal Relief Pathways:</strong> If you were trapped by deceptive flat-rate calculations or undisclosed fees, you can file a complaint with the RBI Ombudsman, initiate Consumer Forum proceedings for unfair trade practices, or pursue debt settlement through CredSettle.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Framework: RBI 2024 Key Facts Statement */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Foundation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Framework: RBI 2024 Key Facts Statement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For years, unscrupulous loan agents and non-banking financial companies (NBFCs) marketed retail loans using attractive flat interest rates. Borrowers believed they were securing affordable financing. In reality, they were paying predatory rates.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To eliminate this deceptive practice, the Reserve Bank of India issued circular <strong className="text-slate-900">RBI/2024-25/18 (DOR.MCS.REC.21/01.01.003/2024-25)</strong> on April 15, 2024. This directive mandates a standardized Key Facts Statement (KFS) for all retail and MSME loans disbursed by commercial banks, cooperative banks, and NBFCs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1886ff] flex items-center justify-center font-bold text-sm">
                    01
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Mandatory APR Disclosure</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders must compute the Annual Percentage Rate (APR) based on an internal rate of return (IRR) / reducing-balance method on net disbursed funds.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">
                    02
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Pre-Agreement Delivery</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The KFS must be delivered to the borrower before loan execution, accompanied by a minimum 3-day evaluation window to review terms without pressure.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
                    03
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Zero Hidden Charges</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Any processing fee, verification charge, or third-party cost not explicitly documented in the KFS is legally unenforceable and cannot be recovered.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 2: Mathematical Reality: Flat Rate vs Reducing APR Math */}
            <section id="mathematical-reality" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calculator className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Mathematical Reality: Flat Rate vs Reducing APR Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding why a flat rate is so expensive requires looking at how loans are repaid. When you take a loan with monthly EMIs, every payment you make consists of two parts: interest and principal repayment.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In a reducing balance loan, your outstanding principal decreases every single month. Therefore, the monthly interest charge drops over time. In a flat rate loan, however, the lender continues charging interest on the entire original loan amount, even in the final months when you have already repaid most of the loan.
              </p>

              <div className="bg-slate-100/80 p-5 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Percent className="w-4 h-4 text-[#1886ff]" />
                  The Mathematical Formula Comparison
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="bg-white p-4 rounded-xl border border-slate-200/60 space-y-2">
                    <span className="font-bold text-slate-900 block text-xs uppercase tracking-wide text-rose-600">
                      Flat Interest Rate Calculation
                    </span>
                    <p className="font-mono text-slate-700 bg-slate-50 p-2 rounded border border-slate-200">
                      Total Interest = Principal x Flat Rate x Years
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Ignores ongoing principal amortization. Because you owe on average only about half the principal over the loan tenure, the true interest rate is nearly double the flat rate.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200/60 space-y-2">
                    <span className="font-bold text-slate-900 block text-xs uppercase tracking-wide text-emerald-600">
                      Reducing Balance APR (True Cost)
                    </span>
                    <p className="font-mono text-slate-700 bg-slate-50 p-2 rounded border border-slate-200">
                      EMI = [P x r x (1+r)^n] / [(1+r)^n - 1]
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Interest is calculated only on remaining unpaid balance. As principal gets repaid, monthly interest declines. This is the only fair and RBI-recognized calculation method.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: Deceptive Sales Tactics: How DSA Agents Trap Borrowers */}
            <section id="sales-tactics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>Mis-Selling Modus Operandi</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Deceptive Sales Tactics: How DSA Agents Trap Borrowers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Direct Selling Agents (DSAs) and fintech marketing telecallers earn commissions based on loan volume. To close deals quickly, they use psychological sales traps designed to exploit borrower unfamiliarity with financial jargon.
              </p>

              <div className="space-y-3 pt-1">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-50 text-amber-600 flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      The &quot;Cheaper than Bank Loans&quot; False Claim
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      A DSA tells a customer: &quot;Public sector banks charge 12% reducing interest, but our special NBFC scheme gives you a personal loan at just 8% flat rate!&quot; The borrower assumes 8% is lower than 12%. In reality, an 8% flat rate equates to over 14.8% reducing APR, costing the borrower thousands more in total interest.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-rose-50 text-rose-600 flex-shrink-0 mt-0.5">
                    <Receipt className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Bundled Insurance and Upfront Fee Deductions
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Lenders sanction a Rs 5 Lakh loan but disburse only Rs 4.5 Lakhs after deducting Rs 30,000 for credit insurance and Rs 20,000 in processing fees. Yet, they charge flat interest on the full Rs 5 Lakh sanction amount. This practice further inflates the actual APR to over 22%.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-blue-50 text-[#1886ff] flex-shrink-0 mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Withholding the Repayment Schedule Until Disbursal
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Agents urge borrowers to sign digital sanction letters or click OTP links immediately. They promise that the detailed repayment schedule will be emailed later. Once the loan is disbursed, the borrower discovers the astronomical total repayment figure, but by then the money has been disbursed.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 4: Mandatory KFS Disclosures: Complete Loan Cost Breakdown */}
            <section id="kfs-disclosures" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Compliance Checklist</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Mandatory KFS Disclosures: Complete Loan Cost Breakdown
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI Master Direction on Key Facts Statement, every lender must provide a standardized 1-page summary. If your loan agreement does not include these mandatory data points, the lender is in direct violation of central bank regulations.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Mandatory KFS Parameter</th>
                      <th className="p-3">RBI Regulatory Standard</th>
                      <th className="p-3">Borrower Protection Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Loan Sanction vs Disbursed Sum</td>
                      <td className="p-3 font-mono text-[11px]">Exact Net Cash Disbursed</td>
                      <td className="p-3">Prevents lenders from charging interest on money withheld for fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Annual Percentage Rate (APR)</td>
                      <td className="p-3 font-mono text-[11px]">All-Inclusive Annual Cost</td>
                      <td className="p-3">Combines interest and all mandatory fees into a single verifiable percentage.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Calculation Methodology</td>
                      <td className="p-3 font-mono text-[11px]">Reducing Balance Basis</td>
                      <td className="p-3">Prohibits hidden flat-rate interest schedules without clear reducing APR disclosure.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Itemized Fee Breakdown</td>
                      <td className="p-3 font-mono text-[11px]">Exhaustive Schedule</td>
                      <td className="p-3">Any fee not listed in the KFS is legally barred from being collected.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Cooling-Off / Look-Up Period</td>
                      <td className="p-3 font-mono text-[11px]">Minimum 3 Working Days</td>
                      <td className="p-3">Allows borrowers to exit the loan without penalty by returning principal.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Financial Comparison: Flat vs Reducing Balance EMI Cost */}
            <section id="financial-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Side-by-Side Proof</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Financial Comparison: Flat vs Reducing Balance EMI Cost
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To see the massive financial damage caused by flat interest rates, consider a realistic example: a personal loan of <strong className="text-slate-900">Rs 5,00,000 for a 5-year tenure (60 months)</strong>.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Loan Metric</th>
                      <th className="p-3 text-rose-700 bg-rose-50/50 font-bold">10% Flat Rate Scheme</th>
                      <th className="p-3 text-emerald-700 bg-emerald-50/50 font-bold">10% Reducing Rate Scheme</th>
                      <th className="p-3 text-[#1886ff] bg-blue-50/50 font-bold">The Excess Cost Difference</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Monthly EMI</td>
                      <td className="p-3 font-mono font-semibold text-rose-700">Rs 12,500 / month</td>
                      <td className="p-3 font-mono font-semibold text-emerald-700">Rs 10,624 / month</td>
                      <td className="p-3 font-mono font-bold text-slate-900">+Rs 1,876 extra monthly</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Total Interest Paid</td>
                      <td className="p-3 font-mono font-semibold text-rose-700">Rs 2,50,000</td>
                      <td className="p-3 font-mono font-semibold text-emerald-700">Rs 1,37,411</td>
                      <td className="p-3 font-mono font-bold text-rose-600">Rs 1,12,589 extra interest!</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Total Repayment Amount</td>
                      <td className="p-3 font-mono font-semibold text-slate-900">Rs 7,50,000</td>
                      <td className="p-3 font-mono font-semibold text-slate-900">Rs 6,37,411</td>
                      <td className="p-3 font-mono font-bold text-rose-600">17.6% higher total payout</td>
                    </tr>
                    <tr className="bg-amber-50/40">
                      <td className="p-3 font-bold text-slate-900">Actual Effective APR</td>
                      <td className="p-3 font-mono font-extrabold text-rose-700">17.27% Reducing APR</td>
                      <td className="p-3 font-mono font-extrabold text-emerald-700">10.00% Reducing APR</td>
                      <td className="p-3 font-mono font-extrabold text-amber-800">+7.27% Hidden Interest Rate</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>The Borrower Trap:</strong> When the loan agent says &quot;Sir, your rate is only 10%&quot;, you end up paying <strong>Rs 1,12,589 in excess interest</strong>. You are actually borrowing at 17.27% reducing interest, not 10%!
                </p>
              </div>
            </section>

            {/* SECTION 6: Consumer Protection Act: Misleading Loan Terms Defense */}
            <section id="consumer-protection" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Consumer Protection Act: Misleading Loan Terms Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers trapped by deceptive flat-rate marketing are not helpless. Indian law provides powerful statutory protections under both banking regulations and consumer law.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    Section 2(28) &amp; 2(47) Consumer Protection Act, 2019
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Consumer Protection Act, 2019, advertising a flat rate without disclosing the true APR constitutes a &quot;misleading advertisement&quot; and an &quot;unfair trade practice&quot;. Consumer Commissions can order the refund of excess interest and award substantial compensation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-emerald-600" />
                    RBI Integrated Ombudsman Scheme, 2021
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Clause 10 of the RBI Ombudsman Scheme, borrowers can challenge deficiency in banking service, non-adherence to the Fair Practices Code, and failure to provide a compliant KFS. The Ombudsman can award compensation up to Rs 20 Lakhs plus Rs 1 Lakh for mental distress.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Banking Regulation Act, 1949 (Sections 21 &amp; 35A)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI circulars carry statutory force under Sections 21 and 35A of the Banking Regulation Act. Any loan contract term that directly violates RBI KFS directives is voidable and unenforceable before courts of law.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    National Consumer Disputes Commission (NCDRC) Precedents
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In multiple landmark judgments, the NCDRC has affirmed that financial institutions cannot conceal interest calculation methods from consumers. Charging flat interest rates without unambiguous written consent amounts to actionable service deficiency.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Step-by-Step SOP: Disputing Mis-Sold Personal Loans */}
            <section id="step-by-step-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CheckCircle2 className="w-4 h-4 text-[#1886ff]" />
                <span>Actionable Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Step-by-Step SOP: Disputing Mis-Sold Personal Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you suspect you were mis-sold a personal loan with deceptive flat rates or undisclosed charges, follow this verified five-step dispute protocol.
              </p>

              <div className="space-y-3 pt-1">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Step 1: Request the Sanctioned KFS &amp; Amortization Schedule
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Write to your lender demanding a complete copy of the Key Facts Statement (KFS) and detailed repayment schedule showing the principal vs interest breakdown for each EMI.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Step 2: Audit Loan Charges &amp; Calculate Real APR
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Compare the net money credited to your bank account against the sanctioned loan amount. Identify upfront fee deductions, bundled insurance premiums, and determine your actual reducing APR using IRR formulas.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Step 3: Submit Formal Grievance to Bank GRO
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Send a registered email to the lender Grievance Redressal Officer (GRO). Cite RBI Circular RBI/2024-25/18 and Section 2(47) of the Consumer Protection Act. Demand recomputation on a reducing balance basis and refund of unlisted charges.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Step 4: Escalate to Principal Nodal Officer (PNO)
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      If the branch or GRO fails to resolve your grievance within 15 days or rejects your claim, escalate the dispute directly to the lender Principal Nodal Officer with all documentation.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    5
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Step 5: Lodge Complaint with RBI Ombudsman
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      After 30 days of filing your grievance, if the dispute remains unresolved, lodge a complaint on the RBI Integrated Ombudsman portal (cms.rbi.org.in). Attach copies of your KFS, email correspondence, and bank statements.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 8: CIBIL Score Defense: Rectifying Disputed Loan Defaults */}
            <section id="cibil-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Credit Health Protection</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. CIBIL Score Defense: Rectifying Disputed Loan Defaults
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When borrowers discover they were mis-sold a high-interest flat rate loan, they often struggle with unaffordable EMIs. If payments are delayed or stopped, lenders report Days Past Due (DPD) to TransUnion CIBIL, Experian, CRIF High Mark, and Equifax.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, under the Credit Information Companies (Regulation) Act, 2005 (CICRA) and RBI circular <strong className="text-slate-900">RBI/2023-24/72</strong>, credit bureaus and banks have a strict statutory duty to maintain accurate data.
              </p>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#1886ff]" />
                  Your Legal Rights in Disputed Credit Reporting
                </h3>
                <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Mandatory Dispute Tagging:</strong> While a loan dispute is pending before the Ombudsman or Consumer Forum, the lender must flag the account as &quot;Disputed&quot; in bureau submissions.
                  </li>
                  <li>
                    <strong>30-Day Rectification Window:</strong> Under RBI rules, lenders must resolve credit data discrepancies within 30 days of receiving a formal borrower notice.
                  </li>
                  <li>
                    <strong>Rs 100/Day Statutory Penalty:</strong> If a bank fails to update or correct credit information beyond 30 days of a valid grievance, it must pay the borrower Rs 100 per calendar day of delay.
                  </li>
                  <li>
                    <strong>Post-Settlement Status Correction:</strong> Upon completing an agreed loan settlement, CredSettle ensures the lender updates the bureau records to &quot;Settled&quot; or &quot;Closed&quot; and issues a definitive No Dues Certificate.
                  </li>
                </ul>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix: Institutional Redressal Guide */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. 3-Tier Escalation Matrix: Institutional Redressal Guide
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Navigating bank hierarchies requires systematic escalation. Use this proven 3-tier escalation structure to ensure your grievance reaches decision-makers with authority to waive charges.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Level</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Target Response Time</th>
                      <th className="p-3">Expected Outcome &amp; Powers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: Internal Redressal</td>
                      <td className="p-3">Branch Manager &amp; GRO</td>
                      <td className="p-3 font-mono">7 to 15 Days</td>
                      <td className="p-3">Produces loan statement, KFS copy, and formal clarification of interest calculation.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: Principal Nodal Officer</td>
                      <td className="p-3">Bank / NBFC Head Office PNO</td>
                      <td className="p-3 font-mono">15 to 30 Days</td>
                      <td className="p-3">Authority to reverse unauthorized processing fees, waive penal interest, and offer restructuring.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI Integrated Ombudsman (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">30 Days Post-Filing</td>
                      <td className="p-3">Issues binding statutory award for interest recomputation, fee refunds, and compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Special Scenarios: Fintech Apps, NBFCs & Settlement */}
            <section id="special-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Edge Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Scenarios: Fintech Apps, NBFCs &amp; Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Predatory interest calculations manifest in different forms across modern lending platforms. Here is how regulatory protections apply across four common lending scenarios.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Instant Digital Lending Apps
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Digital apps often quote daily interest rates (e.g. 0.1% per day) or flat monthly rates. Under the RBI Digital Lending Guidelines 2022, all lending apps must display the annualized percentage rate (APR) upfront before loan confirmation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    NBFC Consumer Durable Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Consumer loans marketed as &quot;No-Cost EMIs&quot; or low flat-rate schemes frequently bundle hidden processing fees or subvention costs. The April 2024 KFS mandate applies equally to consumer durable loans, requiring complete transparency.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Settlement of Trapped Personal Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When mis-sold loans lead to payment defaults and non-performing asset (NPA) status, CredSettle negotiates a One-Time Settlement (OTS). We leverage regulatory mis-selling non-compliance to secure 50% to 75% waivers on accumulated interest and charges.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Floating Rate Personal Loans &amp; Foreclosure
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI circulars, banks and NBFCs cannot levy foreclosure charges or prepayment penalties on floating-rate term loans sanctioned to individual borrowers for non-business purposes.
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
                Frequently Asked Questions: Flat Rate Personal Loan Traps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers to common questions about flat interest rate mis-selling, RBI Key Facts Statement rules, true APR calculations, and borrower dispute remedies.
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
                  <strong>Reserve Bank of India Master Direction on Key Facts Statement:</strong> RBI/2024-25/18, DOR.MCS.REC.21/01.01.003/2024-25, Key Facts Statement (KFS) for Loans &amp; Advances (Mandatory APR Disclosure on Reducing Balance Basis).
                </li>
                <li>
                  <strong>Reserve Bank of India Digital Lending Guidelines:</strong> RBI/2022-23/111, DOR.CRE.REC.66/21.07.001/2022-23, Guidelines on Digital Lending (Mandatory Upfront APR and Fair Disclosures).
                </li>
                <li>
                  <strong>Reserve Bank Integrated Ombudsman Scheme, 2021:</strong> Clause 10, Adjudication of Deficiency in Banking Service, Non-Adherence to Fair Practices Code, and Compensation.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(28) (Misleading Advertisement), Section 2(47) (Unfair Trade Practice), and Section 39 (Relief &amp; Restitution).
                </li>
                <li>
                  <strong>Banking Regulation Act, 1949:</strong> Section 21 and Section 35A, Statutory Powers of the Reserve Bank of India to Issue Binding Directives to Financial Institutions.
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
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Dispute Portal</span>
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
                  <Link href="/personal-loan-settlement-rbi-guidelines" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement RBI Rules
                  </Link>
                  <Link href="/foreclosure-and-part-prepayment-charges-on-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan Foreclosure Charges Rules
                  </Link>
                  <Link href="/personal-loan-settlement-calculator" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan Settlement Calculator
                  </Link>
                  <Link href="/cannot-pay-personal-loan-emi" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Cannot Pay Personal Loan EMI
                  </Link>
                  <Link href="/reduce-personal-loan-outstanding-amount" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Reduce Loan Outstanding Amount
                  </Link>
                  <Link href="/reply-personal-loan-legal-notice" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Reply to Loan Legal Notice
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement Services
                  </Link>
                  <Link href="/services/credit-score-builder" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Score Builder &amp; Repair
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
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
                Specialist in RBI lending compliance, loan mis-selling disputes, interest rate recomputation, and borrower legal defense across banks and NBFCs.
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
                  LOAN DISPUTE &amp; SETTLEMENT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Trapped in a Mis-Sold Personal Loan?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking advocates audit your loan KFS, challenge illegal interest rates, stop harassment, and negotiate waivers of up to 50% to 75% on predatory loan dues.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Dispute Loan &amp; Get Settlement
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
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                Why Borrowers Trust CredSettle
              </span>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Over ₹100+ Crores debt resolved</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Legal defense against DSA &amp; agent harassment</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>RBI Ombudsman representation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Official No Dues Certificate guaranteed</span>
                </li>
              </ul>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}
