'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import {
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Phone,
  FileText,
  Building2,
  ArrowRight,
  TrendingDown,
  Landmark,
  Scale,
  Globe2,
  ExternalLink,
  Award,
  BookOpen
} from 'lucide-react';

export default function NriCreditCardDebtSettlementClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>('quick-crux');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const navLinks = [
    { id: 'quick-crux', label: 'Executive Summary' },
    { id: 'debt-economics-npa-dynamics', label: '1. Debt Economics & NPA' },
    { id: 'financial-breakdown-settlement-math', label: '2. Financial Breakdown & Math' },
    { id: 'resolution-options-matrix', label: '3. Comparative Matrix' },
    { id: 'technical-cibil-algorithm', label: '4. CIBIL Algorithm Impact' },
    { id: 'infographic-overview', label: '5. Visual Resolution Blueprint' },
    { id: 'step-by-step-nri-sop', label: '6. 6-Stage Remote SOP' },
    { id: 'statutory-notice-defense-rights', label: '7. Statutory Notice Defense' },
    { id: 'three-tier-escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'chronological-resolution-milestones', label: '9. Procedural Timeline' },
    { id: 'specialized-nri-scenarios', label: '10. Specialized Scenarios' },
    { id: 'about-credsettle', label: '11. About CredSettle' },
    { id: 'frequently-asked-questions', label: '12. FAQs' },
    { id: 'regulatory-sources', label: '13. Statutory Citations' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -50% 0px', threshold: 0 }
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      q: 'Can an NRI settle credit card debt in India remotely?',
      a: 'Yes. Non-Resident Indians can settle credit cards remotely by executing a consular Special Power of Attorney authorizing Indian legal representatives to negotiate directly with bank nodal desks.'
    },
    {
      q: 'Can an NRI be arrested at an airport for credit card defaults?',
      a: 'No. Unsecured credit card defaults are strictly civil contractual disputes under Indian law. Immigration authorities hold zero statutory jurisdiction to arrest travelers for civil bank debts.'
    },
    {
      q: 'Can Indian banks issue a Lookout Circular for credit card debt?',
      a: 'No. Ministry of Home Affairs guidelines and High Court rulings prohibit banks from issuing Lookout Circulars for civil debt defaults. LOCs are restricted to criminal fraud cases.'
    },
    {
      q: 'How does an NRI execute a Special Power of Attorney from abroad?',
      a: 'The NRI executes a Special PoA before an Indian Embassy, Consulate, or via apostille in Hague countries. In India, counsel completes stamping under the Indian Stamp Act, 1899.'
    },
    {
      q: 'What percentage of credit card debt can an NRI save through an OTS?',
      a: 'Through credit committee representations, NRIs typically secure a 45% to 60% waiver on principal, along with a 100% waiver of accumulated revolving finance charges and late penalties.'
    },
    {
      q: 'What happens to an NRI\'s NRE and NRO accounts during a loan default?',
      a: 'Banks cannot freeze third-party accounts without court orders. However, if an NRI holds deposits with the lending bank itself, the bank may exercise a Banker\'s Lien under Section 171.'
    },
    {
      q: 'How do recovery agents contact overseas employers, and is it legal?',
      a: 'Contacting overseas employers or making abusive international calls violates the RBI Fair Practices Code. NRIs can issue cease-and-desist notices and file complaints on the RBI Ombudsman portal.'
    },
    {
      q: 'How should settlement funds be remitted to ensure clean tax closure?',
      a: 'Settlement funds must be wired directly to the lending bank\'s collection account via NRE/NRO transfer or foreign wire backed by a Foreign Inward Remittance Certificate (FIRC).'
    },
    {
      q: 'How does debt settlement affect an NRI\'s CIBIL score in India?',
      a: 'Settlement updates the account in CIBIL to "Settled" with zero balance, halting delinquency reporting. Non-residents can rebuild credit scores above 750+ within 12 to 24 months.'
    },
    {
      q: 'What documents does an NRI receive upon completing a debt settlement?',
      a: 'Upon settlement reconciliation, the lending bank issues a formal No Dues Certificate (NDC) confirming full discharge of all financial obligations with zero remaining legal liability.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Centered Background matching Image 4) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <span className="text-[11px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3.5 py-1 rounded-full inline-block mb-3 border border-white/15">
            Cross-Border Banking &amp; Remote Legal Protection
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs text-white">
            NRI Credit Card Debt Settlement India
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Settle legacy Indian credit cards and personal loans remotely from UAE, USA, UK, Canada, or Singapore. Protect resident parents, eliminate immigration arrest anxieties, and secure an official No Dues Certificate through bank nodal representation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.credsettle.com/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-[#2452ae] hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Resolve NRI Debt Remotely: Speak with Legal Experts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP COMPONENT */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT (Reduced Left/Right Margins & Increased Middle Width) */}
      <div className="w-full max-w-[1720px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* ================= LEFT COLUMN: STICKY TOC ================= */}
          <aside className="sticky top-6 hidden lg:block">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 overflow-hidden">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Navigation Index
                </span>
              </div>
              <nav className="space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto pr-1 text-xs">
                {navLinks.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${
                      activeSection === item.id
                        ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Cross-Border Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by Powers of Attorney Act 1882, Indian Stamp Act 1899, FEMA 1999, and RBI Master Directions.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= CENTER COLUMN: EDITORIAL CONTENT ================= */}
          <article className="space-y-10 min-w-0">
            
            {/* 2. EXECUTIVE SUMMARY BOX */}
            <section
              id="quick-crux"
              className="bg-[#F4F8FE] border-l-[5px] border-l-[#1886ff] p-6 rounded-r-2xl border border-slate-200/80 shadow-xs space-y-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  EXECUTIVE SUMMARY: REMOTE NRI DEBT RESOLUTION FRAMEWORK
                </h2>
              </div>
              <div className="space-y-3 text-sm text-slate-700 leading-relaxed font-normal">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <p><strong>100% Remote PoA Representation:</strong> Settle Indian debts from abroad via consular Special PoA without visiting India.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <p><strong>Zero Immigration Arrest Risk:</strong> Unsecured credit default is strictly civil; immigration holds zero statutory arrest authority.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <p><strong>Lookout Circular (LOC) Immunity:</strong> Commercial banks cannot issue LOCs for routine civil defaults under binding rulings.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <p><strong>45% to 60% Haircut Target:</strong> Credit committee representations eliminate 100% of revolving finance charges and secure principal waivers.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <p><strong>Direct Nodal Escalation:</strong> Representations bypass third-party recovery agencies and negotiate with bank zonal authorities.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <p><strong>Resident Family Protection:</strong> Invoking the RBI Fair Practices Code halts unauthorized visits to Indian family homes.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <p><strong>FEMA Compliant Inward Remittance:</strong> Settle debts directly via NRE/NRO or foreign wire backed by FIRC certificates.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <p><strong>Official No Dues Certificate:</strong> Secure a formal bank discharge letter, terminating liability and updating credit bureau records.</p>
                </div>
              </div>
            </section>

            {/* SECTION 1 */}
            <section id="debt-economics-npa-dynamics" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <Landmark className="w-3.5 h-3.5" />
                Macroeconomic & Regulatory Context
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                1. NRI Debt Economics & NPA Dynamics in Indian Banking
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm">
                Relocating overseas presents complex financial adjustments for Indian professionals. Whether emigrating to the Gulf region, North America, the United Kingdom, or Singapore, expatriates frequently leave behind active credit facilities in India. Unanticipated career interruptions, tech sector layoffs, delayed end-of-service gratuities in the Middle East, or dual living costs can cause monthly payments to lapse. Once an overseas borrower misses three consecutive billing cycles, the account transitions through 90-day Special Mention Account classifications (SMA-0 to SMA-2) and becomes a Non-Performing Asset (NPA) under Reserve Bank of India prudential norms.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm">
                Under RBI Master Directions, scheduled commercial banks must allocate 15% to 100% Tier-1 capital provisioning against aging NPAs. Because credit cards are purely unsecured facilities, lending institutions cannot invoke the SARFAESI Act, 2002 to seize physical collateral without court decrees. Cross-border litigation is commercially unviable due to jurisdictional friction and international legal costs. Consequently, bank credit committees are structurally incentivized to approve One-Time Settlements (OTS) to clean balance sheets and recover core liquidity.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm">
                Furthermore, enforcing Indian civil money decrees overseas under Section 44A of the Code of Civil Procedure (CPC) or reciprocal foreign enforcement treaties requires extensive diplomatic transmission, foreign court filing fees, and prolonged evidentiary hearings. For unsecured retail balances, lenders readily recognize that executing a structured compromise settlement through domestic legal counsel yields substantially superior recovery velocity compared to costly cross-border legal battles.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="financial-breakdown-settlement-math" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <TrendingDown className="w-3.5 h-3.5" />
                Financial Analysis
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                2. Financial Breakdown: Unbundling Revolving APR & Settlement Math
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm">
                When an Indian credit card account defaults, the ledger balance expands rapidly under compounding interest. Commercial card issuers levy annual finance charges ranging from 42% to 48% compounded monthly, alongside late fees, over-limit penalties, and 18% GST. Over an 18 to 24 month delinquency period, an original principal balance of ₹5.00 Lakhs routinely inflates into an artificial ledger claim of ₹12.00 Lakhs to ₹14.00 Lakhs.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm">
                During settlement negotiations, legal counsel audits the loan ledger under the Bankers' Books Evidence Act, 1891, separating genuine disbursed principal from capitalized penal charges. Commercial banks recognize that phantom penal fees hold zero real asset value. By establishing bona fide expatriate hardship, negotiators routinely secure a 100% waiver on all accumulated penal interest, combined with a 45% to 60% haircut on core principal.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm">
                The core accounting reality is that Indian lending institutions routinely write off bad card balances internally under technical prudential write-offs once an account crosses 180 to 360 days of default. Because 18% Goods and Services Tax (GST) applied on compounding penal interest creates an artificial accounting demand rather than real cash disbursement, bank credit committees possess full statutory discretion to waive the entire secondary fee stack during structured OTS reviews.
              </p>

              {/* Math Card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Representative 180-Day NPA Credit Card Settlement Matrix
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-center">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-[11px] font-medium text-slate-500">Disbursed Principal</span>
                    <span className="text-base font-bold text-slate-800">₹6,00,000</span>
                    <span className="block text-[10px] text-slate-500 mt-0.5">Disbursed balance</span>
                  </div>
                  <div className="p-3 rounded-xl bg-red-50/60 border border-red-100">
                    <span className="block text-[11px] font-medium text-red-600">Inflated Bank Claim</span>
                    <span className="text-base font-bold text-red-700">₹14,20,000</span>
                    <span className="block text-[10px] text-red-500 mt-0.5">Includes 42% APR + GST</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <span className="block text-[11px] font-medium text-emerald-600">Target Settlement</span>
                    <span className="text-base font-bold text-emerald-700">₹2.80L - ₹3.40L</span>
                    <span className="block text-[10px] text-emerald-600 font-semibold mt-0.5">53%-60% Haircut</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="resolution-options-matrix" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <Scale className="w-3.5 h-3.5" />
                Comparative Strategic Matrix
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                3. Comparative Resolution Matrix: NRI Debt Relief Pathways
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm">
                Evaluating legal remedies and cross-border recovery mechanics across available debt management routes enables expatriates to make strategic decisions:
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-sm bg-white">
                <table className="w-full text-xs text-left border-collapse">
                  <thead className="bg-slate-50 text-slate-700 border-b border-slate-200/80 uppercase font-bold tracking-wider text-[11px]">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3">Route</th>
                      <th className="p-3">Haircut</th>
                      <th className="p-3">NRI Travel</th>
                      <th className="p-3">Legal Risk</th>
                      <th className="p-3">CIBIL Result</th>
                      <th className="p-3">Strategic Viability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="divide-x divide-slate-200/80 bg-blue-50/30">
                      <td className="p-3 font-bold text-[#1886ff]">OTS</td>
                      <td className="p-3 font-semibold text-emerald-600">45%-60%</td>
                      <td className="p-3">None (via PoA)</td>
                      <td className="p-3 text-emerald-600">Zero (Notices Dropped)</td>
                      <td className="p-3 font-semibold text-slate-800">Settled -&gt; Closed</td>
                      <td className="p-3 font-medium text-slate-800">Optimal for permanent closure</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-800">Restructuring</td>
                      <td className="p-3">0%</td>
                      <td className="p-3">Remote</td>
                      <td className="p-3">Paused pending EMIs</td>
                      <td className="p-3">Restructured Standard</td>
                      <td className="p-3">Only if offshore income stable</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-800">Civil Suit</td>
                      <td className="p-3">0% + Costs</td>
                      <td className="p-3">Indian Advocate</td>
                      <td className="p-3 text-red-600 font-semibold">High (Court Summons)</td>
                      <td className="p-3 text-red-600">Suit Filed Hard Reject</td>
                      <td className="p-3 text-red-600">High legal expenses and delays</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-800">Lok Adalat</td>
                      <td className="p-3 font-semibold text-emerald-600">40%-55%</td>
                      <td className="p-3">Via Attorney</td>
                      <td className="p-3">Final Consent Award</td>
                      <td className="p-3">Settled via Conciliation</td>
                      <td className="p-3">Good for statutory compromise</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 bg-red-50/20">
                      <td className="p-3 font-bold text-red-600">Inaction</td>
                      <td className="p-3 text-red-600">Negative</td>
                      <td className="p-3 text-red-600">High Uncertainty</td>
                      <td className="p-3 text-red-600">Arbitration & Sec 25 PSSA</td>
                      <td className="p-3 text-red-600">Sub-600 Score</td>
                      <td className="p-3 text-red-600">Severe risk to family peace</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="technical-cibil-algorithm" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <Building2 className="w-3.5 h-3.5" />
                Credit Bureau Architecture
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                4. Technical CIBIL Algorithm & Scoring Impact for Non-Residents
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm">
                Credit Information Bureau (India) Limited (CIBIL) computes credit scores evaluating five parameters: Payment History accounts for 35%, Credit Utilization constitutes 30%, Credit History Age represents 15%, Credit Mix contributes 10%, and Inquiries account for 10%. When an NRI ceases servicing an unsecured credit card, Days Past Due (DPD) counters advance past 90 DPD, dropping scores below 600.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm">
                Executing a formal settlement replaces continuous default flags with an official "Settled" status and zeroes out the outstanding overdue balance. While a settled notation remains on credit records, it eliminates ongoing monthly delinquency reporting. Under Section 21 of the Credit Information Companies (Regulation) Act (CICRA), 2005, borrowers retain the statutory right to request bureau updates once their obligation is discharged. Non-residents can systematically rehabilitate credit scores over 12 to 24 months using secured fixed-deposit credit cards in India, rebuilding scores above 750+.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm">
                Once the lending institution transmits the monthly settlement data feed, the bureau recalculates the total balance from active delinquency to zero liability. This structural shift halts negative score erosion immediately. By pairing the settlement discharge with a disciplined repayment cycle on an Indian fixed-deposit secured card, non-resident borrowers re-establish positive credit velocity across all four Reserve Bank of India authorized credit bureaus.
              </p>
            </section>

            {/* SECTION 5: INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <FileText className="w-3.5 h-3.5" />
                Visual Resolution Framework
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Visual Defense Blueprint: 6-Step Remote NRI Debt Settlement
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm">
                Review this process map detailing how non-resident borrowers execute cross-border legal representation, challenge illegal claims, and secure debt discharge without returning to India:
              </p>

              <div className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/infographics/nri-credit-card-debt-settlement.jpg"
                    alt="NRI Credit Card Debt Settlement India Strategic Process Map"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 600px"
                  />
                </div>
                <div className="flex items-center justify-between mt-3 text-xs text-slate-500 px-1">
                  <span>CredSettle Legal Defense Architecture • Powers of Attorney Act 1882</span>
                  <a
                    href="/images/infographics/nri-credit-card-debt-settlement.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    View Blueprint
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-nri-sop" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                Sequential Protocol
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                5. Standard Operating Procedure (SOP): 6 Stages of Remote Settlement
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm">
                Adhering to this structured legal protocol ensures that non-resident debt resolution proceeds smoothly while protecting domestic family assets:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Stage 01</span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Days 1-7</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Forensic Audit & Claim Separation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Legal counsel audits credit card ledgers, unbundling principal from 42%+ revolving finance charges, late surcharges, and penal GST under the Bankers' Books Evidence Act, 1891.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Stage 02</span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Days 8-18</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Hardship Dossier Compilation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The expatriate compiles overseas employment records, layoff letters, or currency inflation data. This empirical dossier establishes bona fide distress to justify substantial debt waivers.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Stage 03</span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Days 19-30</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Special PoA Execution</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The NRI executes a consular Special Power of Attorney (PoA) before the Indian Embassy or Consulate abroad. In India, counsel completes domestic stamping under the Indian Stamp Act, 1899.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Stage 04</span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Days 31-50</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Nodal Desk Negotiations</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Authorized legal counsel submits the formal OTS proposal directly to the bank's Principal Nodal Officer, negotiating a 100% penal interest waiver and 45% to 60% principal reduction.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Stage 05</span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Days 51-65</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Sanction Vetting & Remittance</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Legal experts review the bank's written settlement sanction letter for explicit full-and-final discharge clauses. Payment is remitted directly via NRE/NRO wire transfer with FIRC certification.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Stage 06</span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Days 66-90</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">NDC & CIBIL Discharge</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Upon remittance verification, the bank issues a stamped No Dues Certificate (NDC), withdraws pending legal notices, and transmits closure records to CIBIL and other credit bureaus.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE */}
            <section id="statutory-notice-defense-rights" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <Scale className="w-3.5 h-3.5" />
                Statutory Defense & Cross-Border Rights
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                6. Statutory Notice Defense & Expatriate Cross-Border Rights
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm">
                Unethical third-party recovery agencies frequently exploit geographic distance by attempting to intimidate non-resident borrowers with groundless legal threats, claiming imminent passport cancellation or airport immigration arrests. Indian statutory jurisprudence provides clear protections against such coercive tactics, ensuring that civil debt defaults cannot be transformed into criminal proceedings without established criminal intent at loan inception.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm">
                Under Section 205 of the Code of Criminal Procedure (Section 228 of Bharatiya Nagarik Suraksha Sanhita), magistrates routinely dispense with the personal physical attendance of overseas accused in summons-triable commercial disputes, permitting appointed Indian advocates to appear on their behalf. This ensures that non-residents can defend statutory notices and compound matters without international travel.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1">Lookout Circulars (LOC) & Immigration</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Ministry of Home Affairs guidelines and Delhi High Court precedent in Sumer Singh Salkan, banks cannot request Lookout Circulars for routine civil credit card defaults.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1">Section 25 PSSA & Section 138 NI Act</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If an auto-debit mandate or cheque dishonors, authorized legal counsel can appear through an exemption petition under Section 205 CrPC without requiring the NRI's physical presence.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1">Section 12(5) Unilateral Arbitration</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Supreme Court rulings in Perkins Eastman and TRF Ltd., banks cannot unilaterally appoint sole arbitrators to pass ex-parte awards against overseas borrowers.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1">DRT Jurisdiction & SARFAESI</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    DRTs handle claims exceeding ₹20 Lakhs. Unsecured credit card debts carry zero mortgage charge, completely exempting personal residential assets and family property from SARFAESI action.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER ESCALATION MATRIX */}
            <section id="three-tier-escalation-matrix" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Grievance Hierarchy
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                7. The 3-Tier Escalation Matrix for Unlawful Recovery Harassment
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm">
                If collection agencies harass resident family members, escalate through this formal regulatory framework:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-xs font-bold text-slate-900">Grievance Redressal Officer (GRO)</h3>
                      <span className="text-[10px] text-slate-500 font-semibold bg-slate-100 px-1.5 py-0.5 rounded">7-10 Days</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Serve a formal notice attaching the Special PoA and demanding cessation of family harassment pursuant to the RBI Fair Practices Code.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-xs font-bold text-slate-900">Principal Nodal Officer (PNO)</h3>
                      <span className="text-[10px] text-slate-500 font-semibold bg-slate-100 px-1.5 py-0.5 rounded">14-21 Days</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Escalate directly to the bank's Principal Nodal Officer to submit compromise OTS proposals and reassign the account away from recovery agents.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-xs font-bold text-slate-900">RBI Integrated Ombudsman</h3>
                      <span className="text-[10px] text-slate-500 font-semibold bg-slate-100 px-1.5 py-0.5 rounded">30 Days</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      File a statutory regulatory complaint on cms.rbi.org.in if the bank fails to halt recovery misconduct or unlawfully freezes accounts.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-resolution-milestones" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                Procedural Timeline
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                8. Chronological Procedural Timeline: From Delinquency to Final NDC
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm">
                Understanding key statutory and banking milestones allows overseas borrowers to plan defense maneuvers and settlement funds efficiently:
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-sm bg-white">
                <table className="w-full text-xs text-left border-collapse">
                  <thead className="bg-slate-50 text-slate-700 border-b border-slate-200/80 uppercase font-bold tracking-wider text-[11px]">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3">Phase</th>
                      <th className="p-3">Banking Event</th>
                      <th className="p-3">Framework</th>
                      <th className="p-3">Action Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-semibold text-slate-800">Days 1-90</td>
                      <td className="p-3">SMA-0 to SMA-2 Classification</td>
                      <td className="p-3">RBI Income Recognition</td>
                      <td className="p-3">Collate statements & initiate review</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-semibold text-slate-800">Day 90+</td>
                      <td className="p-3 text-red-600 font-semibold">Non-Performing Asset Flag</td>
                      <td className="p-3">15%-100% Provisioning</td>
                      <td className="p-3">Execute consular PoA & establish defense</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 bg-blue-50/30">
                      <td className="p-3 font-semibold text-[#1886ff]">Months 4-5</td>
                      <td className="p-3 font-semibold text-[#1886ff]">Credit Committee OTS Window</td>
                      <td className="p-3">Stressed Asset Framework</td>
                      <td className="p-3 font-semibold text-emerald-600">Secure 45%-60% haircut sanction letter</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-semibold text-slate-800">Month 6</td>
                      <td className="p-3 font-semibold text-emerald-600">Inward Remittance & NDC</td>
                      <td className="p-3">FEMA 1999 & CICRA 2005</td>
                      <td className="p-3">Wire funds via NRE/NRO & receive NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-nri-scenarios" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <Globe2 className="w-3.5 h-3.5" />
                Specialized Cross-Border Scenarios
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                9. Specialized Scenarios: Gulf Layoffs, Currency Swings & ARCs
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm">
                Expatriates face distinct operational challenges depending on their host country and the corporate evolution of their loan portfolio:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1">GCC & Middle East Layoffs</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Expats in Dubai, Abu Dhabi, Doha, or Riyadh dealing with corporate restructuring can submit visa cancellations as conclusive proof of distress for fast OTS approval.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1">Dual Currency Swings</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Foreign currency appreciation against the Rupee lowers the foreign currency outlay required to settle debts. NRE/NRO transfers ensure full FEMA compliance.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1">ARC Portfolio Assignments</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When banks sell bad card pools to ARCs (such as Phoenix ARC or ARCIL) at 70% to 85% discounts, ARCs readily accept substantial compromise settlement waivers.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1">Resident Parents Shielding</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Credit card agreements are primary individual contracts. Third-party agents cannot legally contact parents. Formal PoA representation halts all domestic harassment.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: COMPANY PROFILE COMPONENT */}
            <div id="about-credsettle" className="pt-4">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <FileText className="w-3.5 h-3.5" />
                Frequently Asked Questions
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Frequently Asked Questions on NRI Credit Card Debt Settlement
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm">
                Verified answers by cross-border debt resolution professionals:
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                      aria-expanded={openFaq === index}
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                          openFaq === index ? 'rotate-180 text-[#1886ff]' : ''
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="space-y-4 pt-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <Scale className="w-3.5 h-3.5" />
                Statutory Citations & Regulatory Authorities
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Official Statutory References & Regulatory Authorities
              </h2>
              
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 text-xs text-slate-600 leading-relaxed">
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Key Statutes & Directives</h3>
                  <p>
                    Powers of Attorney Act, 1882 & Indian Stamp Act, 1899: Consular PoA execution and stamping. Reserve Bank of India Master Directions: Fair Practices Code and Stressed Assets (2026). Ministry of Home Affairs Guidelines: Office Memorandum on Lookout Circulars. Supreme Court of India: Perkins Eastman (2020) and TRF Ltd. (2017). FEMA 1999: Inward remittances. CICRA 2005: Section 21 credit rectification.
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <h3 className="font-bold text-slate-800 mb-2">Verified Portals</h3>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors">
                      RBI (rbi.org.in) <ExternalLink className="w-3 h-3" />
                    </a>
                    <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors">
                      Ombudsman (cms.rbi.org.in) <ExternalLink className="w-3 h-3" />
                    </a>
                    <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors">
                      CIBIL (cibil.com) <ExternalLink className="w-3 h-3" />
                    </a>
                    <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors">
                      India Code <ExternalLink className="w-3 h-3" />
                    </a>
                    <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors">
                      NALSA <ExternalLink className="w-3 h-3" />
                    </a>
                    <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors">
                      Cyber Crime Portal <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <h3 className="font-bold text-slate-800 mb-2">Related Guides</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/bank-sent-legal-notice-for-loan-default" className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors">
                      Bank Sent Legal Notice
                    </Link>
                    <Link href="/arbitration-notice-personal-loan-default" className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors">
                      Arbitration Notice Defense
                    </Link>
                    <Link href="/recovery-agent-harassment-legal-protection" className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors">
                      Anti-Harassment Protection
                    </Link>
                    <Link href="/convert-settled-loan-to-closed" className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors">
                      Convert Settled to Closed
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </article>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-5 sticky top-6 hidden lg:block">
            {/* Author Card */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full bg-[#1886ff] text-white flex items-center justify-center font-bold text-sm">
                  AJ
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">Ashish Jhangra</h3>
                  <p className="text-[11px] text-slate-500 font-medium leading-tight">
                    Legal & Debt Resolution Professional
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialized in cross-border banking dispute resolution and NPA settlement negotiations.
              </p>
              <Link
                href="/authors/ashish-jhangra"
                className="text-xs font-bold text-[#1886ff] hover:underline inline-flex items-center gap-1"
              >
                View Author Profile
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Emergency Remote Defense CTA Box */}
            <div className="bg-[#2452ae] text-white rounded-2xl p-5 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-blue-200" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200">
                  100% Confidential
                </span>
              </div>
              <h3 className="text-sm font-bold mb-2 leading-tight">
                Facing Indian Debt Abroad?
              </h3>
              <p className="text-xs text-blue-100 leading-relaxed mb-4">
                Our legal team handles PoA execution, stops harassment, and negotiates a 45%-60% waiver.
              </p>
              <a
                href="https://www.credsettle.com/contact"
                className="block w-full py-2.5 px-4 bg-white text-[#2452ae] text-center rounded-xl font-bold text-xs shadow hover:bg-blue-50 transition-colors mb-3"
              >
                Resolve NRI Debt Remotely
              </a>
              <a
                href="tel:+918800226635"
                className="flex items-center justify-center gap-2 text-xs font-bold text-blue-100 hover:text-white py-1 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Call: +91-8800226635
              </a>
            </div>

            {/* CredSettle Advantage */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                CredSettle Advantage
              </h3>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1886ff] flex-shrink-0" />
                  <span>Zero Travel via PoA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1886ff] flex-shrink-0" />
                  <span>Direct Bank Wire</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1886ff] flex-shrink-0" />
                  <span>RBI Compliant NDC</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
