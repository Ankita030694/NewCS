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
  Sprout,
  Tractor
} from 'lucide-react';

export default function AgriculturalLoanDefaultSarfaesiActClient() {
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
    { id: 'sarfaesi-section-31i-exemption', label: '1. Section 31(i) Farm Land Shield' },
    { id: 'kcc-financial-breakdown', label: '2. Financial Breakdown & KCC Math' },
    { id: 'legal-forum-comparison-matrix', label: '3. Legal Forum Matrix' },
    { id: 'cibil-scoring-farm-default', label: '4. CIBIL Scoring & Rebuilding' },
    { id: 'infographic-overview', label: 'Visual Defense Blueprint' },
    { id: 'step-by-step-settlement-sop', label: '5. 6-Stage Defense SOP' },
    { id: 'statutory-notice-defense', label: '6. Statutory Notice Defense' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline-milestones', label: '8. Procedural Timeline' },
    { id: 'specialized-agricultural-scenarios', label: '9. Specialized Farm Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Sources' }
  ];

  const faqs = [
    {
      q: 'Can a bank seize and auction agricultural land under the SARFAESI Act?',
      a: 'No. Section 31(i) of the SARFAESI Act, 2002 creates an absolute statutory exemption prohibiting banks from taking symbolic possession, physical possession, or conducting an auction of any agricultural land for recovering unpaid loans without civil court intervention.'
    },
    {
      q: 'What does Section 31(i) of the SARFAESI Act state about farm land?',
      a: 'Section 31(i) explicitly mandates that the provisions of the SARFAESI Act shall not apply to any security interest created in agricultural land. Any possession notice under Section 13(4) or auction notice issued against agricultural land is illegal and void ab initio.'
    },
    {
      q: 'Can a bank auction agricultural land for Kisan Credit Card (KCC) loan default?',
      a: 'No. KCC loans secured against agricultural land cannot be recovered through SARFAESI proceedings. If a bank issues SARFAESI notices for KCC defaults, farmers can challenge the action before the Debt Recovery Tribunal under Section 17 or High Court under Article 226.'
    },
    {
      q: 'How does the Supreme Court determine whether a land is truly agricultural?',
      a: 'In landmark judgments like ITC Ltd. v. Blue Coast Hotels and Indian Bank v. K. Pappireddiyar, the Supreme Court held that agricultural classification depends on revenue records (Khasra/Khatauni), actual agricultural usage, and the purpose of the security interest at the time of mortgage creation.'
    },
    {
      q: 'What legal recourse can a bank take if it cannot use the SARFAESI Act?',
      a: 'If SARFAESI is barred under Section 31(i), banks must file a standard civil recovery suit in Civil Court or file an Original Application (OA) before the Debt Recovery Tribunal (DRT) under Section 19 of the RDB Act if debt exceeds ₹20 Lakhs.'
    },
    {
      q: 'Can banks auction farm tractors, harvesters, or agricultural equipment?',
      a: 'Yes. The Section 31(i) exemption strictly protects agricultural land. Movable assets like tractors, harvesters, or irrigation equipment are hypothecated chattels, allowing lenders to seize them under standard hypothecation contract clauses, subject to RBI Fair Practices Code guidelines against physical coercion.'
    },
    {
      q: 'Can a farmer go to jail or face arrest for defaulting on an agricultural loan?',
      a: 'No. Defaulting on a Kisan Credit Card, crop loan, or farm equipment loan is strictly a civil dispute. Commercial banks cannot arrest farmers or file criminal FIRs for loan default unless there is documented evidence of forged revenue records or deliberate fraud.'
    },
    {
      q: 'What happens if a bank issues a Section 13(2) demand notice for farm land?',
      a: 'The borrower should immediately file a formal written representation and objection under Section 13(3A) within 60 days. The objection must highlight the statutory bar under Section 31(i), enclose certified revenue extract records, and demand withdrawal of SARFAESI proceedings.'
    },
    {
      q: 'Can agricultural loans and KCC dues be settled through a One-Time Settlement (OTS)?',
      a: 'Yes. All public sector and scheduled commercial banks offer specialized Agricultural One-Time Settlement (OTS) schemes approved by their boards. Distressed farmers facing crop failure or financial hardship can negotiate significant waivers on accumulated compound interest and penal charges.'
    },
    {
      q: 'How does an agricultural loan default affect CIBIL scores and future credit access?',
      a: 'When an agricultural loan defaults past 90 days, it is classified as a Non-Performing Asset (NPA) and reported to CIBIL, causing a score drop of 80 to 140 points. Completing an official OTS and obtaining a No Dues Certificate updates credit records to Settled or Closed.'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
            <Sprout className="w-3.5 h-3.5 text-emerald-300" />
            <span>Section 31(i) SARFAESI Statutory Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can Banks Auction Agricultural Land Under the SARFAESI Act?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Defaulted on your Kisan Credit Card (KCC), tractor loan, or agricultural term credit? Learn how Section 31(i) of the SARFAESI Act strictly prohibits banks from auctioning farm land, discover your statutory legal remedies, and negotiate an affordable compromise settlement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Legal Defense for Agricultural Loans</span>
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
                  <span>Statutory Farm Land Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Section 31(i) SARFAESI Act 2002 &amp; Supreme Court of India precedents.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: AGRICULTURAL LOAN DEFAULT &amp; SARFAESI PROTECTION</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Absolute Exemption Under Section 31(i):</strong> Section 31(i) of the SARFAESI Act, 2002 explicitly mandates that the Act shall not apply to any security interest created in agricultural land, rendering any bank possession or auction notice legally void.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Zero Arrest or Jail Authority:</strong> Default on a Kisan Credit Card (KCC) or farm development loan is purely a civil contractual dispute, meaning banks and recovery agents have zero power to arrest or imprison farmers.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Supreme Court Precedents Favor Farmers:</strong> Landmark apex court rulings establish that revenue records (7/12 extracts, Khasra, Khatauni) and actual agricultural cultivation govern land character, preventing banks from re-classifying farm land as commercial real estate.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Critical 60-Day Section 13(3A) Objection Window:</strong> Upon receiving a Section 13(2) demand notice, farmers have a statutory right to submit written objections within 60 days to formally place the Section 31(i) bar on the bank record.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">DRT Section 17 &amp; High Court Writs:</strong> If a lender ignores objections and issues a Section 13(4) possession notice, borrowers can secure an immediate judicial stay before the Debt Recovery Tribunal or High Court under Article 226.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Tractor &amp; Machinery Hypothecation Distinction:</strong> While agricultural land cannot be auctioned under SARFAESI, movable farm equipment like tractors and harvesters remain hypothecated assets governed by strict RBI repossession guidelines.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Commercial Rationale for 40% to 55% OTS Waivers:</strong> Because lenders cannot take summary possession of land under SARFAESI, they face multi-year civil court litigation, making bank credit committees eager to accept compromise One-Time Settlements.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Restoring Credit Bureau Health:</strong> Executing a formal OTS agreement eliminates mounting penal interest surcharges and allows borrowers to obtain an official No Dues Certificate (NDC) to update CIBIL records.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="sarfaesi-section-31i-exemption" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Exemption Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Agricultural Loan Defaults &amp; Section 31(i) SARFAESI Shield
              </h2>
              <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  Agricultural credit in India constitutes the backbone of rural economic stability, yet it operates under severe structural vulnerabilities ranging from monsoon failure and erratic commodity prices to pest infestations and supply chain disruptions. When an agricultural borrower defaults on a Kisan Credit Card (KCC) limit, crop cultivation loan, or farm development term facility, commercial banks and regional rural banks (RRBs) often attempt to initiate aggressive recovery measures. However, Parliament deliberately built an impregnable statutory shield into the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002 to prevent rural dispossession.
                </p>
                <p>
                  Under normal non-agricultural commercial lending, when a loan account crosses ninety days past due (90 DPD), it undergoes Special Mention Account (SMA) progression from SMA-0 to SMA-2 and is formally classified as a Non-Performing Asset (NPA). Lenders immediately invoke Section 13(2) and Section 13(4) of the SARFAESI Act, enabling them to seize commercial or residential properties without filing a civil court lawsuit. However, <strong>Section 31(i) of the SARFAESI Act categorically establishes that the provisions of the Act shall not apply to any security interest created in agricultural land.</strong>
                </p>
                <p>
                  This statutory exclusion means that commercial banks, cooperative banks, NBFCs, and Asset Reconstruction Companies (ARCs) possess zero legal authority to issue possession notices, assume symbolic custody, appoint receiver officers through District Magistrates, or conduct public e-auctions against agricultural land under the SARFAESI framework. When banks classify farm loans as NPAs, they must maintain standard provisioning of fifteen to twenty-five percent Tier-1 capital against sub-standard assets. Because Section 31(i) deprives lenders of summary seizure powers, banks face the grim prospect of protracted, multi-year recovery proceedings before civil courts or Debt Recovery Tribunals, providing borrowers with immense leverage to negotiate a mutually beneficial One-Time Settlement (OTS).
                </p>
              </div>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="kcc-financial-breakdown" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics &amp; Debt Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Kisan Credit Card Dues vs True Debt
              </h2>
              <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  A primary source of severe distress for farming families is the rapid, artificial escalation of their outstanding dues once an agricultural credit facility turns delinquent. Under normal operating conditions, Kisan Credit Cards and crop loans enjoy interest subvention benefits from the Central Government, offering effective borrowing rates between four and seven percent per annum. However, the moment an account slips past its annual renewal date or experiences non-payment following harvest losses, banks revoke all subvention subsidies retroactively.
                </p>
                <p>
                  Lenders then apply commercial interest rates ranging from eleven to fourteen percent per annum, coupled with compounding penal interest surcharges of two to three percent per month, ledger foliation charges, inspection penalties, and unapproved collection fees. Within eighteen to thirty-six months of default, a manageable agricultural loan of ₹8,00,000 frequently balloons into an unpayable claimed liability exceeding ₹15,50,000. Understanding the forensic distinction between legitimate principal disbursements and unearned compound penalties is the cornerstone of executing a successful debt compromise.
                </p>

                {/* 4-Sided Bordered Calculation Breakdown */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff]">
                      Representative 180-Day NPA Agricultural Loan Case Study
                    </span>
                    <span className="text-xs font-bold text-slate-500">Sanction Limit: ₹8,00,000</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="space-y-2.5">
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Original Principal Disbursed:</span>
                        <span className="font-bold text-slate-900">₹8,00,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Contractual Interest (Non-Subvented):</span>
                        <span className="font-bold text-slate-900">₹2,85,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Compounded Penal Interest (24% p.a.):</span>
                        <span className="font-bold text-red-600">₹3,40,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Bank Inspection &amp; Legal Charges:</span>
                        <span className="font-bold text-slate-900">₹1,25,000</span>
                      </div>
                      <div className="flex justify-between py-2 pt-3 font-bold text-slate-900 bg-red-50/70 px-3 rounded-lg">
                        <span>Total Bank Claimed Outstanding:</span>
                        <span className="text-red-700 font-extrabold">₹15,50,000</span>
                      </div>
                    </div>

                    <div className="space-y-2.5 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#1886ff] mb-1">
                        CredSettle Structured OTS Negotiation Target
                      </div>
                      <div className="flex justify-between py-1 border-b border-blue-200/60 text-xs">
                        <span className="text-slate-700">100% Penal Interest Waiver:</span>
                        <span className="font-bold text-emerald-700">-₹3,40,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-blue-200/60 text-xs">
                        <span className="text-slate-700">100% Legal &amp; Misc Charges Waiver:</span>
                        <span className="font-bold text-emerald-700">-₹1,25,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-blue-200/60 text-xs">
                        <span className="text-slate-700">Partial Contractual Interest Relief:</span>
                        <span className="font-bold text-emerald-700">-₹2,10,000</span>
                      </div>
                      <div className="flex justify-between py-2.5 pt-3 font-bold text-slate-900 bg-white px-3 rounded-lg border border-emerald-200 shadow-xs">
                        <span className="text-emerald-900">Final Compromise Settlement:</span>
                        <span className="text-emerald-700 font-extrabold">₹8,75,000 (44% Total Waiver)</span>
                      </div>
                      <p className="text-[11px] text-slate-500 pt-1 leading-relaxed">
                        Result: Full debt closure with official No Dues Certificate and permanent release of agricultural land revenue charge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="legal-forum-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Forum Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Legal Forum Matrix: Agricultural Debt Resolution Options
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When agricultural credit defaults, lenders evaluate various statutory forums. Understanding how each forum operates and the specific defense strategies available allows borrowers to protect their assets:
              </p>

              <div className="rounded-2xl border border-slate-200/80 bg-white shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                      <tr>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Recovery Mechanism</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Governing Statute</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Power to Seize Farm Land</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Average Timeline</th>
                        <th className="p-3.5 font-bold text-[#1886ff]">Borrower Defense Strategy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">SARFAESI Act Action</td>
                        <td className="p-3.5 border-r border-slate-200/80">SARFAESI Act, 2002</td>
                        <td className="p-3.5 text-emerald-700 font-bold border-r border-slate-200/80">NO (Strictly Barred by Sec 31(i))</td>
                        <td className="p-3.5 border-r border-slate-200/80">60 to 90 Days</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">File Section 13(3A) objection &amp; DRT stay under Section 17</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Civil Recovery Suit</td>
                        <td className="p-3.5 border-r border-slate-200/80">Code of Civil Procedure, 1908</td>
                        <td className="p-3.5 text-amber-700 font-semibold border-r border-slate-200/80">Only after final decree</td>
                        <td className="p-3.5 border-r border-slate-200/80">3 to 7 Years</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Submit Written Statement citing crop damage &amp; seek OTS</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Debt Recovery Tribunal (DRT)</td>
                        <td className="p-3.5 border-r border-slate-200/80">RDB Act, 1993 (Only &gt;₹20 Lakhs)</td>
                        <td className="p-3.5 text-amber-700 font-semibold border-r border-slate-200/80">Through Recovery Officer</td>
                        <td className="p-3.5 border-r border-slate-200/80">2 to 4 Years</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Challenge Statement of Account &amp; negotiate compromise OTS</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">National Lok Adalat</td>
                        <td className="p-3.5 border-r border-slate-200/80">Legal Services Authorities Act, 1987</td>
                        <td className="p-3.5 text-emerald-700 font-semibold border-r border-slate-200/80">NO (Consent Award Only)</td>
                        <td className="p-3.5 border-r border-slate-200/80">Single Day Sitting</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Execute binding OTS consent decree with maximum interest waiver</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Bank Agricultural OTS Scheme</td>
                        <td className="p-3.5 border-r border-slate-200/80">RBI Master Directions &amp; Bank Policy</td>
                        <td className="p-3.5 text-emerald-700 font-semibold border-r border-slate-200/80">NO (Voluntary Settlement)</td>
                        <td className="p-3.5 border-r border-slate-200/80">30 to 60 Days</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Submit hardship dossier to secure 40% to 55% waiver with NDC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-scoring-farm-default" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Algorithms &amp; Scoring Trajectory</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Credit Bureau Impact: Rebuilding CIBIL After Farm Default
              </h2>
              <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  Agricultural loan delinquency triggers significant repercussions across credit bureaus, including TransUnion CIBIL, Experian, CRIF High Mark, and Equifax. Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), commercial banks and rural credit institutions upload monthly repayment records to bureau databases. The standard credit scoring algorithm distributes a 900-point score across five critical components: payment history (35 percent weight), credit exposure and utilization (30 percent weight), credit history duration (15 percent weight), credit portfolio mix (10 percent weight), and recent credit inquiries (10 percent weight).
                </p>
                <p>
                  When a Kisan Credit Card or agricultural term loan crosses 90 days of non-payment, the bureau flag shifts from standard status to Sub-Standard NPA, immediately deducting 80 to 140 points from the borrower&apos;s score. If the bank initiates court litigation or files an Original Application before the DRT, a severe &quot;Suit Filed&quot; or &quot;Willful Default&quot; tag is stamped onto the report, resulting in systemic loan rejections across all formal banking channels.
                </p>
                <p>
                  Executing a structured One-Time Settlement provides the definitive legal pathway to halt this score erosion. Upon full remittance of the agreed compromise sum, the bank must issue an unconditional No Dues Certificate and report the account as &quot;Settled&quot; or &quot;Closed&quot; under Section 21 of CICRA within thirty days. Borrowers can then initiate credit rebuilding by servicing secured credit cards or gold loans, steadily restoring their credit score above 750 within twelve to eighteen months.
                </p>
              </div>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Roadmap: 6-Stage Farm Loan Defense Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive visual roadmap outlines the sequential, battle-tested legal and procedural blueprint to challenge unlawful SARFAESI notices, enforce Section 31(i) agricultural exemptions, and negotiate a full compromise settlement:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/agricultural-loan-default-sarfaesi-act.jpg"
                    alt="Agricultural Loan Default and SARFAESI Act Defense Blueprint India"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Agricultural Debt Defense Architecture • SARFAESI Act Section 31(i)</span>
                  <a
                    href="/images/infographics/agricultural-loan-default-sarfaesi-act.jpg"
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

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-settlement-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Defense Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP: Agricultural Loan Settlement Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this proven six-stage standard operating procedure to defend your agricultural property against unlawful bank recovery and secure a formal compromise settlement:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 1–7</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Loan Agreement, Sanction Terms &amp; Title Document Forensic Audit
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Examine all original sanction letters, mortgage deeds, and KCC limit renewals. Cross-examine claimed bank interest rates against RBI agricultural master directions, isolating unapproved penal compounding, insurance deductions, and un-subvented charges.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 8–15</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Revenue Records Verification &amp; Section 31(i) Evidence Compilation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Procure certified land revenue records, including 7/12 extracts, Khasra, Khatauni, and Patwari crop verification certificates. Establish documented proof of ongoing agricultural activity to construct an unassailable statutory defense under Section 31(i).
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 16–30</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Section 13(3A) Statutory Objection Representation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Serve a formal statutory representation upon the bank Authorised Officer within 60 days of receiving a Section 13(2) notice. Cite Section 31(i) and Supreme Court rulings, demanding the immediate withdrawal of SARFAESI proceedings against the farm land.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 31–45</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    DRT Section 17 Securitisation Application &amp; Stay Petition
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If the lender attempts physical or symbolic possession under Section 13(4), file an immediate Securitisation Application before the jurisdictional Debt Recovery Tribunal under Section 17. Secure an interim stay against possession and auction actions.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 46–60</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Bilateral Agricultural OTS Proposal &amp; Credit Committee Review
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Leverage the legal roadblock to submit a structured One-Time Settlement dossier to the bank Settlement Advisory Committee. Present genuine crop loss records to negotiate a 40% to 55% waiver on accumulated dues.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 61–90</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Compromise Remittance &amp; No Dues Certificate (NDC) Issuance
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Remit the approved settlement amount directly into the bank loan account against a verified sanction letter. Secure the formal No Dues Certificate, retrieve original title deeds, and release revenue charges at the Sub-Registrar office.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections &amp; Legal Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense: Legal Protections for Farmers
              </h2>
              <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  Defending against bank legal notices in agricultural loan defaults requires a comprehensive understanding of Indian statutory banking jurisprudence. Lenders frequently deploy a combination of demand notices under the SARFAESI Act, dishonored cheque complaints under Section 138 of the Negotiable Instruments Act, 1881, and electronic mandate failure notices under Section 25 of the Payment and Settlement Systems Act, 2007. Each of these statutory mechanisms possesses distinct legal thresholds and procedural safeguards.
                </p>
                <p>
                  Under Section 31(i) of the SARFAESI Act, 2002, the bar against proceeding against agricultural land is absolute and non-derogable. The Supreme Court of India has reaffirmed in landmark judgments including <em>ITC Ltd. v. Blue Coast Hotels Ltd. (2018)</em> and <em>Indian Bank v. K. Pappireddiyar (2018)</em> that the character of land must be determined based on official revenue records, agricultural entries in revenue extracts, and actual agricultural activity rather than the mere nomenclature in a bank loan mortgage document. If a bank issues a notice under Section 13(2) demanding possession of farmland, the borrower must submit a formal response under Section 13(3A) within sixty days, placing these certified revenue extracts on record.
                </p>
                <p>
                  When lenders initiate quasi-criminal proceedings under Section 138 of the NI Act or Section 25 of the PSSA for security cheques or NACH auto-debit bounces, borrowers must understand that these are bailable summons cases. Securing bail through counsel on the first appearance is a straightforward procedural step. Borrowers can then establish that the cheques were issued strictly as undated loan security rather than in discharge of a crystallized debt, opening the gateway for bilateral conciliation and compounding under Section 147 of the NI Act.
                </p>
                <p>
                  Furthermore, the Reserve Bank of India Fair Practices Code strictly prohibits lenders and their recovery agents from engaging in physical intimidation, verbal harassment, or visiting borrowers outside the designated hours of 8:00 AM to 7:00 PM. Banks are also mandated to align agricultural recovery with regional crop cycles and harvest seasons, providing moratoria during documented droughts or natural disasters.
                </p>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Grievance Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Escalation Matrix: Institutional Grievance Redress
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If branch managers or recovery agents disregard Section 31(i) statutory protections or engage in unlawful recovery harassment, escalate through this structured 3-tier regulatory hierarchy:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Branch Manager &amp; Grievance Redressal Officer (GRO)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 7–10 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Formal Written Objection &amp; Revenue Record Submission
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Submit a registered written complaint to the branch manager and bank internal Grievance Redressal Officer. Enclose certified revenue extracts proving the agricultural nature of the property and request the formal stoppage of unlawful SARFAESI recovery notices.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: Principal Nodal Officer (PNO) &amp; Zonal Management
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 14–21 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Escalation for Compromise Settlement &amp; Harassment Redressal
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If the branch fails to withdraw improper notices or negotiate in good faith, escalate to the Principal Nodal Officer at the bank head office. Request the referral of the loan account to the Agricultural One-Time Settlement Committee for a structured compromise.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: RBI Integrated Ombudsman &amp; High Court Writs
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 30 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Regulatory Complaint via CMS Portal &amp; Article 226 Petitions
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    File a regulatory complaint on the RBI CMS portal (cms.rbi.org.in) under the Reserve Bank - Integrated Ombudsman Scheme, 2021 for violation of agricultural lending norms. Concurrently, file a Writ Petition under Article 226 before the High Court if physical possession is threatened.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="procedural-timeline-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Procedural Timeline: Default to No Dues Certificate
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Navigating an agricultural loan resolution requires understanding key procedural milestones from initial default to final debt closure:
              </p>

              <div className="rounded-2xl border border-slate-200/80 bg-white shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                      <tr>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Timeline Phase</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Institutional Event</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Statutory Limitation</th>
                        <th className="p-3.5 font-bold text-[#1886ff]">Strategic Borrower Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Days 1–90</td>
                        <td className="p-3.5 border-r border-slate-200/80">SMA-0 to SMA-2 Delinquency</td>
                        <td className="p-3.5 border-r border-slate-200/80">Prior to NPA declaration</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Audit loan ledger &amp; seek crop restructuring if applicable</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Day 90+</td>
                        <td className="p-3.5 border-r border-slate-200/80">NPA Classification &amp; Demand Notice</td>
                        <td className="p-3.5 border-r border-slate-200/80">Section 13(2) issuance</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">File Section 13(3A) representation invoking Section 31(i)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Months 3–4</td>
                        <td className="p-3.5 border-r border-slate-200/80">Legal Roadblock &amp; OTS Window</td>
                        <td className="p-3.5 border-r border-slate-200/80">Bilateral negotiation stage</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Submit hardship dossier to bank OTS Settlement Committee</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Months 5–6</td>
                        <td className="p-3.5 border-r border-slate-200/80">OTS Approval &amp; Remittance</td>
                        <td className="p-3.5 border-r border-slate-200/80">Within 30 days of sanction</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Remit compromise amount and obtain formal No Dues Certificate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-agricultural-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Farm Credit Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: Crop Loss, Tractors &amp; ARCs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Agricultural lending encompasses diverse credit structures with distinct legal implications:
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Sprout className="w-4 h-4 text-emerald-600" />
                    Crop Failure, Drought &amp; State Calamity Relief
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When district administrations declare a drought, flood, or natural calamity, RBI Master Directions require banks to convert short-term crop loans into medium-term loans with a moratorium of one to two years. Farmers can present calamity notifications to restructure dues and halt all adverse recovery actions.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Tractor className="w-4 h-4 text-[#1886ff]" />
                    Tractor &amp; Farm Equipment Hypothecation vs Land Exemption
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    While agricultural land cannot be auctioned under SARFAESI, movable farm equipment like tractors and harvesters are hypothecated chattels. Lenders can repossess equipment under contract terms, but they must strictly adhere to RBI Fair Practices Code, provide advance notice, and avoid physical force.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Agricultural Loans Sold to Asset Reconstruction Companies (ARCs)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When banks assign delinquent agricultural loan portfolios to ARCs under Section 5 of the SARFAESI Act, ARCs inherit the same statutory restrictions. They cannot enforce SARFAESI on farmland. Because ARCs acquire bad loan portfolios at deep discounts, they are highly motivated to negotiate fast compromise settlements.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Joint Ancestral Mortgages and Co-Borrower Liability
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    In joint family farm holdings where multiple co-owners execute mortgage deeds, banks cannot partition or auction undivided agricultural shares under SARFAESI. The Section 31(i) exemption protects all undivided ancestral land parcels against summary disposal.
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
                Frequently Asked Questions: Farm Loan Defaults &amp; SARFAESI
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
                Statutory References &amp; Official Regulatory Citations
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>SARFAESI Act, 2002:</strong> Section 31(i) (Statutory Exemption for Agricultural Land) and Sections 13(2), 13(3A), 13(4), and 17.
                </li>
                <li>
                  <strong>Supreme Court of India:</strong> <em>ITC Ltd. v. Blue Coast Hotels Ltd. (2018) 15 SCC 99</em> and <em>Indian Bank v. K. Pappireddiyar (2018) 18 SCC 252</em> (Revenue Records Determine Agricultural Character).
                </li>
                <li>
                  <strong>Recovery of Debts and Bankruptcy Act, 1993:</strong> Section 19 (Tribunal Jurisdiction for Claims Exceeding ₹20 Lakhs).
                </li>
                <li>
                  <strong>Reserve Bank of India:</strong> Master Direction on Priority Sector Lending - Agriculture and Master Direction on Fair Practices Code for Lenders (Updated 2026).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Section 21 (Mandatory Credit Bureau Dispute Rectification).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Official Legal &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1"
                  >
                    <span>Reserve Bank of India (rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1"
                  >
                    <span>RBI CMS Portal (cms.rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1"
                  >
                    <span>TransUnion CIBIL (cibil.com)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1"
                  >
                    <span>India Code Portal (indiacode.nic.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1"
                  >
                    <span>National Legal Services Authority (nalsa.gov.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1"
                  >
                    <span>National Cyber Crime Portal (cybercrime.gov.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
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
                Specialized in banking compliance, SARFAESI Section 31(i) agricultural exemptions, Kisan Credit Card dispute resolution, and NPA settlement negotiations across Indian debt recovery tribunals.
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
                  100% CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Facing Farm Land Auction Threats?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our agricultural debt specialists protect your farm land under Section 31(i) SARFAESI Act, halt recovery harassment, and negotiate up to 55% compromise loan settlements.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Legal Defense for Agricultural Loans
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
                  <span><strong>RBI &amp; SARFAESI Compliance:</strong> 100% lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated debt resolution specialists.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
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
