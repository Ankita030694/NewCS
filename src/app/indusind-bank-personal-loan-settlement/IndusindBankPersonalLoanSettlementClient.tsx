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
  CreditCard,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark
} from 'lucide-react';

export default function IndusindBankPersonalLoanSettlementClient() {
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
    { id: 'npa-dynamics', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'settlement-math', label: '2. Financial Breakdown & Settlement Math' },
    { id: 'comparison-matrix', label: '3. Resolution Pathways Comparison Matrix' },
    { id: 'cibil-impact', label: '4. CIBIL Algorithm & Credit Rebuilding' },
    { id: 'infographic-overview', label: '5. Visual Institutional Blueprint' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Institutional Settlement SOP' },
    { id: 'statutory-defense', label: '7. Statutory Notice Defense & Legal Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance & Escalation Matrix' },
    { id: 'chronological-timeline', label: '9. Procedural Milestones & Timelines' },
    { id: 'specialized-scenarios', label: '10. Specialized Real-World Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is the official IndusInd Bank personal loan settlement policy?',
      a: 'IndusInd Bank personal loan settlement is an institutional compromise framework administered by its Stressed Asset Management Group. Eligible borrowers experiencing genuine financial hardship can settle delinquent personal loans and credit cards with 100% penal interest waivers and 40% to 55% principal haircuts.'
    },
    {
      q: 'When does IndusInd Bank consider a personal loan eligible for a settlement?',
      a: 'IndusInd Bank considers unsecured personal loans eligible for a compromise settlement after an account crosses 90 days of continuous non-payment and is classified as a Non-Performing Asset (NPA), triggering mandatory Reserve Bank of India Tier-1 provisioning requirements.'
    },
    {
      q: 'What percentage of waiver or haircut can I negotiate with IndusInd Bank?',
      a: 'Borrowers typically secure a 100% waiver on accrued penal interest, late fees, and bounce charges. On the core unamortized principal, IndusInd Bank generally sanctions a 40% to 55% haircut depending on the duration of default and documented financial distress.'
    },
    {
      q: 'How should I respond to an advocate notice or Section 25 NACH notice?',
      a: 'Never ignore statutory advocate notices. Serve a formal legal reply through counsel within 15 to 30 days, refuting criminal intent under Section 25 of the PSSA, documenting verified financial hardship, and proposing an amicable One-Time Settlement compromise.'
    },
    {
      q: 'What should I do if I receive a National Lok Adalat notice?',
      a: 'Attend the Lok Adalat session either personally or through authorized legal counsel. Negotiating directly with IndusInd Bank nodal officers enables you to secure an advantageous compromise resulting in a binding, non-appealable award under Section 21 of the Legal Services Authorities Act.'
    },
    {
      q: 'Can IndusInd Bank recovery agents visit my home or workplace without notice?',
      a: 'Under the Reserve Bank of India Fair Practices Code, recovery agents are strictly prohibited from visiting workplaces unannounced, harassing family members, or calling outside 8:00 AM to 7:00 PM. Serving a formal legal representation through CredSettle halts unauthorized visits.'
    },
    {
      q: 'Can IndusInd Bank file an FIR or arrest me for personal loan default?',
      a: 'Unsecured loan default is strictly a civil contractual breach, not a criminal offense. Police authorities cannot register an FIR or make arrests. While Section 25 NACH dishonor involves quasi-criminal provisions, it is a compoundable matter routinely resolved through settlement.'
    },
    {
      q: 'What key terms must be verified in an IndusInd settlement sanction letter?',
      a: 'An authentic IndusInd settlement letter must be issued on official bank letterhead, originate from a verified @indusind.com email, specify exact loan account numbers, detail agreed settlement tranches, and covenant complete legal notice withdrawal and NOC issuance.'
    },
    {
      q: 'How will settling an IndusInd loan impact my credit score?',
      a: "IndusInd Bank reports settled accounts to credit bureaus as 'Settled' with outstanding balances cleared to zero. This halts monthly delinquent DPD reporting. Borrowers can rebuild a 750+ score within 18 to 24 months, or later convert status to 'Closed' under Section 21 of CICRA."
    },
    {
      q: 'What is the timeline to obtain the No Objection Certificate (NOC)?',
      a: 'After remitting the sanctioned settlement amount directly into your IndusInd loan account within the agreed schedule, the bank updates its Core Banking System and issues the official No Objection Certificate (NOC) within 30 to 45 business days.'
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
            <span>IndusInd Bank Stressed Asset Resolution Framework</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            IndusInd Bank Personal Loan Settlement
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Institutional framework for resolving delinquent IndusInd Bank personal loans and linked credit card debt. Learn how to bypass third-party collection agencies, navigate Circle Debt Resolution Desks, and secure 40% to 55% OTS waivers with an official No Objection Certificate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Facing IndusInd Loan Default? Request Settlement Evaluation</span>
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
                  <span>Institutional Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by Reserve Bank of India Prudential Norms and Fair Practices Code.
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
                <span>EXECUTIVE BRIEF: INDUSIND BANK PERSONAL LOAN SETTLEMENT CRUX</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Institutional Mandate:</strong> Adjudicated directly by IndusInd Stressed Asset Management Group after 90 days of default (NPA).
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Zero SARFAESI Risk:</strong> Unsecured personal credit facilities carry zero collateral mortgage or asset attachment powers.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">100% Penal Waiver:</strong> Complete waiver across compounding penal interest, overdue surcharges, and NACH bounce fees.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">40% to 55% Haircut:</strong> Realistic compromise target negotiated directly on core unamortized principal.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Cross-Facility Consolidation:</strong> Combined resolution packaging personal loans alongside linked IndusInd credit card balances.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Legal Notice Defense:</strong> Timely statutory legal replies halt Section 25 PSSA and advocate demand notices.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Lok Adalat Accord:</strong> Opportunity to secure a non-appealable, binding judicial decree under Section 21 of LSA Act.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Guaranteed Closure:</strong> Official bank settlement sanction letter and No Objection Certificate within 30 to 45 days.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="npa-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Banking Regulations &amp; Prudential Guidelines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics &amp; NPA Classification in IndusInd Bank Personal Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                IndusInd Bank actively disburses unsecured personal loans and premium credit cards to salaried executives and self-employed professionals. When unforeseen economic shocks arise, such as unexpected corporate layoffs, business cashflow contraction, or severe medical emergencies, servicing monthly equated installments becomes impossible, leading to rapid delinquency under Reserve Bank of India prudential norms.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Delinquent accounts transition through Special Mention Account brackets: SMA-0 (1 to 30 days), SMA-1 (31 to 60 days), and SMA-2 (61 to 90 days). Once non-payment exceeds 90 days, IndusInd Bank must classify the exposure as a Non-Performing Asset (NPA). Under RBI capital adequacy norms, this classification mandates setting aside 15% to 25% loan-loss provisions from Tier-1 capital reserves.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Because personal loans lack underlying mortgage collateral, IndusInd Bank cannot invoke summary asset seizure under the SARFAESI Act of 2002. Commercial litigation is time-consuming and expensive. Consequently, IndusInd Bank Stressed Asset Management Group is commercially incentivized to approve One-Time Settlements (OTS) to release locked capital and purge non-performing assets from balance sheets.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Principal vs. Inflated Penal Charges
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Upon loan default, IndusInd Bank automated banking systems compound ledger balances by levying 24% to 36% penal interest per annum, recurring NACH bounce charges of ₹500 plus GST, and progressive late fees. Within six months, these artificial non-statutory additions inflate the gross ledger claim by 30% to 45% above genuine unamortized principal.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Strategic debt resolution starts with forensic ledger reconciliation to strip away unauthorized charges. IndusInd Bank credit committees possess the authority to waive 100% of accrued penal interest, bounce penalties, and administrative fees. When backed by verified financial hardship documentation, the bank routinely sanctions a 40% to 55% principal haircut, establishing an affordable compromise.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative IndusInd Bank 180-Day NPA Settlement Breakdown</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹10 Lakh Baseline Claim</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Financial Component</th>
                        <th className="p-3">Pre-Settlement Ledger</th>
                        <th className="p-3">IndusInd Credit Committee Waiver</th>
                        <th className="p-3 text-right">Final Payable Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Unamortized Principal Balance</td>
                        <td className="p-3">₹7,00,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">45% Principal Haircut (₹3,15,000)</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹3,85,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Accrued Regular &amp; Penal Interest</td>
                        <td className="p-3">₹2,40,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Complete Charge Waiver</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹0</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Late Surcharges &amp; NACH Bounce Fees</td>
                        <td className="p-3">₹60,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Administrative Waiver</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹0</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Compromise Evaluation</td>
                        <td className="p-3 text-rose-600">₹10,00,000</td>
                        <td className="p-3 text-emerald-700">₹6,15,000 Total Relief (61.5% Savings)</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹3,85,000 Final OTS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Strategic Assessment</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparative Analysis: IndusInd Bank Debt Resolution Pathways
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers facing debt distress with IndusInd Bank must weigh their legal and financial alternatives objectively. While loan restructuring merely extends loan tenors and inflates cumulative interest, unmanaged default triggers aggressive collection harassment and statutory notices. An institutional One-Time Settlement provides superior financial relief and complete legal finality.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Resolution Mechanism</th>
                      <th className="p-3">Financial Relief</th>
                      <th className="p-3">Legal Protection</th>
                      <th className="p-3">CIBIL Bureau Remark</th>
                      <th className="p-3">Standard Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="p-3 text-emerald-600 font-semibold">40% to 55% Total Reduction</td>
                      <td className="p-3">Complete Discharge &amp; Notice Withdrawal</td>
                      <td className="p-3 font-mono text-[11px]">Settled / Zero Balance</td>
                      <td className="p-3">30 to 60 Days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Tenor Restructuring</td>
                      <td className="p-3 text-amber-600">0% Haircut (Higher Cumulative Interest)</td>
                      <td className="p-3">Conditional upon Regular Servicing</td>
                      <td className="p-3 font-mono text-[11px]">Restructured Account</td>
                      <td className="p-3">45 to 90 Days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Civil Court Litigation</td>
                      <td className="p-3 text-rose-600">Heavy Legal &amp; Defense Costs</td>
                      <td className="p-3">Adversarial Judicial Decrees</td>
                      <td className="p-3 font-mono text-[11px]">Suit Filed / Wilful Default</td>
                      <td className="p-3">2 to 5 Years</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">National Lok Adalat</td>
                      <td className="p-3 text-emerald-600">35% to 50% Mutual Compromise</td>
                      <td className="p-3">Section 21 Non-Appealable Decree</td>
                      <td className="p-3 font-mono text-[11px]">Settled in Lok Adalat</td>
                      <td className="p-3">Sitting Date Basis</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Unmanaged Default</td>
                      <td className="p-3 text-rose-600">Accelerated Penal Compounding</td>
                      <td className="p-3 text-rose-600">Section 25 / Section 138 Warrants</td>
                      <td className="p-3 font-mono text-[11px] text-rose-600">Written Off / Default</td>
                      <td className="p-3">Indefinite Distress</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Scoring Mechanics, Algorithms &amp; Score Rehabilitation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                TransUnion CIBIL and peer credit bureaus calculate creditworthiness using five key mathematical pillars: 35% Payment History, 30% Credit Exposure, 15% Credit Age, 10% Credit Mix, and 10% Inquiries. Defaulting on an IndusInd personal loan damages the 35% payment history pillar, causing credit scores to plunge by 120 to 180 points.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Executing an authorized settlement prompts IndusInd Bank to update bureau records to &quot;Settled&quot; with an outstanding ledger balance of zero. While this reflects a past compromise, it permanently halts monthly delinquent Days Past Due reporting and stops aggressive recovery action.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Rebuilding a 750+ credit score is achievable within 18 to 24 months by utilizing a secured credit card backed by a fixed deposit and keeping credit utilization below 30%. Under Section 21 of CICRA 2005, borrowers can later pay the waived variance to convert &quot;Settled&quot; into &quot;Closed&quot; status.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                IndusInd Bank Personal Loan Settlement Roadmap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This dedicated visual flowchart details the six institutional phases necessary to transition an overdue IndusInd Bank personal loan and credit card account from aggressive recovery agency harassment into an officially sanctioned, legally binding compromise settlement.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/indusind-bank-personal-loan-settlement.jpg"
                    alt="IndusInd Bank Personal Loan Settlement Roadmap and 6-Stage Process Flowchart"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Institutional Resolution Architecture • RBI Compliant</span>
                  <a
                    href="/images/infographics/indusind-bank-personal-loan-settlement.jpg"
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
                6. Six-Stage SOP: Negotiating IndusInd Bank Personal Loan Settlements
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Navigating IndusInd Bank&apos;s settlement hierarchy requires following a structured protocol rather than speaking with third-party telecallers. Adhere to this six-stage institutional framework to achieve an authorized compromise directly with the bank.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Forensic Loan Account Audit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Examine complete account statements from disbursal. Isolate initial principal, deduct cleared EMIs, unbundle 24% to 36% compounding penal interest, and strip away invalid bounce fees to determine the genuine net principal baseline.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Comprehensive Hardship Dossier Compilation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Assemble verified documentation proving bona fide financial distress. Compile corporate layoff letters, medical discharge records, reduced bank cashflows, or audited business loss statements to substantiate legitimate non-wilful inability to service the debt.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Stressed Asset Management Group Representation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Bypass third-party recovery vendors by submitting a formal legal representation to IndusInd Bank Stressed Asset Management Group and Principal Nodal Officer, invoking RBI Fair Practices Code protections and halting unauthorized visits.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Bilateral Credit Committee Negotiations
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Engage in structured compromise dialogue with IndusInd circle credit authorities. Leverage the lack of mortgaged collateral and regulatory NPA provisioning pressures to secure 100% penal interest waiver and a 40% to 55% principal reduction.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Settlement Sanction Letter Legal Vetting
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Thoroughly examine the formal sanction letter. Verify that it is printed on official IndusInd Bank letterhead, originates from an authorized @indusind.com email, specifies payment tranches, and guarantees the withdrawal of all legal notices.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Direct Loan Remittance &amp; NOC Procurement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Deposit the sanctioned settlement amount directly into your IndusInd loan account through traceable RTGS or NEFT. Retain stamped bank challans, confirm Core Banking System ledger zeroing, and obtain the official No Objection Certificate within 30 to 45 business days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Notice Defense &amp; Borrower Legal Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an IndusInd personal loan remains delinquent past 90 days, empanelled advocates dispatch statutory demand notices. Understanding your legal rights under each notice type eliminates intimidation and sets the stage for an amicable compromise.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Section 25 PSSA NACH Mandate Notice</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dispatched under the Payment and Settlement Systems Act 2007 following electronic mandate dishonor. Serving a formal legal reply within 30 days establishing genuine financial distress disproves fraudulent intent and redirects proceedings toward an amicable One-Time Settlement.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Section 138 Negotiable Instruments Act</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Issued when security cheques deposited during loan disbursal bounce. A formal legal reply served through counsel within 15 days establishes that instruments were given as security rather than for an ascertained debt, barring summary magistrate proceedings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Arbitration Section 21 Jurisdictional Challenge</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    IndusInd Bank often initiates arbitration under Section 21. Following landmark Supreme Court rulings in Perkins Eastman and TRF Limited, unilateral arbitrator appointments are void. Borrowers can file Section 12(5) objections, staying proceedings and compelling bilateral settlement.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>DRT Section 19 &amp; RBI Fair Practices Code</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Debts Recovery Tribunals have jurisdiction only over claims exceeding ₹20 Lakhs under the Recovery of Debts Act. For retail loans, the RBI Fair Practices Code strictly bans recovery agents from calling before 8:00 AM or after 7:00 PM, or contacting employers and relatives.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Three-Tier Escalation Matrix for IndusInd Bank Grievances
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When recovery vendors violate conduct guidelines or local branches refuse hardship representations, borrowers must escalate through IndusInd Bank internal grievance mechanisms and regulatory oversight channels.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Remit &amp; Scope of Intervention</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">IndusInd Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Investigation into abusive recovery agency conduct, disputed penal interest charges, and initial settlement review.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Mumbai Corporate Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Direct regulatory review of Fair Practices Code violations, harassment complaints, and referral to circle stressed asset desks.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Binding regulatory adjudication through cms.rbi.org.in for severe statutory breaches, predatory recovery practices, and unfair banking conduct.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Resolution Timeline: From Default to NOC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                An IndusInd personal loan default progresses through specific regulatory phases. Identifying where your delinquent account sits along this timeline reveals the optimal window for initiating negotiations to secure maximum principal waivers.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Interval</th>
                      <th className="p-3">Asset Classification</th>
                      <th className="p-3">Bank Recovery Actions</th>
                      <th className="p-3">Recommended Borrower Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Automated SMS alerts, email reminders, and soft telephonic collection calls.</td>
                      <td className="p-3">Assess budget viability; avoid taking fresh high-interest digital credit to service EMIs.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Intensified telecaller outreach and preliminary demand letters from collection teams.</td>
                      <td className="p-3">Assemble authenticated hardship proofs including job severance letters and medical bills.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Final pre-NPA warnings and initial allocation of file to external recovery agencies.</td>
                      <td className="p-3">Assert RBI Fair Practices Code rights against unauthorized third-party harassment.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Classification</td>
                      <td className="p-3">Tier-1 capital provisioning triggered; file transferred to Stressed Asset Group.</td>
                      <td className="p-3">Conduct forensic account audit and engage institutional debt settlement specialists.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Prime OTS Window</td>
                      <td className="p-3">Issuance of Section 25 PSSA NACH notices or pre-litigation Lok Adalat summons.</td>
                      <td className="p-3 font-bold text-slate-900">Execute bilateral compromise negotiations targeting a 40% to 55% principal waiver.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 and Beyond</td>
                      <td className="p-3 font-mono text-[11px]">Write-off / ARC Sale</td>
                      <td className="p-3">Arbitration proceedings initiated or portfolio assigned to Asset Reconstruction Companies.</td>
                      <td className="p-3">Remit sanctioned settlement tranches directly and secure official No Objection Certificate.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Complex Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Handling Complex Scenarios: Combined Credit Cards, Layoffs &amp; ARCs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Debt distress rarely follows a uniform pattern. Standard collection approaches fail to address complex multi-product liabilities and sudden economic shocks. Below are strategic resolution tactics for specialized IndusInd Bank loan scenarios.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Combined Personal Loan &amp; Credit Card Exposure
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers holding an IndusInd personal loan alongside high-limit credit cards face cross-default acceleration. Strategic resolution consolidates all unsecured facilities into a unified dossier, negotiating a collective compromise to avoid piecemeal litigation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Corporate Layoffs &amp; Sudden Tech Retrenchment
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Salaried corporate executives frequently face sudden insolvency following workforce reductions. Presenting formal severance letters and depleted bank statements proves absence of wilful default, accelerating credit committee approval for substantial principal haircuts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Business Proprietorship Cashflow Collapse
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Entrepreneurs who availed personal loans to sustain working capital during business downturns can establish commercial distress through audited financial statements and GST filings, proving that non-payment stems from genuine commercial loss rather than intentional evasion.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Asset Reconstruction Company (ARC) Portfolio Sales
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When IndusInd Bank assigns delinquent personal loans to ARCs under Section 5 of SARFAESI, recovery authority transfers. Because ARCs acquire distressed retail debt pools at steep discounts, seasoned negotiators can achieve settlements with total waivers exceeding 60% to 70%.
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
                Frequently Asked Questions About IndusInd Bank Personal Loan Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, legally verified answers addressing the most common borrower inquiries regarding IndusInd Bank&apos;s personal loan settlement process, waiver expectations, advocate legal notices, Lok Adalat proceedings, and credit score rehabilitation.
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
                Official Regulatory References &amp; Legal Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Reserve Bank of India:</strong> Master Direction on Fair Practices Code for Commercial Banks and Stressed Asset Classification Norms (Updated 2026).
                </li>
                <li>
                  <strong>Payment and Settlement Systems Act, 2007:</strong> Section 25, Statutory Framework Governing Dishonour of Electronic Funds Transfer Mandates.
                </li>
                <li>
                  <strong>Legal Services Authorities Act, 1987:</strong> Section 21, Finality and Non-Appealable Status of National and Pre-Litigation Lok Adalat Awards.
                </li>
                <li>
                  <strong>Arbitration and Conciliation Act, 1996:</strong> Sections 12(5), 16, and 21, Invalidity of Unilateral Arbitrator Appointments and Supreme Court Rulings (Perkins Eastman / TRF Ltd).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Section 21, Statutory Rules for Bureau Dispute Rectification and Conversion of Account Remarks.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Defense
                  </Link>
                  <Link href="/lok-adalat-personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Lok Adalat Loan Settlement
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice for Loan
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Protection
                  </Link>
                  <Link href="/bank-recovery-case-in-court" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Court Recovery Cases
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/cibil-score-kaise-badhaye-after-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get No Objection Certificate
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
                Expert in banking compliance, IndusInd Bank NPA resolution, recovery defense, and compromise negotiations with extensive experience representing stressed retail borrowers before banking ombudsmen and credit committees.
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
                  CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  IndusInd Loan Notice or Recovery Threats?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior debt resolution specialists halt recovery agent harassment, respond to advocate notices, and negotiate up to 55% waivers directly with IndusInd Bank Stressed Asset Management Group.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Request Free Settlement Evaluation
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
                  <span>Direct Bank Settlement • 100% RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked resolution fee structure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Account Remittance:</strong> No middleman fund handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Complete RBI Compliance:</strong> Strict Fair Practices enforcement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified No Objection Certificate:</strong> Official bank closure guarantee.</span>
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
                  href="/lok-adalat-personal-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Lok Adalat Loan Settlement Procedure
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Section 21 binding decree guide &rarr;</span>
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
