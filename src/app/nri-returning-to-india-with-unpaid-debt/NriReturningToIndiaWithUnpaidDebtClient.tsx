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
  Globe,
  Plane,
  UserX,
  ShieldAlert
} from 'lucide-react';

export default function NriReturningToIndiaWithUnpaidDebtClient() {
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
    { id: 'nri-debt-economics', label: '1. NRI Debt Economics & NPA Dynamics' },
    { id: 'financial-breakdown', label: '2. Financial Breakdown & Settlement Math' },
    { id: 'resolution-matrix', label: '3. Resolution Pathways Comparison Matrix' },
    { id: 'cibil-scoring-math', label: '4. CIBIL Algorithm & Credit Rebuilding' },
    { id: 'infographic-asset', label: '5. Visual NRI Debt Defense Blueprint' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Remote Settlement SOP' },
    { id: 'statutory-defense', label: '7. Statutory Defense & Airport LOCs' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance & Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Procedural Milestones & Timelines' },
    { id: 'specialized-scenarios', label: '10. Specialized Real-World NRI Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can an NRI be arrested at an Indian airport for unpaid credit cards or personal loans?',
      a: 'No. Unsecured loan default is strictly a civil contractual breach under the Indian Contract Act, not a cognizable criminal offence. Bureau of Immigration officers cannot arrest or detain passengers solely for bank loan defaults, credit card arrears, or commercial recovery disputes.'
    },
    {
      q: 'Can Indian banks issue a Look Out Circular (LOC) against an NRI for loan default?',
      a: 'Public and private sector banks cannot unilaterally open Look Out Circulars for standard unsecured credit defaults. The High Courts of Bombay and Delhi have consistently ruled that commercial banks lack statutory authority to restrict fundamental travel rights under Article 21 without a pending criminal FIR or economic security threat.'
    },
    {
      q: 'What happens if an NRI defaults on a loan in India and moves abroad?',
      a: 'The loan account transitions from Special Mention Account (SMA) to Non-Performing Asset (NPA) after 90 days. Banks report the delinquency to Indian credit bureaus (CIBIL, Experian), initiate civil arbitration or summary recovery suits, and may serve statutory demand notices at registered Indian addresses.'
    },
    {
      q: 'Can an NRI settle their Indian bank loans or credit card debt without traveling to India?',
      a: 'Yes. NRIs can execute a 100% remote One-Time Settlement (OTS) from abroad. Through digital communication and authorized legal representation via a Special Power of Attorney (PoA), CredSettle negotiates directly with bank stressed asset desks, secures official sanction letters, and facilitates direct remittance from NRE or NRO accounts.'
    },
    {
      q: 'How does CredSettle assist NRIs in resolving defaulted Indian loans remotely?',
      a: 'CredSettle conducts a forensic audit of claimed liabilities, eliminates unlawful compounding penal fees, compiles cross-border hardship dossiers, represents the NRI before bank zonal credit committees, obtains formal settlement sanction letters, and ensures issuance of an official No Dues Certificate.'
    },
    {
      q: 'Can banks seize ancestral or inherited property in India for personal loan default?',
      a: 'No. Unsecured personal loans and credit cards carry zero mortgage or hypothecation rights. Lenders cannot initiate SARFAESI property attachment against ancestral or joint family assets without obtaining a specific civil court money decree and establishing unencumbered individual ownership.'
    },
    {
      q: 'What should an NRI do if a Section 138 cheque bounce or Section 25 notice is issued?',
      a: 'An NRI should immediately appoint legal counsel to inspect magistrate court records and file a formal reply or appearance. Compoundable proceedings under Section 138 NI Act or Section 25 PSSA can be permanently disposed of through a compromise OTS without requiring physical court attendance.'
    },
    {
      q: 'How does loan default in India affect an NRI’s international credit score or visa status?',
      a: 'Indian credit bureaus (CIBIL, Experian India) operate independently of international credit systems such as US FICO, UK Experian, or UAE AECB. Civil loan defaults in India do not impact overseas credit scores, work permits, permanent residency petitions, or foreign visa renewals.'
    },
    {
      q: 'What discount or waiver percentage can an NRI negotiate on a defaulted loan?',
      a: 'NRIs typically secure a 100% complete waiver on accrued penal interest, late fees, and collection surcharges, alongside a 40% to 55% negotiated haircut on the core unamortized principal balance depending on the delinquency age and documented overseas hardship.'
    },
    {
      q: 'How long does the remote NRI loan settlement process take to secure a No Dues Certificate?',
      a: 'The complete remote NRI debt resolution lifecycle generally concludes within 30 to 60 business days, encompassing forensic ledger audit, zonal credit committee negotiation, formal sanction letter issuance, settlement remittance, and delivery of the final No Dues Certificate (NDC).'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider mb-4">
            <Globe className="w-4 h-4 text-emerald-300" />
            <span>Cross-Border Banking Law &amp; NRI Debt Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            NRI Travel to India with Unpaid Loans: LOC &amp; Airport Realities
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Legal clarity for Non-Resident Indians on Airport Look Out Circulars, recovery agent threats, and cross-border liabilities. Learn how to resolve defaulted Indian personal loans and credit cards 100% online from abroad with complete statutory immunity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>NRI Debt Settlement: Resolve It Online</span>
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
                  <span>Cross-Border Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by the Constitution of India Article 21 and High Court Precedents on LOCs.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: NRI CROSS-BORDER DEBT &amp; AIRPORT TRAVEL REALITIES</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Zero Airport Detention for Civil Debt:</strong> Defaulting on unsecured personal loans or credit cards in India is purely a civil contractual matter with zero legal provision for airport arrest or immigration detention upon arrival.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Commercial LOCs are Unconstitutional:</strong> Landmark High Court rulings (including the Bombay High Court in <em>Viraj Chetan Shah</em>) have established that commercial banks cannot open Look Out Circulars for standard recovery disputes.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Independent International Credit Systems:</strong> Indian credit bureau defaults (CIBIL, Experian India) are entirely isolated and have zero bearing on your foreign credit scores (US FICO, UK Experian, UAE AECB) or visa sponsorships.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">100% Remote Resolution Protocol:</strong> NRIs do not need to travel to India; debt settlements can be executed digitally via Special Power of Attorney (PoA) directly with bank zonal credit committees.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">40% to 55% Negotiated Waivers:</strong> Because banks classify 90-day delinquent loans as Non-Performing Assets (NPAs) requiring Tier-1 provisioning, they readily approve substantial principal haircuts.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Ancestral Property Immunity:</strong> Unsecured loans carry no collateral mortgage; banks cannot attach family or inherited properties without protracted civil money decrees.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Compoundable Judicial Proceedings:</strong> Cheque bounce notices under Section 138 of the NI Act or Section 25 of the PSSA can be formally closed through an amicable settlement without personal court surrender.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Direct NRE/NRO Account Remittance:</strong> Compromise settlements are paid directly to verified loan accounts from domestic or foreign funds, followed by an official No Dues Certificate (NDC).
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: NRI Debt Economics: Defaults & Bank NPA Dynamics */}
            <section id="nri-debt-economics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Debt Economics &amp; NPA Dynamics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. NRI Debt Economics: Defaults &amp; Bank NPA Dynamics
              </h2>
              
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Relocating overseas involves substantial transitional capital expenditures, visa fees, and relocation costs. Thousands of Non-Resident Indians (NRIs) working across the Gulf Cooperation Council (GCC), the United Kingdom, North America, and Southeast Asia experience sudden economic dislocation due to international tech layoffs, corporate restructuring, or unexpected medical crises. When overseas living expenses surge, servicing pre-existing personal loans, revolving credit cards, or business borrowings taken in India becomes unsustainable.
              </p>
              
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When monthly installments are missed, Indian commercial banks follow the Reserve Bank of India (RBI) Prudential Norms on Income Recognition, Asset Classification and Provisioning. An account progresses through Special Mention Account stages: SMA-0 (1 to 30 days overdue), SMA-1 (31 to 60 days overdue), and SMA-2 (61 to 90 days overdue). Once non-payment crosses ninety continuous days, the lender is legally obligated to classify the facility as a Non-Performing Asset (NPA).
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under regulatory mandates, commercial banks must set aside up to 100% provisioning against Tier-1 capital for unsecured NPAs, locking up their balance sheet liquidity. Because unsecured credit cards and personal loans carry zero physical collateral or mortgage charge under the SARFAESI Act, 2002, the lender possesses no asset to seize or auction. Initiating international litigation across foreign jurisdictions is commercially impractical for retail balances. Consequently, bank Stressed Asset Management Divisions (SAMD) are strongly incentivized to approve One-Time Settlements (OTS) to clean their books and recover capital.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis &amp; Settlement Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Principal vs Inflated Penalties
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an NRI borrower stops servicing an Indian loan, lenders compound the ledger by imposing exorbitant penal interest, late payment surcharges, monthly finance charges, and recovery vendor overheads. Over twelve to eighteen months of non-payment, these compounding fees often inflate the claimed liability to nearly double the original principal balance. Lenders and third-party recovery telecallers frequently weaponize these exaggerated figures to generate panic.
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During institutional debt resolution, CredSettle performs a comprehensive forensic audit of the bank ledger statement. We systematically separate the core unamortized principal from the artificial penalty layer. In an authentic compromise settlement, credit committees readily sanction a 100% waiver of all accumulated penal interest, bounce charges, and administrative expenses, alongside a 40% to 55% haircut directly on the underlying principal balance.
              </p>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    Representative 180-Day NRI Multi-Facility Debt Settlement Calculation
                  </h3>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                    Target 40% to 55% Principal Waiver
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="font-bold text-slate-800 pb-1 border-b border-slate-200">
                      Bank Claimed Ledger Breakdown
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Original Disbursed Principal (Personal Loan &amp; Cards):</span>
                      <span className="font-semibold text-slate-900">₹12,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Accrued Contractual Interest:</span>
                      <span className="font-semibold text-slate-900">₹2,40,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Compounded Penal Interest (24% to 36% p.a.):</span>
                      <span className="font-semibold text-red-600">₹2,80,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>NACH/ECS Bounce Surcharges &amp; Late Fees:</span>
                      <span className="font-semibold text-red-600">₹85,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Agency Collection Costs &amp; Legal Notices:</span>
                      <span className="font-semibold text-red-600">₹95,000</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900 border-t border-slate-200">
                      <span>Total Bank Claim Amount:</span>
                      <span className="text-red-700">₹19,00,000</span>
                    </div>
                  </div>

                  <div className="space-y-2 bg-blue-50/60 p-4 rounded-xl border border-blue-100">
                    <div className="font-bold text-[#1886ff] pb-1 border-b border-blue-200">
                      CredSettle Forensic Compromise Settlement
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Audited Net Principal:</span>
                      <span className="font-semibold text-slate-900">₹12,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Penal Surcharges Waived (100%):</span>
                      <span className="font-semibold text-emerald-700">-₹2,80,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Late Fees &amp; Bounce Charges Waived (100%):</span>
                      <span className="font-semibold text-emerald-700">-₹85,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Legal &amp; Agency Fees Waived (100%):</span>
                      <span className="font-semibold text-emerald-700">-₹95,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Negotiated Principal Haircut (45%):</span>
                      <span className="font-semibold text-emerald-700">-₹5,40,000</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900 border-t border-blue-200">
                      <span>Final Agreed OTS Remittance:</span>
                      <span className="text-emerald-700 font-extrabold">₹6,60,000 (65% Overall Relief)</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  Settling at the audited net principal figure stops compounding interest immediately and enables complete loan closure through a direct transfer from your NRE or NRO account.
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="resolution-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Resolution Pathways</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Resolution Pathways: Comparison of Legal Remedies
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Non-Resident Indians facing defaulted financial obligations must evaluate the relative efficiency, financial savings, and legal risks associated with available resolution channels. The comparative table below outlines the primary mechanisms available under Indian law:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Resolution Mechanism</th>
                      <th className="p-3.5 font-bold">Physical Travel Required</th>
                      <th className="p-3.5 font-bold">Financial Waiver</th>
                      <th className="p-3.5 font-bold">Legal Notice Immunity</th>
                      <th className="p-3.5 font-bold">Resolution Speed</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Strategic Fit for NRIs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Remote One-Time Settlement (OTS)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Zero Travel (100% Online)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">40% to 55% Principal Cut</td>
                      <td className="p-3.5">Complete civil immunity with NDC</td>
                      <td className="p-3.5">30 to 60 Days</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Optimal choice for NRIs living abroad</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Loan Restructuring / Moratorium</td>
                      <td className="p-3.5 text-slate-700">Branch visit often demanded</td>
                      <td className="p-3.5 text-red-600 font-semibold">Zero Waiver (Interest Accrues)</td>
                      <td className="p-3.5">Temporary while EMIs continue</td>
                      <td className="p-3.5">60 to 90 Days</td>
                      <td className="p-3.5 text-slate-700">Suitable only if high foreign income resumes</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Civil Court / DRT Litigation</td>
                      <td className="p-3.5 text-red-600 font-semibold">Requires Indian counsel presence</td>
                      <td className="p-3.5 text-slate-500">Uncertain trial outcomes</td>
                      <td className="p-3.5">High litigation costs and delays</td>
                      <td className="p-3.5">3 to 7 Years</td>
                      <td className="p-3.5 text-slate-700">Defensive necessity if claims exceed ₹20 Lakhs</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">National Lok Adalat</td>
                      <td className="p-3.5 text-slate-700">Represented via Power of Attorney</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">30% to 50% Compromise</td>
                      <td className="p-3.5">Final binding decree under LSA Act</td>
                      <td className="p-3.5">Single-day sitting</td>
                      <td className="p-3.5 text-slate-700">Highly effective if matched with court calendar</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Passive Inaction</td>
                      <td className="p-3.5 text-red-600 font-semibold">Unresolved status</td>
                      <td className="p-3.5 text-red-600 font-semibold">Zero (Debt compounds)</td>
                      <td className="p-3.5 text-red-600 font-semibold">Risk of ex-parte decrees in India</td>
                      <td className="p-3.5 text-red-600">Indefinite</td>
                      <td className="p-3.5 text-red-600 font-semibold">High risk leading to recovery agent harassment</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-scoring-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Scoring &amp; Technical Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Algorithm: Bureau Scoring &amp; CICRA Rectification
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian credit reporting operates under algorithmic scoring frameworks administered by TransUnion CIBIL, Experian, CRIF High Mark, and Equifax. The scoring architecture assigns distinct mathematical weights to five underlying credit behaviors: repayment track record (35%), credit exposure and credit utilization ratio (30%), depth of credit history (15%), credit product diversity (10%), and recent hard credit inquiries (10%).
              </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an NRI borrower defaults on an Indian loan, the 35% repayment weighting causes a rapid credit score drop of 100 to 180 points as Days Past Due (DPD) metrics exceed 90 days. However, it is vital to understand that Indian credit bureaus possess zero data integration with overseas credit scoring repositories such as FICO in the United States, Equifax in the UK, or the Al Etihad Credit Bureau (AECB) in the UAE. A default in India will not reflect on your overseas credit profile or affect foreign residency permits.
              </p>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#1886ff]" />
                  Section 21 CICRA Statutory Bureau Rectification
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Upon executing a formal One-Time Settlement and paying the agreed compromise figure, the lending institution is mandated under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA) to update all four licensed credit bureaus within thirty days.
                </p>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  The outstanding balance is permanently updated to zero, and all ongoing delinquency reporting ceases. If you plan to return to India in the future, you can easily rebuild your CIBIL score to 750+ within 12 to 18 months by maintaining an on-time payment track record on a secured Indian credit card backed by a fixed deposit.
                </p>
              </div>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-asset" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual NRI Defense Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Protocol: NRI Debt Defense &amp; Resolution SOP
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive visual workflow outlines the complete 6-stage legal and institutional protocol for resolving defaulted Indian bank debt remotely from overseas without travel risks:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/nri-returning-to-india-with-unpaid-debt.jpg"
                    alt="NRI Returning to India with Unpaid Debt Legal Defense Blueprint"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle NRI Protection Framework • High Court Precedents &amp; RBI Master Directions</span>
                  <a
                    href="/images/infographics/nri-returning-to-india-with-unpaid-debt.jpg"
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

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Remote NRI Loan Settlement Process
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                NRIs can achieve permanent debt closure and obtain an authentic No Dues Certificate without ever traveling to India by adhering to this sequential standard operating procedure:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01: Forensic Loan &amp; Ledger Audit
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 1–5</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Comprehensive Account Statement &amp; Demand Scrutiny
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    CredSettle resolution specialists audit your entire loan history to identify true unamortized principal. We isolate unlawful compounding penal interest, duplicate NACH bounce penalties, and unauthorized recovery agency fees to establish an accurate baseline for compromise negotiations.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02: Airport LOC &amp; Judicial Warrant Verification
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 6–12</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Court Record Search &amp; Immigration Status Check
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Our legal panel conducts an exhaustive e-Courts search across magistrate courts associated with your registered Indian address. We verify whether any Section 138 NI Act or Section 25 PSSA summons were issued, confirming complete absence of bailable or non-bailable warrants.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03: Special PoA &amp; Overseas Hardship Dossier
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 13–20</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Consular Attestation &amp; Involuntary Distress Filing
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    You execute a limited Special Power of Attorney (PoA) authorizing CredSettle to represent your interests before bank credit committees. We compile an overseas hardship dossier including foreign employment termination notices, visa transitions, or medical bills to justify a substantial settlement haircut.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04: Bilateral Stressed Asset Negotiations
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 21–40</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Zonal Stressed Asset Committee Representation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    We bypass third-party collection agencies and present your hardship petition directly to the bank Circle Stressed Asset Management Division (SAMD). Our negotiators contest inflated charges and secure a formal One-Time Settlement compromise providing a 40% to 55% principal waiver.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05: Settlement Letter Forensic Vetting
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 41–48</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Validation of Official Bank Sanction Terms
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Our legal panel conducts a stringent validation of the settlement sanction letter. We verify that it originates from an official bank domain, explicitly declares the remittance as Full and Final Settlement, contains clear account details, and commits to the unconditional withdrawal of legal claims.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06: NRE/NRO Remittance &amp; NDC Issuance
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 49–60</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Direct Account Payment &amp; Permanent Closure
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    You remit the agreed settlement amount directly into your verified bank loan account from your foreign or NRE/NRO account. We ensure that the bank issues an authentic No Dues Certificate (NDC), closes internal ledgers, and updates your credit bureau balance to zero.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Legal Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Defense: Airport LOC &amp; Legal Rights Matrix
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Non-Resident Indians are protected by robust constitutional safeguards, statutory enactments, and established High Court precedents against arbitrary debt recovery actions and travel restrictions:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <Plane className="w-4 h-4" />
                    <span>Airport Look Out Circulars (LOC) Legality</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Under Ministry of Home Affairs (MHA) Office Memorandums and the landmark Bombay High Court ruling in <em>Viraj Chetan Shah v. Union of India (2024)</em>, public and private sector banks have no legal power to request Look Out Circulars for standard loan defaults. LOCs can only be issued in cognizable criminal offenses involving severe national economic threats.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>Section 138 NI Act &amp; Section 25 PSSA Defense</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Dishonored cheques or bounced auto-debit mandates trigger quasi-criminal complaints under Section 138 of the Negotiable Instruments Act or Section 25 of the Payments and Settlement Systems Act. These offenses are compoundable under Section 147 of the NI Act and can be permanently settled out of court through authorized counsel.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Arbitration Section 21 &amp; Perkins Eastman Ruling</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When lenders initiate domestic arbitration under Section 21 of the 1996 Act, unilateral appointments of sole arbitrators by banks are legally invalid under Supreme Court precedents (<em>Perkins Eastman</em> and <em>TRF Ltd.</em>). NRIs can challenge unlawful arbitral notices through written legal objections.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <ShieldAlert className="w-4 h-4" />
                    <span>DRT Jurisdiction &amp; High Court Article 226 Writs</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Debts Recovery Tribunals (DRT) only adjudicate recovery claims exceeding ₹20 Lakhs under the RDB Act, 1993. If any agency attempts unlawful travel impedance, NRIs can invoke Article 226 of the Constitution before the jurisdictional High Court to obtain an immediate stay and passport protection.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Grievance Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank PNO to RBI Ombudsman
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If recovery agents engage in unauthorized contact harassment against your family in India or issue baseless threats regarding your travel, execute this structured 3-tier regulatory escalation hierarchy:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Principal Nodal Officer &amp; Stressed Asset Desk
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 7–10 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Internal Legal Representation &amp; Direct Channeling
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Serve a formal legal representation upon the bank Principal Nodal Officer (PNO) and Circle Debt Resolution Head. Cite overseas hardship, demand an immediate halt to third-party telecalling at Indian family addresses, and formally initiate internal compromise settlement proceedings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: Bureau of Immigration &amp; High Court Article 226
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 14–21 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Writ Jurisdiction for Fundamental Travel Protection
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If an institution attempts unauthorized travel restrictions or misrepresents criminal complaints, our legal team files a Writ Petition under Article 226 before the High Court. High Courts routinely quash illegal recovery circulars and reaffirm the fundamental right to travel under Article 21.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: RBI Integrated Ombudsman (CMS Portal)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 30 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Regulatory Redressal on cms.rbi.org.in
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If the bank fails to provide transparent ledger statements or tolerates recovery agent violations of the RBI Fair Practices Code, file a complaint on the RBI CMS portal (<strong>cms.rbi.org.in</strong>). The Ombudsman exercises regulatory powers to sanction non-compliant lenders and enforce compromise guidelines.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Delinquency to Debt Freedom
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the chronological milestones of Indian debt delinquency enables Non-Resident Indians to strategically time their settlement negotiations and protect their rights:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Timeline Milestone</th>
                      <th className="p-3.5 font-bold">Asset Classification</th>
                      <th className="p-3.5 font-bold">Bank Recovery Strategy</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">NRI Countermeasure</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 1–30</td>
                      <td className="p-3.5">SMA-0 Stage</td>
                      <td className="p-3.5">Automated SMS, emails, and phone calls</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Notify bank of overseas transition in writing</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 31–60</td>
                      <td className="p-3.5">SMA-1 Stage</td>
                      <td className="p-3.5">Third-party agency calls to Indian reference contacts</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Issue formal cease-and-desist to protect family</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 61–90</td>
                      <td className="p-3.5">SMA-2 Stage</td>
                      <td className="p-3.5">Intensified collection and pre-litigation notices</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Initiate forensic ledger review with CredSettle</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 91–180</td>
                      <td className="p-3.5">NPA (Sub-Standard)</td>
                      <td className="p-3.5">100% Tier-1 provisioning; OTS window opens</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Submit hardship dossier for 40%–55% OTS waiver</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Months 6–12</td>
                      <td className="p-3.5">Doubtful NPA</td>
                      <td className="p-3.5">Potential ARC debt assignment or civil suit</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Finalize single-tranche OTS from NRE/NRO account</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Month 12+</td>
                      <td className="p-3.5">Full Closure</td>
                      <td className="p-3.5">Account settled, all legal claims withdrawn</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Obtain official NDC and update CIBIL record to zero</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Gulf Layoffs &amp; ARC Portfolios
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Cross-border debt resolution involves distinct challenges based on your host country, residential status, and account assignments:
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#1886ff]" />
                    GCC &amp; UAE Corporate Downsizing &amp; Sudden Repatriation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Professionals in Dubai, Abu Dhabi, Doha, and Riyadh frequently face rapid contract terminations with short visa grace periods. CredSettle negotiates urgent OTS settlements with Indian lenders before end-of-service gratuity funds are exhausted, securing maximum waivers and preventing long-term credit distress in India.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <UserX className="w-4 h-4 text-amber-600" />
                    Inactive Indian Phone Numbers &amp; Untraceable Registered Address
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When NRIs surrender their Indian mobile SIMs and vacate Indian residences, banks send demand notices to outdated addresses, occasionally attempting ex-parte legal actions. Our legal panel establishes a verified electronic communication bridge with the bank, redirecting all correspondence to authorized counsel.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Asset Reconstruction Company (ARC) Portfolio Assignments
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If an Indian bank sells delinquent NRI debt to an ARC under Section 5 of the SARFAESI Act, ARCs acquire the debt at heavy discounts. CredSettle leverages the ARC low acquisition cost to negotiate even larger principal haircuts (often exceeding 60%), securing a complete release from the ARC.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Consular Attestation &amp; Power of Attorney Execution
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    NRIs can easily execute a Special Power of Attorney through Indian Consulates or apostille authorities in their country of residence. This document empowers CredSettle to inspect bank records, attend Lok Adalat conciliation hearings, and execute settlement deeds without your physical return to India.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile */}
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
                Frequently Asked Questions: NRI Debt &amp; Airport Travel
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to view detailed legal answers verified by our cross-border debt resolution professionals:
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
                <span>Statutory Citations &amp; Regulatory Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Statutory Citations &amp; Official Regulatory Authorities
              </h2>
              
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Ministry of Home Affairs (MHA) Office Memorandums:</strong> Guidelines on Issuance of Look Out Circulars in Respect of Indian Citizens and Foreign Nationals.
                </li>
                <li>
                  <strong>Bombay High Court Landmark Judgment:</strong> <em>Viraj Chetan Shah v. Union of India &amp; Ors. (2024)</em> (Quashing powers of commercial banks to request Look Out Circulars for civil debt defaults).
                </li>
                <li>
                  <strong>Constitution of India:</strong> Articles 21 (Protection of Life, Liberty and Right to Travel) and 226 (Writ Jurisdiction of High Courts).
                </li>
                <li>
                  <strong>Negotiable Instruments Act, 1881:</strong> Section 138 (Dishonour of Cheques) and Section 147 (Compounding of Offences).
                </li>
                <li>
                  <strong>Payments and Settlement Systems Act, 2007 (PSSA):</strong> Section 25 (Dishonour of Electronic Funds Transfer).
                </li>
                <li>
                  <strong>Reserve Bank of India Master Directions:</strong> Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances (Updated 2026).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Section 21 (Mandatory Updating of Settled Credit Bureau Records).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Official Legal &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman (CMS)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>India Code Legislative Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Debt Resolution Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
                  </Link>
                  <Link href="/can-loan-defaulter-go-abroad" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can Loan Defaulter Go Abroad
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
                  </Link>
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Settlement Letter
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
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
                Specialist in cross-border debt dispute resolution, banking compliance, Look Out Circular legal defense, and remote NRI compromise settlements under RBI Prudential Frameworks.
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
                  100% REMOTE NRI DEBT SETTLEMENT
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Resolve Indian Debt from Abroad
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Settle your Indian personal loans and credit cards from overseas. Avoid travel, stop recovery calls to family, and save 40% to 55% on principal dues.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                NRI Debt Settlement: Resolve It Online
              </Link>
              <div className="pt-2 flex flex-col items-center justify-center gap-1 text-[11px] text-blue-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-blue-200" />
                  <a href="tel:+918800226635" className="hover:underline font-bold text-white">
                    Call / WhatsApp: +91-8800226635
                  </a>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-blue-300">
                  <Lock className="w-3 h-3" />
                  <span>Direct Bank Settlement • Zero Travel Required</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle NRI Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>100% Online Execution:</strong> No physical travel to India needed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Family Protection:</strong> Cease-and-desist to stop agent visits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct NRE/NRO Remittance:</strong> Zero middleman funds pooling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Authentic Bank NDC:</strong> Official No Dues Certificate guaranteed.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related NRI Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/can-loan-defaulter-go-abroad"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can a Loan Defaulter Travel Abroad?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Passport &amp; immigration rules &rarr;</span>
                </Link>

                <Link
                  href="/services/personal-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Personal Loan Debt Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">40% to 55% discount process &rarr;</span>
                </Link>

                <Link
                  href="/services/anti-harassment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Anti-Harassment Legal Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop recovery calls to relatives &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
