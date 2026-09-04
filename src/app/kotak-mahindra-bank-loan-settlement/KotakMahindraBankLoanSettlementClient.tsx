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
  Landmark
} from 'lucide-react';

export default function KotakMahindraBankLoanSettlementClient() {
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
      q: 'What is the official Kotak Mahindra Bank personal loan settlement policy?',
      a: "Kotak Mahindra Bank's personal loan settlement policy is a structured compromise framework administered by its Stressed Assets Management Group (SAMG). It permits borrowers experiencing severe financial distress, medical emergencies, or job loss to resolve outstanding debt via a one-time lump sum or short-term tranches, waiving penal charges and discounting principal."
    },
    {
      q: 'How does Kotak handle defaulted 811 digital credit lines and instant personal loans?',
      a: 'Defaulted Kotak 811 digital credit lines and micro-personal loans follow an automated pre-collection lifecycle before being routed to external telecalling agencies. When delinquencies exceed 90 days, the bank shifts from automated recovery algorithms to formal compromise settlements or bulk portfolio sales to asset reconstruction companies.'
    },
    {
      q: 'What percentage of waiver can I negotiate on a delinquent Kotak Mahindra loan?',
      a: 'Borrowers routinely secure a 100% waiver on accrued penal interest, late payment penalties, and NACH bounce fees. On the core unamortized principal balance, Kotak Mahindra Bank typically sanctions a 40% to 55% waiver, depending on the delinquency vintage, financial hardship documentation, and litigation stage.'
    },
    {
      q: 'Why does Kotak Mahindra Bank assign defaulted loans to Phoenix ARC Pvt Ltd?',
      a: 'Kotak Mahindra Bank frequently transfers distressed retail debt to Phoenix ARC Pvt Ltd under RBI asset sale guidelines to purge non-performing assets from its balance sheet. Once assigned, recovery rights transfer entirely to Phoenix ARC, requiring borrowers to negotiate compromise settlements directly with the ARC.'
    },
    {
      q: 'How can I stop aggressive collection agency harassment and recovery visits from Kotak?',
      a: "You can stop unauthorized recovery harassment by issuing a formal legal representation through legal counsel to Kotak's Principal Nodal Officer and Circle Stressed Asset Desk. This notice invokes RBI Fair Practices Code protections, curtails telecaller contact, and demands structured dispute resolution."
    },
    {
      q: 'How should I respond to a Kotak sole arbitration notice or Section 21 invocation?',
      a: 'When Kotak invokes arbitration, borrowers should file formal legal objections under Section 12(5) and Section 21 of the Arbitration and Conciliation Act, citing Supreme Court precedents (Perkins Eastman and TRF Ltd.) against unilateral arbitrator appointment. This legal counter compels the bank to negotiate an amicable settlement.'
    },
    {
      q: 'What legal defense is required for Section 25 NACH bounce notices from Kotak?',
      a: 'You must never ignore a Section 25 PSSA or Section 138 NI Act notice from Kotak. Issue an authoritative legal reply within the statutory notice period through legal counsel, establishing genuine insolvency, rebutting willful default, and proposing a structured One-Time Settlement before magistrate filings occur.'
    },
    {
      q: 'What essential terms must be verified in an official Kotak settlement sanction letter?',
      a: 'An authentic Kotak settlement letter must be on official bank letterhead, originate from a verified @kotak.com corporate email, cite the exact loan account number, specify the agreed settlement figure and installment dates, and include an unambiguous undertaking to withdraw legal notices and issue a No Dues Certificate.'
    },
    {
      q: 'How does settling a Kotak Mahindra loan affect my CIBIL score and credit report?',
      a: 'Upon settlement completion, Kotak reports the loan to credit bureaus as "Settled" with zero outstanding balance. While this initially lowers credit scores, borrowers can rebuild a 750+ CIBIL score within 18 to 24 months using secured credit cards, or subsequently convert the status to "Closed" under Section 21 of CICRA.'
    },
    {
      q: 'What is the procedure and timeline to receive the official Kotak No Dues Certificate?',
      a: 'Once the agreed settlement sum is remitted directly into your Kotak loan account within the stipulated deadlines, the operations division processes the internal write-off. Under RBI guidelines, Kotak Mahindra Bank must issue the official No Dues Certificate (NDC) within 30 to 45 business days.'
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
            <span>Institutional Kotak Stressed Asset Resolution Framework</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Kotak Mahindra Bank Loan Settlement
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Institutional legal strategy for resolving delinquent Kotak personal loans and 811 digital credit lines. Learn how to counter unilateral arbitration notices, avert Phoenix ARC debt assignments, and negotiate 40% to 55% principal haircuts with an official No Dues Certificate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Facing Kotak Loan Default? Request Settlement Evaluation</span>
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
                  Governed by Reserve Bank of India Prudential Guidelines and Fair Practices Code.
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
                <span>EXECUTIVE BRIEF: KOTAK MAHINDRA BANK LOAN SETTLEMENT CRUX</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Institutional Jurisdiction:</strong> Adjudicated by Kotak Stressed Assets Management Group (SAMG) after 90 days of default (NPA).
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Unsecured Collateral Immunity:</strong> Personal loans and 811 digital credit carry zero mortgage rights under SARFAESI Section 31(g).
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Complete Surcharge Waiver:</strong> 100% statutory waiver on compounding penal interest, late payment penalties, and bounce fees.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Principal Haircut Benchmark:</strong> Realistic compromise figures target 40% to 55% discounts on core unamortized principal.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Phoenix ARC Assignment Risk:</strong> Delinquencies past 120-180 days risk assignment to Phoenix ARC, requiring preemptive OTS intervention.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Sole Arbitration Counter:</strong> Unilateral arbitrator appointments by Kotak are legally invalid under Supreme Court Perkins Eastman rulings.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Section 25 PSSA Defense:</strong> E-mandate bounce notices are compoundable matters routinely defused through formal legal replies.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Definitive Legal Closure:</strong> Remittance directly to Kotak CBS loan account followed by an authentic No Dues Certificate within 30-45 days.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: DEBT ECONOMICS & NPA DYNAMICS */}
            <section id="npa-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Section 1: Banking Economics & Regulatory Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Kotak Mahindra Debt Economics and NPA Classification Dynamics
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  Kotak Mahindra Bank manages a vast unsecured portfolio spanning personal loans, express credit, and 811 digital facilities. When a borrower faces financial disruption, the account advances through Special Mention Account stages: SMA-0 (1-30 days), SMA-1 (31-60 days), and SMA-2 (61-90 days), escalating from automated reminders into telecalling recovery agency contact.
                </p>
                <p>
                  At 90 days of default, RBI prudential norms mandate classifying the facility as a Gross Non-Performing Asset (NPA). Because unsecured personal loans carry zero mortgage collateral under SARFAESI Act Section 31(g), Kotak cannot seize property or freeze assets without protracted litigation. Faced with mandatory 100% Tier-1 capital provisioning, Kotak&apos;s Stressed Assets Management Group (SAMG) prefers negotiating a commercial One-Time Settlement to clear bad debt off its balance sheet.
                </p>
              </div>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Section 2: Forensic Ledger Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Financial Breakdown and Settlement Mathematical Formulation
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  Delinquent Kotak loan balances swell rapidly beyond borrowed principal due to 24%-36% compounding penal interest, recurring NACH bounce surcharges, and GST. Institutional negotiations begin with a forensic audit to strip away these artificial levies and isolate the core unamortized principal baseline.
                </p>
                <p>
                  For accounts past 90-180 days of NPA classification, Kotak routinely sanctions a 100% waiver on all penal and administrative charges, alongside a 40% to 55% haircut on the core principal balance.
                </p>
              </div>

              {/* REPRESENTATIVE MATHEMATICAL CALCULATION CARD */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Representative Forensic Audit: ₹8,50,000 Delinquent Kotak Personal Loan
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#1886ff]">
                    180-Day NPA Vintage
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase">Gross Bank Claim</p>
                    <p className="text-lg sm:text-xl font-extrabold text-red-600 mt-1">₹8,50,000</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Includes penal interest & bounce fees</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase">Penal Surcharges Stripped</p>
                    <p className="text-lg sm:text-xl font-extrabold text-emerald-600 mt-1">₹2,10,000</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">100% full institutional waiver</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase">Core Unamortized Principal</p>
                    <p className="text-lg sm:text-xl font-extrabold text-slate-800 mt-1">₹6,40,000</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Verified baseline exposure</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/60">
                    <p className="text-[11px] font-semibold text-[#1886ff] uppercase">Sanctioned OTS Figure</p>
                    <p className="text-lg sm:text-xl font-extrabold text-[#1886ff] mt-1">₹3,20,000</p>
                    <p className="text-[10px] text-blue-700 font-medium mt-0.5">50% principal haircut (62% total relief)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Section 3: Strategic Evaluation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Resolution Pathways Comparison: OTS versus Alternate Mechanisms
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Borrowers facing persistent loan distress frequently consider loan restructuring or Lok Adalat referrals without evaluating the long-term financial consequences. Restructuring merely extends the tenure while compounding base interest rates, whereas outright default neglect triggers legal notices and potential assignment to private debt buyers. The comparative matrix below outlines the critical parameters governing each resolution route.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs border-collapse divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="py-3 px-3.5">Resolution Route</th>
                      <th className="py-3 px-3.5">Waiver Potential</th>
                      <th className="py-3 px-3.5">Settlement Timeline</th>
                      <th className="py-3 px-3.5">Legal Immunity</th>
                      <th className="py-3 px-3.5">Credit Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="py-3 px-3.5 text-emerald-600 font-semibold">100% penal + 40%-55% principal haircut</td>
                      <td className="py-3 px-3.5">45 to 90 days</td>
                      <td className="py-3 px-3.5">Complete withdrawal of all notices & suits</td>
                      <td className="py-3 px-3.5">Reported as Settled; rebuildable in 18-24 mos</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Tenure Restructuring</td>
                      <td className="py-3 px-3.5 text-red-600 font-semibold">0% waiver; higher overall interest liability</td>
                      <td className="py-3 px-3.5">3 to 5 extended years</td>
                      <td className="py-3 px-3.5">Conditional upon strict monthly EMI compliance</td>
                      <td className="py-3 px-3.5">Marked as Restructured; score suppresses</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Civil Court Litigation</td>
                      <td className="py-3 px-3.5 text-amber-600 font-semibold">Determined by decree; high advocate costs</td>
                      <td className="py-3 px-3.5">3 to 7 years</td>
                      <td className="py-3 px-3.5">Ongoing court appearances & summons risks</td>
                      <td className="py-3 px-3.5">Severe derogatory suit-filed entries</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">National Lok Adalat</td>
                      <td className="py-3 px-3.5 text-blue-600 font-semibold">Full penal waiver + 20%-35% principal cut</td>
                      <td className="py-3 px-3.5">Quarterly sittings</td>
                      <td className="py-3 px-3.5">Final award under Legal Services Authorities Act</td>
                      <td className="py-3 px-3.5">Reported as Settled under Lok Adalat</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Inaction & Default Neglect</td>
                      <td className="py-3 px-3.5 text-red-700 font-semibold">0% waiver; compounding penal ballooning</td>
                      <td className="py-3 px-3.5">Indefinite distress</td>
                      <td className="py-3 px-3.5">Sec. 25, Sec. 138 & ARC assignment risks</td>
                      <td className="py-3 px-3.5">Score drops below 600; total credit freeze</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: TECHNICAL CIBIL ALGORITHM & SCORING MATH */}
            <section id="cibil-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Section 4: Credit Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Technical CIBIL Algorithm Breakdown and Section 21 CICRA Remediation
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  TransUnion CIBIL scores depend heavily on payment history (35%) and credit exposure (30%). Consecutive default triggers an immediate 80-130 point drop. Once an authorized OTS concludes, Kotak updates bureau records to &quot;Settled&quot; with zero balance, immediately arresting further negative monthly reporting marks.
                </p>
                <p>
                  Borrowers can rebuild a 750+ score within 18 to 24 months through disciplined utilization on a secured fixed-deposit card. Furthermore, under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), borrowers retain the right to petition credit bureaus for dispute rectification, converting records to &quot;Closed&quot; upon settling residual compromise balances.
                </p>
              </div>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Section 5: Procedural Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Kotak Mahindra Bank Loan Settlement Institutional Roadmap
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The visual framework below summarizes CredSettle&apos;s proven six-stage methodology for navigating Kotak Mahindra Bank personal loan defaults, countering arbitration threats, preventing Phoenix ARC transfers, and securing enforceable compromise sanctions.
              </p>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 sm:p-4 shadow-xs overflow-hidden">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/infographics/kotak-mahindra-bank-loan-settlement.jpg"
                    alt="Kotak Mahindra Bank Personal Loan Settlement Procedure and Resolution Blueprint"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                </div>
                <div className="flex items-center justify-between pt-3 px-1">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Figure 1: CredSettle 6-Stage Institutional Settlement Blueprint for Kotak Mahindra Bank
                  </span>
                  <a
                    href="/images/infographics/kotak-mahindra-bank-loan-settlement.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1886ff] hover:underline"
                  >
                    <span>View High-Res</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#1886ff]" />
                <span>Section 6: Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Step-by-Step Institutional SOP for Kotak Mahindra Loan Settlement
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center text-xs">1</span>
                    <h3>Stage 1: Forensic Statement and 811 Ledger Audit</h3>
                  </div>
                  <p className="text-slate-600 pl-8">
                    We audit your Kotak statement or 811 ledger to strip accumulated penal interest, GST debits, and bounce fees, isolating the true unamortized principal baseline.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center text-xs">2</span>
                    <h3>Stage 2: Comprehensive Hardship Dossier Compilation</h3>
                  </div>
                  <p className="text-slate-600 pl-8">
                    We assemble verified hardship evidence, including layoff letters, medical hospitalization bills, or business closure accounts, establishing bona fide insolvency to the credit committee.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center text-xs">3</span>
                    <h3>Stage 3: Stressed Assets Management Group (SAMG) Representation</h3>
                  </div>
                  <p className="text-slate-600 pl-8">
                    We bypass third-party recovery telecallers, serving formal legal representation to Kotak&apos;s Stressed Assets Management Group and Principal Nodal Officer to halt harassment.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center text-xs">4</span>
                    <h3>Stage 4: Bilateral Compromise Negotiations and Haircut Structuring</h3>
                  </div>
                  <p className="text-slate-600 pl-8">
                    Senior negotiators engage circle committees to secure a 100% penal surcharge waiver and a 40% to 55% principal haircut, preventing portfolio transfer to Phoenix ARC.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center text-xs">5</span>
                    <h3>Stage 5: Official Settlement Sanction Letter Vetting</h3>
                  </div>
                  <p className="text-slate-600 pl-8">
                    Our legal counsel vets Kotak&apos;s formal sanction letter on bank letterhead, verifying account numbers, settlement figures, payment deadlines, and unambiguous liability release clauses.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center text-xs">6</span>
                    <h3>Stage 6: Direct Remittance, CBS Zeroing, and No Dues Certificate</h3>
                  </div>
                  <p className="text-slate-600 pl-8">
                    Settlement funds are remitted directly into your Kotak loan account. We oversee internal CBS ledger zeroing and enforce delivery of your official No Dues Certificate within 30-45 days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & LEGAL RIGHTS */}
            <section id="statutory-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Section 7: Statutory Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Statutory Notice Defense and Legal Rights under Indian Law
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Defaulting on unsecured personal loans is strictly a civil dispute, not a criminal offense. CredSettle ensures strict statutory defense against automated notices and recovery agency overreach.
              </p>

              {/* 4-CARD ANALYTICAL GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="text-xs font-bold uppercase tracking-wide">Section 25 PSSA (NACH / E-Mandate Bounce)</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automated debits returned for insufficient funds trigger Section 25 notices. We issue formal legal replies rebutting criminal intent, documenting genuine hardship, and directing matters toward amicable compromise settlements.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <AlertCircle className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="text-xs font-bold uppercase tracking-wide">Section 138 Negotiable Instruments Act</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Deposited security cheques trigger statutory 15-day demand notices. Our replies challenge security instrument misuse under Section 139 presumptions, proposing an OTS compromise before magistrate filings.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Gavel className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="text-xs font-bold uppercase tracking-wide">Sole Arbitration under Section 21 &amp; Section 12(5)</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Supreme Court precedents in <em>Perkins Eastman</em> and <em>TRF Ltd.</em>, unilateral sole arbitrator appointments by lenders are void. We file Section 12(5) objections to halt arbitration and compel bilateral settlement.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="text-xs font-bold uppercase tracking-wide">DRT Section 19 &amp; RBI Fair Practices Code</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    DRT proceedings require claims exceeding ₹20 Lakhs. Concurrently, RBI Fair Practices Code strictly prohibits recovery agent contact before 8 AM or after 7 PM, harassment of family, or unauthorized visits.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER GRIEVANCE & ESCALATION MATRIX */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Section 8: Regulatory Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Three-Tier Institutional Grievance and Escalation Matrix
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  Borrowers facing unlawful harassment or unresponsiveness must navigate RBI&apos;s established three-tier escalation hierarchy to secure prompt institutional relief:
                </p>
                <p>
                  <strong>Level 1: Grievance Redressal Officer (GRO):</strong> Complaints are submitted to Kotak&apos;s regional GRO, who must provide an official resolution within 7 to 10 business days.
                </p>
                <p>
                  <strong>Level 2: Principal Nodal Officer (PNO):</strong> If unresolved, the issue escalates to Kotak&apos;s Principal Nodal Officer for executive review and settlement intervention within 14 to 21 days.
                </p>
                <p>
                  <strong>Level 3: Reserve Bank of India Ombudsman:</strong> If 30 days elapse without resolution, a statutory petition is filed on the RBI CMS portal (cms.rbi.org.in), invoking powers under the Integrated Ombudsman Scheme, 2021.
                </p>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Section 9: Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Chronological Loan Default Milestones and Settlement Timeline
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Navigating loan resolution requires understanding the sequential phases through which Kotak Mahindra Bank processes defaulted retail debt. The table below delineates the critical operational and legal milestones from initial missed installment to final credit bureau closure.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs border-collapse divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="py-3 px-3.5">Delinquency Phase</th>
                      <th className="py-3 px-3.5">Banking Milestone</th>
                      <th className="py-3 px-3.5">Recovery &amp; Legal Action</th>
                      <th className="py-3 px-3.5">Optimal Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Days 1 – 30 (SMA-0)</td>
                      <td className="py-3 px-3.5">First missed installment</td>
                      <td className="py-3 px-3.5">Automated SMS, email reminders & soft telecalling</td>
                      <td className="py-3 px-3.5">Audit cashflow; preserve capital for lump-sum OTS</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Days 31 – 90 (SMA-1/2)</td>
                      <td className="py-3 px-3.5">Consecutive default period</td>
                      <td className="py-3 px-3.5">External collection agencies assigned; intense telecalling</td>
                      <td className="py-3 px-3.5">Compile hardship dossier; prepare anti-harassment shield</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Day 90+ (NPA Classification)</td>
                      <td className="py-3 px-3.5">Gross NPA declaration</td>
                      <td className="py-3 px-3.5">Mandatory 100% Tier-1 provisioning; legal desk transfer</td>
                      <td className="py-3 px-3.5">Initiate formal settlement petition to Stressed Asset Group</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Days 91 – 150 (Legal Window)</td>
                      <td className="py-3 px-3.5">Pre-litigation escalation</td>
                      <td className="py-3 px-3.5">Section 25 NACH notices, sole arbitration intimations</td>
                      <td className="py-3 px-3.5">Issue legal replies; challenge unilateral arbitration</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Days 151 – 180+ (OTS Closure)</td>
                      <td className="py-3 px-3.5">Compromise or ARC assignment</td>
                      <td className="py-3 px-3.5">Final OTS sanction issued or portfolio sale to Phoenix ARC</td>
                      <td className="py-3 px-3.5">Verify sanction letter; remit payment & secure NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Section 10: Practical Case Studies</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Specialized Real-World Scenarios and Contextual Resolutions
              </h2>

              {/* 4 REAL-WORLD SCENARIO CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    1. Kotak 811 Digital Credit &amp; Micro-Personal Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Defaulted 811 digital facilities face aggressive automated recovery algorithms. CredSettle unbundles compounding app surcharges, halts recovery scripts via formal representations, and settles balances via lump-sum OTS.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    2. Salaried Executive Layoffs &amp; Income Stoppage
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Professionals facing corporate layoffs receive structured advocacy. By submitting severance exhaustion records and income cessation proof, CredSettle demonstrates bona fide distress to secure up to 55% haircuts.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    3. Small Business Proprietorship Cashflow Collapse
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Entrepreneurs utilizing unsecured loans for working capital receive commercial defense. Audited GST filings establish liquidity failure, enabling multi-tranche compromise settlements that protect personal assets.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    4. Debt Assignment to Phoenix ARC Pvt Ltd
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When Kotak sells non-performing accounts to Phoenix ARC, CredSettle audits the underlying Deed of Assignment under SARFAESI Section 5, negotiating deep concessions based on Phoenix ARC&apos;s discounted portfolio acquisition cost.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: COMPANY PROFILE COMPONENT */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Section 12: Direct Knowledge Base</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions on Kotak Mahindra Bank Loan Settlement
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Authoritative legal and procedural answers to the most common queries regarding Kotak personal loans, 811 digital credit, collection notices, and credit bureau remediation.
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-xs transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-bold text-slate-900 hover:text-[#1886ff] transition-colors gap-3"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Section 13: Legal Authority &amp; References</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Statutory Citations and Regulatory Reference Repositories
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                <p>
                  Every settlement representation, notice reply, and arbitration objection prepared by CredSettle is grounded in authoritative statutory acts and judicial precedents governing the Indian financial system:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                  <li>Reserve Bank of India Master Circular on Prudential Norms on Advances and Asset Classification (DOR.No.STR.REC.55/21.04.048/2021-22).</li>
                  <li>Reserve Bank of India Master Direction - Non-Banking Financial Company and Bank Fair Practices Code on Recovery Agents.</li>
                  <li>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act Section 31(g)).</li>
                  <li>Arbitration and Conciliation Act, 1996 (Section 12(5), Section 21, and Supreme Court rulings in Perkins Eastman and TRF Ltd.).</li>
                  <li>Payment and Settlement Systems Act, 2007 (Section 25 quasi-criminal defense and compounding provisions).</li>
                  <li>Credit Information Companies (Regulation) Act, 2005 (CICRA Section 21 dispute rectification protocols).</li>
                </ul>
              </div>

              {/* OUTBOUND AUTHORITY BADGES */}
              <div className="pt-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  Official Statutory Repositories
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 hover:text-[#1886ff] hover:border-blue-200 transition-colors shadow-2xs"
                  >
                    <span>Reserve Bank of India (rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 hover:text-[#1886ff] hover:border-blue-200 transition-colors shadow-2xs"
                  >
                    <span>RBI Complaint Management (cms.rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 hover:text-[#1886ff] hover:border-blue-200 transition-colors shadow-2xs"
                  >
                    <span>TransUnion CIBIL India (cibil.com)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 hover:text-[#1886ff] hover:border-blue-200 transition-colors shadow-2xs"
                  >
                    <span>India Code Legislative Portal (indiacode.nic.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 hover:text-[#1886ff] hover:border-blue-200 transition-colors shadow-2xs"
                  >
                    <span>National Legal Services Authority (nalsa.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 hover:text-[#1886ff] hover:border-blue-200 transition-colors shadow-2xs"
                  >
                    <span>National Cyber Crime Portal (cybercrime.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* INTERNAL TOPIC BADGES */}
              <div className="pt-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  Related Debt Resolution Topics
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/axis-bank-personal-loan-settlement"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors"
                  >
                    Axis Bank Loan Settlement
                  </Link>
                  <Link
                    href="/icici-bank-personal-loan-settlement"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors"
                  >
                    ICICI Bank Loan Settlement
                  </Link>
                  <Link
                    href="/sbi-personal-loan-settlement-process"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors"
                  >
                    SBI Personal Loan Settlement
                  </Link>
                  <Link
                    href="/hdfc-personal-loan-settlement-policy"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors"
                  >
                    HDFC Bank Loan Settlement
                  </Link>
                  <Link
                    href="/arbitration-notice-personal-loan-default"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors"
                  >
                    Arbitration Notice Defense
                  </Link>
                  <Link
                    href="/ecs-nach-bounce-legal-notice-section-25"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors"
                  >
                    Section 25 NACH Bounce Defense
                  </Link>
                  <Link
                    href="/section-138-cheque-bounce-personal-loan"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors"
                  >
                    Section 138 Cheque Bounce
                  </Link>
                  <Link
                    href="/lok-adalat-personal-loan-settlement"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors"
                  >
                    Lok Adalat Loan Settlement
                  </Link>
                  <Link
                    href="/convert-settled-status-to-closed"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors"
                  >
                    Convert Settled to Closed CIBIL
                  </Link>
                  <Link
                    href="/bank-recovery-agent-harassment-rules-in-hindi"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors"
                  >
                    Recovery Agent Harassment Rules
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="sticky top-6 space-y-5">
            
            {/* 1. AUTHOR BIO CARD */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#1886ff]/10 text-[#1886ff] flex items-center justify-center font-bold text-lg border border-[#1886ff]/20">
                  AJ
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Ashish Jhangra</h3>
                  <p className="text-[11px] font-semibold text-[#1886ff]">
                    Legal &amp; Debt Resolution Professional
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialist in stressed asset negotiations, consumer banking protections, and banking dispute litigation before RBI Ombudsmen and institutional credit committees across India.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Verified Legal Author</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> CredSettle Panel
                </span>
              </div>
            </div>

            {/* 2. EMERGENCY CTA CARD (#2452ae Background) */}
            <div
              className="rounded-2xl text-white p-5 space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 pointer-events-none" />
              
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 text-blue-100 text-[10px] font-bold uppercase tracking-wider">
                <BadgeAlert className="w-3 h-3 text-amber-300" />
                <span>Urgent Recovery Defense</span>
              </div>

              <h3 className="text-base font-extrabold leading-snug">
                Receiving Kotak Legal Notices or Telecaller Threats?
              </h3>

              <p className="text-xs text-white/90 leading-relaxed font-normal">
                Speak directly with senior debt settlement negotiators. Halt recovery harassment, dispute unilateral arbitration, and secure an official OTS waiver before court filings.
              </p>

              <div className="space-y-2.5 pt-1">
                <a
                  href="tel:+918800226635"
                  className="w-full py-2.5 px-4 rounded-xl bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now: +91-8800226635</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-700/80 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-blue-400/40 transition-colors"
                >
                  <span>Request Free Legal Evaluation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-blue-200/90 pt-1">
                <Lock className="w-3 h-3" />
                <span>100% Confidential &amp; Legally Protected</span>
              </div>
            </div>

            {/* 3. TRUST BADGES CARD */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 space-y-3">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block border-b border-slate-100 pb-2">
                CredSettle Institutional Benchmarks
              </span>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-2.5 text-slate-700">
                  <Award className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>5,000+</strong> Successful Debt Settlements</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong>₹150+ Crores</strong> Debt Resolved</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <Landmark className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span><strong>40% – 55%</strong> Average Principal Haircut</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <UserCheck className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span><strong>100%</strong> Authentic Bank No Dues Certificates</span>
                </div>
              </div>
            </div>

            {/* 4. RELATED GUIDES */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 space-y-2.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block border-b border-slate-100 pb-2">
                Popular Bank Settlement Guides
              </span>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>
                  <Link
                    href="/axis-bank-personal-loan-settlement"
                    className="hover:text-[#1886ff] font-medium flex items-center justify-between"
                  >
                    <span>Axis Bank Personal Loan</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/icici-bank-personal-loan-settlement"
                    className="hover:text-[#1886ff] font-medium flex items-center justify-between"
                  >
                    <span>ICICI Bank Personal Loan</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sbi-personal-loan-settlement-process"
                    className="hover:text-[#1886ff] font-medium flex items-center justify-between"
                  >
                    <span>SBI Rinn Samadhan OTS</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hdfc-personal-loan-settlement-policy"
                    className="hover:text-[#1886ff] font-medium flex items-center justify-between"
                  >
                    <span>HDFC Bank Loan Settlement</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </Link>
                </li>
              </ul>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}
