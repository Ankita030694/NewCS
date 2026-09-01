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
  Mic,
  FileCheck,
  ShieldAlert
} from 'lucide-react';

export default function IsItLegalToRecordRecoveryAgentCallsClient() {
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
    { id: 'debt-economics-npa', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'financial-settlement-math', label: '2. Principal vs Penal Math' },
    { id: 'comparison-matrix', label: '3. Debt Resolution Comparison' },
    { id: 'cibil-algorithm-math', label: '4. CIBIL Algorithm & Recovery' },
    { id: 'infographic-overview', label: '5. Visual Evidence Blueprint' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Defense SOP' },
    { id: 'statutory-notice-defense', label: '7. Statutory Notice Defense' },
    { id: 'three-tier-escalation', label: '8. 3-Tier Escalation Matrix' },
    { id: 'chronological-milestones', label: '9. Chronological Milestones' },
    { id: 'specialized-scenarios', label: '10. Specialized Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Sources' }
  ];

  const faqs = [
    {
      q: 'Is it legal to record recovery agent calls without consent in India?',
      a: 'Yes. India follows single-party consent rules. You can record calls you participate in without notifying agents for legal defense, dispute resolution, or police complaints.'
    },
    {
      q: 'What makes audio recordings admissible as evidence in Indian courts?',
      a: 'Under Section 65B Evidence Act and Section 63 BSA 2023, digital recordings require an electronic certificate certifying device custody, source integrity, and absence of audio tampering.'
    },
    {
      q: 'Can recovery agent recordings be submitted for police complaints?',
      a: 'Yes. If an agent issues threats of violence or extortion, unedited recordings with an electronic certificate support FIR filings under Sections 308 and 351 BNS.'
    },
    {
      q: 'Can I submit call recordings to the RBI Banking Ombudsman?',
      a: 'Yes. You can upload call recordings and transcripts directly to the RBI Ombudsman portal (cms.rbi.org.in) as verifiable proof of RBI Fair Practices Code violations.'
    },
    {
      q: 'Does recording recovery calls violate constitutional privacy rights?',
      a: 'No. Judicial rulings confirm that recording debt collection calls to document statutory violations, threats, and unfair practices does not violate Article 21 privacy rights.'
    },
    {
      q: 'Can audio recordings assist in negotiating a One-Time Settlement?',
      a: 'Yes. Documented audio proof of agent misconduct creates legal exposure for lenders, prompting bank credit committees to waive penal interest and sanction 40% to 55% settlements.'
    },
    {
      q: 'What are permitted calling hours for recovery agents under RBI rules?',
      a: 'Under the RBI Fair Practices Code, recovery agents are strictly restricted to calling borrowers between 08:00 AM and 07:00 PM. Outside hours calls constitute punishable harassment.'
    },
    {
      q: 'What is the difference between Section 65B and BSA Section 63?',
      a: 'Section 65B governed electronic records historically. Section 63 BSA 2023 modernizes these requirements, defining statutory standards for digital audio storage and electronic certificates.'
    },
    {
      q: 'Can recovery agents contact my employer or family members?',
      a: 'No. RBI rules prohibit recovery agents from contacting employers, colleagues, or relatives who are not co-borrowers or guarantors. Such outreach constitutes unlawful third-party harassment.'
    },
    {
      q: 'What should I do if a recovery agent threatens immediate arrest?',
      a: 'Record the call calmly. Unsecured loan default is strictly a civil matter. Recovery agents have zero authority to order arrests or seize assets without a civil court decree.'
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wide text-blue-200 mb-3">
            <Mic className="w-3.5 h-3.5" />
            <span>SINGLE-PARTY CONSENT &amp; EVIDENCE ADMISSIBILITY</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Is It Legal to Record Recovery Agent Calls in India?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Understand single-party consent rules, Section 65B and Section 63 BSA electronic evidence certificates, and how to submit recordings against harassment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Agent Harassment &amp; Settle Debt with Legal Protection</span>
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
                  <span>Statutory Audio Evidence</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by BSA Section 63, Evidence Act Sec 65B &amp; RBI Fair Practices Code.
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
                <span>EXECUTIVE BRIEF: CALL RECORDING &amp; EVIDENCE RULES IN INDIA</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Single-Party Consent:</strong> India permits recording collection calls you participate in without prior agent notification.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Statutory Admissibility:</strong> Audio recordings constitute valid evidence under Section 65B Evidence Act and Section 63 BSA.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Electronic Certificate Mandate:</strong> Submitting audio requires a certificate proving device custody and zero tampering.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Criminal Intimidation Defense:</strong> Recorded threats support police FIRs under Sections 308 and 351 BNS.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">RBI Fair Practices Enforcement:</strong> Recorded calling hour violations (outside 8 AM - 7 PM) escalate directly to the RBI Ombudsman.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Consumer Forum Relief:</strong> District Consumer Commissions admit verified audio to award mental harassment compensation.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Zero Privacy Violation:</strong> Documenting debt collection calls does not violate Article 21 privacy protections.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Settlement Counter-Leverage:</strong> Recorded misconduct empowers borrowers to negotiate 40% to 55% One-Time Settlements.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="debt-economics-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Banking Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics, Banking Regulations &amp; NPA Dynamics
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When borrowers default on unsecured personal loans or credit cards due to acute financial hardship, lending institutions must adhere to the Reserve Bank of India Prudential Framework for Resolution of Stressed Assets. Delinquent accounts transition through successive Special Mention Account classifications: SMA-0 (1 to 30 days past due), SMA-1 (31 to 60 days past due), and SMA-2 (61 to 90 days past due). Once delinquency crosses 90 days, the exposure is formally classified as a Non-Performing Asset (NPA).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI prudential norms, NPA classification mandates Tier-1 capital provisioning, starting at 15% for sub-standard assets and rising to 100% for doubtful exposures. Because unsecured loans lack pledged collateral and are exempt from SARFAESI Act asset seizures, banks cannot attach properties without civil litigation. To reduce capital drag on balance sheets, lenders outsource collections to third-party recovery agencies on aggressive commissions. This pressure triggers coercive collection tactics, making audio recording an essential safeguard for borrowers preparing for compromise One-Time Settlements (OTS).
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Principal vs. Penal Charges &amp; Settlement Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Following loan default, lenders inflate outstanding balances by levying compound penal interest (24% to 36% per annum), late payment charges, and administrative fees. Over a 180-day delinquency cycle, a principal default of ₹10,00,000 routinely inflates into a gross claim exceeding ₹13,40,000.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI accounting directives, penal levies represent uncollected memorandum charges rather than disbursed capital. In One-Time Settlement negotiations, banks prioritize recovering core principal while waiving uncollected penal interest. When borrowers substantiate agent misconduct with verifiable audio recordings, lenders face regulatory liability, expediting settlement approvals.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In a representative 180-day NPA case with a principal of ₹10,00,000 and ₹3,40,000 in accumulated charges (total ₹13,40,000 claim), an evidence-backed settlement typically closes at ₹4,50,000 to ₹5,50,000, securing an effective 45% to 55% reduction against principal.
              </p>

              {/* Settlement Calculation Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 space-y-4">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                  <span>Representative 180-Day NPA Settlement Calculation</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[11px] text-slate-500 block">Disbursed Principal</span>
                    <span className="text-sm sm:text-base font-extrabold text-slate-900">₹10,00,000</span>
                  </div>
                  <div className="p-3 bg-rose-50 rounded-xl border border-rose-100">
                    <span className="text-[11px] text-rose-600 block">Penal Charges</span>
                    <span className="text-sm sm:text-base font-extrabold text-rose-700">+₹3,40,000</span>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                    <span className="text-[11px] text-[#1886ff] block">Gross Bank Demand</span>
                    <span className="text-sm sm:text-base font-extrabold text-blue-900">₹13,40,000</span>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                    <span className="text-[11px] text-emerald-600 block">Target Settlement</span>
                    <span className="text-sm sm:text-base font-extrabold text-emerald-700">₹4.5L - ₹5.5L</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Strategic Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Strategic Comparison Matrix: Debt Resolution Pathways in India
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Evaluating legal and financial resolution strategies for distressed personal loans and credit cards:
              </p>

              {/* 4-Sided Bordered Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-xs sm:text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200/80">
                      <th className="p-3.5 sm:p-4">Resolution Pathway</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200/80">Financial Impact</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200/80">Resolution Timeline</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200/80">Legal Protection &amp; Risk</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="hover:bg-blue-50/40 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">OTS with Audio Evidence</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80 text-emerald-700 font-semibold">40% to 55% principal settlement</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">30 to 60 days timeline</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Cessation of harassment, signed NDC, zero court visits.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Loan Restructuring</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">100% principal plus interest</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">3 to 5 years duration</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Postpones default, increases lifetime interest, high re-default risk.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Civil Summary Suit</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">100% claim plus 18% interest and court fees</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">3 to 7 years trial</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Litigation risk, potential salary or bank attachment decrees.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Lok Adalat</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">15% to 30% nominal waiver</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Single hearing day</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Non-appealable award under Section 21 LSA Act, requires immediate payment.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Inaction</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80 text-rose-600">Compounding debt</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Indefinite distress</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Severe harassment, CIBIL collapse to 550, potential ex-parte arbitral decrees.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Score Algorithm, Score Drop Trajectory &amp; Credit Rebuilding
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit bureaus in India (TransUnion CIBIL, Experian, CRIF High Mark, Equifax) compute credit scores using proprietary algorithms weighted across Payment History (35%), Credit Utilization (30%), Credit Mix (15%), History Length (10%), and Inquiries (10%).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an account reaches 90 DPD, the payment history component suffers damage, causing an immediate credit score drop of 150 to 220 points, often plunging a 780 score down to 560. Following a negotiated settlement, the lender reports the trade line as &quot;Settled&quot;. While this stops further DPD deterioration, the remark indicates past compromise.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers can restore their score back to 750+ within 12 to 24 months through disciplined credit rebuilding steps, such as managing a secured card with sub-20% utilization. Under Section 21 of CICRA 2005, borrowers retain the statutory right to dispute incorrect reporting or convert &quot;Settled&quot; to &quot;Closed&quot;.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Architecture Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Infographic: Single-Party Consent &amp; Electronic Evidence Workflow
              </h2>
              
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden p-3 md:p-4">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/is-it-legal-to-record-recovery-agent-calls.jpg"
                    alt="Is It Legal to Record Recovery Agent Calls in India Evidence Blueprint"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
                    className="object-cover"
                  />
                </div>
                <div className="pt-3 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600">
                  <p className="leading-relaxed">
                    Visual blueprint detailing single-party consent recording rules in India, Section 65B and Section 63 BSA compliance certificates, digital custody protocols, and multi-forum evidence submission channels.
                  </p>
                  <a
                    href="/images/infographics/is-it-legal-to-record-recovery-agent-calls.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-bold hover:underline inline-flex items-center gap-1 flex-shrink-0"
                  >
                    <span>View High-Res</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: 6-Stage Defense &amp; Evidence-Backed Settlement
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-bold">1</span>
                    <span>Stage 1: Call Audit &amp; Metadata Archival</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Activate native call recording. Save unedited master audio in original formats. Maintain metadata logs detailing timestamps, caller IDs, and durations to preserve digital custody.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-bold">2</span>
                    <span>Stage 2: Hardship Dossier &amp; Transcripts</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Transcribe abusive calls verbatim with exact timestamps. Assemble documented financial hardship records. Cross-reference recorded agent threats against the RBI Fair Practices Code.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-bold">3</span>
                    <span>Stage 3: Legal Notice to Bank GRO</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit formal legal representation to the bank Grievance Redressal Officer (GRO). Present audited call logs, verbatim transcripts, and a cease-and-desist notice against third-party outreach.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-bold">4</span>
                    <span>Stage 4: Bilateral Settlement Discussions</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Leverage recorded audio evidence of regulatory violations during settlement discussions to negotiate a complete 100% waiver of penal interest and reduce settlement demands to 40% to 55%.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-bold">5</span>
                    <span>Stage 5: Sanction Letter Legal Vetting</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Review the settlement letter issued on bank letterhead. Verify covenants including full-and-final discharge of debt, waiver of remaining balances, and withdrawal of pending statutory notices.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-bold">6</span>
                    <span>Stage 6: Direct Remittance &amp; NDC</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Remit agreed settlement funds directly into your loan account via RTGS/NEFT. Secure a signed No Dues Certificate (NDC) and verify credit bureau updates under Section 21 CICRA within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Defense Grid</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Notice Defense &amp; Borrower Legal Safeguards
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When loans default, lenders issue statutory notices requiring strategic legal responses:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <span>Section 25 PSSA Act</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Governs NACH bounces. Borrowers must reply within statutory timelines demonstrating lack of fraudulent intent (mens rea) and showing default resulted from genuine hardship.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <span>Section 138 NI Act</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Governs bounced cheques. Borrowers must reply within 15 days of notice, challenging inflated security cheque amounts and establishing genuine contractual debt disputes.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <span>Section 21 Arbitration Act</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Supreme Court rulings in Perkins Eastman, lenders cannot unilaterally appoint sole arbitrators. Borrowers can challenge arbitrator eligibility under Section 12(5).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                    <span>Section 19 DRT &amp; RBI Safeguards</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Applies to claims over ₹20 Lakhs before DRT. Under RBI Fair Practices Code, agents are prohibited from calling outside 8 AM to 7 PM or intimidating relatives.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Resolving Recovery Harassment
              </h2>

              <div className="space-y-3">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900">Level 1: Bank Grievance Redressal Officer (GRO)</span>
                    <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">7-10 Days</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a formal complaint attaching call recordings and transcripts detailing RBI code violations. Resolution turnaround is 7 to 10 working days.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900">Level 2: Principal Nodal Officer (PNO)</span>
                    <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">14-21 Days</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If unresolved within 14 days, escalate to the bank Principal Nodal Officer to discipline recovery agencies and propose structured settlements within 14 to 21 days.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900">Level 3: RBI Integrated Ombudsman &amp; Consumer Commission</span>
                    <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">30 Days Max</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If unresolved after 30 days, lodge an online complaint at cms.rbi.org.in or file a petition before the District Consumer Commission (DCDRC) for compensation.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Procedural Timeline &amp; Resolution Milestones
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Procedural milestones from default to resolution:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-xs sm:text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200/80">
                      <th className="p-3.5 sm:p-4">Timeline Period</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200/80">Delinquency Status</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200/80">Recommended Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Days 1-30</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80 font-medium">SMA-0: First missed EMI, automated SMS alerts.</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Activate call recording on phone.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Days 31-60</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80 font-medium">SMA-1: Third-party agency assignment, frequent calls.</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Maintain call logs, record interactions.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Days 61-90</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80 font-medium">SMA-2: Pre-NPA notices issued.</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Compile hardship dossier and grievance notice.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Days 91-120</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80 font-medium">NPA Classification: Mandatory provisioning triggers.</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Formally submit audio evidence and propose OTS.</td>
                    </tr>
                    <tr className="hover:bg-emerald-50/40 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-emerald-900">Days 121-180</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80 font-medium text-emerald-800">Bilateral OTS &amp; Closure: Sanctioned OTS letter (40%-55% waiver).</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80 text-emerald-800 font-semibold">Remit settlement, obtain NDC, update CIBIL.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Real-World Default &amp; Call Recording Scenarios
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Managing complex recovery scenarios across varied debt profiles:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    <span>Multi-Lender Over-Leverage</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers facing dozens of daily collection calls across multiple cards and loans should centralize audio recordings by lender to maintain consistent evidence files.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    <span>Corporate Layoffs &amp; Income Loss</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When aggressive agents disregard documented termination letters or medical emergencies, recorded calls prove the lender ignored bona fide financial hardship.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    <span>MSME &amp; Business Defaults</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Business owners facing working capital distress must record calls to prevent unauthorized agent visits to business premises, protecting commercial goodwill.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    <span>ARC Debt Assignments</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When banks assign stressed loans to ARCs under Section 5 SARFAESI, recording calls ensures agencies verify chain-of-title before making collection demands.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions on Recording Recovery Agent Calls
              </h2>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full py-4 px-4 sm:px-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-[#1886ff] transition-colors"
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
                  <strong>Bharatiya Sakshya Adhiniyam, 2023:</strong> Section 63 (Electronic Records Admissibility).
                </li>
                <li>
                  <strong>Indian Evidence Act, 1872:</strong> Section 65B (Electronic Evidence Admissibility).
                </li>
                <li>
                  <strong>Bharatiya Nyaya Sanhita, 2023 (BNS):</strong> Sections 308 (Extortion) and 351 (Criminal Intimidation).
                </li>
                <li>
                  <strong>Reserve Bank of India:</strong> Master Direction on Fair Practices Code for Lenders.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Sections 35 &amp; 47 (Banking Deficiency).
                </li>
                <li>
                  <strong>Credit Information Companies Act, 2005 (CICRA):</strong> Section 21 (Dispute Resolution).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Official Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-medium inline-flex items-center gap-1 border border-blue-200">
                    <span>rbi.org.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-medium inline-flex items-center gap-1 border border-blue-200">
                    <span>cms.rbi.org.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-medium inline-flex items-center gap-1 border border-blue-200">
                    <span>cibil.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-medium inline-flex items-center gap-1 border border-blue-200">
                    <span>indiacode.nic.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-medium inline-flex items-center gap-1 border border-blue-200">
                    <span>nalsa.gov.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-medium inline-flex items-center gap-1 border border-blue-200">
                    <span>cybercrime.gov.in</span>
                    <ExternalLink className="w-3 h-3" />
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
                Specialized in banking compliance, arbitral defense, loan dispute resolution, and NPA settlement negotiations with deep expertise in electronic evidence.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <Link
                  href="/author/ashish-jhangra"
                  className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> CredSettle Panel
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card (Matching Image 2) */}
            <div
              className="rounded-3xl p-6 sm:p-7 text-white text-left space-y-4 shadow-lg relative overflow-hidden"
              style={{ backgroundColor: '#185be6' }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-bold text-white tracking-wide">
                <Lock className="w-3.5 h-3.5 text-white" />
                <span>100% CONFIDENTIAL</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                  Facing Recovery Harassment?
                </h3>
                <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal">
                  Stop illegal agent abuse, protect your dignity, and sue the bank for emotional distress. Get expert representation today.
                </p>
              </div>

              <div className="space-y-3 pt-1">
                <Link
                  href="/contact"
                  className="w-full py-3.5 px-4 rounded-2xl bg-white text-blue-900 hover:text-[#1886ff] font-bold text-sm sm:text-base text-center block transition-all shadow-sm hover:bg-slate-50"
                >
                  File a Harassment Lawsuit Against the Bank
                </Link>
                
                <a
                  href="tel:+918800226635"
                  className="w-full py-3 px-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm text-center flex items-center justify-center gap-2 transition-all border border-white/15"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Call: +91-8800226635</span>
                </a>
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
                  <span><strong>RBI Compliance:</strong> 100% lawful dispute handling.</span>
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
                    Bank Sent Legal Notice
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full step-by-step reply blueprint &rarr;</span>
                </Link>

                <Link
                  href="/bank-recovery-case-in-court"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Recovery Case in Court
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Civil suit defense &amp; summons guide &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled to Closed
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
